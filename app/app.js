//Variables
const buttons = document.querySelectorAll(".button");
//const textNumber = document.getElementById("content-numbers-history")

//Funcion mostrar valor
function ShowText(newText) {
    document.getElementById("content-numbers-history").textContent += newText;
}
function DeleleAll() {
    document.getElementById("content-numbers-history").textContent = "";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    let button = event.target; // Obtiene el botón clicado
    let buttonText = button.textContent; // Obtiene el texto del botón
    let buttonType = button.getAttribute("data-type"); // Obtiene el tipo de botón

    // Realiza la acción correspondiente según el tipo de botón
    switch (buttonType) {
      case "number":
        console.log("Se ha clicado en el botón de número: " + buttonText);
        ShowText(buttonText)
        break;
      case "operator":
        console.log("Se ha clicado en el botón de operador: " + buttonText);
        ShowText(buttonText)
        break;
      case "tool":
        console.log("Se ha clicado en el botón de herramienta: " + buttonText);
        if(buttonText == "C") {
            DeleleAll();
        } else {
            ShowText(buttonText)
        }
        break;
    }
  });
}