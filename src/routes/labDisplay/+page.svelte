<script
    src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
    type="text/javascript"
    lang="ts"
>
    import { onMount } from "svelte";
    import * as jquery from "jquery";
    onMount(() => {
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let ampmTag = "AM";

            if (hours > 12) {
                hours = hours - 12;
                ampmTag = "PM";
            }
            let mins =
                minutes < 10 ? "0" + minutes.toString() : minutes.toString();
            const timeString = hours.toString() + ":" + mins + " " + ampmTag;
            const dateString = now.toDateString();
            // @ts-ignore
            document.getElementById("time").textContent = timeString;
            // @ts-ignore
            document.getElementById("date").textContent = dateString;
        }

        setInterval(updateClock, 1000);
        updateClock();
        console.log("loaded");

        function listUpcomingEvents() {
            const cal_id =
                "c_d54a81fffbd4beafef0ba476b6073fff2020a641dcf026fdb452b6c8ed048560@group.calendar.google.com";
            const api_key = "AIzaSyC17LiMDVTVT13yVuR96Td-QheDzX-6qrM";

            jquery.ajax({
                url:
                    "https://www.googleapis.com/calendar/v3/calendars/" +
                    cal_id +
                    "/events?key=" +
                    api_key,
                data: {
                    timeMin: new Date().toISOString(),
                    singleEvents: true,
                    maxResults: 20,
                    orderBy: "startTime",
                },
                success: function (data) {
                    const events = data.items;
                    const time = new Date();
                    var currOutput = events.reduce(
                        (
                            selections: { name: any; time: string }[],
                            event: {
                                end: { dateTime: string | number | Date };
                                start: { dateTime: string | number | Date };
                                summary: any;
                            },
                        ) => {
                            const endTime = new Date(
                                event.end.dateTime,
                            ).getTime();
                            const currTime = time.getTime();
                            const startTime = new Date(
                                event.start.dateTime,
                            ).getTime();
                            if (endTime > currTime && startTime < currTime) {
                                const startHour = new Date(
                                    event.start.dateTime,
                                ).getHours();
                                const startMins = new Date(
                                    event.start.dateTime,
                                ).getMinutes();
                                const endHour = new Date(
                                    event.end.dateTime,
                                ).getHours();
                                const endMins = new Date(
                                    event.end.dateTime,
                                ).getMinutes();
                                const start = `${startHour > 12 ? startHour - 12 : startHour}:${startMins < 10 ? "0" + startMins : startMins} ${startHour > 12 ? "PM" : "AM"}`;
                                const end = `${endHour > 12 ? endHour - 12 : endHour}:${endMins < 10 ? "0" + endMins : endMins} ${endHour > 12 ? "PM" : "AM"}`;
                                const time = `${start} - ${end}`;
                                selections.push({
                                    name: event.summary,
                                    time: time,
                                });
                            }
                            return selections;
                        },
                        [],
                    );
                    let currHTML = ``;

                    if (currOutput.length == 0) {
                        currHTML =
                            currHTML + '<div class="staff"><h4>None</h4></div>';
                    } else {
                        for (const staff of currOutput) {
                            currHTML =
                                currHTML +
                                `<div class=\"staff\"><h4>${staff.name}</h4><h5>${staff.time}</h5></div>`;
                        }
                    }
                    // @ts-ignore
                    document.getElementById("currentStaff").innerHTML =
                        currHTML;

                    const events2 = data.items;
                    const upOutput = events2.reduce(
                        (
                            selections: { name: any; time: string }[],
                            event: {
                                status: string;
                                end: { dateTime: string | number | Date };
                                start: { dateTime: string | number | Date };
                                summary: any;
                            },
                        ) => {
                            if (event.status != "cancelled") {
                                const endTime = new Date(
                                    event.end.dateTime,
                                ).getTime();
                                const currTime = time.getTime() + 3600000;
                                const startTime = new Date(
                                    event.start.dateTime,
                                ).getTime();
                                if (
                                    endTime > currTime &&
                                    startTime < currTime
                                ) {
                                    const startHour = new Date(
                                        event.start.dateTime,
                                    ).getHours();
                                    const startMins = new Date(
                                        event.start.dateTime,
                                    ).getMinutes();
                                    const endHour = new Date(
                                        event.end.dateTime,
                                    ).getHours();
                                    const endMins = new Date(
                                        event.end.dateTime,
                                    ).getMinutes();
                                    const start = `${startHour > 12 ? startHour - 12 : startHour}:${startMins < 10 ? "0" + startMins : startMins} ${startHour > 12 ? "PM" : "AM"}`;
                                    const end = `${endHour > 12 ? endHour - 12 : endHour}:${endMins < 10 ? "0" + endMins : endMins} ${endHour > 12 ? "PM" : "AM"}`;
                                    const time = `${start} - ${end}`;
                                    selections.push({
                                        name: event.summary,
                                        time: time,
                                    });
                                }
                            }
                            return selections;
                        },
                        [],
                    );
                    let upHTML = ``;
                    for (const staff of upOutput) {
                        if (!isObjectInArray(currOutput, staff)) {
                            upHTML =
                                upHTML +
                                `<div class=\"staff\"><h4>${staff.name}</h4><h5>${staff.time}</h5></div>`;
                        }
                    }
                    if (upHTML == ``) {
                        upHTML =
                            upHTML + '<div class="staff"><h4>None</h4></div>';
                    }
                    // @ts-ignore
                    document.getElementById("upcomingStaff").innerHTML = upHTML;

                    function isObjectInArray(
                        array: any[],
                        obj: { [x: string]: any },
                    ) {
                        return array.some((item) => {
                            return Object.keys(obj).every((key) => {
                                return obj[key] === item[key];
                            });
                        });
                    }
                },
            });
        }
        console.log("bello");
        setInterval(listUpcomingEvents, 5000);
        listUpcomingEvents();
    });
</script>

<div class="left">
    <!-- title -->
    <h1>ENES100 Lab Classroom</h1>
    <!-- date -->
    <!-- svelte-ignore a11y-missing-content -->
    <h2 id="date"></h2>
    <!-- time -->
    <!-- svelte-ignore a11y-missing-content -->
    <h2 id="time"></h2>
    <!-- current staff -->
    <h3>Current LTF Staff</h3>
    <div id="currentStaff"></div>
    <!-- upcoming staff -->
    <h3>Upcoming LTF Staff</h3>
    <div id="upcomingStaff"></div>
</div>
<div class="right">
    <div class="slides">
        <iframe
            title="todo"
            src="https://docs.google.com/presentation/d/e/2PACX-1vQshpQrN-5ifpcAwfHRhPMokFbLqfxT7rOuIk1xMZsF1lrTIUK7oz9AnRLKkW95pN6V0R0P1ehdI1f9/embed?start=false&loop=false&delayms=3000&rm=minimal"
            frameborder="0"
            width="100%"
            height="100%"
            style="background-color:#121B21;"
        ></iframe>
    </div>
    <!-- <div class="misc">
        <h3>Misc Info</h3>
    </div> -->
</div>

<style>
    h1 {
        text-align: center;
    }

    h3 {
        margin: 5px;
    }
</style>
