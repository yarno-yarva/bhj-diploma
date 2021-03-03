/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
    if (element === undefined) {
      console.error('Async Form element undefined')
    } 
    this.element = element;
    this.registerEvents();
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    var me = this;
    this.element.addEventListener( 'submit', function(event) {
      event.preventDefault();     
      //console.log('in submit listener');
      me.submit();
    } );
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const formData = new FormData( this.element ),
      entries = formData.entries();
    let data = {};
    for (let item of entries) {
      let keys = item[ 0 ], value = item[ 1 ];
      data[keys] = `${item[1]}`;
     // console.log( `${keys}: ${value}` );     
    }
    //console.log(data);
    return data;
  }

  onSubmit( options ) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    //console.log( this.getData()); // выведет данные, которые передаст onsubmit    
    this.onSubmit( this.getData() ) 
  }
}
