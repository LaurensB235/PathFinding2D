<script>
    import Button from './Button.svelte';
    import DropDown from './DropDown.svelte';
    import {addVertical, addHorizontal, subtractHorizontal, subtractVertical} from '../scripts/maze';
    import {pickedTile} from '../scripts/store';

</script>

<header>
    <div>
        <DropDown text="Resize Grid">
            <Button text="X+" clickFunction={addHorizontal}/>
            <Button text="X-" clickFunction={subtractHorizontal}/>
            <Button text="Y+" clickFunction={addVertical}/>
            <Button text="Y-" clickFunction={subtractVertical}/>
        </DropDown>
    </div>  
    <div>
        <DropDown text="Algorithm">
            <!-- TODO algo  -->
        </DropDown>
    </div>
    <div>
        <DropDown text="Select Tile">
            <Button text="End" clickFunction={() => pickedTile.set(3)}/>
            <Button text="Start" clickFunction={() => pickedTile.set(2)}/>
            <Button text="Closed" clickFunction={() => pickedTile.set(1)}/>
            <Button text="Open" clickFunction={() => pickedTile.set(0)}/>
        </DropDown>
    </div>
</header>

<style>
    div {
        position: relative;
    }
    header {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>