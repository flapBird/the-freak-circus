// Traducción al español del contenido largo de las guías (finales y rutas,
// medidas de los personajes, guardado, descarga y FAQ general).
//
// Este archivo es deliberadamente autónomo: no modifica ni depende de cambios
// en topic-content.ts, de modo que la versión en español pueda publicarse sin
// tocar la estructura editorial de los demás idiomas.
//
// Cada afirmación conserva la misma actitud que el original inglés: lo que el
// desarrollador ha confirmado, lo que está planeado y lo que sigue sin
// verificarse. Los `related` son slugs internos y se copian literalmente del
// original inglés.

import type { GuidePage } from './topic-content';

export const guideContentEs: Record<string, GuidePage> = {
  endings: {
    slug: 'endings',
    title: 'Finales y rutas de The Freak Circus',
    metaTitle: 'Guía de finales de The Freak Circus: todas las rutas y desenlaces',
    metaDescription:
      '¿Cuántos finales tiene The Freak Circus? El final malo "Missing" confirmado, los cuatro finales planeados, qué personajes tienen ruta y qué ha confirmado realmente el desarrollador.',
    intro:
      'Los finales son el tema más buscado de este juego y también el que más se malinterpreta. La versión pública actual contiene exactamente un final. Todo lo demás que aparece en guías, wikis y vídeos es o trabajo planeado o interpretación de la fandom. Esta página separa ambas cosas y enlaza cada afirmación con el lugar donde el desarrollador la dijo.',
    quickFacts: [
      { label: 'Finales jugables ahora', value: '1', note: 'El final malo "Missing" del Día 1' },
      {
        label: 'Finales anunciados como planeados',
        value: '4',
        note: 'Pierrot, Harlequin, la Protagonista, "All together"',
      },
      { label: 'Versión actual', value: 'Versión 0.2 (prototipo)' },
      { label: 'Opciones de ruta confirmadas', value: 'Pierrot, Harlequin, ambos o ninguno' },
      { label: 'Estado del Día 3', value: 'En desarrollo, sin fecha anunciada' },
    ],
    sections: [
      {
        heading: 'El único final que existe de verdad',
        paragraphs: [
          'La versión 0.2 contiene un solo final, y es malo. Se alcanza en el Día 1: si la protagonista no hace nada mientras un hombre se burla de Pierrot delante de un público, una figura desconocida le entrega un boleto rosa, la lleva hasta la carpa rosa y todos los miembros del circo le niegan la entrada. El juego dice sin rodeos que la protagonista no logró llamar la atención de Pierrot y acabó con un final trágico.',
          'Esto importa más de lo que parece. Mucho material de fans describe cuatro o más finales como si ya se pudieran alcanzar. En la versión actual, elegir entre rutas todavía está en desarrollo: las ramificaciones existen, las conclusiones no.',
        ],
      },
      {
        heading: 'Los cuatro finales planeados',
        paragraphs: [
          'El desarrollador enumera cuatro desenlaces en la página oficial y en el FAQ oficial. Dos son finales románticos, uno está pensado deliberadamente sin romance y el otro es un final poliamoroso.',
        ],
        list: [
          'El final de Pierrot (romance) — Un desenlace romántico en el que la protagonista termina con Pierrot. El desarrollador lo lista como trabajo planeado y lo describe repetidamente como algo aún en desarrollo.',
          'El final de Harlequin (romance) — Un desenlace romántico en el que la protagonista termina con Harlequin. El desarrollador lo lista como trabajo planeado; su guion no está terminado.',
          'El final de la Protagonista (sin romance) — Un desenlace en el que la protagonista termina la historia sin romance. El desarrollador ha confirmado que esta ruta existe como concepto y que aun así se pueden elegir amistades.',
          '"All together" (final poliamoroso) — Un desenlace en el que la protagonista se enamora de Pierrot y de Harlequin al mismo tiempo. Anunciado como planeado, no como contenido ya implementado.',
        ],
      },
      {
        heading: 'A qué personajes puedes hacer ruta de verdad',
        paragraphs: [
          'La respuesta oficial es estrecha: Pierrot, Harlequin, ambos o ninguno. La ruta de la Protagonista es la opción "ninguno", y el desarrollador ha confirmado que no incluye romance, aunque te deja elegir si haces amistad con el reparto.',
          'No existe ruta para Jester, Ticket Taker ni Doctor. El desarrollador ha dicho que, si más adelante se añadieran rutas, lo más probable es que llegaran como contenido adicional o DLC, y que eso no está decidido. Convertir a los personajes restantes en opciones románticas se describe como una posibilidad, no como una promesa.',
        ],
      },
      {
        heading: 'Qué significa realmente el final poliamoroso',
        paragraphs: [
          'El desarrollador define el final "All together" como aquel en el que la protagonista se enamora de Pierrot y de Harlequin al mismo tiempo. Es un desenlace listado por separado, no una variante secundaria de ninguna de las dos rutas románticas, y sigue siendo trabajo planeado.',
        ],
      },
      {
        heading: 'Por qué las guías no coinciden en el número de finales',
        paragraphs: [
          'Distintos sitios dan cifras distintas porque responden a preguntas distintas. Algunos cuentan solo lo que es jugable, otros solo lo que el desarrollador ha nombrado, y otros mezclan desenlaces planeados con teorías de la fandom. Contrastar cualquier afirmación con los tres grupos anteriores —implementado, planeado o sin verificar— es la forma más rápida de situarla.',
          'Aplican además dos advertencias más. El desarrollador ha dicho que el guion todavía está en revisión, así que los finales planeados pueden cambiar. Y no existe un número oficial de finales: la respuesta a "¿cuántos finales habrá?" es que hay varios planeados, pero todavía no se puede dar una cifra.',
        ],
      },
      {
        heading: 'Qué esperar del Día 3',
        paragraphs: [
          'El Día 3 es el siguiente día dentro del juego y está en desarrollo activo. Las actualizaciones de desarrollo han descrito secciones de beta terminadas y sitúan la beta en torno al 30–40% de la actualización, con un guion más extenso que el del Día 2 y contenido adicional de finales malos descrito. No se ha anunciado ninguna fecha de lanzamiento, y el desarrollador ha pedido que no se repitan las fechas que circulan fuera de sus canales.',
          'Como el Día 3 es donde se están escribiendo los nuevos desenlaces, esta página es la que conviene volver a consultar tras la próxima actualización oficial.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuántos finales tiene The Freak Circus?',
        answer:
          'En la versión actual se puede jugar un final. Otros cuatro se han anunciado como planeados: Pierrot, Harlequin, la Protagonista y "All together". El desarrollador ha dicho que hay varios finales planeados, pero no puede dar una cifra total.',
      },
      {
        question: '¿Cómo consigo el final "Missing"?',
        answer:
          'Es el único final implementado. En el Día 1, no hagas nada mientras se burlan de Pierrot: a la protagonista le dan un boleto rosa, la llevan a la carpa rosa y el circo la echa.',
      },
      {
        question: '¿Cómo consigo el final de Harlequin?',
        answer:
          'Todavía no hay una guía de pasos, porque el final no está implementado. La ruta de Harlequin está en desarrollo. Cualquier lista de pasos publicada en internet estaría describiendo una versión que no existe públicamente.',
      },
      {
        question: '¿Pierrot tiene final?',
        answer:
          'Se ha anunciado un final romántico de Pierrot y está en desarrollo, pero no está en la versión pública. El desarrollador describe el guion y los finales como un trabajo todavía en curso.',
      },
      {
        question: '¿Hay ruta de Jester, Doctor o Ticket Taker?',
        answer:
          'No. Las opciones de ruta confirmadas son Pierrot, Harlequin, ambos o ninguno. Las rutas de otros personajes llegarían probablemente como contenido adicional o DLC, y eso no está decidido.',
      },
      {
        question: '¿Se puede jugar con la protagonista sin romance con ningún personaje?',
        answer:
          'Sí. La ruta de la Protagonista existe como concepto y no incluye romance, pero aun así puedes elegir hacer amistad con el reparto.',
      },
      {
        question: '¿Cuántos finales tendrá el juego terminado?',
        answer:
          'El desarrollador ha dicho que hay varios finales planeados pero no puede dar una cifra. El guion sigue en revisión, así que la lista de arriba puede cambiar.',
      },
      {
        question: '¿El Día 3 añadirá finales?',
        answer:
          'El Día 3 está en desarrollo activo, y las actualizaciones de desarrollo han descrito contenido adicional de finales malos y escenas ocultas. No se ha anunciado ninguna fecha de lanzamiento.',
      },
    ],
    related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
  },
  heights: {
    slug: 'characters/heights',
    title: 'Alturas, orden de edad y rankings de los personajes',
    metaTitle: 'Tabla de alturas de The Freak Circus: todos los personajes ordenados',
    metaDescription:
      'Tabla de alturas oficial de los personajes de The Freak Circus — Pierrot, Harlequin, Jester, Doctor y Ticket Taker — con el orden de edad publicado y el ranking de fuerza.',
    intro:
      'El desarrollador publicó una tabla de alturas junto con la referencia de sprites, y además un orden de edad aparte. Esas dos listas son la razón por la que las preguntas sobre la estatura de este juego tienen una respuesta definitiva, y también la razón por la que muchas listas de internet se equivocan. Esta página reproduce las cifras publicadas y señala dónde acaba la clasificación.',
    quickFacts: [
      { label: 'El más alto', value: 'Doctor — 207 cm', note: 'Unos 6 pies 9,5 pulgadas' },
      { label: 'El más bajo', value: 'Ticket Taker — 183 cm', note: 'Unos 6 pies 0 pulgadas' },
      { label: 'Diferencia de estatura', value: '24 cm', note: 'Entre el más alto y el más bajo' },
      { label: 'El mayor', value: 'Ticket Taker', note: 'Orden de edad oficial, de mayor a menor' },
      { label: 'El más joven', value: 'Harlequin', note: 'Orden de edad oficial, de mayor a menor' },
      { label: 'El más fuerte', value: 'Pierrot', note: 'Ranking de fuerza bruta del desarrollador' },
    ],
    sections: [
      {
        heading: 'La tabla de alturas oficial',
        paragraphs: [
          'La tabla la publicó el desarrollador como referencia para dibujar los sprites. Enumera cinco personajes, que son todos los personajes presentados en la versión actual. Las cifras de abajo son los valores publicados, no estimaciones sacadas del arte.',
        ],
      },
      {
        heading: 'El orden de edad oficial',
        paragraphs: [
          'Una publicación AMA aparte respondió a la petición de ordenar al reparto de mayor a menor. El orden es Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Nunca se ha publicado una edad numérica para ninguno de ellos, y este orden es la única información sobre edades que el desarrollador ha dado.',
        ],
        list: [
          '1. Ticket Taker — 183 cm de altura',
          '2. Doctor — 207 cm de altura',
          '3. Pierrot — 198 cm de altura',
          '4. Jester — 192 cm de altura',
          '5. Harlequin — 187 cm de altura',
        ],
      },
      {
        heading: 'El ranking de fuerza',
        paragraphs: [
          'El desarrollador también publicó un ranking de fuerza física bruta, independiente de la estatura. Es este: Pierrot en primer lugar, Harlequin y Jester empatados en el segundo, Doctor tercero y Ticket Taker el último. El ranking se publicó como respuesta secundaria a una pregunta de un fan, más que como una mecánica del juego, así que conviene leerlo como caracterización y no como una pantalla de estadísticas.',
        ],
        list: [
          'Pierrot — puesto 1',
          'Harlequin — puesto 2 (empatado)',
          'Jester — puesto 2 (empatado)',
          'Doctor — puesto 3',
          'Ticket Taker — puesto 4',
        ],
      },
      {
        heading: 'Lo que la tabla no cubre',
        paragraphs: [
          'La tabla solo cubre a los cinco personajes presentados. Columbina, cuya muerte da forma al trasfondo de ambos protagonistas, no aparece en la tabla publicada, y no se ha encontrado ninguna altura oficial para ella. Una altura suya que circula por wikis de fans no es información de primera mano.',
          'Los cumpleaños también están repartidos de forma desigual. Un cumpleaños se ha confirmado mediante una publicación oficial; el resto de las fechas que circulan por internet proceden de los fans y deben entenderse como tales.',
        ],
      },
      {
        heading: 'Por qué no coinciden las listas de personajes',
        paragraphs: [
          'La mayoría de las discrepancias vienen de mezclar la tabla publicada con edades y cumpleaños atribuidos por los fans, y presentar el resultado como oficial. Las cifras de estatura y el orden relativo de edades están documentados. Las edades exactas, la mayoría de los cumpleaños y cualquier dato sobre un sexto personaje no lo están.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto mide Pierrot en The Freak Circus?',
        answer:
          'Pierrot mide 198 cm, unos 6 pies 5,95 pulgadas, en la tabla de alturas publicada por el desarrollador.',
      },
      {
        question: '¿Cuánto mide Harlequin?',
        answer:
          'Harlequin mide 187 cm, unos 6 pies 1,62 pulgadas. Es el más bajo de los dos protagonistas románticos y el más joven de los cinco.',
      },
      {
        question: '¿Quién es el personaje más alto?',
        answer: 'Doctor, con 207 cm — unos 6 pies 9,5 pulgadas. Es 9 cm más alto que Pierrot.',
      },
      {
        question: '¿Quién es el personaje más bajo?',
        answer: 'Ticket Taker, con 183 cm — unos 6 pies 0 pulgadas. También es el mayor de los cinco.',
      },
      {
        question: '¿Qué personaje es el mayor?',
        answer:
          'El orden de edad oficial, de mayor a menor, es Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin es el más joven.',
      },
      {
        question: '¿Quién es el más fuerte?',
        answer:
          'Pierrot ocupa el primer lugar en la lista de fuerza del desarrollador, con Harlequin y Jester empatados en el segundo, Doctor tercero y Ticket Taker el último.',
      },
      {
        question: '¿Qué edad tiene Harlequin?',
        answer:
          'No se ha publicado ninguna edad numérica. Es el más joven de los cinco según el orden de edad oficial. Las edades numéricas que aparecen en sitios de fans no son información de primera mano.',
      },
      {
        question: '¿Cuánto mide Columbina?',
        answer:
          'No se ha publicado ninguna altura oficial para ella. No aparece en la tabla del desarrollador, que cubre a los cinco personajes presentados.',
      },
    ],
    related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
  },
  save: {
    slug: 'save',
    title: 'Cómo guardar y continuar',
    metaTitle: 'Cómo guardar The Freak Circus: continuar, ranuras y partidas del navegador',
    metaDescription:
      'Cómo guardar y continuar The Freak Circus en navegador, PC, Mac y Android: lo que el motor Ren\'Py hace por defecto y qué detalles del guardado no ha documentado el desarrollador.',
    intro:
      'El guardado es donde menos fiables son las guías de fans. Varios sitios publican rutas exactas de guardado, número de ranuras y procedimientos para pasar una partida del navegador al escritorio, y el desarrollador nunca publicó nada de eso. Esta página describe lo que sí se sabe de verdad —el comportamiento del motor y el punto de entrada confirmado al Día 2— y lo separa de lo que sigue sin documentarse.',
    quickFacts: [
      {
        label: 'Motor',
        value: "Ren'Py",
        note: 'Guardar, cargar, guardado rápido y vuelta atrás (rollback)',
      },
      {
        label: 'Continuar sin repetir el Día 1',
        value: 'Sí',
        note: 'El menú ofrece un punto de entrada al Día 2',
      },
      { label: 'Juego en el navegador', value: 'Compatible', note: 'Servido desde la página oficial de itch.io' },
      { label: 'Documentación oficial del guardado', value: 'No publicada' },
      { label: 'Número de ranuras de guardado', value: 'Sin confirmar' },
      { label: 'Transferencia del navegador al escritorio', value: 'Sin confirmar para este juego' },
    ],
    sections: [
      {
        heading: 'Lo que el juego soporta de serie',
        paragraphs: [
          'The Freak Circus está hecho en Ren\'Py, un motor de novela visual estándar. Eso significa que usa la interfaz habitual del motor: un botón de guardar que abre una lista de ranuras, un botón de cargar, ranuras de guardado rápido y de carga rápida, y vuelta atrás en el historial. Si has jugado a otro título de Ren\'Py, el comportamiento te resultará familiar.',
          'También se ofrece una versión para navegador, servida a través de la página oficial de itch.io. El desarrollador ha documentado los bloqueos específicos del navegador y sus soluciones, lo que confirma que jugar en el navegador es una vía mantenida y no un accidente.',
        ],
      },
      {
        heading: 'El punto de entrada al Día 2',
        paragraphs: [
          'Hay una función relacionada con el progreso y que sí está confirmada: el menú incluye un botón para el Día 2 con una breve introducción, así que puedes continuar en el Día 2 sin volver a jugar el Día 1. Le viene bien a quien quiera volver al contenido actual sin repetir la apertura.',
        ],
      },
      {
        heading: 'Dónde se guardan las partidas en el escritorio',
        paragraphs: [
          'Las versiones de escritorio de Ren\'Py guardan las partidas en una carpeta propia de cada proyecto dentro del directorio de datos del usuario. La ruta exacta cambia entre Windows, macOS y Linux, y el juego se ha distribuido bajo más de un nombre de proyecto. No publicamos aquí una ruta concreta porque el desarrollador nunca ha documentado ninguna para este juego, y una ruta equivocada en una guía solo lleva a la gente a buscar carpetas que no existen.',
          'Si necesitas la ruta para tu propio equipo, el método fiable es abrir el menú de cargar o guardar dentro del juego y usar la acción de gestión de partidas del overlay del motor (el panel de utilidades de Ren\'Py), que abre directamente la carpeta correcta para la plataforma en la que estás.',
        ],
      },
      {
        heading: 'Las partidas del navegador y por qué pueden desaparecer',
        paragraphs: [
          'Las versiones de navegador guardan el progreso en el almacenamiento del propio navegador y no en un archivo que tú controlas. Eso tiene una consecuencia práctica: borrar los datos del sitio, usar una ventana privada o ciertas configuraciones de privacidad agresivas eliminarán las partidas sin aviso. También significa que una partida del navegador queda atada al navegador y al perfil que la creó.',
          'Esto es comportamiento del motor y no un capricho de este juego, y es el motivo más habitual de que los jugadores reporten haber perdido el progreso.',
        ],
      },
      {
        heading: 'Mover una partida entre el navegador y el escritorio',
        paragraphs: [
          'Ren\'Py ofrece acciones de exportar e importar partidas en su overlay del motor. Que eso produzca un flujo fiable para pasar una partida del navegador a una versión de escritorio de este juego en concreto no lo ha confirmado el desarrollador, y los informes varían según el navegador y la plataforma.',
          'Trátalo como algo que merece la pena probar y no como un procedimiento garantizado, y haz una copia de seguridad de lo que te importe antes de experimentar.',
        ],
      },
      {
        heading: 'Afirmaciones que deliberadamente no repetimos',
        paragraphs: [
          'Las siguientes circulan mucho y se presentan como hechos en varias guías de fans. Ninguna viene del desarrollador, y esta página no las repetirá como algo zanjado:',
        ],
        list: [
          'El juego admite un número concreto de ranuras de guardado, guarda automáticamente a intervalos fijos o almacena las partidas en una carpeta con un nombre determinado. — No existe documentación oficial sobre el guardado. Las versiones de Ren\'Py usan una ubicación estándar, pero el desarrollador no ha publicado detalles concretos.',
          'Las partidas del navegador se pueden exportar a un archivo zip e importar en una versión de escritorio. — Ren\'Py ofrece una acción de exportar e importar en su overlay del motor, pero el desarrollador no ha confirmado un flujo de navegador a escritorio para este juego.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cómo guardo en The Freak Circus?',
        answer:
          'Es una versión de Ren\'Py, así que usa los botones estándar de guardar y cargar del motor, con una lista de ranuras, guardado y carga rápidos, y vuelta atrás en el historial.',
      },
      {
        question: '¿Puedo saltar directamente al Día 2?',
        answer:
          'Sí. El menú incluye un botón para el Día 2 con una breve introducción, así que puedes continuar en el Día 2 sin repetir el Día 1.',
      },
      {
        question: '¿Por qué ha desaparecido mi partida del navegador?',
        answer:
          'Las versiones de navegador guardan el progreso en el almacenamiento del navegador. Borrar los datos del sitio, usar una ventana privada o tener ajustes de privacidad estrictos puede eliminarlo. Además, una partida del navegador queda atada al perfil de navegador que la creó.',
      },
      {
        question: '¿Dónde están mis archivos de guardado en PC o Mac?',
        answer:
          'Ren\'Py guarda las partidas en una carpeta propia de cada proyecto dentro del directorio de datos de usuario del sistema, y la ruta cambia según la plataforma y el nombre de la versión. El desarrollador no ha publicado ninguna ruta para este juego, así que usa la acción de gestión de partidas del overlay del motor, desde el menú del juego, para abrir la carpeta correcta en tu equipo.',
      },
      {
        question: '¿Puedo pasar una partida del navegador a la versión de escritorio?',
        answer:
          'Ren\'Py ofrece acciones de exportar e importar partidas. Que funcionen de forma fiable para mover una partida del navegador a una versión de escritorio de este juego no está confirmado, así que trátalo como algo que merece la pena probar y haz una copia de seguridad antes.',
      },
      {
        question: '¿Cuántas ranuras de guardado hay?',
        answer:
          'El desarrollador no lo ha documentado. El número de ranuras viene de la compilación del motor y no de una declaración oficial.',
      },
      {
        question: '¿El juego guarda automáticamente?',
        answer:
          'El comportamiento del guardado automático depende de la compilación del motor. El desarrollador no ha publicado ningún ritmo concreto de guardado automático para este juego.',
      },
      {
        question: '¿Hay problemas conocidos con el guardado en el navegador?',
        answer:
          'El desarrollador ha documentado bloqueos en el navegador en la carpa del Ticket Taker y en algunas secciones animadas, junto con sus soluciones, y también ha señalado que pasar las escenas demasiado rápido puede desincronizar los efectos visuales. Son problemas de reproducción y no de guardado, pero pueden interrumpir una sesión.',
      },
    ],
    related: ['save', 'download', 'faq', 'endings', 'day-3'],
  },
  download: {
    slug: 'download',
    title: 'Dónde jugar y descargar',
    metaTitle: 'Descarga de The Freak Circus: juega gratis en navegador, PC, Mac y Android',
    metaDescription:
      'Dónde jugar The Freak Circus con seguridad: la página oficial de itch.io, las plataformas compatibles, el juego en el navegador y cómo reconocer una descarga falsa.',
    intro:
      'The Freak Circus se distribuye a través de la página de itch.io del desarrollador, que es también la única página oficial del juego. Todo lo demás que dice ofrecer la versión completa es o un mirror o una estafa. Aquí te explicamos cómo conseguir el juego real en cada plataforma y los pocos indicios que delatan una descarga falsa.',
    quickFacts: [
      { label: 'Fuente oficial', value: 'itch.io — la única página oficial' },
      {
        label: 'Precio',
        value: 'Paga lo que quieras',
        note: 'Puedes pagar lo que te parezca justo, incluso 0',
      },
      { label: 'Versión actual', value: 'Versión 0.2' },
      { label: 'Plataformas', value: 'Navegador, Windows, macOS, Linux, Android' },
      { label: 'Idiomas', value: 'Inglés, portugués de Brasil, chino simplificado' },
      { label: 'Doblaje', value: 'Solo en inglés' },
    ],
    sections: [
      {
        heading: 'La única fuente oficial',
        paragraphs: [
          'El juego lo publica Garula en itch.io, y el desarrollador ha declarado que esa página es la única página oficial del juego. Ofrece una opción "Run game" dentro del navegador y versiones descargables para las plataformas de escritorio y móviles que se indican abajo. La opción del navegador no requiere ninguna instalación.',
          'Como es de paga lo que quieras, puedes descargar la versión completa gratis. Pagar es una forma de apoyar a un desarrollador independiente que ha dicho que el desarrollo fue en gran medida en solitario.',
        ],
      },
      {
        heading: 'Plataformas y versiones',
        paragraphs: [
          'La versión 0.2 está disponible en las cinco plataformas. La versión del navegador es la forma más rápida de empezar y es una buena opción si quieres leer una guía mientras juegas.',
        ],
        list: [
          'Navegador web (HTML5) — Se ejecuta en el navegador a través de la página oficial de itch.io',
          'Windows — Versión para PC, versión 0.2',
          'macOS — Versión para Mac, versión 0.2',
          'Linux — Versión para Linux, versión 0.2',
          'Android — Versión en formato APK, versión 0.2',
        ],
      },
      {
        heading: 'Idiomas y doblaje',
        paragraphs: [
          'El juego se publica en inglés, portugués de Brasil y chino simplificado. La traducción al chino se revisó para la versión 0.2, y se ha hablado de añadir más idiomas como traducciones apoyadas por la comunidad.',
          'El doblaje es solo en inglés, interpretado por Darthsuki. El desarrollador ha explicado que añadir más idiomas de doblaje no estaba previsto en un principio y supondría trabajo nuevo.',
        ],
        list: ['Inglés', 'Portugués (Brasil)', 'Chino simplificado'],
      },
      {
        heading: 'Avisos de contenido',
        paragraphs: [
          'El juego tiene clasificación 18+ y el desarrollador publica una lista explícita de advertencias. Conviene leerla antes de jugar, sobre todo si estás decidiendo cuánta parte de la historia prefieres leer antes de empezar.',
        ],
        list: [
          'Temblor de pantalla',
          'Sangre, muerte, asesinato y escenas vagas',
          'Alusiones al canibalismo',
          'Abuso',
          'Lenguaje fuerte',
          'Secuestro',
          'Uso de drogas sin consentimiento',
          'Dominación física',
          'Acoso físico leve y contacto físico sin consentimiento',
        ],
      },
      {
        heading: 'Cómo reconocer una descarga falsa',
        paragraphs: [
          'La señal de alerta más clara es cualquier sitio que ofrezca el juego completo fuera de la página oficial de itch.io. El desarrollador ha pedido explícitamente que el juego no se vuelva a subir ni se reublique, y ha confirmado que no existe un servidor oficial de Discord, así que cualquier servidor debe considerarse gestionado por fans.',
          'Otras cosas que debes tratar como señales de alarma: una app o extensión de navegador de "verificación" obligatoria, una descarga anormalmente pequeña que en realidad resulta ser el instalador de otra cosa, y cualquier petición de desactivar la protección antivirus.',
        ],
      },
      {
        heading: 'Lo que la versión del navegador hace bien y dónde se queda corta',
        paragraphs: [
          'Jugar en el navegador es compatible de verdad y el desarrollador ha corregido problemas específicos del navegador, entre ellos un bloqueo en la carpa del Ticket Taker y algunas secciones animadas. Pasar ciertas escenas muy rápido todavía puede dejar los efectos visuales desincronizados, algo que conviene saber si vas pulsando sin parar.',
          'Si quieres la experiencia más fluida para las múltiples partidas y para buscar rutas, la versión de escritorio te da la interfaz completa de Ren\'Py, con vuelta atrás (rollback).',
        ],
      },
    ],
    faq: [
      {
        question: '¿Dónde puedo jugar The Freak Circus?',
        answer:
          'En la página de itch.io del desarrollador, que es la única página oficial del juego. Ofrece tanto juego en el navegador como versiones descargables.',
      },
      {
        question: '¿The Freak Circus es gratis?',
        answer:
          'En itch.io es de paga lo que quieras, así que puedes descargar la versión completa gratis y pagar lo que te parezca justo si quieres apoyar al desarrollador.',
      },
      {
        question: '¿Puedo jugar The Freak Circus en el móvil?',
        answer:
          'Sí. Se publica una versión para Android junto con las versiones de navegador, Windows, macOS y Linux.',
      },
      {
        question: '¿Hay versión en chino?',
        answer:
          'Sí. El chino simplificado viene con el juego, y la traducción se revisó para la versión 0.2.',
      },
      {
        question: '¿Qué otros idiomas hay?',
        answer:
          'El juego se publica en inglés, portugués de Brasil y chino simplificado, con doblaje solo en inglés. Otros idiomas se han hablado como traducciones de la comunidad.',
      },
      {
        question: '¿Cómo sé si un sitio de descarga es falso?',
        answer:
          'La página oficial de itch.io es la única fuente oficial. El desarrollador ha pedido que el juego no se republique, así que cualquier otro sitio que ofrezca la versión completa está sin licencia, en el mejor de los casos. Nunca instales un programa aparte de "verificación" ni desactives el antivirus para conseguir el juego.',
      },
      {
        question: '¿Me conviene jugar en el navegador o descargar la versión de escritorio?',
        answer:
          'La versión del navegador no necesita instalación y va bien para una primera lectura. La versión de escritorio ofrece la interfaz completa de Ren\'Py con vuelta atrás, mejor para buscar rutas y repetir partidas.',
      },
      {
        question: '¿La versión del navegador tiene bugs?',
        answer:
          'Algunos bloqueos específicos del navegador fueron corregidos por el desarrollador, incluido uno en la carpa del Ticket Taker. Pasar las escenas demasiado rápido todavía puede dejar los efectos visuales desincronizados.',
      },
    ],
    related: ['download', 'save', 'faq', 'endings', 'characters'],
  },
  faq: {
    slug: 'faq',
    title: 'Preguntas frecuentes',
    metaTitle: 'FAQ de The Freak Circus: jugar, guardar, finales, personajes y descarga',
    metaDescription:
      'Respuestas a las preguntas más comunes sobre The Freak Circus: dónde jugar, cómo guardar, cuántos finales existen, la altura de los personajes y qué sigue en desarrollo.',
    intro:
      'Esta es la versión corta del sitio. Si una pregunta tiene su propia guía, aquí damos la respuesta y enlazamos al detalle en lugar de repetirlo. Cuando una respuesta depende de algo que el desarrollador no ha publicado, se dice con claridad en vez de rellenarlo con una suposición que suene razonable.',
    quickFacts: [
      { label: 'Versión actual', value: 'Versión 0.2 (prototipo)' },
      { label: 'Finales jugables', value: '1', note: '"Missing" — un final malo' },
      { label: 'Finales planeados', value: '4' },
      { label: 'Plataformas', value: '5', note: 'Navegador, Windows, macOS, Linux, Android' },
      { label: 'Idiomas', value: '3', note: 'Inglés, portugués, chino simplificado' },
      { label: 'Día 3', value: 'En desarrollo, sin fecha anunciada' },
    ],
    sections: [
      {
        heading: 'Jugar y descargar',
        paragraphs: [
          'Todo lo que hace falta para poner el juego en marcha está en la guía de descarga. En corto: la página oficial de itch.io es la única fuente oficial, es de paga lo que quieras y ofrece tanto juego en el navegador como versiones para escritorio y Android.',
        ],
      },
      {
        heading: 'Guardar y continuar',
        paragraphs: [
          'El juego es una versión estándar de Ren\'Py, así que el guardado funciona a través de la interfaz habitual del motor. El menú también te deja saltar directamente al Día 2 sin repetir el Día 1. Los detalles que se repiten mucho en internet pero que el desarrollador nunca ha confirmado —las rutas exactas de guardado, el número de ranuras y una transferencia garantizada del navegador al escritorio— están marcados como no verificados en la guía de guardado.',
        ],
      },
      {
        heading: 'Finales y rutas',
        paragraphs: [
          'En la versión actual se puede jugar un final, y es un final malo. Hay otros cuatro anunciados como planeados: Pierrot, Harlequin, la Protagonista y "All together". Las opciones de ruta son Pierrot, Harlequin, ambos o ninguno: no existe ruta de Jester, Doctor ni Ticket Taker.',
        ],
      },
      {
        heading: 'Personajes y medidas',
        paragraphs: [
          'El desarrollador publicó una tabla de alturas que cubre a los cinco personajes presentados, y además un orden de edad aparte. Esas dos listas son las únicas medidas oficiales. Las edades exactas, la mayoría de los cumpleaños y la altura de Columbina circulan por internet sin ninguna fuente de primera mano.',
        ],
      },
      {
        heading: 'Lo que sigue en desarrollo',
        paragraphs: [
          'La versión 0.2 contiene las presentaciones de los cinco personajes y un final malo. El Día 3 está en desarrollo activo, con actualizaciones de desarrollo que describen secciones de beta terminadas en torno al 30–40% de la actualización. No se ha anunciado ninguna fecha de lanzamiento, y el desarrollador ha pedido que no se repitan las fechas que circulan fuera de sus canales.',
        ],
      },
      {
        heading: 'Sobre este sitio',
        paragraphs: [
          'Este es una guía de fans independiente. No es el desarrollador, ni la editora, ni un canal oficial de soporte. El desarrollador ha confirmado que no existe un servidor oficial de Discord, así que cualquier servidor o cuenta que no esté enlazada desde las páginas oficiales de itch.io, Tumblr, Patreon o Bluesky debe considerarse gestionado por fans o no autorizado.',
        ],
      },
    ],
    faq: [
      {
        question: '¿Dónde puedo jugar The Freak Circus?',
        answer:
          'En la página de itch.io del desarrollador, que es la única página oficial del juego. Ofrece juego en el navegador y versiones descargables para Windows, macOS, Linux y Android.',
      },
      {
        question: '¿Cómo descargo The Freak Circus de forma segura?',
        answer:
          'Usa solo la página oficial de itch.io. El desarrollador ha pedido que el juego no se republique, así que cualquier otro sitio que ofrezca la versión completa está sin licencia.',
      },
      {
        question: '¿Cómo guardo The Freak Circus?',
        answer:
          'Es una versión de Ren\'Py, así que usa la interfaz estándar de guardar y cargar del motor, con guardado rápido y vuelta atrás.',
      },
      {
        question: '¿Puedo continuar desde el Día 2 sin repetir el Día 1?',
        answer: 'Sí. El menú incluye un botón para el Día 2 con una breve introducción.',
      },
      {
        question: '¿Cuántos finales hay?',
        answer:
          'Ahora mismo se puede jugar uno: el final malo "Missing". Hay otros cuatro planeados: Pierrot, Harlequin, la Protagonista y "All together". No se ha anunciado ninguna cifra total.',
      },
      {
        question: '¿Cómo consigo el final de Harlequin?',
        answer:
          'Todavía no puedes: está planeado y no implementado. Cualquier lista de pasos publicada estaría describiendo una versión que no existe públicamente.',
      },
      {
        question: '¿Cuánto mide Pierrot?',
        answer:
          '198 cm, unos 6 pies 5,95 pulgadas, en la tabla de alturas publicada por el desarrollador.',
      },
      {
        question: '¿Quién es el personaje mayor?',
        answer:
          'Ticket Taker, según el orden de edad oficial: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
      },
      {
        question: '¿Por qué no puede hablar Pierrot?',
        answer:
          'La sinopsis oficial lo describe como el "yandere" silencioso. Un "yandere" (un tipo de enamorado obsesivo y peligroso) es aquí un personaje que expresa su afecto en forma de obsesión y control. Su silencio es una decisión deliberada de la caracterización, no la ausencia de una voz doblada. Las explicaciones sobre el motivo dentro de la ficción vienen del material de la historia y no de una declaración del desarrollador.',
      },
      {
        question: '¿Cuándo saldrá el Día 3?',
        answer:
          'No tiene fecha anunciada. Está en desarrollo activo, con el trabajo de beta descrito en torno al 30–40% de la actualización.',
      },
      {
        question: '¿Hay un servidor oficial de Discord?',
        answer:
          'No. El desarrollador ha confirmado que no hay servidor oficial, así que cualquier servidor de la comunidad debe considerarse gestionado por fans.',
      },
      {
        question: '¿Puedo hacer fan art de los personajes?',
        answer:
          'Sí. El fan art es una parte normal del fandom. Este sitio selecciona obras de la comunidad con permiso de sus autores y con atribución, y no aloja archivos del juego ni reempaqueta el juego.',
      },
    ],
    related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
  },
};
