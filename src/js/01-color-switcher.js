const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};
refs.stopBtn.setAttribute('disabled', 'disabled');
refs.startBtn.addEventListener('click', onHandleBtnStart);
refs.stopBtn.addEventListener('click', onHandleBtnStop);

let colorInterval = 0;

function onHandleBtnStart() {
    refs.startBtn.setAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled', 'disabled');
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}
function onHandleBtnStop() {
    clearInterval(colorInterval);
    refs.startBtn.removeAttribute('disabled', 'disabled');
    refs.stopBtn.removeAttribute('disabled', 'disabled');
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)
    }`;
}

// ==============================Some button`s styles=============================

refs.startBtn.style.padding = '10px'; 
refs.stopBtn.style.padding = '10px';
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.append(refs.startBtn, refs.stopBtn);
document.body.appendChild(buttonContainer);
const btnContainer = document.querySelector('.button-container');
btnContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 150px;
    `;
    
    


