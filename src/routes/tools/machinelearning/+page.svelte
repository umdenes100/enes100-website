<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>


<div class="main_content">
    <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
        <MarkdownContent>
# ML page under construction
        </MarkdownContent>
    </div>
    </slot>
</div>

