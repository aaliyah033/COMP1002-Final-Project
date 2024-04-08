// Function to check the contact form
function contactformcheck() {

    var name = document.getElementById('name').value; // Gets the value of the name 
    var email = document.getElementById('email').value; // Gets the value of the email 
    var message = document.getElementById('message').value; // Gets the value of the message 

    // Check if the name field is empty
    if (name === "") {
        alert("Please enter your name."); // will show an alert message 
        return false; // the returns fasl to submit 
    }

    // Check if the email field is empty
    if (email === "") {
        alert("Please enter your email."); 
        return false; 
    }

    // Check if the message field is empty
    if (message === "") {
        alert("Please enter your message."); 
        return false; 
    }

    // f everything is on the form, return will allow to send/submt
    return true;
}