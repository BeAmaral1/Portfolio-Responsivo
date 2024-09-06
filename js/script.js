function sendMail(){

    event.preventDefault();

    let params = {
        subject : document.getElementById("subject").value,
        full_name : document.getElementById("full_name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    };

    console.log(params);

    emailjs .send("service_00w4ili", "template_4bxgbeq",params)
    console.log(document.getElementById('message').value);
}


const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
