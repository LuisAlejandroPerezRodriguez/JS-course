// document.getElementById()
console.log(document.getElementById('titulo'));
console.log(document.getElementById('titulo').getAttribute('id'));

// Set attributes
document.getElementById('titulo').title = 'Lo que tu quiera';
document.getElementById('titulo').setAttribute('class', 'title');
const title = document.getElementById('titulo');

// Get/change content
title.textContext = 'Hello world';
title.innerText = 'Hello again';

// Change styles
title.style.backgroundColor = 'gren';

document.querySelector('h1');
//Con el querySelector puedo hacer lo mismo que hice arriba y concatenar metodos
