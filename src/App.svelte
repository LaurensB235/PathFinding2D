<script>
	import Grid from './components/Grid.svelte';
	import Button from './components/Button.svelte';


	let maze = [
        [0,0,0,0,1],
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,0,0],
        [1,0,0,0,0]
        ]


	const extendVertical = () => {

	}

	const extendHorizontal = () => {
		
	}

</script>

<main>
	<Button text="extend horizontal" clickFunction={extendHorizontal}/>
	<Button text="extend vertical" clickFunction={extendVertical}/>
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