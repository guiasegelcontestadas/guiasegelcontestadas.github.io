const bancoPreguntas = [
    {
        id: 1,
        area: "Sistemas Analógicos",
        pregunta: "¿Cuál es la configuración de un amplificador operacional que proporciona una impedancia de entrada teóricamente infinita y una ganancia de voltaje igual a la unidad?",
        opciones: [
            "A) Amplificador inversor",
            "B) Amplificador no inversor",
            "C) Seguidor de voltaje (buffer)",
            "D) Amplificador sumador"
        ],
        respuestaCorrecta: 2,
        explicacion: "El seguidor de voltaje conecta la salida directamente a la entrada inversora, logrando una ganancia de 1 y aprovechando la alta impedancia de entrada diferencial del OPAMP."
    },
    {
        id: 2,
        area: "Sistemas Analógicos",
        pregunta: "En un transistor BJT polarizado en la región activa, ¿cuál es la relación aproximada entre la corriente de colector ($I_C$) y la corriente de emisor ($I_E$)?",
        opciones: [
            "A) $I_C \\approx I_E$",
            "B) $I_C \\gg I_E$",
            "C) $I_C = I_B$",
            "D) $I_C \\approx 0$"
        ],
        respuestaCorrecta: 0,
        explicacion: "Dado que la corriente de base ($I_B$) es muy pequeña en comparación con $I_C$ y $I_E$, se cumple que $I_C = \\alpha I_E$, donde $\\alpha$ es típicamente muy cercano a 1 (0.95 - 0.99)."
    },
    {
        id: 3,
        area: "Sistemas Analógicos",
        pregunta: "¿Qué efecto principal introduce una red de realimentación negativa en un amplificador?",
        opciones: [
            "A) Incrementa la distorsión no lineal",
            "B) Reduce el ancho de banda",
            "C) Aumenta la estabilidad y amplía el ancho de banda",
            "D) Disminuye la impedancia de salida en un amplificador de voltaje"
        ],
        respuestaCorrecta: 2,
        explicacion: "La realimentación negativa reduce la ganancia global pero mejora notablemente la linealidad, la estabilidad ante variaciones de temperatura y expande el ancho de banda."
    },
    {
        id: 4,
        area: "Sistemas Analógicos",
        pregunta: "¿Cuál es la frecuencia de corte de un filtro pasa-bajas RC simple con $R = 10 \\text{ k}\\Omega$ y $C = 10 \\text{ nF}$?",
        opciones: [
            "A) $1.59 \\text{ kHz}$",
            "B) $15.91 \\text{ kHz}$",
            "C) $159.15 \\text{ Hz}$",
            "D) $1.59 \\text{ MHz}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La frecuencia de corte se calcula como $f_c = \\frac{1}{2\\pi R C} = \\frac{1}{2 \\pi (10 \\times 10^3)(10 \\times 10^{-9})} \\approx 1591.55 \\text{ Hz} = 1.59 \\text{ kHz}$."
    },
    {
        id: 5,
        area: "Sistemas Analógicos",
        pregunta: "En un amplificador de potencia clase B, ¿cuántos grados del ciclo de la señal de entrada conduce cada transistor de la etapa de salida?",
        opciones: [
            "A) 360 grados",
            "B) 180 grados",
            "C) 90 grados",
            "D) 270 grados"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la clase B, cada transistor complementario (push-pull) conduce durante exactamente medio ciclo, es decir, 180 grados, eliminando la disipación en reposo pero introduciendo distorsión de cruce."
    },
    {
        id: 6,
        area: "Sistemas Analógicos",
        pregunta: "¿Cuál es la función principal de un circuito diodo Zener en una fuente de alimentación regulada?",
        opciones: [
            "A) Rectificar la onda de corriente alterna",
            "B) Filtrar los armónicos de alta frecuencia",
            "C) Mantener un voltaje de referencia constante ante variaciones de carga",
            "D) Elevar el voltaje pico de la red eléctrica"
        ],
        respuestaCorrecta: 2,
        explicacion: "El diodo Zener opera en su región de ruptura inversa para mantener una caída de voltaje prácticamente constante a pesar de los cambios en la corriente de carga o en la tensión de entrada."
    },
    {
        id: 7,
        area: "Sistemas Analógicos",
        pregunta: "¿Qué caracteriza al punto de operación (Q-point) en la recta de carga de un dispositivo semiconductor?",
        opciones: [
            "A) Los valores de voltaje y corriente de polarización en corriente directa sin señal aplicada",
            "B) La máxima potencia disipada por la carga",
            "C) El punto de saturación total del dispositivo",
            "D) La frecuencia máxima de respuesta del circuito"
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto Q define las condiciones de polarización en DC ($V_{CE}, I_C$ en BJT o $V_{DS}, I_D$ en FET) sobre las cuales se superpondrá la señal de AC a amplificar."
    },
    {
        id: 8,
        area: "Sistemas Analógicos",
        pregunta: "¿Cuál es la principal ventaja de utilizar un amplificador de instrumentación basado en tres OPAMPs frente a uno diferencial estándar?",
        opciones: [
            "A) Menor consumo de potencia",
            "B) Alta impedancia de entrada en ambas terminales y alto CMRR",
            "C) Mayor ganancia de corriente de salida",
            "D) Ancho de banda infinito"
        ],
        respuestaCorrecta: 1,
        explicacion: "El amplificador de instrumentación aísla las etapas de entrada con buffers, proporcionando impedancias de entrada altísimas y simétricas, además de un excelente rechazo al modo común (CMRR)."
    },
    {
        id: 9,
        area: "Sistemas Analógicos",
        pregunta: "En un oscilador de puente de Wien, ¿qué condición de ganancia en lazo cerrado se requiere para mantener una oscilación sinusoidal sostenida?",
        opciones: [
            "A) Ganancia menor a 1",
            "B) Ganancia exactamente igual a 3",
            "C) Ganancia infinita",
            "D) Ganancia menor o igual a 0.5"
        ],
        respuestaCorrecta: 1,
        explicacion: "La red de retroalimentación de Wien atenuada requiere que el amplificador operacional proporcione una ganancia de voltaje de exactamente 3 para compensar la atenuación de 1/3 a la frecuencia de resonancia."
    },
    {
        id: 10,
        area: "Sistemas Analógicos",
        pregunta: "¿Cómo se le llama al fenómeno en los amplificadores operacionales donde la salida cambia a su velocidad máxima debido a un escalón grande en la entrada?",
        opciones: [
            "A) Saturación térmica",
            "B) Tasa de respuesta o Slew Rate",
            "C) Corriente de offset",
            "D) Distorsión armónica total"
        ],
        respuestaCorrecta: 1,
        explicacion: "El *Slew Rate* ($SR$) mide la máxima tasa de cambio del voltaje de salida por unidad de tiempo ($\\text{V}/\\mu\\text{s}$), limitada por la capacidad interna de carga de los nodos del OPAMP."
    },
    {
        id: 11,
        area: "Sistemas Digitales",
        pregunta: "Simplifique la siguiente función booleana utilizando el álgebra de Boole: $F = A \\cdot B + A \\cdot \\overline{B} + \\overline{A} \\cdot B$",
        opciones: [
            "A) $A + B$",
            "B) $A \\cdot B$",
            "C) $\\overline{A} + \\overline{B}$",
            "D) $1$"
        ],
        respuestaCorrecta: 0,
        explicacion: "Agrupando términos: $A(B + \\overline{B}) + \\overline{A}B = A(1) + \\overline{A}B = A + \\overline{A}B$. Por ley de absorción distributiva, esto resulta en $A + B$."
    },
    {
        id: 12,
        area: "Sistemas Digitales",
        pregunta: "¿Cuál es el propósito principal de una máquina de estados finitos (FSM) de tipo Moore?",
        opciones: [
            "A) Generar salidas que dependen exclusivamente del estado actual",
            "B) Generar salidas que dependen del estado actual y de las entradas presentes",
            "C) Minimizar el uso de compuertas lógicas combinacionales",
            "D) Operar sin necesidad de una señal de reloj"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una FSM de Moore, las señales de salida son función única y exclusiva del estado actual en el que se encuentra el registro de almacenamiento."
    },
    {
        id: 13,
        area: "Sistemas Digitales",
        pregunta: "¿Qué componente de hardware se utiliza típicamente para implementar lógica combinacional compleja mediante una matriz programable de compuertas AND y OR?",
        opciones: [
            "A) Flip-Flop tipo D",
            "B) PLD (Dispositivo Lógico Programable / PAL / PLA)",
            "C) Registro de desplazamiento",
            "D) Convertidor A/D"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los dispositivos PLD, PAL y PLA contienen arreglos matriciales de compuertas lógicas cuyas conexiones se pueden programar (fusibles o EEPROM) para realizar funciones booleanas específicas."
    },
    {
        id: 14,
        area: "Sistemas Digitales",
        pregunta: "En aritmética binaria, ¿cómo se representa el número decimal $-6$ en formato complemento a 2 utilizando 4 bits?",
        opciones: [
            "A) $1010$",
            "B) $1100$",
            "C) $0110$",
            "D) $1001$"
        ],
        respuestaCorrecta: 0,
        explicacion: "El número $+6$ en binario de 4 bits es $0110$. Invirtiendo los bits (complemento a 1) se obtiene $1001$, y sumando 1 se obtiene $1010$, que representa $-6$."
    },
    {
        id: 15,
        area: "Sistemas Digitales",
        pregunta: "¿Cuál es la principal diferencia funcional entre un pestillo (latch) y un flip-flop?",
        opciones: [
            "A) El latch es sensible al nivel de la señal de control, mientras que el flip-flop es sensible al flanco",
            "B) El flip-flop solo almacena un valor durante un microsegundo",
            "C) El latch requiere una señal de reloj de alta frecuencia obligatoria",
            "D) El flip-flop no puede construirse con compuertas NAND"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los latches son transparentes y responden de manera continua al nivel lógico de habilitación (ENABLE), mientras que los flip-flops cambian de estado únicamente durante la transición de flanco (subida o bajada) del reloj."
    },
    {
        id: 16,
        area: "Sistemas Digitales",
        pregunta: "En diseño con VHDL o Verilog, ¿cómo se denominan las construcciones sintácticas concurrentes que describen el flujo de datos directamente?",
        opciones: [
            "A) Procesos secuenciales",
            "B) Sentencias concurrentes de asignación de señal",
            "C) Subrutinas de interrupción",
            "D) Vectores de prueba"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las asignaciones concurrentes (ej. sentencias tipo `with-select` o asignaciones directas con `<=`) se ejecutan en paralelo, modelando circuitos combinacionales en hardware."
    },
    {
        id: 17,
        area: "Sistemas Digitales",
        pregunta: "¿Qué problema crítico evita la utilización de sincronizadores de doble etapa (two-flop synchronizer) en circuitos digitales síncronos?",
        opciones: [
            "A) El consumo excesivo de corriente",
            "B) La metaestabilidad por señales asíncronas de entrada",
            "C) El desbordamiento de pila en memoria RAM",
            "D) La atenuación de la señal de reloj"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando una señal externa asíncrona viola los tiempos de setup y hold de un flip-flop, este puede entrar en metaestabilidad. Dos flip-flops en cascada reducen drásticamente la probabilidad de que este estado transitorio se propague al sistema."
    },
    {
        id: 18,
        area: "Sistemas Digitales",
        pregunta: "¿Cuál es la capacidad de almacenamiento de una memoria RAM organizada como $4096 \\times 8$ bits?",
        opciones: [
            "A) 4 KB",
            "B) 32 KB",
            "C) 16 KB",
            "D) 8 KB"
        ],
        respuestaCorrecta: 0,
        explicacion: "$4096$ localidades de $8$ bits (1 byte) equivalen a $4096 \\text{ bytes} = 4 \\text{ KiB}$ de memoria."
    },
    {
        id: 19,
        area: "Sistemas Digitales",
        pregunta: "¿Qué compuerta lógica universal permite implementar cualquier función booleana por sí sola?",
        opciones: [
            "A) AND",
            "B) OR",
            "C) NAND",
            "D) XOR"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las compuertas NAND y NOR son consideradas universales porque mediante combinaciones adecuadas de ellas se pueden replicar las funciones NOT, AND y OR."
    },
    {
        id: 20,
        area: "Sistemas Digitales",
        pregunta: "En un circuito síncrono, ¿qué representa el parámetro de tiempo de propagación (*propagation delay*)?",
        opciones: [
            "A) El tiempo que tarda la señal en viajar desde la fuente de alimentación hasta la carga",
            "B) El intervalo transcurrido desde que cambia la entrada hasta que la salida refleja de forma estable el nuevo valor",
            "C) El periodo mínimo de la señal de reloj",
            "D) El tiempo que el circuito permanece en estado de alta impedancia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo de propagación ($t_{pd}$) es la demora inherente a los dispositivos físicos entre el flanco o cambio de entrada y la estabilización de la salida lógica."
    },
    {
        id: 21,
        area: "Control y Automatización",
        pregunta: "¿Cuál es el efecto principal de añadir una acción de control integral ($I$) en un controlador PID?",
        opciones: [
            "A) Eliminar el error en estado estacionario ante una entrada escalón",
            "B) Reducir el tiempo de establecimiento a cero",
            "C) Disminuir el sobreimpulso (*overshoot*)",
            "D) Incrementar la sensibilidad al ruido de alta frecuencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La acción integral acumula el error a lo largo del tiempo, logrando que la salida del controlador compense cualquier desviación hasta anular completamente el error en régimen permanente."
    },
    {
        id: 22,
        area: "Control y Automatización",
        pregunta: "Dada la función de transferencia de un sistema de primer orden $G(s) = \\frac{5}{2s + 1}$, ¿cuál es su constante de tiempo ($\\tau$)?",
        opciones: [
            "A) $5$ segundos",
            "B) $2$ segundos",
            "C) $0.5$ segundos",
            "D) $1$ segundo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la forma estándar $G(s) = \\frac{K}{\\tau s + 1}$, el coeficiente de $s$ en el denominador representa la constante de tiempo $\\tau$, que en este caso es $2$."
    },
    {
        id: 23,
        area: "Control y Automatización",
        pregunta: "¿Qué criterio de estabilidad analiza las raíces de la ecuación característica ubicadas en el semiplano derecho del plano complejo $s$ sin necesidad de calcular explícitamente sus valores?",
        opciones: [
            "A) Criterio de Bode",
            "B) Criterio de estabilidad de Routh-Hurwitz",
            "C) Lugar geométrico de las raíces",
            "D) Criterio de Nyquist"
        ],
        respuestaCorrecta: 1,
        explicacion: "El criterio algebraico de Routh-Hurwitz permite determinar si algún polo del sistema se encuentra en el semiplano derecho examinando los coeficientes de la ecuación característica."
    },
    {
        id: 24,
        area: "Control y Automatización",
        pregunta: "¿Qué elementos principales componen un lazo de control cerrado en retroalimentación?",
        opciones: [
            "A) Únicamente el actuador y la planta",
            "B) Sensor, controlador, actuador y planta (proceso)",
            "C) Generador de señales y amplificador de potencia",
            "D) Microcontrolador y convertidor analógico-digital"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un sistema de lazo cerrado mide la variable de salida mediante un sensor, compara con la referencia, procesa la señal en el controlador y ajusta el actuador que modifica la planta."
    },
    {
        id: 25,
        area: "Control y Automatización",
        pregunta: "¿Qué representa el margen de fase en los diagramas de Bode de un sistema de control?",
        opciones: [
            "A) La ganancia adicional que se puede añadir antes de que el sistema sea inestable",
            "B) La distancia en grados a $-180^\\circ$ a la frecuencia donde la magnitud es de 0 dB",
            "C) El desfase máximo introducido por el sensor",
            "D) El retraso temporal del actuador"
        ],
        respuestaCorrecta: 1,
        explicacion: "El margen de fase indica cuánta fase adicional se puede perder a la frecuencia de cruce de ganancia ($|G(j\\omega)| = 1$ o $0\\text{ dB}$) antes de que el sistema alcance la inestabilidad ($-180^\\circ$)."
    },
    {
        id: 26,
        area: "Control y Automatización",
        pregunta: "En autómatas programables (PLC), ¿qué lenguaje gráfico de programación se basa en los diagramas esquemáticos de contactos eléctricos industriales?",
        opciones: [
            "A) Texto estructurado (ST)",
            "B) Diagrama de bloques de funciones (FBD)",
            "C) Lenguaje Ladder (LD)",
            "D) Lista de instrucciones (IL)"
        ],
        respuestaCorrecta: 2,
        explicacion: "El lenguaje Ladder (escalera) simula circuitos de relés electromecánicos tradicionales, facilitando su comprensión y adopción en la automatización industrial."
    },
    {
        id: 27,
        area: "Control y Automatización",
        pregunta: "¿Cuál es la función de una señal de modulación por ancho de pulso (PWM) en el control de motores de corriente directa?",
        opciones: [
            "A) Variar la frecuencia de la red eléctrica",
            "B) Controlar el voltaje promedio aplicado a la armadura del motor variando el ciclo de trabajo",
            "C) Invertir la polaridad de manera instantánea sin pérdidas",
            "D) Medir la velocidad angular mediante pulsos ópticos"
        ],
        respuestaCorrecta: 1,
        explicacion: "PWM regula la potencia efectiva entregada al motor alternando rápidamente entre los estados de encendido y apagado, controlando el valor medio del voltaje mediante el ciclo de trabajo (*duty cycle*)."
    },
    {
        id: 28,
        area: "Control y Automatización",
        pregunta: "¿Qué describe el lugar geométrico de las raíces (*Root Locus*)?",
        opciones: [
            "A) La trayectoria de las raíces de la ecuación característica en el plano complejo al variar un parámetro (usualmente la ganancia $K$)",
            "B) Las frecuencias de resonancia de un circuito RLC",
            "C) La respuesta temporal ante una entrada rampa",
            "D) Los polos de lazo abierto del sistema"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método del lugar de las raíces gráfica las posiciones de los polos en lazo cerrado en el plano $s$ cuando la ganancia del sistema varía desde cero hasta infinito."
    },
    {
        id: 29,
        area: "Control y Automatización",
        pregunta: "¿Cuál es el efecto de introducir un polo en el origen ($s = 0$) en la función de transferencia de lazo abierto de un sistema?",
        opciones: [
            "A) Incrementa el tipo del sistema en uno, mejorando su capacidad de seguir entradas en rampa sin error estacionario",
            "B) Reduce el orden del sistema",
            "C) Elimina por completo las oscilaciones transitorias",
            "D) Disminuye la sensibilidad a perturbaciones externas de alta frecuencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un integrador puro ($1/s$) añade un polo en el origen, aumentando el tipo del sistema y reduciendo a cero el error en estado estacionario para entradas tipo escalón (Tipo 1) o rampa (Tipo 2)."
    },
    {
        id: 30,
        area: "Control y Automatización",
        pregunta: "¿Qué instrumento industrial se utiliza comúnmente para convertir una señal neumática de $3-15\\text{ psi}$ a una señal eléctrica estándar de $4-20\\text{ mA}$?",
        opciones: [
            "A) Transductor P/I",
            "B) Transductor I/P",
            "C) Transmisor de nivel ultrasónico",
            "D) Válvula de control solenoide"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un transductor Presión a Corriente (P/I) convierte una señal de presión neumática en una señal de corriente estándar utilizada en instrumentación industrial."
    },
    {
        id: 31,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué establece la ley de Ampère-Maxwell en su forma macroscópica diferencial?",
        opciones: [
            "A) $\\nabla \\cdot \\mathbf{D} = \\rho_v$",
            "B) $\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}$",
            "C) $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$",
            "D) $\\nabla \\cdot \\mathbf{B} = 0$"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ley de Ampère generalizada por Maxwell incluye la corriente de conducción ($\\mathbf{J}$) y la corriente de desplazamiento (la derivada temporal del desplazamiento eléctrico $\\frac{\\partial \\mathbf{D}}{\\partial t}$)."
    },
    {
        id: 32,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Cuál es el valor de la impedancia característica ($Z_0$) de una línea de transmisión sin pérdidas si su inductancia por unidad de longitud es $L$ y su capacitancia es $C$?",
        opciones: [
            "A) $Z_0 = \\sqrt{LC}$",
            "B) $Z_0 = \\sqrt{L/C}$",
            "C) $Z_0 = \\sqrt{C/L}$",
            "D) $Z_0 = L \\cdot C$"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para una línea de transmisión ideal sin pérdidas, la impedancia característica se define teóricamente como $Z_0 = \\sqrt{\\frac{L}{C}}$."
    },
    {
        id: 33,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué condición indica que una línea de transmisión está perfectamente adaptada (*terminated in a matched load*)?",
        opciones: [
            "A) La impedancia de carga ($Z_L$) es igual a cero",
            "B) La impedancia de carga ($Z_L$) es igual a infinito",
            "C) La impedancia de carga ($Z_L$) es igual a la impedancia característica de la línea ($Z_0$)",
            "D) El coeficiente de reflexión es igual a 1"
        ],
        respuestaCorrecta: 2,
        explicacion: "Cuando $Z_L = Z_0$, toda la potencia incidente es absorbida por la carga y no existen ondas estacionarias reflejadas de regreso hacia el generador."
    },
    {
        id: 34,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué representa la Relación de Onda Estacionaria (ROV o SWR) en una línea de transmisión?",
        opciones: [
            "A) La relación entre la amplitud máxima y la amplitud mínima del voltaje a lo largo de la línea",
            "B) La velocidad de propagación de la onda electromagnética",
            "C) La atenuación total expresada en decibeles por metro",
            "D) La potencia máxima disipada en el conductor"
        ],
        respuestaCorrecta: 0,
        explicacion: "El SWR cuantifica la falta de adaptación de impedancias mediante el cociente entre los valores máximos y mínimos del campo o voltaje en las ondas estacionarias formadas."
    },
    {
        id: 35,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Cuál es la velocidad de propagación de una onda electromagnética en el vacío?",
        opciones: [
            "A) $3 \\times 10^6 \\text{ m/s}$",
            "B) $3 \\times 10^8 \\text{ m/s}$",
            "C) $340 \\text{ m/s}$",
            "D) $3 \\times 10^{10} \\text{ m/s}$"
        ],
        respuestaCorrecta: 1,
        explicacion: "La velocidad de la luz en el vacío ($c$) es fundamental en electromagnetismo y se aproxima a $3 \\times 10^8 \\text{ m/s}$ (exactamente $299,792,458 \\text{ m/s}$)."
    },
    {
        id: 36,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué describe la carta de Smith en el análisis de radiofrecuencia y microondas?",
        opciones: [
            "A) Un gráfico polar que mapea coeficientes de reflexión complejos con impedancias normalizadas",
            "B) Un diagrama para calcular la respuesta en frecuencia de filtros analógicos activos",
            "C) Un registro de las propiedades magnéticas de los materiales ferromagnéticos",
            "D) Una tabla de conversión para sistemas de numeración binaria y hexadecimal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La carta de Smith es una herramienta gráfica que relaciona la impedancia compleja normalizada con el coeficiente de reflexión, facilitando el diseño de redes de adaptación de impedancias."
    },
    {
        id: 37,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué componente vectorial de los campos electromagnéticos es nulo en las ondas electromagnéticas uniformes que se propagan en el espacio libre (ondas TEM)?",
        opciones: [
            "A) Los componentes transversales a la dirección de propagación",
            "B) Los componentes en la dirección de propagación (tanto el campo eléctrico como el magnético longitudinales son cero)",
            "C) El campo eléctrico en el eje X",
            "D) El campo magnético en el eje Y"
        ],
        respuestaCorrecta: 1,
        explicacion: "En las ondas Transversales Electromagnéticas (TEM), tanto el campo eléctrico $\\mathbf{E}$ como el campo magnético $\\mathbf{H}$ son perpendiculares (transversales) a la dirección de propagación de la onda."
    },
    {
        id: 38,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Cuál es el significado físico de la profundidad de penetración o efecto pelicular (*skin depth*, $\\delta$) en conductores a alta frecuencia?",
        opciones: [
            "A) La distancia a la cual la densidad de corriente decae a $1/e$ ($~37\%$) de su valor en la superficie del conductor",
            "B) El grosor necesario del aislamiento para evitar descargas eléctricas",
            "C) La máxima profundidad a la que puede viajar una señal de radio en el agua marina",
            "D) El radio exterior de un cable coaxial"
        ],
        respuestaCorrecta: 0,
        explicacion: "A altas frecuencias, las corrientes tienden a circular únicamente por la capa superficial del conductor. La profundidad de medida $\\delta$ indica el punto donde la amplitud de corriente se reduce significativamente."
    },
    {
        id: 39,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué expresa la ecuación de continuidad para corrientes y cargas eléctricas?",
        opciones: [
            "A) $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho_v}{\\partial t}$",
            "B) $\\nabla \\times \\mathbf{J} = 0$",
            "C) La carga total en el universo cambia con el tiempo",
            "D) La corriente eléctrica es independiente del campo magnético"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de continuidad refleja el principio de conservación de la carga: la divergencia de la densidad de corriente es igual a la tasa de disminución de la densidad volumétrica de carga."
    },
    {
        id: 40,
        area: "Electromagnetismo y Líneas de Transmisión",
        pregunta: "¿Qué caracteriza a una guía de onda rectangular operando por encima de su frecuencia de corte?",
        opciones: [
            "A) Permite la propagación de ondas electromagnéticas con atenuación muy baja, típicamente en modos TE o TM",
            "B) Actúa como un cortocircuito perfecto para cualquier frecuencia",
            "C) Solo permite la propagación de ondas TEM",
            "D) Requiere corriente continua en su conductor central"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las guías de onda son tubos metálicos huecos que actúan como filtros pasa-altas, guiando ondas electromagnéticas de alta frecuencia en modos transversales eléctricos (TE) o magnéticos (TM)."
    },
    {
        id: 41,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué operación matemática describe la salida de un sistema lineal e invariante en el tiempo (LTI) en el dominio del tiempo cuando se le aplica una señal de entrada $x(t)$ y su respuesta al impulso es $h(t)$?",
        opciones: [
            "A) Multiplicación algebraica",
            "B) Convolución continua ($y(t) = x(t) * h(t)$)",
            "C) Transformada de Laplace inversa",
            "D) Diferenciación cruzada"
        ],
        respuestaCorrecta: 1,
        explicacion: "La respuesta de cualquier sistema LTI continuo ante una entrada arbitraria se obtiene mediante la integral de convolución de la entrada con la respuesta al impulso del sistema."
    },
    {
        id: 42,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué establece el teorema de muestreo de Nyquist-Shannon para reconstruir sin pérdida de información una señal analógica de banda limitada con frecuencia máxima $f_{max}$?",
        opciones: [
            "A) La frecuencia de muestreo $f_s$ debe ser exactamente igual a $f_{max}$",
            "B) La frecuencia de muestreo $f_s$ debe ser estrictamente mayor que $2 f_{max}$",
            "C) La frecuencia de muestreo debe ser menor que la mitad de la frecuencia máxima",
            "D) No importa la frecuencia de muestreo si se utiliza un filtro digital"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para evitar el fenómeno de solapamiento (*aliasing*), la frecuencia de muestreo $f_s$ debe cumplir con la condición $f_s > 2 f_{max}$ (frecuencia de Nyquist)."
    },
    {
        id: 43,
        area: "Procesamiento de Señales",
        pregunta: "¿Cuál es la principal diferencia matemática entre la Transformada de Fourier de Tiempo Discreto (DTFT) y la Transformada Discreta de Fourier (DFT)?",
        opciones: [
            "A) La DTFT es continua y periódica en frecuencia, mientras que la DFT es discreta tanto en el tiempo como en la frecuencia",
            "B) La DFT solo se aplica a señales analógicas continuas",
            "C) La DTFT requiere necesariamente el algoritmo FFT",
            "D) La DFT no puede ser calculada por computadoras"
        ],
        respuestaCorrecta: 0,
        explicacion: "La DTFT opera con secuencias infinitas y produce un espectro continuo, en tanto que la DFT procesa un número finito de muestras y genera un conjunto discreto de coeficientes en frecuencia."
    },
    {
        id: 44,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué algoritmo se utiliza para calcular la Transformada Discreta de Fourier (DFT) reduciendo drásticamente su complejidad computacional de $O(N^2)$ a $O(N \\log_2 N)$?",
        opciones: [
            "A) Algoritmo de Runge-Kutta",
            "B) Transformada Rápida de Fourier (FFT)",
            "C) Método de Gauss-Seidel",
            "D) Filtro de Kalman"
        ],
        respuestaCorrecta: 1,
        explicacion: "La FFT (Fast Fourier Transform), desarrollada popularmente por Cooley y Tukey, explota las propiedades de simetría y periodicidad para acelerar el cálculo de la DFT."
    },
    {
        id: 45,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué caracteriza a un filtro digital de respuesta al impulso finita (FIR)?",
        opciones: [
            "A) Posee polos exclusivamente en el origen y su estabilidad es incondicional",
            "B) Sus salidas dependen de un número infinito de retroalimentaciones",
            "C) No puede tener fase lineal",
            "D) Requiere conversores analógicos complejos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los filtros FIR no tienen retroalimentación (todos sus polos están en $z=0$), lo que garantiza su estabilidad absoluta y facilita el diseño con fase lineal exacta."
    },
    {
        id: 46,
        area: "Procesamiento de Señales",
        pregunta: "¿Cuál es la función del espectro de densidad de potencia (PSD) de una señal aleatoria?",
        opciones: [
            "A) Describir cómo se distribuye la potencia de la señal en función de la frecuencia",
            "B) Calcular la energía total en el dominio del tiempo exclusivamente",
            "C) Determinar el voltaje pico de la señal de corriente continua",
            "D) Medir la resistencia eléctrica de un circuito impreso"
        ],
        respuestaCorrecta: 0,
        explicacion: "El PSD (Power Spectral Density) es la transformada de Fourier de la función de autocorrelación y muestra en qué bandas de frecuencia se concentra la potencia de la señal."
    },
    {
        id: 47,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué efecto produce un filtro pasa-altas en el dominio del tiempo sobre una señal escalón?",
        opciones: [
            "A) Deja pasar el escalón sin modificar su amplitud permanente",
            "B) Diferencia la señal, produciendo un pulso transitorio inicial que decae a cero",
            "C) Integra la señal convirtiéndola en una rampa",
            "D) Invierte la polaridad de la señal permanentemente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Como los filtros pasa-altas bloquean las componentes de frecuencia cero (DC), la respuesta ante un escalón constante decae exponencialmente hasta anularse en estado estacionario."
    },
    {
        id: 48,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué representa la Transformada Z en el análisis de sistemas discretos?",
        opciones: [
            "A) El equivalente de la Transformada de Laplace para señales y sistemas en tiempo discreto",
            "B) Un método para calcular la temperatura de los microprocesadores",
            "C) Una técnica para modular señales de radio FM",
            "D) La conversión de señales digitales a analógicas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Transformada Z mapea ecuaciones en diferencias finitas al plano complejo $Z$, permitiendo analizar la estabilidad y la respuesta en frecuencia de sistemas digitales de forma análoga a Laplace en tiempo continuo."
    },
    {
        id: 49,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué es el fenómeno de Gibbs en el truncamiento de series de Fourier o diseño de filtros?",
        opciones: [
            "A) La oscilación parásita o sobreimpulso cercano a las discontinuidades de una señal reconstruida con un número finito de armónicos",
            "B) La atenuación total de las frecuencias altas en un filtro Butterworth",
            "C) El retraso temporal introducido por los convertidores A/D",
            "D) La distorsión por ruido térmico en resistencias"
        ],
        respuestaCorrecta: 0,
        explicacion: "El fenómeno de Gibbs describe el persistente sobreimpulso de aproximadamente $9\\%$ que aparece cerca de los saltos abruptos cuando se aproxima una función discontinua mediante sumatorias finitas."
    },
    {
        id: 50,
        area: "Procesamiento de Señales",
        pregunta: "¿Qué tipo de filtro analógico se caracteriza por tener una respuesta en frecuencia con máxima planicidad en la banda de paso (*maximally flat*)?",
        opciones: [
            "A) Filtro Chebyshev",
            "B) Filtro Butterworth",
            "C) Filtro Elíptico (Cauer)",
            "D) Filtro Bessel"
        ],
        respuestaCorrecta: 1,
        explicacion: "El filtro Butterworth está diseñado para tener una banda de paso lo más plana posible, sin ondulaciones (*ripples*), a costa de una transición más gradual hacia la banda de atenuación."
    },
    {
        id: 51,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué instrumento electrónico se utiliza principalmente para medir la relación de fase, frecuencia y visualizar formas de onda en función del tiempo?",
        opciones: [
            "A) Multímetro digital de verdadero valor eficaz (True RMS)",
            "B) Osciloscopio de almacenamiento digital (DSO)",
            "C) Analizador de redes vectoriales",
            "D) Puente de Wheatstone"
        ],
        respuestaCorrecta: 1,
        explicacion: "El osciloscopio permite graficar voltajes variables en el tiempo en un plano cartesiano, siendo la herramienta estándar para la visualización y diagnóstico de señales electrónicas."
    },
    {
        id: 52,
        area: "Instrumentación y Medición",
        pregunta: "¿Cuál es el propósito de utilizar un circuito puente de Wheatstone en la medición con galgas estriadas (*strain gauges*)?",
        opciones: [
            "A) Amplificar la corriente alterna de la red eléctrica",
            "B) Detectar variaciones sumamente pequeñas de resistencia eléctrica derivadas de deformaciones mecánicas",
            "C) Convertir señales digitales en analógicas",
            "D) Proteger el circuito contra sobretensiones transitorias"
        ],
        respuestaCorrecta: 1,
        explicacion: "El puente de Wheatstone es un circuito de alta sensibilidad capaz de medir cambios diminutos de impedancia en transductores resistivos como las galgas extensiométricas."
    },
    {
        id: 53,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué mide un analizador de espectros en el dominio de la frecuencia?",
        opciones: [
            "A) La amplitud de las componentes espectrales de una señal en función de la frecuencia",
            "B) La impedancia compleja de una antena de transmisión",
            "C) El consumo de potencia instantáneo de un motor de inducción",
            "D) La velocidad de propagación de los datos en una red Ethernet"
        ],
        respuestaCorrecta: 0,
        explicacion: "Mientras el osciloscopio opera en el dominio del tiempo, el analizador de espectros descompone la señal para mostrar su contenido armónico y amplitud en el dominio de la frecuencia."
    },
    {
        id: 54,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué significa que un multímetro digital cuente con la función 'True RMS'?",
        opciones: [
            "A) Mide únicamente el valor pico de la señal senoidal pura",
            "B) Calcula correctamente el valor eficaz (Root Mean Square) de señales complejas, distorsionadas o no senoidales",
            "C) Realiza mediciones con una precisión de diez dígitos significativos",
            "D) Calibra automáticamente su impedancia interna de entrada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los multímetros True RMS calculan la raíz cuadrática media real de formas de onda arbitrarias (como ondas cuadradas, triangulares o con armónicos), a diferencia de los medidores económicos que estiman el valor eficaz asumiendo senoidales puras."
    },
    {
        id: 55,
        area: "Instrumentación y Medición",
        pregunta: "¿Cuál es la función principal de una sonda atenuadora (por ejemplo, $10\\text{X}$) en un osciloscopio?",
        opciones: [
            "A) Elevar la amplitud de la señal para proteger la pantalla del equipo",
            "B) Incrementar la impedancia de entrada y reducir la carga capacitiva sobre el circuito bajo prueba",
            "C) Convertir señales ópticas en eléctricas",
            "D) Eliminar el ruido de la red eléctrica de 60 Hz"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una sonda $10\\text{X}$ presenta una resistencia de entrada alta (típicamente $10\\text{ M}\\Omega$) y menor capacitancia, minimizando el impacto de la medición sobre el circuito analógico analizado."
    },
    {
        id: 56,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué error de medición se clasifica como un error sistemático?",
        opciones: [
            "A) Variaciones aleatorias provocadas por el ruido térmico del ambiente",
            "B) Un error de calibración constante en el cero del instrumento",
            "C) Errores de apreciación por lectura humana al azar",
            "D) Fluctuaciones transitorias de la tensión de alimentación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los errores sistemáticos son reproducibles y se deben a imperfecciones del instrumento o de su calibración, pudiendo corregirse mediante ajustes matemáticos o recalibración."
    },
    {
        id: 57,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué parámetro de un sensor indica el cambio en la señal de salida por cada unidad de cambio en la variable física medida?",
        opciones: [
            "A) Sensibilidad",
            "B) Histéresis",
            "C) Linealidad",
            "D) Resolución"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sensibilidad representa la pendiente de la curva de calibración del sensor, es decir, la razón de cambio de la salida respecto a la entrada."
    },
    {
        id: 58,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué dispositivo semiconductor se utiliza habitualmente para la medición precisa de temperaturas en instrumentación industrial debido a su relación lineal de voltaje-temperatura?",
        opciones: [
            "A) Termistor NTC",
            "B) Termopar tipo K",
            "C) Sensor de temperatura de circuito integrado (ej. LM35)",
            "D) Varistor de óxido metálico"
        ],
        respuestaCorrecta: 2,
        explicacion: "Sensores integrados como el LM35 entregan una salida lineal de $10\\text{ mV}/^\\circ\\text{C}$, facilitando su lectura directa en sistemas de adquisición de datos sin necesidad de complejas tablas de compensación."
    },
    {
        id: 59,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué tipo de error en los sistemas de conversión analógica a digital (ADC) ocurre cuando la señal analógica excede el rango máximo de conversión del dispositivo?",
        opciones: [
            "A) Error de cuantización",
            "B) Error de saturación o recorte (*clipping*)",
            "C) Error de no linealidad integral",
            "D) Error de offset"
        ],
        respuestaCorrecta: 1,
        explicacion: "El recorte o saturación se produce cuando la amplitud de la señal de entrada supera el voltaje de referencia máximo ($V_{ref}$) del ADC, truncando los bits superiores."
    },
    {
        id: 60,
        area: "Instrumentación y Medición",
        pregunta: "¿Qué parámetro define el número total de valores discretos distintos que un convertidor analógico a digital (ADC) de $N$ bits puede representar?",
        opciones: [
            "A) $N$",
            "B) $2^N - 1$",
            "C) $2^N$",
            "D) $N^2$"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un convertidor de $N$ bits puede codificar exactamente $2^N$ niveles de cuantización diferentes (desde $0$ hasta $2^N - 1$)"
    },
    {
        id: 61,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Cuál es la función principal de una interrupción por hardware en un microcontrolador?",
        opciones: [
            "A) Detener permanentemente el reloj del sistema",
            "B) Suspender temporalmente la ejecución del programa principal para atender un evento prioritario y externo, retornando después al punto de interrupción",
            "C) Aumentar la velocidad de procesamiento del bus de datos",
            "D) Borrar la memoria flash del dispositivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las interrupciones permiten al microcontrolador reaccionar de forma inmediata ante eventos asíncronos mediante rutinas de servicio (ISR), evitando el sondeo constante (*polling*)."
    },
    {
        id: 62,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es el contador de programa (*Program Counter* o PC) en la arquitectura de un microcontrolador?",
        opciones: [
            "A) Un registro que almacena la dirección de memoria de la siguiente instrucción a ejecutar",
            "B) Un contador de pulsos de reloj externos",
            "C) Una variable almacenada en la memoria RAM volátil",
            "D) El acumulador principal de operaciones aritméticas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Program Counter (PC) es un registro fundamental que apunta siempre a la dirección de memoria de programa (Flash/ROM) donde se encuentra la próxima instrucción que procesará la CPU."
    },
    {
        id: 63,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Cuál es la característica principal de la arquitectura de Harvard en comparación con la arquitectura de von Neumann?",
        opciones: [
            "A) Utiliza el mismo bus físico para datos e instrucciones",
            "B) Cuenta con memorias y buses separados físicamente para datos y para instrucciones",
            "C) No permite el uso de microprocesadores RISC",
            "D) Carece de unidad aritmético-lógica (ALU)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La arquitectura Harvard separa los caminos de datos y de instrucciones, permitiendo accesos simultáneos y mejorando el rendimiento general del procesador."
    },
    {
        id: 64,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué función cumple el circuito de vigilancia o *Watchdog Timer* (WDT) en un sistema embebido?",
        opciones: [
            "A) Monitorear el voltaje de la batería principal",
            "B) Reiniciar automáticamente el microcontrolador si el software se bloquea o entra en un bucle infinito",
            "C) Medir el tiempo transcurrido entre dos interrupciones",
            "D) Cifrar las comunicaciones por el puerto serial"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Watchdog es un temporizador de seguridad que debe ser refrescado periódicamente por el software; si el programa se congela, el WDT expira y genera un reinicio físico del sistema."
    },
    {
        id: 65,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué protocolo de comunicación serial síncrono utiliza líneas separadas para reloj (SCLK), datos de maestro a esclavo (MOSI), datos de esclavo a maestro (MISO) y selección de esclavo (SS)?",
        opciones: [
            "A) I2C",
            "B) UART",
            "C) SPI (Serial Peripheral Interface)",
            "D) RS-232"
        ],
        respuestaCorrecta: 2,
        explicacion: "SPI es un protocolo síncrono de alta velocidad que emplea cuatro cables principales para la comunicación full-duplex entre un maestro y múltiples esclavos."
    },
    {
        id: 66,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué líneas de señal requiere el protocolo de comunicación serial síncrono I2C (*Inter-Integrated Circuit*)?",
        opciones: [
            "A) MOSI y MISO",
            "B) TX y RX",
            "C) SDA (línea de datos) y SCL (línea de reloj)",
            "D) RTS y CTS"
        ],
        respuestaCorrecta: 2,
        explicacion: "I2C utiliza únicamente dos hilos bidireccionales: SDA para la transferencia de datos y SCL para la señal de reloj sincronizada por el maestro."
    },
    {
        id: 67,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Cuál es la diferencia fundamental entre la transferencia de datos por sondeo (*polling*) y mediante acceso directo a memoria (DMA)?",
        opciones: [
            "A) El DMA requiere que la CPU intervenga en cada byte transferido",
            "B) El DMA transfiere bloques de datos directamente entre periféricos y memoria RAM sin involucrar activamente a la CPU",
            "C) El sondeo es más rápido que cualquier sistema DMA",
            "D) El DMA solo funciona con dispositivos analógicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El controlador DMA libera a la CPU de la carga de mover grandes volúmenes de datos byte por byte, gestionando la transferencia de forma autónoma por el bus del sistema."
    },
    {
        id: 68,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué término describe la capacidad de un sistema operativo de tiempo real (RTOS) para atender un evento prioritario en un tiempo máximo garantizado?",
        opciones: [
            "A) Latencia de interrupción (*interrupt latency*)",
            "B) Rendimiento (*throughput*)",
            "C) Fragmentación de memoria",
            "D) Ancho de banda de red"
        ],
        respuestaCorrecta: 0,
        explicacion: "La latencia de interrupción y la latencia de cambio de contexto miden la rapidez y determinismo con que un RTOS responde ante estímulos externos."
    },
    {
        id: 69,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué significa que un microcontrolador tenga memoria Flash con capacidad de programación en sistema (ISP)?",
        opciones: [
            "A) Que el programa solo puede grabarse una sola vez en fábrica",
            "B) Que el código puede actualizarse directamente en la tarjeta decircuito mediante interfaces como ICSP o UART sin desmontar el chip",
            "C) Que carece de memoria RAM volátil",
            "D) Que utiliza discos duros mecánicos externos"
        ],
        respuestaCorrecta: 1,
        explicacion: "ISP (In-System Programming) permite reprogramar la memoria de código del microcontrolador mientras este se encuentra instalado en la aplicación final."
    },
    {
        id: 70,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué propósito tiene el registro de estado o banderas (*Status Register / FLAGS*) en la CPU de un microcontrolador?",
        opciones: [
            "A) Almacenar las direcciones de las subrutinas",
            "B) Guardar indicadores booleanos sobre el resultado de la última operación lógica o aritmética (ej. cero, negativo, desbordamiento, acarreo)",
            "C) Controlar la velocidad del puerto USB",
            "D) Configurar la ganancia del convertidor A/D"
        ],
        respuestaCorrecta: 1,
        explicacion: "El registro de estado almacena banderas (Carry, Zero, Overflow, Negative) que reflejan el estado del resultado en la ALU, esenciales para las operaciones de salto condicional."
    },
    {
        id: 71,
        area: "Comunicaciones y Redes",
        pregunta: "¿Cuál es la función principal de la modulación por desplazamiento de fase en cuadratura (QPSK)?",
        opciones: [
            "A) Modular la amplitud de la señal portadora con tres estados lógicos",
            "B) Codificar dos bits por cada símbolo cambiando la fase de la portadora en cuatro posibles valores",
            "C) Duplicar la frecuencia de transmisión de radio",
            "D) Eliminar completamente el ruido térmico en canales satelitales"
        ],
        respuestaCorrecta: 1,
        explicacion: "QPSK transmite 2 bits por símbolo al dividir el círculo trigonométrico de fase en 4 cuadrantes ($0, \\pi/2, \\pi, 3\\pi/2$), logrando mayor eficiencia espectral que BPSK."
    },
    {
        id: 72,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué establece el teorema de capacidad de canal de Shannon-Hartley sobre la tasa máxima de transmisión de datos sin errores ($C$) en un canal ruidoso?",
        opciones: [
            "A) $C = B \\log_2(1 + S/N)$",
            "B) $C = S / N$",
            "C) $C = 2 B \\text{ Hz}$",
            "D) $C = \\frac{1}{2\\pi \\sqrt{LC}}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fórmula de Shannon relaciona el ancho de banda del canal ($B$) y la relación señal a ruido ($S/N$) para definir el límite teórico máximo de velocidad de datos sin errores."
    },
    {
        id: 73,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué caracteriza a una antena dipolo de media onda ($\\lambda/2$)?",
        opciones: [
            "A) Posee una impedancia de entrada aproximada de $73\\;\\Omega$ y un diagrama de radiación toroidal omnidireccional en el plano perpendicular",
            "B) Es una antena directiva de alta ganancia utilizada para enlaces vía satélite",
            "C) Requiere una conexión de guía de onda rectangular obligatoria",
            "D) Su longitud física es exactamente igual a la frecuencia de corte"
        ],
        respuestaCorrecta: 0,
        explicacion: "El dipolo de media onda es la antena elemental de referencia, con una impedancia característica cercana a $73\\,\\Omega$ y un patrón de radiación en forma de dona."
    },
    {
        id: 74,
        area: "Comunicaciones y Redes",
        pregunta: "¿Cuál es el propósito del código de corrección de errores hacia adelante (FEC - Forward Error Correction)?",
        opciones: [
            "A) Solicitar la retransmisión de paquetes perdidos mediante el protocolo TCP",
            "B) Añadir bits de redundancia a la transmisión para que el receptor pueda detectar y corregir errores sin solicitar retransmisión",
            "C) Comprimir la información de video para ocupar menor ancho de banda",
            "D) Cifrar los datos para evitar escuchas no autorizadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "FEC añade redundancia estructurada (como códigos de Hamming o Reed-Solomon) permitiendo al receptor corregir errores en tránsito, ideal para canales con gran retardo como las comunicaciones espaciales."
    },
    {
        id: 75,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué ventaja principal ofrece la fibra óptica frente a los cables de pares de cobre tradicionales?",
        opciones: [
            "A) Mayor inmunidad a interferencias electromagnéticas y mayor ancho de banda a largas distancias",
            "B) Menor costo de instalación y conectores mecánicos más sencillos",
            "C) Ausencia total de atenuación en cualquier longitud",
            "D) No requiere ningún tipo de transmisor óptico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fibra óptica utiliza luz guiada por reflexión interna total, lo que la hace inmune al ruido electromagnético y le otorga capacidades masivas de transmisión a gran distancia."
    },
    {
        id: 76,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué describe la modulación de frecuencia (FM) en comparación con la modulación de amplitud (AM)?",
        opciones: [
            "A) La amplitud de la portadora varía y la frecuencia permanece constante",
            "B) La frecuencia de la portadora varía en proporción directa a la amplitud de la señal moduladora, manteniendo la amplitud constante",
            "C) Ambas modulación son idénticas en el dominio de la frecuencia",
            "D) FM requiere menor ancho de banda que AM"
        ],
        respuestaCorrecta: 1,
        explicacion: "En FM, la amplitud de la señal moduladora controla la desviación de frecuencia de la portadora. Al ser la amplitud constante, ofrece mayor inmunidad frente a ruidos impulsivos de amplitud."
    },
    {
        id: 77,
        area: "Comunicaciones y Redes",
        pregunta: "¿Cuál es la función de un mezclador de RF (*mixer*) en un receptor superheterodino?",
        opciones: [
            "A) Amplificar la potencia de salida hacia la antena",
            "B) Combinar la señal de radiofrecuencia (RF) con la de un oscilador local (LO) para generar la frecuencia intermedia (FI)",
            "C) Demodular la señal de audio final",
            "D) Filtrar los armónicos de la fuente de alimentación"
        ],
        respuestaCorrecta: 1,
        explicacion: "El mezclador utiliza la propiedad de no linealidad para realizar una multiplicación en el dominio del tiempo, trasladando la frecuencia de RF a una frecuencia intermedia (FI) fija."
    },
    {
        id: 78,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué significa que un sistema de comunicaciones sea *full-duplex*?",
        opciones: [
            "A) Los datos se transmiten en un solo sentido de forma permanente",
            "B) La comunicación bidireccional puede llevarse a cabo simultáneamente en ambos sentidos",
            "C) La transmisión se realiza intercalando turnos por el mismo canal",
            "D) Utiliza modulación exclusivamente digital"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un sistema full-duplex permite enviar y recibir información al mismo tiempo (como en telefonía celular), a diferencia del half-duplex (ej. radios walkie-talkie)."
    },
    {
        id: 79,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué mide la relación portadora a ruido (CNR o C/N) en un enlace de comunicaciones vía satélite?",
        opciones: [
            "A) La calidad y potencia de la señal recibida en relación con el ruido térmico del sistema antes del demodulador",
            "B) La relación entre la corriente de colector y la corriente de base",
            "C) El retardo de propagación de la señal en órbita geoestacionaria",
            "D) La ganancia física de la antena parabólica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El C/N es el indicador fundamental en RF para evaluar la calidad de un enlace radioeléctrico antes del proceso de demodulación digital."
    },
    {
        id: 80,
        area: "Comunicaciones y Redes",
        pregunta: "¿Qué función cumple el protocolo TCP (*Transmission Control Protocol*) en el modelo de red de computadoras?",
        opciones: [
            "A) Proveer un servicio de entrega de paquetes confiable, orientado a conexión, con control de flujo y retransmisión de errores",
            "B) Enrutar paquetes a través de la red mundial IP",
            "C) Traducir nombres de dominio a direcciones IP",
            "D) Asignar direcciones físicas MAC a las tarjetas de red"
        ],
        respuestaCorrecta: 0,
        explicacion: "TCP opera en la capa de transporte asegurando la entrega ordenada, sin pérdidas y verificada de los segmentos de datos entre aplicaciones."
    },
    {
        id: 81,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es el componente semiconductor de potencia unidireccional que se dispara mediante un pulso en su compuerta y permanece conduciendo hasta que la corriente directa cae por debajo de la corriente de sostenimiento (*holding current*)?",
        opciones: [
            "A) Transistor MOSFET de potencia",
            "B) Diodo Schockley",
            "C) Tiristor (SCR - Silicon Controlled Rectifier)",
            "D) Transistor IGBT"
        ],
        respuestaCorrecta: 2,
        explicacion: "El SCR es un interruptor controlado de cuatro capas (PNPN) que se enciende con un pulso en el gate y se apaga únicamente cuando la corriente principal se extingue."
    },
    {
        id: 82,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué ventaja principal ofrece un transistor IGBT (*Insulated Gate Bipolar Transistor*) frente a un BJT de potencia?",
        opciones: [
            "A) Alta impedancia de entrada tipo MOSFET combinada con bajas pérdidas de conducción en estado activo propias de un BJT",
            "B) Velocidad de conmutación infinita sin pérdidas parásitas",
            "C) Capacidad de conducir corriente alterna bidireccional sin diodos adicionales",
            "D) Menor costo de fabricación en aplicaciones de baja potencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El IGBT combina la facilidad de control por voltaje en compuerta (aislada como un MOSFET) con la gran capacidad de manejo de altas tensiones y corrientes de los BJT."
    },
    {
        id: 83,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es la función principal de un convertidor CD-CD tipo reductor (*Buck Converter*)?",
        opciones: [
            "A) Elevar un voltaje de corriente continua a un nivel mayor",
            "B) Convertir un voltaje de corriente continua de entrada en un voltaje de corriente continua de salida menor, con alta eficiencia",
            "C) Transformar corriente alterna en corriente continua pura",
            "D) Invertir la polaridad de la carga permanentemente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El convertidor Buck utiliza un interruptor de alta frecuencia, un inductor y un diodo para reducir de forma eficiente una tensión DC de entrada a un nivel inferior."
    },
    {
        id: 84,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué circuito de electrónica de potencia se utiliza para convertir energía de corriente continua (DC) en energía de corriente alterna (AC)?",
        opciones: [
            "A) Rectificador controlado",
            "B) Inversor (*Inverter*)",
            "C) Chopper",
            "D) Cicloconvertidor"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los inversores conmutan semiconductores de potencia para generar formas de onda de corriente alterna a partir de fuentes de corriente continua (como paneles solares o baterías)."
    },
    {
        id: 85,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué efecto produce la inserción de un inductor en serie en la salida de un rectificador de diodos para fuentes de alimentación?",
        opciones: [
            "A) Suaviza y filtra las ondulaciones (*ripple*) de la corriente de carga",
            "B) Incrementa la frecuencia de la red eléctrica",
            "C) Provoca un cortocircuito inmediato en el transformador",
            "D) Eleva el voltaje pico a valores infinitos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El inductor se opone a los cambios bruscos de corriente, ayudando a filtrar el rizo de corriente en la salida del rectificador junto con los condensadores."
    },
    {
        id: 86,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es el principio de funcionamiento de un rectificador controlado de silicio (SCR) en un circuito de control de fase de AC (ej. Dimmer de luz)?",
        opciones: [
            "A) Variar el ángulo de disparo (*firing angle*) en cada semiciclo para controlar la potencia RMS entregada a la carga",
            "B) Rectificar la señal sin importar la frecuencia de la red",
            "C) Cortar la señal armónica de alta frecuencia exclusivamente",
            "D) Elevar el voltaje de la línea comercial"
        ],
        respuestaCorrecta: 0,
        explicacion: "Controlando el momento exacto en el semiciclo de AC en que se dispara el SCR, se regula la cantidad de energía transferida a la carga (control de fase)."
    },
    {
        id: 87,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué es el factor de potencia en sistemas eléctricos con cargas no lineales (como fuentes conmutadas)?",
        opciones: [
            "A) Únicamente el coseno del ángulo de desfase entre tensión y corriente fundamental",
            "B) El producto del factor de desplazamiento por el factor de distorsión armónica debido a corrientes no senoidales",
            "C) El cociente entre la potencia reactiva y la potencia aparente",
            "D) La relación entre la resistencia y la reactancia inductiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "En presencia de armónicos, el factor de potencia total considera tanto el desfase lineal (displacement power factor) como la distorsión armónica total (THD)."
    },
    {
        id: 88,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es la función de un diodo de libre circulación (*freewheeling diode*) conectado en antiparalelo con una carga inductiva alimentada por conmutación?",
        opciones: [
            "A) Bloquear el flujo de corriente directa en estado estacionario",
            "B) Proporcionar un camino de recirculación para la corriente inductiva cuando el interruptor se abre, evitando sobretensiones destructivas",
            "C) Incrementar la velocidad de carga del inductor",
            "D) Convertir la energía inductiva en luz visible"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando un interruptor abre el circuito de un inductor, este genera un pico de voltaje elevado ($V = L di/dt$). El diodo de rueda libre disipa esta energía de manera segura."
    },
    {
        id: 89,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué tipo de convertidor DC-DC es capaz de elevar o reducir el voltaje de entrada según el ciclo de trabajo?",
        opciones: [
            "A) Convertidor Buck",
            "B) Convertidor Boost",
            "C) Convertidor Buck-Boost",
            "D) Rectificador en puente"
        ],
        respuestaCorrecta: 2,
        explicacion: "El convertidor Buck-Boost puede proporcionar un voltaje de salida cuya magnitud sea mayor o menor que la entrada, invirtiendo la polaridad de la salida."
    },
    {
        id: 90,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué parmámetro define la máxima frecuencia a la que puede operar un transistor MOSFET de potencia de manera eficiente?",
        opciones: [
            "A) La capacitancia de entrada y de compuerta (*gate charge*)",
            "B) La resistencia de la carga conectada en el drenador",
            "C) La temperatura ambiente del disipador de aluminio",
            "D) El voltaje de ruptura del diodo Zener interno"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las capacitancias parásitas del MOSFET (especialmente $C_{iss}, C_{oss}, C_{rss}$) requieren corrientes de carga y descarga en la compuerta, limitando la velocidad máxima de conmutación."
    },
    {
        id: 91,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Cuál es el propósito de aplicar una máscara de soldadura (*solder mask*) en una tarjeta de circuito impreso (PCB)?",
        opciones: [
            "A) Conducir electricidad entre los componentes de montaje superficial",
            "B) Proteger las pistas de cobre contra la oxidación, puentes de soldadura accidentales y daños ambientales",
            "C) Incrementar la flexibilidad mecánica del laminado epóxico",
            "D) Disipar el calor generado por los circuitos integrados"
        ],
        respuestaCorrecta: 1,
        explicacion: "La máscara de soldadura (comúnmente de color verde) aísla las trazas de cobre expuestas, permitiendo soldar únicamente en las almohadillas (*pads*) diseñadas para ello."
    },
    {
        id: 92,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué material dieléctrico es el más comúnmente utilizado como sustrato base en la fabricación de tarjetas de circuito impreso estándar?",
        opciones: [
            "A) Polietileno de baja densidad",
            "B) FR-4 (fibra de vidrio epóxico retardante de flama)",
            "C) Cerámica de alúmina pura",
            "D) Papel comprimido encerado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El FR-4 es el estándar industrial en la fabricación de PCBs debido a su excelente aislamiento eléctrico, resistencia mecánica y estabilidad térmica."
    },
    {
        id: 93,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué indica la presencia de una 'vía' (*via*) en el diseño de una PCB multicapa?",
        opciones: [
            "A) Un punto de prueba para conectar osciloscopios",
            "B) Una perforación metalizada que permite conectar eléctricamente trazas entre diferentes capas de la tarjeta",
            "C) Una resistencia de terminación para alta frecuencia",
            "D) Un espacio libre de cobre para evitar interferencias"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las vías son agujeros pasantes con recubrimiento metálico interno que comunican pistas eléctricas situadas en distintas capas de una PCB multicapa."
    },
    {
        id: 94,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué regla de diseño geométrica básica debe considerarse al trazar pistas de alta corriente en una PCB?",
        opciones: [
            "A) Hacerlas lo más delgadas posible para ahorrar cobre",
            "B) Aumentar el ancho de la pista proporcionalmente a la corriente para evitar calentamiento excesivo y caída de voltaje",
            "C) Cruzarlas formando ángulos rectos estrictos de 90 grados",
            "D) Utilizar exclusivamente la capa superior de la tarjeta"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pistas anchas reducen la resistencia eléctrica y la densidad de corriente, previniendo el sobrecalentamiento y la degradación del circuito impreso según normas como IPC-2221."
    },
    {
        id: 95,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué problema de integridad de señal puede provocar el trazado de pistas con ángulos rectos cerrados ($90^\\circ$) en circuitos de alta frecuencia?",
        opciones: [
            "A) Reflexiones de señal por cambios repentinos en la impedancia característica de la pista",
            "B) Cortocircuito inmediato con la fuente de alimentación",
            "C) Reducción del campo magnético terrestre",
            "D) Incremento de la capacitancia de la máscara de soldadura a valores infinitos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los ángulos agudos o de $90^\\circ$ en altas frecuencias actúan como discontinuidades físicas que alteran localmente el ancho de pista, provocando reflexiones y radiación parásita."
    },
    {
        id: 96,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Cuál es la función de los planos de tierra (*ground planes*) continuos en tarjetas de circuito impreso de alta velocidad?",
        opciones: [
            "A) Proveer una ruta de retorno de baja impedancia para las señales, reducir el ruido electromagnético y minimizar la diafonía (*crosstalk*)",
            "B) Elevar la resistencia total del circuito a 100 ohmios",
            "C) Servir como disipador térmico exclusivo para resistores de carbón",
            "D) Aumentar el peso físico de la tarjeta para evitar vibraciones"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los planos de tierra sólidos reducen la inductancia de retorno, actúan como pantalla electromagnética y aseguran la integridad de las señales digitales y de RF."
    },
    {
        id: 97,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué tecnología de ensamblaje de componentes se caracteriza por soldar los pines directamente sobre las almohadillas superficiales de la PCB sin requerir perforaciones pasantes?",
        opciones: [
            "A) THT (Through-Hole Technology)",
            "B) SMT (Surface-Mount Technology)",
            "C) Wire-wrapping",
            "D) Conexión por cable de cobre trenzado"
        ],
        respuestaCorrecta: 1,
        explicacion: "SMT (Tecnología de Montaje Superficial) permite componentes más pequeños, alta densidad de integración y automatización en líneas de producción tipo pick-and-place."
    },
    {
        id: 98,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué archivo estándar generado por herramientas CAD es universalmente requerido por lasmáquinas de fabricación por fotoploteo y CNC para la producción de PCBs?",
        opciones: [
            "A) Archivo Gerber y taladros Excellon",
            "B) Archivo de texto plano en formato Word",
            "C) Diagrama esquemático en PDF",
            "D) Código fuente en lenguaje C"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los archivos Gerber contienen la información vectorial de las capas de cobre, máscara y serigrafía, siendo el estándar de la industria para la fabricación de circuitos impresos."
    },
    {
        id: 99,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué describe el proceso de corrosión química (*etching*) en la fabricación de PCBs?",
        opciones: [
            "A) Depositar una capa de oro sobre los conectores de borde",
            "B) Remover el exceso de cobre no protegido de la laminación mediante el uso de sustancias químicas como cloruro férrico o persulfato de sodio",
            "C) Perforar los agujeros para los componentes THT",
            "D) Aplicar la serigrafía con el número de parte"
        ],
        respuestaCorrecta: 1,
        explicacion: "El grabado químico disuelve el cobre expuesto que no está cubierto por el fotorresistente, dejando únicamente las pistas diseñadas en el circuito."
    },
    {
        id: 100,
        area: "Diseño y Fabricación de PCBs",
        pregunta: "¿Qué es el apilamiento de capas (*layer stack-up*) en el diseño de una PCB multicapa?",
        opciones: [
            "A) El orden de secuencia en que se organizan las capas de cobre (señales, planos de potencia y tierra) y los dieléctricos aislantes",
            "B) La lista de materiales de los componentes electrónicos",
            "C) La altura máxima de los componentes soldados en la tarjeta",
            "D) El orden de prueba en las camas de clavos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El diseño adecuado del stack-up es crucial para controlar la impedancia característica de las pistas, la compatibilidad electromagnética y la integridad de la señal."
    },
    {
        id: 101,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué representa el Valor Presente Neto (VPN o NPV) en la evaluación financiera de un proyecto de ingeniería?",
        opciones: [
            "A) La suma de todos los flujos de efectivo futuros sin descontar",
            "B) El valor actual de los flujos de efectivo futuros del proyecto menos la inversión inicial, descontados a una tasa de interés específica",
            "C) El costo total de fabricación de los prototipos impresos",
            "D) La ganancia bruta anual obtenida por ventas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El VPN evalúa la rentabilidad trayendo a valor presente todos los flujos netos de caja futuros; un VPN positivo indica que el proyecto genera más valor que la tasa de descuento exigida."
    },
    {
        id: 102,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué define la Tasa Interna de Retorno (TIR o IRR) en un análisis financiero?",
        opciones: [
            "A) La tasa de descuento para la cual el Valor Presente Neto (VPN) del proyecto es exactamente igual a cero",
            "B) El porcentaje de impuestos pagados al gobierno por la venta de equipos",
            "C) La tasa de interés anual que cobra el banco por un préstamo comercial",
            "D) El tiempo en años necesario para recuperar la inversión inicial"
        ],
        respuestaCorrecta: 0,
        explicacion: "La TIR es la tasa de rendimiento intrínseca del proyecto, correspondiente al punto donde los beneficios actualizados igualan exactamente a los desembolsos de inversión."
    },
    {
        id: 103,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué metodología de gestión de proyectos se basa en iteraciones cortas llamadas 'sprints', entregas incrementales y adaptabilidad continua al cambio?",
        opciones: [
            "A) Metodología en Cascada (*Waterfall*)",
            "B) Marco de trabajo Ágil (Scrum)",
            "C) Análisis de ruta crítica (CPM)",
            "D) Diagrama de Gantt tradicional estricto"
        ],
        respuestaCorrecta: 1,
        explicacion: "Scrum es un marco ágil que divide los proyectos complejos en ciclos cortos (sprints) para fomentar la colaboración y responder rápidamente a requisitos cambiantes."
    },
    {
        id: 104,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué identifica la ruta crítica en un diagrama de red de un proyecto (método CPM o PERT)?",
        opciones: [
            "A) Las tareas que tienen mayor holgura de tiempo antes de retrasarse",
            "B) La secuencia de actividades dependientes que determina la duración total más corta posible del proyecto",
            "C) El costo mínimo de los componentes electrónicos comprados",
            "D) Las actividades secundarias que pueden omitirse sin afectar el resultado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ruta crítica agrupa aquellas actividades con holgura cero; cualquier retraso en cualquiera de estos hitos impactará directamente en la fecha de finalización del proyecto."
    },
    {
        id: 105,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Cuál es el propósito del análisis de punto de equilibrio (*break-even analysis*) en la planeación de un producto electrónico?",
        opciones: [
            "A) Determinar el volumen de unidades que se deben vender para que los ingresos totales igualen a los costos totales (fijos y variables)",
            "B) Calcular la máxima potencia disipada por un transistor en cortocircuito",
            "C) Medir el tiempo de vida útil de un capacitor electrolítico",
            "D) Establecer la frecuencia de resonancia de un filtro activo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto de equilibrio señala el umbral financiero donde la empresa deja de tener pérdidas y comienza a generar utilidades operativas."
    },
    {
        id: 106,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué evalúa el Tiempo de Recuperación de la Inversión (*Payback Period*)?",
        opciones: [
            "A) El período exacto de tiempo requerido para recuperar el desembolso inicial de capital mediante los flujos de caja netos generados",
            "B) La vida útil técnica de los microprocesadores instalados",
            "C) El tiempo que tarda el equipo en fallar bajo pruebas de estrés térmico",
            "D) La duración del contrato con los proveedores de tablillas PCB"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Payback mide la liquidez y velocidad con la que se recupera el dinero invertido, aunque no toma en cuenta el valor del dinero en el tiempo más allá del punto de corte."
    },
    {
        id: 107,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué herramienta gráfica se utiliza comúnmente en la gestión de proyectos para mostrar el cronograma de actividades en función del tiempo mediante barras horizontales?",
        opciones: [
            "A) Diagrama de Bode",
            "B) Carta o Diagrama de Gantt",
            "C) Carta de Smith",
            "D) Diagrama de constelación QAM"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de Gantt ilustra visualmente la planeación temporal, el avance y la superposición de las tareas de un proyecto de ingeniería."
    },
    {
        id: 108,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué representan los costos indirectos en la estructura de costos de un proyecto de desarrollo electrónico?",
        opciones: [
            "A) El costo directo de los microcontroladores y resistores comprados",
            "B) Gastos operativos que no se pueden atribuir directamente a una sola unidad producida, como alquiler de instalaciones, servicios y salarios administrativos",
            "C) El costo de las placas de circuito impreso fabricadas a la medida",
            "D) Las multas por retrasos en entregas específicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los costos indirectos (overhead) apoyan la operación general del negocio pero no están directamente ligados a los materiales o mano de obra directa de cada tarjeta producida."
    },
    {
        id: 109,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Cuál es el objetivo principal de realizar un análisis de riesgos en un proyecto tecnológico?",
        opciones: [
            "A) Identificar, evaluar y planificar respuestas preventivas o correctivas ante eventos incidirían negativamente en el tiempo, costo o calidad del proyecto",
            "B) Incrementar artificialmente el presupuesto inicial solicitado al cliente",
            "C) Evitar por completo la contratación de ingenieros especialistas",
            "D) Reducir las pruebas de control de calidad en la línea de ensamble"
        ],
        respuestaCorrecta: 0,
        explicacion: "La gestión de riesgos anticipa contingencias (escasez de componentes, fallas técnicas, retrasos) para mitigar su impacto en los objetivos del proyecto."
    },
    {
        id: 110,
        area: "Ingeniería Económica y Gestión de Proyectos",
        pregunta: "¿Qué mide la métrica de Retorno sobre la Inversión (ROI - Return on Investment)?",
        opciones: [
            "A) La eficiencia financiera obtenida al relacionar la utilidad neta obtenida con respecto a la inversión realizada",
            "B) El número de horas que trabaja un microcontrolador sin interrupciones",
            "C) El cociente entre la potencia de entrada y salida de un amplificador",
            "D) La tasa de errores de transmisión en un canal de fibra óptica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ROI cuantifica el rendimiento financiero porcentual generado en relación con el capital invertido en el proyecto."
    },
    {
        id: 111,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué norma internacional establece los requisitos generales para la competencia de los laboratorios de ensayo y calibración en el ámbito metrológico?",
        opciones: [
            "A) ISO 9001",
            "B) ISO/IEC 17025",
            "C) ISO 14001",
            "D) IEEE 802.3"
        ],
        respuestaCorrecta: 1,
        explicacion: "ISO/IEC 17025 es el estándar internacional clave que garantiza la trazabilidad metrológica, la validez de los resultados y la competencia técnica en laboratorios de medición y prueba."
    },
    {
        id: 112,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Cuál es el propósito fundamental de la directiva RoHS (*Restriction of Hazardous Substances*) en la industria electrónica global?",
        opciones: [
            "A) Restringir el uso de seis sustancias peligrosas específicas (como plomo, mercurio, cadmio) en la fabricación de equipos eléctricos y electrónicos",
            "B) Regular las frecuencias de radiación permitidas para antenas de Wi-Fi",
            "C) Establecer los protocolos de encriptación de datos en internet",
            "D) Definir los salarios mínimos para ingenieros en desarrollo de hardware"
        ],
        respuestaCorrecta: 0,
        explicacion: "RoHS protege la salud humana y el medio ambiente al prohibir o limitar severamente materiales tóxicos comunes en soldaduras y componentes electrónicos."
    },
    {
        id: 113,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué evalúan las pruebas de compatibilidad electromagnética (EMC) según normativas internacionales como FCC o CE?",
        opciones: [
            "A) La resistencia estructural de la carcasa plástica ante impactos físicos",
            "B) La capacidad del equipo para operar sin generar emisiones electromagnéticas perturbadoras y sin ser afectado por interferencias externas",
            "C) El consumo de energía en modo de espera (*standby*)",
            "D) La velocidad máxima de procesamiento del microcontrolador"
        ],
        respuestaCorrecta: 1,
        explicacion: "EMC abarca tanto las emisiones conducidas y radiadas (EMI) como la inmunidad del dispositivo ante perturbaciones electromagnéticas del entorno."
    },
    {
        id: 114,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "De acuerdo con el código de ética profesional en ingeniería, ¿cuál debe ser la prioridad fundamental al diseñar un sistema electrónico que afecte al público?",
        opciones: [
            "A) Minimizar los costos de producción a cualquier costo para maximizar dividendos",
            "B) Velar primordialmente por la seguridad, la salud y el bienestar de la sociedad",
            "C) Ocultar fallas de diseño menores para evitar demandas legales",
            "D) Utilizar patentes vencidas para agilizar el desarrollo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los cánones éticos de la ingeniería establecen que la seguridad, la salud y el bienestar público constituyen la responsabilidad más alta de cualquier profesional."
    },
    {
        id: 115,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué significa el marcado CE en los productos electrónicos comercializados dentro del Espacio Económico Europeo?",
        opciones: [
            "A) Que el producto fue fabricado exclusivamente en China",
            "B) Que el fabricante declara la conformidad del producto con los requisitos esenciales de seguridad, salud y protección ambiental de las directivas europeas aplicables",
            "C) Que el dispositivo cuenta con una garantía extendida de diez años",
            "D) Que el circuito opera únicamente con corriente continua"
        ],
        respuestaCorrecta: 1,
        explicacion: "El marcado CE es un pasaporte comercial que indica el cumplimiento de normativas europeas obligatorias en materia de seguridad, EMC y ecodiseño."
    },
    {
        id: 116,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Cuál es la función del sistema de gestión de calidad certificado bajo la norma ISO 9001 en una empresa de manufactura electrónica?",
        opciones: [
            "A) Asegurar la mejora continua de los procesos, la satisfacción del cliente y la consistencia en la calidad de los productos fabricados",
            "B) Fijar los precios de venta de los componentes en el mercado internacional",
            "C) Controlar las emisiones de gases de efecto invernadero",
            "D) Gestionar las redes de área local de la oficina"
        ],
        respuestaCorrecta: 0,
        explicacion: "ISO 9001 estandariza los procesos organizacionales enfocándose en la calidad del producto/servicio y la satisfacción del cliente mediante la mejora continua."
    },
    {
        id: 117,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué protege legalmente el registro de una patente sobre un nuevo circuito integrado o invención electrónica?",
        opciones: [
            "A) El derecho exclusivo de explotación comercial, impidiendo que terceros fabriquen, usen o vendan la invención sin autorización durante un período determinado",
            "B) El logotipo comercial impreso en la carcasa del equipo",
            "C) El código fuente escrito en lenguaje C para el microcontrolador",
            "D) El diseño estético de la tarjeta de circuito impreso"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las patentes otorgan derechos de propiedad industrial temporales a los inventores a cambio de hacer pública su innovación técnica."
    },
    {
        id: 118,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué objetivo persigue la directiva WEEE (*Waste Electrical and Electronic Equipment*) en relación con los dispositivos electrónicos obsoletos?",
        opciones: [
            "A) Fomentar el depósito masivo de aparatos en vertederos municipales",
            "B) Regular la gestión adecuada, el reciclaje y la recuperación de residuos de aparatos eléctricos y electrónicos para reducir el impacto ambiental",
            "C) Prohibir la importación de semiconductores asiáticos",
            "D) Obligar a los usuarios a reparar sus propios equipos"
        ],
        respuestaCorrecta: 1,
        explicacion: "WEEE establece responsabilidades para los fabricantes en la recolección, tratamiento y reciclaje seguro de equipos electrónicos al final de su vida útil."
    },
    {
        id: 119,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Qué indica la presencia de una marca o símbolo de descarga electrostática (ESD) en componentes como MOSFETs o circuitos CMOS avanzados?",
        opciones: [
            "A) Que el componente es altamente sensible y susceptible de sufrir daños permanentes por acumulaciones de electricidad estática en el manejo",
            "B) Que el circuito funciona exclusivamente con energía solar",
            "C) Que el dispositivo puede operar bajo el agua sin aislamiento",
            "D) Que contiene materiales radiactivos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los dispositivos con compuertas aisladas (CMOS/MOSFET) pueden perforar sus óxidos aislantes ante descargas electrostáticas humanas, requiriendo protocolos de protección ESD (pulseras, tapetes disipativos)."
    },
    {
        id: 120,
        area: "Sección Transversal / Ética y Normativa",
        pregunta: "¿Cuál es la responsabilidad principal de un ingeniero en electrónica en relación con la propiedad intelectual ajena durante el diseño de un nuevo producto?",
        opciones: [
            "A) Copiar diseños comerciales populares sin modificaciones para reducir costos de ingeniería",
            "B) Respetar patentes, derechos de autor y licencias de software/hardware abierto, evitando el plagio o la infracción de patentes vigentes",
            "C) Publicar todos los secretos industriales en redes sociales",
            "D) Modificar los números de parte de los circuitos integrados para ocultar su procedencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ejercicio ético e legal de la ingeniería exige el respeto estricto a la propiedad intelectual, evitando violaciones de patentes y cumpliendo licencias de uso (como GPL, MIT, etc.)."
    }
];