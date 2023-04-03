document.addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#new-account");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("User submitted form \"new-account\"");
        const formElement = document.querySelector("#new-account");

        let formData = new FormData(formElement);
        const userInfo = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            contact: formData.get("contact"),
            dob: formData.get("dob"),
            gender: formData.get("gender"),
        };
        console.log("Received: " + userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        fadeOut(document.querySelector(".new-account"));
        setTimeout(() => {
            window.location.replace("home");
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