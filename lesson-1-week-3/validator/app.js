function validateForm(event){
    event.preventDefault();
    
    // Get the form element
    const userEmail = document.getElementById('useremail').value;
    const password = document.getElementById('password').value;
    console.log(userEmail);

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(userEmail.value)){
        alert("Please enter a valid email address");
        return false;
    }
}