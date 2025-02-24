<script lang="ts">
    import {marked} from 'marked';
    import {onMount} from 'svelte';

    let markdownContent: string = 'Loading...';

    onMount(async () => {
        const elem = document.getElementById('markdownElement');
        if (!elem) return;
        const text = elem.innerHTML;
        // todo use marked-highlight (https://www.npmjs.com/package/marked-highlight) and highlight.js (https://www.npmjs.com/package/highlight.js) to highlight cpp.
        // something like:
        // import hljs from 'highlight.js/lib/core';
        // import javascript from 'highlight.js/lib/languages/javascript';
        // hljs.registerLanguage('javascript', javascript);
        // but for cpp
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
        overflow: scroll;
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
        color: black;
    }

</style>