play = document.getElementById('play');
pause = document.getElementById('pause');
beatImage = document.getElementById('beatImg');

playingMusic1 = document.getElementById('playingMusic1');
playingMusic2 = document.getElementById('playingMusic2');
playingMusic3 = document.getElementById('playingMusic3');
playingMusic4 = document.getElementById('playingMusic4');
playingMusic5 = document.getElementById('playingMusic5');
playingMusic6 = document.getElementById('playingMusic6');
playingMusic7 = document.getElementById('playingMusic7');
playingMusic8 = document.getElementById('playingMusic8');
playingMusic9 = document.getElementById('playingMusic9');
playingMusic10 = document.getElementById('playingMusic10');

startTp1 = document.getElementById('startTp1');
stopTp1 = document.getElementById('stopTp1');
startTp2 = document.getElementById('startTp2');
stopTp2 = document.getElementById('stopTp2');
startTp3 = document.getElementById('startTp3');
stopTp3 = document.getElementById('stopTp3');
startTp4 = document.getElementById('startTp4');
stopTp4 = document.getElementById('stopTp4');
startTp5 = document.getElementById('startTp5');
stopTp5 = document.getElementById('stopTp5');
startTp6 = document.getElementById('startTp6');
stopTp6 = document.getElementById('stopTp6');
startTp7 = document.getElementById('startTp7');
stopTp7 = document.getElementById('stopTp7');
startTp8 = document.getElementById('startTp8');
stopTp8 = document.getElementById('stopTp8');
startTp9 = document.getElementById('startTp9');
stopTp9 = document.getElementById('stopTp9');
startTp10 = document.getElementById('startTp10');
stopTp10 = document.getElementById('stopTp10');

function Play() {
    play.style.visibility = "hidden";
    pause.style.visibility = "visible";
    beatImage.style.visibility = "visible";
    isFunctionRunning = 0;
}
function Pause() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    isFunctionRunning = 1;
    whichSongPlay = 1;
}

var isFunctionRunning = 0;
var whichSongPlay = 0;

function Play1() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp1.style.visibility = "visible";
    stopTp1.style.visibility = "hidden";
    playingMusic1.style.display = "none";
    stopTp1.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause1() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp1.style.visibility = "hidden";
        stopTp1.style.visibility = "visible";
        playingMusic1.style.display = "block";
        stopTp1.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 1;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause1();
    }
}
function Play2() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp2.style.visibility = "visible";
    stopTp2.style.visibility = "hidden";
    playingMusic2.style.display = "none";
    stopTp2.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause2() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp2.style.visibility = "hidden";
        stopTp2.style.visibility = "visible";
        playingMusic2.style.display = "block";
        stopTp2.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 2;
    }
    else {
        Play1();
        audioElement1.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause2();
    }
}
function Play3() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp3.style.visibility = "visible";
    stopTp3.style.visibility = "hidden";
    playingMusic3.style.display = "none";
    stopTp3.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause3() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp3.style.visibility = "hidden";
        stopTp3.style.visibility = "visible";
        playingMusic3.style.display = "block";
        stopTp3.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 3;
    }
    else {
        Play2();
        audioElement2.pause();
        Play1();
        audioElement1.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause3();
    }
}
function Play4() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp4.style.visibility = "visible";
    stopTp4.style.visibility = "hidden";
    playingMusic4.style.display = "none";
    stopTp4.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause4() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp4.style.visibility = "hidden";
        stopTp4.style.visibility = "visible";
        playingMusic4.style.display = "block";
        stopTp4.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 4;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play1();
        audioElement1.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause4();
    }
}
function Play5() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp5.style.visibility = "visible";
    stopTp5.style.visibility = "hidden";
    playingMusic5.style.display = "none";
    stopTp5.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause5() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp5.style.visibility = "hidden";
        stopTp5.style.visibility = "visible";
        playingMusic5.style.display = "block";
        stopTp5.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 5;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play1();
        audioElement1.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause5();
    }
}
function Play6() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp6.style.visibility = "visible";
    stopTp6.style.visibility = "hidden";
    playingMusic6.style.display = "none";
    stopTp6.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause6() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp6.style.visibility = "hidden";
        stopTp6.style.visibility = "visible";
        playingMusic6.style.display = "block";
        stopTp6.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 6;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play1();
        audioElement1.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause6();
    }
}
function Play7() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp7.style.visibility = "visible";
    stopTp7.style.visibility = "hidden";
    playingMusic7.style.display = "none";
    stopTp7.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause7() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp7.style.visibility = "hidden";
        stopTp7.style.visibility = "visible";
        playingMusic7.style.display = "block";
        stopTp7.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 7;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play1();
        audioElement1.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause7();
    }
}
function Play8() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp8.style.visibility = "visible";
    stopTp8.style.visibility = "hidden";
    playingMusic8.style.display = "none";
    stopTp8.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause8() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp8.style.visibility = "hidden";
        stopTp8.style.visibility = "visible";
        playingMusic8.style.display = "block";
        stopTp8.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 8;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play1();
        audioElement1.pause();
        Play9();
        audioElement9.pause();
        Play10();
        audioElement10.pause();

        Pause8();
    }
}
function Play9() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp9.style.visibility = "visible";
    stopTp9.style.visibility = "hidden";
    playingMusic9.style.display = "none";
    stopTp9.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause9() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp9.style.visibility = "hidden";
        stopTp9.style.visibility = "visible";
        playingMusic9.style.display = "block";
        stopTp9.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 9;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play1();
        audioElement1.pause();
        Play10();
        audioElement10.pause();

        Pause9();
    }
}
function Play10() {
    pause.style.visibility = "hidden";
    play.style.visibility = "visible";
    beatImage.style.visibility = "hidden";
    startTp10.style.visibility = "visible";
    stopTp10.style.visibility = "hidden";
    playingMusic10.style.display = "none";
    stopTp10.style.position = "absolute";
    isFunctionRunning = 0;
}
function Pause10() {
    if (isFunctionRunning == 0) {
        play.style.visibility = "hidden";
        pause.style.visibility = "visible";
        beatImage.style.visibility = "visible";
        startTp10.style.visibility = "hidden";
        stopTp10.style.visibility = "visible";
        playingMusic10.style.display = "block";
        stopTp10.style.position = "relative";
        isFunctionRunning = 1;
        whichSongPlay = 10;
    }
    else {
        Play2();
        audioElement2.pause();
        Play3();
        audioElement3.pause();
        Play4();
        audioElement4.pause();
        Play5();
        audioElement5.pause();
        Play6();
        audioElement6.pause();
        Play7();
        audioElement7.pause();
        Play8();
        audioElement8.pause();
        Play9();
        audioElement9.pause();
        Play1();
        audioElement1.pause();

        Pause10();
    }
}

function Forward() {
    if (whichSongPlay == 1) {
        audioElement1.pause();
        Play1();
        Pause2();
        audioElement2.play();
    }
    if (whichSongPlay == 2) {
        audioElement2.pause();
        Play2();
        Pause3();
        audioElement3.play();
    }
    if (whichSongPlay == 3) {
        audioElement3.pause();
        Play3();
        Pause4();
        audioElement4.play();
    }
    if (whichSongPlay == 4) {
        audioElement4.pause();
        Play4();
        Pause5();
        audioElement5.play();
    }
    if (whichSongPlay == 5) {
        audioElement5.pause();
        Play5();
        Pause6();
        audioElement6.play();
    }
    if (whichSongPlay == 6) {
        audioElement6.pause();
        Play6();
        Pause7();
        audioElement7.play();
    }
    if (whichSongPlay == 7) {
        audioElement7.pause();
        Play7();
        Pause8();
        audioElement8.play();
    }
    if (whichSongPlay == 8) {
        audioElement8.pause();
        Play8();
        Pause9();
        audioElement9.play();
    }
    if (whichSongPlay == 9) {
        audioElement9.pause();
        Play9();
        Pause10();
        audioElement10.play();
    }
    if (whichSongPlay == 10) {
        audioElement10.pause();
        Play10();
        Pause1();
        audioElement1.play();
    }
}
function Backward() {
    if (whichSongPlay == 1) {
        audioElement1.pause();
        Play1();
        Pause10();
        audioElement10.play();
    }
    if (whichSongPlay == 2) {
        audioElement2.pause();
        Play2();
        Pause1();
        audioElement1.play();
    }
    if (whichSongPlay == 3) {
        audioElement3.pause();
        Play3();
        Pause2();
        audioElement2.play();
    }
    if (whichSongPlay == 4) {
        audioElement4.pause();
        Play4();
        Pause3();
        audioElement3.play();
    }
    if (whichSongPlay == 5) {
        audioElement5.pause();
        Play5();
        Pause4();
        audioElement4.play();
    }
    if (whichSongPlay == 6) {
        audioElement6.pause();
        Play6();
        Pause5();
        audioElement5.play();
    }
    if (whichSongPlay == 7) {
        audioElement7.pause();
        Play7();
        Pause6();
        audioElement6.play();
    }
    if (whichSongPlay == 8) {
        audioElement8.pause();
        Play8();
        Pause7();
        audioElement7.play();
    }
    if (whichSongPlay == 9) {
        audioElement9.pause();
        Play9();
        Pause8();
        audioElement8.play();
    }
    if (whichSongPlay == 10) {
        audioElement10.pause();
        Play10();
        Pause9();
        audioElement9.play();
    }
}