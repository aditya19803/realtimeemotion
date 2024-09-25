const video = document.getElementById('video');
const overlay = document.getElementById('overlay');
const context = overlay.getContext('2d');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: ", err);
    });

video.addEventListener('play', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    setInterval(() => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const formData = new FormData();
            formData.append('file', blob, 'frame.png');

            fetch('/predict/', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                drawPredictions(data.predictions);
            })
            .catch(err => {
                console.error("Error during prediction: ", err);
            });
        }, 'image/png');
    }, 1000);  // Adjust interval as needed for real-time performance
});

function drawPredictions(predictions) {
    context.clearRect(0, 0, overlay.width, overlay.height);

    predictions.forEach(prediction => {
        const { x, y, w, h, label } = prediction;

        // Draw the bounding box
        context.strokeStyle = 'yellow';
        context.lineWidth = 2;
        context.strokeRect(x, y, w, h);

        // Draw the label
        context.fillStyle = 'yellow';
        context.font = '16px Arial';
        context.fillText(label, x, y - 10);
    });
}
