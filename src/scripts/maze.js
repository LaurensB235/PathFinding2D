import { maze, pickedTile } from './store';
import { get } from 'svelte/store';
import { Node } from './Node';

export const addVertical = () => {
    maze.update(maze => {
        maze.push(new Array(maze[0].length).fill(0));
        return maze;
    });
}

export const subtractVertical = () => {
    maze.update(maze => {
        maze.pop();
        return maze;
    });
}

export const addHorizontal = () => {
    maze.update(maze => {
        maze.forEach(row => {
            row.push(0);
        });
        return maze;
    });
}

export const subtractHorizontal = () => {
    maze.update(maze => {
        maze.forEach(row => {
            row.pop();
        });
        return maze;
    });
}

export const changeTile = (row_i, col_i) => {
    maze.update(maze => {
        maze[row_i][col_i] = get(pickedTile);
        return maze;
    })
}

export const clearMaze = () => {
    maze.update(currentMaze => {

        forEachNode(currentMaze, (i_row, row, i_col, col) => {
            if (col > 3) {
                currentMaze[i_row][i_col] = 0;
            } 
        })

        return currentMaze;
    });
}

export const findPath = async () => {

    clearMaze();

    let setupMaze = get(maze);

    let startNodes = getStartNodes(setupMaze);

    let singleNode = startNodes[0];

    let finished = false;
    let used = [];
    while (!finished) {

        let newOpen = [];

        if (!used.filter(value => value.equals(singleNode)).length > 0) {
            newOpen.push(singleNode);
        }

        for(let i = 0; i < newOpen.length; ++i) {
            let node = newOpen[i];
            let neighbours = getAdjNodes(node, setupMaze);

            for(let i2 = 0; i2 < neighbours.asArray.length; ++i2) {
                await wait(1);
                let adjNode = neighbours.asArray[i2];
                if (!used.filter(value => value.equals(adjNode)).length > 0 && !newOpen.filter(value => value.equals(adjNode)).length > 0 && adjNode.val != 1) {
                    visitNode(adjNode.row, adjNode.col);
                    newOpen.push(adjNode);
                }
            }
        }


        for(let i = 0; i < newOpen.length; ++i) {
            let node = newOpen[i];
            used.push(node);
            if (node.val == 3) {
                finished = true;
                break;
            }
        }
    

        if (!finished && newOpen.length == 0)
            return alert("No End or Path found");
    }
    let path = [];
    let node = used[used.length - 1];
    while(node.previous) {
        path.push(node);
        node = node.previous;
    }
    
    drawPath(path);
}

const drawPath = async (path) => {
    for(let i = path.length - 1; i >= 0; i--) {
        await wait(10);
        let node = path[i];
        if (node.val != 2 && node.val != 3) {
            maze.update(currentMaze => {
                currentMaze[node.row][node.col] = 7;
                return currentMaze; 
            }); 
        }
    }
}

const wait = (ms) => {
    return new Promise(resolved => setTimeout(resolved, ms));
}

const visitNode = (row, col) => {
    maze.update(currentMaze => {

        if (currentMaze[row][col] == 3) {
            return currentMaze;
        }

        if (currentMaze[row][col] < 4 || currentMaze[row][col] > 5) {
           currentMaze[row][col] = 4;
           return currentMaze;
        } 

        currentMaze[row][col]++;
        return currentMaze; 
    }); 
}

const getAdjNodes = (node, maze) => {
    let adjNodes = {};
    adjNodes.asArray = [];
    let row = node.row;
    let col = node.col;
    if (col + 1 < maze[0].length) {
        adjNodes.right = new Node(row, col + 1, maze[row][col + 1], node);
        adjNodes.asArray.push(adjNodes.right);
    }
    if (col - 1 > -1) {
        adjNodes.left = new Node(row, col - 1, maze[row][col - 1], node);
        adjNodes.asArray.push(adjNodes.left);
    }
    if (row + 1 < maze.length) {
        adjNodes.below = new Node(row + 1, col, maze[row + 1][col], node);
        adjNodes.asArray.push(adjNodes.below);
    }
    if (row - 1 > -1) {
        adjNodes.above = new Node(row - 1, col, maze[row - 1][col], node);
        adjNodes.asArray.push(adjNodes.above);
    }
    return adjNodes;
}

const getStartNodes = (maze) => {
    let startNodes = [];

    forEachNode(maze, (i_row, row, i_col, col) => {
        if (col === 2) {
            startNodes.push(new Node(i_row, i_col, col, null));
        }
    });

    return startNodes;
}

const forEachNode = (maze, callback) => {
    maze.forEach((row, i_row) => {
        row.forEach((col, i_col) => {
            callback(i_row, row, i_col, col);
        })
    })
}