const submitButton = document.querySelector('#submit').addEventListener('click', randomize);

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (min - 1 - max) + max + 1);
}

function randomize () {
	let length = document.querySelector('#length').value,
			output = '';

	const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9],
				letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'o', 'v', 'x', 'y', 'z'],
				symbolArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '\\', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'],
				symbols = document.querySelector('#symbols').checked;

	for (let i = 0; i < length; i++) {
		const x = getRandomInt(0, 1);

		//First 'IF' decides whether the character should be a number or a letter
		if (x === 0) {
			output += intArray[getRandomInt(0, 8)]
		} else if (x === 1 && symbols === true) {
			output += symbolArray[getRandomInt(0, 31)];
		} else {
			if (getRandomInt(0, 1) < 1) {
				output += letterArray[getRandomInt(0, 24)];
			} else {
				output += letterArray[getRandomInt(0, 24)].toUpperCase();
			}
		}
	}

	const feedback = document.querySelector('#feedback');
				feedback.textContent = output;
}
