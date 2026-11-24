const bancoPreguntas = [
    {
        "id": 1,
        "area": "Fitotecnia",
        "pregunta": "¿Cuál es el principal mecanismo de acción de los herbicidas inhibidores de la enzima EPSP sintasa, como el glifosato?",
        "opciones": [
            "A) Desacoplamiento de la fosforilación oxidativa en las mitocondrias",
            "B) Inhibición de la división celular en meristemos apicales",
            "C) Inhibición de la síntesis de carotenoides causando blanqueamiento foliar",
            "D) Bloqueo de la ruta del ácido shikímico afectando la síntesis de aminoácidos aromáticos"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El glifosato actúa inhibiendo la EPSP sintasa, una enzima clave en la ruta del ácido shikímico, lo que impide la síntesis de fenilalanina, tirosina y triptófano."
    },
    {
        "id": 2,
        "area": "Fitotecnia",
        "pregunta": "En la mejora genética vegetal, ¿qué método se utiliza primordialmente para fijar la heterosis en especies alógamas?",
        "opciones": [
            "A) Creación de líneas consanguíneas y posterior formación de híbridos simples",
            "B) Selección masal estratificada",
            "C) Mutagénesis inducida por rayos gamma",
            "D) Retrocrusa continua con el parental recurrente"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La heterosis (vigor híbrido) se explota comercialmente cruzando líneas consanguíneas homocigotas estables para maximizar la superioridad heterótica en la progenie F1."
    },
    {
        "id": 3,
        "area": "Fitotecnia",
        "pregunta": "¿Qué parámetro fisiológico se mide con un porómetro para evaluar la resistencia estomática en cultivos bajo estrés hídrico?",
        "opciones": [
            "A) Concentración interna de CO2 en el espacio intercelular",
            "B) Oposición al flujo de vapor de agua a través de los estomas hacia la atmósfera",
            "C) Tasa de transporte de electrones en el fotosistema II",
            "D) Potencial hídrico foliar total"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La resistencia estomática mide la dificultad con la que el vapor de agua abandona la hoja a través de los estomas, incrementándose notablemente ante la escasez de agua."
    },
    {
        "id": 4,
        "area": "Fitotecnia",
        "pregunta": "Durante el diagnóstico nutricional vegetal, ¿cuál es el síntoma visual clásico de deficiencia de nitrógeno en cultivos de maíz?",
        "opciones": [
            "A) Clorosis generalizada que inicia en las hojas basales adquiriendo una forma de 'V' invertida",
            "B) Coloración purpurescente o violácea en tallos y hojas basales",
            "C) Muerte apical y deformación de brotes tiernos",
            "D) Clorosis internerval en hojas jóvenes con necrosis marginal"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El nitrógeno es un nutriente móvil; su deficiencia provoca la translocación hacia los tejidos jóvenes, manifestándose en las hojas viejas con una clorosis en 'V' desde la punta hacia la base."
    },
    {
        "id": 5,
        "area": "Fitotecnia",
        "pregunta": "¿Qué fase del ciclo de desarrollo del cultivo representa el periodo crítico de competencia con arvenses en frijol?",
        "opciones": [
            "A) Desarrollo vegetativo temprano (V3-R5)",
            "B) Floración y llenado de vainas",
            "C) Germinación y emergencia",
            "D) Madurez fisiológica y secado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El periodo crítico de competencia corresponde a la fase donde el cultivo es más vulnerable a la interferencia de malezas, típicamente entre las etapas vegetativas y de floración inicial."
    },
    {
        "id": 6,
        "area": "Fitotecnia",
        "pregunta": "En fruticultura, ¿cuál es la finalidad técnica de realizar una poda de fructificación en especies caducifolias como el manzano?",
        "opciones": [
            "A) Estimular la emisión exclusiva de brotes vegetativos basales",
            "B) Incrementar el vigor radicular a expensas de la biomasa aérea",
            "C) Equilibrar la relación fuente-sumidero y asegurar la iluminación de yemas florales",
            "D) Inducir dormancia prematura para evitar daños por heladas tempranas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La poda de fructificación busca regular la carga frutal, optimizar la intercepción lumínica y mantener un balance adecuado entre la fotosíntesis (fuente) y los frutos (sumidero)."
    },
    {
        "id": 7,
        "area": "Fitotecnia",
        "pregunta": "¿Cuál es el agente causal y el tipo de patógeno responsable del tizón tardío en la papa?",
        "opciones": [
            "A) *Phytophthora infestans* (Oomiceto)",
            "B) *Rhizoctonia solani* (Hongo basidiomiceto)",
            "C) *Potato virus Y* (Potivirus)",
            "D) *Ralstonia solanacearum* (Bacteria)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "*Phytophthora infestans* es un organismo fungoide perteneciente a los oomicetos, tristemente célebre por causar la hambruna irlandesa en el siglo XIX."
    },
    {
        "id": 8,
        "area": "Fitotecnia",
        "pregunta": "En el manejo integrado de plagas, ¿en qué consiste el concepto de 'Umbral Económico'?",
        "opciones": [
            "A) El costo monetario de aplicar un insecticida químico por hectárea",
            "B) La densidad de población de la plaga que causa la muerte total del cultivo",
            "C) La densidad de población de la plaga donde el costo de control iguala las pérdidas económicas evitadas",
            "D) El momento fenológico en que la planta es inmune al ataque de insectos chupadores"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El umbral económico es el nivel poblacional de la plaga que justifica la intervención de control para evitar que la población alcance el daño económico."
    },
    {
        "id": 9,
        "area": "Fitotecnia",
        "pregunta": "¿Qué hormona vegetal regula principalmente la abscisión de frutos y la respuesta a estrés por sequía mediante el cierre estomático?",
        "opciones": [
            "A) Cinetina",
            "B) Ácido abscísico (ABA)",
            "C) Ácido giberélico (GA3)",
            "D) Indol-3-acético (AIA)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ácido abscísico (ABA) es la principal fitohormona del estrés, encargada de mediar la señalización para el cierre estomático y promover la senescencia y abscisión."
    },
    {
        "id": 10,
        "area": "Fitotecnia",
        "pregunta": "En la propagación vegetativa por injertos, ¿qué tejido vegetal debe coincidir perfectamente entre el patrón y la variedad para garantizar el éxito de la unión?",
        "opciones": [
            "A) Cambium vascular",
            "B) Esclerénquima periférico",
            "C) Parénquima cortical",
            "D) Xilema secundario"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El cámbium vascular es el meristemo lateral encargado de producir nuevos tejidos vasculares, por lo que su contacto estrecho es vital para la proliferación celular y soldadura del injerto."
    },
    {
        "id": 11,
        "area": "Fitotecnia",
        "pregunta": "¿Qué caracteriza metabólicamente a las plantas con vía fotosintética C4 en comparación con las C3?",
        "opciones": [
            "A) Tienen los haces vasculares sin vaina parenquimatosa desarrollada",
            "B) Presentan fotorrespiración elevada bajo condiciones de alta temperatura",
            "C) Maximizan su eficiencia fotosintética a temperaturas menores a 15 °C",
            "D) Incorporan el CO2 inicialmente en compuestos de 4 carbonos mediante la enzima PEP carboxilasa"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las plantas C4 separan espacialmente la fijación inicial de carbono (vía PEP carboxilasa en el mesófilo) del ciclo de Calvin (en la vaina del haz), minimizando la fotorrespiración."
    },
    {
        "id": 12,
        "area": "Fitotecnia",
        "pregunta": "¿Cuál es el objetivo principal de la práctica agronómica denominada 'deshijes' o poda de formación en el cultivo de tomate bajo invernadero?",
        "opciones": [
            "A) Inducir resistencia sistémica adquirida contra virus rugosos",
            "B) Acelerar la senescencia foliar para un ciclo más corto",
            "C) Conducir la planta a uno o dos tallos principales maximizando la eficiencia lumínica y ventilación",
            "D) Aumentar la absorción de calcio radicular reduciendo la pudrición apical"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El deshije en tomate indeterminado elimina brotes axilares laterales para canalizar los fotoasimilados hacia los racimos florales principales y mejorar el microclima."
    },
    {
        "id": 13,
        "area": "Fitotecnia",
        "pregunta": "En el contexto de la calidad de semillas, ¿qué evalúa la prueba de tetrazolio?",
        "opciones": [
            "A) La presencia de patógenos fúngicos latentes en el tegumento",
            "B) La viabilidad y actividad respiratoria de los tejidos embrionarios mediante reacciones enzimáticas",
            "C) La dureza física y porcentaje de humedad relativa interna",
            "D) La velocidad de germinación en condiciones salinas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El cloruro de 2,3,5-trifenil tetrazolio es reducido por las deshidrogenasas en células vivas, formando un compuesto rojo (formazán) que indica la viabilidad del embrión."
    },
    {
        "id": 14,
        "area": "Fitotecnia",
        "pregunta": "¿Cuál es el síntoma característico provocado por nematodos noduladores del género *Meloidogyne* en el sistema radicular?",
        "opciones": [
            "A) Desprendimiento total de la corteza radicular dejando el cilindro central expuesto",
            "B) Raíces completamente necróticas sin raicillas secundarias y con olor fétido",
            "C) Formación de agallas o nudosidades debido a la hipertrofia e hiperplasia celular",
            "D) Raíces pilosas excesivas con síntomas de 'escoba de bruja'"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las hembras de *Meloidogyne* inducen la formación de células gigantes y la división celular descontrolada en la raíz, originando las agallas típicas que obstaculizan el transporte de agua."
    },
    {
        "id": 15,
        "area": "Fitotecnia",
        "pregunta": "¿Qué describe la relación fuente-sumidero en la fisiología de cultivos extensivos?",
        "opciones": [
            "A) La relación entre la evapotranspiración real y la potencial",
            "B) El balance entre los órganos productores de fotoasimilados y los órganos consumidores o de reserva",
            "C) La proporción de agua de riego aplicada frente al agua drenada",
            "D) La cantidad de fertilizante nitrogenado aplicado versus el absorbido por la raíz"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La fuente (hojas maduras) sintetiza azúcares mediante fotosíntesis, los cuales son transportados hacia los sumideros (granos, frutos, raíces en crecimiento)."
    },
    {
        "id": 16,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué método de laboratorio se emplea estándarmente para determinar la textura del suelo basándose en la Ley de Stokes?",
        "opciones": [
            "A) Extracción con acetato de amonio",
            "B) Digestión húmeda con ácido sulfúrico y peróxido",
            "C) Hidrómetro de Bouyoucos o pipeta de Robinson",
            "D) Titulación por EDTA"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El método del hidrómetro de Bouyoucos mide la densidad de una suspensión de suelo a diferentes tiempos, aplicando la Ley de Stokes sobre la velocidad de sedimentación de las partículas."
    },
    {
        "id": 17,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "En un análisis de fertilidad, ¿qué rango de pH del suelo se considera óptimo para la máxima disponibilidad general de macro y micronutrientes para la mayoría de los cultivos?",
        "opciones": [
            "A) 6.0 - 7.0",
            "B) 3.5 - 4.5",
            "C) 8.0 - 9.0",
            "D) 4.5 - 5.5"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un pH ligeramente ácido a neutro (6.0 - 7.0) evita la fijación de fósforo por aluminio/hierro o calcio, y previene la deficiencia o toxicidad de micronutrientes metálicos."
    },
    {
        "id": 18,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Cuál es la principal función del ciclo del nitrógeno mediada por bacterias de los géneros *Nitrosomonas* y *Nitrobacter*?",
        "opciones": [
            "A) Fijación biológica de nitrógeno atmosférico (N2) a amonio",
            "B) Desnitrificación convirtiendo nitrato en gas nitrógeno",
            "C) Amonificación de la materia orgánica particulada",
            "D) Nitrificación transformando amonio en nitrito y posteriormente en nitrato"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "*Nitrosomonas* oxida amonio a nitrito, y *Nitrobacter* (u otros oxidadores de nitrito) convierte nitrito en nitrato, forma altamente disponible para las plantas."
    },
    {
        "id": 19,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué representa la Capacidad de Intercambio Catiónico (CIC) en un suelo agrícola?",
        "opciones": [
            "A) La suma de cationes intercambiables que un suelo puede retener, expresada en cmol(+)/kg",
            "B) El contenido total de materia orgánica oxidable",
            "C) La cantidad máxima de agua retenida contra la gravedad",
            "D) La velocidad de infiltración básica del agua en el perfil"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La CIC mide la capacidad del suelo para retener y suministrar nutrientes catiónicos (Ca2+, Mg2+, K+, Na+, NH4+) gracias a las cargas negativas de arcillas y materia orgánica."
    },
    {
        "id": 20,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué caracteriza a los suelos de tipo Vertisol según la taxonomía de suelos del USDA?",
        "opciones": [
            "A) Alto contenido de arena y baja retención de humedad",
            "B) Suelos orgánicos saturados con más del 30% de carbono orgánico",
            "C) Presencia de un horizonte espódico con acumulación de hierro y aluminio",
            "D) Elevado contenido de arcillas expansivas (esmectitas) que producen profundas grietas en sequía"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los Vertisoles son arcillosos pesados que se contraen y agrietan al secarse, y se expanden al humedecerse, generando un proceso de mezcla interna (micropedoturación)."
    },
    {
        "id": 21,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "En fertirriego, ¿qué causa la precipitación de sales de calcio en las líneas de goteo al inyectar fertilizantes fosfatados?",
        "opciones": [
            "A) Uso de agua de riego con alta concentración de bicarbonatos y calcio sin acidificar previamente",
            "B) Descenso extremo del pH por debajo de 3.0",
            "C) Falta de presión en la red principal de riego",
            "D) Exceso de nitrato de potasio en la solución madre"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El fósforo reacciona con el calcio libre del agua de riego dura formando fosfato de calcio insoluble, el cual obstruye los emisores de goteo si no se acidifica el medio."
    },
    {
        "id": 22,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué nutriente esencial es un componente estructural clave de la molécula de clorofila y actúa como activador enzimático?",
        "opciones": [
            "A) Calcio (Ca)",
            "B) Fósforo (P)",
            "C) Hierro (Fe)",
            "D) Magnesio (Mg)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El ion magnesio (Mg2+) se localiza en el centro del anillo porfirínico de la molécula de clorofila, siendo indispensable para la captación de energía lumínica."
    },
    {
        "id": 23,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué define el punto de marchitamiento permanente (PMP) en las constantes hídricas del suelo?",
        "opciones": [
            "A) El contenido de humedad cuando el suelo está completamente saturado de aire",
            "B) La tensión de humedad a la cual el agua drena libremente por gravedad (-0.33 bar)",
            "C) La succión a -15 bares (1.5 MPa) donde las plantas ya no pueden extraer agua y sufren marchitez irreversible",
            "D) La cantidad de agua aprovechable máxima retenida en microporos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "A -15 bares, la fuerza de succión con la que el suelo retiene el agua supera la tensión de succión radicular, alcanzando el umbral letal para el cultivo."
    },
    {
        "id": 24,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Cuál es la función principal de los abonos verdes incorporados al suelo en sistemas de agricultura sustentable?",
        "opciones": [
            "A) Aumentar drásticamente la compactación superficial",
            "B) Esterilizar la microbiota nativa para evitar enfermedades radiculares",
            "C) Elevar el pH del suelo por encima de 8.5 de manera permanente",
            "D) Incrementar el contenido de carbono orgánico, mejorar la estructura y aportar nutrientes como nitrógeno si se usan leguminosas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los abonos verdes aportan biomasa vegetal que al descomponerse mejora la estructura, estimula la actividad microbiana y recicla nutrientes esenciales."
    },
    {
        "id": 25,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué problema agronómico genera la salinización excesiva del suelo en la absorción radicular de los cultivos?",
        "opciones": [
            "A) Bloqueo total de la respiración aeróbica mitocondrial",
            "B) Aumento de la presión de turgencia por entrada masiva de agua",
            "C) Generación de un potencial osmótico negativo elevado que dificulta o invierte la absorción hídrica",
            "D) Precipitación inmediata de todos los micronutrientes quelatados"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El exceso de sales solubles disminuye el potencial osmótico de la solución del suelo, provocando estrés hídrico fisiológico (sequía fisiológica) en las plantas."
    },
    {
        "id": 26,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Cuál es la forma química predominante en la que las plantas absorben el fósforo del suelo?",
        "opciones": [
            "A) H2PO4(-) y HPO4(2-) dependiendo del pH",
            "B) Fosfatos orgánicos complejos de cadena larga",
            "C) P elemental insoluble",
            "D) H3PO3 y HPO4(2-)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las formas iónicas ortofosfato diácido (H2PO4-) en suelos ácidos y fosfato monoácido (HPO4(2-)) en suelos neutros/alcalinos son las especies disponibles para la absorción radicular."
    },
    {
        "id": 27,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué parámetro evalúa la conductividad eléctrica (CE) extractada de la pasta saturada de un suelo?",
        "opciones": [
            "A) La concentración total de sales solubles presentes",
            "B) El porcentaje de saturación de bases",
            "C) La densidad aparente del suelo",
            "D) La cantidad de nitrógeno disponible"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La conductividad eléctrica en extracto de pasta saturada es el indicador estándar para clasificar los grados de salinidad de los suelos agrícolas."
    },
    {
        "id": 28,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué efecto produce la aplicación continua de fertilizantes acidificantes como el sulfato de amonio en suelos sin enmiendas?",
        "opciones": [
            "A) Descenso del pH del suelo por la nitrificación del amonio y liberación de protones (H+)",
            "B) Aumento drástico de la estabilidad estructural por floculación sódica",
            "C) Incremento progresivo del pH y alcalinidad",
            "D) Disminución de la fijación biológica simbiótica"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La oxidación microbiana del amonio libera iones hidrógeno al medio, lo que acidifica progresivamente el complejo de cambio y reduce el pH del suelo."
    },
    {
        "id": 29,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Cuál es el propósito de calcular la Relación de Adsorción de Sodio (RAS) en el agua de riego?",
        "opciones": [
            "A) Estimar el riesgo de sodificación del suelo y la degradación de su estructura por dispersión de arcillas",
            "B) Determinar la dureza total por calcio y magnesio",
            "C) Medir la cantidad de carbonatos y bicarbonatos libres",
            "D) Calcular la demanda biológica de oxígeno en sistemas hidropónicos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La RAS relaciona la concentración de sodio con respecto al calcio y magnesio, indicando la probabilidad de que el sodio reemplace a estos cationes en el complejo de cambio."
    },
    {
        "id": 30,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué caracteriza a los micronutrientes esenciales en la nutrición vegetal frente a los macronutrientes?",
        "opciones": [
            "A) Se requieren en menores concentraciones tisulares pero son igualmente indispensables para funciones metabólicas vitales",
            "B) Su ausencia no causa ningún síntoma visual de deficiencia",
            "C) Se absorben exclusivamente por vía foliar y nunca por la raíz",
            "D) No forman parte de ninguna enzima ni proteína estructural"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Aunque requeridos en ppm (partes por millón), los micronutrientes (Fe, Zn, Mn, Cu, B, Mo, Cl, Ni) cumplen roles catalíticos y estructurales críticos."
    },
    {
        "id": 31,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Cuál es la fórmula fundamental para calcular el caudal (Q) en un canal abierto mediante el uso de la ecuación de Manning?",
        "opciones": [
            "A) Q = C * A * sqrt(2 * g * H)",
            "B) Q = V * P * h",
            "C) Q = (1/n) * A * R^(2/3) * S^(1/2)",
            "D) Q = K * i * A"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La ecuación de Manning relaciona el caudal con la rugosidad de las paredes (n), el área hidráulica (A), el radio hidráulico (R) y la pendiente de la línea de energía (S)."
    },
    {
        "id": 32,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En un sistema de riego presurizado por goteo, ¿qué función cumple una válvula reguladora de presión?",
        "opciones": [
            "A) Inyectar fertilizantes líquidos de manera automática",
            "B) Filtrar partículas en suspensión mayores a 100 micras",
            "C) Mantener una presión constante aguas abajo independientemente de las fluctuaciones en la red principal",
            "D) Medir el volumen total de agua consumida por la parcela"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las válvulas reguladoras de presión estabilizan la presión de operación en los laterales de goteo, asegurando la uniformidad de emisión en terrenos con pendiente."
    },
    {
        "id": 33,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué método de riego superficial presenta típicamente la menor eficiencia de aplicación debido a pérdidas por percolación profunda y escorrentía?",
        "opciones": [
            "A) Riego por pivote central",
            "B) Riego por goteo presurizado",
            "C) Riego subsuperficial automatizado",
            "D) Riego por surcos o inundación por gravedad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los métodos gravitacionales (surcos e inundación) suelen tener eficiencias del 40-60%, ya que dependen de la infiltración desuniforme a lo largo de la parcela."
    },
    {
        "id": 34,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué representa la Evapotranspiración de Referencia (ETo) calculada mediante el método de Penman-Monteith FAO?",
        "opciones": [
            "A) El volumen de agua drenado por debajo de la zona radical",
            "B) La demanda evaporativa de la atmósfera referida a una superficie hipotética de pasto corto estándar con suministro hídrico ilimitado",
            "C) El consumo hídrico real de un cultivo específico en etapa de maduración",
            "D) La cantidad de agua evaporada directamente desde un tanque evaporímetro Clase A"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El método Penman-Monteith FAO es el estándar mundial para estimar la ETo integrando variables meteorológicas de temperatura, humedad, viento y radiación."
    },
    {
        "id": 35,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En maquinaria agrícola, ¿qué parámetro determina la capacidad efectiva de campo de un tractor con implemento de labranza?",
        "opciones": [
            "A) La potencia nominal del motor expresada en caballos de fuerza (HP)",
            "B) El consumo específico de combustible por hectárea arada",
            "C) La relación de transmisión de la caja de velocidades",
            "D) La velocidad de avance, el ancho de labor real y la eficiencia de campo operativa"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La capacidad efectiva de campo relaciona la superficie trabajada por unidad de tiempo real, considerando tiempos muertos y solapes, en función del ancho y velocidad."
    },
    {
        "id": 36,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Cuál es el objetivo principal de realizar labores de labranza de conservación (como labranza mínima o siembra directa)?",
        "opciones": [
            "A) Acelerar la mineralización acelerada de toda la materia orgánica",
            "B) Reducir la erosión hídrica y eólica, conservar la humedad y preservar la estructura y microbiota del suelo",
            "C) Invertir completamente el perfil del suelo para enterrar semillas de malezas",
            "D) Compactar las capas profundas para facilitar el paso de maquinaria pesada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La labranza de conservación deja al menos un 30% de residuos vegetales en la superficie, protegiendo al suelo de la erosión y mejorando la infiltración."
    },
    {
        "id": 37,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En un sistema de drenaje agrícola subterráneo, ¿para qué se instalan tuberías perforadas envueltas en geotextil?",
        "opciones": [
            "A) Para conducir agua de riego a presión hacia las raíces profundas",
            "B) Para abatir el nivel freático elevado y prevenir la salinización por ascenso capilar",
            "C) Para calentar la rizosfera en cultivos protegidos",
            "D) Para inyectar aire caliente y secar el perfil arcilloso"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El drenaje subterráneo controla el nivel freático alto, evitando la saturación prolongada de las raíces y la acumulación de sales en la superficie."
    },
    {
        "id": 38,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué instrumento se utiliza para medir la evapotranspiración real a escala de parcela mediante el balance de flujos turbulentos de vapor de agua y dióxido de carbono?",
        "opciones": [
            "A) Piranómetro de silicio",
            "B) Clinómetro forestal",
            "C) Barómetro de mercurio",
            "D) Lisímetro de pesaje y torre de covarianza de vórtices (Eddy Covariance)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El sistema de covarianza de vórtices (Eddy Covariance) mide directamente los flujos verticales de vapor de agua y calor entre la superficie terrestre y la atmósfera."
    },
    {
        "id": 39,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En la selección de bombas hidráulicas para riego, ¿qué indica la curva característica de la bomba?",
        "opciones": [
            "A) La temperatura máxima del agua bombeada",
            "B) La resistencia del motor eléctrico a variaciones de voltaje",
            "C) El costo de mantenimiento anual en función de las horas de uso",
            "D) La relación entre la altura dinámica total (carga) y el caudal suministrado"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La curva característica de una bomba muestra gráficamente cómo varía el caudal entregado al variar la altura manométrica o carga contra la que debe bombear."
    },
    {
        "id": 40,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué ventaja agronómica ofrece el riego presurizado por pivote central en grandes extensiones de cultivos extensivos?",
        "opciones": [
            "A) Automatización y alta uniformidad de aplicación en terrenos con topografía ondulada",
            "B) Nula necesidad de fuentes de energía eléctrica o combustible",
            "C) Aplicación exclusiva de riego por inundación localizada",
            "D) Reducción a cero de la evaporación directa desde las hojas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los pivotes centrales automatizados permiten aplicar láminas de riego precisas con alta uniformidad en superficies extensas de forma continua."
    },
    {
        "id": 41,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Cuál es el objetivo de calcular el Coeficiente de Uniformidad de Christiansen (CU) en un sistema de riego por aspersión?",
        "opciones": [
            "A) Medir la concentración de cloro residual en el agua",
            "B) Estimar la velocidad de infiltración acumulada",
            "C) Calcular la potencia requerida en el cabezal de control",
            "D) Cuantificar la variación espacial en la distribución del agua aplicada por los emisores"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El CU evalúa estadísticamente qué tan uniforme es la lámina de agua caída en los diferentes puntos del patrón de riego de los aspersores."
    },
    {
        "id": 42,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En tractores agrícolas, ¿qué función cumple la toma de fuerza (TDF o PTO)?",
        "opciones": [
            "A) Elevar y descender el sistema de enganche de tres puntos",
            "B) Transmitir potencia mecánica rotacional desde el motor del tractor hacia implementos remolcados o estacionarios",
            "C) Acoplar el sistema de dirección hidráulica asistida",
            "D) Proporcionar tracción independiente a las ruedas delanteras"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La TDF transfiere la potencia del motor a revoluciones estandarizadas (ej. 540 o 1000 RPM) para accionar equipos como desmalezadoras, sembradoras o bombas."
    },
    {
        "id": 43,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué tipo de filtro se debe instalar prioritariamente para remover partículas orgánicas y algas provenientes de un reservorio superficial en riego por goteo?",
        "opciones": [
            "A) Filtro de malla metálica fina",
            "B) Filtro de arena (grava) o hidrociclón secundario",
            "C) Filtro de discos ranurados de baja presión",
            "D) Filtro de cartucho de papel"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los filtros de arena o grava son idóneos para retener materia orgánica flotante, algas y limos gracias a su lecho filtrante tridimensional profundo."
    },
    {
        "id": 44,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué representa la lámina neta de riego (Ln)?",
        "opciones": [
            "A) La cantidad de agua perdida por evaporación en los canales abiertos",
            "B) El caudal total bombeado desde el pozo profundo",
            "C) La cantidad exacta de agua que debe ser retenida en la zona radical para reponer el consumo del cultivo sin pérdidas",
            "D) El volumen de agua necesario para lavar sales profundas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La lámina neta es el agua que efectivamente consumen las plantas y que debe reponerse en el suelo, sin considerar las eficiencias de aplicación del sistema."
    },
    {
        "id": 45,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "En la evaluación de la erosión hídrica, ¿qué variables principales integran la Ecuación Universal de Pérdida de Suelo Revisada (RUSLE)?",
        "opciones": [
            "A) Conductividad hidráulica, pH, CIC y materia orgánica",
            "B) Velocidad del viento, temperatura media y radiación solar global",
            "C) Capacidad de campo, PMP y densidad aparente",
            "D) Erosividad de la lluvia, erodabilidad del suelo, longitud y grado de pendiente, cobertura vegetal y prácticas de conservación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "RUSLE modela la pérdida anual de suelo (A = R * K * L * S * C * P), relacionando la lluvia, suelo, topografía, uso agronómico y prácticas mecánicas."
    },
    {
        "id": 46,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué es el Manejo Integrado de Plagas (MIP)?",
        "opciones": [
            "A) El uso exclusivo de insecticidas químicos sintéticos de amplio espectro en calendario fijo",
            "B) La prohibición absoluta de pesticidas en cualquier etapa fenológica",
            "C) La erradicación total e irreversible de cualquier organismo vivo en el agroecosistema",
            "D) La toma de decisiones ecológicamente basada que utiliza tácticas combinadas (biológicas, culturales, físicas y químicas) para mantener plagas debajo del umbral económico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El MIP prioriza métodos de control ecológicos y económicos, reduciendo la dependencia de plaguicidas sintéticos y minimizando impactos ambientales."
    },
    {
        "id": 47,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué grupo de organismos patógenos causa enfermedades sistémicas en plantas caracterizadas por síntomas de amarillamientos, proliferación de brotes ('escobas de bruja') y transmisión por insectos vectores como chicharritas?",
        "opciones": [
            "A) Oomicetos",
            "B) Hongos deuteromicetos",
            "C) Nemátodos endoparásitos sedentarios",
            "D) Fitoplasmas (bacterias sin pared celular)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los fitoplasmas son bacterias carentes de pared celular que habitan en el floema y son transmitidos por insectos chupadores, alterando el balance hormonal de la planta."
    },
    {
        "id": 48,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Cuál es el modo de acción de los plaguicidas sistémicos en comparación con los de contacto?",
        "opciones": [
            "A) Son absorbidos por la planta y transportados a través del xilema o floema para proteger tejidos nuevos y partes no asperjadas",
            "B) Paralizan el sistema nervioso del insecto por simple contacto cuticular",
            "C) Actúan únicamente sobre la superficie donde fueron aplicados sin penetrar los tejidos",
            "D) Requieren luz ultravioleta intensa para activarse químicamente"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los plaguicidas sistémicos se translocan internamente en el flujo savial, protegiendo a la planta completa, incluyendo brotes emergentes posteriores a la aplicación."
    },
    {
        "id": 49,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué organismo de control biológico clásico se utiliza frecuentemente para el control de la mosquita blanca (*Bemisia tabaci*) en invernaderos?",
        "opciones": [
            "A) *Encarsia formosa* o *Amblyseius swirskii*",
            "B) *Trichogramma pretiosum*",
            "C) *Bacillus thuringiensis* subespecie *kurstaki*",
            "D) *Metarhizium anisopliae*"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "*Encarsia formosa* es una avispa parasitoide ampliamente utilizada contra ninfas de mosquita blanca, mientras que ácaros como *Amblyseius* depredan huevos y estadíos jóvenes."
    },
    {
        "id": 50,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué caracteriza a los síntomas causados por virus fitopatógenos en el follaje de los cultivos?",
        "opciones": [
            "A) Podredumbres húmedas con exudados bacterianos fétidos",
            "B) Patrones de mosaico, clorosis venal, enrulamiento y deformaciones severas",
            "C) Chancros leñosos profundos en ramas principales",
            "D) Aparición de pustulas pulverulentas de esporas de color herrumbre"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los virus fitopatógenos alteran el metabolismo celular generando patrones visuales típicos como mosaicos, anillos cloróticos, enanismo y deformaciones."
    },
    {
        "id": 51,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué función cumple el ingrediente activo *Bacillus thuringiensis* en la protección de cultivos agrícolas?",
        "opciones": [
            "A) Es un bioinsecticida bacteriano que produce proteínas Cry tóxicas para el sistema digestivo de larvas de lepidópteros y otros insectos",
            "B) Es un fungicida sistémico contra oomicetos del suelo",
            "C) Es un nematicida biológico que coloniza la rizosfera",
            "D) Es un herbicida hormonal selectivo de hoja ancha"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "*Bacillus thuringiensis* sintetiza cristales proteicos (endotoxinas) que al ser ingeridos por larvas de plagas, se solubilizan y perforan el epitelio intestinal del insecto."
    },
    {
        "id": 52,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué práctica cultural se considera fundamental para romper el ciclo biológico de plagas monófagas en un terreno agrícola?",
        "opciones": [
            "A) Monocultivo intensivo anual ininterrumpido",
            "B) Rotación de cultivos con especies de familias botánicas no afines",
            "C) Riego por inundación prolongada fuera de temporada",
            "D) Aplicación calendarizada de fertilizantes nitrogenados de alta solubilidad"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La rotación de cultivos priva a las plagas monófagas o de hospedero específico de su fuente de alimento obligatoria, reduciendo drásticamente sus poblaciones."
    },
    {
        "id": 53,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué tipo de sintomatología foliar ocasionan los hongos causantes de las royas (orden Pucciniales)?",
        "opciones": [
            "A) Crecimiento epífito de micelio negruzco superficial (fumagina)",
            "B) Lesiones necróticas circulares con anillos concéntricos",
            "C) Marchitez vascular con obstrucción de vasos xilemáticos",
            "D) Pústulas epidérmicas pulverulentas que liberan esporas de colores amarillos, naranjas o rojizos"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las royas producen pústulas características que rompen la epidermis foliar, liberando uredosporas pulverulentas que propagan la enfermedad rápidamente."
    },
    {
        "id": 54,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Cuál es el principal riesgo agronómico del uso continuado e indiscriminado de un solo grupo químico de plaguicidas?",
        "opciones": [
            "A) Reducción en la incidencia de patógenos secundarios",
            "B) Desarrollo de resistencia genética en las poblaciones de la plaga",
            "C) Incremento en la fertilidad natural del suelo",
            "D) Estimulación del crecimiento vegetativo vigoroso"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La presión de selección constante con un solo mecanismo de acción elimina a los individuos susceptibles y propaga la supervivencia de biotipos resistentes."
    },
    {
        "id": 55,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué diferencia fundamental existe entre un signo y un síntoma en fitopatología?",
        "opciones": [
            "A) El signo es provocado por virus y el síntoma exclusivamente por bacterias",
            "B) El síntoma es microscópico y el signo se observa a simple vista",
            "C) No existe diferencia conceptual en la fitopatología moderna",
            "D) El síntoma es la manifestación visible de la planta ante la enfermedad; el signo es la presencia física de estructuras del patógeno"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los síntomas son las respuestas de la planta enferma (clorosis, marchitez), mientras que los signos son estructuras del agente causal (micelio, esporocarpos, masas bacterianas)."
    },
    {
        "id": 56,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué caracteriza al fenómeno de la alelopatía en la interacción entre plantas arvenses y cultivos?",
        "opciones": [
            "A) La competencia directa por espacio físico subterráneo únicamente",
            "B) La atracción de insectos polinizadores benéficos",
            "C) La liberación de metabolitos secundarios bioquímicos inhibidores o estimulantes por parte de una planta hacia el ambiente",
            "D) La transmisión simbiótica de micorrizas arbusculares"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La alelopatía implica la producción de sustancias químicas (aleloquímicos) liberadas por lixiviación, volatilización o exudación radical que afectan negativamente a plantas vecinas."
    },
    {
        "id": 57,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué método de control físico se emplea frecuentemente en viveros para desinfectar sustratos mediante el uso de radiación solar bajo cubiertas plásticas?",
        "opciones": [
            "A) Termorregulación forzada",
            "B) Criogenización con nitrógeno líquido",
            "C) Solarización",
            "D) Ionización por rayos gamma"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La solarización aprovecha la radiación solar para elevar la temperatura del suelo húmedo cubierto con polietileno, eliminando patógenos, semillas de malezas y nematodos."
    },
    {
        "id": 58,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Cuál es el vector biológico predominante responsable de la transmisión de los virus causantes del achaparramiento y enfermedades afines en gramíneas?",
        "opciones": [
            "A) Áfidos (pulgones) y saltahojas (chicharritas)",
            "B) Nematodos quistes del suelo",
            "C) Ácaros fitófagos de la familia Tetranichidae",
            "D) Moscardones defoliadores"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los insectos chupadores con aparato bucal picador-chupador, especialmente áfidos y chicharritas, son los principales vectores de virus fitopatógenos circulantes o no circulantes."
    },
    {
        "id": 59,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué grupo de fungicidas sistémicos actúa inhibiendo la biosíntesis de ergosterol en la membrana celular de los hongos fitopatógenos?",
        "opciones": [
            "A) Inhibidores de la Demetilación (DMI o Triazoles)",
            "B) Benzimidazoles inhibidores de la tubulina",
            "C) Cúpricos inorgánicos multisitio",
            "D) Ditiocarbamatos protectores de contacto"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los fungicidas triazoles y pirimidinas inhiben la enzima C14-demetilasa, bloqueando la síntesis de ergosterol, componente esencial de las membranas celulares fúngicas."
    },
    {
        "id": 60,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué patología vegetal provoca la bacteria *Erwinia carotovora* (actualmente *Pectobacterium carotovorum*) en hortalizas postcosecha o en campo?",
        "opciones": [
            "A) Tumores y agallas en la corona de frutales",
            "B) Podredumbre blanda bacteriana con destrucción de pectinasas",
            "C) Marchitez vascular letal con clorosis marginal",
            "D) Tizón foliar con manchas angulares limitadas por nervaduras"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Esta bacteria produce enzimas pectolíticas extracelulares que degradan la lamela media celular, causando una rápida y característica podredumbre blanda y acuosa."
    },
    {
        "id": 61,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué mide la relación Costo-Beneficio (B/C) en la evaluación financiera de un proyecto agrícola?",
        "opciones": [
            "A) La tasa de descuento que iguala el valor actual neto a cero",
            "B) El valor presente de los ingresos dividido entre el valor presente de los egresos",
            "C) El tiempo exacto requerido para recuperar la inversión inicial",
            "D) El beneficio neto anual dividido entre la superficie total cultivada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La relación B/C compara los flujos de beneficios actualizados frente a los costos actualizados; un valor superior a 1 indica que el proyecto es financieramente rentable."
    },
    {
        "id": 62,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué representa el Valor Actual Neto (VAN o VPN) en la evaluación de proyectos de inversión agrícola?",
        "opciones": [
            "A) El flujo de caja bruto sin descontar la inflación",
            "B) El costo de oportunidad marginal del suelo agrícola",
            "C) La suma de los flujos de efectivo futuros descontados a una tasa de interés específica, menos la inversión inicial",
            "D) La rentabilidad porcentual anual promedio del capital invertido"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El VAN actualiza todos los flujos de caja futuros a valor presente; si el VAN es mayor a cero, el proyecto genera ganancias superiores a la tasa de descuento exigida."
    },
    {
        "id": 63,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "En la teoría microeconómica aplicada a la agricultura, ¿qué establece la Ley de los Rendimientos Marginales Decrecientes?",
        "opciones": [
            "A) Al añadir unidades sucesivas de un factor variable (ej. fertilizante) manteniendo fijos los demás, el incremento en la producción total terminará disminuyendo",
            "B) La demanda de alimentos es perfectamente elástica ante variaciones de precio",
            "C) Los precios de los commodities agrícolas siempre decrecen a largo plazo",
            "D) El costo total de producción se reduce infinitamente al aumentar la escala de siembra"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Esta ley económica fundamental indica que la productividad marginal de un insumo variable disminuye a medida que se incrementa su uso con otros factores constantes."
    },
    {
        "id": 64,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué es la Tasa Interna de Retorno (TIR) en la evaluación financiera de agronegocios?",
        "opciones": [
            "A) La tasa de depreciación contable de la maquinaria agrícola",
            "B) El margen bruto de comercialización en canales de abasto",
            "C) La tasa de descuento que hace que el Valor Actual Neto (VAN) sea exactamente igual a cero",
            "D) El interés bancario anual por préstamos refaccionarios"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La TIR es la tasa de rendimiento intrínseca del proyecto; si la TIR supera la tasa mínima aceptable de rendimiento (costo de capital), el proyecto es viable."
    },
    {
        "id": 65,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué caracteriza a una cadena de valor agroalimentaria?",
        "opciones": [
            "A) El análisis contable de los costos fijos de un rancho ganadero",
            "B) El subsidio gubernamental directo a los insumos básicos",
            "C) La integración de todos los actores y actividades secuenciales desde la producción primaria, transformación, distribución hasta el consumidor final",
            "D) La venta exclusiva de productos agrícolas sin intermediarios en mercados locales"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La cadena de valor abarca el ciclo completo de creación de valor de un producto agrícola, identificando eslabones para mejorar la competitividad y la trazabilidad."
    },
    {
        "id": 66,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué define el punto de equilibrio en la gestión administrativa de una empresa agrícola?",
        "opciones": [
            "A) El nivel de producción o ventas en el cual los ingresos totales igualan exactamente a los costos totales (beneficio cero)",
            "B) El momento en que los costos fijos superan a los costos variables",
            "C) El precio máximo que el consumidor está dispuesto a pagar en el mercado",
            "D) La cantidad óptima de agua de riego aplicada por hectárea"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En el punto de equilibrio la empresa no genera pérdidas ni ganancias; operativamente cubre todos sus costos fijos y variables."
    },
    {
        "id": 67,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Cuál es el propósito de implementar Buenas Prácticas Agrícolas (BPA) certificadas en una unidad de producción hortofrutícola?",
        "opciones": [
            "A) Garantizar la inocuidad alimentaria, minimizar riesgos de contaminación y facilitar el acceso a mercados de exportación exigentes",
            "B) Eliminar por completo el uso de registros contables y administrativos",
            "C) Incrementar los subsidios fiscales gubernamentales automáticos",
            "D) Eximir a la empresa de cualquier regulación laboral vigente"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las BPA son normas orientadas a asegurar la inocuidad del producto fresco, protegiendo la salud del consumidor y del trabajador agrícola bajo estándares internacionales."
    },
    {
        "id": 68,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué instrumento financiero de gestión de riesgos se utiliza comúnmente en la agricultura comercial para protegerse contra la volatilidad de precios de los granos en mercados internacionales?",
        "opciones": [
            "A) Subastas de tierras ejidales",
            "B) Contratos de futuros y opciones en bolsas de materias primas (como el Chicago Board of Trade)",
            "C) Pólizas de seguros contra incendio en bodegas",
            "D) Créditos quirografarios a tasa variable"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los contratos de futuros y opciones permiten a productores y compradores fijar precios de antemano, mitigando el riesgo por fluctuaciones adversas del mercado."
    },
    {
        "id": 69,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué diferencia existe entre costos fijos y costos variables en la estructura de costos de producción agrícola?",
        "opciones": [
            "A) Los costos fijos corresponden exclusivamente a la mano de obra eventual y los variables a los impuestos",
            "B) Los costos fijos no varían con el nivel de producción (ej. renta de tierra, depreciación); los costos variables cambian según el volumen producido (ej. semillas, fertilizantes, jornaleros)",
            "C) Los costos variables son independientes de la superficie sembrada",
            "D) No existe distinción analítica en la contabilidad agrícola moderna"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los costos fijos se incurren independientemente de que se produzca o no, mientras que los variables dependen directamente de la escala de producción y operaciones."
    },
    {
        "id": 70,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué indicador mide la elasticidad precio de la demanda de productos agrícolas básicos como el maíz o el trigo?",
        "opciones": [
            "A) Tienen elasticidad unitaria constante en todos los países",
            "B) Generalmente son inelásticos, lo que significa que un cambio porcentual en el precio genera un cambio menor porcentual en la cantidad demandada",
            "C) Son perfectamente elásticos ante cualquier variación climática",
            "D) Su demanda se reduce a cero si el precio aumenta un 1%"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los alimentos básicos poseen demanda inelástica porque son bienes de primera necesidad cuyo consumo no varía drásticamente a pesar de fluctuaciones en su precio."
    },
    {
        "id": 71,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Cuál es el objetivo de realizar un análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas) en la planeación estratégica de una empresa agropecuaria?",
        "opciones": [
            "A) Determinar la textura y pH del suelo en laboratorio",
            "B) Evaluar la resistencia mecánica de los tractores en terrenos fangosos",
            "C) Calcular con precisión milimétrica la tasa de inflación anual esperada",
            "D) Diagnosticar la situación interna de la empresa frente al entorno externo para formular estrategias competitivas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El FODA es una herramienta de diagnóstico estratégico que cruza factores internos (capacidades, recursos) y externos (mercado, clima, regulaciones) para la toma de decisiones."
    },
    {
        "id": 72,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué representa la amortización de un crédito agrícola a mediano plazo?",
        "opciones": [
            "A) El reembolso gradual del principal del préstamo mediante pagos periódicos programados junto con los intereses",
            "B) La condonación gubernamental de deudas por desastres naturales",
            "C) El incremento anual en el valor comercial de la maquinaria adquirida",
            "D) La tasa de interés moratoria aplicada por retraso"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La amortización consiste en la devolución fraccionada del capital prestado a lo largo de la vida útil del financiamiento."
    },
    {
        "id": 73,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué principio económico rige la asignación óptima de recursos limitados entre diferentes cultivos competitivos?",
        "opciones": [
            "A) La homogeneidad absoluta de los suelos agrícolas",
            "B) La igualdad de las tasas marginales de sustitución técnica entre las alternativas de producción",
            "C) La reducción del precio de venta por debajo del costo marginal",
            "D) La maximización exclusiva del gasto en maquinaria pesada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El principio de equimarginalidad establece que los recursos escasos deben asignarse de modo que el beneficio marginal sea igual en todas las alternativas de uso."
    },
    {
        "id": 74,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Cuál es la función principal de las cooperativas agrícolas o sociedades de producción rural?",
        "opciones": [
            "A) Agrupar a pequeños productores para lograr economías de escala en la compra de insumos, comercialización y acceso a créditos",
            "B) Evitar el pago de cualquier tipo de impuesto federal",
            "C) Sustituir totalmente las funciones del poder judicial agrario",
            "D) Monopolizar los precios internacionales de los granos básicos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las cooperativas fortalecen el poder de negociación de los pequeños agricultores al unificar volúmenes de producción y reducir costos de transacción."
    },
    {
        "id": 75,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué mide la productividad total de los factores (PTF) en la agricultura moderna?",
        "opciones": [
            "A) El número de toneladas de grano cosechadas por cada litro de combustible",
            "B) El porcentaje de subsidios gubernamentales recibidos en el año",
            "C) La eficiencia con la que se combinan todos los insumos (tierra, trabajo, capital, tecnología) para generar producto agrícola",
            "D) La superficie total sembrada frente a la superficie en descanso"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La PTF evalúa el crecimiento de la producción que no es explicado por el aumento en la cantidad de insumos tradicionales, reflejando el impacto de la innovación tecnológica."
    },
    {
        "id": 76,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué principio fundamental persigue la agricultura de conservación?",
        "opciones": [
            "A) Mínima alteración mecánica del suelo, cobertura permanente con rastrojos y diversificación de cultivos en rotación",
            "B) Quema controlada de residuos de cosecha para incorporar cenizas rápidamente",
            "C) Labranza profunda anual con arado de vertedera para eliminar toda maleza",
            "D) Uso intensivo de fertilizantes sintéticos de alta solubilidad y riego por inundación"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los tres pilares de la agricultura de conservación son la mínima perturbación del suelo, la cobertura vegetal permanente y la diversificación biológica."
    },
    {
        "id": 77,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué impacto ambiental negativo genera el uso excesivo y desbalanceado de fertilizantes nitrogenados en cuerpos de agua cercanos (eutrofización)?",
        "opciones": [
            "A) Acidificación extrema de la atmósfera por emisión de vapor de agua",
            "B) Crecimiento masivo de algas y plantas acuáticas que al morir consumen el oxígeno disuelto, provocando anoxia y muerte de peces",
            "C) Incremento en la salinidad marina de las fosas abisales",
            "D) Precipitación de carbonato de calcio en los lechos fluviales"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El lavado de nitratos y fosfatos hacia lagos y ríos estimula floraciones algales (eutrofización), cuyo posterior descomposición aeróbica agota el oxígeno disuelto."
    },
    {
        "id": 78,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué rol desempeñan los organismos micorrícicos arbusculares en la sustentabilidad del agroecosistema?",
        "opciones": [
            "A) Fijan nitrógeno atmosférico libre en las hojas de los cultivos",
            "B) Secretan herbicidas naturales contra arvenses latifoliadas",
            "C) Actúan como patógenos estrictos destruyendo el sistema vascular",
            "D) Establecen una simbiosis mutualista con las raíces, mejorando la exploración del suelo y la absorción de fósforo y agua"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los hongos micorrizógenos extienden la red de hifas más allá de la rizopana, facilitando la captación de nutrientes inmóviles como el fósforo a cambio de fotoasimilados."
    },
    {
        "id": 79,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué define a la huella hídrica verde en la producción agrícola?",
        "opciones": [
            "A) El agua desalinizada utilizada en riego tecnificado",
            "B) El agua superficial contaminada por agroquímicos vertidos en ríos",
            "C) El volumen de agua subterránea extraída mediante pozos profundos",
            "D) El volumen de agua de lluvia consumida y evaporada durante el proceso de cultivo de los cultivos"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La huella hídrica verde corresponde al consumo de agua de precipitación almacenada en el suelo como humedad (agua retenida)."
    },
    {
        "id": 80,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Cuál es la principal ventaja de integrar sistemas agroforestales (como árboles intercalados con cultivos anuales)?",
        "opciones": [
            "A) Requerir mantenimiento cero en comparación con la agricultura convencional",
            "B) Reducir drásticamente la infiltración de agua al subsuelo",
            "C) Impedir totalmente el crecimiento de cualquier cultivo intercalado",
            "D) Diversificación de ingresos, mejora de la retención de carbono, protección contra la erosión y optimización del microclima"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los sistemas agroforestales combinan leñosas perennes con cultivos o ganado, generando sinergias ecológicas y económicas que aumentan la resiliencia climática."
    },
    {
        "id": 81,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué gases de efecto invernadero (GEI) son emitidos típicamente por los suelos agrícolas bajo anegamiento prolongado (como en el cultivo de arroz)?",
        "opciones": [
            "A) Ozono troposférico (O3) directo",
            "B) Clorofluorocarbonos (CFC)",
            "C) Metano (CH4) generado por la descomposición anaeróbica de la materia orgánica",
            "D) Monóxido de carbono (CO) por combustión incompleta"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los suelos inundados desarrollan condiciones reductoras donde bacterias metanogénicas producen metano, un potente gas de efecto invernadero."
    },
    {
        "id": 82,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué indicador evalúa la diversidad biológica dentro de un agroecosistema sostenible?",
        "opciones": [
            "A) Índices de biodiversidad como el de Shannon-Wiener o riqueza específica de flora y fauna auxiliar",
            "B) La relación entre costos fijos y variables",
            "C) La concentración de sales solubles en la pasta saturada",
            "D) El índice de rugosidad superficial del terreno"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los índices ecológicos como Shannon-Wiener cuantifican la riqueza y abundancia proporcional de especies, reflejando la estabilidad y salud del agroecosistema."
    },
    {
        "id": 83,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué práctica promueve la captura y secuestro de carbono orgánico en los suelos agrícolas?",
        "opciones": [
            "A) Incorporación de residuos de cosecha, uso de abonos orgánicos, rotación de cultivos y cero labranza",
            "B) Quema anual de rastrojos para mineralizar nutrientes",
            "C) Desmonte y remoción de capas superficiales mediante maquinaria pesada",
            "D) Aplicación de altas dosis de fertilizantes sintéticos acidificantes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las prácticas que incrementan el aporte de biomasa y reducen la aireación excesiva (labranza mínima) favorecen la acumulación estable de carbono en el suelo."
    },
    {
        "id": 84,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué representa el concepto de 'servicios ecosistémicos' provistos por los agroecosistemas bien manejados?",
        "opciones": [
            "A) La producción exclusiva de biomasa comercializable para la agroindustria",
            "B) Subsidios monetarios directos otorgados por bancos internacionales",
            "C) La eliminación absoluta de cualquier ciclo biogeoquímico natural",
            "D) Beneficios como la polinización, control biológico natural, regulación del ciclo hidrológico y fertilidad del suelo"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los servicios ecosistémicos son los beneficios que la sociedad obtiene de los ecosistemas, siendo fundamentales la polinización y la regulación hídrica en la agricultura."
    },
    {
        "id": 85,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Cuál es el objetivo principal de la certificación de productos agrícolas orgánicos?",
        "opciones": [
            "A) Garantizar al consumidor que el alimento fue producido sin pesticidas sintéticos, OGM ni fertilizantes solubles, bajo estrictas normas ecológicas",
            "B) Eximir a los productores del cumplimiento de leyes fiscales nacionales",
            "C) Prohibir cualquier tipo de mecanización en el campo",
            "D) Asegurar que el rendimiento por hectárea sea el triple que en la agricultura convencional"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La agricultura orgánica se basa en estándares de producción que prohíben químicos sintéticos y fomentan la biodiversidad, garantizados mediante sellos de certificación."
    },
    {
        "id": 86,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué efecto negativo provoca la compactación del suelo por tráfico excesivo de maquinaria pesada sobre la dinámica ambiental?",
        "opciones": [
            "A) Neutralización automática de suelos ácidos",
            "B) Incremento permanente de la capacidad de intercambio catiónico",
            "C) Aceleración en la percolación profunda hacia acuíferos limpios",
            "D) Reducción de la macroporosidad, disminución de la infiltración, aumento de la escorrentía superficial y mayor emisión de gases de óxido nitroso"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La compactación destruye la estructura porosa, limita el intercambio gaseoso, induce condiciones de denitrificación (emitiendo N2O) y propicia la erosión por escorrentía."
    },
    {
        "id": 87,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué papel juegan las franjas florales o 'cercos vivos' en los bordes de los campos agrícolas?",
        "opciones": [
            "A) Impedir completamente el paso del aire hacia el cultivo principal",
            "B) Servir como depósito exclusivo para la quema de basura agrícola",
            "C) Proveer refugio, alimento alternativo y hábitat para insectos benéficos, polinizadores y enemigos naturales de plagas",
            "D) Atraer plagas focales para concentrarlas y eliminarlas con alta toxicidad"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los refugios de vegetación nativa incrementan la biodiversidad funcional, favoreciendo la presencia de polinizadores y parasitoides que regulan plagas naturalmente."
    },
    {
        "id": 88,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué es la huella de carbono en la producción agrícola?",
        "opciones": [
            "A) La cantidad de residuos de carbón vegetal depositados tras la quema de parcelas",
            "B) La cuantificación de las emisiones totales de gases de efecto invernadero expresadas en equivalente de CO2 asociadas a todo el ciclo de producción",
            "C) El peso total de materia orgánica carbonatada en el perfil arable",
            "D) La energía eléctrica consumida en el bombeo de agua"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La huella de carbono mide el impacto climático de una actividad agrícola considerando emisiones directas e indirectas (maquinaria, fertilizantes, transporte)."
    },
    {
        "id": 89,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Cuál es el beneficio agronómico y ambiental del uso de abonos orgánicos compostados frente al estiércol fresco?",
        "opciones": [
            "A) Liberación instantánea y masiva de nitrógeno que causa quemado radicular",
            "B) Estabilización de nutrientes, eliminación de patógenos humanos y fitopatógenos por termorregulación, y reducción de fitotoxicidad",
            "C) Incremento inmediato de la acidez del suelo por fermentación ácida",
            "D) Alta presencia de semillas viables de arvenses invasoras"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El compostaje higieniza el estiércol, destruye semillas de malezas y patógenos, y transforma nutrientes en formas estables menos propensas a la lixiviación."
    },
    {
        "id": 90,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué define a la agroecología como disciplina científica y práctica agrícola?",
        "opciones": [
            "A) La mecanización absoluta de las labores culturales con tractores autónomos",
            "B) La aplicación de conceptos y principios ecológicos al diseño y manejo de agroecosistemas sustentables y resilientes",
            "C) La prohibición total del uso de semillas mejoradas genéticamente",
            "D) El estudio exclusivo de los insectos vectores de virus en invernadero"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La agroecología integra la ciencia agronómica con la ecología para diseñar sistemas productivos autosuficientes, biodiversos y socialmente justos."
    },
    {
        "id": 91,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Cuál es el propósito fundamental de diseñar un experimento agronómico utilizando un diseño de Bloques Completos al Azar (DBCA)?",
        "opciones": [
            "A) Asignar los tratamientos de manera totalmente desordenada sin importar el terreno",
            "B) Reducir el número de tratamientos a sólo dos opciones comparativas",
            "C) Controlar y eliminar el efecto de una fuente conocida de variabilidad ambiental (como un gradiente de fertilidad o pendiente)",
            "D) Garantizar que las parcelas experimentales tengan tamaños infinitos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El DBCA agrupa unidades experimentales homogéneas en bloques para aislar la variabilidad espacial del suelo, incrementando la precisión estadística en la comparación de tratamientos."
    },
    {
        "id": 92,
        "area": "Sección Transversal / Metodología",
        "pregunta": "En la investigación agrícola, ¿qué indica un valor de probabilidad (p-value) menor a 0.05 en un análisis de varianza (ANOVA)?",
        "opciones": [
            "A) Los datos experimentales carecen de precisión y deben descartarse",
            "B) La hipótesis nula es totalmente cierta y no hay efecto de los tratamientos",
            "C) Existen diferencias estadísticamente significativas entre al menos dos de los tratamientos evaluados con un 95% de confianza",
            "D) El error experimental superó el 95% de la variabilidad total"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un p-value < 0.05 rechaza la hipótesis nula de igualdad entre tratamientos, indicando que las diferencias observadas son estadísticamente significativas."
    },
    {
        "id": 93,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué técnica estadística multivariada se utiliza comúnmente para agrupar variedades de cultivos con características agronómicas similares basándose en múltiples variables?",
        "opciones": [
            "A) Regresión lineal simple de una sola variable",
            "B) Coeficiente de correlación de Pearson simple",
            "C) Análisis de conglomerados (Cluster Analysis) y Componentes Principales",
            "D) Prueba t de Student para muestras independientes"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El análisis de conglomerados y componentes principales reducen la dimensionalidad y clasifican individuos en grupos homogéneos según sus similitudes fenotípicas."
    },
    {
        "id": 94,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Cuál es la función de una prueba de comparación de medias (como Tukey o Duncan) posterior a un ANOVA significativo?",
        "opciones": [
            "A) Ajustar los datos mediante transformaciones logarítmicas",
            "B) Identificar específicamente cuáles pares de tratamientos presentan diferencias significativas entre sí",
            "C) Calcular la media aritmética general de todo el experimento",
            "D) Determinar si el suelo tenía deficiencias de nitrógeno iniciales"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las pruebas de rangos múltiples (Tukey, Duncan) comparan las medias de los tratamientos entre sí tras rechazar la hipótesis nula en el ANOVA."
    },
    {
        "id": 95,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué representa el coeficiente de variación (CV) en la evaluación de la precisión de un ensayo agronómico de campo?",
        "opciones": [
            "A) El porcentaje de germinación de las semillas utilizadas",
            "B) La tasa de retorno financiero del proyecto de investigación",
            "C) La desviación estándar expresada como porcentaje de la media general, útil para medir la variabilidad experimental",
            "D) La proporción de plantas atacadas por plagas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El CV es una medida adimensional de dispersión relativa; valores bajos indican mayor precisión y menor error experimental en el ensayo."
    },
    {
        "id": 96,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Cuál es la ventaja de utilizar sistemas de información geográfica (SIG) y agricultura de precisión en la gestión de parcelas agrícolas?",
        "opciones": [
            "A) Aplicar insumos de forma variable (TASA VARIABLE) según la necesidad específica de cada zona del terreno identificada mediante sensores",
            "B) Reducir la resolución espacial de las imágenes satelitales a cero",
            "C) Garantizar precios fijos de venta en el mercado internacional",
            "D) Eliminar la necesidad de visitar el campo o tomar muestras de suelo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los SIG y la agricultura de precisión permiten mapear la variabilidad espacial (suelo, rendimiento, plagas) para aplicar insumos exactamente donde se requieren."
    },
    {
        "id": 97,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué tecnología basada en sensores remotos se utiliza habitualmente para calcular el Índice de Vegetación de Diferencia Normalizada (NDVI)?",
        "opciones": [
            "A) Imágenes multiespectrales obtenidas por satélites o drones que miden la reflectancia en las bandas del rojo y rojo cercano (NIR)",
            "B) Sensores sónicos de profundidad radicular",
            "C) Sondas de capacitancia para humedad volumétrica",
            "D) Porómetros estomáticos de resistencia foliar"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El NDVI evalúa el vigor y la densidad de la vegetación verde aprovechando la alta absorción de luz roja por la clorofila y la alta reflectancia en el infrarrojo cercano (NIR)."
    },
    {
        "id": 98,
        "area": "Sección Transversal / Metodología",
        "pregunta": "En la formulación de proyectos de investigación agrícola, ¿qué define la hipótesis de investigación?",
        "opciones": [
            "A) Una proposición tentativa y contrastable sobre la relación entre dos o más variables que se espera demostrar en el estudio",
            "B) Un resumen detallado de los resultados financieros obtenidos al final",
            "C) La lista de equipos de laboratorio requeridos para el análisis químico",
            "D) El presupuesto operativo aprobado por la institución financiadora"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La hipótesis plantea la suposición científica que será sometida a prueba mediante el diseño experimental y el análisis estadístico posterior."
    },
    {
        "id": 99,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué procedimiento metodológico se debe seguir al tomar una muestra compuesta de suelo representativa de una parcela agrícola?",
        "opciones": [
            "A) Juntar muestras de suelos con texturas y colores totalmente contrastantes",
            "B) Extraer una única muestra superficial en el centro exacto del terreno",
            "C) Tomar la muestra exclusivamente después de haber aplicado fertilizante granulado",
            "D) Tomar múltiples submuestras en recorrido en zigzag abarcando toda la superficie homogénea, mezclarlas y extraer una muestra representativa final"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Una muestra compuesta minimiza la variabilidad local mediante la mezcla de múltiples submuestras obtenidas bajo criterios de uniformidad de manejo y relieve."
    },
    {
        "id": 100,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué utilidad tiene el análisis de correlación lineal de Pearson entre dos variables agronómicas (ej. rendimiento y dosis de nitrógeno)?",
        "opciones": [
            "A) Calcular los costos totales de producción por hectárea",
            "B) Medir la fuerza y dirección de la asociación lineal entre ambas variables",
            "C) Demostrar una relación de causalidad directa e inequívoca",
            "D) Ajustar el diseño experimental en bloques al azar"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El coeficiente de correlación cuantifica cómo se relacionan linealmente dos variables, aunque correlación no implica necesariamente causalidad directa."
    },
    {
        "id": 101,
        "area": "Fitotecnia",
        "pregunta": "¿Qué proceso fisiológico de maduración en frutos climatéricos se caracteriza por un pico respiratorio acentuado y una alta síntesis de etileno?",
        "opciones": [
            "A) Maduración en frutos como tomate, plátano y manzana, los cuales pueden madurar fuera de la planta inducidos por etileno",
            "B) Acumulación directa de sacarosa sin intervención hormonal",
            "C) Maduración en frutos no climatéricos como cítricos y uvas",
            "D) Inhibición total de la actividad enzimática de pectinasas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los frutos climatéricos presentan un incremento abrupto en la respiración y producción de etileno al alcanzar la madurez fisiológica, permitiendo su postcosecha."
    },
    {
        "id": 102,
        "area": "Fitotecnia",
        "pregunta": "¿Cuál es el objetivo de realizar la práctica de raleo de frutos en frutales de hueso como el durazno?",
        "opciones": [
            "A) Estimular la caída prematura de todo el follaje",
            "B) Disminuir la demanda de carbohidratos en el árbol",
            "C) Reducir el número total para incrementar el calibre, calidad comercial y evitar la Hadley (vecería)",
            "D) Acelerar la susceptibilidad a ataques fúngicos en la piel del fruto"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El raleo ajusta la carga frutal, mejorando el tamaño, color y acumulación de azúcares en los frutos restantes al optimizar la relación fuente-sumidero."
    },
    {
        "id": 103,
        "area": "Fitotecnia",
        "pregunta": "¿Qué caracteriza al fenómeno de la androesterilidad en programas de mejoramiento genético de plantas para la producción de híbridos?",
        "opciones": [
            "A) La incapacidad de la planta para producir polen funcional, facilitando la emasculación en cruzas controladas",
            "B) La esterilidad completa del sistema radicular frente a sequía",
            "C) La resistencia absoluta a insectos chupadores",
            "D) La esterilidad de los óvulos en el ovario floral"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La androesterilidad (genética o citoplasmática) impide la producción de polen viable, evitando la autofecundación y facilitando la producción comercial de semillas híbridas F1."
    },
    {
        "id": 104,
        "area": "Fitotecnia",
        "pregunta": "¿Qué efecto produce la aplicación de ácido giberélico (GA3) en la producción comercial de uva de mesa sin semilla (tipo Thompson Seedless)?",
        "opciones": [
            "A) Abscisión total de los racimos florales",
            "B) Inducción de dormancia invernal inmediata",
            "C) Inhibición del crecimiento vegetativo de los sarmientos",
            "D) Alargamiento del ráquis e incremento significativo en el tamaño de la baya"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las giberelinas se aplican exógenamente para estirar el racimo (evitando pudriciones) y estimular la división y expansión celular, logrando bayas de mayor calibre comercial."
    },
    {
        "id": 105,
        "area": "Fitotecnia",
        "pregunta": "¿Qué daño fisiológico provoca el fenómeno de golpe de sol ('sunscald') en frutos expuestos a alta radiación en campo?",
        "opciones": [
            "A) Cierre permanente de lenticelas sin alterar la calidad",
            "B) Necrosis localizada y decoloración de la epidermis por desnaturalización térmica y daño oxidativo",
            "C) Estimulación de la síntesis de almidón en la pulpa",
            "D) Incremento de la capacidad de almacenamiento en frío"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La alta radiación solar y temperaturas superficiales elevadas destruyen los pigmentos clorofílicos y dañan las membranas celulares, causando necrosis en la cara expuesta del fruto."
    },
    {
        "id": 106,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué describe la velocidad de infiltración básica de un suelo?",
        "opciones": [
            "A) La tasa constante a la cual el agua penetra en el perfil del suelo una vez alcanzada la saturación prolongada",
            "B) El drenaje gravitacional instantáneo en suelos arenosos",
            "C) La velocidad con la que el agua asciende por capilaridad desde la napa freática",
            "D) El volumen inicial de agua absorbida en los primeros 5 segundos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Tras un riego prolongado, la infiltración se estabiliza en un valor constante conocido como velocidad de infiltración básica, clave para diseñar sistemas de riego."
    },
    {
        "id": 107,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Cuál es el papel del azufre (S) elemental aplicado como enmienda en suelos calcáreos alcalinos?",
        "opciones": [
            "A) Actúa como herbicida selectivo contra malezas de hoja ancha",
            "B) Eleva el pH por encima de 9.0 para precipitar sodio",
            "C) Incrementa la compactación superficial para evitar erosión eólica",
            "D) Es oxidado por bacterias del género *Thiobacillus* generando ácido sulfúrico que disminuye el pH y solubiliza fósforo y micronutrientes"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La oxidación biológica del azufre elemental produce acidez (protones), lo que neutraliza los carbonatos libres y reduce el pH en suelos calcáreos, mejorando la disponibilidad de fierro y zinc."
    },
    {
        "id": 108,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué nutriente esencial forma parte de los aminoácidos azufrados (metionina y cisteína) y es vital para la síntesis de proteínas y compuestos secundario de defensa en crucíferas?",
        "opciones": [
            "A) Cloro (Cl)",
            "B) Molibdeno (Mo)",
            "C) Boro (B)",
            "D) Azufre (S)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El azufre es constituyente esencial de aminoácidos clave para la estructura proteica y está relacionado con la calidad organoléptica en cultivos como ajo, cebolla y brócoli."
    },
    {
        "id": 109,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué caracteriza a los suelos histosoles según la taxonomía del USDA?",
        "opciones": [
            "A) Presencia de un horizonte petrocálcico impermeable a poca profundidad",
            "B) Suelos volcánicos jóvenes derivados de cenizas (andisoles)",
            "C) Predominio absoluto de arenas cuarcíticas sin arcilla",
            "D) Alta acumulación de materia orgánica en descomposición (suelos orgánicos o turbas) con más de 20-30% de carbono orgánico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los histosoles son suelos formados por acumulación de restos vegetales parcialmente descompuestos en condiciones de saturación hídrica (turberas)."
    },
    {
        "id": 110,
        "area": "Suelos y Nutrición Vegetal",
        "pregunta": "¿Qué problema nutricional induce un exceso severo de potasio (K+) en la solución del suelo sobre la absorción de otros cationes por parte del tomate?",
        "opciones": [
            "A) Bloqueo de la absorción de aniones nitrato",
            "B) Inmunidad total frente a patógenos vasculares",
            "C) Antagonismo iónico que provoca deficiencias inducidas de calcio (Ca2+) y magnesio (Mg2+)",
            "D) Incremento masivo en la asimilación de fósforo insoluble"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El exceso de potasio compite con el calcio y magnesio en los sitios de intercambio radicular, induciendo deficiencias de calcio que en tomate se manifiestan como pudrición apical ('blossom-end rot')."
    },
    {
        "id": 111,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Qué componente de un sistema de riego presurizado se encarga de retener partículas minerales pesadas (como arena y gravas finas) mediante la fuerza centrífuga?",
        "opciones": [
            "A) Filtro de malla metálica",
            "B) Hidrociclón",
            "C) Válvula de aire cinética",
            "D) Tanque de fertilización Venturi"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El hidrociclón utiliza un flujo tangencial para generar un remolino centrífugo que precipita partículas densas de arena hacia un depósito inferior."
    },
    {
        "id": 112,
        "area": "Ingeniería Agrícola e Irrigación",
        "pregunta": "¿Cuál es la función de una ventosa o válvula de aire en una línea principal de conducción de riego?",
        "opciones": [
            "A) Filtrar impurezas orgánicas en suspensión",
            "B) Medir el caudal instantáneo en metros cúbicos por hora",
            "C) Evitar la formación de vacíos (colapso de tuberías) y expulsar acumulaciones de aire atrapado durante el llenado y vaciado",
            "D) Regular la presión de salida hacia los aspersores"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las ventosas admiten y expulsan aire automáticamente en las tuberías, previniendo sobrepresiones por golpes de ariete y depresiones que colapsen el ducto."
    },
    {
        "id": 113,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué método de control biológico inundativo implica la liberación masiva de insectos entomófagos o parasitoides criados en laboratorio?",
        "opciones": [
            "A) Control biológico aumentativo (inundativo)",
            "B) Erradicación físico-mecánica",
            "C) Conservación de enemigos naturales nativos",
            "D) Control biológico clásico por importación"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El control aumentativo inundativo consiste en liberar masivamente agentes de control biológico (como *Trichogramma*) para lograr un control rápido de plagas en momentos críticos."
    },
    {
        "id": 114,
        "area": "Protección Vegetal y Sanidad",
        "pregunta": "¿Qué síntomas ocasiona el complejo de hongos causantes de las pudriciones de raíz y corona, como *Fusarium oxysporum*?",
        "opciones": [
            "A) Obstrucción de los vasos xilemáticos, marchitez foliar unilateral, amarillamiento y necrosis vascular interna",
            "B) Formación de agallas radiculares hipertróficas",
            "C) Pústulas pulverulentas superficiales en hojas y tallos verdes",
            "D) Deformación y abolladura en frutos maduros"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "*Fusarium oxysporum* es un hongo habitante del suelo que penetra por raíces y coloniza el xilema, bloqueando el flujo de agua y causando marchitez vascular típica."
    },
    {
        "id": 115,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué mide la Tasa Interna de Retorno Modificada (TIRM) frente a la TIR convencional?",
        "opciones": [
            "A) Corrige el supuesto de reinversión de los flujos de caja a la tasa de la propia TIR, asumiendo una tasa de reinversión realista del costo de capital",
            "B) Elimina el efecto de la inflación en los precios de los insumos",
            "C) Mide el riesgo cambiario en exportaciones agrícolas",
            "D) Calcula exclusivamente los costos fijos anuales de depreciación"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La TIRM soluciona la limitación de la TIR estándar sobre la reinversión de flujos intermedios, proporcionando una medida de rentabilidad más conservadora y confiable."
    },
    {
        "id": 116,
        "area": "Economía, Administración y Agronegocios",
        "pregunta": "¿Qué define a la agricultura contractualmente integrada (agricultura por contrato)?",
        "opciones": [
            "A) El subsidio gubernamental directo a la compra de tractores",
            "B) La venta libre de cosechas en mercados spot al mejor postor diario",
            "C) El arrendamiento temporal de tierras ejidales a multinacionales",
            "D) Un acuerdo previo entre productores agrícolas y compradores (agroindustrias) sobre volumen, calidad, precio y fecha de entrega antes de la siembra"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La agricultura por contrato reduce la incertidumbre de precios y mercado para el productor y asegura suministro estandarizado para la industria procesadora."
    },
    {
        "id": 117,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué rol cumplen los humedales artificiales construidos en el tratamiento de aguas residuales agroindustriales antes de su descarga o reutilización en riego?",
        "opciones": [
            "A) Depuración natural mediante procesos físicos, químicos y biológicos mediados por vegetación acuática y microorganismos rizosféricos",
            "B) Cloración intensiva del caudal efluente",
            "C) Filtración a alta presión de sales disueltas",
            "D) Evaporación total del agua mediante calentamiento solar artificial"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los humedales artificiales utilizan plantas flotantes o emergentes y su microbiota asociada para remover nutrientes, materia orgánica y patógenos de las aguas residuales."
    },
    {
        "id": 118,
        "area": "Sustentabilidad y Ciencias Ambientales",
        "pregunta": "¿Qué impacto positivo genera la diversificación de cultivos mediante rotaciones complejas sobre la sustentabilidad del suelo?",
        "opciones": [
            "A) Rompe los ciclos de plagas y enfermedades, mejora la estructuración con raíces de diferente profundidad y optimiza la exploración de nutrientes",
            "B) Incrementa la necesidad de aplicar herbicidas residuales de alta persistencia",
            "C) Acelera la erosión eólica por falta de cobertura estacional",
            "D) Reduce la actividad microbiana total en la rizopana"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La diversidad de especies en rotación mejora la salud del suelo al alternar hábitos radiculares, hospedar diferentes microbios benéficos y desequilibrar patógenos específicos."
    },
    {
        "id": 119,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Cuál es la utilidad del análisis estadístico de regresión no lineal (como el modelo logístico o cuadrático) en estudios de respuesta a la fertilización nitrogenada?",
        "opciones": [
            "A) Determinar la textura granulométrica del suelo arcilloso",
            "B) Calcular la probabilidad de heladas tempranas en invierno",
            "C) Medir la resistencia estomática foliar bajo sequía",
            "D) Estimar con precisión la dosis económica óptima de fertilizante maximizando el rendimiento y el beneficio monetario"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los modelos de respuesta cuadrática o de meseta permiten modelar la ley de rendimientos decrecientes y calcular exactamente la dosis óptima económica de fertilizante."
    },
    {
        "id": 120,
        "area": "Sección Transversal / Metodología",
        "pregunta": "¿Qué importancia tiene la trazabilidad en la cadena de suministro agroalimentaria moderna?",
        "opciones": [
            "A) Permite rastrear el historial, ubicación y trayectoria de un producto alimentario desde su origen en la parcela hasta el consumidor final, asegurando inocuidad",
            "B) Facilita el cálculo de los costos fijos de maquinaria agrícola",
            "C) Evita el uso de registros informáticos en la administración del rancho",
            "D) Incrementa artificialmente el precio final del grano en el mercado spot"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La trazabilidad es clave para la seguridad alimentaria global, permitiendo identificar rápidamente el origen de cualquier contaminación o problema sanitario en la cadena."
    }
];