let output;

output = document.all;
output = document.head;
output = document.head.children;
output = document.domain;
output = document.URL;
//output = document.forms; // me da los formularios del html

//document.forms[0].id = "NuevoID" // cambio el id del foro
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = 'google-id';
output = document.links[0].className = 'link';
output = document.links[0].classList;

console.log(output);
