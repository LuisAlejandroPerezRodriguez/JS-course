const elements = document.querySelectorAll('.elmento');
//Puse el nombre de la clase ya que no quiero alterar las de mas listas de la pagina

console.log(elements);

elements.forEach((item, index) => {
  item.style.color = 'blue';

  if (index === 1) {
    item.remove();
  }
});
