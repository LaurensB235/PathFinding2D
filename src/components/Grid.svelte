<script>
    export let maze = [
        [0,0,0,0,1],
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [1,0,0,0,0]
        ]

</script>

<div class="container">
    {#each maze as row}
        <div class="row">
            {#each row as col}
                <div class="col col_{col}"></div>
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