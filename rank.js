const url = 'https://api.sheety.co/5bb57b0e3901a66191d71e8fc052b189/geniusApi/dados'
var i = 1

function carregaRank() {
    let divLista = document.getElementById('lista')
    let texto = ''

    fetch(url)
        .then(response => response.json())
        

        .then(response => {
            data = response.dados
            data.sort(ordena)
        })

        .then(response => {
            data.forEach(function (user) {

                if (i >= 1 && i <= 3) {
                    texto = texto + `
                    <div style="color: #e1d2b7;">
                    <span class="lugar">${i}</span>
                    <span class="nome">${user.name}</span>
                    <span class="pontos">${user.score}</span><br>
                    </div>
                    `
                }
                else {
                    texto = texto + `
                    <div style="color: ##1f6f8b;">
                        <span class="lugar" style="width: 20px;">${i}</span>
                        <span class="nome">${user.name}</span>
                        <span class="pontos">${user.score}</span><br>
                    </div>
                    `
                }
                i++
            })
            divLista.innerHTML = texto
        })

    function ordena(a, b) {
        return b.score - a.score;
    }
}
