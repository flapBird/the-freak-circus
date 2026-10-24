import type { BlogPost } from './blog-posts';

// Brazilian Portuguese edition of the blog posts.
//
// This mirrors POSTS_EN in blog-posts.ts: same slugs, same order, same dates,
// same images, same HTML structure (heading/list counts and order). The English
// version is the source of truth; this file only re-expresses it in pt-BR
// prose. Every hedge in the English text survives the translation — planned
// stays planned, unverified stays unverified.

export const POSTS_PT: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'Passo a passo do Dia 2 de The Freak Circus: tendas, saves e o final ruim',
    description: 'Um guia da versão 0.2 com marcação de spoilers sobre a abertura do cativeiro, as tendas do circo, as apresentações dos personagens, os pontos de save e o jeito mais seguro de explorar o Dia 2 sem confundir variações de cena com rotas concluídas.',
    date: '2026-09-02',
    tags: ['Dia 2', 'Passo a passo', 'Versão 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'O elenco de The Freak Circus reunido em volta da protagonista',
    readingTime: '10 min de leitura',
    content: `
      <p class="article-lede">O Dia 2 é onde <em>The Freak Circus</em> deixa de parecer uma apresentação inquieta e começa a fechar a mão em volta da protagonista. A pergunta útil não é “qual rota concluída devo travar?” — não existe um final concluído de Pierrot ou de Harlequin na versão 0.2 —, mas “onde devo salvar para ver as variações disponíveis sem rejogar o protótipo inteiro?”</p>
      <div class="walkthrough-note"><strong>Limite deste guia</strong><p>Este artigo cobre o protótipo público da versão 0.2 e contém spoilers da história. A listagem oficial confirma cinco apresentações de personagens e um final ruim. Ela não confirma várias rotas concluídas, um sistema de colecionáveis ou um menu de cenas ocultas desbloqueáveis.</p></div>

      <h2>Faça estes saves antes de a pressão começar</h2>
      <p>O Dia 2 é curto o bastante para rejogar, mas a abertura é longa o bastante para repeti-la só para testar uma resposta se tornar cansativo. Mantenha slots separados em vez de sobrescrever o save mais recente:</p>
      <ol class="walkthrough-steps">
        <li><strong>DIA 2 — INÍCIO:</strong> o primeiro momento em que o novo dia dá controle a você.</li>
        <li><strong>SALA DO CATIVEIRO:</strong> antes de se comprometer com uma resposta tensa com Pierrot ou Harlequin.</li>
        <li><strong>RETORNO AO CIRCO:</strong> antes de entrar em uma tenda de atração.</li>
        <li><strong>RAMIFICAÇÃO DA TENDA:</strong> um slot novo para cada tenda ou apresentação de personagem.</li>
        <li><strong>CENA FINAL:</strong> antes de qualquer escolha que soe definitiva, desafiadora ou deliberadamente perigosa.</li>
      </ol>
      <p>Isso é mais confiável do que um único save rolante. Se uma cena termina antes do esperado — ou chega ao final ruim —, você ainda tem um ponto limpo a poucos minutos de distância.</p>

      <h2>A abertura na sala do cativeiro: leia o contraste, não uma barra de afeto</h2>
      <p>O dia abre com a protagonista contida em um quarto desconhecido. Pierrot apresenta suas ações como proteção; a chegada de Harlequin transforma essa alegação em um confronto. A cena importa porque estabelece o quão diferente os dois rivais exercem controle, e não porque pede que você selecione uma rota romântica permanente.</p>
      <p>Na primeira jogatina, responda do jeito que parecer natural e siga em frente. Em um replay, volte ao save <strong>SALA DO CATIVEIRO</strong> e mude uma resposta por vez. Assim fica óbvio se você encontrou uma variação de cena genuína ou apenas uma fala diferente.</p>
      <div class="walkthrough-tip"><strong>Não interprete demais os adereços.</strong><p>A máscara e o ingresso vermelho são objetos significativos da história, mas a versão 0.2 não estabelece um inventário convencional em que coletá-los desbloqueia finais futuros. As cores dos ingressos têm, sim, significado confirmado neste jogo — vermelho e verde marcam uma escolha que a protagonista faz, e o rosa fica abaixo do elenco principal —, mas isso é um sinal de ramificação, e não uma lista de colecionáveis. Trate a máscara como um objeto de cena, a menos que o próprio jogo apresente uma interação posterior.</p></div>

      <h2>De volta ao circo: como explorar as tendas</h2>
      <p>A seção do circo amplia o elenco por meio de espaços temáticos. A melhor estratégia é simples: salve antes de entrar, termine a cena sem pular e depois use esse save para a próxima variação. Não presuma que uma apresentação de personagem é uma rota completa.</p>

      <h3>Tenda azul — Ticket Taker e os espelhos</h3>
      <p>A sequência dos espelhos é construída para fazer a informação visual parecer não confiável. Observe com atenção qual reflexo está falando e como o Ticket Taker (Bilheteiro em português) enquadra o que você vê. Não é preciso resolver cada imagem como um quebra-cabeça na primeira visita; o objetivo prático é terminar a apresentação e preservar um save para uma segunda leitura mais devagar.</p>

      <h3>Tenda ciano — o Doctor</h3>
      <p>A apresentação do Doctor é a que mais se apoia em contenção, exame e imagética de horror médico. Se esses temas forem desconfortáveis, este é o momento de usar os controles de pular com cautela ou fazer uma pausa. Da perspectiva de rota, obedecer ou resistir pode mudar a textura da troca, mas nenhum dos dois deve ser anunciado como uma rota ou um final concluído do Doctor.</p>

      <h3>Espaço de apresentação roxo ou preto — Jester</h3>
      <p>A apresentação do Jester carrega parte do lore mais denso do Dia 2. Deixe o diálogo avançar normalmente em vez de pular rápido. Mais importante: trate a apresentação como uma história contada <em>dentro</em> do jogo: ela revela como o circo fala do próprio passado, mas não é automaticamente um relato neutro e completo dos motivos de cada personagem.</p>

      <h2>Como proteger sua partida do final ruim</h2>
      <p>A descrição oficial da versão lista um final ruim. Um guia cauteloso não deveria inventar uma “resposta correta” universal sem um teste de escolha reproduzível, então use o próprio jogo como sinal:</p>
      <ul>
        <li>Salve antes de respostas abertamente perigosas ou com som final.</li>
        <li>Se a história corta para um final ou volta ao menu, carregue o save de ramificação mais recente.</li>
        <li>Mude primeiro apenas a última resposta significativa; não reinicie o Dia 2 imediatamente.</li>
        <li>Guarde o save do final ruim se você quiser um registro completo do protótipo atual.</li>
      </ul>
      <p>O mais importante: chegar ao final ruim não significa que o save está arruinado. Significa que você encontrou um dos poucos desfechos que a build atual diz explicitamente estarem disponíveis.</p>

      <h2>Um roteiro limpo em duas passadas</h2>
      <div class="walkthrough-route"><div><strong>Primeira passada — história</strong><p>Jogue continuamente, escolha naturalmente e salve apenas nos cinco pontos de verificação acima. Evite guias durante as cenas em si.</p></div><div><strong>Segunda passada — cobertura</strong><p>Volte aos saves de tenda e de cena final. Inverta uma resposta importante por vez e anote o que realmente muda.</p></div></div>
      <p>Esse método é menos glamouroso do que um gráfico gigante de “todos os finais”, mas se encaixa na build que realmente existe. A versão 0.2 é um protótipo pesado em apresentações; não é uma coleção de rotas concluídas.</p>

      <h2>O que conta como terminar o Dia 2?</h2>
      <p>Você está em dia quando chega ao fim da história pública atual, não quando desbloqueia um final romântico definitivo que não existe. Uma partida completa deve deixar você com:</p>
      <ul class="walkthrough-checklist">
        <li>o conflito da sala do cativeiro visto sem pular;</li>
        <li>o save do retorno ao circo preservado;</li>
        <li>as apresentações de Ticket Taker, Doctor e Jester vistas;</li>
        <li>o final ruim registrado ou evitado com segurança;</li>
        <li>um save final limpo pronto para uma atualização oficial futura.</li>
      </ul>
      <p>O Dia 3 continua em desenvolvimento. Guarde esse save final, mas confira as notas de lançamento futuras antes de presumir que as escolhas da versão 0.2 vão mapear sem mudanças para a próxima build pública.</p>

      <h2>Afirmações que este guia deliberadamente não faz</h2>
      <p>Alguns passo a passos descrevem vários finais concluídos, uma galeria de cenas ocultas, pinos colecionáveis com efeitos mecânicos futuros ou rotas totalmente disponíveis para cada personagem apresentado. A página oficial atualmente não confirma nenhuma dessas coisas como recursos concluídos. Para o status verificado, use o <a href="/pt/day-3">rastreador do Dia 3</a> e a <a href="/pt/wiki">Wiki da versão 0.2</a> do site.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'Passo a passo do Dia 1 de The Freak Circus: uma primeira jogatina cuidadosa',
    description: 'Um guia prático da versão 0.2 para conhecer Pierrot, ler a rivalidade inicial, posicionar saves úteis e chegar ao Dia 2 sem correr atrás de rotas que ainda não estão concluídas.',
    date: '2026-09-02',
    tags: ['Dia 1', 'Passo a passo', 'Novos jogadores'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Uma cena do protótipo atual de The Freak Circus',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">O Dia 1 funciona melhor quando você deixa que ele seja desconfortável. Ele apresenta Pierrot em uma caminhada comum ao trabalho e, aos poucos, transforma um pequeno encontro no começo de uma rivalidade perigosa. Você não precisa de uma folha de respostas perfeita para chegar ao Dia 2; precisa de alguns saves bem colocados e de uma ideia clara do que o protótipo atual pode — e não pode — resolver.</p>
      <div class="walkthrough-note"><strong>Limite deste guia</strong><p>Este é um guia com marcação de spoilers para a versão pública 0.2. Ele explica progressão e estratégia de replay sem fingir que Pierrot, Harlequin ou o elenco mais amplo já têm finais concluídos.</p></div>
      <div class="walkthrough-note"><strong>Sobre salvar</strong><p>O desenvolvedor não publicou locais de save, quantidade de slots, comportamento de autosave nem qualquer procedimento de transferência do navegador para o desktop para este jogo. Os nomes de save abaixo são rótulos que você dá aos seus próprios slots com a interface padrão de salvar e carregar do motor, e não nomes de arquivo oficiais.</p></div>

      <h2>Antes de começar: monte uma partida que você consiga revisitar</h2>
      <p>Os avisos oficiais de conteúdo incluem sangue, morte, abuso, sequestro, uso de drogas sem consentimento, dominação física e contato indesejado. O Dia 1 não mostra todos os avisos na intensidade máxima, mas estabelece o tom. Decida se esses temas servem para você antes de correr atrás de completude.</p>
      <p>Use três slots nomeados desde o começo:</p>
      <ol class="walkthrough-steps">
        <li><strong>DIA 1 — LIMPO:</strong> antes da primeira escolha substantiva.</li>
        <li><strong>PIERROT — RUA:</strong> antes de escolher como responder durante o encontro a caminho do trabalho.</li>
        <li><strong>DIA 1 — FINAL:</strong> antes do último conjunto de cenas que leva a história ao Dia 2.</li>
      </ol>
      <p>Não fique salvando por cima do primeiro slot. Um ponto de verificação limpo é mais útil do que uma captura de tela das escolhas de outra pessoa, porque você pode testar a build atual por conta própria.</p>

      <h2>O encontro na rua com Pierrot</h2>
      <p>A apresentação de Pierrot é a dobradiça emocional do Dia 1. A cena pergunta como a protagonista reage a um estranho silencioso que já está sendo tratado como um excluído. A escrita trabalha mais quando você escolhe uma resposta com a qual consegue se comprometer, em vez de tentar fazer engenharia reversa de uma “pontuação de amor” invisível.</p>
      <p>Na primeira passada, mantenha consistência: se você se aproxima com preocupação, mantenha esse tom pela cena; se está desconfiado, deixe o desconforto permanecer. Na segunda passada, carregue <strong>PIERROT — RUA</strong> e mude apenas a primeira resposta importante. Compare o diálogo e a linguagem corporal em vez de presumir que a ramificação desbloqueou uma rota concluída.</p>
      <div class="walkthrough-tip"><strong>Dica de conclusão</strong><p>Não reinicie porque uma resposta pareceu estranha. O Dia 1 foi feito para continuar pelo desconforto. Ficar alternando saves a cada fala quebra o ritmo e geralmente diz menos do que uma jogatina ininterrupta.</p></div>

      <h2>Quando a rivalidade começa a se ampliar</h2>
      <p>Harlequin não é simplesmente uma alternativa mais leve para Pierrot. A presença dele muda o significado do primeiro encontro ao transformar atenção em competição. Observe como cada artista lida com distância, consentimento e a incerteza da protagonista. Esses contrastes importam mais no Dia 1 do que tentar declarar um vencedor.</p>
      <p>O elenco mais amplo do circo pertence ao arco de apresentações do protótipo. Ver Jester, Doctor ou Ticket Taker não significa que você entrou em uma rota romântica completa. A página oficial apenas diz que cinco apresentações de personagens estão disponíveis; os finais planejados continuam inacabados.</p>

      <h2>Como chegar ao Dia 2</h2>
      <p>O Dia 2 já faz parte da versão 0.2. Não é um download separado e não exige um código de rota secreto. Continue a história depois das cenas finais do Dia 1 e deixe a transição rodar. Se o jogo voltar a um ponto anterior sem esperar:</p>
      <ul>
        <li>confirme que a tela de título mostra a build 0.2 atual;</li>
        <li>carregue <strong>DIA 1 — FINAL</strong> em vez de reiniciar;</li>
        <li>evite pular rapidamente as transições ou as cenas animadas;</li>
        <li>na build de navegador, mantenha a aba aberta enquanto a cena termina de carregar, porque os saves do navegador ficam no armazenamento do navegador.</li>
      </ul>

      <h2>A melhor estratégia de primeira passada é deliberadamente simples</h2>
      <div class="walkthrough-route"><div><strong>Primeira passada</strong><p>Escolha naturalmente, não pule o diálogo e deixe a tensão se acumular. Seu objetivo é entender o elenco, não otimizar uma rota.</p></div><div><strong>Segunda passada</strong><p>Volte ao save da rua e mude uma resposta. Use o save final para qualquer variação do fim do Dia 1 em vez de rejogar desde a tela de título.</p></div></div>

      <h2>Erros comuns no Dia 1</h2>
      <h3>Procurar um “final bom de Pierrot”</h3>
      <p>A versão 0.2 não contém um final concluído de Pierrot. Uma resposta calorosa pode mudar a sensação de uma cena sem transformar o protótipo em uma rota concluída.</p>
      <h3>Presumir que cada fala muda o Dia 2</h3>
      <p>Parte do diálogo existe para estabelecer voz e clima. A menos que duas partidas produzam uma mudança reproduzível, não promova uma fala a trava de rota.</p>
      <h3>Usar apenas um slot de save</h3>
      <p>Este é o jeito mais fácil de transformar um replay curto em uma reinicialização completa. Preserve os pontos de verificação da rua e do fim do Dia 1.</p>
      <h3>Pular as partes desconfortáveis</h3>
      <p>Os sinais de alerta da história fazem parte da caracterização. Se o conteúdo for tolerável para você, ler esses momentos com atenção torna o Dia 2 muito mais fácil de entender. Se não for, parar é uma escolha válida.</p>

      <h2>Lista de verificação de conclusão do Dia 1</h2>
      <ul class="walkthrough-checklist">
        <li>você conheceu Pierrot a caminho do trabalho;</li>
        <li>você preservou um save antes da primeira resposta importante;</li>
        <li>você viu a rivalidade central começar a tomar forma;</li>
        <li>você chegou à transição para o Dia 2;</li>
        <li>você não confundiu uma apresentação com um final concluído.</li>
      </ul>
      <p>Depois de marcar essas caixas, continue com o <a href="/pt/blog/day-2-walkthrough-save-strategy">passo a passo do Dia 2</a>. Para contexto de personagens sem especulação de rota, leia as fichas verificadas de <a href="/pt/characters/pierrot">Pierrot</a> e <a href="/pt/characters/harlequin">Harlequin</a>.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'O que o protótipo atual de The Freak Circus realmente inclui',
    description: 'Um guia claro e com poucos spoilers da versão 0.2: o que dá para jogar agora, o que continua em desenvolvimento e o que novos jogadores devem esperar.',
    date: '2026-08-15',
    tags: ['Versão 0.2', 'Novos jogadores', 'Guia do jogo'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'Arte da capa de The Freak Circus',
    readingTime: '5 min de leitura',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> é melhor aproveitado como um número de abertura bem-acabado do que como uma visual novel terminada e completa em rotas. A build pública atual é a versão 0.2 e ainda é chamada de protótipo.</p>
      <h2>A resposta curta</h2>
      <p>A build disponível apresenta o conflito central e cinco membros do elenco. Ela inclui um final ruim, enquanto o roteiro maior e as conclusões planejadas de Pierrot, Harlequin, protagonista e compartilhadas continuam em desenvolvimento.</p>
      <p>Essa distinção importa. Um personagem aparecer no protótipo não significa automaticamente que ele já tem uma rota romântica completa ou um final definitivo.</p>
      <h2>Como é uma primeira sessão</h2>
      <p>A listagem oficial descreve uma sessão média como tendo aproximadamente meia hora. Isso torna o protótipo fácil de experimentar, mas também significa que uma primeira jogatina foi desenhada para estabelecer tom, relacionamentos e perigo — não para resolver cada fio.</p>
      <ul><li>Espere arte original de personagens e cenários.</li><li>Espere variações de cena significativas e um final ruim disponível.</li><li>Não espere que todos os finais planejados já sejam jogáveis.</li></ul>
      <h2>Conheça o limite de conteúdo antes de jogar</h2>
      <p>Esta é uma história de horror psicológico apenas para adultos. Os avisos incluem sangue, morte, abuso, sequestro, drogagem, dominação física e contato sem consentimento. Leia esses avisos antes de decidir se o jogo é adequado para você.</p>
      <h2>Um jeito melhor de usar os guias de fãs</h2>
      <p>Confira o número da build antes de seguir qualquer conselho de rota, mantenha um save limpo antes das escolhas importantes e trate capturas de tela ou tabelas de escolhas sem uma versão testada como interpretação da comunidade. Um guia útil deveria dizer o que foi observado, em qual build e onde os spoilers começam.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Navegador ou download? Escolhendo o jeito certo de jogar',
    description: 'Compare a build de navegador com os downloads locais de Windows, macOS, Linux e Android e prepare seus arquivos de save antes de trocar de versão.',
    date: '2026-08-14',
    tags: ['Download', 'Navegador', 'Instalação'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Uma cena da build de navegador de The Freak Circus',
    readingTime: '4 min de leitura',
    content: `
      <p class="article-lede">A história é a mesma, mas o melhor jeito de jogar depende de quanta configuração você quer e de se você precisa de uma cópia local portátil.</p>
      <h2>Escolha a build de navegador para o começo mais rápido</h2>
      <p>A versão HTML5 é a opção mais simples para uma primeira olhada: abra o jogo, espere a página carregar e comece sem instalar um pacote. Ela também é útil quando você joga em uma máquina compartilhada e não quer manter arquivos do jogo.</p>
      <p>O armazenamento do navegador pode ser limpo por ferramentas de privacidade ou redefinições do navegador, então não é o melhor lugar para um save que você não pode perder.</p>
      <h2>Escolha um download para uma cópia local permanente</h2>
      <p>Pacotes de Windows, macOS, Linux e Android estão listados para a versão 0.2. Uma build local evita os limites do armazenamento do navegador e costuma ser a opção mais confortável para rejogadas.</p>
      <ul><li>Combine o pacote com o seu sistema operacional.</li><li>Extraia os pacotes de desktop antes de iniciar o jogo.</li><li>Faça backup dos saves antes de substituir uma build mais antiga.</li></ul>
      <h2>Por que a fonte importa</h2>
      <p>Use a página do desenvolvedor no itch.io em vez de um repost ou de um instalador reempacotado. O desenvolvedor identifica essa listagem como a página oficial de distribuição e pede que os jogadores não usem cópias reenviadas.</p>
      <h2>Se algo der errado</h2>
      <p>Primeiro confirme o número da build e a plataforma. Para problemas de navegador, experimente um navegador atual da família Chrome ou Edge e desative a tradução agressiva de página na aba do jogo. Para um pacote de desktop, extraia-o por completo e mantenha o aplicativo junto com os arquivos incluídos.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Esperando o Dia 3 sem cair em rumores de data de lançamento',
    description: 'Uma lista de verificação prática para separar o progresso real de desenvolvimento de contagens regressivas, palpites e afirmações recicladas sobre o próximo capítulo.',
    date: '2026-08-13',
    tags: ['Dia 3', 'Atualizações', 'Checagem de fatos'],
    image: '/images/home/characters.webp',
    imageAlt: 'Arte dos personagens de The Freak Circus',
    readingTime: '5 min de leitura',
    content: `
      <p class="article-lede">O Dia 3 está em desenvolvimento, mas atividade de desenvolvimento não é a mesma coisa que uma data de lançamento confirmada. Manter essas ideias separadas é o jeito mais fácil de evitar páginas de contagem regressiva enganosas e rumores reciclados.</p>
      <h2>O que está realmente estabelecido</h2>
      <p>A página pública do jogo diz que a história continua por mais um dia dentro do jogo e que essa parte ainda está sendo desenvolvida. Ela não publica um dia de lançamento. Até aparecer um anúncio de lançamento datado, qualquer data exata deve ser tratada como especulação.</p>
      <h2>Sinais de progresso são úteis — mas limitados</h2>
      <p>Programação de diálogo, arte nova, mudanças de cenário, testes e prévias de cena mostram que o trabalho anda. Nenhum desses marcos isoladamente diz quando uma build pública estável estará pronta.</p>
      <h2>Faça uma checagem rápida de rumor</h2>
      <ol><li>Procure uma data exata de publicação e um autor identificado.</li><li>Confira se o texto diz “lançado” ou apenas “em desenvolvimento”.</li><li>Separe capturas de trabalho em andamento de uma build para download.</li><li>Rejeite páginas que transformam uma estimativa de fã em contagem regressiva.</li></ol>
      <h2>Use bem o tempo de espera</h2>
      <p>Mantenha seus saves atuais, anote qual build os criou e evite sobrescrever o slot da primeira jogatina. Quando a próxima build chegar, leia as notas de mudança antes de presumir que conselhos antigos de rota ainda valem.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Altura e ordem de idade de Pierrot em The Freak Circus',
    description: 'Pierrot tem 198 cm de altura e é o terceiro de cinco na ordem oficial de idade, do mais velho para o mais novo — o que o desenvolvedor publicou e o que o fandom acrescenta por cima.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Alturas', 'Fatos dos personagens'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Pierrot, o palhaço silencioso no centro de The Freak Circus',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">Pierrot tem 198 cm de altura e, na ordem de idade publicada pelo desenvolvedor, é o terceiro de cinco, do mais velho para o mais novo. Esses dois números vêm do mesmo material oficial do resto da tabela do elenco e, juntos, resolvem a maior parte da discussão que circula online sobre o tamanho e a idade dele — deixando abertos dois vazios que o fandom preenche por conta própria.</p>
      <div class="walkthrough-note"><strong>Em que este artigo se baseia</strong><p>Altura, ordem de idade e ranking de força vêm da tabela publicada pelo desenvolvedor e de respostas de AMA. Nenhuma idade atribuída por fãs, aniversário ou número estimado é tratado como fato aqui. Material que vem da wiki do fandom é rotulado como derivado de fãs, e não como oficial.</p></div>

      <h2>A altura: 198 cm</h2>
      <p>O desenvolvedor publicou uma tabela de alturas junto com a referência de sprites usada ao desenhar o elenco. A entrada de Pierrot diz 198 cm, o que equivale a cerca de 6 ft 5.95 in. Isso o coloca como o segundo mais alto dos cinco personagens apresentados: nove centímetros abaixo do Doctor, com 207 cm, e onze centímetros acima de Harlequin, com 187 cm.</p>
      <p>Como a tabela existia como referência de desenho, e não como um conjunto de números escritos depois dos fatos, é o tipo de medição que se mantém estável. Duas coisas decorrem dela. O elenco apresentado inteiro abrange apenas 24 cm, dos 207 do Doctor aos 183 do Ticket Taker — uma faixa estreita, e uma checagem útil para artes de fãs que mostram um personagem muito acima do outro. E a diferença de onze centímetros entre os dois protagonistas românticos é real, razão pela qual a wiki do fandom a trata como significativa para a encenação de Pierrot e Harlequin um contra o outro.</p>
      <h2>A ordem de idade: terceiro de cinco, do mais velho para o mais novo</h2>
      <p>Uma resposta separada de AMA atendeu a um pedido para ordenar o elenco do mais velho ao mais novo e deu uma sequência fixa:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — primeiro, o mais velho.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — terceiro.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — último, o mais novo.</li>
      </ol>
      <p>Pierrot, portanto, fica no meio da companhia: mais velho que Jester e Harlequin, mais novo que o Ticket Taker e o Doctor. Num elenco construído em torno de uma rivalidade entre as duas pontas dessa lista, ser o terceiro significa que ele é mais velho do que o homem com quem compete e mais novo do que as duas figuras que seguram o circo.</p>
      <h3>O que “terceiro” não diz a você</h3>
      <p>Não dá um número, e não dá uma distância. Uma ordem relativa só diz que um personagem é mais velho que outro; dois personagens podem ser adjacentes na lista e ainda assim estar distantes em anos. Nenhuma idade numérica jamais foi publicada para nenhum dos cinco, o que faz da ordem a única informação de idade que o desenvolvedor lançou. Isso importa porque um número específico é a coisa mais comum que sites de fãs acrescentam a este elenco, e esses números quase nunca têm uma fonte por trás.</p>
      <div class="walkthrough-tip"><strong>Como checar uma afirmação de altura ou idade encontrada em outro lugar</strong><p>Faça três perguntas. A fonte aponta para a tabela do desenvolvedor, uma resposta de AMA ou uma postagem oficial? Ela distingue um número publicado de uma estimativa? E ela diz qual build a informação descreve? Um guia que responde as três pode ser confiável nos detalhes; um que não responde nenhuma é decoração em cima do palpite de outra pessoa.</p></div>

      <h2>Força é outra lista</h2>
      <p>O desenvolvedor também publicou um ranking de força física bruta, e ele não segue a altura. Pierrot é o primeiro dele — à frente de Harlequin e Jester, empatados em segundo, depois o Doctor, e o Ticket Taker por último.</p>
      <p>Pierrot ser ao mesmo tempo o segundo mais alto e o mais forte é uma peça deliberada de caracterização, e não uma coincidência da tabela. A sinopse oficial o chama de “o yandere silencioso” — no fandom, “yandere” designa a obsessão romântica que termina em controle —, e um personagem fisicamente dominante e quase totalmente silencioso é um tipo específico de ameaça: o perigo não é que ele vá se anunciar, mas que ele não precisa disso. A descrição da wiki do fandom — gentil e educado na superfície enquanto persegue a protagonista — se encaixa nesse formato, embora essa caracterização em particular venha dos fãs.</p>

      <h2>O que está confirmado e o que foi acrescentado</h2>
      <ul>
        <li><strong>Confirmado pelo desenvolvedor:</strong> a altura de 198 cm, o terceiro lugar na ordem de idade, o primeiro lugar no ranking de força, a descrição como “o yandere silencioso” e o fato de que um final romântico de Pierrot está planejado.</li>
        <li><strong>Da build atual:</strong> a aparência dele, as cenas dele e o modo como ele reage à protagonista entre as ramificações.</li>
        <li><strong>Derivado do fandom:</strong> a descrição detalhada do traje — máscara branca com fendas verticais pretas, olhos dourados, gorro de bobo vermelho e preto, casaco arlequinal (motley) vermelho —, o motivo dentro da ficção para o silêncio dele e qualquer idade ou aniversário específico atribuído a ele.</li>
      </ul>
      <p>Um pequeno esclarecimento sobre o traje e o silêncio, porque os dois são frequentemente resumidos de forma errada. O relato da wiki do fandom é que uma regra de não falar em público foi criada por Jester, por quem Pierrot tem profundo respeito. Esse detalhe é satisfatório e consistente com o jeito como os dois personagens são escritos, mas vem da wiki, e não do desenvolvedor. O material de primeira mão para na expressão “o yandere silencioso” e trata o silêncio como caracterização, e não como uma trilha de voz faltando.</p>

      <h2>Por que esses números importam afinal</h2>
      <p>Medidas são a parte de uma ficha de elenco mais fácil de checar e a que mais costuma ser inventada, e este jogo teve os dois: uma tabela real publicada e muitos números que não vêm dela. Saber que Pierrot tem 198 cm e é o terceiro mais velho significa que você percebe de relance quando uma wiki troca discretamente por outra cifra — e, mais útil ainda, você lê as cenas dele com um quadro preciso. Um personagem de 198 cm que também é o mais forte dos cinco se comporta diferente em tela do que um homem de estatura média, e a encenação do jogo depende de isso ser verdade.</p>
      <p>Para o quadro completo do elenco, o <a href="/pt/characters/heights">guia de alturas e rankings</a> lista os cinco personagens, e a <a href="/pt/characters/pierrot">ficha do Pierrot</a> cobre o status da rota dele e o material do fandom em mais detalhe.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Altura e ordem de idade de Harlequin em The Freak Circus',
    description: 'Harlequin tem 187 cm de altura e é o mais novo dos cinco personagens apresentados — os números publicados pelo desenvolvedor e as afirmações de fãs que eles contradizem.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Alturas', 'Fatos dos personagens'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Harlequin, o rival teatral de Pierrot em The Freak Circus',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">Harlequin tem 187 cm de altura, é o mais baixo dos cinco personagens apresentados e o mais novo dos cinco na ordem de idade publicada pelo desenvolvedor. Os dois fatos são documentados. A idade específica que circula para ele online normalmente não é — e, na maioria dos casos, contradiz a única declaração de idade que o desenvolvedor realmente fez.</p>
      <div class="walkthrough-note"><strong>Escopo e fontes</strong><p>Altura, ordem de idade e ranking de força são tirados da tabela publicada pelo desenvolvedor e de respostas de AMA. Descrição de traje, resumos de personalidade e qualquer idade ou aniversário específico vêm da wiki do fandom e estão marcados como derivados de fãs. Este artigo não trata uma estimativa dentro da ficção como medição.</p></div>

      <h2>A altura: 187 cm</h2>
      <p>A entrada de Harlequin na tabela de alturas do desenvolvedor diz 187 cm, aproximadamente 6 ft 1.62 in. Isso o torna o mais baixo dos cinco personagens apresentados: 20 cm abaixo do Doctor, com 207 cm, 11 cm abaixo de Pierrot, 5 cm abaixo de Jester e 4 cm acima do Ticket Taker.</p>
      <p>A parte interessante desse número é com o que ele anda junto. Harlequin divide o segundo lugar no ranking de força do desenvolvedor com Jester, atrás de Pierrot e à frente do Doctor e do Ticket Taker. A wiki do fandom lê essa combinação — mais novo e mais baixo, mas empatado como segundo mais forte — como a razão de Harlequin ser escrito como rápido e físico em vez de pesado. Essa leitura é interpretação, mas é interpretação construída sobre dois números publicados, e não sobre um palpite.</p>
      <h2>A ordem de idade: último de cinco</h2>
      <p>A ordem de idade do desenvolvedor, do mais velho para o mais novo, é Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin é o quinto — o mais novo do elenco apresentado e o mais novo dos dois protagonistas românticos por duas posições.</p>
      <p>Esse é um fato genuinamente documentado e um dos mais distorcidos online. Grande parte do material de fã atribui a Harlequin uma idade numérica específica, e vários desses números não podem se reconciliar com uma ordem publicada que o coloca abaixo de um Ticket Taker e de um Doctor muito mais velhos e acima de ninguém. A ordem é a versão confiável, e também a única que existe: nenhuma idade numérica foi publicada para nenhum personagem deste jogo.</p>
      <div class="walkthrough-tip"><strong>Se você quer citar a idade dele, cite a ordem</strong><p>Escreva “o mais novo dos cinco personagens apresentados” em vez de um número. É preciso, tem fonte e sobrevive à próxima atualização. Números atribuídos a este elenco por sites de fãs têm o hábito de ser contraditos por respostas de AMA posteriores — exatamente por isso o desenvolvedor publica uma ordem, e não um número.</p></div>

      <h2>A diferença de onze centímetros</h2>
      <p>Harlequin é 11 cm mais baixo que Pierrot, e essa diferença é grande o bastante para ser lida em tela sem exagero. A wiki do fandom trata a diferença como significativa para o modo como os dois protagonistas são encenados um contra o outro — o silencioso preenchendo o quadro, o teatral se movendo ao redor dele. Se isso foi intenção de design ou consequência da referência de sprites é algo que o desenvolvedor não declarou, então fica na coluna do fandom.</p>
      <p>O que está confirmado é mais simples: a tabela foi publicada pelo desenvolvedor como referência usada ao desenhar os sprites, razão pela qual os números são tratados como canônicos em vez de lidos sobre a arte. Se uma arte de fã desenhar Harlequin mais alto que Pierrot, a arte é estilizada; as cifras oficiais continuam sendo 187 e 198.</p>

      <h2>O que o material oficial diz sobre ele</h2>
      <p>Além das tabelas, o desenvolvedor disse várias coisas sobre Harlequin diretamente. A sinopse oficial o chama de “rival sedutor” de Pierrot e descreve o jogo como conduzido por um ou pelo outro — o enquadramento mais claro possível de uma história com duas rotas românticas e nenhuma outra.</p>
      <p>Uma resposta de AMA merece citação cuidadosa porque é fácil de ler errado. Perguntado sobre as mordidas que Harlequin deixa enquanto flerta, a resposta foi que elas não são propostas de casamento, que a marca não deixa cicatriz e que casamento e cortejo entre monstros funcionam de modo diferente do que a protagonista entenderia. Esse pequeno trocado faz trabalho de verdade: estabelece que o flerte de Harlequin corre na lógica do próprio circo e que o quadro de referência da protagonista não é o quadro de referência das pessoas ao redor dela.</p>
      <p>A wiki do fandom acrescenta que Harlequin se sente seguro perto do Doctor, que o Doctor é a pessoa favorita dele no circo e que ele se dá bem com o Ticket Taker apesar de um choque de gostos. Ela também registra um vínculo implícito com a morte de Columbina — que Harlequin a matou para “salvá-la” —, o que a própria wiki enquadra como insinuação, e não como declaração. O contorno geral da história do circo está confirmado em respostas de AMA; essa leitura específica do papel de Harlequin nela não é de primeira mão.</p>

      <h2>Status da rota: planejada, não jogável</h2>
      <p>Um final romântico de Harlequin é uma das quatro conclusões que o desenvolvedor nomeou, ao lado da de Pierrot, da da Protagonista e do final combinado “All together”. Nenhuma das quatro está implementada. A build atual contém exatamente um final — o final ruim «Missing» no Dia 1 —, então não há condições de gatilho para publicar nem um passo a passo honesto para escrever.</p>
      <ul>
        <li><strong>Confirmado:</strong> a altura dele, o último lugar na ordem de idade, o empate em segundo em força, a descrição como “rival sedutor” de Pierrot, o esclarecimento de que as mordidas de flerte dele não são propostas e o fato de que um final romântico de Harlequin está planejado.</li>
        <li><strong>Da build atual:</strong> a aparência dele, as cenas dele e o fato de que algumas aparições dele variam conforme a ramificação da história, o que é confirmado por uma nota oficial de bug.</li>
        <li><strong>Derivado do fandom:</strong> a descrição da máscara — máscara branca com um losango verde e um triângulo verde, olhos verde-veneno, cabelo preto ondulado com uma mecha em forma de coração —, a história pessoal dele e os detalhes do relacionamento dele com Columbina.</li>
      </ul>

      <h2>Juntando os números</h2>
      <p>As medidas oficiais de Harlequin descrevem um personagem específico: o mais novo, o mais baixo e empatado como segundo mais forte de uma companhia de cinco, que compete por atenção com o segundo mais alto e mais forte membro dessa mesma companhia. Ele não é fisicamente dominante e não é inexperiente — é rápido, teatral e atua de uma posição em que a rivalidade é genuinamente acirrada. Isso é bem mais útil do que uma idade inventada, e está totalmente documentado.</p>
      <p>Para o elenco inteiro de uma vez, veja o <a href="/pt/characters/heights">guia de alturas e rankings</a>; para o status da rota e dos relacionamentos dele, veja a <a href="/pt/characters/harlequin">ficha do Harlequin</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'Finais de The Freak Circus: o que existe e o que não existe',
    description: 'Uma lista de status completa dos finais de The Freak Circus — um final ruim implementado, quatro conclusões planejadas e as rotas que não existem.',
    date: '2026-09-28',
    tags: ['Finais', 'Rotas', 'Versão 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'O elenco de The Freak Circus reunido ao redor da protagonista',
    readingTime: '9 min de leitura',
    content: `
      <p class="article-lede">The Freak Circus tem um final jogável hoje e mais quatro que o desenvolvedor nomeou, mas ainda não escreveu em uma build. Quase todo gráfico de “todos os finais” da internet colapsa essas duas categorias, e é por isso que a mesma pergunta recebe quatro respostas diferentes. Aqui está a lista, com o status de cada item declarado com clareza.</p>
      <div class="walkthrough-note"><strong>Escopo desta lista</strong><p>Isto cobre o protótipo público da versão 0.2 e as próprias declarações publicadas do desenvolvedor sobre o trabalho planejado. Contém spoilers da história para o único final que existe. Nenhuma conclusão teorizada ou nomeada por fãs é listada como final, porque nada disso existe como final até o desenvolvedor lançá-lo.</p></div>

      <h2>A versão curta</h2>
      <ul>
        <li><strong>Jogável agora: 1.</strong> O final «Missing» — um final ruim no Dia 1.</li>
        <li><strong>Anunciado como planejado: 4.</strong> Pierrot (romance), Harlequin (romance), Protagonista (sem romance) e “All together” (poli).</li>
        <li><strong>Opções de rota confirmadas: 4.</strong> Pierrot, Harlequin, os dois ou nenhum.</li>
        <li><strong>Rotas que não existem: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Número oficial total de finais: nenhum publicado.</strong> O desenvolvedor disse que vários finais estão planejados, mas não pode dar uma contagem.</li>
      </ul>

      <h2>O único final que existe</h2>
      <p>A versão 0.2 contém um único final, e ele é ruim. Ele é alcançado no Dia 1, e a condição é deliberadamente simples: se a protagonista não faz nada enquanto Pierrot é zombado por um homem diante de uma multidão, a protagonista recebe um ingresso rosa de uma figura desconhecida, é levada à tenda rosa e tem a entrada negada por cada membro do circo. O jogo afirma com clareza que a protagonista não conseguiu chamar a atenção de Pierrot e teve um fim trágico.</p>
      <p>Esse é um final real com consequências reais, não um espaço reservado — e é todo o conteúdo da categoria de finais na build atual. Ele é também, estruturalmente, o argumento do jogo em miniatura: uma protagonista que não se envolve com o conflito central é silenciosamente removida dele.</p>
      <div class="walkthrough-tip"><strong>Registre-o em vez de evitá-lo</strong><p>O final «Missing» é o único desfecho que a build oferece oficialmente, então alcançá-lo completa o protótipo atual em vez de arruiná-lo. Se um guia manda você carregar o save e nunca vê-lo, ele trata o final como algo a proteger, e não como algo que existe.</p></div>

      <h2>Os quatro finais planejados</h2>
      <p>O desenvolvedor lista quatro conclusões na página oficial e no FAQ oficial. Duas são finais românticos, um é explicitamente sem romance e um é um final poli.</p>
      <ul>
        <li><strong>Final de Pierrot (romance)</strong> — a protagonista termina com Pierrot. Listado como trabalho planejado e descrito repetidamente como ainda em desenvolvimento.</li>
        <li><strong>Final de Harlequin (romance)</strong> — a protagonista termina com Harlequin. O roteiro dele não está pronto.</li>
        <li><strong>Final da Protagonista (sem romance)</strong> — a protagonista termina a história sem romance. O desenvolvedor confirmou que essa rota existe como conceito e que amizades ainda podem ser escolhidas junto dela.</li>
        <li><strong>“All together” (poli)</strong> — a protagonista se apaixona por Pierrot e Harlequin ao mesmo tempo. Uma conclusão listada à parte, não uma variante de nenhuma das rotas românticas.</li>
      </ul>
      <p>É importante não converter esta lista em um número. O desenvolvedor foi perguntado diretamente quantos finais o jogo completo terá e disse que vários estão planejados, mas nenhuma cifra pode ser dada, porque o roteiro ainda está em andamento. Uma página que afirma “The Freak Circus tem cinco finais” pegou quatro conclusões planejadas nomeadas mais uma implementada e produziu um total que o desenvolvedor nunca declarou.</p>

      <h2>Com quais personagens dá para fazer rota</h2>
      <p>A resposta oficial é restrita: Pierrot, Harlequin, os dois ou nenhum. A rota da Protagonista é a opção “nenhum” — confirmada como sem romance, embora ainda permita escolher fazer amizade com o elenco.</p>
      <p>Não existe rota para Jester, Ticket Taker ou Doctor. O desenvolvedor disse que, se mais rotas forem adicionadas depois, o mais provável é que cheguem como conteúdo extra ou DLC, e que isso não está decidido. Transformar os personagens restantes em opções românticas é descrito como possibilidade, e não como compromisso — uma distinção que importa, porque guias de fãs frequentemente descrevem essas rotas no presente, como se estivessem apenas escondidas.</p>
      <p>Duas afirmações que circulam bastante não correspondem a nada que o desenvolvedor tenha descrito: que a rota do Jester “desbloqueia no Dia 2” e que o Doctor tem um final “Clean Hands”. A atualização do Dia 2 adicionou personagens, sprites animados, um menu redesenhado e uma versão Android — não novas rotas.</p>

      <h2>Por que os guias discordam sobre a contagem</h2>
      <p>Sites diferentes respondem a perguntas diferentes. Uns contam só o que é jogável, uns contam só o que o desenvolvedor nomeou e uns contam uma mistura de conclusões planejadas e teorias de fã. Ordenar qualquer afirmação em três blocos — implementado, planejado ou não verificado — resolve a divergência mais rápido do que discutir o número.</p>
      <p>Duas ressalvas valem para a lista de planejados. O roteiro ainda está sendo escrito, então o conjunto de conclusões pode mudar antes de qualquer uma ser lançada. E o Dia 3 é onde novas conclusões estão sendo escritas agora, o que torna a lista atual um retrato de um plano em andamento, e não um catálogo pronto.</p>

      <h2>O que isso significa para jogar</h2>
      <p>Trate o protótipo como os dois primeiros dias de uma história de três dias. O que está disponível é um arco de abertura que estabelece o elenco, a rivalidade e um final de fracasso. A estrutura de rotas existe na ramificação; as conclusões ainda não existem na build. Jogar a versão atual é um jeito de ver como a ramificação funciona, não um jeito de completar o jogo.</p>
      <p>Para o detalhamento completo com fontes, veja o <a href="/pt/endings">guia de finais e rotas</a>; para o que ainda está sendo escrito, veja o <a href="/pt/day-3">rastreador do Dia 3</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'Os cinco personagens de The Freak Circus',
    description: 'Um panorama de página única dos cinco personagens apresentados — Pierrot, Harlequin, Jester, Doctor e Ticket Taker — com alturas, rankings e status de rota.',
    date: '2026-10-01',
    tags: ['Personagens', 'Panorama geral', 'Versão 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Jester, a figura de autoridade de The Freak Circus',
    readingTime: '10 min de leitura',
    content: `
      <p class="article-lede">A versão 0.2 apresenta cinco personagens, e todos os cinco têm cenas próprias de apresentação na build pública. Esse número costuma ser a origem de um segundo pressuposto errado — o de que cinco personagens apresentados significam cinco rotas disponíveis. Não significam. Dois deles têm rotas românticas planejadas, três não têm nenhuma, e nenhum dos finais planejados é jogável ainda.</p>
      <div class="walkthrough-note"><strong>Como ler este panorama</strong><p>Alturas, posições na ordem de idade e rankings de força vêm da tabela publicada pelo desenvolvedor. Status de rota e de final seguem as próprias declarações do desenvolvedor. Detalhes de personalidade e relacionamento atribuídos à wiki do fandom são rotulados como tal, porque a maior parte do detalhe interessante sobre este elenco vem de material da história, e não de postagens do desenvolvedor.</p></div>

      <h2>O elenco de relance</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, terceiro mais velho, o mais forte. A obsessão silenciosa no centro da história e o mais alto dos dois protagonistas românticos.</li>
        <li><strong>Harlequin</strong> — 187 cm, o mais novo, empatado em segundo em força. O “rival sedutor” de Pierrot e o mais baixo dos dois protagonistas românticos.</li>
        <li><strong>Jester</strong> — 192 cm, quarto mais velho, empatado em segundo em força. A figura de autoridade que faz o circo parecer uma instituição. Sem rota.</li>
        <li><strong>Doctor</strong> — 207 cm, segundo mais velho, terceiro mais forte. O mais alto dos cinco e uma das presenças mais clínicas do elenco. Sem rota.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, o mais velho, o mais fraco. O guardião do limiar e o personagem mais ligado à ramificação. Sem rota.</li>
      </ul>
      <p>Três fatos valem para os cinco de uma vez. A tabela de alturas foi publicada pelo desenvolvedor como referência usada ao desenhar os sprites, razão pela qual os números são canônicos. A ordem de idade é apenas relativa — não existe idade numérica para ninguém. E o ranking de força foi publicado como um adendo a uma pergunta de fã, então soa como caracterização, e não como uma tela de status.</p>

      <h2>Pierrot</h2>
      <p>O personagem em torno do qual o jogo é construído. A sinopse oficial o chama de “o yandere silencioso” — descrição do próprio desenvolvedor, e a razão de cada gesto dele carregar peso em um meio que funciona a diálogo. A wiki do fandom o caracteriza como gentil e educado na superfície enquanto persegue a protagonista, e como protetor tanto da protagonista quanto de Columbina; ela também registra uma resposta do desenvolvedor de que Pierrot nunca abandonaria a protagonista, enfaticamente. Um final romântico de Pierrot está planejado e em desenvolvimento.</p>
      <h2>Harlequin</h2>
      <p>Onde Pierrot funciona por constância, Harlequin funciona por performance. A sinopse oficial o chama de “rival sedutor” de Pierrot e enquadra o jogo como conduzido por um ou pelo outro. A wiki do fandom o descreve como despreocupado, sádico, provocador e secretamente ciumento — e nota que ele fica desconfortável com afeto, o que reenquadra a rivalidade como algo que ele quer tanto quanto Pierrot. O final romântico dele está planejado e não implementado.</p>
      <h2>Jester</h2>
      <p>O personagem mais frequentemente descrito de forma errada online, geralmente ganhando uma rota romântica que ele não tem. Ele funciona como a figura de autoridade do circo: a wiki do fandom o chama de líder e antagonista principal, calmo e centrado em vez de volátil, e o fandom também o descreve como controlando os “Fools” e chamando humanos de vira-latas. Esses detalhes são interpretação das cenas dele, e não declarações do desenvolvedor, mas a autoridade dele sobre os outros personagens é consistente na build. Não existe rota do Jester nem final do Jester.</p>
      <h2>Doctor</h2>
      <p>O mais alto dos cinco, com 207 cm, e apenas o terceiro mais forte, o que a wiki do fandom explica por uma preferência por esperteza em vez de força bruta. A apresentação dele é a que mais se apoia em contenção, exame e imagética de horror médico, e a compostura dele é descrita como quebrando visivelmente em um registro emocional específico. Ele não tem rota nem final, e o final “Clean Hands” atribuído a ele por algumas páginas de fãs antigas não tem apoio em nenhuma fonte de primeira mão.</p>
      <h2>Ticket Taker</h2>
      <p>O mais velho, o mais baixo e o último no ranking de força — e ainda assim um dos personagens melhor documentados no material oficial, porque o sistema de ingressos é uma das poucas mecânicas confirmadas do jogo. O desenvolvedor confirmou oito tipos de ingresso, com o rosa abaixo do elenco principal e o vermelho e o verde sinalizando uma escolha que a protagonista faz. Ele não tem rota, e alguns guias de fãs antigos descrevem uma rota romântica do Ticket Taker que desbloqueia por persistência e diálogo cuidadoso; tal rota não existe na build pública.</p>

      <h2>Com quem realmente dá para fazer rota</h2>
      <p>As opções de rota confirmadas são Pierrot, Harlequin, os dois ou nenhum. A opção “nenhum” corresponde ao final da Protagonista, que não envolve romance, mas ainda permite amizades com o elenco. Jester, Ticket Taker e Doctor não têm rotas; o desenvolvedor descreveu torná-los opções românticas como possibilidade, e não compromisso, e sugeriu que qualquer adição dessas chegaria mais provavelmente como conteúdo extra ou DLC.</p>
      <div class="walkthrough-tip"><strong>Como usar uma ficha de personagem</strong><p>Leia primeiro a seção de confirmados e depois a de fandom. Os itens confirmados continuarão verdadeiros depois da próxima atualização; o material de fandom é interpretação da build atual e pode ser revisto quando mais cenas chegarem. Fichas que misturam os dois sem rotular são aquelas com que vale ter cuidado.</p></div>

      <h2>O que falta no elenco</h2>
      <p>Columbina é uma ex-integrante do circo cuja morte molda o passado dos dois protagonistas, mas ela não é um dos cinco personagens apresentados e não aparece na tabela de alturas publicada. O design dela ainda está em produção e o desenvolvedor retém detalhes deliberadamente. Quem escreve sobre este elenco deve tratá-la ao mesmo tempo como parte real da história do jogo e como personagem inacabado.</p>
      <p>Para as fichas completas, veja as páginas de <a href="/pt/characters/pierrot">Pierrot</a>, <a href="/pt/characters/harlequin">Harlequin</a>, <a href="/pt/characters/jester">Jester</a>, <a href="/pt/characters/the-doctor">Doctor</a> e <a href="/pt/characters/ticket-taker">Ticket Taker</a>, além do <a href="/pt/characters/heights">guia de alturas e rankings</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'O sistema de ingressos de The Freak Circus explicado',
    description: 'O desenvolvedor confirmou oito tipos de ingresso em The Freak Circus, com rosa, vermelho e verde carregando significados específicos para o modo como a história se ramifica.',
    date: '2026-10-05',
    tags: ['Ingressos', 'Mecânicas', 'Ramificações'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Ticket Taker, o personagem que controla o sistema de ingressos do jogo',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">Ingressos são um dos poucos sistemas de The Freak Circus que o desenvolvedor explicou diretamente, e a explicação cobre mais terreno do que a maioria dos guias de fãs admite. A contagem confirmada é de oito tipos de ingresso. O rosa fica abaixo do elenco principal, o vermelho e o verde marcam uma escolha que a protagonista faz, e a combinação de rosa e vermelho significa que o Ticket Taker toma a opção vermelha automaticamente.</p>
      <div class="walkthrough-note"><strong>O que está documentado e o que não está</strong><p>O número de tipos de ingresso e o significado de rosa, vermelho e verde vêm do desenvolvedor. A lista completa dos oito — os nomes e as cores dos tipos restantes — não foi publicada, então este artigo não arrisca palpite sobre eles. A identificação da figura do café que entrega um ingresso rosa como o Ticket Taker disfarçado é derivada de fãs e está marcada como tal.</p></div>

      <h2>O que o desenvolvedor confirmou</h2>
      <ul>
        <li><strong>Existem oito tipos de ingresso.</strong> É uma contagem, confirmada diretamente.</li>
        <li><strong>O rosa fica abaixo do elenco principal.</strong> É o nível que você recebe quando os artistas não estão perseguindo você.</li>
        <li><strong>Vermelho e verde indicam uma escolha que a protagonista faz.</strong> Essas duas cores marcam uma decisão que pertence ao jogador.</li>
        <li><strong>Rosa e vermelho combinados significam que o Ticket Taker toma a opção vermelha automaticamente.</strong> Nesse caso, a escolha é feita em seu lugar, pelo personagem que administra o sistema inteiro.</li>
      </ul>
      <p>Essa última regra é a mais útil para ler cenas, porque ela diz que o jogo não simplesmente entrega escolhas e deixa você decidir livremente. Algumas decisões são tomadas pelo circo. Uma protagonista que falha em agir não recebe um desfecho neutro; recebe o desfecho do circo.</p>

      <h2>O ingresso rosa e o único final que existe</h2>
      <p>O ingresso rosa aparece na build atual, e é o objeto que inicia o único final implementado do jogo. No Dia 1, se a protagonista não faz nada enquanto Pierrot é zombado por um homem diante de uma multidão, uma figura desconhecida entrega a ela um ingresso rosa. A protagonista é levada à tenda rosa e tem a entrada negada por cada membro do circo, e o jogo afirma que ela não conseguiu chamar a atenção de Pierrot e teve um fim trágico.</p>
      <p>A wiki do fandom identifica aquela figura do café — o homem “Desconhecido” — como o Ticket Taker disfarçado. Essa identificação vem dos fãs, mas ela se conecta diretamente ao único final que a build contém e explica por que o personagem sem rota própria acaba importando mecanicamente.</p>
      <div class="walkthrough-tip"><strong>Não trate os ingressos como colecionáveis</strong><p>A versão 0.2 não estabelece um inventário convencional em que ingressos são coletados para desbloquear finais futuros. Ingressos aqui marcam posição e escolha, não uma lista de verificação. Se um guia descreve uma estante de ingressos, um contador de ingressos ou um ingresso oculto por final, ele está descrevendo um sistema que a build não tem.</p></div>

      <h2>Por que um personagem secundário segura a ramificação</h2>
      <p>O Ticket Taker não tem rota nem final, é o último de cinco no ranking de força e o mais baixo do elenco. Num jogo cujas opções de rota são Pierrot, Harlequin, os dois ou nenhum, isso normalmente o tornaria uma figura de fundo. O sistema de ingressos é a razão de não ser.</p>
      <p>Pense no que um ingresso faz dentro da ficção: decide a quem você tem permissão de se tornar. Um ingresso rosa coloca você abaixo dos artistas, exatamente a posição em que o final «Missing» coloca a protagonista — do lado de fora, observada, barrada na porta da tenda. Vermelho e verde marcam as escolhas que pertencem ao jogador. E quando rosa e vermelho se combinam, a figura de autoridade toma a escolha do jogador. Um personagem que administra essa regra não é um porteiro; é o mecanismo pelo qual o circo administra a protagonista.</p>
      <p>Isso também se encaixa na caracterização dele. A wiki do fandom o descreve como obediente e dedicado à agenda do circo, maduro e profissional, ocupado com limpeza e organização, e declara o princípio dele sem rodeios: por aqui, ninguém quebra o personagem. O sistema é o personagem. Uma apresentação que funciona a ingressos precisa de alguém para distribuí-los.</p>

      <h2>Como as cores se leem na prática</h2>
      <ul>
        <li><strong>Rosa</strong> — você está no prédio, mas não no espetáculo. É o nível que encerra o único final presente na build.</li>
        <li><strong>Vermelho</strong> — uma decisão atribuída a você, e que o circo pode anular quando emparelhada com o rosa.</li>
        <li><strong>Verde</strong> — uma decisão atribuída a você, sem a anulação.</li>
        <li><strong>Os outros cinco tipos</strong> — não documentados individualmente. A contagem é confirmada; as identidades não são públicas.</li>
      </ul>
      <p>Vale ser honesto sobre quão pouco disso está visível ainda. A versão 0.2 é um protótipo pesado em apresentações com um final, e o sistema de ingressos é descrito como um conjunto de regras, e não demonstrado em profundidade. Um jogador na build atual vai ver majoritariamente o rosa na prática, mais o vermelho e o verde onde uma escolha é oferecida. Ler o sistema como um mapa completo de ramificação vai além do que a build mostra hoje.</p>

      <h2>O que está confirmado versus o que o fandom acrescenta</h2>
      <ul>
        <li><strong>Confirmado pelo desenvolvedor:</strong> existem oito tipos de ingresso; o rosa fica abaixo do elenco principal; vermelho e verde indicam uma escolha da protagonista; rosa mais vermelho significa que o Ticket Taker toma a opção vermelha automaticamente; e o Ticket Taker não tem rota.</li>
        <li><strong>Da build atual:</strong> a protagonista recebe um ingresso rosa durante o Dia 1, e esse ingresso leva diretamente ao final «Missing».</li>
        <li><strong>Derivado do fandom:</strong> o homem “Desconhecido” do café ser o Ticket Taker disfarçado, o epíteto de “manipulador da realidade” e os detalhes da história dele com Columbina.</li>
      </ul>
      <p>Para como isso se conecta aos finais, veja o <a href="/pt/endings">guia de finais</a>; para a ficha do próprio personagem, veja a <a href="/pt/characters/ticket-taker">página do Ticket Taker</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'O que se sabe sobre Columbina em The Freak Circus',
    description: 'Columbina moldou o passado dos dois protagonistas, mas o design dela segue em produção — o que o desenvolvedor confirmou sobre ela e o que o fandom acrescenta.',
    date: '2026-10-07',
    tags: ['Columbina', 'Lore', 'Fatos dos personagens'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina, a ex-integrante do circo no centro do passado dos dois protagonistas',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">Columbina é a personagem que todo mundo reconhece e que ninguém consegue descrever com confiança. A morte dela molda o passado dos dois protagonistas românticos, e o fandom construiu uma leitura substancial dela em torno disso. Ao mesmo tempo, o desenvolvedor disse que o design dela ainda está em produção e que detalhes estão sendo retidos deliberadamente. As duas coisas são verdadeiras ao mesmo tempo, e este artigo é sobre mantê-las separadas.</p>
      <div class="walkthrough-note"><strong>Escopo deste artigo</strong><p>Isto cobre o que o desenvolvedor confirmou, o que a wiki do fandom registra e onde os dois conflitam. Contém spoilers da história sobre o passado compartilhado dos dois protagonistas. Nenhuma afirmação sobre Columbina é apresentada como estabelecida, a menos que o desenvolvedor a tenha declarado.</p></div>

      <h2>O que o desenvolvedor confirmou</h2>
      <ul>
        <li><strong>Ela é uma ex-integrante do circo.</strong> A história dela com a companhia ficou para trás, não está dentro dela.</li>
        <li><strong>A morte dela molda o passado dos dois protagonistas.</strong> Pierrot e Harlequin estão ambos fugindo de algo que envolve Columbina.</li>
        <li><strong>A protagonista não tem conexão com Columbina.</strong> O desenvolvedor confirmou isso diretamente, o que vale declarar com clareza porque teorias de fãs frequentemente colocam a protagonista na história dela.</li>
        <li><strong>“Columbina” significa “pombinha”.</strong> O desenvolvedor confirmou o significado do nome.</li>
        <li><strong>O design dela ainda está em produção, e detalhes estão sendo retidos deliberadamente.</strong> A forma da personagem não está concluída e o desenvolvedor disse isso.</li>
        <li><strong>Não existe altura oficial para ela.</strong> A tabela de alturas publicada cobre os cinco personagens apresentados, e ela não está entre eles.</li>
      </ul>
      <p>Esse último ponto se conecta a um detalhe das atualizações de desenvolvimento. Uma atualização oficial recente menciona uma cena nova e muito curta que se refere a ela e nota que o design dela está planejado para que as silhuetas de flashback permaneçam consistentes. Em outras palavras, a história confirma a presença dela enquanto a personagem ainda está sendo desenhada — uma posição incomum sobre a qual escrever um guia de fãs, e a razão de este artigo ser deliberadamente curto em caracterização.</p>

      <h2>O que a wiki do fandom registra</h2>
      <p>A wiki do fandom é a fonte da maior parte do que se diz sobre Columbina, e duas afirmações dela importam o bastante para nomear.</p>
      <p>A primeira é que ela e Pierrot nunca tiveram um relacionamento romântico. Isso contradiz uma leitura da própria narração de história de amor do circo e vai contra o pressuposto de que a tragédia no centro do passado de Pierrot foi um romance. O desenvolvedor afirmou separadamente que Pierrot seguiu em frente a partir dessa história e cresceu desde então — o que sugere que o passado é fonte de caráter, e não uma ferida fixa.</p>
      <p>A segunda é um vínculo implícito com o papel de Harlequin na morte dela: a wiki registra que Harlequin a matou para “salvá-la” e que Pierrot se recusou a participar. A wiki enquadra isso como insinuação, e não declaração, e deve ser lido do mesmo jeito. O desenvolvedor confirmou o contorno geral da história do circo em respostas de AMA, então a história é real; a leitura específica da parte de Harlequin nela não é confirmada em primeira mão.</p>
      <div class="walkthrough-note"><strong>Marcando material de fandom como material de fandom</strong><p>“A wiki do fandom registra que Harlequin a matou para salvá-la” é uma afirmação diferente de “Harlequin a matou para salvá-la”. A primeira pode ser conferida contra uma fonte. A segunda não, porque nenhuma fonte a declara. Guias que abandonam a atribuição estão tomando uma decisão editorial que a evidência não respalda.</p></div>

      <h2>Por que os detalhes retidos são deliberados</h2>
      <p>Existe uma razão para o desenvolvedor guardar as especificidades dela, e não é um acidente de agenda. Uma personagem cujo design está inacabado não pode ser descrita em termos finais — a altura, o traje e a silhueta ainda estão sendo decididos, e qualquer guia que os declare estaria descrevendo uma intenção, e não um fato. É também por isso que não existe aniversário oficial nem idade numérica oficial para ela, e por isso o “único aniversário confirmado” deste elenco pertence a outra pessoa inteiramente.</p>
      <p>A consequência prática para o leitor é que qualquer página que descreva Columbina em detalhe — a aparência, a altura, o papel exato dela na noite em que morreu — está descrevendo algo que ainda não foi decidido, seja qual for o nível de confiança que ela sugira.</p>

      <h2>Onde ela aparece na build atual</h2>
      <ul>
        <li><strong>Como passado.</strong> As histórias dos dois protagonistas giram em torno dela, e a build atual revela essa história em fragmentos, e não em uma cena.</li>
        <li><strong>Como nome.</strong> Notas oficiais de manutenção registram que uma linha antes incompleta surgiu quando o nome dela era digitado, e uma atualização de desenvolvimento mais recente descreve uma cena curta nova que a menciona.</li>
        <li><strong>Como silhueta.</strong> As notas de desenvolvimento mencionam silhuetas de flashback, o que implica que ela é visível no passado mesmo com o design inacabado.</li>
      </ul>
      <p>O fato de ela ser referenciada na build enquanto ainda está em produção não é uma contradição que o desenvolvedor precise explicar. É o modo como o trabalho está sendo feito, e é a razão de um guia cuidadoso conseguir falar sobre ela sem descrevê-la.</p>

      <div class="walkthrough-tip"><strong>Um jeito prático de acompanhá-la</strong><p>Não espere uma página de wiki resumi-la para você. Assista às cenas curtas que a mencionam, anote as palavras que o próprio jogo usa para ela e trate cada detalhe descritivo que encontrar em outros lugares como uma proposta, até o desenvolvedor mostrar o design concluído. Assim a história fica à frente da especulação, o único jeito de o desenvolvimento desta personagem realmente conseguir surpreender você.</p></div>

      <h2>Como falar sobre Columbina com responsabilidade</h2>
      <ul>
        <li>Atribua afirmações do fandom ao fandom, explicitamente e todas as vezes.</li>
        <li>Não publique uma altura, uma idade, um aniversário ou um traje como fato para ela.</li>
        <li>Não coloque a protagonista na história dela; o desenvolvedor descartou isso.</li>
        <li>Leia o registro de “nunca romântica com Pierrot” como a correção de uma leitura equivocada comum, não como o acréscimo de um novo romance.</li>
        <li>Trate o fio de “matou-a para salvá-la” como uma insinuação que o fandom faz, não como um evento confirmado.</li>
      </ul>
      <p>Ela é o centro emocional de uma história sobre duas pessoas que não conseguem parar de competir, e a razão de ambos serem marcados. Isso é seguro dizer. O resto do quadro valerá a leitura quando o desenvolvedor terminar de desenhá-la e liberar os detalhes — e esta página será atualizada então, em vez de preenchida agora.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Dia 3: status de lançamento e progresso verificado',
    description: 'Um relatório de status verificado sobre o Dia 3 em The Freak Circus — o que as atualizações oficiais de desenvolvimento confirmam, o que o escopo do beta significa e por que não existe data.',
    date: '2026-10-10',
    tags: ['Dia 3', 'Atualizações', 'Checagem de fatos'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'Uma imagem de atualização oficial de desenvolvimento da build do Dia 3',
    readingTime: '9 min de leitura',
    content: `
      <p class="article-lede">O Dia 3 está sendo trabalhado, não está pronto e não tem data de lançamento anunciada. Essa combinação é o resumo honesto inteiro. Todo o resto que circula sobre o Dia 3 — meses, fins de semana, contagens regressivas — é inferência construída sobre atividade de desenvolvimento, e o desenvolvedor pediu explicitamente que afirmações de data vindas de fora não sejam repetidas.</p>
      <div class="walkthrough-note"><strong>Status de relance</strong><p>Build pública hoje: versão 0.2. O Dia 3 está em desenvolvimento ativo. Nenhuma data, nenhum mês e nenhum fim de semana de lançamento foi anunciado. As cifras citadas abaixo são do escopo do beta, e não porcentagens da atualização inteira, e a diferença importa.</p></div>

      <h2>O que as atualizações oficiais confirmam</h2>
      <p>O desenvolvedor publica atualizações semanais de desenvolvimento e séries de respostas de AMA no Tumblr oficial, e as postagens do Dia 3 ali formam um registro confiável de trabalho em andamento. Entradas recentes descrevem:</p>
      <ul>
        <li><strong>Programação contínua com recursos provisórios.</strong> Cenas recém-codificadas ainda usam placeholders e funcionam apenas parcialmente, com transições, escolhas e imagens a serem polidas quando essas decisões de cena forem resolvidas.</li>
        <li><strong>Uma cena nova e muito curta que se refere a Columbina.</strong> O design de personagem dela está planejado para breve, para que as silhuetas de flashback permaneçam consistentes.</li>
        <li><strong>Progresso do beta.</strong> Uma atualização anterior descreveu uma parte do beta do Dia 3 como concluída e colocou o beta em cerca de 30–40% da atualização completa. Uma atualização posterior descreveu estar quase na metade do conteúdo planejado para o teste beta.</li>
        <li><strong>Um roteiro maior que o do Dia 2</strong>, com conteúdo adicional de final ruim e cenas ocultas descritas.</li>
        <li><strong>Trabalho em andamento na cena do café</strong>, com algumas escolhas e situações precisando de revisão adicional, e mais esboços e possivelmente novos cenários ainda necessários.</li>
        <li><strong>Novos sprites escolhidos</strong> para Harlequin, Pierrot e Jester, com revisões e novos sprites do Doctor planejados quando o desenvolvimento chegar à cena dele.</li>
      </ul>
      <p>Nada disso é um cronograma de lançamento. Atualizações de roteiro, arte, sprites e programação confirmam que o desenvolvimento está ativo; elas não significam que o Dia 3 está pronto. O Dia 3 só deve ser tratado como lançado quando uma nova build pública realmente aparecer.</p>
      <div class="walkthrough-tip"><strong>Leia a porcentagem com cuidado</strong><p>“30–40% da atualização completa” e “quase na metade do conteúdo planejado para o beta” descrevem escopos diferentes. A primeira mede a atualização inteira; a segunda mede a fatia menor de conteúdo destinada ao beta. Nenhuma delas é uma porcentagem do jogo pronto, e um beta é, ele próprio, um marco, e não um lançamento.</p></div>

      <h2>Por que nenhuma data está sendo dada</h2>
      <p>A posição do desenvolvedor é consistente no FAQ oficial e nas respostas do Askbox: nenhuma data de lançamento foi anunciada, e afirmações de data vindas de fora das postagens oficiais não devem ser repetidas. É uma instrução deliberada ao fandom, e não um descuido.</p>
      <p>Existe contexto prático para isso. O mesmo período de desenvolvimento incluiu lidar com uploads não autorizados no Google Play, e o desenvolvedor notou que um lançamento em loja oficial receberia um anúncio próprio. Uma data anunciada antes de uma build estar pronta, e antes de a questão da distribuição estar resolvida, seria uma promessa que não poderia ser cumprida.</p>

      <h2>O que o Dia 3 deve mudar</h2>
      <p>O formato planejado do Dia 3 é maior do que o que veio antes, e isso tem consequências diretas para o que a build atual mostra e não mostra.</p>
      <ul>
        <li><strong>Conteúdo novo de final ruim</strong> está descrito nas postagens de desenvolvimento, o que significa que a categoria de finais na build vai crescer além do único final «Missing» que existe hoje.</li>
        <li><strong>Cenas ocultas</strong> também são descritas, o que é diferente de uma rota — uma cena oculta é conteúdo, não conclusão.</li>
        <li><strong>Mais ramificações.</strong> O roteiro é maior que o do Dia 2, e o trabalho de ramificação descrito inclui seções com muitas escolhas que precisam de testes extras.</li>
        <li><strong>A história de Columbina.</strong> A cena curta nova e o trabalho de silhueta de flashback apontam para mais do passado compartilhado vindo à tona.</li>
      </ul>
      <p>O que não foi anunciado é qualquer um dos quatro finais planejados chegando no Dia 3. Os finais planejados continuam planejados.</p>

      <h2>O que está confirmado sobre o lançamento em si</h2>
      <p>Algumas coisas sobre como o Dia 3 será entregue estão resolvidas, ainda que a data não esteja.</p>
      <ul>
        <li><strong>Será uma build pública na página oficial.</strong> O desenvolvedor confirmou a página do itch.io como a única página oficial, então o Dia 3 vai aparecer lá, e não por um inicializador de terceiros ou uma loja separada.</li>
        <li><strong>As plataformas já estão estabelecidas.</strong> A versão 0.2 existe para navegador, Windows, macOS, Linux e Android, então o mesmo conjunto é a expectativa razoável para o Dia 3 — embora nenhuma ordem de lançamento por plataforma tenha sido anunciada.</li>
        <li><strong>Qualquer lançamento em loja oficial seria anunciado à parte.</strong> O desenvolvedor notou que uma versão em loja ganharia um anúncio próprio, em vez de chegar sorrateiramente junto com a atualização do itch.io.</li>
        <li><strong>Uploads não autorizados estão sendo tratados.</strong> Tempo foi gasto lidando com uploads não autorizados no Google Play, o que é um problema de distribuição, e não de desenvolvimento — mas significa que o caminho de um jogador até um lançamento oficial ainda não é totalmente simples.</li>
      </ul>

      <h2>Como conferir o status atual por conta própria</h2>
      <ol class="walkthrough-steps">
        <li><strong>Abra a página oficial do itch.io</strong> e confirme que a build listada ainda é a versão 0.2.</li>
        <li><strong>Leia as entradas do devlog em ordem.</strong> Elas são datadas e são de primeira mão.</li>
        <li><strong>Confira o Tumblr oficial</strong> para a atualização semanal mais recente e a série de respostas de AMA.</li>
        <li><strong>Trate qualquer data encontrada em outro lugar como não verificada</strong>, a menos que apareça em um desses lugares.</li>
        <li><strong>Ignore páginas de contagem regressiva.</strong> Uma contagem regressiva é uma estimativa de fã com um relógio pendurado.</li>
      </ol>
      <p>O desenvolvedor confirmou que não existe servidor oficial de Discord, então qualquer servidor que não seja linkado das páginas oficiais do itch.io, Tumblr, Patreon ou Bluesky deve ser tratado como mantido por fãs ou não autorizado. Essa regra vale também para anúncios de data: uma data citada em um Discord de fãs é uma data de fãs.</p>

      <h2>O que fazer com a build atual enquanto isso</h2>
      <p>Mantenha seus saves, anote qual build os criou e evite sobrescrever o slot da primeira jogatina. Quando a próxima build chegar, leia as notas de mudança antes de presumir que conselhos de rota da versão 0.2 ainda valem. A ramificação de um protótipo pode ser reorganizada entre builds, e a lista de finais vai mudar conforme o roteiro for concluído.</p>
      <p>Para o registro dia a dia, veja o <a href="/pt/day-3">rastreador do Dia 3</a> do site, e para o que a build atual já contém, veja o <a href="/pt/blog/current-prototype-guide">guia do protótipo</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: 'Versão de navegador ou download? Qual o melhor jeito de jogar The Freak Circus',
    description: 'Uma comparação prática entre a build de navegador e os downloads de desktop e Android de The Freak Circus, incluindo como salvar se comporta de forma diferente.',
    date: '2026-10-13',
    tags: ['Navegador', 'Download', 'Instalação'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus, o jogo cuja única página oficial é o itch.io',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">As duas versões rodam a mesma build 0.2 da mesma história, então a escolha não é sobre conteúdo. É sobre confiabilidade, configuração e quanto do seu progresso você está disposto a confiar a um navegador. Para a maioria dos jogadores, a resposta é: navegador primeiro, download antes de começar a se importar com os saves.</p>
      <div class="walkthrough-note"><strong>Tudo vem de um só lugar</strong><p>O desenvolvedor afirmou que a página do itch.io é a única página oficial do jogo e pediu que o jogo não seja reenviado nem repostado. Não existe servidor oficial de Discord. Se uma página oferecer um “download completo” em outro lugar, está, na melhor das hipóteses, sem licença — e este site não vai linká-la.</p></div>

      <h2>O que está disponível</h2>
      <ul>
        <li><strong>Navegador web (HTML5)</strong> — roda no navegador pela página oficial do itch.io. Sem instalação.</li>
        <li><strong>Windows</strong> — build para PC, versão 0.2.</li>
        <li><strong>macOS</strong> — build para Mac, versão 0.2.</li>
        <li><strong>Linux</strong> — build para Linux, versão 0.2.</li>
        <li><strong>Android</strong> — build em APK, versão 0.2.</li>
      </ul>
      <p>Tudo é “pague o que quiser”, então a build completa pode ser baixada de graça, e pagar é apoio opcional a um desenvolvedor que descreveu o projeto como trabalho em grande parte solo.</p>

      <h2>Escolha a build de navegador quando</h2>
      <p>A versão de navegador é o jeito mais rápido de começar e o mais fácil de ler um guia enquanto joga. Não há pacote para extrair, plataforma para combinar nem nada para desinstalar depois. Também é a escolha sensata em uma máquina compartilhada ou temporária em que você preferiria não deixar arquivos de jogo.</p>
      <p>Jogar no navegador é um caminho mantido, e não um acidente: o desenvolvedor documentou travamentos específicos do navegador — incluindo um na tenda do Ticket Taker e em algumas seções animadas — e lançou correções para eles. A ressalva restante conhecida é que pular algumas cenas muito rápido pode deixar efeitos visuais fora de sincronia, então dê um pouco de paciência à versão de navegador quando clicar rápido.</p>

      <h2>Escolha um download quando</h2>
      <p>As builds de desktop são a melhor escolha para rejogadas e para quem planeja manter intacto um save da primeira passada. Uma instalação local não está sujeita aos limites do armazenamento do navegador, mantém a própria cópia dos arquivos do jogo e dá a interface completa do Ren'Py com rollback no histórico — o recurso que torna a comparação de ramificações prática em vez de entediante.</p>
      <div class="walkthrough-tip"><strong>Extraia os pacotes de desktop por completo antes de iniciar</strong><p>Os pacotes de desktop chegam comprimidos. Extraia o pacote inteiro, mantenha o aplicativo junto com os arquivos incluídos e então o inicie. Executar um programa de dentro de um arquivo compactado é a causa mais comum de uma build que parece iniciar e depois se comporta mal.</p></div>

      <h2>Como salvar difere, e o que não está documentado</h2>
      <p>É aqui que as duas versões realmente divergem, e onde os conselhos publicados são menos confiáveis.</p>
      <ul>
        <li><strong>Ambas usam a interface padrão do motor.</strong> The Freak Circus é um lançamento em Ren'Py, então salvar usa os botões normais de save e load, uma lista de slots, save rápido e load rápido, e rollback no histórico.</li>
        <li><strong>Ambas oferecem um ponto de entrada no Dia 2.</strong> O menu inclui um botão do Dia 2 com uma introdução curta, então dá para continuar ao Dia 2 sem rejogar o Dia 1.</li>
        <li><strong>Saves do navegador ficam no armazenamento do navegador.</strong> Limpar os dados do site, abrir uma janela privada ou rodar uma configuração rígida de privacidade pode removê-los sem aviso, e eles ficam presos ao perfil de navegador que os criou. Esta é a razão isolada mais comum de jogadores relatarem perda de progresso.</li>
        <li><strong>Documentação oficial de save não existe.</strong> O desenvolvedor não publicou locais de save, quantidade de slots, comportamento de autosave, nem se saves do navegador podem ser movidos para uma build desktop. Qualquer guia que dê um caminho específico, uma contagem de slots ou um procedimento de transferência garantido está descrevendo comportamento do motor, e não uma resposta oficial para este jogo.</li>
      </ul>
      <p>O Ren'Py oferece ações de exportar e importar saves na sobreposição do motor, e se elas funcionam de modo confiável para mover um save do navegador para uma build desktop deste jogo não foi confirmado. Trate como algo que vale testar, e não como procedimento, e faça backup de tudo o que importa antes de experimentar.</p>

      <h2>Uma regra simples</h2>
      <ul>
        <li><strong>Ler uma vez, em uma máquina compartilhada ou sem instalar nada:</strong> use a build de navegador.</li>
        <li><strong>Planejando replays, comparando ramificações ou mantendo um save de longo prazo:</strong> baixe a versão da sua plataforma.</li>
        <li><strong>No celular:</strong> o APK para Android é a opção com suporte.</li>
        <li><strong>Independente da plataforma:</strong> pegue o download na página oficial do itch.io e mantenha cópias de backup próprias de qualquer save que você ficaria irritado em perder.</li>
      </ul>
      <p>Nenhuma versão dá mais história que a outra. A versão 0.2 contém os mesmos dois dias e o mesmo final único nos dois casos, então a diferença prática é inteiramente sobre a segurança com que seu progresso sobrevive.</p>

      <h2>Outras diferenças que valem a pena conhecer</h2>
      <p>Três coisas menores separam as versões, e nenhuma delas é sobre qualidade.</p>
      <ul>
        <li><strong>Idiomas e voz.</strong> O jogo sai em inglês, português do Brasil e chinês simplificado, com a tradução chinesa revisada para a versão 0.2. A dublagem é somente em inglês, feita por Darthsuki, então a configuração de idioma muda texto, e não áudio, em todas as versões.</li>
        <li><strong>Entrada e tratamento de texto.</strong> As builds de desktop apoiam os confortos usuais de teclado, mouse e janela, incluindo rolar de volta por uma cena. Jogar no navegador depende da página, o que é bom para uma leitura direta, mas mais desajeitado para comparar duas ramificações lado a lado.</li>
        <li><strong>Menus e interface.</strong> O menu inclui um ponto de entrada do Dia 2 nas duas versões, o recurso isolado mais útil para quem quer voltar ao conteúdo atual sem rejogar o Dia 1.</li>
      </ul>
      <p>Há também um aviso que independe de versão e vale para as duas: o jogo é classificado como 18+, e seus avisos publicados de conteúdo incluem sangue, morte, assassinato e gore, alusões a canibalismo, abuso, sequestro, uso de drogas sem consentimento, dominação física e contato físico sem consentimento. Leia essa lista antes de decidir quanto da história você quer ler com antecedência.</p>
      <p>Para a lista de plataformas e as notas de segurança, veja o <a href="/pt/download">guia de download</a>; para como salvar se comporta, veja o <a href="/pt/save">guia de save</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Por que The Freak Circus tem apenas um final agora',
    description: 'The Freak Circus traz um único final jogável porque é um protótipo — como o final ruim implementado, os quatro finais planejados e o Dia 3 se encaixam.',
    date: '2026-10-16',
    tags: ['Finais', 'Versão 0.2', 'Desenvolvimento'],
    image: '/images/home/faq.webp',
    imageAlt: 'O protótipo atual de The Freak Circus, versão 0.2',
    readingTime: '8 min de leitura',
    content: `
      <p class="article-lede">A razão de existir apenas um final não é que os outros finais estão escondidos, ou que desbloqueiam em uma jogatina posterior da versão 0.2, ou que você perdeu uma condição. A razão é que o jogo é um protótipo, e os finais são a parte de um roteiro que se escreve por último.</p>
      <div class="walkthrough-note"><strong>O que este artigo explica</strong><p>A relação entre o único final implementado, os quatro finais que o desenvolvedor nomeou e o estado do roteiro. Contém spoilers para o único final que existe na build pública.</p></div>

      <h2>Um final, e ele é ruim</h2>
      <p>A versão 0.2 contém exatamente um final: «Missing». Ele é alcançado no Dia 1, quando a protagonista não faz nada enquanto Pierrot é zombado por um homem diante de uma multidão. Uma figura desconhecida entrega a ela um ingresso rosa, leva-a à tenda rosa, e cada membro do circo lhe nega a entrada. O jogo afirma que a protagonista não conseguiu chamar a atenção de Pierrot e teve um fim trágico.</p>
      <p>Esse final não é um espaço reservado para um bom. É um trecho de escrita concluído, com um tema anexado — uma protagonista que se recusa a se envolver com o conflito central é removida dele —, e é a única conclusão que a build atual oferece oficialmente.</p>

      <h2>Quatro conclusões estão planejadas, e nenhuma delas está na build</h2>
      <ul>
        <li><strong>Final de Pierrot</strong> — uma conclusão romântica com Pierrot.</li>
        <li><strong>Final de Harlequin</strong> — uma conclusão romântica com Harlequin.</li>
        <li><strong>Final da Protagonista</strong> — uma conclusão sem romance, embora amizades ainda possam ser escolhidas junto dela.</li>
        <li><strong>“All together”</strong> — a protagonista se apaixona por Pierrot e Harlequin ao mesmo tempo.</li>
      </ul>
      <p>Elas são nomeadas pelo desenvolvedor na página oficial e no FAQ oficial e descritas repetidamente como ainda em desenvolvimento. Não existe uma lista de gatilhos publicada para nenhuma delas, porque não há nada a disparar. Um passo a passo para desbloquear o final de Harlequin estaria descrevendo uma build que não existe publicamente.</p>
      <h3>E não existe total oficial</h3>
      <p>É fácil somar os números e chegar a cinco. Esse total nunca foi declarado. O desenvolvedor disse que vários finais estão planejados, mas não pode dar uma contagem, porque o roteiro ainda está em andamento — e uma conclusão planejada pode ser fundida, retrabalhada ou ampliada antes de ser lançada.</p>

      <h2>Finais são a última coisa que um roteiro produz</h2>
      <p>Esta é a razão prática de a build atual ter o formato que tem. Uma narrativa ramificada precisa ser construída de dentro para fora: o dia precisa das cenas dele, as cenas precisam das escolhas delas, as escolhas precisam de consequências que alimentem cenas posteriores, e só então a forma de uma conclusão existe. A build atual tem os Dias 1 e 2 com suas apresentações, suas ramificações e suas variações de cena, mais um final colocado onde demonstra uma consequência.</p>
      <p>A lista oficial de recursos é incomumente honesta sobre isso. Ela registra cinco personagens apresentados, um final ruim implementado e apresentações de personagens concluídas, com o restante da história ainda em desenvolvimento. São quatro afirmações separadas, e todas são consistentes com um projeto que terminou a abertura e ainda constrói o meio e o fim.</p>
      <div class="walkthrough-tip"><strong>Como testar se uma ramificação é realmente diferente</strong><p>Como não há finais para comparar, o teste com significado é se uma cena muda. Carregue um save, mude uma resposta com efeito e compare o que segue. Se duas partidas produzirem uma diferença reproduzível em diálogo, encenação ou em quem aparece, a ramificação é real. Se produzirem uma fala diferente, isso é variação, não rota.</p></div>

      <h2>O Dia 3 é onde as conclusões estão sendo escritas</h2>
      <p>O próximo dia dentro do jogo está em desenvolvimento ativo, e as atualizações oficiais descrevem um roteiro maior que o do Dia 2, com conteúdo adicional de final ruim e cenas ocultas. A categoria de finais é explicitamente o tipo de coisa que cresce: a build atual lista um final ruim, e as notas de atualização mencionam mais conteúdo de final sendo escrito.</p>
      <p>É também por isso que não existe data de lançamento. O desenvolvedor pediu que afirmações de data vindas de fora não sejam repetidas, o que soa como uma tentativa de impedir que um cronograma se forme em torno de trabalho que não está pronto. As atualizações de desenvolvimento descrevem progresso do beta — uma parte do beta concluída, o beta em cerca de 30–40% da atualização, depois quase na metade do conteúdo planejado para o beta —, mas um beta é um marco, não um lançamento.</p>

      <h2>O que isso significa para um jogador hoje</h2>
      <ul>
        <li><strong>Não há nada para desbloquear.</strong> Jogar a versão 0.2 até o fim chega ao final «Missing», e esse é o conteúdo completo de finais da build.</li>
        <li><strong>Replays ainda valem a pena.</strong> A ramificação é real, e variações de cena, aparições de personagens e leituras diferentes são coisas que a build atual contém.</li>
        <li><strong>Não compre nem corra atrás de um pacote de “todos os finais”</strong> para um jogo que hoje tem um final. Nada fora da página oficial do itch.io é autorizado, de qualquer forma.</li>
        <li><strong>Guarde seus saves.</strong> As escolhas da versão 0.2 não vão necessariamente mapear para a próxima build pública, e a lista de finais vai mudar.</li>
      </ul>
      <p>O resumo honesto é que The Freak Circus são dois dias e pouco de uma história de três dias, com o último dia em produção. O que você pode jogar é uma abertura bem construída, com ramificações reais. O que você não pode jogar é o final — e, por enquanto, isso inclui os bons.</p>
      <p>Para a lista de finais e rotas com fontes, veja o <a href="/pt/endings">guia de finais</a>; para o estado do desenvolvimento, veja o <a href="/pt/day-3">rastreador do Dia 3</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'Como ler guias de fãs sem absorver desinformação',
    description: 'Um método para avaliar qualquer guia de fãs de The Freak Circus — separe afirmações em implementado, planejado e não verificado, e identifique os erros mais comuns.',
    date: '2026-10-19',
    tags: ['Checagem de fatos', 'Guias', 'Comunidade'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Arte da comunidade dos personagens de The Freak Circus',
    readingTime: '9 min de leitura',
    content: `
      <p class="article-lede">Toda visual novel com um fandom pequeno e entusiasmado acaba acumulando guias que discordam entre si, e alguns deles estão confiantemente errados. Lê-los não é difícil se você tiver um método. O método é simples: classifique cada afirmação em três blocos — implementado, planejado ou não verificado — e recuse-se a deixar uma afirmação mudar de bloco porque aparece com frequência suficiente.</p>
      <div class="walkthrough-note"><strong>Por que isso importa aqui</strong><p>The Freak Circus tem três propriedades incomuns que tornam maus guias comuns: o jogo é um protótipo com um único final implementado, o elenco dele tem medidas publicadas mas nenhuma idade publicada, e boa parte do material interessante de personagem vem de páginas da wiki do fandom, e não de postagens do desenvolvedor. Cada uma dessas produziu uma categoria específica de desinformação.</p></div>

      <h2>Os três blocos</h2>
      <ul>
        <li><strong>Implementado.</strong> Você consegue alcançá-lo na build pública agora. Um final se qualifica: «Missing», o final ruim do Dia 1, alcançado não fazendo nada enquanto Pierrot é zombado.</li>
        <li><strong>Planejado.</strong> O desenvolvedor o nomeou, e ele não está em uma build. Quatro se qualificam: Pierrot, Harlequin, Protagonista e “All together”.</li>
        <li><strong>Não verificado.</strong> Sem fonte de primeira mão, mas repetido amplamente. Caminhos de save, contagens de slots, agendas de autosave, idades e aniversários exatos, tempo total de conclusão, datas de lançamento do Dia 3 e qualquer número específico de finais.</li>
      </ul>
      <p>A maioria dos argumentos factuais sobre este jogo se dissolve depois que cada frase está em um bloco. “O jogo tem cinco finais” é um erro de fusão: um final implementado mais quatro planejados, apresentado como um total confirmado que o desenvolvedor nunca deu.</p>

      <h2>Cinco perguntas para fazer a um guia</h2>
      <ol class="walkthrough-steps">
        <li><strong>Sobre qual build é isto?</strong> A versão 0.2 é a build pública atual. Um guia que nunca nomeia uma versão está descrevendo a memória do autor.</li>
        <li><strong>Ele linka uma fonte?</strong> Uma página oficial, uma entrada de devlog, uma resposta de AMA, uma postagem no Tumblr. Um guia que não consegue apontar uma dessas está interpretando.</li>
        <li><strong>Ele marca material de fandom como material de fandom?</strong> Os detalhes de traje, o motivo de Pierrot ser silencioso, o papel de Harlequin na morte de Columbina — tudo útil, tudo vindo da wiki do fandom, tudo merecendo rótulo.</li>
        <li><strong>Ele diz onde os spoilers começam?</strong> Um guia que estraga a abertura do Dia 2 sem aviso não é mais útil do que um que avisa.</li>
        <li><strong>Ele preserva a incerteza onde deveria?</strong> “Planejado”, “não implementado”, “não confirmado” não são fraquezas em um guia. São as partes que continuarão verdadeiras depois da próxima atualização.</li>
      </ol>

      <h2>Os erros específicos que valem a pena pegar</h2>
      <h3>Rotas românticas para personagens que não as têm</h3>
      <p>As opções de rota confirmadas são Pierrot, Harlequin, os dois ou nenhum. Não existe rota do Jester, do Ticket Taker nem do Doctor. O desenvolvedor descreveu tornar os personagens restantes opções românticas como possibilidade, e não compromisso, e qualquer rota dessas chegaria mais provavelmente como conteúdo extra ou DLC. Guias que descrevem uma rota do Ticket Taker “desbloqueada por persistência e diálogo cuidadoso”, um final “Clean Hands” do Doctor ou uma rota do Jester que “desbloqueia no Dia 2” estão descrevendo coisas que não existem. A atualização do Dia 2 adicionou personagens, sprites animados, um menu redesenhado e uma versão Android — não novas rotas.</p>
      <h3>Um “final bom” que não existe</h3>
      <p>Não existem finais bons implementados. O único final na build é ruim, e as conclusões românticas frequentemente descritas como os desfechos “bons” são os mesmos finais planejados listados acima — inacabados e sem garantia de serem os resultados que os fãs esperam.</p>
      <h3>Números precisos sem fonte</h3>
      <p>Idades específicas, aniversários, uma altura para Columbina, um tempo total de jogo, um número exato de finais e um local de save preciso são invenções de fãs vestidas de dados. As medidas genuínas são a tabela de alturas do desenvolvedor e a ordem relativa de idade — e nenhuma idade numérica jamais foi publicada para ninguém do elenco.</p>
      <h3>Datas para o Dia 3</h3>
      <p>Nenhuma data de lançamento foi anunciada, e o desenvolvedor pediu que afirmações de data vindas de fora não sejam repetidas. Uma página de contagem regressiva é uma estimativa de fã com um relógio pendurado. A única data que vale é a da página oficial do itch.io ou de uma postagem oficial.</p>

      <h2>Lendo fontes sem confiar cegamente nelas</h2>
      <p>A wiki do fandom é genuinamente valiosa para este jogo e vale a pena usar — com uma ressalva específica. Ela compila material de personagem das próprias cenas do jogo, o que significa que as descrições de personagem dela ficam perto da fonte, enquanto as inferências e datas dela não são de primeira mão. O hábito prático é manter os dois separados enquanto você lê.</p>
      <ul>
        <li><strong>O que a wiki faz bem:</strong> detalhe de traje, explicações dentro da ficção, resumos de relacionamento e o registro do que o desenvolvedor respondeu em tópicos de AMA.</li>
        <li><strong>O que a wiki erra:</strong> idades numéricas e a maioria dos aniversários, uma altura para Columbina e leituras de eventos ambíguos da história afirmadas com mais firmeza do que a evidência permite.</li>
        <li><strong>O que fazer:</strong> copie a descrição, mantenha a ressalva.</li>
      </ul>
      <div class="walkthrough-tip"><strong>Um teste de uma linha para qualquer afirmação</strong><p>Pergunte: “o desenvolvedor poderia contradizer isto amanhã sem que ninguém notasse?” Se sim, a afirmação precisa de ressalva ou de atribuição. “O desenvolvedor confirmou oito tipos de ingresso” não pode ser contradito sorrateiramente. “Harlequin tem 21” pode, e foi.</p></div>

      <h2>Mais uma coisa: onde você pegou o jogo</h2>
      <p>Antes de avaliar qualquer guia, confira os links de fonte dele. O desenvolvedor afirmou que a página do itch.io é a única página oficial do jogo e pediu que o jogo não seja reenviado nem repostado. Não existe servidor oficial de Discord, então todo servidor que não seja linkado das páginas oficiais do itch.io, Tumblr, Patreon ou Bluesky é mantido por fãs ou não autorizado.</p>
      <p>Guias que empurram um “download espelhado”, um programa de “verificação” ou um instalador “corrigido” não são guias. Nunca instale um programa separado nem desative a proteção antivírus para obter este jogo.</p>

      <h2>Um hábito de trabalho</h2>
      <p>Leia primeiro a nota de escopo de um guia. Se ela diz qual build o guia cobre, onde estão as fontes e quais partes seguem em desenvolvimento, o resto pode ser confiável na proporção. Se ele abre com uma afirmação confiante sobre um final que não existe, deixe-o de lado — é um guia que vai lhe dizer com confiança a coisa errada sobre todo o resto também.</p>
      <p>Para a versão verificada dos tópicos mais buscados, comece pelo <a href="/pt/endings">guia de finais</a>, pelo <a href="/pt/characters/heights">guia de alturas</a> e pelo <a href="/pt/save">guia de save</a> — todos separando fatos confirmados de afirmações não verificadas do mesmo jeito.</p>
    `,
  },
];
