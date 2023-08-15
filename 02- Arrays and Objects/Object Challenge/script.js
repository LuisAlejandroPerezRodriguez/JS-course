//Step 1
const library = [
    {
        title: 'The Candy House', 
        author: 'Jennifer Egan ', 
        status: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title: 'Checkout 19', 
        author: 'Claire-Louise Bennett', 
        status: {
            own: true,
            reading: true,
            read: false
        }
    },
    {
        title: 'Demon Copperhead', 
        author: 'Barbara Kingsolver', 
        status: {
            own: true,
            reading: true,
            read: false
        }
    }
    
]

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const {title:firstBook} = library[0];

//Step 4
const str = JSON.stringify(library);

console.log(library);