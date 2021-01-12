/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    
    document.getElementsByClassName('sidebar-toggle visible-xs')[0].onclick = function() {
      console.log(1234);
      if (document.getElementsByClassName('skin-blue sidebar-mini app')[0].classList.contains('sidebar-open')) {
        document.getElementsByClassName('skin-blue sidebar-mini app')[0].classList.remove('sidebar-open')
        document.getElementsByClassName('skin-blue sidebar-mini app')[0].classList.remove('sidebar-collapse')
      } else {
        document.getElementsByClassName('skin-blue sidebar-mini app')[0].classList.add('sidebar-open')
        document.getElementsByClassName('skin-blue sidebar-mini app')[0].classList.add('sidebar-collapse')
      }
    }

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
      const menuItems = Array.from(document.getElementsByClassName('menu-item'))
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = function(){
          if (menuItems[i].classList.contains('menu-item_login')) {
            App.getModal('login').open()
            App.getModal('login').registerEvents()
          } else if (menuItems[i].classList.contains('menu-item_register')) {
            App.getModal('register').open()
          } else if (menuItems[i].classList.contains('menu-item_logout')) {
            console.log(App.getModal('logout'))
          }
          console.log(345);
        }  
      }

    //const element = App.getModal()
  //modal = new Modal( element );

  }

}
