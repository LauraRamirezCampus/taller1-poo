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
            return `es mayor de edad`
        }
        else{
            return `no es mayor de edad`
        }

    }
}

let persona1= new Persona({nombre:"jose",edad:19,sexo:"masculino"});
console.log(persona1);

console.log(persona1.saludar())

class Estudiante extends Persona{
    carrera
    constructor({nombre,edad,sexo,carrera}){
        super({nombre,edad,sexo})
        this.carrera=carrera;
    }

    get getCarrera(){
        return this.carrera;
        }
    
    set setCarrera(carrera){
        this.carrera=carrera;}

     estudiar(){
        /** imprime en html la carrera que esta estudiando*/
        return `<p>estudio la carrera: ${this.carrera}<p>`
    }


}

let estudiante1=new Estudiante({carrera:"sistemas"});

console.log(estudiante1.estudiar());
console.log(Estudiante.esMayorDeEdad(persona1.getEdad));




 let formulario = document.getElementById("formu");
     formulario.addEventListener("submit", (e) => {
     e.preventDefault()
     let data = Object.fromEntries(new FormData(e.target))
     const persona=new Persona(data)
     persona.saludar();
     document.getElementById("x").innerHTML=`<p>${persona.saludar()}</p>`;
     formulario.reset();   
      const carrera = data.carrera;
     console.log(carrera,"m");
    const estu = new Estudiante({ nombre: persona.nombre, carrera });
    document.getElementById("est").innerHTML=estu.estudiar();
    console.log(data,"no   ");
    
    const esMayorDeEdad= Persona.esMayorDeEdad(persona1.edad);
    document.querySelector('#mayor').innerHTML = `<p>La Persona  1: ${persona1.nombre} es ${esMayorDeEdad} ya que tiene ${persona1.getEdad} años.</p>`;
 })
