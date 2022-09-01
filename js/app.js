// Generate pin handler
const generatePin = document.getElementById("generate-pin");
const displayGeneratedPin = document.getElementById("display-generated-pin");
generatePin.addEventListener("click", function () {
    let l, r;
    l = 1000, r = 9999;
    let random = (Math.floor(Math.random() * (r - l + 1) + l));
    displayGeneratedPin.value = random;
});


// Get input
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

getInput(zero, 0);
getInput(one, 1);
getInput(two, 2);
getInput(three, 3);
getInput(four, 4);
getInput(five, 5);
getInput(six, 6);
getInput(seven, 7);
getInput(eight, 8);
getInput(nine, 9);
function getInput(id, digit) {
    id.addEventListener("click", function () {
        document.getElementById("given-input").value += digit;
    });
}


// Delete
const backspace = document.getElementById("backspace");
const del = document.getElementById("delete");
const givenInput = document.getElementById("given-input");

backspace.addEventListener("click", function () {
    let number = givenInput.value;
    givenInput.value = Math.floor(number / 10);
    if (givenInput.value == 0)
        givenInput.value = " ";
});

del.addEventListener("click", function () {
    document.getElementById("given-input").value = " ";
});


// Check generate pin with given input
const submitButton = document.getElementById("submit-button");
const actionValue = document.getElementById("action-value");
submitButton.addEventListener("click", function () {
    if (displayGeneratedPin.value === "") {
        alert("Please generate a pin");
        return;
    }
    const ok = document.querySelector(".notify-section .notify:nth-child(2)");
    const notOk = document.querySelector(".notify-section .notify:nth-child(1)");

    if (parseInt(displayGeneratedPin.value) == parseInt(givenInput.value)) {
        if (notOk.style.display == "block")
            notOk.style.display = "none"
        ok.style.display = "block";
    }
    else {
        if (ok.style.display == "block")
            ok.style.display = "none"
        notOk.style.display = "block"
        let remainingtAttempts = parseInt(actionValue.innerText);
        remainingtAttempts--;
        actionValue.innerText = remainingtAttempts;
        if (remainingtAttempts == 0) {
            setTimeout(() => {
                alert("Game Over...Want to try again?");
                window.location.replace("../index.html");
            }, 1);
        }
    }
});