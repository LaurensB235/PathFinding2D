<script>
    export let maze = [
        [0,0,0,0,1],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0]
        ]


    const clickedTile = (row_i, col_i) => {
        console.log("joew");
        maze[row_i][col_i] = 1 -  maze[row_i][col_i];
    }

</script>

<div class="container">
    {#each maze as row, row_i}
        <div class="row">
            {#each row as col, col_i}
                <div class="col col_{col}" on:click={() => clickedTile(row_i, col_i)}></div>
            {/each}
        </div>
    {/each}
</div>


<style>
    .container {
        padding: 0.5em;
        border-radius: 1rem;
        background-color: rgb(72, 98, 107);
    }

    .row { 
        display: flex;
    }

    .col {
        flex-grow: 1;
        aspect-ratio: 1;
        border-radius: 1rem;
        transition: border-radius .1s, filter .25s;
    }

    .col:hover {
        border-radius: .75rem;
        filter: brightness(0.85);
    }

    .col:active {
        border-radius: 50%;
    }

    .col_1 {
        background-color: rgb(48, 58, 59);
    }

    .col_0 {
        background-color: rgb(217, 235, 238);
    }

</style>