<script>
    import Button from './Button.svelte';
    import DropDown from './DropDown.svelte';
    import {addVertical, addHorizontal, subtractHorizontal, subtractVertical} from '../scripts/maze';
    import {pickedTile} from '../scripts/store';

</script>

<header>
    <div>
        <DropDown text="Resize Maze">
            <Button text="add horizontal" clickFunction={addHorizontal}/>
            <Button text="subtract horizontal" clickFunction={subtractHorizontal}/>
            <Button text="add vertical" clickFunction={addVertical}/>
            <Button text="subtract vertical" clickFunction={subtractVertical}/>
        </DropDown>
    </div>  
    <div>
        <DropDown text="Select Tile">
            <Button text="Closed" clickFunction={() => pickedTile.set(1)}/>
            <Button text="Open" clickFunction={() => pickedTile.set(0)}/>
        </DropDown>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        width: 60%;
    }
</style>