
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#txtano');
    var res = document.querySelector('#res');

    if( fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'Homem';
            if(idade <= 10){
                //Criança
                img.setAttribute('src', 'img/fotocrianca-h.png');
            } else if( idade <= 21){
                // Jovem
                img.src = 'img/fotojovem-h.png';
            } else if(idade <= 40) {
                //Adulto
                img.src = 'img/fotoadulto-h.png'
            } else {
                //Idoso
                img.src = 'img/fotoidoso-h.png'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade <= 10){
                //Criança
                img.setAttribute('src', 'img/fotocrianca-m.png')
        
            } else if( idade <= 21){
                // Jovem
                img.setAttribute('src', 'img/fotojovem-m.png')
            } else if(idade <= 40) {
                //Adulto
                img.src = 'img/fotoadulto-m.png' 
            } else {
                //Idoso
                img.src = 'img/fotoidoso-m.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}