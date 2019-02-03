// OBJECT Destructuring

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name : publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ARRAY Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75', ['angry', 'sad']]

const [itemName, , mediumPrice] = item;
const [ang='g', s, n='g' ] = item[4];

console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log(ang);
console.log(n);