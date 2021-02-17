const submitButton = document.querySelector('.submit');
const firstName = document.querySelector('.fn-label');
const lastName = document.querySelector('.ln-label');
const password = document.querySelector('.pw-label');

submitButton.addEventListener('click', e => {
    if (firstName.value === '') {
        firstName.classList.add('error'); //adds red box to firstname input area
        document.querySelector('.fn-label-error').classList.add('error'); //add the image and text
        e.preventDefault(); 
    } else {
        firstName.classList.remove('error')
        document.querySelector('.fn-label-error').classList.remove('error');
    }
    if (lastName.value==='') {
        lastName.classList.add('error');
        document.querySelector('.ln-label-error').classList.add('error');
    } else {
        lastName.classList.remove('error')
        document.querySelector('.ln-label-error').classList.remove('error');
    }
    if (password.value === '') {
        password.classList.add('error'); 
        document.querySelector('.password-error').classList.add('error'); 
        e.preventDefault(); 
    } else {
        password.classList.remove('error')
        document.querySelector('.password-error').classList.remove('error');
    }
});

