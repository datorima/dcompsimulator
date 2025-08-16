const cenas = [
  {
    id: 'inicio',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Olá, seja bem-vindo ao DCOMP! Eu sou o Pinguitor, arauto da atlética Bugados e serei seu guia',
    opcoes: [
      a: 'Vamos lá!' , efeito: null, proximaCenaId: 'escolhadegenero'
    ]
  },
  {
    id: 'escolhadegenero',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Antes, vamos escolher o gênero do seu avatar:',
    opcoes: [
      a: 'Sou homem!' , efeito: null, genero: 'masculino', proximaCenaId: 'explicacaodasrotas1',
      b: 'Sou mulher!' , efeito: null, genero: 'feminino', proximaCenaId: 'explicacaodasrotas1'
    ]
  },
  {
    id: 'explicacaodasrotas1',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Ok então, vamos lá! Primeiro, você precisa saber sobre um detalhe: você poderá escolher rotas! Teremos 3 rotas e você deve escolher uma delas. Fazendo tudo na ordem certa, você chegerá ao final e terá uma grande surpresa!',
    opcoes: [
      a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodasrotas2'
    ]
  },
  {
    id: 'explicacaodasrotas2',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Mas, nem tudo são flores! Você vai ter que agradar os personagens se não vai perder pontos. Agora irei te explicar como funciona o jubilômetro',
    opcoes: [
      a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodojubilometro1'
  },
  {
    id: 'explicacaodojubilometro1',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'O jubilômetro é o seu porto-seguro: ele começa em 100% e garante sua permanência na universidade. Cada resposta dada aos personagens que você verá em breve gera uma reação, então é melhor observar bem os detalhes, pois você perderá pontos se responde errado',
    opcoes: [
      a: '(Próxima cena)' , efeito: null, proximaCenaId: 'explicacaodojubilometro2'
    ]
  },
  {
    id: 'explicacaodojubilometro2',
    background: 'dcompsimulator/assets/dcompbg.jpg',
    personagem: 'Pinguitor',
    dialogo: 'Se seu contador chegar a 0% você é JUBILADO! Você volta pro começo e tem que refazer a rota que escolheu ou tentar a sorte em outra',
  }
]
