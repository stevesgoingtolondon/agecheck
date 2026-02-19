const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("resultText");

let age;

mySubmit.onclick = function() {
    age = Number(myText.value);

    if (!age || age < 0) {
        myResult.textContent = "Please enter a valid age.";
    }
    else if (age < 5) {
        myResult.textContent = "You are a toddler!";
    }
    else if (age < 13) {
        myResult.textContent = "You are a child!";
    }
    else if (age < 20) {
        myResult.textContent = "You are a teenager!";
    }
    else if (age < 65) {
        myResult.textContent = "You are an adult!";
    }
    else {
        myResult.textContent = "You are a senior!";
    }
};
