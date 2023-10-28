<script>
    import Toolbar from '../toolbar/toolbar.svelte'
    import EditorContent from '../editorContent/editorContent.svelte'
</script>

<div class="editor">
    <Toolbar />
    <EditorContent />
</div>

<style>
    .editor {
        height: 90vh;
        margin: 50px auto;
        width: 1000px;
    }
</style>