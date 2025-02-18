<script lang="ts">
    import ToggleSwitch from "$lib/ToggleSwitch.svelte";

    let language: 'Arduino C++' | 'MicroPython' = 'Arduino C++';
</script>

<div class="text">
    <h1>Examples</h1>
    <div style="padding: 12px; font-size: 18px; display: flex; flex-direction:
    column; gap: 14px">
        Choose a language
        
        <ToggleSwitch bind:value={language} design="multi" options={['Arduino C++', 'MicroPython']} fontSize={20}></ToggleSwitch>
    </div>
    <details>
        <summary>Initializing the Wifi Module and Updating the Location</summary>
        {#if language === 'MicroPython'}
            <div>
                This example and mission specific ones can also be found in the
                enes100 package. Open the zip file then click enes100 ->examples
            
            <pre><code>
    # simple function to test communication with the Vision System
    from enes100 import enes100
    def simple_test():
        # Team Name, Mission Type, Aruco ID, Room Num
        enes100.begin("Name pending...", "DATA", 205, 1116)
        enes100.println("Connected!")
        
        # There is no get function in the MicroPython package... the location vars are automatically updated.
        # enes100.x -> your x coordinate. 0-4, in meters, -1 if aruco is not visible
        # enes100.y -> your y coordinate. 0-2, in meters, -1 if aruco is not visible
        # enes100.theta -> your theta. -pi to pi, in radians, -1 if aruco is not visible
        while enes100.is_visible:
            enes100.print(f"We are at &lbrace;enes100.x=&rbrace; &lbrace;enes100.y=&rbrace; &lbrace;enes100.theta=&rbrace;")

    simple_test()
            </code></pre>
        </div>
        {:else}
            <div>
                See the example "SimpleTest.ino" by opening the Arduino editor with the library installed. Then click File->Examples-> Enes100->SimpleTest
            </div>
        {/if}
    </details>
    <details>
        <summary>Setting up an Ultrasonic Sensor</summary>
        {#if language === 'MicroPython'}
            <div>
               There are two ways to do this. You can write the code similarly
               to the way you would in Arduino or you can download a library. In
               this example, we are using the library found <a href=
               https://github.com/rsc1975/micropython-hcsr04 target = "_blank"
               rel = "noopener noreferrer"> here. </a>
                    
            <pre><code> 
    # make sure you have properly uploaded the library through Thonny before running the code
    from hcsr04 import HCSR04
    
    sensor = HCSR04(12, 13)
    
    while True:
        distance = sensor.distance_cm()
        print(f'Distance: &lbrace;distance=&rbrace; cm')
        time.sleep(0.1)

            </code></pre>
        </div>
        {:else}
            <div>
            <pre><code>    // defines pins numbers
    const int trigPin = 9;
    const int echoPin = 10;
    // defines variables
    long duration;
    int distance;
    void setup&lpar;&rpar; &lbrace;
        pinMode&lpar;trigPin, OUTPUT&rpar;; // Sets the trigPin as an Output
        pinMode&lpar;echoPin, INPUT&rpar;; // Sets the echoPin as an Input
        Serial.begin&lpar;9600&rpar;; // Starts the serial communication
    &rbrace;
    void loop&lpar;&rpar; &lbrace;
        // Clears the trigPin
        digitalWrite&lpar;trigPin, LOW&rpar;;
        delayMicroseconds&lpar;2&rpar;;
        // Sets the trigPin on HIGH state for 10 micro seconds
        digitalWrite&lpar;trigPin, HIGH&rpar;;
        delayMicroseconds&lpar;10&rpar;;
        digitalWrite&lpar;trigPin, LOW&rpar;;
        // Reads the echoPin, returns the sound wave travel time in microseconds
        duration = pulseIn&lpar;echoPin, HIGH&rpar;;
        // Calculating the distance
        distance = duration * 0.034 / 2;
        // Prints the distance on the Serial Monitor
        Serial.print&lpar;"Distance: "&rpar;;
        Serial.println&lpar;distance&rpar;;
    &rbrace;</code></pre>
            </div>
        {/if}
    </details>
    <details>
        <summary>
            Drive forward until you reach a certain x and y coordinate.
        </summary>
        {#if language === 'MicroPython'}
            <div>
                Please note that this code is pseudocode. It is meant to help
                you understand how to do certain actions. There are multiple
                ways to this.
                <pre><code>
    # Setting a target coordinate of x = 2.5, y = 1.5
    while (enes100.x &lt; 2.5):
        move_forward()
    
    stop_motors()
    
    if (enes100.y &gt; 1.5):
        while enes100.x &gt; 1.5:
            move_down()
    else:
        while enes100.y &lt; 1.5:
            move_up()
        
    stop_motors()
                </code></pre>
            </div>
        {:else}
            <div>
            This code uses the old style of updateLocation and Enes100.location.x. Note that this code is pseudocode. Its purpose is to help you understand how to do certain actions. There are
            multiple ways to do this.
            <pre><code>
    //Setting a target of x = 2.5, y = 1.5
    while &lpar;!Enes100.updateLocation&lpar;&rpar;&rpar;; //will keep running until successfully update location
    while&lpar;Enes100.location.x &lt; 2.5&rpar; &lbrace;  //move to x = 2.5
        Enes100.updateLocation&lpar;&rpar;;
        moveForward&lpar;&rpar;;
    &rbrace;
    stop&lpar;&rpar;;
    if&lpar;Enes100.location.y &gt; 1.5&rpar; &lbrace; //if we are above the target, move down, otherwise move up.
        Enes100.updateLocation&lpar;&rpar;;
        moveDown&lpar;&rpar;;
    &rbrace; else &lbrace;
        Enes100.updateLocation&lpar;&rpar;;
        moveUp&lpar;&rpar;;
    &rbrace;</code></pre>
        </div>
        {/if}
    </details>
    <details>
        <summary>Rotate to a certain theta coordinate</summary>
        {#if language === 'MicroPython'}
            <div>
                Please note that this code is pseudocode. It is meant to help
                you understand how to do certain actions. There are multiple
                ways to this.
                <pre><code>
    # These functions will make your OTV turn to a specified theta
    # function used to keep your turn speed within a set range
    def constrain(val, min_val, max_val):
            return min(max_val, max(min_val, val))

    # turns OTV to target angle
    def set_angle(target):
        print(f"Targeting angle: &lbraces;target=&rbraces;")
        
        # The following line runs our targeting code WHILE the DIFFERENCE (subtraction is taking the difference) is between -thresh and thresh. 
        # We take the absolute value of the difference in order to compare it to a single threshold.
        while (abs(target - Enes100.theta)) &gt; threshold:
            turnValue = someConstant * (target - currentTheta);
            turnValue = constrain(turnValue, -MAX_TURN_SPEED, MAX_TURN_SPEED); # Constrain your turn speed.
            set_motors(turnValue, -turnValue); # you will need to implement this.
            set_motors(speed)
        
        stop_motors()
        print(f"Reached &lbraces;target=&rbraces;")

                </code></pre>
            </div>
        {:else}
            <div>
                Note that this code is pseudocode. Its purpose is to help you understand how to do certain actions. There are multiple ways to do this.
                <pre><code>
    // This function will make the OTV turn to a certain location.
    void setAngle&lpar;target&rpar; &lbrace;
        print&lpar;"Targeting angle: "&rpar;; println&lpar;target&rpar;;
        // The following line runs our targeting code WHILE the DIFFERENCE &lpar;subtraction is taking the difference&rpar; is between -thresh and thresh.
        // We take the absolute value of the difference in order to compare it to a single threshold.
        while &lpar;abs&lpar;target - currentTheta&rpar; &gt; threshold&rpar; &lbrace;
            turnValue = someConstant * &lpar;target - currentTheta&rpar;;
            turnValue = constrain&lpar;turnValue, -MAX_TURN_SPEED, MAX_TURN_SPEED&rpar;; //Constrain your turn speed.
            setMotors&lpar;turnValue, -turnValue&rpar;; // You will need to implement this yourself.
        &rbrace;
        print&lpar;"Got to angle!"&rpar;;
        setMotors&lpar;0, 0&rpar;;
    &rbrace;</code></pre>
        </div>
    {/if}
    </details>
</div>
