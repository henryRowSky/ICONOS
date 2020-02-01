let persona = {
    nombre: `kikirikikin`,
    apellido: `Lpz Fl`,
    edad: 30,
    saludar: function() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años de edad`);
    }
}

let animal = {
    tipo: `felino`,
    raza: `ingles`,
    nombre: `happy`,
    edad: 3,
    patas: 4,
    info: function() {
        console.log(`${this.nombre} es un ${this.tipo} de raza ${this.raza} y de edad de ${this.edad} años`);
    }
}

animal.info();
persona.saludar();