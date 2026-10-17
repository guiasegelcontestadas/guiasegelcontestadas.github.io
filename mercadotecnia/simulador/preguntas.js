const bancoPreguntas = [
    {
        id: 1,
        area: "Investigación de Mercados",
        pregunta: "En el diseño de una investigación de mercados cuantitativa, ¿qué ventaja metodológica principal ofrece la utilización de una escala Likert frente a una pregunta dicotómica (sí/no)?",
        opciones: [
            "A) Permite medir la intensidad y dirección de las actitudes u opiniones del consumidor mediante un continuo de gradación.",
            "B) Reduce de forma absoluta el sesgo de deseabilidad social en encuestas digitales.",
            "C) Elimina la necesidad de realizar pruebas piloto de campo.",
            "D) Garantiza que la muestra seleccionada sea siempre de carácter probabilístico."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La escala Likert permite capturar matices e intensidades de las actitudes del consumidor, superando la limitación de las opciones binarias y facilitando análisis estadísticos más robustos."
    },
    {
        id: 2,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución comercial, ¿cuándo se considera que una empresa adopta un modelo de distribución intensiva?",
        opciones: [
            "A) Cuando limita el número de intermediarios a un solo distribuidor exclusivo por región geográfica.",
            "B) Cuando busca colocar su producto en el mayor número posible de puntos de venta para maximizar la disponibilidad y cobertura de mercado.",
            "C) Cuando comercializa sus productos exclusivamente a través de canales digitales propios sin intermediarios.",
            "D) Cuando selecciona intermediarios bajo criterios estrictos de imagen y prestigio de marca."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La distribución intensiva busca la máxima cobertura y presencia masiva en puntos de venta, típica de productos de conveniencia de alta rotación."
    },
    {
        id: 3,
        area: "Estrategia de Producto y Marca",
        pregunta: "¿Qué representa el concepto de 'Capital de Marca' (Brand Equity) basado en el consumidor según la perspectiva de Kevin Lane Keller?",
        opciones: [
            "A) El valor contable total de los activos fijos tangibles de la planta de producción.",
            "B) El efecto diferencial que el conocimiento de la marca ejerce sobre la respuesta del cliente ante el marketing de dicha marca.",
            "C) El presupuesto anual publicitario invertido en medios masivos convencionales.",
            "D) La participación porcentual de mercado obtenida frente al competidor líder."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El brand equity basado en el consumidor se define como el conocimiento diferencial que tiene el cliente sobre la marca y cómo esto influye en su percepción y lealtad."
    },
    {
        id: 4,
        area: "Marketing Digital y Analítica",
        pregunta: "En la gestión de campañas de publicidad digital por pago por clic (PPC), ¿cómo se define el indicador de rendimiento conocido como CPA (Costo por Adquisición)?",
        opciones: [
            "A) El costo total de la campaña dividido entre el número total de clics recibidos en el anuncio.",
            "B) El promedio de impresiones necesarias para que un usuario realice una conversión.",
            "C) El costo económico total destinado a la publicidad dividido entre el número total de conversiones o clientes adquiridos.",
            "D) El porcentaje de clics respecto al total de visualizaciones del banner."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El CPA mide la eficiencia financiera de la campaña calculando la inversión monetaria necesaria para concretar una conversión o venta exitosa."
    },
    {
        id: 5,
        area: "Investigación de Mercados",
        pregunta: "En los métodos de investigación cualitativa, ¿cuál es la función principal de la técnica de 'Grupos de Enfoque' (Focus Groups)?",
        opciones: [
            "A) Obtener datos estadísticos proyectables a toda la población objetivo con un margen de error menor al 5%.",
            "B) Explorar percepciones, motivaciones, sentimientos y reacciones subjetivas de los consumidores mediante la interacción grupal moderada.",
            "C) Medir de manera exacta la elasticidad precio de la demanda en el punto de venta.",
            "D) Realizar experimentos controlados modificando variables de empaque."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los grupos de enfoque son herramientas cualitativas orientadas a profundizar en el comportamiento, actitudes y opiniones de los consumidores a través de la dinámica social."
    },
    {
        id: 6,
        area: "Comercialización y Ventas",
        pregunta: "En la gestión de precios, ¿en qué consiste la estrategia de fijación de precios basada en el valor percibido por el cliente?",
        opciones: [
            "A) Calcular el costo total de producción y sumarle un margen de utilidad corporativo fijo.",
            "B) Igualar exactamente el precio del competidor principal del mercado sin importar los costos.",
            "C) Determinar el precio con base en la evaluación que hace el consumidor de los beneficios y valor entregado por el producto frente a sus alternativas.",
            "D) Fijar precios extremadamente bajos de manera temporal para eliminar competidores."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El precio basado en el valor parte de las percepciones del comprador sobre el valor del producto, alineando la tarifa con los beneficios percibidos."
    },
    {
        id: 7,
        area: "Estrategia de Producto y Marca",
        pregunta: "¿Qué indica la etapa de 'Madurez' dentro del ciclo de vida del producto (CVP)?",
        opciones: [
            "A) Un crecimiento acelerado de las ventas con costos de producción unitarios muy elevados.",
            "B) Una desaceleración en el crecimiento de las ventas debido a que el producto ha alcanzado la aceptación de la mayoría de los compradores potenciales, intensificando la competencia.",
            "C) La retirada definitiva del producto del mercado por obsolescencia tecnológica.",
            "D) El lanzamiento inicial con fuerte inversión en campañas de expectativa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En la madurez, el mercado está saturado, el crecimiento de ventas se estabiliza y la competencia por precios y diferenciación es sumamente intensa."
    },
    {
        id: 8,
        area: "Marketing Digital y Analítica",
        pregunta: "En la optimización de motores de búsqueda (SEO), ¿a qué se refieren las prácticas de posicionamiento 'Off-Page'?",
        opciones: [
            "A) A la correcta estructuración de las etiquetas HTML y palabras clave dentro del código fuente del sitio web.",
            "B) Al diseño visual responsivo de las páginas de aterrizaje para dispositivos móviles.",
            "C) A las acciones realizadas fuera del sitio web propio para mejorar su autoridad y relevancia en buscadores, principalmente mediante la obtención de enlaces externos de calidad (backlinks).",
            "D) A la velocidad de carga de los servidores web."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El SEO Off-Page abarca estrategias externas al portal web, destacando la construcción de enlaces (link building) para incrementar la autoridad de dominio."
    },
    {
        id: 9,
        area: "Investigación de Mercados",
        pregunta: "En el muestreo estadístico para investigación de mercados, ¿cuál es la característica fundamental de un 'Muestreo Probabilístico'?",
        opciones: [
            "A) Que cada elemento de la población tiene una probabilidad conocida y distinta de cero de ser seleccionado en la muestra.",
            "B) Que la selección de los sujetos depende exclusivamente del juicio y conveniencia del investigador de campo.",
            "C) Que se eligen únicamente a los individuos que se encuentran disponibles en la calle al momento del estudio.",
            "D) Que no es posible calcular el error estándar de muestreo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El muestreo probabilístico otorga a cada miembro de la población una probabilidad matemática conocida de selección, permitiendo inferencias estadísticas confiables."
    },
    {
        id: 10,
        area: "Comercialización y Ventas",
        pregunta: "En el diseño de canales de distribución, ¿qué define a un canal de distribución indirecto corto?",
        opciones: [
            "A) Aquel donde el fabricante vende directamente al consumidor final sin intermediarios.",
            "B) Aquel que incluye únicamente un nivel de intermediario entre el productor y el consumidor final, típicamente un detallista o minorista.",
            "C) Aquel que involucra múltiples mayoristas, distribuidores y agentes comisionistas antes de llegar al detallista.",
            "D) Aquel operado exclusivamente mediante plataformas de comercio electrónico transfronterizo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un canal corto cuenta con un solo intermediario (por ejemplo, el detallista), común en tiendas departamentales o minoristas de gran formato."
    },
    {
        id: 11,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la estrategia de arquitectura de marca, ¿en qué consiste la estrategia de 'Marca Paraguas' (o marca sombrilla)?",
        opciones: [
            "A) Utilizar una marca corporativa única para respaldar y comercializar una amplia gama de productos diferentes bajo un mismo nombre.",
            "B) Crear nombres de marca completamente independientes y desvinculados para cada producto nuevo lanzado al mercado.",
            "C) Utilizar exclusivamente marcas de distribución o marca blanca.",
            "D) Licenciar una marca extranjera por un periodo temporal limitado."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La marca paraguas cobija bajo un mismo nombre corporativo múltiples líneas de productos, transfiriendo reputación y ahorrando costos de lanzamiento."
    },
    {
        id: 12,
        area: "Marketing Digital y Analítica",
        pregunta: "En la analítica web, ¿cómo se define la métrica de 'Tasa de Rebote' (Bounce Rate)?",
        opciones: [
            "A) El porcentaje de usuarios que completan una compra en el sitio web.",
            "B) El número total de páginas vistas divididas entre el número de usuarios únicos.",
            "C) El porcentaje de sesiones en el sitio web que duran más de 10 minutos sin interacción.",
            "D) El porcentaje de sesiones de una sola página en las que el usuario abandonó el sitio sin interactuar ni navegar hacia otras páginas."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La tasa de rebote mide las visitas que abandonan la página de llegada sin realizar ninguna acción ni visitar secciones adicionales del sitio."
    },
    {
        id: 13,
        area: "Investigación de Mercados",
        pregunta: "En el proceso de segmentación de mercados, ¿cuál de las siguientes variables corresponde a una segmentación de tipo 'Psicográfica'?",
        opciones: [
            "A) La edad, el género y el nivel de ingresos económicos del consumidor.",
            "B) El estilo de vida, la personalidad, los valores y las clases sociales a las que aspira el individuo.",
            "C) La región geográfica, densidad poblacional y clima de la zona.",
            "D) La frecuencia de uso del producto y la lealtad hacia la marca."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La segmentación psicográfica clasifica a los consumidores con base en su estilo de vida, personalidad, actitudes y valores socio-culturales."
    },
    {
        id: 14,
        area: "Comercialización y Ventas",
        pregunta: "En la mezcla de promoción, ¿cuál es la principal ventaja diferencial de las herramientas de 'Relaciones Públicas' (RRPP) frente a la publicidad tradicional pagada?",
        opciones: [
            "A) Garantiza la inserción exacta del mensaje corporativo en la portada de los diarios sin modificaciones editoriales.",
            "B) Ofrece un nivel superior de credibilidad y confianza ante la opinión pública al ser difundidas a través de terceros independientes (como medios periodísticos).",
            "C) Requiere un costo financiero directo por cada mención obtenida.",
            "D) Controla de forma absoluta el tiempo y frecuencia de aparición."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las relaciones públicas generan mayor credibilidad porque la información se percibe como editorial o independiente, a diferencia de los espacios publicitarios pagados."
    },
    {
        id: 15,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el análisis de cartera de productos mediante la Matriz del Boston Consulting Group (BCG), ¿cómo se clasifican aquellos productos que poseen una alta participación en un mercado de bajo crecimiento?",
        opciones: [
            "A) Productos Incógnita (o signos de interrogación).",
            "B) Productos Estrellas.",
            "C) Productos Vaca Lechera (Cash Cows).",
            "D) Productos Perros (o hueso)."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las vacas lecheras generan altos flujos de efectivo con baja necesidad de inversión debido a su sólida posición en mercados maduros y estables."
    },
    {
        id: 16,
        area: "Marketing Digital y Analítica",
        pregunta: "En el ecosistema de marketing digital, ¿qué define el concepto de 'Inbound Marketing'?",
        opciones: [
            "A) Una estrategia de interrupción publicitaria mediante llamadas telefónicas en frío y comerciales directos.",
            "B) Una metodología orientada a atraer clientes mediante la creación de contenido valioso y experiencias personalizadas en cada etapa del embudo de conversión.",
            "C) La compra masiva de bases de datos de correos electrónicos para envío de spam comercial.",
            "D) La colocación de vallas publicitarias en carreteras principales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Inbound Marketing busca atraer de forma orgánica y no intrusiva a los usuarios mediante contenido relevante, guiándolos a través del embudo hasta la conversión."
    },
    {
        id: 17,
        area: "Investigación de Mercados",
        pregunta: "En la medición del comportamiento del consumidor, ¿qué evalúa una escala de diferencial semántico?",
        opciones: [
            "A) La frecuencia exacta de compra en unidades monetarias.",
            "B) La polaridad actitudinal del consumidor evaluada a través de pares de adjetivos opuestos (ej. moderno-antiguo, eficiente-ineficiente).",
            "C) La probabilidad de recomendación de la marca a familiares y amigos.",
            "D) El ranking jerárquico de marcas preferidas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El diferencial semántico mide las connotaciones emocionales y actitudinales de un concepto usando adjetivos bipolares en escalas de varias posiciones."
    },
    {
        id: 18,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la técnica de 'Precio Psicológico' (o precio impar)?",
        opciones: [
            "A) Fijar precios exactos en números redondos para proyectar alta calidad y lujo.",
            "B) Utilizar cifras terminadas en números impares (como $99 o $999) bajo la percepción de que el consumidor procesa el precio como significativamente menor.",
            "C) Incrementar el precio conforme aumenta la demanda estacional.",
            "D) Ofrecer descuentos por volumen en compras corporativas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los precios impares aprovechan sesgos cognitivos en el consumidor, creando la ilusión psicológica de un costo menor al redondear hacia abajo mentalmente."
    },
    {
        id: 19,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el diseño de nuevos productos, ¿qué etapa del proceso precede inmediatamente a la prueba de mercado (Test Market)?",
        opciones: [
            "A) La generación de ideas preliminares.",
            "B) El análisis de negocio y viabilidad financiera.",
            "C) El desarrollo del prototipo y producto físico (Test de Producto).",
            "D) El lanzamiento comercial masivo nacional."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Antes de someter el producto a una prueba de mercado real, se debe desarrollar el prototipo funcional y superar las pruebas técnicas y de laboratorio."
    },
    {
        id: 20,
        area: "Marketing Digital y Analítica",
        pregunta: "En las métricas de redes sociales, ¿cómo se calcula el 'Engagement Rate' (Tasa de Interacción)?",
        opciones: [
            "A) Dividiendo el número total de interacciones (likes, comentarios, compartidos) entre el alcance o número de seguidores, multiplicado por 100.",
            "B) Multiplicando el presupuesto publicitario por el número de impresiones totales.",
            "C) Contando exclusivamente los nuevos seguidores obtenidos en el mes.",
            "D) Restando las cancelaciones de suscripción del total de clics."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La tasa de engagement mide el grado de involucramiento y participación de la audiencia en relación con la exposición o tamaño de la comunidad."
    },
    {
        id: 21,
        area: "Investigación de Mercados",
        pregunta: "En el análisis competitivo, ¿qué evalúa fundamentalmente el modelo de las 'Cinco Fuerzas de Michael Porter'?",
        opciones: [
            "A) La eficiencia de la cadena de suministro interna de la empresa manufacturera.",
            "B) El atractivo estructural y la rentabilidad potencial de un sector industrial mediante la presión competitiva.",
            "C) Los estados financieros contables y razones de liquidez a corto plazo.",
            "D) El clima organizacional y liderazgo de los gerentes de ventas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las cinco fuerzas de Porter analizan la competencia en un sector industrial para determinar su atractivo y nivel de rentabilidad a largo plazo."
    },
    {
        id: 22,
        area: "Comercialización y Ventas",
        pregunta: "En las estrategias de trade marketing y punto de venta, ¿qué define el concepto de 'Merchandising'?",
        opciones: [
            "A) El conjunto de técnicas y actividades comerciales aplicadas en el punto de venta para estimular la compra del producto por parte del consumidor.",
            "B) La distribución logística de mercancías desde la fábrica hasta los centros de acopio.",
            "C) La contratación de personal de ventas en call centers.",
            "D) La fijación de aranceles aduaneros a la exportación."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El merchandising agrupa las acciones visuales y tácticas ejecutadas en el establecimiento detallista para optimizar la rotación y venta del producto."
    },
    {
        id: 23,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué implica una estrategia de 'Extensión de Línea'?",
        opciones: [
            "A) Lanzar una categoría de productos totalmente nueva bajo un nombre de marca desconocido.",
            "B) Introducir artículos adicionales dentro de una categoría existente bajo la misma marca, tales como nuevos sabores, tamaños, colores o presentaciones.",
            "C) Comprar los derechos de una marca competidora extranjera.",
            "D) Eliminar del mercado los productos obsoletos de baja rotación."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La extensión de línea aprovecha el capital de marca existente para introducir variantes en la misma categoría (ej. nuevos sabores o presentaciones)."
    },
    {
        id: 24,
        area: "Marketing Digital y Analítica",
        pregunta: "En el comercio electrónico, ¿qué métrica representa el porcentaje de visitantes de un sitio web que completan una acción deseada (compra, registro, descarga) respecto al total de visitantes?",
        opciones: [
            "A) Tasa de conversión (Conversion Rate).",
            "B) Tasa de clics (CTR).",
            "C) Costo por adquisición (CPA).",
            "D) Retorno de inversión publicitaria (ROAS)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La tasa de conversión mide la efectividad del embudo digital calculando la proporción de usuarios que realizan la acción objetivo."
    },
    {
        id: 25,
        area: "Investigación de Mercados",
        pregunta: "En el análisis del entorno de marketing, ¿qué variables comprende el análisis macroambiental conocido como PESTEL?",
        opciones: [
            "A) Proveedores, empleados, sindicatos, clientes, competidores y públicos directos.",
            "B) Factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales.",
            "C) Producto, Precio, Plaza, Promoción, Personas y Procesos.",
            "D) Fortaleza, Oportunidad, Debilidad y Amenaza."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El análisis PESTEL evalúa los factores externos del entorno general que impactan a la organización: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales."
    },
    {
        id: 26,
        area: "Comercialización y Ventas",
        pregunta: "En la administración de ventas, ¿en qué consiste la técnica de venta personal conocida como enfoque AIDA?",
        opciones: [
            "A) Un modelo secuencial de comunicación de ventas compuesto por: Atención, Interés, Deseo y Acción.",
            "B) Un análisis financiero de descuento de flujos de efectivo corporativos.",
            "C) Una auditoría de inventarios en almacenes fiscales.",
            "D) Un método de distribución física internacional."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "AIDA describe las etapas cognitivas y conductuales por las que pasa un cliente potencial durante el proceso de persuasión comercial."
    },
    {
        id: 27,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el diseño de envases y embalajes, ¿cuál es la función principal del 'Embalaje' (Packaging de transporte)?",
        opciones: [
            "A) Atraer visualmente al consumidor final en el anaquel mediante colores llamativos.",
            "B) Proteger, almacenar y facilitar el transporte y manipulación segura de lotes de productos a lo largo de la cadena logística.",
            "C) Mostrar obligatoriamente la tabla nutricional y de ingredientes.",
            "D) Funcionar como el envase primario que contiene directamente el líquido."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El embalaje agrupa y protege la mercancía para su almacenamiento y distribución logística eficiente, diferenciándose del envase primario."
    },
    {
        id: 28,
        area: "Marketing Digital y Analítica",
        pregunta: "En las campañas publicitarias en redes sociales, ¿qué mide la métrica CTR (Click-Through Rate)?",
        opciones: [
            "A) El costo monetario por cada mil impresiones del anuncio.",
            "B) La relación porcentual entre el número de clics que recibe un enlace y el número total de impresiones que obtuvo el anuncio.",
            "C) El número total de conversiones de venta finalizadas.",
            "D) El tiempo promedio de visualización del video publicitario."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CTR mide la efectividad y atractivo del anuncio calculando el porcentaje de usuarios que hicieron clic tras visualizarlo."
    },
    {
        id: 29,
        area: "Investigación de Mercados",
        pregunta: "En el diseño muestral, ¿qué representa el 'Error de Muestreo'?",
        opciones: [
            "A) La diferencia estadística inevitable que surge al estudiar una muestra en lugar de a la población completa.",
            "B) Los errores cometidos por los encuestadores al transcribir nombres en papel.",
            "C) La negativa de los informantes a responder preguntas delicadas.",
            "D) La falta de presupuesto financiero para concluir el estudio."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El error de muestreo es la discrepancia natural esperada entre los resultados obtenidos de la muestra y los valores reales de la población total."
    },
    {
        id: 30,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución, ¿cómo se define el fenómeno de 'Canibalización' comercial?",
        opciones: [
            "A) El ataque coordinado de la competencia para acaparar proveedores exclusivos.",
            "B) La reducción en las ventas o participación de mercado de un producto existente de la propia empresa al introducir un nuevo producto sustituto.",
            "C) El cierre masivo de tiendas detallistas por quiebra financiera.",
            "D) La devolución de mercancías defectuosas a la fábrica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La canibalización ocurre cuando un nuevo lanzamiento de la propia marca le roba ventas y clientes a los productos ya establecidos de la misma empresa."
    },
    {
        id: 31,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de la mezcla de productos, ¿a qué se refiere la 'Amplitud' de la mezcla?",
        opciones: [
            "A) Al número total de líneas de productos diferentes que maneja la empresa.",
            "B) Al total de variantes o modelos ofrecidos dentro de una misma línea.",
            "C) A la durabilidad física de los materiales de fabricación.",
            "D) Al grado de cercanía o similitud entre las distintas líneas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La amplitud mide el número de líneas de productos distintas que comercializa una empresa en su cartera."
    },
    {
        id: 32,
        area: "Marketing Digital y Analítica",
        pregunta: "En el marketing de contenidos, ¿qué representa la creación de un 'Buyer Persona'?",
        opciones: [
            "A) El organigrama jerárquico del departamento de compras corporativas.",
            "B) Una representación semi-ficticia del cliente ideal basada en datos reales de investigación, comportamientos, necesidades y motivaciones.",
            "C) El registro contable de las compras realizadas por un cliente VIP.",
            "D) La lista de precios preferenciales para distribuidores mayoristas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El buyer persona es el arquetipo detallado del cliente ideal que orienta la estrategia de contenidos, tono y personalización de las campañas."
    },
    {
        id: 33,
        area: "Investigación de Mercados",
        pregunta: "En la investigación comercial, ¿cuál es la principal característica distintiva de la investigación 'Causal' (o experimental)?",
        opciones: [
            "A) Describir únicamente las características demográficas de un mercado objetivo.",
            "B) Explorar opiniones preliminares sin hipótesis estructuradas.",
            "C) Probar relaciones de causa y efecto mediante la manipulación deliberada de variables independientes y el control de variables extrañas.",
            "D) Recopilar datos históricos secundarios de bases gubernamentales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La investigación causal busca evidenciar relaciones de causa y efecto a través de diseños experimentales controlados."
    },
    {
        id: 34,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de comercialización omnicanal, ¿qué diferencia fundamental existe frente a la estrategia multicanal?",
        opciones: [
            "A) La multicanalidad opera sin canales digitales, mientras la omnicanalidad usa solo internet.",
            "B) La omnicanalidad integra y sincroniza de forma fluida y coherente todos los canales de contacto y venta, ofreciendo una experiencia unificada al consumidor.",
            "C) La multicanalidad prohíbe la venta en tiendas físicas tradicionales.",
            "D) No existe ninguna diferencia teórica ni práctica entre ambos conceptos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Mientras el enfoque multicanal utiliza varios canales independientes, el omnicanal los interconecta de forma holística para brindar una experiencia sin fricciones."
    },
    {
        id: 35,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el ciclo de vida del producto, ¿qué estrategia de marketing es típica de la fase de 'Introducción'?",
        opciones: [
            "A) Reducir drásticamente los gastos de publicidad para maximizar utilidades a corto plazo.",
            "B) Informar al mercado sobre la existencia del producto, estimular la prueba y asegurar la distribución inicial mediante fuerte inversión promocional.",
            "C) Diversificar la línea con múltiples modelos de bajo costo.",
            "D) Liquidar inventarios por fin de ciclo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En la introducción, el objetivo prioritario es crear conciencia de marca y estimular la prueba inicial del producto innovador."
    },
    {
        id: 36,
        area: "Marketing Digital y Analítica",
        pregunta: "En las métricas de comercio electrónico y modelos de suscripción, ¿qué mide el indicador CLV (Customer Lifetime Value o Valor de Vida del Cliente)?",
        opciones: [
            "A) El costo monetario de adquirir un nuevo cliente en redes sociales.",
            "B) El beneficio económico neto proyectado que generará un cliente durante toda la relación comercial con la empresa.",
            "C) El promedio de días que tarda un comprador en solicitar una devolución.",
            "D) La inversión total en campañas de remarketing anuales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CLV calcula el valor financiero total que aporta un cliente a lo largo de su relación temporal con la marca, orientando el presupuesto de retención."
    },
    {
        id: 37,
        area: "Investigación de Mercados",
        pregunta: "En la recopilación de datos primarios, ¿qué sesgo potencial se presenta cuando las preguntas de un cuestionario están redactadas de tal manera que orientan o inducen la respuesta del encuestador?",
        opciones: [
            "A) Sesgo de no respuesta.",
            "B) Sesgo de interrogación o pregunta capciosa/inductiva.",
            "C) Error de muestreo aleatorio.",
            "D) Sesgo de deserción en paneles longitudinales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las preguntas inductivas o sesgadas comprometen la validez de la investigación al manipular sutilmente la opinión del encuestado."
    },
    {
        id: 38,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la política de 'Descremado de Precios' (Price Skimming)?",
        opciones: [
            "A) Fijar un precio inicial alto para un producto nuevo e innovador con el fin de capturar el segmento de mayor poder adquisitivo, para luego reducirlo gradualmente.",
            "B) Establecer precios sumamente bajos para bloquear la entrada de competidores masivos.",
            "C) Cobrar tarifas diferenciadas según el código postal del comprador.",
            "D) Ofrecer gratuidad en el producto principal cobrando los accesorios."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El descremado busca maximizar ingresos iniciales apuntando a los segmentos menos sensibles al precio al lanzar innovaciones, bajando el precio después."
    },
    {
        id: 39,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el análisis de marca, ¿qué comprende la dimensión de la 'Personalidad de Marca' según Jennifer Aaker?",
        opciones: [
            "A) Las características físicas y dimensiones del empaque exterior.",
            "B) El conjunto de rasgos humanos asociados a una marca, clasificados en dimensiones como sinceridad, emoción, competencia, sofisticación y robustez.",
            "C) El registro legal de patentes y logotipos en el IMPI.",
            "D) El organigrama de los directores de mercadotecnia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Aaker conceptualizó la personalidad de marca atribuyendo características humanas que permiten al consumidor identificarse emocionalmente con ella."
    },
    {
        id: 40,
        area: "Marketing Digital y Analítica",
        pregunta: "En la estrategia de pauta publicitaria digital, ¿qué permite lograr una campaña de 'Remarketing' (o retargeting)?",
        opciones: [
            "A) Impactar exclusivamente a usuarios que jamás han escuchado hablar de la marca.",
            "B) Mostrar anuncios personalizados a aquellos usuarios que ya han interactuado previamente con el sitio web o aplicación, estimulando el cierre de la conversión.",
            "C) Bloquear de forma automática los comentarios negativos en redes sociales.",
            "D) Incrementar de manera orgánica el posicionamiento SEO en Google."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El remarketing reengancha a los visitantes anteriores que no convirtieron en su primera visita, recordándoles la oferta para concretar la compra."
    },
    {
        id: 41,
        area: "Investigación de Mercados",
        pregunta: "En los métodos de investigación de mercados cuantitativa, ¿qué ventaja fundamental ofrece el uso de un panel de consumidores frente a una encuesta transversal simple?",
        opciones: [
            "A) Permite registrar y rastrear los cambios en los hábitos de compra y comportamiento de los mismos individuos a lo largo del tiempo.",
            "B) Elimina por completo los costos operativos de recolección de datos en campo.",
            "C) Garantiza que no exista ningún tipo de error de muestreo ni sesgo de declaración.",
            "D) Sustituye la necesidad de definir un marco muestral probabilístico."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los paneles de consumidores rastrean de manera longitudinal a la misma muestra representativa, permitiendo estudiar tendencias, lealtad y evolución de consumo."
    },
    {
        id: 42,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución comercial, ¿en qué consiste la modalidad de distribución selectiva?",
        opciones: [
            "A) Colocar el producto masivamente en todos los puntos de venta disponibles sin restricciones.",
            "B) Utilizar un número reducido de intermediarios o distribuidores que cumplen con requisitos específicos de imagen, servicio o capacidad técnica en una zona.",
            "C) Vender los productos exclusivamente a través de distribuidores en línea extranjeros.",
            "D) Otorgar exclusividad total de venta a un solo intermediario en todo el continente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La distribución selectiva limita los puntos de venta a intermediarios seleccionados bajo criterios específicos, ideal para productos de especialidad o compra reflexiva."
    },
    {
        id: 43,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué define el concepto de 'Co-Branding' (marca conjunta)?",
        opciones: [
            "A) La fusión corporativa permanente de dos empresas multinacionales competidoras.",
            "B) La estrategia de asociar dos o más marcas reconocidas en un mismo producto o campaña de marketing para generar valor y sinergia ante el consumidor.",
            "C) El registro simultáneo de patentes ante el Instituto Mexicano de la Propiedad Industrial.",
            "D) La subcontratación de agencias de publicidad externas para el diseño de logotipos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El co-branding une el capital de dos marcas para crear una oferta conjunta atractiva, combinando fortalezas y audiencias de ambas."
    },
    {
        id: 44,
        area: "Marketing Digital y Analítica",
        pregunta: "En la gestión de contenidos y posicionamiento digital, ¿qué objetivo persigue principalmente el uso del 'Email Marketing' automatizado?",
        opciones: [
            "A) Enviar correos masivos indiscriminados sin segmentación a bases de datos compradas.",
            "B) Nutrir leads (prospectos) y fidelizar clientes mediante mensajes personalizados y oportunos activados por comportamientos específicos del usuario.",
            "C) Sustituir por completo las campañas publicitarias pagadas en redes sociales.",
            "D) Reemplazar el servicio de atención telefónica en centros de llamadas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El email marketing automatizado nutre la relación con el cliente mediante flujos dirigidos según las acciones y etapa del usuario en el embudo."
    },
    {
        id: 45,
        area: "Investigación de Mercados",
        pregunta: "En el diseño de cuestionarios, ¿qué característica principal poseen las preguntas abiertas?",
        opciones: [
            "A) Limitan las respuestas a categorías predeterminadas de opción múltiple.",
            "B) Permiten que el encuestado responda libremente con sus propias palabras, facilitando la exploración profunda pero dificultando la tabulación estadística directa.",
            "C) Son imposibles de codificar en investigaciones de mercados modernas.",
            "D) Garantizan que el tiempo de respuesta del cuestionario sea menor a un minuto."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las preguntas abiertas otorgan libertad total al encuestado para expresarse, enriqueciendo la información cualitativa a costa de requerir un proceso de codificación posterior."
    },
    {
        id: 46,
        area: "Comercialización y Ventas",
        pregunta: "En la fijación de precios, ¿en qué consiste la estrategia de 'Precios de Penetración'?",
        opciones: [
            "A) Fijar precios sumamente altos al lanzar el producto para recuperar la inversión rápidamente.",
            "B) Establecer precios artificialmente inflados para simular exclusividad.",
            "C) Fijar un precio inicial bajo para un producto nuevo con el propósito de capturar rápidamente una gran cuota de mercado y bloquear a la competencia.",
            "D) Mantener los precios fijos sin importar las variaciones de la oferta y la demanda."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La penetración de precios busca ganar volumen y participación de mercado masiva rápidamente mediante una tarifa inicial accesible."
    },
    {
        id: 47,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el ciclo de vida del producto, ¿cuáles son las características principales de la etapa de 'Declive'?",
        opciones: [
            "A) Crecimiento explosivo de ventas y beneficios récord.",
            "B) Estabilización del mercado con alta competencia en precios.",
            "C) Caída sostenida en las ventas y disminución drástica de los beneficios debido a cambios tecnológicos o en las preferencias del consumidor.",
            "D) Inversión publicitaria masiva en medios masivos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "En el declive, las ventas y utilidades caen de forma continuada, obligando a la empresa a planificar la retirada o reconversión del producto."
    },
    {
        id: 48,
        area: "Marketing Digital y Analítica",
        pregunta: "En la analítica web y medición de conversiones, ¿qué mide el modelo de atribución de 'Último Clic' (Last Click Attribution)?",
        opciones: [
            "A) Asigna el 100% del crédito de la conversión al último canal o punto de contacto con el que interactuó el usuario antes de comprar.",
            "B) Distribuye el crédito de la venta de forma equitativa entre todos los canales visitados.",
            "C) Reconoce únicamente el primer anuncio que vio el cliente en su vida.",
            "D) Mide el tiempo exacto que el usuario tardó en cerrar el navegador."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El modelo de último clic otorga toda la responsabilidad y mérito de la conversión al último punto de contacto previo a la compra."
    },
    {
        id: 49,
        area: "Investigación de Mercados",
        pregunta: "En el análisis de segmentación, ¿qué criterio define una segmentación de tipo 'Demográfica'?",
        opciones: [
            "A) Estilo de vida, personalidad y valores morales.",
            "B) Edad, género, nivel socioeconómico, tamaño de familia, ocupación y religión.",
            "C) Región geográfica, clima y densidad urbana.",
            "D) Tasa de uso, lealtad y beneficios buscados."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La segmentación demográfica divide al mercado mediante variables poblacionales objetivas como edad, género, ingresos y escolaridad."
    },
    {
        id: 50,
        area: "Comercialización y Ventas",
        pregunta: "En la mezcla de promoción, ¿qué diferencia a la 'Publicidad' de la 'Promoción de Ventas'?",
        opciones: [
            "A) La publicidad es un incentivo a corto plazo para estimular la compra inmediata, mientras que la promoción crea valor a largo plazo.",
            "B) La publicidad utiliza medios masivos para construir imagen de marca a largo plazo, mientras que la promoción de ventas ofrece incentivos de corto plazo para acelerar la compra.",
            "C) No existe diferencia operativa entre ambas herramientas.",
            "D) La publicidad se realiza exclusivamente mediante vendedores de mostrador."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La publicidad construye posicionamiento y notoriedad a mediano/largo plazo, en tanto que la promoción de ventas genera estímulos inmediatos de corto plazo (descuentos, cupones)."
    },
    {
        id: 51,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la cartera de productos (Matriz BCG), ¿cómo se definen los productos clasificados como 'Interrogantes' (o Niños Problema)?",
        opciones: [
            "A) Negocios con alta participación en mercados de crecimiento lento.",
            "B) Productos con baja participación de mercado en industrias de alto crecimiento, los cuales requieren cuantiosas inversiones para evitar su declive.",
            "C) Productos obsoletos que deben ser retirados de inmediato.",
            "D) Bienes de consumo masivo con flujos de caja netos positivos estables."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los productos interrogante operan en mercados dinámicos pero con baja cuota propia, demandando alta inversión para evaluar si se convierten en estrellas."
    },
    {
        id: 52,
        area: "Marketing Digital y Analítica",
        pregunta: "En el diseño de experiencias digitales, ¿qué significa la optimización de la tasa de conversión (CRO - Conversion Rate Optimization)?",
        opciones: [
            "A) Aumentar el presupuesto publicitario en Google Ads sin importar las visitas.",
            "B) El proceso sistemático de mejorar un sitio web o aplicación para incrementar el porcentaje de visitantes que realizan la acción deseada.",
            "C) Reducir el número de páginas vistas en el portal corporativo.",
            "D) Cambiar de servidor web para disminuir los costos de hospedaje."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CRO busca maximizar la eficiencia del tráfico existente mediante pruebas A/B y mejoras en la experiencia de usuario para elevar las conversiones."
    },
    {
        id: 53,
        area: "Investigación de Mercados",
        pregunta: "En el diseño de la investigación comercial, ¿cuál es la función de una investigación 'Exploratoria'?",
        opciones: [
            "A) Probar hipótesis causales y medir coeficientes de correlación estadística.",
            "B) Obtener información preliminar que ayude a definir problemas y sugerir hipótesis cuando el fenómeno es poco conocido.",
            "C) Medir la participación exacta de mercado de todas las marcas competidoras.",
            "D) Realizar auditorías contables financieras."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La investigación exploratoria se realiza ante temas poco estudiados para clarificar conceptos y formular hipótesis previas."
    },
    {
        id: 54,
        area: "Comercialización y Ventas",
        pregunta: "En la gestión de canales, ¿qué implica el conflicto de canal 'Vertical'?",
        opciones: [
            "A) Desacuerdos y disputas entre empresas competidoras del mismo nivel de mercado.",
            "B) Tensiones y desacuerdos entre diferentes niveles dentro del mismo canal de distribución (ej. fabricante y mayorista o detallista).",
            "C) Conflictos internos entre los vendedores de una misma sucursal.",
            "D) Problemas legales con las autoridades aduaneras."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El conflicto vertical ocurre entre distintos eslabones del canal de distribución, como cuando el fabricante compite con sus propios detallistas."
    },
    {
        id: 55,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el diseño de marcas, ¿qué función cumple el 'Logotipo' en la identidad visual corporativa?",
        opciones: [
            "A) Representar gráficamente el nombre de la marca mediante un diseño tipográfico característico y distintivo.",
            "B) Contener obligatoriamente los estados financieros auditados de la empresa.",
            "C) Funcionar como el manual técnico de producción industrial.",
            "D) Establecer los precios de venta al público en anaquel."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El logotipo es el elemento gráfico tipográfico que identifica visualmente el nombre de la marca, facilitando su reconocimiento."
    },
    {
        id: 56,
        area: "Marketing Digital y Analítica",
        pregunta: "En las campañas de pauta digital, ¿qué mide la métrica ROAS (Return on Ad Spend)?",
        opciones: [
            "A) El número de clics obtenidos por cada dólar invertido.",
            "B) Los ingresos generados por cada unidad monetaria invertida en publicidad digital.",
            "C) El costo total de producción de los artículos vendidos.",
            "D) El porcentaje de rebote de las páginas de destino."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El ROAS evalúa la eficacia financiera publicitaria midiendo los ingresos devengados en relación directa con el costo de la pauta."
    },
    {
        id: 57,
        area: "Investigación de Mercados",
        pregunta: "En el muestreo no probabilístico, ¿en qué consiste el 'Muestreo por Cuotas'?",
        opciones: [
            "A) Seleccionar la muestra de forma totalmente aleatoria mediante tómbola.",
            "B) Dividir a la población en Subgrupos con base en características específicas y seleccionar cuotas prefijadas de individuos según juicio del entrevistador.",
            "C) Elegir únicamente a los clientes que responden correos electrónicos de spam.",
            "D) Tomar al 100% de la población total censal."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El muestreo por cuotas fija proporciones específicas de subgrupos poblacionales a encuestar, asegurando representación en variables clave sin aleatoriedad pura."
    },
    {
        id: 58,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de marketing directo, ¿qué caracteriza a las acciones de telemarketing activo?",
        opciones: [
            "A) Esperar llamadas de clientes inconformes en un centro de soporte.",
            "B) Establecer contacto telefónico directo y proactivo con clientes potenciales o actuales para ofrecer productos, cerrar ventas o concertar citas.",
            "C) Enviar cartas impresas por correo postal tradicional.",
            "D) Publicar anuncios espectaculares en carreteras."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El telemarketing activo busca la comunicación proactiva y directa por vía telefónica para fines comerciales y de prospección."
    },
    {
        id: 59,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué significa la estrategia de 'Extensión de Marca' (Brand Extension)?",
        opciones: [
            "A) Usar una marca existente y reconocida para introducir un producto en una categoría completamente nueva y distinta.",
            "B) Ampliar el tamaño físico de la etiqueta del producto.",
            "C) Renovar el logotipo corporativo cada diez años.",
            "D) Vender la marca a una empresa multinacional extranjera."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La extensión de marca aprovecha el prestigio de un nombre consolidado para incursionar en una categoría de producto diferente (ej. marca de ropa lanzando perfumes)."
    },
    {
        id: 60,
        area: "Marketing Digital y Analítica",
        pregunta: "En el marketing de motores de búsqueda, ¿qué diferencia principal existe entre SEO y SEM?",
        opciones: [
            "A) El SEO es el posicionamiento orgánico en buscadores basado en optimización, mientras que el SEM abarca las estrategias de pauta y anuncios pagos en buscadores.",
            "B) El SEO requiere pago por cada clic, mientras el SEM es totalmente gratuito.",
            "C) El SEM solo funciona en redes sociales y el SEO en correos electrónicos.",
            "D) No existe diferencia técnica entre ambos acrónimos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El SEO busca resultados orgánicos no pagados mediante optimización, en tanto el SEM engloba la pauta publicitaria pagada en motores de búsqueda."
    },
    {
        id: 61,
        area: "Investigación de Mercados",
        pregunta: "En el comportamiento del consumidor, ¿qué factores influyen de manera directa en la decisión de compra según el modelo de Kotler?",
        opciones: [
            "A) Únicamente los factores climáticos estacionales.",
            "B) Factores culturales, sociales, personales y psicológicos.",
            "C) Exclusivamente el nivel salarial macroeconómico del país.",
            "D) Las políticas fiscales de importación aduanera."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El comportamiento del consumidor se explica a través de la interacción de factores culturales, sociales, personales y psicológicos."
    },
    {
        id: 62,
        area: "Comercialización y Ventas",
        pregunta: "En la gestión logística y comercial, ¿qué función cumple un centro de distribución (CEDIS)?",
        opciones: [
            "A) Exhibir productos al menudeo para clientes de paso en avenidas principales.",
            "B) Almacenar, consolidar, gestionar inventarios y despachar eficientemente mercancías hacia los puntos de venta o clientes finales.",
            "C) Diseñar las campañas publicitarias en televisión.",
            "D) Realizar la contabilidad fiscal anual de la corporación."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CEDIS optimiza la cadena de suministro gestionando almacenamiento, preparación de pedidos y despachos logísticos."
    },
    {
        id: 63,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el desarrollo de nuevos productos, ¿qué busca comprobar una 'Prueba de Concepto' (Concept Testing)?",
        opciones: [
            "A) Evaluar la reacción de los consumidores ante la idea o descripción de un producto propuesto antes de invertir en su desarrollo físico.",
            "B) Auditar los estados contables de la planta piloto.",
            "C) Calcular los impuestos federales de importación.",
            "D) Determinar el diseño exacto del empaque de cartón."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba de concepto valida el atractivo de la idea de producto ante el público objetivo de manera anticipada al desarrollo del prototipo."
    },
    {
        id: 64,
        area: "Marketing Digital y Analítica",
        pregunta: "En las métricas de redes sociales, ¿qué representa el 'Alcance' (Reach) de una publicación?",
        opciones: [
            "A) El número total de veces que se mostró el anuncio en las pantallas.",
            "B) El número total de usuarios únicos que vieron la publicación o contenido al menos una vez.",
            "C) La cantidad de clics que recibió el enlace adjunto.",
            "D) El promedio de comentarios positivos obtenidos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El alcance mide la audiencia neta o número de personas únicas expuestas al contenido, a diferencia de las impresiones que cuentan visualizaciones totales."
    },
    {
        id: 65,
        area: "Investigación de Mercados",
        pregunta: "En la investigación comercial, ¿qué implica el uso de 'Datos Secundarios'?",
        opciones: [
            "A) Recopilar datos directamente de los consumidores mediante encuestas de campo originales.",
            "B) Utilizar información ya existente que fue recopilada previamente por otros investigadores o instituciones para otros propósitos.",
            "C) Descartar toda la información estadística gubernamental.",
            "D) Realizar experimentos de laboratorio con pacientes clínicos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los datos secundarios provienen de fuentes preexistentes (censos, reportes sectoriales, estudios previos), ahorrando tiempo y costos en la investigación."
    },
    {
        id: 66,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la fijación de precios por 'Línea de Productos'?",
        opciones: [
            "A) Establecer una jerarquía de precios escalonados entre los diferentes productos que componen una misma línea, reflejando diferencias en calidad o características.",
            "B) Cobrar el mismo precio exacto a todos los artículos sin importar su costo.",
            "C) Ofrecer descuentos permanentes del 90% en inventarios antiguos.",
            "D) Fijar precios basados exclusivamente en la inflación cambiaria."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La fijación por línea de productos establece intervalos de precios coherentes entre los distintos modelos de una misma gama para orientar al consumidor."
    },
    {
        id: 67,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué indica la lealtad de marca (Brand Loyalty)?",
        opciones: [
            "A) La indiferencia del consumidor ante cambios en el diseño del empaque.",
            "B) El grado de compromiso y repetición de compra que muestra un consumidor hacia una marca específica a lo largo del tiempo.",
            "C) La obligación legal de comprar un producto por contrato.",
            "D) El número de reclamaciones atendidas en el área de garantías."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La lealtad de marca refleja la resistencia del consumidor a cambiar de opción y su preferencia constante por adquirir la misma marca."
    },
    {
        id: 68,
        area: "Marketing Digital y Analítica",
        pregunta: "En la analítica web, ¿qué utilidad principal tiene el establecimiento de 'Objetivos de Conversión' (Goals) en plataformas como Google Analytics?",
        opciones: [
            "A) Medir cuántos usuarios abandonan la página en los primeros tres segundos.",
            "B) Rastrear y cuantificar el cumplimiento de acciones clave del negocio (como registros, compras o descargas) para evaluar el rendimiento digital.",
            "C) Modificar el código fuente HTML de la página web de forma automática.",
            "D) Reducir el consumo de ancho de banda del servidor."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los objetivos de conversión permiten medir el éxito de la estrategia digital cuantificando las acciones críticas completadas por los usuarios."
    },
    {
        id: 69,
        area: "Investigación de Mercados",
        pregunta: "En el análisis de datos, ¿para qué se utiliza principalmente el análisis de regresión lineal en marketing?",
        opciones: [
            "A) Para modelar y cuantificar la relación estadística entre una variable dependiente (ej. ventas) y una o más variables independientes (ej. gasto publicitario).",
            "B) Para clasificar textos cualitativos de entrevistas de forma aleatoria.",
            "C) Para calcular el tamaño de la muestra de un cuestionario.",
            "D) Para eliminar los valores extremos en encuestas de satisfacción."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La regresión lineal permite predecir y explicar el comportamiento de una variable de interés en función de factores predictores o independientes."
    },
    {
        id: 70,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución, ¿qué es un canal de distribución 'Directo' (Canal Nivel Cero)?",
        opciones: [
            "A) Aquel donde intervienen tres mayoristas diferentes antes del consumidor.",
            "B) Aquel en el que el productor vende sus bienes o servicios directamente al consumidor final sin la participación de intermediarios.",
            "C) Aquel operado exclusivamente por agencias comisionistas externas.",
            "D) Aquel que utiliza tiendas departamentales minoristas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El canal directo (nivel cero) implica la venta directa del fabricante al consumidor final (ej. tiendas de fábrica o e-commerce propio)."
    },
    {
        id: 71,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el análisis de cartera, ¿qué caracteriza a los productos clasificados como 'Perros' (o Huesos) en la Matriz BCG?",
        opciones: [
            "A) Alta participación en mercados de alto crecimiento con grandes utilidades.",
            "B) Baja participación en mercados de bajo crecimiento, generando pocos recursos o incluso pérdidas, por lo que suelen ser descontinuados.",
            "C) Productos nuevos en fase de lanzamiento con alta expectativa.",
            "D) Marcas líderes con exclusividad internacional."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los productos perro tienen baja cuota en mercados estancados, aportando poco valor financiero y siendo candidatos ideales para su eliminación."
    },
    {
        id: 72,
        area: "Marketing Digital y Analítica",
        pregunta: "En el marketing de influencers, ¿qué ventaja estratégica ofrecen los denominados 'Micro-influencers' frente a las celebridades masivas?",
        opciones: [
            "A) Cuentan con millones de seguidores globales desinteresados en nichos específicos.",
            "B) Poseen comunidades más especializadas, tasas de engagement superiores y mayor cercanía y credibilidad con su audiencia.",
            "C) Sus tarifas publicitarias son siempre equivalentes a las de la televisión nacional.",
            "D) No requieren ningún tipo de compensación económica ni contrato."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los micro-influencers destacan por comunidades de nicho muy comprometidas, logrando tasas de interacción y confianza superiores a menor costo."
    },
    {
        id: 73,
        area: "Investigación de Mercados",
        pregunta: "En la investigación cualitativa, ¿en qué consiste la técnica de 'Entrevista a Profundidad'?",
        opciones: [
            "A) Una encuesta telefónica masiva de opción múltiple aplicada a 5,000 personas.",
            "B) Una conversación individual, semiestructurada y flexible entre un entrevistador experto y un sujeto, orientada a explorar motivaciones y vivencias personales.",
            "C) La observación pasiva de consumidores en supermercados sin interactuar.",
            "D) Un test estadístico de hipótesis paramétricas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La entrevista a profundidad es una técnica cualitativa individual que explora a detalle las percepciones y motivaciones ocultas del entrevistado."
    },
    {
        id: 74,
        area: "Comercialización y Ventas",
        pregunta: "En la administración comercial, ¿qué mide la rotación de inventarios en el contexto del canal de distribución?",
        opciones: [
            "A) El número de veces que el inventario se vende y se reemplaza en un periodo determinado, reflejando la eficiencia en la gestión de almacén.",
            "B) El costo de transporte de mercancías hacia la frontera.",
            "C) La cantidad de empleados contratados por temporada de ventas.",
            "D) El porcentaje de devoluciones por defectos de fábrica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La rotación de inventarios indica la velocidad con la que se comercializa la mercancía almacenada, clave para la eficiencia de capital de trabajo."
    },
    {
        id: 75,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la estrategia de empaque, ¿qué función cumple el 'Envase Primario'?",
        opciones: [
            "A) Contener y proteger directamente al producto en su presentación de consumo unitario (ej. la botella que contiene el refresco).",
            "B) Agrupar cajas de cartón para su transporte en tráileres.",
            "C) Exhibir publicidad institucional en espectaculares exteriores.",
            "D) Almacenar tarimas completas en centros logísticos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El envase primario es la envoltura o recipiente que está en contacto directo con el producto para su contención y venta unitaria."
    },
    {
        id: 76,
        area: "Marketing Digital y Analítica",
        pregunta: "En las estrategias de pauta publicitaria digital, ¿qué significa la segmentación por 'Públicos Similares' (Lookalike Audiences)?",
        opciones: [
            "A) Dirigir anuncios a personas con perfiles demográficos e intereses muy similares a los clientes actuales o mejores compradores de la marca.",
            "B) Mostrar la misma publicidad a todos los usuarios de internet sin distinción.",
            "C) Copiar los diseños de los anuncios de la competencia directa.",
            "D) Reutilizar las bases de datos de correos electrónicos antiguos bloqueados."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los públicos similares permiten encontrar nuevos prospectos con características de navegación y perfiles afines a los mejores clientes existentes de la marca."
    },
    {
        id: 77,
        area: "Investigación de Mercados",
        pregunta: "En el proceso de investigación de mercados, ¿cuál es el paso que debe realizarse inmediatamente después de definir el problema de investigación y los objetivos?",
        opciones: [
            "A) Redactar el informe final con recomendaciones gerenciales.",
            "B) Desarrollar el enfoque o diseño del problema y la metodología de investigación.",
            "C) Imprimir los cuestionarios definitivos para campo.",
            "D) Contratar al personal de ventas corporativas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Tras plantear el problema y objetivos, se procede a diseñar la metodología de investigación adecuada para resolverlo."
    },
    {
        id: 78,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la técnica de 'Precio por Paquete' (Bundle Pricing)?",
        opciones: [
            "A) Vender varios productos o servicios juntos por un precio global inferior a la suma de comprarlos por separado.",
            "B) Incrementar el precio de un artículo por cada unidad adicional que se compre.",
            "C) Ocultar el precio real del producto hasta que el cliente pague en caja.",
            "D) Modificar el precio de forma diaria según el clima."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El bundle pricing agrupa diversos productos en una sola oferta con descuento conjunto, estimulando un mayor volumen de compra."
    },
    {
        id: 79,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué comprende el concepto de 'Identidad de Marca'?",
        opciones: [
            "A) La forma en que los consumidores perciben subjetivamente a la empresa en su mente.",
            "B) El conjunto de elementos tangibles y simbólicos creados deliberadamente por la empresa para proyectar una imagen y personalidad deseada.",
            "C) El registro contable de las marcas en la bolsa de valores.",
            "D) El costo de producción de los artículos defectuosos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La identidad de marca es la propuesta de valor y elementos diseñados por la empresa (nombre, logotipo, valores), a diferencia de la imagen que es la percepción del público."
    },
    {
        id: 80,
        area: "Marketing Digital y Analítica",
        pregunta: "En la analítica digital aplicada a redes sociales, ¿qué mide la tasa de crecimiento de la audiencia (Audience Growth Rate)?",
        opciones: [
            "A) El porcentaje de nuevos seguidores obtenidos en un canal social durante un periodo, en relación con el tamaño total de la audiencia previa.",
            "B) El aumento del presupuesto publicitario mensual en campañas de display.",
            "C) La velocidad de carga de los videos en formato reel.",
            "D) El número de veces que se comparte un posteo viral."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La tasa de crecimiento de la audiencia mide cuán rápido está expandiéndose la comunidad de seguidores en las plataformas digitales."
    },
    {
        id: 81,
        area: "Investigación de Mercados",
        pregunta: "En el análisis multivariado aplicado a la investigación de mercados, ¿para qué se utiliza fundamentalmente la técnica de Análisis Factorial Exploratorio?",
        opciones: [
            "A) Para reducir un conjunto amplio de variables correlacionadas en un número menor de factores o dimensiones subyacentes.",
            "B) Para calcular la media aritmética ponderada de las ventas trimestrales.",
            "C) Para realizar experimentos controlados en laboratorios de empaque físico.",
            "D) Para calcular la desviación estándar de la población total censal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El análisis factorial exploratorio reduce la dimensionalidad de los datos agrupando variables altamente correlacionadas en factores latentes comunes."
    },
    {
        id: 82,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución comercial, ¿qué caracteriza a un canal de distribución largo?",
        opciones: [
            "A) La venta directa del fabricante al consumidor final sin intermediarios.",
            "B) La participación de múltiples intermediarios en cadena (productor, mayorista, distribuidor, detallista) antes de llegar al consumidor final.",
            "C) La utilización exclusiva de plataformas digitales de comercio electrónico B2C.",
            "D) La ausencia total de costos logísticos de transporte."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El canal largo involucra a varios eslabones o intermediarios entre la producción y el consumo masivo, común en productos de consumo masivo y baja rotación unitaria especializada."
    },
    {
        id: 83,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el diseño de estrategias corporativas, ¿en qué consiste la diversificación concéntrica (relacionada)?",
        opciones: [
            "A) Adquirir empresas competidoras directas en el mismo mercado geográfico.",
            "B) Desarrollar nuevos productos que guarden relación tecnológica o comercial con las líneas existentes de la empresa, aunque se dirijan a nuevos mercados.",
            "C) Reducir la producción de todas las líneas para bajar costos operativos.",
            "D) Mantener el mismo producto sin modificaciones durante décadas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La diversificación concéntrica introduce nuevos productos relacionados con el know-how técnico o comercial actual de la organización."
    },
    {
        id: 84,
        area: "Marketing Digital y Analítica",
        pregunta: "En la optimización de campañas publicitarias digitales, ¿qué mide la métrica denominada CPA (Costo por Adquisición)?",
        opciones: [
            "A) El costo total de la pauta publicitaria dividido entre el número de conversiones o clientes adquiridos.",
            "B) El precio unitario de fabricación del producto físico.",
            "C) El costo de mantenimiento de los servidores web de la tienda en línea.",
            "D) El salario promedio mensual del equipo de analistas digitales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El CPA evalúa la eficiencia financiera de la inversión publicitaria calculando el costo monetario necesario para lograr una conversión exitosa."
    },
    {
        id: 85,
        area: "Investigación de Mercados",
        pregunta: "En la medición de actitudes del consumidor, ¿qué evalúa una escala de Likert?",
        opciones: [
            "A) La distancia física en kilómetros desde el hogar del consumidor hasta el punto de venta.",
            "B) El grado de acuerdo o desacuerdo de los encuestados ante una serie de afirmaciones mediante un continuo ordinal.",
            "C) El peso exacto en kilogramos de las compras realizadas al mes.",
            "D) El tiempo cronológico exacto de visualización de un anuncio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La escala de Likert mide la intensidad de las actitudes y opiniones del consumidor mediante afirmaciones valoradas en un rango continuo."
    },
    {
        id: 86,
        area: "Comercialización y Ventas",
        pregunta: "En la administración de ventas, ¿en qué consiste la técnica de compensación de fuerza de ventas conocida como 'Comisión Pura'?",
        opciones: [
            "A) Un pago fijo mensual independiente de las ventas realizadas.",
            "B) Un esquema donde los ingresos del vendedor se derivan estrictamente de un porcentaje o cantidad fija por cada venta o transacción concretada, sin sueldo base garantizado.",
            "C) Una prestación médica anual obligatoria por ley.",
            "D) Un bono de puntualidad por asistencia matutina."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La comisión pura remunera al vendedor exclusivamente en función de su rendimiento en ventas, transfiriendo riesgo y estimulando la productividad."
    },
    {
        id: 87,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el análisis de cartera de productos, ¿qué son los productos 'Estrellas' dentro de la Matriz BCG?",
        opciones: [
            "A) Productos con baja participación en mercados de bajo crecimiento que generan pérdidas.",
            "B) Unidades de negocio con alta participación en mercados de alto crecimiento, los cuales requieren fuertes inversiones para sostener su liderazgo.",
            "C) Bienes obsoletos próximos a ser retirados del catálogo.",
            "D) Inversiones financieras en acciones de la competencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los productos estrella lideran mercados en expansión, requiriendo inversión continua para mantener su ventaja competitiva antes de volverse vacas lecheras."
    },
    {
        id: 88,
        area: "Marketing Digital y Analítica",
        pregunta: "En la gestión de redes sociales y marketing de contenidos, ¿qué mide la Tasa de Engagement (Engagement Rate)?",
        opciones: [
            "A) La cantidad de dinero gastada en servidores en la nube.",
            "B) El nivel de interacción, compromiso y participación de la audiencia en relación con el alcance o tamaño de la comunidad.",
            "C) El número total de correos electrónicos rebotados.",
            "D) La velocidad de carga del sitio web en teléfonos móviles."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tasa de engagement cuantifica el grado en que los usuarios interactúan (comentan, comparten, dan like) con los contenidos publicados."
    },
    {
        id: 89,
        area: "Investigación de Mercados",
        pregunta: "En la investigación comercial, ¿cuál es el propósito de realizar una prueba piloto (pretest) de un cuestionario?",
        opciones: [
            "A) Detectar errores de redacción, ambigüedades, problemas de flujo y estimar el tiempo de aplicación antes del trabajo de campo definitivo.",
            "B) Imprimir el reporte final de ventas para la junta directiva.",
            "C) Sustituir la muestra probabilística por un censo nacional.",
            "D) Calcular los impuestos corporativos de la agencia de investigación."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba piloto evalúa la funcionalidad del cuestionario en un grupo pequeño similar al objetivo para corregir fallas metodológicas antes de la aplicación masiva."
    },
    {
        id: 90,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de mezcla comercial, ¿cómo se define el concepto de 'Merchandising' de seducción en el punto de venta?",
        opciones: [
            "A) El almacenamiento de mercancías en tarimas de madera en zonas lejanas.",
            "B) El conjunto de estímulos visuales, sensoriales, ambientales y de diseño interior creados en el establecimiento para inducir el deseo de compra y prolongar la estancia del cliente.",
            "C) La contratación de guardias de seguridad privada para evitar robos hormiga.",
            "D) La elaboración de facturas fiscales electrónicas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El merchandising de seducción actúa sobre el ambiente físico (música, iluminación, aromas, diseño) para propiciar una experiencia emocional favorable a la compra."
    },
    {
        id: 91,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la arquitectura de marcas, ¿qué define una estrategia de 'Marcas Individuales' (o de casa independiente)?",
        opciones: [
            "A) Utilizar un nombre corporativo único para todos los productos de la empresa.",
            "B) Asignar nombres de marca diferentes y propios a cada uno de los productos lanzados por la empresa, sin vincularlos a la marca corporativa.",
            "C) Comercializar exclusivamente productos genéricos sin marca.",
            "D) Comprar franquicias internacionales de comida rápida."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La estrategia de marcas individuales dota a cada producto de una identidad propia e independiente, protegiendo a la corporación ante posibles fracasos de un artículo."
    },
    {
        id: 92,
        area: "Marketing Digital y Analítica",
        pregunta: "En el comercio electrónico, ¿qué mide la métrica de 'Tasa de Abandono del Carrito de Compras'?",
        opciones: [
            "A) El porcentaje de clientes que devuelven la mercancía tras recibirla en su domicilio.",
            "B) El porcentaje de usuarios que añaden productos al carrito de compra en una tienda online pero que abandonan el sitio antes de completar la transacción de pago.",
            "C) La cantidad de clics perdidos en banners publicitarios externos.",
            "D) El número de cancelaciones de suscripción a newsletters corporativos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tasa de abandono de carrito mide cuántos usuarios iniciaron el proceso de compra pero se detuvieron antes de concretarlo, indicando fricciones en el embudo."
    },
    {
        id: 93,
        area: "Investigación de Mercados",
        pregunta: "En el diseño de la investigación, ¿qué diferencia existe entre los datos primarios y los datos secundarios?",
        opciones: [
            "A) Los datos primarios son recopilados por primera vez para resolver el problema específico de investigación, mientras que los secundarios ya existen y fueron recabados previamente para otros fines.",
            "B) Los datos primarios son siempre gratuitos y los secundarios muy costosos.",
            "C) Los datos secundarios provienen exclusivamente de entrevistas cualitativas profundas.",
            "D) No existe diferencia metodológica entre ambos tipos de datos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los datos primarios se obtienen ad-hoc para el estudio en curso, en tanto los secundarios se aprovechan de fuentes preexistentes documentadas."
    },
    {
        id: 94,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la política de 'Precio Líder de Pérdidas' (Loss Leader)?",
        opciones: [
            "A) Vender todos los productos de la tienda por debajo de su costo de producción de forma permanente.",
            "B) Ofrecer algunos productos muy conocidos a precios sumamente bajos (incluso con pérdida) para atraer tráfico masivo al establecimiento con la expectativa de que los clientes compren otros artículos rentables.",
            "C) Ocultar el precio real de los productos hasta el momento de la entrega final.",
            "D) Fijar tarifas exclusivas para clientes gubernamentales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El loss leader utiliza productos gancho muy baratos para dinamizar el tráfico comercial, compensando el margen con la venta cruzada de otros artículos."
    },
    {
        id: 95,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marca, ¿qué comprende el concepto de 'Brand Equity' (Capital de Marca)?",
        opciones: [
            "A) El valor total de los terrenos y maquinaria industrial de la fábrica.",
            "B) El valor añadido que se otorga a un producto o servicio como resultado de la fuerza, reputación y asociaciones mentales que la marca posee en la mente del consumidor.",
            "C) El presupuesto anual destinado al pago de impuestos corporativos.",
            "D) El número de patentes registradas ante tribunales internacionales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El brand equity representa el valor intangible diferencial que aporta la marca al producto basándose en la percepción y lealtad del consumidor."
    },
    {
        id: 96,
        area: "Marketing Digital y Analítica",
        pregunta: "En la estrategia de pauta digital, ¿qué permite lograr la funcionalidad de 'Segmentación por Listas de Clientes' (Customer Match)?",
        opciones: [
            "A) Impactar con anuncios personalizados en plataformas digitales a usuarios cuyas direcciones de correo o teléfonos ya forman parte de la base de datos propia de la empresa.",
            "B) Enviar correos masivos a usuarios totalmente desconocidos mediante spam.",
            "C) Bloquear los anuncios para que ningún cliente actual pueda visualizarlos.",
            "D) Descargar reportes financieros contables de la competencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Customer Match permite cruzar bases de datos propias de clientes con plataformas publicitarias digitales para realizar retargeting o campañas dirigidas."
    },
    {
        id: 97,
        area: "Investigación de Mercados",
        pregunta: "En los métodos de muestreo probabilístico, ¿en qué consiste el 'Muestreo Aleatorio Estratificado'?",
        opciones: [
            "A) Seleccionar a los individuos que se encuentren más cerca de la puerta de salida.",
            "B) Dividir la población en subgrupos homogéneos (estratos) y extraer muestras aleatorias independientes de cada estrato para asegurar representación.",
            "C) Elegir al azar un número inicial y seleccionar a cada k-ésimo elemento.",
            "D) Tomar como muestra exclusiva a los directivos de la empresa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El muestreo estratificado divide a la población en subgrupos con características comunes (estratos) y muestrea aleatoriamente en cada uno, garantizando precisión."
    },
    {
        id: 98,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución, ¿qué define el sistema de 'Franquicias'?",
        opciones: [
            "A) Un acuerdo comercial donde el franquiciador otorga al franquiciado el derecho de comercializar un producto o servicio bajo su marca y modelo de negocio probado, a cambio de regalías y tarifas.",
            "B) La venta clandestina de mercancías sin registro fiscal.",
            "C) La importación libre de aranceles aduaneros entre países vecinos.",
            "D) La distribución exclusiva de productos a través de agentes gubernamentales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La franquicia es un modelo de expansión comercial donde se cede el derecho de explotación de un modelo de negocio estandarizado y marca consolidada."
    },
    {
        id: 99,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué indica una estrategia de 'Extensión de Línea'?",
        opciones: [
            "A) Introducir nuevos artículos dentro de una categoría de producto ya existente bajo la misma marca (ej. nuevos sabores, tamaños o presentaciones).",
            "B) Lanzar una categoría de productos completamente ajena bajo un nombre desconocido.",
            "C) Cambiar la razón social de la empresa corporativa matriz.",
            "D) Retirar del mercado todas las variantes de un producto obsoleto."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La extensión de línea añade variantes dentro de la misma categoría de productos usando el nombre de marca ya establecido."
    },
    {
        id: 100,
        area: "Marketing Digital y Analítica",
        pregunta: "En analítica web, ¿cómo se define la métrica de 'Páginas Vistas' (Pageviews)?",
        opciones: [
            "A) El número total de usuarios únicos que ingresaron al sitio web al mes.",
            "B) El recuento total de páginas web visualizadas o cargadas por los usuarios en un sitio; si un usuario visita la misma página varias veces, cada visita cuenta como una página vista.",
            "C) El porcentaje de rebote acumulado de la sesión.",
            "D) El costo monetario por cada clic en anuncios de display."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las páginas vistas contabilizan el número total de visualizaciones de páginas en el sitio, registrando recargas y visitas repetidas del mismo usuario."
    },
    {
        id: 101,
        area: "Investigación de Mercados",
        pregunta: "En el análisis de datos cuantitativos, ¿para qué se utiliza la prueba estadística de Chi-cuadrada ($\chi^2$)?",
        opciones: [
            "A) Para evaluar si existe una asociación estadísticamente significativa entre dos variables categóricas o nominales.",
            "B) Para calcular el promedio exacto de los ingresos salariales.",
            "C) Para medir la temperatura ambiental en experimentos de laboratorio.",
            "D) Para descontar flujos de efectivo futuros en proyectos de inversión."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba de Chi-cuadrada contrasta hipótesis sobre la independencia o asociación entre variables cualitativas o categóricas."
    },
    {
        id: 102,
        area: "Comercialización y Ventas",
        pregunta: "En la mezcla promocional, ¿qué función cumple la herramienta de 'Venta Personal'?",
        opciones: [
            "A) Transmitir mensajes masivos impersonales a millones de televidentes.",
            "B) Establecer una comunicación interpersonal directa y bidireccional entre el representante de ventas y el cliente potencial para persuadir y cerrar transacciones.",
            "C) Publicar comunicados de prensa en periódicos locales.",
            "D) Ofrecer cupones de descuento impresos en empaques."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La venta personal se distingue por la interacción humana directa y personalizada, adaptando el argumento comercial a las objeciones específicas del comprador."
    },
    {
        id: 103,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el ciclo de vida del producto, ¿cuál es la característica primordial de la etapa de 'Crecimiento'?",
        opciones: [
            "A) Caída estrepitosa de ventas y cierre de plantas productivas.",
            "B) Rápido incremento en el volumen de ventas, aceptación creciente en el mercado y aparición inicial de competidores atraídos por la rentabilidad.",
            "C) Estabilización total del mercado con estancamiento de la demanda.",
            "D) Ausencia absoluta de costos de distribución."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La etapa de crecimiento muestra un despegue acelerado de las ventas, economías de escala y la entrada de nuevos competidores al mercado."
    },
    {
        id: 104,
        area: "Marketing Digital y Analítica",
        pregunta: "En la estrategia de optimización para motores de búsqueda (SEO), ¿a qué se refiere el término 'Link Building'?",
        opciones: [
            "A) Al diseño gráfico de los botones de llamada a la acción en la web.",
            "B) A la estrategia orientada a conseguir que otros sitios web externos enlacen hacia las páginas del portal propio, incrementando su autoridad y posicionamiento orgánico.",
            "C) Al pago por clic en campañas de anuncios patrocinados de Google.",
            "D) A la velocidad de transferencia de archivos pesados en servidores."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El link building construye una red de enlaces externos (backlinks) hacia el sitio web, señalando relevancia y autoridad ante los algoritmos de búsqueda."
    },
    {
        id: 105,
        area: "Investigación de Mercados",
        pregunta: "En la investigación comercial, ¿qué sesgo se genera cuando una proporción significativa de los sujetos seleccionados en la muestra se niega a responder o no puede ser localizada?",
        opciones: [
            "A) Sesgo de no respuesta (Non-response bias).",
            "B) Sesgo de deseabilidad social.",
            "C) Error de transcripción dactilográfica.",
            "D) Sesgo de codificación cualitativa."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El sesgo de no respuesta surge cuando los individuos que no responden difieren sistemáticamente de los que sí lo hacen, distorsionando la representatividad."
    },
    {
        id: 106,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de precios, ¿en qué consiste la fijación de precios basada en el 'Costo Plus' (Cost-Plus Pricing)?",
        opciones: [
            "A) Calcular el costo total unitario de producción y añadir un porcentaje o margen fijo de utilidad deseada para determinar el precio de venta.",
            "B) Fijar el precio exclusivamente observando lo que cobra la competencia internacional.",
            "C) Cobrar tarifas variables según el estado de ánimo del consumidor.",
            "D) Omitir los costos fijos al calcular los márgenes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El método cost-plus suma un margen de beneficio predeterminado al costo total unitario de fabricación o adquisición del bien."
    },
    {
        id: 107,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué comprende el concepto de 'Posicionamiento' según Al Ries y Jack Trout?",
        opciones: [
            "A) La ubicación física de los anaqueles en el supermercado minorista.",
            "B) El lugar mental que ocupa la marca o producto en la percepción del consumidor en relación con sus competidores directos.",
            "C) El registro legal de patentes en la secretaría de economía.",
            "D) El tamaño de la flota de camiones de reparto logístico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El posicionamiento es el espacio diferencial y distintivo que ocupa la marca en la mente del consumidor frente a las alternativas del mercado."
    },
    {
        id: 108,
        area: "Marketing Digital y Analítica",
        pregunta: "En las métricas publicitarias digitales, ¿qué mide el indicador CPM (Costo por Mil)?",
        opciones: [
            "A) El costo económico total necesario para obtener mil conversiones de venta finalizadas.",
            "B) El costo monetario pagado por cada mil impresiones o visualizaciones que recibe un anuncio publicitario.",
            "C) El promedio de clics diarios obtenidos en mil páginas web.",
            "D) La comisión por ventas para mil representantes comerciales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CPM calcula el costo publicitario por cada mil veces que el anuncio es mostrado o impreso ante los usuarios."
    },
    {
        id: 109,
        area: "Investigación de Mercados",
        pregunta: "En el diseño de escalas de medición, ¿qué evalúa una escala nominal?",
        opciones: [
            "A) Una jerarquía u orden estricto de preferencias de mayor a menor.",
            "B) Una clasificación de los objetos en categorías mutuamente excluyentes y colectivamente exhaustivas donde los números solo sirven como etiquetas de identificación (sin jerarquía ni operaciones aritméticas).",
            "C) Intervalos con un cero absoluto real.",
            "D) Proporciones continuas de peso y estatura."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La escala nominal clasifica elementos en categorías etiquetadas sin implicar orden cuantitativo ni relaciones numéricas de magnitud (ej. género, nacionalidad)."
    },
    {
        id: 110,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de distribución, ¿qué es la 'Logística Inversa'?",
        opciones: [
            "A) El proceso de planificación y gestión del flujo de mercancías desde el punto de consumo de regreso hacia el punto de origen, para su recuperación, reciclaje o disposición final.",
            "B) El transporte de carga pesada exclusivamente de madrugada.",
            "C) La exportación masiva de productos hacia mercados asiáticos.",
            "D) La distribución directa de fábrica a tiendas de conveniencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La logística inversa gestiona el retorno de productos desde el cliente final (devoluciones, reciclaje, garantías, obsolescencia) hacia la cadena de suministro."
    },
    {
        id: 111,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el análisis de cartera de productos (Matriz BCG), ¿cómo se clasifican los productos 'Vacas Lecheras'?",
        opciones: [
            "A) Baja participación en mercados de alto crecimiento.",
            "B) Alta participación en mercados de bajo crecimiento (maduros), generando altos flujos de efectivo estables con baja necesidad de inversión.",
            "C) Productos nuevos en fase experimental.",
            "D) Negocios con pérdidas crónicas que deben liquidarse."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las vacas lecheras generan abundantes recursos financieros con mínima inversión debido a su sólida cuota en mercados maduros."
    },
    {
        id: 112,
        area: "Marketing Digital y Analítica",
        pregunta: "En el marketing de contenidos, ¿qué representa el embudo de conversión (Marketing Funnel) en sus fases clásicas TOFU, MOFU y BOFU?",
        opciones: [
            "A) Las etapas secuenciales por las que pasa un usuario desde el descubrimiento de su problema (TOFU), pasando por la consideración de soluciones (MOFU), hasta la decisión de compra (BOFU).",
            "B) Los formatos técnicos de compresión de videos para redes sociales.",
            "C) Las tarifas de cobro por clics en Google Ads según la temporada.",
            "D) El organigrama de los directores de tecnología."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El embudo clásico (TOFU: parte alta, MOFU: parte media, BOFU: parte baja) guía la estrategia de contenidos según la madurez del prospecto hacia la conversión."
    },
    {
        id: 113,
        area: "Investigación de Mercados",
        pregunta: "En la metodología de investigación comercial, ¿qué caracteriza a la observación no estructurada y encubierta?",
        opciones: [
            "A) El investigador utiliza un formato estandarizado de preguntas cerradas de opción múltiple.",
            "B) El observador registra el comportamiento de los sujetos en su entorno natural sin que estos sepan que están siendo estudiados ni utilizar guías rígidas previas.",
            "C) Se realizan entrevistas grabadas en estudios de televisión con público.",
            "D) Se aplican experimentos de laboratorio con estímulos químicos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La observación encubierta y no estructurada registra conductas espontáneas en contextos reales sin alterar el comportamiento de los sujetos estudiados."
    },
    {
        id: 114,
        area: "Comercialización y Ventas",
        pregunta: "En la estrategia de comercialización, ¿qué define el concepto de 'Marketing de Guerrilla'?",
        opciones: [
            "A) Campañas masivas de televisión en horarios estelares con presupuestos multimillonarios.",
            "B) Estrategias de comunicación no convencionales, creativas, de bajo costo y alto impacto, orientadas a sorprender al consumidor en espacios públicos cotidianos.",
            "C) Guerras de precios entre corporaciones multinacionales farmacéuticas.",
            "D) Auditorías fiscales obligatorias en aduanas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El marketing de guerrilla emplea tácticas creativas e innovadoras de bajo presupuesto para lograr máxima recordación y viralidad."
    },
    {
        id: 115,
        area: "Estrategia de Producto y Marca",
        pregunta: "En la gestión de marcas, ¿qué indica una estrategia de 'Extensión de Marca' (Brand Extension)?",
        opciones: [
            "A) Utilizar una marca establecida para lanzar un producto en una categoría completamente diferente al core business original.",
            "B) Incrementar la cantidad de letras del nombre comercial.",
            "C) Vender la marca a inversionistas extranjeros.",
            "D) Aumentar el tamaño físico del envase primario."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La extensión de marca aprovecha el prestigio del nombre comercial para incursionar con éxito en nuevas categorías de mercado."
    },
    {
        id: 116,
        area: "Marketing Digital y Analítica",
        pregunta: "En la analítica web y medición de tráfico, ¿qué diferencia existe entre 'Usuarios Únicos' y 'Sesiones'?",
        opciones: [
            "A) Los usuarios únicos representan a las personas individuales que visitan el sitio, mientras que las sesiones agrupan el número total de visitas o interacciones realizadas por esos usuarios en un periodo dado.",
            "B) Las sesiones miden exclusivamente a los compradores que pagan y los usuarios únicos a los empleados.",
            "C) No existe ninguna diferencia matemática ni conceptual entre ambas métricas.",
            "D) Los usuarios únicos solo se registran en dispositivos móviles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Un usuario único puede generar múltiples sesiones (visitas) al navegar por el sitio web en diferentes momentos."
    },
    {
        id: 117,
        area: "Investigación de Mercados",
        pregunta: "En el análisis de datos de investigación de mercados, ¿para qué sirve el análisis conjoint (conjoint analysis o análisis de conformidad/conjoint)?",
        opciones: [
            "A) Para determinar cómo valoran los consumidores los diferentes atributos que componen un producto y qué combinaciones prefieren al tomar decisiones de compra.",
            "B) Para contar el número de productos obsoletos en almacén.",
            "C) Para calcular los costos de envío logístico internacional.",
            "D) Para auditar la contabilidad fiscal de los proveedores."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El análisis conjoint desglosa las preferencias del consumidor ante distintas combinaciones de atributos y precios, optimizando el diseño de productos."
    },
    {
        id: 118,
        area: "Comercialización y Ventas",
        pregunta: "En la gestión comercial, ¿qué objetivo persigue una estrategia de 'Fidelización de Clientes' (Customer Retention)?",
        opciones: [
            "A) Atraer exclusivamente a clientes nuevos mediante publicidad engañosa masiva.",
            "B) Maximizar la retención y el valor de vida del cliente (CLV) mediante experiencias superiores, programas de lealtad y atención postventa.",
            "C) Incrementar la rotación de clientes insatisfechos hacia la competencia.",
            "D) Reducir los canales digitales de atención al mínimo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fidelización busca retener a la base actual de clientes incrementando su satisfacción, recompra y rentabilidad a largo plazo."
    },
    {
        id: 119,
        area: "Estrategia de Producto y Marca",
        pregunta: "En el diseño de empaques, ¿qué función cumple el 'Envase Secundario'?",
        opciones: [
            "A) Agrupar y contener uno o varios envases primarios para su exhibición comercial, protección adicional o información promocional.",
            "B) Almacenar tarimas completas de carga pesada en contenedores marítimos.",
            "C) Funcionar como el líquido principal consumible.",
            "D) Sostener la estructura de los anuncios espectaculares."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El envase secundario agrupa al envase primario (ej. la caja de cartón que contiene el frasco de perfume), facilitando su exhibición y protección."
    },
    {
        id: 120,
        area: "Marketing Digital y Analítica",
        pregunta: "En las estrategias de pauta publicitaria digital, ¿qué permite lograr la funcionalidad de 'Exclusión de Audiencias'?",
        opciones: [
            "A) Mostrar los anuncios a absolutamente todo el mundo sin restricción geográfica.",
            "B) Evitar el desperdicio presupuestario excluyendo de las campañas a grupos específicos de usuarios (ej. clientes que ya compraron el producto o empleados de la empresa).",
            "C) Bloquear de forma permanente las cuentas de los competidores comerciales.",
            "D) Ocultar el sitio web de los motores de búsqueda de Google."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La exclusión de audiencias optimiza el presupuesto publicitario al impedir que los anuncios impacten a usuarios irrelevantes o que ya convirtieron."
    }
];
