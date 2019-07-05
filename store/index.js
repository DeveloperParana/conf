export const state = () => ({
  speakers: [{
    id: 1,
    name: 'Sheila Kimura',
    image: 'sheila',
    role: 'Concrete, São Paulo/SP - Brasil',
    description: 'Uma agilista apaixonada por facilitação e formação de times engajados e cheios de propósito, é Pedagoga Multimeios e Informática Educativa em sua formação base e possui, também, título em MBA em Gestão da Qualidade de Software. PACC, CSM, CSPO, M3.0 - mas, acredita que pessoas são mais importantes! Apoia fortemente mulheres a ingressarem na TI e apoia a importância da diversidade lutando por representatividade.',
    twitter: 'https://twitter.com/sheilakimura83',
    linkedin: 'https://www.linkedin.com/in/sheila-kimura'
  },
  {
    id: 2,
    name: 'Daiane Santos',
    image: 'daiane',
    role: ' Oktagon Games, Londrina/PR - Brasil',
    description: 'Graduanda em Engenharia da Computação pela UTFPR, Community Manager e QA na Oktagon Games, entusiasta de Segurança da Informação e CTF Player pela RATF',
    twitter: 'https://twitter.com/wh0isdxk',
    linkedin: 'https://www.linkedin.com/in/daianemsantos/'
  },
  {
    id: 3,
    name: 'Fabio Akita',
    image: 'fabio',
    role: ' CodeMiner 42, Omnitrade, Akitando',
    description: 'Co-fundador da Codeminer 42, boutique de desenvolvimento de software trabalhando com clientes do Brasil e EUA desde 2011. Foi co-fundador e ex-organizador da Rubyconf Brasil de 2008 a 2016. Atualmente organiza a conferência The Conf, que vai para a 3a edição em 2019. Já realizou mais de 200 palestras em diversas cidades do Brasil, EUA, Europa e Ásia. Também é co-fundador da Omnitrade, corretora de criptomoedas. É influenciador em tecnologia, principalmente com Ruby on Rails desde 2006 e hoje mantém um canal no YouTube.',
    twitter: 'https://twitter.com/akitaonrails'
  },
  {
    id: 4,
    name: 'João Cunha',
    image: 'joao',
    role: ' Gerente de produtos no Nubank',
    description: 'Gerente de produtos no Nubank e desenvolvedor desde 2007, passando por empresas como Dubizzle/OLX em Dubai e FetLife no Canadá. É um apaixonado por comunidades e Lead Organizer do Google Developers Group de Presidente Prudente.',
    twitter: 'https://twitter.com/joaocunha'
  },
  {
    id: 5,
    name: 'Vinicius Rodrigues',
    image: 'vinicius',
    role: ' Engenheiro de Software',
    description: 'Engenheiro de Software apaixonado pelo Frontend bem feito. Gosto de trabalhar em aplicações robustas e desafiantes no âmbito do Frontend sempre buscando usar o que há de melhor no mercado em meus projetos. Apaixonado por aprender. ',
    twitter: 'https://twitter.com/_viniro',
    linkedin: 'https://linkedin.com/in/viniro'
  },
  {
    id: 6,
    name: 'Júlio de Lima',
    image: 'julio',
    role: ' Principal QA Engineer na Capco',
    description: 'Possui experiência em testes envolvendo aplicações Web, Desktop, Mobile e serviços. É formado em Tecnologia em Informática, especialista em Docência no Ensino Superior e é mestrando em Engenharia Elétrica e Computação com foco em Inteligência Artificial no Mackenzie com o intuito de solucionar problemas de teste com IA e ML. Atua como professor em cursos de pós graduação em universidades do Paraná, Recife e Manaus. Ajudou mais de 14 empresas a implementar testes e automação usando ferramentas privadas e open-source usando PHP, Java, Ruby e Javascript. É palestrante assíduo em diversos eventos de tecnologia, disseminando a disciplina de testes de software, além de ser o co-fundador do meetup garoaQA.',
    twitter: 'https://twitter.com/juliodelimas'
  },
  {
    id: 7,
    name: 'André Paulovich Pinheiro Gomes',
    image: 'paulo',
    role: ' Arquiteto de sistemas na CI&T',
    description: 'Sou apaixonado por tecnologia e me considero um eterno estudante. Trabalho atualmente como arquiteto de sistemas na CI&T e recentemente aceitei o desafio de atuar também como community manager. Me formei em Comunicação Digital e me pós graduei em Arquitetura de Sistemas Distribuídos. Em toda minha carreira, fiz várias guinadas buscando atuar em áreas completamente diferentes, mas nunca me arrependi de nenhuma mudança; todas elas me impulsionaram a me tornar um profissional melhor e mais versátil. Também já fui premiado três vezes como MVP Microsoft e na última década, venho desenvolvendo soluções digitais para grandes empresas.'
  }
  ],
  schedules: [
    {
      id: 1,
      time: '7:30',
      title: 'COFFEE',
      name: '',
      tag: [],
      description: 'Café da manhã  / Credenciamento / Networking'
    },
    {
      id: 2,
      time: '8:30',
      title: 'Abertura',
      name: '',
      tag: [],
      description: 'Boas vindas e alguns recados sobre a programação do dia.'
    },
    {
      id: 3,
      time: '9:00',
      title: 'Arquitetura Evolutiva, O segredo da arquitetura ágil',
      name: 'André Paulovich Pinheiro Gomes',
      tag: [],
      description: 'Ao começar qualquer iniciativa digital, seja um produto ou serviço que envolva tecnologia, a única grande certeza que temos é que tudo que planejamos no início fatalmente irá mudar. Neste contexto de grandes incertezas, como fica o papel de um arquiteto de softwares que tem a responsabilidade de garantir que a tecnologia seja sempre bem empregada. Como planejar o futuro de um software que não sabemos exatamente onde irá chegar? Como garantir evoluções seguras para necessidades que ainda não conhecemos? Se você também já passou por situações parecidas... acredite, existem estratégias para absorver mudanças contínuas numa arquitetura de software, vamos conhecê-las.'
    },
    {
      id: 4,
      time: '9:50',
      title: 'Darkside em Internet das Coisas',
      name: 'Daiane dos Santos',
      tag: [],
      description: 'Vemos que o mundo está evoluindo para um lugar onde tudo será conectado, temos o aumento da comodidade e eficiencia. Mas, nos tempos de hoje também vivemos nos questionando em relação a nossa privacidade. Como manter a segurança em dispositivos de Internet das Coisas? E quais maneiras  nós temos de prevenção desses ataques?'
    },
    {
      id: 6,
      time: '10:40',
      title: 'Feature Flags: sexta-feira também é dia de lançamento',
      name: 'João Cunha',
      tag: [],
      description: 'Você sonha em lançar novas features do seu produto de maneira instantânea, com um clique no dashboard? E se além disso você pudesse controlar a porcentagem de usuários que terão acesso a essas features de maneira progressiva? Big-Bang deploys, staging desatualizado, rollbacks emergenciais, releases que quebram o produto… conheça o conceito de Feature Flagging e deixe tudo isso pra trás. Nessa talk eu explico como usar o Feature Flag-Driven Development para criar modelos de subscription, testes A/B, allowlist/denylist de usuários, opt-in de novas funcionalidades, e muito mais.'
    },
    {
      id: 7,
      time: '11:30',
      title: 'Almoço',
      name: '',
      tag: [],
      description: 'Temos várias opções no local do evento.'
    },
    {
      id: 8,
      time: '13:00',
      title: 'Inteligência Artificial e Testes in a Nutshell',
      name: 'Júlio de Lima',
      tag: [],
      description: 'Ouvimos muito falar sobre Inteligência Artificial e o quanto ela tem ajudado a solucionar problemas corporativos, pessoais e até mesmo ambientais. Mas você já viu a aplicação dela na disciplina de testes de software? Criação de testes automaticamente, rastreamento de causa raiz de falhas e aumento da cobertura de testes automatizados são algumas das aplicações já identificadas. Junte-se a nós nessa palestra e conheça o que há disponível no mercado e academia, além de assistir ao uso de algoritmos que já solucionam vários desses problemas.'
    },
    {
      id: 9,
      time: '14:00',
      title: 'Psicologia e UX, como o conhecimento sobre psicologia pode melhorar a experiência do seu usuário',
      name: 'Vinicius Rodrigues',
      tag: [],
      description: 'Você não precisa ser um psicólogo para ser um UXer, mas um pouco de conhecimento na área pode ajudar a desenvolver experiências ainda melhores. Vou apresentar alguns conceitos relevantes para a experiência do usuário e como podemos aplicá-los em nosso dia-a-dia.'
    },
    {
      id: 10,
      time: '14:50',
      title: 'TALK A SER DEFINIDA',
      name: '',
      tag: [],
      description: ''
    },
    {
      id: 11,
      time: '15:40',
      title: 'INTERVALO / COFFEE',
      name: '',
      tag: [],
      description: ''
    },
    {
      id: 12,
      time: '16:10',
      title: 'Agile Retrospectives: Usando-a ao seu favor para iniciar seu Kaisen',
      name: 'Sheila Kimura',
      tag: [],
      description: 'Sua retrospectiva está sendo efeitva? Existe melhoria de fato no seu time e na sua empresa? Nesta palestra teremos um exemplo de como organizar essa sessão para que ela tenha um objetivo bem definido e relevante, de fato, as necessidades de melhorias a serem trabalhadas.Além disso, veremos como iniciar um Kaizen real a partir de uma retrospectiva bem estruturada.Bora mudar a cultura de ritos que parecem só consumir tempo e cumprir tabela para sessões efetivas de melhoria contínua?'
    },
    {
      id: 13,
      time: '17:00',
      title: 'Uma discussão sobre a Carreira de TI',
      name: 'Fábio Akita',
      tag: [],
      description: 'Seja iniciantes recém-formados ou mesmo quem já está na área, sempre existem dúvidas sobre o que é a carreira em tecnologia, quais são os mercados, quais as diferenças em cursos de faculdade, como pensar sobre remuneração e níveis e o que dizer sobre as oportunidades de empreendedorismo e tech startups. Nessa palestra quero dar um pequeno panorama para aumentar os horizontes para quem pretende perseguir essa profissão.'
    },
    {
      id: 14,
      time: '17:50',
      title: 'ENCERRAMENTO / SORTEIOS',
      name: '',
      tag: [],
      description: ''
    }
  ],
  tickets: [
    {
      id: 1,
      value: '50,00 + 1Kg de alimento',
      title: 'Primeiro Lote - Promocional',
      date: 'Até 31/05',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: true,
      available: true
    },
    {
      id: 2,
      value: '100,00',
      title: 'Primeiro Lote',
      date: 'Até 31/05',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: true,
      available: true
    },
    {
      id: 3,
      value: '65,00 + 1Kg de alimento',
      title: 'Segundo Lote - Promocional',
      date: 'Até 30/06',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: true
    },
    {
      id: 4,
      value: '130,00',
      title: 'Segundo Lote',
      date: 'Até 30/06',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: true
    },
    {
      id: 5,
      value: '80,00 + 1Kg de alimento',
      title: 'Terceiro Lote - Promocional',
      date: 'Até 31/07',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: false
    },
    {
      id: 6,
      value: '160,00',
      title: 'Terceiro Lote',
      date: 'Até 31/07',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: false
    }
  ],
  sponsors: [
    {
      id: 2,
      name: 'Mandic Cloud Solutions',
      address: 'https://www.mandic.com.br/',
      image: 'mandic',
      type: 'diamond'
    },
    {
      id: 3,
      name: 'Elotech',
      address: 'https://www.elotech.com.br/',
      image: 'elotech',
      type: 'diamond'
    },
    {
      id: 4,
      name: 'DB1',
      address: 'https://www.db1.com.br',
      image: 'db1',
      type: 'silver'
    }
  ],
  support: [

  /*  {
    id: 3,
    name: 'PodTag',
    address: 'https://podtag.com.br/',
    image: 'podtag'
  } */
  ]
})
