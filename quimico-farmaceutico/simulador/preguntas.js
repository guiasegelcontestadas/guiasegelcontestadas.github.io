const bancoPreguntas = [
    {
        id: 1,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Cuál es el propósito principal de agregar un desintegrante en una formulación de tabletas por compresión directa?",
        opciones: [
            "A) Mejorar la fluidez del polvo en la tolva",
            "B) Facilitar la ruptura de la tableta en contacto con fluidos gástricos",
            "C) Evitar la adhesión del polvo a los punzones",
            "D) Incrementar la dureza mecánica de la tableta"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los desintegrantes son excipientes añadidos para facilitar la ruptura o disgregación de la tableta en fragmentos más pequeños al entrar en contacto con el agua o fluidos gastrointestinales, aumentando el área superficial para la disolución del fármaco."
    },
    {
        id: 2,
        area: "Tecnología Farmacéutica",
        pregunta: "En la validación de un proceso de mezclado de polvos, ¿qué prueba analítica se utiliza comúnmente para determinar la homogeneidad de la mezcla?",
        opciones: [
            "A) Espectroscopia UV-Vis de muestras tomadas en diferentes puntos",
            "B) Cromatografía de Líquidos de Alta Resolución (HPLC) en múltiples puntos de muestreo",
            "C) Ensayo de disolución con aparato de paletas",
            "D) Determinación de humedad por Karl Fischer"
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis por HPLC de muestras representativas tomadas de diversas posiciones del mezclador permite cuantificar el principio activo y determinar el coeficiente de variación, asegurando la uniformidad de contenido."
    },
    {
        id: 3,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Qué tipo de agua purificada se requiere como mínimo para la limpieza final de equipos utilizados en la fabricación de formas farmacéuticas estériles?",
        opciones: [
            "A) Agua potable",
            "B) Agua purificada (PW)",
            "C) Agua para inyectables (WFI)",
            "D) Agua blanda"
        ],
        respuestaCorrecta: 2,
        explicacion: "El agua para inyectables (WFI) es el estándar requerido para las etapas finales de lavado de equipos y componentes que entran en contacto directo con productos estériles, garantizando la ausencia de endotoxinas y pirógenos."
    },
    {
        id: 4,
        area: "Tecnología Farmacéutica",
        pregunta: "Durante la liofilización, ¿en qué etapa ocurre la sublimación del hielo formado en el producto?",
        opciones: [
            "A) Congelación",
            "B) Secado primario",
            "C) Secado secundario",
            "D) Desorción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El secado primario se realiza aplicando alto vacío y suministro controlado de calor, lo que provoca la sublimación directa del hielo (estado sólido a gas) sin pasar por la fase líquida."
    },
    {
        id: 5,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Cuál es la función de los parabenos (metilparabeno y propilparabeno) en una formulación líquida no estéril?",
        opciones: [
            "A) Antioxidantes",
            "B) Agentes viscosantes",
            "C) Conservadores antimicrobianos",
            "D) Surfactantes"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los parabenos son ampliamente utilizados como conservadores antimicrobianos de amplio espectro para prevenir el crecimiento bacteriano y fúngico en preparaciones farmacéuticas acuosas."
    },
    {
        id: 6,
        area: "Tecnología Farmacéutica",
        pregunta: "En una emulsión O/W (Aceite en Agua), ¿qué fenómeno físico ocurre cuando las gotas de la fase dispersa se fusionan irreversiblemente?",
        opciones: [
            "A) Cremado",
            "B) Floculación",
            "C) Coalescencia",
            "D) Sedimentación"
        ],
        respuestaCorrecta: 2,
        explicacion: "La coalescencia es la unión de dos o más gotas para formar una sola gota más grande, lo que eventualmente lleva a la ruptura de la emulsión (fase de separación completa)."
    },
    {
        id: 7,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Qué parámetro de compresión se mide típicamente para evaluar la resistencia mecánica de una tableta antes de su recubrimiento?",
        opciones: [
            "A) Tiempo de disgregación",
            "B) Dureza o resistencia a la ruptura",
            "C) Friabilidad porcentual",
            "D) Diámetro y espesor"
        ],
        respuestaCorrecta: 1,
        explicacion: "La dureza o resistencia a la ruptura mide la fuerza requerida para romper una tableta diametralmente, siendo un parámetro crítico para asegurar que soporte la manipulación y el proceso de recubrimiento."
    },
    {
        id: 8,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Cuál es el objetivo de aplicar una capa de sellado (seal coat) antes del recubrimiento pelicular de un núcleo de tableta?",
        opciones: [
            "A) Dar brillo y color estético",
            "B) Evitar la penetración de humedad y proteger núcleos frágiles",
            "C) Retardar la liberación del principio activo",
            "D) Mejorar la adherencia del colorante"
        ],
        respuestaCorrecta: 1,
        explicacion: "La capa de sellado se aplica para impermeabilizar el núcleo de la tableta, protegiéndolo de la humedad del líquido de recubrimiento y aumentando su resistencia mecánica superficial."
    },
    {
        id: 9,
        area: "Tecnología Farmacéutica",
        pregunta: "En un sistema de aire acondicionado HVAC para áreas limpias farmacéuticas, ¿qué clase de filtro es indispensable para retener partículas ultrafinas y microorganismos?",
        opciones: [
            "A) Filtro G4",
            "B) Filtro F7",
            "C) Filtro HEPA",
            "D) Filtro de carbón activado"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los filtros HEPA (High Efficiency Particulate Air) tienen una eficiencia de retención mínima del 99.97% para partículas de 0.3 micras, esenciales para mantener la clasificación de aire estéril."
    },
    {
        id: 10,
        area: "Tecnología Farmacéutica",
        pregunta: "¿Qué técnica de esterilización se prefiere para materiales termolábiles (como jeringas prellenadas de plástico) que no pueden soportar el calor seco ni húmedo?",
        opciones: [
            "A) Esterilización por autoclave a 121 °C",
            "B) Esterilización por calor seco a 180 °C",
            "C) Esterilización por óxido de etileno o radiación gamma",
            "D) Pasteurización"
        ],
        respuestaCorrecta: 2,
        explicacion: "El óxido de etileno y la irradiación (gamma o electrones) son métodos de esterilización en frío adecuados para polímeros y termolábiles que se dañarían con tratamientos térmicos."
    },
    {
        id: 11,
        area: "Control de Calidad",
        pregunta: "Según la Farmacopea de los Estados Unidos Mexicanos (FEUM), ¿qué prueba de control físico se realiza para garantizar que las tabletas no se fracturen por desgaste durante el transporte?",
        opciones: [
            "A) Ensayo de disolución",
            "B) Determinación de friabilidad",
            "C) Uniformidad de dosis",
            "D) Prueba de hermeticidad"
        ],
        respuestaCorrecta: 1,
        explicacion: "La friabilidad evalúa la capacidad de las tabletas sin recubrimiento para resistir la abrasión y los impactos mecánicos simulados en un equipo rotatorio (friabilizador)."
    },
    {
        id: 12,
        area: "Control de Calidad",
        pregunta: "¿Qué parámetro estadístico se utiliza para evaluar la precisión de un método analítico en términos de concordancia entre múltiples determinaciones independientes?",
        opciones: [
            "A) Desviación estándar relativa (DER) o coeficiente de variación",
            "B) Sesgo o error sistemático",
            "C) Límite de detección",
            "D) Recuperación porcentual"
        ],
        respuestaCorrecta: 0,
        explicacion: "La precisión (repeatibilidad y reproducibilidad) se expresa típicamente como la desviación estándar o el coeficiente de variación (CV%) de una serie de mediciones."
    },
    {
        id: 13,
        area: "Control de Calidad",
        pregunta: "En una cromatografía de líquidos de alta resolución (HPLC), ¿qué mide el parámetro de resolución ($R_s$) entre dos picos cromatográficos?",
        opciones: [
            "A) La velocidad de flujo de la fase móvil",
            "B) El grado de separación entre dos picos adyacentes",
            "C) La altura máxima del pico analítico",
            "D) El tiempo que tarda el analito en desorberse"
        ],
        respuestaCorrecta: 1,
        explicacion: "La resolución cuantifica qué tan bien separados están dos picos adyacentes en un cromatograma; un valor de $R_s \geq 1.5$ indica una separación basal óptima."
    },
    {
        id: 14,
        area: "Control de Calidad",
        pregunta: "¿Qué representa el Límite de Diciembre o Límite de Detección (LOD) en la validación de métodos analíticos?",
        opciones: [
            "A) La menor cantidad de analito que puede ser cuantificada con precisión",
            "B) La menor concentración de analito en una muestra que puede ser detectada, pero no necesariamente cuantificada",
            "C) El rango lineal de respuesta del instrumento",
            "D) La concentración máxima de contaminantes permitida"
        ],
        respuestaCorrecta: 1,
        explicacion: "El LOD es el límite inferior donde el analito es distinguishable del ruido de fondo, mientras que el LOQ (Límite de Cuantificación) es donde se puede medir con precisión y exactitud aceptables."
    },
    {
        id: 15,
        area: "Control de Calidad",
        pregunta: "¿Cuál es el propósito de realizar estudios de estabilidad acelerada en un nuevo producto farmacéutico?",
        opciones: [
            "A) Determinar la vida de anaquel bajo condiciones climáticas de almacenamiento real",
            "B) Estimar la degradación química y física bajo condiciones extremas para predecir la estabilidad a largo plazo",
            "C) Evaluar la toxicidad aguda en modelos animales",
            "D) Comprobar la esterilidad del envase primario"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los estudios de estabilidad acelerada (ej. 40 °C / 75% HR) exponen al fármaco a condiciones estresantes para acelerar la degradación química y predecir su comportamiento en almacenamiento prolongado."
    },
    {
        id: 16,
        area: "Control de Calidad",
        pregunta: "En la prueba de disolución para formas farmacéuticas sólidas orales, ¿qué aparato se especifica comúnmente para cápsulas y tabletas utilizando un vaso y una varilla con paleta?",
        opciones: [
            "A) Aparato 1 (Canastilla)",
            "B) Aparato 2 (Paleta)",
            "C) Aparato 3 (Cilindro recíproco)",
            "D) Aparato 4 (Flujo continuo)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Aparato 2 de la FEUM/USP utiliza una paleta (paddle) que gira dentro de un vaso cilíndrico, siendo el método más utilizado para evaluar la disolución de tabletas."
    },
    {
        id: 17,
        area: "Control de Calidad",
        pregunta: "¿Qué técnica espectroscópica se basa en la absorción de radiación ultravioleta-visible y se rige cuantitativamente por la Ley de Beer-Lambert?",
        opciones: [
            "A) Espectroscopia Infrarroja (IR)",
            "B) Espectrofotometría UV-Vis",
            "C) Resonancia Magnética Nuclear (RMN)",
            "D) Espectrometría de Masas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La espectrofotometría UV-Vis mide la absorción de luz UV o visible por moléculas con electrones $\pi$ o no enlazantes, relacionando linealmente la absorbancia con la concentración (Ley de Beer-Lambert)."
    },
    {
        id: 18,
        area: "Control de Calidad",
        pregunta: "En el control microbiológico de productos no estériles, ¿qué prueba evalúa la ausencia de patógenos específicos como *Escherichia coli* o *Staphylococcus aureus*?",
        opciones: [
            "A) Prueba de esterilidad",
            "B) Recuento total de microorganismos mesófilos aerobios",
            "C) Recuento de hongos y levaduras",
            "D) Pruebas de límites microbianos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las pruebas de límites microbianos determinan tanto el recuento microbiano total como la ausencia de microorganismos especificados por su potencial patógeno en productos no estériles."
    },
    {
        id: 19,
        area: "Control de Calidad",
        pregunta: "¿Qué indica un resultado fuera de especificación (FOSE / OOS) en un análisis de control de calidad de lotes terminados?",
        opciones: [
            "A) Que el proceso requiere optimización menor sin afectar el lote",
            "B) Que el lote analizado no cumple con los estándares establecidos y no puede ser liberado para su comercialización",
            "C) Que el instrumento de medición necesita calibración anual",
            "D) Que el analista cometió un error administrativo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un resultado OOS (Out of Specification) indica que el valor obtenido queda fuera de los límites de aceptación aprobados en el expediente de registro, requiriendo una investigación formal de causa raíz."
    },
    {
        id: 20,
        area: "Control de Calidad",
        pregunta: "En una valoración ácido-base por retroceso (back titration), ¿cuál es el fundamento operativo?",
        opciones: [
            "A) Valorar directamente el analito con una base fuerte",
            "B) Añadir un exceso conocido de un reactivo estándar al analito y valorar el exceso no reaccionado",
            "C) Utilizar indicadores redox en lugar de indicadores de pH",
            "D) Medir el potencial eléctrico del electrodo de vidrio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La titulación por retroceso se emplea cuando el analito reacciona lentamente o es insoluble; se le añade un exceso de reactivo titulante y el remanente se valora con un segundo reactivo."
    },
    {
        id: 21,
        area: "Farmacología",
        pregunta: "¿Qué describe la farmacocinética de un fármaco?",
        opciones: [
            "A) Los mecanismos de acción a nivel de receptores celulares",
            "B) Los efectos bioquímicos y fisiológicos del fármaco en el organismo",
            "C) Lo que el organismo le hace al fármaco (ADME)",
            "D) La toxicidad crónica en ensayos preclínicos"
        ],
        respuestaCorrecta: 2,
        explicacion: "La farmacocinética estudia el curso temporal de las concentraciones de los fármacos en el organismo y comprende los procesos de Absorción, Distribución, Metabolismo y Excreción (ADME)."
    },
    {
        id: 22,
        area: "Farmacología",
        pregunta: "¿Cuál es el principal órgano responsable del metabolismo de los fármacos a través del sistema enzimático del citocromo P450?",
        opciones: [
            "A) Riñón",
            "B) Hígado",
            "C) Intestino delgado",
            "D) Pulmón"
        ],
        respuestaCorrecta: 1,
        explicacion: "El hígado es el órgano metabólico principal del cuerpo humano y alberga la mayor concentración de enzimas del citocromo P450 (CYP450), responsables de la biotransformación de xenobióticos."
    },
    {
        id: 23,
        area: "Farmacología",
        pregunta: "¿Qué significa que un fármaco actúe como un agonista inverso en un receptor acoplado a proteína G?",
        opciones: [
            "A) Bloquea el receptor sin producir respuesta alguna",
            "B) Produce una respuesta opuesta a la del agonista al disminuir la actividad constitutiva basal del receptor",
            "C) Se une a un sitio alostérico para potenciar al agonista",
            "D) Destruye irreversiblemente el receptor celular"
        ],
        respuestaCorrecta: 1,
        explicacion: "El agonista inverso se une al receptor y reduce su actividad intrínseca basal (actividad constitutiva en ausencia de agonistas), generando un efecto farmacológico opuesto."
    },
    {
        id: 24,
        area: "Farmacología",
        pregunta: "¿Qué parámetro farmacocinético representa el volumen aparente en el cual se disolvería la dosis del fármaco para alcanzar la concentración plasmática observada?",
        opciones: [
            "A) Depuración (Clearance)",
            "B) Biodisponibilidad",
            "C) Volumen de distribución ($V_d$)",
            "D) Área bajo la curva (AUC)"
        ],
        respuestaCorrecta: 2,
        explicacion: "El volumen de distribución ($V_d$) es un parámetro farmacocinético que relaciona la cantidad de fármaco en el cuerpo con su concentración plasmática, reflejando su grado de afinidad por los tejidos periféricos."
    },
    {
        id: 25,
        area: "Farmacología",
        pregunta: "En farmacodinamia, ¿cómo se define la potencia de un fármaco?",
        opciones: [
            "A) La magnitud de la respuesta máxima que el fármaco puede producir",
            "B) La cantidad de fármaco necesaria para producir un efecto determinado, relacionada con su afinidad por el receptor",
            "C) El tiempo que tarda en eliminarse el 50% del fármaco del plasma",
            "D) La probabilidad de presentar reacciones adversas graves"
        ],
        respuestaCorrecta: 1,
        explicacion: "La potencia se refiere a la concentración o dosis requerida para provocar un efecto del 50% del máximo ($EC_{50}$); está ligada a la afinidad del fármaco por su receptor."
    },
    {
        id: 26,
        area: "Farmacología",
        pregunta: "¿Qué es el efecto de primer paso hepático?",
        opciones: [
            "A) La excreción biliar inmediata tras la administración intravenosa",
            "B) La metabolización presistémica de un fármaco administrado por vía oral en la pared intestinal y el hígado antes de llegar a la circulación sistémica",
            "C) La unión del fármaco a proteínas plasmáticas durante el primer minuto",
            "D) La filtración glomerular rápida en el nefrón"
        ],
        respuestaConcepto: 1,
        explicacion: "El metabolismo de primer paso ocurre cuando los fármacos absorbidos en el tracto gastrointestinal pasan por la vena porta directamente al hígado, donde una fracción importante es metabolizada antes de alcanzar la circulación sistémica."
    },
    {
        id: 27,
        area: "Farmacología",
        pregunta: "¿Cuál es la vía de administración que presenta una biodisponibilidad del 100% por definición?",
        opciones: [
            "A) Vía oral",
            "B) Vía intramuscular",
            "C) Vía intravenosa",
            "D) Vía subcutánea"
        ],
        respuestaCorrecta: 2,
        explicacion: "La vía intravenosa deposita el fármaco directamente en el torrente sanguíneo, evitando por completo la absorción y el primer paso, por lo que su biodisponibilidad es del 100%."
    },
    {
        id: 28,
        area: "Farmacología",
        pregunta: "¿Qué tipo de reacción de fase II en el metabolismo de xenobióticos involucra la transferencia de un grupo ácido glucurónico mediado por la enzima UDP-glucuronosiltransferasa?",
        opciones: [
            "A) Acetilación",
            "B) Sulfatación",
            "C) Glucuronidación",
            "D) Metilación"
        ],
        respuestaCorrecta: 2,
        explicacion: "La glucuronidación es la reacción de fase II más común, donde el ácido glucurónico se une a un grupo polar del fármaco para hacerlo más hidrosoluble y facilitar su excreción renal o biliar."
    },
    {
        id: 29,
        area: "Farmacología",
        pregunta: "¿Qué indica un índice terapéutico estrecho en un medicamento?",
        opciones: [
            "A) Que la dosis tóxica es muy similar a la dosis terapéutica",
            "B) Que el fármaco es altamente seguro y no requiere monitorización",
            "C) Que su absorción gastrointestinal es errática",
            "D) Que se une débilmente a las proteínas plasmáticas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un índice terapéutico estrecho significa que el margen entre la dosis eficaz y la dosis que produce toxicidad o letalidad es pequeño, requiriendo monitoreo estricto de niveles plasmáticos (ej. warfarina, digoxina)."
    },
    {
        id: 30,
        area: "Farmacología",
        pregunta: "¿Qué es la taifilaxia o tolerancia farmacodinámica aguda?",
        opciones: [
            "A) Una reacción alérgica mediada por IgE en la primera exposición",
            "B) La disminución rápida y progresiva de la respuesta a un fármaco tras administraciones repetidas en corto tiempo",
            "C) La acumulación tóxica del fármaco por insuficiencia renal",
            "D) El sinergismo potenciado entre dos fármacos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La taquifilaxia es un fenómeno de tolerancia aguda donde la respuesta farmacológica disminuye drásticamente en cuestión de minutos u horas tras dosis sucesivas (ej. efedrina)."
    },
    {
        id: 31,
        area: "Química Medicinal",
        pregunta: "¿Qué efecto tiene generalmente la introducción de un grupo halógeno (como flúor o cloro) en un anillo aromático de un fármaco?",
        opciones: [
            "A) Disminuye drásticamente su lipofilicidad",
            "B) Incrementa la lipofilicidad y puede proteger posiciones metabólicas lábiles",
            "C) Aumenta la velocidad de excreción renal inmediata",
            "D) Convierte el fármaco en un ácido fuerte"
        ],
        respuestaCorrecta: 1,
        explicacion: "La halogenación aumenta la liposolubilidad del compuesto, mejorando su capacidad para atravesar membranas biológicas, y a menudo bloquea sitios susceptibles de hidroxilación metabólica por el citocromo P450."
    },
    {
        id: 32,
        area: "Química Medicinal",
        pregunta: "¿Qué es un profármaco (prodrug)?",
        opciones: [
            "A) Un fármaco sintético que ha expirado su patente",
            "B) Un derivado inactivo o menos activo de un fármaco que requiere biotransformación enzimática in vivo para liberar la molécula activa",
            "C) Un metabolito secundario obtenido de fuentes naturales",
            "D) Un antagonista competitivo irreversible"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un profármaco se diseña químicamente para mejorar propiedades como la absorción, la solubilidad o enmascarar efectos adversos; al administrarse, se metaboliza convirtiéndose en el fármaco activo."
    },
    {
        id: 33,
        area: "Química Medicinal",
        pregunta: "En el diseño de fármacos, ¿qué describe el coeficiente de partición octanol/agua ($Log P$)?",
        opciones: [
            "A) La afinidad del fármaco por las proteínas plasmáticas",
            "B) La liposolubilidad y el grado de hidrofobicidad de la molécula neutra",
            "C) La constante de disociación ácida ($pK_a$)",
            "D) La velocidad de disolución en el tracto gastrointestinal"
        ],
        respuestaCorrecta: 1,
        explicacion: "El $Log P$ mide la lipofilicidad de un compuesto neutro mediante su distribución entre n-octanol (fase lipídica) y agua (fase acuosa), siendo fundamental para predecir la permeabilidad a través de membranas."
    },
    {
        id: 34,
        area: "Química Medicinal",
        pregunta: "¿Qué regla de Lipinski (Regla de los Cinco) ayuda a predecir la mala biodisponibilidad oral de un compuesto candidato a fármaco?",
        opciones: [
            "A) Peso molecular > 500, más de 5 enlaces rotadores",
            "B) Más de 5 donadores de enlaces de hidrógeno, más de 10 aceptores, peso molecular > 500, y $Log P > 5$",
            "C) $pK_a$ menor a 2 y mayor a 10",
            "D) Solubilidad en agua menor a 1 mg/mL"
        ],
        respuestaCorrecta: 1,
        explicacion: "La regla de los cinco de Lipinski establece que una molécula tiene baja probabilidad de absorción oral si presenta >5 donadores de H, >10 aceptores de H, un peso molecular >500 y un $Log P > 5$."
    },
    {
        id: 35,
        area: "Química Medicinal",
        pregunta: "¿Qué es un isóstero en química medicinal?",
        opciones: [
            "A) Dos moléculas con el mismo peso molecular pero diferente fórmula empírica",
            "B) Átomos o grupos moleculares que poseen propiedades físico-químicas similares y pueden causar efectos biológicos semejantes",
            "C) Isómeros ópticos con actividad farmacológica opuesta",
            "D) Enantiómeros que rotan el plano de la luz polarizada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los isósteros son grupos o átomos con capas electrónicas externas similares que se emplean en la modificación molecular para optimizar la actividad o disminuir la toxicidad manteniendo la interacción con el receptor."
    },
    {
        id: 36,
        area: "Química Medicinal",
        pregunta: "¿Qué implicación farmacológica tiene la presencia de un centro quiral en una molécula de un fármaco?",
        opciones: [
            "A) El compuesto siempre es inactivo terapéuticamente",
            "B) Puede existir en forma de enantiómeros con diferente afinidad, actividad farmacológica y perfil metabólico",
            "C) Incrementa automáticamente la toxicidad hepática",
            "D) Impide su absorción por difusión pasiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los enantiómeros interactúan con receptores quirales biológicos de manera diferente; a menudo, uno porta la actividad farmacológica (eutomero) mientras que el otro puede ser inactivo o tóxico (distomero)."
    },
    {
        id: 37,
        area: "Química Medicinal",
        pregunta: "¿Qué grupo funcional característico contienen los fármacos betalactámicos como las penicilinas y cefalosporinas?",
        opciones: [
            "A) Un anillo de lactona macrocíclica",
            "B) Un anillo de lactama de cuatro miembros altamente tensionado",
            "C) Un grupo sulfonamida sustituido",
            "D) Un núcleo de benzodiazepina"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los antibióticos betalactámicos se caracterizan por poseer un anillo $\beta$-lactámico (azetidin-2-ona), cuya tensión estérica es crucial para la inhibición de las transpeptidasas bacterianas."
    },
    {
        id: 38,
        area: "Química Medicinal",
        pregunta: "¿Qué describe la relación estructura-actividad (QSAR)?",
        opciones: [
            "A) El estudio cuantitativo de cómo las variaciones estructurales de una molécula afectan su actividad biológica utilizando modelos matemáticos",
            "B) La velocidad de descomposición térmica de los principios activos",
            "C) La interacción estequiométrica entre antígenos y anticuerpos",
            "D) La constante de velocidad de eliminación renal"
        ],
        respuestaCorrecta: 0,
        explicacion: "QSAR (Quantitative Structure-Activity Relationships) correlaciona matemáticamente propiedades físico-químicas (hidrofobia, electrónica, estérica) con la actividad biológica para diseñar fármacos más potentes."
    },
    {
        id: 39,
        area: "Química Medicinal",
        pregunta: "¿Qué efecto produce la conversión de un grupo carboxilo libre en un éster alquílico en la molécula de un fármaco?",
        opciones: [
            "A) Aumenta la hidrosolubilidad y disminuye la penetración celular",
            "B) Incrementa la lipofilicidad, facilitando el paso a través de membranas biológicas (actuando a menudo como profármaco)",
            "C) Bloquea irreversiblemente el metabolismo de fase II",
            "D) Convierte el compuesto en una base fuerte"
        ],
        respuestaCorrecta: 1,
        explicacion: "La esterificación de ácidos carboxílicos enmascara la carga negativa a pH fisiológico, aumentando la lipofilicidad y permitiendo una mejor absorción transmembrana antes de ser hidrolizado por esterasas."
    },
    {
        id: 40,
        area: "Química Medicinal",
        pregunta: "¿Qué es la toxicófora en toxicología y química medicinal?",
        opciones: [
            "A) La región de una molécula responsable de su efecto terapéutico benéfico",
            "B) Un grupo funcional o subestructura molecular asociada con la inducción de efectos tóxicos o adversos",
            "C) El transportador proteico que excreta el fármaco en el túbulo renal",
            "D) El sitio de unión al receptor principal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una toxicófora es un motivo estructural dentro de una molécula que confiere toxicidad intrínseca, mutagenicidad o hepatotoxicidad, identificada en las etapas iniciales del descubrimiento de fármacos."
    },
    {
        id: 41,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Cuál es la función principal de la coenzima A (CoA) en el metabolismo intermediario?",
        opciones: [
            "A) Transportar grupos fosfato de alta energía",
            "B) Actuar como transportador de grupos acilo (como acetil-CoA)",
            "C) Donar electrones directamente al complejo IV de la cadena respiratoria",
            "D) Catalizar la síntesis de ácidos nucleicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Coenzima A transfiere grupos acilo mediante un enlace tioéster de alta energía, siendo clave en el ciclo de Krebs, la oxidación de ácidos gramos y la síntesis de lípidos."
    },
    {
        id: 42,
        area: "Bioquímica y Biología Molecular",
        pregunta: "En la cadena transportadora de electrones mitocondrial, ¿cuál es el complejo enzimático que cataliza la reducción de oxígeno molecular ($O_2$) a agua?",
        opciones: [
            "A) Complejo I (NADH deshidrogenasa)",
            "B) Complejo II (Succinato deshidrogenasa)",
            "C) Complejo III (Citocromo c reductasa)",
            "D) Complejo IV (Citocromo c oxidasa)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El Complejo IV (Citocromo c oxidasa) transfiere electrones desde el citocromo c hasta el oxígeno molecular, reduciéndolo a agua y bombeando protones al espacio intermembranal."
    },
    {
        id: 43,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Qué enzima clave regula la velocidad de la vía de síntesis de colesterol en el hígado y es el blanco farmacológico de las estatinas?",
        opciones: [
            "A) HMG-CoA sintasa",
            "B) HMG-CoA reductasa",
            "C) Lecitin-colesterol aciltransferasa (LCAT)",
            "D) Acil-CoA colesterol aciltransferasa (ACAT)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La HMG-CoA reductasa cataliza la conversión de HMG-CoA en mevalonato, el paso limitante en la biosíntesis de colesterol; las estatinas actúan como inhibidores competitivos de esta enzima."
    },
    {
        id: 44,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Durante qué proceso de la expresión génica actúa el complejo de empalme (spliceosome) eliminando intrones?",
        opciones: [
            "A) Replicación del ADN",
            "B) Transcripción primaria",
            "C) Maduración o procesamiento del ARN mensajero (Splicing)",
            "D) Traducción ribosomal"
        ],
        respuestaCorrecta: 2,
        explicacion: "El splicing o corte y empalme es un proceso post-transcripcional donde los intrones no codificantes son eliminados y los exones se unen para formar el ARNm maduro."
    },
    {
        id: 45,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Cuál es la función del enlace fosfodiéster en los ácidos nucleicos?",
        opciones: [
            "A) Unir las bases nitrogenadas complementarias entre las dos hebras de ADN",
            "B) Conectar el carbono 3' de un azúcar pentosa con el carbono 5' de la siguiente pentosa, formando el esqueleto del ácido nucleico",
            "C) Estabilizar la estructura terciaria de las proteínas histonas",
            "D) Unir el grupo amino al grupo carboxilo en los aminoácidos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los enlaces fosfodiéster unen covalentemente los nucleótidos sucesivos a través de los grupos fosfato entre los carbonos 3' y 5' de los azúcares, construyendo el esqueleto covalente de ADN y ARN."
    },
    {
        id: 46,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Qué técnica de biología molecular permite la amplificación exponencial de fragmentos específicos de ADN utilizando ciclos térmicos y una ADN polimerasa termoestable?",
        opciones: [
            "A) Electroforesis en gel de agarosa",
            "B) Reacción en Cadena de la Polimerasa (PCR)",
            "C) Western Blot",
            "D) Cromatografía de exclusión molecular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La PCR (Polymerase Chain Reaction) utiliza cebadores específicos, desnaturalización térmica, apareamiento y extensión enzimática para amplificar millones de veces una secuencia de ADN."
    },
    {
        id: 47,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Qué es una enzima alostérica?",
        opciones: [
            "A) Una enzima que no requiere cofactores metálicos para funcionar",
            "B) Una enzima cuya actividad es regulada por la unión de moléculas efectoras en un sitio distinto al sitio activo (sitio alostérico)",
            "C) Una enzima que cataliza exclusivamente reacciones de oxidación",
            "D) Un anticuerpo monoclonal con actividad catalítica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las enzimas alostéricas poseen sitios de unión adicionales (alostéricos) donde se fijan efectores positivos o negativos que inducen cambios conformacionales modulando su actividad catalítica."
    },
    {
        id: 48,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿En qué compartimento celular eucariota se lleva a cabo el ciclo de la urea y la beta-oxidación de ácidos grasos de cadena muy larga?",
        opciones: [
            "A) Citosol",
            "B) Matriz mitocondrial (y peroxisomas para cadenas muy largas)",
            "C) Retículo endoplásmico rugoso",
            "D) Núcleo celular"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ciclo de la urea se desarrolla parcialmente en la mitocondria y el citosol hepático. La $\beta$-oxidación mitocondrial procesa ácidos grasos, mientras que los peroxisomas degradan los de cadena muy larga."
    },
    {
        id: 49,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Cuál es el papel del ARN de transferencia (ARNt) durante la síntesis de proteínas en los ribosomas?",
        opciones: [
            "A) Codificar la secuencia completa del genoma nuclear",
            "B) Transportar los aminoácidos específicos al ribosoma y reconocer el codón del ARNm mediante su anticodón",
            "C) Formar la estructura catalítica central de la subunidad ribosomal grande",
            "D) Degradar el ARNm una vez terminada la traducción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ARNt actúa como adaptador molecular: en un extremo porta un aminoácido específico y en el otro presenta el anticodón que empareja con el codón complementario del ARNm en el ribosoma."
    },
    {
        id: 50,
        area: "Bioquímica y Biología Molecular",
        pregunta: "¿Qué tipo de inhibición enzimática se caracteriza porque el inhibidor se une covalentemente al sitio activo de la enzima, inactivándola de forma permanente?",
        opciones: [
            "A) Inhibición competitiva reversible",
            "B) Inhibición acompetitiva",
            "C) Inhibición irreversible (o suicida)",
            "D) Inhibición alostérica negativa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La inhibición irreversible implica la modificación covalente de residuos clave en el sitio activo de la enzima (ej. aspirina sobre la ciclooxigenase), inutilizándola permanentemente."
    },
    {
        id: 51,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué característica tintorial y estructural diferencia a las bacterias Gram positivas de las Gram negativas?",
        opciones: [
            "A) Las Gram positivas poseen una gruesa capa de peptidoglicano que retiene el complejo cristal violeta-iodo",
            "B) Las Gram negativas tienen una gruesa capa de ácidos teicoicos",
            "C) Las Gram positivas presentan una membrana externa rica en lipopolisacáridos (LPS)",
            "D) Las Gram negativas no absorben safranina"
        ],
        respuestaCorrecta: 0,
        explicacion: "La pared de las Gram positivas está compuesta por una gruesa capa de peptidoglicano que retiene el colorante cristal violeta tras la decoloración con alcohol, mientras que las Gram negativas tienen una membrana externa con LPS."
    },
    {
        id: 52,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué prueba bioquímica se utiliza para diferenciar bacterias del género *Staphylococcus* (catalasa positivas) de *Streptococcus* (catalasa negativas)?",
        opciones: [
            "A) Prueba de la oxidasa",
            "B) Prueba de la catalasa usando peróxido de hidrógeno",
            "C) Prueba de coagulasa en plasma de conejo",
            "D) Prueba de hidrólisis de esculina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La adición de peróxido de hidrógeno ($H_2O_2$) genera burbujas de oxígeno en bacterias catalasa-positivas (*Staphylococcus*), diferenciándolas de las catalasa-negativas (*Streptococcus*)."
    },
    {
        id: 53,
        area: "Microbiología y Parasitología",
        pregunta: "¿Cuál es el agente causal de la tuberculosis y qué técnica de tinción especial se emplea para su visualización microscópica?",
        opciones: [
            "A) *Streptococcus pneumoniae* / Tinción de Gram",
            "B) *Mycobacterium tuberculosis* / Tinción de Ziehl-Neelsen (ácido-alcohol resistencia)",
            "C) *Treponema pallidum* / Microscopía de campo oscuro",
            "D) *Pseudomonas aeruginosa* / Tinción de endosporas"
        ],
        respuestaCorrecta: 1,
        explicacion: "*Mycobacterium tuberculosis* posee una pared rica en ácidos micólicos que le confieren resistencia a la decoloración ácida, haciéndolo visible mediante la tinción de Ziehl-Neelsen (bacilos ácido-alcohol resistentes)."
    },
    {
        id: 54,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué método se utiliza para determinar la concentración inhibitoria mínima (CIM) de un antibiótico frente a un aislamiento bacteriano en placa de agar?",
        opciones: [
            "A) Método de difusión en disco de Kirby-Bauer",
            "B) Dilución en caldo o en agar / E-test",
            "C) Hemaglutinación cuantitativa",
            "D) Ensayo de azul de metileno"
        ],
        respuestaCorrecta: 1,
        explicacion: "La CIM (Concentración Inhibitoria Mínima) se determina mediante técnicas de dilución en medio líquido o sólido, o bien utilizando tiras de gradiente de concentración (E-test), midiendo la menor concentración que inhibe el crecimiento visible."
    },
    {
        id: 55,
        area: "Microbiología y Parasitología",
        pregunta: "¿Cuál es el mecanismo de acción general de los antibióticos aminoglucósidos (como gentamicina) sobre las bacterias?",
        opciones: [
            "A) Inhibición de la síntesis de la pared celular al unirse a las PBP",
            "B) Inhibición de la síntesis proteica al unirse irreversiblemente a la subunidad ribosomal 30S",
            "C) Inhibición de la ADN girasa impidiendo la replicación",
            "D) Alteración de la permeabilidad de la membrana plasmática"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los aminoglucósidos se unen a la subunidad 30S ribosomal, provocando lecturas erróneas del ARNm e inhibiendo la síntesis proteica bacteriana, con un efecto típicamente bactericida."
    },
    {
        id: 56,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué estructura fúngica microscópica representa la forma de reproducción asexual característica de los mohos?",
        opciones: [
            "A) Endosporas bacterianas",
            "B) Conidios o esporas asexuales (conidiosporas, esporangiosporas)",
            "C) Plásmidos conjugativos",
            "D) Cistos protozoarios"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los hongos filamentosos (mohos) se reproducen a través de esporas asexuales, siendo los conidios y esporangiosporas las estructuras más comunes para su diseminación ambiental."
    },
    {
        id: 57,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué son los bacteriófagos?",
        opciones: [
            "A) Bacterias patógenas intracelulares obligadas",
            "B) Virus que infectan y se replican específicamente dentro de bacterias",
            "C) Enzimas líticas producidas por levaduras",
            "D) Toxinas bacterianas termoestables"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los bacteriófagos (o simplemente fagos) son virus especializados que parasitan células bacterianas, pudiendo tener ciclos líticos (destrucción celular) o lisogénicos."
    },
    {
        id: 58,
        area: "Microbiología y Parasitología",
        pregunta: "¿Cuál es la forma infectante clásica del parásito intestinal *Entamoeba histolytica* transmitida por vía fecal-oral?",
        opciones: [
            "A) Trofozoíto flagelado",
            "B) Quiste tetranucleado maduro",
            "C) Esquizonte hepático",
            "D) Huevo operculado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El quiste maduro de *Entamoeba histolytica* (que contiene cuatro núcleos) es la forma resistente al ambiente externo y responsable de la transmisión fecal-oral del parásito."
    },
    {
        id: 59,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué medio de cultivo selectivo y diferencial se utiliza comúnmente para el aislamiento de bacilos entéricos Gram negativos (enterobacterias), distinguiendo los fermentadores de lactosa?",
        opciones: [
            "A) Agar Sangre",
            "B) Agar MacConkey",
            "C) Caldo Tioglicolato",
            "D) Agar Sabouraud Dextrosa"
        ],
        respuestaCorrecta: 1,
        explicacion: "El agar MacConkey contiene sales biliares y cristal violeta para inhibir Gram positivas, y lactosa con rojo neutro para diferenciar colonias fermentadoras (rosas/rojas) de las no fermentadoras."
    },
    {
        id: 60,
        area: "Microbiología y Parasitología",
        pregunta: "¿Qué mecanismo de resistencia bacteriana involucra la inactivación enzimática de los antibióticos betalactámicos?",
        opciones: [
            "A) Modificación de las proteínas fijadoras de penicilina (PBP)",
            "B) Producción de enzimas beta-lactamasas que hidrolizan el anillo beta-lactámico",
            "C) Expulsión activa del fármaco mediante bombas de eflujo",
            "D) Disminución de la permeabilidad de las porinas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las bacterias resistentes pueden sintetizar betalactamasas, enzimas que rompen el enlace amida del anillo $\beta$-lactámico, inactivando el antibiótico antes de que alcance su blanco."
    },
    {
        id: 61,
        area: "Inmunología",
        pregunta: "¿Cuál es el isotipo de anticuerpo (inmunoglobulina) principal implicado en las reacciones de hipersensibilidad inmediata o mediada por alérgenos (anafilaxia)?",
        opciones: [
            "A) IgG",
            "B) IgM",
            "C) IgE",
            "D) IgA"
        ],
        respuestaCorrecta: 2,
        explicacion: "La IgE se une a receptores de alta afinidad en mastocitos y basófilos; la exposición posterior al alérgeno provoca la degranulación de histamina, causando reacciones alérgicas inmediatas."
    },
    {
        id: 62,
        area: "Inmunología",
        pregunta: "¿Qué células del sistema inmunitario adaptativo expresan en su superficie el correceptor CD4 y actúan como coordinadoras de la respuesta inmune liberando citocinas?",
        opciones: [
            "A) Linfocitos T citotóxicos",
            "B) Linfocitos T colaboradores (Helper)",
            "C) Células Natural Killer (NK)",
            "D) Macrófagos activados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los linfocitos T cooperadores (CD4+) reconocen antígenos presentados por moléculas del complejo mayor de histocompatibilidad clase II (CMH-II) y estimulan la activación de otras células inmunitarias."
    },
    {
        id: 63,
        area: "Inmunología",
        pregunta: "¿Qué técnica inmunológica cuantitativa utiliza una enzima unida a un anticuerpo para detectar y medir antígenos o anticuerpos en placas de microtitulación?",
        opciones: [
            "A) Western Blot",
            "B) Ensayo por inmunoabsorción ligado a enzimas (ELISA)",
            "C) Citometría de flujo",
            "D) Inmunoprecipitación radial"
        ],
        respuestaCorrecta: 1,
        explicacion: "ELISA (Enzyme-Linked Immunosorbent Assay) es una técnica analítica de alta sensibilidad que emplea anticuerpos marcados con enzimas para cuantificar analitos biológicos mediante reacciones colorimétricas."
    },
    {
        id: 64,
        area: "Inmunología",
        pregunta: "¿Cuál es la función principal del sistema del complemento en la inmunidad innata?",
        opciones: [
            "A) Sintetizar anticuerpos monoclonales específicos",
            "B) Opsonizar patógenos, promover la inflamación y formar el complejo de ataque a la membrana (CAM) para lisis celular",
            "C) Presentar antígenos peptídicos a los linfocitos T vírgenes",
            "D) Bloquear la replicación viral en el citosol"
        ],
        respuestaCorrecta: 1,
        explicacion: "El sistema del complemento es una cascada de proteínas plasmáticas que, al activarse, marca microbios (opsonización), recluta leucocitos (inflamación) y destruye bacterias formando poros osmóticos (CAM)."
    },
    {
        id: 65,
        area: "Inmunología",
        pregunta: "¿Qué diferencia fundamental existe entre la respuesta inmune innata y la adaptativa?",
        opciones: [
            "A) La innata es específica para cada patógeno y genera memoria inmunológica duradera",
            "B) La adaptativa es específica, posee memoria inmunológica y se desarrolla de forma más lenta ante la primera exposición",
            "C) La innata solo actúa en la cavidad oral",
            "D) La adaptativa carece de especificidad molecular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La inmunidad innata es inespecífica y actúa de inmediato; la adaptativa (linfocitos T y B) es altamente específica, requiere tiempo para activarse y genera memoria inmunológica de largo plazo."
    },
    {
        id: 66,
        area: "Inmunología",
        pregunta: "¿Qué tipo de inmunoglobulina es la principal secretada en mucosas (saliva, leche materna, lágrimas) para proteger contra infecciones locales?",
        opciones: [
            "A) IgD",
            "B) IgA dimérica",
            "C) IgG sérica",
            "D) IgE"
        ],
        respuestaCorrecta: 1,
        explicacion: "La IgA secretora (principalmente en forma dimérica unida a un componente secretor) predomina en las secreciones mucosas, impidiendo la adhesión de patógenos a los epitelios."
    },
    {
        id: 67,
        area: "Inmunología",
        pregunta: "¿Qué células son las principales presentadoras de antígenos profesionales (APCs) que activan a los linfocitos T vírgenes en los órganos linfoides secundarios?",
        opciones: [
            "A) Eritrocitos",
            "B) Células dendríticas, macrófagos y linfocitos B",
            "C) Plaquetas y neutrófilos",
            "D) Miocitos y adipocitos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las células dendríticas, macrófagos y linfocitos B expresan moléculas de CMH clase II y coestimuladoras, fagocitando o internalizando antígenos para presentarlos a los linfocitos T."
    },
    {
        id: 68,
        area: "Inmunología",
        pregunta: "¿Qué ocurre en una reacción de hipersensibilidad de tipo IV (retardada o mediada por células)?",
        opciones: [
            "A) Está mediada por complejos inmunes circulantes que precipitan en vasos",
            "B) Está mediada por linfocitos T sensibilizados y macrófagos, manifestándose típicamente 48-72 horas después (ej. prueba de la tuberculina)",
            "C) Ocurre en menos de 15 minutos por acción de anticuerpos IgE",
            "D) Involucra la destrucción de eritrocitos por anticuerpos IgG"
        ],
        respuestaCorrecta: 1,
        explicacion: "La hipersensibilidad tipo IV no depende de anticuerpos, sino de la activación de linfocitos T cooperadores y citotóxicos que liberan citocinas reclutando macrófagos (ej. dermatitis por contacto)."
    },
    {
        id: 69,
        area: "Inmunología",
        pregunta: "¿Cuál es el papel de los linfocitos B en la respuesta humoral?",
        opciones: [
            "A) Destruir células infectadas por virus mediante perforinas",
            "B) Diferenciarse en células plasmáticas secretoras de anticuerpos específicos frente a antígenos solubles o particulados",
            "C) Fagocitar bacterias piógenas en la sangre periférica",
            "D) Regular la presión arterial sistémica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Tras activarse por el antígeno y recibir señales de los linfocitos T, los linfocitos B se transforman en células plasmáticas altamente especializadas en la producción masiva de anticuerpos."
    },
    {
        id: 70,
        area: "Inmunología",
        pregunta: "¿Qué caracteriza a los anticuerpos monoclonales utilizados en terapia dirigida contra el cáncer?",
        opciones: [
            "A) Son una mezcla heterogénea de anticuerpos producidos por diferentes clones de células B",
            "B) Son homogéneos, derivados de un único clon celular y dirigidos específicamente contra un único epitopo antigénico",
            "C) No poseen capacidad de unión a antígenos tumorales",
            "D) Se obtienen directamente del suero de caballos hiperinmunizados"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los anticuerpos monoclonales se producen mediante tecnología de hibridomas o ingeniería genética, asegurando especificidad absoluta contra un epitopo blanco en células cancerígenas o dianas moleculares."
    },
    {
        id: 71,
        area: "Toxicología",
        pregunta: "¿Qué parámetro toxicológico cuantifica la dosis letal que causa la muerte al 50% de una población animal de prueba bajo condiciones estandarizadas?",
        opciones: [
            "A) Concentración Efectiva 50 ($EC_{50}$)",
            "B) Dosis Letal 50 ($DL_{50}$ o $LD_{50}$)",
            "C) Concentración Máxima Tolerada",
            "D) Dosis Diaria Admisible (DDA)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La $DL_{50}$ (Dosis Letal 50) es el estadístico clásico de toxicidad aguda que indica la cantidad de sustancia capaz de causar la muerte a la mitad de los animales de experimentación."
    },
    {
        id: 72,
        area: "Toxicología",
        pregunta: "¿Cuál es el antídoto específico de elección utilizado en la intoxicación aguda por paracetamol (acetaminofén) para prevenir el daño hepático fulminante?",
        opciones: [
            "A) Naloxona",
            "B) N-acetilcisteína (NAC)",
            "C) Flumazenil",
            "D) Atropina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La N-acetilcisteína actúa como un donador de grupos sulfhidrilo (-SH), reponiendo las reservas hepáticas de glutatión para neutralizar el metabolito tóxico NAPQI derivado del paracetamol."
    },
    {
        id: 73,
        area: "Toxicología",
        pregunta: "¿Qué mecanismo de toxicidad caracteriza a los organofosforados (plaguicidas)?",
        opciones: [
            "A) Inhibición irreversible de la enzima acetilcolinesterasa, provocando acumulación de acetilcolina",
            "B) Bloqueo de los canales de sodio dependientes de voltaje en el axón",
            "C) Desacoplamiento de la fosforilación oxidativa mitocondrial",
            "D) Inhibición competitiva de los receptores GABA en el SNC"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los organofosforados fosforilan el sitio activo de la acetilcolinesterasa, inactivándola irreversiblemente, lo que genera hiperestimulación colinérgica muscarínica y nicotínica."
    },
    {
        id: 74,
        area: "Toxicología",
        pregunta: "¿Qué estudia la toxicocinética en comparación con la toxicodinamia?",
        opciones: [
            "A) La toxicocinética estudia el destino del tóxico en el organismo (ADME), mientras que la toxicodinamia analiza el mecanismo de acción y los efectos tóxicos celulares",
            "B) La toxicocinética evalúa las mutaciones genéticas y la toxicodinamia el peso de los órganos",
            "C) Ambas son sinónimos exactos en farmacología clínica",
            "D) La toxicocinética se enfoca exclusivamente en metales pesados"
        ],
        respuestaCorrecta: 0,
        explicacion: "La toxicocinética describe los procesos ADME del tóxico (lo que el cuerpo le hace al tóxico), en tanto que la toxicodinamia analiza la interacción molecular y el daño fisiopatológico (lo que el tóxico le hace al cuerpo)."
    },
    {
        id: 75,
        area: "Toxicología",
        pregunta: "¿Qué prueba in vitro de corta duración se emplea mundialmente para evaluar el potencial mutágeno (teratogénico/carcinógeno) de compuestos químicos utilizando cepas mutantes de *Salmonella typhimurium*?",
        opciones: [
            "A) Ensayo del cometa",
            "B) Prueba de Ames",
            "C) Ensayo de micronúcleos",
            "D) Aberraciones cromosómicas en linfocitos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba de Ames utiliza cepas auxótrofas de *Salmonella typhimurium* incapaces de sintetizar histidina; si un compuesto induce reversiones a prototrofía, se considera potencialmente mutágeno."
    },
    {
        id: 76,
        area: "Toxicología",
        pregunta: "¿Cuál es el antídoto específico para revertir la depresión respiratoria grave inducida por sobredosis de opioides (ej. morfina, heroína)?",
        opciones: [
            "A) Flumazenil",
            "B) Naloxona",
            "C) Azul de metileno",
            "D) Deferoxamina"
        ],
        respuestaCorrecta: 1,
        explicacion: "La naloxona es un antagonista competitivo puro de los receptores opioides que revierte de manera rápida y eficaz los efectos depresores centrales y respiratorios de los opioides."
    },
    {
        id: 77,
        area: "Toxicología",
        pregunta: "¿Qué describe la carcinogenicidad en toxicología a nivel mecanicista?",
        opciones: [
            "A) La inducción de proliferación celular descontrolada por agentes genotóxicos (iniciadores) o no genotóxicos (promotores)",
            "B) La destrucción de la microbiota intestinal por antibióticos de amplio espectro",
            "C) La precipitación de sales biliares en la vesícula",
            "D) La hipoglucemia refractaria por daño pancreático"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los carcinógenos químicos se dividen en genotóxicos (mutágenos que dañan el ADN directamente) y no genotóxicos (promotores que estimulan la proliferación celular o inhiben la apoptosis)."
    },
    {
        id: 78,
        area: "Toxicología",
        pregunta: "¿Qué metal pesado tóxico genera afinidad por los grupos sulfhidrilo de proteínas y enzimas, causando encefalopatía, anemia y líneas de Burton en las encías?",
        opciones: [
            "A) Plomo",
            "B) Mercurio elemental",
            "C) Arsénico trivalente",
            "D) Cadmio"
        ],
        respuestaCorrecta: 0,
        explicacion: "La intoxicación por plomo (saturnismo) altera la síntesis de hemo al inhibir enzimas como la ALA deshidratasa y ferroquelatasa, uniéndose fuertemente a grupos tiol tisulares."
    },
    {
        id: 79,
        area: "Toxicología",
        pregunta: "¿Cuál es el objetivo principal de realizar estudios de toxicidad a dosis repetidas (subcrónica o crónica) en la industria farmacéutica?",
        opciones: [
            "A) Determinar la dosis letal en 24 horas",
            "B) Identificar los órganos blanco de toxicidad y establecer niveles sin efecto adverso observable (NOAEL)",
            "C) Evaluar la estabilidad química del fármaco en envases de polietileno",
            "D) Medir la solubilidad acuosa a diferentes pH"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los estudios a dosis repetidas permiten conocer la toxicidad acumulativa, identificar los órganos afectados y calcular el NOAEL (No Observed Adverse Effect Level) para fijar márgenes de seguridad en humanos."
    },
    {
        id: 80,
        area: "Toxicología",
        pregunta: "¿Qué alteración hematológica provoca la exposición crónica al benceno en la médula ósea?",
        opciones: [
            "A) Policitemia vera",
            "B) Aplasia medular y predisposición a leucemia mieloide aguda",
            "C) Anemia megaloblástica por déficit de vitamina B12",
            "D) Trombocitosis esencial"
        ],
        respuestaCorrecta: 1,
        explicacion: "El benceno es un reconocido carcinógeno humano y mielotóxico que causa depresión de la médula ósea, pancitopenia y riesgo incrementado de leucemia mieloide aguda."
    },
    {
        id: 81,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué sistema de expresión se utiliza comúnmente para la producción a gran escala de proteínas recombinantes humanas complejas que requieren glicosilación idéntica a la nativa?",
        opciones: [
            "A) Células bacterianas de *Escherichia coli*",
            "B) Células de mamífero en cultivo (ej. Ovario de Hámster Chino - CHO)",
            "C) Levaduras *Saccharomyces cerevisiae*",
            "D) Fagos lisogénicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las líneas celulares de mamífero (como CHO) poseen la maquinaria enzimática post-traduccional idónea para realizar el plegamiento correcto y la glicosilación compleja que requieren los biofármacos terapéuticos."
    },
    {
        id: 82,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Cuál es la función de la transcriptasa inversa en la tecnología de ADN recombinante?",
        opciones: [
            "A) Cortar el ADN en secuencias palindrómicas específicas",
            "B) Sintetizar una hebra de ADN complementario (ADNc) a partir de una plantilla de ARN mensajero",
            "C) Unir extremos romos de fragmentos de ADN",
            "D) Transcribir ADN genómico en ARN mensajero in vitro"
        ],
        respuestaCorrecta: 1,
        explicacion: "La transcriptasa inversa (enzima retroviral) se utiliza para generar ADNc desprovisto de intrones a partir de ARNm purificado, siendo clave en la clonación de genes eucariotas."
    },
    {
        id: 83,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué son los anticuerpos biespecíficos en el contexto de la inmunoterapia recombinante?",
        opciones: [
            "A) Anticuerpos que reconocen dos especies animales diferentes",
            "B) Moléculas diseñadas con dos sitios de unión a antígenos distintos, permitiendo conectar por ejemplo una célula tumoral con un linfocito T",
            "C) Anticuerpos conjugados con isótopos radiactivos alfa",
            "D) Inmunoglobulinas carentes de cadena ligera"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los anticuerpos biespecíficos son construcciones de ingeniería de proteínas con dos brazos de distinta especificidad, capaces de aproximar físicamente efectores inmunes a las células malignas."
    },
    {
        id: 84,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué técnica cromatográfica se prefiere para la purificación de anticuerpos monoclonales a partir de caldos de fermentación basándose en la afinidad específica por la región Fc?",
        opciones: [
            "A) Cromatografía de intercambio iónico",
            "B) Cromatografía de afinidad con Proteína A o G",
            "C) Cromatografía de exclusión por tamaño",
            "D) Cromatografía de fase inversa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La proteína A (o G) inmovilizada en soportes cromatográficos se une selectivamente a la región Fc de las inmunoglobulinas G, logrando purezas cercanas al 95% en un solo paso de captura."
    },
    {
        id: 85,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué es la terapia génica *ex vivo*?",
        opciones: [
            "A) La administración directa del vector viral en el torrente sanguíneo del paciente",
            "B) La extracción de células del paciente, su modificación genética en laboratorio mediante vectores y su posterior reintroducción al organismo",
            "C) La edición directa del genoma embrionario en fase de blastocisto",
            "D) El uso de oligonucleótidos antisentido tópicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "En la terapia génica *ex vivo*, las células (ej. células madre hematopoyéticas o linfocitos T) se extraen, se transducen con un vector portador del gen terapéutico en cultivo y se reinfunden al paciente."
    },
    {
        id: 86,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Cuál es el papel de las enzimas de restricción (endonucleasas de restricción) en la ingeniería genética?",
        opciones: [
            "A) Ligar fragmentos de ADN con pérdida de nucleótidos",
            "B) Reconocer secuencias palindrómicas específicas en el ADN y cortar los enlaces fosfodiéster generando extremos cohesivos o romos",
            "C) Degradar exclusivamente ARN mensajero contaminante",
            "D) Replicar plásmidos bacterianos a 37 °C"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las endonucleasas de restricción cortan el ADN bicatenario en sitios de reconocimiento específicos, permitiendo la generación de fragmentos compatibles para clonación en plásmidos."
    },
    {
        id: 87,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué vectores virales se emplean frecuentemente en terapia génica por su capacidad para infectar células en división y no división integrando su material genético de forma estable?",
        opciones: [
            "A) Retrovirus",
            "B) Lentivirus (derivados de VIH)",
            "C) Bacteriófago T4",
            "D) Virus de la gripe inactivado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los lentivirus son vectores derivados de retrovirus capaces de infectar tanto células quiescentes como en división, integrando permanentemente el transgén en el genoma de la célula huésped."
    },
    {
        id: 88,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué representa la fermentación en cultivo Fed-Batch (lote alimentado) en la producción biotecnológica?",
        opciones: [
            "A) Un sistema cerrado donde no se añaden nutrientes tras la inoculación",
            "B) Un sistema semicontinuo donde se suministran nutrientes de manera controlada a lo largo del cultivo para prolongar la fase de crecimiento y aumentar la densidad celular",
            "C) Un proceso donde se extrae producto y medio de forma continua manteniendo volumen constante",
            "D) Una fermentación anaerobia exclusiva para etanol"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cultivo Fed-Batch evita la limitación de nutrientes o la inhibición por exceso de sustrato mediante la alimentación programada de la biorreactor, logrando altos rendimientos de biomasa o proteína."
    },
    {
        id: 89,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué son los oligonucleótidos antisentido (ASO)?",
        opciones: [
            "A) Secuencias cortas de ADN sintético diseñadas para unirse por complementariedad al ARNm blanco, bloqueando su traducción o induciendo su degradación",
            "B) Enzimas proteolíticas que degradan anticuerpos monoclonales",
            "C) Proteínas recombinantes utilizadas como vacunas subunitarias",
            "D) Plásmidos de resistencia a antibióticos biexpresados"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los oligonucleótidos antisentido son cadenas cortas de nucleótidos modificados químicamente que hibridan con el ARNm de interés, modulando la expresión génica mediante la inhibición traduccional."
    },
    {
        id: 90,
        area: "Biotecnología Farmacéutica",
        pregunta: "¿Qué prueba de control analítico es crucial para asegurar la ausencia de contaminantes pirógenos bacterianos en medicamentos biotecnológicos inyectables?",
        opciones: [
            "A) Ensayo de pirógenos en conejos o prueba de Lisado de Amebocitos de Limulus (LAL)",
            "B) Determinación de punto de fusión",
            "C) Cromatografía de gases con detector FID",
            "D) Prueba de friabilidad mecánica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Lisado de Amebocitos de Limulus (LAL) detecta endotoxinas bacterianas a niveles ultra-bajos mediante la coagulación enzimática del lisado de sangre del cangrejo herradura, garantizando la seguridad parenteral."
    },
    {
        id: 91,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "En México, ¿cu cuál es la norma oficial mexicana (NOM) que establece los requisitos mínimos para la fabricación de medicamentos en el país (Buenas Prácticas de Fabricación - BPF)?",
        opciones: [
            "A) NOM-059-SSA1",
            "B) NOM-073-SSA1",
            "C) NOM-164-SSA1",
            "D) NOM-220-SSA1"
        ],
        respuestaCorrecta: 0,
        explicacion: "La NOM-059-SSA1 establece los requisitos de Buenas Prácticas de Fabricación para establecimientos dedicados a la fabricación de medicamentos y materias primas para la salud en México."
    },
    {
        id: 92,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué comprende la validación de un proceso farmacéutico según las normativas vigentes?",
        opciones: [
            "A) La revisión aleatoria del empaque secundario en el almacén",
            "B) La evidencia documentada que demuestra que un proceso opera consistentemente dentro de los parámetros establecidos para entregar un producto con la calidad requerida",
            "C) La calibración anual exclusiva de balanzas analíticas",
            "D) La aprobación del diseño arquitectónico por protección civil"
        ],
        respuestaCorrecta: 1,
        explicacion: "La validación de procesos es la demostración científica y documentada de que un método o proceso manufacturero es capaz de reproducir sistemáticamente lotes que cumplen con las especificaciones de calidad."
    },
    {
        id: 93,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué tipo de estabilidad regulatoria se exige para el otorgamiento del registro sanitario de un nuevo medicamento en la zona climática IVb (cálida y húmeda como México)?",
        opciones: [
            "A) Estabilidad natural a largo plazo bajo condiciones climáticas reales de la zona y estudios acelerados",
            "B) Estabilidad de congelación a -20 °C por 3 meses",
            "C) Únicamente estudios de fotestabilidad",
            "D) Ensayos de disolución en medio ácido a 50 °C"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las guías de estabilidad (como NOM-073-SSA1 / ICH Q1A) exigen estudios a largo plazo (temperatura y humedad correspondientes a la zona climática) y estudios acelerados para respaldar la vida de anaquel."
    },
    {
        id: 94,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué es un estudio de calificación de equipos farmacéuticos en sus fases IQ, OQ y PQ?",
        opciones: [
            "A) IQ: Calificación de Instalación; OQ: Calificación de Operación; PQ: Calificación de Desempeño",
            "B) IQ: Calificación de Ingresos; OQ: Calificación Operativa de Calidad; PQ: Pruebas Químicas",
            "C) IQ: Inspección Química; OQ: Optimización de Calidad; PQ: Pureza del Producto",
            "D) IQ: Calibración Interna; OQ: Operación de Quirófanos; PQ: Protocolo de Quejas"
        ],
        respuestaCorrecta: 0,
        explicacion: "La calificación comprende la Instalación (IQ), Operación (OQ) y Desempeño (PQ), asegurando que el equipo esté correctamente instalado, opere conforme a especificaciones y funcione bajo condiciones reales de producción."
    },
    {
        id: 95,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué define la farmacovigilancia según la Ley General de Salud y normativas aplicables?",
        opciones: [
            "A) La inspección de precios de medicamentos en farmacias privadas",
            "B) La ciencia y las actividades relativas a la detección, evaluación, comprensión y prevención de los eventos adversos, sospechas de reacciones adversas o cualquier otro problema de seguridad relacionado con los medicamentos",
            "C) El control de inventarios de psicotrópicos y estupefacientes caducos",
            "D) La auditoría fiscal a laboratorios farmacéuticos multinacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La farmacovigilancia monitorea la seguridad post-comercialización de los medicamentos para identificar riesgos no detectados previamente y salvaguardar la salud pública."
    },
    {
        id: 96,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué documento legal y técnico otorga la Secretaría de Salud (a través de COFEPRIS) para autorizar la comercialización de un medicamento en territorio mexicano?",
        opciones: [
            "A) Certificado de Buenas Prácticas de Fabricación",
            "B) Registro Sanitario",
            "C) Licencia Sanitaria de Funcionamiento",
            "D) Certificado Analítico de Lote"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Registro Sanitario es la autorización oficial emitida por la autoridad sanitaria tras evaluar el expediente de eficacia, seguridad, calidad y farmacotecnia del medicamento."
    },
    {
        id: 97,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Cuál es el propósito de la validación de limpieza en una planta farmacéutica?",
        opciones: [
            "A) Comprobar que los pisos y paredes brillen después del turno nocturno",
            "B) Demostrar documentalmente que los procedimientos de limpieza eliminan eficazmente los residuos de principios activos y agentes de limpieza, evitando la contaminación cruzada",
            "C) Reducir el consumo de agua purificada en un 50%",
            "D) Certificar el aire acondicionado de las oficinas administrativas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La validación de limpieza asegura que los equipos multiproducto queden libres de trazas del fármaco previo y de detergentes por debajo de límites seguros establecidos, evitando la contaminación cruzada."
    },
    {
        id: 98,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué es la trazabilidad (traza) metrológica en el laboratorio analítico de control de calidad?",
        opciones: [
            "A) El registro de las firmas de los analistas en la bitácora de entrada",
            "B) La propiedad de un resultado de medición por la cual pueda relacionarse con referencias nacionales o internacionales establecidas a través de una cadena ininterrumpida de calibraciones",
            "C) El seguimiento de las cajas de cartón desde la planta hasta la farmacia",
            "D) La fecha de expiración de los reactivos químicos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La trazabilidad metrológica garantiza que las mediciones analíticas sean exactas y comparables globalmente al estar referenciadas a patrones primarios reconocidos."
    },
    {
        id: 99,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Qué es una desviación crítica en un proceso de manufactura farmacéutica bajo BPF?",
        opciones: [
            "A) Un retraso de 5 minutos en el cambio de turno del personal",
            "B) Una deficiencia que afecta directamente la calidad, seguridad o eficacia del producto, pudiendo comprometer la salud del paciente",
            "C) Un error tipográfico menor en la etiqueta de cartón secundario",
            "D) El cambio de proveedor de papelería de oficina"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una desviación crítica tiene impacto directo sobre el producto farmacéutico (ej. falla en la esterilización, contaminación microbiológica), requiriendo investigación exhaustiva y rechazo del lote si procede."
    },
    {
        id: 100,
        area: "Legislación y Validación Farmacéutica",
        pregunta: "¿Cuál es la función del sistema de gestión de calidad (SGC) en un establecimiento farmacéutico según la NOM-059?",
        opciones: [
            "A) Aumentar las ventas de productos en el mercado internacional",
            "B) Asegurar que los productos farmacéuticos sean diseñados y fabricados de conformidad con los requisitos de sus autorizaciones, garantizando su inocuidad y eficacia",
            "C) Eximir al laboratorio de auditorías gubernamentales periódicas",
            "D) Sustituir el análisis fisicoquímico por inspección visual"
        ],
        respuestaCorrecta: 1,
        explicacion: "El SGC integra la política de calidad, las BPF, el control de cambios, las auditorías y la gestión de riesgos para asegurar que cada medicamento cumpla con los estándares regulatorios y sanitarios."
    },
    {
        id: 101,
        area: "Sección Transversal - Metodología de la Investigación y Estadística",
        pregunta: "¿Qué prueba estadística paramétrica se utiliza para comparar las medias de dos grupos independientes cuando los datos siguen una distribución normal?",
        opciones: [
            "A) Prueba U de Mann-Whitney",
            "B) Prueba t de Student para muestras independientes",
            "C) Coeficiente de correlación de Spearman",
            "D) Prueba de Chi-cuadrada de independencia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prueba t de Student para muestras independientes evalúa si existe diferencia estadísticamente significativa entre las medias de dos grupos poblacionales independientes bajo normalidad y homocedasticidad."
    },
    {
        id: 102,
        area: "Sección Transversal - Metodología de la Investigación y Estadística",
        pregunta: "¿Qué indica un valor de p (valor de probabilidad) menor a 0.05 en una prueba de hipótesis estadística?",
        opciones: [
            "A) Que la hipótesis nula es verdadera con un 95% de probabilidad",
            "B) Que existe evidencia estadística suficiente para rechazar la hipótesis nula, considerándose el resultado estadísticamente significativo",
            "C) Que el tamaño de la muestra fue insuficiente para el análisis",
            "D) Que hay un error sistemático severo en la medición instrumental"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un valor de p < 0.05 indica que la probabilidad de observar los resultados obtenidos (o más extremos) por mero azar, asumiendo que la hipótesis nula es cierta, es inferior al 5%, por lo que se rechaza."
    },
    {
        id: 103,
        area: "Sección Transversal - Metodología de la Investigación y Estadística",
        pregunta: "¿Qué tipo de estudio epidemiológico o clínico se caracteriza por ser observacional, retrospectivo y comparar sujetos con una enfermedad (casos) con sujetos sin la enfermedad (controles) para evaluar exposiciones pasadas?",
        opciones: [
            "A) Ensayo clínico aleatorizado",
            "B) Estudio de casos y controles",
            "C) Estudio de cohorte prospectiva",
            "D) Estudio transversal descriptivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los estudios de casos y controles son retrospectivos: parten de la presencia o ausencia de la enfermedad para indagar hacia atrás en el tiempo los factores de exposición asociados."
    },
    {
        id: 104,
        area: "Sección Transversal - Metodología de la Investigación y Estadística",
        pregunta: "¿Qué es el sesgo de selección en el diseño de investigaciones científicas?",
        opciones: [
            "A) Un error en la calibración del espectrofotómetro",
            "B) Un error sistemático introducido al seleccionar o asignar los participantes a los grupos de estudio, distorsionando la verdadera asociación",
            "C) La variabilidad aleatoria en las mediciones biológicas",
            "D) La pérdida de seguimiento de pacientes durante un ensayo clínico"
        ],
        respuestaCorrecta: 1,
        explicacion: "El sesgo de selección ocurre cuando la forma en que se reclutan o eligen los sujetos de estudio difiere sistemáticamente entre los grupos, comprometiendo la validez externa e interna."
    },
    {
        id: 105,
        area: "Sección Transversal - Metodología de la Investigación y Estadística",
        pregunta: "¿Qué mide el coeficiente de correlación de Pearson ($r$)?",
        opciones: [
            "A) La diferencia de medias entre dos poblaciones",
            "B) La fuerza y dirección de la asociación lineal entre dos variables cuantitativas continuas",
            "C) La pendiente de la curva de calibración no lineal",
            "D) La probabilidad de ocurrencia de un evento adverso"
        ],
        respuestaCorrecta: 1,
        explicacion: "El coeficiente de Pearson cuantifica la correlación lineal entre dos variables métricas, tomando valores entre -1 y +1, donde 0 indica ausencia de relación lineal."
    },
    {
        id: 106,
        area: "Sección Transversal - Ética y Bioética",
        pregunta: "¿Qué principio fundamental de la bioética clínica establece la obligación de no dañar intencionadamente al paciente o sujeto de investigación (Primum non nocere)?",
        opciones: [
            "A) Autonomía",
            "B) Beneficencia",
            "C) No maleficencia",
            "D) Justicia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio de no maleficencia exige al profesional de la salud evitar cualquier acción que cause daño físico, psicológico o moral al paciente o participante en estudios clínicos."
    },
    {
        id: 107,
        area: "Sección Transversal - Ética y Bioética",
        pregunta: "¿En qué consiste el consentimiento informado en la investigación clínica con seres humanos?",
        opciones: [
            "A) En la firma obligatoria de un formato administrativo sin importar si el paciente comprende el estudio",
            "B) En el proceso voluntario y documentado donde el sujeto comprende los riesgos, beneficios, procedimientos y objetivos de la investigación antes de aceptar participar",
            "C) En la autorización exclusiva emitido por el comité de ética institucional sin consultar al paciente",
            "D) En un contrato comercial de compraventa de medicamentos experimentales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El consentimiento informado es un diálogo ético y legal que garantiza la autonomía del paciente, asegurando que conozca la naturaleza, riesgos y beneficios del estudio antes de decidir libremente su participación."
    },
    {
        id: 108,
        area: "Sección Transversal - Ética y Bioética",
        pregunta: "¿Qué rol desempeña un Comité de Ética en Investigación (CEI) en un hospital o centro de desarrollo farmacéutico?",
        opciones: [
            "A) Auditar los estados financieros de la empresa farmacéutica",
            "B) Evaluar, aprobar y supervisar los protocolos de investigación en humanos para proteger los derechos, seguridad y bienestar de los participantes",
            "C) Realizar pruebas de control de calidad fisicoquímico a materias primas",
            "D) Determinar el precio de venta al público de los nuevos fármacos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Comités de Ética evalúan rigurosamente los protocolos clínicos para velar por que se respeten los principios bioéticos y las normativas internacionales de protección a sujetos de investigación."
    },
    {
        id: 109,
        area: "Sección Transversal - Ética y Bioética",
        pregunta: "¿Qué dilema ético surge ante el uso de animales de experimentación en la investigación preclínica farmacéutica?",
        opciones: [
            "A) La imposibilidad de medir variables bioquímicas en tejidos",
            "B) La controversia entre la necesidad de validar la seguridad y eficacia de nuevos fármacos frente al respeto y bienestar animal",
            "C) El elevado costo de los reactivos cromatográficos",
            "D) La falta de correlación celular en cultivos bacterianos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El dilema ético radica en equilibrar la necesidad científica de modelos animales para evaluar toxicidad con el principio humanitario de minimizar el sufrimiento, aplicando las reglas de las 3Rs (Reemplazo, Reducción y Refinamiento)."
    },
    {
        id: 110,
        area: "Sección Transversal - Ética y Bioética",
        pregunta: "¿Qué implica el principio de justicia en la bioética aplicada a la distribución de medicamentos y recursos sanitarios?",
        opciones: [
            "A) Distribuir los recursos sanitarios y tratamientos de manera equitativa, sin discriminación y garantizando el acceso a las poblaciones vulnerables",
            "B) Asignar los fármacos innovadores exclusivamente a los pacientes con mayor capacidad económica",
            "C) Priorizar los ensayos clínicos en países en vías de desarrollo por menores costos regulatorios",
            "D) Ocultar los resultados negativos de los ensayos clínicos para proteger la inversión"
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de justicia exige equidad en la asignación de cargas y beneficios de la salud, asegurando que los tratamientos y la participación en investigación no discriminen injustamente."
    },
    {
        id: 111,
        area: "Sección Transversal - Gestión y Calidad Analítica",
        pregunta: "¿Qué es una carta de control de calidad (Gráfico de Levey-Jennings) en el laboratorio analítico?",
        opciones: [
            "A) Un organigrama del personal técnico del laboratorio",
            "B) Una gráfica secuencial temporal que evalúa la estabilidad y precisión de un método analítico mediante el monitoreo de muestras de control frente a límites de advertencia y acción (media ± 2SD y ± 3SD)",
            "C) Un inventario de solventes orgánicos almacenados en bodega",
            "D) El registro de temperaturas de los refrigeradores de vacunas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cartas de Levey-Jennings permiten el control estadístico de procesos analíticos en tiempo real, detectando desviaciones sistemáticas o errores aleatorios mediante reglas de control (ej. reglas de Westgard)."
    },
    {
        id: 112,
        area: "Sección Transversal - Gestión y Calidad Analítica",
        pregunta: "¿Cuál es la diferencia fundamental entre exactitud y precisión en una medición analítica?",
        opciones: [
            "A) Exactitud es la cercanía del valor medido al valor real/verdadero; precisión es la concordancia entre réplicas de mediciones independientes",
            "B) Exactitud es sinónimo de desviación estándar; precisión es el error sistemático",
            "C) La exactitud solo se aplica a métodos microbiológicos y la precisión a volumetrías",
            "D) No existe diferencia conceptual entre ambos términos"
        ],
        respuestaCorrecta: 0,
        explicacion: "La exactitud refleja el grado de concordancia con el valor verdadero (ausencia de sesgo), mientras que la precisión mide la dispersión o repetibilidad entre mediciones independientes."
    },
    {
        id: 113,
        area: "Sección Transversal - Gestión y Calidad Analítica",
        pregunta: "¿Qué norma internacional ISO especifica los requisitos generales para la competencia de los laboratorios de ensayo y calibración?",
        opciones: [
            "A) ISO 9001",
            "B) ISO/IEC 17025",
            "C) ISO 14001",
            "D) ISO 45001"
        ],
        respuestaCorrecta: 1,
        explicacion: "La norma ISO/IEC 17025 establece los criterios de competencia técnica, imparcialidad y aseguramiento de la calidad aplicables a laboratorios de ensayo y calibración analítica."
    },
    {
        id: 114,
        area: "Sección Transversal - Gestión y Calidad Analítica",
        pregunta: "¿Qué es un blanco analítico (blank) y para qué sirve en los procedimientos cromatográficos o espectrofotométricos?",
        opciones: [
            "A) Una muestra diluida de principio activo al 10%",
            "B) Una muestra que contiene todos los reactivos del ensayo excepto el analito, utilizada para corregir señales de fondo o interferencias del sistema",
            "C) El estándar de referencia primario certificado por la farmacopea",
            "D) Un control microbiológico de esterilidad en caldo nutritivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El blanco analítico se procesa de idéntica forma que las muestras para eliminar la contribución de impurezas de reactivos o ruido instrumental en la lectura final."
    },
    {
        id: 115,
        area: "Sección Transversal - Gestión y Calidad Analítica",
        pregunta: "¿Qué es la robustez de un método analítico durante su validación según la guía ICH Q2?",
        opciones: [
            "A) La capacidad del método para resistir cambios pequeños pero deliberados en los parámetros operativos (ej. pH, temperatura, flujo), indicando su confiabilidad en uso rutinario",
            "B) La sensibilidad extrema a variaciones de voltaje en el laboratorio",
            "C) La capacidad de detectar concentraciones por debajo de 1 parte por billón",
            "D) El tiempo requerido para completar una corrida cromatográfica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La robustez evalúa la susceptibilidad del método analítico ante variaciones menores en las condiciones experimentales, garantizando su fiabilidad operativa en diferentes laboratorios."
    },
    {
        id: 116,
        area: "Sección Transversal - Seguridad e Higiene",
        pregunta: "¿Cuál es la función principal de una campana de flujo laminar horizontal en un laboratorio farmacéutico o microbiológico estéril?",
        opciones: [
            "A) Proteger al operador frente a aerosoles biológicos peligrosos mediante presión negativa",
            "B) Proteger el producto o muestra frente a la contaminación ambiental mediante una corriente de aire estéril filtrado por HEPA que fluye hacia el operador",
            "C) Almacenar solventes inflamables bajo atmósfera inerte de nitrógeno",
            "D) Esterilizar material quirúrgico mediante calor seco a 200 °C"
        ],
        respuestaCorrecta: 1,
        explicacion: "El flujo laminar horizontal protege el producto al soplar aire limpio sobre la superficie de trabajo hacia el exterior; cabe destacar que no protege al operador (para patógenos peligrosos se usan gabinetes de bioseguridad vertical)."
    },
    {
        id: 117,
        area: "Sección Transversal - Seguridad e Higiene",
        pregunta: "¿Qué indican los pictogramas del Sistema Globalmente Harmonizado (SGH) con un símbolo de calavera y tibias cruzadas en los reactivos químicos?",
        opciones: [
            "A) Sustancia corrosiva que destruye metales y piel",
            "B) Toxicidad aguda severa (peligro mortal por ingestión, contacto cutáneo o inhalación)",
            "C) Sustancia comburente promotora de incendios",
            "D) Peligro para el medio ambiente acuático"
        ],
        respuestaCorrecta: 1,
        explicacion: "El pictograma de calavera y tibias cruzadas del SGH advierte sobre toxicidad aguda de categoría alta, representando un riesgo letal inminente en caso de exposición."
    },
    {
        id: 118,
        area: "Sección Transversal - Seguridad e Higiene",
        pregunta: "¿Qué equipo de protección personal (EPP) y manejo de residuos corresponde al trabajo con solventes orgánicos volátiles e inflamables (como acetonitrilo o metanol)?",
        opciones: [
            "A) Uso de gabinetes de extracción de gases (campanas de humos), guantes de nitrilo y eliminación en contenedores específicos de residuos peligrosos orgánicos",
            "B) Uso de cubrebocas quirúrgicos simples y descarga directa al drenaje municipal",
            "C) Almacenamiento en frascos de vidrio expuestos a la luz solar directa junto a fuentes de calor",
            "D) Uso de delantales de plomo para radiación ionizante"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los solventes inflamables y tóxicos deben manipularse bajo campanas de extracción de vapores, con EPP adecuado y disponerse en contenedores especiales para residuos químicos peligrosos."
    },
    {
        id: 119,
        area: "Sección Transversal - Seguridad e Higiene",
        pregunta: "¿Qué se debe hacer en caso de un derrame accidental de ácido clorhídrico concentrado en la plancha de trabajo del laboratorio?",
        opciones: [
            "A) Neutralizar inmediatamente con una base fuerte concentrada sin diluir",
            "B) Delimitar la zona, usar equipo de protección, neutralizar con un agente alcalino débil (ej. bicarbonato de sodio) y absorber con material inerte",
            "C) Secar con papel absorbente común y desecharlo en la basura municipal",
            "D) Ventilar el área cerrando las puertas y encendiendo un mechero Bunsen"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los derrames de ácidos fuertes requieren neutralización controlada con sustancias alcalinas débiles para evitar reacciones exotérmicas violentas, utilizando kits de derrames y EPP adecuado."
    },
    {
        id: 120,
        area: "Sección Transversal - Seguridad e Higiene",
        pregunta: "¿Qué finalidad tiene la Hoja de Datos de Seguridad (HDS / MSDS) de un producto químico en el entorno industrial y de laboratorio?",
        opciones: [
            "A) Informar detalladamente sobre las propiedades físico-químicas, riesgos para la salud, medidas de primeros auxilios, manejo seguro y disposición de residuos de la sustancia",
            "B) Establecer el precio de compra y los proveedores internacionales autorizados",
            "C) Indicar la ruta de síntesis orgánica detallada paso a paso",
            "D) Garantizar que el reactivo está libre de impuestos de importación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La HDS (bajo formato SGH) es un documento técnico obligatorio que provee información crucial para la seguridad, manejo, almacenamiento y respuesta ante emergencias con sustancias químicas."
    }
];