//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input feild
    //always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get password
    //set id on the html element
    //get the element
    //get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);

    //Danger: Do not verify email password on the client side
    //step-4: verify email and password
    if(email === 'sontad@dfnj.com' && password ==='secret'){
        window.location.href = 'value.html'
    }else{
        alert('invalid user');
    }
})