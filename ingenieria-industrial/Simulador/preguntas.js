// Banco de Reactivos - EGEL Plus Ingeniería Industrial (Bloque 1: Preguntas 1 a 20)
const bancoPreguntas = [
    {
        id: 1,
        area: "Gestión de Operaciones",
        pregunta: "En un sistema de producción esbelta (Lean Manufacturing), ¿cuál de los siguientes elementos se considera un desperdicio (Muda) principal?",
        opciones: [
            "A) El mantenimiento preventivo programado",
            "B) El inventario en proceso excesivo (WIP)",
            "C) La polivalencia de los operadores",
            "D) El uso de tarjetas Kanban"
        ],
        respuestaCorrecta: 1,
        explicacion: "El inventario excesivo (WIP) oculta problemas en la producción, genera costos de almacenamiento y se considera uno de los 7 desperdicios clásicos del Lean Manufacturing."
    },
    {
        id: 2,
        area: "Control de Calidad",
        pregunta: "¿Qué herramienta estadística se utiliza principalmente para identificar las causas raíz de un problema siguiendo el principio de Pareto (80/20)?",
        opciones: [
            "A) Diagrama de Ishikawa (Causa-Efecto)",
            "B) Diagrama de Pareto",
            "C) Carta de Control X-R",
            "D) Histograma de frecuencias"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Diagrama de Pareto permite ordenar los defectos o problemas por frecuencia de ocurrencia, identificando visualmente los pocos vitales y muchos triviales."
    },
    {
        id: 3,
        area: "Logística y Cadena de Suministro",
        pregunta: "En la gestión de inventarios, ¿qué representa el modelo de Lote Económico de Pedido (EOQ, por sus siglas en inglés)?",
        opciones: [
            "A) El punto exacto de reorden cuando el inventario llega a cero",
            "B) La cantidad de pedido que minimiza los costos totales de inventario y de emisión de orden",
            "C) El inventario máximo de seguridad para evitar desabastecimiento",
            "D) El costo total de mantener la mercancía en el almacén por año"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo EOQ busca el punto de equilibrio donde los costos de ordenar y los costos de mantener inventario se igualan, minimizando el costo total."
    },
    {
        id: 4,
        area: "Gestión de Operaciones",
        pregunta: "Para una línea de ensamble que opera 8 horas diarias con una demanda requerida de 400 piezas por día, ¿cuál es el tiempo de ciclo (Takt Time) necesario en minutos por pieza?",
        opciones: [
            "A) 0.8 minutos",
            "B) 1.2 minutos",
            "C) 1.5 minutos",
            "D) 2.0 minutos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Takt Time se calcula dividiendo el tiempo disponible de trabajo entre la demanda requerida. 8 horas = 480 minutos. 480 min / 400 piezas = 1.2 minutos por pieza."
    },
    {
        id: 5,
        area: "Control de Calidad",
        pregunta: "¿Qué métrica de calidad en la metodología Seis Sigma indica que un proceso tiene un nivel de desempeño equivalente a un máximo de 3.4 defectos por millón de oportunidades (DPMO)?",
        opciones: [
            "A) 3 Sigma",
            "B) 4 Sigma",
            "C) 5 Sigma",
            "D) 6 Sigma"
        ],
        respuestaCorrecta: 3,
        explicacion: "El nivel 6 Sigma considera un margen de tolerancia de 1.5 desviaciones estándar a la larga, lo que resulta en una tasa de apenas 3.4 defectos por millón de oportunidades."
    },
    {
        id: 6,
        area: "Ingeniería de Planta y Ergonomía",
        pregunta: "En el estudio del trabajo, ¿cuál es el propósito fundamental de realizar un diagrama de recorrido (Flow Process Chart / Spaghetti Diagram)?",
        opciones: [
            "A) Medir los tiempos estándar de cada operación mediante cronometraje",
            "B) Identificar y minimizar las distancias de traslado de materiales y operadores para reducir los tiempos de traslado",
            "C) Evaluar la fatiga muscular isométrica en puestos de trabajo prolongados",
            "D) Calcular la capacidad nominal y de diseño de la maquinaria pesada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de recorrido traza las trayectorias físicas de los flujos de material y personal en la planta para detectar cruces innecesarios, retrocesos y excesos de distancia."
    },
    {
        id: 7,
        area: "Ingeniería Económica",
        pregunta: "Una empresa evalúa un proyecto de inversión en maquinaria. Si la Tasa Interna de Retorno (TIR) obtenida es mayor que la Tasa Mínima Acceptable de Rendimiento (TMAR), ¿cuál es la decisión financiera correcta?",
        opciones: [
            "A) Rechazar el proyecto porque generará pérdidas operativas",
            "B) Aceptar el proyecto ya que su rendimiento supera el costo de capital exigido",
            "C) Modificar el horizonte de evaluación porque la TIR no es comparable con la TMAR",
            "D) Esperar a que el Valor Presente Neto (VPN) sea estrictamente igual a cero"
        ],
        respuestaCorrecta: 1,
        explicacion: "Por criterio de decisión financiera, si TIR > TMAR, el proyecto es rentable puesto que aporta un rendimiento superior al costo de oportunidad del dinero."
    },
    {
        id: 8,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Cuál es la principal característica operativa de un sistema de manufactura basado en control 'Push' (Empujar) en comparación con un sistema 'Pull' (Jalar)?",
        opciones: [
            "A) La producción se dispara únicamente cuando existe un pedido firme del cliente final",
            "B) La producción se planea con base en pronósticos de demanda y el inventario empuja el producto hacia las siguientes estaciones",
            "C) Se elimina por completo la necesidad de almacenes de producto terminado",
            "D) Se basa estrictamente en la sincronización mediante tarjetas Kanban físicas o electrónicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sistemas Push operan bajo pronósticos de demanda, fabricando por lotes anticipados y empujando el producto al siguiente proceso, a diferencia del sistema Pull que responde a la demanda real."
    },
    {
        id: 9,
        area: "Administración de Proyectos",
        pregunta: "En la administración de proyectos mediante redes de actividades (PERT/CPM), ¿qué define la ruta crítica?",
        opciones: [
            "A) La secuencia de actividades con menor holgura que determina la duración mínima total del proyecto",
            "B) El conjunto de tareas que requiere mayor asignación de recursos financieros y humanos",
            "C) Las actividades que tienen la mayor holgura total dentro del diagrama de red",
            "D) El camino exclusivo de las tareas que involucran subcontratación externa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ruta crítica es la cadena de actividades más larga en la red del proyecto y determina el tiempo mínimo necesario para completarlo; cualquier retraso en estas actividades atrasa todo el proyecto."
    },
    {
        id: 10,
        area: "Mantenimiento Industrial",
        pregunta: "¿Cuáles son los tres componentes principales que se multiplican para calcular la Eficiencia General de los Equipos (OEE, Overall Equipment Effectiveness)?",
        opciones: [
            "A) Costo, Calidad y Tiempo de entrega",
            "B) Disponibilidad, Rendimiento y Calidad",
            "C) Confiabilidad, Mantenibilidad y Seguridad",
            "D) Capacidad de diseño, Capacidad efectiva y Utilización"
        ],
        respuestaCorrecta: 1,
        explicacion: "El OEE se calcula como el producto de tres factores clave: Disponibilidad del equipo, Rendimiento (velocidad de operación) y Tasa de Calidad (piezas buenas vs defectuosas)."
    },
    {
        id: 11,
        area: "Ingeniería de Planta",
        pregunta: "En el diseño de distribución de planta (Plant Layout), ¿en qué consiste el método SLP (Systematic Layout Planning) de Richard Muther?",
        opciones: [
            "A) En calcular exclusivamente la distancia euclidiana entre centros de maquinado",
            "B) En un procedimiento sistemático basado en el análisis de las relaciones entre departamentos y flujos de material",
            "C) En un algoritmo matemático de optimización lineal para minimizar costos de transporte sin importar cercanías cualitativas",
            "D) En la estandarización estricta de tiempos de ciclo mediante diagramas bimanuales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método SLP de Muther es un marco estructurado que combina flujos cuantitativos de materiales con tablas de relaciones cualitativas (cercanía necesaria entre áreas)."
    },
    {
        id: 12,
        area: "Ingeniería Económica",
        pregunta: "¿Qué representa un Valor Presente Neto (VPN) igual a cero al evaluar un proyecto de inversión?",
        opciones: [
            "A) Que el proyecto genera pérdidas totales y debe rechazarse de inmediato",
            "B) Que el proyecto rinde exactamente la Tasa Mínima Acceptable de Rendimiento (TMAR), cubriendo costos y la tasa exigida",
            "C) Que el inversionista duplicará su capital invertido en el primer año de operaciones",
            "D) Que el flujo de efectivo libre del proyecto es independiente de la inflación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un VPN = 0 indica que el proyecto genera exactamente los rendimientos esperados (TMAR), por lo que la inversión recupera el capital y paga el costo de oportunidad exigido."
    },
    {
        id: 13,
        area: "Control de Calidad",
        pregunta: "En un proceso de manufactura se sospecha que la temperatura y la presión afectan la resistencia de una pieza moldeada. ¿Qué técnica estadística avanzada permite evaluar el efecto simultáneo de múltiples factores y sus interacciones?",
        opciones: [
            "A) Gráficos de Control de Shewhart (Variables)",
            "B) Diseño de Experimentos (DOE - Factorial)",
            "C) Muestreo de aceptación por atributos (MIL-STD-105E)",
            "D) Análisis de capacidad del proceso (Cp y Cpk)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Diseño de Experimentos (DOE) permite modificar deliberadamente variables de entrada (factores) para observar su efecto conjunto e interacciones sobre la variable de respuesta."
    },
    {
        id: 14,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Cómo se le conoce al fenómeno en la cadena de suministro donde las variaciones en la demanda de los clientes se amplifican y distorsionan a medida que se desplazan hacia arriba en los eslabones (desde el detallista hasta el proveedor de materias primas)?",
        opciones: [
            "A) Efecto Látigo (Bullwhip Effect)",
            "B) Costo Total de Propiedad (TCO)",
            "C) Estrategia de Respuesta Rápida (QR)",
            "D) Sistema de Inventario Justo a Tiempo (JIT)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El efecto látigo (Bullwhip Effect) describe cómo pequeños cambios en la demanda minorista provocan oscilaciones masivas en los pedidos hacia los fabricantes y proveedores debido a distorsiones de información."
    },
    {
        id: 15,
        area: "Gestión de Operaciones",
        pregunta: "En la metodología SMED (Single-Minute Exchange of Die) para la reducción de tiempos de preparación de maquinaria, ¿cuál es la diferencia fundamental entre operaciones internas y externas?",
        opciones: [
            "A) Las internas se realizan con la máquina detenida y las externas con la máquina operando",
            "B) Las internas ocurren dentro de la planta y las externas con proveedores extranjeros",
            "C) Las internas requieren personal certificado y las externas operarios generales",
            "D) Las internas se refieren a moldes y las externas a materias primas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El secreto del SMED es convertir operaciones internas (que obligatoriamente requieren detener la máquina) en externas (que se pueden preparar mientras la máquina sigue produciendo)."
    },
    {
        id: 16,
        area: "Control de Calidad",
        pregunta: "¿Cuáles son las etapas secuenciales que componen el ciclo de mejora continua en un proyecto Seis Sigma bajo la metodología DMAIC?",
        opciones: [
            "A) Diseñar, Medir, Analizar, Implementar, Controlar",
            "B) Definir, Medir, Analizar, Mejorar, Controlar",
            "C) Diagnosticar, Monitorear, Auditar, Inspeccionar, Corregir",
            "D) Describir, Muestrear, Actuar, Integrar, Certificar"
        ],
        respuestaCorrecta: 1,
        explicacion: "DMAIC es el acrónimo en inglés de las fases: Definir, Medir, Analizar, Mejorar (Improve) y Controlar, fundamentales para la solución estructurada de problemas."
    },
    {
        id: 17,
        area: "Ergonomía e Ingeniería de Planta",
        pregunta: "¿Qué evalúa principalmente la ecuación revisada de levantamiento del NIOSH en el diseño de puestos de trabajo manuales?",
        opciones: [
            "A) El consumo kilocalórico diario del operador por turnos de 8 horas",
            "B) El riesgo de lesión lumbar por sobreesfuerzo en tareas de levantamiento de cargas",
            "C) La iluminación y fatiga visual debida al brillo en pantallas de control",
            "D) El nivel de ruido máximo permisible en decibelios en áreas de troquelado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ecuación NIOSH calcula el límite de peso recomendado (RWL) y el Índice de Levantamiento para prevenir trastornos musculoesqueléticos en la zona lumbar."
    },
    {
        id: 18,
        area: "Gestión de Operaciones",
        pregunta: "En un sistema de Planificación de Requerimientos de Materiales (MRP II), ¿cu cuál es la entrada de información fundamental que define la estructura jerárquica y los componentes de un producto ensamblado?",
        opciones: [
            "A) El Programa Maestro de Producción (MPS)",
            "B) La Lista de Materiales (BOM - Bill of Materials)",
            "C) El Registro de Inventarios Actuales",
            "D) La Orden de Compra de Clientes"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Lista de Materiales (BOM) detalla todos los componentes, subensambles y materias primas necesarios para fabricar una unidad del producto final."
    },
    {
        id: 19,
        area: "Simulación de Sistemas",
        pregunta: "¿Qué característica define principalmente a un modelo de simulación de eventos discretos que utiliza el método de Monte Carlo?",
        opciones: [
            "A) Las variables del sistema cambian de forma continua respecto al tiempo mediante ecuaciones diferenciales",
            "B) Se incorporan variables aleatorias con distribuciones de probabilidad específicas para simular incertidumbre y escenarios múltiples",
            "C) Se obtienen soluciones analíticas exactas sin necesidad de corridas computacionales repetitivas",
            "D) Omite por completo las colas de espera y se enfoca en flujos deterministas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método de Monte Carlo emplea muestreo aleatorio y distribuciones de probabilidad para modelar sistemas bajo incertidumbre y evaluar múltiples escenarios posibles."
    },
    {
        id: 20,
        area: "Seguridad Industrial",
        pregunta: "¿Cuál es el objetivo principal de aplicar un análisis de modos y efectos de falla (AMFE / FMEA) en las etapas tempranas de diseño de un proceso o producto?",
        opciones: [
            "A) Calcular la depreciación fiscal anual de la maquinaria por línea recta",
            "B) Identificar preventivamente las fallas potenciales, evaluar su gravedad, ocurrencia y detección para mitigarlas",
            "C) Determinar el salario base de los inspectores de control de calidad",
            "D) Establecer las rutas de evacuación ante sismos o incendios"
        ],
        respuestaCorrecta: 1,
        explicacion: "El AMFE (FMEA) es una herramienta analítica preventiva que prioriza los riesgos mediante el Número de Prioridad de Riesgo (NPR) antes de que ocurran fallas reales."
    },

    {
        id: 21,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Cuál es la principal característica operativa de una estrategia de distribución tipo Cross-Docking en un centro de almacenamiento?",
        opciones: [
            "A) Almacenar la mercancía en estanterías de alta densidad por un periodo mínimo de 30 días",
            "B) Transferir los productos recibidos directamente del transporte de llegada al transporte de salida sin pasar por almacenamiento prolongado",
            "C) Consolidar inventarios de seguridad masivos para enfrentar fluctuaciones estacionales de la demanda",
            "D) Automatizar el conteo cíclico mediante sistemas de radiofrecuencia (RFID) en pasillos fríos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Cross-Docking elimina la fase de almacenamiento intermedio; la mercancía se recibe, clasifica y reembarca de inmediato, reduciendo costos de inventario y tiempos de entrega."
    },
    {
        id: 22,
        area: "Control de Calidad",
        pregunta: "Para una carta de control por atributos destinada a evaluar la proporción de piezas defectuosas en lotes de tamaño variable, ¿qué tipo de gráfico estadístico se debe emplear?",
        opciones: [
            "A) Carta X-R (Media y Rango)",
            "B) Carta p (Proporción de defectuosos)",
            "C) Carta c (Número de defectos por unidad)",
            "D) Carta u (Defectos por unidad estandarizada)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La carta p se utiliza para controlar la fracción o proporción de artículos defectuosos cuando el tamaño del subgrupo o lote es variable."
    },
    {
        id: 23,
        area: "Gestión de Operaciones",
        pregunta: "En la planeación de requerimientos de materiales (MRP), ¿cómo se define el concepto de 'Necesidades Netas'?",
        opciones: [
            "A) La demanda total pronosticada por los clientes para el trimestre sin considerar inventarios",
            "B) El resultado de restar al requerimiento bruto el inventario disponible en almacén y las recepciones programadas",
            "C) El costo total de emitir órdenes de compra dividido entre el lote económico",
            "D) La capacidad máxima instalada de la maquinaria menos los tiempos muertos por mantenimiento"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las necesidades netas representan la cantidad real que se requiere fabricar o comprar, calculadas descontando el inventario actual y lo que está por llegar de órdenes previas al requerimiento bruto."
    },
    {
        id: 24,
        area: "Ingeniería Económica",
        pregunta: "Al comparar dos proyectos de inversión mutuamente excluyentes con vidas útiles diferentes, ¿qué técnica de evaluación financiera corrige la distorsión del horizonte temporal?",
        opciones: [
            "A) El periodo de recuperación de la inversión simple (Payback)",
            "B) El Valor Anual Equivalente (VAE) o Costo Anual Uniforme Equivalente (CAUE)",
            "C) La Tasa Interna de Retorno modificada (TIRM)",
            "D) El flujo de caja libre descontado a valor nominal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Valor Anual Equivalente (VAE) o CAUE transforma el Valor Presente Neto en una serie uniforme anual equivalente, permitiendo comparar proyectos con distinta duración."
    },
    {
        id: 25,
        area: "Ergonomía",
        pregunta: "Cuando se diseña un puesto de trabajo ajustable para el 90% de la población usuaria (excluyendo los extremos del 5% inferior y 5% superior), ¿qué percentiles antropométricos se deben considerar como límites de diseño?",
        opciones: [
            "A) Del percentil 0 al 100",
            "B) Del percentil 5 al 95",
            "C) Del percentil 10 al 90",
            "D) Del percentil 25 al 75"
        ],
        respuestaCorrecta: 1,
        explicacion: "Por estándar internacional en ergonomía, el diseño para 'la mayoría de la población' suele acotar el rango excluyendo los extremos inferior (percentil 5) y superior (percentil 95)."
    },
    {
        id: 26,
        area: "Mantenimiento Industrial",
        pregunta: "¿En qué consiste la filosofía de Mantenimiento Centrado en la Confiabilidad (RCM - Reliability-Centered Maintenance)?",
        opciones: [
            "A) En reparar los equipos únicamente cuando fallan de forma cataclísmica",
            "B) En aplicar un proceso sistemático para determinar las mejores políticas de mantenimiento basadas en las funciones y fallas funcionales de los activos",
            "C) En sustituir todas las piezas mecánicas cada 500 horas de operación sin excepción",
            "D) En tercerizar el servicio técnico con el fabricante original de la maquinaria"
        ],
        respuestaCorrecta: 1,
        explicacion: "El RCM analiza la criticidad de los componentes y las consecuencias de las fallas para seleccionar la estrategia de mantenimiento más adecuada (predictiva, preventiva o correctiva)."
    },
    {
        id: 27,
        area: "Simulación de Sistemas",
        pregunta: "Durante la construcción de un modelo de simulación discreta, ¿cuál es la función de la prueba de bondad de ajuste (como Chi-cuadrada o Kolmogorov-Smirnov)?",
        opciones: [
            "A) Validar que los costos operativos del modelo coincidan con el presupuesto anual",
            "B) Determinar a qué distribución de probabilidad teórica se ajustan los datos reales recolectados (como tiempos de llegada o servicio)",
            "C) Optimizar de forma matemática la cantidad de servidores en una línea de espera",
            "D) Eliminar el sesgo de calentamiento (warm-up period) del sistema simulado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas de bondad de ajuste comparan los datos empíricos de campo con distribuciones teóricas (exponencial, normal, Poisson) para seleccionar la adecuada en la simulación."
    },
    {
        id: 28,
        area: "Administración de Proyectos",
        pregunta: "En la administración de proyectos, ¿cómo se define la holgura total (Total Float) de una actividad?",
        opciones: [
            "A) El tiempo máximo que se puede retrasar una actividad sin afectar la fecha de finalización del proyecto completo",
            "B) El tiempo que una actividad puede retrasarse sin afectar la fecha de inicio temprano de su sucesora inmediata",
            "C) La duración neta de la actividad en la ruta crítica",
            "D) El margen financiero presupuestal ante imprevistos de inflación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La holgura total es el margen de tiempo que puede retrasarse una tarea sin alterar la fecha límite global del proyecto."
    },
    {
        id: 29,
        area: "Gestión de Operaciones",
        pregunta: "Dentro de la metodología de las 5S, ¿a qué concepto corresponde la fase de 'Seiton'?",
        opciones: [
            "A) Clasificar y separar lo necesario de lo innecesario",
            "B) Organizar y ubicar los elementos de trabajo en un lugar asignado para su fácil localización (un lugar para cada cosa y cada cosa en su lugar)",
            "C) Limpiar el área de trabajo y mantener impecables los equipos",
            "D) Estandarizar los procedimientos operativos mediante ayudas visuales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Seiton significa 'Ordenar': establecer un sitio específico y señalizado para cada herramienta o material, reduciendo tiempos de búsqueda."
    },
    {
        id: 30,
        area: "Seguridad Industrial",
        pregunta: "En la evaluación de riesgos laborales mediante matrices de riesgo, ¿qué dos variables principales se combinan para calcular el nivel de riesgo de un peligro detectado?",
        opciones: [
            "A) Costo de la multa e inversión en equipo de protección",
            "B) Probabilidad de ocurrencia y Severidad (consecuencia) del daño",
            "C) Antigüedad del trabajador y horas de turno laboradas",
            "D) Capacidad de iluminación y temperatura ambiente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La jerarquía de evaluación de riesgos pondera la probabilidad de que ocurra el evento adverso frente a la severidad o gravedad de las lesiones o daños resultantes."
    },
    {
        id: 31,
        area: "Logística y Cadena de Suministro",
        pregunta: "En el comercio internacional regulado por los Incoterms 2020, ¿qué término indica que el vendedor asume la responsabilidad y los costos de transporte hasta entregar la mercancía a bordo del buque designado por el comprador en el puerto de embarque convenido?",
        opciones: [
            "A) EXW (Ex Works)",
            "B) FOB (Free On Board)",
            "C) DDP (Delivered Duty Paid)",
            "D) CIF (Cost, Insurance and Freight)"
        ],
        respuestaCorrecta: 1,
        explicacion: "FOB (Free On Board) establece que el riesgo y costo se transfieren del vendedor al comprador justo cuando la mercancía cruza la borda del buque en el puerto de origen."
    },
    {
        id: 32,
        area: "Control de Calidad",
        pregunta: "Si al calcular el índice de capacidad potencial de un proceso ($Cp$) se obtiene un valor de 1.45, y el índice de capacidad real ($Cpk$) es de 0.85, ¿qué diagnóstico operativo se concluye?",
        opciones: [
            "A) El proceso es perfectamente capaz y se encuentra perfectamente centrado en las tolerancias",
            "B) El proceso tiene potencial de calidad pero se encuentra descentrado respecto a los límites de especificación",
            "C) El proceso es incapaz y presenta una dispersión excesiva superior a la tolerancia permitida",
            "D) Las mediciones tienen un error sistemático de calibración en los instrumentos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un $Cp$ alto indica que la dispersión cabe en las tolerancias, pero un $Cpk$ bajo revela que la media del proceso está descentrada y muy cerca de uno de los límites."
    },
    {
        id: 33,
        area: "Gestión de Operaciones",
        pregunta: "De acuerdo con la Teoría de Restricciones (TOC) de Eliyahu Goldratt, ¿cuál es el enfoque fundamental para maximizar el rendimiento de un sistema de manufactura?",
        opciones: [
            "A) Balancear la capacidad de todas las estaciones de trabajo por igual para eliminar inventarios",
            "B) Identificar y gestionar el cuello de botella (bottleneck) que limita el flujo de todo el sistema",
            "C) Reducir la velocidad de las máquinas no restrictivas para ahorrar energía eléctrica",
            "D) Maximizar la producción de todas las estaciones de trabajo de manera independiente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La TOC establece que cualquier sistema tiene al menos una restricción; enfocar los esfuerzos de mejora en explotar y elevar ese cuello de botella es lo único que incrementa el rendimiento global."
    },
    {
        id: 34,
        area: "Ingeniería de Planta",
        pregunta: "¿Cuál es el objetivo principal de realizar el balanceo de líneas en un proceso de producción en masa o serie?",
        opciones: [
            "A) Minimizar el tiempo muerto (ociosidad) de los operadores y reducir el inventario en proceso igualando los tiempos de ciclo de las estaciones",
            "B) Incrementar la variedad de modelos personalizados en una sola línea flexible",
            "C) Calcular los impuestos sobre la nómina del personal técnico de planta",
            "D) Reducir el consumo de combustible de los montacargas internos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El balanceo de líneas busca repartir equitativamente el trabajo entre las estaciones para que todas operen cerca del Takt Time, evitando cuellos de botella y tiempos muertos."
    },
    {
        id: 35,
        area: "Ingeniería Económica",
        pregunta: "¿Qué método de depreciación fiscal calcula un cargo por depreciación constante año con año basándose en el costo de adquisición, el valor de salvamento y la vida útil estimada?",
        opciones: [
            "A) Método de saldos decrecientes",
            "B) Método de línea recta",
            "C) Método de unidades producidas",
            "D) Método de suma de dígitos de los años"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método de línea recta distribuye el costo depreciable del activo en partes iguales a lo largo de cada periodo de su vida útil estimada."
    },
    {
        id: 36,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué tecnología basada en identificación por ondas electromagnéticas se utiliza comúnmente en almacenes avanzados para automatizar la lectura e inventario de mercancías sin línea de visión directa?",
        opciones: [
            "A) Códigos de barras UPC lineales",
            "B) Etiquetas RFID (Radio Frequency Identification)",
            "C) Bandas magnéticas de control de acceso",
            "D) Sistemas de posicionamiento global GPS satelital"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las etiquetas RFID permiten identificar y rastrear automáticamente múltiples artículos a distancia mediante radiofrecuencia, superando las limitaciones del código de barras tradicional."
    },
    {
        id: 37,
        area: "Mantenimiento Industrial",
        pregunta: "En la metodología de Mantenimiento Productivo Total (TPM), ¿qué término describe las pérdidas de eficiencia asociadas a las 'paradas menores y reducciones de velocidad' en los equipos?",
        opciones: [
            "A) Las tres grandes pérdidas de calidad",
            "B) Las seis grandes pérdidas (Six Big Losses)",
            "C) Los costos fijos de parada programada",
            "D) El índice de confiabilidad intrínseca MTBF"
        ],
        respuestaCorrecta: 1,
        explicacion: "El TPM cataloga las mermas de eficiencia operativa en 'Las seis grandes pérdidas', divididas en pérdidas de tiempo (paradas y ajustes), de velocidad (marcha en vacío y velocidad reducida) y de calidad (defectos y re-trabajos)."
    },
    {
        id: 38,
        area: "Logística y Gestión de Operaciones",
        pregunta: "En la gestión de inventarios bajo revisión continua, ¿cómo se define el Punto de Reorden (ROP - Reorder Point)?",
        opciones: [
            "A) El nivel de inventario que activa la emisión de una nueva orden de compra para cubrir la demanda durante el tiempo de entrega (lead time)",
            "B) La cantidad exacta de mercancía sobrante al finalizar el ejercicio fiscal",
            "C) El inventario de seguridad absoluto que nunca debe tocarse",
            "D) El costo unitario de almacenamiento más el costo de pedido"
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto de reorden indica el nivel crítico de stock en el cual se debe lanzar un nuevo pedido al proveedor, considerando el consumo esperado durante el tiempo de entrega (Lead Time) más el inventario de seguridad."
    },
    {
        id: 39,
        area: "Ergonomía",
        pregunta: "¿Qué evalúa de forma específica el método RULA (Rapid Upper Limb Assessment) en el análisis postural de puestos de trabajo?",
        opciones: [
            "A) Las posturas y cargas biomecánicas que afectan principalmente a los miembros superiores del cuerpo (brazos, antebrazos, muñecas y cuello)",
            "B) El gasto metabólico total y consumo de oxígeno en tareas de esfuerzo aeróbico pesado",
            "C) Los niveles de iluminación ambiental y deslumbramiento en oficinas de control",
            "D) La fuerza de prensión manual isométrica máxima en los dedos"
        ],
        respuestaCorrecta: 1,
        explicacion: "RULA es un método observacional enfocado en evaluar la exposición de los trabajadores a factores de riesgo ergonómico en los miembros superiores debido a posturas y fuerzas aplicadas."
    },
    {
        id: 40,
        area: "Gestión de Operaciones",
        pregunta: "En un entorno de manufactura repetitiva, ¿qué función cumple una tarjeta Kanban dentro de un sistema de producción pull?",
        opciones: [
            "A) Funcionar como una orden de trabajo e instrucción física o electrónica para retirar o producir piezas entre estaciones",
            "B) Registrar la asistencia y checador de los operarios de la línea de producción",
            "C) Almacenar las especificaciones técnicas de diseño en formato CAD de la pieza",
            "D) Controlar de manera contable la depreciación de la maquinaria pesada"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Kanban (tarjeta o señal) es el mecanismo de comunicación visual que autoriza el movimiento o la fabricación de lotes de material exclusivamente cuando la estación posterior lo demanda."
    },
    {
        id: 41,
        area: "Gestión de Operaciones",
        pregunta: "En la planeación agregada de operaciones, ¿cuál es la característica principal de una estrategia de persecución (Chase Strategy)?",
        opciones: [
            "A) Mantener una fuerza de trabajo constante y absorber las fluctuaciones de la demanda mediante inventario o acumulación de pedidos",
            "B) Variar los niveles de producción ajustando la fuerza de trabajo (contrataciones y despedidas) o mediante horas extra para empatar la demanda periodo a periodo",
            "C) Subcontratar el 100% de la operación a terceros durante los picos estacionales más altos",
            "D) Fijar un ritmo de producción totalmente invariable utilizando turnos rotativos fijos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estrategia de persecución (Chase) adapta la capacidad productiva directamente a la demanda cambiante mediante la contratación o despido de personal y el uso de horas extra, minimizando el inventario final."
    },
    {
        id: 42,
        area: "Control de Calidad",
        pregunta: "En un plan de muestreo de aceptación por atributos, ¿qué representa el Nivel de Calidad Aceptable (AQL - Acceptable Quality Limit)?",
        opciones: [
            "A) El porcentaje máximo de unidades defectuosas que el consumidor considera intolerable y rechaza en el 100% de los casos",
            "B) El nivel de calidad que es considerado como bueno o aceptable como promedio del proceso para los lotes presentados a inspección",
            "C) El costo unitario de inspeccionar una muestra aleatoria en la línea de recepción",
            "D) La probabilidad exacta de rechazar un lote excelente con cero defectos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El AQL (Nivel de Calidad Aceptable) define el umbral máximo de defectos que se tolera como promedio en un proceso para que los lotes sean aceptados satisfactoriamente en el muestreo."
    },
    {
        id: 43,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué mide el indicador clave de desempeño (KPI) conocido como 'Rotación de Inventarios' (Inventory Turnover)?",
        opciones: [
            "A) El tiempo promedio en días que la mercancía permanece almacenada antes de ser vendida o procesada",
            "B) Las veces que el inventario se vende y se reemplaza en un periodo determinado, reflejando la eficiencia en el uso del capital de trabajo",
            "C) El costo total de transporte dividido entre el volumen total de unidades expedidas",
            "D) La cantidad de mermas y caducidades registradas en el almacén central"
        ],
        respuestaCorrecta: 1,
        explicacion: "La rotación de inventarios indica cuántas veces se renueva el stock en un año; un valor alto indica una excelente gestión y agilidad comercial, liberando flujo de efectivo."
    },
    {
        id: 44,
        area: "Ingeniería Económica",
        pregunta: "¿Cuál es el propósito fundamental de realizar un análisis de sensibilidad en la evaluación financiera de proyectos de inversión?",
        opciones: [
            "A) Determinar la tasa impositiva exacta que aplicará la secretaría de hacienda sobre las utilidades netas",
            "B) Evaluar cómo cambian los resultados del proyecto (VPN o TIR) al modificar de manera controlada las variables clave de entrada (como precio, demanda o costos)",
            "C) Calcular de forma estricta la depreciación acelerada de los activos fijos",
            "D) Establecer el sueldo base del equipo directivo del proyecto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis de sensibilidad permite identificar qué variables críticas tienen mayor impacto en la rentabilidad del proyecto ante escenarios de incertidumbre o riesgo."
    },
    {
        id: 45,
        area: "Mantenimiento Industrial",
        pregunta: "¿Qué representa el Tiempo Medio entre Fallas (MTBF - Mean Time Between Failures) en la gestión de mantenimiento?",
        opciones: [
            "A) El tiempo promedio que tarda un técnico en reparar una máquina averiada",
            "B) El lapso promedio estimado de operación continua y sin fallas entre un daño y el siguiente en equipos reparables",
            "C) El ciclo total de vida útil antes de dar de baja definitiva un activo fijo",
            "D) El tiempo en que la máquina permanece detenida por mantenimiento preventivo programado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El MTBF mide la confiabilidad del equipo calculando el tiempo promedio transcurrido entre una falla y la siguiente durante su operación."
    },
    {
        id: 46,
        area: "Ergonomía",
        pregunta: "¿Qué evalúa de manera específica el método REBA (Rapid Entire Body Assessment) en el análisis postural de los trabajadores?",
        opciones: [
            "A) Únicamente los movimientos repetitivos de los dedos y muñecas en líneas de ensamble de alta velocidad",
            "B) La exposición a posturas forzadas y cargas corporales en extremidades superiores, tronco, cuello y piernas de forma global",
            "C) El gasto energético kilocalórico total en tareas de esfuerzo aeróbico severo",
            "D) Los niveles de confort térmico y humedad relativa en áreas cerradas de fundición"
        ],
        respuestaCorrecta: 1,
        explicacion: "REBA es un método observacional que evalúa el riesgo postural dinámico y estático de todo el cuerpo humano, abarcando tronco, cuello, piernas, brazos y muñecas."
    },
    {
        id: 47,
        area: "Simulación de Sistemas",
        pregunta: "En la validación de un modelo de simulación computacional, ¿en qué consiste la etapa de validación del modelo conceptual?",
        opciones: [
            "A) En comprobar que las ecuaciones lógicas, supuestos y relaciones teóricas del sistema real fueron representadas correctamente en el modelo",
            "B) En depurar los errores de sintaxis y código fuente en el software de programación utilizado",
            "C) En verificar que los resultados numéricos finales coincidan exactamente con la contabilidad de la empresa",
            "D) En eliminar las variables aleatorias para hacer el modelo determinista"
        ],
        respuestaCorrecta: 0,
        explicacion: "La validación conceptual asegura que la abstracción teórica y los supuestos del sistema real sean precisos antes de programar o correr el modelo computacional."
    },
    {
        id: 48,
        area: "Administración de Proyectos",
        pregunta: "En la técnica de compresión de proyectos (Crashing), ¿qué acción se lleva a cabo para reducir la duración total de la ruta crítica?",
        opciones: [
            "A) Eliminar actividades opcionales sin importar la secuencia de precedencia",
            "B) Asignar recursos adicionales (personal o turnos extra) a las actividades de la ruta crítica con menor costo marginal de reducción",
            "C) Ampliar el plazo de entrega pactado con el cliente final para relajar los indicadores",
            "D) Disminuir los estándares de calidad del entregable para acelerar las firmas de aprobación"
        ],
        respuestaCorrecta: 1,
        explicacion: "El 'Crashing' o compresión busca acortar la duración del proyecto invirtiendo recursos adicionales de manera óptima en las tareas críticas más económicas de acelerar."
    },
    {
        id: 49,
        area: "Gestión de Operaciones",
        pregunta: "¿Qué significa el concepto de 'Heijunka' dentro de los principios del sistema de producción de Toyota (Lean)?",
        opciones: [
            "A) La nivelación y uniformización del volumen y la variedad de la producción para evitar desperdicios por fluctuaciones",
            "B) La automatización inteligente con toque humano (Jidoka)",
            "C) El cambio rápido de herramientas de troquelado en menos de diez minutos",
            "D) La inspección al 100% de los defectos visuales al final de la línea"
        ],
        respuestaCorrecta: 0,
        explicacion: "Heijunka es la técnica de nivelación de la producción (tanto en volumen como en mezcla de modelos) para estabilizar el flujo y evitar sobrecargas o cuellos de botella."
    },
    {
        id: 50,
        area: "Seguridad Industrial",
        pregunta: "De acuerdo con la clasificación estándar de incendios, ¿con qué clase de fuego se corresponden aquellos iniciados en materiales sólidos combustibles como madera, papel, cartón y textiles?",
        opciones: [
            "A) Fuego Clase A",
            "B) Fuego Clase B",
            "C) Fuego Clase C",
            "D) Fuego Clase D"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los incendios Clase A involucran materiales sólidos ordinarios que dejan cenizas y brasas al arder (madera, papel, textiles), requiriendo agentes de enfriamiento como agua."
    },
    {
        id: 51,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué mide exactamente el indicador logístico OTIF (On-Time In-Full)?",
        opciones: [
            "A) El costo total de transporte por kilómetro recorrido en rutas nacionales",
            "B) El porcentaje de pedidos entregados a tiempo y completos conforme a lo solicitado por el cliente",
            "C) La capacidad volumétrica aprovechada en los camiones de distribución",
            "D) El tiempo transcurrido desde la recepción del pedido hasta su empaque final"
        ],
        respuestaCorrecta: 1,
        explicacion: "El OTIF evalúa la efectividad logística midiendo si los pedidos llegan exactamente en la fecha acordada (On-Time) y con las cantidades y especificaciones correctas (In-Full)."
    },
    {
        id: 52,
        area: "Control de Calidad",
        pregunta: "Para un proceso de manufactura donde se toman mediciones individuales de una característica de calidad de forma continua y los subgrupos son de tamaño n=1, ¿qué cartas de control estadístico se deben emplear?",
        opciones: [
            "A) Carta X-R (Media y Rango)",
            "B) Carta I-MR (Individuales y Rango Móvil)",
            "C) Carta p y np",
            "D) Carta c y u"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando no se pueden formar subgrupos racionales y se evalúan datos individuales secuenciales, se utiliza la carta de Valores Individuales y Rango Móvil (I-MR)."
    },
    {
        id: 53,
        area: "Ingeniería de Planta",
        pregunta: "En el estudio de tiempos mediante cronometraje, ¿para qué se aplica el factor de calificación de desempeño (actuación) del operario observado?",
        opciones: [
            "A) Para castigar salarialmente al personal con menor antigüedad en la empresa",
            "B) Para convertir el tiempo observado (cronometrado) en un tiempo normal representativo de un operador calificado trabajando a ritmo estándar",
            "C) Para calcular los impuestos sobre la nómina directa de producción",
            "D) Para eliminar por completo las holguras por necesidades personales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La calificación de desempeño ajusta el tiempo real cronometrado al ritmo normal estándar, reconociendo si el operador trabajó más rápido o más lento que el promedio."
    },
    {
        id: 54,
        area: "Gestión de Operaciones",
        pregunta: "¿Cuál es el objetivo principal de implementar un dispositivo 'Poka-Yoke' en una estación de trabajo?",
        opciones: [
            "A) Reducir el consumo de energía eléctrica de los motores principales",
            "B) Prevenir y evitar errores humanos de manera física o lógica antes de que se conviertan en defectos de calidad",
            "C) Acelerar el cronometraje de los tiempos estándar de operación",
            "D) Calcular el lote económico de pedido en almacén"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Poka-Yoke es un mecanismo a prueba de errores diseñado para impedir que una operación se realice incorrectamente o que un error humano derive en un defecto."
    },
    {
        id: 55,
        area: "Ingeniería Económica",
        pregunta: "¿Qué representa la Tasa de Descuento utilizada en el cálculo del Valor Presente Neto (VPN) de un proyecto?",
        opciones: [
            "A) La tasa de inflación acumulada de los últimos diez años",
            "B) El costo de oportunidad del capital o la Tasa Mínima Acceptable de Rendimiento (TMAR) exigida por los inversionistas",
            "C) El porcentaje de depreciación fiscal anual de la maquinaria",
            "D) La tasa de interés interbancaria de equilibrio sin riesgo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tasa de descuento refleja el costo de capital o rendimiento mínimo que se le exige al dinero invertido, descontando el valor del dinero en el tiempo."
    },
    {
        id: 56,
        area: "Logística y Cadena de Suministro",
        pregunta: "En la administración de inventarios, ¿qué beneficio principal aporta la política de descuentos por cantidad (Quantity Discounts) ofrecida por los proveedores?",
        opciones: [
            "A) Reducir los costos de almacenamiento a cero de forma permanente",
            "B) Disminuir el costo unitario de compra al adquirir lotes más grandes, aunque incremente el costo de mantener inventario",
            "C) Eliminar por completo el tiempo de entrega (Lead Time)",
            "D) Garantizar que las piezas nunca sufran obsolescencia tecnológica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los descuentos por cantidad incentivan compras en mayor volumen; el análisis financiero busca equilibrar el ahorro en el precio unitario frente al mayor costo de mantenimiento de inventario."
    },
    {
        id: 57,
        area: "Mantenimiento Industrial",
        pregunta: "En un análisis de criticidad de activos para definir políticas de mantenimiento, ¿qué tres factores principales se evalúan combinados?",
        opciones: [
            "A) Frecuencia de fallas, Impacto operacional/seguridad/ambiental y Costos de reparación",
            "B) Antigüedad del equipo, Marca fabricante y Consumo eléctrico",
            "C) Número de operarios asignados y turnos de trabajo",
            "D) Depreciación fiscal y valor de reventa en el mercado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis de criticidad pondera la frecuencia de fallas y las consecuencias de las mismas sobre la producción, la seguridad y el medio ambiente para priorizar recursos."
    },
    {
        id: 58,
        area: "Control de Calidad",
        pregunta: "¿Cómo se denomina la herramienta de planificación de calidad que traduce las necesidades y voz del cliente (VOC) en características técnicas de diseño de un producto (La Casa de la Calidad)?",
        opciones: [
            "A) Despliegue de la Función de Calidad (QFD - Quality Function Deployment)",
            "B) Análisis de Modos y Efectos de Falla (AMFE)",
            "C) Control Estadístico de Procesos (SPC)",
            "D) Metodología Seis Sigma (DMAIC)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El QFD (Quality Function Deployment), mediante la matriz conocida como la Casa de la Calidad, vincula los requerimientos del cliente con los parámetros técnicos de ingeniería."
    },
    {
        id: 59,
        area: "Gestión de Operaciones",
        pregunta: "En el Programa Maestro de Producción (MPS), ¿qué representa el concepto de 'Inventario Disponible para Promesa' (ATP - Available-to-Promise)?",
        opciones: [
            "A) El total de materias primas almacenadas en los silos de recepción",
            "B) La cantidad de inventario producido que no está comprometido con pedidos de clientes actuales y puede ofrecerse a nuevos pedidos",
            "C) El stock de seguridad absoluto que protege contra paros de línea",
            "D) La capacidad máxima instalada de la planta sin restar mantenimientos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ATP (Available-to-Promise) indica el saldo disponible de productos fabricados o programados que la empresa puede comprometer de manera segura con los clientes."
    },
    {
        id: 60,
        area: "Ergonomía y Seguridad Industrial",
        pregunta: "¿Qué evalúa el índice de temperatura de bulbo húmedo y globo (WBGT - Wet-Bulb Globe Temperature) en el ambiente laboral?",
        opciones: [
            "A) El nivel de iluminación artificial y deslumbramiento en oficinas",
            "B) El estrés térmico al que está expuesto un trabajador debido a la combinación de temperatura del aire, humedad, velocidad del viento y radiación térmica",
            "C) La concentración máxima permisible de gases tóxicos en espacios confinados",
            "D) Los decibelios de presión sonora generados por maquinaria pesada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El índice WBGT es el estándar internacional para evaluar el estrés térmico ambiental en puestos de trabajo calurosos, previniendo golpes de calor y fatiga extrema."
    },
    {
        id: 61,
        area: "Gestión de Operaciones",
        pregunta: "En los sistemas de planificación de recursos empresariales (ERP), ¿cuál es la principal evolución funcional del MRP II clásico hacia un ERP moderno?",
        opciones: [
            "A) Limitarse exclusivamente al control de inventarios de materia prima sin conectar con ventas",
            "B) Integrar de manera sistémica y en tiempo real todas las áreas funcionales de la organización (finanzas, recursos humanos, ventas, manufactura y cadena de suministro)",
            "C) Sustituir por completo la necesidad de contar con un Programa Maestro de Producción (MPS)",
            "D) Operar únicamente bajo modelos de manufactura Push basados en pronósticos estáticos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sistemas ERP integran todos los procesos de negocio de la empresa en una plataforma centralizada, conectando la producción con la contabilidad, las finanzas y la logística globalmente."
    },
    {
        id: 62,
        area: "Control de Calidad",
        pregunta: "¿Qué característica define principalmente a un Diagrama de Ishikawa (Causa-Efecto o Espina de Pescado)?",
        opciones: [
            "A) Clasificar los defectos por frecuencia acumulada según la regla del 80/20",
            "B) Estructurar visualmente las posibles causas secundarias y primarias que contribuyen a un problema de calidad específico, agrupadas comúnmente en las 6M",
            "C) Medir la dispersión estadística de una variable continua frente a los límites de tolerancia",
            "D) Monitorear el comportamiento de un proceso a lo largo del tiempo cronológico"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Diagrama de Ishikawa organiza de forma gráfica las posibles causas raíz de un problema agrupadas en categorías estándar (generalmente Mano de obra, Maquinaria, Materiales, Métodos, Medición y Medio ambiente)."
    },
    {
        id: 63,
        area: "Logística y Localización",
        pregunta: "¿En qué consiste el método del centro de gravedad para la localización de instalaciones o centros de distribución?",
        opciones: [
            "A) En minimizar exclusivamente el costo de adquisición de los terrenos disponibles en zonas industriales",
            "B) En determinar una ubicación geográfica óptima basada en las coordenadas cartesianas de los clientes y proveedores, ponderada por el volumen de carga transportada",
            "C) En calcular la altitud barométricas ideal para evitar la corrosión de mercancías perecederas",
            "D) En maximizar la distancia a la competencia directa sin importar los costos logísticos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método del centro de gravedad es una técnica matemática de localización que busca el punto de menor costo de transporte considerando la ubicación de los puntos de origen/destino y su volumen."
    },
    {
        id: 64,
        area: "Ingeniería Económica",
        pregunta: "¿Cuál es el significado financiero de la Relación Beneficio-Coste (B/C) al evaluar un proyecto de inversión pública o privada?",
        opciones: [
            "A) El porcentaje de impuestos que la empresa pagará al cierre del ejercicio fiscal",
            "B) El cociente obtenido al dividir el valor presente de los beneficios netos entre el valor presente de los costos de inversión; si es mayor a 1, el proyecto es viable",
            "C) El tiempo exacto que tarda el capital en duplicarse mediante tasas de interés simple",
            "D) La proporción de deuda bancaria frente al capital propio aportado por los socios"
        ],
        respuestaCorrecta: 1,
        explicacion: "La relación B/C compara los beneficios actualizados frente a los costos actualizados; un valor superior a 1 indica que los beneficios superan a los costos de la inversión."
    },
    {
        id: 65,
        area: "Ergonomía",
        pregunta: "En el diseño ergonómico de estaciones de trabajo visuales, ¿qué parámetro antropométrico y postural es fundamental cuidar para prevenir lesiones cervicales crónicas?",
        opciones: [
            "A) La altura y ángulo de inclinación del plano de trabajo y la línea de visión hacia el monitor",
            "B) La velocidad de desplazamiento de los montacargas en los pasillos principales",
            "C) El peso máximo acumulado de archivos muertos en estanterías altas",
            "D) El nivel de conductividad eléctrica del suelo antiestático"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ángulo de visión hacia las pantallas y la altura de la superficie evitan la flexión o extensión prolongada del cuello, previniendo trastornos músculo-esqueléticos cervicales."
    },
    {
        id: 66,
        area: "Mantenimiento Industrial",
        pregunta: "¿Qué mide el indicador de Mantenibilidad (Maintainability) en la gestión de activos industriales?",
        opciones: [
            "A) La probabilidad de que un equipo falle antes de las primeras 1,000 horas de operación",
            "B) La probabilidad de que un equipo averiado sea restaurado a condiciones operativas en un tiempo específico bajo procedimientos dados",
            "C) El costo total de las refacciones almacenadas en el inventario crítico de mantenimiento",
            "D) La cantidad de horas que la máquina opera sin ninguna intervención humana"
        ],
        respuestaCorrecta: 1,
        explicacion: "La mantenibilidad evalúa la facilidad y rapidez con la que un sistema o componente puede ser reparado tras una falla (estrechamente relacionada con el MTTR)."
    },
    {
        id: 67,
        area: "Administración de Proyectos",
        pregunta: "En la construcción de diagramas de red para la gestión de proyectos, ¿cómo se definen las dependencias o relaciones de precedencia de tipo 'Fin a Inicio' (FS)?",
        opciones: [
            "A) La actividad sucesora no puede iniciar hasta que la actividad precedente haya concluido por completo",
            "B) Ambas actividades deben iniciar exactamente al mismo tiempo en el calendario",
            "C) La actividad precedente no puede terminar hasta que la sucesora haya comenzado",
            "D) Las actividades ocurren de forma totalmente independiente sin solapamiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación Fin a Inicio (FS) es la dependencia lógica más común en CPM/PERT, donde el predecesor debe finalizar antes de que el sucesor pueda arrancar."
    },
    {
        id: 68,
        area: "Seguridad Industrial",
        pregunta: "De acuerdo con los colores y señales de seguridad industrial, ¿qué significado general indica el color rojo en tuberías, contenedores o señalamientos?",
        opciones: [
            "A) Condición de seguridad, rutas de evacuación y regaderas de emergencia",
            "B) Advertencia de peligro, riesgo de atención o partes móviles de maquinaria",
            "C) Identificación de equipos contra incendio, prohibición o alto obligatorio",
            "D) Sustancias líquidas de baja peligrosidad como agua potable"
        ],
        respuestaCorrecta: 2,
        explicacion: "Por normatividad internacional y nacional de seguridad, el color rojo se reserva para equipos de protección contra incendio, prohibiciones y altos obligatorios."
    },
    {
        id: 69,
        area: "Gestión de Operaciones",
        pregunta: "Bajo los principios de la Teoría de Restricciones (TOC), ¿en qué consiste la regla de control de producción conocida como 'Tambor-Amortiguador-Cuerda' (Drum-Buffer-Rope)?",
        opciones: [
            "A) En fijar el ritmo de producción al compás del cuello de botella (tambor), protegerlo con inventario de tiempo (amortiguador) y liberar material según ese ritmo (cuerda)",
            "B) En incrementar la velocidad de todas las máquinas en un 20% para saturar el mercado",
            "C) En automatizar el transporte interno mediante bandas impulsadas por poleas",
            "D) En eliminar los inventarios intermedios a cero absoluto sin importar la restricción"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sistema Tambor-Amortiguador-Cuerda (DBR) sincroniza la producción de la planta utilizando el cuello de botella como marcapasos (tambor) protegido por un stock de tiempo (amortiguador)."
    },
    {
        id: 70,
        area: "Control de Calidad",
        pregunta: "¿En qué circunstancia operativa se prefiere aplicar un plan de inspección al 100% en lugar de un muestreo de aceptación estadístico?",
        opciones: [
            "A) Cuando la prueba es destructiva y arruina la totalidad de los componentes fabricados",
            "B) Cuando el costo de inspeccionar cada unidad es extremadamente bajo y el costo de dejar pasar un componente defectuoso al cliente es catastrófico",
            "C) Cuando el lote de producción es de millones de piezas idénticas y homogéneas",
            "D) Cuando se cuenta con un proceso Seis Sigma certificado con cero defectos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La inspección al 100% se justifica cuando el error o fallo del producto tiene consecuencias críticas (seguridad, fallas fatales) y el costo de control lo permite."
    },
    {
        id: 71,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué objetivo estratégico persigue la implementación de sistemas de almacenamiento automatizado del tipo AS/RS (Automated Storage/Retrieval Systems)?",
        opciones: [
            "A) Reducir el espacio de piso ocupado mediante estanterías de gran altura operadas por grúas robotizadas, optimizando tiempos de entrada y salida",
            "B) Reemplazar por completo el uso de sistemas ERP en la administración contable",
            "C) Permitir que los clientes recojan mercancía directamente de los anaqueles sin control",
            "D) Minimizar el costo de las primas de seguros contra robos en oficinas administrativas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los sistemas AS/RS automatizan el almacenamiento y recuperación de tarimas o cajas en altura, maximizando la densidad cúbica del almacén y la velocidad de despacho."
    },
    {
        id: 72,
        area: "Ingeniería de Planta",
        pregunta: "¿Qué mide la eficiencia de utilización de una instalación o maquinaria industrial frente a su capacidad disponible?",
        opciones: [
            "A) La producción real obtenida dividida entre la capacidad diseñada teórica máxima",
            "B) La producción real obtenida dividida entre la capacidad efectiva (capacidad máxima planificada considerando restricciones operativas)",
            "C) El costo de mantenimiento correctivo dividido entre el valor de adquisición del activo",
            "D) Las horas de parada por falta de materia prima entre las horas totales del turno"
        ],
        respuestaCorrecta: 1,
        explicacion: "La utilización mide el uso real frente a la capacidad efectiva (o diseñada según la fórmula específica de gestión de operaciones), evaluando qué tanto se aprovecha el potencial operativo."
    },
    {
        id: 73,
        area: "Gestión de Operaciones",
        pregunta: "¿Qué principio define el concepto de 'Jidoka' en el sistema de producción de Toyota?",
        opciones: [
            "A) Automatización con un toque humano; la máquina tiene la capacidad de detectar una anomalía y detenerse automáticamente para evitar defectos",
            "B) Producir únicamente lo que se demanda en el momento exacto",
            "C) El cambio rápido de herramientas de troquelado en minutos",
            "D) La nivelación estricta de la mezcla de producción diaria"
        ],
        respuestaCorrecta: 0,
        explicacion: "Jidoka significa automatización inteligente o autonomatización; detiene el proceso de manera autónoma ante una falla para prevenir la propagación de defectos."
    },
    {
        id: 74,
        area: "Control de Calidad",
        pregunta: "Dentro de la estructura de jerarquía y certificación de la metodología Seis Sigma, ¿qué rol desempeña típicamente un 'Black Belt' (Cinta Negra)?",
        opciones: [
            "A) Operario de línea encargado de registrar defectos menores en formatos de papel",
            "B) Líder de proyecto a tiempo completo dedicado a resolver problemas complejos de calidad y optimización mediante herramientas estadísticas avanzadas",
            "C) Auditor externo de la secretaría de economía sin relación con la planta",
            "D) Auxiliar de almacén encargado de recibir materia prima"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Black Belts son expertos certificados a tiempo completo en Seis Sigma que lideran proyectos complejos de mejora y capacitan a otros miembros de la organización."
    },
    {
        id: 75,
        area: "Ingeniería Económica",
        pregunta: "En el análisis de reemplazo de activos, ¿cómo se define el concepto de 'Costo Anual Uniforme Equivalente (CAUE)' del equipo defensor (la máquina actual)?",
        opciones: [
            "A) El costo acumulado de mantenimiento histórico sin considerar el valor de rescate actual",
            "B) La suma anual equivalente de los costos de operación, mantenimiento y la pérdida de valor (depreciación/rescate) de conservar la máquina actual",
            "C) El precio de lista de una máquina nueva en el mercado internacional",
            "D) La tasa de interés interbancaria aplicada al préstamo original del equipo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El CAUE del defensor anualiza todos los costos futuros esperados de mantener operando la máquina actual, sirviendo de base para compararla con el equipo retador."
    },
    {
        id: 76,
        area: "Logística y Sostenibilidad",
        pregunta: "¿Qué comprende el concepto de Logística Inversa (Reverse Logistics) en las cadenas de suministro modernas?",
        opciones: [
            "A) El transporte de mercancías desde el proveedor principal hasta el almacén central de la planta",
            "B) El proceso de planificación y gestión del retorno de productos desde el consumidor final hacia el punto de origen para su recuperación, reciclaje, reparación o disposición final",
            "C) La distribución de mercancías en rutas nocturnas para evitar el tráfico urbano",
            "D) La subcontratación de flotas de transporte terrestre con terceros (3PL)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La logística inversa gestiona el flujo de bienes desde el punto de consumo hacia atrás (devoluciones, reciclaje, garantías, envases retornables) para recuperar valor o disponer ecológicamente."
    },
    {
        id: 77,
        area: "Ergonomía",
        pregunta: "¿Cuál es la diferencia principal entre la antropometría estática y la antropometría dinámica?",
        opciones: [
            "A) La estática mide las dimensiones del cuerpo en posiciones fijas (de pie o sentado), mientras que la dinámica mide las dimensiones durante el movimiento y desempeño de tareas",
            "B) La estática se aplica únicamente a oficinas y la dinámica a plantas químicas pesadas",
            "C) La estática utiliza modelos computacionales 3D y la dinámica se mide con cinta métrica",
            "D) La estática evalúa la fatiga muscular y la dinámica el gasto calórico aeróbico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La antropometría estática mide medidas corporales en reposo (estáticas), mientras que la dinámica considera las dimensiones corporales involucradas en el movimiento y alcances funcionales."
    },
    {
        id: 78,
        area: "Mantenimiento Industrial",
        pregunta: "¿En qué consiste el pilar de 'Mantenimiento Autónomo' dentro de la implementación de la metodología TPM (Total Productive Maintenance)?",
        opciones: [
            "A) En contratar técnicos externos para que realicen las revisiones sin interrumpir al personal",
            "B) En capacitar y facultar a los operadores de producción para que realicen las tareas básicas de limpieza, lubricación, inspección y ajustes menores de sus propios equipos",
            "C) En automatizar los robots de soldadura mediante inteligencia artificial sin intervención humana",
            "D) En eliminar por completo las rutinas de mantenimiento preventivo calendarizado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El mantenimiento autónomo involucra directamente a los operadores en el cuidado diario de su maquinaria (limpieza, inspección sensorial, aprietes), detectando anomalías antes de que evolucionen a fallas."
    },
    {
        id: 79,
        area: "Gestión de Operaciones",
        pregunta: "En los métodos de pronósticos de demanda de series de tiempo, ¿qué caracteriza al método de Suavización Exponencial Simple?",
        opciones: [
            "A) Requiere almacenar el historial completo de ventas de los últimos diez años sin ponderaciones",
            "B) Calcula el pronóstico del siguiente periodo ponderando el pronóstico anterior y el valor real observado mediante una constante de suavizamiento alfa",
            "C) Asume que la demanda futura será exactamente igual a la media aritmética de todos los periodos pasados",
            "D) Elimina por completo el error de pronóstico residual en entornos altamente estacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La suavización exponencial simple utiliza una constante de ponderación (alfa) para ajustar el pronóstico con base en el error cometido entre el último valor real y el pronosticado."
    },
    {
        id: 80,
        area: "Administración de Proyectos",
        pregunta: "¿Qué utilidad principal ofrece un Diagrama de Gantt (Gráfica de Barras) en la planeación y seguimiento de proyectos de ingeniería?",
        opciones: [
            "A) Mostrar de manera gráfica el calendario cronológico de inicio y duración de cada actividad frente al tiempo, facilitando el control visual del avance",
            "B) Calcular con precisión matemática las desviaciones estándar probabilísticas de las rutas críticas",
            "C) Determinar los costos unitarios de depreciación fiscal por línea recta de los equipos",
            "D) Evaluar la resistencia de los materiales estructurales en la cimentación de la planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Diagrama de Gantt es una herramienta visual estándar de gestión que representa temporalmente las tareas en barras horizontales, facilitando el seguimiento del programa de trabajo."
    },
    {
        id: 81,
        area: "Gestión de Operaciones",
        pregunta: "En la planeación agregada de operaciones, ¿cuál es la característica fundamental de una estrategia de nivelación (Level Strategy)?",
        opciones: [
            "A) Variar constantemente la plantilla de personal contratando y despidiendo según la demanda mensual",
            "B) Mantener una tasa de producción y una fuerza de trabajo constantes, absorbiendo las fluctuaciones de la demanda mediante inventario acumulado o faltantes planeados",
            "C) Subcontratar toda la producción externa en los periodos de baja demanda",
            "D) Depender exclusivamente de las horas extra de los operarios de planta"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estrategia de nivelación (Level Strategy) mantiene invariable el ritmo de producción y la fuerza de trabajo, utilizando el inventario como amortiguador para lidiar con los picos y valles de la demanda."
    },
    {
        id: 82,
        area: "Control de Calidad",
        pregunta: "En el contexto de la metodología Seis Sigma y la evaluación de sistemas de medición, ¿qué evalúa concretamente el estudio de repetibilidad y reproducibilidad (Gage R&R)?",
        opciones: [
            "A) La variabilidad introducida por el equipo de medición al repetir la misma lectura (repetibilidad) y la variación debida a los distintos operadores que usan el equipo (reproducibilidad)",
            "B) El costo de calibrar los instrumentos frente a la utilidad neta de la planta",
            "C) La vida útil de los componentes electrónicos de los sensores de presión",
            "D) La cantidad de piezas defectuosas generadas por errores humanos en la línea"
        ],
        respuestaCorrecta: 0,
        explicacion: "El estudio Gage R&R desglosa la variación total del sistema de medición en repetibilidad (equipo) y reproducibilidad (operador) para validar la confiabilidad de los datos recolectados."
    },
    {
        id: 83,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué diferencia operativa clave existe entre un operador logístico tipo 3PL (Third-Party Logistics) y un 4PL (Fourth-Party Logistics)?",
        opciones: [
            "A) El 3PL posee los activos físicos de transporte y bodegas, mientras que el 4PL actúa como integrador y director estratégico que coordina toda la cadena y a los proveedores 3PL",
            "B) El 3PL opera únicamente de forma internacional y el 4PL solo dentro de almacenes locales",
            "C) El 3PL se encarga de las finanzas corporativas y el 4PL del mantenimiento de maquinaria",
            "D) No existe ninguna diferencia, son términos comerciales sinónimos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un 3PL provee servicios físicos directos (transporte, almacenaje), mientras que un 4PL (Lead Logistics Provider) gestiona, diseña e integra toda la cadena de suministro de forma neutral y estratégica."
    },
    {
        id: 84,
        area: "Ingeniería Económica",
        pregunta: "Cuando se evalúan proyectos de inversión mutuamente excluyentes y se presenta una contradicción en los resultados donde el Valor Presente Neto (VPN) recomienda el proyecto A y la Tasa Interna de Retorno (TIR) recomienda el proyecto B, ¿a qué se debe este conflicto y qué criterio debe prevalecer?",
        opciones: [
            "A) A diferencias en la escala de inversión o en los patrones de flujo de caja; debe prevalecer el criterio del VPN por maximizar la riqueza monetaria absoluta de la empresa",
            "B) A errores en la inflación proyectada; debe prevalecer siempre la TIR por ser un porcentaje adimensional",
            "C) A que la TMAR es menor a cero",
            "D) A la depreciación fiscal de los activos fijos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El conflicto VPN-TIR surge por diferencias de escala o timing en los flujos; el VPN debe prevalecer porque mide la contribución neta en dinero real al valor de la empresa."
    },
    {
        id: 85,
        area: "Ergonomía",
        pregunta: "¿Qué evalúa de manera específica el método OWAS (Ovako Working Analysis System) en el análisis postural industrial?",
        opciones: [
            "A) Las posturas de trabajo de todo el cuerpo (espalda, brazos y piernas) junto con la carga levantada, clasificándolas por categorías de acción correctiva urgente",
            "B) El consumo máximo de oxígeno en pruebas de esfuerzo aeróbico prolongado",
            "C) La agudeza visual y la fatiga ocular frente a pantallas de control numérico",
            "D) La fuerza isométrica máxima de prensión manual"
        ],
        respuestaCorrecta: 0,
        explicacion: "OWAS es un método observacional sencillo y eficaz para identificar posturas incómodas de la espalda, brazos y piernas, asociadas a cargas físicas en tareas de manufactura y construcción."
    },
    {
        id: 86,
        area: "Mantenimiento Industrial",
        pregunta: "¿Cómo se define analíticamente la Disponibilidad Operacional (Availability) de un equipo industrial?",
        opciones: [
            "A) El cociente del Tiempo Operativo Total entre el Tiempo Total (Operativo + Paradas por Mantenimiento Correctivo y Preventivo)",
            "B) El costo de refacciones dividido entre el valor de adquisición del activo",
            "C) El número de fallas anuales entre las horas trabajadas",
            "D) El tiempo que el equipo permanece apagado durante los fines de semana"
        ],
        respuestaCorrecta: 0,
        explicacion: "La disponibilidad mide el porcentaje de tiempo que el equipo está listo y operando en relación con el tiempo total disponible programado, vinculando el MTBF y el MTTR."
    },
    {
        id: 87,
        area: "Simulación de Sistemas",
        pregunta: "En la experimentación con modelos de simulación estocástica, ¿para qué se utiliza el concepto de 'periodo de calentamiento' (Warm-up period)?",
        opciones: [
            "A) Para elevar la temperatura de los servidores de cómputo y evitar bloqueos por sobrecalentamiento",
            "B) Para eliminar el sesgo estadístico inicial provocado por un estado transitorio (cuando el sistema arranca vacío) antes de recolectar datos del estado estable",
            "C) Para calcular el costo de arranque de las líneas de producción simuladas",
            "D) Para calibrar las distribuciones de probabilidad de las llegadas de clientes"
        ],
        respuestaCorrecta: 1,
        explicacion: "El periodo de calentamiento permite descartar los datos del inicio de la simulación donde el sistema está artificialmente vacío, asegurando que las métricas reflejen el comportamiento en estado estable."
    },
    {
        id: 88,
        area: "Administración de Proyectos",
        pregunta: "¿Cuál es la diferencia operativa fundamental entre las técnicas de compresión de proyectos conocidas como 'Fast Tracking' y 'Crashing'?",
        opciones: [
            "A) El Fast Tracking solapa actividades que originalmente iban en secuencia para acortar plazos (asumiendo riesgo de re-trabajo), mientras que el Crashing añade recursos y costos a la ruta crítica",
            "B) El Fast Tracking reduce la calidad del producto y el Crashing incrementa los impuestos fiscales",
            "C) El Fast Tracking solo se usa en proyectos de construcción civil y el Crashing en software",
            "D) No hay diferencia, ambas implican contratar más personal al mismo tiempo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Fast Tracking ejecuta tareas en paralelo (solapamiento), aumentando el riesgo; el Crashing acorta la duración de las tareas críticas añadiendo recursos adicionales con un costo directo."
    },
    {
        id: 89,
        area: "Gestión de Operaciones",
        pregunta: "En la metodología SMED para la reducción del tiempo de preparación de máquinas, ¿qué acción corresponde a la conversión de una etapa interna a externa?",
        opciones: [
            "A) Ajustar los pernos del molde mientras la máquina se encuentra operando y produciendo piezas",
            "B) Detener la máquina por completo para limpiar los residuos del lote anterior",
            "C) Comprar maquinaria completamente nueva con tecnología de cambio rápido de fábrica",
            "D) Realizar cálculos matemáticos en la oficina de ingeniería sin tocar la planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "Convertir operaciones internas en externas implica preparar herramientas, precalentar moldes o ajustar componentes mientras la máquina sigue operando, reduciendo el tiempo de parada."
    },
    {
        id: 90,
        area: "Seguridad Industrial",
        pregunta: "De acuerdo con la jerarquía de control de riesgos en seguridad y salud ocupacional, ¿cuál es la medida de control más efectiva a implementar frente a un peligro detectado?",
        opciones: [
            "A) El uso obligatorio de Equipo de Protección Personal (EPP) especializado",
            "B) La eliminación física del peligro o la sustitución por un proceso o material menos peligroso",
            "C) La señalización mediante avisos visuales y letreros de advertencia",
            "D) La capacitación constante y tarjetones de concientización a los operarios"
        ],
        respuestaCorrecta: 1,
        explicacion: "La jerarquía de controles sitúa a la eliminación y la sustitución en la cúspide de efectividad, ya que remueven la fuente del riesgo en lugar de depender del comportamiento humano o el EPP."
    },
    {
        id: 91,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué función principal cumple un sistema de gestión de almacenes (WMS - Warehouse Management System) frente a un sistema ERP general?",
        opciones: [
            "A) Controlar de forma detallada y en tiempo real las operaciones físicas dentro de cuatro paredes (ubicación exacta de racks, picking, packing, entradas y expediciones)",
            "B) Registrar exclusivamente la contabilidad fiscal y la nómina de los empleados",
            "C) Diseñar los planos arquitectónicos de la planta en software CAD",
            "D) Calcular los estados financieros y balances generales de la empresa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Mientras el ERP maneja la visión administrativa y contable general, el WMS se especializa en optimizar y controlar la ejecución física intralogística dentro del almacén."
    },
    {
        id: 92,
        area: "Control de Calidad",
        pregunta: "¿Qué técnica estadística se emplea para probar si existen diferencias estadísticamente significativas entre las medias de tres o más procesos o tratamientos independientes?",
        opciones: [
            "A) Prueba Z de proporciones para muestras grandes",
            "B) Análisis de Varianza (ANOVA - Analysis of Variance)",
            "C) Correlación lineal simple de Pearson",
            "D) Prueba de bondad de ajuste Chi-cuadrada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ANOVA compara las varianzas entre los grupos frente a la varianza dentro de los grupos para determinar si las medias de múltiples poblaciones difieren significativamente."
    },
    {
        id: 93,
        area: "Ingeniería de Planta",
        pregunta: "En el diseño de distribución de planta (Plant Layout), ¿para qué sirve el diagrama de relaciones de bloques o cuadro de cercanías cualitativas?",
        opciones: [
            "A) Para calcular con precisión milimétrica la resistencia estructural del concreto armado",
            "B) Para establecer la proximidad ideal y obligatoria entre departamentos con base en la frecuencia e importancia de su interacción operativa",
            "C) Para determinar los decibelios máximos de ruido permitidos por la secretaría del trabajo",
            "D) Para auditar los inventarios físicos de materia prima en almacén general"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de relaciones cualitativas evalúa qué tan cerca o lejos deben estar los departamentos entre sí (absolutamente necesario, importante, indeseable) para estructurar el layout inicial."
    },
    {
        id: 94,
        area: "Gestión de Operaciones",
        pregunta: "En los registros de un sistema MRP, ¿cómo se definen las 'Recepciones Programadas' (Scheduled Receipts)?",
        opciones: [
            "A) Órdenes de compra ya emitidas a proveedores o órdenes de producción ya lanzadas que están en camino y llegarán en un periodo futuro específico",
            "B) La demanda pronosticada por el departamento de ventas para el próximo año fiscal",
            "C) El inventario de seguridad mínimo que nunca debe tocarse bajo ninguna circunstancia",
            "D) Los requerimientos netos calculados tras restar las existencias actuales"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las recepciones programadas representan suministros que ya están en proceso (ordenados previamente) y que ingresarán al inventario en un periodo determinado del horizonte MRP."
    },
    {
        id: 95,
        area: "Ingeniería Económica",
        pregunta: "¿Cuál es la ventaja principal de utilizar la Tasa Interna de Retorno Modificada (TIRM) en lugar de la TIR convencional?",
        opciones: [
            "A) Elimina el problema de las múltiples tasas de retorno en flujos de efectivo no convencionales y asume una tasa de reinversión más realista (como la TMAR)",
            "B) Permite calcular el proyecto sin necesidad de conocer los flujos de efectivo futuros",
            "C) Convierte el proyecto en un modelo completamente determinista sin incertidumbre",
            "D) Es el único método aceptado por las instituciones bancarias internacionales"
        ],
        respuestaCorrecta: 0,
        explicacion: "La TIR tradicional asume irrealmente que los flujos intermedios se reinvierten a la misma tasa TIR; la TIRM corrige esto permitiendo fijar una tasa de reinversión específica (como el costo de capital)."
    },
    {
        id: 96,
        area: "Logística y Cadena de Suministro",
        pregunta: "En la gestión de inventarios, ¿qué caracteriza a un sistema de clasificación ABC basado en el principio de Pareto?",
        opciones: [
            "A) Clasificar los artículos del inventario en tres categorías (A, B y C) según su valor de consumo anual, permitiendo enfocar los mayores esfuerzos de control en los artículos de mayor impacto económico (Clase A)",
            "B) Clasificar los productos por orden alfabético estricto de sus nombres comerciales",
            "C) Dividir los almacenes en tres pasillos según su distancia a la puerta de salida",
            "D) Asignar tres turnos de trabajo rotativos a los encargados de surtido"
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis ABC categoriza el inventario según su valor monetario anual de consumo (generalmente 80% del valor en 20% de los artículos - Clase A), optimizando los recursos de control."
    },
    {
        id: 97,
        area: "Mantenimiento Industrial",
        pregunta: "Bajo la suposición de una tasa de falla constante ($\lambda$), ¿cómo se calcula la Confiabilidad $R(t)$ de un equipo para un tiempo de operación $t$ bajo la distribución exponencial?",
        opciones: [
            "A) $R(t) = e^{-\\lambda t}$",
            "B) $R(t) = 1 + \\lambda t$",
            "C) $R(t) = \\frac{1}{\\lambda t}$",
            "D) $R(t) = \\ln(\\lambda t)$"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la distribución exponencial con tasa de falla constante, la función de confiabilidad (probabilidad de operar sin fallas hasta el tiempo $t$) está dada por la expresión $R(t) = e^{-\\lambda t}$."
    },
    {
        id: 98,
        area: "Control de Calidad",
        pregunta: "Durante la fase de Medición (Measure) de un proyecto Seis Sigma bajo metodología DMAIC, ¿qué objetivo persigue el cálculo de la Línea Base del Proceso?",
        opciones: [
            "A) Despedir al personal con menor rendimiento en la primera semana",
            "B) Cuantificar el desempeño actual del proceso antes de implementar mejoras, estableciendo un punto de comparación inicial (Z o DPMO)",
            "C) Modificar el diseño de la planta sin autorización de la gerencia",
            "D) Establecer los salarios y bonos de los operadores de manufactura"
        ],
        respuestaCorrecta: 1,
        explicacion: "La línea base en la fase de Medición establece cuantitativamente cómo está operando el proceso actualmente (con su nivel Z, Cpk o DPMO), para poder medir el éxito de las futuras mejoras."
    },
    {
        id: 99,
        area: "Ergonomía",
        pregunta: "¿Qué evalúa de manera específica el método NIOSH simplificado al calcular el índice de levantamiento (IL)?",
        opciones: [
            "A) Si el índice de levantamiento es mayor a 1.0, indica que la tarea presenta riesgo elevado de lesión lumbar para una proporción significativa de trabajadores",
            "B) El consumo de combustible de los camiones de carga pesada en carretera",
            "C) La velocidad máxima de desplazamiento de los montacargas en pasillos estrechos",
            "D) El nivel de iluminación en oficinas administrativas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Índice de Levantamiento (IL) de NIOSH relaciona el peso real levantado con el límite de peso recomendado (RWL); si es mayor a 1.0, el riesgo de trastornos lumbares es inaceptable."
    },
    {
        id: 100,
        area: "Gestión de Operaciones",
        pregunta: "De acuerdo con los cinco pasos de focalización de la Teoría de Restricciones (TOC), ¿cuál es el segundo paso lógico que debe ejecutar un ingeniero industrial tras identificar la restricción del sistema?",
        opciones: [
            "A) Comprar inmediatamente maquinaria nueva y costosa para duplicar la capacidad",
            "B) Decidir cómo explotar la restricción (obtener el máximo rendimiento posible del cuello de botella con los recursos actuales)",
            "C) Subordinar el resto de los procesos al ritmo del cuello de botella",
            "D) Elevar la capacidad de todas las demás estaciones de trabajo de la planta"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los 5 pasos de la TOC son: 1. Identificar la restricción, 2. Explotar la restricción (exprimir su máxima capacidad actual sin gastar de más), 3. Subordinar todo lo demás, 4. Elevar la restricción, 5. Repetir."
    },
    {
        id: 101,
        area: "Gestión de Operaciones",
        pregunta: "En un sistema MRP, si se presenta un incremento repentino en los requerimientos brutos del Programa Maestro de Producción (MPS), ¿cómo se propagan estos cambios a lo largo de la estructura de la Lista de Materiales (BOM)?",
        opciones: [
            "A) Se propagan de manera descendente (top-down) a través de los niveles de ensamble, recalculando las necesidades netas de subcomponentes y materias primas según sus tiempos de entrega (lead times)",
            "B) Se propagan de manera ascendente recalculando únicamente los costos fijos de contabilidad",
            "C) Se anulan automáticamente si el inventario de seguridad está completo",
            "D) Modifican exclusivamente el balance general de la empresa sin afectar los inventarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "El MRP opera de manera descendente (top-down) desde el producto final del MPS hasta las materias primas básicas, desglosando los requerimientos netos considerando la BOM y los lead times."
    },
    {
        id: 102,
        area: "Control de Calidad",
        pregunta: "¿Qué mide específicamente el indicador de Valor Ganado (Earned Value Management - EVM) conocido como Índice de Desempeño del Costo (CPI - Cost Performance Index)?",
        opciones: [
            "A) La eficiencia financiera del proyecto comparando el valor del trabajo realizado frente al costo real incurrido (EV / AC)",
            "B) El porcentaje de avance físico en el cronograma frente al tiempo planificado",
            "C) La cantidad de piezas defectuosas por millón de oportunidades (DPMO)",
            "D) El costo total de transporte logístico entre plantas"
        ],
        respuestaCorrecta: 0,
        explicacion: "El CPI se calcula como el valor ganado (EV) dividido entre el costo real (AC); un valor mayor a 1 indica que el proyecto está operando por debajo del presupuesto estimado."
    },
    {
        id: 103,
        area: "Logística y Cadena de Suministro",
        pregunta: "En la gestión de inventarios bajo el modelo de revisión periódica (Sistema de Intervalo Fijo de Pedido), ¿qué factor determina principalmente el tamaño del lote que se solicita en cada ciclo?",
        opciones: [
            "A) El lote económico de pedido (EOQ) fijo e invariable",
            "B) La diferencia entre un nivel máximo de inventario establecido y la suma del inventario actual más las unidades en tránsito",
            "C) El número total de turnos de trabajo operados en el mes",
            "D) El costo de almacenamiento dividido entre el volumen de ventas"
        ],
        respuestaCorrecta: 1,
        explicacion: "En el sistema de revisión periódica, se evalúa el stock a intervalos fijos de tiempo y se pide la cantidad necesaria para rellenar el inventario hasta un nivel máximo predeterminado."
    },
    {
        id: 104,
        area: "Ingeniería Económica",
        pregunta: "¿Qué representa el Valor de Salvamento (Valor Residual) de un activo al término de su vida útil en la evaluación de proyectos?",
        opciones: [
            "A) El costo acumulado de mantenimiento correctivo de los últimos cinco años",
            "B) El valor monetario estimado que se espera recuperar mediante la venta o disposición del activo al final del horizonte de evaluación",
            "C) La depreciación fiscal anual acumulada por el método de línea recta",
            "D) La tasa impositiva aplicada sobre las utilidades netas del proyecto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El valor de salvamento es un flujo positivo de efectivo considerado al final del proyecto debido al valor de mercado residual que conserva el activo fijo."
    },
    {
        id: 105,
        area: "Ergonomía e Ingeniería de Planta",
        pregunta: "En el diseño de sistemas de trabajo con turnos rotativos y jornadas prolongadas, ¿qué objetivo fundamental persigue la aplicación de suplementos o tolerancias (allowances) en el cálculo de tiempos estándar?",
        opciones: [
            "A) Castigar la productividad del operario cuando comete errores de calidad",
            "B) Compensar los tiempos perdidos por necesidades personales, fatiga física inevitable y retrasos inevitables del proceso",
            "C) Reducir la velocidad de la maquinaria para ahorrar energía eléctrica",
            "D) Calcular de forma exacta el costo de depreciación de los equipos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los suplementos o tolerancias añaden un porcentaje de tiempo al tiempo normal calculado, cubriendo necesidades fisiológicas, fatiga y contingencias inevitables del entorno de trabajo."
    },
    {
        id: 106,
        area: "Mantenimiento Industrial",
        pregunta: "Dentro de los ocho pilares fundamentales de la metodología TPM (Total Productive Maintenance), ¿en qué consiste el pilar de 'Mejora Enfocada' (Kobetsu Kaizen)?",
        opciones: [
            "A) En realizar actividades en pequeños grupos multidisciplinarios para eliminar sistemáticamente las 'seis grandes pérdidas' de los equipos mediante proyectos de mejora continua",
            "B) En subcontratar el mantenimiento correctivo a un proveedor externo especializado",
            "C) En limpiar los pisos de la planta al finalizar cada turno de trabajo",
            "D) En automatizar los registros contables en el ERP corporativo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La mejora enfocada (Kobetsu Kaizen) busca la eliminación radical de las pérdidas operativas de los equipos a través de proyectos estructurados de análisis de causa raíz."
    },
    {
        id: 107,
        area: "Simulación de Sistemas",
        pregunta: "Para generar números pseudoaleatorios con distribución uniforme U(0,1) en un algoritmo de simulación computacional, ¿qué método matemático se emplea habitualmente?",
        opciones: [
            "A) El método de congruencia lineal",
            "B) El método de mínimos cuadrados ordinarios",
            "C) El balanceo de líneas mediante diagramas de precedencia",
            "D) El análisis de capacidad Cp y Cpk"
        ],
        respuestaCorrecta: 0,
        explicacion: "El generador congruencial lineal es el algoritmo determinista más clásico y utilizado para producir secuencias de números pseudoaleatorios con propiedades de distribución uniforme."
    },
    {
        id: 108,
        area: "Administración de Proyectos",
        pregunta: "En la gestión de proyectos bajo el estándar PMBOK, ¿qué define el concepto de 'Línea Base del Alcance' (Scope Baseline)?",
        opciones: [
            "A) El presupuesto financiero total autorizado por la dirección general",
            "B) La versión aprobada del enunciado del alcance, la estructura de desglose de trabajo (EDT/WBS) y su diccionario asociado, utilizada como referencia de comparación",
            "C) El cronograma detallado con las fechas de inicio y fin de la ruta crítica",
            "D) La lista de riesgos identificados en la fase de iniciación del proyecto"
        ],
        respuestaCorrecta: 1,
        explicacion: "La línea base del alcance integra el enunciado formal, la EDT y el diccionario EDT, sirviendo como parámetro oficial para medir el desempeño y control de cambios del proyecto."
    },
    {
        id: 109,
        area: "Seguridad Industrial",
        pregunta: "¿Qué función cumple la integración de un Sistema de Administración de la Seguridad y Salud en el Trabajo (como ISO 45001 o normativas equivalentes) en una planta industrial?",
        opciones: [
            "A) Reemplazar por completo los controles de calidad del producto final",
            "B) Proporcionar un marco estructurado para gestionar riesgos laborales, prevenir accidentes, enfermedades de trabajo y mejorar continuamente el desempeño en seguridad",
            "C) Calcular los impuestos sobre la nómina y utilidades fiscales",
            "D) Fijar las tarifas de transporte logístico internacional"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sistemas de gestión de seguridad institucionalizan la prevención de riesgos laborales, cumplimiento normativo y protección integral de la integridad física de los trabajadores."
    },
    {
        id: 110,
        area: "Gestión de Operaciones",
        pregunta: "En el diseño de sistemas de estanterías Kanban para control de inventarios, ¿qué variables intervienen directamente en la fórmula clásica para calcular el número de tarjetas necesarias ($N$)?",
        opciones: [
            "A) Demanda esperada durante el tiempo de entrega, inventario de seguridad, tamaño del contenedor y capacidad de los operarios",
            "B) Costo fijo de orden, tasa de interés bancaria y valor de salvamento",
            "C) Depreciación fiscal, costo unitario de almacenamiento y horas extra",
            "D) Número de centros de maquinado y temperatura ambiente de la planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fórmula clásica de Kanban pondera la demanda durante el lead time, el stock de seguridad y la capacidad de cada contenedor (lote de transporte estándar)."
    },
    {
        id: 111,
        area: "Control de Calidad",
        pregunta: "Durante la fase de Análisis (Analyze) de la metodología Seis Sigma (DMAIC), ¿qué herramienta estadística se utiliza habitualmente para validar si existe una relación causa-efecto lineal entre una variable de entrada continua ($X$) y una variable de respuesta ($Y$)?",
        opciones: [
            "A) Análisis de Regresión Lineal Simple",
            "B) Muestreo de aceptación por atributos MIL-STD",
            "C) Cartas de control por atributos tipo c y u",
            "D) Diagrama de bloques funcionales de planta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La regresión lineal simple modela matemáticamente la dependencia y correlación estadística entre un factor de entrada continuo ($X$) y el resultado de calidad ($Y$)."
    },
    {
        id: 112,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué mide el indicador de rendimiento logístico conocido como 'Fill Rate' (Tasa de Surtido)?",
        opciones: [
            "A) El porcentaje de órdenes o líneas de pedido que se logran entregar de inmediato utilizando el inventario disponible en almacén frente al total solicitado",
            "B) El costo de combustible consumido por la flota vehicular por kilómetro",
            "C) El espacio volumétrico libre en los contenedores de exportación",
            "D) El tiempo transcurrido en el muelle de carga y descarga"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Fill Rate mide la capacidad inmediata de respuesta del inventario frente a la demanda de los clientes, expresándose como porcentaje de artículos o pedidos surtidos completos."
    },
    {
        id: 113,
        area: "Ingeniería de Planta",
        pregunta: "¿Cómo se define analíticamente la 'Capacidad del Sistema' (System Capacity) cuando se tienen múltiples estaciones de trabajo en serie con capacidades diferentes?",
        opciones: [
            "A) Es igual a la suma aritmética de las capacidades de todas las estaciones de trabajo",
            "B) Está determinada estrictamente por la capacidad de la estación de trabajo con menor rendimiento (el cuello de botella)",
            "C) Es el promedio ponderado de las velocidades máximas de diseño",
            "D) Depende únicamente del almacén de producto terminado"
        ],
        respuestaCorrecta: 1,
        explicacion: "En un proceso en serie sin inventarios intermedios infinitos, la capacidad total de producción de la línea está limitada y gobernada por el cuello de botella (estación más lenta)."
    },
    {
        id: 114,
        area: "Ingeniería Económica",
        pregunta: "¿Qué problema analítico presentan los flujos de efectivo no convencionales (con múltiples cambios de signo en los flujos netos a lo largo del tiempo) al calcular la Tasa Interna de Retorno (TIR)?",
        opciones: [
            "A) Generan múltiples valores matemáticos de TIR, lo que vuelve el indicador ambiguo e inutilizable para la toma de decisiones financieras",
            "B) Provocan que el Valor Presente Neto (VPN) sea siempre estrictamente igual a cero",
            "C) Eliminan por completo la necesidad de descontar el dinero en el tiempo",
            "D) Duplican la tasa impositiva corporativa de forma automática"
        ],
        respuestaCorrecta: 0,
        explicacion: "Por la regla de los signos de Descartes, los flujos no convencionales con múltiples cambios de signo pueden arrojar varias tasas internas de retorno matemáticas, invalidando el criterio de la TIR."
    },
    {
        id: 115,
        area: "Gestión de Operaciones",
        pregunta: "En los sistemas de manufactura flexible (FMS), ¿cuál es una de las ventajas operativas principales frente a las líneas de producción dedicadas rígidas?",
        opciones: [
            "A) La capacidad de fabricar una familia variada de productos con tiempos de cambio de herramienta mínimos y alta adaptabilidad a los cambios de mezcla",
            "B) La eliminación total de la necesidad de programar mantenimiento preventivo",
            "C) Reducir los costos de adquisición de maquinaria a cero",
            "D) Operar exclusivamente bajo pronósticos anuales estáticos sin retroalimentación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los sistemas flexibles (FMS) integran máquinas CNC, manejo automatizado de materiales y control computerizado para procesar familias de piezas con gran versatilidad y rapidez de cambio."
    },
    {
        id: 116,
        area: "Mantenimiento Industrial",
        pregunta: "Si un sistema industrial está compuesto por tres componentes críticos conectados en serie, ¿cómo se comporta la Confiabilidad Total del sistema ($R_{sys}(t)$) respecto a la confiabilidad individual de cada componente?",
        opciones: [
            "A) Es igual al producto de las confiabilidades individuales, por lo que la confiabilidad del sistema es menor que la de su componente más débil",
            "B) Es igual a la suma aritmética de las confiabilidades individuales",
            "C) Es igual al promedio simple de los componentes",
            "D) Es independiente del número de componentes conectados"
        ],
        respuestaCorrecta: 0,
        explicacion: "En configuraciones en serie, si falla un componente falla todo el sistema; la confiabilidad total se calcula multiplicando las confiabilidades individuales ($R_1 \times R_2 \times R_3$), resultando menor que la del componente más débil."
    },
    {
        id: 117,
        area: "Control de Calidad",
        pregunta: "¿Cuál es la diferencia fundamental en el diseño y cálculo de límites entre las cartas de control de Shewhart para variables basadas en Rango ($X\text{-}R$) frente a las basadas en Desviación Estándar ($X\text{-}S$)?",
        opciones: [
            "A) La carta $X\text{-}S$ utiliza la desviación estándar real del subgrupo para estimar la dispersión, siendo más eficiente para tamaños de subgrupo grandes ($n > 10$), mientras que la carta $X\text{-}R$ utiliza el rango",
            "B) La carta $X\text{-}S$ solo se puede usar para atributos y la carta $X\text{-}R$ para finanzas",
            "C) La carta $X\text{-}R$ requiere computadora obligatoriamente y la carta $X\text{-}S$ se calcula a mano",
            "D) No existe diferencia matemática en su formulación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para subgrupos grandes ($n > 10$), el uso de la desviación estándar muestral ($S$) en la carta $X\text{-}S$ es un estimador más preciso de la dispersión del proceso que el rango ($R$)."
    },
    {
        id: 118,
        area: "Logística y Cadena de Suministro",
        pregunta: "¿Qué contempla el análisis de Costo Total de Propiedad (TCO - Total Cost of Ownership) en la selección y evaluación de proveedores industriales?",
        opciones: [
            "A) Únicamente el precio de factura de compra de la materia prima",
            "B) La suma de todos los costos asociados a la adquisición, transporte, almacenamiento, calidad, mantenimiento y disposición final a lo largo del ciclo de vida del bien o servicio",
            "C) Los impuestos sobre la renta corporativa del proveedor",
            "D) El costo de las primas de seguros de vida de los transportistas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El TCO (Costo Total de Propiedad) va más allá del precio de compra inicial, evaluando todos los costos ocultos y operativos asociados durante todo el ciclo de vida del aprovisionamiento."
    },
    {
        id: 119,
        area: "Ergonomía e Ingeniería de Planta",
        pregunta: "¿Qué parámetro de confort ambiental en plantas industriales evalúa la Norma Oficial Mexicana (STPS) correspondiente en relación con el ruido laboral estable o inestable?",
        opciones: [
            "A) Los niveles de presión acústica en decibelios [dB(A)] y los tiempos máximos permisibles de exposición por jornada de trabajo",
            "B) La iluminancia horizontal en luxes sobre la superficie de trabajo",
            "C) La concentración volumétrica de monóxido de carbono en el aire",
            "D) La velocidad del flujo de aire acondicionado en metros por segundo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las normas de seguridad industrial regulan la exposición al ruido evaluando los niveles de presión sonora ponderados y relacionándolos con los tiempos máximos de exposición permitidos para evitar hipoacusia."
    },
    {
        id: 120,
        area: "Gestión de Operaciones / Lean",
        pregunta: "En la implementación avanzada de celdas de manufactura celular, ¿qué beneficio operativo primordial se obtiene al transformar una distribución por procesos (funcional) en una distribución por producto celular?",
        opciones: [
            "A) Incrementar masivamente el inventario en proceso (WIP) en los pasillos principales",
            "B) Reducir drásticamente el tiempo de flujo (Lead Time), el inventario en proceso y las distancias de traslado al agrupar máquinas para procesar familias de piezas con flujo continuo",
            "C) Aumentar la necesidad de supervisiones gerenciales intermedias",
            "D) Requerir lotes de producción masivos y estacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La manufactura celular agrupa máquinas dispares en una celda dedicada a familias de partes con rutas similares, transformando el flujo funcional en un flujo continuo y esbelto que reduce tiempos y mermas."
    },
];