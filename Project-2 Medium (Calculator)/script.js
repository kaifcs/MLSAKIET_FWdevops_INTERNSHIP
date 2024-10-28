let display = document.getElementById("display");

function appendOperator(operator) {
    display.value = display.value + operator;
}
function clearDisplay() {
    display.value = "";
}
function deleteValue() {
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try {
        display.value=eval(display.value);
    } 
    catch (error) {
        display.value="INVALID-EXPRESSION-PRESS-C";
    }
}
