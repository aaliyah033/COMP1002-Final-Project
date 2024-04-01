function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        // Code to submit the form (e.g., send data to backend)
        alert("Form submitted successfully!");
        // Here you can add AJAX request or any other logic to submit the form
    }
}
