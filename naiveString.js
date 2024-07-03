const naiveString = (s, l) => {
    let count = 0;
    let left = 0;
    for (let i = 0; i < l.length; i++) {
        if (s[left] === l[i]) {
            left++;
        } else {
            left = 0;
        }
        if (left === s.length) {
            count++;
            left = 0;
        }
    }
    return count;
};

const s = "omg";
const l = "asdasomgasdasdomgt";
console.log(naiveString(s, l));