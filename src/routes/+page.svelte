<svelte:head>
    <title>Enes100 Website</title>
</svelte:head>

<style>
.home_boxes {
	display: flex; 
	flex-direction: column;
	background-color: black;
	font-family: "Interstate";
    border-top: 20px solid rgba(226,24,51,1.00);
}
.home_boxes .row {
	flex-direction: row;
	display: flex;
}
.home_boxes .row .row_image {
	background-image: url("/src/img/gogi.svg");
	background-size: 100%;
	flex-basis: 34%;
	text-align: center;
	color: #121B21;
	aspect-ratio: 1 / 1;
}
.home_boxes .row .row_text {
	background-color: #f1f1f1;
	flex-basis: 34%;
	text-align: center;
	color: black;
}
.home_content {
	display: flex;
	flex-direction: row;
	align-items: flex-end;
}
.home_content .quick_links {
	background-color: white;
	width: 40%;
	border-top: 5px solid rgba(226,24,51,1.00);
	padding-left: 40px;
	padding-bottom: 20px;
	padding-top: 10px;
}
.home_content .quick_links h1 {
	font-family: "Interstate";
    color: black;
}
.home_content .quick_links ul {
	margin-top: -10px;
}
.home_content .quick_links li {
	padding: 5px;
}
.home_content .quick_links a {
	font-family: "Interstate";
	color: black;
	text-decoration: none;
	font-size: 20px;
}
.home_content .quick_links a:hover {
	font-family: "Interstate";
	color: black;
	text-decoration: underline;
}
.home_content .lab_status {
	background-color: rgba(18,27,33,1.00);
	width: 60%;
	background-image: url("/src/img/shell overlay repeating.svg");
	background-size: 50%;
	text-align: center;
}
.home_content .lab_status .lab_content {
	display: flex;
	justify-content: space-around;
	width: 70%;
	color: white;
	font-family: "Interstate";
	margin: auto;
}
.home_content .lab_status .lab_content .lab {
	padding-left: 40px;
	padding-right: 40px;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: rgba(18,27,33,1.00);
	border: 1px solid white;
	width: 30%;
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
	background-color: rgba(255,210,0,1.00);
	color: rgba(18,27,33,1.00);
	font-family: "Interstate";
	padding-top: 30px;
	padding-bottom: 30px;
	font-size: 20px;
	font-weight: bold;
}
.page_title {
	padding-left: 100px;
	padding-right: 500px;
    padding-bottom: 80px;
	color: white;
	font-family: "Interstate";
	font-weight: bold;
}
.page_title h1 {
	border: none;
	font-size: 65px;
}
.page_title h2 {
	border: none;
	margin-top: -40px;
	font-size: 35px;
}
</style>

<div>
    <div class="page_title">
        <h1>ENES 100</h1>
        <h2>Introduction to Engineering Design</h2>
    </div>
    <div class="home_content">
        <div class="lab_status">
            <div class="header">
                LAB STATUS - 08/20/2024 2:55 PM
            </div>
            <div class="lab_content">
                <div class="lab">
                    <h4>JMP 1116</h4>
                    <h5>Current Hour: Open Lab<br>Next Hour: Class</h5>
                </div>
                <div class="lab">
                    <h4>JMP 1120</h4>
                    <h5>Current Hour: Closed<br>Next Hour: Closed</h5>
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
                    <a href="/documentation/tank_guide">Tank Guide</a>
                </li>
                <li>
                    <a href="/about/team">Instructional Team</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="home_boxes">
    <div class="row">
        <div class="row_image"></div>
        <div class="row_text">hello</div>
        <div class="row_image"></div>
    </div>
    <div class="row">
        <div class="row_text">hello</div>
        <div class="row_image"></div>
        <div class="row_text">hello</div>
    </div>
	<div class="row">
        <div class="row_image"></div>
        <div class="row_text">hello</div>
        <div class="row_image"></div>
    </div>
</div>