<script lang="ts">
    import Header from '../lib/Header.svelte';
    import '../lib/global.css'
    import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
    <title>Enes100 Website</title>
</svelte:head>

<div style="display: flex; flex-direction: column; height: 100vh">
    <Header/>
    <slot></slot>
    <Footer/>
</div>
