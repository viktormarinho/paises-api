function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const nome = () => {

    const input = document.getElementById('pais')
    const imagem = document.getElementById('bandeira')
    const cap = document.getElementById('cap')
    const nome = document.getElementById('nome')
    const nativo = document.getElementById('nativename')
    const sigla = document.getElementById('alpha2Code')
    const lingua = document.getElementById('lang')
    const moeda = document.getElementById('moeda')

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    imagem.setAttribute('src', 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif')
    fetch(`https://restcountries.com/v2/name/${input.value}`, options)
    .then(r => {
        r.json()
        .then( data => {
            imagem.setAttribute('src', data[0].flags.png)
            nome.innerText = 'Nome: ' + data[0].translations.br
            cap.innerText = 'Capital: ' + data[0].capital
            nativo.innerText = 'Nome nativo: ' + data[0].nativeName
            sigla.innerText = 'Sigla: ' + data[0].alpha2Code
            lingua.innerText = 'Língua: ' + data[0].languages[0].name
            let moedas = ''
            for (let i=0; i< data[0].currencies.length; i++){
                moedas += (data[0].currencies[i].code + ' ')
            }
            moeda.innerText = 'Moedas: ' + moedas

        })
    })
    .catch(e => {
        console.log(e)
    })

}


const random = () => {

    const imagem = document.getElementById('bandeira')
    const cap = document.getElementById('cap')
    const nome = document.getElementById('nome')
    const nativo = document.getElementById('nativename')
    const sigla = document.getElementById('alpha2Code')
    const lingua = document.getElementById('lang')
    const moeda = document.getElementById('moeda')

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    imagem.setAttribute('src', 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif')
    fetch(`https://restcountries.com/v2/all`, options)
    .then(r => {
        r.json()
        .then( data => {
            const sorteado = getRandomIntInclusive(0, data.length -1)
            imagem.setAttribute('src', data[sorteado].flags.png)
            nome.innerText = 'Nome: ' + data[sorteado].translations.br
            cap.innerText = 'Capital: ' + data[sorteado].capital
            nativo.innerText = 'Nome nativo: ' + data[sorteado].nativeName
            sigla.innerText = 'Sigla: ' + data[sorteado].alpha2Code
            lingua.innerText = 'Língua: ' + data[sorteado].languages[0].name
            let moedas = ''
            for (let i=0; i< data[sorteado].currencies.length; i++){
                moedas += (data[sorteado].currencies[i].code + ' ')
            }
            moeda.innerText = 'Moedas: ' + moedas

        })
    })
    .catch(e => {
        console.log(e)
    })

}
