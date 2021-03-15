//Functions

function elementById(id) {
  const x = document.getElementById(id);
  return x;
}

// Random Number

const randomValue = elementById("random");

const randomBtn = document.querySelector(".generate-btn");
const submitBtn = document.querySelector(".submit-btn");

randomBtn.addEventListener("click", function () {
  const num = Math.floor(Math.random() * 8999 + 1000);
  randomValue.value = num;
});

//User Input
const pressedKey = document.querySelector(".numbers");
pressedKey.addEventListener("click", function (e) {
  const press = e.target;
  pressCheck(press);
});

function pressCheck(press) {
  if (press.classList.contains("button")) {
    if (press.dataset.type == "delete") {
      userInput.value = userInput.value.slice(0, -1);
    } else if (press.dataset.type == "clear") {
      userInput.value = "";
    } else {
      userInput.value += press.innerText;
      elementById("correct").style.display = "none";
      elementById("inCorrect").style.display = "none";
    }
  }
}

// Verify UserInpur With Random Number
const userInput = elementById("userInput");

submitBtn.addEventListener("click", function () {
  if (userInput.value) {
    if (randomValue.value == userInput.value) {
      elementById("correct").style.display = "block";
      elementById("inCorrect").style.display = "none";
    } else {
      elementById("inCorrect").style.display = "block";
      elementById("correct").style.display = "none";
      let tryText = elementById("try").innerText;
      tryNum = parseFloat(tryText);
      tryNum--;
      if (tryNum == 0) {
        elementById("try").innerText = tryNum;
        submitBtn.classList.add("disabled");
      } else {
        elementById("try").innerText = tryNum;
      }
    }
  }
});

console.log(randomValue.value);
// Number Buttons

const numbers = elementById("button");
