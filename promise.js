// Find y for given value of x of simple equation y = 2x + 1

function multiplyBy2(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    });
}

function add1(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 1000);
    });
}

function calculate_y(x) {
    multiplyBy2(x).
        then((multiplied) => {
            return add1(multiplied)
        }).then((result) => {
            console.log(result)
        })
}

calculate_y(2)