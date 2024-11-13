<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>


<div class="main_content">
    <HeaderBar></HeaderBar>
        <div class="text">
        <MarkdownContent>
# Machine Learning Information and Links
## <span style="color: red">Machine Learning Update 11/12/2024</span>
A new version of cameras are available for students who have completed their model training. These new cameras are not capable of data collection.
(They will not create a wifi network wificam-%d). They are more reliable as wifi Modules. Please ask your UTF to contact Forrest for
how to swap out your camera once you have finished data collection and have trained your model.

### Notes on <span style="color: red">NEW CAMERAS ONLY:</span>
NEW WifiCams have a new LED blinking system to give you more information about debugging the system.

- Single blip - Setup complete, camera successfully initialized.
- Triple blip - connected to wifi network / vision system

Error Conditions:
- Infinite blinking (1s on, 1s off) - This means the CAM is connected to wifi but not connect to vision system. Probably you need to restart the vision system. Make sure the switch is in the right position.
- Agressive Sawtooth (pulsing) that repeats 2x a second - CAMERA initialization ERROR. This happened every once and a while for me. You must restart, it could also possibly be a broken camera.
- NO LIGHT ON AT ALL - If you see a single blip and then NO other blips and , this means it was unable to connect to the wifi network. Ensure correct switch position and reset power.

Success Conditions:
 - Solid light on indicates it has connected to the vision system. Not seeing it on the vision system? Maybe it connected to the other room's vision system. Ensure correct switch position. If this light is solid on, it means that at one point it SUCESSFULLY CONNECTED to *A* vision system for some amount of time.

## Procedure Summary
Please read the detailed steps for this process [here](https://docs.google.com/document/d/e/2PACX-1vQ62vc19j6C2-0Kt96RCXP47GEOVDUF8kx1D0DLjhxCqnHA-1scFjtmLmQ8KGbFA4QTX7Vno-3M_Wva/pub).
1. Determine the categories you will classify images in to. (In the lesson, this was thumbs up/thumbs down.)
2. Didn't do the lesson/activity in class? Feel free to do the activity yourself (it takes about 20 minutes) [here](https://colab.research.google.com/drive/1oN1PaApCx8lXFLCyGs9ZnhK8Sk2WBDNH?usp=sharing).
3. Gather training images of all categories using a WiFi Cam.
4. Train a model on Google Colab using [this notebook](https://colab.research.google.com/drive/1UgAg3rmqENqiPOPe5mAHOpDjTshxs0hI?usp=sharing&authuser=1).
5. Upload the model. (See model upload below)
6. Connect the WiFi Cam to your Arduino and request predictions from your model!
## Model Upload
Click [here](https://enes100.umd.edu/tools/modeluploader) to upload a trained model.
## WIFI Cam CAD
<a href="/cad/WiFiCam%20Case%20(with%20camera).f3z" download>Download Cam Case with camera model</a>, best for placing in CAD.
<a href="/cad/WiFiCamCASE.step" download>Download Cam Case as STEP file</a>, best for editing/customizing in CAD.
<a href="/cad/WiFiCamCASE.stl" download>Download Cam Case as STL file</a>, best for 3D printing.<br><br>
Below is an example of a possible mount to connect the camera. The hole is sized for an M4 screw.
<img src="/img/sample_mount.jpg" alt="no_pic" width=50%>
        </MarkdownContent>
    </div>
</div>
