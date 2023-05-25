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

        this.nombre=nom
    }

        get getEdad(){
            return this.edad;
        }
     saludar(){
        /**imprime en html el saludo con el nombre de la persona */
        return `Hola soy ${this.nombre}  ` 
    }

    static esMayorDeEdad(edad){

        if (edad >18){
            return true
        }
        else{
            return false
        }

    }
}

let persona1= new Persona({nombre:"laura",edad:19,sexo:"Femenino"});
console.log(persona1);

console.log(persona1.saludar())

class Estudiante extends Persona{
    carrera
    constructor({nombre,edad,sexo,carrera}){
        super({nombre,edad,sexo})
    }

    get getCarrera(){
        return this.carrera;
        }
    
    set setCarrera(carre){
        this.carrera=carre;}

     estudiar(){
        /** imprime en html la carrera que esta estudiando*/
        return document.getElementById("x").innerHTML=`<p>estudio la carrera: ${this.carrera}<p>`
    }


}

let estudiante1=new Estudiante({carrera:"tt"});
estudiante1.setCarrera="i";
console.log(estudiante1.estudiar());
console.log(Estudiante.esMayorDeEdad(persona1.getEdad));

function n(){
 let acumular = [];

 let formulario = document.querySelector("#formu");
     formulario.addEventListener("submit", (e) => {
     e.preventDefault()
     let obtener = Object.fromEntries(new FormData(e.target))
     acumular.unshift(obtener)   
     formulario.reset();   
     const obj = acumular;
     console.log(acumular,"no   ");
     //console.log(obj.codigo, typeof(acumular.at(-1)))
     console.log();
 })}
