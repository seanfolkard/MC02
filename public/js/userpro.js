var savebutton = document.getElementById('savebutton');
var readonly = true;
var inputs = document.querySelectorAll('input');

savebutton.addEventListener('click',function(){

    for (var i=0; i<inputs.length; i++) {
        inputs[i].toggleAttribute('readonly');
    };

    if (savebutton.innerHTML == "edit") {
        savebutton.innerHTML = "save";
    } else {
        savebutton.innerHTML = "edit";
        let userData = JSON.parse(localStorage.getItem("userInfo"));
        const form = document.querySelector("#user-profile");
        let formData = new FormData(form);
        localStorage.removeItem("userInfo");
        let userInfo = {};
        for (var pair of formData) {
            userInfo[pair[0]] = pair[1];
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

    }
});

const logout = document.getElementById("donebutton");
logout.addEventListener("click", (e) => {
    localStorage.removeItem("userInfo");
});

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("userInfo") == null) {
        window.location.replace("login.html");
    } else {
        let userData = JSON.parse(localStorage.getItem("userInfo"));
        for (var key in userData) {
            if (userData[key] != "")
                document.querySelector("#" + key).setAttribute("value", userData[key]);
        }
    }
});