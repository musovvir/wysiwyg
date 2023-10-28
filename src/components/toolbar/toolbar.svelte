<script>
    import UndoRedoActionsToolbar from "./undoRedoActionsToolbar/undoRedoActionsToolbar.svelte";
    import TextFormattingToolbar from "./textFormattingToolbar/textFormattingToolbar.svelte";
</script>

<div class="toolbar">
    <TextFormattingToolbar />
    <UndoRedoActionsToolbar />
</div>

<style>
    .toolbar {
        display: flex;
        justify-content: space-between;
        background-color: #d4f6df;
        border-top: 1px solid #6fbf89;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px solid #6fbf89;
        padding: 10px 10px;
        box-shadow: 1px 1px 7px 3px #6fbf89;
}
</style>