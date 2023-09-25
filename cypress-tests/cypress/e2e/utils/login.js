export const loginUtils = {

generateRandomInputValueAllowedChars: (length) => {
    const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+=-№?:";

    let text = "";
    for (var i = 0; i < length; i++) {
        text += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    return text;
}
}