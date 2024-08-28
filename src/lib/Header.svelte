<style>
    nav {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
        clear: left;
        display: inline-block;
        font-size: 0;
    }

    nav ul {
        vertical-align: middle;
        margin-right: auto;
        margin-bottom: 0;
        margin-left: auto;
        padding: 40px 0 0;
        width: 90%;
    }

    nav ul li {
        list-style: none;
        float: right;
        margin-top: 0;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: auto;
        text-align: left;
        width: auto;
        transition: all 0.2s linear;
    }

    .tank_menu {
        line-height: 5px;
        padding-left: 20px;
        padding-bottom: 5px;
        margin-top: -5px;
    }

    #logo {
        vertical-align: middle;
        margin-top: 20px; /* margin: 20px was off */
        margin-left: 40px;
        float: left;
        height: 50px;
        width: auto; /* correct proportions to specified height */
    }

    /* Dropdown Button */
    .dropbtn {
        background-color: transparent;
        color: white;
        border: none;
        font-weight: bold;
        letter-spacing: 0;
        font-size: 16px;
        padding-right: 10px;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #121b21;
        min-width: 160px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;
        border: 1px solid white;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        font-weight: normal;
        display: block;
        font-size: 15px;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        color: #FFD200;
        transition: all 0.1s linear;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
        color: #FFD200;
        transition: all 0.1s linear;
    }
</style>
<!-- <umd-utility-header style="padding: 3.75px;"></umd-utility-header> -->
<header>
    <nav>
        <a href="/"><img id="logo" src="/src/img/keystone_logo.svg" alt="UMD_ENG_Ctr_Color_W.png"></a>
        <ul>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">Student Tools</button>
                    <div class="dropdown-content">
                        <a href="/tools/machinelearning">Machine Learning</a>
                        <a href="/tools/simulator">Simulator</a>
                        <a href="/tools/visionsystem">Vision System</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">Labs</button>
                    <div class="dropdown-content">
                        <a href="/labs/schedule">Schedule</a>
                        <a href="/labs/store">School Store</a>
                        <a href="/labs/toolcheck">Tool Check</a>
                        <a href="/labs/maintenance">Maintenance Form</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">Documentation</button>
                    <div class="dropdown-content">
                        <a href="/documentation/enes100">Enes100.h Library</a>
                        <a href="/documentation/examples">Examples</a>
                        <a href="/documentation/faq">FAQs</a>
                        <a href="/documentation/tank_guide">Tanks</a>
                        <div class="tank_menu">
                            <a href="/documentation/tank">- Tank.h Library</a>
                            <a href="/documentation/tank_guide">- Guide</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">About Us</button>
                    <div class="dropdown-content">
                        <a href="/about">About the Course</a>
                        <a href="/about/team">Instructional Team</a>
                        <a href="/about/showcase">Student Showcase</a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</header>