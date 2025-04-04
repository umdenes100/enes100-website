<script lang="ts">

    import {listStorage, progress, uploadFile} from "./fb";
    import {tick} from "svelte";
    import {getDatabase, ref, set} from "firebase/database";
    import HeaderBar from "$lib/HeaderBar.svelte";

    let teamname = "";
    let modelFile: FileList;
    let modelIndex: number = 1;
    let existingfiles: string[] = [];
    let outputcategories: number = 2;
    (async () => {
        existingfiles = await listStorage();
    })();

    function isTeamNameValid(_: string): boolean {
        return /^[a-zA-Z0-9]+$/.test(teamname) && teamname.length > 0 && teamname.length < 20;
    }

    async function upload() {
        console.log(modelFile.length)
        if (modelFile.length != 1) {
            alert("Please select a file to upload.");
            return;
        }
        if (modelFile[0].size > 200_000_000) {
            alert("Please select a file smaller than 50MB.");
            return;
        }
        await tick();
        await uploadFile(outputpath, modelFile[0]);
        updateLatestWriteTime();
        existingfiles = await listStorage();
    }

    function updateLatestWriteTime() {
        set(ref(getDatabase(), '/'), Date.now());
    }

    let outputpath = "", replacement = false;
    $: outputpath = teamname + "_" + modelIndex + "_" + outputcategories + ".pth";
    $: replacement = existingfiles.includes(outputpath);
</script>

<div class="main_content">
    <HeaderBar></HeaderBar>
    <div class="text">

        <h1 style="margin-top: 20px">Enes100 ML Model Uploading</h1>
        <p>
            Please enter your team name. Be careful, team names must be exact. <b>THIS MUST MATCH THE CALL TO
            ENES100.begin</b>. It also must be unique to all sections - you might try appending your section number to the
            end of your team name.
        </p>
        <label for="teamname">
            Your team name. No spaces, only letters and numbers.
            <input type="text" id="teamname" placeholder="Team Name" bind:value={teamname}
                   aria-invalid={!isTeamNameValid(teamname)} on:change={() => progress.set({state: 'idle', progress: 0})}>
            {#if !(/^[a-zA-Z0-9]+$/.test(teamname)) && teamname.length > 0}
                <p class="error">Team name must only contain letters and numbers. No spaces!</p>
            {/if}
            {#if teamname.length > 20}
                <p class="error">Team name must be less than 20 characters.</p>
            {/if}
        </label>
        <label for="modelfile">
            Model file
            <input type="file" id="modelfile" accept=".pth" bind:files={modelFile}
                   aria-invalid={!modelFile} on:change={() => progress.set({state: 'idle', progress: 0})}>
        </label>
        <label for="modelindex">
            Model index<br>
            <small> Each team is allowed as many models as needed. Use a unique index (positive integer between 0 and 255) for each model you wish to use.
            </small>
            <input type="number" id="modelindex" placeholder="Model Index" bind:value={modelIndex} min={0} max={255}
                   aria-invalid={modelIndex <= 0}>
        </label>
        <small>The .pth file downloaded from your training run in the jupyter notebook.</small>
        <label for="outputcategories">
            Number of Output Categories
            <input type="number" id="outputcategories" placeholder="Output Categories" bind:value={outputcategories}
                   aria-invalid={!(0 < outputcategories && outputcategories < 10)}>
        </label>
        <small>How many output categories does your model use? This is the number of categories you trained your model
            on.</small>
        {#if $progress.state === 'idle'}
            <p>You are ready to upload!</p>
            <input type="button" on:click={upload} value="Upload"
                   disabled={!(isTeamNameValid(teamname) && modelFile)}>
            {#if modelFile?.length === 1}
                <small>Your file will be saved as <code>{outputpath}</code>.</small>
                {#if replacement}
                    <p style="color: red">This will replace your teams previously uploaded model.
                        <small>If this is your first time uploading a model, please change your team name (maybe add your
                            section name to the end?) Make sure you update your Enes100.begin call with your updated team
                            name!</small></p>
                {/if}
            {/if}
        {:else if $progress.state === 'uploading'}
            <p>Uploading...</p>
            <progress value={$progress.progress} max="100"></progress>
        {:else if $progress.state === 'done'}
            <p>Upload complete!</p>
        {:else if $progress.state === 'error'}
            <p class="error">Upload failed. Please try again.</p>
            <p>{$progress.error}</p>
        {/if}
        <details>
            <summary class="secondary">
                See all uploaded models
            </summary>
            <ul>
                {#each existingfiles as file}
                    <li><code>{file}</code></li>
                {/each}
            </ul>
            <small>Models are cleared on a semester basis.</small>
        </details>
    </div>
</div>

<style>
    .error {
        color: red;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input {
        background: transparent;
        border: 3px solid rgb(46, 125, 50);
        border-radius: .25em;
        font-size: 19px;
        padding: 10px;
        outline: none;
        color: lightgrey;
    }

    input:active {
        outline: none;
        box-shadow: 0 0 0 4px rgba(46, 125, 50, 0.3);
    }

    input:invalid {
        border-color: red;
    }

    input:invalid:active {
        box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.3);
    }

    p, h1 {
        margin: 0;
    }

    input[type=button] {
        cursor: pointer;
    }

    input[type=button]:disabled {
        opacity: 50%;
        cursor: not-allowed;
        border-color: grey;
    }
</style>