// Advanced operations cycle through different functions
let advancedOperations = ['√', 'x²', 'xʸ', 'sin', 'cos', 'tan', '1/x', 'cosh', 'eˣ', 'lg', '10ˣ'];
let advancedOpIndex = 0;

// Append value to display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear display
function clearDisplay() {
    document.getElementById('display').value = "0";
}

// Calculate the result of the operation
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = "Error";
    }
}

// Cycle through advanced operations
function cycleAdvancedOp() {
    advancedOpIndex = (advancedOpIndex + 1) % advancedOperations.length;
    let opButton = document.getElementById('advanced-op');
    opButton.innerHTML = advancedOperations[advancedOpIndex];

    // Apply the selected operation
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.value);
    
    switch (advancedOperations[advancedOpIndex]) {
        case '√': // Square root
            display.value = Math.sqrt(currentValue);
            break;
        case 'x²': // Square
            display.value = Math.pow(currentValue, 2);
            break;
        case 'xʸ': // Power
            display.value = `${currentValue}^`;
            break;
        case 'sin':
            display.value = Math.sin(currentValue);
            break;
        case 'cos':
            display.value = Math.cos(currentValue);
            break;
        case 'tan':
            display.value = Math.tan(currentValue);
            break;
        case '1/x': // Reciprocal
            display.value = 1 / currentValue;
            break;
        case 'cosh':
            display.value = Math.cosh(currentValue);
            break;
        case 'eˣ': // Exponential
            display.value = Math.exp(currentValue);
            break;
        case 'lg': // Logarithm base 10
            display.value = Math.log10(currentValue);
            break;
        case '10ˣ': // 10 raised to power x
            display.value = Math.pow(10, currentValue);
            break;
    }
}
