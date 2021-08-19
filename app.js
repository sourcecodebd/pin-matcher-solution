function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else {
        console.log('Error! Got 3 digit and calling again!');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (e) {
    const number = e.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
        else if (number == '<') {
            const calcInputValue = calcInput.value;
            calcInput.value = calcInputValue.substr(0, calcInputValue.length - 1);
        }
    }
    else {
        //-----------------------------------------------------------
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
        //or
        // document.getElementById('typed-numbers').value += number;
        //-----------------------------------------------------------
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifyCorrect = document.getElementById('notify-correct-pin');
    const notifyWrong = document.getElementById('notify-wrong-pin');

    if (pin == typedNumbers) {
        notifyCorrect.style.display = 'block';
        setTimeout(function () {
            notifyCorrect.style.display = 'none';
        }, 5000);
        notifyWrong.style.display = 'none';
    }
    else {
        notifyWrong.style.display = 'block';
        setTimeout(function () {
            notifyWrong.style.display = '';
        }, 5000);
        notifyCorrect.style.display = '';
    }
}