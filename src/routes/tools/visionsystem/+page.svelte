<script>
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>

<style>
    button {
        border: 1px solid black;
        border-radius: 20px;
        background-color: #FFD200;
        color: black;
        font-size: 20px;
        padding: 20px 30px;
        cursor: pointer;
        text-decoration: underline;
    }
</style>


<div class="main_content">
    <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
            The Vision System can be accessed when you connect to the Vision System wifi network. If you are on eduroam the below
            link will not work. The wifi network is something like "VisionSystem-1120"
            <div style="display: flex; justify-content: center; padding-top: 30px">
                <a href="http://192.168.1.2:8080/">
                    <button>Go to the Vision System</button>
                </a>
            </div>
        </div>
    </slot>
</div>
<!--    <iframe src="http://192.168.1.2:8080/" title="vision system"></iframe>-->

