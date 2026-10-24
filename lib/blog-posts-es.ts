import type { BlogPost } from './blog-posts';

// Spanish edition of the blog posts.
//
// This mirrors POSTS_EN in blog-posts.ts: same slugs, same order, same dates,
// same images, same HTML structure (heading/list counts and order). The English
// version is the source of truth; this file only re-expresses it in Spanish
// prose. Every hedge in the English text survives the translation — planned
// stays planned, unverified stays unverified.

export const POSTS_ES: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'Guía del Día 2 de The Freak Circus: carpas, partidas guardadas y el final malo',
    description: 'Una guía de la versión 0.2 con avisos de spoilers sobre la apertura del cautiverio, las carpas del circo, las presentaciones de personajes, los puntos de guardado y la forma más segura de explorar el Día 2 sin confundir variaciones de escena con rutas terminadas.',
    date: '2026-09-02',
    tags: ['Día 2', 'Paso a paso', 'Versión 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'El reparto de The Freak Circus reunido en torno a la protagonista',
    readingTime: '10 min de lectura',
    content: `
      <p class="article-lede">El Día 2 es donde <em>The Freak Circus</em> deja de sentirse como una presentación inquietante y empieza a cerrar la mano en torno a la protagonista. La pregunta útil no es «¿qué ruta terminada debo fijar?» —en la versión 0.2 no existe un final terminado de Pierrot ni de Harlequin—, sino «¿dónde debo guardar para ver las variaciones disponibles sin rejugarme todo el prototipo?»</p>
      <div class="walkthrough-note"><strong>Límite de esta guía</strong><p>Este artículo cubre el prototipo público de la versión 0.2 y contiene spoilers de la historia. La ficha oficial confirma cinco presentaciones de personajes y un final malo. No confirma varias rutas terminadas, un sistema de coleccionables ni un menú de escenas ocultas desbloqueables.</p></div>

      <h2>Crea estos guardados antes de que empiece la presión</h2>
      <p>El Día 2 es lo bastante corto para rejugarlo, pero su apertura es lo bastante larga para que repetirla solo con tal de probar una respuesta se vuelva tedioso. Mantén ranuras separadas en vez de sobrescribir el último guardado:</p>
      <ol class="walkthrough-steps">
        <li><strong>DÍA 2 — INICIO:</strong> el primer momento en que el nuevo día te da el control.</li>
        <li><strong>SALA DE CAUTIVERIO:</strong> antes de comprometerte con una respuesta tensa con Pierrot o Harlequin.</li>
        <li><strong>REGRESO AL CIRCO:</strong> antes de entrar en una carpa de atracción.</li>
        <li><strong>RAMA DE LA CARPA:</strong> una ranura nueva para cada carpa o presentación de personaje.</li>
        <li><strong>ESCENA TARDÍA:</strong> antes de cualquier elección que suene definitiva, desafiante o deliberadamente peligrosa.</li>
      </ol>
      <p>Esto es más fiable que un único guardado continuo. Si una escena termina antes de lo esperado —o llega al final malo—, todavía tienes un punto limpio a pocos minutos de distancia.</p>

      <h2>La apertura en la sala de cautiverio: lee el contraste, no un medidor de afecto</h2>
      <p>El día se abre con la protagonista sujeta en una habitación desconocida. Pierrot presenta sus actos como protección; la llegada de Harlequin convierte esa afirmación en un enfrentamiento. La escena importa porque establece lo diferente que es la forma en que los dos rivales ejercen el control, no porque te pida seleccionar una ruta romántica permanente.</p>
      <p>En una primera partida, responde de la forma que te resulte natural y sigue avanzando. En una rejugada, vuelve al guardado <strong>SALA DE CAUTIVERIO</strong> y cambia una respuesta cada vez. Así se ve con claridad si encontraste una variación de escena genuina o simplemente una réplica distinta.</p>
      <div class="walkthrough-tip"><strong>No sobreinterpretes los objetos.</strong><p>La máscara y el boleto rojo son objetos con significado en la historia, pero la versión 0.2 no establece un inventario convencional en el que coleccionarlos desbloquee futuros finales. Los colores de los boletos sí tienen un significado confirmado en este juego —el rojo y el verde marcan una elección que hace la protagonista, y el rosa queda por debajo del reparto principal—, pero eso es una señal de ramificación y no una lista de coleccionables. Trata la máscara como un objeto de escena, a menos que el propio juego presente una interacción posterior.</p></div>

      <h2>De vuelta al circo: cómo explorar las carpas</h2>
      <p>La sección del circo amplía el reparto a través de espacios temáticos. La mejor estrategia es simple: guarda antes de entrar, termina la escena sin saltarla y luego usa ese guardado para la siguiente variación. No des por hecho que una presentación de personaje es una ruta completa.</p>

      <h3>Carpa azul — Ticket Taker y los espejos</h3>
      <p>La secuencia de los espejos está construida para que la información visual parezca poco fiable. Observa con atención qué reflejo está hablando y cómo Ticket Taker enmarca lo que ves. No hace falta resolver cada imagen como un puzle en la primera visita; el objetivo práctico es terminar la presentación y conservar un guardado para una segunda lectura más pausada.</p>

      <h3>Carpa cian — el Doctor</h3>
      <p>La presentación del Doctor es la que más apuesta por la contención, el examen y la imaginería de terror médico. Si esos temas te resultan incómodos, este es el momento de usar los controles de salto con cautela o hacer una pausa. Desde la perspectiva de las rutas, obedecer o resistir puede cambiar la textura del intercambio, pero ninguna de las dos cosas debe anunciarse como una ruta o un final terminado del Doctor.</p>

      <h3>Espacio de actuación morado o negro — Jester</h3>
      <p>La actuación de Jester contiene parte del lore más denso del Día 2. Deja que el diálogo avance con normalidad en lugar de saltarlo rápido. Y lo más importante: trata la actuación como una historia contada <em>dentro</em> del juego: revela cómo habla el circo de su pasado, pero no es automáticamente un relato neutral y completo de los motivos de cada personaje.</p>

      <h2>Cómo proteger tu partida del final malo</h2>
      <p>La descripción oficial de la versión enumera un final malo. Una guía prudente no debería inventar una «respuesta correcta» universal sin una prueba reproducible de elecciones, así que usa el propio juego como señal:</p>
      <ul>
        <li>Guarda antes de respuestas abiertamente peligrosas o que suenen definitivas.</li>
        <li>Si la historia corta a un final o vuelve al menú, carga el guardado de rama más reciente.</li>
        <li>Cambia primero solo la última respuesta con significado; no reinicies el Día 2 de inmediato.</li>
        <li>Conserva el guardado del final malo si quieres un registro completo del prototipo actual.</li>
      </ul>
      <p>Lo más importante: llegar al final malo no significa que el guardado esté arruinado. Significa que encontraste uno de los pocos desenlaces que la versión actual dice explícitamente que están disponibles.</p>

      <h2>Un recorrido limpio en dos pasadas</h2>
      <div class="walkthrough-route"><div><strong>Primera pasada — historia</strong><p>Juega de forma continua, elige con naturalidad y guarda solo en los cinco puntos de control anteriores. Evita las guías durante las escenas en sí.</p></div><div><strong>Segunda pasada — cobertura</strong><p>Vuelve a los guardados de las carpas y de las escenas tardías. Invierte una respuesta importante cada vez y anota qué cambia de verdad.</p></div></div>
      <p>Este método es menos vistoso que un enorme gráfico de «todos los finales», pero encaja con la versión que existe de verdad. La versión 0.2 es un prototipo denso en presentaciones; no es una colección de rutas terminadas.</p>

      <h2>¿Qué cuenta como terminar el Día 2?</h2>
      <p>Estás al día cuando llegas al final de la historia pública actual, no cuando desbloqueas un final romántico definitivo que no existe. Una partida completa debería dejarte con:</p>
      <ul class="walkthrough-checklist">
        <li>el conflicto de la sala de cautiverio visto sin saltarlo;</li>
        <li>el guardado del regreso al circo conservado;</li>
        <li>las presentaciones de Ticket Taker, Doctor y Jester vistas;</li>
        <li>el final malo registrado o evitado con seguridad;</li>
        <li>un guardado final limpio, listo para una futura actualización oficial.</li>
      </ul>
      <p>El Día 3 sigue en desarrollo. Conserva ese guardado final, pero consulta las notas de las próximas versiones antes de suponer que las elecciones de la versión 0.2 se trasladarán sin cambios a la siguiente versión pública.</p>

      <h2>Afirmaciones que esta guía deliberadamente no hace</h2>
      <p>Algunas guías describen varios finales terminados, una galería de escenas ocultas, insignias coleccionables con efectos mecánicos futuros o rutas plenamente disponibles para cada personaje presentado. La página oficial no confirma actualmente ninguna de esas cosas como funciones terminadas. Para consultar el estado verificado, usa el <a href="/es/day-3">rastreador del Día 3</a> y la <a href="/es/wiki">Wiki de la versión 0.2</a> de este sitio.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'Guía del Día 1 de The Freak Circus: una primera partida prudente',
    description: 'Una guía práctica de la versión 0.2 para conocer a Pierrot, leer la rivalidad inicial, colocar guardados útiles y llegar al Día 2 sin perseguir rutas que aún no están terminadas.',
    date: '2026-09-02',
    tags: ['Día 1', 'Paso a paso', 'Jugadores nuevos'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Una escena del prototipo actual de The Freak Circus',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">El Día 1 funciona mejor cuando dejas que sea incómodo. Presenta a Pierrot en un paseo ordinario camino del trabajo y luego convierte poco a poco un pequeño encuentro en el comienzo de una rivalidad peligrosa. No necesitas una hoja de respuestas perfecta para llegar al Día 2; necesitas unos cuantos guardados bien pensados y una idea clara de lo que el prototipo actual puede —y no puede— resolver.</p>
      <div class="walkthrough-note"><strong>Límite de esta guía</strong><p>Esta es una guía con avisos de spoilers para la versión pública 0.2. Explica la progresión y la estrategia de rejugada sin fingir que Pierrot, Harlequin o el resto del reparto ya tienen finales terminados.</p></div>
      <div class="walkthrough-note"><strong>Sobre el guardado</strong><p>El desarrollador no ha publicado ubicaciones de guardado, números de ranuras, el comportamiento del guardado automático ni ningún procedimiento para pasar partidas del navegador al escritorio en este juego. Los nombres de guardado de abajo son etiquetas que tú les das a tus propias ranuras con la interfaz estándar de guardar y cargar del motor, no nombres de archivo oficiales.</p></div>

      <h2>Antes de empezar: prepara una partida que puedas revisitar de verdad</h2>
      <p>Las advertencias oficiales de contenido incluyen sangre, muerte, abuso, secuestro, consumo de drogas sin consentimiento, dominación física y contacto no deseado. El Día 1 no muestra todas las advertencias a máxima intensidad, pero establece el tono. Decide si esos temas son adecuados para ti antes de perseguir completarlo todo.</p>
      <p>Usa tres ranuras con nombre desde el principio:</p>
      <ol class="walkthrough-steps">
        <li><strong>DÍA 1 — LIMPIO:</strong> antes de la primera elección sustancial.</li>
        <li><strong>PIERROT — CALLE:</strong> antes de elegir cómo responder durante el encuentro de camino al trabajo.</li>
        <li><strong>DÍA 1 — TARDÍO:</strong> antes del último grupo de escenas que lleva la historia hacia el Día 2.</li>
      </ol>
      <p>No sigas guardando sobre la primera ranura. Un punto de control limpio es más útil que una captura de las elecciones de otra persona, porque puedes probar la versión actual por tu cuenta.</p>

      <h2>El encuentro en la calle con Pierrot</h2>
      <p>La presentación de Pierrot es el punto de apoyo emocional del Día 1. La escena pregunta cómo reacciona la protagonista ante un desconocido silencioso al que ya se trata como a un extraño. La escritura funciona mejor cuando eliges una respuesta con la que puedas comprometerte, en lugar de intentar descifrar una invisible «puntuación de amor».</p>
      <p>En la primera pasada mantén la coherencia: si te acercas con preocupación, conserva ese tono durante toda la escena; si desconfías, deja que la incomodidad permanezca. En la segunda pasada, carga <strong>PIERROT — CALLE</strong> y cambia solo la primera respuesta importante. Compara el diálogo y el lenguaje corporal en lugar de suponer que la rama ha desbloqueado una ruta terminada.</p>
      <div class="walkthrough-tip"><strong>Consejo de completitud</strong><p>No reinicies porque una respuesta se sienta torpe. El Día 1 está diseñado para continuar a través de la incomodidad. Guardar y recargar en cada réplica rompe el ritmo y suele decirte menos que una partida ininterrumpida.</p></div>

      <h2>Cuando la rivalidad empieza a ampliarse</h2>
      <p>Harlequin no es simplemente una alternativa más luminosa a Pierrot. Su presencia cambia el significado del primer encuentro al convertir la atención en competición. Observa cómo maneja cada artista la distancia, el consentimiento y la incertidumbre de la protagonista. Esos contrastes importan más en el Día 1 que intentar declarar un ganador.</p>
      <p>El resto del reparto del circo pertenece al arco de presentaciones del prototipo. Ver a Jester, al Doctor o a Ticket Taker no significa que hayas entrado en una ruta romántica completa. La página oficial solo dice que hay cinco presentaciones de personajes disponibles; los finales planeados siguen sin terminar.</p>

      <h2>Cómo llegar al Día 2</h2>
      <p>El Día 2 ya forma parte de la versión 0.2. No es una descarga aparte y no requiere ningún código secreto de ruta. Continúa la historia después de las últimas escenas del Día 1 y deja que la transición se reproduzca. Si el juego vuelve a un punto anterior de forma inesperada:</p>
      <ul>
        <li>confirma que la pantalla de título muestra la versión 0.2 actual;</li>
        <li>carga <strong>DÍA 1 — TARDÍO</strong> en lugar de reiniciar;</li>
        <li>evita saltar rápidamente las transiciones o las escenas animadas;</li>
        <li>en la versión de navegador, mantén la pestaña abierta mientras la escena termina de cargar, porque las partidas del navegador viven en el almacenamiento del navegador.</li>
      </ul>

      <h2>La mejor estrategia para la primera partida es deliberadamente simple</h2>
      <div class="walkthrough-route"><div><strong>Primera pasada</strong><p>Elige con naturalidad, no saltes el diálogo y deja que la tensión crezca. Tu objetivo es entender al reparto, no optimizar una ruta.</p></div><div><strong>Segunda pasada</strong><p>Vuelve al guardado de la calle y cambia una respuesta. Usa el guardado tardío para cualquier variación final del Día 1 en lugar de rejugarte todo desde la pantalla de título.</p></div></div>

      <h2>Errores comunes en el Día 1</h2>
      <h3>Buscar un «buen final de Pierrot»</h3>
      <p>La versión 0.2 no contiene un final terminado de Pierrot. Una respuesta cálida puede cambiar la sensación de una escena sin convertir el prototipo en una ruta completa.</p>
      <h3>Suponer que cada réplica cambia el Día 2</h3>
      <p>Parte del diálogo está ahí para establecer la voz y el ambiente. A menos que dos partidas produzcan un cambio reproducible, no promuevas una réplica a cerradura de ruta.</p>
      <h3>Usar una sola ranura de guardado</h3>
      <p>Es la forma más fácil de convertir una rejugada corta en un reinicio completo. Conserva los puntos de control de la calle y del tramo final del Día 1.</p>
      <h3>Saltarse las partes incómodas</h3>
      <p>Las señales de alarma de la historia forman parte de la caracterización. Si el contenido te resulta tolerable, leer esos momentos con atención hace que el Día 2 sea mucho más fácil de entender. Si no lo es, parar es una elección válida.</p>

      <h2>Lista de comprobación para completar el Día 1</h2>
      <ul class="walkthrough-checklist">
        <li>conociste a Pierrot de camino al trabajo;</li>
        <li>conservaste un guardado antes de la primera respuesta importante;</li>
        <li>viste empezar a tomar forma la rivalidad central;</li>
        <li>llegaste a la transición al Día 2;</li>
        <li>no confundiste una presentación con un final terminado.</li>
      </ul>
      <p>Cuando marques esas casillas, continúa con la <a href="/es/blog/day-2-walkthrough-save-strategy">guía del Día 2</a>. Para contexto de personajes sin especulación sobre rutas, lee las fichas verificadas de <a href="/es/characters/pierrot">Pierrot</a> y <a href="/es/characters/harlequin">Harlequin</a>.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'Qué incluye de verdad el prototipo actual de The Freak Circus',
    description: 'Una guía clara y con pocos spoilers de la versión 0.2: qué se puede jugar ahora, qué sigue en desarrollo y qué deberían esperar los jugadores nuevos.',
    date: '2026-08-15',
    tags: ['Versión 0.2', 'Jugadores nuevos', 'Guía del juego'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'Ilustración de portada de The Freak Circus',
    readingTime: '5 min de lectura',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> se disfruta mejor como un acto de apertura pulido que como una novela visual terminada y completa en rutas. La versión pública actual es la 0.2 y sigue etiquetada como prototipo.</p>
      <h2>La respuesta corta</h2>
      <p>La versión disponible presenta el conflicto central y a cinco miembros del reparto. Incluye un final malo, mientras que el guion más amplio y las conclusiones planeadas de Pierrot, Harlequin, la protagonista y la compartida siguen en desarrollo.</p>
      <p>Esa distinción importa. Que un personaje aparezca en el prototipo no significa automáticamente que ya tenga una ruta romántica completa o un final definitivo.</p>
      <h2>Cómo es una primera sesión</h2>
      <p>La ficha oficial describe una sesión media de aproximadamente media hora. Eso hace que el prototipo sea fácil de probar, pero también significa que una primera partida está pensada para establecer el tono, las relaciones y el peligro, no para resolver todos los cabos.</p>
      <ul><li>Puedes esperar arte original de personajes y de fondos.</li><li>Puedes esperar variaciones de escena con significado y un final malo disponible.</li><li>No puedes esperar jugar ya todos los finales planeados.</li></ul>
      <h2>Conoce el límite de contenido antes de jugar</h2>
      <p>Esta es una historia de terror psicológico solo para adultos. Sus advertencias incluyen sangre, muerte, abuso, secuestro, drogas forzadas, dominación física y contacto sin consentimiento. Lee esas advertencias antes de decidir si el juego es adecuado para ti.</p>
      <h2>Una forma mejor de usar las guías de fans</h2>
      <p>Comprueba el número de versión antes de seguir cualquier consejo de rutas, conserva un guardado limpio antes de las elecciones importantes y trata las capturas o tablas de decisiones sin una versión probada como interpretación de la comunidad. Una guía útil debería decirte qué se observó, en qué versión y dónde empiezan los spoilers.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: '¿Navegador o descarga? Elegir la forma adecuada de jugar',
    description: 'Compara la versión de navegador con las descargas locales de Windows, macOS, Linux y Android, y prepara tus partidas guardadas antes de cambiar de versión.',
    date: '2026-08-14',
    tags: ['Descarga', 'Navegador', 'Instalación'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'Una escena de la versión de navegador de The Freak Circus',
    readingTime: '4 min de lectura',
    content: `
      <p class="article-lede">La historia es la misma, pero la mejor forma de jugar depende de cuánta configuración quieras y de si necesitas una copia local portátil.</p>
      <h2>Elige la versión de navegador para el comienzo más rápido</h2>
      <p>La versión HTML5 es la opción más simple para una primera mirada: abre el juego, deja que la página cargue y empieza sin instalar ningún archivo comprimido. También es útil cuando juegas en una máquina compartida y no quieres conservar archivos del juego.</p>
      <p>El almacenamiento del navegador puede borrarse por herramientas de privacidad o restablecimientos del navegador, así que no es el mejor lugar para un guardado que no puedas permitirte perder.</p>
      <h2>Elige una descarga para una copia local persistente</h2>
      <p>Hay paquetes de Windows, macOS, Linux y Android listados para la versión 0.2. Una versión local evita los límites del almacenamiento del navegador y suele ser la opción más cómoda para partidas repetidas.</p>
      <ul><li>Elige el paquete correspondiente a tu sistema operativo.</li><li>Extrae los archivos comprimidos de escritorio antes de iniciar el juego.</li><li>Haz copias de seguridad de las partidas antes de sustituir una versión antigua.</li></ul>
      <h2>Por qué importa la fuente</h2>
      <p>Usa la ficha de itch.io del desarrollador en lugar de una republicación o un instalador reempaquetado. El desarrollador identifica esa ficha como la página oficial de distribución y pide a los jugadores que no usen copias vueltas a subir.</p>
      <h2>Si algo sale mal</h2>
      <p>Primero confirma el número de versión y la plataforma. Para problemas del navegador, prueba un navegador actual de la familia Chrome o Edge y desactiva la traducción agresiva de la página en la pestaña del juego. Para un archivo comprimido de escritorio, extráelo por completo y mantén la aplicación junto con sus archivos incluidos.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Esperar el Día 3 sin caer en rumores de fecha de lanzamiento',
    description: 'Una lista de comprobación práctica para separar el progreso real de desarrollo de las cuentas atrás, las conjeturas y las afirmaciones recicladas sobre el próximo capítulo.',
    date: '2026-08-13',
    tags: ['Día 3', 'Actualizaciones', 'Verificación de datos'],
    image: '/images/home/characters.webp',
    imageAlt: 'Ilustración de personajes de The Freak Circus',
    readingTime: '5 min de lectura',
    content: `
      <p class="article-lede">El Día 3 está en desarrollo, pero la actividad de desarrollo no es lo mismo que una fecha de lanzamiento confirmada. Mantener esas dos ideas separadas es la forma más fácil de evitar páginas de cuenta atrás engañosas y rumores reciclados.</p>
      <h2>Lo que de verdad está establecido</h2>
      <p>La página pública del juego dice que la historia continúa durante un día más dentro del juego y que esa parte sigue desarrollándose. No publica ningún día de lanzamiento. Hasta que aparezca un anuncio con fecha, cualquier fecha exacta debe tratarse como especulación.</p>
      <h2>Las señales de progreso son útiles, pero limitadas</h2>
      <p>La programación de diálogos, el nuevo arte, los cambios de fondos, las pruebas y las vistas previas de escenas muestran que el trabajo avanza. Ninguno de esos hitos por sí solo dice cuándo estará lista una versión pública estable.</p>
      <h2>Haz una comprobación rápida del rumor</h2>
      <ol><li>Busca una fecha de publicación exacta y un autor identificado.</li><li>Comprueba si el texto dice «lanzado» o solo «en desarrollo».</li><li>Separa las capturas de trabajo en progreso de una versión descargable.</li><li>Rechaza las páginas que convierten una estimación de fans en una cuenta atrás.</li></ol>
      <h2>Aprovecha bien el tiempo de espera</h2>
      <p>Conserva tus partidas actuales, anota qué versión las creó y evita sobrescribir la ranura de la primera partida. Cuando llegue la próxima versión, lee sus notas de cambios antes de suponer que los antiguos consejos de rutas siguen siendo válidos.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Altura y orden de edad de Pierrot en The Freak Circus',
    description: 'Pierrot mide 198 cm y es el tercero de cinco en el orden de edad oficial, de mayor a menor — lo que publicó el desarrollador y lo que el fandom añade encima.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Alturas', 'Datos de personajes'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Pierrot, el payaso silencioso en el centro de The Freak Circus',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">Pierrot mide 198 cm y, en el orden de edad publicado por el desarrollador, es el tercero de cinco, de mayor a menor. Esos dos datos proceden del mismo material oficial que el resto de la tabla del reparto, y entre ambos resuelven la mayor parte de la discusión que circula por internet sobre su tamaño y su edad — dejando dos huecos que el fandom rellena por su cuenta.</p>
      <div class="walkthrough-note"><strong>En qué se basa este artículo</strong><p>La altura, el orden de edad y el ranking de fuerza proceden de la tabla publicada por el desarrollador y de sus respuestas en AMA. Aquí no se trata como hecho ninguna edad, cumpleaños o cifra estimada asignada por los fans. El material que procede de la wiki del fandom se etiqueta como derivado del fandom y no como oficial.</p></div>

      <h2>La altura: 198 cm</h2>
      <p>El desarrollador publicó una tabla de alturas junto con la referencia de sprites usada al dibujar el reparto. La entrada de Pierrot dice 198 cm, que equivale aproximadamente a 6 pies y 5,95 pulgadas. Eso lo sitúa como el segundo más alto de los cinco personajes presentados: nueve centímetros por debajo del Doctor, con 207 cm, y once centímetros por encima de Harlequin, con 187 cm.</p>
      <p>Como la tabla existía como referencia de dibujo y no como un conjunto de números escritos a posteriori, es el tipo de medición que se mantiene estable. De ahí se siguen dos cosas. El reparto presentado completo abarca solo 24 cm, de los 207 del Doctor a los 183 de Ticket Taker, un rango estrecho y una comprobación útil contra el fan art que muestra a un personaje eclipsando a otro. Y los once centímetros de diferencia entre los dos protagonistas románticos son reales, razón por la que la wiki del fandom lo considera significativo a la hora de enfrentar a Pierrot y Harlequin en escena.</p>
      <h2>El orden de edad: tercero de cinco, de mayor a menor</h2>
      <p>Una respuesta aparte de un AMA aceptó la petición de ordenar el reparto de mayor a menor y dio una secuencia fija:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — primero, el mayor.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — tercero.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — último, el más joven.</li>
      </ol>
      <p>Pierrot queda por tanto en el centro de la compañía: mayor que Jester y Harlequin, menor que Ticket Taker y el Doctor. En un reparto construido en torno a la rivalidad entre los dos extremos de esa lista, ser tercero significa que es mayor que el hombre con el que compite y menor que las dos figuras que sostienen el circo.</p>
      <h3>Lo que «tercero» no te dice</h3>
      <p>No da un número y no da una diferencia. Un orden relativo solo dice que un personaje es mayor que otro; dos personajes pueden ser consecutivos en la lista y aun así estar muy separados en años. Nunca se ha publicado una edad numérica para ninguno de los cinco, lo que convierte el orden en la única información sobre edades que el desarrollador ha publicado. Eso importa porque una cifra concreta es lo que más suelen añadir los sitios de fans a este reparto, y esas cifras casi nunca tienen una fuente detrás.</p>
      <div class="walkthrough-tip"><strong>Cómo comprobar una afirmación de altura o edad que hayas visto en otro sitio</strong><p>Hazte tres preguntas. ¿La fuente apunta a la tabla del desarrollador, a una respuesta de AMA o a una publicación oficial? ¿Distingue entre un número publicado y una estimación? ¿Y te dice a qué versión corresponde la información? A una guía que responde a las tres se le puede creer en los detalles; a una que no responde a ninguna, es decoración sobre la suposición de otra persona.</p></div>

      <h2>La fuerza es una lista aparte</h2>
      <p>El desarrollador también publicó un ranking de fuerza física bruta, y no sigue a la altura. Pierrot ocupa el primer lugar —por delante de Harlequin y Jester, empatados en el segundo, después el Doctor y, último, Ticket Taker.</p>
      <p>Que Pierrot sea a la vez el segundo más alto y el más fuerte es una decisión deliberada de caracterización y no una casualidad de la tabla. La sinopsis oficial lo llama «el yandere silencioso» —en la jerga del fandom, un yandere es un enamorado cuya obsesión romántica acaba en control—, y un personaje físicamente dominante y casi totalmente silencioso es un tipo específico de amenaza: el peligro no es que vaya a anunciarse, sino que no necesita hacerlo. La descripción de la wiki del fandom, que lo pinta amable y cortés en la superficie mientras acecha a la protagonista, encaja con ese perfil, aunque esa caracterización concreta se deriva del fandom.</p>

      <h2>Qué está confirmado y qué se añade</h2>
      <ul>
        <li><strong>Confirmado por el desarrollador:</strong> su altura de 198 cm, su tercer puesto en el orden de edad, su primer puesto en el ranking de fuerza, su descripción como «el yandere silencioso» y el hecho de que un final romántico de Pierrot está planeado.</li>
        <li><strong>De la versión actual:</strong> su apariencia, sus escenas y la forma en que reacciona a la protagonista según las ramas.</li>
        <li><strong>Derivado del fandom:</strong> la descripción detallada del vestuario —máscara blanca con ranuras verticales negras, ojos dorados, gorro rojo y negro de bufón, abrigo rojo a rombos—, la razón dentro de la ficción de su silencio y cualquier edad o cumpleaños concretos que se le atribuyan.</li>
      </ul>
      <p>Una aclaración sobre el vestuario y el silencio, porque ambos se resumen mal con frecuencia. La versión de la wiki del fandom es que Jester, a quien Pierrot respeta profundamente, impuso una regla de no hablar en público. Es un detalle satisfactorio y coherente con la forma en que están escritos los dos personajes, pero procede de la wiki y no del desarrollador. El material de primera mano se detiene en la expresión «el yandere silencioso» y trata el silencio como caracterización, no como una pista de voz ausente.</p>

      <h2>Por qué valen la pena estos números</h2>
      <p>Las medidas son la parte de una ficha de reparto más fácil de comprobar y la que más se inventa, y este juego ha tenido de todo: una tabla real publicada y muchas cifras que no proceden de ella. Saber que Pierrot mide 198 cm y es el tercero en edad permite detectar de un vistazo cuándo una wiki ha cambiado silenciosamente una cifra —y, lo más útil, leer sus escenas con una imagen exacta. Un personaje de 198 cm que además es el más fuerte de los cinco se comporta en pantalla de forma distinta a un hombre de estatura media, y la puesta en escena del juego depende de que eso sea cierto.</p>
      <p>Para el panorama completo del reparto, la <a href="/es/characters/heights">guía de alturas y rankings</a> enumera a los cinco personajes, y la <a href="/es/characters/pierrot">ficha de Pierrot</a> cubre su estado de ruta y el material del fandom con más detalle.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Altura y orden de edad de Harlequin en The Freak Circus',
    description: 'Harlequin mide 187 cm y es el más joven de los cinco personajes presentados — las cifras publicadas por el desarrollador y las afirmaciones de fans que las contradicen.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Alturas', 'Datos de personajes'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Harlequin, el rival teatral de Pierrot en The Freak Circus',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">Harlequin mide 187 cm, es el más bajo de los cinco personajes presentados y el más joven de los cinco en el orden de edad publicado por el desarrollador. Ambos hechos están documentados. La edad concreta que circula sobre él por internet normalmente no lo está — y en la mayoría de los casos contradice la única declaración sobre edades que el desarrollador ha hecho en realidad.</p>
      <div class="walkthrough-note"><strong>Alcance y fuentes</strong><p>La altura, el orden de edad y el ranking de fuerza se toman de la tabla publicada por el desarrollador y de sus respuestas en AMA. La descripción del vestuario, los resúmenes de personalidad y cualquier edad o cumpleaños concretos proceden de la wiki del fandom y se marcan como derivados del fandom. Este artículo no trata una estimación dentro de la ficción como una medición.</p></div>

      <h2>La altura: 187 cm</h2>
      <p>La entrada de Harlequin en la tabla de alturas del desarrollador dice 187 cm, aproximadamente 6 pies y 1,62 pulgadas. Eso lo hace el más bajo de los cinco personajes presentados: 20 cm por debajo del Doctor, con 207 cm, 11 cm por debajo de Pierrot, 5 cm por debajo de Jester y 4 cm por encima de Ticket Taker.</p>
      <p>Lo interesante de esa cifra es con qué se combina. Harlequin comparte el segundo puesto del ranking de fuerza del desarrollador con Jester, por detrás de Pierrot y por delante del Doctor y Ticket Taker. La wiki del fandom lee esa combinación —el más joven y el más bajo, pero empatado como segundo más fuerte— como la razón de que Harlequin esté escrito como alguien rápido y físico en lugar de pesado. Esa lectura es interpretación, pero es una interpretación construida sobre dos números publicados y no sobre una suposición.</p>
      <h2>El orden de edad: último de cinco</h2>
      <p>El orden de edad del desarrollador, de mayor a menor, es Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin es quinto —el más joven del reparto presentado, y el más joven de los dos protagonistas románticos por dos posiciones.</p>
      <p>Es un hecho genuinamente documentado y uno de los más tergiversados por internet. Buena parte del material de fans asigna a Harlequin una edad numérica concreta, y varias de esas cifras no pueden conciliarse con un orden publicado que lo sitúa por debajo de un Ticket Taker y un Doctor mucho mayores y por encima de nadie. El orden es la versión fiable, y también la única que existe: no se ha publicado ninguna edad numérica para ningún personaje de este juego.</p>
      <div class="walkthrough-tip"><strong>Si quieres citar su edad, cita el orden</strong><p>Escribe «el más joven de los cinco personajes presentados» en lugar de un número. Es exacto, tiene fuente y sobrevive a la próxima actualización. Las cifras que los sitios de fans asignan a este reparto suelen acabar contradichas por respuestas posteriores de AMA, que es exactamente la razón por la que el desarrollador publica un orden y no un número.</p></div>

      <h2>Los once centímetros de diferencia</h2>
      <p>Harlequin es 11 cm más bajo que Pierrot, y esa diferencia es lo bastante grande para leerse en pantalla sin necesidad de exagerarla. La wiki del fandom considera que la diferencia es significativa en la forma en que los dos protagonistas se enfrentan en escena —el silencioso llena el encuadre, el teatral se mueve a su alrededor—. Si eso fue intención de diseño o consecuencia de la referencia de sprites es algo que el desarrollador no ha declarado, así que se queda en la columna del fandom.</p>
      <p>Lo confirmado es más simple: el desarrollador publicó la tabla como referencia usada al dibujar los sprites, razón por la que las cifras se tratan como canónicas y no como lecturas sacadas del arte. Si un fan art dibuja a Harlequin más alto que Pierrot, el arte está estilizado; las cifras oficiales siguen siendo 187 y 198.</p>

      <h2>Lo que dice el material oficial sobre él</h2>
      <p>Más allá de las tablas, el desarrollador ha dicho varias cosas de Harlequin directamente. La sinopsis oficial lo llama el «rival seductor» de Pierrot y describe el juego como liderado por uno o por el otro — el encuadre más claro posible de una historia con dos rutas románticas y ninguna más.</p>
      <p>Una respuesta de AMA merece citarse con cuidado porque es fácil de malinterpretar. Preguntado por los mordiscos que Harlequin deja al coquetear, respondió que no son propuestas de matrimonio, que la marca no deja cicatriz y que el matrimonio y el cortejo entre monstruos funcionan de forma distinta a como la protagonista los entendería. Ese pequeño intercambio hace trabajo real: establece que el coqueteo de Harlequin funciona con la lógica propia del circo y que el marco de referencia de la protagonista no es el de la gente que la rodea.</p>
      <p>La wiki del fandom añade que Harlequin se siente seguro junto al Doctor, que el Doctor es su persona favorita del circo y que se lleva bien con Ticket Taker pese a un choque de gustos. También registra un vínculo implícito con la muerte de Columbina —que Harlequin la mató para «salvarla»—, algo que la propia wiki plantea como implicación y no como declaración. La forma general de la historia del circo está confirmada en respuestas de AMA; esa lectura concreta del papel de Harlequin en ella no es de primera mano.</p>

      <h2>Estado de la ruta: planeada, no jugable</h2>
      <p>Un final romántico de Harlequin es una de las cuatro conclusiones que el desarrollador ha nombrado, junto a las de Pierrot, la Protagonista y el final combinado «All together». Ninguna de las cuatro está implementada. La versión actual contiene exactamente un final —el final malo «Missing» del Día 1—, así que no hay condiciones de activación que publicar ni una guía honesta que escribir.</p>
      <ul>
        <li><strong>Confirmado:</strong> su altura, su último puesto en el orden de edad, su empate en el segundo puesto de fuerza, su descripción como «rival seductor» de Pierrot, la aclaración de que sus mordiscos de coqueteo no son propuestas y que un final romántico de Harlequin está planeado.</li>
        <li><strong>De la versión actual:</strong> su apariencia, sus escenas y el hecho de que algunas de sus apariciones varían según la rama de la historia, algo confirmado por una nota oficial de errores.</li>
        <li><strong>Derivado del fandom:</strong> la descripción de la máscara —máscara blanca con un rombo verde y un triángulo verde, ojos verde veneno, cabello negro rizado con un mechón en forma de corazón—, su historia personal y los detalles de su relación con Columbina.</li>
      </ul>

      <h2>Juntando los números</h2>
      <p>Las medidas oficiales de Harlequin describen a un personaje concreto: el más joven, el más bajo y empatado como segundo más fuerte de una compañía de cinco, que compite por la atención con el segundo más alto y más fuerte de esa misma compañía. No es dominante físicamente ni tampoco inexperto — es rápido, teatral y juega desde una posición en la que la rivalidad está realmente igualada. Eso es bastante más útil que una edad inventada, y está plenamente documentado.</p>
      <p>Para el reparto completo de una vez, consulta la <a href="/es/characters/heights">guía de alturas y rankings</a>; para su estado de ruta y sus relaciones, la <a href="/es/characters/harlequin">ficha de Harlequin</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'Finales de The Freak Circus: qué existe y qué no',
    description: 'Una lista completa del estado de los finales de The Freak Circus — un final malo implementado, cuatro conclusiones planeadas y las rutas que no existen.',
    date: '2026-09-28',
    tags: ['Finales', 'Rutas', 'Versión 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'El reparto de The Freak Circus reunido en torno a la protagonista',
    readingTime: '9 min de lectura',
    content: `
      <p class="article-lede">The Freak Circus tiene hoy un final jugable y otros cuatro que el desarrollador ha nombrado pero aún no ha escrito en ninguna versión. Casi todos los gráficos de «todos los finales» de internet mezclan esas dos categorías, y por eso la misma pregunta recibe cuatro respuestas distintas. Aquí está la lista, con el estado de cada entrada dicho sin rodeos.</p>
      <div class="walkthrough-note"><strong>Alcance de esta lista</strong><p>Cubre el prototipo público de la versión 0.2 y las declaraciones publicadas por el propio desarrollador sobre el trabajo planeado. Contiene spoilers de la historia del único final que existe. Ninguna conclusión teorizada o bautizada por los fans se lista como final, porque nada de eso existe como final hasta que el desarrollador lo publique.</p></div>

      <h2>La versión corta</h2>
      <ul>
        <li><strong>Jugable ahora: 1.</strong> El final «Missing» — un final malo en el Día 1.</li>
        <li><strong>Anunciados como planeados: 4.</strong> Pierrot (romance), Harlequin (romance), Protagonista (sin romance) y «All together» (poliamoroso).</li>
        <li><strong>Opciones de ruta confirmadas: 4.</strong> Pierrot, Harlequin, ambos o ninguno.</li>
        <li><strong>Rutas que no existen: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Número total oficial de finales: ninguno publicado.</strong> El desarrollador ha dicho que hay varios finales planeados pero que no puede dar una cifra.</li>
      </ul>

      <h2>El único final que existe</h2>
      <p>La versión 0.2 contiene un solo final, y es malo. Se alcanza en el Día 1, y la condición es deliberadamente simple: si la protagonista no hace nada mientras un hombre se burla de Pierrot delante de un público, una figura desconocida le entrega un boleto rosa, la lleva a la carpa rosa y todos los miembros del circo le niegan la entrada. El juego dice sin rodeos que la protagonista no logró llamar la atención de Pierrot y tuvo un final trágico.</p>
      <p>Es un final real con consecuencias reales, no un marcador de posición — y es todo el contenido de la categoría de finales en la versión actual. Es también, en estructura, el argumento del juego en miniatura: a una protagonista que no se implica en el conflicto central se la aparta de él en silencio.</p>
      <div class="walkthrough-tip"><strong>Regístralo en lugar de evitarlo</strong><p>El final «Missing» es el único desenlace que la versión ofrece oficialmente, así que alcanzarlo completa el prototipo actual en lugar de arruinarlo. Si una guía te dice que recargues y no lo veas nunca, está tratando el final como algo que proteger en lugar de como algo que existe.</p></div>

      <h2>Los cuatro finales planeados</h2>
      <p>El desarrollador enumera cuatro conclusiones en la página oficial y en el FAQ oficial. Dos son finales románticos, una es explícitamente sin romance y una es un final poliamoroso.</p>
      <ul>
        <li><strong>El final de Pierrot (romance)</strong> — la protagonista acaba con Pierrot. Listado como trabajo planeado y descrito repetidamente como aún en desarrollo.</li>
        <li><strong>El final de Harlequin (romance)</strong> — la protagonista acaba con Harlequin. Su guion no está terminado.</li>
        <li><strong>El final de la Protagonista (sin romance)</strong> — la protagonista cierra la historia sin romance. El desarrollador ha confirmado que esta ruta existe como concepto y que aun así pueden elegirse amistades.</li>
        <li><strong>«All together» (poliamoroso)</strong> — la protagonista se enamora de Pierrot y de Harlequin al mismo tiempo. Una conclusión listada aparte, no una variante de ninguna de las dos rutas románticas.</li>
      </ul>
      <p>Es importante no convertir esta lista en un número. Al desarrollador se le ha preguntado directamente cuántos finales tendrá el juego terminado y ha dicho que hay varios planeados pero que no puede dar una cifra, porque el guion sigue siendo un trabajo en progreso. Una página que afirme «The Freak Circus tiene cinco finales» ha tomado cuatro conclusiones planeadas con nombre más una implementada y ha producido un total que el desarrollador nunca ha dado.</p>

      <h2>Con qué personajes se puede hacer ruta</h2>
      <p>La respuesta oficial es estrecha: Pierrot, Harlequin, ambos o ninguno. La ruta de la Protagonista es la opción «ninguno» — confirmada sin romance, aunque todavía te permite elegir hacerte amigo del reparto.</p>
      <p>No existe ruta para Jester, Ticket Taker ni Doctor. El desarrollador ha dicho que si más adelante se añadieran rutas, lo más probable es que llegaran como contenido adicional o DLC, y que eso no está decidido. Convertir a los personajes restantes en opciones románticas se describe como posibilidad y no como compromiso — una distinción que importa, porque las guías de fans describen con frecuencia esas rutas en presente, como si solo estuvieran ocultas.</p>
      <p>Dos afirmaciones que circulan mucho no corresponden a nada que el desarrollador haya descrito: que la ruta de Jester «se desbloquea en el Día 2» y que el Doctor tiene un final «Clean Hands». La actualización del Día 2 añadió personajes, sprites animados, un menú rediseñado y una versión de Android — no nuevas rutas.</p>

      <h2>Por qué las guías discrepan sobre la cifra</h2>
      <p>Distintos sitios responden a preguntas distintas. Unos cuentan solo lo jugable, otros solo lo que el desarrollador ha nombrado, y otros mezclan conclusiones planeadas con teorías de fans. Clasificar cualquier afirmación en tres cajones —implementado, planeado o sin verificar— resuelve la discrepancia más rápido que discutir sobre el número.</p>
      <p>Sobre la lista de planeados aplican dos advertencias. El guion se sigue escribiendo, así que el conjunto de conclusiones puede cambiar antes de que se publique cualquiera de ellas. Y el Día 3 es donde se están escribiendo ahora las nuevas conclusiones, lo que convierte la lista actual en la foto de un plan en curso y no en un catálogo terminado.</p>

      <h2>Qué significa esto al jugar</h2>
      <p>Trata el prototipo como los dos primeros días de una historia de tres. Lo disponible es un arco de apertura que establece el reparto, la rivalidad y un final de fracaso. La estructura de rutas existe en la ramificación; las conclusiones todavía no existen en la versión. Jugar la versión actual sirve para ver cómo funciona la ramificación, no para completar el juego.</p>
      <p>Para el desglose completo con fuentes, consulta la <a href="/es/endings">guía de finales y rutas</a>; para lo que se sigue escribiendo, el <a href="/es/day-3">rastreador del Día 3</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'Los cinco personajes de The Freak Circus',
    description: 'Una vista general en una sola página de los cinco personajes presentados — Pierrot, Harlequin, Jester, Doctor y Ticket Taker — con alturas, puestos y estado de ruta.',
    date: '2026-10-01',
    tags: ['Personajes', 'Vista general', 'Versión 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Jester, la figura de autoridad de The Freak Circus',
    readingTime: '10 min de lectura',
    content: `
      <p class="article-lede">La versión 0.2 presenta cinco personajes, y los cinco tienen sus propias escenas de presentación en la versión pública. Ese número suele ser el origen de una segunda suposición errónea —que cinco personajes presentados significan cinco rutas disponibles. No es así. Dos tienen rutas románticas planeadas, tres no tienen ninguna, y ninguno de los finales planeados es jugable todavía.</p>
      <div class="walkthrough-note"><strong>Cómo leer esta vista general</strong><p>Las alturas, las posiciones en el orden de edad y los puestos de fuerza proceden de la tabla publicada por el desarrollador. El estado de rutas y finales sigue las declaraciones del propio desarrollador. Los detalles de personalidad y relaciones atribuidos a la wiki del fandom se etiquetan como tales, porque la mayor parte del detalle interesante de este reparto procede del material de la historia y no de publicaciones del desarrollador.</p></div>

      <h2>El reparto de un vistazo</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, tercero en edad, el más fuerte. La obsesión silenciosa en el centro de la historia y el más alto de los dos protagonistas románticos.</li>
        <li><strong>Harlequin</strong> — 187 cm, el más joven, empatado en el segundo puesto de fuerza. El «rival seductor» de Pierrot y el más bajo de los dos protagonistas románticos.</li>
        <li><strong>Jester</strong> — 192 cm, cuarto en edad, empatado en el segundo puesto de fuerza. La figura de autoridad que hace que el circo se sienta como una institución. Sin ruta.</li>
        <li><strong>Doctor</strong> — 207 cm, segundo en edad, tercero en fuerza. El más alto de los cinco y una de las presencias más clínicas del reparto. Sin ruta.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, el mayor, el más débil. El guardián del umbral y el personaje más estrechamente ligado a la ramificación. Sin ruta.</li>
      </ul>
      <p>Tres hechos se aplican a los cinco a la vez. La tabla de alturas fue publicada por el desarrollador como referencia usada al dibujar los sprites, y por eso las cifras son canónicas. El orden de edad es solo relativo — no existe edad numérica para nadie. Y el ranking de fuerza se publicó como respuesta secundaria a una pregunta de un fan, así que se lee como caracterización y no como una pantalla de estadísticas.</p>

      <h2>Pierrot</h2>
      <p>El personaje en torno al que está construido el juego. La sinopsis oficial lo llama «el yandere silencioso» — descripción del propio desarrollador, y la razón de que cada gesto suyo pese en un medio que funciona con diálogo. La wiki del fandom lo caracteriza como amable y cortés en la superficie mientras acecha a la protagonista, y protector tanto de la protagonista como de Columbina; también recoge una respuesta del desarrollador según la cual Pierrot jamás abandonaría a la protagonista, y de forma enfática. Un final romántico de Pierrot está planeado y en desarrollo.</p>
      <h2>Harlequin</h2>
      <p>Donde Pierrot funciona por constancia, Harlequin funciona por actuación. La sinopsis oficial lo llama el «rival seductor» de Pierrot y plantea el juego como liderado por uno o por el otro. La wiki del fandom lo describe despreocupado, sádico, burlón y secretamente celoso — y señala que le incomoda el afecto, lo que reencuadra la rivalidad como algo que desea tanto como Pierrot. Su final romántico está planeado y no implementado.</p>
      <h2>Jester</h2>
      <p>El personaje que más se describe mal por internet, normalmente dándole una ruta romántica que no tiene. Funciona como la figura de autoridad del circo: la wiki del fandom lo llama el líder y el antagonista principal, tranquilo y sereno en lugar de volátil, y el fandom también lo describe controlando a los «Fools» y refiriéndose a los humanos como abandonados. Esos detalles son interpretación de sus escenas y no declaraciones del desarrollador, pero su autoridad sobre los demás personajes es coherente en toda la versión. No existe ruta de Jester ni final de Jester.</p>
      <h2>Doctor</h2>
      <p>El más alto de los cinco con 207 cm y solo el tercero en fuerza, algo que la wiki del fandom explica por una preferencia por el ingenio sobre la fuerza bruta. Su presentación apuesta con fuerza por la contención, el examen y la imaginería de terror médico, y se describe que su compostura se rompe de forma visible en un registro emocional concreto. No tiene ruta ni final, y el final «Clean Hands» que algunas páginas antiguas de fans le atribuyen no está respaldado por ninguna fuente de primera mano.</p>
      <h2>Ticket Taker</h2>
      <p>El mayor, el más bajo y el último del ranking de fuerza — y aun así uno de los personajes mejor documentados del material oficial, porque el sistema de boletos es una de las pocas mecánicas confirmadas del juego. El desarrollador ha confirmado ocho tipos de boleto, con el rosa por debajo del reparto principal y el rojo y el verde señalando una elección de la protagonista. No tiene ruta, y algunas guías de fans veteranas describen una ruta romántica de Ticket Taker que se desbloquea con persistencia y diálogo cuidadoso; esa ruta no existe en la versión pública.</p>

      <h2>Con quién se puede hacer ruta de verdad</h2>
      <p>Las opciones de ruta confirmadas son Pierrot, Harlequin, ambos o ninguno. La opción «ninguno» corresponde al final de la Protagonista, que no incluye romance pero sí permite amistades con el reparto. Jester, Ticket Taker y Doctor no tienen rutas; el desarrollador ha descrito convertirlos en opciones románticas como una posibilidad y no un compromiso, y ha sugerido que esa adición llegaría lo más probable como contenido adicional o DLC.</p>
      <div class="walkthrough-tip"><strong>Cómo usar una ficha de personaje</strong><p>Lee primero la sección de lo confirmado y después la sección del fandom. Lo confirmado seguirá siendo cierto tras la próxima actualización; el material del fandom es interpretación de la versión actual y puede revisarse cuando lleguen más escenas. Las fichas que mezclan ambos sin etiquetarlos son las que conviene mirar con cuidado.</p></div>

      <h2>A quién le falta en el reparto</h2>
      <p>Columbina es una antigua miembro del circo cuya muerte da forma al trasfondo de los dos protagonistas, pero no es uno de los cinco personajes presentados y no aparece en la tabla de alturas publicada. Su diseño sigue en producción y el desarrollador ha retenido detalles de forma deliberada. Quien escriba sobre este reparto debería tratarla a la vez como una parte real de la historia y como un personaje sin terminar.</p>
      <p>Para las fichas completas, consulta las páginas de <a href="/es/characters/pierrot">Pierrot</a>, <a href="/es/characters/harlequin">Harlequin</a>, <a href="/es/characters/jester">Jester</a>, <a href="/es/characters/the-doctor">Doctor</a> y <a href="/es/characters/ticket-taker">Ticket Taker</a>, además de la <a href="/es/characters/heights">guía de alturas y rankings</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'El sistema de boletos de The Freak Circus, explicado',
    description: 'El desarrollador ha confirmado ocho tipos de boleto en The Freak Circus, y el rosa, el rojo y el verde tienen significados concretos para la ramificación de la historia.',
    date: '2026-10-05',
    tags: ['Boletos', 'Mecánicas', 'Ramificación'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Ticket Taker, el personaje que controla el sistema de boletos del juego',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">Los boletos son uno de los pocos sistemas de The Freak Circus que el desarrollador ha explicado directamente, y la explicación cubre más terreno del que admiten la mayoría de guías de fans. La cifra confirmada es de ocho tipos de boleto. El rosa queda por debajo del reparto principal, el rojo y el verde marcan una elección de la protagonista, y la combinación de rosa y rojo significa que Ticket Taker toma automáticamente la opción roja.</p>
      <div class="walkthrough-note"><strong>Qué está documentado y qué no</strong><p>El número de tipos de boleto y el significado del rosa, el rojo y el verde proceden del desarrollador. La lista completa de los ocho —los nombres y colores de los tipos restantes— no se ha publicado, así que este artículo no los inventa. La identificación de la figura de la cafetería que entrega un boleto rosa como Ticket Taker disfrazado se deriva del fandom y se marca como tal.</p></div>

      <h2>Lo que el desarrollador ha confirmado</h2>
      <ul>
        <li><strong>Existen ocho tipos de boleto.</strong> Es una cifra, confirmada directamente.</li>
        <li><strong>El rosa queda por debajo del reparto principal.</strong> Es el nivel que recibes cuando los artistas no te están persiguiendo.</li>
        <li><strong>El rojo y el verde indican una elección de la protagonista.</strong> Esos dos colores marcan una decisión que pertenece a la jugadora.</li>
        <li><strong>Rosa y rojo combinados significan que Ticket Taker toma automáticamente la opción roja.</strong> En ese caso, la elección se toma por ti, y lo hace el personaje que administra todo el sistema.</li>
      </ul>
      <p>Esa última regla es la más útil para leer escenas, porque te dice que el juego no se limita a ofrecerte elecciones y dejarte elegir con libertad. Algunas decisiones las toma el circo. Una protagonista que no actúa no recibe un desenlace neutral; recibe el desenlace del circo.</p>

      <h2>El boleto rosa y el único final que existe</h2>
      <p>El boleto rosa aparece en la versión actual y es el objeto que inicia el único final implementado del juego. En el Día 1, si la protagonista no hace nada mientras un hombre se burla de Pierrot delante de un público, una figura desconocida le entrega un boleto rosa. La protagonista es llevada a la carpa rosa y todos los miembros del circo le niegan la entrada, y el juego declara que no logró llamar la atención de Pierrot y tuvo un final trágico.</p>
      <p>La wiki del fandom identifica a esa figura de la cafetería —el hombre «Desconocido»— como Ticket Taker disfrazado. Esa identificación se deriva de los fans, pero conecta directamente con el único final que contiene la versión y explica por qué el personaje sin ruta propia acaba importando mecánicamente.</p>
      <div class="walkthrough-tip"><strong>No trates los boletos como coleccionables</strong><p>La versión 0.2 no establece un inventario convencional en el que los boletos se coleccionen para desbloquear futuros finales. Aquí los boletos marcan posición y elección, no una lista de tareas. Si una guía describe una estantería de boletos, un contador de boletos o un boleto oculto por final, está describiendo un sistema que la versión no tiene.</p></div>

      <h2>Por qué un personaje secundario sostiene la ramificación</h2>
      <p>Ticket Taker no tiene ruta ni final, es el último de cinco en el ranking de fuerza y el más bajo del reparto. En un juego cuyas opciones de ruta son Pierrot, Harlequin, ambos o ninguno, eso normalmente lo haría un personaje de fondo. El sistema de boletos es la razón de que no lo sea.</p>
      <p>Piensa en lo que hace un boleto dentro de la ficción: decide a quién te está permitido convertirte. Un boleto rosa te coloca por debajo de los artistas, que es exactamente la posición en la que el final «Missing» pone a la protagonista —fuera, observada, rechazada en la puerta de la carpa. El rojo y el verde marcan las elecciones que pertenecen a la jugadora. Y cuando el rosa y el rojo se combinan, la figura de autoridad le quita la elección a la jugadora. Un personaje que administra esa regla no es un portero; es el mecanismo con el que el circo gestiona a la protagonista.</p>
      <p>También encaja con su caracterización. La wiki del fandom lo describe obediente y dedicado a la agenda del circo, maduro y profesional, preocupado por la limpieza y la organización, y formula su principio sin rodeos: por aquí, nadie rompe el personaje. El sistema es el personaje. Un espectáculo que funciona con boletos necesita a alguien que los reparta.</p>

      <h2>Cómo se leen los colores en la práctica</h2>
      <ul>
        <li><strong>Rosa</strong> — estás en el edificio pero no en el espectáculo. Es el nivel en el que acaba el único final disponible en la versión actual.</li>
        <li><strong>Rojo</strong> — una decisión atribuida a ti, y que el circo puede anular cuando se combina con el rosa.</li>
        <li><strong>Verde</strong> — una decisión atribuida a ti, sin la anulación.</li>
        <li><strong>Los otros cinco tipos</strong> — no documentados individualmente. Su cifra está confirmada; sus identidades no son públicas.</li>
      </ul>
      <p>Vale la pena ser honesto sobre lo poco visible que es todo esto todavía. La versión 0.2 es un prototipo denso en presentaciones con un final, y el sistema de boletos se describe como un conjunto de reglas más que demostrarse en profundidad. Una jugadora de la versión actual verá sobre todo el rosa en la práctica, más el rojo y el verde donde se ofrece una elección. Leer el sistema como un mapa completo de ramificación va más allá de lo que la versión muestra hoy.</p>

      <h2>Qué está confirmado frente a lo que añade el fandom</h2>
      <ul>
        <li><strong>Confirmado por el desarrollador:</strong> existen ocho tipos de boleto; el rosa queda por debajo del reparto principal; el rojo y el verde indican una elección de la protagonista; rosa más rojo significa que Ticket Taker toma automáticamente la opción roja; y Ticket Taker no tiene ruta.</li>
        <li><strong>De la versión actual:</strong> a la protagonista le entregan un boleto rosa durante el Día 1, y ese boleto conduce directamente al final «Missing».</li>
        <li><strong>Derivado del fandom:</strong> que el hombre «Desconocido» de la cafetería es Ticket Taker disfrazado, el apodo de «manipulador de la realidad» y los detalles de su historia con Columbina.</li>
      </ul>
      <p>Para saber cómo conecta esto con los finales, consulta la <a href="/es/endings">guía de finales</a>; para la ficha del personaje, la <a href="/es/characters/ticket-taker">página de Ticket Taker</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'Qué se sabe de Columbina en The Freak Circus',
    description: 'Columbina dio forma al trasfondo de ambos protagonistas, pero su diseño sigue en producción — lo que el desarrollador ha confirmado sobre ella y lo que añade el fandom.',
    date: '2026-10-07',
    tags: ['Columbina', 'Lore', 'Datos de personajes'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina, la antigua miembro del circo en el centro del trasfondo de ambos protagonistas',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">Columbina es el personaje que todo el mundo reconoce y nadie sabe describir con seguridad. Su muerte da forma al trasfondo de los dos protagonistas románticos, y el fandom ha construido en torno a eso una lectura sustanciosa. Al mismo tiempo, el desarrollador ha dicho que su diseño sigue en producción y que los detalles se retienen de forma deliberada. Las dos cosas son ciertas a la vez, y este artículo va de mantenerlas separadas.</p>
      <div class="walkthrough-note"><strong>Alcance de este artículo</strong><p>Cubre lo que el desarrollador ha confirmado, lo que registra la wiki del fandom y dónde chocan ambos. Contiene spoilers de la historia sobre el trasfondo compartido de los dos protagonistas. Ninguna afirmación sobre Columbina se presenta como zanjada a menos que el desarrollador la haya declarado.</p></div>

      <h2>Lo que el desarrollador ha confirmado</h2>
      <ul>
        <li><strong>Es una antigua miembro del circo.</strong> Su historia con la compañía queda detrás de ella, no dentro.</li>
        <li><strong>Su muerte da forma al trasfondo de ambos protagonistas.</strong> Pierrot y Harlequin huyen los dos de algo que la involucra.</li>
        <li><strong>La protagonista no está conectada a Columbina.</strong> El desarrollador lo ha confirmado directamente, algo que conviene decir claro porque las teorías de fans suelen colocar a la protagonista en su historia.</li>
        <li><strong>«Columbina» significa «paloma pequeña».</strong> El desarrollador ha confirmado el significado del nombre.</li>
        <li><strong>Su diseño sigue en producción y los detalles se retienen de forma deliberada.</strong> La forma del personaje no está terminada y el desarrollador lo ha dicho.</li>
        <li><strong>No existe altura oficial para ella.</strong> La tabla de alturas publicada cubre a los cinco personajes presentados, y ella no está entre ellos.</li>
      </ul>
      <p>Ese último punto conecta con un detalle de las actualizaciones de desarrollo. Una actualización oficial reciente menciona una escena nueva y muy corta que se refiere a ella, y señala que su diseño está previsto para que las siluetas de los flashbacks se mantengan coherentes. Dicho de otro modo: la historia confirma su presencia mientras el personaje sigue dibujándose — una posición inusual sobre la que escribir en una guía de fans, y la razón de que este artículo sea deliberadamente parco en caracterización.</p>

      <h2>Lo que registra la wiki del fandom</h2>
      <p>La wiki del fandom es la fuente de la mayor parte de lo que se dice de Columbina, y dos de sus afirmaciones importan lo suficiente para nombrarlas.</p>
      <p>La primera es que ella y Pierrot nunca tuvieron una relación romántica. Esto contradice una lectura de la propia narración de historia de amor del circo y va contra la suposición de que la tragedia en el centro del pasado de Pierrot fue un romance. El desarrollador ha declarado por separado que Pierrot ya ha superado esa historia y ha crecido desde entonces — lo que sugiere que el trasfondo es una fuente de carácter y no una herida fija.</p>
      <p>La segunda es un vínculo implícito con el papel de Harlequin en su muerte: la wiki registra que Harlequin la mató para «salvarla» y que Pierrot se negó a participar. La wiki lo plantea como implicación y no como declaración, y así debe leerse. El desarrollador ha confirmado la forma general de la historia del circo en respuestas de AMA, así que la historia es real; la lectura concreta del papel de Harlequin en ella no está confirmada por una fuente de primera mano.</p>
      <div class="walkthrough-note"><strong>Marcar el material del fandom como material del fandom</strong><p>«La wiki del fandom registra que Harlequin la mató para salvarla» es una afirmación distinta de «Harlequin la mató para salvarla». La primera puede contrastarse con una fuente. La segunda no, porque ninguna fuente la declara. Las guías que sueltan la atribución están tomando una decisión editorial que las evidencias no respaldan.</p></div>

      <h2>Por qué los detalles retenidos son deliberados</h2>
      <p>Hay una razón por la que el desarrollador guarda sus detalles concretos, y no es un accidente de calendario. A un personaje cuyo diseño está sin terminar no se le puede describir en términos finales — la altura, el vestuario y la silueta siguen decidiéndose, y cualquier guía que los enunciara estaría describiendo una intención y no un hecho. También es la razón de que no exista cumpleaños oficial ni edad numérica oficial para ella, y de que el «único cumpleaños confirmado» de este reparto pertenezca a otra persona por completo.</p>
      <p>La consecuencia práctica para el lector es que cualquier página que describa a Columbina en detalle —su apariencia, su altura, su papel exacto en la noche en que murió— está describiendo algo que aún no se ha decidido, sea cual sea el nivel de confianza que aparente.</p>

      <h2>Dónde aparece en la versión actual</h2>
      <ul>
        <li><strong>Como trasfondo.</strong> Las historias de ambos protagonistas giran en torno a ella, y la versión actual revela esa historia en fragmentos y no en una escena.</li>
        <li><strong>Como nombre.</strong> Las notas oficiales de mantenimiento registran que una línea antes incompleta apareció al introducir su nombre, y una actualización de desarrollo más reciente describe una escena corta nueva que la menciona.</li>
        <li><strong>Como silueta.</strong> Las notas de desarrollo mencionan siluetas de flashback, lo que implica que ella es visible en el pasado incluso con su diseño sin terminar.</li>
      </ul>
      <p>Que se la mencione en la versión mientras sigue en producción no es una contradicción que el desarrollador deba explicar. Es la forma en que se está haciendo el trabajo, y la razón de que una guía cuidadosa pueda hablar de ella sin describirla.</p>

      <div class="walkthrough-tip"><strong>Una forma práctica de seguirle la pista</strong><p>No esperes a que una wiki te la resuma. Observa las escenas cortas que la mencionan, anota las palabras que el propio juego usa sobre ella y trata cada detalle descriptivo que encuentres en otros sitios como una propuesta hasta que el desarrollador muestre el diseño terminado. Así la historia va por delante de la especulación, que es la única forma de que el desarrollo de este personaje pueda sorprenderte de verdad.</p></div>

      <h2>Cómo hablar de Columbina con responsabilidad</h2>
      <ul>
        <li>Atribuye las afirmaciones del fandom al fandom, explícitamente y cada vez.</li>
        <li>No publiques una altura, una edad, un cumpleaños o un vestuario como hechos sobre ella.</li>
        <li>No coloques a la protagonista en su historia; el desarrollador lo ha descartado.</li>
        <li>Sí lee el registro de «nunca romántica con Pierrot» como la corrección de una lectura errónea habitual, no como un romance nuevo.</li>
        <li>Sí trata el hilo de «la mató para salvarla» como una implicación que extrae el fandom, no como un hecho confirmado.</li>
      </ul>
      <p>Ella es el centro emocional de una historia sobre dos personas que no pueden dejar de competir, y la razón de que ambos estén dañados. Eso es lo seguro que se puede decir. El resto del cuadro merecerá la pena leerse cuando el desarrollador termine de dibujarla y publique los detalles — y esta página se actualizará entonces en lugar de rellenarse ahora.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Día 3: estado del lanzamiento y progreso verificado',
    description: 'Un informe de estado verificado sobre el Día 3 en The Freak Circus — lo que confirman las actualizaciones oficiales de desarrollo, qué significa el alcance de la beta y por qué no existe ninguna fecha.',
    date: '2026-10-10',
    tags: ['Día 3', 'Actualizaciones', 'Verificación de datos'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'Una imagen oficial de actualización de desarrollo de la versión del Día 3',
    readingTime: '9 min de lectura',
    content: `
      <p class="article-lede">El Día 3 se está desarrollando, no está terminado y no tiene fecha de lanzamiento anunciada. Esa combinación es todo el resumen honesto. Todo lo demás que circula sobre el Día 3 —meses, fines de semana, cuentas atrás— es una inferencia construida sobre actividad de desarrollo, y el desarrollador ha pedido explícitamente que no se repitan las afirmaciones de fecha que vienen de fuera.</p>
      <div class="walkthrough-note"><strong>Estado de un vistazo</strong><p>Versión pública hoy: 0.2. El Día 3 está en desarrollo activo. No se ha anunciado ninguna fecha de lanzamiento, ningún mes ni ningún fin de semana. Las cifras que se citan abajo son cifras del alcance de la beta, no porcentajes de todo el contenido, y la diferencia importa.</p></div>

      <h2>Lo que confirman las actualizaciones oficiales</h2>
      <p>El desarrollador publica actualizaciones semanales de desarrollo y series de respuestas de AMA en el Tumblr oficial, y las publicaciones del Día 3 allí forman un registro fiable del trabajo en curso. Entradas recientes describen:</p>
      <ul>
        <li><strong>Programación continua con recursos provisionales.</strong> Las escenas recién programadas siguen usando marcadores de posición y funcionan solo parcialmente, con transiciones, elecciones e imágenes que se pulirán cuando esas decisiones de escena estén cerradas.</li>
        <li><strong>Una escena nueva y muy corta que se refiere a Columbina.</strong> Su diseño de personaje está previsto pronto para que las siluetas de los flashbacks se mantengan coherentes.</li>
        <li><strong>Progreso de la beta.</strong> Una actualización anterior describió una parte de la beta del Día 3 como terminada y situó la beta en torno al 30–40% de la actualización completa. Una actualización posterior describió estar casi a mitad de camino del contenido previsto para la prueba beta.</li>
        <li><strong>Un guion más amplio que el del Día 2</strong>, con contenido adicional de finales malos y escenas ocultas descritas.</li>
        <li><strong>Trabajo en marcha en la escena de la cafetería</strong>, con algunas elecciones y situaciones que necesitan más revisión, y más bocetos y posiblemente fondos nuevos todavía pendientes.</li>
        <li><strong>Nuevos sprites seleccionados</strong> para Harlequin, Pierrot y Jester, con revisiones y sprites nuevos del Doctor previstos cuando el desarrollo llegue a su escena.</li>
      </ul>
      <p>Nada de eso es un calendario de lanzamiento. Las actualizaciones de guion, arte, sprites y programación confirman que el desarrollo está activo; no significan que el Día 3 esté terminado. El Día 3 solo debe considerarse lanzado cuando aparezca de verdad una nueva versión pública.</p>
      <div class="walkthrough-tip"><strong>Lee el porcentaje con cuidado</strong><p>«30–40% de la actualización completa» y «casi a mitad de camino del contenido previsto para la beta» describen alcances distintos. La primera mide toda la actualización; la segunda mide la porción menor de contenido reservada para la beta. Ninguna es un porcentaje del juego terminado, y una beta es en sí misma un hito y no un lanzamiento.</p></div>

      <h2>Por qué no se da ninguna fecha</h2>
      <p>La postura del desarrollador es coherente en el FAQ oficial y en las respuestas del Askbox: no se ha anunciado ninguna fecha de lanzamiento, y no deben repetirse las afirmaciones de fecha procedentes de fuera de las publicaciones oficiales. Es una instrucción deliberada al fandom, no un descuido.</p>
      <p>Hay un contexto práctico. El mismo periodo de desarrollo ha incluido ocuparse de subidas no autorizadas a Google Play, y el desarrollador ha señalado que un lanzamiento en tienda oficial recibiría su propio anuncio. Una fecha anunciada antes de que la versión esté terminada, y antes de que la cuestión de la distribución esté resuelta, sería una promesa que no se podría cumplir.</p>

      <h2>Qué se espera que cambie con el Día 3</h2>
      <p>La forma prevista del Día 3 es mayor que lo que vino antes, y eso tiene consecuencias directas sobre lo que la versión actual muestra y no muestra.</p>
      <ul>
        <li><strong>Contenido nuevo de finales malos</strong> descrito en las publicaciones de desarrollo, lo que significa que la categoría de finales de la versión crecerá más allá del único final «Missing» que existe hoy.</li>
        <li><strong>Escenas ocultas</strong> también descritas, que son una cosa distinta de una ruta — una escena oculta es contenido, no una conclusión.</li>
        <li><strong>Más ramas.</strong> El guion es más grande que el del Día 2, y el trabajo de ramificación descrito incluye secciones con muchas elecciones que necesitan pruebas extra.</li>
        <li><strong>La historia de Columbina.</strong> La escena corta nueva y el trabajo de siluetas de flashback apuntan ambos a que aflore más del trasfondo compartido.</li>
      </ul>
      <p>Lo que no se ha anunciado es que alguno de los cuatro finales planeados llegue en el Día 3. Los finales planeados siguen planeados.</p>

      <h2>Qué está confirmado sobre el lanzamiento en sí</h2>
      <p>Algunas cosas sobre cómo se entregará el Día 3 están decididas, aunque la fecha no.</p>
      <ul>
        <li><strong>Será una versión pública en la página oficial.</strong> El desarrollador ha confirmado la página de itch.io como la única página oficial, así que el Día 3 aparecerá allí y no a través de un lanzador de terceros ni de una tienda aparte.</li>
        <li><strong>Las plataformas ya están establecidas.</strong> La versión 0.2 existe para navegador, Windows, macOS, Linux y Android, así que ese mismo conjunto es la expectativa razonable para el Día 3 — aunque no se ha anunciado ningún orden de lanzamiento por plataforma.</li>
        <li><strong>Cualquier lanzamiento en tienda oficial se anunciaría aparte.</strong> El desarrollador ha señalado que una versión en tienda recibiría su propio anuncio y no llegaría en silencio junto a la actualización de itch.io.</li>
        <li><strong>Las subidas no autorizadas se están gestionando.</strong> Se dedicó tiempo a ocuparse de subidas no autorizadas a Google Play, que es un problema de distribución y no de desarrollo — pero significa que el camino del jugador hacia un lanzamiento oficial todavía no es del todo sencillo.</li>
      </ul>

      <h2>Cómo comprobar el estado actual por tu cuenta</h2>
      <ol class="walkthrough-steps">
        <li><strong>Abre la página oficial de itch.io</strong> y confirma que la versión listada sigue siendo la 0.2.</li>
        <li><strong>Lee las entradas del devlog en orden.</strong> Están fechadas y son de primera mano.</li>
        <li><strong>Consulta el Tumblr oficial</strong> para la actualización semanal más reciente y la serie de respuestas de AMA.</li>
        <li><strong>Trata cualquier fecha que encuentres en otros sitios como no verificada</strong>, salvo que aparezca en uno de esos lugares.</li>
        <li><strong>Ignora las páginas de cuenta atrás.</strong> Una cuenta atrás es una estimación de fans con un reloj encima.</li>
      </ol>
      <p>El desarrollador ha confirmado que no existe servidor oficial de Discord, así que cualquier servidor que no esté enlazado desde las páginas oficiales de itch.io, Tumblr, Patreon o Bluesky debe tratarse como gestionado por fans o no autorizado. Esa regla también se aplica a los anuncios de fechas: una fecha citada en un Discord de fans es una fecha de fans.</p>

      <h2>Qué hacer con la versión actual mientras tanto</h2>
      <p>Conserva tus partidas, anota qué versión las creó y evita sobrescribir la ranura de la primera partida. Cuando llegue la próxima versión, lee sus notas de cambios antes de suponer que los consejos de ruta de la versión 0.2 siguen siendo válidos. La ramificación de un prototipo puede reorganizarse entre versiones, y la lista de finales cambiará a medida que el guion se termine.</p>
      <p>Para el registro día a día, consulta el <a href="/es/day-3">rastreador del Día 3</a> del sitio, y para lo que la versión actual ya contiene, la <a href="/es/blog/current-prototype-guide">guía del prototipo</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: '¿Versión de navegador o descarga? Cómo jugar a The Freak Circus',
    description: 'Una comparación práctica entre la versión de navegador y las descargas de escritorio y Android de The Freak Circus, incluido cómo se comporta el guardado en cada una.',
    date: '2026-10-13',
    tags: ['Navegador', 'Descarga', 'Instalación'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus, la única página oficial de itch.io del juego',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">Ambas versiones ejecutan la misma versión 0.2 de la misma historia, así que la elección no va de contenido. Va de fiabilidad, de configuración y de cuánto progreso estás dispuesto a confiar a un navegador. Para la mayoría de jugadores la respuesta es: navegador primero, descarga antes de que empieces a preocuparte por las partidas guardadas.</p>
      <div class="walkthrough-note"><strong>Todo procede de un único lugar</strong><p>El desarrollador ha declarado que la página de itch.io es la única página oficial del juego y ha pedido que el juego no se vuelva a subir ni se republique. No existe servidor oficial de Discord. Si una página te ofrece una «descarga completa» en otro sitio, está sin licencia en el mejor de los casos, y este sitio no la enlaza.</p></div>

      <h2>Qué está disponible</h2>
      <ul>
        <li><strong>Navegador web (HTML5)</strong> — se ejecuta en el navegador a través de la página oficial de itch.io. Sin instalación.</li>
        <li><strong>Windows</strong> — versión para PC, versión 0.2.</li>
        <li><strong>macOS</strong> — versión para Mac, versión 0.2.</li>
        <li><strong>Linux</strong> — versión para Linux, versión 0.2.</li>
        <li><strong>Android</strong> — versión en APK, versión 0.2.</li>
      </ul>
      <p>Todo es de paga lo que quieras, así que la versión completa puede descargarse gratis y pagar es un apoyo opcional a un desarrollador que ha descrito el proyecto como un trabajo mayormente en solitario.</p>

      <h2>Elige la versión de navegador cuando</h2>
      <p>La versión de navegador es la forma más rápida de empezar y la más cómoda para leer una guía mientras juegas. No hay ningún archivo que extraer, ninguna plataforma que ajustar y nada que desinstalar después. También es la opción sensata en una máquina compartida o temporal donde prefieras no dejar archivos del juego.</p>
      <p>Jugar en el navegador es una vía mantenida y no un accidente: el desarrollador ha documentado bloqueos específicos del navegador —incluido uno en la carpa de Ticket Taker y en algunas secciones animadas— y ha publicado correcciones para ellos. La advertencia pendiente que se conoce es que saltar algunas escenas muy rápido puede dejar los efectos visuales desincronizados, así que dale un poco de paciencia a la versión de navegador cuando vayas pulsando sin parar.</p>

      <h2>Elige una descarga cuando</h2>
      <p>Las versiones de escritorio son la mejor opción para partidas repetidas y para quien planea conservar intacta una partida de la primera pasada. Una instalación local no está sujeta a los límites de almacenamiento del navegador, mantiene su propia copia de los archivos del juego y te da la interfaz completa de Ren'Py con vuelta atrás en el historial — la función que hace práctica, en lugar de tediosa, la comparación de ramas.</p>
      <div class="walkthrough-tip"><strong>Extrae por completo los archivos de escritorio antes de iniciar</strong><p>Los paquetes de escritorio llegan comprimidos. Extrae el archivo completo, mantén la aplicación junto con sus archivos incluidos y luego ejecútala. Lanzar un ejecutable desde dentro de un archivo comprimido es la causa más común de una versión que parece arrancar y luego se comporta mal.</p></div>

      <h2>Cómo difiere el guardado y qué no está documentado</h2>
      <p>Aquí es donde las dos versiones divergen de verdad, y donde el consejo publicado es menos fiable.</p>
      <ul>
        <li><strong>Ambas usan la interfaz estándar del motor.</strong> The Freak Circus es una versión de Ren'Py, así que guardar usa los botones normales de guardar y cargar, una lista de ranuras, guardado y carga rápidos, y vuelta atrás en el historial.</li>
        <li><strong>Ambas ofrecen un punto de entrada al Día 2.</strong> El menú incluye un botón del Día 2 con una breve introducción, así que puedes continuar al Día 2 sin rejugar el Día 1.</li>
        <li><strong>Las partidas del navegador viven en el almacenamiento del navegador.</strong> Borrar los datos del sitio, abrir una ventana privada o usar una configuración de privacidad estricta puede eliminarlas sin aviso, y quedan atadas al perfil del navegador que las creó. Es la razón más común por la que los jugadores informan de progreso perdido.</li>
        <li><strong>No existe documentación oficial del guardado.</strong> El desarrollador no ha publicado ubicaciones de guardado, números de ranuras, el comportamiento del guardado automático ni si las partidas del navegador pueden moverse a una versión de escritorio. Cualquier guía que te dé una ruta concreta, un número de ranuras o un procedimiento de transferencia garantizado está describiendo comportamiento del motor y no una respuesta oficial para este juego.</li>
      </ul>
      <p>Ren'Py sí ofrece acciones de exportar e importar partidas en su overlay del motor, y que funcionen de forma fiable para mover una partida del navegador a una versión de escritorio de este juego no se ha confirmado. Trátalo como algo que vale la pena probar y no como un procedimiento, y haz copia de seguridad de lo que te importe antes de experimentar.</p>

      <h2>Una regla simple</h2>
      <ul>
        <li><strong>Leerlo una vez, en una máquina compartida o sin instalar nada:</strong> usa la versión de navegador.</li>
        <li><strong>Planear rejugadas, comparar ramas o conservar una partida a largo plazo:</strong> descarga la versión de tu plataforma.</li>
        <li><strong>En un teléfono:</strong> el APK de Android es la opción con soporte.</li>
        <li><strong>Sea cual sea la plataforma:</strong> toma la descarga de la página oficial de itch.io y conserva tus propias copias de seguridad de cualquier partida que te doliera perder.</li>
      </ul>
      <p>Ninguna de las dos versiones te da más historia que la otra. La versión 0.2 contiene los mismos dos días y el mismo único final en ambos casos, así que la diferencia práctica es enteramente cuán a salvo sobrevive tu progreso.</p>

      <h2>Otras diferencias que conviene conocer</h2>
      <p>Tres cosas menores separan las versiones, y ninguna va de calidad.</p>
      <ul>
        <li><strong>Idiomas y voz.</strong> El juego se publica en inglés, portugués de Brasil y chino simplificado, con la traducción al chino revisada para la versión 0.2. El doblaje es solo en inglés, interpretado por Darthsuki, así que el ajuste de idioma cambia el texto y no el audio en todas las versiones.</li>
        <li><strong>Entrada y manejo de texto.</strong> Las versiones de escritorio soportan las comodidades habituales de teclado, ratón y ventana, incluido desplazarse hacia atrás por una escena. El juego en el navegador depende de la página, lo cual está bien para una lectura directa pero resulta más incómodo para comparar dos ramas lado a lado.</li>
        <li><strong>Menús e interfaz.</strong> El menú incluye un punto de entrada al Día 2 en ambas versiones, la función más útil para quien quiera volver al contenido actual sin rejugar el Día 1.</li>
      </ul>
      <p>Hay además una advertencia independiente de la versión que aplica a ambas: el juego está clasificado 18+, y sus advertencias de contenido publicadas incluyen sangre, muerte, asesinato y gore, alusiones al canibalismo, abuso, secuestro, uso de drogas sin consentimiento, dominación física y contacto físico sin consentimiento. Lee esa lista antes de decidir cuánta parte de la historia quieres leer por adelantado.</p>
      <p>Para la lista de plataformas y las notas de seguridad, consulta la <a href="/es/download">guía de descargas</a>; para cómo se comporta el guardado, la <a href="/es/save">guía de guardado</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Por qué The Freak Circus solo tiene un final ahora mismo',
    description: 'The Freak Circus incluye un final jugable porque es un prototipo — cómo encajan el final malo implementado, los cuatro finales planeados y el Día 3.',
    date: '2026-10-16',
    tags: ['Finales', 'Versión 0.2', 'Desarrollo'],
    image: '/images/home/faq.webp',
    imageAlt: 'El prototipo actual de The Freak Circus, versión 0.2',
    readingTime: '8 min de lectura',
    content: `
      <p class="article-lede">La razón de que solo haya un final no es que los demás estén ocultos, ni que se desbloqueen en una segunda partida de la versión 0.2, ni que hayas pasado por alto una condición. La razón es que el juego es un prototipo, y los finales son la parte de un guion que se escribe al final.</p>
      <div class="walkthrough-note"><strong>Qué explica este artículo</strong><p>La relación entre el único final implementado, los cuatro finales que el desarrollador ha nombrado y el estado del guion. Contiene spoilers del único final que existe en la versión pública.</p></div>

      <h2>Un solo final, y es malo</h2>
      <p>La versión 0.2 contiene exactamente un final: «Missing». Se alcanza en el Día 1, cuando la protagonista no hace nada mientras un hombre se burla de Pierrot delante de un público. Una figura desconocida le entrega un boleto rosa, la lleva a la carpa rosa y todos los miembros del circo le niegan la entrada. El juego declara que la protagonista no logró llamar la atención de Pierrot y tuvo un final trágico.</p>
      <p>Ese final no es un marcador de posición de uno bueno. Es un fragmento de escritura terminado con un tema incorporado —una protagonista que rehúsa implicarse en el conflicto central es apartada de él— y es la única conclusión que la versión actual ofrece oficialmente.</p>

      <h2>Hay cuatro conclusiones planeadas y ninguna está en la versión</h2>
      <ul>
        <li><strong>El final de Pierrot</strong> — una conclusión romántica con Pierrot.</li>
        <li><strong>El final de Harlequin</strong> — una conclusión romántica con Harlequin.</li>
        <li><strong>El final de la Protagonista</strong> — una conclusión sin romance, aunque pueden elegirse amistades junto a ella.</li>
        <li><strong>«All together»</strong> — la protagonista se enamora de Pierrot y de Harlequin al mismo tiempo.</li>
      </ul>
      <p>Las nombra el desarrollador en la página oficial y en el FAQ oficial, y se describen repetidamente como aún en desarrollo. No existe ninguna lista publicada de condiciones para activarlas, porque no hay nada que activar. Una guía paso a paso para desbloquear el final de Harlequin estaría describiendo una versión que no existe públicamente.</p>
      <h3>Y no hay total oficial</h3>
      <p>Es fácil sumar las cifras y obtener cinco. Ese total nunca se ha declarado. El desarrollador ha dicho que hay varios finales planeados pero que no puede dar una cifra, porque el guion sigue siendo un trabajo en progreso — y una conclusión planeada puede fusionarse, rehacerse o ampliarse antes de publicarse.</p>

      <h2>Los finales son lo último que produce un guion</h2>
      <p>Esta es la razón práctica de que la versión actual tenga el aspecto que tiene. Una narrativa ramificada tiene que construirse de dentro hacia afuera: el día necesita sus escenas, las escenas necesitan sus elecciones, las elecciones necesitan consecuencias que alimenten escenas posteriores, y solo entonces existe la forma de una conclusión. La versión actual tiene los Días 1 y 2 con sus presentaciones, sus ramas y sus variaciones de escena, más un final colocado donde demuestra una consecuencia.</p>
      <p>La lista oficial de funciones es inusualmente honesta con esto. Registra cinco personajes presentados, un final malo implementado y las presentaciones de personajes completas, con el resto de la historia aún en desarrollo. Son cuatro afirmaciones distintas, y son coherentes con un proyecto que ha terminado su apertura y sigue construyendo el medio y el final.</p>
      <div class="walkthrough-tip"><strong>Cómo comprobar si una rama es de verdad distinta</strong><p>Como no hay finales que comparar, la prueba con significado es si cambia una escena. Carga una partida, cambia una respuesta con efecto y compara lo que sigue. Si dos partidas producen una diferencia reproducible en el diálogo, la puesta en escena o en quién aparece, la rama es real. Si producen una réplica distinta, eso es una variación, no una ruta.</p></div>

      <h2>El Día 3 es donde se están escribiendo las conclusiones</h2>
      <p>El siguiente día del juego está en desarrollo activo, y las actualizaciones oficiales describen un guion mayor que el del Día 2, con contenido adicional de finales malos y escenas ocultas. La categoría de finales es explícitamente de las que crecen: la versión actual lista un final malo, y las notas de actualización hablan de más contenido de finales en escritura.</p>
      <p>También es la razón de que no exista fecha de lanzamiento. El desarrollador ha pedido que no se repitan las afirmaciones de fecha ajenas, lo que se lee como un intento de impedir que se forme un calendario en torno a un trabajo que no está terminado. Las actualizaciones de desarrollo describen progreso de la beta —una parte de la beta terminada, la beta en torno al 30–40% de la actualización, después casi a mitad de camino del contenido previsto para la beta—, pero una beta es un hito, no un lanzamiento.</p>

      <h2>Qué significa esto para quien juega hoy</h2>
      <ul>
        <li><strong>No hay nada que desbloquear.</strong> Jugar la versión 0.2 hasta el final llega al final «Missing», y ese es todo el contenido de finales de la versión.</li>
        <li><strong>Las rejugadas siguen mereciendo la pena.</strong> La ramificación es real, y las variaciones de escena, las apariciones de personajes y las distintas lecturas son cosas que la versión actual contiene.</li>
        <li><strong>No compres ni persigas un paquete de «todos los finales»</strong> para un juego que hoy tiene un final. De todos modos, nada fuera de la página oficial de itch.io está autorizado.</li>
        <li><strong>Conserva tus partidas.</strong> Las elecciones de la versión 0.2 no necesariamente se trasladarán a la próxima versión pública, y la lista de finales cambiará.</li>
      </ul>
      <p>El resumen honesto es que The Freak Circus son dos días y pico de una historia de tres días, con el último día en producción. Lo que puedes jugar es una apertura bien construida con ramas reales. Lo que no puedes jugar es el final — y por ahora, eso incluye a los buenos.</p>
      <p>Para la lista de finales y rutas con fuentes, consulta la <a href="/es/endings">guía de finales</a>; para el estado del desarrollo, el <a href="/es/day-3">rastreador del Día 3</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'Cómo leer guías de fans sin absorber desinformación',
    description: 'Un método para evaluar cualquier guía de fans de The Freak Circus — clasifica las afirmaciones en implementado, planeado y sin verificar, y detecta los errores más comunes.',
    date: '2026-10-19',
    tags: ['Verificación de datos', 'Guías', 'Comunidad'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Arte de la comunidad de los personajes de The Freak Circus',
    readingTime: '9 min de lectura',
    content: `
      <p class="article-lede">Toda novela visual con un fandom pequeño y entusiasta acaba acumulando guías que se contradicen entre sí, y algunas están equivocadas con total confianza. Leerlas no es difícil si tienes un método. El método es simple: clasifica cada afirmación en tres cajones —implementado, planeado o sin verificar— y niégate a dejar que una afirmación cambie de cajón por aparecer las veces suficientes.</p>
      <div class="walkthrough-note"><strong>Por qué esto importa aquí</strong><p>The Freak Circus tiene tres propiedades inusuales que hacen comunes las malas guías: el juego es un prototipo con un único final implementado, su reparto tiene medidas publicadas pero ninguna edad publicada, y buena parte del material interesante de los personajes procede de páginas de la wiki del fandom y no de publicaciones del desarrollador. Cada una de esas propiedades ha producido una categoría concreta de desinformación.</p></div>

      <h2>Los tres cajones</h2>
      <ul>
        <li><strong>Implementado.</strong> Puedes alcanzarlo en la versión pública ahora mismo. Un final cumple la condición: «Missing», el final malo del Día 1 que se alcanza no haciendo nada mientras se burlan de Pierrot.</li>
        <li><strong>Planeado.</strong> El desarrollador lo ha nombrado y no está en ninguna versión. Cumplen la condición cuatro: Pierrot, Harlequin, Protagonista y «All together».</li>
        <li><strong>Sin verificar.</strong> Sin fuente de primera mano, pero repetido por todas partes. Rutas de guardado, números de ranuras, ritmos de guardado automático, edades y cumpleaños exactos, tiempo total de completarlo todo, fechas de lanzamiento del Día 3 y cualquier número concreto de finales.</li>
      </ul>
      <p>La mayoría de discusiones factuales sobre este juego se disuelven en cuanto cada frase está en un cajón. «El juego tiene cinco finales» es un error de fusión: un final implementado más cuatro planeados, presentado como un total confirmado que el desarrollador nunca dio.</p>

      <h2>Cinco preguntas para hacerle a una guía</h2>
      <ol class="walkthrough-steps">
        <li><strong>¿Sobre qué versión trata?</strong> La versión 0.2 es la versión pública actual. Una guía que nunca nombra una versión está describiendo la memoria de su autor.</li>
        <li><strong>¿Enlaza una fuente?</strong> Una página oficial, una entrada de devlog, una respuesta de AMA, una publicación de Tumblr. Una guía que no puede señalar una de ellas está interpretando.</li>
        <li><strong>¿Marca el material del fandom como material del fandom?</strong> Los detalles de vestuario, la razón del silencio de Pierrot, el papel de Harlequin en la muerte de Columbina — todo útil, todo procedente de la wiki del fandom, todo mereciendo etiqueta.</li>
        <li><strong>¿Dice dónde empiezan los spoilers?</strong> Una guía que destroza la apertura del Día 2 sin avisar no es más útil que una que avisa.</li>
        <li><strong>¿Mantiene la incertidumbre donde debe?</strong> «Planeado», «no implementado», «sin confirmar» no son debilidades en una guía. Son las partes que seguirán siendo ciertas después de la próxima actualización.</li>
      </ol>

      <h2>Los errores concretos que vale la pena detectar</h2>
      <h3>Rutas románticas para personajes que no las tienen</h3>
      <p>Las opciones de ruta confirmadas son Pierrot, Harlequin, ambos o ninguno. No existe ruta de Jester, ni de Ticket Taker, ni del Doctor. El desarrollador ha descrito convertir a los personajes restantes en opciones románticas como una posibilidad y no un compromiso, y cualquier ruta así llegaría lo más probable como contenido adicional o DLC. Las guías que describen una ruta de Ticket Taker «desbloqueada con persistencia y diálogo cuidadoso», un final «Clean Hands» del Doctor o una ruta de Jester que «se desbloquea en el Día 2» están describiendo cosas que no existen. La actualización del Día 2 añadió personajes, sprites animados, un menú rediseñado y una versión de Android — no rutas nuevas.</p>
      <h3>Un «final bueno» que no existe</h3>
      <p>No hay finales buenos implementados. El único final de la versión es malo, y las conclusiones románticas que a menudo se describen como los desenlaces «buenos» son los mismos finales planeados de arriba — sin terminar y sin garantía de ser los resultados que los fans esperan.</p>
      <h3>Cifras precisas sin fuente</h3>
      <p>Edades concretas, cumpleaños, una altura para Columbina, una duración total, un número exacto de finales y una ubicación de guardado precisa son invenciones de fans vestidas de datos. Las medidas genuinas son la tabla de alturas del desarrollador y el orden relativo de edades — y nunca se ha publicado una edad numérica para nadie del reparto.</p>
      <h3>Fechas para el Día 3</h3>
      <p>No se ha anunciado ninguna fecha de lanzamiento, y el desarrollador ha pedido que no se repitan las afirmaciones de fecha ajenas. Una página de cuenta atrás es una estimación de fans con un reloj encima. La única fecha que cuenta es la de la página oficial de itch.io o la de una publicación oficial.</p>

      <h2>Leer fuentes sin confiar ciegamente en ellas</h2>
      <p>La wiki del fandom es genuinamente valiosa para este juego y merece usarse — con una advertencia concreta. Recopila material de personajes de las propias escenas del juego, lo que significa que sus descripciones de personajes están cerca de la fuente, mientras que sus inferencias y fechas no son de primera mano. El hábito práctico es mantener las dos cosas separadas mientras lees.</p>
      <ul>
        <li><strong>Lo que la wiki hace bien:</strong> el detalle de vestuario, las explicaciones dentro de la ficción, los resúmenes de relaciones y el registro de lo que el desarrollador ha respondido en hilos de AMA.</li>
        <li><strong>Lo que la wiki hace mal:</strong> edades numéricas y la mayoría de cumpleaños, una altura para Columbina y lecturas de acontecimientos ambiguos de la historia afirmadas con más firmeza de la que las evidencias permiten.</li>
        <li><strong>Qué hacer:</strong> copia la descripción, conserva la cautela.</li>
      </ul>
      <div class="walkthrough-tip"><strong>Una prueba de una línea para cualquier afirmación</strong><p>Pregúntate: «¿podría el desarrollador contradecir esto mañana sin que nadie lo note?» Si la respuesta es sí, la afirmación necesita una cautela o una atribución. «El desarrollador ha confirmado ocho tipos de boleto» no puede contradecirse en silencio. «Harlequin tiene 21», sí — y así ha sido.</p></div>

      <h2>Una cosa más: dónde conseguiste el juego</h2>
      <p>Antes de evaluar cualquier guía, revisa sus enlaces de fuente. El desarrollador ha declarado que la página de itch.io es la única página oficial del juego y ha pedido que no se vuelva a subir ni se republique. No existe servidor oficial de Discord, así que todo servidor que no esté enlazado desde las páginas oficiales de itch.io, Tumblr, Patreon o Bluesky está gestionado por fans o no autorizado.</p>
      <p>Las guías que empujan una «descarga espejo», un programa de «verificación» o un instalador «parcheado» no son guías en absoluto. Nunca instales un programa aparte ni desactives la protección antivirus para conseguir este juego.</p>

      <h2>Un hábito de trabajo</h2>
      <p>Lee primero la nota de alcance de una guía. Si dice qué versión cubre, dónde están sus fuentes y qué partes siguen en desarrollo, el resto puede confiarse en proporción. Si abre con una afirmación segura sobre un final que no existe, suéltala — es una guía que también te dirá con confianza lo equivocado sobre todo lo demás.</p>
      <p>Para la versión verificada de los temas más buscados, empieza por la <a href="/es/endings">guía de finales</a>, la <a href="/es/characters/heights">guía de alturas</a> y la <a href="/es/save">guía de guardado</a> — las tres separan los hechos confirmados de las afirmaciones sin verificar del mismo modo.</p>
    `,
  },
];
