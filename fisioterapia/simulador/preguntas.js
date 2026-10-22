const bancoPreguntas = [
    {
        id: 1,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la evaluación goniométrica de la flexión de cadera con la rodilla flexionada, ¿cuál es el rango de movilidad articular considerado normal en un adulto sano?",
        opciones: [
            "A) 0° a 120°",
            "B) 0° a 45°",
            "C) 0° a 90°",
            "D) 0° a 150°"
        ],
        respuestaCorrecta: 0,
        explicacion: "El rango fisiológico normal de flexión de cadera con la rodilla flexionada (para relajar los isquiotibiales) es de 0° a 120° según los estándares internacionales de goniometría (AAOS)."
    },
    {
        id: 2,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Qué modalidad electroterapéutica está estrictamente contraindicada en un paciente con marcapasos cardíaco no secuencial?",
        opciones: [
            "A) Crioterapia mediante compresas frías",
            "B) Corrientes de alta y media frecuencia como la diatermia o TENS sobre el tórax",
            "C) Cinesiterapia pasiva de miembros inferiores",
            "D) Ejercicios respiratorios de reexpansión pulmonar"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las corrientes eléctricas e interferenciales, así como la diatermia en la región torácica, pueden interferir con la señal electrónica del marcapasos e inducir arritmias fatales."
    },
    {
        id: 3,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "Según la Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud (CIF), ¿a qué nivel de la estructura conceptual corresponde la dificultad de un individuo para desplazarse en transporte público?",
        opciones: [
            "A) Deficiencia en la estructura corporal",
            "B) Deficiencia en la función fisiológica",
            "C) Restricción en la participación",
            "D) Limitación en la actividad"
        ],
        respuestaCorrecta: 2,
        explicacion: "La CIF define la 'Restricción en la participación' como los problemas que un individuo puede experimentar al involucrarse en situaciones vitales reales en su entorno social y comunitario."
    },
    {
        id: 4,
        area: "Gestión y Administración en Salud",
        pregunta: "En la elaboración de una Guía de Práctica Clínica para el abordaje fisioterapéutico de la lumbalgia crónica, ¿cuál es el nivel de evidencia más alto para recomendar el ejercicio terapéutico?",
        opciones: [
            "A) Opinión de un comité de expertos en rehabilitación",
            "B) Estudio de cohorte prospectivo sin grupo control",
            "C) Serie de casos clínicos individuales de un centro hospitalario",
            "D) Revisiones sistemáticas con metaanálisis de ensayos controlados aleatorizados"
        ],
        respuestaCorrecta: 3,
        explicacion: "En la jerarquía de la medicina basada en la evidencia, las revisiones sistemáticas con metaanálisis de ensayos clínicos aleatorizados (ECA) constituyen la evidencia de mayor nivel (Nivel 1a / Grado A)."
    },
    {
        id: 5,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude a consulta tras sufrir una caída e inversión forzada de tobillo. Al realizar la prueba del cajón anterior de tobillo se observa un desplazamiento excesivo del astrágalo. ¿Qué estructura ligamentosa se encuentra comprometida principalmente?",
        opciones: [
            "A) Ligamento peroneoastragalino anterior (LPAA)",
            "B) Ligamento deltoideo (fascículo profundo)",
            "C) Ligamento peroneocalcáneo (LPC)",
            "D) Ligamento peroneoastragalino posterior (LPAP)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba del cajón anterior evalúa la estabilidad anteroposterior del tobillo. Una restricción deficiente o traslación excesiva del astrágalo indica rotura o esguince del ligamento peroneoastragalino anterior."
    },
    {
        id: 6,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál es el mecanismo de acción fisiológico primario del Ultrasonido Terapéutico continuo en el tejido conectivo profundo?",
        opciones: [
            "A) Estimulación neuromuscular directa de fibras tipo A-alfa",
            "B) Incremento de la temperatura tisular por conversión de energía acústica en térmica, aumentando la extensibilidad del colágeno",
            "C) Crioterapia celular por cavitación inestable",
            "D) Bloqueo galvánico de nociceptores mielinizados"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ultrasonido continuo produce un efecto térmico debido a la fricción molecular provocada por las ondas sonoras, aumentando el flujo sanguíneo y la elasticidad tisular."
    },
    {
        id: 7,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál es una acción prioritaria de prevención primaria de discapacidad en la comunidad dirigida a adultos mayores?",
        opciones: [
            "A) Prescripción de prótesis totales de cadera articuladas",
            "B) Rehabilitación funcional intrahospitalaria tras un evento cerebrovascular",
            "C) Programas comunitarios de ejercicio físico multifactorial para prevención de caídas y fragilidad",
            "D) Adaptación quirúrgica de amputaciones transtibiales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La prevención primaria busca evitar la aparición de la enfermedad o déficit; los programas de fuerza y equilibrio en la comunidad reducen el riesgo de caídas y fracturas antes de que ocurran."
    },
    {
        id: 8,
        area: "Gestión y Administración en Salud",
        pregunta: "De acuerdo con las Normas Oficiales Mexicanas del Expediente Clínico (NOM-004-SSA3-2012), ¿cuánto tiempo como mínimo debe conservarse el expediente de un paciente en una clínica de fisioterapia a partir de la fecha del último acto médico?",
        opciones: [
            "A) 1 año",
            "B) 3 años",
            "C) 2 años",
            "D) 5 años"
        ],
        respuestaCorrecta: 3,
        explicacion: "La NOM-004-SSA3-2012 establece que los expedientes clínicos deben conservarse un periodo mínimo de 5 años contados a partir de la fecha del último acto médico registrado."
    },
    {
        id: 9,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la prueba de Daniel's para la fuerza muscular, un paciente logra completar todo el rango de movimiento articular disponible contra la gravedad, pero no tolera ninguna resistencia manual adicional. ¿Qué grado de fuerza muscular corresponde?",
        opciones: [
            "A) Grado 3 (Regular)",
            "B) Grado 2 (Deficiente)",
            "C) Grado 4 (Bueno)",
            "D) Grado 1 (Vestigios)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Grado 3 de la escala de Daniels indica que el músculo es capaz de vencer la gravedad en todo el rango articular, pero sucumbe inmediatamente ante la aplicación de una resistencia externa."
    },
    {
        id: 10,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la fase aguda de un linfedema secundario a mastectomía (Fase 1), ¿cuál es el pilar de tratamiento fisioterapéutico conservador recomendado por el consenso internacional?",
        opciones: [
            "A) Diatermia por onda corta capacitiva de alta intensidad",
            "B) Terapia Física Compleja (Drenaje Linfático Manual, vendaje multicapa de corta tracción, cuidado de la piel y ejercicios miolinfocinéticos)",
            "C) Inmovilización rígida del miembro superior afectado mediante férula de yeso",
            "D) Inmersión en tina de hidromasaje a 42 °C"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Terapia Física Descongestiva Compleja es el Gold Standard para reducir el volumen de linfa mediante drenaje linfático manual y vendajes de baja elasticidad (corta tracción)."
    },
    {
        id: 11,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "Un fisioterapeuta diseña un programa de ergonomía en una planta ensambladora para prevenir trastornos musculoesqueléticos. ¿A qué nivel de atención en salud pertenece esta intervención?",
        opciones: [
            "A) Nivel Terciario",
            "B) Nivel Cuaternario",
            "C) Nivel Primario",
            "D) Nivel Secundario"
        ],
        respuestaCorrecta: 2,
        explicacion: "La promoción de la salud ocupacional y el análisis ergonómico preventivo para evitar lesiones antes de que se produzcan forman parte de la atención de Nivel Primario."
    },
    {
        id: 12,
        area: "Gestión y Administración en Salud",
        pregunta: "En el consentimiento informado para un tratamiento fisioterapéutico, ¿cuál de los siguientes elementos es jurídicamente indispensable?",
        opciones: [
            "A) El costo financiero desglosado de las sesiones de electroterapia",
            "B) La copia de la cédula fiscal de la clínica de rehabilitación",
            "C) La garantía por escrito de curación total al finalizar el tratamiento",
            "D) Explicación clara de los procedimientos, beneficios, riesgos potenciales y revocabilidad de la autorización por parte del paciente"
        ],
        respuestaCorrecta: 3,
        explicacion: "El consentimiento informado requiere explicitar los objetivos del tratamiento, procedimientos a realizar, posibles riesgos, alternativas y la aclaración de que el paciente puede revocarlo en cualquier momento."
    },
    {
        id: 13,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un lactante de 4 meses presenta preferencia postural del cuello con inclinación lateral hacia la derecha y rotación del mentón hacia la izquierda. A la palpación se aprecia un nódulo indoloro en el vientre muscular. ¿Cuál es el diagnóstico más probable?",
        opciones: [
            "A) Tortícolis muscular congénita del esternocleidomastoideo derecho",
            "B) Síndrome de Klippel-Feil",
            "C) Parálisis braquial obstétrica C5-C6",
            "D) Tortícolis paroxística benigna del lactante"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tortícolis muscular congénita involucra el acortamiento del esternocleidomastoideo, produciendo inclinación ipsilateral (derecha) y rotación contralateral (izquierda) del mentón."
    },
    {
        id: 14,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la rehabilitación neuromuscular mediante la técnica de Facilitación Neuromuscular Propioceptiva (FNP), ¿qué patrón de la diagonal D1 de miembro superior incluye la combinación de flexión, aducción y rotación externa de hombro?",
        opciones: [
            "A) Patrón D1 Extensión",
            "B) Patrón D1 Flexión ('Llevar la manzana a la boca')",
            "C) Patrón D2 Flexión ('Sacar la espada')",
            "D) Patrón D2 Extensión"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón de Flexión D1 de miembro superior integra flexión, aducción y rotación externa de hombro, flexión de codo y supinación de antebrazo con flexión de muñeca y dedos."
    },
    {
        id: 15,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué indicador epidemiológico mide la cantidad de casos nuevos de una alteración musculoesquelética en una población específica durante un periodo determinado?",
        opciones: [
            "A) Prevalencia puntual",
            "B) Tasa de letalidad",
            "C) Incidencia acumulada",
            "D) Sensibilidad diagnóstica"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Incidencia mide la aparición de casos nuevos de una enfermedad o condición en una población libre de la misma durante un tiempo especificado."
    },
    {
        id: 16,
        area: "Gestión de Administracion en Salud",
        pregunta: "¿En qué consiste el análisis FODA dentro de la planificación estratégica de un departamento de fisioterapia?",
        opciones: [
            "A) Evaluación exclusiva de los estados de pérdidas y ganancias financieras anuales",
            "B) Cálculo de las cargas biomecánicas de los fisioterapeutas en el área asistencial",
            "C) Medición de la satisfacción del paciente al momento del alta clínica",
            "D) Identificación de Fortalezas y Debilidades (internas) junto con Oportunidades y Amenazas (externas)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El FODA es la herramienta de gestión que diagnostica factores internos (Fortalezas y Debilidades) y externos (Oportunidades y Amenazas) para orientar planes estratégicos."
    },
    {
        id: 17,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al evaluar la marcha de un paciente se observa una caída de la pelvis hacia el lado contralateral durante la fase de apoyo monopodal de la pierna afectada. ¿Qué prueba funcional o signo clínico confirma esta deficiencia biomecánica?",
        opciones: [
            "A) Signo de Trendelenburg positivo por debilidad del glúteo medio",
            "B) Signo de Thomas positivo por acortamiento del psoas",
            "C) Prueba de Patrick-Fabere para la articulación sacroilíaca",
            "D) Prueba de Lachman para ligamentos cruzados"
        ],
        respuestaCorrecta: 0,
        explicacion: "El signo de Trendelenburg positivo se manifiesta cuando la pelvis cae hacia el lado que se eleva del suelo durante la carga monopodal, indicando debilidad o parálisis del músculo glúteo medio del lado apoyado."
    },
    {
        id: 18,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál es la frecuencia de estimulación recomendada para la aplicación de TENS convencional (de alta frecuencia) en el manejo del dolor agudo según la Teoría de la Comporta (Gate Control)?",
        opciones: [
            "A) 1 Hz a 5 Hz con alta intensidad electromotora",
            "B) 80 Hz a 120 Hz con intensidad sensitiva sin respuesta motora",
            "C) 200 Hz a 500 Hz con efecto térmico profundo",
            "D) 10 Hz a 20 Hz con estimulación nociceptiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "El TENS convencional utiliza altas frecuencias (80-120 Hz) e intensidades sensitivas para estimular las fibras mielinizadas $A\beta$, bloqueando la transmisión del dolor a nivel de la asta posterior de la médula."
    },
    {
        id: 19,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál es el modelo de atención médica enfocado en la Rehabilitación Basada en la Comunidad (RBC) impulsado por la OMS?",
        opciones: [
            "A) Institucionalización prolongada de pacientes con secuelas neuromotoras graves",
            "B) Enfoque biomédico enfocado únicamente en la resolución quirúrgica",
            "C) Estrategia de desarrollo comunitario para la equiparación de oportunidades e inclusión social de personas con discapacidad mediante esfuerzos combinados",
            "D) Atención privada especializada de alto costo tecnológico"
        ],
        respuestaCorrecta: 2,
        explicacion: "La RBC promueve la inclusión, accesibilidad y aprovechamiento de los recursos comunitarios locales para garantizar los derechos y rehabilitación de las personas con discapacidad."
    },
    {
        id: 20,
        area: "Gestión y Administración en Salud",
        pregunta: "En la triada de evaluación de la calidad de Avedis Donabedian, ¿qué dimensión evalúa los indicadores como la infraestructura física, equipamiento electroterapéutico y calificación del personal?",
        opciones: [
            "A) Proceso",
            "B) Resultado",
            "C) Calidez",
            "D) Estructura"
        ],
        respuestaCorrecta: 3,
        explicacion: "Según Donabedian, la 'Estructura' comprende los atributos materiales, organizacionales y humanos con los que cuenta la institución para prestar el servicio."
    },
    {
        id: 21,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al realizar la prueba de Spurling en la columna cervical, el paciente refiere la reproducción de dolor punzante irradiado hacia el dermatoma C6 del miembro superior. ¿Qué condición patológica sugiere este hallazgo?",
        opciones: [
            "A) Radiculopatía cervical por atrapamiento o compresión foraminal",
            "B) Inestabilidad ligamentosa atloidoaxoidea",
            "C) Síndrome del túnel carpiano bilateral",
            "D) Tendinopatía del supraespinoso"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Spurling (compresión axil con inclinación y extensión cervical) reduce el diámetro del agujero de conjunción, reproduciendo los síntomas de una radiculopatía cervical."
    },
    {
        id: 22,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En el protocolo de tratamiento de la Parálisis Facial Periférica de Bell en fase aguda, ¿cuál de los siguientes abordajes fisioterapéuticos está indicado prioritariamente?",
        opciones: [
            "A) Reeducación neuromuscular activa asistida, ejercicios frente al espejo y protección ocular",
            "B) Electroestimulación con corriente galvánica de alta intensidad hasta provocar fatiga facial",
            "C) Crioterapia directa prolongada sobre el agujero estilomastoideo",
            "D) Estiramiento pasivo forzado de los músculos denervados"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la fase aguda se busca la reeducación motora suave, simetría gestual y cuidado ocular; el uso de estimulación eléctrica agresiva en esta etapa está desaconsejado por el riesgo de sincinesias."
    },
    {
        id: 23,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué es la Accesibilidad Universal según las normativas de arquitectura urbanística e inclusión?",
        opciones: [
            "A) La construcción exclusiva de rampas en las entradas traseras de los edificios",
            "B) El cobro preferencial de servicios de transporte público",
            "C) La condición que deben cumplir los entornos, procesos, bienes y servicios para ser comprensibles, utilizables y practicables por todas las personas en condiciones de seguridad y comodidad",
            "D) El derecho a recibir subsidios económicos estatales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La accesibilidad universal garantiza que cualquier persona, independientemente de sus capacidades físicas o sensoriales, pueda ingresar, transitar y utilizar los espacios públicos de manera autónoma."
    },
    {
        id: 24,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué tipo de costo representa la compra de un equipo de ondas de choque extracorpóreas dentro del presupuesto de capital de una clínica de fisioterapia?",
        opciones: [
            "A) Costo variable operativo",
            "B) Gastos de administración corriente",
            "C) Costo financiero directo por nómina",
            "D) Inversión en activo fijo (CapEx)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La adquisición de equipamiento especializado de larga duración se clasifica como una inversión de capital en activos fijos (CapEx) sujeta a depreciación contable."
    },
    {
        id: 25,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un deportista de baloncesto presenta dolor acentuado en la cara anterior de la rodilla. A la palpación responde con dolor en el polo inferior de la rótula que se intensifica al realizar saltos repetidos. ¿Cuál es el diagnóstico funcional más probable?",
        opciones: [
            "A) Tendinopatía patelar (rodilla del saltador)",
            "B) Lesión del asa de balde del menisco medial",
            "C) Enfermedad de Osgood-Schlatter",
            "D) Esguince del ligamento colateral medial"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tendinopatía patelar cursa con dolor puntual en la inserción proximal del tendón rotuliano (polo inferior de la rótula) desencadenado por cargas de tracción repetitivas como el salto."
    },
    {
        id: 26,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la Prescripción de Ejercicio Terapéutico en un paciente con Enfermedad Arterial Periférica y claudicación intermitente, ¿cuál es la pauta metodológica óptima?",
        opciones: [
            "A) Ejercicio aeróbico de bajo impacto únicamente en bicicleta estática sin dolor",
            "B) Entrenamientos de caminata a intensidad moderada-alta en los que se permita alcanzar dolor de claudicación moderado, seguido de periodos de descanso hasta la remisión y reinicio del ciclo",
            "C) Reposo absoluto en cama con elevación de miembros inferiores",
            "D) Ejercicios isométricos de cuádriceps a máxima intensidad muscular"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las guías clínicas señalan que la caminata fraccionada alcanzando dolor leve-moderado estimula la colateralización vascular periférica y la tolerancia funcional a la marcha."
    },
    {
        id: 27,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿En qué consiste la prevención secundaria en el contexto de la rehabilitación cardíaca?",
        opciones: [
            "A) Detección precoz, control de factores de riesgo y rehabilitación metabólica en pacientes con cardiopatía establecida para evitar eventos cardiovasculares recurrentes",
            "B) Campañas informativas sobre nutrición en escuelas primarias",
            "C) Cirugía de bypass aortocoronario de urgencia",
            "D) Reubicación laboral a puestos sin responsabilidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prevención secundaria actúa en individuos que ya han sufrido o presentan diagnóstico de la enfermedad, previniendo progresiones o complicaciones fatales."
    },
    {
        id: 28,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué herramienta del proceso administrativo permite verificar que el cumplimiento de los objetivos asistenciales del servicio de fisioterapia coincida con lo planeado?",
        opciones: [
            "A) Organigrama estructural",
            "B) Diagnóstico de necesidades",
            "C) Presupuesto de ingresos",
            "D) Función de Control y Auditoría"
        ],
        respuestaCorrecta: 3,
        explicacion: "La etapa de Control contrasta el desempeño y los resultados reales obtenidos frente a los estándares y metas definidos en la planeación para corregir desviaciones."
    },
    {
        id: 29,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al evaluar a un lactante de 8 meses, ¿qué reflejo primitivo debería encontrarse completamente integrado para permitir la sedestación independiente sin apoyo posterior?",
        opciones: [
            "A) Reflejo Tónico Asimétrico del Cuello (RTAC)",
            "B) Reflejo de Babinski",
            "C) Reflejo de Marcha Automática",
            "D) Reflejo Moro"
        ],
        respuestaCorrecta: 0,
        explicacion: "La persistencia del RTAC (reflejo del esgrimista) impide la simetría y estabilidad del tronco requerida para la sedestación autónoma y el control del centro de gravedad."
    },
    {
        id: 30,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la rehabilitación respiratoria de un paciente con Atelectasia en la base pulmonar derecha, ¿cuál es la posición posicional de drenaje/reexpansión y la técnica más indicada?",
        opciones: [
            "A) Decúbito supino con compresión abdominal",
            "B) Decúbito lateral izquierdo y ejercicios de expansión torácica con inspiraciones profundas y sostenidas (débito inspiratorio lento)",
            "C) Decúbito lateral derecho y tos provocada continua",
            "D) Posición de Trendelenburg pronunciada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Colocar el pulmón afectado en el supra-lateral (decúbito lateral izquierdo deja el pulmón derecho arriba) optimiza la ventilación por efectos de la gravedad y aumenta la compliance pulmonar regional."
    },
    {
        id: 31,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "Según el marco bioético fundamental, ¿a qué principio corresponde el derecho del paciente a tomar decisiones informadas sobre su propio cuerpo y aceptar o rechazar un plan de tratamiento?",
        opciones: [
            "A) Beneficencia",
            "B) No maleficencia",
            "C) Autonomía",
            "D) Justicia distributiva"
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio de Autonomía resguarda la capacidad de autodeterminación del paciente para decidir sobre las intervenciones que se realicen sobre su salud."
    },
    {
        id: 32,
        area: "Gestión y Administración en Salud",
        pregunta: "En la evaluación de la rentabilidad de un proyecto de apertura de un centro de fisioterapia, ¿qué significa que el Valor Presente Neto (VPN) sea mayor a cero ($VPN > 0$)?",
        opciones: [
            "A) Que el proyecto es financieramente inviable y generará pérdidas monetarias",
            "B) Que la tasa interna de retorno es inferior a la tasa de inflación anual",
            "C) Que los ingresos proyectados no cubren los costos fijos",
            "D) Que la inversión generará rendimientos por encima del costo de oportunidad del capital, agregando valor económico al inversionista"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un $VPN > 0$ confirma que el valor actualizado de los flujos de caja futuros excede el monto invertido inicialmente, recomendando la aceptación del proyecto financiero."
    },
    {
        id: 33,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude por dolor en el hombro dominante. En la exploración física presenta dolor intenso durante el arco de movimiento entre 60° y 120° de abducción activa. Las pruebas de Neer y Hawkins-Kennedy resultan positivas. ¿Cuál es la sospecha diagnóstica?",
        opciones: [
            "A) Síndrome de pinzamiento subacromial / tendinopatía del manguito rotador",
            "B) Capsulitis adhesiva en fase rígida",
            "C) Inestabilidad anterior glenohumeral",
            "D) Luxación acromioclavicular Grado III"
        ],
        respuestaCorrecta: 0,
        explicacion: "El arco doloroso entre 60° y 120° junto con la positividad en Neer y Hawkins-Kennedy es el patrón clásico de pinzamiento de las estructuras del espacio subacromial (tendón del supraespinoso/bursa)."
    },
    {
        id: 34,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál es el objetivo principal del método Klapp en el tratamiento de las escoliosis idiopáticas?",
        opciones: [
            "A) Reeducación estricta de la deambulación en barras paralelas",
            "B) Corrección de la deformidad espinal aprovechando la posición cuadrúpeda para descargar la columna vertebral de la gravedad",
            "C) Fortalecimiento estricto de los flexores de cadera en bipedestación",
            "D) Estimulación táctil mediante cepillado de dermatomas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El método Klapp se basa en la postura de gatas (cuadrupedual) para eliminar la fuerza axial de la gravedad sobre la columna, flexibilizar la curva y fortalecer la musculatura espinal."
    },
    {
        id: 35,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué factor contextual ambiental de la CIF puede actuar como una 'Barrera' para una persona con discapacidad motora?",
        opciones: [
            "A) Contar con una familia receptiva y contenedora",
            "B) La ausencia de rampas y elevadores en un edificio público de varios niveles",
            "C) Una actitud social empática y solidaria",
            "D) La disposición de una silla de ruedas motorizada adecuada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los factores ambientales de la CIF son barreras cuando condicionan, impiden o restringen el funcionamiento autónomo del sujeto en su comunidad."
    },
    {
        id: 36,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué mide el indicador de productividad 'Número de consultas por fisioterapeuta/hora' en un centro hospitalario?",
        opciones: [
            "A) La calidad técnica en la ejecución de las manipulaciones",
            "B) El grado de satisfacción percibido por los usuarios",
            "C) El rendimiento o eficiencia operativa en el uso del recurso humano asistencial",
            "D) La tasa de complicaciones mecánicas por electroterapia"
        ],
        respuestaCorrecta: 2,
        explicacion: "Es un indicador clásico de procesos y rendimiento que mide el volumen de servicio producido por unidad de tiempo y recurso laboral contratado."
    },
    {
        id: 37,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la evaluación neurológica de un paciente con sospecha de lesión de la motoneurona superior (evento cerebrovascular), ¿cuál de los siguientes signos clínicos confirma la hipertonía espástica?",
        opciones: [
            "A) Fenómeno de la navaja (resistencia inicial seguida de una liberación repentina dependiente de la velocidad)",
            "B) Flacidez muscular e hiporreflexia osteotendinosa severa",
            "C) Signo de la rueda dentada (rigidez extrapiramidal independiente de la velocidad)",
            "D) Miofasciculaciones espontáneas en reposo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La espasticidad es un trastorno motor caracterizado por un aumento velocidad-dependiente del reflejo miotático que presenta clásicamente el fenómeno de la navaja de muelle."
    },
    {
        id: 38,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la fase postquirúrgica inmediata de una reconstrucción de Ligamento Cruzado Anterior (LCA) con injerto autólogo, ¿cuál es el objetivo fisioterapéutico prioritario en las primeras dos semanas?",
        opciones: [
            "A) Lograr la hipertrofia concéntrica máxima del cuádriceps en cadena abierta",
            "B) Lograr la extensión completa de la rodilla y reducir la efusión/inflamación articular",
            "C) Iniciar trote suave en cinta rodante a 8 km/h",
            "D) Mantener la rodilla fija en flexión a 90° durante 21 días"
        ],
        respuestaCorrecta: 1,
        explicacion: "Recuperar la extensión completa activa de rodilla tempranamente evita la artrofibrosis y el déficit permanente de extensión; asimismo la modulación del edema es vital."
    },
    {
        id: 39,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué estudio epidemiológico se caracteriza por seleccionar a un grupo de individuos expuestos a un factor de riesgo y a un grupo no expuesto, siguiéndolos a lo largo del tiempo para evaluar la aparición del efecto?",
        opciones: [
            "A) Estudio de Casos y Controles",
            "B) Estudio Transversal Analítico",
            "C) Estudio de Cohorte",
            "D) Ensayo Clínico Cruzado"
        ],
        respuestaCorrecta: 2,
        explicacion: "El estudio de Cohorte es prospectivo (o retrospectivo) y parte de la causa/exposición hacia el efecto, permitiendo calcular la incidencia de una condición de salud."
    },
    {
        id: 40,
        area: "Gestión y Administración en Salud",
        pregunta: "En la administración de servicios de salud, ¿qué es un Manual de Procedimientos?",
        opciones: [
            "A) La lista de los sueldos del personal de recepción",
            "B) El reglamento interno de faltas e incidencias",
            "C) La memoria fotográfica de los eventos académicos",
            "D) Un documento formal que describe de manera detallada y secuencial las operaciones y pasos a seguir para ejecutar los procesos asistenciales o administrativos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El manual de procedimientos estandariza las acciones operativas en la clínica, garantizando seguridad, eficiencia y consistencia en los protocolos aplicados a los pacientes."
    },
    {
        id: 41,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al evaluar la sensibilidad superficial en un paciente con lesión medular, ¿qué dermatoma se examina al aplicar el estímulo táctil sobre la línea medioclavicular a la altura del pezón?",
        opciones: [
            "A) Dermatoma T4",
            "B) Dermatoma C6",
            "C) Dermatoma T10",
            "D) Dermatoma L2"
        ],
        respuestaCorrecta: 0,
        explicacion: "Según la escala ASIA para el examen neurológico de la lesión medular, el dermatoma T4 se localiza en el cuarto espacio intercostal a nivel de la línea mamilar/pezón."
    },
    {
        id: 42,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En un paciente con EPOC que cursa con retención severa de secreciones bronquiales en segmentos basales, ¿cuál de las siguientes técnicas de fisioterapia respiratoria está enfocada en la movilización de moco mediante variaciones del flujo aéreo?",
        opciones: [
            "A) Vibraciones de alta frecuencia con compresor",
            "B) Drenaje Autógeno y Técnica de Espiración Forzada (Huffing)",
            "C) Percusión torácica rápida sobre la parrilla costal anterior",
            "D) Ejercicios de fortalecimiento diafragmático con cargas de pesas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Drenaje Autógeno y la TÉF movilizan secreciones periféricas hacia vías aéreas centrales mediante la modulación del volumen y velocidad espiratoria sin colapsar la vía aérea."
    },
    {
        id: 43,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "De acuerdo con la OMS, ¿cuál es la recomendación mínima de actividad física aeróbica de intensidad moderada a la semana para adultos de 18 a 64 años?",
        opciones: [
            "A) 60 minutos totales repartidos en dos días",
            "B) 600 minutos semanales exclusivamente intensos",
            "C) 150 a 300 minutos a la semana",
            "D) 30 minutos una vez al mes"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las directrices mundiales de la OMS sugieren que todos los adultos deben realizar entre 150 y 300 minutos de actividad física aeróbica moderada (o 75-150 minutos intensos) semanalmente."
    },
    {
        id: 44,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué principio bioético se transgrede cuando un fisioterapeuta aplica una técnica invasiva (como punción seca) para la cual no cuenta con la capacitación formal ni certificación acreditada?",
        opciones: [
            "A) Autonomía",
            "B) Justicia",
            "C) Equidad",
            "D) No maleficencia (primum non nocere) e incompetencia profesional"
        ],
        respuestaCorrecta: 3,
        explicacion: "Incurrir en técnicas para las cuales no se tiene el perfil de competencia expone al paciente a riesgos innecesarios o impericia, violando el principio cardinal de No Maleficencia."
    },
    {
        id: 45,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude por entumecimiento y disestesias en el primer, segundo y tercer dedo de la mano derecha. Los síntomas empeoran por la noche. Al percutir sobre el retináculo flexor de la muñeca se desencadena una descarga eléctrica hacia los dedos (Signo de Tinel positivo). ¿Cuál es el nervio periférico atrapado?",
        opciones: [
            "A) Nervio mediano en el canal carpiano",
            "B) Nervio cubital en el canal de Guyon",
            "C) Nervio radial en el tabique intermuscular",
            "D) Nervio axilar en el espacio cuadrilátero"
        ],
        respuestaCorrecta: 0,
        explicacion: "El signo de Tinel en la cara anterior de la muñeca evoca parestesias sobre el territorio del nervio mediano, hallazgo característico del Síndrome del Túnel Carpiano."
    },
    {
        id: 46,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la reeducación neuromuscular con el concepto Bobath en pacientes hemipléjicos, ¿cuál es el objetivo central del manejo de los Puntos Clave de Control (PCC)?",
        opciones: [
            "A) Provocar el reflejo de estiramiento masivo para incrementar el tono",
            "B) Inhibir patrones tónicos anormales y facilitar patrones de movimiento coordinados y reacciones posturales normales",
            "C) Fijar las articulaciones distalmente mediante ortesis rígidas permanente",
            "D) Aplicar estimulación galvánica repetitiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "En Bobath, la manipulación de los Puntos Clave de Control (centrales y periféricos) permite al terapeuta guiar las respuestas motoras, inhibiendo la espasticidad y facilitando el movimiento voluntario."
    },
    {
        id: 47,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál es el objetivo primordial del análisis de puestos de trabajo desde la ergonomía en la salud ocupacional?",
        opciones: [
            "A) Incrementar la carga horaria sin pausas activas",
            "B) Sancionar a los trabajadores desmotivados",
            "C) Adaptar el puesto de trabajo a las capacidades físicas y biomecánicas del trabajador para reducir el riesgo de lesiones musculoesqueléticas",
            "D) Disminuir los costos del material de producción"
        ],
        respuestaCorrecta: 2,
        explicacion: "La ergonomía busca adaptar el trabajo al hombre (interfaces, cargas, herramientas), previniendo microtraumatismos repetitivos y desórdenes biomecánicos acumulativos."
    },
    {
        id: 48,
        area: "Gestión y Administración en Salud",
        pregunta: "En el marco de la gestión ambiental hospitalaria, ¿cómo deben clasificarse y desecharse las agujas utilizadas en procedimientos de punción seca o acupuntura fisioterapéutica?",
        opciones: [
            "A) En bolsas de plástico transparente de basura común",
            "B) En recipientes rígidos de polipropileno de color rojo para punzocortantes RPBI",
            "C) En contenedores amarillos de residuos patológicos",
            "D) En cajas de cartón selladas con cinta adhesiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Por norma de Residuos Peligrosos Biológico-Infecciosos (RPBI), todos los objetos punzocortantes metálicos en contacto con fluidos o sangre deben depositarse en contenedores rígidos rojos."
    },
    {
        id: 49,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al examinar la articulación del hombro en un paciente deportista, se realiza la prueba de O'Brien (Active Compression Test). El paciente manifiesta dolor profundo con el brazo en flexión de 90°, aducción de 10° y rotación interna, el cual disminuye significativamente cuando se repite la prueba en rotación externa. ¿Qué lesión anatómica sugiere este hallazgo?",
        opciones: [
            "A) Lesión del labrum superior de anterior a posterior (Lesión SLAP)",
            "B) Tendinopatía del subescapular",
            "C) Inestabilidad posterior de la clavícula",
            "D) Bursitis deltoidea aguda"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de O'Brien es altamente específica para tensionar el anclaje de la porción larga del bíceps en el labrum superior; el dolor en rotación interna que se alivia en supinación/rotación externa indica lesión SLAP."
    },
    {
        id: 50,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál es la dosis y modalidad de Láser Terapéutico (LLLT) indicada para favorecer el proceso de cicatrización y reparación tisular en una úlcera por presión en fase de granulación?",
        opciones: [
            "A) Láser de alta potencia desbridante con efecto ablativo",
            "B) Aplicación puntual con baja energía ($1\\text{ a }4\\text{ J/cm}^2$) con longitud de onda roja o infrarroja cercana para bioestimulación celular",
            "C) Emisión térmica continua por más de 60 minutos",
            "D) Barrido con intensidad destructiva de $50\\text{ J/cm}^2$"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fotobiomodulación (láser de baja potencia) en dosis de $1\\text{ a }4\\text{ J/cm}^2$ estimula la síntesis de ATP mitocondrial, proliferación de fibroblastos y síntesis de colágeno sin generar efecto térmico."
    },
    {
        id: 51,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "En una comunidad rural se observa una alta prevalencia de dolor lumbar en agricultores. ¿Qué estrategia de educación para la salud es más pertinente?",
        opciones: [
            "A) Entrega de medicamentos analgésicos narcóticos sin prescripción",
            "B) Recomendación de reposo permanente en cama durante la cosecha",
            "C) Talleres participativos de 'Escuela de Espalda' y ergonomía del levantamiento de cargas adaptados a sus labores de campo",
            "D) Derivación inmediata a cirugía de fusión espinal"
        ],
        respuestaCorrecta: 2,
        explicacion: "La educación en salud mediante 'Escuela de Espalda' adaptada al contexto comunitario capacita a la población para modificar factores biomecánicos de riesgo y autogestionar la salud de su columna."
    },
    {
        id: 52,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Cuál de las siguientes acciones forma parte del mantenimiento preventivo del equipamiento biomecánico y de electroterapia en un servicio de rehabilitación?",
        opciones: [
            "A) Reparar el equipo únicamente cuando eche humo o deje de encender",
            "B) Ignorar las alertas de calibración para no suspender el servicio",
            "C) Reemplazar fusibles por alambres de cobre en caso de falla de corriente",
            "D) Inspecciones periódicas programadas, limpieza de electrodos, verificación de fugas de corriente y calibración anual por personal técnico certificado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El mantenimiento preventivo sistematizado asegura el funcionamiento adecuado del equipo, preserva la seguridad del paciente ante descargas y extiende la vida útil de los activos."
    },
    {
        id: 53,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "En la evaluación postfisioterapéutica de un paciente postoperado de rodilla, ¿qué escala validada es la más adecuada para medir el nivel de funcionalidad subjetiva y síntomas en lesiones de rodilla?",
        opciones: [
            "A) Escala de Cuestionario IKDC (International Knee Documentation Committee) o Lysholm",
            "B) Escala de Tinetti",
            "C) Índice de Barthel",
            "D) Escala de Ashworth Modificada"
        ],
        respuestaCorrecta: 0,
        explicacion: "Tanto el IKDC como la escala de Lysholm son instrumentos validados específicos para evaluar la función, síntomas y capacidad deportiva percibida en articulaciones con patología de rodilla."
    },
    {
        id: 54,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Qué técnica de Terapia Manual involucra la aplicación de un impulso de alta velocidad y baja amplitud (HVLA) al final del rango articular para restaurar el juego articular?",
        opciones: [
            "A) Movilización pasiva oscilatoria Grado I de Maitland",
            "B) Manipulación articular con Thrust",
            "C) Liberación miofascial posicional",
            "D) Tracción cervical continua de baja carga"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las manipulaciones articulares Grado V (Thrust) utilizan impulsos de alta velocidad y corta amplitud (HVLA) dirigidos a superar la barrera restrictiva articular dentro del límite anatómico."
    },
    {
        id: 55,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál es el propósito del marco conceptual de los 'Determinantes Sociales de la Salud' según la OMS?",
        opciones: [
            "A) Demostrar que la salud depende exclusivamente de la genética individual",
            "B) Justificar la falta de inversión en hospitales públicos",
            "C) Explicar cómo las condiciones en que las personas nacen, crecen, viven, trabajan y envejecen impactan en las inequidades de salud",
            "D) Clasificar las bacterias según su resistencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los Determinantes Sociales analizan el contexto estructural (pobreza, educación, vivienda, trabajo) que modela el estado de salud e induce desigualdades injustas en las poblaciones."
    },
    {
        id: 56,
        area: "Gestión y Administración en Salud",
        pregunta: "En la planificación de un servicio asistencial de fisioterapia, ¿qué es la 'Capacidad Instalada'?",
        opciones: [
            "A) El número total de folletos informativos impresos en el mes",
            "B) La cantidad de pacientes que no asistieron a su cita cancelada",
            "C) El dinero disponible en la caja chica para compras de papelería",
            "D) El volumen máximo potencial de atención que la clínica puede brindar en un tiempo dado con los recursos de infraestructura, espacio y personal disponibles"
        ],
        respuestaCorrecta: 3,
        explicacion: "La capacidad instalada representa el límite máximo de producción del servicio de salud determinado por sus factores de producción físicos (cubículos, aparatos) y humanos disponibles."
    },
    {
        id: 57,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente de 65 años acude por inestabilidad al caminar. En la prueba de Romberg, el paciente mantiene el equilibrio con los ojos abiertos, pero al cerrar los ojos comienza a oscilar severamente y pierde el equilibrio hacia un lado. ¿Qué tipo de ataxia sugiere este resultado?",
        opciones: [
            "A) Ataxia de origen propioceptivo / sensorial",
            "B) Ataxia cerebelosa pura",
            "C) Ataxia frontal por hidrocefalia",
            "D) Parálisis vestibular aguda periférica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un signo de Romberg positivo (pérdida del equilibrio marcada solo al anular la visión) indica un déficit de la vía somatosensorial o cordones posteriores (propiocepción consciente)."
    },
    {
        id: 58,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En un paciente con Parálisis Cerebral Infantil de tipo Diplejía Espástica, ¿cuál de los siguientes objetivos del posicionamiento mediante ortesis tobillo-pie (AFO) es el más relevante?",
        opciones: [
            "A) Evitar el desarrollo del reflejo de deglución",
            "B) Prevenir el equinismo estructurado de tobillo y alineación de la marcha en tijera",
            "C) Inmovilizar la articulación de la cadera en abducción pura",
            "D) Reemplazar la fuerza muscular de los extensores de muñeca"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los AFOs mantienen el tobillo en posición neutra a 90°, alineando el vector de reacción del suelo, previniendo la contractura en equino y mejorando la biomecánica de la marcha."
    },
    {
        id: 59,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál de los siguientes es un instrumento de cribado (screening) ampliamente utilizado para evaluar el desarrollo psicomotor en niños menores de 5 años a nivel comunitario?",
        opciones: [
            "A) Índice de Discapacidad de Oswestry",
            "B) Escala de Tinetti de la Marcha",
            "C) Prueba de Desarrollo Infantil Denver II (o EDI en México)",
            "D) Cuestionario DASH"
        ],
        respuestaCorrecta: 2,
        explicacion: "La prueba Denver II (y la Evaluación del Desarrollo Infantil EDI) son herramientas estandarizadas de tamizaje para detectar retrasos del desarrollo en motor grueso, fino, lenguaje y social."
    },
    {
        id: 60,
        area: "Gestión y Administración en Salud",
        pregunta: "Un fisioterapeuta atiende a un paciente en el ámbito privado y detecta sospecha clínica severa de fractura no diagnosticada tras un trauma. ¿Cuál es la conducta ético-legal apropiada?",
        opciones: [
            "A) Iniciar de inmediato tracciones de alta velocidad",
            "B) Aplicar ultrasonido continuo para reducir el edema tumefacto",
            "C) Dar de alta al paciente sin dar explicaciones",
            "D) Interrumpir la intervención fisioterapéutica y derivar inmediatamente al paciente con el médico especialista (Traumatólogo) adjuntando nota de referencia"
        ],
        respuestaCorrecta: 3,
        explicacion: "Ante signos de alarma o sospecha de patología estructural no confirmada que contraindique el abordaje, el fisioterapeuta debe diferir el tratamiento y derivar interdisciplinariamente."
    },
    {
        id: 61,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la inspección postural de la columna vertebral en el plano sagital, se observa un incremento acentuado de la convexidad posterior de la columna torácica. ¿Cómo se denomina esta alteración postural?",
        opciones: [
            "A) Hiperquifosis dorsal",
            "B) Hiperlordosis lumbar",
            "C) Escoliosis estructurada",
            "D) Rectificación cervical"
        ],
        respuestaCorrecta: 0,
        explicacion: "La hiperquifosis es el aumento anormal de la curvatura fisiológica de convexidad posterior en la región dorsal o torácica de la columna vertebral."
    },
    {
        id: 62,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la fase de remodelación de un esguince de ligamento colateral medial de rodilla (semana 4), ¿cuál es el estímulo mecánico adecuado para orientar correctamente las fibras de colágeno recién sintetizadas?",
        opciones: [
            "A) Inmovilización continua con yeso circular por 30 días más",
            "B) Carga progresiva controlada, ejercicios de fortalecimiento muscular y estiramientos en el eje longitudinal del tejido",
            "C) Aplicación de hielo continuo por 48 horas",
            "D) Reposo en descarga absoluta en cama"
        ],
        respuestaCorrecta: 1,
        explicacion: "De acuerdo con la ley de Davis, los tejidos blandos se remodelan a lo largo de las líneas de tensión mecánica; el ejercicio y carga graduada orientan las fibras de colágeno funcionalmente."
    },
    {
        id: 63,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué organismo internacional aprobó la Convención sobre los Derechos de las Personas con Discapacidad (CDPD) en 2006 para promover, proteger y asegurar sus derechos humanos?",
        opciones: [
            "A) Organización de Estados Americanos (OEA)",
            "B) Banco Mundial",
            "C) Organización de las Naciones Unidas (ONU)",
            "D) Confederación Mundial de Fisioterapia (World Physiotherapy)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La ONU adoptó la Convención sobre los Derechos de las Personas con Discapacidad en 2006, un tratado internacional vinculante que impulsa el cambio hacia un modelo de derechos humanos."
    },
    {
        id: 64,
        area: "Gestión y Administración en Salud",
        pregunta: "En el análisis financiero de un proyecto de fisioterapia, ¿qué se entiende por 'Punto de Equilibrio' (Break-Even Point)?",
        opciones: [
            "A) El momento en que la clínica se queda sin fondos en el banco",
            "B) La cantidad de atenciones o ingresos en que los costos totales se igualan exactamente con los ingresos totales, no existiendo pérdida ni ganancia",
            "C) El precio de la consulta fijado por la competencia externa",
            "D) El margen de impuestos pagados a la hacienda pública"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Punto de Equilibrio identifica el nivel de actividad requerida donde la utilidad operativa es cero ($Ingresos Totales = Costos Fijos + Costos Variables$). Al superarlo se obtienen ganancias."
    },
    {
        id: 65,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude refiriendo adormecimiento y pérdida de fuerza en los músculos extensores de la muñeca y de los dedos (mano caída o péndula). ¿Qué nervio periférico presenta una lesión compresiva?",
        opciones: [
            "A) Nervio radial",
            "B) Nervio musculocutáneo",
            "C) Nervio cubital",
            "D) Nervio mediano"
        ],
        respuestaCorrecta: 0,
        explicacion: "El nervio radial inerva la musculatura extensora del codo, muñeca y dedos. Su parálisis genera la deformidad típica en 'mano caída' e incapacidad para extender la muñeca."
    },
    {
        id: 66,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En el tratamiento del síndrome de dolor miofascial, ¿qué característica define a un Punto Gatillo Miofascial (PGM) Activo frente a uno Latente?",
        opciones: [
            "A) El activo solo causa dolor al ser palpado profundamente con $10\\text{ kg/cm}^2$",
            "B) El activo causa dolor referido espontáneo y reproduce el dolor conocido por el paciente, mientras que el latente solo duele a la palpación directa",
            "C) El activo no presenta banda tensa palpable",
            "D) El latente provoca espasmo arterial en el miembro inferior"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un PGM Activo es clínicamente sintomático de forma espontánea o en movimientos funcionales; un PGM Latente no produce dolor espontáneo pero sí restricción y respuesta de espasmo local."
    },
    {
        id: 67,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué concepto se refiere al número total de casos (tanto antiguos como nuevos) de una enfermedad existentes en una población determinada en un punto específico del tiempo?",
        opciones: [
            "A) Incidencia acumulada",
            "B) Tasa de ataque",
            "C) Prevalencia",
            "D) Densidad de incidencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Prevalencia cuantifica la proporción de individuos en una población que padecen la condición de estudio en un momento dado (casos totales / población)."
    },
    {
        id: 68,
        area: "Gestión y Administración en Salud",
        pregunta: "De acuerdo con el Código Ético de la Fisioterapia, ¿cuál es la conducta esperada ante el manejo de la información confidencial y el historial clínico del paciente?",
        opciones: [
            "A) Publicar los casos en redes sociales con nombre y fotografía sin autorización previa",
            "B) Compartir los expedientes con empresas comerciales de venta de insumos",
            "C) Comentar los detalles diagnósticos del paciente en áreas comunes del hospital",
            "D) Resguardar con estricto secreto profesional toda la información, compartiéndola únicamente con el equipo de salud tratante o bajo mandato judicial"
        ],
        respuestaCorrecta: 3,
        explicacion: "El secreto profesional y el principio de confidencialidad protegen la privacidad de los datos de salud del usuario según normas legales y bioéticas internacionales."
    },
    {
        id: 69,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al realizar la evaluación de los pares craneales, se solicita al paciente que saque la lengua. Se observa una desviación clara de la punta de la lengua hacia el lado izquierdo. ¿Qué par craneal está lesionado?",
        opciones: [
            "A) XII Par Craneal (Nervio Hipogloso izquierdo)",
            "B) V Par Craneal (Nervio Trigémino)",
            "C) VII Par Craneal (Nervio Facial derecho)",
            "D) IX Par Craneal (Nervio Glosofaríngeo)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El nervio hipogloso (XII par) inerva la musculatura motora de la lengua. En una lesión periférica, al protruir la lengua esta se desvía hacia el lado lesionado por la acción no compensada del geniogloso sano contralateral."
    },
    {
        id: 70,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la Prescripción de Ejercicio en Pacientes con Diabetes Mellitus Tipo 2, ¿cuál es un riesgo metabólico agudo que el fisioterapeuta debe vigilar antes y después de la sesión de entrenamiento?",
        opciones: [
            "A) Hiperuricemia asintomática",
            "B) Hipoglucemia inducida por el ejercicio (glucemia $< 70\\text{ mg/dL}$)",
            "C) Alcalosis respiratoria",
            "D) Hipocalcemia aguda"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ejercicio incrementa la captación muscular de glucosa no dependiente de insulina, lo que sumado a la medicación hipoglucemiante puede precipitar una crisis de hipoglucemia."
    },
    {
        id: 71,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué es el Índice de Katz en la evaluación de la salud pública comunitaria en ancianos?",
        opciones: [
            "A) Una prueba de esfuerzo metabólico en cinta rodante",
            "B) Una escala que evalúa el grado de independencia en las Actividades Básicas de la Vida Diaria (ABVD) como bañarse, vestirse, usar el WC, movilidad, continencia y alimentación",
            "C) Un índice de riesgo para accidentes cerebrovasculares",
            "D) Una prueba de agudeza visual y auditiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Índice de Katz es uno de los instrumentos más validados para cuantificar la autonomía funcional del adulto mayor en las actividades fundamentales del día a día."
    },
    {
        id: 72,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué documento formal debe elaborar el fisioterapeuta tratante al concluir el ciclo de atención de un paciente o ante su traslado a otra institución?",
        opciones: [
            "A) Factura fiscal de cobro directo",
            "B) Carta de recomendación laboral",
            "C) Nota de Egreso o Resumen Clínico de Alta Fisioterapéutica",
            "D) Receta médica de prescripción farmacológica"
        ],
        respuestaCorrecta: 2,
        explicacion: "De acuerdo con la reglamentación del expediente clínico, la Nota de Egreso sintetiza el diagnóstico de ingreso, intervenciones realizadas, evolución, objetivos alcanzados y recomendaciones."
    },
    {
        id: 73,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude con dolor en el talón que se intensifica notablemente con los primeros pasos por la mañana al levantarse de la cama. La palpación en la tuberosidad medial del calcáneo despierta un dolor agudo. ¿Cuál es la sospecha diagnóstica?",
        opciones: [
            "A) Ruptura completa del tendón de Aquiles",
            "B) Tenosinovitis del peroneo corto",
            "C) Fasciitis plantar",
            "D) Neuroma de Morton"
        ],
        respuestaCorrecta: 2,
        explicacion: "El dolor matutino 'de primeros pasos' localizado puntualmente en la inserción calcánea medial de la fascia plantar es el síntoma patognomónico de la fasciitis plantar."
    },
    {
        id: 74,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál de los siguientes efectos fisiológicos se obtiene mediante la aplicación de Crioterapia (compresas frías o hielo) durante los primeros 15 minutos de un trauma agudo?",
        opciones: [
            "A) Vasoconstricción periférica, disminución de la velocidad de conducción nerviosa, reducción del metabolismo celular y disminución del edema",
            "B) Vasodilatación masiva e incremento del flujo sanguíneo tisular",
            "C) Aumento de la flexibilidad celular y elasticidad del colágeno",
            "D) Estimulación directa de los osteoblastos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La crioterapia inicial provoca vasoconstricción local, reduce la respuesta metabólica a la hipoxia secundaria y desacelera la conducción nociceptiva, conteniendo la inflamación."
    },
    {
        id: 75,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "En un programa de prevención de lesiones en jóvenes deportistas de fútbol, la fase de 'Calentamiento Neuromuscular FIFA 11+' busca actuar sobre:",
        opciones: [
            "A) La fuerza máxima de levantamiento de pesas",
            "B) La reducción del riesgo de lesiones de extremidades inferiores (especialmente ligamento cruzado anterior y esguinces) mediante fuerza, propiocepción y control pliométrico",
            "C) La agudeza táctica de juego",
            "D) El tratamiento postquirúrgico de menisectomías"
        ],
        respuestaCorrecta: 1,
        explicacion: "FIFA 11+ es un programa preventivo basado en evidencia que disminuye drásticamente las lesiones severas alineando patrones de salto, fuerza excéntrica e inestabilidad dinámica."
    },
    {
        id: 76,
        area: "Gestión y Administración en Salud",
        pregunta: "En la administración de servicios de salud, ¿qué es la 'Misión' de una organización o centro de rehabilitación?",
        opciones: [
            "A) El estado futuro deseado a 20 años",
            "B) La lista de los competidores locales",
            "C) La declaración del propósito fundamental, razón de ser y función actual de la institución en beneficio de sus usuarios",
            "D) El desglose de impuestos del ejercicio fiscal"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Misión define el propósito operativo actual de la empresa (qué hace, para quién lo hace y bajo qué valores trabaja)."
    },
    {
        id: 77,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la evaluación estática de la marcha en el plano frontal, se observa que la rodilla derecha se desplaza medialmente colapsando hacia la línea media, asociada a una pronación del pie. ¿Qué alteración alineacional se presenta?",
        opciones: [
            "A) Genu varo",
            "B) Genu recurvatum",
            "C) Genu flexum",
            "D) Genu valgo dinámico"
        ],
        respuestaCorrecta: 3,
        explicacion: "El genu valgo dinámico es el colapso medial del complejo cadera-rodilla-tobillo impulsado comúnmente por debilidad de abductores/rotadores externos de cadera."
    },
    {
        id: 78,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Qué tipo de corriente eléctrica monofásica impulsada por pulsos exponenciales es la adecuada para la estimulación de un músculo denervado por sección nerviosa periférica completa?",
        opciones: [
            "A) Corriente Galvánica continua de 50 mA o Impulsos de Larga Duración ($> 100\\text{ ms}$)",
            "B) TENS convencional de $100\\text{ Hz}$",
            "C) Corrientes rusas (Kotz) de alta frecuencia",
            "D) Corriente de alta frecuencia d'Arsonval"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un músculo sin inervación carece de la capacidad de responder a estímulos breves; requiere pulsos de muy larga duración ($100-300\\text{ ms}$) para despolarizar directamente la membrana sarcolémica."
    },
    {
        id: 79,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué se entiende por 'Iniquidad en Salud' en el ámbito epidemiológico comunitario?",
        opciones: [
            "A) Las diferencias biológicas inalterables entre edades",
            "B) Las variaciones genéticas del metabolismo individual",
            "C) Las desigualdades en salud que son innecesarias, evitables, e injustas, derivadas de determinantes sociales desfavorables",
            "D) El cobro equitativo de aranceles de atención"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las inequidades son diferencias sistémicas e injustas en el estado de salud de distintos grupos sociales que podrían ser prevenidas con políticas públicas adecuadas."
    },
    {
        id: 80,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué es el organigrama en la estructura organizacional de un hospital?",
        opciones: [
            "A) La bitácora de mantenimiento de electroterapia",
            "B) La lista de los proveedores de insumos",
            "C) El mapa de rutas de evacuación ante incendios",
            "D) La representación gráfica de la estructura formal de la institución, mostrando las jerarquías, líneas de autoridad, comunicación y departamentos existentes"
        ],
        respuestaCorrecta: 3,
        explicacion: "El organigrama esquematiza la división del trabajo, niveles jerárquicos y cadenas de mando dentro de la organización hospitalaria."
    },
    {
        id: 81,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude por dolor radicular en el dermatoma L5/S1 del miembro inferior derecho. Al realizar la prueba de elevación de la pierna recta (Prueba de Lasègue), el paciente refiere dolor lancinante radicular a los 35° de elevación. ¿Qué patología se sospecha?",
        opciones: [
            "A) Hernia discal lumbar con compromiso radicular de L5 o S1",
            "B) Espondilolistesis de Grado IV fija",
            "C) Síndrome del músculo piriforme puro",
            "D) Trocanteritis glútea derecha"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un Lasègue positivo entre los 30° y 70° de flexión de cadera con rodilla en extensión tensiona el nervio ciático y las raíces lumbosacras, sugerente de conflicto discorradicular."
    },
    {
        id: 82,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la rehabilitación de un paciente con Enfermedad de Parkinson en Estadio II de Hoehn y Yahr, ¿cuál de las siguientes estrategias es altamente efectiva para superar los episodios de congelamiento de la marcha (Freezing)?",
        opciones: [
            "A) Uso de claves o estímulos externos (auditivos rítmicos con metrónomo, visuales con líneas en el suelo o táctiles)",
            "B) Fijación del tronco mediante ortesis toracolumbar rígida",
            "C) Reposo prolongado en cama para evitar caídas",
            "D) Ejercicios de fortalecimiento muscular isométrico puro de miembros superiores"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las claves externas (cues) auditivas, visuales o somatosensoriales bypassan los circuitos alterados de los ganglios basales utilizando vías corticoespinales alternativas para desencadenar la marcha."
    },
    {
        id: 83,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Cuál de las siguientes acciones corresponde a la prevención terciaria de la salud?",
        opciones: [
            "A) Aplicación de vacunas contra el neumococo en adultos mayores",
            "B) Fisioterapia de rehabilitación funcional y readaptación en un paciente amputado de miembro inferior para evitar complicaciones y reintegrarlo a la sociedad",
            "C) Tamizaje mamográfico de rutina",
            "D) Uso de casco protector en motociclistas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prevención terciaria busca mitigar las secuelas permanentes de una enfermedad o lesión establecida, restaurando la función residual y evitando invalidez completa."
    },
    {
        id: 84,
        area: "Gestión y Administración en Salud",
        pregunta: "En la gestión de inventarios de un centro asistencial, ¿qué establece el principio PEPS (Primeras Entradas, Primeras Salidas)?",
        opciones: [
            "A) Que los insumos adquiridos más recientemente deben consumirse primero",
            "B) Que los insumos más caros se guardan bajo llave indefectiblemente",
            "C) Que los insumos y materiales que ingresaron primero al almacén sean los primeros en ser utilizados para prevenir caducidades y deterioro",
            "D) Que los productos químicos se desechen al primer día de compra"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método PEPS (o FIFO) garantiza una rotación eficiente del stock, asegurando que los materiales antiguos o próximos a vencer sean consumidos antes que las adquisiciones recientes."
    },
    {
        id: 85,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la palpación de la muñeca y mano, la prueba de Finkelstein (flexión del pulgar sostenida en el puño seguida de desviación cubital) desencadena un dolor severo en la apófisis estiloides del radio. ¿Qué condición patológica se confirma?",
        opciones: [
            "A) Fractura del hueso escafoides carpal",
            "B) Artrosis de la articulación trapeciometacarpiana (Rizartrosis)",
            "C) Tenosinovitis estenosante de De Quervain",
            "D) Atrapamiento de la rama profunda del nervio radial"
        ],
        respuestaCorrecta: 2,
        explicacion: "La prueba de Finkelstein tensiona los tendones del extensor corto y abductor largo del pulgar al pasar por la primera corredera dorsal, patognomónico de De Quervain."
    },
    {
        id: 86,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la prescripción de ejercicio terapéutico para hipertrofia y fuerza muscular, ¿a qué se refiere el término 'Contracción Excéntrica'?",
        opciones: [
            "A) El músculo genera tensión sin variación en la longitud de las fibras ni movimiento articular",
            "B) El músculo genera tensión mientras sus fibras se elongan y la inserción se aleja del origen, venciendo la resistencia externa",
            "C) El músculo se acorta aceleradamente aproximando los extremos articulares",
            "D) La velocidad del movimiento permanece idéntica controlada por un dinamómetro isocinético"
        ],
        respuestaCorrecta: 1,
        explicacion: "Durante la fase excéntrica el músculo actúa como freno o amortiguador, alargándose bajo tensión mecánica. Genera mayores tensiones por unidad motora que la fase concéntrica."
    },
    {
        id: 87,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué es la 'Escuela de Espalda' (Back School) dentro de los programas de salud ocupacional?",
        opciones: [
            "A) Un centro educativo universitario de posgrado",
            "B) Un programa de intervención quirúrgica lumbar masiva",
            "C) Un programa estructurado de educación, entrenamiento postural, ergonomía y ejercicios preventivos para reducir la incidencia y recurrencia del dolor lumbar",
            "D) Una prueba de laboratorio de tamizaje de densidad ósea"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Escuela de Espalda dota a los trabajadores de conocimientos teóricos y prácticos sobre biomecánica, hábitos posturales y fortalecimiento para cuidar su columna."
    },
    {
        id: 88,
        area: "Gestión y Administración en Salud",
        pregunta: "En la evaluación de la satisfacción del paciente en un servicio de fisioterapia, ¿cuál de los siguientes métodos recolecta datos cualitativos y cuantitativos directamente del usuario?",
        opciones: [
            "A) Auditoría de la cuenta bancaria de la empresa",
            "B) Revisión de la caducidad de los electrodos",
            "C) Conteo de horas de trabajo del personal de limpieza",
            "D) Encuestas de satisfacción estandarizadas aplicadas al momento del alta clínica"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las encuestas de satisfacción miden la percepción del usuario respecto a la atención recibida, tiempos de espera, trato humano e instalaciones, alimentando los sistemas de mejora continua."
    },
    {
        id: 89,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente acude refiriendo inestabilidad en la rodilla tras un traumatismo en valgo forzado y rotación. Durante la evaluación, la prueba de Lachman resulta positiva con un punto final blando. ¿Qué ligamento está lesionado?",
        opciones: [
            "A) Ligamento cruzado anterior (LCA)",
            "B) Ligamento cruzado posterior (LCP)",
            "C) Ligamento colateral lateral (LCL)",
            "D) Ligamento patelofemoral medial"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Lachman (traslación anterior de la tibia a 20-30° de flexión de rodilla) es la prueba más sensible y específica para confirmar la rotura del Ligamento Cruzado Anterior."
    },
    {
        id: 90,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la rehabilitación de la Marcha en un paciente con Hemiparesia por ACV, ¿cuál de los siguientes patrones anormales se observa frecuentemente en el lado afectado durante la fase de balanceo?",
        opciones: [
            "A) Marcha atáxica con aumento de la base de sustento",
            "B) Marcha en 'segador' o helicópoda (circunducción de la extremidad inferior por incapacidad de flexionar la rodilla y tobillo)",
            "C) Marcha festinante con pasos cortos y acelerados",
            "D) Marcha en estepaje pura por atrapamiento periférico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La espasticidad del extensor de la rodilla y el equinovaro del pie impiden el acortamiento de la extremidad para el balanceo, obligando al paciente a realizar un arco de circunducción lateral (marcha en segador)."
    },
    {
        id: 91,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "Según la OMS, ¿cuál es la definición de 'Salud' proclamada en su Constitución?",
        opciones: [
            "A) La ausencia total de enfermedades infecciosas o traumatismos",
            "B) La capacidad física para competir en deportes de alto rendimiento",
            "C) Un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades",
            "D) El valor biomédico normal de las pruebas de laboratorio"
        ],
        respuestaCorrecta: 2,
        explicacion: "La OMS define la salud desde un modelo holístico e integral que supera la visión biologicista, abarcando el equilibrio físico, mental y social del ser humano."
    },
    {
        id: 92,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué es la 'Visión' dentro de la planeación estratégica de una organización sanitaria?",
        opciones: [
            "A) El balance contable de los gastos mensuales",
            "B) La descripción de los problemas presentes de la clínica",
            "C) La lista de la plantilla de trabajadores contratados",
            "D) La imagen o estado futuro deseado al que la institución aspira llegar en un horizonte de tiempo a mediano o largo plazo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Visión proyecta la meta aspiracional de la organización en el futuro, guiando sus inversiones y estrategias de crecimiento."
    },
    {
        id: 93,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un paciente de 45 años consulta por vértigo rotatorio intenso de corta duración ($< 1\\text{ minuto}$) desencadenado por cambios posicionales de la cabeza (como girarse en la cama). La prueba de Dix-Hallpike desencadena nistagmo torsional y vértigo. ¿Cuál es el diagnóstico funcional?",
        opciones: [
            "A) Vértigo Posicional Paroxístico Benigno (VPPB) del canal semicircular posterior",
            "B) Neuritis vestibular infecciosa aguda",
            "C) Enfermedad de Menière en fase avanzada",
            "D) Insuficiencia vertebrobasilar estructural"
        ],
        respuestaCorrecta: 0,
        explicacion: "El VPPB es causado por otoconias desprendidas en los canales semicirculares; la maniobra de Dix-Hallpike provoca la latencia, nistagmo rotatorio característico y reproducción del síntoma."
    },
    {
        id: 94,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "¿Cuál de las siguientes maniobras de reposicionamiento de otolitos es la indicada para el tratamiento curativo del Vértigo Posicional Paroxístico Benigno del canal semicircular posterior?",
        opciones: [
            "A) Maniobra de Valsalva profunda",
            "B) Maniobra de Epley (o Maniobra de Semont)",
            "C) Maniobra de Heimlich de desobstrucción",
            "D) Maniobra de Phalen en muñeca"
        ],
        respuestaCorrecta: 1,
        explicacion: "La maniobra de Epley desplaza mecánicamente los cristales de carbonato de calcio desde el canal semicircular posterior de regreso al utrículo mediante giros cefálicos guiados."
    },
    {
        id: 95,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué indicador mide los años de vida saludables que pierde una población debido a la mortalidad prematura y a la discapacidad?",
        opciones: [
            "A) Tasa bruta de natalidad",
            "B) Índice de Masa Corporal (IMC)",
            "C) Años de Vida Ajustados por Discapacidad (AVAD / DALYs)",
            "D) Coeficiente de Gini"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los AVAD (o DALYs en inglés) combinan en una sola métrica los años de vida perdidos por muerte prematura (YLL) y los años vividos con discapacidad (YLD)."
    },
    {
        id: 96,
        area: "Gestión y Administración en Salud",
        pregunta: "En la gestión de la seguridad del paciente, ¿qué es un 'Evento Centinela'?",
        opciones: [
            "A) La cancelación anticipada de una cita por lluvia",
            "B) Un error administrativo sin consecuencia para el usuario",
            "C) Un aumento leve del dolor tras la movilización articular",
            "D) Un hecho imprevisto que involucra la muerte, daño físico o psicológico grave no relacionado con el curso natural de la enfermedad"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un evento centinela es un incidente crítico e inaceptable en el sistema de salud que requiere investigación inmediata de causa raíz para prevenir su recurrencia."
    },
    {
        id: 97,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la evaluación dermatofuncional de un paciente postoperado de cirugía plástica abdomen, se observa una cicatriz abultada, roja, hipertrófica, que supera los límites iniciales de la herida quirúrgica y no remite con el tiempo. ¿Cómo se clasifica esta cicatriz patológica?",
        opciones: [
            "A) Cicatriz Queloide",
            "B) Cicatriz Atrófica",
            "C) Cicatriz Normotrófica",
            "D) Cicatriz Hipertrófica delimitada"
        ],
        respuestaCorrecta: 0,
        explicacion: "A diferencia de la cicatriz hipertrófica (que respeta los bordes originarios de la herida), la cicatriz queloide invade el tejido sano circundante e hiperprolifera colágeno desordenado."
    },
    {
        id: 98,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la rehabilitación de la Espondilitis Anquilosante en fase de mantenimiento, ¿cuál es el pilar del tratamiento kinésico?",
        opciones: [
            "A) Inmovilización continua en flexión dorsal",
            "B) Ejercicios de flexibilización y extensión de la columna vertebral, expansión torácica y postura correccional para evitar la anquilosis en flexión",
            "C) Electroterapia de alta frecuencia sobre la región lumbar exclusivamente",
            "D) Uso de corsé rígido de Minerva permanente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La espondilitis anquilosante tiende a la osificación y deformidad en cifosis flexora; los ejercicios de extensión, movilidad axial y respiratorios preservan la capacidad funcional torácica."
    },
    {
        id: 99,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué tipo de barrera enfrentan principalmente los usuarios con discapacidad visual cuando los edificios no cuentan con señalética en sistema Braille ni podotáctil?",
        opciones: [
            "A) Barrera actitudinal",
            "B) Barrera económica de transporte",
            "C) Barrera de la comunicación e información en el entorno físico",
            "D) Barrera legal legislativa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La falta de señalización accesible en formatos adaptados (Braille, relieve, podotáctil) constituye una barrera física de comunicación e información que limita la autonomía."
    },
    {
        id: 100,
        area: "Gestión y Administración en Salud",
        pregunta: "En la teoría de la administración, ¿cuál es la diferencia entre Eficiencia y Eficacia?",
        opciones: [
            "A) La eficiencia mide el logro de metas y la eficacia la recaudación de impuestos",
            "B) No existe ninguna diferencia operativa",
            "C) La eficacia no requiere de planeación",
            "D) La Eficacia se enfoca en alcanzar los objetivos y metas planteadas, mientras que la Eficiencia mide el logro de esos objetivos optimizando el uso de los recursos empleados"
        ],
        respuestaCorrecta: 3,
        explicacion: "Eficacia es 'hacer las cosas correctas' (lograr el resultado esperado); Eficiencia es 'hacer las cosas bien con la menor cantidad de recursos y costos posibles'."
    },
    {
        id: 101,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al examinar a un paciente con sospecha de atrapamiento del nervio cubital en el codo (Síndrome del Túnel Cubital), ¿qué signo motor en la mano confirma la debilidad del aductor del pulgar inervado por el cubital?",
        opciones: [
            "A) Signo de Froment positivo (compensación flexionando la falange del pulgar mediante el flexor largo inervado por el mediano al sujetar un papel)",
            "B) Signo de Phalen positivo",
            "C) Signo de la tecla de piano",
            "D) Signo de Homans positivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El signo de Froment evoca la debilidad del aductor del pulgar (nervio cubital). El paciente compensa realizando flexión interfalángica mediante el flexor pollicis longus (nervio mediano)."
    },
    {
        id: 102,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En el aborde fisioterapéutico del Síndrome de Distrofia Simpático Refleja (Síndrome Doloroso Regional Complejo Tipo I), ¿cuál de las siguientes intervenciones es la más recomendada para reentrenar la corteza somatosensorial?",
        opciones: [
            "A) Estiramientos bruscos pasivos hasta el límite del llanto",
            "B) Terapia de Espejo (Mirror Therapy) e Imaginería Motora Graduada junto con desensibilización táctil",
            "C) Crioterapia sumergida en nieve carbónica",
            "D) Inmovilización con escayola durante 8 semanas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El SDRC presenta desorganización cortical somatosensorial; la imaginería motora graduada y la terapia de espejo restablecen la representación del miembro sin activar los nociceptores periféricos."
    },
    {
        id: 103,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué es el envejecimiento activo según la definición de la Organización Mundial de la Salud (OMS)?",
        opciones: [
            "A) La obligación laboral de los adultos mayores de seguir trabajando en turnos nocturnos",
            "B) El consumo farmacológico suplementario de vitaminas sintéticas",
            "C) El proceso de optimización de las oportunidades de salud, participación y seguridad con el fin de mejorar la calidad de vida a medida que las personas envejecen",
            "D) La reclusión institucional preventiva en asilos de ancianos"
        ],
        respuestaCorrecta: 2,
        explicacion: "El envejecimiento activo promueve la salud integral, participación social continua y autonomía funcional de los adultos mayores en sus comunidades."
    },
    {
        id: 104,
        area: "Gestión y Administración en Salud",
        pregunta: "En la auditoría clínica de un servicio de rehabilitación, ¿qué es un indicador de 'Proceso'?",
        opciones: [
            "A) El número de metros cuadrados de la sala de mecanoterapia",
            "B) El porcentaje de la tasa de mortalidad hospitalaria general",
            "C) El monto económico recibido por subsidios estatales",
            "D) El porcentaje de expedientes clínicos que cuentan con la evaluación goniométrica inicial y el consentimiento informado debidamente firmados"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los indicadores de proceso miden las actividades, procedimientos y acciones asistenciales efectivamente ejecutadas durante la atención médica/fisioterapéutica."
    },
    {
        id: 105,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Un recién nacido es evaluado tras un parto distócico con tracción cefálica. Muestra el miembro superior derecho en aducción, rotación interna de hombro, extensión de codo y pronación de antebrazo ('postura en propina de mesero'). ¿Qué raíces del plexo braquial están lesionadas (Parálisis de Erb-Duchenne)?",
        opciones: [
            "A) Raíces C5 y C6",
            "B) Raíces C8 y T1",
            "C) Raíces T2 y T3",
            "D) Raíz L5 únicamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Parálisis de Erb-Duchenne daña las raíces superiores C5-C6 del plexo braquial, paralizando el deltoides, supraespinoso, infraespinoso, bíceps y braquial anterior."
    },
    {
        id: 106,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En la fase subaguda de una Tendinopatía Aquiliana corporal, ¿cuál es el protocolo de ejercicio con mayor evidencia científica para estimular la remodelación del tendón?",
        opciones: [
            "A) Reposo absoluto con bota ortopédica por dos meses",
            "B) Protocolo de Ejercicios Excéntricos de Alfredson (o carga pesada lenta)",
            "C) Masaje transverso profundo con hielo seco",
            "D) Ultrasonido pulsado de baja intensidad exclusivamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El protocolo de Alfredson (ejercicios excéntricos mecánicos repetidos para el tríceps sural) estimula la síntesis de colágeno Tipo I, alinea los tenocitos y reduce la neovascularización dolorosa."
    },
    {
        id: 107,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "En el marco de la Promoción de la Salud de la Carta de Ottawa (1986), ¿cuál de los siguientes es un pilar fundamental de acción?",
        opciones: [
            "A) El monopolio farmacológico estatal",
            "B) El incremento en las tarifas de atención hospitalaria",
            "C) El desarrollo de aptitudes personales y el fortalecimiento de la acción comunitaria",
            "D) La restricción de licencias profesionales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Carta de Ottawa establece cinco áreas de acción prioritarias, destacando el desarrollo de habilidades personales, la participación comunitaria activa y la creación de entornos saludables."
    },
    {
        id: 108,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué norma reguladora mexicana especifica los requisitos mínimos de infraestructura y equipamiento de establecimientos para la atención médica especializada y consultorios (incluyendo fisioterapia y rehabilitación)?",
        opciones: [
            "A) NOM-001-SEDE-2012",
            "B) NOM-004-SSA3-2012",
            "C) NOM-027-SSA3-2013",
            "D) NOM-016-SSA3-2012"
        ],
        respuestaCorrecta: 3,
        explicacion: "La NOM-016-SSA3-2012 establece los requisitos mínimos de infraestructura y equipamiento para hospitales y consultorios de atención médica especializada."
    },
    {
        id: 109,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al examinar a un paciente con alteración de la marcha, se observa que levanta exageradamente la rodilla derecha durante la fase de balanceo para evitar que la punta del pie tropiece con el suelo ('marcha en estepaje' o equina). ¿Qué músculo inervado por el nervio peroneo profundo está paralizado o debilitado?",
        opciones: [
            "A) Tibial anterior",
            "B) Gastrocnemios (gemelos)",
            "C) Sóleo",
            "D) Tibial posterior"
        ],
        respuestaCorrecta: 0,
        explicacion: "El músculo tibial anterior es el principal dorsiflexor del tobillo. Su parálisis provoca la caída del antepié en equino, obligando a flexionar exageradamente la cadera y rodilla (marcha en estepaje)."
    },
    {
        id: 110,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En un paciente anciano con osteoporosis severa confirmada por densitometría ósea ($T\text{-score} < -3.0$), ¿cuál de las siguientes técnicas de fisioterapia está estrictamente CONTRAINDICADA debido al alto riesgo de fractura patológica?",
        opciones: [
            "A) Ejercicios de reeducación postural en sedestación",
            "B) Terapia manual manipulativa con empujes de alta velocidad (Thrust/Grado V) e hidromasaje a alta presión sobre la columna vertebral",
            "C) Caminata aeróbica suave a ritmo tolerado",
            "D) Ejercicios isotónicos ligeros de resistencia elástica progresiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las manipulaciones vertebrales de alta velocidad (Thrust) y flexiones forzadas están contraindicadas en huesos con fragilidad ósea severa (osteoporosis) por el riesgo inminente de provocar fracturas por aplastamiento vertebral."
    },
    {
        id: 111,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué componente de la respuesta inmunológica y fisiológica promueve la actividad física aeróbica regular de intensidad moderada en la población adulta mayor?",
        opciones: [
            "A) Atrofia acelerada del timo y leucopenia severa",
            "B) Aumento de la inflamación sistémica crónica de bajo grado",
            "C) Modulación de citocinas antiinflamatorias, mejora de la inmunosenescencia y reducción del riesgo de infecciones metabólico-respiratorias",
            "D) Inhibición de la biosíntesis de eritrocitos"
        ],
        respuestaCorrecta: 2,
        explicacion: "El ejercicio aeróbico regular reduce los marcadores inflamatorios ($IL-6$, $TNF-\alpha$), estimula la función inmunitaria en ancianos y previene la fragilidad biológica."
    },
    {
        id: 112,
        area: "Gestión y Administración en Salud",
        pregunta: "En la planeación financiera de una clínica, ¿cuál de los siguientes rubros se clasifica como un 'Costo Fijo' mensual independientemente del volumen de pacientes atendidos?",
        opciones: [
            "A) Compra de electrodos desechables y geles de ultrasonido",
            "B) Consumo de sábanas desechables por paciente",
            "C) Pago de comisiones por paciente atendido",
            "D) Renta o alquiler del local comercial y sueldo base del personal administrativo"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los costos fijos (renta, seguros, sueldos base) no varían con el volumen de producción o servicios prestados durante el periodo fiscal."
    },
    {
        id: 113,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Durante la evaluación de la respuesta vascular periférica en un miembro inferior traumatizado, ¿dónde se localiza anatómicamente el punto de palpación del pulso pedio (dorsal del pie)?",
        opciones: [
            "A) En la cara dorsal del pie, inmediatamente lateral al tendón del extensor largo del dedo gordo",
            "B) Detrás del maléolo medial de la tibia",
            "C) En el hueco poplíteo posterior de la rodilla",
            "D) En el triángulo femoral inguinal de Scarpa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pulso pedio se palpa en el dorso del pie, justo lateral al tendón del extensor propio o largo del hálux, sobre el segundo hueso metatarsiano."
    },
    {
        id: 114,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En el manejo conservador de la Escoliosis Idiopática del Adolescente con curvas entre 20° y 40° según el ángulo de Cobb en progresión, ¿cuál es la combinación terapéutica basada en las guías SOSORT?",
        opciones: [
            "A) Reposo nocturno exclusivo sin ejercicios",
            "B) Tratamiento ortésico con corsé (ej. Milwaukee o Boston) combinado con Ejercicios Fisioterapéuticos Específicos para Escoliosis (PSSE / Schroth)",
            "C) Cirugía de artrodesis vertebral posterior inmediata",
            "D) Inserción de agujas de acupuntura en el ápice de la curva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pautas SOSORT indican que para curvas moderadas progresivas (20°-40° Cobb), la combinación de corsé ortopédico y fisioterapia específica basada en autocorrelación tridimensional (método Schroth) frena la progresión de la curva."
    },
    {
        id: 115,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "En un análisis de salud comunitaria, ¿cuál de las siguientes situaciones representa un factor de riesgo no modificable para el desarrollo de osteoartritis de rodilla?",
        opciones: [
            "A) Índice de masa corporal elevado (obesidad)",
            "B) Debilidad de la musculatura del cuádriceps",
            "C) Edad avanzada y predisposición genética",
            "D) Ocupación laboral con cargas de tracción excesivas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La edad, el sexo y los factores genéticos son biológicamente no modificables; a diferencia del peso corporal, la fuerza muscular o las cargas laborales que sí se pueden modificar con intervenciones preventivas."
    },
    {
        id: 116,
        area: "Gestión y Administración en Salud",
        pregunta: "¿Qué es el 'Manual de Organización' de una clínica de fisioterapia?",
        opciones: [
            "A) Un catálogo de venta de aparatos electroterapéuticos a terceros",
            "B) La carpeta donde se guardan las notas de alta clínica",
            "C) La colección de facturas fiscales del año anterior",
            "D) Un documento normativo que formaliza la estructura organizativa, funciones, responsabilidades, atribuciones y perfil de puestos de cada integrante del equipo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El Manual de Organización delimita claramente el perfil, las líneas de mando y las obligaciones específicas de cada puesto de trabajo en la entidad asistencial."
    },
    {
        id: 117,
        area: "Evaluación y Diagnóstico Fisioterapéutico",
        pregunta: "Al evaluar los reflejos osteotendinosos o miotáticos con el martillo de reflejos, ¿qué raíz espinal segmento-medular se explora principalmente al percutir sobre el tendón rotuliano?",
        opciones: [
            "A) Raíz L3 y L4",
            "B) Raíz S1",
            "C) Raíz C7",
            "D) Raíz L1 y L2"
        ],
        respuestaCorrecta: 0,
        explicacion: "El reflejo patelar o rotuliano evalúa la integridad del arco reflejo miotático inervado fundamentalmente por los segmentos espinales L3 y L4 a través del nervio femoral."
    },
    {
        id: 118,
        area: "Intervención y Tratamiento Fisioterapéutico",
        pregunta: "En el abordaje fisioterapéutico de la Fascitis Plantar en fase aguda, ¿cuál es el fundamento del vendaje neuromuscular (Kinesiotaping) o vendaje funcional bajo la técnica de apoyo de arco longitudinal?",
        opciones: [
            "A) Provocar isquemia arterial transitoria en los dedos",
            "B) Disminuir la tensión mecánica sobre la fascia plantar y dar soporte al arco plantar longitudinal durante la deambulación",
            "C) Fijar de forma rígida la articulación de la rodilla",
            "D) Reemplazar la necesidad de terapia manual"
        ],
        respuestaCorrecta: 1,
        explicacion: "El vendaje funcional/kinesiotape distribuye las fuerzas de tracción plantar, alivia el exceso de carga en la fascia durante el despegue y brinda retroalimentación somatosensorial."
    },
    {
        id: 119,
        area: "Salud Pública y Rehabilitación Comunitaria",
        pregunta: "¿Qué es la Red de Salud Comunitaria o Red de Atención Primaria en Salud?",
        opciones: [
            "A) Un grupo cerrado de investigadores de laboratorio",
            "B) Un sistema de clínicas privadas dedicadas exclusivamente a estética corporal",
            "C) El conjunto estructurado de servicios, recursos e instituciones que se coordinan para brindar atención integral, continua y accesible a la población de un determinado territorio",
            "D) Un software informático de contabilidad privada"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las redes integradas de servicios de salud garantizan la cobertura universal, continuidad asistencial y coordinación desde la atención primaria hasta la rehabilitación especializada."
    },
    {
        id: 120,
        area: "Gestión y Administración en Salud",
        pregunta: "Dentro del marco legal de la responsabilidad profesional en salud, ¿qué es la 'Imprudencia'?",
        opciones: [
            "A) La realización de un acto médico o fisioterapéutico con apresuramiento o falta de precaución, ejecutando acciones arriesgadas sin tomar las medidas de seguridad debidas",
            "B) La falta total de conocimientos técnicos básicos exigidos en la profesión (Impericia)",
            "C) La omisión de brindar auxilio a un paciente en peligro de muerte (Negligencia)",
            "D) La correcta aplicación de las Guías de Práctica Clínica respaldadas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Imprudencia consiste en 'hacer más de lo debido' o actuar precipitadamente asumiendo riesgos innecesarios para el paciente sin el cuidado o cautela que la Lex Artis exige."
    }
];