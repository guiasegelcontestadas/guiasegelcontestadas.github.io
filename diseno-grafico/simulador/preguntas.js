const bancoPreguntas = [
    {
        "id": 1,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Cuál es el principio de la teoría de la Gestalt que explica la tendencia a agrupar elementos que se encuentran próximos entre sí en el espacio?",
        "opciones": [
            "A) Semejanza",
            "B) Cierre",
            "C) Continuidad",
            "D) Proximidad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El principio de proximidad establece que los elementos que están cerca unos de otros tienden a ser percividos como una unidad o grupo visual."
    },
    {
        "id": 2,
        "area": "Fundamentos del Diseño",
        "pregunta": "En la teoría del color, ¿qué nombre reciben los colores que se encuentran opuestos en el círculo cromático y generan el máximo contraste al ser combinados?",
        "opciones": [
            "A) Monocromáticos",
            "B) Análogos",
            "C) Complementarios",
            "D) Triadas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los colores complementarios son aquellos situados frente a frente en la rueda de colores; su combinación genera alto impacto visual y contraste simultáneo."
    },
    {
        "id": 3,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Cuál es el elemento conceptual del diseño que actúa como el punto focal y posee posición, pero carece de largo, ancho y profundidad?",
        "opciones": [
            "A) El plano",
            "B) El volumen",
            "C) La línea",
            "D) El punto"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El punto indica posición en el espacio, es el inicio y fin de una línea y no tiene dimensiones físicas tangibles como objeto conceptual."
    },
    {
        "id": 4,
        "area": "Fundamentos del Diseño",
        "pregunta": "Al diseñar una retícula modular, ¿cómo se denominan los espacios verticales y horizontales que separan los módulos para evitar la saturación visual?",
        "opciones": [
            "A) Márgenes",
            "B) Callejones o medianiles",
            "C) Zonas espaciales",
            "D) Líneas de flujo"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los callejones (gutters o medianiles) son los espacios en blanco entre columnas y filas que separan el contenido y mejoran la legibilidad."
    },
    {
        "id": 5,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Qué propiedad del color hace referencia al grado de pureza o saturación que posee un matiz respecto al gris?",
        "opciones": [
            "A) Valor",
            "B) Luminancia",
            "C) Tono",
            "D) Cromaticidad o saturación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La saturación o cromaticidad describe la intensidad o pureza de un color, determinando qué tan alejado está de un tono gris neutro."
    },
    {
        "id": 6,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Cuál es la función principal de la retícula (grid) en la composición gráfica editorial?",
        "opciones": [
            "A) Acelerar el proceso de impresión",
            "B) Determinar la paleta de colores del proyecto",
            "C) Reducir el peso de los archivos digitales",
            "D) Proveer un orden estructural para organizar la información"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La retícula es una estructura de líneas guías que ayuda a organizar de manera coherente, legible y armónica los elementos visuales y textuales."
    },
    {
        "id": 7,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Qué tipo de equilibrio se genera cuando los elementos a ambos lados de un eje central no son idénticos, pero poseen pesos visuales equivalentes?",
        "opciones": [
            "A) Simétrico",
            "B) Radial",
            "C) Cristalográfico",
            "D) Asimétrico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El equilibrio asimétrico equilibra elementos de diferente peso, forma, color o textura distribuyéndolos de forma dinámica sin un eje especular."
    },
    {
        "id": 8,
        "area": "Fundamentos del Diseño",
        "pregunta": "En la sintaxis de la imagen, ¿qué denota el concepto de 'escala'?",
        "opciones": [
            "A) El brillo relativo de un color",
            "B) La velocidad de transición entre fotogramas",
            "C) La cantidad de puntos por pulgada en una imagen",
            "D) La proporción de un objeto respecto a una referencia o tamaño real"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La escala se refiere al tamaño de un objeto en relación con otros elementos del diseño o con una medida estándar de referencia humana."
    },
    {
        "id": 9,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Cómo se define un patrón visual basado en la repetición modular rítmica con variaciones predecibles?",
        "opciones": [
            "A) Trama aleatoria",
            "B) Textura táctil",
            "C) Ritmo visual",
            "D) Ruido estocástico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El ritmo visual crea una sensación de movimiento ordenado mediante la repetición espaciada de elementos gráficos."
    },
    {
        "id": 10,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Qué principio compositivo se rompe deliberadamente al introducir un elemento discordante para atraer la atención inmediata del espectador?",
        "opciones": [
            "A) La jerarquía",
            "B) El contraste por anomalía",
            "C) La proporción áurea",
            "D) La simetría axial"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La anomalía ocurre cuando un elemento rompe el patrón general del diseño, generando un punto focal de alto impacto por contraste."
    },
    {
        "id": 11,
        "area": "Tipografía",
        "pregunta": "¿Cómo se denomina la distancia vertical medible entre la línea base de una línea de texto y la línea base de la línea inmediatamente superior?",
        "opciones": [
            "A) Tracking",
            "B) Interletraje",
            "C) Kerning",
            "D) Interlineado"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El interlineado (leading) mide el espacio vertical entre las líneas de base del texto sucesivas, afectando la legibilidad general."
    },
    {
        "id": 12,
        "area": "Tipografía",
        "pregunta": "¿Cuál es la diferencia técnica fundamental entre el kerning y el tracking?",
        "opciones": [
            "A) El tracking modifica el grosor del glifo y el kerning la altura.",
            "B) El kerning es para títulos y el tracking es exclusivamente para textos largos.",
            "C) El kerning ajusta el espacio entre dos caracteres específicos; el tracking ajusta el espacio de todo un bloque de texto de forma global.",
            "D) No existe diferencia técnica, son sinónimos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El kerning ajusta pares específicos de letras para corregir espacios ópticos irregulares, mientras que el tracking modifica el espaciado global de una selección de texto."
    },
    {
        "id": 13,
        "area": "Tipografía",
        "pregunta": "¿A qué clasificación tipográfica histórica pertenecen fuentes como Bodoni y Didot, caracterizadas por un alto contraste entre trazos finos y gruesos, y remates rectos?",
        "opciones": [
            "A) Egipcias",
            "B) Humanistas",
            "C) Didones o Modernas",
            "D) De transición"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las tipografías Didones (o modernas) surgieron a finales del siglo XVIII y principios del XIX, destacando por sus ejes verticales y contrastes drásticos."
    },
    {
        "id": 14,
        "area": "Tipografía",
        "pregunta": "¿Qué nombre recibe el trazo horizontal o inclinado que conecta dos astas en una letra, como ocurre en la letra 'H' o 'A'?",
        "opciones": [
            "A) Barra o través",
            "B) Ojo",
            "C) Ascendente",
            "D) Cola"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La barra (o traversa) es el elemento estructural horizontal que une dos astas verticales o diagonales en ciertos caracteres tipográficos."
    },
    {
        "id": 15,
        "area": "Tipografía",
        "pregunta": "En tipografía, ¿qué mide exactamente la 'altura de la x' (x-height)?",
        "opciones": [
            "A) El ancho promedio del glifo de la letra x",
            "B) La altura de los caracteres minúsculos sin contar ascendentes ni descendentes",
            "C) La altura total del carácter en mayúscula",
            "D) La longitud de la línea base al remate inferior"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La altura de la x determina el cuerpo visual de las minúsculas, siendo un factor clave para la legibilidad en tamaños pequeños."
    },
    {
        "id": 16,
        "area": "Tipografía",
        "pregunta": "¿Qué clasificación tipográfica carece por completo de remates (serifas) y muestra un grosor de trazo uniforme (palo seco)?",
        "opciones": [
            "A) Romanas",
            "B) Sans Serif",
            "C) Góticas",
            "D) Manuscritas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las fuentes Sans Serif o de palo seco no tienen terminales o remates en los extremos de sus trazos y suelen tener trazos geométricamente homogéneos."
    },
    {
        "id": 17,
        "area": "Tipografía",
        "pregunta": "¿Cómo se le llama al fenómeno visual donde el espacio entre letras debe ajustarse óptimamente en lugar de matemáticamente debido a la forma geométrica de los glifos?",
        "opciones": [
            "A) Kerning óptico",
            "B) Alineación forzada",
            "C) Justificación",
            "D) Modulación de caja"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El kerning óptico o manual compensa las diferencias de áreas blancas entre letras con formas angulares o curvas (como A, V, O) para lograr una lectura uniforme."
    },
    {
        "id": 18,
        "area": "Tipografía",
        "pregunta": "¿Qué es una tipografía 'Display' o de fantasía?",
        "opciones": [
            "A) Una fuente diseñada para la lectura de novelas en formato digital",
            "B) Un tipo de fuente monospace usada en programación",
            "C) Una fuente exclusiva para el sistema de impresión tipográfica en plomo",
            "D) Una tipografía optimizada para cuerpos grandes en carteles, títulos y señalización"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las fuentes Display están concebidas para llamar la atención en títulos o soportes de corto tiempo de lectura, priorizando la expresividad sobre la legibilidad de texto corrido."
    },
    {
        "id": 19,
        "area": "Tipografía",
        "pregunta": "¿Qué elemento tipográfico define la línea imaginaria sobre la cual se apoyan la mayoría de las letras minúsculas y mayúsculas?",
        "opciones": [
            "A) Línea de descendentes",
            "B) Línea media",
            "C) Línea de tapa",
            "D) Línea base (baseline)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La línea base (baseline) es la directriz horizontal invisible sobre la cual descansan los caracteres tipográficos."
    },
    {
        "id": 20,
        "area": "Tipografía",
        "pregunta": "Al diseñar un sistema editorial, ¿cuál es la regla general recomendada para la longitud de línea (medida) en párrafos de texto corrido?",
        "opciones": [
            "A) Más de 120 caracteres para mejorar el flujo",
            "B) Entre 45 y 75 caracteres por línea",
            "C) Exactamente 100 caracteres por línea",
            "D) Entre 10 y 20 caracteres por línea"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una línea de texto óptima oscila entre 45 y 75 caracteres (incluyendo espacios) para facilitar que el ojo humano salte de renglón sin fatiga."
    },
    {
        "id": 21,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Cuál es el modelo de color aditivo utilizado en dispositivos de visualización digital como monitores, pantallas LED y televisores?",
        "opciones": [
            "A) CMYK",
            "B) Lab",
            "C) Pantone",
            "D) RGB"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El modelo RGB (Rojo, Verde, Azul) es aditivo; la suma de luces de estos colores primarios en pantalla genera el espectro visible y el blanco."
    },
    {
        "id": 22,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué diferencia existe fundamentalmente entre los gráficos rasterizados (mapas de bits) y los gráficos vectoriales?",
        "opciones": [
            "A) Los vectoriales solo sirven para impresión offset y los rasterizados para web.",
            "B) Los rasterizados se pueden escalar infinitamente sin perder calidad.",
            "C) Los vectoriales usan fórmulas matemáticas basadas en vectores y nodos; los rasterizados usan una cuadrícula de píxeles.",
            "D) No hay diferencia matemática, solo el software que los abre."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los gráficos vectoriales se componen de ecuaciones matemáticas (puntos, curvas Bézier), lo que permite escalarlos sin pérdida de resolución; los mapas de bits dependen de una resolución fija de píxeles (DPI/PPI)."
    },
    {
        "id": 23,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué significan las siglas PPI en el ámbito de la edición digital de imágenes?",
        "opciones": [
            "A) Points Per Interaction",
            "B) Pulgadas por Píxel Impreso",
            "C) Puntos por Pulgada Lineal",
            "D) Pixels Per Inch (Píxeles por pulgada)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "PPI se refiere a la resolución de imagen digital en pantallas, indicando cuántos píxeles contiene una pulgada lineal."
    },
    {
        "id": 24,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Cuál es el formato de imagen ráster que soporta compresión sin pérdida y canal alfa (transparencias de 8 bits)?",
        "opciones": [
            "A) JPEG",
            "B) PNG-24",
            "C) BMP",
            "D) GIF"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El formato PNG-24 permite millones de colores y un canal alfa completo para transparencias graduales sin degradar la calidad de la imagen."
    },
    {
        "id": 25,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "En el diseño de interfaces (UI), ¿qué unidad de medida es considerada relativa y se adapta óptimamente a las preferencias de accesibilidad y escalabilidad tipográfica en la web?",
        "opciones": [
            "A) Milímetros (mm)",
            "B) Píxeles absolutos (px)",
            "C) Puntos tipográficos (pt)",
            "D) Unidades rem y em"
        ],
        "respuestaCorrectate": 2,
        "explicacion": "Las unidades rem y em son relativas al tamaño de fuente raíz o del contenedor, facilitando el diseño web responsivo y accesible.",
        "respuestaCorrecta": 1
    },
    {
        "id": 26,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué es una curva de Bézier cúbica en diseño vectorial?",
        "opciones": [
            "A) Una línea recta delimitada por tres puntos exactos",
            "B) Un archivo comprimido para exportar gráficos en 3D",
            "C) Una curva definida por dos puntos de ancla (nodos) y dos manejadores de dirección tangentes",
            "D) Un filtro de distorsión rasterizado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una curva de Bézier utiliza nodos y manejadores (tangentes) para controlar la curvatura y dirección de los trazados vectoriales de manera matemática."
    },
    {
        "id": 27,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué protocolo o estándar web se utiliza para estructurar gráficos vectoriales escalables directamente en navegadores mediante código XML?",
        "opciones": [
            "A) HTML5",
            "B) WebGL",
            "C) CSS3",
            "D) SVG"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "SVG (Scalable Vector Graphics) es un formato basado en XML para describir gráficos vectoriales bidimensionales legibles e interpretables por navegadores web."
    },
    {
        "id": 28,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué función cumple el espacio de color sRGB en los flujos de trabajo digitales?",
        "opciones": [
            "A) Es un sistema de tintas directas para rotulación automotriz",
            "B) Es el estándar más amplio para impresión offset en cuatricromía",
            "C) Es el espacio de color estándar predeterminado para la visualización en la web y dispositivos de consumo general",
            "D) Es un formato de archivo comprimido para vídeo en alta definición"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "sRGB es el espacio de color estándar internacional diseñado para garantizar la consistencia cromática en pantallas de computadoras, teléfonos y la web."
    },
    {
        "id": 29,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué es el 'aliasing' en gráficos digitales y cómo se combate?",
        "opciones": [
            "A) Es el solapamiento de capas vectoriales; se combate con el Buscatrazos.",
            "B) Es el efecto de escalera o dientes de sierra en los bordes de los gráficos digitales; se combate aplicando antialiasing (suavizado).",
            "C) Es la falta de contraste en pantallas OLED; se combate ajustando la gamma.",
            "D) Es la distorsión por compresión de archivos; se combate con archivos RAW."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El aliasing ocurre por la naturaleza pixelada de las pantallas al representar líneas diagonales o curvas; el antialiasing interpola píxeles semitransparentes en los bordes para suavizar la transición."
    },
    {
        "id": 30,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Cuál es la principal ventaja de utilizar un archivo en formato RAW en fotografía digital orientada al diseño?",
        "opciones": [
            "A) Pesa mucho menos que un JPEG y se carga más rápido en redes sociales.",
            "B) Es compatible de forma nativa con cualquier impresora de inyección de tinta casera.",
            "C) Convierte automáticamente la imagen en formato vectorial.",
            "D) Almacena todos los datos capturados por el sensor sin procesar, permitiendo un mayor rango dinámico y ajuste de balance de blancos sin pérdida de calidad."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los archivos RAW guardan información en bruto del sensor, otorgando flexibilidad profesional en la postproducción para recuperar altas luces y sombras."
    },
    {
        "id": 31,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Cuál es el sistema de impresión industrial dominante para grandes tirajes (revistas, periódicos, empaques) basado en una placa metálica donde las zonas imagen son oleófilas y las no imagen hidrófilas?",
        "opciones": [
            "A) Serigrafía",
            "B) Offset litográfico",
            "C) Flexografía",
            "D) Huecograbado"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El sistema offset se basa en el principio físico-químico de que el agua y la grasa se repelen; la placa transfiere la tinta a un caucho y este al papel."
    },
    {
        "id": 32,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué es el reventez (trapping) en el proceso de preimpresión?",
        "opciones": [
            "A) Un sistema de seguridad para evitar la falsificación de billetes",
            "B) La velocidad máxima a la que puede girar una rotativa",
            "C) Un método para calcular el gramaje del papel estucado",
            "D) La técnica de solapar ligeramente los bordes de colores adyacentes para prevenir espacios blancos indeseados por el registro de impresión"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El trapping compensa las ligeras desviaciones mecánicas del papel en prensa mediante la superposición milimétrica de tintas contiguas."
    },
    {
        "id": 33,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué función cumple el sangrado (bleed) en un archivo destinado a la impresión profesional?",
        "opciones": [
            "A) Extender el fondo y los elementos gráficos más allá de la línea de corte para evitar bordes blancos si ocurre un desvío en el guillotinado",
            "B) Servir como margen de seguridad interno para los textos",
            "C) Aumentar la saturación de los colores primarios en la plancha",
            "D) Indicar al impresor el tipo de gramaje del sustrato"
        ],
        "respuestaCorrectate": 1,
        "explicacion": "El sangrado (generalmente de 3 a 5 mm) asegura que al cortar el impreso no queden filetes blancos si la cuchilla se desplaza ligeramente.",
        "respuestaCorrecta": 2
    },
    {
        "id": 34,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Cómo se define el gramaje del papel en la industria gráfica?",
        "opciones": [
            "A) El grosor exacto medido en milímetros con un micrómetro",
            "B) La resistencia a la tensión longitudinal por pulgada",
            "C) El peso en gramos de un metro cuadrado de ese papel (g/m²)",
            "D) El porcentaje de celulosa reciclada en su composición"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El gramaje se expresa en gramos por metro cuadrado (gsm o g/m²), determinando la densidad y solidez del sustrato."
    },
    {
        "id": 35,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Cuál es el sistema de impresión idóneo para estampar superficies irregulares, plásticos, textiles o cristal mediante el uso de una malla tensada?",
        "opciones": [
            "A) Flexografía",
            "B) Tipografía en plomo",
            "C) Impresión Offset",
            "D) Serigrafía"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La serigrafía es muy versátil porque la tinta pasa a través de los poros de una malla abierta, permitiendo imprimir sobre casi cualquier sustrato."
    },
    {
        "id": 36,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué propósito tienen las marcas de corte (crop marks) en un arte final para imprenta?",
        "opciones": [
            "A) Delimitar el área donde se aplicará barniz UV sectorizado",
            "B) Comprobar la densidad de las tintas CMYK con un densitómetro",
            "C) Indicar el centro exacto de la hoja para colocar etiquetas",
            "D) Señalar los límites exactos donde la guillotina debe realizar el corte final del producto"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las marcas de corte son líneas finas fuera del área de diseño que guían al operario de la cortadora para obtener el formato final deseado."
    },
    {
        "id": 37,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué es el sistema Pantone (PMS) y para qué se utiliza principalmente?",
        "opciones": [
            "A) Un estándar internacional de compresión de imágenes digitales para la web",
            "B) Un software de optimización de planchas flexográficas",
            "C) Un catálogo estandarizado de tintas directas (spot colors) que garantiza la precisión y consistencia del color en la impresión",
            "D) Una norma de accesibilidad para personas con daltonismo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El sistema Pantone asigna códigos numéricos a tonalidades específicas de tinta premezclada, evitando variaciones en la reproducción del color corporativo."
    },
    {
        "id": 38,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué tipo de encuadernación utiliza alambre en forma de espiral doble y permite abrir una publicación completamente a 360 grados?",
        "opciones": [
            "A) Rústica fresada (Perfect binding)",
            "B) Encuadernación holandesa",
            "C) Encuadernación Wire-O o espiral metálica",
            "D) Cosida con hilo vegetal"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El sistema Wire-O utiliza un peine metálico de doble bucle insertado en perforaciones, ideal para agendas, manuales y libretas de uso rudo."
    },
    {
        "id": 39,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué diferencia existe entre un papel cuché (estucado) brillante y uno mate?",
        "opciones": [
            "A) El papel mate contiene fibras plásticas y el brillante celulosa pura.",
            "B) El brillante se usa exclusivamente para fotocopias láser en blanco y negro.",
            "C) El mate tiene una capa mineral que reduce los reflejos de luz y ofrece un tacto suave; el brillante refleja la luz intensamente realzando el contraste fotográfico.",
            "D) No hay diferencia física, solo el costo en el mercado."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los papeles estucados llevan un recubrimiento químico; la variante brillante maximiza el brillo y viveza de las imágenes, mientras que la mate disminuye el reflejo, facilitando la lectura."
    },
    {
        "id": 40,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué es la cuatricromía en el contexto de las artes gráficas?",
        "opciones": [
            "A) Un tipo de encuadernación en lomo cuadrado de cuatro cuerpos",
            "B) Un sistema de impresión basado en cuatro tintas directas Pantone especiales",
            "C) Una técnica de impresión láser en cuatro pasadas distintas",
            "D) El método de reproducción de color mediante la combinación de cuatro tintas de proceso: Cian, Magenta, Amarillo y Negro (CMYK)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La cuatricromía utiliza los cuatro colores sustractivos básicos (CMYK) para simular todo el espectro fotográfico impreso."
    },
    {
        "id": 41,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Cuál es la diferencia conceptual fundamental entre un logotipo y un isologotipo?",
        "opciones": [
            "A) El logotipo es para empresas privadas y el isologotipo para instituciones públicas.",
            "B) El logotipo solo usa texto; el isologotipo integra y funde inseparablemente texto e imagen en un solo bloque donde no funcionan por separado.",
            "C) El logotipo es en blanco y negro y el isologotipo en color.",
            "D) El logotipo se diseña en vectores y el isologotipo en mapas de bits."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El isologotipo (o isologo) combina el icono y la tipografía de forma integrada y dependiente, a diferencia del logotipo (solo texto) o imagotipo (ambos elementos separados)."
    },
    {
        "id": 42,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué contiene principalmente un manual de identidad corporativa (Brand Book o Guía de Marca)?",
        "opciones": [
            "A) Las normas de uso correcto del logotipo, paleta cromática, tipografías corporativas, aplicaciones y restricciones gráficas",
            "B) Los contratos laborales de los diseñadores y cotizaciones de impresión",
            "C) El plan de marketing digital y métricas de redes sociales",
            "D) Únicamente los archivos fuente en formato editable"
        ],
        "respuestaCorrectate": 1,
        "explicacion": "El manual de identidad establece las reglas normativas para garantizar la coherencia visual de la marca en cualquier soporte o aplicación futura.",
        "respuestaCorrecta": 1
    },
    {
        "id": 43,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Cómo se define el concepto de 'Arquitectura de Marca'?",
        "opciones": [
            "A) El diseño arquitectónico de las oficinas corporativas de una agencia de diseño",
            "B) El diseño de la fachada de tiendas físicas (Branded Environments)",
            "C) La estructura de carpetas utilizada para organizar los archivos digitales de diseño",
            "D) La estructura de organización y jerarquía que gestiona la relación entre la marca corporativa y sus marcas subsidiarias o productos"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La arquitectura de marca define modelos como el de marca única (branded house), casa de marcas (house of brands) o marcas respaldadas."
    },
    {
        "id": 44,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué es el 'Naming' en el desarrollo de un proyecto de identidad visual?",
        "opciones": [
            "A) La fase creativa y estratégica para la creación del nombre de una marca, producto o servicio",
            "B) El registro de derechos de autor ante las autoridades legales",
            "C) El proceso de selección de la tipografía corporativa",
            "D) El nombramiento de los directores de arte en una agencia"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El naming es la disciplina centrada en concebir un nombre comercial memorable, sonoro, legalmente registrable y alineado con los valores de la marca."
    },
    {
        "id": 45,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué evalúa principalmente el concepto de 'legibilidad' y 'legibilidad de marca' en un logotipo?",
        "opciones": [
            "A) Su capacidad para ser reconocido rápidamente y leído sin esfuerzo a diferentes tamaños y distancias",
            "B) El peso en kilobytes del archivo vectorial",
            "C) Su compatibilidad con los navegadores web obsoletos",
            "D) La cantidad de palabras que contiene en su estructura"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un buen logotipo debe mantener su claridad y reconocimiento tanto en un letrero gigante como en el favicon de una página web."
    },
    {
        "id": 46,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué es el 'Equity de Marca' (Capital de Marca)?",
        "opciones": [
            "A) El presupuesto financiero inicial invertido en la campaña de lanzamiento",
            "B) El costo de producción de los uniformes corporativos",
            "C) El valor intangible acumulado que una marca posee en la mente de los consumidores debido a su reputación, recuerdo y asociaciones positivas",
            "D) El porcentaje de acciones que posee el diseñador sobre el logotipo creado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El capital de marca (brand equity) representa el valor añadido que la identidad y el prestigio otorgan a un producto o servicio en el mercado."
    },
    {
        "id": 47,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué es un 'Imagotipo' dentro de las clasificaciones de marcas gráficas?",
        "opciones": [
            "A) Un logotipo escrito en caligrafía gestual",
            "B) La combinación de un icono (símbolo) y un logotipo (texto) que funcionan juntos pero están claramente separados y pueden coexistir de forma autónoma",
            "C) Una animación en 3D para la intro de un video corporativo",
            "D) Un símbolo puramente abstractos sin letras"
        ],
        "respuestaCorrectate": 1,
        "explicacion": "En el imagotipo, el texto y el símbolo se distinguen visualmente de manera clara, permitiendo en algunos casos su uso por separado (ej. el pájaro y el texto de Twitter/X en ciertas aplicaciones).",
        "respuestaCorrecta": 3
    },
    {
        "id": 48,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Cuál es el propósito del 'territorio de marca' en la estrategia de diseño?",
        "opciones": [
            "A) Establecer las dimensiones físicas del logotipo en la papelería",
            "B) Delimitar la zona geográfica donde se realizarán impresiones offset",
            "C) Definir el espacio conceptual, simbólico y cultural en el que la marca se posiciona frente a sus competidores",
            "D) Fijar las tarifas de cobro por hora de diseño"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El territorio de marca delimita los campos de acción conceptual y emocional donde la marca interactúa con su audiencia de forma distintiva."
    },
    {
        "id": 49,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué se busca proteger al registrar un logotipo como marca comercial ante el instituto de propiedad industrial correspondiente?",
        "opciones": [
            "A) Evitar que el diseñador original cobre regalías futuras",
            "B) Obligar al gobierno a subsidiar la publicidad de la empresa",
            "C) Obtener el derecho exclusivo de uso comercial e impedir que terceros utilicen signos idénticos o confusamente similares",
            "D) Certificar que el archivo está libre de virus informáticos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El registro de marca otorga protección legal y propiedad jurídica sobre el signo distintivo en el sector comercial operado."
    },
    {
        "id": 50,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué representa el concepto de 'personalidad de marca' (Brand Personality)?",
        "opciones": [
            "A) El estado de ánimo de los consumidores al entrar a una tienda",
            "B) El tono de voz utilizado exclusivamente en los contratos legales",
            "C) El carácter y los rasgos humanos asociados a una marca que permiten conectar emocionalmente con su público objetivo",
            "D) La actitud del diseñador jefe frente a las correcciones del cliente"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La personalidad de marca humaniza al ente corporativo dotándolo de atributos de carácter (ej. sofisticado, audaz, sincero), guiando el tono visual y verbal."
    },
    {
        "id": 51,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es un 'colofón' en una publicación editorial tradicional?",
        "opciones": [
            "A) El índice analítico de materias alfabético",
            "B) Una nota situada al final de un libro que indica el taller de impresión, fecha de término y características tipográficas",
            "C) El título principal impreso en el lomo de la obra",
            "D) La página que contiene los créditos legales, ISBN y datos de edición"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El colofón es la anotación final en los libros que detalla datos técnicos del tiraje, imprenta y fecha de conclusión de la obra."
    },
    {
        "id": 52,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Cómo se denominan las páginas iniciales de un libro que preceden a la portadilla y al cuerpo principal, conteniendo a veces la dedicatoria o en blanco?",
        "opciones": [
            "A) Páginas de apéndice",
            "B) Pliegos de cierre",
            "C) Páginas de guardia",
            "D) Páginas preliminares o de cortesía"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las páginas preliminares (o de cortesía) anteceden a la portada y sirven para proteger el cuerpo del libro y dar solemnidad a la obra."
    },
    {
        "id": 53,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es el 'cabecero' o cornisa en el diseño de páginas editoriales?",
        "opciones": [
            "A) La barra de herramientas del software de maquetación",
            "B) La imagen principal de la portada",
            "C) El título del capítulo o libro que se repite en la parte superior de las páginas pares o impares",
            "D) El margen inferior destinado a la numeración de página"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La cornisa o cabecero (running head) orienta al lector indicando la sección, capítulo o título de la obra en la parte alta de la página."
    },
    {
        "id": 54,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "En la composición de párrafos, ¿cómo se denominan las líneas solitarias que quedan al final de un párrafo en la parte superior de una página nueva?",
        "opciones": [
            "A) Líneas viudas (widows)",
            "B) Líneas falsas",
            "C) Líneas bastardas",
            "D) Líneas huérfanas (orphans)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una línea viuda es la última línea de un párrafo que aparece aislada al inicio de la página siguiente, lo cual se considera un defecto tipográfico."
    },
    {
        "id": 55,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es una línea 'huérfana' en tipografía editorial?",
        "opciones": [
            "A) Un título de capítulo sin subtítulo",
            "B) Un renglón con un error ortográfico no detectado",
            "C) La primera línea de un párrafo que queda aislada al final de una página antes de un salto",
            "D) Una línea de texto sin firmar en el colofón"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La línea huérfana ocurre cuando el primer renglón de un párrafo se queda solo al pie de una página, rompiendo el flujo de lectura."
    },
    {
        "id": 56,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Cuál es la función de las páginas de guarda (endpapers) en un libro de encuadernación cartoné (tapa dura)?",
        "opciones": [
            "A) Proteger el libro contra la humedad ambiental durante el almacenamiento",
            "B) Servir como separador de lectura temporal",
            "C) Imprimir los anuncios publicitarios de la editorial",
            "D) Sostener la estructura uniendo el bloque de páginas impresas con la cubierta de cartón rígido"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las guardas son hojas dobladas por la mitad que fijan firmemente el cuerpo del libro a la tapa dura, aportando estabilidad y acabado estético."
    },
    {
        "id": 57,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es un pliego de imprenta en la producción editorial?",
        "opciones": [
            "A) Una hoja de papel de gran formato impresa por ambas caras que, al doblarse y cortarse según el esquema de imposición, forma un conjunto de páginas consecutivas",
            "B) El contrato legal firmado entre el autor y el diseñador gráfico",
            "C) La plantilla digital en InDesign para revistas",
            "D) Una muestra de color aprobada por el cliente"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El pliego es la hoja matriz que pasa por prensa y que tras los dobleces (cacostyle o cuadernillo) configura la paginación correlativa."
    },
    {
        "id": 58,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es el 'ISBN' (International Standard Book Number)?",
        "opciones": [
            "A) Una certificación de calidad ecológica para papeles reciclados",
            "B) Un código de barras internacional de identificación exclusiva para libros, que facilita su catalogación y comercialización global",
            "C) El número de registro de patentes de diseño industrial",
            "D) Un estándar de compresión de archivos editoriales en PDF"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ISBN es el identificador numérico internacional estandarizado para libros monográficos, indispensable para bibliotecas y librerías."
    },
    {
        "id": 59,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué significa que una retícula editorial tenga simetría en el diseño de sus dobles páginas (spreads)?",
        "opciones": [
            "A) Que los márgenes internos, externos, superiores e inferiores de las páginas izquierda y derecha están espejados y coordinados simétricamente respecto al medianil",
            "B) Que ambas páginas tienen exactamente el mismo contenido idéntico",
            "C) Que se usan solo fuentes tipográficas simétricas",
            "D) Que el texto está justificado al centro de la hoja"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En un doble pliego editorial, los márgenes se diseñan de manera simétrica en espejo (el margen interior o de lomo es más ancho para compensar la encuadernación)."
    },
    {
        "id": 60,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Cuál es el propósito de aplicar sangría de primera línea en los párrafos de texto corrido?",
        "opciones": [
            "A) Ayudar al ojo del lector a identificar visualmente el inicio de un nuevo párrafo sin requerir espacio vertical adicional entre ellos",
            "B) Ahorrar espacio en el diseño de la página",
            "C) Destacar la importancia de la frase principal",
            "D) Permitir que la guillotina corte con mayor precisión"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La sangría de primera línea marca claramente la separación entre párrafos de forma elegante, manteniendo la compacidad y ritmo visual del bloque de texto."
    },
    {
        "id": 61,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Cuál es la función principal del envase primario en el diseño de packaging?",
        "opciones": [
            "A) Agrupar múltiples unidades para facilitar su transporte logístico en tarimas",
            "B) Contener, proteger y estar en contacto directo con el producto",
            "C) Reducir los costos de envío internacional de mercancías",
            "D) Servir como exhibidor principal en los pasillos del supermercado"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El envase primario es el envoltorio que contiene directamente el producto (ej. la botella de un perfume o el sachet de un champú)."
    },
    {
        "id": 62,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué diferencia funcional existe entre el embalaje secundario y el terciario?",
        "opciones": [
            "A) El secundario agrupa envases primarios para la venta al consumidor (ej. caja de galletas); el terciario agrupa cajas para el transporte y distribución logística (ej. tarima o contenedor).",
            "B) El secundario solo se usa para productos de lujo y el terciario para industriales.",
            "C) El terciario es biodegradable y el secundario es de plástico rígido.",
            "D) No hay diferencia, son sinónimos técnicos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El embalaje secundario protege o agrupa envases primarios para el punto de venta, mientras que el terciario agrupa el conjunto para soportar el transporte y almacenamiento masivo."
    },
    {
        "id": 63,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué es el 'delineado de troquel' (dieline) en el diseño de envases de cartón o cartulina?",
        "opciones": [
            "A) El diseño gráfico artístico impreso en las caras exteriores",
            "B) El plano técnico vectorial bidimensional que indica las líneas de corte, hendido y plegado para armar el empaque en 3D",
            "C) El código de barras logístico para aduanas",
            "D) La prueba de color final sobre sustrato metálico"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El dieline es la plantilla estructural plana que guía el troquelado y doblado del envase, siendo el plano base donde el diseñador ubica los gráficos."
    },
    {
        "id": 64,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué factor ergonómico es primordial al diseñar el envase primario de un producto de consumo masivo?",
        "opciones": [
            "A) Que su diseño gráfico ocupe el 100% de la superficie",
            "B) Que tenga el costo de producción más bajo posible sin importar el material",
            "C) Que emita sonidos llamativos al ser agrietado",
            "D) Que sea fácil de sostener, abrir, dosificar y verter por el usuario (usabilidad y agarre)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La ergonomía en packaging garantiza que el envase se adapte a la mano humana, facilitando su manipulación, apertura y consumo seguro."
    },
    {
        "id": 65,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué es un envase activo en la tecnología contemporánea de packaging?",
        "opciones": [
            "A) Un empaque fabricado con componentes electrónicos flexibles",
            "B) Un empaque que interactúa con el contenido o el entorno para prolongar la vida útil del producto (ej. absorbedores de oxígeno)",
            "C) Un envase con pantallas LCD integradas para publicidad interactiva",
            "D) Un envase que cambia de color según la temperatura ambiente"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los envases activos incorporan componentes que liberan o absorben sustancias para conservar mejor alimentos o productos perecederos."
    },
    {
        "id": 66,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué es el 'mockup' estructural en el proceso de diseño de envases?",
        "opciones": [
            "A) El archivo digital comprimido en formato JPG para redes sociales",
            "B) El cálculo matemático del peso volumétrico para envíos",
            "C) Un modelo físico o render en 3D a escala real que permite evaluar el volumen, ergonomía, resistencia y aspecto visual del empaque antes de su producción en serie",
            "D) La factura de compra de los materiales de embalaje"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El mockup o prototipo permite validar volumétrica y estéticamente el envase antes de invertir en moldes o troqueles industriales."
    },
    {
        "id": 67,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Cuál es el objetivo del ecodiseño aplicado al packaging?",
        "opciones": [
            "A) Eliminar por completo cualquier información textual obligatoria",
            "B) Minimizar el impacto ambiental en todo el ciclo de vida del envase mediante la reducción de material, uso de reciclados y facilidad de valorización",
            "C) Utilizar únicamente tintas metalizadas costosas",
            "D) Elevar el precio de venta final del producto"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ecodiseño busca la sostenibilidad reduciendo recursos, optimizando logística y facilitando la economía circular de los materiales."
    },
    {
        "id": 68,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué información legal y regulatoria es obligatoria en la cara principal de exhibición (principal display panel) de un envase alimentario?",
        "opciones": [
            "A) Los datos bancarios del fabricante",
            "B) La biografía del fundador de la empresa",
            "C) El nombre comercial del producto, declaración de contenido neto y sellos de advertencia sanitarios si aplican",
            "D) El número de serie del troquel de cartón"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las normativas internacionales exigen que el panel principal muestre claramente la denominación del producto y su cantidad neta para el consumidor."
    },
    {
        "id": 69,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué es el 'facing' en la estrategia visual de puntos de venta (retail design)?",
        "opciones": [
            "A) El diseño de la cara posterior del empaque",
            "B) La cantidad de producto que se muestra de frente en el anaquel hacia el consumidor",
            "C) El proceso de sellado térmico del envase primario",
            "D) La técnica de impresión en relieve sobre cartón corrugado"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El facing maximiza la visibilidad de la marca en el lineal del supermercado mediante la correcta disposición frontal de los envases."
    },
    {
        "id": 70,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Cuál es la ventaja de utilizar cartón microcorrugado (E-flute o F-flute) frente a la cartulina sulfatada tradicional en ciertos envases?",
        "opciones": [
            "A) Es un material transparente que permite ver el interior",
            "B) Ofrece mayor resistencia estructural, protección contra impactos y rigidez, siendo ideal para cajas de productos que requieren soporte adicional",
            "C) Se puede imprimir exclusivamente mediante serigrafía manual",
            "D) Su costo es cero en el mercado internacional"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El cartón microcorrugado aporta propiedades mecánicas de acolchado y resistencia estructural sin perder capacidad de impresión gráfica directa."
    },
    {
        "id": 71,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Cuál es la diferencia fundamental entre 'señalización' y 'señalética'?",
        "opciones": [
            "A) La señalización solo usa texto y la señalética solo pictogramas.",
            "B) No hay diferencia metodológica.",
            "C) La señalización es digital y la señalética es impresa en papel.",
            "D) La señalización es prescriptiva, universal e intuitiva por norma legal (ej. tránsito); la señalética es ad-hoc, diseñada específicamente para la identidad y contexto particular de un espacio arquitectónico."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La señalización obedece a normativas universales de obligado cumplimiento (tránsito, emergencias), mientras que la señalética diseña sistemas informativos a medida para espacios específicos."
    },
    {
        "id": 72,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "En un proyecto señalético, ¿qué evalúa el principio de 'legibilidad' a distancia?",
        "opciones": [
            "A) La proporción correcta entre altura de la letra, contraste cromático y la distancia visual desde la cual el usuario debe leer el mensaje con tiempo de reacción suficiente",
            "B) El número de idiomas obligatorios en cada placa",
            "C) El peso físico del poste de soporte metálico",
            "D) La cantidad de luz solar reflejada por el suelo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La señalética requiere cálculos de tamaño tipográfico basados en la distancia visual para asegurar que el mensaje sea captado sin frenar la movilidad del usuario."
    },
    {
        "id": 73,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué es un pictograma en el diseño de sistemas señaléticos?",
        "opciones": [
            "A) Una ilustración esquemática y simplificada que comunica una acción, objeto o concepto de forma universal superando barreras idiomáticas",
            "B) Un logotipo tridimensional de gran formato",
            "C) Un gráfico estadístico impreso en un folleto corporativo",
            "D) Una fotografía artística en blanco y negro"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El pictograma es un signo icónico que sintetiza visualmente un mensaje transcultural para guiar, informar o advertir de manera inmediata."
    },
    {
        "id": 74,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué tipo de señal en un sistema de orientación (wayfinding) indica direcciones, flujos y rutas hacia un destino específico?",
        "opciones": [
            "A) Señales de prohibición o restricción",
            "B) Señales informativas de identificación de recinto",
            "C) Señales direccionales o de orientación",
            "D) Señales de advertencia de peligro"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las señales direccionales guían paso a paso al usuario mediante flechas y textos en los puntos de decisión de un recorrido arquitectónico."
    },
    {
        "id": 75,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué es el 'Wayfinding' en el diseño ambiental?",
        "opciones": [
            "A) La técnica de diseño de interiores basada en Feng Shui",
            "B) El proceso de impresión de lonas publicitarias en gran formato",
            "C) Un software de geolocalización por satélite para interiores",
            "D) La disciplina orientada a estudiar y diseñar los procesos cognitivos y visuales mediante los cuales las personas se orientan y navegan por el espacio físico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El wayfinding abarca la arquitectura de la información espacial, ayudando a los usuarios a comprender su ubicación y destino en entornos complejos."
    },
    {
        "id": 76,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Cuál es el estándar internacional cromático recomendado para las señales de advertencia o peligro en sistemas de seguridad industrial?",
        "opciones": [
            "A) Amarillo de seguridad",
            "B) Azul cian brillante",
            "C) Violeta oscuro",
            "D) Verde esmeralda"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El amarillo de seguridad se utiliza universalmente para advertir sobre riesgos de precaución, obstáculos o peligros físicos."
    },
    {
        "id": 77,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué altura mínima sobre el suelo se recomienda habitualmente para colocar una placa de identificación de puerta a fin de cumplir con normativas de accesibilidad táctil y visual?",
        "opciones": [
            "A) Exactamente a ras del suelo",
            "B) Entre 1.40 y 1.60 metros desde el nivel del piso",
            "C) A la altura del marco superior de la puerta",
            "D) A más de 3 metros de altura"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las normativas de accesibilidad (como ADA) ubican la señalética táctil y visual a una altura estándar accesible para la lectura de pie y en silla de ruedas."
    },
    {
        "id": 78,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué función cumple el sistema de escritura Braille integrado en placas señaléticas?",
        "opciones": [
            "A) Sustituir por completo a los pictogramas visuales",
            "B) Adornar la placa con texturas geométricas modernas",
            "C) Indicar el código de barras del fabricante de la señal",
            "D) Permitir la lectura táctil a personas con discapacidad visual"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El sistema Braille es un requisito de diseño inclusivo y normativo que facilita la autonomía de personas ciegas en espacios públicos."
    },
    {
        "id": 79,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué se debe considerar principalmente respecto al contraste lumínico en el diseño de señales?",
        "opciones": [
            "A) Que la señal brille en la oscuridad sin fuente de energía",
            "B) Que el texto o pictograma contraste fuertemente con el fondo (luminancia) para ser perceptible por personas con baja visión",
            "C) Que los colores sean exclusivamente monocromáticos",
            "D) Que el material de la señal sea translúcido"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El contraste de luminancia entre el fondo y la figura es vital para la accesibilidad visual, evitando que la señal se pierda visualmente."
    },
    {
        "id": 80,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Cuál es el propósito de realizar una auditoría de flujo de usuarios antes de diseñar un sistema de señalética?",
        "opciones": [
            "A) Calcular el presupuesto de tinta serigráfica",
            "B) Contratar al personal de limpieza del edificio",
            "C) Identificar los puntos críticos de congestión, encrucijadas y dudas de circulación para ubicar estratégicamente las señales informativas",
            "D) Diseñar la fachada exterior del inmueble"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Analizar el comportamiento y tránsito peatonal permite planificar con precisión la jerarquía y colocación de cada elemento señalético."
    },
    {
        "id": 81,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué modelo clásico de comunicación publicitaria establece las fases por las que pasa un consumidor: Atención, Interés, Deseo y Acción?",
        "opciones": [
            "A) Matriz BCG",
            "B) Modelo SMART",
            "C) Modelo AIDA",
            "D) Modelo DAGMAR"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El modelo AIDA describe los pasos cognitivos y conductuales que un anuncio publicitario efectivo debe generar en el público meta."
    },
    {
        "id": 82,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué es el 'Brief' publicitario o de diseño?",
        "opciones": [
            "A) El manual de identidad visual de la marca",
            "B) El contrato de exclusividad firmado con la agencia",
            "C) Un documento estratégico que resume los objetivos, características del público meta, necesidades, restricciones y expectativas del proyecto",
            "D) Una cotización económica preliminar de impresión"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El brief es la guía estratégica esencial proporcionada por el cliente (o cocreada) que define el rumbo, metas y limitaciones del proyecto."
    },
    {
        "id": 83,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué define la Propuesta Única de Venta (USP - Unique Selling Proposition)?",
        "opciones": [
            "A) El beneficio diferencial y exclusivo que ofrece un producto o marca frente a toda su competencia",
            "B) El tipo de fuente tipográfica utilizada en el empaque",
            "C) El canal de distribución digital más económico",
            "D) El descuento máximo aplicable en temporadas de rebajas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La USP destaca la ventaja competitiva singular que hace que el producto sea único y preferible en la mente del consumidor."
    },
    {
        "id": 84,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Cuál es el objetivo de un cartel publicitario destinado a vía pública (OOH - Out Of Home)?",
        "opciones": [
            "A) Incluir textos detallados con las especificaciones técnicas completas del producto",
            "B) Captar la atención en pocos segundos debido al tránsito rápido del espectador, transmitiendo un mensaje conciso y de alto impacto visual",
            "C) Reemplazar la página web corporativa",
            "D) Servir como instructivo de armado en formato pequeño"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La publicidad exterior se rige por la regla de los 3 segundos; el diseño debe ser de lectura instantánea, con pocas palabras y gran impacto."
    },
    {
        "id": 85,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué es el 'Buyer Persona' en la estrategia de diseño publicitario?",
        "opciones": [
            "A) El diseñador gráfico encargado de las ilustraciones comerciales",
            "B) El organigrama de los compradores del departamento de adquisiciones",
            "C) Un tipo de contrato publicitario anual",
            "D) Una representación ficticia y detallada del cliente ideal basada en datos demográficos, comportamientos, necesidades y motivaciones"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El buyer persona humaniza al público objetivo, permitiendo que el diseñador adapte el lenguaje visual y estético a sus expectativas reales."
    },
    {
        "id": 86,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué evalúa la métrica CTR (Click-Through Rate) en el diseño de publicidad digital y banners?",
        "opciones": [
            "A) La relación porcentual entre las personas que hacen clic en un anuncio y el total de usuarios que lo visualizaron",
            "B) El número de veces que el anuncio fue impreso en papel couché",
            "C) El costo total de producción gráfica de la campaña",
            "D) La velocidad de carga del archivo gráfico en el servidor"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El CTR mide la efectividad de un anuncio digital para motivar la interacción directa del usuario mediante clics."
    },
    {
        "id": 87,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué función cumple el 'Call to Action' (CTA) o llamada a la acción en una pieza gráfica publicitaria?",
        "opciones": [
            "A) Indicar claramente al usuario qué paso debe dar a continuación (ej. 'Compra ahora', 'Regístrate')",
            "B) Decorar el espacio inferior del cartel con elementos tipográficos",
            "C) Mostrar el logotipo de la agencia de publicidad",
            "D) Indicar el peso del archivo digital"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El CTA es un elemento directivo esencial que guía la conversión y la respuesta esperada por parte de la audiencia."
    },
    {
        "id": 88,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué es el 'Storytelling' aplicado al diseño y la publicidad?",
        "opciones": [
            "A) El arte de contar historias narrativas conectadas con los valores de la marca para generar empatía y vínculos emocionales con la audiencia",
            "B) La redacción de contratos legales para la cesión de derechos de autor",
            "C) La técnica de ilustración vectorial en 3D",
            "D) El diseño de infografías técnicas para manuales corporativos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El storytelling trasciende la venta directa construyendo un relato emocional que resuena profundamente en las vivencias del consumidor."
    },
    {
        "id": 89,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Cuál es la característica principal de una campaña publicitaria 'omnicanal'?",
        "opciones": [
            "A) Integrar la experiencia visual y conceptual de la marca de manera coherente a través de múltiples canales físicos y digitales de comunicación",
            "B) Utilizar un canal único de televisión para abaratar costos",
            "C) Imprimir carteles únicamente en blanco y negro",
            "D) Cambiar radicalmente el logotipo en cada red social"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La estrategia omnicanal unifica el mensaje y la identidad visual para que el usuario experimente la misma marca sin fricciones en cualquier punto de contacto."
    },
    {
        "id": 90,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué papel juega la retórica visual en el diseño publicitario?",
        "opciones": [
            "A) Calcular el gramaje del papel en los folletos",
            "B) Comprobar la ortografía de los titulares publicitarios",
            "C) Emplear figuras retóricas (metáforas, metonimias, hipérboles) traducidas a imágenes para generar asociaciones ingeniosas y persuasivas en el espectador",
            "D) Optimizar el código fuente de los banners web"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La retórica visual enriquece el discurso publicitario al crear mensajes metafóricos complejos que estimulan la interpretación activa del público."
    },
    {
        "id": 91,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué caracteriza al proceso de 'Design Thinking' en la resolución de problemas creativos?",
        "opciones": [
            "A) Un método financiero para cobrar honorarios por hora",
            "B) Un enfoque centrado en las personas, iterativo y dividido en fases: Empatizar, Definir, Idear, Prototipar y Testear",
            "C) Un sistema rígido donde el diseño se imprime sin consultar al usuario final",
            "D) Una técnica exclusiva para dibujar logotipos en vectores"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El Design Thinking prioriza la empatía con el usuario y la experimentación rápida a través de prototipos para validar soluciones innovadoras."
    },
    {
        "id": 92,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué es el diagrama de Gantt en la gestión de proyectos de diseño?",
        "opciones": [
            "A) Un esquema de las retículas editoriales",
            "B) Un mapa conceptual de la teoría del color",
            "C) Un gráfico de torta que indica el presupuesto gastado en tintas",
            "D) Una herramienta visual de calendarización que muestra las tareas de un proyecto a lo largo del tiempo y sus dependencias"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El diagrama de Gantt permite planificar, programar y monitorear el avance temporal de las distintas fases de un proyecto gráfico."
    },
    {
        "id": 93,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué contempla el derecho de autor (Copyright) y el marco de propiedad intelectual en el diseño gráfico?",
        "opciones": [
            "A) La protección jurídica de la obra artística y original creada por el diseñador, otorgándole derechos morales y patrimoniales",
            "B) La prohibición de usar fuentes tipográficas digitales comerciales",
            "C) La obligación de regalar los archivos fuente al cliente",
            "D) El registro obligatorio de los bocetos en papel reciclado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los derechos de autor protegen la creación original, regulando su explotación comercial (patrimoniales) y el reconocimiento de autoría (morales)."
    },
    {
        "id": 94,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué es un 'benchmark' o análisis de la competencia en la fase de investigación de diseño?",
        "opciones": [
            "A) El estudio comparativo de los productos, estrategias visuales y posicionamiento de los competidores directos e indirectos en el mercado",
            "B) La cotización de precios de las computadoras para la agencia",
            "C) La prueba de velocidad de impresión en offset",
            "D) La medición del contraste de color en pantallas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El benchmark evalúa las fortalezas y debilidades visuales de la competencia para detectar oportunidades de diferenciación estratégica."
    },
    {
        "id": 95,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué es el 'feedback' constructivo en las revisiones de diseño con el cliente?",
        "opciones": [
            "A) Una opinión subjetiva basada únicamente en gustos personales sin criterio técnico",
            "B) Una retroalimentación basada en los objetivos estratégicos del brief para mejorar la solución gráfica",
            "C) La cancelación definitiva del contrato por desacuerdos estéticos",
            "D) La entrega de archivos sin contraseña"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El feedback profesional evalúa el diseño en función de su efectividad para resolver el problema planteado en el brief, evitando sesgos subjetivos."
    },
    {
        "id": 96,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué comprende un contrato de prestación de servicios profesionales de diseño gráfico?",
        "opciones": [
            "A) Las medidas de seguridad industrial de la imprenta",
            "B) Las especificaciones técnicas del papel offset",
            "C) La biografía académica del diseñador",
            "D) El alcance del proyecto, entregables, plazos, costos, condiciones de pago, cesión de derechos y número de revisiones permitidas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El contrato formaliza legalmente la relación comercial, protegiendo tanto al diseñador como al cliente frente a incumplimientos o cambios de alcance."
    },
    {
        "id": 97,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Cuál es la función del prototipado rápido en proyectos de diseño de interfaces o productos?",
        "opciones": [
            "A) Reducir los costos de almacenamiento digital",
            "B) Acelerar la velocidad de impresión del tiraje en papel",
            "C) Simular la experiencia de usuario y funcionalidad de manera temprana para detectar errores y recopilar opiniones antes del desarrollo final",
            "D) Eliminar la fase de investigación de mercado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El prototipado permite validar hipótesis de usabilidad con usuarios reales con una inversión mínima de tiempo y recursos."
    },
    {
        "id": 98,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué es la 'lluvia de ideas' (Brainstorming) en la fase de ideación metodológica?",
        "opciones": [
            "A) Un análisis estadístico de ventas anuales",
            "B) Un software para la organización de archivos vectoriales",
            "C) Una técnica de creatividad grupal orientada a generar la mayor cantidad de conceptos y alternativas posibles sin juzgarlas inicialmente",
            "D) Un método para limpiar la caché de las aplicaciones de diseño"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El brainstorming estimula la asociación libre de ideas para explorar caminos innovadores en la resolución del problema de diseño."
    },
    {
        "id": 99,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué significa que un entregable de diseño sea un 'arte final' (print-ready)?",
        "opciones": [
            "A) Un render en 3D sin texturas aplicadas",
            "B) Un archivo optimizado con sangrados, marcas de corte, conversión a CMYK y tipografías trazadas, listo para entrar a producción sin errores",
            "C) Una imagen comprimida en formato GIF para la web",
            "D) Un boceto preliminar hecho a lápiz sobre papel"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El arte final cumple rigurosamente con los parámetros técnicos de preimpresión exigidos por el taller gráfico."
    },
    {
        "id": 100,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Cuál es la importancia de definir los 'KPIs' (Key Performance Indicators) en una campaña gráfica o de branding?",
        "opciones": [
            "A) Determinar el peso de los archivos en la nube",
            "B) Calcular el costo de las licencias de software de diseño",
            "C) Establecer las medidas de los márgenes en las retículas",
            "D) Medir y evaluar cuantitativamente el éxito y el retorno de inversión (ROI) de los objetivos planteados"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los KPIs son indicadores clave de rendimiento que permiten analizar de forma objetiva el impacto de la estrategia de diseño implementada."
    },
    {
        "id": 101,
        "area": "Sección Transversal - Ética Profesional",
        "pregunta": "¿Qué implica actuar bajo principios de ética profesional en la práctica del diseño gráfico?",
        "opciones": [
            "A) Cobrar siempre la tarifa más alta posible sin importar la calidad",
            "B) Respetar la propiedad intelectual ajena, evitar el plagio, no falsear información y rechazar proyectos que promuevan la discriminación o el daño social",
            "C) Copiar tendencias de internet para acelerar los tiempos de entrega",
            "D) Ocultar los errores técnicos al cliente para evitar penalizaciones"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ética profesional exige honestidad intelectual, respeto a los derechos de autor y responsabilidad social ante el impacto de los mensajes visuales."
    },
    {
        "id": 102,
        "area": "Sección Transversal - Ética Profesional",
        "pregunta": "¿Qué constituye una falta grave de plagio en el diseño gráfico?",
        "opciones": [
            "A) Utilizar una tipografía comercial con su respectiva licencia pagada",
            "B) Copiar sustancialmente la identidad visual, el concepto o la ilustración de otro autor y presentarla como una creación propia original",
            "C) Utilizar bancos de imágenes libres de derechos (stock) con atribución",
            "D) Inspirarse en corrientes artísticas históricas como la Bauhaus"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El plagio vulnera la propiedad intelectual y la deontología profesional, apropiándose indebidamente del trabajo creativo de terceros."
    },
    {
        "id": 103,
        "area": "Sección Transversal - Ética Profesional",
        "pregunta": "¿Cuál es la responsabilidad del diseñador frente a la veracidad de la información en piezas de comunicación institucional o comercial?",
        "opciones": [
            "A) Omitir los datos de contacto obligatorios en los empaques",
            "B) Asegurar que el mensaje visual no induzca a engaño, estafa o publicidad engañosa al consumidor",
            "C) Modificar los datos del cliente para hacerlos más atractivos aunque sean falsos",
            "D) Delegar toda la responsabilidad legal exclusivamente a la imprenta"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El diseñador comparte la responsabilidad ética y legal de evitar que la comunicación visual propague información falsa o fraudulenta."
    },
    {
        "id": 104,
        "area": "Sección Transversal - Ética Profesional",
        "pregunta": "¿Qué significa respetar la diversidad y la inclusión en el diseño gráfico contemporáneo?",
        "opciones": [
            "A) Diseñar exclusivamente en un solo idioma",
            "B) Utilizar todos los colores del arcoíris en cada logotipo corporativo",
            "C) Representar de manera equitativa, respetuosa y sin estereotipos discriminatorios a diferentes grupos sociales en las piezas de comunicación visual",
            "D) Usar tipografías de gran tamaño únicamente para adultos mayores"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El diseño inclusivo y ético fomenta la representación plural y evita la perpetuación de estereotipos perjudiciales en la sociedad."
    },
    {
        "id": 105,
        "area": "Sección Transversal - Metodología de Investigación",
        "pregunta": "¿Qué función cumple la investigación cualitativa en un proyecto de diseño gráfico?",
        "opciones": [
            "A) Comprender las percepciones, motivaciones, emociones y contextos culturales de los usuarios mediante entrevistas, focus groups u observación",
            "B) Medir el tráfico de clics en un banner publicitario mediante Google Analytics",
            "C) Determinar el peso en gigabytes de un archivo de video",
            "D) Calcular el costo exacto por millar de impresión offset"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La investigación cualitativa profundiza en el factor humano, aportando insights valiosos para la conceptualización empática del diseño."
    },
    {
        "id": 106,
        "area": "Sección Transversal - Metodología de Investigación",
        "pregunta": "¿Qué caracteriza a la investigación cuantitativa aplicada al diseño?",
        "opciones": [
            "A) La lectura crítica de manuales de identidad corporativa",
            "B) La observación participante en un taller artesanal de serigrafía",
            "C) La recolección y análisis de datos numéricos y estadísticos a través de encuestas y métricas para medir tendencias y comportamientos de grandes audiencias",
            "D) El análisis estético de la paleta de colores de un cartel renacentista"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La investigación cuantitativa ofrece datos medibles y generalizables que respaldan la toma de decisiones objetivas en el diseño."
    },
    {
        "id": 107,
        "area": "Sección Transversal - Sostenibilidad y Responsabilidad Social",
        "pregunta": "¿Qué implica la sostenibilidad en el ejercicio profesional del diseño gráfico?",
        "opciones": [
            "A) Desechar los residuos químicos de serigrafía en el drenaje común",
            "B) Utilizar únicamente papel importado de alta gama sin certificación forestal",
            "C) Minimizar la huella ecológica reduciendo el consumo de papel, eligiendo tintas ecológicas, sustratos reciclados y optimizando recursos digitales",
            "D) Imprimir todos los documentos a doble tinta para duplicar el consumo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El diseño sostenible busca un equilibrio ecológico, considerando el ciclo de vida completo de los productos gráficos y su impacto ambiental."
    },
    {
        "id": 108,
        "area": "Sección Transversal - Sostenibilidad y Responsabilidad Social",
        "pregunta": "¿Qué certificaciones internacionales garantizan que el papel utilizado en un proyecto editorial proviene de bosques manejados de manera responsable?",
        "opciones": [
            "A) Pantone Matching System",
            "B) FSC (Forest Stewardship Council) y PEFC",
            "C) ISO 9001 de calidad industrial",
            "D) SSL / TLS de seguridad web"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las certificaciones FSC y PEFC avalan la trazabilidad y sostenibilidad forestal del papel empleado en la industria gráfica."
    },
    {
        "id": 109,
        "area": "Sección Transversal - Comunicación y Análisis Crítico",
        "pregunta": "¿Qué es la semiótica en el análisis del diseño gráfico?",
        "opciones": [
            "A) La técnica de trazar vectores con curvas de Bézier",
            "B) La contabilidad de costos de producción editorial",
            "C) La ciencia que estudia los signos, los símbolos y cómo estos producen significados en la sociedad a través de la sintaxis, semántica y pragmática",
            "D) El estudio de la anatomía tipográfica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La semiótica analiza cómo las imágenes y los elementos gráficos comunican mensajes codificados que el receptor interpreta culturalmente."
    },
    {
        "id": 110,
        "area": "Sección Transversal - Comunicación y Análisis Crítico",
        "pregunta": "¿Cuál es la diferencia entre la dimensión semántica y la dimensión sintáctica de un signo visual?",
        "opciones": [
            "A) La semántica es para imprenta y la sintáctica para web",
            "B) La sintáctica mide el color y la semántica el tipo de papel",
            "C) La semántica estudia la relación entre el signo y su significado; la sintáctica estudia las relaciones formales entre los diferentes signos y elementos visuales",
            "D) No hay diferencia teórica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Sintaxis atañe a la estructura formal y composición; semántica al contenido y significado que transmite el gráfico."
    },
    {
        "id": 111,
        "area": "Fundamentos del Diseño",
        "pregunta": "¿Qué principio de la Gestalt explica por qué el ojo humano completa contornos o formas incompletas para percibir una figura cerrada y reconocible?",
        "opciones": [
            "A) Ley de Semejanza",
            "B) Ley de Cierre",
            "C) Ley de Destino Común",
            "D) Ley de Experiencia"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ley de cierre establece que nuestra mente tiende a rellenar huecos visuales para percibir formas completas y estables."
    },
    {
        "id": 112,
        "area": "Tipografía",
        "pregunta": "¿Qué nombre recibe el remate pequeño o curva decorativa en el extremo de algunos trazos tipográficos, típico de las fuentes romanas?",
        "opciones": [
            "A) Vértice",
            "B) Espolón",
            "C) Serifa o tilde",
            "D) Ojo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La serifa (o remate) es la pequeña línea o adorno terminal que remata los trazos principales de las letras en las fuentes con esta característica."
    },
    {
        "id": 113,
        "area": "Tecnología y Medios Digitales",
        "pregunta": "¿Qué función cumple el formato PDF/X en los flujos de trabajo de preimpresión profesional?",
        "opciones": [
            "A) Convertir automáticamente gráficos vectoriales en mapas de bits",
            "B) Estandarizar y asegurar la compatibilidad de los archivos para intercambio gráfico, bloqueando elementos dinámicos que causan errores en imprenta",
            "C) Comprimir videos en alta definición para redes sociales",
            "D) Proteger con contraseña el código fuente de una página web"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los estándares PDF/X (como PDF/X-1a o PDF/X-4) suprimen elementos interactivos y aseguran que fuentes, colores y sangrados estén correctos para impresión."
    },
    {
        "id": 114,
        "area": "Proceso de Impresión y Producción",
        "pregunta": "¿Qué es el barniz UV sectorizado (o reserva) en los acabados gráficos post-impresión?",
        "opciones": [
            "A) Un barniz general para proteger el papel de la humedad marina",
            "B) Un pegamento térmico para encuadernación rústica",
            "C) Una tinta luminiscente que brilla en la oscuridad",
            "D) Una laca brillante aplicada mediante luz ultravioleta únicamente sobre áreas específicas del diseño para generar un contraste táctil y visual con el fondo mate"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El barniz UV sectorizado realza detalles selectos (como logotipos o texturas) aplicando brillo localizado sobre un fondo opaco."
    },
    {
        "id": 115,
        "area": "Branding e Identidad Corporativa",
        "pregunta": "¿Qué es el 'Auditoría de Marca' (Brand Audit)?",
        "opciones": [
            "A) La revisión fiscal de los ingresos de la agencia",
            "B) El control de calidad de las tintas en imprenta",
            "C) Una evaluación exhaustiva del rendimiento, posicionamiento, fortalezas y debilidades de una marca en el mercado actual",
            "D) El recuento del inventario de papelería en la bodega"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La auditoría de marca examina la salud integral de la identidad corporativa frente a los consumidores y competidores."
    },
    {
        "id": 116,
        "area": "Diseño Editorial y Publicaciones",
        "pregunta": "¿Qué es la 'retícula modular' en el diseño editorial avanzado?",
        "opciones": [
            "A) Un sistema de encuadernación de hojas sueltas",
            "B) Una retícula estructurada mediante la división de la página en pequeños rectángulos o módulos iguales, ofreciendo máxima flexibilidad para acomodar textos e imágenes",
            "C) Una plantilla para diseño de logotipos circulares",
            "D) Un formato exclusivo para libros infantiles desplegables"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La retícula modular divide el espacio en celdas regulares, permitiendo composiciones complejas y consistentes en proyectos editoriales extensos."
    },
    {
        "id": 117,
        "area": "Diseño de Envase, Embalaje y Packaging",
        "pregunta": "¿Qué función cumple el código de barras GTIN (como EAN-13 o UPC) en el packaging comercial?",
        "opciones": [
            "A) Indicar el peso volumétrico del cartón corrugado",
            "B) Permitir la lectura óptica automatizada para el control de inventarios, cobro en cajas registradoras y trazabilidad logística",
            "C) Servir como elemento decorativo principal de la marca",
            "D) Reemplazar la información nutricional obligatoria"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El código de barras es un estándar logístico y comercial indispensable para la identificación global y lectura en puntos de venta."
    },
    {
        "id": 118,
        "area": "Señalética y Diseño Ambiental",
        "pregunta": "¿Qué es la iluminación cenital o autónoma de emergencia en los sistemas señaléticos arquitectónicos?",
        "opciones": [
            "A) Un sistema de climatización para pasillos",
            "B) Un foco decorativo para resaltar cuadros de arte",
            "C) Señalización fotoluminiscente o con respaldo eléctrico propio que se activa en caso de apagón para guiar las rutas de evacuación",
            "D) Un proyector láser para publicidad exterior"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las señales de evacuación autónomas garantizan visibilidad en situaciones críticas de corte de energía eléctrica."
    },
    {
        "id": 119,
        "area": "Diseño Publicitario y Mercadotecnia",
        "pregunta": "¿Qué es el 'Inbound Marketing' en relación con las estrategias visuales y de contenidos?",
        "opciones": [
            "A) Una metodología centrada en atraer clientes mediante la creación de contenido de valor, educativo y relevante, en lugar de la publicidad intrusiva tradicional",
            "B) La compra masiva de espacios publicitarios en televisión abierta",
            "C) El reparto de volantes impresos en la vía pública",
            "D) El diseño de carteles para vallas publicitarias en carreteras"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El inbound marketing atrae orgánicamente a la audiencia mediante piezas gráficas y contenidos útiles que responden a sus necesidades informativas."
    },
    {
        "id": 120,
        "area": "Metodología y Gestión de Proyectos de Diseño",
        "pregunta": "¿Qué representa la fase de 'Testeo o Validación' en un proceso de diseño centrado en el usuario?",
        "opciones": [
            "A) Registrar la marca ante el instituto de patentes",
            "B) Imprimir el tiraje final en la imprenta sin supervisiones",
            "C) Calcular los honorarios finales del diseñador",
            "D) Probar los prototipos funcionales con usuarios reales para evaluar su usabilidad, detectar fallos y perfeccionar el producto antes del lanzamiento definitivo"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El testeo con usuarios cierra el ciclo iterativo del diseño, asegurando que la solución final sea verdaderamente útil, intuitiva y efectiva."
    }
];