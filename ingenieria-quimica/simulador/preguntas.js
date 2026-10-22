// Banco de Reactivos - EGEL Plus Ingeniería Química (120 Preguntas completas con distribución equilibrada A, B, C y D)
const bancoPreguntas = [
    {
        id: 1,
        area: "Termodinámica Química",
        pregunta: "En el equilibrio líquido-vapor de una solución binaria ideal a temperatura constante, ¿qué ley establece que la presión parcial de cada componente es proporcional a su fracción molar en la fase líquida?",
        opciones: [
            "A) Ley de Henry",
            "B) Ley de Dalton",
            "C) Ley de Raoult",
            "D) Ley de van der Waals"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Ley de Raoult establece que la presión parcial de vapor de un componente en una mezcla ideal es igual a su presión de vapor pura multiplicada por su fracción molar en fase líquida (Pi = Xi * Pi°)."
    },
    {
        id: 2,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué ley rige la transferencia de masa por difusión molecular en estado estacionario para una mezcla binaria?",
        opciones: [
            "A) Ley de Fick",
            "B) Ley de Fourier",
            "C) Ley de Newton de la viscosidad",
            "D) Ley de Stefan-Boltzmann"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Primera Ley de Fick establece que el flujo difusivo de materia es directamente proporcional al gradiente de concentración del componente."
    },
    {
        id: 3,
        area: "Ingeniería de Reactores",
        pregunta: "Para una reacción irreversible de primer orden que se lleva a cabo a volumen constante, ¿qué reactor continuo requiere menor volumen para alcanzar una conversión dada?",
        opciones: [
            "A) Reactor CSTR (Mezcla Completa)",
            "B) Reactor PFR (Flujo Pistón)",
            "C) Reactor de Lecho Fluidizado",
            "D) Batería de dos CSTR en paralelo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El reactor PFR opera con concentraciones de reactivo más altas a lo largo de su longitud en comparación con el CSTR, lo que genera una velocidad de reacción mayor y, por ende, un volumen menor."
    },
    {
        id: 4,
        area: "Operaciones Unitarias",
        pregunta: "En una columna de destilación binaria continua, ¿qué representa la intersección de las líneas de operación de enriquecimiento y agotamiento con la línea de alimentación (Línea Q)?",
        opciones: [
            "A) El reflujo total en el condensador",
            "B) El consumo máximo de vapor en el hervidor",
            "C) La eficiencia Murphree global de los platos",
            "D) El estado térmico de la alimentación y la transición entre las secciones de la torre"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Línea Q caracteriza el estado térmico de la alimentación y su intersección con las líneas de operación marca el cambio analítico entre la sección superior de rectificación y la inferior de agotamiento."
    },
    {
        id: 5,
        area: "Control e Instrumentación de Procesos",
        pregunta: "¿Qué modo de control básico elimina por completo el error en estado estacionario ante una perturbación o cambio en la referencia, aunque puede degradar la estabilidad transitoria?",
        opciones: [
            "A) Control Proporcional (P)",
            "B) Control Integral (I)",
            "C) Control Derivativo (D)",
            "D) Control On-Off"
        ],
        respuestaCorrecta: 1,
        explicacion: "La acción integral (I) acumula el error a lo largo del tiempo, garantizando que el error en estado estacionario sea nulo al alcanzar el equilibrio."
    },
    {
        id: 6,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué número adimensional representa la relación entre la difusividad de momento (viscosidad cinemática) y la difusividad de masa (difusividad molecular)?",
        opciones: [
            "A) Número de Prandtl (Pr)",
            "B) Número de Nusselt (Nu)",
            "C) Número de Schmidt (Sc)",
            "D) Número de Sherwood (Sh)"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número de Schmidt se define como Sc = ν / D_AB, relacionando el espesor de la capa límite de velocidad frente a la capa límite de concentración."
    },
    {
        id: 7,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un valor de energía libre de Gibbs de reacción (ΔG°) negativo a una temperatura y presión determinadas?",
        opciones: [
            "A) Que la reacción es espontánea en condiciones estándar hacia la formación de productos",
            "B) Que el sistema se encuentra estrictamente en equilibrio químico inalterable",
            "C) Que la reacción absorbe calor del entorno de manera endotérmica obligatoria",
            "D) Que la entropía del universo disminuye durante el proceso"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un cambio de energía libre de Gibbs estándar negativo (ΔG° < 0) indica que la reacción procede espontáneamente en el sentido directo bajo dichas condiciones estándar."
    },
    {
        id: 8,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a una reacción química elemental de orden global dos?",
        opciones: [
            "A) Su velocidad de reacción depende linealmente de la concentración de un solo reactivo elevado a la potencia uno",
            "B) Su velocidad de reacción es completamente independiente de la temperatura del sistema",
            "C) Su estequiometría coincide exactamente con los coeficientes cinéticos de la ley de velocidad, siendo la suma de órdenes igual a dos",
            "D) Su tiempo de vida media es inversamente proporcional a la concentración inicial al cuadrado"
        ],
        respuestaCorrecta: 2,
        explicacion: "En una reacción elemental, los coeficientes estequiométricos determinan los órdenes de reacción, de modo que si la suma de estos es dos, la cinética global es de segundo orden."
    },
    {
        id: 9,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de absorción de gases en columna de relleno, ¿qué fenómeno físico define la condición de 'inundación' (flooding)?",
        opciones: [
            "A) La velocidad del gas es tan alta que impide el drenaje descendente del líquido, acumulándose este en la parte superior del empaque",
            "B) El caudal de líquido disuelve por completo el material de empaque cerámico",
            "C) La presión de vapor del disolvente iguala la presión atmosférica del sistema",
            "D) La temperatura del gas supera el punto de fusión de las paredes de la torre"
        ],
        respuestaCorrecta: 0,
        explicacion: "La inundación ocurre cuando la fricción del gas ascendente bloquea el flujo descendente del líquido, colapsando la operación de la columna."
    },
    {
        id: 10,
        area: "Control e Instrumentación",
        pregunta: "¿Qué tipo de válvula de control industrial se recomienda preferentemente para el manejo de suspensiones densas o fluidos con sólidos en suspensión (slurry)?",
        opciones: [
            "A) Válvula de globo de puerto guiado",
            "B) Válvula de diafragma o de pellizco (Pinch)",
            "C) Válvula de aguja de alta presión",
            "D) Válvula de compuerta de sello metálico rígido"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las válvulas de diafragma y de pellizco aíslan el mecanismo interno del fluido mediante un elemento flexible, evitando obstrucciones o daños por partículas sólidas."
    },
    {
        id: 11,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la Ley de Fourier de la conducción térmica en régimen unidimensional?",
        opciones: [
            "A) Que el flujo de calor por conducción es directamente proporcional al área y al gradiente de temperatura negativo",
            "B) Que la transferencia de calor depende exclusivamente de la velocidad media del fluido circundante",
            "C) Que la emisividad superficial es igual a la absortividad en el equilibrio",
            "D) Que la viscosidad cinemática disminuye con la presión absoluta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Ley de Fourier establece que q = -k * A * (dT/dx), donde el flujo térmico es proporcional al gradiente espacial de temperaturas a través de la conductividad térmica k."
    },
    {
        id: 12,
        area: "Termodinámica Química",
        pregunta: "En un proceso de compresión adiabática reversible (isentrópica) de un gas ideal, ¿cómo se relacionan la presión y el volumen final con el inicial?",
        opciones: [
            "A) P1 * V1 = P2 * V2",
            "B) P1 / V1 = P2 / V2",
            "C) P1 * V1^γ = P2 * V2^γ (donde γ es la relación de capacidades caloríficas Cp/Cv)",
            "D) P1 + V1 = P2 + V2"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para un proceso isentrópico de gas ideal con capacidad calorífica constante, se cumple la relación politrópica donde el exponente es la relación de calores específicos γ."
    },
    {
        id: 13,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué efecto produce el aumento de la temperatura sobre la constante cinética de velocidad (k) en una reacción endotérmica elemental según la ecuación de Arrhenius?",
        opciones: [
            "A) Incrementa la constante de velocidad de forma exponencial",
            "B) Disminuye la constante de velocidad linealmente",
            "C) No ejerce ningún tipo de influencia sobre la constante cinética",
            "D) Invierte el sentido estequiométrico de la reacción reversible"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de Arrhenius (k = A * exp(-Ea/RT)) indica que un incremento de temperatura siempre aumenta el valor de k, acelerando la velocidad de reacción sin importar si es endotérmica o exotérmica."
    },
    {
        id: 14,
        area: "Operaciones Unitarias",
        pregunta: "¿Cuál es el objetivo principal de la operación unitaria de cristalización fraccionada en la industria química?",
        opciones: [
            "A) Evaporar la totalidad del agua contenida en una solución acuosa hasta sequedad",
            "B) Separar y purificar componentes sólidos a partir de una solución líquida mediante la formación controlada de cristales puros",
            "C) Fundir polímeros termoplásticos para su inyección en moldes metálicos",
            "D) Extraer aceites esenciales utilizando solventes orgánicos volátiles"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cristalización busca obtener productos sólidos cristalinos de alta pureza a partir de soluciones líquidas mediante enfriamiento, evaporación o adición de antisolventes."
    },
    {
        id: 15,
        area: "Control e Instrumentación",
        pregunta: "¿Qué componente de un lazo de control industrial se encarga de censar la variable de proceso y convertirla en una señal estándar transmisible?",
        opciones: [
            "A) El actuador neumático",
            "B) El controlador lógico programable (PLC)",
            "C) El elemento primario y transmisor",
            "D) La válvula de control final"
        ],
        respuestaCorrecta: 2,
        explicacion: "El sensor o elemento primario mide la variable física, y el transmisor la convierte en una señal estándar (como 4-20 mA o neumática de 3-15 psi) para el controlador."
    },
    {
        id: 16,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe el régimen de flujo laminar en tuberías circulares cerradas según el número de Reynolds?",
        opciones: [
            "A) Un flujo caótico con mezcla transversal violenta y remolinos",
            "B) Un flujo ordenado donde las partículas líquidas se desplazan en trayectorias paralelas sin mezclarse transversalmente, con Re < 2100",
            "C) Un flujo donde la velocidad es independiente del radio de la tubería",
            "D) Un flujo exclusivo de fluidos no newtonianos con alta viscoelasticidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "En régimen laminar (Re < 2100), las fuerzas viscosas predominan, ordenando el fluido en capas concéntricas sin mezcla macroscópica transversal."
    },
    {
        id: 17,
        area: "Termodinámica Química",
        pregunta: "¿Qué define el coeficiente de fugacidad (φ) de un gas real a una presión y temperatura dadas?",
        opciones: [
            "A) El cociente entre la fugacidad del gas real y su presión efectiva en dicho estado",
            "B) La relación entre la capacidad calorífica a presión constante y volumen constante",
            "C) La derivada parcial del volumen respecto a la temperatura a presión constante",
            "D) El porcentaje de disociación molecular en la mezcla gaseosa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El coeficiente de fugacidad se define como φ = f / P, midiendo la desviación del comportamiento de un gas real respecto al gas ideal (donde φ = 1)."
    },
    {
        id: 18,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué representa el tiempo espacial (τ) en el diseño de reactores químicos continuos?",
        opciones: [
            "A) El tiempo que tarda un reactivo en consumirse en un 100%",
            "B) El volumen del reactor dividido entre la tasa de flujo volumétrico de alimentación",
            "C) La vida media de la molécula catalítica en el lecho fijo",
            "D) El inverso de la constante cinética de velocidad de reacción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo espacial τ = V / v0 representa el tiempo requerido para procesar un volumen de alimentación equivalente al volumen del reactor a las condiciones de entrada."
    },
    {
        id: 19,
        area: "Operaciones Unitarias",
        pregunta: "En la operación de secado de sólidos húmedos, ¿cómo se define la 'humedad crítica' del material?",
        opciones: [
            "A) El contenido de humedad por debajo del cual la velocidad de secado deja de ser constante y comienza a disminuir",
            "B) La cantidad máxima de agua que el sólido puede absorber del aire atmosférico",
            "C) La humedad de equilibrio termodinámico con la humedad relativa del aire",
            "D) El punto de ebullición del agua retenida en los poros capilares"
        ],
        respuestaCorrecta: 0,
        explicacion: "La humedad crítica marca el fin del periodo de velocidad de secado constante y el inicio del periodo decreciente, donde la transferencia de humedad interna limita el proceso."
    },
    {
        id: 20,
        area: "Control e Instrumentación",
        pregunta: "¿Qué efecto produce la acción derivativa (D) cuando se incorpora a un controlador PID industrial?",
        opciones: [
            "A) Elimina permanentemente el error en estado estacionario ante escalones",
            "B) Anticipa el comportamiento futuro del error mediante la derivada del mismo, mejorando la estabilidad transitoria y reduciendo el sobreimpulso",
            "C) Satura la señal de salida del actuador ante perturbaciones rápidas",
            "D) Convierte el controlador en un sistema completamente no lineal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La acción derivativa reacciona ante la velocidad de cambio del error, amortiguando la respuesta del sistema y reduciendo el sobreimpulso transitorio."
    },
    {
        id: 21,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué establece la ecuación de continuidad en la mecánica de fluidos para cualquier volumen de control?",
        opciones: [
            "A) La conservación de la masa del sistema, igualando la acumulación neta con el flujo masivo entrante y saliente",
            "B) La conservación de la cantidad de movimiento lineal en régimen turbulento",
            "C) La igualdad entre las fuerzas de fricción viscosa y las fuerzas de presión estática",
            "D) El principio de conservación de la energía mecánica total"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de continuidad es la expresión matemática de la ley de conservación de la masa aplicada a un volumen de control en movimiento o fijo."
    },
    {
        id: 22,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un coeficiente de Joule-Thomson (μ_JT = (∂T/∂P)H) positivo en un gas sometido a un estrangulamiento isoentálpico?",
        opciones: [
            "A) Que el gas se calentará al disminuir su presión",
            "B) Que el gas se enfriará al disminuir su presión",
            "C) Que la temperatura y la presión permanecerán estrictamente constantes",
            "D) Que el gas se licuará instantáneamente sin importar la temperatura inicial"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un coeficiente de Joule-Thomson positivo (μ_JT > 0) significa que al estrangular el gas y caer la presión (ΔP < 0), la temperatura también desciende (efecto de enfriamiento)."
    },
    {
        id: 23,
        area: "Ingeniería de Reactores",
        pregunta: "¿Cuál es la función principal de un catalizador heterogéneo en una reacción química industrial?",
        opciones: [
            "A) Modificar la termodinámica de la reacción para desplazar la constante de equilibrio hacia los productos",
            "B) Disminuir la energía de activación del proceso reaccionante al ofrecer una ruta de menor resistencia, acelerando la velocidad sin consumirse en el proceso",
            "C) Elevar la temperatura adiabática de la mezcla mediante reacciones exotérmicas secundarias",
            "D) Convertir reactivos gaseosos en líquidos condensables a baja presión"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los catalizadores heterogéneos reducen la energía de activación necesaria para que ocurra la reacción química, acelerándola sin alterar el equilibrio termodinámico ni consumirse."
    },
    {
        id: 24,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de extracción líquido-líquido, ¿qué requisito indispensable debe cumplir el disolvente seleccionado respecto a la alimentación?",
        opciones: [
            "A) Debe ser completamente miscible con el líquido portador en todas las proporciones posibles",
            "B) Debe tener un punto de ebullición idéntico al del soluto a extraer",
            "C) Debe ser parcialmente miscible o inmiscible con el líquido portador y tener alta selectividad hacia el soluto",
            "D) Debe ser un sólido cristalino a temperatura ambiente"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para una extracción exitosa, el disolvente debe disolver selectivamente al soluto y ser inmiscible o escasamente miscible con el líquido portador para facilitar la posterior separación por destilación."
    },
    {
        id: 25,
        area: "Control e Instrumentación",
        pregunta: "¿Qué significa que un lazo de control industrial posea un comportamiento 'subamortiguado' ante una perturbación tipo escalón?",
        opciones: [
            "A) Que la variable oscila alrededor del punto de consigna (setpoint) con amplitudes decrecientes antes de estabilizarse",
            "B) Que la variable regresa al punto de consigna de forma extremadamente lenta sin oscilar",
            "C) Que la variable diverge infinitamente provocando la inestabilidad del proceso",
            "D) Que el controlador no ejerce ninguna acción correctiva sobre la válvula"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un sistema subamortiguado presenta oscilaciones transitorias decrecientes antes de alcanzar el estado estacionario, típico de lazos con amortiguamiento moderado."
    },
    {
        id: 26,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la Ley de Newton de la viscosidad para fluidos newtonianos en régimen laminar unidireccional?",
        opciones: [
            "A) El esfuerzo cortante es directamente proporcional al gradiente de velocidad transversal mediante la viscosidad dinámica",
            "B) La presión estática es inversamente proporcional al cuadrado de la velocidad del fluido",
            "C) El caudal másico depende exclusivamente de la rugosidad absoluta de la tubería",
            "D) La densidad del fluido varía linealmente con la temperatura absoluta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Ley de Newton establece que τ = μ * (du/dy), donde el esfuerzo cortante es linealmente proporcional al gradiente de velocidad a través de la viscosidad dinámica μ."
    },
    {
        id: 27,
        area: "Termodinámica Química",
        pregunta: "¿Qué representa la fugacidad (f) de una sustancia gaseosa real?",
        opciones: [
            "A) Una presión efectiva corregida que reemplaza a la presión real en las ecuaciones termodinámicas de equilibrio de fases para gases reales",
            "B) La velocidad máxima de difusión molecular en medios porosos",
            "C) La capacidad calorífica molar a volumen constante",
            "D) La entalpía de vaporización a la temperatura crítica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Gilbert Lewis introdujo la fugacidad como una 'presión corregida' que permite utilizar las mismas relaciones matemáticas de los gases ideales al estudiar sistemas reales."
    },
    {
        id: 28,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al fenómeno de 'desactivación de catalizadores' por coquización en procesos petroquímicos?",
        opciones: [
            "A) La acumulación de depósitos carbonosos (coque) sobre los sitios activos de la superficie catalítica, bloqueando el acceso de los reactivos",
            "B) La fusión física de los pellets catalíticos debido a una caída brusca de temperatura",
            "C) La evaporación completa del soporte poroso inorgánico del catalizador",
            "D) La oxidación espontánea del metal activo en presencia de nitrógeno puro"
        ],
        respuestaCorrecta: 0,
        explicacion: "La coquización deposita carbono sólido sobre los sitios activos del catalizador, envenenando y desactivando progresivamente su capacidad promotora."
    },
    {
        id: 29,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de evaporación de efecto múltiple, ¿cuál es el propósito fundamental de operar los evaporadores en vacío sucesivo?",
        opciones: [
            "A) Incrementar la temperatura de ebullición del agua en cada efecto para ahorrar vapor vivo",
            "B) Reducir el punto de ebullición de la disolución en los efectos subsecuentes, permitiendo reutilizar el vapor secundario generado como medio de calentamiento",
            "C) Evitar la formación de espumas estables en el cuerpo del separador",
            "D) Aumentar la viscosidad del líquido concentrado hasta la cristalización instantánea"
        ],
        respuestaCorrecta: 1,
        explicacion: "Al operar a presiones de vacío cada vez mayores en los efectos siguientes, el punto de ebullición disminuye, permitiendo que el vapor generado en un efecto sirva para calentar el siguiente."
    },
    {
        id: 30,
        area: "Control e Instrumentación",
        pregunta: "¿Qué es el 'punto de consigna' (Setpoint) en la arquitectura de un sistema de control de procesos químicos?",
        opciones: [
            "A) El valor objetivo o deseado que se le asigna a la variable controlada para que el proceso opere bajo las especificaciones requeridas",
            "B) La lectura instantánea proporcionada por el elemento primario de medición",
            "C) La señal de salida eléctrica enviada directamente al motor de la bomba",
            "D) El límite máximo de presión antes de activar la válvula de alivio de seguridad"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Setpoint representa el valor de referencia deseado para la variable de proceso; el controlador compara la medición real contra este valor para calcular la acción correctora."
    },
    {
        id: 31,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la ecuación de Bernoulli para un flujo ideal, incompresible y estacionario a lo largo de una línea de corriente?",
        opciones: [
            "A) La relación lineal entre la viscosidad cinemática y el número de Reynolds",
            "B) La disipación térmica por fricción en las paredes internas de la tubería",
            "C) La variación de la densidad gaseosa con la altitud barométrica",
            "D) La conservación de la energía mecánica, estableciendo que la suma de presión, energía cinética y potencial por unidad de volumen es constante"
        ],
        respuestaCorrecta: 3,
        explicacion: "La ecuación de Bernoulli representa el principio de conservación de la energía mecánica para flujos ideales sin fricción a lo largo de una línea de corriente."
    },
    {
        id: 32,
        area: "Termodinámica Química",
        pregunta: "¿Qué establece el principio de Le Chatelier en los sistemas químicos en equilibrio?",
        opciones: [
            "A) Que la constante de equilibrio termodinámico depende exclusivamente de la presencia de catalizadores",
            "B) Que si se perturba un sistema en equilibrio mediante un cambio de presión, temperatura o concentración, el sistema evolucionará en el sentido que contrarreste parcialmente dicha perturbación",
            "C) Que la entropía de cualquier sistema cerrado disminuye de forma espontánea",
            "D) Que los gases reales se comportan siempre como gases ideales a presiones extremas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio de Le Chatelier predice la dirección en la que se desplazará un equilibrio químico para minimizar el efecto de una perturbación externa aplicada."
    },
    {
        id: 33,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al funcionamiento de un reactor de lecho fijo empacado (Packed Bed Reactor)?",
        opciones: [
            "A) Las partículas catalíticas se mueven libremente suspendidas por el flujo ascendente del gas",
            "B) El reactor opera exclusivamente bajo agitación mecánica interna con paletas de alta velocidad",
            "C) El catalizador sólido se encuentra inmóvil dentro del reactor mientras los reactivos fluidos fluyen a través de los intersticios del lecho poroso",
            "D) Los reactivos se alimentan en estado sólido y los productos se descargan en forma de plasma"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un reactor de lecho fijo, el catalizador sólido está estático en forma de pellets o partículas, y los fluidos reactantes permean a través del empaque."
    },
    {
        id: 34,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de filtración a presión constante, ¿cómo evoluciona el caudal volumétrico de filtrado a medida que transcurre el tiempo de operación?",
        opciones: [
            "A) Permanece estrictamente constante durante todo el ciclo de filtración",
            "B) Se incrementa de forma exponencial debido al empaquetamiento de la torta",
            "C) Oscila armónicamente por efecto de las pulsaciones de la bomba de alimentación",
            "D) Disminuye progresivamente conforme aumenta el espesor y la resistencia hidráulica de la torta de filtración acumulada"
        ],
        respuestaCorrecta: 3,
        explicacion: "A presión constante, la acumulación de sólidos forma una torta filtrante cuya resistencia aumenta con el tiempo, lo que provoca una disminución progresiva en el caudal de filtrado."
    },
    {
        id: 35,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es la función principal de una válvula de seguridad o alivio (PRV) en recipientes sometidos a presión en plantas químicas?",
        opciones: [
            "A) Regular automáticamente el caudal de alimentación en lazo cerrado",
            "B) Proteger mecánicamente al equipo contra sobrepresiones peligrosas al abrirse y descargar fluido cuando la presión interna supera un límite de calibración",
            "C) Medir la temperatura de los gases de escape en antorchas",
            "D) Invertir el sentido del flujo ante fallas en las bombas principales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La válvula de alivio es un dispositivo mecánico de protección final diseñado para abrirse automáticamente y liberar presión si se excede el límite seguro de operación del recipiente."
    },
    {
        id: 36,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué representa el número de Nusselt (Nu) en la transferencia de calor por convección?",
        opciones: [
            "A) El cociente entre las fuerzas de inercia y las fuerzas viscosas",
            "B) La relación entre la difusividad térmica y la viscosidad cinemática",
            "C) La relación entre la transferencia de calor convectiva y la conducción pura a través de la capa límite del fluido",
            "D) La proporción de calor radiado frente al calor conducido en sólidos"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número de Nusselt adimensionaliza el coeficiente convectivo h, expresándolo como la relación entre el calor transferido por convección y el que se transferiría por conducción pura en el fluido."
    },
    {
        id: 37,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el calor latente de vaporización de una sustancia pura a una temperatura dada?",
        opciones: [
            "A) La energía cinética interna acumulada en el punto triple",
            "B) La variación de entalpía durante la combustión completa del compuesto",
            "C) El trabajo mecánico máximo desarrollado en una expansión isotérmica",
            "D) La cantidad de calor requerida para transformar una unidad de masa de líquido saturado en vapor saturado a temperatura y presión constantes"
        ],
        respuestaCorrecta: 3,
        explicacion: "El calor latente de vaporización es la variación entálpica asociada al cambio de fase de líquido saturado a vapor saturado a presión y temperatura constantes."
    },
    {
        id: 38,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué describe la ecuación de diseño para un reactor CSTR (Mezcla Completa) en estado estacionario?",
        opciones: [
            "A) V = FA0 * ∫ (dX / -rA) desde 0 hasta X",
            "B) V = (FA0 * X) / (-rA), donde el reactor opera a una concentración de salida uniforme",
            "C) -rA = k * CA^2 * T",
            "D) dX / dt = k * (1 - X)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación de diseño del CSTR se deriva del balance de materia global, evaluando que la velocidad de reacción dentro del tanque es la correspondiente a las condiciones de salida debido a la mezcla perfecta."
    },
    {
        id: 39,
        area: "Operaciones Unitarias",
        pregunta: "En una torre de enfriamiento de agua por contacto directo con aire, ¿qué fenómeno físico permite que el agua descienda su temperatura?",
        opciones: [
            "A) La refrigeración mecánica por compresión de vapor integrada en el relleno",
            "B) La disolución de sales endotérmicas en el fondo de la torre",
            "C) La transferencia simultánea de calor sensible y la evaporación parcial de una pequeña fracción del agua hacia el aire, lo que sustrae el calor latente necesario",
            "D) El intercambio térmico indirecto a través de placas metálicas tubulares"
        ],
        respuestaCorrecta: 2,
        explicacion: "El enfriamiento en la torre se logra principalmente por la evaporación de una fracción del agua hacia la corriente de aire, consumiendo el calor latente de vaporización y enfriando el resto del líquido."
    },
    {
        id: 40,
        area: "Control e Instrumentación",
        pregunta: "¿Qué representa el tiempo muerto (dead time o retardo) en la dinámica de un proceso industrial?",
        opciones: [
            "A) El tiempo necesario para que la variable alcance el 100% del cambio en régimen estacionario",
            "B) La frecuencia de muestreo del controlador digital en milisegundos",
            "C) El periodo de inactividad durante el mantenimiento preventivo de válvulas",
            "D) El tiempo transcurrido desde que se aplica un cambio en la entrada hasta que el proceso comienza a mostrar una respuesta observable en la salida"
        ],
        respuestaCorrecta: 3,
        explicacion: "El tiempo muerto es un retraso puro en el transporte de materia o señal donde la salida no responde inmediatamente a las acciones aplicadas en la entrada."
    },
    {
        id: 41,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la ecuación de cantidad de movimiento de Navier-Stokes para fluidos incompresibles newtonianos?",
        opciones: [
            "A) La conservación de la masa volumétrica en regímenes transitorios",
            "B) La aplicación de la segunda ley de Newton a un elemento fluido, relacionando las fuerzas de presión, gravedad y viscosas con la aceleración",
            "C) La relación directa entre la temperatura y la conductividad térmica radial",
            "D) El equilibrio estático entre la tensión superficial y la presión hidrostática"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las ecuaciones de Navier-Stokes son las ecuaciones diferenciales fundamentales que gobiernan el movimiento de los fluidos viscosos newtonianos."
    },
    {
        id: 42,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un valor de actividad termodinámica (a) igual a 1 para un soluto en una disolución líquida diluida en condiciones estándar?",
        opciones: [
            "A) Que la concentración molar del soluto es strictly cero",
            "B) Que la presión de vapor del disolvente puro ha desaparecido",
            "C) Que el soluto se comporta de manera ideal en su estado estándar de referencia",
            "D) Que la temperatura de la disolución es igual al cero absoluto"
        ],
        respuestaCorrecta: 2,
        explicacion: "El estado estándar se define de tal manera que la actividad del componente en dicho estado de referencia toma un valor unitario (a = 1)."
    },
    {
        id: 43,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué describe la selectividad en reacciones químicas múltiples paralelas o en serie?",
        opciones: [
            "A) La capacidad del catalizador para soportar temperaturas superiores a 1000 °C",
            "B) El tiempo total de residencia requerido para agotar el reactivo limitante",
            "C) La relación entre el volumen del reactor y el caudal volumétrico de alimentación",
            "D) La medida de la formación del producto deseado frente a la formación de productos secundarios no deseados"
        ],
        respuestaCorrecta: 3,
        explicacion: "La selectividad cuantifica qué tan eficientemente se convierte el reactivo en el producto deseado en lugar de generar subproductos indeseados."
    },
    {
        id: 44,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de destilación, ¿qué es la 'relación de reflujo' (Reflux Ratio, R)?",
        opciones: [
            "A) El cociente entre el caudal de líquido condensado que se devuelve a la columna y el caudal de producto destilado extraído",
            "B) La cantidad de vapor generada en el hervidor dividida entre la alimentación total",
            "C) La eficiencia térmica global del condensador superior",
            "D) El número de platos teóricos requeridos en la sección de agotamiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación de reflujo R = L / D define qué fracción del condensador superior regresa como reflujo líquido para mantener la pureza del destilado."
    },
    {
        id: 45,
        area: "Control e Instrumentación",
        pregunta: "¿Qué característica define a una válvula de control con característica de flujo 'isoporcentual'?",
        opciones: [
            "A) El caudal es estrictamente constante independientemente de la posición del obturador",
            "B) Un incremento igual en la carrera de la válvula produce un cambio porcentual igual en el caudal respecto al caudal previo",
            "C) El caudal varía de forma lineal directa con la apertura de la carrera del vástago",
            "D) La caída de presión a través de la válvula es nula en todo el rango operativo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una válvula isoporcentual, incrementos iguales de carrera generan incrementos porcentuales iguales en el caudal, ideal para procesos con caídas de presión variables."
    },
    {
        id: 46,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué representa el espesor de la capa límite térmica en la transferencia de calor por convección sobre una placa plana?",
        opciones: [
            "A) El diámetro hidráulico total del canal de flujo",
            "B) La profundidad máxima de penetración de la radiación solar",
            "C) La distancia desde la superficie sólida donde la temperatura del fluido alcanza el 99% de la temperatura de la corriente libre",
            "D) La distancia donde la velocidad del fluido se vuelve cero"
        ],
        respuestaCorrecta: 2,
        explicacion: "La capa límite térmica es la región del fluido adyacente a la pared donde existe un gradiente significativo de temperatura, extendiéndose hasta donde la temperatura difiere un 1% de la corriente libre."
    },
    {
        id: 47,
        area: "Termodinámica Química",
        pregunta: "¿Qué expresa la ecuación de estado de Peng-Robinson o Redlich-Kwong en la termodinámica de fluidos reales?",
        opciones: [
            "A) Calculan la conductividad térmica de metales puros en estado sólido",
            "B) Determinan la viscosidad dinámica de polímeros fundidos",
            "C) Establecen la velocidad de propagación del sonido en líquidos incompresibles",
            "D) Relacionan la presión, el volumen molar y la temperatura de gases reales incorporando correcciones por fuerzas intermoleculares y volumen propio de las moléculas"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las ecuaciones de estado cúbicas (como Peng-Robinson y Redlich-Kwong) permiten predecir con alta precisión el comportamiento volumétrico y de equilibrio de fases de gases y líquidos reales."
    },
    {
        id: 48,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué es el fenómeno de 'Runaway térmico' (desbocado térmico) en reactores químicos industriales exotérmicos?",
        opciones: [
            "A) Una pérdida incontrolada del control de temperatura donde la velocidad de reacción genera calor a un ritmo superior al que los sistemas de enfriamiento pueden evacuar, acelerando exponencialmente la reacción",
            "B) El enfriamiento repentino del reactor por debajo del punto de congelación de los reactivos",
            "C) La separación física de las fases líquida y gaseosa por falta de agitación",
            "D) La migración del catalizador hacia las líneas de purga de productos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El runaway térmico ocurre cuando la generación de calor de una reacción exotérmica supera la capacidad de retiro de calor, provocando un aumento descontrolado de temperatura y presión."
    },
    {
        id: 49,
        area: "Operaciones Unitarias",
        pregunta: "En el diseño de intercambiadores de calor, ¿qué representa la diferencia de temperatura media logarítmica (DTML o LMTD)?",
        opciones: [
            "A) La temperatura máxima alcanzada en el punto de mezcla de los fluidos",
            "B) La fuerza impulsora de temperatura promedio efectiva para la transferencia térmica entre dos corrientes con flujos en contraflujo o paralelo",
            "C) La media aritmética simple entre la entrada y la salida de los fluidos",
            "D) El gradiente térmico radial dentro de las paredes tubulares del intercambiador"
        ],
        respuestaCorrecta: 1,
        explicacion: "La DTML es la media logarítmica de las diferencias de temperatura en los extremos del intercambiador, sirviendo como la fuerza impulsora correcta en la ecuación de diseño térmico (Q = U * A * DTML)."
    },
    {
        id: 50,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es la función del algoritmo de sintonización de controladores PID conocido como el método de Ziegler-Nichols de lazo cerrado (método de ganancia última)?",
        opciones: [
            "A) Calcular los impuestos corporativos asociados a la instrumentación de planta",
            "B) Calibrar la presión de apertura de las válvulas de seguridad neumáticas",
            "C) Determinar los parámetros óptimos del controlador basándose en la ganancia última (Kc crítica) y el periodo de oscilación sostenida en lazo cerrado",
            "D) Medir el caudal másico mediante placas de orificio calibradas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método de Ziegler-Nichols en lazo cerrado sintoniza el controlador PID identificando la ganancia crítica que produce oscilaciones sostenidas y el periodo correspondiente."
    },
    {
        id: 51,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe el factor de fricción de Fanning (f) en el flujo interno de conductos cerrados?",
        opciones: [
            "A) La viscosidad cinemática dividida entre la aceleración de la gravedad",
            "B) La relación porcentual entre el caudal másico y el caudal volumétrico",
            "C) La caída de presión absoluta a lo largo de accesorios menores",
            "D) Un parámetro adimensional que relaciona el esfuerzo cortante en la pared con la energía cinética por unidad de volumen del fluido"
        ],
        respuestaCorrecta: 3,
        explicacion: "El factor de fricción de Fanning se define como la razón entre el esfuerzo cortante en la pared y la presión dinámica del flujo (en ocasiones se usa el de Darcy, que es cuatro veces mayor)."
    },
    {
        id: 52,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica una energía libre de Gibbs de mezcla (ΔG_mezcla) negativa en la formación de una solución líquida a temperatura y presión constantes?",
        opciones: [
            "A) Que el proceso de disolución y mezcla de los componentes es termodinámicamente espontáneo",
            "B) Que los componentes son totalmente inmiscibles y forman dos fases separadas",
            "C) Que la disolución absorbe una gran cantidad de calor del entorno de manera endotérmica",
            "D) Que la entropía configuracional del sistema disminuye hasta cero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una energía libre de Gibbs de mezcla negativa (ΔG_mezcla < 0) es la condición termodinámica necesaria para que dos o más sustancias se mezclen espontáneamente."
    },
    {
        id: 53,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al fenómeno de catálisis homogénea en los procesos químicos?",
        opciones: [
            "A) El catalizador es un sólido poroso insoluble en la mezcla reaccionante",
            "B) El catalizador se encuentra en la misma fase física (generalmente líquida o gaseosa) que los reactivos participantes en el proceso",
            "C) La reacción ocurre exclusivamente en la superficie externa de los reactores de lecho fijo",
            "D) No requiere ningún suministro térmico para iniciar la conversión"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la catálisis homogénea, el catalizador y los reactivos comparten la misma fase (por ejemplo, ácidos líquidos disueltos en soluciones acuosas)."
    },
    {
        id: 54,
        area: "Operaciones Unitarias",
        pregunta: "En una columna de destilación, ¿qué fenómeno describe el 'arrastre de líquido' (entrainment) entre platos?",
        opciones: [
            "A) El líquido gotea prematuramente a través de las perforaciones del plato por falta de presión de vapor",
            "B) La acumulación de polímeros pesados en el fondo del hervidor",
            "C) El líquido es transportado hacia arriba hacia el plato superior por la alta velocidad del vapor ascendente, reduciendo la eficiencia de separación de la etapa",
            "D) La evaporación instantánea del alimento al ingresar a la zona de destilación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El entrainment ocurre cuando gotas de líquido son arrastradas por el vapor hacia el plato superior, lo que disminuye la eficiencia de separación de la columna."
    },
    {
        id: 55,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple un transductor de presión diferencial conectado a una placa de orificio en una tubería?",
        opciones: [
            "A) Controlar la temperatura del fluido mediante la inyección de vapor vivo",
            "B) Filtrar las impurezas suspendidas en el fluido antes de la medición analítica",
            "C) Regular la apertura de la válvula de alivio ante sobrepresiones súbitas",
            "D) Medir la caída de presión generada por la constricción del flujo para calcular indirectamente el caudal volumétrico o másico mediante la ecuación de Bernoulli"
        ],
        respuestaCorrecta: 3,
        explicacion: "La placa de orificio genera una caída de presión proporcional al cuadrado del caudal; el transductor mide esta presión diferencial para calcular el flujo circulante."
    },
    {
        id: 56,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué representa la difusividad térmica (α) de un material en la transferencia de calor transitoria?",
        opciones: [
            "A) La relación entre la conductividad térmica y la capacidad calorífica volumétrica (α = k / (ρ * Cp)), indicando la rapidez con que el calor se propaga a través del medio",
            "B) La viscosidad cinemática dividida entre la velocidad media del fluido",
            "C) El coeficiente convectivo superficial frente al gradiente de temperatura",
            "D) La emisividad de radiación infrarroja en superficies opacas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La difusividad térmica α agrupa la conductividad y la capacidad calorífica, determinando la velocidad de propagación del calor en régimen transitorio."
    },
    {
        id: 57,
        area: "Termodinámica Química",
        pregunta: "¿Qué establece el Teorema de Nernst (Tercera Ley de la Termodinámica) respecto a la entropía de las sustancias?",
        opciones: [
            "A) Que la energía interna de un gas ideal es directamente proporcional a la presión",
            "B) Que la entropía de cualquier sustancia pura cristalina perfecta se aproxima a cero cuando la temperatura absoluta tiende al cero absoluto (0 K)",
            "C) Que el calor latente de vaporización es nulo a la temperatura crítica",
            "D) Que la constante de equilibrio químico es independiente de la temperatura"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Tercera Ley de la Termodinámica fija un origen absoluto para la entropía, estableciendo que S = 0 para un cristal perfecto a la temperatura de cero absoluto."
    },
    {
        id: 58,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al funcionamiento de un reactor tipo Batch (por lotes) en la industria química?",
        opciones: [
            "A) Opera de manera continua durante años sin requerir paradas para limpieza",
            "B) Los reactivos fluyen a velocidad constante a través de un lecho catalítico fijo",
            "C) Los reactivos se cargan al inicio del proceso, se procesan durante un tiempo determinado bajo agitación y se descargan como producto, sin flujo continuo de entrada o salida",
            "D) La conversión química es cero durante todo el tiempo de residencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El reactor batch es un sistema cerrado transitorio donde todos los reactivos se cargan al inicio y los productos se retiran al finalizar la reacción."
    },
    {
        id: 59,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de lixiviación sólido-líquido, ¿cuál es el objetivo principal del proceso?",
        opciones: [
            "A) Secar la humedad superficial de un mineral mediante corrientes de aire caliente",
            "B) Fundir los componentes metálicos pesados contenidos en menas rocosas",
            "C) Cristalizar sales minerales a partir de soluciones acuosas sobresaturadas",
            "D) Disolver y extraer un componente soluble contenido en un sólido poroso mediante el uso de un disolvente líquido adecuado"
        ],
        respuestaCorrecta: 3,
        explicacion: "La lixiviación disuelve selectivamente los componentes solubles de una matriz sólida porosa utilizando un disolvente líquido."
    },
    {
        id: 60,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple el modo de control Proporcional-Derivativo (PD) en comparación con el control Proporcional puro?",
        opciones: [
            "A) Añade acción anticipativa basada en la velocidad de cambio del error, reduciendo el tiempo de establecimiento y amortiguando las oscilaciones",
            "B) Elimina por completo el error en estado estacionario ante perturbaciones escalón",
            "C) Duplica la ganancia estática del proceso sin afectar la estabilidad",
            "D) Convierte el lazo de control en un sistema puramente integrador"
        ],
        respuestaCorrecta: 0,
        explicacion: "El control PD combina la respuesta proporcional con la derivada, aportando amortiguamiento y rapidez ante cambios transitorios, aunque mantiene un error estacionario si no incluye acción integral."
    },
    {
        id: 61,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la transferencia de masa por convección forzada en la superficie de una placa plana?",
        opciones: [
            "A) La difusión molecular en ausencia total de movimiento de fluido",
            "B) El transporte masivo de soluto impulsado por el movimiento macroscópico del fluido circundante inducido por medios mecánicos externos",
            "C) La evaporación espontánea de líquidos en recipientes cerrados al vacío",
            "D) El flujo capilar a través de materiales porosos hidrofóbicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La convección forzada de masa combina la difusión molecular con el transporte por el movimiento macroscópico del fluido generado por una fuente externa (bombas, ventiladores)."
    },
    {
        id: 62,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el potencial químico (μ_i) de un componente i en una mezcla termodinámica de fases?",
        opciones: [
            "A) El calor específico de la mezcla dividido entre la masa total",
            "B) La presión parcial del gas dividida entre su fracción molar",
            "C) La derivada parcial de la energía libre de Gibbs respecto a la cantidad de moles del componente i, manteniendo constantes la temperatura, presión y moles de los demás",
            "D) La energía cinética interna por mol de componente activo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El potencial químico representa la variación de la energía libre de Gibbs del sistema al añadir un mol del componente i a temperatura, presión y composición constante."
    },
    {
        id: 63,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué establece la aproximación del estado estacionario (Steady-State Approximation) aplicada a los intermedios reactivos en cinéticas complejas?",
        opciones: [
            "A) Que la temperatura del reactor no cambia durante todo el tiempo de operación",
            "B) Que la constante de equilibrio de la reacción es igual a uno",
            "C) Que los reactivos nunca se consumen por completo",
            "D) Que la velocidad de formación de un intermedio reactivo inestable es prácticamente igual a su velocidad de consumo, por lo que su concentración neta se asume constante (dC/dt ≈ 0)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La aproximación del estado estacionario asume que la concentración de intermediarios altamente reactivos se mantiene baja y constante a lo largo de la reacción, simplificando la obtención de la ley de velocidad."
    },
    {
        id: 64,
        area: "Operaciones Unitarias",
        pregunta: "En una columna de destilación fraccionada, ¿qué representa el concepto de 'Plato Teórico' (Etapa Ideal)?",
        opciones: [
            "A) Una etapa de contacto donde el vapor y el líquido que abandonan el plato alcanzan el equilibrio termodinámico mutuo",
            "B) Un plato construido exclusivamente de cerámica refractaria de alta pureza",
            "C) La sección inferior de la torre donde se ubica el hervidor",
            "D) Un plato que no presenta ninguna transferencia de masa ni calor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un plato teórico es una etapa ideal de contacto donde las corrientes de vapor y líquido que salen se encuentran en perfecto equilibrio termodinámico de fases."
    },
    {
        id: 65,
        area: "Control e Instrumentación",
        pregunta: "¿Qué significa que una señal de instrumentación industrial sea del tipo estándar 4-20 mA?",
        opciones: [
            "A) Que el equipo requiere una fuente de alimentación de 420 voltios de corriente alterna",
            "B) Que el rango de corriente eléctrica de 4 mA representa el 0% (valor mínimo de escala) y 20 mA representa el 100% (valor máximo de escala) de la variable medida",
            "C) Que la precisión del sensor es de 4 a 20 microamperios",
            "D) Que la válvula abre al 4% con 20 miliamperios"
        ],
        respuestaCorrecta: 1,
        explicacion: "El estándar analógico 4-20 mA permite transmitir variables de proceso de forma robusta; el valor de 4 mA (señal viva) permite además detectar fallas o cortes de cableado si la lectura cae a 0 mA."
    },
    {
        id: 66,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la Ley de Fick de la difusión en régimen estacionario para la difusión de un gas A a través de un gas B estancado (difusión equimolar o no equimolar)?",
        opciones: [
            "A) La velocidad de difusión es independiente de la temperatura y presión absoluta",
            "B) El flujo de masa es inversamente proporcional a la viscosidad cinemática",
            "C) El flujo molar difusivo es proporcional al gradiente de concentración e incluye la contribución del flujo masivo global de la mezcla",
            "D) La concentración molar permanece constante en todo el dominio espacial"
        ],
        respuestaCorrecta: 2,
        explicacion: "La difusión en gases combinada con el movimiento global del fluido incluye tanto el término difusivo puro de Fick como el término convectivo debido al movimiento masivo de la mezcla."
    },
    {
        id: 67,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se calcula el calor de reacción a una temperatura T_2 diferente de la temperatura estándar T_1, conociendo las capacidades caloríficas de reactivos y productos?",
        opciones: [
            "A) Multiplicando el calor estándar por la presión absoluta del reactor",
            "B) Sumando las entropías molares de los componentes puros",
            "C) Aplicando el criterio de fugacidad máxima en mezcla gaseosa",
            "D) Mediante la Ley de Kirchhoff de la termoquímica, integrando la diferencia de capacidades caloríficas molares ΔCp entre T_1 y T_2"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Ley de Kirchhoff establece que la variación del calor de reacción con la temperatura está dada por el cambio en la capacidad calorífica molar de la reacción (d(ΔH)/dT = ΔCp)."
    },
    {
        id: 68,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al fenómeno de 'difusión interna limitada' (efectos de difusión en poros) en catalizadores porosos heterogéneos?",
        opciones: [
            "A) Que la velocidad de reacción global se ve disminuida porque los reactivos experimentan resistencia al difundirse dentro de los poros del pellet catalítico, generando gradientes de concentración",
            "B) Que el catalizador incrementa su actividad al 200% por agitación ultrasónica",
            "C) Que los productos escapan de los poros a velocidad supersónica",
            "D) Que la temperatura interna del pellet desciende hasta el cero absoluto"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando la difusión dentro de los poros es lenta en comparación con la reacción química, la concentración de reactivo cae en el interior del pellet, cuantificándose mediante el factor de efectividad."
    },
    {
        id: 69,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de humidificación de aire, ¿qué representa la temperatura de bulbo húmedo (Wet-Bulb Temperature)?",
        opciones: [
            "A) El punto de ebullición del agua a la presión atmosférica estándar",
            "B) La temperatura de equilibrio estacionario que alcanza un termómetro cuyo bulbo está cubierto con una gasa empapada de agua expuesta a una corriente de aire",
            "C) La temperatura mínima de congelación de la mezcla aire-agua",
            "D) La temperatura del aire antes de ingresar al ventilador de tiro forzado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La temperatura de bulbo húmedo resulta del balance entre el calor transferido por convección desde el aire y el calor consumido por la evaporación del agua en la gasa."
    },
    {
        id: 70,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función realiza un controlador lógico programable (PLC) en la automatización de una planta química?",
        opciones: [
            "A) Medir directamente la viscosidad de los polímeros fundidos en extrusoras",
            "B) Suministrar potencia eléctrica trifásica a los compresores de alta presión",
            "C) Ejecutar la lógica de control secuencial, interlocks de seguridad y algoritmos regulatorios PID mediante un programa digital basado en microprocesadores",
            "D) Filtrar los ruidos electromagnéticos en los cables de transmisión analógica"
        ],
        respuestaCorrecta: 2,
        explicacion: "El PLC es el cerebro digital industrial encargado de procesar señales de campo, ejecutar la lógica de enclavamientos de seguridad (interlocks) y controlar lazo a lazo los procesos."
    },
    {
        id: 71,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la analogía de Chilton-Colburn (Transferencia de Calor y Masa) en operaciones unitarias?",
        opciones: [
            "A) Establece que la viscosidad dinámica es igual a la conductividad térmica en gases rarificados",
            "B) Calcula la pérdida de carga continua en lechos empacados no esféricos",
            "C) Demuestra que la difusión molecular es independiente de la concentración",
            "D) Relaciona el coeficiente de transferencia de calor con el coeficiente de transferencia de masa mediante los números adimensionales de Prandtl y Schmidt"
        ],
        respuestaCorrecta: 3,
        explicacion: "La analogía de Chilton-Colburn permite estimar coeficientes de transferencia de masa a partir de datos de transferencia de calor (o viceversa) utilizando factores J adimensionales."
    },
    {
        id: 72,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un coeficiente de actividad (γ_i) mayor que la unidad (γ_i > 1) en una solución líquida no ideal?",
        opciones: [
            "A) Que el componente presenta desviaciones positivas respecto a la Ley de Raoult, indicando repulsión entre moléculas distintas y mayor presión parcial",
            "B) Que el componente forma un complejo estable de asociación molecular",
            "C) Que la solución se comporta estrictamente como una mezcla ideal",
            "D) Que el calor de mezclado es fuertemente exotérmico"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un coeficiente de actividad γ_i > 1 refleja desviaciones positivas a la Ley de Raoult, mostrando que las moléculas tienden a repeler a las de especies distintas, aumentando su tendencia a escapar a la fase vapor."
    },
    {
        id: 73,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué representa la velocidad espacial (Space Velocity, SV) en el diseño de reactores continuos?",
        opciones: [
            "A) La velocidad lineal máxima a la que viaja el gas a través del lecho catalítico",
            "B) El número de volúmenes de reactor de alimentación procesados por unidad de tiempo (inverso del tiempo espacial)",
            "C) El tiempo requerido para alcanzar el 99% de conversión global",
            "D) La tasa de consumo volumétrico del reactivo limitante por segundo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La velocidad espacial (SV = v0 / V) mide cuántos volúmenes de alimentación a condiciones estándar o de operación se procesan por unidad de tiempo en el reactor."
    },
    {
        id: 74,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de adsorción en lecho fijo, ¿qué representa la 'zona de transferencia de masa' (ZTM) dentro del adsorbente?",
        opciones: [
            "A) La sección inferior de soporte mecánico del lecho de carbón activado",
            "B) El tramo de tubería externa que transporta el gas antes de entrar al tanque",
            "C) La región del lecho donde ocurre la mayor parte del cambio de concentración del soluto, desde la concentración inicial hasta su agotamiento",
            "D) La zona donde el adsorbente se funde por calor adiabático"
        ],
        respuestaCorrecta: 2,
        explicacion: "La ZTM es el frente activo dentro del lecho empacado donde se lleva a cabo la transferencia de masa del soluto hacia el adsorbente, desplazándose a lo largo del tiempo hasta la saturación."
    },
    {
        id: 75,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es el propósito principal de implementar una estrategia de 'Control en Cascada' en un proceso químico?",
        opciones: [
            "A) Duplicar la velocidad de muestreo del conversor analógico-digital",
            "B) Reducir el costo económico de los sensores de temperatura en torres de destilación",
            "C) Eliminar la necesidad de utilizar controladores PID en la planta",
            "D) Mejorar el rechazo de perturbaciones internas y secundarias antes de que afecten a la variable primaria de control, utilizando un lazo esclavo y un lazo maestro"
        ],
        respuestaCorrecta: 3,
        explicacion: "El control en cascada utiliza dos controladores: el maestro mide la variable principal y ajusta el punto de consigna del esclavo, el cual corrige rápidamente las perturbaciones en la variable secundaria."
    },
    {
        id: 76,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la capa límite de concentración en la transferencia de masa interfacial?",
        opciones: [
            "A) La región del fluido adyacente a la interfase donde existe un gradiente pronunciado de concentración molar del soluto difusivo",
            "B) El volumen total de disolvente almacenado en los tanques nodriza",
            "C) La distancia donde la velocidad del fluido iguala la velocidad de la onda acústica",
            "D) La zona de turbulencia máxima en codos de tuberías de alta presión"
        ],
        respuestaCorrecta: 0,
        explicacion: "La capa límite de concentración es el dominio espacial cercano a la interfase donde la concentración del soluto varía desde su valor interfacial hasta el de la corriente principal."
    },
    {
        id: 77,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica la condición de equilibrio químico en términos de los potenciales químicos de reactivos y productos con coeficientes estequiométricos ν_i?",
        opciones: [
            "A) Que todos los potenciales químicos de la mezcla deben ser estrictamente iguales a cero",
            "B) Que la sumatoria ponderada de los potenciales químicos multiplicados por sus coeficientes estequiométricos es igual a cero (∑ ν_i * μ_i = 0)",
            "C) Que la energía libre de Gibbs total del sistema alcanza su valor máximo absoluto",
            "D) Que la entropía de los productos es menor que la de los reactivos iniciales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La condición termodinámica general de equilibrio químico establece que la suma de los potenciales químicos ponderados por la estequiometría es nula (∑ ν_i * μ_i = 0)."
    },
    {
        id: 78,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a un reactor adiabático en comparación con un reactor con intercambio térmico directo?",
        opciones: [
            "A) La temperatura del fluido permanece rigurosamente constante gracias a serpentines de enfriamiento internos",
            "B) Opera exclusivamente a presiones criogénicas cercanas al cero absoluto",
            "C) No existe transferencia de calor con los alrededores a través de las paredes del reactor, por lo que todo el calor generado o absorbido por la reacción afecta directamente la temperatura de la mezcla",
            "D) La conversión química alcanza el 100% de manera instantánea"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un reactor adiabático está térmicamente aislado del exterior; en reacciones exotérmicas, esto provoca un incremento pronunciado de la temperatura de salida."
    },
    {
        id: 79,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de evaporación, ¿qué problema operativo genera la presencia de incrustaciones (scaling) en las superficies de calefacción tubulares?",
        opciones: [
            "A) Incrementan la velocidad de circulación del líquido por efecto catalítico",
            "B) Reducen la presión de operación del vacío hasta niveles criogénicos",
            "C) Convierten el vapor de calefacción en gas incondensable",
            "D) Actúan como una resistencia térmica adicional, reduciendo drásticamente el coeficiente global de transferencia de calor y la capacidad de evaporación"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las incrustaciones de sales o precipitados sobre los tubos generan una resistencia térmica parásita que deteriora la transferencia de calor en el evaporador."
    },
    {
        id: 80,
        area: "Control e Instrumentación",
        pregunta: "¿Qué es el 'offset' (error estacionario) característico de un controlador puramente Proporcional (P) ante un cambio en la carga o perturbación?",
        opciones: [
            "A) La diferencia persistente entre el punto de consigna (setpoint) y la variable controlada una vez que el proceso se ha estabilizado",
            "B) El tiempo de retraso puro antes de que el sensor detecte la variable",
            "C) La oscilación armónica permanente generada por la acción derivativa",
            "D) La máxima apertura permitida por la válvula de control final"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un controlador proporcional requiere un error distinto de cero para mantener una salida diferente en la válvula, lo que genera un error estacionario permanente (offset) ante perturbaciones."
    },
    {
        id: 81,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe el diámetro hidráulico (Dh) utilizado en los cálculos de fricción para conductos de sección no circular?",
        opciones: [
            "A) La raíz cuadrada del área total del ducto rectangular",
            "B) Cuatro veces el área transversal de flujo dividida entre el perímetro mojado (Dh = 4 * A / P)",
            "C) El perímetro exterior del aislamiento térmico dividido entre la longitud",
            "D) El diámetro del círculo inscrito máximo en la sección transversal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diámetro hidráulico permite aplicar las correlaciones de tuberías circulares (como el número de Reynolds y factor de fricción) a ductos de geometría rectangular, anular o compleja."
    },
    {
        id: 82,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el calor estándar de formación (ΔHf°) de un compuesto químico puro?",
        opciones: [
            "A) La energía liberada al quemar un mol de sustancia en exceso de oxígeno puro",
            "B) El calor absorbido al fundir un mol de sustancia cristalina a su punto triple",
            "C) La variación de entalpía asociada a la formación de un mol de un compuesto a partir de sus elementos constituyentes en sus estados estándar de agregación",
            "D) La energía libre de Gibbs generada en disolución acuosa diluida"
        ],
        respuestaCorrecta: 2,
        explicacion: "El calor estándar de formación es el cambio entálpico de formar un mol de sustancia a partir de sus elementos estables en condiciones estándar (298.15 K y 1 bar)."
    },
    {
        id: 83,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué representa la velocidad de reacción intrínseca en catálisis heterogénea?",
        opciones: [
            "A) La velocidad a la que el gas atraviesa el lecho poroso sin reaccionar",
            "B) La tasa de disolución física del catalizador en el disolvente orgánico",
            "C) La frecuencia de rotación del agitador mecánico del reactor",
            "D) La velocidad con la que ocurre la reacción química superficial en los sitios activos del catalizador, libre de limitaciones por transferencia de masa externa o interna"
        ],
        respuestaCorrecta: 3,
        explicacion: "La cinética intrínseca describe la velocidad de la reacción química pura en la superficie activa, deslindándose de los efectos físicos de transporte de masa o difusión por los poros."
    },
    {
        id: 84,
        area: "Operaciones Unitarias",
        pregunta: "En una columna de destilación, ¿qué indica una relación de reflujo operativa menor que la 'relación de reflujo mínimo' (R < R_min)?",
        opciones: [
            "A) Que es imposible alcanzar la pureza de separación deseada para los productos, sin importar cuántos platos teóricos se añadan a la columna",
            "B) Que la torre operará con un consumo mínimo de vapor en el hervidor",
            "C) Que la columna requerirá un número infinito de etapas de contacto",
            "D) Que todo el producto superior se destilará como residuo pesado"
        ],
        respuestaCorrecta: 0,
        explicacion: "Operar por debajo del reflujo mínimo (R < R_min) viola las restricciones de equilibrio de fases, haciendo irrealizable la separación especificada de los componentes."
    },
    {
        id: 85,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple el modo de control 'Split-Range' (Rango Partido) en instrumentación industrial?",
        opciones: [
            "A) Divide la señal analógica en frecuencias de radio para transmisión inalámbrica",
            "B) Permite que una sola señal de salida del controlador gobierne de manera coordinada a dos o más elementos finales de control (por ejemplo, una válvula de calentamiento y una de enfriamiento)",
            "C) Duplica la velocidad de procesamiento de los lazos PID en cascada",
            "D) Abre simultáneamente todas las válvulas de seguridad ante una emergencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El control de rango partido (Split-Range) coordina múltiples actuadores con una única señal del controlador; por ejemplo, de 0 a 50% de señal opera la válvula de frío y de 50 a 100% la de calor."
    },
    {
        id: 86,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la ecuación de Dittus-Boelter en la transferencia de calor por convección forzada en el interior de tubos?",
        opciones: [
            "A) La caída de presión por fricción en accesorios menores y codos",
            "B) La velocidad crítica de transición de flujo laminar a turbulento",
            "C) Una correlación empírica para calcular el número de Nusselt en régimen turbulento plenamente desarrollado en función de Reynolds y Prandtl",
            "D) El gradiente térmico radial en paredes de aislamiento multicapa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La correlación de Dittus-Boelter (Nu = 0.023 * Re^0.8 * Pr^n) es una fórmula empírica estándar para estimar la transferencia térmica convectiva en tubos con flujo turbulento."
    },
    {
        id: 87,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un valor de factor de compresibilidad (Z = P*V / R*T) menor que la unidad (Z < 1) para un gas real?",
        opciones: [
            "A) Que el gas se encuentra a presiones extremadamente elevadas donde impera la repulsión",
            "B) Que el gas se comporta estrictamente como un gas ideal en todo rango",
            "C) Que la temperatura del sistema es superior a la temperatura crítica",
            "D) Que predominan las fuerzas intermoleculares de atracción sobre las de repulsión, facilitando la compresión del gas en comparación con el comportamiento ideal"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un factor de compresibilidad Z < 1 indica que las fuerzas de atracción intermolecular son dominantes, haciendo que el gas sea más compresible que un gas ideal (donde Z = 1)."
    },
    {
        id: 88,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué representa el 'Factor de Efectividad' (η) de un catalizador poroso en reacciones limitadas por difusión interna?",
        opciones: [
            "A) La velocidad de reacción real dentro del pellet poroso dividida entre la velocidad de reacción que se obtendría si todo el pellet estuviera expuesto a la concentración y temperatura de la superficie",
            "B) El porcentaje de metal noble activo soportado sobre alúmina",
            "C) La relación entre la vida útil del catalizador y las horas de parada",
            "D) La eficiencia térmica adiabática del lecho empacado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de efectividad η cuantifica la penalización en la velocidad de reacción debido a los gradientes de concentración causados por la resistencia a la difusión en los poros del catalizador."
    },
    {
        id: 89,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de extracción líquido-líquido multietapa en contracorriente, ¿cómo se determina el número mínimo de etapas teóricas requeridas?",
        opciones: [
            "A) Mediante un balance de materia global en régimen estacionario simple sin equilibrio",
            "B) Operando bajo la condición límite de relación de reflujo o caudal de disolvente mínimo (fases en equilibrio en cascada infinita)",
            "C) Calculando el tiempo de residencia hidráulico en tanques agitados",
            "D) Midiendo la viscosidad dinámica de la mezcla diluida"
        ],
        respuestaCorrecta: 1,
        explicacion: "El número mínimo de etapas teóricas se calcula bajo condiciones límite (como disolvente mínimo), donde se requerirían etapas infinitas para lograr la separación si se operara al límite."
    },
    {
        id: 90,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple un posicionador de válvulas montado en un actuador neumático industrial?",
        opciones: [
            "A) Medir la temperatura ambiente en la subestación eléctrica",
            "B) Convertir señales digitales de bus de campo en pulsos neumáticos de alta frecuencia",
            "C) Asegurar que la posición del vástago de la válvula corresponda exactamente a la señal de control emitida por el controlador, compensando fuerzas de fricción y presiones diferenciales",
            "D) Aliviar la presión del diafragma ante fallas de suministro de aire"
        ],
        respuestaCorrecta: 2,
        explicacion: "El posicionador es un dispositivo de lazo local que compara la señal de comando con la posición real del vástago, suministrando aire al actuador para garantizar un posicionamiento preciso."
    },
    {
        id: 91,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la transferencia de calor por radiación térmica entre superficies separadas en el espacio?",
        opciones: [
            "A) La conducción de energía a través de redes cristalinas estáticas",
            "B) El transporte masivo de calor por corrientes convectivas naturales",
            "C) La fricción viscosa entre capas límite fluidas adyacentes",
            "D) La emisión de energía en forma de ondas electromagnéticas (fotones) debido a cambios en los niveles de energía electrónica molecular, sin requerir un medio material interpuesto"
        ],
        respuestaCorrecta: 3,
        explicacion: "La radiación térmica es la transferencia de energía mediante ondas electromagnéticas, la cual no necesita de un medio material para propagarse y ocurre incluso en el vacío."
    },
    {
        id: 92,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el calor de solución (entalpía integral de disolución) a dilución infinita?",
        opciones: [
            "A) La variación de entalpía cuando un mol de soluto se disuelve en una cantidad tan grande de disolvente que agregar más disolvente no produce ningún cambio adicional de entalpía",
            "B) El calor liberado al evaporar completamente una disolución salina",
            "C) La energía libre requerida para precipitar cristales puros",
            "D) La temperatura máxima alcanzada durante la neutralización ácido-base"
        ],
        respuestaCorrecta: 0,
        explicacion: "El calor de solución a dilución infinita representa la entalpía de disolución cuando las interacciones soluto-soluto se vuelven nulas al estar las moléculas completamente rodeadas de disolvente."
    },
    {
        id: 93,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a un reactor tipo 'Autoclave' agitado empleado en la industria química?",
        opciones: [
            "A) Un tubo capilar de vidrio sin agitación para reacciones fotoquímicas",
            "B) Un recipiente cerrado de alta presión equipado con un sistema mecánico de agitación vigorosa, empleado para reacciones líquido-gas o síntesis a presión elevada",
            "C) Un lecho empacado fijo operado exclusivamente a presión atmosférica",
            "D) Una torre de destilación fraccionada con múltiples platos perforados"
        ],
        respuestaCorrecta: 1,
        explicacion: "El autoclave es un reactor discontinuo o semicontinuo de alta presión y temperatura, dotado de agitación intensa, ideal para sistemas multifásicos gas-líquido."
    },
    {
        id: 94,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de cristalización industrial, ¿cómo se define la región de 'metaestabilidad' en la curva de solubilidad?",
        opciones: [
            "A) El punto de fusión incongruente de las sales hidratadas",
            "B) La temperatura de ebullición de la solución concentrada a vacío",
            "C) La zona de sobresaturación donde la solución es inestable frente a la nucleación espontánea pero permite el crecimiento cristalino sobre semillas existentes",
            "D) La zona donde los cristales se funden instantáneamente al agitar"
        ],
        respuestaCorrecta: 2,
        explicacion: "La zona metaestable se encuentra entre la curva de saturación y la curva de sobresaturación límite; en esta región no se forman nuevos núcleos espontáneamente, pero crecen los cristales sembrados."
    },
    {
        id: 95,
        area: "Control e Instrumentación",
        pregunta: "¿Qué es una estrategia de control 'Ratiométrica' (Control de Relación) aplicada en procesos químicos continuos?",
        opciones: [
            "A) Un controlador que ajusta la relación de transmisión de los motores eléctricos",
            "B) Un sistema que mide la razón entre costos de materia prima y productos vendidos",
            "C) Un lazo que opera exclusivamente con válvulas de apertura proporcional",
            "D) Un esquema donde se controla que el caudal de una corriente secundaria mantenga una proporción fija y constante respecto al caudal de una corriente silvestre o salvaje principal"
        ],
        respuestaCorrecta: 3,
        explicacion: "El control de relación (Ratio Control) asegura que dos corrientes se mezclen manteniendo una proporción estequiométrica o operativa constante, midiendo la corriente principal (salvaje) y modulando la secundaria."
    },
    {
        id: 96,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la capa límite de velocidad en el flujo externo sobre objetos sumergidos?",
        opciones: [
            "A) La región del fluido donde los efectos de la viscosidad son significativos y el perfil de velocidad se desarrolla desde cero en la pared hasta la velocidad imperturbada",
            "B) El volumen de control donde la presión estática es igual a cero",
            "C) La zona de cavitación severa en álabes de turbinas hidráulicas",
            "D) La interfase de transferencia de calor radiativo en gases nobles"
        ],
        respuestaCorrecta: 0,
        explicacion: "La capa límite hidrodinámica o de velocidad concentra los gradientes de corte viscoso generados por la presencia del cuerpo sumergido en el flujo."
    },
    {
        id: 97,
        area: "Termodinámica Química",
        pregunta: "¿Qué representa el punto eutéctico en un diagrama de fases sólido-líquido de mezclas binarias?",
        opciones: [
            "A) El punto donde el líquido se evapora instantáneamente a presión atmosférica",
            "B) La temperatura y composición mínima de fusión en la cual coexisten en equilibrio termodinámico el líquido y dos fases sólidas puras simultáneamente",
            "C) La temperatura crítica superior de miscibilidad líquida",
            "D) El estado en el que la presión de vapor del sólido supera la del líquido"
        ],
        respuestaCorrecta: 1,
        explicacion: "El punto eutéctico es la temperatura más baja a la cual puede fundir una mezcla de composición específica, coexistiendo en equilibrio el líquido y los dos sólidos puros."
    },
    {
        id: 98,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a un reactor tipo PFR operando con reciclaje de productos?",
        opciones: [
            "A) Incrementa la caída de presión hasta bloquear totalmente el flujo de alimentación",
            "B) Convierte el proceso en un sistema cerrado discontinuo sin salida",
            "C) Permite recircular una fracción de la corriente de salida hacia la entrada del reactor, modificando el comportamiento hidrodinámico hacia condiciones intermedias entre un PFR y un CSTR",
            "D) Elimina la necesidad de utilizar catalizadores en reacciones de oxidación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El uso de una corriente de reciclaje en un reactor tubular (PFR) modera los gradientes de concentración y temperatura, permitiendo simular comportamientos operativos flexibles."
    },
    {
        id: 99,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de secado de sólidos, ¿qué representa la 'humedad de equilibrio' del material?",
        opciones: [
            "A) La cantidad máxima de agua que puede adsorber un desecante químico",
            "B) El punto exacto donde la velocidad de secado pasa de constante a decreciente",
            "C) La humedad retenida en el interior de los poros cerrados inaccesibles",
            "D) El contenido de humedad que retiene el sólido cuando su presión de vapor de equilibrio iguala la presión parcial del vapor de agua en el aire circundante a condiciones dadas"
        ],
        respuestaCorrecta: 3,
        explicacion: "La humedad de equilibrio es el límite termodinámico al que puede tender un sólido al ser secado bajo un aire con una humedad relativa específica; por debajo de este valor no es posible secar más."
    },
    {
        id: 100,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es el objetivo de utilizar el modo de control 'Feedforward' (Acción Anticipativa) en procesos industriales?",
        opciones: [
            "A) Medir directamente las perturbaciones externas antes de que estas afecten a la variable controlada y aplicar una acción correctiva anticipada",
            "B) Esperar a que el error se manifieste en la salida para que el lazo integral actúe",
            "C) Duplicar la señal de retroalimentación en sensores redundantes",
            "D) Estabilizar sistemas inestables mediante realimentación positiva"
        ],
        respuestaCorrecta: 0,
        explicacion: "El control feedforward (anticipativo) contrarresta las perturbaciones medibles antes de que impacten en la salida del proceso, a diferencia del control por realimentación (feedback) que reacciona tras el error."
    },
    {
        id: 101,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la Ley de Stefan para la difusión de vapor a través de un gas inerte en reposo?",
        opciones: [
            "A) Calcula la caída de presión en lechos fluidizados turbulentos",
            "B) Relaciona el flujo difusivo y el transporte convectivo global originado por la impermeabilidad del gas inerte al flujo de vapor",
            "C) Determina la viscosidad de mezclas gaseosas multicomponentes",
            "D) Establece la radiación neta entre cuerpos negros paralelos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La difusión de Stefan describe el transporte de un gas a través de otro estacionario, incorporando el flujo masivo convectivo generado por la estanquidad del gas inerte."
    },
    {
        id: 102,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el coeficiente de actividad límite a dilución infinita (γ_i^∞) en soluciones líquidas?",
        opciones: [
            "A) La presión parcial del componente puro a la temperatura crítica",
            "B) La solubilidad máxima de una sal en agua destilada",
            "C) El valor límite que toma el coeficiente de actividad de un soluto cuando su fracción molar en la disolución tiende a cero",
            "D) El potencial químico en condiciones de gas ideal puro"
        ],
        respuestaCorrecta: 2,
        explicacion: "El coeficiente de actividad a dilución infinita (γ_i^∞) caracteriza la máxima interacción asimétrica entre una molécula de soluto dispersa en un exceso masivo de disolvente."
    },
    {
        id: 103,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a un reactor catalítico de lecho fluidizado (Fluidized Bed Reactor)?",
        opciones: [
            "A) El catalizador se encuentra fundido en estado líquido a 2000 °C",
            "B) Opera exclusivamente de forma discontinua sin alimentación de gases",
            "C) Los reactivos circulan a velocidades supersónicas sin contacto con los sólidos",
            "D) Las partículas finas de catalizador se mantienen suspendidas y en agitación continua por la fuerza ascensional del gas reactante, logrando excelente mezclado y control isotérmico"
        ],
        respuestaCorrecta: 3,
        explicacion: "En el lecho fluidizado, el gas ascendente suspende las partículas catalíticas como si fueran un fluido, permitiendo una mezcla excelente y una temperatura muy uniforme."
    },
    {
        id: 104,
        area: "Operaciones Unitarias",
        pregunta: "En el diseño de torres de destilación por el método gráfico de McCabe-Thiele, ¿qué indica la pendiente de la línea de operación de enriquecimiento (rectificadora)?",
        opciones: [
            "A) R / (R + 1), donde R es la relación de reflujo",
            "B) El número total de platos teóricos de la columna",
            "C) La fracción molar del componente más volátil en el fondo",
            "D) La eficiencia Murphree de los platos de alimentación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La pendiente de la línea de operación superior en McCabe-Thiele se expresa matemáticamente como R / (R + 1), relacionando el reflujo con los caudales de vapor."
    },
    {
        id: 105,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple un elemento final de control dentro de un lazo automático de regulación industrial?",
        opciones: [
            "A) Medir la variable controlada en el campo con alta precisión analítica",
            "B) Modificar directamente la variable manipulada del proceso (como el caudal de un fluido) en respuesta a la señal de salida emitida por el controlador",
            "C) Convertir señales eléctricas digitales en protocolos de comunicación inalámbrica",
            "D) Almacenar los históricos de tendencias de temperatura en bases de datos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El elemento final de control (típicamente una válvula de control con su actuador) ejecuta la corrección física sobre el proceso alterando la variable manipulada."
    },
    {
        id: 106,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué representa el número adimensional de Sherwood (Sh) en la transferencia de masa convectiva?",
        opciones: [
            "A) El cociente entre la viscosidad cinemática y la difusividad térmica",
            "B) La proporción entre el caudal másico y la presión de vapor del soluto",
            "C) La relación entre la transferencia de masa convectiva y la difusión molecular pura a través de la capa límite interfacial",
            "D) La relación entre las fuerzas de inercia y la tensión superficial"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número de Sherwood (Sh = k_c * L / D_AB) adimensionaliza el coeficiente convectivo de transferencia de masa, comparándolo con la difusión molecular pura."
    },
    {
        id: 107,
        area: "Termodinámica Química",
        pregunta: "¿Qué establece la regla de las fases de Gibbs (F = C - P + 2) para sistemas fisicoquímicos en equilibrio?",
        opciones: [
            "A) Determina la masa total de los reactivos en celdas electroquímicas",
            "B) Establece la velocidad máxima de reacción en mezclas homogéneas",
            "C) Calcula la constante dieléctrica de solventes polares",
            "D) Calcula el número de grados de libertad intensivos (F) que pueden modificarse de forma independiente sin alterar el número de fases (P) en un sistema con C componentes"
        ],
        respuestaCorrecta: 3,
        explicacion: "La regla de las fases de Gibbs relaciona los grados de libertad (F), el número de componentes químicos independientes (C) y el número de fases en equilibrio (P)."
    },
    {
        id: 108,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza a una reacción química con 'orden cero' respecto a la concentración del reactivo?",
        opciones: [
            "A) La velocidad de reacción es completamente independiente de la concentración del reactivo, manteniéndose constante mientras haya disponibilidad de este",
            "B) La velocidad de reacción se incrementa de forma logarítmica con el tiempo",
            "C) El reactivo se consume de manera instantánea en menos de un milisegundo",
            "D) La constante cinética depende exclusivamente de la presión barométrica"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una reacción de orden cero, la velocidad (-rA = k) no depende de la concentración del reactivo, típica de procesos limitados por superficies catalíticas saturadas o fotocatálisis."
    },
    {
        id: 109,
        area: "Operaciones Unitarias",
        pregunta: "En los procesos de evaporación, ¿qué ventaja aporta un sistema de 'recompresión mecánica de vapor' (MVR)?",
        opciones: [
            "A) Condensa el vapor de agua directamente mediante agua de río fría sin recuperar energía",
            "B) Comprime mecánicamente el vapor secundario generado para elevar su temperatura y presión, permitiendo reutilizarlo como medio de calefacción en el mismo evaporador y ahorrando energía externa",
            "C) Elimina por completo la necesidad de bombas de vacío en la planta",
            "D) Aumenta la viscosidad de la solución hasta la precipitación de sales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El sistema MVR comprime el vapor evaporado para elevar su nivel térmico y usarlo como vapor de calefacción, logrando una eficiencia energética excepcional."
    },
    {
        id: 110,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es el propósito de implementar un sistema de control de 'Relación' (Ratio Control) en la alimentación de reactivos a un reactor?",
        opciones: [
            "A) Controlar la temperatura del reactor mediante la apertura de válvulas de agua",
            "B) Reducir los costos de mantenimiento de los instrumentos analíticos",
            "C) Mantener una proporción estequiométrica fija entre dos caudales de reactivos, midiendo la corriente principal salvaje y ajustando la secundaria",
            "D) Sincronizar la velocidad de los motores eléctricos de agitación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El control de relación mantiene estequiométricamente estables las proporciones de reactivos que ingresan al proceso, adaptando el flujo secundario en función de las fluctuaciones del primario."
    },
    {
        id: 111,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué expresa la correlación de Colburn para la transferencia de calor en tubos turbulentos?",
        opciones: [
            "A) Calcula la caída de presión en válvulas de control de alta turbulencia",
            "B) Determina la velocidad terminal de sedimentación de partículas esféricas",
            "C) Establece la conductividad térmica efectiva en aislamientos porosos",
            "D) Relaciona el factor J_H de transferencia térmica con el número de Reynolds y Prandtl para predecir coeficientes convectivos en régimen turbulento"
        ],
        respuestaCorrecta: 3,
        explicacion: "La analogía y factor J de Colburn (J_H) correlaciona los fenómenos de transferencia de calor y cantidad de movimiento en flujo turbulento interno."
    },
    {
        id: 112,
        area: "Termodinámica Química",
        pregunta: "¿Cómo se define el coeficiente de dilatación cúbica (β) de un fluido en la termodinámica de procesos?",
        opciones: [
            "A) La variación relativa del volumen respecto a la temperatura a presión constante (β = 1/V * (∂V/∂T)P)",
            "B) El cociente de la presión absoluta entre la densidad molar",
            "C) La derivada de la presión respecto al volumen a temperatura constante",
            "D) La capacidad calorífica específica dividida entre la viscosidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "El coeficiente de dilatación térmica volumétrica β cuantifica la expansión de un fluido al calentarse a presión constante, fundamental en convección natural."
    },
    {
        id: 113,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué representa la energía de activación (Ea) en la ecuación cinética de Arrhenius?",
        opciones: [
            "A) La energía total liberada en una explosión exotérmica",
            "B) La barrera de energía potencial mínima que las moléculas reactantes deben superar para que ocurra la reacción química efectiva",
            "C) El calor consumido por los serpentines de enfriamiento del reactor",
            "D) La energía cinética macroscópica del fluido dentro del tubo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La energía de activación representa la barrera energética que deben franquear las moléculas mediante colisiones efectivas para transformar reactivos en productos."
    },
    {
        id: 114,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de extracción líquido-líquido, ¿qué es la curva de solubilidad binodal en el diagrama ternario?",
        opciones: [
            "A) La curva de ebullición del disolvente a presión atmosférica",
            "B) El límite de saturación de un sólido disuelto en agua pura",
            "C) La línea límite que separa la región de una sola fase homogénea (miscible) de la región de dos fases líquidas inmiscibles",
            "D) La relación entre la temperatura y la viscosidad del extracto"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un diagrama ternario de extracción, la curva binodal delimita la zona donde el sistema se divide en dos fases líquidas inmiscibles (extracto y refinado)."
    },
    {
        id: 115,
        area: "Control e Instrumentación",
        pregunta: "¿Qué función cumple el modo derivativo (D) de un controlador PID cuando se aplica a señales de campo ruidosas?",
        opciones: [
            "A) Estabiliza instantáneamente cualquier ruido eléctrico sin efectos secundarios",
            "B) Convierte el ruido analógico en datos digitales de alta velocidad",
            "C) Elimina permanentemente el offset estático del lazo",
            "D) Amplifica el ruido de alta frecuencia presente en la señal del sensor, por lo que suele atenuarse o filtrarse para evitar oscilaciones erráticas en la válvula"
        ],
        respuestaCorrecta: 3,
        explicacion: "La acción derivativa calcula la tasa de cambio del error; si la señal de los sensores tiene ruido, la derivada amplifica dichas fluctuaciones, por lo que requiere filtrado previo."
    },
    {
        id: 116,
        area: "Fenómenos de Transporte",
        pregunta: "¿Qué describe la ley de Stokes para la velocidad terminal de sedimentación de partículas esféricas en un fluido viscoso?",
        opciones: [
            "A) La velocidad límite constante que alcanza una partícula esférica al caer libremente en un fluido bajo la acción de la gravedad, cuando la fuerza de fricción viscosa iguala a su peso neto efectivo",
            "B) La velocidad crítica de transición a régimen turbulento en tuberías rugosas",
            "C) La velocidad de propagación de ondas de presión en fluidos compresibles",
            "D) La velocidad de difusión molecular en gases a baja presión"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ley de Stokes permite calcular la velocidad terminal de caída de partículas pequeñas en régimen laminar (Re < 1), igualando la fuerza de arrastre viscoso con la gravedad y flotación."
    },
    {
        id: 117,
        area: "Termodinámica Química",
        pregunta: "¿Qué indica un valor de entalpía de mezclado (ΔH_mezcla) positivo en una solución líquida real?",
        opciones: [
            "A) Que el proceso de disolución es fuertemente exotérmico",
            "B) Que el proceso de disolución es endotérmico (absorbe calor del entorno)",
            "C) Que la solución se comporta estrictamente de acuerdo con la Ley de Raoult ideal",
            "D) Que la entropía del sistema disminuye hasta cero absoluto"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un ΔH_mezcla > 0 indica que se requiere energía (calor) para romper las interacciones intermoleculares originales al formar la solución, resultando en un proceso endotérmico."
    },
    {
        id: 118,
        area: "Ingeniería de Reactores",
        pregunta: "¿Qué caracteriza al funcionamiento de un reactor tipo Tubular (PFR) operando de manera isotérmica?",
        opciones: [
            "A) La temperatura oscila armónicamente entre la entrada y la salida",
            "B) La concentración de los reactivos es perfectamente uniforme en todo el volumen del tubo",
            "C) No existen gradientes de temperatura ni en la dirección radial ni axial, y la conversión varía de forma continua a lo largo de la longitud del tubo",
            "D) Opera exclusivamente como un sistema por lote sin flujo continuo"
        ],
        respuestaCorrecta: 2,
        explicacion: "En un PFR isotérmico, la temperatura se mantiene constante en todo el reactor, mientras que la conversión progresa a lo largo de la longitud del tubo conforme avanza el fluido."
    },
    {
        id: 119,
        area: "Operaciones Unitarias",
        pregunta: "En una operación de adsorción, ¿qué representa una isoterma de adsorción tipo Langmuir?",
        opciones: [
            "A) La relación lineal absoluta entre la temperatura y la presión de vapor",
            "B) La curva de solubilidad máxima de gases en agua a presión atmosférica",
            "C) La velocidad de flujo a través de lechos porosos fluidizados",
            "D) Un modelo matemático que relaciona la cantidad de soluto adsorbido por unidad de masa de adsorbente con la concentración o presión de equilibrio a temperatura constante, asumiendo sitios activos equivalentes y sin interacción entre moléculas adsorbidas"
        ],
        respuestaCorrecta: 3,
        explicacion: "La isoterma de Langmuir modela la adsorción en monocapa sobre una superficie con un número finito de sitios activos equivalentes y homogéneos."
    },
    {
        id: 120,
        area: "Control e Instrumentación",
        pregunta: "¿Cuál es el propósito fundamental de utilizar una estrategia de control 'Selectivo' (Override Control) en plantas químicas?",
        opciones: [
            "A) Proteger los equipos y la operación del proceso seleccionando dinámicamente entre dos o más señales de controladores aquella que debe gobernar la válvula para evitar rebasar límites operativos críticos",
            "B) Seleccionar automáticamente al operador de turno mediante algoritmos de inteligencia artificial",
            "C) Dividir el rango analógico de corriente entre 4 y 20 miliamperios",
            "D) Conmutar la alimentación eléctrica de corriente alterna a corriente directa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El control selectivo (override) supervisa múltiples variables de seguridad (como presión máxima y temperatura máxima) y selecciona la señal más restrictiva para gobernar el proceso y prevenir riesgos."
    }
];