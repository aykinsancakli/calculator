/* ALGORITHM
       1) Function receives an input from the buttom
       2) Function executes and calculates the result
       3) Display the result on the screen
      */

// Define calculator screen for easy use
const screenElement = document.querySelector('.calculator-screen');

// Let result be empty first than add on that
let result = parseFloat(localStorage.getItem('result')) || '';

// Display the result on the screen when page first loads
screenElement.innerText = result;

// Function for calculation
function calculateThis(value) {
  result += value;
  displayOnScreen();

  localStorage.setItem('result', result.toString());
}

// Function for clear
function clearAll() {
  result = '';
  screenElement.innerText = '';
}

// Function for display
function displayOnScreen() {
  screenElement.innerText = result;
}
