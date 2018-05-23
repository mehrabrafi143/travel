import $ from 'jquery';

class MenuItem{
    constructor(){
       this.menuIcon = $(".site-header__menu-icon");
       this.menuContent = $(".site-header__content");
       this.siteHeader = $(".site-header");
       this.events();
    }

    events(){
        this.menuIcon.on("click",this.openMenu.bind(this));
    }

    openMenu(){
        this.menuContent.toggleClass("site-header__content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expand");
        this.menuIcon.toggleClass("site-header__menu-icon--x");
    }
}
  
export default MenuItem;