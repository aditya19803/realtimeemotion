# Real-Time emotion detection

Data Set Link - https://www.kaggle.com/jonathanoheix/face-expression-recognition-dataset

create a folder/directory named templates and keep index.html file in it and static directory and keep the script.js and style.css files in it. The templates and static directories should be created in same directory which has Flask app file.

Model: Developed a Convolutional Neural Network (CNN) using Keras and TensorFlow to classify facial expressions into seven categories (Angry, Disgust, Fear, Happy, Neutral, Sad, Surprise). Achieved model training with data augmentation and various optimizers, and visualized the training and validation performance.

FastAPI Web Application: Built a web application using FastAPI for real-time emotion detection. Integrated the trained CNN model and OpenCV for face detection, allowing users to upload images and receive emotion predictions.

Deployment and Optimization: Implemented model checkpoints, early stopping, and learning rate reduction for efficient training. Deployed the application with a user-friendly interface using Jinja2 templates, ensuring accurate and fast predictions.
