// Banco de Reactivos - EGEL Plus Arquitectura (Bloque 1: Preguntas 1 a 40)
const bancoPreguntas = [
    {
        id: 1,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño bioclimático, ¿qué busca primordialmente la orientación óptima de los espacios habitables en latitudes del hemisferio norte?",
        opciones: [
            "A) Orientar los espacios principales hacia el norte para recibir sol directo todo el año.",
            "B) Aprovechar la ganancia solar pasiva en invierno orientando hacia el sur y protegiendo de la radiación excesiva en verano.",
            "C) Cerrar totalmente los vanos hacia el oriente y occidente sin importar la ventilación.",
            "D) Situar los núcleos de servicio en las fachadas con mayor asoleamiento."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La orientación sur en el hemisferio norte permite un control óptimo de la radiación solar mediante elementos de protección horizontal, captando sol en invierno y bloqueándolo en verano."
    },
    {
        id: 2,
        area: "Estructuras",
        pregunta: "En mecánica de materiales, ¿cómo se define el fenómeno de 'Pandeo' en una columna esbelta?",
        opciones: [
            "A) La ruptura por compresión directa del concreto sin deformación lateral.",
            "B) El agrietamiento transversal por cortante puro en los extremos.",
            "C) La flexión lateral repentina que sufre el elemento cuando se le aplica una carga axial de compresión que supera su carga crítica.",
            "D) El alargamiento longitudinal por tensión excesiva."
        ],
        respuestaCorrecta: 3, // D (Wait, index 3 is D. Let's check options: A=0, B=1, C=2, D=3. Here it's option C, so respuestaCorrecta = 2)
        // Let's rewrite option indices carefully to match the planned sequence: Q2 should be 3 (D).
    },
    {
        id: 2,
        area: "Estructuras",
        pregunta: "En mecánica de materiales, ¿cómo se define el fenómeno de 'Pandeo' en una columna esbelta?",
        opciones: [
            "A) La ruptura por compresión directa del concreto sin deformación lateral.",
            "B) El agrietamiento transversal por cortante puro en los extremos.",
            "C) El alargamiento longitudinal por tensión excesiva.",
            "D) La flexión lateral repentina que sufre el elemento cuando se le aplica una carga axial de compresión que supera su carga crítica."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El pandeo es una falla por inestabilidad geométrica típica de elementos comprimidos esbeltos cuando alcanzan su carga crítica de Euler."
    },
    {
        id: 3,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple el acero de refuerzo longitudinal en una trabe o viga de concreto reforzado?",
        opciones: [
            "A) Absorber y resistir los esfuerzos de tensión generados por los momentos flectores.",
            "B) Soportar exclusivamente las cargas térmicas del medio ambiente.",
            "C) Evitar por completo la contracción volumétrica por fraguado.",
            "D) Sustituir la resistencia a la compresión del concreto."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El concreto resiste bien la compresión pero es débil a la tracción; el acero longitudinal se coloca en la zona traccionada para absorber dichos esfuerzos."
    },
    {
        id: 4,
        area: "Instalaciones",
        pregunta: "En una instalación hidrosanitaria, ¿para qué sirve el sello hidráulico (sifón o trampa) instalado en los muebles sanitarios?",
        opciones: [
            "A) Para incrementar la presión del agua potable en los pisos superiores.",
            "B) Para regular el caudal volumétrico de descarga hacia la red municipal.",
            "C) Para impedir el paso de gases malolientes y vectores patógenos desde el drenaje hacia el interior de los espacios habitables.",
            "D) Para filtrar los residuos sólidos pesados antes de la fosa séptica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El sifón retiene una columna de agua que actúa como barrera física contra los gases y olores fétidos provenientes de la tubería de desagüe."
    },
    {
        id: 5,
        area: "Normativa y Gestión",
        pregunta: "En la administración de proyectos inmobiliarios, ¿qué define el coeficiente de ocupación del suelo (COS)?",
        opciones: [
            "A) La altura máxima permitida en niveles sobre el nivel de banqueta.",
            "B) El número máximo de cajones de estacionamiento requeridos por habitante.",
            "C) El presupuesto financiero total autorizado para la cimentación.",
            "D) La proporción máxima de la superficie del terreno que puede estar ocupada por la proyección horizontal de la construcción."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El COS limita el porcentaje del terreno que puede ser desplante de edificación, asegurando áreas libres y permeables."
    },
    {
        id: 6,
        area: "Diseño Arquitectónico",
        pregunta: "En antropometría y ergonomía arquitectónica, ¿qué evalúa el estudio de los espacios de circulación horizontal?",
        opciones: [
            "A) Los flujos de tránsito, anchos mínimos de pasillos y radio de giro para garantizar la accesibilidad y evacuación segura de los usuarios.",
            "B) La resistencia mecánica de los firmes de concreto ante cargas rodantes pesadas.",
            "C) La transmitancia térmica de los muros divisorios ligeros.",
            "D) La cantidad de luminarias LED requeridas por metro cuadrado."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las circulaciones horizontales se dimensionan con base en el flujo peatonal esperado y normativas de seguridad para permitir un tránsito fluido y desalojo rápido."
    },
    {
        id: 7,
        area: "Estructuras",
        pregunta: "En el análisis de estructuras, ¿qué caracteriza a una estructura isostática?",
        opciones: [
            "A) Posee más incógnitas de reacción que las ecuaciones de equilibrio estático disponibles.",
            "B) Sus reacciones y esfuerzos internos pueden determinarse enteramente mediante las ecuaciones de la estática.",
            "C) Carece de apoyos fijos y es totalmente inestable ante sismos.",
            "D) Sus elementos sufren deformaciones elásticas infinitas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una estructura isostática tiene un número de incógnitas estáticas igual al número de ecuaciones de equilibrio disponibles, haciéndola determinada analíticamente."
    },
    {
        id: 8,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué propiedad del concreto fresco mide la prueba de revenimiento (Slump Test) en obra?",
        opciones: [
            "A) La resistencia mecánica a la compresión a los 28 días.",
            "B) El tiempo exacto de fraguado inicial.",
            "C) La consistencia, fluidez y trabajabilidad de la mezcla.",
            "D) El peso volumétrico de los agregados pétreos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El cono de Abrams mide el revenimiento o descenso del concreto fresco, indicando su nivel de fluidez y facilidad de colocación."
    },
    {
        id: 9,
        area: "Instalaciones",
        pregunta: "En instalaciones eléctricas residenciales, ¿cuál es la función de un interruptor termomagnético (pastilla)?",
        opciones: [
            "A) Interrumpir automáticamente el circuito ante sobrecorrientes y cortocircuitos para proteger el cableado y prevenir incendios.",
            "B) Transformar la corriente alterna en corriente directa de bajo voltaje.",
            "C) Medir el consumo acumulado de energía en kilovatios-hora.",
            "D) Regular las fluctuaciones de voltaje de la compañía suministradora."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los interruptores termomagnéticos protegen la instalación contra sobrecargas y cortocircuitos mediante un mecanismo bimetálico y magnético."
    },
    {
        id: 10,
        area: "Normativa y Gestión",
        pregunta: "En la programación de obra, ¿qué representa la Ruta Critical (Ruta Crítica) en un diagrama PERT/CPM?",
        opciones: [
            "A) La secuencia de actividades con menor holgura que determina la duración mínima total del proyecto.",
            "B) El conjunto de tareas administrativas con mayor presupuesto financiero.",
            "C) Las actividades subcontratadas con proveedores extranjeros.",
            "D) El camino de tareas que no requiere supervisión técnica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La ruta crítica marca las tareas cuya demora repercute directamente en la fecha de finalización del proyecto completo."
    },
    {
        id: 11,
        area: "Diseño Arquitectónico",
        pregunta: "En planeación urbana, ¿qué define el concepto de 'Zonificación Mixta'?",
        opciones: [
            "A) La prohibición absoluta de actividades comerciales en zonas residenciales.",
            "B) La integración armónica de diferentes usos de suelo (habitacional, comercial, oficinas y servicios) en una misma zona o edificio.",
            "C) La separación industrial estricta mediante áreas de amortiguamiento.",
            "D) La construcción exclusiva de vialidades para transporte masivo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La zonificación mixta fomenta ciudades funcionales y sostenibles al combinar viviendas, comercios y servicios en proximidad."
    },
    {
        id: 12,
        area: "Estructuras",
        pregunta: "En el diseño sismorresistente, ¿qué propiedad busca garantizar la ductilidad en elementos de concreto armado?",
        opciones: [
            "A) Que la estructura falle de forma frágil e imprevista.",
            "B) Que el elemento soporte deformaciones inelásticas significativas antes del colapso, disipando la energía del sismo.",
            "C) Que los materiales no experimenten ninguna deformación elástica.",
            "D) Que el peso propio de la losa aumente para absorber vibraciones."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La ductilidad permite que la estructura se deforme plásticamente sin colapsar de forma frágil, absorbiendo y disipando la energía sísmica."
    },
    {
        id: 13,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué patología constructiva provoca eflorescencias salinas y deterioro en los muros a base de mampostería debido al agua del suelo?",
        opciones: [
            "A) Humedad por capilaridad.",
            "B) Asentamiento diferencial severo.",
            "C) Punzonamiento por cargas concentradas.",
            "D) Corrosión electroquímica en armados de losa."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La humedad capilar asciende desde el subsuelo por los poros del muro, transportando sales minerales que al evaporarse generan manchas blancas (eflorescencias)."
    },
    {
        id: 14,
        area: "Instalaciones",
        pregunta: "En redes hidrosanitarias verticales, ¿qué función cumple el tubo ventila principal?",
        opciones: [
            "A) Suministrar agua a presión a los tinacos.",
            "B) Conducir las aguas pluviales hacia pozos de absorción.",
            "C) Equilibrar la presión atmosférica en el sistema de desagüe para evitar la succión y ruptura del sello hidráulico en las trampas.",
            "D) Medir el caudal de aguas negras descargadas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El tubo ventila previene sobrepresiones o vacíos en la red sanitaria que vaciarían los sellos de agua de los sanitarios y lavabos."
    },
    {
        id: 15,
        area: "Normativa y Gestión",
        pregunta: "En la contratación de obra pública o privada, ¿en qué consiste un contrato a 'Precio Alzado'?",
        opciones: [
            "A) Se paga conforme al volumen real ejecutado medido semanalmente.",
            "B) Se establece un monto total fijo e invariable por la ejecución completa de la obra, asumiendo el contratista el riesgo de variación en costos.",
            "C) El costo final se determina sumando facturas de insumos al término de la obra.",
            "D) Se retiene un porcentaje de utilidad variable según la inflación."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El precio alzado fija una contraprestación única y total, transfiriendo al constructor la variabilidad en los precios de materiales y mano de obra."
    },
    {
        id: 16,
        area: "Diseño Arquitectónico",
        pregunta: "En iluminación arquitectónica, ¿qué mide la unidad denominada 'Lux'?",
        opciones: [
            "A) El flujo luminoso total emitido por una fuente omnidireccional.",
            "B) La temperatura de color de una lámpara en grados Kelvin.",
            "C) El consumo de potencia eléctrica en vatios.",
            "D) La iluminancia, es decir, el flujo luminoso que incide sobre una superficie (1 lumen por metro cuadrado)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El lux mide la cantidad de luz (lúmenes) que incide sobre una superficie de un metro cuadrado."
    },
    {
        id: 17,
        area: "Estructuras",
        pregunta: "En una viga sujeta a flexión pura, ¿dónde se localiza el eje neutro de la sección transversal?",
        opciones: [
            "A) En la fibra longitudinal donde los esfuerzos normales por flexión son nulos (ni tensión ni compresión).",
            "B) En el borde extremo inferior sometido a máxima tensión.",
            "C) En el punto exacto de aplicación de la carga puntual máxima.",
            "D) En el centro geométrico del claro longitudinal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El eje neutro separa la zona comprimida de la zona traccionada en una viga flexionada, siendo la fibra donde el esfuerzo normal es cero."
    },
    {
        id: 18,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué ventaja principal ofrece el sistema constructivo de losas reticulares (nervadas) aligeradas con casetones?",
        opciones: [
            "A) Eliminar por completo el uso de acero de refuerzo en la estructura.",
            "B) Reducir el peso muerto de la losa al desplazar concreto en zonas de baja solicitación, permitiendo cubrir claros mayores.",
            "C) Funcionar como aislamiento térmico exterior de fachadas.",
            "D) Soportar directamente cargas concentradas extremas sin trabes de apoyo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los casetones aligeran las losas al ocupar espacio donde el concreto no trabaja a flexión, optimizando el peso propio y la rigidez."
    },
    {
        id: 19,
        area: "Instalaciones",
        pregunta: "En el diseño de sistemas de aire acondicionado (HVAC), ¿qué evalúa el cálculo de la 'Carga Térmica'?",
        opciones: [
            "A) La ganancia o pérdida de calor en un espacio para dimensionar adecuadamente los equipos de climatización y confort.",
            "B) La presión estática en las tuberías de distribución hidrosanitaria.",
            "C) El consumo eléctrico de los contactos de servicio general.",
            "D) La capacidad de desalojo pluvial en cubiertas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La carga térmica cuantifica las aportaciones de calor por radiación, conducción, infiltración y ocupación para mantener las condiciones de confort."
    },
    {
        id: 20,
        area: "Normativa y Gestión",
        pregunta: "En la supervisión y control de obra, ¿qué documento legal y técnico registra diariamente los acontecimientos, avances, órdenes e incidencias?",
        opciones: [
            "A) La licencia de construcción municipal.",
            "B) El contrato mercantil de prestación de servicios.",
            "C) La bitácora de obra.",
            "D) El catálogo de conceptos paramétricos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La bitácora de obra es el documento oficial y vinculante donde se asientan todas las incidencias técnicas y administrativas durante la ejecución del proyecto."
    },
    {
        id: 21,
        area: "Diseño Arquitectónico",
        pregunta: "En la zonificación de hospitales y centros de salud, ¿qué principio funcional es prioritario?",
        opciones: [
            "A) Priorizar la simetría de las fachadas exteriores.",
            "B) Agrupar los espacios controlando flujos y aislando zonas críticas (quirófanos) para garantizar estrictas condiciones de asepsia.",
            "C) Situar el estacionamiento público junto a las salas de terapia intensiva.",
            "D) Orientar todas las ventanas hacia el poniente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La arquitectura hospitalaria exige una zonificación rigurosa (blancas, grises, negras) para evitar contaminación cruzada y optimizar tiempos de respuesta médica."
    },
    {
        id: 22,
        area: "Estructuras",
        pregunta: "En el diseño de columnas esbeltas de concreto, ¿qué fenómeno límite puede provocar una falla por inestabilidad lateral?",
        opciones: [
            "A) Pandeo estructural.",
            "B) Torsión uniforme pura.",
            "C) Fluencia por cortante.",
            "D) Fatiga térmica cíclica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El pandeo ocurre cuando una columna sometida a compresión alcanza su carga crítica y se flexiona lateralmente de forma súbita."
    },
    {
        id: 23,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué método de unión en estructuras de acero se basa en la fusión térmica del metal base y un electrodo de aporte?",
        opciones: [
            "A) Conexión por pernos de anclaje de expansión.",
            "B) Soldadura por arco eléctrico.",
            "C) Ensambles de fricción con neopreno.",
            "D) Juntas mecánicas con abrazaderas de presión."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La soldadura por arco eléctrico funde los metales base y de aportación para lograr una conexión estructural monolítica."
    },
    {
        id: 24,
        area: "Instalaciones",
        pregunta: "En redes de gas L.P., ¿cuál es una medida de seguridad normativa indispensable para tanques estacionarios en azoteas?",
        opciones: [
            "A) Colocarlos en espacios confinados sin ventilación para protegerlos.",
            "B) Conectarlos directamente a mangueras de hule sin válvulas de corte.",
            "C) Ubicarlos en áreas abiertas con ventilación natural, bases estables y alejados de fuentes de ignición o chispas.",
            "D) Enterrarlos bajo los firmes de planta baja."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los recipientes de gas requieren ventilación abierta y separación de fuentes de calor para disipar cualquier fuga de vapores inflamables."
    },
    {
        id: 25,
        area: "Normativa y Gestión",
        pregunta: "En la evaluación de proyectos inmobiliarios, ¿qué evalúa un estudio de 'Factibilidad Financiera'?",
        opciones: [
            "A) La resistencia del suelo ante cargas estáticas.",
            "B) El diseño estético de los vestíbulos de acceso.",
            "C) La paleta de colores corporativos de la torre.",
            "D) La demanda de mercado, la inversión inicial, el flujo de caja, el Valor Presente Neto (VPN) y la Tasa Interna de Retorno (TIR)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La factibilidad financiera analiza los ingresos proyectados frente a los costos y desembolsos para comprobar la rentabilidad del proyecto."
    },
    {
        id: 26,
        area: "Diseño Arquitectónico",
        pregunta: "En urbanismo, ¿qué mide el indicador de 'Densidad Habitacional'?",
        opciones: [
            "A) La cantidad de habitantes o viviendas por unidad de superficie territorial (hectárea o acre).",
            "B) El porcentaje de área libre permeable respecto al terreno total.",
            "C) La altura máxima permitida en metros sobre nivel de banqueta.",
            "D) El número de cajones de estacionamiento comerciales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La densidad habitacional expresa la concentración de población o viviendas asentadas en una superficie determinada."
    },
    {
        id: 27,
        area: "Tecnología de la Construcción",
        pregunta: "En la impermeabilización de azoteas, ¿qué ventaja principal aportan los mantos prefabricados de asfalto modificado?",
        opciones: [
            "A) Eliminar por completo la necesidad de pendientes pluviales en la losa.",
            "B) Proveer un espesor uniforme de fábrica y alta resistencia a la intemperie y movimientos térmicos.",
            "C) Servir como estructura de soporte para cargas vivas pesadas.",
            "D) Sustituir el aislamiento acústico de entrepisos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los rollos prefabricados garantizan capas homogéneas con alta durabilidad ante la radiación solar y la contracción/dilatación de la losa."
    },
    {
        id: 28,
        area: "Estructuras",
        pregunta: "¿Qué representan los diagramas de Fuerza Cortante y Momento Flector en elementos estructurales?",
        opciones: [
            "A) Los costos directos de mano de obra en el presupuesto.",
            "B) Las variaciones gráficas de las fuerzas internas que experimenta una viga a lo largo de su claro bajo cargas aplicadas.",
            "C) La distribución de presiones eólicas en fachadas vidriadas.",
            "D) Las deformaciones angulares de las zapatas aisladas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los diagramas muestran gráficamente cómo varían el cortante y el momento flector a lo largo del elemento, fundamentales para diseñar el refuerzo."
    },
    {
        id: 29,
        area: "Instalaciones",
        pregunta: "En sistemas contra incendios, ¿cómo operan los rociadores automáticos (sprinklers) de red hidráulica?",
        opciones: [
            "A) Se activan manualmente mediante un interruptor general en la planta baja.",
            "B) Un elemento termosensible se rompe a una temperatura de calibración específica, abriendo el circuito y descargando agua localizada sobre el fuego.",
            "C) Detectan humo denso y cortan el suministro eléctrico general.",
            "D) Vacían toda el agua de la cisterna hacia los sótanos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los rociadores cuentan con una ampolla termosensible que libera el paso del agua al alcanzarse la temperatura de diseño del conato de incendio."
    },
    {
        id: 30,
        area: "Normativa y Gestión",
        pregunta: "En la metodología PMBOK para la dirección de proyectos, ¿qué define la 'Estructura de Desglose del Trabajo' (EDT / WBS)?",
        opciones: [
            "A) La jerarquía de los entregables del proyecto divididos en paquetes de trabajo manejables.",
            "B) El organigrama salarial de la constructora.",
            "C) El flujo de caja financiero trimestral.",
            "D) El diagrama de ruta crítica en red."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La EDT desglosa el alcance total del proyecto en componentes más pequeños y controlables orientados a entregables."
    },
    {
        id: 31,
        area: "Diseño Arquitectónico",
        pregunta: "En accesibilidad universal, ¿cuál es un criterio fundamental para el diseño de rampas peatonales en espacios públicos?",
        opciones: [
            "A) Utilizar pendientes superiores al 20% para ahorrar espacio horizontal.",
            "B) Instalar pavimentos resbalosos para facilitar la limpieza.",
            "C) Mantener pendientes normadas (generalmente entre 6% y 8%), con descansos horizontales y pasamanos dobles.",
            "D) Omitir los pretiles de protección laterales en desniveles altos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las rampas accesibles deben cumplir pendientes suaves y normadas para permitir el desplazamiento seguro de personas en silla de ruedas o con movilidad reducida."
    },
    {
        id: 32,
        area: "Tecnología de la Construcción",
        pregunta: "En acabados de muros, ¿qué función cumple el aplanado o revoque de mortero aplicado sobre la mampostería?",
        opciones: [
            "A) Soportar la carga estructural principal de las losas de entrepiso.",
            "B) Nivelar irregularidades, proteger las piezas de muro y ofrecer una base firme y homogénea para los recubrimientos finos o pintura.",
            "C) Sustituir el aislamiento térmico y acústico del edificio.",
            "D) Funcionar como barrera impermeable bajo el nivel de desplante."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los aplanados uniformizan la superficie de los muros y protegen los materiales constructivos de la intemperie y el desgaste."
    },
    {
        id: 33,
        area: "Estructuras",
        pregunta: "En armaduras o celosías metálicas, ¿qué función cumplen los elementos diagonales (contraventeos)?",
        opciones: [
            "A) Soportar exclusivamente el peso del mobiliario interior.",
            "B) Aumentar la flexibilidad excesiva de las uniones soldadas.",
            "C) Resistir y transferir las cargas laterales por viento o sismo, rigidizando la estructura reticular.",
            "D) Incrementar el peso propio de la cubierta."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los contravientos diagonales rigidizan los marcos estructurales frente a solicitudes horizontales de sismo o viento."
    },
    {
        id: 34,
        area: "Instalaciones",
        pregunta: "¿Qué diferencia principal caracteriza a un sistema eléctrico trifásico frente a uno monofásico?",
        opciones: [
            "A) El trifásico opera con tres corrientes alternas desfasadas 120°, permitiendo alimentar cargas mayores y motores industriales eficientes.",
            "B) El monofásico se emplea únicamente en naves industriales pesadas.",
            "C) El trifásico no requiere conductores de fase ni neutro.",
            "D) No existe diferencia en su capacidad de transferencia de potencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los sistemas trifásicos distribuyen potencia de forma equilibrada y eficiente para cargas pesadas y equipos industriales o comerciales de alto consumo."
    },
    {
        id: 35,
        area: "Normativa y Gestión",
        pregunta: "En la integración de costos directos de obra, ¿qué elementos componen el análisis de un precio unitario (PU)?",
        opciones: [
            "A) Los gastos generales de la oficina central de la constructora.",
            "B) La suma de los costos de materiales puestos en obra, mano de obra especializada, y el rendimiento de maquinaria y herramienta menor.",
            "C) Los impuestos corporativos y el margen de utilidad del contratista.",
            "D) Los honorarios de supervisión externa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El costo directo en un precio unitario engloba exclusivamente los insumos directamente incorporados a la ejecución del concepto (materiales, mano de obra y equipo)."
    },
    {
        id: 36,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de conjuntos habitacionales, ¿qué mide el índice urbano de 'Intensidad de Uso del Suelo'?",
        opciones: [
            "A) La cantidad total de metros cuadrados construidos permitidos en relación con la superficie total del terreno (CUS).",
            "B) El número de árboles plantados por habitante.",
            "C) La velocidad promedio del tráfico vehicular en vialidades internas.",
            "D) La profundidad media de la red de alcantarillado."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Coeficiente de Utilización del Suelo (CUS) regula los metros cuadrados máximos edificables en un predio, controlando la densidad e intensidad urbana."
    },
    {
        id: 37,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué objetivo persigue la cimentación a base de pilotes de fricción en suelos blandos arcillosos?",
        opciones: [
            "A) Transmitir las cargas de la estructura hacia estratos profundos del terreno mediante la resistencia por fricción fuste-suelo y punta.",
            "B) Desplantar la estructura directamente en la capa superficial sin excavaciones.",
            "C) Evitar por completo el uso de concreto armado en la cimentación.",
            "D) Rellenar oquedades kársticas superficiales con mampostería seca."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los pilotes de fricción transfieren el peso del edificio hacia capas profundas del suelo más competentes aprovechando la adherencia lateral y resistencia de punta."
    },
    {
        id: 38,
        area: "Estructuras",
        pregunta: "En el diseño de vigas de concreto reforzado, ¿qué indica la aparición de fisuras perpendiculares al eje longitudinal en la zona inferior de la viga?",
        opciones: [
            "A) Esfuerzos excesivos de compresión en el concreto superior.",
            "B) Presencia de momentos flectores positivos que generan tracción en la fibra inferior superando la resistencia a tensión del concreto.",
            "C) Un asentamiento diferencial grave en los apoyos extremos.",
            "D) Torsión uniforme en el claro central."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las fisuras inferiores en vigas indican que el momento positivo tracciona el fondo de la pieza, requiriendo el acero de refuerzo longitudinal adecuado."
    },
    {
        id: 39,
        area: "Instalaciones",
        pregunta: "En el diseño de bajadas de aguas pluviales (BAP) para cubiertas extensas, ¿qué factores determinan el cálculo del diámetro de la tubería?",
        opciones: [
            "A) La intensidad máxima de lluvia de la región y la superficie de proyección horizontal de la cubierta.",
            "B) El consumo diario de agua potable de los ocupantes del inmueble.",
            "C) La presión hidrostática del suministro municipal.",
            "D) La potencia de los equipos de bombeo hidroneumático."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El dimensionamiento pluvial se calcula correlacionando la tormenta de diseño local (intensidad pluviométrica) y el área de captación de los techos."
    },
    {
        id: 40,
        area: "Normativa y Gestión",
        pregunta: "En la dirección de proyectos, ¿qué establece la triple restricción (o triángulo de gestión de proyectos)?",
        opciones: [
            "A) Que el éxito del proyecto se equilibra gestionando y controlando el Alcance, el Tiempo (cronograma) y el Costo (presupuesto), condicionados por la calidad.",
            "B) Que el contrato debe firmarse exclusivamente ante notario público.",
            "C) Que los costos indirectos no deben superar el 5% del valor de la obra.",
            "D) Que la mano de obra debe ser 100% sindicalizada."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La triple restricción postula que el alcance, el tiempo y el costo están interconectados; modificar uno afecta inevitablemente a los demás."
    },
    {
        id: 41,
        area: "Diseño Arquitectónico",
        pregunta: "En la concepción de proyectos arquitectónicos sustentables, ¿qué persigue la estrategia de diseño de ganancia solar pasiva?",
        opciones: [
            "A) Incrementar masivamente el consumo de energía eléctrica mediante sistemas mecánicos de calefacción.",
            "B) Capturar, almacenar y distribuir la energía solar térmica a través de elementos constructivos y orientación sin requerir sistemas mecánicos activos.",
            "C) Sellar herméticamente los edificios impidiendo la entrada de luz natural directa.",
            "D) Utilizar exclusivamente fachadas de vidrio espejo sin protecciones solares."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La ganancia solar pasiva aprovecha la radiación natural mediante el diseño volumétrico y materiales de alta inercia térmica para calentar los espacios sin consumo energético artificial."
    },
    {
        id: 42,
        area: "Estructuras",
        pregunta: "En el análisis de estructuras, ¿qué define el concepto de 'Momento de Inercia' de una sección transversal respecto a un eje?",
        opciones: [
            "A) La resistencia neta del material a la corrosión por humedad.",
            "B) La capacidad geométrica de la sección para oponerse a la flexión, dependiendo de cómo se distribuye su área respecto al eje de giro.",
            "C) El peso volumétrico total del elemento estructural.",
            "D) El esfuerzo cortante máximo en los apoyos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El momento de inercia es una propiedad geométrica fundamental que mide la resistencia de una sección a flectarse ante la aplicación de momentos."
    },
    {
        id: 43,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué objetivo persigue la prueba de revenimiento en el concreto fresco antes de su vaciado en obra?",
        opciones: [
            "A) Comprobar la consistencia, fluidez y trabajabilidad de la mezcla.",
            "B) Determinar la resistencia exacta a la compresión a los 28 días.",
            "C) Medir el tiempo de fraguado final en moldes.",
            "D) Calcular el peso seco de los agregados pétreos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba de revenimiento mide el grado de fluidez y facilidad de manejo del concreto fresco para asegurar que cumpla con los parámetros de colocación."
    },
    {
        id: 44,
        area: "Instalaciones",
        pregunta: "En el diseño de instalaciones hidrosanitarias, ¿qué función cumple el sello hidráulico (sifón o trampa) en los muebles de baño?",
        opciones: [
            "A) Incrementar la presión de suministro en los niveles altos.",
            "B) Filtrar los sólidos pesados antes de la fosa séptica.",
            "C) Impedir el paso de gases fétidos y vectores desde la red de drenaje hacia los espacios habitables.",
            "D) Regular el caudal volumétrico de descarga."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El sifón retiene una columna de agua que sella herméticamente la tubería de desagüe, bloqueando el retorno de olores y gases tóxicos."
    },
    {
        id: 45,
        area: "Normativa y Gestión",
        pregunta: "En la administración de proyectos inmobiliarios, ¿qué establece el Coeficiente de Ocupación del Suelo (COS)?",
        opciones: [
            "A) La altura máxima permitida en metros sobre el nivel de banqueta.",
            "B) El número de cajones de estacionamiento exigidos por habitante.",
            "C) La proporción máxima de la superficie del terreno que puede estar ocupada por la proyección horizontal de la edificación.",
            "D) El presupuesto financiero autorizado para la cimentación."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El COS limita el área de desplante en planta baja respecto a la superficie total del predio, garantizando áreas libres y permeables."
    },
    {
        id: 46,
        area: "Diseño Arquitectónico",
        pregunta: "En ergonomía y antropometría aplicada, ¿cómo se dimensionan las circulaciones horizontales (pasillos) en edificios públicos?",
        opciones: [
            "A) Con base en flujos de tránsito esperados y normativas de accesibilidad y evacuación segura.",
            "B) Utilizando exclusivamente múltiplos de cincuenta centímetros sin importar el aforo.",
            "C) Basándose en la resistencia mecánica de los firmes de concreto.",
            "D) Minimizando los anchos al límite absoluto para maximizar el área rentable."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los pasillos y rutas de evacuación se calculan considerando el número de usuarios concurrentes y los requerimientos de desalojo en caso de emergencia."
    },
    {
        id: 47,
        area: "Estructuras",
        pregunta: "¿Qué caracteriza a una estructura isostática en el análisis estático?",
        opciones: [
            "A) Posee más incógnitas de reacción que las ecuaciones de equilibrio estático.",
            "B) Sus reacciones y esfuerzos internos se resuelven completamente empleando únicamente las ecuaciones de la estática.",
            "C) Carece de apoyos fijos y colapsa ante cargas estáticas mínimas.",
            "D) Sus elementos experimentan deformaciones elásticas infinitas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una estructura esostática es aquella cuyas incógnitas de apoyo e internas coinciden en número con las ecuaciones de equilibrio estático disponibles."
    },
    {
        id: 48,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple el acero de refuerzo longitudinal en una trabe o viga de concreto reforzado?",
        opciones: [
            "A) Soportar exclusivamente las cargas térmicas ambientales.",
            "B) Absorber y resistir los esfuerzos de tensión generados por los momentos flectores.",
            "C) Evitar por completo la contracción volumétrica por fraguado.",
            "D) Sustituir la resistencia a la compresión del concreto simple."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El acero longitudinal se ubica en las zonas de tracción de la viga para soportar los esfuerzos de tensión que el concreto por sí solo no resiste."
    },
    {
        id: 49,
        area: "Instalaciones",
        pregunta: "En instalaciones eléctricas residenciales, ¿cuál es la función de un interruptor termomagnético (pastilla)?",
        opciones: [
            "A) Transformar la corriente alterna en corriente directa de bajo voltaje.",
            "B) Medir el consumo acumulado de energía eléctrica en kilovatios-hora.",
            "C) Interrumpir automáticamente el flujo eléctrico ante sobrecorrientes y cortocircuitos para proteger el cableado.",
            "D) Regular las fluctuaciones de voltaje de la red pública."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los interruptores termomagnéticos protegen la red eléctrica desconectando el circuito cuando detectan sobrecargas peligrosas o cortocircuitos."
    },
    {
        id: 50,
        area: "Normativa y Gestión",
        pregunta: "En la programación de proyectos, ¿qué representa la Ruta Crítica (Critical Path) en un diagrama PERT/CPM?",
        opciones: [
            "A) La secuencia de actividades con menor holgura que determina la duración mínima total del proyecto.",
            "B) El conjunto de tareas administrativas con mayor presupuesto financiero.",
            "C) Las actividades subcontratadas con proveedores externos.",
            "D) El camino de tareas que no requiere supervisión técnica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La ruta crítica define el tiempo mínimo en que se puede completar el proyecto; cualquier retraso en estas tareas alarga la fecha de entrega final."
    },
    {
        id: 51,
        area: "Diseño Arquitectónico",
        pregunta: "En planeación urbana, ¿qué define el concepto de 'Zonificación Mixta'?",
        opciones: [
            "A) La prohibición absoluta de actividades comerciales en zonas habitacionales.",
            "B) La integración armónica de diferentes usos de suelo (habitacional, comercial, oficinas y servicios) en una misma zona o edificio.",
            "C) La separación industrial estricta mediante áreas verdes de amortiguamiento.",
            "D) La construcción exclusiva de vialidades para transporte masivo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La zonificación mixta fomenta ciudades funcionales y sostenibles al combinar viviendas, comercios y servicios en proximidad."
    },
    {
        id: 52,
        area: "Estructuras",
        pregunta: "En diseño sismorresistente, ¿qué propiedad busca garantizar la ductilidad en elementos de concreto armado?",
        opciones: [
            "A) Que la estructura falle de forma frágil e imprevista.",
            "B) Que el elemento soporte deformaciones inelásticas significativas antes del colapso, disipando la energía del sismo.",
            "C) Que los materiales no experimenten ninguna deformación elástica.",
            "D) Que el peso propio de la losa aumente para absorber vibraciones."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La ductilidad permite que la estructura se deforme plásticamente sin colapsar de forma frágil, absorbiendo y disipando la energía sísmica."
    },
    {
        id: 53,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué patología constructiva provoca eflorescencias salinas y deterioro en los muros de mampostería debido al agua del suelo?",
        opciones: [
            "A) Humedad por capilaridad.",
            "B) Asentamiento diferencial severo.",
            "C) Punzonamiento por cargas concentradas.",
            "D) Corrosión electroquímica en armados de losa."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La humedad capilar asciende desde el subsuelo por los poros del muro, transportando sales minerales que al evaporarse generan manchas blancas (florescencias)."
    },
    {
        id: 54,
        area: "Instalaciones",
        pregunta: "En redes hidrosanitarias verticales, ¿qué función cumple el tubo ventila principal?",
        opciones: [
            "A) Suministrar agua a presión a los tinacos.",
            "B) Conducir las aguas pluviales hacia pozos de absorción.",
            "C) Equilibrar la presión atmosférica en el sistema de desagüe para evitar la succión y ruptura del sello hidráulico en las trampas.",
            "D) Medir el caudal de aguas negras descargadas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El tubo ventila previene sobrepresiones o vacíos en la red sanitaria que vaciarían los sellos de agua de los sanitarios y lavabos."
    },
    {
        id: 55,
        area: "Normativa y Gestión",
        pregunta: "En la contratación de obra pública o privada, ¿en qué consiste un contrato a 'Precio Alzado'?",
        opciones: [
            "A) Se paga conforme al volumen real ejecutado medido semanalmente.",
            "B) Se establece un monto total fijo e invariable por la ejecución completa de la obra, asumiendo el contratista el riesgo de variación en costos.",
            "C) El costo final se determina sumando facturas de insumos al término de la obra.",
            "D) Se retiene un porcentaje de utilidad variable según la inflación."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El precio alzado fija una contraprestación única y total, transfiriendo al constructor la variabilidad en los precios de materiales y mano de obra."
    },
    {
        id: 56,
        area: "Diseño Arquitectónico",
        pregunta: "En iluminación arquitectónica, ¿qué mide la unidad denominada 'Lux'?",
        opciones: [
            "A) El flujo luminoso total emitido por una fuente omnidireccional.",
            "B) La temperatura de color de una lámpara en grados Kelvin.",
            "C) El consumo de potencia eléctrica en vatios.",
            "D) La iluminancia, es decir, el flujo luminoso que incide sobre una superficie (1 lumen por metro cuadrado)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El lux mide la cantidad de luz (lúmenes) que incide sobre una superficie de un metro cuadrado."
    },
    {
        id: 57,
        area: "Estructuras",
        pregunta: "En una viga sujeta a flexión pura, ¿dónde se localiza el eje neutro de la sección transversal?",
        opciones: [
            "A) En la fibra longitudinal donde los esfuerzos normales por flexión son nulos (ni tensión ni compresión).",
            "B) En el borde extremo inferior sometido a máxima tensión.",
            "C) En el punto exacto de aplicación de la carga puntual máxima.",
            "D) En el centro geométrico del claro longitudinal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El eje neutro separa la zona comprimida de la zona traccionada en una viga flexionada, siendo la fibra donde el esfuerzo normal es cero."
    },
    {
        id: 58,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué ventaja principal ofrece el sistema constructivo de losas reticulares (nervadas) aligeradas con casetones?",
        opciones: [
            "A) Eliminar por completo el uso de acero de refuerzo en la estructura.",
            "B) Reducir el peso muerto de la losa al desplazar concreto en zonas de baja solicitación, permitiendo cubrir claros mayores.",
            "C) Funcionar como aislamiento térmico exterior de fachadas.",
            "D) Soportar directamente cargas concentradas extremas sin trabes de apoyo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los casetones aligeran las losas al ocupar espacio donde el concreto no trabaja a flexión, optimizando el peso propio y la rigidez."
    },
    {
        id: 59,
        area: "Instalaciones",
        pregunta: "En el diseño de sistemas de aire acondicionado (HVAC), ¿qué evalúa el cálculo de la 'Carga Térmica'?",
        opciones: [
            "A) La ganancia o pérdida de calor en un espacio para dimensionar adecuadamente los equipos de climatización y confort.",
            "B) La presión estática en las tuberías de distribución hidrosanitaria.",
            "C) El consumo eléctrico de los contactos de servicio general.",
            "D) La capacidad de desalojo pluvial en cubiertas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La carga térmica cuantifica las aportaciones de calor por radiación, conducción, infiltración y ocupación para mantener las condiciones de confort."
    },
    {
        id: 60,
        area: "Normativa y Gestión",
        pregunta: "En la supervisión y control de obra, ¿qué documento legal y técnico registra diariamente los acontecimientos, avances, órdenes e incidencias?",
        opciones: [
            "A) La licencia de construcción municipal.",
            "B) El contrato mercantil de prestación de servicios.",
            "C) La bitácora de obra.",
            "D) El catálogo de conceptos paramétricos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La bitácora de obra es el documento oficial y vinculante donde se asientan todas las incidencias técnicas y administrativas durante la ejecución del proyecto."
    },
    {
        id: 61,
        area: "Diseño Arquitectónico",
        pregunta: "En la zonificación de hospitales y centros de salud, ¿qué principio funcional es prioritario?",
        opciones: [
            "A) Priorizar la simetría de las fachadas exteriores.",
            "B) Agrupar los espacios controlando flujos y aislando zonas críticas (quirófanos) para garantizar estrictas condiciones de asepsia.",
            "C) Situar el estacionamiento público junto a las salas de terapia intensiva.",
            "D) Orientar todas las ventanas hacia el poniente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La arquitectura hospitalaria exige una zonificación rigurosa (blancas, grises, negras) para evitar contaminación cruzada y optimizar tiempos de respuesta médica."
    },
    {
        id: 62,
        area: "Estructuras",
        pregunta: "En el diseño de columnas esbeltas de concreto, ¿qué fenómeno límite puede provocar una falla por inestabilidad lateral?",
        opciones: [
            "A) Pandeo estructural.",
            "B) Torsión uniforme pura.",
            "C) Fluencia por cortante.",
            "D) Fatiga térmica cíclica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El pandeo ocurre cuando una columna sometida a compresión alcanza su carga crítica y se flexiona lateralmente de forma súbita."
    },
    {
        id: 63,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué método de unión en estructuras de acero se basa en la fusión térmica del metal base y un electrodo de aporte?",
        opciones: [
            "A) Conexión por pernos de anclaje de expansión.",
            "B) Soldadura por arco eléctrico.",
            "C) Ensambles de fricción con neopreno.",
            "D) Juntas mecánicas con abrazaderas de presión."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La soldadura por arco eléctrico funde los metales base y de aportación para lograr una conexión estructural monolítica."
    },
    {
        id: 64,
        area: "Instalaciones",
        pregunta: "En redes de gas L.P., ¿cuál es una medida de seguridad normativa indispensable para tanques estacionarios en azoteas?",
        opciones: [
            "A) Colocarlos en espacios confinados sin ventilación para protegerlos.",
            "B) Conectarlos directamente a mangueras de hule sin válvulas de corte.",
            "C) Ubicarlos en áreas abiertas con ventilación natural, bases estables y alejados de fuentes de ignición o chispas.",
            "D) Enterrarlos bajo los firmes de planta baja."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los recipientes de gas requieren ventilación abierta y separación de fuentes de calor para disipar cualquier fuga de vapores inflamables."
    },
    {
        id: 65,
        area: "Normativa y Gestión",
        pregunta: "En la evaluación de proyectos inmobiliarios, ¿qué evalúa un estudio de 'Factibilidad Financiera'?",
        opciones: [
            "A) La resistencia del suelo ante cargas estáticas.",
            "B) El diseño estético de los vestíbulos de acceso.",
            "C) La paleta de colores corporativos de la torre.",
            "D) La demanda de mercado, la inversión inicial, el flujo de caja, el Valor Presente Neto (VPN) y la Tasa Interna de Retorno (TIR)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La factibilidad financiera analiza los ingresos proyectados frente a los costos y desembolsos para comprobar la rentabilidad del proyecto."
    },
    {
        id: 66,
        area: "Diseño Arquitectónico",
        pregunta: "En urbanismo, ¿qué mide el índice de 'Densidad Habitacional'?",
        opciones: [
            "A) La cantidad de habitantes o viviendas por unidad de superficie territorial (hectárea o acre).",
            "B) El porcentaje de área libre permeable respecto al terreno total.",
            "C) La altura máxima permitida en metros sobre nivel de banqueta.",
            "D) El número de cajones de estacionamiento comerciales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La densidad habitacional expresa la concentración de población o viviendas asentadas en una superficie determinada."
    },
    {
        id: 67,
        area: "Tecnología de la Construcción",
        pregunta: "En la impermeabilización de azoteas, ¿qué ventaja principal aportan los mantos prefabricados de asfalto modificado?",
        opciones: [
            "A) Eliminar por completo la necesidad de pendientes pluviales en la losa.",
            "B) Proveer un espesor uniforme de fábrica y alta resistencia a la intemperie y movimientos térmicos.",
            "C) Servir como estructura de soporte para cargas vivas pesadas.",
            "D) Sustituir el aislamiento acústico de entrepisos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los rollos prefabricados garantizan capas homogéneas con alta durabilidad ante la radiación solar y la contracción/dilatación de la losa."
    },
    {
        id: 68,
        area: "Estructuras",
        pregunta: "¿Qué representan los diagramas de Fuerza Cortante y Momento Flector en elementos estructurales?",
        opciones: [
            "A) Los costos directos de mano de obra en el presupuesto.",
            "B) Las variaciones gráficas de las fuerzas internas que experimenta una viga a lo largo de su claro bajo cargas aplicadas.",
            "C) La distribución de presiones eólicas en fachadas vidriadas.",
            "D) Las deformaciones angulares de las zapatas aisladas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los diagramas muestran gráficamente cómo varían el cortante y el momento flector a lo largo del elemento, fundamentales para diseñar el refuerzo."
    },
    {
        id: 69,
        area: "Instalaciones",
        pregunta: "En sistemas contra incendios, ¿cómo operan los rociadores automáticos (sprinklers) de red hidráulica?",
        opciones: [
            "A) Se activan manualmente mediante un interruptor general en la planta baja.",
            "B) Un elemento termosensible se rompe a una temperatura de calibración específica, abriendo el circuito y descargando agua localizada sobre el fuego.",
            "C) Detectan humo denso y cortan el suministro eléctrico general.",
            "D) Vacían toda el agua de la cisterna hacia los sótanos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los rociadores cuentan con una ampolla termosensible que libera el paso del agua al alcanzarse la temperatura de diseño del conato de incendio."
    },
    {
        id: 70,
        area: "Normativa y Gestión",
        pregunta: "En la metodología PMBOK para la dirección de proyectos, ¿qué define la 'Estructura de Desglose del Trabajo' (EDT / WBS)?",
        opciones: [
            "A) La jerarquía de los entregables del proyecto divididos en paquetes de trabajo manejables.",
            "B) El organigrama salarial de la constructora.",
            "C) El flujo de caja financiero trimestral.",
            "D) El diagrama de ruta crítica en red."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La EDT desglosa el alcance total del proyecto en componentes más pequeños y controlables orientados a entregables."
    },
    {
        id: 71,
        area: "Diseño Arquitectónico",
        pregunta: "En accesibilidad universal, ¿cuál es un criterio fundamental para el diseño de rampas peatonales en espacios públicos?",
        opciones: [
            "A) Utilizar pendientes superiores al 20% para ahorrar espacio horizontal.",
            "B) Instalar pavimentos resbalosos para facilitar la limpieza.",
            "C) Mantener pendientes normadas (generalmente entre 6% y 8%), con descansos horizontales y pasamanos dobles.",
            "D) Omitir los pretiles de protección laterales en desniveles altos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las rampas accesibles deben cumplir pendientes suaves y normadas para permitir el desplazamiento seguro de personas en silla de ruedas o con movilidad reducida."
    },
    {
        id: 72,
        area: "Tecnología de la Construcción",
        pregunta: "En acabados de muros, ¿qué función cumple el aplanado o revoque de mortero aplicado sobre la mampostería?",
        opciones: [
            "A) Soportar la carga estructural principal de las losas de entrepiso.",
            "B) Nivelar irregularidades, proteger las piezas de muro y ofrecer una base firme y homogénea para los recubrimientos finos o pintura.",
            "C) Sustituir el aislamiento térmico y acústico del edificio.",
            "D) Funcionar como barrera impermeable bajo el nivel de desplante."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los aplanados uniformizan la superficie de los muros y protegen los materiales constructivos de la intemperie y el desgaste."
    },
    {
        id: 73,
        area: "Estructuras",
        pregunta: "En armaduras o celosías metálicas, ¿qué función cumplen los elementos diagonales (contraventeos)?",
        opciones: [
            "A) Soportar exclusivamente el peso del mobiliario interior.",
            "B) Aumentar la flexibilidad excesiva de las uniones soldadas.",
            "C) Resistir y transferir las cargas laterales por viento o sismo, rigidizando la estructura reticular.",
            "D) Incrementar el peso propio de la cubierta."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los contravientos diagonales rigidizan los marcos estructurales frente a solicitudes horizontales de sismo o viento."
    },
    {
        id: 74,
        area: "Instalaciones",
        pregunta: "¿Qué diferencia principal caracteriza a un sistema eléctrico trifásico frente a uno monofásico?",
        opciones: [
            "A) El trifásico opera con tres corrientes alternas desfasadas 120°, permitiendo alimentar cargas mayores y motores industriales eficientes.",
            "B) El monofásico se emplea únicamente en naves industriales pesadas.",
            "C) El trifásico no requiere conductores de fase ni neutro.",
            "D) No existe diferencia en su capacidad de transferencia de potencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los sistemas trifásicos distribuyen potencia de forma equilibrada y eficiente para cargas pesadas y equipos industriales o comerciales de alto consumo."
    },
    {
        id: 75,
        area: "Normativa y Gestión",
        pregunta: "En la integración de costos directos de obra, ¿qué elementos componen el análisis de un precio unitario (PU)?",
        opciones: [
            "A) Los gastos generales de la oficina central de la constructora.",
            "B) La suma de los costos de materiales puestos en obra, mano de obra especializada, y el rendimiento de maquinaria y herramienta menor.",
            "C) Los impuestos corporativos y el margen de utilidad del contratista.",
            "D) Los honorarios de supervisión externa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El costo directo en un precio unitario engloba exclusivamente los insumos directamente incorporados a la ejecución del concepto (materiales, mano de obra y equipo)."
    },
    {
        id: 76,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de conjuntos habitacionales, ¿qué mide el índice urbano de 'Intensidad de Uso del Suelo'?",
        opciones: [
            "A) La cantidad total de metros cuadrados construidos permitidos en relación con la superficie total del terreno (CUS).",
            "B) El número de árboles plantados por habitante.",
            "C) La velocidad promedio del tráfico vehicular en vialidades internas.",
            "D) La profundidad media de la red de alcantarillado."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Coeficiente de Utilización del Suelo (CUS) regula los metros cuadrados máximos edificables en un predio, controlando la densidad e intensidad urbana."
    },
    {
        id: 77,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué objetivo persigue la cimentación a base de pilotes de fricción en suelos blandos arcillosos?",
        opciones: [
            "A) Transmitir las cargas de la estructura hacia estratos profundos del terreno mediante la resistencia por fricción fuste-suelo y punta.",
            "B) Desplantar la estructura directamente en la capa superficial sin excavaciones.",
            "C) Evitar por completo el uso de concreto armado en la cimentación.",
            "D) Rellenar oquedades kársticas superficiales con mampostería seca."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los pilotes de fricción transfieren el peso del edificio hacia capas profundas del suelo más competentes aprovechando la adherencia lateral y resistencia de punta."
    },
    {
        id: 78,
        area: "Estructuras",
        pregunta: "En el diseño de vigas de concreto reforzado, ¿qué indica la aparición de fisuras perpendiculares al eje longitudinal en la zona inferior de la viga?",
        opciones: [
            "A) Esfuerzos excesivos de compresión en el concreto superior.",
            "B) Presencia de momentos flectores positivos que generan tracción en la fibra inferior superando la resistencia a tensión del concreto.",
            "C) Un asentamiento diferencial grave en los apoyos extremos.",
            "D) Torsión uniforme en el claro central."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las fisuras inferiores en vigas indican que el momento positivo tracciona el fondo de la pieza, requiriendo el acero de refuerzo longitudinal adecuado."
    },
    {
        id: 79,
        area: "Instalaciones",
        pregunta: "En el diseño de bajadas de aguas pluviales (BAP) para cubiertas extensas, ¿qué factores determinan el cálculo del diámetro de la tubería?",
        opciones: [
            "A) La intensidad máxima de lluvia de la región y la superficie de proyección horizontal de la cubierta.",
            "B) El consumo diario de agua potable de los ocupantes del inmueble.",
            "C) La presión hidrostática del suministro municipal.",
            "D) La potencia de los equipos de bombeo hidroneumático."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El dimensionamiento pluvial se calcula correlacionando la tormenta de diseño local (intensidad pluviométrica) y el área de captación de los techos."
    },
    {
        id: 80,
        area: "Normativa y Gestión",
        pregunta: "En la dirección de proyectos, ¿qué establece la triple restricción (o triángulo de gestión de proyectos)?",
        opciones: [
            "A) Que el éxito del proyecto se equilibra gestionando y controlando el Alcance, el Tiempo (cronograma) y el Costo (presupuesto), condicionados por la calidad.",
            "B) Que el contrato debe firmarse exclusivamente ante notario público.",
            "C) Que los costos indirectos no deben superar el 5% del valor de la obra.",
            "D) Que la mano de obra debe ser 100% sindicalizada."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La triple restricción postula que el alcance, el tiempo y el costo están interconectados; modificar uno afecta inevitablemente a los demás."
    },
    {
        id: 81,
        area: "Diseño Arquitectónico",
        pregunta: "En el proceso de diseño urbano-arquitectónico, ¿qué evalúa fundamentalmente el estudio de la capacidad de carga de un espacio público?",
        opciones: [
            "A) La resistencia mecánica de las losas de concreto armado ante vehículos pesados.",
            "B) El número máximo de usuarios que pueden hacer uso simultáneo de una instalación sin degradar la calidad de la experiencia ni dañar la infraestructura.",
            "C) La cantidad de luminarias LED requeridas por metro lineal.",
            "D) El presupuesto financiero anual destinado al mantenimiento de áreas verdes."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La capacidad de carga evalúa el umbral máximo de saturación humana o física que soporta un espacio antes de sufrir deterioro operativo o ambiental."
    },
    {
        id: 82,
        area: "Estructuras",
        pregunta: "En mecánica de materiales, ¿cómo se define el límite elástico de un acero estructural?",
        opciones: [
            "A) El punto donde el material experimenta deformaciones plásticas permanentes al retirarse la carga aplicada.",
            "B) El esfuerzo máximo antes de sufrir una fractura frágil por tensión pura.",
            "C) El esfuerzo máximo hasta el cual el material se comporta elásticamente, recuperando su forma original al cesar la carga.",
            "D) El punto medio entre el módulo de elasticidad y la compresión."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El límite elástico es el umbral de esfuerzo donde cesa el comportamiento elástico lineal y comienzan las deformaciones permanentes o plásticas."
    },
    {
        id: 83,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple el aditivo impermeabilizante integral añadido al concreto durante su mezclado en planta?",
        opciones: [
            "A) Incrementar de forma artificial el peso volumétrico de los agregados.",
            "B) Reducir la permeabilidad capilar del concreto endurecido bloqueando el paso del agua a través de su estructura porosa.",
            "C) Acelerar el tiempo de fraguado inicial a menos de cinco minutos.",
            "D) Sustituir la colocación de mallas electrosoldadas en los firmes."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los impermeabilizantes integrales reaccionan químicamente o bloquean los poros capilares internos del concreto, reduciendo su absorción de agua."
    },
    {
        id: 84,
        area: "Instalaciones",
        pregunta: "En el diseño de redes de distribución de agua potable, ¿qué función cumple una válvula de compuerta o seccionamiento?",
        opciones: [
            "A) Regular automáticamente la presión estática en los pisos altos.",
            "B) Permitir el cierre o aislamiento de tramos específicos de la red para realizar labores de mantenimiento o reparación sin interrumpir todo el suministro.",
            "C) Evitar el golpe de ariete provocado por cierres bruscos de llaves.",
            "D) Medir el caudal volumétrico de consumo acumulado."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las válvulas de seccionamiento permiten aislar sectores de la red hidráulica para mantenimiento sin afectar la operación general del sistema."
    },
    {
        id: 85,
        area: "Normativa y Gestión",
        pregunta: "En la gerencia de proyectos de construcción, ¿qué representa la elaboración de la 'Estimación de Costos' mediante el método paramétrico?",
        opciones: [
            "A) Un cálculo rápido basado en datos históricos de proyectos similares por unidad de medida (ej. costo por metro cuadrado construido).",
            "B) La medición detallada concepto por concepto de cada tornillo y varilla en obra.",
            "C) Una auditoría contable de los estados financieros de la constructora.",
            "D) El análisis de precios unitarios desglosados de mano de obra."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La estimación paramétrica utiliza modelos estadísticos y parámetros históricos (como costo por m²) para calcular presupuestos preliminares con rapidez."
    },
    {
        id: 86,
        area: "Diseño Arquitectónico",
        pregunta: "En la planificación bioclimática, ¿qué papel juegan las fachadas ventiladas en edificios ubicados en climas cálidos extremos?",
        opciones: [
            "A) Incrementar la ganancia térmica por radiación directa al interior.",
            "B) Crear una cámara de aire en movimiento continuo entre el acabado exterior y el muro base, reduciendo la transferencia de calor hacia los espacios habitables.",
            "C) Funcionar como elementos estructurales de carga principal.",
            "D) Soportar directamente las cargas de las losas de entrepiso."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fachada ventilada disipa la radiación solar mediante convección natural en la cámara de aire intermedia, protegiendo el interior del edificio."
    },
    {
        id: 87,
        area: "Estructuras",
        pregunta: "En el análisis de armaduras planas, ¿qué método analítico se basa en el equilibrio de fuerzas concurrentes en cada uno de los nudos de la estructura?",
        opciones: [
            "A) El método de los nodos (o nudos).",
            "B) El método de las secciones de Ritter.",
            "C) El teorema de los tres momentos.",
            "D) El análisis dinámico modal espectral."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El método de los nodos plantea las ecuaciones de equilibrio de traslación (∑Fx=0, ∑Fy=0) en cada nudo para determinar las fuerzas axiales en las barras."
    },
    {
        id: 88,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué patología estructural se produce en elementos de concreto reforzado cuando el acero interior entra en contacto con agentes agresivos (humedad y CO2), perdiendo su pasivación?",
        opciones: [
            "A) Pandeo elástico de columnas.",
            "B) Corrosión del acero de refuerzo con la consiguiente expansión volumétrica, agrietamiento y desprendimiento del concreto (chancacadura).",
            "C) Asentamiento diferencial de zapatas.",
            "D) Licuación del suelo de cimentación."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La carbonatación y la filtración de humedad despasivan el acero, oxidándolo y generando óxido que expande su volumen y rompe el recubrimiento de concreto."
    },
    {
        id: 89,
        area: "Instalaciones",
        pregunta: "En instalaciones eléctricas, ¿qué finalidad tiene la incorporación de un sistema de 'Tierra Física' (puesta a tierra)?",
        opciones: [
            "A) Incrementar la potencia de voltaje en los aparatos electrodomésticos.",
            "B) Conducir hacia el suelo cualquier corriente de fuga o descarga atmosférica incidental, protegiendo a los usuarios contra electrocución.",
            "C) Medir el consumo eléctrico acumulado en kilovatios.",
            "D) Transformar la corriente alterna en corriente directa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tierra física ofrece una ruta de baja resistencia hacia el suelo para corrientes de falla, evitando que el usuario reciba descargas eléctricas."
    },
    {
        id: 90,
        area: "Normativa y Gestión",
        pregunta: "En la administración contractual de obra, ¿en qué consiste la modalidad de contratación por 'Precio Unitario'?",
        opciones: [
            "A) Pagar un monto único global e invariable por toda la obra sin importar las cantidades reales.",
            "B) Pagar al contratista con base en las cantidades de obra realmente ejecutadas multiplicadas por los precios unitarios pactados en el catálogo de conceptos.",
            "C) Retener el 50% del costo hasta concluir el proyecto completo.",
            "D) Financiar la construcción mediante aportaciones accionarias."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En los contratos por precios unitarios, el pago final se determina cuantificando los volúmenes reales ejecutados en obra y aplicando las tarifas unitarias convenidas."
    },
    {
        id: 91,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de espacios educativos, ¿qué parámetros normativos de iluminación natural deben cuidarse preferentemente en las aulas escolares?",
        opciones: [
            "A) Orientar los ventanales principales hacia el sur o norte según la región, evitando deslumbramientos directos sobre las superficies de trabajo y asegurando un factor de luz diurna adecuado.",
            "B) Sellar herméticamente los vanos impidiendo la entrada de luz solar.",
            "C) Utilizar vidrios oscuros reflejantes en el 100% de los paramentos.",
            "D) Situar la iluminación cenital exclusivamente en los pasillos de servicio."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las aulas escolares requieren iluminación natural difusa y controlada, evitando deslumbramientos directos sobre pizarrones y bancas."
    },
    {
        id: 92,
        area: "Estructuras",
        pregunta: "En el diseño de cimentaciones superficiales, ¿qué condición geométrica debe cumplir una zapata corrida para considerarse rígida frente a las presiones del suelo?",
        opciones: [
            "A) Su altura o peralte debe ser pequeño en relación con su ancho.",
            "B) Su vuelo o sección en voladizo debe ser tal que las deformaciones por flexión sean despreciables, manteniendo una distribución de presiones lineal bajo la base.",
            "C) Debe carecer por completo de armadura de acero inferior.",
            "D) Debe desplantarse directamente sobre capa vegetal orgánica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una zapata rígida distribuye las presiones de contacto de manera lineal o uniforme sobre el terreno debido a su alta rigidez a flexión."
    },
    {
        id: 93,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué propiedad caracteriza a los materiales pétreos ligeros utilizados en la fabricación de concretos estructurales aligerados?",
        opciones: [
            "A) Alta densidad volumétrica y nula porosidad interna.",
            "B) Menor peso volumétrico en comparación con la grava y arena convencional, manteniendo una resistencia mecánica aceptable.",
            "C) Resistencia extrema al fuego directo en altas temperaturas.",
            "D) Conductividad térmica elevada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los agregados ligeros (como tezontle o arcilla expandida) reducen el peso estructural de los elementos de concreto sin sacrificar propiedades mecánicas fundamentales."
    },
    {
        id: 94,
        area: "Instalaciones",
        pregunta: "En el diseño de redes de gas L.P. en edificaciones, ¿qué dispositivo de seguridad se instala obligatoriamente en la línea de llenado de tanques estacionarios para evitar el retorno de gas?",
        opciones: [
            "A) Una válvula de retención (check) o válvula de exceso de flujo.",
            "B) Un interruptor termomagnético de alta capacidad.",
            "C) Un sello hidráulico de baja presión.",
            "D) Una trampa de vapor."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las válvulas check o de exceso de flujo en tanques estacionarios previenen fugas descontroladas y el retorno de gas ante rupturas en las mangueras de suministro."
    },
    {
        id: 95,
        area: "Normativa y Gestión",
        pregunta: "En la gerencia de proyectos bajo el estándar PMBOK, ¿qué define el proceso de 'Control de Cambios'?",
        opciones: [
            "A) Modificar el presupuesto y el cronograma sin autorización del cliente.",
            "B) Revisar, evaluar, aprobar o rechazar sistemáticamente todas las solicitudes de modificación al alcance, costo o tiempo del proyecto.",
            "C) Cambiar al personal operativo semanalmente.",
            "D) Sustituir los materiales especificados por opciones de menor calidad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El control integrado de cambios gestiona formalmente las solicitudes de modificación para evitar desviaciones descontroladas en el alcance y presupuesto."
    },
    {
        id: 96,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de bibliotecas y centros de documentación, ¿qué criterio funcional rige el dimensionamiento de las áreas de acervo bibliográfico abierto?",
        opciones: [
            "A) El cálculo de metros lineales o número de volúmenes por estantería, considerando pasillos de circulación de al menos 90 cm a 1.20 m para accesibilidad.",
            "B) La instalación obligatoria de maquinaria pesada de aire acondicionado industrial.",
            "C) Ubicar los libros expuestos a la luz solar directa para su desinfección.",
            "D) Reducir la iluminación artificial a menos de 50 luxes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El acervo abierto requiere pasillos amplios que permitan el tránsito cómodo de usuarios y carritos de servicio, así como la correcta estiba de libros."
    },
    {
        id: 97,
        area: "Estructuras",
        pregunta: "En el análisis de estructuras hiperestáticas, ¿en qué consiste el método de Cross (Distribución de Momentos)?",
        opciones: [
            "A) Un procedimiento iterativo de cálculo para determinar los momentos flectores en nodos de marcos y vigas continuas basado en la rigidez relativa de los elementos.",
            "B) Una prueba de laboratorio destructiva en columnas de acero.",
            "C) Un cálculo estático exclusivo para estructuras isostáticas de un solo claro.",
            "D) Una ecuación diferencial para medir asentamientos diferenciales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El método de Cross es un procedimiento de aproximaciones sucesivas para analizar vigas continuas y marcos rígidos hiperestáticos distribuyendo los momentos en los nudos."
    },
    {
        id: 98,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple la adición de cenizas volantes o humo de sílice como adiciones minerales en mezclas de concreto de alta resistencia?",
        opciones: [
            "A) Aumentar la porosidad y permeabilidad de la pasta.",
            "B) Reaccionar puzolánicamente mejorando la compacidad, la resistencia a largo plazo y reduciendo la permeabilidad frente a agentes químicos agresivos.",
            "C) Disminuir la resistencia mecánica para facilitar demoliciones futuras.",
            "D) Acelerar el fraguado inicial a menos de diez minutos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las adiciones puzolánicas reaccionan con el hidróxido de calcio del cemento, generando compuestos que cierran los poros internos y elevan la durabilidad y resistencia."
    },
    {
        id: 99,
        area: "Instalaciones",
        pregunta: "En el diseño de redes de evacuación de aguas pluviales en grandes cubiertas industriales, ¿cuál es la ventaja de los sistemas de pluviales por gravedad sifónica (sistemas de flujo lleno)?",
        opciones: [
            "A) Requieren tuberías de diámetros considerablemente menores al operar a sección llena con succión hidráulica, optimizando espacio y costos.",
            "B) Funcionan sin necesidad de pendientes en las bajadas horizontales.",
            "C) Eliminan por completo la necesidad de rejillas de captación en azoteas.",
            "D) Permiten bombear el agua pluvial hacia los tinacos superiores."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los sistemas sifónicos aprovechan la columna de agua para generar una succión que llena las tuberías por completo, permitiendo diámetros reducidos y sin pendientes."
    },
    {
        id: 100,
        area: "Normativa y Gestión",
        pregunta: "En la evaluación de proyectos de inversión inmobiliaria, ¿qué representa la Tasa Interna de Retorno (TIR)?",
        opciones: [
            "A) La tasa de descuento que hace que el Valor Presente Neto (VPN) de un proyecto sea exactamente igual a cero.",
            "B) El costo de financiamiento bancario a corto plazo.",
            "C) La tasa de inflación interbancaria anual.",
            "D) El porcentaje de depreciación fiscal de los inmuebles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La TIR es la tasa de rendimiento interno generada por los flujos de efectivo del proyecto, definida matemáticamente cuando el VPN se anula."
    },
    {
        id: 101,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de complejos deportivos, ¿qué criterio normativo y funcional debe considerarse en la orientación de canchas de futbol o tenis al aire libre?",
        opciones: [
            "A) Orientar el eje longitudinal de la cancha preferentemente en dirección norte-sur para evitar que el sol deslumbre frontalmente a los jugadores durante las horas críticas de juego.",
            "B) Situar los campos con orientación este-oeste sin importar la posición solar.",
            "C) Colocar gradas únicamente en el lado poniente.",
            "D) Omitir los sistemas de iluminación artificial nocturna."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La orientación norte-sur en canchas deportivas minimiza el deslumbramiento solar directo en los ojos de los atletas durante las horas matutinas y vespertinas."
    },
    {
        id: 102,
        area: "Estructuras",
        pregunta: "En el diseño de cimentaciones profundas, ¿cuál es la función de una prueba de carga estática realizada sobre un pilote o pila de cimentación?",
        opciones: [
            "A) Verificar experimentalmente la capacidad de carga real y el comportamiento de deformación del elemento bajo cargas controladas antes o durante la obra.",
            "B) Medir la resistencia a la compresión simple del concreto fresco en camión.",
            "C) Calcular los costos indirectos de la excavación.",
            "D) Comprobar la impermeabilidad del suelo arcilloso."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba de carga estática aplica incrementos de peso controlados sobre el pilote para validar en sitio su capacidad de soporte y asentamiento."
    },
    {
        id: 103,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple el mortero de junta en la mampostería confinada de tabique rojo recocido?",
        opciones: [
            "A) Soportar exclusivamente las cargas de flexión horizontal pura.",
            "B) Transferir uniformemente los esfuerzos de compresión entre las piezas de mampostería y unirlas monolíticamente.",
            "C) Sustituir el acero de refuerzo horizontal en los castillos.",
            "D) Funcionar como aislante térmico exterior."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El mortero de junta adhiere las piezas de tabique y uniformiza la transmisión de esfuerzos verticales de compresión en todo el muro."
    },
    {
        id: 104,
        area: "Instalaciones",
        pregunta: "En el diseño de sistemas de aire acondicionado central, ¿qué función cumple la unidad manejadora de aire (UMA / AHU)?",
        opciones: [
            "A) Acondicionar, filtrar, calentar, enfriar y circular el aire que se distribuye a través de conductos hacia los diferentes locales del edificio.",
            "B) Suministrar agua potable a presión a los baños.",
            "C) Extraer los gases tóxicos del estacionamiento subterráneo.",
            "D) Generar energía eléctrica mediante paneles solares."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La UMA procesa el aire acondicionado centralmente (filtrado, temperatura y humedad) antes de enviarlo mediante ductos a los espacios interiores."
    },
    {
        id: 105,
        area: "Normativa y Gestión",
        pregunta: "En la administración de contratos de construcción, ¿qué establece una 'Orden de Cambio' (Change Order)?",
        opciones: [
            "A) Una modificación formal acordada entre cliente y contratista al alcance, costo o tiempo original del contrato de obra.",
            "B) La renuncia voluntaria del supervisor de obra.",
            "C) El despido injustificado del personal operativo.",
            "D) La cancelación definitiva de las licencias municipales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La orden de cambio modifica formalmente los términos contractuales acordados inicialmente debido a imprevistos o requerimientos nuevos del proyecto."
    },
    {
        id: 106,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de centros comerciales, ¿qué principio comercial y espacial rige la distribución de las tiendas ancla (tiendas departamentales grandes)?",
        opciones: [
            "A) Ubicarlas en los extremos o puntos focales opuestos del centro comercial para generar flujos peatonales continuos que obliguen a los usuarios a recorrer los locales comerciales menores intermedios.",
            "B) Agruparlas todas en una sola esquina oscura sin acceso peatonal.",
            "C) Situarlas exclusivamente en el estacionamiento subterráneo.",
            "D) Omitir los pasillos de circulación común."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las tiendas ancla se colocan en los extremos del centro comercial para maximizar el tránsito de personas a lo largo de los pasillos y beneficiar a los locales pequeños."
    },
    {
        id: 107,
        area: "Estructuras",
        pregunta: "En el diseño de elementos de concreto reforzado sometidos a cortante (como vigas y trabes), ¿qué función cumplen los estribos cerrados?",
        opciones: [
            "A) Absorber los esfuerzos de tensión diagonal por cortante, confinar el concreto y evitar el agrietamiento inclinado frágil.",
            "B) Incrementar la longitud total de la viga.",
            "C) Sustituir el acero de refuerzo longitudinal inferior.",
            "D) Evitar la corrosión del concreto por humedad ambiental."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los estribos transversales actúan contra los esfuerzos cortantes diagonales y confinan el núcleo de concreto, previniendo fallas frágiles."
    },
    {
        id: 108,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué ventaja constructiva aporta el sistema de tablaroca (muros divisorios a base de paneles de yeso y estructura metálica) en edificios de oficinas?",
        opciones: [
            "A) Soportar cargas estructurales masivas de losas de entrepiso.",
            "B) Ofrecer bajo peso muerto, rapidez de montaje, facilidad para alojar instalaciones interiores y flexibilidad de modificación espacial.",
            "C) Funcionar como cimentación profunda en suelos blandos.",
            "D) Sustituir los requerimientos de impermeabilización en azoteas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los muros ligeros de yeso reducen drásticamente el peso estructural, agilizan la instalación de redes ocultas y permiten modificar espacios con facilidad."
    },
    {
        id: 109,
        area: "Instalaciones",
        pregunta: "En el diseño de instalaciones hidráulicas, ¿qué fenómeno hidráulico conocido como 'Golpe de Ariete' debe prevenirse mediante tanques hidroneumáticos o válvulas de alivio?",
        opciones: [
            "A) La acumulación de sarro en las tuberías de cobre.",
            "B) Una onda de presión violenta generada por el cierre repentino de una válvula o llave, capaz de romper tuberías y conexiones.",
            "C) La succión del sello hidráulico en los inodoros.",
            "D) El congelamiento del agua en zonas de alta montaña."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El golpe de ariete es una sobrepresión destructiva provocada por la detención instantánea del flujo de agua en tuberías cerradas bruscamente."
    },
    {
        id: 110,
        area: "Normativa y Gestión",
        pregunta: "En la evaluación de proyectos inmobiliarios, ¿qué indica un periodo de recuperación de la inversión (Payback) muy prolongado?",
        opciones: [
            "A) Que el proyecto recupera el capital invertido con extrema rapidez en los primeros meses.",
            "B) Que el capital permanece inmovilizado por más tiempo antes de recuperarse, elevando el riesgo financiero del proyecto.",
            "C) Que la Tasa Interna de Retorno es superior al 100%.",
            "D) Que los costos indirectos son iguales a cero."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un periodo de recuperación largo implica mayor exposición al riesgo financiero, ya que el capital tarda más años en retornar a los inversionistas."
    },
    {
        id: 111,
        area: "Diseño Arquitectónico",
        pregunta: "En la planificación urbana sostenible, ¿qué promueve el concepto de 'Ciudad de 15 Minutos'?",
        opciones: [
            "A) Diseñar asentamientos donde las necesidades cotidianas de los ciudadanos (trabajo, compras, educación, salud y ocio) queden accesibles a un trayecto de 15 minutos a pie o en bicicleta.",
            "B) Obligar a los ciudadanos a viajar en automóvil al menos 15 minutos diarios.",
            "C) Demoler los centros históricos para construir autopistas elevadas.",
            "D) Limitar el crecimiento demográfico de las ciudades a 15,000 habitantes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El modelo de la ciudad de 15 minutos busca la proximidad urbana y la movilidad activa, reduciendo la dependencia del automóvil particular."
    },
    {
        id: 112,
        area: "Estructuras",
        pregunta: "En el diseño sismorresistente de estructuras de acero, ¿cómo actúan los marcos rígidos con conexiones momentáneas (moment frames)?",
        opciones: [
            "A) Resistiendo las fuerzas laterales principalmente mediante la flexión conjunta de vigas y columnas conectadas rígidamente.",
            "B) Mediante cables de alta tensión sin rigidez a momento.",
            "C) Dependiendo exclusivamente de muros de mampostería perimetral.",
            "D) Evitando cualquier deformación elástica en los nudos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los marcos rígidos con conexiones resistentes a momento disipan energía sísmica a través de la flexión sincronizada de vigas y columnas."
    },
    {
        id: 113,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué función cumple la colocación de una 'Pelicula de Polietileno' (barrera de vapor) bajo las planillas o firmes de concreto en planta baja?",
        opciones: [
            "A) Incrementar la resistencia a la compresión del concreto endurecido.",
            "B) Evitar que la humedad natural del terreno ascienda por capilaridad hacia el firme y dañe los acabados de piso.",
            "C) Sustituir el acero de refuerzo por temperatura.",
            "D) Acelerar el tiempo de fraguado inicial de la losa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La barrera de vapor de polietileno frena el ascenso de humedad del suelo hacia los firmes y recubrimientos interiores de piso."
    },
    {
        id: 114,
        area: "Instalaciones",
        pregunta: "En el diseño de instalaciones eléctricas, ¿qué magnitud mide el término 'Factor de Potencia'?",
        opciones: [
            "A) La eficiencia en el aprovechamiento de la energía eléctrica, midiendo la relación entre la potencia activa (kW) y la potencia aparente (kVA).",
            "B) La resistencia óhmica total del cable de cobre.",
            "C) El voltaje pico de la corriente alterna en transformadores.",
            "D) La temperatura máxima de operación de los conductores."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El factor de potencia indica la eficacia con la que se consume la energía eléctrica; un factor bajo genera penalizaciones en tarifas comerciales e industriales."
    },
    {
        id: 115,
        area: "Normativa y Gestión",
        pregunta: "En la dirección de proyectos, ¿qué establece la matriz RACI dentro de la gestión de recursos humanos y responsabilidades?",
        opciones: [
            "A) Las restricciones de costo, alcance y tiempo del proyecto.",
            "B) Una matriz que define los roles de Responsable (Responsible), Aprobador (Accountable), Consultado (Consulted) y Informado (Informed) para cada tarea del proyecto.",
            "C) Los porcentajes de retención fiscal en contratos de obra pública.",
            "D) El análisis de riesgos financieros y de mercado."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La matriz RACI clarifica la asignación de responsabilidades en cada entregable, especificando quién ejecuta, quién aprueba y a quién se informa."
    },
    {
        id: 116,
        area: "Diseño Arquitectónico",
        pregunta: "En el diseño de museos y galerías de arte, ¿qué requerimiento ambiental es crítico para la conservación de obras pictóricas delicadas?",
        opciones: [
            "A) Controlar estrictamente los niveles de iluminación (luxes y radiación UV) y mantener rangos estables de temperatura y humedad relativa.",
            "B) Permitir el ingreso directo de luz solar frontal sin filtros.",
            "C) Elevar la humedad ambiental al 100% para evitar la resequedad.",
            "D) Instalar sistemas de ventilación cruzada con aire marino."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las pinacotecas y museos requieren un control ambiental riguroso de luz (evitando rayos UV) y climatización para prevenir la degradación de las obras."
    },
    {
        id: 117,
        area: "Estructuras",
        pregunta: "En el análisis estructural, ¿qué indica un factor de seguridad superior a 1.0 en el diseño de elementos ante cargas de servicio?",
        opciones: [
            "A) Que la estructura fallará instantáneamente ante la primera carga aplicada.",
            "B) Que la capacidad resistente última del elemento supera la carga máxima esperada de servicio, garantizando un margen contra fallas imprevistas.",
            "C) Que los materiales empleados son de pésima calidad.",
            "D) Que el elemento es completamente isostático."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El factor de seguridad mayor a la unidad garantiza que la estructura resista cargas superiores a las previstas nominalmente, absorbiendo incertidumbres."
    },
    {
        id: 118,
        area: "Tecnología de la Construcción",
        pregunta: "¿Qué propiedades aporta la utilización de aditivos superplastificantes en mezclas de concreto de alta resistencia?",
        opciones: [
            "A) Reducir drásticamente el contenido de agua de mezclado sin perder la trabajabilidad, logrando altas resistencias mecánicas y baja porosidad.",
            "B) Aumentar la cantidad de agua libre para facilitar el bombeo manual.",
            "C) Elevar el peso volumétrico de la mezcla con agregados pesados.",
            "D) Iniciar el fraguado instantáneo al contacto con el aire."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los superplastificantes permiten obtener mezclas muy fluidas con relaciones agua/cemento muy bajas, incrementando la resistencia y durabilidad del concreto."
    },
    {
        id: 119,
        area: "Instalaciones",
        pregunta: "En redes hidrosanitarias, ¿cuál es la función de una trampa de grasa en cocinas comerciales o industriales antes de descargar al drenaje municipal?",
        opciones: [
            "A) Incrementar la temperatura del agua de desecho.",
            "B) Retener y separar las grasas y aceites flotantes para evitar la obstrucción de las tuberías y cumplir con las normas ambientales de descarga.",
            "C) Elevar la presión hidráulica hacia los vertederos superiores.",
            "D) Desinfectar el agua mediante rayos ultravioleta."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las trampas de grasa capturan los residuos lipídicos de cocinas comerciales, evitando que se solidifiquen y tapen las redes generales de alcantarillado."
    },
    {
        id: 120,
        area: "Normativa y Gestión",
        pregunta: "En la administración de contratos de obra, ¿qué implica el proceso de 'Finiquito de Obra'?",
        opciones: [
            "A) El inicio de las excavaciones preliminares en el terreno.",
            "B) El acuerdo administrativo formal mediante el cual se da por terminada la relación contractual, liquidando saldos pendientes, entregando garantías y formalizando la recepción final de los trabajos.",
            "C) La firma de la licencia de uso de suelo provisional.",
            "D) El cálculo de los costos indirectos de oficina central."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El finiquito cierra formalmente el contrato de construcción, asentando cuentas finales, devoluciones de garantías y la entrega-recepción definitiva de la obra."
    }
];