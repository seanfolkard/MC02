document.addEventListener("DOMContentLoaded", (e) => {
    setVenueTitle("FilOil EcoOil Centre");
    let form = document.querySelector("#js-fill");
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    form.innerHTML += inputGen("firstname", "First Name", "text", userInfo.firstname);
    form.innerHTML += inputGen("lastname", "Last Name", "text", userInfo.lastname, true);
    form.innerHTML += inputGen("dor", "Date & Time of Registration", "datetime-local", "dor", true);
    form.innerHTML += inputGen("nop", "Number of People", "number", "nop", true);
    form.innerHTML += inputGen("email", "Email Address", "email", userInfo.email, true);
    form.innerHTML += inputGen("contact", "Contact Number", "tel", userInfo.contact, true);
    form.innerHTML += inputGen("dob", "Date of Birth", "date", userInfo.dob, true);
});

function inputGen(name, display, type, value, linebreak) {
    let string = "<label for\"" + name + "\"> " + display + " </label><input type=\"" + type + "\" name=\"" + name + "\" value=\"" + value + "\" required>";
    if (linebreak)
        string += "<br>";
    return string;
}

function setVenueTitle(title) {
    document.querySelector("#venue-title").innerHTML = title;
}