<div class="text">
    <h1>See what our students can <span>do.</span></h1>
    <h2>
        Every semester we challenge our new engineers to build a working
        autonomous vehicle in <span>one semester</span>. After a quick
        engineering design crash course we encourage them to get creative in how
        they approach their unique missions.
    </h2>
    <div class="split_box">
        <div class="box_split">
            <div class="textbox">
                <h1>Materi-yoked</h1>
                <h2>Spring 2022<br />Material Identification</h2>
                <p>
                    Material Identification teams must lift the provided object
                    entirely off of the ground. They must then detect it's
                    weight and hardness.
                </p>
            </div>
        </div>
        <div class="box_split">
            <img src="/img/otv_materials.jpg" alt="elephant otv" />
        </div>
    </div>
    <h3>
        All teams must complete their mission and navigate an obstacle course.
    </h3>
    <div class="split_box">
        <div class="box_split">
            <img src="/img/otv_fire.jpg" alt="elephant otv" />
        </div>
        <div class="box_split">
            <div class="textbox">
                <h1>Lightning Mikequeen</h1>
                <h2>Fall 2022<br />Fire Suppression</h2>
                <p>
                    Students tasked with fire suppression must detect the
                    topography of a site and severity of the fire present. They
                    must then suppress the flames.
                </p>
            </div>
        </div>
    </div>

    <h3>
        We encourage our students to get creative when approaching mission
        challenges.
    </h3>
    <div class="split_box">
        <div class="box_split">
            <div class="textbox">
                <h1>Elephante</h1>
                <h2>Spring 2023<br />Data Extraction</h2>
                <p>
                    The data extraction mission involves connecting to a data
                    pylon, reading a duty cycle from the inside, and detecting
                    the magnetism of an internal puck.
                </p>
            </div>
        </div>
        <div class="box_split">
            <img src="/img/otv_elephant.jpg" alt="elephant otv" />
        </div>
    </div>
</div>

<style>
    @media (max-width: 1200px) {
        .split_box {
            flex-direction: column;
        }
        .box_split {
            width: 100%;
            background-color: white;
            overflow: hidden;
            height: 100%;
            padding: 5%;
        }
    }
    @media (min-width: 1201px) {
        .split_box {
            flex-direction: row;
        }
        .box_split {
            width: 43%;
            aspect-ratio: 1/1;
            background-color: white;
            outline: 2px solid white;
            outline-offset: 20px;
            overflow: hidden;
        }
    }
    .textbox h1 {
        text-decoration: 2px #e21833 underline;
        margin-top: 20px;
        font-size: 45px;
    }
    .textbox h2 {
        margin-top: -25px;
        line-height: 45px;
    }
    .textbox p {
        margin-top: -20px;
    }
    .split_box {
        margin: auto;
        width: 90%;
        display: flex;
        justify-content: space-between;
        padding-top: 25px;
        padding-bottom: 30px;
        color: black;
        align-items: center;
    }
    .box_split img {
        width: 100%;
    }
    .text {
        padding: 5%;
    }
    h1 {
        font-size: 50px;
    }
    h2 {
        font-weight: normal;
        font-size: 30px;
    }
    h3 {
        font-weight: normal;
        text-align: center;
        font-size: 30px;
        color: #ffd200;
    }
    p {
        font-weight: lighter;
        margin: auto;
        font-size: 20px;
        line-height: 40px;
    }
    h1 span {
        color: #ffd200;
    }
    h2 span {
        text-decoration: 2px underline #ffd200;
        font-weight: bold;
    }
    .textbox {
        padding: 20px 50px;
    }
</style>
