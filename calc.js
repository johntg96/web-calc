// calc.js

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

function calculate(num1, operator, num2) {
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator == "-") {
		return subtract(num1, num2);
	} else if (operator == "*") {
		return multiply(num1, num2);
	} else if (operator == "/") {
		return divide(num1, num2);
	} else {
		return "Incorrect operator";
	}
}

var displayMemory = null;

function sendToDisplay(num) {
	if (displayMemory != null && typeof num == 'number') {
		displayMemory = displayMemory.toString() + num.toString();
	} else if (displayMemory != null && isNaN(num)) {
		displayMemory = displayMemory + num;
	} else if (displayMemory == null && isNaN(num)) {
		displayMemory = num;
	} else {
		displayMemory = num.toString();
	}
	
	const display = document.querySelector('#display');
	display.innerHTML = "<span style='font-size:3em; line-height:2em;'>" + displayMemory + "</span>";
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