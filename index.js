function writeCards(names, eventName) {
    const thankYouMessages = [];

     for (let i = 0;i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
     }
     
     return thankYouMessages;
}
    
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

const messages = writeCards(namesArray, eventName)


console.log(messages);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Code your solutions in this file
