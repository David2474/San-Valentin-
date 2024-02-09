const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const contain = document.getElementById("container");


let stateNo = 0;
let stateSi = 0;

let  worlds = [
    '¿Porque lo presionaste?',
    '¿De verdad no?',
    'por eso te quiere el sebastian',
    'Ya!! di que sii',
    'Se sabe que no me quieres',
    'Piensalo otra vez',
    'aaa porque lo vuelves a presionar ',
]

let px = 30;
let width = 90;
function masggeNo(){
    if(stateNo < worlds.length){
        btnNo.textContent = worlds[stateNo++];
        btnSi.style.width = `${width += px}px`;
        btnSi.style.height = `${px += 30}px`;
    }else{
        btnNo.textContent = worlds[worlds.length -1];
    }
}

function masggeSi(){
    contain.innerHTML = `
    <p class="text-2xl text-white mb-3">aaaaaaaaayyyy!!!!!!!</p>
    <img class=" w-60 h-60"  src="/img/amar.gif" alt="">
    `;
}

