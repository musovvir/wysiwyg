<script>
    import ButtonTB from "../../buttonTB/buttonTB.svelte";

    let textReformatButtons = [
        'format_align_left',
        'format_align_center',
        'format_align_right',
        'format_bold',
        'format_italic',
        'format_underlined',
        'format_strikethrough'
        ]
</script>

<div class="textFormattingToolbar">
    {#each textReformatButtons as button}
        <ButtonTB value={button} />
    {/each}
</div>