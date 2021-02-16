const submitButton = document.querySelector('.submit');
const firstName = document.querySelector('.fn-label');


submitButton.addEventListener('click', e => {
    if (firstName.value === '') {
        firstName.classList.add('error'); //adds red box to firstname input area
        document.querySelector('.fn-label-error').classList.add('error'); //add the image and text
        e.preventDefault(); 
    } else {
        firstName.classList.remove('error')
        document.querySelector('.fn-label-error').classList.remove('error');
    }
});

