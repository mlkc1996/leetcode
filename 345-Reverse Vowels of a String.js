/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const chars = s.split("");
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const left_vowel = isVowel(chars[left]);
        const right_vowel = isVowel(chars[right]);
        if (left_vowel && right_vowel) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
            continue;
        }
        if (!left_vowel) {
            left++;
        }
        if (!right_vowel) {
            right--;
        }
    }

    return chars.join("");
};

const isVowel = (c) => {
    switch (c) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return true;
        default: return false;
    }
};