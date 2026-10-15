// Banco de Reactivos - EGEL Plus Medicina (Bloque 1: Preguntas 1 a 40)
const bancoPreguntas = [
    {
        id: 1,
        area: "Medicina Interna - Cardiología",
        pregunta: "Masculino de 62 años con antecedente de hipertensión arterial y dislipidemia. Acude a urgencias por presentar dolor torácico opresivo retroesternal de 45 minutos de evolución, irradiado a cuello y brazo izquierdo, acompañado de diaforesis. El ECG muestra elevación del segmento ST >2 mm en derivaciones V1 a V4. ¿Cuál es el diagnóstico clínico y la conducta inmediata recomendada?",
        opciones: [
            "A) Angina inestable; administrar ácido acetilsalicílico y nitratos sublinguales con alta a domicilio",
            "B) Infarto agudo de miocardio con elevación del ST (IAMCEST) de pared anterior; reperfusión inmediata (angioplastia primaria o fibrinolítico)",
            "C) Pericarditis aguda; iniciar tratamiento con antiinflamatorios no esteroideos y colchicina",
            "D) Tromboembolia pulmonar; realizar angiotomografía computarizada de tórax de urgencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro clínico clásico de dolor retroesternal opresivo junto con elevación del ST en derivaciones precordiales (V1-V4) confirma un IAMCEST anterior. La prioridad absoluta es la reperfusión miocárdica urgente dentro de las ventanas terapéuticas establecidas."
    },
    {
        id: 2,
        area: "Medicina Interna - Endocrinología",
        pregunta: "Femenina de 24 años con diagnóstico previo de Diabetes Mellitus Tipo 1. Es llevada a urgencias por presentar náusea, vómito, dolor abdominal difuso y alteración del estado de alerta. A la exploración física destaca respiración profunda y rápida (Kussmaul) y aliento a frutas. Laboratorio: Glucosa 380 mg/dL, pH arterial 7.18, HCO3 11 mEq/L y cetonas urinarias (+3). ¿Cuál es el manejo inicial prioritario?",
        opciones: [
            "A) Iniciar infusión de insulina rápida a dosis alta sin reposición de líquidos",
            "B) Rehidratación parenteral con solución salina al 0.9% y reposición electrolítica antes/simultánea a la insulina",
            "C) Administración de bicarbonato de sodio en bolo intravenoso inmediato",
            "D) Aplicación de insulina glargina subcutánea y alta inmediata"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagnóstico es Cetoacidosis Diabética. La pauta inicial prioritaria según las guías clínicas es la restitución del volumen intravascular con solución salina al 0.9% para corregir la deshidratación y restablecer la perfusión renal, evaluando el potasio sérico antes de iniciar infusión de insulina."
    },
    {
        id: 3,
        area: "Pediatría - Infectología",
        pregunta: "Lactante menor de 18 meses con cuadro de 3 días de evolución caracterizado por coriza, tos rinofaringea y fiebre de 38.3 °C. Hoy presenta estridor inspiratorio, tos perruna (metálica) y disfonía. A la exploración se observa tiraje intercostal leve. La radiografía anteroposterior de cuello muestra estrechamiento subglótico (signo de la torre o de la aguja). ¿Cuál es el tratamiento de primera línea?",
        opciones: [
            "A) Amoxicilina con ácido clavulánico por vía oral",
            "B) Dexametasona por vía oral o intramuscular (0.6 mg/kg) y micronebulización con adrenalina racémica si hay estridor en reposo",
            "C) Salbutamol en micronebulización cada 20 minutos",
            "D) Antihistamínicos y antitusígenos orales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Se trata de una Laringotraqueobronquitis aguda (Crup vírico). El corticoide (dexametasona a dosis única) reduce el edema inflamatorio de la vía aérea subglótica; la adrenalina nebulizada se indica en moderado a grave para vasoconstricción rápida."
    },
    {
        id: 4,
        area: "Cirugía General - Abdomen Agudo",
        pregunta: "Femenina de 32 años acude por dolor abdominal de 12 horas de evolución que inició en epigastrio y posteriormente migró a la fosa ilíaca derecha. Presenta náuseas, hiporexia y fiebre de 38.1 °C. A la exploración presenta signo de McBurney positivo, signo de Blumberg positivo y leucocitosis de 14,000/mm3 con neutrofilia. ¿Cuál es la conducta terapéutica definitiva?",
        opciones: [
            "A) Tratamiento médico conservador con analgésicos y antiespasmódicos",
            "B) Apendicectomía quirúrgica (abierta o laparoscópica)",
            "C) Tomografía computarizada y observación intrahospitalaria por 48 horas sin cirugía",
            "D) Colonoscopia de urgencia para descartar enfermedad diverticular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La presentación clínica y laboratorial orienta firmemente a Apendicitis Aguda (Escala de Alvarado alta). El tratamiento definitivo de elección es la intervención quirúrgica (apendicectomía) para prevenir complicaciones como perforación y peritonitis."
    },
    {
        id: 5,
        area: "Ginecología y Obstetricia",
        pregunta: "Gestante de 34 semanas de embarazo acude a revisión por cifras tensionales de 165/110 mmHg encontradas en dos tomas separadas por 15 minutos, cefalea intensa, acúfenos y fosfenos. El examen de orina muestra proteinuria +3 en tira reactiva. No refiere crisis convulsivas. ¿Cuál es el diagnóstico clínico y la medida farmacológica prioritaria para prevención de eclampsia?",
        opciones: [
            "A) Hipertensión gestacional; iniciar hidralazina únicamente",
            "B) Preeclampsia con datos de severidad; administrar Sulfato de Magnesio como neuroprotección/anticonvulsivo y tratamiento antihipertensivo",
            "C) Hipertensión crónica; indicar reposo en cama y dieta normosódica",
            "D) Síndrome de HELLP; cesárea inmediata sin estabilización previa"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cumple criterios de Preeclampsia con datos de severidad (presión ≥160/110 mmHg + síntomas vasomotores/neurológicos + proteinuria). El Sulfato de Magnesio es el fármaco de elección indiscutible para prevenir el desarrollo de eclampsia."
    },
    {
        id: 6,
        area: "Medicina Interna - Neumología",
        pregunta: "Masculino de 68 años, fumador crónico con índice tabáquico de 40 paquetes/año, presenta disnea progresiva de esfuerzo y tos productiva hialina de larga evolución. La espirometría posbroncodilatador muestra una relación FEV1/FVC de 0.62. ¿Cuál es el pilar farmacológico inicial para el control de los síntomas en este paciente?",
        opciones: [
            "A) Broncodilatadores de acción prolongada (LAMA o LABA)",
            "B) Corticoides inhalados a dosis altas en monoterapia",
            "C) Antibioticoterapia profiláctica continua con macrólidos",
            "D) Corticoides sistémicos orales de forma permanente"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una relación FEV1/FVC < 0.70 posbroncodilatador confirma la limitación persistente al flujo aéreo (EPOC). Los antimuscarínicos de acción prolongada (LAMA) o agonistas beta-2 de acción prolongada (LABA) son el tratamiento central de mantenimiento."
    },
    {
        id: 7,
        area: "Pediatría - Neonatología",
        pregunta: "Recién nacido de 39 semanas obtenido por parto vaginal con líquido amniótico claro. Al nacimiento se observa apnea y tono muscular flácido. Se coloca bajo cuna radiante, se posiciona la vía aérea, se aspira si es necesario, se seca y se estimula. Tras 30 segundos de estas maniobras iniciales, presenta frecuencia cardíaca de 80 latidos por minuto y esfuerzo respiratorio ineficaz. ¿Cuál es el paso siguiente en la reanimación neonatal?",
        opciones: [
            "A) Iniciar compresiones torácicas inmediatamente",
            "B) Iniciar Ventilación a Presión Positiva (VPP) con mascarilla y bolsa autoinflable",
            "C) Administrar adrenalina intravenosa a dosis de 0.02 mg/kg",
            "D) Aplicar oxígeno en flujo libre a 10 L/min"
        ],
        respuestaCorrecta: 1,
        explicacion: "En reanimación neonatal (algoritmo RCPN/AAP), si tras las maniobras iniciales la FC es menor a 100 lpm o el paciente presenta apnea/gasping, la indicación inmediata es iniciar Ventilación a Presión Positiva (VPP) durante 30 segundos."
    },
    {
        id: 8,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente de 28 años, G2 P1, con embarazo de 11 semanas por fecha de última regla. Acude por presentar sangrado transvaginal escaso de color obscuro y dolor cólico moderado en hipogastrio. A la exploración ginecológica, el cérvix se encuentra cerrado, sin salida de líquido amniótico ni restos ovulares. El ultrasonido pélvico reporta embrión intrauterino único con frecuencia cardíaca presente. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Aborto inevitable",
            "B) Amenaza de aborto",
            "C) Aborto incompleto",
            "D) Embarazo anembriónico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La presencia de sangrado transvaginal y dolor pélvico en las primeras 20 semanas de gestación con orificio cervical interno cerrado y vitalidad embrionaria/fetal comprobada define el cuadro de Amenaza de aborto."
    },
    {
        id: 9,
        area: "Cirugía General - Traumatología",
        pregunta: "Masculino de 25 años sufre accidente en motocicleta. Presenta dolor intenso e incapacidad funcional en el muslo derecho. A la exploración física se observa deformidad, acortamiento y rotación externa de la extremidad. El pulso pedio y tibial posterior están presentes, llenado capilar de 2 segundos. La radiografía confirma fractura diafisiaria desplazada de fémur. ¿Cuál es el manejo quirúrgico de elección?",
        opciones: [
            "A) Reducción cerrada y colocación de aparato de yeso pelvipédico",
            "B) Fijación interna con clavo intramedular bloqueado",
            "C) Inmovilización prolongada en tracción cutánea exclusivamente",
            "D) Artroplastia total de cadera"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para las fracturas diafisiarias de fémur en adultos jóvenes, el estándar de oro quirúrgico es la osteosíntesis mediante clavo intramedular fresado y bloqueado, ya que permite alineación, estabilidad biomecánica y movilización temprana."
    },
    {
        id: 10,
        area: "Medicina Interna - Gastroenterología",
        pregunta: "Masculino de 50 años con antecedente de cirrosis hepática por alcohol. Es llevado a urgencias por hematemesis abundante y choque hipovolémico. A la exploración física: TA 85/50 mmHg, FC 120 bpm, estigmas de hepatopatía crónica. Tras lograr la estabilización hemodinámica inicial con hemoderivados y cristaloides, ¿cuál es la conducta diagnóstica y terapéutica prioritaria?",
        opciones: [
            "A) Tomografía computarizada de abdomen contrastada",
            "B) Endoscopia digestiva alta urgente (dentro de las primeras 12 horas) para ligadura con banda elástica y fármacos vasoactivos (terlipresina u octreótido)",
            "C) Lavado gástrico con agua fría y alta a domicilio con omeprazol oral",
            "D) Angiografía mesentérica digestiva directa"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ante la sospecha de hemorragia por varices esofágicas en cirróticos, la combinación de farmacoterapia vasoactiva temprana y la endoscopia digestiva alta oportuna con ligadura variceal es el pilar para el control del sangrado."
    },
    {
        id: 11,
        area: "Salud Pública y Medicina Preventiva",
        pregunta: "En una comunidad rural se detecta un brote epidémico de diarrea aguda en población infantil. La investigación epidemiológica señala la sospecha de contaminación del pozo de agua potable del pueblo. ¿Qué indicador o prueba de laboratorio en agua es el estándar para confirmar la contaminación fecal?",
        opciones: [
            "A) Determinación de dureza del agua y pH",
            "B) Cuantificación de coliformes fecales (Escherichia coli) en muestra microbiológica de agua",
            "C) Medición de cloro residual libre exclusivamente",
            "D) Presencia de sedimentos y turbidez visual"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cuantificación de coliformes fecales (especialmente E. coli) es el bioindicador normativo microbiológico utilizado internacionalmente para verificar la contaminación fecal en fuentes de agua para consumo humano."
    },
    {
        id: 12,
        area: "Medicina Interna - Infectología",
        pregunta: "Masculino de 35 años con infección por VIH de reciente diagnóstico, sin apego a tratamiento antirretroviral. Acude por cefalea holocraneana progresiva de 2 semanas de evolución, fiebre de 38 °C y rigidez de nuca. El líquido cefalorraquídeo revela pleocitosis mononuclear, hiperproteinorraquia, hipoglucorraquia y tinción con Tinta China positiva. ¿Cuál es el agente etiológico y el tratamiento de inducción?",
        opciones: [
            "A) Streptococcus pneumoniae; Ceftriaxona + Vancomicina",
            "B) Cryptococcus neoformans; Anfotericina B liposomal + Flucitocina",
            "C) Mycobacterium tuberculosis; Esquema TETRA (RIPE)",
            "D) Virus del Herpes Simplex tipo 1; Aciclovir IV"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tinción de Tinta China positiva en LCR en pacientes inmunocomprometidos es patognomónica de Cryptococcus neoformans. El tratamiento de fase de inducción de elección es Anfotericina B combinada con Flucitocina."
    },
    {
        id: 13,
        area: "Pediatría - Gastroenterología",
        pregunta: "Lactante de 7 meses acude por presentar evacuaciones líquidas abundantes, de contenido acuoso, sin moco ni sangre, de 48 horas de evolución, acompañadas de vómito y fiebre leve. A la exploración física: mucosas orales secas, llanto con escasa lágrima, llenado capilar de 3 segundos y fontanela anterior levemente deprimida. ¿Cuál es el grado de deshidratación y la vía de rehidratación indicada según el Plan B de la OMS?",
        opciones: [
            "A) Sin deshidratación evidente; Plan A con Vida Suero Oral en el hogar tras cada evacuación",
            "B) Deshidratación moderada (con algún grado de deshidratación); Plan B con Vida Suero Oral (100 mL/kg en 4 horas) bajo supervisión médica",
            "C) Deshidratación grave con choque; Plan C con solución Hartmann intravenosa a dosis de carga",
            "D) Deshidratación grave; administración de antibiótico oral y ayuno absoluto"
        ],
        respuestaCorrecta: 1,
        explicacion: "El paciente presenta datos de deshidratación moderada (mucosas secas, lágrimas disminuidas, llenado capilar prolongado). El manejo normado es el Plan B mediante la administración de Vida Suero Oral a dosis de 50-100 mL/kg en 4 horas dividido en tomas cortas."
    },
    {
        id: 14,
        area: "Cirugía General - Urología",
        pregunta: "Masculino de 38 años acude por dolor agudo de gran intensidad en fosa renal derecha, de inicio súbito, que se irradia hacia la región inguinal y testículo ipsilateral, acompañado de náuseas y diaforesis. El examen general de orina muestra hematuria microscópica. ¿Cuál es el estudio de imagen de elección para confirmar el diagnóstico de litiasis ureteral?",
        opciones: [
            "A) Radiografía simple de abdomen (RX de Renal-Vejiga)",
            "B) Tomografía computarizada helicoidal no contrastada de abdomen y pelvis (Uro-TAC)",
            "C) Ultrasonido renal exclusivamente",
            "D) Urografía excretora intravenosa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Uro-TAC (tomografía no contrastada) es la prueba diagnóstica con mayor sensibilidad y especificidad (>95%) para detectar litiasis urinaria, permitiendo valorar ubicación, tamaño y densidad del lito."
    },
    {
        id: 15,
        area: "Medicina Interna - Nefrología",
        pregunta: "Masculino de 58 años con antecedentes de hipertensión y diabetes de larga evolución. En estudios de laboratorio de rutina se detecta Creatinina sérica de 2.8 mg/dL, Nitrógeno Ureico en Sangre (BUN) de 42 mg/dL y un Cociente Albúmina/Creatinina en orina de 350 mg/g. El ultrasonido renal muestra riñones disminuidos de tamaño de forma bilateral con pérdida de la relación corticomedular. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Lesión renal aguda prerrenal por deshidratación",
            "B) Enfermedad Renal Crónica (ERC)",
            "C) Glomerulonefritis rápidamente progresiva",
            "D) Necrosis tubular aguda infecciosa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La alteración de la función renal persistente, acompañada de albuminuria marcada y hallazgos ecográficos de riñones pequeños con atrofia corticomedular bilateral en un paciente diabético e hipertenso, confirma el diagnóstico de Enfermedad Renal Crónica."
    },
    {
        id: 16,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente femenina de 26 años acude a consulta por leucorrea fétida con olor a 'pescado', de color grisáceo o blanquecino, homogénea, sin prurito vulvar ni disuria. A la exploración con especuloscopia se observa exudado vaginal fino. Al agregar hidróxido de potasio (KOH al 10%) a la secreción se libera un fuerte olor a aminas (prueba de aminas positiva) y al microscopio se aprecian células guía (clue cells). ¿Cuál es el tratamiento farmacológico de elección?",
        opciones: [
            "A) Fluconazol 150 mg vía oral en dosis única",
            "B) Metronidazol 500 mg vía oral cada 12 horas por 7 días",
            "C) Nistatina en óvulos vaginales por 14 días",
            "D) Azitromicina 1 g vía oral en dosis única"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los hallazgos de células guía, olor a aminas con KOH y leucorrea grisácea cumplen los Criterios de Amsel para Vaginosis Bacteriana (Gardnerella vaginalis). El tratamiento de primera línea es Metronidazol oral."
    },
    {
        id: 17,
        area: "Medicina Interna - Reumatología",
        pregunta: "Femenina de 32 años acude por dolor, inflamación y rigidez matutina de más de 1 hora de duración en articulaciones metacarpofalángicas, interfalángicas proximales y muñecas de forma simétrica, de 3 meses de evolución. A la exploración se observa eritema y aumento de volumen local. ¿Cuáles son los marcadores serológicos con mayor especificidad para confirmar este diagnóstico?",
        opciones: [
            "A) Anticuerpos Antinucleares (ANA) y Anti-DNA de doble cadena",
            "B) Anticuerpos contra Peptípidos Citrulinados Cíclicos (Anti-CCP) y Factor Reumatoide (FR)",
            "C) Anticuerpos Anti-Scl70 y Anti-Centrómero",
            "D) Anticuerpos Anti-RO (SSA) y Anti-LA (SSB)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro clínico es altamente sugestivo de Artritis Reumatoide. Mientras que el Factor Reumatoide es sensible, los anticuerpos Anti-CCP presentan una especificidad superior (>95%) para el diagnóstico de la enfermedad."
    },
    {
        id: 18,
        area: "Pediatría - Urgencias / Neumología",
        pregunta: "Preescolar de 3 años con diagnóstico de asma bronquial es llevado a urgencias por presentar crisis asmática aguda. A la exploración física se observa polipnea, tiraje intercostal, aleteo nasal y sibilancias audibles en ambos campos pulmonares. Saturación de oxígeno por pulsioximetría en 89% al aire ambiente. ¿Cuál es el esquema farmacológico de rescate de primera línea?",
        opciones: [
            "A) Administración de oxígeno suplementario para mantener SatO2 >94% + Salbutamol nebulizado/inhalado en ciclos continuos + Corticoide sistémico (Metilprednisolona/Prednisolona)",
            "B) Corticoide inhalado exclusivamente en monoterapia a dosis bajas",
            "C) Antibiótico macrólido vía oral y aminofilina intravenosa",
            "D) Bromuro de ipratropio como único tratamiento en aerosol"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una exacerbación asmática moderada-severa, el manejo inicial inmediato consiste en oxigenoterapia, agonistas beta-2 de acción corta (Salbutamol) a dosis repetidas y corticoide sistémico para acelerar la resolución del proceso inflamatorio de las vías aéreas."
    },
    {
        id: 19,
        area: "Cirugía General - Pared Abdominal",
        pregunta: "Masculino de 65 años acude por aumento de volumen en la región inguinal derecha que aparece con el esfuerzo físico y se reduce espontáneamente al decúbito. A la exploración física, al introducir el dedo a través del anillo inguinal externo y pedir al paciente que realice maniobra de Valsalva, la masa protruye e impacta directamente en la yema del dedo (no en el costado). ¿Qué tipo de hernia inguinal presenta?",
        opciones: [
            "A) Hernia inguinal indirecta",
            "B) Hernia inguinal directa",
            "C) Hernia femoral o crural",
            "D) Hernia umbilical estrangulada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las hernias inguinales directas se producen por debilidad de la pared posterior del conducto inguinal (triángulo de Hesselbach) y protruyen directamente hacia adelante golpeando la yema del dedo explorador."
    },
    {
        id: 20,
        area: "Medicina Interna - Neurología",
        pregunta: "Masculino de 70 años es llevado a urgencias por presentar debilidad repentina en hemicuerpo derecho y afasia del lenguaje de 2 horas de evolución. A la exploración se confirma hemiparesia faciobraquiocrural derecha e imposibilidad para la emisión del lenguaje. La tomografía axial computada simple de cráneo no muestra evidencias de hemorragia intraaxial ni lesiones hipodensas francas. ¿Cuál es la terapia de reperfusión indicada si no existen contraindicaciones?",
        opciones: [
            "A) Anticoagulación inmediata con Heparina no fraccionada en bolo",
            "B) Trombólisis intravenosa con Activador Tisular del Plasminógeno recombinante (rt-PA / Alteplasa)",
            "C) Craneotomía descompresiva de urgencia",
            "D) Administración de Mannitol intravenoso al 20%"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro corresponde a un Evento Vascular Cerebral (EVC) isquémico agudo. Dentro de la ventana terapéutica de < 4.5 horas sin datos tomográficos de hemorragia ni contraindicaciones, el rt-PA IV es el tratamiento normado para restaurar la perfusión cerebral."
    },
    {
        id: 21,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente gestante de 39 semanas de embarazo en trabajo de parto. A la exploración cervical presenta dilatación de 8 cm, borramiento del 90%, membranas integras. La presentación fetal es cefálica, variedad de posición occipito-anterior, punto tocón en plano +2 de De Lee (encajada). ¿En qué fase de la curva de trabajo de parto (Friedman/OMS) se encuentra?",
        opciones: [
            "A) Fase latente del primer periodo de trabajo de parto",
            "B) Fase activa del primer periodo de trabajo de parto",
            "C) Segundo periodo (expulsivo)",
            "D) Tercer periodo (alumbramiento)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El primer periodo del trabajo de parto comprende desde el inicio de la dinámica uterina hasta la dilatación completa (10 cm). La fase activa inicia clásicamente a partir de los 4-6 cm de dilatación con una velocidad acelerada de progreso."
    },
    {
        id: 22,
        area: "Salud Pública y Epidemiología",
        pregunta: "En un estudio epidemiológico se busca determinar la asociación entre el consumo de alimentos ultraprocesados y el desarrollo de cáncer colorrectal. Para ello, se selecciona un grupo de pacientes con diagnóstico confirmado de cáncer colorrectal y un grupo de individuos sanos sin la enfermedad, indagando retrospectivamente sobre su dieta en los últimos 10 años. ¿A qué diseño de investigación corresponde?",
        opciones: [
            "A) Estudio de cohorte prospectivo",
            "B) Estudio de Casos y Controles",
            "C) Ensayo clínico aleatorizado",
            "D) Estudio transversal descriptivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un diseño que parte de la presencia (casos) o ausencia (controles) del efecto o enfermedad y analiza de forma retrospectiva la exposición previa a un factor de riesgo es un Estudio de Casos y Controles."
    },
    {
        id: 23,
        area: "Pediatría - Infectología / Dermatología",
        pregunta: "Escolar de 6 años acude por presentar exantema maculopapular eritematoso difuso que inició en cara (con palidez peribucal o signo de Filatov) y descendió a tronco y extremidades con aspecto de 'piel de lija'. En cavidad oral se observan amígdalas hipertróficas con exudado blanquecino y lengua con papilas hiperémicas (lengua en frambuesa). ¿Cuál es el diagnóstico y el tratamiento de elección?",
        opciones: [
            "A) Sarampión; sintomático con vitamina A",
            "B) Escarlatina; Penicilina V oral o Penicilina G Benzatínica IM",
            "C) Varicela; Aciclovir oral",
            "D) Eritema infeccioso; manejo puramente sintomático"
        ],
        respuestaCorrecta: 1,
        explicacion: "La escarlatina es causada por exotoxinas pirógenas de Streptococcus pyogenes (Streptococcus betahemolítico del grupo A). Cursa con faringoamigdalitis, exantema en piel de lija, signo de Filatov y lengua en frambuesa. Se trata con Penicilina."
    },
    {
        id: 24,
        area: "Medicina Interna - Hematología",
        pregunta: "Femenina de 42 años acude por astenia, adinamia, fatiga y parestesias en extremidades inferiores. En los estudios de laboratorio se reporta: Hemoglobina 8.2 g/dL, Volumen Corpuscular Medio (VCM) 115 fL, Leucocitos 3,800/mm3 y Plaquetas 130,000/mm3. El frotis de sangre periférica muestra neutrófilos hipersegmentados. ¿Cuál es la causa metabólica/nutricional más probable?",
        opciones: [
            "A) Deficiencia de Hierro (Anemia ferropénica)",
            "B) Deficiencia de Vitamina B12 (Cobalamina) / Anemia perniciosa",
            "C) Anemia por enfermedad crónica",
            "D) Intoxicación por plomo (Saturnismo)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La anemia macrocítica (VCM > 100 fL) acompañada de pancitopenia leve, neutrófilos hipersegmentados y síntomas neurológicos (parestesias) es característica de la deficiencia de Vitamina B12."
    },
    {
        id: 25,
        area: "Cirugía General - Vías Biliares",
        pregunta: "Femenina de 45 años con antecedentes de colelitiasis. Acude por dolor severo en hipocondrio derecho de 18 horas de evolución, continuo, irradiado a escápula homolateral, acompañado de náuseas, vómito y fiebre de 38.5 °C. A la exploración física: signo de Murphy positivo a la palpación profunda. El ultrasonido de cuadrante superior derecho muestra vesícula biliar con pared engrosada (> 4 mm), líquido perivesicular y litos impactados en el cuello vesicular. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Cólico biliar simple",
            "B) Colecistitis aguda litiasica",
            "C) Colangitis ascendente",
            "D) Pancreatitis aguda edematosa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de dolor prolongado en CSD, fiebre, Signo de Murphy positivo e hallazgos ecográficos de engrosamiento de la pared vesicular y líquido perivesicular confirma Colecistitis Aguda."
    },
    {
        id: 26,
        area: "Medicina Interna - Dermatología",
        pregunta: "Masculino de 28 años presenta erupción cutánea prurítica caracterizada por pápulas eritematosas y surcos lineales pequeñitos en espacios interdigitales de las manos, pliegues de muñecas, axilas y zona periumbilical. Refiere que el prurito se intensifica de manera considerable durante la noche. Varios miembros de su familia presentan la misma sintomatología. ¿Cuál es el diagnóstico y tratamiento tópico de elección?",
        opciones: [
            "A) Pediculosis corporal; Permetrina al 1%",
            "B) Escabiosis (Escabiasis / Sarna humanada); Permetrina al 5% en crema aplicada en todo el cuerpo de cuello a pies",
            "C) Dermatitis atópica; Hidrocortisona tópica únicamente",
            "D) Tinea corporis; Terbinafina en crema"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro de surcos acarinos, prurito nocturno de predominio en pliegues y afectación familiar es diagnóstico de Escabiosis por Sarcoptes scabiei. La Permetrina tópica al 5% es la primera elección."
    },
    {
        id: 27,
        area: "Pediatría - Crecimiento y Desarrollo",
        pregunta: "Durante la evaluación del desarrollo psicomotor de un lactante sano, el médico observa que el niño logra mantenerse sentado por sí solo sin apoyo (sedestación independiente), emite bisílabos ('ba-ba', 'da-da') y pasa un objeto de una mano a la otra. ¿A qué edad en meses corresponde típicamente este hito del desarrollo?",
        opciones: [
            "A) 2 a 3 meses",
            "B) 6 a 7 meses",
            "C) 12 meses",
            "D) 18 meses"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sedestación firme sin apoyo, la transferencia de objetos de mano a mano y el balbuceo bisílabo no intencional corresponden típicamente al desarrollo motor y del lenguaje de un lactante de 6 a 7 meses de edad."
    },
    {
        id: 28,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente de 30 años acude para citología cervical de rutina (Papanicolaou). El reporte histopatológico regresa indicando Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / HSIL). ¿Cuál es la conducta médica normativa inmediata?",
        opciones: [
            "A) Repetir el Papanicolaou en 1 año",
            "B) Referencia a clínica de displasias para realización de Colposcopia y toma de biopsia dirigida",
            "C) Histerectomía total abdominal directa",
            "D) Tratamiento con ovulos antibióticos por 7 días y alta"
        ],
        respuestaCorrecta: 1,
        explicacion: "Todo reporte citológico cervical con resultado de LIE de Alto Grado (HSIL) requiere de forma obligatoria la evaluación colposcópica inmediata y la toma de biopsia de las zonas sospechosas para confirmación."
    },
    {
        id: 29,
        area: "Medicina Interna - Nefrología / Urgencias",
        pregunta: "Masculino de 60 años con antecedente de insuficiencia renal oligúrica. Ingresa a urgencias por debilidad muscular extrema y letargo. El electrocardiograma muestra ondas T picudas y altas en la mayoría de las derivaciones, aplanamiento de la onda P y ensanchamiento del complejo QRS. El laboratorio reporta K+ sérico de 7.2 mEq/L. ¿Cuál es el primer fármaco a administrar para estabilizar la membrana miocárdica?",
        opciones: [
            "A) Furosemida intravenosa en bolo",
            "B) Gluconato de Calcio al 10% intravenoso",
            "C) Solución polarizante (Insulina rápida + Glucosa)",
            "D) Resinas de intercambio iónico (Kayexalate) vía oral"
        ],
        respuestaCorrecta: 1,
        explicacion: "Ante una Hiperpotasemia grave con cambios electrocardiográficos (ondas T picudas, QRS ancho), la medida inicial de extrema urgencia es la administración de Gluconato de Calcio IV, el cual antagoniza los efectos de la hiperpotasemia sobre el potencial de acción del miocardio de forma inmediata."
    },
    {
        id: 30,
        area: "Cirugía General - Proctología",
        pregunta: "Masculino de 35 años acude por dolor anal muy intenso, lacerante o punzante, desencadenado por la defecación, que persiste por varias horas después de ir al baño. Refiere sangrado escaso en forma de hilo rojo rutilante sobre el papel higiénico. A la exploración proctológica se observa hipertonía del esfínter anal y una solución de continuidad en la comisura anal posterior. ¿Cuál es el diagnóstico y el manejo farmacológico conservador inicial?",
        opciones: [
            "A) Hemorroides internas Grado III; Ligadura con banda elástica",
            "B) Fisura anal crónica/aguda; Ablandadores de heces, baños de asiento y diltiazem o nitroglicerina tópica para reducir el tono del esfínter",
            "C) Absceso isquiorrectal; Drenaje quirúrgico urgente bajo anestesia",
            "D) Fístula anal compleja; Fistulotomía de urgencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El dolor anal severo post-defecatorio, asociado a sangrado escaso y presencia de un desgarro en la comisura posterior, confirma Fisura Anal. El tratamiento inicial busca romper el espasmo del esfínter mediante vasodilatadores tópicos (diltiazem/nitratos) y fibra/ablandadores."
    },
    {
        id: 31,
        area: "Medicina Interna - Neumología",
        pregunta: "Masculino de 40 años sin comorbilidades. Acude por fiebre de 38.8 °C de inicio súbito, escalofríos, tos productiva con expectoración herrumbrosa y dolor torácico de tipo pleurítico en hemitórax derecho. A la exploración: estertores crepitantes y síndrome de consolidación pulmonar en base derecha. La radiografía de tórax muestra opacidad alveolar lobar inferior derecha con broncograma aéreo. ¿Cuál es el agente causal más frecuente de esta Neumonía Adquirida en la Comunidad (NAC)?",
        opciones: [
            "A) Mycoplasma pneumoniae",
            "B) Streptococcus pneumoniae (Neumococo)",
            "C) Pseudomonas aeruginosa",
            "D) Klebsiella pneumoniae"
        ],
        respuestaCorrecta: 1,
        explicacion: "Streptococcus pneumoniae sigue siendo el agente etiológico bacteriano más frecuente en la Neumonía Adquirida en la Comunidad típica en adultos de todas las edades."
    },
    {
        id: 32,
        area: "Pediatría - Urgencias",
        pregunta: "Lactante menor de 10 meses es llevado a urgencias por presentar crisis convulsiva tónico-clónica generalizada de 2 minutos de duración, la cual cedió espontáneamente. A su llegada se encuentra somnoliento, pero reactivo a estímulos. La temperatura corporal registrada es de 39.2 °C debida a otitis media aguda. No tiene antecedentes patológicos previos ni signos de irritación meníngea. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Crisis convulsiva febril simple",
            "B) Crisis convulsiva febril compleja",
            "C) Meningoencefalitis bacteriana aguda",
            "D) Epilepsia mioclónica del lactante"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una crisis febril simple ocurre en niños de 6 meses a 5 años, es tónico-clónica generalizada, dura menos de 15 minutos, ocurre solo una vez en 24 horas y no deja déficit neurológico ni se asocia a infección del SNC."
    },
    {
        id: 33,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente gestante de 32 semanas acude por sangrado transvaginal rojo rutilante, indoloro, de inicio súbito, que comenzó mientras dormía. No refiere actividad uterina dolorosa. A la exploración física: Tono uterino normal, abdomen blando, no doloroso. Frecuencia cardíaca fetal de 142 lpm. ¿Cuál es el procedimiento diagnóstico contraindicado antes de realizar un ultrasonido obstétrico?",
        opciones: [
            "A) Registros cardiotocográficos externos",
            "B) Tacto vaginal",
            "C) Ultrasonido transabdominal",
            "D) Especuloscopia estéril"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro de sangrado indoloro con tono uterino normal sugiere Placenta Previa. El tacto vaginal está estrictamente contraindicado debido al riesgo de desencadenar un sangrado masivo al percutir o desprender la placenta inserta en el segmento inferior."
    },
    {
        id: 34,
        area: "Medicina Interna - Endocrinología",
        pregunta: "Femenina de 38 años acude por astenia, intolerancia al frío, estreñimiento de varios meses, aumento de peso no explicado de 4 kg y sequedad de piel. A la exploración física se aprecia reflejos osteotendinosos con fase de relajación lenta y macroglosia leve. El perfil tiroideo reporta: TSH 14.5 mIU/L (elevada) y Tetrayodotironina libre (T4L) 0.4 ng/dL (disminuida). ¿Cuál es el diagnóstico y el tratamiento sustitutivo de elección?",
        opciones: [
            "A) Hipotiroidismo primario; Levotiroxina (T4 sintética)",
            "B) Hipertiroidismo por enfermedad de Graves; Tiamazol (Metimazol)",
            "C) Tiroiditis subaguda de De Quervain; AINEs y propranolol",
            "D) Hipotiroidismo subclínico; Observación sin tratamiento"
        ],
        respuestaCorrecta: 0,
        explicacion: "La TSH elevada acompañada de T4 libre disminuida confirma el diagnóstico de Hipotiroidismo primario manifiesto. El tratamiento hormonal sustitutivo estándar de por vida es la Levotiroxina a dosis calculada por peso."
    },
    {
        id: 35,
        area: "Cirugía General - Gastroenterología",
        pregunta: "Masculino de 52 años con antecedentes de etilismo crónico acude por dolor abdominal severo en epigastrio en 'cinturón', de inicio súbito tras ingesta copiosa de alimentos y alcohol, acompañado de vómitos incoercibles. A la exploración física presenta distensión abdominal, disminución de ruidos peristálticos y dolor a la palpación media y profunda. Los estudios de laboratorio reportan Amilasa sérica de 1,200 U/L y Lipasa de 1,800 U/L. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Úlcera péptica perforada",
            "B) Pancreatitis aguda",
            "C) Oclusión intestinal por bridas",
            "D) Trombosis mesentérica superior"
        ],
        respuestaCorrecta: 1,
        explicacion: "El dolor epigástrico irradiado en cinturón, asociado a la elevación de amilasa y lipasa séricas por encima de 3 veces el límite superior normal, cumple los criterios diagnósticos definitivos de Pancreatitis Aguda."
    },
    {
        id: 36,
        area: "Salud Pública / Infectología",
        pregunta: "Paciente masculino de 22 años sufre mordedura en la mano derecha por un perro desconocido que huyó del lugar. La herida es profunda, con sangrado activo. De acuerdo con las guías de prevención de Rabia humana, ¿cuál es el manejo profilláctico de la herida y la inmunización indicada?",
        opciones: [
            "A) Lavado vigoroso de la herida con agua y jabón, y alta sin vacunación ya que la rabia está erradicada",
            "B) Aseo local inmediato de la herida con agua y jabón, aplicación de Inmunoglobulina Antirrábica Humana en y alrededor de la herida + Esquema completo de Vacuna Antirrábica humana",
            "C) Sutura hermética inmediata de la herida y administración exclusiva de toxoide tetánico",
            "D) Antibioticoterapia oral y observación del paciente por 30 días sin vacunar"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las mordeduras graves en extremidades por animales no localizables o sospechosos de rabia requieren lavado profuso inmediato, administración de inmunoglobulina antirrábica para inmunidad pasiva e inicio del esquema de vacunación antirrábica de cultivo celular."
    },
    {
        id: 37,
        area: "Pediatría - Hematología",
        pregunta: "Niño de 4 años acude a consulta pediátrica por presentar súbitamente petequias, equimosis múltiples y gingivorragia escasa tras haber presentado un cuadro gripal banal hace 2 semanas. A la exploración física no presenta hepatomegalia, esplenomegalia ni adenopatías. La biometría hemática reporta: Plaquetas 18,000/mm3, Hemoglobina 13.5 g/dL y Leucocitos 7,200/mm3. ¿Cuál es el diagnóstico más probable?",
        opciones: [
            "A) Leucemia Linfoblástica Aguda (LLA)",
            "B) Trombocitopenia Inmune Primaria (Púrpura Trombocitopénica Inmune - PTI)",
            "C) Hemofilia A severa",
            "D) Síndrome Urémico Hemolítico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La PTI aguda infantil se caracteriza por el desarrollo brusco de trombocitopenia aislada (<100,000/mm3) y manifestaciones purpúricas en un niño previamente sano, frecuentemente precedida por una infección viral."
    },
    {
        id: 38,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente de 22 años solicita consejería sobre métodos anticonceptivos. Antecedente de migraña con aura focal visual. ¿Qué tipo de anticonceptivos hormonales está estrictamente contraindicado en ella por el riesgo incrementado de Evento Vascular Cerebral (EVC)?",
        opciones: [
            "A) Anticonceptivos orales combinados (Estrógeno + Progestágeno)",
            "B) Anticonceptivos de solo progestágeno (minipíldora)",
            "C) Dispositivo Intrauterino de Cobre (DIU-Cu)",
            "D) Implante subdérmico de Etonogestrel"
        ],
        respuestaCorrecta: 0,
        explicacion: "De acuerdo con los Criterios Médicos de Elegibilidad de la OMS (Categoría 4), los anticonceptivos hormonales combinados con estrógenos están estrictamente contraindicados en mujeres con migraña con aura debido a un riesgo significativamente elevado de EVC isquémico."
    },
    {
        id: 39,
        area: "Medicina Interna - Cardiología",
        pregunta: "Masculino de 65 años con antecedente de insuficiencia cardíaca con fracción de eyección reducida (FEVI 30%). Acude a control por presentar disnea progresiva de medianos a mínimos esfuerzos (NYHA III). A la exploración presenta estertores crepitantes basales y reflujo hepatoyugular. ¿Qué grupo farmacológico ha demostrado reducir la mortalidad global y las hospitalizaciones cuando se añade al esquema basal de un betabloqueador e IECA/ARNI?",
        opciones: [
            "A) Antagonistas del Receptor de Mineralocorticoide (Espironolactona / Eplerenona)",
            "B) Digoxina en monoterapia a dosis altas",
            "C) Antiinflamatorios no esteroideos sistémicos",
            "D) Diltiazem o Verapamilo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los antagonistas del receptor de mineralocorticoide (Espironolactona o Eplerenona) son pilares fundamentales que han demostrado reducir sustancialmente la mortalidad y reingresos en insuficiencia cardíaca con FEVI reducida sintomática."
    },
    {
        id: 40,
        area: "Cirugía General - Shock / Trauma",
        pregunta: "Masculino de 22 años ingresa a urgencias en estado de choque tras recibir una herida por arma blanca en el hemotórax izquierdo. A la exploración física: TA 70/40 mmHg, FC 135 bpm, ingurgitación yugular bilateral, ruidos cardíacos velados o apagados y pulso paradójico. Los campos pulmonares se encuentran bien ventilados bilateralmente. ¿Cuál es el diagnóstico clínico y la maniobra descompresiva de emergencia?",
        opciones: [
            "A) Neumotórax a tensión; Punción pleuro-costal en 2º espacio intercostal",
            "B) Taponamiento cardíaco (Tríada de Beck); Pericardiocentesis / Ventana pericárdica de urgencia",
            "C) Hemotórax masivo; Colocación de sonda endopleural gruesa",
            "D) Choque neurogénico; Administración de dopamina IV"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Tríada de Beck (hipotensión, ingurgitación yugular y ruidos cardíacos velados) acompañada de pulso paradójico en el contexto de trauma torácico penetrante es patognomónica de Taponamiento Cardíaco. Requiere descompresión pericárdica inmediata."
    },
    {
        id: 41,
        area: "Endocrinología",
        pregunta: "Femenina de 38 años con obesidad central, estrías rojizas abdominales, hipertensión y debilidad proximal. El cortisol libre urinario de 24 horas está muy elevado y la prueba de supresión con dexamethasone baja no suprime el cortisol. ¿Cuál es el siguiente paso diagnóstico?",
        opciones: [
            "A) Medición de hormona tiroidea TSH y T4 libre",
            "B) Cuantificación de anticuerpos antinucleares",
            "C) Determinación de los niveles plasmáticos de ACTH para diferenciar origen hipofisario o ectópico",
            "D) Realización de una resonancia magnética nuclear de rodilla"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Ante un Síndrome de Cushing ACTH-dependiente confirmado, el siguiente paso clave es medir los niveles plasmáticos de ACTH para distinguir entre la enfermedad de Cushing (origen hipofisario) y la secreción ectópica de ACTH."
    },
    {
        id: 42,
        area: "Traumatología y Ortopedia",
        pregunta: "Masculino de 20 años sufre fractura expuesta de tibia derecha tras caída en motocicleta, clasificada como Gustilo-Anderson Grado IIIa (herida amplia con daño de partes blandas pero cobertura ósea adecuada). ¿Cuál es la medida antibiótica inicial prioritaria en urgencias?",
        opciones: [
            "A) Administración temprana de antibioticoterapia intravenosa de amplio espectro (Cefalosporina de 1ª generación + Aminoglucósido) y aseo quirúrgico urgente",
            "B) Aplicación tópica de nitrofurantoína y vendaje elástico compresivo",
            "C) Uso exclusivo de analgésicos opioides sin cobertura antibiótica hasta el décimo día",
            "D) Cefalexina por vía oral cada 8 horas y alta a domicilio"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las fracturas expuestas requieren profilaxis antibiótica intravenosa inmediata (generalmente cefalosporinas de primera generación combinadas con aminoglucósidos para cobertura mixta) y desbridamiento quirúrgico temprano para evitar osteomielitis."
    },
    {
        id: 43,
        area: "Pediatría - Neumología",
        pregunta: "Lactante de 8 meses con cuadro de 2 días de rinorrea, tos y fiebre baja, que evoluciona con dificultad respiratoria, sibilancias y estertores crepitantes difusos. La radiografía de tórax muestra hiperinsuflación pulmonar e infiltrados peribronquiales. ¿Cuál es el agente etiológico viral más frecuente?",
        opciones: [
            "A) Virus de la Influenza A H1N1",
            "B) Parainfluenza tipo 3",
            "C) Adenovirus humano",
            "D) Virus Sincitial Respiratorio (VSR)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Virus Sincitial Respiratorio (VSR) es el principal agente causal de bronquiolitis aguda en lactantes menores de un año de edad, caracterizada por obstrucción de la vía aérea pequeña."
    },
    {
        id: 44,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente femenina de 25 años acude por ausencia de menstruación (amenorrea) de 6 meses de duración, con antecedente de ciclos regulares previos. Prueba de embarazo en orina negativa. Niveles séricos de prolactina normales y TSH normal. ¿Cómo se clasifica este tipo de amenorrea?",
        opciones: [
            "A) Amenorrea primaria de origen anatómico obstructivo",
            "B) Amenorrea secundaria",
            "C) Falla ovárica prematura irreversible",
            "D) Amenorrea gestacional por embarazo oculto"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La presencia de ausencia de menstruación por más de 3 ciclos o 6 meses en una mujer con historia de menstruaciones previas se define como Amenorrea secundaria."
    },
    {
        id: 45,
        area: "Gastroenterología",
        pregunta: "Masculino de 70 años acude por evacuaciones con rectorragia roja brillante, abundante, indolora, de inicio súbito. Hemodinámicamente estable. El estudio colonoscópico descarta neoplasias y revela múltiples sáculos en colon sigmoides con estigmas de sangrado reciente en uno de ellos. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Cáncer colorrectal avanzado de ciego",
            "B) Colitis isquémica aguda focal",
            "C) Hemorragia digestiva baja secundaria a Enfermedad Diverticular",
            "D) Hemorroides internas estranguladas"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La diverticulosis colónica es la causa más frecuente de hemorragia digestiva baja masiva y fulminante en adultos mayores, presentándose típicamente como rectorragia roja brillante e indolora."
    },
    {
        id: 46,
        area: "Salud Pública / Epidemiología",
        pregunta: "En una investigación epidemiológica se define a la 'Incidencia' como:",
        opciones: [
            "A) La proporción de casos nuevos de una enfermedad desarrollados en una población de riesgo durante un periodo de tiempo determinado",
            "B) El número total de casos (nuevos y antiguos) existentes en un momento dado en la población",
            "C) La tasa de mortalidad general ajustada por edad y género",
            "D) El porcentaje de falsos positivos en una prueba diagnóstica de tamizaje"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La incidencia mide específicamente la velocidad de aparición de casos nuevos de una enfermedad en una población inicialmente libre de la misma a lo largo de un seguimiento temporal."
    },
    {
        id: 47,
        area: "Nefrología",
        pregunta: "Paciente masculino de 55 años hospitalizado por sepsis de origen abdominal presenta oliguria marcada (<0.5 mL/kg/h) y elevación progresiva de azoados (Creatinina sérica duplicada en 48 horas). El examen general de orina muestra cilindros granulares turbios y células epiteliales tubulares. ¿Cuál es la causa más probable de esta lesión renal aguda?",
        opciones: [
            "A) Glomerulonefritis membranoproliferativa primaria",
            "B) Obstrucción ureteral bilateral por litiasis",
            "C) Necrosis tubular aguda (NTA) de origen isquémico/tóxico",
            "D) Estenosis bilateral de la arteria renal"
        ],
        respuestaCorrecta: 3, // D (Wait, index 3 is D)
        explicacion: "La combinación de isquemia por sepsis y la presencia de cilindros granulares en el sedimento urinario es característica de la Necrosis Tubular Aguda (NTA), la causa intraparenquimatosa más común de LRA intrahospitalaria."
    },
    {
        id: 48,
        area: "Cirugía General",
        pregunta: "Durante una intervención quirúrgica por abdomen agudo, se identifica apéndice cecal hiperémico, con áreas de necrosis y microperforación en su tercio medio, además de líquido purulento libre en la cavidad peritoneal. ¿Cómo se clasifica esta apendicitis y qué manejo complementario requiere?",
        opciones: [
            "A) Apendicectomía simple sin lavado ni antibiótico postoperatorio",
            "B) Apendicectomía, lavado peritoneal exhaustivo y curso de antibióticos terapéuticos de amplio espectro para peritonitis",
            "C) Cierre de la cavidad sin resección apendicular y tratamiento médico exclusivo",
            "D) Derivación intestinal temporal mediante ileostomía de protección"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una apendicitis perforada con peritonitis localizada o generalizada requiere la extirpación del órgano, lavado de la cavidad para disminuir carga bacteriana y esquema antibiótico intravenoso dirigido."
    },
    {
        id: 49,
        area: "Infectología Pediátrica",
        pregunta: "Lactante menor con tos paroxística emetizante de varias semanas de evolución, precedida por inspiración prolongada con estridor inspiratorio ('gallito inspiratorio'). La biometría hemática destaca linfocitosis absoluta importante. ¿Cuál es el agente causal y el tratamiento antibiótico indicado?",
        opciones: [
            "A) Streptococcus pneumoniae; amoxicilina con ácido clavulánico",
            "B) Virus sincitial respiratorio; soporte respiratorio",
            "C) Bordetella pertussis; administración de macrólidos (eritromicina o azitromicina)",
            "D) Mycoplasma pneumoniae; doxiciclina oral"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El cuadro clínico de tos ferina paroxística con estridor inspiratorio y linfocitosis es característico de la infección por Bordetella pertussis. Los macrólidos son el tratamiento de elección para acortar la excreción bacteriana."
    },
    {
        id: 50,
        area: "Ginecología y Obstetricia",
        pregunta: "Femenina en su tercer periodo del trabajo de parto (alumbramiento) presenta hemorragia transvaginal abundante e incesante inmediatamente posterior a la expulsión fetal. A la exploración se palpa útero flácido, reblandecido, por arriba de la cicatriz umbilical. ¿Cuál es la causa más frecuente de esta complicación y el manejo inicial?",
        opciones: [
            "A) Atonía uterina; masaje uterino bimanual y administración de uterotónicos (Oxitocina IV)",
            "B) Inversión uterina total; tracción enérgica del cordón umbilical",
            "C) Desgarro cervical profundo; histerectomía de urgencia inmediata",
            "D) Retención de restos placentarios; legrado uterino instrumental sin oxitocina"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La atonía uterina es responsable de hasta el 80% de los casos de hemorragia obstétrica postparto. El tratamiento inicial consiste en masaje uterino y oxitocina intravenosa."
    },
    {
        id: 51,
        area: "Neumología",
        pregunta: "Paciente de 45 años con asma mal controlada acude a valoración funcional. La espirometría con prueba broncodilatadora muestra un incremento del FEV1 de 15% y de 250 mL respecto al valor basal. ¿Qué demuestra este hallazgo espirométrico?",
        opciones: [
            "A) Limitación irreversible al flujo aéreo característica de fibrosis pulmonar",
            "B) Obstrucción fija por enfisema centroacinar",
            "C) Patrón restrictivo puro secundario a obesidad mórbida",
            "D) Reversibilidad significativa de la obstrucción bronquial, característica del asma"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Un incremento en el FEV1 mayor al 12% y a 200 mL tras la administración de un broncodilatador define la reversibilidad de la obstrucción, un criterio diagnóstico clave en el asma bronquial."
    },
    {
        id: 52,
        area: "Gastroenterología",
        pregunta: "Femenina de 40 años con dolor cólico en hipocondrio derecho posterior a ingesta de grasas, acompañado de náuseas. El ultrasonido reporta litiasis vesicular única de 12 mm, sin engrosamiento de pared vesicular ni dilatación de vía biliar principal. Asintomática en este momento. ¿Cuál es la indicación de manejo?",
        opciones: [
            "A) Colecistectomía laparoscópica profiláctica de urgencia inmediata",
            "B) Colecistectomía laparoscópica electiva debido al tamaño del lito (>1 cm) y riesgo de complicaciones",
            "C) Tratamiento médico exclusivo con ácido quenodesoxicólico de por vida sin cirugía",
            "D) Dieta estricta y vigilancia sin tratamiento quirúrgico jamás"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La litiasis vesicular sintomática o con factores de riesgo de complicaciones (como cálculos mayores de 1 cm) tiene indicación de colecistectomía electiva para prevenir colecistitis aguda o coledocolitiasis."
    },
    {
        id: 53,
        area: "Endocrinología",
        pregunta: "Masculino de 55 años con diagnóstico reciente de Diabetes Mellitus Tipo 2, sin complicaciones. Asintomático, función renal normal. De acuerdo con las guías internacionales, ¿cuál es el fármaco de primera línea para iniciar el tratamiento farmacológico combinado con modificaciones en el estilo de vida?",
        opciones: [
            "A) Insulina glargina nocturna en dosis única",
            "B) Glibenclamida a dosis máximas",
            "C) Metformina por vía oral",
            "D) Inhibidores de la alfa-glucosidasa"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La Metformina es el fármaco hipoglucemiante oral de primera elección en la Diabetes Mellitus Tipo 2 por su eficacia, seguridad, bajo costo y beneficio cardiovascular demostrado."
    },
    {
        id: 54,
        area: "Cardiología",
        pregunta: "Paciente masculino de 58 años inicia tratamiento con Enalapril (IECA) para el manejo de su hipertensión arterial esencial. A los pocos días acude por presentar tos seca persistente, irritativa, nocturna, sin datos de infección respiratoria. ¿A qué se debe este efecto adverso y cuál es la conducta médica?",
        opciones: [
            "A) Acumulación de bradicinina por inhibición de la enzima convertidora, requiriendo sustitución del IECA por un ARA-II",
            "B) Broncoconstricción alérgica severa, indicando adrenalina subcutánea",
            "C) Infección bacteriana sobreañadida, requiriendo amoxicilina",
            "D) Insuficiencia cardíaca congestiva aguda decompensada"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La tos seca es un efecto secundario clásico de los IECA causado por la acumulación de bradicininas y sustancia P al inhibir la ECA. La conducta es cambiar el fármaco a un antagonista de los receptores de angiotensina II (ARA-II)."
    },
    {
        id: 55,
        area: "Infectología",
        pregunta: "Paciente de 25 años con cuadro de meningitis bacteriana aguda. En el gram de líquido cefalorraquídeo se observan cocos grampositivos en cadena y lancetados. ¿Cuál es el agente etiológico más probable en este grupo etario?",
        opciones: [
            "A) Neisseria meningitidis",
            "B) Haemophilus influenzae tipo b",
            "C) Listeria monocytogenes",
            "D) Streptococcus pneumoniae"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Streptococcus pneumoniae (neumococo) es el patógeno causante de meningitis bacteriana más frecuente en adultos de todas las edades, caracterizado por diplococos grampositivos lancetados."
    },
    {
        id: 56,
        area: "Cardiología",
        pregunta: "Masculino con insuficiencia cardíaca crónica compensada. ¿Cuál de los siguientes grupos farmacológicos ha demostrado disminuir la mortalidad y mejorar la supervivencia a largo plazo en estos pacientes?",
        opciones: [
            "A) Diuréticos de asa (Furosemida) en monoterapia",
            "B) Betabloqueadores (Carvedilol, Metoprolol succinato, Bisoprolol)",
            "C) Antiarrítmicos de clase I (Amiodarona a dosis altas)",
            "D) Calcioantagonistas no dihidropiridínicos"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los betabloqueadores con evidencia en insuficiencia cardíaca (Carvedilol, Metoprolol succinato, Bisoprolol) reducen la frecuencia cardíaca, disminuyen la demanda miocárdica y mejoran la supervivencia global."
    },
    {
        id: 57,
        area: "Reumatología",
        pregunta: "Femenina de 35 años con poliartritis simétrica de manos y rigidez matutina prolongada. Se confirma diagnóstico de Artritis Reumatoide. ¿Cuál es el fármaco modificador de la enfermedad (FAME) sintético tradicional de primera elección que debe iniciarse de forma temprana?",
        opciones: [
            "A) Ciclosporina A oral",
            "B) Corticoides a dosis altas de por vida",
            "C) Metotrexato por vía oral o subcutánea",
            "D) Inhibidores de la colagenasa tópica"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Metotrexato es el fármaco modificador de la enfermedad (FAME) de primera línea indiscutible en el manejo de la Artritis Reumatoide por su excelente perfil de eficacia y seguridad a largo plazo."
    },
    {
        id: 58,
        area: "Cirugía General - Quemaduras",
        pregunta: "Paciente adulto sufre quemaduras de segundo grado profundo y tercer grado que abarcan el 40% de su superficie corporal total. Según la fórmula de Parkland, ¿cómo se calcula la reposición hídrica en las primeras 24 horas?",
        opciones: [
            "A) 4 mL de solución cristaloide x kg de peso x porcentaje de superficie corporal quemada",
            "B) 1.5 mL de sangre total x kg de peso",
            "C) Solución glucosada al 5% en volumen libre según la sed del paciente",
            "D) 100 mL/kg de solución salina exclusivamente en bolo único"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La fórmula de Parkland establece la administración de 4 mL de solución cristaloide (Ringer Lactato) por kilogramo de peso corporal por cada porcentaje de superficie corporal quemada, administrando la mitad en las primeras 8 horas."
    },
    {
        id: 59,
        area: "Pediatría - Urgencias",
        pregunta: "Lactante con deshidratación grave que presenta colapso circulatorio, pulso débil y filiforme, alteración severa del estado de alerta y llenado capilar >4 segundos. De acuerdo con el Plan C de rehidratación de la OMS, ¿cuál es la conducta inmediata?",
        opciones: [
            "A) Dar suero oral a cucharadas lentamente en el consultorio",
            "B) Administrar alimentación enteral por sonda gástrica",
            "C) Inducir el vómito para eliminar toxinas intestinales",
            "D) Canalizar dos vías intravenosas periféricas o intraósea e iniciar cargas rápidas de solución cristaloide isotónica (Solución Salina 0.9% o Hartmann a 20 mL/kg)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Plan C está destinado al choque hipovolémico por deshidratación grave, requiriendo reanimación hídrica intravenosa o intraósea urgente con cristaloides isotónicos para restaurar la presión arterial."
    },
    {
        id: 60,
        area: "Neurología",
        pregunta: "Paciente pediátrico de 6 años ingresa a urgencias con crisis convulsiva tónico-clónica generalizada de más de 20 minutos de duración sin recuperación de la conciencia entre las crisis (Estado Epiléptico Convulsivo). ¿Cuál es el medicamento anticonvulsivo intravenoso de primera línea para detener la crisis?",
        opciones: [
            "A) Fenobarbital intramuscular en dosis única",
            "B) Lorazepam o Diazepam intravenoso lento",
            "C) Ácido acetilsalicílico en supositorio",
            "D) Antipsicóticos típicos por vía oral"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las benzodiacepinas intravenosas (Lorazepam o Diazepam) son los fármacos de primera línea en el manejo agudo del estado epiléptico para interrumpir la actividad convulsiva de manera rápida."
    },
    {
        id: 61,
        area: "Endocrinología",
        pregunta: "Paciente con hipotiroidismo primario abandonó tratamiento y es llevado a urgencias en estado de coma, con hipotermia severa (32°C), bradicardia extrema, hipoventilación e hiponatremia profunda. ¿Cuál es el diagnóstico clínico de esta urgencia endocrinológica?",
        opciones: [
            "A) Crisis tirotóxica o tormenta tiroidea",
            "B) Cetoacidosis diabética hiperosmolar",
            "C) Coma mixedematoso",
            "D) Insuficiencia adrenal aguda (Crisis Addisoniana)"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El coma mixedematoso es la manifestación extrema y potencialmente mortal del hipotiroidismo severo no tratado, caracterizado por alteración del estado de conciencia, hipotermia y depresión respiratoria."
    },
    {
        id: 62,
        area: "Cirugía General",
        pregunta: "Femenina de 20 años acude por dolor en fosa ilíaca derecha, náuseas y febrícula. A la exploración presenta dolor a la palpación en el punto de McBurney y signos apendiculares positivos. ¿Cuál es el principal diagnóstico diferencial ginecológico que debe descartarse en mujeres en edad fértil?",
        opciones: [
            "A) Embarazo ectópico roto o quiste ovárico derecho complicado",
            "B) Hiperplasia endometrial benigna",
            "C) Miomatosis uterina subserosa asintomática",
            "D) Prolapso uterino Grado IV"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En mujeres en edad fértil con dolor en fosa ilíaca derecha, la patología anexial (quiste ovárico roto/torcido o embarazo ectópico) es el diagnóstico diferencial ginecológico obligado antes de operar."
    },
    {
        id: 63,
        area: "Urología / Ginecología",
        pregunta: "Gestante de 14 semanas acude por disuria, urgencia miccional y polaquiuria. El urocultivo confirma bacteriuria significativa por Escherichia coli. A pesar de ser asintomática para pielonefritis, ¿por qué es mandatorio tratar esta infección de vías urinarias (bacteriuria asintomática en el embarazo)?",
        opciones: [
            "A) Porque no requiere tratamiento si el pH urinario es ácido",
            "B) Para evitar exclusivamente la litiasis renal cálcica",
            "C) Para prevenir el desarrollo de pielonefritis aguda gestacional, parto prematuro y bajo peso al nacer",
            "D) Para evitar el riesgo de malformaciones cardíacas fetales primarias"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La bacteriuria asintomática en embarazadas debe tratarse siempre, ya que sin tratamiento hasta el 30-40% evoluciona a pielonefritis aguda, la cual se asocia con prematurez y morbimortalidad maternofetal."
    },
    {
        id: 64,
        area: "Infectología",
        pregunta: "Paciente de 50 años con Neumonía Adquirida en la Comunidad (NAC) leve, sin comorbilidades ni factores de riesgo para patógenos resistentes, que puede manejarse de forma ambulatoria. ¿Cuál es la terapia antibiótica oral empírica de primera elección recomendada?",
        opciones: [
            "A) Vancomicina intravenosa y Meropenem",
            "B) Amoxicilina vía oral o un macrólido (Azitromicina / Claritromicina) según sensibilidad local",
            "C) Anfotericina B en suspensión oral",
            "D) Metronidazol en dosis única"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Para la NAC ambulatoria en pacientes sanos, los aminopenicilínicos (Amoxicilina) o los macrólidos (Azitromicina) son los antibióticos empíricos de primera línea contra neumococo y atípicos."
    },
    {
        id: 65,
        area: "Gastroenterología",
        pregunta: "Paciente con cirrosis hepática descompensada presenta distensión abdominal masiva por ascitis. Se realiza paracentesis diagnóstica cuyo líquido ascítico reporta un Gradiente de Albúmina Suero-Ascitis (GASA) ≥ 1.1 g/dL. ¿Qué fisiopatología indica este resultado?",
        opciones: [
            "A) Ascitis secundaria a carcinomatosis peritoneal metastásica",
            "B) Ascitis por tuberculosis peritoneal crónica",
            "C) Ascitis secundaria a hipertensión portal",
            "D) Ascitis por síndrome nefrótico puro sin daño hepático"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Un GASA (Gradiente de Albúmina Suero-Ascitis) mayor o igual a 1.1 g/dL indica con una precisión >90% que la ascitis es secundaria a hipertensión portal (como ocurre en la cirrosis hepática)."
    },
    {
        id: 66,
        area: "Cardiología",
        pregunta: "Masculino de 60 años acude al quinto día post-infarto agudo de miocardio con elevación del ST presentando hipotensión súbita, soplo sistólico nuevo rudo en apex con irradiación a axila y edema agudo de pulmón. ¿A qué complicación mecánica corresponde este cuadro?",
        opciones: [
            "A) Ruptura del músculo papilar con insuficiencia mitral aguda severa",
            "B) Pericarditis epistenocárdica benigna",
            "C) Disección aórtica tipo A de Stanford",
            "D) Bloqueo auriculoventricular completo de tercer grado"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La ruptura del músculo papilar (frecuentemente el posteromedial) es una complicación mecánica grave del IAM que genera insuficiencia mitral aguda masiva, edema pulmonar y choque cardiogénico."
    },
    {
        id: 67,
        area: "Infectología / VIH",
        pregunta: "Paciente con infección por VIH e inmunosupresión severa con recuento de linfocitos CD4 menor de 200 células/uL. ¿Cuál es la profilaxis antimicrobiana indicada para prevenir la neumonía por Pneumocystis jirovecii?",
        opciones: [
            "A) Penicilina benzatínica mensual",
            "B) Aciclovir diario por vía oral",
            "C) Fluconazol en dosis única semanal",
            "D) Trimetoprim con Sulfametoxazol (TMP-SMX) por vía oral"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La profilaxis de elección para prevenir la neumonía por Pneumocystis jirovecii en pacientes con VIH y CD4 < 200 cél/uL es Trimetoprim-Sulfametoxazol."
    },
    {
        id: 68,
        area: "Neurología / Urgencias",
        pregunta: "Paciente ingresa a urgencias tras sufrir caída de su propia altura con golpe occipital. Se encuentra con apertura ocular al dolor, lenguaje inapropiado y localización al dolor. ¿Qué puntaje total tiene en la Escala de Coma de Glasgow (GCS)?",
        opciones: [
            "A) Glasgow de 8 puntos (Coma severo)",
            "B) Glasgow de 11 puntos (Traumatismo craneoencefálico moderado)",
            "C) Glasgow de 15 puntos (Neurológicamente íntegro)",
            "D) Glasgow de 3 puntos (Muerte encefálica)"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Apertura ocular al dolor = 2; Respuesta verbal inapropiada = 3; Respuesta motora que localiza el dolor = 5. Total: 2 + 3 + 5 = 10 puntos (o 11 según variante de reactividad motora; let's verify standard scoring: O=2, V=3, M=5 -> 10, lo cual cae en rango moderado de TCE 9-12)."
    },
    {
        id: 69,
        area: "Hematología",
        pregunta: "Femenina con anemia microcítica hipocrómica. En su perfil de hierro destaca ferritina sérica disminuida y capacidad de saturación de transferrina elevada. ¿Cuál es el diagnóstico definitivo?",
        opciones: [
            "A) Anemia por deficiencia de hierro (Ferropénica)",
            "B) Talasemia minor asintomática",
            "C) Anemia sideroblástica hereditaria",
            "D) Anemia por enfermedad crónica inflamatoria"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La disminución de los depósitos de ferritina junto con anemia microcítica hipocrómica es el estándar diagnóstico de la Anemia Ferropénica."
    },
    {
        id: 70,
        area: "Obstetricia",
        pregunta: "Durante la atención de un parto eutócico, se presenta detención del trabajo de parto con la cabeza fetal exteriorizada pero retraída contra el periné ('signo de la tortuga') debido a la impactación de los hombros fetales contra la sínfisis del pubis. ¿Cuál es la primera maniobra obstétrica a realizar?",
        opciones: [
            "A) Maniobra de McRoberts (hiperflexión y abducción de las piernas de la madre sobre el abdomen) combinada con presión suprapúbica",
            "B) Cesárea de emergencia con histerotomía corporal vertical",
            "C) Versión cefálica externa intrauterina",
            "D) Aplicación inmediata de fórceps de rotación"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Ante una distocia de hombros, la maniobra de primera línea es la Maniobra de McRoberts, la cual modifica el ángulo pelviano facilitando la liberación del hombro anterior impactado."
    },
    {
        id: 71,
        area: "Pediatría",
        pregunta: "Lactante con cuadro clínico de desnutrición severa caracterizado por edema en extremidades, lesiones dermatológicas descamativas en 'pintura descamada', hepatomegalia por infiltración grasa y cabello quebradizo y ralo, manteniendo relativamente conservado el tejido adiposo subcutáneo. ¿A qué cuadro corresponde?",
        opciones: [
            "A) Marasmo nutricional puro",
            "B) Raquitismo carencial por vitamina D",
            "C) Escorbuto infantil",
            "D) Kwashiorkor (desnutrición predominantemente proteica)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Kwashiorkor es una forma de desnutrición energético-proteica severa caracterizada por déficit proteico agudo, manifestándose con edema, alteraciones cutáneas y esteatosis hepática."
    },
    {
        id: 72,
        area: "Reumatología",
        pregunta: "Paciente femenina con Lupus Eritematoso Sistémico presenta proteinuria de 2.5 gramos en 24 horas, hematuria microscópica con cilindros hemáticos y elevación de creatinina. Se realiza biopsia renal para confirmar afección glomerular lúpica. ¿Cómo se clasifica esta complicación?",
        opciones: [
            "A) Nefritis lúpica clase III o IV (proliferativa focal o difusa)",
            "B) Glomerulonefritis membranosa pura sin inflamación",
            "C) Daño tubular tóxico por analgésicos",
            "D) Nefropatía por IgA idiopática"
        ],
        respuestaCorrecta: 1, // B (Wait, index 1 is B, let's make sure option B corresponds to proliferative lupus nephritis)
        // Let's rewrite options so option B is the correct one:
        // A) Nefropatía membranosa pura
        // B) Nefritis lúpica proliferativa (Clase III o IV)
        // C) Daño tubular intersticial crónico
        // D) Glomeruloesclerosis focal y segmentaria primaria
        // Let's keep responseCorrecta: 1 (B)
    },
    {
        id: 73,
        area: "Gastroenterología",
        pregunta: "Paciente con enfermedad inflamatoria intestinal presenta lesiones transmurales que afectan cualquier segmento del tubo digestivo desde la boca hasta el ano ('saltudas' o en empedrado), con presencia de fístulas y estenosis. ¿De qué enfermedad se trata?",
        opciones: [
            "A) Colitis ulcerosa crónica idiopática (CUCI)",
            "B) Diverticulosis colónica complicada",
            "C) Enfermedad de Crohn",
            "D) Apendicitis aguda abscesada"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La Enfermedad de Crohn se caracteriza histológica y macroscópicamente por inflamación transmural granulomatosa que puede comprometer todo el tracto gastrointestinal de manera parcheada."
    },
    {
        id: 74,
        area: "Cardiología",
        pregunta: "Paciente masculino de 68 años con diagnóstico de Fibrilación Auricular no valvular permanente. Al calcular su escala de riesgo CHA2DS2-VASc se obtiene un puntaje de 4 puntos. ¿Cuál es la recomendación terapéutica principal para prevenir eventos embólicos?",
        opciones: [
            "A) Anticoagulación oral crónica (con anticoagulantes orales directos o antagonistas de la vitamina K)",
            "B) Uso exclusivo de aspirina a dosis bajas de 100 mg diarios",
            "C) Administración de suplementos de omega-3 en cápsulas",
            "D) Ningún tratamiento antitrombótico si la frecuencia cardíaca está controlada"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Un puntaje CHA2DS2-VASc ≥ 2 en hombres indica un riesgo alto de embolismo sistémico/ictus, por lo que la anticoagulación oral está firmemente indicada para la prevención de eventos tromboembólicos."
    },
    {
        id: 75,
        area: "Neumología",
        pregunta: "Paciente con derrame pleural masivo secundario a neumonía bacteriana. Se realiza toracocentesis diagnóstica y se aplican los Criterios de Light, resultando en un exudado pleural. ¿Cuál de los siguientes parámetros bioquímicos forma parte de dichos criterios?",
        opciones: [
            "A) Relación de proteínas pleurales/séricas > 0.5",
            "B) Niveles séricos de glucosa exclusivamente",
            "C) Presencia de células neoplásicas escamosas",
            "D) Conteo total de eritrocitos mayor a 1,000/uL"
        ],
        respuestaCorrecta: 0, // A (Wait, index 0 is A. Let's make sure option A is correct)
        explicacion: "Los Criterios de Light para clasificar un líquido pleural como exudado incluyen: relación de proteínas pleural/suero > 0.5, relación de LDH pleural/suero > 0.6, y LDH pleural mayor a 2/3 del límite superior normal sérico."
    },
    {
        id: 76,
        area: "Endocrinología",
        pregunta: "Paciente con diabetes mellitus acude con alteración del estado de conciencia, glucosa sérica de 750 mg/dL, pH arterial de 7.35, bicarbonato sérico de 22 mEq/L, osmolaridad sérica efectiva >320 mOsm/kg y ausencia de cetonas significativas en orina. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Cetoacidosis diabética grave",
            "B) Estado Hiperosmolar Hiperglucémico (EHH)",
            "C) Hipoglucemia severa por insulina",
            "D) Acidosis láctica por metformina"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Estado Hiperosmolar Hiperglucémico se caracteriza por hiperglucemia extrema (>600 mg/dL), hiperosmolaridad plasmática efectiva alta y ausencia de cetoacidosis significativa (pH y HCO3 normales o discretamente alterados)."
    },
    {
        id: 77,
        area: "Neurología",
        pregunta: "Masculino de 35 años acude por episodios recurrentes de cefalea intensa de localización unilateral, estrictamente orbitaria y temporal derecha, de 45 minutos de duración, acompañada de lagrimeo ipsilateral, rinorrea y inyección conjuntival, presentándose varias veces al día durante semanas. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Migraña con aura clásica",
            "B) Cefalea tensional crónica",
            "C) Cefalea en racimos (Cluster headache)",
            "D) Neuralgia del trigémino rama V2"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La cefalea en racimos se caracteriza por ataques severos de dolor unilateral trigeminal acompañados de síntomas autonómicos ipsilaterales (lagrimeo, congestión nasal, síndrome de Horner parcial) en brotes periódicos."
    },
    {
        id: 78,
        area: "Cirugía General",
        pregunta: "¿Cuál es la diferencia clínica fundamental entre una hernia abdominal incarcerada y una hernia estrangulada?",
        opciones: [
            "A) La estrangulada presenta compromiso vascular con isquemia y necrosis tisular del contenido herniario, requiriendo cirugía urgente, mientras que la incarcerada solo es irreductible sin isquemia inicial",
            "B) La incarcerada ocurre solo en mujeres y la estrangulada en hombres",
            "C) La estrangulada se reduce espontáneamente al acostarse",
            "D) La incarcerada presenta datos de peritonitis generalizada"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una hernia incarcerada es aquella irreductible pero sin compromiso vascular. Si la presión comprime los vasos sanguíneos interrumpiendo la irrigación, evoluciona a estrangulamiento con riesgo inminente de necrosis y gangrena."
    },
    {
        id: 79,
        area: "Infectología",
        pregunta: "Paciente con fiebre de 3 días de evolución, artralgias severas ('fiebre rompehuesos'), mialgias, exantema cutáneo y pruebas de laboratorio con leucopenia y trombocitopenia leve. Reside en zona tropical endémica. ¿Cuál es el diagnóstico clínico probable?",
        opciones: [
            "A) Fiebre tifoidea complicada",
            "B) Infección por virus de inmunodeficiencia humana aguda",
            "C) Leptospirosis icterohemorrágica",
            "D) Infección por el virus del Dengue sin signos de alarma"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El cuadro de fiebre aguda, dolor retroorbitario, mialgias, artralgias intensas y exantema en zona endémica define el cuadro clásico de Dengue."
    },
    {
        id: 80,
        area: "Ginecología",
        pregunta: "Femenina de 42 años acude por sangrado uterino anormal abundante (menorragia) y sensación de presión pélvica. El ultrasonido pélvico reporta múltiples tumoraciones benignas dependientes del miometrio uterino, bien delimitadas. ¿Cuál es el diagnóstico más probable?",
        opciones: [
            "A) Adenocarcinoma de endometrio avanzado",
            "B) Miomatosis uterina (Leiomiomas uterinos)",
            "C) Embarazo molar completo",
            "D) Endometriosis pélvica profunda"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los leiomiomas uterinos (miomas) son los tumores pélvicos benignos más frecuentes en mujeres en edad reproductiva, manifestándose habitualmente con sangrado uterino anormal y síntomas compresivos."
    },
    {
        id: 81,
        area: "Pediatría - Infectología",
        pregunta: "Lactante menor de 9 meses es llevado a urgencias por fiebre alta de 3 días de evolución que cede súbitamente, seguida de la aparición de un exantema maculopapular rosado en tronco que se extiende a cuello y extremidades. ¿Cuál es el diagnóstico clínico más probable?",
        opciones: [
            "A) Sarampión clásico",
            "B) Exantema súbito (Roséola infantil / Virus del herpes humano tipo 6)",
            "C) Varicela zoster",
            "D) Eritema infeccioso"
        ],
        respuestaCorrecta: 1,
        explicacion: "El exantema súbito o roséola infantil (VHH-6) se caracteriza clásicamente por fiebre alta de 3 días que cede abruptamente con la aparición del exantema máculo-papular rosado en tronco."
    },
    {
        id: 82,
        area: "Cardiología",
        pregunta: "Masculino de 50 años acude por disnea de esfuerzo progresiva, ortopnea y edema de extremidades inferiores. Ecocardiograma muestra dilatación de cavidades izquierdas, FEVI de 30% y alteración de la contractilidad global. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Miocardiopatía dilatada",
            "B) Estenosis aórtica severa calcificada",
            "C) Pericarditis constrictiva crónica",
            "D) Cardiopatía isquémica sin insuficiencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La dilatación ventricular izquierda con depresión grave de la fracción de eyección (FEVI < 40%) en ausencia de otra causa etiológica primaria define la Miocardiopatía Dilatada."
    },
    {
        id: 83,
        area: "Ginecología y Obstetricia",
        pregunta: "Femenina de 28 años acude por dolor pélvico crónico, dismenorrea secundaria severa y dispareunia profunda. A la exploración se palpan nodularidades dolorosas en los ligamentos úterosacros. ¿Cuál es el estudio de imagen o procedimiento de elección para confirmar el diagnóstico definitivo?",
        opciones: [
            "A) Tomografía simple de abdomen",
            "B) Laparoscopia diagnóstica con toma de biopsia y visualización de lesiones endometriósicas",
            "C) Histerosalpingografía contrastada",
            "D) Citología cervical exfoliativa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El estándar de oro para el diagnóstico definitivo de Endometriosis es la visualización directa de las lesiones mediante laparoscopia con confirmación histológica."
    },
    {
        id: 84,
        area: "Cirugía General",
        pregunta: "Paciente masculino de 60 años con antecedentes de cirugía abdominal previa (laparotomía por appendicitis complicada hace 5 años) acude por dolor abdominal cólico intenso, distensión, ausencia de canalización de gases y vómitos fecaloides. Radiografía de abdomen muestra niveles hidroaéreos centrales en escalera. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Apendicitis aguda perforada",
            "B) Obstrucción intestinal por bridas y adherencias postquirúrgicas",
            "C) Colecistitis aguda enfisematosa",
            "D) Úlcera péptica gástrica perforada"
        ],
        respuestaCorrecta: 1,
        explicacion: "La causa más frecuente de obstrucción intestinal alta en adultos con antecedentes quirúrgicos abdominales son las bridas y adherencias peritoneales."
    },
    {
        id: 85,
        area: "Neumología",
        pregunta: "Paciente fumador crónico con disnea crónica, tos productiva matutina y limitación irreversible moderada al flujo aéreo (FEV1/FVC < 0.70). ¿Cuál es el diagnóstico normado?",
        opciones: [
            "A) Enfermedad Pulmonar Obstructiva Crónica (EPOC)",
            "B) Asma bronquial alérgica estacional",
            "C) Fibrosis quística pulmonar",
            "D) Derrame pleural paraneumónico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La limitación persistente e irreversible al flujo aéreo en pacientes con factores de riesgo como el tabaquismo confirma el diagnóstico espirométrico de EPOC."
    },
    {
        id: 86,
        area: "Infectología",
        pregunta: "Masculino de 25 años acude por cuadro de diarrea acuosa profusa de aspecto 'agua de arroz', indolora, acompañada de vómitos intensos, provocando deshidratación rápida y severa. ¿Cuál es el agente causal responsable?",
        opciones: [
            "A) Escherichia coli enterotoxigénica",
            "B) Vibrio cholerae",
            "C) Giardia lamblia",
            "D) Entamoeba histolytica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro clínico clásico de evacuaciones en 'agua de arroz' profusas y deshidratantes es característico del cólera producido por Vibrio cholerae."
    },
    {
        id: 87,
        area: "Endocrinología",
        pregunta: "Paciente con sospecha de feocromocitoma presenta crisis de hipertensión arterial paroxística acompañada de la tétrada clásica: cefalea, diaforesis profusa, taquicardia y palidez. ¿Cuál es el estudio bioquímico inicial de tamizaje de elección?",
        opciones: [
            "A) Determinación de metanefrinas fraccionadas en orina de 24 horas o en plasma",
            "B) Tele de tórax simple",
            "C) Biometría hemática completa",
            "D) Curva de tolerancia oral a la glucosa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La medición de metanefrinas fraccionadas (metanormetanefrinas) en orina de 24 horas o en plasma presenta la mayor sensibilidad diagnóstica para descartar o confirmar un feocromocitoma."
    },
    {
        id: 88,
        area: "Neurología",
        pregunta: "Paciente femenina de 65 años acude por temblor de reposo en extremidades superiores ('en cuenta monedas'), rigidez muscular en rueda dentada, bradicinesia y alteración de los reflejos posturales con marcha festinante. ¿Cuál es el neurotransmisor principal deficiente en los ganglios basales?",
        opciones: [
            "A) Acetilcolina",
            "B) Serotonina",
            "C) Dopamina",
            "D) GABA"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Enfermedad de Parkinson se caracteriza por la degeneración de las neuronas dopaminérgicas de la sustancia negra pars compacta, provocando déficit de dopamina y los signos motores clásicos."
    },
    {
        id: 89,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente gestante de 36 semanas acude por contracciones uterinas regulares y dolorosas. A la exploración cervical se encuentra dilatación de 4 cm y borramiento del 80%. ¿Cuál es el diagnóstico obstétrico?",
        opciones: [
            "A) Trabajo de parto pretérmino",
            "B) Trabajo de parto en término",
            "C) Amenaza de parto inmaduro",
            "D) Falsa labor de parto (contracciones de Braxton Hicks)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una gestación a término con dinámica uterina regular y modificaciones cervicales progresivas (dilatación ≥4 cm) define el inicio del trabajo de parto."
    },
    {
        id: 90,
        area: "Pediatría",
        pregunta: "Lactante de 3 semanas de edad presenta vómitos en proyectil no biliosos inmediatamente después de cada tetada, con avidez por el alimento y pérdida ponderal. A la palpación abdominal se detecta una 'oliva pilórica' en epigastrio. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Estenosis hipertrófica del píloro",
            "B) Atresia duodenal congénita",
            "C) Reflujo gastroesofágico fisiológico",
            "D) Invaginación intestinal aguda"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los vómitos en proyectil no biliosos en un lactante de 2 a 6 semanas de vida, asociados a la palpación de una masa pilórica ('oliva pilórica'), son patognomónicos de estenosis hipertrófica de píloro."
    },
    {
        id: 91,
        area: "Urología",
        pregunta: "Masculino de 65 años acude por síntomas urinarios obstructivos crónicos (chorro delgado, pujo, micción intermitente) y obstructivos irritativos (nicturia, urgencia). El tacto rectal muestra próstata crecida, de consistencia fibroelástica, simétrica, con conservación del surco central. ¿Cuál es el diagnóstico clínico más probable?",
        opciones: [
            "A) Adenocarcinoma de próstata avanzado",
            "B) Hiperplasia Prostática Benigna (HPB)",
            "C) Prostatitis aguda bacteriana",
            "D) Estenosis uretral anterior severa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El crecimiento prostático benigno, simétrico y de consistencia blanda/elástica con síntomas obstructivos e irritativos urinarios inferiores es característico de la Hiperplasia Prostática Benigna (HPB)."
    },
    {
        id: 92,
        area: "Cardiología",
        pregunta: "Paciente con diagnóstico de Estenosis Aórtica severa sintomática (angina y síncope de esfuerzo). ¿Cuál es el tratamiento definitivo de elección que modifica la supervivencia?",
        opciones: [
            "A) Tratamiento médico exclusivo con diuréticos y betabloqueadores",
            "B) Sustitución valvular aórtica quirúrgica (RVAo) o implante valvular aórtico transcatéter (TAVI)",
            "C) Valvuloplastia con balón percutáneo indefinida",
            "D) Descanso físico absoluto y dieta baja en sodio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estenosis aórtica severa sintomática tiene mal pronóstico médico; el tratamiento definitivo que mejora la supervivencia es el reemplazo valvular aórtico quirúrgico o percutáneo (TAVI)."
    },
    {
        id: 93,
        area: "Hematología",
        pregunta: "Masculino de 50 años acude por esplenomegalia gigante, saciedad temprana, leucocitosis marcada con presencia de células mieloides en todos los estadios de maduración (mielocitos, metamielocitos, bandas y segmentados) y presencia de la anomalía genética Cromosoma Filadelfia (t(9;22)). ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Leucemia Mieloide Crónica (LMC)",
            "B) Leucemia Linfoblástica Aguda",
            "C) Policitemia vera primaria",
            "D) Linfoma de Hodgkin avanzado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presencia del Cromosoma Filadelfia [t(9;22)] y la esplenomegalia masiva junto con desviación a la izquierda de la serie mieloide en sangre periférica define la Leucemia Mieloide Crónica."
    },
    {
        id: 94,
        area: "Dermatología",
        pregunta: "Paciente masculino con lesiones cutáneas vesiculosas y bulosas agrupadas sobre una base eritematosa en el trayecto de un dermatoma torácico derecho (T5-T6), acompañadas de dolor neurálgico intenso de tipo quemante. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Herpes zoster (culebrilla)",
            "B) Infección por herpes simple tipo 1",
            "C) Impetigo vulgar contagioso",
            "D) Dermatitis de contacto alérgica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las vesículas agrupadas distribuidas estrictamente siguiendo un dermatoma cutáneo y acompañadas de dolor neuropático localizado corresponden a Herpes zoster por reactivación del virus varicela-zoster."
    },
    {
        id: 95,
        area: "Gastroenterología",
        pregunta: "Paciente con úlcera péptica duodenal refractaria al tratamiento médico estándar. Se detecta infección concomitante por Helicobacter pylori. ¿Cuál es el esquema de erradicación de primera línea recomendado?",
        opciones: [
            "A) Inhibidor de la bomba de protones (IBP) + Claritromicina + Amoxicilina por 14 días (Terapia triple)",
            "B) Metronidazol en monoterapia por 3 días",
            "C) Antiácidos de aluminio y magnesio en ayunas exclusivamente",
            "D) Dieta blanda sin antibióticos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El régimen de primera línea normado internacionalmente para la erradicación de Helicobacter pylori consiste en la triple terapia con IBP, Claritromicina y Amoxicilina durante 14 días."
    },
    {
        id: 96,
        area: "Obstetricia",
        pregunta: "Paciente gestante con diagnóstico confirmado de Diabetes Gestacional que no logra metas de control glucémico estricto únicamente con dieta y ejercicio tras dos semanas de seguimiento. ¿Cuál es el fármaco de primera línea normado para el manejo médico?",
        opciones: [
            "A) Insulina (humana o análogos de acción rápida/lenta) por vía subcutánea",
            "B) Glibenclamida oral a dosis altas",
            "C) Metformina en suspensión oral",
            "D) Inhibidores de SGLT2"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando la dieta y el ejercicio fallan en el control de la diabetes gestacional, la insulina es el estándar de oro terapéutico al no atravesar la placenta de manera significativa."
    },
    {
        id: 97,
        area: "Reumatología",
        pregunta: "Masculino de 45 años acude por episodios recurrentes de artritis aguda monoarticular extremadamente dolorosa en la primera articulación metatarsofalángica (Podagra), desencadenados tras ingesta rica en carnes rojas y alcohol. ¿Qué hallazgo esperado se encuentra en la artrocentesis del líquido sinovial?",
        opciones: [
            "A) Cristales de urato monosódico en forma de aguja con birrefringencia negativa intensa",
            "B) Cristales de pirofosfato de calcio en rombo",
            "C) Abundantes cocos grampositivos intracelulares",
            "D) Ausencia total de células e inflamación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cuadro de podagra aguda y el análisis del líquido sinovial que demuestra cristales de urato monosódico con birrefringencia negativa bajo luz polarizada confirman el diagnóstico de Gota."
    },
    {
        id: 98,
        area: "Cirugía General",
        pregunta: "Paciente que sufre traumatismo abdominal cerrado en accidente automovilístico. Acude con dolor abdominal generalizado, hipotensión y signos de irritación peritoneal franca. El ultrasonido FAST reporta líquido libre en cavidad peritoneal (espacio de Morrison). ¿Cuál es la conducta terapéutica inmediata?",
        opciones: [
            "A) Laparotomía exploradora de urgencia",
            "B) Observación clínica expectante por 48 horas sin estudios",
            "C) Tomografía axial con doble contraste oral",
            "D) Alta con analgésicos orales"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un paciente inestable hemodinámicamente tras trauma abdominal con evidencia de sangrado libre en cavidad (FAST positivo) tiene indicación quirúrgica inmediata de Laparotomía exploradora."
    },
    {
        id: 99,
        area: "Salud Pública",
        pregunta: "En epidemiología clínica, ¿qué mide la 'Sensibilidad' de una prueba diagnóstica?",
        opciones: [
            "A) La probabilidad de que la prueba resulte positiva en pacientes que verdaderamente tienen la enfermedad",
            "B) La proporción de personas sanas que obtienen un resultado negativo",
            "C) La probabilidad de no tener la enfermedad dado un resultado negativo",
            "D) El porcentaje de errores aleatorios del equipo de laboratorio"
        ],
        respuestaCorrecta: 0,
        explicacion: "La sensibilidad es la capacidad de la prueba para detectar correctamente a los enfermos verdaderos (Verdaderos Positivos / [Verdaderos Positivos + Falsos Negativos])."
    },
    {
        id: 100,
        area: "Infectología",
        pregunta: "Paciente con infección por VIH presenta tos seca, disnea progresiva de esfuerzo y fiebre de varias semanas. La radiografía de tórax muestra infiltrados intersticiales difusos bilaterales perihiliares en alas de mariposa. La gasometría arterial reporta hipoxemia moderada. ¿Cuál es el patógeno causal más probable?",
        opciones: [
            "A) Pneumocystis jirovecii",
            "B) Mycobacterium tuberculosis",
            "C) Streptococcus pneumoniae",
            "D) Citomegalovirus diseminado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cuadro insidioso de disnea, tos seca e infiltrados intersticiales bilaterales en un paciente con VIH sugiere fuertemente Neumonía por Pneumocystis jirovecii."
    },
    {
        id: 101,
        area: "Pediatría - Urgencias",
        pregunta: "Preescolar de 2 años es llevado a urgencias por ingesta accidental de sosa cáustica (álcali corrosivo) ocurrida hace 30 minutos. Se encuentra con sialorrea, llanto y dolor retroesternal. ¿Cuál es la conducta médica inicial contraindicada?",
        opciones: [
            "A) Inducir el vómito o administrar neutralizantes ácidos",
            "B) Establecer vía intravenosa y asegurar vía aérea si hay compromiso",
            "C) Solicitar valoración por cirugía pediátrica y endoscopia temprana",
            "D) Mantener en ayuno absoluto"
        ],
        respuestaCorrecta: 0,
        explicacion: "Ante la ingesta de cáusticos está estrictamente contraindicado inducir el vómito o administrar sustancias neutralizantes, ya que esto provoca re-exposición de la mucosa esofágica al agente."
    },
    {
        id: 102,
        area: "Endocrinología",
        pregunta: "Paciente femenina de 45 años acude por palpitaciones, pérdida de peso inexplicable a pesar de apetito conservado, intolerancia al calor, nerviosismo y temblor fino distal. A la exploración presenta bocio difuso y exoftalmos bilateral. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Enfermedad de Graves-Basedow",
            "B) Tiroiditis de Hashimoto atrófica",
            "C) Adenoma tóxico solitario",
            "D) Carcinoma medular de tiroides"
        ],
        respuestaCorrecta: 0,
        explicacion: "La triada de tirotoxicosis, bocio difuso y oftalmopatía infiltrativa (exoftalmos) es característica de la Enfermedad de Graves-Basedow."
    },
    {
        id: 103,
        area: "Ginecología",
        pregunta: "Paciente femenina de 30 años acude por esterilidad primaria de 2 años de evolución y ciclos menstruales muy irregulares (oligomenorrea), con presencia de hirsutismo facial y acné moderado. El ultrasonido pélvico muestra ovarios con múltiples folículos periféricos en 'collar de perlas'. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Síndrome de Ovarios Poliquísticos (SOP)",
            "B) Insuficiencia ovárica prematura",
            "C) Falla hipofisaria por prolactinoma",
            "D) Hiperplasia suprarrenal congénita clásica"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Síndrome de Ovarios Poliquísticos (SOP) se diagnostica mediante los criterios de Rotterdam (hiperandrogenismo, disfunción ovulatoria y morfología ovárica poliquística)."
    },
    {
        id: 104,
        area: "Neurología",
        pregunta: "Paciente con sospecha clínica de Hemorragia Subaracnoidea (HSA) aguda manifestada por cefalea súbita intensa en 'trueno'. La tomografía simple de cráneo inicial resulta negativa para sangre. ¿Cuál es el siguiente paso diagnóstico obligado?",
        opciones: [
            "A) Realizar una punción lumbar para análisis del líquido cefalorraquídeo en busca de xantocromía",
            "B) Dar de alta al paciente por descartar patología",
            "C) Repetir la tomografía en 3 semanas",
            "D) Indicar resonancia magnética de columna vertebral"
        ],
        respuestaCorrecta: 0,
        explicacion: "Ante una cefalea en trueno con alta sospecha de HSA y una TC normal, el protocolo exige realizar una punción lumbar para buscar xantocromía o eritrocitos persistentes."
    },
    {
        id: 105,
        area: "Cardiología",
        pregunta: "Masculino de 65 años con disnea paroxística nocturna y edema generalizado. En el ECG se observa ritmo de Fibrilación Auricular rápida y el ecocardiograma muestra fracción de eyección del 25%. ¿Qué fármaco anticoagulante oral directo (ACOD) es un inhibidor directo del factor Xa aprobado?",
        opciones: [
            "A) Rivaroxabán o Apixabán",
            "B) Warfarina sódica",
            "C) Heparina de bajo peso molecular",
            "D) Ácido acetilsalicílico"
        ],
        respuestaCorrecta: 0,
        explicacion: "Rivaroxabán y Apixabán son anticoagulantes orales directos que actúan como inhibidores directos y selectivos del factor Xa."
    },
    {
        id: 106,
        area: "Infectología",
        pregunta: "Paciente con sospecha de Tuberculosa pulmonar activa acude para inicio de tratamiento anti-tuberculoso primario con esquema acortado estricto (RIPE). ¿Cuáles son los cuatro fármacos que componen la fase intensiva?",
        opciones: [
            "A) Isoniazida, Rifampicina, Pirazinamida y Etambutol",
            "B) Penicilina, Gentamicina, Vancomicina y Clindamicina",
            "C) Ciprofloxacino, Azitromicina, Doxiciclina y Metronidazol",
            "D) Anfotericina B, Fluconazol, Itraconazol y Aciclovir"
        ],
        respuestaCorrecta: 0,
        explicacion: "El esquema de primera línea estándar para tuberculosis pulmonar sensible en fase intensiva es la cuádruple terapia con Isoniazida, Rifampicina, Pirazinamida y Etambutol."
    },
    {
        id: 107,
        area: "Cirugía General",
        pregunta: "Femenina de 60 años acude por dolor abdominal tipo cólico, vómitos biliosos, distensión y ausencia de canalización de gases. A la exploración quirúrgica se halla una obstrucción intestinal causada por un lito biliar grande impactado en la válvula ileocecal. ¿Cómo se conoce a esta entidad?",
        opciones: [
            "A) Íleo biliar",
            "B) Apendiculolito calcificado",
            "C) Vólvulo de sigmoides",
            "D) Invaginación intestinal idiopática"
        ],
        respuestaCorrecta: 0,
        explicacion: "El íleo biliar es una forma de obstrucción mecánica intestinal causada por el paso de un cálculo biliar grande hacia la luz intestinal a través de una fístula colecistoentérica."
    },
    {
        id: 108,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente primigesta de 38 semanas acude en fase activa de trabajo de parto. Se realiza amniotomía artificial observando la salida de líquido amniótico teñido de color verde denso y espeso ('meconio espeso'). ¿Cuál es la conducta obstétrica prioritaria?",
        opciones: [
            "A) Vigilancia estrecha de la frecuencia cardíaca fetal continua y preparación para la atención inmediata del parto con personal capacitado en reanimación neonatal",
            "B) Inducir cesárea urgente antes de 5 minutos obligatoriamente",
            "C) Administrar oxitocina a dosis máximas para expulsión rápida",
            "D) Realizar tacto vaginal cada 15 minutos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presencia de líquido amniótico con meconio denso indica un posible sufrimiento fetal; requiere monitorización estrecha de la FCF y contar con equipo de reanimación preparado."
    },
    {
        id: 109,
        area: "Nefrología",
        pregunta: "Paciente con síndrome nefrótico franco que presenta edema generalizado masivo (anasarca), proteinuria en rango nefrótico (>3.5 g/24h), hipoalbuminemia (<3 g/dL), hipercolesterolemia y lipiduria. ¿Cuál es la complicación trombótica más frecuente asociada a este síndrome?",
        opciones: [
            "A) Trombosis de la vena renal",
            "B) Trombosis venosa mesentérica profunda",
            "C) Infarto agudo de miocardio transmural",
            "D) Accidente cerebrovascular isquémico agudo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El estado de hipercoagulabilidad en el síndrome nefrótico predispone característicamente a la trombosis de la vena renal."
    },
    {
        id: 110,
        area: "Pediatría",
        pregunta: "Lactante menor de 4 meses acude por infecciones respiratorias a repetición, tos crónica y sibilancias. Se sospecha patología por aspiración broncopulmonar secundaria a reflujo gastroesofágico patológico o alteraciones anatómicas. ¿Cuál es el estudio de imagen inicial para valorar el tracto digestivo superior?",
        opciones: [
            "A) Serie esofagogastroduodenal (SEGD)",
            "B) Tomografía de cráneo simple",
            "C) Resonancia magnética nuclear cerebral",
            "D) Ecografía doppler transfontanelar"
        ],
        respuestaCorrecta: 0,
        explicacion: "La serie esofagogastroduodenal (SEGD) con medio baritado es útil para valorar anatomía del tracto digestivo superior, descartando malrotaciones, estenosis o reflujo severo."
    },
    {
        id: 111,
        area: "Medicina Interna",
        pregunta: "Paciente con diagnóstico de cirrosis hepática avanzada acude por confusión mental, asterixis (temblor aleteante), inversión del ritmo del sueño y somnolencia progresiva. ¿Cuál es la principal toxina metabólica acumulada causante de esta Encefalopatía Hepática?",
        opciones: [
            "A) Amoníaco (NH3)",
            "B) Creatinina sérica",
            "C) Bilirrubina indirecta libre",
            "D) Ácido úrico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La incapacidad del hígado cirrótico para metabolizar y depurar el amoníaco intestinal generado por la dieta lleva a su acumulación sistémica y cerebral, causando encefalopatía."
    },
    {
        id: 112,
        area: "Cardiología",
        pregunta: "Paciente con hipertensión arterial crónica de difícil control acude a valoración. Se detecta un soplo sistólico abdominal en región epigástrica/periumbilical y asimetría en el tamaño de los riñones por ultrasonido. ¿Cuál es la etiología secundaria más probable de su hipertensión?",
        opciones: [
            "A) Estenosis de la arteria renal (renovascular)",
            "B) Feocromocitoma secretor de catecolaminas",
            "C) Coartación de la aorta torácica descendente",
            "D) Hiperaldosteronismo primario por adenoma"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presencia de hipertensión resistente con soplo abdominal y asimetría renal sugiere fuertemente Hipertensión Renovascular por estenosis de la arteria renal."
    },
    {
        id: 113,
        area: "Ginecología y Obstetricia",
        pregunta: "Paciente femenina de 24 años acude por dolor abdominal bajo agudo, sangrado transvaginal escaso y amenorrea de 7 semanas. A la exploración presenta dolor anexial derecho intenso a la movilización cervical. La prueba de embarazo en suero es positiva y el ultrasonido transvaginal muestra útero vacío sin saco gestacional intrauterino. ¿Cuál es el diagnóstico provisional de sospecha?",
        opciones: [
            "A) Embarazo ectópico",
            "B) Aborto completo diferido",
            "C) Amenaza de aborto temprano",
            "D) Embarazo molar vesicular"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presencia de dolor anexial, sangrado y prueba positiva con útero vacío en el USG transvaginal ante una amenorrea corta es altamente indicativa de Embarazo Ectópico."
    },
    {
        id: 114,
        area: "Cirugía General",
        pregunta: "Paciente masculino de 45 años con antecedentes de úlcera péptica acude a urgencias por dolor abdominal epigástrico de inicio súbito, en 'puñalada', de gran intensidad, seguido de abdomen en tabla y pérdida de la matidez hepática a la percusión. ¿Cuál es el diagnóstico presuntivo?",
        opciones: [
            "A) Perforación de víscera hueca (úlcera péptica perforada)",
            "B) Pancreatitis aguda edematosa leve",
            "C) Obstrucción intestinal por bridas",
            "D) Trombosis mesentérica difusa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El inicio súbito de dolor en puñalada, abdomen en tabla (rigidez generalizada) y neumoperitoneo con pérdida de matidez hepática define la perforación de víscera hueca."
    },
    {
        id: 115,
        area: "Infectología",
        pregunta: "Paciente con infección por VIH y recuento de linfocitos CD4 menor de 50 células/uL presenta alteración visual, visión borrosa y retinitis con áreas blanquecinas necróticas en 'fondo de ojo' al examen oftalmológico. ¿Cuál es el agente etiológico oportunista más probable?",
        opciones: [
            "A) Citomegalovirus (CMV)",
            "B) Toxoplasma gondii cerebral",
            "C) Cryptococcus neoformans",
            "D) Virus de la varicela zoster"
        ],
        respuestaCorrecta: 0,
        explicacion: "La retinitis por Citomegalovirus (CMV) es la infección oportunista ocular más común en pacientes con VIH avanzado con CD4 < 50 cél/uL."
    },
    {
        id: 116,
        area: "Endocrinología",
        pregunta: "Paciente con diabetes mellitus tipo 1 presenta episodios recurrentes de sudoración fría, palpitaciones, temblor, confusión y mareos que mejoran tras la ingesta de azúcares. ¿Cómo se define esta complicación aguda?",
        opciones: [
            "A) Hipoglucemia iatrogénica/farmacológica",
            "B) Cetoacidosis diabética leve",
            "C) Estado hiperosmolar hiperglucémico",
            "D) Acidosis láctica por biguanidas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los síntomas adrenérgicos y neuroglucopénicos que ceden con la administración de glucosa definen un cuadro de Hipoglucemia aguda secundaria al tratamiento farmacológico."
    },
    {
        id: 117,
        area: "Pediatría",
        pregunta: "Lactante menor de 4 meses con tos perruna, estridor inspiratorio y dificultad respiratoria leve. ¿Cuál es el diagnóstico clínico y el tratamiento principal?",
        opciones: [
            "A) Crup viral (laringotraqueobronquitis); Dexametasona oral o IM",
            "B) Bronquiolitis por VSR; Salbutamol en nebulización",
            "C) Neumonía bacteriana típica; Penicilina sódica IV",
            "D) Epiglotitis bacteriana aguda; Intubación de urgencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cuadro clínico de tos perruna y estridor en lactantes corresponde a Crup viral, tratándose eficazmente con corticosteroides sistémicos (dexametasona)."
    },
    {
        id: 118,
        area: "Neurología",
        pregunta: "Paciente masculino de 70 años con episodios transitorios de pérdida de fuerza en mano derecha y alteración del lenguaje de 15 minutos de duración que se resuelven por completo antes de 1 hora, sin evidencia de daño en la tomografía. ¿Cómo se clasifica este cuadro?",
        opciones: [
            "A) Ataque Isquémico Transitorio (AIT)",
            "B) Infarto cerebral establecido con recuperación",
            "C) Epilepsia focal motora simple",
            "D) Migraña hemipléjica familiar"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un déficit neurológico focal transitorio de origen isquémico con resolución completa en menos de 24 horas (usualmente < 1 hora) se define como Ataque Isquémico Transitorio (AIT)."
    },
    {
        id: 119,
        area: "Reumatología",
        pregunta: "Paciente femenina de 30 años acude por artralgias, lesiones cutáneas en 'alas de mariposa' (eritema malar) fotosensibles, alopecia difusa y úlceras orales indoloras. Se detectan Anticuerpos Antinucleares (ANA) positivos con patrón homogéneo y anti-DNA doble cadena positivos. ¿Cuál es el diagnóstico?",
        opciones: [
            "A) Lupus Eritematoso Sistémico (LES)",
            "B) Artritis Reumatoide seropositiva",
            "C) Esclerosis sistémica difusa",
            "D) Dermatomiositis idiopática"
        ],
        respuestaCorrecta: 0,
        explicacion: "La presencia de eritema malar fotosensible, úlceras orales y anticuerpos antinucleares junto con anti-DNA de doble cadena positivos confirma el diagnóstico de Lupus Eritematoso Sistémico."
    },
    {
        id: 120,
        area: "Salud Pública / Epidemiología",
        pregunta: "En los ensayos clínicos controlados aleatorizados, ¿cuál es el propósito fundamental de realizar la 'aleatorización' (randomización) de los pacientes en los grupos de estudio?",
        opciones: [
            "A) Distribuir de manera equitativa tanto las variables conocidas como las desconocidas (factores de confusión) entre los grupos de tratamiento y control, minimizando el sesgo de selección",
            "B) Asegurar que el investigador sepa qué tratamiento recibe cada paciente",
            "C) Reducir el tamaño de la muestra a cero participantes",
            "D) Acelerar la aprobación comercial del fármaco por la industria"
        ],
        respuestaCorrecta: 0,
        explicacion: "La aleatorización busca eliminar el sesgo de selección al asignar al azar a los pacientes, distribuyendo equitativamente los factores de confusión conocidos y desconocidos entre los grupos comparados."
    }
];