const bancoPreguntas = [
    {
        id: 1,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito RLC serie alimentado por una fuente de voltaje sinusoidal, ¿qué condición se cumple en la frecuencia de resonancia?",
        opciones: [
            "A) La impedancia total del circuito es puramente resistiva y alcanza su valor mínimo",
            "B) La reactancia inductiva es cero y la capacitiva tiende al infinito",
            "C) La corriente en el circuito alcanza su valor mínimo absoluto",
            "D) El factor de potencia del sistema se vuelve cero en retraso"
        ],
        respuestaCorrecta: 0,
        explicacion: "En resonancia serie, las reactancias inductiva y capacitiva se anulan entre sí (XL = XC), haciendo que la impedancia total sea igual a la resistencia pura R, lo que maximiza la corriente y sitúa el factor de potencia en la unidad."
    },
    {
        id: 2,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué efecto principal provoca la aparición de la reacción de armadura en un generador síncrono cuando opera con una carga estrictamente inductiva (factor de potencia en retraso)?",
        opciones: [
            "A) Magnetización transversal pura sin alteración de voltaje",
            "B) Desmagnetización parcial que reduce el flujo magnético principal y disminuye el voltaje terminal",
            "C) Magnetización directa que incrementa descontroladamente la velocidad del rotor",
            "D) Saturación armónica del núcleo que elimina las pérdidas por histéresis"
        ],
        respuestaCorrecta: 1,
        explicacion: "Con carga inductiva pura, la corriente de armadura está desfasada 90 grados en retraso, creando un campo magnético que se opone directamente al campo del rotor (desmagnetización), reduciendo la tensión en terminales."
    },
    {
        id: 3,
        area: "Sistemas de Potencia",
        pregunta: "Al realizar un análisis de flujos de carga (Power Flow) utilizando el método de Newton-Raphson, ¿cómo se clasifican típicamente los buses que componen el sistema eléctrico de potencia?",
        opciones: [
            "A) Bus de carga (PQ), Bus de voltaje controlado (PV) y Bus oscilante o de referencia (Slack/Swing)",
            "B) Bus primario, Bus secundario y Bus de emergencia",
            "C) Bus radial, Bus mallado y Bus anillado",
            "D) Bus síncrono, Bus asíncrono y Bus de corriente directa"
        ],
        respuestaCorrecta: 0,
        explicacion: "En los estudios de flujos de potencia, los nodos se modelan como PQ (potencia activa y reactiva conocidas), PV (potencia activa y voltaje conocidos) y Slack (referencia de ángulo y magnitud)."
    },
    {
        id: 4,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué tipo de conmutación caracteriza a un rectificador controlado de silicio (SCR) operando en un convertidor CA-CD alimentado por la red eléctrica comercial de corriente alterna?",
        opciones: [
            "A) Conmutación forzada mediante circuitos auxiliares LC",
            "B) Conmutación natural o de línea (Line Commutation)",
            "C) Conmutación por avalancha térmica",
            "D) Conmutación estática por radiofrecuencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los rectificadores conectados a la red de CA utilizan la propia inversión natural del voltaje sinusoidal de la línea para apagar (commutar) los SCRs, proceso conocido como conmutación natural."
    },
    {
        id: 5,
        area: "Protecciones Eléctricas",
        pregunta: "¿Cuál es la función principal de un relé de sobrecorriente de tiempo inverso instalado en un sistema de distribución eléctrica?",
        opciones: [
            "A) Disparar instantáneamente ante cualquier variación de voltaje",
            "B) Operar más rápido cuanto mayor sea la magnitud de la corriente de falla detectada, coordinando la selectividad",
            "C) Medir el factor de potencia mensual para evitar penalizaciones de CFE",
            "D) Convertir la señal de corriente alterna en corriente directa de control"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los relés de tiempo inverso ajustan su tiempo de operación de forma inversamente proporcional a la magnitud de la corriente de falla, permitiendo coordinar las protecciones en cascada."
    },
    {
        id: 6,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "De acuerdo con las normativas de instalaciones eléctricas (como la NOM-001-SEDE), ¿cómo se define el factor de demanda en una instalación industrial?",
        opciones: [
            "A) La relación entre la demanda máxima del sistema y la carga total conectada",
            "B) El cociente de dividir la energía consumida entre las horas totales del mes",
            "C) La proporción entre la potencia reactiva y la potencia aparente",
            "D) La corriente nominal del interruptor principal entre la corriente de cortocircuito"
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de demanda es la razón entre la demanda máxima real de una instalación y la suma de la carga total conectada, siendo siempre menor o igual a la unidad."
    },
    {
        id: 7,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un sistema trifásico equilibrado conectado en estrella (Y) con secuencia positiva, ¿cuál es la relación matemática entre las tensiones de línea ($V_L$) y las tensiones de fase ($V_F$)?",
        opciones: [
            "A) $V_L = V_F$",
            "B) $V_L = \\sqrt{3} V_F$ con un adelanto de 30 grados",
            "C) $V_L = V_F / \\sqrt{3}$ con un retraso de 90 grados",
            "D) $V_L = 3 V_F$"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una conexión en estrella equilibrada, la magnitud de la tensión de línea es igual a la raíz cuadrada de tres veces la tensión de fase, adelantándose 30 grados respecto a esta."
    },
    {
        id: 8,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué prueba estándar aplicada a un transformador monofásico permite determinar directamente las pérdidas en el cobre y la impedancia equivalente de cortocircuito?",
        opciones: [
            "A) Prueba de vacío (Open-circuit test)",
            "B) Prueba de cortocircuito (Short-circuit test)",
            "C) Prueba de resistencia de aislamiento con Megger",
            "D) Prueba de rigidez dieléctrica del aceite aislante"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba de cortocircuito se realiza alimentando el devanado primario a tensión reducida hasta que circula la corriente nominal, lo que permite medir las pérdidas por efecto Joule en los devanados."
    },
    {
        id: 9,
        area: "Sistemas de Potencia",
        pregunta: "Durante una falla trifásica simétrica en un sistema eléctrico de potencia, ¿qué herramienta matemática se emplea habitualmente para simplificar el cálculo de corrientes de cortocircuito?",
        opciones: [
            "A) Transformada de Park y componentes simétricas de Fortescue",
            "B) Método de por ciento de impedancia y sistema por unidad (pu)",
            "C) Análisis de mallas con matrices de admitancia nodal",
            "D) Ecuaciones diferenciales de estado no lineales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para fallas simétricas (equilibradas), el sistema por unidad (pu) simplifica enormemente los cálculos al eliminar las relaciones de transformación de los transformadores."
    },
    {
        id: 10,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función cumple un circuito inversor (Inverter) dentro de los sistemas de conversión de energía eléctrica?",
        opciones: [
            "A) Convertir corriente alterna (CA) de frecuencia fija en corriente directa (CD) regulada",
            "B) Transformar corriente directa (CD) en corriente alterna (CA) con voltaje y frecuencia controlados",
            "C) Elevar el nivel de voltaje de corriente alterna mediante acoplamiento magnético estático",
            "D) Filtrar los armónicos de alta frecuencia generados en redes de distribución"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un inversor es un convertidor estático de potencia cuya función fundamental es transformar energía en corriente directa (CD) hacia corriente alterna (CA), empleado en variadores de velocidad y sistemas solares."
    },
    {
        id: 11,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué fenómeno transitorio severo protege un apartarrayos (surge arrester) o dispositivo de protección contra sobretensiones (DPS) en una subestación eléctrica?",
        opciones: [
            "A) Sobretensiones temporales por rechazo de carga",
            "B) Descargas atmosféricas directas (rayos) y sobretensiones por maniobra en el sistema",
            "C) Cortocircuitos trifásicos permanentes en barras",
            "D) Variaciones lentas de frecuencia por desbalance de generación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los apartarrayos están diseñados para limitar sobretensiones transitorias de origen atmosférico o por maniobras de interruptores, conduciendo la corriente de descarga a tierra de forma segura."
    },
    {
        id: 12,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el objetivo fundamental de compensar el factor de potencia mediante la instalación de bancos de condensadores en una planta industrial?",
        opciones: [
            "A) Incrementar la velocidad de los motores de inducción por encima de su velocidad síncrona",
            "B) Reducir la potencia reactiva demandada a la red, disminuyendo las caídas de tensión y evitando penalizaciones económicas por parte de la empresa suministradora",
            "C) Elevar el nivel de cortocircuito en el tablero principal de distribución",
            "D) Transformar la corriente alterna en corriente continua para alimentar cargas electrónicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Instalar capacitores suministra la potencia reactiva inductiva que demandan los motores localmente, mejorando el factor de potencia global, liberando capacidad en transformadores y evitando cargos por energía reactiva."
    },
    {
        id: 13,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito magnético con entrehierro, ¿qué analogía directa existe entre la ley de Ohm para circuitos eléctricos ($V = I \cdot R$) y la ley circuital magnética (Ley de Hopkinson)?",
        opciones: [
            "A) Fuerza electromotriz ($F_mm$) = Flujo magnético ($\Phi$) $\times$ Reluctancia ($\mathcal{R}$)",
            "B) Inductancia mutua = Corriente de excitación / Número de espiras",
            "C) Densidad de flujo = Permeabilidad magnética / Intensidad de campo",
            "D) Potencia aparente = Voltaje eficaz $\times$ Corriente eficaz"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ley de Hopkinson establece que la fuerza magnetomotriz ($F = N \cdot I$) es igual al producto del flujo magnético por la reluctancia del circuito magnético, análoga a $V = I \cdot R$."
    },
    {
        id: 14,
        area: "Máquinas Eléctricas",
        pregunta: "¿Por qué razón un motor de inducción trifásico nunca puede operar sincrónicamente a la velocidad del campo magnético giratorio (velocidad síncrona)?",
        opciones: [
            "A) Porque se saturaría el núcleo magnético del estator",
            "B) Porque se requiere un deslizamiento relativo para inducir corrientes en el rotor que produzcan par motor",
            "C) Porque el voltaje de alimentación alterna se anularía en el entrehierro",
            "D) Porque los rodamientos mecánicos se sobrecalentarían por fricción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio de funcionamiento del motor de inducción se basa en la ley de Faraday; si el rotor girara a la velocidad síncrona, no habría movimiento relativo entre el campo y los conductores del rotor, cesando la inducción y el par."
    },
    {
        id: 15,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué representa el límite de estabilidad en estado estable de un sistema de transmisión de energía eléctrica en corriente alterna?",
        opciones: [
            "A) La máxima potencia que puede transmitirse a través de una línea mediante incrementos graduales sin perder el sincronismo",
            "B) La corriente máxima de cortocircuito soportada por los conductores",
            "C) La temperatura crítica de los devanados del transformador principal",
            "D) El tiempo máximo de despeje de falla de los interruptores automáticos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El límite de estabilidad en estado estable define la potencia máxima transferible cuando los cambios en la carga o generación se realizan de manera suficientemente lenta para no desincronizar los generadores."
    },
    {
        id: 16,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué componente semiconductor de potencia se utiliza comúnmente en aplicaciones de alta frecuencia de conmutación debido a su control por voltaje en compuerta y menores pérdidas por conmutación frente a los BJTs?",
        opciones: [
            "A) Transistor Bipolar de Unión (BJT)",
            "B) Transistor de Efecto de Campo MOS de Compuerta Aislando (MOSFET de Potencia)",
            "C) Rectificador Controlado de Silicio (SCR)",
            "D) Diodo rectificador de propósito general"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los MOSFETs de potencia ofrecen tiempos de conmutación muy rápidos y se controlan mediante tensión en la compuerta con consumo de corriente casi nulo en estado estacionario, ideales para altas frecuencias."
    },
    {
        id: 17,
        area: "Protecciones Eléctricas",
        pregunta: "¿Cuál es el principio de operación fundamental de un relé diferencial aplicado en la protección primaria de transformadores de potencia y generadores?",
        opciones: [
            "A) Comparar la corriente que entra al equipo con la corriente que sale del mismo mediante transformadores de corriente; si la diferencia supera un umbral, se dispara",
            "B) Medir la temperatura interna del aceite aislante",
            "C) Detectar sobretensiones atmosféricas provenientes de las líneas de transmisión",
            "D) Monitorear la frecuencia del sistema eléctrico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relé diferencial opera bajo la ley de corrientes de Kirchhoff; bajo condiciones normales (o externas), la corriente de entrada iguala a la de salida. Si ocurre una falla interna, la diferencia activa la protección."
    },
    {
        id: 18,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En el diseño de alimentadores eléctricos industriales, ¿por qué se debe calcular y limitar la caída de tensión máxima permitida en los conductores?",
        opciones: [
            "A) Para evitar que los motores y equipos sufran sobrecalentamiento, pérdida de torque y mal funcionamiento debido a tensiones por debajo de su rango nominal",
            "B) Para incrementar el valor de cortocircuito en los tableros de alumbrado",
            "C) Para cumplir estrictamente con los cálculos de la factura mensual de gas",
            "D) Para reducir el diámetro físico de la tubería conduit"
        ],
        respuestaCorrecta: 0,
        explicacion: "Limitar la caída de tensión (típicamente a un máximo de 3% en alimentadores y 2% en circuitos derivados) garantiza que los equipos reciban el voltaje adecuado para operar de forma eficiente y segura."
    },
    {
        id: 19,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "Al analizar un circuito eléctrico de corriente alterna en régimen permanente sinusoidal, ¿cómo se relacionan el valor eficaz (RMS) y el valor pico ($V_p$) de una onda de tensión puramente senoidal?",
        opciones: [
            "A) $V_{rms} = V_p / \\sqrt{2}$",
            "B) $V_{rms} = V_p \\times \\sqrt{3}$",
            "C) $V_{rms} = V_p / 2$",
            "D) $V_{rms} = V_p \\times \\pi$"
        ],
        respuestaCorrecta: 0,
        explicacion: "El valor eficaz o RMS de una señal sinusoidal pura equivale a su valor pico dividido entre la raíz cuadrada de dos ($\\sqrt{2} \\approx 1.414$).",
        opcionesCompletas: true
    },
    {
        id: 20,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué método de arranque se emplea comúnmente en motores de inducción jaula de ardilla de gran potencia para limitar la elevada corriente de arranque que absorben de la red?",
        opciones: [
            "A) Arranque directo a tensión plena (Across-the-line)",
            "B) Arranque a tensión reducida mediante autotransformador, estrella-triángulo o arrancadores suaves (Soft Starters)",
            "C) Inversión de fases mediante conmutación manual",
            "D) Cortocircuitando el devanado del estator"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los motores grandes generan corrientes de arranque de 5 a 8 veces su nominal; para proteger la red y evitar caídas de tensión bruscas, se emplean métodos de arranque a tensión reducida o arrancadores suaves."
    },
    {
        id: 21,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué representa el concepto de componentes simétricas en el análisis de sistemas eléctricos trifásicos desequilibrados?",
        opciones: [
            "A) La descomposición de un conjunto de fasores trifásicos desequilibrados en tres sistemas equilibrados: secuencia positiva, secuencia negativa y secuencia cero",
            "B) El cálculo de la potencia reactiva mediante triángulos rectángulos",
            "C) La transformación de coordenadas de corriente alterna a corriente directa",
            "D) La simetría física de las torres de transmisión en líneas de alta tensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Fortescue (componentes simétricas) permite descomponer cualquier sistema trifásico desequilibrado en tres componentes simétricas independientes, simplificando el análisis de fallas asimétricas."
    },
    {
        id: 22,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es la función principal de un circuito rectificador trifásico de onda completa (puente de Graetz con diodos) en aplicaciones industriales?",
        opciones: [
            "A) Convertir corriente alterna trifásica en corriente continua de menor nivel de rizo para alimentar cargas de potencia",
            "B) Transformar corriente directa en corriente alterna de frecuencia variable",
            "C) Elevar el voltaje de corriente alterna mediante inducción mutua",
            "D) Proteger el sistema contra sobrecorrientes transitorias"
        ],
        respuestaCorrecta: 0,
        explicacion: "El puente rectificador trifásico de onda completa convierte la energía trifásica de CA en CD con un voltaje medio elevado y un factor de rizo menor que los sistemas monofásicos."
    },
    {
        id: 23,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de distancia (tipo impedancia) en la protección de líneas de transmisión de alta y muy alta tensión?",
        opciones: [
            "A) Disparar cuando la relación entre la tensión y la corriente medida en el relé indica que la impedancia de la línea ha caído por debajo de un valor ajustado (indicando falla)",
            "B) Medir la resistencia ohmica del suelo para mantenimiento de tierras",
            "C) Desconectar la carga si el factor de potencia disminuye",
            "D) Registrar el consumo de energía en kilovatios-hora"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los relés de distancia miden la impedancia aparente vista desde el punto de instalación; como la impedancia de una línea es proporcional a su distancia, permiten discriminar fallas internas selectivamente."
    },
    {
        id: 24,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "De acuerdo con las normas de diseño eléctrico, ¿cómo se dimensiona la capacidad de corriente de conducción (ampacidad) de un conductor eléctrico?",
        opciones: [
            "A) Considerando exclusivamente la longitud física del cable en metros",
            "B) Seleccionando el calibre cuyo límite térmico de corriente admisible supere la corriente de carga continua multiplicada por factores de corrección por temperatura ambiental y agrupamiento",
            "C) Tomando el valor mínimo del fusible principal sin importar la temperatura",
            "D) Dividiendo la potencia aparente entre la impedancia de la fuente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ampacidad de un conductor debe ajustarse según las tablas normativas y aplicarle factores de corrección por temperatura ambiente y número de conductores agrupados en tubería para evitar degradación térmica."
    },
    {
        id: 25,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico lineal con múltiples fuentes independientes de tensión y corriente de corriente alterna, ¿qué teorema permite calcular la respuesta total como la suma algebraica de las respuestas individuales de cada fuente actuando por separado?",
        opciones: [
            "A) Teorema de Superposición",
            "B) Teorema de Thevenin",
            "C) Teorema de Norton",
            "D) Teorema de máxima transferencia de potencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de superposición establece que en cualquier circuito lineal con varias fuentes, la corriente o tensión en cualquier rama es la suma algebraica de las contribuciones de cada fuente actuando de forma aislada."
    },
    {
        id: 26,
        area: "Máquinas Eléctricas",
        pregunta: "¿Cómo se puede regular la velocidad de giro de un motor de corriente continua con excitación en derivación (Shunt)?",
        opciones: [
            "A) Modificando la resistencia del circuito de campo, variando el voltaje aplicado a la armadura o insertando resistencia en serie con la armadura",
            "B) Cambiando la frecuencia de la red de corriente alterna",
            "C) Cortocircuitando las escobillas del colector",
            "D) Incrementando el número de polos del estator mecánicamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La velocidad de un motor DC Shunt se controla variando el flujo magnético (modificando la corriente de campo) o alterando la caída de tensión en la armadura (mediante voltaje aplicado o resistencia serie)."
    },
    {
        id: 27,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué describe la curva de capacidad (o carta de operación) de un generador síncrono conectado a un sistema de potencia?",
        opciones: [
            "A) Los límites operativos seguros del generador en términos de potencia activa ($P$) y potencia reactiva ($Q$) sin exceder la temperatura de los devanados ni la corriente de campo",
            "B) La velocidad máxima mecánica antes de la ruptura del eje del rotor",
            "C) El consumo de combustible diésel por kilovatio generador",
            "D) La eficiencia termodinámica frente a la presión atmosférica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La curva de capacidad delimita la zona segura de operación de un generador síncrono, considerando límites térmicos del estator, del rotor y de estabilidad estática."
    },
    {
        id: 28,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es la función de un convertidor CD-CD (Chopper) tipo reductor (Buck)?",
        opciones: [
            "A) Transformar un nivel de voltaje de corriente continua de entrada en un voltaje de salida continuo menor, mediante control de ancho de pulso (PWM)",
            "B) Elevar el voltaje continuo de entrada al doble de su valor",
            "C) Invertir la polaridad de la corriente continua a corriente alterna",
            "D) Rectificar señales de radiofrecuencia moduladas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un convertidor Buck (reductor) disminuye el voltaje de corriente continua mediante la conmutación rápida de un interruptor semiconductor controlado por ancho de pulso (PWM) y un filtro LC."
    },
    {
        id: 29,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué evalúa un relé de protección contra pérdida de campo (o pérdida de excitación) en un generador síncrono de gran capacidad?",
        opciones: [
            "A) La interrupción de la corriente de campo del rotor, lo que provocaría que la máquina opere como generador asíncrono absorbiendo gran cantidad de potencia reactiva de la red y dañando el estator",
            "B) La caída de voltaje en las barras de distribución de baja tensión",
            "C) El desbalance de fases por cargas monofásicas",
            "D) La sobrecarga térmica en los transformadores de servicio propio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Si un generador pierde su excitación, deja de sincronizarse y absorbe potencia reactiva masiva de la red, actuando como motor de inducción a velocidad supra-síncrona; el relé detecta esto y lo dispara."
    },
    {
        id: 30,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En una subestación eléctrica industrial, ¿cuál es la función de los transformadores de instrumentos (Transformadores de Potencial - TP y Transformadores de Corriente - TC)?",
        opciones: [
            "A) Reducir los altos niveles de tensión y corriente de la red de potencia a valores seguros y estandarizados (ej. 120V y 5A) para alimentar instrumentos de medición y relés de protección",
            "B) Elevar la tensión trifásica para la transmisión a largas distancias",
            "C) Filtrar las ondas armónicas de alta frecuencia generadas por cargas no lineales",
            "D) Suministrar energía de respaldo ininterrumpible ante apagones de CFE"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los TPs y TCs aíslan galvánicamente los circuitos de alta potencia de los equipos de control, medición y protección, reduciendo los valores eléctricos a magnitudes manejables y seguras."
    },
    {
        id: 31,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "Si se aplica el Teorema de Thevenin a cualquier red eléctrica lineal de corriente alterna vista desde dos terminales, ¿a qué circuito equivalente se reduce?",
        opciones: [
            "A) A una fuente de tensión ideal de Thevenin ($V_{th}$) en serie con una impedancia equivalente de Thevenin ($Z_{th}$)",
            "B) A una fuente de corriente ideal en paralelo con una admitancia",
            "C) A una resistencia pura equivalente sin componentes reactivos",
            "D) A un transformador ideal con relación de vueltas unitaria"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Thevenin reduce cualquier circuito lineal de CA a una fuente de voltaje en serie con una impedancia equivalente compleja $Z_{th}$."
    },
    {
        id: 32,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué representa la curva de magnetización (o característica de vacío) de una máquina de corriente continua o síncrona?",
        opciones: [
            "A) La relación gráfica entre la tensión inducida en vacío y la corriente de campo (o fuerza magnetomotriz)",
            "B) La relación entre la velocidad mecánica y el par de carga",
            "C) Las pérdidas totales en el núcleo de hierro frente a la frecuencia",
            "D) La eficiencia máxima de conversión electromecánica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La curva de saturación o característica de vacío muestra cómo se comporta el flujo magnético (y por ende la tensión inducida) al incrementar la corriente de campo, evidenciando la zona de saturación del hierro."
    },
    {
        id: 33,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué efecto eléctrico negativo provocan las líneas de transmisión de muy alta tensión de gran longitud cuando operan en vacío o con carga muy baja (Efecto Ferranti)?",
        opciones: [
            "A) Un incremento notable de la tensión en el extremo receptor respecto al extremo transmisor debido a la potencia reactiva capacitiva de la línea",
            "B) Una caída de tensión severa por efecto Joule en los conductores",
            "C) La saturación instantánea de los generadores por corriente de cortocircuito",
            "D) La reducción de la frecuencia del sistema por exceso de inductancia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Efecto Ferranti ocurre en líneas largas en vacío; la capacitancia distribuida de la línea genera corriente capacitiva que al fluir por la inductancia produce una elevación de voltaje en el extremo receptor."
    },
    {
        id: 34,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué topología de convertidor se emplea habitualmente para interconectar sistemas fotovoltaicos con la red eléctrica comercial, asegurando la extracción de la máxima potencia del panel (MPPT) y la inyección de corriente sinusoidal?",
        opciones: [
            "A) Rectificador monofásico no controlado con diodos",
            "B) Inversor conectado a la red (Grid-tied inverter) con control PWM y etapa de elevación DC-DC",
            "C) Transformador reductor monofásico de núcleo de aire",
            "D) Variador de velocidad escalar V/f para motores AC"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los inversores interconectados a la red (grid-tied) emplean algoritmos de seguimiento del punto de máxima potencia (MPPT) en una etapa CD-CD y un inversor PWM para sincronizarse y verter energía limpia a la red."
    },
    {
        id: 35,
        area: "Protecciones Eléctricas",
        pregunta: "¿Cuál es la función de un relé de recierre automático (Recloser) en las líneas de distribución aérea de media tensión?",
        opciones: [
            "A) Interrumpir permanentemente el circuito ante la primera falla transitoria",
            "B) Restablecer el servicio de forma automática tras una falla temporal (como el contacto momentáneo de una rama), abriendo y cerrando el circuito en ciclos programados",
            "C) Medir la energía reactiva consumida por los usuarios residenciales",
            "D) Elevar la tensión en las horas de mayor demanda comercial"
        ],
        respuestaCorrecta: 1,
        explicacion: "La gran mayoría de fallas en líneas aéreas son transitorias (rayos, ramas); el recloser abre para despejar el arco eléctrico y reconecta automáticamente tras unos segundos, minimizando las interrupciones."
    },
    {
        id: 36,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Qué especifica el código de colores normativo para los conductores de puesta a tierra de equipos y sistemas en instalaciones eléctricas de baja tensión?",
        opciones: [
            "A) Color rojo o negro sólido",
            "B) Color verde, verde con franjas amarillas, o conductor desnudo",
            "C) Color azul claro o blanco exclusivamente",
            "D) Color marrón o gris oscuro"
        ],
        respuestaCorrecta: 1,
        explicacion: "Por normatividad internacional y nacional (NOM-001-SEDE / NEC), los conductores de puesta a tierra de equipos y sistemas deben identificarse mediante el color verde, verde con franjas amarillas o estar desnudos."
    },
    {
        id: 37,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito trifásico desequilibrado, ¿cómo se calcula la potencia compleja total ($S_{total}$) absorbida por la carga?",
        opciones: [
            "A) Como la suma algebraica de las potencias complejas monofásicas de cada fase ($S_A + S_B + S_C$)",
            "B) Multiplicando la tensión de línea por la corriente de línea por $\\sqrt{3}$ sin importar el desequilibrio",
            "C) Únicamente mediante la componente de secuencia cero",
            "D) Como el producto aritmético de la potencia activa total al cuadrado"
        ],
        respuestaCorrecta: 0,
        explicacion: "En sistemas desequilibrados, no se pueden usar las fórmulas simplificadas trifásicas simétricas; la potencia compleja total se obtiene sumando estrictamente la potencia compleja de cada fase individual."
    },
    {
        id: 38,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué sucede con el par de arranque y la velocidad de un motor de inducción si se reduce la tensión de alimentación aplicada al estator?",
        opciones: [
            "A) El par de arranque disminuye proporcionalmente al cuadrado de la tensión aplicada, mientras que la velocidad nominal a plena carga varía muy poco",
            "B) El par de arranque aumenta al doble y la velocidad se duplica",
            "C) La velocidad cae a cero de forma inmediata sin importar la carga",
            "D) El motor opera como generador síncrono instantáneamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "El par en un motor de inducción es proporcional al cuadrado del voltaje aplicado ($T \propto V^2$). Reducir la tensión reduce drásticamente el par de arranque, aunque la velocidad ante carga nominal disminuye ligeramente."
    },
    {
        id: 39,
        area: "Sistemas de Potencia",
        pregunta: "¿Cuál es el propósito principal de realizar estudios de cortocircuito en un sistema eléctrico de potencia antes de seleccionar e instalar los equipos de patio y tableros?",
        opciones: [
            "A) Determinar las máximas corrientes de falla que los interruptores automáticos y equipos deben ser capaces de interrumpir y soportar térmicamente sin sufrir daños catastróficos",
            "B) Calcular el costo de la tarifa eléctrica mensual ante CFE",
            "C) Verificar el factor de potencia óptimo en las horas de menor demanda",
            "D) Diseñar la red de iluminación de emergencia de la subestación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los estudios de cortocircuito calculan las corrientes máximas de falla (simétricas y asimétricas) para asegurar que la capacidad interrupting (AIC) de interruptores y fusibles sea adecuada para la protección del sistema."
    },
    {
        id: 40,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué componente semiconductor de potencia bidireccional en corriente y voltaje se utiliza habitualmente para el control de fase en cargas de corriente alterna como reguladores de intensidad luminosa (dimmers) o calefactores?",
        opciones: [
            "A) Diodo Zener de referencia",
            "B) Triac (Triode for Alternating Current)",
            "C) Transistor MOSFET de canal N",
            "D) GTO (Gate Turn-Off Thyristor)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Triac es un dispositivo semiconductor bidireccional capaz de conducir corriente en ambos sentidos al ser disparado por su compuerta, ideal para control de potencia en corriente alterna."
    },
    {
        id: 41,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué protege específicamente el relé de sobretemperatura o imagen térmica instalado en transformadores de potencia inmersos en aceite?",
        opciones: [
            "A) El aislamiento sólido de los devanados frente al envejecimiento prematuro y destrucción por sobrecalentamiento debido a sobrecargas prolongadas o fallas de refrigeración",
            "B) Las sobretensiones atmosféricas en la línea de transmisión de alta tensión",
            "C) Los cortocircuitos francos entre fases en el secundario",
            "D) La pérdida de sincronismo del generador principal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La vida útil del transformador depende críticamente de la temperatura de sus devanados; el relé de imagen térmica simula la temperatura interna para alertar o disparar antes de que el aislamiento falle."
    },
    {
        id: 42,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Qué define el concepto de 'Coordinación de Protecciones' (Selectividad) en un sistema eléctrico industrial?",
        opciones: [
            "A) Que el dispositivo de protección más cercano a la falla actúe y despeje el circuito de inmediato, sin provocar la desconexión innecesaria de otras áreas sanas de la planta",
            "B) Que todos los interruptores de la planta disparen simultáneamente ante cualquier anomalía",
            "C) Que los fusibles principales tengan menor capacidad que los circuitos derivados",
            "D) Que la protección principal opere antes que cualquier relé secundario"
        ],
        respuestaCorrecta: 0,
        explicacion: "La selectividad o coordinación asegura que ante una falla, solo dispare el dispositivo de protección ubicado inmediatamente aguas arriba de la anomalía, minimizando el área afectada y manteniendo el servicio."
    },
    {
        id: 43,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico de corriente alterna, ¿cómo se define físicamente el Factor de Potencia (FP)?",
        opciones: [
            "A) Como el coseno del ángulo de desfase entre la tensión y la corriente, o la relación entre la potencia activa ($P$) y la potencia aparente ($S$)",
            "B) Como el cociente de dividir la potencia reactiva entre la potencia activa",
            "C) Como la suma de las impedancias complejas del circuito",
            "D) Como la eficiencia del transformador de alimentación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de potencia es la relación entre la potencia real que aprovecha el sistema para realizar trabajo ($P$) y la potencia total suministrada ($S$), expresada matemáticamente como $\\cos(\\theta) = P / S$."
    },
    {
        id: 44,
        area: "Máquinas Eléctricas",
        pregunta: "¿Cuál es la principal ventaja operativa de un motor sincrónico operando con sobreexcitación en el campo magnético del rotor?",
        opciones: [
            "A) Que actúa como un condensador síncrono, suministrando potencia reactiva capacitiva a la red y ayudando a mejorar el factor de potencia del sistema",
            "B) Que duplica su velocidad de rotación por encima de la síncrona",
            "C) Que elimina por completo las pérdidas mecánicas por fricción en los cojinetes",
            "D) Que puede operar sin necesidad de corriente alterna en el estator"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un motor sincrónico sobreexcitado entrega corriente reactiva adelantada a la red, comportándose eléctricamente como un banco de capacitores (condensador síncrono), útil para corrección de factor de potencia."
    },
    {
        id: 45,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué fenómeno transitorio electromecánico se evalúa mediante el criterio de igual área (Equal-Area Criterion) en la estabilidad transitoria de máquinas síncronas?",
        opciones: [
            "A) La capacidad del rotor de un generador para mantener el sincronismo tras una perturbación severa o falla transitoria en el sistema",
            "B) La resistencia térmica de los cables de transmisión bajo carga máxima",
            "C) La caída de voltaje en las barras de una subestación aislada",
            "D) El desbalance de corrientes de secuencia cero en líneas de distribución"
        ],
        respuestaCorrecta: 0,
        explicacion: "El criterio de igual área es un método gráfico analítico para evaluar la estabilidad transitoria de un sistema de una máquina conectada a una barra infinita tras una falla, comparando la energía cinética acelerante y frenante."
    },
    {
        id: 46,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función principal cumple un cicloconvertidor en la conversión de energía eléctrica?",
        opciones: [
            "A) Convertir una fuente de corriente alterna de una frecuencia fija en otra corriente alterna de frecuencia variable y menor, de forma directa sin etapa intermedia de corriente continua",
            "B) Transformar corriente continua en corriente alterna trifásica de alta frecuencia",
            "C) Rectificar corriente alterna en corriente continua regulada",
            "D) Elevar el nivel de tensión de un sistema fotovoltaico"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un cicloconvertidor realiza la conversión directa de CA a CA cambiando la frecuencia sin pasar por un enlace de CD, empleado comúnmente en aplicaciones industriales de muy alta potencia y baja velocidad."
    },
    {
        id: 47,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué protege un relé de frecuencia (subfrecuencia o sobrefrecuencia) en un sistema eléctrico interconectado?",
        opciones: [
            "A) Desequilibrios severos entre la generación total y la carga del sistema, previniendo el colapso de frecuencia mediante esquemas de desconexión automática de carga (EDAC)",
            "B) Cortocircuitos de alta impedancia en líneas de transmisión",
            "C) Descargas atmosféricas directas en las torres de alta tensión",
            "D) Falla en los rodamientos mecánicos de los motores síncronos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Si la carga excede a la generación, la frecuencia del sistema cae; los relés de subfrecuencia detectan esto y ejecutan esquemas de disparo de carga (deslastre) para salvar la estabilidad de la red."
    },
    {
        id: 48,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En una instalación eléctrica industrial, ¿cuál es el propósito normativo y de seguridad de conectar las partes metálicas no conductoras de equipos y gabinetes al sistema de puesta a tierra?",
        opciones: [
            "A) Evitar que dichas estructuras alcancen un potencial de voltaje peligroso respecto a tierra ante una falla de aislamiento, protegiendo al personal contra choques eléctricos",
            "B) Aumentar la resistencia ohmica del suelo para mejorar la iluminación",
            "C) Reducir el consumo de energía activa mensual facturado por CFE",
            "D) Permitir que los motores operen a tensiones superiores a su diseño"
        ],
        respuestaCorrecta: 0,
        explicacion: "La puesta a tierra de equipos garantiza que si un conductor activo hace contacto con una carcasa metálica, se genere una corriente de falla alta que dispare la protección rápidamente, evitando electrocución."
    },
    {
        id: 49,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico resonante paralelo (circuito tapón) formado por una inductancia real y una capacitancia, ¿qué comportamiento presenta la impedancia total a la frecuencia de resonancia?",
        opciones: [
            "A) La impedancia total alcanza su valor máximo y es puramente resistiva, haciendo que la corriente de línea sea mínima",
            "B) La impedancia total cae a cero absoluto",
            "C) La corriente inductiva se anula por completo y la capacitiva tiende al infinito",
            "D) El factor de potencia se vuelve cero en retraso"
        ],
        respuestaCorrecta: 0,
        explicacion: "En resonancia paralela, la impedancia del circuito alcanza su valor máximo, lo que provoca que la corriente total consumida de la fuente sea mínima y esté en fase con la tensión."
    },
    {
        id: 50,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué define la regulación de voltaje en un transformador monofásico de potencia?",
        opciones: [
            "A) El cambio porcentual en la tensión del devanado secundario al pasar de la condición de plena carga a vacío, manteniendo constante la tensión primaria",
            "B) La relación entre las pérdidas en el cobre y las pérdidas en el núcleo",
            "C) La capacidad máxima de corriente que soportan los bushings",
            "D) La temperatura ambiente máxima permisible en el tanque de aceite"
        ],
        respuestaCorrecta: 0,
        explicacion: "La regulación de voltaje mide la caída de tensión interna del transformador entre vacío y plena carga, expresada como porcentaje de la tensión a plena carga."
    },
    {
        id: 51,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué representa una barra slack (oscilante o de balance) en la solución numérica de flujos de carga de un sistema eléctrico?",
        opciones: [
            "A) Una barra con voltaje fijo en magnitud y ángulo (ej. 1.0 pu / 0 grados) que absorbe o inyecta la potencia de pérdidas desconocidas en el sistema para equilibrar la generación y la demanda",
            "B) Una barra donde la potencia activa es estrictamente cero",
            "C) Una barra de carga residencial sin generación propia",
            "D) Un nodo aislado sin conexión a la red de transmisión"
        ],
        respuestaCorrecta: 0,
        explicacion: "Como las pérdidas de transmisión no se conocen antes de resolver el flujo de carga, se designa una barra slack para asumir el desbalance de potencia activa y reactiva del sistema."
    },
    {
        id: 52,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es el propósito de incluir un diodo de rueda libre (Freewheeling diode) en paralelo con una carga inductiva alimentada por un convertidor de conmutación?",
        opciones: [
            "A) Proveer un camino de recirculación para la corriente inductiva cuando el interruptor semiconductor se abre, evitando sobretensiones destructivas por autoinducción",
            "B) Elevar la frecuencia de oscilación del circuito resonante",
            "C) Rectificar la corriente alterna de la red comercial",
            "D) Incrementar las pérdidas por conmutación en el transistor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando se abre un interruptor en serie con una carga inductiva, la energía almacenada en el campo magnético genera un pico de tensión peligroso ($V = L di/dt$); el diodo de rueda libre disipa esta corriente de forma segura."
    },
    {
        id: 53,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de protección contra sobrecorriente direccional en redes malladas o líneas de transmisión en anillo?",
        opciones: [
            "A) Determinar no solo la magnitud de la corriente de falla, sino también el sentido o dirección del flujo de potencia de falla, permitiendo aislar selectivamente la sección afectada",
            "B) Medir la resistencia de puesta a tierra de las torres",
            "C) Desconectar los generadores si la frecuencia sube de 60 Hz",
            "D) Controlar el factor de potencia mediante bancos de capacitores"
        ],
        respuestaCorrecta: 0,
        explicacion: "En redes malladas, la corriente de falla puede fluir en ambos sentidos; el relé direccional utiliza una tensión de polarización para identificar la dirección de la falla y operar solo si el flujo es hacia el elemento protegido."
    },
    {
        id: 54,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el objetivo de calcular la corriente de cortocircuito simétrica inicial ($I_{k}''$) en el punto de entrega de una instalación industrial?",
        opciones: [
            "A) Seleccionar y dimensionar correctamente los interruptores automáticos y equipos de interrupción garantizando que su capacidad interruptiva sea superior a la energía de falla",
            "B) Calcular el consumo mensual de energía activa en kWh",
            "C) Determinar el calibre mínimo de los conductores de alumbrado",
            "D) Ajustar el factor de potencia en vacío"
        ],
        respuestaCorrecta: 0,
        explicacion: "Conocer la corriente de cortocircuito máxima en la acometida es indispensable para elegir interruptores con la capacidad interruptiva adecuada para soportar y extinguir el arco eléctrico en caso de falla franca."
    },
    {
        id: 55,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un sistema trifásico equilibrado conectado en triángulo ($\Delta$), ¿cómo se relacionan las corrientes de línea ($I_L$) y las corrientes de fase ($I_F$)?",
        opciones: [
            "A) $I_L = \\sqrt{3} I_F$ con un retraso de 30 grados respecto a la corriente de fase",
            "B) $I_L = I_F$",
            "C) $I_L = I_F / \\sqrt{3}$",
            "D) $I_L = 3 I_F$"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una conexión en triángulo equilibrada, la corriente de línea es igual a la raíz cuadrada de tres veces la corriente de fase, con un desfase de 30 grados."
    },
    {
        id: 56,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué prueba se realiza para determinar las pérdidas en el núcleo (hierro) y la corriente de vacío de un transformador de potencia?",
        opciones: [
            "A) Prueba de vacío (Open-circuit test)",
            "B) Prueba de cortocircuito",
            "C) Prueba de rigidez dieléctrica del aceite",
            "D) Prueba de resistencia óhmica con puente de Kelvin"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la prueba de vacío se alimenta un devanado a su tensión nominal dejando el otro abierto; la potencia absorbida representa prácticamente las pérdidas en el núcleo (histéresis y corrientes parásitas)."
    },
    {
        id: 57,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué representa la impedancia en por unidad (pu) de un transformador o línea eléctrica en un sistema de potencia?",
        opciones: [
            "A) El cociente de dividir la impedancia real en ohms entre una impedancia base del sistema",
            "B) El porcentaje de pérdidas de energía por efecto Joule en el núcleo",
            "C) La relación entre la tensión nominal y la corriente de cortocircuito",
            "D) La capacidad térmica máxima expresada en megavoltiamperios"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sistema por unidad (pu) normaliza los valores eléctricos dividiendo la magnitud real entre una base elegida de la misma dimensión, simplificando el cálculo en redes complejas."
    },
    {
        id: 58,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué topología de convertidor estático se utiliza comúnmente en fuentes de alimentación ininterrumpible (UPS) de doble conversión en línea para transformar la corriente continua de las baterías en corriente alterna senoidal pura?",
        opciones: [
            "A) Un inversor controlado por modulación de ancho de pulso (PWM) con filtro pasa-bajas de salida",
            "B) Un rectificador controlado de silicio monofásico",
            "C) Un cicloconvertidor de frecuencia fija",
            "D) Un divisor de voltaje resistivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las UPS de doble conversión rectifican la CA de entrada a CD y luego usan un inversor PWM de alta calidad con filtro de salida para suministrar una onda senoidal pura y estable a la carga crítica."
    },
    {
        id: 59,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué dispositivo de protección mecánica detecta fallas internas en transformadores sumergidos en aceite que generan acumulación de gases o flujo violento de aceite hacia el tanque de expansión?",
        opciones: [
            "A) Relé Buchholz",
            "B) Relé de sobrecorriente instantáneo",
            "C) Apartarrayos de óxido metálico",
            "D) Fusible tipo expulsion"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relé Buchholz se instala en la tubería entre el tanque del transformador y el conservador; detecta acumulación lenta de gases por fallas incipientes o flujos bruscos de aceite por cortocircuitos internos graves."
    },
    {
        id: 60,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Qué objetivo persigue la instalación de blindajes metálicos o pantallas en los cables de media y alta tensión subterráneos?",
        opciones: [
            "A) Confinar el campo eléctrico dentro del cable, eliminar esfuerzos tangenciales en el aislamiento y proteger contra interferencias electromagnéticas",
            "B) Soportar el peso mecánico del cable al tenderse en postes",
            "C) Incrementar la capacidad de corriente de cortocircuito de la red",
            "D) Evitar la corrosión del conductor de cobre por humedad externa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los cables de media y alta tensión llevan pantallas metálicas para uniformizar el campo eléctrico radial en el aislamiento y confinar el campo magnético/eléctrico, previniendo descargas parciales."
    },
    {
        id: 61,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico de corriente alterna, ¿cómo se define la potencia reactiva ($Q$)?",
        opciones: [
            "A) Como la potencia asociada a los campos magnéticos y eléctricos almacenados en inductores y capacitores, medida en voltiamperios reactivos (VAR)",
            "B) Como la potencia real consumida por las resistencias para generar trabajo útil",
            "C) Como la suma aritmética de la tensión y la corriente",
            "D) Como la energía disipada en forma de calor por efecto Joule"
        ],
        respuestaCorrecta: 0,
        explicacion: "La potencia reactiva ($Q$) representa el intercambio energético oscilatorio entre la fuente y los elementos reactivos (inductores y capacitores) del circuito, sin realizar trabajo neto."
    },
    {
        id: 62,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué ocurre en un motor de inducción trifásico si una de las fases de alimentación se abre (operación en monofásico o 'single-phasing') mientras está operando bajo carga nominal?",
        opciones: [
            "A) La corriente en las fases restantes se eleva peligrosamente, provocando sobrecalentamiento severo y daño térmico en los devanados si las protecciones no actúan",
            "B) La velocidad se incrementa al doble de la nominal de manera instantánea",
            "C) El motor se detiene de forma suave sin alterar las corrientes",
            "D) La máquina comienza a operar como generador sincrónico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La pérdida de una fase en un motor trifásico obliga a las fases restantes a absorber toda la carga, elevando las corrientes de línea por encima del valor nominal y quemando el devanado si no hay relevador de protección contra falta de fase."
    },
    {
        id: 63,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué método analítico numérico se emplea comúnmente para resolver el conjunto de ecuaciones algebraicas no lineales de flujos de potencia en redes eléctricas extensas debido a su rapidez de convergencia por iteración?",
        opciones: [
            "A) Método de Newton-Raphson",
            "B) Método de Gauss-Seidel simplificado",
            "C) Ley de Ohm generalizada para redes en malla",
            "D) Transformada de Fourier discreta"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método de Newton-Raphson es el estándar industrial más utilizado en software de análisis de sistemas de potencia para resolver flujos de carga debido a sus excelentes propiedades de convergencia cuadrática."
    },
    {
        id: 64,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función realiza un ondulador o inversor resonante en aplicaciones de calentamiento por inducción industrial?",
        opciones: [
            "A) Generar corrientes alternas de alta frecuencia para inducir corrientes parásitas (Eddy currents) y pérdidas por histéresis en piezas metálicas a calentar",
            "B) Convertir corriente alterna en corriente continua para soldadura por arco",
            "C) Reducir la tensión de la red comercial a niveles seguros de 24V",
            "D) Filtrar los armónicos de baja frecuencia en redes de distribución"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los inversores resonantes alimentan bobinas de inducción a frecuencias elevadas (kHz o MHz), generando campos magnéticos variables intensos que calientan rápidamente piezas metálicas conductoras por inducción."
    },
    {
        id: 65,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de protección contra falla a tierra (Ground Fault Protection)?",
        opciones: [
            "A) Detectar corrientes residuales o de retorno por caminos no deseados hacia tierra (como a través de estructuras o personas), disparando la protección para evitar accidentes graves",
            "B) Medir el aislamiento de los transformadores en seco",
            "C) Desconectar la carga si el voltaje de línea supera el 110%",
            "D) Monitorear la temperatura ambiente en los tableros eléctricos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los relés de falla a tierra suman vectorialment las corrientes de fase (o usan un toroide de corriente); si hay un desbalance por fuga a tierra, la corriente residual activa el disparo."
    },
    {
        id: 66,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En el diseño de una red de tierras para una subestación eléctrica, ¿cuál es el objetivo principal de calcular la resistencia de puesta a tierra?",
        opciones: [
            "A) Mantener los gradientes de potencial en la superficie del terreno dentro de límites seguros (tensiones de toque y paso) y asegurar una baja impedancia para la operación de las protecciones",
            "B) Incrementar el factor de potencia del sistema de distribución",
            "C) Reducir el costo de la factura de energía eléctrica mensual",
            "D) Evitar la saturación magnética de los transformadores de corriente"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una red de tierra con baja resistencia garantiza que las corrientes de falla a tierra se drenen eficazmente sin generar tensiones de toque y paso peligrosas para el personal en la subestación."
    },
    {
        id: 67,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "¿Qué establece el Teorema de la Máxima Transferencia de Potencia para circuitos de corriente alterna con impedancias complejas?",
        opciones: [
            "A) Que la potencia activa máxima se transfiere desde una fuente con impedancia de Thevenin ($Z_{th} = R_{th} + jX_{th}$) hacia la carga cuando la impedancia de carga ($Z_L$) es el conjugado complejo de la impedancia de Thevenin ($Z_L = R_{th} - jX_{th}$)",
            "B) Que la resistencia de carga debe ser igual a cero",
            "C) Que la reactancia de la carga debe tener el mismo signo que la de la fuente",
            "D) Que la tensión en la carga debe duplicar la tensión de la fuente"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para máxima transferencia de potencia en CA, la impedancia de carga debe ser el conjugado complejo de la impedancia equivalente de la fuente, cancelando las reactancias netas."
    },
    {
        id: 68,
        area: "Máquinas Eléctricas",
        pregunta: "¿Cómo se clasifican los generadores de corriente continua según la forma en que se alimenta y conecta su devanado de campo (excitación)?",
        opciones: [
            "A) Generadores de excitación independiente, en derivación (Shunt), en serie y compuestos (Compound)",
            "B) Generadores monofásicos, bifásicos y trifásicos",
            "C) Generadores síncronos y asíncronos de rotor devanado",
            "D) Generadores estáticos y rotativos de alta frecuencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las máquinas DC se clasifican según la conexión de su circuito de campo respecto a la armadura en: excitación independiente, Shunt (en paralelo), Serie y Compound (combinación de ambas)."
    },
    {
        id: 69,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué impacto técnico negativo generan los armónicos de corriente (como el 3°, 5° y 7°) inyectados por cargas no lineales en un sistema eléctrico industrial?",
        opciones: [
            "A) Sobrecalentamiento severo en los transformadores por pérdidas adicionales en el núcleo y devanados, sobrecarga en el conductor neutro por corrientes homopolares, y resonancias paralelas",
            "B) Incremento de la velocidad síncrona en los motores de inducción",
            "C) Reducción instantánea de la corriente de cortocircuito en la acometida",
            "D) Mejora automática del factor de potencia global de la planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los armónicos causan distorsión de la onda de voltaje, sobrecalentamiento en transformadores debido a corrientes parásitas y pérdidas por histéresis, y sobrecargas en el neutro por suma de armónicos triples."
    },
    {
        id: 70,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función cumple un convertidor CA-CA del tipo controlador de voltaje de CA (AC Voltage Controller)?",
        opciones: [
            "A) Variar el valor eficaz del voltaje de corriente alterna aplicado a una carga (como en control de iluminación o calefactores) a partir de una fuente de CA de amplitud fija",
            "B) Rectificar la señal alterna en corriente continua pura",
            "C) Invertir la frecuencia de la red a cero hertz",
            "D) Elevar el voltaje mediante un transformador elevador estático"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los controladores de voltaje de CA regulan la potencia efectiva entregada a la carga recortando la onda sinusoidal mediante tiristores (SCRs o Triacs) con control de ángulo de fase."
    },
    {
        id: 71,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué mide un relé direccional de potencia activa (Código ANSI 32) en la interconexión de cogeneradores o plantas industriales con la red pública?",
        opciones: [
            "A) El sentido del flujo de potencia activa; si la planta industrial intenta inyectar potencia hacia la red pública sin permiso o contrato de porte, el relé actúa disparando el interruptor",
            "B) La resistencia de aislamiento de los transformadores principales",
            "C) La temperatura del aceite refrigerante",
            "D) La magnitud de la corriente de cortocircuito trifásica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relé ANSI 32 detecta la dirección del flujo de potencia activa; se usa para evitar que una planta privada inyecte energía a la red de CFE cuando no está permitido contractualmente."
    },
    {
        id: 72,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En el diseño de canalizaciones eléctricas, ¿qué regla establece la norma (NOM-001-SEDE / NEC) respecto al porcentaje máximo de ocupación de una tubería conduit cuando contiene tres o más conductores?",
        opciones: [
            "A) El área total ocupada por los conductores no debe superar el 40% del área transversal interna del tubo conduit",
            "B) La tubería debe llenarse al 100% para evitar vibraciones mecánicas",
            "C) El porcentaje máximo permitido es del 20% exclusivamente",
            "D) No existe límite normativo de ocupación si los cables son de cobre"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para facilitar el alambrado y evitar daños por fricción y sobrecalentamiento debido al empaquetamiento, la normatividad limita el llenado de tuberías con 3 o más conductores al 40% de su sección transversal."
    },
    {
        id: 73,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "¿Qué expresa el Teorema de Millman en el análisis de circuitos eléctricos de corriente alterna o continua?",
        opciones: [
            "A) Permite reducir cualquier número de fuentes de tensión en paralelo (cada una con su impedancia serie) a una sola fuente de tensión equivalente en paralelo con una impedancia equivalente",
            "B) Calcula directamente la potencia reactiva trifásica desequilibrada",
            "C) Define la impedancia mutua entre dos transformadores acoplados",
            "D) Establece la relación entre corriente y voltaje en elementos no lineales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Millman es una simplificación basada en nodos que permite calcular el voltaje común en un conjunto de fuentes de tensión conectadas en paralelo mediante ramas con impedancia."
    },
    {
        id: 74,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué componente fundamental distingue constructivamente a un motor síncrono frente a un motor de inducción?",
        opciones: [
            "A) El rotor del motor síncrono se alimenta con corriente continua externa (o imanes permanentes) para crear un campo magnético fijo, mientras que el rotor del motor de inducción opera por corrientes inducidas",
            "B) El motor síncrono no requiere estator",
            "C) El motor de inducción opera exclusivamente con corriente continua en el estator",
            "D) El motor síncrono carece de entrehierro magnético"
        ],
        respuestaCorrecta: 0,
        explicacion: "La diferencia clave es el rotor: el sincrónico requiere excitación de CD en el rotor para enclavarse magnéticamente a la velocidad del campo del estator, girando exactamente a velocidad síncrona."
    },
    {
        id: 75,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué función cumple un compensador estático de VARs (SVC - Static Var Compensator) en una línea de transmisión de alta tensión?",
        opciones: [
            "A) Inyectar o absorber potencia reactiva de forma rápida y controlada mediante tiristores conectados a reactores y capacitores, estabilizando el perfil de tensión en la red",
            "B) Aumentar la frecuencia del sistema de transmisión en 5 Hz",
            "C) Convertir corriente alterna en corriente directa de alta tensión (HVDC)",
            "D) Reducir las pérdidas mecánicas en los generadores térmicos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El SVC ajusta rápidamente la potencia reactiva en nodos críticos de la red de transmisión mediante control electrónico, mejorando la estabilidad de voltaje y la capacidad de transferencia."
    },
    {
        id: 76,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué es la Modulación de Ancho de Pulso (PWM - Pulse Width Modulation) en los convertidores electrónicos de potencia?",
        opciones: [
            "A) Una técnica de conmutación donde se varía el ciclo de trabajo (ancho del pulso) de una señal de alta frecuencia para controlar el valor medio de la tensión o corriente aplicada a la carga",
            "B) Un método para incrementar la resistencia óhmica de los transistores",
            "C) Un sistema mecánico para regular la velocidad de motores de corriente continua",
            "D) Una técnica para eliminar los armónicos de la red pública"
        ],
        respuestaCorrecta: 0,
        explicacion: "El PWM modula el ancho de los pulsos de voltaje a frecuencia constante pero ciclo de trabajo variable, permitiendo sintetizar ondas de salida senoidales o regular voltajes de manera muy eficiente."
    },
    {
        id: 77,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué mide un relé de protección contra sobrecarga térmica (Código ANSI 49) en motores eléctricos industriales?",
        opciones: [
            "A) La acumulación de calor en los devanados del motor mediante modelos térmicos basados en la corriente circulante, previniendo la degradación del aislamiento",
            "B) El voltaje de línea en el tablero principal",
            "C) La resistencia de aislamiento del cable de alimentación",
            "D) La velocidad mecánica del eje del rotor"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relé térmico ANSI 49 monitorea la corriente del motor y simula su calentamiento interno para proteger el aislamiento ante sobrecargas sostenidas."
    },
    {
        id: 78,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el propósito de realizar pruebas de resistencia de aislamiento (Megger) en los devanados de motores y transformadores antes de su puesta en servicio?",
        opciones: [
            "A) Verificar el estado de degradación, humedad o contaminación del material aislante aplicando una tensión directa elevada, previniendo fallas dieléctricas prematuras",
            "B) Medir la potencia reactiva consumida en vacío",
            "C) Calcular la corriente de cortocircuito trifásica en la acometida",
            "D) Ajustar el factor de potencia con bancos de capacitores"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de resistencia de aislamiento (Megger) inyecta alto voltaje de CD para medir la resistencia óhmica del aislamiento a tierra, detectando humedad, suciedad o deterioro físico."
    },
    {
        id: 79,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico de corriente alterna, ¿cómo se define la Potencia Aparente ($S$)?",
        opciones: [
            "A) Como el producto aritmético de los valores eficaces de tensión y corriente ($S = V_{rms} \cdot I_{rms}$), medida en voltiamperios (VA)",
            "B) Como la diferencia entre la potencia activa y la potencia reactiva",
            "C) Como la energía disipada en forma de trabajo mecánico útil",
            "D) Como el cociente de la impedancia entre la resistencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La potencia aparente es la magnitud del vector de potencia compleja, calculada como el producto directo de voltaje RMS por corriente RMS, representando la capacidad total que debe soportar el sistema."
    },
    {
        id: 80,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué función cumple el devanado amortiguador (jaula de amortiguamiento o barras de Amdahl) insertado en el rotor de un motor síncrono?",
        opciones: [
            "A) Proveer el par de arranque necesario para acelerar la máquina como motor de inducción hasta las cercanías de la velocidad síncrona, y amortiguar las oscilaciones pendulares del rotor",
            "B) Generar la corriente continua de excitación principal del campo magnético",
            "C) Incrementar las pérdidas en el cobre para frenar el motor rápidamente",
            "D) Eliminar los armónicos de alta frecuencia en el estator"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los motores síncronos no arrancan por sí solos; el devanado amortiguador en el rotor actúa como jaula de inducción para el arranque y estabiliza el rotor ante oscilaciones transitorias (caza)."
    },
    {
        id: 81,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué caracteriza a un sistema de transmisión en Corriente Directa de Alta Tensión (HVDC) frente a los sistemas tradicionales de Corriente Alterna (HVAC) en líneas submarinas o de larguísima distancia?",
        opciones: [
            "A) Ausencia de corrientes de carga capacitiva por efecto de la longitud, menores pérdidas en conductores y capacidad de interconectar sistemas asíncronos de diferente frecuencia",
            "B) Facilidad absoluta para transformar los niveles de voltaje mediante transformadores estáticos sencillos",
            "C) Costos de inversión inicial en estaciones conversoras notablemente más bajos que en HVAC",
            "D) Imposibilidad total de transmitir potencia activa en grandes bloques"
        ],
        respuestaCorrecta: 0,
        explicacion: "HVDC elimina las limitaciones de la reactancia capacitiva e inductiva en líneas muy largas o submarinas, reduce pérdidas y permite conectar redes de diferentes frecuencias (ej. 50Hz y 60Hz)."
    },
    {
        id: 82,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué aplicación industrial principal tienen los convertidores matriciales (Matrix Converters) en la conversión de energía?",
        opciones: [
            "A) Convertir energía trifásica de CA en otra trifásica de CA con amplitud y frecuencia totalmente variables mediante una matriz de interruptores bidireccionales, sin elementos intermedios de almacenamiento de energía (sin bus de CD)",
            "B) Rectificar corriente alterna en corriente continua para celdas electrolíticas",
            "C) Elevar el voltaje continuo de baterías solares",
            "D) Controlar iluminación incandescente monofásica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El convertidor matricial es un convertidor directo CA-CA que utiliza una matriz de interruptores semiconductores bidireccionales sin condensadores de almacenamiento intermedios, logrando diseños más compactos."
    },
    {
        id: 83,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de sobretensión y subtensión (Código ANSI 27/59) en la protección de equipos industriales sensibles?",
        opciones: [
            "A) Monitorear los límites operativos del voltaje de suministro; si la tensión sale del rango seguro preestablecido, emite una alarma o dispara la carga para evitar daños en motores y controles electrónicos",
            "B) Medir la resistencia ohmica de la puesta a tierra",
            "C) Desconectar la alimentación si la frecuencia excede 60 Hz",
            "D) Calcular el factor de potencia mensual"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los relés ANSI 27 (subtensión) y ANSI 59 (sobretensión) protegen las instalaciones industriales contra fluctuaciones severas de voltaje que dañan aislamientos o provocan sobrecalentamiento en motores."
    },
    {
        id: 84,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el propósito normativo de instalar interruptores termomagnéticos y fusibles en un sistema eléctrico industrial?",
        opciones: [
            "A) Proteger a los conductores y equipos contra sobrecorrientes debidas tanto a sobrecargas prolongadas como a cortocircuitos francos",
            "B) Reducir el factor de potencia inductivo",
            "C) Transformar corriente alterna en corriente continua",
            "D) Suministrar energía eléctrica de respaldo ante apagones"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los elementos de protección contra sobrecorriente (termomagnéticos y fusibles) tienen la doble misión de interrumpir el circuito ante sobrecargas térmicas y ante corrientes elevadas de cortocircuito."
    },
    {
        id: 85,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En el análisis de redes eléctricas de corriente alterna, ¿cómo se define la admitancia compleja ($Y$)?",
        opciones: [
            "A) Como el inverso matemático de la impedancia compleja ($Y = 1/Z$), expresada en siemens (S) como la suma de conductancia ($G$) y suceptancia ($B$): $Y = G + jB$",
            "B) Como el producto de la tensión por la corriente",
            "C) Como la relación entre la potencia reactiva y la activa",
            "D) Como la inductancia total dividida entre la capacitancia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La admitancia es la inversa de la impedancia ($Y = 1/Z$). Su parte real es la conductancia ($G$) y su parte imaginaria es la suceptancia ($B$), útil en análisis nodales de sistemas eléctricos."
    },
    {
        id: 86,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué efecto produce la saturación magnética en el núcleo de un transformador operando por encima de su tensión nominal?",
        opciones: [
            "A) Se requiere una corriente de excitación desproporcionadamente alta para inducir un incremento pequeño de flujo, deformando la onda de corriente de vacío y generando armónicos elevados",
            "B) La velocidad del transformador se incrementa notablemente",
            "C) Las pérdidas en el cobre se reducen a cero absoluto",
            "D) El voltaje en el secundario se vuelve estrictamente cero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando el núcleo se satura, la relación lineal entre corriente de excitación y flujo magnético se rompe; se necesitan corrientes de excitación muy altas que generan distorsión armónica y sobrecalentamiento."
    },
    {
        id: 87,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué describe la matriz de admitancia nodal ($Y_{bus}$) en el análisis matemático de redes eléctricas de potencia?",
        opciones: [
            "A) Una matriz cuadrada que relaciona las corrientes inyectadas en los nodos con las tensiones nodales, donde los elementos diagonales representan la suma de admitancias conectadas al nodo y los fuera de diagonal la negativa de la admitancia mutua",
            "B) La matriz de costos de generación de energía térmica",
            "C) Las caídas de tensión por efecto Joule en los conductores de transmisión",
            "D) La distribución de flujos de carga en corriente continua exclusivamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La matriz $Y_{bus}$ es fundamental en flujos de carga; modela topológicamente la red eléctrica interconectando nodos y ramas mediante admitancias complejas."
    },
    {
        id: 88,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué topología de convertidor CD-CD se utiliza cuando se requiere obtener un voltaje de salida de corriente continua de polaridad inversa y magnitud mayor o menor que el voltaje de entrada?",
        opciones: [
            "A) Convertidor Buck-Boost (Reductor-Elevador)",
            "B) Convertidor Buck puro",
            "C) Convertidor Boost puro",
            "D) Rectificador controlado trifásico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El convertidor Buck-Boost puede elevar o reducir el nivel de voltaje continuo de entrada y entrega una tensión de salida con inversión de polaridad respecto a la referencia."
    },
    {
        id: 89,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de protección por pérdida de sincronismo (Fuera de Paso - Out-of-Step)?",
        opciones: [
            "A) Detectar cuando una máquina síncrona o un área del sistema eléctrico pierde el sincronismo de ángulo respecto al resto de la red, ordenando la separación controlada de la red para evitar daños mayores",
            "B) Medir el factor de potencia mensual",
            "C) Desconectar los capacitores en horario nocturno",
            "D) Regular la velocidad de la turbina hidráulica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando ocurren perturbaciones severas, partes de la red pueden perder sincronismo (desfasarse más de 180 grados); el relé fuera de paso detecta esto y aísla las zonas para evitar colapsos generalizados."
    },
    {
        id: 90,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el propósito principal de instalar un sistema de pararrayos (mástiles, puntas Franklin o cables de guarda) en una planta industrial o subestación?",
        opciones: [
            "A) Capturar las descargas atmosféricas directas y conducirlas de manera segura a través de una red de bajantes hacia un sistema de puesta a tierra de baja resistencia, protegiendo las estructuras",
            "B) Elevar la tensión trifásica de alimentación",
            "C) Filtrar los armónicos de corriente generados por variadores de velocidad",
            "D) Mejorar el factor de potencia inductivo de la planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sistema de protección contra rayos intercepta la descarga atmosférica antes de que impacte directamente los equipos o estructuras, canalizando la corriente al sistema de tierras de forma inocua."
    },
    {
        id: 91,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un sistema trifásico equilibrado, ¿qué mide un vatímetro conectado mediante el método de los dos vatímetros para determinar la potencia activa total?",
        opciones: [
            "A) La suma algebraica de las lecturas de los dos vatímetros individuales conectados en dos de las líneas respecto a la tercera línea como referencia",
            "B) La potencia reactiva directa multiplicada por $\\sqrt{3}$",
            "C) La potencia aparente total del sistema",
            "D) La impedancia equivalente de carga"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método de los dos vatímetros permite medir la potencia activa total de cualquier sistema trifásico de 3 hilos (equilibrado o desequilibrado) sumando algebraicamente las dos lecturas."
    },
    {
        id: 92,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué representa el ensayo de rotor bloqueado en un motor de inducción trifásico?",
        opciones: [
            "A) Una prueba equivalente al ensayo de cortocircuito en transformadores, que permite determinar la impedancia de dispersión, el par de arranque y las pérdidas en el cobre del motor",
            "B) Una prueba de velocidad máxima en vacío",
            "C) Un análisis de aislamiento con corriente continua",
            "D) La medición del rendimiento térmico a plena carga"
        ],
        respuestaCorrecta: 0,
        explicacion: "Al bloquear mecánicamente el rotor para que no gire y alimentar el estator a tensión reducida, se simula una condición de cortocircuito que permite calcular los parámetros del circuito equivalente del motor."
    },
    {
        id: 93,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué es el margen de reserva rodante (Spinning Reserve) en la operación y planeación de la generación en un sistema eléctrico de potencia?",
        opciones: [
            "A) La capacidad de generación activa adicional que está sincronizada a la red y lista para entrar en servicio de manera inmediata ante la pérdida súbita de una unidad generadora o un incremento imprevisto de carga",
            "B) El petróleo almacenado en tanques para las plantas termoeléctricas",
            "C) La cantidad de transformadores de repuesto en el almacén central",
            "D) La potencia reactiva suministrada por los bancos de capacitores"
        ],
        respuestaCorrecta: 0,
        explicacion: "La reserva rodante corresponde a generadores ya sincronizados que operan por debajo de su máxima capacidad, listos para incrementar su potencia en segundos o minutos ante contingencias en la red."
    },
    {
        id: 94,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función cumple un variador de frecuencia (VFD - Variable Frequency Drive) en el control industrial de motores de inducción trifásicos?",
        opciones: [
            "A) Variar simultáneamente la frecuencia y la tensión de alimentación del motor (manteniendo una relación V/f constante) para controlar su velocidad de giro de manera suave y eficiente",
            "B) Convertir corriente alterna en corriente continua para soldadura",
            "C) Elevar el voltaje de la red en un 200%",
            "D) Desconectar el motor ante cualquier sobrecorriente transitoria"
        ],
        respuestaCorrecta: 0,
        explicacion: "El VFD rectifica la CA de entrada a CD y luego la invierte mediante PWM a frecuencia y voltaje ajustables, logrando control preciso de velocidad en motores de inducción manteniendo el flujo magnético constante."
    },
    {
        id: 95,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué protege un relé de sobrecorriente residual o de secuencia cero (ANSI 50N/51N) en circuitos trifásicos?",
        opciones: [
            "A) Fallas a tierra francas o de alta impedancia, midiendo la suma fasorial de las corrientes de las tres fases (que idealmente es cero en condiciones normales)",
            "B) Las sobretensiones transitorias atmosféricas",
            "C) El desbalance de voltaje entre fases por cargas monofásicas",
            "D) La pérdida de sincronismo en generadores"
        ],
        respuestaCorrecta: 0,
        explicacion: "El relé 50N/51N mide la corriente que retorna por el neutro o la suma vectorial de las tres fases; ante una corriente de falla a tierra, dicha suma deja de ser cero y la protección opera."
    },
    {
        id: 96,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el propósito principal de instalar un transformador tipo seco o en aceite con aislamiento galvanicamente separado (transformador de aislamiento) para alimentar cargas electrónicas sensibles o equipos médicos?",
        opciones: [
            "A) Bloquear el paso de ruido eléctrico de modo común, transitorios de alta frecuencia y armónicos provenientes de la red de distribución general, protegiendo los equipos sensibles",
            "B) Elevar la tensión trifásica al doble de su valor nominal",
            "C) Reducir el factor de potencia a cero",
            "D) Suministrar energía de respaldo durante un apagón prolongado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El transformador de aislamiento separa físicamente el circuito de carga de la fuente mediante inducción magnética, impidiendo que transitorios de modo común y ruidos de alta frecuencia lleguen al equipo sensible."
    },
    {
        id: 97,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico lineal con excitación sinusoidal, ¿qué representa el factor de potencia en retraso (lagging power factor)?",
        opciones: [
            "A) Que la corriente está retrasada respecto a la tensión, lo que indica que la carga tiene predominio inductivo (consume potencia reactiva)",
            "B) Que la carga es puramente resistiva",
            "C) Que la corriente adelanta a la tensión por predominio capacitivo",
            "D) Que la frecuencia de la red ha disminuido por debajo de 50 Hz"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un factor de potencia en retraso significa que la onda de corriente va detrás de la onda de voltaje en el dominio del tiempo, característica típica de cargas inductivas como motores y transformadores."
    },
    {
        id: 98,
        area: "Máquinas Eléctricas",
        pregunta: "¿Cómo se define la eficiencia de una máquina eléctrica rotativa (motor o generador)?",
        opciones: [
            "A) Como el cociente entre la potencia útil de salida y la potencia total de entrada, expresada en porcentaje",
            "B) Como la relación entre las pérdidas en el cobre y las pérdidas en el hierro",
            "C) Como la velocidad de giro real dividida entre la velocidad síncrona",
            "D) Como el producto de la tensión por la corriente de armadura"
        ],
        respuestaCorrecta: 0,
        explicacion: "La eficiencia electromecánica es la razón porcentual entre la potencia de salida aprovechable y la potencia de entrada absorbida, descontando todas las pérdidas (cobre, hierro, mecánicas y suplementarias)."
    },
    {
        id: 99,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué fenómeno transitorio severo ocurre cuando se produce una desconexión súbita de una gran carga o bloque de generación en un sistema eléctrico interconectado?",
        opciones: [
            "A) Una fluctuación transitoria de frecuencia y tensión en la red; un exceso de generación provoca aumento temporal de frecuencia, mientras que un déficit provoca caída de frecuencia",
            "B) Un cortocircuito trifásico permanente en barras",
            "C) La inversión instantánea de la polaridad de corriente continua",
            "D) La saturación térmica instantánea de todos los cables subterráneos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El balance entre generación y carga gobierna la frecuencia del sistema. Un rechazo de carga desequilibra el sistema generando un exceso temporal de potencia que acelera las turbinas, elevando la frecuencia."
    },
    {
        id: 100,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué función cumple un convertidor elevador de corriente continua (Boost Converter)?",
        opciones: [
            "A) Incrementar un nivel de voltaje continuo de entrada a un valor de salida continuo mayor, mediante la conmutación controlada de un interruptor semiconductor y almacenamiento inductivo",
            "B) Reducir la tensión continua a la mitad",
            "C) Invertir la corriente continua a corriente alterna trifásica",
            "D) Rectificar señales de alta frecuencia en la red"
        ],
        respuestaCorrecta: 0,
        explicacion: "El convertidor Boost (elevador) almacena energía en un inductor cuando el interruptor cierra y la libera junto con la fuente cuando abre, logrando un voltaje de salida mayor al de entrada."
    },
    {
        id: 101,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué protege un relé de distancia con característica en forma de impedancia mho o cuadrilateral en líneas de alta tensión?",
        opciones: [
            "A) Zonas de protección escalonada (Zona 1 instantánea, Zona 2 con temporización, Zona 3 de respaldo) frente a fallas por cortocircuito a lo largo de la línea",
            "B) Las sobrecargas térmicas lentas en motores de baja potencia",
            "C) El desbalance de corriente en circuitos monofásicos de alumbrado",
            "D) La pérdida de aislamiento en transformadores secos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los relés de distancia operan en zonas escalonadas; la Zona 1 cubre instantáneamente gran parte de la línea sin demora, mientras las Zonas 2 y 3 actúan como respaldo temporizado ante fallas más lejanas."
    },
    {
        id: 102,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Por qué es obligatorio calcular y verificar la corriente de cortocircuito máxima y mínima en los extremos de los circuitos derivados de una instalación industrial?",
        opciones: [
            "A) Para asegurar que la corriente mínima de falla a tierra en el punto más alejado sea suficiente para operar los dispositivos de protección termomagnética o diferencial en el tiempo requerido",
            "B) Para calcular la factura mensual de energía ante CFE",
            "C) Para determinar el color de identificación de la tubería conduit",
            "D) Para fijar la tarifa salarial de los técnicos electricistas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Verificar la corriente mínima de cortocircuito al final del circuito garantiza que ante una falla lejana, la impedancia del cable no reduzca la corriente a un nivel tan bajo que impida o demore el disparo de la protección."
    },
    {
        id: 103,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico de corriente alterna, ¿cómo se relacionan la potencia activa ($P$), la potencia reactiva ($Q$) y la potencia aparente ($S$) mediante el triángulo de potencias?",
        opciones: [
            "A) Mediante el teorema de Pitágoras: $S^2 = P^2 + Q^2$, donde $P$ es el cateto adyacente, $Q$ el cateto opuesto y $S$ la hipotenusa",
            "B) Mediante suma aritmética directa: $S = P + Q$",
            "C) Mediante el cociente: $S = P / Q$",
            "D) Mediante la diferencia: $S = P - Q$"
        ],
        respuestaCorrecta: 0,
        explicacion: "El triángulo de potencias en CA relaciona ortogonalmente la potencia activa ($P$), la reactiva ($Q$) y la aparente ($S$) formando un triángulo rectángulo donde $S = \\sqrt{P^2 + Q^2}$."
    },
    {
        id: 104,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué representa el deslizamiento ($s$) en un motor de inducción trifásico?",
        opciones: [
            "A) La diferencia relativa entre la velocidad síncrona del campo magnético del estator ($n_s$) y la velocidad mecánica real del rotor ($n$), expresada como fracción o porcentaje: $s = (n_s - n) / n_s$",
            "B) La velocidad de giro de las flechas mecánicas en revoluciones por minuto",
            "C) El cociente de dividir la corriente de arranque entre la corriente nominal",
            "D) La resistencia eléctrica óhmica del devanado rotórico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El deslizamiento mide el retraso porcentual de la velocidad del rotor respecto al campo magnético giratorio del estator, siendo fundamental para calcular frecuencias inducidas y par motor."
    },
    {
        id: 105,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué objetivo persigue la transposición de los conductores en las líneas de transmisión trifásicas de alta tensión de gran longitud?",
        opciones: [
            "A) Equilibrar las inductancias y capacitancias mutuas entre las fases a lo largo de todo el trayecto, evitando desequilibrios de tensión y corrientes circundantes indeseadas",
            "B) Reducir la resistencia mecánica de las torres ante vientos fuertes",
            "C) Aumentar el efecto corona para disipar energía estática",
            "D) Permitir el uso de conductores de menor calibre sin importar la corriente"
        ],
        respuestaCorrecta: 0,
        explicacion: "Como las tres fases ocupan posiciones espaciales distintas en la torre, sus inductancias y capacitancias propias y mutuas difieren; la transposición cicla periódicamente las posiciones para equilibrar la red."
    },
    {
        id: 106,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué componente semiconductor de potencia se obtiene al integrar un transistor MOSFET de control en la entrada de compuerta con un transistor BJT de potencia en la salida, combinando alta velocidad de conmutación y alta capacidad de manejo de corriente y voltaje?",
        opciones: [
            "A) Transistor Bipolar de Compuerta Aislando (IGBT - Insulated Gate Bipolar Transistor)",
            "B) Rectificador Controlado de Silicio (SCR)",
            "C) Diodo Schottky de recuperación rápida",
            "D) Triac bidireccional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El IGBT combina las ventajas del MOSFET (control por tensión en compuerta de alta impedancia y facilidad de manejo) con las del BJT (baja caída de tensión en conducción en alta potencia), siendo el estándar en inversores modernos."
    },
    {
        id: 107,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué función cumple un relé de supervisión de voltaje de baterías de subestación (Código ANSI 80)?",
        opciones: [
            "A) Monitorear continuamente el nivel de tensión del banco de baterías de corriente directa que alimenta los circuitos de disparo y control de los interruptores, alertando ante fallas o baja carga",
            "B) Medir el consumo de energía activa en las oficinas administrativas",
            "C) Desconectar la alimentación de corriente alterna ante un cortocircuito",
            "D) Regular la temperatura ambiental en la sala de control"
        ],
        respuestaCorrecta: 0,
        explicacion: "El banco de baterías DC de la subestación es vital porque energiza las bobinas de disparo de los interruptores; el relé ANSI 80 supervisa su integridad para garantizar que siempre haya energía de control disponible."
    },
    {
        id: 108,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Qué define el factor de potencia de carga instalada en un estudio de calidad de la energía eléctrica industrial?",
        opciones: [
            "A) La relación entre la energía activa (kWh) y la energía aparente total (kVAh) consumida durante un periodo de facturación determinado",
            "B) La cantidad de armónicos de corriente inyectados por los variadores",
            "C) La caída de voltaje porcentual en los alimentadores principales",
            "D) La resistencia de aislamiento de los transformadores en seco"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la práctica de facturación eléctrica (como CFE), el factor de potencia se evalúa integrando la relación entre los kWh (activos) y los kVAh (aparentes) consumidos en el periodo de medición."
    },
    {
        id: 109,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En un circuito eléctrico lineal de corriente alterna, ¿qué establece el Teorema de Reciprocidad de Lorentz-Rayleigh?",
        opciones: [
            "A) Que si una fuente de tensión ideal ubicada en la rama A produce una corriente en la rama B, la misma fuente ubicada en la rama B producirá exactamente la misma corriente en la rama A",
            "B) Que la impedancia total de un circuito pasivo es igual a su admitancia conjugada",
            "C) Que la potencia activa total es independiente del desfasaje de las fuentes",
            "D) Que la suma de corrientes en un nodo es cero"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de reciprocidad establece que en redes lineales pasivas, la posición de una fuente de voltaje y la respuesta de corriente en otra rama se pueden intercambiar sin alterar el valor de dicha corriente."
    },
    {
        id: 110,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué función cumple el conmutador de delgas y las escobillas de carbón en una máquina de corriente continua de tipo clásico?",
        opciones: [
            "A) Actuar como un rectificador mecánico que convierte la corriente alterna generada internamente en los devanados del rotor en corriente continua unidireccional en las terminales externas (o viceversa en motores)",
            "B) Incrementar la velocidad mecánica de rotación mediante fricción",
            "C) Suministrar corriente trifásica de alta frecuencia al estator",
            "D) Reducir las pérdidas magnéticas en el núcleo de hierro"
        ],
        respuestaCorrecta: 0,
        explicacion: "El conmutador mecánico (delgas y escobillas) invierte las conexiones de las bobinas del rotor en el momento exacto para asegurar que la corriente externa en el circuito de armadura mantenga siempre una sola dirección."
    },
    {
        id: 111,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué representa el índice de severidad de falla o la energía pasante ($I^2t$) al coordinar fusibles y dispositivos de protección contra cortocircuito?",
        opciones: [
            "A) La cantidad de energía térmica integral que el dispositivo de protección deja pasar hacia aguas abajo antes de extinguir totalmente la corriente de falla",
            "B) El voltaje máximo de aislamiento soportado por los cables",
            "C) La potencia reactiva capacitiva generada por las líneas de transmisión",
            "D) La corriente nominal permanente del transformador principal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El parámetro $I^2t$ (integral de Joule) mide la energía térmica que el fusible o interruptor deja pasar durante el tiempo de despeje de la falla; debe ser menor al umbral de daño térmico de los cables o equipos protegidos."
    },
    {
        id: 112,
        area: "Electrónica de Potencia",
        pregunta: "¿Qué ventaja principal ofrece la utilización de semiconductores de banda prohibida ancha (Wide Bandgap Semiconductors), como el Carburo de Silicio (SiC) y el Nitruro de Galio (GaN), frente al silicio tradicional en convertidores de potencia?",
        opciones: [
            "A) Operar a frecuencias de conmutación mucho más elevadas, soportar temperaturas de juntura superiores, reducir drásticamente las pérdidas por conmutación y permitir diseños de filtros y transformadores mucho más compactos y ligeros",
            "B) Requerir voltajes de alimentación de corriente continua negativos",
            "C) Operar exclusivamente a frecuencias menores de 50 Hz",
            "D) Eliminar por completo la necesidad de sistemas de enfriamiento por aire"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los materiales de banda ancha como SiC y GaN revolucionaron la electrónica de potencia al permitir densidades de potencia masivas, frecuencias ultra-altas y menor disipación térmica comparados con el silicio."
    },
    {
        id: 113,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué evalúa un relé de protección contra sobrecarga térmica de transformadores basado en fibra óptica o sensores directos de temperatura en los devanados?",
        opciones: [
            "A) La temperatura directa en el punto más caliente (Hot Spot) del devanado, optimizando la capacidad de carga temporal del transformador sin violar los límites de vida útil del aislamiento",
            "B) La corriente de cortocircuito trifásica en la acometida",
            "C) La rigidez dieléctrica del aceite aislante del tanque",
            "D) La tensión de alimentación en el lado de alta tensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los sensores de fibra óptica miden directamente la temperatura en el punto caliente (Hot Spot) del devanado del transformador, permitiendo un monitoreo térmico real y preciso superior a los modelos térmicos indirectos."
    },
    {
        id: 114,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "¿Cuál es el propósito fundamental de realizar un estudio de arco eléctrico (Arc Flash Study) y etiquetado de equipos en instalaciones industriales según normativas como NFPA 70E e IEEE 1584?",
        opciones: [
            "A) Calcular la energía incidente de un posible arco eléctrico en cal/cm² para determinar la categoría de protección del Equipo de Protección Personal (EPP) y establecer las fronteras de aproximación segura para los trabajadores",
            "B) Calcular el consumo mensual de energía activa en kilovatios-hora",
            "C) Reducir las pérdidas de energía por efecto Joule en los conductores principales",
            "D) Seleccionar el calibre adecuado de los cables de alumbrado interior"
        ],
        respuestaCorrecta: 0,
        explicacion: "El estudio de arco eléctrico cuantifica el riesgo térmico ante una falla por arco, estableciendo las etiquetas de advertencia con la energía incidente y el EPP obligatorio que debe portar el personal electricista."
    },
    {
        id: 115,
        area: "Análisis de Circuitos Eléctricos",
        pregunta: "En una red eléctrica lineal de corriente alterna en régimen permanente, ¿qué establece el Teorema de Tellegen sobre la potencia compleja?",
        opciones: [
            "A) Que la suma algebraica de las potencias complejas entregadas por todas las fuentes independientes de un circuito es exactamente igual a la suma de las potencias complejas absorbidas por todos los elementos pasivos, independientemente de su linealidad",
            "B) Que la corriente total en un circuito es siempre inversamente proporcional a la frecuencia",
            "C) Que la impedancia equivalente es igual a la admitancia conjugada",
            "D) Que la potencia reactiva total es cero en cualquier circuito"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Tellegen se basa únicamente en las leyes de Kirchhoff (conservación de la carga y la energía); establece que la suma de potencias instantáneas o complejos en cualquier red es cero, sirviendo para verificar balances energéticos."
    },
    {
        id: 116,
        area: "Máquinas Eléctricas",
        pregunta: "¿Qué ocurre con el par electromecánico desarrollado por un motor de inducción cuando la velocidad del rotor supera la velocidad síncrona ($n > n_s$, es decir, deslizamiento negativo)?",
        opciones: [
            "A) El motor pasa a operar en el modo de frenado regenerativo o como generador asíncrono, devolviendo potencia mecánica convertida en eléctrica hacia la red de alimentación",
            "B) El motor se frena instantáneamente por fricción mecánica en el estator",
            "C) La corriente del estator se reduce a cero absoluto",
            "D) La máquina sufre un cortocircuito mecánico en el eje"
        ],
        respuestaCorrecta: 0,
        explicacion: "Si el rotor es arrastrado mecánicamente por encima de la velocidad síncrona (deslizamiento negativo), el par se invierte y la máquina actúa como generador asíncrono, inyectando energía activa a la red."
    },
    {
        id: 117,
        area: "Sistemas de Potencia",
        pregunta: "¿Qué función cumple un sistema de control automático de generación (AGC - Automatic Generation Control) en la operación centralizada de un sistema eléctrico interconectado?",
        opciones: [
            "A) Ajustar automáticamente y en tiempo real la potencia de salida de las unidades generadoras asignadas para mantener la frecuencia del sistema en su valor nominal (ej. 60 Hz) y regular los flujos de intercambio de potencia entre áreas de control",
            "B) Calcular la depreciación fiscal de las plantas hidroeléctricas",
            "C) Medir la resistencia ohmica de las tierras de la subestación",
            "D) Controlar el encendido de la iluminación pública nocturna"
        ],
        respuestaCorrecta: 0,
        explicacion: "El AGC es el sistema de control centralizado que ajusta las consignas de los generadores automáticamente para equilibrar la carga y la generación, manteniendo la frecuencia y los intercambios intercongelados programados."
    },
    {
        id: 118,
        area: "Electrónica de Potencia",
        pregunta: "¿Cuál es la función principal de un filtro armónico activo (APF - Active Power Filter) conectado en paralelo en una red de distribución industrial con cargas no lineales?",
        opciones: [
            "A) Inyectar corrientes armónicas en contrafase (con un desfasaje de 180 grados) para cancelar dinámicamente los armónicos generados por las cargas no lineales, logrando una corriente de red sustancialmente sinusoidal",
            "B) Almacenar energía en baterías de plomo-ácido para respaldo",
            "C) Elevar el voltaje de corriente alterna trifásica",
            "D) Proteger contra cortocircuitos francos en los motores"
        ],
        respuestaCorrecta: 0,
        explicacion: "El filtro activo detecta los armónicos consumidos por la carga y genera corrientes de compensación con la misma amplitud pero oposición de fase, cancelando la distorsión armónica en el punto de acometida."
    },
    {
        id: 119,
        area: "Protecciones Eléctricas",
        pregunta: "¿Qué protege un relé de sobrecorriente instantáneo (Código ANSI 50) en comparación con un relé de sobrecorriente temporizado (Código ANSI 51)?",
        opciones: [
            "A) El relé 50 opera sin demora intencional (instantáneo) ante corrientes de falla francas muy elevadas cercanas al origen, mientras que el relé 51 opera con una característica de tiempo inverso para fallas más alejadas permitiendo selectividad",
            "B) El relé 50 mide temperatura y el 51 mide voltaje",
            "C) El relé 50 solo se usa en corriente continua y el 51 en alterna",
            "D) No existe diferencia técnica, son sinónimos normativos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La unidad instantánea (50) dispara sin retardo ante fallas graves de alta magnitud, mientras que la unidad temporizada (51) introduce un tiempo inverso para coordinar la selectividad con protecciones secundarias."
    },
    {
        id: 120,
        area: "Instalaciones Eléctricas Industriales",
        pregunta: "En el diseño de sistemas de iluminación y fuerza industrial, ¿qué establece la normativa respecto a la obligatoriedad de instalar dispositivos de corriente residual (GFCI / Interruptores diferenciales) en áreas húmedas o expuestas?",
        opciones: [
            "A) Proteger al personal contra choques eléctricos severos al interrumpir el circuito en fracciones de segundo cuando detectan una corriente de fuga diferencial pequeña (ej. 5 mA a 30 mA) hacia tierra",
            "B) Reducir el consumo de energía activa en las oficinas",
            "C) Incrementar la capacidad de corriente de cortocircuito en tableros principales",
            "D) Mantener constante el factor de potencia inductivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los interruptores diferenciales o GFCI detectan corrientes de fuga minúsculas hacia tierra (asociadas a riesgos de electrocución en ambientes húmedos) y abren el circuito de forma instantánea para salvar vidas."
    }
];