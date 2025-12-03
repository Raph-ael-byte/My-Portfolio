console.log("Day 11: JavaScript is running!");

const birthYear = 2009; 

console.log(birthYear);

let userScore = 0;
userScore = userScore + 5;

console.log(userScore);

const isStudent = true;

console.log(isStudent);

function greetUser(username) {
    console.log("Hello "+ username +"!Welcome back to the portfolio");
}

greetUser("Chris");

// This function checks if the age is equal to or greater than 16 and prints to the console accordingly
function checkAccess(age) {
    if (age >= 16) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    } 
}

checkAccess(20);

function canWithdraw(amount) {
    let balance = 1000;
    if (amount >= balance) {
        console.log("Sorry, you amount exceeds your balance.");
    } else {
        console.log("Proceed to withdraw.");
    }
}

canWithdraw(1000);


let titleElement = document.getElementById("main-title");

console.log(titleElement);

let bioTitle = document.querySelector(".red");
bioTitle.textContent = "My skill set";
console.log(bioTitle);

setTimeout(function() {
    titleElement.textContent = "Welcome to my portfolio!";
}, 5000);

const myButton = document.getElementById("welcome-btn");

console.log(myButton);

function sayWelcome() {
    console.log("Button clicked! Running welcome code.");
    titleElement.textContent = "Thank you for clicking, Welcome!";
}

myButton.addEventListener("click", sayWelcome);

let profilePic = document.querySelector(".profile-picture");

const changePicButton = document.getElementById("change-pic");

console.log(changePicButton);

function changePicture() {
    console.log("Button clicked! Changing profile picture.");
    profilePic.src = "mo beta.jpg";
}

changePicButton.addEventListener("click", changePicture );

// Step 1: Select the body element and the button
const pageBody = document.getElementById("page-body");
const toggleButton = document.getElementById("theme-toggle-btn");

// Step 2: Define the action function
function toggleTheme() {
    // This is the core of the dark mode feature!
    pageBody.classList.toggle("dark-mode");
    // Bonus: Update button text based on the current mode (optional advanced logic)
    if (pageBody.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
        console.log("Dark mode enabled");
    } else {
        toggleButton.textContent = "Toggle Dark Mode";
        console.log("Light mode enabled");
    }
}

// Step 3: Attach the listener
toggleButton.addEventListener("click", toggleTheme);

