let btnStart = document.querySelector('.btn-start');
let inputStart = document.querySelector('.input-start');
let message = document.querySelector('.text-message');
let progressCircle = document.querySelector('.content-progressbar');
let formStart = document.querySelector('.form-start');
let number = document.querySelector('.inner .number');


progressCircle.classList.add('display-none');
btnStart.addEventListener('click', function() {
    let seconds = Number(inputStart.value.trim());
    inputStart.value = '';
    if (isNaN(seconds) || seconds === 0) {
        message.textContent = 'لطفا یک عدد بزرگتر از صفر وارد کنید';
        message.className = 'text-danger my-5';
        return;
    }

    formStart.classList.add('display-none');
    message.textContent = 'در حال انجام ...';
    message.className = 'text-danger my-5';
    progressCircle.classList.remove('display-none');
    number.textContent = seconds;

    let interval = setInterval(() => {
        if (seconds === 0) {
            clearInterval(interval);
            progressCircle.classList.add('display-none');
            formStart.classList.remove('display-none');
            message.textContent = 'شمارنده با موفقیت به پایان رسید';
            message.className = 'text-success my-5';
            return;
        }
        seconds -= 1;
        number.textContent = seconds;
    }, 1000)

})