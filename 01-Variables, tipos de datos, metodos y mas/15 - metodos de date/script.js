let x;
let dt = new Date();

x = dt.getFullYear(); // Me da el ano
x = dt.getMonth() + 1; // Me da el mes
x = dt.getDay(); // Me dia de la semana
x = dt.getDate(); // Me dia del mes

x = Intl.DateTimeFormat('default').format(dt); //donde va el default ponemos la zona donde nos encontemos en-US
x = dt.toLocaleString('default', { month: 'long' });

x = dt.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: "numeric",
    second: 'numeric',
    timeZone: 'America/New_York',
})
console.log(x);