const fs = require('fs');

function validateInput(inputPath,outputPath) {
    if (!inputPath) throw new Error('reverse command requires inputPath');
    if (!outputPath) throw new Error('reverse command requires outputPath');
}

function StringReverse(string) {    
    if (string === '') {
        return '';
    }
    let text = ""; 
    for (let i = string.length-1; i >= 0; i--) {
        text += string[i];
    }
    return text;
}

function reverse(inputPath,outputPath) {
    validateInput(inputPath,outputPath);

    let content = fs.readFileSync(inputPath);
    fs.writeFileSync(outputPath,StringReverse(content.toString()));
}

module.exports = reverse;