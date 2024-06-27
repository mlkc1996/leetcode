const gcd = (num1, num2) => {
    if (num1 === 0) {
        return num2;
    }

    if (num2 === 0) {
        return num1;
    }

    if (num1 === num2) {
        return num1;
    }

    if (num1 > num2) {
        return gcd(num2, num1 % num2);
    }

    return gcd(num1, num2 % num1);
};

const lcm = (num1, num2) => {
    const _gcd = gcd(num1, num2);
    return num1 * num2 / _gcd;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    if (str1.length === str2.length) {
        if (str1 === str2) {
            return str1;
        }

        return "";
    }

    const _gcd = gcd(str1.length, str2.length);

    return str1.substring(0, _gcd);
};