function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora >= 0 && hora < 12){
        document.body.style.background = 'rgb(227, 218, 216)'
        img.src = './images/manha.png'
    } else if (hora >= 12 && hora < 18){
        document.body.style.background = 'rgb(173, 209, 243)'
        img.src = './images/tarde.png'
    } else {
        document.body.style.background = 'rgb(179, 149, 208)'
        img.src = './images/noite.png'
    }

}