const bancoPreguntas = [
    {
        id: 1,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Cuál es el biomarcador sérico de elección que muestra mayor sensibilidad y especificidad temprana para el diagnóstico de infarto agudo de miocardio?",
        opciones: [
            "A) Creatina cinasa total (CK)", 
            "B) Troponina T e I de alta sensibilidad", 
            "C) Mioglobina", 
            "D) Aspartato aminotransferasa (AST)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las troponinas cardíacas T e I de alta sensibilidad son los marcadores de necrosis miocárdica estándar de oro debido a su alta especificidad y sensibilidad, detectándose en sangre pocas horas después de la lesión."
    },
    {
        id: 2,
        area: "Química Clínica y Patología Molecular",
        pregunta: "En la evaluación de la función renal, ¿qué parámetro se considera el indicador más fiable de la tasa de filtración glomerular (TFG) estimada en la práctica clínica rutinaria?",
        opciones: ["A) Urea sérica", "B) Depuración de creatinina en orina de 24 horas", "C) Creatinina sérica combinada con ecuaciones basadas en Cistatina C o CKD-EPI", "D) Ácido úrico plasmático"],
        respuestaCorrecta: 2,
        explicacion: "Las ecuaciones basadas en creatinina sérica y/o Cistatina C utilizando la fórmula CKD-EPI permiten estimar la TFG de manera precisa sin los errores de recolección de orina de 24 horas."
    },
    {
        id: 3,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Qué alteración ácido-base se espera encontrar en un paciente con intoxicación aguda por salicilatos (aspirina) en fase temprana?",
        opciones: ["A) Acidosis metabólica con brecha aniónica aumentada", "B) Alcalosis respiratoria primaria por estimulación del centro respiratorio", "C) Acidosis respiratoria por depresión del sistema nervioso central", "D) Alcalosis metabólica por pérdida de ácidos gástricos"],
        respuestaCorrecta: 1,
        explicacion: "Los salicilatos estimulan directamente el centro respiratorio bulbar, provocando hiperventilación e hipocapnia subsiguiente, manifestándose inicialmente como alcalosis respiratoria primaria."
    },
    {
        id: 4,
        area: "Química Clínica y Patología Molecular",
        pregunta: "Un paciente con ictericia obstructiva presenta elevación marcada de bilirrubina directa, así como de las enzimas:",
        opciones: ["A) AST y ALT", "B) Fosfatasa alcalina (FA) y Gamma-glutamil transferasa (GGT)", "C) Amilasa y lipasa", "D) Creatina cinasa y deshidrogenasa láctica"],
        respuestaCorrecta: 1,
        explicacion: "La colestasis o ictericia obstructiva causa daño en el epitelio biliar, lo que provoca la liberación al torrente sanguíneo de fosfatasa alcalina y GGT de manera concomitante con la hiperbilirrubinemia directa."
    },
    {
        id: 5,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Cuál es el mecanismo fisiopatológico principal que genera una brecha aniónica (anion gap) sérica aumentada en la cetoacidosis diabética?",
        opciones: ["A) Pérdida renal de bicarbonato", "B) Acumulación de ácidos orgánicos como acetoacetato y beta-hidroxibutirato", "C) Retención primaria de dióxido de carbono", "D) Hipocalcemia severa"],
        respuestaCorrecta: 1,
        explicacion: "En la cetoacidosis diabética, la deficiencia de insulina induce lipólisis y cetogénesis, acumulando cetoácidos que consumen el bicarbonato sérico y aumentan la brecha aniónica."
    },
    {
        id: 6,
        area: "Química Clínica y Patología Molecular",
        pregunta: "En el perfil lipídico, ¿cómo se calcula la concentración de colesterol de lipoproteínas de baja densidad (C-LDL) utilizando la fórmula de Friedewald?",
        opciones: ["A) C-Total - (C-HDL + Triglicéridos)", "B) C-Total - (C-HDL + [Triglicéridos / 5])", "C) C-Total - C-HDL - (Triglicéridos x 2.2)", "D) (C-Total / 2) - C-HDL"],
        respuestaCorrecta: 1,
        explicacion: "La fórmula de Friedewald estima el C-LDL restando al colesterol total la suma del C-HDL y el valor de triglicéridos dividido entre 5 (el cual representa una estimación del colesterol unido a VLDL en mg/dL)."
    },
    {
        id: 7,
        area: "Química Clínica y Patología Molecular",
        pregunta: "Una disminución drástica de la pseudocolinesterasa sérica (butirilcolinesterasa) es un indicador útil para evaluar:",
        opciones: ["A) Insuficiencia hepática aguda o intoxicación por organofosforados", "B) Daño miocárdico agudo", "C) Insuficiencia renal crónica terminal", "D) Anemia ferropénica severa"],
        respuestaCorrecta: 0,
        explicacion: "La pseudocolinesterasa es sintetizada en el hígado; su caída severa indica pérdida de la función sintética hepática o inhibición enzimática por plaguicidas organofosforados o carbamatos."
    },
    {
        id: 8,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Cuál es la prueba de laboratorio ideal para el monitoreo a largo plazo (últimos 2 a 3 meses) del control glucémico en pacientes con diabetes mellitus?",
        opciones: ["A) Glucemia de ayuno", "B) Curva de tolerancia oral a la glucosa", "C) Hemoglobina glicosilada (HbA1c)", "D) Medición de frutosamina"],
        respuestaCorrecta: 2,
        explicacion: "La HbA1c refleja la concentración promedio de glucosa en sangre durante los 120 días previos (vida media de los eritrocitos), siendo el estándar de oro para el control metabólico crónico."
    },
    {
        id: 9,
        area: "Química Clínica y Patología Molecular",
        pregunta: "En un perfil tiroideo, el hallazgo de TSH disminuida acompañado de T4 libre y T3 libre elevadas es característico de:",opciones: ["A) Hipotiroidismo primario", "B) Hipertiroidismo primario (Enfermedad de Graves)", "C) Hipotiroidismo secundario o central", "D) Síndrome de enfermedad eutiroidea"],
        respuestaCorrecta: 1,
        explicacion: "En el hipertiroidismo primario, la glándula tiroides produce exceso de hormonas tiroideas (T4 y T3 altas), lo que ejerce retroalimentación negativa sobre la hipófisis, suprimiendo la secreción de TSH."
    },
    {
        id: 10,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Qué enzima se eleva de manera más específica y se mantiene alta durante más tiempo en la pancreatitis aguda en comparación con la amilasa?",
        opciones: ["A) Lipasa sérica", "B) Transaminasa pirúvica", "C) Fosfatasa ácida", "D) Creatina cinasa MB"],
        respuestaCorrecta: 0,
        explicacion: "La lipasa sérica tiene mayor sensibilidad y especificidad para pancreatitis aguda que la amilasa, además de permanecer elevada por un período más prolongado (hasta 14 días)."
    },
    {
        id: 11,
        area: "Hematología y Coagulación",
        pregunta: "En una biometría hemática completa, el índice eritrocitario que indica el volumen promedio de los eritrocitos (expresado en femtolitros, fL) es:",
        opciones: ["A) Hemoglobina corpuscular media (HCM)", "B) Volumen corpuscular medio (VCM)", "C) Concentración media de hemoglobina corpuscular (CMHC)", "D) Ancho de distribución eritrocitaria (ADE o RDW)"],
        respuestaCorrecta: 1,
        explicacion: "El Volumen Corpuscular Medio (VCM) mide el tamaño promedio de los glóbulos rojos y permite clasificar las anemias en microcíticas, normocíticas o macrocíticas."
    },
    {
        id: 12,
        area: "Hematología y Coagulación",
        pregunta: "La presencia de esquistocitos (esferocitos fragmentados) en un frotis de sangre periférica es el sello distintivo de:",
        opciones: ["A) Anemia megaloblástica", "B) Anemia hemolítica microangiopática (AHMA)", "C) Talasemia mayor", "D) Anemia aplásica"],
        respuestaCorrecta: 1,
        explicacion: "Los esquistocitos son fragmentos de eritrocitos generados por daño mecánico al pasar por la microvasculatura ocluida por fibrina, característicos de padecimientos como la PTT y el SHU."
    },
    {
        id: 13,
        area: "Hematología y Coagulación",
        pregunta: "Prueba de laboratorio utilizada específicamente para evaluar la vía extrínseca y común de la coagulación, estandarizada mediante el cálculo del RIN (INR):",
        opciones: ["A) Tiempo de Tromboplastina Parcial Activada (TTPa)", "B) Tiempo de Protrombina (TP)", "C) Tiempo de Trombina (TT)", "D) Cuantificación de Fibrinógeno"],
        respuestaCorrecta: 1,
        explicacion: "El Tiempo de Protrombina (TP) evalúa los factores VII, V, X, II y fibrinógeno (vía extrínseca y común), siendo fundamental para el monitoreo de anticoagulantes orales antivitamina K."
    },
    {
        id: 14,
        area: "Hematología y Coagulación",
        pregunta: "¿Qué alteración hematológica en la serie roja se asocia comúnmente con la deficiencia de vitamina B12 o ácido fólico?",
        opciones: ["A) Anemia microcítica hipocrómica", "B) Anemia normocítica normocrómica", "C) Anemia macrocítica megaloblástica", "D) Anemia ferropénica"],
        respuestaCorrecta: 2,
        explicacion: "La deficiencia de folatos o cobalamina altera la síntesis de ADN celular, generando una hematopoyesis ineficaz con presencia de precursores gigantes (megaloblastos) y eritrocitos grandes (macrocíticos)."
    },
    {
        id: 15,
        area: "Hematología y Coagulación",
        pregunta: "¿Cuál es el marcador de laboratorio clave para diferenciar una anemia por deficiencia de hierro (ferropénica) de la anemia por enfermedad crónica (inflamatoria)?",
        opciones: ["A) Concentración de hemoglobina", "B) Ferritina sérica", "C) Conteo de reticulocitos", "D) Recuento total de leucocitos"],
        respuestaCorrecta: 1,
        explicacion: "La ferritina sérica se encuentra disminuida en la anemia ferropénica (reflejando depósitos vacíos de hierro), mientras que está normal o elevada en la anemia de la inflamación debido a la retención de hierro mediada por hepcidina."
    },
    {
        id: 16,
        area: "Hematología y Coagulación",
        pregunta: "En la hemostasia, ¿cuál es la función principal del factor de von Willebrand (FvW)?",
        opciones: ["A) Polimerizar la red de fibrina", "B) Activar el factor XIII para la estabilización del coágulo", "C) Facilitar la adhesión plaquetaria al subendotelio dañado y actuar como transportador del factor VIII", "D) Inhibir la activación excesiva de la trombina"],
        respuestaCorrecta: 2,
        explicacion: "El factor de von Willebrand se une al colágeno expuesto y a los receptores plaquetarios GPIb, permitiendo la adhesión inicial de las plaquetas, además de proteger al factor VIII de la degradación plasmática."
    },
    {
        id: 17,
        area: "Hematología y Coagulación",
        pregunta: "¿Qué hallazgo morfológico en el frotis de sangre periférica es característico de las talasemias y anemias sideroblásticas?",
        opciones: ["A) Células en diana (leptocitos)", "B) Cuerpos de Howell-Jolly", "C) Dacriocitos", "D) Células en hoz (drepanocitos)"],
        respuestaCorrecta: 0,
        explicacion: "Las células en diana reflejan un exceso relativo de membrana celular en relación con el contenido de hemoglobina, clásicamente observadas en hemoglobinopatías y talasemias."
    },
    {
        id: 18,
        area: "Hematología y Coagulación",
        pregunta: "La prueba de resistencia osmótica eritrocitaria se utiliza principalmente para el diagnóstico de:",
        opciones: ["A) Esferocitosis hereditaria", "B) Deficiencia de glucosa-6-fosfato deshidrogenasa", "C) Hemoglobinuria paroxística nocturna", "D) Drepanocitosis"],
        respuestaCorrecta: 0,
        explicacion: "En la esferocitosis hereditaria, los eritrocitos pierden superficie de membrana y se vuelven esféricos, lo que los hace altamente susceptibles a la lisis en soluciones salinas hipotónicas."
    },
    {
        id: 19,
        area: "Hematología y Coagulación",
        pregunta: "¿Qué indica un recuento de reticulocitos corregido elevado (> 2%) en un paciente con anemia normocítica?",
        opciones: ["A) Falla medular primaria (anemia aplásica)", "B) Una respuesta eritropoyética medular adecuada ante hemólisis o hemorragia aguda", "C) Deficiencia severa de eritropoyetina renal", "D) Infiltración neoplásica de la médula ósea"],
        respuestaCorrecta: 1,
        explicacion: "Un aumento en los reticulocitos demuestra que la médula ósea responde adecuadamente aumentando la producción de glóbulos rojos, lo cual descarta falla medular y sugiere hemólisis periférica o sangrado."
    },
    {
        id: 20,
        area: "Hematología y Coagulación",
        pregunta: "En los trastornos de la coagulación, la presencia de sangrado prolongado con recuento plaquetario normal, TP normal y TTPa prolongado sugiere una deficiencia en los factores de la vía:",
        opciones: ["A) Extrínseca (Factor VII)", "B) Intrínseca (Factores VIII, IX, XI o XII)", "C) Común exclusivamente", "D) Plaquetaria primaria"],
        respuestaCorrecta: 1,
        explicacion: "El TTPa evalúa la vía intrínseca y común. Una prolongación aislada de esta prueba con TP normal apunta a deficiencias de factores como el VIII (Hemofilia A) o IX (Hemofilia B)."
    },
    {
        id: 21,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Cuál es el medio de cultivo selectivo y diferencial de elección para el aislamiento de enteropatógenos gramnegativos como *Salmonella* y *Shigella* a partir de muestras fecales?",
        opciones: ["A) Agar sangre de carnero", "B) Agar MacConkey y Agar XLD (Xilosa Lisina Desoxicolato)", "C) Caldo selenito", "D) Agar Sabouraud"],
        respuestaCorrecta: 1,
        explicacion: "El agar MacConkey es selectivo para gramnegativos y diferencial para lactosa, mientras que el agar XLD es altamente específico para diferenciar colonias de *Salmonella* (productoras de SH2) y *Shigella*."
    },
    {
        id: 22,
        area: "Microbiología y Parasitología Médica",
        pregunta: "La prueba de la oxidasa es fundamental en bacteriología clínica para diferenciar rápidamente a la familia *Enterobacteriaceae* (que son oxidasa negativas) de:",
        opciones: ["A) Bacilos gramnegativos no fermentadores como *Pseudomonas aeruginosa*", "B) Cocos grampositivos como *Staphylococcus aureus*", "C) Bacterias anaerobias estrictas", "D) Bacilos grampositivos esporulados"],
        respuestaCorrecta: 0,
        explicacion: "La prueba de la oxidasa detecta la presencia de citocromo c oxidasa. Las enterobacterias dan negativas, mientras que bacilos como *Pseudomonas*, *Vibrio* y *Neisseria* dan positivos."
    },
    {
        id: 23,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Qué microorganismo es el agente causal más frecuente de infecciones de vías urinarias (IVU) no complicadas adquiridas en la comunidad?",
        opciones: ["A) *Klebsiella pneumoniae*", "B) *Proteus mirabilis*", "C) *Escherichia coli* uropatógena (UPEC)", "D) *Pseudomonas aeruginosa*"],
        respuestaCorrecta: 2,
        explicacion: "La *Escherichia coli* uropatógena es responsable de aproximadamente el 80-85% de las infecciones urinarias adquiridas en la comunidad, gracias a sus factores de virulencia como fimbrias y adhesinas."
    },
    {
        id: 24,
        area: "Microbiología y Parasitología Médica",
        pregunta: "Para la tinción y visualización microscópica de micobacterias como *Mycobacterium tuberculosis*, el método colorante diferencial estándar empleado es:",
        opciones: ["A) Tinción de Gram", "B) Tinción de Ziehl-Neelsen (ácido-alcohol resistencia)", "C) Tinción de Leifson para flagelos", "D) Tinción de azul de metileno"],
        respuestaCorrecta: 1,
        explicacion: "La pared celular de las micobacterias contiene ácidos micólicos de cadena larga que confieren resistencia a la decoloración por alcohol-ácido tras la tinción con fucsina fenicada (Ziehl-Neelsen)."
    },
    {
        id: 25,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Cuál es el método de referencia (gold standard) in vitro para determinar la susceptibilidad antimicrobiana de cepas bacterianas aisladas?",
        opciones: ["A) Método de difusión en placa con tiras de E-test", "B) Método de dilución en caldo o agar (concentración mínima inhibitoria, CMI)", "C) Prueba de coagulasa en portaobjetos", "D) Hemaglutinación indirecta"],
        respuestaCorrecta: 1,
        explicacion: "La determinación de la Concentración Mínima Inhibitoria (CMI) por el método de macro o microdilución en caldo es el estándar cuantitativo de referencia para evaluar la sensibilidad antibiótica."
    },
    {
        id: 26,
        area: "Microbiología y Parasitología Médica",
        pregunta: "En el diagnóstico parasitológico de heces, la técnica de concentración por centrifugación con formalina-éter (Ritchie) se utiliza principalmente para recuperar:",
        opciones: ["A) Trofozoítos móviles de amibas", "B) Quistes de protozoarios y huevos o larvas de helmintos", "C) Bacterias entéricas viables", "D) Fragmentos de mucosidad intestinal"],
        respuestaCorrecta: 1,
        explicacion: "La técnica de concentración de Ritchie (sedimentación) permite concentrar quistes de protozoarios y helmintos, eliminando los detritos fecales para facilitar su observación microscópica."
    },
    {
        id: 27,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Qué hongo dimorfo es endémico en zonas áridas y semiáridas de América y se adquiere por inhalación de artroconidios presentes en el polvo, causando la fiebre del Valle?",
        opciones: ["A) *Histoplasma capsulatum*", "B) *Coccidioides immitis / posadasii*", "C) *Cryptococcus neoformans*", "D) *Candida albicans*"],
        respuestaCorrecta: 1,
        explicacion: "*Coccidioides* es un hongo dimorfo endémico cuyas formas infectantes (artroconidios) se encuentran en el suelo y polvo de zonas áridas, altamente infecciosas por vía inhalatoria."
    },
    {
        id: 28,
        area: "Microbiología y Parasitología Médica",
        pregunta: "El medio de cultivo específico utilizado para el aislamiento selectivo de hongos levaduriformes y filamentosos a partir de muestras clínicas contaminadas es:",
        opciones: ["A) Agar nutritivo", "B) Agar Sabouraud Dextrosa con o sin antibióticos", "C) Caldo tioglicolato", "D) Agar Mueller-Hinton"],
        respuestaCorrecta: 1,
        explicacion: "El Agar Sabouraud Dextrosa tiene un pH ligeramente ácido y puede suplementarse con cloranfenicol y cicloheximida para inhibir el crecimiento bacteriano y facilitar el aislamiento de hongos."
    },
    {
        id: 29,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Qué prueba bioquímica permite diferenciar de manera concluyente a *Staphylococcus aureus* (coagulasa positivo) de otras especies de estafilococos coagulasa negativos?",
        opciones: ["A) Prueba de la catalasa", "B) Prueba de la coagulasa (en tubo y portaobjetos)", "C) Fermentación de manitol en sal", "D) Sensibilidad a la novobiocina"],
        respuestaCorrecta: 1,
        explicacion: "La enzima coagulasa convierte el fibrinógeno en fibrina. Su detección (coagulasa positiva) es la característica definitiva que distingue a *Staphylococcus aureus* patógeno."
    },
    {
        id: 30,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Cuál es el vector biológico responsable de la transmisión del parásito *Trypanosoma cruzi*, agente causal de la enfermedad de Chagas?",
        opciones: ["A) Mosquito *Anopheles*", "B) Chinche besucona o triatomino (vinchuca)", "C) Piojo de la cabeza (*Pediculus humanus*)", "D) Garrapata del género *Ixodes*"],
        respuestaCorrecta: 1,
        explicacion: "Los triatominos (chinches besuconas) transmiten *Trypanosoma cruzi* al depositar sus deyecciones infectadas sobre la piel o mucosas del huésped durante o inmediatamente después de la picadura."
    },
    {
        id: 31,
        area: "Inmunología y Serología",
        pregunta: "¿Qué clase de inmunoglobulina es la predominante en las respuestas inmunitarias secundarias (memoria) y la única capaz de atravesar la placenta humana?",
        opciones: ["A) IgM", "B) IgA", "C) IgG", "D) IgE"],
        respuestaCorrecta: 2,
        explicacion: "La IgG es el anticuerpo más abundante en suero, posee cuatro subclases, media la inmunidad humoral secundaria, neutraliza toxinas y cruza la barrera placentaria otorgando inmunidad pasiva al feto."
    },
    {
        id: 32,
        area: "Inmunología y Serología",
        pregunta: "En la técnica de inmunoensayo enzimático tipo ELISA sándwich, ¿qué componente es el que típicamente se encuentra adherido (fijado) a los pozos de la placa de microtitulación?",
        opciones: ["A) El anticuerpo de captura específico", "B) El antígeno problema conjugado con enzima", "C) El sustrato cromogénico", "D) El anticuerpo secundario marcado con radioisótopos"],
        respuestaCorrecta: 0,
        explicacion: "En un ensayo ELISA tipo sándwich, el pocillo se recubre inicialmente con un anticuerpo de captura que se unirá específicamente al antígeno presente en la muestra problema."
    },
    {
        id: 33,
        area: "Inmunología y Serología",
        pregunta: "¿Qué isotipo de anticuerpo está primariamente involucrado en las reacciones de hipersensibilidad inmediata (tipo I), mediada por la desgranulación de mastocitos y basófilos?",
        opciones: ["A) IgA", "B) IgD", "C) IgE", "D) IgM"],
        respuestaCorrecta: 2,
        explicacion: "La IgE se une fuertemente a los receptores Fc de alta afinidad (FcεRI) en mastocitos y basófilos. Su entrecruzamiento por alérgenos desencadena la liberación aguda de histamina y mediadores inflamatorios."
    },
    {
        id: 34,
        area: "Inmunología y Serología",
        pregunta: "El diagnóstico serológico de la infección por el virus de la inmunodeficiencia humana (VIH) se realiza rutinariamente mediante:",
        opciones: ["A) Cultivo viral cuantitativo", "B) Pruebas de escrutinio de cuarta generación (detección simultánea de anticuerpos anti-VIH y antígeno p24)", "C) Pruebas de aglutinación en látex", "D) Cuantificación sérica de inmunoglobulina E"],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas combinadas de 4ª generación detectan anticuerpos contra VIH-1/VIH-2 y el antígeno p24, reduciendo drásticamente el periodo de ventana diagnóstica en comparación con ensayos anteriores."
    },
    {
        id: 35,
        area: "Inmunología y Serología",
        pregunta: "¿Qué proteínas forman el complejo principal de histocompatibilidad (CМН) de clase II y en qué tipo celular se expresan predominantemente?",
        opciones: ["A) Cadenas alfa y beta en todas las células nucleadas del organismo", "B) Cadenas alfa y beta exclusivamente en células presentadoras de antígeno profesionales (macrófagos, células dendríticas, linfocitos B)", "C) Proteínas transmembranas expresadas solo en eritrocitos maduros", "D) Receptores de membrana en linfocitos T citotóxicos CD8+"],
        respuestaCorrecta: 1,
        explicacion: "Las moléculas de CMH clase II presentan antígenos extracelulares a los linfocitos T CD4+ y se expresan de forma constitutiva en células presentadoras de antígeno (CPA) profesionales."
    },
    {
        id: 36,
        area: "Inmunología y Serología",
        pregunta: "En la técnica de Western Blot, utilizada como prueba confirmatoria, ¿qué parámetro se evalúa para identificar la presencia específica de anticuerpos?",
        opciones: ["A) El peso molecular de las proteínas virales separadas por electroforesis y transferidas a una membrana", "B) La fluorescencia emitida por complejos inmunes circulantes", "C) La turbidez generada por la precipitación antígeno-anticuerpo en medio líquido", "D) La velocidad de migración en campos magnéticos"],
        respuestaCorrecta: 0,
        explicacion: "El Western Blot separa proteínas antigénicas por electroforesis según su peso molecular, las transfiere a una membrana y detecta la unión de anticuerpos específicos a bandas proteicas definidas."
    },
    {
        id: 37,
        area: "Inmunología y Serología",
        pregunta: "¿Cuál es la función principal de la vía clásica del sistema del complemento en la respuesta inmunitaria innata y adaptativa?",
        opciones: ["A) Inducir la producción hepática de albúmina", "B) Promover la opsonización, la inflamación (anafilotoxinas C3a y C5a) y la lisis celular directa mediante el complejo de ataque a membrana (CAM)", "C) Inhibir la proliferación de linfocitos T autorreactivos", "D) Estimular la síntesis de cadenas pesadas de inmunoglobulinas"],
        respuestaCorrecta: 1,
        explicacion: "La activación del complemento culmina en la formación del complejo de ataque a membrana (C5b-C9) para lisis celular, opsonización con C3b y liberación de anafilotoxinas que potencian la inflamación."
    },
    {
        id: 38,
        area: "Inmunología y Serología",
        pregunta: "Una prueba serológica no treponémica utilizada para el diagnóstico de sífilis (como VDRL o RPR) detecta anticuerpos de tipo:",
        opciones: ["A) IgG específicos contra proteínas de membrana de *Treponema pallidum*", "B) Reaginas dirigidas contra antígenos lipoideos (cardiolipina-lecitina-colesterol)", "C) IgM monoclonales contra antígenos flagelares", "D) IgA secretora en mucosas genitales"],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas no treponémicas (VDRL/RPR) miden anticuerpos antifosfolípidos (reaginas) formados como respuesta al daño tisular y lipídico provocado por la espiroqueta, útiles para cribado y seguimiento de tratamiento."
    },
    {
        id: 39,
        area: "Inmunología y Serología",
        pregunta: "¿Qué tipo de hipersensibilidad según la clasificación de Gell y Coombs representa la reacción de incompatibilidad transfusional por reacciones hemolíticas agudas mediadas por anticuerpos?",
        opciones: ["A) Hipersensibilidad Tipo I (mediada por IgE)", "B) Hipersensibilidad Tipo II (citotóxica dependiente de anticuerpos)", "C) Hipersensibilidad Tipo III (por complejos inmunes)", "D) Hipersensibilidad Tipo IV (mediada por células o retardada)"],
        respuestaCorrecta: 1,
        explicacion: "La reacción transfusional hemolítica aguda ocurre cuando anticuerpos del receptor atacan los antígenos de los eritrocitos transfundidos, destruyéndolos por lisis mediada por complemento o citotoxicidad (Tipo II)."
    },
    {
        id: 40,
        area: "Inmunología y Serología",
        pregunta: "¿Cuál es la principal aplicación clínica de la cuantificación de subclases de inmunoglobulinas o pruebas de linfocitos T por citometría de flujo?",
        opciones: ["A) Diagnóstico de hemoglobinopatías estructurales", "B) Evaluación de inmunodeficiencias primarias y secundarias", "C) Determinación de la velocidad de sedimentación globular", "D) Identificación de parásitos tisulares"],
        respuestaCorrecta: 1,
        explicacion: "La citometría de flujo y la cuantificación de subclases de IgG son herramientas cruciales en inmunología clínica para diagnosticar inmunodeficiencias humorales y celulares congénitas o adquiridas."
    },
    {
        id: 41,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "¿Qué hallazgo microscópico en el sedimento urinario es patognomónico de daño glomerular activo (como en la glomerulonefritis aguda)?",
        opciones: ["A) Cilindros hemáticos", "B) Células epiteliales escamosas", "C) Cristales de oxalato de calcio dihidratado", "D) Leucocitos aislados sin cúmulos"],
        respuestaCorrecta: 0,
        explicacion: "Los cilindros hemáticos están formados por eritrocitos atrapados en una matriz de proteína de Tamm-Horsfall dentro de los túbulos renales, indicando claramente origen glomerular del sangrado."
    },
    {
        id: 42,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "¿Qué parámetro físico-químico en la tira reactiva de orina resulta positivo en presencia de infección del tracto urinario causada por bacterias gramnegativas reductoras de nitratos?",
        opciones: ["A) Proteínas", "B) Nitritos", "C) Cuerpos cetónicos", "D) Bilirrubina"],
        respuestaCorrecta: 1,
        explicacion: "Muchas bacterias uropatógenas gramnegativas (ej. *E. coli*, *Klebsiella*) poseen enzimas reductoras que convierten los nitratos urinarios dietéticos en nitritos, detectables mediante tira reactiva."
    },
    {
        id: 43,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "En el análisis físico-químico del líquido cefalorraquídeo (LCR), la presencia de xantocromía (coloración rosada, amarillenta o anaranjada) sugiere fuertemente:",
        opciones: ["A) Infección bacteriana aguda purulenta", "B) Hemorragia subaracnoidea antigua (degradación de hemoglobina a bilirrubina)", "C) Contaminación con sangre periférica durante la punción lumbar", "D) Concentración elevada de glucosa"],
        respuestaCorrecta: 1,
        explicacion: "La xantocromía se debe a la presencia de productos de degradación de la sangre (oxihemoglobina, bilirrubina) en el espacio subaracnoideo, presente horas después de una hemorragia intracraneal."
    },
    {
        id: 44,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "¿Qué cristales en el sedimento urinario se asocian clásicamente con un pH urinario marcadamente ácido y gota o trastornos metabólicos de purinas?",
        opciones: ["A) Cristales de fosfato triple", "B) Cristales de ácido úrico", "C) Cristales de cistina", "D) Cristales de carbonato de calcio"],
        respuestaCorrecta: 1,
        explicacion: "Los cristales de ácido úrico precipitan en orinas con pH ácido (generalmente menor a 6.0) y pueden adoptar diversas formas como rombos, rosetas o placas."
    },
    {
        id: 45,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "Para diferenciar un derrame pleural exudativo de un trasudado, ¿qué criterios bioquímicos estandarizados se emplean comúnmente?",
        opciones: ["A) Criterios de Light (basados en las proporciones de proteínas y LDH entre líquido pleural y suero)", "B) Concentración de glucosa exclusivamente", "C) Densidad relativa del líquido", "D) Conteo total de hematíes"],
        respuestaCorrecta: 0,
        explicacion: "Los criterios de Light evalúan la relación de proteínas pleurales/séricas y LDH pleural/sérica para clasificar el derrame en exudado (inflamatorio/neoplásico) o trasudado (sistémico/hidrostático)."
    },
    {
        id: 46,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "En el análisis del líquido sinovial, la presencia de cristales de pirofosfato de calcio dihidratado con birrefringencia débilmente positiva se asocia con el padecimiento conocido como:",
        opciones: ["A) Gota úrica", "B) Seudogota (artropatía por depósito de cristales de pirofosfato de calcio)", "C) Artritis reumatoide", "D) Artritis séptica gonocócica"],
        respuestaCorrecta: 1,
        explicacion: "La seudogota se caracteriza por el depósito intraarticular de cristales de pirofosfato de calcio, los cuales muestran morfología romboidal y birrefringencia débilmente positiva bajo luz polarizada compensada."
    },
    {
        id: 47,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "¿Cuál es el significado clínico de la presencia de cilindros céreos en el examen microscópico del sedimento urinario?",
        opciones: ["A) Enfermedad renal crónica grave o estasis tubular prolongada", "B) Deshidratación leve transitoria", "C) Ejercicio físico extenuante reciente", "D) Infección urinaria baja no complicada"],
        respuestaCorrecta: 0,
        explicacion: "Los cilindros céreos representan la etapa final de degeneración de los cilindros hialinos o granulosos, indicando estasis tubular severa y daño renal crónico avanzado."
    },
    {
        id: 48,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "En una muestra de líquido cefalorraquídeo (LCR), ¿qué patrón bioquímico es característico de una meningitis bacteriana aguda?",
        opciones: ["A) Glucosa normal o alta, proteínas normales, predominio de linfocitos", "B) Glucosa marcadamente disminuida (hipoglucorraquia), proteínas elevadas e hipercelularidad a expensas de polimorfonucleares (neutrófilos)", "C) Glucosa elevada, proteínas disminuidas", "D) Ausencia total de células y proteínas"],
        respuestaCorrecta: 1,
        explicacion: "Las bacterias consumen glucosa rápidamente y generan inflamación severa, lo que da lugar a una marcada hipoglucorraquia, hiperproteinorraquia y pleocitosis neutrofílica en el LCR."
    },
    {
        id: 49,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "¿Qué parámetro bioquímico urinario se cuantifica en orina de 24 horas para el diagnóstico y seguimiento de tumores neuroendocrinos como el feocromocitoma?",
        opciones: ["A) Creatinina total", "B) Catecolaminas fraccionadas y metanefrinas urinarias", "C) Amilasa urinaria", "D) Electrolitos séricos basales"],
        respuestaCorrecta: 1,
        explicacion: "El feocromocitoma produce catecolaminas en exceso. La medición de metanefrinas y catecolaminas totales o fraccionadas en orina de 24 horas es la prueba bioquímica de gabinete preferida."
    },
    {
        id: 50,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "La prueba de esteras leucocitaria en la tira reactiva de orina detecta indirectamente la presencia de:",
        opciones: ["A) Hemoglobina libre en orina", "B) Enzimas presentes en los gránulos azurófilos de los leucocitos (neutrófilos)", "C) Proteínas de Bence Jones", "D) Células epiteliales renales descamadas"],
        respuestaCorrecta: 1,
        explicacion: "La esterasa leucocitaria es una enzima hidrolítica contenida en los neutrófilos. Su positividad en la tira reactiva indica leucocituria, signo clave de inflamación o infección urinaria."
    },
    {
        id: 51,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Cuál es el antídoto específico de elección para el tratamiento de la intoxicación aguda por paracetamol (acetaminofén) con riesgo de hepatotoxicidad?",
        opciones: ["A) Naloxona", "B) N-acetilcisteína (NAC)", "C) Flumazenil", "D) Atropina"],
        respuestaCorrecta: 1,
        explicacion: "La N-acetilcisteína actúa como un precursor del glutatión, neutralizando el metabolito tóxico NAPQI (N-acetil-p-benzoquinonimina) y previniendo la necrosis hepática fulminante."
    },
    {
        id: 52,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "En farmacocinética clínica, ¿qué representa la concentración mínima tóxica (CMT) de un fármaco?",
        opciones: ["A) La concentración plasmática por debajo de la cual no se observa efecto terapéutico", "B) La concentración plasmática a la cual comienzan a manifestarse efectos adversos o tóxicos indeseables", "C) El pico máximo de concentración alcanzado tras la administración intravenosa", "D) La velocidad de eliminación hepática del medicamento"],
        respuestaCorrecta: 1,
        explicacion: "La concentración mínima tóxica marca el umbral superior de la ventana terapéutica; superar este nivel incrementa marcadamente el riesgo de toxicidad farmacológica en el paciente."
    },
    {
        id: 53,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Qué fármaco inmunosupresor de estrecho margen terapéutico requiere monitoreo rutinario de sus niveles sanguíneos mínimos (valle) en pacientes trasplantados para prevenir rechazo o nefrotoxicidad?",
        opciones: ["A) Paracetamol", "B) Ciclosporina o Tacrolimus", "C) Amoxicilina", "D) Ibuprofeno"],
        respuestaCorrecta: 1,
        explicacion: "La ciclosporina y el tacrolimus poseen una farmacocinética altamente variable y un margen terapéutico estrecho, por lo que su monitoreo terapéutico de fármacos (TDM) en sangre es obligatorio."
    },
    {
        id: 54,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "La intoxicación aguda por monóxido de carbono (CO) se diagnostica en el laboratorio mediante la cuantificación en sangre de:",
        opciones: ["A) Carboxihemoglobina (COHb)", "B) Metahemoglobina exclusiva", "C) Sulfato ferroso sérico", "D) Ácido delta-aminolevulínico urinario"],
        respuestaCorrecta: 0,
        explicacion: "El monóxido de carbono tiene una afinidad por la hemoglobina unas 200 veces mayor que el oxígeno, formando carboxihemoglobina (COHb), cuya medición confirma la exposición tóxica."
    },
    {
        id: 55,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Cuál es el mecanismo de toxicidad principal asociado a la exposición crónica al plomo que se evalúa mediante biometría hemática y perfil de hierro?",
        opciones: ["A) Inhibición de enzimas en la síntesis del hemo (como la ácido delta-aminolevulínico deshidratasa y ferroquelatasa), causando anemia microcítica", "B) Lisis directa de plaquetas circulantes", "C) Destrucción tubular renal distal con alcalosis metabólica", "D) Inhibición irreversible de la acetilcolinesterasa"],
        respuestaCorrecta: 0,
        explicacion: "El plomo inhibe múltiples enzimas clave en la vía de síntesis del hemo, interrumpiendo la incorporación de hierro a la protoporfirina IX, lo que genera anemia microcítica o normocítica con punteado basófilo."
    },
    {
        id: 56,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Qué antídoto se administra por vía intravenosa ante una sobredosis aguda de benzodiazepinas que ha provocado depresión respiratoria severa?",
        opciones: ["A) Naloxona", "B) Flumazenil", "C) Azul de metileno", "D) Pralidoxima"],
        respuestaCorrecta: 1,
        explicacion: "El flumazenil es un antagonista competitivo específico de los receptores GABA-A, capaz de revertir de forma rápida los efectos sedantes y depresores respiratorios de las benzodiazepinas."
    },
    {
        id: 57,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "En el monitoreo terapéutico de medicamentos (TDM), ¿en qué momento del intervalo de dosificación se debe extraer la muestra de sangre para medir el nivel mínimo (valle)?",
        opciones: ["A) Exactamente 30 minutos después de terminar la infusión intravenosa", "B) Inmediatamente antes de administrar la siguiente dosis programada del fármaco", "C) En el pico máximo de absorción gástrica", "D) A mitad del intervalo de administración"],
        respuestaCorrecta: 1,
        explicacion: "El nivel valle representa la concentración más baja del fármaco en el estado estacionario y se obtiene justo antes de la administración de la dosis sucesiva para evaluar acumulación o infradosificación."
    },
    {
        id: 58,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "La intoxicación por organofosforados produce un cuadro clínico caracterizado por hiperactividad colinérgica (síndrome colinérgico), cuyo marcador analítico en laboratorio es la disminución significativa de la actividad de:",
        opciones: ["A) Fosfatasa alcalina sérica", "B) Acetilcolinesterasa eritrocitaria y colinesterasa plasmática", "C) Creatina cinasa total", "D) Deshidrogenasa láctica"],
        respuestaCorrecta: 1,
        explicacion: "Los organofosforados se unen covalentemente e inhiben de manera irreversible a la acetilcolinesterasa, acumulando acetilcolina. Su diagnóstico se apoya midiendo la disminución de su actividad."
    },
    {
        id: 59,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Qué hallazgo toxicológico y de laboratorio es característico de la intoxicación grave por metanol?",
        opciones: ["A) Acidosis metabólica severa con brecha aniónica aumentada e hiperosmolaridad sérica", "B) Alcalosis respiratoria pura sin alteraciones metabólicas", "C) Hipoglucemia severa aislada", "D) Insuficiencia renal con brecha aniónica normal"],
        respuestaCorrecta: 0,
        explicacion: "El metanol es metabolizado por la alcohol deshidrogenasa a formaldehído y ácido fórmico, provocando una acidosis metabólica con brecha aniónica elevada y brecha osmolar aumentada."
    },
    {
        id: 60,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Cuál es el antídoto específico utilizado para bloquear competitivamente la alcohol deshidrogenasa en casos de intoxicación por metanol o etilenglicol?",
        opciones: ["A) Etanol o Fomepizol", "B) Naloxona", "C) Gluconato de calcio", "D) Acetilcisteína"],
        respuestaCorrecta: 0,
        explicacion: "Tanto el etanol como el fomepizol tienen una afinidad mucho mayor por la enzima alcohol deshidrogenasa, evitando que el metanol y el etilenglicol se metabolicen a sus metabolitos tóxicos ácidos."
    },
    {
        id: 61,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "En el control de calidad interno del laboratorio clínico, ¿qué reglas estadísticas se utilizan comúnmente para detectar errores aleatorios y sistemáticos en las corridas analíticas?",
        opciones: ["A) Reglas de Westgard", "B) Criterios de filtración de Gerson", "C) Coeficiente de correlación de Pearson", "D) Pruebas de bondad de ajuste de Chi-cuadrada"],
        respuestaCorrecta: 0,
        explicacion: "Las reglas multirreglas de Westgard combinan diferentes límites estadísticos basados en la media y la desviación estándar para evaluar gráficos de Levey-Jennings y detectar errores analíticos."
    },
    {
        id: 62,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "¿Qué término define la capacidad de un método analítico para medir exclusivamente el analito de interés sin interferencia de otras sustancias presentes en la muestra?",
        opciones: ["A) Precisión", "B) Exactitud", "C) Especificidad analítica", "D) Sensibilidad analítica"],
        respuestaCorrecta: 2,
        explicacion: "La especificidad analítica se refiere a la habilidad de un procedimiento para cuantificar de manera selectiva al analito blanco en presencia de componentes interferentes potenciales."
    },
    {
        id: 63,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "El programa de evaluación externa de la calidad (PEEC) o ensayo de aptitud en el laboratorio clínico tiene como propósito fundamental:",
        opciones: ["A) Evaluar el desempeño y la comparabilidad analítica del laboratorio frente a otros laboratorios utilizando muestras misteriosas", "B) Calibrar diariamente los equipos automatizados", "C) Reducir los costos de los reactivos adquiridos", "D) Medir el tiempo de espera del paciente en recepción"],
        respuestaCorrecta: 0,
        explicacion: "La evaluación externa de la calidad compara los resultados de un laboratorio con un grupo de pares a nivel nacional o internacional, asegurando la veracidad y exactitud de los métodos."
    },
    {
        id: 64,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "¿Cuál es la diferencia analítica fundamental entre la precisión y la exactitud de un método de medición?",
        opciones: ["A) La precisión mide la cercanía de los resultados repetidos entre sí, mientras que la exactitud mide la cercanía del resultado al valor real o verdadero", "B) La precisión evalúa errores sistemáticos y la exactitud evalúa errores aleatorios", "C) No existe diferencia conceptual entre ambos términos", "D) La exactitud solo se aplica a pruebas cualitativas"],
        respuestaCorrecta: 0,
        explicacion: "La precisión se refiere a la dispersión de los resultados (repetibilidad/reproducibilidad), en tanto que la exactitud refleja la concordancia entre el valor medido y el valor de referencia verdadero."
    },
    {
        id: 65,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "De acuerdo con las normas internacionales de gestión de calidad para laboratorios clínicos (como ISO 15189), ¿qué abarca la fase preanalítica?",
        opciones: ["A) Desde la emisión e interpretación del resultado por el especialista", "B) Desde la prescripción médica de la prueba, preparación del paciente, toma de muestra, hasta su transporte y recepción en el laboratorio", "C) Únicamente el procesamiento técnico de la muestra en el analizador automático", "D) La eliminación de residuos biológicos peligrosos"],
        respuestaCorrecta: 1,
        explicacion: "La fase preanalítica abarca todos los procesos previos al análisis en sí, siendo la etapa donde ocurre el mayor porcentaje de errores en el laboratorio clínico (toma de muestras, identificación, etc.)."
    },
    {
        id: 66,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "¿Qué representa el límite de detección (LoD) de un método analítico cuantitativo?",
        opciones: ["A) La concentración más baja del analito que puede ser distinguida confiablemente del blanco con una probabilidad dada", "B) La máxima concentración que el equipo puede medir sin dilución", "C) El rango lineal de trabajo del equipo", "D) El valor medio de los controles de calidad internos"],
        respuestaCorrecta: 0,
        explicacion: "El límite de detección (LoD) es la concentración mínima del analito que el método puede detectar con certeza por encima de la señal del blanco analítico, sin requerir cuantificación exacta."
    },
    {
        id: 67,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "En un gráfico de control de Levey-Jennings, una violación a la regla estadística de Westgard 1-3s indica:",
        opciones: ["A) Un error aleatorio importante o el inicio de un error sistemático grave (un punto de control supera las 3 desviaciones estándar de la media)", "B) Que diez puntos consecutivos caen del mismo lado de la media", "C) La presencia de una tendencia sistemática gradual", "D) Que el control se encuentra perfectamente dentro de la media"],
        respuestaCorrecta: 0,
        explicacion: "La regla 1-3s se dispara cuando un valor de control de calidad excede los límites de +3s o -3s, señalando una alerta clara de error aleatorio significativo o error sistemático crítico."
    },
    {
        id: 68,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "¿Cómo se define el error preanalítico derivado de una prolongada aplicación del torniquete durante la venopunción?",
        opciones: ["A) Hemólisis y hemoconcentración con alteración espuria de analitos como potasio, proteínas y enzimas", "B) Disminución artificial de la glucosa sérica por glucólisis bacteriana", "C) Contaminación con anticoagulante EDTA", "D) Aumento inmediato del conteo plaquetario"],
        respuestaCorrecta: 0,
        explicacion: "La estasis venosa prolongada por el torniquete causa filtración de agua al espacio intersticial (hemoconcentración) y ruptura celular, alterando marcadamente el potasio, proteínas totales y enzimas."
    },
    {
        id: 69,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "En la gestión de residuos peligrosos biológico-infecciosos (RPBI) en un laboratorio clínico, ¿en qué contenedor deben depositarse las agujas y lancetas usadas?",
        opciones: ["A) Bolsa de plástico roja", "B) Recipiente rígido de polipropileno color rojo (punzocortantes)", "C) Contenedor de cartón hermético amarillo", "D) Bolsa de plástico transparente ordinaria"],
        respuestaCorrecta: 1,
        explicacion: "Los objetos punzocortantes deben descartarse obligatoriamente en recipientes rígidos resistentes a pinchazos, rotulados y especificados para material punzocortante conforme a las normativas sanitarias."
    },
    {
        id: 70,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "¿Cuál es el propósito fundamental de establecer intervalos de referencia biológicos adecuados en el laboratorio clínico?",
        opciones: ["A) Proveer una base comparativa para que el clínico determine si el resultado de un paciente se encuentra dentro de los límites de salud o sugiere patología", "B) Modificar los costos comerciales de los reactivos", "C) Determinar la vida media de los equipos automatizados", "D) Sustituir el juicio diagnóstico del médico tratante"],
        respuestaCorrecta: 0,
        explicacion: "Los intervalos de referencia representan los límites poblacionales de normalidad estadística (usualmente el intervalo central del 95% de individuos sanos) para interpretar correctamente los resultados."
    },
    {
        id: 71,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Cuál es la enzima clave utilizada en la técnica de Reacción en Cadena de la Polimerasa (PCR) convencional para amplificar secuencias de ADN a altas temperaturas?",
        opciones: ["A) ARN polimerasa dependiente de ADN", "B) ADN polimerasa termoestable (como *Taq* polimerasa)", "C) ADN ligasa bacteriana", "D) Transcriptasa inversa"],
        respuestaCorrecta: 1,
        explicacion: "La *Taq* polimerasa, aislada de la bacteria termófila *Thermus aquaticus*, resiste las altas temperaturas de desnaturalización requeridas en los ciclos térmicos de la PCR."
    },
    {
        id: 72,
        area: "Biología Molecular y Genética Médica",
        pregunta: "En el diagnóstico molecular de infecciones virales por ARN (como SARS-CoV-2 o VIH), ¿qué paso enzimático previo es indispensable realizar antes de ejecutar la PCR?",
        opciones: ["A) Digestión con enzimas de restricción", "B) Transcripción inversa (convertir el ARN en ADN complementario o ADNc)", "C) Electroforesis en gel de agarosa desnaturalizante", "D) Secuenciación masiva por síntesis"],
        respuestaCorrecta: 1,
        explicacion: "Las ADN polimerasas estándar no pueden replicar cadenas de ARN directamente; por ello, la RT-PCR requiere una transcriptasa inversa para sintetizar ADNc molde a partir del ARN viral."
    },
    {
        id: 73,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Qué técnica de biología molecular permite la detección cuantitativa en tiempo real de la amplificación de ácidos nucleicos mediante el uso de sondas fluorescentes o colorantes intercalantes?",
        opciones: ["A) PCR en tiempo real (qPCR)", "B) Southern blot tradicional", "C) Cromatografía de intercambio iónico", "D) Ensayo de inmunodifusión radial"],
        respuestaCorrecta: 0,
        explicacion: "La qPCR mide la acumulación de producto amplificado ciclo a ciclo mediante emisión de fluorescencia, permitiendo cuantificar la carga viral o expresión génica de forma precisa."
    },
    {
        id: 74,
        area: "Biología Molecular y Genética Médica",
        pregunta: "En la electroforesis de ácidos nucleicos, ¿qué matriz se emplea comúnmente para separar fragmentos grandes de ADN y ADN genómico?",
        opciones: ["A) Gel de poliacrilamida", "B) Gel de agarosa", "C) Membrana de nitrocelulosa", "D) Columna de sílice"],
        respuestaCorrecta: 1,
        explicacion: "El gel de agarosa ofrece un rango de porosidad ideal para separar fragmentos de ADN de mediano y gran tamaño (desde unos cientos hasta miles de pares de bases)."
    },
    {
        id: 75,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Cuál es la función del bromuro de etidio o los colorantes seguros alternativos en las técnicas electroforéticas de ácidos nucleicos?",
        opciones: ["A) Servir como amortiguador (buffer) de corrida", "B) Intercalarse entre las bases nitrogenadas del ADN para permitir su visualización bajo luz ultravioleta o azul", "C) Digerir las proteínas contaminantes de la muestra", "D) Precipitar los ácidos nucleicos en solución alcohólica"],
        respuestaCorrecta: 1,
        explicacion: "Los colorantes fluorescentes como el bromuro de etidio se intercalan en el ADN bicatenario y emiten fluorescencia al ser excitados por luz UV, revelando las bandas de los ácidos nucleicos."
    },
    {
        id: 76,
        area: "Biología Molecular y Genética Médica",
        pregunta: "En genética médica, ¿qué tipo de mutación representa el cambio de un solo nucleótido en la secuencia de ADN que no altera la secuencia de aminoácidos debido a la degeneración del código genético?",
        opciones: ["A) Mutación sin sentido (nonsense)", "B) Mutación silenciosa (synonymous)", "C) Mutación de cambio de sentido (missense)", "D) Mutación por corrimiento de marco (frameshift)"],
        respuestaCorrecta: 1,
        explicacion: "Una mutación silenciosa altera un codón por otro que codifica exactamente para el mismo aminoácido, por lo que la proteína resultante no sufre modificaciones en su estructura primaria."
    },
    {
        id: 77,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Qué tecnología de secuenciación ha revolucionado el diagnóstico genómico clínico permitiendo la lectura simultánea de millones de moléculas de ADN (secuenciación de alto rendimiento)?",
        opciones: ["A) Secuenciación por métodos de Sanger manuales", "B) Secuenciación de nueva generación (NGS, Next-Generation Sequencing)", "C) Hibridación in situ fluorescente (FISH)", "D) Cromatografía líquida de alta resolución (HPLC)"],
        respuestaCorrecta: 1,
        explicacion: "La secuenciación de nueva generación (NGS) procesa millones de secuencias en paralelo (massively parallel sequencing), facilitando paneles genéticos amplios y secuenciación exómica/genómica."
    },
    {
        id: 78,
        area: "Biología Molecular y Genética Médica",
        pregunta: "La técnica de Hibridación In Situ Fluorescente (FISH) se utiliza principalmente en citogenética clínica para:",
        opciones: ["A) Cuantificar la concentración de glucosa en sangre", "B) Detectar y localizar anomalías cromosómicas específicas (deleciones, translocaciones, amplificaciones) en células intactas", "C) Aislar bacterias resistentes a antibióticos", "D) Determinar el grupo sanguíneo ABO"],
        respuestaCorrecta: 1,
        explicacion: "FISH emplea sondas de ADN marcadas con fluoróforos que hibridan con secuencias complementarias en cromosomas metafásicos o núcleos interfásicos, visualizando microdeleciones o reordenamientos."
    },
    {
        id: 79,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Cuál es el propósito del paso de desnaturalización térmica inicial (a 94-95 °C) en cada ciclo de la reacción en cadena de la polimerasa (PCR)?",
        opciones: ["A) Unir los cebadores (primers) a las cadenas molde", "B) Romper los puentes de hidrógeno entre las bases nitrogenadas para separar el ADN bicatenario en cadenas simples", "C) Activar la polimerasa mediante catálisis enzimática", "D) Precipitar el ADN amplificado"],
        respuestaCorrecta: 1,
        explicacion: "La desnaturalización a alta temperatura rompe los puentes de hidrógeno que mantienen unidas las dos hebras del ADN molde, permitiendo que queden accesibles para la hibridación de los cebadores."
    },
    {
        id: 80,
        area: "Biología Molecular y Genética Médica",
        pregunta: "En la extracción de ácidos nucleicos a partir de muestras biológicas, ¿qué compuesto químico se utiliza habitualmente para precipitar y concentrar el ADN tras la lisis celular?",
        opciones: ["A) Alcohol etílico (etanol) absoluto o isopropanol frío", "B) Cloruro de sodio isotónico", "C) Hidróxido de sodio concentrado", "D) Azul de metileno"],
        respuestaCorrecta: 0,
        explicacion: "El etanol frío o el isopropanol reducen la hidratación del ADN y neutralizan las cargas negativas de los grupos fosfato, provocando su precipitación en forma de filamentos visibles."
    },
    {
        id: 81,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Qué vía metabólica hepática se activa marcadamente durante el ayuno prolongado para sintetizar cuerpos cetónicos a partir de acetil-CoA?",
        opciones: ["A) Glucólisis anaerobia", "B) Cetogénesis", "C) Síntesis de ácidos grasos (lipogénesis)", "D) Glucogenogénesis"],
        respuestaCorrecta: 1,
        explicacion: "Durante el ayuno prolongado, el acetil-CoA proveniente de la beta-oxidación de ácidos grasos en las mitocondrias hepáticas se desvía hacia la cetogénesis para proveer energía al cerebro y tejidos periféricos."
    },
    {
        id: 82,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "En la enzimología clínica, ¿qué tipo de inhibición enzimática ocurre cuando un inhibidor se une covalentemente o de forma reversible al sitio activo compitiendo directamente con el sustrato?",
        opciones: ["A) Inhibición competitiva", "B) Inhibición no competitiva", "C) Inhibición aostérica por retroinhibición", "D) Inhibición irreversible destructiva"],
        respuestaCorrecta: 0,
        explicacion: "En la inhibición competitiva, el inhibidor tiene una estructura similar al sustrato y compite por el mismo sitio activo, lo cual puede superarse aumentando la concentración de sustrato."
    },
    {
        id: 83,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Cuál es la función metabólica principal de la vía de las pentosas fosfato en los eritrocitos?",
        opciones: ["A) Sintetizar glucógeno de reserva tisular", "B) Producir NADPH para mantener reducido el glutatión y proteger contra el estrés oxidativo", "C) Generar ATP en ausencia de mitocondrias", "D) Degradar aminoácidos ramificados"],
        respuestaCorrecta: 1,
        explicacion: "Los eritrocitos carecen de núcleo y mitocondrias; dependen de la vía de las pentosas fosfato para generar NADPH, cofactor indispensable para la glutatión reductora frente al daño oxidativo."
    },
    {
        id: 84,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "En el ciclo de la urea (ocurrido principalmente en el hígado), ¿cuál es el compuesto tóxico nitrogenado que se detoxifica y convierte en urea para su excreción renal?",
        opciones: ["A) Ácido láctico", "B) Amoníaco (NH3 / NH4+)", "C) Creatinina plasmática", "D) Bilirrubina indirecta"],
        respuestaCorrecta: 1,
        explicacion: "El catabolismo de aminoácidos genera amoníaco, un compuesto altamente neurotóxico que el hígado convierte en urea a través del ciclo de la urea para ser eliminado de manera segura por la orina."
    },
    {
        id: 85,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Qué hormona pancreática estimula la captación celular de glucosa, la glucogenogénesis y la lipogénesis, actuando como la principal hormona anabólica?",
        opciones: ["A) Glucagón", "B) Insulina", "C) Cortisol", "D) Adrenalina"],
        respuestaCorrecta: 1,
        explicacion: "La insulina es secretada por las células beta pancreáticas en respuesta a la hiperglucemia postprandial, promoviendo el almacenamiento de energía (glucógeno, triglicéridos) en los tejidos."
    },
    {
        id: 86,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "El déficit hereditario de la enzima glucosa-6-fosfato deshidrogenasa (G6PD) precipita cuadros de anemia hemolítica aguda cuando el paciente se expone a:",
        opciones: ["A) Altas concentraciones de oxígeno hiperbárico", "B) Fármacos oxidantes (como primaquina, sulfas) o habas (favismo)", "C) Dietas ricas en carbohidratos complejos", "D) Ejercicio aeróbico moderado"],
        respuestaCorrecta: 1,
        explicacion: "Al faltar la G6PD, los eritrocitos no producen suficiente NADPH, por lo que el estrés oxidativo inducido por ciertos fármacos o infecciones oxida la hemoglobina y destruye los glóbulos rojos (cuerpos de Heinz)."
    },
    {
        id: 87,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Qué enzima cataliza el paso limitante de la velocidad en la vía de síntesis del colesterol, siendo el blanco farmacológico de los medicamentos estatinas?",
        opciones: ["A) HMG-CoA reductasa", "B) Lecitin-colesterol aciltransferasa (LCAT)", "C) Lipoproteín lipasa", "D) Acil-CoA colesterol aciltransferasa (ACAT)"],
        respuestaCorrecta: 0,
        explicacion: "La HMG-CoA reductasa cataliza la conversión de HMG-CoA a mevalonato, siendo el paso regulador clave en la biosíntesis de colesterol y el blanco de inhibición competitiva por las estatinas."
    },
    {
        id: 88,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "En la evaluación de la actividad enzimática sérica, ¿qué representa la unidad internacional (UI) de actividad enzimática?",
        opciones: ["A) La cantidad de enzima que cataliza la transformación de 1 micromol de sustrato por minuto bajo condiciones estándar", "B) La masa total de proteína enzimática expresada en miligramos", "C) El número de ciclos catalíticos por segundo a 0 °C", "D) El porcentaje de inhibición competitiva alcanzado"],
        respuestaCorrecta: 0,
        explicacion: "Una Unidad Internacional (UI) de enzima se define estandarizadamente como la cantidad de enzima capaz de convertir 1 µmol de sustrato por minuto a condiciones óptimas de temperatura y pH."
    },
    {
        id: 89,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Cuál es el destino metabólico del piruvato en condiciones anaerobias (como en el músculo esquelético durante ejercicio intenso o en eritrocitos)?",
        opciones: ["A) Conversión a acetil-CoA para entrar al ciclo de Krebs", "B) Reducción a lactato mediante la acción de la lactato deshidrogenasa", "C) Desaminación oxidativa a alanina", "D) Conversión directa a glucosa por gluconeogénesis"],
        respuestaCorrecta: 1,
        explicacion: "Bajo deficiencia de oxígeno, el piruvato generado en la glucólisis se reduce a lactato por la lactato deshidrogenasa, reciclando el NADH a NAD+ para mantener activa la glucólisis anaerobia."
    },
    {
        id: 90,
        area: "Bioquímica Metabólica y Enzimología",
        pregunta: "¿Qué aminoácido es el precursor directo para la síntesis del neurotransmisor serotonina y de la hormona melatonina en el organismo?",
        opciones: ["A) Fenilalanina", "B) Triptófano", "C) Tirosina", "D) Glutamato"],
        respuestaCorrecta: 1,
        explicacion: "El triptófano es un aminoácido esencial hidroxilado y descarboxilado en vías metabólicas específicas para dar origen a la serotonina (5-hidroxitriptamina) y posteriormente a la melatonina."
    },
    {
        id: 91,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Cuál es el principio fundamental de la prueba de antiglobulina humana (Prueba de Coombs), ya sea directa o indirecta?",
        opciones: ["A) Detectar anticuerpos incompletos (IgG) o fracciones del complemento adheridas a la membrana eritrocitaria mediante el uso de anticuerpos anti-inmunoglobulina humana", "B) Precipitar proteínas plasmáticas totales por centrifugación salina", "C) Medir la fragilidad osmótica de los glóbulos rojos", "D) Determinar el título exacto de aglutininas anti-A y anti-B en suero"],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Coombs utiliza suero de conejo con anticuerpos anti-IgG humana y/o anti-complemento para entrelazar los eritrocitos sensibilizados que no aglutinan espontáneamente en solución salina."
    },
    {
        id: 92,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "En el sistema de grupos sanguíneos ABO, ¿qué anticuerpos predominan de forma natural (regular) en el suero de un individuo con grupo sanguíneo tipo A?",
        opciones: ["A) Anticuerpos anti-A", "B) Anticuerpos anti-B (isoaglutininas anti-B de tipo IgM)", "C) Anticuerpos anti-D (Rh)", "D) Ningún anticuerpo circulante"],
        respuestaCorrecta: 1,
        explicacion: "La ley de Landsteiner establece que las personas poseen en su suero anticuerpos naturales contra los antígenos ABO ausentes en sus propios eritrocitos; por ende, el grupo A posee anti-B."
    },
    {
        id: 93,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Cuál es el objetivo principal de la prueba cruzada mayor (compatibilidad mayor) previa a una transfusión sanguínea?",
        opciones: ["A) Detectar incompatibilidades entre los anticuerpos séricos del receptor y los antígenos de los eritrocitos del donador", "B) Verificar el grupo sanguíneo del donador exclusivamente", "C) Cuantificar la concentración de hemoglobina en la unidad", "D) Evaluar la esterilidad bacteriana de la bolsa de sangre"],
        respuestaCorrecta: 0,
        explicacion: "La prueba cruzada mayor enfrenta el suero o plasma del receptor con los hematíes del donador para garantizar que no existan anticuerpos capaces de destruir los glóbulos rojos transfundidos."
    },
    {
        id: 94,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Qué componente sanguíneo derivado se almacena rutinariamente a temperaturas de congelación menor o igual a -18 °C y contiene todos los factores de la coagulación estables y lábiles?",
        opciones: ["A) Concentrado de eritrocitos", "B) Plasma fresco congelado (PFC)", "C) Concentrado plaquetario", "D) Crioprecipitados"],
        respuestaCorrecta: 1,
        explicacion: "El plasma fresco congelado (PFC) se obtiene y congela rápidamente tras la extracción para preservar la actividad de todos los factores de coagulación, incluyendo los lábiles V y VIII."
    },
    {
        id: 95,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "En el sistema Rh, ¿cómo se denomina la prueba de Coombs directa realizada a los recién nacidos hijos de madre Rh negativa para diagnosticar enfermedad hemolítica del recién nacido (EHRN)?",
        opciones: ["A) Prueba de Coombs directa en sangre de cordón", "B) Pruebas cruzadas neonatales", "C) Determinación de anticuerpos irregulares maternos", "D) Electroforesis de hemoglobina fetal"],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Coombs directa en sangre de cordón umbilical detecta si los anticuerpos maternos anti-D IgG han cruzado la placenta y se han fijado a los eritrocitos fetales causando hemólisis."
    },
    {
        id: 96,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Cuál es la temperatura de almacenamiento recomendada y el tiempo máximo de conservación para los concentrados de plaquetas en agitación continua?",
        opciones: ["A) 1 °C a 6 °C por hasta 35 días", "B) 20 °C a 24 °C por un máximo de 5 días", "C) -20 °C por hasta 1 año", "D) 37 °C por 24 horas"],
        respuestaCorrecta: 1,
        explicacion: "Las plaquetas se almacenan a temperatura ambiente controlada (20-24 °C) en constante agitación suave para evitar agregación y asegurar intercambio gaseoso, con una vigencia máxima de 5 días por riesgo bacteriano."
    },
    {
        id: 97,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Qué antígeno del sistema Rh determina si un donador o paciente es clasificado como 'Rh positivo' o 'Rh negativo'?",
        opciones: ["A) Antígeno C", "B) Antígeno D (RH1)", "C) Antígeno E", "D) Antígeno c"],
        respuestaCorrecta: 1,
        explicacion: "El antígeno D es el más inmunogénico y clínicamente relevante del sistema Rh; su presencia define el carácter Rh positivo y su ausencia el carácter Rh negativo."
    },
    {
        id: 98,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "La prueba de escrutinio de anticuerpos irregulares (rastreo de anticuerpos) en el banco de sangre se realiza utilizando:",
        opciones: ["A) Hematíes de prueba con fenotipo conocido (células pantalla) frente al suero del paciente", "B) Suero anti-A y anti-B comerciales", "C) Solución salina fisiológica al 0.9%", "D) Tiras reactivas enzimáticas"],
        respuestaCorrecta: 0,
        explicacion: "El rastreo de anticuerpos irregulares emplea hematíes tamiz (células pantalla) que expresan los antígenos más importantes para detectar aloanticuerpos inesperados en el suero del paciente."
    },
    {
        id: 99,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Qué fracción rica en proteínas se obtiene al descongelar lentamente el plasma fresco congelado entre 1 °C y 6 °C, siendo rica en factor VIII, factor von Willebrand y fibrinógeno?",
        opciones: ["A) Crioprecipitados", "B) Concentrado plaquetario", "C) Albúmina sérica al 5%", "D) Plasma empobrecido en crioprecipitados"],
        respuestaCorrecta: 0,
        explicacion: "Los crioprecipitados precipitan al descongelar el PFC a baja temperatura, concentrando fibrinógeno, factor VIII, factor XIII y factor de von Willebrand, indicados en coagulopatías específicas."
    },
    {
        id: 100,
        area: "Inmunohematología y Banco de Sangre",
        pregunta: "¿Cuál es la causa más frecuente de reacciones transfusionales hemolíticas agudas fatales en la práctica clínica transfusional?",
        opciones: ["A) Contaminación bacteriana de la unidad plaquetaria", "B) Error administrativo e identificación incorrecta del paciente o de la muestra (incompatibilidad ABO)", "C) Sobrecarga circulatoria asociada a transfusión (TACO)", "D) Reacción alérgica leve por anticuerpos IgA"],
        respuestaCorrecta: 1,
        explicacion: "La inmensa mayoría de las reacciones hemolíticas agudas graves por incompatibilidad ABO ocurren debido a errores humanos en la identificación del paciente, tubos o componentes sanguíneos."
    },
    {
        id: 101,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "¿Qué prueba estadística paramétrica se utiliza para comparar las medias de dos grupos independientes cuando los datos siguen una distribución normal?",
        opciones: ["A) Prueba t de Student para muestras independientes", "B) Prueba de U de Mann-Whitney", "C) Coeficiente de correlación de Spearman", "D) Prueba de Chi-cuadrada de independencia"],
        respuestaCorrecta: 0,
        explicacion: "La prueba t de Student para muestras independientes es la prueba estadística paramétrica estándar para contrastar si las medias de dos poblaciones independientes difieren significativamente."
    },
    {
        id: 102,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "En una prueba diagnóstica de laboratorio, ¿cómo se define la sensibilidad diagnóstica?",
        opciones: ["A) La probabilidad de que la prueba dé resultado positivo en pacientes que verdaderamente tienen la enfermedad", "B) La probabilidad de que la prueba dé resultado negativo en personas sanas", "C) La proporción de resultados verdaderos positivos entre todos los resultados positivos", "D) La capacidad de repetir el mismo valor analítico en corridas sucesivas"],
        respuestaCorrecta: 0,
        explicacion: "La sensibilidad diagnóstica mide la capacidad de la prueba para identificar correctamente a los enfermos (Verdaderos Positivos / [Verdaderos Positivos + Falsos Negativos])."
    },
    {
        id: 103,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "Si una prueba diagnóstica tiene una alta especificidad, ¿qué característica clínica principal posee?",
        opciones: ["A) Genera muy pocos falsos positivos, por lo que es excelente para confirmar enfermedades al dar un resultado positivo", "B) Detecta a todos los enfermos sin dejar falsos negativos", "C) Es útil principalmente como prueba de escrutinio masivo", "D) No requiere valores de referencia poblacionales"],
        respuestaCorrecta: 0,
        explicacion: "La alta especificidad significa que la prueba rara vez da positivo en personas sanas (pocos falsos positivos), por lo que un resultado positivo es altamente útil para confirmar el diagnóstico."
    },
    {
        id: 104,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "¿Qué mide el valor predictivo positivo (VPP) de una prueba de laboratorio en una población determinada?",
        opciones: ["A) La probabilidad de que un paciente con resultado positivo tenga efectivamente la enfermedad", "B) La proporción de individuos sanos en la muestra total", "C) La sensibilidad multiplicada por la especificidad analítica", "D) La probabilidad de obtener un resultado falso negativo"],
        respuestaCorrecta: 0,
        explicacion: "El valor predictivo positivo (VPP) depende directamente de la sensibilidad, especificidad y de la prevalencia de la enfermedad en la población estudiada."
    },
    {
        id: 105,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "Cuando una variable cuantitativa continua no presenta distribución normal (asumida mediante pruebas de normalidad), ¿qué medida de tendencia central y dispersión es adecuado reportar?",
        opciones: ["A) Media aritmética y desviación estándar", "B) Mediana y rango intercuartílico (RIC)", "C) Moda y varianza total", "D) Promedio ponderado y coeficiente de variación"],
        respuestaCorrecta: 1,
        explicacion: "Ante distribuciones sesgadas o no paramétricas, la mediana y el rango intercuartílico describen de manera más robusta la tendencia central y la dispersión sin verse afectados por valores extremos."
    },
    {
        id: 106,
        area: "Sección Transversal: Ética, Bioseguridad y Normativa",
        pregunta: "Según los niveles de bioseguridad en laboratorios, ¿qué nivel se requiere para trabajar con agentes infecciosos que pueden transmitirse por aerosoles y causar enfermedades graves o potencialmente letales (como *Mycobacterium tuberculosis*)?",
        opciones: ["A) Nivel de Bioseguridad 1 (BSL-1)", "B) Nivel de Bioseguridad 2 (BSL-2)", "C) Nivel de Bioseguridad 3 (BSL-3)", "D) Nivel de Bioseguridad 4 (BSL-4)"],
        respuestaCorrecta: 2,
        explicacion: "El nivel de bioseguridad 3 (BSL-3) está diseñado para agentes patógenos que se transmiten por vía respiratoria o aerosoles, requiriendo ventilación de flujo negativo y equipo de protección respiratoria."
    },
    {
        id: 107,
        area: "Sección Transversal: Ética, Bioseguridad y Normativa",
        pregunta: "El principio bioético de beneficencia en la práctica del profesional de química clínica implica:",
        opciones: ["A) Actuar siempre en pro del bienestar del paciente, maximizando beneficios y minimizando riesgos en los procesos diagnósticos", "B) Respetar la autonomía absoluta del paciente para rechazar cualquier análisis", "C) Distribuir los recursos económicos del laboratorio equitativamente", "D) Mantener el anonimato comercial de los reactivos"],
        respuestaCorrecta: 0,
        explicacion: "La beneficencia obliga al personal de salud a buscar el bienestar y la correcta atención diagnóstica del paciente, asegurando calidad, oportunidad y rigor técnico en los resultados."
    },
    {
        id: 108,
        area: "Sección Transversal: Ética, Bioseguridad y Normativa",
        pregunta: "¿Qué establece el principio de confidencialidad y secreto profesional en el laboratorio clínico?",
        opciones: ["A) Que los resultados de los pacientes no deben ser divulgados a personas no autorizadas sin su consentimiento expreso", "B) Que el laboratorio no debe registrar el nombre del paciente en la base de datos", "C) Que los resultados analíticos son propiedad exclusiva del químico analista", "D) Que las estadísticas de salud pública no pueden publicarse nunca"],
        respuestaCorrecta: 0,
        explicacion: "La confidencialidad protege la privacidad del paciente, prohibiendo la divulgación de información médica y de laboratorio a terceros sin autorización legal o clínica justificada."
    },
    {
        id: 109,
        area: "Sección Transversal: Ética, Bioseguridad y Normativa",
        pregunta: "¿Cuál es el manejo correcto que debe darse a las muestras biológicas líquidas de pacientes (suero, orina) antes de su disposición final en el sistema de residuos?",
        opciones: ["A) Descartarlas directamente al drenaje municipal sin tratamiento previo", "B) Inactivación o descontaminación química (ej. con hipoclorito de sodio) o térmica antes de su vertido según normatividad ambiental", "C) Almacenarlas indefinidamente en los refrigeradores del laboratorio", "D) Mezclarlas con residuos sólidos municipales comunes"],
        respuestaCorrecta: 1,
        explicacion: "Los fluidos corporales biológicos deben ser desactivados e inactivados adecuadamente (generalmente mediante desinfección química o autoclave) antes de su eliminación para prevenir riesgos biológicos."
    },
    {
        id: 110,
        area: "Sección Transversal: Ética, Bioseguridad y Normativa",
        pregunta: "¿Qué equipo de protección personal (EPP) básico es obligatorio utilizar en el área técnica de procesamiento de un laboratorio de química clínica e infecciones?",
        opciones: ["A) Bata de laboratorio abotonada, guantes de protección desechables y gafas o careta de protección facial", "B) Ropa de calle descubierta sin bata", "C) Guantes de carnaza y botas industriales de casquillo", "D) Mascarilla quirúrgica simple sin protección ocular"],
        respuestaCorrecta: 0,
        explicacion: "El uso de bata adecuada, guantes de látex o nitrilo y protección ocular previene la exposición cutánea y de mucosas ante salpicaduras accidentales de materiales biológicos potencialmente infecciosos."
    },
    {
        id: 111,
        area: "Química Clínica y Patología Molecular",
        pregunta: "En la evaluación del metabolismo del hierro, ¿qué parámetro representa la cantidad máxima de hierro que puede unirse a las proteínas transportadoras (principalmente transferrina)?",
        opciones: ["A) Ferritina sérica", "B) Capacidad total de fijación de hierro (TIBC)", "C) Saturación de transferrina", "D) Hemosiderina tisular"],
        respuestaCorrecta: 1,
        explicacion: "La Capacidad Total de Fijación de Hierro (TIBC) mide los sitios de unión disponibles en la transferrina, elevándose típicamente en estados de deficiencia de hierro (anemia ferropénica)."
    },
    {
        id: 112,
        area: "Química Clínica y Patología Molecular",
        pregunta: "¿Qué alteración electrolítica se observa comúnmente en pacientes con cetoacidosis diabética debido a la diuresis osmótica y el déficit de insulina, a pesar de que el potasio corporal total esté depletado?",
        opciones: ["A) Hiperpotasemia o normopotasemia inicial por desplazamiento extracelular, seguida de hipopotasemia severa al iniciar la terapia con insulina", "B) Hiponatremia profunda irreversible", "C) Hipercalcemia maligna", "D) Hipomagnesemia aislada sin cambios en potasio"],
        respuestaCorrecta: 0,
        explicacion: "Debido a la acidosis y la falta de insulina, el potasio sale al espacio extracelular (dando valores altos o normales aparentes), pero al administrar insulina y corregir el pH, el potasio entra rápidamente a las células induciendo hipopotasemia severa."
    },
    {
        id: 113,
        area: "Hematología y Coagulación",
        pregunta: "En la evaluación de una púrpura trombocitopénica inmunitaria (PTI), ¿cuál es el hallazgo hematológico cardinal en la biometría hemática?",
        opciones: ["A) Trombocitopenia aislada con recuento plaquetario disminuido, a menudo con plaquetas gigantes en el frotis", "B) Pancitopenia severa con blastos circulantes", "C) Trombocitosis reactiva mayor a un millón", "D) Policitemia vera con aumento de masa eritrocitaria"],
        respuestaCorrecta: 0,
        explicacion: "La PTI es un trastorno autoinmune caracterizado por la destrucción periférica de plaquetas mediada por autoanticuerpos, manifestándose con trombocitopenia aislada y morfología plaquetaria a menudo aumentada (megaplaquetas)."
    },
    {
        id: 114,
        area: "Microbiología y Parasitología Médica",
        pregunta: "¿Qué medio de cultivo cromogénico se utiliza ampliamente en urocultivos para la identificación presuntiva rápida y directa de múltiples uropatógenos mediante la formación de colonias de diferentes colores?",
        opciones: ["A) Agar CLED (Cistina Lactosa Electrolito Deficiente) cromogénico", "B) Caldo infusión cerebro corazón", "C) Agar nutritivo simple", "D) Agar SS (Salmonella-Shigella)"],
        respuestaCorrecta: 0,
        explicacion: "Los agares cromogénicos contienen sustratos enzimáticos específicos que liberan cromóforos al ser metabolizados por enzimas bacterianas propias, permitiendo diferenciar especies como *E. coli*, *Klebsiella* y *Proteus* por el color de la colonia."
    },
    {
        id: 115,
        area: "Inmunología y Serología",
        pregunta: "¿Qué técnica analítica inmunoquímica mide la luz emitida como resultado de una reacción química catalizada por enzimas (como peroxidasa de rábano) o luminiscentes para la detección de anticuerpos o antígenos?",
        opciones: ["A) Quimioluminiscencia (CLIA)", "B) Inmunodifusión radial simple", "C) Electroforesis en acetato de celulosa", "D) Aglutinación en placa con látex"],
        respuestaCorrecta: 0,
        explicacion: "Los inmunoensayos de quimioluminiscencia (CLIA) combinan la especificidad antígeno-anticuerpo con una señal lumínica de alta sensibilidad y amplio rango dinámico, siendo el estándar en plataformas automatizadas."
    },
    {
        id: 116,
        area: "Uroanálisis y Líquidos Corporales",
        pregunta: "En el uroanálisis automatizado o manual, ¿qué significado clínico tiene la presencia masiva de cilindros granulosos bastos y finos?",
        opciones: ["A) Daño o degeneración tubular renal crónica o aguda (nefritis o daño isquémico)", "B) Infección urinaria baja leve por contaminación", "C) Ingesta excesiva de proteínas en la dieta", "D) Ausencia absoluta de patología renal"],
        respuestaCorrecta: 0,
        explicacion: "Los cilindros granulosos se forman por la desintegración de células epiteliales tubulares o agregación de proteínas plasmáticas, indicando daño parenquimatoso renal activo."
    },
    {
        id: 117,
        area: "Toxicología y Farmacología Clínica",
        pregunta: "¿Cuál es el parámetro toxicológico farmacocinético que representa el tiempo necesario para que la concentración plasmática de un fármaco disminuya a la mitad de su valor inicial?",
        opciones: ["A) Volumen de distribución (Vd)", "B) Depuración o aclaramiento renal (Cl)", "C) Vida media de eliminación (t1/2)", "D) Biodisponibilidad absoluta (F)"],
        respuestaCorrecta: 2,
        explicacion: "La vida media de eliminación (t1/2) es el tiempo requerido para que la concentración del fármaco en plasma se reduzca en un 50% durante la fase de eliminación, determinando el régimen de dosificación."
    },
    {
        id: 118,
        area: "Control de Calidad y Gestión de Laboratorio",
        pregunta: "En la acreditación de laboratorios clínicos bajo la norma ISO 15189, ¿cuál es la diferencia central frente a la norma ISO 9001?",
        opciones: ["A) La norma ISO 15189 es específica para la competencia técnica y calidad de los laboratorios médicos, mientras que ISO 9001 es un estándar genérico de gestión de calidad", "B) La norma ISO 15189 solo aplica para áreas administrativas", "C) La norma ISO 9001 es obligatoria para hospitales y la ISO 15189 es opcional", "D) No existe diferencia en sus requisitos técnicos"],
        respuestaCorrecta: 0,
        explicacion: "La norma ISO 15189 incluye tanto los requisitos generales de gestión de la calidad como los requisitos técnicos específicos de competencia en exámenes de laboratorio clínico (fase preanalítica, analítica y postanalítica)."
    },
    {
        id: 119,
        area: "Biología Molecular y Genética Médica",
        pregunta: "¿Qué técnica de biología molecular permite evaluar el perfil de expresión génica global de miles de genes simultáneamente utilizando una lámina de vidrio o silicio con sondas de ADN inmovilizadas?",
        opciones: ["A) Microarreglos de ADN (DNA Microarrays)", "B) Reacción en cadena de la ligasa (LCR)", "C) Secuenciación de Sanger clásica", "D) Western blot cuantitativo"],
        respuestaCorrecta: 0,
        explicacion: "Los microarreglos de ADN permiten hibridar ARN o ADNc marcado fluorescente de una muestra frente a miles de oligonucleótidos sonda fijos, evaluando niveles de expresión génica comparativa."
    },
    {
        id: 120,
        area: "Sección Transversal: Metodología y Bioestadística",
        pregunta: "En una prueba de hipótesis estadística, ¿cómo se define el valor de p (valor de probabilidad)?",
        opciones: ["A) La probabilidad de observar un resultado al menos tan extremo como el obtenido, bajo el supuesto de que la hipótesis nula es verdadera", "B) La probabilidad de cometer un error de tipo II (falso negativo)", "C) El porcentaje de exactitud analítica del equipo", "D) La prevalencia de la enfermedad en la muestra clínica"],
        respuestaCorrecta: 0,
        explicacion: "El valor de p cuantifica la compatibilidad de los datos observados con la hipótesis nula (no diferencia/no efecto); un valor menor al nivel de significancia (ej. p < 0.05) rechaza la hipótesis nula."
    }
];