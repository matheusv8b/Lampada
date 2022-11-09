const turnOnOff = document.getElementById('turnOnOff');

const lamp = document.getElementById('lamp');


function lampada_quebrada () {
    return lamp.src.indexOf ("quebrada") > -1
}

function lampOn () {
    if (!lampada_quebrada () ){
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if (!lampada_quebrada() ){
    lamp.src = './img/desligada.jpg';
    }
}

function lampQuebrada () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}


turnOnOff.addEventListener ("click", lampOnOff);

lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampQuebrada);