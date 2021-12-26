let btnStart = document.querySelector('.btn-start');
let inputStart = document.querySelector('.input-start');
let message = document.querySelector('.text-message');
let progressCircle = document.querySelector('.content-progressbar');
let formStart = document.querySelector('.form-start');


progressCircle.classList.add('display-none');
btnStart.addEventListener('click', function() {
    let seconds = Number(inputStart.value.trim());
    if (isNaN(seconds) || seconds === 0) {
        message.textContent = 'لطفا یک عدد بزرگتر از صفر وارد کنید';
        message.className = 'text-danger my-5';
        return;
    }

    formStart.classList.add('display-none');
    message.textContent = 'در حال انجام ...'
    progressCircle.classList.remove('display-none');

})