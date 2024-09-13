<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
    import HeaderBar from "$lib/HeaderBar.svelte";
</script>


<div class="main_content">
    <HeaderBar></HeaderBar>
    <slot>
        <div class="text">
        <MarkdownContent>
# Machine Learning Information and Links
## Procedure Summary
Detailed steps for this process can be found [here](https://docs.google.com/document/d/e/2PACX-1vQ62vc19j6C2-0Kt96RCXP47GEOVDUF8kx1D0DLjhxCqnHA-1scFjtmLmQ8KGbFA4QTX7Vno-3M_Wva/pub).
1. Determine the categories you will classify images in to. (In the lesson, this was thumbs up/thumbs down.)
2. Didn't do the lesson/activity in class? Feel free to do the activity yourself (it takes about 20 minutes) [here](https://colab.research.google.com/drive/1oN1PaApCx8lXFLCyGs9ZnhK8Sk2WBDNH?usp=sharing).
3. Gather training images of all categories using a WiFi Cam.
4. Train a model on Google Colab using [this notebook](https://colab.research.google.com/drive/1UgAg3rmqENqiPOPe5mAHOpDjTshxs0hI?usp=sharing&authuser=1).
5. Upload the model. (See model upload below)
6. Connect the WiFi Cam to your Arduino and request predictions from your model!
## Model Upload
Click [here](https://enes100.umd.edu/uploadmodel) to upload a trained model.
## WIFI Cam CAD
<a href="/img/WiFiCam%20Case%20(with%20camera).f3z" download>Download Cam Case with camera model</a>, best for placing in CAD.
<a href="/img/WiFiCamCASE.step" download>Download Cam Case as STEP file</a>, best for editing/customizing in CAD.
<a href="../img/WiFiCamCASE.stl" download>Download Cam Case as STL file</a>, best for 3D printing.<br><br>
Below is an example of a possible mount to connect the camera. The hole is sized for an M4 screw.
<img src="/static/img/sample_mount.jpg" alt="no_pic" width=50%>
        </MarkdownContent>
    </div>
    </slot>
</div>

