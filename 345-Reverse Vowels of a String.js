/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const chars = s.split("");
    let left = 0;
    let right = s.length - 1;
    while (left !== right) {
        if (vowels.has(chars[left].toLowerCase()) && vowels.has(chars[right].toLowerCase())) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            if (left === right) {
                break;
            }
            right--;
            if (left === right) {
                break;
            }
            continue;
        }
        if (!vowels.has(chars[left].toLowerCase())) {
            left++;
        }

        if (left === right) {
            break;
        }

        if (!vowels.has(chars[right].toLowerCase())) {
            right--;
        }

        if (left === right) {
            break;
        }
    }

    return chars.join("");
};