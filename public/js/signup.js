$(document).ready(function() {
    var signUpForm = $('button#submit');
    var nameInput = $('input#name')
    var emailInput = $('input#email');
    var passwordInput = $('input#password')
    var passwordConfirm = $('input#password2')

    signUpForm.on('click', function(event) {
        event.preventDefault()
        var userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            confirmPass: passwordConfirm.val().trim()
        }

        if (!userData.email || !userData.password) {
            return;
        }

        if (userData.password !== userData.confirmPass) {
            return;
        }

        signUpUser(userData.name, userData.email, userData.password);
        emailInput.val('')
        passwordInput.val('')
        nameInput.val('')
        passwordConfirm.val('')
    })

    function signUpUser(name, email, password) {
        $.post('/api/signup', {
            name: name,
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data)
        }).catch(handleLoginErr)
    }

    function handleLoginErr(err) {
        $('#alert .msg').text(err.responseJSON)
        $('#alert').fadeIn(500);
    }
})