<script>
    import Button from './Button.svelte';

    export let text;

    let open = false;

    const changeOpen = () => {
        open = !open;
    }

</script>

<Button {text} clickFunction={changeOpen}/>
{#if open}
    <div class="drop-down">
        <slot></slot>
    </div>
{/if}

<style>
    .drop-down {
        position: absolute;
    }
</style>


