let x;
let dt = new Date();

x = dt.getFullYear(); // Me da el ano
x = dt.getMonth() + 1; // Me da el mes
x = dt.getDay() ; // Me dia de la semana
x = dt.getDate() ; // Me dia del mes

x = Intl.DateTimeFormat('default').format(d); //donde va el default ponemos la zona donde nos encontemos en-US
x = d.toLocaleString('default',{ month: 'long'});

console.log(x);