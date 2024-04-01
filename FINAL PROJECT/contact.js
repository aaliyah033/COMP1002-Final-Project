function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        // Code to submit the form 
        alert("Form submitted successfully!"); // submit the form
      
    }
}
