let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("output").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("output").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("output").value = displayValue;
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}
