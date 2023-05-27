class Animal{
    nombre
    edad
    constructor({nombre,edad}){

        this.nombre=nombre;
        this.edad=edad;
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
     hacerSonido(){
        /**imprime en html su sonido */
        return `guau guau ` 
    }

}

let animal1= new Animal({nombre:"lupe",edad:2});
console.log(animal1);

console.log(animal1.hacerSonido())

class Perro extends Animal{
    raza
    constructor({nombre,edad,raza}){
        super({nombre,edad})
        this.raza=raza;
    }

    get getRaza(){
        return this.raza;
        }
    
    set setRaza(raza){
        this.raza=raza;}

     moverCola(){
        /** imprime en html la carrera que esta estudiando*/
        return `<p>El perro ${this.nombre} esta moviendo la cola<p>`
    }


}






 let formulario = document.getElementById("formu");
     formulario.addEventListener("submit", (e) => {
     e.preventDefault()
     let data = Object.fromEntries(new FormData(e.target))
     const animal=new Animal(data)
     //Animal.hacerSonido();
     document.getElementById("x").innerHTML=`<p>${animal.hacerSonido()}</p>`;
     formulario.reset();   
      const raza = data.raza;
     console.log(raza,"m");
    const perr = new Perro({ nombre: animal.nombre, raza });
    document.getElementById("est").innerHTML=perr.hacerSonido();
    console.log(data,"no   ");
    
     //const moverCola = Perro.moverCola();
    document.querySelector('#mayor').innerHTML = perr.moverCola();;
 })
