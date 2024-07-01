const bs = (s) => {
    while(true) {
        let update = false;
        for (let i = 1; i < s.length; i++) {
            const prev = s[i-1];
            const num = s[i]
            if (num < prev) {
                [s[i-1], s[i]] = [s[i], s[i-1]];
                update = true;
            }
        }
        if (!update) {
            break;
        }
    }

    return s
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]

console.log(bs(arr))