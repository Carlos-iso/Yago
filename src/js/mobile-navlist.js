class mobileNavbar {
    constructor(btnTuggle, containerOpsUl, navlinks){

        this.btnTuggle = document.querySelector(btnTuggle);

        this.containerOpsUl = document.querySelector(containerOpsUl);

        this.navlinks = document.querySelector(navlinks);

        this.activeClass = "active";
    }

    clickEvent(){
        this.mobileMenu.addEventListener("click", ()=> console.log("olá"));
    }

    init(){
        if (this.btnTuggle) {
            this.clickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar(
    ".btn-tuggle",
    ".container-ops-ul",
    ".container-ops-ul li",
);
mobileNavbar.init();