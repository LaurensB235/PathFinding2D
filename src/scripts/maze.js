import { maze, pickedTile } from './store'
import { get } from 'svelte/store'

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

export const findPath = () => {
    let setupMaze = get(maze);

    let startNodes = getStartNodes(setupMaze);

    console.log(startNodes)

}

const getStartNodes = (maze) => {
    let startNodes = [];

    forEachNode(maze, (i_row, row, i_col, col) => {
        if (col === 2) {
            startNodes.push({row:i_row, col:i_col, value:col});
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