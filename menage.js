
const lista = [100,80,60,120,90]
const soma = lista.reduce((acc,numero)=>acc + numero,0)
const novaLista = lista.map((numero)=> soma)
console.log(novaLista)
