// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happt birthday to me!`);
//     //debugger;

// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         //debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);


const names = ["Charlie", "Sampi", "Ali"];
const occasion = "birthday";
let message = [];

function writeCards (name, occasion) {
    for (let i = 0; i < names.length; i++) {
        message[i] = "Thank you, " + name[i] + ", for the wonderful " + occasion + " gift!";
    }
    return message;
    }

writeCards(names,occasion);
console.log(message);


/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);*/



function countDown(val) {
    let count = val;
    while (count >= 0) {
        console.log(count);
        count -= 1;
    }
}

countDown(10);