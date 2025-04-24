<script lang="ts">
    import Header from "../lib/Header.svelte";
    import "../lib/global.css";
    import Footer from "$lib/Footer.svelte";
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Enes100 Website</title>
</svelte:head>

{#if $page.url.pathname != "/labDisplay/"}
    <div style="display: flex; flex-direction: column; height: 100vh">
        <Header />
        <slot></slot>
        <Footer />
    </div>
{:else}
    <div>
        <slot></slot>
    </div>
{/if}
