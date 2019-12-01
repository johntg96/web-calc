// calc.js

var calcMem = [];
var display = [];
var zero = '0';
var result;

var screen = document.querySelector('#display');

function updateDisplay(toDisplay) {
	screen.innerHTML = "<span style='font-size:3em; line-height:2em;'>" + toDisplay + "</span>";
}

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function calculate(num1, operator, startingPoint) {
	var num2;

	for (i = startingPoint + 1; i < calcMem.length; i++) {
		if (calcMem[i] == '*') {
			calculate(result, '*', i)
		} else if (calcMem[i] == '/') {
			calculate(result, '/', i)
		} else if (calcMem[i] == '+') {
			calculate(result, '+', i)
		} else if (calcMem[i] == '-') {
			calculate(result, '-', i)
		} else if (num2 != undefined) {
			num2 += calcMem[i].toString();
		} else {
			num2 = calcMem[i].toString();
		}
	}

	parseInt(num1);
	parseInt(num2);

	if (operator == '+') {
		result = (add(num1, num2));
		updateDisplay(result);
		clearMem();
	} else if (operator == '-') {
		result = (subtract(num1, num2));
		updateDisplay(result);
		clearMem();
	} else if (operator == '*') {
		result = (multiply(num1, num2));
		updateDisplay(result);
		clearMem();
	} else {
		result = (divide(num1, num2));
		updateDisplay(result);
		clearMem();
	}
}

function operate() {
	var num1;

	// check to see if calcMem actually contains anything first and that this is the first calculation of the equation
	if (calcMem.length != 0 && result == undefined) {
		// check if an operator button has been pressed
		if (calcMem.includes('*') || calcMem.includes('/') || calcMem.includes('-') || calcMem.includes('+')) {
			for (i = 0; i < calcMem.length; i++) {
				// if the first number is an operator, throw an error
				if (calcMem[i] == 0 && calcMem[i] == '+' || calcMem[i] == 0 && calcMem[i] == '-' || calcMem[i] == 0 && calcMem[i] == '*' || calcMem[i] == 0 && calcMem[i] == '/') {
					console.log('error: cannot have operator as first condition');
				// if loop hits an operator, stop and pass first number along with operator to calculate() function
				} else if (calcMem[i] == '*') {
					calculate(num1, '*', i);
				} else if (calcMem[i] == '/') {
					calculate(num1, '/', i);
				} else if (calcMem[i] == '+') {
					calculate(num1, '+', i);
				} else if (calcMem[i] == '-') {
					calculate(num1, '-', i);
				} else if (num1 === undefined) {
					num1 = calcMem[i].toString();
				} else {
					num1 = num1 + calcMem[i].toString();
				}
			}
		} else {
				console.log('no operator has been chosen');
		}
	} else {
		console.log('error, must have input');
	}
}

function memory(btn) {
	calcMem.push(btn);
	display.push(btn);
	console.log(calcMem);

	if (display.length > 6) {
		display.shift()
	}

	updateDisplay(display.join(''));
}

function clearMem() {
	calcMem = [];
	display = []
	result = undefined;
	console.log('calcMem cleared');
}

function clearDisplay() {
	calcMem = [];
	display = [];
	result = undefined;
	console.log('calcMem cleared');
	updateDisplay('0');
}


// TO DO:
// ~ Implement 'clear screen' function ('C' button in HTML)
// ~ Only let '.' be used (added to displayMemory) one time
// ~ Limit amount of numbers that can be shown on physical display (7 or so) while retaining them all in displayMemory variable
// ~ Implement operator buttons and clear physical display when they are pressed while retaining numbers in displayMemory
// ~ Clean up sendToDisplay().. The if/else logic is messy and confusing and probably overdone/unnecesary, similar to this sentence :)
// ~ Figure out logic to remember what operator the user clicked, then use that to call corresponding function
// ~ return calculate() to displayMemory
// ~ May need to have 2 display variables: 
//        1 for what the user sees that can be manipulated for asthetic reasons (maybe name it 'userDisplay'),
//        and another ('displayMemory') that holds everything in the background for data calculation