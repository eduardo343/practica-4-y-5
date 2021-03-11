function greetr() {
    this.greeting = "hello from de function";
    this.greet = function (){
        console.log(this.greeting);
    
    }
}
module.exports = new greetr;