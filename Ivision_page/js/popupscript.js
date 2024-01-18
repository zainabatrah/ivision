// Function to open the iframe when a button is clicked
function openIframe() {
    var iframe = document.getElementById("iframeContainer");
    var back = document.getElementById('big_row');

    if (iframe && back) {
        iframe.style.display = 'block';

    }
}

// Get a NodeList of all elements with the class 'order'
var orderButtons = document.getElementsByClassName("order");

// Loop through each element and add the click event listener
for (var i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener('click', openIframe);
}
    
function closedframe() {
    var iframe = document.getElementById("iframeContainer");
    // var back = document.getElementById('big_row');

        iframe.style.display = 'none';
}

// Get a NodeList of all elements with the class 'order'
document.getElementById("popup_submit_btn").addEventListener('click', closedframe);
