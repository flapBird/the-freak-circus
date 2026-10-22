// Spanish (es) editorial content for the character profile pages.
//
// This file mirrors lib/character-content.ts, but only carries the editorial
// fields: the numeric fields (cm, feet, inches, ageOrder, strengthRank) are
// always derived from the official height chart in game-facts.ts so that no
// translation can drift away from the published numbers.
//
// Fact discipline is unchanged from the English source:
//   - Confirmed / from the current build / fan-derived labels are preserved
//     as three separate categories, with the same meaning in Spanish.
//   - No hedge is upgraded into a certainty, and no fandom claim is promoted
//     into a developer statement.

import { HEIGHT_CHART, formatHeight } from './game-facts';
import type { CharacterEditorial } from './character-content';

const chartFor = (slug: string) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

export const characterProfilesEs: Record<
  'pierrot' | 'harlequin' | 'jester' | 'the-doctor' | 'ticket-taker',
  CharacterEditorial
> = {
  pierrot: {
    role: 'Uno de los dos rivales centrales, y la obsesión silenciosa en el centro de la historia',
    intro:
      'Pierrot es el personaje alrededor del cual está construido todo el juego, y al que más a menudo se describe con una sola palabra: silencio. El propio desarrollador lo llama en su sinopsis "el yandere silencioso" ("yandere" es el término de la comunidad para la obsesión romántica que termina en control) — una descripción mucho más cuidada de lo que parece a primera vista. Aquí el silencio es una decisión de caracterización, no una voz ausente ni un marcador de posición sin terminar. Es la razón por la que cada uno de sus gestos tiene peso, y también el mecanismo por el cual su atención acaba siendo difícil de separar de la posesión.',
    sections: [
      {
        heading: 'Respuesta rápida',
        paragraphs: [
          'Pierrot mide 198 cm, lo que lo convierte en el segundo más alto de los cinco personajes presentados y en el más alto de los dos protagonistas románticos. En el orden de edades publicado por el desarrollador ocupa el tercer lugar de cinco, del mayor al menor. Su ruta está planificada y en desarrollo, y es una de las solo dos rutas románticas que el desarrollador ha nombrado.',
        ],
      },
      {
        heading: 'Quién es Pierrot',
        paragraphs: [
          'La sinopsis oficial plantea la situación sin rodeos: trabajas en una cafetería, el destino te lleva a cruzarte con Pierrot, y ahí es donde comienza su obsesión. El marco del juego es preciso sobre el mecanismo: no es un hombre que se vuelve terrible en un giro dramático, sino alguien cuya atención se endurece poco a poco, a lo largo de días corrientes, hasta que lo corriente acaba reorganizado alrededor de ella.',
          'Lo que hace difícil escribir con exactitud sobre él es que el juego es una novela visual y Pierrot es un personaje que casi no habla. Buena parte de lo que los jugadores describen como su personalidad se arma a partir de lo que no dice y de cómo responde al protagonista. Ese material es real y está en la versión actual, pero es interpretación sobre observación, y esta página mantiene ambas cosas separadas.',
        ],
      },
      {
        heading: 'Altura y detalles físicos',
        paragraphs: [
          `La tabla de alturas publicada por el desarrollador sitúa a Pierrot en ${formatHeight(chartFor('pierrot')).metric}, aproximadamente ${formatHeight(chartFor('pierrot')).imperial}. La misma tabla indica que el desarrollador la utilizó como referencia al dibujar los sprites, y por eso aquí las cifras se tratan como canónicas y no como estimaciones leídas del arte.`,
          'El wiki de fans describe su diseño con bastante detalle: pelo blanco de largo medio, máscara blanca con ranuras verticales negras de largo desigual, ojos dorados, gorro de bufón rojo y negro con cascabeles,coat rojo con detalles dorados y guantes negros con garras. Ese nivel de detalle del vestuario es útil para reconocerlo en capturas y fan art, pero procede del fandom y no de una declaración del desarrollador, así que aquí se presenta como descripción de fans.',
        ],
      },
      {
        heading: 'Orden de edades y su lugar entre los cinco',
        paragraphs: [
          'Una publicación del AMA respondió a una petición directa de ordenar al reparto de mayor a menor. El orden publicado es Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pierrot es, por tanto, el tercero de cinco: mayor que Jester y Harlequin, menor que el Ticket Taker y el Doctor.',
          'No se ha publicado ninguna edad numérica para ningún personaje, y conviene ser explícito al respecto porque los wikis de fans y las bases de datos de personajes asignan a menudo edades concretas que no tienen ninguna base de primera mano. El orden de edades es la única información de edad que el desarrollador ha hecho pública.',
        ],
      },
      {
        heading: 'Ranking de fuerza',
        paragraphs: [
          'El desarrollador también publicó un ranking de fuerza física bruta, y Pierrot ocupa el primer lugar — por delante de Harlequin y Jester, empatados en el segundo, luego el Doctor y por último el Ticket Taker. El ranking se publicó como comentario al margen de una pregunta de un fan y no como una mecánica del juego, así que conviene leerlo como caracterización: el miembro más fuerte del circo es también el que más se contiene a sí mismo.',
        ],
      },
      {
        heading: 'Por qué Pierrot no habla',
        paragraphs: [
          'La sinopsis oficial describe a Pierrot como "el yandere silencioso". Esa única frase es del propio desarrollador, y es hasta donde llega el material de primera mano sobre el motivo. El wiki de fans añade una explicación dentro de la ficción: que una regla de no hablar en público fue impuesta por Jester, y que Jester es una figura de autoridad a la que Pierrot respeta profundamente. Es un detalle satisfactorio y coherente con cómo están escritos los dos personajes, pero procede del wiki y no del desarrollador.',
          'La diferencia importa por una razón práctica: si estás leyendo una traducción del guion y Pierrot parece responder, eso es una cuestión de localización o de interpretación, no una contradicción del escenario. El silencio es el rasgo que define al personaje, no un defecto del texto.',
        ],
      },
      {
        heading: 'Personalidad y la forma de su obsesión',
        paragraphs: [
          'A lo largo del material de la historia, Pierrot se lee como paciente y atento más que impulsivo. La obsesión que describe la sinopsis oficial no se enuncia como rabia; se enuncia como un comienzo, lo cual es una afirmación sobre el ritmo y no sobre la intensidad. Esa distinción es justamente lo que vuelve inquietante su historia: un personaje cuya atención se ha vuelto total y silenciosa resulta más perturbador que uno que la canta a gritos.',
          'El wiki de fans lo caracteriza como amable y educado en la superficie mientras acecha al protagonista, y como protector del protagonista y de Columbina. También registra una respuesta concreta del desarrollador a la pregunta de si Pierrot abandonaría alguna vez al protagonista: la respuesta es no, y de forma rotunda. Esa respuesta es una señal fuerte sobre hacia dónde va su ruta, aunque la ruta en sí siga sin terminar.',
        ],
      },
      {
        heading: 'Pierrot y Harlequin',
        paragraphs: [
          'La rivalidad entre ambos es el centro estructural del juego. La sinopsis llama a Harlequin el "rival seductor" de Pierrot y describe el juego como algo que lidera uno u otro. Los dos son opuestos en método — Pierrot es callado y constante, Harlequin es teatral y cambiante — y también lo son en la manera en que compiten por la atención del protagonista.',
          'El wiki de fans describe su historia compartida como vinculada a Columbina, y una respuesta del AMA del desarrollador los ha descrito como conocidos desde la infancia. Lo que puede sostenerse sin forzar las fuentes es que la rivalidad es anterior al presente del juego y que arrastra una historia que la versión actual solo revela a fragmentos.',
        ],
      },
      {
        heading: 'Pierrot y Columbina',
        paragraphs: [
          'Columbina es exmiembro del circo y es la figura cuya muerte da forma al pasado de ambos protagonistas. El wiki de fans registra que Pierrot y Columbina nunca tuvieron una relación romántica, lo que contradice una lectura de la narración de amor del propio circo, y el desarrollador ha dicho por separado que Pierrot dejó atrás esa historia y ha crecido desde entonces.',
          'Una nota práctica para quien esté leyendo la versión actual: el desarrollador ha dicho que el diseño de Columbina sigue en trabajo y que sus detalles se están ocultando deliberadamente. Las actualizaciones de desarrollo más recientes mencionan una nueva escena breve que la alude. Es decir, la forma de la historia se está confirmando mientras el personaje sigue en producción, una posición inusual desde la que escribir una guía de fans, y la razón por la que esta sección se queda corta.',
        ],
      },
      {
        heading: 'Estado de la ruta y del final',
        paragraphs: [
          'El final romántico de Pierrot está en la lista de finales planeados del desarrollador, junto al de Harlequin, el de la Protagonista y el "All together". Ninguno de ellos está implementado. La versión actual contiene exactamente un final, y es malo: el final "Missing", que se alcanza en el Día 1 negándose a reaccionar mientras están riéndose de Pierrot.',
          'Por eso no existe una lista publicada de disparadores para la ruta de Pierrot. Cualquier tabla de decisiones que prometa desbloquear su final está describiendo una versión que no existe públicamente. Cuando la ruta se publique, esta página se actualizará con las decisiones y los puntos de guardado reales, y no con una predicción.',
        ],
      },
      {
        heading: 'Hechos confirmados frente a interpretación',
        paragraphs: [
          'Para que la diferencia quede concreta, así se divide el material de esta página.',
        ],
        list: [
          'Confirmado por el desarrollador: su altura, su posición en el orden de edades, su primer lugar en el ranking de fuerza, su descripción como "el yandere silencioso", su papel como uno de los dos protagonistas y que un final romántico de Pierrot está planeado.',
          'De la versión actual: su aspecto, sus escenas y la forma en que responde al protagonista.',
          'Derivado de fans: la descripción completa del vestuario y la máscara, el motivo dentro de la ficción de su silencio, su historia personal y los detalles concretos de sus relaciones con los demás personajes.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide Pierrot en The Freak Circus?',
        answer:
          'Pierrot mide 198 cm, aproximadamente 6 ft 5.95 in, en la tabla de alturas publicada por el desarrollador. Es el segundo más alto de los cinco personajes y el más alto de los dos protagonistas románticos.',
      },
      {
        question: '¿Cuántos años tiene Pierrot?',
        answer:
          'No se ha publicado ninguna edad numérica. En el orden de edades oficial del desarrollador ocupa el tercer lugar de cinco, del mayor al menor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: '¿Es Pierrot mayor que Harlequin?',
        answer: 'Sí. Harlequin es el más joven de los cinco, y Pierrot es el tercero más longevo.',
      },
      {
        question: '¿Es Pierrot el personaje más fuerte?',
        answer:
          'Sí. Ocupa el primer lugar en la lista de fuerza publicada por el desarrollador, por delante de Harlequin y Jester, empatados en el segundo lugar.',
      },
      {
        question: '¿Se puede tener romance con Pierrot?',
        answer:
          'El final romántico de Pierrot está planeado y en desarrollo, pero todavía no está en la versión pública. No hay condiciones de activación que publicar.',
      },
      {
        question: '¿Pierrot tiene final?',
        answer:
          'Todavía no. El único final implementado es el final malo "Missing" del Día 1. El final de Pierrot está anunciado y aún se está escribiendo.',
      },
      {
        question: '¿Por qué no puede hablar Pierrot?',
        answer:
          'La sinopsis oficial lo llama "el yandere silencioso", así que el silencio es una caracterización del desarrollador y no un hueco en el texto. El wiki de fans da una razón dentro de la ficción que involves a Jester, pero ese detalle no procede de una declaración del desarrollador.',
      },
      {
        question: '¿Pierrot es un yandere?',
        answer:
          'Sí — esa es la palabra del propio desarrollador en la sinopsis oficial, no solo una abreviatura de los fans.',
      },
      {
        question: '¿Cuál es la relación entre Pierrot y Harlequin?',
        answer:
          'Son los rivales centrales, y el juego está planteado como algo que lidera uno u otro. Harlequin es el "rival seductor" de Pierrot, y ambos son opuestos en método: Pierrot es callado y constante, Harlequin es teatral y cambiante.',
      },
      {
        question: '¿Qué pasó entre Pierrot y Columbina?',
        answer:
          'Columbina es exmiembro del circo y su muerte da forma al pasado de ambos protagonistas. El wiki de fans registra que ella y Pierrot nunca tuvieron una relación romántica. Su diseño sigue en producción, y el desarrollador ha ocultado los detalles deliberadamente.',
      },
      {
        question: '¿Es Pierrot humano?',
        answer:
          'Según el wiki de fans, es uno de los monstruos del circo. La sinopsis del desarrollador describe al reparto y la premisa del juego en términos de un circo de monstruos, y Pierrot forma parte de esa compañía.',
      },
      {
        question: '¿Cómo es Pierrot sin la máscara?',
        answer:
          'El wiki de fans describe pelo blanco de largo medio y ojos dorados tras una máscara blanca con ranuras verticales negras de largo desigual. Esa descripción viene del fandom y no de una declaración del desarrollador, y sirve sobre todo para reconocerlo en el fan art.',
      },
    ],
  },
  harlequin: {
    role: 'El rival seductor, y el segundo de las dos rutas románticas',
    intro:
      'Harlequin es el personaje que convierte The Freak Circus en una elección y no en una historia con un único camino. La sinopsis oficial lo llama el "rival seductor" de Pierrot y describe el juego como algo que lidera uno u otro — un resumen exacto de un diseño construido en torno a dos maneras incompatibles de ganarse la atención del protagonista.',
    sections: [
      {
        heading: 'Respuesta rápida',
        paragraphs: [
          'Harlequin mide 187 cm, el más bajo de los cinco personajes presentados y el segundo más bajo de los dos protagonistas románticos. En el orden de edades publicado por el desarrollador ocupa el quinto lugar de cinco, lo que lo convierte en el más joven. Comparte el segundo puesto del ranking de fuerza con Jester, y tiene una ruta romántica planeada que todavía no está implementada.',
        ],
      },
      {
        heading: 'Quién es Harlequin',
        paragraphs: [
          'Donde Pierrot trabaja con constancia, Harlequin trabaja con actuación. La palabra que usa el desarrollador es "seductor", y el personaje está escrito de forma que solo se lee en movimiento: una presencia teatral y cambiante cuyas intenciones apenas se pueden fijar el tiempo suficiente como para estar seguro de ellas. En una novela visual, donde casi todo el peso recae en el diálogo, eso lo convierte en el más difícil de resumir de los dos protagonistas y en el más recompensado de ver a lo largo de una partida.',
          'El wiki de fans lo describe como despreocupado, sádico, burlón y secretamente celoso, y señala que no se siente cómodo con el afecto. Los celos son la parte interesante de esa descripción, porque reencuadran la rivalidad como algo que él quiere tanto como Pierrot, y no simplemente como algo que disputa.',
        ],
      },
      {
        heading: 'Altura y detalles físicos',
        paragraphs: [
          `La tabla de alturas del desarrollador sitúa a Harlequin en ${formatHeight(chartFor('harlequin')).metric}, aproximadamente ${formatHeight(chartFor('harlequin')).imperial}. Eso lo deja 11 cm por debajo de Pierrot, una diferencia que el wiki de fans considera relevante para cómo se enfrentan ambos sobre el escenario.`,
          'Su diseño aparece descrito en el wiki de fans como pelo negro rizado hasta las mejillas, con dos mechones enroscados en forma de corazón sobre la frente izquierda, una máscara blanca con un rombo verde atravesando un ojo y un triángulo verde bajo el otro, ojos verde veneno que brillan cuando se quita la máscara, y capucha y traje verdes y negros con guantes desiguales. De nuevo, se trata de una descripción de fans y no de una declaración del desarrollador, y su utilidad principal es reconocerlo en capturas y artworks.',
        ],
      },
      {
        heading: 'Orden de edades y el más joven de los cinco',
        paragraphs: [
          'En el orden de edades publicado por el desarrollador, Harlequin es el último: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Es el más joven del reparto presentado, y el más joven de los dos protagonistas románticos por cuatro posiciones.',
          'Este es un hecho genuinamente documentado y, al mismo tiempo, uno de los que más se deforman en internet. Muchísimo material de fans le asigna a Harlequin una edad numérica concreta, y varias de esas cifras contradicen el orden publicado. El orden es la versión fiable.',
        ],
      },
      {
        heading: 'Ranking de fuerza',
        paragraphs: [
          'Harlequin comparte el segundo puesto del ranking de fuerza del desarrollador con Jester, por detrás de Pierrot y por delante del Doctor y del Ticket Taker. Junto con ser el más joven y el más bajo, se le describe de forma consistente como el más rápido del grupo y no como el más pesado; el wiki de fans registra además que ambos comparten la segunda categoría también en fuerza física bruta.',
        ],
      },
      {
        heading: 'Lo que dice el material oficial sobre sus relaciones',
        paragraphs: [
          'Hay una declaración del desarrollador que es fácil de malinterpretar y que merece citarse con cuidado. Preguntado por las mordidas que Harlequin deja mientras coquetea, la respuesta fue que no son propuestas de matrimonio, que la marca no deja cicatriz y que el matrimonio y el cortejo entre monstruos funcionan de forma distinta a como el protagonista los entendería. Es una frase corta, pero hace mucho trabajo: establece que el coqueteo de Harlequin tiene su propia lógica y que el marco de referencia del protagonista no es el marco de referencia del circo.',
          'El wiki de fans registra que Harlequin se siente a salvo junto al Doctor, que el Doctor es su persona favorita en el circo y que se lleva bien con el Ticket Taker pese a un choque de gustos. También registra un vínculo insinuado con la muerte de Columbina — que Harlequin la mató para "salvarla" —, una afirmación de peso que el propio wiki plantea como insinuación y no como afirmación. El desarrollador ha confirmado la forma general de la historia del circo en respuestas de AMA, así que la historia es real, pero esa lectura concreta del papel de Harlequin no está confirmada por fuentes de primera mano.',
        ],
      },
      {
        heading: 'Estado de la ruta y del final',
        paragraphs: [
          'El final romántico de Harlequin es uno de los cuatro que el desarrollador ha nombrado, junto al de Pierrot, el de la Protagonista y el "All together". Ninguno de los cuatro está implementado. La versión actual contiene un final, el final malo "Missing" del Día 1.',
          'Por eso todavía no se puede escribir honestamente una guía del final de Harlequin. Una guía que listara las decisiones exactas y el color de boleto necesario estaría describiendo una versión que no existe públicamente, y quien la siguiera encontraría la ruta indisponible. Cuando se publique, la guía útil será una estrategia de puntos de control y guardado, no una tabla de disparadores inventada.',
        ],
      },
      {
        heading: 'Hechos confirmados frente a interpretación',
        paragraphs: [
          'El reparto de esta página es el siguiente.',
        ],
        list: [
          'Confirmado por el desarrollador: su altura, su posición como el más joven en el orden de edades, su empate en el segundo lugar de fuerza, su descripción como el "rival seductor" de Pierrot, el hecho de que sus mordidas de coqueteo no son propuestas y que un final romántico de Harlequin está planeado.',
          'De la versión actual: su aspecto, sus escenas y sus ramas — algunas de sus apariciones cambian según la rama de la historia, algo que a su vez está confirmado por una nota oficial de corrección de errores.',
          'Derivado de fans: la descripción completa del vestuario y la máscara, su historia personal y los detalles concretos de su relación con Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide Harlequin en The Freak Circus?',
        answer:
          'Harlequin mide 187 cm, aproximadamente 6 ft 1.62 in, en la tabla de alturas publicada por el desarrollador. Es el más bajo de los cinco personajes.',
      },
      {
        question: '¿Es Harlequin el personaje más joven?',
        answer:
          'Sí. En el orden de edades oficial del desarrollador ocupa el quinto lugar de cinco, del mayor al menor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: '¿Cuántos años tiene Harlequin?',
        answer:
          'No se ha publicado nunca una edad numérica para ningún personaje. Solo está documentado el orden relativo, y ese orden lo deja en último lugar.',
      },
      {
        question: '¿Qué clase de personalidad tiene Harlequin?',
        answer:
          'El wiki de fans lo describe como despreocupado, sádico, burlón y secretamente celoso, y señala que se siente incómodo con el afecto. Es el opuesto teatral de Pierrot, y eso es lo que hace que funcione la rivalidad.',
      },
      {
        question: '¿Cuál es la relación entre Harlequin y Pierrot?',
        answer:
          'Son los rivales centrales del juego. La sinopsis oficial llama a Harlequin el "rival seductor" de Pierrot y plantea el juego como algo que lidera uno u otro. El wiki de fans añade que se conocieron de niños y que su historia compartida tiene que ver con Columbina.',
      },
      {
        question: '¿Harlequin tiene ruta?',
        answer:
          'El final romántico de Harlequin está planeado y en desarrollo, pero no está implementado en la versión pública, así que no existen condiciones de activación que documentar.',
      },
      {
        question: '¿Se puede conseguir el final de Harlequin?',
        answer:
          'Todavía no. El único final jugable es el final malo "Missing" del Día 1. El final de Harlequin está anunciado y aún se está escribiendo.',
      },
      {
        question: '¿Harlequin es peligroso?',
        answer:
          'El juego tiene clasificación 18+ y sus avisos de contenido incluyen asesinato, secuestro, uso no consentido de drogas y dominación física, así que todo el reparto está escrito como peligroso. Harlequin en concreto aparece en la descripción de fans de sus escenas como impredecible y sádico.',
      },
      {
        question: '¿Qué le pasó a Columbina?',
        answer:
          'Es exmiembro del circo y su muerte da forma al pasado de ambos protagonistas. El wiki de fans registra la insinuación de que Harlequin la mató para "salvarla" y que Pierrot se negó a participar. Su diseño sigue en producción y los detalles se ocultan deliberadamente.',
      },
      {
        question: '¿Harlequin tiene un final bueno?',
        answer:
          'No hay ningún final bueno implementado. El único final de la versión actual es malo, y el final romántico de Harlequin es trabajo planeado que aún no se ha publicado.',
      },
    ],
  },
  jester: {
    role: 'El líder del circo, y un personaje sin ruta propia',
    intro:
      'Jester es el personaje que más se describe mal en internet, casi siempre en la dirección de regalarle una ruta romántica que no tiene. El desarrollador ha sido explícito: las opciones de ruta son Pierrot, Harlequin, ambos o ninguno. Jester aparece en la versión actual como parte del grupo más amplio, y su presencia es lo que hace que el circo parezca una institución y no solo un par de rivales con un fondo de atrezo.',
    sections: [
      {
        heading: 'Respuesta rápida',
        paragraphs: [
          'Jester mide 192 cm, el segundo más alto de los cinco personajes presentados, y ocupa el cuarto lugar de cinco en el orden de edades del desarrollador. Comparte el segundo puesto del ranking de fuerza con Harlequin. No tiene ruta ni final, y el desarrollador ha dicho que convertir a los personajes restantes en opciones románticas es una posibilidad, no una compromiso.',
        ],
      },
      {
        heading: 'Quién es Jester',
        paragraphs: [
          'Jester funciona como la figura de autoridad del circo. El wiki de fans lo describe como el antagonista principal del Freak Circus, pero sereno y contenido en lugar de volátil, una descripción que encaja con el diseño mucho mejor que la palabra "antagonista" por sí sola. Es quien decide los papeles, quien reparte los roles del circo y de quien se habla con una mezcla de respeto e irritación.',
          'Lo importante para quien lee es que su influencia sobre los demás personajes es estructural. Cuando una fuente dice que un personaje respeta a Jester, le teme o se mueve dentro de reglas que Jester estableció, eso describe la forma del circo y no un momento concreto de la trama.',
        ],
      },
      {
        heading: 'Altura y detalles físicos',
        paragraphs: [
          `La tabla de alturas del desarrollador sitúa a Jester en ${formatHeight(chartFor('jester')).metric}, aproximadamente ${formatHeight(chartFor('jester')).imperial}. Mide 6 cm menos que Pierrot y 20 cm menos que el Doctor.`,
          'El wiki de fans lo describe con largo cabello violeta profundo, una máscara blanca marcada con un corazón morado invertido y una estrella violeta, un frac violeta y guantes de opera, y señala que es ambidiestro. Esa descripción procede de fans y no de una declaración del desarrollador.',
        ],
      },
      {
        heading: 'Orden de edades',
        paragraphs: [
          'En el orden de edades publicado por el desarrollador, Jester ocupa el cuarto lugar de cinco, del mayor al menor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Es mayor que Harlequin y menor que Pierrot, el Doctor y el Ticket Taker.',
          'El wiki de fans registra un cumpleaños para Jester y afirma que el desarrollador publicó una felicitación de cumpleaños, lo que hace que su fecha esté mejor respaldada que la de la mayoría de los demás; pero las fechas que circulan para el resto del reparto son asignadas por fans, y el orden de edades sigue siendo la única medida oficial.',
        ],
      },
      {
        heading: 'Ranking de fuerza',
        paragraphs: [
          'Jester comparte el segundo lugar con Harlequin en el ranking de fuerza del desarrollador, por detrás de Pierrot y por delante del Doctor y del Ticket Taker. Como Harlequin, el wiki de fans lo registra como fuerte pero superado por Pierrot en potencia bruta.',
        ],
      },
      {
        heading: 'Qué establece el material oficial',
        paragraphs: [
          'Las afirmaciones oficiales más claras sobre Jester provienen de una respuesta de AMA sobre las rutas: no existe ruta de Jester, y si se añadieran más rutas llegarían probablemente como contenido adicional o DLC, sin nada decidido. Otra respuesta describió convertir a los personajes restantes en opciones románticas como algo que al desarrollador le gustaría hacer pero que no puede prometer.',
          'Todo lo demás que suele contarse sobre él — que controla a los "Fools", que se refería a los humanos como "strays" (errantes), que eligió el papel de cada uno en el circo — viene del wiki de fans y no del desarrollador, y conviene tratarlo como una interpretación de sus escenas.',
        ],
      },
      {
        heading: 'Estado de la ruta y del final',
        paragraphs: [
          'No hay ruta de Jester ni final de Jester. Los cuatro finales que el desarrollador ha nombrado pertenecen a Pierrot, Harlequin, la Protagonista y al desenlace combinado "All together".',
          'Conviene además nombrar directamente otro error habitual: la idea de que la ruta de Jester "se desbloquea en el Día 2" aparece en varias guías. Nada de eso existe. Lo que sí llegó con la actualización del Día 2 fueron personajes adicionales, sprites animados, un menú rediseñado y una versión para Android, no rutas nuevas.',
        ],
      },
      {
        heading: 'Hechos confirmados frente a interpretación',
        paragraphs: [
          'En el caso de Jester el proporción importa especialmente, porque muchísimo material publicado sobre él presenta especulación como si fuera una mecánica.',
        ],
        list: [
          'Confirmado por el desarrollador: su altura, su posición en el orden de edades, su empate en el segundo lugar de fuerza y que no tiene ruta.',
          'De la versión actual: su aspecto, sus escenas y la autoridad que ejerce sobre los demás personajes.',
          'Derivado de fans: el concepto de los "Fools", el marco de los "strays" (errantes), los detalles sobre cómo reparte los roles y su historia personal.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide Jester?',
        answer:
          '192 cm, aproximadamente 6 ft 3.59 in, en la tabla de alturas publicada por el desarrollador. Es el segundo más alto de los cinco.',
      },
      {
        question: '¿Es Jester el líder del circo?',
        answer:
          'El wiki de fans lo describe como el líder y el antagonista principal del circo, y su autoridad sobre los demás personajes es coherente a lo largo de la versión. Esa descripción viene del fandom y no de una declaración del desarrollador.',
      },
      {
        question: '¿Jester tiene ruta?',
        answer:
          'No. El desarrollador ha confirmado que no existe ruta de Jester. Las únicas opciones son Pierrot, Harlequin, ambos o ninguno.',
      },
      {
        question: '¿Jester tiene final?',
        answer:
          'No. Los cuatro finales planeados pertenecen a Pierrot, Harlequin, la Protagonista y "All together".',
      },
      {
        question: '¿La ruta de Jester se desbloquea en el Día 2?',
        answer:
          'No. Varias guías lo afirman, pero nada de eso existe. La actualización del Día 2 añadió personajes, sprites animados, un menú rediseñado y una versión para Android.',
      },
      {
        question: '¿Cuántos años tiene Jester?',
        answer: 'No se publica ninguna edad numérica. En el orden de edades oficial ocupa el cuarto lugar de cinco, del mayor al menor.',
      },
      {
        question: '¿Es Jester el más fuerte?',
        answer: 'No — Pierrot ocupa el primer lugar. Jester comparte el segundo con Harlequin.',
      },
      {
        question: '¿Se puede tener romance con Jester?',
        answer:
          'No en la versión actual. El desarrollador ha dicho que convertir a los demás personajes en opciones románticas es una posibilidad que le gustaría explorar pero que no puede prometer.',
      },
    ],
  },
  'the-doctor': {
    role: 'La presencia clínica en el borde del reparto',
    intro:
      'El Doctor aparece en la versión actual y no tiene ruta, ni final, ni entrada de altura oficial en la tabla pública que citan los fans. Lo que lo hace interesante de leer es el contraste que crea: un registro clínico dentro de un carnaval, y un personaje que el fandom describe como simultáneamente la persona más serena y la más peligrosa de la carpa.',
    sections: [
      {
        heading: 'Respuesta rápida',
        paragraphs: [
          'El Doctor mide 207 cm, lo que lo convierte en el más alto de los cinco personajes presentados con un margen claro: 9 cm por encima de Pierrot. Ocupa el segundo lugar de cinco en el orden de edades del desarrollador, es decir, solo el Ticket Taker es mayor que él. Se sitúa tercero de cinco en fuerza, y no tiene ruta ni final.',
        ],
      },
      {
        heading: 'Quién es el Doctor',
        paragraphs: [
          'El wiki de fans describe al Doctor como un antagonista secundario o quizá como una figura neutral, y le da dos caras: sereno y compuesto en una, apasionado y sádico en la otra. Es una forma útil de leer sus escenas, porque el cambio se describe como visible: sus ojos se vuelven rojos cuando una emoción concreta toma el mando. El wiki también señala que prefiere el ingenio a la fuerza bruta, lo cual encaja con un personaje que es a la vez el más alto y solo el tercero en fuerza bruta.',
          'También es el personaje con más probabilidades de ser representado mal como alguien con ruta. La idea de una ruta del Doctor con un "final bueno" circula en varias guías antiguas, y no se corresponde con nada de lo que el desarrollador ha descrito.',
        ],
      },
      {
        heading: 'Altura y detalles físicos',
        paragraphs: [
          `La tabla de alturas del desarrollador sitúa al Doctor en ${formatHeight(chartFor('the-doctor')).metric}, aproximadamente ${formatHeight(chartFor('the-doctor')).imperial} — el más alto de los cinco con 9 cm de ventaja.`,
          'El wiki de fans lo describe con piel roja, pelo rojo corto y una máscara de médico de la peste con forma de pico y lentes cian que brillan, y señala que sus piernas y sus pies nunca se muestran. También registra que es zurdo, que no sabe nadar y que sus ojos se vuelven rojos cuando experimenta ciertas emociones. Todo eso es descripción de fans extraída del material, no declaraciones del desarrollador.',
        ],
      },
      {
        heading: 'Orden de edades y fuerza',
        paragraphs: [
          'El Doctor ocupa el segundo lugar de cinco en el orden de edades oficial, del mayor al menor: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Solo el Ticket Taker es mayor que él.',
          'En el ranking de fuerza queda tercero, por delante del Ticket Taker y por detrás de Pierrot y de los empatados Harlequin y Jester. Ser el más alto y quedar tercero en fuerza es la combinación interesante: el Doctor es grande más que poderoso, y la descripción de fans que lo prefere con el ingenio antes que con la fuerza es justo lo que cabría esperar de eso.',
        ],
      },
      {
        heading: 'Un detalle que conviene saber sobre la voz',
        paragraphs: [
          'El Doctor tiene un acento ruso en el guion en inglés, pese a que el reparto es brasileño. Es un chiste interno deliberado entre el actor de voz y la creadora, y está registrado en el wiki de fans con una cita a la propia publicación de Tumblr del actor de voz. Es un detalle pequeño, pero es del tipo de cosa que muestra cuánta parte de la documentación de fans está realmente basada en fuentes y no en suposiciones.',
        ],
      },
      {
        heading: 'Estado de la ruta y del final',
        paragraphs: [
          'El Doctor no tiene ruta ni final. El desarrollador ha confirmado que las opciones de ruta son Pierrot, Harlequin, ambos o ninguno, y que cualquier ruta adicional de personaje llegaría probablemente como contenido extra o DLC, sin nada decidido.',
          'El final "Clean Hands" que algunas páginas antiguas de fans le atribuyen al Doctor no está respaldado por ninguna fuente de primera mano, y este sitio no lo arrastra como hecho.',
        ],
      },
      {
        heading: 'Hechos confirmados frente a interpretación',
        paragraphs: [
          'La página del Doctor tiene más material derivado de fans, en proporción al material oficial, que cualquier otro personaje del reparto, en buena parte porque no tiene ruta y por tanto no existe una descripción narrativa de primera mano de ella.',
        ],
        list: [
          'Confirmado por el desarrollador: su altura como el más alto de los cinco, su segunda posición en el orden de edades, su cuarta posición en el ranking de fuerza y que no tiene ruta.',
          'De la versión actual: su aspecto, sus escenas y la forma en que se rompe su serenidad.',
          'Derivado de fans: los experimentos y las muestras que se le atribuyen a su tienda, su historia personal y los datos curiosos del personaje sobre sus gustos.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide el Doctor?',
        answer: '207 cm, aproximadamente 6 ft 9.5 in — el más alto de los cinco personajes, 9 cm por encima de Pierrot.',
      },
      {
        question: '¿Es el Doctor el más mayor?',
        answer:
          'Es el segundo más mayor. El orden de edades oficial, del mayor al menor, es Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: '¿Es el Doctor el más fuerte?',
        answer: 'No. Ocupa el cuarto lugar en la lista de fuerza del desarrollador, por detrás de Pierrot, Harlequin y Jester.',
      },
      {
        question: '¿El Doctor tiene ruta?',
        answer: 'No. El desarrollador ha confirmado que no existe ruta del Doctor.',
      },
      {
        question: '¿El Doctor tiene un final bueno?',
        answer:
          'No. El Doctor no tiene ruta ni final en la versión actual. El único final que existe es el final malo "Missing" del Día 1.',
      },
      {
        question: '¿Existe un final "Clean Hands" del Doctor?',
        answer:
          'No. Ese dato aparece en algunas páginas de fans, pero ninguna fuente de primera mano lo respalda, y este sitio no lo lista como hecho.',
      },
      {
        question: '¿Cuál es la relación entre el Doctor y Harlequin?',
        answer:
          'El wiki de fans registra que Harlequin se siente a salvo junto al Doctor y que el Doctor es su persona favorita en el circo. Es una caracterización derivada de fans y no una declaración del desarrollador.',
      },
      {
        question: '¿Por qué el Doctor tiene acento ruso?',
        answer:
          'Es un chiste interno deliberado entre el actor de voz y la creadora, registrado por el wiki de fans con una cita al Tumblr del propio actor de voz. El resto del reparto es brasileño.',
      },
      {
        question: '¿Se puede tener romance con el Doctor?',
        answer:
          'No por ahora. El desarrollador ha dicho que convertir a los demás personajes en opciones románticas es una posibilidad que le gustaría explorar pero que no puede prometer.',
      },
    ],
  },
  'ticket-taker': {
    role: 'El guardián del umbral, y el mayor de los cinco',
    intro:
      'El Ticket Taker (llamado "Cobrador de Boletos" en esta guía en español) es el primer personaje que conoces y el que tiene la edad mejor documentada: el orden de edades publicado por el desarrollador lo coloca al frente. También es el personaje al que más a menudo se le asigna una ruta romántica que no existe, lo que lo convierte en un buen caso de prueba para leer el material de fans con criterio.',
    sections: [
      {
        heading: 'Respuesta rápida',
        paragraphs: [
          'El Ticket Taker mide 183 cm, el más bajo de los cinco personajes presentados, y ocupa el primer lugar de cinco en el orden de edades del desarrollador, lo que lo convierte en el mayor. Ocupa el último puesto del ranking de fuerza. No tiene ruta ni final, y el desarrollador lo ha confirmado directamente.',
        ],
      },
      {
        heading: 'Quién es el Ticket Taker',
        paragraphs: [
          'Ocupa una posición liminal dentro de la ficción: una figura en la entrada del circo, asociada al permiso, los umbrales y la maquinaria del espectáculo. El wiki de fans lo describe como obediente y devoto al propósito del circo, maduro y profesional, obsesionado con la limpieza y el orden, y enuncia su principio sin rodeos: aquí, nadie rompe el personaje.',
          'Ese último detalle es lo que hace que funcione como personaje y no solo como un portero. En una historia sobre un circo que funciona sobre la base de la actuación, un personaje cuyo trabajo consiste en hacer cumplir la frontera entre público y ejecutante tiene que creer él mismo en la actuación.',
        ],
      },
      {
        heading: 'Altura y detalles físicos',
        paragraphs: [
          `La tabla de alturas del desarrollador sitúa al Ticket Taker en ${formatHeight(chartFor('ticket-taker')).metric}, aproximadamente ${formatHeight(chartFor('ticket-taker')).imperial} — el más bajo de los cinco, 24 cm por debajo del Doctor.`,
          'El wiki de fans lo describe con pelo corto azul marino, una máscara partida en mitades blanca y negra, un frac azul marino con ribetes dorados, un cravat dorado y un sombrero de copa, y señala que tiene los ojos desiguales: uno blanco y otro azul. El nombre en portugués del personaje, Bilheteiro, aparece en ese mismo material.',
        ],
      },
      {
        heading: 'El mayor de los cinco',
        paragraphs: [
          'Este es el hecho mejor documentado sobre el Ticket Taker. Encabeza el orden de edades publicado por el desarrollador: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Como el mayor del grupo y el encargado de mantener el orden, su edad encaja con el papel en lugar de complicarlo.',
          'Como con todos los personajes, no se ha publicado ninguna edad numérica, y el cumpleaños que circula sobre él es asignado por fans.',
        ],
      },
      {
        heading: 'Ranking de fuerza',
        paragraphs: [
          'Ocupa el último lugar de cinco en la lista de fuerza del desarrollador, por debajo del Doctor. Junto con ser el más bajo, eso lo convierte en el menos imponente físicamente de la compañía, algo coherente con un personaje cuya autoridad es enteramente procedimental.',
        ],
      },
      {
        heading: 'El sistema de boletos',
        paragraphs: [
          'El desarrollador ha confirmado que existen ocho tipos de boleto. El rosa queda por debajo del reparto principal, el rojo y el verde indican una elección que hace el protagonista, y una combinación de rosa y rojo significa que el Ticket Taker se queda automáticamente con la opción roja. Esta es una de las piezas de información mecánica oficial más concretas del juego, y explica por qué el Ticket Taker importa para las ramificaciones aunque no tenga ruta propia.',
          'El wiki de fans añade que la figura del café que entrega al protagonista el boleto rosa es el Ticket Taker disfrazado, que es también como empieza el final malo "Missing". Esa identificación es derivada de fans, pero conecta directamente con el único final que realmente contiene la versión.',
        ],
      },
      {
        heading: 'Estado de la ruta y del final',
        paragraphs: [
          'El Ticket Taker no tiene ruta ni final. El desarrollador ha dicho que las opciones de ruta son Pierrot, Harlequin, ambos o ninguno, y que los personajes restantes solo podrían tener rutas como contenido extra o DLC, si es que llega a haberlas.',
          'Conviene decirlo claramente: algunas guías de fans de larga tradición describen una ruta romántica del Ticket Taker que se desbloquea con persistencia y diálogo cuidadoso. En la versión pública no existe tal ruta.',
        ],
      },
      {
        heading: 'Hechos confirmados frente a interpretación',
        paragraphs: [
          'El Ticket Taker está inusualmente bien documentado en el material oficial para ser un personaje de apoyo, sobre todo porque el sistema de boletos es una de las pocas mecánicas confirmadas.',
        ],
        list: [
          'Confirmado por el desarrollador: su altura como el más bajo de los cinco, su primera posición en el orden de edades, su última posición en el ranking de fuerza, la existencia de ocho tipos de boleto y que no tiene ruta.',
          'De la versión actual: su aspecto, sus escenas y el hecho de que el protagonista recibe un boleto rosa durante el Día 1.',
          'Derivado de fans: el disfraz de "Desconocido" del café, el epíteto de "manipulador de la realidad" y los detalles de su historia con Columbina.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide el Ticket Taker?',
        answer:
          '183 cm, aproximadamente 6 ft 0 in — el más bajo de los cinco personajes, 24 cm menos que el Doctor.',
      },
      {
        question: '¿Es el Ticket Taker el mayor?',
        answer:
          'Sí. Encabeza el orden de edades oficial del desarrollador: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: '¿Es el Ticket Taker el más fuerte?',
        answer: 'No. Ocupa el último lugar de cinco en la lista de fuerza del desarrollador.',
      },
      {
        question: '¿Se puede tener romance con el Ticket Taker?',
        answer:
          'No. El desarrollador ha confirmado que no existe ruta del Ticket Taker. Las opciones son Pierrot, Harlequin, ambos o ninguno.',
      },
      {
        question: '¿Tiene ruta o final el Ticket Taker?',
        answer:
          'Ninguno de los dos. Aparece a lo largo de la historia como figura de autoridad, pero ninguna ruta ni ningún final le pertenecen.',
      },
      {
        question: '¿Cuántos tipos de boleto hay?',
        answer:
          'El desarrollador ha confirmado ocho. El rosa queda por debajo del reparto principal, el rojo y el verde señalan una elección del protagonista, y una combinación de rosa y rojo significa que el Ticket Taker se queda con la opción roja automáticamente.',
      },
      {
        question: '¿Qué es el boleto rojo?',
        answer:
          'El rojo y el verde son los colores que marcan una elección que hace el protagonista. La combinación de rosa y rojo significa que el Ticket Taker elige la opción roja por él.',
      },
      {
        question: '¿Es el Ticket Taker el hombre del café?',
        answer:
          'El wiki de fans identifica a la figura "Desconocido" del café que entrega al protagonista el boleto rosa como el Ticket Taker disfrazado. Es una identificación derivada de fans, y es el mismo boleto rosa que da inicio al final "Missing".',
      },
      {
        question: '¿Por qué es importante el Ticket Taker si no tiene ruta?',
        answer:
          'Controla el sistema de boletos, una de las pocas mecánicas confirmadas del juego, y es el personaje que establece la frontera entre el protagonista como visitante y como participante.',
      },
    ],
  },
};
