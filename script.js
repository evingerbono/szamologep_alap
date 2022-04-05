window.addEventListener('load',init,false);
function $(elem){
    return document.querySelectorAll(elem);
}
function CLASS(nev){
    return document.getElementsByClassName(nev);
}
function ID(elem){
    return document.getElementById(elem);
}
function gomb(){
    var szam = 0;
    for (let index = 0; index < 10; index++) {
        $('.szamok')[0].innerHTML+='<button>'+szam+'</button>';
        szam+=1;
    }  
}

function init(){
    gomb();
    for (let index = 0; index < 10; index++) {
        $('.szamok button')[index].addEventListener('click',bele,false);
        
    }
    ID('osszeadas').addEventListener('click',bele,false);
    ID('kivonas').addEventListener('click',bele,false);
    ID('szorzas').addEventListener('click',bele,false);
    ID('osztas').addEventListener('click',bele,false);
    ID('.').addEventListener('click',bele,false);
    ID('egyenlo').addEventListener('click',bele,false);
    ID('torles').removeEventListener('click',bele,false);


}
function torol(){
    var tor=document.getElementsByClassName()
}
function bele(){
    event.target.innerHTML;
    console.log(event.target.innerHTML);
    $('.kifejezes')[0].innerHTML+=event.target.innerHTML;
}


