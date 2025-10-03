<script>
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>

<style>
    .text {
        padding:0;
    }
</style>


<div class="main_content">
    <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
            <img src="/img/construction-banner.png" alt="construction banner" width="100%">
        </div>
        
    </slot>
</div>