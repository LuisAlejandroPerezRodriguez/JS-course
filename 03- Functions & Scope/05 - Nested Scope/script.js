function frist() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); //Puedo acceder a x desde la funcion hijo o anidada a la primera
  }

  second();
  console.log(y); // No funciona ya que no puedo acceder a una variable de una funcion hijo
}

// Lo mismo sucede con los bloques

if (true) {
  const x = 400;
  if (x === 400) {
    const y = 100;
    console.log(x + y);
  }
}
