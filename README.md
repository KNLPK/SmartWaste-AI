# SmartWaste: AI-Based Waste Classification
<img width="1888" height="937" alt="image" src="https://github.com/user-attachments/assets/5dfb2eea-dd64-4211-a20c-6a00d7a7c850" />

<img width="1895" height="940" alt="image" src="https://github.com/user-attachments/assets/3494a879-3382-4085-9d8f-205079015b41" />

<img width="1888" height="944" alt="image" src="https://github.com/user-attachments/assets/cb80f7bb-3615-4f8d-a5c4-13a911d138e5" />

<img width="1891" height="936" alt="image" src="https://github.com/user-attachments/assets/5b977886-ff83-45a1-a51c-d547d27d8e4f" />

SmartWaste is an AI-powered web application that classifies waste images into specific categories using deep learning. Built with TensorFlow and Flask, this project aims to support environmental awareness and proper waste sorting through intelligent image detection.

---

## 🚀 Features

- Upload image of waste
- Automatic classification using trained AI model
- Detects waste categories (plastic, metal, organic, etc.)
- Simple and clean web interface
- Built with Flask (Python web framework)

---

## 🧠 Tech Stack

- Python 3.8 – 3.11 (recommended)
- TensorFlow
- Flask
- Pillow (image processing)
- HTML/CSS for front-end


---

## ⚙️ Installation Guide

> ⚠️ Make sure you have Python installed (version 3.8–3.11)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smartwaste-ai.git
cd smartwaste-ai
```

### 2. Create Virtual Environment

```bash
python -m venv env
```

### 3. Activate the Virtual Environment
 - On Windows:
```bash
env\Scripts\activate
```

 - On MacOS/Linux:
```bash
source env/bin/activate
```

### 4. Install Required Libraries
```bash
pip install -r requirements.txt
pip install Flask
pip install TensorFlow
pip install Pillow
```
Note: TensorFlow does not support Python 3.12+


▶️ Run the Application
```bash
python app.py
```

▶️Then open your browser and go to:
```cpp
http://127.0.0.1:5000
```

📸 How to Use
 - Go to the "Detect Trash" page.
 - Click "Upload Image" and select a photo of the trash.
 - The AI will analyze the image and display the waste type detected.

📌 Notes
 - AI model file is already included: afterModel.h5
 - Make sure all dependencies are installed before running the app.
 - You can run pip list to check installed packages.

📃 License
This project is licensed under the MIT License.

---

### ✅ Ready To Use
