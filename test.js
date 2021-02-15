// testing function to make sure button is connected to the right place
const form = document.querySelector('.form');

function buttonHandler (){
    alert ('Hello Again')
} 

form.addEventListener('click', buttonHandler);