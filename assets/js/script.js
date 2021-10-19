const showBtn = document.querySelector('.js-CV')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showmyCV () {
    modal.classList.add('open')
}

function hidemyCV () {
    modal.classList.remove('open')
}
showBtn.addEventListener('click', showmyCV )

modalClose.addEventListener('click', hidemyCV )

modal.addEventListener('click', hidemyCV )
        
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
