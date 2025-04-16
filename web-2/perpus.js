document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const loginForm = document.getElementById("login-form");
    const captchaText = document.querySelector(".captcha-text").textContent.trim();
    const captchaInput = document.getElementById("captcha");


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const password = passwordField.value.trim();
        const captcha = captchaInput.value.trim();

        if (username === "" || password === "" || captcha === "") {
            alert("Semua field harus diisi!");
            return;
        }

        if (captcha.toLowerCase() !== captchaText.toLowerCase()) {
            alert("Captcha salah. Silakan coba lagi.");
            return;
        }

        alert("Login berhasil!");
        loginForm.reset();
    });
});
