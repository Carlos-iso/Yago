let btnTuggle = document.querySelector(".btn-tuggle");

function openMenu(envent){
    if (envent.type === 'touchstart') envent.preventDefault();

    let nav = document.querySelector("#container-nav");
    nav.classList.toggle('mobile');
    const mobile = nav.classList.contains('mobile')
    envent.currentTarget.setAttribute('aria-expanded', mobile);
    if (mobile) {
        envent.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        envent.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    };
};

btnTuggle.addEventListener('click', openMenu);
btnTuggle.addEventListener('touchstart', openMenu);
