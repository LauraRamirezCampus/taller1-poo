class Persona{
    nombre
    edad
    sexo
    constructor({nombre,edad,sexo}){

        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nom){

        this.nombre=nom;
    }

     saludar(){
        /**imprime en html el saludo con el nombre de la persona */
        return `Hola ${this.nombre}  ` 
    }
}

let persona1= new Persona({nombre:"laura",edad:"19 años",sexo:"Femenino"});
console.log(persona1);

console.log(persona1.saludar())

class Estudiante extends Persona{
    carrera
    constructor(carrera){

    }

    estudiar(){

        
        /** */
    }

}