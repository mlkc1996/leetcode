/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    if (!grid.length) {
        return 0;
    }
    if (!grid[0].length) {
        return 0;
    }
    const row = new Map();
    const column = new Map();
    for (let r = 0; r < grid.length; r++) {
        let row_string = "";
        for (let c = 0; c < grid[r].length; c++) {
            row_string += `${grid[r][c]},`;
            let column_string = (column.get(c) ?? "") + `${grid[r][c]},`;
            if ((r + 1) === grid[r].length) {
                column.delete(c);
                const count = (column.get(column_string) ?? 0) + 1;
                column.set(column_string, count);
            } else {
                column.set(c, column_string);
            }
        }
        const count = (row.get(row_string) ?? 0) + 1;
        row.set(row_string, count);
    }

    let rtn = 0;
    let loop = row.size < column.size ? row : column;
    let compare = loop === row ? column : row;
    for (let [string, count] of loop.entries()) {
        let compare_count = compare.get(string) ?? 0;
        rtn += compare_count * count;
    }

    return rtn;
};

const grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]];

console.log(equalPairs(grid));