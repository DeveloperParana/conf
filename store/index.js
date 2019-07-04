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
  }
  ],
  schedules: [
    /*  {
      id: 1,
      time: '8:00',
      title: 'COFFEE',
      name: '',
      tag: [],
      description: 'Café da manhã  / Credenciamento / Networking'
    } */
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
      value: '130,00 + 1Kg de alimento',
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
