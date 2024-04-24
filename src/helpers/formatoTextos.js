export const primerasMayusculas = (text) => {
    if (!text) return '';
    return text.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
        return firstLetter.toUpperCase();
    });
}
