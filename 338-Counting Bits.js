/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const rtn = [];
    let last;
    for (let loop = 0; loop <= n; loop++) {
        let count = 1;
        if (loop === 0) {
            count = 0;
        } else if (loop > 1) {
            const log = Math.log2(loop);
            if (Number.isInteger(log)) {
                last = loop;
            } else {
                const diff = loop - last;
                count += rtn[diff];
            }
        }
        rtn.push(count);
    }
    return rtn;
};