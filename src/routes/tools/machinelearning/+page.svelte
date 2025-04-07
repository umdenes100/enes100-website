<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>


<div class="main_content">
    <HeaderBar></HeaderBar>
        <div class="text">
        <MarkdownContent>
# Machine Learning Information and Links
## <span style="color: red">Machine Learning Update 4/7/2025</span>
The machine learning cameras ignore the room argument in enes100 begin. You must set the switch position correctly in order to connect the cam.

To test a cam:
Power with 5V and GND from an arduino.
Look on Vision System. You should see a message like "New Wi-Fi Cam connected, waiting for begin"
If not, try removing power, switching the switch, and adding power.

As always, please ask a UTF or LTF for help if you are stuck or having trouble!

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
