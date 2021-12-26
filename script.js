let btnStart = document.querySelector('.btn-start');
let inputStart = document.querySelector('.input-start');
let message = document.querySelector('.text-message');
let progressCircle = document.querySelector('.content-progressbar');
let formStart = document.querySelector('.form-start');
let number = document.querySelector('.inner .number');
let leftProgress = document.querySelector('.bar.left .progressbar');
let rightProgress = document.querySelector('.bar.right .progressbar');


progressCircle.classList.add('display-none');
btnStart.addEventListener('click', function() {
    let leftSecond;
    let rightSecond;
    let leftSecondDeg;
    let rightSecondDeg;
    rightProgress.style.transform = `rotate(0deg)`;
    leftProgress.style.transform = `rotate(0deg)`;
    let seconds = Number(inputStart.value.trim());
    inputStart.value = '';
    if (isNaN(seconds) || seconds < 0 || seconds > 60) {
        message.textContent = 'لطفا یک عدد بین 0 و 60 ثانیه وارد کنید';
        message.className = 'text-danger my-5';
        return;
    }

    formStart.classList.add('display-none');
    message.textContent = 'در حال انجام ...';
    message.className = 'text-danger my-5';
    progressCircle.classList.remove('display-none');
    number.textContent = seconds;
    if (seconds > 30) {
        leftSecond = seconds - 30;
        rightSecond = 30;
        leftSecondDeg = (180 - (leftSecond * 6));
        leftProgress.style.transform = `rotate(-${leftSecondDeg}deg)`;
    } else {
        rightSecond = seconds;
        rightSecondDeg = (180 - (rightSecond * 6));
        rightProgress.style.transform = `rotate(-${rightSecondDeg}deg)`;
        leftSecond = 0;
        leftSecondDeg = (180 - (leftSecond * 6));
        leftProgress.style.transform = `rotate(-${leftSecondDeg}deg)`;
    }

    let interval = setInterval(() => {
        if (seconds === 0) {
            clearInterval(interval);
            progressCircle.classList.add('display-none');
            formStart.classList.remove('display-none');
            message.textContent = 'شمارنده با موفقیت به پایان رسید';
            message.className = 'text-success my-5';
            return;
        }
        if (seconds > 30) {
            leftSecond -= 1;
            leftSecondDeg = (180 - (leftSecond * 6));
            leftProgress.style.transform = `rotate(-${leftSecondDeg}deg)`;
        } else {
            rightSecond -= 1;
            rightSecondDeg = (180 - (rightSecond * 6));
            rightProgress.style.transform = `rotate(-${rightSecondDeg}deg)`;
        }
        seconds -= 1;
        number.textContent = seconds;

    }, 1000)

})