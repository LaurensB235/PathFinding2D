import { writable } from 'svelte/store';

export let maze = writable(
    [
        [0,0,0,0,1,0,0,0,0,3],
        [0,1,0,0,0,1,0,0,0,0],
        [0,0,1,0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0],
        [0,0,0,0,0,1,0,0,0,1],
        [2,0,0,0,0,0,0,0,0,0],
    ]
)

export let pickedTile = writable(0);