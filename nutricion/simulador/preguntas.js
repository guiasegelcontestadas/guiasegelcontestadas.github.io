const bancoPreguntas = [
    {
        id: 1,
        area: "Nutrición Clínica",
        pregunta: "Un paciente masculino de 45 años diagnosticado con insuficiencia renal crónica en estadio 4 (sin terapia de reemplazo renal) acude a consulta de nutrición. ¿Cuál es el aporte proteico recomendado en g/kg de peso corporal/día para frenar la progresión del deterioro renal y evitar la uremia?",
        opciones: [
            "A) 0.6 a 0.8 g/kg/día.",
            "B) 1.2 a 1.5 g/kg/día.",
            "C) 1.8 a 2.0 g/kg/día.",
            "D) 0.2 a 0.4 g/kg/día sin aminoácidos esenciales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En pacientes con IRC no dializados (estadios 3-5), las guías KDOQI recomiendan una restricción proteica moderada de 0.55-0.60 g/kg/día (o 0.6-0.8 g/kg/día) para reducir la acumulación de toxinas urémicas y la hiperfiltración glomerular."
    },
    {
        id: 2,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En una evaluación nutricional poblacional en niños menores de 5 años, ¿qué indicador antropométrico refleja de manera específica la desnutrición crónica acumulada o el retraso en el crecimiento?",
        opciones: [
            "A) Peso para la edad.",
            "B) Talla para la edad.",
            "C) Peso para la talla.",
            "D) Perímetro cefálico para la edad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El indicador Talla para la Edad (T/E) evalúa el crecimiento lineal alcanzado y refleja déficits nutricionales crónicos o acumulados a largo plazo durante el desarrollo infantil."
    },
    {
        id: 3,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un servicio de alimentación hospitalario, ¿cuál es el rango de temperatura conocido como 'Zona de Peligro Térmico' (ZPT) en el que los microorganismos patógenos se multiplican rápidamente en los alimentos?",
        opciones: [
            "A) -18 °C a 0 °C.",
            "B) 0 °C a 4 °C.",
            "C) 4 °C a 60 °C.",
            "D) 65 °C a 100 °C."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Según la NOM-251-SSA1-2009 y estándares internacionales del Codex Alimentarius, el rango de 4 °C a 60 °C es la zona crítica donde las bacterias patógenas se reproducen aceleradamente."
    },
    {
        id: 4,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué aminoácido esencial actúa como el 'aminoácido limitante' principal en la proteína del maíz, requiriendo su complementación dietética con leguminosas (como el frijol)?",
        opciones: [
            "A) Metionina.",
            "B) Valina.",
            "C) Leucina.",
            "D) Lisina."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los cereales como el maíz son deficientes principalmente en el aminoácido esencial lisina (y triptófano), mientras que las leguminosas son ricas en lisina pero deficientes en metionina, logrando complementar la calidad proteica al combinarse."
    },
    {
        id: 5,
        area: "Nutrición Clínica",
        pregunta: "Un paciente crítico politraumatizado ingresa a la UCI y requiere nutrición parenteral total (NPT). ¿Cuál es la complicación metabólica aguda potencialmente mortal asociada a la reintroducción rápida de carbohidratos en pacientes con desnutrición severa?",
        opciones: [
            "A) Síndrome de reevaluación clínica.",
            "B) Síndrome de realimentación.",
            "C) Cetoacidosis metabólica descompensada.",
            "D) Esteatosis hepática no alcohólica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El síndrome de realimentación ocurre por el cambio de catabolismo a anabolismo estimulado por la insulina al reintroducir glucosa, provocando captación intracelular masiva de fósforo, potasio y magnesio, causando hipofosfatemia severa y colapso cardiorrespiratorio."
    },
    {
        id: 6,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "Durante el embarazo, ¿cuál es la recomendación diaria de suplementación con ácido fólico en mujeres sin antecedentes de defectos del tubo neural para prevenir malformaciones congénitas?",
        opciones: [
            "A) 100 µg/día.",
            "B) 200 µg/día.",
            "C) 400 µg/día (0.4 mg/día).",
            "D) 5 mg/día."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las guías de práctica clínica y la OMS recomiendan la suplementación periconcepcional universal de 400 µg (0.4 mg) diarios de ácido fólico para prevenir anencefalia y espina bífida."
    },
    {
        id: 7,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de un comedor industrial, ¿qué herramienta de control de calidad e inocuidad se basa en 7 principios sistemáticos para identificar y controlar peligros significativos para la seguridad de los alimentos?",
        opciones: [
            "A) Diagrama de Ishikawa.",
            "B) Matriz FODA operativa.",
            "C) Análisis de Pareto.",
            "D) Sistema HACCP (Análisis de Peligros y Puntos Críticos de Control)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El sistema HACCP (Hazard Analysis and Critical Control Points) se fundamenta en 7 principios estandarizados para prevenir la contaminación biológica, química o física de los alimentos."
    },
    {
        id: 8,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué enzima pancreática secretada hacia el duodeno es responsable de la hidrólisis de los enlaces éster de los triglicéridos ingeridos, produciendo ácidos grasos libres y 2-monoacilglicéridos?",
        opciones: [
            "A) Lipasa pancreática.",
            "B) Amilasa pancreática.",
            "C) Tripsina.",
            "D) Carboxipeptidasa."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La lipasa pancreática, junto con la colipasa y las sales biliares, es la enzima clave para la digestión y posterior absorción intestinal de las grasas dietéticas."
    },
    {
        id: 9,
        area: "Nutrición Clínica",
        pregunta: "En el tratamiento nutracéutico de la diabetes mellitus tipo 2, ¿cuál es el índice glucémico (IG) que clasifica a un alimento cuando causa un incremento lento y gradual de la glucosa en sangre (IG menor o igual a 55)?",
        opciones: [
            "A) Índice glucémico alto.",
            "B) Índice glucémico bajo.",
            "C) Índice glucémico moderado.",
            "D) Carga glucémica crítica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los alimentos se clasifican según su IG en: Bajo (≤ 55), Moderado (56-69) y Alto (≥ 70). Un IG bajo genera una respuesta insulinémica moderada y controlada."
    },
    {
        id: 10,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En el etiquetado frontal de advertencia establecido por la NOM-051-SCFI/SSA1-2010 en México, ¿cuál es el criterio para la colocación del sello 'EXCESO DE SODIO' en alimentos sólidos?",
        opciones: [
            "A) Mayor o igual a 100 mg de sodio por cada 100 g de producto.",
            "B) Mayor o igual a 200 mg de sodio por cada 100 g de producto.",
            "C) Mayor o igual a 300 mg de sodio por 100 g o ≥ 1 mg por kcal.",
            "D) Mayor o igual a 500 mg de sodio totales en el empaque."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La fase de la NOM-051 estipula que un producto sólido lleva el sello de exceso de sodio si contiene ≥ 300 mg de sodio por 100 g de producto."
    },
    {
        id: 11,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "Al planificar un menú para un colectivo hospitalario, ¿qué tipo de costo abarca la compra de insumos de alimentos y bebidas consumidos directamente en la preparación de los platillos?",
        opciones: [
            "A) Costo fijo.",
            "B) Costo indirecto de fabricación.",
            "C) Gastos administrativos globales.",
            "D) Costo directo de materia prima (costo de alimentos)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El costo de materia prima representa el gasto variable directo de los alimentos utilizados en las recetas, fundamental para el cálculo del costo por ración."
    },
    {
        id: 12,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué tipo de fibra dietética no fermentable, presente en la pared celular vegetal (como el salvado de trigo), aumenta el volumen fecal y acelera el tránsito intestinal?",
        opciones: [
            "A) Celulosa e Inulina.",
            "B) Pectina y Gomas.",
            "C) Mucílagos y Fructanos.",
            "D) Celulosa y Lignina (Fibra insoluble)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La celulosa, hemicelulosa y lignina constituyen la fibra insoluble; no se disuelven en agua ni se fermentan significativamente, aumentando la masa fecal."
    },
    {
        id: 13,
        area: "Nutrición Clínica",
        pregunta: "Un paciente de 60 años con cirrosis hepática descompensada presenta encefalopatía hepática grado II. ¿Cuál es el manejo dietético proteico recomendado actualmente según las guías ESPEN?",
        opciones: [
            "A) Restricción proteica severa a < 0.5 g/kg/día de forma indefinida.",
            "B) Aporte de 1.2 a 1.5 g/kg/día, priorizando proteínas de origen vegetal y lácteos rico en aminoácidos de cadena ramificada (BCAA).",
            "C) Dieta hiperproteica > 2.5 g/kg/día con suplementación exclusiva de colágeno.",
            "D) Ayuno proteico total por 72 horas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Anteriormente se restringía la proteína, pero las guías actuales desaconsejan la restricción prolongada por empeorar el catabolismo proteico y la sarcopenia; se recomiendan 1.2-1.5 g/kg/día y BCAA si hay intolerancia proteica."
    },
    {
        id: 14,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué vitamina liposoluble se administra rutinariamente al recién nacido en dosis única de 1 mg intramuscular para prevenir la enfermedad hemorrágica del recién nacido?",
        opciones: [
            "A) Vitamina A (Retinol).",
            "B) Vitamina D3 (Colecalciferol).",
            "C) Vitamina K1 (Fitomenadiona).",
            "D) Vitamina E (Alfa-tocoferol)."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La profilaxis con Vitamina K al nacer previene la hemorragia por deficiencia de vitamina K, debido a la escasa transferencia placentaria y la inmadurez de la flora intestinal neonato."
    },
    {
        id: 15,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la recepción de insumos en un servicio de alimentos, ¿cuál es la temperatura máxima permitida para recibir lácteos y carnes frescas refrigeradas según la NOM-251-SSA1-2009?",
        opciones: [
            "A) 10 °C.",
            "B) 8 °C.",
            "C) 12 °C.",
            "D) 4 °C (máximo 9 °C para productos de la pesca con hielo)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La NOM-251 establece que los alimentos refrigerados deben recibirse a una temperatura máxima de 4 °C para garantizar la cadena de frío e inactivar el crecimiento bacteriano."
    },
    {
        id: 16,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué reacción de pardeamiento no enzimático ocurre durante la cocción a elevadas temperaturas entre el grupo amino de las proteínas y el grupo carbonilo de los azúcares reductores?",
        opciones: [
            "A) Reacción de Maillard.",
            "B) Caramelización.",
            "C) Oxidación lipídica.",
            "D) Retrogradación del almidón."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La reacción de Maillard es un pardeamiento químico no enzimático entre carbohidratos reductores y proteínas/aminoácidos, responsable del aroma y color dorado de los alimentos horneados o asados."
    },
    {
        id: 17,
        area: "Nutrición Clínica",
        pregunta: "Un paciente femenino con antecedente de gastrectomía total desarrolla anemia megaloblástica y síntomas neurológicos (parestesias). ¿La deficiencia de qué micronutriente es la causa directa?",
        opciones: [
            "A) Ácido fólico (Vitamina B9).",
            "B) Hierro hemo.",
            "C) Vitamina B12 (Cobalamina) por falta de Factor Intrínseco.",
            "D) Piridoxina (Vitamina B6)."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las células parietales del estómago secretan Factor Intrínseco, indispensable para la absorción de Vitamina B12 en el íleon terminal. La gastrectomía elimina esta síntesis, produciendo anemia perniciosa y neuropatía."
    },
    {
        id: 18,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué indicador antropométrico en adultos se correlaciona con mayor precisión con la distribución de grasa visceral y el riesgo cardiovascular elevado según la OMS?",
        opciones: [
            "A) Índice de masa corporal (IMC).",
            "B) Pliegue cutáneo tricipital.",
            "C) Circunferencia de pantorrilla.",
            "D) Circunferencia de cintura (> 80 cm en mujeres, > 94 cm en hombres en población latinoamericana)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La circunferencia de cintura es un marcador antropométrico directo de adiposidad central y acumulación de grasa visceral metabólicamente activa, fuertemente vinculada al riesgo cardiometabólico."
    },
    {
        id: 19,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un almacén de alimentos secos, ¿qué método de rotación de inventarios garantiza que los productos almacenados primero sean los primeros en ser utilizados?",
        opciones: [
            "A) PEPS (Primeras Entradas, Primeras Salidas).",
            "B) UEPS (Últimas Entradas, Primeras Salidas).",
            "C) Conteo cíclico aleatorio.",
            "D) Método LIFO (Last In, First Out)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El sistema PEPS (FIFO) asegura la rotación adecuada de los insumos evitando el envejecimiento, caducidad o deterioro de las materias primas en el almacén."
    },
    {
        id: 20,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Cuál es la forma principal de almacenamiento de glucosa y reserva energética de origen animal, depositado principalmente en el hígado y tejido muscular?",
        opciones: [
            "A) Amilosa.",
            "B) Glucógeno.",
            "C) Dextrina.",
            "D) Amilopectina."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El glucógeno es un polisacárido altamente ramificado de moléculas de glucosa que sirve como reserva energética de rápida disponibilidad en tejidos animales."
    },
    {
        id: 21,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con insuficiencia cardiaca congestiva sintomática (NYHA III) con tendencia a la retención de líquidos, ¿cuál es la restricción diaria de sodio dietético recomendada?",
        opciones: [
            "A) < 5 g de sodio/día.",
            "B) < 3 g de sodio/día.",
            "C) < 2 g de sodio/día (equivalente a < 5 g de sal/día).",
            "D) 0 mg de sodio estricto."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las guías clínicas internacionales recomiendan una restricción de sodio a menos de 2,000 mg/día (2 g de sodio = 5 g de sal) en insuficiencia cardiaca para controlar la volemia y edema."
    },
    {
        id: 22,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Cuál de los siguientes programas de fortificación obligatoria de alimentos en México ha contribuido significativamente a la erradicación del bocio endémico?",
        opciones: [
            "A) Yodación de la sal de mesa.",
            "B) Adición de hierro a las harinas de maíz.",
            "C) Fortificación de la leche con vitamina D.",
            "D) Adición de vitamina A al azúcar refinada."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La adición obligatoria de yodo a la sal de consumo humano (NOM-040-SSA1-1993) es la estrategia de salud pública global más costo-efectiva para prevenir trastornos por deficiencia de yodo y bocio."
    },
    {
        id: 23,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la formulación de dietas e ingredientes para la elaboración de menús, ¿qué representa el 'Factor de Corrección' (FC) o margen de merma de un alimento?",
        opciones: [
            "A) La relación entre el costo total y el precio de venta.",
            "B) La relación entre el peso bruto (tal como se compra) y el peso neto (parte comestible procesada).",
            "C) El porcentaje de grasa absorbida en la fritura.",
            "D) La densidad energética por mililitro."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Factor de Corrección se calcula como FC = Peso Bruto / Peso Neto. Permite determinar la cantidad exacta de materia prima que debe comprarse considerando desperdicios inasimilables (cascaras, huesos, etc.)."
    },
    {
        id: 24,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué lipoproteína plasmática es sintetizada en los enterocitos del intestino delgado para transportar los triglicéridos exógenos procedentes de la dieta a través del sistema linfático?",
        opciones: [
            "A) VLDL (Lipoproteína de muy baja densidad).",
            "B) LDL (Lipoproteína de baja densidad).",
            "C) HDL (Lipoproteína de alta densidad).",
            "D) Quilomicrones."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los quilomicrones se ensamblan en las células epiteliales del intestino (enterocitos) para empaquetar lipas solubles, ésteres de colesterol y triglicéridos dietéticos hacia la circulación linfática."
    },
    {
        id: 25,
        area: "Nutrición Clínica",
        pregunta: "Un paciente masculino de 28 años con pancreatitis aguda severa presenta íleo paralítico prolongado e imposibilidad de utilizar el tubo digestivo por más de 7 días. ¿Qué vía de soporte nutricional está indicada?",
        opciones: [
            "A) Nutrición enteral por sonda nasoyeyunal.",
            "B) Nutrición parenteral total (NPT) por vía venosa central.",
            "C) Dieta polimérica por sonda nasogástrica.",
            "D) Dieta líquida clara oral."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La nutrición parenteral está indicada cuando el tracto gastrointestinal no es funcional, no es accesible o su uso está contraindicado (como en íleo paralítico prolongado o fallo intestinal)."
    },
    {
        id: 26,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la evaluación del estado de nutrición, ¿cuál es el estándar de oro (Gold Standard) para la medición de la composición corporal (masa magra y masa grasa) en la investigación clínica?",
        opciones: [
            "A) Bioimpedancia eléctrica tetrapolar (BIA).",
            "B) Pletismografía por desplazamiento de aire (BodPod).",
            "C) Absorciometría de rayos X de doble energía (DEXA).",
            "D) Antropometría por plicometría de 4 sitios."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El estudio DEXA permite una evaluación tricompartimental precisa (masa grasa, masa libre de grasa y densidad mineral ósea), considerado el estándar de referencia clínico."
    },
    {
        id: 27,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un proceso de cocción de alimentos, ¿cuál es la temperatura interna mínima recomendada para la cocción segura de carne de aves (pollo, pavo) para eliminar Salmonella spp.?",
        opciones: [
            "A) 63 °C por 15 segundos.",
            "B) 68 °C por 15 segundos.",
            "C) 74 °C (165 °F) por al menos 15 segundos.",
            "D) 55 °C por 3 minutos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los estándares higiénicos de preparación de alimentos estipulan que las aves de corral deben alcanzar una temperatura interna de al menos 74 °C (165 °F) para asegurar la destrucción térmica de patógenos."
    },
    {
        id: 28,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué compuesto fenólico antioxidante, presente de forma natural en alimentos como las uvas rojas y el vino tinto, se ha asociado con efectos cardioprotectores y activación de sirtuinas?",
        opciones: [
            "A) Licopeno.",
            "B) Luteína.",
            "C) Curcumina.",
            "D) Resveratrol."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El resveratrol es un estilbeno/polifenol presente en las pieles de las uvas rojas con elevadas propiedades antioxidantes, antiinflamatorias y moduladoras de la salud metabólica."
    },
    {
        id: 29,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con quemaduras térmicas de segundo y tercer grado que abarcan el 45% de la superficie corporal total, ¿cuál es la fórmula clásica para estimar los requerimientos de energía durante la fase aguda post-resucitación hídrica?",
        opciones: [
            "A) Fórmula de Curreri.",
            "B) Ecuación de Schofield.",
            "C) Fórmula de Mifflin-St. Jeor.",
            "D) Ecuación de Harris-Benedict sin factores de estrés."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La fórmula de Curreri [25 kcal x kg peso + 40 kcal x % SCT quemada] fue diseñada específicamente para calcular el hipermetabolismo severo provocado por quemaduras extensas."
    },
    {
        id: 30,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "De acuerdo con las guías de la OMS, ¿cuál es el límite recomendado de ingesta diaria de azúcares libres en niños y adultos para reducir el riesgo de caries dental y obesidad?",
        opciones: [
            "A) Menos del 20% del ingesta calórica total.",
            "B) Menos del 10% (e idealmente < 5%) de la ingesta calórica total.",
            "C) Menos de 50 g fijos de fructosa pura.",
            "D) No existe recomendación cuantitativa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La OMS recomienda reducir la ingesta de azúcares libres a menos del 10% del total de energía consumida al día, señalando beneficios adicionales si se reduce a menos del 5%."
    },
    {
        id: 31,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la organización operativa de la cocina de una institución asistencial, ¿qué zona se encarga exclusivamente del lavado y sanitización de platos, cubiertos, vasos y charolas?",
        opciones: [
            "A) Área de preparación previa.",
            "B) Área de cocción central.",
            "C) Área de sub-ensamble.",
            "D) Área de 'Anambre' o 'Scullery' (Área de lavado de loza y cochambre)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El área de lavado de loza (scullery) está independizada físicamente del área de cocción para evitar la contaminación cruzada entre vajilla sucia y alimentos preparados."
    },
    {
        id: 32,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Cuál es el mineral esencial que forma parte de la estructura central de la hormona tiroidea tiroxina (T4) y triyodotironina (T3)?",
        opciones: [
            "A) Selenio.",
            "B) Cinc.",
            "C) Yodo.",
            "D) Hierro."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El yodo es el sustrato indispensable para la síntesis de las hormonas tiroideas T3 y T4 en la glándula tiroides, las cuales regulan el metabolismo basal."
    },
    {
        id: 33,
        area: "Nutrición Clínica",
        pregunta: "En la evaluación antropométrica de un adulto mayor para detectar el riesgo de sarcopenia y pérdida de masa muscular funcional, ¿qué medición periférica tiene un punto de corte diagnóstico crítico cuando es < 31 cm?",
        opciones: [
            "A) Circunferencia media del brazo (CMB).",
            "B) Circunferencia de pantorrilla (CP).",
            "C) Pliegue bicipital.",
            "D) Diámetro biestiloideo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La circunferencia de pantorrilla < 31 cm es el indicador antropométrico más sensible validado por la OMS y el EWGSOP para estimar sarcopenia en adultos mayores."
    },
    {
        id: 34,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la prevención de la anemia ferropénica en lactantes mayores de 6 meses con lactancia materna exclusiva, ¿qué acción es prioritaria durante la alimentación complementaria?",
        opciones: [
            "A) Iniciar la alimentación complementaria introduciendo alimentos ricos en hierro biodisponible (carnes rojas, vísceras) desde los 6 meses.",
            "B) Dar suplementos de calcio concentrado.",
            "C) Retrasar la introducción de sólidos hasta los 12 meses.",
            "D) Ofrecer leche de vaca entera como bebida principal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "A los 6 meses de edad, las reservas hepáticas de hierro con las que nace el neonato se agotan; por ello, la alimentación complementaria debe iniciar de inmediato con alimentos fuente de hierro de alta biodisponibilidad."
    },
    {
        id: 35,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el diseño arquitectónico de una cocina comercial o de hospital, ¿qué principio de flujo de producción debe cumplirse para evitar que los residuos y la loza sucia crucen con los alimentos servidos?",
        opciones: [
            "A) Flujo en forma de cruce de caminos cruzados.",
            "B) Flujo unidireccional (sin retornos ni cruzamientos de líneas limpias y sucias).",
            "C) Flujo circular concéntrico.",
            "D) Disposición de inventario en espiral."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El flujo unidireccional de producción (de sucio a limpio, o de recepción a servicio) es la regla de oro del diseño sanitario para prevenir la contaminación cruzada."
    },
    {
        id: 36,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué micronutriente hidrosoluble se requiere como coenzima (Piridoxal Fosfato - PLP) en las reacciones de transaminación y descarboxilación de los aminoácidos?",
        opciones: [
            "A) Vitamina B1 (Tiamina).",
            "B) Vitamina B2 (Riboflavina).",
            "C) Vitamina B3 (Niacina).",
            "D) Vitamina B6 (Piridoxina)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El piridoxal fosfato (PLP), forma activa de la vitamina B6, es el cofactor esencial para las enzimas transaminasas (AST, ALT) en el metabolismo de nitrógeno."
    },
    {
        id: 37,
        area: "Nutrición Clínica",
        pregunta: "Un paciente de 52 años presenta dislipidemia mixta (colesterol LDL elevado y triglicéridos elevados). ¿Qué recomendación dietética es prioritaria para disminuir la concentración de colesterol LDL?",
        opciones: [
            "A) Reducir el consumo de grasas saturadas a < 7% del VET y eliminar las grasas trans dietéticas.",
            "B) Eliminar por completo el consumo de carbohidratos complejos.",
            "C) Suplementar con dosis masivas de vitamina C.",
            "D) Incrementar el consumo de aceites tropicales (palma y coco)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las pautas ATP-III y la AHA demuestran que la reducción de grasas saturadas (< 7% VET) y la eliminación de ácidos grasos trans son las intervenciones nutricionales con mayor impacto en la reducción de LDL."
    },
    {
        id: 38,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué encuesta nacional periódica realizada en México proporciona información sobre las prevalencias de sobrepeso, obesidad, anemia y patrones de consumo alimentario a nivel poblacional?",
        opciones: [
            "A) Censo General de Población y Vivienda (INEGI).",
            "B) Encuesta Nacional de Salud y Nutrición (ENSANUT).",
            "C) Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH).",
            "D) Encuesta Nacional de Empleo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La ENSANUT es el instrumento probabilístico nacional en México diseñado específicamente para monitorear el estado de salud y nutrición de la población."
    },
    {
        id: 39,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la esterilización de utensilios y desinfección de verduras en el área de preparación, ¿cuál es la concentración estándar recomendada de cloro activo (hipoclorito de sodio) en agua para la desinfección de frutas y verduras?",
        opciones: [
            "A) 1 a 2 ppm por 30 minutos.",
            "B) 50 a 100 ppm durante 3 a 5 minutos (o según especificación del fabricante).",
            "C) 500 ppm en baño hirviendo.",
            "D) 1000 ppm por 1 hora."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las normas sanitarias recomiendan soluciones desinfectantes cloradas entre 50 y 100 ppm para el lavado y desinfección segura de frutas y verduras de consumo crudo."
    },
    {
        id: 40,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué componente bioactivo lipofílico, responsable del color rojo característico del jitomate, es un potente antioxidante que incrementa su bioaccesibilidad cuando el alimento es sometido a cocción en presencia de aceite?",
        opciones: [
            "A) Beta-caroteno.",
            "B) Astaxantina.",
            "C) Quercetina.",
            "D) Licopeno."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El licopeno es un carotenoide lipofílico cuyo procesamiento térmico rompe las paredes celulares y transforma la molécula de la forma trans a cis, mejorando su absorción intestinal al combinarse con lípidos."
    },
    {
        id: 41,
        area: "Nutrición Clínica",
        pregunta: "En la evaluación del paciente con enfermedad renal crónica en hemodiálisis, ¿cuál es el porcentaje mínimo recomendado de proteínas de alto valor biológico (origen animal) que debe contener la dieta diaria?",
        opciones: [
            "A) Al menos el 50% del total proteico prescrito.",
            "B) Únicamente el 10% del total proteico.",
            "C) Exclusivamente proteínas vegetales.",
            "D) Cero por ciento, se prefieren aminoácidos libres."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En pacientes bajo terapia de reemplazo renal (hemodiálisis), se recomienda que al menos el 50% de las proteínas consumidas sean de alto valor biológico para asegurar un perfil completo de aminoácidos esenciales."
    },
    {
        id: 42,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "Según los criterios de la OMS, ¿cómo se clasifica nutricionalmente a un niño menor de 5 años que presenta una puntuación Z de Peso para la Talla menor a -3 Desviaciones Estándar (DE)?",
        opciones: [
            "A) Desnutrición moderada.",
            "B) Desnutrición aguda grave (o emaciación severa).",
            "C) Sobrepeso infantil.",
            "D) Retraso en el crecimiento crónico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una puntuación Z de Peso para la Talla por debajo de -3 DE indica emaciación severa o desnutrición aguda grave, con un riesgo elevado de mortalidad infantil."
    },
    {
        id: 43,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el control de costos de un servicio de alimentación, ¿cómo se define el indicador de 'Rendimiento' de la materia prima?",
        opciones: [
            "A) La proporción de desperdicios quemados en la parrilla.",
            "B) La relación porcentual entre el peso neto comestible obtenido y el peso bruto inicial del alimento adquirido.",
            "C) El costo total de la nómina dividido entre los platillos vendidos.",
            "D) El tiempo transcurrido desde la recepción hasta la cocción."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El rendimiento mide la eficiencia del aprovechamiento de los alimentos, calculándose como el peso neto entre el peso bruto por cien."
    },
    {
        id: 44,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué método de conservación de alimentos por calor aplica temperaturas inferiores a 100 °C durante un tiempo prolongado para destruir microorganismos patógenos sin alterar drásticamente las características organolépticas de la leche?",
        opciones: [
            "A) Esterilización UHT a 140 °C.",
            "B) Tindalización fraccionada.",
            "C) Pasteurización.",
            "D) Desecación por aspersión."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La pasteurización es un tratamiento térmico moderado (<100 °C) que destruye patógenos no esporulados minimizando los cambios nutricionales y sensoriales, especialmente útil en lácteos."
    },
    {
        id: 45,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con diagnóstico de diabetes mellitus gestacional (DMG), ¿cuál es el objetivo principal del manejo médico nutricional inicial?",
        opciones: [
            "A) Inducir una pérdida de peso corporal acelerada del 10% mensual.",
            "B) Mantener la normoglucemia mediante una distribución fraccionada de carbohidratos complejos y evitar la cetosis, asegurando un adecuado crecimiento fetal.",
            "C) Suprimir por completo la ingesta de hidratos de carbono.",
            "D) Administrar dietas cetogénicas estrictas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En la DMG nunca se busca la pérdida de peso; el objetivo es lograr un control glucémico estricto con fraccionamiento de hidratos de carbono de bajo índice glucémico para prevenir macrosomía y complicaciones perinatales."
    },
    {
        id: 46,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Cuál es la principal causa de deficiencia de micronutrientes a nivel mundial, conocida como 'hambre oculta', que afecta principalmente a mujeres embarazadas y niños en edad preescolar?",
        opciones: [
            "A) Deficiencia de hierro, vitamina A y yodo.",
            "B) Exceso de consumo de fibra insoluble.",
            "C) Toxicidad por selenio orgánico.",
            "D) Deficiencia exclusiva de aminoácidos de cadena ramificada."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El hambre oculta se refiere a la carencia de micronutrientes esenciales (fundamentalmente hierro, vitamina A y yodo), la cual no siempre se acompaña de pérdida de peso aparente pero causa graves daños funcionales."
    },
    {
        id: 47,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el diseño de la distribución en planta (layout) de una cocina institucional, ¿qué área debe encontrarse ubicada de manera inmediata tras la recepción de mercancías?",
        opciones: [
            "A) El comedor de clientes externos.",
            "B) Las áreas de almacenamiento (secos, refrigeración y congelación) y el área de lavado preliminar de víveres.",
            "C) La zona de entrega de charolas servidas.",
            "D) La oficina de recursos humanos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Por logística sanitaria y de control, la zona de recepción debe conectar directamente con las áreas de almacenamiento y limpieza preliminar para evitar recorridos innecesarios."
    },
    {
        id: 48,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué monosacárido presenta el mayor grado de dulzor relativo en comparación con la sacarosa?",
        opciones: [
            "A) Glucosa.",
            "B) Galactosa.",
            "C) Fructosa.",
            "D) Maltosa."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La fructosa es el azúcar natural más dulce (aproximadamente 1.2 a 1.7 veces más dulce que la sacarosa), seguida por la sacarosa, la glucosa y la galactosa."
    },
    {
        id: 49,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con enfermedad celíaca activa, ¿cuál es el componente proteico específico de ciertos cereales que desencadena la respuesta autoimmune y la atrofia de las vellosidades intestinales?",
        opciones: [
            "A) Caseína de la leche.",
            "B) Albúmina del huevo.",
            "C) Gluten (específicamente la fracción de gliadina presente en trigo, cebada, centeno y triticale).",
            "D) Zeina del maíz."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La gliadina, fracción proteica del gluten presente en trigo, cebada y centeno, es la responsable de inducir la enteropatía inflamatoria autoinmune característica de la enfermedad celíaca."
    },
    {
        id: 50,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En el contexto de la lactancia materna, ¿cómo se denomina la primera secreción láctea rica en inmunoglobulinas (principalmente IgA secretora), factores de crecimiento y propiedades inmunoprotectoras producida durante los primeros días postparto?",
        opciones: [
            "A) Leche de transición.",
            "B) Calostro.",
            "C) Leche madura final.",
            "D) Secreción caseosa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El calostro es la leche secretada en los primeros 3 a 5 días posteriores al parto; su alto contenido de inmunoglobulinas confiere inmunidad pasiva crucial al recién nacido."
    },
    {
        id: 51,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la gestión de compras de un servicio de alimentos, ¿qué es un formato de 'Estándar de Receta' (Receta Estándar)?",
        opciones: [
            "A) Un documento que detalla los ingredientes exactos, pesos brutos, pesos netos, procedimientos de preparación, porciones y costos unitarios de un platillo.",
            "B) Una factura fiscal emitida por proveedores mayoristas.",
            "C) Un manual de disciplina para el personal de cocina.",
            "D) Una lista genérica de platillos sin cantidades fijas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La receta estándar garantiza la estandarización en sabor, porciones, calidad y control financiero exacto de los costos de producción por platillo."
    },
    {
        id: 52,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué término bromatológico describe la cantidad de agua libre disponible en un alimento que puede facilitar el crecimiento microbiano y las reacciones químicas enzimáticas?",
        opciones: [
            "A) Humedad total porcentual.",
            "B) Actividad de agua ($a_w$).",
            "C) Densidad relativa de vapor.",
            "D) Coeficiente de solubilidad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La actividad de agua ($a_w$) mide el agua disponible para microorganismos y reacciones bioquímicas, siendo un parámetro crítico de conservación y seguridad alimentaria."
    },
    {
        id: 53,
        area: "Nutrición Clínica",
        pregunta: "En el soporte nutricional especializado de un paciente con lesión renal aguda hipercatabólica en terapia intensiva, ¿cómo debe ser el aporte de líquidos y electrolitos?",
        opciones: [
            "A) Libre de restricciones basándose en la sed.",
            "B) Restringido estrictamente considerando el volumen urinario de 24 horas más las pérdidas insensibles estimadas.",
            "C) Aporte masivo de líquidos intravenosos con soluciones hipotónicas.",
            "D) Exclusivamente nutrición enteral hiperosmolar sin agua libre."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En la lesión renal aguda oligúrica, el manejo hídrico debe ajustarse con precisión milimétrica al gasto urinario más las pérdidas insensibles para evitar sobrecarga de volumen e edema agudo de pulmón."
    },
    {
        id: 54,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En los programas de suplementación preventiva en salud pública infantil en México, ¿a qué grupo de edad se recomienda administrar megadosis semestrales de Vitamina A?",
        opciones: [
            "A) Niños de 6 a 59 meses de edad.",
            "B) Adolescentes en etapa escolar secundaria.",
            "C) Adultos mayores de 65 años.",
            "D) Recién nacidos en la primera semana de vida."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La administración profiláctica de suplementos de vitamina A cada 6 meses está dirigida a infantes de 6 a 59 meses para prevenir la deficiencia y reducir la morbilidad y mortalidad por enfermedades infecciosas."
    },
    {
        id: 55,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la implementación de BPM (Buenas Prácticas de Manufactura) bajo la NOM-251-SSA1-2009, ¿cuál es una obligación higiénica fundamental para el personal que manipula alimentos en áreas de producción?",
        opciones: [
            "A) Utilizar joyería visible para identificar jerarquías.",
            "B) Usar ropa de calle limpia sin cubrepelo.",
            "C) Mantener el cabello totalmente cubierto con red ecológica, uñas cortas sin esmalte, sin joyería y lavado de manos riguroso.",
            "D) Omitir el uso de cofias si el turno dura menos de dos horas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las BPM exigen control absoluto de la higiene personal (cofia, ausencia de joyería, uñas cortas sin esmalte, manos lavadas) para prevenir la contaminación física y biológica de los alimentos."
    },
    {
        id: 56,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué tipo de ácidos grasos se caracterizan por poseer dos o más dobles enlaces en su estructura química carbonada y ser considerados nutricionalmente esenciales (como el linoleico y linolénico)?",
        opciones: [
            "A) Ácidos grasos saturados.",
            "B) Ácidos grasos monoinsaturados.",
            "C) Ácidos grasos poliinsaturados (AGPI).",
            "D) Ácidos grasos trans artificiales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los ácidos grasos poliinsaturados contienen múltiples dobles enlaces y engloban a las familias omega-6 y omega-3, indispensables al no poder ser sintetizados de novo por el organismo humano."
    },
    {
        id: 57,
        area: "Nutrición Clínica",
        pregunta: "En un paciente diagnosticado con fenilcetonuria clásica, ¿cuál es la piedra angular del tratamiento médico nutricional de por vida?",
        opciones: [
            "A) Una dieta hiperproteica basada en carnes rojas y lácteos enteros.",
            "B) Una dieta estrictamente restringida en el aminoácido fenilalanina y suplementada con fórmulas libres de fenilalanina con tirosina.",
            "C) Consumo libre de alimentos ricos en aspartame sin control.",
            "D) Ayuno intermitente prolongado."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fenilcetonuria es un error innato del metabolismo donde la enzima fenilalanina hidroxilasa no funciona; requiere restringir la fenilalanina dietética para evitar daño neurológico irreversible."
    },
    {
        id: 58,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué objetivo persigue fundamentalmente la estrategia de fortificación de la harina de trigo y maíz con ácido fólico y hierro en las políticas públicas de alimentación?",
        opciones: [
            "A) Aumentar la vida de anaquel de los cereales en zonas cálidas.",
            "B) Prevenir defectos del tubo neural en neonatos y reducir la prevalencia de anemia nutricional en mujeres en edad reproductiva.",
            "C) Incrementar artificialmente el costo comercial de los cereales refinados.",
            "D) Sustituir el consumo de proteínas de origen animal."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fortificación masiva de harinas busca incidir directamente en la salud materno-infantil previniendo defectos congénitos neurológicos y combatiendo la anemia ferropénica poblacional."
    },
    {
        id: 59,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el análisis financiero de un comedor industrial, ¿cómo se calcula el 'Porcentaje del Costo de Alimentos' (Food Cost %)?",
        opciones: [
            "A) Dividiendo el costo total de los alimentos consumidos entre las ventas totales de alimentos, multiplicado por 100.",
            "B) Multiplicando el número de empleados por las horas trabajadas.",
            "C) Sumando los gastos de luz, agua y gas sin incluir materia prima.",
            "D) Restando la merma total al costo fijo administrativo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El porcentaje de costo de alimentos mide la eficiencia económica relacionando el valor de la materia prima gastada frente a los ingresos generados por su venta."
    },
    {
        id: 60,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué vitamina hidrosoluble actúa como coenzima indispensable en las reacciones de hidroxilación para la síntesis de colágeno, además de funcionar como un potente antioxidante hidrofílico?",
        opciones: [
            "A) Vitamina B1 (Tiamina).",
            "B) Vitamina C (Ácido ascórbico).",
            "C) Vitamina B12 (Cobalamina).",
            "D) Biotina."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La vitamina C es el agente reductor y coenzima crucial para la hidroxilación de prolina y lisina en la formación de fibras de colágeno maduras y estables."
    },
    {
        id: 61,
        area: "Nutrición Clínica",
        pregunta: "En la valoración nutricional subjetiva global (VSG), ¿qué parámetros clínicos e históricos se evalúan principalmente para clasificar al paciente en bien nutrido, moderadamente desnutrido o severamente desnutrido?",
        opciones: [
            "A) Pérdida de peso reciente, cambios en la ingesta dietética, síntomas gastrointestinales, capacidad funcional y exploración física de pérdida de grasa/músculo.",
            "B) Exclusivamente la glucemia en ayunas y colesterol total.",
            "C) Resultados de resonancia magnética cerebral.",
            "D) Estatura y peso ideales según tablas de seguros de 1950."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La VSG es una herramienta clínica validada que integra la historia clínica del paciente (cambios de peso, ingesta, síntomas, capacidad funcional) y la exploración física."
    },
    {
        id: 62,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En epidemiología nutricional, ¿cómo se define el término 'Transición Nutricional'?",
        opciones: [
            "A) El cambio en los patrones dietéticos y de actividad física poblacionales asociados a la urbanización, industrialización y desarrollo económico, caracterizados por el paso de dietas tradicionales a dietas hipercalóricas ricas en grasas y azúcares.",
            "B) La migración estacional de agricultores hacia zonas costeras.",
            "C) La sustitución de la lactancia materna por fórmulas en los primeros dos días de vida.",
            "D) El cambio de estación climática anual."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La transición nutricional describe la modificación radical en los perfiles de salud y dieta de las poblaciones, explicando el incremento simultáneo de obesidad y enfermedades crónicas no transmisibles."
    },
    {
        id: 63,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de servicios de alimentos, ¿qué finalidad tiene el establecimiento de un sistema de 'Control de Temperaturas de Puntos Críticos' (registros de bitácora)?",
        opciones: [
            "A) Aumentar la velocidad de cocción en estufas industriales.",
            "B) Evitar y documentar que los alimentos permanezcan en la zona de peligro térmico, garantizando la trazabilidad e inocuidad sanitaria.",
            "C) Reducir el consumo de energía eléctrica del establecimiento.",
            "D) Omitir las auditorías sanitarias gubernamentales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las bitácoras de temperatura son registros obligatorios en el sistema HACCP que prueban el control oportuno de los puntos críticos y previenen intoxicaciones alimentarias."
    },
    {
        id: 64,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué polisacárido estructural de origen vegetal, soluble en agua y con propiedades gelificantes, se utiliza ampliamente en la industria alimentaria para la elaboración de mermeladas y jaleas?",
        opciones: [
            "A) Quitina.",
            "B) Pectina.",
            "C) Glucógeno.",
            "D) Celulosa cristalina."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La pectina es una fibra soluble presente en las paredes celulares de las frutas (como manzanas y cítricos) capaz de formar geles en presencia de azúcar y ácido, ideal para mermeladas."
    },
    {
        id: 65,
        area: "Nutrición Clínica",
        pregunta: "Un paciente de 55 años con enfermedad renal crónica avanzada sometido a hemodiálisis presenta calcificaciones vasculares y prurito severo refractario. ¿Qué alteración metabólica mineral y ósea suele estar involucrada?",
        opciones: [
            "A) Hipofosfatemia severa con hipercalcemia.",
            "B) Hiperfosfatemia secundaria al deterioro en la excreción renal de fósforo, que estimula la parathormona (PTH).",
            "C) Deficiencia aislada de vitamina C.",
            "D) Exceso de potasio intracelular."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La pérdida de función renal impide la excreción de fósforo, provocando hiperfosfatemia, hipocalcemia y estimulación de la hormona paratiroidea (hiperparatiroidismo secundario), con depósito de fosfato cálcico en tejidos."
    },
    {
        id: 66,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En los programas comunitarios de lactancia materna, ¿cuál es el significado de la iniciativa 'Hospital Amigo del Niño y de la Niña' promovida por la UNICEF y la OMS?",
        opciones: [
            "A) Hospitales que obsequian fórmulas lácteas comerciales a las madres de bajos recursos.",
            "B) Establecimientos de salud que cumplen con los 'Diez Pasos hacia la Lactancia Materna', protegiendo, promoviendo y apoyando la lactancia exclusiva desde el nacimiento.",
            "C) Clínicas veterinarias autorizadas.",
            "D) Hospitales exentos de auditorías de calidad médica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La iniciativa certifica a los hospitales que aplican prácticas óptimas para el inicio temprano y mantenimiento exclusivo de la lactancia materna, prohibiendo el uso de sucedáneos."
    },
    {
        id: 67,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la limpieza y desinfección de superficies en contacto con alimentos, ¿por qué razón debe limpiarse con detergente y agua antes de aplicar una solución clorada sanitizante?",
        opciones: [
            "A) Para calentar la superficie metálica.",
            "B) Porque la materia orgánica residual (grasa y restos de alimentos) inactiva el cloro y bloquea la acción efectiva del desinfectante.",
            "C) Para evitar que la superficie se oxide de inmediato.",
            "D) Para ahorrar agua potable en el lavado final."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La materia orgánica actúa como barrera física y reacciona químicamente neutralizando los desinfectantes clorados; la limpieza previa es obligatoria antes de sanitizar."
    },
    {
        id: 68,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué tipo de ácidos grasos trans se generan predominantemente de forma industrial a través del proceso de hidrogenación parcial de aceites vegetales líquidos?",
        opciones: [
            "A) Ácidos grasos trans artificiales (como el ácido elaidico).",
            "B) Ácidos grasos cis naturales de cadena corta.",
            "C) Ácidos grasos omega-3 de origen marino.",
            "D) Triglicéridos de cadena media (TCM)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La hidrogenación parcial industrial convierte aceites insaturados líquidos en grasas semisólidas, generando ácidos grasos trans artificiales nocivos para el perfil lipídico cardiovascular."
    },
    {
        id: 69,
        area: "Nutrición Clínica",
        pregunta: "En la nutrición enteral domiciliaria por sonda de gastrostomía (PEG), ¿cuál es la medida higiénica y postural fundamental que debe adoptar el paciente durante y al menos 30 a 60 minutos después de la infusión de la fórmula para prevenir la neumonía por aspiración?",
        opciones: [
            "A) Mantenerse en decúbito supino totalmente plano.",
            "B) Elevar la cabecera de la cama entre 30° y 45°.",
            "C) Realizar ejercicio físico intenso inmediato.",
            "D) Acostarse en decúbito prono."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Elevar la cabecera de la cama a 30-45 grados previene el reflujo gastroesofágico y la microaspiración pulmonar de la fórmula enteral."
    },
    {
        id: 70,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En el análisis epidemiológico alimentario, ¿qué mide la tasa de incidencia de una enfermedad por deficiencia nutricional en una comunidad?",
        opciones: [
            "A) El número total de casos acumulados (antiguos y nuevos) en un periodo de diez años.",
            "B) El número de casos nuevos de la enfermedad que aparecen en una población en riesgo durante un periodo determinado.",
            "C) El costo monetario de los suplementos vitamínicos distribuidos.",
            "D) El porcentaje de viviendas con piso de tierra."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La incidencia evalúa exclusivamente los casos nuevos que se desarrollan en una población en riesgo durante un intervalo temporal, midiendo la velocidad de propagación o aparición del evento."
    },
    {
        id: 71,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el almacenamiento de productos alimenticios perecederos en cámaras de refrigeración, ¿cómo debe ser la distribución física para cumplir con las normas de inocuidad y evitar la contaminación cruzada?",
        opciones: [
            "A) Alimentos crudos y carnes sangrantes en las repisas superiores y alimentos cocidos o listos para consumo en las inferiores.",
            "B) Alimentos cocidos y listos para consumo en las repisas superiores, y carnes crudas en las repisas inferiores para evitar goteos sobre otros productos.",
            "C) Todo mezclado sin importar el orden dentro de cajas de cartón.",
            "D) Alimentos empacados directamente sobre el piso de la cámara."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Por norma de seguridad alimentaria, los alimentos listos para consumo van arriba y los crudos abajo, previniendo que los jugos de carnes crudas contaminen alimentos ya cocidos."
    },
    {
        id: 72,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué aminoácido condicionalmente esencial precursor del óxido nítrico juega un papel clave en la vasodilatación, función endotelial y modulación de la respuesta inmune en pacientes hipercatabólicos?",
        opciones: [
            "A) Arginina.",
            "B) Triptófano.",
            "C) Fenilalanina.",
            "D) Alanina."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La arginina es el sustrato para la síntesis de óxido nítrico, molécula señalizadora con efectos vasodilatadores e inmunomoduladores en situaciones de estrés metabólico severo."
    },
    {
        id: 73,
        area: "Nutrición Clínica",
        pregunta: "En la evaluación bioquímica del estado nutricional, ¿qué proteína visceral plasmática posee la vida media más corta (aproximadamente 2 días), lo que la convierte en un marcador sensible de cambios agudos en la respuesta inflamatoria y proteica?",
        opciones: [
            "A) Albúmina sérica.",
            "B) Prealbúmina (transtiretina).",
            "C) Transferrina sérica.",
            "D) Proteína C Reactiva."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La prealbúmina tiene una vida media de 2 días, reflejando de manera rápida y sensible las modificaciones en el aporte nutricional a corto plazo, a diferencia de la albúmina (vida media de 20 días)."
    },
    {
        id: 74,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la evaluación de la seguridad alimentaria en los hogares, ¿qué evalúa la escala mexicana de seguridad alimentaria (EMSA)?",
        opciones: [
            "A) El grado de acceso físico y económico de los hogares a los alimentos suficientes, evaluando experiencias de privación e incertidumbre.",
            "B) La cantidad exacta de calorías consumidas por cada integrante mediante calorimetría directa.",
            "C) Los balances contables fiscales de los supermercados locales.",
            "D) La calidad bacteriológica del agua de red municipal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La EMSA es una escala psicométrica basada en la experiencia de los hogares que mide la percepción de acceso, suficiencia y angustia por falta de alimentos."
    },
    {
        id: 75,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un servicio de alimentos, ¿qué indicador financiero evalúa el cociente entre el beneficio neto y las ventas totales del establecimiento?",
        opciones: [
            "A) Margen de utilidad neta.",
            "B) Rotación de personal operativo.",
            "C) Porcentaje de merma por oxidación.",
            "D) Costo bruto de materia prima."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El margen de utilidad neta expresa la rentabilidad final del negocio relacionando la ganancia neta obtenida frente al volumen total de ventas."
    },
    {
        id: 76,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué fenómeno físico-químico ocurre en los almidones cuando son calentados en presencia de agua, provocando la ruptura de los enlaces puente de hidrógeno, la hidratación de los gránulos y el aumento de la viscosidad?",
        opciones: [
            "A) Sinéresis.",
            "B) Gelatinización del almidón.",
            "C) Retrogradación cristalina.",
            "D) Rancidez oxidativa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La gelatinización es el proceso donde los gránulos de almidón absorben agua y se hinchan al calentarse, formando una estructura viscosa o engrudo."
    },
    {
        id: 77,
        area: "Nutrición Clínica",
        pregunta: "En el manejo nutricional de un paciente con síndrome de intestino corto secundario a resección masiva, ¿cuál es la complicación clínica y metabólica inicial que requiere mayor vigilancia estricta?",
        opciones: [
            "A) Hipercalcemia transitoria.",
            "B) Malabsorción severa de líquidos, electrolitos (sodio, magnesio) y nutrientes, con riesgo de diarrea osmótica y deshidratación.",
            "C) Aumento excesivo de peso por absorción acelerada.",
            "D) Insuficiencia respiratoria hipercápnica."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La pérdida masiva de superficie de absorción intestinal en el síndrome de intestino corto provoca diarrea secretora/osmótica, malabsorción de grasa, agua y electrolitos, requiriendo nutrición parenteral inicial y adaptación intestinal."
    },
    {
        id: 78,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la estrategia de atención primaria para combatir la malnutrición infantil, ¿qué evalúa la curva de crecimiento de las Cartillas Nacionales de Salud?",
        opciones: [
            "A) La velocidad de ganancia de peso y crecimiento lineal del infante en comparación con los patrones de referencia internacionales de la OMS.",
            "B) El coeficiente intelectual proyectado a los 18 años.",
            "C) El número de vacunas aplicadas en la adolescencia.",
            "D) Los ingresos económicos mensuales de los padres."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las gráficas de crecimiento de la OMS en las cartillas permiten vigilar longitudinalmente la velocidad de ganancia ponderal y estatural para detectar desviaciones nutricionales tempranas."
    },
    {
        id: 79,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de inventarios de un almacén de víveres, ¿qué representa el concepto de 'Punto de Reorden'?",
        opciones: [
            "A) El momento exacto en el que la cantidad de inventario de un insumo desciende a un nivel que obliga a emitir una nueva orden de compra antes de quedarse sin stock.",
            "B) El día de la semana en que se limpian los pisos del almacén.",
            "C) El precio máximo pagado por kilogramo de carne.",
            "D) El número de platos rotos durante el servicio."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El punto de reorden calcula el umbral mínimo de existencias en almacén que avisa la necesidad de reabastecer considerando el tiempo de entrega del proveedor."
    },
    {
        id: 80,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué componente antinutricional presente de forma natural en leguminosas crudas (como frijoles y soya) puede inhibir la acción de las enzimas tripsina y quimotripsina, interfiriendo con la digestión proteica si no son inactivados mediante cocción adecuada?",
        opciones: [
            "A) Inhibidores de proteasas (Inhibidores de tripsina).",
            "B) Ácido ascórbico libre.",
            "C) Lactosa fermentada.",
            "D) Lecitina de girasol."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los inhibidores de tripsina son factores antinutricionales termosensibles presentes en leguminosas crudas que bloquean enzimas proteolíticas; su inactivación requiere cocción térmica húmeda (olla de presión o hervor prolongado)."
    },
    {
        id: 81,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con enfermedad pulmonar obstructiva crónica (EPOC) grave con hipercapnia, ¿cómo debe ajustarse la proporción de macronutrientes en el soporte nutricional para reducir la carga ventilatoria?",
        opciones: [
            "A) Reduciendo el porcentaje de calorías provenientes de carbohidratos y aumentando el aporte de grasas para disminuir el cociente respiratorio (CR).",
            "B) Incrementando masivamente los carbohidratos simples al 80% del VET.",
            "C) Eliminando por completo las grasas de la dieta.",
            "D) Administrando proteínas al 50% del valor energético total en ayuno."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El metabolismo de los carbohidratos genera mayor producción de dióxido de carbono por molécula de oxígeno consumida (CR alto) en comparación con las grasas, por lo que reducir carbohidratos alivia el trabajo respiratorio en pacientes hipercápnicos."
    },
    {
        id: 82,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la vigilancia epidemiológica nutricional, ¿qué mide la prevalencia de la desnutrición aguda en una comunidad?",
        opciones: [
            "A) El porcentaje acumulado de muertes por causas infecciosas en adultos mayores.",
            "B) La proporción de individuos en una población que presentan bajo peso para la talla en un momento específico del tiempo.",
            "C) El promedio de estatura escolar en la infancia temprana.",
            "D) La cantidad total de toneladas de alimentos importados anualmente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La prevalencia de desnutrición aguda (bajo peso para la talla) refleja el estado nutricional actual y reciente de la población, siendo un indicador clave de emergencias alimentarias."
    },
    {
        id: 83,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "¿Qué representa el concepto de 'Punto de Equilibrio' (Break-Even Point) en la administración financiera de un servicio de alimentación institucional?",
        opciones: [
            "A) El momento en que los empleados solicitan vacaciones colectivas.",
            "B) El nivel de producción donde los costos variables superan a la utilidad neta.",
            "C) El volumen de ventas o ingresos exacto en el cual los costos totales igualan a los ingresos totales, sin generar ganancias ni pérdidas.",
            "D) El precio máximo de venta autorizado por la Secretaría de Economía."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El punto de equilibrio financiera y operativamente es el umbral donde los ingresos cubren exactamente los costos fijos y variables, representando cero utilidad y cero pérdida."
    },
    {
        id: 84,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué fenómeno químico se produce en los aceites ricos en ácidos grasos insaturados cuando se exponen al oxígeno atmosférico, la luz y el calor, generando compuestos volátiles de olor desagradable (rancidez)?",
        opciones: [
            "A) Gelatinización térmica del almidón.",
            "B) Retrogradación cristalina de amilosa.",
            "C) Reacción de Maillard no enzimática.",
            "D) Rancidez oxidativa (autooxidación lipídica)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La rancidez oxidativa es una reacción en cadena mediada por radicales libres donde el oxígeno oxida los dobles enlaces de los ácidos grasos insaturados, alterando las propiedades organolépticas."
    },
    {
        id: 85,
        area: "Nutrición Clínica",
        pregunta: "En un paciente adulto con diagnóstico de síndrome nefrótico que presenta proteinuria masiva y edema generalizado, ¿cuál es el manejo dietético proteico indicado?",
        opciones: [
            "A) Aporte proteico moderado (0.8 a 1.0 g/kg/día) que cubra los requerimientos sin exacerbar la pérdida urinaria de proteínas.",
            "B) Restricción proteica severa a 0.2 g/kg/día para detener la función renal.",
            "C) Dieta hiperproteica superior a 3.0 g/kg/día de forma indefinida.",
            "D) Ayuno absoluto de proteínas por 15 días."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En el síndrome nefrótico se recomienda un aporte proteico normoproteico o ligeramente moderado que compense parcialmente la pérdida urinaria sin estimular una mayor hiperfiltración glomerular."
    },
    {
        id: 86,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Cuál es el principal objetivo de la suplementación masiva con hierro y ácido fólico en mujeres embarazadas dentro de los programas de salud pública?",
        opciones: [
            "A) Incrementar la masa muscular de las extremidades inferiores.",
            "B) Prevenir la anemia ferropénica materna y reducir el riesgo de bajo peso al nacer y defectos del tubo neural.",
            "C) Evitar la aparición de diabetes gestacional tipo 2.",
            "D) Reducir la presión arterial sistólica de forma inmediata."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La suplementación preinconceptual y gestacional protege a la madre contra la anemia por déficit de hierro y asegura un adecuado desarrollo embrionario previniendo malformaciones."
    },
    {
        id: 87,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de servicios de alimentos, ¿qué finalidad persigue la aplicación del sistema de control de inventarios conocido como PEPS (FIFO)?",
        opciones: [
            "A) Comprar insumos únicamente en temporada de invierno.",
            "B) Almacenar productos caducados en las zonas frontales de los anaqueles.",
            "C) Asegurar que los alimentos que ingresan primero al almacén sean los primeros en utilizarse, previniendo mermas por caducidad.",
            "D) Calcular el impuesto sobre la renta de la empresa."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El método PEPS garantiza la rotación cronológica del inventario, despachando los lotes más antiguos primero para evitar pérdidas por caducidad o deterioro."
    },
    {
        id: 88,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué vitamina hidrosoluble actúa como componente esencial de las coenzimas FAD y FMN, participando directamente en las reacciones de óxido-reducción de la cadena respiratoria mitocondrial?",
        opciones: [
            "A) Vitamina B1 (Tiamina).",
            "B) Vitamina B6 (Piridoxina).",
            "C) Vitamina C (Ácido ascórbico).",
            "D) Vitamina B2 (Riboflavina)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La riboflavina (Vitamina B2) es precursora de flavin mononucleótido (FMN) y flavin adenin dinucleótido (FAD), coenzimas indispensables para el transporte de electrones y producción de ATP."
    },
    {
        id: 89,
        area: "Nutrición Clínica",
        pregunta: "En el manejo nutricional de un paciente con enfermedad inflamatoria intestinal (en fase de brote agudo de colitis ulcerosa), ¿qué característica debe tener la dieta prescrita?",
        opciones: [
            "A) Dieta baja en fibra insoluble, baja en residuos, normoproteica y fraccionada para disminuir la irritación mecánica de la mucosa intestinal inflamada.",
            "B) Dieta hiperfibras con salvado de trigo crudo en grandes porciones.",
            "C) Dieta basada exclusivamente en leguminosas enteras.",
            "D) Ayuno prolongado sin soporte nutricional por un mes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Durante los brotes agudos de colitis ulcerosa, una dieta baja en residuos y fibra insoluble minimiza el estímulo mecánico sobre la mucosa ulcerada, favoreciendo el reposo digestivo relativo."
    },
    {
        id: 90,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué indicador antropométrico se recomienda utilizar en niños escolares de 5 a 19 años para evaluar de manera estándar el sobrepeso y la obesidad según la OMS?",
        opciones: [
            "A) Perímetro braquial exclusivo.",
            "B) Índice de Masa Corporal (IMC) para la edad expresado en puntuación Z o percentiles.",
            "C) Peso absoluto en libras.",
            "D) Tasa de metabolismo basal estimada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Debido a los cambios corporales propios del crecimiento infanto-juvenil, el IMC se evalúa en relación con la edad y el sexo mediante curvas de referencia estandarizadas (puntuación Z)."
    },
    {
        id: 91,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la verificación de proveedores de alimentos, ¿qué documento técnico garantiza que un lote de carne cumple con los estándares sanitarios de sacrificio e inspección oficial en México?",
        opciones: [
            "A) Receta estándar de costos.",
            "B) Factura fiscal contable del mes anterior.",
            "C) Certificado de inspección sanitaria / sello TIF (Tipo Inspección Federal).",
            "D) Manual de identidad corporativa."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El sello TIF (Tipo Inspección Federal) avala que los establecimientos cárnicos cumplen con estrictas normas de inocuidad, sanidad y calidad para su movilización y comercialización."
    },
    {
        id: 92,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué grupo de aditivos alimentarios se utiliza en la industria para prevenir la separación de fases en emulsiones de aceite en agua (como en aderezos o margarinas)?",
        opciones: [
            "A) Edulcorantes artificiales intensos.",
            "B) Colorantes sintéticos azoicos.",
            "C) Antioxidantes fenólicos sintéticos.",
            "D) Emulsificantes (agentes tensoactivos como la lecitina)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los emulsificantes poseen una porción hidrofílica y otra lipofílica, permitiendo estabilizar mezclas heterogéneas de agua y aceite evitando su separación."
    },
    {
        id: 93,
        area: "Nutrición Clínica",
        pregunta: "En un paciente adulto con pancreatitis aguda leve en su segundo día de evolución con tolerancia gástrica presente, ¿cuál es la conducta nutricional recomendada actual basada en la evidencia?",
        opciones: [
            "A) Iniciar de forma temprana la alimentación oral con una dieta baja en grasa y residuos según tolerancia.",
            "B) Mantener ayuno absoluto estricto por vía oral durante al menos 3 semanas.",
            "C) Administrar exclusivamente nutrición parenteral total periférica.",
            "D) Inducir la ingesta de triglicéridos de cadena larga puros."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las guías clínicas actuales recomiendan iniciar la vía oral de forma temprana en pancreatitis leve tan pronto como desaparezca el dolor abdominal y haya tolerancia, reduciendo la estancia hospitalaria."
    },
    {
        id: 94,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué término epidemiológico describe la presencia constante y habitual de una enfermedad o trastorno nutricional en una zona geográfica específica a lo largo del tiempo?",
        opciones: [
            "A) Epidemia transitoria.",
            "B) Endemia.",
            "C) Pandemia global.",
            "D) Brote estacional agudo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una endemia se caracteriza por la permanencia prolongada de una patología o condición de salud en una región determinada con tasas estables."
    },
    {
        id: 95,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de servicios de alimentos, ¿cómo se define el concepto de 'Merma' de alimentos?",
        opciones: [
            "A) El incremento de peso por absorción de agua durante el almacenamiento.",
            "B) La ganancia neta obtenida por la venta de platillos ejecutivos.",
            "C) La pérdida de peso, volumen o valor económico de un producto alimenticio debido a desperdicios, limpieza, cocción o descomposición.",
            "D) El salario neto pagado a los cocineros auxiliares."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La merma representa las pérdidas físicas o económicas que sufre la materia prima desde su adquisición hasta su servicio final al comensal."
    },
    {
        id: 96,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué mineral traza forma parte estructural de la enzima superóxido dismutasa (SOD) citosólica y de la anhidrasa carbónica, interviniendo en la cicatrización de heridas y la función inmune?",
        opciones: [
            "A) Hierro.",
            "B) Yodo.",
            "C) Selenio.",
            "D) Cinc (Zinc)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El cinc es un cofactor metálico indispensable para cientos de metaloproteinasas, destacando su rol en la división celular, síntesis de ADN, inmunidad y cicatrización."
    },
    {
        id: 97,
        area: "Nutrición Clínica",
        pregunta: "¿Cuál es el propósito fundamental del tratamiento médico nutricional en un paciente con error innato del metabolismo como la galactosemia clásica?",
        opciones: [
            "A) Exclusión estricta de la dieta de la lactosa y galactosa en cualquiera de sus formas comerciales.",
            "B) Aumento del consumo de leche entera de vaca.",
            "C) Suplementación con altas dosis de galactosa pura en polvo.",
            "D) Incremento de azúcares reductores en fórmulas lácteas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La galactosemia clásica impide metabolizar la galactosa por déficit de la enzima galactosa-1-fosfato uridiltransferasa, requiriendo su exclusión estricta para prevenir daño hepático y neurológico."
    },
    {
        id: 98,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En los estudios dietéticos poblacionales, ¿qué ventaja metodológica ofrece la aplicación de un cuestionario de 'Frecuencia de Consumo de Alimentos' (CFCA)?",
        opciones: [
            "A) Mide con precisión absoluta los gramos exactos consumidos en el almuerzo de ayer.",
            "B) Permite estimar los hábitos habituales de consumo alimentario y la exposición cualitativa a determinados grupos de alimentos en largos periodos.",
            "C) Sustituye por completo la toma de muestras bioquímicas de sangre.",
            "D) Es un método estrictamente invasivo de laboratorio clínico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El cuestionario de frecuencia de consumo evalúa patrones dietéticos a largo plazo, siendo ideal para estudios epidemiológicos de asociación entre dieta y enfermedades crónicas."
    },
    {
        id: 99,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un servicio de alimentos institucional, ¿qué mide específicamente el indicador financiero conocido como 'Costo por Ración Servida'?",
        opciones: [
            "A) El número de horas que descansa el personal de cocina al día.",
            "B) El costo total de los servicios de electricidad y agua potable.",
            "C) El valor monetario de la materia prima e insumos invertidos para elaborar una porción individual de alimento entregada al comensal.",
            "D) El porcentaje de ganancia neta anual de la empresa."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El costo por ración es la métrica clave para conocer el valor exacto de insumos requeridos por cada plato servido, permitiendo fijar precios de venta y presupuestos."
    },
    {
        id: 100,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué compuesto orgánico nitrogenado no proteico presente en la carne de animales se utiliza frecuentemente como indicador químico de frescura o deterioro incipiente en productos cárnicos almacenados?",
        opciones: [
            "A) Almidón modificado de maíz.",
            "B) Sacarosa cristalina pura.",
            "C) Celulosa microcristalina.",
            "D) Bases volátiles totales (como el nitrógeno amoniacal y trimetilamina)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El incremento de bases volátiles totales indica descomposición proteica y proliferación bacteriana en carnes almacenadas, sirviendo como parámetro analítico de frescura."
    },
    {
        id: 101,
        area: "Nutrición Clínica",
        pregunta: "En un paciente adulto con diagnóstico de síndrome metabólico, ¿cuál es una meta terapéutica nutricional inicial prioritaria respecto a la reducción ponderal?",
        opciones: [
            "A) Lograr una pérdida del 5% al 10% del peso corporal inicial en un periodo de 6 meses de forma gradual.",
            "B) Disminuir el 50% del peso corporal total en las primeras dos semanas.",
            "C) Mantener un estado de cetosis permanente sin importar la pérdida de masa magra.",
            "D) Inducir la ganancia de peso a expensas de tejido adiposo visceral."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una pérdida ponderal moderada pero sostenida del 5 al 10% mejora marcadamente la sensibilidad a la insulina, la presión arterial y el perfil lipídico en el síndrome metabólico."
    },
    {
        id: 102,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué indicador demográfico y de salud pública relaciona el número de defunciones de niños menores de un año por cada 1,000 nacidos vivos en un año determinado?",
        opciones: [
            "A) Tasa de mortalidad materna.",
            "B) Tasa de mortalidad infantil.",
            "C) Esperanza de vida al nacer.",
            "D) Tasa de incidencia de diabetes gestacional."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tasa de mortalidad infantil es un indicador sensible del nivel socioeconómico, desarrollo sanitario y efectividad de los programas materno-infantiles de un país."
    },
    {
        id: 103,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la gestión de calidad higiénica de un restaurante, ¿cómo se define el concepto de 'Contaminación Cruzada'?",
        opciones: [
            "A) La mezcla accidental de ingredientes de diferentes costos en el almacén de secos.",
            "B) El transporte de alimentos en vehículos con aire acondicionado.",
            "C) La transferencia de agentes contaminantes (bacterias, alérgenos o sustancias químicas) desde un alimento crudo, superficie o manipulador hacia un alimento listo para consumo.",
            "D) El retraso en la entrega de proveedores mayoristas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La contaminación cruzada es el mecanismo principal de transmisión de patógenos en cocinas cuando utensilios o alimentos crudos entran en contacto con productos preparados."
    },
    {
        id: 104,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué proceso tecnológico de conservación de alimentos somete al producto a presiones hidrostáticas sumamente elevadas (hasta 600 MPa) para inactivar microorganismos patógenos y enzimas sin requerir altas temperaturas?",
        opciones: [
            "A) Esterilización térmica UHT en autoclaves.",
            "B) Deshidratación osmótica al vacío.",
            "C) Liofilización por sublimación.",
            "D) Altas Presiones Hidrostáticas (HPP - High Pressure Processing)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El procesamiento por altas presiones hidrostáticas (HPP) destruye microorganismos mediante presión física isostática respetando las propiedades nutricionales y organolépticas frescas."
    },
    {
        id: 105,
        area: "Nutrición Clínica",
        pregunta: "¿Cuál es el propósito fundamental de administrar triglicéridos de cadena media (TCM) en lugar de triglicéridos de cadena larga (TCL) en pacientes con trastornos graves de malabsorción intestinal o insuficiencia linfática?",
        opciones: [
            "A) Los TCM no requieren de la formación de micelas con sales biliares ni de quilomicrones para su absorción, pasando directamente a la circulación portal.",
            "B) Los TCM contienen el doble de calorías por gramo que los carbohidratos complejos.",
            "C) Los TCM estimulan la secreción pancreática exocrina al máximo nivel.",
            "D) Los TCM son insolubles en agua y se almacenan en el tejido adiposo subcutáneo sin metabolizarse."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los TCM se absorben directamente por la mucosa intestinal hacia la vena porta sin precisar sales biliares ni reesterificación en quilomicrones, facilitando su asimilación en malabsorción."
    },
    {
        id: 106,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la metodología de la evaluación dietética poblacional, ¿en qué consiste la técnica de 'Recordatorio de 24 Horas' (R24h)?",
        opciones: [
            "A) Un registro prospectivo de alimentos pesados con báscula durante 7 días consecutivos.",
            "B) Una entrevista estructurada donde se solicita al individuo que detalle absolutamente todos los alimentos y bebidas consumidos durante el día anterior o las 24 horas previas.",
            "C) Una prueba de laboratorio de tolerancia a la glucosa intravenosa.",
            "D) Un cuestionario cerrado sobre frecuencia de consumo histórico anual."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El R24h es una herramienta retrospectiva detallada que recopilando ingestas recientes permite estimar consumos grupales promedio en encuestas nacionales."
    },
    {
        id: 107,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En el diseño operativo de un comedor escolar, ¿qué función cumple un diagrama de flujo de procesos en la cocina?",
        opciones: [
            "A) Representar la jerarquía salarial de los cocineros.",
            "B) Calcular los impuestos anuales sobre la nómina.",
            "C) Visualizar de forma secuencial y gráfica cada una de las etapas de elaboración de los alimentos para identificar posibles puntos críticos de control y demoras.",
            "D) Controlar el acceso electrónico de los proveedores a las oficinas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El diagrama de flujo permite mapear cada fase operativa (recepción, almacenamiento, preparación, servicio) para optimizar tiempos y asegurar la inocuidad."
    },
    {
        id: 108,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué proteína mayoritaria de la leche representa aproximadamente el 80% del total proteico y precipita a un pH de 4.6 formando cuajada o requesón?",
        opciones: [
            "A) Lactoglobulina sérica.",
            "B) Lactoalbúmina.",
            "C) Inmunoglobulina bovina.",
            "D) Caseína."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las caseínas son las proteínas fosfoproteicas principales de la leche, las cuales precipitan al descender el pH isoeléctrico a 4.6, base de la producción de quesos."
    },
    {
        id: 109,
        area: "Nutrición Clínica",
        pregunta: "En un paciente adulto con diagnóstico de disfagia orofaríngea severa diagnosticada por videofluoroscopia, ¿cuál es la consistencia de líquidos recomendada según los estándares internacionales IDDSI para minimizar el riesgo de aspiración pulmonar?",
        opciones: [
            "A) Líquidos espesados (nivel néctar, miel o puré según la severidad).",
            "B) Líquidos completamente claros y fluidos (agua simple sin modificar).",
            "C) Bebidas carbonatadas con gas a presión.",
            "D) Soluciones hipertónicas frías."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El marco IDDSI estandariza la modificación de la viscosidad en líquidos para pacientes con disfagia, otorgando mayor control neuromuscular y previniendo la aspiración traqueal."
    },
    {
        id: 110,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué vitamina hidrosoluble, cuya deficiencia clínica produce beriberi o síndrome de Wernicke-Korsakoff en pacientes con alcoholismo crónico, actúa como coenzima (pirofosfato de tiamina) en el metabolismo de carbohidratos?",
        opciones: [
            "A) Vitamina B12 (Cobalamina).",
            "B) Vitamina B1 (Tiamina).",
            "C) Niacina (Vitamina B3).",
            "D) Ácido fólico (Vitamina B9)."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tiamina (Vitamina B1) es crucial como coenzima en descarboxilasas del metabolismo energético; el alcohol inhibe su absorción intestinal precipitando alteraciones neurológicas graves."
    },
    {
        id: 111,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de servicios de alimentación, ¿cómo se define el término 'Merma de Almacén' por caducidad vencida?",
        opciones: [
            "A) La ganancia obtenida por la venta de excedentes de temporada.",
            "B) El incremento en el valor comercial de los productos almacenados.",
            "C) La pérdida económica y física de insumos que han superado su fecha de consumo preferente o caducidad sin haber sido utilizados.",
            "D) El costo de mantenimiento de los equipos de refrigeración."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La merma por caducidad refleja fallas en la rotación del inventario (PEPS) o en la estimación de compras, impactando negativamente la rentabilidad financiera."
    },
    {
        id: 112,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué compuesto fitoquímico presente en vegetales crucíferos (como el brócoli y la col) es considerado un precursor de sulforafano, reconocido por sus propiedades antioxidantes y de modulación enzimática desintoxicante?",
        opciones: [
            "A) Capsacicina pura.",
            "B) Betalaína roja.",
            "C) Curcumina sintética.",
            "D) Glucosinolatos (Glucorafanina)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los glucosinolatos presentes en las crucíferas se hidrolizan por acción de la mirosinasa liberando sulforafano, compuesto bioactivo con fuerte actividad antioxidante celular."
    },
    {
        id: 113,
        area: "Nutrición Clínica",
        pregunta: "En un paciente con insuficiencia renal crónica sometido a diálisis peritoneal ambulatoria continua (DPAC), ¿por qué razón suele requerirse un mayor aporte proteico en comparación con el paciente en hemodiálisis?",
        opciones: [
            "A) Debido a las pérdidas continuas de proteínas y aminoácidos libres a través de la membrana peritoneal durante el recambio de líquido de diálisis.",
            "B) Porque la diálisis peritoneal incrementa la síntesis de masa grasa subcutánea.",
            "C) Para compensar la falta absoluta de absorción intestinal de agua.",
            "D) Debido a que el paciente en DPAC no consume carbohidratos complejos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El proceso de diálisis peritoneal remueve continuamente aminoácidos y proteínas plasmáticas a través del peritoneo, obligando a incrementar la prescripción proteica diaria (1.2-1.3 g/kg/día)."
    },
    {
        id: 114,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "En la evaluación antropométrica de poblaciones infantiles, ¿cómo se interpreta una puntuación Z de Talla para la Edad menor a -2 Desviaciones Estándar (DE)?",
        opciones: [
            "A) Presencia de sobrepeso infantil agudo.",
            "B) Retraso en el crecimiento o baja talla para la edad (desnutrición crónica).",
            "C) Emaciación severa por pérdida de peso reciente.",
            "D) Peso adecuado para la estatura actual."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una estatura baja para la edad menor a -2 DE denota restricción prolongada del crecimiento longitudinal, indicativa de desnutrición crónica acumulada."
    },
    {
        id: 115,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En un comedor industrial, ¿qué utilidad tiene el cálculo del 'Factor de Rendimiento' (o Factor de Corrección) de las verduras y carnes compradas?",
        opciones: [
            "A) Establecer el horario laboral nocturno de los repartidores.",
            "B) Calcular los impuestos municipales prediales del local.",
            "C) Determinar la cantidad real de materia prima bruta que se debe adquirir para obtener el peso neto comestible requerido tras descontar monda y desperdicios.",
            "D) Modificar los precios de venta al público según la tasa de inflación bancaria."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El factor de corrección permite planificar compras exactas al relacionar el peso bruto con el peso neto útil tras procesar las mondas y mermas naturales."
    },
    {
        id: 116,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué enzima de origen vegetal, presente en la papaya (carica papaya), se utiliza industrialmente como ablandador cárnico al hidrolizar las fibras de colágeno y miosina de la carne?",
        opciones: [
            "A) Pepsina gástrica bovina.",
            "B) Lipasa pancreática.",
            "C) Amilasa salival (ptialina).",
            "D) Papaína."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La papaína es una proteasa vegetal capaz de romper los enlaces peptídicos de las proteínas estructurales del tejido conectivo cárnico, ablandando la textura."
    },
    {
        id: 117,
        area: "Nutrición Clínica",
        pregunta: "En el soporte nutricional de un paciente con encefalopatía hepática aguda grave refractaria, ¿cuál es el fundamento del uso de fórmulas enterales enriquecidas con aminoácidos de cadena ramificada (BCAA: leucina, isoleucina, valina)?",
        opciones: [
            "A) Mejorar el perfil de aminoácidos plasmáticos disminuyendo los aminoácidos aromáticos que atraviesan la barrera hematoencefálica, reduciendo los síntomas de encefalopatía.",
            "B) Incrementar los niveles circulantes de fenilalanina libre en el cerebro.",
            "C) Sustituir por completo la necesidad de agua libre intracelular.",
            "D) Acelerar la síntesis de colesterol hepático."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "En insuficiencia hepática, los BCAA compiten con los aminoácidos aromáticos por el transportador en la barrera hematoencefálica, disminuyendo la formación de falsos neurotransmisores."
    },
    {
        id: 118,
        area: "Salud Pública y Nutrición Comunitaria",
        pregunta: "¿Qué tipo de estudio epidemiológico evalúa en un solo momento del tiempo la prevalencia de una enfermedad o condición nutricional y su posible asociación con factores de exposición en una población?",
        opciones: [
            "A) Estudio de cohortes prospectivo a 10 años.",
            "B) Estudio transversal (o de prevalencia).",
            "C) Ensayo clínico controlado aleatorizado doble ciego.",
            "D) Estudio de casos y controles retrospectivo histórico."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El estudio transversal analiza simultáneamente la exposición y el evento en una muestra poblacional en un único corte temporal."
    },
    {
        id: 119,
        area: "Gestión de Servicios de Alimentación",
        pregunta: "En la administración de servicios de alimentación, ¿qué comprende el proceso de 'Estandarización de Porciones'?",
        opciones: [
            "A) Cambiar el tamaño de los platos diariamente según el clima.",
            "B) Servir porciones al azar dependiendo del apetito del cocinero en turno.",
            "C) Utilizar utensilios medidores específicos (cucharas, cucharones, básculas) para garantizar que cada platillo servido mantenga un peso, volumen y contenido nutricional idéntico.",
            "D) Omitir el uso de vajilla en el área de comedores ejecutivos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La estandarización de porciones asegura uniformidad en la calidad entregada al comensal, control riguroso de costos y satisfacción del cliente."
    },
    {
        id: 120,
        area: "Tecnología de Alimentos y Bromatología",
        pregunta: "¿Qué fenómeno físico se produce en los alimentos congelados cuando se almacenan a temperaturas fluctuantes, provocando la recristalización del hielo y la pérdida de jugosidad tisular al descongelar?",
        opciones: [
            "A) Aumento inmediato de la vitamina C natural.",
            "B) Caramelización enzimática de la lactosa.",
            "C) Polimerización instantánea de aminoácidos esenciales.",
            "D) Crecimiento de los cristales de hielo internos que dañan las paredes celulares, generando sinéresis y pérdida de exudado."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las fluctuaciones térmicas de congelación favorecen la unión de pequeños cristales en cristales grandes, rompiendo membranas celulares y provocando exudación al descongelar."
    }
];
