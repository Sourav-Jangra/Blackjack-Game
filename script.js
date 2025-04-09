let player = {
	name: "Raghav",
	chips: 2000,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : ₹" + player.chips
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

console.log(cards)

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber === 1) {
		return 11
	} else if (randomNumber > 10) {
		return 10
	} else return randomNumber
}

function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()

	cards = [firstCard, secondCard]
	sum = firstCard + secondCard

	renderGame()
}

function renderGame() {
	cardEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum: " + sum

	if (sum < 21) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "Congrats! You won the game!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}

	messageEl.textContent = message
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let newCard = getRandomCard() // Renamed variable
		sum += newCard
		cards.push(newCard)
		renderGame()
	}
}
