<script>
    import Construction from "$lib/Construction.svelte";
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

    .vslink-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .vslink {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
</style>


<div class="main_content">
    <Construction></Construction>
    <!-- <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
            The Vision System can be accessed when you connect to the Vision System wifi network. If you are on eduroam the below
            link will not work. The wifi network is something like "VisionSystem-1120"
            <div class="vslink-box">
                <a href="http://lx-enes100-1.eng.umd.edu:8080/" class="vslink">
                    <button>1120</button>
                </a>
                <a href="http://lx-enes100-2.eng.umd.edu:8080/" class="vslink">
                    <button>1116</button>
                </a>
                <a href="http://lx-enes100-3.eng.umd.edu:8080/" class="vslink">
                    <button>1201</button>
                </a>
                <a href="http://lx-enes100-4.eng.umd.edu:8080/" class="vslink">
                    <button>1215</button>
                </a>
            </div>
        </div>
    </slot> -->
</div>