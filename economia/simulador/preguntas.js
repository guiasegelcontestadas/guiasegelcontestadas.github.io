const bancoPreguntas = [
    {
        id: 1,
        area: "Microeconomía",
        pregunta: "¿Qué representa la tasa marginal de sustitución (TMS) entre dos bienes en la teoría del consumidor?",
        opciones: [
            "A) La pendiente de la línea de restricciones presupuestarias del consumidor",
            "B) La cantidad de un bien que un consumidor está dispuesto a sacrificar para obtener una unidad adicional del otro, manteniendo constante su utilidad",
            "C) La relación de precios relativos en el equilibrio de mercado",
            "D) El cociente entre las productividades marginales de los factores productivos"
        ],
        respuestaCorrecta: 1,
        explicacion: "La TMS mide la relación de intercambio subjetiva a lo largo de una curva de indiferencia, reflejando la disposición marginal a pagar en términos de bienes."
    },
    {
        id: 2,
        area: "Macroeconomía",
        pregunta: "En el modelo IS-LM, ¿qué efecto genera una expansión fiscal (aumento del gasto público) sobre la tasa de interés y el ingreso de equilibrio?",
        opciones: [
            "A) Incrementa tanto la tasa de interés como el ingreso de equilibrio",
            "B) Reduce la tasa de interés y eleva el ingreso de equilibrio",
            "C) No genera ningún cambio en la tasa de interés debido a la trampa de liquidez",
            "D) Reduce tanto el ingreso como la tasa de interés de equilibrio"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un aumento del gasto público desplaza la curva IS hacia la derecha, elevando la demanda agregada, lo que incrementa el ingreso de equilibrio y, a través de una mayor demanda de dinero, presiona al alza la tasa de interés."
    },
    {
        id: 3,
        area: "Econometría",
        pregunta: "En el modelo de regresión lineal clásico, ¿qué supuesto establece el teorema de Gauss-Markov para garantizar que los estimadores por Mínimos Cuadrados Ordinarios (MCO) sean los mejores lineales insesgados (MELI)?",
        opciones: [
            "A) Homocedasticidad y ausencia de autocorrelación en los errores",
            "B) Distribución estrictamente normal de la variable dependiente",
            "C) Ausencia total de multicolinealidad perfecta y estricta exogeneidad de los regresores",
            "D) Que el tamaño de la muestra tienda al infinito"
        ],
        respuestaCorrecta: 3,
        explicacion: "El teorema de Gauss-Markov requiere linealidad, esperanza condicional cero del error, ausencia de multicolinealidad perfecta y esfericidad de las perturbaciones para asegurar la propiedad MELI."
    },
    {
        id: 4,
        area: "Economía Internacional",
        pregunta: "Según la teoría de Heckscher-Ohlin, ¿qué determina el patrón de comercio internacional entre países?",
        opciones: [
            "A) Las diferencias tecnológicas absolutas en la producción industrial",
            "B) Las ventajas comparativas basadas en la abundancia relativa de factores de producción (trabajo y capital)",
            "C) Las economías de escala a nivel de empresa multinacional",
            "D) Las barreras arancelarias bilaterales y los costos de transporte"
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo de Heckscher-Ohlin postula que un país exportará el bien que hace uso intensivo de su factor abundantemente disponible."
    },
    {
        id: 5,
        area: "Microeconomía",
        pregunta: "¿Cuál es la condición de equilibrio para la maximización de beneficios de una empresa competitiva en el corto plazo?",
        opciones: [
            "A) Precio igual al costo fijo medio",
            "B) Ingreso marginal igual al costo marginal y pendiente del costo marginal creciente",
            "C) Ingreso total igual al costo total medio",
            "D) Costo variable medio igual al precio de mercado"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una empresa maximiza beneficios donde el ingreso marginal (que en competencia perfecta es el precio) se iguala al costo marginal, siempre que el precio supere al costo variable medio."
    },
    {
        id: 6,
        area: "Macroeconomía",
        pregunta: "¿Qué establece la hipótesis de la renta permanente formulada por Milton Friedman?",
        opciones: [
            "A) Que el consumo corriente depende exclusivamente del ingreso disponible del periodo actual",
            "B) Que los individuos basan sus decisiones de consumo en el ingreso que esperan recibir a lo largo de un horizonte temporal prolongado (renta permanente)",
            "C) Que el ahorro agregado es independiente de las tasas de interés reales",
            "D) Que los impuestos actuales no afectan el consumo debido a la equivalencia ricardiana"
        ],
        respuestaCorrecta: 2,
        explicacion: "Friedman argumentó que el consumo responde principalmente a expectativas de ingresos permanentes a largo plazo, amortiguando las fluctuaciones transitorias."
    },
    {
        id: 7,
        area: "Econometría",
        pregunta: "En econometría, ¿qué consecuencia provoca la presencia de heterocedasticidad en las perturbaciones de un modelo de regresión lineal?",
        opciones: [
            "A) Los estimadores de MCO dejan de ser insesgados",
            "B) Las varianzas de los estimadores MCO están sesgadas, invalidando las pruebas de hipótesis (estadísticos t y F)",
            "C) Los estimadores dejan de ser lineales respecto a la variable dependiente",
            "D) Se genera correlación serial de primer orden en los residuos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Bajo heterocedasticidad, MCO sigue siendo insesgado y lineal, pero sus varianzas están mal calculadas, lo que invalida la inferencia estadística tradicional."
    },
    {
        id: 8,
        area: "Economía Internacional",
        pregunta: "¿Qué efectos económicos genera la imposición de un arancel a la importación en un país pequeño (tomador de precios en el mercado mundial)?",
        opciones: [
            "A) Eleva el precio interno del bien, reduce el consumo nacional, aumenta la producción local y genera ingresos fiscales para el gobierno",
            "B) Reduce el precio interno del bien y beneficia directamente a los consumidores nacionales",
            "C) Elimina por completo las importaciones sin generar pérdida de eficiencia",
            "D) Incrementa los términos de intercambio a favor del país importador"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un arancel encarece el producto importado en el mercado doméstico, incentivando la producción nacional, desincentivando el consumo y provocando una pérdida seca de bienestar junto con recaudación fiscal."
    },
    {
        id: 9,
        area: "Microeconomía",
        pregunta: "¿Cómo se define un bien Giffen en la teoría del consumidor?",
        opciones: [
            "A) Un bien cuya demanda aumenta cuando se incrementa la renta del consumidor",
            "B) Un bien inferior cuya curva de demanda tiene pendiente positiva debido a que el efecto sustitución es superado por un fuerte efecto ingreso",
            "C) Un bien sustituto perfecto en el consumo",
            "D) Un bien cuya elasticidad precio de la demanda es infinitamente elástica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien Giffen es un caso extremo de bien inferior donde el efecto ingreso domina al efecto sustitución, violando la ley de la demanda y mostrando una relación directa entre precio y cantidad demandada."
    },
    {
        id: 10,
        area: "Macroeconomía",
        pregunta: "En el contexto de la curva de Phillips ampliada por expectativas (expectativas adaptativas o racionales), ¿qué ocurre con la disyuntiva entre inflación y desempleo en el largo plazo?",
        opciones: [
            "A) La disyuntiva se mantiene estable y permanente",
            "B) La curva de Phillips de largo plazo es vertical al nivel de la tasa natural de desempleo (NAIRU), anulando el trade-off",
            "C) La inflación guarda una relación inversa perfecta con el desempleo estructural",
            "D) El desempleo desciende indefinidamente si se tolera una tasa de inflación moderada"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el largo plazo, los agentes ajustan plenamente sus expectativas de inflación, haciendo que la curva de Phillips sea vertical en la tasa natural de desempleo."
    },
    {
        id: 11,
        area: "Econometría",
        pregunta: "¿Qué prueba estadística se utiliza comúnmente para detectar la presencia de autocorrelación de primer orden en los residuos de un modelo econométrico de series de tiempo?",
        opciones: [
            "A) Prueba de Chow",
            "B) Prueba de Durbin-Watson",
            "C) Prueba de Jarque-Bera",
            "D) Prueba de Hausman"
        ],
        respuestaCorrecta: 3,
        explicacion: "El estadístico de Durbin-Watson evalúa la autocorrelación serial de primer orden en los errores de un modelo de regresión lineal."
    },
    {
        id: 12,
        area: "Economía Pública",
        pregunta: "¿Qué caracteriza a un bien público puro según la teoría económica?",
        opciones: [
            "A) Es excluyente y rival en el consumo",
            "B) Es no excluyente y no rival en el consumo",
            "C) Es proporcionado exclusivamente por empresas privadas mediante cuotas de mercado",
            "D) Genera externalidades negativas netas en la sociedad"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los bienes públicos puros se caracterizan por la imposibilidad de excluir a los consumidores que no pagan (no exclusión) y porque el consumo de uno no reduce la disponibilidad para otros (no rivalidad)."
    },
    {
        id: 13,
        area: "Microeconomía",
        pregunta: "¿Qué describe el equilibrio general de intercambio en una economía de puros intercambios mediante la Caja de Edgeworth?",
        opciones: [
            "A) La asignación de recursos donde las tasas marginales de sustitución de todos los consumidores son iguales entre los bienes",
            "B) El punto donde la producción iguala los costos marginales de la industria",
            "C) La maximización de beneficios de un monopolio natural discriminador",
            "D) La igualdad entre el ahorro privado y la inversión agregada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El óptimo de Pareto en el intercambio se alcanza sobre la curva de contrato, donde las TMS de los agentes se igualan mutuamente."
    },
    {
        id: 14,
        area: "Macroeconomía",
        pregunta: "¿Qué indica la balanza de cuenta corriente dentro de la balanza de pagos de un país?",
        opciones: [
            "A) Los movimientos de capitales golondrinos y reservas internacionales del banco central",
            "B) El comercio neto de bienes y servicios, los ingresos primarios y las transferencias corrientes con el resto del mundo",
            "C) La inversión extranjera directa acumulada en el sector industrial",
            "D) El endeudamiento externo neto con organismos multilaterales"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cuenta corriente registra las transacciones de exportaciones e importaciones de mercancías, servicios, rentas de factores y transferencias unilaterales."
    },
    {
        id: 15,
        area: "Econometría",
        pregunta: "¿Cuál es el propósito de utilizar variables instrumentales (VI) en un modelo econométrico?",
        opciones: [
            "A) Corregir el sesgo de simultaneidad o endogeneidad cuando un regresor está correlacionado con el término de error",
            "B) Eliminar la multicolinealidad perfecta entre variables explicativas",
            "C) Transformar una serie de tiempo no estacionaria en estacionaria",
            "D) Estimar modelos con variables dependientes dicotómicas"
        ],
        respuestaCorrecta: 3,
        explicacion: "El método de variables instrumentales permite obtener estimadores consistentes cuando existe endogeneidad, utilizando un instrumento correlacionado con el regresor pero incorrelacionado con el error."
    },
    {
        id: 16,
        area: "Economía Industrial",
        pregunta: "¿Qué define a un mercado bajo el modelo de competencia monopolística?",
        opciones: [
            "A) Un único oferente que fija el precio y la cantidad en el mercado",
            "B) Muchos oferentes que venden productos diferenciados con libertad de entrada y salida a largo plazo",
            "C) Pocas empresas grandes que compiten estratégicamente en precios o cantidades",
            "D) Un mercado con producto homogéneo y barreras tecnológicas infranqueables"
        ],
        respuestaCorrecta: 0,
        explicacion: "La competencia monopolística se caracteriza por la diferenciación de producto y la libre entrada y salida, lo que otorga cierto poder de mercado a cada firma sobre su variedad."
    },
    {
        id: 17,
        area: "Microeconomía",
        pregunta: "¿Qué expresa el lema de Shephard en la teoría de la dualidad del consumidor?",
        opciones: [
            "A) Que la derivada de la función de gasto con respecto al precio de un bien yield la función de demanda hicksiana (compensada)",
            "B) Que la función de utilidad indirecta es homogénea de grado cero en precios y renta",
            "C) Que los costos marginales siempre cruzan al costo medio en su punto mínimo",
            "D) Que la elasticidad precio de la demanda es igual a uno en el óptimo del monopolista"
        ],
        respuestaCorrecta: 1,
        explicacion: "El lema de Shephard establece que la demanda compensada (hicksiana) de un bien se obtiene derivando parcialmente la función de gasto respecto al precio de dicho bien."
    },
    {
        id: 18,
        area: "Macroeconomía",
        pregunta: "¿Qué establece la equivalencia ricardiana en la política fiscal?",
        opciones: [
            "A) Que financiar el gasto público mediante impuestos actuales o mediante deuda pública genera exactamente el mismo impacto en el consumo privado",
            "B) Que la política monetaria es neutral ante variaciones en la masa monetaria nominal",
            "C) Que el déficit comercial es siempre igual al déficit presupuestario gubernamental",
            "D) Que los aranceles comerciales no afectan el tipo de cambio real"
        ],
        respuestaCorrecta: 2,
        explicacion: "La equivalencia ricardiana postula que los contribuyentes anticipan futuros impuestos para pagar la deuda actual, por lo que ahorran el recorte fiscal presente, neutralizando el efecto expansivo del déficit."
    },
    {
        id: 19,
        area: "Econometría",
        pregunta: "¿Qué implica que una serie de tiempo sea estacionaria en covarianza (estacionaria débil)?",
        opciones: [
            "A) Que su media, su varianza y sus autocovarianzas son constantes a lo largo del tiempo",
            "B) Que la serie posee una raíz unitaria estocástica pura",
            "C) Que los errores del modelo presentan heterocedasticidad condicional autorregresiva (ARCH)",
            "D) Que la covarianza entre periodos diferentes tiende a infinito"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una serie estacionaria débil requiere media constante, varianza finita constante y autocovarianzas que dependen únicamente del desfase temporal, no del tiempo calendario."
    },
    {
        id: 20,
        area: "Economía Internacional",
        pregunta: "En el régimen de tipo de cambio flexible, ¿cómo opera el mecanismo automático de ajuste macroeconómico ante un déficit comercial?",
        opciones: [
            "A) La moneda nacional se deprecia, abaratando las exportaciones y encareciendo las importaciones hasta equilibrar la cuenta corriente",
            "B) El banco central se ve obligado a perder reservas internacionales para sostener la paridad",
            "C) Se incrementan automáticamente las tasas de interés de encaje legal",
            "D) Los precios internos caen de manera rígida por deflación salarial"
        ],
        respuestaCorrecta: 0,
        explicacion: "Bajo flexibilidad cambiaria, un déficit comercial genera exceso de oferta de moneda nacional, provocando su depreciación y restableciendo el equilibrio externo a través de precios relativos."
    },
    {
        id: 21,
        area: "Microeconomía",
        pregunta: "¿Qué mide la elasticidad arco de la demanda?",
        opciones: [
            "A) La sensibilidad porcentual de la cantidad ante cambios de precio calculada en un punto específico de la curva",
            "B) La sensibilidad promedio de la demanda entre dos puntos distintos de la curva de demanda",
            "C) La relación marginal entre los precios de dos bienes sustitutos",
            "D) El cambio absoluto en la cantidad demandada ante variaciones unitarias de ingreso"
        ],
        respuestaCorrecta: 1,
        explicacion: "La elasticidad arco utiliza el punto medio (promedio) entre los precios y cantidades iniciales y finales para estimar la elasticidad en un intervalo de la curva."
    },
    {
        id: 22,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el Producto Interno Bruto (PIB) real en contraste con el PIB nominal?",
        opciones: [
            "A) El valor de la producción de bienes y servicios valorados a precios corrientes de mercado",
            "B) El valor de la producción de bienes y servicios valorados a precios constantes de un año base, eliminando el efecto de la inflación",
            "C) La riqueza neta acumulada por los residentes de un país incluyendo activos financieros",
            "D) El flujo de caja consolidado del sector público federal"
        ],
        respuestaCorrecta: 2,
        explicacion: "El PIB real ajusta la producción agregada utilizando precios de un año base específico, permitiendo medir el crecimiento físico real de la economía sin distorsiones de precios."
    },
    {
        id: 23,
        area: "Econometría",
        pregunta: "¿Qué prueba estadística se emplea comúnmente para comprobar la presencia de raíces unitarias en una serie de tiempo y determinar si es no estacionaria?",
        opciones: [
            "A) Prueba de Dickey-Fuller Aumentada (ADF)",
            "B) Prueba de multicolinealidad de Klein",
            "C) Prueba de normalidad de Shapiro-Wilk",
            "D) Prueba de homocedasticidad de White"
        ],
        respuestaCorrecta: 3,
        explicacion: "La prueba Dickey-Fuller Aumentada (ADF) evalúa la hipótesis nula de presencia de raíz unitaria (no estacionariedad) en procesos estocásticos de series temporales."
    },
    {
        id: 24,
        area: "Economía del Desarrollo",
        pregunta: "¿Qué mide el Índice de Desarrollo Humano (IDH) publicado por el Programa de las Naciones Unidas para el Desarrollo (PNUD)?",
        opciones: [
            "A) Exclusivamente el PIB per cápita ajustado por paridad de poder adquisitivo",
            "B) El promedio ponderado de tres dimensiones básicas: salud (esperanza de vida), educación (años de escolaridad) y nivel de vida digno (INB per cápita)",
            "C) La tasa de desempleo estructural y la desigualdad en la distribución del ingreso (Índice de Gini)",
            "D) La competitividad macroeconómica y facilidad para hacer negocios"
        ],
        respuestaCorrecta: 1,
        explicacion: "El IDH es un indicador sintético multidimensional que evalúa el progreso social a través de longevidad, conocimientos y recursos económicos básicos."
    },
    {
        id: 25,
        area: "Microeconomía",
        pregunta: "¿Cuál es la característica principal de un mercado con externalidades negativas en la producción (como la contaminación ambiental)?",
        opciones: [
            "A) El costo social marginal es menor que el costo privado marginal, generando una sobreproducción respecto al óptimo social",
            "B) El costo social marginal es mayor que el costo privado marginal, por lo que el mercado libre produce una cantidad superior a la socialmente eficiente",
            "C) La producción privada es perfectamente eficiente sin necesidad de intervención estatal",
            "D) Los consumidores pagan un precio inferior al costo marginal de fabricación"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las externalidades negativas implican costos externos no internalizados por el productor, haciendo que el costo social supere al privado y provocando sobreproducción en libre mercado."
    },
    {
        id: 26,
        area: "Macroeconomía",
        pregunta: "En el modelo de crecimiento económico de Solow, ¿qué ocurre en el estado estacionario (steady state)?",
        opciones: [
            "A) El capital por trabajador y el producto por trabajador crecen a una tasa constante positiva",
            "B) La inversión neta es exactamente igual a cero y el capital por trabajador (k) permanece constante",
            "C) La tasa de ahorro es inferior a la tasa de depreciación del capital físico",
            "D) El crecimiento demográfico supera la productividad marginal del trabajo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En el estado estacionario de Solow, la inversión total apenas cubre la depreciación y la profundización de capital debida al crecimiento poblacional, estabilizando el stock de capital por trabajador."
    },
    {
        id: 27,
        area: "Econometría",
        pregunta: "¿Qué problema genera la presencia de multicolinealidad severa entre las variables explicativas en un modelo de regresión múltiple?",
        opciones: [
            "A) Los estimadores MCO dejan de ser insesgados y consistentes",
            "B) Se incrementan notablemente las varianzas de los estimadores MCO, generando estadísticos t bajos a pesar de un alto R-cuadrado global",
            "C) Desaparece la autocorrelación de los errores en las series de tiempo",
            "D) Se altera la suma de los residuos al cuadrado de manera determinista"
        ],
        respuestaCorrecta: 1,
        explicacion: "La multicolinealidad no sesga los estimadores, pero infla sus errores estándar y varianzas, haciendo imprecisa la estimación de los coeficientes individuales."
    },
    {
        id: 28,
        area: "Organización Industrial",
        pregunta: "¿En qué consiste el modelo de competencia en cantidades de Cournot?",
        opciones: [
            "A) Las empresas eligen simultáneamente sus niveles de producción asumiendo como dada la cantidad de su rival",
            "B) Las empresas compiten estableciendo precios de forma secuencial (liderazgo de precios)",
            "C) Una empresa fija la cantidad y la otra reacciona como seguidora en el mercado",
            "D) Las empresas coluden formalmente para fijar el precio monopólico del sector"
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo de Cournot es un duopolio u oligopolio estático donde las firmas deciden simultáneamente las cantidades a producir bajo funciones de reacción óptimas."
    },
    {
        id: 29,
        area: "Microeconomía",
        pregunta: "¿Qué establece el teorema de Coase en relación con las externalidades económicas?",
        opciones: [
            "A) Que el Estado debe prohibir obligatoriamente toda actividad que genere externalidades",
            "B) Que si los derechos de propiedad están bien definidos y los costos de transacción son nulos, las partes afectadas pueden negociar privadamente para alcanzar la asignación eficiente de recursos",
            "C) Que los impuestos pigouvianos son la única solución válida ante fallas de mercado",
            "D) Que los bienes públicos nunca pueden ser provistos de forma eficiente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El teorema de Coase demuestra que la negociación privada puede resolver externalidades eficientemente sin intervención pública, siempre que los costos de transacción sean despreciables y los derechos claros."
    },
    {
        id: 30,
        area: "Macroeconomía",
        pregunta: "¿Qué instrumento constituye una operación de mercado abierto (OMA) contractiva por parte del Banco Central?",
        opciones: [
            "A) La compra de bonos gubernamentales en el mercado secundario",
            "B) La venta de valores gubernamentales a la banca comercial, retirando liquidez del sistema financiero",
            "C) La reducción de la tasa de encaje legal bancario",
            "D) El otorgamiento de créditos de ventanilla de descuento con tasas subsidiadas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando el Banco Central vende bonos gubernamentales a los bancos comerciales, recibe efectivo a cambio, disminuyendo la base monetaria y contraendo la oferta de dinero."
    },
    {
        id: 31,
        area: "Econometría",
        pregunta: "¿Qué mide el coeficiente de determinación ($R^2$) en un modelo de regresión lineal estimado por MCO?",
        opciones: [
            "A) La proporción de la varianza total de la variable dependiente que es explicada por las variables independientes del modelo",
            "B) La probabilidad de que los errores sigan una distribución normal estándar",
            "C) La elasticidad constante entre las variables en logaritmos naturales",
            "D) El grado de sesgo por omisión de variables relevantes"
        ],
        respuestaCorrecta: 0,
        explicacion: "El $R^2$ representa la bondad de ajuste del modelo, calculándose como el cociente entre la suma de cuadrados explicada y la suma de cuadrados total."
    },
    {
        id: 32,
        area: "Economía Internacional",
        pregunta: "¿Qué postula la teoría de la paridad del poder de compra (PPC) en su versión absoluta?",
        opciones: [
            "A) Que el tipo de cambio nominal entre dos monedas debe ser igual al cociente entre los niveles de precios internos de ambos países",
            "B) Que las tasas de interés reales deben igualarse en el largo plazo a nivel internacional",
            "C) Que los aranceles comerciales compensan exactamente los costos de transporte transfronterizo",
            "D) Que el tipo de cambio forward coincide con el tipo de cambio spot esperado"
        ],
        respuestaCorrecta: 0,
        explicacion: "La PPC absoluta establece que una cesta de bienes idénticos debe costar lo mismo en diferentes países cuando su valor se expresa en una moneda común, determinando el tipo de cambio."
    },
    {
        id: 33,
        area: "Microeconomía",
        pregunta: "¿Qué representa la senda de expansión de la producción de una empresa a largo plazo?",
        opciones: [
            "A) El conjunto de combinaciones óptimas de factores productivos (capital y trabajo) que minimizan los costos para cada nivel de producción",
            "B) La trayectoria de los precios de venta ante aumentos en la demanda del consumidor",
            "C) El crecimiento de los beneficios extraordinarios ante economías de escala",
            "D) La curva de costos marginales decrecientes de la industria"
        ],
        respuestaCorrecta: 0,
        explicacion: "La senda de expansión une los puntos tangenciales entre las isocuantas y los isocostos, mostrando cómo cambian las combinaciones óptimas de insumos al expandir la producción."
    },
    {
        id: 34,
        area: "Macroeconomía",
        pregunta: "¿Qué expresa la identidad fundamental de la contabilidad nacional en una economía abierta con sector público?",
        opciones: [
            "A) El ahorro nacional más la inversión extranjera neta es igual a la inversión interna",
            "B) El PIB es igual a la suma de consumo, inversión, gasto público y exportaciones netas ($Y = C + I + G + NX$)",
            "C) La oferta monetaria real debe igualar estrictamente a la demanda transaccional de dinero",
            "D) Los ingresos fiscales netos superan siempre al déficit de cuenta corriente"
        ],
        respuestaCorrecta: 1,
        explicacion: "La identidad del producto por el lado del gasto desglosa el PIB en consumo privado, inversión bruta interna, gasto de gobierno y exportaciones netas."
    },
    {
        id: 35,
        area: "Econometría",
        pregunta: "¿En qué consiste el problema de endogeneidad por simultaneidad en un sistema de ecuaciones simultáneas?",
        opciones: [
            "A) Las variables dependientes en una ecuación actúan como regresores en otra, generando correlación con el término de error",
            "B) Las observaciones de la muestra presentan datos atípicos extremos (outliers)",
            "C) Los errores de medición en la variable dependiente siguen un proceso estocástico estacionario",
            "D) Las variables explicativas están perfectamente correlacionadas entre sí"
        ],
        respuestaCorrecta: 0,
        explicacion: "La simultaneidad ocurre cuando oferta y demanda se determinan conjuntamente en equilibrio, haciendo que el precio dependa de la cantidad y viceversa, violando la exogeneidad."
    },
    {
        id: 36,
        area: "Economía Laboral",
        pregunta: "¿Cómo se define la tasa de participación laboral (o tasa de actividad) en las estadísticas del mercado de trabajo?",
        opciones: [
            "A) El cociente entre la población ocupada y la población total del país",
            "B) El porcentaje de la población en edad de trabajar (PET) que forma parte de la Población Económicamente Activa (PEA - ocupados más desocupados)",
            "C) La proporción de trabajadores informales respecto al total de la fuerza laboral asalariada",
            "D) El número de horas promedio trabajadas por semana en el sector formal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tasa de participación mide la proporción de personas en edad de trabajar que están activamente empleadas o buscando empleo (PEA / PET)."
    },
    {
        id: 37,
        area: "Microeconomía",
        pregunta: "¿Cuál es la condición de cierre de una empresa competitiva en el corto plazo?",
        opciones: [
            "A) Cuando el precio de mercado es menor que el mínimo del costo variable medio ($P < CVMe$)",
            "B) Cuando el precio es inferior al costo total medio ($P < CTMe$)",
            "C) Cuando los beneficios económicos netos son exactamente iguales a cero",
            "D) Cuando el ingreso marginal supera al costo marginal"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el corto plazo, si el precio no cubre al menos el costo variable medio, la empresa minimiza sus pérdidas cerrando operaciones, ya que perdería más produciendo."
    },
    {
        id: 38,
        area: "Macroeconomía",
        pregunta: "¿Qué postula la teoría de la trampa de liquidez en el análisis macroeconómico keynesiano?",
        opciones: [
            "A) Una situación en la que la tasa de interés nominal se encuentra en un nivel mínimo cercano a cero y la demanda de dinero es infinitamente elástica, neutralizando la política monetaria convencional",
            "B) Un exceso de reservas bancarias que obliga al banco central a fijar encajes negativos",
            "C) Una caída drástica en las exportaciones netas debido a la apreciación cambiaria",
            "D) La incapacidad del gobierno para emitir deuda pública por falta de compradores"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la trampa de liquidez, los agentes prefieren mantener liquidez ante tasas de interés ultra bajas, haciendo inútil la expansión de la base monetaria para estimular la economía."
    },
    {
        id: 39,
        area: "Econometría",
        pregunta: "¿Qué método de estimación se utiliza habitualmente cuando la variable dependiente en un modelo econométrico es de naturaleza binaria (toma valores de 0 o 1)?",
        opciones: [
            "A) Modelos de elección binaria como Logit o Probit",
            "B) Mínimos Cuadrados Ordinarios en series de tiempo con raíz unitaria",
            "C) Modelos de vectores autorregresivos (VAR)",
            "D) Regresión lineal con corrección de Newey-West"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando la variable dependiente es dicotómica, MCO presenta problemas como predicciones fuera del rango [0,1] y heterocedasticidad, por lo que se emplean modelos no lineales como Logit o Probit."
    },
    {
        id: 40,
        area: "Economía de la Empresa",
        pregunta: "¿Qué mide la elasticidad cruzada de la demanda entre dos bienes?",
        opciones: [
            "A) La sensibilidad de la cantidad demandada de un bien ante cambios en el precio del otro bien",
            "B) El cambio porcentual en el ingreso del consumidor ante variaciones en el precio del bien principal",
            "C) La proporción de gasto asignada a bienes de lujo frente a bienes de primera necesidad",
            "D) La relación entre la cantidad ofrecida y la cantidad demandada ante desequilibrios de inventario"
        ],
        respuestaCorrecta: 0,
        explicacion: "La elasticidad cruzada mide el cambio porcentual en la demanda de un bien ante una variación porcentual en el precio de un bien sustituto o complementario."
    },
    {
        id: 41,
        area: "Microeconomía",
        pregunta: "¿Qué define a un monopolio natural?",
        opciones: [
            "A) Una empresa que posee patentes exclusivas sobre un recurso natural no renovable",
            "B) Una industria donde las economías de escala son tan grandes a lo largo de todo el rango de producción que una sola empresa puede abastecer el mercado a un costo menor que múltiples firmas",
            "C) Un acuerdo de cártel internacional protegido por aranceles proteccionistas",
            "D) Una empresa pública operada directamente por el gobierno federal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un monopolio natural surge debido a costos medios decrecientes y economías de escala masivas, haciendo ineficiente la fragmentación de la industria entre varias empresas."
    },
    {
        id: 42,
        area: "Macroeconomía",
        pregunta: "¿Qué indica la tasa de sacrificio en la política macroeconómica?",
        opciones: [
            "A) El costo acumulado en términos de pérdida porcentual de producto (PIB) necesario para reducir la tasa de inflación en un punto porcentual",
            "B) El porcentaje de la fuerza laboral que debe quedar desempleada para financiar el déficit fiscal",
            "C) La reducción de las reservas internacionales por cada punto de devaluación cambiaria",
            "D) El incremento en la tasa de interés real derivado de una política monetaria restrictiva"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tasa de sacrificio cuantifica el costo real en producción y empleo que una economía debe soportar al implementar políticas desinflacionarias."
    },
    {
        id: 43,
        area: "Econometría",
        pregunta: "¿Qué prueba se utiliza para detectar la presencia de heterocedasticidad de forma general en los residuos de un modelo de regresión sin asumir una forma funcional específica previa?",
        opciones: [
            "A) Prueba de White",
            "B) Prueba de Chow para cambio estructural",
            "C) Prueba de raíz unitaria Phillips-Perron",
            "D) Prueba de autocorrelación Breusch-Godfrey"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de White evalúa la hipótesis nula de homocedasticidad frente a una forma general de heterocedasticidad basada en las variables explicativas, sus cuadrados y productos cruzados."
    },
    {
        id: 44,
        area: "Economía Internacional",
        pregunta: "¿Qué establece la teoría de la paridad descubierta de tasas de interés (UIP)?",
        opciones: [
            "A) Que la diferencia entre las tasas de interés nominales de dos países debe igualarse a la depreciación cambiaria nominal esperada",
            "B) Que los tipos de cambio spot y forward son estrictamente idénticos en todo momento",
            "C) Que los flujos de inversión extranjera directa no dependen de la estabilidad macroeconómica",
            "D) Que las tasas de interés reales convergen instantáneamente a nivel global"
        ],
        respuestaCorrecta: 0,
        explicacion: "La UIP postula que los inversores deben obtener el mismo rendimiento esperado al invertir en bonos nacionales o extranjeros, ajustando por la variación esperada del tipo de cambio."
    },
    {
        id: 45,
        area: "Microeconomía",
        pregunta: "¿Cómo se modifica la restricción presupuestaria de un consumidor si el precio del bien medido en el eje horizontal disminuye, manteniendo constantes el ingreso y el precio del bien del eje vertical?",
        opciones: [
            "A) La línea presupuestaria se desplaza paralelamente hacia la derecha",
            "B) La línea presupuestaria rota hacia afuera sobre el eje horizontal, ampliando el conjunto factible de consumo",
            "C) La línea presupuestaria rota hacia adentro reduciendo las opciones de compra",
            "D) Se desplaza paralelamente hacia la izquierda"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una caída en el precio de un bien abrata su consumo, provocando una rotación externa de la pendiente de la recta presupuestaria sobre el intercepto del bien cuyo precio disminuyó."
    },
    {
        id: 46,
        area: "Macroeconomía",
        pregunta: "¿Qué función cumple el multiplicador del gasto autónomo en el modelo keynesiano simple?",
        opciones: [
            "A) Mide el incremento total en el ingreso de equilibrio generado por un aumento unitario en el gasto autónomo (como inversión o gasto público)",
            "B) Determina la velocidad de circulación del dinero en el sistema bancario",
            "C) Calcula la tasa de depreciación del capital físico acumulado",
            "D) Establece la relación inversa entre inflación y desempleo"
        ],
        respuestaCorrecta: 0,
        explicacion: "El multiplicador keynesiano ($1 / (1 - PMC)$) indica cuántas veces se amplifica el impacto inicial de un componente autónomo del gasto sobre el nivel de producto de equilibrio."
    },
    {
        id: 47,
        area: "Econometría",
        pregunta: "¿Qué indica la presencia de multicolinealidad perfecta en una matriz de datos para estimar por MCO?",
        opciones: [
            "A) Que una variable explicativa es combinación lineal exacta de otra u otras, haciendo imposible invertir la matriz $X'X$ y calcular los estimadores",
            "B) Que los residuos del modelo presentan autocorrelación serial de orden superior",
            "C) Que el modelo econométrico es no lineal en los parámetros",
            "D) Que la varianza del error es infinita"
        ],
        respuestaCorrecta: 0,
        explicacion: "La multicolinealidad perfecta impide el cálculo matemático de los estimadores MCO porque el determinante de la matriz de covarianzas se vuelve cero y no se puede invertir."
    },
    {
        id: 48,
        area: "Organización Industrial",
        pregunta: "¿Qué caracteriza al modelo de competencia en precios de Bertrand en un duopolio con producto homogéneo?",
        opciones: [
            "A) Las empresas eligen precios simultáneamente y, al competir ferozmente, el precio de equilibrio desciende hasta igualar el costo marginal, replicando el resultado de competencia perfecta",
            "B) Las empresas coluden y fijan precios monopólicos estables de largo plazo",
            "C) La empresa líder fija la cantidad y la seguidora fija el precio",
            "D) Los precios se mantienen rígidos debido a curvas de demanda quebradas"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el modelo de Bertrand con productos homogéneos, la competencia en precios lleva a que cada firma intente undercut (subcotizar) al rival hasta que el precio iguala al costo marginal."
    },
    {
        id: 49,
        area: "Microeconomía",
        pregunta: "¿Qué representa la elasticidad precio de la oferta?",
        opciones: [
            "A) La sensibilidad porcentual de la cantidad ofrecida de un bien ante variaciones porcentuales en su precio de mercado",
            "B) El cambio absoluto en los beneficios de la empresa ante aumentos en los costos fijos",
            "C) La relación marginal de sustitución entre insumos productivos",
            "D) La proporción de impuestos trasladada directamente al consumidor final"
        ],
        respuestaCorrecta: 0,
        explicacion: "La elasticidad precio de la oferta mide cuán receptivos son los productores para ajustar la cantidad ofrecida ante cambios en el precio del bien."
    },
    {
        id: 50,
        area: "Macroeconomía",
        pregunta: "¿Qué expresa la ecuación cuantitativa del dinero en la teoría monetaria clásica ($M \cdot V = P \cdot Y$)?",
        opciones: [
            "A) Que el producto de la masa monetaria por su velocidad de circulación es exactamente igual al valor nominal de la producción agregada",
            "B) Que la tasa de interés real es independiente de la oferta monetaria nominal",
            "C) Que el déficit fiscal genera inflación de costos a corto plazo",
            "D) Que el ahorro agregado es una función directa del tipo de cambio real"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación cuantitativa vincula la cantidad de dinero y su velocidad con el nivel general de precios y el producto real, sirviendo de base para la teoría clásica de la neutralidad del dinero."
    },
    {
        id: 51,
        area: "Econometría",
        pregunta: "¿Qué mide el estadístico F en una regresión lineal múltiple?",
        opciones: [
            "A) La significancia conjunta de todas las variables explicativas del modelo para explicar la variable dependiente",
            "B) La presencia individual de autocorrelación serial en los residuos",
            "C) El grado de asimetría y curtosis de la distribución de los errores",
            "D) La elasticidad unitaria entre la variable dependiente y el regresor principal"
        ],
        respuestaCorrecta: 0,
        explicacion: "El contraste F evalúa la hipótesis nula conjunta de que todos los coeficientes de pendiente (excluyendo el intercepto) son simultáneamente iguales a cero."
    },
    {
        id: 52,
        area: "Economía Internacional",
        pregunta: "¿Qué establece el teorema de Stolper-Samuelson en la teoría del comercio internacional?",
        opciones: [
            "A) Que un incremento en el precio relativo de un bien aumenta la remuneración real del factor de producción utilizado intensivamente en su fabricación y reduce la remuneración del otro factor",
            "B) Que el libre comercio internacional iguala los precios de los bienes pero no los salarios reales",
            "C) Que los países siempre se benefician del proteccionismo arancelario industrial",
            "D) Que la movilidad internacional de capitales sustituye por completo al comercio de mercancías"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema de Stolper-Samuelson demuestra cómo los cambios en los precios de los productos afectan la distribución del ingreso entre los dueños de los factores productivos."
    },
    {
        id: 53,
        area: "Microeconomía",
        pregunta: "¿Qué caracteriza a una función de producción con rendimientos constantes a escala?",
        opciones: [
            "A) Que al duplicar proporcionalmente todos los insumos productivos, la producción total se duplica exactamente",
            "B) Que la productividad marginal de cada insumo es decreciente e infinita",
            "C) Que los costos medios a largo plazo son estrictamente crecientes",
            "D) Que la tasa marginal de sustitución técnica disminuye a cero"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los rendimientos constantes a escala implican homogeneidad de grado uno en la función de producción, de modo que un escalamiento proporcional de factores replica el producto en la misma proporción."
    },
    {
        id: 54,
        area: "Macroeconomía",
        pregunta: "¿Qué objetivo persigue un banco central al aplicar una política monetaria expansiva?",
        opciones: [
            "A) Reducir la tasa de interés de referencia para incentivar el crédito bancario, la inversión privada y el consumo agregado",
            "B) Elevar el encaje legal para frenar presiones inflacionarias derivadas de un sobrecalentamiento",
            "C) Vender valores gubernamentales masivamente para retirar circulante",
            "D) Apreciar el tipo de cambio nominal para encarecer las exportaciones"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una política monetaria expansiva inyecta liquidez y reduce tasas de interés para estimular la demanda agregada y combatir episodios recesivos."
    },
    {
        id: 55,
        area: "Econometría",
        pregunta: "¿Qué corrige la prueba de Chow en el análisis econométrico de regresión?",
        opciones: [
            "A) Evalúa la estabilidad estructural de los coeficientes de regresión entre dos submuestras o periodos de tiempo diferentes",
            "B) Elimina el sesgo de simultaneidad en sistemas de ecuaciones de oferta y demanda",
            "C) Corrige la heterocedasticidad de los errores mediante errores estándar robustos",
            "D) Transforma variables no estacionarias en estacionarias mediante primeras diferencias"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba de Chow contrasta si se ha producido un cambio estructural (quiebre en los parámetros) entre dos periodos o grupos poblacionales distintos."
    },
    {
        id: 56,
        area: "Economía Pública",
        pregunta: "¿Qué es un impuesto pigouviano?",
        opciones: [
            "A) Un gravamen impuesto sobre una actividad que genera externalidades negativas, diseñado para igualar el costo privado al costo social marginal",
            "B) Un impuesto directo progresivo sobre la renta personal acumulada",
            "C) Un arancel proteccionista aplicado exclusivamente a bienes de lujo importados",
            "D) Una tasa fija cobrada por el uso de infraestructura pública no rival"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los impuestos pigouvianos buscan internalizar las externalidades negativas (como la contaminación), gravando la actividad contaminante hasta alcanzar el nivel socialmente eficiente."
    },
    {
        id: 57,
        area: "Microeconomía",
        pregunta: "¿Qué representa la curva de oferta de trabajo derivada de la elección entre ocio y consumo?",
        opciones: [
            "A) La combinación de horas laboradas que maximizan la utilidad del individuo ante diferentes tasas salariales",
            "B) La cantidad de trabajadores contratados por una empresa monopsonista",
            "C) El costo marginal de producción de las empresas industriales",
            "D) La relación inversa entre inflación salarial y desempleo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La oferta individual de trabajo surge de la optimización del consumidor entre ingreso (consumo) y ocio, donde un mayor salario puede generar efectos sustitución e ingreso contrapuestos."
    },
    {
        id: 58,
        area: "Macroeconomía",
        pregunta: "¿Qué mide la tasa de desempleo estructural?",
        opciones: [
            "A) El desempleo friccional temporal de trabajadores que cambian de empleo",
            "B) El desempleo persistente derivado de desajustes entre las habilidades de la fuerza laboral y los requerimientos tecnológicos o geográficos de las empresas",
            "C) El desempleo coyuntural provocado por recesiones cíclicas en la demanda agregada",
            "D) El porcentaje de la población económicamente inactiva que desea trabajar"
        ],
        respuestaCorrecta: 1,
        explicacion: "El desempleo estructural refleja incompatibilidades de calificación profesional o rigideces estructurales del mercado laboral, formando parte de la tasa natural de desempleo."
    },
    {
        id: 59,
        area: "Econometría",
        pregunta: "¿Qué implica que un estimador por Mínimos Cuadrados Ordinarios sea insesgado?",
        opciones: [
            "A) Que su valor esperado (media de su distribución muestral) coincide exactamente con el verdadero parámetro poblacional que se intenta estimar",
            "B) Que su varianza es la menor posible entre todos los estimadores lineales",
            "C) Que converge en probabilidad al verdadero parámetro a medida que la muestra crece indefinidamente",
            "D) Que los residuos del modelo se distribuyen de forma perfectamente normal"
        ],
        respuestaCorrecta: 0,
        explicacion: "La propiedad de insesgadez garantiza que, en promedio a lo largo de infinitas muestras repetidas, el estimador no subestima ni sobreestima el parámetro poblacional real."
    },
    {
        id: 60,
        area: "Economía Internacional",
        pregunta: "¿Qué expresa el modelo de gravedad en el comercio internacional?",
        opciones: [
            "A) Que el volumen de comercio entre dos países es directamente proporcional al producto de sus tamaños económicos (PIB) e inversamente proporcional a la distancia geográfica entre ellos",
            "B) Que los tipos de cambio flotantes gravitan siempre hacia la paridad del poder de compra",
            "C) Que los flujos migratorios siguen la ley de atracción gravitacional demográfica",
            "D) Que los aranceles comerciales reducen el comercio en proporción geométrica"
        ],
        respuestaCorrecta: 0,
        explicacion: "Inspirado en la física newtoniana, el modelo de gravedad predice los flujos comerciales bilaterales basándose en las dimensiones económicas de los países y los costos de transporte (distancia)."
    },
    {
        id: 61,
        area: "Microeconomía",
        pregunta: "¿Qué indica una elasticidad ingreso de la demanda negativa para un bien específico?",
        opciones: [
            "A) Que se trata de un bien inferior, cuya demanda disminuye a medida que aumenta la renta del consumidor",
            "B) Que el bien es un artículo de lujo indispensable",
            "C) Que el bien es sustituto perfecto en el consumo",
            "D) Que el consumidor no tiene preferencias estables"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los bienes inferiores registran una relación inversa entre el ingreso del consumidor y la cantidad demandada, arrojando una elasticidad ingreso menor que cero."
    },
    {
        id: 62,
        area: "Macroeconomía",
        pregunta: "¿Qué representa la oferta agregada en el modelo de oferta y demanda agregada a largo plazo?",
        opciones: [
            "A) Una línea vertical ubicada en el nivel de producto potencial o PIB de pleno empleo",
            "B) Una curva con pendiente positiva basada en salarios nominales rígidos",
            "C) Una función horizontal determinada por los niveles de gasto autónomo",
            "D) Una pendiente negativa debido al efecto riqueza de los saldos reales"
        ],
        respuestaCorrecta: 0,
        explicacion: "A largo plazo, los precios y salarios son totalmente flexibles, por lo que la economía opera en su capacidad máxima productiva (PIB potencial), graficándose como una línea vertical."
    },
    {
        id: 63,
        area: "Econometría",
        pregunta: "¿Qué mide el estadístico de Durbin-Watson cuando su valor se aproxima a 2 en un modelo de regresión de series de tiempo?",
        opciones: [
            "A) La ausencia de autocorrelación serial de primer orden en los residuos",
            "B) La presencia de autocorrelación positiva perfecta",
            "C) La existencia de heterocedasticidad severa",
            "D) La presencia de multicolinealidad colineal"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un valor del estadístico Durbin-Watson cercano a 2 indica que no existe evidencia de autocorrelación serial de primer orden en las perturbaciones del modelo."
    },
    {
        id: 64,
        area: "Economía Pública",
        pregunta: "¿Cuál es el efecto económico de la imposición de un impuesto indirecto sobre un mercado donde la demanda es perfectamente inelástica?",
        opciones: [
            "A) Los consumidores soportan el 100% de la carga tributaria mediante un incremento en el precio final igual al monto del impuesto",
            "B) Los productores asumen totalmente el impuesto sin modificar el precio de venta",
            "C) La cantidad intercambiada en el mercado se reduce a cero de inmediato",
            "D) El gravamen no genera recaudación fiscal para el gobierno"
        ],
        respuestaCorrecta: 0,
        explicacion: "Cuando la demanda es perfectamente inelástica, los consumidores no reaccionan alterando su cantidad comprada, por lo que el peso total del impuesto recae íntegramente sobre ellos."
    },
    {
        id: 65,
        area: "Microeconomía",
        pregunta: "¿Qué describe la curva de oferta a largo plazo de una industria en competencia perfecta con costos constantes?",
        opciones: [
            "A) Una línea horizontal al nivel del costo medio mínimo de largo plazo",
            "B) Una curva con pendiente positiva debido a la escasez de insumos especializados",
            "C) Una línea vertical determinada por la capacidad instalada fija",
            "D) Una pendiente negativa por economías de aglomeración"
        ],
        respuestaCorrecta: 0,
        explicacion: "En una industria de costos constantes, la entrada de nuevas empresas no altera los precios de los insumos, por lo que la oferta de largo plazo es perfectamente elástica (horizontal)."
    },
    {
        id: 66,
        area: "Macroeconomía",
        pregunta: "¿Qué variables determinan la demanda de dinero por motivos de transacción en la teoría de la preferencia por la liquidez de Keynes?",
        opciones: [
            "A) El nivel de ingreso real y el nivel general de precios",
            "B) Exclusivamente la tasa de interés nominal del mercado financiero",
            "C) Las expectativas inflacionarias de largo plazo y el tipo de cambio",
            "D) El volumen de reservas internacionales del banco central"
        ],
        respuestaCorrecta: 0,
        explicacion: "La demanda transaccional y precaución de dinero depende directamente del ingreso nominal (renta y precios), ya que se requiere efectivo para realizar pagos cotidianos."
    },
    {
        id: 67,
        area: "Econometría",
        pregunta: "¿Qué propiedad asintótica garantiza que un estimador se aproxime al verdadero parámetro poblacional a medida que el tamaño de la muestra tiende a infinito?",
        opciones: [
            "A) Consistencia",
            "B) Insesgadez de muestra finita",
            "C) Homocedasticidad esférica",
            "D) Normalidad exacta de los errores"
        ],
        respuestaCorrecta: 0,
        explicacion: "La consistencia es una propiedad asintótica que asegura que la probabilidad de que el estimador difiera del parámetro poblacional real se reduce a cero conforme la muestra crece."
    },
    {
        id: 68,
        area: "Organización Industrial",
        pregunta: "¿Qué establece el modelo de liderazgo en cantidades de Stackelberg?",
        opciones: [
            "A) Que existe una empresa líder que fija su nivel de producción primero, anticipando la reacción de las empresas seguidoras que ajustan su producción después",
            "B) Que todas las empresas coluden para fijar precios idénticos en el mercado",
            "C) Que las empresas compiten fijando precios de manera simultánea sin información previa",
            "D) Que las firmas operan bajo un monopolio regulado por el Estado"
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo de Stackelberg es un duopolio secuencial (asimétrico) donde el líder toma ventaja al conocer y anticipar la función de reacción del seguidor."
    },
    {
        id: 69,
        area: "Microeconomía",
        pregunta: "¿Qué representa la tasa marginal de sustitución técnica (TMST) en la teoría de la producción?",
        opciones: [
            "A) La tasa a la cual una empresa puede sustituir un insumo por otro (ej. capital por trabajo) manteniendo constante el nivel de producción",
            "B) La relación de precios relativos entre los factores productivos en el mercado",
            "C) El incremento en el producto total derivado de contratar una unidad adicional de mano de obra",
            "D) La pendiente de la recta presupuestaria del productor"
        ],
        respuestaCorrecta: 0,
        explicacion: "La TMST mide la sustitución técnica entre factores a lo largo de una misma isocuanta, siendo igual al cociente de sus productividades marginales."
    },
    {
        id: 70,
        area: "Macroeconomía",
        pregunta: "¿Qué indica el modelo Mundell-Fleming respecto a la efectividad de la política fiscal bajo un régimen de tipo de cambio fijo y perfecta movilidad de capitales?",
        opciones: [
            "A) La política fiscal es altamente efectiva para alterar el ingreso de equilibrio",
            "B) La política fiscal es completamente ineficua, ya que las presiones sobre el tipo de cambio obligan al banco central a intervenir, neutralizando la expansión",
            "C) La política fiscal provoca una deflación inmediata de precios",
            "D) La política fiscal genera superávit automático en cuenta corriente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Bajo tipo de cambio fijo y perfecta movilidad de capitales, una expansión fiscal presiona a la baja la tasa de cambio; para defender la paridad, el banco central compra moneda local, expandiendo la oferta monetaria y potenciando el gasto público."
    },
    {
        id: 71,
        area: "Econometría",
        pregunta: "¿Qué mide el coeficiente de asimetría (skewness) en la evaluación de los residuos de un modelo econométrico?",
        opciones: [
            "A) El grado de sesgo o falta de simetría de la distribución de probabilidad de los errores respecto a su media",
            "B) El grado de aplastamiento o grosor de las colas de la distribución",
            "C) La correlación serial entre observaciones consecutivas en el tiempo",
            "D) La proporción de varianza explicada por el modelo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El coeficiente de asimetría mide si la distribución de los residuos se concentra más hacia un lado (sesgo positivo o negativo) en lugar de ser simétrica como la distribución normal."
    },
    {
        id: 72,
        area: "Economía Internacional",
        pregunta: "¿Cuál es el objetivo principal de la creación de una unión aduanera entre países firmantes?",
        opciones: [
            "A) Establecer aranceles externos comunes frente a terceros países y eliminar aranceles y barreras comerciales internas entre los miembros",
            "B) Unificar la moneda nacional y adoptar un banco central único supranacional",
            "C) Permitir la libre movilidad de trabajadores sin restricciones migratorias",
            "D) Coordinar políticas fiscales y presupuestarias unificadas"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una unión aduanera profundiza la integración económica al eliminar aranceles intracomunitarios y adoptar un arancel externo común frente al resto del mundo."
    },
    {
        id: 73,
        area: "Microeconomía",
        pregunta: "¿Qué establece la ley de los rendimientos marginales decrecientes en la producción?",
        opciones: [
            "A) Que a partir de cierto punto, añadir unidades adicionales de un insumo variable a una cantidad fija de otros insumos genera incrementos cada vez menores en el producto total",
            "B) Que los costos fijos totales aumentan de forma proporcional al nivel de producción",
            "C) Que los precios de los factores productivos se incrementan por saturación del mercado",
            "D) Que la elasticidad de sustitución técnica es siempre igual a uno"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los rendimientos marginales decrecientes reflejan que la adición continua de un factor variable sobre un factor fijo termina reduciendo la productividad marginal de dicho insumo."
    },
    {
        id: 74,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el deflactor del PIB?",
        opciones: [
            "A) Un índice de precios que mide la variación promedio de los precios de todos los bienes y servicios que componen el PIB nacional",
            "B) La tasa de inflación anual calculada exclusivamente sobre la canasta de consumo urbano",
            "C) El incremento porcentual de las importaciones netas frente al tipo de cambio real",
            "D) El poder adquisitivo de los salarios mínimos reales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El deflactor del PIB es un índice de precios implícito que resulta de dividir el PIB nominal entre el PIB real, reflejando la evolución de los precios de la producción nacional."
    },
    {
        id: 75,
        area: "Econometría",
        pregunta: "¿Qué problema analítico presentan los datos de panel con efectos no observados si se estiman por MCO agrupado (pooled OLS) ignorando la heterogeneidad individual?",
        opciones: [
            "A) Sesgo por heterogeneidad omitida, ya que el término de error agrupa características invariantes específicas de cada individuo correlacionadas con los regresores",
            "B) Pérdida total de grados de libertad en la muestra de series de tiempo",
            "C) Generación de autocorrelación serial cruzada de orden infinito",
            "D) Imposibilidad matemática de calcular las medias muestrales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El MCO agrupado en datos de panel sesga los estimadores si existen efectos individuales no observables correlacionados; por ello se emplean modelos de efectos fijos o aleatorios."
    },
    {
        id: 76,
        area: "Economía del Desarrollo",
        pregunta: "¿Qué describe la hipótesis de la curva de Kuznets en economía ambiental?",
        opciones: [
            "A) Una relación en forma de 'U' invertida entre la degradación ambiental y el ingreso per cápita, sugiriendo que el deterioro empeora en las primeras etapas de industrialización y mejora conforme aumentan los ingresos",
            "B) La relación directa entre la tasa de ahorro y el crecimiento demográfico rural",
            "C) El impacto de la apertura comercial sobre la desigualdad salarial urbana",
            "D) La correlación entre la inflación crónica y la devaluación cambiaria"
        ],
        respuestaCorrecta: 3,
        explicacion: "La curva de Kuznets ambiental postula que el desarrollo económico inicial degrada el medio ambiente, pero al alcanzar mayores niveles de renta, la sociedad demanda y adopta estándares ecológicos más limpios."
    },
    {
        id: 77,
        area: "Microeconomía",
        pregunta: "¿Qué indica una elasticidad precio de la demanda igual a menos uno (-1) en valor absoluto?",
        opciones: [
            "A) Demanda con elasticidad unitaria, donde los cambios en el precio no alteran el ingreso total de los productores",
            "B) Demanda perfectamente elástica",
            "C) Demanda inelástica que reduce los ingresos ante aumentos de precios",
            "D) Demanda rígida independiente del precio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Con elasticidad unitaria, la variación porcentual del precio es exactamente igual a la variación porcentual de la cantidad, maximizando el ingreso total de la empresa."
    },
    {
        id: 78,
        area: "Macroeconomía",
        pregunta: "¿Qué establece la regla de política monetaria conocida como la 'Regla de Taylor'?",
        opciones: [
            "A) Cómo debe ajustar el banco central la tasa de interés de referencia en respuesta a desviaciones de la inflación respecto a su meta y a brechas del producto",
            "B) La proporción exacta de reservas internacionales que deben respaldar la emisión billetes",
            "C) El límite máximo de endeudamiento público permitido como porcentaje del PIB",
            "D) La tasa de depreciación cambiaria admisible en bandas de flotación"
        ],
        respuestaCorrecta: 1,
        explicacion: "La regla de Taylor es una directriz de política monetaria que recomienda subir las tasas de interés si la inflación supera la meta o si el producto excede su potencial."
    },
    {
        id: 79,
        area: "Econometría",
        pregunta: "¿Qué mide la curtosis en el análisis de la distribución de los errores de un modelo econométrico?",
        opciones: [
            "A) El grado de concentración de los valores alrededor de la media y el grosor de las colas de la distribución (apuntamiento)",
            "B) La asimetría direccional positiva de los coeficientes",
            "C) La correlación serial de orden superior en series financieras",
            "D) El nivel de homocedasticidad de las perturbaciones"
        ],
        respuestaCorrecta: 2,
        explicacion: "La curtosis evalúa la propensión de la distribución a generar valores atípicos extremos, comparando el grosor de las colas de los residuos frente a una distribución normal (mesocúrtica)."
    },
    {
        id: 80,
        area: "Organización Industrial",
        pregunta: "¿Qué caracteriza a un mercado disputado (contestable markets) según la teoría de William Baumol?",
        opciones: [
            "A) Un mercado con costos de entrada y salida hundidos nulos, donde la amenaza de entrada potencial de nuevos competidores disciplina a las empresas establecidas, obligándolas a fijar precios competitivos sin importar que sean pocas",
            "B) Un mercado regulado estrictamente por agencias monopólicas estatales",
            "C) Un sector industrial protegido por aranceles prohibitivos a la importación",
            "D) Un cártel internacional de precios fijos"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los mercados disputados demuestran que incluso un monopolio u oligopolio puede comportarse de forma competitiva si la entrada y salida son libres de costos hundidos (hit-and-run entry)."
    },
    {
        id: 81,
        area: "Microeconomía",
        pregunta: "¿Qué representa el excedente del consumidor en un mercado competitivo?",
        opciones: [
            "A) La diferencia entre la disposición máxima a pagar de los consumidores y el precio efectivamente pagado en el mercado",
            "B) El beneficio neto obtenido por los productores al vender por encima de sus costos marginales",
            "C) El volumen de inventarios no vendidos al final del periodo comercial",
            "D) La recaudación fiscal obtenida mediante impuestos indirectos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El excedente del consumidor mide el beneficio monetario neto que obtienen los compradores al adquirir un bien a un precio de mercado inferior al que estarían dispuestos a pagar."
    },
    {
        id: 82,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el ahorro nacional bruto en la contabilidad macroeconómica?",
        opciones: [
            "A) La suma del ahorro privado (familias y empresas) y el ahorro público (superávit presupuestario del gobierno)",
            "B) La inversión extranjera directa neta recibida en el sector financiero",
            "C) La acumulación de reservas internacionales en poder del banco central",
            "D) El valor total de los activos fijos depreciados en la industria"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ahorro nacional bruto agrega el remanente del ingreso disponible no consumido por el sector privado y el sector público, financiando la formación bruta de capital."
    },
    {
        id: 83,
        area: "Econometría",
        pregunta: "¿Qué problema resuelve la aplicación de mínimos cuadrados en dos etapas (MC2E)?",
        opciones: [
            "A) La estimación consistente de modelos econométricos estructurales que presentan endogeneidad por simultaneidad o variables instrumentales",
            "B) La corrección de heterocedasticidad condicional ARCH en alta frecuencia financiera",
            "C) La eliminación de multicolinealidad perfecta en matrices singulares",
            "D) El cálculo de estimadores para variables dependientes censuradas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método de MC2E es una técnica de dos pasos empleada para estimar ecuaciones simultáneas endógenas utilizando instrumentos válidos en la primera etapa."
    },
    {
        id: 84,
        area: "Economía Internacional",
        pregunta: "¿Qué indica una depreciación real del tipo de cambio de un país?",
        opciones: [
            "A) Que los bienes nacionales se han abaratado en relación con los bienes extranjeros, mejorando la competitividad precio externa",
            "B) Que la moneda local ha ganado poder adquisitivo frente al dólar estadounidense",
            "C) Que los aranceles a la importación han sido eliminados por tratados comerciales",
            "D) Que la inflación interna supera a la tasa de interés internacional"
        ],
        respuestaCorrecta: 3,
        explicacion: "El tipo de cambio real pondera el tipo de cambio nominal con los niveles de precios relativos; una depreciación real abrata los productos locales frente a los foráneos, estimulando exportaciones."
    },
    {
        id: 85,
        area: "Microeconomía",
        pregunta: "¿Qué define la discriminación de precios de primer grado (perfecta)?",
        opciones: [
            "A) Cuando el monopolista cobra a cada consumidor el precio exacto que está dispuesto a pagar como máxima disposición marginal (precio de reserva)",
            "B) Cuando se segmenta a los consumidores por volumen de compra en bloques sucesivos",
            "C) Cuando se establecen tarifas diferenciadas por grupos demográficos o regiones",
            "D) Cuando se cobra un cargo fijo de acceso y un precio variable por unidad consumida"
        ],
        respuestaCorrecta: 0,
        explicacion: "En la discriminación de primer grado, el monopolista extrae todo el excedente del consumidor cobrando a cada comprador su precio de reserva individual."
    },
    {
        id: 86,
        area: "Macroeconomía",
        pregunta: "¿Qué postula la teoría del ciclo económico real (CER)?",
        opciones: [
            "A) Que las fluctuaciones económicas y las recesiones son impulsadas principalmente por shocks tecnológicos reales de oferta y no por fallas en la demanda agregada",
            "B) Que el desempleo involuntario es causado por rigideces salariales nominales",
            "C) Que la política monetaria expansiva es el motor principal del crecimiento a largo plazo",
            "D) Que los déficits fiscales estimulan permanentemente el empleo estructural"
        ],
        respuestaCorrecta: 1,
        explicacion: "La teoría del ciclo real atribuye las fluctuaciones macroeconómicas a respuestas óptimas de los agentes ante choques reales de productividad y tecnología."
    },
    {
        id: 87,
        area: "Econometría",
        pregunta: "¿Qué evalúa la prueba de Jarque-Bera en el diagnóstico de un modelo econométrico?",
        opciones: [
            "A) La normalidad conjunta de los residuos del modelo mediante los coeficientes de asimetría y curtosis",
            "B) La existencia de raíz unitaria en procesos autorregresivos",
            "C) La presencia de correlación serial de orden superior en series financieras",
            "D) La estabilidad estructural de los parámetros de pendiente"
        ],
        respuestaCorrecta: 2,
        explicacion: "La prueba de Jarque-Bera contrasta la hipótesis nula de que los errores siguen una distribución normal evaluando si sus valores de asimetría y curtosis se asemejan a los de una normal."
    },
    {
        id: 88,
        area: "Organización Industrial",
        pregunta: "¿Qué caracteriza al modelo de competencia monopolística de Chamberlin?",
        opciones: [
            "A) La existencia de muchas empresas que ofrecen productos diferenciados pero sustituibles, con libre entrada y salida que anula los beneficios extraordinarios en el largo plazo",
            "B) Un duopolio colusorio con patentes industriales",
            "C) La fijación de precios idénticos por parte de empresas con costos marginales nulos",
            "D) La regulación estatal de tarifas en servicios públicos esenciales"
        ],
        respuestaCorrecta: 3,
        explicacion: "El modelo de Chamberlin combina competencia y monopolio: cada firma enfrenta una demanda con pendiente negativa por su diferenciación, pero la libre entrada reduce el beneficio económico a cero en el largo plazo."
    },
    {
        id: 89,
        area: "Microeconomía",
        pregunta: "¿Qué representa la función de gasto mínimo en la dualidad del consumidor?",
        opciones: [
            "A) El costo monetario mínimo necesario para que el consumidor alcance un nivel determinado de utilidad dados los precios de los bienes",
            "B) La renta máxima disponible para adquirir la cesta óptima de bienes",
            "C) El excedente acumulado de los consumidores ante reducciones de precios",
            "D) La pendiente de la curva de indiferencia evaluada en el origen"
        ],
        respuestaCorrecta: 0,
        explicacion: "La función de gasto mínimo representa el problema dual del consumidor: gastar la menor cantidad posible de dinero para asegurar una utilidad objetivo dada."
    },
    {
        id: 90,
        area: "Macroeconomía",
        pregunta: "¿Qué indica una brecha del producto (output gap) positiva?",
        opciones: [
            "A) Que el PIB efectivo supera al PIB potencial, indicando un sobrecalentamiento de la economía con presiones inflacionarias",
            "B) Que la economía se encuentra en una recesión profunda con alta capacidad instalada ociosa",
            "C) Que el desempleo cíclico es superior a la tasa natural de largo plazo",
            "D) Que el déficit fiscal supera los límites constitucionales establecidos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una brecha del producto positiva muestra que la producción real es mayor que el nivel potencial sostenible, generando tensiones alcistas sobre los precios y salarios."
    },
    {
        id: 91,
        area: "Econometría",
        pregunta: "¿Qué utilidad tiene la estimación de modelos de rezagos distribuidos en econometría de series de tiempo?",
        opciones: [
            "A) Capturar el impacto dinámico rezagado que tienen los cambios en una variable explicativa sobre la variable dependiente a lo largo de varios periodos",
            "B) Corregir automáticamente los problemas de multicolinealidad perfecta",
            "C) Eliminar la necesidad de realizar pruebas de raíz unitaria",
            "D) Estimar ecuaciones con variables dependientes cualitativas tricotómicas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los modelos de rezagos distribuidos permiten analizar efectos de choque temporales que se propagan y acumulan a lo largo del tiempo en las series económicas."
    },
    {
        id: 92,
        area: "Economía Pública",
        pregunta: "¿Qué establece el teorema de imposibilidad de Arrow en la economía del bienestar?",
        opciones: [
            "A) Que ningún sistema de votación democrática ordinal puede transformar las preferencias individuales en una función de bienestar social coherente que cumpla simultáneamente con un conjunto de axiomas razonables de equidad y racionalidad",
            "B) Que los impuestos proporcionales siempre generan mayor pérdida de eficiencia que los impuestos de suma fija",
            "C) Que los bienes públicos nunca pueden financiarse mediante aportaciones voluntarias",
            "D) Que el equilibrio general competitivo es siempre Pareto eficiente en presencia de externalidades"
        ],
        respuestaCorrecta: 3,
        explicacion: "El teorema de Arrow demuestra las limitaciones lógicas de la agregación de preferencias sociales, probando que no existe una regla de votación perfecta sin dictadura."
    },
    {
        id: 93,
        area: "Microeconomía",
        pregunta: "¿Qué muestra el mapa de curvas de indiferencia de un consumidor racional?",
        opciones: [
            "A) Las infinitas combinaciones de cestas de bienes que otorgan al consumidor el mismo nivel de satisfacción o utilidad",
            "B) Las restricciones presupuestarias limitadas por los precios relativos del mercado",
            "C) Las combinaciones óptimas de factores de producción en la empresa",
            "D) La trayectoria de los precios de equilibrio ante choques de oferta"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una curva de indiferencia agrupa combinaciones de consumo que resultan igualmente preferidas por el agente, reflejando sus preferencias ordinales."
    },
    {
        id: 94,
        area: "Macroeconomía",
        pregunta: "¿Qué expresa la teoría de la oferta agregada de Lucas basada en percepciones erróneas?",
        opciones: [
            "A) Que los oferentes pueden confundir un cambio en el nivel general de precios con un incremento en el precio relativo de su propio producto, induciendo fluctuaciones temporales en la producción ante sorpresas monetarias",
            "B) Que los salarios nominales son rígidos por contratos sindicales multianuales",
            "C) Que la inflación es estrictamente un fenómeno fiscal de largo plazo",
            "D) Que el desempleo estructural depende exclusivamente de los subsidios gubernamentales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo de información imperfecta de Lucas postula que las sorpresas inflacionarias temporales confunden a los productores, generando una pendiente positiva en la oferta agregada a corto plazo."
    },
    {
        id: 95,
        area: "Econometría",
        pregunta: "¿Qué problema corrige la aplicación de errores estándar robustos de White en la estimación por MCO?",
        opciones: [
            "A) La invalidez de la inferencia estadística provocada por la presencia de heterocedasticidad desconocida en los errores",
            "B) La existencia de correlación serial de orden superior en series de tiempo",
            "C) El sesgo de simultaneidad en sistemas de oferta y demanda",
            "D) La presencia de multicolinealidad perfecta en muestras pequeñas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los errores robustos de White corrigen la varianza estimada de los coeficientes MCO ante la presencia de heterocedasticidad, permitiendo realizar pruebas de hipótesis válidas."
    },
    {
        id: 96,
        area: "Economía Internacional",
        pregunta: "¿Qué postula el modelo de comercio de Paul Krugman basado en competencia monopolística y economías de escala intraindustriales?",
        opciones: [
            "A) Que los países pueden comerciar bienes similares (comercio intraindustrial) para aprovechar economías de escala a gran escala y ofrecer mayor variedad a los consumidores, incluso entre naciones con dotaciones factoriales idénticas",
            "B) Que el comercio internacional se explica exclusivamente por diferencias tecnológicas absolutas",
            "C) Que los aranceles proteccionistas benefician el bienestar neto de los consumidores locales",
            "D) Que la ventaja comparativa depende estrictamente de la abundancia de recursos naturales"
        ],
        respuestaCorrecta: 3,
        explicacion: "El nuevo comercio internacional de Krugman explica por qué naciones similares comercian entre sí, impulsadas por economías de escala y la preferencia de los consumidores por la variedad."
    },
    {
        id: 97,
        area: "Microeconomía",
        pregunta: "¿Qué define la condición de optimalidad en el consumo donde la TMS se iguala al cociente de precios de los bienes ($TMS = P_x / P_y$)?",
        opciones: [
            "A) El punto de tangencia entre la recta presupuestaria y la curva de indiferencia más alta alcanzable, maximizando la utilidad del consumidor",
            "B) El punto de cierre operativo de una empresa competitiva",
            "C) La asignación eficiente en la producción industrial sin costos hundidos",
            "D) El equilibrio de mercado en competencia monopolística"
        ],
        respuestaCorrecta: 0,
        explicacion: "La tangencia entre la restricción presupuestaria y la curva de indiferencia garantiza que la valoración marginal subjetiva del consumidor iguale a los precios relativos del mercado."
    },
    {
        id: 98,
        area: "Macroeconomía",
        pregunta: "¿Qué objetivo persigue la instrumentación de un banco central independiente en el diseño de la política macroeconómica?",
        opciones: [
            "A) Evitar el sesgo inflacionario derivado de la tentación de los gobiernos de financiar déficits fiscales mediante emisión monetaria discrecional con fines electorales",
            "B) Fijar arbitrariamente las tasas de interés de los créditos hipotecarios comerciales",
            "C) Subordinar la estabilidad de precios a las metas de empleo gubernamental",
            "D) Garantizar el control directo de los precios de la canasta básica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La independencia del banco central blinda la política monetaria de la manipulación política de corto plazo, anclando las expectativas de inflación a largo plazo de manera creíble."
    },
    {
        id: 99,
        area: "Econometría",
        pregunta: "¿Qué mide el estadístico t de Student en una prueba de hipótesis individual para un coeficiente de regresión estimada?",
        opciones: [
            "A) Si el coeficiente estimado difiere estadísticamente de cero (o de un valor hipotético específico), evaluando su significancia individual",
            "B) La bondad de ajuste global de todo el modelo econométrico",
            "C) La normalidad de los residuos en el análisis de curtosis",
            "D) La estabilidad estructural del modelo ante quiebres temporales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El contraste t evalúa la hipótesis nula de que un parámetro específico es igual a cero, midiendo cuántas desviaciones estándar se aleja el estimador del valor nulo propuesto."
    },
    {
        id: 100,
        area: "Organización Industrial",
        pregunta: "¿Qué mide el índice de concentración de Herfindahl-Hirschman (IHH) en la estructura de un mercado?",
        opciones: [
            "A) La suma de los cuadrados de las cuotas de mercado (expresadas en porcentaje) de todas las empresas de la industria, midiendo el grado de concentración u oligopolio",
            "B) El porcentaje de las cuatro empresas más grandes en las ventas totales del sector",
            "C) La relación entre costos fijos y costos variables de la firma líder",
            "D) La elasticidad de sustitución de los productos diferenciados"
        ],
        respuestaCorrecta: 3,
        explicacion: "El índice IHH pondera de manera no lineal el peso de las empresas en el mercado elevando al cuadrado sus cuotas porcentuales, penalizando los monopolios y oligopolios concentrados."
    },
    {
        id: 101,
        area: "Microeconomía",
        pregunta: "¿Qué expresa la función de costos totales a largo plazo de una empresa?",
        opciones: [
            "A) El costo mínimo necesario para producir cada nivel de producción cuando todos los factores productivos son totalmente variables",
            "B) Los pagos por intereses de deudas acumuladas en periodos anteriores",
            "C) La suma de los costos fijos insolubles y los costos salariales corrientes",
            "D) El valor de reposición de la maquinaria depreciada en el año base"
        ],
        respuestaCorrecta: 0,
        explicacion: "A largo plazo no existen costos fijos; todos los insumos son variables, por lo que la función de costos representa la envolvente inferior de minimización de costos."
    },
    {
        id: 102,
        area: "Macroeconomía",
        pregunta: "¿Qué establece la teoría del ciclo vital de Franco Modigliani sobre el comportamiento del consumo?",
        opciones: [
            "A) Que los individuos planean su consumo y ahorro a lo largo de todo su ciclo de vida esperado, acumulando riqueza durante sus años activos para desahorrarla durante la etapa de jubilación",
            "B) Que el consumo corriente depende exclusivamente de los ingresos monetarios percibidos en el mes en curso",
            "C) Que las decisiones de ahorro son independientes de la estructura demográfica de la población",
            "D) Que los impuestos futuros no tienen ningún impacto en la riqueza neta de las familias"
        ],
        respuestaCorrecta: 1,
        explicacion: "Modigliani demostró que las personas suavizan su consumo a lo largo de su vida útil anticipando sus etapas de ingresos laborales y su retiro."
    },
    {
        id: 103,
        area: "Econometría",
        pregunta: "¿Qué propiedad describe el teorema de Gauss-Markov respecto al estimador de MCO en muestras finitas?",
        opciones: [
            "A) Que es el Mejor Lineal Insesgado (MELI), poseyendo la mínima varianza entre todos los estimadores lineales insesgados",
            "B) Que sus residuos se distribuyen de forma estrictamente normal sin importar el tamaño de la muestra",
            "C) Que es insensible ante la presencia de valores atípicos extremos",
            "D) Que elimina automáticamente la autocorrelación de las series de tiempo"
        ],
        respuestaCorrecta: 2,
        explicacion: "Bajo los supuestos clásicos, Gauss-Markov garantiza que MCO es MELI (Mejor Estimador Lineal Insesgado), asegurando máxima eficiencia estadística en su clase."
    },
    {
        id: 104,
        area: "Economía Internacional",
        pregunta: "¿Cuál es el propósito del mecanismo de intervención cambiaria en un sistema de tipo de cambio administrado (suio sucio / dirty float)?",
        opciones: [
            "A) Permitir que el tipo de cambio fluctúe según el mercado, pero con compras o ventas de divisas por parte del banco central para evitar volatilidad excesiva o movimientos desalineados",
            "B) Fijar una paridad cambiaria invariable e irrevocable por ley",
            "C) Eliminar por completo el comercio internacional de mercancías",
            "D) Sustituir la moneda nacional por una divisa extranjera de curso legal"
        ],
        respuestaCorrecta: 3,
        explicacion: "En la flotación administrada, la autoridad monetaria interviene discrecionalmente en el mercado cambiario para suavizar fluctuaciones bruscas sin comprometer una paridad fija estricta."
    },
    {
        id: 105,
        area: "Microeconomía",
        pregunta: "¿Qué representa la elasticidad precio cruzada positiva entre dos bienes diferenciados?",
        opciones: [
            "A) Que ambos bienes son sustitutos, de modo que el incremento en el precio de uno eleva la demanda del otro",
            "B) Que ambos bienes son complementarios perfectos en el consumo",
            "C) Que se trata de bienes independientes sin relación de mercado",
            "D) Que el bien es de consumo inferior obligatorio"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una elasticidad cruzada positiva indica que ante el encarecimiento de un bien, los consumidores desplazan su preferencia hacia el bien alternativo, confirmando su condición de sustitutos."
    },
    {
        id: 106,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el coeficiente de Gini en la economía de un país?",
        opciones: [
            "A) El grado de desigualdad en la distribución del ingreso o de la riqueza entre los habitantes, tomando valores entre 0 (igualdad perfecta) y 1 (desigualdad máxima)",
            "B) La proporción de la población que se encuentra bajo la línea de pobreza extrema",
            "C) La tasa de crecimiento interanual del PIB real per cápita",
            "D) El nivel de concentración industrial medido por cuotas de mercado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El índice de Gini se deriva geométricamente de la curva de Lorenz, cuantificando la desigualdad distributiva de los ingresos en la sociedad."
    },
    {
        id: 107,
        area: "Econometría",
        pregunta: "¿Qué corrige el método de corrección de errores (MCE) en el análisis de series de tiempo cointegradas?",
        opciones: [
            "A) Modela conjuntamente la dinámica de corto plazo y la relación de equilibrio estacionario de largo plazo entre variables no estacionarias cointegradas",
            "B) Elimina la autocorrelación serial mediante diferenciación simple perdiendo la tendencia a largo plazo",
            "C) Corrige la heterocedasticidad multiplicativa en paneles de datos financieros",
            "D) Resuelve el sesgo por omisión de variables instrumentales endógenas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El modelo de corrección de errores (MCE) vincula los ajustes de corto plazo con la desviación respecto al equilibrio de largo plazo (cointegración), evitando regresiones espurias."
    },
    {
        id: 108,
        area: "Organización Industrial",
        pregunta: "¿Qué describe el dilema del prisionero aplicado al análisis de colusión en un cártel oligopólico?",
        opciones: [
            "A) Aunque a las empresas les convendría coludir para fijar el precio de monopolio y maximizar beneficios conjuntos, los incentivos individuales a hacer trampa (desviar y capturar más mercado) conducen a un equilibrio de Nash donde ambas compiten y obtienen peores resultados",
            "B) Que la cooperación voluntaria garantiza beneficios estables de largo plazo sin necesidad de vigilancia",
            "C) Que las empresas prefieren fusionarse legalmente antes que competir en precios",
            "D) Que los costos de transacción impiden cualquier acuerdo contractual estratégico"
        ],
        respuestaCorrecta: 3,
        explicacion: "El dilema del prisionero ilustra la inestabilidad inherente de los cárteles: la estrategia dominante individual es romper el pacto, socavando el óptimo colusorio colectivo."
    },
    {
        id: 109,
        area: "Microeconomía",
        pregunta: "¿Cuál es la condición de equilibrio para un mercado competitivo a largo plazo?",
        opciones: [
            "A) El precio de mercado iguala al costo marginal y al costo medio mínimo de largo plazo, generando beneficios económicos cero (normales)",
            "B) Las empresas obtienen beneficios extraordinarios positivos permanentes protegidos por patentes",
            "C) La cantidad demandada supera a la oferta agregada debido a barreras de entrada",
            "D) El ingreso marginal es superior al costo total medio"
        ],
        respuestaCorrecta: 0,
        explicacion: "A largo plazo, la libre entrada y salida en competencia perfecta ajusta el precio hasta igualar el costo medio mínimo, eliminando los beneficios extraordinarios."
    },
    {
        id: 110,
        area: "Macroeconomía",
        pregunta: "¿Qué establece la proposición de la neutralidad del dinero a largo plazo?",
        opciones: [
            "A) Que las variaciones en la oferta monetaria nominal afectan exclusivamente a las variables nominales (como precios y salarios), sin alterar las variables reales de la economía (como el PIB real o el desempleo)",
            "B) Que la política monetaria es el instrumento más eficaz para reactivar la producción a corto plazo",
            "C) Que la tasa de interés real se mantiene invariable ante cualquier choque inflacionario",
            "D) Que el tipo de cambio nominal no guarda relación con la masa monetaria"
        ],
        respuestaCorrecta: 1,
        explicacion: "La neutralidad a largo plazo postula que imprimir dinero en exceso solo genera inflación generalizada, sin modificar la estructura productiva real ni el empleo de equilibrio."
    },
    {
        id: 111,
        area: "Econometría",
        pregunta: "¿Qué problema analítico presentan los datos de panel con efectos no observados si se estiman por MCO agrupado (pooled OLS) ignorando la heterogeneidad individual?",
        opciones: [
            "A) Sesgo por heterogeneidad omitida, ya que el término de error agrupa características invariantes específicas de cada individuo correlacionadas con los regresores",
            "B) Pérdida total de grados de libertad en la muestra de series de tiempo",
            "C) Generación de autocorrelación serial cruzada de orden infinito",
            "D) Imposibilidad matemática de calcular las medias muestrales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El MCO agrupado en datos de panel sesga los estimadores si existen efectos individuales no observables correlacionados; por ello se emplean modelos de efectos fijos o aleatorios."
    },
    {
        id: 112,
        area: "Economía Pública",
        pregunta: "¿En qué consiste la falla de mercado conocida como 'selección adversa' (información asimétrica ex-ante)?",
        opciones: [
            "A) Una situación en la cual una de las partes contratantes posee información privada sobre la calidad de un bien antes de la transacción, provocando que los productos de mala calidad desplacen a los buenos del mercado (mercado de 'lemons')",
            "B) El comportamiento negligente de un asegurado tras firmar el contrato de cobertura",
            "C) La negativa de los ciudadanos a pagar impuestos por bienes públicos puros",
            "D) El control monopólico de precios en sectores regulados por el Estado"
        ],
        respuestaCorrecta: 3,
        explicacion: "La selección adversa ocurre antes del intercambio debido a asimetría informativa sobre características ocultas, colapsando mercados como el de seguros de salud o vehículos usados."
    },
    {
        id: 113,
        area: "Microeconomía",
        pregunta: "¿Qué representa la función de oferta de una empresa en competencia perfecta a corto plazo?",
        opciones: [
            "A) El tramo de su curva de costo marginal que se encuentra por encima del punto mínimo del costo variable medio",
            "B) La curva completa de costo total medio a partir de su origen",
            "C) El volumen de producción donde los ingresos totales son máximos absolutos",
            "D) La trayectoria de los costos fijos unitarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "Como la regla de maximización es $P = CMg$ y la empresa cierra si $P < CVMe$, la curva de oferta competitiva de corto plazo coincide con el tramo ascendente del costo marginal sobre el mínimo del CVMe."
    },
    {
        id: 114,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el coeficiente de apertura comercial de una economía nacional?",
        opciones: [
            "A) El cociente entre la suma de exportaciones e importaciones totales y el Producto Interno Bruto (PIB)",
            "B) La proporción de aranceles promedio aplicados a la importación industrial",
            "C) El volumen de inversión extranjera directa respecto a la deuda externa",
            "D) La tasa de cobertura de las reservas internacionales netas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El coeficiente de apertura comercial cuantifica el grado de integración e interdependencia de un país con los mercados internacionales de bienes y servicios en relación con su tamaño económico."
    },
    {
        id: 115,
        area: "Econometría",
        pregunta: "¿Qué evalúa la prueba de Hausman en la selección de modelos de datos de panel?",
        opciones: [
            "A) Contrasta si los efectos individuales no observados están correlacionados con las variables explicativas, permitiendo decidir estadísticamente entre un modelo de efectos aleatorios y uno de efectos fijos",
            "B) Evalúa la presencia simultánea de heterocedasticidad y autocorrelación en series temporales",
            "C) Comprueba la normalidad exacta de los errores en muestras finitas de corte transversal",
            "D) Detecta la existencia de multicolinealidad perfecta en matrices de covarianza"
        ],
        respuestaCorrecta: 2,
        explicacion: "La prueba de Hausman compara los estimadores de efectos fijos (consistentes bajo cualquier supuesto) y efectos aleatorios (eficientes bajo exogeneidad); si difieren sistemáticamente, se prefiere efectos fijos."
    },
    {
        id: 116,
        area: "Economía del Bienestar",
        pregunta: "¿Qué establece el primer teorema fundamental de la economía del bienestar?",
        opciones: [
            "A) Que todo equilibrio competitivo en un mercado libre y sin externalidades es una asignación Pareto eficiente",
            "B) Que el Estado debe intervenir obligatoriamente para corregir la distribución del ingreso",
            "C) Que los monopolios naturales logran la eficiencia asignativa sin regulación",
            "D) Que los bienes públicos puros son provistos óptimamente por el sector privado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El primer teorema fundamental formaliza la 'mano invisible' de Adam Smith, demostrando que bajo competencia perfecta y ausencia de fallas de mercado, el equilibrio general es Pareto óptimo."
    },
    {
        id: 117,
        area: "Microeconomía",
        pregunta: "¿Qué expresa la condición de tangencia en la optimización del consumidor con bienes perfectamente sustitutos?",
        opciones: [
            "A) Los bienes sustitutos perfectos tienen curvas de indiferencia lineales con pendiente constante, por lo que el óptimo suele ser una solución de esquina donde el consumidor gasta todo su ingreso en el bien más barato",
            "B) Las curvas de indiferencia forman un ángulo recto en forma de L",
            "C) La tasa marginal de sustitución es estrictamente creciente a lo largo de toda la cesta",
            "D) El consumidor divide su presupuesto en partes iguales obligatorias"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los sustitutos perfectos implican una TMS constante; el consumidor elegirá exclusivamente el bien con menor precio relativo, generando soluciones de esquina a menos que los precios relativos coincidan con la pendiente."
    },
    {
        id: 118,
        area: "Macroeconomía",
        pregunta: "¿Qué mide el multiplicador monetario en el sistema financiero?",
        opciones: [
            "A) El grado en que una variación en la base monetaria (dinero de alta potencia) se amplifica para determinar la oferta monetaria total (M1 o M2) en la economía",
            "B) El costo de oportunidad de mantener dinero en efectivo frente a bonos",
            "C) La velocidad con la que el banco central modifica la tasa de interés de referencia",
            "D) La proporción de depósitos bancarios encajados obligatoriamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "El multiplicador monetario refleja la capacidad de creación secundaria de dinero del sistema bancario comercial a través de los depósitos y el crédito, dependiendo del encaje legal y la preferencia por efectivo del público."
    },
    {
        id: 119,
        area: "Econometría",
        pregunta: "¿Qué corrige el método de Mínimos Cuadrados Generalizados (MCG) cuando se violan los supuestos clásicos del modelo lineal?",
        opciones: [
            "A) Permite obtener estimadores MELI eficientes cuando los errores presentan heterocedasticidad o autocorrelación conocida de su matriz de varianzas y covarianzas",
            "B) Elimina el sesgo por omisión de variables instrumentales no exógenas",
            "C) Soluciona la no estacionariedad de series temporales con múltiples quiebres estructurales",
            "D) Estima de forma no lineal parámetros de elección discreta multinomial"
        ],
        respuestaCorrecta: 2,
        explicacion: "El método de Mínimos Cuadrados Generalizados (MCG) transforma algebraicamente el modelo original para convertir los errores en esféricos (homocédasticos e incorrelacionados), restaurando la eficiencia estadística."
    },
    {
        id: 120,
        area: "Organización Industrial",
        pregunta: "¿Cuál es la principal implicación de la teoría de los mercados disputados en la regulación de monopolios?",
        opciones: [
            "A) Que si la entrada y salida son libres de costos hundidos, la simple amenaza de competencia potencial obliga al monopolista a fijar precios eficientes sin requerir intervención estatal directa de precios",
            "B) Que los monopolios naturales deben ser expropiados inmediatamente por el Estado",
            "C) Que la colusión entre empresas oligopólicas es jurídicamente indestructible",
            "D) Que las economías de escala impiden la entrada de cualquier competidor potencial"
        ],
        respuestaCorrecta: 3,
        explicacion: "La teoría de mercados disputados revolucionó la regulación antimonopolio al demostrar que la disciplina de mercado puede lograrse mediante la libre contestabilidad potencial (hit-and-run), aun con una sola firma operando."
    }
];