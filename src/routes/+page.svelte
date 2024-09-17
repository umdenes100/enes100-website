<script lang="ts">
    import { onMount } from "svelte";

    let status_1116 = "???",
        next_status_1116 = "???",
        status_1120 = "???",
        next_status_1120 = "???";

    type Schedule = [string, ...number[]][];

    onMount(() => {
        let hours = new Date().getHours();
        let day_types = ["closed", "class", "open"];

        let schedule_1116: Schedule = [
            //1  2  3  4  5  6  7  8  9  10 11 N  1  2  3  4  5  6  7  8  9  10 11
            [
                "Sunday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Monday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                0,
                0,
            ],
            [
                "Tuesday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                2,
                2,
                2,
                0,
                0,
            ],
            [
                "Wednesday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Thursday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                2,
                2,
                2,
                0,
                0,
            ],
            [
                "Friday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Saturday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
        ];
        let day_1116 = schedule_1116[new Date().getDay()];

        status_1116 = day_types[day_1116[hours] as number];

        if (day_1116.length > hours + 1)
            next_status_1116 = day_types[day_1116[hours + 1] as number];
        else next_status_1116 = "closed";

        let schedule_1120 = [
            //1  2  3  4  5  6  7  8  9  10 11 N  1  2  3  4  5  6  7  8  9  10 11
            [
                "Sunday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Monday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Tuesday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
            ],
            [
                "Wednesday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                2,
                0,
                0,
                0,
                0,
            ],
            [
                "Thursday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
            ],
            [
                "Friday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                2,
                2,
                2,
                2,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            [
                "Saturday",
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
        ];

        let day_1120 = schedule_1120[new Date().getDay()];
        status_1120 = day_types[day_1120[hours] as number];

        if (day_1120.length > hours + 1)
            next_status_1120 = day_types[day_1120[hours + 1] as number];
        else next_status_1120 = "closed";
    });
</script>

<svelte:head>
    <title>Enes100 Website</title>
</svelte:head>

<div>
    <div class="page_title">
        <h1>ENES 100</h1>
        <h2>Introduction to Engineering Design</h2>
    </div>
    <div class="home_content">
        <div class="lab_status">
            <div class="header">
                LAB STATUS - {new Date().toLocaleString()}
            </div>
            <div class="lab_content">
                <div class="lab">
                    <h4>JMP 1116</h4>
                    <h5>
                        Current Hour: {status_1116}<br />Next Hour: {next_status_1116}
                    </h5>
                </div>
                <div class="lab">
                    <h4>JMP 1120</h4>
                    <h5>
                        Current Hour: {status_1120}<br />Next Hour: {next_status_1120}
                    </h5>
                </div>
            </div>
        </div>
        <div class="quick_links">
            <h1>Quick Links</h1>
            <ul>
                <li>
                    <a href="/tools/simulator">Simulator</a>
                </li>
                <li>
                    <a href="/tools/visionsystem">Vision System</a>
                </li>
                <li>
                    <a href="/tools/machinelearning">Machine Learning</a>
                </li>
                <li>
                    <a href="/documentation/enes100/">Enes100 Library</a>
                </li>
                <li>
                    <a href="/documentation/faq/">Frequently Asked Questions</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="home_boxes">
    <div class="row">
        <div class="row_text">
            <p>
                "This course was very challenging and required a large amount of
                hard work, but it was a good way to see what engineering is and
                what is required of a student who wants to become an engineer."
            </p>
        </div>
        <div class="row_stack">
            <img src="/img/grid_1.jpg" alt="kitty cat" /><img
                src="/img/grid_2.jpg"
                alt="kitty cat"
            />
        </div>
        <div class="row_text">
            <p>
                "ENES100 was a great way to dip my toe into engineering and
                helped me figure out what I wanted to study. I love being an
                engineer, and this class was the start for me."
            </p>
        </div>
    </div>
    <h2>
        "I learned a LOT from this course and my teammates and I formed
        extremely strong bonds."
    </h2>
    <div class="row">
        <div class="row_image">
            <img src="/img/grid_3.jpg" alt="kitty cat" height="100%" />
        </div>
        <div class="row_image">
            <img src="/img/grid_5.jpg" alt="kitty cat" height="100%" />
        </div>
        <div class="row_image">
            <img src="/img/grid_4.jpg" alt="kitty cat" height="100%" />
        </div>
    </div>
</div>

<style>
    @media (max-width: 320px) {
        .home_content {
            flex-direction: column;
        }
        .home_content .quick_links {
            width: 100%;
        }
        .home_content .lab_status {
            width: 100%;
        }
        .home_content .quick_links h1 {
            padding-left: 5%;
        }
        .home_content .lab_status .lab_content {
            flex-direction: column;
        }
        .home_boxes {
            visibility: hidden;
            display: none;
        }
    }

    @media (min-width: 321px) and (max-width: 860px) {
        .home_content {
            flex-direction: column;
        }
        .home_content .quick_links {
            width: 100%;
        }
        .home_content .lab_status {
            width: 100%;
        }
        .home_content .quick_links h1 {
            padding-left: 5%;
        }
        .home_content .lab_status .lab_content {
            flex-direction: column;
        }
        .home_content .lab_status .lab_content .lab {
            width: 80%;
        }
        .home_boxes {
            visibility: hidden;
            display: none;
        }
    }

    @media (min-width: 861px) and (max-width: 1000px) {
        .home_content {
            flex-direction: row;
        }
        .home_content .quick_links {
            width: 40%;
        }
        .home_content .lab_status {
            width: 60%;
        }
        .home_content .lab_status .lab_content {
            flex-direction: row;
        }
        .home_content .lab_status .lab_content .lab {
            width: 80%;
        }
        .home_boxes {
            visibility: hidden;
            display: none;
        }
    }

    @media (min-width: 1001px) and (max-width: 1460px) {
        .home_content {
            flex-direction: row;
        }
        .home_content .quick_links {
            width: 40%;
        }
        .home_content .lab_status {
            width: 60%;
        }
        .home_boxes {
            display: flex;
            flex-direction: column;
        }
        .home_boxes .row {
            visibility: hidden;
            display: none;
        }
    }
    @media (min-width: 1461px) {
        .home_content {
            flex-direction: row;
        }
        .home_content .quick_links {
            width: 40%;
        }
        .home_content .lab_status {
            width: 60%;
        }
        .home_boxes {
            display: flex;
            flex-direction: column;
        }
        .home_boxes .row .row_stack {
            display: flex;
            flex-direction: column;
            flex-basis: 15%;
            justify-content: space-around;
        }
        .home_boxes .row {
            display: flex;
            flex-direction: row;
        }
    }
    .home_boxes {
        background-image: url("/img/home_bkg.jpg");
        background-size: 150%;
        background-repeat: no-repeat;
        padding: 40px 120px;
        border-top: 5px solid #e21833;
    }

    .home_boxes h2 {
        text-align: center;
        font-size: 25px;
    }

    .home_boxes .row .row_stack {
        background-size: 100%;
        text-align: center;
        color: #121b21;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        margin: 30px;
    }

    .home_boxes .row .row_stack img {
        width: 100%;
        aspect-ratio: 1 / 1;
    }

    .home_boxes .row .row_image {
        background-size: 100%;
        flex-basis: 34%;
        text-align: center;
        color: #121b21;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        margin: 30px;
    }
    .home_boxes .row .row_text {
        background-color: #f1f1f1;
        flex-basis: 34%;
        text-align: left;
        color: black;
        margin: 30px;
        aspect-ratio: 1 / 1;
        align-items: center;
    }
    p {
        padding: 15px 45px;
        font-size: 22px;
        line-height: 45px;
    }

    .home_content {
        display: flex;
        align-items: flex-end;
    }

    .home_content .quick_links {
        background-color: white;
        border-top: 5px solid rgba(226, 24, 51, 1);
        padding-left: 40px;
        padding-bottom: 20px;
        padding-top: 10px;
    }

    .home_content .quick_links h1 {
        color: black;
    }

    .home_content .quick_links ul {
        margin-top: -10px;
    }

    .home_content .quick_links li {
        padding: 5px;
    }

    .home_content .quick_links a {
        color: black;
        text-decoration: none;
        font-size: 20px;
    }

    .home_content .quick_links a:hover {
        color: black;
        text-decoration: 2px underline;
    }

    .home_content .lab_status {
        background-color: rgba(18, 27, 33, 1);
        background-image: url("/img/shell overlay repeating.svg");
        background-size: 50%;
        text-align: center;
    }

    .home_content .lab_status .lab_content {
        display: flex;
        justify-content: space-around;
        width: 70%;
        color: white;
        margin: auto;
    }

    .home_content .lab_status .lab_content .lab {
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: rgba(18, 27, 33, 1);
        border: 1px solid white;
        line-height: 20px;
    }

    .home_content .lab_status .lab_content .lab h4 {
        margin-bottom: -20px;
        font-size: 15px;
    }

    .home_content .lab_status .lab_content .lab h5 {
        font-weight: normal;
        font-size: 15px;
    }

    .home_content .lab_status .header {
        background-color: rgba(255, 210, 0, 1);
        color: rgba(18, 27, 33, 1);
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 20px;
        font-weight: bold;
    }

    .page_title {
        padding-left: 10%;
        padding-right: 100px;
        padding-bottom: 80px;
        color: white;
        font-weight: bold;
    }

    .page_title h1 {
        border: none;
        font-size: 70px;
    }

    .page_title h2 {
        border: none;
        margin-top: -40px;
        margin-bottom: -10px;
        font-size: 40px;
    }
</style>
