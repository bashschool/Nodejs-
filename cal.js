function calculator() {
    console.log("this module is for cal func")
}


function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

module.exports = {
    hello123: add,
    world456: sub,
    world: multiply,
    name: "this module is for cal func"
}

module.exports.hello1234 = add
module.exports.sub = sub
module.exports.multiply = multiply
module.exports = calculator
