let btnStart = document.querySelector('.btn-start');
let number = document.querySelector('.inner .number');
let inputStart = document.querySelector('.input-start');
let seconds;

btnStart.addEventListener('click', function() {
    showProgressBar(60);
    seconds = Number(inputStart.value.trim());
    if (isNaN(seconds) || seconds < 0 || seconds > 60) return showAlert('danger', 'لطفا یک عدد بین 0 و 60 ثانیه وارد کنید');


    showFormStart({ show: false });
    showAlert('danger', 'در حال انجام ...');
    showProgressBar(seconds);

    let interval = setInterval(() => {
        if (seconds === -1) {
            clearInterval(interval);
            showFormStart({ show: true });
            showAlert('success', 'شمارنده با موفقیت به پایان رسید');
            return;
        }
        number.textContent = seconds;
        showProgressBar(seconds);
        seconds -= 1;
    }, 1000)

})


const showAlert = (statusAlert, textAlert) => {
    let message = document.querySelector('.text-message');

    message.textContent = textAlert;
    message.className = `text-message text-${statusAlert} my-5`;

}

const showProgressBar = (seconds) => {
    let leftProgress = document.querySelector('.bar.left .progressbar');
    let rightProgress = document.querySelector('.bar.right .progressbar');
    let leftSecond, rightSecond, leftSecondDeg, rightSecondDeg;
    if (seconds > 30) {
        leftSecond = seconds - 30;
        leftSecondDeg = (180 - (leftSecond * 6));
        leftProgress.style.transform = `rotate(-${leftSecondDeg}deg)`;
        rightProgress.style.transform = `rotate(0deg)`;
    } else {
        rightSecond = seconds;
        rightSecondDeg = (180 - (rightSecond * 6));
        rightProgress.style.transform = `rotate(-${rightSecondDeg}deg)`;
        leftProgress.style.transform = `rotate(-180deg)`;
    }
}


const showFormStart = ({ show }) => {
    let progressCircle = document.querySelector('.content-progressbar');
    let formStart = document.querySelector('.form-start');

    if (show) {
        formStart.classList.remove('display-none');
        progressCircle.classList.add('display-none');
        inputStart.value = '';
    } else {
        formStart.classList.add('display-none');
        progressCircle.classList.remove('display-none');
        number.textContent = seconds;
    }
}
showFormStart({ show: true });