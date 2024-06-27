function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimal = parseInt(binaryInput, 2);
    document.getElementById('binaryToDecimalResult').textContent = `Decimal: ${decimal}`;
}

function resetBinaryInput() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('binaryToDecimalResult').textContent = '';
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binary = parseInt(decimalInput, 10).toString(2);
    document.getElementById('decimalToBinaryResult').textContent = `Binario: ${binary}`;
}

function resetDecimalInput() {
    document.getElementById('decimalInput').value = '';
    document.getElementById('decimalToBinaryResult').textContent = '';
}

function convertHexToDecimal() {
    const hexInput = document.getElementById('hexInput').value;
    const decimal = parseInt(hexInput, 16);
    document.getElementById('hexToDecimalResult').textContent = `Decimal: ${decimal}`;
}

function resetHexInput() {
    document.getElementById('hexInput').value = '';
    document.getElementById('hexToDecimalResult').textContent = '';
}

function convertDecimalToHex() {
    const decimalHexInput = document.getElementById('decimalHexInput').value;
    const hex = parseInt(decimalHexInput, 10).toString(16).toUpperCase();
    document.getElementById('decimalToHexResult').textContent = `Hexadecimal: ${hex}`;
}

function resetDecimalHexInput() {
    document.getElementById('decimalHexInput').value = '';
    document.getElementById('decimalToHexResult').textContent = '';
}

function convertBinaryToHex() {
    const binaryToHexInput = document.getElementById('binaryToHexInput').value;
    const decimal = parseInt(binaryToHexInput, 2);
    const hex = decimal.toString(16).toUpperCase();
    document.getElementById('binaryToHexResult').textContent = `Hexadecimal: ${hex}`;
}

function resetBinaryHexInput() {
    document.getElementById('binaryToHexInput').value = '';
    document.getElementById('binaryToHexResult').textContent = '';
}

function convertHexToBinary() {
    const hexToBinaryInput = document.getElementById('hexToBinaryInput').value;
    const decimal = parseInt(hexToBinaryInput, 16);
    const binary = decimal.toString(2);
    document.getElementById('hexToBinaryResult').textContent = `Binario: ${binary}`;
}

function resetHexBinaryInput() {
    document.getElementById('hexToBinaryInput').value = '';
    document.getElementById('hexToBinaryResult').textContent = '';
}