class MobileMenu {
    constructor () {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.siteHeader =  document.querySelector(".site-header")

        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () =>this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
        this.siteHeader.classList.toggle("site-header--is-visible")
    }
}

export default MobileMenu