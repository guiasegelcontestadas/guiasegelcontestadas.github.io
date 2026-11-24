const bancoPreguntas = [
    {
        id: 1,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué parámetro biomecánico evalúa la capacidad de un material para deformarse elásticamente antes de alcanzar su límite de cedencia?",
        opciones: ["A) Resistencia a la tracción", "B) Módulo de Young", "C) Tenacidad a la fractura", "D) Límite elástico"],
        respuestaCorrecta: 1,
        explicacion: "El Módulo de Young (o módulo de elasticidad) mide la rigidez de un material dentro del régimen elástico, relacionando el esfuerzo aplicado con la deformación unitaria."
    },
    {
        id: 2,
        area: "Biomecánica y Biomateriales",
        pregunta: "En un ensayo de tensión de un biomaterial metálico, ¿cómo se define el límite de cedencia convencional (offset yield strength)?",
        opciones: ["A) El punto de máxima tensión en la curva esfuerzo-deformación", "B) El punto donde ocurre la fractura catastrófica", "C) El esfuerzo correspondiente a una deformación plástica permanente del 0.2%", "D) El inicio de la región no lineal elástica"],
        respuestaCorrecta: 2,
        explicacion: "Debido a que muchos materiales no muestran un punto de cedencia bien definido, se utiliza una línea paralela a la región elástica desplazada un 0.2% de deformación para determinar este límite."
    },
    {
        id: 3,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Cuál de los siguientes polímeros se utiliza comúnmente en la fabricación de suturas biodegradables debido a su hidrólisis controlada en el cuerpo humano?",
        opciones: ["A) Polietileno de ultra alto peso molecular (UHMWPE)", "B) Polimetilmetacrilato (PMMA)", "C) Ácido poliglicólico (PGA)", "D) Polidimetilsiloxano (PDMS)"],
        respuestaCorrecta: 2,
        explicacion: "El ácido poliglicólico (PGA) es un polímero sintético lineal y biodegradable cuyos enlaces éster son susceptibles a la hidrólisis enzimática y no enzimática in vivo."
    },
    {
        id: 4,
        area: "Biomecánica y Biomateriales",
        pregunta: "En la modelación biomecánica del sistema musculoesquelético, ¿qué tipo de articulación se asocia idealmente con un grado de libertad de tipo bisagra (hinge joint)?",
        opciones: ["A) Coxofemoral (cadera)", "B) Glenohumeral (hombro)", "C) Húmero-ulnar (codo)", "D) Radiocarpiana (muñeca)"],
        respuestaCorrecta: 2,
        explicacion: "La articulación húmero-ulnar permite principalmente movimientos de flexión y extensión en un solo plano, simulando el comportamiento biomecánico de una bisagra."
    },
    {
        id: 5,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué fenómeno superficial ocurre comúnmente cuando un biomaterial metálico entra en contacto con fluidos fisiológicos, provocando la liberación de iones metálicos y degradación?",
        opciones: ["A) Osteointegración", "B) Corrosión electroquímica", "C) Epitaxia", "D) Polimerización por radicales libres"],
        respuestaCorrecta: 1,
        explicacion: "Los fluidos corporales actúan como electrolitos complejos, lo que facilita reacciones de oxidación-reducción (corrosión) en la superficie de los metales implantados."
    },
    {
        id: 6,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Cuál es la principal ventaja biomecánica del titanio y sus aleaciones frente al acero inoxidable 316L en aplicaciones ortopédicas de carga?",
        opciones: ["A) Mayor módulo de elasticidad (más cercano al hueso cortical)", "B) Menor costo de fabricación", "C) Menor módulo de elasticidad (reduce el efecto de apantallamiento de esfuerzos o stress-shielding)", "D) Ausencia total de pasivación superficial"],
        respuestaCorrecta: 2,
        explicacion: "El titanio tiene un módulo de Young menor que el acero inoxidable, acercándose más al del hueso humano, lo que disminuye el fenómeno de stress-shielding y la consiguiente resorción ósea."
    },
    {
        id: 7,
        area: "Biomecánica y Biomateriales",
        pregunta: "En el análisis de la marcha humana, ¿en qué fase del ciclo se registra tradicionalmente el pico máximo de fuerza de reacción del suelo (FRS) durante la propulsión?",
        opciones: ["A) Contacto inicial (heel strike)", "B) Respuesta a la carga (loading response)", "C) Apoyo medio (mid-stance)", "D) Despegue de antepié (pre-swing / push-off)"],
        respuestaCorrecta: 3,
        explicacion: "Durante el pre-swing (despegue), el miembro inferior ejerce un empuje activo contra el suelo, generando el segundo pico característico de la FRS (pico propulsivo)."
    },
    {
        id: 8,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué propiedad mecánica describe la capacidad de un material para absorber energía durante la deformación plástica antes de romperse?",
        opciones: ["A) Resiliencia", "B) Tenacidad", "C) Dureza Vickers", "D) Ductilidad"],
        respuestaCorrecta: 1,
        explicacion: "La tenacidad se define como el área total bajo la curva esfuerzo-deformación hasta el punto de fractura, representando la energía total absorbida."
    },
    {
        id: 9,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué biomaterial cerámico es ampliamente conocido por su alta bioactividad y capacidad de unirse directamente al tejido óseo mediante la formación de una capa de hidroxiapatita superficial?",
        opciones: ["A) Alúmina (Al2O3)", "B) Circona estabilizada con itria (Y-TZP)", "C) Vidrio bioactivo (Bioglass)", "D) Carbón pirolítico"],
        respuestaCorrecta: 2,
        explicacion: "Los vidrios bioactivos reaccionan químicamente con los fluidos corporales formando una capa superficial de hidroxiapatita que promueve la osteoconducción y osteointegración."
    },
    {
        id: 10,
        area: "Biomecánica y Biomateriales",
        pregunta: "En un modelo de viga en voladizo aplicado a una prótesis dental, ¿cómo afecta un incremento en la longitud del voladizo sobre el momento flector en el implante de soporte?",
        opciones: ["A) Disminuye linealmente", "B) Aumenta linealmente", "C) Disminuye cuadráticamente", "D) No sufre alteraciones"],
        respuestaCorrecta: 1,
        explicacion: "El momento flector se calcula como la fuerza multiplicada por la distancia (brazo de palanca). A mayor longitud del voladizo, mayor es el momento flector aplicado."
    },
    {
        id: 11,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Cuál es el propósito principal de someter a un componente protésico de polietileno a radiación gamma en atmósfera inerte durante su manufactura?",
        opciones: ["A) Incrementar su flexibilidad extrema", "B) Entrecruzar las cadenas poliméricas (cross-linking) para reducir el desgaste por fricción", "C) Aumentar su conductividad térmica", "D) Evitar la oxidación inmediata"],
        respuestaCorrecta: 1,
        explicacion: "El entrecruzamiento por radiación en UHMWPE reduce significativamente la tasa de desgaste volumétrico en aplicaciones de articulación de cadera y rodilla."
    },
    {
        id: 12,
        area: "Biomecánica y Biomateriales",
        pregunta: "En la reología de fluidos no newtonianos, ¿cómo se clasifica la sangre a bajas tasas de corte (shear rates)?",
        opciones: ["A) Fluido Newtoniano", "B) Fluido Dilatante (espesante por cizalladura)", "C) Fluido Pseudoplástico (adelgazante por cizalladura con tixotropía)", "D) Fluido Binghamiano plástico"],
        respuestaCorrecta: 2,
        explicacion: "A bajas tasas de corte, los eritrocitos tienden a agregarse formando 'rouleaux', lo que incrementa la viscosidad aparente, exhibiendo un comportamiento pseudoplástico."
    },
    {
        id: 13,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué ley describe el flujo laminar estacionario de un fluido incompresible y newtoniano a través de un tubo cilíndrico rígido?",
        opciones: ["A) Ley de Fick", "B) Ley de Poiseuille", "C) Ley de Laplace", "D) Ley de Darcy"],
        respuestaCorrecta: 1,
        explicacion: "La Ley de Hagen-Poiseuille relaciona la caída de presión con el caudal volumétrico, la viscosidad del fluido y la cuarta potencia del radio del tubo."
    },
    {
        id: 14,
        area: "Biomecánica y Biomateriales",
        pregunta: "¿Qué describe la Ley de Laplace aplicada a la pared de un vaso sanguíneo o ventrículo cardíaco?",
        opciones: ["A) La tensión circunferencial es directamente proporcional a la presión transmural y al radio, e inversamente proporcional al grosor de la pared", "B) El flujo sanguíneo es inversamente proporcional a la longitud del vaso", "C) La velocidad de difusión de oxígeno depende de la distancia intercapilar", "D) El gasto cardíaco es igual a la frecuencia cardíaca por el volumen sistólico"],
        respuestaCorrecta: 0,
        explicacion: "La tensión parietal ($\sigma = P \cdot r / h$) explica cómo los aneurismas tienden a romperse debido al incremento del radio que eleva la tensión mecánica en la pared."
    },
    {
        id: 15,
        area: "Biomecánica y Biomateriales",
        pregunta: "En la caracterización mecánica de tejidos blandos (como arterias o piel), ¿qué término describe el cambio no lineal en el módulo de elasticidad conforme aumenta la deformación?",
        opciones: ["A) Plasticidad perfecta", "B) Comportamiento viscoelástico lineal", "C) Rigidización por deformación (strain-stiffening)", "D) Isotropía transversal"],
        respuestaCorrecta: 2,
        explicacion: "Los tejidos blandos con fibras de colágeno muestran rigidez creciente ante mayores deformaciones debido al reclutamiento progresivo de fibras tensadas."
    },
    {
        id: 16,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Cuál es la función principal de un amplificador de instrumentación en la adquisición de señales biopotenciales débiles (como el ECG)?",
        opciones: ["A) Saturar la señal para convertirla en onda cuadrada", "B) Proveer una alta impedancia de entrada y una alta relación de rechazo al modo común (CMRR)", "C) Aumentar drásticamente el ruido térmico de Johnson", "D) Filtrar frecuencias superiores a 10 kHz"],
        respuestaCorrecta: 1,
        explicacion: "Los amplificadores de instrumentación destacan por su altísima impedancia de entrada y elevado CMRR, lo que permite amplificar la señal diferencial de interés eliminando el ruido de modo común (como los 50/60 Hz de la red eléctrica)."
    },
    {
        id: 17,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En seguridad eléctrica hospitalaria, ¿qué corriente de fuga representa el mayor riesgo de causar fibrilación ventricular en un paciente con un catéter cardíaco directo al miocardio (riesgo microchoque)?",
        opciones: ["A) Corrientes mayores a 50 mA", "B) Corrientes del orden de miliamperios (1 - 10 mA)", "C) Corrientes del orden de microamperios (> 10 microamperios)", "D) Corrientes estáticas menores a 1 nanoampere"],
        respuestaCorrecta: 2,
        explicacion: "Debido a la vía directa al miocardio, umbrales tan bajos como 10 microamperios pueden desencadenar fibrilación ventricular, clasificándose como microchoque."
    },
    {
        id: 18,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Cuál es el principio físico fundamental en el que se basa un oxímetro de pulso (pletismografía óptica) para estimar la saturación arterial de oxígeno ($SpO_2$)?",
        opciones: ["A) Efecto Doppler ultrasónico", "B) Espectrofotometría de absorción basada en la Ley de Beer-Lambert con dos longitudes de onda (rojo e infrarrojo)", "C) Impedancia bioeléctrica transtorácica", "D) Termografía infrarroja de emisión superficial"],
        respuestaCorrecta: 1,
        explicacion: "La oxihemoglobina ($HbO_2$) y la desoxihemoglobina ($Hb$) absorben de manera diferencial la luz roja (660 nm) e infrarroja (940 nm), permitiendo calcular la saturación mediante la relación de pulsos."
    },
    {
        id: 19,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En un equipo de ultrasonido diagnóstico, ¿qué función cumple el arreglo de cristales piezoeléctricos del transductor al aplicar retardos de tiempo (beamforming)?",
        opciones: ["A) Modificar la frecuencia de resonancia mecánica de manera aleatoria", "B) Enfocar dinámicamente y dirigir electrónicamente el haz ultrasónico en diferentes direcciones", "C) Convertir la señal acústica directamente a formato DICOM", "D) Reducir la impedancia acústica del tejido adiposo"],
        respuestaCorrecta: 1,
        explicacion: "El control preciso de los retardos temporales de excitación y recepción permite enfocar y dirigir el frente de onda ultrasónico sin necesidad de componentes mecánicos móviles."
    },
    {
        id: 20,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Qué componente de seguridad eléctrica se emplea en quirófanos y áreas críticas para aislar galvánicamente el suministro eléctrico y proteger contra macrochoques por fallas a tierra?",
        opciones: ["A) Fusibles de acción rápida", "B) Transformador de aislamiento médico", "C) Interruptor termomagnético convencional", "D) Puente rectificador de onda completa"],
        respuestaCorrecta: 1,
        explicacion: "El transformador de aislamiento separa el circuito secundario del primario de la red eléctrica, impidiendo el retorno de corrientes de falla a través del paciente hacia tierra."
    },
    {
        id: 21,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En la adquisición de señales de Electroencefalograma (EEG), ¿bajo qué norma internacional se estandariza comúnmente la colocación de los electrodos en el cuero cabelludo?",
        opciones: ["A) Sistema 10-20 internacional", "B) Norma IEEE 802.11", "C) Estándar DICOM Parte 3", "D) Guía AAMI EC11"],
        respuestaCorrecta: 0,
        explicacion: "El sistema 10-20 se basa en la relación porcentual (10% y 20%) de las distancias entre puntos anatómicos craneales de referencia para ubicar los electrodos."
    },
    {
        id: 22,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Qué frecuencia central aproximada de pulso ultrasónico se seleccionaría para la ecografía diagnóstica de estructuras vasculares superficiales o tiroides?",
        opciones: ["A) 2 MHz a 3.5 MHz", "B) 7 MHz a 12 MHz", "C) 20 MHz a 30 MHz", "D) 500 kHz"],
        respuestaCorrecta: 1,
        explicacion: "Las frecuencias altas (7-12 MHz) proporcionan una excelente resolución espacial axial y lateral, aunque menor profundidad de penetración, idóneo para estructuras superficiales."
    },
    {
        id: 23,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En un ventilador mecánico pulmonar, ¿qué modo de ventilación entrega un volumen corriente preestablecido cada vez que el paciente realiza un esfuerzo inspiratorio detectado por el equipo?",
        opciones: ["A) Ventilación Mandatoria Intermitente Sincronizada (SIMV) en modo control de presión", "B) Ventilación Asistida / Controlada por Volumen (ACV)", "C) Presión Positiva Continua en la Vía Aérea (CPAP)", "D) Ventilación de Alta Frecuencia Oscilatoria (HFOV)"],
        respuestaCorrecta: 1,
        explicacion: "En el modo Asistido/Controlado, cada esfuerzo inspiratorio del paciente activa (asiste) la entrega del ciclo respiratorio programado, garantizando soporte volumétrico."
    },
    {
        id: 24,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Cuál es el propósito de utilizar un gel conductor en la interfaz entre el transductor de ultrasonido y la piel del paciente?",
        opciones: ["A) Enfriar el cristal piezoeléctrico para evitar quemaduras", "B) Adaptar la impedancia acústica entre la piel y el transductor, eliminando la capa de aire reflectora", "C) Elevar la frecuencia de la onda ultrasónica incidente", "D) Actuar como desinfectante de alto nivel"],
        respuestaCorrecta: 1,
        explicacion: "El aire tiene una impedancia acústica extremadamente diferente a la piel y al cristal, lo que reflejaría casi el 100% del ultrasonido. El gel actúa como medio de acoplamiento óptimo."
    },
    {
        id: 25,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Qué tipo de electrodo se considera ideal y no polarizable para la adquisición de biopotenciales de corriente directa (DC) o baja frecuencia?",
        opciones: ["A) Electrodo de cobre desnudo", "B) Electrodo de plata-cloruro de plata (Ag/AgCl)", "C) Electrodo de acero inoxidable quirúrgico", "D) Electrodo de platino puro pulido"],
        respuestaCorrecta: 1,
        explicacion: "El electrodo Ag/AgCl es un electrodo reversible que permite el libre intercambio de carga entre el metal y el electrolito sin generar potenciales de semicelda indeseados significativos."
    },
    {
        id: 26,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En una máquina de anestesia, ¿qué dispositivo se encarga de convertir el agente anestésico líquido volátil en vapor y agregarlo con precisión al flujo de gas fresco?",
        opciones: ["A) Flujómetro de columna de Thorpe", "B) Vaporizador calibrado", "C) Válvula limitadora de presión ajustable (APL)", "D) Absorbente de dióxido de carbono (cal sodada)"],
        respuestaCorrecta: 1,
        explicacion: "Los vaporizadores modernos están compensados por temperatura, flujo y presión para garantizar una concentración estable y precisa del agente anestésico."
    },
    {
        id: 27,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Qué describe el parámetro de Indice de Modulación (QRS complex amplitude vs noise) o la Relación Señal-Ruido (SNR) en instrumentación biomédica?",
        opciones: ["A) La razón entre la potencia de la señal útil y la potencia del ruido de fondo no deseado", "B) La impedancia total del circuito de paciente", "C) El tiempo de retardo en la conversión analógica-digital", "D) La atenuación del filtro pasa-altas en Hz"],
        respuestaCorrecta: 0,
        explicacion: "La SNR es una métrica fundamental para cuantificar la calidad de una señal biomédica procesada frente a interferencias espurias y ruido electrónico."
    },
    {
        id: 28,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En un desfibrilador cardíaco externo, ¿qué forma de onda se ha demostrado clínica y energéticamente más eficiente para la cardioversión y desfibrilación en comparación con la clásica onda monofásica de Lown?",
        opciones: ["A) Onda sinusoidal amortiguada de 60 Hz", "B) Onda exponencial truncada bifásica", "C) Onda cuadrada de corriente constante", "D) Onda de corriente directa continua sin pulso"],
        respuestaCorrecta: 1,
        explicacion: "Las formas de onda bifásicas invierten la polaridad de la corriente a mitad del choque, logrando una desfibrilación exitosa con menor energía total y reduciendo el daño miocárdico."
    },
    {
        id: 29,
        area: "Instrumentación y Equipo Médico",
        pregunta: "¿Qué componente electrónico activo se utiliza comúnmente en la entrada de los circuitos de adquisición de ECG para proteger al amplificador contra los altos voltajes generados durante el uso de un desfibrilador?",
        opciones: ["A) Diodos limitadores en paralelo (diodos de protección / pin-diodes)", "B) Transistores Darlington en cascada", "C) Tiristores de silicio controlados (SCR)", "D) Inductores de núcleo de ferrita saturable"],
        respuestaCorrecta: 0,
        explicacion: "Los diodos conectados en configuración antiparalelo limitan el voltaje máximo que llega a la circuitería sensible del preamplificador durante una descarga de desfibrilación."
    },
    {
        id: 30,
        area: "Instrumentación y Equipo Médico",
        pregunta: "En el monitoreo invasivo de la presión arterial, ¿qué fenómeno físico indeseado ocurre si el sistema de catéter-tubo-transductor está subamortiguado (underdamped), generando picos espurios en la lectura?",
        opciones: ["A) Sobreestimación de la presión diastólica y sistólica con sobreimpulsos (overshoot)", "B) Subestimación severa de la presión media", "C) Pérdida total de la señal por oclusión de coágulos", "D) Desplazamiento de la línea de base por efecto piezoeléctrico"],
        respuestaCorrecta: 0,
        explicacion: "Un sistema subamortiguado responde exageradamente a los cambios rápidos de presión, provocando picos falsamente elevados (sobreestimación de la presión sistólica)."
    },
    {
        id: 31,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Cuál es el objetivo principal del análisis de criticidad en la gestión del mantenimiento de tecnología médica dentro de un hospital?",
        opciones: ["A) Asignar prioridades y recursos de mantenimiento basados en el riesgo clínico, probabilidad de falla y costos", "B) Determinar el costo de depreciación contable anual de los equipos", "C) Sustituir obligatoriamente todos los equipos médicos cada 5 años", "D) Cumplir únicamente con los requisitos fiscales de la Secretaría de Hacienda"],
        respuestaCorrecta: 0,
        explicacion: "El análisis de criticidad jerarquiza la tecnología según su impacto en el paciente, función y riesgo, optimizando los planes de mantenimiento preventivo y correctivo."
    },
    {
        id: 32,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué término define el mantenimiento planificado que se realiza a intervalos predeterminados según las recomendaciones del fabricante para prevenir fallas operativas?",
        opciones: ["A) Mantenimiento correctivo de emergencia", "B) Mantenimiento preventivo", "C) Mantenimiento predictivo basado en desgaste empírico", "D) Ingeniería inversa clínica"],
        respuestaCorrecta: 1,
        explicacion: "El mantenimiento preventivo comprende inspecciones, calibraciones, limpiezas y reemplazos programados para garantizar el funcionamiento seguro y fiable del equipo."
    },
    {
        id: 33,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué estándar internacional de sistemas de gestión de la calidad es específico para la industria de dispositivos médicos y cubre el diseño, producción y servicio?",
        opciones: ["A) ISO 9001", "B) ISO 13485", "C) ISO 14001", "D) ISO/IEC 17025"],
        respuestaCorrecta: 1,
        explicacion: "La norma ISO 13485 especifica los requisitos para un sistema de gestión de la calidad cuando una organización necesita demostrar su capacidad para proveer dispositivos médicos y servicios relacionados."
    },
    {
        id: 34,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "En la evaluación de tecnologías en salud (ETS / HTA), ¿qué indicador económico compara los costos incrementales de una intervención médica frente a los beneficios medidos en años de vida ajustados por calidad (AVAC / QALYs)?",
        opciones: ["A) Análisis de minimización de costos", "B) Análisis de costo-efectividad", "C) Análisis de costo-utilidad", "D) Análisis de costo-beneficio en moneda pura"],
        respuestaCorrecta: 2,
        explicacion: "El análisis de costo-utilidad evalúa específicamente los resultados de salud en términos de calidad de vida mediante métricas como los AVAC o QALYs."
    },
    {
        id: 35,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué instrumento normativo o de pruebas eléctricas se utiliza en el departamento de ingeniería clínica para verificar las corrientes de fuga a tierra y la resistencia del conductor de protección en un equipo electromédico?",
        opciones: ["A) Analizador de seguridad eléctrica (según normas como IEC 60601 / AAMI)", "B) Osciloscopio digital de almacenamiento", "C) Multímetro analógico de aguja de bobina móvil", "D) Generador de funciones de radiofrecuencia"],
        respuestaCorrecta: 0,
        explicacion: "Los analizadores de seguridad eléctrica simulan condiciones normales y de falla única para medir corrientes de fuga y verificar la integridad de la puesta a tierra."
    },
    {
        id: 36,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué describe el concepto de 'Trazabilidad Metrológica' en el contexto de la calibración de equipos médicos de medición (como esfigmomanómetros o bombas de infusión)?",
        opciones: ["A) La capacidad de rastrear el historial de operador de un equipo en el hospital", "B) La propiedad de un resultado de medida mediante la cual este puede relacionarse con referencias nacionales o internacionales a través de una cadena ininterrumpida de calibraciones", "C) El registro digital de la ubicación física del equipo en inventario", "D) La fecha de caducidad de los insumos desechables asociados"],
        respuestaCorrecta: 1,
        explicacion: "La trazabilidad metrológica garantiza que las mediciones realizadas con el equipo sean precisas, confiables y comparables a nivel internacional mediante patrones certificados."
    },
    {
        id: 37,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "En la gestión de inventarios de tecnología médica, ¿qué representa el indicador clínico-financiero conocido como 'Tiempo Medio entre Fallas' (MTBF - Mean Time Between Failures)?",
        opciones: ["A) El tiempo promedio que tarda un técnico en reparar un equipo averiado", "B) El promedio aritmético de operación sin fallas de un equipo operable entre intervenciones correctivas", "C) El tiempo transcurrido desde la compra hasta la baja definitiva del activo", "D) La disponibilidad porcentual del equipo en horas al año"],
        respuestaCorrecta: 1,
        explicacion: "El MTBF mide la confiabilidad operativa del equipo, calculándose como el cociente entre el tiempo total de operación y el número de fallas registradas."
    },
    {
        id: 38,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Cuál es el propósito de realizar una prueba de aceptación (acceptance testing) a un equipo médico nuevo recién adquirido por el hospital?",
        opciones: ["A) Verificar que el dispositivo cumpla con las especificaciones técnicas del fabricante, estándares de seguridad y funcione correctamente antes de su uso clínico", "B) Negociar un descuento comercial retroactivo con el proveedor", "C) Descartar el equipo si su carcasa presenta rayones estéticos menores", "D) Calibrar el software interno para acelerar el procesamiento de datos"],
        respuestaCorrecta: 0,
        explicacion: "La prueba de aceptación es el protocolo formal de validación inicial que asegura que el equipo es seguro, completo y cumple con lo prometido antes de entrar al inventario activo."
    },
    {
        id: 39,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "En el ciclo de vida de un dispositivo médico, ¿qué término se utiliza para describir el proceso sistemático de retiro del mercado ordenado por las autoridades sanitarias debido a riesgos de seguridad inaceptables?",
        opciones: ["A) Calibración correctiva", "B) Desincorporación contable", "C) Alerta sanitaria / Retirada de producto (Recall)", "D) Baja por obsolescencia tecnológica"],
        respuestaCorrecta: 2,
        explicacion: "Un 'recall' o alerta sanitaria es la acción correctiva de seguridad mediante la cual el fabricante o autoridad retira, modifica o inspecciona dispositivos defectuosos en campo."
    },
    {
        id: 40,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué estándar de interoperabilidad en salud se enfoca en el intercambio, integración, compartición y recuperación de registros médicos electrónicos estructurados?",
        opciones: ["A) HL7 (Health Level Seven) y FHIR", "B) Bluetooth Low Energy (BLE)", "C) IEEE 802.3 Ethernet", "D) USB Tipo C Power Delivery"],
        respuestaCorrecta: 0,
        explicacion: "HL7 y sus especificaciones modernas como FHIR (Fast Healthcare Interoperability Resources) son los estándares globales para la interoperabilidad de datos clínicos."
    },
    {
        id: 41,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "En la gestión de riesgos hospitalarios según la norma ISO 14971 aplicada a dispositivos médicos, ¿cómo se define el riesgo?",
        opciones: ["A) La probabilidad de ocurrencia de un daño combinada con la severidad de dicho daño", "B) El costo monetario total de las demandas legales por negligencia", "C) La cantidad de piezas de repuesto en stock en el almacén", "D) El porcentaje de fallas mecánicas anuales"],
        respuestaCorrecta: 0,
        explicacion: "La norma ISO 14971 define el riesgo en la gestión de dispositivos médicos como la combinación de la probabilidad de que ocurra un daño y la gravedad de este."
    },
    {
        id: 42,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué significa el indicador 'Disponibilidad' (Availability) de un equipo crítico en el análisis de mantenimiento hospitalario?",
        opciones: ["A) El cociente del tiempo operativo útil entre el tiempo total requerido (Operativo + Inactivo por fallas)", "B) El porcentaje de personal técnico capacitado en turno nocturno", "C) El número de accesorios disponibles en la central de equipos", "D) El costo de mantenimiento preventivo dividido entre el costo de adquisición"],
        respuestaCorrecta: 0,
        explicacion: "La disponibilidad mide la probabilidad de que un equipo se encuentre en estado de funcionamiento y listo para su uso cuando se requiera."
    },
    {
        id: 43,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué documento legal y técnico debe emitir obligatoriamente el fabricante de un dispositivo médico para certificar que cumple con los requerimientos esenciales de seguridad previos a su comercialización en la Unión Europea?",
        opciones: ["A) Certificado de Marcado CE", "B) Patente de invención ante la OMPI", "C) Póliza de seguro de responsabilidad civil internacional", "D) Licencia ambiental de disposición de residuos"],
        respuestaCorrecta: 0,
        explicacion: "El marcado CE indica que el fabricante evalúa el producto y confirma que cumple con los requisitos de la legislación de la UE en materia de seguridad, sanidad y protección ambiental."
    },
    {
        id: 44,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "En la gestión de la tecnología en salud, ¿cuál es la principal diferencia entre un 'dispositivo médico activo' y un 'dispositivo médico no activo'?",
        opciones: ["A) El dispositivo activo depende de una fuente de energía eléctrica o cualquier fuente de energía distinta a la generada directamente por el cuerpo humano o la gravedad", "B) El dispositivo activo solo se usa en quirófano", "C) El dispositivo no activo requiere calibración mensual obligatoria", "D) El dispositivo activo no está sujeto a regulación sanitaria"],
        respuestaCorrecta: 0,
        explicacion: "La definición regulatoria clasifica como activo a todo dispositivo cuyo funcionamiento dependa de una fuente de energía externa (red, batería, etc.)."
    },
    {
        id: 45,
        area: "Ingeniería Clínica y Gestión Tecnológica",
        pregunta: "¿Qué métrica o parámetro evalúa el 'Tiempo Medio de Reparación' (MTTR - Mean Time To Repair) en el departamento de ingeniería biomédica?",
        opciones: ["A) El promedio de tiempo que requiere el personal técnico para diagnosticar, reparar y restablecer un equipo a su condición operativa", "B) El tiempo transcurrido entre dos fallas consecutivas del mismo equipo", "C) El tiempo de entrega de refacciones desde el extranjero", "D) La vida útil contable del activo médico"],
        respuestaCorrecta: 0,
        explicacion: "El MTTR mide la eficiencia del servicio de mantenimiento correctivo cuantificando el tiempo promedio necesario para solucionar una falla."
    },
    {
        id: 46,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Cuál es la transformada matemática utilizada fundamentalmente en el análisis de señales biomédicas (como el EEG o ECG) para convertir una señal del dominio del tiempo al dominio de la frecuencia?",
        opciones: ["A) Transformada de Laplace inversa", "B) Transformada de Fourier (y su algoritmo Rápido - FFT)", "C) Transformada de Radon", "D) Transformada de Hough lineal"],
        respuestaCorrecta: 1,
        explicacion: "La Transformada Rápida de Fourier (FFT) descompone una señal en sus componentes sinusoidales constituyentes, permitiendo analizar su contenido espectral de frecuencias."
    },
    {
        id: 47,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En el procesamiento digital de imágenes médicas (ej. Rayos X), ¿qué operación espacial se aplica mediante una matriz de convolución (kernel) para suavizar la imagen y reducir el ruido de alta frecuencia?",
        opciones: ["A) Filtro pasa-bajas (filtro de promedio o gaussiano)", "B) Filtro pasa-altas de realce de bordes", "C) Operador Laplaciano de segunda derivada", "D) Gradiente de Sobel para detección de contornos"],
        respuestaCorrecta: 0,
        explicacion: "Un filtro pasa-bajas promedia los valores de los píxeles vecinos, atenuando las variaciones abruptas de intensidad asociadas al ruido aleatorio."
    },
    {
        id: 48,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Cuál es el principio físico de formación de imagen en la Tomografía Computarizada (TC / CT)?",
        opciones: ["A) Resonancia magnética nuclear de protones de hidrógeno con pulsos de radiofrecuencia", "B) Medición de la atenuación de rayos X desde múltiples ángulos de proyección para reconstruir cortes transversales mediante retroproyección filtrada", "C) Emisión de positrones por radiotrazadores metabólicos", "D) Reflexión de ondas acústicas de alta frecuencia"],
        respuestaCorrecta: 1,
        explicacion: "La TC utiliza una fuente de rayos X rotatoria y detectores opuestos para medir coeficientes de atenuación lineal en múltiples proyecciones, reconstruyendo la matriz de imagen."
    },
    {
        id: 49,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En Resonancia Magnética (RM), ¿qué secuencia de pulsos se caracteriza típicamente por un tiempo de eco (TE) corto y un tiempo de repetición (TR) corto, generando imágenes donde la grasa se ve hiperintensa (brillante)?",
        opciones: ["A) Secuencia potenciada en T2", "B) Secuencia potenciada en T1", "C) Secuencia de inversión recuperación (FLAIR)", "D) Secuencia en eco de gradiente rápida con contraste dinámico"],
        respuestaCorrecta: 1,
        explicacion: "Las secuencias potenciadas en T1 resaltan las diferencias en los tiempos de relajación longitudinal de los tejidos, mostrando la grasa brillante y el agua libre oscura."
    },
    {
        id: 50,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Qué representa el valor en Unidades Hounsfield (UH / HU) en una imagen de Tomografía Computarizada?",
        opciones: ["A) La fase del pulso de radiofrecuencia aplicado al tejido", "B) El coeficiente de atenuación de rayos X del tejido normalizado respecto al agua (Agua = 0 HU, Aire = -1000 HU)", "C) La velocidad de propagación del ultrasonido en metros por segundo", "D) El nivel de concentración de glucosa en sangre"],
        respuestaCorrecta: 1,
        explicacion: "Las Unidades Hounsfield son una escala cuantitativa de radiodensidad donde el agua destilada es 0 HU y el aire es -1000 HU."
    },
    {
        id: 51,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En el procesamiento de imágenes médicas, ¿en qué consiste la técnica de segmentación por umbralización (thresholding)?",
        opciones: ["A) En separar objetos de interés del fondo asignando valores de intensidad basados en un límite numérico de gris", "B) En rotar la imagen tridimensional en un ángulo de 360 grados", "C) En comprimir el archivo sin pérdida de información DICOM", "D) En calcular la transformada de Fourier bidimensional"],
        respuestaCorrecta: 0,
        explicacion: "La umbralización clasifica los píxeles en clases (ej. hueso vs tejido blando) comparando su nivel de gris con uno o varios umbrales predeterminados."
    },
    {
        id: 52,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Qué fenómeno físico se explota en los estudios de Tomografía por Emisión de Positrones (PET)?",
        opciones: ["A) La aniquilación de un positrón emitido por un radiotrazador con un electrón, produciendo dos fotones gamma en direcciones opuestas (180 grados)", "B) La relajación de spines nucleares en un campo magnético estático de alto poder", "C) La reflexión especular de ondas electromagnéticas en interfaces tisulares", "D) La fluorescencia óptica inducida por láser de argón"],
        respuestaCorrecta: 0,
        explicacion: "El decaimiento beta positivo genera un positrón que al colisionar con un electrón genera una pareja de fotones gamma de 511 keV emitidos en coincidencia colineal."
    },
    {
        id: 53,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En filtrado digital de señales biomédicas, ¿qué tipo de filtro FIR (respuesta impulsional finita) garantiza una fase estrictamente lineal (evitando distorsión de fase en la forma de onda del ECG)?",
        opciones: ["A) Un filtro cuyas coordenadas de coeficientes sean simétricas o antisimétricas", "B) Un filtro recursivo con polos en el círculo unitario", "C) Un circuito analógico con amplificadores operacionales 741", "D) Un filtro pasa-bandas con realimentación positiva infinita"],
        respuestaCorrecta: 0,
        explicacion: "Los filtros FIR con coeficientes simétricos garantizan una fase perfectamente lineal, lo que significa que todas las frecuencias sufren el mismo retraso temporal, preservando la morfología de la señal."
    },
    {
        id: 54,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Cuál es el propósito del gradiente magnético en un equipo de Resonancia Magnética durante la adquisición de imágenes?",
        opciones: ["A) Alinear inicialmente todos los momentos magnéticos de los protones corporales", "B) Codificar espacialmente la señal de RMR variando linealmente el campo magnético en las tres dimensiones del espacio", "C) Generar el campo estático principal $B_0$ de 1.5 Tesla o 3 Tesla", "D) Enfriar los imanes superconductores con helio líquido"],
        respuestaCorrecta: 1,
        explicacion: "Los gradientes de campo magnético ($Gx, Gy, Gz$) alteran localmente la frecuencia de precesión de los espines, permitiendo la codificación de fase, frecuencia y selección de cortes."
    },
    {
        id: 55,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En el análisis espectral de la variabilidad de la frecuencia cardíaca (VFC), ¿qué banda de frecuencia se asocia principalmente con la modulación del sistema nervioso parasimpático (tono vagal)?",
        opciones: ["A) Banda de Muy Baja Frecuencia (VLF)", "B) Banda de Baja Frecuencia (LF)", "C) Banda de Alta Frecuencia (HF)", "D) Componentes de corriente directa (DC)"],
        respuestaCorrecta: 2,
        explicacion: "La banda de Alta Frecuencia (0.15 - 0.4 Hz) en la VFC refleja la actividad respiratoria y está mediada casi exclusivamente por la influencia parasimpática (vagal) sobre el nodo sinusal."
    },
    {
        id: 56,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Qué estándar internacional rige el formato de archivo y comunicación para imágenes médicas y datos relacionados (PACS), asegurando la interoperabilidad de equipos de imagenología?",
        opciones: ["A) DICOM (Digital Imaging and Communications in Medicine)", "B) IEEE 11073", "C) HTML5 / CSS3", "D) ISO 9001:2015"],
        respuestaCorrecta: 0,
        explicacion: "DICOM es el estándar mundial que especifica el formato de las imágenes médicas y los protocolos de red para su almacenamiento y transmisión en sistemas PACS."
    },
    {
        id: 57,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En el procesamiento de imágenes, ¿qué operación morfológica combina la dilatación seguida de la erosión para eliminar pequeños puntos brillantes (ruido) o desconectar estructuras unidas?",
        opciones: ["A) Apertura (Opening)", "B) Cierre (Closing)", "C) Esqueletización", "D) Transformada de Watershed"],
        respuestaCorrecta: 0,
        explicacion: "La apertura morfológica consiste en una erosión seguida de una dilatación, lo que permite eliminar detalles brillantes más pequeños que el elemento estructurante sin alterar el tamaño global de los objetos principales."
    },
    {
        id: 58,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Qué caracteriza a una señal biomédica no estacionaria (como la actividad electroencefalográfica durante una crisis epiléptica)?",
        opciones: ["A) Sus propiedades estadísticas (media, varianza, contenido espectral) cambian con el tiempo", "B) Su contenido frecuencial es completamente constante y predecible", "C) Es una onda sinusoidal pura con armónicos infinitos", "D) Su amplitud es estrictamente cero en reposo"],
        respuestaCorrecta: 0,
        explicacion: "Las señales no estacionarias varían sus características estadísticas y espectrales a lo largo del tiempo, requiriendo herramientas como la transformada wavelet o análisis tiempo-frecuencia."
    },
    {
        id: 59,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "En la ecografía Doppler, ¿qué indica un cambio en la frecuencia de la onda reflejada respecto a la emitida (Efecto Doppler) al incidir sobre eritrocitos en movimiento?",
        opciones: ["A) La temperatura exacta del vaso sanguíneo", "B) La velocidad y dirección del flujo sanguíneo respecto al transductor", "C) La densidad mineral ósea del lecho vascular", "D) La concentración de oxígeno disuelto en plasma"],
        respuestaCorrecta: 1,
        explicacion: "El desplazamiento Doppler mide directamente la velocidad de las partículas en movimiento en función de la frecuencia reflejada, el ángulo de insonación y la frecuencia original."
    },
    {
        id: 60,
        area: "Procesamiento de Señales e Imágenes Médicas",
        pregunta: "¿Cuál es el propósito del filtrado adaptativo (como el filtro LMS - Least Mean Squares) aplicado comúnmente en la cancelación de ruido de artefacto por movimiento o ruido de línea eléctrica en biopotenciales?",
        opciones: ["A) Ajustar automáticamente los coeficientes del filtro en tiempo real para minimizar la diferencia entre una señal de referencia de ruido y la señal contaminada", "B) Amplificar de manera fija todas las frecuencias por encima de 100 Hz", "C) Convertir la señal analógica en un archivo de audio comprimido MP3", "D) Eliminar completamente el componente de corriente continua sin fase"],
        respuestaCorrecta: 0,
        explicacion: "Los filtros adaptativos ajustan sus parámetros dinámicamente para rastrear y eliminar señales de ruido cuyas características cambian con el tiempo."
    },
    {
        id: 61,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "En la tríada de la ingeniería de tejidos, ¿cuáles son los tres elementos fundamentales que se combinan para regenerar tejidos u órganos dañados?",
        opciones: ["A) Sensores, microcontroladores y actuadores hidráulicos", "B) Células, andamios (scaffolds) y factores de crecimiento", "C) Polímeros, metales y cerámicas bioinertes", "D) Sangre, plasma y plaquetas ricas en fibrina"],
        respuestaCorrecta: 1,
        explicacion: "La ingeniería de tejidos se fundamenta en la interacción sinérgica entre células con capacidad regenerativa, un andamio tridimensional soporte y señales bioquímicas (factores de crecimiento)."
    },
    {
        id: 62,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué técnica de manufactura aditiva ( impresión 3D) permite extruir biomateriales cargados con células vivas (biotintas) capa por capa para construir constructos tisulares tridimensionales complejos?",
        opciones: ["A) Siderurgia por inducción magnética", "B) Bioimpresión tridimensional (Bioprinting)", "C) Fundición en moldes de arena cerámicos", "D) Mecanizado CNC de alta velocidad de aleaciones de titanio"],
        respuestaCorrecta: 1,
        explicacion: "La bioimpresión 3D utiliza sistemas de extrusión, inyección de tinta o asistidos por láser para depositar biotintas celulares con control espacial preciso."
    },
    {
        id: 63,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué propiedad superficial de un andamio (scaffold) es crítica para favorecer la adhesión celular inicial y la consiguiente proliferación y diferenciación en ingeniería de tejidos?",
        opciones: ["A) Una hidrofobicidad extrema que repela el agua", "B) La rugosidad superficial y la humectabilidad (hidrofilia moderada con presencia de grupos funcionales polares)", "C) Una conductividad eléctrica superior a los metales puros", "D) La ausencia total de porosidad interna"],
        respuestaCorrecta: 1,
        explicacion: "La hidrofilia moderada y la rugosidad controlada facilitan la adsorción de proteínas de adhesión extracelular (como fibronectina y vitronectina) necesarias para que las células se enganchen al andamio."
    },
    {
        id: 64,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué característica estructural en un andamio poroso es indispensable para permitir la infiltración celular profunda, la vascularización y el transporte de nutrientes a lo largo del constructo?",
        opciones: ["A) Porosidad cerrada y estanca", "B) Porosidad interconectada con tamaño de poro adecuado (generalmente entre 100 y 500 micrómetros)", "C) Estructura cristalina totalmente compacta sin espacios vacíos", "D) Ausencia total de canales internos"],
        respuestaCorrecta: 1,
        explicacion: "Para que las células migren al interior y se forme tejido vascular, los poros del andamio deben estar altamente interconectados y tener un diámetro suficiente."
    },
    {
        id: 65,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué tipo de células madre tienen la capacidad de diferenciarse en cualquier tipo celular de las tres capas germinales embrionarias, además de tejidos extraembrionarios?",
        opciones: ["A) Células madre unipotentes", "B) Células madre pluripotentes (como las iPSC o embrionarias)", "C) Células madre adultas hematopoyéticas", "D) Fibroblastos dérmicos diferenciados"],
        respuestaCorrecta: 1,
        explicacion: "Las células pluripotentes (embrionarias o pluripotentes inducidas - iPSC) poseen la versatilidad de dar origen a derivados de ectodermo, mesodermo y endodermo."
    },
    {
        id: 66,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué polímero natural derivado de algas marinas se gelifica rápidamente en presencia de cationes divalentes (como calcio) y se utiliza ampliamente en la encapsulación de células para ingeniería de tejidos?",
        opciones: ["A) Quitosano", "B) Alginato de sodio", "C) Colágeno tipo I bovino", "D) Ácido hialurónico reticulado"],
        respuestaCorrecta: 1,
        explicacion: "El alginato forma hidrogeles suaves mediante reticulación iónica con iones $Ca^{2+}$, proporcionando un microentorno acuoso biocompatible para encapsular células vivas."
    },
    {
        id: 67,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Cuál es el principal desafío limitante tras la implantación in vivo de constructos de ingeniería de tejidos de gran espesor (> 200 micrómetros)?",
        opciones: ["A) La falta inmediata de vascularización (angiogénesis) que provoca necrosis celular central por hipoxia", "B) El exceso de conductividad térmica del hidrogel", "C) La interferencia con campos electromagnéticos ambientales", "D) La rápida polimerización del ADN celular"],
        respuestaCorrecta: 0,
        explicacion: "La difusión pasiva de oxígeno y nutrientes solo alcanza distancias de 100-200 micrómetros; sin una red vascular integrada, las células del núcleo del constructo mueren por falta de irrigación."
    },
    {
        id: 68,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué técnica de caracterización de materiales permite determinar la porosidad total, la distribución de tamaños de poro y el área superficial específica de un andamio poroso?",
        opciones: ["A) Porosimetría de intrusión de mercurio y adsorción de nitrógeno (BET)", "B) Espectroscopia de absorción atómica de flama", "C) Microscopia electrónica de transmisión de alta resolución (TEM)", "D) Difracción de rayos X de polvos"],
        respuestaCorrecta: 0,
        explicacion: "La porosimetría de mercurio y la fisisorción de gas (método BET) son técnicas estándar para cuantificar la arquitectura porosa y microestructural de scaffolds."
    },
    {
        id: 69,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "¿Qué biomaterial sintético derivado de la policondensación del ácido láctico y glicólico (PLGA) es ampliamente investigado por su degradación hidrolítica ajustable en dispositivos de liberación controlada de fármacos?",
        opciones: ["A) Politetrafluoroetileno (PTFE expandido)", "B) Poliláctico-co-glicólico (PLGA)", "C) Caucho de silicona vulcanizada", "D) Poliestireno sulfonado"],
        respuestaCorrecta: 1,
        explicacion: "El copolímero PLGA es reabsorbible y su tasa de degradación se puede modular variando la proporción de monómeros de ácido láctico frente a ácido glicólico."
    },
    {
        id: 70,
        area: "Ingeniería de Tejidos y Biomateriales Avanzados",
        pregunta: "En los ensayos de biocompatibilidad in vitro según la serie de normas ISO 10993, ¿qué evalúa específicamente la prueba de citotoxicidad por el método de elución (extractos)?",
        opciones: ["A) La capacidad del material para generar trombos en la sangre", "B) El daño celular o la reducción de viabilidad en un cultivo de fibroblastos expuestos a extractos líquidos del material", "C) La respuesta inflamatoria crónica en tejido subcutáneo animal", "D) La mutagenicidad en bacterias de Ames"],
        respuestaCorrecta: 1,
        explicacion: "La prueba de elución (ISO 10993-5) expone cultivos celulares a los lixiviados o extractos del biomaterial para determinar si libera sustancias tóxicas que comprometan la viabilidad celular."
    },
    {
        id: 71,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Qué arquitectura de microcontrolador o procesador digital de señales (DSP) se prefiere comúnmente en el diseño de equipos médicos portátiles de monitorización en tiempo real debido a su bajo consumo de potencia y capacidad de procesamiento matemático eficiente?",
        opciones: ["A) Arquitectura ARM Cortex-M con unidades de punto flotante (FPU)", "B) Mainframes de servidores centralizados con refrigeración líquida", "C) Tarjetas gráficas de alta gama con procesamiento paralelo masivo (GPU)", "D) Microprocesadores de computadoras de escritorio de 300 Watts"],
        respuestaCorrecta: 0,
        explicacion: "Los procesadores ARM Cortex-M combinan bajo consumo energético con instrucciones dedicadas para procesamiento digital de señales (DSP extensions), ideales para dispositivos médicos portátiles."
    },
    {
        id: 72,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "En el diseño de sistemas de adquisición de datos biomédicos, ¿qué teorema establece la frecuencia mínima de muestreo necesaria para evitar el fenómeno de aliasing al digitalizar una señal analógica con un ancho de banda determinado?",
        opciones: ["A) Teorema de Nyquist-Shannon", "B) Teorema del límite central", "C) Ley de Ohm generalizada", "D) Principio de incertidumbre de Heisenberg"],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Nyquist estipula que la frecuencia de muestreo debe ser estrictamente mayor al doble de la frecuencia máxima contenida en la señal analógica de interés ($f_s > 2f_{max}$)."
    },
    {
        id: 73,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Cuál es la función primordial de un filtro antialiasing analógico situado antes del convertidor analógico-digital (ADC) en un instrumento biomédico?",
        opciones: ["A) Amplificar el voltaje de alimentación de la fuente de poder", "B) Atenuar y eliminar las componentes de frecuencia superiores a la frecuencia de Nyquist para prevenir la distorsión por solapamiento espectral", "C) Convertir la señal digital en impulsos ópticos infrarrojos", "D) Aumentar la impedancia de entrada del electrodo"],
        respuestaCorrecta: 1,
        explicacion: "Un filtro pasa-bajas analógico (antialiasing) remueve las frecuencias altas indeseadas antes del muestreo para que no se replieguen en la banda base digital."
    },
    {
        id: 74,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "En la transmisión inalámbrica de datos biomédicos desde dispositivos portátiles (wearables) hacia una central de enfermería, ¿qué protocolo de corto alcance se utiliza frecuentemente por su ultrabajo consumo energético (BLE)?",
        opciones: ["A) Bluetooth Low Energy (Bluetooth 4.0 / 5.x)", "B) Redes de área local vía satélite Starlink", "C) Transmisión de radio AM de onda media", "D) Fibra óptica monomodo submarina"],
        respuestaCorrecta: 0,
        explicacion: "Bluetooth Low Energy (BLE) está optimizado para la transmisión intermitente de pequeños paquetes de datos fisiológicos con un consumo de batería mínimo."
    },
    {
        id: 75,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Qué componente electrónico pasivo se utiliza en los circuitos de acondicionamiento de señales biomédicas para bloquear el paso de componentes de corriente directa (DC) debidas a los potenciales de media celda de los electrodos?",
        opciones: ["A) Un condensador de acoplamiento en serie", "B) Un inductor de núcleo de aire de valor elevado", "C) Un diodo Zener de alta potencia", "D) Una resistencia de carbón de precisión"],
        respuestaCorrecta: 0,
        explicacion: "Un capacitor en serie actúa como filtro pasa-altas que bloquea el componente DC (potencial de electrodo) permitiendo pasar únicamente las variaciones AC de la bioseñal."
    },
    {
        id: 76,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Qué parámetro de un Convertidor Analógico-Digital (ADC) determina la resolución mínima de voltaje perceptible en la conversión de una bioseñal?",
        opciones: ["A) El número de bits de cuantización (ej. 12 bits, 16 bits, 24 bits)", "B) El color exterior del empaque del circuito integrado", "C) La temperatura de almacenamiento en bodega", "D) El peso en gramos del componente físico"],
        respuestaCorrecta: 0,
        explicacion: "A mayor número de bits ($n$), mayor es el número de niveles de cuantización ($2^n$), reduciendo el error de cuantización y detectando variaciones de voltaje más sutiles."
    },
    {
        id: 77,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "En los marcapasos cardíacos implantables modernos, ¿qué modalidad de estimulación y sensado se programa para inhibir el pulso de estimulación si el propio corazón genera una despolarización espontánea dentro de un intervalo refractario?",
        opciones: ["A) Modo VVI o DDD con lógica de sensado e inhibición", "B) Modo de estimulación asincrónica continua fija (VOO)", "C) Modo de alta frecuencia en ráfaga para taquicardias", "D) Estimulación por corriente alterna de 60 Hz"],
        respuestaCorrecta: 0,
        explicacion: "Los modos como VVI sensan la actividad ventricular intrínseca e inhiben el estímulo artificial para evitar la competencia eléctrica con el ritmo propio del paciente."
    },
    {
        id: 78,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Qué técnica de aislamiento galvánico se emplea comúnmente en interfaces de equipos médicos conectados a la red eléctrica para proteger al paciente de corrientes de fuga peligrosas?",
        opciones: ["A) Acopladores ópticos (optoacopladores) y transformadores de aislamiento", "B) Uniones mecánicas de soldadura de estaño", "C) Cables coaxiales de cobre sin blindaje", "D) Puentes de diodos rectificadores simples"],
        respuestaCorrecta: 0,
        explicacion: "Los optoacopladores transmiten señales mediante luz a través de una barrera dieléctrica, impidiendo cualquier conducción eléctrica directa entre el circuito de paciente y la red."
    },
    {
        id: 79,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "En instrumentación biomédica, ¿qué caracteriza a una fuente de corriente constante en comparación con una fuente de voltaje constante al medir impedancia bioeléctrica (BIA)?",
        opciones: ["A) Garantiza que la corriente inyectada a través del tejido sea independiente de las variaciones de impedancia de la piel y los electrodos", "B) Mantiene el voltaje idéntico a cero en todo momento", "C) Consume mayor potencia eléctrica que cualquier otro circuito", "D) Requiere baterías de plomo-ácido de alta capacidad"],
        respuestaCorrecta: 0,
        explicacion: "Inyectar una corriente constante asegura que el voltaje medido sea directamente proporcional a la impedancia del tejido según la ley de Ohm ($V = I \cdot Z$), sin importar la resistencia de contacto."
    },
    {
        id: 80,
        area: "Bioinstrumentación Avanzada y Sistemas Embebidos",
        pregunta: "¿Qué representa el ruido de cuantización en la conversión digital de señales biomédicas continuas?",
        opciones: ["A) El error introducido al redondear o truncar el valor continuo de voltaje al nivel discreto más cercano permitido por los bits del ADC", "B) La interferencia electromagnética de las lámparas de quirófano", "C) La variación térmica de los cables de conexión", "D) El desfase temporal introducido por los filtros digitales"],
        respuestaCorrecta: 0,
        explicacion: "El ruido de cuantización es la discrepancia inherente entre la señal analógica original y su representación digital escalonada debido a la resolución finita del ADC."
    },
    {
        id: 81,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Cuál es el objetivo principal del diseño y control cinemático en una órtesis activa o exoesqueleto robótico para rehabilitación de miembro inferior?",
        opciones: ["A) Asistir o replicar los patrones naturales de movimiento articular durante la marcha humana minimizando la fatiga del paciente", "B) Bloquear rígidamente la articulación para impedir cualquier movimiento definitivo", "C) Aplicar descargas eléctricas de alta potencia para estimular la contracción tetánica permanente", "D) Elevar la temperatura corporal local a niveles de hipertermia terapéutica"],
        respuestaCorrecta: 0,
        explicacion: "Los exoesqueletos y órtesis activas buscan asistir de manera fluida y ergonómica los grados de libertad de cadera, rodilla y tobillo para reeducar la marcha."
    },
    {
        id: 82,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Qué tecnología de interfaz cerebro-computadora (BCI) no invasiva se utiliza comúnmente para registrar actividad electroencefalográfica destinada al control de prótesis o sillas de ruedas robóticas?",
        opciones: ["A) Electrodos de EEG colocados en el cuero cabelludo (sistema 10-20)", "B) Microelectrodos de silicio penetrantes directamente en la corteza motora primaria", "C) Sondas ultrasónicas transcraneales", "D) Tomógrafos PET portátiles de cabeza"],
        respuestaCorrecta: 0,
        explicacion: "El registro de EEG mediante electrodos de superficie en el cuero cabelludo es la técnica no invasiva más extendida para sistemas BCI basados en ritmos mu/beta o potenciales evocados (P300)."
    },
    {
        id: 83,
        area: "Biomecánica y Rehabilitación",
        pregunta: "En la evaluación biomecánica del equilibrio postural, ¿qué plataforma se utiliza para medir el centro de presión (CoP) y sus desplazamientos durante las pruebas de estabilometría?",
        opciones: ["A) Plataforma de fuerza dinamométrica", "B) Dinamómetro manual hidráulico de mano", "C) Cinta métrica antropométrica de tensión", "D) Esfigmomanómetro aneroide de columna"],
        respuestaCorrecta: 0,
        explicacion: "Las plataformas de fuerza registran las componentes de las fuerzas de reacción del suelo, permitiendo calcular con precisión las coordenadas del centro de presión (CoP) en estudios de control postural."
    },
    {
        id: 84,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Qué modalidad terapéutica utiliza la aplicación de corrientes eléctricas superficiales a través de la piel para el alivio sintomático del dolor mediante la teoría de la compuerta (Gate Control Theory)?",
        opciones: ["A) Estimulación Nerviosa Eléctrica Transcutánea (TENS)", "B) Diatermia por ondas cortas de alta potencia", "C) Electroterapia de corriente galvánica continua para quemaduras", "D) Desfibrilación externa automatizada"],
        respuestaCorrecta: 0,
        explicacion: "El TENS estimula las fibras nerviosas aferentes de diámetro grueso (A-beta) para inhibir la transmisión de señales nociceptivas de dolor hacia el sistema nervioso central a nivel medular."
    },
    {
        id: 85,
        area: "Biomecánica y Rehabilitación",
        pregunta: "En el diseño de prótesis mioeléctricas de miembro superior, ¿cómo se procesan las señales electromiográficas de superficie (sEMG) obtenidas de los músculos residuales del muñón para accionar los motores de la mano artificial?",
        opciones: ["A) Mediante rectificación, filtrado de envolvente (valor eficaz o RMS) y umbralización para control proporcional o de posición", "B) Mediante transformada de Fourier para calcular la temperatura muscular", "C) Aplicando luz láser directa sobre las fibras musculares", "D) Midiendo la resistencia eléctrica estática en ohms sin amplificación"],
        respuestaCorrecta: 0,
        explicacion: "La señal sEMG se rectifica y se calcula su valor RMS (Root Mean Square) o envolvente para obtener un voltaje de control proporcional a la fuerza de contracción del usuario."
    },
    {
        id: 86,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Qué término biomecánico describe el momento de fuerza externo generado por la gravedad respecto a una articulación durante un ejercicio con pesas?",
        opciones: ["A) Momento de carga o torque externo (producto de la fuerza peso por el brazo de momento)", "B) Potencia metabólica basal", "C) Trabajo mecánico disipado en forma de calor", "D) Viscosidad cinemática del líquido sinovial"],
        respuestaCorrecta: 0,
        explicacion: "El torque externo es la fuerza gravitacional multiplicada por la distancia perpendicular desde la línea de acción de la fuerza hasta el centro articular."
    },
    {
        id: 87,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Cuál es el propósito de realizar un análisis cinemático tridimensional de la marcha en un laboratorio de biomecánica clínica?",
        opciones: ["A) Cuantificar con precisión los ángulos articulares, trayectorias y velocidades angulares de pelvis, cadera, rodilla y tobillo durante el ciclo de marcha", "B) Medir la presión arterial sistémica del paciente en reposo", "C) Analizar la composición química del líquido cefalorraquídeo", "D) Programar los parámetros de infusión de fármacos quimioterapéuticos"],
        respuestaCorrecta: 0,
        explicacion: "El análisis cinemático emplea sistemas optoelectrónicos de cámaras infrarrojas y marcadores reflectantes para evaluar espacial y temporalmente el movimiento humano patológico."
    },
    {
        id: 88,
        area: "Biomecánica y Rehabilitación",
        pregunta: "En la rehabilitación de pacientes con accidentes cerebrovasculares (ACV), ¿qué enfoque tecnológico ha demostrado promover la neuroplasticidad mediante la repetición intensiva de tareas motoras virtuales?",
        opciones: ["A) Sistemas de realidad virtual inmersiva y videojuegos interactivos de rehabilitación", "B) Aislamiento sensorial total en cámaras hiperbáricas oscuras", "C) Administración crónica de relajantes musculares farmacológicos", "D) Inmovilización enyesada prolongada de las extremidades pléjicas"],
        respuestaCorrecta: 0,
        explicacion: "La realidad virtual aplicada a la rehabilitación ofrece retroalimentación multisensorial y entornos interactivos que estimulan la reorganización cortical y la recuperación motora."
    },
    {
        id: 89,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Qué tipo de contracción muscular ocurre cuando un músculo genera tensión mientras se acorta activamente contra una resistencia?",
        opciones: ["A) Contracción concéntrica", "B) Contracción excéntrica", "C) Contracción isométrica estática", "D) Contracción auxotónica sin desplazamiento"],
        respuestaCorrecta: 0,
        explicacion: "Durante una contracción concéntrica, los sarcómeros se acortan mientras generan un momento de fuerza superior a la resistencia externa."
    },
    {
        id: 90,
        area: "Biomecánica y Rehabilitación",
        pregunta: "¿Cuál es la función biomecánica principal de la rótula (patela) en el aparato extensor de la rodilla?",
        opciones: ["A) Incrementar el brazo de momento del tendón del cuádriceps, aumentando la eficiencia mecánica del torque extensor", "B) Actuar como un amortiguador hidráulico de impactos directos", "C) Limitar totalmente la flexión de la rodilla a los 90 grados", "D) Conectar directamente el fémur con la fíbula"],
        respuestaCorrecta: 0,
        explicacion: "La rótula desplaza el tendón del cuádriceps alejándolos del centro de rotación de la rodilla, incrementando el brazo de palanca y la eficacia de la fuerza de extensión."
    },
    {
        id: 91,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "En el modelado matemático del potencial de acción cardíaco (como el modelo de Hodgkin-Huxley o variantes ventriculares de Luo-Rudy), ¿qué representan las variables de compuerta (gating variables)?",
        opciones: ["A) La probabilidad de que los canales iónicos dependientes de voltaje se encuentren en estado abierto o cerrado", "B) La temperatura absoluta del tejido miocárdico en Kelvin", "C) El flujo volumétrico de sangre a través de las arterias coronarias", "D) La concentración osmolar plasmática de sodio"],
        respuestaCorrecta: 0,
        explicacion: "Las variables de compuerta describen cinéticamente la apertura y cierre probabilístico de los canales iónicos de membrana en función del voltaje y el tiempo."
    },
    {
        id: 92,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "¿Qué describe el modelo circulatorio de 'Windkessel' de dos elementos (resistencia y adaptancia/complianza) en hemodinámica?",
        opciones: ["A) El comportamiento elástico y resistivo de las grandes arterias sistémicas para amortiguar el flujo pulsátil del corazón convirtiéndolo en un flujo más continuo", "B) La dinámica de intercambio gaseoso alveolar en los pulmones", "C) La filtración glomerular renal en las nefronas", "D) La conducción eléctrica puramente pasiva en los axones neuronales"],
        respuestaCorrecta: 0,
        explicacion: "El modelo Windkessel simula cómo la distensibilidad aórtica almacena energía durante la sístole y la libera durante la diástole, manteniendo la perfusión tisular continua."
    },
    {
        id: 93,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "En farmacocinética, ¿qué representa un modelo bicompartimental frente a un modelo monocompartimental?",
        opciones: ["A) Que el fármaco se distribuye a una velocidad diferente entre el compartimento central (sangre y órganos bien irrigados) y un compartimento periférico (tejidos menos irrigados)", "B) Que el medicamento tiene dos principios activos distintos", "C) Que el fármaco se administra exclusivamente por vía oral y tópica simultáneamente", "D) Que la eliminación ocurre únicamente a través del sistema respiratorio"],
        respuestaCorrecta: 0,
        explicacion: "El modelo bicompartimental asume que el cuerpo se divide en dos zonas con distintas tasas de distribución y equilibrio del fármaco administrado."
    },
    {
        id: 94,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "¿Qué ley de la termodinámica o química describe la difusión pasiva de solutos a través de una membrana biológica semipermeable en función de un gradiente de concentración?",
        opciones: ["A) Primera y Segunda Ley de Fick de la difusión", "B) Ley de los gases ideales de Boyle-Mariotte", "C) Ley de Coulomb electrostática", "D) Ley de Stefan-Boltzmann de radiación térmica"],
        respuestaCorrecta: 0,
        explicacion: "Las Leyes de Fick relacionan el flujo difusivo de masa con el gradiente de concentración espacial y el coeficiente de difusión del soluto en el medio."
    },
    {
        id: 95,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "En el modelado del sistema respiratorio, ¿qué representa la elastancia pulmonar (recíproco de la distensibilidad o compliance)?",
        opciones: ["A) La presión requerida para generar un cambio unitario en el volumen pulmonar ($\Delta P / \Delta V$)", "B) La resistencia viscosa al flujo de aire en la tráquea", "C) El volumen residual máximo al final de una espiración forzada", "D) La velocidad de difusión del monóxido de carbono en los capilares"],
        respuestaCorrecta: 0,
        explicacion: "La elastancia mide la rigidez del sistema respiratorio, calculándose como el incremento de presión necesario para producir un cambio determinado en el volumen pulmonar."
    },
    {
        id: 96,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "¿Qué herramienta computacional se utiliza habitualmente para resolver sistemas de ecuaciones diferenciales ordinarias (EDO) que simulan redes de regulación génica o cinética enzimática en biología de sistemas?",
        opciones: ["A) Entornos como MATLAB / Simulink o Python (bibliotecas SciPy / NumPy)", "B) Editores de texto plano sin procesamiento numérico", "C) Hojas de cálculo básicas sin capacidad iterativa", "D) Programas de diseño vectorial bidimensional"],
        respuestaCorrecta: 0,
        explicacion: "MATLAB/Simulink y Python son estándares en ingeniería biomédica para la simulación numérica y resolución de modelos dinámicos basados en ecuaciones diferenciales."
    },
    {
        id: 97,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "En la modelación del sistema nervioso, ¿qué describe el modelo de neurona de leaky integrate-and-fire (LIF)?",
        opciones: ["A) Un modelo simplificado donde el voltaje de membrana integra corrientes de entrada como un circuito RC con fuga, disparando un potencial de acción cuando se alcanza un umbral", "B) La simulación exacta biofísica de 100 canales iónicos dependientes de compuertas moleculares complejas", "C) La propagación mecánica de ondas de presión en el líquido cefalorraquídeo", "D) El metabolismo energético de la glucosa glial en astrocitos"],
        respuestaCorrecta: 0,
        explicacion: "El modelo LIF es una abstracción matemática computacionalmente eficiente que simula el comportamiento de integración y disparo neuronal sin modelar canales iónicos detallados."
    },
    {
        id: 98,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "¿Qué principio rige la medición del gasto cardíaco mediante la técnica de termodilución utilizando un catéter de Swan-Ganz?",
        opciones: ["A) El principio de Stewart-Hamilton basado en la conservación de la masa del indicador térmico inyectado", "B) El efecto Doppler ultrasónico en la aorta ascendente", "C) La ley de Ohm aplicada a la resistencia vascular periférica total", "D) La espectroscopia infrarroja de absorción transcutánea"],
        respuestaCorrecta: 0,
        explicacion: "El principio de Stewart-Hamilton calcula el caudal circulatorio midiendo el cambio de temperatura en la sangre tras la inyección de un bolo de solución fría a una distancia conocida."
    },
    {
        id: 99,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "En fisiología renal, ¿cómo se modela matemáticamente el aclaramiento renal (clearance) de una sustancia filtrada por los glomérulos?",
        opciones: ["A) Como el cociente entre la concentración urinaria de la sustancia multiplicada por el flujo urinario, dividido por la concentración plasmática ($C = (U \cdot V) / P$)", "B) Como la suma algebraica de la presión arterial media y la presión venosa central", "C) Como el producto del volumen sistólico por la frecuencia cardíaca", "D) Como la resistencia eléctrica transrenal en kilohms"],
        respuestaCorrecta: 0,
        explicacion: "El clearance renal cuantifica la eficacia con la que los riñones depuran una sustancia del plasma sanguíneo por unidad de tiempo."
    },
    {
        id: 100,
        area: "Simulación y Modelado de Sistemas Fisiológicos",
        pregunta: "¿Qué representa la constante de tiempo ($\tau = R \cdot C$) en un modelo circulatorio o eléctrico de una membrana celular o vaso sanguíneo?",
        opciones: ["A) El tiempo necesario para que la respuesta del sistema alcance aproximadamente el 63% de su valor final ante un escalón de entrada", "B) El tiempo total de vida útil biológica del órgano simulado", "C) La frecuencia de resonancia máxima del transductor", "D) El retraso absoluto en milisegundos de la propagación del impulso nervioso sin atenuación"],
        respuestaCorrecta: 0,
        explicacion: "La constante de tiempo $\tau$ caracteriza la velocidad de respuesta transitoria de sistemas de primer orden compuestos por resistencia y capacitancia."
    },
    {
        id: 101,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Cuál es el propósito fundamental de los Comités de Ética en Investigación y de Bioética en los hospitales e instituciones que desarrollan proyectos de ingeniería biomédica?",
        opciones: ["A) Proteger la dignidad, derechos, seguridad y bienestar de los sujetos humanos participantes en protocolos experimentales y clínicos", "B) Reducir los costos de adquisición de insumos médicos en un 50%", "C) Aprobar la comercialización masiva de patentes sin necesidad de pruebas regulatorias", "D) Determinar los sueldos del personal de ingeniería clínica"],
        respuestaCorrecta: 0,
        explicacion: "Los comités de ética velan por el cumplimiento de los principios bioéticos universales y salvaguardan a los pacientes y voluntarios en la investigación clínica."
    },
    {
        id: 102,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "Según la clasificación regulatoria internacional de dispositivos médicos (ej. FDA y normativas globales), ¿en qué categoría se ubican aquellos dispositivos de bajo a moderado riesgo que requieren controles generales y especiales (como jeringas, termómetros electrónicos o sillas de ruedas)?",
        opciones: ["A) Clase I y Clase II", "B) Clase III (alto riesgo invasivo crítico)", "C) Dispositivos experimentales no regulados", "D) Productos farmacéuticos de síntesis química"],
        respuestaCorrecta: 0,
        explicacion: "La Clase I abarca bajo riesgo (controles generales) y la Clase II riesgo moderado (controles especiales y normativas de desempeño), a diferencia de la Clase III (soportes vitales o implantes)."
    },
    {
        id: 103,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Qué protege legalmente una patente de invención otorgada a un nuevo diseño de dispositivo médico innovador?",
        opciones: ["A) El derecho exclusivo de explotación comercial e industrial de la invención por un periodo determinado (generalmente 20 años)", "B) El derecho a cambiar el nombre del producto en cualquier momento sin registrarlo", "C) La prohibición absoluta de que otros ingenieros estudien el funcionamiento técnico", "D) La exención total de impuestos fiscales corporativos de por vida"],
        respuestaCorrecta: 0,
        explicacion: "Una patente otorga al inventor el monopolio temporal de explotación comercial a cambio de hacer pública la descripción técnica detallada de la innovación."
    },
    {
        id: 104,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "En el contexto de la ciberseguridad en dispositivos médicos conectados a internet (IoMT / IoHT), ¿cuál es una vulnerabilidad crítica que los ingenieros deben mitigar en bombas de infusión o marcapasos con telemetría?",
        opciones: ["A) El acceso no autorizado y la manipulación remota maliciosa de los parámetros de programación del dispositivo", "B) El desgaste mecánico de los botones de plástico de la carcasa", "C) La decoloración de la pantalla LCD por exposición solar", "D) El incremento del peso físico del equipo por exceso de código de software"],
        respuestaCorrecta: 0,
        explicacion: "La ciberseguridad médica protege los equipos conectados contra accesos remotos indebidos que puedan comprometer la terapia del paciente o la privacidad de sus datos."
    },
    {
        id: 105,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Qué principio bioético exige que los beneficios de una nueva tecnología médica o tratamiento experimental se distribuyan equitativamente entre la sociedad sin discriminación?",
        opciones: ["A) Justicia", "B) Autonomía", "C) Beneficencia", "D) No maleficencia"],
        respuestaCorrecta: 0,
        explicacion: "El principio de justicia en bioética médica demanda equidad en la distribución de cargas, riesgos y beneficios de la atención y la innovación en salud."
    },
    {
        id: 106,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Qué documento o proceso legal es indispensable obtener de un paciente antes de someterlo a un procedimiento clínico invasivo o a un protocolo de investigación con dispositivos experimentales?",
        opciones: ["A) Consentimiento Informado (Informed Consent)", "B) Póliza de seguro de vida de cobertura total", "C) Contrato de arrendamiento del equipo médico", "D) Receta médica de medicamentos controlados"],
        respuestaCorrecta: 0,
        explicacion: "El consentimiento informado es el proceso ético y legal mediante el cual el paciente, tras comprender los riesgos y beneficios, autoriza libremente su participación o procedimiento."
    },
    {
        id: 107,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "En el ciclo de desarrollo de productos médicos (Medical Device Development), ¿qué etapa sigue inmediatamente después de la validación y verificación del diseño (DHF - Design History File)?",
        opciones: ["A) La transferencia a manufactura y preparación del expediente maestro del dispositivo (DMR / Master Record)", "B) El reciclaje inmediato de los prototipos por obsolescencia", "C) La eliminación de los registros de ingeniería para evitar auditorías", "D) La venta directa al público sin registro sanitario"],
        respuestaCorrecta: 0,
        explicacion: "Una vez verificado y validado el diseño, se realiza la transferencia a producción (manufacturing transfer) para asegurar que se pueda fabricar consistentemente bajo especificaciones."
    },
    {
        id: 108,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Qué norma internacional específica establece los requisitos generales para la seguridad básica y el rendimiento esencial de los equipos electromédicos?",
        opciones: ["A) IEC 60601-1", "B) ISO 14001", "C) IEEE 802.3", "D) ISO 27001"],
        respuestaCorrecta: 0,
        explicacion: "La serie de normas IEC 60601-1 es el estándar mundial de cumplimiento obligatorio para garantizar la seguridad eléctrica, mecánica y funcional de los equipos electromédicos."
    },
    {
        id: 109,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "En la transferencia tecnológica y comercialización de un nuevo dispositivo médico, ¿qué significa el análisis de viabilidad de mercado (Market Fit)?",
        opciones: ["A) Comprobar si la solución tecnológica desarrollada resuelve una necesidad clínica real y insatisfecha con demanda económica viable", "B) Calcular el peso en kilogramos del dispositivo para su envío postal", "C) Verificar el voltaje de alimentación de la red eléctrica local", "D) Determinar el color corporativo del logotipo institucional"],
        respuestaCorrecta: 0,
        explicacion: "El Product-Market Fit evalúa si el producto médico aporta un valor real al sector salud y si existe un mercado dispuesto a adoptarlo y financiarlo."
    },
    {
        id: 110,
        area: "Innovación, Ética y Regulación en Ingeniería Biomédica",
        pregunta: "¿Qué implica el concepto de 'Diseño Inclusivo o Accesible' (Universal Design) en la ingeniería biomédica de productos de asistencia?",
        opciones: ["A) Diseñar dispositivos y tecnologías que puedan ser utilizados por la mayor cantidad posible de personas, independientemente de su edad, capacidad o discapacidad, sin adaptaciones especiales", "B) Fabricar un equipo exclusivo para un solo paciente en el mundo", "C) Reducir la calidad de los materiales para abaratar costos de producción", "D) Ocultar las instrucciones de uso para evitar que el paciente las lea"],
        respuestaCorrecta: 0,
        explicacion: "El diseño universal busca la accesibilidad global y la facilidad de uso para usuarios con diversas capacidades funcionales, promoviendo la inclusión."
    },
    {
        id: 111,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "En el análisis de datos biomédicos, ¿qué prueba estadística paramétrica se utiliza para comparar las medias de dos grupos independientes cuando los datos siguen una distribución normal?",
        opciones: ["A) Prueba t de Student para muestras independientes", "B) Prueba de suma de rangos de Wilcoxon no paramétrica", "C) Coeficiente de correlación de rangos de Spearman", "D) Prueba exacta de Fisher para tablas de contingencia"],
        respuestaCorrecta: 0,
        explicacion: "La prueba t de Student evalúa si las medias de dos poblaciones independientes difieren significativamente entre sí bajo el supuesto de normalidad y homocedasticidad."
    },
    {
        id: 112,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "¿Qué representa el valor de p (p-value) en una prueba de hipótesis estadística aplicada a un estudio clínico de un nuevo sensor biomédico?",
        opciones: ["A) La probabilidad de observar un resultado al menos tan extremo como el encontrado, suponiendo que la hipótesis nula sea verdadera", "B) El porcentaje de errores de fabricación en la línea de montaje", "C) La precisión milimétrica del instrumento de medición", "D) La probabilidad de que el paciente se cure sin tratamiento"],
        respuestaCorrecta: 0,
        explicacion: "El p-value cuantifica la compatibilidad de los datos observados con la hipótesis nula; un valor menor al umbral alfa (ej. 0.05) conduce al rechazo de la misma."
    },
    {
        id: 113,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "En la modelación de sistemas dinámicos biomédicos lineales e invariantes en el tiempo (LTI), ¿qué describe la función de transferencia en el dominio de Laplace ($s$)?",
        opciones: ["A) El cociente entre la transformada de Laplace de la salida y la transformada de Laplace de la entrada con condiciones iniciales nulas", "B) La derivada espacial de la imagen DICOM", "C) La integral temporal de la corriente de fuga del transformador", "D) La matriz de covarianza de las variables antropométricas"],
        respuestaCorrecta: 0,
        explicacion: "La función de transferencia $H(s) = Y(s)/X(s)$ caracteriza completamente la dinámica entrada-salida de un sistema lineal en el dominio complejo de Laplace."
    },
    {
        id: 114,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "¿Qué método numérico se emplea comúnmente para resolver sistemas de ecuaciones algebraicas lineales que surgen en el análisis de elementos finitos (FEM) aplicados a estructuras óseas u órganos?",
        opciones: ["A) Eliminación de Gauss-Jordan o métodos iterativos como Gradiente Conjugado", "B) Regla trapezoidal simple de integración numérica", "C) Interpolación lineal gráfica a mano alzada", "D) Método de bisección de raíces polinómicas de grado uno"],
        respuestaCorrecta: 0,
        explicacion: "Los modelos de elementos finitos generan matrices de rigidez gigantescas que se resuelven eficientemente mediante métodos matriciales como eliminación gaussiana o algoritmos de gradiente conjugado."
    },
    {
        id: 115,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "En la validación de una nueva prueba diagnóstica biomédica, ¿cómo se define la Sensibilidad diagnóstica?",
        opciones: ["A) La probabilidad de que la prueba arroje un resultado positivo en pacientes que realmente tienen la enfermedad (verdaderos positivos / enfermos totales)", "B) La probabilidad de que un resultado negativo sea verdaderamente sano", "C) La proporción de falsos positivos en la población general", "D) La correlación lineal entre la temperatura y la presión arterial"],
        respuestaCorrecta: 0,
        explicacion: "La sensibilidad mide la capacidad de la prueba para detectar correctamente a los verdaderos enfermos (tasa de verdaderos positivos)."
    },
    {
        id: 116,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "¿Qué evalúa la Especificidad diagnóstica de un instrumento o prueba clínica de laboratorio?",
        opciones: ["A) La capacidad de la prueba para identificar correctamente a los sujetos sanos que no tienen la condición (verdaderos negativos / sanos totales)", "B) La capacidad de detectar el 100% de los casos severos", "C) El tiempo en segundos que tarda en procesar la muestra", "D) La resistencia eléctrica del electrodo de referencia"],
        respuestaCorrecta: 0,
        explicacion: "La especificidad mide la proporción de personas sin la enfermedad que obtienen un resultado negativo (tasa de verdaderos negativos)."
    },
    {
        id: 117,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "En el análisis de series temporales fisiológicas, ¿qué métrica evalúa el grado de asociación lineal entre dos señales biomédicas desfasadas en el tiempo?",
        opciones: ["A) Función de correlación cruzada (Cross-correlation)", "B) Varianza ponderada espacial", "C) Divergencia de Kullback-Leibler", "D) Transformada discreta del coseno"],
        respuestaCorrecta: 0,
        explicacion: "La correlación cruzada mide la similitud entre dos series temporales en función de un desplazamiento temporal relativo entre ambas."
    },
    {
        id: 118,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "¿Qué método de optimización matemática se utiliza para encontrar los parámetros de un modelo fisiológico que minimicen la suma de los errores cuadráticos entre la simulación y los datos experimentales reales?",
        opciones: ["A) Algoritmos de mínimos cuadrados (Least Squares fitting / Levenberg-Marquardt)", "B) Generación de números aleatorios uniformes", "C) Derivación numérica por diferencias hacia atrás", "D) Integración de Riemann con partición infinita"],
        respuestaCorrecta: 0,
        explicacion: "El ajuste por mínimos cuadrados minimiza la función de costo basada en la suma de los residuos al cuadrado, siendo el estándar en identificación de sistemas."
    },
    {
        id: 119,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "En el diseño experimental de un estudio de ingeniería biomédica, ¿qué significa 'cegamiento' (blinding) para evitar sesgos?",
        opciones: ["A) Ocultar la asignación de la intervención (terapia o dispositivo vs control) a los pacientes, evaluadores o estadísticos", "B) Apagar las luces del laboratorio durante la medición", "C) Utilizar sensores opacos a la luz infrarroja", "D) Eliminar los registros numéricos del archivo digital"],
        respuestaCorrecta: 0,
        explicacion: "El cegamiento (simple, doble o triple) previene sesgos conscientes o inconscientes en la evaluación de los resultados experimentales."
    },
    {
        id: 120,
        area: "Sección Transversal: Metodología y Matemáticas Aplicadas",
        pregunta: "¿Qué representa el área bajo la curva COR o ROC (Receiver Operating Characteristic) al evaluar el desempeño de un clasificador diagnóstico computarizado?",
        opciones: ["A) La capacidad discriminativa global de la prueba para distinguir entre pacientes enfermos y sanos (varía de 0.5 a 1.0)", "B) El consumo total de energía en watts del microprocesador", "C) La velocidad de transmisión de paquetes de datos en el PACS", "D) El porcentaje de rechazo de lotes en manufactura"],
        respuestaCorrecta: 0,
        explicacion: "El área bajo la curva ROC (AUC) resume el rendimiento de una prueba diagnóstica evaluando su sensibilidad frente a 1-especificidad en todos los umbrales posibles."
    }
];