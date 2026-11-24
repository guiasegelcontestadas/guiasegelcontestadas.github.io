const bancoPreguntas = [
    {
        id: 1,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Cuál es la estrategia de entrada a mercados internacionales que implica un mayor nivel de control y riesgo financiero?",
        opciones: ["A) Exportación indirecta", "B) Franquicia", "C) Inversión Extranjera Directa (IED) de propiedad absoluta", "D) Licenciamiento"],
        respuestaCorrecta: 2,
        explicacion: "La Inversión Extranjera Directa de propiedad absoluta (como las filiales de propiedad total) otorga el máximo control operativo y estratégico a la empresa matriz, pero también conlleva la mayor exposición a riesgos financieros y políticos en el mercado receptor."
    },
    {
        id: 2,
        area: "Mercadotecnia Internacional",
        pregunta: "Una empresa decide estandarizar su mezcla de mercadotecnia (producto, precio, plaza, promoción) a nivel global. ¿Qué supuesto fundamental subyace a esta decisión?",
        opciones: ["A) Las diferencias culturales son insalvables entre países", "B) La convergencia de gustos y la globalización de segmentos de consumidores", "C) Los costos de adaptación superan los beneficios marginales de la diferenciación local", "D) Las barreras arancelarias exigen una sola presentación del producto"],
        respuestaCorrecta: 1,
        explicacion: "La estandarización global se fundamenta en la premisa de que los mercados convergen y existen segmentos de consumidores transnacionales con necesidades, deseos y comportamientos homogéneos."
    },
    {
        id: 3,
        area: "Mercadotecnia Internacional",
        pregunta: "En el análisis del entorno macroambiental para la expansión internacional, ¿qué dimensiona el marco PESTEL?",
        opciones: ["A) Proveedores, Entorno, Socios, Tecnología, Economía y Leyes", "B) Político, Económico, Social, Tecnológico, Ecológico y Legal", "C) Población, Empleo, Sindicatos, Tarifas, Energía y Logística", "D) Producto, Empresa, Segmento, Territorio, Economía y Liderazgo"],
        respuestaCorrecta: 1,
        explicacion: "El modelo PESTEL evalúa los factores macroambientales externos: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales, esenciales para la evaluación de riesgos país."
    },
    {
        id: 4,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Qué técnica de investigación de mercados internacionales permite comparar constructos psicológicos y de consumo equivalentes a través de diferentes culturas?",
        opciones: ["A) Grupos focales tradicionales", "B) Validación de equivalencia métrica y conceptual", "C) Auditoría de inventarios minoristas", "D) Análisis de series de tiempo univariadas"],
        respuestaCorrecta: 1,
        explicacion: "Para realizar investigación transcultural válida, es indispensable asegurar la equivalencia conceptual, lingüística y métrica de los instrumentos de medición para evitar sesgos culturales."
    },
    {
        id: 5,
        area: "Mercadotecnia Internacional",
        pregunta: "Una empresa exportadora de alimentos modifica el etiquetado y los ingredientes de su producto para cumplir con las normativas sanitarias y los hábitos de consumo de Japón. Esta estrategia corresponde a:",
        opciones: ["A) Estandarización de producto", "B) Adaptación de producto", "C) Diversificación concéntrica", "D) Contratación externa"],
        respuestaCorrecta: 1,
        explicacion: "La adaptación de producto implica modificar atributos físicos, funcionales o simbólicos del bien para ajustarse a los requerimientos legales, culturales o climáticos del mercado meta."
    },
    {
        id: 6,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Cómo se define el concepto de 'Etnocentrismo del consumidor' en los negocios internacionales?",
        opciones: ["A) La preferencia por productos importados por su prestigio", "B) La creencia de que comprar productos extranjeros es incorrecto o perjudica la economía nacional", "C) La tendencia a evaluar otras culturas usando los estándares propios de manera objetiva", "D) El análisis demográfico de grupos étnicos minoritarios"],
        respuestaCorrectate: 1,
        explicacion: "El etnocentrismo del consumidor mide la predisposición a rechazar productos extranjeros debido a un sentido de lealtad nacional o la creencia de que la importación daña la industria local."
    },
    {
        id: 7,
        area: "Mercadotecnia Internacional",
        pregunta: "En el contexto de la mezcla de promoción internacional, ¿cuál es la principal ventaja de utilizar la publicidad global estandarizada?",
        opciones: ["A) Adaptación precisa al idioma local", "B) Economías de escala en la producción creativa y refuerzo de una imagen de marca unificada", "C) Cumplimiento automático de regulaciones locales de publicidad", "D) Eliminación total de intermediarios de medios"],
        respuestaCorrecta: 1,
        explicacion: "La publicidad global estandarizada permite reducir costos significativamente mediante economías de escala creativas y asegura que la identidad y el posicionamiento de la marca sean consistentes globalmente."
    },
    {
        id: 8,
        area: "Mercadotecnia Internacional",
        pregunta: "Una empresa multinacional fija precios diferentes para un mismo producto en distintos países, basándose en la disposición a pagar y el poder adquisitivo local. Esta estrategia de precios se denomina:",
        opciones: ["A) Precio de penetración global", "B) Discriminación de precios internacional (o precios basados en el mercado)", "C) Precio de transferencia", "D) Precio único uniforme"],
        respuestaCorrecta: 1,
        explicacion: "La fijación de precios basada en el mercado local considera las condiciones de la competencia, los canales de distribución y el poder adquisitivo específico de cada país, maximizando ingresos según la demanda local."
    },
    {
        id: 9,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Qué caracteriza a un canal de distribución largo en mercados emergentes en comparación con economías desarrolladas?",
        opciones: ["A) Menor número de intermediarios y costos logísticos reducidos", "B) Presencia de múltiples mayoristas y minoristas tradicionales fragmentados", "C) Integración vertical total controlada por el fabricante", "D) Uso exclusivo de comercio electrónico B2C"],
        respuestaCorrecta: 1,
        explicacion: "En muchos mercados emergentes, los canales de distribución son fragmentados y largos, con la presencia de numerosos intermediarios tradicionales (mayoristas, distribuidores y pequeños tenderos)."
    },
    {
        id: 10,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Cuál es el propósito principal del análisis de la matriz de Ansoff en la planificación del crecimiento internacional?",
        opciones: ["A) Evaluar la atracción de la industria frente a la fuerza competitiva", "B) Identificar oportunidades de crecimiento mediante combinaciones de productos nuevos/existentes y mercados nuevos/existentes", "C) Determinar el ciclo de vida del producto en mercados extranjeros", "D) Calcular los costos logísticos totales de exportación"],
        respuestaCorrecta: 1,
        explicacion: "La matriz de Ansoff es una herramienta estratégica que ayuda a las empresas a evaluar alternativas de crecimiento a través de penetración de mercado, desarrollo de mercado, desarrollo de productos y diversificación."
    },
    {
        id: 11,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "En los Incoterms 2020, ¿qué término establece que el vendedor entrega la mercancía al transportista designado por el comprador en un lugar nombrado, siendo el riesgo transferido en ese punto?",
        opciones: ["A) FOB (Free On Board)", "B) FCA (Free Carrier)", "C) CIF (Cost, Insurance and Freight)", "D) EXW (Ex Works)"],
        respuestaCorrecta: 1,
        explicacion: "FCA (Franco Porteador) indica que el vendedor cumple con su obligación de entrega cuando pone la mercancía despachada para la exportación a disposición del transportista principal nombrado por el comprador."
    },
    {
        id: 12,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Cuál es la diferencia fundamental en términos de transferencia de riesgo y costo entre los Incoterms FOB y CIF?",
        opciones: ["A) En FOB el vendedor paga el flete internacional; en CIF lo paga el comprador", "B) En FOB el riesgo se transfiere al cruzar la borda del buque; en CIF el vendedor contrata flete y seguro hasta el puerto de destino, aunque el riesgo se transfiere al cargar en origen", "C) En CIF el vendedor asume el riesgo durante todo el tránsito marítimo", "D) En FOB la aduana de importación la paga el vendedor"],
        respuestaCorrecta: 1,
        explicacion: "Bajo CIF, el vendedor debe contratar y pagar el costo del flete y el seguro hasta el puerto de destino convenido, pero el riesgo de pérdida o daño se transfiere al comprador una vez que la mercancía es abordo del buque en el puerto de embarque."
    },
    {
        id: 13,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué documento de transporte marítimo sirve como recibo de la carga, contrato de transporte y título de propiedad de la mercancía?",
        opciones: ["A) Factura Comercial", "B) Certificado de Origen", "C) Conocimiento de Embarque (Bill of Lading - B/L)", "D) Carta Porte Aéreo (AWB)"],
        respuestaCorrecta: 2,
        explicacion: "El Conocimiento de Embarque (Bill of Lading) cumple tres funciones críticas en el comercio internacional: acuse de recibo de la mercancía, evidencia del contrato de transporte y título negociable de propiedad."
    },
    {
        id: 14,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "En la gestión de inventarios, ¿qué representa el concepto de 'Punto de Reorden' (Reorder Point) en cadenas de suministro globales con tiempos de entrega (lead times) largos y variables?",
        opciones: ["A) El costo máximo de almacenamiento en puerto", "B) El nivel de inventario que activa la emisión de una nueva orden de compra para evitar desabastecimiento durante el tiempo de tránsito", "C) El stock de seguridad absoluto obligatorio por regulaciones aduaneras", "D) El volumen óptimo de pedido (EOQ)"],
        respuestaCorrecta: 1,
        explicacion: "El punto de reorden es el umbral de inventario que indica el momento exacto en que se debe realizar un nuevo pedido, considerando la demanda durante el tiempo de entrega (lead time) y el stock de seguridad."
    },
    {
        id: 15,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué modo de transporte internacional se caracteriza por ofrecer la mayor velocidad, alta seguridad para productos de alto valor o perecederos, pero con costos por kilogramo significativamente elevados?",
        opciones: ["A) Marítimo", "B) Ferroviario", "C) Aéreo", "D) Multimodal carretero"],
        respuestaCorrecta: 2,
        explicacion: "El transporte aéreo es idóneo para mercancías de alta prioridad, perecederos o de elevado valor intrínseco, donde el costo logístico elevado se compensa con la rapidez y menor necesidad de inventario en tránsito."
    },
    {
        id: 16,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Cuál es el objetivo principal de la implementación de un sistema de gestión logística basado en 'Just in Time' (JIT) en una cadena de suministro global?",
        opciones: ["A) Maximizar los niveles de inventario de seguridad en almacenes extranjeros", "B) Minimizar los inventarios y eliminar desperdicios mediante entregas sincronizadas exactamente cuando se necesitan", "C) Reducir los costos de flete mediante el uso exclusivo de transporte marítimo a granel", "D) Transferir todos los riesgos de transporte al comprador"],
        respuestaCorrectate: 1,
        explicacion: "JIT busca eliminar el desperdicio asociado con el exceso de inventario, operando con suministros entregados justo a tiempo para la producción o consumo."
    },
    {
        id: 17,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "En el contexto de la logística internacional, ¿qué es un operador logístico de Tercera Parte (3PL)?",
        opciones: ["A) El cliente final que recibe la mercancía", "B) Una empresa externa contratada para gestionar total o parcialmente las operaciones de almacenamiento, transporte y distribución", "C) La autoridad aduanera que revisa la carga", "D) La naviera propietaria del buque portacontenedores"],
        respuestaCorrecta: 1,
        explicacion: "Un operador 3PL (Third-Party Logistics) provee servicios externalizados de gestión logística, integrando almacenamiento, transporte, gestión de inventarios y servicios de valor agregado."
    },
    {
        id: 18,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué mide el indicador de rendimiento logístico conocido como 'OTIF' (On-Time In-Full)?",
        opciones: ["A) El costo total de transporte por kilómetro recorrido", "B) El porcentaje de pedidos entregados a tiempo y con la cantidad y calidad completas solicitadas", "C) El tiempo promedio de despacho aduanero en fronteras", "D) La rotación anual de inventarios en almacén fiscal"],
        respuestaCorrecta: 1,
        explicacion: "OTIF evalúa la fiabilidad del servicio al cliente midiendo cuántas órdenes se entregan puntualmente (On-Time) y completas sin faltantes (In-Full)."
    },
    {
        id: 19,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "Al diseñar una red de distribución global, ¿qué conflicto surge típicamente entre los costos de inventario y los costos de transporte?",
        opciones: ["A) A mayor uso de transporte aéreo, mayores costos de inventario por obsolescencia", "B) Centralizar inventarios reduce costos de almacenamiento pero aumenta los costos de transporte y los tiempos de entrega al cliente", "C) Descentralizar inventarios reduce drásticamente los costos totales de la cadena", "D) Los aranceles aduaneros eliminan la relación entre transporte e inventario"],
        respuestaCorrecta: 1,
        explicacion: "La centralización de inventarios genera economías de escala y menor stock de seguridad (menor costo de inventario), pero incrementa los costos de transporte de larga distancia y los tiempos de respuesta al cliente final."
    },
    {
        id: 20,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué ventaja principal ofrece el transporte multimodal frente al unimodal en el comercio exterior?",
        opciones: ["A) Uso de un solo contrato de transporte bajo la responsabilidad de un OTM (Operador de Transporte Multimodal) sin ruptura de la unidad de carga", "B) Reducción inmediata de aranceles aduaneros", "C) Obligatoriedad de utilizar exclusividad portuaria", "D) Exención de inspecciones fitosanitarias"],
        respuestaCorrecta: 0,
        explicacion: "El transporte multimodal utiliza diversos modos bajo un único contrato y documento (FBL), facilitando la transferencia fluida de mercancías sin manipular la carga individual (ej. contenedores)."
    },
    {
        id: 21,
        area: "Finanzas Internacionales",
        pregunta: "¿Cómo se define el riesgo cambiario (o de tipo de cambio) transaccional?",
        opciones: ["A) La variación en el valor de los activos y pasivos consolidados de una filial extranjera al convertir estados financieros", "B) El impacto de las fluctuaciones cambiarias en los flujos de efectivo futuros de compromisos ya pactados en moneda extranjera", "C) La pérdida de competitividad a largo plazo debido a tendencias macroeconómicas de la moneda", "D) El riesgo de insolvencia bancaria en transacciones SWIFT"],
        respuestaCorrecta: 1,
        explicacion: "El riesgo transaccional surge cuando una empresa tiene cuentas por cobrar o por pagar denominadas en moneda extranjera cuyo valor en moneda nacional puede cambiar antes de efectuarse el pago."
    },
    {
        id: 22,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué instrumento financiero derivado otorga a su tenedor el derecho, más no la obligación, de comprar o vender una divisa a un precio de ejercicio específico en una fecha futura?",
        opciones: ["A) Un contrato de futuros (Futures)", "B) Un contrato a plazo (Forward)", "C) Una opción cambiaria (Currency Option)", "D) Un swap de tasas de interés"],
        respuestaCorrecta: 2,
        explicacion: "Una opción cambiaria proporciona asimetría de riesgo: el comprador adquiere el derecho (pagando una prima) de ejecutar o no la transacción según le convenga, protegiéndose contra movimientos adversos mientras capta beneficios favorables."
    },
    {
        id: 23,
        area: "Finanzas Internacionales",
        pregunta: "De acuerdo con la teoría de la Paridad del Poder de Compra (PPC), ¿qué determina el tipo de cambio a largo plazo entre dos países?",
        opciones: ["A) Las diferencias en las tasas de interés nominales de sus bancos centrales", "B) Las diferencias en sus tasas de inflación relativas", "C) Los flujos de Inversión Extranjera Directa", "D) Las reservas internacionales netas"],
        respuestaCorrecta: 1,
        explicacion: "La PPC postula que el tipo de cambio entre dos monedas se ajusta para reflejar los diferenciales de inflación entre ambos países, de modo que un bien cueste lo mismo en cualquier lugar cuando se expresa en una moneda común."
    },
    {
        id: 24,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué establece el efecto Fisher Internacional respecto a la relación entre tasas de interés nominales e inflación esperada?",
        opciones: ["A) Las tasas de interés nominales reflejan la tasa real esperada más la inflación esperada", "B) Las tasas de interés son independientes de la política monetaria", "C) La inflación es siempre un fenómeno monetario a corto plazo", "D) Los tipos de cambio forward son insesgados"],
        respuestaCorrecta: 0,
        explicacion: "El efecto Fisher establece que la tasa de interés nominal se compone de la tasa de interés real y la prima por inflación esperada, implicando que países con alta inflación tendrán tasas de interés nominales más elevadas."
    },
    {
        id: 25,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué es el 'Precio de Transferencia' en las operaciones de corporaciones multinacionales?",
        opciones: ["A) La comisión que cobra un banco por transferencias SWIFT", "B) El precio fijado para la transferencia de bienes, servicios o intangibles entre empresas asociadas o filiales de un mismo grupo multinacional", "C) El costo de cambiar divisas en el mercado spot", "D) La tarifa arancelaria aplicada en aduanas"],
        respuestaCorrecta: 1,
        explicacion: "Los precios de transferencia son los precios a los que una empresa matriz transfiere bienes o servicios a sus filiales en el extranjero; su regulación fiscal internacional exige que cumplan con el principio de plena competencia (arm's length)."
    },
    {
        id: 26,
        area: "Finanzas Internacionales",
        pregunta: "¿Cuál es el propósito principal de un contrato 'Swap' de tasas de interés y divisas (Cross-Currency Swap)?",
        opciones: ["A) Especular con la volatilidad diaria del mercado cambiario", "B) Intercambiar flujos de efectivo en diferentes monedas y bases de tasas de interés para mitigar riesgos financieros y aprovechar ventajas comparativas de endeudamiento", "C) Cubrir el riesgo de inventario físico en aduana", "D) Financiar el capital de trabajo operativo local"],
        respuestaCorrecta: 1,
        explicacion: "Un swap cruzado de monedas permite a dos partes intercambiar principal y pagos de intereses en diferentes monedas, facilitando el acceso a financiamiento en mercados donde tienen ventajas comparativas y cubriendo el riesgo cambiario a largo plazo."
    },
    {
        id: 27,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué mide la balanza de pagos en una economía nacional?",
        opciones: ["A) Únicamente las exportaciones e importaciones de bienes manufacturados", "B) El registro sistemático de todas las transacciones económicas entre los residentes de un país y el resto del mundo durante un periodo determinado", "C) El presupuesto fiscal gubernamental y la deuda pública externa", "D) La valorización bursátil de las empresas multinacionales cotizadas"],
        respuestaCorrecta: 1,
        explicacion: "La balanza de pagos contabiliza de manera contable todas las transacciones económicas internacionales (cuenta corriente, cuenta de capital y cuenta financiera) de un país."
    },
    {
        id: 28,
        area: "Finanzas Internacionales",
        pregunta: "Si un país registra un déficit persistente y cuantioso en su cuenta corriente de la balanza de pagos, ¿qué presión suele generar sobre su moneda local en un régimen de tipo de cambio flexible?",
        opciones: ["A) Presión de apreciación por exceso de oferta de divisas", "B) Presión de depreciación por mayor demanda de divisas extranjeras para pagar importaciones y servicios", "C) Ningún efecto, ya que la cuenta financiera no se relaciona", "D) Estabilidad absoluta controlada por el banco central"],
        respuestaCorrectate: 1,
        explicacion: "Un déficit en cuenta corriente indica que el país gasta en el exterior más de lo que ingresa por sus ventas internacionales, lo que genera una salida neta de divisas y presiona a la baja (depreciación) el valor de su moneda."
    },
    {
        id: 29,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué diferencia existe entre un mercado cambiario Spot y un mercado Forward?",
        opciones: ["A) El mercado Spot es para entrega inmediata (generalmente 2 días hábiles); el Forward es para entrega de divisas en una fecha futura pactada hoy", "B) El mercado Spot opera exclusivamente con criptomonedas; el Forward con oro", "C) El mercado Spot es regulado por la bolsa de valores; el Forward es informal", "D) No existe diferencia en los plazos de liquidación"],
        respuestaCorrecta: 0,
        explicacion: "El mercado Spot (contado) liquida las transacciones inmediatamente, mientras que el mercado Forward (a plazo) fija el tipo de cambio hoy para una transacción que se ejecutará en una fecha posterior establecida."
    },
    {
        id: 30,
        area: "Finanzas Internacionales",
        pregunta: "En el presupuesto de capital multinacional, ¿por qué el flujo de efectivo repatriado a la matriz puede diferir del flujo de efectivo generado por la filial en el extranjero?",
        opciones: ["A) Por los costos de transporte marítimo", "B) Por restricciones cambiarias, controles de capital, impuestos a la repatriación de dividendos y tipos de cambio", "C) Por la depreciación lineal de la maquinaria de oficina", "D) Por el cumplimiento de la norma ISO 9001"],
        respuestaCorrecta: 1,
        explicacion: "Los flujos de caja disponibles para la matriz dependen de las regulaciones del país receptor, incluyendo impuestos de retención (withholding taxes), controles cambiarios gubernamentales y costos de conversión."
    },
    {
        id: 31,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Cuál es el propósito fundamental de la Organización Mundial del Comercio (OMC)?",
        opciones: ["A) Otorgar préstamos de rescate financiero a países con crisis de balanza de pagos", "B) Administrar los acuerdos comerciales multilaterales, servir como foro para negociaciones comerciales y resolver disputas comerciales", "C) Fijar los tipos de cambio fijos globales", "D) Financiar proyectos de infraestructura en países en desarrollo"],
        respuestaCorrecta: 1,
        explicacion: "La OMC regula el comercio internacional a nivel global, proporcionando un marco institucional para la reducción de aranceles, la eliminación de barreras no arancelarias y la resolución de controversias entre Estados miembros."
    },
    {
        id: 32,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué principio fundamental de la OMC establece que un miembro no debe discriminar entre sus socios comerciales (otorgando a todos la misma ventaja concedida a uno)?",
        opciones: ["A) Trato Nacional", "B) Nación Más Favorecida (NMF)", "C) Transparencia arancelaria", "D) Competencia desleal"],
        respuestaCorrecta: 1,
        explicacion: "El principio de Nación Más Favorecida (NMF), consagrado en el Artículo I del GATT, estipula que cualquier trato arancelario o comercial favorable otorgado a un país debe extenderse de manera inmediata e incondicional a todos los demás miembros de la OMC."
    },
    {
        id: 33,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "En el contexto de la legislación antidumping, ¿cómo se define técnicamente el dumping?",
        opciones: ["A) La exportación de un producto a un precio inferior a su valor normal en el mercado interno del país exportador, causando daño a la industria nacional", "B) El contrabando masivo de mercancías sin pagar aranceles aduaneros", "C) La falsificación de marcas registradas y patentes internacionales", "D) El subsidio gubernamental directo a la agricultura de exportación"],
        respuestaCorrecta: 0,
        explicacion: "El dumping ocurre cuando una empresa vende un producto en el mercado de exportación a un precio menor que el cobrado en su propio mercado nacional (valor normal), generando un daño material a la industria del país importador."
    },
    {
        id: 34,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué diferencia existe entre un arancel *ad valorem* y un arancel específico?",
        opciones: ["A) El *ad valorem* se calcula como un porcentaje del valor de la mercancía; el específico se cobra como una cantidad fija por unidad de medida", "B) El *ad valorem* se aplica solo a servicios; el específico a bienes agrícolas", "C) El arancel específico es ilegal ante la OMC", "D) No hay diferencia práctica en la recaudación fiscal aduanera"],
        respuestaCorrecta: 0,
        explicacion: "El arancel ad valorem grava un porcentaje sobre el valor en aduana del producto (ej. 10% del valor CIF), mientras que el arancel específico impone una cuota fija por unidad física (ej. $5 USD por tonelada)."
    },
    {
        id: 35,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué organismo internacional, creado en los acuerdos de Bretton Woods, tiene como función principal velar por la estabilidad del sistema monetario internacional y otorgar asistencia financiera temporal a países con desequilibrios de balanza de pagos?",
        opciones: ["A) Banco Mundial (BM)", "B) Fondo Monetario Internacional (FMI)", "C) Organización Mundial de Aduanas (OMA)", "D) Cámara de Comercio Internacional (CCI)"],
        respuestaCorrecta: 1,
        explicacion: "El FMI supervisa el sistema financiero global y otorga préstamos de rescate a los países miembros que enfrentan crisis graves de balanza de pagos, condicionados a la implementación de ajustes macroeconómicos."
    },
    {
        id: 36,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "En una compraventa internacional, ¿qué función cumple la Convención de Viena de 1980 sobre los Contratos de Compraventa Internacional de Mercaderías (CISG)?",
        opciones: ["A) Establecer los aranceles aduaneros obligatorios", "B) Proveer un marco legal uniforme y neutral que rige la formación del contrato y los derechos/obligaciones de compradores y vendedores", "C) Regular exclusivamente el transporte marítimo de contenedores", "D) Definir los términos Incoterms de la CCI"],
        respuestaCorrecta: 1,
        explicacion: "La CISG es un tratado internacional que unifica las normas sustantivas de la compraventa internacional de mercancías, evitando conflictos de leyes entre jurisdicciones nacionales distintas."
    },
    {
        id: 37,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué es una barrera no arancelaria de tipo cuantitativo en el comercio internacional?",
        opciones: ["A) Un impuesto del 20% a las importaciones de calzado", "B) Un cupo o cuota de importación que limita físicamente el volumen o valor máximo de mercancías que pueden ingresar al país", "C) Un certificado de origen obligatorio", "D) Un subsidio a la exportación industrial"],
        respuestaCorrectate: 1,
        explicacion: "Las cuotas o cupos de importación son restricciones cuantitativas impuestas por los gobiernos para limitar la cantidad de un producto específico que puede importarse durante un periodo determinado."
    },
    {
        id: 38,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué instrumento legal protege a nivel internacional la propiedad intelectual, abarcando patentes, marcas y diseños industriales entre los países firmantes del Convenio de París?",
        opciones: ["A) La Organización Mundial de la Propiedad Intelectual (OMPI)", "B) El Protocolo de Kyoto", "C) La Corte Penal Internacional", "D) El Acuerdo TRIPs (ADPIC) administrado por la OMC"],
        respuestaCorrectate: 3,
        explicacion: "El Acuerdo sobre los Aspectos de los Derechos de Propiedad Intelectual relacionados con el Comercio (ADPIC / TRIPs) de la OMC establece estándares mínimos de protección y observancia de la propiedad intelectual a nivel multilateral."
    },
    {
        id: 39,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué figura jurídica en el comercio exterior permite la importación temporal de mercancías para ser procesadas, reparadas o transformadas y posteriormente reexportadas sin el pago de aranceles definitivos?",
        opciones: ["A) Contrabando técnico", "B) Régimen de maquila o perfeccionamiento activo", "C) Consignación aduanera de libre tránsito", "D) Depósito fiscal de consumo nacional"],
        respuestaCorrecta: 1,
        explicacion: "El perfeccionamiento activo (o régimen de maquila/zona franca) permite introducir insumos sin pagar aranceles siempre que el producto resultante sea exportado tras su transformación."
    },
    {
        id: 40,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "En el marco de la integración económica, ¿cuál es la diferencia clave entre una Unión Aduanera y un Mercado Común?",
        opciones: ["A) La unión aduanera elimina aranceles internos y establece un arancel externo común; el mercado común añade además la libre movilidad de factores de producción (trabajo y capital)", "B) El mercado común no requiere arancel externo común", "C) La unión aduanera permite monedas distintas y el mercado común exige moneda única", "D) No hay diferencias conceptuales"],
        respuestaCorrecta: 0,
        explicacion: "Las etapas de integración económica avanzan desde zona de libre comercio hasta unión aduanera (arancel externo común), mercado común (libre tránsito de bienes, servicios, capital y mano de obra), unión económica y integración total."
    },
    {
        id: 41,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué describe el modelo de las 'Ventajas Comparativas' de David Ricardo en el comercio internacional?",
        opciones: ["A) Los países deben especializarse en la producción de bienes en los que tengan un costo de oportunidad menor, beneficiándose mutuamente del comercio", "B) El comercio internacional se basa en la dotación absoluta de factores de producción como la tierra y el clima", "C) Las naciones desarrolladas explotan a las periferias mediante términos de intercambio desfavorables", "D) La ventaja competitiva surge exclusivamente de la innovación tecnológica corporativa"],
        respuestaCorrecta: 0,
        explicacion: "La teoría de David Ricardo demuestra que incluso si un país es menos eficiente en la producción de todos los bienes en términos absolutos, el comercio beneficia a ambas naciones si cada una se especializa donde su costo de oportunidad es más bajo."
    },
    {
        id: 42,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "Según el modelo de Heckscher-Ohlin, ¿qué determina la estructura del comercio internacional y la ventaja comparativa de un país?",
        opciones: ["A) Las políticas arancelarias proteccionistas de los gobiernos", "B) La abundancia relativa de los factores de producción (trabajo, capital, tierra, recursos naturales)", "C) Las economías de escala a nivel de empresa multinacional", "D) La paridad del poder de compra cambiario"],
        respuestaCorrectate: 1,
        explicacion: "El modelo Heckscher-Ohlin postula que un país exportará aquellos bienes que utilicen intensivamente su factor de producción más abundante e importará los bienes que requieran el factor escaso."
    },
    {
        id: 43,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué fenómeno geopolítico y económico global se asocia con el concepto de 'Nearshoring' en las cadenas de suministro?",
        opciones: ["A) La relocalización de plantas productivas y proveedores a países geográficamente cercanos y culturalmente afines para reducir riesgos logísticos y vulnerabilidad geopolítica", "B) La tercerización total de procesos de manufactura en países asiáticos distantes", "C) La automatización robótica de almacenes locales", "D) El cierre de fronteras comerciales y el proteccionismo absoluto"],
        respuestaCorrecta: 0,
        explicacion: "El Nearshoring busca acercar la producción a los mercados de consumo final (como mudar manufactura de Asia a México para abastecer a EE.UU.), mitigando cuellos de botella logísticos y tensiones geopolíticas."
    },
    {
        id: 44,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué mide el Índice de Desarrollo Humano (IDH) publicado por el Programa de las Naciones Unidas para el Desarrollo (PNUD)?",
        opciones: ["A) Únicamente el Producto Interno Bruto per cápita ajustado por inflación", "B) El bienestar de una nación evaluando tres dimensiones básicas: salud (esperanza de vida), educación (años de escolaridad) y nivel de vida digno (PIB per cápita)", "C) La balanza comercial y las reservas internacionales netas", "D) La competitividad fiscal y la facilidad para hacer negocios"],
        respuestaCorrectate: 1,
        explicacion: "El IDH es un indicador sintético que trasciende el enfoque puramente económico del PIB, incorporando indicadores de salud y educación para medir el desarrollo integral de la población."
    },
    {
        id: 45,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué implica la teoría del 'Diamante de Porter' respecto a la ventaja competitiva de las naciones?",
        opciones: ["A) Que la competitividad nacional depende únicamente de subsidios gubernamentales a la exportación", "B) Que la ventaja competitiva de una industria nacional se explica por la interacción sistémica de cuatro atributos: condiciones de los factores, condiciones de la demanda, industrias relacionadas y de apoyo, y estrategia/estructura/rivalidad de la empresa", "C) Que el tipo de cambio sobrevaluado beneficia la competitividad industrial", "D) Que el tamaño geográfico del país determina su éxito comercial"],
        respuestaCorrecta: 1,
        explicacion: "El Diamante de Porter analiza por qué ciertas naciones son cuna de industrias globalmente competitivas basándose en la sinergia de factores internos, demanda sofisticada, sectores de apoyo y rivalidad local."
    },
    {
        id: 46,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Cuál es el impacto económico esperado de la imposición de un arancel a las importaciones sobre el bienestar social en el país importador?",
        opciones: ["A) Aumenta el bienestar general gracias a la recaudación fiscal", "B) Genera una pérdida neta de peso muerto (deadweight loss) debido a la ineficiencia en la asignación de recursos y la reducción del consumo", "C) Beneficia por igual a consumidores y productores nacionales", "D) Elimina por completo la competencia extranjera sin efectos negativos"],
        respuestaCorrecta: 1,
        explicacion: "Los aranceles protegen a los productores nacionales, pero imponen costos elevados a los consumidores mediante precios más altos, generando una pérdida neta para la economía en su conjunto (pérdida de peso muerto)."
    },
    47, // (Nota: se formulará como pregunta completa)
    {
        id: 47,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué representa el bloque económico BRICS en el escenario geopolítico contemporáneo?",
        opciones: ["A) Un tratado de libre comercio exclusivo de América del Norte", "B) Un grupo de economías emergentes (Brasil, Rusia, India, China, Sudáfrica y nuevos socios) que buscan reformar la arquitectura financiera global y aumentar su peso geopolítico", "C) Una unión monetaria con una moneda única anclada al oro", "D) Una agencia de la ONU para el desarrollo agrícola"],
        respuestaCorrecta: 1,
        explicacion: "Los BRICS representan un bloque de potencias emergentes que promueven la multipolaridad y cuestionan el dominio occidental en instituciones financieras como el FMI y el Banco Mundial."
    },
    {
        id: 48,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Cómo se define el proteccionismo económico en la política comercial internacional?",
        opciones: ["A) La política de apertura total de fronteras sin aranceles", "B) El conjunto de medidas gubernamentales destinadas a restringir las importaciones para proteger a la industria y empleo nacional frente a la competencia extranjera", "C) La integración profunda de mercados mediante la libre circulación de capitales", "D) La privatización de empresas estatales de servicios públicos"],
        respuestaCorrecta: 1,
        explicacion: "El proteccionismo utiliza herramientas como aranceles, cuotas, subsidios y barreras técnicas para blindar la economía doméstica de la competencia externa."
    },
    {
        id: 49,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué fenómeno económico global describe la fragmentación de la producción, donde distintas fases de manufactura de un bien se realizan en diversos países?",
        opciones: ["A) Autarquía económica", "B) Cadenas Globales de Valor (CGV)", "C) Nacionalismo de recursos", "D) Balanza comercial cerrada"],
        respuestaCorrectate: 1,
        explicacion: "Las Cadenas Globales de Valor (CGV) reflejan la dispersión geográfica de las actividades de diseño, producción, ensamble y comercialización a lo largo de múltiples fronteras nacionales."
    },
    {
        id: 50,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Cuál es el objetivo fundamental de los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030 de la ONU en el ámbito corporativo internacional?",
        opciones: ["A) Maximizar el beneficio financiero a corto plazo de los accionistas sin restricciones", "B) Guiar a los gobiernos y empresas hacia prácticas económicas, sociales y ambientales sostenibles para erradicar la pobreza y proteger el planeta", "C) Obligar a las empresas a tributar en paraísos fiscales", "D) Estandarizar los tipos de cambio de los países en desarrollo"],
        respuestaCorrecta: 1,
        explicacion: "Los Ods establecen metas globales de sostenibilidad que las empresas integran en sus estrategias corporativas a través de criterios ESG (Ambientales, Sociales y de Gobernanza)."
    },
    {
        id: 51,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "Según el modelo de dimensiones culturales de Geert Hofstede, ¿qué mide la dimensión de 'Distancia al Poder' (Power Distance)?",
        opciones: ["A) La riqueza material promedio de los altos directivos", "B) El grado en que los miembros menos poderosos de las instituciones y organizaciones esperan y aceptan que el poder se distribuya de forma desigual", "C) La distancia geográfica entre la sede corporativa y sus filiales", "D) La velocidad con la que se toman decisiones en el consejo de administración"],
        respuestaCorrectate: 1,
        explicacion: "La distancia al poder evalúa cómo una sociedad acepta la jerarquía; en culturas de alta distancia al poder se respeta la autoridad formal, mientras que en las de baja distancia se fomenta la participación y el igualitarismo."
    },
    {
        id: 52,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En una negociación comercial internacional, ¿qué caracteriza a las culturas de 'Alto Contexto' según Edward T. Hall?",
        opciones: ["A) La comunicación es explícita, directa y basada enteramente en palabras escritas", "B) La comunicación depende fuertemente del contexto no verbal, la relación personal, el estatus y el lenguaje implícito", "C) Los contratos legales detallados son más importantes que la confianza personal", "D) Se prioriza la velocidad sobre la construcción de relaciones a largo plazo"],
        respuestaCorrecta: 1,
        explicacion: "En las culturas de alto contexto (ej. Japón, China, países árabes), gran parte de la información está contenida en el entorno físico y en las relaciones interpersonales, por lo que el contexto implícito es crucial."
    },
    {
        id: 53,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Qué diferencia existe entre un estilo de negociación distributivo y uno integrativo en un entorno internacional?",
        opciones: ["A) El distributivo busca expandir el pastel para beneficio mutuo; el integrativo es de suma cero", "B) El distributivo es de suma cero (ganar-perder); el integrativo busca crear valor y soluciones de beneficio mutuo (ganar-ganar)", "C) El distributivo se usa solo en contratos de servicios; el integrativo en manufactura", "D) No hay diferencias metodológicas en la negociación transcultural"],
        respuestaCorrecta: 1,
        explicacion: "La negociación distributiva se centra en repartir recursos fijos (competitiva), mientras que la integrativa busca intereses subyacentes para ampliar los beneficios para ambas partes (colaborativa)."
    },
    {
        id: 54,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En la gestión de expatriados, ¿qué causa principal origina el fracaso de una asignación internacional (retorno prematuro o bajo rendimiento)?",
        opciones: ["A) La falta de capacidad técnica del empleado en su área", "B) La incapacidad de adaptación del cónyuge y la familia al entorno cultural del país receptor", "C) Los bajos incentivos salariales en moneda extranjera", "D) La deficiencia en el software contable de la filial"],
        respuestaCorrecta: 1,
        explicacion: "Estudios en gestión internacional demuestran que el choque cultural y la dificultad de adaptación de la familia del expatriado son los factores determinantes más frecuentes en el fracaso de asignaciones internacionales."
    },
    {
        id: 55,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "Según el marco cultural de Hofstede, ¿cómo se diferencia una cultura de 'Individualismo' frente a una de 'Colectivismo'?",
        opciones: ["A) El individualismo prioriza los objetivos y la autonomía personal; el colectivismo enfatiza la lealtad al grupo y la cohesión social", "B) El colectivismo rechaza el uso de tecnologías de información", "C) El individualismo prohíbe el trabajo en equipo corporativo", "D) No existe correlación con el entorno empresarial"],
        respuestaCorrecta: 0,
        explicacion: "Las sociedades individualistas valoran la iniciativa personal y el mérito individual, mientras que las colectivistas basan la identidad en el grupo de pertenencia (familia, empresa, comunidad), primando la armonía grupal."
    },
    {
        id: 56,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Qué es el 'Choque Cultural' (Culture Shock) y cuáles son sus fases típicas?",
        opciones: ["A) Una enfermedad tropical contagiosa en ejecutivos viajeros", "B) El estrés psicológico y desorientación al enfrentar normas culturales desconocidas; sus fases suelen incluir: luna de miel, frustración/adaptación inicial, ajuste y recuperación", "C) La resistencia de los sindicatos locales a la automatización", "D) La devaluación repentina de la moneda local frente al dólar"],
        respuestaCorrectate: 1,
        explicacion: "El choque cultural es un proceso psicológico natural que experimentan los expatriados, transitando desde el entusiasmo inicial (luna de miel) hasta la crisis de adaptación y posterior asimilación."
    },
    {
        id: 57,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En una negociación con contrapartes de culturas con alta 'Evitación de la Incertidumbre' (según Hofstede), ¿qué aspecto formal se debe cuidar rigurosamente?",
        opciones: ["A) Presentar propuestas flexibles y ambiguas para fomentar la creatividad", "B) Ofrecer contratos formales detallados, procedimientos claros y minimizar la ambigüedad", "C) Omitir planes de contingencia para acelerar la firma", "D) Basar la negociación en la improvisación verbal sin documentos"],
        respuestaCorrectate: 1,
        explicacion: "Las culturas con alta evitación de la incertidumbre sienten ansiedad ante lo desconocido, por lo que requieren reglas claras, contratos estructurados y garantías formales para sentirse seguras."
    },
    {
        id: 58,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Qué significa el concepto de 'Etnocentrismo gerencial' en la administración de empresas multinacionales?",
        opciones: ["A) La creencia de que las prácticas de gestión de la empresa matriz y el país de origen son superiores y deben aplicarse en todas las filiales extranjeras", "B) La contratación exclusiva de directivos locales en cada país", "C) La adopción de la cultura del país receptor sin restricciones", "D) La integración total de equipos multiculturales en la alta dirección"],
        respuestaCorrecta: 0,
        explicacion: "El enfoque etnocéntrico (dentro del marco EPRG de Perlmutter) asume que el enfoque nacional de la matriz es el más efectivo, imponiendo políticas centralizadas en el extranjero."
    },
    {
        id: 59,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Cuál es la característica principal de una estructura organizacional de tipo 'Transnacional' según Christopher Bartlett y Sumantra Ghoshal?",
        opciones: ["A) Centralización estricta de todas las decisiones en la matriz", "B) Alta dispersión de activos y capacidades, con una red interdependiente que busca simultáneamente eficiencia global, flexibilidad local y aprendizaje mundial", "C) Operación aislada de cada subsidiaria como entidad independiente", "D) Ausencia total de directrices corporativas globales"],
        respuestaCorrecta: 1,
        explicacion: "La organización transnacional equilibra la eficiencia global, la capacidad de respuesta local y la transferencia de innovación a través de una red integrada y colaborativa de filiales."
    },
    {
        id: 60,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En el contexto de la inteligencia cultural (CQ), ¿qué habilidad comprende la capacidad de un directivo para ajustar su comportamiento verbal y no verbal al interactuar con personas de diferentes culturas?",
        opciones: ["A) Inteligencia emocional básica", "B) CQ Comportamental (Behavioral CQ)", "C) Fluidez lingüística nativa", "D) Dominio de hojas de cálculo financieras"],
        respuestaCorrecta: 1,
        explicacion: "La inteligencia cultural comportamental se refiere a la capacidad de modular las acciones, gestos y estilos de comunicación verbal y corporal al relacionarse en contextos multiculturales."
    },
    {
        id: 61,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué es una empresa 'Born Global' (Nacida Global)?",
        opciones: ["A) Una corporación multinacional centenaria con presencia en todos los continentes", "B) Una empresa de reciente creación que, desde sus inicios o poco después, busca internacionalizarse agresivamente para obtener ventajas competitivas en los mercados globales", "C) Una empresa que cotiza en bolsas de valores de múltiples países simultáneamente", "D) Una franquicia local de comida rápida"],
        respuestaCorrecta: 1,
        explicacion: "Las Born Globals son startups que, impulsadas por la tecnología y la globalización, trascienden las fronteras nacionales desde su fundación sin pasar por las etapas tradicionales de internacionalización gradual."
    },
    {
        id: 62,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "Según el modelo de Uppsala de internacionalización, ¿cómo se expanden típicamente las empresas al extranjero?",
        opciones: ["A) Mediante saltos directos a mercados geográficamente distantes y desconocidos con IED", "B) A través de un proceso gradual de incremento de compromiso de recursos, avanzando conforme se adquiere conocimiento experimental sobre los mercados extranjeros (cercanos primero)", "C) Exclusivamente mediante contratos de franquicia global masiva", "D) Al azar, según surjan oportunidades fortuitas sin planeación"],
        respuestaCorrecta: 1,
        explicacion: "El modelo de Uppsala postula que las empresas reducen la incertidumbre internacional avanzando por etapas incrementales: exportación ocasional, agentes, filial comercial y producción en el exterior, priorizando 'distancia psíquica' menor."
    },
    {
        id: 63,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué evalúa el marco de la 'Ventaja OLI' (Paradigma Ecléctico de John Dunning) para explicar la Inversión Extranjera Directa (IED)?",
        opciones: ["A) Operación, Logística e インフラ (Infraestructura)", "B) Ventajas de Propiedad (Ownership), Localización (Location) y Internalización (Internalization)", "C) Oferta, Leyes e Interés cambiario", "D) Organización, Licenciamiento y Exportación"],
        respuestaCorrecta: 1,
        explicacion: "El paradigma ecléctico de Dunning (OLI) sostiene que una empresa realiza IED si posee ventajas de propiedad (activos intangibles), si es rentable localizar operaciones en el extranjero (recursos/costos) y si prefiere internalizar las transacciones en lugar de usar contratos de mercado."
    },
    {
        id: 64,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Cuál es la diferencia estratégica fundamental entre una estrategia multinacional (multidoméstica) y una estrategia global estandarizada?",
        opciones: ["A) La multinacional adapta fuertemente sus productos a cada mercado local respondiendo a diferencias nacionales; la global ofrece productos estandarizados buscando economías de escala a nivel mundial", "B) La estrategia global es exclusiva para pequeñas empresas exportadoras", "C) La estrategia multinacional elimina los costos de transporte", "D) No existe diferencia en la gestión de subsidiarias"],
        respuestaCorrecta: 0,
        explicacion: "La estrategia multidoméstica prioriza la capacidad de respuesta local ante preferencias heterogéneas, mientras que la estrategia global prioriza la reducción de costos mediante la estandarización masiva."
    },
    {
        id: 65,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué describe la matriz de presión de integración global versus presión de capacidad de respuesta local?",
        opciones: ["A) El análisis de la inflación y el desempleo en mercados emergentes", "B) El marco que ayuda a las empresas a elegir entre cuatro estrategias internacionales: internacional, multidoméstica, global y transnacional", "C) La evaluación de riesgos crediticios bancarios", "D) Las fases del ciclo de vida del producto de Vernon"],
        respuestaCorrectate: 1,
        explicacion: "La matriz de integración-respuesta local de Prahalad y Doz (popularizada por Bartlett y Ghoshal) clasifica las estrategias corporativas internacionales según la fuerza de estas dos presiones opuestas."
    },
    {
        id: 66,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "En el marco de la teoría del ciclo de vida del producto de Raymond Vernon, ¿en qué fase el producto se exporta desde el país innovador hacia países en desarrollo?",
        opciones: ["A) Fase de introducción en el mercado local", "B) Fase de madurez, donde la demanda se estabiliza y la producción comienza a estandarizarse", "C) Fase de obsolescencia tecnológica absoluta", "D) Fase de importación exclusiva de materias primas"],
        respuestaCorrectate: 1,
        explicacion: "Según Vernon, en la fase de madurez del producto, la tecnología se estandariza, la producción se traslada a países con menores costos y el país innovador pasa de exportador a importador."
    },
    {
        id: 67,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué ventaja estratégica principal aporta una alianza estratégica internacional (Joint Venture) frente a la creación de una filial propia desde cero (Greenfield)?",
        opciones: ["A) Control absoluto y propiedad del 100% de la operación", "B) Acceso inmediato a redes de distribución locales, conocimiento del mercado y reparto de riesgos y costos de inversión con el socio local", "C) Eliminación total de conflictos gerenciales", "D) Exención de regulaciones antimonopolio"],
        respuestaCorrecta: 1,
        explicacion: "Las joint ventures permiten compartir riesgos financieros y aprovechar el conocimiento regulatorio, político y comercial del socio local, facilitando la entrada a mercados complejos."
    },
    {
        id: 68,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué define a una inversión 'Greenfield' en el contexto de expansión internacional?",
        opciones: ["A) La compra de acciones de una empresa extranjera existente (Fusiones y Adquisiciones)", "B) La construcción de nuevas instalaciones operativas y productivas desde cero en el país receptor", "C) La exportación indirecta a través de distribuidores agrícolas ecológicos", "D) La adquisición de patentes de tecnologías verdes"],
        respuestaCorrecta: 1,
        explicacion: "Una inversión Greenfield (inversión de planta nueva) implica la creación de infraestructura productiva completamente nueva en el extranjero, lo que genera mayor empleo local pero requiere tiempo y capital."
    },
    {
        id: 69,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Cuál es el objetivo de utilizar el análisis FODA cruzado (Matriz TOWS) en la formulación de estrategias internacionales?",
        opciones: ["A) Calcular el tipo de cambio forward a 90 días", "B) Combinar fortalezas y debilidades internas con oportunidades y amenazas externas para formular opciones estratégicas viables", "C) Determinar los aranceles preferenciales de un tratado comercial", "D) Evaluar el clima laboral de los expatriados"],
        respuestaCorrecta: 1,
        explicacion: "La matriz TOWS (FODA cruzado) genera estrategias FO (crecimiento), FA (defensivas), DO (reorientación) y DA (supervivencia) relacionando el entorno interno con el externo."
    },
    {
        id: 70,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué representa el concepto de 'Ventaja de Primera Curva' o ventaja del pionero (First-Mover Advantage) en los mercados internacionales?",
        opciones: ["A) Los costos adicionales asumidos por el seguidor tecnológico", "B) Los beneficios estratégicos obtenidos por la primera empresa en ingresar a un mercado extranjero, como lealtad de marca, captura de canales y economías de escala", "C) La obligación legal de pagar aranceles preferenciales por ser la primera empresa registrada", "D) El riesgo de asumir todos los costos de educación del mercado"],
        respuestaCorrecta: 1,
        explicacion: "Ser pionero en un mercado internacional permite establecer estándares, acaparar canales de distribución y construir un fuerte reconocimiento de marca, aunque también implica asumir costos de pioneirismo y educación del consumidor."
    },
    {
        id: 71,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "En un estudio de viabilidad para exportación, se analiza la relación lineal entre el PIB per cápita del país destino y las ventas históricas del producto. ¿Qué estadístico mide la fuerza y dirección de esta relación lineal?",
        opciones: ["A) La desviación estándar muestral", "B) El coeficiente de correlación de Pearson ($r$)", "C) La prueba de chi-cuadrada de independencia", "D) El análisis de varianza (ANOVA)"],
        respuestaCorrecta: 1,
        explicacion: "El coeficiente de correlación de Pearson mide el grado de asociación lineal entre dos variables cuantitativas continuas, oscilando entre -1 y +1."
    },
    {
        id: 72,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Para qué se utiliza la técnica de regresión lineal simple en la proyección de la demanda internacional?",
        opciones: ["A) Para evaluar la diferencia de medias entre dos grupos focales culturales", "B) Para estimar el valor de una variable dependiente (ej. demanda futura) en función de una variable independiente (ej. tiempo o ingreso disponible)", "C) Para calcular los costos arancelarios ponderados en aduana", "D) Para determinar la cuota óptima de mercado en monopolios"],
        respuestaCorrecta: 1,
        explicacion: "La regresión lineal simple modela la relación matemática entre una variable explicativa y una variable de respuesta, permitiendo realizar pronósticos cuantitativos de ventas."
    },
    {
        id: 73,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "Al realizar una prueba de hipótesis estadística para comparar los tiempos promedio de despacho aduanero entre dos puertos diferentes, si el valor $p$ (p-value) obtenido es menor que el nivel de significancia estándar ($\alpha = 0.05$), ¿qué decisión se toma?",
        opciones: ["A) Se acepta la hipótesis nula de que no hay diferencia", "B) Se rechaza la hipótesis nula, concluyendo que existe evidencia estadísticamente significativa de diferencia entre los tiempos promedio", "C) Se descarta el estudio por error de muestreo", "D) Se duplica el tamaño de la muestra obligatoriamente"],
        respuestaCorrecta: 1,
        explicacion: "Un valor $p < 0.05$ indica que la probabilidad de observar los resultados muestrales bajo el supuesto de que la hipótesis nula es verdadera es menor al 5%, por lo que se rechaza la hipótesis nula."
    },
    {
        id: 74,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué mide la elasticidad precio de la demanda en el diseño de estrategias de precios internacionales?",
        opciones: ["A) La sensibilidad porcentual de la cantidad demandada ante una variación porcentual en el precio del producto", "B) El cambio en el tipo de cambio spot ante variaciones de la tasa de interés", "C) La proporción de aranceles pagados en aduana respecto al costo de producción", "D) El crecimiento porcentual del PIB en economías emergentes"],
        respuestaCorrecta: 0,
        explicacion: "La elasticidad precio de la demanda cuantifica cuán receptivos son los consumidores ante cambios en el precio; si es elástica ($>1$), un incremento de precio reduce drásticamente los ingresos totales."
    },
    {
        id: 75,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Cuál es el propósito del análisis de árbol de decisiones en la evaluación de riesgos para la entrada a un mercado extranjero?",
        opciones: ["A) Calcular el balance general consolidado de la filial", "B) Representar gráficamente las diferentes alternativas de decisión, eventos fortuitos y sus probabilidades asociadas para calcular el valor monetario esperado (VME)", "C) Medir el etnocentrismo del consumidor mediante encuestas Likert", "D) Establecer los términos Incoterms de entrega marítima"],
        respuestaCorrecta: 1,
        explicacion: "El árbol de decisiones es una herramienta cuantitativa que ayuda a visualizar escenarios complejos de inversión internacional, calculando los valores esperados de cada ruta estratégica."
    },
    {
        id: 76,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "En la planificación de proyectos internacionales, ¿qué herramienta de gestión cuantitativa permite identificar la ruta crítica y el tiempo mínimo de ejecución de un proyecto complejo?",
        opciones: ["A) La matriz FODA", "B) El diagrama PERT / CPM (Critical Path Method)", "C) El análisis PESTEL", "D) El modelo OLI de Dunning"],
        respuestaCorrecta: 1,
        explicacion: "Los métodos PERT y CPM son técnicas de redes de gestión de proyectos que calculan la secuencia de actividades dependientes que determinan la duración total del proyecto (ruta crítica)."
    },
    {
        id: 77,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué representa el Valor Presente Neto (VPN o NPV) en la evaluación financiera de un proyecto de inversión extranjera?",
        opciones: ["A) La suma de los flujos de efectivo nominales futuros sin descontar", "B) La diferencia entre el valor presente de los flujos de efectivo futuros descontados y la inversión inicial del proyecto", "C) La tasa de rentabilidad interna que iguala los flujos a cero", "D) El costo de capital ponderado (WACC) de la matriz"],
        respuestaCorrecta: 1,
        explicacion: "El VPN descuenta los flujos futuros de efectivo a una tasa apropiada de riesgo (WACC); si es mayor a cero, el proyecto de inversión incrementa el valor de la empresa."
    },
    {
        id: 78,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Cómo se define la Tasa Interna de Retorno (TIR) en la toma de decisiones financieras internacionales?",
        opciones: ["A) La tasa de descuento que hace que el Valor Presente Neto (VPN) de un proyecto sea exactamente igual a cero", "B) El tipo de cambio promedio anual proyectado por el banco central", "C) El rendimiento de los bonos soberanos a 10 años", "D) La tasa de inflación diferencial entre dos países"],
        respuestaCorrecta: 0,
        explicacion: "La TIR es la tasa de descuento que iguala la suma de los valores presentes de los flujos de caja esperados con la inversión inicial, sirviendo como indicador de rentabilidad porcentual."
    },
    {
        id: 79,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "En una investigación de mercados cuantitativa internacional, ¿qué técnica de muestreo garantiza que cada miembro de la población objetivo tenga una probabilidad conocida y distinta de cero de ser seleccionado?",
        opciones: ["A) Muestreo por conveniencia", "B) Muestreo probabilístico (aleatorio simple, estratificado o por conglomerados)", "C) Muestreo por bola de nieve", "D) Muestreo opinático o intencional"],
        respuestaCorrectate: 1,
        explicacion: "El muestreo probabilístico utiliza métodos de selección al azar que permiten calcular el error muestral y realizar inferencias estadísticas válidas para toda la población."
    },
    {
        id: 80,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué mide el análisis de sensibilidad en la modelación financiera de un proyecto de expansión internacional?",
        opciones: ["A) El grado de satisfacción de los clientes extranjeros en redes sociales", "B) El impacto en el VPN y la TIR al modificar de forma individual las variables críticas clave (ej. volumen de ventas, tipo de cambio, costo de materia prima)", "C) La resistencia cultural de los empleados ante fusiones y adquisiciones", "D) La correlación entre aranceles y PIB"],
        respuestaCorrecta: 1,
        explicacion: "El análisis de sensibilidad evalúa cómo responde la rentabilidad del proyecto ante cambios imprevistos en variables clave, permitiendo identificar los principales factores de riesgo financiero."
    },
    {
        id: 81,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Qué estrategia de posicionamiento global utiliza una marca para enfatizar su origen nacional como símbolo de alta calidad y prestigio (ej. chocolates suizos, automóviles alemanes)?",
        opciones: ["A) Global Consumer Culture Positioning (GCCP)", "B) Foreign Consumer Culture Positioning (FCCP)", "C) Local Consumer Culture Positioning (LCCP)", "D) Etnocentrismo inverso"],
        respuestaCorrecta: 1,
        explicacion: "El posicionamiento basado en la cultura de consumo extranjera (FCCP) asocia la marca con un país de origen específico que goza de reputación favorable en dicha categoría de producto."
    },
    {
        id: 82,
        area: "Mercadotecnia Internacional",
        pregunta: "En el comercio electrónico transfronterizo (Cross-Border E-commerce), ¿cuál representa uno de los mayores desafíos logísticos y de conversión para las tiendas online B2C?",
        opciones: ["A) La gestión de devoluciones internacionales (Reverse Logistics) y el cálculo transparente de aranceles e impuestos en el pago (DDP)", "B) La imposibilidad absoluta de utilizar pasarelas de pago con tarjeta de crédito", "C) La prohibición legal de hacer marketing digital en redes sociales", "D) La obligación de estandarizar la moneda en todo el mundo"],
        respuestaCorrecta: 0,
        explicacion: "El comercio electrónico transfronterizo enfrenta barreras complejas como la gestión costosa de devoluciones internacionales y la incertidumbre de los costos de aduana e impuestos para el comprador final."
    },
    {
        id: 83,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Qué implica la estrategia de segmentación psicográfica internacional?",
        opciones: ["A) Agrupar a los países exclusivamente por su ubicación geográfica en continentes", "B) Dividir los mercados globales basándose en los estilos de vida, valores, actitudes, personalidad y clases sociales de los consumidores", "C) Clasificar a los mercados según el clima y la temperatura media anual", "D) Analizar los ingresos fiscales gubernamentales per cápita"],
        respuestaCorrecta: 1,
        explicacion: "La segmentación psicográfica trasciende la demografía tradicional para agrupar a consumidores transnacionales que comparten estilos de vida, intereses y valores psicológicos afines."
    },
    {
        id: 84,
        area: "Mercadotecnia Internacional",
        pregunta: "¿Cuál es el propósito de realizar una prueba de concepto (Concept Testing) en un mercado extranjero antes del lanzamiento oficial?",
        opciones: ["A) Calcular los impuestos corporativos sobre la renta de la filial", "B) Evaluar la reacción de los consumidores meta ante la propuesta de valor del producto o servicio para minimizar el riesgo de fracaso comercial", "C) Negociar los términos Incoterms con las navieras", "D) Obtener la certificación ISO 14001"],
        respuestaCorrecta: 1,
        explicacion: "La prueba de concepto valida si la idea del producto resuena positivamente con las expectativas culturales y necesidades de los consumidores del nuevo mercado."
    },
    {
        id: 85,
        area: "Mercadotecnia Internacional",
        pregunta: "Cuando una empresa multinacional adapta los mensajes publicitarios de una misma campaña global para reflejar los modismos, humor y referencias culturales locales, se emplea una estrategia de:",
        opciones: ["A) Estandarización absoluta sin cambios", "B) 'Glocalización' (Piense global, actúe local)", "C) Dumping publicitario", "D) Centralización total de la comunicación"],
        respuestaCorrectate: 1,
        explicacion: "La glocalización combina una estrategia de marca centralizada (global) con una adaptación táctica de la ejecución publicitaria a las peculiaridades culturales locales (local)."
    },
    {
        id: 86,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "En la gestión aduanera, ¿qué es una 'Pedimento de Importación' en el marco del comercio exterior mexicano (o documento aduanero equivalente)?",
        opciones: ["A) Un contrato privado de compraventa entre particulares", "B) El documento fiscal oficial que comprueba la legal estancia y tenencia de las mercancías en el país, así como el pago de contribuciones al comercio exterior", "C) La póliza de seguro marítimo internacional contra todo riesgo", "D) El certificado de calidad emitido por laboratorios de origen"],
        respuestaCorrecta: 1,
        explicacion: "El pedimento aduanero es la declaración fiscal y legal obligatoria ante la autoridad aduanera que detalla el régimen, valor, clasificación arancelaria y pago de impuestos de la mercancía importada."
    },
    {
        id: 87,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué función cumple el sistema de clasificación arancelaria basado en el 'Sistema Armonizado de Designación y Codificación de Mercancías' (SA)?",
        opciones: ["A) Establecer los tipos de cambio flotantes de las monedas", "B) Proveer un código numérico internacional estandarizado de 6 o más dígitos para identificar uniformemente cualquier producto comercializado a nivel mundial", "C) Regular los salarios mínimos de los operadores logísticos", "D) Auditar los estados financieros de las aerolíneas de carga"],
        respuestaCorrecta: 1,
        explicacion: "El Sistema Armonizado (SA), administrado por la OMA, es la nomenclatura internacional estandarizada que permite clasificar los productos para aplicar aranceles y recopilar estadísticas comerciales globales."
    },
    {
        id: 88,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué ventaja principal ofrece el uso de contenedores estandarizados (TEUs - Twenty-Foot Equivalent Unit) en la cadena de suministro internacional?",
        opciones: ["A) Exención total de inspecciones aduaneras fitosanitarias", "B) Unitarización de la carga que facilita la transferencia intermodal rápida (barco-tren-camión) y reduce costos de manipulación", "C) Eliminación de la necesidad de contratar seguros de transporte", "D) Reducción del tiempo de tránsito aéreo"],
        respuestaCorrecta: 1,
        explicacion: "La contenerización (TEUs y FEUs) revolucionó la logística global al permitir la manipulación mecanizada y estandarizada de mercancías a través de diversos modos de transporte sin abrir la unidad."
    },
    {
        id: 89,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "En la gestión de riesgos logísticos globales, ¿qué busca mitigar una estrategia de 'proveedores múltiples' (dual sourcing o multi-sourcing)?",
        opciones: ["A) El aumento en los descuentos por volumen de compra", "B) La dependencia crítica de un solo proveedor ante interrupciones geopolíticas, desastres naturales o huelgas", "C) La complejidad en la contabilidad de costos de transferencia", "D) El pago de aranceles preferenciales"],
        respuestaCorrecta: 1,
        explicacion: "Diversificar la base de suministro con múltiples proveedores reduce drásticamente el riesgo de interrupción de la cadena de valor (supply chain disruption) ante eventos imprevistos."
    },
    {
        id: 90,
        area: "Logística y Cadena de Suministro Internacional",
        pregunta: "¿Qué define a un puerto seco (Inland Port / Terminal Intermodal Interior)?",
        opciones: ["A) Un puerto marítimo ubicado en zonas con marea baja extrema", "B) Una instalación terrestre conectada directamente con un puerto marítimo mediante servicios de transporte eficientes, donde se realizan actividades aduaneras, de consolidación y almacenamiento", "C) Un almacén clandestino en zonas fronterizas", "D) Una plataforma exclusiva para transporte aéreo de carga pesada"],
        respuestaCorrecta: 1,
        explicacion: "Un puerto seco desatura los puertos marítimos al trasladar las operaciones de despacho aduanero, inspección y logística hacia el interior del territorio, conectándolos vía ferroviaria o carretera."
    },
    {
        id: 91,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué describe la hipótesis de los mercados eficientes (EMH) aplicada al mercado cambiario internacional?",
        opciones: ["A) Que los tipos de cambio actuales reflejan instantáneamente toda la información disponible, haciendo imposible obtener ganancias extraordinarias especulando consistentemente", "B) Que los bancos centrales manipulan el tipo de cambio sin restricciones", "C) Que las tasas de interés son idénticas en todos los países del mundo", "D) Que el mercado forward siempre es un pésimo predictor del tipo de cambio spot"],
        respuestaCorrecta: 0,
        explicacion: "La hipótesis de eficiencia de mercado en su forma semifuerte o fuerte postula que los precios de las divisas incorporan toda la información pública y pasada, neutralizando arbitrajes especulativos sostenidos."
    },
    {
        id: 92,
        area: "Finanzas Internacionales",
        pregunta: "¿Cómo se calcula y para qué sirve el WACC (Weighted Average Cost of Capital) en una corporación multinacional?",
        opciones: ["A) Es la suma aritmética de los salarios de los empleados en el extranjero", "B) Es el costo de capital promedio ponderado de la empresa (deuda y capital contable), utilizado como tasa de descuento mínima aceptable para evaluar proyectos de inversión", "C) Es la tasa impositiva corporativa promedio en paraísos fiscales", "D) Es el margen de beneficio neto en las exportaciones"],
        respuestaCorrectate: 1,
        explicacion: "El WACC pondera el costo de la deuda y del capital patrimonial según su participación en la estructura financiera de la empresa, sirviendo como la tasa de corte (hurdle rate) en la evaluación de proyectos."
    },
    {
        id: 93,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué es el riesgo de transferencia (o riesgo soberano) en las inversiones extranjeras directas?",
        opciones: ["A) El riesgo de fluctuación diaria en el tipo de cambio spot", "B) La probabilidad de que el gobierno del país receptor imponga controles de cambio o restricciones que impidan la repatriación de dividendos y capitales a la matriz", "C) El costo de transferir contenedores por vía marítima", "D) El riesgo de quiebra de la entidad bancaria intermediaria"],
        respuestaCorrecta: 1,
        explicacion: "El riesgo de transferencia está ligado a la soberanía del Estado receptor, el cual puede prohibir o limitar la salida de divisas al exterior, atrapando los flujos financieros de la filial."
    },
    {
        id: 94,
        area: "Finanzas Internacionales",
        pregunta: "¿Cuál es la función principal de los mercados de Eurodivisas (Euromonedas)?",
        opciones: ["A) Emitir la moneda oficial de la Unión Europea (el Euro)", "B) Operar depósitos y préstamos en monedas extranjeras fuera del país emisor de dicha moneda (ej. dólares estadounidenses depositados en un banco en Londres)", "C) Regular el sistema de pagos criptográficos globales", "D) Financiar exclusivamente proyectos agrícolas locales"],
        respuestaCorrecta: 1,
        explicacion: "El mercado de euromonedas abarca operaciones financieras bancarias denominadas en una moneda distinta a la del país donde opera el banco receptor, ofreciendo mayor flexibilidad y tasas competitivas."
    },
    {
        id: 95,
        area: "Finanzas Internacionales",
        pregunta: "¿Qué indica un diferencial de tasas de interés positivo entre el país A y el país B en relación con los tipos de cambio forward (según la Paridad de Tasas de Interés - PTI)?",
        opciones: ["A) La moneda del país con mayor tasa de interés cotizará en el mercado forward con un descuento respecto al tipo de cambio spot", "B) La moneda con mayor tasa de interés se apreciará infinitamente", "C) No existe relación matemática entre tasas de interés y tipos de cambio forward", "D) El tipo de cambio forward será siempre igual al tipo de cambio spot histórico"],
        respuestaCorrecta: 0,
        explicacion: "La Paridad de Tasas de Interés (PTI) establece que la moneda del país con la tasa de interés nominal más alta cotizará con descuento en el mercado forward para evitar oportunidades de arbitraje sin riesgo."
    },
    {
        id: 96,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué es un Tratado de Libre Comercio (TLC) de acuerdo con el derecho internacional público y las reglas de la OMC?",
        opciones: ["A) Un acuerdo bilateral o multilateral que elimina aranceles y barreras comerciales entre los países firmantes para profundizar la integración económica, cumpliendo con el Artículo XXIV del GATT", "B) Una unificación obligatoria de monedas y sistemas fiscales soberanos", "C) Un pacto militar de defensa mutua contra potencias extranjeras", "D) Una organización supranacional que redacta leyes penales globales"],
        respuestaCorrectate: 0,
        explicacion: "Un TLC es un acuerdo comercial preferencial bajo las normas de la OMC (GATT art. XXIV) que busca liberalizar el comercio de bienes y servicios entre los Estados parte sin requerir un arancel externo común."
    },
    {
        id: 97,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué función principal desempeñan los paneles arbitrales internacionales (como el CIADI o la CCI) en los negocios internacionales?",
        opciones: ["A) Resolver disputas comerciales e inversiones entre Estados y corporaciones privadas de manera neutral, rápida y vinculante, evitando tribunales locales politizados", "B) Fijar los precios internacionales del petróleo y materias primas", "C) Emitir patentes globales de propiedad intelectual de validez automática", "D) Sancionar penalmente a directivos corruptos"],
        respuestaCorrectate: 0,
        explicacion: "El arbitraje internacional (ej. Centro Internacional de Arreglo de Diferencias Relativas Inversiones - CIADI, o Cámara de Comercio Internacional - CCI) es el mecanismo preferido para resolver controversias transfronterizas de forma especializada."
    },
    {
        id: 98,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué son las Medidas Sanitarias y Fitosanitarias (MSF) reguladas por la OMC en el comercio internacional de alimentos y productos agrícolas?",
        opciones: ["A) Impuestos adicionales aplicados a productos de lujo", "B) Regulaciones científicas aplicadas por los gobiernos para proteger la vida y la salud humana, animal o vegetal frente a plagas, enfermedades o aditivos tóxicos", "C) Certificados de origen para comprobar el pago de aranceles", "D) Subsidios a la producción orgánica"],
        respuestaCorrectate: 1,
        explicacion: "El acuerdo MSF de la OMC permite a los países aplicar normativas de sanidad y bioseguridad, siempre que estén basadas en ciencia y no constituyan barreras comerciales proteccionistas encubiertas."
    },
    {
        id: 99,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Cuál es el propósito de las reglas de origen en un Tratado de Libre Comercio?",
        opciones: ["A) Determinar la nacionalidad fiscal de los barcos mercantes", "B) Establecer los criterios para definir si un producto ha sido suficientemente transformado en los países miembros del tratado para calificar como originario y gozar de preferencias arancelarias", "C) Calcular los costos logísticos de transporte terrestre", "D) Evitar la falsificación de marcas registradas comerciales"],
        respuestaCorrecta: 1,
        explicacion: "Las reglas de origen evitan el fenómeno de la 'triangulación arancelaria', asegurando que los beneficios del TLC se apliquen solo a mercancías producidas sustancialmente dentro de la región integrada."
    },
    {
        id: 100,
        area: "Derecho y Legislación Comercial Internacional",
        pregunta: "¿Qué es un derecho compensatorio (countervailing duty) en la legislación comercial internacional?",
        opciones: ["A) Un impuesto especial aplicado por la aduana para contrarrestar los efectos negativos de subsidios injustos otorgados por un gobierno extranjero a la exportación de un producto", "B) Una multa por contrabando de mercancías ilícitas", "C) Un arancel recíproco por la devaluación de la moneda local", "D) Una tasa fija por servicios de inspección sanitaria"],
        respuestaCorrecta: 0,
        explicacion: "Los derechos compensatorios son aranceles antidistorsión que un país importador impone para neutralizar el margen de subsidio gubernamental que da ventaja desleal al producto extranjero."
    },
    {
        id: 101,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué mide el Índice de Percepción de la Corrupción (IPC) publicado por Transparency International?",
        opciones: ["A) La cantidad de sobornos pagados en aduanas portuarias", "B) El nivel percibido de corrupción en el sector público de diferentes países del mundo, basado en encuestas a expertos y empresarios", "C) Las sanciones penales aplicadas a corporaciones multinacionales", "D) El volumen de lavado de dinero en paraísos fiscales"],
        respuestaCorrecta: 1,
        explicacion: "El IPC es un referente global que evalúa la gobernanza y la corrupción institucional en el sector público, indicador crítico para el análisis de riesgo país."
    },
    {
        id: 102,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Cómo impacta el riesgo geopolítico de 'Sanciones Económicas Internacionales' (ej. bloqueos financieros SWIFT, embargos comerciales) en las operaciones de una empresa multinacional?",
        opciones: ["A) Aumenta automáticamente las ventas en el país sancionado", "B) Obliga a la empresa a cumplir estrictamente con los marcos regulatorios de cumplimiento (compliance) para evitar sanciones penales y bloqueos de activos", "C) Elimina los aranceles de importación en Europa", "D) Reduce el costo del transporte marítimo internacional"],
        respuestaCorrecta: 1,
        explicacion: "Las sanciones económicas internacionales (como las emitidas por la OFAC en EE.UU. o la UE) imponen restricciones severas de cumplimiento normativo (compliance) a las empresas globales para evitar multas catastróficas."
    },
    {
        id: 103,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué estudia la 'Economía Política Internacional' (EPI) como disciplina académica en los negocios internacionales?",
        opciones: ["A) Únicamente la contabilidad financiera de las empresas filiales", "B) La interacción compleja entre la política (poder de los Estados e instituciones) y la economía (mercados y distribución de riqueza global)", "C) El diseño de empaques ecológicos para exportación", "D) La optimización de rutas de transporte aéreo"],
        respuestaCorrectate: 1,
        explicacion: "La Economía Política Internacional analiza cómo las decisiones políticas de los gobiernos y las fuerzas del mercado global se entrelazan afectando el comercio, las finanzas y el desarrollo mundial."
    },
    {
        id: 104,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Qué representa el fenómeno de la 'Desdolarización' en el sistema financiero global actual?",
        opciones: ["A) La adopción oficial del dólar estadounidense por todos los países emergentes", "B) La tendencia gradual de algunos países y bloques económicos a reducir su dependencia del dólar en el comercio bilateral y reservas internacionales, utilizando monedas locales", "C) La devaluación total de la Reserva Federal de EE.UU.", "D) La prohibición de usar tarjetas de crédito internacionales"],
        respuestaCorrecta: 1,
        explicacion: "La desdolarización refleja esfuerzos geopolíticos recientes de economías como los BRICS para diversificar sus reservas y liquidar comercio internacional en monedas alternativas al dólar."
    },
    {
        id: 105,
        area: "Geopolítica y Entorno Económico Global",
        pregunta: "¿Cuál es el propósito del índice 'Doing Business' (o evaluaciones equivalentes del Banco Ponderado) al analizar el clima de inversión de un país?",
        opciones: ["A) Medir la facilidad para abrir empresas, obtener permisos de construcción, pagar impuestos y resolver quiebras en un entorno regulatorio nacional", "B) Calcular la huella de carbono de las fábricas maquiladoras", "C) Auditar los balances contables de bancos comerciales", "D) Establecer los precios internacionales del petróleo"],
        respuestaCorrectate: 0,
        explicacion: "Los indicadores de facilidad para hacer negocios evalúan la eficiencia regulatoria y la burocracia gubernamental que enfrentan los emprendedores e inversionistas extranjeros al operar localmente."
    },
    {
        id: 106,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "Según el modelo de Erin Meyer ('The Culture Map'), ¿qué diferencia existe entre las culturas con comunicación de 'Evaluación Negativa Directa' frente a las de 'Evaluación Negativa Indirecta'?",
        opciones: ["A) Las directas dicen la crítica sin filtros corporativos; las indirectas utilizan rodeos, diplomacia y suavizadores para no ofender", "B) Las indirectas prohíben dar retroalimentación laboral", "C) Las directas rechazan los contratos escritos", "D) No hay impacto en la negociación gerencial"],
        respuestaCorrecta: 0,
        explicacion: "El mapa cultural de Meyer muestra que en algunas culturas (ej. Países Bajos, Israel) la crítica es directa y sincera, mientras que en otras (ej. Japón, Tailandia) la crítica se expresa de forma muy sutil para proteger la armonía (salvar las apariencias)."
    },
    {
        id: 107,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En la gestión de equipos virtuales multiculturales globales, ¿cuál es uno de los principales retos gerenciales asociados a la dispersión temporal y espacial?",
        opciones: ["A) La imposibilidad absoluta de utilizar correo electrónico", "B) La fragmentación de la comunicación, barreras lingüísticas, diferencias horarias y la dificultad para construir cohesión y confianza interpersonal", "C) La obligación de viajar semanalmente a la matriz", "D) La sincronización de aranceles aduaneros"],
        respuestaCorrecta: 1,
        explicacion: "Los equipos virtuales globales enfrentan retos de comunicación asincrónica, diferencias culturales en los estilos de trabajo y la dificultad natural de generar confianza sin interacción presencial."
    },
    {
        id: 108,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Qué enfoque de liderazgo global promueve el modelo GLOBE (Global Leadership and Organizational Behavior Effectiveness)?",
        opciones: ["A) Que un solo estilo de liderazgo autoritario funciona idénticamente en todo el mundo", "B) Que la efectividad del liderazgo depende de comprender cómo las expectativas culturales específicas de cada sociedad modulan los comportamientos directivos deseados", "C) Que el liderazgo debe ser ejercido exclusivamente por expatriados de la matriz", "D) Que las estructuras organizacionales deben ser totalmente planas"],
        respuestaCorrecta: 1,
        explicacion: "El estudio GLOBE demuestra que los atributos del liderazgo efectivo varían significativamente según las dimensiones culturales de cada sociedad, requiriendo adaptabilidad directiva."
    },
    {
        id: 109,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "En una negociación comercial con socios de culturas orientadas al 'Policronismo' (perspectiva flexible del tiempo, según Edward T. Hall), ¿cómo se percibe el cumplimiento estricto de las agendas y los horarios?",
        opciones: ["A) Como una regla inflexible y sagrada", "B) Como algo secundario frente a la prioridad de mantener la relación personal y atender los eventos imprevistos que surjan", "C) Como un delito mercantil punible", "D) Como una señal de falta de experiencia técnica"],
        respuestaCorrecta: 1,
        explicacion: "Las culturas policrónicas manejan múltiples tareas simultáneamente y priorizan las relaciones humanas sobre la rigidez del reloj, a diferencia de las culturas monocrónicas que valoran la puntualidad estricta."
    },
    {
        id: 110,
        area: "Negociación Intercultural y Gestión Global",
        pregunta: "¿Qué significa el término 'Guanxi' en el contexto de los negocios internacionales en China?",
        opciones: ["A) Un impuesto aduanero especial para productos tecnológicos", "B) La red de relaciones interpersonales y conexiones de confianza mutua que sirven como base fundamental para hacer negocios y resolver conflictos", "C) El sistema bancario digital oficial de Beijing", "D) Una norma de origen para textiles de exportación"],
        respuestaCorrecta: 1,
        explicacion: "El *Guanxi* es un concepto cultural chino crucial que denota redes de influencia y relaciones personales de confianza, indispensables para el éxito empresarial y la negociación en dicho país."
    },
    {
        id: 111,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué es una estrategia de 'Estandarización de Procesos Globales' en la cadena de valor de una corporación multinacional?",
        opciones: ["A) Modificar cada proceso operativo en cada país de manera independiente", "B) Implementar sistemas operativos, software ERP y flujos de trabajo idénticos en todas las filiales para lograr eficiencia operativa y visibilidad centralizada", "C) Tercerizar todas las operaciones contables en paraísos fiscales", "D) Eliminar los controles de calidad en origen"],
        respuestaCorrecta: 1,
        explicacion: "La estandarización de procesos mediante sistemas globales integrados (como SAP u Oracle) permite a las multinacionales optimizar costos, unificar reportes y coordinar eficientemente sus operaciones transfronterizas."
    },
    {
        id: 112,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué evalúa la matriz BCG (Boston Consulting Group) al ser adaptada al análisis de cartera de productos de una empresa en múltiples mercados internacionales?",
        opciones: ["A) La tasa de crecimiento del mercado y la participación relativa de mercado de cada producto para asignar recursos estratégicos (Estrellas, Vacas lecheras, Interrogantes, Perros)", "B) El impacto de los aranceles aduaneros en las ventas", "C) La correlación entre tipo de cambio y tasas de interés", "D) El nivel de etnocentrismo de los consumidores"],
        respuestaCorrecta: 0,
        explicacion: "La matriz BCG ayuda a la alta dirección a gestionar un portafolio diversificado de productos y mercados internacionales según su generación y consumo de efectivo."
    },
    {
        id: 113,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Cuál es el riesgo estratégico principal de una estrategia de internacionalización basada exclusivamente en exportaciones indirectas a través de distribuidores externos?",
        opciones: ["A) Pérdida de control directo sobre el cliente final, el posicionamiento de la marca y la retroalimentación del mercado", "B) Exposición masiva a la fluctuación del tipo de cambio transaccional", "C) Obligatoriedad de construir plantas de manufactura Greenfield", "D) Sanciones de la Organización Mundial del Comercio"],
        respuestaCorrecta: 0,
        explicacion: "Aunque la exportación indirecta minimiza la inversión inicial, la empresa cede el control sobre la comercialización, el servicio al cliente y el contacto directo con el mercado receptor."
    },
    {
        id: 114,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué caracteriza a un modelo de negocio de 'Franquicia Internacional' como estrategia de expansión?",
        opciones: ["A) La venta de acciones de la matriz en la bolsa de valores extranjera", "B) La transferencia del derecho de uso de un modelo de negocio probado, marca y know-how a un operador local a cambio de tarifas de ingreso y regalías (royalties)", "C) La creación de filiales de propiedad total operadas por expatriados", "D) La donación de patentes tecnológicas a gobiernos extranjeros"],
        respuestaCorrectate: 1,
        explicacion: "La franquicia permite una expansión internacional rápida con bajo riesgo de capital propio, ya que el franquiciatario local aporta la inversión y el conocimiento operativo diario."
    },
    {
        id: 115,
        area: "Estrategia y Emprendimiento Internacional",
        pregunta: "¿Qué objetivo persigue una empresa multinacional al implementar una estrategia de 'Innovación Reversa' (Reverse Innovation)?",
        opciones: ["A) Desarrollar productos económicos y adaptados inicialmente para mercados emergentes y, posteriormente, introducirlos en los mercados de países desarrollados", "B) Copiar patentes de la competencia sin pagar regalías", "C) Reducir los salarios de los ingenieros en la matriz", "D) Vender productos obsoletos en Europa"],
        respuestaCorrectate: 0,
        explicacion: "La innovación reversa surge cuando las innovaciones desarrolladas para satisfacer necesidades de bajo costo en países en desarrollo encuentran mercados lucrativos y aplicaciones en naciones desarrolladas."
    },
    {
        id: 116,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué mide el índice de concentración de mercado Herfindahl-Hirschman (IHH)?",
        opciones: ["A) La volatilidad cambiaria de las divisas emergentes", "B) El grado de concentración de la competencia en una industria, calculada sumando los cuadrados de las cuotas de mercado de todas las empresas participantes", "C) El volumen de importaciones anuales en aduana", "D) La tasa de inflación acumulada en un quinquenio"],
        respuestaCorrectate: 1,
        explicacion: "El índice Herfindahl-Hirschman (IHH) es una medida cuantitativa estándar de competencia de mercado y monopolio utilizada por agencias antimonopolio internacionales."
    },
    {
        id: 117,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "En la elaboración de un plan de negocios internacional, ¿para qué sirve el análisis de equilibrio (Break-Even Analysis) en unidades de exportación?",
        opciones: ["A) Para calcular el punto exacto de ventas donde los ingresos totales igualan a los costos totales (fijos y variables), determinando el volumen mínimo requerido para no generar pérdidas", "B) Para fijar los aranceles preferenciales del TLC", "C) Para medir la satisfacción cultural del consumidor", "D) Para determinar la tasa de interés interbancaria LIBOR"],
        respuestaCorrecta: 0,
        explicacion: "El punto de equilibrio calcula la cantidad de unidades que una empresa debe exportar y vender para cubrir todos sus costos operativos, sirviendo como umbral de viabilidad financiera."
    },
    {
        id: 118,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué evalúa el análisis de varianza (ANOVA) cuando se comparan los resultados de ventas de tres filiales internacionales ubicadas en diferentes regiones?",
        opciones: ["A) Si las diferencias entre las medias muestrales de los tres grupos son estadísticamente significativas o se deben al azar", "B) El tipo de cambio forward a 30 días", "C) La correlación lineal entre aranceles y PIB", "D) El porcentaje de rotación de inventarios en puerto"],
        respuestaCorrecta: 0,
        explicacion: "ANOVA (Analysis of Variance) es una prueba estadística paramétrica utilizada para determinar si existen diferencias estadísticamente significativas entre las medias de tres o más grupos independientes."
    },
    {
        id: 119,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "En la evaluación de proyectos internacionales, ¿qué impacto tiene el uso de una tasa de descuento más alta al calcular el Valor Presente Neto (VPN) de una filial en un país con alta inestabilidad política?",
        opciones: ["A) Aumenta artificialmente los flujos de efectivo futuros", "B) Refleja un mayor riesgo país, reduciendo el valor presente de los flujos futuros y exigiendo mayor rentabilidad al proyecto", "C) Elimina por completo la necesidad de análisis de sensibilidad", "D) Reduce los costos logísticos de transporte"],
        respuestaCorrecta: 1,
        explicacion: "A mayor riesgo percibido (riesgo político o cambiario), mayor es la tasa de descuento aplicada (costo de capital), lo que castiga el valor presente neto del proyecto para compensar el riesgo asumido."
    },
    {
        id: 120,
        area: "Sección Transversal: Análisis Cuantitativo y Metodología",
        pregunta: "¿Qué rol juega la estadística descriptiva en un estudio preliminar de mercado internacional?",
        opciones: ["A) Realizar pruebas de hipótesis complejas para inferir parámetros poblacionales", "B) Organizar, resumir y presentar los datos recolectados (medias, medianas, desviaciones estándar, frecuencias) para comprender las características básicas de la muestra", "C) Establecer las leyes aduaneras de importación", "D) Calcular el tipo de cambio spot en tiempo real"],
        respuestaCorrecta: 1,
        explicacion: "La estadística descriptiva resume y condensa grandes volúmenes de datos de investigación de mercados mediante medidas de tendencia central y dispersión, facilitando la toma de decisiones gerenciales iniciales."
    }
];