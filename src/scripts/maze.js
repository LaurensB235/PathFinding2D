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