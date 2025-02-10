<script>
    import SidebarPage from "$lib/SidebarLayout.svelte";
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>


<SidebarPage>
    <div slot="sidebar">
        <a href="#download">Download and Installation</a>
        <a href="#setup">Setup</a>
        <a href="#begin">Enes100.begin()</a>
        <a href="#update">Enes100.getX() and similar</a>
        <a href="#isConnected">Enes100.isConnected()</a>
        <a href="#print">Enes100.print()</a>
        <a href="#println">Enes100.println()</a>
        <a href="#mission">Enes100.mission()</a>
        <a href="#ml_pred">Enes100.MLGetPrediction()</a>
        <a href="#example">Example Code and Debugging</a>
        <a href="#demo">Product Demonstration</a>
    </div>
    <MarkdownContent>
# Enes100 Micropython Library

A PyPl library for use in the ENES100 course to allow ESP32 microcontrollers to communicate with the ENES100 Vision System via on-board WiFi.

## Download and Installation <a id="download"> </a>
You must download Thonny IDE to your computer. The latest version can be downloaded from the [Thonny website](https://thonny.org/).

ESP32 does not have Micropython installed by default, so you will need to flash the board with the correct firmware. You will need to download this file: [download](https://micropython.org/resources/firmware/ESP32_GENERIC-20241129-v1.24.1.bin).

### Flashing MicroPython Firmware using Thonny IDE


    </MarkdownContent>
</SidebarPage>
