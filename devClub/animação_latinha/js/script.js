let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');


let contagem = list.length; // Retorna 3, pois há 3 item na lista 
let active = 0; // Esse é o item que está "active" no HTML

next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active =  active >= contagem - 1 ? 0 : active + 1; 
    list[active].classList.add('active');
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? contagem - 1 : active - 1;
    list[active].classList.add('active');
}




