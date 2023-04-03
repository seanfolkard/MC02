document.addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#login");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("User submitted form \"login\"");
        const formElement = document.querySelector("#login");

        let formData = new FormData(formElement);
        const userInfo = {
            email: formData.get("email"),
            password: formData.get("pword")
        };
        console.log("Received: " + userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        fadeOut(document.querySelector(".login"));
        setTimeout(() => {
            window.location.replace("/home");
        }, 1000);
    });
});

async function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.02;
    }, 1);
}