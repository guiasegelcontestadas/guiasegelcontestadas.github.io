const bancoPreguntas = [
    {
        id: 1,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es el factor de seguridad adecuado para un componente sometido a fatiga con inversión total de esfuerzos, utilizando el criterio de Soderberg?",
        opciones: [
            "A) Se basa exclusivamente en la resistencia última a la tensión del material.",
            "B) Utiliza el límite de resistencia a la fatiga y la resistencia a la fluencia.",
            "C) Considera la resistencia última y la resistencia a la fluencia de manera simultánea.",
            "D) Emplea únicamente el esfuerzo cortante máximo sin importar la fluencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "El criterio de Soderberg es el más conservador para análisis de fatiga y relaciona el esfuerzo medio con el límite de resistencia a la fatiga, utilizando la resistencia a la fluencia como límite para el componente estático equivalente."
    },
    {
        id: 2,
        area: "Diseño Mecánico",
        pregunta: "En un eje de transmisión circular sometido a torsión pura y flexión estática simultánea, ¿qué teoría de falla estática es más recomendable para materiales dúctiles?",
        opciones: [
            "A) Teoría del esfuerzo normal máximo (Rankine)",
            "B) Teoría de la energía de deformación máxima (Beltrami)",
            "C) Teoría de la energía de distorsión máxima (Von Mises - Hencky)",
            "D) Teoría del esfuerzo cortante máximo (Coulomb-Mohr frágil)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La teoría de la energía de distorsión (Von Mises) es la más precisa para predecir la fluencia en metales dúctiles bajo estados multiaxiales de esfuerzos."
    },
    {
        id: 3,
        area: "Diseño Mecánico",
        pregunta: "Al diseñar un engrane recto, el fenómeno de interferencia geométrica entre los flancos de los dientes se puede evitar:",
        opciones: [
            "A) Aumentando el ángulo de presión o incrementando el número de dientes del piñón.",
            "B) Disminuyendo el módulo y reduciendo la altura del diente.",
            "C) Incrementando la distancia entre centros más allá de la nominal.",
            "D) Reduciendo el paso diametral y aumentando la velocidad tangencial."
        ],
        respuestaCorrecta: 0,
        explicacion: "La interferencia ocurre cuando la punta del diente del engrane penetra más allá del círculo de base del piñón. Se evita incrementando el ángulo de presión (ej. de 20° a 25°) o asegurando un número mínimo de dientes."
    },
    {
        id: 4,
        area: "Diseño Mecánico",
        pregunta: "¿Qué representa el coeficiente de concentración de esfuerzos ($K_t$) en un elemento mecánico?",
        opciones: [
            "A) La relación entre el esfuerzo nominal y el esfuerzo real en presencia de una discontinuidad geométrica.",
            "B) La relación entre el esfuerzo máximo real en la entalla y el esfuerzo nominal basado en la sección neta o bruta.",
            "C) El factor por el cual se reduce la resistencia a la fatiga debido únicamente al acabado superficial.",
            "D) La relación entre la deformación unitaria elástica y la deformación plástica local."
        ],
        respuestaCorrecta: 1,
        explicacion: "Por definición, el factor teórico de concentración de esfuerzos $K_t$ es el cociente del esfuerzo máximo local en la discontinuidad entre el esfuerzo nominal calculado sin considerar el efecto de la entalla."
    },
    {
        id: 5,
        area: "Diseño Mecánico",
        pregunta: "En cojinetes de rodamentos (rodamientos), la capacidad de carga dinámica básica ($C$) se utiliza principalmente para:",
        opciones: [
            "A) Determinar la carga estática máxima que el rodamiento soporta sin deformación permanente.",
            "B) Calcular la vida nominal del rodamiento en millones de revoluciones o horas de operación.",
            "C) Evaluar la fricción viscosa a altas velocidades de giro.",
            "D) Seleccionar el lubricante adecuado según la temperatura de operación."
        ],
        respuestaCorrecta: 1,
        explicacion: "La capacidad de carga dinámica $C$ sirve para calcular la vida de fatiga (vida nominal $L_{10}$) del rodamiento bajo cargas variables o constantes en rotación."
    },
    {
        id: 6,
        area: "Diseño Mecánico",
        pregunta: "Un resorte helicoidal de compresión hecho de alambre de acero se diseña considerando el factor de Wahl ($K_W$). ¿Qué efectos corrige este factor?",
        opciones: [
            "A) El pandeo lateral y la resonancia mecánica.",
            "B) La curvatura del alambre y el efecto directo del esfuerzo cortante torsional.",
            "C) La relajación de esfuerzos a temperaturas elevadas.",
            "D) La fricción entre espiras consecutivas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El factor de Wahl combina los efectos de la curvatura del alambre y el esfuerzo cortante directo debido a la torsión en resortes helicoidales de alambre redondo."
    },
    {
        id: 7,
        area: "Diseño Mecánico",
        pregunta: "En uniones empernadas sometidas a una carga externa de tensión variable, ¿cómo afecta el incremento de la rigidez del perno frente a la rigidez de los miembros unidos?",
        opciones: [
            "A) Incrementa la porción de la carga externa que soporta el perno, aumentando el riesgo de falla por fatiga.",
            "B) Reduce significativamente la carga cíclica experimentada por el perno.",
            "C) Disminuye la precarga inicial necesaria para asegurar la unión.",
            "D) Evita completamente el fenómeno de aflojamiento por vibración."
        ],
        respuestaCorrecta: 0,
        explicacion: "Si el perno es mucho más rígido que las placas unidas, una mayor fracción de la carga externa recae sobre el perno, elevando la amplitud del esfuerzo cíclico y reduciendo su vida a fatiga."
    },
    {
        id: 8,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la función principal de un embrague mecánico (clutch) en un sistema de transmisión de potencia?",
        opciones: [
            "A) Modificar la relación de velocidad y el torque entre el motor y la carga.",
            "B) Conectar y desconectar de manera suave y progresiva el eje motriz del eje conducido.",
            "C) Amortiguar las vibraciones torsionales de alta frecuencia exclusivamente.",
            "D) Invertir el sentido de giro de la flecha de salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los embragues permiten acoplar y desacoplar ejes en movimiento, facilitando el arranque del motor sin carga y el cambio de velocidades en sistemas de transmisión."
    },
    {
        id: 9,
        area: "Diseño Mecánico",
        pregunta: "En el análisis cinemático de mecanismos, un eslabón que realiza un movimiento de rotación completa alrededor de un eje fijo se denomina:",
        opciones: [
            "A) Biela",
            "B) Corredera",
            "C) Manivela",
            "D) Balancín"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una manivela es un eslabón que puede girar 360 grados completos alrededor de su pivote fijo."
    },
    {
        id: 10,
        area: "Diseño Mecánico",
        pregunta: "De acuerdo con la ley de Grashof para mecanismos de cuatro barras, ¿qué condición debe cumplirse para que al menos un eslabón pueda realizar una revolución completa respecto a los otros?",
        opciones: [
            "A) La suma de las longitudes del eslabón más corto y el más largo debe ser menor o igual que la suma de las longitudes de los dos eslabones restantes.",
            "B) Todos los eslabones deben tener exactamente la misma longitud.",
            "C) El eslabón fijo (bancada) debe ser estrictamente el más corto de los cuatro.",
            "D) La suma de los dos eslabones intermedios debe ser igual a cero."
        ],
        respuestaCorrecta: 0,
        explicacion: "El criterio de Grashof establece que si $S + L \\leq P + Q$ (donde S es el más corto, L el más largo y P, Q los otros dos), existe al menos una revolución completa posible entre los eslabones."
    },
    {
        id: 11,
        area: "Termofluidos",
        pregunta: "La primera ley de la termodinámica para un sistema cerrado que experimenta un ciclo termodinámico establece que:",
        opciones: [
            "A) El calor neto suministrado al sistema es igual al trabajo neto realizado por el sistema.",
            "B) La variación de la energía interna es igual a la suma del calor y el trabajo.",
            "C) La entropía del universo siempre aumenta en un proceso irreversible.",
            "D) El trabajo total es cero independientemente del proceso."
        ],
        respuestaCorrecta: 0,
        explicacion: "En un ciclo termodinámico, el estado inicial y final son idénticos, por lo que el cambio de energía interna es cero ($\Delta U = 0$), implicando que el calor neto transferido es igual al trabajo neto realizado ($Q_{neto} = W_{neto}$)."
    },
    {
        id: 12,
        area: "Termofluidos",
        pregunta: "¿Qué propiedad termodinámica permanece constante en un proceso isentrópico ideal?",
        opciones: [
            "A) Temperatura",
            "B) Presión",
            "C) Entropía",
            "D) Entalpía"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un proceso isentrópico se define como un proceso internamente reversible y adiabático, lo cual implica que la entropía del sistema permanece constante ($ds = 0$)."
    },
    {
        id: 13,
        area: "Termofluidos",
        pregunta: "En una tobera supersónica convergente-divergente (tobera de Laval), para que el fluido acelere en la sección divergente, el número de Mach ($Ma$) debe ser:",
        opciones: [
            "A) Menor que 1.0 (subónico)",
            "B) Exactamente igual a 1.0 (sónico en la garganta)",
            "C) Mayor que 1.0 (supersónico)",
            "D) Cero en todo el tramo divergente"
        ],
        respuestaCorrecta: 2,
        explicacion: "Según la relación de áreas y velocidades en dinámica de gases, la sección divergente acelera el flujo únicamente cuando el fluido ya ha alcanzado condiciones sónicas ($Ma = 1$) en la garganta, volviéndose supersónico ($Ma > 1$)."
    },
    {
        id: 14,
        area: "Termofluidos",
        pregunta: "El coeficiente de desempeño (COP) de una bomba de calor ideal que opera en un ciclo de Carnot inverso se incrementa cuando:",
        opciones: [
            "A) Aumenta la diferencia de temperatura entre el foco caliente y el foco frío.",
            "B) Disminuye la temperatura del sumidero caliente o aumenta la temperatura de la fuente fría.",
            "C) Se incrementa el trabajo neto consumido por el compresor.",
            "D) Disminuye la eficiencia térmica del ciclo de potencia asociado."
        ],
        respuestaCorrecta: 1,
        explicacion: "El COP de una bomba de calor de Carnot es $T_H / (T_H - T_C)$. Acercar las temperaturas del foco caliente ($T_H$) y frío ($T_C$) mejora notablemente el desempeño."
    },
    {
        id: 15,
        area: "Termofluidos",
        pregunta: "En transferencia de calor por convección, el número adimensional que relaciona la transferencia de calor por convección con la conducción a través del mismo fluido es:",
        opciones: [
            "A) Número de Reynolds ($Re$)",
            "B) Número de Prandtl ($Pr$)",
            "C) Número de Nusselt ($Nu$)",
            "D) Número de Biot ($Bi$)"
        ],
        respuestaCorrecta: 2,
        explicacion: "El número de Nusselt ($Nu = hL/k$) representa el gradiente adimensional de temperatura en la superficie y mide el incremento de la transferencia de calor por convección comparada con la conducción pura."
    },
    {
        id: 16,
        area: "Termofluidos",
        pregunta: "¿Qué indica un número de Biot ($Bi$) menor a 0.1 en un análisis de transferencia de calor transitorio?",
        opciones: [
            "A) Que la resistencia térmica interna del sólido es mucho mayor que la resistencia convectiva superficial.",
            "B) Que se puede aplicar el método de la capacidad global (análisis de concentración de temperatura uniforme).",
            "C) Que el régimen es estrictamente estacionario y unidimensional.",
            "D) Que los efectos de radiación térmica superan a la convección."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un número de Biot pequeño ($Bi < 0.1$) indica que la temperatura dentro del cuerpo es prácticamente uniforme en cualquier instante, permitiendo usar el modelo de capacitancia global."
    },
    {
        id: 17,
        area: "Termofluidos",
        pregunta: "En mecánica de fluidos, la ecuación de Bernoulli es una forma simplificada de la conservación de energía que requiere estrictamente que el fluido sea:",
        opciones: [
            "A) Compresible, viscoso y con transferencia de calor.",
            "B) Incompresible, no viscoso (ideal) y a lo largo de una línea de corriente.",
            "C) Rotacional y con efectos significativos de fricción turbulenta.",
            "D) Gas perfecto en régimen transitorio no permanente."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación de Bernoulli se deriva integrando la segunda ley de Newton a lo largo de una línea de corriente para un flujo estacionario, incompresible y sin fricción (viscosidad nula)."
    },
    {
        id: 18,
        area: "Termofluidos",
        pregunta: "¿Cuál es el significado físico del número de Reynolds ($Re$) en el flujo de fluidos?",
        opciones: [
            "A) La relación entre las fuerzas de inercia y las fuerzas viscosas.",
            "B) La relación entre las fuerzas de presión y las fuerzas gravitacionales.",
            "C) La relación entre la energía cinética y la entalpía del fluido.",
            "D) La relación entre la tensión superficial y el empuje hidrostático."
        ],
        respuestaCorrecta: 0,
        explicacion: "El número de Reynolds ($Re = \rho v D / \mu$) cuantifica la importancia relativa de las fuerzas de inercia frente a las fuerzas viscosas, determinando si el flujo es laminar o turbulento."
    },
    {
        id: 19,
        area: "Termofluidos",
        pregunta: "En una tubería horizontal, las pérdidas primarias (por fricción) de carga hidráulica son directamente proporcionales a:",
        opciones: [
            "A) La longitud de la tubería y al cuadrado de la velocidad del fluido.",
            "B) El diámetro interno de la tubería y a la viscosidad cinemática.",
            "C) La presión estática absoluta del sistema.",
            "D) La rugosidad relativa dividida por la aceleración de la gravedad."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de Darcy-Weisbach indica que las pérdidas de carga ($h_f = f \cdot (L/D) \cdot (v^2/2g)$) son directamente proporcionales a la longitud $L$ y al cuadrado de la velocidad promedio $v^2$."
    },
    {
        id: 20,
        area: "Termofluidos",
        pregunta: "Para un intercambiador de calor de doble tubo, ¿qué configuración de flujo presenta una mayor efectividad y diferencia media logarítmica de temperaturas (LMTD) bajo las mismas condiciones de entrada y capacidades térmicas?",
        opciones: [
            "A) Flujo paralelo (equicorriente)",
            "B) Flujo cruzado sin mezcla",
            "C) Flujo a contraflujo",
            "D) Flujo radial con turbulencia inducida"
        ],
        respuestaCorrecta: 2,
        explicacion: "El arreglo a contraflujo permite alcanzar la mayor diferencia de temperatura media logarítmica (LMTD) y transferir más calor para la misma área superficial en comparación con el flujo paralelo."
    },
    {
        id: 21,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué establece el teorema de Thevenin aplicado a un circuito eléctrico lineal de corriente directa o alterna?",
        opciones: [
            "A) Cualquier red lineal de dos terminales puede reemplazarse por una fuente de voltaje en serie con una impedancia equivalente.",
            "B) La corriente total en un nodo es igual a cero en todo instante.",
            "C) La potencia máxima se transfiere cuando la resistencia de carga es igual a cero.",
            "D) El voltaje en una malla cerrada es independiente de la resistencia interna."
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Thévenin simplifica cualquier circuito lineal de dos terminales a un circuito equivalente compuesto por una fuente de voltaje ideal ($V_{th}$) en serie con una impedancia o resistencia equivalente ($Z_{th}$ o $R_{th}$)."
    },
    {
        id: 22,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En un circuito RLC serie en régimen senoidal permanente, ¿qué condición ocurre cuando el circuito entra en resonancia?",
        opciones: [
            "A) La reactancia inductiva es igual a la reactancia capacitiva, y la impedancia total es puramente resistiva.",
            "B) La corriente en el circuito alcanza su valor mínimo absoluto.",
            "C) El ángulo de desfase entre el voltaje y la corriente es de 90 grados.",
            "D) La potencia activa consumida es igual a cero."
        ],
        respuestaCorrecta: 0,
        explicacion: "En resonancia, $X_L = X_C$, por lo que se anulan mutuamente, dejando una impedancia puramente resistiva ($Z = R$), maximizando la corriente y logrando un factor de potencia unitario."
    },
    {
        id: 23,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Cómo se calcula la potencia aparente ($S$) en un sistema trifásico equilibrado?",
        opciones: [
            "A) $S = \\sqrt{3} \cdot V_L \cdot I_L$",
            "B) $S = 3 \cdot V_{ph} \cdot I_{ph} \cdot \\cos(\\theta)$",
            "C) $S = V_L \cdot I_L / \\sqrt{3}$",
            "D) $S = \\sqrt{P^2 - Q^2}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La potencia aparente trifásica se obtiene multiplicando la raíz cuadrada de tres por el voltaje de línea ($V_L$) y la corriente de línea ($I_L$), es decir, $S = \\sqrt{3} V_L I_L$."
    },
    {
        id: 24,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En un transformador monofásico ideal, la relación de transformación de voltajes ($a$) está dada por:",
        opciones: [
            "A) La relación entre el número de espiras del devanado secundario y el primario.",
            "B) La relación entre el número de espiras del devanado primario y el secundario ($N_1 / N_2$).",
            "C) El cociente entre la corriente de cortocircuito y la corriente en vacío.",
            "D) La impedancia de carga dividida por la reactancia de dispersión."
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación de transformación se define comúnmente como $a = N_1 / N_2 = V_1 / V_2$, relacionando las espiras y tensiones del primario respecto al secundario."
    },
    {
        id: 25,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Cuál es el propósito principal de realizar la prueba de circuito abierto (en vacío) a un transformador de potencia?",
        opciones: [
            "A) Determinar las pérdidas en el cobre y la resistencia equivalente de los devanados.",
            "B) Determinar las pérdidas en el núcleo (histéresis y corrientes parásitas) y los parámetros de la rama de magnetización.",
            "C) Medir la eficiencia máxima a plena carga de manera directa.",
            "D) Comprobar la rigidez dieléctrica del aceite aislante."
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba en vacío se alimenta a tensión nominal por el lado de baja, consumiendo una corriente muy baja, lo que permite medir casi exclusivamente las pérdidas en el núcleo magnético."
    },
    {
        id: 26,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En un motor de inducción trifásico tipo jaula de ardilla, el deslizamiento ($s$) se define como:",
        opciones: [
            "A) La diferencia entre la velocidad síncrona del campo magnético y la velocidad mecánica del rotor, dividida entre la velocidad síncrona.",
            "B) El cociente entre la velocidad del rotor y la frecuencia de la red eléctrica.",
            "C) La relación porcentual entre las pérdidas por fricción y la potencia de entrada.",
            "D) El desfase angular entre el campo estatórico y el rotórico en condiciones de vacío."
        ],
        respuestaCorrecta: 0,
        explicacion: "El deslizamiento es $s = (n_s - n) / n_s$, donde $n_s$ es la velocidad síncrona y $n$ es la velocidad real del rotor."
    },
    {
        id: 27,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "Para corregir el factor de potencia bajo en una instalación industrial alimentada con corriente alterna, comúnmente se conectan:",
        opciones: [
            "A) Bancos de capacitores en paralelo con la carga.",
            "B) Inductores o reactores en serie con las líneas principales.",
            "C) Motores sincrónicos operando en vacío con sobreexcitación.",
            "D) Resistencias de frenado dinámico."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las cargas industriales suelen ser inductivas (motores, transformadores), por lo que se conectan capacitores en paralelo para suministrar la potencia reactiva capacitiva que contrarreste la inductiva y eleve el factor de potencia."
    },
    {
        id: 28,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En electrónica analógica, ¿en qué región de operación se polariza un transistor BJT (Bipolar Junction Transistor) cuando se utiliza como un amplificador lineal de pequeña señal?",
        opciones: [
            "A) Corte",
            "B) Saturación",
            "C) Región activa directa",
            "D) Ruptura Zener"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para que un BJT funcione como amplificador lineal sin distorsión significativa, debe polarizarse en la región activa, donde la unión base-emisor está en directa y la base-colector en inversa."
    },
    {
        id: 29,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué función cumple un amplificador operacional (Amp-Op) configurado en lazo abierto con retroalimentación positiva o sin retroalimentación?",
        opciones: [
            "A) Operar como un comparador de voltaje o circuito de histéresis (Schmitt Trigger).",
            "B) Funcionar como un amplificador sumador lineal de alta fidelidad.",
            "C) Actuar como un filtro activo pasa-bajas de Butterworth.",
            "D) Proveer ganancia de voltaje estrictamente controlada y estable."
        ],
        respuestaCorrecta: 0,
        explicacion: "Sin retroalimentación negativa, la ganancia diferencial del Amp-Op es sumamente alta, saturando su salida ante la mínima diferencia de voltaje, lo que lo vuelve ideal para aplicaciones de comparación."
    },
    {
        id: 30,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En sistemas digitales y microcontroladores, ¿qué dispositivo convierte una señal analógica continua en un valor digital binario equivalente?",
        opciones: [
            "A) DAC (Conversor Digital a Analógico)",
            "B) ADC (Conversor Analógico a Digital)",
            "C) Pl은 (Phase-Locked Loop)",
            "D) Triac de compuerta aislada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un ADC (Analog-to-Digital Converter) toma muestras de una señal analógica y las cuantiza en palabras digitales procesables por sistemas basados en microprocesadores."
    },
    {
        id: 31,
        area: "Control, Automatización y Robótica",
        pregunta: "En la teoría de control automático, la transformada de Laplace de una señal de entrada en escalón unitario es:",
        opciones: [
            "A) $1 / s^2$",
            "B) $1 / s$",
            "C) $1$",
            "D) $\\omega / (s^2 + \\omega^2)$"
        ],
        respuestaCorrecta: 1,
        explicacion: "La función escalón unitario $u(t)$ tiene como transformada de Laplace estándar a $1/s$."
    },
    {
        id: 32,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué efecto produce la adición de un controlador de acción integral (I) en un lazo de control retroalimentado?",
        opciones: [
            "A) Elimina el error en estado estacionario ante entradas tipo escalón y reduce el tiempo de establecimiento.",
            "B) Elimina por completo el error en estado estacionario, aunque puede degradar la estabilidad transitoria.",
            "C) Incrementa la velocidad de respuesta instantánea y elimina el sobreimpulso.",
            "D) Reduce el orden del sistema de control a la mitad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El control integral acumula el error a lo largo del tiempo, logrando anular el error en estado estacionario (error cero), aunque introduce un polo en el origen que puede volver al sistema más oscilatorio o lento."
    },
    {
        id: 33,
        area: "Control, Automatización y Robótica",
        pregunta: "En el análisis de estabilidad de sistemas de control lineales mediante el criterio de Routh-Hurwitz, ¿qué indica la presencia de cambios de signo en los coeficientes de la primera columna de la tabla?",
        opciones: [
            "A) Que el sistema es absolutamente estable y amortiguado.",
            "B) Que el sistema es inestable, y el número de cambios de signo indica la cantidad de polos en el semiplano derecho del plano complejo.",
            "C) Que el sistema presenta polos puramente imaginarios en lazo abierto.",
            "D) Que se requiere calcular la transformada inversa de Fourier."
        ],
        respuestaCorrecta: 1,
        explicacion: "El criterio de Routh-Hurwitz determina la estabilidad sin calcular las raíces del polinomio característico; los cambios de signo en la primera columna señalan la cantidad de raíces con parte real positiva (inestabilidad)."
    },
    {
        id: 34,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Cuál es el propósito principal de un controlador PID (Proporcional-Integral-Derivativo) en la industria?",
        opciones: [
            "A) Ajustar automáticamente las ganancias para minimizar el error transitorio y permanente de un proceso.",
            "B) Convertir señales neumáticas en señales de radiofrecuencia digital.",
            "C) Reducir la potencia eléctrica consumida por los motores de corriente continua.",
            "D) Programar la lógica secuencial de una línea de ensamblaje."
        ],
        respuestaCorrecta: 0,
        explicacion: "El controlador PID combina la acción rápida del proporcional, la eliminación de error estacionario del integral y la amortiguación anticipada del derivativo para regular variables de proceso con gran precisión."
    },
    {
        id: 35,
        area: "Control, Automatización y Robótica",
        pregunta: "En la automatización industrial, ¿qué lenguaje de programación basado en esquemas gráficos es el más utilizado en los PLC (Controladores Lógicos Programables)?",
        opciones: [
            "A) C++ orientado a objetos",
            "B) Diagrama de contactos o escalera (Ladder)",
            "C) Ensamblador de 16 bits",
            "D) Python para ciencia de datos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de contactos (Ladder Logic) simula los circuitos de relés electromecánicos tradicionales y es el estándar industrial más intuitivo y difundido para la programación de PLCs."
    },
    {
        id: 36,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué componente en un sistema neumático industrial se encarga de acondicionar el aire comprimido filtrando la humedad, regulando la presión y añadiendo lubricación en aerosol?",
        opciones: [
            "A) Compresor de pistón reciprocante",
            "B) Unidad FRL (Filtro, Regulador y Lubricador)",
            "C) Válvula direccional 5/2 pilotada",
            "D) Actuador de doble efecto"
        ],
        respuestaCorrecta: 1,
        explicacion: "La unidad FRL prepara el aire comprimido protegiendo los componentes neumáticos de la corrosión, el desgaste prematuro y garantizando una presión de trabajo estable."
    },
    {
        id: 37,
        area: "Control, Automatización y Robótica",
        pregunta: "En robótica industrial, ¿qué describe la cinemática directa de un manipulador?",
        opciones: [
            "A) El cálculo de los ángulos articulares necesarios para alcanzar una posición cartesiana deseada.",
            "B) La determinación de la posición y orientación del efector final en el espacio cartesiano a partir de los valores de las variables articulares.",
            "C) El cálculo de los torques requeridos en cada articulación considerando masas e inercias.",
            "D) La trayectoria óptima para evitar colisiones con obstáculos estáticos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La cinemática directa resuelve la geometría del robot para encontrar dónde se ubica la herramienta (efector final) dadas las posiciones de sus articulaciones (ángulos o desplazamientos)."
    },
    {
        id: 38,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué sensor se utiliza comúnmente para la medición de posición angular de alta precisión y velocidad en servomotores industriales?",
        opciones: [
            "A) Termopar tipo K",
            "B) Encoder óptico (incremental o absoluto)",
            "C) Tubo de Pitot",
            "D) Celdas de carga piezoeléctricas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los encoders ópticos generan pulsos eléctricos o códigos digitales proporcionales al desplazamiento angular, permitiendo un control preciso de posición y velocidad."
    },
    {
        id: 39,
        area: "Control, Automatización y Robótica",
        pregunta: "En un sistema de control, ¿a qué se refiere el margen de fase?",
        opciones: [
            "A) Al incremento de ganancia necesario para que el sistema en lazo abierto se vuelva inestable.",
            "B) Al margen de grados adicionales con respecto a -180° que tiene la fase en la frecuencia de cruce de ganancia (donde la ganancia es 0 dB o 1).",
            "C) Al tiempo que tarda el sistema en responder a una entrada escalón.",
            "D) Al error estacionario cuando el sistema se perturba por ruido eléctrico."
        ],
        respuestaCorrecta: 1,
        explicacion: "El margen de fase es un indicador clave de estabilidad relativa en el diagrama de Bode; mide qué tan lejos está la fase de alcanzar -180° cuando la magnitud de la función de transferencia es unitaria (0 dB)."
    },
    {
        id: 40,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué es un actuador hidráulico proporcional?",
        opciones: [
            "A) Un cilindro que solo opera en posiciones totalmente extendidas o retraídas.",
            "B) Un dispositivo que permite controlar de manera continua y precisa la posición, velocidad o fuerza mediante válvulas que modulan el flujo hidráulico de forma proporcional a la señal eléctrica de entrada.",
            "C) Un motor eléctrico de corriente alterna controlado por un variador de frecuencia.",
            "D) Una bomba de desplazamiento variable con control mecánico por resortes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las válvulas proporcionales permiten un control dinámico y modulado del fluido hidráulico, superando el comportamiento puramente 'todo o nada' de las válvulas convencionales."
    },
    {
        id: 41,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la gestión de proyectos, ¿qué representa la 'ruta crítica' en un diagrama de red (PERT/CPM)?",
        opciones: [
            "A) La secuencia de actividades que tiene la holgura total máxima y menor riesgo.",
            "B) La secuencia de tareas dependientes que determina la duración mínima total del proyecto.",
            "C) El conjunto de actividades que requieren mayor presupuesto financiero.",
            "D) Las tareas secundarias que pueden retrasarse sin afectar la fecha de entrega."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ruta crítica es el camino más largo a través de la red del proyecto; cualquier retraso en una actividad de esta ruta impactará directamente en la fecha de finalización del proyecto."
    },
    {
        id: 42,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Cuál es el objetivo principal de la metodología de manufactura esbelta (Lean Manufacturing) conocida como 5S?",
        opciones: [
            "A) Reducir los costos de materia prima mediante la compra masiva de insumos.",
            "B) Crear y mantener un área de trabajo limpia, ordenada, segura y altamente eficiente.",
            "C) Automatizar el 100% de los procesos de maquinado con robots antropomórficos.",
            "D) Calcular los tiempos estándar de producción mediante cronometraje industrial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) buscan estandarizar el lugar de trabajo para eliminar desperdicios derivados del desorden, la suciedad y la búsqueda de herramientas."
    },
    {
        id: 43,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En el control estadístico de procesos (SPC), ¿qué herramienta gráfica permite evaluar si un proceso manufacturero se encuentra bajo control estadístico y detectar causas asignables de variación?",
        opciones: [
            "A) Diagrama de Pareto",
            "B) Carta de control (Gráfica de control)",
            "C) Diagrama de Ishikawa (Causa-Efecto)",
            "D) Histograma de frecuencias"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cartas de control muestran los límites superior e inferior de control calculados estadísticamente, permitiendo distinguir entre la variación natural (común) y la variación asignable (especial)."
    },
    {
        id: 44,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "Según el principio de Pareto (regla 80/20) aplicado a la gestión de calidad y solución de problemas:",
        opciones: [
            "A) El 80% de los problemas se deben al 20% de las causas principales.",
            "B) El 80% de la producción se logra con el 20% de la maquinaria obsoleta.",
            "C) El 80% de los empleados generan el 20% de las ganancias totales.",
            "D) El costo de calidad representa siempre el 80% del valor del producto."
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de Pareto indica que un pequeño porcentaje de las causas (20%) provoca la gran mayoría de los defectos o efectos negativos (80%)."
    },
    {
        id: 45,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Qué es el OEE (Overall Equipment Effectiveness / Efecticiencia General del Equipo)?",
        opciones: [
            "A) Un indicador que mide la disponibilidad, el rendimiento y la calidad de los equipos de manufactura.",
            "B) El costo total de mantenimiento preventivo dividido entre el tiempo de inactividad.",
            "C) La relación entre la energía eléctrica consumida y el número de piezas defectuosas.",
            "D) El porcentaje de operadores certificados en la norma ISO 9001."
        ],
        respuestaCorrecta: 0,
        explicacion: "El OEE es la métrica clave en mantenimiento y producción que multiplica tres factores: Disponibilidad x Rendimiento x Calidad, reflejando la eficiencia real de la maquinaria."
    },
    {
        id: 46,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En los sistemas de producción, ¿qué significa un sistema de inventario o producción 'JIT' (Just in Time)?",
        opciones: [
            "A) Producir grandes lotes de mercancía para almacenarlos ante futuras demandas estacionales.",
            "B) Producir y suministrar exactamente lo necesario, en la cantidad requerida y en el momento preciso para evitar inventarios excesivos.",
            "C) Comprar materias primas únicamente cuando el proveedor ofrezca descuentos por volumen.",
            "D) Mantener la línea de producción detenida hasta que se agoten los repuestos."
        ],
        respuestaCorrecta: 1,
        explicacion: "JIT busca eliminar el desperdicio de inventario almacenado, produciendo bajo demanda real mediante sistemas de arrastre (pull)."
    },
    {
        id: 47,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Cuál es el propósito del análisis de modos y efectos de falla (AMFE o FMEA)?",
        opciones: [
            "A) Identificar preventivamente las posibles fallas en un diseño, proceso o sistema, evaluando su severidad, ocurrencia y detección para mitigarlas.",
            "B) Calcular los costos contables de las reparaciones después de que ocurre una falla catastrófica.",
            "C) Programar los turnos de los técnicos de mantenimiento correctivo de emergencia.",
            "D) Determinar la vida útil de los componentes mediante pruebas destructivas de fatiga."
        ],
        respuestaCorrecta: 0,
        explicacion: "El AMFE es una herramienta analítica preventiva que prioriza los riesgos mediante el Número de Prioridad de Riesgo (NPR) para evitar fallas antes de que ocurran."
    },
    {
        id: 48,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la evaluación financiera de proyectos de ingeniería, ¿qué representa el Valor Presente Neto (VPN o NPV)?",
        opciones: [
            "A) La suma de todos los flujos de efectivo futuros sin descontar la tasa de interés.",
            "B) La diferencia entre el valor presente de los flujos de efectivo futuros esperados y la inversión inicial requerida, usando una tasa de descuento dada.",
            "C) El porcentaje de rendimiento anual exacto en el que el proyecto recupera su inversión.",
            "D) El tiempo en años necesario para recuperar el capital invertido."
        ],
        respuestaCorrecta: 1,
        explicacion: "El VPN actualiza los flujos futuros a dinero de hoy; si el resultado es mayor que cero, el proyecto genera valor por encima de la tasa de descuento exigida."
    },
    {
        id: 49,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Qué es el punto de equilibrio en la planeación financiera de una planta de producción?",
        opciones: [
            "A) El volumen de ventas o producción en el cual los ingresos totales igualan exactamente a los costos totales (fijos y variables), resultando en una utilidad neta de cero.",
            "B) El punto donde la capacidad máxima instalada coincide con el inventario de seguridad.",
            "C) El momento en que los costos variables son iguales a cero.",
            "D) La tasa de retorno interna donde la inversión inicial se duplica."
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto de equilibrio indica el nivel mínimo de producción y ventas requerido para no tener pérdidas financieras."
    },
    {
        id: 50,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En el mantenimiento industrial, ¿en qué consiste la estrategia de mantenimiento predictivo?",
        opciones: [
            "A) Esperar a que la máquina falle para realizar la reparación correctiva.",
            "B) Realizar revisiones y cambios de piezas en intervalos de tiempo fijos predeterminados.",
            "C) Monitorear periódica o continuamente la condición física de la maquinaria (vibraciones, termografía, análisis de aceite) para anticipar fallas antes de que ocurran.",
            "D) Reemplazar todo el equipo de producción al cumplir 5 años de servicio."
        ],
        respuestaCorrecta: 2,
        explicacion: "El mantenimiento predictivo se basa en el diagnóstico del estado operativo real del equipo mediante tecnologías de monitoreo de condición."
    },
    {
        id: 51,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En un diagrama de fases Hierro-Carbono, ¿cómo se denomina la solución sólida intersticial de carbono en hierro alfa (BCC)?",
        opciones: [
            "A) Austenita",
            "B) Ferrita",
            "C) Cementita",
            "D) Perlita"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ferrita es la fase rica en hierro con estructura cúbica centrada en el cuerpo (BCC) que disuelve una cantidad muy pequeña de carbono a temperatura ambiente."
    },
    {
        id: 52,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Cuál es el constituyente microestructural que se forma por el enfriamiento lento de la austenita a la temperatura eutectoide (0.76% C), consistiendo en láminas alternadas de ferrita y cementita?",
        opciones: [
            "A) Martensita",
            "B) Bainita",
            "C) Perlita",
            "D) Ledeburita"
        ],
        respuestaCorrecta: 2,
        explicacion: "La perlita es un microconstituyente laminar compuesto por capas alternas de ferrita y cementita, resultado de la transformación eutectoide de la austenita."
    },
    {
        id: 53,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué tratamiento térmico se aplica comúnmente a los aceros templados para reducir su fragilidad, aliviar esfuerzos internos y recuperar cierta tenacidad, sacrificando algo de dureza?",
        opciones: [
            "A) Recocido pleno",
            "B) Revenido",
            "C) Normalizado",
            "D) Cementación"
        ],
        respuestaCorrecta: 1,
        explicacion: "El revenido consiste en calentar un acero templado (con estructura martensítica) a una temperatura inferior a la eutectoide, permitiendo la precipitación de carburos y mejorando la tenacidad."
    },
    {
        id: 54,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En los procesos de unión por soldadura por arco eléctrico con electrodo revestido (SMAW), ¿cuál es la función principal del revestimiento del electrodo?",
        opciones: [
            "A) Conducir la corriente eléctrica directamente al arco sin pérdidas por efecto Joule.",
            "B) Generar gas protector para evitar la oxidación, formar escoria para proteger el baño de fusión y estabilizar el arco eléctrico.",
            "C) Aumentar la velocidad de avance del soldador reduciendo la temperatura de fusión.",
            "D) Evitar que el metal base sufra dilataciones térmicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El revestimiento del electrodo cumple múltiples funciones metalúrgicas y operativas vitales: protección gaseosa, formación de escoria purificadora y estabilización del arco."
    },
    {
        id: 55,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué diferencia principal existe entre los procesos de fundición en arena y la fundición a la cera perdida (inversión)?",
        opciones: [
            "A) La cera perdida utiliza moldes desechables de arena verde compactada a alta presión.",
            "B) La cera perdida permite obtener piezas con excelente acabado superficial, tolerancias dimensionales muy estrictas y geometrías complejas.",
            "C) La fundición en arena se limita exclusivamente a metales no ferrosos como el aluminio.",
            "D) La cera perdida no requiere la creación de modelos previos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El proceso de inversión (cera perdida) utiliza un patrón de cera que se funde y elimina, permitiendo fabricar piezas metálicas con alta precisión dimensional y magnífico acabado superficial."
    },
    {
        id: 56,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En las operaciones de maquinado en un torno convencional, ¿qué parámetro influye de manera más directa en la calidad del acabado superficial de la pieza?",
        opciones: [
            "A) La velocidad de avance por revolución y el radio de la punta de la herramienta.",
            "B) La potencia nominal del motor eléctrico principal.",
            "C) El ángulo de inclinación de la bancada del torno.",
            "D) El diámetro inicial de la barra de material."
        ],
        respuestaCorrecta: 0,
        explicacion: "La rugosidad superficial en el torneado depende principalmente de la velocidad de avance y de la geometría de la herramienta (específicamente el radio de punta)."
    },
    {
        id: 57,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué es la martensita en los aceros?",
        opciones: [
            "A) Una solución sólida blanda y dúctil de carbono en hierro gamma.",
            "B) Una fase dura, frágil y metaestable con estructura tetragonal centrada en el cuerpo, obtenida mediante un enfriamiento (temple) muy rápido desde la fase austenítica.",
            "C) Una mezcla eutéctica de hierro y carbono que funde a baja temperatura.",
            "D) Un compuesto intermetálico resistente a la corrosión marina."
        ],
        respuestaCorrecta: 1,
        explicacion: "La martensita se forma por un cambio difusional impedido cuando la austenita se enfría bruscamente, atrapando el carbono en una red distorsionada que confiere extrema dureza."
    },
    {
        id: 58,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En los ensayos mecánicos destructivos, ¿qué propiedad evalúa la prueba de impacto Charpy con probeta con entalla en V?",
        opciones: [
            "A) La resistencia a la fluencia estática.",
            "B) La tenacidad al impacto (resistencia a la fractura frágil bajo cargas dinámicas).",
            "C) El límite de fatiga a un millón de ciclos.",
            "D) La dureza superficial Brinell o Rockwell."
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba Charpy mide la energía absorbida por un material al romperse mediante un golpe de péndulo, evaluando su comportamiento ante la fragilidad a diferentes temperaturas."
    },
    {
        id: 59,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Cuál es el propósito del proceso de extrusión en la manufactura de metales y polímeros?",
        opciones: [
            "A) Reducir el espesor de láminas mediante rodillos pesados en caliente.",
            "B) Forzar el paso de un material a través de una matriz con una sección transversal específica para producir perfiles largos y continuos.",
            "C) Unir dos piezas metálicas mediante presión y calentamiento localizado.",
            "D) Eliminar las rebabas generadas en operaciones previas de corte."
        ],
        respuestaCorrecta: 1,
        explicacion: "La extrusión consiste en empujar o tirar del material a través de un dado (matriz) para darle la forma de la abertura deseada a lo largo de todo el perfil resultante."
    },
    {
        id: 60,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En la maquinabilidad de los metales, ¿qué efecto tiene la adición de azufre o plomo en aceros de fácil maquinado (aceros libres)?",
        opciones: [
            "A) Incrementan la resistencia a la tracción y el límite elástico.",
            "B) Forman inclusiones que facilitan la fragmentación de la viruta y reducen la fricción con la herramienta de corte.",
            "C) Mejoran notablemente la templabilidad para aplicaciones estructurales críticas.",
            "D) Protegen contra la oxidación a altas temperaturas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los elementos como el azufre forman inclusiones (como sulfuro de manganeso) que actúan como rompevirutas naturales y disminuyen el desgaste de la herramienta durante el corte."
    },
    {
        id: 61,
        area: "Diseño Mecánico",
        pregunta: "En el análisis de esfuerzos en vigas sometidas a flexión pura, el esfuerzo normal máximo ocurre:",
        opciones: [
            "A) Sobre el eje neutro de la sección transversal.",
            "B) En las fibras más alejadas del eje neutro (superficies superior e inferior).",
            "C) En los puntos donde el esfuerzo cortante transversal es máximo.",
            "D) En los apoyos fijos de la viga sin importar la carga."
        ],
        respuestaCorrecta: 1,
        explicacion: "La fórmula de flexión es $\sigma = -My/I$. El esfuerzo normal es directamente proporcional a la distancia $y$ desde el eje neutro, alcanzando su valor máximo en las fibras extremas."
    },
    {
        id: 62,
        area: "Diseño Mecánico",
        pregunta: "¿Qué representa el círculo de Mohr en el análisis de esfuerzos bidimensionales?",
        opciones: [
            "A) Una representación gráfica que permite determinar los esfuerzos principales, el esfuerzo cortante máximo y los esfuerzos en cualquier plano inclinado.",
            "B) El lugar geométrico de las deformaciones plásticas irreversibles en metales sometidos a torsión.",
            "C) La distribución de la velocidad del flujo en tuberías circulares.",
            "D) El límite de elasticidad tridimensional bajo condiciones hidrostáticas."
        ],
        respuestaCorrecta: 0,
        explicacion: "El círculo de Mohr es una herramienta gráfica muy útil en mecánica de materiales para transformar estados de esfuerzos y visualizar rápidamente esfuerzos principales y cortantes máximos."
    },
    {
        id: 63,
        area: "Diseño Mecánico",
        pregunta: "En una transmisión por bandas en V, ¿qué problema puede ocasionar una tensión inicial insuficiente en las bandas?",
        opciones: [
            "A) El desgaste prematuro de los cojinetes debido a cargas radiales excesivas.",
            "B) El deslizamiento (patinaje) de la banda, pérdida de potencia transmitida y sobrecalentamiento de las poleas.",
            "C) El incremento súbito de la velocidad angular del eje conducido por encima de la síncrona.",
            "D) La deformación plástica permanente de las cuerdas tensoras internas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Si la tensión es baja, la fricción entre la banda y la polea no es suficiente para transmitir el par torsor, provocando deslizamiento y pérdida de eficiencia."
    },
    {
        id: 64,
        area: "Diseño Mecánico",
        pregunta: "¿Qué tipo de engrane se recomienda para transmitir potencia entre ejes que se cruzan en el espacio pero no se cortan (ejes skew o no coplanares)?",
        opciones: [
            "A) Engranes rectos cilíndricos",
            "B) Engranes cónicos rectos",
            "C) Engranes helicoidales cruzados o tornillo sin fin - corona",
            "D) Engranes planetarios internos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para ejes que no se intersectan ni son paralelos, los engranes helicoidales cruzados o los sistemas de tornillo sin fin y corona son la solución estándar."
    },
    {
        id: 65,
        area: "Diseño Mecánico",
        pregunta: "En el diseño de recipientes a presión cilíndricos de pared delgada, ¿cómo se relacionan el esfuerzo circunferencial (hoop stress) y el esfuerzo longitudinal?",
        opciones: [
            "A) El esfuerzo circunferencial es exactamente el doble que el esfuerzo longitudinal.",
            "B) El esfuerzo longitudinal es el doble que el esfuerzo circunferencial.",
            "C) Ambos esfuerzos son iguales en cualquier dirección.",
            "D) El esfuerzo longitudinal es cero por estar abierto en los extremos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Para cilindros de pared delgada, el equilibrio de fuerzas demuestra que el esfuerzo circunferencial es $\sigma_1 = pr/t$ y el longitudinal es $\sigma_2 = pr/2t$, por lo que el circunferencial duplica al longitudinal."
    },
    {
        id: 66,
        area: "Diseño Mecánico",
        pregunta: "¿Qué es el pandeo en elementos estructurales esbeltos?",
        opciones: [
            "A) La fractura dúctil por torsión pura en flechas largas.",
            "B) La falla súbita por flexión lateral que experimentan las columnas sometidas a compresión axial cuando se alcanza la carga crítica de Euler.",
            "C) El alargamiento permanente debido a la fluencia térmica.",
            "D) La vibración resonante provocada por cargas transversales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El pandeo es un fenómeno de inestabilidad elástica donde una columna esbelta bajo compresión flecta lateralmente de forma repentina antes de alcanzar la resistencia a la compresión del material."
    },
    {
        id: 67,
        area: "Diseño Mecánico",
        pregunta: "En un mecanismo de yugo escocés, ¿qué tipo de movimiento se convierte en qué otro movimiento?",
        opciones: [
            "A) Movimiento rotatorio uniforme en movimiento armónico simple lineal.",
            "B) Movimiento rectilíneo alternativo en rotación continua con velocidad variable no lineal.",
            "C) Movimiento helicoidal en movimiento plano general.",
            "D) Movimiento intermitente en rotación bidireccional."
        ],
        respuestaCorrecta: 0,
        explicacion: "El mecanismo de yugo escocés convierte el movimiento de rotación de una manivela en un movimiento recíproco lineal con una cinemática de tipo armónico simple."
    },
    {
        id: 68,
        area: "Diseño Mecánico",
        pregunta: "¿Cuál es la utilidad del análisis modal experimental en componentes mecánicos?",
        opciones: [
            "A) Determinar las frecuencias naturales, modos de vibración y amortiguamiento de una estructura.",
            "B) Medir la resistencia estática a la compresión uniaxial.",
            "C) Calcular el costo de fabricación por lote.",
            "D) Evaluar la conductividad térmica superficial."
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis modal permite identificar las características dinámicas (frecuencias propias y formas modales) para evitar fenómenos catastróficos de resonancia en operación."
    },
    {
        id: 69,
        area: "Diseño Mecánico",
        pregunta: "En cojinetes de deslizamiento (chumaceras hidrodinámicas), ¿cómo se genera la película lubricante portadora de carga?",
        opciones: [
            "A) Mediante una bomba hidráulica externa de alta presión obligatoria.",
            "B) Por la rotación del muñón que arrastra el aceite hacia una cuña convergente gracias a la viscosidad del fluido.",
            "C) Por contacto metálico directo entre el eje y el buje de bronce.",
            "D) Mediante campos magnéticos superconductores."
        ],
        respuestaCorrecta: 1,
        explicacion: "En la lubricación hidrodinámica, el movimiento relativo del eje arrastra el lubricante hacia un espacio convergente, generando una presión hidrodinámica capaz de sostener la carga sin contacto físico."
    },
    {
        id: 70,
        area: "Diseño Mecánico",
        pregunta: "En el diseño de ejes de transmisión, ¿qué efecto tiene colocar un chavetero (keyway) sobre la resistencia a la fatiga del eje?",
        opciones: [
            "A) Incrementa la resistencia a la fatiga debido al endurecimiento por trabajo en frío.",
            "B) Actúa como un concentrador de esfuerzos, reduciendo significativamente la resistencia a la fatiga del eje.",
            "C) No tiene ningún efecto en la fatiga, solo en la torsión estática.",
            "D) Convierte el esfuerzo de torsión en un esfuerzo axial de tensión pura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Cualquier esquina viva o ranura, como un chavetero, genera concentración de esfuerzos, lo cual disminuye la vida a fatiga del elemento si no se consideran radios de redondeo adecuados."
    },
    {
        id: 71,
        area: "Termofluidos",
        pregunta: "La segunda ley enuncia que es imposible construir un dispositivo que opere en un ciclo y que no produzca otro efecto que la transferencia de calor de un cuerpo a baja temperatura a otro a alta temperatura. Este enunciado corresponde a:",
        opciones: [
            "A) El enunciado de Kelvin-Planck",
            "B) El enunciado de Clausius",
            "C) El principio de conservación de la energía",
            "D) El teorema de Bernoulli"
        ],
        respuestaCorrecta: 1,
        explicacion: "El enunciado de Clausius de la segunda ley de la termodinámica aborda la imposibilidad de transferir calor espontáneamente de un cuerpo frío a uno caliente sin la aportación de trabajo externo (principio de los refrigeradores)."
    },
    {
        id: 72,
        area: "Termofluidos",
        pregunta: "¿Qué representa la calidad del vapor ($x$) en una sustancia pura dentro de la zona de mezcla líquido-vapor?",
        opciones: [
            "A) La relación entre la masa de vapor y la masa total de la mezcla.",
            "B) El porcentaje de volumen ocupado por el líquido saturado.",
            "C) La relación entre la temperatura actual y la temperatura crítica.",
            "D) El cociente de la entalpía de vaporización entre la presión absoluta."
        ],
        respuestaCorrecta: 0,
        explicacion: "La calidad o título del vapor $x = m_{vapor} / m_{total}$ varía entre 0 (líquido saturado) y 1 (vapor saturado seco)."
    },
    {
        id: 73,
        area: "Termofluidos",
        pregunta: "En una central termoeléctrica que opera bajo el ciclo Rankine ideal, ¿cuál es el propósito del condensador?",
        opciones: [
            "A) Elevar la presión del agua antes de ingresar a la caldera.",
            "B) Condensar el vapor proveniente de la turbina a baja presión para entregar agua líquida saturada a la bomba, cerrando el ciclo.",
            "C) Generar vapor sobrecalentado mediante la combustión de carbón.",
            "D) Aumentar la temperatura de rechazo térmico hacia el medio ambiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "El condensador baja la presión de salida de la turbina mediante el enfriamiento y condensación del vapor, permitiendo que una bomba maneje líquido (poco trabajo de compresión) en lugar de vapor."
    },
    {
        id: 74,
        area: "Termofluidos",
        pregunta: "En la transferencia de calor por radiación, ¿qué establece la ley de Stefan-Boltzmann para un cuerpo negro ideal?",
        opciones: [
            "A) El poder emisivo total es directamente proporcional a la cuarta potencia de su temperatura absoluta.",
            "B) El flujo de calor es inversamente proporcional a la distancia entre las superficies.",
            "C) La longitud de onda de emisión máxima es directamente proporcional a la temperatura.",
            "D) La emisividad superficial es siempre independiente del ángulo de visión."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ley de Stefan-Boltzmann establece que $E = \sigma T^4$, donde $\sigma$ es la constante de Stefan-Boltzmann y $T$ es la temperatura absoluta en Kelvin."
    },
    {
        id: 75,
        area: "Termofluidos",
        pregunta: "¿Qué representa el factor de visión (o factor de forma) $F_{12}$ en radiación térmica?",
        opciones: [
            "A) La fracción de la radiación que sale de la superficie 1 que incide directamente sobre la superficie 2.",
            "B) La opacidad relativa de un gas frente a la radiación infrarroja.",
            "C) La razón entre la emisividad del cuerpo 1 y la absortividad del cuerpo 2.",
            "D) El porcentaje de energía reflejada especularmente por una placa pulida."
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de visión $F_{12}$ es una propiedad puramente geométrica que mide qué proporción de la energía radiada por la superficie 1 intercepta la superficie 2."
    },
    {
        id: 76,
        area: "Termofluidos",
        pregunta: "En el análisis de tuberías, ¿cuándo se considera que un flujo en régimen turbulento es completamente rugoso (hidráulicamente rugoso)?",
        opciones: [
            "A) Cuando el factor de fricción $f$ depende exclusivamente de la rugosidad relativa de la tubería y ya no del número de Reynolds.",
            "B) Cuando el número de Reynolds es menor a 2100.",
            "C) Cuando la velocidad del fluido es menor que la velocidad del sonido.",
            "D) Cuando las pérdidas por accesorios superan a las pérdidas por fricción."
        ],
        respuestaCorrecta: 0,
        explicacion: "En la zona de turbulencia completa (diagrama de Moody), las asperezas de la tubería sobresalen de la subcapa viscosa, haciendo que el factor de fricción dependa únicamente de $\epsilon/D$."
    },
    {
        id: 77,
        area: "Termofluidos",
        pregunta: "¿Qué es el fenómeno de cavitación en bombas centrífugas?",
        opciones: [
            "A) La acumulación de gases inertes en el sello mecánico debido a la alta temperatura.",
            "B) La formación y colapso violento de burbujas de vapor cuando la presión local del líquido cae por debajo de su presión de saturación, dañando los álabes del impulsor.",
            "C) El incremento súbito de la carga hidráulica por cierre rápido de válvulas.",
            "D) La pérdida de cebado provocada por una velocidad de giro excesiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "La cavitación ocurre en zonas de baja presión (como la entrada al ojo del impulsor) donde el líquido hierve localmente; al avanzar a zonas de mayor presión, las burbujas colapsan violentamente erosionando el material mecánicamente."
    },
    {
        id: 78,
        area: "Termofluidos",
        pregunta: "En máquinas hidráulicas, ¿qué indica la altura neta de succión positiva requerida (NPSHR)?",
        opciones: [
            "A) La presión máxima que soporta la carcasa de la bomba antes de fracturarse.",
            "B) La energía mínima que necesita el líquido en la brida de succión de la bomba para evitar la cavitación.",
            "C) La altura geométrica máxima entre el nivel del tanque y el eje de la bomba.",
            "D) La eficiencia hidráulica máxima expresada en metros de columna de líquido."
        ],
        respuestaCorrecta: 1,
        explicacion: "El NPSHR es un valor proporcionado por el fabricante que indica el requisito energético mínimo en la succión para que la bomba opere libre de cavitación."
    },
    {
        id: 79,
        area: "Termofluidos",
        pregunta: "¿Cómo se define la eficiencia adiabática (o isentrópica) de una turbina de vapor?",
        opciones: [
            "A) La relación entre el trabajo real entregado por la turbina y el trabajo ideal que se obtendría en un proceso isentrópico entre la misma presión de entrada y salida.",
            "B) El cociente del calor suministrado en la caldera entre la potencia eléctrica generada.",
            "C) La razón entre la entropía generada y el flujo másico total.",
            "D) La relación entre la presión de salida real y la presión atmosférica."
        ],
        respuestaCorrecta: 0,
        explicacion: "La eficiencia isentrópica compara el desempeño real de la expansión con el desempeño ideal reversible (isentrópico) para las mismas condiciones iniciales y de presión final."
    },
    {
        id: 80,
        area: "Termofluidos",
        pregunta: "En un compresor de aire alternativo, ¿qué propósito cumple el espacio muerto (clearance volume)?",
        opciones: [
            "A) Almacenar aceite de lubricación para los segmentos del pistón.",
            "B) Evitar el impacto mecánico entre el pistón y la cabeza del cilindro, permitiendo además la expansión del gas remanente antes de la siguiente admisión.",
            "C) Incrementar la eficiencia volumétrica al 100% en cualquier condición.",
            "D) Reducir la temperatura de descarga de forma isotérmica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El espacio muerto es inevitable por razones mecánicas y de seguridad; el gas atrapado en él se expansiona en la carrera de retroceso, reduciendo la eficiencia volumétrica real del compresor."
    },
    {
        id: 81,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En redes eléctricas de potencia, ¿qué función principal cumplen los transformadores de potencial (TPs) y de corriente (TCs)?",
        opciones: [
            "A) Elevar el voltaje de generación a niveles de transmisión de ultra alta tensión.",
            "B) Reducir las altas tensiones y corrientes de la red a niveles seguros y estandarizados (ej. 120V y 5A) para alimentar instrumentos de medición y relevadores de protección.",
            "C) Compensar la energía reactiva inductiva mediante tiristores.",
            "D) Filtrar los armónicos de alta frecuencia generados por cargas no lineales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los TPs y TCs actúan como dispositivos de aislamiento y reducción, permitiendo que los equipos de protección y medición operen con voltajes y corrientes seguros."
    },
    {
        id: 82,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué es una corriente de cortocircuito trifásica simétrica en un sistema eléctrico de potencia?",
        opciones: [
            "A) La corriente máxima que circula por una falla que afecta simultáneamente a las tres fases con impedancia cero, bajo condiciones de estado estacionario simétrico.",
            "B) La corriente nominal multiplicada por el factor de potencia del sistema.",
            "C) La corriente de fuga a tierra a través de la resistencia de puesta a tierra de la subestación.",
            "D) El consumo en vacío de los transformadores principales."
        ],
        respuestaCorrecta: 0,
        explicacion: "El cortocircuito trifásico simétrico es el caso base de estudio para dimensionar la capacidad interruptora de interruptores automáticos y la resistencia mecánica de los equipos."
    },
    {
        id: 83,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En una línea de transmisión eléctrica corta (menor a 80 km), ¿qué parámetros circuitales se consideran habitualmente en su modelo matemático?",
        opciones: [
            "A) Resistencia serie y reactancia inductiva serie, despreciando la capacitancia shunt.",
            "B) Capacitancia y conductancia shunt distribuidas uniformemente.",
            "C) Impedancia total combinada con admitancia en forma de matriz de parámetros ABCD complejos.",
            "D) Resistencia pura y capacitancia en paralelo."
        ],
        respuestaCorrecta: 0,
        explicacion: "En líneas cortas, la longitud y el voltaje no generan efectos capacitivos significativos hacia tierra, por lo que el modelo se reduce a una impedancia serie ($R + jX$)."
    },
    {
        id: 84,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué representa la curva de capacidad (o diagrama de operación) de un generador sincrónico?",
        opciones: [
            "A) Los límites operativos seguros de potencia activa ($P$) y potencia reactiva ($Q$) que la máquina puede entregar sin exceder la temperatura de los devanados ni la corriente de excitación.",
            "B) La relación entre la velocidad de giro y la frecuencia de la red.",
            "C) El consumo de combustible en función de la carga mecánica aplicada.",
            "D) La caída de voltaje interno ante cargas capacitivas."
        ],
        respuestaCorrecta: 0,
        explicacion: "La curva de capacidad delimita la zona de operación segura del generador sincrónico, considerando calentamiento del estator, calentamiento del rotor y límites de estabilidad estática."
    },
    {
        id: 85,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En un motor de corriente continua (DC) de excitación en derivación (shunt), ¿cómo varía la velocidad al incrementar la carga mecánica aplicada en el eje?",
        opciones: [
            "A) La velocidad disminuye ligeramente de manera casi constante (característica de velocidad rígida).",
            "B) La velocidad aumenta de forma exponencial hasta alcanzar runaway.",
            "C) La velocidad se reduce a cero de inmediato debido al freno regenerativo.",
            "D) La velocidad permanece absolutamente constante sin importar la carga."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los motores DC shunt tienen una caída de velocidad pequeña al aumentar el par de carga, debido a la caída de voltaje resistiva en el devanado del inducido ($I_a R_a$)."
    },
    {
        id: 86,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Cuál es la función de los diodos de libre circulación (flywheel o freewheeling diodes) en circuitos de electrónica de potencia conectados a cargas inductivas (como motores o relevadores)?",
        opciones: [
            "A) Rectificar la corriente alterna de entrada a corriente continua pura.",
            "B) Proveer un camino de descarga seguro para la corriente almacenada en la inductancia cuando el interruptor principal se abre, evitando sobretensiones destructivas.",
            "C) Limitar la corriente de arranque a un valor inferior al 10% de la nominal.",
            "D) Elevar el voltaje de salida mediante conmutación resonante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando se interrumpe la corriente en una inductancia, se genera un pico de voltaje elevado ($v = L di/dt$); el diodo en antiparalelo ofrece un lazo de recirculación que disipa la energía magnética sin dañar los semiconductores."
    },
    {
        id: 87,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En los sistemas de puesta a tierra para instalaciones eléctricas industriales, ¿cuál es el objetivo primordial de conectar las partes metálicas no conductoras a tierra?",
        opciones: [
            "A) Reducir el consumo de energía eléctrica activa en los equipos.",
            "B) Garantizar la seguridad humana limitando las tensiones de toque y paso, y permitir la operación oportuna de las protecciones ante fallas a tierra.",
            "C) Aumentar la impedancia del sistema para evitar armónicos.",
            "D) Mejorar la velocidad de transmisión de datos en redes industriales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una red de tierra eficaz protege a las personas de descargas eléctricas peligrosas y asegura que las corrientes de falla sean lo suficientemente altas para disparar los interruptores de protección."
    },
    {
        id: 88,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué es la modulación por ancho de pulso (PWM - Pulse Width Modulation) en inversores de potencia?",
        opciones: [
            "A) Un método para variar el ancho de los pulsos de voltaje aplicados a la carga, permitiendo controlar la amplitud de la fundamental y la frecuencia de salida en sistemas de corriente alterna.",
            "B) Un protocolo de comunicación serial de alta velocidad para microcontroladores.",
            "C) Una técnica para reducir el factor de potencia en redes residenciales.",
            "D) Un sistema analógico de amplificación de audio clase A."
        ],
        respuestaCorrecta: 0,
        explicacion: "PWM es la técnica estándar en inversores y variadores de frecuencia para sintetizar ondas senoidales de voltaje y frecuencia variables mediante la conmutación rápida de interruptores semiconductores."
    },
    {
        id: 89,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "En un sistema trifásico desbalanceado, ¿qué método matemático se utiliza habitualmente para simplificar el análisis descomponiendo el sistema en tres sistemas independientes simétricos?",
        opciones: [
            "A) Transformada de Fourier",
            "B) Componentes simétricas (Secuencia positiva, negativa y cero)",
            "C) Series de Taylor",
            "D) Transformada de Laplace bidimensional"
        ],
        respuestaCorrecta: 1,
        explicacion: "El teorema de Fortescue demuestra que cualquier conjunto de fasores desbalanceados trifásicos puede descomponerse en la suma de tres componentes simétricas."
    },
    {
        id: 90,
        area: "Sistemas Eléctricos y Electrónica",
        pregunta: "¿Qué describe la ley de Faraday de la inducción electromagnética?",
        opciones: [
            "A) La fuerza electromotriz inducida en un circuito cerrado es directamente proporcional a la tasa de cambio temporal del flujo magnético que atraviesa dicho circuito.",
            "B) El campo magnético generado alrededor de un conductor rectilíneo es proporcional a la corriente.",
            "C) Las líneas de campo magnético son siempre cerradas y no tienen monopolo.",
            "D) La fuerza ejercida sobre una carga en movimiento dentro de un campo magnético y eléctrico."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ley de Faraday-Lenz cuantifica cómo un campo magnético variable en el tiempo induce un voltaje (FEM) en una bobina o circuito conductor."
    },
    {
        id: 91,
        area: "Control, Automatización y Robótica",
        pregunta: "En los sistemas de control realimentados, ¿qué efecto tiene la introducción de retroalimentación negativa sobre la sensibilidad del sistema ante perturbaciones y variaciones en los parámetros internos?",
        opciones: [
            "A) Incrementa considerablemente la sensibilidad a las perturbaciones.",
            "B) Reduce la sensibilidad del sistema frente a perturbaciones externas y cambios en los parámetros del proceso.",
            "C) Vuelve al sistema completamente insensible a cualquier ruido de alta frecuencia.",
            "D) Elimina la necesidad de utilizar controladores PID."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una de las ventajas fundamentales de la retroalimentación negativa es que disminuye la sensibilidad de la ganancia total del sistema ante variaciones en los componentes internos y rechaza perturbaciones."
    },
    {
        id: 92,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué describe el lugar geométrico de las raíces (Root Locus) en la ingeniería de control?",
        opciones: [
            "A) La trayectoria que describen los polos del sistema en lazo cerrado en el plano complejo cuando un parámetro (generalmente la ganancia) varía de cero a infinito.",
            "B) El espectro de frecuencias de una señal analógica muestreada.",
            "C) La respuesta temporal del sistema ante una entrada tipo impulso.",
            "D) Los puntos de intersección de la respuesta en frecuencia con el círculo unitario."
        ],
        respuestaCorrecta: 0,
        explicacion: "El lugar de las raíces es una técnica gráfica creada por Walter Evans para visualizar la ubicación de los polos en lazo cerrado en función de la variación de la ganancia del controlador."
    },
    {
        id: 93,
        area: "Control, Automatización y Robótica",
        pregunta: "En la programación de PLCs, ¿qué es un relé de enclavamiento (latch/unlatch o set/reset)?",
        opciones: [
            "A) Una instrucción que retiene el estado lógico de una salida (activada o desactivada) incluso después de que la condición de entrada que la activó desaparezca.",
            "B) Un temporizador con retardo a la desconexión.",
            "C) Un bloque matemático para realizar operaciones de punto flotante.",
            "D) Un contador de pulsos de alta velocidad bidireccional."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las instrucciones de enclavamiento (Set/Reset o Latch/Unlatch) memorizan estados lógicos en la memoria del PLC hasta que se ordene explícitamente lo contrario."
    },
    {
        id: 94,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué es un sistema de control en lazo abierto?",
        opciones: [
            "A) Aquel en el que la señal de salida se mide y se compara constantemente con la entrada para ajustar la acción de control.",
            "B) Aquel en el que la acción de control es independiente de la salida del sistema; no existe retroalimentación.",
            "C) Un sistema que opera exclusivamente con lógica difusa y redes neuronales.",
            "D) Un proceso industrial donde las válvulas de control están abiertas permanentemente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sistemas en lazo abierto no utilizan realimentación; la salida no se monitoriza para corregir posibles desviaciones causadas por perturbaciones externas."
    },
    {
        id: 95,
        area: "Control, Automatización y Robótica",
        pregunta: "En robótica industrial, ¿qué es la matriz Jacobiana del manipulador?",
        opciones: [
            "A) La matriz que relaciona las velocidades articulares (espacio de articulaciones) con las velocidades lineales y angulares del efector final (espacio cartesiano).",
            "B) La matriz de inercia inercial requerida para calcular el balance estático.",
            "C) La secuencia de matrices de transformación homogénea de Denavit-Hartenberg.",
            "D) La matriz de covarianza de los errores de los sensores de posición."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Jacobiano es una herramienta matemática fundamental en robótica que mapea las velocidades del espacio articular al espacio operacional cartesiano y ayuda a identificar singularidades."
    },
    {
        id: 96,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Cuál es la característica principal de un controlador de acción proporcional-derivativa (PD)?",
        opciones: [
            "A) Elimina el error en estado estacionario y acelera la respuesta del sistema.",
            "B) Mejora la estabilidad relativa y amortigua el transitorio anticipándose a la tasa de cambio del error, aunque no elimina el error estacionario.",
            "C) Sintoniza automáticamente las ganancias mediante lógica autorregulada.",
            "D) Integra el error a lo largo del tiempo para corregir desviaciones crónicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La acción derivativa actúa sobre la velocidad de cambio del error, proporcionando un efecto de amortiguamiento anticipado que mejora la estabilidad y reduce el sobreimpulso, pero carece de componente integral para eliminar el error estacionario."
    },
    {
        id: 97,
        area: "Control, Automatización y Robótica",
        pregunta: "En los sistemas de instrumentación industrial, ¿qué rango de corriente normalizado se utiliza ampliamente para la transmisión analógica de variables de proceso a larga distancia?",
        opciones: [
            "A) 0 a 5 Volts",
            "B) 4 a 20 mA",
            "C) 0 a 100 psi",
            "D) 10 a 50 kHz"
        ],
        respuestaCorrecta: 1,
        explicacion: "El estándar industrial de 4 a 20 mA es robusto ante caídas de voltaje en cables largos, y el hecho de que 0 mA represente falla o circuito abierto facilita el diagnóstico de errores."
    },
    {
        id: 98,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué es un sistema SCADA (Supervisory Control and Data Acquisition)?",
        opciones: [
            "A) Un software de diseño mecánico CAD en entorno tridimensional.",
            "B) Un sistema de arquitectura de hardware y software que permite supervisar, controlar y adquirir datos de procesos industriales a distancia en tiempo real.",
            "C) Un protocolo de seguridad para redes eléctricas de alta tensión.",
            "D) Un tipo de variador de frecuencia para motores de inducción."
        ],
        respuestaCorrecta: 1,
        explicacion: "SCADA integra interfaces hombre-máquina (HMI), PLCs y redes de comunicación para la supervisión global y adquisición de datos en plantas industriales."
    },
    {
        id: 99,
        area: "Control, Automatización y Robótica",
        pregunta: "En la identificación de sistemas, ¿qué es una función de transferencia?",
        opciones: [
            "A) El cociente entre la transformada de Laplace de la salida y la transformada de Laplace de la entrada, considerando condiciones iniciales cero.",
            "B) La relación matemática entre el costo de manufactura y el tiempo de entrega.",
            "C) La derivada temporal de la energía cinética de un actuador.",
            "D) El diagrama esquemático de una red de tuberías de fluidos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Por definición clásica en control lineal e invariante en el tiempo (LIT), la función de transferencia modela dinámicamente el sistema en el dominio complejo $s$ bajo condiciones iniciales nulas."
    },
    {
        id: 100,
        area: "Control, Automatización y Robótica",
        pregunta: "¿Qué tipo de válvula neumática se describe como '5/2'?",
        opciones: [
            "A) 5 vías y 2 posiciones",
            "B) 5 puertos de presión y 2 diafragmas de alivio",
            "C) 5 milímetros de diámetro nominal y 2 bares de presión máxima",
            "D) 5 solenoides y 2 pistones de doble efecto"
        ],
        respuestaCorrecta: 0,
        explicacion: "La nomenclatura '5/2' en neumática indica que la válvula posee 5 vías (conexiones) y 2 estados o posiciones de conmutación posibles."
    },
    {
        id: 101,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la administración de inventarios, ¿qué representa el modelo de la Cantidad Económica de Pedido (EOQ - Economic Order Quantity)?",
        opciones: [
            "A) El tamaño de lote que minimiza la suma de los costos de ordenar (preparación) y los costos de mantenimiento de inventario.",
            "B) La cantidad máxima de materia prima que un proveedor puede entregar en un solo envío.",
            "C) El inventario de seguridad necesario para evitar desabastecimiento por huelgas.",
            "D) El costo unitario de producción en el punto de equilibrio financiero."
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo EOQ equilibra matemáticamente los costos asociados a emitir órdenes de compra frente a los costos de almacenar inventario en bodega."
    },
    {
        id: 102,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Qué es el diagrama de Ishikawa o diagrama de espina de pescado?",
        opciones: [
            "A) Una gráfica de control estadístico para variables continuas en el tiempo.",
            "B) Una herramienta visual de causa-efecto utilizada para identificar las posibles causas raíces que originan un problema o defecto de calidad.",
            "C) Un diagrama de flujo que detalla la ruta crítica de un proyecto de ingeniería.",
            "D) Un registro cronológico de las fallas mecánicas en maquinaria pesada."
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de Ishikawa categoriza las posibles causas de un problema en ramas principales (por ejemplo, las 6M: Mano de obra, Maquinaria, Materiales, Método, Medición y Medio ambiente)."
    },
    {
        id: 103,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la gestión de calidad total, ¿qué significa la filosofía de mejora continua conocida como Kaizen?",
        opciones: [
            "A) Realizar inversiones masivas en tecnología de punta cada diez años.",
            "B) Un proceso de pequeñas mejoras incrementales y constantes en los procesos, involucrando a todos los empleados de la organización.",
            "C) Automatizar el departamento de compras para eliminar intermediarios.",
            "D) Reducir la plantilla laboral para disminuir los costos operativos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Kaizen significa 'cambio para mejor' en japonés y se enfoca en la mejora continua diaria a través de la participación activa de todo el personal."
    },
    {
        id: 104,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Cuál es el propósito de aplicar la metodología Seis Sigma (Six Sigma) en los procesos industriales?",
        opciones: [
            "A) Aumentar la velocidad de producción sacrificando los estándares de tolerancia dimensional.",
            "B) Minimizar la variabilidad y los defectos en los procesos, buscando alcanzar un nivel de calidad de no más de 3.4 defectos por millón de oportunidades.",
            "C) Certificar a los operadores en normas de seguridad eléctrica.",
            "D) Calcular el retorno de inversión en proyectos de automatización robótica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Seis Sigma es una metodología basada en datos y estadística enfocada en reducir la variabilidad del proceso para eliminar prácticamente los defectos."
    },
    {
        id: 105,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la evaluación de proyectos, ¿qué indica una Tasa Interna de Retorno (TIR o IRR) superior a la tasa mínima aceptable de rendimiento (TMAR)?",
        opciones: [
            "A) Que el proyecto destruye valor y debe ser rechazado inmediatamente.",
            "B) Que el proyecto es rentable y genera un rendimiento superior al costo de capital exigido.",
            "C) Que el tiempo de recuperación de la inversión supera los diez años.",
            "D) Que los flujos de efectivo futuros son completamente inciertos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La TIR es la tasa de descuento que hace que el VPN sea igual a cero. Si la TIR supera la tasa de descuento del inversionista (TMAR), el proyecto es económicamente atractivo."
    },
    {
        id: 106,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Qué caracteriza a un sistema de producción tipo 'Make-to-Order' (MTO - Fabricación sobre pedido)?",
        opciones: [
            "A) Los productos se fabrican y almacenan en masa antes de recibir los pedidos de los clientes.",
            "B) La producción del bien específico inicia únicamente después de que el cliente ha realizado un pedido formal y personalizado.",
            "C) La línea de montaje funciona exclusivamente con inventarios masivos de componentes estándar.",
            "D) Los costos fijos son considerablemente menores que los costos variables."
        ],
        respuestaCorrecta: 1,
        explicacion: "En MTO, el proceso productivo se activa tras la orden del cliente, lo que reduce drásticamente el inventario de producto terminado pero puede incrementar el tiempo de entrega."
    },
    {
        id: 107,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En el mantenimiento industrial, ¿qué mide el indicador MTBF (Mean Time Between Failures / Tiempo Medio Entre Fallas)?",
        opciones: [
            "A) El tiempo promedio que transcurre entre una falla y la siguiente en sistemas reparables.",
            "B) El tiempo exacto que tarda un técnico en reparar una máquina averiada.",
            "C) La vida útil total garantizada por el fabricante del equipo.",
            "D) El porcentaje de horas que la máquina estuvo detenida por falta de energía."
        ],
        respuestaCorrecta: 0,
        explicacion: "El MTBF evalúa la confiabilidad operacional de equipos reparables, midiendo el promedio de horas de funcionamiento sin fallas."
    },
    {
        id: 108,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Cuál es el objetivo de utilizar la técnica Poka-Yoke en los procesos de manufactura?",
        opciones: [
            "A) Diseñar mecanismos a prueba de errores humanos que impidan que un defecto ocurra o pase desapercibido.",
            "B) Reducir el tiempo de preparación de las máquinas (setup) a menos de diez minutos.",
            "C) Automatizar las tareas de soldadura mediante brazos robóticos colaborativos.",
            "D) Calcular los tiempos muertos en las estaciones de trabajo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Poka-Yoke significa 'a prueba de errores'; busca implementar dispositivos o restricciones físicas y lógicas para evitar que el operario cometa equivocaciones."
    },
    {
        id: 109,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "En la administración de proyectos, ¿qué representa la nivelación de recursos (Resource Leveling)?",
        opciones: [
            "A) Un proceso para retrasar actividades de la ruta crítica con el fin de reducir la sobreasignación de recursos, aun cuando esto pueda extender la duración total del proyecto.",
            "B) La asignación aleatoria de presupuestos financieros a los departamentos.",
            "C) La contratación masiva de personal externo para cumplir con las metas de calidad.",
            "D) La reducción de costos mediante la compra de materiales de menor calidad."
        ],
        respuestaCorrecta: 0,
        explicacion: "La nivelación de recursos ajusta el cronograma para evitar picos de demanda de personal o equipos cuando hay sobreasignación, pudiendo alargar la ruta crítica si es necesario."
    },
    {
        id: 110,
        area: "Gestión de Proyectos y Manufactura",
        pregunta: "¿Qué evalúa el análisis de costo-beneficio en la ingeniería de proyectos?",
        opciones: [
            "A) La comparación sistemática de todos los costos monetarios estimados frente a los beneficios tangibles e intangibles esperados de un proyecto.",
            "B) El cálculo estricto de las pérdidas fiscales ante una auditoría gubernamental.",
            "C) La cantidad de materia prima desperdiciada en el proceso de inyección de plásticos.",
            "D) El salario promedio de los ingenieros encargados del diseño mecánico."
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis costo-beneficio cuantifica y contrasta los aspectos económicos favorables y desfavorables para decidir la viabilidad de implementar una inversión."
    },
    {
        id: 111,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué es la acritud (endurecimiento por deformación en frío) en los metales?",
        opciones: [
            "A) El aumento de la resistencia y dureza, acompañado de una pérdida de ductilidad, provocado por la deformación plástica a temperaturas inferiores a la de recristalización.",
            "B) La pérdida total de propiedades mecánicas al calentar el material cerca de su punto de fusión.",
            "C) La corrosión intergranular acelerada por esfuerzos residuales.",
            "D) La disminución de la densidad volumétrica durante la fundición."
        ],
        respuestaCorrecta: 0,
        explicacion: "La deformación en frío multiplica la densidad de dislocaciones en la red cristalina, dificultando su movimiento y provocando que el material se vuelva más duro y resistente pero menos dúctil."
    },
    {
        id: 112,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En los procesos de soldadura por fusión, ¿qué riesgo metalúrgico principal presenta la soldadura de aceros de alto carbono sin un precalentamiento o tratamiento térmico posterior adecuado?",
        opciones: [
            "A) La formación de martensita frágil en la zona afectada térmicamente (ZAT), propensa a agrietamiento por hidrógeno.",
            "B) La fusión completa de los electrodos de tungsteno no consumible.",
            "C) La transformación del acero en un polímero termoplástico.",
            "D) El incremento excesivo de la conductividad eléctrica del conjunto."
        ],
        respuestaCorrecta: 0,
        explicacion: "El enfriamiento rápido desde altas temperaturas en aceros con alto carbono genera microestructuras martensíticas muy duras y frágiles en la ZAT, facilitando el agrietamiento."
    },
    {
        id: 113,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Cuál es la diferencia fundamental entre los polímeros termoplásticos y los termoestables?",
        opciones: [
            "A) Los termoplásticos se ablandan al calentarse y pueden moldearse repetidamente; los termoestables se curan mediante reacciones químicas irreversibles y se descomponen al calentarse en lugar de fundir.",
            "B) Los termoplásticos tienen estructura cristalina perfecta; los termoestables son totalmente amorfos y solubles.",
            "C) Los termoestables conducen electricidad eficientemente; los termoplásticos son aislantes térmicos.",
            "D) Los termoplásticos se obtienen exclusivamente de fuentes naturales; los termoestables son sintéticos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los termoplásticos poseen cadenas lineales o ramificadas unidas por fuerzas secundarias débiles (funden al calentar), mientras que los termoestables forman redes tridimensionales entrecruzadas mediante enlaces covalentes irreversibles."
    },
    {
        id: 114,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En los procesos de conformado de metales, ¿qué ventaja principal ofrece el trabajo en caliente (por encima de la temperatura de recristalización) frente al trabajo en frío?",
        opciones: [
            "A) Se requiere menor fuerza y energía para deformar el material, y se incrementa notablemente la ductilidad sin endurecimiento por deformación acumulado.",
            "B) Se obtienen tolerancias dimensionales milimétricas y un acabado superficial espejo superior.",
            "C) Se elimina por completo la oxidación superficial del metal.",
            "D) Se incrementa la resistencia a la tensión final del componente sin necesidad de tratamientos térmicos."
        ],
        respuestaCorrecta: 0,
        explicacion: "A temperaturas de trabajo en caliente, la recristalización dinámica ocurre simultáneamente con la deformación, permitiendo grandes reducciones de forma con fuerzas bajas y sin acritud."
    },
    {
        id: 115,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué método de ensayo no destructivo (END) utiliza ondas acústicas de alta frecuencia para detectar discontinuidades internas y evaluar el espesor de componentes mecánicos?",
        opciones: [
            "A) Líquidos penetrantes",
            "B) Inspección por partículas magnéticas",
            "C) Pruebas ultrasónicas",
            "D) Radiografía industrial por rayos gamma"
        ],
        respuestaCorrecta: 0, // Nota: La C es la correcta, ajustamos indice en array de opciones: A(0), B(1), C(2), D(3).
        explicacion: "Las pruebas ultrasónicas emplean ondas sonoras de alta frecuencia que se propagan a través del material; los ecos reflejados permiten detectar fallas internas y medir espesores."
    },
    // Corregimos la respuesta correcta para la pregunta 115 apuntando al índice 2 ("Pruebas ultrasónicas")
    {
        id: 115,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué método de ensayo no destructivo (END) utiliza ondas acústicas de alta frecuencia para detectar discontinuidades internas y evaluar el espesor de componentes mecánicos?",
        opciones: [
            "A) Líquidos penetrantes",
            "B) Inspección por partículas magnéticas",
            "C) Pruebas ultrasónicas",
            "D) Radiografía industrial por rayos gamma"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las pruebas ultrasónicas emplean ondas sonoras de alta frecuencia que se propagan a través del material; los ecos reflejados permiten detectar fallas internas y medir espesores."
    },
    {
        id: 116,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En la corrosión electroquímica de los metales, ¿qué ocurre en el ánodo?",
        opciones: [
            "A) Se produce la reacción de reducción y se consumen electrones.",
            "B) Ocurre la reacción de oxidación, donde el metal se disuelve liberando electrones hacia el electrolito.",
            "C) Se depositan iones protectores formando una capa pasiva inerte.",
            "D) No existe flujo de corriente eléctrica."
        ],
        respuestaCorrecta: 1,
        explicacion: "En una celda de corrosión, el ánodo es el sitio donde el metal experimenta oxidación, perdiendo electrones y sufriendo desgaste o corrosión activa."
    },
    {
        id: 117,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Qué es la templabilidad de un acero?",
        opciones: [
            "A) La máxima dureza superficial que puede alcanzar tras un temple rápido.",
            "B) La capacidad de un acero para transformarse en martensita a una determinada profundidad cuando se enfría desde la temperatura austenítica.",
            "C) La temperatura exacta en la que el acero funde por completo.",
            "D) La facilidad con la que puede ser soldado sin agrietarse."
        ],
        respuestaCorrecta: 1,
        explicacion: "La templabilidad mide la aptitud de un acero para adquirir profundidad de endurecimiento (martensita) bajo un tratamiento de temple, dependiendo fundamentalmente de su composición aleante."
    },
    {
        id: 118,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En los procesos de mecanizado por arranque de viruta, ¿qué representa el fenómeno de 'filo de aportación' (built-up edge)?",
        opciones: [
            "A) La acumulación de partículas del material de la pieza soldadas por presión en la punta de la herramienta de corte debido a la alta fricción y temperatura.",
            "B) El desgaste por abrasión en el flanco posterior de la herramienta.",
            "C) La capa de pintura protectora aplicada antes del maquinado.",
            "D) El incremento del diámetro de la pieza por dilatación térmica."
        ],
        respuestaCorrecta: 0,
        explicacion: "El filo de aportación se forma cuando fragmentos del material cortado se adhieren fuertemente a la arista de corte; altera la geometría de la herramienta y afecta negativamente el acabado superficial."
    },
    {
        id: 119,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "¿Cuál es el objetivo principal del proceso de galvanizado por inmersión en caliente en componentes de acero estructural?",
        opciones: [
            "A) Incrementar la resistencia mecánica a la tracción y el límite elástico.",
            "B) Proveer una protección contra la corrosión mediante el recubrimiento con una capa de zinc sacrificial.",
            "C) Mejorar la conductividad eléctrica superficial para conexiones de puesta a tierra.",
            "D) Reducir el peso volumétrico de la estructura metálica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El galvanizado sumerge el acero en zinc fundido; el zinc actúa como ánodo sacrificial, protegiendo al acero subyacente de la oxidación atmosférica."
    },
    {
        id: 120,
        area: "Ciencia de Materiales y Procesos de Manufactura",
        pregunta: "En la clasificación de los materiales compuestos, ¿qué define a un material compuesto reforzado con fibras?",
        opciones: [
            "A) Fibras resistentes y rígidas embebidas en una matriz polimérica, metálica o cerámica para soportar cargas estructurales elevadas con bajo peso.",
            "B) Una aleación homogénea de dos metales nobles fundidos en crisol de inducción.",
            "C) Un polímero termoestable mezclado con pigmentos de color.",
            "D) Un material cerámico poroso utilizado como aislante térmico a alta temperatura."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los compuestos de matriz reforzada con fibra (como fibra de carbono o vidrio en matriz epóxica) ofrecen una relación resistencia-peso excepcional, siendo fundamentales en aplicaciones aeroespaciales y mecánicas avanzadas."
    }
];