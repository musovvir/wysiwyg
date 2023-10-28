<script>
    import Toolbar from '../toolbar/toolbar.svelte'
    import EditorContent from '../editorContent/editorContent.svelte'
</script>

<div class="editor">
    <Toolbar />
    <EditorContent />
    <div class="musovvir">musovvir</div>
</div>

<style>
    .editor {
        height: 90vh;
        margin: 50px auto;
        width: 1000px;
    }
    .musovvir {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>