const bancoPreguntas = [
    {
        id: 1,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente masculino de 45 años acude a consulta por dolor punzante en el órgano dentario 46, provocado por estímulos térmicos (frío/caliente) que persiste varios minutos. Radiográficamente se observa zona radiolúcida compatible con caries oclusal profunda cercana al cuerno pulpar sin lesión periapical. ¿Cuál es el diagnóstico pulpar?",
        opciones: [
            "A) Pulpitis reversible",
            "B) Necrosis pulpar",
            "C) Pulpitis irreversible sintomática",
            "D) Pulpitis irreversible asintomática"
        ],
        respuestaCorrecta: 2,
        explicacion: "La pulpitis irreversible sintomática se caracteriza por dolor agudo prolongado ante estímulos térmicos, indicando un daño tisular profundo que requiere tratamiento de conductos."
    },
    {
        id: 2,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Cuál es la concentración recomendada de flúor en partes por millón (ppm) en pastas dentales para niños mayores de 6 años y adultos según la normatividad internacional de salud pública para prevención de caries?",
        opciones: [
            "A) 1000 a 1500 ppm",
            "B) 250 a 500 ppm",
            "C) 3000 a 5000 ppm",
            "D) 100 a 200 ppm"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pastas dentales estándar con concentraciones de 1000 a 1500 ppm de flúor demuestran la eficacia clínica óptima en la remineralización del esmalte dental."
    },
    {
        id: 3,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la preparación biomecánica para una corona total de porcelana libre de metal en un incisivo central, ¿cuál es el tipo de terminación marginal recomendado para distribuir uniformemente las fuerzas oclusales?",
        opciones: [
            "A) Filo de cuchillo",
            "B) Bisel subgingival largo",
            "C) Hombro de 90° con ángulo interno redondeado",
            "D) Chaflán superficial a 30 grados"
        ],
        respuestaCorrecta: 2,
        explicacion: "El hombro de 90° redondeado ofrece una base sólida y uniforme que previene la fractura frágil de la cerámica pura al recibir fuerzas compresivas."
    },
    {
        id: 4,
        area: "Cirugía y Periodoncia",
        pregunta: "Durante la técnica de anestesia del nervio alveolar inferior, el paciente refiere sensación de descarga eléctrica irradiada hacia la lengua. ¿Qué estructura anatómica fue contactada por la aguja?",
        opciones: [
            "A) Nervio bucal largo",
            "B) Nervio lingual",
            "C) Nervio mentoniano",
            "D) Nervio milohioideo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El nervio lingual se localiza medial y anterior al nervio alveolar inferior; un contacto directo de la aguja produce parestesia transitoria en la lengua."
    },
    {
        id: 5,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "Paciente de 5 años presenta caries profunda con exposición pulpar en el segundo molar primario inferior, sin reabsorción radicular avanzada. ¿Cuál es el tratamiento conservador indicado para preservar el órgano dentario como mantenedor de espacio natural?",
        opciones: [
            "A) Extracción simple sin aparatología",
            "B) Recubrimiento pulpar directo con ionómero",
            "C) Pulpectomía total con gutapercha rígida",
            "D) Pulpotomía y colocación de corona de acero-cromo"
        ],
        respuestaCorrecta: 3,
        explicacion: "La pulpotomía combinada con una corona de acero-cromo es el tratamiento de elección en molares temporales con afectación pulpar coronal para mantener la longitud del arco."
    },
    {
        id: 6,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Mujer de 30 años presenta movilidad grado II en órganos dentarios anteroinferiores, pérdida ósea horizontal generalizada del 40% y acumulación masiva de cálculo subgingival. ¿Cuál es el diagnóstico periodontal preliminar?",
        opciones: [
            "A) Gingivitis inducida por placa bacteriana",
            "B) Periodontitis Estadio III, Grado B generalizada",
            "C) Absceso periodontal agudo localizado",
            "D) Trauma oclusal primario sin pérdida de inserción"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una pérdida ósea del 40% asociada a sacos periodontales y movilidad clasifica el cuadro clínico dentro de la periodontitis estadio avanzado (Estadio III o IV)."
    },
    {
        id: 7,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "¿Cuál es el componente de la estructura de las resinas compuestas fotopolimerizables que actúa como iniciador de la polimerización al ser activado por luz azul (460-480 nm)?",
        opciones: [
            "A) Bis-GMA",
            "B) Canforoquinona combinada con una amina terciaria",
            "C) Sílice coloidal de relleno",
            "D) Silano de unión interfacial"
        ],
        respuestaCorrecta: 1,
        explicacion: "La canforoquinona es el fotoiniciador estándar que, al absorber luz en el espectro azul junto con una amina terciaria, genera radicales libres para endurecer la resina."
    },
    {
        id: 8,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "En un programa comunitario de salud bucal escolar, ¿qué método preventivo demuestra mayor efectividad poblacional específica para evitar la caries en fosetas y fisuras de molares permanentes recién erupcionados?",
        opciones: [
            "A) Colocación de selladores de fosetas y fisuras de resina o ionómero",
            "B) Enjuagues diarios con clorhexidina al 0.12%",
            "C) Profilaxis profesional mensual con pasta profiláctica abrasiva",
            "D) Aplicación tópica de nitrato de plata al 38%"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los selladores de fosetas y fisuras forman una barrera física mecánica que aísla las zonas retentivas más susceptibles de los molares permanentes infantiles."
    },
    {
        id: 9,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es la complicación postoperatoria más frecuente asociada a la extracción quirúrgica de un tercer molar inferior retenido que requiere osteotomía amplia?",
        opciones: [
            "A) Alveolitis seca (osteítis fibrinolítica)",
            "B) Fractura completa del cuerpo mandibular",
            "C) Anquilosis de la articulación temporomandibular",
            "D) Comunicación sinonasal permanente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La disolución prematura del coágulo sanguíneo o alveolitis seca es la complicación postquirúrgica más común tras la extracción de terceros molares inferiores."
    },
    {
        id: 10,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "Durante la evaluación de la oclusión en un paciente infantil, se observa relación molar bilateral donde la cúspide mesiovestibular del primer molar permanente superior ocluye por detrás del surco vestibular del primer molar inferior. ¿Cómo se clasifica esta relación molar según Angle?",
        opciones: [
            "A) Clase I de Angle",
            "B) Clase II división 1 de Angle",
            "C) Clase III de Angle",
            "D) Mordida cruzada posterior unilateral"
        ],
        respuestaCorrecta: 2,
        explicacion: "La relación mesial del arco mandibular respecto al maxilar superior donde el surco mesial inferior se adelanta define la maloclusión Clase III de Angle."
    },
    {
        id: 11,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente acude con lesión ulcerosa solitaria en borde lateral de lengua, de evolución crónica (más de 3 semanas), bordes indurados y fondo blanquecino, indolora a la palpación. ¿Cuál es el procedimiento diagnóstico mandatorio?",
        opciones: [
            "A) Aplicación tópica de analgésicos y observación por dos meses",
            "B) Biopsia incisional para estudio histopatológico",
            "C) Raspaje y alisado radicular de dientes vecinos",
            "D) Drenaje con aguja fina por sospecha de absceso lingual"
        ],
        respuestaCorrecta: 1,
        explicacion: "Toda úlcera crónica con bordes indurados e indolora requiere biopsia incisional para descartar carcinoma epidermoide u otras neoplasias malignas."
    },
    {
        id: 12,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la cementación adhesiva de pernos de fibra de vidrio en dientes tratados endodóticamente, ¿qué función cumple el agente silano aplicado al perno antes del cemento resinoso?",
        opciones: [
            "A) Neutralizar la acidez de la dentina radicular",
            "B) Incrementar la flexibilidad elástica del núcleo metálico",
            "C) Favorecer la unión química entre la matriz orgánica del cemento y la superficie inorgánica de sílice del perno",
            "D) Impedir la filtración bacteriana por disolución acuosa"
        ],
        respuestaCorrecta: 2,
        explicacion: "El silano actúa como agente de acoplamiento bifuncional que une químicamente la fase orgánica resinosa con las cargas de vidrio o sílice de la fibra."
    },
    {
        id: 13,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué factor de riesgo sistémico se encuentra más estrechamente vinculado con el fracaso de los implantes dentales osteointegrados y la progresión de la periimplantitis?",
        opciones: [
            "A) Consumo activo de tabaco (tabaquismo crónico)",
            "B) Ingesta moderada de café diario",
            "C) Práctica de natación en piscinas con cloro",
            "D) Deficiencia leve de vitamina C estacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El tabaquismo altera la microcirculación tisular, disminuye la respuesta inmunológica local y reduce drásticamente la tasa de osteointegración de los implantes."
    },
    {
        id: 14,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el microorganismo patógeno periodontal anaerobio estricto considerado marcador clave en la patogenia de la periodontitis crónica severa (Complejo Rojo)?",
        opciones: [
            "A) Streptococcus mutans",
            "B) Lactobacillus acidophilus",
            "C) Porphyromonas gingivalis",
            "D) Actinomyces israelii"
        ],
        respuestaCorrecta: 2,
        explicacion: "Porphyromonas gingivalis forma parte del complejo rojo junto con Treponema denticola y Tannerella forsythia, altamente destructivos para el tejido periodontal."
    },
    {
        id: 15,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "Ante la pérdida prematura bilateral de segundos molares temporales inferiores debido a caries severas, con primeros molares permanentes ya erupcionados y sin erupcionar segundo premolar, ¿qué aparato ortopédico fijo está indicado?",
        opciones: [
            "A) Banda y ansa unilateral",
            "B) Arco lingual de contención y mantenimiento de espacio",
            "C) Placa de Hawley removible con tornillo de expansión",
            "D) Botón de Nance maxilar"
        ],
        respuestaCorrecta: 1,
        explicacion: "El arco lingual es el mantenedor de espacio fijo bilateral ideal en la arcada inferior para prevenir la mesialización de los molares permanentes tras perder dientes temporales."
    },
    {
        id: 16,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "En la interpretación radiográfica periapical, una lesión radiolúcida bien definida, redondeada, rodeada por un halo esclerótico radioopaco en el ápice de un diente con necrosis pulpar corresponde típicamente a:",
        opciones: [
            "A) Un quiste radicular",
            "B) Un absceso periapical agudo",
            "C) Displasia cemento-ósea periapical",
            "D) Osteomielitis esclerosante difusa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los quistes radiculares suelen mostrarse radiográficamente como imágenes radiolúcidas circunscritas con un fino borde cortical radioopaco de esclerosis ósea reactiva."
    },
    {
        id: 17,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la toma de impresiones dentales definitivas para prótesis fija, ¿qué característica principal posee el material elastomérico de tipo silicona por adición (polivinilsiloxano)?",
        opciones: [
            "A) Libera subproductos alcohólicos que generan alta contracción volumétrica",
            "B) Posee excelente estabilidad dimensional y no genera subproductos volátiles durante su fraguado",
            "C) Requiere vaciado inmediato en menos de 5 minutos obligatorios",
            "D) Presenta rigidez extrema que impide su retiro en zonas retentivas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las siliconas por adición son los elastómeros más estables dimensionalmente porque no liberan subproductos gaseosos o líquidos durante su polimerización."
    },
    {
        id: 18,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "Según la clasificación de lesiones cariosas de G.V. Black, ¿en qué categoría se ubican aquellas lesiones localizadas en el tercio gingival vestibular o lingual de todos los dientes?",
        opciones: [
            "A) Clase I",
            "B) Clase III",
            "C) Clase V",
            "D) Clase II"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las restauraciones o lesiones de Clase V de Black corresponden exclusivamente al tercio cervical (gingival) de las superficies vestibulares o linguales/palatinas."
    },
    {
        id: 19,
        area: "Cirugía y Periodoncia",
        pregunta: "Durante una cirugía periodontal de colgajo de desplazamiento coronal para recubrimiento radicular, ¿qué instrumento microquirúrgico es indispensable para realizar la incisión intrasulcular precisa?",
        opciones: [
            "A) Fórceps universal de extracción",
            "B) Bisturí con hoja número 15C o microbisturí laminar",
            "C) Cureta Gracey 1/2 de raspaje profundo",
            "D) Periostótomo de Molt ancho"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las hojas de bisturí finas como la 15C o microbisturíes permiten incisiones delicadas y precisas en los tejidos gingivales sin desgarrar la papila interdental."
    },
    {
        id: 20,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿A qué edad cronológica promedio se considera completa la erupción de la dentición temporal (primaria) en humanos?",
        opciones: [
            "A) A los 12 meses de edad",
            "B) A los 3 años de edad (± 6 meses)",
            "C) A los 8 años de edad",
            "D) A los 12 años de edad"
        ],
        respuestaCorrecta: 1,
        explicacion: "La erupción de los 20 dientes temporales concluye habitualmente alrededor de los 3 años de edad, coincidiendo con el cierre de las raíces de los segundos molares."
    },
    {
        id: 21,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente femenino de 60 años presenta dolor facial paroxístico severo, de corta duración (segundos), similar a una descarga eléctrica en la región maxilar derecha, desencadenado al hablar o masticar. ¿Cuál es el diagnóstico más probable?",
        opciones: [
            "A) Neuralgia del trigémino (quinto par craneal)",
            "B) Disfunción de la articulación temporomandibular miógena",
            "C) Pulpitis aguda del primer molar superior",
            "D) Sinusitis maxilar aguda purulenta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La neuralgia del trigémino se manifiesta con episodios paroxísticos de dolor lancinante y fulgurante desencadenados por estímulos táctiles en zonas gatillo."
    },
    {
        id: 22,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la confección de una prótesis parcial removible, ¿cuál es la función biomecánica principal del componente denominado 'conector mayor'?",
        opciones: [
            "A) Retener el aparato mediante fricción en el esmalte",
            "B) Unir las diferentes partes de la prótesis distribuyendo las fuerzas funcionales hacia los tejidos de soporte",
            "C) Evitar el desplazamiento oclusal por gravedad",
            "D) Soportar directamente la carga masticatoria en zonas edéntulas libres"
        ],
        respuestaCorrecta: 1,
        explicacion: "El conector mayor une los componentes bilaterales de la PPR y distribuye las fuerzas oclusales recibidas a lo largo de las estructuras de soporte de la arcada."
    },
    {
        id: 23,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué concentración de fluoruro en solución se utiliza comúnmente para enjuagues bucales semanales supervisados en programas escolares de salud pública?",
        opciones: [
            "A) Fluoruro de sodio al 0.2%",
            "B) Fluoruro de sodio al 0.05%",
            "C) Fluoruro estannoso al 10%",
            "D) Gel de fluoruro fosfato acidulado al 1.23%"
        ],
        respuestaCorrecta: 0,
        explicacion: "La solución de fluoruro de sodio al 0.2% se emplea en programas semanales de enjuague escolar, mientras que la concentración de 0.05% está indicada para uso diario domiciliario."
    },
    {
        id: 24,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el tratamiento periodontal inicial (fase I) fundamental e indispensable antes de cualquier cirugía correctiva de tejidos periodontales?",
        opciones: [
            "A) Gingivectomía estética con láser de diodo",
            "B) Injerto gingival libre de paladar",
            "C) Terapia básica periodontal: instrucción de higiene oral, raspaje, alisado radicular y eliminación de factores retentivos",
            "D) Exodoncia de piezas con movilidad grado I"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Fase I o terapia básica busca eliminar la placa y el cálculo bacteriano subgingival, reduciendo la inflamación antes de evaluar la necesidad de cirugía periodontal."
    },
    {
        id: 25,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué célula es la responsable primaria de la reabsorción fisiológica de las raíces de los dientes temporales para permitir la erupción de los premolares sucesores?",
        opciones: [
            "A) Osteoblasto",
            "B) Cementocito",
            "C) Odontoclasto",
            "D) Fibroblasto gingival"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los odontoclastos son células multinucleadas especializadas en reabsorber el cemento y la dentina radicular de los dientes temporales durante la exfoliación."
    },
    {
        id: 26,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente acude a revisión presentando múltiples manchas blancas opacas y rugosas en el esmalte de varios dientes permanentes simétricos, asociadas a una ingesta excesiva de flúor durante la amelogénesis. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Hipoplasia focal por traumatismo",
            "B) Fluorosis dental endémica",
            "C) Amelogénesis imperfecta hereditaria",
            "D) Caries temprana de la infancia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fluorosis dental se presenta como opacidades difusas simétricas en el esmalte causadas por la incorporación sistémica excesiva de fluoruro durante la formación dentaria."
    },
    {
        id: 27,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una dentadura total (prótesis completa superior), ¿cuál es la referencia anatómica clave que delimita el borde posterior de la prótesis en la línea media y guía la ubicación del sellado posterior?",
        opciones: [
            "A) Las fóveas palatinas",
            "B) La papila incisiva",
            "C) Las tuberosidades maxilares",
            "D) El frenillo labial superior"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las fóveas palatinas son depresiones mucosas bilaterales cercanas a la línea media que coinciden con la unión del paladar duro y blando, sirviendo de referencia para el post-damming."
    },
    {
        id: 28,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué componente activo contienen los barnices fluorados de aplicación profesional más utilizados para la prevención de caries en niños pequeños?",
        opciones: [
            "A) Fluoruro de sodio al 5% (equivalente a 22,600 ppm de F)",
            "B) Fluoruro de estaño al 0.4%",
            "C) Monofluorofosfato de sodio al 1.1%",
            "D) Fluorhidroxiapatita sintética"
        ],
        respuestaCorrecta: 0,
        explicacion: "El barniz de fluoruro de sodio al 5% es el estándar clínico de aplicación tópica profesional debido a su alta concentración y tiempo prolongado de contacto con el esmalte."
    },
    {
        id: 29,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué sutura quirúrgica periodontal se recomienda preferentemente para asegurar la adaptación interproximal de los colgajos vestibulares y linguales tras una gingivectomía o cirugía ósea?",
        opciones: [
            "A) Sutura suspensorio (o en punto colchonero horizontal)",
            "B) Sutura continua simple sin anudado",
            "C) Sutura intradérmica metálica",
            "D) Puntos simples interrumpidos sin tensión"
        ],
        respuestaCorrecta: 0,
        explicacion: "La técnica de sutura suspensorio o en cabestro abraza el diente y estabiliza el colgajo contra el hueso alveolar sin depender de soporte en dientes ausentes."
    },
    {
        id: 30,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "Paciente de 8 años presenta apiñamiento anteroinferior leve y erupción de los incisivos laterales permanentes. Al realizar el análisis de espacio de Moyers, ¿para qué sirve esta herramienta diagnóstica?",
        opciones: [
            "A) Para medir la presión arterial sistémica infantil",
            "B) Para predecir el tamaño mesiodistal de los caninos y premolares permanentes no erupcionados basándose en la anchura de los incisivos inferiores",
            "C) Para calcular la longitud radicular de los molares temporales",
            "D) Para determinar la edad ósea mediante radiografía carpiana"
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis de Moyers utiliza tablas de probabilidad basadas en la suma de los cuatro incisivos inferiores para estimar el espacio que ocuparán los caninos y premolares permanentes."
    },
    {
        id: 31,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Durante la exploración clínica de las glándulas salivales mayores, al palpar la región submandibular se percibe masa dura, dolorosa durante las comidas, sugiriendo litiasis salival. ¿En qué conducto excretor se aloja con mayor frecuencia esta condición?",
        opciones: [
            "A) Conducto de Stenon (parotídeo)",
            "B) Conducto de Wharton (submandibular)",
            "C) Conducto de Bartolino (sublingual mayor)",
            "D) Conductos accesorios de Rivini"
        ],
        respuestaCorrecta: 1,
        explicacion: "El conducto de Wharton (submandibular) es el sitio más frecuente de formación de sialolitos debido a su trayecto ascendente y a la alta viscosidad y contenido mineral de su saliva."
    },
    {
        id: 32,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la selección del color para una restauración estética de porcelana en sector anterior, ¿qué dimensión del color representa la 'saturación o intensidad' de un tono determinado?",
        opciones: [
            "A) Matiz (Hue)",
            "B) Croma (Chroma)",
            "C) Valor (Value / Luminosidad)",
            "D) Opalescencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El croma define la saturación o intensidad de un color específico dentro de la guía de tonos, diferenciando un tono tenue de uno intenso."
    },
    {
        id: 33,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué nivel de prevención según la pirámide de Leavell y Clark representa la colocación de obturadores de resina en lesiones cariosas incipientes (operatoria dental restauradora)?",
        opciones: [
            "A) Promoción de la salud",
            "B) Protección específica",
            "C) Limitación del daño y diagnóstico precoz / tratamiento oportuno",
            "D) Rehabilitación protésica avanzada"
        ],
        respuestaCorrecta: 2,
        explicacion: "El diagnóstico precoz y el tratamiento oportuno (restauraciones preventivas) corresponden al nivel secundario de prevención para detener la progresión de la enfermedad."
    },
    {
        id: 34,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el manejo farmacológico profiláctico recomendado en pacientes con antecedentes de fiebre reumática o cardiopatías con alto riesgo de endocarditis infecciosa antes de procedimientos periodontales invasivos con sangrado?",
        opciones: [
            "A) Amoxicilina 2 g por vía oral 30 a 60 minutos antes del procedimiento",
            "B) Paracetamol 500 mg cada 8 horas durante 5 días",
            "C) Ibuprofeno 400 mg dosis única postoperatoria",
            "D) Ningún antibiótico, solo clorhexidina tópica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La profilaxis antibiótica estándar con amoxicilina oral busca prevenir la bacteriemia transitoria que puede causar endocarditis infecciosa en pacientes de alto riesgo cardíaco."
    },
    {
        id: 35,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es la etiología principal de la maloclusión de mordida abierta anterior en niños asociada a hábitos bucales deletéreos prolongados?",
        opciones: [
            "A) Succión digital prolongada o interposición lingual al deglutir",
            "B) Pérdida prematura de caninos temporales por traumatismo",
            "C) Uso temprano de cepillo dental eléctrico",
            "D) Respiración exclusivamente nasal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presión mecánica constante del dedo pulgar o la lengua contra los bordes incisales impide la erupción normal de los dientes anteriores, generando mordida abierta."
    },
    {
        id: 36,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 50 años presenta aumento de volumen asintomático en el ángulo mandibular izquierdo. La radiografía panorámica muestra imagen radiolúcida multilocular en 'pompas de jabón', con expansión de corticales. ¿Cuál es el diagnóstico presuntivo más probable?",
        opciones: [
            "A) Granuloma central de células gigantes",
            "B) Quiste radicular inflamatorio",
            "C) Ameloblastoma mandibular",
            "D) Osteítis condensante periapical"
        ],
        respuestaCorrecta: 2,
        explicacion: "El ameloblastoma es un tumor odontogénico benigno localmente agresivo que típicamente se presenta como una lesión radiolúcida multilocular en 'pompas de jabón' en la zona molar/rama mandibular."
    },
    {
        id: 37,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial fija, ¿cómo se denomina al póntico cuyo diseño contacta la cresta alveolar residual únicamente en un punto vestibular, facilitando la estética pero dificultando la higiene lingual?",
        opciones: [
            "A) Póntico en bala o cónica",
            "B) Póntico en silla de montar modificada",
            "C) Póntico higiénico o sanitario",
            "D) Póntico ovoide estético"
        ],
        respuestaCorrecta: 0,
        explicacion: "El póntico en bala o cónico contacta de forma muy reducida el reborde alveolar en su cara vestibular, siendo estético y fácil de limpiar en zonas de baja carga masticatoria."
    },
    {
        id: 38,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "En relación con los determinantes de la salud según Lalonde, ¿cuál de los siguientes factores ejerce el mayor peso porcentual sobre el estado de salud general y bucal de una comunidad?",
        opciones: [
            "A) Estilo de vida y hábitos individuales de higiene",
            "B) Biología humana y genética",
            "C) Sistema de asistencia sanitaria pública",
            "D) Medio ambiente y factores socioeconómicos"
        ],
        respuestaCorrecta: 3,
        explicacion: "El medio ambiente y los determinantes sociales/socioeconómicos representan el mayor impacto porcentual en los niveles de salud poblacionales, seguidos por el estilo de vida."
    },
    {
        id: 39,
        area: "Cirugía y Periodoncia",
        pregunta: "Durante la colocación de un implante dental en el sector anterior maxilar, ¿qué espesor mínimo de hueso vestibular remanente se requiere clínicamente para prevenir la resequedad y recesión gingival vestibular posterior?",
        opciones: [
            "A) Al menos 0.5 mm",
            "B) Al menos 1.5 a 2.0 mm",
            "C) Exactamente 5 mm",
            "D) El grosor óseo no influye en la estética"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un espesor de tabla ósea vestibular de al menos 1.5 a 2.0 mm es crítico para prevenir la reabsorción ósea postoperatoria y la posterior retracción de la encía marginal."
    },
    {
        id: 40,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué es el 'leeway space' (espacio de deriva de Nance) en la arcada mixta infantil?",
        opciones: [
            "A) El espacio sobrante resultante de la diferencia de tamaño entre los dientes temporales (caninos y molares) y los premolares permanentes que los reemplazan",
            "B) El espacio libre interincisivo durante la erupción de los incisivos laterales",
            "C) La separación ósea maxilar debida a la sutura palatina media",
            "D) El espacio creado al extraer preventivamente los primeros molares temporales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El leeway space es la diferencia favorable de tamaño (aprox. 1.5 a 2 mm por hemiarcada) donde los premolares son más pequeños que los molares temporales que sustituyen."
    },
    {
        id: 41,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente presenta dolor muscular masticatorio difuso, limitación de la apertura bucal y chasquido articular bilateral al abrir y cerrar la boca. ¿Cuál es el diagnóstico clínico dual más probable?",
        opciones: [
            "A) Mialgia masticatoria asociada a desplazamiento de disco articular con reducción",
            "B) Osteosarcoma de cóndilo mandibular",
            "C) Parálisis de Bell del nervio facial",
            "D) Carcinoma epidermoide de piso de boca"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los trastornos temporomandibulares combinan con frecuencia dolor muscular (mialgia) con alteraciones mecánicas del complejo cóndilo-disco (desplazamiento con reducción)."
    },
    {
        id: 42,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una restauración de resina compuesta clase II con técnica adhesiva, ¿qué problema causa el factor C (configuración cavitaria) elevado en cavidades profundas?",
        opciones: [
            "A) Incrementa la contracción de polimerización neta sobre las paredes dentinarias, generando sensibilidad postoperatoria y microfiltración",
            "B) Aumenta la dureza superficial del composite de manera infinita",
            "C) Evita por completo la necesidad de grabado ácido con ácido fosfórico",
            "D) Disminuye la adhesión química del sistema autograbante"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un factor C alto (relación de superficies adheridas frente a libres) genera mayor tensión de contracción de polimerización, lo que puede romper la unión adhesiva."
    },
    {
        id: 43,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Cuál es la principal vía de transmisión de los microorganismos cariogénicos (Streptococcus mutans) hacia los infantes durante la etapa de erupción de los primeros dientes temporales?",
        opciones: [
            "A) Contaminación por agua potable fluorada",
            "B) Transmisión vertical u horizontal a través de la saliva de la madre o cuidadores primarios",
            "C) Consumo temprano de fórmulas lácteas en polvo",
            "D) Contacto con juguetes de plástico duro"
        ],
        respuestaCorrecta: 1,
        explicacion: "La transmisión primaria de S. mutans ocurre principalmente de la madre al niño mediante el intercambio de saliva (compartir utensilios, besos, probar alimentos)."
    },
    {
        id: 44,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el manejo quirúrgico periodontal indicado para eliminar una bolsa periodontal infraósea de tres paredes con profundidad de 7 mm en la cara mesial del diente 36?",
        opciones: [
            "A) Colocación de sellador de fosetas",
            "B) Cirugía de regeneración tisular guiada (RTG) o injerto óseo con membrana",
            "C) Extracción inmediata sin intentar conservar la pieza",
            "D) Gingivectomía a bisel externo superficial"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los defectos infraóseos de tres paredes ofrecen el pronóstico más favorable para la regeneración periodontal mediante injertos óseos y membranas de barrera."
    },
    {
        id: 45,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es la complicación pulpar más común que puede sufrir un incisivo central permanente joven con ápice abierto tras sufrir una luxación intrusiva por traumatismo dental?",
        opciones: [
            "A) Calcificación pulpar difusa inmediata",
            "B) Necrosis pulpar por compromiso del paquete vasculonervioso apical",
            "C) Hipercementosis radicular severa",
            "D) Erupción acelerada espontánea"
        ],
        respuestaCorrecta: 1,
        explicacion: "La intrusión dentaria severa comprime y corta el suministro sanguíneo apical, provocando una alta incidencia de necrosis pulpar, especialmente en dientes con ápice inmaduro."
    },
    {
        id: 46,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 25 años acude por dolor dental intenso. Al realizar la prueba de sensibilidad con frío en el diente 21, el dolor es inmediato, agudo y cede a los pocos segundos de retirar el estímulo. La percusión y palpación son negativas. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Pulpitis reversible",
            "B) Pulpitis irreversible sintomática",
            "C) Necrosis pulpar total",
            "D) Absceso periapical crónico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El dolor transitorio breve ante el estímulo frío sin dolor espontáneo ni molestia a la percusión define una condición inflamatoria leve o pulpitis reversible."
    },
    {
        id: 47,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial removible, ¿cuál es la función principal de los descansos oclusales colocados sobre los pilares?",
        opciones: [
            "A) Proveer retención directa contra la fuerza de gravedad",
            "B) Transmitir las fuerzas oclusales a lo largo del eje mayor del diente pilar y evitar el hundimiento de la prótesis",
            "C) Retener estéticamente los ganchos de alambre",
            "D) Sellar herméticamente la encía marginal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los descansos oclusales brindan soporte vertical a la PPR, transmitiendo las cargas funcionales de forma axial al diente pilar y previniendo daños periodontales."
    },
    {
        id: 48,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué componente de los sistemas de adhesión dentinaria de grabado y lavado (tres pasos) se encarga de impregnar la red de fibras colágenas desmineralizadas formando la capa híbrida?",
        opciones: [
            "A) El ácido ortofosfórico al 37%",
            "B) El imprimante (primer) con monómeros hidrófilos",
            "C) El polvo de óxido de aluminio",
            "D) El ionómero de vidrio modificado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El primer contiene monómeros bifuncionales hidrófilos disueltos en solventes que penetran la red de colágeno expuesta por el grabado ácido, formando la capa híbrida."
    },
    {
        id: 49,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué maniobra clínica quirúrgica está contraindicada de manera absoluta al realizar la extracción de un tercer molar superior retenido?",
        opciones: [
            "A) Aplicación de elevadores con apoyo en el segundo molar vecino como fulcro principal",
            "B) Elevación de un colgajo mucoperióstico vestibular",
            "C) Irrigación abundante con solución salina estéril",
            "D) Sutura hermética del tejido blando"
        ],
        respuestaCorrecta: 0,
        explicacion: "Utilizar el diente vecino (segundo molar) como punto de apoyo o fulcro para extraer un tercer molar puede luxar o fracturar la pieza adyacente sana."
    },
    {
        id: 50,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es la característica clínica de la erupción de los primeros molares permanentes que determina el establecimiento de la llave de oclusión molar de Angle Clase I?",
        opciones: [
            "A) El plano terminal recto o escalón mesial de los segundos molares temporales",
            "B) La presencia de diastemas en el sector anterior",
            "C) La pérdida prematura de los incisivos centrales",
            "D) La ausencia congénita de premolares"
        ],
        respuestaCorrecta: 0,
        explicacion: "El plano terminal recto o escalón mesial en la dentición temporal guía la erupción mesial de los primeros molares permanentes hacia una relación de Clase I de Angle."
    },
    {
        id: 51,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 40 años presenta múltiples lesiones eritematosas y blanquecinas en forma de estrías reticulares (estrías de Wickham) en la mucosa yugal bilateral, asintomáticas. ¿Cuál es el diagnóstico clínico más probable?",
        opciones: [
            "A) Carcinoma espinocelular infiltrante",
            "B) Liquen plano oral reticular",
            "C) Candidiasis pseudomembranosa aguda",
            "D) Leucoplasia homogénea premaligna"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las estrías blanquecinas bilaterales en encaje o reticulares (estrías de Wickham) son patognomónicas del liquen plano oral en su forma clínica reticulada."
    },
    {
        id: 52,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis fija pluritunicada, ¿qué complicación mecánica ocurre con mayor frecuencia si el diseño del conector entre coronas posee un área de sección transversal insuficiente?",
        opciones: [
            "A) Desprendimiento del esmalte cervical",
            "B) Fractura del conector de la prótesis por fatiga de materiales",
            "C) Inflamación gingival papilar severa",
            "D) Desplazamiento del implante osteointegrado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un conector con sección transversal insuficiente no resiste las fuerzas de flexión masticatoria, provocando la fractura estructural de la prótesis fija."
    },
    {
        id: 53,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "En la atención odontológica a pacientes embarazadas, ¿cuál es el trimestre ideal y más seguro para realizar tratamientos odontológicos electivos de rutina?",
        opciones: [
            "A) Primer trimestre",
            "B) Segundo trimestre",
            "C) Tercer trimestre avanzado",
            "D) Ningún trimestre es seguro"
        ],
        respuestaCorrecta: 1,
        explicacion: "El segundo trimestre es el período más seguro porque ya concluyó la organogénesis fetal y la paciente tolera mejor la posición en el sillón dental que en el tercer trimestre."
    },
    {
        id: 54,
        area: "Cirugía y Periodoncia",
        pregunta: "Durante la evaluación de un paciente con periodontitis, ¿cómo se define clínicamente la profundidad de sondaje periodontal?",
        opciones: [
            "A) La distancia desde el margen gingival libre hasta el fondo del saco o surco gingival",
            "B) La distancia desde la línea amelodentinaria hasta la cresta ósea alveolar",
            "C) La distancia desde la unión cemento-esmalte hasta el fondo de la bolsa",
            "D) La longitud total de la raíz expuesta por recesión"
        ],
        respuestaCorrecta: 0,
        explicacion: "La profundidad de sondeo mide el espacio desde el margen gingival libre hasta la base del surco o bolsa periodontal utilizando una sonda calibrada."
    },
    {
        id: 55,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué aparato ortodóntico removible se utiliza comúnmente para la corrección de mordidas cruzadas anteriores simples de origen dentario en dentición mixta?",
        opciones: [
            "A) Placa de Hawley con arco vestibular y planos inclinados o resortes digitales",
            "B) Máscara facial de tracción extraoral de Delair",
            "C) Casquete occipital cervical pesado",
            "D) Aparato de Herbst fijo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una placa removible tipo Hawley dotada de resortes vestibulares o tornillos de expansión permite vestibularizar los incisivos superiores cruzados."
    },
    {
        id: 56,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente presenta movilidad dentaria generalizada, pérdida ósea alveolar severa vertical y horizontal a temprana edad (adolescencia), con antecedentes familiares similares. ¿Cuál es el diagnóstico periodontal?",
        opciones: [
            "A) Periodontitis agresiva / Estadio III-IV, Grado C",
            "B) Gingivitis marginal crónica por placa",
            "C) Absceso gingival localizado",
            "D) Periodontitis apical crónica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La rápida pérdida de inserción en pacientes jóvenes sin una cantidad de placa proporcional suele clasificarse como periodontitis en Estadíos avanzados Grado C (rápida progresión)."
    },
    {
        id: 57,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "¿Cuál es el propósito fundamental de realizar un rebase (rebasado) en una prótesis total removible antigua?",
        opciones: [
            "A) Cambiar el color de los dientes acrílicos anteriores",
            "B) Adaptar la base protésica a los cambios de reabsorción del reborde alveolar residual, mejorando la retención y estabilidad",
            "C) Reducir el peso total de la resina acrílica",
            "D) Aumentar la dimensión vertical de reposo en 10 mm"
        ],
        respuestaCorrecta: 1,
        explicacion: "El rebasado repone el acrílico interno de la prótesis para compensar la reabsorción ósea del reborde, reestableciendo el sellado periférico y la estabilidad."
    },
    {
        id: 58,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "En la metodología de control de placa dentobacteriana a nivel individual, ¿qué porcentaje de índice de placa O'Leary se considera clínicamente como la meta de una adecuada higiene oral?",
        opciones: [
            "A) Menor o igual al 20%",
            "B) Exactamente el 75%",
            "C) Entre el 80% y 100%",
            "D) El valor no es relevante"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un índice de placa de O'Leary menor o igual al 20% indica un buen control de placa bacteriana domiciliaria, reduciendo el riesgo de caries y enfermedad periodontal."
    },
    {
        id: 59,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es la complicación anatómica local más importante a evitar durante el curetaje o cirugía en la zona de premolares inferiores debido a la salida del paquete vasculonervioso mentoniano?",
        opciones: [
            "A) Lesión del nervio mentoniano que produce parestesia del labio inferior y mentón",
            "B) Perforación del piso de las fosas nasales",
            "C) Sección de la arteria carótida externa",
            "D) Fractura del proceso estiloides"
        ],
        respuestaCorrecta: 0,
        explicacion: "El foramen mentoniano se ubica frecuentemente entre los ápices de los premolares inferiores; una injuria quirúrgica directa genera anestesia o parestesia labial."
    },
    {
        id: 60,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿A qué edad cronológica promedio erupcionan los primeros molares permanentes superiores e inferiores en la dentición humana?",
        opciones: [
            "A) A los 6 años de edad",
            "B) A los 9 años de edad",
            "C) A los 12 años de edad",
            "D) A los 3 años de edad"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los primeros molares permanentes erupcionan típicamente alrededor de los 6 años de edad por detrás de los segundos molares temporales, sin sustituir a ningún diente previo."
    },
    {
        id: 61,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente femenino de 50 años acude con lesión blanca en mucosa yugal que no se desprende al raspado con gasa, con antecedentes de tabaquismo pesado de 20 años. ¿Cómo se define clínicamente esta lesión?",
        opciones: [
            "A) Leucoplasia oral",
            "B) Candidiasis seudomembranosa",
            "C) Nevus blanco esponjoso",
            "D) Estomatitis nicotínica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una placa blanca que no puede ser caracterizada clínica o patológicamente como otra enfermedad, en pacientes fumadores, se diagnostica como leucoplasia oral (lesión potencialmente maligna)."
    },
    {
        id: 62,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la preparación cavitaria para amalgama dental o restauraciones metálicas indirectas, ¿qué función cumple la realización de una 'caja o escalón gingival'?",
        opciones: [
            "A) Proveer resistencia oclusal impidiendo el desplazamiento de la restauración bajo fuerzas verticales",
            "B) Generar retención química mediante grabado ácido profundo",
            "C) Debilitar deliberadamente las cúspides vecinas",
            "D) Facilitar la filtración bacteriana marginal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El diseño de cajuelas y escalones planos perpendiculares a las fuerzas oclusales proporciona la forma de resistencia necesaria para evitar el desplazamiento de restauraciones no adhesivas."
    },
    {
        id: 63,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué técnica de cepillado dental se recomienda frecuentemente para pacientes con enfermedad periodontal con recesión gingival y exposición radicular, debido a su suavidad sobre los tejidos?",
        opciones: [
            "A) Técnica de Bass modificada",
            "B) Técnica de Charters",
            "C) Técnica de Stillman modificada",
            "D) Técnica de Fones (circular)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La técnica de Stillman modificada coloca los filamentos parcialmente sobre la encía y el diente con un movimiento vibratorio hacia oclusal, limpiando sin lacerar las zonas con recesión."
    },
    {
        id: 64,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué finalidad tiene la colocación de un apósito periodontal (cemento quirúrgico) inmediatamente después de una cirugía de colgajo o gingivectomía?",
        opciones: [
            "A) Acelerar la mineralización del hueso alveolar en 24 horas",
            "B) Proteger la herida quirúrgica expuesta contra el trauma masticatorio y disminuir el dolor e incomodidad postoperatoria",
            "C) Sustituir por completo la necesidad de suturas",
            "D) Administrar antibióticos de liberación prolongada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El apósito periodontal actúa como una protección mecánica de la herida quirúrgica expuesta, reduciendo el disconfort del paciente durante los primeros días de cicatrización."
    },
    {
        id: 65,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué signo clínico diferencia fundamentalmente la erupción de un diente temporal respecto a la de un diente permanente sucesor?",
        opciones: [
            "A) Los dientes temporales no tienen precursores, mientras que los permanentes erupcionan en la vía lingual/palatina de los temporales (excepto incisivos)",
            "B) Los dientes temporales erupcionan sin raíz formada",
            "C) Los dientes permanentes erupcionan acompañados de fiebre alta inevitable",
            "D) No existe ninguna diferencia embriológica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los dientes permanentes sucesores se desarrollan a partir de la lámina dental lingual del diente temporal correspondiente, erupcionando por lingual/palatino (excepto los molares permanentes)."
    },
    {
        id: 66,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente masculino de 22 años sufre golpe en región mentoniana. Al examen clínico presenta imposibilidad para ocluir los dientes posteriores, mordida abierta anterior y contacto prematuro en molares bilaterales, con sospecha de fractura. ¿Cuál es el diagnóstico más probable?",
        opciones: [
            "A) Fractura bilateral de cóndilo mandibular o sínfisis con desplazamiento",
            "B) Luxación simple de la articulación temporomandibular hacia adelante",
            "C) Fractura aislada del hueso nasal",
            "D) Fractura Lefort III de tercio medio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una fractura bilateral condilar o sinea/parasinfisiaria desplaza los fragmentos mandibulares provocando rotación posterior y mordida abierta anterior típica."
    },
    {
        id: 67,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial removible, ¿cuál es la función de los componentes denominados 'retenedores directos' (ganchos)?",
        opciones: [
            "A) Evitar el desplazamiento de la prótesis fuera del terreno protésico bajo fuerzas de tracción o gravedad",
            "B) Transmitir las cargas directamente al ligamento periodontal sin soporte mucoso",
            "C) Unir los conectores mayores con las bases acrílicas",
            "D) Modificar el plano de oclusión horizontal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los retenedores directos (ganchos) proporcionan retención a la PPR, impidiendo que se desaloje o desplace verticalmente durante las funciones de fonación y masticación."
    },
    {
        id: 68,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué microorganismo es considerado el principal agente etiológico iniciador de la lesión cariosa en la estructura del esmalte dental humano?",
        opciones: [
            "A) Porphyromonas gingivalis",
            "B) Streptococcus mutans",
            "C) Actinobacillus actinomycetemcomitans",
            "D) Candida albicans"
        ],
        respuestaCorrecta: 1,
        explicacion: "Streptococcus mutans posee alta capacidad acidogénica y acidúrica, metabolizando azúcares fermentables para producir ácidos orgánicos que desmineralizan el esmalte."
    },
    {
        id: 69,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué fármaco antiinflamatorio no esteroideo (AINE) está contraindicado o debe usarse con extrema precaución en pacientes asmáticos con antecedente de sensibilidad al ácido acetilsalicílico (tríada de la aspirina)?",
        opciones: [
            "A) Paracetamol (acetaminofén)",
            "B) Ibuprofeno / Ketorolaco",
            "C) Amoxicilina con ácido clavulánico",
            "D) Clindamicina oral"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los AINES (como ibuprofeno o aspirina) inhiben la ciclooxigenasa desviando la vía metabólica hacia los leucotrienos, lo que puede desencadenar broncoespasmo severo en pacientes asmáticos sensibles."
    },
    {
        id: 70,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es la característica oclusal transversal normal en la dentición temporal humana?",
        opciones: [
            "A) Las cúspides vestibulares de los dientes inferiores ocluyen en las fosas centrales de los dientes superiores (mordida en tijera invertida)",
            "B) Las cúspides palatinas de los molares superiores ocluyen en las fosas centrales de los molares inferiores",
            "C) Existe mordida cruzada posterior generalizada fisiológica",
            "D) Los bordes incisales superiores contactan por dentro de los inferiores"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una oclusión normal, las cúspides vestibulares inferiores ocluyen en las fosas centrales de los dientes superiores, y las cúspides palatinas superiores en las fosas inferiores."
    },
    {
        id: 71,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 10 años acude por traumatismo en incisivo central superior permanente. A la exploración presenta fractura coronaria que compromete esmalte, dentina y exposición pulpar menor a 1 mm, con tiempo de evolución menor a 2 horas. ¿Qué tratamiento endodóntico conservador está indicado?",
        opciones: [
            "A) Pulpectomía total y obturación con gutapercha",
            "B) Recubrimiento pulpar directo con hidróxido de calcio o MTA",
            "C) Extracción inmediata de la pieza",
            "D) Amputación coronaria total sin protección"
        ],
        respuestaCorrecta: 1,
        explicacion: "En dientes jóvenes con exposición pulpar traumática reciente (<24 horas), el recubrimiento pulpar directo o pulpotomía parcial (Cvek) permite preservar la vitalidad y el cierre apical radicular."
    },
    {
        id: 72,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la técnica de toma de impresión para prótesis fija, ¿cuál es el objetivo principal de colocar un hilo retractor gingival impregnado con astringente en el surco?",
        opciones: [
            "A) Aumentar la longitud de la corona clínica",
            "B) Desplazar transitoriamente el tejido gingival marginal lateralmente y controlar la hemorragia del surco para registrar con nitidez la línea de terminación",
            "C) Cementar permanentemente el provisional",
            "D) Anestesiar el ligamento periodontal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El hilo retractor separa mecánicamente la encía del margen del preparado y el agente hemostático cohíbe el fluido crevicular, permitiendo que el material de impresión copie el margen."
    },
    {
        id: 73,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué componente mineral es el principal constituyente cristalino del esmalte dental humano, confiriéndole su dureza característica?",
        opciones: [
            "A) Hidroxiapatita carbonatada estequiométrica",
            "B) Hidroxiapatita cálcica cristalina",
            "C) Fosfato tricálcico amorfo",
            "D) Fluoruro de calcio precipitado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La hidroxiapatita cálcica cristalina (Ca10(PO4)6(OH)2) es la red mineral predominante en el esmalte, haciéndolo el tejido más duro del cuerpo humano."
    },
    {
        id: 74,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el tratamiento quirúrgico periodontal indicado para eliminar una bolsa periodontal supraósea cuando existe suficiente banda de encía ancha queratinizada?",
        opciones: [
            "A) Gingivectomía a bisel externo",
            "B) Injerto de tejido conectivo subepitelial",
            "C) Regeneración ósea con matriz amelógena",
            "D) Exodoncia radical"
        ],
        respuestaCorrecta: 0,
        explicacion: "La gingivectomía elimina mediante resección quirúrgica la pared blanda de la bolsa supraósea cuando hay suficiente encía insertada remanente."
    },
    {
        id: 75,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué tipo de aparatología ortodóntica se emplea para realizar ortopedia maxilar funcional estimulando el crecimiento mandibular en pacientes en crecimiento con clase II esquelética?",
        opciones: [
            "A) Aparato de Bionator, Activador de Andresen o Bimler",
            "B) Tubos de bandas molares fijas sin arcos",
            "C) Retenedor estético removible de celuloide",
            "D) Férula rígida de bruxismo nocturno"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los aparatos funcionales removibles modifican la postura mandibular, transmitiendo fuerzas musculares para estimular el desarrollo y crecimiento sagital de la mandíbula."
    },
    {
        id: 76,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente femenino de 40 años presenta dolor espontáneo punzante, localizado en diente 35, que aumenta con el calor y se alivia temporalmente con agua fría. ¿Cuál es el diagnóstico pulpar más probable?",
        opciones: [
            "A) Pulpitis irreversible sintomática con respuesta exacerbada al calor",
            "B) Pulpitis reversible por frío",
            "C) Necrosis pulpar séptica",
            "D) Periodontitis apical crónica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El dolor espontáneo que empeora con el calor y se calma transitoriamente con frío es un cuadro clínico clásico de pulpitis irreversible en etapa avanzada."
    },
    {
        id: 77,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial removible, ¿cuál es la función de los componentes denominados 'retenedores indirectos' (como apoyos oclusales auxiliares alejados de la brecha)?",
        opciones: [
            "A) Evitar el levantamiento o basculamiento de la base de extensión distal (extremo libre) por acción de fuerzas pegajosas",
            "B) Retener firmemente el diente pilar ante fuerzas de tracción vertical",
            "C) Soportar la carga masticatoria anterior pura",
            "D) Sellar el espacio interproximal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los retenedores indirectos contrarrestan el movimiento de rotación o levantamiento de la base protésica en prótesis de extremo libre cuando actúan alimentos pegajosos."
    },
    {
        id: 78,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué método de esterilización por autoclave (calor húmedo a presión) es el estándar internacional recomendado para el instrumental crítico metálico en una clínica dental?",
        opciones: [
            "A) 121 °C a 15 psi durante 15 a 30 minutos",
            "B) Inmersión en alcohol etílico al 70% por 5 minutos",
            "C) Exposición a luz ultravioleta germicida por 10 minutos",
            "D) Hervir en agua destilada a 100 °C por 20 minutos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ciclo estándar en autoclave de vapor a 121 °C y 15 psi (libras por pulgada cuadrada) durante 15-30 minutos destruye eficazmente todas las formas microbianas, incluidas esporas."
    },
    {
        id: 79,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el hallazgo clínico característico que distingue a una gingivitis de una periodontitis?",
        opciones: [
            "A) La presencia de sangrado al sondaje gingival",
            "B) La pérdida de inserción clínica y destrucción del hueso alveolar de soporte",
            "C) El cambio en el color de la encía de rosa coral a rojo brillante",
            "D) La acumulación visible de placa bacteriana supragingival"
        ],
        respuestaCorrecta: 1,
        explicacion: "La gingivitis se limita a la inflamación de los tejidos blandos sin pérdida de inserción; la periodontitis implica destrucción irreversible del soporte periodontal y óseo."
    },
    {
        id: 80,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué tratamiento preventivo/interceptivo está indicado ante la pérdida prematura de un segundo molar temporal inferior cuando el primer molar permanente aún no ha erupcionado?",
        opciones: [
            "A) Mantenedor de espacio tipo zapata distal",
            "B) Arco lingual fijo convencional",
            "C) Placa removible con dientes acrílicos",
            "D) Ningún tratamiento hasta la adolescencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La zapata distal guía la erupción del primer molar permanente por debajo de la encía cuando el segundo molar temporal se pierde antes de que erupcione el permanente."
    },
    {
        id: 81,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 35 años presenta asimetría facial, aumento de volumen en región parotídea derecha, consistencia firme, con parálisis facial ipsilateral progresiva. ¿Cuál es el diagnóstico presuntivo prioritario?",
        opciones: [
            "A) Sialoadenitis crónica autoinmune",
            "B) Tumor maligno de glándula parótida (ej. carcinoma mucoepidermoide)",
            "C) Linfangioma congénito benigno",
            "D) Parotiditis epidémica viral bilateral"
        ],
        respuestaCorrecta: 1,
        explicacion: "La presencia de una masa parotídea firme asociada a parálisis del nervio facial es un signo clínico altamente indicativo de malignidad en tumores de glándulas salivales."
    },
    {
        id: 82,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la anatomía oclusal de una prótesis fija, ¿cómo se denominan las cúspides que aseguran la estabilidad y mantienen la dimensión vertical oclusal al ocluir en las fosas antagonistas?",
        opciones: [
            "A) Cúspides de corte o guía (vestibulares superiores)",
            "B) Cúspides de soporte, céntricas o de trabajo (palatinas superiores y vestibulares inferiores)",
            "C) Cúspides estéticas anteriores",
            "D) Cúspides marginales accesorias"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cúspides de soporte (palatinas superiores y vestibulares inferiores) ocluyen en las fosas antagonistas y mantienen la dimensión vertical y la estabilidad oclusal."
    },
    {
        id: 83,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué concentración de hipoclorito de sodio se recomienda comúnmente para la desinfección de superficies clínicas operativas contaminadas con fluidos biológicos?",
        opciones: [
            "A) Solución al 0.01%",
            "B) Solución al 1% - 5% (10,000 ppm de cloro libre)",
            "C) Solución diluida al 0.05%",
            "D) Solución saturada al 50%"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para la desinfección de superficies con contaminación orgánica o salpicaduras de sangre se emplean soluciones de hipoclorito de sodio entre el 1% y el 5% de concentración."
    },
    {
        id: 84,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el tratamiento quirúrgico periodontal indicado para corregir una sonrisa gingival severa causada por una 'erupción pasiva alterada' (dientes con apariencia corta por exceso de encía cubriendo la corona anatómica)?",
        opciones: [
            "A) Cirugía de alargamiento de corona clínica mediante gingivectomía y/o osteotomía",
            "B) Exodoncia múltiple por estética",
            "C) Frenectomía labial superior",
            "D) Injerto gingival libre"
        ],
        respuestaCorrecta: 0,
        explicacion: "El alargamiento de corona clínico estético remodela el margen gingival y el hueso alveolar subyacente para exponer la corona anatómica completa del diente."
    },
    {
        id: 85,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es el manejo inmediato recomendado ante la avulsión (salida completa) de un incisivo central permanente joven con ápice abierto, si el diente se encuentra limpio y el tiempo transcurrido es menor a 60 minutos?",
        opciones: [
            "A) Lavar suavemente con agua o suero y reimplante inmediato en su alvéolo, seguido de férula flexible",
            "B) Desinfectar con hipoclorito concentrado y almacenar en seco",
            "C) Realizar endodoncia extirpando la pulpa antes de colocarlo",
            "D) Desechar la pieza y colocar un implante inmediato"
        ],
        respuestaCorrecta: 0,
        explicacion: "El reimplante inmediato es el tratamiento de elección ante la avulsión de dientes permanentes; el pronóstico depende directamente del tiempo extraalveolar y la hidratación del ligamento."
    },
    {
        id: 86,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 45 años acude por dolor difuso en la región maxilar superior posterior izquierda. A la prueba de percusión horizontal y vertical, el diente 26 responde con dolor sordo. No hay respuesta a pruebas térmicas y radiográficamente se observa ensanchamiento del espacio del ligamento periodontal. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Periodontitis apical sintomática asociada a necrosis pulpar",
            "B) Pulpitis reversible leve",
            "C) Gingivitis marginal crónica",
            "D) Absceso periodontal lateral"
        ],
        respuestaCorrecta: 0,
        explicacion: "La combinación de necrosis pulpar (sin respuesta térmica) con dolor a la percusión y ensanchamiento del ligamento periodontal confirma una periodontitis apical sintomática."
    },
    {
        id: 87,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la tecnología de pernos intrarradiculares, ¿cuál es la principal ventaja biomecánica de los pernos de fibra de vidrio frente a los pernos colados metálicos tradicionales?",
        opciones: [
            "A) Módulo de elasticidad similar a la dentina radicular, reduciendo el riesgo de fracturas radiculares catastróficas",
            "B) Rigidez infinita que impide cualquier flexión",
            "C) Costo elevado de fabricación en laboratorio",
            "D) Necesidad de realizar preparaciones radiculares excesivamente amplias"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los pernos de fibra de vidrio tienen un módulo de elasticidad muy cercano al de la dentina, distribuyendo mejor las fuerzas y evitando fracturas radiculares verticales."
    },
    {
        id: 88,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué componente activo se añade comúnmente a los enjuagues bucales comerciales de uso diario para reducir la formación de placa bacteriana y gingivitis por su acción antimicrobiana catiónica?",
        opciones: [
            "A) Gluconato de clorhexidina al 0.12%",
            "B) Hipoclorito de sodio al 10%",
            "C) Ácido fosfórico al 37%",
            "D) Peróxido de hidrógeno al 30%"
        ],
        respuestaCorrecta: 0,
        explicacion: "La clorhexidina es considerada el gold standard de los colutorios antimicrobianos debido a su sustantividad y afinidad por las superficies dentales y bacterianas."
    },
    {
        id: 89,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cómo se clasifica un defecto de furcación periodontal donde la sonda penetra a través de la lesión de un lado a otro (de vestibular a lingual/palatino) atravesando completamente el espacio interradicular?",
        opciones: [
            "A) Furcación Grado I",
            "B) Furcación Grado II",
            "C) Furcación Grado III",
            "D) Furcación Grado IV (cuando además hay recesión visible)",
        ],
        respuestaCorrecta: 2,
        explicacion: "La clasificación de Glickman define como Grado III a la afectación de furca donde la sonda atraviesa de lado a lado, aunque el tejido blando aún cubre el defecto."
    },
    {
        id: 90,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué complicación sistémica o local puede ocurrir si se utiliza óxido nitroso en sedación consciente sin el control estricto de la concentración de oxígeno (menor al 30%)?",
        opciones: [
            "A) Hipoxia difusa y desaturación de oxígeno en el paciente",
            "B) Hipertensión arterial sistémica severa instantánea",
            "C) Crecimiento radicular acelerado",
            "D) Erupción prematura de terceros molares"
        ],
        respuestaCorrecta: 0,
        explicacion: "Durante la sedación con óxido nitroso, la concentración de oxígeno administrada nunca debe descender del 30% para evitar la hipoxia por difusión y complicaciones sistémicas."
    },
    {
        id: 91,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 55 años presenta lesión exofítica sésil en encía inserción vestibular, color rosado normal, consistencia firme, indolora, de crecimiento lento (meses). Histológicamente muestra proliferación de fibroblastos y tejido conectivo fibroso colagenizado. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Fibroma osificante periférico",
            "B) Fibroma irritativo (fibroma traumático gingival)",
            "C) Carcinoma epidermoide avanzado",
            "D) Granuloma piógeno hemorrágico"
        ],
        respuestaCorrecta: 1,
        explicacion: "El fibroma irritativo o traumático es la lesión tumoral benigna más común de la mucosa oral, resultante de una hiperplasia reactiva por traumatismo crónico local."
    },
    {
        id: 92,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial removible con ganchos colados, ¿qué función cumple el 'brazo retentivo' del gancho en relación con el ecuador dentario?",
        opciones: [
            "A) Su tercio terminal se ubica por debajo del ecuador dentario en la zona retentiva, mientras que el cuerpo y origen se ubican por encima",
            "B) Se ubica totalmente por encima del ecuador sin tocar la zona retentiva",
            "C) Se coloca en el centro de la raíz dentaria",
            "D) No tiene contacto físico con el diente pilar"
        ],
        respuestaCorrecta: 0,
        explicacion: "El brazo retentivo cruza el ecuador protésico; su parte rígida se ubica por encima para dar estabilidad y su punta flexible se introduce en el área retentiva para dar retención."
    },
    {
        id: 93,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué tipo de prevención según la salud pública representa la realización de campañas informativas y educativas masivas sobre técnicas de cepillado y control de azúcares en medios de comunicación?",
        opciones: [
            "A) Promoción de la salud",
            "B) Protección específica",
            "C) Tratamiento oportuno",
            "D) Rehabilitación protésica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La promoción de la salud comprende intervenciones poblacionales educativas y políticas sanitarias orientadas a fomentar estilos de vida saludables previos a la aparición de la enfermedad."
    },
    {
        id: 94,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el manejo quirúrgico de elección ante un absceso periodontal agudo fluctuante y doloroso en un paciente sistémicamente sano?",
        opciones: [
            "A) Drenaje a través del surco periodontal o incisión de drenaje y alivio de la oclusión, seguido de terapia periodontal básica",
            "B) Extracción inmediata obligatoria del diente",
            "C) Administración exclusiva de analgésicos sin drenaje",
            "D) Curetaje óseo a colgajo abierto inmediato en fase aguda"
        ],
        respuestaCorrecta: 0,
        explicacion: "El drenaje inmediato del contenido purulento a través del surco o mediante incisión alivia la presión hidrostática y el dolor agudo en el absceso periodontal."
    },
    {
        id: 95,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué alteración de desarrollo dental se caracteriza por la presencia de un número de dientes mayor al normal en la arcada dentaria (ej. mesiodens)?",
        opciones: [
            "A) Anodoncia total",
            "B) Supernumerarios (Hiperdoncia)",
            "C) Oligodoncia severa",
            "D) Taurodontismo radicular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La hiperdoncia o presencia de dientes supernumerarios (como el mesiodens entre los incisivos centrales superiores) altera la erupción normal de los dientes vecinos."
    },
    {
        id: 96,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 65 años edéntulo total bimaxilar acude por dolor crónico bajo la base de la dentadura mandibular en la zona del reborde anterior, observándose pliegues hiperplásicos de tejido blando en el fondo de surco. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Épulis fisurado (hiperplasia inflamatoria por aparatología protésica)",
            "B) Carcinoma verrucoso bucal",
            "C) Quiste odontogénico glandular",
            "D) Sialolitiasis del conducto sublingual"
        ],
        respuestaCorrecta: 0,
        explicacion: "El épulis fisurado es una hiperplasia tisular benigna provocada por el roce crónico y constante de los bordes subextendidos de una prótesis removible mal ajustada."
    },
    {
        id: 97,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la toma de registros intermaxilares para prótesis total, ¿qué relación craneomandibular se registra mediante el arco facial?",
        opciones: [
            "A) La relación horizontal tridimensional del maxilar superior respecto al eje de bisagra terminal de la articulación temporomandibular",
            "B) La máxima intercuspidación dentaria habitual",
            "C) La relación céntrica mandibular exclusiva sin referencia craneal",
            "D) La dimensión vertical de reposo postural"
        ],
        respuestaCorrecta: 0,
        explicacion: "El arco facial transfiere la posición espacial tridimensional del maxilar superior en relación con el eje de rotación condilar al articulador semiajustable."
    },
    {
        id: 98,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué prueba diagnóstica microbiológica se emplea frecuentemente para evaluar el riesgo cariogénico determinando la concentración salival de lactobacilos o Streptococcus mutans?",
        opciones: [
            "A) Pruebas colorimétricas de cultivo salival (ej. CRT buffer / buffer capacity test)",
            "B) Radiografía cefalométrica lateral",
            "C) Tomografía computarizada de haz cónico",
            "D) Biopsia incisional de glándula salival menor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas de flujo salival y capacidad buffer, así como cultivos específicos, permiten estimar el riesgo cariogénico poblacional o individual en la clínica dental."
    },
    {
        id: 99,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el antiséptico de elección para el lavado y enjuague preoperatorio del paciente en la consulta dental con el fin de reducir la carga viral y bacteriana salival en aerosol?",
        opciones: [
            "A) Gluconato de clorhexidina al 0.12% o peróxido de hidrógeno al 1%",
            "B) Agua destilada tibia",
            "C) Solución salina fisiológica al 0.9%",
            "D) Alcohol etílico al 96%"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los enjuagues con clorhexidina o peróxido de hidrógeno antes de iniciar los procedimientos dentales reducen significativamente la carga microbiana en los aerosoles generados."
    },
    {
        id: 100,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué tipo de desplazamiento oclusal transversal se presenta cuando una cúspide vestibular superior ocluye por dentro de la fosa vestibular inferior (mordida cruzada posterior)?",
        opciones: [
            "A) Mordida cruzada posterior lingualizada (tipo tijera)",
            "B) Mordida cruzada posterior vestibular (cruzada verdadera)",
            "C) Mordida abierta anterior esquelética",
            "D) Prognatismo mandibular severo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La mordida cruzada posterior ocurre cuando los dientes superiores ocluyen por dentro (lingual) respecto a los inferiores, alterando la función masticatoria normal."
    },
    {
        id: 101,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 28 años acude por dolor intenso en zona retromolar derecha con trismus leve e imposibilidad de oclusión normal. A la exploración se observa pericoronaritis aguda supurada en el órgano dentario 48 parcialmente erupcionado. ¿Cuál es el tratamiento inicial de urgencia?",
        opciones: [
            "A) Exodoncia quirúrgica inmediata sin control de infección",
            "B) Irrigación subgingival con solución antiséptica, prescripción de analgésicos/antibióticos y evaluación para posterior extracción",
            "C) Gingivectomía estética con láser",
            "D) Tratamiento de conductos en el tercer molar"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ante una pericoronaritis aguda supurada con trismus, el manejo inicial de urgencia consiste en desbridamiento, irrigación, control farmacológico de la infección y posterior exodoncia electiva."
    },
    {
        id: 102,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis parcial fija, ¿cuál es la función de los 'márgenes biselados' en las preparaciones coladas metálicas?",
        opciones: [
            "A) Disminuir la adaptación marginal del metal colado",
            "B) Permitir el bruñido del margen metálico para mejorar el sellado y disminuir la brecha de cemento expuesta al medio oral",
            "C) Debilitar deliberadamente la estructura dental cervical",
            "D) Evitar la retención de la corona"
        ],
        respuestaCorrecta: 1,
        explicacion: "El bisel en las preparaciones metálicas deja un borde delgado de metal que puede ser bruñido clínicamente para cerrar la brecha marginal y proteger el cemento."
    },
    {
        id: 103,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Cuál es el principal objetivo de la aplicación de selladores de fosetas y fisuras en programas preventivos comunitarios infantiles?",
        opciones: [
            "A) Blanquear los dientes permanentes",
            "B) Prevenir la aparición de caries en las superficies oclusales morfológicamente susceptibles",
            "C) Tratar la pulpitis irreversible en molares",
            "D) Corregir la maloclusión dental"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los selladores obturan mecánicamente las anfractuosidades profundas de fosetas y fisuras oclusales, impidiendo la acumulación de placa y el desarrollo de caries."
    },
    {
        id: 104,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué complicación transoperatoria puede ocurrir al realizar una extracción de un segundo molar superior debido a la íntima relación anatómica de sus raíces con el seno maxilar?",
        opciones: [
            "A) Comunicación bucosinusal",
            "B) Fractura del cóndilo mandibular",
            "C) Anquilosis de la articulación temporomandibular",
            "D) Parálisis del nervio facial"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las raíces de los molares superiores frecuentemente se relacionan estrechamente con el piso del seno maxilar, pudiendo generar una comunicación bucosinusal durante la exodoncia."
    },
    {
        id: 105,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué es el 'espacio primate' (espacios interdentarios fisiológicos) en la dentición temporal del maxilar superior?",
        opciones: [
            "A) El espacio ubicado entre el incisivo lateral temporal y el canino temporal",
            "B) El espacio ubicado entre el canino temporal y el primer molar temporal",
            "C) El espacio entre los dos incisivos centrales superiores",
            "D) El espacio detrás del segundo molar temporal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El espacio primate clásico en el maxilar superior se localiza entre el canino temporal y el primer molar temporal, facilitando la correcta acomodación de los dientes permanentes."
    },
    {
        id: 106,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 50 años acude con dolor punzante espontáneo en región anterior mandibular, asociado a órgano dentario con corona íntegra pero con antecedentes de traumatismo hace 5 años. La percusión es positiva y no hay respuesta al frío. ¿Cuál es el diagnóstico pulpar y periapical?",
        opciones: [
            "A) Necrosis pulpar con periodontitis apical sintomática secundaria a trauma",
            "B) Pulpitis reversible por bruxismo",
            "C) Hiperemia pulpar asintomática",
            "D) Absceso periodontal lateral por placa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un diente con antecedente traumático antiguo que pierde vitalidad (necrosis) evoluciona frecuentemente a patología periapical inflamatoria sintomática."
    },
    {
        id: 107,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En la selección de materiales para restauraciones estéticas directas en sectores posteriores sometidos a alta carga oclusal, ¿qué tipo de resina compuesta ofrece mejores propiedades mecánicas de resistencia al desgaste?",
        opciones: [
            "A) Resina compuesta de relleno nanohíbrido o nanoparticulado de alta densidad",
            "B) Resina acrílica temporal autopolimerizable",
            "C) Ionómero de vidrio convencional de restauración",
            "D) Sellador de fosetas fluido de bajo contenido de relleno"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las resinas nanohíbridas y nanoparticuladas de alta densidad contienen un elevado porcentaje de carga inorgánica, otorgándoles resistencia al desgaste y propiedades óptimas para molares."
    },
    {
        id: 108,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué componente mineral se forma en la superficie del esmalte dental tras la aplicación tópica de flúor, haciéndolo más resistente a la disolución ácida bacteriana?",
        opciones: [
            "A) Hidroxiapatita carbonatada",
            "B) Fluoropatita (o hidroxiapatita fluorada)",
            "C) Óxido de calcio libre",
            "D) Carbonato de magnesio"
        ],
        respuestaCorrecta: 1,
        explicacion: "El flúor reemplaza los grupos hidroxilo (-OH) de la hidroxiapatita para formar fluorapatita, un cristal mucho más estable y resistente a los ataques ácidos de la caries."
    },
    {
        id: 109,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es el objetivo principal del procedimiento quirúrgico periodontal denominado 'injerto gingival libre'?",
        opciones: [
            "A) Aumentar la cantidad de encía insertada queratinizada alrededor de dientes o implantes",
            "B) Regenerar el hueso alveolar perdido por periodontitis avanzada",
            "C) Elevar el piso del seno maxilar para colocación de implantes largos",
            "D) Disminuir la profundidad de sondeo en bolsas de 10 mm"
        ],
        respuestaCorrecta: 0,
        explicacion: "El injerto gingival libre (generalmente tomado del paladar) se utiliza principalmente para ensanchar la banda de encía queratinizada y prevenir recesiones futuras."
    },
    {
        id: 110,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Qué aparato ortodóntico fijo se emplea comúnmente para realizar la disarticulación o expansión rápida de la sutura palatina media en pacientes con maxilar atrésico y mordida cruzada posterior bilateral?",
        opciones: [
            "A) Disyuntor palatino tipo Hyrax o Haas",
            "B) Arco lingual pasivo inferior",
            "C) Botón de Nance de acrílico pasivo",
            "D) Mentonera ortopédica aislada"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los disyuntores de tipo Hyrax o Haas sujetos a molares y premolares aplican fuerzas ortopédicas rápidas para abrir la sutura palatina media en pacientes en crecimiento."
    },
    {
        id: 111,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente de 30 años presenta múltiples lesiones vesiculares pequeñas en la mucosa labial y encía queratinizada que se rompen dejando úlceras dolorosas, acompañadas de febrícula y adenopatía cervical, con antecedente de recurrencia ante estrés. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Gingivoestomatitis herpética primaria (o herpes labial recurrente)",
            "B) Carcinoma espinocelular temprano",
            "C) Liquen plano erosivo crónico",
            "D) Eritema multiforme mayor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las vesículas recurrentes que evolucionan a úlceras dolorosas en encía queratinizada son características de infecciones por el Virus del Herpes Simple (VHS)."
    },
    {
        id: 112,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una prótesis total removible, ¿qué factores biomecánicos determinan primordialmente el éxito de la 'retención' de la dentadura superior?",
        opciones: [
            "A) Adhesión, cohesión, presión atmosférica, sellado periférico y tensión superficial de la película salival",
            "B) Uso exclusivo de ganchos metálicos en dientes ausentes",
            "C) Exceso de peso acrílico en la base protésica",
            "D) Aumento de la dimensión vertical de oclusión"
        ],
        respuestaCorrecta: 0,
        explicacion: "La retención de una prótesis total maxilar depende de la física del sellado periférico, la presión atmosférica y las fuerzas interfaciales de adhesión y cohesión de la saliva."
    },
    {
        id: 113,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Cuál es el valor óptimo de concentración de flúor natural o añadido en el agua de consumo humano para prevenir la caries dental sin inducir fluorosis estética significativa?",
        opciones: [
            "A) 0.7 a 1.0 ppm (mg/L)",
            "B) 5.0 a 10.0 ppm",
            "C) 0.01 ppm",
            "D) 50 ppm"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fluoruración óptima del agua potable se sitúa tradicionalmente entre 0.7 y 1.0 ppm, garantizando protección anticariogénica poblacional segura."
    },
    {
        id: 114,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Qué fármaco profiláctico antibiótico se administra por vía oral como alternativa en pacientes alérgicos a la penicilina y amoxicilina antes de un procedimiento dental invasivo de riesgo endocardítico?",
        opciones: [
            "A) Clindamicina (600 mg) o Azitromicina (500 mg)",
            "B) Ibuprofeno 600 mg",
            "C) Paracetamol 1 g",
            "D) Metamizol sódico 500 mg"
        ],
        respuestaCorrecta: 0,
        explicacion: "La guía de la AHA establece que ante alergia a betalactámicos se puede emplear clindamicina o macrólidos (azitromicina/claritromicina) como profilaxis antibiótica."
    },
    {
        id: 115,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es la función del arco transpalatal (barra Nance modificada o Goshgarian) en la dentición mixta o permanente joven?",
        opciones: [
            "A) Mantener la posición tridimensional de los molares superiores, impedir su rotación mesiovestibular y servir de anclaje ortodóntico",
            "B) Expandir rápidamente la sutura palatina media esquelética",
            "C) Estimular el crecimiento vertical del mentón",
            "D) Mantener el espacio de los incisivos laterales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El arco transpalatal une ambos molares superiores mediante una barra de alambre que cruza el paladar, evitando la rotación y manteniendo el anclaje durante el tratamiento."
    },
    {
        id: 116,
        area: "Diagnóstico y Plan de Tratamiento",
        pregunta: "Paciente femenino de 40 años acude por dolor facial crónico bilateral en músculos masticatorios, acompañado de limitación de apertura bucal matutina y desgaste incisal severo por fricción nocturna. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Bruxismo del sueño asociado a trastorno temporomandibular miógeno",
            "B) Neuralgia del nervio glosofaríngeo",
            "C) Osteomielitis crónica mandibular",
            "D) Parálisis facial periférica de Bell"
        ],
        respuestaCorrecta: 0,
        explicacion: "El bruxismo del sueño genera desgaste dental por apretamiento/fricción nocturna y fatiga o dolor muscular masticatorio matutino."
    },
    {
        id: 117,
        area: "Rehabilitación y Restauración Bucal",
        pregunta: "En una restauración colada de aleación metálica noble, ¿qué propiedad mecánica es fundamental para asegurar que la corona no se deforme permanentemente bajo las fuerzas de la masticación?",
        opciones: [
            "A) Alto límite elástico (resistencia a la fluencia)",
            "B) Baja dureza Brinell absoluta",
            "C) Alta porosidad interna de fundición",
            "D) Bajo punto de fusión térmico"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un límite elástico elevado garantiza que la estructura metálica de la restauración soporte cargas funcionales altas deformándose de manera elástica sin sufrir alteraciones permanentes."
    },
    {
        id: 118,
        area: "Prevención y Promoción de la Salud Bucal",
        pregunta: "¿Qué tipo de estudio epidemiológico se considera el estándar de oro para evaluar la eficacia clínica de un nuevo material dental o agente preventivo comparado con un placebo?",
        opciones: [
            "A) Ensayo clínico controlado aleatorizado (ECA)",
            "B) Estudio de serie de casos clínicos retrospectivos",
            "C) Reporte de un caso clínico aislado",
            "D) Encuesta transversal descriptiva"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ensayo clínico controlado aleatorizado (ECA) minimiza sesgos y ofrece el nivel más alto de evidencia científica para evaluar intervenciones clínicas preventivas y terapéuticas."
    },
    {
        id: 119,
        area: "Cirugía y Periodoncia",
        pregunta: "¿Cuál es la característica histológica principal que define la presencia de una 'bolsa periodontal verdadera' en comparación con una 'falsa bolsa' (bolsa gingival)?",
        opciones: [
            "A) Desplazamiento apical del epitelio de unión con destrucción del tejido conectivo de inserción y resorción ósea alveolar",
            "B) Incremento del volumen gingival exclusivamente por edema inflamatorio sin pérdida ósea",
            "C) Aumento de la longitud de la corona clínica por recesión gingival",
            "D) Ausencia absoluta de infiltrado inflamatorio crónico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La bolsa periodontal verdadera se caracteriza por la migración apical del epitelio de unión y pérdida de inserción, a diferencia de la bolsa falsa, donde solo hay agrandamiento gingival."
    },
    {
        id: 120,
        area: "Odontopediatría y Ortodoncia",
        pregunta: "¿Cuál es el momento cronológico ideal para realizar la primera revisión ortodóntica preventiva integral en un niño, según las asociaciones internacionales de ortodoncia?",
        opciones: [
            "A) A los 7 años de edad (o ante la aparición de los primeros signos de maloclusión)",
            "B) Al concluir la adolescencia a los 18 años",
            "C) Exclusivamente al terminar la erupción de los terceros molares",
            "D) Durante el primer año de vida sin dientes"
        ],
        respuestaCorrecta: 0,
        explicacion: "La edad de 7 años es el momento clave para la primera evaluación ortodóntica, ya que coincide con la erupción de los primeros molares e incisivos permanentes, permitiendo detectar maloclusiones esqueléticas o dentarias precoces."
    }
];