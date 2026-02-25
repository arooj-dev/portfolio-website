console.log("JavaScript working");
document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault(); // page reload stop

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
    } else {
        alert("Thank you " + name + "! Your message has been sent.");
    }
});