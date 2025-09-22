////////////////// HOME PICTURE //////////////////
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Change slide every 4 seconds
    showSlide(currentIndex);
});

////////////////// ANIMATION REVEAL //////////////////
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

////////////////// CAROUSEL //////////////////
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

document.addEventListener("DOMContentLoaded", function() {
    initializeCarousel();
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.addEventListener("click", function() {
            currentSlide(index);
        });
    });
});

const slides = document.querySelectorAll(".carousel img");
const indicators = document.querySelectorAll(".carousel-indicators .indicator");
let slideIndex = 0;
let intervalId;

function initializeCarousel() {
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, idx) => {
        slide.classList.remove("display-image");
        indicators[idx].classList.remove("active");
    });

    slides[slideIndex].classList.add("display-image");
    indicators[slideIndex].classList.add("active");
}

function nextSlide() {
    showSlide(slideIndex + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(slideIndex - 1);
    resetInterval();
}

function currentSlide(index) {
    showSlide(index);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

////////////////////BURGER MENU/////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const burgerButton = document.querySelector('.burger-button');
    const dropdownNav = document.querySelector('.dropdown-nav');

    burgerButton.addEventListener('click', () => {
        if (dropdownNav.classList.contains('hidden')) {
            dropdownNav.classList.remove('hidden');
            dropdownNav.classList.add('show', 'fade', 'slideInRight');
        } else {
            dropdownNav.classList.add('hidden');
            dropdownNav.classList.remove('show', 'fade', 'slideInRight');
        }
    });
});



///////////// Insert Image///////////////
// Handle file input and image display
const fileInput = document.getElementById('file-input');
const dropArea = document.getElementById('drop-area');
const outputBox = document.getElementById('output-box');

// Function to update the displayed image
function handleImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Create an image element and display it in the container
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = "Uploaded Image";
        img.style.maxWidth = '100%';
        img.style.height = 'auto';

        // Remove placeholder and text
        const placeholder = dropArea.querySelector('.placeholder');
        const text = dropArea.querySelector('p');
        placeholder.style.display = 'none';
        text.style.display = 'none';

        // Add uploaded image to the container, within the border
        dropArea.style.border = '2px solid #ccc'; // Ensure the dotted border stays
        dropArea.style.backgroundColor = 'transparent'; // Make sure the background is transparent

        // Append image inside the upload box
        dropArea.appendChild(img);

        // Show the 'Choose File' button below the image
        dropArea.appendChild(fileInput); // Re-append file input if removed
        dropArea.appendChild(document.querySelector('.upload-btn')); // Re-append the button
    };
    reader.readAsDataURL(file);

        // Trigger file input click when the "Choose File" button is clicked
        function triggerFileInput() {
            document.getElementById('file-input').click();
        }
    
        // Handle dragover event
        function handleDragOver(event) {
            event.preventDefault();
        }
    
        // Handle drop event (drag and drop)
        function handleDrop(event) {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file) {
                document.getElementById('file-input').files = event.dataTransfer.files;
            }
        }
    
        // Handle form submission (when "Generate" button is clicked)
        document.getElementById('imageForm').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent default form submission
    
            const fileInput = document.getElementById('file-input');
            const file = fileInput.files[0];
    
            if (!file) {
                alert('Please select an image file.');
                return;
            }
    
            // Prepare the image for sending to the backend
            const formData = new FormData();
            formData.append('file', file);
        });
}

// Handle file selection (input change)
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        handleImage(file);
    }
});

// Handle drag and drop functionality
dropArea.addEventListener('dragover', function(event) {
    event.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', function(event) {
    dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    dropArea.classList.remove('drag-over');
    const file = event.dataTransfer.files[0];
    if (file) {
        handleImage(file);
    }
});

// Button click to trigger file input (simulate click)
document.querySelector('.upload-btn').addEventListener('click', function() {
    fileInput.click();
});

document.querySelector(".button-arounder").addEventListener("click", function () {
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0]; // Ambil file dari input

    if (!file) {
        alert("Please upload an image first!");
        return;
    }

    // Buat form data untuk dikirim ke API
    const formData = new FormData();
    formData.append("file", file);

    // Kirim data ke API menggunakan fetch
    // fetch("https://abc123.ngrok.io/predict", { // Ganti dengan URL ngrok Anda
    //     method: "POST",
    //     body: formData,
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // Tampilkan hasil prediksi ke output box
    //         const outputBox = document.getElementById("output-box");
    //         if (data.error) {
    //             outputBox.innerHTML = `<p>Error: ${data.error}</p>`;
    //         } else {
    //             outputBox.innerHTML = `
    //                 <p>Type: ${data.type}</p>
    //                 <p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>
    //             `;
    //         }
    //     })
        // .catch((error) => {
        //     console.error("Error:", error);
        //     alert("Failed to connect to API");
        // });
});

// Test Frontend
document.getElementById('imageForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
        const response = await fetch('/detect_trash', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (result.error) {
            alert(`Error: ${result.error}`);
        } else {
            // alert(`Classified as: ${result.class} with probability ${result.probability}`);
            outputBox.innerHTML = `Classified as: ${result.class}`;
        }
    } 
    catch (error) {
        // console.error('Error processing the image:', error);
        // alert('An error occurred while processing the image.');
    }
});




