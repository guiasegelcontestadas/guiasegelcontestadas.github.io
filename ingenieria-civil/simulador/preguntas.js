const bancoPreguntas = [
    {
        id: 1,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Cuál es el propósito principal del uso de estribos en una viga de concreto reforzado?",
        opciones: [
            "A) Aumentar la resistencia a compresión simple del concreto",
            "B) Resistir los esfuerzos cortantes y de torsión",
            "C) Incrementar el módulo de elasticidad del acero longitudinal",
            "D) Reducir el peso volumétrico del elemento estructural"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los estribos o refuerzo transversal en vigas de concreto reforzado tienen como función principal resistir las fuerzas cortantes y los momentos torsores, además de confinar el concreto y mantener en su posición el acero longitudinal."
    },
    {
        id: 2,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En el diseño por resistencia última de columnas de concreto, ¿a qué se refiere la excentricidad accidental?",
        opciones: [
            "A) A la carga viva máxima estimada por el reglamento",
            "B) Al desplazamiento lateral provocado por sismo en la azotea",
            "C) Al efecto de momentos torsores generados por errores de colocación del acero",
            "D) A la excentricidad mínima considerada por reglamento para cubrir imprecisiones constructivas"
        ],
        respuestaCorrecta: 3,
        explicacion: "La excentricidad accidental es un valor mínimo de excentricidad estipulado en los reglamentos de construcción (como el ACI o las Normas Técnicas Complementarias) para tomar en cuenta imperfecciones constructivas, tolerancias de montaje y variaciones en la aplicación de las cargas."
    },
    {
        id: 3,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Qué tipo de falla es característico en una viga de concreto subreforzada?",
        opciones: [
            "A) Falla frágil por aplastamiento del concreto antes de la fluencia del acero",
            "B) Falla dúctil con fluencia previa del acero de refuerzo a tracción",
            "C) Falla por corte puro sin deformación plástica visible",
            "D) Falla por adherencia entre el acero y el concreto circundante"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una viga subreforzada contiene una cantidad de acero menor a la de balance. Al someterse a flexión, el acero fluye primero dando amplios avisos de deformación (falla dúctil), lo cual es deseable en diseño sismorresistente."
    },
    {
        id: 4,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En estructuras de acero, ¿cómo se define la relación de esbeltez de un elemento a compresión?",
        opciones: [
            "A) Longitud libre multiplicada por el radio de giro",
            "B) Longitud efectiva dividida entre el radio de giro mínimo",
            "C) Momento de inercia máximo dividido entre el área transversal",
            "D) Carga crítica de pandeo dividida entre el área neta"
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación de esbeltez se expresa como KL/r, donde K es el factor de longitud efectiva, L es la longitud no arriostrada y r es el radio de giro correspondiente respecto al eje de pandeo analizado."
    },
    {
        id: 5,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Cuál es el fenómeno en el cual una estructura de acero pierde su estabilidad lateral debido a cargas axiales de compresión?",
        opciones: [
            "A) Pandeo elástico o inelástico",
            "B) Fatiga por inversión de esfuerzos",
            "C) Termofluencia (Creep)",
            "D) Corrosión bajo tensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pandeo es la inestabilidad lateral que experimentan los elementos esbeltos sometidos a compresión, pudiendo ocurrir en el rango elástico o inelástico dependiendo de su relación de esbeltez y el esfuerzo de fluencia."
    },
    {
        id: 6,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En el análisis matricial de estructuras, ¿qué representa la matriz de rigidez de un elemento?",
        opciones: [
            "A) Las fuerzas internas generadas por unidad de temperatura",
            "B) La relación entre los desplazamientos nodales y las fuerzas aplicadas en los extremos",
            "C) El trabajo virtual realizado por las cargas externas",
            "D) Las deformaciones unitarias máximas tolerables por el material"
        ],
        respuestaCorrecta: 1,
        explicacion: "La matriz de rigidez relaciona directamente las fuerzas (o momentos) en los nudos o extremos de un elemento con los desplazamientos (o giros) correspondientes en esos mismos puntos."
    },
    {
        id: 7,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Qué indica un factor de seguridad mayor a 1.0 en el diseño por esfuerzos permisibles (ASD)?",
        opciones: [
            "A) Que la estructura fallará inmediatamente bajo las cargas de servicio",
            "B) Que la capacidad nominal es menor que la carga aplicada",
            "C) Que la capacidad resistente del material es mayor que el esfuerzo máximo de diseño",
            "D) Que el análisis estructural se realizó mediante métodos no lineales"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el método ASD, los factores de seguridad se aplican para garantizar que los esfuerzos inducidos por las cargas de servicio no superen una fracción segura de la resistencia del material (esfuerzo admisible)."
    },
    {
        id: 8,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Cuál es la función principal de las juntas de dilatación o construcción en losas de concreto de grandes dimensiones?",
        opciones: [
            "A) Incrementar la resistencia al cortante punzante de las columnas",
            "B) Permitir el movimiento térmico y la retracción de fraguado sin agrietamientos descontrolados",
            "C) Evitar la infiltración de agua freática hacia la superficie de rodamiento",
            "D) Facilitar la inserción de ductos de postensado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las juntas permiten absorber los cambios volumétricos debidos a variaciones térmicas y al secado o contracción del concreto (retracción de fraguado), previniendo grietas aleatorias."
    },
    {
        id: 9,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En una armadura plana isostática, si el número de barras ($B$) y el número de nudos ($N$) cumplen con la relación $B = 2N - 3$, se puede afirmar que:",
        opciones: [
            "A) La armadura es inestable geométricamente",
            "B) La armadura es hiperestática y tiene grados de libertad redundantes",
            "C) La armadura es externamente e internamente estática y determinada",
            "D) La armadura es un mecanismo móvil"
        ],
        respuestaCorrecta: 2,
        explicacion: "La condición necesaria (aunque no siempre suficiente de geometría) para la determinbmcación estática externa e interna de una armadura plana es $B = 2N - 3$."
    },
    {
        id: 10,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Qué representa el módulo de elasticidad ($E$) de un material en la ley de Hooke unidimensional?",
        opciones: [
            "A) La pendiente de la zona elástica en el diagrama esfuerzo-deformación",
            "B) La energía total absorbida hasta el punto de ruptura",
            "C) El esfuerzo máximo que soporta el material antes de fluir",
            "D) La relación entre la deformación transversal y la longitudinal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El módulo de elasticidad ($E$) es la pendiente de la porción lineal elástica del diagrama esfuerzo-deformación, midiendo la rigidez del material."
    },
    {
        id: 11,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué parámetro geotécnico se determina comúnmente mediante el ensayo de corte directo?",
        opciones: [
            "A) El límite líquido y límite plástico del suelo",
            "B) La cohesión ($c$) y el ángulo de fricción interna ($\\phi$)",
            "C) La permeabilidad hidráulica bajo carga constante",
            "D) La velocidad de onda de corte en el subsuelo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ensayo de corte directo permite obtener los parámetros de resistencia al corte de un suelo: la cohesión ($c$) y el ángulo de fricción interna ($\\phi$), mediante la ley de Mohr-Coulomb."
    },
    {
        id: 12,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "En un suelo saturado, ¿cómo se define el esfuerzo efectivo según la teoría de Terzaghi?",
        opciones: [
            "A) Esfuerzo total menos la presión de poro (presión neutra)",
            "B) Esfuerzo total multiplicado por la porosidad del suelo",
            "C) Presión hidrostática más el peso específico sumergido",
            "D) Carga aplicada dividida entre el área neta de los granos sólidos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ley de los esfuerzos efectivos de Terzaghi establece que el esfuerzo efectivo ($\\sigma'$) es igual al esfuerzo total ($\\sigma$) menos la presión de poros ($u$): $\\sigma' = \\sigma - u$."
    },
    {
        id: 13,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué indica un índice de plasticidad ($IP$) elevado en un suelo arcilloso?",
        opciones: [
            "A) Baja capacidad de retención de humedad y alta permeabilidad",
            "B) Alto contenido de arena gruesa y grava limosa",
            "C) Alta plasticidad, gran cambio volumétrico ante variaciones de humedad y alta compresibilidad",
            "D) Estabilidad volumétrica excelente ante condiciones de saturación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El índice de plasticidad ($IP = \\text{Límite Líquido} - \\text{Límite Plástico}$) refleja el rango de humedades en el cual el suelo se comporta de manera plástica; un valor alto indica arcillas expansivas y problemáticas para cimentaciones."
    },
    {
        id: 14,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Cuál es el objetivo principal de realizar la prueba de compactación Proctor Estándar o Modificado en laboratorio?",
        opciones: [
            "A) Determinar la capacidad de carga última de cimentaciones profundas",
            "B) Obtener la densidad seca máxima y el contenido de humedad óptimo",
            "C) Medir la velocidad de consolidación primaria de arcillas blandas",
            "D) Calcular el coeficiente de permeabilidad in situ"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba Proctor relaciona la humedad de compactación con el peso volumétrico seco obtenido, permitiendo identificar la humedad óptima para alcanzar la densidad máxima especificada en obra."
    },
    {
        id: 15,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "En mecánica de suelos, ¿qué representa el coeficiente de seguridad al deslizamiento de un talud (factor de seguridad)?",
        opciones: [
            "A) La relación entre las fuerzas resistentes al corte y las fuerzas deslizantes",
            "B) La relación entre la altura máxima del talud y la profundidad del nivel freático",
            "C) El cociente entre el asentamiento elástico y el asentamiento por consolidación",
            "D) La máxima pendiente admisible expresada en grados sexagesimales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de seguridad en estabilidad de taludes se define como $FS = \\text{Fuerzas Resistentes} / \\text{Fuerzas Deslizantes}$ a lo largo de una superficie de falla potencial."
    },
    {
        id: 16,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué fenómeno describe la consolidación primaria en suelos arcillosos cohesivos?",
        opciones: [
            "A) La deformación inmediata por distorsión elástica del esqueleto mineral",
            "B) El flujo de agua hacia el exterior debido al exceso de presión de poros generado por una carga",
            "C) La reorganización lenta de las partículas arcillosas bajo carga constante a presión de poro cero",
            "D) El cambio de fase de sólido a líquido por licuación dinámica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La consolidación primaria es el proceso gradual de expulsión de agua de los poros y la consiguiente transferencia de carga al esqueleto mineral, impulsado por el exceso de presión de poro disipada."
    },
    {
        id: 17,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "Si un suelo tiene una relación de vacíos $e = 1.0$, ¿cuál es su porosidad ($n$) expresada en porcentaje?",
        opciones: [
            "A) 25%",
            "B) 50%",
            "C) 75%",
            "D) 100%"
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación entre porosidad ($n$) y relación de vacíos ($e$) es $n = e / (1 + e)$. Si $e = 1.0$, entonces $n = 1.0 / (1 + 1.0) = 0.50$ o 50%."
    },
    {
        id: 18,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Cuál es el propósito de realizar pruebas de penetración estándar (SPT) en el campo?",
        opciones: [
            "A) Medir directamente el esfuerzo cortante no drenado en arcillas muy blandas en superficie",
            "B) Obtener el número de golpes ($N$) para correlacionarlo con la compacidad, consistencia y capacidad de carga",
            "C) Extraer muestras inalteradas de gran longitud para ensayos triaxiales avanzados",
            "D) Determinar la resistividad eléctrica del suelo para sistemas de puesta a tierra"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ensayo SPT proporciona el número de golpes $N$ requerido para hincar un muestreador estándar 30 cm, sirviendo para correlaciones empíricas de resistencia y deformabilidad del terreno."
    },
    {
        id: 19,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "En cimentaciones profundas (pilotes), ¿cómo se transmite principalmente la carga al terreno en un pilote de punta?",
        opciones: [
            "A) A través de la fricción lateral a lo fuste del pilote exclusivamente",
            "B) A través de la resistencia por compresión en la base o punta del pilote sobre un estrato resistente",
            "C) Mediante la flotación hidrostática del elemento estructural",
            "D) Por tensión inducida en los estratos superficiales blandos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un pilote de punta transfiere la mayor parte de su carga axial directamente al estrato profundo competente sobre el cual descansa la punta del elemento."
    },
    {
        id: 20,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué caracteriza a un suelo susceptible al fenómeno de licuación durante un sismo?",
        opciones: [
            "A) Arcillas preconsolidadas altamente plásticas y secas",
            "B) Arenas finas limosas, sueltas y saturadas",
            "C) Bloques de roca fracturada con alta permeabilidad",
            "D) Suelos orgánicos con alto contenido de turba"
        ],
        respuestaCorrecta: 1,
        explicacion: "La licuación ocurre típicamente en arenas finas sueltas saturadas donde las vibraciones sísmicas generan un incremento repentino de la presión de poros, anulando el esfuerzo efectivo y haciendo que el suelo se comporte como un líquido."
    },
    {
        id: 21,
        area: "Hidráulica e Hidrología",
        pregunta: "En la ecuación de continuidad para flujo incompresible, ¿qué variable se mantiene constante a lo largo de las secciones de una tubería?",
        opciones: [
            "A) La velocidad media del fluido",
            "B) El gasto o caudal volumétrico",
            "C) La presión estática del flujo",
            "D) La altura piezométrica total"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación de continuidad ($Q = A_1 V_1 = A_2 V_2$) expresa la conservación de la masa, indicando que para un fluido incompresible el gasto ($Q$) es constante en cualquier sección del conducto."
    },
    {
        id: 22,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué representa la línea de energía en un sistema de flujo en tuberías o canales?",
        opciones: [
            "A) La suma de la carga de presión y la carga de posición",
            "B) La suma de la carga de velocidad, la carga de presión y la carga de elevación",
            "C) La pérdida de carga total acumulada por fricción en el sistema",
            "D) El gradiente hidráulico multiplicado por la longitud de la conducción"
        ],
        respuestaCorrecta: 1,
        explicacion: "La línea de energía representa la carga total del fluido, la cual es la suma geométrica de la carga de velocidad ($V^2/2g$), la carga de presión ($P/\gamma$) y la carga de elevación ($z$). Su pendiente decrece debido a las pérdidas de energía."
    },
    {
        id: 23,
        area: "Hidráulica e Hidrología",
        pregunta: "En canales abiertos, ¿qué condición define el flujo crítico?",
        opciones: [
            "A) El número de Froude es igual a uno ($Fr = 1$) y la energía específica es mínima para un caudal dado",
            "B) El número de Froude es mayor a uno ($Fr > 1$) y el flujo es rápido o supercrítico",
            "C) La velocidad del flujo es menor que la velocidad de propagación de ondas elásticas",
            "D) El radio hidráulico coincide con la profundidad media del canal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El flujo crítico en canales abiertos se caracteriza porque el número de Froude es igual a 1.0, y para un caudal determinado, la energía específica alcanza su valor mínimo."
    },
    {
        id: 24,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Cuál es la fórmula empírica más utilizada en la práctica para el cálculo del flujo uniforme en canales abiertos?",
        opciones: [
            "A) Ecuación de Darcy-Weisbach",
            "B) Ecuación de Manning",
            "C) Ecuación de Hazen-Williams",
            "D) Teorema de Torricelli"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación de Manning ($V = (1/n) R^{2/3} S^{1/2}$) es la expresión estándar más ampliamente empleada para el diseño y análisis de escurrimientos a superficie libre (canales y alcantarillas)."
    },
    {
        id: 25,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué fenómeno hidráulico se produce en una transición abrupta de flujo supercrítico a subcrítico en un canal?",
        opciones: [
            "A) Un golpe de ariete transitorio",
            "B) Un resalto hidráulico con disipación significativa de energía",
            "C) Una cavitación severa en las paredes del canal",
            "D) Un aumento repentino del número de Reynolds"
        ],
        respuestaCorrecta: 1,
        explicacion: "El resalto hidráulico es un fenómeno violento y natural de transición de régimen supercrítico a subcrítico, caracterizado por una fuerte turbulencia y una considerable disipación de energía mecánica."
    },
    {
        id: 26,
        area: "Hidráulica e Hidrología",
        pregunta: "En el ciclo hidrológico, ¿cómo se define el coeficiente de escurrimiento?",
        opciones: [
            "A) La relación entre el volumen de agua escurrido superficialmente y el volumen total de precipitación",
            "B) La velocidad máxima de infiltración del agua en el suelo superficial",
            "C) La cantidad de agua evaporada desde los espejos de agua entre la precipitación total",
            "D) El cociente entre el caudal pico de una cuenca y su área de drenaje"
        ],
        respuestaCorrecta: 0,
        explicacion: "El coeficiente de escurrimiento es la relación adimensional entre el volumen de agua que escurre por la superficie de una cuenca y el volumen total de lluvia precipitada sobre la misma."
    },
    {
        id: 27,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué método hidrológico se emplea comúnmente para estimar el caudal máximo de diseño en cuencas pequeñas y urbanas?",
        opciones: [
            "A) Método Racional ($Q = C i A$)",
            "B) Método del Hidrograma Unitario Sintético de Snyder",
            "C) Curvas de Duración General de Caudales",
            "D) Ecuación de balance hídrico mensual de Thornthwaite"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Método Racional es ampliamente utilizado para cuencas pequeñas (generalmente menores a 13-50 km²) para estimar el caudal pico ($Q$) en función del coeficiente de escurrimiento ($C$), la intensidad de lluvia ($i$) y el área de la cuenca ($A$)."
    },
    {
        id: 28,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué representa el tiempo de concentración de una cuenca hidrográfica?",
        opciones: [
            "A) El tiempo que tarda el agua en evaporarse completamente de la cuenca tras una tormenta",
            "B) El tiempo necesario para que una gota de agua caiga desde el punto más alejado hidráulicamente y llegue a la salida o sección de control",
            "C) El lapso en el que la intensidad de precipitación alcanza su valor máximo",
            "D) El tiempo requerido para que el acuífero subterráneo sature sus espacios vacíos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo de concentración es el tiempo que toma el agua de lluvia desde el punto hidráulicamente más distante de la cuenca para fluir hasta la sección de salida."
    },
    {
        id: 29,
        area: "Hidráulica e Hidrología",
        pregunta: "En tuberías a presión, ¿a qué se debe el fenómeno conocido como 'golpe de ariete'?",
        opciones: [
            "A) A la fricción excesiva del agua contra las paredes internas de la tubería de acero",
            "B) Al cambio brusco de velocidad del fluido debido al cierre o apertura rápida de una válvula o bomba",
            "C) A la formación masiva de burbujas de vapor por altas temperaturas del agua",
            "D) A la sobrepresión generada por el paso de ondas sísmicas transversales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El golpe de ariete es una sobrepresión (o depresión) transitoria provocada por la variación rápida de la velocidad del fluido en una tubería cerrada, típicamente por el cierre súbito de una válvula."
    },
    {
        id: 30,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué indica un número de Reynolds ($Re$) superior a 4000 en el flujo de agua a través de una tubería circular?",
        opciones: [
            "A) Que el flujo es completamente laminar y ordenado",
            "B) Que el flujo se encuentra en la zona de transición inestable",
            "C) Que el flujo es turbulento",
            "D) Que las fuerzas viscosas predominan sobre las de inercia"
        ],
        respuestaCorrecta: 2,
        explicacion: "En conductos circulares a presión, un número de Reynolds superior a 4000 indica un régimen de flujo turbulento, donde las fuerzas de inercia dominan sobre las viscosas y las partículas siguen trayectorias caóticas."
    },
    {
        id: 31,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué representa la 'ruta crítica' en el método de la ruta crítica (CPM) para la administración de proyectos?",
        opciones: [
            "A) La secuencia de actividades que tiene los costos directos más elevados",
            "B) La cadena de actividades dependientes que determina la duración mínima total del proyecto",
            "C) Las tareas que pueden sufrir retrasos sin afectar la fecha de entrega final del proyecto",
            "D) El conjunto de actividades subcontratadas con mayor riesgo financiero"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ruta crítica es la secuencia de actividades con holgura cero (o mínima) que determina el tiempo total necesario para completar el proyecto; cualquier retraso en esta ruta impacta directamente la fecha de terminación."
    },
    {
        id: 32,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En el análisis de precios unitarios (APU), ¿qué elementos componen los costos indirectos de una obra?",
        opciones: [
            "A) Materiales, mano de obra y maquinaria directamente incorporados en el elemento físico",
            "B) Gastos de administración central, oficinas de campo, supervisiones, permisos y fianzas",
            "C) Únicamente los salarios del personal obrero y operarios sindicalizados",
            "D) Las utilidades estimadas por el contratista y los impuestos federales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los costos indirectos son aquellos gastos generales necesarios para la ejecución de la obra que no pueden aplicarse a una partida o concepto específico de manera directa, tales como administración, vigilancia, campamentos, fianzas y seguros."
    },
    {
        id: 33,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Cuál es el propósito de realizar una prueba de revenimiento (Slump test) al concreto fresco en la obra?",
        opciones: [
            "A) Medir la resistencia a la compresión a los 28 días de edad",
            "B) Determinar la consistencia y trabajabilidad del concreto antes de su colocación",
            "C) Comprobar la cantidad exacta de aire incluido en pavimentos",
            "D) Cuantificar el porcentaje de vacíos y tamaño máximo de agregados gruesos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba de revenimiento es un indicador empírico de la consistencia y trabajabilidad del concreto fresco, asegurando que cumpla con los parámetros de fluidez requeridos para su colocación."
    },
    {
        id: 34,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En la técnica de valor ganado (Earned Value Management), ¿qué indica un índice de desempeño de costos ($CPI$) menor a 1.0?",
        opciones: [
            "A) Que el proyecto está por debajo del presupuesto estimado",
            "B) Que el proyecto está gastando más dinero de lo planeado para el trabajo realizado (sobrecosto)",
            "C) Que el proyecto avanza más rápido que el programa cronológico establecido",
            "D) Que el valor ganado supera el costo real acumulado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El índice de desempeño de costos ($CPI = \\text{EV} / \\text{AC}$) mide la eficiencia de costos. Un $CPI < 1.0$ significa que por cada unidad monetaria gastada, se está obteniendo un valor menor al previsto, indicando sobrecosto."
    },
    {
        id: 35,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Cuál es el documento contractual que detalla la descripción técnica, calidades, tolerancias y métodos de medición y pago de cada concepto de obra?",
        opciones: [
            "A) La memoria de cálculo estructural",
            "B) Las especificaciones técnicas particulares y generales",
            "C) El programa general de inversiones",
            "D) El acta de entrega-recepción de los trabajos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las especificaciones técnicas establecen los estándares de calidad de los materiales, los procedimientos de ejecución constructiva y la forma en que se medirán y pagarán los trabajos ejecutados."
    },
    {
        id: 36,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En el proceso de compactación de terracerías, ¿con qué frecuencia o método se evalúa comúnmente el grado de compactación alcanzado en campo?",
        opciones: [
            "A) Pruebas de cono de arena o densímetro nuclear para comparar el peso volumétrico seco de campo con el Proctor de laboratorio",
            "B) Ensayos de compresión triaxial rápida en muestras alteradas",
            "C) Mediciones con esclerómetro de rebote superficial",
            "D) Pruebas de carga directa con placa metálica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El grado de compactación en campo se determina relacionando la densidad seca obtenida in situ (mediante cono de arena o densímetro nuclear) con la densidad seca máxima obtenida en la prueba Proctor de laboratorio."
    },
    {
        id: 37,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué tipo de contrato de obra pública o privada traslada el mayor riesgo financiero al contratista en cuanto a variaciones en las cantidades de obra?",
        opciones: [
            "A) Contrato por precio alzado (precio fijo global)",
            "B) Contrato por precios unitarios",
            "C) Contrato por administración con reembolso de gastos",
            "D) Contrato por tiempos y materiales"
        ],
        respuestaCorrecta: 0,
        explicacion: "En un contrato a precio alzado o precio fijo global, el contratista se compromete a ejecutar la obra completa por una cantidad total inalterable, asumiendo el riesgo de que las cantidades de obra o costos reales superen lo estimado."
    },
    {
        id: 38,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué función cumple el curado del concreto durante los primeros días posteriores a su colocación?",
        opciones: [
            "A) Acelerar el fraguado inicial para retirar cimbras en pocas horas",
            "B) Mantener la humedad y temperatura adecuadas para permitir la hidratación completa del cemento y evitar fisuración por contracción plástica",
            "C) Evitar que los agregados finos sufran segregación por vibración excesiva",
            "D) Incrementar el peso volumétrico reduciendo el aire atrapado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El curado previene la evaporación prematura del agua de mezclado, garantizando que existan las condiciones hídricas necesarias para que las reacciones químicas de hidratación del cemento alcancen la resistencia proyectada."
    },
    {
        id: 39,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En la programación de obras, ¿qué representa la holgura total de una actividad?",
        opciones: [
            "A) El tiempo máximo que se puede retrasar una actividad sin afectar la fecha de terminación del proyecto",
            "B) El tiempo adicional que requiere la maquinaria para realizar el mantenimiento preventivo",
            "C) El retraso permitido antes de que la actividad comience a consumir recursos financieros de la utilidad",
            "D) La diferencia entre el costo directo y el costo indirecto de la tarea"
        ],
        respuestaCorrecta: 0,
        explicacion: "La holgura total es el margen de tiempo que una actividad puede retrasarse respecto a su inicio temprano sin retrasar la fecha de finalización global del proyecto."
    },
    {
        id: 40,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Cuál es el objetivo de realizar una estimación de obra en un contrato de precios unitarios?",
        opciones: [
            "A) Modificar unilateralmente las especificaciones de diseño estructural",
            "B) Cuantificar y cuantificar económicamente los trabajos ejecutados durante un periodo para su cobro y pago",
            "C) Establecer las sanciones por incumplimiento de plazos de entrega parciales",
            "D) Calcular el reparto de utilidades entre los subcontratistas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las estimaciones son los documentos mediante los cuales el contratista presenta el avance físico real de los conceptos ejecutados en un periodo determinado, aplicando los precios unitarios pactados para su revisión y pago por parte del cliente."
    },
    {
        id: 41,
        area: "Vías Terrestres y Transportes",
        pregunta: "En el diseño geométrico de carreteras, ¿qué función cumple la curva vertical parabólica de transición?",
        opciones: [
            "A) Suavizar el cambio de pendiente longitudinal para garantizar la comodidad y la distancia de visibilidad",
            "B) Compensar la fuerza centrífuga en las curvas horizontales cerradas",
            "C) Reducir el radio de giro de los vehículos pesados en intersecciones a nivel",
            "D) Limitar la velocidad máxima de operación en tramos montañosos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las curvas verticales parabólicas conectan las pendientes tangentes de rasante de manera gradual, evitando cambios bruscos de aceleración vertical y asegurando la distancia de visibilidad de parada."
    },
    {
        id: 42,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Cómo se define el peralte en el diseño geométrico horizontal de carreteras?",
        opciones: [
            "A) La pendiente transversal que se da al arroyo vial para contrarrestar la fuerza centrífuga de los vehículos en curvas",
            "B) La sobreanchura aplicada en el lado interior de una curva cerrada",
            "C) La inclinación máxima permitida en pendientes ascendentes para camiones pesados",
            "D) La altura libre vertical bajo pasos a desnivel y puentes"
        ],
        respuestaCorrecta: 0,
        explicacion: "El peralte es la inclinación transversal de la sección de la carretera hacia el centro de la curva, destinada a generar una componente del peso del vehículo que contrarreste la fuerza centrífuga."
    },
    {
        id: 43,
        area: "Vías Terrestres y Transportes",
        pregunta: "En pavimentos flexibles, ¿cuál es la función principal de la capa de base hidráulica?",
        opciones: [
            "A) Soportar directamente las altas presiones tangenciales de los neumáticos y resistir la intemperie",
            "B) Recibir los esfuerzos principales transmitidos por la carpeta asfáltica y distribuirlos adecuadamente hacia la subbase y la terracería",
            "C) Actuar como barrera impermeable absoluta contra el ascenso capilar del agua freática",
            "D) Proporcionar un acabado estético de color claro para reducir la absorción de calor"
        ],
        respuestaCorrecta: 1,
        explicacion: "La capa de base es el componente estructural principal del pavimento flexible ubicado bajo la carpeta; su función es soportar las cargas de las ruedas transmitidas a través de la carpeta y distribuirlas a los estratos inferiores."
    },
    {
        id: 44,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué diferencia fundamental existe en el comportamiento estructural entre un pavimento flexible y un pavimento rígido?",
        opciones: [
            "A) El flexible distribuye las cargas mediante la alta resistencia a flexión de una losa de concreto hidráulico",
            "B) El rígido disipa los esfuerzos mediante la rigidez de su losa de concreto, mientras que el flexible lo hace mediante la de flexión y distribución por capas granulares",
            "C) El pavimento flexible no requiere capas de subrasante, a diferencia del rígido",
            "D) El pavimento rígido sufre deformaciones plásticas permanentes bajo cargas repetidas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los pavimentos rígidos (concreto hidráulico) distribuyen las cargas sobre un área amplia gracias a la alta rigidez y módulo de ruptura de la losa. Los pavimentos flexibles (asfalto) dependen de la fricción y confinamiento de capas granulares y asfálticas."
    },
    {
        id: 45,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué es el Valor Relativo de Soporte (CBR - California Bearing Ratio) en la evaluación de materiales para carreteras?",
        opciones: [
            "A) Un índice de resistencia al corte directo de los agregados asfálticos",
            "B) Una prueba de penetración que mide la resistencia al corte de un suelo comparada con la de una roca estándar triturada",
            "C) El porcentaje de vacíos llenos de aire en una mezcla asfáltica compactada",
            "D) La capacidad de drenaje rápido de las capas de base en zonas lluviosas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ensayo CBR mide la resistencia a la penetración de un pistón en un suelo compactado a una humedad y densidad específicas, comparándola con los valores de una piedra triturada estándar (CBR = 100%), sirviendo para diseñar espesores de pavimento."
    },
    {
        id: 46,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Cuál es el propósito de incluir juntas de contracción y expansión en los pavimentos rígidos de concreto hidráulico?",
        opciones: [
            "A) Permitir los movimientos volumétricos generados por cambios térmicos y de humedad, evitando agrietamientos descontrolados",
            "B) Facilitar el paso de ductos de cableado eléctrico y alumbrado público",
            "C) Incrementar el coeficiente de fricción superficial para evitar derrapes en frenado",
            "D) Reducir el espesor requerido de la losa de concreto frente a cargas pesadas por eje"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las losas de concreto se contraen y expanden por variaciones de temperatura y humedad; las juntas controlan estos esfuerzos internos previniendo fisuras transversales o longitudinales irregulares."
    },
    {
        id: 47,
        area: "Vías Terrestres y Transportes",
        pregunta: "En el diseño geométrico, ¿qué es la distancia de visibilidad de parada?",
        opciones: [
            "A) La longitud necesaria para que un vehículo frene totalmente al aparecer un obstáculo imprevisto en su trayectoria",
            "B) La distancia máxima a la que el conductor puede observar señales de tránsito verticales",
            "C) El espacio requerido para rebasar con seguridad a un vehículo que circula a menor velocidad",
            "D) La separación mínima obligatoria entre camiones de carga en autopistas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La distancia de visibilidad de parada es la suma de la distancia recorrida durante el tiempo de percepción-reacción del conductor y la distancia de frenado propiamente dicha."
    },
    {
        id: 48,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué tipo de falla en pavimentos flexibles se manifiesta como ondulaciones o desplazamientos plásticos transversales en zonas de frenado o arranque?",
        opciones: [
            "A) Agrietamiento en piel de cocodrilo por fatiga",
            "B) Ahuellamiento o deformación por consolidación plástica de las capas",
            "C) Ondulaciones (corrugaciones) o depresiones superficiales",
            "D) Desprendimiento de agregados por oxidación del asfalto"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las ondulaciones o corrugaciones son deformaciones plásticas transversales al sentido del tránsito causadas comúnmente por la falta de estabilidad de la mezcla asfáltica ante esfuerzos cortantes repetidos en frenado."
    },
    {
        id: 49,
        area: "Vías Terrestres y Transportes",
        pregunta: "En el análisis de tránsito vehicular para pavimentos, ¿qué representan los Ejes Equivalentes de Carga (ESALs)?",
        opciones: [
            "A) El número total de vehículos ligeros que transitan por la vía en un día promedio anual",
            "B) La conversión de diferentes configuraciones y pesos de ejes vehiculares a un número estándar de ejes sencillos de 8.2 toneladas (18,000 libras)",
            "C) La carga máxima permitida por la normativa de pesos y dimensiones en puentes",
            "D) El factor de ampliación por crecimiento vehicular a lo largo de la vida de diseño"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los ESALs (Equivalent Single Axle Loads) permiten estandarizar el daño acumulado al pavimento causado por vehículos de diversas cargas y configuraciones de ejes, convirtiéndolos a un equivalente de ejes sencillos patrón."
    },
    {
        id: 50,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Cuál es el objetivo de colocar una capa de sello o riego de impregnación sobre una base hidráulica antes de aplicar la carpeta asfáltica?",
        opciones: [
            "A) Aumentar la rigidez a compresión de la base en un 100%",
            "B) Impermeabilizar la base, evitar la disgregación superficial y promover la adherencia con la carpeta asfáltica",
            "C) Servir como superficie temporal de rodamiento para vehículos pesados durante la construcción",
            "D) Reducir la temperatura de compactación de la mezcla asfáltica en caliente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El riego de impregnación consiste en la aplicación de un ligante asfáltico de baja viscosidad sobre la base hidráulica para impermeabilizarla, unir las partículas sueltas y asegurar la adherencia con la carpeta."
    },
    {
        id: 51,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Cuál es el propósito fundamental de un tanque Imhoff en el tratamiento primario de aguas residuales municipales?",
        opciones: [
            "A) Realizar la nitrificación biológica avanzada mediante bacterias aerobias suspendidas",
            "B) Sedimentar los sólidos suspendibles en el compartimento superior y digerir anaerobiamente los lodos acumulados en el compartimento inferior",
            "C) Desinfectar el efluente final utilizando cloro gas o radiación ultravioleta",
            "D) Filtrar los coloides disueltos mediante membranas de ósmosis inversa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tanque Imhoff es una estructura de tratamiento primario de doble cámara: arriba sedimentan los sólidos y caen por una ranura al fondo, donde los lodos son digeridos anaerobiamente sin mezclarse con el flujo principal."
    },
    {
        id: 52,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En el diseño de redes de alcantarillado sanitario, ¿con qué objeto se establece una velocidad mínima autolimpiante (típicamente 0.60 m/s)?",
        opciones: [
            "A) Evitar la sedimentación y acumulación de sólidos suspendidos en el fondo de las tuberías",
            "B) Prevenir la cavitación y la erosión en las paredes interiores de los colectores de concreto",
            "C) Incrementar el caudal máximo extraordinario en época de lluvias intensas",
            "D) Garantizar un régimen de flujo laminar para reducir las pérdidas de energía por fricción"
        ],
        respuestaCorrecta: 0,
        explicacion: "La velocidad mínima autolimpiante asegura que el agua residual mantenga los sólidos en suspensión, evitando su asentamiento, obstrucción de colectores y la consiguiente generación de gases sépticos."
    },
    {
        id: 53,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué representa la Demanda Bioquímica de Oxígeno a los 5 días ($DBO_5$) en la caracterización de aguas residuales?",
        opciones: [
            "A) La cantidad total de oxígeno consumido por microorganismos para oxidar la materia orgánica biodegradable durante 5 días a 20 °C",
            "B) La concentración máxima de oxígeno disuelto que soporta la vida acuática en un cuerpo receptor",
            "C) La cantidad de productos químicos inorgánicos añadidos en la planta potabilizadora",
            "D) El contenido total de sólidos suspendidos volátiles en el lodo activado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La $DBO_5$ es el parámetro estándar que mide la cantidad de oxígeno requerido por los microorganismos aerobios para descomponer la materia orgánica carbonácea presente en el agua en un periodo de 5 días a 20 °C."
    },
    {
        id: 54,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En las plantas de tratamiento de agua potable, ¿cuál es la función de los procesos de coagulación y floculación?",
        opciones: [
            "A) Eliminar los patógenos bacterianos y virus mediante radiación ultravioleta",
            "B) Desestabilizar las cargas eléctricas de los coloides suspendidos (coagulación) y aglomerarlos en flóculos mayores mediante agitación lenta (floculación) para su fácil sedimentación",
            "C) Reducir la dureza total eliminando los iones de calcio y magnesio por intercambio iónico",
            "D) Ajustar el pH final del agua para evitar la corrosión en las tuberías de distribución"
        ],
        respuestaCorrecta: 1,
        explicacion: "La coagulación desestabiliza las partículas coloidales añadiendo productos químicos (como sulfato de aluminio), mientras que la floculación agrupa dichas partículas mediante mezcla lenta para formar agregados (flóculos) que sedimenten con facilidad."
    },
    {
        id: 55,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué proceso unitario biológico se emplea comúnmente en el tratamiento secundario de aguas residuales mediante el sistema de lodos activados?",
        opciones: [
            "A) Filtración rápida en medio granular de arena y antracita",
            "B) Oxidación biológica aerobia en un reactor con biomasa suspendida y recirculación de lodos",
            "C) Precipitación química con cal apagada para remoción de fósforo total",
            "D) Desinfección mediante ozonización a presión elevada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los lodos activados son un proceso biológico aerobio donde los microorganismos suspendidos en un tanque de aireación metabolizan y degradan la materia orgánica disuelta y suspendida, separándose posteriormente en un clarificador secundario."
    },
    {
        id: 56,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En el diseño de redes de distribución de agua potable, ¿cuál es la presión mínima de servicio recomendada en las tomas domiciliarias para garantizar un funcionamiento adecuado?",
        opciones: [
            "A) 2 a 5 kPa (0.02 kg/cm²)",
            "B) 100 a 150 kPa (10 a 15 mca / metros de columna de agua)",
            "C) 1000 kPa (100 mca)",
            "D) 5 a 10 kPa (0.5 mca)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Por norma general de diseño, la presión mínima en las redes de distribución de agua potable en condiciones de hora de máxima demanda debe rondar entre los 10 y 15 metros de columna de agua (mca) para asegurar el suministro en edificaciones de dos plantas."
    },
    {
        id: 57,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué indica la presencia elevada de coliformes fecales en una muestra de agua destinada al consumo humano?",
        opciones: [
            "A) Alta concentración de minerales pesados como plomo y cadmio",
            "B) Contaminación bacteriana de origen fecal y posible presencia de patógenos causantes de enfermedades hídricas",
            "C) Exceso de cloro libre residual tras la desinfección en planta",
            "D) Presencia masiva de algas fitoplanctónicas por eutrofización natural"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los coliformes fecales (como *Escherichia coli*) son indicadores biológicos de contaminación por excretas humanas o animales, advirtiendo riesgo sanitario por patógenos."
    },
    {
        id: 58,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Cuál es el objetivo principal de la cloración en la potabilización del agua?",
        opciones: [
            "A) Coagular las arcillas coloidales en suspensión",
            "B) Desinfectar el agua eliminando bacterias, virus y microorganismos patógenos remanentes",
            "C) Disminuir la turbiedad y el color aparente del agua superficial",
            "D) Aumentar la concentración de oxígeno disuelto para mejorar el sabor"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cloración es el proceso de desinfección final destinado a inactivar y destruir los microorganismos patógenos, dejando además un cloro residual que protege al agua durante su distribución en la red."
    },
    {
        id: 59,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En la gestión de residuos sólidos urbanos, ¿qué es un relleno sanitario?",
        opciones: [
            "A) Un tiradero a cielo abierto con quema controlada de basura para reducir volumen",
            "B) Una técnica de disposición final de residuos que utiliza principios de ingeniería para confinar la basura en el menor volumen posible, controlando lixiviados y biogás",
            "C) Una planta de incineración masiva de residuos peligrosos biológico-infecciosos",
            "D) Un almacén temporal de materiales reciclables previo a su exportación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un relleno sanitario es una obra de ingeniería diseñada para la disposición final segura de los residuos sólidos, minimizando impactos ambientales mediante impermeabilización de base, sistemas de extracción de lixiviados y control de gases."
    },
    {
        id: 60,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué son los lixiviados generados en un sitio de disposición de residuos sólidos?",
        opciones: [
            "A) Gases combustibles compuestos principalmente por metano y bióxido de carbono",
            "B) Líquidos formados cuando el agua de lluvia se filtra a través de los residuos en descomposición, extrayendo contaminantes solubles y suspendidos",
            "C) Vapores tóxicos emitidos por la descomposición térmica de plásticos",
            "D) Aguas residuales industriales tratadas en plantas de lodos activados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los lixiviados son los líquidos contaminados que se producen al percolar el agua a través de la basura, arrastrando materia orgánica disuelta, metales pesados y compuestos tóxicos, requiriendo un manejo ambiental riguroso."
    },
    {
        id: 61,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Cuál es la característica principal de la hipótesis de investigación en un proyecto científico o técnico?",
        opciones: [
            "A) Es una afirmación definitiva que no requiere comprobación empírica",
            "B) Es una proposición tentativa acerca de las relaciones entre dos o más variables que se espera comprobar",
            "C) Es un resumen histórico de los antecedentes bibliográficos del tema",
            "D) Es el presupuesto financiero asignado para la ejecución de los experimentos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La hipótesis es una respuesta o explicación tentativa al problema de investigación, formulada como una proposición que vincula variables y que será puesta a prueba mediante la recolección y análisis de datos."
    },
    {
        id: 62,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "En un diseño experimental en ingeniería, ¿cómo se define una variable independiente?",
        opciones: [
            "A) La variable que se mide para observar los efectos causados por la manipulación de otros factores",
            "B) El factor o condición que el investigador manipula o controla deliberadamente para estudiar su efecto sobre la variable dependiente",
            "C) Aquella variable que presenta fluctuaciones aleatorias imposibles de registrar",
            "D) El error estándar derivado del tamaño de la muestra seleccionada"
        ],
        respuestaCorrecta: 1,
        explicacion: "La variable independiente es aquella que el investigador manipula (por ejemplo, la dosificación de aditivo en concreto) para medir su impacto en la variable dependiente (resistencia a compresión)."
    },
    {
        id: 63,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Qué criterio define una fuente bibliográfica primaria en la investigación científica?",
        opciones: [
            "A) Artículos de revisión que compilan decenas de estudios previos",
            "B) Libros de texto universitarios y manuales de diseño estandarizados",
            "C) Reportes de investigación original, artículos de revistas científicas arbitradas y tesis doctorales con datos de primera mano",
            "D) Enciclopedias generales y notas periodísticas de divulgación"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las fuentes primarias contienen información directa y original de primera mano, como artículos de investigación en revistas especializadas con arbitraje, patentes y actas de congresos."
    },
    {
        id: 64,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Cuál es el propósito de realizar una prueba de validación estadística de normalidad en un conjunto de datos experimentales?",
        opciones: [
            "A) Determinar si la población de donde provienen los datos sigue una distribución gaussiana (normal), lo cual justifica el uso de pruebas paramétricas",
            "B) Eliminar automáticamente todos los valores atípicos (outliers) de la muestra",
            "C) Calcular el costo total del proyecto en función del número de muestras analizadas",
            "D) Comprobar si las unidades de medida son compatibles con el Sistema Internacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas de normalidad (como Shapiro-Wilk o Kolmogorov-Smirnov) evalúan si los datos se ajustan a la distribución normal, requisito indispensable para aplicar estadísticas paramétricas como la prueba t de Student o ANOVA."
    },
    {
        id: 65,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "En la redacción de un reporte técnico de ingeniería, ¿qué función cumple el apartado de 'Metodología'?",
        opciones: [
            "A) Describir detalladamente los pasos, equipos, normas y procedimientos experimentales seguidos para que el estudio pueda ser replicado",
            "B) Listar de manera cronológica los nombres de todos los patrocinadores del proyecto",
            "C) Presentar las conclusiones finales y recomendaciones para futuros trabajos",
            "D) Exponer las opiniones personales del autor sobre el impacto social de la obra"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sección de metodología detalla con precisión cómo se llevó a cabo la investigación, especificando materiales, instrumentos, normas técnicas y fórmulas utilizadas, garantizando la reproducibilidad."
    },
    {
        id: 66,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "Según los códigos de ética profesional en ingeniería civil, ¿cuál es la consideración primordial ante la disyuntiva entre costo económico y seguridad estructural?",
        opciones: [
            "A) Priorizar el ahorro presupuestal para cumplir con las expectativas financieras del cliente",
            "B) Salvaguardar la seguridad, la salud y el bienestar público por encima de cualquier otra consideración comercial o particular",
            "C) Negociar un punto intermedio que reduzca ligeramente los factores de seguridad reglamentarios",
            "D) Delegar la responsabilidad legal exclusivamente en el contratista ejecutor"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio ético fundamental del ingeniero es la protección de la vida, la seguridad y el bienestar de la sociedad, prevaleciendo ante intereses económicos o presiones del cliente."
    },
    {
        id: 67,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "¿A qué se refiere el término 'conflicto de interés' en el ejercicio profesional de la ingeniería?",
        opciones: [
            "A) A la discrepancia técnica entre dos calculistas sobre el diseño de una cimentación",
            "B) A una situación en la que los intereses personales, financieros o profesionales del ingeniero pueden influir indebidamente en su juicio u objetividad profesional",
            "C) Al litigio legal entre un contratista y un subcontratista por retrasos en estimaciones",
            "D) Al desacuerdo salarial entre los colegios de ingenieros y las cámaras de la construcción"
        ],
        respuestaCorrecta: 1,
        explicacion: "Existe conflicto de interés cuando los intereses personales o económicos de un profesional compiten con sus obligaciones de imparcialidad y lealtad hacia su cliente o empleador."
    },
    {
        id: 68,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "Un ingeniero civil detecta que los planos estructurales firmados por un colega presentan errores graves que ponen en riesgo la estabilidad del edificio. De acuerdo con la ética profesional, ¿cuál debe ser su acción inicial?",
        opciones: [
            "A) Guardar silencio para no perjudicar la reputación gremial del colega",
            "B) Notificar de inmediato al responsable o a las autoridades competentes y advertir sobre el riesgo para evitar daños",
            "C) Publicar el error en redes sociales para desprestigiar al proyectista original",
            "D) Modificar los planos por cuenta propia sin autorización ni notificación previa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ética profesional exige reportar situaciones que amenacen la seguridad pública, notificando a las partes involucradas o autoridades para prevenir fallas catastróficas."
    },
    {
        id: 69,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "¿Qué implica el principio de responsabilidad ambiental para el ingeniero civil en el diseño de obras de infraestructura?",
        opciones: [
            "A) Minimizar los impactos negativos en los ecosistemas mediante prácticas de desarrollo sustentable y cumplimiento de la normatividad ecológica",
            "B) Realizar obras únicamente en zonas urbanas densamente pobladas para evitar deforestación",
            "C) Compensar cualquier daño ambiental mediante la donación de recursos a organizaciones privadas",
            "D) Omitir los estudios de impacto ambiental si encarecen el presupuesto inicial de construcción"
        ],
        respuestaCorrecta: 0,
        explicacion: "La responsabilidad ambiental obliga al ingeniero a integrar criterios de sustentabilidad, mitigación de impactos y preservación de recursos naturales en todas las fases del ciclo de vida de un proyecto."
    },
    {
        id: 70,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "¿Por qué es una falta grave a la ética profesional el plagio o la falsificación de resultados en pruebas de control de calidad de materiales (por ejemplo, resistencia del concreto)?",
        opciones: [
            "A) Porque viola los derechos de autor de las casas fabricantes de equipos de laboratorio",
            "B) Porque oculta información crítica sobre la seguridad real de la obra, poniendo en peligro la vida de los usuarios",
            "C) Porque retrasa la entrega de los reportes fiscales ante la secretaría de hacienda",
            "D) Porque incrementa los costos administrativos de supervisión externa"
        ],
        respuestaCorrecta: 1,
        explicacion: "Falsificar datos de control de calidad compromete la seguridad estructural de la obra al ocultar deficiencias en materiales, lo que constituye una negligencia grave e irresponsabilidad ética."
    },
    {
        id: 71,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En el diseño de cimentaciones superficiales (zapatas), ¿cuál es el estado límite de falla que se debe verificar principalmente por capacidad de carga?",
        opciones: [
            "A) El asentamiento diferencial máximo admisible entre columnas adyacentes",
            "B) La falla por corte general o local del suelo bajo la zapata ante la aplicación de la carga última",
            "C) La vibración armónica generada por maquinaria rotativa en sótanos",
            "D) La fisuración por retracción plástica en el perímetro de la zapata"
        ],
        respuestaCorrecta: 1,
        explicacion: "La verificación por capacidad de carga en zapatas busca prevenir la falla por corte del suelo de cimentación, asegurando un factor de seguridad adecuado frente al colapso geotécnico."
    },
    {
        id: 72,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Cuál es la función del acero de refuerzo longitudinal superior en una viga simplemente apoyada sometida a cargas gravitacionales uniformes?",
        opciones: [
            "A) Tomar los esfuerzos de compresión generados por el momento flector positivo",
            "B) Servir como armadura de montaje para sujetar y confinar los estribos transversales",
            "C) Resistir momentos flectores negativos debidos a asentamientos diferenciales extremos",
            "D) Aumentar la ductilidad global frente a cortantes sísmicos reversibles"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una viga simplemente apoyada con momento positivo en el centro, el refuerzo superior no trabaja por flexión principal, pero es indispensable como acero de montaje (armadura) para sostener y fijar los estribos."
    },
    {
        id: 73,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En perfiles estructurales de acero laminado, ¿qué indica la designación W 12 x 65?",
        opciones: [
            "A) Perfil tipo cajón con 12 pulgadas de peralte y 65 cm de ancho",
            "B) Perfil tipo I o W con un peralte nominal de 12 pulgadas y un peso de 65 libras por pie lineal",
            "C) Perfil tubular con 12 mm de espesor y 65 kg de capacidad portante",
            "D) Ángulo estructural de 12 pies de longitud y 65 milímetros de espesor"
        ],
        respuestaCorrecta: 1,
        explicacion: "La nomenclatura estándar AISC para perfiles W indica el tipo de perfil (Wide flange), seguido de su peralte nominal en pulgadas (12) y su peso por unidad de longitud en libras por pie (65)."
    },
    {
        id: 74,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Qué fenómeno puede provocar la falla prematura de una estructura de concreto reforzado ubicada en ambientes marinos altamente salinos?",
        opciones: [
            "A) La oxidación y corrosión de las barras de acero de refuerzo inducida por la penetración de iones cloruro",
            "B) La licuación estática del agregado grueso por altas temperaturas ambientales",
            "C) La disolución rápida del cemento por carbonatación profunda sin presencia de humedad",
            "D) El incremento excesivo del módulo de elasticidad del acero por fatiga térmica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los iones cloruro presentes en ambientes marinos penetran el concreto y despasivan el acero de refuerzo, provocando su oxidación expansiva, agrietamiento y desprendimiento del recubrimiento (corrosión)."
    },
    {
        id: 75,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En el análisis estructural, ¿cuál es la diferencia fundamental entre estructuras isostáticas e hiperestáticas?",
        opciones: [
            "A) Las isostáticas se resuelven únicamente con las ecuaciones de la estática, mientras que las hiperestáticas requieren además ecuaciones de compatibilidad de deformaciones",
            "B) Las hiperestáticas no pueden sufrir asentamientos diferenciales en sus apoyos",
            "C) Las isostáticas presentan mayor redundancia y seguridad ante colapsos parciales",
            "D) Las estructuras hiperestáticas solo se aplican en edificaciones de madera y acero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las estructuras isostáticas tienen un número de reacciones igual a las ecuaciones de la estática disponibles, permitiendo su resolución directa. Las hiperestáticas son estáticamente indeterminadas y requieren considerar la deformabilidad del material."
    },
    {
        id: 76,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Cómo se define la humedad natural de un suelo en mecánica de suelos?",
        opciones: [
            "A) La relación entre el peso del agua y el peso de los sólidos secos, expresada en porcentaje",
            "B) El cociente entre el volumen de vacíos llenos de agua y el volumen total de la muestra",
            "C) La cantidad máxima de agua que puede retener un suelo saturado sumergido",
            "D) La diferencia entre el límite líquido y el contenido de humedad in situ"
        ],
        respuestaCorrecta: 0,
        explicacion: "El contenido de humedad ($w$) es la relación porcentual entre el peso del agua contenida en los poros y el peso de las partículas sólidas secas: $w = (W_w / W_s) \\times 100$."
    },
    {
        id: 77,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué tipo de muro de contención utiliza su propio peso volumétrico y masa para resistir el empuje lateral del terreno?",
        opciones: [
            "A) Muro pantalla atirantado",
            "B) Muro de gravedad de concreto ciclópeo o mampostería",
            "C) Muro en voladizo de concreto reforzado con pantalla delgada",
            "D) Muro de suelo mecánicamente estabilizado con geomallas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los muros de gravedad dependen fundamentalmente de su propio peso y masa para contrarrestar por momento de volteo y deslizamiento el empuje lateral del suelo."
    },
    {
        id: 78,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "En la clasificación de suelos por el Sistema Unificado de Clasificación de Suelos (SUCS), ¿qué representa el símbolo 'SW'?",
        opciones: [
            "A) Arcilla inorgánica de alta compresibilidad",
            "B) Arena bien graduada con pocos o nulos finos",
            "C) Limo orgánico de baja plasticidad",
            "D) Grava limosa mal graduada"
        ],
        respuestaCorrecta: 1,
        explicacion: "En el sistema SUCS, la primera letra denota el tipo principal de suelo (S = Sand / Arena) y la segunda letra indica su granulometría (W = Well-graded / Bien graduada)."
    },
    {
        id: 79,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Cuál es el propósito de construir una red de flujo (redes de filtración) en problemas de filtración a través de presas de tierra?",
        opciones: [
            "A) Determinar el caudal de filtración, las presiones de poros (subpresiones) y el gradiente hidráulico en cualquier punto del subsuelo",
            "B) Incrementar la velocidad del agua para evitar la proliferación de vegetación en el talud",
            "C) Calcular el asentamiento elástico instantáneo de la cortina de la presa",
            "D) Medir la resistencia al corte no drenado de la cimentación rocosa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las redes de flujo formadas por líneas de corriente y equipotenciales permiten evaluar las filtraciones, calcular caudales y conocer las presiones hidrostáticas internas que afectan la estabilidad de presas y excavaciones."
    },
    {
        id: 80,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué parámetro mide el ensayo triaxial en condiciones Consolidated Undrained (CU - Consolidado No Drenado)?",
        opciones: [
            "A) La resistencia al corte del suelo permitiendo la consolidación bajo presión confinante pero sin permitir drenaje durante la aplicación del esfuerzo desviador, midiendo presiones de poro",
            "B) La permeabilidad hidráulica bajo carga variable en suelos granulares",
            "C) La contracción volumétrica por secado al aire libre",
            "D) La densidad máxima de compactación Proctor Modificado"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el ensayo CU, la muestra se consolida bajo la presión confinante y luego se corta sin permitir drenaje, registrando la presión de poros, lo que permite calcular tanto los esfuerzos totales como efectivos."
    },
    {
        id: 81,
        area: "Hidráulica e Hidrología",
        pregunta: "En la ecuación general de la energía (Bernoulli extendida), ¿qué término representa las pérdidas de carga primarias o continuas en una tubería?",
        opciones: [
            "A) Las pérdidas originadas por accesorios, válvulas, codos y ampliaciones",
            "B) Las pérdidas por fricción a lo largo de tramos rectos de tubería de sección constante, calculadas mediante fórmulas como Darcy-Weisbach",
            "C) La energía suministrada por equipos de bombeo al sistema",
            "D) La energía extraída por turbinas hidroeléctricas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pérdidas primarias son las pérdidas de energía por fricción del fluido a lo largo de la longitud de conductos rectos, dependientes de la rugosidad, velocidad y diámetro."
    },
    {
        id: 82,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué instrumento de aforo se utiliza comúnmente para medir la velocidad puntual de la corriente en un río o canal abierto?",
        opciones: [
            "A) Tubo de Pitot diferencial",
            "B) Molinete hidráulico (correntómetro)",
            "C) Placa de orificio calibrada",
            "D) Vertedor rectangular de pared delgada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El molinete hidráulico o correntómetro es un dispositivo con una hélice giratoria cuya velocidad de rotación es proporcional a la velocidad del agua, permitiendo realizar aforos por el método de área-velocidad."
    },
    {
        id: 83,
        area: "Hidráulica e Hidrología",
        pregunta: "En hidrología estadística, ¿qué representa el 'periodo de retorno' ($Tr$) de un evento extremo como una avenida máxima o inundación?",
        opciones: [
            "A) El tiempo exacto en años que transcurre entre dos tormentas consecutivas",
            "B) El intervalo promedio en años en el cual un evento de magnitud igual o mayor puede ser igualado o superado",
            "C) La probabilidad porcentual de que una inundación ocurra en un año calendario",
            "D) La duración total de la tormenta desde su inicio hasta su extinción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El periodo de retorno ($Tr$) es el promedio estadístico de años en que un evento de cierta magnitud se iguala o es superado al menos una vez. Su probabilidad anual de ocurrencia es $P = 1/Tr$."
    },
    {
        id: 84,
        area: "Hidráulica e Hidrología",
        pregunta: "¿Qué es una curva de duración de caudales en el análisis hidrológico de una cuenca?",
        opciones: [
            "A) La gráfica que relaciona el caudal con el porcentaje de tiempo en que dicho caudal es igualado o excedido",
            "B) La variación de la temperatura ambiente a lo largo de las 24 horas del día",
            "C) La relación entre la intensidad de precipitación y la duración total de la tormenta",
            "D) El hidrograma de crecida generado por un aguacero de diseño"
        ],
        respuestaCorrecta: 0,
        explicacion: "La curva de duración de caudales muestra la distribución estadística de los flujos de un río, indicando qué porcentaje del tiempo un determinado caudal ha estado disponible, útil para diseño hidroeléctrico y abastecimiento."
    },
    {
        id: 85,
        area: "Hidráulica e Hidrología",
        pregunta: "En canales abiertos, ¿qué representa el radio hidráulico ($R_h$)?",
        opciones: [
            "A) El diámetro de la semicircunferencia equivalente al canal",
            "B) La relación entre el área mojada ($A$) y el perímetro mojado ($P_m$) del canal: $R_h = A / P_m$",
            "C) El cociente entre el ancho superficial de la sección y la profundidad máxima",
            "D) La pendiente longitudinal del fondo del canal multiplicada por la velocidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "El radio hidráulico es un parámetro geométrico fundamental en hidráulica de canales, definido como el cociente del área de la sección transversal ocupada por el agua ($A$) entre el perímetro mojado con las paredes ($P_m$)."
    },
    {
        id: 86,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Cuál es el propósito fundamental de elaborar una matriz de estimación de costos basada en análisis de precios unitarios (APU)?",
        opciones: [
            "A) Determinar de manera detallada el costo directo e indirecto por unidad de medida de cada concepto de trabajo, considerando materiales, mano de obra y maquinaria",
            "B) Establecer el sueldo mensual de los directivos de la empresa constructora",
            "C) Calcular los impuestos federales y locales aplicables a la importación de maquinaria",
            "D) Reducir la calidad de los materiales para incrementar el margen de utilidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "El APU desglosa científicamente el costo de cada concepto de obra considerando el rendimiento de la mano de obra, consumo de materiales, costos horarios de maquinaria, indirectos, financiamiento y utilidad."
    },
    {
        id: 87,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En la gestión de proyectos de construcción, ¿qué indica un Valor Ganado ($EV$) mayor que el Costo Real ($AC$)?",
        opciones: [
            "A) Que el proyecto ha costado más dinero del presupuestado a la fecha",
            "B) Que el trabajo realizado ha costado menos de lo previsto, existiendo una eficiencia favorable en costos",
            "C) Que el proyecto se encuentra retrasado respecto al programa de obra",
            "D) Que las reservas para contingencias se han agotado por completo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Si $EV > AC$, significa que el valor del trabajo completado supera el dinero real invertido en él, lo que se traduce en un desempeño económico positivo (ahorro o eficiencia)."
    },
    {
        id: 88,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué indica la prueba de compresión simple en cilindros de concreto ensayados a los 28 días de edad?",
        opciones: [
            "A) La resistencia característica del concreto a compresión ($f'_c$) utilizada como base en el diseño estructural",
            "B) El límite elástico del acero de refuerzo embebido en la viga",
            "C) El porcentaje exacto de aire incluido en la mezcla fresca",
            "D) La velocidad de fraguado inicial tras el vaciado en la obra"
        ],
        respuestaCorrecta: 0,
        explicacion: "La resistencia a la compresión a los 28 días ($f'_c$) obtenida en cilindros normalizados es el parámetro estándar de control de calidad para verificar que el concreto cumple con la resistencia especificada en el proyecto estructural."
    },
    {
        id: 89,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En los contratos de obra pública, ¿qué es un 'precio extraordinario'?",
        opciones: [
            "A) Un pago adicional por bonificación de tiempo entregado antes de lo previsto",
            "B) Un concepto de trabajo no previsto en el catálogo original del contrato y cuyos precios unitarios deben ser acordados entre contratante y contratista antes de su ejecución",
            "C) El incremento salarial anual otorgado al sindicato de obreros",
            "D) La penalización económica aplicada por retrasos injustificados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los precios extraordinarios corresponden a conceptos de obra imprevistos que surgen durante la ejecución y que no figuran en el catálogo original, requiriendo un análisis de precios específico aprobado formalmente."
    },
    {
        id: 90,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué función cumple el programa de obra calendarizado (diagrama de Gantt o ruta crítica)?",
        opciones: [
            "A) Planificar la secuencia temporal y el avance físico esperado de las actividades del proyecto, optimizando recursos y tiempos",
            "B) Sustituir los planos arquitectónicos y estructurales en la etapa de ejecución",
            "C) Calcular los impuestos sobre la renta de los trabajadores eventuales",
            "D) Establecer los requerimientos mínimos de iluminación en la obra"
        ],
        respuestaCorrecta: 0,
        explicacion: "El programa de obra calendarizado organiza cronológicamente las actividades, permitiendo controlar el avance físico, coordinar suministros de materiales y evaluar desviaciones temporales."
    },
    {
        id: 91,
        area: "Vías Terrestres y Transportes",
        pregunta: "En el diseño geométrico de carreteras, ¿qué es la pendiente gobernadora?",
        opciones: [
            "A) La pendiente máxima permitida en tramos excepcionales para vehículos ligeros",
            "B) La pendiente longitudinal máxima recomendada que permite a los camiones pesados circular a una velocidad razonable sin disminuir drásticamente su marcha",
            "C) La inclinación transversal del pavimento en curvas horizontales",
            "D) La velocidad máxima de diseño en zonas urbanas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La pendiente gobernadora es la máxima pendiente longitudinal admisible que se procura no rebasar en el proyecto para garantizar un flujo vehicular fluido y seguro, especialmente para transporte pesado."
    },
    {
        id: 92,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Cuál es el objetivo de realizar el ensayo Marshall en el diseño de mezclas asfálticas en caliente?",
        opciones: [
            "A) Determinar el contenido óptimo de cemento asfáltico evaluando la estabilidad y el flujo de probetas compactadas",
            "B) Medir la resistencia a la compresión simple de bases hidráulicas estabilizadas con cal",
            "C) Calcular la capacidad de carga estructural de la subrasante natural",
            "D) Evaluar la fricción superficial del pavimento mojado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método Marshall permite diseñar mezclas asfálticas determinando el porcentaje óptimo de ligante mediante pruebas de estabilidad (carga máxima) y flujo (deformación) bajo condiciones normalizadas."
    },
    {
        id: 93,
        area: "Vías Terrestres y Transportes",
        pregunta: "En ferrocarriles, ¿qué función cumple el balasto colocado debajo de los durmientes?",
        opciones: [
            "A) Distribuir las cargas de los trenes hacia la subrasante, proporcionar drenaje rápido y mantener la alineación de la vía",
            "B) Actuar como capa de rodadura directa para las ruedas metálicas de los vagones",
            "C) Servir como aislante eléctrico para los sistemas de señalización",
            "D) Soportar la tensión lateral generada por los hilos de alta tensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El balasto (piedra triturada seleccionada) distribuye las altas cargas de los convoyes ferroviarios al terreno natural, drena el agua de lluvia y permite nivelar y alinear la vía férrea."
    },
    {
        id: 94,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué es el 'bombeo' en la sección transversal de una carretera de tangente?",
        opciones: [
            "A) El sistema mecánico de bombeo de agua pluvial en pasos bajos",
            "B) La pendiente transversal dada a la corona de la carretera desde el eje central hacia los hombros para facilitar el escurrimiento del agua de lluvia",
            "C) La sobrecarga aplicada por camiones multiejes en estaciones de peaje",
            "D) El incremento de presión en los neumáticos al circular a alta velocidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "El bombeo es la pendiente transversal típica (típicamente de 1.5% a 2.5%) dada desde el centro de la corona hacia las cunetas para evitar el encharcamiento de agua sobre la superficie de rodamiento."
    },
    {
        id: 95,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué tipo de falla en pavimentos asfálticos se caracteriza por una red de fisuras interconectadas que asemejan la piel de un cocodrilo?",
        opciones: [
            "A) Agrietamiento por fatiga debido a la repetición de cargas vehiculares que superan la vida útil de diseño",
            "B) Fisuración térmica por contracción del asfalto en climas extremadamente fríos",
            "C) Desprendimiento superficial por la acción erosiva de los neumáticos",
            "D) Hundimiento lateral por deslizamiento de taludes en terraplenes"
        ],
        respuestaCorrecta: 0,
        explicacion: "El agrietamiento en piel de cocodrilo es típico de la fatiga del pavimento asfáltico provocada por la repetición acumulada de cargas de tráfico a lo largo del tiempo."
    },
    {
        id: 96,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué función cumple un sedimentador secundario en una planta de tratamiento de aguas residuales con lodos activados?",
        opciones: [
            "A) Remover los sólidos sedimentables gruesos antes del tanque de aireación",
            "B) Separar la biomasa (lodos) del agua tratada mediante sedimentación por gravedad, permitiendo clarificar el efluente y recircular los lodos",
            "C) Añadir cloro gas para la desinfección bacteriológica final",
            "D) Digerir anaerobiamente la materia orgánica en ausencia de oxígeno"
        ],
        respuestaCorrecta: 1,
        explicacion: "El sedimentador secundario clarifica el agua proveniente del reactor biológico mediante la sedimentación de los flóculos de lodo, los cuales son parcialmente recirculados al sistema y parcialmente purgados."
    },
    {
        id: 97,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En el diseño de sistemas de alcantarillado pluvial, ¿qué parámetro hidrológico es determinante para calcular el gasto de diseño?",
        opciones: [
            "A) La Demanda Bioquímica de Oxígeno ($DBO_5$)",
            "B) La intensidad de la lluvia de diseño asociada a un periodo de retorno específico y el tiempo de concentración",
            "C) El consumo per cápita diario de agua potable",
            "D) La concentración de sólidos disueltos totales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diseño de alcantarillado pluvial se basa en la hidrología de tormentas, utilizando curvas de Intensidad-Duración-Frecuencia (IDF) para estimar el caudal de escurrimiento pluvial pico."
    },
    {
        id: 98,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué proceso de tratamiento avanzado de agua se utiliza comúnmente para la desalinización de agua de mar o la potabilización de aguas altamente contaminadas?",
        opciones: [
            "A) Filtración en lecho de arena y grava",
            "B) Ósmosis inversa mediante membranas semipermeables a alta presión",
            "C) Coagulación con sulfato ferroso y sedimentación simple",
            "D) Oxidación biológica en filtros percoladores"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ósmosis inversa es un proceso de separación por membranas que retiene sales disueltas y contaminantes microscópicos al aplicar una presión superior a la presión osmótica natural."
    },
    {
        id: 99,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Cuál es el objetivo de medir el oxígeno disuelto (OD) en un cuerpo de agua natural receptor de descargas residuales?",
        opciones: [
            "A) Conocer la capacidad del cuerpo de agua para soportar la vida acuática y determinar el grado de contaminación orgánica",
            "B) Determinar la dureza total y la concentración de calcio",
            "C) Calcular la velocidad de filtración en los estratos de arena subyacentes",
            "D) Evaluar la turbiedad causada por partículas coloidales en suspensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El oxígeno disuelto es un indicador crítico de la salud ecológica acuática; valores bajos denotan contaminación orgánica severa debido a la actividad respiratoria de los microorganismos descomponedores."
    },
    {
        id: 100,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "En la disposición de lodos generados en plantas de tratamiento de agua residual, ¿qué proceso busca reducir el contenido de agua y el volumen de los lodos antes de su disposición final?",
        opciones: [
            "A) Desinfección con luz ultravioleta",
            "B) Espesamiento, deshidratación (filtros prensa o centrífugas) y digestión",
            "C) Aireación prolongada en tanques de igualación",
            "D) Cloración de ruptura"
        ],
        respuestaCorrecta: 1,
        explicacion: "El manejo de lodos requiere procesos de estabilización (digestión) y deshidratación (lechos de secado, filtros prensa o centrífugas) para reducir su volumen y humedad, facilitando su transporte y disposición final."
    },
    {
        id: 101,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Qué tipo de investigación recopila datos directamente de la realidad en su entorno natural sin manipular deliberadamente las variables?",
        opciones: [
            "A) Investigación experimental de laboratorio",
            "B) Investigación de campo no experimental u observacional",
            "C) Investigación documental histórica",
            "D) Simulación numérica por elementos finitos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La investigación de campo no experimental observa y recolecta datos del fenómeno en su contexto real tal como se presenta, sin que el investigador intervenga manipulando variables."
    },
    {
        id: 102,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "En el análisis de datos de una investigación geotécnica, ¿qué mide la desviación estándar?",
        opciones: [
            "A) El promedio aritmético de las mediciones realizadas",
            "B) La dispersión o variabilidad de los datos experimentales con respecto a su media aritmética",
            "C) La diferencia entre el valor máximo y el valor mínimo registrado",
            "D) La probabilidad de cometer un error sistemático en los instrumentos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La desviación estándar es una medida estadística que cuantifica la dispersión de un conjunto de valores numéricos en torno a su valor medio; a menor desviación, mayor concentración o precisión de los datos."
    },
    {
        id: 103,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Cuál es la función del marco teórico en un protocolo de investigación de ingeniería civil?",
        opciones: [
            "A) Rellenar el documento con definiciones genéricas sin relación al problema",
            "B) Sustentar teóricamente el estudio, analizando antecedentes, teorías, conceptos y estado del arte relacionados con el problema de investigación",
            "C) Establecer el presupuesto detallado de gastos de viáticos y honorarios",
            "D) Presentar los resultados sin procesar obtenidos en los ensayos de campo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El marco teórico recopila y analiza la literatura existente y teorías previas que fundamentan el estudio, proporcionando el contexto conceptual necesario para interpretar los resultados."
    },
    {
        id: 104,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "Si un ingeniero civil recibe una oferta de soborno por parte de un contratista para aprobar materiales de inferior calidad en una obra, ¿cómo debe proceder éticamente?",
        opciones: [
            "A) Aceptar la propuesta siempre y cuando la diferencia en costos sea mínima",
            "B) Rechazar categóricamente la oferta y denunciar el hecho ante las instancias legales y corporativas correspondientes",
            "C) Solicitar una cantidad mayor de dinero a cambio de su silencio",
            "D) Renunciar al proyecto sin reportar nada para evitar conflictos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La corrupción y el soborno violan los principios éticos y legales más fundamentales de la ingeniería; el profesional está obligado a rechazar cualquier intento de cohecho y reportarlo."
    },
    {
        id: 105,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "¿Qué implica la competencia profesional dentro del código de ética del ingeniero civil?",
        opciones: [
            "A) Tomar proyectos en áreas técnicas complejas para las cuales no se tiene preparación ni experiencia comprobada",
            "B) Ejercer y aceptar únicamente aquellos trabajos para los cuales se cuenta con la capacitación, formación y experiencia técnica adecuada",
            "C) Competir deslealmente rebajando honorarios por debajo de los costos operativos",
            "D) Ocultar los errores de diseño frente a los clientes para mantener prestigio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La competencia profesional exige que los ingenieros acepten encargos únicamente en campos donde posean la pericia y conocimientos técnicos necesarios, evitando asumir riesgos por ineptitud."
    },
    {
        id: 106,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En estructuras sismorresistentes, ¿qué principio busca el diseño por capacidad en columnas frente a vigas?",
        opciones: [
            "A) Que las columnas fallen antes que las vigas para liberar energía rápidamente",
            "B) Que el criterio de 'columna fuerte - viga débil' garantice que la disipación plástica ocurra en las vigas, evitando el colapso prematuro del piso",
            "C) Que las columnas no requieran acero de refuerzo transversal",
            "D) Que la estructura se comporte rígidamente sin deformación alguna"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diseño por capacidad ('columna fuerte - viga débil') asegura que las rótulas plásticas se formen en las vigas y no en las columnas, previniendo el colapso por mecanismos de entrepiso débil."
    },
    {
        id: 107,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "¿Qué evalúa el factor de reducción de resistencia ($\phi$) en los métodos de diseño por estados límite (LRFD)?",
        opciones: [
            "A) Las variaciones estadísticas en la magnitud de las cargas vivas y muertas",
            "B) Las incertidumbres en las propiedades de los materiales, inexactitudes geométricas y la naturaleza del tipo de falla",
            "C) El costo financiero de los materiales de construcción en el mercado",
            "D) La temperatura ambiental durante el fraguado del concreto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El factor $\phi$ (menor a 1.0) en LRFD minoriza la resistencia nominal para considerar tolerancias de fabricación, variabilidad en la resistencia de materiales y consecuencias de la falla."
    },
    {
        id: 108,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué es el fenómeno de turgencia o expansión en arcillas activas (como las montmorillonitas)?",
        opciones: [
            "A) La contracción severa del suelo al perder humedad por evaporación",
            "B) El incremento significativo de volumen que experimenta el suelo al absorber agua, debido a su estructura cristalina expansiva",
            "C) La licuación súbita del suelo al recibir impactos dinámicos",
            "D) La pérdida total de cohesión por lavado de finos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las arcillas con alta actividad (como las montmorillonitas) absorben agua en su estructura laminar, provocando expansiones volumétricas considerables que dañan cimentaciones y pavimentos."
    },
    {
        id: 109,
        area: "Hidráulica e Hidrología",
        pregunta: "En el diseño de aliviaderos o vertedores de excedencias en presas, ¿qué función cumple la rápida o canal de descarga?",
        opciones: [
            "A) Conducir el agua excedente desde el nivel del embalse hasta el cauce aguas abajo de manera segura, disipando la energía cinética generada",
            "B) Almacenar temporalmente los lodos sedimentados en el fondo de la presa",
            "C) Regular el caudal ecológico mínimo hacia el río durante la época de estiaje",
            "D) Extraer agua potable para las poblaciones cercanas mediante sifones"
        ],
        respuestaCorrecta: 0,
        explicacion: "La rápida es el conducto inclinado que transporta el caudal de crecida desde la cresta del vertedor hasta la base de la presa, donde un disipador de energía reduce la velocidad para evitar erosiones."
    },
    {
        id: 110,
        area: "Construcción y Administración de Proyectos",
        pregunta: "En la administración de riesgos de un proyecto de construcción, ¿en qué consiste la estrategia de 'mitigar' un riesgo?",
        opciones: [
            "A) Ignorar el riesgo esperando que no se manifieste durante la obra",
            "B) Tomar acciones anticipadas para reducir la probabilidad de ocurrencia o el impacto negativo del riesgo",
            "C) Transferir la responsabilidad financiera a una compañía aseguradora externa",
            "D) Aceptar las consecuencias financieras completas del evento desfavorable"
        ],
        respuestaCorrecta: 1,
        explicacion: "Mitigar un riesgo implica implementar medidas preventivas para disminuir ya sea la probabilidad de que el evento ocurra o la gravedad de su impacto en el proyecto."
    },
    {
        id: 111,
        area: "Vías Terrestres y Transportes",
        pregunta: "¿Qué finalidad tiene la construcción de un muro de escala o geotextil en la estabilización de terraplenes sobre suelos blandos?",
        opciones: [
            "A) Incrementar la capacidad de soporte y confinar el material de relleno mediante refuerzo a tensión",
            "B) Servir como superficie impermeable para evitar filtraciones de agua de lluvia",
            "C) Conducir la corriente pluvial directamente hacia las alcantarillas",
            "D) Evitar la corrosión del acero estructural en puentes cercanos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los geosintéticos (geotextiles y geomallas) en terraplenes proporcionan refuerzo a tracción, confinan el suelo granular y mejoran la estabilidad frente a asentamientos y deslizamientos."
    },
    {
        id: 112,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Qué es el proceso de digestión anaerobia en el tratamiento de lodos residuales?",
        opciones: [
            "A) La oxidación biológica de la materia orgánica utilizando altas tasas de oxígeno soplado",
            "B) La descomposición de la materia orgánica compleja por bacterias en ausencia de oxígeno, produciendo biogás (metano y dióxido de carbono) y lodo estabilizado",
            "C) La filtración rápida de lodos a través de membranas cerámicas",
            "D) La neutralización química del agua mediante hidróxido de sodio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La digestión anaerobia es un proceso biológico sin oxígeno donde microorganismos descomponen los lodos, generando un subproducto gaseoso rico en metano (biogás) y un biosólido estable."
    },
    {
        id: 113,
        area: "Sección Transversal: Metodología de la Investigación",
        pregunta: "¿Qué indica la validez interna en el diseño de un experimento de ingeniería?",
        opciones: [
            "A) Que los resultados pueden generalizarse a cualquier tipo de estructura en el mundo",
            "B) Que los cambios observados en la variable dependiente son atribuibles exclusivamente a la manipulación de la variable independiente y no a factores externos",
            "C) Que los instrumentos de medición fueron calibrados utilizando el sistema métrico decimal",
            "D) Que el costo de la investigación se mantuvo dentro del presupuesto autorizado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La validez interna garantiza que la relación causa-efecto observada en el experimento sea real y no esté sesgada por variables extrañas o no controladas."
    },
    {
        id: 114,
        area: "Sección Transversal: Ética Profesional",
        pregunta: "Cuando un ingeniero perito emite un dictamen técnico ante un tribunal judicial, ¿cuál es su deber ético fundamental?",
        opciones: [
            "A) Favorecer a la parte que le contrató y pagó sus honorarios profesionales",
            "B) Actuar con absoluta imparcialidad, veracidad y rigor técnico, basando sus conclusiones en evidencias objetivas",
            "C) Omitir los detalles complejos para no confundir al juez con tecnicismos",
            "D) Negarse a declarar para evitar responsabilidades legales personales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Como perito técnico, la obligación ética primordial es la imparcialidad y la verdad científica, rindiendo un dictamen fundamentado sin parcializarse hacia quien contrató sus servicios."
    },
    {
        id: 115,
        area: "Diseño y Construcción de Estructuras",
        pregunta: "En el análisis dinámico de estructuras, ¿a qué se denomina 'frecuencia natural' de vibración?",
        opciones: [
            "A) Al número de ciclos por segundo con los que vibra libremente una estructura tras ser perturbada",
            "B) Al intervalo de tiempo en que ocurren los sismos de mayor magnitud en una zona",
            "C) A la velocidad máxima del viento registrada en la azotea de un edificio",
            "D) Al ritmo de aplicación de la carga viva máxima reglamentaria"
        ],
        respuestaCorrecta: 0,
        explicacion: "La frecuencia natural es la propiedad dinámica con la que una estructura oscila libremente después de recibir un impulso; su coincidencia con frecuencias de sismos o viento puede generar resonancia."
    },
    {
        id: 116,
        area: "Geotecnia y Mecánica de Suelos",
        pregunta: "¿Qué es el fenómeno de tubificación (piping) en presas de tierra y cimentaciones?",
        opciones: [
            "A) La instalación de tuberías de drenaje profundo en el cuerpo de la presa",
            "B) La erosión interna progresiva causada por filtraciones de agua a alta presión que arrastran partículas finas del suelo, formando conductos o túneles",
            "C) El asentamiento elástico de pilotes de acero por fricción",
            "D) La compactación excesiva de suelos granulares mediante rodillo vibratorio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tubificación (piping) es una falla por filtración donde el flujo de agua erosiona internamente los finos del suelo, creando canalículos que pueden llevar al colapso de la estructura geotécnica."
    },
    {
        id: 117,
        area: "Hidráulica e Hidrología",
        pregunta: "En el análisis de redes de tuberías malladas (redes abiertas y cerradas de distribución de agua), ¿qué método numérico iterativo se emplea comúnmente para equilibrar los caudales?",
        opciones: [
            "A) Método de los elementos finitos no lineales",
            "B) Método de Hardy Cross basado en la conservación de la energía y continuidad",
            "C) Método de diferencias finitas explícitas en el tiempo",
            "D) Método de optimización por programación lineal simplex"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método de Hardy Cross es el procedimiento clásico iterativo para el cálculo y balance de caudales en redes cerradas de tuberías, satisfaciendo la conservación de masa en nudos y la conservación de energía en mallas."
    },
    {
        id: 118,
        area: "Construcción y Administración de Proyectos",
        pregunta: "¿Qué es la estimación por 'fondo de garantía' en los contratos de obra pública o privada?",
        opciones: [
            "A) Un seguro contra incendios pagado por el propietario del inmueble",
            "B) La retención monetaria porcentual que se hace sobre las estimaciones ejecutadas para responder por posibles defectos o vicios ocultos tras la entrega de la obra",
            "C) El anticipo inicial otorgado al contratista para la compra de maquinaria pesada",
            "D) La utilidad neta garantizada por contrato para los inversionistas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El fondo de garantía es una retención económica aplicada a las estimaciones de obra (típicamente 5%) que se libera tras la entrega-recepción, sirviendo como respaldo frente a posibles vicios ocultos."
    },
    {
        id: 119,
        area: "Vías Terrestres y Transportes",
        pregunta: "En el diseño de intersecciones viales, ¿cuál es la ventaja principal de una glorieta (rotonda) frente a un crucero semaforizado tradicional?",
        opciones: [
            "A) Elimina por completo la necesidad de pavimentar la zona de confluencia",
            "B) Reduce los puntos de conflicto vehicular, disminuye la velocidad de aproximación y mejora la fluidez en giros a la izquierda",
            "C) Permite circular a velocidades de autopista sin restricción de frenado",
            "D) Requiere menor espacio físico urbano para su construcción"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las glorietas reducen drásticamente los puntos de conflicto severos (como choques en ángulo recto), obligan a reducir la velocidad y fomentan una circulación continua y ordenada."
    },
    {
        id: 120,
        area: "Ingeniería Sanitaria y Ambiental",
        pregunta: "¿Cuál es el objetivo de incluir un tanque de tormentas en los sistemas de drenaje urbano?",
        opciones: [
            "A) Aumentar la presión del agua potable en horas de alta demanda nocturna",
            "B) Almacenar temporalmente los volúmenes excesivos de escurrimiento pluvial durante lluvias intensas para evitar inundaciones y desbordamientos en plantas de tratamiento",
            "C) Desalinizar el agua de lluvia para su consumo directo sin filtrar",
            "D) Generar energía eléctrica mediante pequeñas turbinas hidráulicas sumergidas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los tanques de tormenta son grandes depósitos reguladores que retienen temporalmente las puntas de escurrimiento pluvial en zonas urbanas, protegiendo las redes de drenaje y evitando colapsos en las plantas de tratamiento."
    }
];