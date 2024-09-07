<div class="text">
    <h1>Frequently Asked Questions</h1>
    <details>
        <summary>Why is my simulator code not working on my OTV?</summary>
        <div>
            The simulator code uses the Tank.h library, which is designed to
            only run with the simulator. You will have to make your own motor
            controller code for your OTV to work.
        </div>
    </details>
    <details>
        <summary>Why are my pointers not working in the simulator?</summary>
        <div>The simulator does not support pointers.</div>
    </details>
    <details>
        <summary
            >Why is my OTV not turning to the direction I want it to?</summary
        >
        <div>
            Try to verify the arena coordinates your OTV is in and that you're
            asking it to turn to the correct angle. In addtion, add +-
            thresholds to target angle. For example, if you have a target angle
            of 90°, set a range between 85° and 95°. In addition, make sure that
            you are sampling the coordinates frequently enough. Try to sample
            the coordinates every 20 milliseconds in order to get a consistent
            update on your OTV location.
        </div>
    </details>
    <details>
        <summary>How do I get my servo motor to stop jittering?</summary>
        <div>
            Try detaching the servo using the “servo.detach()” method. You
            should only have the servo “attached” (use servo.attach()) when the
            OTV is actually executing the mission. Before and after that, unless
            the servo is needed, it should be “detached”.
        </div>
    </details>
    <details>
        <summary>Why is my OTV just driving in a circle in the arena?</summary>
        <div>
            Check your code. If there is no apparent error, try adding an extra
            delay so that the system has enough time to fully process.
        </div>
    </details>
    <details>
        <summary>Why is my sensor or motor not responding to my code?</summary>
        <div>
            Isolate the code that you intend to use for the motor/sensor and
            place it in a new sketch. This can verify that your commands work
            and are pointing to the correct pins. If it does not work, verify
            that you have the correct pins and that the amount of voltage you
            predict to flow to a specific point is correct (view multimeter FAQ
            if necessary). Modify code and wiring as needed. If that also
            doesn’t work, try to reintegrate earlier parts of the loop to see if
            your code is getting stuck somewhere else. Rinse and repeat.
        </div>
    </details>
    <details>
        <summary
            >Why is my sensor working but not being triggered by the expected
            action?</summary
        >
        <div>
            Consider lowering the threshold (or distance) at which the sensor is
            activated. This increases the relative sensitivity of the sensor.
        </div>
    </details>
    <details>
        <summary>Why isn't my WiFi module working?</summary>
        <div>
            Use pins 50, 51, 52, or 53 for Arduino Megas. Do not use pins 0 and
            1 on your Arduino. <br><br>There could be many reasons why. First check to
            see if there is a red light on the wifi module. If there is, that
            means it is getting power (not necessarily the correct amount). If
            the red light is very dim, check to make sure that you’re giving the
            WiFi module 5V power (not 3.3V). If it’s still dim, your Arduino may
            be supplying too much current to other devices on your OTV so they
            should be powered from your battery instead. <br><br>If there isn’t a red
            light, check your circuit to see if any wires are disconnected or
            placed incorrectly. If that is corrected and there is still no red
            light, then use a multimeter to check to see if the wifi module is
            actually receiving the correct voltage of 5V. <br><br>Turn the multimeter to
            20V (this is because the wifi module requires 5V and the voltage of
            the multimeter should be higher than that) and then put one probe on
            the ground source (the wire or port which the wifi module is
            connected to) for the wifi module and the other on the power source.
            Make sure the battery is connected, the kill switch is on, and the
            Arduino is not connected to a computer or power source other than
            the battery. The reading on the multimeter should be ~5V. If it is
            not, the wifi module is not receiving the correct amount of power.
            This means an error in the circuit. <br><br>If there isn’t a blue light,
            that means that the WiFi module is not communicating with the vision
            system. First, do not use pins 0 or 1 (despite them being labeled TX
            and RX); on most microcontrollers, any digital pin except 0 and 1
            should work. If you are using an Arduino Mega, check to see that TX
            is in 50, 51, 52, or 53. If TX is not in one of those, switch that
            and change the code accordingly. If all these conditions are met and
            the blue light is still not blinking, the problem is likely in your
            code. Is the program only running once in the setup() function? Make
            sure that there is something in the setup that is not in loop and
            that there is something in both. You could also try running just the
            example code from the ENES100 library (found on the website) to
            check and see if the wifi module is working.
        </div>
    </details>
    <details>
        <summary>How do I check for shorts in my circuit?</summary>
        <div>Grab a multimeter, from one of the cabinets in the lab, and turn the dial to “continuity”.<br><br>Place one probe on a power component of the circuit and one on a ground component of the circuit. Both probes must touch the metal part of the component. If the multimeter beeps, the power and ground must be touching somewhere. <br><br>Repeat the process on different power and ground wires until you locate the exact location of the short.</div>
    </details>
    <details>
        <summary>Why is my soldering iron not working/why can I not solder?</summary>
        <div>Step 0: Check the condition of the tip of the iron. If it is very black, replace the tip (an example of a bad tip is pictured below). This is done by unscrewing the black grip of the soldering iron and removing the tip. Select a new one and insert it back into the iron. Screw the grip back into place over it. Do NOT do this with the iron plugged in or if the iron is hot!<br><br>Step 1: Turn the soldering iron on to 450 F and wait until you see that the small number (green arrow) matches the larger one (red arrow)<br><br>Step 2: Make sure that the sponge under the iron is wet and that the fan for your iron is on<br><br>Step 3: Make sure your wire is set up correctly. Both wires you are soldering should have the ends stripped about 0.5 inches.<br><br>Step 4: Plunge the soldering iron tip into the tip tinner (pictured below). The tip tinner should bead up along the tip. After this, shove the entire tip into the steel wool (pictured below) and rotate it around. To remove any beads of solder but keep a thin layer behind. Then, use a brush to paint the flux onto your wires.<br><br>

            Step 5: To help ensure a strong solder connection, heat up the wires before begining soldering. To do this, touch the soldering iron tip to the wires and hold it there. It should take a few second for the wire to heat up. This will take longer for thicker gauge wire.<br><br>Once the wires are hot, unwind the solder (pictured below) and feed the solder into the section which you just preheated. If your wires have been preheated and you have both the solder and the iron in contact with the wire, the solder should melt, flow along twisted wires, and then cool.<br><br>Alternatively, for larger connections, after melting some solder onto the iron tip, touch the end of the solder to the wire connection and touch the iron to the same connection. Heating up the connection will melt the solder directly onto the connection.<br><br>Step 6: To test to see if the soldering job was done correctly: pull the wires apart. If they separate, try again. You can also check for connectivity with the multimeter (view Q: How do I find shorts in my circuit).<br><br></div>
    </details>
    <details>
        <summary>Why is my laser cut not working/the wrong size?</summary>
        <div>For if it’s the wrong size, make sure the dimensions are 1:1 when exporting from Fusion360. You should also make sure that the style in Fusion360 is “line”</div>
    </details>
    <details>
        <summary
            >Why are my servos, motors, and or other linear actions (components
            which run continuously) not working even though enough voltage is
            being applied?
        </summary>
        the answer is beans
    </details>
    <details>
        <summary
            >When I try to use pinMode() on the Tx and Rx pins, why does the
            wifi module does not work?</summary
        >
        the answer is beans cause beans
    </details>
</div>
