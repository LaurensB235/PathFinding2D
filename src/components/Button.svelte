<script>
    export let text = "Click Here!";

    export let clickFunction = () => {
        console.log(`Default implementation on button ${text} was clicked!`); 
    }

</script>

<div class="button" on:click={clickFunction}>{text}</div>

<style>
    .button:hover {
        cursor: pointer;
        filter: brightness(0.85);
    }
</style>