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
    .then(function(response) {
        console.log("Email enviado com sucesso!", response.status, response.text);
        alert("Mensagem enviada com sucesso!");
        }, function(error) {
        console.log("Erro no envio do email:", error);
        alert("Houve um problema ao enviar a mensagem. Tente novamente."); // Alerta de erro
    });
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
