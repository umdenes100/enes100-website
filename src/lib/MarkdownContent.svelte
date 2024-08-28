<script lang="ts">
    import {marked} from 'marked';
    import {onMount} from 'svelte';

    let markdownContent: string = 'Loading...';

    onMount(async () => {
        const elem = document.getElementById('markdownElement');
        if (!elem) return;
        const text = elem.innerHTML;
        markdownContent = await marked(text);
    });

</script>

<div class="MarkdownContent">
    {@html markdownContent}
</div>

<div style="display: none" id="markdownElement">
    <slot></slot>
</div>

<style>
    .MarkdownContent {
        /* todo */
        /*color: black;*/
    }

    :global(.MarkdownContent table) {
        border-collapse: collapse;
    }

    :global(.MarkdownContent th, .MarkdownContent td) {
        border: 1px solid grey;
        padding: 8px;
    }

    :global(.MarkdownContent a) {
        color: white;
        transition: color .2s linear;
    }

    :global(.MarkdownContent a:hover) {
        color: #FFD200;
    }
    :global(.MarkdownContent img) {
        max-width: 100%;
    }

    :global(.MarkdownContent pre) {
        background: lightgrey;
        padding: 10px;
    }

</style>