<svelte:head>
    <title>Enes100 Website</title>
</svelte:head>

<style>
.home_boxes {
	display: flex;
	flex-direction: column;
	background-color: black;

    border-top: 5px solid rgba(226,24,51,1.00);
}
.home_boxes .row {
	flex-direction: row;
	display: flex;
	background-color: #f1f1f1;
}
.home_boxes .row .row_image {
	background-size: 100%;
	flex-basis: 34%;
	text-align: center;
	color: #121B21;
	overflow: hidden;
	aspect-ratio: 1 / 1;
}
.home_boxes .row .row_text {
	background-color: #f1f1f1;
	flex-basis: 34%;
	text-align: left;
	color: black;
	margin: auto;
}
p {
	padding: 20px 50px;
	font-size: 30px;
	line-height: 45px;
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
                LAB STATUS - Coming Soon!
            </div>
            <div class="lab_content">
                <div class="lab">
                    <h4>JMP 1116</h4>
                    <h5>Current Hour: N/A<br>Next Hour: N/A</h5>
                </div>
                <div class="lab">
                    <h4>JMP 1120</h4>
                    <h5>Current Hour: N/A<br>Next Hour: N/A</h5>
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
                <!-- <li>
                    <a href="/tools/machinelearning">Machine Learning</a>
                </li> -->
                <li>
                    <a href="/documentation/tank_guide">Tank Guide</a>
                </li>
                <!-- <li>
                    <a href="/about/team">Instructional Team</a>
                </li> -->
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
        <div class="row_image"><img src="/src/img/grid_1.jpg" alt="kitty cat" height=100%></div>
        <div class="row_text"><p>"With a group of people I've never met before, I was able to increase my knowledge on the basic things I would need to succeed as an engineer. I am very grateful for this course."</p></div>
        <div class="row_image"><img src="/src/img/grid_2.jpg" alt="kitty cat" height=100%></div>
    </div>
    <div class="row">
        <div class="row_text"><p>"This course was very challenging and required a large amount of hard work, but it was a good way to see what engineering is and what is required of a student who wants to become an engineer."</p></div>
        <div class="row_image"><img src="/src/img/grid_3.jpg" alt="kitty cat" height=100%></div>
        <div class="row_text"><p>"I learned a LOT from this course and my teammates and I formed extremely strong bonds."</p></div>
    </div>
	<div class="row">
        <div class="row_image"><img src="/src/img/grid_4.jpg" alt="kitty cat" height=100%></div>
        <div class="row_text"><p>"ENES100 was a great way to dip my toe into engineering and helped me figure out what I wanted to study. I love being an engineer, and this class was the start for me."</p></div>
        <div class="row_image"><img src="/src/img/grid_5.jpg" alt="kitty cat" height=100%></div>
    </div>
</div>