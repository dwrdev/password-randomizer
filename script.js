const submitButton = document.querySelector('#submit').addEventListener('click', randomizePassword);

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (min - 1 - max) + max + 1);
}

function randomizePassword () {
	let	output = '';

	const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9],
				lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'o', 'v', 'x', 'y', 'z'],
				symbolsArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '\\', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'],
				symbols = document.querySelector('#symbols').checked,
				length = document.querySelector('#length').value;

	for (let i = 0; i < length; i++) {
		const x = getRandomInt(0, 1);

		if (x === 0) {
			output += intArray[getRandomInt(0, 8)]
		} else if (x === 1 && symbols === true) {
			output += symbolsArray[getRandomInt(0, 31)];
		} else {
			if (getRandomInt(0, 1) < 1) {
				output += lettersArray[getRandomInt(0, 24)];
			} else {
				output += lettersArray[getRandomInt(0, 24)].toUpperCase();
			}
		}
	}

	const result = document.querySelector('#result');
				result.textContent = output;
}
