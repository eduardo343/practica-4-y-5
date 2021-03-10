let persona = { 
nombre: "alan",
apellido: "saucedo"
getName: function (){
    return `${this.nombre} ${this.apellido}`
},
domicilio: {
    calle: "ramon bentacourt #426",
    colonia: "centro",
    cp: 2898
    municipio: "colima"
}
console.log(persona.domicilio);