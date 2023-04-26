console.log("Welcome to Kong-Music!");

let audioElement1 = new Audio("music/m1.mp3");
let audioElement2 = new Audio("music/m2.mp3");
let audioElement3 = new Audio("music/m3.mp3");
let audioElement4 = new Audio("music/m4.mp3");
let audioElement5 = new Audio("music/m5.mp3");
let audioElement6 = new Audio("music/m6.mp3");
let audioElement7 = new Audio("music/m7.mp3");
let audioElement8 = new Audio("music/m8.mp3");
let audioElement9 = new Audio("music/m9.mp3");
let audioElement10 = new Audio("music/m10.mp3");

let masterPlay = document.getElementById("play");
let masterPause = document.getElementById("pause");
let masterPlay1 = document.getElementById("startTp1");
let masterPause1 = document.getElementById("stopTp1");
let masterPlay2 = document.getElementById("startTp2");
let masterPause2 = document.getElementById("stopTp2");
let masterPlay3 = document.getElementById("startTp3");
let masterPause3 = document.getElementById("stopTp3");
let masterPlay4 = document.getElementById("startTp4");
let masterPause4 = document.getElementById("stopTp4");
let masterPlay5 = document.getElementById("startTp5");
let masterPause5 = document.getElementById("stopTp5");
let masterPlay6 = document.getElementById("startTp6");
let masterPause6 = document.getElementById("stopTp6");
let masterPlay7 = document.getElementById("startTp7");
let masterPause7 = document.getElementById("stopTp7");
let masterPlay8 = document.getElementById("startTp8");
let masterPause8 = document.getElementById("stopTp8");
let masterPlay9 = document.getElementById("startTp9");
let masterPause9 = document.getElementById("stopTp9");
let masterPlay10 = document.getElementById("startTp10");
let masterPause10 = document.getElementById("stopTp10");

let progressbar = document.getElementById("howMuch");

masterPlay.addEventListener('click', () => {
    if (audioElement1.paused && audioElement2.paused && audioElement3.paused && audioElement4.paused && audioElement5.paused && audioElement6.paused && audioElement7.paused && audioElement8.paused && audioElement9.paused && audioElement10.paused) {
        audioElement1.play();
        startTp1.style.visibility = "hidden";
        stopTp1.style.visibility = "visible";
        playingMusic1.style.display = "block";
        stopTp1.style.position = "relative";
        isFunctionRunning = 1;
    }
    else {
        audioElement1.play();
        audioElement2.play();
        audioElement3.play();
        audioElement4.play();
        audioElement5.play();
        audioElement6.play();
        audioElement7.play();
        audioElement8.play();
        audioElement9.play();
        audioElement10.play();
    }
});
masterPause.addEventListener('click', () => {
    if (audioElement1.played || audioElement2.played || audioElement3.played || audioElement4.played || audioElement5.played || audioElement6.played || audioElement7.played || audioElement8.played || audioElement9.played || audioElement10.played) {
        audioElement1.pause();
        audioElement1.currentTime = 0;
        startTp1.style.visibility = "visible";
        stopTp1.style.visibility = "hidden";
        playingMusic1.style.display = "none";
        stopTp1.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement2.pause();
        audioElement2.currentTime = 0;
        startTp2.style.visibility = "visible";
        stopTp2.style.visibility = "hidden";
        playingMusic2.style.display = "none";
        stopTp2.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement3.pause();
        audioElement3.currentTime = 0;
        startTp3.style.visibility = "visible";
        stopTp3.style.visibility = "hidden";
        playingMusic3.style.display = "none";
        stopTp3.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement4.pause();
        audioElement4.currentTime = 0;
        startTp4.style.visibility = "visible";
        stopTp4.style.visibility = "hidden";
        playingMusic4.style.display = "none";
        stopTp4.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement5.pause();
        audioElement5.currentTime = 0;
        startTp5.style.visibility = "visible";
        stopTp5.style.visibility = "hidden";
        playingMusic5.style.display = "none";
        stopTp5.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement6.pause();
        audioElement6.currentTime = 0;
        startTp6.style.visibility = "visible";
        stopTp6.style.visibility = "hidden";
        playingMusic6.style.display = "none";
        stopTp6.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement7.pause();
        audioElement7.currentTime = 0;
        startTp7.style.visibility = "visible";
        stopTp7.style.visibility = "hidden";
        playingMusic7.style.display = "none";
        stopTp7.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement8.pause();
        audioElement8.currentTime = 0;
        startTp8.style.visibility = "visible";
        stopTp8.style.visibility = "hidden";
        playingMusic8.style.display = "none";
        stopTp8.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement9.pause();
        audioElement9.currentTime = 0;
        startTp9.style.visibility = "visible";
        stopTp9.style.visibility = "hidden";
        playingMusic9.style.display = "none";
        stopTp9.style.position = "absolute";
        isFunctionRunning = 0;

        audioElement10.pause();
        audioElement10.currentTime = 0;
        startTp10.style.visibility = "visible";
        stopTp10.style.visibility = "hidden";
        playingMusic10.style.display = "none";
        stopTp10.style.position = "absolute";
        isFunctionRunning = 0;
    }
});
masterPlay1.addEventListener('click', () => {
    if (audioElement1.paused || audioElement1.currentTime <= 0) {
        audioElement1.play();
    }
});
masterPause1.addEventListener('click', () => {
    if (audioElement1.played || audioElement1.currentTime > 0) {
        audioElement1.pause();
        audioElement1.currentTime = 0;
    }
});
masterPlay2.addEventListener('click', () => {
    if (audioElement2.paused || audioElement2.currentTime <= 0) {
        audioElement2.play();
    }
});
masterPause2.addEventListener('click', () => {
    if (audioElement2.played || audioElement2.currentTime > 0) {
        audioElement2.pause();
        audioElement2.currentTime = 0;
    }
});
masterPlay3.addEventListener('click', () => {
    if (audioElement3.paused || audioElement3.currentTime <= 0) {
        audioElement3.play();
    }
});
masterPause3.addEventListener('click', () => {
    if (audioElement3.played || audioElement3.currentTime > 0) {
        audioElement3.pause();
        audioElement3.currentTime = 0;
    }
});
masterPlay4.addEventListener('click', () => {
    if (audioElement4.paused || audioElement4.currentTime <= 0) {
        audioElement4.play();
    }
});
masterPause4.addEventListener('click', () => {
    if (audioElement4.played || audioElement4.currentTime > 0) {
        audioElement4.pause();
        audioElement4.currentTime = 0;
    }
});
masterPlay5.addEventListener('click', () => {
    if (audioElement5.paused || audioElement5.currentTime <= 0) {
        audioElement5.play();
    }
});
masterPause5.addEventListener('click', () => {
    if (audioElement5.played || audioElement5.currentTime > 0) {
        audioElement5.pause();
        audioElement5.currentTime = 0;
    }
});
masterPlay6.addEventListener('click', () => {
    if (audioElement6.paused || audioElement6.currentTime <= 0) {
        audioElement6.play();
    }
});
masterPause6.addEventListener('click', () => {
    if (audioElement6.played || audioElement6.currentTime > 0) {
        audioElement6.pause();
        audioElement6.currentTime = 0;
    }
});
masterPlay7.addEventListener('click', () => {
    if (audioElement7.paused || audioElement7.currentTime <= 0) {
        audioElement7.play();
    }
});
masterPause7.addEventListener('click', () => {
    if (audioElement7.played || audioElement7.currentTime > 0) {
        audioElement7.pause();
        audioElement7.currentTime = 0;
    }
});
masterPlay8.addEventListener('click', () => {
    if (audioElement8.paused || audioElement8.currentTime <= 0) {
        audioElement8.play();
    }
});
masterPause8.addEventListener('click', () => {
    if (audioElement8.played || audioElement8.currentTime > 0) {
        audioElement8.pause();
        audioElement8.currentTime = 0;
    }
});
masterPlay9.addEventListener('click', () => {
    if (audioElement9.paused || audioElement9.currentTime <= 0) {
        audioElement9.play();
    }
});
masterPause9.addEventListener('click', () => {
    if (audioElement9.played || audioElement9.currentTime > 0) {
        audioElement9.pause();
        audioElement9.currentTime = 0;
    }
});
masterPlay10.addEventListener('click', () => {
    if (audioElement10.paused || audioElement10.currentTime <= 0) {
        audioElement10.play();
    }
});
masterPause10.addEventListener('click', () => {
    if (audioElement10.played || audioElement10.currentTime > 0) {
        audioElement10.pause();
        audioElement10.currentTime = 0;
    }
});

audioElement1.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement1.currentTime / audioElement1.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement1.currentTime = (progressbar.value * audioElement1.duration) / 100;
});
audioElement2.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement2.currentTime / audioElement2.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement2.currentTime = (progressbar.value * audioElement2.duration) / 100;
});
audioElement3.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement3.currentTime / audioElement3.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement3.currentTime = (progressbar.value * audioElement3.duration) / 100;
});
audioElement4.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement4.currentTime / audioElement4.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement4.currentTime = (progressbar.value * audioElement4.duration) / 100;
});
audioElement5.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement5.currentTime / audioElement5.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement5.currentTime = (progressbar.value * audioElement5.duration) / 100;
});
audioElement6.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement6.currentTime / audioElement6.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement6.currentTime = (progressbar.value * audioElement6.duration) / 100;
});
audioElement7.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement7.currentTime / audioElement7.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement7.currentTime = (progressbar.value * audioElement7.duration) / 100;
});
audioElement8.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement8.currentTime / audioElement8.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement8.currentTime = (progressbar.value * audioElement8.duration) / 100;
});
audioElement9.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement9.currentTime / audioElement9.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement9.currentTime = (progressbar.value * audioElement9.duration) / 100;
});
audioElement10.addEventListener('timeupdate', () => {
    progress = parseInt(audioElement10.currentTime / audioElement10.duration * 100);
    progressbar.value = progress;
});
progressbar.addEventListener('change', () => {
    audioElement10.currentTime = (progressbar.value * audioElement10.duration) / 100;
});