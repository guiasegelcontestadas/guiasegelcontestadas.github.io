const bancoPreguntas = [
    // --- BLOQUE 1: Preguntas 1 a 60 ---
    {
        id: 1,
        area: "Biología Celular y Molecular",
        pregunta: "¿Cuál es el componente principal de la matriz extracelular en plantas que proporciona resistencia a la tensión y está compuesto por polímeros de glucosa?",
        opciones: [
            "A) Peptidoglicano",
            "B) Celulosa",
            "C) Quitina",
            "D) Pectina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La celulosa es un polisacárido de glucosa estructurado en microfibrillas que otorga resistencia mecánica y tensión a la pared celular vegetal."
    },
    {
        id: 2,
        area: "Biología Celular y Molecular",
        pregunta: "Durante la fase luminosa de la fotosíntesis, ¿cuál es el complejo proteico encargado de la fotólisis del agua para liberar oxígeno molecular?",
        opciones: [
            "A) Complejo Citocromo b6f",
            "B) ATP sintasa",
            "C) Fotosistema I",
            "D) Fotosistema II"
        ],
        respuestaCorrecta: 3,
        explicacion: "El Fotosistema II (PSII) contiene el complejo de evolución de oxígeno, el cual cataliza la oxidación y ruptura (fotólisis) de las moléculas de agua."
    },
    {
        id: 3,
        area: "Genética",
        pregunta: "En un análisis genético de poblaciones, si una población se encuentra en equilibrio de Hardy-Weinberg, ¿qué condición se debe cumplir obligatoriamente?",
        opciones: [
            "A) Selección natural direccional activa",
            "B) Tasas altas de mutación espontánea",
            "C) Ausencia de flujo génico o migración",
            "D) Deriva génica estocástica constante"
        ],
        respuestaCorrecta: 2,
        explicacion: "El equilibrio de Hardy-Weinberg requiere poblaciones grandes, apareamiento aleatorio, ausencia de mutación, selección natural y flujo génico (migración)."
    },
    {
        id: 4,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué enzima es la responsable principal de replicar el ADN en la cadena adelantada (leading strand) durante la replicación en procariotas?",
        opciones: [
            "A) ADN polimerasa III",
            "B) ADN polimerasa I",
            "C) Primasa",
            "D) ADN ligasa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ADN polimerasa III es la enzima principal de elongación en la replicación bacteriana, tanto en la cadena adelantada como en los fragmentos de Okazaki."
    },
    {
        id: 5,
        area: "Biología Celular y Molecular",
        pregunta: "En el ciclo de Krebs, la conversión de succinil-CoA a succinato va acoplada directamente a la síntesis de:",
        opciones: [
            "A) NADH",
            "B) FADH2",
            "C) GTP o ATP",
            "D) Acetil-CoA"
        ],
        respuestaCorrecta: 2,
        explicacion: "Esta reacción de fosforilación a nivel de sustrato catalizada por la succinil-CoA sintetasa produce GTP (que puede convertirse en ATP)."
    },
    {
        id: 6,
        area: "Ecología y Biodiversidad",
        pregunta: "¿Cómo se le denomina a la interacción biológica interespecífica donde una especie inhibe o perjudica a otra sin verse afectada directamente por esta última?",
        opciones: [
            "A) Comensalismo",
            "B) Depredación",
            "C) Mutualismo",
            "D) Amensalismo"
        ],
        respuestaCorrecta: 3,
        explicacion: "El amensalismo es una relación simbiótica unilateral negativa donde un organismo resulta dañado y el otro no experimenta cambios significativos (ej. alelopatía)."
    },
    {
        id: 7,
        area: "Genética",
        pregunta: "En la regulación de la expresión génica en eucariotas, ¿qué modificación post-traduccional de las histonas suele asociarse con una cromatina relajada y transcripcionalmente activa?",
        opciones: [
            "A) Acetilación",
            "B) Metilación intensa",
            "C) Fosforilación represora",
            "D) Ubicuitinación densa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La acetilación de los residuos de lisina en las colas de las histonas neutraliza su carga positiva, disminuyendo su afinidad por el ADN y abriendo la cromatina (eucromatina)."
    },
    {
        id: 8,
        area: "Evolución y Biodiversidad",
        pregunta: "Una planta que presenta tejidos vasculares con xilema y floema, se reproduce mediante esporas y carece de semillas y flores pertenece al grupo de los:",
        opciones: [
            "A) Briófitas",
            "B) Pteridofitas",
            "C) Gimnospermas",
            "D) Angiospermas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pteridofitas (como los helechos) son plantas vasculares (traqueofitas) sin semillas que dependen de esporas para su dispersión."
    },
    {
        id: 9,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología renal humana, ¿en qué estructura exacta de la nefrona se reabsorbe el mayor porcentaje del agua filtrada de forma obligatoria?",
        opciones: [
            "A) Túbulo contorneado distal",
            "B) Asa de Henle (rama ascendente)",
            "C) Túbulo contorneado proximal",
            "D) Conducto colector"
        ],
        respuestaCorrecta: 2,
        explicacion: "El túbulo contorneado proximal reabsorbe aproximadamente el 65-70% del agua filtrada y de los solutos de manera isoosmótica."
    },
    {
        id: 10,
        area: "Genética",
        pregunta: "En genética de poblaciones, la deriva génica afecta con mayor intensidad y velocidad a:",
        opciones: [
            "A) Poblaciones con tamaños efectivos extremadamente pequeños",
            "B) Poblaciones infinitamente grandes en panmixia",
            "C) Poblaciones sometidas a presiones selectivas constantes",
            "D) Poblaciones con altas tasas de migración unidireccional"
        ],
        respuestaCorrecta: 0,
        explicacion: "La deriva génica es un cambio estocástico en las frecuencias alélicas impulsado por el azar; su impacto es inversamente proporcional al tamaño de la población."
    },
    {
        id: 11,
        area: "Ecología y Biodiversidad",
        pregunta: "¿Qué nombre recibe la comunidad clímax caracterizada por bajas temperaturas, suelo permanentemente congelado (permafrost) y vegetación dominada por musgos y líquenes?",
        opciones: [
            "A) Taiga",
            "B) Tundra",
            "C) Bosque templado",
            "D) Pradera alpina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tundra se define por su permafrost, inviernos rigurosos y una flora de baja estatura adaptada a temporadas de crecimiento muy cortas."
    },
    {
        id: 12,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la transducción de señales hormonales, ¿qué segundo mensajero se activa comúnmente tras la estimulación de receptores acoplados a proteína Gs?",
        opciones: [
            "A) Inositol trifosfato (IP3)",
            "B) Diacilglicerol (DAG)",
            "C) AMP cíclico (AMPc)",
            "D) GMP cíclico (GMPc)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La subunidad alfa estimulante (Gs) activa la adenilciclasa, enzima que sintetiza AMP cíclico a partir de ATP."
    },
    {
        id: 13,
        area: "Biología Celular y Molecular",
        pregunta: "Durante la síntesis de proteínas, ¿cuál es el sitio del ribosoma donde ingresa inicialmente el aminoacil-tRNA cargado con el nuevo aminoácido?",
        opciones: [
            "A) Sitio A (Aminoacilo)",
            "B) Sitio P (Peptidilo)",
            "C) Sitio E (Exit/Salida)",
            "D) Sitio R (Reconocimiento)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sitio A (aminoacilo) es el punto de entrada para los nuevos tRNAs cargados con su respectivo aminoácido durante la elongación traduccional."
    },
    {
        id: 14,
        area: "Ecología y Biodiversidad",
        pregunta: "En las interacciones planta-animal, ¿cómo se le denomina a la relación mutualista en la cual al menos una de las especies involucradas depende totalmente de la otra para completar su ciclo de vida?",
        opciones: [
            "A) Mutualismo facultativo",
            "B) Mutualismo obligado",
            "C) Protocooperación",
            "D) Simbiosis neutral"
        ],
        respuestaCorrecta: 1,
        explicacion: "El mutualismo obligado o simbiótico estricto ocurre cuando las especies asociadas no pueden sobrevivir o reproducirse de forma independiente (ej. líquenes)."
    },
    {
        id: 15,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fotosíntesis de plantas tipo C4, ¿en qué tipo celular ocurre específicamente la fijación del carbono mediada por la enzima PEP carboxilasa?",
        opciones: [
            "A) Células del mesófilo",
            "B) Células de la vaina del haz",
            "C) Células oclusivas estomáticas",
            "D) Células epidérmicas generales"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el ciclo C4, el CO2 se fija inicialmente en las células del mesófilo mediante la PEP carboxilasa formando malato, el cual es transportado a la vaina del haz."
    },
    {
        id: 16,
        area: "Genética",
        pregunta: "En genética molecular, una mutación puntual por sustitución que convierte un codón codificante de un aminoácido en un codón de parada prematuro se denomina:",
        opciones: [
            "A) Mutación silenciosa",
            "B) Mutación missense (con sentido erróneo)",
            "C) Mutación nonsense (sin sentido)",
            "D) Mutación por cambio de marco de lectura"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las mutaciones nonsense introducen un codón de terminación (UAA, UAG o UGA), provocando el truncamiento prematuro de la proteína traducida."
    },
    {
        id: 17,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué orgánulo celular eucariota participa directamente en la detoxificación de sustancias nocivas, el metabolismo de lípidos y el almacenamiento de iones calcio?",
        opciones: [
            "A) Retículo endoplasmático liso",
            "B) Aparato de Golgi",
            "C) Lisosoma primario",
            "D) Mitocondria"
        ],
        respuestaCorrecta: 0,
        explicacion: "El retículo endoplasmático liso (REL) carece de ribosomas y se especializa en la síntesis lipídica, detoxificación microsomal y almacenamiento de Ca²⁺."
    },
    {
        id: 18,
        area: "Ecología y Biodiversidad",
        pregunta: "En la sucesión ecológica, ¿cuáles son los organismos considerados pioneros que colonizan sustratos rocosos desnudos y contribuyen a la meteorización inicial del suelo?",
        opciones: [
            "A) Arbustivas leñosas perennes",
            "B) Líquenes y musgos crustáceos",
            "C) Árboles de madera dura de gran porte",
            "D) Helechos arborescentes tropicales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los líquenes (asociación de hongo y alga/cianobacteria) segregan ácidos orgánicos que degradan la roca, iniciando la formación del suelo en la sucesión primaria."
    },
    {
        id: 19,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología del sistema nervioso, ¿cuál es el ion cuyo flujo masivo hacia el interior de la neurona genera la fase de despolarización del potencial de acción?",
        opciones: [
            "A) Potasio (K+)",
            "B) Cloruro (Cl-)",
            "C) Sodio (Na+)",
            "D) Calcio (Ca2+)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La apertura rápida de los canales de sodio dependientes de voltaje permite la entrada masiva de Na+, invirtiendo temporalmente el potencial de membrana."
    },
    {
        id: 20,
        area: "Evolución y Biodiversidad",
        pregunta: "En especiación, el aislamiento reproductivo que ocurre cuando dos poblaciones divergen debido a diferencias en sus épocas o estaciones de reproducción se clasifica como:",
        opciones: [
            "A) Aislamiento ecológico o de hábitat",
            "B) Aislamiento temporal o estacional",
            "C) Aislamiento etológico o conductual",
            "D) Aislamiento mecánicamente incompatible"
        ],
        respuestaCorrecta: 1,
        explicacion: "El aislamiento temporal (o estacional) previene el cruzamiento porque los períodos de maduración sexual o época reproductiva ocurren en momentos distintos."
    },
    {
        id: 21,
        area: "Biología Celular y Molecular",
        pregunta: "¿Cuál es la función principal de las proteínas chaperonas moleculares (como las Hsp70) dentro del entorno celular?",
        opciones: [
            "A) Degradificar proteínas mal plegadas mediante ubiquitinación",
            "B) Facilitar el correcto plegamiento tridimensional de cadenas polipeptídicas",
            "C) Transportar proteínas a través de la membrana nuclear interna",
            "D) Catalizar la formación de enlaces peptídicos en el ribosoma"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las chaperonas previenen la agregación proteica incorrecta y auxilian en el replegamiento adecuado de proteínas nacientes o desnaturalizadas."
    },
    {
        id: 22,
        area: "Ecología y Biodiversidad",
        pregunta: "En los ecosistemas acuáticos, la zona iluminada donde la tasa de fotosíntesis supera a la tasa de respiración se denomina zona:",
        opciones: [
            "A) Afótica",
            "B) Abisal",
            "C) Fótica",
            "D) Bentónica profunda"
        ],
        respuestaCorrecta: 2,
        explicacion: "La zona fótica recibe suficiente radiación solar para permitir la actividad fotosintética neta positiva por parte del fitoplancton y plantas acuáticas."
    },
    {
        id: 23,
        area: "Genética",
        pregunta: "En genética mendeliana, el fenómeno en el cual un solo gen enmascara o altera la expresión fenotípica de otro gen independiente se conoce como:",
        opciones: [
            "A) Pleiotropía",
            "B) Codominancia",
            "C) Herencia poligénica",
            "D) Epistasis"
        ],
        respuestaCorrecta: 3,
        explicacion: "La epistasis ocurre cuando la expresión de un gen depende o es modificada por la presencia de uno o más genes modificadores (epistáticos)."
    },
    {
        id: 24,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología respiratoria de mamíferos, ¿de qué manera se transporta el mayor porcentaje de dióxido de carbono (CO2) desde los tejidos hacia los pulmones?",
        opciones: [
            "A) Disuelto directamente en el plasma sanguíneo",
            "B) Unido covalentemente a la porción hemo de la hemoglobina",
            "C) En forma de iones bicarbonato (HCO3-) en el plasma",
            "D) Transportado en el interior de los leucocitos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Alrededor del 70% del CO2 se transporta disuelto en forma de bicarbonato (HCO3-) gracias a la acción de la anhidrasa carbónica en los eritrocitos."
    },
    {
        id: 25,
        area: "Evolución y Biodiversidad",
        pregunta: "En taxonomía cladística, un grupo taxonómico que incluye a un ancestro común y a *todos* sus descendientes conocidos se define formalmente como:",
        opciones: [
            "A) Grupo monofilético (clado)",
            "B) Grupo parafilético",
            "C) Grupo polifilético",
            "D) Taxón artificial"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un clado o grupo monofilético comprende rigurosamente a un ancestro común exclusivo y a la totalidad de las líneas evolutivas descendientes de este."
    },
    {
        id: 26,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué enzima viral utilizan los retrovirus para sintetizar una cadena de ADN complementario (ADNc) a partir de su genoma de ARN monocatenario?",
        opciones: [
            "A) ARN polimerasa dependiente de ADN",
            "B) Transcriptasa inversa (retrotranscriptasa)",
            "C) Telomerasa eucariota",
            "D) ARNasa H específica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La transcriptasa inversa es la característica distintiva de los retrovirus, permitiendo el flujo de información genética de ARN a ADN."
    },
    {
        id: 27,
        area: "Ecología y Biodiversidad",
        pregunta: "En dinámica de poblaciones, el modelo logístico de crecimiento poblacional incorpora un parámetro fundamental que representa la capacidad máxima de carga del ambiente:",
        opciones: [
            "A) Tasa intrínseca de crecimiento (r)",
            "B) Densidad poblacional instantánea (N)",
            "C) Capacidad de carga (K)",
            "D) Coeficiente de resistencia ambiental (S)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La capacidad de carga (K) denota el número máximo de individuos que un hábitat puede sostener indefinidamente sin degradar los recursos disponibles."
    },
    {
        id: 28,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En el metabolismo vegetal, ¿cuál es el principal producto orgánico transportado a larga distancia a través de los tubos cribosos del floema?",
        opciones: [
            "A) Almidón de reserva insoluble",
            "B) Sacarosa soluble",
            "C) Celulosa estructural",
            "D) Glucosa libre"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sacarosa es el azúcar no reductor transportado preferentemente por el floema debido a su estabilidad química durante la translocación."
    },
    {
        id: 29,
        area: "Genética",
        pregunta: "En genética de poblaciones, ¿qué fuerza evolutiva introduce consistentemente nueva variabilidad genética aleatoria en el acervo génico de una población?",
        opciones: [
            "A) Deriva génica",
            "B) Selección natural estabilizadora",
            "C) Mutación",
            "D) Endogamia estricta"
        ],
        respuestaCorrecta: 2,
        explicacion: "La mutación es la fuente primaria y fundamental de toda nueva variabilidad genética al alterar la secuencia de nucleótidos de forma aleatoria."
    },
    {
        id: 30,
        area: "Evolución y Biodiversidad",
        pregunta: "¿Cuál es la teoría aceptada sobre el origen evolutivo de las mitocondrias y cloroplastos en células eucariotas?",
        opciones: [
            "A) Invaginación progresiva de la membrana plasmática",
            "B) Endosimbiosis seriada",
            "C) Generación espontánea intracelular",
            "D) Fusión directa de núcleos bacterianos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La teoría endosimbiótica postula que orgánulos como mitocondrias y plastos evolucionaron a partir de bacterias aerobias y cianobacterias fagocitadas ancestralmente."
    },
    {
        id: 31,
        area: "Biología Celular y Molecular",
        pregunta: "Durante la división celular mitótica, ¿en qué subfase específica de la profase I meiótica ocurre el fenómeno de entrecruzamiento (crossing-over) y recombinación genética?",
        opciones: [
            "A) Leptonema",
            "B) Cigonema",
            "C) Paquinema",
            "D) Diacinesis"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el paquinema (paquiteno), los cromosomas homólogos están estrechamente sinapsados y se producen los entrecruzamientos físicos entre cromátidas no hermanas."
    },
    {
        id: 32,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología trófica, ¿qué porcentaje aproximado de energía disponible se transfiere típicamente de un nivel trófico al inmediato superior según la ley ecológica general?",
        opciones: [
            "A) 90%",
            "B) 50%",
            "C) 10%",
            "D) 1%"
        ],
        respuestaCorrecta: 2,
        explicacion: "La regla ecológica del 10% (o eficiencia ecológica de Lindeman) establece que solo alrededor del 10% de la energía biomasa pasa al siguiente nivel trófico."
    },
    {
        id: 33,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En endocrinología humana, ¿cuál es la glándula endocrina que secreta la hormona calcitonina, encargada de disminuir los niveles séricos de calcio en sangre?",
        opciones: [
            "A) Glándulas paratiroides",
            "B) Glándula tiroides",
            "C) Páncreas endocrino",
            "D) Corteza suprarrenal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las células parafoliculares (células C) de la glándula tiroides sintetizan y secretan calcitonina en respuesta a hipercalcemia."
    },
    {
        id: 34,
        area: "Genética",
        pregunta: "En genética molecular, la técnica de laboratorio empleada para amplificar exponencialmente fragmentos específicos de ADN mediante ciclos térmicos se conoce como:",
        opciones: [
            "A) Electroforesis en gel de agarosa",
            "B) Secuenciación por síntesis de Sanger",
            "C) Reacción en Cadena de la Polimerasa (PCR)",
            "D) Southern Blotting"
        ],
        respuestaCorrecta: 2,
        explicacion: "La PCR utiliza ciclos de desnaturalización, apareamiento de cebadores y extensión enzimática para generar millones de copias de una secuencia blanco."
    },
    {
        id: 35,
        area: "Evolución y Biodiversidad",
        pregunta: "En la evolución de los vertebrados, ¿cuál fue la innovación adaptativa clave que permitió a los amniotas independizarse del medio acuático para su reproducción?",
        opciones: [
            "A) Desarrollo de aletas lobuladas carnosas",
            "B) Aparición del huevo amniótico con membranas protectoras",
            "C) Presencia de branquias operculadas eficientes",
            "D) Piel desnuda permeable al oxígeno cutáneo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El huevo amniótico cuenta con amnios, corion y alantoides, permitiendo el desarrollo embrionario terrestre sin desecación."
    },
    {
        id: 36,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué nombre recibe el proceso bioquímico mediante el cual las células degradan sus propios orgánulos dañados utilizando autofagosomas y lisosomas?",
        opciones: [
            "A) Apoptosis",
            "B) Necrosis inflamatoria",
            "C) Autofagia",
            "D) Pinocitosis constitutiva"
        ],
        respuestaCorrecta: 2,
        explicacion: "La autofagia es un mecanismo de reciclaje celular donde componentes citoplasmáticos y orgánulos disfuncionales son englobados y digeridos."
    },
    {
        id: 37,
        area: "Ecología y Biodiversidad",
        pregunta: "En biogeografía ecológica, ¿cómo se denominan aquellas especies nativas que habitan exclusivamente en un área geográfica restringida y no se encuentran de forma natural en ninguna otra parte del planeta?",
        opciones: [
            "A) Especies cosmopolitas",
            "B) Especies endémicas",
            "C) Especies invasoras exóticas",
            "D) Especies indicadoras temporales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El endemismo caracteriza a taxones con distribuciones geográficas muy limitadas debido a barreras ecológicas o aislamiento evolutivo."
    },
    {
        id: 38,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En fisiología muscular esquelética, ¿qué proteína filamentosa del sarcómero bloquea los sitios de unión de la miosina sobre la actina en ausencia de iones calcio?",
        opciones: [
            "A) Tropomiosina",
            "B) Titinia elástica",
            "C) Distrofina estructural",
            "D) Mioglobina transportadora"
        ],
        respuestaCorrecta: 0,
        explicacion: "En reposo, la tropomiosina descansa sobre los sitios activos de la actina bloqueando la interacción con los puentes de miosina."
    },
    {
        id: 39,
        area: "Genética",
        pregunta: "En genética cuantitativa, la proporción de la varianza fenotípica total de una población que es atribuible a factores genéticos aditivos se conoce como:",
        opciones: [
            "A) Heredabilidad en sentido amplio",
            "B) Coeficiente de endogamia poblacional",
            "C) Heredabilidad en sentido estricto",
            "D) Varianza ambiental estocástica"
        ],
        respuestaCorrecta: 2,
        explicacion: "La heredabilidad en sentido estricto mide la proporción de la varianza fenotípica debida estrictamente a la varianza genética aditiva, fundamental para la selección."
    },
    {
        id: 40,
        area: "Evolución y Biodiversidad",
        pregunta: "En la teoría evolutiva moderna, la macroevolución se refiere fundamentalmente a:",
        opciones: [
            "A) Cambios menores en las frecuencias alélicas de una población local",
            "B) Patrones y procesos de especiación y diversificación por encima del nivel de especie",
            "C) Mutaciones genéticas puntuales espontáneas en células somáticas",
            "D) Deriva génica inducida por cuellos de botella poblacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La macroevolución analiza la historia evolutiva a gran escala, incluyendo la formación de nuevos taxones superiores y extinciones masivas."
    },
    {
        id: 41,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué enzima es la encargada de unir los fragmentos de Okazaki mediante enlaces fosfodiéster durante la replicación discontinua del ADN?",
        opciones: [
            "A) Helicasa desestabilizadora",
            "B) Topoisomerasa girasa",
            "C) ADN polimerasa I",
            "D) ADN ligasa"
        ],
        respuestaCorrecta: 3,
        explicacion: "La ADN ligasa sella las muescas restantes en el esqueleto de azúcar-fosfato tras la sustitución de los cebadores de ARN, uniendo los fragmentos de Okazaki."
    },
    {
        id: 42,
        area: "Ecología y Biodiversidad",
        pregunta: "En los ciclos biogeoquímicos, ¿cuál es el proceso microbiano anaerobio mediante el cual los nitratos del suelo se convierten en gas nitrógeno (N2), retornándolo a la atmósfera?",
        opciones: [
            "A) Nitrificación amoniacal",
            "B) Desnitrificación",
            "C) Amonificación orgánica",
            "D) Fijación biológica del nitrógeno"
        ],
        respuestaCorrecta: 1,
        explicacion: "La desnitrificación es llevada a cabo por bacterias desnitrificantes en condiciones anaeróbicas, cerrando el ciclo global del nitrógeno."
    },
    {
        id: 43,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En fisiología cardiovascular, ¿qué estructura del sistema de conducción cardíaco se reconoce formalmente como el 'marcapasos natural' del corazón humano?",
        opciones: [
            "A) Nodo aurículo-ventricular (AV)",
            "B) Haz de His",
            "C) Fibras de Purkinje",
            "D) Nodo sinusal (sinoauricular)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El nodo sinusal (SA), ubicado en la aurícula derecha, posee la mayor automatización y frecuencia de despolarización espontánea, marcando el ritmo cardíaco."
    },
    {
        id: 44,
        area: "Genética",
        pregunta: "En genética de poblaciones, el apareamiento preferencial entre individuos genéticamente emparentados se conoce como:",
        opciones: [
            "A) Panmixia estricta",
            "B) Endogamia (inbreeding)",
            "C) Flujo génico heterogéneo",
            "D) Aislamiento reproductivo geográfico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La endogamia incrementa la homocigosidad en la población, elevando la probabilidad de expresión de alelos deletéreos recesivos."
    },
    {
        id: 45,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología de comunidades, ¿cómo se denomina a aquella especie que ejerce un control desproporcionadamente fuerte sobre la estructura de la comunidad en relación con su baja abundancia relativa?",
        opciones: [
            "A) Especie dominante",
            "B) Especie clave (keystone species)",
            "C) Especie indicadora pasiva",
            "D) Especie generalista basal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una especie clave tiene un impacto sistémico crítico en su ecosistema; su remoción provoca colapsos drásticos en la biodiversidad local."
    },
    {
        id: 46,
        area: "Biología Celular y Molecular",
        pregunta: "En la estructura de las proteínas, ¿qué tipo de enlaces químicos estabilizan primordialmente la estructura secundaria como las hélice-alfa y láminas plegadas beta?",
        opciones: [
            "A) Puentes de hidrógeno entre grupos peptídicos del esqueleto",
            "B) Enlaces covalentes disulfuro fuertes",
            "C) Interacciones hidrófobas en el núcleo globular",
            "D) Enlaces iónicos entre cadenas laterales cargadas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La estructura secundaria se estabiliza mediante puentes de hidrógeno recurrentes formados entre los átomos del esqueleto peptídico (C=O y N-H)."
    },
    {
        id: 47,
        area: "Evolución y Biodiversidad",
        pregunta: "En la evolución humana y de primates, el bipedalismo obligatorio trajo como consecuencia anatómica principal:",
        opciones: [
            "A) El ensanchamiento y acortamiento del hueso ilíaco de la pelvis",
            "B) La alineación del dedo pulgar oponible en los pies",
            "C) El incremento masivo y exclusivo de los caninos maxilares",
            "D) La rigidez total de la columna vertebral sin curvaturas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La adaptación pélvica para la locomoción bípeda requiere una pelvis más corta y ancha para soportar los músculos abductores del muslo."
    },
    {
        id: 48,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En fisiología vegetal, ¿cuál es la hormona fitorreguladora principal responsable de la respuesta de fototropismo y elongación celular en tallos?",
        opciones: [
            "A) Ácido abscísico",
            "B) Etileno gaseoso",
            "C) Auxina (ácido indolacético)",
            "D) Citoquinina sintética"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las auxinas se redistribuyen hacia el lado sombreado del tallo, promoviendo la elongación diferencial y curvatura hacia la luz."
    },
    {
        id: 49,
        area: "Genética",
        pregunta: "En biología molecular, ¿cuál es el propósito fundamental de utilizar un plásmido como vector de clonación en experimentos de ADN recombinante?",
        opciones: [
            "A) Degradar fragmentos extraños de ADN bacteriano",
            "B) Transportar y replicar un segmento de ADN insertado dentro de un organismo hospedero",
            "C) Sintetizar anticuerpos monoclonales contra patógenos",
            "D) Desnaturalizar proteínas recombinantes a altas temperaturas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los plásmidos actúan como vehículos estables capaces de replicarse autónomamente y propagar el gen de interés dentro de bacterias huésped."
    },
    {
        id: 50,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología, el conjunto de todas las condiciones ambientales y recursos que una especie necesita para sobrevivir y reproducirse dentro de un ecosistema se define como:",
        opciones: [
            "A) Hábitat geográfico",
            "B) Nicho ecológico fundamental/efectivo",
            "C) Bioma biogeográfico",
            "D) Territorio de campeo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El nicho ecológico abarca el hipervolumen multidimensional de requerimientos bióticos y abióticos necesarios para la persistencia de una especie."
    },
    {
        id: 51,
        area: "Fisiología Animal y Vegetal",
        pregunta: "Durante la contracción muscular en fibras cardíacas y esqueléticas, los iones calcio se liberan directamente hacia el sarcoplasma desde:",
        opciones: [
            "A) El retículo sarcoplásmico",
            "B) El espacio intermembranal mitocondrial",
            "C) El líquido cefalorraquídeo circundante",
            "D) El citosol de los eritrocitos maduros"
        ],
        respuestaCorrecta: 0,
        explicacion: "El retículo sarcoplásmico almacena y libera masivamente iones Ca²⁺ hacia el sarcoplasma cuando es estimulado por el potencial de acción tubular."
    },
    {
        id: 52,
        area: "Genética",
        pregunta: "En genética de poblaciones, la selección natural que favorece simultáneamente a los fenotipos extremos de una población en detrimento de los fenotipos intermedios se denomina:",
        opciones: [
            "A) Selección estabilizadora",
            "B) Selección direccional",
            "C) Selección disruptiva (diversificadora)",
            "D) Selección sexual pasiva"
        ],
        respuestaCorrecta: 2,
        explicacion: "La selección disruptiva fragmenta la varianza fenotípica favoreciendo los extremos, lo que puede impulsar eventos de especiación simpátrica."
    },
    {
        id: 53,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué enzima es la encargada de mantener la longitud de los telómeros en células germinales y cancerosas, evitando su acortamiento progresivo?",
        opciones: [
            "A) ADN ligasa de reparación",
            "B) Telomerasa",
            "C) Endonucleasa de restricción",
            "D) ARN polimerasa III"
        ],
        respuestaCorrecta: 1,
        explicacion: "La telomerasa es una ribonucleoproteína transcriptasa inversa que añade secuencias repetitivas a los extremos de los cromosomas (telómeros)."
    },
    {
        id: 54,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En fisiología endocrina, ¿cuál es el órgano diana principal y la función de la hormona antidiurética (HAD o vasopresina)?",
        opciones: [
            "A) Túbulos renales colectores, estimulando la reabsorción de agua",
            "B) Corteza suprarrenal, liberando cortisol sistémico",
            "C) Glándula mamaria, induciendo la eyección láctea",
            "D) Huesos largos, promoviendo la mineralización de matriz"
        ],
        respuestaCorrecta: 0,
        explicacion: "La HAD actúa sobre los conductos colectores del riñón insertando acuaporinas-2, lo que incrementa la reabsorción hídrica y concentra la orina."
    },
    {
        id: 55,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología de poblaciones, ¿cómo se denominan las especies que se caracterizan por una tasa reproductiva alta (r), maduración temprana, ciclos de vida cortos y escaso cuidado parental?",
        opciones: [
            "A) Especies estrategas de la K",
            "B) Especies climácicas estables",
            "C) Especies estrategas de la r",
            "D) Especies endémicas relictas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las especies seleccionadas por r priorizan la alta tasa de crecimiento poblacional en ambientes inestables o transitorios frente a la inversión parental."
    },
    {
        id: 56,
        area: "Evolución y Biodiversidad",
        pregunta: "En biología evolutiva, las estructuras anatómicas que comparten un origen embriológico común aunque desempeñen funciones totalmente diferentes en distintas especies se denominan órganos:",
        opciones: [
            "A) Análogos",
            "B) Homólogos",
            "C) Vestigiales atávicos",
            "D) Convergentes"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los órganos homólogos reflejan divergencia evolutiva a partir de un ancestro común (ej. extremidades anteriores de mamíferos)."
    },
    {
        id: 57,
        area: "Genética",
        pregunta: "En genética, el síndrome de Down en humanos (trisomía del cromosoma 21) se origina comúnmente debido a un error celular conocido como:",
        opciones: [
            "A) Translocación recíproca equilibrada",
            "B) No disyunción cromosómica durante la meiosis",
            "C) Deleción intersticial del brazo corto",
            "D) Duplicación masiva de telómeros"
        ],
        respuestaCorrecta: 1,
        explicacion: "La no disyunción cromosómica (fallo en la separación de cromosomas homólogos o cromátidas hermanas durante la meiosis) genera gametos con dotaciones aneuploides."
    },
    {
        id: 58,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué proceso celular eucariota implica la muerte celular programada limpia, caracterizada por condensación cromatínica, fragmentación del ADN y formación de cuerpos apoptóticos?",
        opciones: [
            "A) Necrosis tisular por isquemia",
            "B) Apoptosis",
            "C) Lisis osmótica bacteriana",
            "D) Autofagositosos masiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "La apoptosis es una vía de muerte celular controlada mediada por caspasas que evita la inflamación tisular al no liberar el contenido intracelular."
    },
    {
        id: 59,
        area: "Ecología y Biodiversidad",
        pregunta: "En los ecosistemas terrestres, ¿cuál es el compartimento que almacena la mayor reserva global de carbono dentro del ciclo biogeoquímico correspondiente?",
        opciones: [
            "A) La biomasa de los bosques tropicales",
            "B) La atmósfera en forma de CO2",
            "C) Los océanos (carbono disuelto e inorgánico)",
            "D) Los suelos y combustibles fósiles subterráneos"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los océanos actúan como el sumidero y reservorio más grande de carbono activo del planeta, conteniéndolo principalmente como ion bicarbonato."
    },
    {
        id: 60,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En fisiología digestiva humana, ¿en qué región específica del tubo digestivo se produce la absorción de la gran mayoría de los nutrientes digeridos?",
        opciones: [
            "A) Estómago proximal",
            "B) Intestino delgado (yeyuno-íleon)",
            "C) Intestino grueso colonico",
            "D) Esófago distal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El intestino delgado, gracias a sus vellosidades y microvellosidades que maximizan el área superficial, absorbe carbohidratos, aminoácidos y lípidos."
    },

    // --- BLOQUE 2: Preguntas 61 a 120 ---
    {
        id: 61,
        area: "Genética",
        pregunta: "En genética molecular, los intrones son secuencias de nucleótidos que se caracterizan por:",
        opciones: [
            "A) Codificar directamente para los aminoácidos de la proteína final",
            "B) Ser eliminados del ARN mensajero inmaduro mediante el proceso de corte y empalme (splicing)",
            "C) Permanecer siempre en el ARN mensajero maduro listo para traducción",
            "D) Ser traducidos exclusivamente en los ribosomas libres del citoplasma"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los intrones son regiones no codificantes que se transcriben pero son removidas durante el procesamiento post-transcripcional del ARNm."
    },
    {
        id: 62,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué tipo de unión intercelular en tejidos epiteliales sella el espacio extracelular impidiendo el paso libre de moléculas a través de la paracelular?",
        opciones: [
            "A) Desmosomas o mácula adherens",
            "B) Uniones estrechas (tight junctions / zonula occludens)",
            "C) Uniones de hendidura (gap junctions)",
            "D) Hemidesmosomas de anclaje basal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las uniones estrechas o zonula occludens forman una barrera impermeable continua entre células epiteliales vecinas, regulando el tránsito paracelular."
    },
    {
        id: 63,
        area: "Genética",
        pregunta: "En el operón lac de *Escherichia coli*, ¿cuál es la función de la proteína represora en ausencia de lactosa en el medio?",
        opciones: [
            "A) Unirse al operador impidiendo físicamente la transcripción por la ARN polimerasa",
            "B) Activar la traducción masiva de la enzima beta-galactosidasa",
            "C) Degradar el exceso de glucosa intracelular disponible",
            "D) Transportar lactosa al interior del citoplasma bacteriano"
        ],
        respuestaCorrecta: 0,
        explicacion: "En ausencia de lactosa, el represor codificado por el gen i se une a la región operadora, bloqueando el avance de la ARN polimerasa y silenciando el operón."
    },
    {
        id: 64,
        area: "Ecología y Biodiversidad",
        pregunta: "En dinámica de comunidades, ¿cómo se denomina al proceso gradual de cambio en la composición de especies de un ecosistema tras una perturbación severa que no destruyó totalmente el suelo preexistente?",
        opciones: [
            "A) Sucesión primaria",
            "B) Deriva continental",
            "C) Sucesión secundaria",
            "D) Especiación alopátrida"
        ],
        respuestaCorrecta: 2,
        explicacion: "La sucesión secundaria ocurre en áreas previamente ocupadas donde el suelo y los propágulos biológicos sobrevivieron parcialmente tras un incendio o tala."
    },
    {
        id: 65,
        area: "Fisiología Animal y Vegetal",
        pregunta: "¿Cuál es el principal sitio anatómico de secreción de la hormona insulina en respuesta a la hiperglucemia posprandial en humanos?",
        opciones: [
            "A) Células alfa de los islotes de Langerhans en el páncreas",
            "B) Células beta de los islotes de Langerhans en el páncreas",
            "C) Hepatocitos de los lóbulos hepáticos",
            "D) Corteza de las glándulas suprarrenales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las células beta de los islotes pancreáticos secretan insulina para facilitar la captación celular de glucosa y reducir los niveles en sangre."
    },
    {
        id: 66,
        area: "Evolución y Biodiversidad",
        pregunta: "En biología evolutiva, el proceso mediante el cual especies de distintos linajes desarrollan características morfológicas o fisiológicas similares debido a presiones ambientales semejantes se denomina:",
        opciones: [
            "A) Evolución divergente",
            "B) Radiación adaptativa",
            "C) Evolución convergente",
            "D) Especiación simpátrica estricta"
        ],
        respuestaCorrecta: 2,
        explicacion: "La evolución convergente genera estructuras análogas en organismos no emparentados cercanamente que enfrentan hábitats o retos ecológicos idénticos."
    },
    {
        id: 67,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué componente del citoesqueleto está formado por dímeros de tubulina alfa y beta, participando activamente en el transporte intracelular y la formación del huso mitótico?",
        opciones: [
            "A) Microfilamentos de actina",
            "B) Filamentos intermedios de queratina",
            "C) Microtúbulos",
            "D) Fibras de colágeno fibrilar"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los microtúbulos son cilindros huecos de tubulina que forman el citoesqueleto dinámico responsable del movimiento de orgánulos y la segregación cromosómica."
    },
    {
        id: 68,
        area: "Genética",
        pregunta: "En una cruza monohíbrida con dominancia completa, si se cruzan dos individuos heterocigotos (Aa x Aa), ¿cuál es la proporción fenotípica esperada en la descendencia F2 según las leyes de Mendel?",
        opciones: [
            "A) 1:2:1",
            "B) 3:1",
            "C) 9:3:3:1",
            "D) 1:1"
        ],
        respuestaCorrecta: 1,
        explicacion: "La proporción fenotípica clásica para un cruce monohíbrido con dominancia completa es de 3 dominantes por cada 1 recesivo (3:1)."
    },
    {
        id: 69,
        area: "Ecología y Biodiversidad",
        pregunta: "En los ciclos biogeoquímicos, ¿cómo interviene principalmente la actividad humana (antropogénica) alterando el ciclo global del fósforo?",
        opciones: [
            "A) Mediante la quema masiva de combustibles fósiles liberando fosfina a la atmósfera",
            "B) A través de la minería de rocas fosfáticas para la producción de fertilizantes agrícolas y su escurrimiento hacia cuerpos de agua",
            "C) Por medio de la deforestación masiva que evapora el fósforo orgánico del suelo",
            "D) Mediante la combustión de plásticos clorados en incineradores urbanos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La extracción industrial de fosfatos para fertilizantes agrícolas altera drásticamente el ciclo biogeoquímico del fósforo, generando eutrofización acuática."
    },
    {
        id: 70,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la translocación de agua y minerales por el xilema en árboles altos, ¿qué postula la teoría de cohesión-tensión-transpiración?",
        opciones: [
            "A) Que el agua es impulsada desde las raíces únicamente por presión hidrostática positiva radicular",
            "B) Que la evaporación de agua en las hojas genera una tensión negativa que arrastra la columna de agua continua gracias a los puentes de hidrógeno",
            "C) Que el floema bombea activamente agua hacia el xilema mediante transporte activo secundario",
            "D) Que la gravedad comprime los vasos leñosos facilitando el flujo descendente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La transpiración foliar genera una fuerza de succión (tensión) que tracciona la columna hídrica en el xilema, mantenida unida por la alta cohesión intermolecular del agua."
    },
    {
        id: 71,
        area: "Evolución y Biodiversidad",
        pregunta: "En la clasificación de los reinos biológicos, los organismos eucariotas unicelulares o pluricelulares simples que no encajan formalmente en plantas, animales o hongos se agrupan históricamente en el reino:",
        opciones: [
            "A) Monera",
            "B) Protista",
            "C) Archaea",
            "D) Eubacteria"
        ],
        respuestaCorrecta: 1,
        explicacion: "El reino Protista abarca una colección parafilética de eucariotas predominantemente unicelulares, como protozoarios y algas microscópicas."
    },
    {
        id: 72,
        area: "Biología Celular y Molecular",
        pregunta: "¿Cuál es el destino metabólico del piruvato en condiciones de anaerobiosis estricta en levaduras del género *Saccharomyces*?",
        opciones: [
            "A) Conversión directa a acetil-CoA para ingresar al ciclo de Krebs",
            "B) Fermentación alcohólica produciendo etanol y dióxido de carbono",
            "C) Fermentación láctica reduciéndolo a lactato",
            "D) Oxidación total en la matriz mitocondrial"
        ],
        respuestaCorrecta: 1,
        explicacion: "En ausencia de oxígeno, las levaduras realizan fermentación alcohólica descarboxilando el piruvato a acetaldehído para luego reducirlo a etanol."
    },
    {
        id: 73,
        area: "Genética",
        pregunta: "En los seres humanos, los genes ubicados exclusivamente en el cromosoma sexual Y se heredan bajo un patrón de transmisión conocido como:",
        opciones: [
            "A) Herencia autosómica dominante",
            "B) Herencia ligada al X recesiva",
            "C) Herencia holándrica (o ligada al Y)",
            "D) Herencia mitocondrial materna"
        ],
        respuestaCorrecta: 2,
        explicacion: "La herencia holándrica se refiere a los caracteres determinados por genes en el cromosoma Y, los cuales se transmiten estrictamente de padres a hijos varones."
    },
    {
        id: 74,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología de poblaciones, ¿qué mide exactamente la tasa neta de reproducción ($R_0$) en una tabla de vida de cohorte?",
        opciones: [
            "A) El número promedio de descendientes hembras que deja una hembra a lo largo de toda su vida",
            "B) La velocidad instantánea de crecimiento poblacional por unidad de tiempo",
            "C) El porcentaje de mortalidad infantil en la primera etapa de desarrollo",
            "D) La capacidad máxima de carga del hábitat (K)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tasa neta de reproducción ($R_0$) representa el factor de multiplicación de una generación a otra; si $R_0 > 1$ la población crece, si es menor a 1 decrece."
    },
    {
        id: 75,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En el sistema inmunitario humano, ¿qué tipo de linfocitos son los responsables de medir la inmunidad celular destruyendo células infectadas por virus o células tumorales?",
        opciones: [
            "A) Linfocitos B maduros",
            "B) Linfocitos T citotóxicos (CD8+)",
            "C) Células plasmáticas secretoras de anticuerpos",
            "D) Macrófagos residentes tisulares"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los linfocitos T citotóxicos reconocen antígenos presentados por el Complejo Mayor de Histocompatibilidad clase I (CMH-I) e inducen la apoptosis en células diana alteradas."
    },
    {
        id: 76,
        area: "Evolución y Biodiversidad",
        pregunta: "En la teoría de la evolución por selección natural, ¿a qué se refiere el concepto de 'eficacia biológica' (fitness)?",
        opciones: [
            "A) La fuerza física y resistencia muscular máxima de un organismo en combate",
            "B) La capacidad relativa de un genotipo o fenotipo para sobrevivir y dejar descendencia fértil en la siguiente generación",
            "C) La velocidad de desplazamiento al huir de los depredadores naturales",
            "D) El tiempo total de vida medido en años desde el nacimiento hasta la senescencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El fitness o eficacia biológica mide el éxito reproductivo diferencial de un individuo en relación con otros miembros de su población."
    },
    {
        id: 77,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué nombre recibe el proceso mediante el cual una célula eucariota introduce macromoléculas o fluidos extracelulares englobándolos mediante invaginaciones de su membrana plasmática?",
        opciones: [
            "A) Exocitosis constitutiva",
            "B) Endocitosis",
            "C) Difusión facilitada por canales",
            "D) Transporte activo secundario por simporte"
        ],
        respuestaCorrecta: 1,
        explicacion: "La endocitosis engloba procesos como pinocitosis y fagocitosis, donde la membrana celular se invagina para capturar material externo hacia el interior vesicular."
    },
    {
        id: 78,
        area: "Genética",
        pregunta: "En la técnica de secuenciación de ADN de nueva generación (NGS) o secuenciación masiva, ¿cuál es la ventaja operativa principal frente al método tradicional de Sanger?",
        opciones: [
            "A) Requiere únicamente una sola hebra de ADN sin purificar",
            "B) Permite secuenciar millones de fragmentos de ADN en paralelo de forma simultánea y ultrarrápida",
            "C) Evita por completo el uso de nucleótidos marcados con fluoróforos",
            "D) Produce lecturas de fragmentos individuales con longitudes superiores a 10 kilobases"
        ],
        respuestaCorrecta: 1,
        explicacion: "La secuenciación masiva en paralelo (NGS) procesa millones de reacciones de secuenciación simultáneas, reduciendo drásticamente costos y tiempos frente a Sanger."
    },
    {
        id: 79,
        area: "Ecología y Biodiversidad",
        pregunta: "¿Cómo se le llama al fenómeno en el cual los contaminantes químicos persistentes (como metales pesados o plaguicidas) aumentan su concentración en los tejidos a medida que se asciende en los niveles tróficos de una cadena alimentaria?",
        opciones: [
            "A) Eutrofización acuática",
            "B) Amplificación o biomagnificación trófica",
            "C) Sucesión ecológica regresiva",
            "D) Biorremediación bacteriana"
        ],
        respuestaCorrecta: 1,
        explicacion: "La biomagnificación describe cómo sustancias no metabolizables se acumulan e incrementan exponencialmente su concentración en los depredadores tope de la cadena trófica."
    },
    {
        id: 80,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología del sentido de la audición en mamíferos, ¿dónde se localizan específicamente las células ciliadas receptoras encargadas de transducir las ondas mecánicas sonoras en impulsos nerviosos eléctricos?",
        opciones: [
            "A) En la membrana timpánica del oído medio",
            "B) En el órgano de Corti dentro de la cóclea en el oído interno",
            "C) En los conductos semicirculares del aparato vestibular",
            "D) En la cadena de huesecillos (martillo, yunque y estribo)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El órgano de Corti, situado en la cóclea coclear, contiene células ciliadas cuyas estereocilias se despolarizan al ser mecánicamente desplazadas por la onda fluida."
    },
    {
        id: 81,
        area: "Evolución y Biodiversidad",
        pregunta: "En biogeografía histórica, ¿cómo se denomina el evento de especiación que ocurre cuando una población biológica queda geográficamente dividida por una barrera física infranqueable (como una cadena montañosa o un río)?",
        opciones: [
            "A) Especiación simpátrica",
            "B) Especiación alopátrida",
            "C) Especiación parapátrida",
            "D) Especiación intraterrestre instantánea"
        ],
        respuestaCorrecta: 1,
        explicacion: "La especiación alopátrida implica la separación física de poblaciones, interrumpiendo el flujo génico y permitiendo la divergencia genética independiente por deriva y selección."
    },
    {
        id: 82,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué orgánulo celular se encarga de la digestión intracelular de macromoléculas gracias a su contenido de enzimas hidrolíticas ácidas (hidrolasas) que operan a un pH óptimo cercano a 5.0?",
        opciones: [
            "A) Lisosoma",
            "B) Peroxisoma",
            "C) Ribosoma 80S",
            "D) Retículo endoplasmático rugoso"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los lisosomas contienen enzimas ácidas hidrolíticas protegidas por una membrana especializada y mantenidas por bombas de protones activas."
    },
    {
        id: 83,
        area: "Genética",
        pregunta: "En la regulación génica de eucariotas, ¿qué son los microARNs (miARNs) y cuál es su función principal?",
        opciones: [
            "A) Pequeños ARNs no codificantes que regulan post-transcripcionalmente la expresión génica uniéndose al ARNm para inhibir su traducción o inducir su degradación",
            "B) Secuencias de ADN repetitivo que forman la estructura estructural de los centrómeros",
            "C) Enzimas de restricción naturales que cortan plásmidos bacterianos",
            "D) Enzimas encargadas de la síntesis de los cebadores durante la replicación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los miARNs son pequeños ARNs reguladores que controlan la expresión génica uniéndose por complementariedad a ARNs mensajeros blanco."
    },
    {
        id: 84,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología de ecosistemas, ¿cómo se le denomina a la cantidad total de biomasa o energía fijada por los organismos productores mediante la fotosíntesis por unidad de área y tiempo?",
        opciones: [
            "A) Productividad Primaria Neta (PPN)",
            "B) Productividad Primaria Bruta (PPB)",
            "C) Biomasa estática acumulada",
            "D) Eficiencia trófica de transferencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Productividad Primaria Bruta (PPB) es la tasa total de energía fijada por fotosíntesis; la Neta descuenta la respiración celular de los productores."
    },
    {
        id: 85,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la regulación osmótica de peces teleósteos que habitan en ambientes marinos (agua salada hiperosmótica), ¿cuál es su principal mecanismo fisiológico de supervivencia para evitar la desecación?",
        opciones: [
            "A) Beber agua de mar constantemente y secretar activamente el exceso de sales a través de las branquias",
            "B) Orinar grandes volúmenes de agua muy diluida de forma continua",
            "C) Absorber sales activamente a través de la piel sin ingerir líquidos",
            "D) Entrar en estivación metabólica en el fondo marino"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los peces marinos pierden agua por ósmosis; para contrarrestarlo, beben agua salada y expulsan activamente el exceso de iones sodio y cloruro por las branquias."
    },
    {
        id: 86,
        area: "Evolución y Biodiversidad",
        pregunta: "En la historia geológica de la Tierra, ¿cómo se denominan los fósiles guía o característicos que permiten datar cronológicamente los estratos sedimentarios debido a su amplia distribución geográfica y corta duración temporal?",
        opciones: [
            "A) Fósiles vivientes o relictos",
            "B) Fósiles index o característicos",
            "C) Fósiles traza o icnofósiles",
            "D) Fósiles pseudomórficos minerales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los fósiles index (o guía) pertenecen a especies abundantes, de amplia dispersión mundial pero corta duración evolutiva, ideales para correlación estratigráfica."
    },
    {
        id: 87,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué vía metabólica intracelular ocurre exclusivamente en el citosol celular y convierte una molécula de glucosa en dos moléculas de piruvato con una ganancia neta de 2 ATP y 2 NADH?",
        opciones: [
            "A) Ciclo de Krebs",
            "B) Glucólisis",
            "C) Fosforilación oxidativa mitocondrial",
            "D) Beta-oxidación de ácidos grasos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La glucólisis es la ruta metabólica citosólica universal de degradación de glucosa que opera tanto en condiciones aeróbicas como anaeróbicas."
    },
    {
        id: 88,
        area: "Genética",
        pregunta: "En ingeniería genética, ¿para qué se utiliza comúnmente la proteína verde fluorescente (GFP) aislada de la medusa *Aequorea victoria*?",
        opciones: [
            "A) Como antibiótico bactericida de amplio espectro",
            "B) Como gen informador (reporter gene) para visualizar la expresión génica y localización de proteínas in vivo",
            "C) Como enzima de corte específica en secuencias palindrómicas",
            "D) Como cofactor energético en reacciones de PCR cuantitativa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La GFP se emplea extensamente como marcador fluorescente reportero para estudiar la expresión de genes y el tráfico intracelular de proteínas en células vivas."
    },
    {
        id: 89,
        area: "Ecología y Biodiversidad",
        pregunta: "En la economía de los ecosistemas, ¿qué tipo de servicios ecosistémicos representan la polinización natural de cultivos, la regulación del clima y la depuración del agua por humedales?",
        opciones: [
            "A) Servicios de aprovisionamiento",
            "B) Servicios de regulación",
            "C) Servicios culturales",
            "D) Servicios de soporte vital primario"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los servicios de regulación son los beneficios obtenidos a partir de la regulación de los procesos ecosistémicos (clima, enfermedades, depuración, polinización)."
    },
    {
        id: 90,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología del tejido óseo, ¿cuáles son las células multinucleadas encargadas de la reabsorción y remodelación de la matriz ósea mediante la secreción de ácidos y enzimas lisosomales?",
        opciones: [
            "A) Osteoblastos",
            "B) Osteocitos",
            "C) Osteoclastos",
            "D) Osteoprogenitoras"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los osteoclastos son células de estirpe hematopoyética especializadas en la resorción ósea, fundamentales para el recambio mineral y remodelación del esqueleto."
    },
    {
        id: 91,
        area: "Evolución y Biodiversidad",
        pregunta: "En genética de poblaciones y evolución molecular, ¿qué postula la teoría neutralista de la evolución molecular propuesta por Motoo Kimura?",
        opciones: [
            "A) Que la gran mayoría de las sustituciones moleculares a nivel evolutivo son neutras frente a la selección natural y están gobernadas por la deriva génica",
            "B) Que todas las mutaciones genéticas son deletéreas y eliminadas de inmediato por selección purificadora",
            "C) Que la selección natural direccional es la única fuerza que dirige el cambio genético en las especies",
            "D) Que la deriva génica no tiene ningún impacto estadístico en poblaciones pequeñas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La teoría neutralista sostiene que a nivel molecular la mayoría de variaciones genéticas no confieren ventajas ni desventajas selectivas, fijándose por deriva génica aleatoria."
    },
    {
        id: 92,
        area: "Biología Celular y Molecular",
        pregunta: "¿Cómo se denomina el complejo de poros nucleares y proteínas asociadas que regula selectivamente el tráfico macromolecular bidireccional entre el núcleo y el citoplasma?",
        opciones: [
            "A) Complejo del poro nuclear (CPN)",
            "B) Lámina nuclear fibrosa",
            "C) Retículo endoplasmático rugoso perinuclear",
            "D) Matriz mitocondrial interna"
        ],
        respuestaCorrecta: 0,
        explicacion: "El complejo del poro nuclear (CPN) media el transporte activo de proteínas con señales de localización nuclear y la exportación de ARNs maduros."
    },
    {
        id: 93,
        area: "Genética",
        pregunta: "En genética humana, ¿qué tipo de patrón de herencia se observa cuando un carácter o enfermedad se manifiesta tanto en heterocigotos como homocigotos dominantes, transmitiéndose verticalmente de generación en generación?",
        opciones: [
            "A) Herencia autosómica recesiva",
            "B) Herencia autosómica dominante",
            "C) Herencia mitocondrial estricta",
            "D) Herencia ligada al cromosoma Y"
        ],
        respuestaCorrecta: 1,
        explicacion: "La herencia autosómica dominante se caracteriza por la expresión del rasgo en individuos con una sola copia alelica mutada, mostrando transmisión vertical continua."
    },
    {
        id: 94,
        area: "Ecología y Biodiversidad",
        pregunta: "En los biomas terrestres del planeta, ¿qué factor climático abiótico principal determina primordialmente la distribución y fisionomía de los grandes biomas (como desiertos, bosques o tundras)?",
        opciones: [
            "A) La concentración atmosférica de oxígeno",
            "B) Los patrones globales de temperatura y precipitación pluvial anual",
            "C) La deriva continental y la tectónica de placas",
            "D) La abundancia de grandes mamíferos herbívoros"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los gradientes de temperatura y precipitación (regidos por la circulación atmosférica global) son los principales determinantes climáticos de la vegetación terrestre."
    },
    {
        id: 95,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En el sistema circulatorio humano, ¿cuál es el vaso sanguíneo que transporta sangre desoxigenada desde el ventrículo derecho del corazón hacia los pulmones para su oxigenación?",
        opciones: [
            "A) La arteria aorta descendente",
            "B) La vena cava superior",
            "C) El tronco pulmonar (arterias pulmonares)",
            "D) Las venas pulmonares izquierdas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las arterias pulmonares (nacidas del tronco pulmonar en el ventrículo derecho) conducen sangre pobre en oxígeno hacia los capilares alveolares pulmonares."
    },
    {
        id: 96,
        area: "Evolución y Biodiversidad",
        pregunta: "En ecología evolutiva, ¿cómo se le llama a la rápida diversificación de un linaje ancestral en múltiples especies con diferentes adaptaciones ecológicas tras colonizar un nuevo hábitat vacío (ej. archipiélagos volcánicos)?",
        opciones: [
            "A) Extinción masiva global",
            "B) Radiación adaptativa",
            "C) Deriva génica unidireccional",
            "D) Simbiosis obligada estricta"
        ],
        respuestaCorrecta: 1,
        explicacion: "La radiación adaptativa describe la rápida explosión de especiación a partir de un ancestro común al explotar múltiples nichos ecológicos vacíos."
    },
    {
        id: 97,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué orgánulo membranoso contiene enzimas oxidativas como catalasas y oxidasas, especializándose en la degradación de ácidos grasos de cadena muy larga y la detoxificación de peróxido de hidrógeno?",
        opciones: [
            "A) Peroxisoma",
            "B) Lisosoma secundario",
            "C) Proteosoma multicatalítico",
            "D) Aparato de Golgi cis"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los peroxisomas son orgánulos oxidativos que contienen catalasa para descomponer el peróxido de hidrógeno tóxico generado durante el metabolismo lipídico."
    },
    {
        id: 98,
        area: "Genética",
        pregunta: "En genética molecular, ¿qué es la impronta genética (genomic imprinting)?",
        opciones: [
            "A) Un fenómeno epigenético donde la expresión de ciertos genes depende del progenitor del cual fueron heredados (materno o paterno)",
            "B) Una mutación letal en el cromosoma X que afecta únicamente a embriones masculinos",
            "C) La duplicación completa de todo el genoma diploide por poliploidía",
            "D) El intercambio físico de segmentos de ADN durante el entrecruzamiento meiótico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La impronta genética implica la inactivación diferencial de alelos según su origen parental mediante metilación del ADN y modificaciones de histonas."
    },
    {
        id: 99,
        area: "Ecología y Biodiversidad",
        pregunta: "En biología de la conservación, ¿qué mide el índice de biodiversidad de Shannon-Wiener en una comunidad ecológica?",
        opciones: [
            "A) Únicamente el número total de especies diferentes presentes (riqueza específica)",
            "B) La abundancia absoluta de los depredadores tope en la cadena trófica",
            "C) La riqueza específica y la equitatividad o uniformidad en la distribución de los individuos entre dichas especies",
            "D) La tasa de extinción anual de especies endémicas por pérdida de hábitat"
        ],
        respuestaCorrecta: 2,
        explicacion: "El índice de Shannon-Wiener es una medida matemática de la diversidad biológica que pondera tanto la riqueza de especies como su equitatividad en la comunidad."
    },
    {
        id: 100,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología de la visión humana, ¿qué células fotorreceptoras de la retina son las responsables de la visión en condiciones de baja luminosidad (fotópica/escotópica) y sensibilidad al blanco y negro?",
        opciones: [
            "A) Células ganglionares",
            "B) Conos retinianos",
            "C) Bastones retinianos",
            "D) Células bipolares"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los bastones contienen rodopsina y son sumamente sensibles a la luz tenue, operando en visión nocturna (escotópica) sin discriminación fina de colores."
    },
    {
        id: 101,
        area: "Evolución y Biodiversidad",
        pregunta: "En la historia evolutiva de los homininos, ¿cuál es el género fósil considerado ancestro directo o grupo hermano inmediato que marca la transición hacia los primeros fabricantes de herramientas líticas (industriz olduvayense)?",
        opciones: [
            "A) *Australopithecus afarensis*",
            "B) *Homo habilis*",
            "C) *Ardipithecus ramidus*",
            "D) *Paranthropus boisei*"
        ],
        respuestaCorrecta: 1,
        explicacion: "*Homo habilis* se asocia tradicionalmente con la fabricación de herramientas líticas rudimentarias y un incremento moderado en la capacidad craneal."
    },
    {
        id: 102,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué evento bioquímico ocurre durante la fosforilación oxidativa cuando los electrones fluyen a través de los complejos de la cadena transportadora en la membrana mitocondrial interna?",
        opciones: [
            "A) Se bombean protones (H+) desde la matriz mitocondrial hacia el espacio intermembranal",
            "B) Se sintetiza glucosa directamente a partir de dióxido de carbono y agua",
            "C) Se hidrolizan moléculas masivas de ATP para liberar calor corporal",
            "D) Se reduce el oxígeno molecular directamente a dióxido de carbono"
        ],
        respuestaCorrecta: 0,
        explicacion: "El flujo electrónico en la cadena respiratoria impulsa el bombeo activo de protones hacia el espacio intermembranal, creando el gradiente electroquímico para la ATP sintasa."
    },
    {
        id: 103,
        area: "Genética",
        pregunta: "En los experimentos clásicos de transferencia génica bacteriana, ¿cómo se define el proceso de conjugación bacteriana?",
        opciones: [
            "A) La incorporación directa de ADN libre del medio ambiente por células competentes",
            "B) La transferencia unidireccional de material genético (plásmidos o ADN cromosómico) entre dos bacterias mediante contacto físico directo a través de un pili sexual",
            "C) La transferencia de genes mediados por bacteriófagos vectores virales",
            "D) La duplicación espontánea del cromosoma bacteriano por fisión binaria"
        ],
        respuestaCorrecta: 1,
        explicacion: "La conjugación bacteriana requiere contacto célula a célula mediado por plásmidos conjugativos (como el factor F), permitiendo el intercambio horizontal de genes."
    },
    {
        id: 104,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología de ecosistemas, ¿qué representa la tasa de renovación o tiempo de residencia de un elemento en un reservorio biogeoquímico global?",
        opciones: [
            "A) El tiempo promedio que una molécula o átomo permanece almacenado dentro de ese compartimento específico del ciclo",
            "B) La cantidad de años que tardará una especie en extinguirse por cambio climático",
            "C) El volumen total de agua dulce disponible en los casquetes polares",
            "D) La tasa de natalidad anual de los organismos descomponedores del suelo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El tiempo de residencia mide la permanencia promedio de un elemento químico en un reservorio dado antes de ser transferido a otro compartimento."
    },
    {
        id: 105,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología del aparato excretor, ¿qué sustancia nitrogenada es el principal producto de desecho metabólico excretado por los mamíferos terrestres debido a su menor toxicidad comparada con el amoníaco?",
        opciones: [
            "A) Ácido úrico cristalino",
            "B) Urea",
            "C) Amoníaco libre",
            "D) Creatinina plasmática"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los mamíferos son ureotélicos; sintetizan urea en el hígado mediante el ciclo de la urea para eliminar el nitrógeno amoniacal de forma segura y soluble."
    },
    {
        id: 106,
        area: "Evolución y Biodiversidad",
        pregunta: "En la sistemática filogenética moderna, ¿cómo se le denomina a un carácter derivado compartido que está presente en dos o más taxones y es heredado de su ancestro común exclusivo?",
        opciones: [
            "A) Plesiomorfía ancestral",
            "B) Sinapomorfía",
            "C) Carácter homoplásico convergente",
            "D) Autapomorfía aislada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una sinapomorfía es un carácter homólogo derivado compartido que define y une estrictamente a los miembros de un clado monofilético."
    },
    {
        id: 107,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué función principal desempeñan las enzimas topoisomerasas (como la girasa) durante la replicación y transcripción del material genético?",
        opciones: [
            "A) Unir los fragmentos de Okazaki con enlaces fosfodiéster",
            "B) Aliviar la tensión torsional y superenrollamiento acumulado en el ADN mediante cortes transitorios",
            "C) Sintetizar los cebadores de ARN iniciales en la horquilla de replicación",
            "D) Separar las dos cadenas de ADN rompiendo los puentes de hidrógeno a altas temperaturas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las topoisomerasas previenen la tensión y el superenrollamiento excesivo del ADN al cortar y volver a sellar las hebras durante la apertura de la doble hélice."
    },
    {
        id: 108,
        area: "Genética",
        pregunta: "En citogenética, ¿cómo se denomina la alteración cromosómica estructural en la cual un segmento interno de un cromosoma se invierte 180 grados sobre sí mismo?",
        opciones: [
            "A) Deleción terminal",
            "B) Duplicación tándem",
            "C) Inversión cromosómica",
            "D) Translocación robertsoniana"
        ],
        respuestaCorrecta: 2,
        explicacion: "La inversión cromosómica ocurre cuando un segmento se rompe, gira 180° y se reinserta en el mismo cromosoma, alterando el orden lineal de los loci."
    },
    {
        id: 109,
        area: "Ecología y Biodiversidad",
        pregunta: "En la dinámica de metapoblaciones, ¿cómo se define el equilibrio dinámico que ocurre cuando la tasa local de extinción de poblaciones en parches de hábitat se iguala con la tasa de colonización de nuevos parches?",
        opciones: [
            "A) Modelo de equilibrio metapoblacional de Levins",
            "B) Sucesión ecológica primaria clímax",
            "C) Capacidad de carga logística (K)",
            "D) Deriva génica estocástica poblacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo de metapoblaciones de Levins describe la persistencia de una red de poblaciones locales conectadas mediante la colonización y extinción balanceada."
    },
    {
        id: 110,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología respiratoria de los insectos y artrópodos terrestres, ¿cómo se realiza el intercambio gaseoso de oxígeno y dióxido de carbono directamente con los tejidos corporales?",
        opciones: [
            "A) A través de pulmones laminares cerrados",
            "B) Mediante un sistema de tubos ramificados denominados tráqueas y traqueolas",
            "C) Por medio de branquias filamentosas externas húmedas",
            "D) Mediante difusión cutánea exclusiva a través del exoesqueleto de quitina"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los insectos respiran mediante un sistema traqueal, una red de tubos quitinosos ramificados que transportan el aire atmosférico directamente hacia las células corporales."
    },
    {
        id: 111,
        area: "Evolución y Biodiversidad",
        pregunta: "En la teoría de la evolución, ¿qué término describe los cambios fenotípicos drásticos que ocurren en un linaje en cortos períodos de tiempo geológico, alternados con largos períodos de estasis evolutiva?",
        opciones: [
            "A) Gradualismo filético clásico",
            "B) Equilibrio puntuado (punctuated equilibrium)",
            "C) Selección direccional constante",
            "D) Evolución convergente pasiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo de equilibrio puntuado (Eldredge y Gould) propone que la evolución morfológica ocurre en ráfagas rápidas de especiación seguidas de estabilidad."
    },
    {
        id: 112,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué característica estructural distingue químicamente a los ácidos nucleicos ADN y ARN en la composición de sus azúcares constituyentes pentosas?",
        opciones: [
            "A) El ADN contiene desoxirribosa (carece de un grupo hidroxilo en el carbono 2') y el ARN contiene ribosa",
            "B) El ADN contiene glucosa cíclica y el ARN contiene fructosa lineal",
            "C) El ARN contiene desoxirribosa y el ADN contiene ribosa fosforilada",
            "D) Ambos utilizan exactamente el mismo azúcar pentosa sin diferencias"
        ],
        respuestaCorrecta: 0,
        explicacion: "El azúcar del ADN es la 2'-desoxirribosa, la cual tiene un átomo de hidrógeno en el carbono 2' en lugar del grupo hidroxilo (-OH) presente en la ribosa del ARN."
    },
    {
        id: 113,
        area: "Genética",
        pregunta: "En genética cuantitativa y de poblaciones, ¿qué mide el coeficiente de endogamia ($F$) de Wright?",
        opciones: [
            "A) La probabilidad de que dos alelos en un locus dado en un individuo sean idénticos por descendencia a partir de un ancestro común",
            "B) La tasa de migración anual de individuos entre poblaciones vecinas",
            "C) El número medio de mutaciones espontáneas por generación celular",
            "D) La proporción de heterocigosidad esperada bajo panmixia perfecta"
        ],
        respuestaCorrecta: 0,
        explicacion: "El coeficiente de endogamia ($F$) cuantifica la probabilidad de identidad por descendencia de los alelos en un individuo debido al parentesco de sus padres."
    },
    {
        id: 114,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología forestal, ¿cómo se denomina a la capa superior formada por las copas entrelazadas de los árboles más altos en un bosque tropical lluvioso?",
        opciones: [
            "A) Estrato herbáceo de sotobosque",
            "B) Dosel o copas (canopy)",
            "C) Capa detrítica bentónica",
            "D) Rizósfera profunda"
        ],
        respuestaCorrecta: 1,
        explicacion: "El dosel (canopy) es la capa superior del bosque que concentra la mayor actividad fotosintética y alberga una biodiversidad masiva de organismos arbóreos."
    },
    {
        id: 115,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología vegetal, ¿cómo se denominan los movimientos de curvatura orientados que realizan las plantas en respuesta a estímulos mecánicos de contacto o tacto (ej. zarcillos de trepadoras)?",
        opciones: [
            "A) Fototropismo positivo",
            "B) Tigmotropismo (o tigmonastia)",
            "C) Geotropismo negativo",
            "D) Hidrotropismo radicular"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tigmotropismo es el movimiento direccional de crecimiento en respuesta al contacto físico con una superficie sólida, típico de plantas trepadoras."
    },
    {
        id: 116,
        area: "Evolución y Biodiversidad",
        pregunta: "En la sistemática evolutiva, ¿qué es un grupo parafilético?",
        opciones: [
            "A) Un grupo que incluye a un ancestro común y a la totalidad de sus descendientes",
            "B) Un grupo que incluye a un ancestro común y a *algunos* pero no a todos sus descendientes",
            "C) Un grupo formado por especies que no comparten ningún ancestro común reciente",
            "D) Un taxón artificial basado en características análogas superficiales"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un grupo parafilético excluye deliberadamente a uno o más descendientes evolutivos de un ancestro común (ej. los 'reptiles' tradicionales que excluyen a las aves)."
    },
    {
        id: 117,
        area: "Biología Celular y Molecular",
        pregunta: "¿Qué papel desempeñan las proteínas SNARE durante el tráfico vesicular intracelular y la exocitosis?",
        opciones: [
            "A) Catalizan la síntesis de lípidos en el retículo endoplasmático liso",
            "B) Mediante la interacción específica entre v-SNAREs vesiculares y t-SNAREs diana, aseguran el anclaje y la fusión precisa de las vesículas con su membrana blanco",
            "C) Forman los microtúbulos del huso mitótico durante la metafase",
            "D) Degradan proteínas oxidadas en el proteosoma citosólico"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las proteínas SNARE son esenciales para la especificidad y fusión de membranas vesiculares con los orgánulos o membrana plasmática receptora."
    },
    {
        id: 118,
        area: "Genética",
        pregunta: "En genética molecular, ¿qué caracteriza a los elementos transponibles (o 'genes saltarines') descubiertos por Barbara McClintock?",
        opciones: [
            "A) Su incapacidad absoluta para replicarse fuera del núcleo celular",
            "B) Su capacidad para cambiar de posición o multiplicarse dentro del genoma, alterando la expresión o estructura de los genes",
            "C) Su función exclusiva como telómeros protectores de los extremos cromosómicos",
            "D) Su participación en la síntesis de enlaces peptídicos dentro del ribosoma"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los transposones son secuencias de ADN móviles capaces de insertarse en nuevos sitios genómicos, generando mutaciones y variabilidad estructural."
    },
    {
        id: 119,
        area: "Ecología y Biodiversidad",
        pregunta: "En ecología marina, ¿cómo se denominan los organismos planctónicos microscópicos que corresponden a la porción animal del plancton y se alimentan de fitoplancton?",
        opciones: [
            "A) Fitoplancton autótrofo",
            "B) Zooplancton",
            "C) Bacterioplancton quimiosintético",
            "D) Bentos sesil"
        ],
        respuestaCorrecta: 1,
        explicacion: "El zooplancton comprende los organismos heterótrofos flotantes (como copépodos y larvas) que constituyen el eslabón herbívoro primario en las redes tróficas marinas."
    },
    {
        id: 120,
        area: "Fisiología Animal y Vegetal",
        pregunta: "En la fisiología del sistema endocrino humano, ¿qué hormona trófica secretada por la adenohipófisis estimula directamente la síntesis y secreción de hormonas glucocorticoides (como el cortisol) en la corteza suprarrenal?",
        opciones: [
            "A) Hormona del crecimiento (GH)",
            "B) Hormona adrenocorticotrópica (ACTH)",
            "C) Prolactina (PRL)",
            "D) Hormona estimulante de la tiroides (TSH)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La ACTH (corticotropina) es secretada por la adenohipófisis y actúa sobre la zona fascicular de la corteza suprarrenal para estimular la esteroidogénesis de cortisol."
    }
];