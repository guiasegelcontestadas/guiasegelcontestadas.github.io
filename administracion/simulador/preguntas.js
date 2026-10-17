// Banco de Reactivos - EGEL Plus Administración de Empresas (Bloque 1: Preguntas 1 a 40)
const bancoPreguntas = [
    {
        id: 1,
        area: "Planeación Estratégica",
        pregunta: "En el proceso de diagnóstico estratégico, ¿qué evalúa fundamentalmente el análisis FODA en su dimensión interna (Fortalezas y Debilidades)?",
        opciones: [
            "A) Las tendencias macroeconómicas y los cambios en la legislación fiscal internacional.",
            "B) Las capacidades distintivas, recursos y limitaciones operativas y financieras propias de la organización.",
            "C) Las acciones comerciales y ventajas competitivas de los competidores directos en el mercado.",
            "D) Las expectativas de consumo y variables demográficas de los clientes potenciales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis interno del FODA se centra exclusivamente en examinar los recursos, capacidades, competencias y deficiencias sobre los cuales la empresa tiene control directo."
    },
    {
        id: 2,
        area: "Gestión del Talento Humano",
        pregunta: "¿Cuál es el objetivo principal de realizar un análisis y descripción de puestos dentro de la administración de recursos humanos?",
        opciones: [
            "A) Determinar la tabulación fiscal y los impuestos retenidos por la nómina mensual.",
            "B) Delimitar claramente las funciones, responsabilidades, requisitos y perfil competencial necesarios para ocupar un cargo específico.",
            "C) Calcular de forma estricta la depreciación de los equipos de oficina asignados a cada departamento.",
            "D) Establecer las rutas de evacuación ante siniestros dentro de las instalaciones corporativas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La descripción y análisis de puestos definen con precisión los deberes, habilidades, competencias y responsabilidades que exige una posición de trabajo."
    },
    {
        id: 3,
        area: "Finanzas Corporativas",
        pregunta: "Al analizar los estados financieros de una empresa, ¿qué mide específicamente la razón de liquidez conocida como 'Prueba Ácida' (Quick Ratio) en comparación con la Razón Circulante?",
        opciones: [
            "A) La capacidad inmediata de la empresa para pagar sus obligaciones a corto plazo sin depender de la venta de sus inventarios.",
            "B) El rendimiento neto obtenido sobre el capital contable de los accionistas al cierre del ejercicio.",
            "C) El número de veces que las cuentas por cobrar son recuperadas en el periodo anual.",
            "D) El endeudamiento total de la organización frente a sus activos fijos tangibles."
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba ácida es un indicador de liquidez más riguroso que la razón circulante, ya que excluye a los inventarios (por considerarse el activo menos líquido a corto plazo) del numerador."
    },
    {
        id: 4,
        area: "Mercadotecnia",
        pregunta: "En el diseño de la mezcla de mercadotecnia (Marketing Mix), ¿qué elementos componen fundamentalmente el modelo clásico de las 4Ps propuesto por McCarthy?",
        opciones: [
            "A) Proveedores, Procesos, Personas y Productividad.",
            "B) Producto, Precio, Plaza (Distribución) y Promoción.",
            "C) Planeación, Posicionamiento, Público y Publicidad.",
            "D) Participación, Presupuesto, Potencial y Permisos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las 4Ps de la mercadotecnia tradicional engloban las variables tácticas controlables del marketing: Producto, Precio, Plaza y Promoción."
    },
    {
        id: 5,
        area: "Administración de Operaciones",
        pregunta: "En la administración de la cadena de suministro y producción, ¿qué representa el concepto de 'Punto de Reorden' (Reorder Point)?",
        opciones: [
            "A) El momento financiero exacto en el que la empresa declara utilidades netas.",
            "B) El nivel crítico de inventario que activa de manera automática la emisión de una nueva orden de compra para evitar desabastecimiento.",
            "C) La capacidad máxima de almacenamiento en metros cúbicos del centro de distribución.",
            "D) El costo total de mantener mercancía obsoleta en los anaqueles."
        ],
        respuestaCorrecta: 1,
        explicacion: "El punto de reorden indica el nivel de stock en el cual se debe lanzar un nuevo pedido al proveedor, considerando el consumo durante el tiempo de entrega (Lead Time)."
    },
    {
        id: 6,
        area: "Planeación Estratégica",
        pregunta: "¿Qué establece la matriz de crecimiento-participación del Boston Consulting Group (Grupo BCG) para clasificar las unidades estratégicas de negocio (UEN)?",
        opciones: [
            "A) Rentabilidad neta frente a endeudamiento bancario a largo plazo.",
            "B) Tasa de crecimiento del mercado frente a la participación relativa de mercado de la empresa.",
            "C) Satisfacción del cliente frente a la calidad técnica del producto.",
            "D) Costos fijos operativos frente a los ingresos marginales de ventas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La matriz BCG evalúa la cartera de negocios cruzando dos ejes: la tasa de crecimiento de la industria y la cuota de mercado relativa de la empresa (clasificándolos en Estrella, Vaca, Interrogante y Perro)."
    },
    {
        id: 7,
        area: "Gestión del Talento Humano",
        pregunta: "En el proceso de selección de personal, ¿en qué consiste una entrevista por competencias (o entrevista conductual estructurada)?",
        opciones: [
            "A) En realizar preguntas hipotéticas sobre cómo reaccionarías ante escenarios futuros imaginados.",
            "B) En evaluar experiencias y comportamientos pasados del candidato bajo el supuesto de que el comportamiento pasado es el mejor predictor del desempeño futuro.",
            "C) En aplicar pruebas psicométricas de inteligencia general sin interacción verbal.",
            "D) En negociar directamente las percepciones salariales y comisiones de contratación."
        ],
        respuestaCorrecta: 1,
        explicacion: "La entrevista por competencias se basa en analizar vivencias y conductas reales que el candidato demostró en situaciones anteriores para predecir su éxito laboral."
    },
    {
        id: 8,
        area: "Finanzas Corporativas",
        pregunta: "Al evaluar proyectos de inversión, ¿qué significado financiero tiene un Valor Presente Neto (VPN) mayor a cero?",
        opciones: [
            "A) Que el proyecto destruye valor económico y debe ser rechazado de inmediato.",
            "B) Que el proyecto genera rendimientos superiores a la Tasa Mínima Aceptable de Rendimiento (TMAR), incrementando el valor de la empresa.",
            "C) Que el periodo de recuperación de la inversión supera el horizonte de vida útil.",
            "D) Que los flujos de efectivo futuros son totalmente inmunes a la inflación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un VPN positivo indica que el proyecto es rentable, ya que recupera la inversión inicial, cubre el costo de capital y aporta un valor monetario neto adicional a los accionistas."
    },
    {
        id: 9,
        area: "Mercadotecnia",
        pregunta: "¿Qué define el proceso de segmentación de mercados en la estrategia comercial de una organización?",
        opciones: [
            "A) Dividir un mercado heterogéneo en grupos más pequeños, homogéneos y definidos con base en características y necesidades compartidas.",
            "B) Unificar todos los productos de la empresa en una sola campaña publicitaria masiva sin distinción.",
            "C) Fijar los precios de venta basándose exclusivamente en los costos de producción contables.",
            "D) Establecer los canales logísticos de transporte internacional de mercancías."
        ],
        respuestaCorrecta: 0,
        explicacion: "La segmentación divide el mercado global en segmentos específicos (demográficos, psicográficos, geográficos, conductuales) para diseñar estrategias comerciales focalizadas."
    },
    {
        id: 10,
        area: "Administración de Operaciones",
        pregunta: "En el contexto de la administración de la calidad total (TQM), ¿qué principio persigue la filosofía japonesa de las '5S'?",
        opciones: [
            "A) Reducir el apalancamiento financiero mediante la emisión de acciones preferentes.",
            "B) Crear y mantener un entorno de trabajo limpio, ordenado, seguro y altamente eficiente mediante la disciplina operativa.",
            "C) Automatizar las nóminas del personal administrativo mediante inteligencia artificial.",
            "D) Calcular el punto de equilibrio contable de la empresa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) buscan estandarizar espacios de trabajo limpios y ordenados para potenciar la productividad y minimizar desperdicios."
    },
    {
        id: 11,
        area: "Planeación Estratégica",
        pregunta: "De acuerdo con el modelo de las Cinco Fuerzas Competitivas de Michael Porter, ¿qué representa la 'Amenaza de productos sustitutos'?",
        opciones: [
            "A) La rivalidad directa entre las marcas líderes dentro del mismo sector industrial.",
            "B) La posibilidad de que otros bienes o servicios de industrias diferentes satisfagan las mismas necesidades del cliente, poniendo un límite al potencial de precios.",
            "C) El poder de negociación que ejercen los proveedores al subir el costo de insumos.",
            "D) Las barreras de entrada legales impuestas por el gobierno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sustitutos son productos de diferentes sectores que cumplen una función similar para el consumidor (ej. el tren frente al avión), limitando la rentabilidad del sector."
    },
    {
        id: 12,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del desempeño, ¿en qué consiste la evaluación de 360 grados?",
        opciones: [
            "A) Una revisión jerárquica unidireccional realizada exclusivamente por el director general.",
            "B) Un sistema integral de retroalimentación donde el colaborador es evaluado por su jefe, sus pares (compañeros), sus subordinados y clientes internos o externos.",
            "C) Una auditoría contable anual de las comisiones sobre ventas del equipo comercial.",
            "D) Un examen médico ocupacional enfocado en la salud ergonómica."
        ],
        respuestaCorrecta: 1,
        explicacion: "La evaluación de 360 grados recopila perspectivas de múltiples fuentes alrededor del empleado para obtener una visión holística de su desempeño."
    },
    {
        id: 13,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón financiera de 'Rotación de Cuentas por Cobrar' en la administración de capital de trabajo?",
        opciones: [
            "A) La velocidad con la que la empresa recobra el dinero adeudado por sus clientes a crédito.",
            "B) El porcentaje de pasivos a corto plazo cubiertos con efectivo inmediato.",
            "C) La cantidad de inventario obsoleto almacenado en las bodegas.",
            "D) El rendimiento sobre los activos totales netos."
        ],
        respuestaCorrecta: 0,
        explicacion: "La rotación de cuentas por cobrar indica la eficiencia en la gestión de crédito y cobranza, mostrando cuántas veces se convierten las cuentas por cobrar en efectivo en un periodo."
    },
    {
        id: 14,
        area: "Mercadotecnia",
        pregunta: "¿Cómo se define el concepto de 'Ciclo de Vida del Producto' en la estrategia comercial?",
        opciones: [
            "A) El tiempo de garantía legal que ofrece el fabricante ante defectos de fábrica.",
            "B) Las etapas sucesivas por las que atraviesa un producto desde su lanzamiento al mercado hasta su declive y retirada (Introducción, Crecimiento, Madurez y Declive).",
            "C) El periodo contable de depreciación fiscal de la maquinaria de producción.",
            "D) La vida útil ergonómica de los componentes electrónicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ciclo de vida describe la evolución de las ventas y utilidades de un producto a través de sus fases de Introducción, Crecimiento, Madurez y Declive."
    },
    {
        id: 15,
        area: "Administración de Operaciones",
        pregunta: "En la planeación de la producción, ¿cuál es la función principal del Programa Maestro de Producción (MPS - Master Production Schedule)?",
        opciones: [
            "A) Definir las políticas salariales de contratación de obreros eventuales.",
            "B) Detallar qué artículos finales se deben fabricar y en qué plazos específicos para cumplir con la demanda comercial.",
            "C) Calcular los impuestos sobre la renta corporativos anuales.",
            "D) Establecer los contratos de arrendamiento inmobiliario de oficinas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El MPS traduce los planes de venta en un programa específico de manufactura que indica cantidades y fechas exactas de producción de productos terminados."
    },
    {
        id: 16,
        area: "Planeación Estratégica",
        pregunta: "¿Qué diferencia conceptual existe entre la 'Misión' y la 'Visión' organizacional en la dirección estratégica?",
        opciones: [
            "A) La Misión describe el propósito actual y razón de ser de la empresa, mientras que la Visión proyecta la situación futura deseada a largo plazo.",
            "B) La Misión establece los presupuestos financieros y la Visión regula los contratos laborales.",
            "C) La Misión es una herramienta de marketing externo y la Visión es un reporte contable interno.",
            "D) No existe diferencia, son sinónimos administrativos."
        ],
        respuestaCorrecta: 0,
        explicacion: "La misión responde al 'quiénes somos y qué hacemos hoy', en tanto que la visión responde al 'a dónde queremos llegar en el futuro'."
    },
    {
        id: 17,
        area: "Gestión del Talento Humano",
        pregunta: "En el marco legal y administrativo laboral, ¿qué propósito fundamental cumple el Reglamento Interior de Trabajo en una empresa?",
        opciones: [
            "A) Fijar las estrategias de posicionamiento publicitario en redes sociales.",
            "B) Regular de manera obligatoria las normas de orden, seguridad, disciplina, horarios y condiciones de convivencia diaria en el centro laboral.",
            "C) Determinar los márgenes de utilidad neta repartibles entre los socios accionistas.",
            "D) Establecer los precios de venta al público de los servicios."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Reglamento Interior de Trabajo es el conjunto de disposiciones obligatorias que regulan el orden y las normas operativas cotidianas entre patrón y trabajadores."
    },
    {
        id: 18,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué representa el Apalancamiento Financiero en la estructura de capital de una empresa?",
        opciones: [
            "A) El uso de deuda con costo fijo (financiamiento externo) para magnificar la rentabilidad obtenida sobre el capital contable.",
            "B) El uso exclusivo de aportaciones de capital social de los socios fundadores.",
            "C) La reducción de costos operativos mediante la automatización de procesos.",
            "D) La conversión de activos fijos en efectivo disponible inmediato."
        ],
        respuestaCorrecta: 0,
        explicacion: "El apalancamiento financiero mide el impacto del endeudamiento (financiamiento con deuda) sobre las utilidades por acción y la rentabilidad del accionista."
    },
    {
        id: 19,
        area: "Mercadotecnia",
        pregunta: "¿A qué se refiere el concepto de 'Posicionamiento' en la estrategia de mercadotecnia?",
        opciones: [
            "A) A la ubicación geográfica de los almacenes de distribución central.",
            "B) Al lugar distintivo que ocupa un producto o marca en la mente del consumidor en relación con la competencia.",
            "C) Al número de patentes registradas ante el instituto de propiedad industrial.",
            "D) Al porcentaje de descuento ofrecido en temporadas de liquidación."
        ],
        respuestaCorrecta: 1,
        explicacion: "El posicionamiento es la imagen mental y percepción diferenciada que los clientes tienen de una marca frente a sus competidores directos."
    },
    {
        id: 20,
        area: "Administración de Operaciones",
        pregunta: "Bajo la teoría de restricciones (TOC), ¿cómo se define un 'Cuello de Botella' (Bottleneck) en un proceso productivo o administrativo?",
        opciones: [
            "A) La estación de trabajo o recurso cuya capacidad es menor que la demanda requerida, limitando el flujo total del sistema.",
            "B) El almacén con mayor cantidad de inventario obsoleto.",
            "C) El departamento con menor presupuesto financiero anual.",
            "D) La ruta crítica en un diagrama de proyectos PERT."
        ],
        respuestaCorrecta: 0,
        explicacion: "El cuello de botella es el eslabón más restrictivo de un proceso que determina la capacidad máxima de producción de toda la cadena."
    },
    {
        id: 21,
        area: "Planeación Estratégica",
        pregunta: "En la formulación de estrategias genéricas de Michael Porter, ¿en qué consiste una estrategia de 'Liderazgo en Costos'?",
        opciones: [
            "A) Ofrecer productos altamente personalizados y exclusivos a un segmento de mercado muy reducido y de alto poder adquisitivo.",
            "B) Lograr los costos operativos y de producción más bajos de la industria para competir masivamente ofreciendo precios accesibles.",
            "C) Diferenciar el producto mediante patentes tecnológicas exclusivas sin importar el costo de fabricación.",
            "D) Fusionarse con competidores directos para monopolizar el mercado regional."
        ],
        respuestaCorrecta: 1,
        explicacion: "El liderazgo en costos busca la eficiencia extrema en toda la cadena de valor para producir con costos inferiores al promedio de la competencia y capturar volumen."
    },
    {
        id: 22,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué indicador de recursos humanos mide el porcentaje de colaboradores que abandonan la organización en un periodo determinado respecto al total de la plantilla?",
        opciones: [
            "A) Tasa de rotación de personal (Turnover rate).",
            "B) Índice de productividad laboral por hora.",
            "C) Coeficiente de clima organizacional.",
            "D) Tasa de ausentismo justificado."
        ],
        respuestaCorrecta: 0,
        explicacion: "La tasa de rotación de personal evalúa la salida y entrada de colaboradores, reflejando problemas de retención, clima laboral o compensaciones."
    },
    {
        id: 23,
        area: "Finanzas Corporativas",
        pregunta: "¿Cuál es la función principal del Estado de Flujos de Efectivo en la contabilidad financiera de una empresa?",
        opciones: [
            "A) Mostrar la utilidad o pérdida neta acumulada en el ejercicio fiscal mediante el principio de devengado.",
            "B) Detallarlas entradas y salidas de efectivo clasificadas en actividades de operación, inversión y financiamiento.",
            "C) Listar el valor contable histórico de los activos fijos e inmuebles.",
            "D) Calcular los impuestos sobre la renta diferidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El estado de flujos de efectivo informa sobre la generación y uso del dinero en efectivo de la empresa, dividiéndolo en operaciones, inversiones y financiamiento."
    },
    {
        id: 24,
        area: "Mercadotecnia",
        pregunta: "¿Qué comprende el concepto de 'Marketing Digital y Omnicanalidad' en la estrategia comercial actual?",
        opciones: [
            "A) Vender exclusivamente a través de catálogos impresos distribuidos por correo postal.",
            "B) Integrar de manera fluida y coordinada todos los canales de contacto físicos y digitales (online y offline) para ofrecer una experiencia unificada al cliente.",
            "C) Limitar la publicidad corporativa a una sola red social corporativa.",
            "D) Eliminar por completo el servicio de atención telefónica al cliente."
        ],
        respuestaCorrecta: 1,
        explicacion: "La omnicanalidad integra todos los canales de venta y comunicación de la empresa para que el consumidor transite entre ellos sin fricciones."
    },
    {
        id: 25,
        area: "Administración de Operaciones",
        pregunta: "En la administración de inventarios, ¿qué representa el modelo de Lote Económico de Pedido (EOQ)?",
        opciones: [
            "A) La cantidad exacta de pedido que minimiza la suma de los costos de ordenar y los costos de mantener inventario.",
            "B) El inventario de seguridad absoluto que protege contra huelgas de proveedores.",
            "C) El costo total anual de depreciación de los almacenes.",
            "D) El punto de reorden en función del tiempo de entrega."
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo EOQ busca el tamaño de lote óptimo donde se equilibran los costos de emisión de órdenes y los costos de mantenimiento de stock."
    },
    {
        id: 26,
        area: "Planeación Estratégica",
        pregunta: "¿Qué evalúa fundamentalmente el modelo de las 'Alianzas Estratégicas y Joint Ventures' en el crecimiento corporativo?",
        opciones: [
            "A) La liquidación total de activos ante una bancarrota técnica.",
            "B) La asociación cooperativa entre dos o más empresas independientes para compartir recursos, riesgos y riesgos en un proyecto o mercado específico.",
            "C) La compra hostil de acciones de la competencia en la bolsa de valores.",
            "D) La subcontratación de la nómina con agencias temporales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Joint Venture o alianza estratégica permite a las organizaciones colaborar en mercados o tecnologías complejas compartiendo riesgos y sin perder su autonomía jurídica."
    },
    {
        id: 27,
        area: "Gestión del Talento Humano",
        pregunta: "En la capacitación y desarrollo, ¿qué diferencia existe entre 'Capacitación' y 'Desarrollo' del personal?",
        opciones: [
            "A) La capacitación se enfoca en adquirir habilidades para el puesto actual a corto plazo, y el desarrollo se orienta al crecimiento integral y preparación para futuras responsabilidades a largo plazo.",
            "B) La capacitación es obligatoria por ley y el desarrollo es opcional.",
            "C) La capacitación se aplica a directivos y el desarrollo a obreros operativos.",
            "D) No existe diferencia conceptual en la administración moderna."
        ],
        respuestaCorrecta: 0,
        explicacion: "La capacitación busca perfeccionar destrezas inmediatas para el trabajo presente, mientras que el desarrollo prepara al talento para retos futuros de mayor liderazgo."
    },
    {
        id: 28,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué significa el concepto de 'Capital de Trabajo Neto' en la administración financiera a corto plazo?",
        opciones: [
            "A) La diferencia resultante entre los Activos Circulantes y los Pasivos Circulantes de la empresa.",
            "B) El valor total de los terrenos e inmuebles industriales.",
            "C) La deuda bancaria a un plazo mayor de diez años.",
            "D) El capital social aportado por los accionistas fundadores."
        ],
        respuestaCorrecta: 0,
        explicacion: "El capital de trabajo neto mide la liquidez operativa disponible restando las obligaciones a corto plazo (pasivos circulantes) de los recursos líquidos (activos circulantes)."
    },
    {
        id: 29,
        area: "Mercadotecnia",
        pregunta: "¿Qué función cumple el análisis del Comportamiento del Consumidor dentro de la investigación de mercados?",
        opciones: [
            "A) Calcular los costos unitarios de fabricación de las materias primas.",
            "B) Comprender los factores psicológicos, sociales, culturales y personales que influyen en los procesos de decisión de compra y uso de los bienes.",
            "C) Auditar los estados contables de pérdidas y ganancias.",
            "D) Establecer las cuotas de retención de impuestos sobre la nómina."
        ],
        respuestaCorrecta: 1,
        explicacion: "El estudio del comportamiento del consumidor analiza por qué, cómo, dónde y cuándo compran las personas, facilitando el diseño de estrategias comerciales efectivas."
    },
    {
        id: 30,
        area: "Administración de Operaciones",
        pregunta: "En los sistemas de producción esbelta (Lean Manufacturing), ¿cómo se define el concepto de 'Muda'?",
        opciones: [
            "A) Cualquier actividad que consume recursos pero no aporta valor añadido perceptible para el cliente final (desperdicio).",
            "B) El mantenimiento preventivo calendarizado de la maquinaria.",
            "C) La certificación internacional de calidad ISO 9001.",
            "D) El incremento anual en el salario de los operarios."
        ],
        respuestaCorrecta: 0,
        explicacion: "Muda es el término japonés para cualquier desperdicio o ineficiencia en los procesos que no genera valor para el cliente (sobreproducción, esperas, defectos, etc.)."
    },
    {
        id: 31,
        area: "Planeación Estratégica",
        pregunta: "¿Qué caracteriza a una estrategia de 'Diversificación Conglomerada' en la dirección corporativa?",
        opciones: [
            "A) Ampliar la línea de productos actuales dentro del mismo mercado tradicional.",
            "B) Desarrollar nuevos productos o servicios destinados a mercados totalmente nuevos y sin relación directa con la actividad actual de la empresa.",
            "C) Comprar a los proveedores directos de materias primas (integración hacia atrás).",
            "D) Reducir operaciones vendiendo divisiones secundarias."
        ],
        respuestaCorrecta: 1,
        explicacion: "La diversificación conglomerada implica incursionar en negocios y mercados completamente ajenos al conocimiento central histórico de la organización para dispersar riesgos."
    },
    {
        id: 32,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué establece la teoría de la motivación de Maslow respecto a la jerarquía de las necesidades humanas en el entorno laboral?",
        opciones: [
            "A) Que todas las necesidades se satisfacen de manera simultánea sin importar el contexto.",
            "B) Que el ser humano busca satisfacer necesidades en orden ascendente, desde las básicas fisiológicas y de seguridad hasta las sociales, de estima y autorrealización.",
            "C) Que el dinero es el único motivador capaz de elevar la productividad.",
            "D) Que las necesidades de autorrealización son obligatorias antes de comer o dormir."
        ],
        respuestaCorrecta: 1,
        explicacion: "La pirámide de Maslow postula que las necesidades humanas se ordenan jerárquicamente; conforme se cubren las inferiores, emergen motivaciones de orden superior."
    },
    {
        id: 33,
        area: "Finanzas Corporativas",
        pregunta: "¿Cuál es el propósito central del análisis mediante Razones Financieras de Cobertura de Intereses?",
        opciones: [
            "A) Medir la capacidad de la empresa para pagar los intereses de su deuda utilizando sus utilidades operativas (UAI / Intereses).",
            "B) Calcular el valor de salvamento de la maquinaria al final de su vida útil.",
            "C) Determinar el margen de utilidad bruta sobre ventas totales.",
            "D) Evaluar la rotación del inventario de productos terminados."
        ],
        respuestaCorrecta: 0,
        explicacion: "La razón de cobertura de intereses evalúa el riesgo financiero analizando cuántas veces cubren las ganancias operativas (EBIT) los gastos por intereses de la deuda."
    },
    {
        id: 34,
        area: "Mercadotecnia",
        pregunta: "En la estrategia de precios, ¿en qué consiste la fijación de precios basada en el 'Valor Percibido' por el cliente?",
        opciones: [
            "A) Sumar un porcentaje fijo de utilidad sobre el costo total de manufactura.",
            "B) Fijar el precio tomando como referencia principal la percepción de valor, los beneficios y la disposición a pagar del consumidor, más que los costos del fabricante.",
            "C) Igualar exactamente el precio de la competencia más económica del mercado.",
            "D) Vender al costo marginal sin buscar rentabilidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El precio basado en valor percibe que el cliente está dispuesto a pagar según el beneficio que obtiene del producto, orientándose al valor antes que al costo."
    },
    {
        id: 35,
        area: "Administración de Operaciones",
        pregunta: "¿Qué función cumple el Plan Agregado de Producción (Aggregate Planning) en la gestión de operaciones a mediano plazo?",
        opciones: [
            "A) Definir las tareas individuales y cronometradas de cada segundo en la línea de ensamble.",
            "B) Determinar los niveles generales de producción, inventario y fuerza de trabajo necesarios para satisfacer la demanda estimada a un horizonte de 3 a 18 meses.",
            "C) Comprar bienes inmuebles corporativos a un plazo de 30 años.",
            "D) Controlar la contabilidad fiscal diaria de caja chica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El plan agregado equilibra la demanda y la capacidad a mediano plazo (meses), ajustando la producción, la contratación o los inventarios globales."
    },
    {
        id: 36,
        area: "Planeación Estratégica",
        pregunta: "¿Qué significa el concepto de 'Ventaja Competitiva Sostenible' según la teoría de recursos y capacidades de la empresa?",
        opciones: [
            "A) Una ventaja temporal basada en precios bajos que la competencia puede igualar en una semana.",
            "B) Un conjunto de activos, competencias y recursos valiosos, raros, inimitable y no substituibles que permiten a la empresa superar a sus rivales a largo plazo.",
            "C) Contar con subsidios gubernamentales temporales.",
            "D) Tener un endeudamiento bancario superior al de los competidores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Bajo el enfoque VRIO (Valioso, Raro, Inimitable, Organizado), una ventaja es sostenible cuando los recursos de la empresa no pueden ser fácilmente replicados por los rivales."
    },
    {
        id: 37,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración de compensaciones, ¿en qué consiste un sistema de pago basado en competencias o habilidades (Skill-based pay)?",
        opciones: [
            "A) Pagar un salario mínimo estricto sin importar la preparación del trabajador.",
            "B) Compensar económicamente al colaborador en función de la variedad y profundidad de las habilidades y conocimientos certificados que domina y aplica en su puesto.",
            "C) Fijar los sueldos basándose exclusivamente en los años de antigüedad cronológica.",
            "D) Reducir las percepciones salariales ante crisis estacionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El esquema de pago por competencias incentiva el desarrollo profesional remunerando al empleado según el dominio de destrezas técnicas útiles para la organización."
    },
    {
        id: 38,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la palanca o grado de Apalancamiento Operativo (AO)?",
        opciones: [
            "A) La sensibilidad de la utilidad operativa (UAII) ante cambios porcentuales en el volumen de ventas, derivada de la estructura de costos fijos de la empresa.",
            "B) El porcentaje de impuestos diferidos pagados a la secretaría de hacienda.",
            "C) La proporción de capital social frente a pasivos bancarios.",
            "D) La liquidez inmediata del efectivo en caja."
        ],
        respuestaCorrecta: 0,
        explicacion: "El apalancamiento operativo refleja cómo los costos fijos de operación amplifican el impacto de las variaciones en las ventas sobre la utilidad operativa."
    },
    {
        id: 39,
        area: "Mercadotecnia",
        pregunta: "¿Qué se entiende por 'Canal de Distribución' en la estrategia de mercadotecnia?",
        opciones: [
            "A) El conjunto de rutas aéreas internacionales que utiliza la empresa.",
            "B) La red de organizaciones interdependientes (intermediarios, mayoristas, detallistas) implicadas en poner un producto o servicio a disposición del consumidor final.",
            "C) La maquinaria automatizada encargada del empaque secundario en planta.",
            "D) El departamento de cobranza telefónica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El canal de distribución es el camino físico y comercial que recorre un producto desde su fabricante original hasta el consumidor final mediante intermediarios."
    },
    {
        id: 40,
        area: "Administración de Operaciones",
        pregunta: "En un sistema de producción justo a tiempo (Just in Time - JIT), ¿cuál es el postulado fundamental respecto a la gestión de inventarios?",
        opciones: [
            "A) Almacenar grandes volúmenes de materia prima para protegerse contra cualquier contingencia.",
            "B) Minimizar o eliminar los inventarios intermedios y de producto terminado, produciendo únicamente lo necesario, en la cantidad precisa y en el momento exacto requerido.",
            "C) Subcontratar el control de calidad con inspectores externos.",
            "D) Utilizar exclusivamente sistemas de manufactura Push basados en pronósticos estáticos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El JIT busca eliminar los inventarios y desperdicios mediante un flujo halado (pull) donde cada etapa procesa piezas solo cuando la siguiente lo demanda estrictamente."
    },
    {
        id: 41,
        area: "Planeación Estratégica",
        pregunta: "En el análisis del macroentorno mediante la metodología PESTEL, ¿qué variables se evalúan específicamente en la dimensión 'Económica'?",
        opciones: [
            "A) Las leyes de protección al medio ambiente y regulaciones de emisiones industriales.",
            "B) Las tasas de interés, la inflación, el tipo de cambio y el crecimiento del producto interno bruto (PIB).",
            "C) Los cambios demográficos, pirámide poblacional y estilos de vida de la sociedad.",
            "D) Las innovaciones tecnológicas y patentes de investigación científica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis económico de PESTEL examina factores financieros macroambientales como inflación, tasas de interés, empleo y ciclo económico que impactan a los mercados."
    },
    {
        id: 42,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración salarial, ¿qué método de evaluación de puestos consiste en ordenar de forma jerárquica los cargos de la organización de menor a mayor importancia sin utilizar una escala numérica compleja?",
        opciones: [
            "A) Método de jerarquización o comparación simple.",
            "B) Método de valuación por puntos.",
            "C) Método de comparación de factores.",
            "D) Método de escalas gráficas de desempeño."
        ],
        respuestaCorrecta: 0,
        explicacion: "El método de jerarquización (job ranking) es el sistema más simple de valuación de puestos, ordenándolos globalmente de acuerdo con su importancia relativa."
    },
    {
        id: 43,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón financiera de 'Endeudamiento Total' o razón de pasivo a activo?",
        opciones: [
            "A) La velocidad con la que se venden los inventarios en el periodo.",
            "B) El rendimiento neto sobre el capital contable de los accionistas.",
            "C) La proporción de los activos totales de la empresa que están financiados por acreedores y deudores externos.",
            "D) La capacidad de pago de intereses a corto plazo."
        ],
        respuestaCorrecta: 2,
        explicacion: "La razón de endeudamiento relaciona el pasivo total con el activo total, indicando qué porcentaje de los bienes de la empresa pertenece a terceros (acreedores)."
    },
    {
        id: 44,
        area: "Mercadotecnia",
        pregunta: "¿Qué define el concepto de 'Marketing Ecológico o Sustentable' (Green Marketing) en la estrategia comercial contemporánea?",
        opciones: [
            "A) Reducir los costos de distribución mediante rutas terrestres nocturnas.",
            "B) Desarrollar y promover productos y empaques diseñados para minimizar el impacto ambiental y satisfacer las necesidades ecológicas de los consumidores.",
            "C) Limitar la publicidad exclusivamente a medios digitales sin papel.",
            "D) Fijar precios altos para restringir el acceso masivo a los bienes."
        ],
        respuestaCorrecta: 1,
        explicacion: "El marketing sustentable orienta el diseño, producción y comunicación de productos hacia la preservación ambiental y la responsabilidad ecológica corporativa."
    },
    {
        id: 45,
        area: "Administración de Operaciones",
        pregunta: "En la gestión de inventarios, ¿qué representa el 'Stock de Seguridad' (Buffer Stock)?",
        opciones: [
            "A) El inventario obsoleto que se desecha al cierre del ejercicio fiscal.",
            "B) El excedente de mercancía acumulado por errores de pronóstico en temporadas bajas.",
            "C) El nivel adicional de inventario que se mantiene para prevenir desabastecimientos ante fluctuaciones imprevistas de la demanda o retrasos del proveedor.",
            "D) El lote económico de pedido óptimo para minimizar costos fijos."
        ],
        respuestaCorrecta: 2,
        explicacion: "El stock de seguridad es un reaseguro de inventario que absorbe la incertidumbre de la demanda y del tiempo de entrega de los proveedores."
    },
    {
        id: 46,
        area: "Planeación Estratégica",
        pregunta: "En el marco de la dirección estratégica, ¿qué representa la herramienta de la 'Curva de Experiencia'?",
        opciones: [
            "A) La disminución sistemática de los costos unitarios de producción a medida que se acumula mayor volumen histórico de experiencia y fabricación.",
            "B) El aumento de la rotación de personal por fatiga operativa.",
            "C) La curva de satisfacción del cliente frente al precio de venta.",
            "D) El incremento salarial por antigüedad en puestos directivos."
        ],
        respuestaCorrecta: 0,
        explicacion: "La curva de experiencia demuestra que los costos unitarios de valor disminuyen en un porcentaje predecible cada vez que se duplica la producción acumulada."
    },
    {
        id: 47,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué establece la teoría bifactorial de la motivación de Frederick Herzberg respecto al ambiente laboral?",
        opciones: [
            "A) Que el dinero es el único factor capaz de generar satisfacción y motivación profunda.",
            "B) Que existen factores higiénicos (cuyo ausencia causa insatisfacción pero no motivan) y factores motivacionales (que generan verdadera satisfacción y compromiso).",
            "C) Que las necesidades humanas se dividen estrictamente en cinco niveles piramidales biológicos.",
            "D) Que el liderazgo autocrático es el único modelo eficiente en plantas industriales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Herzberg separa los factores de higiene (sueldo, políticas, clima) de los motivadores (logro, reconocimiento, responsabilidad), explicando que evitar la insatisfacción no genera motivación por sí solo."
    },
    {
        id: 48,
        area: "Finanzas Corporativas",
        pregunta: "En la administración financiera, ¿qué indica una Tasa Interna de Retorno (TIR) menor que la Tasa Mínima Aceptable de Rendimiento (TMAR)?",
        opciones: [
            "A) Que el proyecto es altamente rentable y debe aprobarse de inmediato.",
            "B) Que el proyecto no cubre el rendimiento exigido por los inversionistas y destruye valor, por lo que debe rechazarse.",
            "C) Que el periodo de recuperación es menor a un año.",
            "D) Que el Valor Presente Neto es estrictamente positivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Si la TIR es inferior a la TMAR, significa que la rentabilidad del proyecto está por debajo del costo de oportunidad del dinero exigido, por lo que no es viable."
    },
    {
        id: 49,
        area: "Mercadotecnia",
        pregunta: "¿Qué objetivo persigue la estrategia de 'Desnatado de Precios' (Price Skimming) al lanzar un producto innovador al mercado?",
        opciones: [
            "A) Fijar un precio sumamente bajo para capturar cuotas masivas de mercado rápidamente.",
            "B) Establecer un precio inicial alto para maximizar los márgenes de utilidad en los segmentos de consumidores menos sensibles al precio, antes de bajarlo gradualmente.",
            "C) Igualar exactamente el costo marginal de producción contable.",
            "D) Ofrecer descuentos por volumen a distribuidores mayoristas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El desnatado consiste en fijar precios elevados al inicio para 'skimming' (descremar) el segmento prémium dispuesto a pagar por la novedad tecnológica."
    },
    {
        id: 50,
        area: "Administración de Operaciones",
        pregunta: "¿Qué mide el indicador de eficiencia global conocido como OEE (Overall Equipment Effectiveness) en una planta de manufactura?",
        opciones: [
            "A) La disponibilidad de efectivo en caja frente a pasivos a corto plazo.",
            "B) El rendimiento combinado de tres factores críticos: Disponibilidad, Desempeño (Rendimiento) y Calidad del equipo.",
            "C) La rotación de las cuentas por cobrar comerciales.",
            "D) El índice de rotación y ausentismo del personal operativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "El OEE es la métrica estándar de mantenimiento y operaciones que multiplica Disponibilidad x Rendimiento x Calidad para conocer la eficiencia real de una máquina."
    },
    {
        id: 51,
        area: "Planeación Estratégica",
        pregunta: "En la matriz Ansoff de crecimiento de productos y mercados, ¿en qué consiste la estrategia de 'Desarrollo de Mercados'?",
        opciones: [
            "A) Vender los productos actuales en nuevos mercados geográficos o segmentos de clientes diferentes.",
            "B) Crear productos totalmente nuevos para mercados actuales.",
            "C) Vender más productos actuales a los clientes actuales mediante campañas de fidelización.",
            "D) Diversificar hacia industrias completamente ajenas."
        ],
        respuestaCorrecta: 0,
        explicacion: "El desarrollo de mercados en Ansoff implica llevar la oferta actual existente hacia nuevos mercados geográficos, demográficos o canales de distribución."
    },
    {
        id: 52,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué función cumple el proceso de 'Inducción o Onboarding' al incorporar un nuevo colaborador a la empresa?",
        opciones: [
            "A) Evaluar su desempeño mediante pruebas psicométricas de inteligencia avanzada.",
            "B) Facilitar su integración cultural, social y operativa a la organización, comunicando valores, políticas, funciones y expectativas del puesto.",
            "C) Negociar las reducciones salariales por temporadas de baja producción.",
            "D) Auditar sus antecedentes fiscales y contables personales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El onboarding o inducción acelera la adaptación del nuevo empleado a la cultura corporativa y reduce la curva de aprendizaje inicial."
    },
    {
        id: 53,
        area: "Finanzas Corporativas",
        pregunta: "¿Cómo se define el concepto de 'Apalancamiento Combinado o Total' en las finanzas de la empresa?",
        opciones: [
            "A) El efecto simultáneo del apalancamiento operativo y financiero para magnificar el impacto de un cambio en las ventas sobre las utilidades por acción.",
            "B) La suma aritmética del activo circulante y el activo fijo tangible.",
            "C) La proporción de deuda bancaria a corto plazo frente a capital social.",
            "D) El porcentaje de impuestos diferidos sobre la renta."
        ],
        respuestaCorrecta: 0,
        explicacion: "El apalancamiento combinado mide el riesgo total de la empresa al combinar el apalancamiento operativo y el financiero sobre las utilidades netas por acción."
    },
    {
        id: 54,
        area: "Mercadotecnia",
        pregunta: "¿Qué evalúa el modelo de investigación de mercados conocido como 'Net Promoter Score' (NPS)?",
        opciones: [
            "A) El volumen de ventas netas trimestrales en canales digitales.",
            "B) La lealtad y satisfacción del cliente midiendo la probabilidad de que recomendaría la marca o producto a un amigo o colega.",
            "C) El costo publicitario por clic en campañas de redes sociales.",
            "D) La rotación del inventario en tiendas detallistas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El NPS es una métrica de gestión que clasifica a los clientes en promotores, pasivos y detractores con base en su disposición a recomendar la empresa."
    },
    {
        id: 55,
        area: "Administración de Operaciones",
        pregunta: "En la metodología de control de calidad, ¿para qué sirve un Diagrama de Pareto?",
        opciones: [
            "A) Para calcular la depreciación fiscal de la maquinaria en línea recta.",
            "B) Para identificar y ordenar los problemas o defectos por frecuencia de ocurrencia, aplicando el principio de que el 80% de los efectos se deben al 20% de las causas.",
            "C) Para trazar la ruta crítica en la administración de proyectos.",
            "D) Para medir el estrés térmico ambiental en áreas de producción."
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de Pareto visualiza las prioridades de mejora separando los pocos vitales de los muchos triviales según la regla del 80/20."
    },
    {
        id: 56,
        area: "Planeación Estratégica",
        pregunta: "En la evaluación de carteras corporativas mediante la matriz de crecimiento-participación de la consultora BCG, ¿cómo se definen las unidades de negocio clasificadas como 'Vacas Lecheras' (Cash Cows)?",
        opciones: [
            "A) Alta tasa de crecimiento de mercado y baja participación relativa, consumiendo muchos recursos sin generar utilidades.",
            "B) Alta participación relativa en un mercado de bajo crecimiento, generando altos flujos de efectivo estables y superávit financiero.",
            "C) Baja participación en mercados estancados, siendo candidatas a liquidación inmediata.",
            "D) Alta tasa de crecimiento y alta participación, requiriendo inversión constante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las vacas lecheras operan en mercados maduros con alta cuota de mercado; generan abundante efectivo con baja necesidad de inversión adicional."
    },
    {
        id: 57,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué describe la teoría de la Expectativa de Vroom en la motivación laboral?",
        opciones: [
            "A) Que la motivación de un individuo para esforzarse depende de tres factores: Expectativa (esfuerzo-desempeño), Instrumentalidad (desempeño-recompensa) y Valencia (valor de la recompensa).",
            "B) Que los empleados trabajan únicamente obligados por reglamentos punitivos.",
            "C) Que las necesidades económicas superan cualquier aspiración de desarrollo personal.",
            "D) Que el clima organizacional no afecta el nivel de ausentismo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La teoría de Vroom postula que la motivación es un proceso cognitivo racional donde el trabajador evalúa probabilidades de esfuerzo, recompensa y valor de la misma."
    },
    {
        id: 58,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué representa el Costo de Capital Promedio Ponderado (CCPP o WACC - Weighted Average Cost of Capital)?",
        opciones: [
            "A) La tasa de interés interbancaria de equilibrio sin riesgo fijada por el banco central.",
            "B) La tasa de rendimiento global que una empresa debe ganar sobre sus inversiones para mantener el valor de mercado de sus acciones y satisfacer a sus fuentes de financiamiento.",
            "C) El porcentaje de depreciación anual acumulada de los activos fijos.",
            "D) La utilidad neta dividida entre las ventas totales del ejercicio."
        ],
        respuestaCorrecta: 1,
        explicacion: "El WACC pondera el costo porcentual de la deuda y del capital contable según su participación en la estructura financiera de la empresa, sirviendo como tasa de descuento base."
    },
    {
        id: 59,
        area: "Mercadotecnia",
        pregunta: "En la mezcla de mercadotecnia de servicios (ampliada a 7Ps), ¿cuáles son los tres elementos adicionales que se incorporan además del producto, precio, plaza y promoción?",
        opciones: [
            "A) Proveedores, Presupuesto y Productividad.",
            "B) Personas (People), Evidencia Física (Physical Evidence) y Procesos (Process).",
            "C) Planeación, Posicionamiento y Patentes.",
            "D) Participación, Permisos y Público."
        ],
        respuestaCorrecta: 1,
        explicacion: "El marketing de servicios añade las 3Ps adicionales: Personas, Procesos y Evidencia Física, debido a la intangibilidad y participación del cliente en la entrega del servicio."
    },
    {
        id: 60,
        area: "Administración de Operaciones",
        pregunta: "En la planeación de requerimientos de materiales (MRP), ¿cuál es la función de la 'Lista de Materiales' (BOM - Bill of Materials)?",
        opciones: [
            "A) Registrar los salarios y comisiones del personal de ventas.",
            "B) Detallar de forma jerárquica todos los componentes, subensambles y materias primas necesarios para fabricar una unidad del producto final.",
            "C) Calcular los impuestos sobre la renta diferidos.",
            "D) Establecer los turnos de trabajo rotativo de los operarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "La lista de materiales (BOM) es la receta estructural que indica qué piezas y cantidades se requieren para armar cada nivel del producto final."
    },
    {
        id: 61,
        area: "Planeación Estratégica",
        pregunta: "¿Qué evalúa fundamentalmente el análisis FODA en su dimensión externa (Oportunidades y Amenazas)?",
        opciones: [
            "A) Las capacidades financieras y debilidades tecnológicas internas de la empresa.",
            "B) Los factores del entorno macro y competitivo (económicos, tecnológicos, legales, sociales y de mercado) ajenos al control directo de la organización.",
            "C) Los salarios y compensaciones del equipo directivo.",
            "D) La eficiencia operativa de las líneas de producción."
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis externo del FODA examina las oportunidades y amenazas del entorno general y competitivo donde la empresa opera pero no puede controlar directamente."
    },
    {
        id: 62,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué objetivo persigue la aplicación de un clima laboral (o clima organizacional) mediante encuestas periódicas?",
        opciones: [
            "A) Calcular la depreciación fiscal contable de los edificios corporativos.",
            "B) Medir la percepción de los colaboradores respecto a las condiciones de trabajo, liderazgo, relaciones interpersonales y motivación general en la empresa.",
            "C) Determinar los aranceles de importación de mercancías extranjeras.",
            "D) Auditar los estados financieros de pérdidas y ganancias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las encuestas de clima organizacional permiten diagnosticar la satisfacción laboral, identificar focos de conflicto y diseñar planes de mejora en el ambiente de trabajo."
    },
    {
        id: 63,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué significa el concepto de 'Apalancamiento Operativo' en la estructura de costos de una empresa?",
        opciones: [
            "A) El uso de costos operativos fijos en lugar de costos variables para amplificar el impacto de los cambios en las ventas sobre la utilidad operativa (UAII).",
            "B) El endeudamiento bancario a largo plazo contratado para comprar maquinaria.",
            "C) La rotación de las cuentas por cobrar comerciales.",
            "D) El pago de dividendos en efectivo a los accionistas preferentes."
        ],
        respuestaCorrecta: 0,
        explicacion: "El apalancamiento operativo proviene de la presencia de costos fijos de operación; a mayor proporción de costos fijos, un incremento en ventas genera un aumento desproporcionado en la utilidad operativa."
    },
    {
        id: 64,
        area: "Mercadotecnia",
        pregunta: "En el diseño de estrategias de marca, ¿qué comprende el concepto de 'Capital de Marca' (Brand Equity)?",
        opciones: [
            "A) El valor financiero y el poder intangible que una marca aporta a un producto en la mente del consumidor, reflejado en lealtad, notoriedad y asociaciones de calidad.",
            "B) El inventario físico de mercancía almacenada en las tiendas.",
            "C) El costo de registro de patentes ante la secretaría de economía.",
            "D) El presupuesto publicitario anual asignado a televisión."
        ],
        respuestaCorrecta: 0,
        explicacion: "El brand equity o valor de marca representa el valor añadido que la marca otorga al producto, impulsando la preferencia del cliente y el poder de fijación de precios."
    },
    {
        id: 65,
        area: "Administración de Operaciones",
        pregunta: "En la administración de proyectos mediante redes PERT/CPM, ¿cómo se define la 'Ruta Crítica'?",
        opciones: [
            "A) La secuencia de actividades con menor holgura que determina la duración mínima total del proyecto.",
            "B) El conjunto de tareas que requiere menor asignación presupuestal.",
            "C) Las actividades que tienen la mayor holgura total dentro del diagrama.",
            "D) El camino exclusivo de las tareas subcontratadas con terceros."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ruta crítica es la cadena de actividades más larga en la red y determina el tiempo mínimo de ejecución; cualquier retraso en estas tareas atrasa todo el proyecto."
    },
    {
        id: 66,
        area: "Planeación Estratégica",
        pregunta: "¿Qué caracteriza a una estrategia corporativa de 'Integración hacia Adelante' (Forward Integration)?",
        opciones: [
            "A) Comprar o asumir el control de los proveedores de materias primas.",
            "B) Adquirir o controlar los canales de distribución o puntos de venta detallistas más cercanos al consumidor final.",
            "C) Fusionarse con un competidor directo del mismo sector industrial.",
            "D) Diversificar hacia mercados internacionales no relacionados."
        ],
        respuestaCorrecta: 1,
        explicacion: "La integración hacia adelante ocurre cuando la empresa toma control de las fases posteriores de su cadena de valor, como la distribución y comercialización directa al cliente."
    },
    {
        id: 67,
        area: "Gestión del Talento Humano",
        pregunta: "En la legislación y administración laboral, ¿qué implica el principio de 'Equidad Interna' en la estructura de compensaciones?",
        opciones: [
            "A) Pagar exactamente el mismo salario a todos los empleados sin importar su puesto.",
            "B) Garantizar que puestos con similar nivel de complejidad, responsabilidad y valor para la organización reciban una remuneración justa y equiparable internamente.",
            "C) Supeditar los sueldos a la inflación macroeconómica anual.",
            "D) Igualar las percepciones salariales con las empresas de la competencia regional."
        ],
        respuestaCorrecta: 1,
        explicacion: "La equidad interna busca que la compensación guarde congruencia y justicia dentro de la empresa conforme a la jerarquía y valor relativo de cada puesto."
    },
    {
        id: 68,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón financiera de 'Rotación de Inventarios'?",
        opciones: [
            "A) La cantidad de veces que el inventario se vende y se reemplaza en un periodo determinado, reflejando la eficiencia en la gestión de almacén.",
            "B) El porcentaje de pasivos cubiertos con efectivo inmediato.",
            "C) El rendimiento neto sobre el capital contable.",
            "D) El costo de las comisiones bancarias por financiamiento."
        ],
        respuestaCorrecta: 0,
        explicacion: "La rotación de inventarios indica la rapidez con la que la mercancía es vendida; una alta rotación libera capital de trabajo y evita obsolescencia."
    },
    {
        id: 69,
        area: "Mercadotecnia",
        pregunta: "¿Qué objetivo persigue una estrategia de 'Marketing de Guerrilla' en el entorno comercial competitivo?",
        opciones: [
            "A) Financiar campañas publicitarias masivas en televisión abierta nacional.",
            "B) Utilizar tácticas de marketing no convencionales, de bajo costo y alto impacto emocional o sorpresa para capturar la atención de nichos de mercado.",
            "C) Monitorear los estados contables de pérdidas y ganancias.",
            "D) Establecer contratos de distribución exclusiva con cadenas multinacionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El marketing de guerrilla emplea creatividad, ingenio y métodos de bajo costo para generar gran impacto mediático, ideal para empresas con presupuestos limitados."
    },
    {
        id: 70,
        area: "Administración de Operaciones",
        pregunta: "En la metodología SMED (Single-Minute Exchange of Die), ¿cuál es el objetivo principal al reducir los tiempos de preparación de maquinaria?",
        opciones: [
            "A) Incrementar el consumo de energía eléctrica de los motores.",
            "B) Convertir operaciones internas (con la máquina detenida) en externas (con la máquina operando) para disminuir los lotes de producción y ganar flexibilidad.",
            "C) Aumentar la cantidad de inventario en proceso (WIP) en las líneas.",
            "D) Despedir al personal técnico de mantenimiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "El SMED busca reducir el tiempo de cambio de herramental a menos de diez minutos, permitiendo lotes pequeños de producción sin perder eficiencia."
    },
    {
        id: 71,
        area: "Planeación Estratégica",
        pregunta: "¿Qué define el concepto de 'Core Competence' (Competencia Central o Distintiva) según Prahalad y Hamel?",
        opciones: [
            "A) El conjunto de habilidades y destrezas colectivas acumuladas en la organización que le otorgan una ventaja competitiva única y difícil de imitar por los rivales.",
            "B) El equipo de cómputo básico asignado al departamento de contabilidad.",
            "C) Las cuotas mínimas de ventas exigidas al equipo comercial.",
            "D) Los manuales operativos impresos obligatorios por ley."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las competencias centrales son los saberes y capacidades distintivas clave que diferencian a una empresa y sirven de base para incursionar en múltiples mercados."
    },
    {
        id: 72,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del talento, ¿qué finalidad persigue la aplicación de una 'Matriz de Versatilidad o Polivalencia' (Skills Matrix)?",
        opciones: [
            "A) Registrar los antecedentes penales de contratación.",
            "B) Identificar y mapear las habilidades, destrezas y grados de dominio que posee cada colaborador para operar distintas estaciones de trabajo o procesos.",
            "C) Calcular las retenciones de impuestos sobre la nómina quincenal.",
            "D) Evaluar la ergonomía de las sillas de oficina."
        ],
        respuestaCorrecta: 1,
        explicacion: "La matriz de polivalencia visualiza el grado de flexibilidad y capacitación cruzada del personal, facilitando la asignación flexible ante ausentismos o cambios de turno."
    },
    {
        id: 73,
        area: "Finanzas Corporativas",
        pregunta: "¿Cuál es el significado financiero de un Periodo de Recuperación de la Inversión (Payback) descontado?",
        opciones: [
            "A) El tiempo exacto que tardan los flujos de efectivo netos actualizados (traídos a valor presente) en recuperar la inversión inicial del proyecto.",
            "B) La vida útil total depreciable de los activos fijos.",
            "C) El porcentaje de rendimiento anual sobre el capital social.",
            "D) La tasa impositiva corporativa aplicada a las utilidades."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Payback descontado mide cuántos años toma recuperar el desembolso inicial utilizando flujos de efectivo netos descontados a valor presente."
    },
    {
        id: 74,
        area: "Mercadotecnia",
        pregunta: "¿Qué comprende el concepto de 'Marketing Relacional' (Relationship Marketing)?",
        opciones: [
            "A) Vender una sola vez al mayor número de clientes masivos posibles sin importar su retorno.",
            "B) Construir y fomentar relaciones duraderas, leales y mutuamente beneficiosas con los clientes, socios y proveedores clave a largo plazo.",
            "C) Realizar llamadas de cobranza agresiva a deudores morosos.",
            "D) Limitar la publicidad corporativa a anuncios clasificados impresos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El marketing relacional prioriza la retención de clientes y la creación de vínculos a largo plazo frente a la transacción comercial aislada."
    },
    {
        id: 75,
        area: "Administración de Operaciones",
        pregunta: "En los sistemas de producción esbelta, ¿qué significa el concepto de 'Heijunka'?",
        opciones: [
            "A) La automatización inteligente con toque humano (Jidoka).",
            "B) La nivelación y uniformización del volumen y la variedad de la producción para estabilizar el flujo y evitar desperdicios por fluctuaciones extremas.",
            "C) La inspección al 100% de los defectos al final de la línea.",
            "D) El cambio rápido de herramientas de troquelado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Heijunka es la técnica de nivelación de la producción en mezcla y volumen para evitar altibajos y sobrecargas en las líneas de ensamble."
    },
    {
        id: 76,
        area: "Planeación Estratégica",
        pregunta: "¿Qué caracteriza a una estrategia de 'Integración hacia Atrás' (Backward Integration)?",
        opciones: [
            "A) Adquirir o asumir el control directo de los proveedores de materias primas e insumos productivos.",
            "B) Comprar cadenas de tiendas detallistas para vender directo al consumidor.",
            "C) Fusionarse con competidores directos en quiebra.",
            "D) Reducir operaciones vendiendo divisiones internacionales."
        ],
        respuestaCorrecta: 0,
        explicacion: "La integración hacia atrás busca asegurar el suministro de insumos mediante la adquisición o control de los proveedores de materias primas."
    },
    {
        id: 77,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del desempeño, ¿cuál es la principal limitación o sesgo del método de 'Escala Gráfica de Calificación' si no se diseña adecuadamente?",
        opciones: [
            "A) Requiere cálculos matemáticos hipercomplejos con supercomputadoras.",
            "B) Puede incurrir en subjetividad y sesgos de evaluación (como la leniencia, la tendencia central o el efecto halo) debido a definiciones ambiguas de los factores.",
            "C) Es ilegal ante la ley federal del trabajo.",
            "D) Obliga a despedir obligatoriamente al 10% de la plantilla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las escalas gráficas tradicionales son propensas a sesgos del evaluador (como calificar a todos por igual o dejarse llevar por una sola impresión) si carecen de descripciones conductuales claras."
    },
    {
        id: 78,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué representa el Apalancamiento Operativo alto en una empresa?",
        opciones: [
            "A) Que la empresa tiene una gran proporción de costos fijos operativos, por lo que un pequeño cambio porcentual en las ventas generará un cambio muy drástico en la utilidad operativa.",
            "B) Que la empresa no tiene deudas bancarias a largo plazo.",
            "C) Que el capital de trabajo neto es igual a cero.",
            "D) Que los inventarios rotan más de cincuenta veces al año."
        ],
        respuestaCorrecta: 0,
        explicacion: "Un apalancamiento operativo alto implica sensibilidad extrema: el riesgo y el potencial de ganancia aumentan al tener costos fijos elevados frente a los variables."
    },
    {
        id: 79,
        area: "Mercadotecnia",
        pregunta: "¿Qué función cumple el análisis de las '5 Fuerzas de la Competencia' de Michael Porter al formular estrategias comerciales y de mercado?",
        opciones: [
            "A) Calcular los impuestos corporativos sobre la renta.",
            "B) Evaluar la atractividad estructural y la intensidad competitiva a largo plazo de una industria analizando rivalidad, sustitutos, nuevos entrantes, proveedores y clientes.",
            "C) Determinar el clima laboral interno de los empleados.",
            "D) Auditar los estados de flujo de efectivo trimestrales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las 5 fuerzas de Porter diagnostican la rentabilidad estructural y la competencia de una industria para orientar el posicionamiento estratégico de la empresa."
    },
    {
        id: 80,
        area: "Administración de Operaciones",
        pregunta: "En la administración de inventarios bajo revisión continua, ¿cómo se define el 'Punto de Reorden' (ROP)?",
        opciones: [
            "A) El momento financiero en el que la empresa alcanza el punto de equilibrio contable.",
            "B) El nivel de inventario que activa la emisión de una nueva orden de compra, considerando la demanda esperada durante el tiempo de entrega (Lead Time) más el stock de seguridad.",
            "C) El costo total anual de almacenamiento en bodegas.",
            "D) La cantidad máxima de unidades defectuosas toleradas por lote."
        ],
        respuestaCorrecta: 1,
        explicacion: "El punto de reorden establece el umbral físico de inventario para reordenar producto al proveedor cubriendo el tiempo de entrega y evitando paros."
    },
    {
        id: 81,
        area: "Planeación Estratégica",
        pregunta: "En el análisis de los factores externos de una organización, ¿qué herramienta de dirección estratégica examina de forma específica los factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales?",
        opciones: [
            "A) La matriz de crecimiento-participación del BCG.",
            "B) El análisis de las Cinco Fuerzas de Porter.",
            "C) El análisis macroambiental PESTEL.",
            "D) La matriz de perfiles competitivos (MPC)."
        ],
        respuestaCorrecta: 2,
        explicacion: "El análisis PESTEL es el marco estratégico diseñado para evaluar las variables macroambientales externas que impactan de forma indirecta o directa a la organización."
    },
    {
        id: 82,
        area: "Gestión del Talento Humano",
        pregunta: "¿Cómo se denomina al proceso administrativo mediante el cual se atrae a candidatos potencialmente calificados para ocupar un puesto vacante dentro de la organización?",
        opciones: [
            "A) Reclutamiento de personal.",
            "B) Inducción y capacitación.",
            "C) Valuación de puestos.",
            "D) Auditoría de nómina."
        ],
        respuestaCorrecta: 0,
        explicacion: "El reclutamiento es el conjunto de procedimientos orientados a atraer candidatos idóneos para nutrir el proceso de selección de personal."
    },
    {
        id: 83,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón financiera de 'Rotación del Activo Total' en la administración corporativa?",
        opciones: [
            "A) La proporción de deuda bancaria a largo plazo frente al capital social.",
            "B) La eficiencia con la que la empresa utiliza sus activos totales para generar ingresos por ventas (Ventas / Activos Totales).",
            "C) El porcentaje de utilidad neta retenida en la empresa.",
            "D) La liquidez disponible para cubrir pasivos inmediatos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La rotación del activo total mide qué tan productivos son los recursos invertidos en generar ventas en relación con el valor global de los activos."
    },
    {
        id: 84,
        area: "Mercadotecnia",
        pregunta: "En el diseño de estrategias de comercialización, ¿qué caracteriza al enfoque de 'Marketing Directo'?",
        opciones: [
            "A) La difusión masiva de anuncios impresos en vallas publicitarias urbanas.",
            "B) La comunicación y venta personalizada dirigida a consumidores individuales seleccionados cuidadosamente mediante bases de datos para obtener una respuesta inmediata.",
            "C) El posicionamiento global de marca en televisión abierta.",
            "D) La venta exclusiva al mayoreo a través de intermediarios mayoristas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El marketing directo establece un canal de comunicación directo y medible con clientes específicos (ej. email marketing, telemercadeo, cupones personalizados)."
    },
    {
        id: 85,
        area: "Administración de Operaciones",
        pregunta: "En la administración de la producción, ¿qué objetivo fundamental persigue el uso de gráficos o cartas de control estadístico de procesos (SPC)?",
        opciones: [
            "A) Calcular la depreciación fiscal anual de los equipos de oficina.",
            "B) Distinguir entre la variación natural (causas aleatorias) y la variación atribuible (causas asignables) para mantener el proceso bajo control estadístico.",
            "C) Fijar las comisiones de los agentes de ventas de la sucursal.",
            "D) Establecer las políticas de vacaciones del personal sindicalizado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cartas de control son herramientas de control estadístico que detectan anomalías o causas asignables de variación antes de que se generen productos defectuosos."
    },
    {
        id: 86,
        area: "Planeación Estratégica",
        pregunta: "En la gestión corporativa de carteras de negocios, ¿cómo califica la matriz BCG a las unidades estratégicas de negocio conocidas como 'Signos de Interrogación' (Question Marks)?",
        opciones: [
            "A) Alta participación de mercado en industrias maduras y estancadas.",
            "B) Baja participación de mercado en mercados de bajo crecimiento, sin generar valor.",
            "C) Baja participación relativa de mercado en industrias con alta tasa de crecimiento, requiriendo grandes inversiones de efectivo para evaluar su viabilidad.",
            "D) Alta participación en mercados líderes con flujo de efectivo excedentario."
        ],
        respuestaCorrecta: 2,
        explicacion: "Los signos de interrogación o niños problema operan en mercados de alto crecimiento pero con baja cuota, exigiendo ingentes recursos para evitar su declive."
    },
    {
        id: 87,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué establece la teoría de los Dos Factores de Herzberg al analizar las condiciones que generan insatisfacción laboral?",
        opciones: [
            "A) Que la insatisfacción proviene exclusivamente de la ausencia de factores de higiene (como sueldos injustos, malas políticas o mal clima de trabajo).",
            "B) Que la insatisfacción se origina por la falta de reconocimiento en el logro de tareas.",
            "C) Que los empleados nunca están conformes sin importar los incentivos económicos.",
            "D) Que la capacitación técnica disminuye el compromiso operativo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Herzberg determinó que los factores higiénicos previenen la insatisfacción laboral si son adecuados, aunque por sí solos no generan motivación intrínseca."
    },
    {
        id: 88,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué representa el concepto de 'Apalancamiento Financiero' en la estructura de capital de una empresa?",
        opciones: [
            "A) La reducción de costos fijos de manufactura mediante tecnología.",
            "B) El uso de financiamiento externo mediante deuda con costo fijo para incrementar el potencial de rendimiento del capital contable.",
            "C) La conversión de inventarios obsoletos en efectivo líquido.",
            "D) El incremento de las comisiones del equipo de ventas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El apalancamiento financiero amplifica la rentabilidad y el riesgo para los accionistas mediante la incorporación de deuda en la estructura financiera."
    },
    {
        id: 89,
        area: "Mercadotecnia",
        pregunta: "En el análisis del comportamiento del consumidor, ¿qué comprende la dimensión de los 'Factores Psicográficos'?",
        opciones: [
            "A) La edad, el género, los ingresos económicos y el nivel educativo formal.",
            "B) La ubicación geográfica regional y la densidad de población urbana o rural.",
            "C) El estilo de vida, la personalidad, los valores, intereses y opiniones de los individuos.",
            "D) El volumen de compra y la frecuencia de uso del bien adquirido."
        ],
        respuestaCorrecta: 2,
        explicacion: "La segmentación psicográfica clasifica a los consumidores con base en su estilo de vida, clase social, personalidad y valores actitudinales."
    },
    {
        id: 90,
        area: "Administración de Operaciones",
        pregunta: "¿Qué función cumple el sistema de planeación de requerimientos de capacidad (CRP - Capacity Requirements Planning) en la manufactura?",
        opciones: [
            "A) Verificar si los centros de trabajo de la planta cuentan con la capacidad disponible suficiente para ejecutar el Programa Maestro de Producción (MPS) y el MRP.",
            "B) Calcular los impuestos corporativos sobre la renta anual.",
            "C) Establecer las rutas de transporte internacional de mercancías.",
            "D) Auditar los estados de flujo de efectivo trimestrales."
        ],
        respuestaCorrecta: 0,
        explicacion: "El CRP evalúa la viabilidad de carga de trabajo en las máquinas y operarios para asegurar que no existan cuellos de botella insalvables antes de liberar las órdenes."
    },
    {
        id: 91,
        area: "Planeación Estratégica",
        pregunta: "En el análisis competitivo de una empresa, ¿qué busca evaluar la Matriz de Perfiles Competitivos (MPC)?",
        opciones: [
            "A) Los costos unitarios contables de producción frente al proveedor global.",
            "B) Identificar a los principales competidores de la empresa y sus fortalezas y debilidades particulares en relación con una muestra de factores críticos de éxito de la industria.",
            "C) La tasa impositiva fiscal de los países competidores.",
            "D) El valor de salvamento de los activos fijos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La MPC contrasta a la empresa frente a sus competidores clave ponderando factores críticos de éxito del sector comercial."
    },
    {
        id: 92,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del factor humano, ¿en qué consiste la técnica de evaluación de desempeño conocida como 'Incidentes Críticos'?",
        opciones: [
            "A) Registrar de manera sistemática aquellos comportamientos o conductas laborales extremadamente positivas o negativas que ejemplifican el desempeño real del empleado.",
            "B) Aplicar exámenes psicométricos de inteligencia numérica bajo presión.",
            "C) Auditar los registros de ausentismo por enfermedad general.",
            "D) Evaluar al personal exclusivamente mediante votación de los compañeros de turno."
        ],
        respuestaCorrecta: 0,
        explicacion: "El método de incidentes críticos documenta conductas excepcionales (destacadas o deficientes) del trabajador durante el periodo de evaluación."
    },
    {
        id: 93,
        area: "Finanzas Corporativas",
        pregunta: "¿Cuál es el propósito central de calcular el 'Punto de Equilibrio' (Break-Even Point) en la administración financiera operativa?",
        opciones: [
            "A) Determinar el nivel de ventas exacto (en unidades o en dinero) en el cual los ingresos totales igualan a los costos totales, sin generar pérdidas ni utilidades.",
            "B) Medir el rendimiento neto sobre el capital contable al cierre del año fiscal.",
            "C) Calcular la rotación de las cuentas por cobrar comerciales.",
            "D) Establecer el valor de mercado accionario en la bolsa de valores."
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto de equilibrio señala el umbral financiero donde la utilidad operativa es cero, sirviendo de referencia para evaluar riesgos de ventas mínimas."
    },
    {
        id: 94,
        area: "Mercadotecnia",
        pregunta: "En la estrategia de distribución comercial, ¿qué implica un canal de distribución 'Indirecto Largo'?",
        opciones: [
            "A) La venta directa del fabricante al consumidor final a través de internet sin intermediarios.",
            "B) La participación de múltiples intermediarios comerciales entre el productor y el consumidor final (ej. fabricante, mayorista, distribuidor regional, detallista y cliente).",
            "C) La utilización exclusiva de tiendas de fábrica propias.",
            "D) El uso de cadenas de suministro internas sin transacciones de mercado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un canal indirecto largo involucra varios niveles de intermediarios comerciales (mayoristas, minoristas) antes de que el producto llegue al usuario final."
    },
    {
        id: 95,
        area: "Administración de Operaciones",
        pregunta: "En la teoría de restricciones (TOC), ¿en qué consiste el cuarto paso enfocado en 'Elevar la Restricción'?",
        opciones: [
            "A) Identificar el cuello de botella mediante diagramas de flujo.",
            "B) Invertir recursos financieros, tecnológicos o humanos para aumentar la capacidad productiva de la estación restrictiva que limita el sistema.",
            "C) Detener toda la producción hasta que se vendan los inventarios.",
            "D) Subordinar los procesos auxiliares al ritmo del cuello de botella."
        ],
        respuestaCorrecta: 1,
        explicacion: "Elevar la restricción implica tomar acciones de mejora o inversión (comprar otra máquina, contratar más personal especializado) para incrementar la capacidad del cuello de botella."
    },
    {
        id: 96,
        area: "Planeación Estratégica",
        pregunta: "¿Qué caracteriza a una estructura organizacional de tipo 'Divisional'?",
        opciones: [
            "A) Agrupar a los especialistas por funciones técnicas homogéneas (producción, finanzas, marketing).",
            "B) Organizar la empresa en divisiones autónomas semiautónomas basadas en productos, regiones geográficas o tipos de clientes específicos.",
            "C) Depender exclusivamente de una jerarquía centralizada sin autonomía local.",
            "D) Operar bajo proyectos temporales sin estructura permanente."
        ],
        respuestaCorrecta: 1,
        explicacion: "La estructura divisional descentraliza la autoridad agrupando unidades por líneas de productos, mercados o zonas geográficas, operando como centros de utilidad independientes."
    },
    {
        id: 97,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del factor humano, ¿qué función cumple el 'Contrato Colectivo de Trabajo'?",
        opciones: [
            "A) Regular las condiciones generales de labor pactadas entre uno o varios sindicatos de trabajadores y uno o varios patrones.",
            "B) Establecer las cuotas individuales de ventas para cada vendedor de la sucursal.",
            "C) Fijar la estrategia fiscal de deducciones de impuestos sobre la renta.",
            "D) Determinar el diseño ergonómico de las estaciones de trabajo."
        ],
        respuestaCorrecta: 0,
        explicacion: "El contrato colectivo es el convenio celebrado entre un sindicato y uno o varios patrones para establecer las condiciones de trabajo aplicables en la empresa."
    },
    {
        id: 98,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón financiera de 'Margen de Utilidad Neta'?",
        opciones: [
            "A) La proporción de las ventas totales que se convierte en utilidad neta disponible para los accionistas tras descontar todos los costos, gastos e impuestos.",
            "B) La velocidad con la que se recuperan las cuentas por cobrar comerciales.",
            "C) El grado de endeudamiento bancario frente a los activos fijos.",
            "D) La rotación anual del inventario de productos terminados."
        ],
        respuestaCorrecta: 0,
        explicacion: "El margen de utilidad neta relaciona la ganancia final obtenida frente al volumen total de ventas, evaluando la rentabilidad global de la gestión comercial."
    },
    {
        id: 99,
        area: "Mercadotecnia",
        pregunta: "En la estrategia de mezcla de productos, ¿qué representa la 'Amplitud' (o anchura) de la mezcla?",
        opciones: [
            "A) El número total de líneas de productos diferentes que maneja una empresa.",
            "B) La cantidad de variantes o modelos específicos dentro de una misma línea de producto.",
            "C) El precio promedio ponderado de los artículos en oferta.",
            "D) El volumen físico de unidades almacenadas en el centro de distribución."
        ],
        respuestaCorrecta: 0,
        explicacion: "La amplitud de la mezcla de productos se refiere al número de líneas de productos distintas que ofrece una compañía en el mercado."
    },
    {
        id: 100,
        area: "Administración de Operaciones",
        pregunta: "¿Qué objetivo persigue la metodología de la 'Teoría de Colas' (Líneas de Espera) en la administración de operaciones de servicios o manufactura?",
        opciones: [
            "A) Calcular la depreciación fiscal contable de los edificios.",
            "B) Modelar y optimizar matemáticamente el comportamiento de las filas de espera para equilibrar los costos de servicio frente a los costos de demora de los clientes.",
            "C) Establecer las políticas salariales de contratación eventual.",
            "D) Auditar los estados de flujo de caja trimestrales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La teoría de colas utiliza modelos probabilísticos para analizar tiempos de espera, número de servidores y longitud de filas, optimizando la eficiencia operativa."
    },
    {
        id: 101,
        area: "Planeación Estratégica",
        pregunta: "En la dirección estratégica, ¿qué define el concepto de 'Planeación de Contingencias'?",
        opciones: [
            "A) El cálculo de los presupuestos ordinarios de operación anual.",
            "B) El desarrollo preventivo de planes de acción alternativos que se activarán en caso de que ocurran eventos imprevistos o riesgos críticos en el entorno.",
            "C) La auditoría fiscal de las declaraciones de impuestos.",
            "D) La contratación obligatoria de seguros contra incendios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los planes de contingencia son estrategias de respuesta anticipada diseñadas para mitigar impactos ante escenarios de riesgo o crisis imprevistas."
    },
    {
        id: 102,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración de recursos humanos, ¿qué caracteriza a la modalidad de 'Teletrabajo o Trabajo Remoto' regulada administrativamente?",
        opciones: [
            "A) La obligación estricta de laborar dentro de las oficinas corporativas las 24 horas del día.",
            "B) El desempeño de actividades remuneradas utilizando tecnologías de la información en lugares distintos al centro de trabajo del patrón de manera preponderante.",
            "C) La eliminación de contratos individuales y prestaciones sociales.",
            "D) La prohibición total de comunicarse con los compañeros de equipo."
        ],
        respuestaCorrecta: 1,
        explicacion: "El teletrabajo descentraliza la ejecución de las labores utilizando plataformas digitales fuera de las instalaciones físicas de la organización."
    },
    {
        id: 103,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué significa el concepto de 'Estructura de Capital' en las finanzas de una empresa?",
        opciones: [
            "A) La proporción relativa de financiamiento entre deuda a largo plazo y capital contable (acciones) que utiliza la empresa para fondear sus operaciones y activos.",
            "B) El inventario físico de maquinaria y equipo industrial.",
            "C) La distribución porcentual de los costos fijos frente a los variables.",
            "D) El saldo disponible en cuentas bancarias de chequera."
        ],
        respuestaCorrecta: 0,
        explicacion: "La estructura de capital define la mezcla de fuentes financieras a largo plazo (pasivos con costo y capital contable) que optimizan el valor de la empresa."
    },
    {
        id: 104,
        area: "Mercadotecnia",
        pregunta: "En la gestión de marcas, ¿en qué consiste la estrategia de 'Extensión de Línea'?",
        opciones: [
            "A) Lanzar una categoría de producto totalmente nueva en un sector ajeno.",
            "B) Introducir artículos adicionales dentro de una misma categoría de producto bajo la misma marca existente (ej. nuevos sabores, tamaños, presentaciones o aromas).",
            "C) Vender la marca a una empresa competidora extranjera.",
            "D) Retirar del mercado los productos obsoletos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La extensión de línea utiliza una marca establecida para introducir nuevos items dentro de la misma categoría (ej. presentación light, envase familiar)."
    },
    {
        id: 105,
        area: "Administración de Operaciones",
        pregunta: "En la gestión de la cadena de suministro, ¿qué función cumple el índice OTIF (On-Time In-Full)?",
        opciones: [
            "A) Medir el porcentaje de pedidos entregados puntualmente en la fecha acordada y completos en las cantidades y especificaciones solicitadas.",
            "B) Calcular el costo de mantenimiento preventivo de la flota vehicular.",
            "C) Determinar la rotación anual del inventario en almacén central.",
            "D) Evaluar la eficiencia térmica de las plantas de proceso."
        ],
        respuestaCorrecta: 0,
        explicacion: "El OTIF evalúa la excelencia operativa logística midiendo simultáneamente la entrega a tiempo y el cumplimiento exacto del volumen del pedido."
    },
    {
        id: 106,
        area: "Planeación Estratégica",
        pregunta: "En la evaluación de proyectos corporativos, ¿qué busca la herramienta de la 'Matriz SPACE' (Posición Estratégica y Evaluación de la Acción)?",
        opciones: [
            "A) Determinar la postura estratégica de la empresa evaluando dimensiones financieras, de ventaja competitiva, de estabilidad del entorno y de la industria.",
            "B) Calcular la depreciación fiscal de bienes inmuebles.",
            "C) Medir el clima laboral mediante encuestas de satisfacción.",
            "D) Controlar los tiempos de entrega en rutas de transporte."
        ],
        respuestaCorrecta: 0,
        explicacion: "La matriz SPACE es un marco de cuatro cuadrantes que orienta si la empresa debe adoptar estrategias agresivas, conservadoras, defensivas o competitivas."
    },
    {
        id: 107,
        area: "Gestión del Talento Humano",
        pregunta: "¿Qué establece la Ley Federal del Trabajo respecto al reparto de utilidades (PTU) a los trabajadores en las empresas mexicanas?",
        opciones: [
            "A) Que es una prestación opcional que el patrón otorga solo si lo desea.",
            "B) Que las empresas están obligadas a distribuir entre sus trabajadores un porcentaje de las utilidades netas obtenidas en el ejercicio fiscal conforme a la ley.",
            "C) Que se reparte de forma igualitaria sin importar los días trabajados ni los salarios.",
            "D) Que solo aplica para los directores generales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El reparto de utilidades (PTU) es un derecho constitucional obligatorio donde los empleados participan de las ganancias netas reportadas por la entidad."
    },
    {
        id: 108,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué representa el 'Capital de Trabajo' en la administración financiera corporativa?",
        opciones: [
            "A) Los recursos financieros líquidos necesarios para financiar las operaciones diarias a corto plazo (representados por el activo circulante).",
            "B) La inversión total en terrenos, edificios y maquinaria pesada.",
            "C) El endeudamiento bancario a un plazo mayor de diez años.",
            "D) Las acciones preferentes emitidas en bolsa."
        ],
        respuestaCorrecta: 0,
        explicacion: "El capital de trabajo representa los recursos de corto plazo que la empresa requiere para operar cotidianamente (inventarios, efectivo, cuentas por cobrar)."
    },
    {
        id: 109,
        area: "Mercadotecnia",
        pregunta: "En la investigación comercial, ¿cuál es la diferencia fundamental entre la 'Investigación Primaria' y la 'Investigación Secundaria'?",
        opciones: [
            "A) La primaria utiliza datos recopilados de primera mano ex profeso para el problema actual (encuestas, experimentos), mientras que la secundaria utiliza datos ya existentes recabados previamente por otros.",
            "B) La primaria la realizan contadores y la secundaria ingenieros.",
            "C) La primaria es gratuita y la secundaria es extremadamente costosa.",
            "D) No existe diferencia metodológica en marketing."
        ],
        respuestaCorrecta: 0,
        explicacion: "La investigación primaria genera datos nuevos y directos para el estudio en curso, en tanto que la secundaria recopila información ya publicada con anterioridad."
    },
    {
        id: 110,
        area: "Administración de Operaciones",
        pregunta: "En los sistemas de producción esbelta (Lean), ¿qué función cumple una tarjeta 'Kanban'?",
        opciones: [
            "A) Servir como señal visual de autorización para producir o retirar material únicamente cuando la estación posterior lo demanda (sistema pull).",
            "B) Registrar la asistencia y checador electrónico de los obreros.",
            "C) Almacenar las especificaciones de diseño CAD de las piezas.",
            "D) Controlar la contabilidad de costos fijos mensuales."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Kanban es la tarjeta o dispositivo de señalización visual que opera como gatillo operativo en los sistemas de producción jala (pull)."
    },
    {
        id: 111,
        area: "Planeación Estratégica",
        pregunta: "En la dirección estratégica, ¿qué define el concepto de 'Gobierno Corporativo'?",
        opciones: [
            "A) El conjunto de leyes fiscales impuestas por el congreso federal.",
            "B) El sistema de reglas, prácticas y procesos mediante los cuales se dirige, controla y administra una empresa, regulando la relación entre junta directiva, accionistas y grupos de interés.",
            "C) El organigrama operativo de los supervisores de turno.",
            "D) Las estrategias comerciales de precios en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El gobierno corporativo establece los principios de transparencia, rendición de cuentas y equilibrio de poder entre el consejo de administración y los directivos."
    },
    {
        id: 112,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración del factor humano, ¿en qué consiste la 'Capacitación Cruzada' (Cross-training)?",
        opciones: [
            "A) Entrenar a los colaboradores en múltiples tareas y puestos diferentes para incrementar la flexibilidad operativa de los equipos de trabajo.",
            "B) Despedir al personal que no cumpla con las metas de ventas.",
            "C) Reducir los salarios base por temporadas de baja producción.",
            "D) Contratar instructores extranjeros sin experiencia local."
        ],
        respuestaCorrecta: 0,
        explicacion: "La capacitación cruzada forma empleados polivalentes capaces de cubrir diferentes funciones operativas ante ausencias o cuellos de botella."
    },
    {
        id: 113,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué mide la razón de 'Endeudamiento a Capital Contable' (Debt-to-Equity Ratio)?",
        opciones: [
            "A) La proporción de los fondos aportados por los acreedores (deuda) frente a los fondos aportados por los accionistas (capital contable).",
            "B) La velocidad de cobro a clientes morosos.",
            "C) El rendimiento neto sobre los activos totales.",
            "D) La rotación anual de los inventarios en almacén."
        ],
        respuestaCorrecta: 0,
        explicacion: "La razón de deuda a capital mide el apalancamiento financiero comparando el total de pasivos frente al patrimonio neto de los accionistas."
    },
    {
        id: 114,
        area: "Mercadotecnia",
        pregunta: "En la estrategia de precios, ¿en qué consiste la política de 'Precios Psicológicos'?",
        opciones: [
            "A) Fijar precios basados estrictamente en el costo de manufactura más un margen fijo.",
            "B) Utilizar cifras con terminaciones específicas (ej. 99 en lugar de números cerrados) o apelaciones emocionales para influir en la percepción de valor y asequibilidad del consumidor.",
            "C) Ofertar productos exclusivamente a psiquiatras y psicólogos.",
            "D) Subastar las mercancías al mejor postor en bolsa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los precios psicológicos aprovechan sesgos cognitivos del consumidor (como fijar $99.00 en lugar de $100.00) para estimular la decisión de compra."
    },
    {
        id: 115,
        area: "Administración de Operaciones",
        pregunta: "En la gestión de inventarios, ¿qué se entiende por un sistema de 'Revisión Periódica' (Fixed-Time Period Model)?",
        opciones: [
            "A) Un sistema donde el inventario se revisa en intervalos de tiempo constantes y predeterminados, solicitando en cada ocasión la cantidad necesaria para rellenar hasta un nivel máximo.",
            "B) Un sistema donde se emite una orden de compra cada vez que el stock llega exactamente a cero.",
            "C) Un sistema que audita la contabilidad fiscal trimestral.",
            "D) Un método para calcular la depreciación de activos fijos."
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo de revisión periódica evalúa el inventario en fechas fijas del calendario (ej. cada viernes) y ordena la diferencia respecto al stock máximo esperado."
    },
    {
        id: 116,
        area: "Planeación Estratégica",
        pregunta: "En la dirección estratégica, ¿qué evalúa una auditoría del 'Entorno Demográfico' dentro del macroentorno?",
        opciones: [
            "A) Las tasas de interés y la inflación interbancaria.",
            "B) Las características de la población humana, incluyendo tamaño, densidad, ubicación, edad, género, tasa de natalidad y estructura familiar.",
            "C) Las innovaciones tecnológicas en software ERP.",
            "D) Las leyes mercantiles de protección al consumidor."
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis demográfico estudia las tendencias poblacionales que modifican el tamaño y las características de los mercados de consumo."
    },
    {
        id: 117,
        area: "Gestión del Talento Humano",
        pregunta: "En la administración de personal, ¿qué objetivo cumple la aplicación de una 'Encuesta de Salida' (Exit Interview) al renunciar un empleado?",
        opciones: [
            "A) Negociar la liquidación legal de forma intimidatoria.",
            "B) Conocer las verdaderas motivaciones, inconformidades y áreas de oportunidad institucional que motivaron la salida del colaborador para corregir la rotación.",
            "C) Calcular los impuestos retenidos por finiquito.",
            "D) Reclutar de inmediato a un familiar del ex colaborador."
        ],
        respuestaCorrecta: 1,
        explicacion: "La entrevista de salida recopila retroalimentación honesta del ex empleado sobre el clima, liderazgo y compensaciones para prevenir futuras bajas."
    },
    {
        id: 118,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué significa el concepto de 'Valor Presente Neto (VPN)' al evaluar proyectos financieros?",
        opciones: [
            "A) La suma del valor descontado de todos los flujos de efectivo netos futuros menos el desembolso de la inversión inicial.",
            "B) El valor nominal de los activos fijos al final de su depreciación.",
            "C) La utilidad neta contable acumulada sin descontar el tiempo.",
            "D) El monto total de los pasivos a corto plazo."
        ],
        respuestaCorrecta: 0,
        explicacion: "El VPN actualiza los flujos futuros a valor presente usando una tasa de descuento y resta la inversión inicial para medir la creación neta de valor monetario."
    },
    {
        id: 119,
        area: "Mercadotecnia",
        pregunta: "En la gestión comercial, ¿qué define el concepto de 'Marketing Mix' (Mezcla de Mercadotecnia)?",
        opciones: [
            "A) Las tácticas y herramientas controlables de producto, precio, plaza y promoción que la empresa combina para producir la respuesta deseada en el mercado meta.",
            "B) El presupuesto publicitario asignado a redes sociales.",
            "C) La mezcla de materias primas utilizadas en manufactura.",
            "D) El organigrama del departamento de ventas."
        ],
        respuestaCorrecta: 0,
        explicacion: "El marketing mix engloba las variables tácticas (las 4 Ps) que la dirección comercial manipula para influir en la demanda de su mercado objetivo."
    },
    {
        id: 120,
        area: "Administración de Operaciones",
        pregunta: "En la administración de operaciones y manufactura esbelta, ¿qué representa el concepto de 'Takt Time'?",
        opciones: [
            "A) El tiempo total que tarda una máquina en ser reparada por mantenimiento.",
            "B) El ritmo de producción necesario (tiempo disponible entre la demanda del cliente) para sincronizar la fabricación con las ventas exactas.",
            "C) El plazo máximo de crédito otorgado por los proveedores.",
            "D) El tiempo estándar de preparación de herramientas (SMED)."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Takt Time marca el pulso de la demanda del cliente, indicando cada cuánto tiempo debe terminarse una unidad de producto para satisfacer exactamente al mercado."
    }
];