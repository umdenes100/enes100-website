<script>
    import SidebarPage from "$lib/SidebarLayout.svelte";
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>
<SidebarPage>
    <div slot="sidebar">
        <a href="#tank">Tank V3</a>
        <a href="#prereqs">Prerequisites</a>
        <a href="#programming">Programming the tank</a>
        <a href="#exercise">Practice Exercise</a>
        <a href="#pins">Pin Diagram</a>
    </div>

    <MarkdownContent>
# Tank V3 <a id="tank"> </a>

Navigational tanks created to supplement student coding curriculum in ENES100.

<img src="/img/tank.jpg" alt="tank" width=50%>

The tank has swappable propulsion modules, including a few seen here:

<img src="/img/tankswheels.jpg" alt="tank wheels" width=50%>

In order to remove the propulsion modules, remove the wheels by turning counter clockwise and then slide the module out.


## Prerequesites <a id="prereqs"> </a>

1. Have Arduino installed on your computer. The download link can be found [here](https://www.arduino.cc/en/software)
2. Download the ENES 100 library [here](https://github.com/umdenes100/ENES100ArduinoLibrary/archive/master.zip)
3. Download the Tank library [here](https://github.com/umdenes100/TankArduinoLibrary/archive/master.zip)

## Programming the Tank <a id="programming"> </a>

**Please read more information on the Tank library (applicable to both the simulator and tanks) on Libraries->Tank.**
The front of the tank is marked by the forward facing arrow.

### Motor Code

The code below will help you move your tank forward.
```ino
#include "Tank.h"
void setup() {'{'}
    Tank.begin();
}

//repeats forever unless end is specified
void loop() {'{'}
//turns on both motors to full speed (-255 to 255 are acceptable PWM values)
Tank.setRightMotorPWM(255);
Tank.setLeftMotorPWM(255);
delay(1000);
Tank.turnOffMotors();
}
```

### Ultrasonic Sensor Code

```ino
#include "Tank.h"
void setup() {'{'}
Tank.begin();
Enes100.begin("Alec B Lahr", MATERIAL, arucoID, 1116, 52, 50);
}
void loop() {'{'}
// Will print to vision system!
Enes100.print("Ultrasonic Reading: ");
Enes100.println(Tank.readDistanceSensor(1));
}
```
### Wifi Module code

The following code will allow you to connect to the vision system, and prints a message.

```cpp
#include "Enes100.h" //libraries are included at the very top of the program
#include "Tank.h"

void setup() {'{'}
//This function connects the tank to the vision system. The TX and RX pins of the tanks
//are 52 and 50 respectively.
Enes100.begin("Alec B Lahr", MATERIAL, arucoID, 1116, 52, 50);

delay(200);

//print some text in Serial Monitor
Enes100.println("Sucessfully connected to the Vision System");
}
```

## Coordinates and Movement Challenge: <a id="exercise"> </a>

- Write an arduino program to get the coordinates of the aruco marker from the vision system.
- Print it to the vision system.
- Use the ultrasonic sensor to detect obstacles and avoid them by turning.
- Use the location data from the vision system to find your way past the log or the limbo to the end.
- You can choose to do this however you like!

## Pin Diagram <a id="pins"> </a>

In case you would like to write your own functions, here are the pinouts for the tanks:

```ino
#define PIN_MOTOR_1_FORWARD 11
#define PIN_MOTOR_1_REVERSE 10
#define PIN_MOTOR_2_FORWARD 9
#define PIN_MOTOR_2_REVERSE 8
#define PIN_MOTOR_3_FORWARD 4
#define PIN_MOTOR_3_REVERSE 5
#define PIN_MOTOR_4_FORWARD 2
#define PIN_MOTOR_4_REVERSE 3
// Bump Sensors
#define PIN_BUMP_FRONT 32
#define PIN_BUMP_REAR 33
// Ultrasonic Sensors
#define PIN_US_FRONT_TRIG 18
#define PIN_US_FRONT_ECHO 19
#define PIN_US_REAR_TRIG 27
#define PIN_US_REAR_ECHO 26
// Infrared Sensors
#define PIN_IR_1 15
#define PIN_IR_2 17
#define PIN_IR_3 14
#define PIN_IR_4 16
// WiFi Modules
#define PIN_WIFI_TX 52
#define PIN_WIFI_RX 50
```

    </MarkdownContent>
</SidebarPage>