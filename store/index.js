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
    name: 'Yara Senger ',
    image: 'yara',
    role: ' GlobalCode, São Paulo/PR - Brasil',
    description: 'Experienced Founder with a demonstrated history of working in the computer software industry, focused in Java and Internet of Things. Strong entrepreneurship professional skilled in Community Management and Event Management.',
    twitter: 'https://twitter.com/yarasenger',
    linkedin: 'https://www.linkedin.com/in/yarasenger'
  },
  {
    id: 4,
    name: 'Elias Nogueira ',
    image: 'elias',
    role: ' Sicredi',
    description: 'A tester, agile coach and instructor that help people and companies to deliver a high quality software.',
    twitter: 'https://twitter.com/eliasnogueira',
    linkedin: 'https://www.linkedin.com/in/eliasnogueira'
  }],
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
      soldout: false,
      available: true
    },
    {
      id: 2,
      value: '100,00',
      title: 'Primeiro Lote',
      date: 'Até 31/05',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: true
    },
    {
      id: 3,
      value: '65,00 + 1Kg de alimento',
      title: 'Segundo Lote - Promocional',
      date: 'Até 30/06',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: false
    },
    {
      id: 4,
      value: '130,00 + 1Kg de alimento',
      title: 'Segundo Lote',
      date: 'Até 30/06',
      link: 'https://www.sympla.com.br/devparana-conference-2019__520952',
      soldout: false,
      available: false
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
