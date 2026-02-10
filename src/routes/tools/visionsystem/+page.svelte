<script>
    // import Construction from "$lib/Construction.svelte";
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
        font-family: 'Interstate';
        font-weight: bold;
        font-style: normal;
        src: local('Interstate'), url("/img/Interstate-Regular.otf") format('opentype');
    }

    .vslink-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .vslink {
        display: flex;
        justify-content: center;
        padding: 20px;
        color: white;
    }

    .text {
        background-color: #121B21;
        padding: 10px 40px 5%;
        border: 2px solid white;
        width: 60%;
        height: 38%;
        margin: 40px auto;
    }
</style>


<div class="main_content">
    <!-- <Construction></Construction> -->
    <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
            Click the links below to access the Vision System for your room. Room 1116 is the main classroom with windows, 1120 is the main classroom without windows, and 1201/1215 is the open lab, where the school store is located.
            <div class="vslink-box">
                <a href="http://lx-enes100-3.eng.umd.edu:8080/" class="vslink">
                    <button>1116</button>
                </a>
                <a href="http://lx-enes100-4.eng.umd.edu:8080/" class="vslink">
                    <button>1120</button>
                </a>
                <a href="http://lx-enes100-5.eng.umd.edu:8080/" class="vslink">
                    <button>1201/1215</button>
                </a>
            </div>
        </div>
    </slot>
</div>