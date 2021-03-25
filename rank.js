const url = 'https://api.sheety.co/5bb57b0e3901a66191d71e8fc052b189/geniusApi/dados'
var i = 1

function carregaRank() {
    let lista = document.getElementById('lista')

    fetch(url)
        .then(response => response.json())


        .then(response => {
            data = response.dados
            data.sort(ordena)
        })

        .then(response => {
            data.forEach(function (user) {
                let item = document.createElement("li");
                if (i >= 1 && i <= 3) {

                    item.classList.add("item");
                    item.innerHTML = `
                    <li style="color: #e1d2b7;">
                        <span class="lugar">${i}</span>
                        <span class="nome">${user.name}</span>
                        <span class="pontos">${user.score}</span><br>
                    </li>
                    `
                    lista.appendChild(item)
                }
                else {
                    item.innerHTML = `
                    <li style="color: ##1f6f8b;">
                        <span class="lugar" style="width: 20px;">${i}</span>
                        <span class="nome">${user.name}</span>
                        <span class="pontos">${user.score}</span><br>
                    </li>
                    `
                    lista.appendChild(item)
                }
                i++
            })  
        })

    function ordena(a, b) {
        return b.score - a.score;
    }
}
