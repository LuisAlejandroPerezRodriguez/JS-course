const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

socials.forEach(function (item) {
  console.log(item);
});

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebokk.com' },
];
socialObjs.forEach((item) => console.log(item));
