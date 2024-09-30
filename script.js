document.getElementById("video-background").play();

let day = document.getElementById("day");
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");

setInterval(() => {
    let currentTime = new Date();

    // Display day without commas
    let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    let dateString = currentTime.toLocaleDateString('en-US', options).replace(/,/g, '');
    day.innerHTML = dateString;

    // Display time in 12-hour format with AM/PM
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    hrs.innerHTML = hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    period.innerHTML = ampm;

}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    // Function to handle fullscreen request
    function requestFullscreen() {
        var elem = document.body;

        if (elem.requestFullscreen) {
            elem.requestFullscreen().then(hideButton);
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen().then(hideButton);
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen().then(hideButton);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen().then(hideButton);
        }
    }

    // Function to hide the button
    function hideButton() {
        var fullscreenButton = document.getElementById('fullscreenButton');
        fullscreenButton.classList.add('hidden');
    }

    // Attach click event listener to the button
    var fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.addEventListener('click', requestFullscreen);

    // Event listener to detect when fullscreen mode is exited
    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            // Show the button when exiting fullscreen
            fullscreenButton.classList.remove('hidden');
        }
    });

    document.addEventListener('webkitfullscreenchange', function() {
        if (!document.webkitFullscreenElement) {
            fullscreenButton.classList.remove('hidden');
        }
    });

    document.addEventListener('mozfullscreenchange', function() {
        if (!document.mozFullScreen) {
            fullscreenButton.classList.remove('hidden');
        }
    });

    document.addEventListener('msfullscreenchange', function() {
        if (!document.msFullscreenElement) {
            fullscreenButton.classList.remove('hidden');
        }
    });
});

