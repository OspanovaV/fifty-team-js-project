const cardFilm = document.querySelector('.gallery');

const refsModal = {
    modal: document.querySelector('.modal-movie'),
    backdrop: document.querySelector('.backdrop-modal'),
    };

cardFilm.addEventListener('click', openCardFilm);

refsModal.backdrop.addEventListener('click', closeModalClick);

function openCardFilm (e) {
    e.preventDefault();
   
    if (!e.target.classList.contains('info-title') &&  !e.target.classList.contains('poster')) {
        return;
    } 
refsModal.backdrop.classList.remove('hide');
refsModal.backdrop.classList.add('is-open');
document.addEventListener('keydown', closeModalEsc);
document.removeEventListener('click', closeModalEsc);

}

function closeModalEsc(evt) {

    if (evt.code === "Escape") {

    refsModal.backdrop.classList.remove('is-open');
    document.removeEventListener('keydown', closeModalEsc);
    }
  };

function closeModalClick(e){
    const closeModal =  e.target.classList.contains('backdrop-modal');
    if(!closeModal) {
        return;
    } else {
        refsModal.backdrop.classList.remove('is-open');
        document.body.style.overflow = 'visible';
        document.removeEventListener('keydown', closeModalEsc);
        document.removeEventListener('click', closeModalClick);
    };
}



// (() => {
//     const refs = {
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
  
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
  
//     function toggleModal() {
//       document.body.classList.toggle("modal-open");
//       refs.modal.classList.toggle("is-hidden");
//     }
//   })();

const btnClose = document.querySelector('[data-modal-close]');
btnClose.addEventListener('click', () => {
    refsModal.backdrop.classList.add('hide');
})

// function closeBtn() {
   
// }