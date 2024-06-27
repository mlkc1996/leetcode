/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let trimed = s; let rtn = ""; let word = "";
    for (let i = 0; i < trimed.length; i++) {
        const char = trimed[i];
        const backspace = char === " ";
        if (backspace && word) {
            rtn = `${word} ${rtn}`;
            word = "";
            continue;
        }
        if (backspace) {
            continue;
        }
        word += char;
    }
    if (word) {
        rtn = `${word} ${rtn}`;
        word = "";
    }
    return rtn;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
    return s.split(" ").reduce((acc, word) => !word.trim() ? acc : !acc ? word.trim() : `${word.trim()} ${acc}`, "");
};

console.log(reverseWords2("  hello world  "));