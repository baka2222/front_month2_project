// Task 1
const extractNums = (str) => {
    let numberList = [];

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numberList.push(str[i]);
        }
    }

    return numberList;
}


// Task 2
function fibonacciWithDelay(a = 0, b = 1) {
    console.log(a);

    if (b <= 144) {
        setTimeout(() => {
            fibonacciWithDelay(b, a + b);
        }, 1000);
    }
}

fibonacciWithDelay();


// Task 3
const logProducts = async () => {
    const request = await fetch('https://fakestoreapi.com/products');
    const products = await request.json();

    products.forEach(product => {
        console.log(product.title)
    })
}


logProducts();


// Task 4
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const purple = document.querySelector('.purple');
const black = document.querySelector('.black');
const white = document.querySelector('.white');


document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('red')) {
        document.body.style.backgroundColor = 'red';
    } else if (e.target.classList.contains('blue')) {
        document.body.style.backgroundColor = 'blue';
    } else if (e.target.classList.contains('white')) {
        document.body.style.backgroundColor = 'white';
    } else if (e.target.classList.contains('black')) {
        document.body.style.backgroundColor = 'black';
    } else if (e.target.classList.contains('purple')) {
        document.body.style.backgroundColor = 'purple';
    }
})


// Task 5
const toggleButton = document.getElementById('toggleButton');
const toggleBlock = document.getElementById('toggleBlock');


let isBlockVisible = true;

toggleButton.addEventListener('click', () => {
    if (isBlockVisible) {
        toggleBlock.style.display = 'none';
    } else {
        toggleBlock.style.display = 'block';
    }
    isBlockVisible = !isBlockVisible;
});


// Task 6
const num = document.querySelector('.number');
let counterValue = 0;

const interval = setInterval(() => {
    counterValue++;
    num.innerText = counterValue;

    if (counterValue >= 100) {
        clearInterval(interval);
    }
}, 1);


// Task 7
const buttonRequest = document.getElementById('request');


buttonRequest.onclick = async () => {
    try {
        const request = await fetch('data.json');
        const data = await request.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


