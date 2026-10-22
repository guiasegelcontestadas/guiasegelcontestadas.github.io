const bancoPreguntas = [
    {
        id: 1,
        area: "Termodinámica y Transferencia de Calor",
        pregunta: "En un ciclo Rankine ideal para una planta de potencia de vapor, ¿qué proceso termodinámico ideal ocurre dentro de la turbina de vapor?",
        opciones: [
            "A) Compresión isotérmica reversible",
            "B) Expansión isentrópica (entropía constante)",
            "C) Adición de calor a presión constante",
            "D) Estrangulamiento entálpico constante"
        ],
        respuestaCorrecta: 1,
        explicacion: "En el ciclo Rankine ideal, la expansión del vapor a través de las etapas de la turbina se modela como un proceso adiabático reversible, es decir, a entropía constante (isentrópica)."
    },
    {
        id: 2,
        area: "Diseño y Elementos de Máquinas",
        pregunta: "¿Qué representa el factor de seguridad en el diseño mecánico de componentes sometidos a cargas estáticas y dinámicas?",
        opciones: [
            "A) El cociente de dividir la velocidad angular entre el radio de giro de la flecha",
            "B) La proporción entre la masa del componente y su volumen de inercia",
            "C) El incremento porcentual de temperatura admisible en los cojinetes",
            "D) La relación numérica entre la resistencia del material (como el límite elástico o último) y el esfuerzo de diseño o aplicado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El factor de seguridad garantiza que la capacidad de carga del material supere con margen suficiente al esfuerzo máximo esperado, cubriendo incertidumbres en cargas y propiedades."
    },
    {
        id: 3,
        area: "Dinámica y Vibraciones",
        pregunta: "¿Qué describe el fenómeno de resonancia mecánica en un sistema vibratorio de un grado de libertad?",
        opciones: [
            "A) La atenuación total de la amplitud de vibración debido a la disipación de energía por fricción viscosa",
            "B) El cambio instantáneo de fase a 360 grados sin importar la frecuencia",
            "C) Cuando la frecuencia de la fuerza externa excitatora coincide con la frecuencia natural del sistema, provocando un incremento drástico en la amplitud de oscilación",
            "D) La rigidez estática máxima de los resortes ante cargas axiales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La resonancia ocurre cuando la frecuencia de excitación iguala la frecuencia natural, amplificando severamente la respuesta dinámica y pudiendo causar fallas estructurales."
    },
    {
        id: 4,
        area: "Mecánica de Materiales",
        pregunta: "De acuerdo con la Ley de Hooke generalizada para materiales elásticos lineales e isótropos, ¿cómo se relaciona el esfuerzo axial con la deformación unitaria longitudinal?",
        opciones: [
            "A) El esfuerzo es inversamente proporcional al cuadrado del radio del elemento",
            "B) La deformación es independiente de la fuerza aplicada y depende solo de la temperatura",
            "C) El esfuerzo es igual al módulo de corte multiplicado por el ángulo de torsión",
            "D) El esfuerzo es directamente proporcional a la deformación unitaria a través del módulo de elasticidad (Módulo de Young, E)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Ley de Hooke unidimensional establece que el esfuerzo es directamente proporcional a la deformación unitaria longitudinal mediante el módulo de elasticidad E."
    },
    {
        id: 5,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué establece el principio de Bernoulli en el flujo ideal, incompresible y estacionario a lo largo de una línea de corriente?",
        opciones: [
            "A) Que la viscosidad del fluido es directamente proporcional a la velocidad media",
            "B) Que la suma de la presión estática, la presión hidrostática y la presión dinámica permanece constante a lo largo de la línea de corriente",
            "C) Que el caudal másico disminuye conforme aumenta el diámetro de la tubería",
            "D) Que la temperatura del fluido se eleva de forma adiabática por fricción en las paredes"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación de Bernoulli representa la conservación de la energía mecánica para un flujo ideal a lo largo de una línea de corriente."
    },
    {
        id: 6,
        area: "Manufactura y Procesos de Producción",
        pregunta: "¿Cuál es la característica principal del proceso de maquinado por arranque de viruta conocido como fresado?",
        opciones: [
            "A) La herramienta de corte es un filamento continuo que funde el metal por arco eléctrico",
            "B) La pieza permanece fija o con movimiento coordinado mientras la herramienta multipunto gira sobre su propio eje para remover material",
            "C) El material se deforma plásticamente entre dos rodillos pesados a temperatura ambiente",
            "D) La pieza gira sobre un husillo principal mientras la herramienta se desplaza linealmente"
        ],
        respuestaCorrecta: 1,
        explicacion: "En el fresado, la herramienta de corte posee múltiples filos y gira a alta velocidad para remover material de la pieza de trabajo."
    },
    {
        id: 7,
        area: "Termodinámica",
        pregunta: "¿Qué establece la Segunda Ley de la Termodinámica en relación con las máquinas térmicas según el enunciado de Kelvin-Planck?",
        opciones: [
            "A) La energía total de un sistema aislado permanece estrictamente constante durante cualquier proceso reversible",
            "B) El calor siempre se transfiere de manera espontánea de los cuerpos fríos a los cuerpos calientes sin consumo de trabajo",
            "C) Es imposible construir un dispositivo que opere en un ciclo y no produzca más efecto que la absorción de calor de un depósito y la realización de una cantidad igual de trabajo",
            "D) La entropía de cualquier sustancia pura cristalina tiende a cero cuando la temperatura absoluta se aproxima al cero absoluto"
        ],
        respuestaCorrecta: 2,
        explicacion: "El enunciado de Kelvin-Planck de la Segunda Ley estipula que ninguna máquina térmica puede convertir íntegramente el calor absorbido en trabajo neto sin rechazar una porción hacia un sumidero frío."
    },
    {
        id: 8,
        area: "Diseño Mecánico",
        pregunta: "En el análisis de esfuerzos combinados, ¿qué describe la teoría de la energía de distorsión máxima (Criterio de von Mises-Hencky) para materiales dúctiles?",
        opciones: [
            "A) Que la falla ocurre cuando el esfuerzo cortante máximo absoluto alcanza el límite elástico en tensión dividido por dos",
            "B) Que el material cede únicamente cuando las tres tensiones principales son de compresión hidrostática pura",
            "C) Que la deformación volumétrica elástica excede el volumen inicial de la pieza",
            "D) Que la falla por cedencia se predice cuando el esfuerzo equivalente de von Mises iguala o supera el límite de fluencia del material en ensayo uniaxial"
        ],
        respuestaCorrecta: 3,
        explicacion: "El criterio de von Mises es el más utilizado para materiales dúctiles bajo cargas multiaxiales, estableciendo un esfuerzo equivalente basado en la energía de distorsión."
    },
    {
        id: 9,
        area: "Dinámica",
        pregunta: "¿Qué representa la cantidad de movimiento angular (momento cinético) de un cuerpo rígido en rotación pura respecto a un eje fijo?",
        opciones: [
            "A) El producto del momento de inercia másico respecto al eje de giro por la velocidad angular instantánea",
            "B) El producto de la masa total del cuerpo por su aceleración tangencial instantánea",
            "C) La sumatoria de las fuerzas externas aplicadas dividida entre el radio de giro",
            "D) La potencia mecánica desarrollada por el torque externo entre la frecuencia de rotación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El momento cinético o cantidad de movimiento angular de un cuerpo rígido en rotación se define analíticamente como L = I * ω (momento de inercia por velocidad angular)."
    },
    {
        id: 10,
        area: "Mecánica de Materiales",
        pregunta: "Al analizar la flexión pura en vigas prismáticas simétricas, ¿cómo se distribuyen los esfuerzos normales longitudinales (σ) en la sección transversal?",
        opciones: [
            "A) Lineales, siendo cero en el eje neutro y alcanzando sus valores máximos de compresión y tensión en las fibras extremas más alejadas",
            "B) Constantes en toda el área de la sección transversal e independientes de la distancia al eje neutro",
            "C) Parabólicos con un valor máximo en las fibras exteriores y cero en el eje neutro",
            "D) Uniformes de corte puro orientados transversalmente al eje longitudinal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Bajo flexión elástica pura, los esfuerzos normales varían linealmente desde cero en el eje neutro hasta un valor máximo en las fibras extremas (σ = -M*y / I)."
    },
    {
        id: 11,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué representa el número adimensional de Reynolds (Re) al estudiar la escorrentía de fluidos en tuberías cerradas?",
        opciones: [
            "A) El cociente de la velocidad local del fluido frente a la velocidad de propagación del sonido (número de Mach)",
            "B) La proporción entre la fuerza de presión estática y la presión de vapor del líquido",
            "C) La relación entre las fuerzas de inercia y las fuerzas viscosas en el seno del fluido",
            "D) La relación entre la energía térmica transportada y la conductividad térmica radial"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número de Reynolds agrupa la densidad, velocidad, diámetro y viscosidad dinámica para caracterizar si un flujo en tubería es laminar, transitorio o turbulento."
    },
    {
        id: 12,
        area: "Manufactura",
        pregunta: "En los procesos de unión de metales por soldadura por arco eléctrico con electrodo revestido (SMAW), ¿cuál es la función principal del revestimiento del electrodo?",
        opciones: [
            "A) Proteger el charco de soldadura fundido de la atmósfera mediante la generación de gas protector y escoria, además de estabilizar el arco eléctrico",
            "B) Incrementar la conductividad eléctrica del núcleo metálico para fundir más rápido el acero base",
            "C) Sustituir por completo la necesidad de biselar las placas gruesas antes de soldar",
            "D) Reducir la temperatura de fusión del metal base para evitar deformaciones térmicas globales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El revestimiento del electrodo SMAW cumple múltiples funciones críticas: genera gases protectores, produce escoria para aislar el metal caliente y aporta elementos desoxidantes y de aleación."
    },
    {
        id: 13,
        area: "Transferencia de Calor",
        pregunta: "¿Qué ley fundamental rige la conducción térmica unidimensional en medios sólidos opacos?",
        opciones: [
            "A) La Ley de Enfriamiento de Newton",
            "B) La Ley de Stefan-Boltzmann para radiación térmica",
            "C) La Ecuación de continuidad de masa",
            "D) La Ley de Fourier de la conducción térmica"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Ley de Fourier establece que el flujo de calor por conducción es proporcional al gradiente de temperatura negativo y a la conductividad térmica del material."
    },
    {
        id: 14,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es el propósito fundamental de utilizar cojinetes de rodamiento (rodamientos de bolas o rodillos) en lugar de cojinetes de deslizamiento (chumaceras lisas) en ejes de alta velocidad y cargas moderadas?",
        opciones: [
            "A) Reducir significativamente las pérdidas por fricción estática y de arranque, aunque operen con menores tolerancias de alineación",
            "B) Eliminar por completo la necesidad de lubricación bajo cualquier condición de operación",
            "C) Soportar cargas axiales infinitas sin importar la desalineación angular de las flechas",
            "D) Incrementar el momento de inercia polar de la flecha soportada"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los cojinetes de rodamiento sustituyen la fricción deslizante por fricción de rodadura, reduciendo drásticamente los pares de arranque y fricción respecto a los cojinetes lisos."
    },
    {
        id: 15,
        area: "Dinámica y Control",
        pregunta: "En un sistema de control automático de lazos cerrados aplicado a servomecanismos mecánicos, ¿qué efecto principal produce la acción de control integral (I) en el controlador PID?",
        opciones: [
            "A) Reducir el tiempo de establecimiento instantáneamente a cero",
            "B) Eliminar por completo el error en estado estacionario ante entradas escalón",
            "C) Disminuir el sobreimpulso máximo (overshoot) en la respuesta transitoria",
            "D) Evitar la saturación de los actuadores electromecánicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La acción integral acumula el error en el tiempo, lo que permite anular el error en estado estacionario (error de posición en régimen permanente)."
    },
    {
        id: 16,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe el ensayo de impacto bajo el método Charpy en probetas metálicas con entrehierro (muesca)?",
        opciones: [
            "A) La resistencia a la fatiga flexionante bajo cargas cíclicas de alta frecuencia",
            "B) El límite elástico y el módulo de resiliencia en tracción uniaxial",
            "C) La dureza superficial frente a la indentación de una punta de diamante",
            "D) La tenacidad del material y su capacidad para absorber energía de deformación antes de fracturarse de manera frágil"
        ],
        respuestaCorrecta: 3,
        explicacion: "El ensayo Charpy mide la energía absorbida por una probeta entallada al ser golpeada por un péndulo, evaluando la tenacidad y la susceptibilidad a la fractura frágil."
    },
    {
        id: 17,
        area: "Mecánica de Fluidos",
        pregunta: "En una bomba centrífuga que opera en un sistema hidráulico, ¿a qué se le conoce como el fenómeno de cavitación y qué efectos perjudiciales provoca?",
        opciones: [
            "A) A la formación y colapso violento de burbujas de vapor cuando la presión estática local cae por debajo de la presión de vapor del líquido, provocando erosión mecánica y pérdida de eficiencia",
            "B) Al aumento excesivo de la viscosidad del fluido por calentamiento en el sello mecánico",
            "C) Al flujo turbulento extremo en la tubería de descarga debido a un diámetro excesivo",
            "D) A la vibración armónica generada por el desbalanceo estático del impulsor"
        ],
        respuestaCorrecta: 0,
        explicacion: "La cavitación ocurre cuando la presión baja en la succión de la bomba, formando burbujas de vapor que al colapsar generan ondas de choque capaces de destruir los álabes del impulsor."
    },
    {
        id: 18,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de conformado metálico conocido como extrusión directa (hacia adelante)?",
        opciones: [
            "A) El troquel se desplaza en sentido opuesto al flujo del material extruido",
            "B) El lingote de metal es forzado a pasar a través de una matriz mediante un émbolo, moviéndose en la misma dirección que el avance del punzón",
            "C) Se utiliza exclusivamente para la fabricación de alambres delgados sin fricción",
            "D) El metal fundido se vacía en un molde de arena rotatorio"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la extrusión directa, el pistón empuja el tocho metálico dentro de un contenedor a través de una matriz, fluyendo el material extruido en el mismo sentido del punzón."
    },
    {
        id: 19,
        area: "Termodinámica",
        pregunta: "¿Qué representa la calidad del vapor ($x$) en una mezcla húmeda de líquido-vapor de agua?",
        opciones: [
            "A) El cociente de la temperatura absoluta entre la presión de saturación",
            "B) La proporción de volumen ocupado por el líquido saturado frente al gas incondensable",
            "C) La relación entre la masa de vapor presente en la mezcla y la masa total de la mezcla (líquido más vapor)",
            "D) La entalpía específica total dividida entre el calor latente de vaporización"
        ],
        respuestaCorrecta: 2,
        explicacion: "La calidad o título del vapor x se define como la masa de vapor dividida entre la masa total de la mezcla líquido-vapor, variando de 0 (líquido saturado) a 1 (vapor saturado)."
    },
    {
        id: 20,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál el propósito de aplicar un tratamiento térmico de relevado de esfuerzos (alivio de tensiones) a componentes soldados de acero estructural?",
        opciones: [
            "A) Reducir las tensiones residuales internas generadas por el calentamiento y enfriamiento desigual durante el proceso de soldadura, previniendo deformaciones y agrietamientos",
            "B) Incrementar la dureza superficial máxima para resistir el desgaste abrasivo",
            "C) Transformar toda la estructura austenítica en martensita fina de alta resistencia",
            "D) Eliminar por completo el contenido de carbono en la aleación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relevado de esfuerzos calienta la estructura soldada por debajo de su temperatura crítica para relajar las tensiones residuales térmicas sin alterar significativamente la microestructura."
    },
    {
        id: 21,
        area: "Dinámica",
        pregunta: "¿Qué establece el teorema del impulso y la cantidad de movimiento lineal para una partícula o sistema de partículas?",
        opciones: [
            "A) Que la energía cinética total se conserva independientemente de las fuerzas disipativas no conservativas",
            "B) Que el cambio en la cantidad de movimiento lineal en un intervalo de tiempo es igual al impulso de la fuerza resultante que actúa sobre el sistema durante ese mismo intervalo",
            "C) Que el trabajo total realizado por las fuerzas internas es igual a la variación de la energía potencial gravitatoria",
            "D) Que la aceleración angular es directamente proporcional al momento de inercia polar"
        ],
        respuestaCorrecta: 1,
        explicacion: "El teorema del impulso y la cantidad de movimiento (J = Δp) relaciona la integral temporal de la fuerza resultante con la variación de la velocidad multiplicada por la masa."
    },
    {
        id: 22,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué fenómeno describe la falla por fatiga en elementos mecánicos sometidos a cargas cíclicas o fluctuantes?",
        opciones: [
            "A) La deformación plástica instantánea ante la primera aplicación de una carga estática superior al límite elástico",
            "B) El pandeo elástico lateral de columnas esbeltas bajo compresión axial céntrica",
            "C) La pérdida gradual de masa por oxidación química en ambientes salinos",
            "D) La iniciación y propagación progresiva de grietas microscópicas bajo niveles de esfuerzo nominal muy inferiores al límite elástico del material, culminando en una fractura súbita"
        ],
        respuestaCorrecta: 3,
        explicacion: "La fatiga mecánica ocurre bajo cargas repetidas o cíclicas; las grietas se inician en concentradores de esfuerzo y crecen gradualmente hasta provocar una fractura frágil repentina."
    },
    {
        id: 23,
        area: "Transferencia de Calor",
        pregunta: "En un intercambiador de calor de coraza y tubos, ¿cuál es la ventaja principal de utilizar una configuración de flujo cruzado o contraflujo frente a un arreglo de flujos paralelos (paralelos)?",
        opciones: [
            "A) Reducir la caída de presión en el lado de la coraza a cero absoluto",
            "B) Obtener una mayor diferencia de temperatura media logarítmica (DTML), logrando una transferencia térmica más eficiente en menor área de intercambio",
            "C) Permitir que los fluidos alcancen temperaturas de salida idénticas sin importar los caudales",
            "D) Evitar la necesidad de deflectores (baffles) en el haz de tubos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El contraflujo maximiza la diferencia de temperatura media logarítmica a lo largo de todo el intercambiador, permitiendo transferir más calor con menor superficie de transferencia."
    },
    {
        id: 24,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué expresa la ecuación de continuidad para el flujo estacionario de un fluido incompresible en una tubería de sección variable?",
        opciones: [
            "A) Que la presión estática es inversamente proporcional a la densidad del fluido",
            "B) Que la velocidad del fluido es cero en el centro de la tubería",
            "C) Que el caudal volumétrico (Q = A * v) permanece constante a lo largo de todo el conducto",
            "D) Que la pérdida de carga por fricción depende exclusivamente de la altura geométrica"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para fluidos incompresibles (densidad constante), la conservación de la masa se reduce a que el caudal volumétrico A1*v1 = A2*v2 se mantiene constante en cualquier sección."
    },
    {
        id: 25,
        area: "Diseño Mecánico",
        pregunta: "¿Qué función cumple un embrague mecánico (clutch) en los sistemas de transmisión de potencia de vehículos y maquinaria industrial?",
        opciones: [
            "A) Invertir automáticamente el sentido de giro de la flecha de salida sin detener el motor",
            "B) Incrementar la relación de transmisión geométrica en alta velocidad",
            "C) Amortiguar las vibraciones torsionales mediante resortes hidráulicos de alta presión",
            "D) Conectar y desconectar de manera suave y progresiva la transmisión de par motor desde el eje motriz hacia la caja de velocidades"
        ],
        respuestaCorrecta: 3,
        explicacion: "El embrague permite acoplar o desacoplar el motor de la transmisión de potencia mediante fricción controlada, facilitando los cambios de marcha y el arranque estacionario."
    },
    {
        id: 26,
        area: "Manufactura",
        pregunta: "¿Qué es el torneado en los procesos de manufactura por arranque de viruta?",
        opciones: [
            "A) Un método de unión térmica mediante electrodos de tungsteno",
            "B) Un proceso de conformado volumétrico por golpes de martillo neumático",
            "C) Un proceso donde la pieza de trabajo gira sobre un husillo mientras una herramienta de corte de un solo filo se desplaza para remover material cilíndrico",
            "D) La perforación axial de agujeros pasantes mediante brocas helicoidales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El torneado es la operación base en el torno, donde la pieza gira sobre su eje y la herramienta lineal corta el material para generar superficies cilíndricas, cónicas o roscadas."
    },
    {
        id: 27,
        area: "Termodinámica",
        pregunta: "¿Qué describe un ciclo de Carnot operando entre dos fuentes térmicas a temperaturas absolutas T_H y T_C?",
        opciones: [
            "A) El ciclo reversible ideal que establece el límite superior teórico de eficiencia para cualquier máquina térmica que opere entre esas dos temperaturas",
            "B) El ciclo real de máxima potencia alcanzable en motores de combustión interna",
            "C) Un proceso isotérmico donde el calor absorbido es igual al trabajo de compresión",
            "D) Un ciclo de refrigeración con cero consumo de potencia eléctrica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ciclo de Carnot define la eficiencia térmica máxima posible entre dos focos térmicos (η = 1 - T_C / T_H), sirviendo como referencia termodinámica ideal."
    },
    {
        id: 28,
        area: "Dinámica y Vibraciones",
        pregunta: "¿Qué representa el decremento logaritmo en un sistema mecánico con amortiguamiento subamortiguado que experimenta vibraciones libres?",
        opciones: [
            "A) El tiempo exacto que tarda el sistema en detenerse por completo",
            "B) La frecuencia natural no amortiguada en radianes por segundo",
            "C) La rigidez equivalente del elemento elástico",
            "D) La razón natural entre dos amplitudes sucesivas de vibración separadas por un periodo, utilizada para calcular la relación de amortiguamiento"
        ],
        respuestaCorrecta: 3,
        explicacion: "El decremento logarítmico cuantifica la rapidez con la que se atenúan las oscilaciones libres en un sistema subamortiguado, midiéndose como el logaritmo natural de la razón entre amplitudes consecutivas."
    },
    {
        id: 29,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué indica el límite de proporcionalidad en el diagrama esfuerzo-deformación unitaria de un material dúctil ensayado a tensión?",
        opciones: [
            "A) El punto donde el material experimenta estricción localizada y fractura",
            "B) La tensión máxima que soporta el material antes de la cedencia plástica",
            "C) El punto hasta el cual el esfuerzo es estrictamente proporcional a la deformación, cumpliéndose la Ley de Hooke",
            "D) El punto de transición frágil-dúctil a bajas temperaturas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El límite de proporcionalidad señala el punto máximo en el diagrama esfuerzo-deformación donde la curva es una línea recta, validando la linealidad de la Ley de Hooke."
    },
    {
        id: 30,
        area: "Mecánica de Fluidos",
        pregunta: "En el análisis de pérdidas de carga en tuberías, ¿cómo se calculan las pérdidas secundarias o menores (accesorios, válvulas, codos, expansiones)?",
        opciones: [
            "A) Utilizando un coeficiente de pérdida adimensional (K) multiplicado por la carga de velocidad del fluido (v² / 2g)",
            "B) Mediante el factor de fricción de Darcy-Weisbach multiplicado por la longitud total del tubo",
            "C) Como una función lineal exclusiva de la viscosidad cinemática del fluido",
            "D) Dividiendo la presión manométrica entre la aceleración de la gravedad"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pérdidas menores en accesorios y válvulas se modelan mediante el coeficiente de pérdida K asociado a la cabeza de velocidad cinética (h_m = K * v² / 2g)."
    },
    {
        id: 31,
        area: "Diseño Mecánico",
        pregunta: "¿Qué función principal cumplen los engranes rectos o helicoidales en los trenes de transmisión mecánica?",
        opciones: [
            "A) Soportar cargas axiales puras sin transmitir movimiento de rotación",
            "B) Amortiguar las vibraciones torsionales de alta frecuencia en motores diésel",
            "C) Actuar como frenos mecánicos de estacionamiento por fricción",
            "D) Transmitir potencia y movimiento de rotación entre ejes paralelos o cruzados, modificando la velocidad angular y el par motor según su relación de transmisión"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los engranes transmiten par y velocidad de forma positiva (sin deslizamiento) entre ejes, permitiendo desmultiplicar o multiplicar la velocidad angular mediante la relación de dientes."
    },
    {
        id: 32,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe la emisividad térmica de una superficie real en los procesos de transferencia de calor por radiación?",
        opciones: [
            "A) La capacidad del material para conducir calor por unidad de espesor",
            "B) El coeficiente convectivo de transferencia térmica superficial",
            "C) La resistencia eléctrica superficial del componente metálico",
            "D) La razón entre la energía radiada por la superficie real y la energía radiada por un cuerpo negro ideal a la misma temperatura"
        ],
        respuestaCorrecta: 3,
        explicacion: "La emisividad (ε) es un valor adimensional entre 0 y 1 que compara la radiación emitida por una superficie real frente a un emisor ideal o cuerpo negro a idéntica temperatura."
    },
    {
        id: 33,
        area: "Manufactura",
        pregunta: "¿En qué consiste el proceso de fundición en arena (Sand Casting) para la obtención de piezas metálicas?",
        opciones: [
            "A) En vaciar metal fundido dentro de un molde compuesto de arena aglutinada formado a partir de un modelo, el cual se rompe o desmantela tras la solidificación",
            "B) En inyectar metal líquido a alta presión dentro de un molde de acero templado",
            "C) En laminar planchas metálicas mediante rodillos pesados en caliente",
            "D) En extruir barras continuas a través de una matriz de carburo de tungsteno"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fundición en arena utiliza un molde desechable de arena compactada alrededor de un modelo físico; una vez vertido y solidificado el metal, el molde se destruye para extraer la pieza."
    },
    {
        id: 34,
        area: "Termodinámica",
        pregunta: "¿Qué representa el coeficiente de desempeño (COP) en una bomba de calor o sistema de refrigeración?",
        opciones: [
            "A) La eficiencia térmica dividida entre el trabajo neto de entrada",
            "B) La masa de refrigerante circulante por segundo en el evaporador",
            "C) La relación entre el efecto útil deseado (calor extraído o calor suministrado) y el trabajo neto de entrada suministrado al compresor",
            "D) La caída de presión en la válvula de expansión termostática"
        ],
        respuestaCorrecta: 2,
        explicacion: "El COP mide la eficiencia de sistemas de refrigeración o bombas de calor, calculándose como el cociente entre la energía útil transferida y el trabajo eléctrico de entrada al compresor."
    },
    {
        id: 35,
        area: "Dinámica",
        pregunta: "¿Cómo se define el centro de masa de un cuerpo rígido tridimensional de geometría irregular?",
        opciones: [
            "A) El punto medio de la longitud longitudinal máxima de la pieza",
            "B) El punto geométrico donde se concentra la suma ponderada de las posiciones de todos los elementos de masa del cuerpo, equilibrando los momentos de masa",
            "C) El punto de mayor concentración de esfuerzos mecánicos bajo tracción",
            "D) El centro geométrico de la envolvente cilíndrica exterior del objeto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El centro de masa es el punto único donde se puede suponer concentrada toda la masa del cuerpo para efectos de la segunda ley de Newton en traslación."
    },
    {
        id: 36,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe el segundo momento de área (momento de inercia de área, I) de una sección transversal respecto a un eje neutro?",
        opciones: [
            "A) La masa total de la viga dividida entre su longitud libre",
            "B) La capacidad del material para resistir la corrosión química",
            "C) El área neta de la sección transversal menos los agujeros de pernos",
            "D) La resistencia geométrica de la sección a la deformación por flexión"
        ],
        respuestaCorrecta: 3,
        explicacion: "El segundo momento de área (I) cuantifica cómo se distribuye el área de la sección transversal respecto a un eje, determinando directamente la rigidez a flexión y deflexión de vigas."
    },
    {
        id: 37,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué establece el Teorema de Transportes de Reynolds en la formulación de las leyes de la mecánica de fluidos?",
        opciones: [
            "A) Proporciona la relación matemática para convertir leyes físicas expresadas para un sistema de masa fija en formulaciones aplicables a un volumen de control",
            "B) Demuestra que la viscosidad de los fluidos no Newtonianos es independiente del gradiente de velocidad",
            "C) Calcula las pérdidas térmicas en paredes cilíndricas compuestas",
            "D) Determina la velocidad supersónica en toberas convergentes-divergentes"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de transporte de Reynolds es la base matemática que permite derivar las ecuaciones de conservación de masa, cantidad de movimiento y energía para volúmenes de control."
    },
    {
        id: 38,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función de los elementos de unión roscados (tornillos y pernos) pretensionados en ensamblajes mecánicos sometidos a cargas dinámicas de tracción?",
        opciones: [
            "A) Asegurar que el tornillo soporte el 100% de la carga externa aplicada cíclicamente",
            "B) Permitir que las piezas unidas se separen libremente al alcanzar la temperatura ambiente",
            "C) Incrementar el momento torsor de apriete hasta deformar plásticamente la cuerda",
            "D) Proveer una fuerza de sujeción inicial alta (precarga) que minimice la variación de esfuerzo en el tornillo ante cargas externas variables, previniendo la falla por fatiga"
        ],
        respuestaCorrecta: 3,
        explicacion: "Aplicar una precarga adecuada en pernos sometidos a fatiga reduce drásticamente el rango de variación de esfuerzos en el tornillo, protegiéndolo contra fallas por fatiga."
    },
    {
        id: 39,
        area: "Manufactura",
        pregunta: "¿Qué es el control numérico computarizado (CNC) aplicado en las máquinas herramientas de manufactura?",
        opciones: [
            "A) Un sistema donde los movimientos de corte y velocidad de la máquina son controlados directamente por un programa de computadora con instrucciones codificadas (código G y M)",
            "B) Un método de inspección dimensional mediante rayos X",
            "C) Un sistema manual de palancas hidráulicas para tornos paralelos convencionales",
            "D) Una técnica de soldadura por resistencia eléctrica automatizada"
        ],
        respuestaCorrecta: 0,
        explicacion: "El CNC automatiza el maquinado mediante la interpretación computarizada de programas numéricos (códigos G/M), garantizando alta precisión, repetibilidad y geometrías complejas."
    },
    {
        id: 40,
        area: "Termodinámica",
        pregunta: "¿Qué representa una propiedad termodinámica intensiva?",
        opciones: [
            "A) Aquella propiedad cuyo valor depende de la masa o tamaño total del sistema termodinámico",
            "B) La energía total almacenada en el centro de masa del fluido",
            "C) El calor específico acumulado en un proceso adiabático",
            "D) Aquella propiedad cuyo valor es independiente de la masa o tamaño del sistema (como la temperatura, presión o densidad)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las propiedades intensivas (temperatura, presión, densidad) no dependen de la cantidad de materia del sistema, a diferencia de las extensivas (masa, volumen total, energía total)."
    },
    {
        id: 41,
        area: "Dinámica",
        pregunta: "¿Cómo se define el rendimiento mecánico o eficiencia de una máquina simple o sistema de transmisión de potencia?",
        opciones: [
            "A) El cociente de la velocidad angular de salida entre la velocidad angular de entrada",
            "B) La relación entre el momento de inercia del motor y la masa de la carga",
            "C) La potencia o trabajo útil de salida dividida entre la potencia o trabajo total suministrado de entrada",
            "D) Las pérdidas totales por fricción divididas entre el trabajo útil"
        ],
        respuestaCorrecta: 2,
        explicacion: "La eficiencia mecánica cuantifica la efectividad energética de un mecanismo como la razón entre la energía útil obtenida y la energía consumida (P_salida / P_entrada)."
    },
    {
        id: 42,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe el círculo de Mohr en el análisis bidimensional de esfuerzos planos?",
        opciones: [
            "A) Una representación gráfica que permite determinar de forma geométrica los esfuerzos principales, el esfuerzo cortante máximo y los esfuerzos en cualquier plano inclinado",
            "B) La trayectoria elíptica de las partículas fluidas en un flujo turbulento",
            "C) La distribución de temperaturas en cilindros huecos con generación de calor interno",
            "D) El límite de fatiga de los aceros aleados bajo cargas reversibles"
        ],
        respuestaCorrecta: 0,
        explicacion: "El círculo de Mohr es una herramienta gráfica analítica basada en transformaciones trigonométricas para visualizar y calcular esfuerzos normales y cortantes en planos rotados."
    },
    {
        id: 43,
        area: "Transferencia de Calor",
        pregunta: "¿Qué establece la ley de Stefan-Boltzmann para la transferencia de calor por radiación térmica emitida por un cuerpo negro ideal?",
        opciones: [
            "A) Que la potencia radiada depende linealmente de la diferencia de temperaturas con el ambiente",
            "B) Que la longitud de onda de máxima emisión es independiente de la temperatura",
            "C) Que la emisividad espectral es igual a cero en el espectro visible",
            "D) Que el flujo radiativo es directamente proporcional a la cuarta potencia de la temperatura absoluta del cuerpo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La ley de Stefan-Boltzmann establece que el poder emisivo total de un cuerpo negro es proporcional a la cuarta potencia de su temperatura absoluta (E = σ * T⁴)."
    },
    {
        id: 44,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué indica la línea de alturas totales (línea de energía) en comparación con la línea de alturas piezométricas en el análisis de tuberías?",
        opciones: [
            "A) La línea de energía se encuentra siempre por encima de la línea piezométrica en una magnitud igual a la carga de velocidad (v² / 2g) del fluido en movimiento",
            "B) Ambas líneas coinciden exactamente sin importar la velocidad del fluido",
            "C) La línea piezométrica incluye la energía cinética y la de energía se limita a la presión",
            "D) La línea de energía desciende en el sentido del flujo debido a la presión estática ganada"
        ],
        respuestaCorrecta: 0,
        explicacion: "La línea de energía suma la cota geométrica, la presión y la velocidad, mientras que la piezométrica solo incluye cota y presión; la diferencia vertical es la carga de velocidad v² / 2g."
    },
    {
        id: 45,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de los resortes mecánicos helicoidales de compresión en los mecanismos de suspensión y válvulas de motores?",
        opciones: [
            "A) Transmitir pares torsores elevados entre ejes desalineados",
            "B) Reducir la velocidad de rotación mediante fricción en seco",
            "C) Almacenar energía mecánica de deformación elástica y liberarla de forma controlada para absorber impactos o mantener contacto entre componentes",
            "D) Soportar cargas axiales permanentes sin experimentar ninguna deformación"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los resortes helicoidales almacenan energía potencial elástica mediante torsión del alambre al ser comprimidos, restituyendo dicha fuerza al cesar la carga."
    },
    {
        id: 46,
        area: "Manufactura",
        pregunta: "¿Qué describe el proceso de soldadura por fricción (Friction Welding) en la unión de metales?",
        opciones: [
            "A) Un proceso por arco eléctrico protegido con gas inerte de tungsteno",
            "B) La unión de chapas mediante la fusión de un metal de aporte con bajo punto de fusión (soldadura blanda)",
            "C) Un método de corte por chorro de agua abrasiva a ultra alta presión",
            "D) Un proceso de estado sólido donde la energía térmica necesaria para unir las piezas se genera mediante el frotamiento mecánico entre una pieza rotatoria y otra fija bajo presión axial"
        ],
        respuestaCorrecta: 3,
        explicacion: "La soldadura por fricción une metales en estado sólido aprovechando el calor generado por la fricción mecánica al rotar una pieza contra otra, seguido de una fuerza de forjado."
    },
    {
        id: 47,
        area: "Termodinámica",
        pregunta: "¿Qué indica un proceso politrópico en gases ideales cuando el exponente politrópico (n) es igual a cero (n = 0)?",
        opciones: [
            "A) Un proceso isobárico (a presión constante)",
            "B) Un proceso isotérmico (a temperatura constante)",
            "C) Un proceso adiabático reversible (isentrópico)",
            "D) Un proceso isocórico (a volumen constante)"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la ecuación general politrópica P*V^n = C, si n = 0, la presión permanece constante (P = C), correspondiendo a un proceso isobárico."
    },
    {
        id: 48,
        area: "Dinámica y Vibraciones",
        pregunta: "¿Qué es la frecuencia natural de un sistema mecánico oscilatorio de un grado de libertad?",
        opciones: [
            "A) La velocidad máxima de rotación del motor de accionamiento",
            "B) La frecuencia a la cual el sistema oscila libremente después de ser perturbado sin la presencia de fuerzas externas de excitación ni amortiguamiento",
            "C) El número de ciclos por segundo inducidos por una fuerza armónica externa",
            "D) La velocidad crítica de pandeo estático en columnas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La frecuencia natural caracteriza la oscilación libre no amortiguada del sistema, determinada exclusivamente por su masa e inercia frente a su rigidez elástica."
    },
    {
        id: 49,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué representa el módulo de rigidez (módulo de corte, G) en los materiales elásticos lineales?",
        opciones: [
            "A) La capacidad del material para soportar cargas axiales de tensión pura",
            "B) La pendiente de la zona plástica en ensayos de compresión",
            "C) El cociente entre el volumen inicial y el volumen final deformado",
            "D) La relación entre el esfuerzo cortante y la deformación unitaria por cortante (distorsión angular)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El módulo de corte G relaciona el esfuerzo cortante aplicado con la deformación angular resultante en el plano de cizalladura (τ = G * γ)."
    },
    {
        id: 50,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué describe la paradoja hidrostática en recipientes llenos de líquido estático?",
        opciones: [
            "A) Que la fuerza total sobre el fondo es menor que el peso del líquido contenido",
            "B) Que la presión en el fondo de un recipiente depende exclusivamente de la altura de la columna de líquido y de su densidad, siendo totalmente independiente de la forma geométrica o volumen total del recipiente",
            "C) Que la presión atmosférica se anula en la superficie libre del depósito",
            "D) Que los fluidos incompresibles experimentan compresión volumétrica bajo su propio peso"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paradoja hidrostática estipula que la presión en la base de una columna líquida depende únicamente de la profundidad (h) y la densidad, no de la forma del recipiente."
    },
    {
        id: 51,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de los árboles de transmisión (flechas) en maquinaria industrial?",
        opciones: [
            "A) Soportar exclusivamente cargas axiales estáticas sin rotación",
            "B) Transmitir par torsor (torque) y movimiento de rotación entre elementos de soporte como engranes, poleas y volantes",
            "C) Disipar la energía térmica generada por fricción en cojinetes",
            "D) Medir la velocidad angular mediante sensores magnéticos integrados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los ejes y árboles de transmisión están diseñados primordialmente para soportar esfuerzos combinados de torsión y flexión mientras transmiten potencia rotacional."
    },
    {
        id: 52,
        area: "Transferencia de Calor",
        pregunta: "¿Qué representa el número adimensional de Biot (Bi) en problemas de transferencia de calor transitoria en cuerpos sólidos?",
        opciones: [
            "A) La relación entre la resistencia térmica interna a la conducción en el sólido y la resistencia térmica externa a la convección en su superficie",
            "B) El cociente de la velocidad del fluido entre su conductividad térmica",
            "C) La razón entre la radiación emitida y la convección forzada",
            "D) La proporción de calor latente frente al calor sensible en cambio de fase"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número de Biot compara la resistencia interna a la conducción frente a la resistencia externa por convección; si Bi < 0.1, se puede aplicar el método de análisis de capacidad global."
    },
    {
        id: 53,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de conformado metálico conocido como forja (Forging)?",
        opciones: [
            "A) El metal se funde y vacía en moldes cerámicos de alta precisión",
            "B) Se eliminan virutas metálicas mediante herramientas de corte multicorte",
            "C) Se unen placas mediante fusión por arco eléctrico protegido",
            "D) El metal se deforma plásticamente mediante la aplicación de fuerzas de compresión sucesivas utilizando martillos, prensas o troqueles, mejorando su estructura grano-metálica"
        ],
        respuestaCorrecta: 3,
        explicacion: "La forja deforma el metal por compresión (martilleo o prensado), refinando la estructura de grano y otorgando excelentes propiedades mecánicas y resistencia estructural."
    },
    {
        id: 54,
        area: "Termodinámica",
        pregunta: "¿Qué establece la Primera Ley de la Termodinámica aplicada a un sistema cerrado (balance de energía)?",
        opciones: [
            "A) Que todo el calor absorbido de una fuente caliente se convierte íntegramente en trabajo mecánico",
            "B) Que la energía total no se crea ni se destruye, solo se transforma; el cambio de energía interna del sistema es igual al calor neto añadido menos el trabajo neto realizado por el sistema",
            "C) Que la entropía de un sistema aislado disminuye espontáneamente con el tiempo",
            "D) Que la entalpía específica permanece constante en procesos isotérmicos de gases ideales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Primera Ley es el principio de conservación de la energía para sistemas termodinámicos: ΔU = Q - W (para calor añadido y trabajo realizado por el sistema)."
    },
    {
        id: 55,
        area: "Dinámica",
        pregunta: "¿Qué describe el principio de D'Alembert en la dinámica de cuerpos rígidos y mecanismos?",
        opciones: [
            "A) Convierte un problema dinámico de aceleración en un problema equivalente de estática mediante la introducción de fuerzas de inercia ficticias",
            "B) Establece la conservación del momento angular en ausencia de torques externos",
            "C) Define el trabajo virtual realizado por las fuerzas conservativas en equilibrio",
            "D) Calcula la fricción estática máxima en superficies inclinadas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de D'Alembert plantea que la suma de las fuerzas reales más la fuerza de inercia (F - m*a = 0) es igual a cero, permitiendo aplicar ecuaciones de estática a sistemas dinámicos."
    },
    {
        id: 56,
        area: "Mecánica de Materiales",
        pregunta: "¿Cuál es el propósito de aplicar el criterio de cedencia de Tresca (esfuerzo cortante máximo) en el diseño de componentes mecánicos dúctiles?",
        opciones: [
            "A) Calcular la máxima deflexión elástica en vigas simplemente apoyadas",
            "B) Determinar la resistencia a la compresión hidrostática en recipientes de pared gruesa",
            "C) Evaluar la tenacidad a la fractura frágil a bajas temperaturas",
            "D) Predecir la falla por fluencia plástica basándose en que la cedencia ocurre cuando el esfuerzo cortante máximo en el elemento alcanza la mitad del límite elástico en tracción uniaxial"
        ],
        respuestaCorrecta: 3,
        explicacion: "El criterio de Tresca establece que la cedencia se produce cuando el esfuerzo cortante máximo absoluto alcanza el valor crítico de fluencia cortante del material (τ_max = Sy / 2)."
    },
    {
        id: 57,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué representa la línea de gradiente hidráulico (línea piezométrica) en una instalación de tuberías?",
        opciones: [
            "A) La suma de la altura geométrica (z) y la altura de presión (P / γ) a lo largo del sistema",
            "B) La energía total disponible incluyendo la altura de velocidad del fluido",
            "C) La caída de presión provocada exclusivamente por la válvula de control principal",
            "D) La velocidad media del fluido multiplicada por la sección transversal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La línea piezométrica representa la energía de posición (z) más la energía de presión (P/γ), omitiendo el término de energía cinética de velocidad."
    },
    {
        id: 58,
        area: "Diseño Mecánico",
        pregunta: "¿Qué función cumplen las cuñas (chavetas) y los acoplamientos por ranuras (splines) en los ejes de transmisión de potencia?",
        opciones: [
            "A) Soportar cargas axiales extremas en sentido longitudinal",
            "B) Sellar herméticamente fugas de aceite lubricante en los cojinetes",
            "C) Permitir la unión desmontable entre un eje rotatorio y un elemento de transmisión (como un engrane o polea) para transmitir par torsor sin deslizamiento tangencial",
            "D) Reducir la velocidad angular de salida a cero de manera automática"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las chavetas y estrías son elementos de unión desmontables que engranan mecánicamente el eje con la maza de poleas o engranes para asegurar la transmisión de torque."
    },
    {
        id: 59,
        area: "Transferencia de Calor",
        pregunta: "¿Qué representa el coeficiente global de transferencia de calor (U) en paredes planas o cilíndricas compuestas?",
        opciones: [
            "A) La conductividad térmica exclusiva del material metálico más denso",
            "B) La inversa de la suma de todas las resistencias térmicas individuales (convección, conducción y contacto) presentes en el sistema compuesto",
            "C) La cantidad de calor radiado por unidad de superficie en el vacío",
            "D) La viscosidad dinámica del fluido multiplicada por el número de Nusselt"
        ],
        respuestaCorrecta: 1,
        explicacion: "El coeficiente global U agrupa la inversa de la suma de resistencias térmicas (convección interna, conducción por capas y convección externa) en un sistema de transferencia de calor compuesto."
    },
    {
        id: 60,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de soldadura por arco con gas protector e hilo tubular (FCAW - Flux-Cored Arc Welding)?",
        opciones: [
            "A) Utiliza un electrodo tubular continuo que contiene un fundente en su interior, el cual puede requerir o no un gas de protección externo auxiliar para blindar el arco",
            "B) Se basa en la fusión de metales mediante electrodos de tungsteno no consumibles sin gas",
            "C) Utiliza varillas revestidas manuales operadas por operarios especializados en taller",
            "D) Es un proceso exclusivamente automatizado por láser de alta potencia en vacío"
        ],
        respuestaCorrecta: 0,
        explicacion: "El proceso FCAW emplea un alambre tubular continuo con fundente interno, combinando las ventajas del autoblindaje de escoria con la alta productividad de la alimentación continua de alambre."
    },
    {
        id: 61,
        area: "Termodinámica",
        pregunta: "¿Cómo se define la entropía (S) desde el punto de vista de la termodinámica estadística y macroscópica?",
        opciones: [
            "A) La cantidad de calor total almacenada en el centro de gravedad del gas ideal",
            "B) La capacidad del fluido para transferir calor por convección forzada",
            "C) Una medida cuantitativa del grado de desorden molecular o de la indisponibilidad de la energía de un sistema para realizar trabajo útil en un proceso reversible",
            "D) El trabajo neto desarrollado por ciclo en una máquina térmica ideal"
        ],
        respuestaCorrecta: 2,
        explicacion: "La entropía termodinámica mide la irreversibilidad de los procesos y el grado de dispersión o desorden de la energía molecular en un sistema."
    },
    {
        id: 62,
        area: "Dinámica y Control",
        pregunta: "¿Qué función cumple un actuador neumático o hidráulico en los sistemas de automatización industrial mecánica?",
        opciones: [
            "A) Generar energía eléctrica a partir de la combustión interna de diésel",
            "B) Medir con precisión micrométrica las dimensiones de piezas maquinadas",
            "C) Filtrar partículas contaminantes y humedad en las líneas de lubricación",
            "D) Convertir la energía de presión de un fluido de trabajo (aire o aceite) en energía mecánica de trabajo (movimiento lineal o rotatorio)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los actuadores neumáticos e hidráulicos (cilindros y motores de fluido) transforman la presión hidráulica o neumática en fuerza y movimiento mecánico para realizar trabajo útil."
    },
    {
        id: 63,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe el fenómeno de pandeo (buckling) en elementos estructurales esbeltos?",
        opciones: [
            "A) Una falla súbita por flexión lateral e inestabilidad elástica experimentada por columnas y barras cuando se someten a cargas axiales de compresión que superan la carga crítica de Euler",
            "B) La estricción plástica y estiramiento longitudinal bajo tracción uniaxial extrema",
            "C) La fractura frágil por impacto a temperaturas bajo cero",
            "D) El desgaste abrasivo por fricción en cojinetes de empuje"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pandeo es una falla por inestabilidad geométrica donde elementos esbeltos bajo compresión se flexionan lateralmente de forma repentina al alcanzar la carga crítica de Euler."
    },
    {
        id: 64,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué establece la ecuación de la cantidad de movimiento (momentum lineal) derivada del Teorema de Transportes de Reynolds para volúmenes de control?",
        opciones: [
            "A) Que la presión estática es independiente de la velocidad del fluido en régimen permanente",
            "B) Que las pérdidas por fricción en codos son proporcionales al cuadrado de la viscosidad",
            "C) Que el caudal másico se conserva constante sin importar el área de flujo",
            "D) Que la suma vectorial de todas las fuerzas externas que actúan sobre un volumen de control es igual al flujo neto de cantidad de movimiento a través de las superficies de control más la variación temporal interna"
        ],
        respuestaCorrecta: 3,
        explicacion: "La ecuación de momentum (segunda ley de Newton aplicada a volúmenes de control) iguala la resultante de fuerzas externas con la tasa de cambio y flujo neto de cantidad de movimiento."
    },
    {
        id: 65,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es el propósito fundamental de utilizar reductores de velocidad de engranajes (cajas reductoras) acoplados a motores eléctricos de alta velocidad?",
        opciones: [
            "A) Reducir la eficiencia global del sistema para disipar energía excedente",
            "B) Soportar cargas radiales infinitas sin necesidad de rodamientos de apoyo",
            "C) Eliminar por completo las vibraciones armónicas en los acoplamientos flexibles",
            "D) Incrementar el par motor (torque) de salida de manera inversamente proporcional a la reducción de la velocidad angular, adaptando la potencia del motor a los requerimientos de la carga"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los reductores disminuyen la velocidad de giro proveniente del motor a la vez que multiplican el par torsor disponible en el eje de salida (T_salida = T_entrada * relación * eficiencia)."
    },
    {
        id: 66,
        area: "Transferencia de Calor",
        pregunta: "¿Qué representa el número adimensional de Nusselt (Nu) en la transferencia de calor por convección?",
        opciones: [
            "A) La relación entre la transferencia de calor por convección real y la transferencia de calor por conducción pura a través de la misma capa de fluido",
            "B) El cociente de las fuerzas viscosas frente a las fuerzas de flotación en convección natural",
            "C) La proporción entre la capacidad calorífica del fluido y la conductividad térmica del sólido",
            "D) La relación entre la difusividad térmica y la viscosidad cinemática"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número de Nusselt adimensionaliza el coeficiente convectivo de transferencia de calor h, comparándolo con la conducción térmica pura a través de la capa límite del fluido."
    },
    {
        id: 67,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de maquinado por electroerosión (EDM - Electrical Discharge Machining)?",
        opciones: [
            "A) Corta metales mediante un chorro de gas caliente a presión supersónica",
            "B) Utiliza una sierra cinta bimetálica para cortes rectos en perfiles estructurales",
            "C) Remueve material mediante descargas eléctricas (chispas controladas) sucesivas entre un electrodo y la pieza de trabajo sumergidos en un líquido dieléctrico, ideal para materiales duros",
            "D) Funde el metal mediante inducción electromagnética de alta frecuencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "La electroerosión (EDM) erosiona materiales conductores complejos y de extrema dureza (como aceros templados o carburos) mediante descargas eléctricas controladas en medio dieléctrico."
    },
    {
        id: 68,
        area: "Termodinámica",
        pregunta: "¿Qué describe un proceso isotérmico en un gas ideal contenido en un sistema cerrado?",
        opciones: [
            "A) Un proceso donde la temperatura permanece constante, por lo que el cambio de energía interna es cero (ΔU = 0) y el calor transferido es igual al trabajo realizado por el gas (Q = W)",
            "B) Un proceso donde no hay transferencia de calor con el entorno (Q = 0)",
            "C) Un proceso a presión constante donde el volumen varía linealmente",
            "D) Un proceso a volumen constante donde todo el calor se convierte en energía cinética"
        ],
        respuestaCorrecta: 0,
        explicacion: "En un proceso isotérmico de gas ideal, al ser T constante la energía interna no varía (ΔU = 0), cumpliendo por la Primera Ley que todo el calor suministrado se convierte en trabajo (Q = W)."
    },
    {
        id: 69,
        area: "Dinámica",
        pregunta: "¿Cómo se define la potencia mecánica instantánea transmitida por un torque (par motor) T que actúa sobre un eje que gira a una velocidad angular ω?",
        opciones: [
            "A) El cociente del torque entre el cuadrado de la velocidad angular",
            "B) La integral temporal del momento de inercia dividida entre el radio",
            "C) La suma de la fuerza tangencial más la aceleración centrípeta",
            "D) El producto directo del torque por la velocidad angular (P = T * ω)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La potencia mecánica en rotación se calcula multiplicando el par torsor T (en N*m) por la velocidad angular ω (en rad/s), resultando en watts (W)."
    },
    {
        id: 70,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe la estricción (necking) en una probeta de metal dúctil ensayada a tracción más allá de su resistencia última?",
        opciones: [
            "A) El incremento elástico del diámetro de la barra bajo compresión hidrostática",
            "B) Una reducción localizada y repentina de la sección transversal de la probeta que ocurre tras alcanzar la carga máxima, precediendo a la fractura final",
            "C) La formación de grietas por fatiga térmica en superficies expuestas a ciclos de alta temperatura",
            "D) El endurecimiento por deformación en frío (trabajo en frío)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estricción es la concentración de la deformación plástica en una zona local de la barra, reduciendo drásticamente su área transversal antes de la rotura definitiva."
    },
    {
        id: 71,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué expresa la ecuación de Darcy-Weisbach para el cálculo de pérdidas de carga continuas (primarias) en tuberías rectilíneas?",
        opciones: [
            "A) Que la pérdida de carga por fricción es directamente proporcional al factor de fricción y a la longitud de la tubería, e inversamente proporcional al diámetro y a la carga de velocidad",
            "B) Que la pérdida de carga depende exclusivamente de la presión estática inicial del depósito",
            "C) Que las pérdidas son independientes de la velocidad media del flujo y del régimen de escorrentía",
            "D) Que la caída de presión es igual a la viscosidad dinámica dividida entre el caudal volumétrico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de Darcy-Weisbach (h_f = f * (L/D) * (v² / 2g)) es universal para calcular pérdidas primarias por fricción en cualquier régimen de flujo en tuberías."
    },
    {
        id: 72,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es el propósito fundamental de utilizar un volante de inercia (flywheel) en motores de combustión interna o prensas mecánicas?",
        opciones: [
            "A) Reducir la relación de transmisión global de la caja de velocidades automática",
            "B) Soportar el peso estático de todo el bloque del motor sin experimentar pandeo",
            "C) Almacenar energía cinética durante las carreras motrices o de trabajo y liberarla para suavizar las fluctuaciones cíclicas de velocidad y par en el eje",
            "D) Actuar como freno hidráulico de emergencia en caso de sobrevelocidad"
        ],
        respuestaCorrecta: 2,
        explicacion: "El volante de inercia almacena y libera energía cinética gracias a su gran momento de inercia másico, regularizando las fluctuaciones de velocidad en máquinas con ciclos de trabajo discontinuos."
    },
    {
        id: 73,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe el número adimensional de Prandtl (Pr) en los fluidos sometidos a transferencia de calor?",
        opciones: [
            "A) El cociente de la velocidad de flujo frente a la velocidad del sonido",
            "B) La proporción entre la conducción térmica sólida y la convección forzada",
            "C) La relación entre la presión estática y la presión de vapor",
            "D) La relación entre la difusividad de momento (viscosidad cinemática) y la difusividad térmica del fluido"
        ],
        respuestaCorrecta: 3,
        explicacion: "El número de Prandtl agrupa propiedades termofísicas del fluido (Pr = ν / α), relacionando el grosor relativo de la capa límite hidrodinámica frente a la capa límite térmica."
    },
    {
        id: 74,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de conformado metálico conocido como embutido profundo (Deep Drawing)?",
        opciones: [
            "A) Se extruye metal caliente a través de dados circulares para formar tubos sin costura",
            "B) Una lámina metálica plana es conformada tridimensionalmente mediante un punzón que la empuja hacia el interior de una matriz, transformándola en una pieza hueca en forma de copa o recipiente",
            "C) Se cortan placas metálicas mediante cizallas de alta velocidad",
            "D) Se unen perfiles estructurales mediante soldadura por resistencia de puntos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El embutido profundo conforma láminas planas en recipientes tridimensionales huecos (como latas o ollas) mediante la acción combinada de un punzón y un pisador sobre una matriz."
    },
    {
        id: 75,
        area: "Termodinámica",
        pregunta: "¿Qué establece el principio de incremento de entropía para cualquier proceso termodinámico que ocurra en un sistema aislado?",
        opciones: [
            "A) Que la entropía del sistema aislado siempre aumenta en los procesos irreversibles y permanece constante en los procesos reversibles ideales (ΔS_aislado ≥ 0)",
            "B) Que la entropía total disminuye espontáneamente al enfriarse el sistema",
            "C) Que la energía interna se destruye en forma de calor disipado",
            "D) Que el rendimiento térmico de una máquina real supera el 100%"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de incremento de entropía indica que la entropía de un sistema aislado nunca disminuye; es una formulación matemática universal de la Segunda Ley de la Termodinámica."
    },
    {
        id: 76,
        area: "Dinámica",
        pregunta: "¿Qué describe la conservación de la energía mecánica para un sistema conservativo de partículas o cuerpos rígidos?",
        opciones: [
            "A) Que el trabajo de las fuerzas disipativas externas es siempre positivo",
            "B) Que la cantidad de movimiento lineal se incrementa de forma cuadrática",
            "C) Que la suma de la energía cinética y la energía potencial gravitatoria/elástica permanece constante a lo largo del movimiento (E_k + E_p = constante)",
            "D) Que la velocidad angular es independiente del momento de inercia"
        ],
        respuestaCorrecta: 2,
        explicacion: "En ausencia de fuerzas no conservativas (como fricción o resistencia aerodinámica), la energía mecánica total del sistema permanece invariable en el tiempo."
    },
    {
        id: 77,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué representa el módulo de resiliencia de un material en ensayos de tracción?",
        opciones: [
            "A) La energía total absorbida hasta la fractura frágil por impacto",
            "B) La dureza superficial frente a la rayadura",
            "C) La resistencia última a la compresión hidrostática",
            "D) La cantidad máxima de energía de deformación elástica que el material puede absorber por unidad de volumen antes de alcanzar el límite elástico"
        ],
        respuestaCorrecta: 3,
        explicacion: "El módulo de resiliencia se calcula como el área bajo la curva esfuerzo-deformación desde el origen hasta el límite elástico, representando la energía elástica recuperable almacenada."
    },
    {
        id: 78,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué indica un número de Mach (Ma) mayor que la unidad (Ma > 1) en la aerodinámica o flujo de gases compresibles a través de toberas?",
        opciones: [
            "A) Que el flujo es subsónico y la velocidad es inferior a la del sonido",
            "B) Que el fluido es incompresible y la densidad es infinitamente grande",
            "C) Que se ha alcanzado el bloqueo sónico exactamente en la garganta de la tobera",
            "D) Que el flujo es supersónico, viajando el gas a una velocidad superior a la velocidad de propagación acústica en ese medio"
        ],
        respuestaCorrecta: 3,
        explicacion: "El número de Mach relaciona la velocidad del fluido con la del sonido (Ma = v / c). Si Ma > 1, el flujo es supersónico; si Ma = 1, es sónico."
    },
    {
        id: 79,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de los sellos mecánicos y retenes de aceite en conjuntos rotativos con flechas y cojinetes?",
        opciones: [
            "A) Evitar la fuga de fluidos lubricantes hacia el exterior y prevenir la entrada de contaminantes externos (polvo, humedad, partículas) al interior del mecanismo",
            "B) Soportar las cargas radiales extremas de los engranes helicoidales",
            "C) Transmitir el par torsor principal desde el motor eléctrico",
            "D) Incrementar la rigidez torsional del eje principal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los sellos y retenes retienen el lubricante dentro de las cajas de rodamientos o reductores e impiden que agentes externos contaminen el mecanismo interno."
    },
    {
        id: 80,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe el mecanismo de transferencia de calor por convección térmica?",
        opciones: [
            "A) La emisión exclusiva de ondas electromagnéticas en el vacío absoluto",
            "B) El intercambio térmico que ocurre entre una superficie sólida y un fluido en movimiento (líquido o gas), combinando los efectos de conducción molecular y advección masiva",
            "C) La conducción pura a través de redes cristalinas metálicas estáticas",
            "D) El cambio de fase sin variación de temperatura en sustancias puras"
        ],
        respuestaCorrecta: 1,
        explicacion: "La convección combina la conducción térmica en las proximidades de la superficie sólida con el movimiento macroscópico del fluido (advección) que transporta la energía."
    },
    {
        id: 81,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de moldeo por inyección de polímeros (plásticos)?",
        opciones: [
            "A) Se extruyen tubos continuos sumergidos en agua fría",
            "B) Se lamina el plástico mediante rodillos pesados a temperatura ambiente",
            "C) Se funde el polímero en moldes de arena desechables",
            "D) El material polimérico en perlas o granos es fundido en un cilindro calefactor con husillo reciprocante e inyectado a alta presión dentro de un molde metálico cerrado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El moldeo por inyección plastifica polímeros mediante calor y fricción de husillo, inyectándolos a alta presión en moldes cerrados para producir piezas plásticas complejas en serie."
    },
    {
        id: 82,
        area: "Termodinámica",
        pregunta: "¿Qué representa la entalpía (H) de una sustancia en los balances energéticos de sistemas abiertos (volúmenes de control)?",
        opciones: [
            "A) La energía interna del sistema más el producto de la presión por el volumen (H = U + P*V), representando la energía total asociada al flujo de masa",
            "B) El calor específico a volumen constante dividido entre la temperatura",
            "C) La energía cinética macroscópica del centro de masa del volumen de control",
            "D) El trabajo neto de eje desarrollado por las turbinas adiabáticas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La entalpía H agrupa la energía interna U y la energía de flujo P*V, siendo la propiedad fundamental para analizar la energía transportada por flujos másicos en volúmenes de control."
    },
    {
        id: 83,
        area: "Dinámica y Vibraciones",
        pregunta: "¿Qué es el aislamiento de vibraciones en maquinaria industrial rotativa?",
        opciones: [
            "A) El incremento de la velocidad de giro por encima de la frecuencia de resonancia",
            "B) La implementación de elementos elásticos (como soportes de resortes o elastómeros) entre la máquina y la cimentación para reducir la transmisión de fuerzas dinámicas o proteger equipos sensibles",
            "C) La lubricación forzada de los cojinetes con aceite sintético de alta viscosidad",
            "D) La rigidez infinita de la estructura de soporte de concreto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El aislamiento de vibraciones utiliza soportes flexibles (amortiguadores, resortes, caucho) para evitar que las fuerzas armónicas de una máquina se transmitan a la estructura circundante."
    },
    {
        id: 84,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe la ley de transformación de esfuerzos planos cuando se calculan los esfuerzos principales?",
        opciones: [
            "A) Los planos principales son aquellos donde los esfuerzos cortantes son estrictamente nulos, alcanzando los esfuerzos normales sus valores máximos y mínimos absolutos",
            "B) Los esfuerzos cortantes máximos ocurren siempre en los mismos planos donde los esfuerzos normales son máximos",
            "C) La traza del círculo de Mohr es independiente de la orientación de los ejes coordenados",
            "D) El esfuerzo cortante máximo es igual al promedio de los esfuerzos principales"
        ],
        respuestaCorrecta: 0,
        explicacion: "Por definición geométrica y analítica, en los planos principales de esfuerzo el cortante es cero y los esfuerzos normales alcanzan sus valores extremos (principales σ_1 y σ_2)."
    },
    {
        id: 85,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué establece la paradoja de d'Alembert en la hidrodinámica teórica clásica de fluidos ideales (no viscosos)?",
        opciones: [
            "A) Que la fuerza de sustentación en perfiles aerodinámicos es inversamente proporcional a la densidad",
            "B) Que la presión en el punto de estancamiento es menor que la presión estática libre",
            "C) Que un cuerpo sumergido que se mueve con velocidad constante a través de un fluido ideal perfecto e incompresible no experimenta ninguna fuerza de arrastre (resistencia aerodinámica neta igual a cero)",
            "D) Que las pérdidas por fricción superan la energía cinética del flujo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paradoja de d'Alembert demostró que la teoría matemática de fluidos ideales sin viscosidad predice un arrastre aerodinámico nulo sobre cuerpos en movimiento, contradiciendo la realidad física."
    },
    {
        id: 86,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función de los cojinetes de empuje (thrust bearings) en los mecanismos rotativos?",
        opciones: [
            "A) Guiar el movimiento radial de alta velocidad sin soporte axial",
            "B) Soportar primordialmente cargas aplicadas en dirección axial (paralela al eje de rotación de la flecha)",
            "C) Amortiguar las vibraciones torsionales de los acoplamientos flexibles",
            "D) Transmitir par torsor entre ejes cruzados a 90 grados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los rodamientos de empuje están diseñados específicamente para soportar fuerzas axiales o de empuje longitudinales sobre flechas rotativas (como en ejes de hélices navales o tornillos sin fin)."
    },
    {
        id: 87,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe el factor de visión (factor de forma o de configuración, F_ij) en la transferencia de calor por radiación entre superficies?",
        opciones: [
            "A) La emisividad térmica espectral de un cuerpo negro ideal",
            "B) La razón entre el calor convectivo y el calor radiativo superficial",
            "C) La reflectividad especular de espejos parabólicos",
            "D) La fracción de la radiación difusa emitida por la superficie i que incide directamente sobre la superficie j"
        ],
        respuestaCorrecta: 3,
        explicacion: "El factor de visión F_ij es un parámetro geométrico adimensional que cuantifica qué proporción de la radiación emitida por una superficie llega a otra superficie en recintos cerrados."
    },
    {
        id: 88,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al maquinado por chorro de agua abrasiva (AWJ - Abrasive Waterjet)?",
        opciones: [
            "A) Utiliza un chorro de agua a ultra alta presión mezclado con partículas abrasivas para cortar con precisión una gran variedad de materiales (metales, cerámicas, composites) sin generar zona afectada por calor",
            "B) Funde el metal mediante un arco eléctrico sumergido en agua desmineralizada",
            "C) Utiliza rayos láser de CO2 para grabado superficial en plásticos blandos",
            "D) Emplea ultrasonido de alta frecuencia para compactar polvos metálicos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El corte por agua abrasiva (AWJ) emplea un chorro hiperbárico con partículas abrasivas para cortar materiales sin generar calor ni alterar la estructura metalúrgica del borde."
    },
    {
        id: 89,
        area: "Termodinámica",
        pregunta: "¿Qué describe un ciclo de refrigeración por compresión de vapor estándar operativo?",
        opciones: [
            "A) Un ciclo cerrado basado exclusivamente en expansión isentrópica con turbina de gas",
            "B) La conversión directa de calor solar en energía eléctrica mediante efecto Seebeck",
            "C) Consta de cuatro procesos fundamentales: compresión adiabática del vapor, condensación a presión constante, estrangulamiento entálpico en válvula y evaporación a presión constante",
            "D) Un proceso de absorción química con amoníaco sin compresor mecánico"
        ],
        respuestaCorrecta: 2,
        explicacion: "El ciclo estándar de refrigeración por compresión de vapor opera mediante compresión del refrigerante, rechazo de calor en condensador, expansión en válvula y absorción en el evaporador."
    },
    {
        id: 90,
        area: "Dinámica",
        pregunta: "¿Cómo se define el momento de inercia másico de un cuerpo rígido respecto a un eje de rotación?",
        opciones: [
            "A) Una medida de la resistencia del cuerpo a cambiar su estado de velocidad angular (rotacional), calculada como la integral de r² dm respecto al eje",
            "B) La masa total del cuerpo dividida entre su radio giroscópico medio",
            "C) La fuerza tangencial aplicada en la periferia entre la aceleración angular",
            "D) El producto de la velocidad lineal por el centro de gravedad"
        ],
        respuestaCorrecta: 0,
        explicacion: "El momento de inercia másico (I = ∫ r² dm) es el equivalente rotacional de la masa inercial traslacional, midiendo la inercia a la aceleración angular."
    },
    {
        id: 91,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué indica el coeficiente de Poisson (ν) de un material elástico lineal e isótropo?",
        opciones: [
            "A) El cociente del esfuerzo cortante máximo entre el límite elástico en tracción",
            "B) La proporción entre la rigidez volumétrica y el módulo de Young",
            "C) El incremento de volumen específico ante cambios de temperatura",
            "D) La razón negativa entre la deformación unitaria transversal y la deformación unitaria axial longitudinal cuando el material se somete a carga uniaxial"
        ],
        respuestaCorrecta: 3,
        explicacion: "El coeficiente de Poisson (ν = -ε_transversal / ε_axial) cuantifica el efecto de contracción o expansión transversal al estirar o comprimir un material en dirección axial."
    },
    {
        id: 92,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué describe la capa límite hidrodinámica en el flujo externo sobre superficies planas o perfiles aerodinámicos?",
        opciones: [
            "A) Una delgada región cercana a la superficie sólida donde los efectos de la viscosidad del fluido son notables y la velocidad se incrementa desde cero (en la pared) hasta el 99% de la velocidad de corriente libre",
            "B) El volumen total de fluido que experimenta turbulencia en tuberías de gran diámetro",
            "C) La zona de presión estática negativa aguas abajo de un obstáculo sumergido",
            "D) La interfaz de separación entre líquido y vapor en ebullición saturada"
        ],
        respuestaCorrecta: 0,
        explicacion: "La capa límite hidrodinámica es la zona adyacente a la pared donde el gradiente de velocidad es pronunciado debido a las fuerzas viscosas del fluido (condición de no deslizamiento)."
    },
    {
        id: 93,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de las transmisiones por bandas (correas) y poleas en la industria?",
        opciones: [
            "A) Soportar cargas axiales extremas en sentido longitudinal",
            "B) Transmitir potencia mecánica de rotación entre ejes separados a distancias relativamente grandes de forma flexible y silenciosa, absorbiendo impactos y sobrecargas",
            "C) Sustituir permanentemente los rodamientos en flechas de alta velocidad",
            "D) Generar electricidad estática para procesos de pintado electrostático"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las bandas y poleas permiten transmitir par y velocidad entre ejes distantes con flexibilidad, actuando como elementos fusibles o amortiguadores ante choques mecánicos."
    },
    {
        id: 94,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe la resistencia térmica de contacto en superficies sólidas unidas mecánicamente?",
        opciones: [
            "A) La conductividad térmica máxima del adhesivo epóxico estructural",
            "B) El coeficiente convectivo entre la placa metálica y el aire ambiente",
            "C) Una caída de temperatura adicional que se produce en la interfaz de unión entre dos sólidos debido a la rugosidad superficial y los vacíos microscópicos de aire atrapado",
            "D) La radiación emitida por las cabezas de los pernos de sujeción"
        ],
        respuestaCorrecta: 2,
        explicacion: "Debido a la rugosidad microscópica, las superficies en contacto no se acoplan perfectamente; los intersticios con aire generan una resistencia térmica de contacto en la interfaz."
    },
    {
        id: 95,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de mecanizado por ultrasonido (USM - Ultrasonic Machining)?",
        opciones: [
            "A) Une metales mediante ultrasonido de alta potencia en estado sólido sin abrasivos",
            "B) Suelda termoplásticos mediante vibración lineal de fricción",
            "C) Corta aceros estructurales mediante plasma térmico sónico",
            "D) Remueve material frágil y duro (como vidrio, cerámica o carburos) mediante la acción de partículas abrasivas suspendidas en un líquido, impactadas a alta frecuencia ultrasónica por una herramienta vibratoria"
        ],
        respuestaCorrecta: 3,
        explicacion: "El mecanizado por ultrasonido (USM) utiliza una herramienta que vibra a alta frecuencia para impulsar un lodo abrasivo contra materiales duros y frágiles, erosionando cavidades de precisión."
    },
    {
        id: 96,
        area: "Termodinámica",
        pregunta: "¿Qué representa el rendimiento isentrópico de una turbina de vapor en los procesos de conversión de energía?",
        opciones: [
            "A) La razón entre el trabajo real obtenido en la turbina y el trabajo ideal que se obtendría en una expansión isentrópica reversible entre la misma presión de entrada y salida",
            "B) El cociente de la temperatura ambiente entre la temperatura de la caldera",
            "C) La relación entre el caudal másico real y el caudal volumétrico en la succión",
            "D) La eficiencia térmica de la caldera dividida entre el condensador"
        ],
        respuestaCorrecta: 0,
        explicacion: "El rendimiento isentrópico de una turbina compara el trabajo real entregado frente al trabajo máximo teórico (isentrópico) bajo las mismas presiones de operación."
    },
    {
        id: 97,
        area: "Dinámica",
        pregunta: "¿Qué describe el análisis cinemático de mecanismos articulados (como el mecanismo de cuatro barras)?",
        opciones: [
            "A) Calcula exclusivamente las fuerzas de inercia y los esfuerzos cortantes en los pernos",
            "B) Determina la resistencia a la fatiga térmica de las barras de acero",
            "C) Estudia el movimiento geométrico de los eslabones (posiciones, velocidades y aceleraciones) en función del tiempo, sin considerar las fuerzas ni torques que lo originan",
            "D) Evalúa el rendimiento eléctrico de los motores de corriente directa acoplados"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cinemática analiza el movimiento espacial y temporal de los cuerpos (trayectorias, velocidades, aceleraciones) de forma puramente geométrica, separada de la cinética (fuerzas)."
    },
    {
        id: 98,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué representa la línea elástica de una viga cargada en la teoría de flexión?",
        opciones: [
            "A) El diagrama de momentos flectores máximos a lo largo de la luz libre",
            "B) La curva geométrica que describe la deformada del eje longitudinal de la viga bajo la acción de las cargas transversales aplicadas",
            "C) La envolvente de esfuerzos cortantes críticos en la sección transversal",
            "D) La trayectoria de deformación plástica permanente tras la descarga"
        ],
        respuestaCorrecta: 1,
        explicacion: "La línea elástica es la ecuación de la curva que adopta el eje longitudinal de la viga al deflectarse elásticamente bajo carga, cuya segunda derivada se relaciona con el momento flector."
    },
    {
        id: 99,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué describe la ecuación de cantidad de movimiento para sistemas rotativos (como turbinas hidráulicas, bombas y compresores, conocida como Ecuación de Euler para Turbomáquinas)?",
        opciones: [
            "A) Relaciona el par motor transferido entre el fluido de trabajo y el rodete rotatorio en función de los cambios en el momento cinemático (radio por componente tangencial de velocidad)",
            "B) Calcula exclusivamente las pérdidas por fricción en tuberías rectas",
            "C) Determina la velocidad del sonido en gases ideales húmedos",
            "D) Establece la conservación estática de la presión hidrostática en tanques"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de Euler para turbomáquinas relaciona el torque y la potencia intercambiada entre el rotor y el fluido mediante la variación del momento de la cantidad de movimiento angular."
    },
    {
        id: 100,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de los cojinetes hidrodinámicos (chumaceras lubricadas por película fluida) en maquinaria pesada?",
        opciones: [
            "A) Soportar exclusivamente cargas axiales en reposo sin lubricación",
            "B) Soportar ejes rotativos de alta velocidad generando una cuña de presión de aceite lubricante que separa completamente las superficies metálicas del eje y el cojinete, eliminando el contacto sólido",
            "C) Transmitir par torsor entre flechas desalineadas mediante estrías",
            "D) Frenar el mecanismo rotativo mediante fricción seca en seco"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los cojinetes hidrodinámicos generan una presión de fluido (cuña de aceite) por el propio movimiento de rotación del eje, separando las superficies y operando sin fricción sólida."
    },
    {
        id: 101,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe el análisis adimensional mediante los números de Reynolds, Prandtl y Nusselt en la convección forzada?",
        opciones: [
            "A) Calcula de forma analítica exacta la distribución de esfuerzos residuales en soldaduras",
            "B) Determina la masa molar de los gases refrigerantes en ciclos de compresión",
            "C) Permite correlacionar experimentalmente el coeficiente de transferencia de calor convectivo (h) en función de las propiedades del fluido, la velocidad y la geometría del sistema",
            "D) Evalúa el rendimiento eléctrico de generadores síncronos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las correlaciones empíricas de transferencia de calor por convección expresan el número de Nusselt (Nu) en función de los números de Reynolds (Re) y Prandtl (Pr)."
    },
    {
        id: 102,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de maquinado por electroerosión por hilo (Wire EDM)?",
        opciones: [
            "A) Utiliza un hilo metálico fino continuo (generalmente de latón) energizado como electrodo para cortar perfiles y contornos complejos de alta precisión en placas metálicas duras mediante descargas eléctricas",
            "B) Corta aceros mediante un haz láser de alta potencia asistido por oxígeno",
            "C) Utiliza chorros de agua a presión para troquelar láminas delgadas",
            "D) Funde metales mediante arco eléctrico sumergido en aceite"
        ],
        respuestaCorrecta: 0,
        explicacion: "El WEDM (Wire Electrical Discharge Machining) utiliza un hilo conductor en movimiento continuo para erosionar con precisión milimétrica geometrías complejas en materiales conductores."
    },
    {
        id: 103,
        area: "Termodinámica",
        pregunta: "¿Qué representa el análisis de exergía (disponibilidad de energía) en los sistemas termodinámicos avanzados?",
        opciones: [
            "A) La energía total almacenada en forma de calor latente de vaporización",
            "B) La cantidad de calor disipado por fricción mecánica en los cojinetes",
            "C) El calor específico a presión constante de los gases de escape",
            "D) El trabajo útil máximo teóricamente obtenible cuando un sistema pasa de su estado actual a un estado de equilibrio con el entorno ambiental"
        ],
        respuestaCorrecta: 3,
        explicacion: "La exergía mide el potencial de trabajo útil de un sistema respecto a su entorno de referencia, permitiendo identificar las mayores fuentes de irreversibilidad y pérdida de calidad energética."
    },
    {
        id: 104,
        area: "Dinámica",
        pregunta: "¿Qué establece el principio de los trabajos virtuales para sistemas mecánicos en equilibrio estático?",
        opciones: [
            "A) Que el trabajo virtual total realizado por todas las fuerzas activas (reales y aplicadas) que actúan sobre un sistema en equilibrio es nulo para cualquier desplazamiento virtual compatible con las ligaduras",
            "B) Que la energía cinética total se conserva en choques perfectamente inelásticos",
            "C) Que la potencia disipada por fricción es igual a la energía potencial elástica",
            "D) Que la aceleración de gravedad es independiente de la masa del cuerpo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de los trabajos virtuales establece que un sistema mecánico está en equilibrio si el trabajo virtual total de las fuerzas aplicadas para cualquier desplazamiento compatible es cero (δW = 0)."
    },
    {
        id: 105,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe la teoría de la energía de deformación elástica máxima en el diseño mecánico frente a cargas estáticas?",
        opciones: [
            "A) La energía absorbida exclusivamente en el régimen plástico post-cedencia",
            "B) El trabajo requerido para fracturar una probeta por fatiga térmica",
            "C) Criterio energético que predice la cedencia cuando la energía de deformación elástica total por unidad de volumen alcanza el valor correspondiente a la cedencia en tracción uniaxial",
            "D) La resistencia al pandeo elástico en columnas de gran esbeltez"
        ],
        respuestaCorrecta: 2,
        explicacion: "El criterio de la energía de deformación elástica establece que la falla por cedencia se produce al igualarse la energía de deformación elástica total almacenada por unidad de volumen."
    },
    {
        id: 106,
        area: "Mecánica de Fluidos",
        pregunta: "¿Cuál es la función principal de los difusores en los sistemas de flujo de fluidos (como en compresores centrífugos o túneles de viento)?",
        opciones: [
            "A) Reducir la velocidad del fluido mediante un conducto de sección transversal creciente, transformando la energía cinética en un incremento de presión estática",
            "B) Acelerar el fluido para incrementar su energía cinética a expensas de la presión",
            "C) Filtrar impurezas sólidas y humedad condensada en la línea de succión",
            "D) Proveer enfriamiento adiabático mediante evaporación instantánea"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un difusor ensancha su área de flujo en la dirección del movimiento, desacelerando el fluido (disminuyendo energía cinética) y recuperando presión estática."
    },
    {
        id: 107,
        area: "Diseño Mecánico",
        pregunta: "¿Qué factores se deben considerar primordialmente en el diseño de uniones soldadas sometidas a cargas estáticas y de fatiga?",
        opciones: [
            "A) Únicamente el espesor nominal de las placas unidas sin importar el tipo de electrodo",
            "B) La conductividad eléctrica del metal base y la temperatura ambiente del taller",
            "C) El color y acabado estético superficial de la escoria enfriada",
            "D) La geometría del cordón de soldadura, los concentradores de esfuerzo en la raíz y la garganta, las propiedades mecánicas del metal de aporte y la presencia de tensiones residuales"
        ],
        respuestaCorrecta: 3,
        explicacion: "El diseño de uniones soldadas requiere analizar los esfuerzos en la garganta de la soldadura, los concentradores geométricos de tensión y la mitigación de tensiones residuales por tratamientos térmicos."
    },
    {
        id: 108,
        area: "Transferencia de Calor",
        pregunta: "¿Qué describe el método de la Eficiencia - Número de Unidades de Transferencia (ε - NUT) en el cálculo térmico de intercambiadores de calor?",
        opciones: [
            "A) Un método analítico basado en la efectividad térmica del intercambiador para determinar la tasa de transferencia de calor sin necesidad de conocer previamente las temperaturas de salida de los fluidos",
            "B) Un procedimiento gráfico para medir la viscosidad cinemática del aceite refrigerante",
            "C) Una correlación empírica exclusiva para calderas pirotubulares de baja presión",
            "D) El cálculo de la caída de presión estática en bancos de tubos cruzados"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método ε-NUT relaciona la efectividad del intercambiador con el número de unidades de transferencia térmica (NUT), facilitando el diseño y análisis cuando no se tienen las temperaturas de salida."
    },
    {
        id: 109,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de sinterización en la pulvimetalurgia (metalurgia de polvos)?",
        opciones: [
            "A) Se funde completamente el polvo metálico hasta el estado líquido en crisoles de inducción",
            "B) Los polvos metálicos compactados en frío dentro de un troquel son calentados en un horno de atmósfera controlada a una temperatura inferior al punto de fusión del metal principal para lograr la unión por difusión",
            "C) Se laminan láminas metálicas mediante rodillos pesados en frío",
            "D) Se extruyen perfiles continuos a través de dados de carburo templado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sinterización es el tratamiento térmico de consolidación en pulvimetalurgia donde las partículas metálicas compactadas se unen mediante difusión atómica a temperaturas bajo el punto de fusión."
    },
    {
        id: 110,
        area: "Termodinámica",
        pregunta: "¿Qué establece el postulado de estado en los sistemas termodinámicos compresibles simples?",
        opciones: [
            "A) Que el estado termodinámico de un sistema compresible simple se define por completo mediante dos propiedades intensivas independientes",
            "B) Que se requiere conocer al menos cinco propiedades extensivas para fijar el estado del gas ideal",
            "C) Que la presión y la temperatura siempre son propiedades dependientes en mezclas húmedas",
            "D) Que la masa total del sistema determina el nivel exergético de la sustancia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El postulado de estado estipula que para un sistema compresible simple, fijar dos propiedades intensivas independientes es condición necesaria y suficiente para determinar por completo su estado termodinámico."
    },
    {
        id: 111,
        area: "Dinámica y Control",
        pregunta: "¿Qué representa el tiempo de establecimiento (settling time) en la respuesta transitoria de un sistema dinámico de control ante una entrada escalón?",
        opciones: [
            "A) El lapso exacto que tarda el sistema en cruzar por primera vez el valor de referencia",
            "B) El tiempo requerido para que la respuesta del sistema alcance y permanezca dentro de un porcentaje específico (generalmente ±2% o ±5%) del valor final de estado estacionario",
            "C) El retraso puro provocado por la longitud de las tuberías de sensado",
            "D) El tiempo necesario para que la acción integral sature el actuador"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo de establecimiento mide la rapidez con la que se amortigua la respuesta transitoria del sistema hasta quedar confinado dentro de una banda estrecha (ej. 2%) en torno al valor final."
    },
    {
        id: 112,
        area: "Mecánica de Materiales",
        pregunta: "¿Cuál es la diferencia fundamental entre el comportamiento mecánico de un material frágil frente a un material dúctil sometido a tracción uniaxial?",
        opciones: [
            "A) El material dúctil experimenta gran deformación plástica y estricción antes de la fractura, mientras que el material frágil rompe de manera repentina con mínima deformación plástica tras superar su límite elástico",
            "B) El material frágil posee un módulo de Young infinitamente mayor que el material dúctil",
            "C) El material dúctil no obedece la Ley de Hooke bajo ninguna circunstancia",
            "D) El material frágil presenta cedencia marcada con endurecimiento por deformación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ductilidad se caracteriza por una amplia deformación plástica antes de romper; la fragilidad implica una fractura súbita sin apenas deformación permanente ni estricción previa."
    },
    {
        id: 113,
        area: "Mecánica de Fluidos",
        pregunta: "¿Qué describe la ecuación de la energía de Bernoulli modificada para fluidos reales (con pérdidas de carga y adición/extracción de trabajo)?",
        opciones: [
            "A) Asume que la viscosidad del fluido es cero en todo el dominio de control",
            "B) Elimina la altura geométrica de posición del balance energético",
            "C) Incorpora los términos de cabeza de bomba (energía añadida por equipos motores), cabeza de turbina (energía extraída) y la cabeza de pérdidas totales por fricción continua y local",
            "D) Calcula la densidad variable de gases ideales en tuberías adiabáticas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La ecuación de energía extendida para fluidos reales extiende el principio de Bernoulli añadiendo el trabajo de bombas, turbinas y restando las pérdidas de carga hidráulica (h_f + h_m)."
    },
    {
        id: 114,
        area: "Diseño Mecánico",
        pregunta: "¿Qué criterios se evalúan en el diseño y selección de chumaceras o cojinetes de elemento rodante (rodamientos) sometidos a cargas dinámicas?",
        opciones: [
            "A) La capacidad de carga dinámica básica, la vida nominal de fatiga (L_10), el factor de velocidad límite y los requisitos de lubricación y sellado",
            "B) Exclusivamente el diámetro exterior de la carcasa de fundición gris",
            "C) El par de apriete de los pernos de la base de soporte",
            "D) La conductividad térmica del acero del arillo interior"
        ],
        respuestaCorrecta: 0,
        explicacion: "El diseño de rodamientos bajo fatiga por contacto rodante se rige por la capacidad de carga dinámica y la estimación de la vida nominal (L_10) en millones de revoluciones o horas de servicio."
    },
    {
        id: 115,
        area: "Transferencia de Calor",
        pregunta: "¿Qué representa la resistencia térmica en redes térmicas análogas a los circuitos eléctricos (Ley de Ohm térmica)?",
        opciones: [
            "A) La resistencia eléctrica específica del aislamiento mineral de tuberías",
            "B) La oposición al flujo de calor a través de un medio por conducción, convección o radiación, calculándose como la diferencia de temperaturas dividida entre la tasa de transferencia de calor (R = ΔT / Q)",
            "C) La capacidad del material para almacenar energía térmica en régimen transitorio",
            "D) La caída de voltaje en termopares de platino-rodio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La analogía térmica establece que la resistencia térmica (R_t = ΔT / Q) es análoga a la resistencia eléctrica, facilitando el cálculo de flujos térmicos en sistemas compuestos."
    },
    {
        id: 116,
        area: "Manufactura",
        pregunta: "¿Qué caracteriza al proceso de mecanizado por corte con chorro de plasma (Plasma Arc Cutting)?",
        opciones: [
            "A) Corta metales mediante un disco abrasivo aglutinado con resina fenólica",
            "B) Utiliza rayos láser de CO2 enfocados en vacío para soldadura fina",
            "C) Emplea electrodos de tungsteno revestidos de bajo hidrógeno",
            "D) Utiliza un chorro de gas ionizado (plasma) a alta temperatura y velocidad supersónica para fundir y expulsar el metal de corte en materiales conductores (aceros, aluminio, inoxidables)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El corte por plasma ioniza un gas a temperaturas extremas para fundir y soplar material conductor de forma rápida y limpia en placas metálicas."
    },
    {
        id: 117,
        area: "Termodinámica",
        pregunta: "¿Qué describe un ciclo Otto ideal para motores de combustión interna de encendido provocado (gasolina)?",
        opciones: [
            "A) Compresión isentrópica, adición de calor a volumen constante (isocórico), expansión isentrópica y rechazo de calor a volumen constante",
            "B) Compresión isotérmica, adición de calor a presión constante y expansión adiabática",
            "C) Adición de calor a presión constante y rechazo a presión constante",
            "D) Ciclo abierto de flujo estacionario con turbina de vapor de alta presión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ciclo Otto ideal modela los motores de encendido por chispa mediante dos procesos adiabáticos (compresión/expansión) y dos procesos isocóricos (adición y rechazo de calor)."
    },
    {
        id: 118,
        area: "Dinámica",
        pregunta: "¿Qué establece la ley de gravitación universal y las leyes de Kepler aplicadas al movimiento de satélites y maquinaria espacial en dinámica orbital?",
        opciones: [
            "A) Que la velocidad angular de un satélite es independiente de su altura orbital",
            "B) Que la energía mecánica en órbita elíptica no es constante",
            "C) Que la fuerza de atracción mutua entre dos masas es directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que las separa",
            "D) Que la aceleración centrípeta es cero en el apogeo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La ley de gravitación universal de Newton rige la fuerza atractiva entre masas en mecánica celeste y diseño de lanzaderas o satélites artificiales."
    },
    {
        id: 119,
        area: "Mecánica de Materiales",
        pregunta: "¿Qué describe el ensayo de dureza Brinell o Rockwell en la caracterización de metales y aleaciones?",
        opciones: [
            "A) La resistencia superficial del material a la penetración permanente mediante la aplicación de una carga estática sobre un indentador de bola o cono de diamante",
            "B) La tenacidad al impacto frente a cargas dinámicas de péndulo",
            "C) El límite elástico a tracción en probetas normalizadas",
            "D) La resistencia a la fatiga flexionante bajo inversión de esfuerzos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los ensayos de dureza miden la resistencia local de la superficie de un material a la deformación plástica permanente por indentación con una carga y penetrador normalizado."
    },
    {
        id: 120,
        area: "Diseño y Elementos de Máquinas",
        pregunta: "¿Qué representa el factor de diseño (o factor de seguridad operativo) frente a la vida a fatiga en componentes sometidos a cargas cíclicas complejas según el criterio de Goodman modificado?",
        opciones: [
            "A) El cociente directo entre la masa total y el volumen de inercia de la pieza",
            "B) La relación entre la temperatura de operación y el punto de fusión del acero",
            "C) Una combinación lineal o parabólica entre el esfuerzo medio y el esfuerzo alternante frente a los límites de resistencia a la fatiga y resistencia última del material",
            "D) El incremento de la velocidad angular en flechas huecas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El diagrama de Goodman modificado evalúa la interacción entre los esfuerzos medios y alternantes combinados para predecir la seguridad frente a la fatiga en componentes mecánicos."
    }
];