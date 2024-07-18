export function getElement(selector) {
    return document.querySelector(selector);
}

export function showElement(selector) {
    document.querySelector(selector).style.display = 'block';
}

export function hideElement(selector) {
    document.querySelector(selector).style.display = 'none';
}

export function setText(selector, text) {
    document.querySelector(selector).value = text;
}

export function getText(selector) {
    return document.querySelector(selector).value;
}

export function clearText(selector) {
    document.querySelector(selector).value = '';
}

export function showAlert(message) {
    alert(message);
}
