import throttle from 'lodash/throttle'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        
    }

    runOnScroll() {
        if(window.scrollY > 100) {
            this.siteHeader.classList.add("site-header--sticky")
        } else {
            this.siteHeader.classList.remove("site-header--sticky")
        }
        
    }
}


export default StickyHeader