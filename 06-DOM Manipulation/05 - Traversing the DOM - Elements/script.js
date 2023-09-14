let output;

// Get chil elements

const parent = document.querySelector('.padre');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;

parent.children[1].style.color = 'blue';
parent.children[1].innerText = 'KLK';

console.log(output);

//Get patent elements from a child

const child = document.querySelector('.hijo');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';
