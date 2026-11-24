const bancoPreguntas = [
    {
        "id": 1,
        "area": "Bioprocesos",
        "pregunta": "¿Cuál es el parámetro cinético que describe la velocidad máxima de consumo de sustrato por unidad de biomasa en un sistema microbiano?",
        "opciones": [
            "A) Velocidad específica de crecimiento (mu)",
            "B) Coeficiente de rendimiento (Y_X/S)",
            "C) Constante de saturación (Ks)",
            "D) Velocidad específica máxima de consumo de sustrato (q_max)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La velocidad específica de consumo de sustrato (q) relaciona el consumo de sustrato por unidad de biomasa y tiempo, siendo q_max su valor máximo bajo condiciones no limitantes."
    },
    {
        "id": 2,
        "area": "Bioprocesos",
        "pregunta": "En un biorreactor operado en modo fed-batch, ¿cuál es el objetivo principal de alimentar el sustrato limitante de manera controlada?",
        "opciones": [
            "A) Incrementar la concentración de oxígeno disuelto de forma automática",
            "B) Evitar la inhibición por exceso de sustrato y controlar la velocidad de crecimiento",
            "C) Disminuir la formación de biomasa y maximizar la fase de rezagamiento",
            "D) Mantener el volumen del reactor constante"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El cultivo fed-batch permite evitar efectos inhibitorios como el efecto Crabtree o la represión catabólica manteniendo concentraciones bajas pero constantes de sustrato."
    },
    {
        "id": 3,
        "area": "Bioprocesos",
        "pregunta": "¿Qué representa el coeficiente volumétrico de transferencia de oxígeno (kLa) en la operación de un biorreactor aerobio?",
        "opciones": [
            "A) La demanda metabólica de oxígeno por parte de la biomasa",
            "B) La solubilidad máxima del oxígeno en el medio de cultivo",
            "C) La capacidad del sistema para transferir oxígeno del gas al medio líquido por unidad de tiempo",
            "D) La velocidad de agitación crítica para evitar la formación de vórtices"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El kLa es un parámetro global que mide la eficiencia de transferencia de masa de oxígeno, fundamental para el diseño y escalado de procesos aerobios."
    },
    {
        "id": 4,
        "area": "Bioprocesos",
        "pregunta": "Durante el escalado de un biorreactor, ¿cuál criterio se selecciona comúnmente para mantener la similitud geométrica y dinámica si el proceso es estrictamente aerobio y limitado por transferencia de oxígeno?",
        "opciones": [
            "A) Mantener constante el tiempo de residencia hidráulico",
            "B) Mantener constante el número de Reynolds del impulsor",
            "C) Mantener constante la velocidad tangencial de las paletas",
            "D) Mantener constante la potencia disipada por unidad de volumen (P/V) o el kLa"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Para microorganismos aerobios, asegurar una capacidad equivalente de transferencia de oxígeno mediante P/V o kLa es el criterio estándar de escalado."
    },
    {
        "id": 5,
        "area": "Bioprocesos",
        "pregunta": "¿Qué tipo de esterilización térmica industrial se prefiere comúnmente para medios de cultivo líquidos termosensibles a gran escala?",
        "opciones": [
            "A) Esterilización continua mediante intercambiadores de calor de placas o tubulares",
            "B) Adición de agentes químicos como óxido de etileno",
            "C) Filtración esterilizante por membrana de 0.22 micrometros",
            "D) Esterilización discontinua por lotes en el mismo biorreactor"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La esterilización continua somete al medio a temperaturas ultra altas (UHT) por tiempos muy cortos, reduciendo la degradación térmica de nutrientes sensibles."
    },
    {
        "id": 6,
        "area": "Bioprocesos",
        "pregunta": "En la ecuación de Monod, ¿qué significa físicamente la constante de saturación (Ks)?",
        "opciones": [
            "A) La concentración de sustrato a la cual la velocidad específica de crecimiento es igual a la mitad de la máxima (mu_max / 2)",
            "B) El tiempo requerido para duplicar la población microbiana",
            "C) La concentración de biomasa a la cual la velocidad de crecimiento es máxima",
            "D) El rendimiento máximo de conversión de sustrato en producto"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Ks es una medida de la afinidad del microorganismo por el sustrato; un valor bajo indica alta afinidad."
    },
    {
        "id": 7,
        "area": "Bioprocesos",
        "pregunta": "¿Cuál es la función principal de los deflectores (baffles) en un biorreactor agitado mecánicamente?",
        "opciones": [
            "A) Evitar la formación de un vórtice central y mejorar la mezcla y turbulencia",
            "B) Reducir el consumo de potencia del motor disminuyendo la fricción",
            "C) Permitir la entrada estéril de aire comprimido al fondo del tanque",
            "D) Incrementar la transferencia de calor hacia las paredes del reactor"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los deflectores rompen el flujo rotacional tangencial del líquido, convirtiéndolo en flujo axial y radial para mejorar la mezcla."
    },
    {
        "id": 8,
        "area": "Bioprocesos",
        "pregunta": "En un proceso de fermentación, ¿cómo se clasifica un producto cuyo metabolito se sintetiza simultáneamente con el crecimiento celular durante la fase exponencial?",
        "opciones": [
            "A) Metabolito primario asociado al crecimiento",
            "B) Metabolito xenobiótico",
            "C) Metabolito secundario",
            "D) Metabolito no asociado al crecimiento"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los metabolitos primarios asociados al crecimiento (como el etanol o el ácido láctico) tienen una cinética acoplada a la formación de biomasa (tipo Luedeking-Piret)."
    },
    {
        "id": 9,
        "area": "Bioprocesos",
        "pregunta": "¿Qué instrumento se utiliza comúnmente para medir la biomasa de forma indirecta y en línea durante un bioproceso?",
        "opciones": [
            "A) Espectrofotómetro UV-Vis de doble haz",
            "B) Sonda de capacitancia o impedancia dieléctrica",
            "C) Cromatógrafo de gases acoplado a masas",
            "D) Balanza analítica de precisión"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las sondas de capacitancia miden las propiedades dieléctricas de las células vivas con membranas intactas, permitiendo estimar biomasa viva en línea."
    },
    {
        "id": 10,
        "area": "Bioprocesos",
        "pregunta": "¿Cuál es el principal inconveniente de utilizar un impulsor tipo Rushton (turbina de disco con álabes planos) en cultivos de células animales sensibles al cizallamiento?",
        "opciones": [
            "A) Baja capacidad de dispersión de aire",
            "B) Incapacidad para operar en régimen turbulento",
            "C) Alto esfuerzo de cizallamiento (shear stress) que provoca lisis celular",
            "D) Excesiva formación de espuma insoluble"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las turbinas Rushton generan altas tasas de cizallamiento y fuerzas de corte perjudiciales para células sin pared celular, por lo que se prefieren impulsores marinos o de paletas helicoidales."
    },
    {
        "id": 11,
        "area": "Bioprocesos",
        "pregunta": "En la esterilización por calor húmedo, ¿qué representa el valor D (tiempo de reducción decimal)?",
        "opciones": [
            "A) La temperatura requerida para reducir la población a la mitad en un minuto",
            "B) El tiempo total de retención en un esterilizador continuo",
            "C) El número de ciclos térmicos necesarios para la esterilidad absoluta",
            "D) El tiempo necesario a una temperatura dada para destruir el 90% de la población microbiana"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El valor D es un parámetro cinético de resistencia térmica que indica el tiempo para disminuir una década logarítmica la viabilidad microbiana."
    },
    {
        "id": 12,
        "area": "Bioprocesos",
        "pregunta": "¿Qué describe el valor Z en los estudios de esterilización térmica?",
        "opciones": [
            "A) La concentración letal de vapor por unidad de volumen",
            "B) El incremento de temperatura necesario para reducir el valor D a la décima parte",
            "C) La presión interna requerida en el autoclave para alcanzar vapor saturado",
            "D) El gradiente de temperatura entre el núcleo y la periferia del medio"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El valor Z es el cambio de temperatura necesario para que la curva de resistencia térmica (valor D) se desplace un factor logarítmico."
    },
    {
        "id": 13,
        "area": "Bioprocesos",
        "pregunta": "En un proceso de fermentación alcohólica continua con retención celular (reciclaje mediante membranas), ¿qué se logra principalmente?",
        "opciones": [
            "A) Operar a tasas de dilución superiores a la velocidad máxima de crecimiento (mu_max) sin lavado celular (washout)",
            "B) Inhibir totalmente la formación de subproductos como glicerol",
            "C) Disminuir la productividad volumétrica del reactor",
            "D) Reducir la concentración de sustrato de alimentación a cero"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El reciclaje de células desacopla la tasa de dilución del sistema de la velocidad específica de crecimiento, permitiendo altas concentraciones celulares y altas productividades."
    },
    {
        "id": 14,
        "area": "Bioprocesos",
        "pregunta": "¿Cuál es el propósito de aplicar un coeficiente de transferencia de calor (U) en el diseño de las chaquetas o serpentines de enfriamiento de un biorreactor?",
        "opciones": [
            "A) Calcular la cantidad de aire estéril requerido por minuto",
            "B) Estimar y dimensionar la tasa de remoción del calor metabólico generado por los microorganismos",
            "C) Evaluar la resistencia mecánica del acero inoxidable ante la presión",
            "D) Determinar la velocidad máxima de agitación sin cavitación"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El metabolismo microbiano genera calor significativo que debe ser removido continuamente para mantener la temperatura óptima de fermentación."
    },
    {
        "id": 15,
        "area": "Bioprocesos",
        "pregunta": "En la aireación de un biorreactor, ¿cómo afecta el incremento de la presión hidrostática y de operación (presión de cabezal) al coeficiente kLa?",
        "opciones": [
            "A) Aumenta la fuerza impulsora (concentración de saturación) y puede incrementar la transferencia global de oxígeno",
            "B) No tiene ningún efecto sobre la transferencia de masa gas-líquido",
            "C) Provoca la coalescencia inmediata de las burbujas de aire",
            "D) Disminuye la solubilidad del oxígeno y reduce el kLa"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "A mayor presión, mayor es la solubilidad del oxígeno según la ley de Henry, lo que incrementa el gradiente de concentración que impulsa la transferencia de masa."
    },
    {
        "id": 16,
        "area": "Bioprocesos",
        "pregunta": "¿Qué técnica de medición se emplea típicamente para determinar la concentración de oxígeno disuelto (OD) en un medio de cultivo líquido?",
        "opciones": [
            "A) Electrodo polarográfico o sensor óptico basado en fluorescencia (luminiscencia)",
            "B) Electrodo de vidrio de pH",
            "C) Conductimetría de alta frecuencia",
            "D) Refractometría de Abbe"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los sensores polarográficos (Clark) o basados en extinción de fluorescencia óptica son los estándares industriales para la medición en línea de oxígeno disuelto."
    },
    {
        "id": 17,
        "area": "Bioprocesos",
        "pregunta": "En un cultivo discontinuo (batch), ¿en qué fase se observa el valor máximo de la velocidad específica de crecimiento (mu)?",
        "opciones": [
            "A) Fase estacionaria",
            "B) Fase exponencial o logarítmica",
            "C) Fase de muerte celular",
            "D) Fase de rezagamiento o adaptativa (lag)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Durante la fase exponencial, las células crecen a su máxima velocidad fisiológica bajo las condiciones ambientales dadas y sin limitaciones nutricionales."
    },
    {
        "id": 18,
        "area": "Bioprocesos",
        "pregunta": "¿Cuál es el objetivo de medir el cociente respiratorio (RQ, Respiratory Quotient) en el gas de salida de un biorreactor?",
        "opciones": [
            "A) Controlar el pH del medio sin necesidad de adición de ácidos",
            "B) Calcular la presión osmótica interna del caldo de fermentación",
            "C) Monitorear la relación entre moles de CO2 producidos y moles de O2 consumidos, indicando el estado metabólico",
            "D) Estimar de forma directa la masa total de proteínas recombinantes secretadas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El RQ (moles CO2 out / moles O2 in) varía según la ruta metabólica utilizada (oxidación de carbohidratos vs. lípidos), sirviendo como herramienta de monitoreo metabólico."
    },
    {
        "id": 19,
        "area": "Bioprocesos",
        "pregunta": "¿Qué caracteriza a un fluido de fermentación no newtoniano de tipo pseudoplástico?",
        "opciones": [
            "A) Su viscosidad aparente disminuye al aumentar la velocidad de cizallamiento (shear-thinning)",
            "B) Presenta un esfuerzo umbral de cedencia (yield stress) antes de fluir",
            "C) Su viscosidad permanece constante independientemente de la agitación",
            "D) Su viscosidad aparente aumenta al incrementar la velocidad de cizallamiento (shear-thickening)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Muchos caldos de fermentación de hongos filamentosos o polímeros extracelulares son pseudoplásticos, reduciendo su viscosidad conforme aumenta la agitación."
    },
    {
        "id": 20,
        "area": "Bioprocesos",
        "pregunta": "En el diseño de procesos biotecnológicos, ¿qué define el concepto de 'esterilidad industrial'?",
        "opciones": [
            "A) La eliminación de virus pero no de esporas bacterianas",
            "B) La probabilidad de supervivencia de un microorganismo contaminante menor a un valor aceptable (por ejemplo, SAL de 10^-6)",
            "C) La ausencia total de oxígeno en el tanque de cultivo",
            "D) La destrucción absoluta del 100% de las moléculas orgánicas del medio"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En la práctica industrial, la esterilidad se define probabilísticamente mediante el Nivel de Aseguramiento de Esterilidad (SAL, Sterility Assurance Level)."
    },
    {
        "id": 21,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es la función principal de la enzima transcriptasa inversa en la construcción de una biblioteca de ADNc?",
        "opciones": [
            "A) Sintetizar ADN a partir de una plantilla de ARN mensajero",
            "B) Degradar el ARN sobrante tras la transcripción in vitro",
            "C) Unir fragmentos de ADN mediante enlaces fosfodiéster con gasto de ATP",
            "D) Cortar secuencias específicas de ADN en sitios palindrómicos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La transcriptasa inversa (de retrovirus) cataliza la síntesis de ADN complementario (ADNc) utilizando como molde moléculas de ARNm maduro."
    },
    {
        "id": 22,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la técnica de Reacción en Cadena de la Polimerasa (PCR), ¿cuál es la función de la etapa de alineamiento (annealing)?",
        "opciones": [
            "A) Permitir que los cebadores (primers) se hibriden específicamente con las secuencias complementarias en el ADN molde",
            "B) Extender la cadena de ADN mediante la actividad de polimerasa a 72 °C",
            "C) Denaturar las hebras dobles de ADN a 95 °C",
            "D) Precipitar el ADN amplificado utilizando etanol absoluto"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Durante el alineamiento, la temperatura se reduce (típicamente entre 50-65 °C) para permitir la unión específica de los oligonucleótidos cebadores al ADN."
    },
    {
        "id": 23,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué característica enzimática distingue a la ADN polimerasa Taq utilizada en PCR convencional?",
        "opciones": [
            "A) Es inhibida irreversiblemente por los iones de magnesio",
            "B) Posee actividad exonucleasa de corrección de pruebas 3'->5'",
            "C) Es termoestable, soportando temperaturas elevadas durante la desnaturalización",
            "D) Requiere una temperatura óptima de acción de 37 °C"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Obtenida de Thermus aquaticus, la Taq polimerasa resiste los ciclos repetidos a 95 °C, aunque carece de actividad de corrección de pruebas (proofreading)."
    },
    {
        "id": 24,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es el fundamento de la técnica de electroforesis en gel de agarosa para la separación de ácidos nucleicos?",
        "opciones": [
            "A) Migración de moléculas cargadas negativamente hacia el ánodo a través de una matriz porosa, separándose por tamaño molecular",
            "B) Migración basada en el punto isoeléctrico de los nucleótidos",
            "C) Separación basada exclusivamente en la hidrofobicidad de las bases nitrogenadas",
            "D) Separación de acuerdo con la afinidad por colorantes fluorescentes intercalantes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El esqueleto de fosfatos otorga carga negativa neta al ADN, haciendo que migre hacia el polo positivo (ánodo), frenándose más las moléculas grandes en la matriz de agarosa."
    },
    {
        "id": 25,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la clonación molecular, ¿qué propiedad debe poseer un plásmido para ser utilizado como vector de expresión en Escherichia coli?",
        "opciones": [
            "A) Carecer de origen de replicación para integrarse al cromosoma",
            "B) Contener intrones eucariotas para su correcto procesamiento",
            "C) Ser incapaz de aceptar fragmentos de más de 100 kilobases",
            "D) Poseer un marcador de selección, un sitio múltiple de clonación y un promotor fuerte regulable"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un vector de expresión requiere elementos esenciales: origen de replicación (ori), marcador de resistencia a antibióticos, promotor inducible y MCS."
    },
    {
        "id": 26,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué enzima es la encargada de catalizar la formación del enlace fosfodiéster entre un inserto de ADN y un vector linealizado durante la clonación?",
        "opciones": [
            "A) ARN polimerasa dependiente de ADN",
            "B) Endonucleasa de restricción",
            "C) ADN ligasa",
            "D) Topoisomerasas tipo I"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La ADN ligasa sella las brechas en el esqueleto de fosfatos uniendo los extremos cohesivos o romos del inserto y el vector."
    },
    {
        "id": 27,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la técnica de PCR en tiempo real (qPCR) con sondas TaqMan, ¿cómo se genera la señal fluorescente proporcional a la cantidad de amplicón?",
        "opciones": [
            "A) Por la desnaturalización térmica de una sonda fluorescente al final de cada ciclo",
            "B) Por la intercalación inespecífica del fluoróforo en el surco menor del ADN bicatenario",
            "C) Por la degradación de la sonda fluorogénica debido a la actividad exonucleasa 5'->3' de la ADN polimerasa",
            "D) Por la transferencia de energía entre dos anticuerpos marcados"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La sonda TaqMan posee un fluoróforo y un apagador (quencher); al avanzar la polimerasa, su actividad exonucleasa 5'->3' degrada la sonda, separando el fluoróforo y emitiendo señal."
    },
    {
        "id": 28,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es el propósito de utilizar el sistema CRISPR-Cas9 en la edición genética dirigida?",
        "opciones": [
            "A) Secuenciar genomas completos mediante terminación de cadena por didesoxinucleótidos",
            "B) Medir la expresión relativa de genes mediante perfiles de microarrays",
            "C) Amplificar fragmentos de ADN a temperatura constante sin ciclos térmicos",
            "D) Provocar un corte específico en una secuencia diana de ADN guiado por un ARN monocatenario (sgRNA) para inducir reparación por NHEJ o HDR"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "CRISPR-Cas9 utiliza un ARN guía para reconocer una secuencia específica de ADN y la endonucleasa Cas9 para realizar un corte bicatenario preciso."
    },
    {
        "id": 29,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué técnica se emplea para la detección e identificación específica de proteínas inmovilizadas en una membrana de nitrocelulosa mediante anticuerpos?",
        "opciones": [
            "A) Southern Blot",
            "B) Western Blot",
            "C) Northern Blot",
            "D) Cromatografía de exclusión molecular"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Western Blot (inmunoblot) transfiere proteínas separadas por SDS-PAGE a una membrana para detectarlas con anticuerpos específicos (primarios y secundarios)."
    },
    {
        "id": 30,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En secuenciación de ADN por el método de Sanger (didesoxi), ¿cuál es la función de los didesoxinucleótidos (ddNTPs)?",
        "opciones": [
            "A) Actuar como terminadores de cadena al carecer del grupo hidroxilo en el carbono 3'",
            "B) Unir las hebras de ADN molde mediante enlaces de hidrógeno de alta energía",
            "C) Proveer el grupo hidroxilo en el carbono 3' para continuar la elongación",
            "D) Servir como cebadores universales para iniciar la reacción de síntesis"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los ddNTPs carecen del grupo 3'-OH necesario para formar el enlace fosfodiéster con el siguiente nucleótido, deteniendo permanentemente la síntesis."
    },
    {
        "id": 31,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué método de transformación bacteriana utiliza pulsos eléctricos de alto voltaje para desestabilizar transitoriamente la membrana celular y permitir la entrada de ADN?",
        "opciones": [
            "A) Conjugación bacteriana mediada por plásmidos F",
            "B) Transducción por fagos lambda",
            "C) Electroporación",
            "D) Tratamiento con cloruro de calcio y choque térmico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La electroporación aplica un campo eléctrico breve que induce la formación de poros hidrófilos temporales en la membrana plasmática."
    },
    {
        "id": 32,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué enzima de restricción corta el ADN generando 'extremos romos' (blunt ends)?",
        "opciones": [
            "A) BamHI",
            "B) HindIII",
            "C) EcoRI",
            "D) SmaI"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "SmaI corta exactamente en el centro de su sitio de reconocimiento simétrico (CCCGGG), produciendo extremos sin salientes monocatenarios."
    },
    {
        "id": 33,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la expresión de proteínas recombinantes, ¿cuál es la ventaja de utilizar sistemas de expresión basados en Pichia pastoris en comparación con E. coli?",
        "opciones": [
            "A) Crecimiento en medios complejos sin necesidad de fuentes de carbono",
            "B) Capacidad de realizar glicosilación compleja de tipo eucariota y secreción eficiente al medio",
            "C) Incapacidad total para realizar modificaciones postraduccionales",
            "D) Ausencia absoluta de plásmidos de expresión"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Pichia pastoris es una levadura metilotrófica que combina el crecimiento rápido de microorganismos con la capacidad de glicosilar y secretar proteínas eucariotas."
    },
    {
        "id": 34,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es el objetivo de utilizar un marcador de selección como la proteína verde fluorescente (GFP) o genes de resistencia a antibióticos en ingeniería genética?",
        "opciones": [
            "A) Prevenir mutaciones espontáneas durante la fase estacionaria",
            "B) Aumentar la velocidad de replicación del cromosoma bacteriano",
            "C) Catalizar la degradación de subproductos tóxicos en el medio",
            "D) Identificar y seleccionar diferencialmente a las células que han incorporado con éxito el constructo genético"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los marcadores de selección permiten distinguir fenotípicamente o mediante fluorescencia a los transformantes de las células no modificadas."
    },
    {
        "id": 35,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué técnica se utiliza para estudiar perfiles globales de expresión génica midiendo miles de ARNs simultáneamente en un chip de silicio o vidrio?",
        "opciones": [
            "A) Cromatografía de afinidad",
            "B) Secuenciación por bisulfito",
            "C) Ensayo de retardación en gel (EMSA)",
            "D) Microarrays de ADN (Microarreglos)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los microarrays hibridan muestras de ADNc marcado con fluoróforos contra sondas oligonucleotídicas fijadas en una superficie sólida para cuantificar expresión."
    },
    {
        "id": 36,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la tecnología de ADN recombinante, ¿qué es un fásmido (phagemid)?",
        "opciones": [
            "A) Un plásmido que contiene secuencias de origen de fago filamentoso, permitiendo producir ADN monocatenario",
            "B) Un virus purificado incapaz de infectar bacterias",
            "C) Un transposón autónomo con genes de resistencia múltiple",
            "D) Un plásmido gigante incapaz de replicarse en E. coli"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un fásmido combina características de plásmidos y bacteriófagos, útil para aplicaciones de presentación en fagos (phage display)."
    },
    {
        "id": 37,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es la función del agente caotrópico (como el cloruro de guanidinio) en la extracción y purificación de ácidos nucleicos?",
        "opciones": [
            "A) Desnaturalizar proteínas, inactivar nucleasas e interrumpir la estructura del agua para favorecer la unión del ADN a matrices de sílice",
            "B) Precipitar selectivamente las proteínas de alto peso molecular",
            "C) Aumentar el pH del lisado celular por encima de 12",
            "D) Degradar específicamente el ARN contaminante"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las sales caotrópicas desestabilizan enlaces de hidrógeno y estructuras proteicas, inactivando nucleasas y deshidratando el ADN para unirse a membranas de sílice."
    },
    {
        "id": 38,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la mutagénesis dirigida por PCR, ¿cómo se introducen cambios específicos de nucleótidos en una secuencia?",
        "opciones": [
            "A) Omitiendo la etapa de desnaturalización térmica",
            "B) Exponiendo el plásmido a radiación UV intensa",
            "C) Agregando concentraciones elevadas de cloruro de magnesio en la reacción",
            "D) Utilizando cebadores diseñados específicamente que contienen la mutación deseada en su secuencia"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los cebadores mutagénicos incorporan bases alteradas durante la amplificación por PCR, generando productos con la mutación puntual o inserción requerida."
    },
    {
        "id": 39,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Qué técnica de biología molecular permite analizar interacciones entre proteínas y ADN mediante la migración diferencial en gel?",
        "opciones": [
            "A) Ensayo de cambio de movilidad electroforética (EMSA / Shift Assay)",
            "B) Inmunoprecipitación de cromatina (ChIP)",
            "C) Electroforesis capilar de alta resolución",
            "D) Cromatografía líquida de alta eficacia (HPLC)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El ensayo EMSA evalúa la unión de factores de transcripción a fragmentos de ADN marcados; el complejo proteína-ADN migra más lento en el gel."
    },
    {
        "id": 40,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "En la secuenciación de nueva generación (NGS), ¿en qué consiste la tecnología de secuenciación por síntesis (SBS) utilizada por plataformas como Illumina?",
        "opciones": [
            "A) Medir cambios en el pH cuando se libera un ion hidrógeno al incorporar un nucleótido",
            "B) Detectar la señal fluorescente emitida al incorporar nucleótidos terminadores reversibles modificados",
            "C) Hibridar sondas radiactivas contra filtros de nailon",
            "D) Medir la longitud de fragmentos mediante espectrometría de masas MALDI-TOF"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Illumina emplea nucleótidos fluorescentes con bloques reversibles en 3'; tras cada incorporación, se excita el fluoróforo, se lee la base y se retira el bloqueo."
    },
    {
        "id": 41,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Cuál es el propósito fundamental de la etapa de lisis celular por métodos mecánicos como la homogenización de alta presión en el procesamiento downstream?",
        "opciones": [
            "A) Ajustar el pH a valores alcalinos para desnaturalizar contaminantes",
            "B) Precipitar las sales disueltas en el caldo de cultivo",
            "C) Liberar productos intracelulares (como proteínas recombinantes acumuladas en cuerpos de inclusión o citoplasma)",
            "D) Esterilizar el medio antes de la filtración tangencial"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los metabolitos o proteínas intracelulares requieren la ruptura controlada de la pared y membrana celular mediante homogenizadores (como Manton-Gaulin) para su posterior recuperación."
    },
    {
        "id": 42,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "En la purificación de proteínas, ¿cuál es el principio físico en el que se basa la cromatografía de exclusión molecular (gel filtración)?",
        "opciones": [
            "A) Interacción electrostática entre cargas netas y grupos ionizables",
            "B) Separación basada en el tamaño hidrodinámico molecular; las moléculas grandes excluyen los poros y eluyen primero",
            "C) Afinidades biológicas específicas ligando-receptor",
            "D) Interacciones hidrofóbicas entre la proteína y la matriz porosa"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las perlas de gel poroso atrapan moléculas pequeñas retrasando su paso, mientras que las moléculas grandes que no entran a los poros eluyen rápidamente en el volumen muerto."
    },
    {
        "id": 43,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Qué técnica de separación por membranas se utiliza comúnmente para la concentración y desalojo (diafiltración) de macromoléculas biológicas utilizando presiones moderadas?",
        "opciones": [
            "A) Ultrafiltración",
            "B) Osmosis inversa",
            "C) Microfiltración frontal",
            "D) Nanofiltración"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ultrafiltración emplea membranas con un corte de peso molecular (MWCO) específico (kDa), reteniendo proteínas y permitiendo el paso de sales y agua."
    },
    {
        "id": 44,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "En la cromatografía de intercambio iónico, si se utiliza una resina de intercambio catiónico (matriz con carga negativa), ¿cómo se logra eluir una proteína que se ha unido fuertemente a ella?",
        "opciones": [
            "A) Aumentando la temperatura de la columna por encima de 60 °C",
            "B) Incrementando gradualmente la concentración de sal (fuerza iónica) o modificando el pH del eluyente",
            "C) Agregando detergentes no iónicos como Tritón X-100",
            "D) Disminuyendo drásticamente la fuerza iónica (concentración de sal) del amortiguador"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En un intercambiador catiónico, los contraiones (como Na+ o Cl-) añadidos en un gradiente salino compiten con la proteína por los sitios cargados de la matriz, provocando su elución."
    },
    {
        "id": 45,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Cuál es el fundamento de la precipitación con sulfato de amonio ((NH4)2SO4) fraccionada en la recuperación de proteínas?",
        "opciones": [
            "A) Cambio drástico en el punto isoeléctrico mediante hidrólisis ácida",
            "B) Efecto de salado (salting-out), donde altas concentraciones de sal compiten por el agua de hidratación, disminuyendo la solubilidad de la proteína",
            "C) Modificación del pH del medio hasta alcanzar la neutralidad",
            "D) Formación de enlaces covalentes irreversibles con los residuos de cisteína"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "A altas concentraciones salinas, las sales deshidratan la superficie proteica al unirse preferentemente al agua, provocando la agregación y precipitación hidrofóbica de las proteínas."
    },
    {
        "id": 46,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "En cromatografía de afinidad, ¿qué ligando se inmoviliza típicamente en la matriz para purificar proteínas recombinantes que poseen una cola de histidinas (His-tag)?",
        "opciones": [
            "A) Anticuerpos monoclonales anti-inmunoglobulina G",
            "B) Sustratos análogos de la glucosa deshidrogenasa",
            "C) Cadenas de dextrano sulfatado",
            "D) Iones metálicos divalentes como Ni2+ o Co2+"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La IMAC (Immobilized Metal Affinity Chromatography) utiliza iones de níquel quelados para unirse específicamente a los residuos imidazol de las histidinas en la etiqueta de la proteína."
    },
    {
        "id": 47,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Qué diferencia principal existe entre la filtración frontal (dead-end filtration) y la filtración de flujo tangencial (cross-flow filtration)?",
        "opciones": [
            "A) En la frontal, el flujo es paralelo a la membrana, evitando la formación de torta",
            "B) La filtración frontal solo se aplica en gases estériles y la tangencial en sólidos cristalinos",
            "C) En la tangencial, el flujo fluye paralelamente a la superficie de la membrana, reduciendo la colmatación (fouling) por acumulación de sólidos",
            "D) La filtración tangencial no requiere bombas de presurización"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En la filtración tangencial (cruzada), el líquido barre la superficie de la membrana evitando la formación excesiva de una torta de filtración densa."
    },
    {
        "id": 48,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "En los procesos de liofilización (secado por congelación), ¿cuál es la función de la etapa de sublimación primaria bajo alto vacío?",
        "opciones": [
            "A) Cristalizar las sales minerales disueltas en el amortiguador",
            "B) Eliminar los solventes orgánicos mediante destilación fraccionada",
            "C) Remover el agua congelada directamente del estado sólido al vapor sin pasar por la fase líquida",
            "D) Fundir el hielo residual a temperaturas superiores a 20 °C"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La sublimación primaria es la fase crítica de la liofilización donde el hielo se remueve a baja presión y temperatura controlada, protegiendo estructuras termosensibles."
    },
    {
        "id": 49,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Cuál es el objetivo de realizar una cromatografía de interacción hidrofóbica (HIC) en la purificación downstream?",
        "opciones": [
            "A) Eliminar contaminantes de ADN mediante enlaces covalentes",
            "B) Separar moléculas basándose en la exposición de regiones hidrofóbicas superficiales en presencia de altas concentraciones de sal",
            "C) Medir la polaridad óptica de enantiómeros quirales",
            "D) Intercambiar los iones de sodio por iones de potasio en la solución amortiguadora"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La HIC aprovecha las zonas hidrofóbicas expuestas de las proteínas; las sales kosmotrópicas promueven la unión a la matriz hidrofóbica, eluyendo al reducir la sal."
    },
    {
        "id": 50,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "En la operación de una centrífuga industrial tubular o de discos para separar biomasa, ¿de qué depende principalmente la eficiencia de clarificación?",
        "opciones": [
            "A) De la viscosidad dinámica del gas circundante",
            "B) Exclusivamente del volumen total del recipiente de recolección",
            "C) De la concentración de oxígeno disuelto en el interior del tambor",
            "D) Del área equivalente de sedimentación (Sigma) y la velocidad de rotación (RPM)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El factor Sigma (Σ) caracteriza la capacidad de separación centrífuga de un equipo, integrando el área equivalente de sedimentación gravitacional y la aceleración centrífuga."
    },
    {
        "id": 51,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Qué representa la constante de Michaelis-Menten (Km) en la cinética enzimática?",
        "opciones": [
            "A) La concentración de sustrato a la cual la velocidad de reacción es igual a la mitad de la velocidad máxima (Vmax / 2)",
            "B) La velocidad máxima de reacción catalizada por la enzima",
            "C) La constante de equilibrio termodinámico de la reacción reversible",
            "D) El número de recambio de moléculas de sustrato por segundo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Km es una medida inversa de la afinidad de la enzima por el sustrato; un valor menor indica mayor afinidad enzimática."
    },
    {
        "id": 52,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Cómo se caracteriza cinéticamente un inhibidor competitivo en un gráfico de Doble Recíproco (Lineweaver-Burk)?",
        "opciones": [
            "A) Modifica la ordenada al origen (1/Vmax) sin alterar la pendiente",
            "B) Incrementa la pendiente y modifica la intersección en el eje de 1/Km (1/ -Km aparente aumenta), manteniendo la misma ordenada al origen (1/Vmax)",
            "C) Disminuye la Vmax sin alterar el valor de Km",
            "D) Modifica tanto la pendiente como ambas ordenadas simultáneamente de forma paralela"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El inhibidor competitivo compite por el sitio activo, elevando el Km aparente (mueve la intersección en el eje X) pero alcanzando la misma Vmax a altas concentraciones de sustrato (misma intersección en 1/Vmax)."
    },
    {
        "id": 53,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Cuál es la principal ventaja industrial de utilizar enzimas inmovilizadas frente a enzimas solubles libres?",
        "opciones": [
            "A) Facilidad de recuperación, reutilización del biocatalizador y posibilidad de operar en reactores continuos (de lecho empacado)",
            "B) Aumento drástico del peso molecular de la proteína",
            "C) Eliminación de la necesidad de cofactores como NADH",
            "D) Reducción absoluta de la energía de activación a cero"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La inmovilización (por adsorción, atrapamiento o enlace covalente) permite separar fácilmente el biocatalizador del producto, reduciendo costos operativos significativos."
    },
    {
        "id": 54,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Qué describe el parámetro cinético conocido como 'número de recambio' (turnover number, kcat)?",
        "opciones": [
            "A) El número de moles de enzima inactivada por unidad de tiempo",
            "B) El número de moléculas de sustrato convertidas a producto por cada sitio activo por unidad de tiempo cuando la enzima está saturada",
            "C) La relación entre la constante catalítica y la constante de inhibición",
            "D) El tiempo de vida media de la enzima a temperatura ambiente"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El kcat (Vmax / [E_total]) indica la eficiencia catalítica máxima de una molécula enzimática individual bajo saturación de sustrato."
    },
    {
        "id": 55,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "En la inhibición enzimática de tipo acompetitiva (uncompetitive), ¿dónde se une principalmente el inhibidor al complejo enzimático?",
        "opciones": [
            "A) De forma covalente irreversible a los residuos de histidina periféricos",
            "B) Exclusivamente al sitio activo libre compitiendo con el sustrato",
            "C) Únicamente al complejo enzima-sustrato (ES), impidiendo la formación del producto",
            "D) A un sitio alostérico tanto en la enzima libre como en el complejo ES con igual afinidad"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El inhibidor acompetitivo se une exclusivamente al complejo ES, lo que provoca una disminución aparente tanto de Vmax como de Km, generando rectas paralelas en Lineweaver-Burk."
    },
    {
        "id": 56,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Qué efecto produce un incremento de la temperatura por encima del óptimo térmico en la velocidad de una reacción enzimática?",
        "opciones": [
            "A) Desnaturalización térmica de la estructura tridimensional de la proteína, provocando la pérdida abrupta de actividad catalítica",
            "B) Aumento exponencial continuo según la ecuación de Arrhenius",
            "C) Incremento de la afinidad (disminución del Km) debido a una mayor energía cinética",
            "D) Conversión de la enzima en un inhibidor no competitivo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Aunque las temperaturas elevadas aumentan la energía cinética inicial, superado el óptimo térmico, la ruptura de enlaces débiles desnaturaliza la enzima."
    },
    {
        "id": 57,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Qué tipo de enzimas requieren cofactores orgánicos unidos covalentemente llamados grupos prostéticos?",
        "opciones": [
            "A) Enzimas estrictamente monoméricas sin actividad redox",
            "B) Zimógenos inactivos activados por proteólisis limitada",
            "C) Apoenzimas desprovistas de cualquier componente no proteico",
            "D) Holoenzimas que necesitan moléculas adicionales (como grupos hemo o FAD) para llevar a cabo su función catalítica"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Una holoenzima funcional se compone de la apoenzima (proteína) y su cofactor o grupo prostético esencial para la catálisis."
    },
    {
        "id": 58,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Cuál es el fundamento de la catálisis enzimática respecto a la termodinámica de una reacción química?",
        "opciones": [
            "A) Modifican la energía libre de Gibbs global (Delta G) de la reacción",
            "B) Disminuyen la energía de activación (Ea) necesaria para alcanzar el estado de transición, acelerando la velocidad sin alterar el equilibrio termodinámico",
            "C) Desplazan permanentemente el equilibrio hacia los productos consumiendo reactivos",
            "D) Convierten reacciones endotérmicas en exotérmicas espontáneas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las enzimas actúan como catalizadores reduciendo la energía de activación, pero no alteran la termodinámica ni la constante de equilibrio de la reacción."
    },
    {
        "id": 59,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "¿Qué método de inmovilización enzimática involucra la formación de enlaces químicos estables entre los grupos funcionales de la proteína (no esenciales para la catálisis) y el soporte sólido?",
        "opciones": [
            "A) Adsorción física por fuerzas de Van der Waals",
            "B) Unión covalente",
            "C) Atrapamiento en geles poliméricos de alginato",
            "D) Encapsulación en membranas semipermeables"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La unión covalente previene la fuga (leaching) de la enzima del soporte, garantizando una alta estabilidad operacional a expensas de posibles cambios conformacionales."
    },
    {
        "id": 60,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "En la cinética de inhibición no competitiva clásica, ¿cómo se afecta la constante Vmax y el valor de Km de la enzima?",
        "opciones": [
            "A) Vmax disminuye y Km no se modifica, ya que el inhibidor se une a un sitio alostérico con igual afinidad en E y en ES",
            "B) Vmax aumenta y Km disminuye proporcionalmente",
            "C) Tanto Vmax como Km aumentan drásticamente",
            "D) Vmax disminuye y Km permanece sin alteraciones"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El inhibidor no competitivo se une a un sitio distinto al activo, reduciendo la cantidad de enzima activa (disminuye Vmax) pero sin afectar la afinidad por el sustrato (Km constante)."
    },
    {
        "id": 61,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Cuál es el proceso microbiológico fundamental que ocurre en la fase metanigénica de la digestión anaerobia de residuos orgánicos?",
        "opciones": [
            "A) Oxidación de la materia orgánica utilizando oxígeno disuelto como aceptor final de electrones",
            "B) Polimerización de azúcares simples para formar ácidos húmicos complejos",
            "C) Reducción de nitratos a gas nitrógeno mediante desnitrificación autótrofa",
            "D) Conversión de acetato, hidrógeno y dióxido de carbono en metano y dióxido de carbono por arqueas metanógenas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las arqueas metanógenas (estrictamente anaerobias) realizan la etapa final de la digestión anaerobia generando biogas a partir de productos intermedios como acetato y H2."
    },
    {
        "id": 62,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "En el tratamiento secundario de aguas residuales mediante el proceso de lodos activados, ¿cuál es la función principal del tanque de aireación?",
        "opciones": [
            "A) Proveer oxígeno para que la biomasa aerobia (flóculos bacterianos) oxide la materia orgánica biodegradable (DQO/DBO)",
            "B) Esterilizar el agua mediante oxidación química con ozono",
            "C) Precipitar los metales pesados en forma de hidróxidos insolubles",
            "D) Sedimentar los sólidos suspendidos primarios de gran tamaño"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El sistema de lodos activados utiliza aireación y agitación para mantener a los microorganismos en suspensión oxidando la materia orgánica disuelta y coloidal."
    },
    {
        "id": 63,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Qué técnica biotecnológica emplea plantas (y sus microorganismos asociados) para la remediación de suelos contaminados con hidrocarburos o metales pesados?",
        "opciones": [
            "A) Vitrificación térmica in situ",
            "B) Fitorremediación",
            "C) Biorremediación intrínseca pasiva",
            "D) Biolixiviación ácida bacteriana"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La fitorremediación utiliza plantas hiperacumuladoras o rizodegradadoras para extraer, degradar o estabilizar contaminantes ambientales."
    },
    {
        "id": 64,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Cuál es el mecanismo microbiano clave en la biolixiviación de minerales sulfurados de cobre utilizando Acidithiobacillus ferrooxidans?",
        "opciones": [
            "A) Oxidación bacteriana de hierro ferroso (Fe2+) a férrico (Fe3+) y de azufre reducido a ácido sulfúrico, solubilizando los metales de interés",
            "B) Precipitación selectiva de cobre metálico en la superficie celular",
            "C) Quelación de metales pesados mediante la secreción de sideróforos peptídicos",
            "D) Reducción de sulfatos a sulfuro de hidrógeno gaseoso en condiciones anaerobias"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Acidithiobacillus ferrooxidans oxida minerales insolubles mediante la generación biológica de agentes lixiviantes como el ion férrico y ácido sulfúrico."
    },
    {
        "id": 65,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "En la producción de biodiesel a partir de aceites vegetales o grasas residuales, ¿qué reacción química catalizada por bases o ácidos se lleva a cabo?",
        "opciones": [
            "A) Saponificación alcalina para la obtención de jabones sódicos",
            "B) Hidrólisis térmica de triglicéridos para obtener ácidos grasos libres",
            "C) Cracking catalítico de hidrocarburos lineales de cadena larga",
            "D) Transesterificación de triglicéridos con un alcohol corto (como metanol) en presencia de un catalizador para producir ésteres metílicos de ácidos grasos y glicerol"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La transesterificación convierte los triglicéridos del aceite en biodiesel (FAME) utilizando metanol y un catalizador (como NaOH o KOH), separando el glicerol como subproducto."
    },
    {
        "id": 66,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Qué microorganismos se emplean habitualmente en los procesos de bioprecipitación o remediación de nitrógeno en aguas residuales mediante el ciclo de nitrificación-desnitrificación?",
        "opciones": [
            "A) Algas verdes unicelulares productoras de toxinas",
            "B) Bacterias fotótrofas anoxigénicas reductoras de azufre",
            "C) Hongos filamentosos anaerobios estrictos",
            "D) Bacterias oxidantes de amoníaco (AOB) seguidas de bacterias desnitrificantes facultativas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La nitrificación convierte amonio en nitrato (por AOB/NOB aeróbicas), y la desnitrificación reduce los nitratos a gas nitrógeno (por bacterias anaerobias facultativas anoxic)."
    },
    {
        "id": 67,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Cuál es el objetivo principal del pretratamiento físico-químico (como explosión por vapor o deslignificación alcalina) en la producción de bioetanol lignocelulósico?",
        "opciones": [
            "A) Romper la estructura recalcitrante de la lignina y hemicelulosa para hacer accesible la celulosa a la hidrólisis enzimática",
            "B) Fermentar directamente la lignina en etanol de segunda generación",
            "C) Cristalizar la celulosa amorfa para incrementar su densidad",
            "D) Eliminar el agua contenida en la biomasa vegetal sin gasto energético"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La recalcitrancia de la biomasa lignocelulósica requiere un pretratamiento que remueva la barrera de lignina y exponga las fibras de celulosa para las celulasas."
    },
    {
        "id": 68,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Qué describe el parámetro Demanda Bioquímica de Oxígeno (DBO5) en la caracterización de aguas residuales?",
        "opciones": [
            "A) La cantidad total de oxígeno consumido por microorganismos para oxidar biológicamente la materia orgánica durante 5 días a 20 °C",
            "B) La concentración máxima de oxígeno que el agua puede disolver a presión atmosférica estándar",
            "C) El volumen de gas oxígeno liberado por las algas en un día de iluminación",
            "D) La cantidad de oxígeno requerida para oxidar químicamente todos los compuestos inorgánicos presentes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La DBO5 cuantifica la fracción biodegradable de la materia orgánica presente en una muestra de agua mediante incubación microbiana estándar."
    },
    {
        "id": 69,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "En los sistemas de celdas de combustible microbianas (MFC), ¿cómo generan energía eléctrica las bacterias electrogénicas?",
        "opciones": [
            "A) Oxidando materia orgánica y transfiriendo electrones extracelularmente al ánodo mediante transferencia directa por Pili o mediadores redox",
            "B) Produciendo hidrógeno gaseoso que se quema en una turbina convencional",
            "C) Generando un gradiente osmótico de cloruro de sodio entre dos cámaras",
            "D) Consumiendo electrones directamente de los electrodos externos en el cátodo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las bacterias electrogénicas (como Geobacter o Shewanella) oxidan sustratos orgánicos y ceden electrones al ánodo, generando corriente eléctrica hacia el cátodo."
    },
    {
        "id": 70,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Qué ventaja presenta el cultivo de microalgas en fotobiorreactores para la mitigación ambiental?",
        "opciones": [
            "A) Degradación espontánea de plásticos sintéticos en ausencia de agua",
            "B) Eliminación completa de bacterias patógenas sin requerir luz solar",
            "C) Producción de metano puro sin necesidad de purificación posterior",
            "D) Captura y fijación biológica de dióxido de carbono (CO2) proveniente de emisiones industriales y remoción de nutrientes (N y P)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las microalgas fijan grandes cantidades de CO2 atmosférico o industrial mediante fotosíntesis, produciendo biomasa útil para biocombustibles y valor agregado."
    },
    {
        "id": 71,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Cuál es el microorganismo iniciador (starter culture) responsable principal de la fermentación láctica en la producción de yogur tradicional?",
        "opciones": [
            "A) Saccharomyces cerevisiae y Acetobacter aceti",
            "B) Aspergillus oryzae y Rhizopus oligosporus",
            "C) Clostridium acetobutylicum y Bacillus subtilis",
            "D) Streptococcus thermophilus y Lactobacillus delbrueckii subsp. bulgaricus"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El yogur se produce mediante una simbiosis protocooperativa entre Streptococcus thermophilus y Lactobacillus bulgaricus, que acidifican la leche coagulando las proteínas."
    },
    {
        "id": 72,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué agente biológico se utiliza ampliamente como biopesticida en la agricultura por su capacidad de sintetizar proteínas crystal (Cry) tóxicas para insectos plaga?",
        "opciones": [
            "A) Agrobacterium tumefaciens",
            "B) Bacillus thuringiensis",
            "C) Tobacco mosaic virus",
            "D) Pseudomonas aeruginosa"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Bacillus thuringiensis (Bt) produce cristales parasporales proteicos (toxinas Cry y Cyt) que se solubilizan en el intestino medio de larvas de insectos específicas, causando su muerte."
    },
    {
        "id": 73,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "En la producción de plantas transgénicas (como el maíz Bt), ¿cuál es el vector biológico natural comúnmente empleado para transferir genes de interés al genoma vegetal?",
        "opciones": [
            "A) Retrovirus ARN aviar recombinante",
            "B) Bacteriófago M13 modificado con promotores de levadura",
            "C) Plásmido Ti (tumor-inducing) de Agrobacterium tumefaciens desarmado",
            "D) Transposones de elementos móviles de mamíferos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Agrobacterium tumefaciens transfiere naturalmente su segmento de ADN (T-DNA) a células vegetales; al desarmar sus genes de patogenicidad, sirve como vector de transformación."
    },
    {
        "id": 74,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Cuál es el principio microbiológico detrás de la fermentación alcohólica del pan y la cerveza realizada por Saccharomyces cerevisiae?",
        "opciones": [
            "A) Oxidación completa del azúcar a ácido acético y agua",
            "B) Conversión de almidón en metano mediante metanogénesis",
            "C) Fermentación homoláctica anaerobia estricta",
            "D) Glicólisis seguida de descarboxilación del piruvato a acetaldehído y su reducción a etanol, liberando dióxido de carbono"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Saccharomyces cerevisiae metaboliza azúcares vía ruta Embden-Meyerhof-Parnas produciendo etanol y CO2 bajo condiciones anaerobias o aeróbicas con represión de glucosa."
    },
    {
        "id": 75,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué rol desempeñan las bacterias fijadoras de nitrógeno del género Rhizobium en simbiosis con las leguminosas?",
        "opciones": [
            "A) Convierten el nitrógeno atmosférico (N2) en amonio (NH4+) asimilable por la planta mediante el complejo enzimático nitrogenasa",
            "B) Secretan antibióticos contra hongos fitopatógenos en la rizosfera",
            "C) Absorben fósforo insoluble del suelo y lo transportan a las hojas",
            "D) Modifican el pH del suelo haciéndolo fuertemente alcalino"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los rizobios hospedados en los nódulos radicales de leguminosas reducen enzimáticamente el nitrógeno inerte del aire a amonio, proveyendo nutrición nitrogenada a la planta."
    },
    {
        "id": 76,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué método de conservación de alimentos inactivan microorganismos y enzimas mediante la aplicación de campos eléctricos pulsados de alto voltaje (PEF)?",
        "opciones": [
            "A) Tratamiento térmico UHT prolongado",
            "B) Irradiación gamma con cobalto-60",
            "C) Secado por atomización a 200 °C",
            "D) Tecnología no térmica que desestabiliza la membrana celular microbiana por electroporación sin alterar significativamente las propiedades nutricionales y organolépticas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los campos eléctricos pulsados (PEF) aplican ráfagas cortas de alto voltaje a líquidos alimentarios, logrando destrucción microbiana por electroporación sin calor excesivo."
    },
    {
        "id": 77,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué son los probióticos en el contexto de la biotecnología alimentaria?",
        "opciones": [
            "A) Sustancias químicas sintéticas que estimulan el crecimiento bacteriano en el intestino",
            "B) Extractos de fibra vegetal indigerible que sirven de alimento a la flora intestinal",
            "C) Enzimas digestivas obtenidas por ingeniería genética de hongos",
            "D) Microorganismos vivos que, administrados en cantidades adecuadas, confieren un beneficio para la salud del huésped"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los probióticos (como Lactobacillus y Bifidobacterium) son cepas microbianas viables que mejoran el balance de la microbiota intestinal y la salud."
    },
    {
        "id": 78,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Cuál es la función de los microorganismos micorrícicos arbusculares (HMA) en la agricultura sostenible?",
        "opciones": [
            "A) Establecer simbiosis mutualista que incrementa la superficie de absorción radicular para la captación de agua y nutrientes insolubles como el fósforo",
            "B) Fijar nitrógeno atmosférico directamente en los tallos de cereales",
            "C) Sintetizar herbicidas selectivos contra malezas de hoja ancha",
            "D) Parasitar las raíces de los cultivos provocando marchitez vascular"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los hongos micorrícicos extienden su red de hifas en el suelo, mejorando notablemente la absorción de nutrientes inmóviles (fósforo) y la tolerancia al estrés hídrico."
    },
    {
        "id": 79,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué enzima se utiliza comúnmente en la industria alimentaria para la clarificación de jugos de frutas y la hidrólisis de pectinas?",
        "opciones": [
            "A) Lipasa microbiana",
            "B) Amilasa pancreática",
            "C) Pectinasa",
            "D) Catalasa bovina"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las pectinasas degradan la pectina que confiere viscosidad y turbidez a los jugos vegetales, facilitando su filtración y clarificación industrial."
    },
    {
        "id": 80,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué caracteriza a los alimentos obtenidos mediante la tecnología de edición genómica (como CRISPR) frente a los OGM transgénicos tradicionales?",
        "opciones": [
            "A) La introducción forzosa de genes provenientes de bacterias patógenas distantes",
            "B) La esterilidad absoluta de las semillas obtenidas",
            "C) La modificación precisa (mutación puntual o eliminación) de genes endógenos sin incorporar necesariamente ADN exógeno (transgen)",
            "D) La imposibilidad de ser cultivados en invernaderos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La edición genómica permite realizar cortes y reparaciones precisas en el propio genoma de la planta, a menudo sin dejar ADN extraño remanente."
    },
    {
        "id": 81,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Cuál es el algoritmo de alineamiento de secuencias locales más utilizado en bases de datos biológicas para buscar similitudes en secuencias de ADN o proteínas?",
        "opciones": [
            "A) Algoritmo de Needleman-Wunsch global",
            "B) Transformada rápida de Fourier",
            "C) BLAST (Basic Local Alignment Search Tool)",
            "D) Descenso por gradiente estocástico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Nota de corrección lógica: BLAST es el algoritmo estándar de alineamiento local. (La opción A es la correcta)."
    },
    {
        "id": 82,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué representa una matriz de sustitución como PAM o BLOSUM en alineamientos de secuencias proteicas?",
        "opciones": [
            "A) Las probabilidades de mutación o conservación evolutiva entre diferentes aminoácidos basadas en datos empíricos",
            "B) La constante de disociación térmica de las proteínas",
            "C) El peso molecular exacto de cada codón en el ARN mensajero",
            "D) La estructura tridimensional predecible de los enlaces peptídicos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las matrices BLOSUM y PAM asignan puntuaciones a los reemplazos de aminoácidos basadas en frecuencias evolutivas observadas en familias de proteínas relacionadas."
    },
    {
        "id": 83,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Cuál es el objetivo principal de la modelación y simulación de redes metabólicas mediante análisis de flujo metabólico (MFA y FBA)?",
        "opciones": [
            "A) Determinar los flujos de materia a través de las reacciones metabólicas bajo estado estacionario para predecir la tasa máxima de crecimiento o producción de metabolitos",
            "B) Calcular la secuencia exacta de aminoácidos de una proteína ribosómica",
            "C) Predecir la temperatura óptima de esterilización de un biorreactor",
            "D) Simular la estructura cuaternaria de anticuerpos monoclonales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Análisis de Flujo Metabólico (FBA) utiliza programación lineal y restricciones estequiométricas para modelar el rendimiento metabólico celular óptimo."
    },
    {
        "id": 84,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué técnica bioinformática se emplea para predecir la estructura tridimensional de una proteína a partir de su secuencia de aminoácidos utilizando plantillas homólogas conocidas?",
        "opciones": [
            "A) Modelaje por homología (Comparative Modeling / AlphaFold)",
            "B) Ensayo de dicroísmo circular",
            "C) Alineamiento múltiple de Needleman-Wunsch",
            "D) Secuenciación por ultracentrifugación analítica"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El modelaje por homología predice la estructura 3D basándose en la conservación de la estructura proteica entre proteínas con alta identidad de secuencia."
    },
    {
        "id": 85,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué describe la transcriptómica en el marco de la biología de sistemas?",
        "opciones": [
            "A) El análisis de la secuencia completa del ADN genómico nuclear",
            "B) El estudio cuantitativo y cualitativo de la totalidad de moléculas de ARNm expresadas en una célula o tejido bajo condiciones específicas",
            "C) La identificación de todas las modificaciones lipídicas postraduccionales",
            "D) La medición de la actividad enzimática in vitro"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La transcriptómica (mediante RNA-seq o microarrays) evalúa el perfil de expresión génica global, revelando qué genes están activos en un momento dado."
    },
    {
        "id": 86,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "En filogenética molecular, ¿qué representa un árbol filogenético no enraizado?",
        "opciones": [
            "A) Las relaciones de parentesco evolutivo entre taxones indicando el ancestro común universal",
            "B) Las relaciones de proximidad y divergencia evolutiva entre secuencias sin especificar la ubicación exacta del ancestro común raíz",
            "C) El orden cronológico exacto en millones de años de la aparición de mutaciones",
            "D) La estructura física de los cromosomas metafásicos"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un árbol no enraizado muestra la relación evolutiva y la distancia entre las especies o genes, pero no define la dirección temporal ni el ancestro raíz."
    },
    {
        "id": 87,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué es el acoplamiento molecular (Molecular Docking) en el diseño computacional de fármacos?",
        "opciones": [
            "A) Una simulación para predecir la orientación y afinidad de unión espacial entre un ligando pequeño y una macromolécula diana (proteína)",
            "B) El empaquetamiento de ADN dentro de la cápside viral",
            "C) La unión de una proteína a la membrana de nitrocelulosa en Western Blot",
            "D) La unión física de dos plásmidos mediante ligasas in vitro"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El docking predice la conformación espacial más estable del complejo ligando-receptor y estima su energía de unión mediante funciones de puntuación."
    },
    {
        "id": 88,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Cuál es el propósito de realizar análisis de ontología génica (Gene Ontology - GO) en conjuntos de datos de expresión diferencial?",
        "opciones": [
            "A) Clasificar los genes diferencialmente expresados según su función biológica, componente celular y proceso molecular asociado",
            "B) Encontrar la secuencia exacta del promotor bacteriano",
            "C) Calcular el peso molecular teórico de las proteínas expresadas",
            "D) Traducir secuencias de ARN en péptidos artificiales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Gene Ontology proporciona un vocabulario controlado para categorizar funcionalmente los genes y entender qué vías metabólicas o procesos están enriquecidos."
    },
    {
        "id": 89,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué algoritmo se utiliza comúnmente para la agrupación (clustering) jerárquico o k-medias de perfiles de expresión génica en experimentos de microarray?",
        "opciones": [
            "A) Cromatografía de afinidad en columna",
            "B) Agrupamiento no supervisado basado en distancias de correlación o euclidianas",
            "C) Reacción en cadena de la polimerasa cuantitativa",
            "D) Ecuaciones diferenciales parciales de Navier-Stokes"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los algoritmos de clustering agrupan genes con patrones de expresión similares a lo largo de condiciones experimentales para identificar co-regulación."
    },
    {
        "id": 90,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué es la metagenómica?",
        "opciones": [
            "A) El análisis morfológico de orgánulos celulares mediante microscopía electrónica",
            "B) La secuenciación exclusiva del genoma humano completo",
            "C) La mutación artificial masiva de plásmidos bacterianos",
            "D) El estudio del material genético extraído directamente de muestras ambientales complejas sin necesidad de cultivo microbiano previo"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La metagenómica permite analizar la diversidad microbiana total de un nicho ecológico secuenciando el ADN extraído directamente de la muestra (suelo, agua, intestino)."
    },
    {
        "id": 91,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué nivel de bioseguridad (BSL) se requiere en un laboratorio que trabaja con agentes infecciosos exóticos o nativos que representan un alto riesgo de transmisión por aerosoles y para los cuales no existen tratamientos o vacunas eficaces?",
        "opciones": [
            "A) BSL-1",
            "B) BSL-3",
            "C) BSL-4",
            "D) BSL-2"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El nivel de bioseguridad 4 (BSL-4) se reserva para patógenos altamente peligrosos (como Ébola o Marburgo) que requieren trajes presurizados y contención máxima."
    },
    {
        "id": 92,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Cuál es el propósito fundamental de cumplir con las Buenas Prácticas de Manufactura (GMP / BPF) en la industria biofarmacéutica?",
        "opciones": [
            "A) Evitar la realización de pruebas clínicas en humanos",
            "B) Acelerar el tiempo de fermentación microbiana eliminando controles analíticos",
            "C) Garantizar que los productos farmacéuticos y biológicos se produzcan y controlen consistentemente según los estándares de calidad adecuados para su uso previsto",
            "D) Reducir los costos de materias primas a expensas de la seguridad del paciente"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las GMP (Good Manufacturing Practices) aseguran la calidad, pureza, eficacia y seguridad en la manufactura de productos médicos y biotecnológicos."
    },
    {
        "id": 93,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué aspecto bioético regula principalmente el Protocolo de Cartagena sobre Seguridad de la Biotecnología?",
        "opciones": [
            "A) El uso de animales de laboratorio en investigación básica",
            "B) La patente exclusiva de secuencias genéticas humanas",
            "C) La clonación reproductiva de seres humanos y mamíferos superiores",
            "D) El movimiento transfronterizo de organismos vivos modificados (OVM) producto de la biotecnología moderna"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Protocolo de Cartagena busca proteger la biodiversidad biológica frente a los riesgos derivados del transporte y liberación de OVM."
    },
    {
        "id": 94,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué norma o sistema internacional establece los requisitos para la gestión de la calidad en laboratorios de ensayo y calibración biotecnológica?",
        "opciones": [
            "A) ISO 9001",
            "B) OHSAS 18001",
            "C) ISO/IEC 17025",
            "D) ISO 14001"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La norma ISO/IEC 17025 especifica los requisitos generales para la competencia, imparcialidad y operación consistente de laboratorios de ensayo y calibración."
    },
    {
        "id": 95,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "En relación con la propiedad intelectual en biotecnología, ¿qué tipo de invenciones son generalmente patentables según los tratados internacionales?",
        "opciones": [
            "A) Microorganismos modificados genéticamente o procesos biotecnológicos novedosos que impliquen actividad inventiva y aplicación industrial",
            "B) Métodos quirúrgicos de tratamiento humano",
            "C) Teorías científicas abstractas sobre rutas metabólicas",
            "D) Descubrimientos de organismos o secuencias génicas tal y como existen en la naturaleza sin intervención humana"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los productos naturales en su estado primario no son patentables; sin embargo, microorganismos modificados, plásmidos recombinantes y procesos industriales sí pueden serlo."
    },
    {
        "id": 96,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué indica un pictograma de peligro en el Sistema Globalmente Armonizado (SGA) que muestra una calavera y tibias cruzadas?",
        "opciones": [
            "A) Gas a presión no inflamable",
            "B) Peligro para el medio ambiente acuático",
            "C) Toxicidad aguda severa (mortal en caso de ingestión, contacto cutáneo o inhalación)",
            "D) Sustancia comburente o inflamable"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El pictograma de calavera y tibias cruzadas advierte sobre sustancias con toxicidad aguda de categoría alta."
    },
    {
        "id": 97,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Cuál es el objetivo de los comités de ética en investigación con organismos modificados (como la CIBIOGEM en México)?",
        "opciones": [
            "A) Realizar auditorías contables a empresas farmacéuticas",
            "B) Evaluar y regular la bioseguridad de actividades con OGM para prevenir riesgos ambientales y a la salud humana",
            "C) Comercializar directamente patentes biotecnológicas en mercados internacionales",
            "D) Financiar proyectos académicos de biología molecular"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los comités de bioseguridad evalúan el análisis de riesgo de la liberación experimental o comercial de organismos modificados."
    },
    {
        "id": 98,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué define la norma ISO 14001 en el ámbito industrial biotecnológico?",
        "opciones": [
            "A) La calibración de instrumentos de medición óptica",
            "B) Los requisitos para un Sistema de Gestión Ambiental efectivo en la prevención de la contaminación",
            "C) La gestión de la seguridad y salud en el trabajo",
            "D) Las especificaciones para la seguridad alimentaria (HACCP)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "ISO 14001 guía a las organizaciones en el establecimiento de sistemas orientados a minimizar el impacto ambiental de sus operaciones industriales."
    },
    {
        "id": 99,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué procedimiento debe seguirse obligatoriamente con los residuos biológico-infecciosos peligrosos (RPBI) que contienen cultivos de laboratorios de biotecnología?",
        "opciones": [
            "A) Almacenarse indefinidamente en refrigeración a -20 °C",
            "B) Desecharse directamente en el sistema de alcantarillado municipal",
            "C) Inactivación térmica (esterilización en autoclave) o incineración antes de su disposición final",
            "D) Mezclarse con residuos sólidos urbanos sin tratamiento previo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los cultivos y cepas de agentes infecciosos deben ser esterilizados (autoclavados) o incinerados para garantizar la destrucción de patógenos antes de su confinamiento."
    },
    {
        "id": 100,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Qué principio bioético fundamental establece la obligación de no infligir daño intencionadamente a los pacientes o participantes en ensayos clínicos biotecnológicos?",
        "opciones": [
            "A) Principio de no maleficencia",
            "B) Principio de autonomía",
            "C) Principio de justicia distributiva",
            "D) Principio de beneficencia"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El principio de no maleficencia ('primum non nocere') obliga a evitar cualquier daño físico, psicológico o biológico a los sujetos de estudio."
    },
    {
        "id": 101,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Cuál es el balance de materia global en un estado estacionario para un proceso continuo donde entran dos corrientes de alimentación y sale una única corriente de producto?",
        "opciones": [
            "A) F1 + F2 = P (Masa entrante es igual a la masa saliente)",
            "B) Acumulación neta = F1 x F2",
            "C) F1 - F2 = 2P",
            "D) P = (F1 + F2) / acumulado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En estado estacionario, la acumulación es cero, por lo que la suma de los flujos másicos de entrada debe ser estrictamente igual al flujo de salida."
    },
    {
        "id": 102,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué expresa la primera ley de la termodinámica aplicada a un sistema abierto (como un biorreactor continuo con flujo de masa)?",
        "opciones": [
            "A) La tasa de acumulación de energía dentro del sistema es igual a la suma de la energía que entra menos la que sale, más el calor neto transferido y el trabajo realizado",
            "B) La energía total se destruye en presencia de biomasa",
            "C) La entropía del universo disminuye espontáneamente",
            "D) El calor metabólico es siempre igual a cero en procesos aerobios"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El balance de energía en sistemas abiertos contabiliza entalpías de entrada/salida, calor transferido por chaquetas y trabajo de agitación mecánica."
    },
    {
        "id": 103,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "En el diseño de experimentos (DOE), ¿cuál es la ventaja de utilizar un diseño factorial completo $2^k$ frente a la experimentación tradicional de una variable a la vez (OVAT)?",
        "opciones": [
            "A) Elimina por completo la necesidad de replicar los puntos centrales",
            "B) Requiere un número infinitamente mayor de experimentos",
            "C) Evita el uso de análisis de varianza (ANOVA)",
            "D) Permite evaluar el efecto simultáneo de múltiples factores y detectar interacciones significativas entre ellos con eficiencia estadística"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los diseños factoriales evalúan múltiples factores conjuntamente, identificando efectos principales e interacciones sin requerir el elevado número de corridas de OVAT."
    },
    {
        "id": 104,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué herramienta estadística se emplea comúnmente para evaluar la significancia de los parámetros en un modelo de regresión obtenido mediante un diseño experimental?",
        "opciones": [
            "A) Análisis de Varianza (ANOVA)",
            "B) Distribución de Poisson",
            "C) Prueba de rangos de Wilcoxon",
            "D) Coeficiente de asimetría de Pearson"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El ANOVA (Analysis of Variance) desglosa la variabilidad total de un modelo para probar hipótesis sobre la significancia estadística de los factores y sus interacciones."
    },
    {
        "id": 105,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué representa el número adimensional de Reynolds (Re) en la agitación de fluidos dentro de un biorreactor?",
        "opciones": [
            "A) La razón entre la transferencia de calor y la transferencia de masa",
            "B) La relación entre fuerzas de inercia y fuerzas viscosas en el fluido agitado",
            "C) El cociente entre la presión hidrostática y la tensión superficial",
            "D) La eficiencia de mezcla de gases en medios aireados"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El número de Reynolds caracteriza el régimen de flujo (laminar, de transición o turbulento) relacionando las fuerzas inerciales y viscosas."
    },
    {
        "id": 106,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "En un proceso de transferencia de calor mediante un intercambiador de placas, ¿qué es la diferencia media logarítmica de temperatura (LMTD)?",
        "opciones": [
            "A) El gradiente térmico generado por la fricción del impulsor",
            "B) La fuerza impulsora de temperatura efectiva para la transferencia de calor a lo largo de un intercambiador",
            "C) La media aritmética simple entre las temperaturas extremas",
            "D) La temperatura máxima alcanzada por el vapor de agua en el esterilizador"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La LMTD calcula la diferencia de temperatura promedio impulsora adecuada cuando los fluidos fluyen en contracorriente o paralelo."
    },
    {
        "id": 107,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Cuál es el objetivo de utilizar controles PID (Proporcional-Integral-Derivative) en lazos de instrumentación industrial de bioprocesos?",
        "opciones": [
            "A) Desconectar automáticamente el suministro eléctrico en caso de sismos",
            "B) Incrementar manualmente la velocidad de agitación hasta la cavitación",
            "C) Mantener una variable de proceso (como pH, temperatura o nivel) en su valor de consigna (setpoint) minimizando el error ante perturbaciones",
            "D) Sustituir totalmente los sensores físicos por estimaciones teóricas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El controlador PID combina acciones proporcional, integral y derivativa para corregir desviaciones y estabilizar variables críticas en lazo cerrado."
    },
    {
        "id": 108,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué mide la viscosidad cinemática de un fluido en comparación con la viscosidad dinámica (absoluta)?",
        "opciones": [
            "A) La resistencia al flujo bajo altas presiones estáticas exclusivamente",
            "B) La relación entre la viscosidad dinámica y la densidad del fluido",
            "C) El volumen específico ocupado por los sólidos suspendidos",
            "D) La tensión superficial en la interfase gas-líquido"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La viscosidad cinemática (nu = mu / rho) expresa la resistencia del fluido al flujo bajo la influencia exclusiva de la gravedad."
    },
    {
        "id": 109,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué tipo de gráfico de control estadístico (SPC) se utiliza para monitorear la media de una variable continua a lo largo del tiempo en un proceso biotecnológico?",
        "opciones": [
            "A) Histograma de frecuencias acumuladas",
            "B) Diagrama de Pareto",
            "C) Diagrama de Ishikawa (causa-efecto)",
            "D) Gráfico de control X-barra y R (o S)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los gráficos X-barra y R (rango) o S (desviación estándar) permiten detectar causas asignables de variación en la media y dispersión de procesos industriales."
    },
    {
        "id": 110,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "En un balance de materia con reacción química, ¿cómo se define el rendimiento (yield, Y_P/S) de producto respecto al sustrato consumido?",
        "opciones": [
            "A) Concentración inicial de sustrato multiplicada por el volumen final",
            "B) Masa total de producto formada dividida por la masa total de sustrato consumido",
            "C) Tiempo total de fermentación entre la biomasa máxima",
            "D) Velocidad de aireación dividida por la velocidad de agitación"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El rendimiento estequiométrico o práctico Y_P/S cuantifica cuánta masa o moles de producto se obtienen por cada unidad de sustrato consumido por el biocatalizador."
    },
    {
        "id": 111,
        "area": "Bioprocesos",
        "pregunta": "En un cultivo continuo (quimiostato), ¿a qué es igual la velocidad específica de crecimiento microbiano (mu) en condiciones de estado estacionario?",
        "opciones": [
            "A) A la velocidad máxima de consumo de sustrato (q_max)",
            "B) Al coeficiente de rendimiento (Y_X/S)",
            "C) A la tasa de dilución (D = F / V)",
            "D) A cero"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En estado estacionario en un quimiostato, la tasa de crecimiento celular iguala exactamente a la tasa de dilución (mu = D)."
    },
    {
        "id": 112,
        "area": "Ingeniería Genética y Biología Molecular",
        "pregunta": "¿Cuál es la función del bromuro de etidio o colorantes seguros equivalentes en geles de electroforesis de ácidos nucleicos?",
        "opciones": [
            "A) Aumentar la conductividad eléctrica de la solución amortiguadora",
            "B) Intercalarse entre las bases nitrogenadas del ADN permitiendo su visualización bajo luz ultravioleta o azul",
            "C) Servir como agente tampón para mantener el pH del gel constante",
            "D) Precipitar el ADN directamente en los pozos de siembra"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los colorantes intercalantes fluorescen al ser excitados por luz UV cuando están unidos a dobles cadenas de ácidos nucleicos, facilitando su detección."
    },
    {
        "id": 113,
        "area": "Operaciones Unitarias y Purificación de Bio产品 (Downstream)",
        "pregunta": "¿Qué fenómeno indeseado ocurre en la cromatografía preparativa cuando se excede la capacidad dinámica de saturación de la columna?",
        "opciones": [
            "A) Disminución absoluta de la presión de operación a cero",
            "B) Incremento infinito de la resolución y pureza del producto",
            "C) Ruptura prematura (breakthrough) del soluto de interés en el efluente, reduciendo la recuperación y pureza",
            "D) Precipitación covalente de la matriz polimérica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El fenómeno de ruptura (breakthrough) ocurre cuando los sitios de unión de la resina están saturados, haciendo que el producto comience a salir antes de iniciar la elusión."
    },
    {
        "id": 114,
        "area": "Biocatálisis y Enzimología",
        "pregunta": "En la ecuación de Michaelis-Menten, ¿qué condición debe cumplirse rigurosamente para que los parámetros cinéticos sean válidos experimentalmente?",
        "opciones": [
            "A) Garantizar que la enzima esté completamente desnaturalizada",
            "B) Medir la velocidad inicial (v0) de la reacción cuando la cantidad de producto formado es muy pequeña (estado estacionario inicial)",
            "C) Trabajar exclusivamente en presencia de inhibidores competitivos",
            "D) Operar a concentraciones de sustrato infinitamente menores que el Km"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las mediciones cinéticas deben realizarse en velocidad inicial (v0) para evitar la inhibición por producto, la inactivación enzimática o el agotamiento significativo del sustrato."
    },
    {
        "id": 115,
        "area": "Biotecnología Ambiental y Energías Renovables",
        "pregunta": "¿Qué caracteriza a un proceso biotecnológico anaerobio frente a los procesos aerobios para el tratamiento de aguas residuales con alta carga orgánica (alta DBO)?",
        "opciones": [
            "A) Requerimiento estricto de temperaturas criogénicas inferiores a 0 °C",
            "B) Alto consumo energético por aireación mecánica y gran producción de lodos excedentes",
            "C) Menor consumo de energía (sin aireación), baja producción de biomasa y producción de biogás como fuente de energía renovable",
            "D) Incapacidad para remover compuestos orgánicos complejos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los reactores anaerobios (como UASB) generan metano energético y producen pocos lodos, siendo ideales para efluentes agroindustriales altamente contaminados."
    },
    {
        "id": 116,
        "area": "Biotecnología Alimentaria y Agrícola",
        "pregunta": "¿Qué microorganismo patógeno de transmisión alimentaria es un gran reto en la pasteurización y conservación de alimentos por su capacidad de multiplicarse a temperaturas de refrigeración?",
        "opciones": [
            "A) Listeria monocytogenes",
            "B) Bacillus anthracis",
            "C) Clostridium botulinum",
            "D) Vibrio cholerae"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Listeria monocytogenes es una bacteria psicrótrofa capaz de crecer a temperaturas de refrigeración (4 °C), representando un riesgo crítico en alimentos listos para consumir."
    },
    {
        "id": 117,
        "area": "Bioinformática y Biología de Sistemas",
        "pregunta": "¿Qué base de datos internacional almacena públicamente las estructuras tridimensionales experimentales de macromoléculas biológicas obtenidas por cristalografía de rayos X o RMN?",
        "opciones": [
            "A) Protein Data Bank (PDB)",
            "B) PubMed Central",
            "C) UniProt Knowledgebase",
            "D) GenBank"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Protein Data Bank (PDB) es el repositorio mundial centralizado de coordenadas atómicas tridimensionales de proteínas y ácidos nucleicos."
    },
    {
        "id": 118,
        "area": "Seguridad, Bioética y Normatividad",
        "pregunta": "¿Cuál es el objetivo principal de una Hoja de Datos de Seguridad (SDS / MSDS) de un reactivo químico en el laboratorio?",
        "opciones": [
            "A) Evaluar la pureza isotópica de las moléculas",
            "B) Proveer información detallada sobre riesgos para la salud, inflamabilidad, reactividad, equipo de protección personal y procedimientos de emergencia",
            "C) Establecer la ruta metabólica de síntesis orgánica del compuesto",
            "D) Describir el costo comercial y proveedor del producto químico"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La SDS contiene 16 secciones estandarizadas que informan sobre riesgos químicos, manejo seguro, primeros auxilios y respuesta ante derrames."
    },
    {
        "id": 119,
        "area": "Sección Transversal / Ingeniería Aplicada",
        "pregunta": "¿Qué indica un valor de P menor a 0.05 (p < 0.05) en una prueba de hipótesis estadística aplicada a un experimento biotecnológico?",
        "opciones": [
            "A) Que se acepta la hipótesis nula con total certeza",
            "B) Que el error estándar es exactamente igual a cero",
            "C) Que el experimento carece de suficientes réplicas experimentales",
            "D) Que existe evidencia estadística significativa para rechazar la hipótesis nula, indicando que el efecto observado probablemente no se debe al azar"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un valor de p < 0.05 establece el umbral convencional de significancia estadística, indicando una probabilidad menor al 5% de que el resultado sea producto del azar."
    },
    {
        "id": 120,
        "area": "Bioprocesos",
        "pregunta": "En la fermentación en estado sólido (SSF), ¿cuál es una de las características distintivas en comparación con la fermentación sumergida tradicional?",
        "opciones": [
            "A) Se requiere un exceso masivo de agua libre circulante para mantener el flujo laminar",
            "B) El cultivo se realiza sobre un soporte sólido insoluble con baja actividad de agua libre, simulando el hábitat natural de hongos filamentosos",
            "C) Es imposible cultivar hongos filamentosos en este sistema",
            "D) El medio de cultivo es un líquido homogéneo con agitación turbulenta continua por turbinas Rushton"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La fermentación en estado sólido (SSF) cultiva microorganismos sobre sustratos sólidos húmedos sin fase acuosa libre continua, siendo óptima para hongos filamentosos productores de enzimas."
    }
];