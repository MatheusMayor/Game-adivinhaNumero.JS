const menorValor =1
const maiorValor=10
const numeroSecreeto = gearNumeroAleatorio ()

function gearNumeroAleatorio(){
  return parseInt(Math.random()* maiorValor + 1)
}

console.log('Número Secreeto:',numeroSecreeto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const ElementoMaiorValor = document.getElementById('maior-valor')
ElementoMaiorValor.innerHTML =menorValor

