<script>
    import SidebarPage from "$lib/SidebarLayout.svelte";
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>


<SidebarPage>
    <div slot="sidebar">
        <a href="#thonny">Thonny IDE and Microcontroller Setup</a>
        <a href="#package">Package Download and Installation</a>
        <a href="#begin">Enes100.begin()</a>
        <a href="#update">Enes100.getX() and similar</a>
        <a href="#connect">Enes100.isConnected()</a>
        <a href="#print">Enes100.print()</a>
        <a href="#mission">Enes100.mission()</a>
        <a href="#ML_camera">Machine Learning</a>
        <a href="#demo">Product Demonstration</a>
        

    </div>
    <MarkdownContent>
# ENES100 Micropython Package

A Micropython package for use in the ENES100 course to allow ESP32 microcontrollers to communicate with the enes100 Vision System via on-board WiFi.

## Download and Installation <a id="thonny"> </a>
You must download Thonny IDE to your computer. The latest version can be downloaded from the [Thonny website](https://thonny.org/).

ESP32 does not have Micropython installed by default, so you will need to flash the board with the correct firmware. You will need to download this file: [download](https://micropython.org/resources/firmware/ESP32_GENERIC-20241129-v1.24.1.bin).

### Flashing MicroPython Firmware using Thonny IDE

In this section, you’ll learn how to flash MicroPython firmware on your boards using Thonny IDE. Follow the next steps:
1. Connect your ESP32 board to your computer.
2. Open Thonny IDE. Go to **Tools > Options > Interpreter**.
3. Select the interpreter you want to use accordingly to the board you’re using and select the COM port your board is connected to. Finally, click on the link **Install or update firmware(esptool)**.
4. Next, select **ESP32** as the Micropython family, **Espressif - ESP32 / WROOM** as the variant, and then select the latest version. Then, click install.
5. To make sure that the installation was successful, type **help()** into the shell. You should receive a message.

## Package Download and Installation <a id="package"> </a>
### <a href="https://github.com/umdenes100/enes100-micropython/archive/new-system.zip">Click to Download</a>
In this section, you will download the package and upload it to your microcontroller through Thonny IDE. 
1) To download the package, click the above link. No need to unzip the file.
2) Open Thonny and navigate to **Tools > Manage packages...**
3) Using **Install from local file**, find the file on your computer and upload it to your device.

You should now be able to import the package in your code and use it to communicate with the Vision System.

## Usage 

`from enes100 import Enes100`

To use the library, you have to direct the compiler to include it in your code. Add it manually by typing (or copying) the above line at the very top of your file.

### Enes100.begin() <a id="begin"> </a>

`Enes100.begin(team_name: str, team_type: str, aruco_id: int, room_num: int)`

Initializes the enes100 library and establishes communication with the Vision System.

- team_name: Name of the team that will show up in the Vision System
- team_type: Type of mission your team is running.
    - Valid Mission Types: `'DATA'`, `'HYDROGEN'`, `'MATERIAL'`, `'FIRE'`, `'WATER'`, `'SEED'`
- aruco_id: ID of your Aruco Marker
- room_num: The number of the classroom in which you are located (1116, 1120, or 1201)

### Enes100.getX() and similar <a id="update"> </a>

The Aruco Marker has 4 values
- x: x-coordinate of the Aruco Marker (from 0.0 to 4.0), -1 if aruco is not visible
- y: y-coordinate of the Aruco Marker (From 0.0 to 2.0), -1 if aruco is not visible
- theta: angle of the Aruco Marker (from -pi radians to pi radians), -1 if aruco is not visible
- visibility: whether the ArUco marker is visible (true or false)

These values can be queried by using the following commands:
- `enes100.getX()`
- `enes100.getY()`
- `enes100.getTheta()`
- `enes100.isVisible()`

Enes100.get() variants will make sure you get the latest data available to you about your OTV's location. There is no need to save these as a separate variable.

### Enes100.isConnected() <a id="connect"> </a>
`Enes100.isConnected()`

Returns true if the ESP32 is connected to the Vision System, false otherwise. Note: Enes100.begin() will not return until this function is true.

### Enes100.print() <a id="print"> </a>
`Enes100.print(message: str)`

Sends a message to the vision system with a new line. Any messages sent after will be printed in a new line.

### Enes100.mission() <a id="mission"> </a>
`Enes100.mission(type: str, message: str*)`

Sends value for a mission objective.
- type: what type of mission call you are sending
- message: mission value associated with the mission type.

All the definitions defined in the enes100 library correlate to an integer. To save you the trouble, you can call the uppercase definition like `'LENGTH'` for Crash Site teams or `'MATERIAL_TYPE'` for Material Identification teams.

*For some mission calls below, the value i will denote an integer value. In that case, i should be an int NOT a str.

Valid calls for **HYDROGEN**:
- `enes100.mission(LED_COLOR, COLOR);` *COLOR options are WHITE, RED, YELLOW, GREEN, and BLUE*
- `enes100.mission(VOLTAGE_OUTPUT, VOLTAGE_3);` * VOLTAGE options are VOLTAGE_1 through VOLTAGE_5*

Valid calls for **DATA**:
- `enes100.mission(CYCLE, i)` i is the duty cycle percent (ex. 10, 30, 50, 70, 90)
- `enes100.mission(MAGNETISM, MAGNETIC)`
- `enes100.mission(MAGNETISM, NOT_MAGNETIC)`

Valid calls for **MATERIAL**:
- `enes100.mission(WEIGHT, HEAVY)`
- `enes100.mission(WEIGHT, MEDIUM)`
- `enes100.mission(WEIGHT, LIGHT)`
- `enes100.mission(MATERIAL_TYPE, FOAM)`
- `enes100.mission(MATERIAL_TYPE, PLASTIC)`

Valid calls for **FIRE**:
- `enes100.mission(NUM_CANDLES, i)` i is an integer (0, 1, 2, 3, 4, 5)
- `enes100.mission(TOPOGRAPHY, TOP_A)`
- `enes100.mission(TOPOGRAPHY, TOP_B)`
- `enes100.mission(TOPOGRAPHY, TOP_C)`

Valid calls for **WATER**:
- `enes100.mission(DEPTH, i)` i is in mm
- `enes100.mission(WATER_TYPE, FRESH_UNPOLLUTED)`
- `enes100.mission(WATER_TYPE, FRESH_POLLUTED)`

Valid calls for **SEED**:
* `Enes100.mission(LOCATION, plot);` where plot is "BOTH" "NEITHER" "ADJACENT" or "DIAGONAL" for plantable substrate.*


## Machine Learning <a id="ML_camera"> </a>
### About
The ESPCAM will be mounted to your OTV and act as your wifi module, with the added capabilities of camera vision. 
Note, this is not the overhead vision system above the arena - this is a separate development board (provided by staff) that has a camera and can be used for machine learning applications. 
You will use the camera to take pictures and send them to the Vision System to be processed by your team's machine learning model. 

## Usage 

To use the ML camera you will use the same begin statement as the standard Enes100 library, but with two additional parameters for the tx and rx pins that connect to the camera. The rest of the functions in the library will work as normal, but there are some additional functions for machine learning capabilities.

### Enes100.begin() <a id="begin"> </a>
`Enes100.begin(team_name: str, team_type: str, aruco_id: int, room_num: int, rx_pin: int, tx_pin: int)`

Initializes the Enes100 library and establishes communication with the Vision System.

RX/TX pin choices: 13, 14, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33. 16/17 tends to be most reliable.

- team_name: Name of the team that will show up in the Vision System
- team_type: Type of mission your team is running.
    - Valid Mission Types: `'HYDROGEN'`, `'DATA'`, `'MATERIAL'`, `'FIRE'`, `'WATER'`, `'SEED'`
- aruco_id: ID of your Aruco Marker
- room_num: The number of the classroom in which you are located (1116, 1120 or 1201)
- rx_pin: The GPIO pin number connected to the RX pin of the camera
- tx_pin: The GPIO pin number connected to the TX pin of the camera

### Enes100.MLGetPrediction() <a id="get_prediction"> </a>
`Enes100.MLGetPrediction(model_index: int)`

Sends current image from the ESPCAM to the Vision System to get processed by your team's machine learning model. Read more [here](https://enes100.umd.edu/tools/machinelearning/).
The function uses your team name (from the Enes100.begin() statement) to find your model. As such, **make sure
your team name matches the model name exactly**.

The index should be the index chosen when uploading the model - which is any positive number you choose. The index is used to differentiate between multiple models uploaded by the same team.

Example:
If your ML model at index 1 contained the categories: **Thumbs Up**, **Thumbs Down**, **Thumb Sideways** in an array in that order,
calling `Enes100.MLGetPrediction(1)` would return `0` if **Thumbs Up** is predicted, `1` if **Thumbs Down** is predicted, and `2` if **Thumb Sideways** is predicted.

## Product Demonstration Procedures <a id="demo"> </a>

During the product demonstration, messages sent using print() and println() will not be shown on the Vision System console. You should use the mission calls to send results.

    </MarkdownContent>
</SidebarPage>
