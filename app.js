/*onsole.log('Start')
setTimeout(() => {
    console.log('Inside timeout')
}, 0);
console.log('End')*/

//---------------------//

// Find y for given value of x of simple equation y = 2x + 1

function multiplyBy2(value) {
    setTimeout(() => {
        return value * 2;
    }, 2000);
}

function add1(value) {
    setTimeout(() => {
        return value + 1;
    }, 1000);
}

function calculate_y(x) {
    const multiplied = multiplyBy2(x);
    const result = add1(multiplied);
    console.log(result);
}

calculate_y(2)