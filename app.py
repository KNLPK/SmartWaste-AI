from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import img_to_array, load_img
import numpy as np
import os

# Initialize Flask app
app = Flask(__name__, template_folder='templates')

# Load the AI model - File di .h5 di rename menjadi afterModel.h5
model = load_model('afterModel.h5')

# Class mapping
number_to_class = {
    0: "Cardboard",
    1: "Glass",
    2: "Metal",
    3: "Paper",
    4: "Plastic",
    5: "Trash"
}

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for the login page
@app.route('/login')
def login():
    return render_template('login.html')

# Route for the detect trash page
@app.route('/detect_trash', methods=['GET', 'POST'])
def detect_trash():
    if request.method == 'GET':
        # Render the detection page
        return render_template('detect-trash.html')

    elif request.method == 'POST':
        # Handle the image upload and prediction
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'})

        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        try:
            # Save the uploaded file temporarily
            upload_folder = 'static/uploads'
            os.makedirs(upload_folder, exist_ok=True)
            file_path = os.path.join(upload_folder, file.filename)
            file.save(file_path)

            # Load and preprocess the uploaded image
            img = load_img(file_path, target_size=(32, 32))  # Adjust target size as per your model
            img = img_to_array(img) / 255.0  # Normalize the image
            img = np.expand_dims(img, axis=0)  # Add batch dimension

            # Get the prediction
            prediction = model.predict(img)
            probability = float(np.max(prediction[0]))
            predicted_class = number_to_class[np.argmax(prediction[0])]

            # Return the result
            return jsonify({'probability': probability, 'class': predicted_class})

        except Exception as e:
            return jsonify({'error': str(e)})

# Route for the about us page
@app.route('/about_us')
def about_us():
    return render_template('aboutus.html')

# Route for the product page
@app.route('/product_page')
def product_page():
    return render_template('product-page.html')

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)


