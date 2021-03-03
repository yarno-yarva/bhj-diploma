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
    //console.log('Modal constructor');
     if (element === undefined) {
       console.error('Modal element undefined')
     } 
     this.element = element;
     this.registerEvents();

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {

    this.onClose = this.onClose.bind( this );
    let close = Array.from(document.querySelectorAll('[data-dismiss = "modal"]'))
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener( 'click', this.onClose );
   }
  }
  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (close.length)
   * */
  onClose( e ) {
    
    this.close()
    
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    this.element.removeEventListener( 'click', this.onClose );
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
  