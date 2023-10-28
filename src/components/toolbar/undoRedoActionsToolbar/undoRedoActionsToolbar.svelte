<script>
    import ButtonTB from "../../buttonTB/buttonTB.svelte";

    let undoRedoActions = ['undo', 'redo']
</script>

<div class="undoRedoActionsToolbar">
    {#each undoRedoActions as button}
        <ButtonTB value={button} />
    {/each}
</div>