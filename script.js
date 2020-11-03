function hello(){
    console.log('Hello')
}

function hello2(){
    hello();
    hello();
}



let btn = document.querySelector('#btn'); // кнопка
console.log(btn.id);
//btn.hidden = true;
//btn.innerText = 'qwerty';
btn.onclick = hello;

let showModal = document.querySelector('#modal-show');

function show(){
    let modal = document.querySelector('.modal');
    modal.hidden = true;
}

show();
