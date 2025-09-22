const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});

////////////////// SIGN UP//////////////////
function signUp() {
    const name = document.getElementById("name");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone_number = document.getElementById("phone_number");

    const errorMessage = document.getElementById('errorMessage2');

    errorMessage.textContent = "";

    if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPassword.value.trim() === "" || phone_number.value.trim() === "") {
        errorMessage.textContent = "All fields must be filled!";
    }else if (!(email.value.endsWith("@gmail.com") || email.value.endsWith("@binus.ac.id") || email.value.endsWith("@yahoo.com"))) {
        errorMessage.textContent = "Invalid E-mail Address!";
    }else if (password.value.trim().length <= 6) {
        errorMessage.textContent = "Password must be more than 6 characters!";
    }else if(password.value !== confirmPassword.value){
        errorMessage.textContent = "Confirm Password Must Be Same to Password!";
    }else if(!(phone_number.value.startsWith("0") || phone_number.value.startsWith("+62"))){
        errorMessage.textContent = "Invalid phone number (must start with 0 or +62)!"
    }else {
        alert("Sign Up Successfully");
        window.location.href = "../HTML/index.html";
    }
}
document.querySelector('.form.signup form').addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone_number = document.getElementById("phone_number").value;

    signup(name, email, password, confirmPassword, phone_number);
});
////////////////// SIGN IN//////////////////
function signIn() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById('errorMessage1');

    errorMessage.textContent = "";

    if (email.value.trim() === "" || password.value.trim() === "") {
        errorMessage.textContent = "All fields must be filled!";
    }else if (!(email.value.endsWith("@gmail.com") || email.value.endsWith("@binus.ac.id") || email.value.endsWith("@yahoo.com"))) {
        errorMessage.textContent = "Invalid E-mail Address!";
    }else if (password.value.trim().length <= 6) {
        errorMessage.textContent = "Password must be more than 6 characters!";
    }else {
        alert("Login Successfully");
        window.location.href = "../HTML/index.html";
    }
}
document.querySelector('.form.login form').addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
});
////////////////// ICON MATA //////////////////
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pwField = document.querySelector(`#${eyeIcon.dataset.toggle}`);
        if (pwField.type === "password") {
            pwField.type = "text";
            eyeIcon.src = "../SVG/eye-svgrepo-com.svg";  // Ganti dengan mata terbuka
        } else {
            pwField.type = "password";
            eyeIcon.src = "../SVG/eye-no-svgrepo-com.svg";  // Ganti dengan mata tertutup
        }
    });
});
