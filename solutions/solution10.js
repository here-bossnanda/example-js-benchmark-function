function solution10(text) {
    const regExp = /[a-zA-Z]/i;
    let temp = [];
    let position = [];

    for (let index = 0; index < text.length; index++) {
        if (!regExp.test(text[index])) {
            position.push(index);
        }
    }

    let reversetTxt = text.split("").reverse();

    for (const character of reversetTxt) {
        if (regExp.test(character)) {
            temp.push(character);
        }
    }

    for (const iterator of position) {
        temp.splice(iterator, 0, text[iterator]);
    }

    return temp.join().replace(/,/g, "");
}


module.exports = { solution10 }

// created by: https://github.com/GueRefaldy