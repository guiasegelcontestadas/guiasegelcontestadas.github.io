const bancoPreguntas = [
    {
        id: 1,
        area: "Gestión de Servicios Turísticos",
        pregunta: "Un hotel de 200 habitaciones tuvo ocupadas 150 habitaciones en una noche, generando un ingreso total por hospedaje de $225,000 MXN. ¿Cuál es la Tarifa Promedio Diaria (ADR) obtenida?",
        opciones: [
            "A) $1,125 MXN",
            "B) $1,800 MXN",
            "C) $1,500 MXN",
            "D) $2,250 MXN"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El ADR se calcula dividiendo los ingresos totales de habitaciones entre las habitaciones vendidas ($225,000 / 150 = $1,500 MXN)."
    },
    {
        id: 2,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué indicador mide el número máximo de visitantes que puede recibir un destino o sitio patrimonial sin provocar un deterioro inaceptable en sus recursos físicos o en la satisfacción del visitante?",
        opciones: [
            "A) Capacidad de Carga Turística",
            "B) Umbral de Rentabilidad Social",
            "C) Índice de Saturación Urbana",
            "D) Factor de Ocupación Estacional"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Capacidad de Carga Turística establece el límite máximo de intensidad de uso que soporta un área sin degradar sus recursos naturales, culturales o la experiencia turística."
    },
    {
        id: 3,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "Una agencia de viajes receptiva diseña un paquete que integra hospedaje, transportación local, guías y alimentos por un precio global. ¿Cómo se clasifica esta oferta en el mercado?",
        opciones: [
            "A) Venta Cruzada Desagregada",
            "B) Tour Inclusivo o Package Tour",
            "C) Servicio A la Carta",
            "D) Tarifa Dinámica Abierta"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un Tour Inclusivo (Package Tour) combina dos o más servicios turísticos complementarios comercializados como un único producto consolidado a precio global."
    },
    {
        id: 4,
        area: "Políticas y Normatividad Turística",
        pregunta: "En México, ¿cuál es el instrumento normativo obligatorio que regula la prestación de servicios turísticos, la clasificación hotelera y el Registro Nacional de Turismo (RNT)?",
        opciones: [
            "A) Código Ético Mundial para el Turismo",
            "B) Ley General del Equilibrio Ecológico",
            "C) Ley Federal sobre Monumentos y Zonas Arqueológicas",
            "D) Ley General de Turismo y sus Normas Oficiales Mexicanas (NOM)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La Ley General de Turismo rige el funcionamiento del sector turístico en México, estableciendo las bases para el RNT y las NOM turísticas."
    },
    {
        id: 5,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué métrica hotelera evalúa el rendimiento financiero global al multiplicar el porcentaje de ocupación por la tarifa promedio diaria (o dividir ingresos de habitaciones entre el total de habitaciones disponibles)?",
        opciones: [
            "A) GOPPAR (Gross Operating Profit Per Available Room)",
            "B) RevPAR (Revenue Per Available Room)",
            "C) TrevPAR (Total Revenue Per Available Room)",
            "D) RevPOR (Revenue Per Occupied Room)"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El RevPAR mide los ingresos generados por cada habitación disponible en el hotel, reflejando el balance entre ocupación y precio medio de venta."
    },
    {
        id: 6,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "Según la OMT, ¿cuáles son los tres pilares fundamentales que debe equilibrar la planificación del turismo sostenible para garantizar su viabilidad a largo plazo?",
        opciones: [
            "A) Promoción digital, infraestructura hotelera y financiamiento bancario",
            "B) Aspectos ambientales, socio-culturales y económicos",
            "C) Transporte aéreo, conectividad terrestre y cruceros",
            "D) Inversión extranjera, empleo temporal y divisas internacionales"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El turismo sostenible requiere conciliar la conservación ambiental, el respeto a la autenticidad sociocultural y la equidad e viabilidad económica."
    },
    {
        id: 7,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué canal de distribución de reservas hoteleras opera cobrando comisiones directas por venta en línea mediante plataformas masivas como Booking o Expedia?",
        opciones: [
            "A) OTA (Online Travel Agency)",
            "B) GDS (Global Distribution System)",
            "C) CRS (Central Reservation System)",
            "D) DMC (Destination Management Company)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las OTAs (Agencias de Viajes en Línea) son intermediarios digitales que comercializan servicios turísticos a cambio de una comisión sobre la reserva efectuada."
    },
    {
        id: 8,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la gestión operativa de Alimentos y Bebidas, ¿cómo se calcula el porcentaje de costo de materia prima (Cost %)?",
        opciones: [
            "A) (Ventas totales de alimentos / Costo de insumos consumidos) * 100",
            "B) (Costo de ventas de insumos / Ventas totales de alimentos y bebidas) * 100",
            "C) (Gastos de nómina / Utilidad bruta) * 100",
            "D) (Inventario final - Inventario inicial) / Ventas netas"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El porcentaje de costo de A&B se determina dividiendo el costo neto del alimento consumido entre el ingreso total generado por sus ventas multiplicado por 100."
    },
    {
        id: 9,
        area: "Políticas y Normatividad Turística",
        pregunta: "En el contexto de la OMT, ¿qué documento ético establece el marco de referencia para el desarrollo responsable y sostenible del turismo global?",
        opciones: [
            "A) Código Ético Mundial para el Turismo",
            "B) Declaración de Manila sobre el Turismo Mundial",
            "C) Carta del Turismo Sostenible de Lanzarote",
            "D) Convenio sobre la Protección del Patrimonio Mundial"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Código Ético Mundial para el Turismo de la OMT fija los principios rectores para maximizar los beneficios del sector minimizando impactos negativos."
    },
    {
        id: 10,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué estrategia de fijación de precios ajusta las tarifas hoteleras o aéreas en tiempo real basándose en la demanda, anticipación de compra y comportamiento del mercado?",
        opciones: [
            "A) Precios por costo más margen",
            "B) Precio de penetración",
            "C) Yield / Revenue Management (Gestión de Ingresos)",
            "D) Tarifa plana de temporada"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Revenue Management optimiza los ingresos vendiendo el producto adecuado al cliente adecuado, en el momento preciso y al precio óptimo mediante tarifas dinámicas."
    },
    {
        id: 11,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de turismo se realiza en áreas naturales conservando el medio ambiente y mejorando el bienestar de la población local mediante la interpretación y educación ambiental?",
        opciones: [
            "A) Turismo de Aventura",
            "B) Ecoturismo",
            "C) Turismo Rural",
            "D) Turismo Cinegético"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El ecoturismo es la modalidad del turismo de naturaleza enfocada en la observación, conservación y sustentabilidad ecológica con participación comunitaria."
    },
    {
        id: 12,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En un centro de convenciones o departamento de ventas de grupos, ¿qué documento contractual especifica el bloqueo de habitaciones, espacios de salones, banquetes y penalizaciones por cancelación?",
        opciones: [
            "A) Comprobante de pago o voucher",
            "B) Orden de servicio de banquetes (BEO)",
            "C) Contrato de prestación de servicios para grupos y eventos",
            "D) Hoja de registro de huéspedes (Registration card)"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El contrato de eventos y grupos formaliza los acuerdos comerciales, garantías de asistencia, depósitos y cláusulas de cancelación o atrición."
    },
    {
        id: 13,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué programa federal en México reconoce a las localidades que conservan su patrimonio cultural, arquitectura tradicional y tradiciones vivas con potencial turístico?",
        opciones: [
            "A) Pueblos Mágicos",
            "B) Ciudades Patrimonio de la Humanidad",
            "C) Tesoros Coloniales",
            "D) Barrios con Encanto"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El programa Pueblos Mágicos de la SECTUR pone en valor localidades mexicanas con atributos simbólicos, leyendas e historia para dinamizar su economía turística."
    },
    {
        id: 14,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué concepto representa el conjunto de percepciones, creencias e impresiones que las personas tienen sobre un destino turístico en su mente?",
        opciones: [
            "A) Marca Ciudad",
            "B) Posicionamiento Web",
            "C) Imagen del Destino (Destination Image)",
            "D) Reputación Online"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La imagen del destino es la representación mental global formada por atributos cognitivos y afectivos evaluados por los turistas potenciales."
    },
    {
        id: 15,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "En el análisis geográfico del turismo, ¿cómo se denomina al espacio que abarca los atractivos, la planta turística, la infraestructura y los flujos de visitantes definidos por una frontera de gestión?",
        opciones: [
            "A) Corredor turístico de tránsito",
            "B) Núcleo receptor primario",
            "C) Destino Turístico (o Sistema Turístico Territorial)",
            "D) Zona de influencia comercial"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Un destino turístico integra el espacio geográfico donde se concentra la oferta, infraestructura y servicios orientados a satisfacer la demanda del turista."
    },
    {
        id: 16,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué departamento del área de división cuartos es responsable directo de la limpieza, mantenimiento estético y sanitización de las habitaciones y áreas públicas del hotel?",
        opciones: [
            "A) Recepción / Front Desk",
            "B) Ama de Llaves (Housekeeping)",
            "C) Mantenimiento e Ingeniería",
            "D) Concierge"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El departamento de Ama de Llaves gestiona el aseo, presentación y control del inventario de blancos y suministros en habitaciones y áreas comunes."
    },
    {
        id: 17,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Cuál es la norma oficial mexicana que regula los requisitos mínimos de seguridad e información que deben ofrecer los prestadores de servicios turísticos de buceo?",
        opciones: [
            "A) NOM-05-TUR-2003",
            "B) NOM-011-TUR-2017",
            "C) NOM-08-TUR-2002",
            "D) NOM-09-TUR-2002"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La NOM-05-TUR especifica los lineamientos de seguridad, equipos e información para guías y empresas dedicadas al buceo recreativo en México."
    },
    {
        id: 18,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "En la segmentación del mercado turístico, ¿a qué criterio corresponde la división de clientes según sus estilos de vida, valores, motivaciones de viaje y personalidad?",
        opciones: [
            "A) Segmentación Demográfica",
            "B) Segmentación Geográfica",
            "C) Segmentación Psicográfica",
            "D) Segmentación Conductual"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La segmentación psicográfica agrupa a los viajeros de acuerdo con sus variables psicológicas, como actitudes, valores, intereses y estilo de vida."
    },
    {
        id: 19,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Cuál es la primera fase metodológica indispensable en la elaboración de un Plan de Desarrollo Turístico Municipal?",
        opciones: [
            "A) Definición de la imagen objetivo",
            "B) Diagnóstico situacional e inventario turístico",
            "C) Asignación de presupuesto operativo",
            "D) Campaña de promoción turística"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El diagnóstico situacional y el inventario de recursos permiten evaluar el estado actual del territorio antes de formular objetivos y proyectos."
    },
    {
        id: 20,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué sistema global de reservas (GDS) nació históricamente del desarrollo tecnológico de las aerolíneas para conectar agencias con proveedores de viajes?",
        opciones: [
            "A) Amadeus / Sabre / Travelport",
            "B) Opera / Fidelio",
            "C) Micros / Aloha",
            "D) Salesforce / Hubspot"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Plataformas como Amadeus, Sabre y Travelport son sistemas GDS que consolidan y distribuyen en tiempo real inventarios aéreos, hoteleros y de autos a nivel global."
    },
    {
        id: 21,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué organismo internacional de la ONU lidera el diseño de políticas públicas, estadísticas estandarizadas y gobernanza del turismo a nivel mundial?",
        opciones: [
            "A) ONU Turismo (anteriormente OMT)",
            "B) WTTC (World Travel & Tourism Council)",
            "C) IATA (International Air Transport Association)",
            "D) UNESCO"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "ONU Turismo es el organismo de las Naciones Unidas encargado de promover un turismo responsable, sostenible y accesible para todos."
    },
    {
        id: 22,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "En el turismo de reuniones (MICE), ¿qué significan las siglas de esta tipología de mercado especial?",
        opciones: [
            "A) Marketing, Innovation, Culture, Entertainment",
            "B) Meetings, Incentives, Conferences, Exhibitions",
            "C) Management, Investment, Commerce, Economy",
            "D) Museums, Internal, Cities, Events"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "MICE engloba los viajes de negocios orientados a Reuniones (Meetings), Incentivos (Incentives), Conferencias (Conferences) y Exposiciones (Exhibitions)."
    },
    {
        id: 23,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué fenómeno socioeconómico negativo ocurre cuando el aumento desmedido de turistas desplaza a la población local del centro histórico por el incremento de rentas y servicios?",
        opciones: [
            "A) Gentrificación turística",
            "B) Aculturación directa",
            "C) Fuga de divisas",
            "D) Estacionalidad de la demanda"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La gentrificación turística transforma barrios tradicionales al adaptar viviendas y comercios locales para el uso de visitantes de mayor poder adquisitivo, encareciendo el costo de vida."
    },
    {
        id: 24,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el menú de un restaurante, ¿qué técnica analiza la rentabilidad y la popularidad de cada platillo para optimizar la oferta (Menú Engineering)?",
        opciones: [
            "A) Clasificación de platillos en: Estrellas, Caballos de batalla, Rompecabezas y Perros",
            "B) Método FIFO de rotación de insumos",
            "C) Diagrama de Pareto de gastos indirectos",
            "D) Análisis HACCP de puntos críticos"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La ingeniería de menú categoriza los platos cruzando su margen de contribución (rentabilidad) y su volumen de ventas (popularidad)."
    },
    {
        id: 25,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Cuál es la vigencia de inscripción que otorga el Registro Nacional de Turismo (RNT) en México a los prestadores de servicios obligados?",
        opciones: [
            "A) 1 año con renovación obligatoria",
            "B) 2 años renovable",
            "C) Indefinida sin necesidad de actualización",
            "D) 5 años condicionado a inspección"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En México, la constancia de inscripción al RNT emitida por la SECTUR tiene una vigencia bianual (2 años), debiendo actualizarse periódicamente."
    },
    {
        id: 26,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué indicador mide el porcentaje de visitantes que realizan una reserva o compra definitiva en el sitio web oficial de un hotel frente al total de visitas recibidas?",
        opciones: [
            "A) Tasa de conversión (Conversion Rate)",
            "B) Tasa de rebote (Bounce Rate)",
            "C) Costo por Clic (CPC)",
            "D) Retorno de la Inversión (ROI)"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La tasa de conversión expresa la proporción de usuarios digitales que completan una acción deseada (reserva) del total de tráfico en el canal digital."
    },
    {
        id: 27,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué metodología de evaluación ambiental determina previamente los impactos potenciales de una infraestructura turística (ej. resort) en un ecosistema frágil?",
        opciones: [
            "A) Manifestación de Impacto Ambiental (MIA)",
            "B) Auditoría Ambiental ISO 14001",
            "C) Análisis del Ciclo de Vida (ACV)",
            "D) Plan de Manejo de Residuos Sólidos"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La MIA es el documento técnico-jurídico que evalúa las consecuencias ambientales de un proyecto de obras turísticas antes de autorizar su construcción."
    },
    {
        id: 28,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué documento operativo utiliza el área de banquetes para detallar hora por hora el montaje, el menú, el servicio y requerimientos técnicos de un evento?",
        opciones: [
            "A) BEO (Banquet Event Order / Orden de Servicio)",
            "B) Check-list de recepción",
            "C) Master Account Folio",
            "D) Reporte diario de Ama de Llaves"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La BEO es la guía operativa interna que coordina a cocina, meseros, mantenimiento y audio para ejecutar un evento según lo contratado."
    },
    {
        id: 29,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué distintivo mexicano otorga la SECTUR y la Secretaría de Salud a los establecimientos de A&B por cumplir estándares de higiene en el manejo de alimentos?",
        opciones: [
            "A) Distintivo 'M' (Moderniza)",
            "B) Distintivo 'S' (Sustentable)",
            "C) Distintivo 'H'",
            "D) Sello Cerca de China"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Distintivo 'H' es el reconocimiento que avala el cumplimiento de la NMX-F-605-NORMEX sobre higiene en la manipulación de alimentos y bebidas."
    },
    {
        id: 30,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "En la mezcla de mercadotecnia de servicios turísticos (Las 7 Ps), ¿cuáles son las 3 Ps adicionales a las tradicionales (Producto, Precio, Plaza, Promoción)?",
        opciones: [
            "A) Personal (People), Procesos (Processes) y Evidencia Física (Physical Evidence)",
            "B) Publicidad, Patrocinios y Presupuesto",
            "C) Posicionamiento, Percepción y Penetración",
            "D) Planificación, Producción y Partners"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La mezcla ampliada para servicios añade Personas (atención al cliente), Procesos (entrega del servicio) y Evidencia Física (entorno e instalaciones)."
    },
    {
        id: 31,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Cómo se define el turismo cultural según la Organización Mundial del Turismo?",
        opciones: [
            "A) Aquel donde la motivación esencial del viajero es aprender, descubrir, experimentar y consumir atractivos culturales tangibles e intangibles",
            "B) Excursiones exclusivamente dedicadas a compras en centros artesanales",
            "C) Viajes motivados únicamente por convenciones religiosas anuales",
            "D) Desplazamientos para presenciar competencias deportivas internacionales"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El turismo cultural busca la vivencia y valoración de las expresiones históricas, artísticas, gastronómicas e identitarias de un destino."
    },
    {
        id: 32,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración de inventario hotelero, ¿qué significa la práctica del 'Overbooking' (sobreventa)?",
        opciones: [
            "A) Reservar deliberadamente más habitaciones que las disponibles para compensar cancelaciones de último minuto o no-shows",
            "B) Cobrar una tarifa doble a huéspedes VIP sin previo aviso",
            "C) Ofrecer cambios de habitación de cortesía a todos los clientes",
            "D) Cerrar las ventas en todos los canales digitales simultáneamente"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El overbooking es una estrategia financiera controlada para maximizar la ocupación contrarrestando el porcentaje estadístico de no presentados (no-shows)."
    },
    {
        id: 33,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué fondo o mecanismo internacional de la UNESCO otorga la declaratoria de 'Patrimonio de la Humanidad' a sitios con Valor Universal Excepcional?",
        opciones: [
            "A) Convención sobre la Protección del Patrimonio Mundial, Cultural y Natural de 1972",
            "B) Tratado de Libre Comercio para el Turismo",
            "C) Convenio de Ramsar sobre Humedales",
            "D) Declaración Universal de los Derechos del Viajero"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La Convención de 1972 de la UNESCO identifica y protege los bienes culturales y naturales con valor universal único a nivel mundial."
    },
    {
        id: 34,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué técnica de viajes de familiarización (FAM Trips) organiza un destino o agencia mayorista para la promoción de un nuevo producto?",
        opciones: [
            "A) Invitar a agentes de viajes y periodistas para que vivan la experiencia directa del destino y la recomienden",
            "B) Ofrecer viajes de incentivo a los empleados de menor rendimiento",
            "C) Enviar encuestas masivas por correo postal a clientes retirados",
            "D) Realizar pruebas a ciegas de alimentos en restaurantes locales"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los FAM Trips permiten que intermediarios de viajes e influencers experimenten el destino de primera mano para facilitar su posterior venta y cobertura."
    },
    {
        id: 35,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "En la tipología de atractivos turísticos del inventario de CICATUR-OEA, ¿a qué categoría corresponden las zonas arqueológicas y monumentos históricos?",
        opciones: [
            "A) Sitios naturales",
            "B) Acontecimientos programados",
            "C) Realizaciones técnicas, científicas o artísticas contemporáneas",
            "D) Folklore y manifestaciones culturales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las obras arquitectónicas históricas, vestigios arqueológicos y expresiones del pasado se integran en las manifestaciones culturales e históricas del inventario."
    },
    {
        id: 36,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué indicador mide el número medio de huéspedes que se alojan por cada habitación ocupada en un hotel (Factor de Doble Ocupación)?",
        opciones: [
            "A) Total huéspedes / Total habitaciones ocupadas",
            "B) Total habitaciones disponibles / Total huéspedes",
            "C) Ingresos totales / Habitaciones limpiadas",
            "D) Habitaciones dobles / Habitaciones sencillas"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El índice de densidad u ocupación por habitación dividiendo el número de huéspedes entre las habitaciones ocupadas evalúa el tipo de viajero (parejas, familias)."
    },
    {
        id: 37,
        area: "Políticas y Normatividad Turística",
        pregunta: "En el transporte aéreo internacional, ¿qué acuerdo regulatorio internacional (Libertades del Aire) permite a una aerolínea volar sobre el territorio de otro país sin aterrizar?",
        opciones: [
            "A) Primera Libertad del Aire",
            "B) Segunda Libertad del Aire",
            "C) Tercera Libertad del Aire",
            "D) Quinta Libertad del Aire"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La Primera Libertad concede el derecho de sobrevolar el espacio aéreo de un Estado contratante sin aterrizar en su territorio."
    },
    {
        id: 38,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué estrategia publicitaria utiliza el patrocinio y la aparición de un destino turístico en series de televisión o películas para atraer visitantes?",
        opciones: [
            "A) B2B Direct Marketing",
            "B) Film Commission / Turismo Cinematográfico (Screen Tourism)",
            "C) Merchandising en punto de venta",
            "D) Telemercadeo de respuesta inmediata"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El turismo de pantalla o cine aprovecha la exposición mediática de paisajes e historias proyectadas en el cine/TV para despertar el deseo de viaje."
    },
    {
        id: 39,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué índice económico mide el efecto amplificador que tiene el gasto directo de los turistas al filtrarse a través de los diferentes sectores de la economía local?",
        opciones: [
            "A) Multiplicador del Turismo",
            "B) Tasa Interna de Retorno (TIR)",
            "C) Cociente de Localización Regional",
            "D) Balance de Pagos Turísticos"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El multiplicador del turismo cuantifica la riqueza secundaria generada cuando los ingresos del turismo reingresan a la economía local mediante salarios y compras."
    },
    {
        id: 40,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la operación de una agencia de viajes mayorista, ¿qué representa el término 'Charter'?",
        opciones: [
            "A) Alquilar o contratar de forma exclusiva la capacidad total de un transporte (avión, autobús) para una ruta y fecha específica",
            "B) Vender boletos aéreos individuales en tarifa comercial abierta",
            "C) Tramitar visas consulares de emergencia",
            "D) Inspeccionar la calidad de las habitaciones de un crucero"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Un vuelo o transporte charter es un viaje no regular arrendado en su totalidad por un turoperador para trasladar a sus clientes a costos por asiento más bajos."
    },
    {
        id: 41,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué programa de la SECTUR distingue a las empresas turísticas que han implementado un Sistema de Gestión de Calidad operacional de excelencia (Moderniza)?",
        opciones: [
            "A) Distintivo 'M'",
            "B) Distintivo 'H'",
            "C) Sello Punto Limpio",
            "D) Distintivo 'S'"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Distintivo 'M' (Programa Moderniza) está dirigido a Mipymes turísticas para mejorar sus procesos gerenciales, rentabilidad y satisfacción del cliente."
    },
    {
        id: 42,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué modelo de comportamiento del consumidor turístico describe las etapas consecutivas: Soñar, Planificar, Reservar, Experimentar y Compartir?",
        opciones: [
            "A) Viaje del Cliente / Customer Journey del Turista",
            "B) Matriz BCG de atractivos",
            "C) Pirámide de Necesidades de Maslow",
            "D) Modelo de las 5 Fuerzas de Porter"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Customer Journey del viajero abarca desde la primera inspiración digital hasta la fase post-viaje al compartir comentarios en redes sociales."
    },
    {
        id: 43,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de indicador mide el porcentaje de empleos locales directos e indirectos generados por la actividad turística en una comunidad?",
        opciones: [
            "A) Indicador de impacto socioeconómico",
            "B) Indicador de huella hídrica",
            "C) Indicador de satisfacción del visitante",
            "D) Indicador de densidad biológica"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La medición de la generación de empleo evalúa la contribución del turismo a la inclusión laboral y distribución del ingreso en la comunidad receptora."
    },
    {
        id: 44,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el área de recepción hotelera, ¿qué es el 'Night Audit' (Auditoría Nocturna)?",
        opciones: [
            "A) El proceso de cierre diario donde se verifican las cuentas de los huéspedes, se cargan las tarifas de habitación y se consolidan los reportes financieros",
            "B) El inventario físico de las bebidas del bar principal a medianoche",
            "C) La inspección de seguridad en las salidas de emergencia",
            "D) El cambio de turno entre las camaristas del servicio vespertino"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La auditoría nocturna equilibra los ingresos y saldos de todas las áreas operativas del hotel, cerrando el día contable de la propiedad."
    },
    {
        id: 45,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué organismo en México se encarga de la conservación, investigación y protección del patrimonio arqueológico e histórico abierto al turismo?",
        opciones: [
            "A) INAH (Instituto Nacional de Antropología e Historia)",
            "B) INBAL (Instituto Nacional de Bellas Artes y Literatura)",
            "C) CONANP (Comisión Nacional de Áreas Naturales Protegidas)",
            "D) FONATUR"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El INAH es el órgano federal responsable de resguardar y normar el uso de monumentos y zonas arqueológicas e históricas en el país."
    },
    {
        id: 46,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué término hace referencia al marketing enfocado en adaptar la oferta turística para el segmento de viajeros con discapacidad o movilidad reducida?",
        opciones: [
            "A) Turismo Accesible e Inclusivo",
            "B) Turismo Voluntario (Volunturismo)",
            "C) Turismo Nómada Digital",
            "D) Turismo de Lujo Sostenible"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El turismo accesible busca eliminar barreras físicas y actitudinales para que todas las personas, independientemente de sus capacidades, disfruten los servicios."
    },
    {
        id: 47,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Cómo se llama el modelo de desarrollo urbano-turístico planificado centralmente por el estado mexicano a partir de los años 70 (ej. Cancún, Ixtapa, Los Cabos)?",
        opciones: [
            "A) Centros Integralmente Planeados (CIPs)",
            "B) Corredores de Ecoturismo Comunitario",
            "C) Zonas de Desarrollo Turístico Sustentable (ZDTS)",
            "D) Distritos Históricos de Innovación"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los CIPs impulsados por FONATUR fueron master-plans creados desde cero para dinamizar regiones costeras mediante megaproyectos turísticos."
    },
    {
        id: 48,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración del servicio al cliente en hotelería, ¿qué es el 'Momento de la Verdad'?",
        opciones: [
            "A) Cualquier episodio en el que el cliente entra en contacto con cualquier aspecto de la organización y se forma una impresión del servicio",
            "B) La firma de la factura al momento del Check-out",
            "C) La auditoría de calidad anual por parte de los inspectores",
            "D) La reunión semanal de gerentes de departamento"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Jan Carlzon definió los momentos de la verdad como las interacciones clave donde el cliente evalúa la calidad real del servicio recibido."
    },
    {
        id: 49,
        area: "Políticas y Normatividad Turística",
        pregunta: "En materia de normatividad ambiental mexicana, ¿qué figura legal protege ecosistemas naturales representativos sin alteración humana significativa (ej. Sian Ka'an)?",
        opciones: [
            "A) Área Natural Protegida (ANP)",
            "B) Zona Federal Marítimo Terrestre (ZOFEMAT)",
            "C) Parque Temático de Conservación",
            "D) Ejido de Producción Forestal"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las ANPs decretadas por la CONANP regulan las actividades humanas y turísticas para conservar la biodiversidad en territorios de alto valor ecológico."
    },
    {
        id: 50,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué métrica del marketing de contenidos mide cuántas veces los usuarios compartieron una publicación turística en sus perfiles sociales?",
        opciones: [
            "A) Engagement Rate / Amplificación social",
            "B) Costo de Adquisición de Clientes (CAC)",
            "C) Net Promoter Score (NPS)",
            "D) Valor del Tiempo de Vida del Cliente (CLV)"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El alcance y la tasa de interacción (engagement) miden el impacto viral y el interés despertado por las publicaciones en la comunidad digital."
    },
    {
        id: 51,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué concepto define a la pérdida de beneficios económicos cuando las divisas generadas por el turismo no se quedan en la comunidad receptora sino que retornan a países extranjeros por importaciones o repatriación de utilidades?",
        opciones: [
            "A) Fuga de divisas (Economic Leakage)",
            "B) Inflación importada",
            "C) Déficit comercial de servicios",
            "D) Desvalorización cambiaria"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fuga de divisas ocurre cuando las ganancias del turismo salen del destino para pagar insumos importados, marcas o cadenas trasnacionales."
    },
    {
        id: 52,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En un restaurante de servicio completo, ¿cuál es la diferencia principal entre el servicio a la americana y el servicio a la francesa?",
        opciones: [
            "A) En el americano los platos salen emplatados desde la cocina; en el francés los alimentos se sirven en platones por la izquierda del comensal",
            "B) El americano requiere el uso de carritos guéridon obligatorios",
            "C) El francés es exclusivo para buffet auto-servicio",
            "D) El americano se sirve siempre con etiqueta rigurosa de guante blanco"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El servicio a la americana destaca por su rapidez al emplatar en cocina, mientras que el francés es ceremonial y formal, sirviendo directamente desde fuentes al plato del cliente."
    },
    {
        id: 53,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué organismo público promueve la inversión turística sustentable y el desarrollo de infraestructura en México?",
        opciones: [
            "A) FONATUR (Fondo Nacional de Fomento al Turismo)",
            "B) CPTM (Consejo de Promoción Turística de México - extinto)",
            "C) BANOBRAS",
            "D) SECTUR estatal"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "FONATUR ha sido la entidad encargada de planear e impulsar proyectos de inversión estratégica e infraestructura turística en el territorio nacional."
    },
    {
        id: 54,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué tipo de turismo engloba a los viajeros que se desplazan para recibir tratamientos médicos, intervenciones quirúrgicas o terapias de bienestar (Wellness)?",
        opciones: [
            "A) Turismo de Salud y Bienestar (Medical & Wellness Tourism)",
            "B) Turismo Deportivo",
            "C) Turismo Religioso",
            "D) Turismo de Aventura"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El turismo de salud abarca tanto el turismo médico (procedimientos curativos) como el de bienestar (spas, relajación y retiro holístico)."
    },
    {
        id: 55,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "En la evaluación de proyectos turísticos, ¿qué herramienta analiza las Fortalezas, Oportunidades, Debilidades y Amenazas de un destino?",
        opciones: [
            "A) Matriz FODA (SWOT Analysis)",
            "B) Diagrama de Gantt",
            "C) Cuadro de Mando Integral",
            "D) Análisis Pestel"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La matriz FODA diagnostica factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) para fundamentar planes estratégicos."
    },
    {
        id: 56,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué documento administrativo registra todos los cargos (habitación, consumos, impuestos) e ingresos de un huésped durante su estancia?",
        opciones: [
            "A) Estado de cuenta / Folio del huésped (Guest Folio)",
            "B) Tarjeta de registro (Reg Card)",
            "C) Padrón de proveedores",
            "D) Válvula de control contable"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El folio del huésped acumula en tiempo real las transacciones financieras asociadas a una habitación desde el Check-in hasta el Check-out."
    },
    {
        id: 57,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Cuál es la norma oficial mexicana de la SECTUR que establece las obligaciones de los guías de turistas especializados en actividades específicas?",
        opciones: [
            "A) NOM-09-TUR-2002",
            "B) NOM-01-TUR-2002",
            "C) NOM-03-TUR-2003",
            "D) NOM-06-TUR-2009"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La NOM-09-TUR norma la especialización de guías en turismo de aventura, ecoturismo o actividades orientadas a la naturaleza en México."
    },
    {
        id: 58,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "En el sector de cruceros turísticos, ¿qué modalidad de viaje ofrece itinerarios cerrados que inician y terminan en el mismo puerto base?",
        opciones: [
            "A) Crucero en circuito / Round-trip cruise",
            "B) Crucero de reposicionamiento",
            "C) Travesía transatlántica pura",
            "D) Expedición fluvial"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Un itinerario 'round-trip' zarpa y desembarca en el mismo puerto (Homeport), facilitando la logística de vuelos del pasajero."
    },
    {
        id: 59,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de turismo involucra la gestión directa y el beneficio económico de comunidades indígenas o rurales que comparten sus tradiciones y territorio?",
        opciones: [
            "A) Turismo Comunitario (o Ecoturismo Comunitario)",
            "B) Turismo Masivo de Sol y Playa",
            "C) Turismo Neoliberal",
            "D) Turismo de Enclave Privado"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El turismo comunitario es gestionado por la propia comunidad rural, asegurando que los ingresos fortalezcan el desarrollo local directo."
    },
    {
        id: 60,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la industria de calidad nórdica o modelo SERVQUAL, ¿cuáles son las dimensiones que evalúan los clientes al juzgar la calidad de un servicio turístico?",
        opciones: [
            "A) Tangibilidad, Confiabilidad, Capacidad de respuesta, Seguridad y Empatía",
            "B) Precio, Rapidez, Limpieza y Tamaño",
            "C) Lujo, Exclusividad, Antigüedad y Fama",
            "D) Publicidad, Ubicación, Descuentos y Regalos"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El modelo SERVQUAL de Parasuraman, Zeithaml y Berry utiliza 5 dimensiones clave para medir la brecha entre expectativas y percepción del cliente."
    },
    {
        id: 61,
        area: "Políticas y Normatividad Turística",
        pregunta: "En el transporte aéreo internacional, ¿qué organismo dicta los códigos de tres letras de aeropuertos (ej. CUN, MEX, MTY) y la regulación de boletaje comercial?",
        opciones: [
            "A) IATA (Asociación de Transporte Aéreo Internacional)",
            "B) OACI (Organización de Aviación Civil Internacional)",
            "C) FAA (Federal Aviation Administration)",
            "D) WTTC"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "IATA asigna las claves de aeropuertos/ciudades y estandariza los procesos comerciales y de tarifas entre aerolíneas del mundo."
    },
    {
        id: 62,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué indicador mide el grado de lealtad de los clientes recomendando el destino o servicio turístico a sus conocidos en una escala de 0 a 10?",
        opciones: [
            "A) Net Promoter Score (NPS)",
            "B) Customer Satisfaction Score (CSAT)",
            "C) Churn Rate",
            "D) Share of Wallet"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El NPS calcula la diferencia entre promotores (9-10) y detractores (0-6), determinando la lealtad global hacia la marca o destino."
    },
    {
        id: 63,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué herramienta cartográfica permite superponer capas de información geográfica, ambiental y socioeconómica para la ordenación del territorio turístico?",
        opciones: [
            "A) Sistemas de Información Geográfica (SIG / GIS)",
            "B) Plan Regulador de Zonas Costeras",
            "C) Croquis de infraestructura urbana",
            "D) Matriz de Leopold"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los SIG permiten analizar espacialmente variables complejas para definir la aptitud turística del suelo y la localización de proyectos."
    },
    {
        id: 64,
        area: "Gestión de Servicios Turísticos",
        pregunta: "¿Qué departamento del hotel administra el equipaje de los huéspedes, el estacionamiento, los traslados y la atención en la puerta principal?",
        opciones: [
            "A) Botones / Concierge / Uniformed Services",
            "B) Recepción",
            "C) Ama de llaves",
            "D) Mantenimiento"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El personal de servicios uniformados (botones, valets, porteros) se encarga de la acogida y movilización inicial y final del huésped."
    },
    {
        id: 65,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué tratado o acuerdo internacional regula la responsabilidad civil de las aerolíneas en caso de muerte, lesiones o pérdida de equipaje en vuelos internacionales?",
        opciones: [
            "A) Convenio de Montreal (o Convenio de Varsovia)",
            "B) Código de Chicago de 1944",
            "C) Tratado de Kyoto",
            "D) Acuerdo de Cielos Abiertos"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Convenio de Montreal unifica las normas sobre indemnizaciones y responsabilidad del transportista aéreo en el tráfico internacional."
    },
    {
        id: 66,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "En la distribución turística, ¿qué función realiza una DMC (Destination Management Company)?",
        opciones: [
            "A) Proporcionar servicios profesionales de logística local, eventos, tours y transporte basados en un profundo conocimiento del destino",
            "B) Administrar los fondos de promoción turística estatales",
            "C) Regular las tarifas aéreas internacionales",
            "D) Operar como un motor de búsqueda de hoteles de bajo costo"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una DMC es una agencia especializada en el receptivo local que coordina la logística en destino para grupos, congresos y viajes corporativos."
    },
    {
        id: 67,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de estacionalidad turística se caracteriza por la concentración masiva de demanda en breves periodos del año (ej. verano o Semana Santa)?",
        opciones: [
            "A) Estacionalidad de alta concentración (Picos de demanda)",
            "B) Estacionalidad acumulada continua",
            "C) Demanda elástica uniforme",
            "D) Variación estacional inversa"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los picos estacionales generan presión sobre los recursos en temporada alta e inactividad con desempleo en temporada baja."
    },
    {
        id: 68,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el costeo de A&B, ¿qué es la 'Receta Estándar'?",
        opciones: [
            "A) La fórmula escrita que especifica la cantidad exacta de ingredientes, métodos de preparación, tamaño de porción y costo de elaboración de un platillo",
            "B) La lista de precios de proveedores aprobados",
            "C) El menú impreso que se entrega al comensal",
            "D) El manual de limpieza de la cocina industrial"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La receta estándar garantiza la consistencia en sabor, presentación, porciones y control preciso de costos de producción en cocina."
    },
    {
        id: 69,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué distintivo mexicano de la SECTUR reconoce a las empresas que aplican prácticas sustentables en el cuidado del agua, energía y responsabilidad social?",
        opciones: [
            "A) Distintivo 'S'",
            "B) Distintivo 'H'",
            "C) Distintivo 'M'",
            "D) Código de Conducta Nacional"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Distintivo 'S' avala a prestadores de servicios turísticos que operan bajo criterios globales de sustentabilidad ambiental y social."
    },
    {
        id: 70,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué estrategia de marketing turístico busca posicionar a un destino promoviendo sus platillos tradicionales, bebidas ancestrales y chefs locales?",
        opciones: [
            "A) Marketing Gastronómico",
            "B) Marketing Enológico exclusivo",
            "C) BTL Deportivo",
            "D) Endomarketing cultural"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El turismo gastronómico utiliza el patrimonio culinario como atractivo principal motivador del viaje y diferenciador del destino."
    },
    {
        id: 71,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "En el modelo del Ciclo de Vida del Destino Turístico de Butler, ¿cuáles son sus etapas en orden cronológico?",
        opciones: [
            "A) Exploración, Implicación, Desarrollo, Consolidación, Estancamiento y (Rejuvenecimiento o Declive)",
            "B) Nacimiento, Crecimiento, Madurez y Muerte",
            "C) Introducción, Promoción, Saturación y Abandono",
            "D) Inicio, Planificación, Ejecución y Cierre"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El modelo de Butler describe la evolución del destino desde la llegada de los primeros exploradores hasta la fase crítica de estancamiento."
    },
    {
        id: 72,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración hotelera, ¿qué es el 'Rack Rate' (Tarifa Mostrador)?",
        opciones: [
            "A) La tarifa pública máxima publicada oficialmente por el hotel sin ningún tipo de descuento aplicado",
            "B) La tarifa preferencial para agencias de viajes",
            "C) La tarifa neta acordada para grupos masivos",
            "D) El costo directo de limpieza de una habitación"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Rack Rate es la tarifa de lista oficial sin rebajas que se cobra a clientes imprevistos que llegan directamente al mostrador (walk-in)."
    },
    {
        id: 73,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué organismo internacional técnico regula la seguridad de la aviación civil, las rutas aéreas y la infraestructura aeroportuaria mundial?",
        opciones: [
            "A) OACI (Organización de Aviación Civil Internacional / ICAO)",
            "B) IATA",
            "C) OMT",
            "D) CLIA (Cruise Lines International Association)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La OACI es la agencia especializada de la ONU que establece las normas de seguridad y eficiencia en la navegación aérea global."
    },
    {
        id: 74,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué concepto describe a los viajeros que combinan un viaje de negocios con actividades de ocio y turismo personal (Business + Leisure)?",
        opciones: [
            "A) Bleisure Tourism",
            "B) Slum Tourism",
            "C) Dark Tourism",
            "D) VFR (Visiting Friends and Relatives)"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El turismo 'Bleisure' extiende las estancias corporativas añadiendo días de descanso y actividades turísticas en el destino."
    },
    {
        id: 75,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué técnica de interpretación ambiental utiliza senderos auto-guiados con mamparas explicativas para educar al visitante sin alterar el paisaje?",
        opciones: [
            "A) Interpretación pasiva no personal",
            "B) Guianza temática directa de alta intensidad",
            "C) Mercadeo directo de conservación",
            "D) Zonificación estricta sin acceso"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los senderos interpretativos no personales emplean paneles informativos para transmitir mensajes ambientales al ritmo del visitante."
    },
    {
        id: 76,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la industria de cruceros, ¿cómo se denomina al proceso de desembarque de pasajeros y reabastecimiento general del barco en pocas horas antes del siguiente viaje?",
        opciones: [
            "A) Turnaround (Operación de recambio)",
            "B) Dry Dock (Dique seco)",
            "C) Tender Operation",
            "D) Bunkering de combustible"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Turnaround exige una logística impecable para desembarcar a miles de pasajeros, limpiar el barco y embarcar a los nuevos huéspedes el mismo día."
    },
    {
        id: 77,
        area: "Políticas y Normatividad Turística",
        pregunta: "En México, ¿qué ley regula el aprovechamiento y conservación de los recursos forestales y de la biodiversidad en proyectos ecoturísticos comunitarios?",
        opciones: [
            "A) Ley General de Desarrollo Forestal Sustentable",
            "B) Ley Agraria Federal",
            "C) Ley Federal de Aguas Nacionales",
            "D) Ley de Navegación y Comercio Marítimo"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Esta ley establece los marcos de conservación y manejo sustentable de terrenos forestales utilizados para actividades turísticas de naturaleza."
    },
    {
        id: 78,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué tipo de turismo abarca las visitas a lugares asociados con la muerte, tragedias o acontecimientos históricos dolorosos (ej. Chernóbil o campos de concentración)?",
        opciones: [
            "A) Turismo Oscuro / Turismo Negro (Dark Tourism)",
            "B) Turismo de Ciénaga",
            "C) Ecoturismo extremo",
            "D) Turismo Espiritual"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Dark Tourism motiva desplazamientos impulsados por el valor histórico, memoria o interés cultural en sitios de tragedias pasadas."
    },
    {
        id: 79,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué documento legal delimita los usos permitidos del suelo, densidades habitacionales e infraestructura en un centro de población turístico?",
        opciones: [
            "A) Plan Director de Desarrollo Urbano / Ordenamiento Territorial",
            "B) Atlas de Riesgo Metropolitano",
            "C) Manifiesto de Impacto Social",
            "D) Censo Económico INEGI"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Plan de Desarrollo Urbano fija la zonificación, coeficientes de ocupación de suelo (COS/CUS) y reglas de edificación turística."
    },
    {
        id: 80,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la división de alimentos y bebidas, ¿qué significa la expresión 'Mise en Place'?",
        opciones: [
            "A) Organizar y preparar con anticipación todos los ingredientes, utensilios y estaciones necesarios para el servicio impecable en cocina o comedor",
            "B) La limpieza profunda de los pisos al cierre de turno",
            "C) El inventario de botellas de licor abiertas",
            "D) La presentación formal del menú al comensal"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Mise en place implica 'todo en su lugar', facilitando la fluidez del trabajo gastronómico durante las horas pico de servicio."
    },
    {
        id: 81,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué distintivo otorga la SECTUR a los prestadores de servicios turísticos orientados al mercado chino que han adaptado sus atenciones e idioma (Cerca de China)?",
        opciones: [
            "A) Sello Cerca de China",
            "B) Sello Halal México",
            "C) Distintivo 'M'",
            "D) Sello Inclusive Mexico"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Sello Cerca de China capacita a las empresas para atender las necesidades culturales, idiomáticas y de servicio del turista chino."
    },
    {
        id: 82,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué técnica de ventas en recepción o restaurante anima al cliente a adquirir una versión superior del producto originalmente reservado (ej. suite o vino de reserva)?",
        opciones: [
            "A) Venta Incremental / Upselling",
            "B) Venta Cruzada / Cross-selling",
            "C) Venta Atada",
            "D) Descuento por Volumen"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Upselling sugiere mejoras de categoría en la compra del cliente para incrementar el ingreso medio por transacción."
    },
    {
        id: 83,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de turismo busca reducir la huella de carbono y el impacto ecológico utilizando transporte de bajo consumo y compensando emisiones?",
        opciones: [
            "A) Turismo Bajo en Carbono / Turismo Verde",
            "B) Turismo Industrial",
            "C) Turismo Científico",
            "D) Turismo de Compras"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Esta modalidad promueve la movilidad sostenible y la eficiencia energética en toda la cadena de valor turística."
    },
    {
        id: 84,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el departamento de ama de llaves, ¿qué término se usa cuando una habitación figura limpia en el sistema pero el huésped no la ha ocupado?",
        opciones: [
            "A) Vacante Limpia (Clean & Vacant)",
            "B) Ocupada Sucia",
            "C) Fuera de Servicio (Out of Order)",
            "D) Bloqueada por Mantenimiento"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Vacante y limpia identifica que la habitación está lista para asignación inmediata en recepción."
    },
    {
        id: 85,
        area: "Políticas y Normatividad Turística",
        pregunta: "En México, ¿cuál es el porcentaje de impuesto sobre el hospedaje (ISH) que aplican de forma estatal las entidades federativas para financiar la promoción turística local?",
        opciones: [
            "A) Variable por estado (típicamente entre el 2% y el 5%)",
            "B) Fijo al 16% uniforme nacional",
            "C) Exento por ley federal",
            "D) 10% obligatorio en todos los municipios"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El ISH es un impuesto estatal descentralizado cuya tasa es determinada por el congreso de cada estado de la república."
    },
    {
        id: 86,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué herramienta del marketing digital analiza el tráfico de un sitio web, la procedencia de los usuarios y las tasas de abandono de reserva?",
        opciones: [
            "A) Analítica Web (Google Analytics)",
            "B) Sistema PMS hotelero",
            "C) ERP Contable",
            "D) Metaseguridad bancaria"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La analítica web monitorea el comportamiento de los visitantes digitales para optimizar las campañas de marketing directo."
    },
    {
        id: 87,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué concepto describe la habilidad de una comunidad local para absorber el turismo sin perder sus valores culturales tradicionales ni su cohesión social?",
        opciones: [
            "A) Capacidad de carga sociocultural",
            "B) Resiliencia económica exógena",
            "C) Asimilación pasiva",
            "D) Inflexibilidad turística"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La capacidad de carga sociocultural mide el límite de tolerancia social de la población local frente a la presencia de turistas."
    },
    {
        id: 88,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración de un hotel resort, ¿qué costo operativo se controla rigurosamente mediante el índice 'Cost Per Occupied Room' (CPOR)?",
        opciones: [
            "A) Costo de A&B y suministros consumidos por huésped hospedado al día",
            "B) Pago de hipoteca de la propiedad",
            "C) Gastos de comisión a OTAs",
            "D) Honorarios del consejo de administración"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El CPOR controla los gastos variables (alimentos, bebidas, amabilidades) directos derivados del consumo de cada huésped."
    },
    {
        id: 89,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué organismo público mexicano se encarga de la protección y defensa de los derechos de los consumidores frente a prestadores de servicios turísticos?",
        opciones: [
            "A) PROFECO (Procuraduría Federal del Consumidor)",
            "B) CONDUSEF",
            "C) SECTUR",
            "D) COFEPRIS"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "PROFECO sanciona abusos, incumplimientos de contratos, publicidad engañosa y sobreventas en servicios turísticos."
    },
    {
        id: 90,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué estrategia de distribución turística utiliza buscadores que comparan precios de múltiples agencias en línea en una sola pantalla (ej. Trivago, Kayak)?",
        opciones: [
            "A) Metabuscadores (Metasearch Engines)",
            "B) Wholesalers masivos",
            "C) CRS directos",
            "D) Portales gubernamentales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los metabuscadores agregan inventario de distintas fuentes digitales para mostrar al usuario la opción de precio más conveniente."
    },
    {
        id: 91,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de atractivo turístico según la clasificación oficial comprende manifestaciones como gastronomía, artesanías, música y fiestas tradicionales?",
        opciones: [
            "A) Patrimonio Cultural Inmaterial (Folklore y tradiciones)",
            "B) Patrimonio Natural tangible",
            "C) Infraestructura técnica moderna",
            "D) Eventos deportivos de gala"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El patrimonio inmaterial abarca prácticas, saberes, tradiciones vivas y expresiones transmitidas de generación en generación."
    },
    {
        id: 92,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En un restaurante, ¿cuál es el porcentaje promedio óptimo aceptado para la merma y desperdicio en el control de almacén de insumos perecederos?",
        opciones: [
            "A) Mantenido bajo estrictos estándares por debajo del 3% al 5%",
            "B) Superior al 25% del total",
            "C) 50% de las compras mensuales",
            "D) Cero absoluto irrealizable"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Una gestión eficiente de compras e inventario mantiene las mermas por caducidad o manipulación en márgenes inferiores al 3-5%."
    },
    {
        id: 93,
        area: "Políticas y Normatividad Turística",
        pregunta: "En la aviación mexicana, ¿cuál es la autoridad responsable de normar las licencias de pilotos, la navegación aérea y la seguridad operacional?",
        opciones: [
            "A) AFAC (Agencia Federal de Aviación Civil)",
            "B) SENEAM",
            "C) AICM",
            "D) INFRAER"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La AFAC es el órgano desconcentrado de la SICT encargado de regular y supervisar el transporte aéreo civil en México."
    },
    {
        id: 94,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué técnica de marketing de experiencia busca conectar emocionalmente al turista mediante relatos e historias contadas en las campañas de promoción?",
        opciones: [
            "A) Storytelling turístico",
            "B) Telemarketing masivo",
            "C) Email blast sin segmentación",
            "D) Publicidad comparativa agresiva"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Storytelling construye narrativas envolventes que transmiten la esencia y emociones que vivirá el visitante en el destino."
    },
    {
        id: 95,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué indicador mide la cantidad de agua dulce consumida directa e indirectamente para atender la estancia de un turista en un resort?",
        opciones: [
            "A) Huella hídrica turística",
            "B) Huella ecológica de carbono",
            "C) Índice de contaminación auditiva",
            "D) Capacidad de vertido costero"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La huella hídrica evalúa el volumen total de agua utilizado en habitaciones, lavandería, riegos, albercas y producción de alimentos para el turista."
    },
    {
        id: 96,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la industria de eventos, ¿qué es la 'Rider' técnica de un artista o conferencista?",
        opciones: [
            "A) El documento contractual que especifica las necesidades técnicas de iluminación, sonido, camerino y banquetes requeridas para la presentación",
            "B) El itinerario de vuelo reservado en clase ejecutiva",
            "C) La póliza de seguro de vida corporativo",
            "D) La lista de asistentes confirmados"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El rider técnico enumera las exigencias obligatorias de equipo, audio, escenario y requerimientos personales para ejecutar el espectáculo."
    },
    {
        id: 97,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué norma oficial mexicana regula la información y requisitos de seguridad en la práctica del ecoturismo y turismo de aventura?",
        opciones: [
            "A) NOM-011-TUR-2017",
            "B) NOM-01-TUR-2002",
            "C) NOM-04-TUR-2003",
            "D) NOM-010-TUR-2001"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La NOM-011-TUR establece los criterios de seguridad, guías, equipos y gestión de riesgos en empresas de turismo de aventura."
    },
    {
        id: 98,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué término define al mercado de viajeros que realiza actividades turísticas dentro de las fronteras de su propio país de residencia?",
        opciones: [
            "A) Turismo Interno o Doméstico",
            "B) Turismo Receptivo",
            "C) Turismo Emisor",
            "D) Turismo Internacional Border-Cross"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El turismo interno comprende los desplazamientos de los residentes dentro del propio territorio nacional."
    },
    {
        id: 99,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "En la ordenación sustentable del territorio, ¿qué es la 'Zonificación Ambiental' de una reserva natural accesible al turismo?",
        opciones: [
            "A) La división del espacio en áreas con diferentes niveles de protección, desde zonas núcleo intangibles hasta zonas de uso público intensivo",
            "B) El cercado perimetral con muros de concreto",
            "C) La parcelación privada para venta de lotes residenciales",
            "D) La delimitación exclusiva de estacionamientos para autobuses"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La zonificación técnica establece dónde y en qué grado se permite el acceso turístico para garantizar la conservación de áreas frágiles."
    },
    {
        id: 100,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el área de recepción, ¿qué procedimiento se realiza durante el 'Check-out'?",
        opciones: [
            "A) Verificación de la cuenta, cobro final de consumos, devolución de llaves y cierre de la factura del huésped",
            "B) Asignación inicial de habitación y bloqueo de tarjeta de crédito",
            "C) Inspección matutina del estado de limpieza",
            "D) Cobro de la comisión a la agencia de viajes"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Check-out formaliza la salida del cliente, la liquidación de sus adeudos pendientes y la liberación de la habitación en el sistema."
    },
    {
        id: 101,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué distintivo mexicano reconoce a los destinos o establecimientos que garantizan altos estándares de seguridad e higiene contra riesgos epidemiológicos?",
        opciones: [
            "A) Sello Punto Limpio V3.0",
            "B) Distintivo 'H'",
            "C) Sello Cerca de China",
            "D) Marca México"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Punto Limpio es un sello de calidad otorgado a Mipymes por implementar buenas prácticas de higiene en sus instalaciones."
    },
    {
        id: 102,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué estrategia de marketing promocional otorga puntos o millas acumulables por consumos repetidos en una cadena hotelera o aerolínea?",
        opciones: [
            "A) Programa de Fidelización (Loyalty Program)",
            "B) Venta Cruzada",
            "C) Campaña BTL de Guerrilla",
            "D) Publicidad de respuesta directa"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los programas de lealtad recompensan la preferencia frecuente del cliente para retenerlo frente a la competencia."
    },
    {
        id: 103,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de turismo se realiza en entornos rurales para participar en actividades agropecuarias, cosechas o elaboración artesanal de alimentos?",
        opciones: [
            "A) Agroturismo / Turismo Rural",
            "B) Turismo Urbano de compras",
            "C) Turismo Científico",
            "D) Ecoturismo marino"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El agroturismo permite al visitante experimentar directamente la vida agrícola y tradiciones gastronómicas campesinas."
    },
    {
        id: 104,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En el departamento de costos de A&B, ¿qué es el 'Inventario Físico Periodicidad Mensual'?",
        opciones: [
            "A) El recuento real unidad por unidad de todas las botellas, secos y congelados existentes en los almacenes al cierre de mes",
            "B) La proyección de ventas para el año siguiente",
            "C) El reporte de platillos más vendidos por mesa",
            "D) El pago de facturas a crédito de proveedores"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El inventario físico valida las existencias teóricas del sistema contra lo existente físicamente para determinar el costo real del periodo."
    },
    {
        id: 105,
        area: "Políticas y Normatividad Turística",
        pregunta: "En la organización turística mexicana, ¿cuál es la dependencia del poder ejecutivo federal encargada de formular y coordinar la política turística nacional?",
        opciones: [
            "A) SECTUR (Secretaría de Turismo)",
            "B) SEMARNAT",
            "C) SRE",
            "D) ECONOMÍA"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La SECTUR es el órgano rector del gobierno federal responsable de la planeación, promoción y regulación del sector turístico en México."
    },
    {
        id: 106,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué tipo de canal de distribución turística se caracteriza por la venta directa del prestador al cliente final sin intermediarios (ej. sitio web hotelero)?",
        opciones: [
            "A) Canal Directo (Nivel 0)",
            "B) Canal Corto con Agente de Viajes",
            "C) Canal Largo con Mayorista y Minorista",
            "D) Canal de Venta por GDS masivo"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La venta directa omite comisiones a terceros al conectar al cliente directamente con el motor de reservas o mostrador de la empresa."
    },
    {
        id: 107,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué indicador mide el volumen de residuos sólidos generados por turista al día en un destino turístico?",
        opciones: [
            "A) Generación per cápita de residuos (Kg/turista/día)",
            "B) Tasa de reciclaje industrial",
            "C) Índice de contaminación marina",
            "D) Coeficiente de empaque"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Este indicador mide el impacto en la gestión de limpia pública y la presión sobre rellenos sanitarios en destinos turísticos."
    },
    {
        id: 108,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración de reservaciones, ¿qué es la condición de 'No-Show'?",
        opciones: [
            "A) Cuando un cliente con reserva garantizada no se presenta al hotel en la fecha acordada ni cancela previamente",
            "B) Cuando la habitación está en mantenimiento correctivo",
            "C) Cuando el huésped abandona el hotel antes de su fecha de Check-out",
            "D) Cuando el hotel no tiene habitaciones disponibles"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El No-Show se produce por la no llegada del huésped, lo que suele activar el cobro de la pena convencional de la primera noche."
    },
    {
        id: 109,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué certificación internacional privada avala la gestión de calidad ambiental y sustentabilidad de playas y marinas (Blue Flag)?",
        opciones: [
            "A) Distintivo Blue Flag (Bandera Azul)",
            "B) Certificación ISO 9001",
            "C) Sello EarthCheck Gold",
            "D) Clean Beaches Label"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Blue Flag premia a playas que cumplen rigurosos estándares de calidad de agua, seguridad, gestión e información ambiental."
    },
    {
        id: 110,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué concepto se refiere al uso de tecnologías móviles, inteligencia artificial y big data para ofrecer experiencias personalizadas en destinos turísticos inteligentes (DTI)?",
        opciones: [
            "A) Smart Tourism / Turismo Inteligente",
            "B) Turismo Virtual pasivo",
            "C) Marketing Tradicional BTL",
            "D) Automatización robótica pura"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los Destinos Turísticos Inteligentes (DTI) se fundamentan en gobernanza, innovación, tecnología, accesibilidad y sostenibilidad."
    },
    {
        id: 111,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué tipo de turismo fomenta el desplazamiento para presenciar eventos deportivos de gran escala (ej. Juegos Olímpicos o Mundial de Fútbol)?",
        opciones: [
            "A) Turismo Deportivo de Eventos (Sports Tourism)",
            "B) Turismo de Aventura Extrema",
            "C) Turismo de Salud pasivo",
            "D) Turismo Náutico de Placer"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El turismo deportivo de eventos atrae a miles de aficionados y deportistas, dinamizando la ocupación y el consumo en el destino sede."
    },
    {
        id: 112,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la industria de viajes, ¿qué es un itinerario de viaje?",
        opciones: [
            "A) El documento o cronograma detallado que describe las fechas, horarios, transportes, alojamientos y actividades programadas para un viaje",
            "B) La factura de gastos de representación empresarial",
            "C) La póliza de seguro de accidentes colectivos",
            "D) El mapa geográfico a escala"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El itinerario guía paso a paso la logística y los tiempos de ejecución del viaje para el turista y los guías."
    },
    {
        id: 113,
        area: "Políticas y Normatividad Turística",
        pregunta: "En la aviación comercial mexicana, ¿qué organismo estatal administra las concesiones y la red de aeropuertos de interés público y militar (ej. ASA)?",
        opciones: [
            "A) Aeropuertos y Servicios Auxiliares (ASA)",
            "B) OACI",
            "C) Grupo Aeroportuario del Sureste (ASUR)",
            "D) IATA México"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "ASA es la empresa corporativa estatal que administra, opera y construye redes aeroportuarias en el territorio nacional."
    },
    {
        id: 114,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué tipo de empaque de viaje combina boletos de avión, hotel y renta de auto comercializado por plataformas como Expedia?",
        opciones: [
            "A) Paquete Dinámico (Dynamic Packaging)",
            "B) Chárter tradicional",
            "C) Tarifa Abierta",
            "D) Excursión de un día"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El paquete dinámico permite al cliente empaquetar a su medida distintos componentes del viaje en tiempo real a precios preferenciales."
    },
    {
        id: 115,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué concepto describe al volumen total de ingresos turísticos que genera un país en comparación con los gastos de sus residentes que viajan al extranjero?",
        opciones: [
            "A) Balanza Turística (Balanza de Pagos por Servicios Turísticos)",
            "B) PIB Turístico nominal",
            "C) Superávit presupuestal público",
            "D) Cuenta Satélite de Inversión"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La balanza turística mide el saldo neto entre el ingreso de divisas por turismo receptivo y el egreso por turismo emisor."
    },
    {
        id: 116,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración de recursos humanos en hotelería, ¿qué indicador mide la rotación de personal en un periodo dado?",
        opciones: [
            "A) (Bajas de empleados en el periodo / Promedio total de trabajadores) * 100",
            "B) Total de horas extras pagadas / Salarios base",
            "C) Huéspedes atendidos / Número de meseros",
            "D) Total contrataciones / Total habitaciones"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El índice de rotación mide la fluctuación de personal saliente e ingresante, clave para evaluar la estabilidad laboral operativa."
    },
    {
        id: 117,
        area: "Políticas y Normatividad Turística",
        pregunta: "¿Qué instrumento estadístico macroeconómico desarrollado por la OMT e INEGI mide la contribución real del turismo al Producto Interno Bruto (PIB) de un país?",
        opciones: [
            "A) Cuenta Satélite de Turismo (CST)",
            "B) Censo de Población y Vivienda",
            "C) Índice Nacional de Precios al Consumidor",
            "D) Balanza Comercial Industrial"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La Cuenta Satélite de Turismo sintetiza el valor agregado bruto y el peso económico real del sector en las cuentas nacionales."
    },
    {
        id: 118,
        area: "Mercadotecnia y Comercialización Turística",
        pregunta: "¿Qué tipo de turismo abarca las actividades enoturísticas relacionadas con la visita a viñedos, bodegas y catas de vino?",
        opciones: [
            "A) Enoturismo / Turismo del Vino",
            "B) Oleoturismo",
            "C) Turismo Agroecológico",
            "D) Turismo de Lujo Urbano"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El enoturismo fomenta el conocimiento de la cultura vitivinícola, maridajes y paisajes de regiones productoras de vino."
    },
    {
        id: 119,
        area: "Planificación y Desarrollo Sustentable",
        pregunta: "¿Qué principio guía del turismo sustentable busca que los beneficios económicos se distribuyan equitativamente reduciendo la pobreza en comunidades marginadas?",
        opciones: [
            "A) Turismo Pro-Pobre (Pro-Poor Tourism)",
            "B) Turismo Enclave",
            "C) Desarrollo Neoliberal Directo",
            "D) Crecimiento Desmedido"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El enfoque Pro-Pobre busca generar oportunidades de ingresos y empleo digno para sectores vulnerables a través de la cadena de valor turística."
    },
    {
        id: 120,
        area: "Gestión de Servicios Turísticos",
        pregunta: "En la administración de un hotel resort, ¿qué es el 'Day Pass' (Pase de Día)?",
        opciones: [
            "A) La venta de acceso temporal a las instalaciones del hotel (albercas, restaurantes, playa) para visitantes no hospedados durante el día",
            "B) La tarifa con descuento para estancias prolongadas de más de un mes",
            "C) El boleto de entrada a un parque temático aliado",
            "D) El permiso de trabajo nocturno para el personal"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Day Pass permite rentabilizar las instalaciones del hotel mediante clientes locales o visitantes diarios sin requerir uso de habitación."
    }
];