import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new MobileMenu()
new StickyHeader()
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if(typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default;
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(()=>console.log("A problem occurs"))
        } else {
            modal.openTheModal()
        }
    })
})

if(module.hot) {
    module.hot.accept()
}