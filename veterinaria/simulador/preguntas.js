const bancoPreguntas = [
    {
        id: 1,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Cuál es el hallazgo hematológico clásico asociado con una infestación masiva por Haemonchus contortus en ovinos?",
        opciones: [
            "A) Policitemia normocítica normocrómica",
            "B) Anemia arregenerativa macrocítica hipocrómica",
            "C) Anemia regenerativa microcítica hipocrómica",
            "D) Leucocitosis con desviación a la izquierda"
        ],
        respuestaCorrecta: 2,
        explicacion: "Haemonchus contortus es un nematodo hematófago del abomaso que causa pérdida crónica de sangre, derivando en una anemia ferropénica que en rumiantes suele manifestarse como regenerativa (o con respuesta medular variable) y de tipo microcítico hipocrómico debido a la deficiencia de hierro."
    },
    {
        id: 2,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "En un canino con sospecha de hipoadrenocorticismo (Enfermedad de Addison), ¿cuál es la alteración electrolítica sérica típica que se espera encontrar?",
        opciones: [
            "A) Hipernatremia e hipokalemia",
            "B) Hiponatremia e hiperkalemia",
            "C) Hiponatremia e hipokalemia",
            "D) Hipernatremia e hiperkalemia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El déficit de mineralocorticoides (aldosterona) en el hipoadrenocorticismo provoca una menor reabsorción renal de sodio y excreción de potasio, resultando característicamente en hiponatremia, hiperkalemia y una disminución de la relación Na/K (menor a 27:1)."
    },
    {
        id: 3,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué prueba de laboratorio es considerada el estándar de oro (gold standard) para el diagnóstico confirmatorio de Brucella abortus en bovinos a nivel de hato?",
        opciones: [
            "A) Rosa de Bengala",
            "B) Fijación del complemento",
            "C) Aislamiento bacteriológico",
            "D) Prueba de tarjeta"
        ],
        respuestaCorrecta: 2,
        explicacion: "Aunque las pruebas serológicas (Rosa de Bengala, tarjeta, anelisa) son excelentes para tamizaje, el aislamiento e identificación bacteriológica del agente causal a partir de tejidos fetales, leche o secreciones es el estándar de oro definitivo para confirmar la brucelosis."
    },
    {
        id: 4,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "Durante la evaluación de un frotis sanguíneo de un canino, se observan inclusiones basófilas intracitoplasmáticas en eritrocitos y leucocitos. ¿A qué patógeno corresponde este hallazgo?",
        opciones: [
            "A) Anaplasma phagocytophilum",
            "B) Ehrlichia canis",
            "C) Distemper canino (Moquillo)",
            "D) Hepatozoon canis"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los cuerpos de Lentz son inclusiones virales eosinofílicas o basófilas que se pueden observar en el citoplasma de eritrocitos y leucocitos durante la fase aguda del virus del moquillo canino."
    },
    {
        id: 5,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "Un resultado de urinálisis en un gato muestra una densidad urinaria de 1.050, pH de 6.0, proteinuria negativa y presencia de cristales de estruvita. Clínicamente el paciente está asintomático. ¿Cuál es la interpretación clínica correcta?",
        opciones: [
            "A) Insuficiencia renal crónica avanzada",
            "B) Urolitiasis obstructiva severa",
            "C) Hallazgo incidental sin significado patológico inmediato",
            "D) Cistitis idiopática felina aguda"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una densidad de 1.050 indica una excelente capacidad de concentración renal en felinos. Los cristales de estruvita (fosfato amónico magnésico) pueden precipitar in vitro tras la refrigeración de la muestra o estar presentes sin inflamación ni urolitos, por lo que sin signos clínicos no requieren tratamiento antibiótico ni quirúrgico."
    },
    {
        id: 6,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Cuál es el método de diagnóstico por imagen ideal para evaluar la integridad del ligamento cruzado cranial en la rodilla de un canino?",
        opciones: [
            "A) Radiografía simple en proyección lateral",
            "B) Resonancia magnética o ultrasonido musculoesquelético",
            "C) Tomografía computarizada sin contraste",
            "D) Gammagrafía ósea"
        ],
        respuestaCorrecta: 1,
        explicacion: "Aunque la radiografía muestra signos indirectos (efusión articular, desplazamiento de la grasa infrapatelar), la resonancia magnética y la ecografía de alta resolución permiten visualizar directamente las fibras del ligamento cruzado cranial y sus lesiones parciales o totales."
    },
    {
        id: 7,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "En la interpretación de un perfil bioquímico sérico canino, ¿qué enzima es el indicador más específico y sensible de daño hepatocelular primario?",
        opciones: [
            "A) Fosfatasa alcalina (FA)",
            "B) Alanina aminotransferasa (ALT)",
            "C) Gamma glutamil transferasa (GGT)",
            "D) Albúmina sérica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ALT es una enzima de localización citoplasmática hepática en carnívoros, lo que la convierte en el biomarcador más específico y sensible para la detección de daño o necrosis hepatocelular en perros y gatos."
    },
    {
        id: 8,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué característica citológica en una impronta de masa cutánea cutánea es indicativa de malignidad celular?",
        opciones: [
            "A) Anisocariosis leve y citoplasma escaso",
            "B) Presencia de mitosis normales y uniformidad nuclear",
            "C) Anisocariosis severa, anisocitosis, mitosis atípicas y pleomorfismo nuclear",
            "D) Relación núcleo/citoplasma baja"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los criterios de malignidad en citología incluyen el pleomorfismo celular y nuclear, anisocariosis marcada, alta relación núcleo/citoplasma, nucleolos múltiples y prominentes, y la presencia de mitosis atípicas."
    },
    {
        id: 9,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "En un análisis de líquido sinovial obtenido de la articulación carpiana de un equino con cojera aguda, se observa turbiedad, color amarillo turbio, aumento de la celularidad (>10,000 células/uL) con predominio de neutrófilos no degenerados (>80%). ¿Cuál es el diagnóstico presuntivo?",
        opciones: [
            "A) Artritis degenerativa crónica (Osteoartritis)",
            "B) Artritis séptica o infecciosa aguda",
            "C) Hemartrosis traumática",
            "D) Sinovitis inmunomediada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un líquido sinovial con celularidad elevada y claro predominio de neutrófilos (frecuentemente degenerados o no, dependiendo del tiempo de evolución) indica fuertemente un proceso inflamatorio de origen séptico, requiriendo cultivo y antibioticoterapia urgente."
    },
    {
        id: 10,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué prueba diagnóstica se emplea comúnmente para confirmar la presencia de microfilarias de Dirofilaria immitis en caninos con sospecha de dirofilariosis?",
        opciones: [
            "A) Prueba de Knott modificada o test de filtración",
            "B) Exudado conjuntival",
            "C) Coproparasitoscópico de flotación simple",
            "D) Urocultivo cuantitativo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Knott modificada permite concentrar las microfilarias circulantes en la sangre y diferenciarlas morfológicamente de otras especies como Acanthocheilonema reconditum."
    },
    {
        id: 11,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "Durante un examen coproparasitoscópico por la técnica de flotación en un cachorro con diarrea mucoide, se observan ooquistes esféricos u ovoides que miden aproximadamente 10-20 micrómetros y contienen esporoquistes. ¿Cuál es el agente causal más probable?",
        opciones: [
            "A) Toxocara canis",
            "B) Cystoisospora spp.",
            "C) Giardia duodenalis",
            "D) Ancylostoma caninum"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cystoisospora (anteriormente Isospora) produce ooquistes característicos de este tamaño que afectan comúnmente a cachorros, causando diarrea acuosa o mucoide."
    },
    {
        id: 12,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Cuál es el significado clínico de un aumento simultáneo de la actividad sérica de la Creatina Kinasa (CK) y la Aspartato Aminotransferasa (AST) en un caballo?",
        opciones: [
            "A) Daño hepático agudo por micotoxinas",
            "B) Daño o necrosis del tejido muscular esquelético",
            "C) Insuficiencia renal terminal",
            "D) Obstrucción biliar extrahepática"
        ],
        respuestaCorrecta: 1,
        explicacion: "La CK tiene una vida media muy corta y es altamente específica de músculo esquelético y cardíaco. La AST también se encuentra en grandes cantidades en el músculo; un aumento conjunto indica miopatía aguda (como azotemia o rabdomiólisis equina)."
    },
    {
        id: 13,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "En la evaluación ecográfica del tracto reproductor de una yegua, ¿qué estructura ovárica indica la proximidad de la ovulación?",
        opciones: [
            "A) Cuerpo lúteo primario",
            "B) Folículo preovulatorio dominante con pérdida de turgencia (fosa ovulatoria)",
            "C) Folículos primordiales múltiples en corteza",
            "D) Cuerpo albicans"
        ],
        respuestaCorrecta: 1,
        explicacion: "En las yeguas, la ovulación ocurre exclusivamente a través de la fosa ovulatoria. Un folículo preovulatorio grande que adquiere una forma más blanda o piriforme indica la inminencia de la ovulación."
    },
    {
        id: 14,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué prueba rápida se utiliza de rutina para el diagnóstico clínico de la infección por el virus de la Leucemia Felina (FeLV)?",
        opciones: [
            "A) Inmunofluorescencia indirecta en suero",
            "B) ELISA o Inmunocromatografía para detección del antígeno p27",
            "C) Western Blot para anticuerpos totales",
            "D) Reacción en Cadena de la Polimerasa en saliva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas comerciales tipo ELISA o pruebas rápidas de flujo lateral detectan el antígeno soluble p27 del virus de la Leucemia Felina en sangre, plasma o suero."
    },
    {
        id: 15,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "Al realizar una punción de médula ósea en un canino con pancitopenia, se observa una marcada disminución de todas las líneas celulares hematopoyéticas, las cuales son reemplazadas por tejido adiposo. ¿Cómo se denomina este diagnóstico?",
        opciones: [
            "A) Hiperplasia medular compensatoria",
            "B) Leucemia mieloide aguda",
            "C) Mielofibrosis idiopática",
            "D) Hipoplasia o aplasia medular (mielofitis / pancitopenia aplásica)",
        ],
        respuestaCorrecta: 3,
        explicacion: "El reemplazo del tejido hematopoyético medular por tejido adiposo con una reducción global de precursores celulares define la hipoplasia o aplasia medular."
    },
    {
        id: 16,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es el agente etiológico responsable de la queratoconjuntivitis infecciosa bovina (ojo rosado)?",
        opciones: [
            "A) Moraxella bovis",
            "B) Brucella abortus",
            "C) Pasteurella multocida",
            "D) Mycoplasma bovis"
        ],
        respuestaCorrecta: 0,
        explicacion: "Moraxella bovis es la bacteria gramnegativa principalmente asociada con la queratoconjuntivitis infecciosa bovina, facilitada por factores ambientales como radiación UV y moscas."
    },
    {
        id: 17,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "En un hato lechero intensivo, ¿cuál es el principal factor de riesgo nutricional para el desarrollo de acidosis ruminal subaguda (SARA)?",
        opciones: [
            "A) Exceso de proteína desgradable en rumen",
            "B) Alta proporción de carbohidratos fermentables y deficiencia de fibra efectiva",
            "C) Suplementación excesiva con sales anionicas en el periodo seco",
            "D) Deficiencia severa de microminerales como cobalto y selenio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La SARA se origina por una ingestión elevada de concentrados ricos en almidón (carbohidratos altamente fermentables) combinada con una baja cantidad de fibra larga o efectiva que estimule la rumia y la producción de saliva bicarbonatada."
    },
    {
        id: 18,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es la medida de manejo preventivo más eficaz para evitar la fiebre de leche (hipocalcemia puerperal) en vacas lecheras multíparas?",
        opciones: [
            "A) Suministrar una dieta alta en calcio durante el periodo de transición",
            "B) Aplicar sales aniónicas en la dieta preparto para inducir una acidosis metabólica leve",
            "C) Administrar infusión intravenosa de gluconato de calcio inmediatamente tras el parto de forma rutinaria",
            "D) Restringir totalmente el agua de bebida 48 horas antes del parto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso de dietas con balance catión-anión de la dieta (DCAD) negativo mediante la adición de sales aniónicas en el preparto estimula la movilización ósea de calcio y la absorción intestinal, previniendo la hipocalcemia."
    },
    {
        id: 19,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Qué patógeno causa la denominada 'enfermedad de las patas locas' o cojera interdigital en bovinos, caracterizada por necrosis del espacio interdigital?",
        opciones: [
            "A) Dichelobacter nodosus",
            "B) Fusobacterium necrophorum",
            "C) Clostridium chauvoei",
            "D) Trueperella pyogenes"
        ],
        respuestaCorrecta: 1,
        explicacion: "Fusobacterium necrophorum (frecuentemente en sinergia con Dichelobacter nodosus en ovinos, pero F. necrophorum es el principal agente en la necrobacilosis interdigital bovina o 'gabarro') causa necrosis tisular en la zona interdigital."
    },
    {
        id: 20,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "En la evaluación de la aptitud reproductiva de un toro reproductor (prueba de capacidad de servicio y evaluación andrológica), ¿qué porcentaje mínimo de morfología espermática normal se considera aceptable de acuerdo con los estándares de la Society for Theriogenology?",
        opciones: [
            "A) Al menos 40% de espermatozoides normales",
            "B) Al menos 70% de espermatozoides normales",
            "C) Al menos 90% de espermatozoides normales",
            "D) Al menos 20% de espermatozoides normales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para clasificar a un toro como satisfactorio en su evaluación reproductiva, comúnmente se requiere un mínimo de 70% de espermatozoides con morfología normal y motilidad progresiva individual superior al 30%."
    },
    {
        id: 21,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es el signo clínico patognomónico del timpanismo ruminal espumoso (meteorismo) en bovinos?",
        opciones: [
            "A) Distensión asimétrica de la fosa paralumbar derecha",
            "B) Distensión severa y generalizada de la fosa paralumbar izquierda",
            "C) Presencia de pulso yugular negativo",
            "D) Descarga nasal purulenta bilateral"
        ],
        respuestaCorrecta: 1,
        explicacion: "El timpanismo ruminal (ya sea espumoso por consumo de leguminosas tiernas o gaseoso por obstrucción) provoca una distensión notable y prominente del flanco izquierdo (fosa paralumbar izquierda)."
    },
    {
        id: 22,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "Un ternero de 3 semanas presenta diarrea acuosa blanca-amarillenta, deshidratación severa, debilidad y muerte rápida. Al realizar la necropsia, se observa deshidratación tisular y enteritis. ¿Cuál es el agente viral más común en este cuadro?",
        opciones: [
            "A) Virus de la diarrea viral bovina (DVB)",
            "B) Rotavirus bovino",
            "C) Parainfluenza bovina tipo 3",
            "D) Virus de la rinotraqueítis infecciosa bovina (IBR)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El rotavirus y el coronavirus bovino son las causas virales más frecuentes de enteritis neonatal en terneros menores de un mes, destruyendo los enterocitos de las vellosidades intestinales."
    },
    {
        id: 23,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Qué complejo sintomático respiratorio en bovinos involucra la interacción de agentes virales (IBR, PI3, BRSV) y bacterianos (Mannheimia haemolytica) asociado a estrés por manejo y transporte?",
        opciones: [
            "A) Complejo respiratorio bovino (Fiebre del transporte)",
            "B) Complejo de la mastitis bovina ambiental",
            "C) Síndrome de emaciación multisistémica",
            "D) Complejo entérico neonatal bovino"
        ],
        respuestaCorrecta: 0,
        explicacion: "El complejo respiratorio bovino, comúnmente conocido como fiebre del transporte, es una enfermedad multifactorial que afecta principalmente a becerros recién entresacados o transportados."
    },
    {
        id: 24,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "En la producción de leche ovina o caprina, ¿qué prueba se utiliza frecuentemente en campo para el diagnóstico rápido de mastitis subclínica, de manera análoga a la prueba de California (CMT)?",
        opciones: [
            "A) Prueba de CMT (California Mastitis Test)",
            "B) Prueba de Whiteside modificada",
            "C) Recuento de células somáticas mediante citometría de flujo",
            "D) Cultivo en agar McConkey"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de California (CMT) es igualmente útil y aplicable en pequeños ruminantes para estimar el recuento de células somáticas y detectar mastitis subclínica, aunque en cabras el recuento basal normal es naturalmente más alto."
    },
    {
        id: 25,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es el tratamiento quirúrgico y médico de elección para el desplazamiento de abomaso hacia la izquierda (DAI) en vacas lecheras?",
        opciones: [
            "A) Antibioticoterapia oral exclusiva y ayuno prolongado",
            "B) Reposición quirúrgica mediante abomasopexia o omentopexia (vía flanco o paramedia) combinada con corrección hidroelectrolítica",
            "C) Eutanasia humanitaria por mal pronóstico productivo",
            "D) Administración de antiinflamatorios esteroidales y desparasitación externa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El DAI requiere la corrección de la posición del abomaso (fijándolo mediante abomasopexia u omentopexia) para evitar recidivas, además de corregir la cetosis y el desequilibrio electrolítico asociado."
    },
    {
        id: 26,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es el tratamiento farmacológico inicial de urgencia recomendado para un canino que ingresa con un cuadro de estado epiléptico (status epilepticus)?",
        opciones: [
            "A) Fenobarbital oral a dosis de impregnación",
            "B) Diazepam o midazolam intravenoso o rectal",
            "C) Bromuro de potasio vía oral",
            "D) Levetiracetam subcutáneo de depósito"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las benzodiacepinas (como el diazepam o midazolam) son los fármacos de elección de acción inmediata para interrumpir crisis convulsivas agudas y el estado epiléptico."
    },
    {
        id: 27,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "En la evaluación ortopédica de un cachorro de raza pequeña con cojera intermitente de la extremidad posterior en la que la rótula se luxa medialmente y regresa espontáneamente o por presión digital, ¿qué grado de luxación rotuliana presenta?",
        opciones: [
            "A) Grado I",
            "B) Grado II",
            "C) Grado III",
            "D) Grado IV"
        ],
        respuestaCorrecta: 1,
        explicacion: "El grado II de luxación rotuliana se caracteriza porque la rótula se luxa de forma espontánea o con manipulación digital, pero permanece luxada hasta que se reduce manualmente o el animal extiende la rodilla."
    },
    {
        id: 28,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es el signo clínico clásico y patognomónico de la obstrucción uretral completa por urolitos en un gato macho?",
        opciones: [
            "A) Diarrea hemorrágica profusa",
            "B) Estranguria, polaquiuria, hematuria inicial y posteriormente anuria con vejiga turgente y dolorosa",
            "C) Vómitos persistentes y parálisis del miembro posterior",
            "D) Secreción nasal purulenta y tos productiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los machos felinos con obstrucción uretral muestran intentos infructuosos y dolorosos por orinar (estranguria/polaquiuria), evolucionando rápidamente a una vejiga sumamente distendida, azotemia postrenal, hiperkalemia y letargo."
    },
    {
        id: 29,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "En cirugía veterinaria de pequeños animales, ¿qué tipo de sutura se clasifica como sintética absorbible y es ampliamente utilizada para la síntesis de planos subcutáneos y pared abdominal?",
        opciones: [
            "A) Seda quirúrgica",
            "B) Acido poliglicólico o Poliglactina 910 (Vicryl)",
            "C) Acero inoxidable monofilamento",
            "D) Nylon monofilamento"
        ],
        respuestaCorrecta: 1,
        explicacion: "La poliglactina 910 (Vicryl) y el ácido poliglicólico son suturas sintéticas absorbibles multifilamentos que ofrecen una excelente fuerza tensil inicial y soporte tisular durante el proceso de cicatrización."
    },
    {
        id: 30,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es la causa endocrina más frecuente de hiperadrenocorticismo (síndrome de Cushing) espontáneo en perros?",
        opciones: [
            "A) Tumor funcional de la corteza adrenal (adenoma o carcinoma adrenal)",
            "B) Adenoma hipofisario productor de ACTH",
            "C) Administración iatrogénica prolongada de glucocorticoides",
            "D) Hiperplasia suprarrenal congénita"
        ],
        respuestaCorrecta: 1,
        explicacion: "Aproximadamente el 80-85% de los casos de Cushing espontáneo en perros se deben a un tumor hipofisario benigno (adenoma) secretor de ACTH, que estimula bilateralmente a las glándulas adrenales."
    },
    {
        id: 31,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "En cardiología veterinaria, ¿cuál es la cardiopatía congénita cianógena más común en el perro, caracterizada por estenosis pulmonar, comunicación interventricular, hipertrofia ventricular derecha y cabalgamiento aórtico?",
        opciones: [
            "A) Conducto arterioso persistente (CAP)",
            "B) Tetralogía de Fallot",
            "C) Defecto del septo atrial",
            "D) Estenosis aórtica subvalvular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tetralogía de Fallot engloba las cuatro anomalías congénitas mencionadas, resultando en derivación de sangre derecha-izquierda y cianosis secundaria."
    },
    {
        id: 32,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Qué fármaco se contraindica de manera absoluta en el tratamiento de infecciones por Dermatofitos (tiña) o en hembras gestantes, pero es de elección para el tratamiento de la demodicosis canina generalizada?",
        opciones: [
            "A) Ketoconazol",
            "B) Ivermectina (a dosis antiparasitarias o isoxazolinas modernas)",
            "C) Amitraz (en baños tópicos para demodicosis)",
            "D) Griseofulvina"
        ],
        respuestaCorrecta: 2,
        explicacion: "El amitraz es un garrapaticida y acaricida efectivo en el tratamiento de la demodicosis canina, pero está contraindicado en gatos, chihuahuas sensibles, animales diabéticos y puede causar toxicidad sistémica importante si se absorbe en exceso."
    },
    {
        id: 33,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "Durante la ovariohisterectomía en una perra, ¿cuál es el ligamento que debe ser roto o incisado cuidadosamente para exteriorizar adecuadamente el ovario y prevenir hemorragias del pedículo ovárico?",
        opciones: [
            "A) Ligamento redondo",
            "B) Ligamento suspensorio del ovario",
            "C) Ligamento ancho del útero",
            "D) Ligamento intercornual"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ligamento suspensorio del ovario une el polo cranial del ovario a la pared abdominal dorsal; su ruptura digital o sección roma es indispensable para traccionar con seguridad el ovario sin desgarrar los vasos ováricos."
    },
    {
        id: 34,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es el agente etiológico principal de la traqueobronquitis infecciosa canina (tos de las perreras)?",
        opciones: [
            "A) Bordetella bronchiseptica asociada con virus de parainfluenza canina",
            "B) Canine parvovirus tipo 2",
            "C) Toxoplasma gondii",
            "D) Leptospira interrogans serovar canicola"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tos de las perreras es una enfermedad respiratoria multifactorial donde Bordetella bronchiseptica y el virus de la parainfluenza canina (junto con adenovirus canino tipo 2) actúan sinérgicamente dañando el epitelio ciliar."
    },
    {
        id: 35,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "En un paciente felino geriátrico que presenta pérdida de peso, polidipsia, poliuria, polifagia y taquicardia con arritmia o soplo cardíaco, ¿cuál es el diagnóstico endocrinológico más probable?",
        opciones: [
            "A) Hipotiroidismo felino",
            "B) Hipertiroidismo felino",
            "C) Diabetes mellitus tipo 1",
            "D) Hiperadrenocorticismo felino"
        ],
        respuestaCorrecta: 1,
        explicacion: "El hipertiroidismo felino es una endocrinopatía muy común en gatos mayores, causada habitualmente por hiperplasia adenomatosa benigna de la glándula tiroides, provocando un estado hipermetabólico sistémico."
    },
    {
        id: 36,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es el principal reservorio silvestre del virus de la rabia en América del Norte y gran parte de México, involucrado en la transmisión aérea en cuevas o por mordeduras terrestres?",
        opciones: [
            "A) Roedores sinantrópicos (ratas y ratones)",
            "B) Quirópteros (murciélagos hematófagos y frugívoros) y cánidos silvestres (zorros, zorrillos)",
            "C) Aves migratorias acuáticas",
            "D) Reptiles venenosos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los murciélagos (como Desmodus rotundus) y diversos mamíferos terrestres silvestres representan los principales reservorios naturales del virus rábico (Lyssavirus)."
    },
    {
        id: 37,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué enfermedad bacteriana zoonótica se transmite comúnmente a los humanos a través del contacto con orina de roedores infectados contaminando agua o suelos húmedos, manifestándose en perros con fallo renal y hepático (ictericia)?",
        opciones: [
            "A) Brucelosis",
            "B) Leptospirosis",
            "C) Tuberculosis bovina",
            "D) Fiebre Q"
        ],
        respuestaCorrecta: 1,
        explicacion: "Leptospira spp. es una espiroqueta zoonótica eliminada por la orina de roedores y otros animales silvestres/domésticos, causando leptospirosis humana y canina con afección hepatorrenal."
    },
    {
        id: 38,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es el parásito intestinal de cánidos cuyo hospedador intermediario son los rumiantes (o humanos que ingieren huevos por mala higiene), causando quistes hidatídicos (equinococosis quística) en hígado y pulmón?",
        opciones: [
            "A) Dipylidium caninum",
            "B) Echinococcus granulosus",
            "C) Taenia pisiformis",
            "D) Toxocara canis"
        ],
        respuestaCorrecta: 1,
        explicacion: "Echinococcus granulosus es un pequeño cestodo cuyo hospedador definitivo es el perro y otros cánidos. Sus formas larvales (quistes hidatídicos) se desarrollan en herbívoros y humanos, constituyendo un grave problema de salud pública."
    },
    {
        id: 39,
        area: "Salud Pública y Zoonosis",
        pregunta: "En la inspección sanitaria de canales en el rastro, ¿qué hallazgo patológico en los nódulos linfáticos mediastínicos y pulmonares obliga al decomiso total o parcial por sospecha de zoonosis mycobacteriana?",
        opciones: [
            "A) Melanosis macular difusa",
            "B) Granulomas caseosos con necrosis y calcificación (tuberculos)",
            "C) Congestión pasiva crónica",
            "D) Infiltración grasa tisular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La presencia de lesiones granulomatosas caseosas y calcificadas en ganglios linfáticos y parénquima pulmonar sugiere fuertemente tuberculosis (Mycobacterium bovis), representando una zoonosis de alto riesgo para la salud humana."
    },
    {
        id: 40,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es la bacteria zoonótica intracelular asociada con la ingestión de leche no pasteurizada o contacto con productos de abortos en ganado, causante de fiebre ondulante en humanos?",
        opciones: [
            "A) Salmonella enterica",
            "B) Brucella abortus / melitensis",
            "C) Bacillus anthracis",
            "D) Clostridium botulinum"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las especies del género Brucella son zoonosis ocupacionales y alimentarias clásicas que provocan abortos en animales y fiebre ondulante crónica en personas."
    },
    {
        id: 41,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué método de control de poblaciones de perros y gatos callejeros es considerado por la OMS como la estrategia ética y científicamente más eficaz a largo plazo?",
        opciones: [
            "A) Sacrificio masivo con métodos químicos letales en vía pública",
            "B) Esterilización quirúrgica masiva (campañas de ovariohisterectomía y castración) combinada con educación en tenencia responsable",
            "C) Reubicación de todos los animales a zonas rurales silvestres",
            "D) Envenenamiento selectivo con rodenticidas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La esterilización quirúrgica combinada con la educación sobre tenencia responsable es la única estrategia sostenible y humanitaria avalada internacionalmente para estabilizar y reducir la población canina y felina callejera."
    },
    {
        id: 42,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es el principal peligro asociado al consumo de carne de cerdo insuficientemente cocida que contiene cisticercos (larvas de Taenia solium)?",
        opciones: [
            "A) Infección por triquinosis muscular",
            "B) Desarrollo de teniasis intestinal y neurocisticercosis en humanos",
            "C) Fiebre porcina clásica sistémica",
            "D) Botulismo alimentario agudo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El consumo de carne con Cysticercus cellulosae transmite Taenia solium al humano (teniasis), y la ingestión accidental de huevos de T. solium puede causar neurocisticercosis, una parasitosis neurológica grave."
    },
    {
        id: 43,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué norma oficial mexicana (NOM) regula las buenas prácticas pecuarias en la producción de leche de cabra y bovino para garantizar la inocuidad de los alimentos?",
        opciones: [
            "A) NOM-001-SAG/GAN-2015",
            "B) NOM-EM-005-ZOO-1995 (y normativas específicas de inocuidad como NOM-251-SSA1)",
            "C) NOM-041-ZOO-1995",
            "D) NOM-051-SCFI/SSA1-2010"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las normas oficiales mexicanas de sanidad animal e inocuidad alimentaria (así como la NOM-251-SSA1 sobre prácticas de higiene para alimentos) establecen los lineamientos de control higiénico en la cadena agroalimentaria."
    },
    {
        id: 44,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es el vector biológico principal del parásito protozoario Toxoplasma gondii en su ciclo natural que involucra a los felinos como hospedadores definitivos?",
        opciones: [
            "A) Garrapatas del género Rhipicephalus",
            "B) Mosquitos del género Culex",
            "C) No requiere un vector artrópodo obligatorio; la transmisión ocurre por ingestión de ooquistes esporulados del ambiente o quistes tisulares en carne cruda",
            "D) Piojos picadores Linognathus setosus"
        ],
        respuestaCorrecta: 2,
        explicacion: "Toxoplasma gondii no utiliza un vector artrópodo; los felinos eliminan ooquistes no esporulados en heces, y la infección ocurre por vía oral (alimentos o agua contaminada con ooquistes, o carne mal cocida con bradizoítos)."
    },
    {
        id: 45,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué enfermedad transmitida por garrapatas del género Amblyomma y Dermacentor afecta tanto a humanos como a animales domésticos (especialmente perros), caracterizada por fiebre alta, exantema petequial y trombocitopenia?",
        opciones: [
            "A) Fiebre manchada de las Montañas Rocosas (Rickettsia rickettsii)",
            "B) Babesiosis bovina",
            "C) Anaplasmosis marginal",
            "D) Tripanosomiasis americana"
        ],
        respuestaCorrecta: 0,
        explicacion: "Rickettsia rickettsii es una bacteria intracelular transmitida por garrapatas que causa la fiebre manchada de las Montañas Rocosas, una zoonosis grave y potencialmente fatal."
    },
    {
        id: 46,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Cómo se define la Energía Neta (EN) en un sistema de alimentación animal?",
        opciones: [
            "A) La energía total contenida en el alimento menos la energía bruta de las heces",
            "B) La energía metabolizable menos el incremento calórico (calor de fermentación y metabolismo)",
            "C) La energía digestible menos la energía perdida en gases metano y orina",
            "D) La energía bruta consumida sin descontar ninguna pérdida digestiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "La energía neta representa la fracción de energía verdaderamente utilizada por el animal para mantenimiento y producción (ganancia de peso, leche, gestación), descontando el incremento calórico de la energía metabolizable."
    },
    {
        id: 47,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué aminoácido se considera comúnmente el primer aminoácido limitante en dietas basadas en maíz y harina de soya para aves y cerdos?",
        opciones: [
            "A) Lisina",
            "B) Metionina",
            "C) Triptófano",
            "D) Treonina"
        ],
        respuestaCorrecta: 0,
        explicacion: "La lisina es el primer aminoácido limitante en dietas convencionales de cerdos y aves formuladas con maíz y soya, por lo que su valor es la base para calcular el perfil ideal de aminoácidos."
    },
    {
        id: 48,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Cuál es la función nutricional principal de la fibra detergente neutra (FDN) al evaluar la calidad de un forraje para rumiantes?",
        opciones: [
            "A) Estimar el contenido total de celulosa, hemicelulosa y lignina, relacionándose inversamente con el consumo voluntario de materia seca",
            "B) Medir exclusivamente la fracción proteica soluble del pasto",
            "C) Cuantificar los azúcares solubles y almidones de reserva rápida",
            "D) Determinar el contenido mineral total del forraje"
        ],
        respuestaCorrecta: 0,
        explicacion: "La FDN representa los componentes estructurales de la pared celular vegetal (celulosa, hemicelulosa y lignina). A mayor FDN, menor es el consumo voluntario del forraje debido al llenado físico del rumen."
    },
    {
        id: 49,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué condición metabólica se previene adecuadamente asegurando un nivel óptimo de fibra efectiva y controlando la relación forraje:concentrado en vacas lecheras recién paridas?",
        opciones: [
            "A) Hipomagnesemia o tetania de los pastos",
            "B) Acidosis ruminal y cetosis subclínica",
            "C) Raquitismo nutricional",
            "D) Encefalopatía hepática"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fibra efectiva estimula la masticación y la rumia, incrementando la secreción de saliva rica en bicarbonato que amortigua los ácidos grasos volátiles producidos por la fermentación de concentrados, previniendo la acidosis."
    },
    {
        id: 50,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Cuál es la consecuencia clínica de una deficiencia severa de selenio y vitamina E en corderos en crecimiento?",
        opciones: [
            "A) Ceguera nocturna y xeroftalmia",
            "B) Enfermedad del músculo blanco (distrofia muscular nutricional)",
            "C) Bocio endógeno por hipotiroidismo",
            "D) Raquitismo y deformidades óseas en miembros"
        ],
        respuestaCorrecta: 1,
        explicacion: "La deficiencia combinada de selenio (componente de la glutatión peroxidasa) y vitamina E (antioxidante liposoluble) provoca daño oxidativo en el tejido muscular estriado y cardíaco, conocido como enfermedad del músculo blanco."
    },
    {
        id: 51,
        area: "Nutrición y Alimentación Animal",
        pregunta: "En la formulación de raciones por el método del cuadrado de Pearson, ¿qué se requiere conocer previamente para calcular las proporciones de dos ingredientes que aporten un porcentaje específico de proteína?",
        opciones: [
            "A) El peso vivo y la edad del animal exclusivamente",
            "B) El contenido de proteína de cada ingrediente y el porcentaje de proteína deseado en la mezcla final",
            "C) La digestibilidad ileal estandarizada de los aminoácidos",
            "D) El volumen total de agua consumida al día"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadrado de Pearson es una herramienta algebraica simple para mezclar dos ingredientes (o dos grupos de ingredientes) con el fin de alcanzar una concentración nutriente objetivo (como proteína cruda o energía)."
    },
    {
        id: 52,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Cuál es el propósito principal de someter a proceso de ensilaje al maíz forrajero?",
        opciones: [
            "A) Incrementar artificialmente el contenido de proteína cruda mediante la adición de urea pura",
            "B) Conservar el forraje verde húmedo mediante una fermentación anaeróbica láctica que disminuye el pH",
            "C) Eliminar completamente la fibra detergente ácida (FDA) del forraje",
            "D) Reducir la digestibilidad total para evitar sobreconsumo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ensilaje es un método de conservación basado en la fermentación láctica anaeróbica realizada por bacterias epífitas que bajan el pH rápidamente (por debajo de 4.2), inhibiendo bacterias putrefactivas."
    },
    {
        id: 53,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué vitamina actúa como coenzima en el metabolismo del calcio y fósforo, siendo su deficiencia causa de raquitismo en animales jóvenes?",
        opciones: [
            "A) Vitamina A",
            "B) Vitamina D (Colecalciferol / Ergocalciferol)",
            "C) Vitamina K",
            "D) Vitamina C"
        ],
        respuestaCorrecta: 1,
        explicacion: "La vitamina D es fundamental para la absorción intestinal de calcio y fósforo y su mineralización ósea adecuada; su carencia genera raquitismo en jóvenes y osteomalacia en adultos."
    },
    {
        id: 54,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Cuál es el destino metabólico principal de la urea cuando es ingerida por rumiantes en cantidades moderadas dentro de una ración balanceada?",
        opciones: [
            "A) Se absorbe intacta en el abomaso y se elimina por la orina sin cambios",
            "B) Es hidrolizada por la ureasa ruminal en amoníaco, el cual es utilizado por las bacterias ruminales para sintetizar proteína microbiana",
            "C) Se convierte directamente en glucosa hepática por gluconeogénesis",
            "D) Actúa como laxante osmótico en el intestino grueso"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los microorganismos del rumen transforman el nitrógeno no proteico (como la urea) en amoníaco y posteriormente en proteína microbiana de alta calidad biológica, aprovechable por el rumiante."
    },
    {
        id: 55,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué ocurre fisiológicamente en la gallina ponedora si experimenta una deficiencia severa de calcio en la dieta durante el ciclo de postura?",
        opciones: [
            "A) Pone huevos con cascarón blando o sin cascarón y moviliza calcio de sus huesos medulares",
            "B) Incrementa inmediatamente el tamaño del huevo",
            "C) Detiene la ovulación de forma irreversible sin alterar su osamenta",
            "D) Desarrolla obesidad mórbida hepática"
        ],
        respuestaCorrecta: 0,
        explicacion: "Para formar la cáscara de carbonato de calcio, la gallina requiere una ingesta continua de calcio; si la dieta es deficiente, recurre a la resorción del hueso medular y produce huevos con cáscara frágil o ausente."
    },
    {
        id: 56,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Cuál es la función principal de la hormona Prostaglandina F2 alfa (PGF2a) en el ciclo estral de rumiantes y yeguas?",
        opciones: [
            "A) Inducir la ovulación directa estimulando el pico de LH",
            "B) Provocar la luteólisis (regresión funcional y estructural del cuerpo lúteo)",
            "C) Estimular el crecimiento y desarrollo folicular primario",
            "D) Mantener la gestación relajando la musculatura uterina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La PGF2a es una hormona luteolítica natural producida por el endometrio uterino que destruye el cuerpo lúteo, permitiendo que caiga la progesterona y comience un nuevo ciclo estral."
    },
    {
        id: 57,
        area: "Reproducción y Biotecnología",
        pregunta: "En la técnica de inseminación artificial en bovinos, ¿cuál es el sitio anatómico correcto donde debe depositarse el semen para obtener la mayor tasa de concepción?",
        opciones: [
            "A) En la vagina posterior (cerca de los vestíbulos)",
            "B) En el cuerpo uterino, justo por delante del orificio uterino interno",
            "C) En la punta de los cuernos uterinos indistintamente",
            "D) En los ovarios mediante laparoscopia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El depósito del semen en el cuerpo uterino (evitando depositar profundamente en un solo cuerno o quedarse en el cérvix) maximiza el transporte espermático hacia los oviductos."
    },
    {
        id: 58,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Qué biotecnología reproductiva permite obtener múltiples crías genéticamente valiosas a partir de una hembra donadora de alto mérito genético mediante estimulación ovárica y recuperación embrionaria?",
        opciones: [
            "A) Inseminación artificial a tiempo fijo (IATF)",
            "B) Transferencia de embriones (TE)",
            "C) Clonación por transferencia nuclear de células somáticas",
            "D) Diagnóstico genético preimplantacional"
        ],
        respuestaCorrecta: 1,
        explicacion: "La transferencia de embriones (superovulación y recolecta) permite multiplicar la descendencia de hembras élite transfiriendo los embriones recuperados a hembras receptoras sincronizadas."
    },
    {
        id: 59,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Cuál es el principal agente infeccioso bacteriano causante de mortalidad embrionaria temprana, abortos esporádicos y vaginitis en bovinos, transmitido exclusivamente por monta natural?",
        opciones: [
            "A) Campylobacter fetus subsp. venerealis",
            "B) Leptospira pomona",
            "C) Listeria monocytogenes",
            "D) Coxiella burnetii"
        ],
        respuestaCorrecta: 0,
        explicacion: "Campylobacter fetus venerealis es un patógeno venéreo estricto del tracto genital bovino que provoca infertilidad temporal y abortos embrionarios, transmitido por el toro portador asintomático."
    },
    {
        id: 60,
        area: "Reproducción y Biotecnología",
        pregunta: "En perras, ¿cuánto dura aproximadamente la fase de diestro (o seudoesprende / gestación si hubo servicio) y qué hormona predomina en sangre durante este periodo?",
        opciones: [
            "A) 2-3 días con predominio de estrógenos",
            "B) 60-70 días con predominio sostenido de progesterona",
            "C) 2 semanas con predominio de testosterona",
            "D) 6 meses con niveles basales de todas las hormonas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diestro en la perra dura alrededor de 2 meses (60 a 90 días), periodo en el cual el cuerpo lúteo secreta concentraciones elevadas de progesterona, tanto si la perra está gestante como si no."
    },
    {
        id: 61,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Qué método se utiliza para la determinación del momento óptimo de monta o inseminación artificial en perras basado en los cambios citológicos vaginales?",
        opciones: [
            "A) Citología exfoliativa vaginal seriada (presencia >80-90% de células superficiales cornificadas) combinada con medición de progesterona sérica",
            "B) Medición del pH urinario matutino",
            "C) Ultrasonido abdominal diario desde el día 1 de proestro",
            "D) Biopsia hepática percutánea"
        ],
        respuestaCorrecta: 0,
        explicacion: "La cornificación celular vaginal máxima (células superficiales anucleadas y escamas) junto con la medición de progesterona sérica (que indica el pico de LH y la ovulación) son los métodos más precisos para programar la reproducción en perras."
    },
    {
        id: 62,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Cuál es la duración promedio de la gestación en la especie porcina (regla de los tres 3)?",
        opciones: [
            "A) 3 meses, 3 semanas y 3 días (aprox. 114 días)",
            "B) 9 meses y 9 días",
            "C) 2 meses, 2 semanas y 2 días",
            "D) 5 meses exactos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La gestación en las cerdas es muy regular y dura aproximadamente 114 días (3 meses, 3 semanas y 3 días)."
    },
    {
        id: 63,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Qué anomalía del desarrollo sexual (intersexo) se presenta con mayor frecuencia en yeguas con cariotipo 63,X (Síndrome de Turner), caracterizada por infantilismo sexual y ovarios acortados (en forma de estrías)?",
        opciones: [
            "A) Freemartinismo equino",
            "B) Disgenesia gonadal (Síndrome de Turner equino)",
            "C) Hermafroditismo verdadero",
            "D) Hipoplasia testicular bilateral"
        ],
        respuestaCorrecta: 1,
        explicacion: "El síndrome de Turner (monosomía X: 63,X) en yeguas produce una disgenesia gonadal caracterizada por genitales externos pequeños, anestro crónico y ovarios rudimentarios no funcionales."
    },
    {
        id: 64,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Cuál es la causa patogénica del freemartinismo en bovinos mellizos de distinto sexo?",
        opciones: [
            "A) Incompatibilidad de grupos sanguíneos por herencia autosómica recesiva",
            "B) Anastomosis vasculares placentarias que permiten el intercambio de células germinales y hormonas (como AMH y testosterona) del feto macho hacia la hembra, inhibiendo el desarrollo de su tracto reproductor",
            "C) Infección intrauterina por virus de la diarrea viral bovina",
            "D) Deficiencia severa de vitamina A en la madre gestante"
        ],
        respuestaCorrecta: 1,
        explicacion: "El freemartinismo ocurre por la fusión de placentas en gestaciones gemelares mixtas; las hormonas antimülleriana (AMH) y andrógenos del macho penetran al feto hembra, masculinizando parcial o totalmente sus órganos reproductores internos."
    },
    {
        id: 65,
        area: "Reproducción y Biotecnología",
        pregunta: "En la evaluación seminal, ¿qué parámetro evalúa la prueba de tinción con eosina-nigrosina?",
        opciones: [
            "A) La concentración total de espermatozoides por mililitro",
            "B) La integridad de la membrana plasmática (viabilidad o porcentaje de espermatozoides vivos y muertos)",
            "C) El potencial de membrana mitocondrial",
            "D) La presencia de anticuerpos antiespermáticos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La eosina-nigrosina es una tinción vital diferencial; los espermatozoides con membrana plasmática dañada (muertos) permiten la entrada del colorante rojo eosina (se tiñen de rosado), mientras que los vivos permanecen blancos/incoloros sobre el fondo oscuro."
    },
    {
        id: 66,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Cuál es el agente etiológico de la Rabia y a qué familia viral pertenece?",
        opciones: [
            "A) Lyssavirus de la familia Rhabdoviridae",
            "B) Parvovirus de la familia Parvoviridae",
            "C) Lentivirus de la familia Retroviridae",
            "D) Morbillivirus de la familia Paramyxoviridae"
        ],
        respuestaCorrecta: 0,
        explicacion: "El virus de la rabia pertenece al género Lyssavirus dentro de la familia Rhabdoviridae, caracterizado por su forma de bala y neurotropismo estricto."
    },
    {
        id: 67,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué patógeno bacteriano es el responsable del Carbón Bacteriano o Ántrax, una enfermedad zoonótica hiperaguda que causa muerte súbita en rumiantes con sangre oscura incoagulable?",
        opciones: [
            "A) Clostridium chauvoei",
            "B) Bacillus anthracis",
            "C) Francisella tularensis",
            "D) Yersinia pestis"
        ],
        respuestaCorrecta: 1,
        explicacion: "Bacillus anthracis es una bacteria esporulada grampositiva, altamente resistente en el ambiente, causante del ántrax. Está estrictamente prohibido abrir los cadáveres sospechosos para evitar la esporulación de la bacteria al aire."
    },
    {
        id: 68,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Cuál es el mecanismo de transmisión principal del virus de la Peste Porcina Africana (PPA)?",
        opciones: [
            "A) Picadura exclusiva de mosquitos culicoides",
            "B) Contacto directo con animales infectados, ingestión de restos de carne contaminada (swill feeding) y mordeduras de garrapatas blandas del género Ornithodoros",
            "C) Inhalación de esporas fúngicas ambientales",
            "D) Transmisión vertical por leche materna exclusivamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La peste porcina africana es causada por un Asfivirus muy resistente; se transmite por contacto directo, fómites, alimentación con desperdicios contaminados (swill feeding) y vectores biológicos como garrapatas Ornithodoros."
    },
    {
        id: 69,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué parásito externo de los ovinos es el vector principal de la transmisión del virus de la Maedi-Visna o causa severa dermatitis y pérdida de lana por picadura (sarna psoróptica o melofagosis)?",
        opciones: [
            "A) Melophagus ovinus (falsa garrapata o meláfago de la oveja)",
            "B) Ctenocephalides felis",
            "C) Demodex ovis",
            "D) Boophilus microplus"
        ],
        respuestaCorrecta: 0,
        explicacion: "Melophagus ovinus es un díptero áptero (falsa garrapata) que parasita a los ovinos, causando irritación cutánea, pérdida de vellosidad y anemia leve en infestaciones masivas."
    },
    {
        id: 70,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Cuál es la característica clínica principal de la Influenza Aviar de Alta Patogenicidad (IAAP) en aves comerciales?",
        opciones: [
            "A) Disminución leve y transitoria del grosor de la cáscara de huevo sin mortalidad",
            "B) Alta morbilidad y mortalidad súbita cercana al 100%, con signos respiratorios, edema facial, cianosis en crestas y barbillas, y hemorragias petequiales",
            "C) Parálisis flácida ascendente exclusiva de patas",
            "D) Diarrea verde brillante crónica sin lesiones sistémicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La IAAP (cepas H5 y H7 principalmente) provoca cuadros sistémicos hiperagudos con mortalidad masiva y lesiones vasculares severas (edema, cianosis, hemorragias)."
    },
    {
        id: 71,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué enfermedad viral porcina de declaración obligatoria internacional se caracteriza por la aparición de vesículas en hocico, pezuñas y cavidad oral, siendo indistinguible clínicamente de la fiebre aftosa?",
        opciones: [
            "A) Peste porcina clásica",
            "B) Enfermedad vesicular porcina (o exantema vesicular porcino / estomatitis vesicular)",
            "C) Síndrome respiratorio y reproductivo porcino (PRRS)",
            "D) Circovirosis porcina tipo 2"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las enfermedades vesiculares (Fiebre Aftosa, Estomatitis Vesicular, Enfermedad Vesicular del Cerdo) producen lesiones vesiculares idénticas en animales, por lo que toda sospecha requiere diagnóstico diferencial laboratorial urgente."
    },
    {
        id: 72,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Cuál es el principal vector biológico de Babesia bovis y Babesia bigemina en las zonas tropicales y subtropicales de América Latina?",
        opciones: [
            "A) Rhipicephalus (Boophilus) microplus",
            "B) Amblyomma cajennense",
            "C) Ixodes scapularis",
            "D) Otobius megnini"
        ],
        respuestaCorrecta: 0,
        explicacion: "Rhipicephalus microplus (garrapata común del ganado bovino) es el vector específico obligado para la transmisión transovárica de los hemoparásitos causantes de la tristeza parasitaria bovina (Babesia bovis y B. bigemina)."
    },
    {
        id: 73,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué microorganismo causa el tétanos en los animales domésticos (especialmente equinos y pequeños rumiantes), caracterizado por espasmos musculares tónicos y rigidez generalizada?",
        opciones: [
            "A) Clostridium tetani",
            "B) Clostridium botulinum",
            "C) Clostridium perfringens tipo D",
            "D) Bacillus cereus"
        ],
        respuestaCorrecta: 0,
        explicacion: "Clostridium tetani produce una neurotoxina potentísima (tetanospasmina) que bloquea los neurotransmisores inhibidores en el sistema nervioso central, generando espasmos musculares generalizados tras contaminar heridas profundas."
    },
    {
        id: 74,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Cuál es el hospedador definitivo de Fasciola hepatica, trematodo hepático que afecta a rumiantes en zonas encharcadas?",
        opciones: [
            "A) Caracoles de agua dulce del género Lymnaea",
            "B) Rumiantes (bovinos, ovinos, caprinos) y otros mamíferos herbívoros o omnívoros (incluyendo humanos)",
            "C) Peces teleósteos de río",
            "D) Roedores sinantrópicos nocturnos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los rumiantes son los hospedadores definitivos donde el parásito adulto habita los conductos biliares y produce huevos. Los caracoles del género Lymnaea actúan como hospedadores intermediarios obligatorios."
    },
    {
        id: 75,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué patógeno causa la encefalitis espongiforme bovina (EEB), enfermedad neurodegenerativa transmisible?",
        opciones: [
            "A) Un virus ADN sin envoltura",
            "B) Un prión (isoforma patológica de la proteína priónica PrPSc)",
            "C) Un protozoario intracelular estricto",
            "D) Una bacteria esporulada anaerobia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La EEB pertenece a las encefalopatías espongiformes transmisibles, causadas por priones, agentes infecciosos proteicos desprovistos de ácido nucleico."
    },
    {
        id: 76,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es el mecanismo de acción principal de los fármacos antiinflamatorios no esteroidales (AINEs) como el flunixin meglumine o el meloxicam?",
        opciones: [
            "A) Inhibición de la enzima ciclooxigenasa (COX-1 y/o COX-2), bloqueando la síntesis de prostaglandinas a partir del ácido araquidónico",
            "B) Estimulación directa de los receptores opioides mu en la médula espinal",
            "C) Bloqueo de los canales de sodio dependientes de voltaje en terminaciones nerviosas",
            "D) Destrucción de la pared celular bacteriana por inhibición de transpeptidasas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los AINEs actúan inhibiendo las ciclooxigenasas (COX), impidiendo la conversión del ácido araquidónico en prostaglandinas y tromboxanos, mediadores clave de la inflamación, el dolor y la fiebre."
    },
    {
        id: 77,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Por qué los gatos son especialmente susceptibles a la toxicidad por paracetamol (acetaminofén), desarrollando metahemoglobinemia y necrosis hepática severa?",
        opciones: [
            "A) Porque carecen de un sistema digestivo desarrollado para carnes rojas",
            "B) Debido a una deficiencia congénita y significativa en las vías enzimáticas de conjugación hepática por glucuroniltransferasa",
            "C) Porque sus riñones tienen una tasa de filtración glomerular 10 veces mayor que la del perro",
            "D) Debido a la presencia de receptores histaminérgicos hiperactivos en el bazo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los felinos tienen una baja capacidad de glucuronidación hepática, lo que desvía el metabolismo del paracetamol hacia metabolitos tóxicos (como la N-acetil-p-benzoquinonimina) que destruyen los eritrocitos (metahemoglobinemia) y dañan el hígado."
    },
    {
        id: 78,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es el antídoto específico de elección en casos de intoxicación por cumarínicos o rodenticidas anticoagulantes (como warfarina o brodifacoum) en perros y gatos?",
        opciones: [
            "A) Sulfato de atropina",
            "B) Fitomenadiona (Vitamina K1)",
            "C) Azul de metileno",
            "D) Naloxona hidrocloruro"
        ],
        respuestaCorrecta: 1,
        explicacion: "La vitamina K1 (fitomenadiona) es el antídoto directo que repone los factores de coagulación dependientes de vitamina K (II, VII, IX y X) inhibidos por los rodenticidas anticoagulantes."
    },
    {
        id: 79,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Qué grupo de antibióticos bactericidas inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina (PBP), pero está totalmente contraindicado en conejos y hámsteres debido a disbiosis fatal?",
        opciones: [
            "A) Aminoglucósidos",
            "B) Betalactámicos (Penicilinas y Cefalosporinas)",
            "C) Tetraciclinas",
            "D) Sulfonamidas potenciadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso oral de betalactámicos en pequeños herbívoros (conejos, cobayos, hámsteres) destruye la flora cecal grampositiva benéfica, permitiendo la proliferación letal de Clostridium spp. (enterotoxemia fatal)."
    },
    {
        id: 80,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es el mecanismo de acción de los antibióticos aminoglucósidos (como la gentamicina o amikacina) y cuáles son sus principales efectos adversos limitantes?",
        opciones: [
            "A) Inhibición de la síntesis proteica ribosomal (subunidad 30S); sus principales toxicidades son nefrotoxicidad y ototoxicidad",
            "B) Inhibición de la girasa de ADN; causan daño cartilaginoso en animales jóvenes",
            "C) Inhibición de la síntesis de ácido fólico; causan queratoconjuntivitis seca",
            "D) Desacoplamiento de la fosforilación oxidativa mitocondrial"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los aminoglucósidos actúan a nivel ribosomal (30S) afectando la lectura del ARNm. Se acumulan en la corteza renal y en el oído interno, causando nefrotoxicidad tubular y ototoxicidad irreversible."
    },
    {
        id: 81,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "En intoxicaciones agudas por organosfosforados y carbamatos (inhibidores de la acetilcolinesterasa) en animales domésticos, ¿cuál es el tratamiento farmacológico anticolinérgico de urgencia?",
        opciones: [
            "A) Pilocarpina",
            "B) Sulfato de atropina",
            "C) Neostigmina",
            "D) Xilacina"
        ],
        respuestaCorrecta: 1,
        explicacion: "El sulfato de atropina es un antagonista competitivo de los receptores muscarínicos de acetilcolina, revirtiendo los signos colinérgicos periféricos severos (bradicardia, salivación, broncoconstricción, miosis)."
    },
    {
        id: 82,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Qué fármaco sedante y analgésico de la familia de los agonistas alfa-2 adrenérgicos se utiliza habitualmente en equinos, pero requiere precaución extrema por causar hipotensión, bradicardia profunda y bloqueo atrioventricular?",
        opciones: [
            "A) Xilacina o Detomidina",
            "B) Acepromazina",
            "C) Ketamina",
            "D) Propofol"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los alfa-2 agonistas (xilacina, detomidina, romifidina) son excelentes sedantes y analgésicos viscerales en equinos, pero provocan vasoconstricción periférica inicial, hipertensión transitoria, bradicardia refleja y disminución del gasto cardíaco."
    },
    {
        id: 83,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es la planta tóxica de climas templados/fríos que, al ser consumida por rumiantes, provoca insuficiencia cardíaca congestiva crónica debido a la acumulación de glucósidos cardíacos?",
        opciones: [
            "A) Nerium oleander (Adelfa) o Digitalis purpurea",
            "B) Trébol dulce fermentado (Dicumarol)",
            "C) helecho águila (Pteridium aquilinum)",
            "D) Sorgo forrajero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Plantas como Nerium oleander y Digitalis contienen glucósidos cardíacos (cardenólidos) que inhiben la bomba Na+/K+ ATPasa del miocardio, provocando arritmias fatales y fallo cardíaco."
    },
    {
        id: 84,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Qué efecto adverso principal se asocia con el uso prolongado o a altas dosis de glucocorticoides (como la prednisona o dexametasona) en perros?",
        opciones: [
            "A) Hipoglicemia severa y caquexia muscular",
            "B) Inducción de signos de hiperadrenocorticismo iatrogénico, poliuria/polidipsia, atrofia muscular, inmunosupresión y úlceras gástricas",
            "C) Hipertrofia renal bilateral irreversible",
            "D) Ceguera cortical permanente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso crónico de glucocorticoides suprime el eje hipotálamo-hipófisis-adrenal y produce un cuadro clínico idéntico al síndrome de Cushing iatrogénico, además de riesgos ulcerogénicos e inmunosupresión."
    },
    {
        id: 85,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Qué antiparasitario externo perteneciente al grupo de las isoxazolinas (como fluralaner o sarolaner) se administra por vía oral en perros para el control prolongado de pulgas y garrapatas?",
        opciones: [
            "A) Fipronil tópico",
            "B) Fluralaner (comprimido masticable)",
            "C) Amitraz en baño",
            "D) Permetrina en spray"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las isoxazolinas actúan como antagonistas de los canales de cloro regulados por GABA y glutamato en artrópodos, ofreciendo una alta eficacia sistémica prolongada en tabletas masticables para perros."
    },
    {
        id: 86,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Cómo se definen las 'Cinco Libertades' del Bienestar Animal establecidas originalmente por el Consejo de Bienestar de los Animales de Granja (FAWC)?",
        opciones: [
            "A) Libertad de reproducción ilimitada, libertad de hábitat natural, libertad de alimentación industrial, libertad de comercio y libertad de exposición",
            "B) Libres de hambre y sed; libres de incomodidad; libres de dolor, lesión y enfermedad; libres de expresar su comportamiento natural; y libres de miedo y angustia",
            "C) Libres de vacunación, libres de desparasitación, libres de confinamiento nocturno, libres de castración y libres de transporte",
            "D) Libres de propietario, libres de dueño comercial, libres de veterinario, libres de jaula y libres de sacrificio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cinco libertades constituyen el marco ético y científico fundamental para evaluar y garantizar el bienestar de cualquier animal bajo cuidado humano."
    },
    {
        id: 87,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Cuál es el objetivo principal de la aplicación de la eutanasia en medicina veterinaria desde una perspectiva bioética?",
        opciones: [
            "A) Reducir los costos hospitalarios en pacientes crónicos",
            "B) Terminar con el sufrimiento físico insoportable de un paciente cuando el pronóstico de calidad de vida es infausto",
            "C) Cumplir con cuotas comerciales de laboratorios farmacéuticos",
            "D) Evitar la realización de necropsias clínicas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La eutanasia (del griego 'buena muerte') es un acto médico veterinario ético cuyo fin exclusivo es abolir el dolor y el sufrimiento intratable, garantizando una muerte digna y sin estrés."
    },
    {
        id: 88,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Qué organismo gubernamental en México es el responsable principal de emitir las Normas Oficiales Mexicanas (NOM) relacionadas con la sanidad animal, movilización y control de plagas y enfermedades agropecuarias?",
        opciones: [
            "A) Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT)",
            "B) Secretaría de Agricultura y Desarrollo Rural (SADER) a través del SENASICA",
            "C) Secretaría de Economía (SE)",
            "D) Secretaría de Salud (SSa) exclusivamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "SADER, por medio del Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (SENASICA), regula la sanidad animal y vegetal en México."
    },
    {
        id: 89,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Qué principio bioético veterinario obliga al profesional a maximizar los beneficios potenciales de un tratamiento minimizando los riesgos y daños para el paciente?",
        opciones: [
            "A) Principio de autonomía",
            "B) Principio de beneficencia",
            "C) Principio de justicia distributiva",
            "D) Principio de no maleficencia estricta"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio de beneficencia guía al médico veterinario a actuar activamente en pro del bienestar del animal, procurando el mayor beneficio terapéutico posible."
    },
    {
        id: 90,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Cuál es la implicación legal y ética de la prescripción de medicamentos de uso humano fuera de etiqueta (off-label) en animales destinados al consumo humano?",
        opciones: [
            "A) Está totalmente permitida sin restricciones de tiempo de retiro",
            "B) Requiere un riguroso protocolo de tiempos de retiro prolongados y justificación clínica estricta, debido al riesgo de residuos tóxicos en la cadena alimentaria humana",
            "C) Es un delito federal sin excepción bajo ninguna circunstancia médica",
            "D) Solo puede realizarse si el fármaco es un antibiótico betalactámico"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso off-label en animales de abasto representa un riesgo de salud pública por residuos químicos en carne, leche o huevos, por lo que exige calcular tiempos de retiro seguros y fundamentados."
    },
    {
        id: 91,
        area: "Sección Transversal / Metodología",
        pregunta: "¿Qué diseño de estudio epidemiológico se considera el más adecuado y de mayor jerarquía científica para evaluar la eficacia causal de un nuevo fármaco veterinario frente a un tratamiento estándar?",
        opciones: [
            "A) Estudio de casos y controles retrospectivo",
            "B) Ensayo clínico controlado aleatorizado y cegado",
            "C) Serie de casos clínicos descriptivos",
            "D) Encuesta de opinión a productores"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ensayo clínico aleatorizado y controlado es el estándar de oro en epidemiología clínica para demostrar causalidad y eficacia terapéutica al minimizar sesgos de selección y confusión."
    },
    {
        id: 92,
        area: "Sección Transversal / Metodología",
        pregunta: "¿Cómo se define la 'Sensibilidad' de una prueba diagnóstica veterinaria?",
        opciones: [
            "A) La probabilidad de que la prueba arroje un resultado negativo en animales sanos",
            "B) La capacidad de la prueba para detectar correctamente a los animales verdaderamente enfermos (proporción de verdaderos positivos)",
            "C) La proporción de animales negativos que están libres de la enfermedad",
            "D) El porcentaje de muestras que no requieren refrigeración"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sensibilidad mide la proporción de individuos enfermos que dan positivo a la prueba; una prueba muy sensible es ideal para tamizaje (screening) porque minimiza los falsos negativos."
    },
    {
        id: 93,
        area: "Sección Transversal / Metodología",
        pregunta: "En un brote de una enfermedad respiratoria en una granja porcina, ¿qué indicador epidemiológico mide la velocidad con la que se propagan los nuevos casos en la población susceptible durante un periodo específico?",
        opciones: [
            "A) Prevalencia puntual",
            "B) Incidencia acumulada o tasa de incidencia",
            "C) Tasa de letalidad global",
            "D) Razón de momios (Odds Ratio)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La incidencia mide el número de casos nuevos que aparecen en una población en riesgo durante un intervalo de tiempo determinado, reflejando la velocidad de transmisión del brote."
    },
    {
        id: 94,
        area: "Sección Transversal / Metodología",
        pregunta: "¿Qué prueba estadística paramétrica se utiliza para comparar las medias de dos grupos independientes (por ejemplo, ganancia de peso entre un lote testigo y un lote tratado con un promotor de crecimiento)?",
        opciones: [
            "A) Prueba de Chi-cuadrada de Pearson",
            "B) Prueba t de Student para muestras independientes",
            "C) Análisis de varianza (ANOVA) multifactorial no paramétrico de Kruskal-Wallis",
            "D) Coeficiente de correlación de Spearman"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba t de Student para muestras independientes es la prueba estadística clásica para evaluar si existen diferencias estadísticamente significativas entre las medias de dos grupos con distribución normal."
    },
    {
        id: 95,
        area: "Sección Transversal / Metodología",
        pregunta: "En una investigación científica, ¿qué representa el error tipo I (alfa)?",
        opciones: [
            "A) Rechazar la hipótesis nula (H0) cuando esta es verdadera (falso positivo estadístico)",
            "B) Aceptar la hipótesis nula cuando es falsa (falso negativo estadístico)",
            "C) El sesgo de selección en la muestra de animales",
            "D) La falta de potencia estadística por tamaño de muestra pequeño"
        ],
        respuestaCorrecta: 0,
        explicacion: "El error tipo I (alfa, comúnmente fijado en 0.05 o 5%) ocurre cuando el investigador concluye erróneamente que existe una diferencia o efecto significativo cuando en realidad no lo hay."
    },
    {
        id: 96,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué hallazgo citológico o histopatológico confirma el diagnóstico de mastocitoma cutáneo en un canino?",
        opciones: [
            "A) Presencia de abundantes células redondas con gránulos metacromáticos morados/azules en su citoplasma (tinción de Wright o Giemsa)",
            "B) Células fusiformes con mitosis atípicas y pigmento melánico",
            "C) Células epiteliales formando acinos glandulares secretores de leche",
            "D) Linfocitos pequeños maduros sin actividad mitótica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los mastocitomas se caracterizan citológicamente por ser neoplasias de células redondas que contienen gránulos metacromáticos en el citoplasma, los cuales se tiñen intensamente con tinciones tipo Romanowsky (como Giemsa o Diff-Quik)."
    },
    {
        id: 97,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es el agente etiológico de la paratuberculosis bovina (enteritis paratuberculosa), una enfermedad granulomatosa crónica caracterizada por diarrea profusa e pérdida de peso irreversible?",
        opciones: [
            "A) Mycobacterium avium subespecie paratuberculosis",
            "B) Clostridium perfringens tipo C",
            "C) Salmonella dublin",
            "D) Bovine coronavirus"
        ],
        respuestaCorrecta: 0,
        explicacion: "Mycobacterium avium subsp. paratuberculosis infecta principalmente a rumiantes jóvenes vía fecal-oral, causando un engrosamiento severo de la mucosa intestinal (enteritis granulomatosa) y emaciación."
    },
    {
        id: 98,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es la técnica quirúrgica paliativa o correctiva de elección para el tratamiento del síndrome braquicefálico obstructivo en perros (como Bulldogs o Pugs)?",
        opciones: [
            "A) Resección del paladar blando redundante (estafiloplastia) y rinoplastia para ensanchar narinas",
            "B) Traqueostomía permanente de rutina en todos los cachorros",
            "C) Toracotomía dorsal para resección pulmonar bilateral",
            "D) Esofagotomía proximal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El síndrome braquicefálico involucra narinas estenóticas, paladar blando alargado y eversión de sacículos laríngeos; la corrección quirúrgica incluye la rinoplastia y la resección del exceso de paladar blando."
    },
    {
        id: 99,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué enfermedad viral transmitida por mosquitos afecta a equinos y humanos, causando encefalitis grave, siendo un programa de vacunación anual obligatorio en zonas endémicas de América?",
        opciones: [
            "A) Encefalitis equina venezolana, del este o del oeste",
            "B) Anemia infecciosa equina",
            "C) Arteritis viral equina",
            "D) Metritis contagiosa equina"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los virus de la encefalitis equina (Venezolana, Este y Oeste) son arbovirus zoonóticos transmitidos por mosquitos que afectan el sistema nervioso central de equinos y personas."
    },
    {
        id: 100,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué componente de la planta de sorgo o maíz inmaduro puede causar una intoxicación aguda fulminante por ácido cianhídrico (HCN) en rumiantes tras ser pastoreados en condiciones de estrés (sequía o heladas)?",
        opciones: [
            "A) Glucósidos cianogénicos (como la dhurrina)",
            "B) Alcaloides quinolizidínicos",
            "C) Micotoxinas zearalenona",
            "D) Oxalatos solubles de calcio"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sorgo y otros forrajes pueden acumular glucósidos cianogénicos (dhurrina); al dañarse la planta, las enzimas vegetales liberan ácido cianhídrico libre, el cual bloquea la citocromo oxidasa celular causando muerte por anoxia tisular."
    },
    {
        id: 101,
        area: "Reproducción y Biotecnología",
        pregunta: "En la evaluación ecográfica transrectal de una yegua en anestro estacional invernal, ¿cómo se observan típicamente los ovarios?",
        opciones: [
            "A) Grandes, activos con múltiples cuerpos lúteos palpables",
            "B) Pequeños, inactivos, firmes y sin folículos mayores de 10-15 mm",
            "C) Con presencia exclusiva de folículos preovulatorios gigantes de 50 mm",
            "D) Con quistes foliculares luteinizados bilaterales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Durante el fotoperiodo corto invernal, las yeguas entran en anestro fisiológico, caracterizado por una suppression del eje hipotálamo-hipófisis-gonadal y ovarios pequeños e inactivos."
    },
    {
        id: 102,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué enfermedad viral aviar provoca tumores linfoides viscerales (especialmente en hígado, bazo y gónadas), parálisis transitoria de nervios periféricos y es causada por un Herpesvirus aviar?",
        opciones: [
            "A) Enfermedad de Marek",
            "B) Newcastle velogénico viscerotrópico",
            "C) Bronquitis infecciosa aviar",
            "D) Bursitis infecciosa (Enfermedad de Gumboro)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La enfermedad de Marek es un linfoma T inducido por un alfaherpesvirus aviar, caracterizado por infiltración tumoral en nervios periféricos y órganos viscerales."
    },
    {
        id: 103,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es el uso farmacológico principal del bromuro de potasio (KBr) en medicina veterinaria de pequeños animales?",
        opciones: [
            "A) Anticonvulsivante adyuvante de mantenimiento en epilepsia idiopática canina",
            "B) Diurético de asa para edema pulmonar agudo cardiogénico",
            "C) Vasodilatador arterial para hipertensión sistémica felina",
            "D) Estimulante respiratorio en neonatos deprimidos por anestesia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El bromuro de potasio es un fármaco anticonvulsivante clásico que se utiliza frecuentemente en combinación con el fenobarbital para el control de la epilepsia idiopática refractaria en perros."
    },
    {
        id: 104,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Qué define el concepto de 'Una Sola Salud' (One Health) promovido por la OMS, la OIE y la FAO?",
        opciones: [
            "A) La exclusividad de la medicina veterinaria en la clínica de pequeñas especies",
            "B) La colaboración multisectorial e interdisciplinaria que reconoce que la salud humana, la salud animal y los ecosistemas están interconectados",
            "C) El uso exclusivo de medicina holística y homeopática en la producción pecuaria",
            "D) La erradicación total de la ganadería intensiva mundial"
        ],
        respuestaCorrecta: 1,
        explicacion: "One Health establece que la salud de las personas, los animales y el medio ambiente son inseparables, siendo vital el trabajo coordinado entre médicos veterinarios, médicos humanos y ambientalistas."
    },
    {
        id: 105,
        area: "Sección Transversal / Metodología",
        pregunta: "Al calcular el tamaño de muestra para una encuesta de seroprevalencia de una enfermedad en un hato bovino, ¿qué parámetro estadístico determina la amplitud del intervalo de confianza aceptado?",
        opciones: [
            "A) El nivel de confianza deseado (ej. 95%) y el error de estimación (precisión)",
            "B) El color del pelaje de los animales evaluados",
            "C) La marca de las jeringas utilizadas para la toma de muestra",
            "D) La temperatura ambiente del día del muestreo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cálculo del tamaño muestral depende de la proporción esperada de la enfermedad, el nivel de confianza (Z) y el error máximo tolerable (precisión o error de estimación)."
    },
    {
        id: 106,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué tinción especial se emplea de rutina en bacteriología veterinaria para identificar bacterias ácido-alcohol resistentes como Mycobacterium tuberculosis o M. bovis?",
        opciones: [
            "A) Tinción de Gram",
            "B) Tinción de Ziehl-Neelsen",
            "C) Tinción de Azul de Metileno de Loeffler",
            "D) Tinción de Wright-Giemsa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tinción de Ziehl-Neelsen aprovecha la alta concentración de ácidos micólicos en la pared celular de las micobacterias, las cuales retienen el colorante fucsina básica a pesar de la decoloración ácido-alcohólica."
    },
    {
        id: 107,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es la causa principal de la cetosis clínica (acetonemia) en vacas lecheras de alta producción durante el periodo de transición temprano?",
        opciones: [
            "A) Balance energético negativo (BEN) severo, donde la ingesta de alimento no cubre los requerimientos de glucosa para la lactancia, movilizándose grasa corporal en exceso",
            "B) Consumo excesivo de sodio en agua de bebida",
            "C) Infección crónica por trematodos ruminales",
            "D) Deficiencia exclusiva de vitamina C sintetizada en rumen"
        ],
        respuestaCorrecta: 0,
        explicacion: "El BEN periparto obliga a la vaca a lipomovilizar triglicéridos desde el tejido adiposo hacia el hígado; cuando superan la capacidad hepática de oxidación o esterificación, se forman cuerpos cetónicos (acetoacetato, beta-hidroxibutirato)."
    },
    {
        id: 108,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es el tratamiento quirúrgico correctivo definitivo para la ruptura del tendón de Aquiles en un perro?",
        opciones: [
            "A) Sutura tenosinovial primaria reforzada con técnicas de devascularización y inmovilización articular postoperatoria (fijación externa o férula)",
            "B) Amputación total de la extremidad afectada a nivel coxofemoral",
            "C) Administración exclusiva de condroprotectores orales",
            "D) Reposo absoluto en jaula sin vendaje durante 6 meses"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ruptura del tendón de Aquiles (gastrocnemio, flexor digital superficial y tendón común) requiere una tenorrafia quirúrgica firme utilizando patrones de sutura resistentes (tres asas modificado, Kuruwada) y soporte rígido temporal."
    },
    {
        id: 109,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Qué medida sanitaria de control se aplica en un predio bovino ante un resultado positivo a la prueba intradérmica de tuberculina (Prueba caudal de pliegue o comparativa)?",
        opciones: [
            "A) Cuarentena del hato, prueba confirmatoria (comparativa o interferón gamma) y eliminación (sacrificio sanitario) de los animales reactores positivos",
            "B) Venta libre e inmediata de los animales al mercado local sin restricción",
            "C) Aplicación masiva de antibióticos macrólidos por vía parenteral",
            "D) Lavado gástrico estricto de todo el ganado lechero"
        ],
        respuestaCorrecta: 0,
        explicacion: "La detección de reactores positivos a tuberculosis bovina exige el aislamiento, cuarentena y sacrificio sanitario de los animales afectados conforme a las campañas oficiales de erradicación."
    },
    {
        id: 110,
        area: "Nutrición y Alimentación Animal",
        pregunta: "¿Qué valor nutricional mide el sistema de unidades forrajeras (UF) o energía netas en la alimentación de rumiantes en Europa?",
        opciones: [
            "A) La cantidad equivalente de energía neta para mantenimiento y producción de carne o leche en relación con 1 kg de cebada estándar",
            "B) El volumen de agua retenida en el rumen tras 24 horas",
            "C) La concentración exacta de cenizas insolubles en ácido",
            "D) El contenido total de fibra cruda digestible"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sistema de Unidades Forrajeras (como la UFL para leche y UFV para carne) expresa el valor energético de los alimentos tomando como referencia la energía neta de 1 kg de cebada estándar."
    },
    {
        id: 111,
        area: "Reproducción y Biotecnología",
        pregunta: "¿Cuál es la utilidad del uso de dispositivos intravaginales liberadores de progesterona (PRID o CIDR) combinados con benzoato de estradiol en protocolos de IATF en bovinos?",
        opciones: [
            "A) Sincronizar la onda de crecimiento folicular y el momento de la ovulación para inseminar a hora fija sin necesidad de detectar celo",
            "B) Inducir abortos terapéuticos en cualquier etapa de la gestación",
            "C) Incrementar drásticamente el peso al destete de los becerros machos",
            "D) Prevenir la aparición de enfermedades podales infecciosas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los dispositivos con progesterona simulan un cuerpo lúteo funcional inhibiendo el celo y la ovulación, mientras que el estradiol sincroniza la emergencia de una nueva onda folicular, logrando una IATF altamente sincronizada."
    },
    {
        id: 112,
        area: "Enfermedades Infecciosas y Parasitarias",
        pregunta: "¿Qué patógeno bacteriano causa la enfermedad de Glässer (poliserositis infecciosa, poliartritis y meningitis) en lechones destetados?",
        opciones: [
            "A) Haemophilus parasuis (Glaesserella parasuis)",
            "B) Mycoplasma hyopneumoniae",
            "C) Actinobacillus pleuropneumoniae",
            "D) Erysipelothrix rhusiopathiae"
        ],
        respuestaCorrecta: 0,
        explicacion: "Glaesserella (anteriormente Haemophilus) parasuis es un habitante normal del tracto respiratorio superior del cerdo que, bajo estrés, causa poliserositis fibrinosa sistémica (enfermedad de Glässer)."
    },
    {
        id: 113,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Cuál es el riesgo toxicológico principal asociado al uso de analgésicos opioides (como fentanilo, morfina o buprenorfina) en felinos cuando se administran a dosis excesivas o sin estímulo doloroso?",
        opciones: [
            "A) Depresión respiratoria severa e hipertermia paradójica / excitación (denominada 'manía opiácea' o disforia)",
            "B) Insuficiencia cardíaca congestiva valvular aguda",
            "C) Necrosis tubular renal irreversible en 24 horas",
            "D) Parálisis flácida de los músculos de la masticación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Aunque los opioides son excelentes analgésicos en gatos, en ausencia de dolor o con sobredosis pueden provocar excitación central (disforia), hipertermia por alteración termorreguladora y depresión respiratoria."
    },
    {
        id: 114,
        area: "Ética, Bienestar y Legislación",
        pregunta: "¿Qué establece la legislación mexicana general respecto al uso de animales en experimentos científicos (Ley General de Salud y NOM-062-ZOO-1999)?",
        opciones: [
            "A) El principio de las 3 Rs (Reemplazo, Reducción y Refinamiento) para minimizar el sufrimiento y asegurar el bienestar de los animales de laboratorio",
            "B) La prohibición absoluta de realizar cualquier investigación biomédica con animales",
            "C) La obligación de utilizar exclusivamente perros callejeros en protocolos farmacológicos",
            "D) La exención de anestesia en roedores durante cirugías mayores"
        ],
        respuestaCorrecta: 0,
        explicacion: "La NOM-062-ZOO-1999 y las regulaciones éticas internacionales se basan en las 3 Rs (Replace, Reduce, Refine) para garantizar el uso ético y humanitario de animales de laboratorio."
    },
    {
        id: 115,
        area: "Sección Transversal / Metodología",
        pregunta: "¿Qué es la 'validez externa' en el contexto de la investigación científica veterinaria?",
        opciones: [
            "A) El grado en que los resultados obtenidos en una muestra de estudio pueden ser generalizados a la población general o a otras poblaciones de animales",
            "B) La precisión de los instrumentos de medición en el laboratorio de patología",
            "C) La ausencia total de sesgos de información en el cuestionario",
            "D) El porcentaje de animales que completaron el experimento sin enfermar"
        ],
        respuestaCorrecta: 0,
        explicacion: "La validez externa se refiere a la capacidad de generalizar y extrapolar los hallazgos de una investigación más allá del grupo específico de estudio analizado."
    },
    {
        id: 116,
        area: "Diagnóstico Clínico y Laboratorio",
        pregunta: "¿Qué alteración ácido-base sanguínea se espera encontrar en un canino con vómitos persistentes y profusos debidos a obstrucción pilórica o gástrica alta?",
        opciones: [
            "A) Acidosis metabólica hiperclorémica",
            "B) Alcalosis metabólica hipoclorémica con hipokalemia",
            "C) Acidosis respiratoria aguda sin compensación",
            "D) Alcalosis respiratoria por hiperventilación pulmonar"
        ],
        respuestaCorrecta: 1,
        explicacion: "El vómito gástrico elimina ácido clorhídrico (HCl) y cloruro, provocando una pérdida masiva de H+ y Cl- gástrico, lo que genera una alcalosis metabólica hipoclorémica acompañada comúnmente de hipokalemia por redistribución y pérdida renal."
    },
    {
        id: 117,
        area: "Medicina y Producción de Rumiantes",
        pregunta: "¿Cuál es el agente causal de la mancha o pierna negra (gangrena enfisematosa) en bovinos jóvenes, caracterizada por cojera aguda, crepitación a la palpación muscular y muerte rápida?",
        opciones: [
            "A) Clostridium chauvoei",
            "B) Clostridium septicum",
            "C) Clostridium novyi",
            "D) Bacillus anthracis"
        ],
        respuestaCorrecta: 0,
        explicacion: "Clostridium chauvoei es una bacteria anaerobia estricta esporulada que causa la miositis enfisematosa (mancha), caracterizada por inflamación crepitante muscular y toxemia sistémica fulminante."
    },
    {
        id: 118,
        area: "Medicina y Cirugía de Pequeños Especies",
        pregunta: "¿Cuál es la técnica quirúrgica recomendada para la corrección permanente del entropión (inversión del párpado) en caninos?",
        opciones: [
            "A) Procedimiento de Hotz-Celsus (resección de un huso de piel y músculo orbicular del ojo)",
            "B) Cantotomía lateral total sin sutura",
            "C) Resección completa del cartílago tarsal superior",
            "D) Tarsorrafia temporal permanente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La técnica quirúrgica de Hotz-Celsus es el procedimiento estándar de escisión cutánea y muscular para evertir el margen palpebral afectado por entropión."
    },
    {
        id: 119,
        area: "Salud Pública y Zoonosis",
        pregunta: "¿Cuál es el mecanismo principal de transmisión de la Fiebre Q (Coxiella burnetii) a los seres humanos desde los animales reservorios (ovinos, caprinos y bovinos)?",
        opciones: [
            "A) Inhalación de aerosoles contaminados con polvo proveniente de líquidos fetales, placenta y membranas amnióticas desecadas",
            "B) Picadura de pulgas de la rata Ctenocephalides felis",
            "C) Ingestión de agua potable clorada de red municipal",
            "D) Mordedura directa de animales silvestres rabiosos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Coxiella burnetii es una bacteria extremadamente resistente en el ambiente; las parturientas de rumiantes liberan millones de bacterias en placentas y líquidos, cuya inhalación en aerosoles causa la fiebre Q humana."
    },
    {
        id: 120,
        area: "Farmacología y Toxicología Veterinaria",
        pregunta: "¿Qué clase de fármacos diuréticos actúa inhibiendo el cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle, siendo altamente potentes para el tratamiento del edema pulmonar agudo en perros y caballos?",
        opciones: [
            "A) Diuréticos de asa (como la Furosemida)",
            "B) Diuréticos ahorradores de potasio (como la Espironolactona)",
            "C) Diuréticos tiazídicos (como la Hidroclorotiazida)",
            "D) Inhibidores de la anhidrasa carbónica (como la Acetazolamida)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La furosemida es el diurético de asa más utilizado en veterinaria; bloquea la reabsorción de sodio, potasio y cloro en el asa de Henle, promoviendo una rápida excreción de agua y alivio de la congestión pulmonar."
    }
];