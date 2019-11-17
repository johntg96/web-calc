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


var numberBtn = document.querySelectorAll('.numpad-btn');
numberBtn.addEventListener('click', function(){
	console.log(this.id);
});