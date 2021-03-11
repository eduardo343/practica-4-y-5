let greet = () => {
    console.log('hello from greet1');
}
module.exports = greet;


//modulo regresa propiedad
module.exports.greet = function greet() {
    console.log('hello from greet 2');
}