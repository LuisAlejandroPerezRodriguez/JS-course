// console.log(window.document); //observar el documento HTML
//console.dir(window.document); //Ver todas las propiedades del objeto document
//console.log(document.body.innerText); //Observar el texto que hay en la etiqueta body

//Hay metodos para ver esta propiedades sin nececidad de hacer lo de arriba

//console.log(document.links[0]); //acceder a los links como si fueran arreglos

//Tambien podemos modificar el HTML en el codigo

//document.body.innerHTML = '<h1> Hello World</h1>'; //Va a remplazar todo lo que esta en el body por ese H1 que le pasamos

//document.write('Hello from JS'); //Agrega texo al final del archivo (no se utiliza)

console.log(document.getElementById('main'));

//const main = document.getElementById('main');

//main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello'; //Cambia solamente el h1
