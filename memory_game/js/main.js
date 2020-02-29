let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[cardsInPlay.length - 1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}