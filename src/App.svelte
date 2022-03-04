<script>
	import Grid from './components/Grid.svelte';

	let maze = [
        [0,0,0,0,1],
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,0],
        [1,0,0,0,0]
        ]

</script>

<main>
	<Grid {maze} />
</main>

<style>
	main {
		background-color: blue;
		border-radius: 1rem;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	
</style>