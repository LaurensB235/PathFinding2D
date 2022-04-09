<script>
    export let text = "Click Here!";

    export let clickFunction = () => {
        console.log(`Default implementation on button ${text} was clicked!`); 
    }

</script>

<div class="button" on:click={clickFunction}>{text}</div>

<style>
    .button {
        transition: box-shadow .2s;
        box-shadow: inset 0 0 0 0 rgba(177,177,177,1);
    }

    .button:hover {
        cursor: pointer;
        filter: brightness(0.85);
        box-shadow: inset 100px 0 0 0 rgba(177,177,177,1);
    }
</style>