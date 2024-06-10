const htmlQuestions = [
  {
    alternativeA: '<table>',
    alternativeB: '<div>',
    alternativeC: '<form>',
    alternativeD: '<section>',
    alternativeE: '<ul>',
    correctAlternative: 'a',
    description: 'Qual tag  é usada para criar tabelas em HTML ?',
    questionCategoryId: 1
  },
  {
    alternativeA: 'data-header',
    alternativeB: 'colspan',
    alternativeC: 'scope',
    alternativeD: 'header',
    alternativeE: 'th',
    correctAlternative: 'e',
    description: 'Qual atributo define o cabeçalho de uma célula de tabela?',
    questionCategoryId: 1
  },

  {
    alternativeA: '<ol>',
    alternativeB: '<ul>',
    alternativeC: '<li>',
    alternativeD: '<dl>',
    alternativeE: '<dt>',
    correctAlternative: 'b',
    description: 'Qual tag é usada para criar listas não ordenadas em HTML?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<time>',
    alternativeB: '<date>',
    alternativeC: '<datetime>',
    alternativeD: '<moment>',
    alternativeE: '<timestamp>',
    correctAlternative: 'a',
    description: 'Qual tag HTML é usada para representar um horário ou data em uma página web?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<hr>',
    alternativeB: '<br>',
    alternativeC: '<div>',
    alternativeD: '<section>',
    alternativeE: '<p>',
    correctAlternative: 'a',
    description: 'Qual tag HTML é usada para criar uma linha horizontal?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<canvas>',
    alternativeB: '<svg>',
    alternativeC: '<img>',
    alternativeD: '<video>',
    alternativeE: '<audio>',
    correctAlternative: 'b',
    description: 'Qual tag HTML é usada para criar gráficos vetoriais escaláveis?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<datalist>',
    alternativeB: '<details>',
    alternativeC: '<summary>',
    alternativeD: '<figure>',
    alternativeE: '<figcaption>',
    correctAlternative: 'a',
    description:
      'Qual tag HTML é usada para fornecer uma lista de opções pré-definidas para um elemento de entrada de dados?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<dialog>',
    alternativeB: '<details>',
    alternativeC: '<summary>',
    alternativeD: '<section>',
    alternativeE: '<aside>',
    correctAlternative: 'a',
    description: 'Qual tag HTML é usada para definir um diálogo ou caixa de mensagem na página?',
    questionCategoryId: 1
  },
  {
    alternativeA: "<label for='inputId'>",
    alternativeB: "<input label='Nome'>",
    alternativeC: "<input alt='Nome'>",
    alternativeD: "<input aria-label='Nome'>",
    alternativeE: "<input aria-labelledby='Nome'>",
    correctAlternative: 'a',
    description: 'Qual é a maneira correta de associar um rótulo a um elemento de entrada em HTML?',
    questionCategoryId: 1
  },
  {
    alternativeA: "<img alt='Descrição da Imagem'>",
    alternativeB: "<img title='Descrição da Imagem'>",
    alternativeC: "<img aria-label='Descrição da Imagem'>",
    alternativeD: "<img aria-labelledby='Descrição da Imagem'>",
    alternativeE: "<img role='img' aria-label='Descrição da Imagem'>",
    correctAlternative: 'a',
    description:
      'Qual é a maneira correta de fornecer uma descrição textual para uma imagem em HTML?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<header>',
    alternativeB: '<nav>',
    alternativeC: '<footer>',
    alternativeD: '<aside>',
    alternativeE: '<main>',
    correctAlternative: 'd',
    description:
      'Qual tag HTML é usada para definir um conteúdo lateral ou uma barra lateral em uma página?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<figcaption>',
    alternativeB: '<caption>',
    alternativeC: '<summary>',
    alternativeD: '<legend>',
    alternativeE: '<header>',
    correctAlternative: 'd',
    description: 'Qual tag HTML é usada para definir uma legenda para um elemento de formulário?',
    questionCategoryId: 1
  },
  {
    alternativeA: "<a role='button' href='#'>",
    alternativeB: '<button>',
    alternativeC: "<div onclick='window.location='#''>",
    alternativeD: "<span onclick='window.location='#''>",
    alternativeE: "<input type='button'>",
    correctAlternative: 'a',
    description: 'Qual é a maneira  de criar um link que funcione como um botão semânticamente ?',
    questionCategoryId: 1
  },
  {
    alternativeA: 'caption',
    alternativeB: 'summary',
    alternativeC: 'title',
    alternativeD: 'alt',
    alternativeE: 'label',
    correctAlternative: 'c',
    description: 'Qual atributo HTML é usado para fornecer um título para um elemento?',
    questionCategoryId: 1
  },
  {
    alternativeA: '<summary>',
    alternativeB: '<details>',
    alternativeC: '<dialog>',
    alternativeD: '<aside>',
    alternativeE: '<section>',
    correctAlternative: 'b',
    description:
      'Qual tag HTML é usada para criar um elemento que pode ser expandido ou recolhido para revelar ou ocultar o conteúdo?',
    questionCategoryId: 1
  }
]

const jsQuestions = [
  {
    alternativeA: 'Escopo de bloco',
    alternativeB: 'Escopo de função',
    alternativeC: 'Escopo global',
    alternativeD: 'Escopo de módulo',
    alternativeE: 'Escopo de protótipo',
    correctAlternative: 'a',
    description:
      'Qual tipo de escopo as variáveis declaradas com `let` e `const` têm em JavaScript?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Object.create()',
    alternativeB: 'Object.prototype',
    alternativeC: 'Object.keys()',
    alternativeD: 'Object.values()',
    alternativeE: 'Object.entries()',
    correctAlternative: 'e',
    description:
      'Qual método de objeto JavaScript retorna um array contendo todos os pares chave-valor de um objeto?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Diz a função que ela é sincrônica',
    alternativeB: 'Diz a função que ela deve aguardar a resolução de uma promessa',
    alternativeC: 'Diz a função que ela deve parar temporariamente',
    alternativeD: 'Diz a função que ela deve se executar novamente',
    alternativeE: 'Diz a função que ela não deve retornar um valor',
    correctAlternative: 'b',
    description: 'O que a palavra-chave `await` faz em uma função `async` em JavaScript?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Quando o código está dentro de um escopo de função',
    alternativeB: 'Quando a variável é declarada dentro de um bloco',
    alternativeC: 'Quando a variável é declarada com `var`',
    alternativeD: 'Quando a variável é declarada fora de qualquer função',
    alternativeE: 'Quando a variável é declarada com `let` ou `const`',
    correctAlternative: 'c',
    description: 'Em que caso uma variável em JavaScript é elevada (hoisted)?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Faz o navegador verificar a conformidade do código com a ECMAScript',
    alternativeB: 'Permite o uso de recursos experimentais',
    alternativeC: 'Adiciona regras mais rigorosas para a sintaxe do código',
    alternativeD: 'Permite ao JavaScript usar mais memória',
    alternativeE: 'Habilita o uso de classes',
    correctAlternative: 'c',
    description: "Qual é o propósito do modo estrito ('use strict') em JavaScript?",
    questionCategoryId: 2
  },
  {
    alternativeA: '`Number.parseInt()`',
    alternativeB: '`Number.parseFloat()`',
    alternativeC: '`Number.toFixed()`',
    alternativeD: '`Number.isNaN()`',
    alternativeE: '`Number.valueOf()`',
    correctAlternative: 'c',
    description: 'Qual método em JavaScript formata um número usando a notação de ponto fixo?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Usando `Object.assign()`',
    alternativeB: 'Usando o operador spread',
    alternativeC: 'Usando `JSON.parse(JSON.stringify())`',
    alternativeD: 'Usando `Object.freeze()`',
    alternativeE: 'Usando `Array.prototype.slice()`',
    correctAlternative: 'c',
    description: 'Qual método cria uma cópia profunda (deep copy) de um objeto em JavaScript?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Object.assign()',
    alternativeB: 'JSON.stringify()',
    alternativeC: 'Object.create()',
    alternativeD: 'Array.from()',
    alternativeE: 'Object.freeze()',
    correctAlternative: 'a',
    description:
      'Qual método JavaScript pode ser usado para criar uma cópia superficial de um objeto?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Cria um novo escopo de função',
    alternativeB:
      'Permite que uma função tenha acesso ao seu escopo lexical mesmo após a função externa ter sido concluída',
    alternativeC: 'Permite a criação de métodos estáticos em funções',
    alternativeD: 'Adiciona propriedades privadas a objetos',
    alternativeE: 'Permite a reatribuição de variáveis dentro de uma função',
    correctAlternative: 'b',
    description: 'Qual é a principal característica de um closure em JavaScript?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Permite que variáveis globais sejam usadas em funções',
    alternativeB: 'Permite que uma função acesse e manipule variáveis internas de outra função',
    alternativeC: 'Permite que variáveis locais de uma função sejam acessíveis fora dessa função',
    alternativeD: 'Permite que uma função use variáveis que estão em escopo de bloco',
    alternativeE: 'Permite que variáveis locais sejam acessadas em qualquer parte do código',
    correctAlternative: 'b',
    description: 'Qual é uma das vantagens práticas dos closures em JavaScript?',
    questionCategoryId: 2
  },
  {
    alternativeA: 'Cria um loop infinito',
    alternativeB: 'Garante que variáveis locais sejam globais',
    alternativeC: 'Cria uma função com escopo temporário',
    alternativeD: 'Retém o escopo de execução da função externa mesmo após esta ter terminado',
    alternativeE: 'Retira a função interna do escopo da função externa',
    correctAlternative: 'd',
    description: 'O que acontece quando uma função interna em JavaScript forma um closure?',
    questionCategoryId: 2
  }
]

const cssQuestions = [
  //css
  {
    alternativeA: 'position: relative;',
    alternativeB: 'position: absolute;',
    alternativeC: 'position: fixed;',
    alternativeD: 'position: static;',
    alternativeE: 'position: sticky;',
    correctAlternative: 'b',
    description:
      'Qual propriedade CSS posiciona um elemento em relação ao seu ancestral mais próximo posicionado?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'align-items',
    alternativeB: 'justify-content',
    alternativeC: 'align-self',
    alternativeD: 'align-content',
    alternativeE: 'flex-direction',
    correctAlternative: 'b',
    description:
      'Qual propriedade CSS Flexbox é usada para distribuir espaço entre itens ao longo do eixo principal?',
    questionCategoryId: 3
  },
  {
    alternativeA: ':hover',
    alternativeB: ':focus',
    alternativeC: ':visited',
    alternativeD: ':active',
    alternativeE: ':first-child',
    correctAlternative: 'a',
    description:
      'Qual pseudo-classe CSS é usada para aplicar estilo a um elemento quando o mouse passa sobre ele?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'opacity',
    alternativeB: 'filter',
    alternativeC: 'backdrop-filter',
    alternativeD: 'blend-mode',
    alternativeE: 'mask',
    correctAlternative: 'c',
    description:
      'Qual propriedade CSS aplica efeitos gráficos como blur ou cor aos elementos atrás de um elemento?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'grid-template-rows',
    alternativeB: 'grid-template-columns',
    alternativeC: 'grid-auto-rows',
    alternativeD: 'grid-auto-columns',
    alternativeE: 'grid-template-areas',
    correctAlternative: 'e',
    description:
      'Qual propriedade CSS Grid permite definir áreas nomeadas para uma grade, facilitando o posicionamento de itens?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'content-box',
    alternativeB: 'padding-box',
    alternativeC: 'border-box',
    alternativeD: 'margin-box',
    alternativeE: 'initial-box',
    correctAlternative: 'c',
    description:
      'Qual valor da propriedade CSS `box-sizing` faz com que o `padding` e a `border` sejam incluídos na largura e altura do elemento?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'transform: translate();',
    alternativeB: 'transform: scale();',
    alternativeC: 'transform: rotate();',
    alternativeD: 'transform: skew();',
    alternativeE: 'transform: matrix();',
    correctAlternative: 'e',
    description:
      'Qual função da propriedade `transform` permite aplicar uma combinação de várias transformações como translação, rotação, e escala em uma única declaração?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'grid-area',
    alternativeB: 'grid-column',
    alternativeC: 'grid-row',
    alternativeD: 'grid-gap',
    alternativeE: 'grid-template',
    correctAlternative: 'd',
    description: 'Qual propriedade CSS Grid define o espaço entre colunas e linhas da grade?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'scroll-snap-type',
    alternativeB: 'scroll-behavior',
    alternativeC: 'scroll-padding',
    alternativeD: 'scroll-margin',
    alternativeE: 'scrollbar-width',
    correctAlternative: 'b',
    description:
      'Qual propriedade CSS controla se o comportamento de rolagem será suave ou instantâneo?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'A viewport',
    alternativeB: 'O elemento pai mais próximo com `position: relative`, `absolute`, ou `fixed`',
    alternativeC: 'O elemento mais próximo com `display: flex` ou `grid`',
    alternativeD: 'O próprio elemento',
    alternativeE: 'O documento raiz',
    correctAlternative: 'b',
    description:
      'Para um elemento posicionado de forma `absolute`, qual elemento determina o `containing block` (bloco de contenção)?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'transform',
    alternativeB: 'static',
    alternativeC: 'text-align',
    alternativeD: 'vertical-align',
    alternativeE: 'top',
    correctAlternative: 'a',
    description:
      'Qual propriedade CSS cria um novo contexto de empilhamento e um novo contexto de contêiner quando aplicada a um elemento?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'containing-block',
    alternativeB: 'context-block',
    alternativeC: 'layout-block',
    alternativeD: 'position-block',
    alternativeE: 'bounding-block',
    correctAlternative: 'a',
    description:
      'Qual termo descreve o contexto de referência usado para calcular as posições de elementos posicionados (`absolute`, `fixed`) em CSS?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'z-index',
    alternativeB: 'display',
    alternativeC: 'float',
    alternativeD: 'position',
    alternativeE: 'overflow',
    correctAlternative: 'a',
    description: 'Qual propriedade CSS controla a ordem de empilhamento de elementos sobrepostos?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'isolation',
    alternativeB: 'z-index',
    alternativeC: 'perspective',
    alternativeD: 'clip-path',
    alternativeE: 'backface-visibility',
    correctAlternative: 'a',
    description:
      'Qual propriedade CSS força um elemento a criar um novo contexto de empilhamento sem considerar seus filhos na ordem de empilhamento?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'Elemento pai ou ancestral com "overflow" definido',
    alternativeB: 'Elemento pai ou ancestral com `display: block;`',
    alternativeC: 'Elemento pai ou ancestral com `position: absolute;`',
    alternativeD: 'Elemento pai ou ancestral com `padding: 0;`',
    alternativeE: 'Elemento pai ou ancestral com `margin: 0;`',
    correctAlternative: 'a',
    description:
      'Qual condição pode fazer com que um elemento `position: sticky` não se comporte corretamente?',
    questionCategoryId: 3
  },
  {
    alternativeA: 'Ele se sobrepõe a todos os elementos',
    alternativeB: 'Ele flui com o conteúdo',
    alternativeC: 'Ele age como `position: relative`',
    alternativeD: 'Ele age como `position: fixed`',
    alternativeE: 'Ele não se move',
    correctAlternative: 'c',
    description:
      'Como um elemento com `position: sticky` se comporta antes de atingir sua posição de fixação?',
    questionCategoryId: 3
  },
  {
    alternativeA: ':has()',
    alternativeB: ':nth-of-type()',
    alternativeC: ':nth-child()',
    alternativeD: ':empty',
    alternativeE: ':only-child',
    correctAlternative: 'a',
    description:
      'Qual pseudo-classe CSS, introduzida recentemente, permite selecionar um elemento pai que contém um determinado seletor?',
    questionCategoryId: 3
  }
]

const accessibilityQuestions = [
  {
    alternativeA: 'title',
    alternativeB: 'alt',
    alternativeC: 'arc',
    alternativeD: 'label',
    alternativeE: 'imgDir',
    correctAlternative: 'b',
    description: 'Qual atributo HTML é usado para fornecer uma descrição alternativa para imagens?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'Melhorar o desempenho do site',
    alternativeB: 'Aumentar o contraste das cores',
    alternativeC: 'Estruturar corretamente o conteúdo',
    alternativeD: 'Reduzir o tamanho dos arquivos',
    alternativeE: 'Adicionar animações',
    correctAlternative: 'c',
    description: 'Qual é a importância de usar tags semânticas (como <nav>, <main>, etc.) no HTML?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'Melhorar o desempenho do site',
    alternativeB: 'Aumentar o contraste das cores',
    alternativeC: 'Estruturar corretamente o conteúdo',
    alternativeD: 'Reduzir o tamanho dos arquivos',
    alternativeE: 'Adicionar animações',
    correctAlternative: 'c',
    description: 'Qual é a importância de usar tags semânticas (como <nav>, <main>, etc.) no HTML?',
    questionCategoryId: 4
  },

  {
    alternativeA: 'É usado para definir a cor de fundo de um elemento',
    alternativeB: 'É usado para fornecer uma descrição alternativa para imagens',
    alternativeC: 'É usado para associar um rótulo a um elemento',
    alternativeD: 'É usado para associar um rótulo a um elemento',
    alternativeE: 'É usado para definir o tamanho da fonte',
    correctAlternative: 'c',
    description: 'O que é o atributo aria-label e como ele é usado na acessibilidade?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'WCAG',
    alternativeB: 'ARIA',
    alternativeC: 'SEO',
    alternativeD: 'WAI-ARIA',
    alternativeE: 'HTML5',
    correctAlternative: 'd',
    description:
      'Qual padrão define atributos de acessibilidade para tornar o conteúdo dinâmico e aplicações web mais acessíveis?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'Contraste de cores',
    alternativeB: 'Tamanho da fonte',
    alternativeC: 'Leitor de tela',
    alternativeD: 'Modo de alto contraste',
    alternativeE: 'Aumento do cursor',
    correctAlternative: 'c',
    description:
      'Qual tecnologia é usada por usuários com deficiência visual para acessar conteúdo na web?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'role',
    alternativeB: 'alt',
    alternativeC: 'tab-index',
    alternativeD: 'aria-label',
    alternativeE: 'aria-hidden',
    correctAlternative: 'd',
    description:
      'Qual atributo HTML é usado para fornecer uma etiqueta alternativa ou descrição para elementos sem texto visível?',
    questionCategoryId: 4
  },
  {
    alternativeA: 'html[lang]',
    alternativeB: 'meta[charset]',
    alternativeC: 'a[title]',
    alternativeD: 'head[role]',
    alternativeE: 'body[lang]',
    correctAlternative: 'a',
    description:
      'Qual seletor CSS é usado para selecionar um elemento HTML com um atributo de linguagem específico?',
    questionCategoryId: 4
  }
]

export const questions = [
  ...htmlQuestions,
  ...jsQuestions,
  ...cssQuestions,
  ...accessibilityQuestions
]
