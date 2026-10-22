// Brazilian Portuguese (pt-BR) editorial content for the character profile pages.
//
// This file mirrors lib/character-content.ts, but only carries the editorial
// fields: the numeric fields (cm, feet, inches, ageOrder, strengthRank) are
// always derived from the official height chart in game-facts.ts so that no
// translation can drift away from the published numbers.
//
// Fact discipline is unchanged from the English source:
//   - Confirmed / from the current build / fan-derived labels are preserved
//     as three separate categories, with the same meaning in Portuguese.
//   - No hedge is upgraded into a certainty, and no fandom claim is promoted
//     into a developer statement.

import { HEIGHT_CHART, formatHeight } from './game-facts';
import type { CharacterEditorial } from './character-content';

const chartFor = (slug: string) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

export const characterProfilesPt: Record<
  'pierrot' | 'harlequin' | 'jester' | 'the-doctor' | 'ticket-taker',
  CharacterEditorial
> = {
  pierrot: {
    role: 'Um dos dois rivais centrais, e a obsessão silenciosa no centro da história',
    intro:
      'Pierrot é o personagem em torno do qual o jogo inteiro foi construído, e aquele que mais costuma ser descrito com uma única palavra: silêncio. O próprio desenvolvedor o chama em sua sinopse de "o yandere silencioso" ("yandere" é o termo da comunidade para a obsessão romântica que termina em controle) — uma descrição muito mais cuidadosa do que parece à primeira vista. Aqui o silêncio é caracterização, não uma voz ausente nem um espaço reservado sem texto. É o motivo pelo qual cada gesto dele tem peso, e o mecanismo pelo qual sua atenção fica difícil de separar da posse.',
    sections: [
      {
        heading: 'Resposta rápida',
        paragraphs: [
          'Pierrot tem 198 cm, o que o torna o segundo mais alto dos cinco personagens apresentados e o mais alto dos dois protagonistas românticos. Na ordem de idades publicada pelo desenvolvedor ele fica em terceiro lugar entre cinco, do mais velho para o mais novo. A rota dele está planejada e em desenvolvimento, e é uma das apenas duas rotas românticas que o desenvolvedor já nomeou.',
        ],
      },
      {
        heading: 'Quem é Pierrot',
        paragraphs: [
          'A sinopse oficial expõe a situação sem rodeios: você trabalha em um café, o destino leva você a cruzar caminhos com Pierrot, e é ali que a obsessão dele começa. A moldura do jogo é precisa quanto ao mecanismo: não é um homem que se torna assustador em um giro dramático, mas alguém cuja atenção endurece aos poucos, ao longo de dias comuns, até que o comum acaba reorganizado em torno dela.',
          'O que torna difícil escrever sobre ele com precisão é que o jogo é uma novel visual, e Pierrot é um personagem que quase não fala. Boa parte do que os jogadores descrevem como a personalidade dele é montada a partir do que ele não diz e de como responde à protagonista. Esse material é real e está na build atual, mas é interpretação sobreposta à observação, e esta página mantém as duas coisas separadas.',
        ],
      },
      {
        heading: 'Altura e detalhes físicos',
        paragraphs: [
          `A tabela de alturas publicada pelo desenvolvedor coloca Pierrot em ${formatHeight(chartFor('pierrot')).metric}, aproximadamente ${formatHeight(chartFor('pierrot')).imperial}. A mesma tabela registra que o desenvolvedor a usou como referência ao desenhar os sprites, e por isso os números aqui são tratados como canônicos, e não como estimativas lidas da arte.`,
          'O wiki de fãs descreve o design dele com bastante detalhe: cabelo branco de comprimento médio, máscara branca com fendas verticais pretas de tamanhos irregulares, olhos dourados, chapéu de bobo vermelho e preto com sinos, casaco motley vermelho com detalhes dourados e luvas pretas com garras. Esse nível de detalhe de figurino é útil para identificá-lo em capturas e fan art, mas vem do fandom, não de uma declaração do desenvolvedor, então é apresentado aqui como descrição de fã.',
        ],
      },
      {
        heading: 'Ordem de idades e onde ele fica entre os cinco',
        paragraphs: [
          'Uma postagem do AMA respondeu a um pedido direto de ordenar o elenco do mais velho para o mais novo. A ordem publicada é Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pierrot é, portanto, o terceiro entre cinco: mais velho que Jester e Harlequin, mais novo que o Ticket Taker e o Doctor.',
          'Nenhuma idade numérica foi publicada para qualquer personagem, e vale ser explícito sobre isso porque wikis de fãs e bases de dados de personagens rotineiramente atribuem idades específicas sem nenhuma base de primeira mão. A ordem de idades é a única informação de idade que o desenvolvedor já publicou.',
        ],
      },
      {
        heading: 'Ranking de força',
        paragraphs: [
          'O desenvolvedor também publicou um ranking de força física bruta, e Pierrot fica em primeiro — à frente de Harlequin e Jester, empatados em segundo, depois o Doctor e por último o Ticket Taker. O ranking foi publicado como um adendo a uma pergunta de fã, e não como uma mecânica do jogo, então convém lê-lo como caracterização: o membro mais forte do circo é também o que mais se contém.',
        ],
      },
      {
        heading: 'Por que Pierrot não fala',
        paragraphs: [
          'A sinopse oficial descreve Pierrot como "o yandere silencioso". Essa única frase é do próprio desenvolvedor, e é até onde o material de primeira mão chega sobre o motivo. O wiki de fãs acrescenta uma explicação dentro da ficção: uma regra de não falar em público teria sido imposta por Jester, e Jester seria uma figura de autoridade que Pierrot respeita profundamente. É um detalhe satisfatório e coerente com a forma como os dois personagens são escritos, mas vem do wiki, não do desenvolvedor.',
          'A distinção importa por um motivo prático: se você está lendo uma tradução do roteiro e Pierrot parece responder, isso é uma questão de localização ou de interpretação, não uma contradição do cenário. O silêncio é o traço que define o personagem, não um defeito do texto.',
        ],
      },
      {
        heading: 'Personalidade e o formato da obsessão dele',
        paragraphs: [
          'Ao longo do material da história, Pierrot lê-se como paciente e atento, mais do que impulsivo. A obsessão descrita na sinopse oficial não é enquadrada como fúria; é enquadrada como um começo, o que é uma afirmação sobre o ritmo e não sobre a intensidade. É essa distinção que torna a história dele perturbadora: um personagem cuja atenção se tornou total e silenciosa é mais inquietante do que um que anuncia isso aos gritos.',
          'O wiki de fãs o caracteriza como gentil e educado na superfície enquanto persegue a protagonista, e como protetor da protagonista e de Columbina. Também registra uma resposta concreta do desenvolvedor à pergunta sobre se Pierrot abandonaria a protagonista: a resposta é não, e de forma enfática. Essa resposta é um forte indício de para onde a rota dele vai, mesmo com a rota inacabada.',
        ],
      },
      {
        heading: 'Pierrot e Harlequin',
        paragraphs: [
          'A rivalidade entre os dois é o centro estrutural do jogo. A sinopse chama Harlequin de "rival sedutor" de Pierrot e descreve o jogo como sendo liderado por um ou pelo outro. Os dois são opostos no método — Pierrot é quieto e constante, Harlequin é teatral e mutante — e também o são na maneira como disputam a atenção da protagonista.',
          'O wiki de fãs descreve a história compartilhada deles como envolvendo Columbina, e uma resposta do AMA do desenvolvedor os descreveu como pessoas que se conheceram ainda crianças. O que se pode afirmar sem forçar as fontes é que a rivalidade é anterior ao presente do jogo e que carrega uma história que a build atual só revela em fragmentos.',
        ],
      },
      {
        heading: 'Pierrot e Columbina',
        paragraphs: [
          'Columbina é ex-membro do circo, e é a figura cuja morte molda o passado dos dois protagonistas. O wiki de fãs registra que Pierrot e Columbina nunca tiveram um relacionamento romântico, o que contraria uma leitura da própria narração de amor do circo, e o desenvolvedor disse separadamente que Pierrot já superou essa história e cresceu desde então.',
          'Uma observação prática para quem está lendo a build atual: o desenvolvedor disse que o design de Columbina ainda está em produção e que seus detalhes estão sendo ocultados de propósito. As atualizações de desenvolvimento mais recentes mencionam uma nova cena curta que faz referência a ela. Ou seja, o formato da história está sendo confirmado enquanto o personagem continua em produção — uma posição incomum para se escrever um guia de fã, e o motivo de esta seção continuar curta.',
        ],
      },
      {
        heading: 'Situação da rota e do final',
        paragraphs: [
          'O final romântico de Pierrot está na lista de finais planejados pelo desenvolvedor, junto ao de Harlequin, ao da Protagonista e ao "All together". Nenhum deles está implementado. A build atual contém exatamente um final, e ele é ruim — o final "Missing", alcançado no Dia 1 se você se recusar a reagir enquanto Pierrot está sendo zomhado.',
          'Por isso, não existe uma lista publicada de gatilhos para a rota de Pierrot. Qualquer tabela de escolhas que prometa desbloquear o final dele está descrevendo uma build que não existe publicamente. Quando a rota for lançada, esta página será atualizada com as escolhas e os pontos de save reais, e não com uma previsão.',
        ],
      },
      {
        heading: 'Fatos confirmados versus interpretação',
        paragraphs: [
          'Para tornar a diferença concreta, é assim que o material desta página se divide.',
        ],
        list: [
          'Confirmado pelo desenvolvedor: a altura dele, a posição na ordem de idades, o primeiro lugar no ranking de força, a descrição como "o yandere silencioso", o papel de um dos dois protagonistas e o fato de que um final romântico de Pierrot está planejado.',
          'Da build atual: a aparência, as cenas e a maneira como ele responde à protagonista.',
          'Derivado de fãs: a descrição completa do figurino e da máscara, o motivo dentro da ficção para o silêncio, a história pessoal e os detalhes concretos de suas relações com os demais personagens.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual a altura de Pierrot em The Freak Circus?',
        answer:
          'Pierrot tem 198 cm, aproximadamente 6 ft 5.95 in, na tabela de alturas publicada pelo desenvolvedor. Ele é o segundo mais alto dos cinco personagens e o mais alto dos dois protagonistas românticos.',
      },
      {
        question: 'Qual a idade de Pierrot?',
        answer:
          'Nenhuma idade numérica foi publicada. Na ordem de idades oficial do desenvolvedor ele fica em terceiro lugar entre cinco, do mais velho para o mais novo: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Pierrot é mais velho que Harlequin?',
        answer: 'Sim. Harlequin é o mais novo dos cinco, e Pierrot é o terceiro mais velho.',
      },
      {
        question: 'Pierrot é o personagem mais forte?',
        answer:
          'Sim. Ele fica em primeiro na lista de força publicada pelo desenvolvedor, à frente de Harlequin e Jester, empatados em segundo.',
      },
      {
        question: 'Dá para romancear com o Pierrot?',
        answer:
          'O final romântico de Pierrot está planejado e em desenvolvimento, mas ainda não está na build pública. Não há condições de ativação para publicar.',
      },
      {
        question: 'Pierrot tem final?',
        answer:
          'Ainda não. O único final implementado é o final ruim "Missing" do Dia 1. O final de Pierrot foi anunciado e continua sendo escrito.',
      },
      {
        question: 'Por que Pierrot não pode falar?',
        answer:
          'A sinopse oficial o chama de "o yandere silencioso", então o silêncio é uma caracterização do desenvolvedor, e não uma lacuna no texto. O wiki de fãs dá um motivo dentro da ficção que envolve o Jester, mas esse detalhe não vem de uma declaração do desenvolvedor.',
      },
      {
        question: 'Pierrot é um yandere?',
        answer:
          'Sim — essa é a palavra do próprio desenvolvedor na sinopse oficial, não apenas um apelido dos fãs.',
      },
      {
        question: 'Qual é a relação entre Pierrot e Harlequin?',
        answer:
          'Eles são os rivais centrais, e o jogo é enquadrado como sendo liderado por um ou pelo outro. Harlequin é descrito como o "rival sedutor" de Pierrot, e os dois são opostos no método: Pierrot é quieto e constante, Harlequin é teatral e mutante.',
      },
      {
        question: 'O que aconteceu entre Pierrot e Columbina?',
        answer:
          'Columbina é ex-membro do circo, e a morte dela molda o passado dos dois protagonistas. O wiki de fãs registra que ela e Pierrot nunca tiveram um relacionamento romântico. O design dela ainda está em produção, e o desenvolvedor ocultou os detalhes de propósito.',
      },
      {
        question: 'Pierrot é humano?',
        answer:
          'Segundo o wiki de fãs, ele é um dos monstros do circo. A sinopse do desenvolvedor descreve o elenco e a premissa do jogo em termos de um circo de monstros, e Pierrot faz parte desse grupo.',
      },
      {
        question: 'Como é Pierrot sem a máscara?',
        answer:
          'O wiki de fãs descreve cabelo branco de comprimento médio e olhos dourados atrás de uma máscara branca com fendas verticais pretas de tamanhos irregulares. Essa descrição vem do fandom, não de uma declaração do desenvolvedor, e serve principalmente para identificá-lo no fan art.',
      },
    ],
  },
  harlequin: {
    role: 'O rival sedutor, e o segundo das duas rotas românticas',
    intro:
      'Harlequin é o personagem que faz The Freak Circus ser uma escolha, e não uma história com um único caminho. A sinopse oficial o chama de "rival sedutor" de Pierrot e descreve o jogo como sendo liderado por um ou pelo outro — um resumo preciso de um design construído em torno de duas maneiras incompatíveis de conquistar a atenção da protagonista.',
    sections: [
      {
        heading: 'Resposta rápida',
        paragraphs: [
          'Harlequin tem 187 cm, o segundo mais baixo dos cinco personagens apresentados e o mais baixo dos dois protagonistas românticos. Na ordem de idades publicada pelo desenvolvedor ele fica em quinto lugar entre cinco, o que faz dele o mais novo. Divide o segundo lugar no ranking de força com Jester, e tem uma rota romântica planejada que ainda não foi implementada.',
        ],
      },
      {
        heading: 'Quem é Harlequin',
        paragraphs: [
          'Onde Pierrot trabalha pela constância, Harlequin trabalha pela performance. A palavra que o desenvolvedor usa é "sedutor", e o personagem é escrito para só ser legível em movimento: uma presença teatral e mutante, cujas intenções mal se consegue fixar por tempo suficiente para ter certeza. Em uma novel visual, onde quase todo o peso recai sobre o diálogo, isso o torna o mais difícil de resumir dos dois protagonistas e o mais recompensador de acompanhar ao longo de uma jogada.',
          'O wiki de fãs o descreve como despreocupado, sádico, provocador e secretamente ciumento, e registra que ele não se sente à vontade com afeto. O ciúme é a parte interessante dessa descrição, porque reenquadra a rivalidade como algo que ele tanto deseja quanto Pierrot, e não apenas algo que disputa.',
        ],
      },
      {
        heading: 'Altura e detalhes físicos',
        paragraphs: [
          `A tabela de alturas do desenvolvedor coloca Harlequin em ${formatHeight(chartFor('harlequin')).metric}, aproximadamente ${formatHeight(chartFor('harlequin')).imperial}. Isso o deixa 11 cm abaixo de Pierrot, uma diferença que o wiki de fãs considera significativa para a forma como os dois são encenados um contra o outro.`,
          'O design dele é descrito pelo wiki de fãs como cabelo preto cacheado até as bochechas, com duas mechas enroladas em forma de coração na testa esquerda, uma máscara branca com um losango verde atravessando um olho e um triângulo verde sob o outro, olhos verde-veneno que brilham quando a máscara é removida, e capuz e traje verdes e pretos com luvas desencontradas. De novo, trata-se de descrição de fã, e não de declaração do desenvolvedor, e sua maior utilidade é identificá-lo em capturas e artes.',
        ],
      },
      {
        heading: 'Ordem de idades e o mais novo dos cinco',
        paragraphs: [
          'Na ordem de idades publicada pelo desenvolvedor, Harlequin é o último: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Ele é o mais novo do elenco apresentado, e o mais novo dos dois protagonistas românticos por quatro posições.',
          'Esse é um fato genuinamente documentado, e também um dos que mais aparecem embaralhados online. Muito material de fãs atribui a Harlequin uma idade numérica específica, e vários desses números contradizem a ordem publicada. A ordem é a versão confiável.',
        ],
      },
      {
        heading: 'Ranking de força',
        paragraphs: [
          'Harlequin divide o segundo lugar no ranking de força do desenvolvedor com Jester, atrás de Pierrot e à frente do Doctor e do Ticket Taker. Somado ao fato de ser o mais novo e o segundo mais baixo, ele é descrito de forma consistente como o mais rápido do grupo, e não como o mais pesado — o wiki de fãs registra que os dois dividem a segunda categoria também em força física bruta.',
        ],
      },
      {
        heading: 'O que o material oficial diz sobre as relações dele',
        paragraphs: [
          'Existe uma declaração do desenvolvedor que é fácil de ler errado e que vale citar com cuidado. Perguntado sobre as mordidas que Harlequin deixa enquanto flerta, a resposta foi que elas não são propostas de casamento, que a marca não deixa cicatriz e que o casamento e o namoro entre monstros funcionam de modo diferente de como a protagonista entenderia. É uma linha pequena, mas faz muito trabalho: estabelece que a flerte dele tem lógica própria, e que o referencial da protagonista não é o referencial do circo.',
          'O wiki de fãs registra que Harlequin se sente seguro perto do Doctor, que o Doctor é sua pessoa favorita no circo e que ele se dá bem com o Ticket Taker apesar de uma divergência de gostos. Também registra um vínculo implícito com a morte de Columbina — que Harlequin a matou para "salvá-la" —, uma afirmação pesada que o próprio wiki enquadra como implicação, e não como declaração. O desenvolvedor confirmou o formato geral da história do circo em respostas de AMA, então a história é real, mas a leitura específica do papel de Harlequin nela não é confirmada por fonte de primeira mão.',
        ],
      },
      {
        heading: 'Situação da rota e do final',
        paragraphs: [
          'O final romântico de Harlequin é um dos quatro que o desenvolvedor nomeou, junto ao de Pierrot, ao da Protagonista e ao "All together". Nenhum dos quatro está implementado. A build atual contém um final, o final ruim "Missing" do Dia 1.',
          'Por isso, ainda não dá para escrever honestamente um guia do final de Harlequin. Um guia que listasse as escolhas exatas e a cor do ingresso necessários estaria descrevendo uma build que não existe publicamente, e quem o seguiria encontraria a rota indisponível. Quando ela for lançada, o guia útil vai ser uma estratégia de pontos de verificação e de save, e não uma tabela de gatilhos fabricada.',
        ],
      },
      {
        heading: 'Fatos confirmados versus interpretação',
        paragraphs: [
          'A divisão nesta página é a seguinte.',
        ],
        list: [
          'Confirmado pelo desenvolvedor: a altura dele, a posição de mais novo na ordem de idades, o empate em segundo na força, a descrição como "rival sedutor" de Pierrot, o fato de que as mordidas de flerte não são propostas e que um final romântico de Harlequin está planejado.',
          'Da build atual: a aparência, as cenas e as ramificações — algumas aparições dele variam conforme o ramo da história, algo que é confirmado por uma nota oficial de correção de bug.',
          'Derivado de fãs: a descrição completa do figurino e da máscara, a história pessoal e os detalhes concretos da relação dele com Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual a altura de Harlequin em The Freak Circus?',
        answer:
          'Harlequin tem 187 cm, aproximadamente 6 ft 1.62 in, na tabela de alturas publicada pelo desenvolvedor. Ele é o segundo mais baixo dos cinco personagens.',
      },
      {
        question: 'Harlequin é o personagem mais novo?',
        answer:
          'Sim. Na ordem de idades oficial do desenvolvedor ele fica em quinto lugar entre cinco, do mais velho para o mais novo: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Qual a idade de Harlequin?',
        answer:
          'Nenhuma idade numérica jamais foi publicada para qualquer personagem. Só a ordem relativa está documentada, e ela coloca Harlequin por último.',
      },
      {
        question: 'Como é a personalidade de Harlequin?',
        answer:
          'O wiki de fãs o descreve como despreocupado, sádico, provocador e secretamente ciumento, e registra que ele não se sente à vontade com afeto. Ele é o oposto teatral de Pierrot, e é isso que faz a rivalidade funcionar.',
      },
      {
        question: 'Qual é a relação entre Harlequin e Pierrot?',
        answer:
          'Eles são os rivais centrais do jogo. A sinopse oficial chama Harlequin de "rival sedutor" de Pierrot e enquadra o jogo como sendo liderado por um ou pelo outro. O wiki de fãs acrescenta que eles se conheceram quando crianças e que a história compartilhada envolve Columbina.',
      },
      {
        question: 'Harlequin tem rota?',
        answer:
          'O final romântico de Harlequin está planejado e em desenvolvimento, mas não está implementado na build pública, então não há condições de ativação para documentar.',
      },
      {
        question: 'Dá para conseguir o final do Harlequin?',
        answer:
          'Ainda não. O único final jogável é o final ruim "Missing" do Dia 1. O final de Harlequin foi anunciado e continua sendo escrito.',
      },
      {
        question: 'Harlequin é perigoso?',
        answer:
          'O jogo é classificado como 18+ e os avisos de conteúdo incluem assassinato, sequestro, uso não consentido de drogas e dominação física, então o elenco como um todo é escrito como perigoso. Harlequin em particular é descrito, na leitura de fãs de suas cenas, como imprevisível e sádico.',
      },
      {
        question: 'O que aconteceu com Columbina?',
        answer:
          'Ela é ex-membro do circo, e a morte dela molda o passado dos dois protagonistas. O wiki de fãs registra a implicação de que Harlequin a matou para "salvá-la", e de que Pierrot se recusou a participar. O design dela ainda está em produção, e os detalhes são ocultados de propósito.',
      },
      {
        question: 'Harlequin tem um final bom?',
        answer:
          'Nenhum final bom está implementado. O único final da build atual é ruim, e o final romântico de Harlequin é trabalho planejado que ainda não foi lançado.',
      },
    ],
  },
  jester: {
    role: 'O líder do circo, e um personagem sem rota própria',
    intro:
      'Jester é o personagem mais mal descrito online, quase sempre no sentido de lhe dar uma rota romântica que ele não tem. O desenvolvedor foi explícito: as opções de rota são Pierrot, Harlequin, os dois ou nenhum. Jester aparece na build atual como parte do grupo maior, e é a presença dele que faz o circo parecer uma instituição, e não apenas um par de rivais com um cenário de fundo.',
    sections: [
      {
        heading: 'Resposta rápida',
        paragraphs: [
          'Jester tem 192 cm, o terceiro mais alto dos cinco personagens apresentados, e fica em quarto lugar entre cinco na ordem de idades do desenvolvedor. Divide o segundo lugar no ranking de força com Harlequin. Não tem rota nem final, e o desenvolvedor afirmou que transformar os personagens restantes em opções românticas é uma possibilidade, e não um compromisso.',
        ],
      },
      {
        heading: 'Quem é Jester',
        paragraphs: [
          'Jester funciona como a figura de autoridade do circo. O wiki de fãs o descreve como o antagonista principal do Freak Circus, mas sereno e compilado em vez de volátil — uma descrição que encaixa no design melhor do que a palavra "antagonista" sozinha. É ele quem decide os papéis, quem distribui as funções do circo, e de quem se fala com uma mistura de respeito e irritação.',
          'O importante para quem lê é que a influência dele sobre os outros personagens é estrutural. Quando uma fonte diz que um personagem respeita Jester, tem medo dele, ou age dentro de regras que Jester estabeleceu, isso está descrevendo a forma do circo, e não um único momento da trama.',
        ],
      },
      {
        heading: 'Altura e detalhes físicos',
        paragraphs: [
          `A tabela de alturas do desenvolvedor coloca Jester em ${formatHeight(chartFor('jester')).metric}, aproximadamente ${formatHeight(chartFor('jester')).imperial}. Ele tem 6 cm a menos que Pierrot e 20 cm a menos que o Doctor.`,
          'O wiki de fãs o descreve com cabelo longo violeta-escuro, uma máscara branca marcada com um coração violeta invertido e uma estrela violeta, um casaco de gala violeta e luvas de ópera, e registra que ele é ambidestro. Essa descrição vem dos fãs, e não de uma declaração do desenvolvedor.',
        ],
      },
      {
        heading: 'Ordem de idades',
        paragraphs: [
          'Na ordem de idades publicada pelo desenvolvedor, Jester fica em quarto lugar entre cinco, do mais velho para o mais novo: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Ele é mais velho que Harlequin e mais novo que Pierrot, o Doctor e o Ticket Taker.',
          'O wiki de fãs registra um aniversário para Jester e afirma que o desenvolvedor publicou uma mensagem de aniversário para ele, o que torna sua data mais bem sustentada do que a da maioria dos outros — mas as datas que circulam para o resto do elenco são atribuídas pelos fãs, e a ordem de idades continua sendo a única medida oficial.',
        ],
      },
      {
        heading: 'Ranking de força',
        paragraphs: [
          'Jester divide o segundo lugar com Harlequin no ranking de força do desenvolvedor, atrás de Pierrot e à frente do Doctor e do Ticket Taker. Como Harlequin, o wiki de fãs o registra como forte, mas superado por Pierrot em potência bruta.',
        ],
      },
      {
        heading: 'O que o material oficial estabelece',
        paragraphs: [
          'As afirmações oficiais mais claras sobre Jester vêm de uma resposta de AMA sobre rotas: não existe rota de Jester, e, se mais rotas fossem adicionadas, elas provavelmente chegariam como conteúdo adicional ou DLC, sem nada decidido. Uma resposta separada descreveu transformar os personagens restantes em opções românticas como algo que o desenvolvedor gostaria de fazer, mas que não pode prometer.',
          'Todo o resto que costuma ser dito sobre ele — que controla os "Fools", que se referia aos humanos como "strays" (vagabundos), que escolheu o papel de cada um no circo — vem do wiki de fãs, e não do desenvolvedor, e é melhor tratado como interpretação das cenas dele.',
        ],
      },
      {
        heading: 'Situação da rota e do final',
        paragraphs: [
          'Não há rota de Jester nem final de Jester. Os quatro finais nomeados pelo desenvolvedor pertencem a Pierrot, Harlequin, à Protagonista e à conclusão combinada "All together".',
          'Vale também nomear diretamente outro erro comum: a ideia de que a rota de Jester "destrava no Dia 2" aparece em vários guias. Nada disso existe. O que veio na atualização do Dia 2 foram personagens adicionais, sprites animados, um menu redesenhado e uma versão para Android — não rotas novas.',
        ],
      },
      {
        heading: 'Fatos confirmados versus interpretação',
        paragraphs: [
          'No caso de Jester a proporção importa especialmente, porque boa parte do material publicado sobre ele apresenta especulação como se fosse mecânica.',
        ],
        list: [
          'Confirmado pelo desenvolvedor: a altura, a posição na ordem de idades, o empate em segundo na força e o fato de não ter rota.',
          'Da build atual: a aparência, as cenas e a autoridade que ele exerce sobre os outros personagens.',
          'Derivado de fãs: o conceito dos "Fools", o enquadramento dos "strays" (vagabundos), os detalhes de como ele distribui os papéis e a história pessoal dele.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual a altura de Jester?',
        answer:
          '192 cm, aproximadamente 6 ft 3.59 in, na tabela de alturas publicada pelo desenvolvedor. Ele é o terceiro mais alto dos cinco.',
      },
      {
        question: 'Jester é o líder do circo?',
        answer:
          'O wiki de fãs o descreve como o líder e o antagonista principal do circo, e a autoridade dele sobre os outros personagens é consistente ao longo da build. Essa descrição vem do fandom, e não de uma declaração do desenvolvedor.',
      },
      {
        question: 'Jester tem rota?',
        answer:
          'Não. O desenvolvedor confirmou que não existe rota de Jester. As únicas opções são Pierrot, Harlequin, os dois ou nenhum.',
      },
      {
        question: 'Jester tem final?',
        answer:
          'Não. Os quatro finais planejados pertencem a Pierrot, Harlequin, à Protagonista e a "All together".',
      },
      {
        question: 'A rota do Jester destrava no Dia 2?',
        answer:
          'Não. Vários guias afirmam isso, mas nada disso existe. A atualização do Dia 2 trouxe personagens adicionais, sprites animados, um menu redesenhado e uma versão para Android.',
      },
      {
        question: 'Qual a idade de Jester?',
        answer:
          'Nenhuma idade numérica é publicada. Na ordem de idades oficial ele fica em quarto lugar entre cinco, do mais velho para o mais novo.',
      },
      {
        question: 'Jester é o mais forte?',
        answer: 'Não — Pierrot fica em primeiro. Jester divide o segundo lugar com Harlequin.',
      },
      {
        question: 'Dá para romancear com o Jester?',
        answer:
          'Não na build atual. O desenvolvedor disse que transformar os outros personagens em opções românticas é uma possibilidade que ele gostaria de explorar, mas que não pode prometer.',
      },
    ],
  },
  'the-doctor': {
    role: 'A presença clínica na borda do elenco',
    intro:
      'O Doctor é apresentado na build atual e não tem rota, nem final, nem entrada de altura oficial na tabela pública que os fãs citam. O que torna ele interessante de ler é o contraste que cria: um registro clínico dentro de um carnaval, e um personagem que o fandom descreve como, ao mesmo tempo, a pessoa mais composta e a mais perigosa da tenda.',
    sections: [
      {
        heading: 'Resposta rápida',
        paragraphs: [
          'O Doctor tem 207 cm, o que o torna o mais alto dos cinco personagens apresentados por uma margem clara — 9 cm acima de Pierrot. Ele fica em segundo lugar entre cinco na ordem de idades do desenvolvedor, ou seja, apenas o Ticket Taker é mais velho. Ocupa o terceiro lugar entre cinco em força, e não tem rota nem final.',
        ],
      },
      {
        heading: 'Quem é o Doctor',
        paragraphs: [
          'O wiki de fãs descreve o Doctor como um antagonista secundário ou talvez uma figura neutra, e lhe dá dois lados: sereno e composto em um, apaixonado e sádico no outro. Essa é uma forma útil de ler as cenas dele, porque a mudança é descrita como visível — os olhos ficam vermelhos quando uma emoção específica assume o comando. O wiki também registra que ele prefere o engenho à força bruta, o que combina com um personagem que é ao mesmo tempo o mais alto e apenas o terceiro em força bruta.',
          'Ele também é o personagem com mais chance de ser representado como tendo rota. A ideia de uma rota do Doctor com um "final bom" circula em vários guias mais antigos, e não corresponde a nada que o desenvolvedor tenha descrito.',
        ],
      },
      {
        heading: 'Altura e detalhes físicos',
        paragraphs: [
          `A tabela de alturas do desenvolvedor coloca o Doctor em ${formatHeight(chartFor('the-doctor')).metric}, aproximadamente ${formatHeight(chartFor('the-doctor')).imperial} — o mais alto dos cinco por 9 cm.`,
          'O wiki de fãs o descreve com pele vermelha, cabelo vermelho curto e uma máscara de médico da peste com bico, com lentes ciano que brilham, e registra que suas pernas e seus pés nunca são mostrados. Também anota que ele é canhoto, que não sabe nadar e que os olhos ficam vermelhos quando ele sente certas emoções. Tudo isso é descrição de fã extraída do material, e não declarações do desenvolvedor.',
        ],
      },
      {
        heading: 'Ordem de idades e força',
        paragraphs: [
          'O Doctor fica em segundo lugar entre cinco na ordem de idades oficial, do mais velho para o mais novo: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Apenas o Ticket Taker é mais velho que ele.',
          'No ranking de força ele aparece em terceiro, à frente do Ticket Taker e atrás de Pierrot e dos empatados Harlequin e Jester. Ser o mais alto e ficar em terceiro na força é a combinação interessante: o Doctor é grande mais do que poderoso, e a descrição de fã de que ele prefere o engenho à força é exatamente o que se esperaria de alguém assim.',
        ],
      },
      {
        heading: 'Um detalhe que vale saber sobre a voz',
        paragraphs: [
          'O Doctor tem um acento russo no roteiro em inglês, apesar de o elenco ser brasileiro. É uma piada interna deliberada entre o dublador e a criadora, e está registrada no wiki de fãs com uma citação à própria postagem no Tumblr do dublador. É uma coisa pequena, mas é do tipo de detalhe que mostra quanto da documentação de fãs é realmente baseada em fontes, e não em suposições.',
        ],
      },
      {
        heading: 'Situação da rota e do final',
        paragraphs: [
          'O Doctor não tem rota nem final. O desenvolvedor confirmou que as opções de rota são Pierrot, Harlequin, os dois ou nenhum, e que quaisquer rotas adicionais de personagens provavelmente chegariam como conteúdo extra ou DLC, sem nada decidido.',
          'O final "Clean Hands" atribuído ao Doctor por algumas páginas de fãs mais antigas não é sustentado por nenhuma fonte de primeira mão, e este site não o mantém como fato.',
        ],
      },
      {
        heading: 'Fatos confirmados versus interpretação',
        paragraphs: [
          'A página do Doctor tem mais material derivado de fãs, em proporção ao material oficial, do que qualquer outro personagem do elenco, em boa parte porque ele não tem rota e portanto não existe uma descrição narrativa de primeira mão de uma rota.',
        ],
        list: [
          'Confirmado pelo desenvolvedor: a altura dele como o mais alto dos cinco, a segunda posição na ordem de idades, a quarta posição no ranking de força e o fato de não ter rota.',
          'Da build atual: a aparência, as cenas e a maneira como sua compostura se quebra.',
          'Derivado de fãs: os experimentos e espécimes atribuídos à tenda dele, a história pessoal e as curiosidades de personagem sobre os gostos dele.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual a altura do Doctor?',
        answer: '207 cm, aproximadamente 6 ft 9.5 in — o mais alto dos cinco personagens, 9 cm acima de Pierrot.',
      },
      {
        question: 'O Doctor é o mais velho?',
        answer:
          'Ele é o segundo mais velho. A ordem de idades oficial, do mais velho para o mais novo, é Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'O Doctor é o mais forte?',
        answer: 'Não. Ele fica em quarto na lista de força do desenvolvedor, atrás de Pierrot, Harlequin e Jester.',
      },
      {
        question: 'O Doctor tem rota?',
        answer: 'Não. O desenvolvedor confirmou que não existe rota do Doctor.',
      },
      {
        question: 'O Doctor tem um final bom?',
        answer:
          'Não. O Doctor não tem rota nem final na build atual. O único final que existe é o final ruim "Missing" do Dia 1.',
      },
      {
        question: 'Existe um final "Clean Hands" do Doctor?',
        answer:
          'Não. Esse dado aparece em algumas páginas de fãs, mas não é sustentado por nenhuma fonte de primeira mão, e este site não o lista como fato.',
      },
      {
        question: 'Qual é a relação do Doctor com Harlequin?',
        answer:
          'O wiki de fãs registra que Harlequin se sente seguro perto do Doctor e que o Doctor é sua pessoa favorita no circo. Isso é uma caracterização derivada de fãs, e não uma declaração do desenvolvedor.',
      },
      {
        question: 'Por que o Doctor tem acento russo?',
        answer:
          'É uma piada interna deliberada entre o dublador e a criadora, registrada pelo wiki de fãs com uma citação ao Tumblr do próprio dublador. O resto do elenco é brasileiro.',
      },
      {
        question: 'Dá para romancear com o Doctor?',
        answer:
          'Por enquanto, não. O desenvolvedor disse que transformar os outros personagens em opções românticas é uma possibilidade que ele gostaria de explorar, mas que não pode prometer.',
      },
    ],
  },
  'ticket-taker': {
    role: 'O guardião do limiar, e o mais velho dos cinco',
    intro:
      'O Bilheteiro (Ticket Taker) é o primeiro personagem que você conhece, e é aquele cuja idade está mais precisamente documentada: a ordem de idades publicada pelo desenvolvedor o coloca no topo. Também é o personagem a quem mais se atribui uma rota romântica que não existe, o que faz dele um bom caso de teste para ler o material de fãs com espírito crítico.',
    sections: [
      {
        heading: 'Resposta rápida',
        paragraphs: [
          'O Bilheteiro tem 183 cm, o mais baixo dos cinco personagens apresentados, e fica em primeiro lugar entre cinco na ordem de idades do desenvolvedor, o que faz dele o mais velho. Ocupa o último lugar no ranking de força. Não tem rota nem final, e o desenvolvedor confirmou isso diretamente.',
        ],
      },
      {
        heading: 'Quem é o Bilheteiro',
        paragraphs: [
          'Ele ocupa uma posição liminal dentro da ficção: uma figura na entrada do circo, associada à permissão, aos limiares e à maquinaria do espetáculo. O wiki de fãs o descreve como obediente e devoto ao propósito do circo, maduro e profissional,Obcecado com limpeza e organização, e enuncia seu princípio sem rodeios: por aqui, ninguém quebra o personagem.',
          'É esse último detalhe que faz dele funcionar como personagem, e não apenas como um porteiro. Em uma história sobre um circo que se sustenta na apresentação, um personagem cujo trabalho é fazer valer a fronteira entre plateia e artista precisa acreditar na apresentação.',
        ],
      },
      {
        heading: 'Altura e detalhes físicos',
        paragraphs: [
          `A tabela de alturas do desenvolvedor coloca o Bilheteiro em ${formatHeight(chartFor('ticket-taker')).metric}, aproximadamente ${formatHeight(chartFor('ticket-taker')).imperial} — o mais baixo dos cinco, 24 cm abaixo do Doctor.`,
          'O wiki de fãs o descreve com cabelo curto azul-marinho, uma máscara dividida em metade branca e metade preta, um casaco de gala azul-marinho com debrum dourado, um gravata-bola dourada e um cartola, e registra que ele tem olhos de cores diferentes — um branco e outro azul. O nome em português do personagem, Bilheteiro, aparece no mesmo material.',
        ],
      },
      {
        heading: 'O mais velho dos cinco',
        paragraphs: [
          'Este é o fato mais bem documentado sobre o Bilheteiro. Ele lidera a ordem de idades publicada pelo desenvolvedor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Como o mais velho do grupo e o responsável por manter a ordem, a idade dele combina com o papel em vez de complicá-lo.',
          'Como acontece com todos os personagens, nenhuma idade numérica foi publicada, e o aniversário que circula sobre ele é atribuído pelos fãs.',
        ],
      },
      {
        heading: 'Ranking de força',
        paragraphs: [
          'Ele fica em último lugar entre cinco na lista de força do desenvolvedor, abaixo do Doctor. Somado ao fato de ser o mais baixo, isso faz dele o menos imponente fisicamente do grupo — o que combina com um personagem cuja autoridade é inteiramente procedural.',
        ],
      },
      {
        heading: 'O sistema de ingressos',
        paragraphs: [
          'O desenvolvedor confirmou que existem oito tipos de ingresso. O rosa fica abaixo do elenco principal, o vermelho e o verde indicam uma escolha que a protagonista faz, e a combinação de rosa com vermelho significa que o Bilheteiro assume automaticamente a opção vermelha. Essa é uma das informações mecânicas oficiais mais concretas do jogo, e explica por que o Bilheteiro importa para as ramificações, mesmo sem rota própria.',
          'O wiki de fãs acrescenta que a figura do café que entrega o ingresso rosa à protagonista é o Bilheteiro disfarçado, e é assim também que o final ruim "Missing" tem início. Essa identificação é derivada de fãs, mas se conecta diretamente ao único final que a build realmente contém.',
        ],
      },
      {
        heading: 'Situação da rota e do final',
        paragraphs: [
          'O Bilheteiro não tem rota nem final. O desenvolvedor afirmou que as opções de rota são Pierrot, Harlequin, os dois ou nenhum, e que os personagens restantes talvez só tenham rotas como conteúdo adicional ou DLC, se isso chegar a acontecer.',
          'Vale dizer com clareza: alguns guias de fãs antigos descrevem uma rota romântica do Bilheteiro desbloqueada por persistência e diálogo cuidadoso. Essa rota não existe na build pública.',
        ],
      },
      {
        heading: 'Fatos confirmados versus interpretação',
        paragraphs: [
          'O Bilheteiro tem documentação oficial incomumente boa para um personagem de apoio, em boa parte porque o sistema de ingressos é uma das poucas mecânicas confirmadas.',
        ],
        list: [
          'Confirmado pelo desenvolvedor: a altura dele como o mais baixo dos cinco, a primeira posição na ordem de idades, a última posição no ranking de força, a existência de oito tipos de ingresso e o fato de não ter rota.',
          'Da build atual: a aparência, as cenas e o fato de que a protagonista recebe um ingresso rosa durante o Dia 1.',
          'Derivado de fãs: o disfarce como o homem "Desconhecido" do café, o epíteto de "manipulador da realidade" e os detalhes da história dele com Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual a altura do Bilheteiro?',
        answer:
          '183 cm, aproximadamente 6 ft 0 in — o mais baixo dos cinco personagens, 24 cm abaixo do Doctor.',
      },
      {
        question: 'O Bilheteiro é o mais velho?',
        answer:
          'Sim. Ele lidera a ordem de idades oficial do desenvolvedor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'O Bilheteiro é o mais forte?',
        answer: 'Não. Ele fica em último lugar entre cinco na lista de força do desenvolvedor.',
      },
      {
        question: 'Dá para romancear com o Bilheteiro?',
        answer:
          'Não. O desenvolvedor confirmou que não existe rota do Bilheteiro. As opções são Pierrot, Harlequin, os dois ou nenhum.',
      },
      {
        question: 'O Bilheteiro tem rota ou final?',
        answer:
          'Nenhum dos dois. Ele aparece ao longo da história como figura de autoridade, mas nenhuma rota ou final lhe pertence.',
      },
      {
        question: 'Quantos tipos de ingresso existem?',
        answer:
          'O desenvolvedor confirmou oito. O rosa fica abaixo do elenco principal, o vermelho e o verde sinalizam uma escolha da protagonista, e a combinação de rosa com vermelho significa que o Bilheteiro assume a opção vermelha automaticamente.',
      },
      {
        question: 'O que é o ingresso vermelho?',
        answer:
          'Vermelho e verde são as cores que marcam uma escolha feita pela protagonista. A combinação de rosa com vermelho significa que o Bilheteiro escolhe a opção vermelha no lugar dela.',
      },
      {
        question: 'O Bilheteiro é o homem do café?',
        answer:
          'O wiki de fãs identifica a figura "Desconhecido" do café, que entrega o ingresso rosa à protagonista, como o Bilheteiro disfarçado. Isso é derivado de fãs, e é o mesmo ingresso rosa que dá início ao final "Missing".',
      },
      {
        question: 'Por que o Bilheteiro é importante se não tem rota?',
        answer:
          'Ele controla o sistema de ingressos, uma das poucas mecânicas confirmadas do jogo, e é o personagem que estabelece a fronteira entre a protagonista como visitante e como participante.',
      },
    ],
  },
};
