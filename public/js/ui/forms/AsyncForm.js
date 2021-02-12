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
    console.log('constructor');
    if (element === undefined) {
      console.error('Async Form element undefined')
    } 
    this.element = element;
    this.registerEvents();
    console.log('constructor_passe');
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {

    this.element.addEventListener( 'submit', function(event) {
      
      console.log('submit event')
      //this.submit();
      event.preventDefault();
       } );
   // непонятно почему не работает, из консоли все ок
    
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {

  }

  onSubmit( options ) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    onSubmit( options ) 
      console.log( options ); // выведет данные, которые передаст onsubmit
    
  }
}
