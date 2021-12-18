// Find y for given value of x of simple equation y = 2x + 1

function multiplyBy2(value, callback) {
    setTimeout(() => {
        callback(value * 2);
    }, 2000);
}

function add1(value, callback) {
    setTimeout(() => {
        callback(value + 1);
    }, 1000);
}

function calculate_y(x) {
    multiplyBy2(x, multiplied => {
        console.log('multiplied: ', multiplied);
        add1(multiplied, (result) => {
            console.log('result: ', result);
        });
    });
}

calculate_y(2)