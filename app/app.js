//Variables
const buttons = document.querySelectorAll(".button");
const formulario = document.getElementById("calculadora");

//Funciones
function ShowText(newText) {
  document.getElementById("content-numbers-history").textContent += newText;
}

function DeleteAll() {
  document.getElementById("content-numbers-history").textContent = "";
  document.getElementById("content-numbers").textContent = "";
}

function Calculate() {
  let input = document.getElementById("content-numbers-history").textContent;
  let result = eval(input);
  document.getElementById("content-numbers").textContent = result;
}

function DeleteChar() {
  let input = document.getElementById("content-numbers-history").textContent;
  input = input.slice(0, -1);
  document.getElementById("content-numbers-history").textContent = input;
  Calculate()
}

//Eventos
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    let button = event.target;
    let buttonText = button.textContent;
    let buttonType = button.getAttribute("data-type");

    switch (buttonType) {
      case "number":
        ShowText(buttonText);
        Calculate();
        break;

      case "operator":
        if (buttonText === "=") {
          calculate();
        } else {
          ShowText(buttonText);
          Calculate();
        }
        break;

      case "tool":
        if (buttonText == "C") {
          DeleteAll();
        } else if (buttonText === "delete") {
          DeleteChar();
        } else {
          Calculate();
          ShowText(buttonText);
        }
        break;
    }
  });
}
