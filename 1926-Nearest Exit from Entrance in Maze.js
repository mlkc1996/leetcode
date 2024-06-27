/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const queue = [[entrance]];
    const prev = [];
    let exit;
    while (queue.length) {
        if (exit) {
            prev.push(queue.at(0));
            break;
        }
        const [next_findings] = queue;
        const findings = [];
        for (let coords of next_findings) {
            setVisited(coords, maze);
            if (exit) {
                break;
            }
            for (let direction of getDirections(coords)) {
                if (isOutOfRange(direction, maze)) {
                    continue;
                }

                if (isWall(direction, maze)) {
                    continue;
                }
                if (isVisited(direction, maze)) {
                    continue;
                }

                setVisited(direction, maze);

                direction.prev = coords;

                if (isExit(direction, maze, entrance)) {
                    exit = direction;
                }

                findings.push(direction);
            }
        }
        if (findings.length) {
            queue.push(findings);
        } else {
            return -1;
        }
        queue.splice(0, 1);
        prev.push(next_findings);
    }


    if (exit) {
        const path = [];
        while (exit.prev) {
            path.splice(0, 0, [exit[0], exit[1]]);
            const findings = prev.pop();
            if (!findings) {
                break;
            }
            for (let [x, y] of findings) {
                if (x !== exit[0] || y !== exit[1]) {
                    maze[x][y] = ".";
                }
            }
            exit = exit.prev;
        }
        path.splice(0, 0, [exit[0], exit[1]]);
        console.log(maze);
        console.log(path);
        return path.length - 1;
    }


    return -1;
};

const isOutOfRange = (coords, maze) => {
    const row = maze.length;
    const column = maze[0].length;
    const [x, y] = coords;
    if (x < 0 || x >= row) {
        return true;
    }

    if (y < 0 || y >= column) {
        return true;
    }

    return false;
};

const isVisited = (coords, maze) => {
    return maze[coords[0]][coords[1]] === true;
};

const setVisited = (coords, maze) => {
    maze[coords[0]][coords[1]] = true;
};

const isWall = (coords, maze) => {
    return maze[coords[0]][coords[1]] === "+";
};

const isExit = (coords, maze, entrance) => {
    const [x1, y1] = coords;
    const [x2, y2] = entrance;

    if (x1 === x2 && y1 === y2) {
        return false;
    }

    const row = maze.length;
    const column = maze[0].length;

    if (x1 === 0 || x1 + 1 === row) {
        return true;
    }

    if (y1 === 0 || y1 + 1 === column) {
        return true;
    }

    return false;
};

const getDirections = ([x, y]) => {
    return [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
    ];
};

const maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]];
const entrance = [1, 0];

nearestExit(maze, entrance);