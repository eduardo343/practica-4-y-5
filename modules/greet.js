console.log('hello from colima');
greet();

let greet = () => console.log('hello from the module');
module.exports = greet;