let d;

d = new Date(); //Me da la fecha y el tiempo y es un objeto
d = d.toString(); // Lo convierte a un string
d = new Date(2021,0,10,12,30,0); //Poniendo una fecha en especifo
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');

d = Date.now(); //me da los milisegundos
d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1692034553521);

console.log(d);