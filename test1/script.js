//Task 1
const regExp = /^\d+$/;
const containsOnlyNumber = (str) => {
    return regExp.test(str);
}


console.log(containsOnlyNumber('123'));
console.log(containsOnlyNumber('123lskdjf'));


//Task 2
const secondlyReturn = () => {
    setInterval(() => {
        console.log('Прошла секунда');
    }, 1000)
}


secondlyReturn()


//Task 3
const timerOneToTen = () => {
    let counter = 1;

    const interval = setInterval(() => {
        if (counter !== 11) {
            console.log(counter);
            counter++;
        } else {
            clearInterval(interval)
        }
    }, 1000)
}


timerOneToTen()


//Task 4
const buttonBlock = document.querySelector('.block');


buttonBlock.addEventListener('click', () => {
    if (buttonBlock.classList.contains('block')) {
        buttonBlock.classList.remove('block');
        buttonBlock.classList.add('another_block')
    } else if (buttonBlock.classList.contains('another_block')) {
        buttonBlock.classList.remove('another_block');
        buttonBlock.classList.add('block');
    }
})


//Task 5
const requestToJson = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'tipa_API/data.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        console.log(data)
    }
}


requestToJson()
