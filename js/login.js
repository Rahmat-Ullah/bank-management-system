//step 1. add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2. get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = ('');
    //step 3. get password
    //3.a: set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);
    passwordField.value = ('');

    //step 4. varify email and password and check whether valid user or invalid user
    if(email === 'rahmatbd1533@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})