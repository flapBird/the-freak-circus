// Brazilian Portuguese edition of the long-form guide pages.
//
// This mirrors the English `guideContent` record in topic-content.ts: same
// page set, same field order, same facts, same hedges. The English version is
// the source of truth; this file only re-expresses it in pt-BR prose.
//
// Rules kept while translating:
//   - The `related` arrays are internal slugs and stay byte-identical to the
//     English pages, so the internal linking footer keeps working.
//   - Every hedge ("planned", "not confirmed", "no date announced") survives the
//     translation. The value of this site is separating what shipped from what
//     is only planned, so a hedge must never become a certainty.
//   - Lists that mirror structured data (age order, strength ranking,
//     platforms, languages, content warnings, unverified claims) are derived
//     from game-facts.ts and translated through lookup tables, so the order and
//     the set of items can never drift from the English page.

import type { GuidePage } from './topic-content';
import {
  AGE_ORDER_OLDEST_FIRST,
  CONTENT_WARNINGS,
  PLATFORMS,
  SHIPPED_LANGUAGES,
  STRENGTH_RANKING,
  UNVERIFIED_CLAIMS,
} from './game-facts';

/** Lookup helper: falls back to the source string if a translation is missing. */
function tr(table: Record<string, string>, key: string): string {
  return table[key] ?? key;
}

const PLATFORM_DETAILS_PT: Record<string, string> = {
  'Web browser (HTML5)': 'Navegador web (HTML5)',
  Windows: 'Windows',
  macOS: 'macOS',
  Linux: 'Linux',
  Android: 'Android',
};

const PLATFORM_DETAIL_TEXT_PT: Record<string, string> = {
  'Runs in the browser through the official itch.io page':
    'Roda no navegador pela página oficial do itch.io',
  'PC build, version 0.2': 'Build para PC, versão 0.2',
  'Mac build, version 0.2': 'Build para Mac, versão 0.2',
  'Linux build, version 0.2': 'Build para Linux, versão 0.2',
  'APK build, version 0.2': 'Build em APK, versão 0.2',
};

const LANGUAGE_NAMES_PT: Record<string, string> = {
  English: 'Inglês',
  'Portuguese (Brazil)': 'Português (Brasil)',
  'Simplified Chinese': 'Chinês simplificado',
};

const CONTENT_WARNINGS_PT: Record<string, string> = {
  'Screen shaking': 'Tremor de tela',
  'Blood, death, murder and gore': 'Sangue, morte, assassinato e cenas de gore',
  'Allusions to cannibalism': 'Alusões a canibalismo',
  Abuse: 'Abuso',
  'Strong language': 'Linguagem pesada',
  Kidnapping: 'Sequestro',
  'Non-consensual use of drugs': 'Uso de drogas sem consentimento',
  'Physical domination': 'Dominação física',
  'Mild physical harassment and non-consensual physical contact':
    'Assédio físico leve e contato físico sem consentimento',
};

const UNVERIFIED_CLAIMS_PT: Record<string, string> = {
  'The game supports a specific number of save slots, autosaves at fixed intervals, or stores saves in a named folder.':
    'O jogo suporta uma quantidade específica de slots de save, faz autosave em intervalos fixos ou guarda os saves em uma pasta com nome definido.',
  'No official save documentation exists. Ren\'Py builds use a standard location, but the developer has not published specifics.':
    'Não existe documentação oficial sobre saves. Builds em Ren\'Py usam um local padrão, mas o desenvolvedor não publicou detalhes.',
  'Browser saves can be exported to a zip archive and imported into a desktop build.':
    'Saves do navegador podem ser exportados para um arquivo zip e importados em uma build desktop.',
  'Ren\'Py offers an export and import action in its engine overlay, but the developer has not confirmed a browser-to-desktop workflow for this game.':
    'O Ren\'Py oferece ações de exportar e importar na sobreposição do motor, mas o desenvolvedor não confirmou um fluxo de navegador para desktop para este jogo.',
};

const platformListPt = (): string[] =>
  PLATFORMS.map(
    (p) => `${tr(PLATFORM_DETAILS_PT, p.name)} — ${tr(PLATFORM_DETAIL_TEXT_PT, p.detail)}`,
  );

const languageListPt = (): string[] =>
  SHIPPED_LANGUAGES.map((l) => tr(LANGUAGE_NAMES_PT, l.name));

const contentWarningListPt = (): string[] =>
  CONTENT_WARNINGS.map((w) => tr(CONTENT_WARNINGS_PT, w));

const ageOrderListPt = (): string[] =>
  AGE_ORDER_OLDEST_FIRST.map((entry) => `${entry.ageOrder}. ${entry.name} — ${entry.cm} cm de altura`);

const strengthListPt = (): string[] =>
  STRENGTH_RANKING.map(
    (entry) => `${entry.name} — posição ${entry.strengthRank}${entry.strengthRank === 2 ? ' (empatado)' : ''}`,
  );

const unverifiedSaveListPt = (): string[] =>
  UNVERIFIED_CLAIMS.filter((c) => /save|slot|browser|zip/i.test(c.claim)).map(
    (c) => `${tr(UNVERIFIED_CLAIMS_PT, c.claim)} — ${tr(UNVERIFIED_CLAIMS_PT, c.reality)}`,
  );

export const guideContentPt: Record<string, GuidePage> = {
  endings: {
    slug: 'endings',
    title: 'Finais e Rotas de The Freak Circus',
    metaTitle: 'Guia de Finais de The Freak Circus: Todas as Rotas e Resultados',
    metaDescription:
      'Quantos finais The Freak Circus tem? O final ruim "Missing" confirmado, os quatro finais planejados, quais personagens têm rota e o que o desenvolvedor realmente confirmou.',
    intro:
      'Finais são o tema mais buscado deste jogo — e também o mais fácil de ser reportado errado. A versão pública atual tem exatamente um final. Tudo o que aparece em guias, wikis e vídeos ou é trabalho planejado ou é interpretação de fã. Esta página separa os dois casos e liga cada afirmação ao lugar onde o desenvolvedor a fez.',
    quickFacts: [
      { label: 'Finais jogáveis agora', value: '1', note: 'O final ruim "Missing" no Day 1' },
      {
        label: 'Finais anunciados como planejados',
        value: '4',
        note: 'Pierrot, Harlequin, Protagonista, "All together"',
      },
      { label: 'Versão atual', value: 'Protótipo da versão 0.2' },
      { label: 'Opções de rota confirmadas', value: 'Pierrot, Harlequin, ambos ou nenhum' },
      { label: 'Situação do Day 3', value: 'Em desenvolvimento, sem data anunciada' },
    ],
    sections: [
      {
        heading: 'O único final que realmente existe',
        paragraphs: [
          'A versão 0.2 contém um único final, e ele é ruim. Ele é alcançado no Day 1: se a protagonista não faz nada enquanto Pierrot é zombado por um homem diante de uma multidão, a protagonista recebe um ingresso rosa de uma figura desconhecida, é levada até a tenda rosa e tem a entrada negada por cada membro do circo. O jogo diz com todas as letras que a protagonista não conseguiu chamar a atenção de Pierrot e teve um fim trágico.',
          'Isso importa mais do que parece. Muito material de fã descreve quatro ou mais finais como se já fossem alcançáveis hoje. Na versão atual, escolher entre rotas ainda está em desenvolvimento — os galhos existem, os desfechos não.',
        ],
      },
      {
        heading: 'Os quatro finais planejados',
        paragraphs: [
          'O desenvolvedor lista quatro desfechos na página oficial e no FAQ oficial. Dois são finais românticos, um é deliberadamente sem romance e um é um final poliamoroso.',
        ],
        list: [
          'Final do Pierrot (romance) — Um final romântico em que a protagonista termina com Pierrot. Listado pelo desenvolvedor como trabalho planejado e descrito repetidamente como ainda em desenvolvimento.',
          'Final do Harlequin (romance) — Um final romântico em que a protagonista termina com Harlequin. Listado pelo desenvolvedor como trabalho planejado; o roteiro dele ainda não está pronto.',
          'Final da Protagonista (sem romance) — Um desfecho em que a protagonista termina a história sem romance. O desenvolvedor confirmou que essa rota existe como conceito e que ainda é possível escolher amizades junto dela.',
          '"All together" (final poli) — Um desfecho em que a protagonista se apaixona por Pierrot e Harlequin ao mesmo tempo. Anunciado como planejado, e não como conteúdo implementado.',
        ],
      },
      {
        heading: 'Para quem dá para fazer rota na prática',
        paragraphs: [
          'A resposta oficial é restrita: Pierrot, Harlequin, os dois ou nenhum. A rota da protagonista é a opção "nenhum", e o desenvolvedor confirmou que ela não envolve romance, ainda que permita escolher se você quer fazer amizade com o elenco.',
          'Não existe rota para Jester, Ticket Taker (Bilheteiro em português) ou Doctor. O desenvolvedor disse que, se mais rotas forem adicionadas depois, é mais provável que cheguem como conteúdo extra ou DLC, e que isso não está decidido. Transformar os personagens restantes em opções românticas é chamado de possibilidade, não de promessa.',
        ],
      },
      {
        heading: 'O que o final poli significa de verdade',
        paragraphs: [
          'O final "All together" é definido pelo desenvolvedor como a protagonista se apaixonando por Pierrot e Harlequin ao mesmo tempo. É um desfecho listado à parte, e não uma variação lateral de qualquer uma das rotas românticas, e continua sendo trabalho planejado.',
        ],
      },
      {
        heading: 'Por que os guias discordam sobre a quantidade de finais',
        paragraphs: [
          'Sites diferentes informam totais diferentes porque respondem a perguntas diferentes. Uns contam só o que é jogável, outros contam só o que o desenvolvedor nomeou, e outros ainda misturam desfechos planejados com teorias de fã. Enfrentar qualquer afirmação com os três blocos acima — implementado, planejado ou não verificado — é o jeito mais rápido de classificá-la.',
          'Vale mais dois avisos. O desenvolvedor disse que o roteiro ainda está em andamento, então os finais planejados podem mudar. E não existe uma contagem oficial de finais: a resposta para "quantos finais haverá" é que vários estão planejados, mas ainda não é possível dar um número.',
        ],
      },
      {
        heading: 'O que esperar do Day 3',
        paragraphs: [
          'O Day 3 é o próximo dia dentro do jogo e está em desenvolvimento ativo. Atualizações de desenvolvimento descrevem seções de beta já finalizadas e colocam o beta em cerca de 30–40% da atualização, com um roteiro maior do que o do Day 2 e conteúdo adicional de final ruim. Nenhuma data de lançamento foi anunciada, e o desenvolvedor pediu que datas de fora não sejam repetidas.',
          'Como é no Day 3 que os novos desfechos estão sendo escritos, esta é a página a revisitar depois da próxima atualização oficial.',
        ],
      },
    ],
    faq: [
      {
        question: 'Quantos finais The Freak Circus tem?',
        answer:
          'Um final é jogável na versão atual. Mais quatro foram anunciados como planejados: Pierrot, Harlequin, Protagonista e "All together". O desenvolvedor disse que vários finais estão planejados, mas não pode dar um número total.',
      },
      {
        question: 'Como eu consigo o final "Missing"?',
        answer:
          'É o único final implementado. No Day 1, não faça nada enquanto Pierrot é zombado; a protagonista recebe um ingresso rosa, é levada até a tenda rosa e é dispensada pelo circo.',
      },
      {
        question: 'Como eu consigo o final do Harlequin?',
        answer:
          'Ainda não existe um passo a passo, porque o final não está implementado. A rota do Harlequin está em desenvolvimento. Qualquer lista de gatilhos passo a passo publicada na internet estaria descrevendo uma build que não existe publicamente.',
      },
      {
        question: 'Pierrot tem final?',
        answer:
          'Um final romântico do Pierrot foi anunciado e está em desenvolvimento, mas não está na build pública. O desenvolvedor descreve o roteiro e os finais como ainda em andamento.',
      },
      {
        question: 'Existe rota do Jester, do Doctor ou do Ticket Taker?',
        answer:
          'Não. As opções de rota confirmadas são Pierrot, Harlequin, ambos ou nenhum. Rotas adicionais de personagens provavelmente chegariam como conteúdo extra ou DLC, e isso não está decidido.',
      },
      {
        question: 'Dá para ter um romance sem personagem?',
        answer:
          'Sim. A rota da protagonista existe como conceito e não envolve romance, mas você ainda pode escolher fazer amizade com o elenco.',
      },
      {
        question: 'Quantos finais o jogo completo vai ter?',
        answer:
          'O desenvolvedor disse que vários finais estão planejados, mas não pode dar um número. O roteiro ainda está em andamento, então a lista acima pode mudar.',
      },
      {
        question: 'O Day 3 vai adicionar finais?',
        answer:
          'O Day 3 está em desenvolvimento ativo, e as atualizações de desenvolvimento descrevem conteúdo adicional de final ruim e cenas ocultas. Nenhuma data de lançamento foi anunciada.',
      },
    ],
    related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
  },
  heights: {
    slug: 'characters/heights',
    title: 'Alturas, Ordem de Idade e Rankings dos Personagens',
    metaTitle: 'Tabela de Alturas de The Freak Circus: Todos os Personagens em Ranking',
    metaDescription:
      'Tabela oficial de alturas dos personagens de The Freak Circus — Pierrot, Harlequin, Jester, Doctor e Ticket Taker — mais a ordem de idade publicada e o ranking de força.',
    intro:
      'O desenvolvedor publicou uma tabela de alturas junto com a referência de sprites, e uma ordem de idade à parte. São essas duas listas a razão de as perguntas sobre altura neste jogo terem uma resposta definitiva — e também a razão de tantas listas online errá-las. Esta página reproduz os números publicados e marca onde o ranking acaba.',
    quickFacts: [
      { label: 'Mais alto', value: 'Doctor — 207 cm', note: 'Cerca de 6 ft 9.5 in' },
      { label: 'Mais baixo', value: 'Ticket Taker — 183 cm', note: 'Cerca de 6 ft 0 in' },
      { label: 'Diferença de altura', value: '24 cm', note: 'Entre o mais alto e o mais baixo' },
      {
        label: 'Mais velho',
        value: 'Ticket Taker',
        note: 'Ordem oficial de idade, do mais velho para o mais novo',
      },
      {
        label: 'Mais novo',
        value: 'Harlequin',
        note: 'Ordem oficial de idade, do mais velho para o mais novo',
      },
      { label: 'Mais forte', value: 'Pierrot', note: 'Ranking de força bruta do desenvolvedor' },
    ],
    sections: [
      {
        heading: 'A tabela oficial de alturas',
        paragraphs: [
          'A tabela foi publicada pelo desenvolvedor como referência usada na hora de desenhar os sprites. Ela lista cinco personagens, ou seja, todos os personagens apresentados na versão atual. Os números abaixo são os valores publicados, não estimativas tiradas da arte.',
        ],
      },
      {
        heading: 'A ordem oficial de idade',
        paragraphs: [
          'Uma postagem separada de AMA respondeu a um pedido para ordenar o elenco do mais velho ao mais novo. A ordem é Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Nenhuma idade numérica jamais foi publicada para nenhum deles, e essa ordem é a única informação sobre idade que o desenvolvedor lançou.',
        ],
        list: ageOrderListPt(),
      },
      {
        heading: 'O ranking de força',
        paragraphs: [
          'O desenvolvedor também publicou um ranking de força física bruta, que é separado da altura. A ordem é: Pierrot em primeiro, Harlequin e Jester empatados em segundo, Doctor em terceiro e Ticket Taker por último. O ranking foi publicado como um adendo à resposta a uma pergunta de fã, e não como uma mecânica de jogo, então trate-o como caracterização, e não como uma tela de status.',
        ],
        list: strengthListPt(),
      },
      {
        heading: 'O que a tabela não cobre',
        paragraphs: [
          'A tabela cobre apenas os cinco personagens apresentados. Columbina, cuja morte dá forma ao passado dos dois protagonistas, não aparece na tabela publicada, e nenhuma altura oficial em números foi encontrada para ela. Uma altura para ela que circula em wikis de fã não é informação de primeira mão.',
          'Os aniversários são igualmente desiguais. O aniversário de um personagem foi confirmado por uma postagem oficial; as demais datas que circulam online foram tiradas de fãs e devem ser tratadas como tal.',
        ],
      },
      {
        heading: 'Por que as listas de personagens discordam',
        paragraphs: [
          'A maioria das divergências vem de misturar a tabela publicada com idades e aniversários atribuídos pelos fãs, e depois apresentar o resultado como oficial. As alturas e a ordem relativa de idade estão documentadas. Idades exatas, a maioria dos aniversários e qualquer informação sobre um sexto personagem não estão.',
        ],
      },
    ],
    faq: [
      {
        question: 'Qual é a altura de Pierrot em The Freak Circus?',
        answer:
          'Pierrot tem 198 cm, cerca de 6 ft 5.95 in, na tabela de alturas publicada pelo desenvolvedor.',
      },
      {
        question: 'Qual é a altura de Harlequin?',
        answer:
          'Harlequin tem 187 cm, cerca de 6 ft 1.62 in. Ele é o mais baixo dos dois protagonistas românticos e o mais novo dos cinco.',
      },
      {
        question: 'Quem é o personagem mais alto?',
        answer:
          'Doctor, com 207 cm — cerca de 6 ft 9.5 in. Ele é 9 cm mais alto do que Pierrot.',
      },
      {
        question: 'Quem é o personagem mais baixo?',
        answer:
          'Ticket Taker, com 183 cm — cerca de 6 ft 0 in. Ele também é o mais velho dos cinco.',
      },
      {
        question: 'Qual personagem é o mais velho?',
        answer:
          'A ordem oficial de idade, do mais velho ao mais novo, é Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin é o mais novo.',
      },
      {
        question: 'Quem é o mais forte?',
        answer:
          'Pierrot fica em primeiro na lista de força do desenvolvedor, com Harlequin e Jester empatados em segundo, Doctor em terceiro e Ticket Taker por último.',
      },
      {
        question: 'Qual é a idade de Harlequin?',
        answer:
          'Nenhuma idade numérica foi publicada. Ele é o mais novo dos cinco na ordem oficial de idade. Idades numéricas encontradas em sites de fã não são informação de primeira mão.',
      },
      {
        question: 'Qual é a altura de Columbina?',
        answer:
          'Nenhuma altura oficial foi publicada para ela. Ela não aparece na tabela do desenvolvedor, que cobre os cinco personagens apresentados.',
      },
    ],
    related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
  },
  save: {
    slug: 'save',
    title: 'Como Salvar e Continuar',
    metaTitle: 'Como Salvar The Freak Circus: Continuar, Slots e Saves no Navegador',
    metaDescription:
      'Como salvar e continuar The Freak Circus no navegador, no PC, no Mac e no Android — o que o motor Ren\'Py faz por padrão e quais detalhes de save o desenvolvedor nunca documentou.',
    intro:
      'Save é onde os guias de fã são menos confiáveis. Vários sites publicam caminhos exatos de pasta, quantidade de slots e procedimentos de transferência do navegador para o desktop que o desenvolvedor nunca publicou. Esta página descreve o que é realmente conhecido — o comportamento do motor e o ponto de entrada confirmado para o Day 2 — e separa isso do que continua sem documentação.',
    quickFacts: [
      {
        label: 'Motor',
        value: "Ren'Py",
        note: 'Save, load, save rápido e rollback padrão',
      },
      {
        label: 'Continuar sem repetir o Day 1',
        value: 'Sim',
        note: 'O menu oferece um ponto de entrada no Day 2',
      },
      {
        label: 'Jogar no navegador',
        value: 'Suportado',
        note: 'Servido pela página oficial do itch.io',
      },
      { label: 'Documentação oficial de save', value: 'Não publicada' },
      { label: 'Quantidade de slots de save', value: 'Não confirmada' },
      {
        label: 'Transferência do navegador para o desktop',
        value: 'Não confirmada para este jogo',
      },
    ],
    sections: [
      {
        heading: 'O que o jogo suporta de fábrica',
        paragraphs: [
          'The Freak Circus é feito em Ren\'Py, um motor de visual novel padrão. Isso significa que ele usa a interface normal do motor: um botão de save que abre a lista de slots, um botão de load, slots de save rápido e de load rápido, e rollback de cenas no histórico. Se você já usou outro título em Ren\'Py, o comportamento vai parecer familiar.',
          'Também existe uma versão de navegador, servida pela página oficial do itch.io. O desenvolvedor documentou travamentos específicos do navegador e as respectivas correções, o que confirma que jogar no navegador é um caminho mantido, e não um acidente.',
        ],
      },
      {
        heading: 'O ponto de entrada do Day 2',
        paragraphs: [
          'Há um recurso ligado ao progresso que está confirmado e vale conhecer: o menu inclui um botão para o Day 2 com uma introdução curta, então dá para continuar para o Day 2 sem jogar o Day 1 de novo. Isso importa para quem quer voltar ao conteúdo atual sem refazer a abertura.',
        ],
      },
      {
        heading: 'Onde ficam os saves no desktop',
        paragraphs: [
          'As versões desktop de Ren\'Py guardam os saves em uma pasta específica do projeto, dentro do diretório de dados do usuário. O caminho exato muda entre Windows, macOS e Linux, e o jogo já foi distribuído sob mais de um nome de projeto. Não publicamos um caminho específico aqui porque o desenvolvedor nunca documentou um para este jogo, e um caminho errado em um guia manda as pessoas procurarem pastas que não existem.',
          'Se você precisa do caminho da sua própria máquina, o método confiável é abrir o menu de load ou de save dentro do jogo e usar a ação de gerenciamento de saves da sobreposição do motor, que abre direto a pasta correta da plataforma em que você está.',
        ],
      },
      {
        heading: 'Saves no navegador e por que eles podem sumir',
        paragraphs: [
          'A versão de navegador guarda o progresso no armazenamento do próprio navegador, e não em um arquivo que você controla. Isso tem uma consequência prática: limpar os dados do site, usar uma janela anônima ou algumas configurações de privacidade mais agressivas apagam os saves sem aviso. Também significa que um save de navegador fica preso ao navegador e ao perfil que o criou.',
          'Isso é comportamento do motor, não um defeito específico deste jogo, e é o motivo mais comum de os jogadores relatarem perda de progresso.',
        ],
      },
      {
        heading: 'Movendo um save entre navegador e desktop',
        paragraphs: [
          'O Ren\'Py oferece ações de exportar e importar saves na sobreposição do motor. Se isso gera um fluxo confiável para transferir um save do navegador para a versão desktop deste jogo específico não foi confirmado pelo desenvolvedor, e os relatos variam de navegador para navegador e de plataforma para plataforma.',
          'Trate como algo que vale a pena testar, e não como um procedimento garantido, e faça backup de tudo o que importa antes de mexer.',
        ],
      },
      {
        heading: 'Afirmações que decidimos não repetir',
        paragraphs: [
          'As afirmações abaixo circulam bastante e são apresentadas como fatos por vários guias de fã. Nenhuma delas vem do desenvolvedor, e esta página não vai repeti-las como se fossem questões resolvidas:',
        ],
        list: unverifiedSaveListPt(),
      },
    ],
    faq: [
      {
        question: 'Como eu salvo em The Freak Circus?',
        answer:
          'É um lançamento em Ren\'Py, então usa os botões padrão de save e load do motor, com lista de slots, save rápido, load rápido e rollback no histórico.',
      },
      {
        question: 'Posso pular direto para o Day 2?',
        answer:
          'Sim. O menu inclui um botão do Day 2 com uma introdução curta, então dá para continuar para o Day 2 sem repetir o Day 1.',
      },
      {
        question: 'Por que meu save do navegador sumiu?',
        answer:
          'A versão de navegador guarda o progresso no armazenamento do navegador. Limpar os dados do site, usar uma janela anônima ou configurações rígidas de privacidade podem apagá-lo. Um save de navegador também fica preso ao perfil de navegador que o criou.',
      },
      {
        question: 'Onde ficam meus arquivos de save no PC ou no Mac?',
        answer:
          'O Ren\'Py guarda os saves em uma pasta específica do projeto, dentro do diretório de dados do usuário do sistema, e o caminho muda de plataforma e de nome de build. O desenvolvedor não publicou um caminho para este jogo, então use a ação de gerenciamento de saves da sobreposição do motor, a partir do menu dentro do jogo, para abrir a pasta correta na sua máquina.',
      },
      {
        question: 'Posso transferir um save do navegador para a versão desktop?',
        answer:
          'O Ren\'Py oferece ações de exportar e importar saves. Se elas funcionam de forma confiável para mover um save do navegador para uma build desktop deste jogo não foi confirmado, então vale testar — faça backup antes.',
      },
      {
        question: 'Quantos slots de save existem?',
        answer:
          'Isso não foi documentado pelo desenvolvedor. A quantidade de slots vem da build do motor, e não de uma declaração oficial.',
      },
      {
        question: 'O jogo faz autosave?',
        answer:
          'O comportamento de autosave vem da build do motor. O desenvolvedor não publicou uma rotina específica de autosave para este jogo.',
      },
      {
        question: 'Existem problemas conhecidos de save no navegador?',
        answer:
          'O desenvolvedor documentou travamentos no navegador na tenda do Ticket Taker e em algumas seções animadas, junto com as correções, e também registrou que pular cenas rápido demais pode dessincronizar efeitos visuais. São problemas de reprodução, e não de save, mas podem interromper uma sessão.',
      },
    ],
    related: ['save', 'download', 'faq', 'endings', 'day-3'],
  },
  download: {
    slug: 'download',
    title: 'Onde Jogar e Baixar',
    metaTitle: 'Download de The Freak Circus: Jogue de Graça no Navegador, PC, Mac e Android',
    metaDescription:
      'Onde jogar The Freak Circus com segurança — a página oficial do itch.io, as plataformas suportadas, o jogo no navegador e como identificar um download falso.',
    intro:
      'The Freak Circus é distribuído pela página do desenvolvedor no itch.io, que também é a única página oficial do jogo. Qualquer outro lugar que diga hospedar a build completa ou é um espelho ou é uma fraude. Aqui está como conseguir a versão legítima em cada plataforma, e os poucos sinais que entregam um download falso.',
    quickFacts: [
      { label: 'Fonte oficial', value: 'itch.io — a única página oficial' },
      {
        label: 'Preço',
        value: 'Pague o que quiser',
        note: 'Você paga o que achar justo, inclusive zero',
      },
      { label: 'Versão atual', value: 'Versão 0.2' },
      { label: 'Plataformas', value: 'Navegador, Windows, macOS, Linux, Android' },
      { label: 'Idiomas', value: 'Inglês, português do Brasil, chinês simplificado' },
      { label: 'Dublagem', value: 'Somente em inglês' },
    ],
    sections: [
      {
        heading: 'A única fonte oficial',
        paragraphs: [
          'O jogo é publicado por Garula no itch.io, e o desenvolvedor afirmou que essa página é a única página oficial do jogo. Ela oferece a opção "Run game" dentro do navegador e versões para download nas plataformas desktop e mobile listadas abaixo. A opção de navegador não exige nenhuma instalação.',
          'Como o preço é "pague o que quiser", dá para baixar a build completa de graça. Pagar é uma forma de apoiar quem fez o jogo por conta própria — o desenvolvedor já afirmou que o desenvolvimento foi conduzido em grande parte sozinho.',
        ],
      },
      {
        heading: 'Plataformas e builds',
        paragraphs: [
          'A versão 0.2 está disponível nas cinco plataformas. A build de navegador é o jeito mais rápido de começar e é uma boa escolha se você quiser ler um guia ao lado do jogo.',
        ],
        list: platformListPt(),
      },
      {
        heading: 'Idiomas e dublagem',
        paragraphs: [
          'O jogo sai em inglês, português do Brasil e chinês simplificado. A tradução para chinês foi revisada para a versão 0.2, e outros idiomas já foram discutidos como traduções apoiadas pela comunidade.',
          'A dublagem é somente em inglês, feita por Darthsuki. O desenvolvedor explicou que adicionar mais idiomas de dublagem não estava previsto originalmente e seria trabalho novo.',
        ],
        list: languageListPt(),
      },
      {
        heading: 'Avisos de conteúdo',
        paragraphs: [
          'O jogo tem classificação 18+ e o desenvolvedor publica uma lista explícita de avisos. Vale ler antes de jogar, principalmente se você estiver decidindo quanto da história ler sobre antes de começar.',
        ],
        list: contentWarningListPt(),
      },
      {
        heading: 'Como identificar um download falso',
        paragraphs: [
          'O sinal de alerta mais claro é qualquer site que ofereça o jogo completo fora da página oficial do itch.io. O desenvolvedor pediu explicitamente que o jogo não seja reenviado ou republicado, e confirmou que não existe servidor oficial no Discord, então todo servidor deve ser considerado mantido por fãs.',
          'Outras coisas para tratar como bandeiras vermelhas: um app ou extensão de navegador de "verificação" obrigatório, um download bem pequeno que na verdade é o instalador de outra coisa, e qualquer pedido para desativar a proteção antivírus.',
        ],
      },
      {
        heading: 'O que a versão de navegador acerta, e onde ela tropeça',
        paragraphs: [
          'Jogar no navegador é realmente suportado, e o desenvolvedor já corrigiu problemas específicos do navegador, incluindo um travamento na tenda do Ticket Taker e em algumas seções animadas. Pular certas cenas muito rápido ainda pode deixar efeitos visuais fora de sincronia, o que vale saber se você está clicando rápido.',
          'Se você quer a experiência mais tranquila para refazer o jogo e caçar rotas, a build desktop dá a interface completa do Ren\'Py, com rollback.',
        ],
      },
    ],
    faq: [
      {
        question: 'Onde eu posso jogar The Freak Circus?',
        answer:
          'Na página do desenvolvedor no itch.io, que é a única página oficial do jogo. Ela oferece tanto o jogo no navegador quanto builds para download.',
      },
      {
        question: 'The Freak Circus é gratuito?',
        answer:
          'É "pague o que quiser" no itch.io, então dá para baixar a build completa de graça e pagar o que achar justo se quiser apoiar o desenvolvedor.',
      },
      {
        question: 'Posso jogar The Freak Circus no meu celular?',
        answer:
          'Sim. Uma build para Android é publicada junto com as versões de navegador, Windows, macOS e Linux.',
      },
      {
        question: 'Tem versão em chinês?',
        answer:
          'Sim. O chinês simplificado vem com o jogo, e a tradução foi revisada para a versão 0.2.',
      },
      {
        question: 'Quais outros idiomas estão disponíveis?',
        answer:
          'O jogo sai em inglês, português do Brasil e chinês simplificado, com dublagem somente em inglês. Outros idiomas já foram discutidos como traduções da comunidade.',
      },
      {
        question: 'Como sei se um site de download é falso?',
        answer:
          'A página oficial do itch.io é a única fonte oficial. O desenvolvedor pediu que o jogo não fosse republicado, então qualquer outro site que ofereça a build completa está sem licença, na melhor das hipóteses. Nunca instale um programa "de verificação" separado nem desative o antivírus para conseguir o jogo.',
      },
      {
        question: 'Devo jogar no navegador ou baixar a versão desktop?',
        answer:
          'A build de navegador não exige instalação e serve bem para uma primeira leitura. A build desktop dá a interface completa do Ren\'Py com rollback, o que é melhor para caçar rotas e refazer o jogo várias vezes.',
      },
      {
        question: 'A versão de navegador tem bug?',
        answer:
          'Alguns travamentos específicos do navegador foram corrigidos pelo desenvolvedor, incluindo um na tenda do Ticket Taker. Pular cenas rápido demais ainda pode dessincronizar os efeitos visuais.',
      },
    ],
    related: ['download', 'save', 'faq', 'endings', 'characters'],
  },
  faq: {
    slug: 'faq',
    title: 'Perguntas Frequentes',
    metaTitle: 'FAQ de The Freak Circus: Jogar, Salvar, Finais, Personagens e Download',
    metaDescription:
      'Respostas para as perguntas mais comuns sobre The Freak Circus — onde jogar, como salvar, quantos finais existem, as alturas dos personagens e o que ainda está em desenvolvimento.',
    intro:
      'Esta é a versão curta do site. Se uma pergunta tem um guia dedicado, esta página dá a resposta e leva ao detalhe em vez de repetir tudo. Quando a resposta depende de algo que o desenvolvedor não publicou, isso é dito com clareza em vez de preenchido com uma suposição que soa plausível.',
    quickFacts: [
      { label: 'Versão atual', value: 'Protótipo da versão 0.2' },
      { label: 'Finais jogáveis', value: '1', note: '"Missing" — um final ruim' },
      { label: 'Finais planejados', value: '4' },
      {
        label: 'Plataformas',
        value: '5',
        note: 'Navegador, Windows, macOS, Linux, Android',
      },
      {
        label: 'Idiomas',
        value: '3',
        note: 'Inglês, português, chinês simplificado',
      },
      { label: 'Day 3', value: 'Em desenvolvimento, sem data anunciada' },
    ],
    sections: [
      {
        heading: 'Jogar e baixar',
        paragraphs: [
          'Tudo sobre como fazer o jogo funcionar está no guia de download. A versão curta: a página oficial do itch.io é a única fonte oficial, o preço é "pague o que quiser" e ela oferece tanto o jogo no navegador quanto builds para desktop e Android.',
        ],
      },
      {
        heading: 'Salvar e continuar',
        paragraphs: [
          'O jogo é um lançamento padrão em Ren\'Py, então salvar funciona pela interface normal do motor. O menu também deixa você pular direto para o Day 2 sem repetir o Day 1. Detalhes que circulam muito online mas nunca foram confirmados pelo desenvolvedor — caminhos exatos de save, quantidade de slots e a transferência garantida do navegador para o desktop — estão marcados como não verificados no guia de save.',
        ],
      },
      {
        heading: 'Finais e rotas',
        paragraphs: [
          'Um final é jogável na versão atual, e é um final ruim. Mais quatro foram anunciados como planejados: Pierrot, Harlequin, a Protagonista e "All together". As opções de rota são Pierrot, Harlequin, ambos ou nenhum — não existe rota do Jester, do Doctor ou do Ticket Taker.',
        ],
      },
      {
        heading: 'Personagens e medidas',
        paragraphs: [
          'O desenvolvedor publicou uma tabela de altura cobrindo os cinco personagens apresentados, e uma ordem de idade à parte. Essas duas listas são as únicas medidas oficiais. Idades exatas, a maioria dos aniversários e a altura de Columbina circulam online sem nenhuma fonte de primeira mão.',
        ],
      },
      {
        heading: 'O que ainda está em desenvolvimento',
        paragraphs: [
          'A versão 0.2 contém as apresentações dos cinco personagens e um final ruim. O Day 3 está em desenvolvimento ativo, com atualizações de desenvolvimento descrevendo seções de beta já finalizadas em cerca de 30–40% da atualização. Nenhuma data de lançamento foi anunciada, e o desenvolvedor pediu que datas de fora não sejam repetidas.',
        ],
      },
      {
        heading: 'Sobre este site',
        paragraphs: [
          'Este é um guia de fã independente. Não é o desenvolvedor, a editora nem um canal oficial de suporte. O desenvolvedor confirmou que não existe servidor oficial no Discord, então todo servidor e toda conta que não esteja linkada a partir das páginas oficiais do itch.io, do Tumblr, do Patreon ou do Bluesky deve ser considerado mantido por fãs ou não autorizado.',
        ],
      },
    ],
    faq: [
      {
        question: 'Onde eu posso jogar The Freak Circus?',
        answer:
          'Na página do desenvolvedor no itch.io, que é a única página oficial do jogo. Ela oferece o jogo no navegador e builds para download de Windows, macOS, Linux e Android.',
      },
      {
        question: 'Como baixo The Freak Circus com segurança?',
        answer:
          'Use apenas a página oficial do itch.io. O desenvolvedor pediu que o jogo não fosse republicado, então qualquer outro site que ofereça a build completa está sem licença.',
      },
      {
        question: 'Como salvo The Freak Circus?',
        answer:
          'É um lançamento em Ren\'Py, então usa a interface padrão de save e load do motor, com save rápido e rollback.',
      },
      {
        question: 'Posso continuar do Day 2 sem repetir o Day 1?',
        answer: 'Sim. O menu inclui um botão do Day 2 com uma introdução curta.',
      },
      {
        question: 'Quantos finais existem?',
        answer:
          'Um é jogável agora — o final ruim "Missing". Mais quatro estão planejados: Pierrot, Harlequin, a Protagonista e "All together". Nenhum total foi anunciado.',
      },
      {
        question: 'Como eu consigo o final do Harlequin?',
        answer:
          'Você ainda não consegue — está planejado e não implementado. Qualquer lista de gatilhos passo a passo publicada descreveria uma build que não existe publicamente.',
      },
      {
        question: 'Qual é a altura de Pierrot?',
        answer:
          '198 cm, cerca de 6 ft 5.95 in, na tabela de alturas publicada pelo desenvolvedor.',
      },
      {
        question: 'Qual é o personagem mais velho?',
        answer:
          'Ticket Taker, na ordem oficial de idade: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: 'Por que Pierrot não pode falar?',
        answer:
          'A sinopse oficial o descreve como "o yandere silencioso" — yandere é o termo do fandom para um personagem obcecado e ciumento que age de forma violentamente possessiva —, e o silêncio dele é uma caracterização deliberada, e não um dublador faltando. Detalhes sobre o motivo dentro da ficção vêm de material da história, e não de uma declaração do desenvolvedor.',
      },
      {
        question: 'Quando sai o Day 3?',
        answer:
          'Não há data anunciada. Está em desenvolvimento ativo, com o trabalho de beta descrito em cerca de 30–40% da atualização.',
      },
      {
        question: 'Existe servidor oficial no Discord?',
        answer:
          'Não. O desenvolvedor confirmou que não existe servidor oficial, e toda comunidade de servidores deve ser considerada mantida por fãs.',
      },
      {
        question: 'Posso fazer fan art dos personagens?',
        answer:
          'Sim. Fan art faz parte normalmente do fandom. Este site seleciona artes da comunidade com permissão e atribuição aos autores, e não hospeda arquivos do jogo nem repacota o jogo.',
      },
    ],
    related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
  },
};
