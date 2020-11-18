class Modal {
    constructor () {
        this.injectHTML()
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
       this.closeIcon.addEventListener("click", () => this.closeTheModal())
       document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    openTheModal () {
        this.modal.classList.add("modal--is-visible")
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    closeTheModal () {
       this.modal.classList.remove("modal--is-visible")
    }
    
    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `<div class="modal">
        <div class="modal__inner">
            <div class="wrapper wrapper--narrow">
                <h2>Naturels</h2>
                <h3>Des produits 100% naturels</h3>
                <p class="modal__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio ipsa suscipit eaque, repudiandae unde ratione molestias quae pariatur! Deleniti quisquam eaque vitae itaque sint deserunt at blanditiis corrupti iure!</p>
                <div class="modal__close">X</div>
            </div>
        </div>
        </div>`)
    }

}

export default Modal;