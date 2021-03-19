let jogo = []
let user = []

var pontuacao = 0
var num
var acertou = true
var visor = document.getElementById('txtVisor')

sessionStorage.clear()

setTimeout(function () {
    geraValor()
}, 600)

function geraValor() {
    visor.style.borderColor = '#d2c4aa'
    num = (Math.floor(Math.random() * 9 + 1))
    if (num != jogo[jogo.length - 1] ) {
        jogo.push(num)
        mostraNum()
    }
    else
    geraValor() 

    user = []
}

function mostraNum() {
    for (let X in jogo) {
        setTimeout(function () {
            visor.innerHTML = jogo[X]
        }, 600 * X)
    }
    apagaVisor()
    console.log(`Jogo: ` + jogo)

    setTimeout(function () {
        if (jogo.join(',') === user.join(',')) {
            pontuacao++
            acertou = true
            console.log(acertou)
            geraValor()
        }
        else {
            acertou = false
            console.log(acertou)
            sessionStorage.setItem("pontuacao", pontuacao);
            location.href = "fim.html"
        }
    }, 2000 * jogo.length)
}

function inserir(num) {
    visor.style.borderColor = '#1f6f8b'
    visor.style.color = '#99a8b2'
    visor.innerHTML = num
    user.push(num)
    console.log(`Usuário: ` + user)
}

function apagaVisor() {
    setTimeout(function () { visor.innerHTML = " " }, 600 * jogo.length)
}



document.ge

