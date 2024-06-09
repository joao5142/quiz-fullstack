import { Prisma } from '@prisma/client'

export const questions = [
  {
    alternativeA: '<table>',
    alternativeB: '<div>',
    alternativeC: '<form>',
    alternativeD: '<section>',
    alternativeE: '<ul>',
    correctAlternative: 'd',
    description: 'Qual tag  é usada para criar tabelas em HTML ?',
    questionCategoryId: 1
  },
  {
    alternativeA: 'data-header',
    alternativeB: 'colspan',
    alternativeC: 'scope',
    alternativeD: 'header',
    alternativeE: 'th',
    correctAlternative: 'c',
    description: 'Qual atributo define o cabeçalho de uma célula de tabela.',
    questionCategoryId: 1
  },
  {
    alternativeA: '<th>Minha Célula</th>',
    alternativeB: '<td>Minha Célula</td>',
    alternativeC: '<thead>Minha Célula</thead>',
    alternativeD: '<tr>Minha Célula</tr>',
    alternativeE: '<caption>Minha Célula</caption>',
    correctAlternative: 'a',
    description: 'Qual tag é usada para criar células de cabeçalho em uma tabela?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<ol>',
    alternativeB: '<ul>',
    alternativeC: '<li>',
    alternativeD: '<dl>',
    alternativeE: '<dt>',
    correctAlternative: 'b',
    description: 'A tag <ul> é usada para criar listas não ordenadas em HTML.',
    questionCategoryId: 1
  }
]
