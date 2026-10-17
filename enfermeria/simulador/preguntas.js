const bancoPreguntas = [
    {
        id: 1,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Durante la valoración inicial de un paciente adulto en el servicio de urgencias, se identifica un patrón respiratorio caracterizado por periodos de apnea alternados con respiraciones de profundidad progresivamente mayor. ¿Cómo se denomina este patrón clínico?",
        opciones: [
            "A) Respiración de Kussmaul.",
            "B) Respiración de Cheyne-Stokes.",
            "C) Respiración de Biot.",
            "D) Respiración ataxica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La respiración de Cheyne-Stokes se caracteriza por un patrón oscilatorio de hipernea alternando con periodos de apnea, común en lesiones del sistema nervioso central o insuficiencia cardiaca congestiva."
    },
    {
        id: 2,
        area: "Salud Pública y Comunitaria",
        pregunta: "En el marco de la cartilla nacional de salud y los programas de prevención en México, ¿cuál es la periodicidad recomendada para la aplicación de la vacuna antitetánica diftérica (Td) en adultos?",
        opciones: [
            "A) Dosis única de por vida.",
            "B) Cada año durante la temporada invernal.",
            "C) Cada 10 años a partir de la primovacunación o refuerzo.",
            "D) Únicamente en caso de exposición a heridas punzocortantes sucias."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El esquema de vacunación para adultos establece la aplicación de un refuerzo con toxoide tetánico y diftérico cada 10 años para mantener títulos protectores."
    },
    {
        id: 3,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la atención del trabajo de parto en fase activa, ¿cuál es el intervalo mínimo recomendado para realizar la auscultación intermitente de la frecuencia cardiaca fetal según las guías clínicas de buena práctica obstétrica?",
        opciones: [
            "A) Cada 15 a 30 minutos durante el periodo de dilatación y cada 5 minutos en el periodo expulsivo.",
            "B) Cada 2 horas de manera rutinaria.",
            "C) Únicamente al ingreso de la paciente a la sala de labor.",
            "D) Cada hora posterior a cada contracción uterina."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La monitorización intermitente de la FCF debe realizarse cada 15-30 min en dilatación y cada 5 min en expulsivo para detectar oportunamente sufrimiento fetal agudo."
    },
    {
        id: 4,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la administración de los servicios de salud, ¿qué modelo o enfoque de calidad se distingue por la aplicación del ciclo PHVA (Planear, Hacer, Verificar, Actuar)?",
        opciones: [
            "A) Gestión de riesgos financieros corporativos.",
            "B) Mejora continua de la calidad (Ciclo de Deming).",
            "C) Evaluación exclusiva por acreditación internacional de hospitales.",
            "D) Auditoría médica de expedientes clínicos retrospectivos."
        ],
        respuestaCorrecta: 1, // B 
    },
    {
        id: 4,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la administración de los servicios de salud, ¿qué modelo o enfoque de calidad se distingue por la aplicación del ciclo PHVA (Planear, Hacer, Verificar, Actuar)?",
        opciones: [
            "A) Gestión de riesgos financieros corporativos.",
            "B) Evaluación exclusiva por acreditación internacional de hospitales.",
            "C) Auditoría médica de expedientes clínicos retrospectivos.",
            "D) Mejora continua de la calidad (Ciclo de Deming)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El ciclo PHVA o ciclo de Deming es la base metodológica de la mejora continua de la calidad en los procesos de atención y gestión en salud."
    },
    {
        id: 5,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "¿Cuál es la acción prioritaria de enfermería ante la aparición de signos de infiltración o extravasación de un medicamento vesicante a través de un acceso venoso periférico?",
        opciones: [
            "A) Continuar la infusión aumentando la velocidad para terminar pronto.",
            "B) Suspender inmediatamente la infusión, notificar al médico y seguir el protocolo institucional específico (aspiración de residuo y aplicación de antídoto o compresas).",
            "C) Retirar la cánula y masajear vigorosamente la zona para disipar el líquido.",
            "D) Aplicar calor seco directo de forma prolongada sin evaluar el fármaco."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Ante una extravasación de fármacos vesicantes, suspender la infusión de inmediato evita mayor daño tisular; se debe aspirar remanente y aplicar medidas específicas."
    },
    {
        id: 6,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología clínica y comunitaria, ¿cómo se define el concepto de 'Incidencia' de una enfermedad?",
        opciones: [
            "A) El número total de casos existentes (nuevos y antiguos) en una población en un momento dado.",
            "B) La proporción de muertes causadas por una patología específica en un año.",
            "C) El número de casos nuevos de una enfermedad que se desarrollan en una población en riesgo durante un periodo de tiempo determinado.",
            "D) El porcentaje de pacientes asintomáticos detectados en tamizaje."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La incidencia mide exclusivamente la aparición de casos nuevos de una enfermedad en una población susceptible durante un periodo de seguimiento."
    },
    {
        id: 7,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación del recién nacido en el primer minuto de vida mediante la prueba de Apgar, se observa frecuencia cardiaca menor de 100 lpm, llanto débil, ligera flexión de extremidades, llanto o mueca al estímulo y coloración acrocianótica. ¿Qué puntuación corresponde?",
        opciones: [
            "A) Puntuación de 5 de 10.",
            "B) Puntuación de 3 de 10.",
            "C) Puntuación de 8 de 10.",
            "D) Puntuación de 10 de 10."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "FC < 100 (1 punto), llanto débil/mueca (1 punto), ligera flexión (1 punto), mueca al estímulo (1 punto), acrocianosis (1 punto); total 5 puntos."
    },
    {
        id: 8,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "De acuerdo con la Ley General de Salud y las normas oficiales mexicanas, ¿a quién corresponde la responsabilidad directa de la guarda, custodia y registro del expediente clínico en una unidad hospitalaria?",
        opciones: [
            "A) Al paciente o familiares directos tras cada egreso.",
            "B) Al jefe de enfermeras del turno nocturno.",
            "C) Al establecimiento de salud y al personal médico/administrativo encargado de su archivo y control.",
            "D) A la Secretaría de Hacienda y Crédito Público."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El expediente clínico es propiedad de la institución médica que presta el servicio, siendo obligación de esta su guarda, custodia y manejo confidencial."
    },
    {
        id: 9,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con traumatismo craneoencefálico severo, al aplicar la Escala de Coma de Glasgow se obtiene apertura ocular al dolor (2), respuesta verbal con sonidos incomprensibles (2) y respuesta motora con extensión anormal ante estímulos dolorosos (descerebración, 2). ¿Cuál es la puntuación total?",
        opciones: [
            "A) 6 de 15.",
            "B) 9 de 15.",
            "C) 4 de 15.",
            "D) 11 de 15."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La suma de la escala de Glasgow en este caso es: Ocular (2) + Verbal (2) + Motora (2) = 6 puntos, indicando daño neurológico grave."
    },
    {
        id: 10,
        area: "Salud Pública y Comunitaria",
        pregunta: "Dentro de la cadena epidemiológica, ¿cómo se denomina al hábitat natural en el que vive, crece y se multiplica un agente infeccioso (humano, animal o ambiental)?",
        opciones: [
            "A) Vía de transmisión.",
            "B) Reservorio.",
            "C) Huésped susceptible.",
            "D) Vector mecánico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El reservorio constituye el hábitat principal donde el agente infeccioso vive, se metaboliza y se multiplica, perpetuando su ciclo epidemiológico."
    },
    {
        id: 11,
        area: "Enfermería Maternoinfantil",
        pregunta: "¿Cuál es el signo clínico clásico y temprano que caracteriza al desarrollo de la preeclampsia severa durante la segunda mitad del embarazo?",
        opciones: [
            "A) Hipotensión ortostática matutina.",
            "B) Presión arterial sistólica ≥ 160 mmHg o diastólica ≥ 110 mmHg acompañada de proteinuria significativa y síntomas vaso-cerebrales.",
            "C) Incremento súbito de la glucemia basal en ayuno.",
            "D) Aparición de contracciones uterinas regulares antes de la semana 28."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La preeclampsia severa se define por cifras tensionales elevadas (≥160/110 mmHg) junto con daño a órganos blanco, proteinuria y alteraciones neurológicas o visuales."
    },
    {
        id: 12,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la teoría y gestión de enfermería, ¿qué modelo conceptual define a la disciplina basándose en el 'Déficit de Autocuidado'?",
        opciones: [
            "A) Modelo de Adaptación de Sister Callista Roy.",
            "B) Teoría del Déficit de Autocuidado de Dorothea Orem.",
            "C) Modelo de Sistemas de Betty Neuman.",
            "D) Teoría del Entorno de Florence Nightingale."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Dorotea Orem postula que la enfermería actúa cuando la demanda de autocuidado del individuo supera su capacidad para realizarlo (déficit de autocuidado)."
    },
    {
        id: 13,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Durante la administración de una transfusión sanguínea de concentrado eritrocitario, el paciente inicia con fiebre súbita, escalofríos, dolor lumbar y taquicardia a los 10 minutos de haber iniciado. ¿Cuál debe ser la primera acción de enfermería?",
        opciones: [
            "A) Disminuir la velocidad de infusión a la mitad y administrar paracetamol.",
            "B) Suspender inmediatamente la transfusión, mantener la vía venosa abierta con solución salina al 0.9% y notificar al médico y banco de sangre.",
            "C) Administrar un antihistamínico por vía intravenosa rápida y continuar vigilando.",
            "D) Retirar el catéter venoso central y aplicar compresas frías."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Ante una sospecha de reacción transfusional hemolítica aguda, la acción prioritaria e inmediata es detener la infusión para evitar mayor administración de antígenos incompatibles."
    },
    {
        id: 14,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la atención primaria de salud, ¿qué comprende el concepto de 'Prevención Primaria' según la pirámide de Leavell y Clark?",
        opciones: [
            "A) Diagnóstico precoz y tratamiento oportuno de las enfermedades.",
            "B) Rehabilitación física y social de pacientes crónicos.",
            "C) Promoción de la salud y protección específica (como vacunación y saneamiento ambiental) antes de que aparezca la enfermedad.",
            "D) Limitación del daño en etapas avanzadas del padecimiento."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La prevención primaria actúa antes de que se inicie la enfermedad mediante la promoción de la salud y medidas de protección específica como inmunizaciones."
    },
    {
        id: 15,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante el puerperio inmediato, ¿cómo se denomina a los loquios normales que se presentan del 1º al 3º día postparto, caracterizados por su color rojo brillante y presencia de sangre?",
        opciones: [
            "A) Loquios serosos.",
            "B) Loquios alba.",
            "C) Loquios rubra.",
            "D) Loquios purulentos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los loquios rubra están compuestos principalmente de sangre, restos deciduales y membranas fetales, presentándose en los primeros días del puerperio inmediato."
    },
    {
        id: 16,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En el contexto de la seguridad del paciente y las metas internacionales, ¿cuál es el propósito fundamental de la aplicación del 'Marcaje Quirúrgico' antes de una intervención?",
        opciones: [
            "A) Reducir los costos operativos del quirófano.",
            "B) Prevenir errores de sitio, de procedimiento y de paciente correcto en cirugías.",
            "C) Sustituir el expediente clínico electrónico en el área gris.",
            "D) Evaluar la competencia quirúrgica del cirujano tratante."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El marcaje quirúrgico es una barrera de seguridad crítica dentro de las metas internacionales para prevenir cirugías en sitios incorrectos."
    },
    {
        id: 17,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con infarto agudo de miocardio (IAM) con elevación del segmento ST, ¿cuál es el objetivo principal de la administración temprana de ácido acetilsalicílico (AAS)?",
        opciones: [
            "A) Disminuir la presión arterial sistémica de manera inmediata.",
            "B) Inhibir la agregación plaquetaria y prevenir la extensión del trombo en la arteria coronaria ocluida.",
            "C) Revertir las arritmias ventriculares malignas.",
            "D) Actuar como analgésico opioide de rescate."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El AAS actúa como antiagregante plaquetario bloqueando la ciclooxigenasa, evitando la formación y propagación del trombo coronario en el contexto isquémico."
    },
    {
        id: 18,
        area: "Salud Pública y Comunitaria",
        pregunta: "¿Qué tipo de estudio epidemiológico se caracteriza por medir la exposición y la enfermedad en una población en un solo punto temporal específico (estudio de prevalencia)?",
        opciones: [
            "A) Estudio de casos y controles.",
            "B) Estudio de cohorte prospectiva.",
            "C) Estudio transversal (transversal o de prevalencia).",
            "D) Ensayo clínico controlado aleatorizado."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los estudios transversales evalúan la exposición y el evento de interés de manera simultánea en una población definida en un momento dado, midiendo prevalencia."
    },
    {
        id: 19,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la valoración del desarrollo psicomotor infantil, ¿a qué edad promedio se espera que un lactante sea capaz de sostener la cabeza firmemente sin oscilación al estar en posición vertical?",
        opciones: [
            "A) Al mes de vida.",
            "B) A los 3 meses de vida.",
            "C) A los 9 meses de vida.",
            "D) Al año de edad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El control cefálico firme se consolida habitualmente alrededor de los 3 meses de edad como parte de los hitos motores gruesos del desarrollo."
    },
    {
        id: 20,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En el liderazgo y supervisión de enfermería, ¿qué estilo de liderazgo se caracteriza por la centralización de la autoridad en el líder, toma de decisiones unilaterales y escasa participación del subordinado?",
        opciones: [
            "A) Liderazgo democrático o participativo.",
            "B) Liderazgo liberal o laissez-faire.",
            "C) Liderazgo autocrático o autoritario.",
            "D) Liderazgo transformacional."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El estilo autocrático concentra el poder y la toma de decisiones en el líder, estableciendo directrices estrictas sin consultar al equipo."
    },
    {
        id: 21,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Ante un paciente politraumatizado en el ámbito prehospitalario u hospitalario, ¿cuál es el primer paso prioritario en la evaluación sistemática según el protocolo internacional ATLS / soporte vital?",
        opciones: [
            "A) Revisión detallada de fracturas óseas.",
            "B) Vía aérea permeable con control de columna cervical (Airway with cervical spine control).",
            "C) Sutura de heridas contuso-cortantes superficiales.",
            "D) Canalización de dos vías periféricas de grueso calibre."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El soporte vital en trauma sigue estrictamente el ABCD: la vía aérea (Airway) con protección cervical es la prioridad absoluta para prevenir asfixia y lesión medular."
    },
    {
        id: 22,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la visita domiciliaria de enfermería comunitaria, ¿cuál es la primera etapa que debe desarrollarse antes de acudir al domicilio del paciente o familia?",
        opciones: [
            "A) La etapa de ejecución y aplicación de técnicas.",
            "B) La etapa de planeación (revisión de antecedentes, objetivos y concertación de la visita).",
            "C) La etapa de evaluación final y alta del domicilio.",
            "D) La etapa de prescripción de medicamentos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La visita domiciliaria requiere una fase de planeación rigurosa donde se estudian los antecedentes epidemiológicos, clínicos y se establecen los propósitos."
    },
    {
        id: 23,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la lactancia materna exclusiva, ¿qué hormona adenohipofisaria es la responsable principal de la síntesis y producción de leche en los alveolos mamarios?",
        opciones: [
            "A) Oxitocina.",
            "B) Prolactina.",
            "C) Estrógeno.",
            "D) Progesterona."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La prolactina estimula la producción láctea, mientras que la oxitocina (producida en la neurohipófisis) media la eyección o salida de la leche."
    },
    {
        id: 24,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de recursos materiales, ¿qué método de control de inventarios se basa en la clasificación de los insumos según su valor monetario e impacto operativo en tres categorías (A, B y C)?",
        opciones: [
            "A) Método de inventario perpetuo.",
            "B) Análisis ABC o ley de Pareto en almacén.",
            "C) Sistema de lote económico de pedido (EOQ).",
            "D) Auditoría contable trimestral."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El análisis ABC clasifica los insumos sanitarios priorizando los de mayor costo o impacto (A), frente a los de menor relevancia económica (C)."
    },
    {
        id: 25,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En el manejo de un paciente con ventilación mecánica invasiva, ¿cuál es una complicación pulmonar aguda derivada de una presión inspiratoria excesiva o barotrauma?",
        opciones: [
            "A) Neumotórax espontáneo a tensión.",
            "B) Atelectasia por déficit de surfactante.",
            "C) Edema pulmonar cardiogénico.",
            "D) Estenosis traqueal crónica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El barotrauma generado por presiones elevadas en la vía aérea puede provocar la ruptura alveolar, ocasionando un neumotórax a tensión."
    },
    {
        id: 26,
        area: "Salud Pública y Comunitaria",
        pregunta: "En el control de enfermedades transmisibles, ¿cómo se define el periodo de incubación de una enfermedad infecciosa?",
        opciones: [
            "A) El tiempo que transcurre desde la exposición a un agente infeccioso hasta la aparición de los primeros signos y síntomas clínicos de la enfermedad.",
            "B) El periodo en el cual el paciente es capaz de contagiar a otros.",
            "C) El tiempo que dura el tratamiento farmacológico completo.",
            "D) La fase de convalecencia posterior a la curación."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El periodo de incubación abarca el lapso desde que el huésped contrae el agente patógeno hasta que manifiesta clínicamente la enfermedad."
    },
    {
        id: 27,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación física de un lactante deshidratado secundario a diarrea aguda, ¿cuál es un signo clínico cardinal de deshidratación grave?",
        opciones: [
            "A) Piel elástica y húmeda.",
            "B) Fontanela anterior deprimida (hundida), ojos hundidos, llanto sin lágrimas y signo del pliegue cutáneo positivo lento.",
            "C) Aumento de la salivación y micción frecuente.",
            "D) Taquicardia leve con presión arterial persistentemente elevada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La depresión de la fontanela, globos oculares hundidos, ausencia de lágrimas y signo del pliegue positivo indican pérdida hídrica severa."
    },
    {
        id: 28,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la legislación y ética de enfermería, ¿cómo se define jurídicamente la 'Iatrogenia'?",
        opciones: [
            "A) Un acto premeditado para causar daño físico al paciente.",
            "B) Un daño en el cuerpo o la salud del paciente causado de manera no intencional como consecuencia de la atención médica o de enfermería.",
            "C) La negativa del paciente a recibir tratamientos.",
            "D) El abandono justificado del turno laboral."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La iatrogenia es todo efecto nocivo, perjudicial o desfavorable que se presenta como consecuencia de una intervención sanitaria, sea evitable o inevitable."
    },
    {
        id: 29,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con insuficiencia renal crónica sometido a hemodiálisis, ¿qué alteración electrolítica grave debe vigilarse estrechamente por su riesgo de desencadenar arritmias ventriculares letales?",
        opciones: [
            "A) Hipnatremia leve.",
            "B) Hiperpotasemia (hiperkalemia).",
            "C) Hipocalcemia asintomática.",
            "D) Hipomagnesemia moderada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La hiperpotasemia es común en la insuficiencia renal avanzada y altera el potencial de membrana miocárdico, provocando fibrilación ventricular o paro cardiaco."
    },
    {
        id: 30,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la estrategia de atención primaria, ¿qué representa la Cartilla Nacional de Salud en México?",
        opciones: [
            "A) Un documento oficial e individual de gratuidad para el control periódico de acciones preventivas según grupos de edad.",
            "B) Un comprobante de afiliación fiscal ante el IMSS.",
            "C) Una receta médica universal para farmacias particulares.",
            "D) Un expediente clínico hospitalario completo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las cartillas nacionales de salud son instrumentos oficiales de seguimiento preventivo que integran el paquete básico de salud según cada etapa de vida."
    },
    {
        id: 31,
        area: "Enfermería Maternoinfantil",
        pregunta: "Ante una hemorragia obstétrica postparto por atonía uterina, ¿cuál es la primera medida física y mecánica de enfermería y equipo médico a realizar de urgencia?",
        opciones: [
            "A) Colocar a la paciente en posición de Trendelenburg estricta.",
            "B) Realizar masaje uterino bimanual y compresión del fondo uterino para estimular la contracción del miometrio.",
            "C) Administrar diuréticos de asa por vía intravenosa.",
            "D) Iniciar ventilación mecánica con mascarilla."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El masaje uterino bimanual estimula mecánicamente la contracción de las fibras musculares miometriales para ocluir los vasos sanguíneos sangrantes (atonía)."
    },
    {
        id: 32,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la teoría de la comunicación humana aplicada a la salud, ¿cuál es una característica de la comunicación efectiva o asertiva por parte del personal de enfermería?",
        opciones: [
            "A) Expresar opiniones y necesidades con claridad, respeto y firmeza sin agredir ni someter los derechos de los demás.",
            "B) Evitar el contacto visual para no intimidar al paciente.",
            "C) Imponer instrucciones médicas sin permitir preguntas.",
            "D) Utilizar lenguaje técnico complejo para demostrar superioridad."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La asertividad es la habilidad comunicativa que permite transmitir información clara y respetuosa, defendiendo los derechos de pacientes y profesionales."
    },
    {
        id: 33,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la valoración neurológica de un paciente con sospecha de hipertensión intracraneal (HIC), ¿qué conjunto de signos clínicos conforma la llamada 'Tríada de Cushing'?",
        opciones: [
            "A) Hipotensión, taquicardia y taquipnea.",
            "B) Hipertensión arterial sistémica (con aumento de la presión de pulso), bradicardia y alteraciones respiratorias irregulares.",
            "C) Fiebre alta, rigidez de nuca y petequias.",
            "D) Miosis bilateral arrefléxica y flacidez generalizada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tríada de Cushing es un signo tardío y grave de hipertensión intracraneal que incluye hipertensión, bradicardia y patrón respiratorio irregular."
    },
    {
        id: 34,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la administración de inmunbiológicos, ¿qué significa que una vacuna contenga microorganismos atenuados?",
        opciones: [
            "A) Que contiene virus o bacterias muertos por calor o agentes químicos.",
            "B) Que contiene formas vivas pero debilitadas del agente infeccioso, capaces de replicarse de forma limitada sin causar la enfermedad grave.",
            "C) Que está compuesta exclusivamente por toxoides purificados.",
            "D) Que se elabora mediante ingeniería genética con ADN recombinante de superficie."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las vacunas atenuadas utilizan cepas debilitadas de patógenos que inducen una respuesta inmunológica robusta y duradera similar a la infección natural."
    },
    {
        id: 35,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación del crecimiento y desarrollo en el segundo año de vida ( toddler), ¿cuál es una característica psicosocial fundamental según la teoría de Erikson?",
        opciones: [
            "A) Confianza frente a desconfianza.",
            "B) Autonomía frente a vergüenza y duda.",
            "C) Iniciativa frente a culpa.",
            "D) Laboriosidad frente a inferioridad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En la etapa de infante pequeño (toddler), el conflicto psicosocial clave es la autonomía frente a la vergüenza y la duda al explorar su entorno."
    },
    {
        id: 36,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En el marco de las Acciones Esenciales para la Seguridad del Paciente en México, ¿cuál es el objetivo de la Acción Esencial relacionada con el 'Registro de Eventos Adversos'?",
        opciones: [
            "A) Sancionar penalmente al personal de enfermería involucrado en errores.",
            "B) Generar información interna y aprendizaje institucional para rediseñar procesos y prevenir la recurrencia de incidentes o eventos centinela.",
            "C) Ocultar los errores médicos ante la opinión pública.",
            "D) Aumentar la prima de seguros de responsabilidad civil."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El registro y análisis de eventos adversos busca el aprendizaje y la mejora continua de los sistemas de seguridad, evitando castigos punitivos estériles."
    },
    {
        id: 37,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de enfermería en el periodo postoperatorio inmediato, ¿cuál es la complicación respiratoria más frecuente en la unidad de recuperación postanestésica (URPA)?",
        opciones: [
            "A) Embolia pulmonar masiva.",
            "B) Obstrucción de la vía aérea superior (por caída de la base de la lengua o secreciones).",
            "C) Neumonía nosocomial por ventilación prolongada.",
            "D) Infarto agudo de miocardio silente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La relajación muscular residual por anestesia predispone a la obstrucción de la vía aérea superior por la lengua, siendo el riesgo primordial en la URPA."
    },
    {
        id: 38,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la vigilancia epidemiológica en México, ¿cómo se define un 'Caso Sospechoso'?",
        opciones: [
            "A) Aquella persona que presenta signos o síntomas acordes con la definición operacional de una enfermedad sujeta a vigilancia.",
            "B) Un paciente con diagnóstico de laboratorio confirmado por PCR.",
            "C) Una persona sana que convive con un enfermo crónico.",
            "D) Un fallecido sin causa de muerte aparente en vía pública."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Un caso sospechoso cumple con los criterios clínicos de la definición operacional establecida, requiriendo pruebas para su confirmación o descartación."
    },
    {
        id: 39,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la valoración del recién nacido, ¿qué indica la presencia de ictericia en las primeras 24 horas de vida extrauterina?",
        opciones: [
            "A) Un proceso fisiológico normal por lactancia materna exclusiva.",
            "B) Un hallazgo patológico probable (como incompatibilidad al sistema ABO o factor Rh, o hemólisis) que requiere valoración médica urgente.",
            "C) Una variante anatómica sin trascendencia clínica.",
            "D) Deshidratación leve por falta de aporte hídrico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La aparición de ictericia antes de las 24 horas de vida se considera patológica hasta demostrar lo contrario, sugiriendo procesos hemolíticos severos."
    },
    {
        id: 40,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de calidad hospitalaria, ¿qué mide específicamente el indicador de 'Trato Digno' en enfermería?",
        opciones: [
            "A) El tiempo promedio de espera en la sala de urgencias.",
            "B) La percepción y cumplimiento de los aspectos de calidez, respeto, presentación, empatía y profesionalismo con los que el personal de enfermería atiende al paciente.",
            "C) El porcentaje de medicamentos administrados sin errores de dosis.",
            "D) La cantidad de notas de enfermería registradas por turno."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El indicador de calidad 'Trato Digno' evalúa el grado en que el personal de enfermería otorga una atención basada en el respeto, la empatía y la calidad humana."
    },
    {
        id: 41,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Durante la monitorización hemodinámica invasiva mediante un catéter de Swan-Ganz, ¿qué parámetro evalúa directamente la presión telediastólica del ventrículo izquierdo?",
        opciones: [
            "A) Presión venosa central (PVC).",
            "B) Presión en cuña o de oclusión de la arteria pulmonar (PAOP / PWP).",
            "C) Gasto cardíaco total.",
            "D) Resistencia vascular sistémica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La presión en cuña de la arteria pulmonar refleja indirectamente la presión en la aurícula izquierda y la presión telediastólica del ventrículo izquierdo."
    },
    {
        id: 42,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la evaluación del estado nutricional poblacional, ¿cómo se define el índice de masa corporal (IMC)?",
        opciones: [
            "A) Peso en libras dividido entre la estatura en pulgadas al cuadrado.",
            "B) Circunferencia de cintura dividida entre la cadera.",
            "C) Peso en kilogramos dividido entre la estatura en metros al cuadrado.",
            "D) Perímetro braquial dividido entre la edad cronológica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El IMC se calcula dividiendo el peso del individuo en kilos entre el cuadrado de su estatura en metros, siendo un indicador estándar de corpulencia."
    },
    {
        id: 43,
        area: "Enfermería Maternoinfantil",
        pregunta: "¿Cuál es el principal objetivo de la aplicación de la vacuna BCG al recién nacido antes de su egreso hospitalario?",
        opciones: [
            "A) Prevenir las formas graves de tuberculosis infantil (como la meningitis tuberculosa y miliar).",
            "B) Erradicar la tos ferina atípica en lactantes menores.",
            "C) Estimular la inmunidad contra el virus sincitial respiratorio.",
            "D) Inmunizar permanentemente contra el tétanos neonatal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La vacuna BCG protege a los infantes contra las complicaciones graves y sistémicas de la tuberculosis primaria."
    },
    {
        id: 44,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de calidad y seguridad hospitalaria, ¿cómo se define un 'Evento Centinela'?",
        opciones: [
            "A) Una queja administrativa menor por parte de un familiar inconforme.",
            "B) Un evento adverso inesperado que causa la muerte, lesión física o psicológica grave, o el riesgo de sufrirla, requiriendo investigación inmediata.",
            "C) Un retraso en la entrega de turnos de enfermería menor a 15 minutos.",
            "D) Una falla mecánica en los equipos de cómputo del área administrativa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El evento centinela es un suceso trágico e inesperado que provoca la muerte o daños severos irreversibles, exigiendo un análisis de causa raíz inmediato."
    },
    {
        id: 45,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con cetoacidosis diabética, ¿cuál es la alteración metabólica principal que debe corregirse de forma protocolizada?",
        opciones: [
            "A) Alcalosis metabólica con hippotasemia severa.",
            "B) Acidosis metabólica con hiperglucemia y presencia de cuerpos cetónicos en sangre y orina.",
            "C) Hipoglucemia severa refractaria a glucagón.",
            "D) Hiperosmolaridad sin alteraciones ácidas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La cetoacidosis diabética se caracteriza por la triada de hiperglucemia, acidosis metabólica y cetosis debido al déficit absoluto o relativo de insulina."
    },
    {
        id: 46,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la vigilancia epidemiológica sanitaria, ¿cómo se define un 'Brote Epidémico'?",
        opciones: [
            "A) La aparición de un solo caso aislado de una enfermedad exótica en una región.",
            "B) La presencia de un número de casos de una enfermedad superior al esperado en un área geográfica y periodo determinados.",
            "C) La endemicidad constante de una patología crónica durante décadas.",
            "D) La erradicación total de un agente viral en el continente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un brote representa un incremento desacostumbrado o epidémico de casos de una enfermedad en un espacio y tiempo definidos."
    },
    {
        id: 47,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante el trabajo de parto, ¿qué nombre recibe la maniobra obstétrica digital que se realiza para evaluar la presentación, posición y grado de descenso de la cabeza fetal a través de la vagina?",
        opciones: [
            "A) Maniobra de Leopold.",
            "B) Maniobra de Kristeller.",
            "C) Tacto vaginal obstétrico.",
            "D) Maniobra de Credé."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El tacto vaginal permite valorar la dilatación cervical, el borramiento y el grado de encajamiento de la presentación fetal en la pelvis."
    },
    {
        id: 48,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la administración de los servicios de enfermería, ¿qué comprende el proceso de 'Asignación de Turnos y Plantilla de Personal'?",
        opciones: [
            "A) Distribuir numéricamente y cualitativamente al personal de enfermería para cubrir las necesidades asistenciales de los servicios las 24 horas del día.",
            "B) Fijar los salarios anuales de los directivos del hospital.",
            "C) Comprar los insumos farmacéuticos de alto costo.",
            "D) Auditar los expedientes clínicos de pacientes dados de alta."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La gestión de plantillas de personal busca equilibrar la suficiencia numérica y de competencias del personal con las cargas de trabajo asistenciales."
    },
    {
        id: 49,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con quemaduras graves de segundo y tercer grado que abarca el 40% de su superficie corporal total, ¿cuál es el cálculo de reposición hídrica inicial recomendado en las primeras 24 horas según la fórmula de Parkland?",
        opciones: [
            "A) 4 ml de solución cristaloide por kilogramo de peso por porcentaje de superficie corporal quemada.",
            "B) 1.5 ml de solución glucosada al 5% por cada kilo de peso.",
            "C) Solamente sangre total transfundida cada 6 horas.",
            "D) 10 ml de solución salina por cada año de edad."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La fórmula de Parkland establece la reposición inicial con 4 ml de cristaloides (Ringer Lactato) por kg de peso por % de SCQ."
    },
    {
        id: 50,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la estrategia de Redes de Servicios de Salud, ¿qué caracteriza al 'Primer Nivel de Atención'?",
        opciones: [
            "A) La atención de alta especialidad y trasplantes de órganos.",
            "B) Los hospitales generales de zona con unidades de terapia intensiva.",
            "C) La puerta de entrada al sistema sanitario, enfocada en la promoción de la salud, prevención, diagnóstico temprano y atención de baja complejidad.",
            "D) Los centros de investigación científica biomédica avanzada."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El primer nivel representa el contacto más cercano con la población, centrado en la prevención primaria y medicina preventiva comunitaria."
    },
    {
        id: 51,
        area: "Enfermería Maternoinfantil",
        pregunta: "¿Cuál es la principal complicación materna grave asociada a la hemorragia obstétrica masiva no controlada que puede desencadenar fallo multiorgánico?",
        opciones: [
            "A) Coagulación intravascular diseminada (CID).",
            "B) Hipertensión arterial crónica.",
            "C) Hipotiroidismo gestacional transitorio.",
            "D) Infección urinaria por E. coli."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La pérdida masiva de sangre y consumo de factores de coagulación conduce frecuentemente a coagulación intravascular diseminada (CID)."
    },
    {
        id: 52,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la teoría administrativa, ¿qué principio de Henri Fayol se refiere a que cada empleado debe recibir órdenes de un solo superior jerárquico?",
        opciones: [
            "A) División del trabajo.",
            "B) Unidad de dirección.",
            "C) Unidad de mando.",
            "D) Centralización."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El principio de unidad de mando estipula que un subordinado no debe recibir instrucciones de más de un jefe para evitar conflictos de autoridad."
    },
    {
        id: 53,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Ante un paciente con obstrucción de la vía aérea por cuerpo extraño (OVACE) que se encuentra consciente y presenta tos ineficaz, cianosis y signo universal de asfixia (manos al cuello), ¿cuál es la maniobra de primera elección?",
        opciones: [
            "A) Administrar compresiones abdominales continuas (Maniobra de Heimlich).",
            "B) Dar palmadas en la espalda con el paciente acostado.",
            "C) Iniciar compresiones torácicas externas con masaje cardiaco.",
            "D) Administrar oxígeno a flujo libre por mascarilla simple."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En un adulto consciente con obstrucción severa de la vía aérea, la maniobra de Heimlich (compresiones abdominales subdiafragmáticas) es la intervención salvavidas."
    },
    {
        id: 54,
        area: "Salud Pública y Comunitaria",
        pregunta: "En demografía sanitaria, ¿cómo se calcula la 'Tasa de Mortalidad Infantil'?",
        opciones: [
            "A) Número de defunciones de niños menores de un año por cada 1,000 nacidos vivos en un año determinado.",
            "B) Número total de muertes maternas por cada 100,000 habitantes.",
            "C) Porcentaje de defunciones en adultos mayores de 65 años.",
            "D) Número de abortos espontáneos entre embarazadas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La tasa de mortalidad infantil relaciona las muertes de menores de un año con el total de nacidos vivos en el mismo periodo por mil."
    },
    {
        id: 55,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la atención al recién nacido sano, ¿qué finalidad tiene la administración profiláctica de gotas de eritromicina o nitrato de plata oftálmico en ambos ojos?",
        opciones: [
            "A) Prevenir la conjuntivitis gonocócica o por clamidia adquirida durante el canal de parto (oftalmia neonatal).",
            "B) Estimular la apertura ocular temprana.",
            "C) Corregir defectos congénitos de refracción visual.",
            "D) Nutrir la córnea ante la falta de lágrimas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La profilaxis oftálmica previene infecciones oculares severas en el neonato contraídas al pasar por el canal de parto infectado."
    },
    {
        id: 56,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la auditoría de calidad de los servicios de salud, ¿qué evalúa una 'Auditoría Concurrente'?",
        opciones: [
            "A) Expedientes de pacientes que ya fueron dados de alta hace meses.",
            "B) Procesos de atención y expedientes clínicos de pacientes que se encuentran actualmente hospitalizados.",
            "C) La contabilidad fiscal de la institución médica.",
            "D) El historial crediticio de los proveedores de material quirúrgico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La auditoría concurrente se realiza en tiempo real mientras el paciente recibe la atención, permitiendo corregir desviaciones al instante."
    },
    {
        id: 57,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la valoración del equilibrio ácido-base mediante gasometría arterial, ¿qué indica un pH de 7.30, una PCO2 de 50 mmHg y un HCO3 de 24 mEq/L?",
        opciones: [
            "A) Alcalosis respiratoria compensada.",
            "B) Acidosis metabólica pura.",
            "C) Acidosis respiratoria aguda.",
            "D) Alcalosis metabólica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Un pH bajo (<7.35) indica acidosis; al estar la PCO2 elevada (>45 mmHg) con bicarbonato normal, se trata de una acidosis respiratoria."
    },
    {
        id: 58,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la cadena epidemiológica, ¿cómo se define el concepto de 'Puerta de Salida'?",
        opciones: [
            "A) El camino por el cual el agente infeccioso abandona el huésped reservorio.",
            "B) La vía de ingreso a un hospital general.",
            "C) El mecanismo de desinfección de instrumental quirúrgico.",
            "D) El alta médica definitiva del paciente."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La puerta de salida es el sitio anatómico o vía por donde el patógeno sale del reservorio (respiratoria, digestiva, cutánea, urinaria, etc.)."
    },
    {
        id: 59,
        area: "Enfermería Maternoinfantil",
        pregunta: "¿Cuál es la postura internacional recomendada por la OMS y pediatría para acostar al lactante durante el primer año de vida con el fin de prevenir el Síndrome de Muerte Súbita del Lactante (SMSL)?",
        opciones: [
            "A) Decúbito prono (boca abajo) con almohada alta.",
            "B) Decúbito supino (boca arriba) sobre superficie firme sin objetos sueltos.",
            "C) Decúbito lateral con sujeción estricta.",
            "D) En posición vertical semisentada en columpio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Dormir boca arriba (decúbito supino) sobre superficies firmes reduce drásticamente el riesgo de muerte súbita infantil."
    },
    {
        id: 60,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la teoría de la gestión de conflictos en equipos de salud, ¿qué estrategia de resolución de conflictos implica que ambas partes ceden parcialmente para alcanzar un acuerdo intermedio?",
        opciones: [
            "A) Colaboración o integración.",
            "B) Evasión o retirada.",
            "C) Negociación o compromiso.",
            "D) Competencia o imposición."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La negociación o compromiso busca un punto medio donde cada parte renuncia a algo para lograr una solución aceptable conjunta."
    },
    {
        id: 61,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con un catéter venoso central (CVC), ¿cuál es la medida de asepsia primordial al realizar el cambio de apósito y curación del sitio de inserción?",
        opciones: [
            "A) Utilizar técnica estéril con cubrebocas, gorro, bata y guantes estériles, aplicando clorhexidina con alcohol.",
            "B) Usar guantes limpios sin lavado de manos previo.",
            "C) Aplicar agua oxigenada sin protección estéril.",
            "D) Omitir el uso de antisepsia si la herida se ve limpia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La curación de CVC exige técnica estricta con barrera máxima y antisepsia con clorhexidina para prevenir infecciones del torrente sanguíneo."
    },
    {
        id: 62,
        area: "Salud Pública y Comunitaria",
        pregunta: "En el estudio de brotes epidémicos, ¿qué representa la 'Curva Epidémica'?",
        opciones: [
            "A) Un gráfico de barras que muestra la frecuencia de casos según la fecha de inicio de la enfermedad, permitiendo inferir el patrón de exposición.",
            "B) La línea de costos hospitalarios mensuales.",
            "C) El registro de temperaturas ambientales estacionales.",
            "D) La evolución de la tasa de desempleo nacional."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La curva epidémica grafica los casos en el tiempo, ayudando a identificar si la fuente de contagio fue común, puntual o propagada."
    },
    {
        id: 63,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la atención prenatal, ¿cuál es la suplementación micronutricional básica recomendada universalmente para prevenir defectos del tubo neural en el feto?",
        opciones: [
            "A) Ácido fólico antes de la concepción y durante el primer trimestre de gestación.",
            "B) Altas dosis de vitamina A en el tercer trimestre.",
            "C) Sulfato de magnesio diario desde la semana 10.",
            "D) Vitamina C en altas concentraciones."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El consumo oportuno de ácido fólico previene malformaciones congénitas graves del tubo neural como la espina bífida y anencefalia."
    },
    {
        id: 64,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la normatividad mexicana del expediente clínico (NOM-004-SSA3-2012), ¿qué características deben cumplir las notas de enfermería en el expediente?",
        opciones: [
            "A) Ser redactadas en tercera persona, con fecha, hora, firma autógrafa, nombre completo y categoría de quien la elabora, sin tachaduras ni enmendaduras.",
            "B) Escogerse en formato libre sin necesidad de firmar.",
            "C) Elaborarse exclusivamente al final de la semana laboral.",
            "D) Contener abreviaturas no estandarizadas a criterio personal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NOM-004 exige claridad, veracidad, fecha, hora, nombre y firma en las notas de enfermería como documentos legales oficiales."
    },
    {
        id: 65,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la valoración respiratoria de un paciente con neumonía bacteriana grave, ¿qué hallazgo clínico físico se espera encontrar a la percusión y auscultación pulmonar en la zona afectada?",
        opciones: [
            "A) Matidez a la percusión y disminución o ausencia de ruidos respiratorios con estertores crepitantes.",
            "B) Timpanismo generalizado y sibilancias bilaterales silbantes.",
            "C) Hiperresonancia con ausencia total de vibraciones vocales.",
            "D) Sonoridad normal sin alteraciones."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La consolidación pulmonar por neumonía genera matidez a la percusión, estertores crepitantes y broncofonía o disminución de entrada de aire."
    },
    {
        id: 66,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología, ¿qué mide la 'Especificidad' de una prueba diagnóstica o de tamizaje?",
        opciones: [
            "A) La probabilidad de que la prueba resulte positiva en personas que realmente enfermas.",
            "B) La capacidad de la prueba para identificar correctamente a las personas sanas (verdaderos negativos).",
            "C) El costo económico total de la prueba por paciente.",
            "D) El tiempo que tarda el laboratorio en procesar la muestra."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La especificidad mide la habilidad de una prueba para detectar correctamente a los verdaderos negativos (sanos)."
    },
    {
        id: 67,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la evaluación neurológica del recién nacido, ¿cómo se desencadena y en qué consiste el 'Reflejo de Moro'?",
        opciones: [
            "A) Al estimular la planta del pie, el neonato abre los dedos en abanico.",
            "B) Ante un estímulo sonoro o movimiento brusco de caída cefálica leve, el lactante abduce y extienden los brazos simétricamente para luego abrazarse.",
            "C) Al tocar la mejilla, el bebé gira la cabeza buscando el pezón.",
            "D) Al colocar un objeto en la palma, el neonato flexiona fuertemente los dedos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El reflejo de Moro es una respuesta simétrica de sobresalto ante la pérdida súbita de soporte cefálico."
    },
    {
        id: 68,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de recursos humanos en enfermería, ¿qué representa la 'Evaluación del Desempeño'?",
        opciones: [
            "A) Un proceso sistemático para valorar el rendimiento laboral, las competencias y la calidad del trabajo desarrollado por el personal en su puesto.",
            "B) El cálculo de los impuestos sobre la renta retenidos en nómina.",
            "C) La asignación aleatoria de vacaciones anuales.",
            "D) La inspección de las instalaciones físicas del hospital."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La evaluación del desempeño valora objetivamente las competencias, cumplimiento de metas y áreas de mejora del personal asistencial."
    },
    {
        id: 69,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con un drenaje pleural tipo botella de sello hidráulico, ¿qué indica el parpadeo u oscilación constante del nivel de agua en la trampa con la respiración?",
        opciones: [
            "A) Que el sistema está obstruido o el pulmón se expandió totalmente.",
            "B) Que la permeabilidad del sistema es adecuada y la presión intratorácica se transmite correctamente.",
            "C) Que existe una fuga masiva de aire en la pared torácica.",
            "D) Que el frasco se encuentra completamente lleno de sangre coagulada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La oscilación (flaqueo) del agua en el sello hidráulico sincronizada con la respiración indica que el sistema está permeable y funcional."
    },
    {
        id: 70,
        area: "Salud Pública y Comunitaria",
        pregunta: "En los programas de vacunación, ¿qué es la 'Cadena de Frío'?",
        opciones: [
            "A) El proceso logístico de almacenamiento, conservación y transporte de vacunas dentro de rangos térmicos específicos (generalmente +2°C a +8°C) desde su fabricación hasta su aplicación.",
            "B) El método para congelar muestras biológicas de sangre a -80°C.",
            "C) El sistema de refrigeración de los quirófanos centrales.",
            "D) La distribución de alimentos perecederos en comedores comunitarios."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La cadena de frío garantiza la potencia inmunológica de las vacunas controlando estrictamente la temperatura durante toda su red de transporte y almacenamiento."
    },
    {
        id: 71,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación del crecimiento infantil, ¿cuántos centímetros se espera que aumente en promedio la talla de un lactante durante su primer año de vida?",
        opciones: [
            "A) De 5 a 8 centímetros.",
            "B) Aproximadamente 25 centímetros (alcanzando cerca de 75 cm al año).",
            "C) Exactamente 50 centímetros fijos.",
            "D) Ningún centímetro, solo aumenta de peso."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El crecimiento longitudinal del lactante es muy acelerado en el primer año, incrementando cerca de 25 cm respecto al nacimiento."
    },
    {
        id: 72,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la legislación mexicana en salud, ¿qué regula específicamente la Norma Oficial Mexicana NOM-019-SSA3-2013?",
        opciones: [
            "A) La práctica de enfermería en el Sistema Nacional de Salud, estableciendo sus competencias y atribuciones.",
            "B) El manejo de residuos peligrosos biológico-infecciosos (RPBI).",
            "C) La prevención y control de la diabetes mellitus en hospitales.",
            "D) Los requisitos de infraestructura para salas de rayos X."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NOM-019-SSA3-2013 establece las disposiciones para la práctica de enfermería en el Sistema Nacional de Salud, reconociendo su nivel técnico y profesional."
    },
    {
        id: 73,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la valoración y cuidados de una herida quirúrgica con cicatrización por primera intención, ¿qué signo clínico sugiere la presencia de una infección de sitio quirúrgico (ISQ) superficial?",
        opciones: [
            "A) Presencia de dolor localizado, eritema periciatricial, edema, calor local y salida de exudado purulento.",
            "B) Cicatriz plana y rosada sin alteraciones térmicas.",
            "C) Ausencia completa de sensibilidad táctil alrededor de los puntos.",
            "D) Desprendimiento espontáneo de las suturas sin inflamación."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los signos cardinales de infección en una herida quirúrgica incluyen eritema, calor, edema, dolor e induración o supuración purulenta."
    },
    {
        id: 74,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología, ¿qué mide la 'Sensibilidad' de una prueba diagnóstica?",
        opciones: [
            "A) La capacidad de la prueba para detectar correctamente a los individuos enfermos (verdaderos positivos).",
            "B) El porcentaje de personas sanas evaluadas correctamente.",
            "C) La resistencia de la muestra biológica a la temperatura ambiente.",
            "D) El margen de error estadístico en encuestas poblacionales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La sensibilidad mide la eficacia de una prueba para identificar a los verdaderos positivos que padecen la enfermedad."
    },
    {
        id: 75,
        area: "Enfermería Maternoinfantil",
        pregunta: "Ante un caso de hemorragia obstétrica en la que ha fallado el manejo médico farmacológico (oxitocina, metilergometrina), ¿qué intervención quirúrgica de control de daños y preservación uterina puede realizar el equipo médico donde enfermería asiste activamente?",
        opciones: [
            "A) Histerectomía obstétrica radical sin demora.",
            "B) Colocación de un balón intrauterino de taponamiento (como el balón de Bakri) o suturas compresivas uterinas (B-Lynch).",
            "C) Ligadura exclusiva de la arteria carótida.",
            "D) Traqueostomía de urgencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El taponamiento con balón intrauterino o las suturas compresivas son técnicas conservadoras de primera línea en hemorragia por atonía refractaria."
    },
    {
        id: 76,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la administración de los servicios de salud, ¿qué establece el concepto de 'Eficiencia' en la gestión de recursos?",
        opciones: [
            "A) Alcanzar los objetivos institucionales sin importar los costos operativos.",
            "B) Lograr los resultados máximos utilizando la menor cantidad posible de recursos disponibles (optimización de costos y tiempos).",
            "C) Duplicar la plantilla de personal en todos los turnos.",
            "D) Comprar insumos de marcas extranjeras costosas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La eficiencia evalúa la relación óptima entre los recursos empleados y los resultados obtenidos en la gestión de los servicios."
    },
    {
        id: 77,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de enfermería a un paciente con un tubo endotraqueal conectado a ventilación mecánica, ¿cuál es la técnica estricta recomendada para la aspiración de secreciones bronquiales?",
        opciones: [
            "A) Aspirar continuamente aplicando presión negativa mientras se introduce y retira la sonda.",
            "B) Preoxigenar al paciente con FiO2 al 100%, introducir la sonda sin aspirar y retirarla con movimientos rotatorios aplicando succión intermitente en un tiempo no mayor a 10-15 segundos.",
            "C) Instilar 20 ml de solución salina de forma rutinaria antes de cada aspiración.",
            "D) Omitir el uso de guantes estériles si el circuito es cerrado."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La aspiración abierta o cerrada requiere preoxigenación, evitar presiones excesivas y limitar el tiempo a máximo 15 segundos para prevenir hipoxia."
    },
    {
        id: 78,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la clasificación de los residuos peligrosos biológico-infecciosos (RPBI) en México según la NOM-087-SEMARNAT-SSA1-2002, ¿en qué recipiente deben depositarse las torundas empapadas con sangre fresca o secreciones líquidas abundantes?",
        opciones: [
            "A) Bolsa de plástico color rojo.",
            "B) Contenedor rígido punzocortante color rojo.",
            "C) Bolsa de plástico color amarillo.",
            "D) Contenedor de basura municipal común."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las torundas y gasas empapadas con sangre o fluidos corporales se clasifican como residuos no anatómicos y se depositan en bolsa roja."
    },
    {
        id: 79,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la valoración del desarrollo puberal y adolescente, ¿en qué consiste la escala de Tanner?",
        opciones: [
            "A) Una escala numérica para medir el dolor agudo postoperatorio.",
            "B) Una clasificación clínica de los estadios de desarrollo de los caracteres sexuales secundarios (vello púbico, mamas y genitales).",
            "C) Un test para valorar la depresión postparto.",
            "D) Una escala de peso para talla en desnutrición."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La escala de Tanner evalúa los estadios de maduración sexual secundaria durante la adolescencia tanto en hombres como en mujeres."
    },
    {
        id: 80,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En el marco de las Metas Internacionales para la Seguridad del Paciente, ¿cuál es el objetivo de la Meta dedicada a la 'Comunicación Efectiva'?",
        opciones: [
            "A) Reducir los errores telefónicos mediante el protocolo de escuchar, escribir, leer y confirmar órdenes verbales o telefónicas críticas.",
            "B) Enviar correos electrónicos masivos sobre días festivos.",
            "C) Prohibir el uso de teléfonos celulares en las estaciones de enfermería.",
            "D) Utilizar exclusivamente carteles informativos en las paredes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La comunicación efectiva previene errores en indicaciones verbales o telefónicas mediante la técnica de confirmación cruzada (leer y repetir)."
    },
    {
        id: 81,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Durante la atención de un paciente con un estado de shock séptico refractario a la reanimación con líquidos, ¿cuál es el fármaco vasopresor de primera línea recomendado por las guías internacionales (Surviving Sepsis Campaign)?",
        opciones: [
            "A) Noradrenalina (Norepinefrina).",
            "B) Atropina intravenosa.",
            "C) Furosemida en infusión continua.",
            "D) Insulina rápida en bolo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La noradrenalina es el vasopresor de elección en el shock séptico por su potente efecto vasoconstrictor alfa-1 con menor estimulación cronotrópica en comparación con otros."
    },
    {
        id: 82,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la evaluación del impacto de los programas de salud, ¿cómo se define la 'Tasa de Mortalidad Materna'?",
        opciones: [
            "A) Número de muertes maternas por complicaciones del embarazo, parto y puerperio por cada 100,000 nacidos vivos en un año determinado.",
            "B) Número total de defunciones de mujeres adultas por cada 1,000 habitantes.",
            "C) Porcentaje de muertes fetales tardías respecto al total de embarazos.",
            "D) Tasa anual de morbilidad por infecciones de transmisión sexual."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La razón o tasa de mortalidad materna mide las defunciones relacionadas con la gestación por cada 100,000 nacidos vivos, siendo un indicador clave de desarrollo social."
    },
    {
        id: 83,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación del crecimiento y desarrollo en el primer año de vida, ¿a qué edad promedio se duplica el peso al nacer en un lactante sano?",
        opciones: [
            "A) Al mes de vida.",
            "B) A los 5 o 6 meses de vida.",
            "C) Al cumplir los 12 meses exactos.",
            "D) A los 3 años de edad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El lactante duplica su peso de nacimiento alrededor de los 5 a 6 meses de edad y lo triplica al cumplir el primer año."
    },
    {
        id: 84,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En el diseño de la estructura organizacional de un hospital, ¿qué representa un 'Organigrama'?",
        opciones: [
            "A) La representación gráfica de la estructura formal de una organización, mostrando jerarquías, líneas de autoridad y relaciones funcionales.",
            "B) El presupuesto financiero anual asignado a la compra de medicamentos.",
            "C) El registro histórico de pacientes ingresados por urgencias.",
            "D) El manual detallado de procedimientos de enfermería quirúrgica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El organigrama es la herramienta gráfica que refleja la estructura jerárquica y los canales formales de comunicación y autoridad en una institución."
    },
    {
        id: 85,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con insuficiencia cardíaca descompensada que presenta disnea paroxística nocturna, ortopnea y estertores crepitantes bilaterales, ¿qué grupo farmacológico actúa como piedra angular para disminuir la congestión pulmonar rápidamente?",
        opciones: [
            "A) Diuréticos de asa (como la furosemida).",
            "B) Betabloqueantes en dosis altas de inicio.",
            "C) Anticoagulantes orales directos.",
            "D) Antibióticos de amplio espectro."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los diuréticos de asa reducen rápidamente la precarga y la congestión pulmonar al favorecer la excreción renal de líquidos y sodio."
    },
    {
        id: 86,
        area: "Salud Pública y Comunitaria",
        pregunta: "En los métodos de investigación epidemiológica, ¿cómo se define un 'Estudio de Cohortes'?",
        opciones: [
            "A) Un estudio retrospectivo basado exclusivamente en certificados de defunción.",
            "B) Un estudio epidemiológico observacional y longitudinal donde se compara un grupo expuesto a un factor de riesgo frente a un grupo no expuesto para evaluar la aparición de la enfermedad.",
            "C) Un análisis transversal de prevalencia en un solo momento.",
            "D) Una encuesta de opinión sobre servicios médicos comunitarios."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las cohortes son estudios longitudinales prospectivos o retrospectivos que parten de la exposición para medir la incidencia del evento o enfermedad."
    },
    {
        id: 87,
        area: "Enfermería Maternoinfantil",
        pregunta: "¿Cuál es el signo clínico clásico de la estenosis hipertrófica de píloro en el lactante durante las primeras semanas de vida?",
        opciones: [
            "A) Diarrea crónica con moco y sangre.",
            "B) Vómitos en proyectil no biliosos posteriores a las tomas de alimentación, acompañados de una masa palpable en epigastrio.",
            "C) Estreñimiento severo con megacolon congénito.",
            "D) Ictericia obstructiva persistente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La estenosis hipertrófica de píloro causa vómitos explosivos en proyectil sin bilis debido a la obstrucción gástrica mecánica por hipertrofia muscular."
    },
    {
        id: 88,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de la seguridad del paciente, ¿en qué consiste la técnica de entrega de guardia 'SBAR' (Situación, Antecedentes, Evaluación y Recomendación)?",
        opciones: [
            "A) Un formato contable para auditar facturas de farmacia.",
            "B) Un método estructurado de comunicación clínica estandarizada para transmitir información crítica sobre los pacientes entre profesionales de la salud.",
            "C) Una prueba de laboratorio para evaluar la función renal.",
            "D) Un sistema de archivos digitales para expedientes inactivos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "SBAR estandariza la transferencia de información clínica crítica reduciendo errores de comunicación durante los cambios de turno o traslados."
    },
    {
        id: 89,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Ante un paciente que ingresa a urgencias con intoxicación aguda por opiáceos, evidenciada por depresión respiratoria severa, estupor y miosis bilateral puntiforme, ¿cuál es el antídoto específico de administración urgente?",
        opciones: [
            "A) Naloxona.",
            "B) Flumazenil.",
            "C) N-acetilcisteína.",
            "D) Atropina."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La naloxona es el antagonista puro de los receptores opiáceos, revirtiendo de inmediato la depresión respiratoria y el coma narcótico."
    },
    {
        id: 90,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la promoción de la salud comunitaria, ¿qué establece la Carta de Ottawa de 1986 respecto al concepto de salud?",
        opciones: [
            "A) Que la salud es la ausencia exclusiva de dolencias infecciosas.",
            "B) Que la salud es un recurso para la vida diaria, no el objetivo de la vida, destacando el bienestar físico, mental y social.",
            "C) Que la salud depende única y exclusivamente de la genética individual.",
            "D) Que la atención médica hospitalaria es el único medio para alcanzar el bienestar."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Carta de Ottawa define la salud como un recurso positivo que enfatiza los recursos sociales y personales, además de las capacidades físicas."
    },
    {
        id: 91,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la atención del parto, ¿qué complicación obstétrica grave se sospecha cuando se observa la aparición súbita de cianosis severa, hipotensión arterial profunda, colapso cardiovascular y coagulopatía en la madre?",
        opciones: [
            "A) Embolia de líquido amniótico.",
            "B) Preeclampsia leve transitoria.",
            "C) Infección urinaria por enterococo.",
            "D) Amenaza de aborto diferido."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La embolia de líquido amniótico es una emergencia obstétrica catastrófica caracterizada por colapso circulatorio súbito, insuficiencia respiratoria y CID."
    },
    {
        id: 92,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la teoría administrativa y gestión del talento humano, ¿qué implica el proceso de 'Inducción de Personal' en una unidad hospitalaria?",
        opciones: [
            "A) Evaluar el desempeño anual mediante exámenes escritos rigurosos.",
            "B) Orientar y familiarizar al nuevo empleado de enfermería con la filosofía institucional, políticas, reglamentos, áreas físicas y funciones de su puesto.",
            "C) Asignar los turnos nocturnos más pesados al personal de recién ingreso.",
            "D) Despedir al personal que no cumpla con los estándares teóricos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La inducción integra al nuevo trabajador a la cultura organizacional, facilitando su adaptación y conocimiento de los procesos y normativas de la institución."
    },
    {
        id: 93,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con un episodio de hemorragia digestiva alta secundaria a úlcera péptica sangrante, ¿cuál es una manifestación clínica característica en las heces fecales?",
        opciones: [
            "A) Rectorragia de sangre roja brillante.",
            "B) Melena (heces negras, alquitranadas y de olor fétido intenso por la degradación de la sangre en el tracto digestivo alto).",
            "C) Esteatorrea abundante y espumosa.",
            "D) Heces acólicas blanquecinas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La melena es la eliminación de deposiciones negras y fétidas debido a la oxidación y digestión de la sangre procedente de vías digestivas altas."
    },
    {
        id: 94,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología analítica, ¿cómo se define el indicador de 'Riesgo Relativo' (RR)?",
        opciones: [
            "A) La razón entre el riesgo de enfermar en el grupo expuesto y el riesgo en el grupo no expuesto.",
            "B) El costo total de los tratamientos médicos entre la población total.",
            "C) El porcentaje de pacientes curados sin secuelas.",
            "D) La diferencia absoluta entre la natalidad y la mortalidad."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El riesgo relativo compara la incidencia de la enfermedad entre los expuestos frente a los no expuestos, midiendo la fuerza de asociación."
    },
    {
        id: 95,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la atención a una mujer en el puerperio mediato, ¿qué caracteriza la involución uterina normal esperada en los primeros días?",
        opciones: [
            "A) El útero aumenta de tamaño un centímetro diario hacia el abdomen.",
            "B) El fondo uterino desciende aproximadamente un centímetro (un través de dedo) por día hacia la pelvis menor hasta dejar de ser palpable a la abdominal.",
            "C) El útero se mantiene flotando en la cicatriz umbilical de forma permanente.",
            "D) El miometrio se atrofia por completo en 24 horas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La involución uterina postparto reduce el tamaño del útero a razón de un centímetro por día, descendiendo paulatinamente hacia la pelvis."
    },
    {
        id: 96,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la legislación sanitaria mexicana, ¿qué establece la Norma Oficial Mexicana NOM-022-SSA3-2012?",
        opciones: [
            "A) Las condiciones para la administración de terapia de infusión intravenosa con bases de seguridad estandarizadas.",
            "B) Los lineamientos obligatorios para la prevención de la obesidad infantil.",
            "C) La estructura arquitectónica de los laboratorios de anatomía patológica.",
            "D) El manejo higiénico de los servicios de alimentos hospitalarios."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NOM-022-SSA3-2012 instituye las condiciones normativas y de seguridad para la administración de la terapia de infusión intravenosa en México."
    },
    {
        id: 97,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención a un paciente con ventilación mecánica, ¿qué medida de enfermería es fundamental y de primer orden para prevenir la neumonía asociada a la ventilación mecánica (NAV)?",
        opciones: [
            "A) Mantener la cabecera de la cama elevada entre 30° y 45° de forma continua.",
            "B) Cambiar el tubo endotraqueal cada 24 horas de rutina.",
            "C) Administrar antibióticos profilácticos intravenosos a todos los pacientes entubados.",
            "D) Mantener al paciente estrictamente en decúbito supino plano."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Elevar la cabecera entre 30 y 45 grados previene la aspiración de secreciones gástricas y orofaríngeas, reduciendo la incidencia de NAV."
    },
    {
        id: 98,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la administración en salud, ¿qué comprende el análisis FODA (SWOT) aplicado a una unidad médica comunitaria?",
        opciones: [
            "A) Evaluar las Fortalezas, Oportunidades, Debilidades y Amenazas tanto internas como externas de la organización.",
            "B) Calcular los flujos de efectivo netos trimestrales.",
            "C) Medir la estatura y peso de los trabajadores.",
            "D) Clasificar los residuos biológicos peligrosos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El FODA es una matriz estratégica que analiza factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) de una gestión."
    },
    {
        id: 99,
        area: "Enfermería Maternoinfantil",
        pregunta: "En el recién nacido prematuro, ¿cuál es el mecanismo fisiopatológico principal que predispone al desarrollo del síndrome de dificultad respiratoria (enfermedad de membrana hialina)?",
        opciones: [
            "A) Infección bacteriana por estreptococo beta-hemolítico.",
            "B) Déficit cuantitativo y cualitativo de surfactante pulmonar producido por los neumocitos tipo II inmaduros.",
            "C) Obstrucción de las fosas nasales por secreciones espesas.",
            "D) Hernia diafragmática congénita bilateral."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La inmadurez pulmonar fetal impide la síntesis adecuada de surfactante, provocando colapso alveolar generalizado y dificultad respiratoria severa."
    },
    {
        id: 100,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la ética profesional de enfermería, ¿cómo se define el principio bioético de 'Autonomía'?",
        opciones: [
            "A) La obligación de no dañar al paciente bajo ninguna circunstancia.",
            "B) El respeto a la capacidad de las personas para tomar decisiones informadas sobre su propia salud y cuerpo sin coacción.",
            "C) La distribución equitativa de los recursos sanitarios.",
            "D) El deber de hacer el bien y buscar el beneficio del paciente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El principio de autonomía reconoce el derecho del paciente a decidir de forma informada y libre sobre los tratamientos médicos propuestos."
    },
    {
        id: 101,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "Ante un paciente politraumatizado que presenta hipotensión severa, frialdad cutánea, alteración del estado de alerta y ausencia de ruidos respiratorios en un hemitórax con desviación traqueal, ¿qué procedimiento de urgencia vital debe realizar el equipo médico con asistencia de enfermería?",
        opciones: [
            "A) Descompresión inmediata con aguja en el segundo espacio intercostal línea medioclavicular (neumotórax a tensión).",
            "B) Radiografía de tórax portátil de control en cama.",
            "C) Colocación de un vendaje elástico compresivo en abdomen.",
            "D) Administración de solución glucosada al 50%."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El neumotórax a tensión compromete el retorno venoso y causa colapso circulatorio; requiere descompresión urgente con aguja antes de insertar el sello pleural."
    },
    {
        id: 102,
        area: "Salud Pública y Comunitaria",
        pregunta: "En los sistemas de salud pública, ¿qué representa la 'Prevención Secundaria'?",
        opciones: [
            "A) El diagnóstico precoz y tratamiento oportuno de una enfermedad en fases tempranas para detener su progresión.",
            "B) La vacunación masiva en menores de cinco años.",
            "C) La rehabilitación física y reinserción laboral de pacientes con secuelas.",
            "D) La construcción de nuevos hospitales de alta especialidad."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prevención secundaria se enfoca en el tamizaje, diagnóstico temprano y tratamiento oportuno para limitar el avance de la patología."
    },
    {
        id: 103,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la valoración del recién nacido, ¿qué indica la presencia de una sola arteria umbilical en el cordón umbilical en lugar de las dos habituales?",
        opciones: [
            "A) Un hallazgo completamente normal sin asociación patológica.",
            "B) La necesidad de investigar la presencia de posibles malformaciones congénitas renales, cardiovasculares o cromosómicas asociadas.",
            "C) Que el lactante sufrirá desnutrición crónica inevitable.",
            "D) Un error en el registro de enfermería."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La arteria umbilical única (AUU) se asocia frecuentemente con anomalías congénitas renales, cardíacas o gastrointestinales que ameritan estudio."
    },
    {
        id: 104,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la legislación y normatividad mexicana, ¿cuál es el objetivo de la Ley General de Salud respecto al derecho a la protección de la salud?",
        opciones: [
            "A) Establecer las bases y modalidades para el acceso a los servicios de salud y la concurrencia de la federación y entidades federativas.",
            "B) Fijar los precios comerciales de los medicamentos de patente en farmacias privadas.",
            "C) Controlar los salarios de los médicos especialistas.",
            "D) Sancionar a los pacientes que no acudan a sus citas médicas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Ley General de Salud reglamenta el derecho constitucional a la protección de la salud, definiendo el Sistema Nacional de Salud y sus competencias."
    },
    {
        id: 105,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con insuficiencia renal crónica avanzada, ¿cuál es la alteración hidroelectrolítica y ácido-base clásica que se manifiesta habitualmente?",
        opciones: [
            "A) Alcalosis metabólica con hipopotasemia.",
            "B) Acidosis metabólica con hiperpotasemia e hiperfosfatemia.",
            "C) Hiponatremia con hipercalcemia severa.",
            "D) Deshidratación hipotónica sin alteraciones ácidas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El riñón insuficiente no puede excretar hidrogeniones ni potasio ni fosfatos, provocando acidosis metabólica, hiperpotasemia e hiperfosfatemia."
    },
    {
        id: 106,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología, ¿cómo se define una 'Pandemia'?",
        opciones: [
            "A) La propagación mundial de una nueva enfermedad que afecta a muchos países y continentes simultáneamente.",
            "B) Un brote localizado de una enfermedad tropical en una zona rural.",
            "C) La presencia constante de una patología en una comunidad cerrada.",
            "D) Una intoxicación alimentaria en un comedor escolar."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una pandemia ocurre cuando una nueva epidemia infecciosa se disemina por múltiples países y continentes traspasando fronteras de forma masiva."
    },
    {
        id: 107,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la evaluación del desarrollo psicomotor de un lactante a los 9 meses de edad, ¿qué habilidad motora gruesa esperada debe vigilar el personal de enfermería?",
        opciones: [
            "A) Caminar de forma independiente sin apoyo.",
            "B) Sedestación (sentarse) sin apoyo de manera firme y estable.",
            "C) Reflejo de succión activo.",
            "D) Sonrisa social espontánea."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Alrededor de los 8 a 9 meses de edad, el lactante logra la sedestación independiente y estable, preparándose para el gateo."
    },
    {
        id: 108,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la administración hospitalaria, ¿qué representa el principio de 'Delegación de Funciones' en enfermería?",
        opciones: [
            "A) Traspasar toda la responsabilidad legal de un error al personal auxiliar sin supervisión.",
            "B) Transferir la autoridad y la ejecución de tareas específicas a un colaborador competente, conservando el líder la responsabilidad última de supervisión.",
            "C) Omitir las tareas asistenciales para realizar solo labores de oficina.",
            "D) Cambiar de turno de manera arbitraria."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Delegar implica transferir la ejecución de tareas a personal capacitado manteniendo la supervisión y la responsabilidad directiva."
    },
    {
        id: 109,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En el manejo del paciente quemado, ¿qué evaluación clínica horaria es el indicador más confiable y directo de una adecuada reanimación hídrica sistémica?",
        opciones: [
            "A) El gasto urinario medido mediante sonda Foley (0.5 a 1 ml/kg/h en adultos).",
            "B) La frecuencia respiratoria por minuto.",
            "C) El color de la piel en las zonas no quemadas.",
            "D) La presencia de apetito y tolerancia oral."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El gasto urinario horario es el parámetro de reanimación más fidedigno para constatar la correcta perfusión tisular y renal en el paciente quemado."
    },
    {
        id: 110,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la atención primaria, ¿qué comprende el concepto de 'Prevención Terciaria'?",
        opciones: [
            "A) Medidas orientadas a minimizar las secuelas, rehabilitar al paciente y mejorar su calidad de vida tras una enfermedad crónica o evento agudo.",
            "B) La aplicación de vacunas preventivas en la infancia.",
            "C) El tamizaje masivo para detectar hipertensión oculta.",
            "D) La desinfección de tanques de almacenamiento de agua potable."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prevención terciaria aborda la rehabilitación física, psicológica y social para limitar el grado de discapacidad y secuelas crónicas."
    },
    {
        id: 111,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la atención del parto eutócico, ¿cómo se define el periodo de alumbramiento?",
        opciones: [
            "A) El tiempo que dura la dilatación completa del cuello uterino.",
            "B) El lapso comprendido desde el nacimiento del recién nacido hasta la expulsión completa de la placenta y las membranas ovulares.",
            "C) Las primeras dos horas después de expulsada la placenta.",
            "D) El inicio de las contracciones uterinas dolorosas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El tercer periodo del trabajo de parto (alumbramiento) abarca desde la salida del bebé hasta la expulsión y revisión completa de la placenta."
    },
    {
        id: 112,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la bioética clínica, ¿qué establece el principio de 'Beneficencia'?",
        opciones: [
            "A) La obligación moral de actuar en beneficio de los demás, procurando su bienestar y mitigando el sufrimiento o el daño.",
            "B) El derecho del paciente a rechazar cualquier tratamiento médico.",
            "C) La distribución igualitaria de los costos hospitalarios.",
            "D) La confidencialidad absoluta de los expedientes clínicos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio de beneficencia obliga al profesional sanitario a hacer el bien y procurar activamente la salud y recuperación del paciente."
    },
    {
        id: 113,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En un paciente con insuficiencia respiratoria aguda conectado a ventilación mecánica, ¿qué complicación pulmonar aguda se asocia al uso de volúmenes corrientes excesivos (volutrauma)?",
        opciones: [
            "A) Edema pulmonar lesional por sobredistensión alveolar y liberación de mediadores inflamatorios (biotrauma).",
            "B) Estenosis esofágica distal.",
            "C) Hipertensión arterial sistémica benigna.",
            "D) Aumento inmediato de la hemoglobina sérica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El volutrauma es el daño pulmonar inducido por el ventilador debido a la sobredistensión alveolar excesiva (volúmenes altos), liberando citocinas inflamatorias."
    },
    {
        id: 114,
        area: "Salud Pública y Comunitaria",
        pregunta: "En la estrategia de Atención Primaria a la Salud (APS), ¿cuál es uno de sus pilares fundamentales según la Declaración de Alma-Ata?",
        opciones: [
            "A) La participación comunitaria y la intersectorialidad como ejes para alcanzar la salud para todos.",
            "B) La privatización total de los servicios médicos asistenciales.",
            "C) La centralización absoluta de la alta especialidad en grandes metrópolis.",
            "D) La eliminación de los centros de salud rurales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Alma-Ata estableció que la APS requiere participación comunitaria activa, accesibilidad universal, tecnología apropiada e intersectorialidad."
    },
    {
        id: 115,
        area: "Enfermería Maternoinfantil",
        pregunta: "Durante la atención al recién nacido en la sala de partos, ¿cuál es el procedimiento profiláctico inmediato recomendado para prevenir la enfermedad hemorrágica del recién nacido?",
        opciones: [
            "A) Administración de una dosis única intramuscular de Vitamina K (fitomenadiona).",
            "B) Aplicación tópica de colirio de nitrato de plata.",
            "C) Vacunación intradérmica contra la hepatitis B.",
            "D) Administración de hierro oral en gotas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La profilaxis con Vitamina K intramuscular previene la enfermedad hemorrágica del recién nacido debido a la deficiencia transitoria de factores de coagulación dependientes."
    },
    {
        id: 116,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la gestión de calidad en enfermería, ¿qué mide específicamente el indicador de 'Prevención de Infecciones por Sonda Vesical' (vigilancia de la instalación y manejo de catéter urinario)?",
        opciones: [
            "A) El apego del personal a los criterios normados para la inserción, mantenimiento y retiro aséptico de la sonda vesical para prevenir bacteriuria y sepsis.",
            "B) El costo de compra de las sondas de látex frente a las de silicona.",
            "C) La cantidad de orina recolectada en turnos nocturnos.",
            "D) El peso corporal de los pacientes encamados."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Este indicador evalúa la adherencia a los protocolos de prevención para evitar infecciones asociadas a la atención de salud por cateterismo urinario."
    },
    {
        id: 117,
        area: "Enfermería Medicoquirúrgica",
        pregunta: "En la atención de un paciente con infarto cerebral agudo candidato a terapia de reperfusión con alteplasa (rt-PA intravenosa), ¿cuál es la ventana terapéutica máxima recomendada desde el inicio de los síntomas para su administración segura?",
        opciones: [
            "A) Hasta las 4.5 horas posteriores al inicio de los síntomas.",
            "B) Exactamente 24 horas después del evento.",
            "C) Únicamente en los primeros 15 minutos de llegada a urgencias sin importar el tiempo de evolución.",
            "D) Hasta 72 horas tras el evento isquémico."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La ventana terapéutica intravenosa aprobada para la administración de rt-PA en el infarto cerebral isquémico agudo es de hasta 4.5 horas."
    },
    {
        id: 118,
        area: "Salud Pública y Comunitaria",
        pregunta: "En epidemiología, ¿cómo se define el concepto de 'Tasa de Letalidad' de una enfermedad?",
        opciones: [
            "A) La proporción de casos diagnosticados de una enfermedad específica que fallecen a causa de la misma en un periodo determinado.",
            "B) El número total de muertes en la población general por cada mil habitantes.",
            "C) La velocidad con la que se contagia un virus respiratorio.",
            "D) El porcentaje de pacientes asintomáticos curados."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La letalidad mide la gravedad de una enfermedad calculando el porcentaje de personas enfermas que mueren a causa de la misma."
    },
    {
        id: 119,
        area: "Enfermería Maternoinfantil",
        pregunta: "En la valoración del recién nacido, ¿qué características físicas externas evalúa el Test de Ballard modificado para determinar la edad gestacional?",
        opciones: [
            "A) Madurez neuromuscular y madurez física externa (pliegues plantares, lanugo, textura de piel, cartílago auricular, genitales).",
            "B) Exclusivamente el peso y la estatura al nacer.",
            "C) La frecuencia cardíaca fetal previa al parto.",
            "D) La agudeza visual y auditiva en la primera hora."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El test de Ballard valora criterios neurológicos y físicos externos para estimar de forma precisa la edad gestacional del neonato."
    },
    {
        id: 120,
        area: "Gestión y Liderazgo en Enfermería",
        pregunta: "En la bioética clínica, ¿qué establece el principio de 'No Maleficencia'?",
        opciones: [
            "A) La obligación ética fundamental de no infligir daño intencionalmente al paciente ('primum non nocere').",
            "B) El deber de cumplir con los horarios de descanso del personal.",
            "C) La obligación de cobrar tarifas justas por los servicios prestados.",
            "D) El derecho del hospital a suspender tratamientos costosos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio de no maleficencia impone el deber primordial de evitar causar daño físico, psicológico o moral al paciente durante su atención."
    }
];