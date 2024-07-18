
function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date()
    var hora = 22 //data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`;

    if ( hora <= 12) {
        //BOM DIA!
        msg.innerHTML += '<p> BOM DIA! </p>';
        img.src = 'img/fotomanha.png';
        document.body.style.background = '#fed89a'
    } else if ( hora <= 18) {
        //  BOA TARDE!
        msg.innerHTML += '<p> BOA TARDE! </p>';
        img.src = 'img/fototarde.png'; 
        document.body.style.background = '#d18a56'
    } else {
        //BOA NOITE!
        msg.innerHTML += '<p> BOA NOITE! </p>';
        img.src = 'img/fotonoite.png';
        document.body.style.background = '#293436'
    }
}
