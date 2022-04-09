<script>
    import Button from './Button.svelte';
    import { slide } from 'svelte/transition';

    export let text;

    let open = false;

    const changeOpen = () => {
        open = !open;
    }

</script>

<Button {text} clickFunction={changeOpen}/>
{#if open}
    <div transition:slide class="drop-down">
        <slot></slot>
    </div>
{/if}

<style>
    .drop-down {
        position: absolute;
        z-index: 1;
        background-color: white;
        width: 100%;
    }
</style>


