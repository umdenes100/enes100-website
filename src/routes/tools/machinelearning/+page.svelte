<script>
    import HeaderBar from "$lib/HeaderBar.svelte";
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>

<HeaderBar></HeaderBar>
<div class="main_content">
    <slot>
        <div class="text">
            <MarkdownContent>
# ML Page currently under construction
            </MarkdownContent>
        </div>
    </slot>
</div>

