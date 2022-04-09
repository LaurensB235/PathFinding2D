<script>
	import Grid from './components/Grid.svelte';
	import Header from './components/Header.svelte';
</script>

<main>
	<Header/> 
	<Grid/>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		row-gap: 10px;
	}
</style>