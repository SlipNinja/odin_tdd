function caesar(text, offset) {
    offset = normalizeOffset(offset);

    const codes = [];
    for (let i = 0; i < text.length; i++) {
        codes.push(newChar(text.charAt(i), offset));
    }

    return String.fromCharCode(...codes);
}

function normalizeOffset(offset){
    let newOffset = Math.floor(offset)%26;
    if(newOffset < 0) newOffset += 26;

    return newOffset;
}

// A - Z : 65 - 90
// a - z : 97 - 122
function newChar(c, offset) {
    const code = c.charCodeAt(0);
    if(!isLetter(code)) return code;

    let newCode = code + offset;
    if(isLetter(newCode)) return newCode;

    // uppercase
    if(code < 91){
        return newCode - 26;
        
    // lowercase
    } else {
        return newCode - 26;
    }
}

function isLetter(code) {
    return (65 <= code && code <= 90) || (97 <= code && code <= 122);
}


export { caesar };