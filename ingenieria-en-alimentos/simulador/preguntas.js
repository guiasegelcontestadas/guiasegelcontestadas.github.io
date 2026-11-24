const bancoPreguntas = [
    {
        "id": 1,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Cuál es el principio fundamental que rige la operación de evaporación en la industria de alimentos?",
        "opciones": [
            "A) Transferencia de masa mediante la difusión de un soluto a través de una membrana semipermeable",
            "B) Separación de componentes basada en la diferencia de puntos de ebullición a presión reducida",
            "C) Reducción del tamaño de partícula mediante fuerzas de cizallamiento y compresión",
            "D) Eliminación de agua mediante la aplicación de calor por debajo del punto de congelación"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La evaporación consiste en la eliminación de vapor de una solución líquida por ebullición, frecuentemente operando al vacío para reducir el punto de ebullición del agua y proteger los nutrientes termosensibles."
    },
    {
        "id": 2,
        "area": "Operaciones Unitarias",
        "pregunta": "En un intercambiador de calor de placas, ¿qué configuración de flujo maximiza la eficiencia térmica general?",
        "opciones": [
            "A) Flujo a contracorriente",
            "B) Flujo paralelo o cocorriente",
            "C) Flujo turbulento intermitente",
            "D) Flujo cruzado sin deflectores"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El flujo a contracorriente mantiene la mayor diferencia de temperatura media logarítmica (DTML) a lo largo de toda la longitud del intercambiador, permitiendo la máxima transferencia de calor."
    },
    {
        "id": 3,
        "area": "Operaciones Unitarias",
        "pregunta": "Durante la operación de secado por aspersión (spray drying) de leche, ¿cuál es el factor crítico que determina la morfología y tamaño de partícula final?",
        "opciones": [
            "A) La temperatura ambiente exterior a la torre de secado",
            "B) La velocidad del agitador del tanque de alimentación",
            "C) La velocidad de atomización y la viscosidad del líquido alimentado",
            "D) El tiempo de residencia en el condensador barométrico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El tamaño y la morfología de las partículas en el secado por aspersión dependen directamente de las características del atomizador (disco rotatorio o boquilla) y de las propiedades reológicas del fluido."
    },
    {
        "id": 4,
        "area": "Operaciones Unitarias",
        "pregunta": "Calcule la velocidad terminal de sedimentación de una partícula esférica en un fluido estático si se aplica la Ley de Stokes. ¿Cuál de las variables es inversamente proporcional a dicha velocidad?",
        "opciones": [
            "A) La diferencia de densidades entre partícula y fluido",
            "B) La aceleración de la gravedad",
            "C) El diámetro de la partícula al cuadrado",
            "D) La viscosidad dinámica del fluido"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Según la Ley de Stokes, la velocidad terminal es directamente proporcional al cuadrado del diámetro, la diferencia de densidades y la gravedad, e inversamente proporcional a la viscosidad dinámica del fluido."
    },
    {
        "id": 5,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Qué operación unitaria se fundamenta en la extracción de un soluto sólido mediante el uso de un solvente líquido adecuado?",
        "opciones": [
            "A) Cristalización fraccionada",
            "B) Lixiviación o extracción sólido-líquido",
            "C) Filtración tangencial",
            "D) Destilación fraccionada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La lixiviación o extracción sólido-líquido es el proceso donde un componente soluble es disuelto de un sólido por medio de un solvente líquido."
    },
    {
        "id": 6,
        "area": "Operaciones Unitarias",
        "pregunta": "En la filtración a presión constante, ¿cómo se comportan el caudal de filtrado y la resistencia total del sistema a medida que transcurre el tiempo?",
        "opciones": [
            "A) El caudal aumenta y la resistencia aumenta linealmente",
            "B) El caudal aumenta y la resistencia disminuye",
            "C) El caudal disminuye y la resistencia aumenta debido a la acumulación de la torta",
            "D) Ambos parámetros permanecen constantes"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "A medida que se forma y crece la torta de filtración, la resistencia al flujo aumenta, lo que provoca una disminución progresiva en el caudal de filtrado bajo presión constante."
    },
    {
        "id": 7,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Cuál es el objetivo principal del uso de múltiples efectos en sistemas de evaporación?",
        "opciones": [
            "A) Incrementar la velocidad de agitación del producto",
            "B) Evitar la formación de compuestos de Maillard en alimentos ricos en azúcares",
            "C) Reducir drásticamente el consumo de vapor vivo reutilizando el vapor secundario",
            "D) Aumentar la presión de operación en cada etapa sucesiva"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los evaporadores de múltiple efecto aprovechan el vapor generado en un efecto (vapor secundario) como medio calefactor del siguiente efecto, optimizando la eficiencia energética."
    },
    {
        "id": 8,
        "area": "Operaciones Unitarias",
        "pregunta": "En la transferencia de calor por convección forzada dentro de una tubería, ¿qué número adimensional relaciona el transporte de calor por convección con la conducción pura?",
        "opciones": [
            "A) Número de Biot (Bi)",
            "B) Número de Reynolds (Re)",
            "C) Número de Prandtl (Pr)",
            "D) Número de Nusselt (Nu)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El número de Nusselt representa el cociente entre el calor transferido por convección y el transferido por conducción a través del fluido en la capa límite."
    },
    {
        "id": 9,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Qué fenómeno caracteriza al proceso de liofilización en su etapa de sublimación primaria?",
        "opciones": [
            "A) Desorción de agua ligada mediante calentamiento dieléctrico",
            "B) Fusión del hielo seguida de evaporación instantánea a alta presión",
            "C) Congelación ultrarrápida por inmersión en nitrógeno líquido",
            "D) Paso directo del agua de estado sólido a vapor sin pasar por el estado líquido"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La liofilización utiliza presiones por debajo del punto triple del agua, permitiendo que el hielo sublime directamente a vapor, preservando la estructura del alimento."
    },
    {
        "id": 10,
        "area": "Operaciones Unitarias",
        "pregunta": "Para la separación de suero lácteo en crema y leche descremada, ¿qué operación unitaria basada en campos de fuerza centrífuga se emplea?",
        "opciones": [
            "A) Centrifugación y clarificación por discos",
            "B) Ultrafiltración por membranas poliméricas",
            "C) Destilación al vacío",
            "D) Sedimentación gravitacional en tanques estáticos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La separación de fases con diferentes densidades, como la grasa y la fase acuosa de la leche, se realiza eficientemente mediante centrifugadoras de discos."
    },
    {
        "id": 11,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Qué equipo se utiliza comúnmente para reducir el tamaño de partícula de pastas de chocolate mediante rodillos giratorios en sentidos opuestos?",
        "opciones": [
            "A) Homogeneizador de alta presión",
            "B) Molino de martillos",
            "C) Refinadora de rodillos",
            "D) Molino coloidal"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El refinado del chocolate se realiza mediante molinos de rodillos (usualmente de 3 a 5) que aplican fuerzas de cizallamiento y compresión para reducir el tamaño de las partículas de azúcar y cacao por debajo de 20 micrómetros."
    },
    {
        "id": 12,
        "area": "Operaciones Unitarias",
        "pregunta": "En la cristalización de sacarosa, ¿qué representa la zona metaestable en el diagrama de solubilidad?",
        "opciones": [
            "A) El punto donde ocurre la nucleación masiva y descontrolada",
            "B) La región donde los cristales existentes crecen pero no se forman núcleos nuevos espontáneamente",
            "C) La fase donde el agua se evapora sin cambio de temperatura",
            "D) La zona donde la solución es diluida y los cristales se disuelven inmediatamente"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En la zona metaestable, la sobresaturación es suficiente para permitir el crecimiento de cristales preexistentes, pero insuficiente para la nucleación espontánea, lo cual es ideal para controlar el tamaño del cristal."
    },
    {
        "id": 13,
        "area": "Operaciones Unitarias",
        "pregunta": "Durante la pasteurización HTST de jugos de fruta, ¿qué tipo de intercambiador de calor ofrece mayor versatilidad y facilidad de limpieza?",
        "opciones": [
            "A) Intercambiador de superficie raspada",
            "B) Intercambiador de coraza y tubos",
            "C) Intercambiador de placas",
            "D) Horno de calentamiento óhmico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los intercambiadores de placas son ideales para fluidos de baja viscosidad como la leche y los jugos claros, ya que proporcionan altas turbulencias y son fácilmente desmontables para su limpieza (CIP)."
    },
    {
        "id": 14,
        "area": "Operaciones Unitarias",
        "pregunta": "¿Cuál es el propósito de aplicar homogeneización a alta presión en la leche fluida?",
        "opciones": [
            "A) Precipitar las caseínas para la elaboración de quesos frescos",
            "B) Aumentar el punto de ebullición de la leche para acelerar la concentración",
            "C) Reducir el tamaño de los glóbulos de grasa para prevenir la formación de una capa de nata",
            "D) Destruir todas las esporas bacterianas termorresistentes"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La homogenización reduce el diámetro medio de los glóbulos grasos de 3-4 micrómetros a menos de 1 micrómetro, aumentando el área superficial y estabilizando la emulsión por acción de las proteínas."
    },
    {
        "id": 15,
        "area": "Operaciones Unitarias",
        "pregunta": "En un proceso de deshidratación osmótica de frutas, ¿cuál es la fuerza impulsora principal para la transferencia de masa?",
        "opciones": [
            "A) El gradiente de temperatura generado por radiación infrarroja",
            "B) El gradiente de presión de vapor de agua",
            "C) La diferencia de presión osmótica entre el tejido vegetal y la solución hipertónica",
            "D) El gradiente de presión hidrostática entre el interior y el exterior"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La deshidratación osmótica se basa en la inmersión del alimento en una solución concentrada de azúcar o sal; el gradiente de presión osmótica provoca la salida de agua del tejido y la entrada parcial de soluto."
    },
    {
        "id": 16,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el principal factor responsable de la reacción de pardeamiento enzimático en vegetales cortados como la manzana y la papa?",
        "opciones": [
            "A) La hidrólisis de los triglicéridos por acción de lipasas endógenas",
            "B) La degradación térmica de los pigmentos clorofílicos",
            "C) La oxidación de compuestos fenólicos catalizada por la polifenoloxidasa (PFO) en presencia de oxígeno",
            "D) La condensación entre azúcares reductores y aminoácidos libres a altas temperaturas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El pardeamiento enzimático ocurre cuando la enzima polifenoloxidasa oxida los compuestos fenólicos a quininas, las cuales se polimerizan formando pigmentos oscuros de tipo melanina."
    },
    {
        "id": 17,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué tipo de enlace químico es responsable principal de la estructura secundaria de las proteínas, como las hélices alfa y láminas plegadas beta?",
        "opciones": [
            "A) Enlaces covalentes disulfuro",
            "B) Enlaces iónicos o salinos",
            "C) Puentes de hidrógeno entre los grupos amida y carbonilo del esqueleto peptídico",
            "D) Interacciones hidrofóbicas entre cadenas laterales alifáticas"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La estructura secundaria de las proteínas está estabilizada casi en su totalidad por puentes de hidrógeno formados regularmente a lo largo del esqueleto peptídico."
    },
    {
        "id": 18,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el producto intermedio clave en la reacción de Maillard que se forma a partir de la condensación inicial entre un azúcar reductor y un grupo amino?",
        "opciones": [
            "A) Ácido acético glacial",
            "B) Hidroximetilfurfural (HMF)",
            "C) Peróxido de hidrógeno",
            "D) Base de Schiff (glucosilamina N-sustituida)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La primera etapa de la reacción de Maillard implica la condensación nucleofílica del grupo amino con el grupo carbonilo del azúcar reductor para formar una glucosamina inestable que se reordena en una base de Schiff."
    },
    {
        "id": 19,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "En relación con la actividad de agua (aw) en los alimentos, ¿qué representa una isoterma de sorción de humedad?",
        "opciones": [
            "A) La relación entre la temperatura y la presión atmosférica del almacenamiento",
            "B) La cantidad de calor requerida para evaporar el agua libre en un sistema cerrado",
            "C) La velocidad a la cual un alimento absorbe oxígeno durante el almacenamiento",
            "D) La curva que relaciona el contenido de humedad de equilibrio de un alimento con la actividad de agua a temperatura constante"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La isoterma de sorción gráfica el contenido de humedad frente a la actividad de agua (aw) a una temperatura dada, siendo fundamental para predecir la estabilidad microbiológica y físico-química."
    },
    {
        "id": 20,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué cambio bioquímico experimenta la carne post-mortem durante el rigor mortis que afecta drásticamente su capacidad de retención de agua?",
        "opciones": [
            "A) Activación de calpaínas que degradan totalmente las proteínas sarcoplásmicas",
            "B) Acumulación masiva de glucógeno y síntesis de ATP",
            "C) Oxidación completa de la mioglobina a metamioglobina verde",
            "D) Agotamiento del ATP, lo que provoca la formación irreversible del complejo actomiosina y descenso del pH por acumulación de ácido láctico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Tras la muerte del animal, el cese de la respiración celular agota el ATP. Sin ATP, los filamentos de actina y miosina se unen permanentemente (rigor mortis) y el pH cae, desnaturalizando parcialmente proteínas y reduciendo la retención de agua."
    },
    {
        "id": 21,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el efecto de la hidrogenación parcial de aceites vegetales sobre su perfil de ácidos grasos y propiedades físicas?",
        "opciones": [
            "A) Incremento de la insaturación y susceptibilidad a la rancidez hidrolítica",
            "B) Eliminación total de los ácidos grasos saturados y disminución del punto de fusión",
            "C) Transformación de triglicéridos en diglicéridos libres",
            "D) Conversión de dobles enlaces cis en trans y aumento del punto de fusión, haciendo el aceite más sólido"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La hidrogenación parcial satura algunos dobles enlaces y reorganiza otros de configuración cis a trans, elevando el punto de fusión y transformando aceites líquidos en grasas semisólidas."
    },
    {
        "id": 22,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué enzima se utiliza comúnmente en la industria láctea para hidrolizar la lactosa en glucosa y galactosa?",
        "opciones": [
            "A) Beta-galactosidasa (lactasa)",
            "B) Pepsina",
            "C) Lipasa gástrica",
            "D) Alfa-amilasa"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La beta-galactosidasa rompe el enlace beta-1,4 glucosídico de la lactosa, siendo ampliamente usada para elaborar productos lácteos deslactosados aptos para intolerantes."
    },
    {
        "id": 23,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el pigmento responsable del color rojo brillante de la carne fresca empaquetada en atmósfera rica en oxígeno?",
        "opciones": [
            "A) Oximioglobina",
            "B) Desoximioglobina",
            "C) Metamioglobina",
            "D) Colecromo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La desoximioglobina (púrpura) se oxigena rápidamente al entrar en contacto con altas concentraciones de oxígeno, formándose la oximioglobina, que otorga el color rojo apetitoso característico."
    },
    {
        "id": 24,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué fenómeno físico-químico ocurre cuando se desnaturalizan las proteínas del suero lácteo por acción del calor intenso?",
        "opciones": [
            "A) Polimerización directa con azúcares sin formación de intermediarios",
            "B) Precipitación instantánea a pH neutro sin cambio conformacional",
            "C) Despliegue de la estructura terciaria, exposición de grupos sulfhidrilo libres y agregación intermolecular",
            "D) Ruptura completa de los enlaces peptídicos liberando aminoácidos libres"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El calor rompe los enlaces débiles que mantienen la estructura globular de las proteínas del suero (como la beta-lactoglobulina), exponiendo grupos -SH que interactúan formando agregados."
    },
    {
        "id": 25,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "En la rancidez oxidativa de los lípidos, ¿cuáles son los compuestos volátiles responsables del olor rancio característico?",
        "opciones": [
            "A) Triglicéridos de cadena corta",
            "B) Fosfolípidos quelatados con hierro",
            "C) Aldehídos, cetonas, ácidos de cadena corta y alcoholes producto de la descomposición de hidroperóxidos",
            "D) Hidroperóxidos primarios estables"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La oxidación lipídica genera hidroperóxidos inestables que se descomponen en una compleja mezcla de compuestos volátiles (aldehídos, cetonas, ácidos) que causan el flavor rancio."
    },
    {
        "id": 26,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué tipo de polisacárido estructural forma geles en presencia de azúcares y ácidos, y se extrae principalmente de los cítricos y la manzana?",
        "opciones": [
            "A) Garantán (Goma guar)",
            "B) Celulosa microcristalina",
            "C) Almidón modificado",
            "D) Pectina"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las pectinas son polímeros de ácido galacturónico que forman geles tridimensionales en presencia de altas concentraciones de azúcar y un pH bajo (por debajo de 3.5), esenciales en mermeladas."
    },
    {
        "id": 27,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el efecto del grado de esterificación en las pectinas de alto metoxilo (PAM) sobre su capacidad gelificante?",
        "opciones": [
            "A) Gelifican en ausencia total de azúcar a cualquier valor de pH",
            "B) Requieren un alto contenido de sólidos solubles (azúcar > 60%) y pH ácido para gelificar mediante enlaces de hidrógeno e interacciones hidrofóbicas",
            "C) Pierden por completo su solubilidad en agua fría",
            "D) Requieren la presencia de iones calcio divalentes para entrecruzarse"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las pectinas de alto metoxilo (grado de esterificación > 50%) gelifican mediante enlaces de hidrógeno y fuerzas hidrofóbicas, requiriendo azúcares que reduzcan la actividad de agua y ácidos que repriman la disociación."
    },
    {
        "id": 28,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué aminoácido limita comúnmente el valor biológico de las proteínas de origen vegetal en cereales?",
        "opciones": [
            "A) Fenilalanina",
            "B) Lisina",
            "C) Metionina",
            "D) Triptófano"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los cereales son deficientes en el aminoácido esencial lisina, mientras que las leguminosas suelen ser deficientes en aminoácidos azufrados como la metionina, de ahí la complementariedad nutricional."
    },
    {
        "id": 29,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Qué ocurre con la viscosidad de una suspensión de almidón cuando se somete a calentamiento por encima de su temperatura de gelatinización?",
        "opciones": [
            "A) Aumenta significativamente debido a la hidratación y hinchamiento de los gránulos de almidón y lixiviación de amilosa",
            "B) Permanece totalmente inalterada hasta alcanzar el punto de ebullición",
            "C) Disminuye drásticamente debido a la precipitación de los gránulos",
            "D) Se descompone en azúcares reductores simples por pirólisis"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La gelatinización implica la ruptura de los enlaces puente de hidrógeno intermoleculares en el gránulo de almidón al calentarse en agua, permitiendo la entrada de agua, hinchamiento y aumento de la viscosidad."
    },
    {
        "id": 30,
        "area": "Química y Bioquímica de Alimentos",
        "pregunta": "¿Cuál es el papel del ácido ascórbico (Vitamina C) como aditivo antioxidante en la industria de alimentos?",
        "opciones": [
            "A) Reticular las proteínas cárnicas para mejorar la firmeza del embutido",
            "B) Incrementar la acidez titulable del medio para inhibir bacterias patógenas",
            "C) Actuar como agente reductor que se oxida preferencialmente, regenerando tocoferoles y atrapando oxígeno disuelto",
            "D) Actuar como agente secuestrante de metales pesados exclusivamente"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El ácido ascórbico es un potente agente reductor que protege a los alimentos de la oxidación al consumir el oxígeno disponible y reducir los radicales libres formados."
    },
    {
        "id": 31,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué microorganismo patógeno es un anaerobio facultativo psicrótrofo capaz de multiplicarse a temperaturas de refrigeración (< 4 °C) y representa un riesgo severo en productos listos para consumir?",
        "opciones": [
            "A) Listeria monocytogenes",
            "B) Bacillus cereus",
            "C) Salmonella enteritidis",
            "D) Clostridium botulinum tipo A"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Listeria monocytogenes es un patógeno psicrótrofo transmitido por alimentos que resiste condiciones adversas y crece a temperaturas de refrigeración, causando listeriosis."
    },
    {
        "id": 32,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué parámetro microbiológico representa el tiempo en minutos a una temperatura dada necesario para reducir la población microbiana en un 90% (1 ciclo logarítmico)?",
        "opciones": [
            "A) Actividad microbiana crítica",
            "B) Valor F0",
            "C) Valor D (Tiempo de reducción decimal)",
            "D) Valor z"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El valor D (tiempo de reducción decimal) es una medida de la resistencia térmica de un microorganismo a una temperatura específica."
    },
    {
        "id": 33,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué toxina bacteriana termoestable es frecuentemente responsable de intoxicaciones alimentarias de inicio rápido asociadas con el consumo de arroz o pastas mal refrigeradas?",
        "opciones": [
            "A) Toxina Shiga de Escherichia coli O157:H7",
            "B) Toxina botulínica de Clostridium botulinum",
            "C) Enterotoxina emética producida por Bacillus cereus",
            "D) Enterotoxina estafilocócica tipo A"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Bacillus cereus produce dos tipos de síndromes: la forma diarreica (toxina termolábil) y la forma emética (cereulida, una toxina altamente termoestable preformada en el alimento)."
    },
    {
        "id": 34,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Cuál es la característica principal de Clostridium botulinum que condiciona su control en conservas alimenticias de baja acidez (pH > 4.6)?",
        "opciones": [
            "A) Producción de esporas altamente termorresistentes y capacidad de toxigénesis en ausencia de oxígeno",
            "B) Crecimiento óptimo en ambientes con altas concentraciones de sal (> 15%) y frío extremo",
            "C) Dependencia estricta de azúcares reductores para su metabolismo fermentativo",
            "D) Alta sensibilidad a la radiación ultravioleta en superficies secas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Clostridium botulinum es una bacteria anaerobia estricta cuyas esporas resisten el calor y germinan en latas con pH > 4.6 sin oxígeno, produciendo la neurotoxina botulínica mortal."
    },
    {
        "id": 35,
        "area": "Microbiología de Alimentos",
        "pregunta": "En microbiología predictiva, ¿qué indica el valor z térmico?",
        "opciones": [
            "A) El tiempo total de esterilización comercial a 121.1 °C",
            "B) El número de generaciones bacterianas por unidad de tiempo",
            "C) La concentración letal de cloro libre en aguas de lavado",
            "D) El incremento de temperatura necesario para reducir el valor D al 10% de su valor original"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El valor z representa el cambio de temperatura (en grados Celsius o Fahrenheit) necesario para que la curva de resistencia térmica (valor D) atraviese un ciclo logarítmico, reflejando la sensibilidad térmica del microorganismo."
    },
    {
        "id": 36,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué grupo microbiano se utiliza tradicionalmente como indicador de contaminación fecal en el análisis de potabilidad del agua y calidad higiénica de alimentos?",
        "opciones": [
            "A) Hongos filamentosos y levaduras osmófilas",
            "B) Bacterias ácido lácticas mesófilas",
            "C) Esporas de hongos termófilos",
            "D) Bacterias coliformes (totales y fecales / E. coli)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los coliformes, especialmente Escherichia coli, se emplean como organismos indicadores de contaminación fecal debido a su hábitat natural y facilidad de detección."
    },
    {
        "id": 37,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Cuál es el valor límite crítico de pH establecido en la industria para clasificar un alimento como de 'baja acidez' y exigir tratamientos térmicos drásticos (esterilización)?",
        "opciones": [
            "A) pH 3.5",
            "B) pH 4.5",
            "C) pH 5.6",
            "D) pH 4.6"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El pH 4.6 es el límite crítico internacional por debajo del cual las esporas de Clostridium botulinum no pueden germinar ni producir toxina, separando los alimentos ácidos de los de baja acidez."
    },
    {
        "id": 38,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué microorganismo es el principal agente causal de toxiinfección alimentaria asociada con la ingestión de huevos y carne de ave insuficientemente cocidos?",
        "opciones": [
            "A) Staphylococcus aureus",
            "B) Vibrio cholerae",
            "C) Salmonella enterica",
            "D) Shigella dysenteriae"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Salmonella spp. es un patógeno zoonótico frecuentemente asociado con aves de corral y huevos, causante de salmonelosis aguda."
    },
    {
        "id": 39,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué método de conservación no térmico utiliza pulsos eléctricos de alto voltaje para inactivar microorganismos alterando la permeabilidad de su membrana celular?",
        "opciones": [
            "A) Irradiación gamma con Cobalto-60",
            "B) Altas presiones hidrostáticas (HHP)",
            "C) Campos eléctricos pulsados de alta intensidad (PEF)",
            "D) Termo-sonicación asistida por ultrasonido"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los campos eléctricos pulsados (PEF) aplican descargas eléctricas cortas a fluidos, induciendo la electroporación de las membranas celulares microbianas sin calentar significativamente el alimento."
    },
    {
        "id": 40,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Cuál es el fundamento de la tecnología de Altas Presiones Hidrostáticas (HHP) para la inactivación microbiana?",
        "opciones": [
            "A) Deshidratación osmótica rápida a nivel celular",
            "B) Ruptura del ADN cromosómico mediante ionización directa por rayos gamma",
            "C) Aplicación instantánea y uniforme de presiones entre 300 y 600 MPa que desnaturalizan proteínas clave sin afectar enlaces covalentes ni vitaminas pequeñas",
            "D) Generación de calor interno por fricción molecular hasta alcanzar 150 °C"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las altas presiones actúan según el principio de Le Chatelier, afectando volúmenes moleculares y desnaturalizando proteínas y membranas celulares microbianas, respetando los compuestos de bajo peso molecular (sabor, vitaminas)."
    },
    {
        "id": 41,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué género bacteriano se emplea en la fermentación láctica para la producción de yogur en simbiosis termofílica?",
        "opciones": [
            "A) Acetobacter aceti y Gluconobacter oxydans",
            "B) Lactobacillus delbrueckii subsp. bulgaricus y Streptococcus thermophilus",
            "C) Penicillium roqueforti y Aspergillus oryzae",
            "D) Saccharomyces cerevisiae y Candida utilis"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El yogur se elabora mediante la acción simbiótica de Lactobacillus bulgaricus y Streptococcus thermophilus, los cuales producen ácido láctico y compuestos aromáticos por protocooperación."
    },
    {
        "id": 42,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Cuál es el principal mecanismo antimicrobiano de los ácidos orgánicos (como el ácido sórbico o benzoico) utilizados como conservadores?",
        "opciones": [
            "A) Precipitación irreversible del ADN genómico en el núcleo bacteriano",
            "B) Penetración de la forma no disociada del ácido a través de la membrana celular, acidificando el citoplasma y desacoplando la fuerza motriz de protones",
            "C) Hidrólisis directa de la pared celular por actividad enzimática proteolítica",
            "D) Quelatación de cationes divalentes indispensables para el ribosoma"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los ácidos orgánicos no disociados son liposolubles, cruzan la membrana celular y al encontrarse con el pH interno neutro, se disocian liberando protones que colapsan el pH intracelular del microorganismo."
    },
    {
        "id": 43,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué micotoxina hepatotóxica y carcinógena es producida por hongos del género Aspergillus (como A. flavus) en granos almacenados en condiciones de alta humedad y temperatura?",
        "opciones": [
            "A) Aflatoxina B1",
            "B) Zearalenona",
            "C) Ocratoxina A",
            "D) Patulina"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las aflatoxinas, sintetizadas principalmente por Aspergillus flavus y A. parasiticus, son metabolitos secundarios altamente tóxicos y carcinógenos que contaminan cereales y frutos secos."
    },
    {
        "id": 44,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Qué característica define a los microorganismos halófilos extremos que crecen en alimentos salados como salazones de pescado?",
        "opciones": [
            "A) Crecen únicamente en ausencia total de oxígeno atmosférico",
            "B) Son estrictamente sensibles a concentraciones de sal mayores al 2%",
            "C) Requieren temperaturas de congelación profunda para expresar sus enzimas",
            "D) Requieren concentraciones de cloruro de sodio superiores al 15-20% para su desarrollo metabólico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los microorganismos halófilos (como ciertas arqueas y bacterias) están adaptados evolutivamente para prosperar en ambientes con salinidades muy elevadas, manteniendo la presión osmótica interna."
    },
    {
        "id": 45,
        "area": "Microbiología de Alimentos",
        "pregunta": "¿Cuál es la función del proceso de tindalización en la esterilización de medios termosensibles?",
        "opciones": [
            "A) Aplicar calentamientos intermitentes a temperaturas moderadas para germinar esporas y destruirlas en ciclos sucesivos",
            "B) Irradiar el producto con microondas de alta frecuencia",
            "C) Filtrar el líquido a través de membranas de 0.01 micrómetros",
            "D) Congelar el alimento a -80 °C y someterlo a vacío profundo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La tindalización consiste en calentar el producto a unos 80-100 °C durante un tiempo en días consecutivos; el primer calor destruye las formas vegetativas, las esporas sobreviven y germinan, y el calor siguiente las elimina."
    },
    {
        "id": 46,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué principio del sistema HACCP (Hazard Analysis Critical Control Point) establece la determinación de los Límites Críticos para cada Punto Crítico de Control (PCC)?",
        "opciones": [
            "A) Principio 1",
            "B) Principio 4",
            "C) Principio 3",
            "D) Principio 2"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El principio 3 del sistema HACCP consiste en establecer los límites críticos (criterios que separan lo aceptable de lo inaceptable) para asegurar que cada PCC esté bajo control."
    },
    {
        "id": 47,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "En el diseño higiénico de equipos para la industria alimentaria, ¿qué característica geométrica debe evitarse obligatoriamente en tuberías y tanques de acero inoxidable?",
        "opciones": [
            "A) Superficies con acabado sanitario pulido espejo (Ra < 0.8 micrómetros)",
            "B) Ángulos internos rectos (90 grados) y esquinas muertas (dead legs) de difícil limpieza",
            "C) Radios de curvatura amplios en las uniones de codos",
            "D) Soldaduras orbitales con penetración total sin rebabas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los ángulos rectos y las esquinas muertas retienen residuos de producto y líquidos de limpieza, propiciando la formación de biopelículas microbianas; por ello, el diseño sanitario exige curvas amplias y soldaduras lisas."
    },
    {
        "id": 48,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué significan las siglas BPM en el contexto de la manufactura y procesamiento de alimentos?",
        "opciones": [
            "A) Buenas Prácticas de Manufactura",
            "B) Bacterias Patógenas Monitoreadas",
            "C) Balance de Procesos Masivos",
            "D) Bioseguridad y Protección Molecular"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las Buenas Prácticas de Manufactura (BPM o GMP por sus siglas en inglés) son los principios básicos y prácticas operativas generales de higiene para la manipulación y procesamiento de alimentos seguros."
    },
    {
        "id": 49,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué norma internacional de gestión de la inocuidad alimentaria especifica los requisitos para establecer un sistema HACCP auditable en toda la cadena de suministro?",
        "opciones": [
            "A) ISO 45001",
            "B) ISO 22000",
            "C) ISO 14001",
            "D) ISO 9001"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La norma ISO 22000 especifica los requisitos para un sistema de gestión de la inocuidad de los alimentos, integrando los principios del sistema HACCP y programas prerrequisito en toda la cadena agroalimentaria."
    },
    {
        "id": 50,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Cuál es el objetivo principal del procedimiento de limpieza CIP (Cleaning in Place) en plantas de procesamiento continuo?",
        "opciones": [
            "A) Limpiar y desinfectar las superficies internas de equipos y tuberías sin necesidad de desmontarlos, mediante recirculación automatizada de soluciones químicas",
            "B) Desmontar manualmente todas las piezas y válvulas para lavarlas en tarjas individuales con detergente clorado",
            "C) Aplicar calor seco a altas temperaturas en hornos de convección acoplados",
            "D) Esterilizar exclusivamente el aire ambiente de la nave de producción mediante filtros HEPA"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El sistema CIP (Limpieza en Sitio) permite limpiar y desinfectar circuitos cerrados de tuberías, tanques e intercambiadores de calor de manera automatizada y eficiente sin desensamblar los equipos."
    },
    {
        "id": 51,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "En el control estadístico de procesos (CEP), ¿qué indican los límites de control (superior e inferior) en una carta de control de Shewhart?",
        "opciones": [
            "A) Los costos máximos de producción por lote fabricado",
            "B) Las tolerancias máximas y mínimas permitidas por las especificaciones legales del cliente",
            "C) El punto de ruptura mecánica de la maquinaria de llenado",
            "D) Los límites estadísticos basados en la variabilidad natural del proceso bajo control (usualmente a 3 desviaciones estándar)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los límites de control estadístico determinan el comportamiento esperado de un proceso cuando solo operan causas comunes de variación, calculados comúnmente a +/- 3 sigma."
    },
    {
        "id": 52,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué tipo de peligro para la inocuidad alimentaria representa la presencia incidental de fragmentos de vidrio o metal en un lote de cereales envasados?",
        "opciones": [
            "A) Peligro químico",
            "B) Peligro alérgico",
            "C) Peligro biológico",
            "D) Peligro físico"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los cuerpos extraños como vidrio, metal, piedras o plástico representan peligros físicos capaces de causar lesiones al consumidor."
    },
    {
        "id": 53,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "En la distribución en planta (layout) de una industria de alimentos, ¿cuál es el principio fundamental de diseño para evitar la contaminación cruzada?",
        "opciones": [
            "A) Permitir el libre flujo de personal desde las zonas de empaque final hacia las áreas de materia prima sucia",
            "B) Instalar los baños y vestidores de operarios directamente junto a la línea de envasado aséptico",
            "C) Compartir los mismos sistemas de ventilación y retorno de aire en todo el edificio",
            "D) Establecer un flujo unidireccional y segregado, separando físicamente las áreas limpias de las áreas sucias o de alto riesgo"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El diseño de plantas debe garantizar un flujo unidireccional de procesos y personal (de sucio a limpio), evitando la contaminación cruzada entre materias primas y productos listos para consumo."
    },
    {
        "id": 54,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué parámetro evalúa el índice de capacidad del proceso ($C_pk$) cuando su valor es mayor a 1.33?",
        "opciones": [
            "A) La variabilidad del proceso supera el ancho de las especificaciones",
            "B) La media del proceso está exactamente descentrada respecto a los límites de tolerancia",
            "C) El proceso es estadísticamente capaz y cumple adecuadamente con las especificaciones de calidad exigidas",
            "D) El proceso no es capaz y genera un alto porcentaje de productos defectuosos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un Cpk mayor o igual a 1.33 indica que el proceso está bajo control y centrado, asegurando que la variabilidad se encuentra cómodamente dentro de los límites de especificación."
    },
    {
        "id": 55,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué sustancia desinfectante basada en halógenos se emplea más comúnmente en la cloración de aguas de lavado en plantas procesadoras de alimentos?",
        "opciones": [
            "A) Peróxido de hidrógeno concentrado al 50%",
            "B) Sulfato de cobre pentahidratado",
            "C) Hipoclorito de sodio o dióxido de cloro",
            "D) Amonio cuaternario de quinta generación"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El hipoclorito de sodio y el dióxido de cloro son agentes oxidantes ampliamente utilizados por su eficacia, bajo costo y facilidad de dosificación en la desinfección de agua y superficies."
    },
    {
        "id": 56,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué finalidad persigue el programa de control de plagas en una planta de alimentos bajo el enfoque de gestión de inocuidad?",
        "opciones": [
            "A) Exterminar plagas únicamente después de que se detecte una infestación masiva en el almacén",
            "B) Aplicar plaguicidas químicos de amplio espectro directamente sobre las materias primas expuestas",
            "C) Reemplazar la limpieza diaria de pisos con la fumigación semanal",
            "D) Prevenir y erradicar la presencia de vectores (insectos, roedores, aves) mediante un enfoque integral de Manejo Integrado de Plagas (MIP)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Manejo Integrado de Plagas (MIP) combina medidas preventivas de exclusión, saneamiento y control físico/químico para evitar que roedores e insectos actúen como vectores de patógenos."
    },
    {
        "id": 57,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "En la gestión de alérgenos alimentarios, ¿cuál de las siguientes prácticas constituye una medida de control indispensable en la línea de producción?",
        "opciones": [
            "A) Almacenar los ingredientes que contienen alérgenos sin identificar en el mismo anaquel que los libres de alérgenos",
            "B) Omitir la declaración de alérgenos en la etiqueta si la traza es menor al 5%",
            "C) Validar y verificar los procedimientos de limpieza (enjuague o análisis de alérgenos) entre el cambio de productos con y sin alérgenos",
            "D) Mezclar todos los ingredientes alergénicos al inicio del turno sin limpieza previa"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La contaminación cruzada por alérgenos (como leche, soya, nueces, gluten) se previene mediante una gestión rigurosa de almacenamiento, secuenciación de producción y validación de limpiezas."
    },
    {
        "id": 58,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Cuál es el propósito de realizar una auditoría interna de calidad en una planta procesadora de alimentos?",
        "opciones": [
            "A) Reducir la plantilla de personal operativo mediante la automatización",
            "B) Imponer sanciones punitivas a los operadores de las líneas de producción",
            "C) Evaluar objetivamente la conformidad del sistema de gestión frente a los estándares normativos y detectar áreas de mejora continua",
            "D) Sustituir las inspecciones microbiológicas de rutina del producto final"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las auditorías internas son herramientas de evaluación sistemática para verificar si las actividades de calidad e inocuidad se ejecutan según lo planeado y identificar oportunidades de mejora."
    },
    {
        "id": 59,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué norma o estándar internacional privado es reconocido globalmente por la Global Food Safety Initiative (GFSI) para la certificación de esquemas de inocuidad alimentaria?",
        "opciones": [
            "A) Certificación de Huella de Carbono Industrial",
            "B) Protocolos de Comercio Justo Agrícola",
            "C) SQF (Safe Quality Food), BRCGS y FSSC 22000",
            "D) ANSI / ASME BPE exclusivamente"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Esquemas como BRCGS, FSSC 22000 y SQF están reconocidos por la GFSI (Iniciativa Global de Inocuidad Alimentaria) como estándares de certificación de categoría mundial para la cadena alimentaria."
    },
    {
        "id": 60,
        "area": "Diseño de Plantas, Inocuidad y Calidad",
        "pregunta": "¿Qué representa el árbol de decisiones en la metodología HACCP?",
        "opciones": [
            "A) Un flujograma secuencial de preguntas lógicas para identificar si un peligro específico constituye un Punto Crítico de Control (PCC)",
            "B) Una guía taxonómica para identificar cepas bacterianas patógenas",
            "C) Un análisis financiero de los costos de producción por tonelada",
            "D) Un diagrama para calcular la depreciación fiscal de los equipos de refrigeración"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El árbol de decisiones del Codex Alimentarius es una secuencia lógica de preguntas aplicada a cada peligro identificado para determinar si una fase del proceso es un PCC."
    },
    {
        "id": 61,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué método de conservación térmico prolongada destruye todos los patógenos y microorganismos esporulados, comercialmente aplicado a productos estables a temperatura ambiente (ej. leche UHT o conservas metálicas)?",
        "opciones": [
            "A) Termización",
            "B) Pasteurización lenta (Holder)",
            "C) Escaldado (Blanching)",
            "D) Esterilización comercial"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La esterilización comercial destruye todos los microorganismos capaces de multiplicarse bajo condiciones normales de almacenamiento, garantizando la estabilidad microbiológica del producto a temperatura ambiente."
    },
    {
        "id": 62,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Cuál es el propósito fundamental de aplicar la operación de escaldado (blanching) a las verduras antes de su congelación?",
        "opciones": [
            "A) Incrementar el contenido de azúcares reductores por hidrólisis ácida",
            "B) Inactivar enzimas endógenas (como peroxidasas y polifenoloxidasas) que causan deterioro de color, sabor y nutrientes durante el almacenamiento en congelación",
            "C) Cocinar totalmente el tejido vegetal hasta ablandarlo por completo",
            "D) Reducir la carga microbiana total mediante la aplicación de salmuera saturada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El escaldado es un tratamiento térmico breve (vapor o agua caliente) cuyo objetivo principal es inactivar enzimas oxidativas que generarían sabores indeseables y pérdida de nutrientes en congelación."
    },
    {
        "id": 63,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué ocurre físicamente durante la congelación lenta de un alimento en comparación con la congelación rápida?",
        "opciones": [
            "A) Se forman grandes cristales de hielo extracelulares que perforan las paredes celulares, provocando mayor pérdida de exudado (dripping) al descongelar",
            "B) Se incrementa la actividad enzimática por concentración de solutos",
            "C) Se forman numerosos cristales de hielo intracelulares diminutos que preservan intacta la estructura celular",
            "D) El agua se solidifica instantáneamente sin formación de cristales"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La congelación lenta favorece la formación de cristales de hielo grandes fuera de las células, lo que daña las membranas celulares y ocasiona pérdida de agua y textura al descongelar (exudado)."
    },
    {
        "id": 64,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué gas se utiliza predominantemente en el envasado en atmósfera modificada (MAP) de carnes rojas frescas para mantener la oximioglobina y evitar el crecimiento aeróbico de mohos?",
        "opciones": [
            "A) Nitrógeno puro al 100%",
            "B) Dióxido de carbono (CO2) al 20-30% y Oxígeno (O2) al 70-80%",
            "C) Monóxido de carbono al 50%",
            "D) Argón y helio en proporción equimolar"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las carnes rojas requieren altas concentraciones de oxígeno para mantener el color rojo vivo (oximioglobina) y dióxido de carbono para inhibir el crecimiento de bacterias aerobias alterantes y hongos."
    },
    {
        "id": 65,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Cuál es el principio de conservación en los alimentos encurtidos mediante adición de vinagre y sal?",
        "opciones": [
            "A) Eliminación total del oxígeno disuelto por vacío absoluto",
            "B) Polimerización de las proteínas superficiales mediante radiación ionizante",
            "C) Descenso drástico del pH y aumento de la presión osmótica, inhibiendo el desarrollo de microorganismos patógenos y alterantes",
            "D) Precipitación de los minerales del agua por intercambio iónico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El encurtido combina la acidez (bajo pH por el ácido acético) y la presión osmótica (por la sal y el azúcar), creando un entorno hostil para bacterias patógenas y esporuladas."
    },
    {
        "id": 66,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué método de conservación por radiación ionizante utiliza rayos gamma de Cobalto-60 para destruir microorganismos e inhibir la brotación en papas y cebollas?",
        "opciones": [
            "A) Irradiación de alimentos (Alimentos irradiados)",
            "B) Filtración esterilizante por luz UV",
            "C) Calentamiento óhmico de alta frecuencia",
            "D) Pasteurización por microondas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La irradiación utiliza energía ionizante (rayos gamma, rayos X o haces de electrones) para romper el ADN de los microorganismos y prevenir la germinación en tubérculos sin calentar el producto."
    },
    {
        "id": 67,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Cuál es el fundamento de la concentración de alimentos por ósmosis inversa utilizando membranas semipermeables?",
        "opciones": [
            "A) Aplicar una presión superior a la presión osmótica natural para forzar el paso del agua desde la solución concentrada hacia el solvente puro a través de la membrana",
            "B) Centrifugar el líquido a 50,000 rpm para separar moléculas de baja masa",
            "C) Precipitar los sólidos disueltos por adición de sales de calcio",
            "D) Evaporar el agua mediante calentamiento al vacío con múltiples efectos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ósmosis inversa requiere presiones superiores a la presión osmótica para vencer el flujo natural, logrando retener solutos disueltos y dejando pasar únicamente el agua a través de la membrana."
    },
    {
        "id": 68,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué parámetro de la atmósfera modificada actúa como agente bacteriostático efectivo contra bacterias gramnegativas y hongos en frutas y hortalizas frescas?",
        "opciones": [
            "A) El dióxido de carbono (CO2)",
            "B) El vapor de agua",
            "C) El nitrógeno molecular (N2)",
            "D) El oxígeno (O2)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El dióxido de carbono es un gas altamente soluble en agua y grasas de los alimentos, con propiedades bacteriostáticas y fungistáticas que retrasan la respiración y el deterioro microbiano."
    },
    {
        "id": 69,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Qué tecnología térmica emergente utiliza el paso de corriente eléctrica alterna directamente a través del alimento, aprovechando su resistencia eléctrica para un calentamiento volumétrico ultrarrápido?",
        "opciones": [
            "A) Secado por ventana refractiva",
            "B) Deshidratación por lecho fluidizado",
            "C) Ultrasonido de potencia",
            "D) Calentamiento óhmico (Joule heating)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El calentamiento óhmico pasa electricidad a través de un alimento que actúa como una resistencia eléctrica, generando calor de forma volumétrica y uniforme sin superficies calientes."
    },
    {
        "id": 70,
        "area": "Preservación y Tecnologías de Conservación",
        "pregunta": "¿Cuál es el objetivo principal de la adición de nitritos y nitratos de sodio en la curación de productos cárnicos?",
        "opciones": [
            "A) Incrementar drásticamente el contenido proteico del embutido",
            "B) Actuar como edulcorante natural de bajo índice glucémico",
            "C) Ablandar el tejido conectivo colagenoso durante el embutido",
            "D) Inhibir la germinación de esporas de Clostridium botulinum, estabilizar el color rojo del curado (nitrosomioglobina) y aportar acción antioxidante"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los nitritos son aditivos multifuncionales esenciales en carnes curadas: previenen el botulismo, fijan el color característico del curado y retrasan la oxidación lipídica."
    },
    {
        "id": 71,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué método de análisis sensorial discriminativo se utiliza para determinar si existe una diferencia perceptible global entre dos muestras de alimentos modificadas?",
        "opciones": [
            "A) Prueba triangular (o prueba dúo-trío)",
            "B) Análisis de componentes principales (ACP)",
            "C) Perfil de sabor cuantitativo descriptivo",
            "D) Escala hedónica de 9 puntos de agrado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La prueba triangular es una prueba estadística discriminativa donde el panelista recibe tres muestras (dos iguales y una diferente) y debe identificar cuál es la muestra distinta."
    },
    {
        "id": 72,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué escala afectiva o hedónica se emplea frecuentemente en pruebas con consumidores para medir el grado de aceptación o preferencia de un nuevo prototipo de alimento?",
        "opciones": [
            "A) Escala hedónica verbal de 9 puntos (desde 'Me gusta muchísimo' hasta 'Me disgusta muchísimo')",
            "B) Escala de umbral de detección gustativa absoluta",
            "C) Perfil cuantitativo de textura por compresión instrumental",
            "D) Escala de intensidad de color CIE L*a*b*"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La escala hedónica de 9 puntos es el estándar en evaluación sensorial afectiva para cuantificar la aceptabilidad y el agrado del consumidor hacia un producto."
    },
    {
        "id": 73,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "En la formulación de un nuevo producto alimenticio, ¿qué etapa del proceso de desarrollo de nuevos productos (DNP) precede inmediatamente al escalamiento industrial y comercialización?",
        "opciones": [
            "A) Diseño inicial del logotipo de la marca",
            "B) Registro de patentes y marcas comerciales",
            "C) Generación de ideas abstractas",
            "D) Pruebas de mercado a escala piloto y validación de vida de anaquel"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Antes de la comercialización masiva, el producto pasa por pruebas piloto, optimización de formulación, validación de vida de anaquel y pruebas de mercado para mitigar riesgos."
    },
    {
        "id": 74,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué evalúa el análisis descriptivo cuantitativo (QDA) en la evaluación sensorial de alimentos?",
        "opciones": [
            "A) La concentración exacta de azúcares reductores por cromatografía",
            "B) La vida de anaquel microbiológica acelerada",
            "C) La identificación y cuantificación detallada de los atributos sensoriales (apariencia, olor, sabor, textura) mediante un panel entrenado",
            "D) La opinión personal y el gusto subjetivo de un consumidor no entrenado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El QDA (Quantitative Descriptive Analysis) utiliza jueces altamente entrenados para medir de forma objetiva y reproducible la intensidad de múltiples atributos sensoriales de un producto."
    },
    {
        "id": 75,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué parámetro físico se mide comúnmente con un texturómetro instrumental para evaluar la firmeza de un queso madurado o una fruta fresca?",
        "opciones": [
            "A) Índice de refracción en grados Brix",
            "B) Viscosidad dinámica a cizalla constante",
            "C) Fuerza máxima de penetración o compresión (prueba TPA - Texture Profile Analysis)",
            "D) Tensión superficial de la fase acuosa"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Análisis de Perfil de Textura (TPA) simula la masticación mediante ensayos de compresión doble, midiendo parámetros mecánicos como dureza, cohesividad, elasticidad y adhesividad."
    },
    {
        "id": 76,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué describe la propiedad reológica de un fluido no newtoniano pseudoplástico?",
        "opciones": [
            "A) Su viscosidad aumenta al aumentar la velocidad de cizallamiento (dilatante)",
            "B) Su viscosidad disminuye al aumentar la velocidad de cizallamiento (fluido tixotrópico o adelgazante por cizalla)",
            "C) Presenta un esfuerzo de cedimiento inicial antes de empezar a fluir",
            "D) Su viscosidad permanece estrictamente constante sin importar la agitación"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los fluidos pseudoplásticos (como purés, salsas y pulpas de fruta) muestran una disminución de su viscosidad aparente conforme se incrementa la velocidad de cizallamiento aplicada."
    },
    {
        "id": 77,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "En el espacio de color CIE L*a*b*, ¿qué representa el parámetro coordenada L*?",
        "opciones": [
            "A) La luminosidad del color, variando desde 0 (negro absoluto) hasta 100 (blanco perfecto)",
            "B) La saturación o pureza cromática del tono",
            "C) El eje cromático de azul a amarillo",
            "D) El eje cromático de verde a rojo"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En el sistema colorimétrico CIE L*a*b*, L* representa la claridad o luminosidad, a* mide la transición de verde (-) a rojo (+), y b* mide la transición de azul (-) a amarillo (+)."
    },
    {
        "id": 78,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Cuál es el objetivo de realizar pruebas de vida de anaquel acelerada (accelerated shelf-life testing - ASLT) en un alimento?",
        "opciones": [
            "A) Incrementar artificialmente la actividad de agua",
            "B) Reducir el tiempo de cocción en la planta piloto",
            "C) Acelerar la cristalización de las grasas saturadas",
            "D) Almacenar el producto a temperaturas y humedades elevadas para simular y predecir el deterioro químico o microbiológico en un tiempo menor"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las pruebas ASLT exponen al alimento a condiciones estresantes (temperaturas elevadas) basándose en la ecuación de Arrhenius para estimar la tasa de degradación y predecir la vida útil comercial sin esperar meses."
    },
    {
        "id": 79,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué componente químico de los alimentos es el principal responsable de la sensación de astringencia en vinos tintos jóvenes, plátanos verdes y té?",
        "opciones": [
            "A) Los taninos y polifenoles condensados que precipitan las proteínas salivales",
            "B) Los triglicéridos insaturados de alta viscosidad",
            "C) Los ácidos orgánicos de cadena corta como el ácido cítrico",
            "D) Los aminoácidos libres como el glutamato monosódico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La astringencia no es un sabor gustativo, sino una sensación táctil de sequedad y rugosidad en la boca causada por la interacción y precipitación de los polifenoles (taninos) con las proteínas de la saliva."
    },
    {
        "id": 80,
        "area": "Desarrollo de Productos y Análisis Sensorial",
        "pregunta": "¿Qué se entiende por 'umbral de sabor' en evaluación sensorial?",
        "opciones": [
            "A) La concentración mínima de una sustancia disuelta que puede ser detectada por un panelista",
            "B) La máxima cantidad de azúcar tolerada en un alimento dietético",
            "C) El punto de ebullición de los compuestos aromáticos volátiles",
            "D) La temperatura exacta a la cual se percibe el dulzor"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El umbral de percepción o detección gustativa es la concentración límite mínima de un compuesto químico en el agua o alimento a partir de la cual el estímulo sensorial se hace perceptible."
    },
    {
        "id": 81,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "En un balance de materia en estado estacionario para un proceso de concentración de jugo de naranja, si entran 1000 kg/h de jugo con 10% de sólidos y se desea obtener un concentrado con 50% de sólidos, ¿cuminará qué cantidad de agua se evapora?",
        "opciones": [
            "A) 600 kg/h",
            "B) 500 kg/h",
            "C) 200 kg/h",
            "D) 800 kg/h"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Balance de sólidos: F * X_F = P * X_P -> 1000 * 0.10 = P * 0.50 -> P = 200 kg/h de producto final. Agua evaporada = 1000 - 200 = 800 kg/h."
    },
    {
        "id": 82,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Qué ley termodinámica establece que la energía total de un sistema aislado se conserva durante cualquier proceso de transformación en equipos de proceso?",
        "opciones": [
            "A) Tercera Ley de la Termodinámica",
            "B) Segunda Ley de la Termodinámica (Entropía)",
            "C) Ley Cero de la Termodinámica",
            "D) Primera Ley de la Termodinámica (Conservación de la energía)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La Primera Ley de la Termodinámica es el principio de conservación de la energía aplicado en balances de energía para calentadores, enfriadores y evaporadores."
    },
    {
        "id": 83,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Qué representa el coeficiente global de transferencia de calor (U) en el diseño de equipos térmicos?",
        "opciones": [
            "A) La viscosidad cinemática del fluido calefactor",
            "B) La cantidad de calor disipada por radiación directa al ambiente",
            "C) La velocidad máxima de flujo másico por unidad de área transversal",
            "D) La resistencia térmica combinada de las capas de película de fluido, incrustaciones y la pared metálica del intercambiador"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El coeficiente global U es el inverso de la suma de todas las resistencias térmicas individuales (convección interna, fouling, conducción en la pared y convección externa)."
    },
    {
        "id": 84,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "En el diseño de un evaporador, ¿qué es la 'elevación del punto de ebullición' (EPE)?",
        "opciones": [
            "A) La diferencia de temperatura entre el vapor vivo y el vapor secundario",
            "B) El incremento de presión provocado por una bomba de desplazamiento positivo",
            "C) La temperatura máxima alcanzada por el condensador barométrico",
            "D) El aumento en el punto de ebullición de una solución concentrada en comparación con el agua pura a la misma presión"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La presencia de solutos no volátiles en una solución reduce su presión de vapor, elevando su punto de ebullición por encima del agua pura (EPE), lo cual debe considerarse en el cálculo de transferencia de calor."
    },
    {
        "id": 85,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Cuál es el propósito de realizar un diagrama de flujo de proceso (PFD - Process Flow Diagram) en la ingeniería de proyectos alimentarios?",
        "opciones": [
            "A) Diseñar el mobiliario de las oficinas administrativas de la planta",
            "B) Mostrar la secuencia lógica de operaciones unitarias, equipos principales, flujos de materia y condiciones principales de operación",
            "C) Detallar el cableado eléctrico de fuerza y control de cada motor",
            "D) Especificar los costos unitarios de contratación del personal operativo"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El PFD es un diagrama técnico fundamental que resume la arquitectura general del proceso, incluyendo equipos principales, flujos de masa y balances térmicos preliminares."
    },
    {
        "id": 86,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "En un balance de energía para un intercambiador de calor sin pérdidas al exterior, ¿cómo se relacionan el calor cedido por el fluido caliente y el ganado por el fluido frío?",
        "opciones": [
            "A) El calor ganado es despreciable frente a la entalpía de vaporización",
            "B) No existe relación matemática directa",
            "C) El calor cedido es siempre el doble que el ganado debido a la fricción",
            "D) El calor cedido es exactamente igual al calor ganado (Q_caliente = Q_frío)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Por el principio de conservación de energía (Primera Ley), asumiendo un sistema adiabático sin pérdidas al ambiente, todo el calor perdido por el fluido caliente es absorbido por el fluido frío."
    },
    {
        "id": 87,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Qué magnitud física evalúa el concepto de 'ergonomía' y 'factor humano' en el diseño de estaciones de trabajo dentro de una línea de envasado?",
        "opciones": [
            "A) La adaptación de las herramientas, maquinaria y puesto de trabajo a las capacidades físicas y mentales del operador para optimizar bienestar y eficiencia",
            "B) La resistencia mecánica de las cajas de cartón corrugado",
            "C) El consumo eléctrico en kilovatios-hora por turno",
            "D) La velocidad lineal máxima de las bandas transportadoras"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ergonomía diseña tareas, equipos y espacios de trabajo ajustados a las características anatómicas y fisiológicas humanas para prevenir lesiones y fatiga."
    },
    {
        "id": 88,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Qué indica un factor de servicio (fouling factor o resistencia por incrustación) elevado en un intercambiador de calor tubular?",
        "opciones": [
            "A) La presencia de depósitos de sarro, proteínas quemadas o sales minerales que reducen la eficiencia térmica y aumentan la caída de presión",
            "B) Que el flujo de agua de refrigeración es excesivamente turbulento",
            "C) Que las superficies de transferencia están perfectamente limpias y pulidas",
            "D) Que el equipo opera por debajo de su presión de diseño"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El factor de ensuciamiento (fouling) representa la resistencia térmica adicional generada por la acumulación de incrustaciones de producto en las paredes del intercambiador."
    },
    {
        "id": 89,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "¿Qué evalúa la evaluación de impacto ambiental (EIA) obligatoria en un proyecto de construcción de una planta procesadora de carne?",
        "opciones": [
            "A) Las ganancias financieras netas proyectadas a 10 años",
            "B) La velocidad de respuesta del sistema de extintores contra incendios",
            "C) La resistencia sísmica de los cimientos de concreto reforzado",
            "D) Los posibles efectos negativos y positivos de la actividad industrial sobre el agua, suelo, aire, flora, fauna y comunidades circundantes, proponiendo medidas de mitigación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La EIA es un estudio técnico legal que identifica y previene los impactos ambientales generados por vertidos, emisiones y residuos sólidos industriales."
    },
    {
        "id": 90,
        "area": "Ingeniería de Proyectos y Balance de Materia/Energía",
        "pregunta": "En la evaluación financiera de proyectos de inversión alimentaria, ¿qué representa el Valor Presente Neto (VPN o VAN)?",
        "opciones": [
            "A) El porcentaje de rendimiento anual exacto en el que el proyecto no genera ni pérdidas ni ganancias",
            "B) El tiempo requerido para recuperar el capital invertido",
            "C) El costo total de adquisición de la maquinaria de proceso sin considerar la inflación",
            "D) La suma de los flujos de caja futuros descontados a una tasa de interés dada, menos la inversión inicial"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El VPN calcula el valor actual de los flujos netos de caja futuros traídos a valor presente; un VPN positivo indica que el proyecto es rentable y añade valor."
    },
    {
        "id": 91,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué tipo de metabolismo microbiano realiza Saccharomyces cerevisiae en condiciones anaerobias para la producción de vino y cerveza?",
        "opciones": [
            "A) Oxidación incompleta a ácido acético",
            "B) Fermentación alcohólica (conversión de glucosa en etanol y dióxido de carbono)",
            "C) Respiración aeróbica estricta",
            "D) Fermentación láctica homofermentativa"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En ausencia de oxígeno, la levadura Saccharomyces cerevisiae desvía su metabolismo hacia la fermentación alcohólica, transformando los azúcares en etanol y CO2."
    },
    {
        "id": 92,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Cuál es el papel del oxígeno en los biorreactores (fermentadores) durante la producción aeróbica de biomasa de levadura o metabolitos secundarios?",
        "opciones": [
            "A) Elevar el pH del medio de cultivo hasta valores alcalinos",
            "B) Servir como nutriente carbonado estructural primario",
            "C) Actuar como aceptor final de electrones en la cadena respiratoria y asegurar el suministro para el crecimiento celular, requiriendo un alto coeficiente de transferencia volumétrica (kLa)",
            "D) Precipitar las proteínas contaminantes del medio"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En cultivos aeróbicos, el oxígeno disuelto es limitante y esencial para la respiración celular; por ello, el diseño del biorreactor debe maximizar el coeficiente de transferencia de oxígeno (kLa)."
    },
    {
        "id": 93,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué microorganismo se emplea como agente de maduración y formación de la caracteristica corteza y textura en los quesos tipo Roquefort o Gorgonzola?",
        "opciones": [
            "A) Penicillium roqueforti",
            "B) Streptococcus lactis",
            "C) Lactobacillus acidophilus",
            "D) Propionibacterium freudenreichii"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Penicillium roqueforti es un hongo filamentoso cuyas esporas se inoculan en quesos azules; su actividad lipolítica y proteolítica confiere el sabor y textura picante característicos."
    },
    {
        "id": 94,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Cuál es la función principal de las bacterias ácido propiónicas (como Propionibacterium) en la elaboración de quesos suizos tipo Emmental?",
        "opciones": [
            "A) Sintetizar antibióticos naturales para inhibir Listeria",
            "B) Hidrolizar toda la grasa butírica para evitar el enranciamiento",
            "C) Aumentar la acidez total por debajo de pH 3.0",
            "D) Producir ácido propiónico, ácido acético y gas carbónico (CO2), el cual genera los ojos o agujeros característicos del queso"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las bacterias propiónicas fermentan los lactatos produciendo ácido propiónico, acético y dióxido de carbono; este último gas queda atrapado en la matriz proteica formando los característicos ojos del queso suizo."
    },
    {
        "id": 95,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "En un proceso de fermentación discontinua (batch), ¿qué fase del crecimiento microbiano se caracteriza por una tasa de división celular máxima y constante?",
        "opciones": [
            "A) Fase estacionaria",
            "B) Fase de adaptación o latencia (Lag)",
            "C) Fase de muerte celular",
            "D) Fase exponencial o logarítmica"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Durante la fase exponencial (log), los microorganismos se multiplican a su velocidad máxima y constante, adaptados plenamente a los nutrientes del medio."
    },
    {
        "id": 96,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué enzima pectolítica se utiliza industrialmente en la clarificación de jugos de fruta para degradar la pectina y reducir la viscosidad?",
        "opciones": [
            "A) Glucosa oxidasa",
            "B) Pectinmetilesterasa y poligalacturonasas (enzimas pectolíticas)",
            "C) Renina o quimosina bovina",
            "D) Invertasa de levadura"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las enzimas pectolíticas (pectinasas) rompen los polímeros de pectina que suspenden la pulpa, permitiendo la clarificación rápida y filtración eficiente de los jugos."
    },
    {
        "id": 97,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué caracteriza a una fermentación láctica heterofermentativa en comparación con una homofermentativa?",
        "opciones": [
            "A) Requiere obligatoriamente la presencia de luz solar directa",
            "B) Es realizada exclusivamente por hongos filamentosos",
            "C) Produce ácido láctico, etanol, ácido acético y dióxido de carbono a partir de la ruta de la fosfocetolasa",
            "D) Produce exclusivamente ácido láctico como único producto metabólico"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las bacterias lácticas heterofermentativas utilizan la vía de la fosfocetolasa, generando no sólo ácido láctico, sino cantidades significativas de etanol, acetato y CO2."
    },
    {
        "id": 98,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Cuál es el propósito de inocular cultivos definidos (starter cultures) en la producción industrial de embutidos fermentados como el salami?",
        "opciones": [
            "A) Acidificar rápidamente el producto por producción de ácido láctico, inhibiendo patógenos, mejorando la textura y promoviendo el secado",
            "B) Incrementar la humedad relativa de la cámara de maduración",
            "C) Acelerar la descomposición de los triglicéridos en glicerol libre",
            "D) Evitar la formación de pigmentos de curado"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los cultivos iniciadores (ej. Staphylococcus xylosus y Lactobacillus sakei) acidifican el embutido de forma segura, reduciendo el pH, mejorando la seguridad microbiológica y facilitando la contracción de la carne."
    },
    {
        "id": 99,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué tecnología biotecnológica avanzada permite la inmovilización de enzimas o células microbianas para su reutilización continua en reactores de columna?",
        "opciones": [
            "A) Adsorción en soportes porosos, atrapamiento en geles de alginato de calcio o enlace covalente",
            "B) Destilación fraccionada a reflujo total",
            "C) Homogeneización a alta presión en válvulas micrométricas",
            "D) Liofilización profunda a -50 °C"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La inmovilización de enzimas y células en geles (como alginato) o soportes sólidos facilita su recuperación y reutilización en procesos industriales continuos, reduciendo costos operativos."
    },
    {
        "id": 100,
        "area": "Biotecnología y Tecnología de Fermentaciones",
        "pregunta": "¿Qué metabolito antimicrobiano de naturaleza peptídica es producido por Lactococcus lactis y se utiliza ampliamente como biopreservador (E-234) en quesos y alimentos enlatados?",
        "opciones": [
            "A) Nisina",
            "B) Lisozima aviar",
            "C) Penicilina G",
            "D) Natamicina"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La nisina es un bacteriocina (péptido antimicrobiano) producida por ciertas cepas de Lactococcus lactis, efectiva inhibiendo bacterias grampositivas y esporas de Clostridium."
    },
    {
        "id": 101,
        "area": "Sección Transversal: Estadística y Metodología",
        "pregunta": "¿Qué prueba estadística paramétrica se utiliza para comparar las medias de tres o más grupos independientes en un ensayo experimental de formulación de alimentos?",
        "opciones": [
            "A) Prueba de chi-cuadrada de independencia",
            "B) Prueba t de Student para muestras pareadas",
            "C) Análisis de Varianza (ANOVA de una vía)",
            "D) Coeficiente de correlación de Pearson"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El ANOVA (Análisis de Varianza) es la prueba estadística estándar para evaluar si existen diferencias significativas entre las medias de tres o más tratamientos o grupos independientes."
    },
    {
        "id": 102,
        "area": "Sección Transversal: Estadística y Metodología",
        "pregunta": "¿Cuál es el propósito de aplicar un diseño experimental factorial (por ejemplo, 2^3) en la optimización de un proceso de fritura de snacks?",
        "opciones": [
            "A) Estudiar el efecto simultáneo de múltiples factores (temperatura, tiempo, tipo de aceite) sobre las variables de respuesta y evaluar sus interacciones",
            "B) Variar únicamente un factor a la vez manteniendo todos los demás estrictamente fijos",
            "C) Calcular el punto de equilibrio financiero del proyecto",
            "D) Eliminar por completo la variabilidad experimental del operador"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los diseños factoriales permiten evaluar el impacto de varios factores de forma conjunta y eficiente, detectando no solo efectos principales, sino también las interacciones entre ellos."
    },
    {
        "id": 103,
        "area": "Sección Transversal: Estadística y Metodología",
        "pregunta": "¿Qué indica un valor de p (valor de probabilidad) menor a 0.05 en una prueba de hipótesis estadística aplicada a un control de calidad?",
        "opciones": [
            "A) Los datos experimentales carecen de validez analítica",
            "B) Se rechaza la hipótesis nula (H0), concluyendo que existe evidencia estadísticamente significativa de una diferencia o efecto real",
            "C) El proceso se encuentra perfectamente centrado en su media nominal",
            "D) La probabilidad de cometer un error tipo II es exactamente cero"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un valor de p < 0.05 es el umbral convencional de significancia estadística; indica que la probabilidad de observar los resultados obtenidos bajo el supuesto de que la hipótesis nula es verdadera es menor al 5%."
    },
    {
        "id": 104,
        "area": "Sección Transversal: Estadística y Metodología",
        "pregunta": "¿Qué mide el coeficiente de determinación ($R^2$) en un modelo de regresión lineal aplicado a la predicción de vida de anaquel?",
        "opciones": [
            "A) El error estándar residual entre las réplicas del ensayo",
            "B) La pendiente exacta de la recta de calibración instrumental",
            "C) La correlación entre dos variables independientes sin relación causal",
            "D) La proporción de la varianza total de la variable dependiente que es explicada por el modelo de regresión"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El coeficiente de determinación ($R^2$) indica qué tan bien se ajustan los datos experimentales a la línea de regresión estimada, representando la fracción de variabilidad explicada por el modelo."
    },
    {
        "id": 105,
        "area": "Sección Transversal: Estadística y Metodología",
        "pregunta": "¿Qué representa un error de Tipo I (alfa) en la toma de decisiones basada en pruebas estadísticas de control de calidad?",
        "opciones": [
            "A) Omitir la calibración del espectrofotómetro",
            "B) Calcular incorrectamente la desviación estándar muestral",
            "C) Rechazar la hipótesis nula cuando en realidad es verdadera (falso positivo)",
            "D) Aceptar la hipótesis nula cuando es falsa (falso negativo)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El error de Tipo I (alfa) ocurre cuando se concluye erróneamente que hay un efecto o diferencia significativa cuando en la realidad no la hay (falso positivo)."
    },
    {
        "id": 106,
        "area": "Sección Transversal: Ingeniería Económica y Ambiental",
        "pregunta": "¿Qué indicador financiero mide la tasa de descuento a la cual el Valor Presente Neto de un proyecto de inversión en una planta de alimentos se hace exactamente igual a cero?",
        "opciones": [
            "A) Relación Beneficio-Costo (B/C)",
            "B) Tasa Interna de Retorno (TIR)",
            "C) Costo Anual Equivalente (CAE)",
            "D) Período de recuperación de la inversión (PRI)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La Tasa Interna de Retorno (TIR) es la tasa de rentabilidad en la cual el valor presente de los ingresos futuros iguala la inversión inicial (VPN = 0)."
    },
    {
        "id": 107,
        "area": "Sección Transversal: Ingeniería Económica y Ambiental",
        "pregunta": "¿Qué indicador ambiental evalúa la cantidad total de gases de efecto invernadero emitidos directa e indirectamente a lo largo del ciclo de vida de un producto alimenticio?",
        "opciones": [
            "A) Carga hidráulica volumétrica",
            "B) Huella de carbono",
            "C) Índice de acidez libre",
            "D) Demanda Bioquímica de Oxígeno (DBO5)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La huella de carbono cuantifica las emisiones de equivalentes de dióxido de carbono ($CO_2eq$) asociadas a la producción, transporte, procesamiento y consumo de un alimento."
    },
    {
        "id": 108,
        "area": "Sección Transversal: Ingeniería Económica y Ambiental",
        "pregunta": "¿Cuál es el propósito fundamental de una planta de tratamiento de aguas residuales industriales (PTAR) en una procesadora láctea o cárnica?",
        "opciones": [
            "A) Eliminar exclusivamente los minerales disueltos como el sodio y potasio",
            "B) Generar energía eléctrica mediante combustión directa de lodos húmedos",
            "C) Reducir la Demanda Bioquímica de Oxígeno (DBO5), la Demanda Química de Oxígeno (DQO), grasas, aceites y sólidos suspendidos antes de su vertido al alcantarillado o cuerpo receptor",
            "D) Recuperar la totalidad del agua para transformarla en agua potable embotellada sin tratamiento previo"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las PTAR procesan los efluentes industriales ricos en materia orgánica (medida como DBO y DQO) y grasas para cumplir con las normativas ambientales de vertido."
    },
    {
        "id": 109,
        "area": "Sección Transversal: Ingeniería Económica y Ambiental",
        "pregunta": "¿Qué principio de la economía circular se aplica cuando los residuos orgánicos de la industria de jugos (bagazo de naranja) se transforman en pectina o alimento animal?",
        "opciones": [
            "A) Dilución en grandes volúmenes de agua limpia",
            "B) Eliminación directa en vertederos municipales",
            "C) Incineración sin recuperación de calor",
            "D) Valorización y valorización de subproductos (reutilización y reintroducción en la cadena de valor)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La economía circular busca transformar los residuos agroindustriales en subproductos de valor agregado (economía de valorización), minimizando el desperdicio."
    },
    {
        "id": 110,
        "area": "Sección Transversal: Ingeniería Económica y Ambiental",
        "pregunta": "¿Qué contempla el análisis de ciclo de vida (ACV) según la serie de normas ISO 14040?",
        "opciones": [
            "A) Medir la resistencia a la compresión de los empaques de cartón",
            "B) Auditar el cumplimiento de los salarios mínimos del personal",
            "C) Calcular los costos de depreciación fiscal de la maquinaria pesada",
            "D) Evaluar los impactos ambientales potenciales asociados a un producto a lo largo de todas las etapas de su vida (desde la cuna hasta la tumba)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Análisis de Ciclo de Vida (ACV) es una metodología estandarizada para evaluar cargas ambientales asociadas a un producto, proceso o actividad desde la extracción de materias primas hasta su disposición final."
    },
    {
        "id": 111,
        "area": "Tecnología de Lácteos y Derivados",
        "pregunta": "En la elaboración de queso cheddar o gouda, ¿qué función cumple la adición del cultivo iniciador de bacterias ácido lácticas antes del cuajado?",
        "opciones": [
            "A) Incrementar el punto de congelación de la leche",
            "B) Acidificar la leche mediante la fermentación de la lactosa a ácido láctico, preparando el medio para la acción de la cuajada y previniendo el desarrollo de patógenos",
            "C) Coagular instantáneamente la caseína sin necesidad de cuajo enzimático",
            "D) Hidrolizar completamente las grasas para producir sabores amargos"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las bacterias lácticas acidifican la leche, lo cual es indispensable para que la enzima cuajo (quimosina) actúe eficientemente y para favorecer la sinéresis y el desuerado."
    },
    {
        "id": 112,
        "area": "Tecnología de Lácteos y Derivados",
        "pregunta": "¿Qué componente proteico de la leche es el principal responsable de la formación del gel o cuajada al ser hidrolizado en su enlace específico Phe105-Met106 por la quimosina?",
        "opciones": [
            "A) Beta-caseína",
            "B) Kappa-caseína (k-caseína)",
            "C) Alfa-s1 caseína",
            "D) Lactoalbúmina"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La kappa-caseína confiere estabilidad estérica a las micelas de grasa y caseína en la leche. La quimosina corta la k-caseína, desestabilizando la micela y provocando su precipitación en forma de gel."
    },
    {
        "id": 113,
        "area": "Tecnología de Lácteos y Derivados",
        "pregunta": "¿Cuál es el defecto físico conocido como 'hinchamiento precoz' en los quesos madurados, causado por contaminación con coliformes?",
        "opciones": [
            "A) Pérdida total de humedad y endurecimiento extremo",
            "B) Oxidación de la grasa butírica que otorga sabor a jabón",
            "C) Cristalización de la lactosa en la superficie en forma de polvo blanco",
            "D) Producción prematura de gas (hidrógeno y CO2) y ácido durante las primeras 24-48 horas, deformando el queso y generando textura esponjosa"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El hinchamiento precoz es provocado por bacterias coliformes contaminantes que fermentan la lactosa rápidamente produciendo gas y sabores impuros en los primeros días de elaboración."
    },
    {
        "id": 114,
        "area": "Tecnología de Cárnicos",
        "pregunta": "¿Qué propiedad funcional de las proteínas cárnicas (mucosidades y miofibrilares) permite ligar agua y grasa en la formulación de embutidos emulsificados como las salchichas?",
        "opciones": [
            "A) Solubilidad en solventes orgánicos apolares",
            "B) Actividad enzimática proteolítica sobre el tejido adiposo",
            "C) Capacidad de volatilización a baja temperatura",
            "D) Capacidad emulsificante y de retención de agua (CRA) mediante la extracción de proteínas miofibrilares (actina y miosina) por acción de la sal"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La adición de sal solubiliza las proteínas miofibrilares (miosina y actina), las cuales actúan como agentes emulsificantes recubriendo las gotitas de grasa y formando una matriz tridimensional que retiene agua."
    },
    {
        "id": 115,
        "area": "Tecnología de Cárnicos",
        "pregunta": "¿Qué pigmento se forma cuando la mioglobina de la carne reacciona con el óxido nítrico derivado de los nitritos durante el proceso de curado y posterior cocción?",
        "opciones": [
            "A) Sulfomioglobina verde",
            "B) Metamioglobina marrón",
            "C) Nitrosomiroglobina (o nitrosohemo-cromo rosado)",
            "D) Porfirina férrica libre"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El óxido nítrico (NO) se combina con la mioglobina formando nitrosomioglobina (rojo brillante), la cual al cocinarse se transforma en nitrosohemocromo, responsable del color rosado característico de jamones y embutidos curados."
    },
    {
        "id": 116,
        "area": "Tecnología de Cereales y Panificación",
        "pregunta": "¿Qué proteínas complejas presentes en la harina de trigo son responsables de conferir elasticidad, tenacidad y extensibilidad a la masa panadera al hidratarse y amasarse?",
        "opciones": [
            "A) Zeina y colágeno",
            "B) Caseína y lactoglobulina",
            "C) Albúminas y globulinas",
            "D) Gliadina y glutenina"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La gliadina (otorga extensibilidad y viscosidad) y la glutenina (otorga elasticidad y fuerza) forman el gluten al unirse en presencia de agua y energía mecánica de amasado."
    },
    {
        "id": 117,
        "area": "Tecnología de Cereales y Panificación",
        "pregunta": "¿Cuál es la función de la levadura (Saccharomyces cerevisiae) y el polvo de hornear durante el proceso de panificación?",
        "opciones": [
            "A) Producir dióxido de carbono ($CO_2$) y etanol, los cuales expanden la red de gluten y generan la estructura porosa y esponjosa del pan durante la fermentación y horneado",
            "B) Reducir el contenido calórico total de los carbohidratos complejos",
            "C) Hidrolizar el gluten en aminoácidos amargos",
            "D) Cristalizar el almidón en la corteza exterior"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La fermentación de azúcares por la levadura produce gas carbónico, que queda atrapado en la red viscoelástica de gluten, haciendo que la masa expanda su volumen (leudado)."
    },
    {
        "id": 118,
        "area": "Tecnología de Frutas y Hortalizas",
        "pregunta": "¿Qué gas fitohormonal desencadena la maduración climatérica en frutas como el plátano, el tomate y el aguacate?",
        "opciones": [
            "A) Dióxido de azufre ($SO_2$)",
            "B) Etileno ($C_2H_4$)",
            "C) Metano ($CH_4$)",
            "D) Óxido nitroso ($N_2O$)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El etileno es la hormona vegetal gaseosa que regula y acelera la senescencia y los cambios bioquímicos de maduración en frutos climatéricos."
    },
    {
        "id": 119,
        "area": "Tecnología de Frutas y Hortalizas",
        "pregunta": "¿Cuál es el objetivo principal de la aplicación de atmósferas controladas (AC) en el almacenamiento frigorífico a largo plazo de manzanas y peras?",
        "opciones": [
            "A) Esterilizar la superficie externa eliminando esporas de hongos mediante presión hidrostática",
            "B) Reducir drásticamente la tasa respiratoria y la síntesis de etileno mediante la disminución del oxígeno y el incremento controlado del dióxido de carbono",
            "C) Aumentar la temperatura interna del fruto para acelerar la conversión de almidón en azúcares",
            "D) Deshidratar la superficie para evitar la condensación de humedad"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las atmósferas controladas reducen los niveles de oxígeno (1-3%) y elevan el $CO_2$, lo que enlentece el metabolismo respiratorio y alarga la vida útil postcosecha de frutas climatéricas."
    },
    {
        "id": 120,
        "area": "Tecnología de Alimentos",
        "pregunta": "¿Qué tecnología avanzada de conservación de alimentos combina altas presiones con temperaturas moderadas para la destrucción de esporas bacterianas termorresistentes (esterilización comercial no térmica)?",
        "opciones": [
            "A) Filtración por flujo tangencial de cerámica",
            "B) Secado por ventana refractiva",
            "C) Esterilización Asistida por Presión (PAE o PAT)",
            "D) Calentamiento por infrarrojos lejanos"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La esterilización asistida por presión (Pressure-Assisted Thermal Sterilization - PAT) combina presiones elevadas (600 MPa) con temperaturas iniciales de 90-120 °C para inactivar rápidamente esporas bacterianas reduciendo el daño térmico al alimento."
    }
];