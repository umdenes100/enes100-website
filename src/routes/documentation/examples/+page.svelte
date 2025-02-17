<script lang="ts">
    import ToggleSwitch from "$lib/ToggleSwitch.svelte";

    let language: 'Arduino C++' | 'MicroPython' = 'Arduino C++';
</script>

<div class="text">
    <h1>Examples</h1>
    <div style="padding: 10px">
        <ToggleSwitch bind:value={language} label="Choose a language" design="multi" options={['Arduino C++', 'MicroPython']} fontSize={12}></ToggleSwitch>
    </div>
    <details>
        <summary>Initializing the Wifi Module and Updating the Location</summary>
        {#if language === 'MicroPython'}
            <div>
                ... todo Ann-Audrey example
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
                ... todo Ann-Audrey example
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
        <div>
            This code uses the old style of updateLocation and Enes100.location.x. Note that this code is pseudocode. Its purpose is to help you understand how to do certain actions. There are
            multiple ways to do this.
            <pre><code>
    //Setting a target of x = 2.5, y = 1.5
    while &lpar;!Enes100.updateLocation&lpar;&rpar;&rpar;; //will keep running until succesfully update location
    while&lpar;Enes100.location.x &lt; 2.5&rpar; &lbrace;  //move to x = 2.5
        Enes100.updateLocation&lpar;&rpar;;
        moveForward&lpar;&rpar;;
    &rbrace;
    stop&lpar;&rpar;;
    if&lpar;Enes100.locaiton.y &gt; 1.5&rpar; &lbrace; //if we are above the target, move down, otherwise move up.
        Enes100.updateLocation&lpar;&rpar;;
        moveDown&lpar;&rpar;;
    &rbrace; else &lbrace;
        Enes100.updateLocaiton&lpar;&rpar;;
        moveUp&lpar;&rpar;;
    &rbrace;</code></pre>
        </div>
    </details>
    <details>
        <summary>Rotate to a certain theta coordinate</summary>
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
    </details>
</div>
