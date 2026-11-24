const bancoPreguntas = [
    {
        "id": 1,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Cuál es la técnica de investigación social que permite obtener información cualitativa a profundidad mediante la interacción directa y flexible con informantes clave?",
        "opciones": [
            "A) Entrevista semiestructurada",
            "B) Encuesta estructurada",
            "C) Análisis de contenido",
            "D) Observación no participante"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La entrevista semiestructurada ofrece flexibilidad a través de una guía de temas, permitiendo profundizar en percepciones, significados y contextos de los informantes clave."
    },
    {
        "id": 2,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "En el proceso de diagnóstico social, ¿qué elemento representa la discrepancia entre la situación actual insatisfactoria y la situación deseada o normativa?",
        "opciones": [
            "A) La estrategia de intervención",
            "B) El recurso social",
            "C) El pronóstico",
            "D) La necesidad social"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La necesidad social se define metodológicamente como la brecha o discrepancia entre el estado actual de un grupo y el estado óptimo o deseable."
    },
    {
        "id": 3,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Qué herramienta metodológica se utiliza para representar gráficamente las relaciones de poder, afinidad y conflicto entre los actores sociales de una comunidad?",
        "opciones": [
            "A) Sociograma",
            "B) Matriz de marco lógico",
            "C) Arbol de problemas",
            "D) Cronograma de actividades"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El sociograma es una técnica sociométricas que mapea las relaciones interpersonales y la dinámica de poder y cohesión dentro de un grupo o comunidad."
    },
    {
        "id": 4,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "Al realizar un diagnóstico participativo, ¿cuál es la principal ventaja de utilizar la técnica de 'Árbol de Problemas'?",
        "opciones": [
            "A) Cuantificar con exactitud la población en pobreza extrema",
            "B) Jerarquizar los salarios del personal institucional",
            "C) Calcular el presupuesto financiero del proyecto",
            "D) Visualizar la relación causa-efecto de la problemática central"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El árbol de problemas permite descomponer una situación negativa en sus causas (raíces) y efectos (hojas), facilitando la comprensión sistémica del problema."
    },
    {
        "id": 5,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Cómo se denomina al indicador que mide los cambios logrados en las condiciones de vida de la población tras la intervención social?",
        "opciones": [
            "A) Indicador de impacto",
            "B) Indicador de insumo",
            "C) Indicador de cobertura",
            "D) Indicador de proceso"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los indicadores de impacto miden los cambios a mediano y largo plazo generados por el proyecto en la población objetivo, reflejando la transformación social."
    },
    {
        "id": 6,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Cuál es la función principal de la triangulación metodológica en la investigación diagnóstica en Trabajo Social?",
        "opciones": [
            "A) Reducir los costos operativos de la investigación de campo",
            "B) Sustituir la participación de la comunidad en el análisis",
            "C) Contrastar diversas fuentes, teorías y métodos para validar los hallazgos",
            "D) Acelerar la redacción del informe final"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La triangulación incrementa la validez y confiabilidad de los datos al cruzar múltiples fuentes, investigadores, teorías o métodos de recolección."
    },
    {
        "id": 7,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "En el análisis demográfico para el diagnóstico, ¿qué tasa indica el número promedio de hijos que tendría una mujer al final de su vida fértil?",
        "opciones": [
            "A) Tasa bruta de natalidad",
            "B) Esperanza de vida al nacer",
            "C) Tasa global de fecundidad",
            "D) Tasa de mortalidad infantil"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La tasa global de fecundidad (TGF) mide la fecundidad de una cohorte hipotética de mujeres y es clave para entender la dinámica poblacional."
    },
    {
        "id": 8,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Qué técnica de recolección de datos requiere la inmersión del trabajador social en la vida cotidiana de la comunidad durante un periodo prolongado, registrando prácticas en un diario de campo?",
        "opciones": [
            "A) Grupo focal",
            "B) Observación participante",
            "C) Entrevista focalizada",
            "D) Encuesta por muestreo"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La observación participante implica la inserción del investigador en el grupo social para comprender desde adentro sus prácticas, códigos y cotidianidad."
    },
    {
        "id": 9,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "¿Qué tipo de muestreo se emplea cuando la población es de difícil acceso (p. ej., personas en situación de calle o migrantes irregulares) y se aprovechan las redes de los propios informantes?",
        "opciones": [
            "A) Muestreo por cuotas",
            "B) Muestreo estratificado",
            "C) Muestreo por bola de nieve",
            "D) Muestreo aleatorio simple"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El muestreo por bola de nieve (snowball) es una técnica no probabilística útil para poblaciones ocultas o de difícil acceso, donde cada sujeto remite a nuevos participantes."
    },
    {
        "id": 10,
        "area": "Diagnóstico Social y Análisis de Necesidades",
        "pregunta": "En el marco del diagnóstico social, ¿qué se entiende por 'demanda social'?",
        "opciones": [
            "A) La expresión subjetiva de carencias manifestada por la población",
            "B) La opinión de los expertos académicos",
            "C) El presupuesto asignado por el Estado",
            "D) El conjunto de leyes y reglamentos institucionales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La demanda social es la manifestación explícita o petición que hace la población sobre sus necesidades y carencias sentidas hacia los servicios o instituciones."
    },
    {
        "id": 11,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "¿Cuál es la herramienta de gestión que vincula de manera lógica los fines y medios de un proyecto, especificando insumos, actividades, productos, resultados e impactos?",
        "opciones": [
            "A) Gráfico de Gantt",
            "B) Diagrama de Ishikawa",
            "C) Matriz de Marco Lógico",
            "D) Análisis FODA"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La Matriz de Marco Lógico es una herramienta de planificación que resume el diseño de proyectos mediante una jerarquía de objetivos e indicadores verificables."
    },
    {
        "id": 12,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "En la Matriz de Marco Lógico, ¿cómo se denominan los bienes o servicios específicos que el proyecto debe producir directamente con la ejecución de sus actividades?",
        "opciones": [
            "A) Componentes",
            "B) Actividades",
            "C) Propósito",
            "D) Fin"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los componentes son los productos tangibles (bienes y servicios) que genera el proyecto bajo el control directo del equipo ejecutor."
    },
    {
        "id": 13,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "¿Qué instrumento de planificación muestra la calendarización de las actividades a lo largo del tiempo mediante barras horizontales?",
        "opciones": [
            "A) Organigrama",
            "B) Sociograma",
            "C) Diagrama de flujo",
            "D) Diagrama de Gantt"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El diagrama de Gantt es una herramienta visual clásica para la planeación y seguimiento temporal de las actividades de un proyecto social."
    },
    {
        "id": 14,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "Dentro de la formulación de proyectos, ¿qué analiza la viabilidad financiera y económica de la intervención?",
        "opciones": [
            "A) Análisis de costos y beneficios",
            "B) Diagnóstico participativo",
            "C) Estudio de mercado",
            "D) Estudio técnico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El análisis de costos y beneficios (o de costo-eficiencia) evalúa si los recursos financieros invertidos justifican los resultados y el impacto social esperado."
    },
    {
        "id": 15,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "¿Qué tipo de evaluación de proyectos se realiza mientras el programa se está ejecutando para introducir ajustes correctivos oportunos?",
        "opciones": [
            "A) Evaluación ex ante",
            "B) Evaluación de proceso o concurrente",
            "C) Evaluación de diseño",
            "D) Evaluación de impacto ex post"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La evaluación de proceso o concurrente (formativa) se efectúa durante la ejecución para identificar desviaciones y mejorar la gestión en tiempo real."
    },
    {
        "id": 16,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "En el análisis FODA, ¿cuáles elementos corresponden al ámbito interno de la organización o institución ejecutora?",
        "opciones": [
            "A) Fortalezas y Debilidades",
            "B) Fortalezas y Amenazas",
            "C) Debilidades y Oportunidades",
            "D) Oportunidades y Amenazas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las fortalezas y debilidades son factores internos controlables por la institución, mientras que oportunidades y amenazas pertenecen al entorno externo."
    },
    {
        "id": 17,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "¿Cuál es el propósito del estudio técnico en la formulación de un proyecto social?",
        "opciones": [
            "A) Determinar la aceptación política del programa",
            "B) Analizar las características psicológicas de los usuarios",
            "C) Calcular el marco jurídico internacional",
            "D) Definir la localización, tamaño, procesos e insumos requeridos"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El estudio técnico analiza la ingeniería del proyecto: dónde se ubicará, qué tamaño tendrá, qué tecnología e insumos se necesitan para operar eficazmente."
    },
    {
        "id": 18,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "En la gestión de proyectos sociales, ¿qué significa la sostenibilidad financiera?",
        "opciones": [
            "A) La capacidad del proyecto de generar o asegurar recursos estables para perdurar tras finalizar el financiamiento inicial",
            "B) La eliminación de la gratuidad en todos los servicios públicos",
            "C) La reducción salarial del personal operativo",
            "D) El uso exclusivo de fondos internacionales no reembolsables"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La sostenibilidad implica que el proyecto pueda mantenerse operativo y seguir prestando servicios a la comunidad una vez concluida la subvención o apoyo original."
    },
    {
        "id": 19,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "¿Qué enfoque de planificación prioriza la participación activa de los grupos vulnerables en la toma de decisiones y el diseño de las soluciones?",
        "opciones": [
            "A) Planificación normativa centralizada",
            "B) Planificación estratégica participativa",
            "C) Planificación tecnocrática vertical",
            "D) Planificación financiera estricta"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La planificación estratégica participativa democratiza el proceso, integrando las voces y saberes de los actores locales en el diseño y rumbo del proyecto."
    },
    {
        "id": 20,
        "area": "Planeación y Gestión de Proyectos Sociales",
        "pregunta": "En un proyecto social, ¿qué representa el 'Fin' dentro de la jerarquía de la Matriz de Marco Lógico?",
        "opciones": [
            "A) La suma de todas las actividades operativas",
            "B) El objetivo de nivel superior al cual el proyecto contribuirá significativamente",
            "C) El número de talleres impartidos",
            "D) El presupuesto total ejercido"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El Fin es el objetivo último de desarrollo o impacto al cual el proyecto contribuye en el mediano/largo plazo, junto con otras intervenciones."
    },
    {
        "id": 21,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "En la metodología de Trabajo Social de Casos, ¿cómo se denomina la fase inicial de acogida, escucha activa y clarificación de la demanda del usuario?",
        "opciones": [
            "A) Ejecución del tratamiento",
            "B) Evaluación final",
            "C) Recepción y demanda",
            "D) Estudio social"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La fase de recepción y demanda comprende el primer contacto, la acogida y la decodificación de la solicitud o problema que presenta el usuario."
    },
    {
        "id": 22,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "¿Cuál es el instrumento clásico en Trabajo Social individualizado que registra la composición familiar, las relaciones y antecedentes cronológicos de tres generaciones?",
        "opciones": [
            "A) Genograma",
            "B) Historia clínica",
            "C) Ecomapa",
            "D) Cuestionario socioeconómico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El genograma es un formato de árbol genealógico que detalla la estructura familiar, enfermedades, eventos críticos y relaciones intergeneracionales."
    },
    {
        "id": 23,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "¿Qué herramienta complementa al genograma al representar las conexiones e interfaces de la familia con los sistemas externos (escuela, salud, trabajo, religión)?",
        "opciones": [
            "A) Sociograma",
            "B) Cronograma",
            "C) Organigrama",
            "D) Ecomapa"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El ecomapa grafica las relaciones de la familia con su entorno socio-comunitario, identificando fuentes de apoyo y de estrés o conflicto."
    },
    {
        "id": 24,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "Desde la perspectiva sistémica en intervención familiar, ¿qué se entiende por 'homeostasis'?",
        "opciones": [
            "A) La tendencia del sistema familiar a mantener el equilibrio y la resistencia al cambio",
            "B) La ruptura violenta de los vínculos afectivos",
            "C) El desarrollo económico de la familia",
            "D) La incapacidad patológica de comunicarse"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La homeostasis es el mecanismo autorregulador del sistema familiar que busca mantener su estabilidad frente a perturbaciones externas o internas."
    },
    {
        "id": 25,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "¿Cuál es el objetivo principal del Trabajo Social de Grupos según la tradición metodológica de Callowhill y Newstetter?",
        "opciones": [
            "A) Desarrollar la socialización y el crecimiento personal a través de la experiencia grupal",
            "B) Realizar investigación estadística masiva",
            "C) Imponer normas disciplinarias de conducta",
            "D) Reemplazar la atención individual en hospitales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El trabajo social de grupos busca promover el desarrollo personal y la integración social de sus miembros aprovechando las dinámicas e interacciones del grupo."
    },
    {
        "id": 26,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "En la intervención con familias multiproblemáticas, ¿cuál es una característica central que debe considerar el trabajador social?",
        "opciones": [
            "A) La acumulación crónica de disfunciones, exclusión y crisis simultáneas",
            "B) La presencia de una sola carencia económica temporal",
            "C) La ausencia total de vínculos afectivos entre miembros",
            "D) La resolución rápida de conflictos mediante amonestaciones"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las familias multiproblemáticas experimentan múltiples carencias y crisis superpuestas (salud, vivienda, adicciones, violencia), requiriendo un abordaje integral e interinstitucional."
    },
    {
        "id": 27,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "¿Qué técnica de intervención individual busca fortalecer las capacidades del sujeto para resolver problemas cotidianos mediante el apoyo emocional y la clarificación cognitiva?",
        "opciones": [
            "A) Psicoanálisis profundo",
            "B) Interrogatorio judicial",
            "C) Counseling u orientación psicosocial",
            "D) Hospitalización psiquiátrica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El counseling (orientación o apoyo psicosocial) en trabajo social se centra en ayudar al sujeto a movilizar sus recursos internos y externos ante situaciones de crisis."
    },
    {
        "id": 28,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "En el proceso metodológico de caso, ¿en qué consiste la fase de 'Diagnóstico Social' (según Mary Richmond)?",
        "opciones": [
            "A) En la aplicación de un test de inteligencia estandarizado",
            "B) En la definición y comprensión de la situación problema del individuo y su entorno",
            "C) En la clausura definitiva del expediente",
            "D) En entregar un apoyo monetario directo sin indagar"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Mary Richmond definió el diagnóstico social como el intento de llegar a una definición exacta de la situación y personalidad de un ser humano en relación con su medio social."
    },
    {
        "id": 29,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "¿Qué tipo de grupo se forma con un propósito específico de autoayuda o apoyo mutuo ante una problemática compartida (p. ej., familiares de enfermos de Alzheimer)?",
        "opciones": [
            "A) Grupo recreativo deportivo",
            "B) Grupo terapéutico o de apoyo mutuo",
            "C) Grupo escolar formal",
            "D) Grupo de coacción laboral"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los grupos de apoyo mutuo reúnen a personas que comparten experiencias similares para brindarse soporte emocional, compartir estrategias de afrontamiento y reducir el aislamiento."
    },
    {
        "id": 30,
        "area": "Intervención en Casos, Familias y Grupos (Caso Social Individual)",
        "pregunta": "Durante la evolución de un grupo, ¿qué etapa se caracteriza frecuentemente por la emergencia de tensiones, resistencia a la autoridad del coordinador y conflictos interpersonales?",
        "opciones": [
            "A) Etapa de desempeño óptimo",
            "B) Etapa de disolución",
            "C) Etapa de formación o inclusión",
            "D) Etapa de tormenta o conflicto"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En la fase de 'tormenta' (storming) del desarrollo grupal, los miembros cuestionan roles y normas, generando fricciones que deben ser canalizadas constructivamente."
    },
    {
        "id": 31,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Qué autor es considerado pionero en sistematizar la metodología de Organización y Desarrollo de la Comunidad, vinculándola a procesos de concientización y cambio social en América Latina?",
        "opciones": [
            "A) Mary Richmond",
            "B) Gordon Hamilton",
            "C) Ezequiel Ander-Egg",
            "D) Florence Hollis"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Ezequiel Ander-Egg es una referencia fundamental en la conceptualización de la animación sociocultural, la planificación y el desarrollo de la comunidad en Latinoamérica."
    },
    {
        "id": 32,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Cuál es el objetivo principal del Desarrollo Comunitario?",
        "opciones": [
            "A) Sustituir las funciones del gobierno local",
            "B) Incrementar la recaudación fiscal municipal",
            "C) Imponer soluciones técnicas sin consultar a los habitantes",
            "D) Promover la autogestión, la participación activa y el empoderamiento de la comunidad para mejorar sus condiciones de vida"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El desarrollo comunitario busca la transformación social a través de la participación activa, el fortalecimiento del tejido social y la autogestión de sus propios recursos."
    },
    {
        "id": 33,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "En el proceso de organización comunitaria, ¿qué significa el concepto de 'empoderamiento' (empowerment)?",
        "opciones": [
            "A) La dependencia económica asistencialista del Estado",
            "B) El aumento del control que tienen las personas y comunidades sobre sus propias vidas y destinos",
            "C) La privatización de los servicios públicos comunitarios",
            "D) La centralización absoluta del poder en el líder político"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El empoderamiento implica que los sectores excluidos adquieran poder, conciencia crítica y capacidad de incidir en las decisiones que afectan su bienestar."
    },
    {
        "id": 34,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Qué técnica participativa de investigación y acción permite que la comunidad analice su propia realidad y genere conocimientos para la transformación social (IAP)?",
        "opciones": [
            "A) Auditoría financiera externa",
            "B) Censos poblacionales obligatorios",
            "C) Investigación Acción Participativa",
            "D) Investigación empírica positivista aislada"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La Investigación Acción Participativa (IAP), impulsada por Orlando Fals Borda, une la reflexión y la acción popular para transformar la realidad social."
    },
    {
        "id": 35,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "En la intervención comunitaria, ¿qué rol desempeña primordialmente el trabajador social facilitador?",
        "opciones": [
            "A) Catalizador, mediador y promotor de la organización autónoma",
            "B) Dictador de órdenes y soluciones definitivas",
            "C) Supervisor punitivo de conductas",
            "D) Gestor de dádivas clientelares"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El trabajador social comunitario actúa como facilitador y catalizador, estimulando la reflexión crítica y apoyando la organización sin sustituir el protagonismo popular."
    },
    {
        "id": 36,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Qué se entiende por 'tejido social' en el contexto de la intervención comunitaria?",
        "opciones": [
            "A) La infraestructura pavimentada de calles y avenidas",
            "B) El conjunto de industrias textiles de la región",
            "C) La red de relaciones de solidaridad, confianza y cooperación entre los miembros de una sociedad",
            "D) El registro catastral de propiedades privadas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El tejido social alude al entramado de vínculos relacionales, capital social, confianza y reciprocidad que sostiene la cohesión y convivencia comunitaria."
    },
    {
        "id": 37,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "En la gestión comunitaria, ¿qué es la 'animación sociocultural'?",
        "opciones": [
            "A) Un conjunto de técnicas orientadas a estimular la participación, la creatividad y la expresión cultural para el cambio social",
            "B) La organización de fiestas patronales con fines comerciales",
            "C) La terapia psicológica individualizada",
            "D) La transmisión unidireccional de contenidos educativos escolares"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La animación sociocultural es una metodología de intervención que dinamiza la vida comunitaria, fomentando la reflexión crítica, la cultura y la participación activa."
    },
    {
        "id": 38,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Cuál es un riesgo metodológico al intervenir en comunidades sin un proceso previo de diagnóstico participativo?",
        "opciones": [
            "A) Generar resistencia, imponer soluciones ajenas a las necesidades reales y fomentar el asistencialismo",
            "B) Lograr la autogestión total en 24 horas",
            "C) Acelerar excesivamente la independencia económica",
            "D) Cumplir con los indicadores internacionales de desarrollo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La intervención sin diagnóstico participativo suele caer en el paternalismo o la imposición de proyectos descontextualizados que fracasan por no responder a las prioridades locales."
    },
    {
        "id": 39,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "En el marco del desarrollo comunitario, ¿cómo se define el 'capital social'?",
        "opciones": [
            "A) El PIB per cápita de la municipalidad",
            "B) El dinero acumulado en cuentas bancarias comunitarias",
            "C) Las maquinarias agrícolas de uso comunal",
            "D) Las redes, normas y confianza social que facilitan la acción colectiva"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El capital social se refiere al valor de las redes sociales, la reciprocidad y la confianza cívica que permiten a las comunidades cooperar para alcanzar metas comunes."
    },
    {
        "id": 40,
        "area": "Desarrollo Comunitario y Organización Social",
        "pregunta": "¿Qué fase sigue inmediatamente a la ejecución de un programa de desarrollo comunitario?",
        "opciones": [
            "A) El despido del personal operativo",
            "B) La venta de los activos comunitarios",
            "C) La evaluación de impacto y sistematización de la experiencia",
            "D) El olvido de los registros de campo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Tras la ejecución, la evaluación de impacto y la sistematización permiten reflexionar sobre lo aprendido, valorar los logros y rendir cuentas a la comunidad."
    },
    {
        "id": 41,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Cómo se define la Política Social en el marco del Estado de Bienestar?",
        "opciones": [
            "A) El aumento de impuestos a las clases trabajadoras",
            "B) Un mecanismo exclusivo de control policial de la oposición",
            "C) El conjunto de directrices y acciones estatales orientadas a mitigar las desigualdades, garantizar derechos y proveer bienestar a la población",
            "D) La caridad privada ejercida por empresas lucrativas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La política social comprende la intervención del Estado para regular el bienestar social, redistribuir la riqueza y asegurar mínimos de protección ante riesgos sociales."
    },
    {
        "id": 42,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Qué modelo de Estado se caracteriza por la reducción del gasto público social, la privatización de servicios y la desregulación de los mercados laborales?",
        "opciones": [
            "A) Estado Benefactor Corporativo",
            "B) Estado de Bienestar Socialdemócrata",
            "C) Estado de Bienestar Keynesiano",
            "D) Estado Neoliberal"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El modelo neoliberal promueve el libre mercado, la contracción del rol social del Estado y la transferencia de servicios públicos al sector privado."
    },
    {
        "id": 43,
        "area": "Política Social y Bienestar",
        "pregunta": "En el análisis de la pobreza, ¿qué enfoque mide la privación a partir de la incapacidad de adquirir una canasta básica de bienes y servicios (línea de bienestar)?",
        "opciones": [
            "A) Pobreza multidimensional",
            "B) Pobreza por ingresos o línea de pobreza",
            "C) Coeficiente de Gini",
            "D) Índice de desarrollo humano"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La medición por ingresos o línea de pobreza evalúa si los recursos monetarios de los hogares son suficientes para cubrir necesidades alimentarias y no alimentarias básicas."
    },
    {
        "id": 44,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Qué mide el Coeficiente de Gini en la estructura económica de una sociedad?",
        "opciones": [
            "A) El grado de desigualdad en la distribución del ingreso",
            "B) La tasa de desempleo estructural",
            "C) La tasa de crecimiento poblacional anual",
            "D) El nivel de inflación acumulada"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El coeficiente de Gini es una medida estadística de la desigualdad distributiva; 0 representa la igualdad perfecta y 1 la desigualdad máxima."
    },
    {
        "id": 45,
        "area": "Política Social y Bienestar",
        "pregunta": "Según la metodología de medición multidimensional de la pobreza (como la de CONEVAL), ¿qué dos grandes ejes se combinan?",
        "opciones": [
            "A) Religión y preferencia partidista",
            "B) Ubicación geográfica y nivel educativo del abuelo",
            "C) Edad cronológica y género",
            "D) Ingresos económicos y carencias en derechos sociales"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La pobreza multidimensional integra el bienestar económico (ingresos) y el ejercicio efectivo de los derechos sociales (educación, salud, seguridad social, vivienda, servicios y alimentación)."
    },
    {
        "id": 46,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Qué se entiende por 'exclusión social' en los estudios contemporáneos de Trabajo Social?",
        "opciones": [
            "A) Un simple problema de falta de dinero transitorio",
            "B) Un fenómeno multidimensional de ruptura de los lazos sociales y privación de derechos y participación ciudadana",
            "C) Una decisión voluntaria de aislamiento geográfico",
            "D) La jubilación anticipada por edad"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La exclusión social va más allá de la pobreza económica; implica procesos de marginación en múltiples dimensiones (laboral, cultural, política, relacional)."
    },
    {
        "id": 47,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Cuál es la diferencia fundamental entre 'asistencialismo' y 'promoción social'?",
        "opciones": [
            "A) El asistencialismo busca la transformación estructural",
            "B) El asistencialismo fomenta la dependencia mediante dádivas temporales; la promoción social impulsa la autonomía y el desarrollo de capacidades",
            "C) No existe ninguna diferencia teórica",
            "D) La promoción social regala despensas y el asistencialismo genera leyes"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El asistencialismo provee ayuda paliativa sin cuestionar causas estructurales, mientras que la promoción social busca el protagonismo, la participación y la autonomía de los sujetos."
    },
    {
        "id": 48,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Qué indicador compuesto elaborado por el Programa de las Naciones Unidas para el Desarrollo (PNUD) evalúa la salud, la educación y el ingreso per cápita?",
        "opciones": [
            "A) Índice de Desarrollo Humano (IDH)",
            "B) Índice de Precios al Consumidor (IPC)",
            "C) Tasa de Desempleo Abierto",
            "D) Producto Interno Bruto (PIB)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El IDH mide los logros medios en tres dimensiones básicas del desarrollo humano: una vida larga y saludable, el conocimiento y un nivel de vida digno."
    },
    {
        "id": 49,
        "area": "Política Social y Bienestar",
        "pregunta": "En el análisis de políticas sociales, ¿qué son las 'transferencias condicionadas'?",
        "opciones": [
            "A) Préstamos bancarios con altas tasas de interés para empresarios",
            "B) Programas que otorgan recursos monetarios a las familias a cambio de que cumplan corresponsabilidades en salud y educación",
            "C) Donaciones voluntarias entre iglesias",
            "D) Subsidios a las grandes corporaciones transnacionales"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los programas de transferencias condicionadas (PTC) entregan apoyos económicos directos condicionados a que los beneficiarios asistan a revisiones médicas y escuelas."
    },
    {
        "id": 50,
        "area": "Política Social y Bienestar",
        "pregunta": "¿Qué objetivo persigue la transversalización de la perspectiva de género en las políticas públicas y sociales?",
        "opciones": [
            "A) Crear ministerios exclusivos para la moda femenina",
            "B) Garantizar que las necesidades e impactos diferenciados entre mujeres y hombres se consideren en todo el ciclo de la política",
            "C) Reducir la natalidad nacional obligatoriamente",
            "D) Eliminar por completo el presupuesto destinado a los hombres"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La transversalización de género (gender mainstreaming) busca evaluar las implicaciones para mujeres y hombres de cualquier acción planejada, asegurando la equidad."
    },
    {
        "id": 51,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Qué hito histórico marca el surgimiento del Trabajo Social como profesión y disciplina científica a finales del siglo XIX?",
        "opciones": [
            "A) La caída del Imperio Romano de Oriente",
            "B) La invención de la imprenta por Gutenberg",
            "C) La firma de los tratados de paz medievales",
            "D) La fundación de las primeras escuelas de formación y la obra de Mary Richmond con la COS"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La profesionalización del Trabajo Social inicia con la Charity Organization Society (COS) y la creación de escuelas sistemáticas de formación a principios del siglo XX."
    },
    {
        "id": 52,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿En qué consistió el llamado 'Movimiento de Reconceptualización' del Trabajo Social en América Latina durante las décadas de 1960 y 1970?",
        "opciones": [
            "A) Una revisión crítica del origen asistencialista de la profesión, adoptando un enfoque crítico, marxista y transformador",
            "B) La adopción exclusiva de técnicas contables empresariales",
            "C) El retorno estricto a la caridad religiosa medieval",
            "D) La decisión de suprimir la carrera en todas las universidades"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Reconceptualización fue un proceso de ruptura teórico-metodológica y política en América Latina para politizar la práctica y vincularla a la transformación social."
    },
    {
        "id": 53,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Cuál es el principio ético fundamental en Trabajo Social que establece el respeto a la dignidad intrínseca y a la autodeterminación del sujeto de intervención?",
        "opciones": [
            "A) El principio de paternalismo autoritario",
            "B) El principio de coerción institucional",
            "C) El principio de respeto a la autodeterminación y dignidad",
            "D) El principio de exclusión ideológica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La autodeterminación reconoce el derecho de los usuarios a tomar sus propias decisiones, mientras que el respeto a la dignidad es el pilar de la ética profesional."
    },
    {
        "id": 54,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Qué establece el secreto profesional en la praxis del Trabajo Social?",
        "opciones": [
            "A) La obligación ética y legal de resguardar la información confidencial obtenida del usuario durante la intervención",
            "B) La prohibición de hablar con otros colegas sobre casos difíciles",
            "C) El derecho a divulgar los expedientes en redes sociales públicas",
            "D) La obligación de entregar expedientes a cualquier ciudadano que los solicite"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El secreto profesional protege la privacidad y confianza del usuario, obligando al trabajador social a guardar reserva sobre los datos íntimos conocidos por su labor."
    },
    {
        "id": 55,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "Desde el punto de vista epistemológico, ¿cómo se posiciona el Trabajo Social contemporáneo frente a la realidad social?",
        "opciones": [
            "A) Como una disciplina interventora que produce conocimiento situado a través de la praxis",
            "B) Como una técnica neutral sin base teórica",
            "C) Como una ciencia exacta que solo experimenta en laboratorios químicos",
            "D) Como una rama menor de la medicina general"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Trabajo Social es una disciplina de las ciencias sociales cuya intervención genera praxis: unión dialéctica entre teoría y acción transformadora."
    },
    {
        "id": 56,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Qué dilema ético se presenta con mayor frecuencia en la práctica institucional del trabajador social?",
        "opciones": [
            "A) La elección del color del uniforme institucional",
            "B) El horario de entrada a la jornada laboral",
            "C) La selección del mobiliario de oficina",
            "D) El conflicto entre los intereses y normativas de la institución empleadora y los derechos y bienestar del usuario"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El dilema ético institucional surge cuando las burocracias exigen procedimientos que vulneran o limitan los derechos fundamentales de los sujetos de atención."
    },
    {
        "id": 57,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Qué autor elaboró la trilogía clásica de métodos de intervención (Caso, Grupo y Comunidad) que dominó la enseñanza del Trabajo Social durante mediados del siglo XX?",
        "opciones": [
            "A) Mary Richmond, Callowhill y Eduard Lindeman",
            "B) Karl Marx y Friedrich Engels",
            "C) Max Weber y Émile Durkheim",
            "D) Michel Foucault y Pierre Bourdieu"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La estructuración clásica en Casos, Grupos y Comunidades se consolidó a partir de las aportaciones de pioneros norteamericanos y europeos en el trabajo social de servicio social."
    },
    {
        "id": 58,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Qué busca el enfoque de derechos humanos en la intervención contemporánea del Trabajo Social?",
        "opciones": [
            "A) Desconocer las leyes nacionales vigentes",
            "B) Reducir los presupuestos gubernamentales de asistencia",
            "C) Tratar al usuario como sujeto titular de derechos exigibles al Estado, superando la visión de cliente pasivo o limosnero",
            "D) Judicializar todos los problemas familiares existentes"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El enfoque de derechos humanos transforma la práctica profesional al reconocer a los usuarios como titulares legítimos de derechos y al Estado como garante obligado."
    },
    {
        "id": 59,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "¿Cuál es el propósito del Código de Ética profesional en el Trabajo Social?",
        "opciones": [
            "A) Fijar las cuotas salariales mínimas por sindicatos",
            "B) Regular la conducta profesional, establecer estándares morales y orientar la resolución de dilemas éticos en la práctica",
            "C) Reemplazar los códigos penales del país",
            "D) Servir como un manual de contabilidad financiera"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El código de ética guía el ejercicio profesional, delimitando responsabilidades hacia los usuarios, colegas, instituciones y la sociedad."
    },
    {
        "id": 60,
        "area": "Epistemología, Teoría y Ética del Trabajo Social",
        "pregunta": "En el debate sobre la identidad disciplinar, ¿qué significa la expresión 'el objeto de estudio del Trabajo Social es la cuestión social'?",
        "opciones": [
            "A) Que se centra exclusivamente en el análisis de los deportes olímpicos",
            "B) Que la profesión aborda las expresiones particulares de las contradicciones entre capital y trabajo en la sociedad capitalista",
            "C) Que el trabajo social solo estudia temas de etiqueta y modales",
            "D) Que la disciplina se limita a clasificar especies botánicas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La 'cuestión social' como objeto de estudio sitúa al Trabajo Social en el análisis de las desigualdades, pobrezas y contradicciones estructurales del sistema socioeconómico."
    },
    {
        "id": 61,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Qué es la supervisión en Trabajo Social?",
        "opciones": [
            "A) Un proceso educativo, administrativo y de apoyo que optimiza la práctica profesional y garantiza la calidad del servicio",
            "B) Una reunión social sin objetivos institucionales",
            "C) Una auditoría contable de los gastos personales del trabajador",
            "D) Un sistema de vigilancia policial para sancionar errores"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La supervisión es un proceso técnico-pedagógico y administrativo que busca el desarrollo profesional, el bienestar del trabajador y la eficacia de la intervención."
    },
    {
        "id": 62,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "En la administración de servicios sociales, ¿qué función cumple el proceso administrativo de 'planeación'?",
        "opciones": [
            "A) Archivar documentos obsoletos",
            "B) Sancionar al personal que llega tarde",
            "C) Contabilizar el dinero al final del día",
            "D) Definir objetivos, cursos de acción y recursos necesarios para alcanzar las metas institucionales"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La planeación es la fase directiva donde se anticipa el futuro, determinando metas, políticas y estrategias operativas de la organización social."
    },
    {
        "id": 63,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Qué es el trabajo interdisciplinario o transdisciplinario en las instituciones de salud y bienestar social?",
        "opciones": [
            "A) La sustitución de los médicos por trabajadores sociales",
            "B) La subordinación de todas las profesiones al criterio médico exclusivo",
            "C) La articulación coordinada de diversas disciplinas (medicina, psicología, trabajo social, derecho) para abordar integralmente la problemática",
            "D) El aislamiento de cada profesional en su respectivo cubículo sin hablar con otros"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El trabajo en equipo interdisciplinario enriquece la lectura y resolución de los problemas complejos mediante la integración de saberes especializados."
    },
    {
        "id": 64,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Cuál es la función del informe social en la práctica institucional?",
        "opciones": [
            "A) Contar chistes y anécdotas personales del trabajador social",
            "B) Documentar de manera técnica, sintética y objetiva la situación sociofamiliar del usuario para fundamentar dictámenes y decisiones institucionales",
            "C) Redactar poemas líricos para motivar al personal",
            "D) Registrar las calificaciones escolares de los hijos del director"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El informe social es un documento técnico pericial y testimonial que sintetiza el diagnóstico sociofamiliar para respaldar la toma de decisiones institucionales."
    },
    {
        "id": 65,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "En la gestión institucional, ¿qué es la evaluación de calidad de los servicios sociales?",
        "opciones": [
            "A) El proceso sistemático para medir la satisfacción de los usuarios y el cumplimiento de los estándares de atención establecidos",
            "B) La eliminación de los buzones de quejas",
            "C) La reducción arbitraria del personal para ahorrar salarios",
            "D) El aumento de cuotas de recuperación a los más pobres"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La evaluación de calidad revisa procesos, resultados y la satisfacción de los usuarios para mejorar continuamente la prestación de servicios asistenciales."
    },
    {
        "id": 66,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Qué es la intersectorialidad en la gestión de políticas y servicios sociales?",
        "opciones": [
            "A) La privatización de todas las secretarías de Estado",
            "B) La articulación y coordinación de diferentes sectores del Estado (salud, educación, trabajo, vivienda) para dar respuesta integral a problemas complejos",
            "C) La centralización de las decisiones en una sola persona",
            "D) La competencia encarnizada entre ministerios por el presupuesto"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La intersectorialidad rompe el trabajo aislado por dependencias, uniendo esfuerzos de múltiples sectores para atender problemas estructurales como la pobreza o la violencia."
    },
    {
        "id": 67,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "En la administración de programas sociales, ¿qué significa la 'eficacia'?",
        "opciones": [
            "A) La cantidad de papelería gastada al año",
            "B) La minimización de los recursos financieros utilizados",
            "C) La velocidad con la que se cierran las oficinas",
            "D) El grado en que se alcanzan las metas y objetivos planeados, sin importar necesariamente el costo"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La eficacia se refiere al cumplimiento de los objetivos y metas propuestas, midiendo el logro final del programa o proyecto."
    },
    {
        "id": 68,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "En la administración de programas sociales, ¿qué significa la 'eficiencia'?",
        "opciones": [
            "A) El número total de usuarios atendidos sin importar el tiempo",
            "B) El retraso deliberado en la entrega de apoyos",
            "C) La relación óptima entre los recursos utilizados y los resultados obtenidos (lograr más con menos recursos)",
            "D) El incremento del gasto burocrático innecesario"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La eficiencia evalúa el aprovechamiento racional de los recursos (financieros, humanos, temporales) para alcanzar los objetivos estipulados."
    },
    {
        "id": 69,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Qué es el expediente social institucional?",
        "opciones": [
            "A) El directorio telefónico de la institución",
            "B) Una libreta personal donde el trabajador social anota sus pendientes",
            "C) El archivo cronológico y sistemático que contiene todos los documentos, registros, entrevistas e informes de un usuario o familia atendida",
            "D) Una lista de morosos de impuestos municipales"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El expediente social es el documento legal y técnico que resguarda la historia de intervención, diagnósticos, evolución y acuerdos establecidos con el usuario."
    },
    {
        "id": 70,
        "area": "Gestión en Instituciones y Administración de Servicios Sociales",
        "pregunta": "¿Cuál es el propósito de realizar una auditoría social en los programas gubernamentales?",
        "opciones": [
            "A) Justificar recortes presupuestales discrecionales",
            "B) Ejercer la fiscalización y control ciudadano sobre el uso de los recursos públicos y la calidad de los programas sociales",
            "C) Ocultar información a la contraloría general",
            "D) Sancionar penalmente a los ciudadanos pobres"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La auditoría social es un mecanismo de participación y control democrático donde la ciudadanía vigila la transparencia y correcta aplicación de los recursos públicos."
    },
    {
        "id": 71,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "En el Trabajo Social en el ámbito de la Salud, ¿cuál es una de las funciones principales del profesional ante una hospitalización prolongada?",
        "opciones": [
            "A) Diagnosticar quirúrgicamente al paciente",
            "B) Gestionar el alta hospitalaria coordinando redes de apoyo domiciliario y paliar el impacto psicosocial de la enfermedad",
            "C) Reemplazar al personal de enfermería en turnos nocturnos",
            "D) Prescribir medicamentos controlados"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En salud, el trabajador social aborda los determinantes sociales de la salud, el impacto emocional, la adherencia al tratamiento y la articulación con redes post-alta."
    },
    {
        "id": 72,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "En el Trabajo Social Educativo, ¿cómo se aborda principalmente el fenómeno del fracaso o ausentismo escolar?",
        "opciones": [
            "A) Expulsando inmediatamente al alumno sin investigar causas",
            "B) Ignorando el problema hasta que el alumno abandone los estudios",
            "C) Multando económicamente a los padres de familia",
            "D) Analizando los factores sociofamiliares, económicos y contextuales que inciden en la trayectoria del alumno, articulando escuela y comunidad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El trabajador social educativo investiga las causas socioeconómicas y familiares del ausentismo, diseñando estrategias de retención y vinculación con la familia."
    },
    {
        "id": 73,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "¿Cuál es la función del Trabajo Social Forense o en el ámbito Jurídico?",
        "opciones": [
            "A) Detener a los infractores en la vía pública",
            "B) Emitir peritajes sociales objetivos e imparciales solicitados por jueces en procesos de custodia, adopción, violencia familiar o restitución de derechos",
            "C) Defender legalmente a los narcotraficantes en los tribunales",
            "D) Dictar sentencias condenatorias definitivas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El trabajador social forense actúa como perito experto, elaborando dictámenes sociofamiliares que auxilian al juez en la toma de decisiones legales sobre menores y familias."
    },
    {
        "id": 74,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "En el Trabajo Social Laboral o Industrial, ¿cuál es un objetivo central de la intervención en la empresa?",
        "opciones": [
            "A) Contribuir al bienestar integral de los trabajadores, mejorar el clima organizacional y gestionar prestaciones sociales corporativas",
            "B) Despedir trabajadores sin liquidación",
            "C) Vigilar ideológicamente las opiniones políticas de los empleados",
            "D) Fijar los precios de venta de los productos de la empresa"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El trabajador social laboral atiende la problemática psicosocial del trabajador y su familia, promoviendo la salud ocupacional, el clima laboral y el acceso a prestaciones."
    },
    {
        "id": 75,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "¿Qué intervención realiza el Trabajo Social en el campo de la Gerontología y atención a personas adultas mayores?",
        "opciones": [
            "A) Aislar a los ancianos de sus familias",
            "B) Administrar los bienes testamentarios sin consentimiento",
            "C) Acelerar el proceso de institucionalización obligatoria en asilos cerrados",
            "D) Promover el envejecimiento activo, gestionar apoyos gerontológicos, prevenir el maltrato y articular redes de cuidado"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El gerontólogo social diseña programas para la autonomía, el bienestar, la prevención de la dependencia y la protección de los derechos de las personas mayores."
    },
    {
        "id": 76,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "En la intervención ante situaciones de desastres naturales y emergencias, ¿cuál es la primera fase operativa del Trabajo Social?",
        "opciones": [
            "A) Auditoría fiscal de los donativos recibidos",
            "B) Impartición de clases teóricas de filosofía",
            "C) Construcción de edificios de lujo",
            "D) Evaluación rápida de daños y necesidades (EDAN) y atención humanitaria inmediata"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Ante emergencias, el trabajador social participa en la evaluación rápida de daños, el registro de afectados y la canalización de ayuda humanitaria urgente."
    },
    {
        "id": 77,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "¿Cuál es el enfoque del Trabajo Social penitenciario en la readaptación o reinserción social?",
        "opciones": [
            "A) Aplicar castigos físicos correctivos",
            "B) Aislar totalmente al reo de la sociedad",
            "C) Aumentar las penas de reclusión indefinida",
            "D) Facilitar procesos de preparación para la libertad, atención a familias y mitigación del daño institucional carcelario"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El trabajo social penitenciario busca mantener vínculos familiares, preparar al recluso para la reinserción laboral y social y gestionar beneficios preliberacionales."
    },
    {
        "id": 78,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "En el ámbito de la salud mental y adicciones, ¿qué rol cumple el trabajador social en el equipo interdisciplinario?",
        "opciones": [
            "A) Recetar psicofármacos de patente",
            "B) Abordar el entorno sociofamiliar del paciente, identificar factores de riesgo y apoyar en la rehabilitación psicosocial",
            "C) Aplicar lobotomías quirúrgicas",
            "D) Juzgar moralmente al paciente adicto"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En salud mental, el trabajador social analiza el contexto familiar, apoya en la adherencia al tratamiento comunitario y facilita la reinserción social sin estigmas."
    },
    {
        "id": 79,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "¿Qué importancia tiene el Trabajo Social en los programas de vivienda y desarrollo urbano?",
        "opciones": [
            "A) Cobrar rentas comerciales a los inquilinos",
            "B) Facilitar la reubicación concertada, la integración comunitaria en nuevos fraccionamientos y la resolución de conflictos vecinales",
            "C) Demoler viviendas sin previo aviso",
            "D) Diseñar los planos arquitectónicos estructurales"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En vivienda, el trabajo social media en procesos de reubicación, promueve la participación comunitaria y previene la segregación urbana y el conflicto vecinal."
    },
    {
        "id": 80,
        "area": "Ámbitos Especializados de Intervención (Salud, Educativa, Jurídica, Laboral)",
        "pregunta": "¿Cuál es la intervención fundamental del Trabajo Social en contextos de migración y refugio?",
        "opciones": [
            "A) Brindar orientación sobre derechos, facilitar el acceso a servicios básicos, refugio y apoyo psicosocial en tránsito o destino",
            "B) Deportar a los migrantes indocumentados",
            "C) Imponer el idioma local por la fuerza",
            "D) Cobrar impuestos aduaneros en las fronteras"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El trabajador social en movilidad humana atiende la vulnerabilidad extrema, orienta sobre trámites de asilo, refugio y articula redes humanitarias."
    },
    {
        "id": 81,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué diferencia principal existe entre la 'investigación social' tradicional y la 'sistematización de prácticas' en Trabajo Social?",
        "opciones": [
            "A) La sistematización solo se hace con computadoras cuánticas",
            "B) No existe ninguna diferencia conceptual",
            "C) La sistematización recupera, interpreta y reflexiona críticamente sobre la propia práctica de intervención para producir conocimiento útil desde la experiencia",
            "D) La investigación social prohíbe el uso de libros"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Mientras la investigación tradicional busca contrastar hipótesis generales, la sistematización se enfoca en ordenar y reconstruir una experiencia de intervención para extraer aprendizajes."
    },
    {
        "id": 82,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "Según Oscar Jara Holliday, ¿cuál es el producto central de un proceso de sistematización de experiencias en Trabajo Social?",
        "opciones": [
            "A) Una lista de asistencia firmada por los usuarios",
            "B) La producción de aprendizajes críticos y conocimientos teóricos nacidos de la práctica transformadora",
            "C) Un manual de normas burocráticas estrictas",
            "D) Un balance contable de ingresos y egresos"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para Oscar Jara, sistematizar es un proceso de interpretación crítica de una o varias experiencias que, a partir de su ordenamiento y reconstrucción, descubre la lógica del proceso."
    },
    {
        "id": 83,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué método de investigación social se caracteriza por la recolección y análisis de datos numéricos mediante técnicas estadísticas para probar hipótesis?",
        "opciones": [
            "A) Investigación cualitativa interpretativa",
            "B) Investigación acción participativa",
            "C) Investigación cuantitativa",
            "D) Etnografía crítica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El enfoque cuantitativo utiliza la medición numérica y el análisis estadístico para estudiar patrones, tendencias y probar relaciones entre variables."
    },
    {
        "id": 84,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué técnica cualitativa de investigación consiste en una discusión moderada con un grupo homogéneo de personas para explorar percepciones sobre un tema específico?",
        "opciones": [
            "A) Encuesta postal masiva",
            "B) Observación de laboratorio químico",
            "C) Grupo focal (focus group)",
            "D) Censo poblacional"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El grupo focal es una técnica de investigación cualitativa que aprovecha la interacción grupal para indagar en discursos, opiniones y representaciones sociales."
    },
    {
        "id": 85,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "En el proceso de investigación social, ¿qué es la operacionalización de variables?",
        "opciones": [
            "A) La contratación de personal de campo",
            "B) El desglose de una variable teórica en dimensiones e indicadores empíricamente medibles",
            "C) El cálculo del presupuesto financiero del proyecto",
            "D) La impresión de encuestas en papel reciclado"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La operacionalización transforma conceptos abstractos (p. ej., pobreza, bienestar) en dimensiones e indicadores observables y medibles en la realidad."
    },
    {
        "id": 86,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué tipo de investigación diagnóstica se realiza para conocer las características de una población o fenómeno sin manipular variables ni buscar causas profundas?",
        "opciones": [
            "A) Investigación experimental pura",
            "B) Investigación de laboratorio molecular",
            "C) Investigación descriptiva",
            "D) Investigación histórica documental"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La investigación descriptiva busca especificar propiedades, características y perfiles de personas, grupos o comunidades sin intervenir ni alterar el fenómeno."
    },
    {
        "id": 87,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "En la sistematización de prácticas, ¿cuál es el primer paso metodológico que se debe realizar?",
        "opciones": [
            "A) Delimitar el objeto a sistematizar (el 'qué' y 'para qué' de la experiencia)",
            "B) Despedir al equipo operativo",
            "C) Redactar las conclusiones del informe final",
            "D) Comprar equipo de computación avanzado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El punto de partida de la sistematización es definir claramente el objetivo, delimitar la experiencia concreta que se va a sistematizar y precisar para qué servirá."
    },
    {
        "id": 88,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué criterio metodológico garantiza que una investigación social sea replicable y confiable?",
        "opciones": [
            "A) El uso de lenguaje incomprensible y tecnicismos ocultos",
            "B) La destrucción de los diarios de campo",
            "C) La claridad en los instrumentos, la validez de los datos y la transparencia en el procedimiento metodológico",
            "D) La falsificación de datos para cumplir metas políticas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La confiabilidad y validez en investigación social dependen de la rigurosidad metodológica, la transparencia y la consistencia en la recolección y análisis de datos."
    },
    {
        "id": 89,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Qué es el análisis de contenido en la investigación social?",
        "opciones": [
            "A) La auditoría de los equipos electrónicos de una oficina",
            "B) Una técnica de investigación para interpretar textos, discursos, documentos o grabaciones buscando patrones de significado",
            "C) La contabilidad de los alimentos almacenados en una bodega",
            "D) La medición del peso físico de los cuestionarios impresos"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El análisis de contenido permite estudiar sistemáticamente el material escrito o audiovisual para extraer categorías, temas y significados subyacentes."
    },
    {
        "id": 90,
        "area": "Investigación Social y Sistematización de la Práctica",
        "pregunta": "¿Cuál es la utilidad de la devolución de la información a la comunidad investigada?",
        "opciones": [
            "A) Cobrar una cuota adicional por el informe impreso",
            "B) Retornar los hallazgos a los participantes para validar los resultados, propiciar la reflexión y devolver el conocimiento generado",
            "C) Evitar que los pobladores lean el documento",
            "D) Cumplir con un requisito burocrático sin importancia"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La devolución de información es un acto ético y político donde los resultados de la investigación se comparten con la comunidad para su apropiación y diálogo crítico."
    },
    {
        "id": 91,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué establece la Convención sobre los Derechos del Niño en relación con el principio del 'interés superior del niño'?",
        "opciones": [
            "A) Que en toda decisión institucional o judicial se debe garantizar la máxima satisfacción integral de los derechos de la infancia",
            "B) Que los niños decidan las leyes fiscales del país",
            "C) Que los padres tienen derecho absoluto sobre la vida de sus hijos",
            "D) Que los menores trabajen en jornadas completas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El principio del interés superior del niño obliga a que cualquier medida estatal, familiar o judicial anteponga el bienestar y protección integral de niñas, niños y adolescentes."
    },
    {
        "id": 92,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Cómo se define el concepto de 'género' en las ciencias sociales y el Trabajo Social?",
        "opciones": [
            "A) La categoría económica de salario mínimo",
            "B) El sexo biológico con el que nace un individuo",
            "C) La preferencia partidista en las elecciones",
            "D) La construcción social, cultural e histórica de los roles, comportamientos y atributos asignados a hombres y mujeres"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El género alude a los constructos socioculturales que diferencian lo femenino y lo masculino, a diferencia del sexo, que refiere a la biología."
    },
    {
        "id": 93,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué significa el enfoque interseccional en la intervención social?",
        "opciones": [
            "A) Aplicar únicamente encuestas cuantitativas",
            "B) Fusionar diferentes instituciones gubernamentales en una sola",
            "C) Cruzar calles peligrosas durante la noche",
            "D) Analizar cómo se cruzan múltiples ejes de opresión o discriminación (clase, género, raza, edad, orientación sexual) generando experiencias complejas de desigualdad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La interseccionalidad (acuñada por Kimberlé Crenshaw) demuestra que las discriminaciones no operan aisladas, sino que se entrelazan agravando la exclusión."
    },
    {
        "id": 94,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué busca erradicar la Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer (CEDAW)?",
        "opciones": [
            "A) El sufragio universal femenino",
            "B) La participación de las mujeres en la vida laboral remunerada",
            "C) Toda distinción, exclusión o restricción basada en el sexo que menoscabe los derechos humanos de las mujeres",
            "D) El acceso de las niñas a la educación superior"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La CEDAW es el tratado internacional fundamental para la protección de los derechos de las mujeres y la eliminación de la discriminación basada en el género."
    },
    {
        "id": 95,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "En el contexto de la diversidad sexual, ¿qué implica adoptar una postura antidiscriminatoria en Trabajo Social?",
        "opciones": [
            "A) Brindar atención libre de prejuicios, respetando la identidad y expresión de género u orientación sexual de los usuarios",
            "B) Negar el servicio a personas de la diversidad",
            "C) Imponer una moralidad religiosa estricta",
            "D) Intentar cambiar la orientación sexual del usuario mediante terapias de conversión"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El trabajo social ético requiere garantizar el respeto a la diversidad sexual y de género, erradicando la LGBT-fobia en la práctica profesional e institucional."
    },
    {
        "id": 96,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué son los derechos económicos, sociales, culturales y ambientales (DESCA)?",
        "opciones": [
            "A) Leyes que prohíben el comercio internacional",
            "B) Sanciones penales para los desempleados",
            "C) Derechos humanos relativos a las condiciones sociales y económicas básicas necesarias para una vida en dignidad (salud, educación, trabajo, vivienda, medio ambiente)",
            "D) Privilegios exclusivos para la clase empresarial"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los DESCA son derechos de segunda y tercera generación enfocados en garantizar el bienestar material y las condiciones de vida digna exigibles al Estado."
    },
    {
        "id": 97,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué se entiende por 'violencia de género' según los marcos internacionales de derechos humanos?",
        "opciones": [
            "A) Los desacuerdos económicos menores entre socios comerciales",
            "B) Las disputas salariales entre sindicatos y patrones",
            "C) Cualquier acto de violencia basado en el género que tenga o pueda tener como resultado un daño físico, sexual o psicológico",
            "D) Los conflictos deportivos en partidos de fútbol"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La violencia de género es una manifestación de la desigualdad de poder entre géneros, afectando fundamentalmente a mujeres y disidencias."
    },
    {
        "id": 98,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "En la intervención con pueblos indígenas y comunidades originarias, ¿qué principio ético y legal debe prevalecer?",
        "opciones": [
            "A) La expropiación de sus tierras comunales",
            "B) El derecho a la consulta previa, libre e informada y el respeto a su autonomía y cosmovisión",
            "C) La asimilación cultural obligatoria a la cultura urbana",
            "D) La prohibición de hablar su lengua materna en oficinas públicas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los marcos internacionales (como el Convenio 169 de la OIT) obligan a respetar la libre determinación, la cultura y la consulta previa de los pueblos indígenas."
    },
    {
        "id": 99,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Qué papel juega el trabajador social ante una situación de vulneración flagrante de derechos humanos en una institución?",
        "opciones": [
            "A) Documentar, denunciar ante instancias protectoras de derechos y activar los protocolos de protección para el usuario",
            "B) Guardar silencio para proteger a la institución",
            "C) Sancionar al usuario por quejarse",
            "D) Aconsejar al usuario que no reclame nada"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El compromiso ético del trabajador social con los derechos humanos le impone la obligación de denunciar abusos y activar mecanismos de protección."
    },
    {
        "id": 100,
        "area": "Derechos Humanos, Género y Diversidad",
        "pregunta": "¿Cómo contribuye el Trabajo Social a la construcción de una cultura de paz?",
        "opciones": [
            "A) Fomentando la mediación comunitaria, la resolución pacífica de conflictos, la justicia social y el diálogo intercultural",
            "B) Apoyando dictaduras militares",
            "C) Promoviendo el uso de armas en los barrios",
            "D) Justificando la violencia estructural como inevitable"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La cultura de paz en trabajo social se construye desarticulando la violencia estructural y promoviendo la convivencia armónica, la justicia y los derechos humanos."
    },
    {
        "id": 101,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Cuál es la diferencia metodológica entre una técnica y un instrumento en la investigación e intervención social?",
        "opciones": [
            "A) El instrumento es el investigador y la técnica es la computadora",
            "B) La técnica es un objeto de oficina y el instrumento es una teoría abstracta",
            "C) La técnica es el procedimiento o camino metodológico; el instrumento es la herramienta física o formato concreto que se utiliza para aplicar la técnica",
            "D) No hay ninguna distinción técnica"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Metodológicamente, la técnica es el procedimiento (p. ej., la encuesta) y el instrumento es el soporte material (p. ej., el cuestionario impreso o digital)."
    },
    {
        "id": 102,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "En el proceso metodológico de intervención (Investigación, Diagnóstico, Planificación, Ejecución y Evaluación), ¿qué caracteriza a la fase de 'Ejecución'?",
        "opciones": [
            "A) El cierre definitivo de las oficinas",
            "B) La contratación del personal administrativo",
            "C) La puesta en marcha de las actividades y estrategias planeadas para transformar la situación problema",
            "D) La redacción inicial de la tesis de grado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La ejecución es la materialización operativa de lo planificado, llevando a cabo las acciones y programas diseñados en el proyecto."
    },
    {
        "id": 103,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Qué es el 'diario de campo' en la práctica del Trabajo Social?",
        "opciones": [
            "A) Un reporte contable de los gastos de gasolina",
            "B) Un cuaderno o registro donde el profesional anota observaciones, reflexiones, vivencias y datos cotidianos de la intervención",
            "C) Un libro de actas de la junta directiva",
            "D) Una lista de asistencia del personal de la institución"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El diario de campo es el instrumento de registro etnográfico donde el trabajador social consigna observaciones, impresiones y análisis subjetivos y objetivos de la práctica diaria."
    },
    {
        "id": 104,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Qué función cumple la entrevista social en el proceso de intervención?",
        "opciones": [
            "A) Aplicar pruebas de fuerza física",
            "B) Realizar exámenes médicos de laboratorio",
            "C) Facilitar la comunicación interpersonal para obtener información, orientar, contener emocionalmente y establecer rapport con el usuario",
            "D) Juzgar la moralidad del entrevistado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La entrevista social es el instrumento clave de interacción verbal y no verbal para conocer, orientar, acompañar y construir el diagnóstico junto al usuario."
    },
    {
        "id": 105,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Qué se entiende por 'rapport' en el contexto de la entrevista en Trabajo Social?",
        "opciones": [
            "A) El establecimiento de un clima de confianza, empatía y sintonía emocional entre el profesional y el usuario",
            "B) La confrontación agresiva de mentiras",
            "C) El cálculo matemático del ingreso familiar",
            "D) La redacción formal del informe final"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El rapport es la técnica orientada a crear una atmósfera de empatía y confianza mutua que facilite la apertura y comunicación sincera del usuario."
    },
    {
        "id": 106,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Cuál es el propósito de realizar una visita domiciliaria en la práctica del Trabajo Social?",
        "opciones": [
            "A) Vigilar si el usuario tiene televisores de lujo",
            "B) Observar directamente las condiciones sociohabitacionales, la dinámica familiar y el contexto real de vida del usuario",
            "C) Cobrar impuestos atrasados en nombre del municipio",
            "D) Realizar reparaciones de plomería en la vivienda"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La visita domiciliaria permite corroborar y contextualizar la información obtenida en la oficina, observando de cerca el hábitat y las relaciones familiares cotidianas."
    },
    {
        "id": 107,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Qué requisito ético-legal es indispensable antes de realizar una visita domiciliaria o aplicar una entrevista profunda?",
        "opciones": [
            "A) Obtener el consentimiento informado del usuario o familia",
            "B) Publicar los datos en internet",
            "C) Contar con una orden de cateo policial",
            "D) Avisar a la prensa local"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El consentimiento informado garantiza que el usuario conoce los motivos, alcances y uso de la información recabada, aceptando voluntariamente la intervención."
    },
    {
        "id": 108,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "En la redacción de documentos técnicos (como el informe social), ¿qué norma fundamental debe cumplirse?",
        "opciones": [
            "A) Uso de adjetivos descalificativos hacia el usuario",
            "B) Inclusión de opiniones personales sin sustento",
            "C) Objetividad, claridad, precisión técnica, lenguaje no discriminatorio y resguardo de la confidencialidad",
            "D) Empleo de jerga indescifrable"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los escritos profesionales deben ser rigurosos, objetivos, claros, éticos y respetuosos de los derechos de los usuarios."
    },
    {
        "id": 109,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Qué es la canalización o derivación institucional en Trabajo Social?",
        "opciones": [
            "A) El procedimiento técnico mediante el cual se orienta y remite a un usuario a otra institución especializada para la atención de necesidades específicas que rebasan el ámbito actual",
            "B) El traslado obligatorio de pacientes en ambulancia",
            "C) La transferencia de fondos bancarios del usuario al trabajador social",
            "D) El cierre definitivo del caso sin dar explicaciones"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La canalización conecta al usuario con redes y servicios especializados externos cuando la institución actual no puede dar respuesta integral a su demanda."
    },
    {
        "id": 110,
        "area": "Sección Transversal / Metodología y Técnicas Generales",
        "pregunta": "¿Cuál es la importancia de la evaluación final en cualquier proyecto o intervención social?",
        "opciones": [
            "A) Valorar los resultados obtenidos frente a los objetivos iniciales, identificar aciertos, errores y lecciones aprendidas para futuros proyectos",
            "B) Justificar gastos no comprobados",
            "C) Destruir los archivos para liberar espacio",
            "D) Despedir al equipo de trabajo por bajo rendimiento"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La evaluación final (ex post) mide el grado de cumplimiento de los objetivos, permitiendo rendir cuentas y generar aprendizajes para la mejora continua."
    },
    {
        "id": 111,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué es el ciclo de las políticas públicas?",
        "opciones": [
            "A) La rotación del personal administrativo en el gobierno",
            "B) Las etapas secuenciales por las que atraviesa una política: identificación del problema, formulación, adopción, implementación y evaluación",
            "C) El periodo electoral de votación cada tres años",
            "D) El aumento anual de la inflación financiera"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ciclo de las políticas públicas comprende la secuencia desde la emergencia de un problema público hasta su diseño, ejecución y evaluación de resultados."
    },
    {
        "id": 112,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué se evalúa mediante una 'evaluación de diseño' en un programa social?",
        "opciones": [
            "A) Si el problema está correctamente identificado, la lógica interna del programa y la coherencia entre objetivos e indicadores",
            "B) El sueldo del director general",
            "C) La velocidad de las computadoras de la oficina",
            "D) El color del logotipo impreso en los manuales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La evaluación de diseño analiza la fundamentación teórica, el diagnóstico de la problemática, la consistencia lógica y la viabilidad del programa social."
    },
    {
        "id": 113,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Cuál es la función del análisis de stakeholders (actores involucrados) en la formulación de políticas y programas?",
        "opciones": [
            "A) Identificar intereses, expectativas, poder y grado de influencia de los diferentes grupos frente a la intervención",
            "B) Determinar el clima meteorológico de la región",
            "C) Calcular los impuestos empresariales",
            "D) Seleccionar a los familiares del político en turno para los puestos clave"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El mapeo de stakeholders ayuda a conocer quiénes apoyan, quiénes se oponen o tienen poder de veto sobre la política social, facilitando estrategias de negociación."
    },
    {
        "id": 114,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué diferencia existe entre un 'programa social' y un 'proyecto social'?",
        "opciones": [
            "A) El programa es un conjunto organizado de proyectos orientados a alcanzar metas amplias de política; el proyecto es una intervención acotada en tiempo, recursos y espacio",
            "B) El proyecto es gubernamental y el programa es familiar",
            "C) El programa dura solo un día y el proyecto dura un siglo",
            "D) No hay diferencia, son exactamente sinónimos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Jerárquicamente, un programa agrupa a diversos proyectos coordinados bajo una misma política o directriz sectorial de mayor alcance."
    },
    {
        "id": 115,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué significa la rendición de cuentas (accountability) en la gestión de programas sociales?",
        "opciones": [
            "A) La obligación de los funcionarios y ejecutores de informar, explicar y justificarse ante la ciudadanía sobre el uso de recursos y resultados obtenidos",
            "B) La condonación de deudas a los políticos",
            "C) La prohibición de que la prensa investigue los presupuestos",
            "D) La ocultación de los estados financieros a la contraloría"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La rendición de cuentas es un pilar democrático donde los gestores públicos informan con transparencia sobre el ejercicio presupuestal y el impacto social."
    },
    {
        "id": 116,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué es una evaluación de impacto en el marco de las políticas sociales?",
        "opciones": [
            "A) El análisis riguroso para determinar si el programa produjo los cambios deseados en el bienestar de la población en comparación con un escenario sin programa",
            "B) Contar el número de folletos repartidos en la calle",
            "C) Calcular los costos de la fiesta de inauguración",
            "D) Medir el peso del papel utilizado en las encuestas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La evaluación de impacto mide causalmente los cambios netos atribuibles al programa en las condiciones de vida de la población objetivo."
    },
    {
        "id": 117,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué es la focalización en el diseño de programas sociales?",
        "opciones": [
            "A) La eliminación de todos los programas gubernamentales",
            "B) La distribución equitativa de subsidios a toda la población sin importar su ingreso",
            "C) La concentración de oficinas en la capital del país",
            "D) El mecanismo para dirigir los recursos y apoyos preferentemente hacia los sectores de población más vulnerables o en pobreza"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La focalización busca optimizar recursos escasos concentrándolos en aquellos grupos que presentan mayores carencias o necesidades urgentes."
    },
    {
        "id": 118,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Qué se entiende por 'problema público' en la agenda gubernamental?",
        "opciones": [
            "A) Aquella situación insatisfactoria que afecta a un sector amplio de la sociedad y cuya solución requiere la intervención del Estado",
            "B) Un secreto familiar guardado en privado",
            "C) Un problema técnico interno de una empresa privada",
            "D) Una discusión personal entre dos vecinos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un problema se vuelve público cuando la sociedad y los actores políticos reconocen su gravedad colectiva y exigen la acción del Estado para resolverlo."
    },
    {
        "id": 119,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "¿Cuál es la función de los indicadores de resultado en la matriz de un programa social?",
        "opciones": [
            "A) Registrar el consumo de electricidad de la oficina",
            "B) Medir los efectos directos logrados sobre la población objetivo al concluir los componentes del programa",
            "C) Evaluar la puntualidad del personal",
            "D) Contar el número de reuniones realizadas por el comité"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los indicadores de resultado verifican el cumplimiento del propósito del programa, es decir, el cambio directo operado en los beneficiarios."
    },
    {
        "id": 120,
        "area": "Políticas Públicas y Evaluación de Programas",
        "pregunta": "En la gestión de políticas sociales, ¿qué representa la participación ciudadana en la fase de implementación?",
        "opciones": [
            "A) La obediencia ciega a las órdenes burocráticas",
            "B) El pago obligatorio de impuestos adicionales",
            "C) La ausencia total de opinión de los beneficiarios",
            "D) La intervención activa de la comunidad en la ejecución, veeduría y control de los programas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La participación ciudadana en la implementación democratiza la gestión pública, asegurando que los programas respondan con pertinencia y transparencia a las necesidades locales."
    }
];