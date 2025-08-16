const freshPlayer = [
    {idDaCena: 'inicio',
    mochila: [],
    genero: null}
]
const personagens = [
    {nome: 'Good Ways', 
        avatar:{
            feliz: 'dcompsimulator/assets/goodways.png',
            triste: 'dcompsimulator/assets/sadways.png',
            bravo: 'dcompsimulator/assets/badways.png'
        } 
    },
    {nome: 'Kal-El Freira', 
        avatar:{
            feliz: 'dcompsimulator/assets/kal-elfeliz.png',
            triste: 'dcompsimulator/assets/kal-eltriste.png',
            bravo: 'dcompsimulator/assets/kal-elbravo.png'
        } 
    },
    {nome: 'Big Carlos', 
        avatar:{
            feliz: 'dcompsimulator/assets/bigcarlos-feliz.png',
            triste: 'dcompsimulator/assets/bigcarlos-triste.png',
            bravo: 'dcompsimulator/assets/bigcarlos-bravo.png'
        } 
    },
    {nome: 'Pinguitor',
     avatar: 'dcompsimulator/assets/pinguitor.png'
    }
]
const cenas = [
  {
    id: 'inicio',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Olá, seja bem-vindo ao DCOMP! Eu sou o Pinguitor, arauto da atlética Bugados e serei seu guia',
    opcoes: [
      {a: 'Vamos lá!' , efeito: null, proximaCenaId: 'escolhadegenero'}
    ]
  },
  {
    id: 'escolhadegenero',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Antes, vamos escolher o gênero do seu avatar:',
    opcoes: [
      {a: 'Sou homem!' , efeito: null, genero: 'masculino', proximaCenaId: 'explicacaodasrotas1'},
      {b: 'Sou mulher!' , efeito: null, genero: 'feminino', proximaCenaId: 'explicacaodasrotas1'}
    ]
  },
  {
    id: 'explicacaodasrotas1',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Ok então, vamos lá! Primeiro, você precisa saber sobre um detalhe: você poderá escolher rotas! Teremos 3 rotas e você deve escolher uma delas. Fazendo tudo na ordem certa, você chegerá ao final e terá uma grande surpresa!',
    opcoes: [
      {a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodasrotas2'}
    ]
  },
  {
    id: 'explicacaodasrotas2',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Mas, nem tudo são flores! Você vai ter que agradar os personagens se não vai perder pontos. Agora irei te explicar como funciona o jubilômetro',
    opcoes: [
      {a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodojubilometro1'}
      ]
    },
  {
    id: 'explicacaodojubilometro1',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'O jubilômetro é o seu porto-seguro: ele começa em 100% e garante sua permanência na universidade. Cada resposta dada aos personagens que você verá em breve gera uma reação, então é melhor observar bem os detalhes, pois você perderá pontos se responde errado',
    opcoes: [
      {a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodojubilometro2'}
    ]
  },
  {
    id: 'explicacaodojubilometro2',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Se seu contador chegar a 0% você é JUBILADO! Você volta pro começo e tem que refazer a rota que escolheu ou tentar a sorte em outra. Conseguiu entender?',
    opcoes: [
      {a: 'Sim!' , efeito: null, proximaCenaId: 'selecaodasrotas'},
      {b: 'Não!' , efeito: null, proximaCenaId: 'explicacaodojubilometro1'}
    ]
  }
]
 // Criamos uma função que pega exclusivamente o arquivo do personagem e emoção desejada para renderizar o que é esperado dependendo - 
    //- da resposta dada. que localiza na lista de personagens qual a emoção que ele vai ter a uma determinada interação. 
    // Exemplo: se o personagem na cena 1 escolhe a reposta A e ela não for do agrado do personagem, então ele irá esboçar -
    //- uma reação de raiva. E isso influe diretamente no jubilômetro. 
const renderizarPersongem = (nome,emocao) =>{
    const indentificar = personagens.filter((personagem) => personagem.nome === nome)
    const IndentiReacao = indentificar[0].avatar[emocao]
    return IndentiReacao
}

