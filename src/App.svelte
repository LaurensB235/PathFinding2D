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


	const addVertical = () => {
		maze.push(new Array(maze[0].length).fill(0));
		maze = maze; // Force update for child components
	}

	const subtractVertical = () => {
		maze.pop();
		maze = maze; // Force update for child components
	}

	const addHorizontal = () => {
		maze.forEach(row => {
			row.push(0);
		})
		maze = maze; // Force update for child components
	}

	const subtractHorizontal = () => {
		maze.forEach(row => {
			row.pop()
		})
		maze = maze; // Force update for child components
	}

</script>

<main>
	<Button text="add horizontal" clickFunction={addHorizontal}/>
	<Button text="subtract horizontal" clickFunction={subtractHorizontal}/>
	<Button text="add vertical" clickFunction={addVertical}/>
	<Button text="subtract vertical" clickFunction={subtractVertical}/>
	<Grid bind:maze />
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