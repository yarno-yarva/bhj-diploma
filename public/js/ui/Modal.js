/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
     this.element = element;

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    let close = Array.from(document.querySelectorAll('[data-dismiss = "modal"]'))
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
       
        // так неправильно, надо через метод Modal.onClose
        close[i].closest('.modal').style.display = 'none'
        //.element.style.display = 'none'
       // console.log(close[i].onClose(close[i]));
        //console.log('vod close')
        //close[i].onClose(close[i]);
        //Modal.onClose(i);
      }
    }
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (close.length)
   * */
  onClose( e ) {

    //сейчас неправильно
      e.closest('.modal').element.style.display = 'none'
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {

  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block'

  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none' 
  }
}
