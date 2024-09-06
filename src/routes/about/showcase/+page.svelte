<style>
    .split_box {
        margin: auto;
        width: 90%;
        display: flex;
        justify-content: space-between;
        padding-top: 25px;
        padding-bottom: 30px;
        color: black;
    }
    .box_split {
        width: 43%;
        aspect-ratio: 1/1;
        background-color: white;
        outline: 2px solid white;
        outline-offset: 20px;
        overflow: hidden;
    }
    .text {
        padding-top: 35px;
        padding-bottom: 50px;
        padding-right: 90px;
        padding-left: 90px;
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
        padding: 60px;
    }
</style>

<div class="text">
    <h1>See what our students can <span>do.</span></h1>
    <h2>Every semester we challenge our new engineers to build a working autonomous vehicle in <span>one semester</span>. 
        After a quick engineering design crash course we encourage them to get creative in how they 
        approach their unique missions.</h2>
    <div class="split_box">
        <div class="box_split">
            <div class="textbox">
                <p>hello</p>
            </div>
        </div>
        <div class="box_split">
            <img src="/src/img/otv_elephant.jpg" alt="elephant otv" height=100%>
        </div>
    </div>
    <h3>Interlude text... maybe some fun piece of info can go here owo</h3>
    <div class="split_box">
        <div class="box_split">
            <img src="/src/img/otv_fire.jpg" alt="elephant otv" height=100%>
        </div>
        <div class="box_split">
            <div class="textbox">
                <p>hello</p>
            </div>        
        </div>
    </div>
    <h3>Interlude text... maybe some fun piece of info can go here owo</h3>
    <div class="split_box">
        <div class="box_split">
            <div class="textbox">
                <p>hello</p>
            </div>        
        </div>
        <div class="box_split">
            <img src="/src/img/otv_data.jpg" alt="elephant otv" height=100%>
        </div>
    </div>
</div>