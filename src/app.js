function greetUser() {
    const greeting = "Welcome to the Static Web App!";
    document.getElementById("greeting").innerText = greeting;
}

document.addEventListener("DOMContentLoaded", () => {
    greetUser();
});