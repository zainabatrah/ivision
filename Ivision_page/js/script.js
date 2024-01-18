// This part is for the intro video, it enables us to replay the video indefinitely
const video = document.getElementById('intro_vid');
video.autoplay = true;
video.muted = true;
video.controls = false;

video.addEventListener('ended', function replayvid() {
    video.currentTime = 0;
    video.play();
});

// This part is for the "read more" text part
document.getElementById('more_text').style.display = 'none';
document.getElementById('read_more').addEventListener('click', function readmorefunc() {
    var moretext = document.getElementById('more_text');
    if (moretext.style.display === 'none') {
        moretext.style.display = 'inline';
        this.innerText = 'Read less\n';
    } else {
        moretext.style.display = 'none';
        this.innerText = 'Read more\n';
    }
});
