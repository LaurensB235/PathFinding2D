export class Node {
    constructor(row, col, val, previous) {
        this.row = row;
        this.col = col;
        this.val = val;
        this.previous = previous;
    }

    equals = (obj) => {
        if (this.row != obj.row)
            return false;
        if (this.col != obj.col)
            return false;
        return true;
    }
}