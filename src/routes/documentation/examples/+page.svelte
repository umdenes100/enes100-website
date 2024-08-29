<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>

<style>
    details {
        margin-bottom: 20px;
    }

    summary {
        background-color: #3C3C3C;
        color: white;
        cursor: pointer;
        padding: 18px;
        font-size: 18px;
        /*margin-bottom: 10px;*/
    }

    summary:hover {
        background-color: #555555;
    }

    details div {
        border-top: 2px solid rgba(226, 24, 51, 1.00);
        /*margin-top: -10px;*/
        padding: 18px;
        /*overflow: hidden;*/
        background-color: #FFFFFF;
        color: rgb(18, 27, 33);
    }
</style>
<div class="text">


    <h1>Examples</h1>
    <details>
        <summary>makrdwon content</summary>
        <div>
            <MarkdownContent>
                ```
img
    some more code
some more here

```
            </MarkdownContent>
        </div>
    </details>
    <details>
        <summary>Why are my pointers not working in the simulator?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my OTV not turning to the direction I want it to?</summary>
        <div></div>
    </details>
    <details>
        <summary>How do I get my servo motor to stop jittering?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my OTV just driving in a circle in the arena?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my sensor or motor not responding to my code?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my sensor working but not being triggered by the expected action?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why isn't my WiFi module working?</summary>
        <div></div>
    </details>
    <details>
        <summary>How do I check for shorts in my circuit?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my soldering iron not working/why can I not solder?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why is my laser cut not working/the wrong size?</summary>
        <div></div>
    </details>
    <details>
        <summary>Why are my servos, motors, and or other linear actions (components which run continuously) not working even though enough voltage is being applied?
        </summary>
        <div></div>
    </details>
    <details>
        <summary>When I try to use pinMode() on the Tx and Rx pins, why does the wifi module does not work?</summary>
        <div></div>
    </details>

</div>