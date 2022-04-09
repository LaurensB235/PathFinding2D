<script>
    import { maze, pickedTile } from '../scripts/store';
    import { changeTile, findPath } from '../scripts/maze';
    import Button from './Button.svelte'
</script>

<div class="container">
    {#each $maze as row, row_i}
        <div class="row">
            {#each row as col, col_i}
                <div class="col col_{col}" on:click={() => changeTile(row_i, col_i)}></div>
            {/each}
        </div>
    {/each}
    <div class="selected">
        <div id="selected" class=col_{$pickedTile} />
    </div>
    <div class="find">
        <Button text="Find Path" clickFunction={findPath}/>
    </div>
</div>

<style>
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 60%;
        padding: 0.5em;
        border-radius: 1rem 1rem 0 0;
        background-color: rgb(72, 98, 107);
    }

    .selected {
        position: absolute;
        height: 2.5rem;
        left: 0;
        bottom: -2rem;
        background-color: inherit;
        border-radius: 0 0 .5rem .5rem;
        display: flex;
        align-items: center;
    }

    #selected {
        width: 2rem;
        border-radius: 10px;
        margin: .25rem;
        aspect-ratio: 1;
    }

    .find {
        padding-left: .5rem;
        padding-right: .5rem;
        position: absolute;
        height: 2.5rem;
        right: 0;
        bottom: -2rem;
        background-color: inherit;
        border-radius: 0 0 .5rem .5rem;
        display: flex;
        align-items: center;
    }

    .row { 
        flex: 2 1 auto;
        display: flex;
    }

    .col {
        flex: 2 1 auto;
        border-radius: 1rem;
        transition: border-radius .1s, filter .25s;
    }

    .col:hover {
        border-radius: .75rem;
        filter: brightness(0.85);
    }

    .col:active {
        border-radius: 50px;
    }

    .col_3 {
        background-color: rgb(0, 143, 24);
    }

    .col_2 {
        background-color: rgb(3, 131, 143);
    }

    .col_1 {
        background-color: rgb(48, 58, 59);
    }

    .col_0 {
        background-color: rgb(217, 235, 238);
    }

</style>