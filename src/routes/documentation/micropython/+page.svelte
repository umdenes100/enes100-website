<script>
    import SidebarPage from "$lib/SidebarLayout.svelte";
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>


<SidebarPage>
    <div slot="sidebar">
        <a href="#thonny">Thonny IDE and Microcontroller Setup</a>
        <a href="#package">Package Download and Installation</a>
        <a href="#begin">enes100.begin()</a>
        <a href="#update">enes100.x and similar</a>
        <a href="#connect">enes100.is_connected()</a>
        <a href="#print">enes100.print()</a>
        <a href="#mission">enes100.mission()</a>
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
4. Next, select **ESP32** as the Micropython family, **Espressif - ESP32 / WROOM** as the variant, and **1.24.1** as the version. Then, click install.
5. To make sure that the installation was successful, type **help()** into the shell. You should receive a message.

## Package Download and Installation <a id="package"> </a>
### <a href="https://github.com/umdenes100/enes100-micropython/archive/main.zip">Click to Download</a>
In this section, you will download the package and upload it to your microcontroller through Thonny IDE. 
1) To download the package, click the above link. No need to unzip the file.
2) Open Thonny and navigate to **Tools > Manage packages...**
3) Using **Install from local file**, find the file on your computer and upload it to your device.

You can now use the Enes100 package.

## Usage 

`from enes100 import enes100`

To use the library, you have to direct the compiler to include it in your code. Add it manually by typing (or copying) the above line at the very top of your file.

### enes100.begin <a id="begin"> </a>

`enes100.begin(team_name: str, team_type: str, aruco_id: int, room_num: int)`

Initializes the enes100 library and establishes communication with the Vision System.

- team_name: Name of the team that will show up in the Vision System
- team_type: Type of mission your team is running.
    - Valid Mission Types: `'CRASH_SITE'`, `'DATA'`, `'MATERIAL'`, `'FIRE'`, `'WATER'`, `'SEED'`
- aruco_id: ID of your Aruco Marker
- room_num: The number of the classroom in which you are located (1116 or 1120)

### enes100.x and similar <a id="update"> </a>

The Aruco Marker has 4 values
- x: x-coordinate of the Aruco Marker (from 0.0 to 4.0), -1 if aruco is not visible
- y: y-coordinate of the Aruco Marker (From 0.0 to 2.0), -1 if aruco is not visible
- theta: angle of the Aruco Marker (from -pi radians to pi radians), -1 if aruco is not visible
- visibility: whether the ArUco marker is visible (true or false)

These values can be queried by using the following commands:
- `enes100.x`
- `enes100.y`
- `enes100.theta`
- `enes100.is_visible`

enes100.x variants will make sure you get the latest data available to you about your OTV's location. There is no need to save these as a separate variable.

### enes100.is_connected() <a id="connect"> </a>
`enes100.is_connected()`

Returns true if the ESP32 is connected to the Vision System, false otherwise. Note: enes100.begin will not return until this function is true.

### enes100.print() <a id="print"> </a>
`enes100.print(message: str)`

Sends a message to the vision system with a new line. Any messages sent after will be printed in a new line.

### enes100.mission() <a id="mission"> </a>
`enes100.mission(type: str, message: str*)`

Sends value for a mission objective.
- type: what type of mission call you are sending
- message: mission value associated with the mission type.

All the definitions defined in the enes100 library correlate to an integer. To save you the trouble, you can call the uppercase definition like `'LENGTH'` for Crash Site teams or `'MATERIAL_TYPE'` for Material Identification teams.

*For some mission calls below, the value i will denote an integer value. In that case, i should be an int NOT a str.

Valid calls for **HYDROGEN**:
- `enes100.mission('LED_COLOR', 'COLOR');` *COLOR options are WHITE, RED, YELLOW, GREEN, and BLUE*
- `enes100.mission('VOLTAGE_OUTPUT', 'VOLTAGE_3');` * VOLTAGE options are VOLTAGE_1 through VOLTAGE_5*

Valid calls for **DATA**:
- `enes100.mission('CYCLE', i)` i is the duty cycle percent (ex. 10, 30, 50, 70, 90)
- `enes100.mission('MAGNETISM', 'MAGNETIC')`
- `enes100.mission('MAGNETISM', 'NOT_MAGNETIC')`

Valid calls for **MATERIAL**:
- `enes100.mission('WEIGHT', 'HEAVY')`
- `enes100.mission('WEIGHT', 'MEDIUM')`
- `enes100.mission('WEIGHT', 'LIGHT')`
- `enes100.mission('MATERIAL_TYPE', 'FOAM')`
- `enes100.mission('MATERIAL_TYPE', 'PLASTIC')`

Valid calls for **FIRE**:
- `enes100.mission('NUM_CANDLES', i)` i is an integer (0, 1, 2, 3, 4, 5)
- `enes100.mission('TOPOGRAPHY', 'TOP_A')`
- `enes100.mission('TOPOGRAPHY', 'TOP_B')`
- `enes100.mission('TOPOGRAPHY', 'TOP_C')`

Valid calls for **WATER**:
- `enes100.mission('DEPTH', i)` i is in mm
- `enes100.mission('WATER_TYPE', 'FRESH_UNPOLLUTED')`
- `enes100.mission('WATER_TYPE', 'FRESH_POLLUTED')`

Valid calls for **SEED**:
- `enes100.mission('LOCATION', plot)` where plot is a single character A, B, C, or D


## Product Demonstration Procedures <a id="demo"> </a>

During the product demonstration, messages sent using print() and println() will not be shown on the Vision System console. You should use the mission calls to send results.

    </MarkdownContent>
</SidebarPage>
