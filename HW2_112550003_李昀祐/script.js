/* <!--112550003 李昀祐 第II次作業 10/11 112550003 Yun-Yu, Lee The Second Homework 10/11 --> */
function processNumbers() {

    const inputs = [
        document.getElementById("num1"),
        document.getElementById("num2"),
        document.getElementById("num3"),
        document.getElementById("num4"),
        document.getElementById("num5"),
        document.getElementById("num6"),
        document.getElementById("num7"),
        document.getElementById("num8")
    ];

    let isValid = true;

    
    inputs.forEach(input => {
        input.style.border = ""; // reset
    });

    // check 1~999
    inputs.forEach(input => {
        const value = input.value.trim(); // space
        const parsedValue = parseInt(value, 10);

        if (!/^\d+$/.test(value) || parsedValue < 1 || parsedValue > 999) {
            input.style.border = "2px solid red"; // invalid number red border
            isValid = false;
        }
    });

    if (!isValid) {
        alert("Please enter valid integers between 1 and 999 in all fields.");
        return;
    }

    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);
    const num3 = parseInt(document.getElementById("num3").value, 10);
    const num4 = parseInt(document.getElementById("num4").value, 10);
    const num5 = parseInt(document.getElementById("num5").value, 10);
    const num6 = parseInt(document.getElementById("num6").value, 10);
    const num7 = parseInt(document.getElementById("num7").value, 10);
    const num8 = parseInt(document.getElementById("num8").value, 10);

    displayImages(num1, num2, num3, num4, num5, num6, num7, num8);
    displayMax(num1, num2, num3, num4, num5, num6, num7, num8);
    displayMin(num1, num2, num3, num4, num5, num6, num7, num8);
    displayMedian(num1, num2, num3, num4, num5, num6, num7, num8);
    displayPrimes(num1, num2, num3, num4, num5, num6, num7, num8);
    displayArmstrong(num1, num2, num3, num4, num5, num6, num7, num8);
    displayFibonacci(num1, num2, num3, num4, num5, num6, num7, num8);

    document.getElementById("max-header").style.display = "block";
    document.getElementById("min-header").style.display = "block";
    document.getElementById("median-header").style.display = "block";
    document.getElementById("prime-header").style.display = "block";
    document.getElementById("armstrong-header").style.display = "block";
    document.getElementById("fibonacci-header").style.display = "block";
}


function displayImages(num1, num2, num3, num4, num5, num6, num7, num8) {
    const imageContainer = document.getElementById("number-images");
    imageContainer.innerHTML = ''; 

    // to append image for each digit without using arrays
    function appendImageForNumber(number) {
        let numberStr = String(number);
        for (let i = 0; i < numberStr.length; i++) {
            let digit = numberStr[i];
            let img = document.createElement("img");
            img.src = `images/${digit}.png`; // number image
            imageContainer.appendChild(img);
        }
        imageContainer.appendChild(document.createElement("br"));
    }

    appendImageForNumber(num1);
    appendImageForNumber(num2);
    appendImageForNumber(num3);
    appendImageForNumber(num4);
    appendImageForNumber(num5);
    appendImageForNumber(num6);
    appendImageForNumber(num7);
    appendImageForNumber(num8);
}

function displayNumberAsImages(number, container) {
    // from number to img
    let numberStr = String(number);
    container.innerHTML = ''; 

    for (let i = 0; i < numberStr.length; i++) {
        let digit = numberStr[i];

        if (digit === '.') {
            // let textNode = document.createTextNode('.'); // decimal point
            // container.appendChild(textNode); 
            let img = document.createElement("img");
            img.src = `images/decimal-point.png`; // number image
            container.appendChild(img); 
        } else {
            let img = document.createElement("img");
            img.src = `images/${digit}.png`; // number image
            container.appendChild(img); 
        }
    }
}

function displayMax(num1, num2, num3, num4, num5, num6, num7, num8) {
    const maxNumber = Math.max(num1, num2, num3, num4, num5, num6, num7, num8);
    const maxContainer = document.getElementById("max");
    displayNumberAsImages(maxNumber, maxContainer);
}

function displayMin(num1, num2, num3, num4, num5, num6, num7, num8) {
    const minNumber = Math.min(num1, num2, num3, num4, num5, num6, num7, num8);
    const minContainer = document.getElementById("min");
    displayNumberAsImages(minNumber, minContainer);
}

function displayMedian(num1, num2, num3, num4, num5, num6, num7, num8) {
    let n1 = num1, n2 = num2, n3 = num3, n4 = num4;
    let n5 = num5, n6 = num6, n7 = num7, n8 = num8;

    // Bubble Sort 
    function swapIfGreater(a, b) {
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        return { a, b };
    }

    for (let i = 0; i < 7; i++) {
        // bubble sort n1~n8
        let result = swapIfGreater(n1, n2); n1 = result.a; n2 = result.b;
        result = swapIfGreater(n2, n3); n2 = result.a; n3 = result.b;
        result = swapIfGreater(n3, n4); n3 = result.a; n4 = result.b;
        result = swapIfGreater(n4, n5); n4 = result.a; n5 = result.b;
        result = swapIfGreater(n5, n6); n5 = result.a; n6 = result.b;
        result = swapIfGreater(n6, n7); n6 = result.a; n7 = result.b;
        result = swapIfGreater(n7, n8); n7 = result.a; n8 = result.b;
    }

    let median;
    median = (n4 + n5) / 2;
    // console.log(median);
    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
    // console.log(n4);
    // console.log(n5);
    // console.log(n6);
    // console.log(n7);
    // console.log(n8);

    const medianContainer = document.getElementById("median");
    displayNumberAsImages(median, medianContainer); 
}


// check prime
function isPrime(num) {
    if (num <= 1 || num % 1 !== 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function displayPrimes(num1, num2, num3, num4, num5, num6, num7, num8) {
    let n1 = num1, n2 = num2, n3 = num3, n4 = num4;
    let n5 = num5, n6 = num6, n7 = num7, n8 = num8;

    // bubble Sort 
    function swapIfGreater(a, b) {
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        return { a, b };
    }

    for (let i = 0; i < 7; i++) {
        // bubble sort n1~n8
        let result = swapIfGreater(n1, n2); n1 = result.a; n2 = result.b;
        result = swapIfGreater(n2, n3); n2 = result.a; n3 = result.b;
        result = swapIfGreater(n3, n4); n3 = result.a; n4 = result.b;
        result = swapIfGreater(n4, n5); n4 = result.a; n5 = result.b;
        result = swapIfGreater(n5, n6); n5 = result.a; n6 = result.b;
        result = swapIfGreater(n6, n7); n6 = result.a; n7 = result.b;
        result = swapIfGreater(n7, n8); n7 = result.a; n8 = result.b;
    }

    const imageContainer = document.getElementById("prime-numbers");
    imageContainer.innerHTML = ''; 

    function appendImageForNumber(number) {
        let numberStr = String(number);
        for (let i = 0; i < numberStr.length; i++) {
            let digit = numberStr[i];
            let img = document.createElement("img");
            img.src = `images/${digit}.png`; // number image
            imageContainer.appendChild(img);
        }
        imageContainer.appendChild(document.createElement("br"));
    }

    if(isPrime(n1)) appendImageForNumber(n1);
    if(isPrime(n2)) appendImageForNumber(n2);
    if(isPrime(n3)) appendImageForNumber(n3);
    if(isPrime(n4)) appendImageForNumber(n4);
    if(isPrime(n5)) appendImageForNumber(n5);
    if(isPrime(n6)) appendImageForNumber(n6);
    if(isPrime(n7)) appendImageForNumber(n7);
    if(isPrime(n8)) appendImageForNumber(n8);

    // if(isPrime(n1)) console.log(n1);
    // if(isPrime(n2)) console.log(n2);
    // if(isPrime(n3)) console.log(n3);
    // if(isPrime(n4)) console.log(n4);
    // if(isPrime(n5)) console.log(n5);
    // if(isPrime(n6)) console.log(n6);
    // if(isPrime(n7)) console.log(n7);
    // if(isPrime(n8)) console.log(n8);

}

// check armstrong
function isArmstrong(num) {
    let originalNum = num;
    let sum = 0;
    let digits = 0;

    let temp = num;
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);  
    }

    temp = num;
    while (temp > 0) {
        let digit = temp % 10; 
        sum += Math.pow(digit, digits);  
        temp = Math.floor(temp / 10);
    }

    return sum === originalNum;
}

function displayArmstrong(num1, num2, num3, num4, num5, num6, num7, num8) {
    let n1 = num1, n2 = num2, n3 = num3, n4 = num4;
    let n5 = num5, n6 = num6, n7 = num7, n8 = num8;

    // bubble Sort 
    function swapIfGreater(a, b) {
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        return { a, b };
    }

    for (let i = 0; i < 7; i++) {
        // bubble sort n1~n8
        let result = swapIfGreater(n1, n2); n1 = result.a; n2 = result.b;
        result = swapIfGreater(n2, n3); n2 = result.a; n3 = result.b;
        result = swapIfGreater(n3, n4); n3 = result.a; n4 = result.b;
        result = swapIfGreater(n4, n5); n4 = result.a; n5 = result.b;
        result = swapIfGreater(n5, n6); n5 = result.a; n6 = result.b;
        result = swapIfGreater(n6, n7); n6 = result.a; n7 = result.b;
        result = swapIfGreater(n7, n8); n7 = result.a; n8 = result.b;
    }

    const imageContainer = document.getElementById("armstrong-numbers");
    imageContainer.innerHTML = ''; 

    function appendImageForNumber(number) {
        let numberStr = String(number);
        for (let i = 0; i < numberStr.length; i++) {
            let digit = numberStr[i];
            let img = document.createElement("img");
            img.src = `images/${digit}.png`; // number image
            imageContainer.appendChild(img);
        }
        imageContainer.appendChild(document.createElement("br"));
    }

    if(isArmstrong(n1)) appendImageForNumber(n1);
    if(isArmstrong(n2)) appendImageForNumber(n2);
    if(isArmstrong(n3)) appendImageForNumber(n3);
    if(isArmstrong(n4)) appendImageForNumber(n4);
    if(isArmstrong(n5)) appendImageForNumber(n5);
    if(isArmstrong(n6)) appendImageForNumber(n6);
    if(isArmstrong(n7)) appendImageForNumber(n7);
    if(isArmstrong(n8)) appendImageForNumber(n8);

    // if(isArmstrong(n1)) console.log(n1);
    // if(isArmstrong(n2)) console.log(n2);
    // if(isArmstrong(n3)) console.log(n3);
    // if(isArmstrong(n4)) console.log(n4);
    // if(isArmstrong(n5)) console.log(n5);
    // if(isArmstrong(n6)) console.log(n6);
    // if(isArmstrong(n7)) console.log(n7);
    // if(isArmstrong(n8)) console.log(n8);

}

// check is fibonacci
function isFibonacci(num) {
    function isPerfectSquare(num) {
        let sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
    }

    // check 5n^2 + 4 or 5n^2 - 4
    let check1 = 5 * num * num + 4;
    let check2 = 5 * num * num - 4;

    return isPerfectSquare(check1) || isPerfectSquare(check2);
}

function displayFibonacci(num1, num2, num3, num4, num5, num6, num7, num8) {
    let n1 = num1, n2 = num2, n3 = num3, n4 = num4;
    let n5 = num5, n6 = num6, n7 = num7, n8 = num8;

    // bubble Sort 
    function swapIfGreater(a, b) {
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        return { a, b };
    }

    for (let i = 0; i < 7; i++) {
        // bubble sort n1~n8
        let result = swapIfGreater(n1, n2); n1 = result.a; n2 = result.b;
        result = swapIfGreater(n2, n3); n2 = result.a; n3 = result.b;
        result = swapIfGreater(n3, n4); n3 = result.a; n4 = result.b;
        result = swapIfGreater(n4, n5); n4 = result.a; n5 = result.b;
        result = swapIfGreater(n5, n6); n5 = result.a; n6 = result.b;
        result = swapIfGreater(n6, n7); n6 = result.a; n7 = result.b;
        result = swapIfGreater(n7, n8); n7 = result.a; n8 = result.b;
    }

    const imageContainer = document.getElementById("fibonacci-numbers");
    imageContainer.innerHTML = ''; 

    function appendImageForNumber(number) {
        let numberStr = String(number);
        for (let i = 0; i < numberStr.length; i++) {
            let digit = numberStr[i];
            let img = document.createElement("img");
            img.src = `images/${digit}.png`; // number image
            imageContainer.appendChild(img);
        }
        imageContainer.appendChild(document.createElement("br"));
    }

    if(isFibonacci(n1)) appendImageForNumber(n1);
    if(isFibonacci(n2)) appendImageForNumber(n2);
    if(isFibonacci(n3)) appendImageForNumber(n3);
    if(isFibonacci(n4)) appendImageForNumber(n4);
    if(isFibonacci(n5)) appendImageForNumber(n5);
    if(isFibonacci(n6)) appendImageForNumber(n6);
    if(isFibonacci(n7)) appendImageForNumber(n7);
    if(isFibonacci(n8)) appendImageForNumber(n8);

    // if(isFibonacci(n1)) console.log(n1);
    // if(isFibonacci(n2)) console.log(n2);
    // if(isFibonacci(n3)) console.log(n3);
    // if(isFibonacci(n4)) console.log(n4);
    // if(isFibonacci(n5)) console.log(n5);
    // if(isFibonacci(n6)) console.log(n6);
    // if(isFibonacci(n7)) console.log(n7);
    // if(isFibonacci(n8)) console.log(n8);

}
