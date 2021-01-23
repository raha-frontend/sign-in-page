const formFieldEmail = document.querySelector('.form-field-email');
const formFieldPassword = document.querySelector('.form-field-password');
const formSubmit = document.querySelector('.form-submit');

formSubmit.addEventListener('click', function(e) {
    e.preventDefault();

    if (!formFieldEmail.value || !formFieldPassword.value) {
        alert('Необходимо заполнить поля')
    } else {
        formSubmit.disabled = true;
        setTimeout(function() {
            alert('Форма отправлена');
            formFieldEmail.value = '';
            formFieldPassword.value = '';
            formSubmit.disabled = false;
        }, 2000);
    }
})