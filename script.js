const pass = document.getElementById('pass')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [];

    if (pass.value == 'bismillah') {
        // window.location.pathname = 'mycv/detail.html';
    } else {
        messages.push('Mohon maaf, kata sandi salah!');
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});