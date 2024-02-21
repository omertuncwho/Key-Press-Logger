document.addEventListener('keydown', function(event) {
    document.getElementById('pressedKeyLabel').innerText = 'Key pressed: ' + event.key;
    document.getElementById('asciiCodeLabel').innerText = 'ASCII code: ' + event.keyCode;
});