const bancoPreguntas = [
    {
        id: 1,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Cuál es el indicador financiero que mide la relación entre el costo de la materia prima consumida y las ventas netas en un periodo determinado?",
        opciones: [
            "A) Porcentaje de Costo de Ventas (Food Cost)",
            "B) Margen de Utilidad Bruta",
            "C) Rotación de Inventarios",
            "D) Punto de Equilibrio"
        ],
        respuestaCorrecta: 0,
        explicacion: "El porcentaje de costo de ventas (food cost) expresa el valor de los insumos utilizados para generar los ingresos por venta de alimentos, siendo el indicador operativo y financiero básico en la gestión de restaurantes."
    },
    {
        id: 2,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "En la gestión de inventarios para cocinas profesionales, ¿qué método de valuación de salidas prioriza el uso de los productos que ingresaron primero al almacén?",
        opciones: [
            "A) PEPS (Primeras Entradas, Primeras Salidas)",
            "B) UEPS (Últimas Entradas, Primeras Salidas)",
            "C) Costo Promedio Ponderado",
            "D) EOQ (Cantidad Económica de Pedido)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método PEPS (FIFO por sus siglas en inglés) garantiza la rotación adecuada de los inventarios perecederos, asegurando que la mercancía más antigua se utilice o venda primero para evitar mermas por caducidad."
    },
    {
        id: 3,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Cómo se denomina al documento técnico estandarizado que detalla los ingredientes, cantidades, procedimiento de elaboración, porciones y costos de un platillo?",
        opciones: [
            "A) Receta estándar",
            "B) Menú cíclico",
            "C) Orden de compra",
            "D) Ficha de inventario"
        ],
        respuestaCorrecta: 0,
        explicacion: "La receta estándar es una herramienta de control administrativo y operativo que garantiza la estandarización de calidad, sabor, rendimiento y costos en la producción culinaria."
    },
    {
        id: 4,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "En el análisis de ingeniería de menú, ¿cómo se clasifica a un platillo que presenta un alto margen de contribución pero una baja popularidad en las ventas?",
        opciones: [
            "A) Incógnita o Rompecabezas",
            "B) Estrella",
            "C) Caballo de batalla",
            "D) Perro"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los platillos clasificados como 'Rompecabezas' (Puzzle) generan alta ganancia unitaria pero se venden poco; requieren estrategias de mercadotecnia, recomendación del personal o rediseño para impulsar su demanda."
    },
    {
        id: 5,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Qué término administrativo se refiere al análisis del punto donde los ingresos totales igualan a los costos totales, sin arrojar utilidades ni pérdidas?",
        opciones: [
            "A) Punto de equilibrio (Break-even point)",
            "B) Retorno de inversión (ROI)",
            "C) Margen de contribución",
            "D) Flujo de efectivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El punto de equilibrio calcula la cantidad de unidades o el volumen monetario de ventas necesario para cubrir tanto los costos fijos como los variables en un establecimiento gastronómico."
    },
    {
        id: 6,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "En el diseño de una cocina comercial, ¿cuál es el principio fundamental que debe regir la distribución de las áreas (layout) para evitar la contaminación cruzada?",
        opciones: [
            "A) Flujo unidireccional de sucio a limpio",
            "B) Maximización del espacio para los comensales",
            "C) Cercanía de la caja registradora a la salida",
            "D) Integración de la bodega junto a la zona de cocción"
        ],
        respuestaCorrecta: 0,
        explicacion: "El flujo unidireccional o marcha hacia adelante impide que los alimentos crudos, basura o vajilla sucia crucen caminos con los alimentos listos para servir o vajilla limpia."
    },
    {
        id: 7,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Qué documento legal y administrativo se emite para solicitar formalmente insumos a los proveedores, especificando calidad, cantidad y precio acordado?",
        opciones: [
            "A) Orden de compra",
            "B) Nota de remisión",
            "C) Requisición interna",
            "D) Factura fiscal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La orden de compra es el contrato vinculante entre el establecimiento y el proveedor que detalla las especificaciones técnicas y comerciales de los insumos requeridos."
    },
    {
        id: 8,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "En el control de costos, ¿qué representa el factor de rendimiento (FR) en un alimento con merma?",
        opciones: [
            "A) La relación entre el peso bruto y el peso neto",
            "B) El porcentaje de ganancia sobre el costo",
            "C) El tiempo de vida en anaquel del producto",
            "D) La merma total expresada en moneda nacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El factor de rendimiento (Peso Bruto / Peso Neto) se utiliza para calcular el costo real de la porción comestible tras descontar huesos, piel, cáscaras u otras mermas de preparación."
    },
    {
        id: 9,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Cuál es el tipo de menú en el que cada platillo se ofrece y cobra de manera individual, permitiendo al cliente armar su propia selección?",
        opciones: [
            "A) Menú a la carta",
            "B) Menú de tiempos fijos (Table d'hôte)",
            "C) Menú cíclico",
            "D) Menú ejecutivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El menú a la carta presenta una lista detallada de platillos con sus precios individuales, ofreciendo máxima flexibilidad al comensal y mayor complejidad operativa."
    },
    {
        id: 10,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "En la gestión de personal de cocina, ¿qué herramienta define las responsabilidades, jerarquías, funciones y requisitos de un puesto específico?",
        opciones: [
            "A) Descripción de puestos",
            "B) Organigrama estructural",
            "C) Manual de inducción",
            "D) Contrato colectivo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La descripción de puestos detalla con precisión las tareas, habilidades, competencias y líneas de reporte que corresponden a cada miembro de la brigada de cocina."
    },
    {
        id: 11,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Cuál es el rango de temperatura conocido como la 'Zona de Peligro' en la que los microorganismos patógenos se multiplican rápidamente?",
        opciones: [
            "A) Entre 4 °C y 60 °C",
            "B) Entre -18 °C y 0 °C",
            "C) Entre 65 °C y 100 °C",
            "D) Entre 0 °C y 10 °C"
        ],
        respuestaCorrecta: 0,
        explicacion: "La zona de peligro de temperatura (en normativas sanitarias como la NOM-251-SSA1 o FDA se sitúa comúnmente entre 4°C y 60°C) favorece la rápida proliferación bacteriana."
    },
    {
        id: 12,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "En el sistema HACCP, ¿qué representa un PCC (Punto Crítico de Control)?",
        opciones: [
            "A) Una fase en la que se puede aplicar un control para prevenir o eliminar un peligro a la inocuidad",
            "B) El sitio exacto donde se almacena la materia prima cárnica",
            "C) La temperatura de recepción de lácteos y embutidos",
            "D) El momento de la limpieza profunda de campanas y extractores"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un PCC es un punto, etapa o procedimiento donde es vital aplicar medidas de control para prevenir, eliminar o reducir a niveles aceptables un peligro físico, químico o biológico."
    },
    {
        id: 13,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Cuál es el primer principio fundamental del sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP)?",
        opciones: [
            "A) Realizar un análisis de peligros",
            "B) Determinar los puntos críticos de control",
            "C) Establecer límites críticos",
            "D) Establecer un sistema de monitoreo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El primer principio del sistema HACCP consiste en identificar los peligros biológicos, químicos y físicos asociados a la producción de alimentos en todas sus fases."
    },
    {
        id: 14,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "Durante la manipulación de alimentos, ¿qué fenómeno ocurre cuando los microorganismos patógenos se transfieren de un alimento crudo a uno listo para consumo a través de utensilios o superficies?",
        opciones: [
            "A) Contaminación cruzada",
            "B) Contaminación biológica intrínseca",
            "C) Fermentación acética",
            "D) Pasteurización incompleta"
        ],
        respuestaCorrecta: 0,
        explicacion: "La contaminación cruzada es la transferencia de agentes contaminantes (bacterias, alérgenos) de una fuente sucia o alimento crudo a alimentos inocuos o listos para comer."
    },
    {
        id: 15,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Qué norma oficial mexicana establece las prácticas de higiene para el proceso de alimentos, bebidas o suplementos alimenticios en México?",
        opciones: [
            "A) NOM-251-SSA1-2009",
            "B) NOM-127-SSA1-1994",
            "C) NOM-093-SCFI-1994",
            "D) NOM-141-SSA1-1995"
        ],
        respuestaCorrecta: 0,
        explicacion: "La NOM-251-SSA1-2009 establece los requisitos mínimos de buenas prácticas de higiene que deben cumplirse en el proceso de alimentos, bebidas y medicamentos en México."
    },
    {
        id: 16,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Cuál es el método químico y físico adecuado para la desinfección de vegetales frescos destinados al consumo crudo?",
        opciones: [
            "A) Lavado con agua potable y aplicación de cloro o plata coloidal según tiempos y dosis del fabricante",
            "B) Inmersión en agua hirviendo durante 5 minutos",
            "C) Rociado con vinagre de manzana puro sin enjuague",
            "D) Congelación a -20 °C durante 24 horas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La desinfección con agentes autorizados (como hipoclorito de sodio o plata coloidal) en concentraciones específicas y tiempos de contacto elimina patógenos sin destruir las características organolépticas."
    },
    {
        id: 17,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "En el control de alérgenos alimentarios, ¿cuáles son considerados dentro de los principales alérgenos de declaración obligatoria a nivel internacional (Big Nine)?",
        opciones: [
            "A) Leche, huevo, pescado, crustáceos, frutos secos, cacahuates, trigo, soya y sésamo",
            "B) Carne de res, pollo, cerdo, cordero, pavo, pato, conejo, venado y jabalí",
            "C) Tomate, papa, berenjena, pimiento, ajo, cebolla, calabaza, chayote y zanahoria",
            "D) Manzana, pera, plátano, naranja, limón, uva, fresa, mango y piña"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los nueve principales alérgenos alimentarios reconocidos normativamente desencadenan reacciones inmunológicas severas, por lo que su manejo y etiquetado son estrictos."
    },
    {
        id: 18,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Cuál es la temperatura interna mínima de cocción recomendada para aves de corral (pollo, pavo) para garantizar la destrucción de Salmonella?",
        opciones: [
            "A) 74 °C",
            "B) 63 °C",
            "C) 68 °C",
            "D) 82 °C"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las aves de corral requieren una temperatura interna mínima de 74°C sostenida para asegurar la inocuidad y la destrucción de bacterias patógenas como Salmonella spp."
    },
    {
        id: 19,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Qué método de descongelación es considerado seguro según las normativas de sanidad alimentaria?",
        opciones: [
            "A) En refrigeración a una temperatura entre 0 °C y 4 °C",
            "B) Sobre la mesa de trabajo a temperatura ambiente",
            "C) Sumergido en agua caliente a 60 °C",
            "D) Directamente expuesto a la luz solar"
        ],
        respuestaCorrecta: 0,
        explicacion: "Descongelar en refrigeración evita que las capas externas del alimento alcancen la zona de peligro de temperatura mientras el interior continúa congelado."
    },
    {
        id: 20,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "En el contexto de la limpieza y desinfección, ¿cuál es la diferencia fundamental entre ambos conceptos?",
        opciones: [
            "A) La limpieza remueve la suciedad visible y grasa; la desinfección reduce los microorganismos a niveles seguros",
            "B) La limpieza elimina virus y bacterias; la desinfección elimina residuos orgánicos",
            "C) La limpieza se realiza con químicos clorados; la desinfección se hace únicamente con agua caliente",
            "D) Son sinónimos aplicados en diferentes turnos de trabajo en la cocina"
        ],
        respuestaCorrecta: 0,
        explicacion: "La limpieza elimina restos físicos y materia orgánica; la desinfección (posterior a la limpieza) utiliza agentes químicos o físicos para destruir los microorganismos patógenos."
    },
    {
        id: 21,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cómo se llama al corte clásico francés que consiste en bastoncitos de aproximadamente 2 mm de lado por 4 a 5 cm de largo?",
        opciones: [
            "A) Juliana",
            "B) Brunoise",
            "C) Batonnet",
            "D) Mirepoix"
        ],
        respuestaCorrecta: 0,
        explicacion: "El corte juliana produce bastoncitos finos de 2 mm x 2 mm x 4-5 cm, siendo la base para otros cortes pequeños o preparaciones específicas."
    },
    {
        id: 22,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cuál es la combinación clásica de vegetales utilizada para la elaboración del mirepoix tradicional francés?",
        opciones: [
            "A) Cebolla, zanahoria y apio",
            "B) Pimiento, cebolla y ajo",
            "C) Puerro, nabo y chirivía",
            "D) Calabaza, elote y chile"
        ],
        respuestaCorrecta: 0,
        explicacion: "El mirepoix tradicional se compone de cebolla, zanahoria y apio (generalmente en proporción 2:1:1), empleado para aromatizar caldos, fondos, salsas y guisos."
    },
    {
        id: 23,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cuál es la salsa madre clásica elaborada a partir de un roux rubio y un fondo blanco (de ternera, ave o pescado)?",
        opciones: [
            "A) Velouté",
            "B) Bechamel",
            "C) Española",
            "D) Holandesa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La velouté es una de las salsas madre de la cocina clásica francesa, caracterizada por ligar un fondo claro con un roux rubio."
    },
    {
        id: 24,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Qué técnica de cocción mixta consiste en dorar el alimento en grasa a fuego vivo para después terminar su cocción en un líquido aromático a temperatura moderada?",
        opciones: [
            "A) Estofado o Braseado",
            "B) Blanqueado",
            "C) Confitado",
            "D) Pochado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El braseado y el estofado combinan calor seco (dorado inicial) y calor húmedo (cocción lenta en líquido con tapa), ideales para cortes de carne fibrosos."
    },
    {
        id: 25,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cómo se denomina al fondo oscuro que se obtiene utilizando huesos tostados al horno, mirepoix, pasta de tomate y agua?",
        opciones: [
            "A) Fondo oscuro",
            "B) Fondo blanco",
            "C) Fumet",
            "D) Glace de viande"
        ],
        respuestaCorrecta: 0,
        explicacion: "El fondo oscuro se elabora tostando previamente los huesos y vegetales para caramelizar los azúcares y proteínas, aportando color ámbar profundo y sabor intenso."
    },
    {
        id: 26,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Qué salsa madre emulsionada caliente se obtiene a base de yemas de huevo y mantequilla clarificada, con un toque de reducción de vinagre o limón?",
        opciones: [
            "A) Holandesa",
            "B) Mayonesa",
            "C) Bearnesa",
            "D) Velouté"
        ],
        respuestaCorrecta: 0,
        explicacion: "La salsa holandesa es una emulsión caliente inestable de mantequilla clarificada en yemas de huevo, estabilizada por el batido y la temperatura controlada."
    },
    {
        id: 27,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cuál es el corte cúbico clásico de aproximadamente 2 mm de lado, derivado directamente del corte juliana?",
        opciones: [
            "A) Brunoise",
            "B) Mirepoix",
            "C) Jardinière",
            "D) Paysanne"
        ],
        respuestaCorrecta: 0,
        explicacion: "El brunoise se obtiene cortando finamente los bastones de juliana transversalmente, resultando en diminutos cubos de 2 mm."
    },
    {
        id: 28,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Qué técnica culinaria consiste en cocinar un alimento sumergiéndolo en grasa a baja temperatura durante un tiempo prolongado?",
        opciones: [
            "A) Confitar",
            "B) Freír",
            "C) Escalfar",
            "D) Saltear"
        ],
        respuestaCorrecta: 0,
        explicacion: "El confitado (tradicionalmente en grasa animal como pato o cerdo, o aceite de oliva) cocina el alimento de forma tierna y uniforme a temperaturas que oscilan entre 70°C y 90°C."
    },
    {
        id: 29,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cuál es la salsa madre elaborada mediante un roux oscuro y un fondo oscuro de ternera o res, aromatizada con verduras y especias?",
        opciones: [
            "A) Española",
            "B) Tomate",
            "C) Velouté",
            "D) Bechamel"
        ],
        respuestaCorrecta: 0,
        explicacion: "La salsa española es una de las salsas base de Auguste Escoffier, caracterizada por el uso de roux oscuro y un fondo rico en colágeno."
    },
    {
        id: 30,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Qué término culinario se refiere a sumergir un alimento en agua hirviendo por un tiempo muy breve y luego enfriarlo rápidamente en agua con hielo (choque térmico)?",
        opciones: [
            "A) Blanquear o Escaldar",
            "B) Desglasar",
            "C) Reducir",
            "D) Clarificar"
        ],
        respuestaCorrecta: 0,
        explicacion: "El blanqueado fija el color verde brillante de los vegetales, ablanda ligeramente sus fibras y detiene la actividad enzimática antes de su almacenamiento o posterior cocción."
    },
    {
        id: 31,
        area: "Panadería y Repostería",
        pregunta: "¿Qué proteína presente en la harina de trigo es responsable de conferir elasticidad y tenacidad a la masa al hidratarse y amasarse?",
        opciones: [
            "A) Gluten (formado por gliadina y glutenina)",
            "B) Caseína y lactoalbúmina",
            "C) Albúmina y ovoalbúmina",
            "D) Miosina y actina"
        ],
        respuestaCorrecta: 0,
        explicacion: "La gliadina y la glutenina, al entrar en contacto con el agua y recibir energía mecánica de amasado, se combinan para formar el complejo proteico del gluten."
    },
    {
        id: 32,
        area: "Panadería y Repostería",
        pregunta: "¿Cuál es el gas producido por la levadura (Saccharomyces cerevisiae) durante la fermentación panaria que permite el leudado de la masa?",
        opciones: [
            "A) Dióxido de carbono (CO2)",
            "B) Monóxido de carbono (CO)",
            "C) Metano (CH4)",
            "D) Nitrógeno (N2)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Durante la fermentación alcohólica, las levaduras metabolizan los azúcares de la harina produciendo alcohol etílico y dióxido de carbono, el cual queda atrapado en la red de gluten."
    },
    {
        id: 33,
        area: "Panadería y Repostería",
        pregunta: "¿Qué técnica de hojaldre consiste en envolver la mantequilla dentro de un bloque de masa (detrempe) para luego realizar dobleces sucesivos (vueltas simples o dobles)?",
        opciones: [
            "A) Laminado",
            "B) Sablage",
            "C) Cremado",
            "D) Emulsión en frío"
        ],
        respuestaCorrecta: 0,
        explicacion: "El laminado crea capas alternas de masa y materia grasa; al hornearse, el agua de la mantequilla se evapora generando presión y separando las capas para dar la textura crujiente característica."
    },
    {
        id: 34,
        area: "Panadería y Repostería",
        pregunta: "¿Cuál es la función principal de la sal en la formulación de panadería?",
        opciones: [
            "A) Reforzar la red de gluten, regular la fermentación y aportar sabor",
            "B) Acelerar drásticamente la reproducción de la levadura",
            "C) Servir como el único agente leudante químico",
            "D) Aportar humedad excesiva a la miga"
        ],
        respuestaCorrecta: 0,
        explicacion: "Además de realzar el sabor, la sal fortalece las ligazones proteicas del gluten y actúa como un regulador natural que modera la velocidad de fermentación de la levadura."
    },
    {
        id: 35,
        area: "Panadería y Repostería",
        pregunta: "¿Cómo se llama la crema pastelera clásica que se espesa principalmente mediante el uso de almidón y yemas de huevo sometidas a ebullición?",
        opciones: [
            "A) Crème pâtissière",
            "B) Crème anglaise",
            "C) Crème chantilly",
            "D) Ganache"
        ],
        respuestaCorrecta: 0,
        explicacion: "La crema pastelera requiere hervir la mezcla para gelatinizar completamente el almidón, inactivando enzimas que degradarían la estructura y logrando una consistencia firme y estable."
    },
    {
        id: 36,
        area: "Panadería y Repostería",
        pregunta: "¿Qué tipo de masa quebrada (pâte) se elabora integrando primero la grasa fría con la harina en forma de arena (sablage) antes de añadir los líquidos?",
        opciones: [
            "A) Pâte sablée o Pâte brisée",
            "B) Pâte à choux",
            "C) Pâte feuilletée",
            "D) Brioche"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método de arenado (sablage) impermeabiliza parcialmente las partículas de harina con la grasa, evitando la formación excesiva de gluten y logrando una textura crujiente y friable."
    },
    {
        id: 37,
        area: "Panadería y Repostería",
        pregunta: "¿Cuál es el agente leudante químico comúnmente conocido como polvo para hornear (baking powder), el cual requiere una sal ácida y un agente alcalino?",
        opciones: [
            "A) Bicarbonato de sodio combinado con ácidos (como fosfato cálcico o tartrato)",
            "B) Levadura de cerveza deshidratada",
            "C) Bitartrato de potasio puro",
            "D) Carbonato de amonio sin aditivos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El polvo para hornear contiene un álcali (bicarbonato de sodio) y uno o más ácidos secos que reaccionan al entrar en contacto con la humedad y el calor, liberando dióxido de carbono."
    },
    {
        id: 38,
        area: "Panadería y Repostería",
        pregunta: "¿Qué emulsión de chocolate y crema de leche (nata) se utiliza ampliamente en repostería para rellenos y coberturas?",
        opciones: [
            "A) Ganache",
            "B) Caramelo salado",
            "C) Merengue italiano",
            "D) Crema de mantequilla"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ganache es una emulsión de tipo agua en aceite (o aceite en agua según proporciones) donde la grasa de la nata y la manteca de cacao del chocolate se funden homogéneamente."
    },
    {
        id: 39,
        area: "Panadería y Repostería",
        pregunta: "¿Qué tipo de merengue se elabora vertiendo almíbar a punto de bola blanda (118 °C - 121 °C) sobre claras de huevo montadas a punto de nieve?",
        opciones: [
            "A) Merengue italiano",
            "B) Merengue francés (básico)",
            "C) Merengue suizo",
            "D) Merengue cocido al horno"
        ],
        respuestaCorrecta: 0,
        explicacion: "El merengue italiano es el más estable de los merengues debido a que el almíbar caliente pasteuriza parcialmente las claras y cocina las proteínas, otorgándole firmeza duradera."
    },
    {
        id: 40,
        area: "Panadería y Repostería",
        pregunta: "¿Cuál es la característica principal de la masa choux (pâte à choux) antes de ser horneada?",
        opciones: [
            "A) Se cuece previamente en una cacerola (panade) antes de incorporar los huevos uno a uno",
            "B) Requiere una fermentación larga de 12 horas en frío",
            "C) Se lamina con mantequilla en múltiples vueltas sencillas",
            "D) Se elabora sin ningún tipo de grasa ni líquido caliente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La pasta choux se elabora escaldando la harina con agua/leche y mantequilla (panade), incorporando posteriormente huevos que aportarán la humedad necesaria para crear vapor y expandir el producto en el horno."
    },
    {
        id: 41,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué término enológico describe el proceso de transformación de los azúcares delcohól en alcohol etílico y dióxido de carbono mediante la acción de levaduras?",
        opciones: [
            "A) Fermentación alcohólica",
            "B) Crianza en barrica",
            "C) Fermentación maloláctica",
            "D) Clarificación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fermentación alcohólica es la piedra angular de la vinificación, realizada por levaduras naturales (del género *Saccharomyces*) presentes en la piel de la uva o añadidas."
    },
    {
        id: 42,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Cuál es el proceso biológico secundario en la elaboración del vino donde el ácido málico se convierte en ácido láctico gracias a bacterias lácticas?",
        opciones: [
            "A) Fermentación maloláctica",
            "B) Chaptalización",
            "C) Maceración carbónica",
            "D) Filtración amicrobiana"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fermentación maloláctica suaviza la acidez punzante del vino (transformando ácido málico en láctico, más suave) y aporta complejidad aromática, común en tintos y algunos blancos."
    },
    {
        id: 43,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "En el maridaje gastronómico, ¿qué principio general se aplica al combinar un vino tinto con alto contenido de taninos con un corte de carne roja grasoso (como un ribeye)?",
        opciones: [
            "A) La grasa de la carne suaviza la astringencia de los taninos del vino, generando equilibrio",
            "B) El tanino destruye las proteínas de la carne provocando acidez extrema",
            "C) La carne roja anula por completo cualquier percepción alcohólica",
            "D) Se debe evitar dicha combinación debido a incompatibilidad química"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los taninos se unen a las proteínas y grasas de la carne, reduciendo su sensación astringente en boca y permitiendo que ambos elementos destaquen positivamente."
    },
    {
        id: 44,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué categoría de vino espumoso se elabora mediante el método tradicional o champenoise (segunda fermentación en botella)?",
        opciones: [
            "A) Champagne, Cava y Franciacorta",
            "B) Prosecco y Asti",
            "C) Vinos espumosos por método Charmat (en grandes depósitos)",
            "D) Sidra natural de manzana"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método tradicional (Champenoise) realiza la segunda fermentación dentro de cada botella individual, aportando finura de burbuja y notas complejas de crianza sobre lías."
    },
    {
        id: 45,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué componente de la uva aporta principalmente los taninos, el color (en tintos) y los compuestos aromáticos característicos?",
        opciones: [
            "A) El hollejo (piel)",
            "B) La pulpa",
            "C) Las semillas o pepitas",
            "D) El raspón o escobajo únicamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "El hollejo o piel de la uva contiene antocianos (responsables del color rojo/morado), taninos y polifenoles aromáticos esenciales para el perfil del vino."
    },
    {
        id: 46,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿A qué temperatura de servicio se recomienda generalmente un vino tinto estructurado y con crianza (crianza, reserva)?",
        opciones: [
            "A) Entre 16 °C y 18 °C",
            "B) Entre 6 °C y 8 °C",
            "C) Entre 10 °C y 12 °C",
            "D) A temperatura ambiente cálida (24 °C)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Servir un vino tinto estructurado entre 16°C y 18°C permite apreciar sus aromas complejos sin que el alcohol se volatilice en exceso ni enmascare la fruta."
    },
    {
        id: 47,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué denominación recibe el vino fortificado o encabezado originario de la región de Andalucía, España, elaborado con uva Palomino?",
        opciones: [
            "A) Jerez o Sherry",
            "B) Oporto",
            "C) Madeira",
            "D) Marsala"
        ],
        respuestaCorrecta: 0,
        explicacion: "El vino de Jerez (Sherry) es un vino generoso o fortificado sometido a crianza biológica bajo velo de flor (fino/manzanilla) o crianza oxidativa (oloroso)."
    },
    {
        id: 48,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "En una cata organoléptica de vino, ¿qué fase evalúa la limpidez, intensidad de color, tonalidad, lágrimas y burbujas?",
        opciones: [
            "A) Fase visual",
            "B) Fase olfativa",
            "C) Fase gustativa",
            "D) Fase táctil"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fase visual de la cata analiza la apariencia externa del vino, aportando indicios sobre su edad, evolución, tipo de uva y correcta elaboración."
    },
    {
        id: 49,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Cuál es la variedad de uva tinta más emblemática de la región de Burdeos, Francia, y ampliamente cultivada a nivel mundial?",
        opciones: [
            "A) Cabernet Sauvignon",
            "B) Tempranillo",
            "C) Sangiovese",
            "D) Nebbiolo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cabernet Sauvignon es la uva tinta bordelesa por excelencia, caracterizada por su alto contenido tánico, estructura robusta y notas a frutos negros y pimiento verde."
    },
    {
        id: 50,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué significa el término 'terroir' en el contexto vitivinícola?",
        opciones: [
            "A) El conjunto de factores ambientales (clima, suelo, topografía) y factores humanos que influyen en las características de la uva",
            "B) El tipo de barrica de roble francés utilizada para la fermentación",
            "C) El porcentaje exacto de alcohol residual tras la fermentación maloláctica",
            "D) La técnica de poda en invierno realizada en los viñedos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El terroir engloba la interacción única entre el suelo, el microclima, la altitud, la orientación y la tradición humana, imprimiendo una identidad irrepetible al vino."
    },
    {
        id: 51,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué proceso químico tradicional prehispánico consiste en cocer el maíz con agua y cal viva (hidróxido de calcio) para mejorar su valor nutricional y digestibilidad?",
        opciones: [
            "A) Nixtamalización",
            "B) Fermentación alcohólica",
            "C) Tostado en comal",
            "D) Escaldado alcalino"
        ],
        respuestaCorrecta: 0,
        explicacion: "La nixtamalización libera niacina (vitamina B3), facilita la absorción de aminoácidos esenciales como el triptófano y permite que el maíz forme masa cohesiva para las tortillas."
    },
    {
        id: 52,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Cuáles son los tres cultivos principales que conforman el sistema agrícola mesoamericano conocido como 'Milpa'?",
        opciones: [
            "A) Maíz, frijol y calabaza",
            "B) Chile, tomate y aguacate",
            "C) Vainilla, cacao y maguey",
            "D) Chía, amarantos y quelites"
        ],
        respuestaCorrecta: 0,
        explicacion: "La milpa es un sistema agrícola simbiótico donde el maíz sirve de tutor al frijol (que fija nitrógeno), y la calabaza cubre el suelo con sus hojas amplias, conservando la humedad."
    },
    {
        id: 53,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué ingrediente base caracteriza al tradicional Mole Poblano por aportar su consistencia y berfungsi como espesante natural además de las tortillas o el pan?",
        opciones: [
            "A) Chocolate de metate y chiles secos con diversas semillas y frutos secos",
            "B) Puré de tomate verde crudo con cilantro",
            "C) Frijol negro licuado con manteca de cerdo",
            "D) Pepián de pepita de calabaza cruda"
        ],
        respuestaCorrecta: 0,
        explicacion: "El mole poblano es un complejo complejo guiso barroco que integra chiles secos, especias, chocolate, ajonjolí, almendras, pasas y tortillas quemadas o pan para su espesamiento."
    },
    {
        id: 54,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué bebida fermentada prehispánica se obtiene a partir del aguamiel extraído del maguey (Agave salmiana u otras especies)?",
        opciones: [
            "A) Pulque",
            "B) Mezcal",
            "C) Tequila",
            "D) Bacanora"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pulque es una bebida viscosa y ligeramente alcohólica producto de la fermentación bacteriana y levadurina del aguamiel, de profunda raigambre ritual e histórica en México."
    },
    {
        id: 55,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué región de México es la denominación de origen protegida para la elaboración del destilado de agave llamado Tequila?",
        opciones: [
            "A) Jalisco y municipios específicos de Guanajuato, Michoacán, Nayarit y Tamaulipas",
            "B) Oaxaca, Guerrero y Durango únicamente",
            "C) Sonora y Chihuahua",
            "D) Puebla y Tlaxcala"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Denominación de Origen Tequila (DOT) ampara exclusivamente al destilado elaborado con agave Azul Tequilana Weber en zonas geográficas autorizadas por ley."
    },
    {
        id: 56,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Cómo se denomina al conjunto de plantas silvestres comestibles en México, cuyo consumo hereda la tradición mesoamericana?",
        opciones: [
            "A) Quelites",
            "B) Verdolagas",
            "C) Raíces tuberosas",
            "D) Xחנוas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los quelites (del náhuatl *quilitl*) engloban diversas hojas, brotes y hierbas tiernas silvestres que se consumen desde la época prehispánica por su alto valor nutricional."
    },
    {
        id: 57,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Cuál es el proceso culinario característico para la elaboración de la cochinita pibil en la península de Yucatán?",
        opciones: [
            "A) Cocción bajo tierra (pib) envuelta en hojas de plátano con recado rojo (axiote)",
            "B) Frito profundo en manteca de cerdo en cazo de cobre",
            "C) Hervido prolongado con hierbas de olor en olla de barro",
            "D) Asado directo a las brasas de carbón de encino"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pib es un horno subterráneo tradicional maya donde la carne marinada con axiote y jugo de naranja agria se cuece lentamente durante horas aportando un sabor ahumado único."
    },
    {
        id: 58,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué ingrediente principal otorga el color y perfil de sabor característico al Mole Negro Oaxaqueño?",
        opciones: [
            "A) Chiles secos quemados (chilhuacle negro, mulato, pasilla) y totomoxtle",
            "B) Semillas de calabaza tostadas y tomatillo verde",
            "C) Cacahuates fritos con ajonjolí y canela",
            "D) Piel de cerdo tostada con chiles costeños"
        ],
        respuestaCorrecta: 0,
        explicacion: "El característico tono oscuro y sabor ahumado del mole negro oaxaqueño proviene del tostado riguroso de chiles nativos (como el chilhuacle) y hojas de maíz secas (totomoxtle)."
    },
    {
        id: 59,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué bebida tradicional mexicana se elabora a base de maíz fermentado o cocido, cacao, agua y especias, típica del estado de Chiapas y Tabasco?",
        opciones: [
            "A) Pozol",
            "B) Tejate",
            "C) Tascalate",
            "D) Atole"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pozol es una bebida prehispánica a base de maíz nixtamalizado molido con cacao, fermentado parcialmente por mohos beneficiosos que le otorgan su textura y propiedades nutritivas."
    },
    {
        id: 60,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué distinción internacional otorgó la UNESCO a la Cocina Mexicana en el año 2010?",
        opciones: [
            "A) Patrimonio Cultural Inmaterial de la Humanidad",
            "B) Patrimonio Natural y Geológico Mundial",
            "C) Reserva de la Biosfera Culinaria",
            "D) Tesoro Arquitectónico y Gastronómico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La UNESCO inscribió la cocina tradicional mexicana en la lista del Patrimonio Cultural Inmaterial, reconociendo su modelo cultural comprehensivo basado en la agricultura, rituales y técnicas ancestrales."
    },
    {
        id: 61,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué técnica de la gastronomía molecular desarrollada por chefs como Ferran Adrià permite encapsular un líquido con una membrana delgada de gel mediante la reacción de alginato de sodio y cloruro de calcio?",
        opciones: [
            "A) Eserificación (Esferificación)",
            "B) Liofilización",
            "C) Gelificación térmica",
            "D) Espumificación con sifón"
        ],
        respuestaCorrecta: 0,
        explicacion: "La esferificación se basa en la gelificación controlada del alginato al entrar en contacto con iones de calcio, creando esferas líquidas que estallan en el paladar."
    },
    {
        id: 62,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué método de conservación y transformación de alimentos elimina completamente el agua mediante la sublimación del hielo al vacío?",
        opciones: [
            "A) Liofilización",
            "B) Deshidratación por calor convectivo",
            "C) Congelación criogénica",
            "D) Osmosis inversa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La liofilización congela el alimento y luego reduce la presión circundante, permitiendo que el agua congelada pase directamente de sólido a gas (sublimación), preservando estructura y nutrientes."
    },
    {
        id: 63,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Cuál es el gas comúnmente utilizado en los sifones de cocina para elaborar espumas ligeras (esumas frías o calientes) a partir de purés o emulsiones?",
        opciones: [
            "A) Óxido nitroso (N2O)",
            "B) Dióxido de carbono (CO2)",
            "C) Helio comprimido",
            "D) Oxígeno puro"
        ],
        respuestaCorrecta: 0,
        explicacion: "El óxido nitroso (N2O) es altamente soluble en grasas y líquidos bajo presión, lo que permite crear texturas aireadas estables al accionar el sifón."
    },
    {
        id: 64,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué hidrocoloide derivado de algas rojas se utiliza en la cocina moderna para elaborar geles firmes que soportan temperaturas de hasta 85 °C sin fundirse?",
        opciones: [
            "A) Agar-agar",
            "B) Goma xntana",
            "C) Lecitina de soya",
            "D) Carragenina kappa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El agar-agar forma geles termosensibles firmes que gelifican a temperatura ambiente y pueden calentarse sin perder su estructura de gel."
    },
    {
        id: 65,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué técnica culinaria de cocción al vacío (sous-vide) requiere el sellado hermético del alimento en bolsas plásticas especiales y su posterior cocción en un baño María con control termostático preciso?",
        opciones: [
            "A) Cocción al vacío (Sous-vide)",
            "B) Cocción en papillote",
            "C) Cocción por inducción magnética",
            "D) Cocción en horno de convección forzada"
        ],
        respuestaCorrecta: 0,
        explicacion: "El método *sous-vide* cocina los alimentos a temperaturas exactas y bajas durante periodos prolongados, reteniendo jugos, nutrientes y logrando texturas uniformes."
    },
    {
        id: 66,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué aditivo natural derivado de la soya actúa como un potente agente emulsionante para crear aires y emulsiones ligeras con líquido y batidora de inmersión?",
        opciones: [
            "A) Lecitina de soya",
            "B) Metilcelulosa",
            "C) Goma gellan",
            "D) Gluconolactato de calcio"
        ],
        respuestaCorrecta: 0,
        explicacion: "La lecitina de soya contiene fosfolípidos que estabilizan burbujas de aire en líquidos, permitiendo obtener 'aires' estables con sabor intenso."
    },
    {
        id: 67,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Cuál es el principio físico utilizado en las placas de inducción para calentar recipientes culinarios?",
        opciones: [
            "A) Generación de un campo magnético alternante que induce corrientes parásitas (Eddy) en el fondo ferromagnético del recipiente",
            "B) Emisión de radiación infrarroja directa sobre la superficie de vidrio cerámico",
            "C) Resistencia eléctrica por efecto Joule en espirales de nicromo",
            "D) Combustión catalítica de gas natural bajo una cubierta metálica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La inducción calienta directamente el menaje mediante campos electromagnéticos, sin calentar la placa vitrocerámica circundante, maximizando la eficiencia energética."
    },
    {
        id: 68,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué hidrocoloide es ideal para suspender partículas sólidas (como hierbas finas o especias) en un líquido sin modificar drásticamente su viscosidad ni aportar textura gelatinosa pesada?",
        opciones: [
            "A) Goma xntana (Xanthan gum)",
            "B) Gelatina neutra de origen porcino",
            "C) Pectina amidada de frutas",
            "D) Almidón de maíz modificado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La goma xntana posee un comportamiento pseudoplástico que confiere una tixotropía excelente, permitiendo mantener partículas en suspensión sin espesar en exceso."
    },
    {
        id: 69,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué técnica de congelación ultrarrápida utiliza nitrógeno líquido a una temperatura aproximada de -196 °C para elaborar helados instantáneos al momento?",
        opciones: [
            "A) Congelación criogénica",
            "B) Abatimiento de temperatura",
            "C) Congelación estática por aire forzado",
            "D) Vitrificación en glicerol"
        ],
        respuestaCorrecta: 0,
        explicacion: "El nitrógeno líquido congela los alimentos de manera casi instantánea, evitando la formación de cristales de hielo grandes y logrando texturas extremadamente suaves y cremosas."
    },
    {
        id: 70,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Cómo se le llama al proceso por el cual las proteínas de la carne y los azúcares reductores se combinan al aplicar calor seco (generalmente superior a 140 °C), generando aromas y un tostado característico?",
        opciones: [
            "A) Reacción de Maillard",
            "B) Caramelización",
            "C) Saponificación",
            "D) Denaturalización enzimática"
        ],
        respuestaCorrecta: 0,
        explicacion: "La reacción de Maillard es una compleja red de reacciones químicas entre aminoácidos y azúcares reductores que dota a los alimentos cocinados de su color dorado y complejos perfiles aromáticos."
    },
    {
        id: 71,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Cuál es el valor energético promedio aportado por un gramo de carbohidratos, proteínas y lípidos, respectivamente, según el sistema internacional de atwater?",
        opciones: [
            "A) Carbohidratos: 4 kcal, Proteínas: 4 kcal, Lípidos: 9 kcal",
            "B) Carbohidratos: 9 kcal, Proteínas: 4 kcal, Lípidos: 4 kcal",
            "C) Carbohidratos: 4 kcal, Proteínas: 9 kcal, Lípidos: 7 kcal",
            "D) Carbohidratos: 7 kcal, Proteínas: 7 kcal, Lípidos: 7 kcal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los factores de Atwater establecen que los carbohidratos y las proteínas proporcionan 4 kilocalorías por gramo, mientras que los lípidos aportan 9 kilocalorías por gramo debido a su mayor densidad energética."
    },
    {
        id: 72,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué tipo de ácidos grasos se caracterizan por poseer uno o más dobles enlaces en su cadena carbonada y encontrarse generalmente en estado líquido a temperatura ambiente (como en aceites vegetales)?",
        opciones: [
            "A) Ácidos grasos insaturados (monoinsaturados y poliinsaturados)",
            "B) Ácidos grasos saturados",
            "C) Ácidos grasos trans hidrogenados artificialmente",
            "D) Ceras de cadena muy larga"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los ácidos grasos insaturados presentan dobles enlaces que impiden el empaquetamiento compacto de las moléculas, manteniéndolas líquidas a temperatura ambiente."
    },
    {
        id: 73,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué vitamina liposoluble cumple un papel fundamental en la coagulación sanguínea y puede encontrarse en vegetales de hoja verde oscura como espinacas y acelgas?",
        opciones: [
            "A) Vitamina K",
            "B) Vitamina C",
            "C) Vitamina B12",
            "D) Vitamina D"
        ],
        respuestaCorrecta: 0,
        explicacion: "La vitamina K es esencial para la síntesis de factores de coagulación en el hígado y abunda en verduras crucíferas y de hoja verde."
    },
    {
        id: 74,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué son los aminoácidos esenciales en la nutrición humana?",
        opciones: [
            "A) Aquellos que el organismo no puede sintetizar por sí mismo y deben obtenerse obligatoriamente a través de la dieta",
            "B) Aquellos que se producen exclusivamente mediante la fermentación láctica",
            "C) Las grasas saturadas necesarias para la formación de hormonas esteroideas",
            "D) Los azúcares simples que forman parte exclusiva de las frutas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Existen aminoácidos esenciales que el cuerpo humano no sintetiza internamente, por lo que una dieta completa debe incluir proteínas que los aporten en conjunto."
    },
    {
        id: 75,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Cuál es la función principal de la fibra dietética insoluble en el tracto digestivo humano?",
        opciones: [
            "A) Aumentar el volumen fecal y acelerar el tránsito intestinal",
            "B) Reducir directamente los niveles de colesterol en sangre mediante absorción hepática",
            "C) Aportar 4 kilocalorías por gramo como fuente primaria de energía cerebral",
            "D) Actuar como el principal sustrato para la síntesis de insulina"
        ],
        respuestaCorrecta: 0,
        explicacion: "La fibra insoluble no es digerida por las enzimas humanas; absorbe agua y da volumen a las heces, previniendo el estreñimiento y favoreciendo la salud intestinal."
    },
    {
        id: 76,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué fenómeno culinario y bioquímico provoca el oscurecimiento enzimático en frutas frescas cortadas (como manzanas o peras) al exponerse al oxígeno?",
        opciones: [
            "A) Oxidación de compuestos fenólicos mediada por la enzima polifenoloxidasa",
            "B) Desnaturalización térmica de las proteínas del fruto",
            "C) Fermentación alcohólica espontánea por levaduras silvestres",
            "D) Saponificación de los ácidos orgánicos libres"
        ],
        respuestaCorrecta: 0,
        explicacion: "La enzima polifenoloxidasa oxida los polifenoles del fruto en presencia de oxígeno atmosférico, transformándolos en quininas que polimerizan a pigmentos oscuros (melaninas)."
    },
    {
        id: 77,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Cuál es el mineral esencial para la síntesis de hemoglobina y el transporte de oxígeno en la sangre, presente en carnes rojas y leguminosas?",
        opciones: [
            "A) Hierro",
            "B) Calcio",
            "C) Potasio",
            "D) Magnesio"
        ],
        respuestaCorrecta: 0,
        explicacion: "El hierro es el componente central del grupo hemo en la hemoglobina y la mioglobina, indispensable para transportar oxígeno desde los pulmones a los tejidos."
    },
    {
        id: 78,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué categoría de carbohidratos incluye a los monosacáridos y disacáridos, caracterizados por un sabor dulce y rápida absorción intestinal?",
        opciones: [
            "A) Azúcares simples (Carbohidratos simples)",
            "B) Polisacáridos complejos (Almidones)",
            "C) Fibras dietéticas insolubles",
            "D) Alcoholes de azúcar (Polioles)"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los azúcares simples (como glucosa, fructosa y sacarosa) se absorben rápidamente en el tracto gastrointestinal, elevando los niveles de glucemia en sangre de forma inmediata."
    },
    {
        id: 79,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué proceso industrial y tecnológico se utiliza para prolongar la vida de anaquel de la leche mediante la aplicación de calor controlado a alta temperatura por pocos segundos?",
        opciones: [
            "A) Pasteurización o UHT (Ultra High Temperature)",
            "B) Homogeneización por presión",
            "C) Clarificación por centrifugación",
            "D) Deshidratación por atomización"
        ],
        respuestaCorrecta: 0,
        explicacion: "La pasteurización y los tratamientos UHT destruyen los microorganismos patógenos y alterantes de la leche sin alterar drásticamente su valor nutricional ni sus propiedades organolépticas."
    },
    {
        id: 80,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué función cumple el agua libre ($a_w$) en la conservación y alteración microbiológica de los alimentos?",
        opciones: [
            "A) Mide la disponibilidad de agua para el crecimiento microbiano y reacciones químicas de deterioro",
            "B) Representa el porcentaje total de peso húmedo del alimento",
            "C) Indica la cantidad de sales minerales disueltas en el medio acuoso",
            "D) Es el punto exacto de ebullición del producto a nivel del mar"
        ],
        respuestaCorrecta: 0,
        explicacion: "La actividad de agua ($a_w$) es un parámetro crítico; valores bajos de $a_w$ (por debajo de 0.85) inhiben el crecimiento de la mayoría de bacterias patógenas."
    },
    {
        id: 81,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cuál es la regla general y tradicional para el servicio de platos y bebidas a los comensales en una mesa de restaurante?",
        opciones: [
            "A) Servir y retirar los alimentos por la derecha del comensal utilizando la mano derecha, y las bebidas por la derecha",
            "B) Servir siempre por la izquierda y retirar por la derecha",
            "C) Servir por la izquierda y retirar por la izquierda",
            "D) Indistinto según la comodidad del mesero"
        ],
        respuestaCorrecta: 0,
        explicacion: "El protocolo clásico de servicio de restaurante establece que los alimentos se sirven y retiran por el lado derecho del comensal, al igual que las bebidas, manteniendo la ergonomía."
    },
    {
        id: 82,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cómo se denomina al servicio en el cual los alimentos son presentados en fuentes por el mesero al comensal, quien se sirve su propia porción utilizando pinzas?",
        opciones: [
            "A) Servicio a la inglesa",
            "B) Servicio a la francesa",
            "C) Servicio emplatado (Americano)",
            "D) Servicio ruso (al gueridon)"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el servicio a la inglesa, el mesero acerca la fuente por el lado izquierdo del cliente y este se sirve directamente utilizando la cuchara y tenedor de servicio."
    },
    {
        id: 83,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Qué vaso o copa es el adecuado para servir un vino espumoso tipo Champagne para preservar su efervescencia y observar el rosario de burbujas?",
        opciones: [
            "A) Copa flauta",
            "B) Copa balón",
            "C) Vaso old fashioned",
            "D) Copa burdeos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La copa flauta, con su diseño alto y estrecho, minimiza la superficie de contacto con el aire, permitiendo que las burbujas asciendan ordenadamente y concentrando los aromas."
    },
    {
        id: 84,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Qué técnica de coctelería se utiliza para mezclar ingredientes que se integran fácilmente (como espirituosos y licores sin pulpa ni lácteos), agitándolos con hielo en una coctelera boston o europea?",
        opciones: [
            "A) Stir (Agitar o refrescar con vaso mezclador) o Shake (Agitar en coctelera)",
            "B) Licuado a alta velocidad con hielo frappé",
            "C) Infusión en frío al vacío",
            "D) Maceración directa en copa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La técnica de *shake* (agitado) airea, enfría y diluye adecuadamente los cócteles que contienen jugos, cítricos o cremas, mientras que el *stir* se reserva para bebidas compuestas únicamente por licores."
    },
    {
        id: 85,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cómo se denomina al procedimiento de servicio de vino donde el sommelier o mesero sirve una pequeña cantidad al anfitrión para su aprobación antes de servir a los demás invitados?",
        opciones: [
            "A) Cata de cortesía o prueba del vino",
            "B) Decantación forzada",
            "C) Descorche protocolario",
            "D) Servicio de sala en gueridon"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba del vino permite al cliente verificar que el producto no presenta defectos (como el defecto de corcho por tricloroanisol) antes de proceder con el servicio general."
    },
    {
        id: 86,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cuál es el objetivo principal de utilizar un decantador al servir un vino tinto de larga guarda añejado en botella?",
        opciones: [
            "A) Separar los sedimentos formados durante la crianza y oxigenar el vino para liberar sus aromas",
            "B) Enfriar rápidamente el vino a temperatura de congelación",
            "C) Eliminar por completo el contenido alcohólico excesivo",
            "D) Aumentar la concentración de taninos astringentes"
        ],
        respuestaCorrecta: 0,
        explicacion: "La decantación separa los posos o sedimentos sólidos depositados en los vinos viejos y permite una oxigenación controlada para abrir su abanico aromático."
    },
    {
        id: 87,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Qué tipo de servicio de restaurante se caracteriza por ser rápido, donde los alimentos se sirven ya emplatados desde la cocina directamente frente al comensal?",
        opciones: [
            "A) Servicio americano o emplatado",
            "B) Servicio ruso",
            "C) Servicio estilo buffet",
            "D) Servicio gueridon"
        ],
        respuestaCorrecta: 0,
        explicacion: "El servicio americano (emplatado) es el estándar en la mayoría de restaurantes modernos debido a su eficiencia, control de porciones y presentación estética diseñada en cocina."
    },
    {
        id: 88,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Qué instrumento de bar se utiliza para retener los hielos y pulpas al verter un cóctel desde el vaso mezclador o coctelera hacia la copa de servicio?",
        opciones: [
            "A) Colador de gusano (Hawthorne strainer)",
            "B) Cuchara de bar (Barmans spoon)",
            "C) Machete o cuchillo de oficio",
            "D) Jigger o medidor"
        ],
        respuestaCorrecta: 0,
        explicacion: "El colador Hawthorne (o de gusano), equipado con un resorte metálico, se ajusta al diámetro de la coctelera para filtrar eficazmente el hielo y sólidos no deseados."
    },
    {
        id: 89,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cuál es la cristalería correcta para servir un cóctel clásico tipo Martini (ginebra y vermut seco, sin hielo)?",
        opciones: [
            "A) Copa Martini o Coktel (Copa Cónica)",
            "B) Vaso Highball",
            "C) Copa Burgundy",
            "D) Vaso Shot"
        ],
        respuestaCorrecta: 0,
        explicacion: "La copa de cóctel cónica (Martini) mantiene el líquido alejado de la mano del bebedor gracias a su tallo largo, evitando que el calor corporal caliente la bebida."
    },
    {
        id: 90,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cómo se llama el proceso de limpiar, ordenar y reabastecer las estaciones de servicio en el comedor y bar antes de iniciar el turno de operaciones?",
        opciones: [
            "A) Mise en place de sala",
            "B) Inventario rotativo",
            "C) Arqueo de caja",
            "D) Briefing operativo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La *mise en place* de sala asegura que cubiertos, cristalería, mantelería y condimentos estén listos y pulidos para garantizar la fluidez durante el servicio."
    },
    {
        id: 91,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Cuáles son los ingredientes fundamentales que conforman la base de la cocina tradicional japonesa (Washoku), destacando por su enfoque en el dashi?",
        opciones: [
            "A) Alga kombu, katsuobushi (atún bonito seco), salsa de soya, miso y arroz",
            "B) Aceite de oliva, ajo, jitomate y albahaca fresca",
            "C) Chile habanero, achiote, frijol negro y maíz",
            "D) Curry en polvo, leche de coco, jengibre y cilantro"
        ],
        respuestaCorrecta: 0,
        explicacion: "El dashi, caldo base de la cocina japonesa elaborado con kombu y katsuobushi, aporta el quinto sabor (umami) que define la identidad culinaria del Washoku."
    },
    {
        id: 92,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué salsa madre emulsionada fría o templada de la cocina francesa utiliza yemas de huevo y aceite vegetal, siendo la base de múltiples derivadas como la salsa tártara?",
        opciones: [
            "A) Mayonesa",
            "B) Holandesa",
            "C) Vinaigrette",
            "D) Velouté"
        ],
        respuestaCorrecta: 0,
        explicacion: "La mayonesa es una emulsión estable de aceite en agua donde las lecitinas de la yema de huevo actúan como agente emulsificante natural."
    },
    {
        id: 93,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué técnica de cocina italiana consiste en cocinar arroz arborio o carnaroli añadiendo caldo caliente poco a poco mientras se agita constantemente para liberar almidón?",
        opciones: [
            "A) Risottatura (Risotto)",
            "B) Pasta al dente",
            "C) Sofrritto clásico",
            "D) Cocción en papillote"
        ],
        respuestaCorrecta: 0,
        explicacion: "El risotto requiere agitación constante y adición gradual de caldo para que el almidón (amilopectina) del grano cree una textura cremosa característica manteniendo el centro firme (*al dente*)."
    },
    {
        id: 94,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Cuál es el ingrediente proteico principal y el método de cocción del clásico plato peruano llamado Ceviche tradicional?",
        opciones: [
            "A) Pescado blanco fresco cortado en cubos, marinado en jugo de limón sutil crudo con cebolla morada y ají",
            "B) Mariscos mixtos cocidos en agua hirviendo y sal con vinagre blanco",
            "C) Carne de res cruda finamente picada marinada en aceite de oliva y alcaparras",
            "D) Pescado azul asado a las brasas con salsa de tomate picante"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ceviche tradicional utiliza la acidez del jugo de limón fresco para desnaturalizar las proteínas del pescado crudo, acompañado de cebolla, cilantro y ají limo."
    },
    {
        id: 95,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué especias componen la mezcla tradicional india conocida como 'Garam Masala'?",
        opciones: [
            "A) Mezcla de especias tostadas y molidas que suele incluir cardamomo, canela, clavo, pimienta negra y comino",
            "B) Hojas de albahaca trituradas con piñones y queso parmesano",
            "C) Polvo de chiles secos ahumados con sal gruesa",
            "D) Raíz de jengibre fresco rallada con ajo y salsa de pescado"
        ],
        respuestaCorrecta: 0,
        explicacion: "Garam masala significa 'especias calientes' en hindi; se añade típicamente al final de la cocción para aportar un perfil aromático cálido y complejo."
    },
    {
        id: 96,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué pasta tailandesa salteada al wok combina fideos de arroz, camarones o pollo, tofu, huevo, brotes de soya y salsa de tamarindo con cacahuate?",
        opciones: [
            "A) Pad Thai",
            "B) Ramen",
            "C) Pho Bo",
            "D) Nasi Goreng"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Pad Thai es el plato nacional de Tailandia, famoso por equilibrar los sabores dulce, ácido, salado y picante."
    },
    {
        id: 97,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Cómo se llama el estofado clásico de la cocina francesa elaborado con carne de res marinada y cocinada lentamente en vino tinto de Borgoña, tocino, champiñones y cebollitas?",
        opciones: [
            "A) Beef Bourguignon",
            "B) Coq au Vin",
            "C) Cassoulet",
            "D) Bouillabaisse"
        ],
        respuestaCorrecta: 0,
        explicacion: "El *Beef Bourguignon* es un emblema de la cocina burguesa francesa que utiliza vino tinto robusto para ablandar cortes de carne y enriquecer la salsa con mirepoix y bouquet garni."
    },
    {
        id: 98,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué pan plano fermentado de la India se hornea tradicionalmente pegado a las paredes internas de un horno cilíndrico de barro llamado Tandoor?",
        opciones: [
            "A) Naan",
            "B) Chapati",
            "C) Roti",
            "D) Paratha"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pan Naan contiene yogur o levadura y se cocina a temperaturas muy elevadas en el tandoor, adquiriendo manchas tostadas y una textura suave por dentro."
    },
    {
        id: 99,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Cuál es el elemento graso tradicional utilizado en la elaboración de la masa de la auténtica Pizza Napolitana en Italia?",
        opciones: [
            "A) Ninguna grasa añadida en la masa (solo harina, agua, levadura y sal)",
            "B) Aceite de oliva virgen extra en proporción generosa",
            "C) Mantequilla clarificada",
            "D) Manteca de cerdo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La receta tradicional y certificada de la pizza napolitana no lleva grasas en su masa, basando su ligereza en una fermentación larga y cocción en horno de leña a más de 400°C."
    },
    {
        id: 100,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Qué sopa tradicional de la costa provenzal en Francia es un caldo de diversos pescados de roca y mariscos, aromatizado con hinojo, azafrán y acompañado de salsa rouille?",
        opciones: [
            "A) Bouillabaisse",
            "B) Bisque de homard",
            "C) Minestrone",
            "D) Vichyssoise"
        ],
        respuestaCorrecta: 0,
        explicacion: "La bouillabaisse de Marsella es una sopa compleja de pescados mediterráneos servida con crotones de pan untados en salsa rouille (mayonesa picante de ajo y azafrán)."
    },
    {
        id: 101,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué concepto define una cadena de suministro gastronómico que prioriza la compra directa a productores locales, reduciendo la huella de carbono por transporte?",
        opciones: [
            "A) Kilómetro cero (Cocina de proximidad)",
            "B) Producción intensiva global",
            "C) Comercio internacional de importación",
            "D) Agricultura transgénica masiva"
        ],
        respuestaCorrecta: 0,
        explicacion: "El movimiento de kilómetro cero fomenta el consumo de productos locales y de temporada, apoyando la economía regional y disminuyendo el impacto ambiental."
    },
    {
        id: 102,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué práctica en la gestión de restaurantes busca minimizar el desperdicio de alimentos mediante el aprovechamiento integral de todas las partes de un ingrediente (de la raíz a la hoja, o de la nariz a la cola)?",
        opciones: [
            "A) Cocina de aprovechamiento (Zero Waste)",
            "B) Ingeniería de menú financiera",
            "C) Producción en línea fría",
            "D) Fermentación industrial acelerada"
        ],
        respuestaCorrecta: 0,
        explicacion: "La cocina de aprovechamiento (zero waste) revaloriza subproductos como mermas de vegetales, huesos o recortes para crear caldos, aceites, polvos o fermentos."
    },
    {
        id: 103,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Cuál es la principal diferencia entre un alimento certificado como 'Orgánico' y uno convencional?",
        opciones: [
            "A) Los orgánicos se producen sin pesticidas sintéticos, fertilizantes químicos ni organismos genéticamente modificados (OGM)",
            "B) Los orgánicos tienen un tiempo de caducidad ilimitado en anaquel",
            "C) Los convencionales no pueden ser utilizados en restaurantes de alta cocina",
            "D) No existen diferencias bromatológicas ni normativas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La agricultura orgánica respeta los ciclos naturales y prohíbe el uso de químicos de síntesis, promoviendo la biodiversidad y la salud del suelo."
    },
    {
        id: 104,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué término hace referencia al impacto ambiental total generado por las emisiones de gases de efecto invernadero asociadas directa o indirectamente a la producción de un platillo?",
        opciones: [
            "A) Huella de carbono",
            "B) Huella hídrica",
            "C) Índice de masa corporal",
            "D) Coeficiente térmico"
        ],
        respuestaCorrecta: 0,
        explicacion: "La huella de carbono mide la cantidad de CO2 equivalente liberada en el ciclo de vida del alimento (producción, transporte, procesamiento, cocción y desecho)."
    },
    {
        id: 105,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué práctica de eficiencia energética en cocinas comerciales reduce significativamente el consumo eléctrico en la iluminación y sistemas de refrigeración?",
        opciones: [
            "A) Uso de equipos con certificación energética (Energy Star), iluminación LED y mantenimiento preventivo de condensadores",
            "B) Mantener las puertas de los congeladores abiertas para ventilar el área",
            "C) Apagar la campana extractora durante todo el servicio de cocción",
            "D) Utilizar hornos convencionales antiguos sin aislamiento térmico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El uso de tecnología eficiente y el mantenimiento de equipos disminuyen drásticamente el consumo energético y la huella ecológica del establecimiento."
    },
    {
        id: 106,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué indicador mide el volumen total de agua dulce utilizada directa e indirectamente para producir los ingredientes de un menú gastronómico?",
        opciones: [
            "A) Huella hídrica",
            "B) Actividad de agua ($a_w$)",
            "C) Densidad de vapor",
            "D) Flujo másico de líquidos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La huella hídrica cuantifica el uso de agua en la cadena productiva, siendo especialmente alta en la producción de carnes rojas en comparación con vegetales."
    },
    {
        id: 107,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Cuál es el destino más sostenible para el aceite vegetal usado (AVU) generado en las freidoras de un restaurante?",
        opciones: [
            "A) Recolección por empresas autorizadas para su transformación en biodiésel o jabones",
            "B) Vertido directo en el sistema de alcantarillado municipal",
            "C) Almacenamiento indefinido en bidones plásticos en el almacén seco",
            "D) Reutilización sin límite en la cocción hasta que se evapore por completo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El aceite vegetal usado contamina miles de litros de agua si se desecha por el drenaje; su reciclaje para biodiésel es la alternativa ecológica correcta."
    },
    {
        id: 108,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué norma internacional establece los lineamientos para la implementación de Sistemas de Gestión Ambiental en las organizaciones, aplicable a la industria de alimentos y bebidas?",
        opciones: [
            "A) ISO 14001",
            "B) ISO 9001",
            "C) ISO 22000",
            "D) OHSAS 18001"
        ],
        respuestaCorrecta: 0,
        explicacion: "La norma ISO 14001 proporciona el marco para que las empresas reduzcan su impacto ambiental, gestionen residuos y cumplan con la legislación ecológica."
    },
    {
        id: 109,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué método de gestión de residuos orgánicos en un restaurante permite transformar restos de vegetales crudos en abono para huertos urbanos?",
        opciones: [
            "A) Compostaje",
            "B) Incineración controlada",
            "C) Trituración y desecho al drenaje",
            "D) Deshidratación por salazón profunda"
        ],
        respuestaCorrecta: 0,
        explicacion: "El compostaje aeróbico convierte los residuos orgánicos vegetales en humus de alta calidad, cerrando el ciclo de nutrientes de la cocina al campo."
    },
    {
        id: 110,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué implica la responsabilidad social empresarial (RSE) en la gestión de un restaurante gastronómico?",
        opciones: [
            "A) Integrar prácticas éticas, bienestar laboral, apoyo a la comunidad y respeto ambiental más allá del cumplimiento legal",
            "B) Únicamente pagar los impuestos fiscales requeridos por la ley",
            "C) Donar las obras de arte del comedor a museos locales",
            "D) Reducir los salarios del personal para incrementar el margen de ganancia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La RSE abarca el compromiso ético con los empleados, proveedores justos, comunidad y medio ambiente, generando valor sostenible a largo plazo."
    },
    {
        id: 111,
        area: "Gestión de Empresas de Alimentos y Bebidas",
        pregunta: "¿Qué fórmula matemática se emplea para calcular el costo de la materia prima consumida (CMV) en un periodo de inventarios?",
        opciones: [
            "A) Inventario Inicial + Compras - Inventario Final",
            "B) Inventario Final + Compras - Inventario Inicial",
            "C) Ventas Netas - Costo de Ventas",
            "D) Utilidad Bruta / Ventas Totales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Costo de Materia Venta (CMV) se obtiene sumando al inventario inicial las compras netas del periodo y restando el inventario final existente."
    },
    {
        id: 112,
        area: "Técnicas Culinarias y Cocina Clásica",
        pregunta: "¿Cómo se llama el proceso de incorporar aire a una mezcla de grasa y azúcar mediante batido en la elaboración de bizcochos y repostería?",
        opciones: [
            "A) Cremado (Acremar)",
            "B) Sablage (Arenar)",
            "C) Emulsión en caliente",
            "D) Clarificación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cremado atrapa pequeñas burbujas de aire en la grasa cristalizada que, al hornearse y combinarse con agentes leudantes, proporcionan volumen y textura ligera."
    },
    {
        id: 113,
        area: "Seguridad e Higiene (HACCP y Normativa)",
        pregunta: "¿Cuál es la temperatura y tiempo mínimo de almacenamiento en refrigeración para alimentos preparados que se conservarán para su consumo posterior?",
        opciones: [
            "A) Máximo 4 °C por un periodo no mayor a 3 a 5 días según normativas sanitarias",
            "B) Entre 10 °C y 15 °C por tiempo indefinido",
            "C) Congelación a 0 °C por 24 horas",
            "D) Temperatura ambiente con cubierta plástica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Mantener los alimentos preparados por debajo de 4°C frena la multiplicación bacteriana, limitando su vida útil segura a pocos días para evitar ETA (Enfermedades Transmitidas por Alimentos)."
    },
    {
        id: 114,
        area: "Enología, Viticultura y Maridaje",
        pregunta: "¿Qué defecto aromático y organoléptico en el vino se produce principalmente por la presencia de TCA (tricloroanisol) proveniente del corcho contaminado?",
        opciones: [
            "A) Olor a corcho o humedad (TCA)",
            "B) Exceso de acidez volátil por ácido acético",
            "C) Oxidación prematura por exceso de oxígeno",
            "D) Presencia excesiva de carbónico residual"
        ],
        respuestaCorrecta: 0,
        explicacion: "El TCA imparte un desagradable olor a cartón mojado, humedad o sótano oscuro, arruinando el perfil aromático del vino."
    },
    {
        id: 115,
        area: "Gastronomía Mexicana e Historia Culinaria",
        pregunta: "¿Qué ingrediente aporta el característico sabor ahumado y picante a salsas y guisos en la cocina mexicana, tratándose de un chile jalapeño maduro y secado mediante humo?",
        opciones: [
            "A) Chile chipotle",
            "B) Chile ancho",
            "C) Chile guajillo",
            "D) Chile pasilla"
        ],
        respuestaCorrecta: 0,
        explicacion: "El chile chipotle es el resultado de dejar madurar el jalapeño en la planta y someterlo posteriormente a un proceso de ahumado y secado."
    },
    {
        id: 116,
        area: "Gastronomía Molecular y Vanguardia Culinaria",
        pregunta: "¿Qué instrumento óptico portátil utilizan los chefs y sommeliers para medir la concentración de azúcares disueltos (grados Brix) en jugos, frutas o almíbares?",
        opciones: [
            "A) Refractómetro",
            "B) Termopar digital",
            "C) pH-metro de precisión",
            "D) Viscosímetro rotacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El refractómetro mide el índice de refracción de la luz al pasar a través de una solución azucarada, expresándolo directamente en grados Brix."
    },
    {
        id: 117,
        area: "Nutrición y Ciencia de los Alimentos",
        pregunta: "¿Qué ocurre con las proteínas de la carne al ser sometidas a temperaturas superiores a los 60 °C - 70 °C durante la cocción?",
        opciones: [
            "A) Se desnaturalizan, perdiendo su estructura tridimensional y liberando agua",
            "B) Duplican su valor proteico biológico por síntesis térmica",
            "C) Se transforman en carbohidratos complejos de rápida absorción",
            "D) Incrementan su humedad interna de forma permanente"
        ],
        respuestaCorrecta: 0,
        explicacion: "La desnaturalización térmica rompe los enlaces débiles que mantienen la estructura de las proteínas, contrayendo las fibras musculares y expulsando líquidos (exudación)."
    },
    {
        id: 118,
        area: "Servicio de Sala, Protocolo y Bar",
        pregunta: "¿Cómo se denomina a la persona encargada de la bodega de vinos, la cata, la recomendación de maridajes y el servicio de bebidas en un restaurante de alta gama?",
        opciones: [
            "A) Sommelier (Sumiller)",
            "B) Maître d'hôtel",
            "C) Capitán de meseros",
            "D) Barista profesional"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sommelier es el experto en vinos y bebidas que asesora al cliente en el maridaje y gestiona la compra, guarda y rotación de la cava."
    },
    {
        id: 119,
        area: "Gastronomía Internacional y Culturas Culinarias",
        pregunta: "¿Cuál es el ingrediente base para la elaboración de la auténtica salsa pesto genovesa en la región de Liguria, Italia?",
        opciones: [
            "A) Albahaca genovesa fresca, piñones, ajo, queso parmesano/pecorino y aceite de oliva virgen extra",
            "B) Hojas de cilantro fresco con cacahuate y chile serrano",
            "C) Tomates deshidratados con aceitunas negras y alcaparras",
            "D) Crema de leche con champiñones y perejil picado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El pesto genovesa tradicional se elabora machacando en mortero albahaca fresca, piñones, ajo, quesos curados italianos y aceite de oliva."
    },
    {
        id: 120,
        area: "Sección Transversal y Sostenibilidad Gastronómica",
        pregunta: "¿Qué certificación internacional garantiza que los productos pesqueros provienen de pesquerías sostenibles que no sobreexplotan los océanos ni dañan el ecosistema marino?",
        opciones: [
            "A) MSC (Marine Stewardship Council)",
            "B) FSC (Forest Stewardship Council)",
            "C) USDA Organic",
            "D) Rainforest Alliance"
        ],
        respuestaCorrecta: 0,
        explicacion: "El sello MSC certifica la pesca sostenible a nivel global, asegurando la trazabilidad y la preservación de las poblaciones de peces en los mares del mundo."
    }
];