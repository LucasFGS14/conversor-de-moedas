const valorDoDolar = 5.13
const valorDoEuro = 5.49
const valorDaLibra = 6.39
const valorDoBitcoin = 341043.44

const btnConverter = document.querySelector("button")
const inputValor = document.querySelector("#valor")
const pValorASerConvertido = document.querySelector("#valor-moeda-a-ser-convertida")
const pValorCovertido = document.querySelector("#valor-moeda-convertida")
const selectMoedaConvertida = document.querySelector("#para-moeda")
const imgMoedaConvertida = document.querySelector("#img-moeda-convertida")
const nomeMoedaConvertida = document.querySelector("#nome-moeda-convertida")

function converter() {
    if (selectMoedaConvertida.value === "dolar-usa") {
        pValorASerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValor.value)

        pValorCovertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValor.value / valorDoDolar)
    }
    if (selectMoedaConvertida.value == "euro") {
        pValorASerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValor.value)

        pValorCovertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValor.value / valorDoEuro)
    }
    if (selectMoedaConvertida.value == "libra") {
        pValorASerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValor.value)

        pValorCovertido.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValor.value / valorDaLibra)
    }
    if (selectMoedaConvertida.value == "bitcoin") {
        pValorASerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValor.value)

        pValorCovertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValor.value / valorDoBitcoin)
    }
}

function changeOption() {
    if (selectMoedaConvertida.value === "dolar-usa") {
        imgMoedaConvertida.src = "./assets/dolar-usa.png"
        nomeMoedaConvertida.innerHTML = "Dólar dos Estados Unidos (USD)"
    }
    if (selectMoedaConvertida.value === "euro") {
        imgMoedaConvertida.src = "./assets/euro.png"
        nomeMoedaConvertida.innerHTML = "Euro (EUR)"
    }
    if (selectMoedaConvertida.value === "libra") {
        imgMoedaConvertida.src = "./assets/libra.png"
        nomeMoedaConvertida.innerHTML = "Libra Esterlina (GBP)"
    }
    if (selectMoedaConvertida.value === "bitcoin") {
        imgMoedaConvertida.src = "./assets/bitcoin.png"
        nomeMoedaConvertida.innerHTML = "Bitcoin (BTC)"
    }

    converter()
}

btnConverter.addEventListener("click", converter)
selectMoedaConvertida.addEventListener("change", changeOption)