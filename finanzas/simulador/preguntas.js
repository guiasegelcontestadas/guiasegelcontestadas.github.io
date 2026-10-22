const bancoPreguntas = [
    {
        id: 1,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de prueba ácida (liquidez severa) a diferencia de la razón circulante tradicional?",
        opciones: [
            "A) La capacidad de pago excluyendo el valor de los inventarios por ser el activo circulante menos líquido",
            "B) El porcentaje de utilidad neta convertida en flujo operativo al final del ejercicio",
            "C) La cobertura total de intereses frente a la deuda bancaria de corto plazo",
            "D) La rotación anual de las cuentas por cobrar comerciales"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba ácida resta los inventarios del activo circulante antes de dividir entre el pasivo circulante, evaluando la capacidad de liquidar compromisos inmediatos sin depender de las ventas de inventario."
    },
    {
        id: 2,
        area: "Finanzas Corporativas",
        pregunta: "En el cálculo del Costo Promedio Ponderado de Capital (WACC), ¿por qué se aplica un escudo fiscal $(1 - t)$ a la tasa del costo de la deuda ($K_d$)?",
        opciones: [
            "A) Porque los dividendos pagados a los accionistas son deducibles de impuestos",
            "B) Porque los gastos por intereses financieros son deducibles del Impuesto Sobre la Renta (ISR), reduciendo el costo efectivo del financiamiento ajeno",
            "C) Para ajustar la tasa de interés nominal ante la inflación esperada",
            "D) Porque la deuda bancaria incrementa la prima de riesgo del mercado accionario"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los intereses pagados por deudas financieras reducen la utilidad gravable, lo que genera un ahorro fiscal que disminuye el costo efectivo de la deuda para la empresa."
    },
    {
        id: 3,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué tipo de instrumento financiero es un CETES (Certificado de la Tesorería de la Federación) emitido por el Gobierno Federal en México?",
        opciones: [
            "A) Un título de renta variable garantizado por la banca comercial",
            "B) Un bono corporativo cupón cero de largo plazo con tasa flotante",
            "C) Un instrumento de deuda pública cupón cero que se emite a descuento respecto a su valor nominal",
            "D) Un pagaré bancario respaldado por reservas de oro"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los CETES son instrumentos de deuda gubernamental a corto plazo que no pagan cupones periódicos; se compran a un precio de descuento sobre su valor nominal de $10.00 pesos."
    },
    {
        id: 4,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En el Modelo de Valoración de Activos de Capital (CAPM), ¿qué mide el coeficiente Beta ($\beta$) de una acción?",
        opciones: [
            "A) El riesgo no sistemático o diversificable de la empresa individual",
            "B) La tasa interna de retorno promedio de la cartera de renta fija",
            "C) El rendimiento de los bonos gubernamentales libres de riesgo",
            "D) La sensibilidad o riesgo sistemático del rendimiento del título respecto a los movimientos del mercado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El coeficiente Beta cuantifica la volatilidad sistemática de un activo en relación con el conjunto del mercado; un Beta mayor a 1 indica mayor sensibilidad que el promedio."
    },
    {
        id: 5,
        area: "Análisis Financiero",
        pregunta: "En el análisis Dupont de tres factores, ¿cuáles son los componentes que integran el Rendimiento sobre el Capital (ROE)?",
        opciones: [
            "A) Margen de utilidad neta, Rotación de activos totales y Apalancamiento financiero (Activo / Capital)",
            "B) Utilidad de operación, Capital de trabajo y Tasa impositiva efectiva",
            "C) Margen EBITDA, Cobertura de intereses y Rotación de proveedores",
            "D) Utilidad por acción, Razón de endeudamiento y Prueba ácida"
        ],
        respuestaCorrecta: 0,
        explicacion: "La descomposición Dupont clásica desglosa el $ROE$ en la eficiencia operativa ($Margen Neto$), la eficiencia en el uso de activos ($Rotación Activos$) y el efecto del endeudamiento ($Apalancamiento$)."
    },
    {
        id: 6,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué establece la proposición I de Modigliani y Miller en un mercado de capitales perfecto sin impuestos ni costos de quiebra?",
        opciones: [
            "A) Que el valor total de una empresa aumenta a medida que incrementa su deuda bancaria",
            "B) Que la estructura de capital es irrelevante, por lo que el valor de la empresa es independiente de su razón de endeudamiento",
            "C) Que las empresas deben financiarse 100% con capital propio para minimizar el WACC",
            "D) Que los dividendos en efectivo maximizan el precio bursátil de las acciones"
        ],
        respuestaCorrecta: 1,
        explicacion: "En mercados perfectos, el valor de la firma depende de la capacidad generadora de ingresos de sus activos reales y no de la forma en que fragmenta sus títulos entre deuda y capital."
    },
    {
        id: 7,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Cuál es la función principal del Mercado primario de valores?",
        opciones: [
            "A) Facilitar la compraventa diferida de contratos de futuros y opciones",
            "B) Permitir el intercambio de acciones circulantes entre inversionistas particulares",
            "C) Canalizar recursos frescos del público inversionista hacia los emisores mediante la oferta inicial de nuevos títulos",
            "D) Regular el encaje legal de la banca privada ante el banco central"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el mercado primario se realiza la emisión y colocación por primera vez de títulos financieros, permitiendo a empresas y gobiernos captar financiamiento directo de los inversionistas."
    },
    {
        id: 8,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste un contrato de Cobertura de Divisas Forward?",
        opciones: [
            "A) En un acuerdo estandarizado negociado obligatoriamente en la bolsa de derivados",
            "B) En una opción de compra que otorga el derecho pero no la obligación de cambiar divisas",
            "C) En una transacción de contado efectuada con entrega inmediata de moneda extranjera",
            "D) En un contrato privado no estandarizado (OTC) para comprar o vender divisas a una fecha futura y a un tipo de cambio acordado hoy"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un Forward de divisas es un contrato a la medida (OTC) en el que dos partes fijan de antemano el tipo de cambio para una transacción futura, eliminando el riesgo de volatilidad cambiaria."
    },
    {
        id: 9,
        area: "Análisis Financiero",
        pregunta: "¿Cómo se calcula el Ciclo de Conversión de Efectivo (CCE) de una empresa?",
        opciones: [
            "A) Días de Inventario + Días de Cuentas por Cobrar - Días de Cuentas por Pagar",
            "B) Días de Ventas en Efectivo - Días de Gastos Operativos",
            "C) Rotación de Proveedores / Rotación de Inventarios",
            "D) Activo Circulante - Pasivo Circulante sin inventarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "El CCE mide el tiempo transcurrido desde que se paga la materia prima hasta que se cobra la venta del producto terminado: $CCE = DIO + DSO - DPO$."
    },
    {
        id: 10,
        area: "Finanzas Corporativas",
        pregunta: "Al evaluar proyectos con el criterio del Valor Presente Neto (VPN), ¿cuál es la regla de decisión óptima para aceptar una inversión independiente?",
        opciones: [
            "A) Aceptar si el VPN es exactamente igual a la tasa de descuento",
            "B) Aceptar si el VPN es mayor a cero ($VPN > 0$), ya que incrementa el valor de mercado de la empresa",
            "C) Aceptar si el VPN es negativo pero la TIR supera la tasa libre de riesgo",
            "D) Aceptar si el periodo de recuperación es inferior a 10 años"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un $VPN > 0$ indica que los flujos descontados superan la inversión inicial, añadiendo un valor neto equivalente a los accionistas corporativos."
    },
    {
        id: 11,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué diferencia a una opción de compra 'Call' de una opción de venta 'Put'?",
        opciones: [
            "A) La Call cotiza en tasa fija y la Put en tasa flotante",
            "B) La Call solo se liquida en efectivo y la Put en especie",
            "C) La Call da al comprador el derecho de comprar el activo subyacente y la Put el derecho de venderlo",
            "D) La Call carece de precio de ejercicio y la Put exige colateral bancario"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un contrato Call otorga al tenedor el derecho a comprar el activo subyacente a un precio determinado ($Strike$), mientras que el Put otorga el derecho a venderlo."
    },
    {
        id: 12,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide el indicador de Valor en Riesgo (VaR)?",
        opciones: [
            "A) La tasa mínima de rendimiento requerida por un portafolio ante la inflación",
            "B) La ganancia esperada de una posición especulativa en el mercado de divisas",
            "C) La varianza contable del capital social ajustada por impuestos diferidos",
            "D) La pérdida máxima esperada en el valor de un portafolio dentro de un horizonte temporal dado y con un nivel de confianza determinado"
        ],
        respuestaCorrecta: 3,
        explicacion: "El VaR sintetiza en un solo número monetario el riesgo de mercado, estimando la pérdida potencial máxima bajo condiciones normales en un plazo y nivel de confianza estadístico (ej. 95% o 99%)."
    },
    {
        id: 13,
        area: "Análisis Financiero",
        pregunta: "¿Qué distorsión genera en los estados financieros la capitalización de un arrendamiento operativo conforme a la NIF D-5 (IFRS 16)?",
        opciones: [
            "A) Incrementa el activo por derecho de uso y el pasivo por arrendamiento, aumentando el EBITDA al reemplazar el gasto de renta por depreciación e intereses",
            "B) Reduce de inmediato el capital contable sin afectar el balance general",
            "C) Elimina el costo financiero del pasivo en el estado de resultados",
            "D) Disminuye el margen bruto al clasificar las rentas como costo de ventas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Bajo IFRS 16 / NIF D-5, los arrendamientos se reconocen en el balance (activo y pasivo). El gasto de renta desaparece del gasto operativo y se separa en depreciación financiera e intereses, inflando el EBITDA."
    },
    {
        id: 14,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste la teoría del orden de preferencia (Pecking Order Theory) de la estructura de capital?",
        opciones: [
            "A) Las empresas prefieren siempre financiarse emitiendo acciones ordinarias",
            "B) Las empresas financian sus proyectos primero con fondos internos (utilidades retenidas), luego con deuda y como último recurso con emisión de capital",
            "C) Las empresas buscan mantener un nivel fijo de apalancamiento mediante venta de activos",
            "D) Las empresas emiten bonos convertibles para reducir los costos de quiebra"
        ],
        respuestaCorrecta: 1,
        explicacion: "Debido a la información asimétrica, las firmas priorizan el financiamiento interno; si este se agota, emiten deuda segura y solo recurren a la emisión de acciones cuando no hay alternativa."
    },
    {
        id: 15,
        area: "Mercados e Instituciones Financieras",
        pregunta: "En el mercado de dinero, ¿qué función cumple una operación de Reporto (Repo)?",
        opciones: [
            "A) La compraventa definitiva de acciones en la bolsa bursátil",
            "B) El canje swap de tasas de interés variables a fijas entre corporativos",
            "C) Un acuerdo donde el vendedor transfiere valores de deuda al comprador y se compromete a recomprarlos a un plazo y precio prefijado",
            "D) Una colocación de deuda subordinada de largo plazo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El reporto es una venta con pacto de recompra que funciona como un préstamo garantizado con títulos de deuda, proporcionando liquidez a corto plazo al mercado."
    },
    {
        id: 16,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "Según la Teoría Moderna de Portafolio de Harry Markowitz, ¿cómo se elimina el riesgo no sistemático (específico)?",
        opciones: [
            "A) Comprando instrumentos gubernamentales de corto plazo",
            "B) Operando exclusivamente con futuros de índices accionarios",
            "C) Invirtiendo en empresas con alto nivel de apalancamiento operativo",
            "D) Diversificando la cartera con activos cuyos rendimientos no estén perfectamente correlacionados entre sí"
        ],
        respuestaCorrecta: 3,
        explicacion: "Markowitz demostró que al combinar activos con coeficientes de correlación menores a $+1$, la varianza individual de cada activo se compensa, reduciendo o eliminando el riesgo idiosincrásico."
    },
    {
        id: 17,
        area: "Análisis Financiero",
        pregunta: "¿Qué indica un múltiplo Precio/Utilidad (P/U o P/E Ratio) elevado para una empresa emisora en bolsa?",
        opciones: [
            "A) Que el mercado tiene altas expectativas de crecimiento futuro en las utilidades de la empresa o que la acción está sobrevaluada",
            "B) Que la empresa se encuentra al borde de la insolvencia técnica",
            "C) Que los dividendos otorgados superan la tasa libre de riesgo",
            "D) Que el capital contable es inferior al pasivo total de la firma"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un múltiplo P/U alto refleja que los inversionistas están dispuestos a pagar más pesos por cada peso de utilidad actual, anticipando un fuerte crecimiento en los flujos de la compañía."
    },
    {
        id: 18,
        area: "Finanzas Corporativas",
        pregunta: "¿Cómo afecta el costo de oportunidad del capital de trabajo a la tasa de descuento de un proyecto de inversión?",
        opciones: [
            "A) Reduce la tasa de interés nominal de la deuda garantizada",
            "B) Se incorpora explícitamente descontando la inversión neta en capital de trabajo como un flujo de salida al inicio y un flujo de entrada al final",
            "C) Cancela la necesidad de estimar la depreciación fiscal de la planta",
            "D) Incrementa la prima de riesgo del mercado por encima del WACC"
        ],
        respuestaCorrecta: 1,
        explicacion: "El capital de trabajo representa fondos ilíquidos requeridos para operar el proyecto; se descuenta como salida de efectivo inicial y se recupera nominalmente al término de la vida útil."
    },
    {
        id: 19,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es la Estructura Temporal de Tasas de Interés (ETTI) o Curva de Rendimiento?",
        opciones: [
            "A) La diferencia entre el tipo de cambio spot y el tipo de cambio forward",
            "B) La tasa de inflación esperada dividida entre la TIEA interbancaria",
            "C) La representación gráfica que relaciona los rendimientos de bonos de idéntica calidad crediticia con sus respectivos plazos de vencimiento",
            "D) El promedio de los dividendos repartidos en el mercado accionario"
        ],
        respuestaCorrecta: 2,
        explicacion: "La curva de rendimiento grafica las tasas de interés ofrecidas por instrumentos de deuda soberana (o similar riesgo) a diferentes horizontes temporales (ej. de 28 días a 30 años)."
    },
    {
        id: 20,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué evalúa la métrica Financiera conocida como 'Ratio de Sharpe' en un portafolio de inversión?",
        opciones: [
            "A) La proporción de patrimonio financiado con pasivos bancarios",
            "B) El diferencial entre la TIEA y la tasa de referencia del banco central",
            "C) La tasa de rendimiento ponderada por dividendos brutos",
            "D) El exceso de rendimiento del portafolio sobre la tasa libre de riesgo dividido entre la desviación estándar del portafolio (riesgo total)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El Ratio de Sharpe mide la eficiencia de una cartera calculando cuánto rendimiento adicional obtiene el inversionista por cada unidad de riesgo total asustada: $Sharpe = (R_p - R_f) / \sigma_p$."
    },
    {
        id: 21,
        area: "Análisis Financiero",
        pregunta: "¿Qué representa el Grado de Apalancamiento Operativo (GAO) de una empresa?",
        opciones: [
            "A) El cambio porcentual en la utilidad operativa (EBIT) ante una variación porcentual en las ventas, derivado de la presencia de costos fijos de producción",
            "B) La proporción de deuda financiera frente al Capital Social pagado",
            "C) La capacidad de cubrir el servicio de la deuda con el margen bruto",
            "D) La tasa de rendimiento sobre los activos totales netos de depreciación"
        ],
        respuestaCorrecta: 0,
        explicacion: "El GAO mide la sensibilidad de las utilidades operativas respecto a los cambios en ventas; a mayor proporción de costos fijos respecto a costos variables, mayor será el GAO."
    },
    {
        id: 22,
        area: "Finanzas Corporativas",
        pregunta: "En el análisis de recompra de acciones corporativas, ¿cuál es el impacto inmediato sobre las utilidades por acción (UPA / EPS) de la empresa?",
        opciones: [
            "A) Las UPA disminuyen por el costo de transacción bancaria",
            "B) Las UPA aumentan debido a que la utilidad neta se divide entre un menor número de acciones en circulación",
            "C) Las UPA se mantienen invariables por la neutralidad del capital contable",
            "D) Las UPA se vuelven negativas de forma automática"
        ],
        respuestaCorrecta: 1,
        explicacion: "Al reducir el número total de acciones en circulación ($Denominador$), la misma utilidad neta ($Numerador$) se distribuye entre menos títulos, elevando las UPA."
    },
    {
        id: 23,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué autoridad regula y supervisa en México a las instituciones de banca múltiple y casas de bolsa?",
        opciones: [
            "A) La Tesorería de la Federación (TESOFE)",
            "B) El Banco del Bienestar",
            "C) La Comisión Nacional Bancaria y de Valores (CNBV)",
            "D) La CONDUSEF"
        ],
        respuestaCorrecta: 2,
        explicacion: "La CNBV es el órgano desconcentrado de la SHCP encargado de autorizar, regular y supervisar el funcionamiento del sistema bancario y bursátil mexicano."
    },
    {
        id: 24,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En un contrato Swap de tasa de interés (IRS) fijo por flotante, ¿qué flujo recibe la parte que paga la tasa fija?",
        opciones: [
            "A) La tasa de inflación anualizada del mercado secundario",
            "B) Una prima de seguro contra el desempleo de la cartera crédito",
            "C) Un rendimiento garantizado en dólares estadounidenses",
            "D) La tasa de interés flotante (ej. TIEA) acordada sobre un valor nocional especificado"
        ],
        respuestaCorrecta: 3,
        explicacion: "En un Swap financiero fiduciario de tasa, el pagador de tasa fija se compromete a entregar una tasa constante a cambio de recibir los flujos de una tasa de interés flotante de referencia."
    },
    {
        id: 25,
        area: "Análisis Financiero",
        pregunta: "¿Qué significa que el Flujo de Efectivo Libre (Free Cash Flow) de una empresa sea positivo?",
        opciones: [
            "A) Que la empresa cuenta con efectivo sobrante tras cubrir sus gastos operativos y sus necesidades de inversión en capital fijo ($CapEx$) y capital de trabajo",
            "B) Que la utilidad neta contable es exactamente igual al EBITDA del periodo",
            "C) Que la empresa ha liquidado el 100% de su pasivo bancario de largo plazo",
            "D) Que las acciones de la compañía no cotizan con descuento en bolsa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El flujo de efectivo libre refleja la caja disponible para retribuir a los acreedores financieros y a los accionistas tras mantener y expandir la base operativa de activos."
    },
    {
        id: 26,
        area: "Finanzas Corporativas",
        pregunta: "En la evaluación de proyectos de inversión, ¿qué defecto presenta la regla del Periodo de Recuperación de la Inversión (Payback) simple?",
        opciones: [
            "A) Que exagera el impacto del valor de salvamento de los activos",
            "B) Que ignora el valor del dinero en el tiempo y no considera los flujos de efectivo generados después del periodo de corte",
            "C) Que sobrestima sistemáticamente el Costo Promedio Ponderado de Capital",
            "D) Que solo es aplicable a portafolios de renta variable internacional"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Payback no descuenta los flujos futuros (omite el costo de oportunidad) y descarta por completo las ganancias ocurridas posteriormente al punto de recuperación."
    },
    {
        id: 27,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué expresa la Hipótesis de los Mercados Eficientes (HME) en su forma semi-fuerte?",
        opciones: [
            "A) Que los precios reflejan únicamente el historial de precios pasados",
            "B) Que ningún inversionista puede superar al mercado utilizando análisis técnico ni fundamental, porque los precios reflejan toda la información pública disponible",
            "C) Que los precios reflejan absolutamente toda la información, pública y privada (privilegiada)",
            "D) Que las tasas de interés nominales son inmunes a las variaciones del tipo de cambio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La forma semi-fuerte sostiene que los precios de los activos ajustan instantáneamente toda la información pública disponible (estados financieros, noticias, anuncios)."
    },
    {
        id: 28,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En la administración de un portafolio de bonos de renta fija, ¿qué mide la Duración de Macaulay?",
        opciones: [
            "A) La tasa de descuento que iguala el precio de mercado con el valor nominal del título",
            "B) El porcentaje de la emisión adquirida por inversionistas institucionales",
            "C) El rendimiento al vencimiento ($YTM$) ajustado por la tasa de inflación real",
            "D) El tiempo promedio ponderado necesario para recuperar los flujos de efectivo (cupones y principal) de un bono"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Duración de Macaulay calcula el plazo medio ponderado en que el inversionista recupera el costo del bono a través de la recepción de cupones y la amortización final."
    },
    {
        id: 29,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de cobertura de intereses (TIES - Times Interest Earned)?",
        opciones: [
            "A) El cociente de dividir la Utilidad Operativa (EBIT) entre los gastos por intereses financieros",
            "B) El saldo en caja y bancos dividido entre la tasa de interés interbancaria",
            "C) La proporción de dividendos distribuidos sobre las utilidades operativas",
            "D) El Valor Presente Neto de los compromisos bancarios corrientes"
        ],
        respuestaCorrecta: 0,
        explicacion: "La cobertura de intereses muestra cuántas veces la utilidad de operación ($EBIT$) cubre la carga impositiva de intereses financieros; un valor bajo alerta riesgos de impago."
    },
    {
        id: 30,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste el modelo de dividendos de Gordon-Shapiro para la valuación de acciones?",
        opciones: [
            "A) Modela el precio de una acción como el valor contable actualizado por la tasa de descuento corporativa",
            "B) Determina el valor de la acción descontando una corriente perpetua de dividendos que crecen a una tasa constante $g$",
            "C) Valúa la acción multiplicando las UPA esperadas por la Beta de la industria",
            "D) Calcula el costo del capital mediante la prima de riesgo del mercado cambiario"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo de crecimiento constante de Gordon establece que $P_0 = D_1 / (K_e - g)$, exigiendo que la tasa de descuento $K_e$ sea superior a la tasa de crecimiento $g$."
    },
    {
        id: 31,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es un Agente de Bolsa o Casa de Bolsa?",
        opciones: [
            "A) Una institución gubernamental encargada de la emisión de billetes",
            "B) Una entidad privada autorizada para actuar como intermediario en el mercado bursátil, realizando operaciones de compraventa de valores por cuenta propia o de terceros",
            "C) Un fondo asegurador de créditos bancarios vencidos",
            "D) Una agencia calificadora de riesgo soberano"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las Casas de Bolsa son intermediarios autorizados por la CNBV para dar acceso al público a la compraventa de valores listados en el mercado bursátil."
    },
    {
        id: 32,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué representa la línea de mercado de capitales (CML - Capital Market Line)?",
        opciones: [
            "A) La frontera eficiente que relaciona el rendimiento esperado con el riesgo total de activos individuales",
            "B) La tasa de corte mínima para proyectos de inversión apalancados",
            "C) La relación entre la Beta de una acción y la inflación esperada",
            "D) La combinación óptima del activo libre de riesgo y el portafolio de mercado, mostrando el rendimiento esperado frente al riesgo total (desviación estándar) para portafolios eficientes"
        ],
        respuestaCorrecta: 3,
        explicacion: "La CML traza la trayectoria de los portafolios eficientes creados al combinar el activo libre de riesgo con la cartera de mercado óptima."
    },
    {
        id: 33,
        area: "Análisis Financiero",
        pregunta: "¿Qué refleja un rendimiento sobre los activos (ROA) significativamente menor que el rendimiento sobre el capital contable (ROE)?",
        opciones: [
            "A) Que la empresa tiene un apalancamiento financiero positivo, financiado parte de sus activos con deuda que genera una rentabilidad superior a su costo",
            "B) Que la empresa no está pagando impuestos sobre la renta corporativa",
            "C) Que el capital de trabajo de la firma es estrictamente negativo",
            "D) Que los costos variables absorben el 100% del margen bruto"
        ],
        respuestaCorrecta: 0,
        explicacion: "Por la relación $ROE = ROA \times (Activo / Capital)$, si el apalancamiento es mayor a 1 y el costo de la deuda es menor al retorno de los activos, el $ROE$ supera sistemáticamente al $ROA$."
    },
    {
        id: 34,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué se entiende por Costo de Capital Marginal (MCC)?",
        opciones: [
            "A) El costo promedio acumulado de todos los pasivos emitidos en la historia de la firma",
            "B) El costo de obtener el último peso de nuevo financiamiento que la empresa recauda para sus proyectos de inversión",
            "C) La tasa de descuento fijada por el banco central para los créditos a PyMEs",
            "D) La pérdida de valor contable derivada de la depreciación acumulada"
        ],
        respuestaCorrecta: 1,
        explicacion: "El costo marginal de capital representa el costo de levantar un peso adicional de financiamiento, el cual suele incrementarse a medida que se requieren mayores volúmenes de capital."
    },
    {
        id: 35,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué indica la calificación crediticia 'AAA' otorgada por agencias como Moody's, S&P o Fitch?",
        opciones: [
            "A) Que el bono o emisor tiene la máxima calidad crediticia y la menor probabilidad de incumplimiento de pago",
            "B) Que el título financiero tiene carácter especulativo de alto rendimiento ($Junk Bond$)",
            "C) Que el instrumento está respaldado por reservas de divisas no convertibles",
            "D) Que el rendimiento nominal del título se ajusta automáticamente con la tasa de descuento"
        ],
        respuestaCorrecta: 0,
        explicacion: "'AAA' representa el nivel superior dentro del grado de inversión, señalando una capacidad excepcionalmente fuerte del emisor para cumplir con sus obligaciones financieras."
    },
    {
        id: 36,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En el contexto de las Opciones Financieras, ¿qué indica la letra griega Delta ($\Delta$)?",
        opciones: [
            "A) La tasa de variación del precio de la opción ante cambios en la volatilidad implícita",
            "B) El cambio absoluto en la tasa libre de riesgo ante movimientos bursátiles",
            "C) La sensibilidad de la opción ante el paso del tiempo hasta el vencimiento",
            "D) La tasa de cambio esperada en el precio de la opción ante un cambio unitario en el precio del activo subyacente"
        ],
        respuestaCorrecta: 3,
        explicacion: "Delta ($\Delta$) mide la tasa de cambio en la prima de la opción respecto a variaciones en el precio del activo subyacente: $\Delta = \partial C / \partial S$."
    },
    {
        id: 37,
        area: "Análisis Financiero",
        pregunta: "¿Cómo afecta la capitalización de gastos de desarrollo (en lugar de registrar los como gastos operativos en el ejercicio) a los estados financieros?",
        opciones: [
            "A) Incrementa la utilidad operativa y los activos en el periodo actual, pero aumentará la depreciación/amortización en periodos futuros",
            "B) Reduce de inmediato el margen EBITDA y disminuye el activo circulante",
            "C) Cancela los pasivos diferidos sin afectar las utilidades retenidas",
            "D) Incrementa los flujos de efectivo por actividades de operación"
        ],
        respuestaCorrecta: 0,
        explicacion: "Al capitalizar, el desembolso sale del estado de resultados como gasto corriente y se difiere al balance como activo intangible, inflando la utilidad presente pero cargando amortizaciones futuras."
    },
    {
        id: 38,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el valor económico agregado (EVA - Economic Value Added)?",
        opciones: [
            "A) La utilidad neta contable ajustada por el pago de dividendos en acciones",
            "B) La diferencia entre la utilidad operativa neta después de impuestos (NOPAT) y el costo del capital invertido para generar dicha utilidad",
            "C) El excedente monetario obtenido por encima del valor de salvamento",
            "D) La tasa impositiva efectiva aplicada al margen EBITDA"
        ],
        respuestaCorrecta: 1,
        explicacion: "El EVA evalúa si la empresa genera rendimientos superiores al costo del capital empleado: $EVA = NOPAT - (Capital Invertido \times WACC)$."
    },
    {
        id: 39,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿En qué consiste una Euroobligación (Eurobono)?",
        opciones: [
            "A) Un bono denominado exclusivamente en la moneda oficial de la Unión Europea (Euro)",
            "B) Un bono gubernamental emitido en el mercado interno del país emisor",
            "C) Un bono emitido internacionalmente fuera de la jurisdicción del país en cuya moneda está denominado",
            "D) Una hipoteca bursátil respaldada por la banca privada europea"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un Eurobono es un título de deuda denominado en una moneda específica que se vende fuera del mercado nacional del país de esa moneda (ej. bonos en USD vendidos en Japón)."
    },
    {
        id: 40,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide la Duración Modificada de un instrumento de renta fija?",
        opciones: [
            "A) El tiempo exacto que resta para el vencimiento final del título",
            "B) La sensibilidad porcentual aproximada del precio del bono ante una variación de 100 puntos básicos (1%) en su tasa de rendimiento al vencimiento",
            "C) La tasa de interés real neta de la inflación del periodo",
            "D) La probabilidad de incumplimiento de cupones intermedios"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Duración Modificada deriva de la Duración de Macaulay y estima directamente el porcentaje de variación en el precio del bono ante cambios paralelos en las tasas de interés."
    },
    {
        id: 41,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide el Grado de Apalancamiento Financiero (GAF)?",
        opciones: [
            "A) La sensibilidad porcentual de las utilidades por acción (UPA) frente a variaciones porcentuales en la utilidad operativa (EBIT)",
            "B) La relación entre los costos fijos y los costos variables de la planta",
            "C) La proporción de ventas financiadas con crédito comercial de proveedores",
            "D) El costo promedio ponderado de las acciones preferentes"
        ],
        respuestaCorrecta: 0,
        explicacion: "El GAF cuantifica el impacto que tienen los cargos financieros fijos (intereses) sobre las ganancias por acción ($UPA$) ante cambios en la utilidad de operación ($EBIT$)."
    },
    {
        id: 42,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el dividendo en acciones (Stock Dividend)?",
        opciones: [
            "A) Un pago en efectivo extra derivado de la venta de activos fijos",
            "B) El reparto proporcional de acciones adicionales a los accionistas existentes, transfiriendo fondos de utilidades retenidas al capital social sin alterar el valor total del patrimonio",
            "C) La recompra obligatoria de títulos preferentes en la bolsa",
            "D) Una deducción fiscal aplicada a las ganancias de capital"
        ],
        respuestaCorrecta: 1,
        explicacion: "El dividendo en acciones entrega títulos adicionales prorrateados entre los tenedores; recomposición la estructura contable del capital sin alterar la riqueza total ni el valor de la empresa."
    },
    {
        id: 43,
        area: "Mercados e Instituciones Financieras",
        pregunta: "En el mercado cambiario, ¿qué es el tipo de cambio 'Spot'?",
        opciones: [
            "A) La cotización acordada para liquidaciones a plazos mayores de un año",
            "B) El precio acordado hoy para una transacción contingente a opciones",
            "C) El precio de liquidación inmediata de una divisa (generalmente pactado a $T+2$ días hábiles en el mercado mayorista)",
            "D) El diferencial de tasas de interés reales corregido por paridad"
        ],
        respuestaCorrecta: 2,
        explicacion: "El tipo de cambio Spot es el precio de contado actual del mercado cambiario para la entrega estándar e inmediata de divisas."
    },
    {
        id: 44,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué se entiende por Riesgo Sistemático o Riesgo de Mercado?",
        opciones: [
            "A) Aquel riesgo propio de una empresa que se puede eliminar mediante la diversificación del portafolio",
            "B) El riesgo derivado de errores humanos en el sistema de liquidación bursátil",
            "C) El riesgo de quiebra de una agencia calificadora de valores",
            "D) Aquel riesgo inherente a todo el mercado derivado de factores macroeconómicos que no se puede eliminar mediante la diversificación"
        ],
        respuestaCorrecta: 3,
        explicacion: "El riesgo sistemático responde a factores económicos agregados (tasas, inflación, recesión) que afectan a todos los activos simultáneamente, impidiendo su eliminación mediante diversificación."
    },
    {
        id: 45,
        area: "Análisis Financiero",
        pregunta: "¿Qué representa la razón de rotación del capital de trabajo neto?",
        opciones: [
            "A) La efectividad con la que la empresa utiliza su capital de trabajo neto para generar ventas en el periodo",
            "B) La proporción de deuda circulante frente al patrimonio contable",
            "C) El porcentaje de activos fijos financiados con caja propia",
            "D) La liquidez disponible para el pago de impuestos diferidos"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta razón ($Ventas / Capital de Trabajo Neto$) mide la eficiencia con la que la firma aprovecha sus recursos de liquidez operativa para respaldar el volumen de ingresos."
    },
    {
        id: 46,
        area: "Finanzas Corporativas",
        pregunta: "En el análisis de fusiones y adquisiciones (M&A), ¿qué se comprende por Sinergia?",
        opciones: [
            "A) El costo legal asociado a la liquidación de pasivos contingentes",
            "B) El valor adicional generado por la combinación de dos empresas, donde el valor de la empresa combinada supera la suma de las dos empresas por separado ($V_{AB} > V_A + V_B$)",
            "C) La emisión de bonos de alto rendimiento para financiar compras apalancadas ($LBO$)",
            "D) El ajuste contable al valor residual de las patentes adquiridas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sinergia representa las eficiencias de costos o economías de escala e ingresos que hacen que el valor de dos compañías fusionadas supere la suma de sus partes independientes."
    },
    {
        id: 47,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué función cumple una Sociedad de Inversión (Fondo de Inversión) de Renta Variable?",
        opciones: [
            "A) Garantizar tasas de rendimiento fijas exentas de riesgo impositivo",
            "B) Otorgar créditos comerciales a la exportación industrial",
            "C) Reunir el patrimonio de múltiples inversionistas para canalizarlo colectivamente en un portafolio diversificado de acciones corporativas",
            "D) Emitir papel comercial con respaldo colateral de la banca central"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los fondos de inversión colectiva captan recursos de pequeños y medianos ahorradores para acceder a portafolios diversificados de acciones administrados por profesionales."
    },
    {
        id: 48,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide la Convexidad de un bono de renta fija?",
        opciones: [
            "A) La tasa de depreciación cambiaria asociada a cupones extranjeros",
            "B) El diferencial entre el rendimiento al vencimiento y el cupón nominal",
            "C) La relación de apalancamiento contable del emisor corporativo",
            "D) La curvatura o tasa de cambio en la Duración de un bono ante variaciones en las tasas de interés, mejorando la estimación del precio"
        ],
        respuestaCorrecta: 3,
        explicacion: "La convexidad es la segunda derivada del precio respecto a las tasas; corrige el error de estimación lineal de la duración cuando las variaciones en las tasas de interés son grandes."
    },
    {
        id: 49,
        area: "Análisis Financiero",
        pregunta: "¿Qué se busca determinar mediante el análisis financiero vertical en un Balance General?",
        opciones: [
            "A) La participación porcentual que representa cada partida o activo individual respecto al total del Activo",
            "B) La variación nominal de las cuentas a lo largo de cinco años consecutivos",
            "C) El impacto de la tasa de inflación en la valoración de los bienes inmuebles",
            "D) El costo promedio de la deuda respaldada con garantías prendarias"
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis vertical calcula la estructura porcentual de las cuentas de un estado financiero respecto a un total base (ej. cada rubro del activo respecto al Activo Total)."
    },
    {
        id: 50,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el apalancamiento total o combinado (GAT)?",
        opciones: [
            "A) La suma del capital social ordinario y las reservas legales",
            "B) El impacto total que los costos fijos (operativos y financieros) tienen sobre la variabilidad de las Utilidades por Acción (UPA) ante cambios en las ventas ($GAT = GAO \times GAF$)",
            "C) La proporción de deuda circulante en dólares dividida entre los activos totales",
            "D) El ajuste impositivo al costo de capital promedio ponderado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El GAT mide el efecto multiplicador acumulado de los costos fijos operativos y financieros sobre la ganancia por acción ante variaciones en el volumen de ventas."
    },
    {
        id: 51,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué instrumento bursátil cotiza bajo la denominación ADR (American Depositary Receipt)?",
        opciones: [
            "A) Un título de deuda soberana emitido por el Tesoro estadounidense",
            "B) Una opción financiera sobre materias primas agrícolas",
            "C) Un certificado negociable emitido por un banco de EE.UU. que representa un número específico de acciones de una empresa extranjera",
            "D) Un futuro de tasa de interés negociado en mercados OTC"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los ADRs permiten a empresas no estadounidenses cotizar sus acciones en las bolsas de EE.UU. (como NYSE o NASDAQ) denominadas y negociadas en dólares."
    },
    {
        id: 52,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste la estrategia de cobertura Delta-Neutral en portafolios de opciones?",
        opciones: [
            "A) En comprar activos con Beta igual a cero respecto a la tasa libre de riesgo",
            "B) En eliminar el riesgo de liquidez mediante la compra de instrumentos de renta fija",
            "C) En cancelar los pasivos financieros en divisas mediante forwards a corto plazo",
            "D) En constituir un portafolio cuya suma de Deltas sea igual a cero, inmunizando la posición ante pequeñas variaciones en el precio del activo subyacente"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una posición Delta-Neutral se construye equilibrando activos y contratos derivados para que el Delta total sea cero, anulando la exposición a cambios inmediatos en el subyacente."
    },
    {
        id: 53,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de margen bruto de utilidad?",
        opciones: [
            "A) El porcentaje de cada peso de ventas que queda disponible tras cubrir el costo de ventas de la empresa",
            "B) La rentabilidad neta final retenida en el patrimonio de la firma",
            "C) La capacidad de caja libre para liquidar deudas de largo plazo",
            "D) La rotación anual de los activos fijos industriales"
        ],
        respuestaCorrecta: 0,
        explicacion: "El margen bruto ($Ventas - Costo de Ventas / Ventas$) muestra la eficiencia en la producción y fijación de precios antes de deducir gastos de administración y venta."
    },
    {
        id: 54,
        area: "Finanzas Corporativas",
        pregunta: "En el presupuesto de capital, ¿qué son los costos hundidos (Sunk Costs)?",
        opciones: [
            "A) Los gastos de mantenimiento futuro proyectados en el estudio técnico",
            "B) Costos ya incurridos en el pasado que no pueden recuperarse independientemente de si el proyecto se acepta o rechaza, por lo que deben ignorarse en la decisión",
            "C) El capital de trabajo requerido para contingencias imprevistas",
            "D) El valor de rescate descontado al primer año de operaciones"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los costos hundidos son desembolsos pasados e irreversibles; al ser irrecuperables no representan costos de oportunidad y carecen de relevancia para decisiones futuras."
    },
    {
        id: 55,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Mercado Forex (Foreign Exchange)?",
        opciones: [
            "A) La bolsa especializada en commodities agrícolas de Chicago",
            "B) El sistema bancario central de las economías latinoamericanas",
            "C) El mercado global desentralizado e interbancario donde se negocian las diferentes divisas internacionales",
            "D) La red de depósitos de custodia de bonos gubernamentales"
        ],
        respuestaCorrecta: 2,
        explicacion: "Forex es el mercado financiero más grande y líquido del mundo, operando de forma continua las 24 horas para el intercambio cambiario global."
    },
    {
        id: 56,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En el modelo CAPM, ¿qué representa la tasa libre de riesgo ($R_f$)?",
        opciones: [
            "A) El rendimiento promedio del índice accionario bursátil principal",
            "B) La tasa de retorno de los fondos de capital privado de alto riesgo",
            "C) La rentabilidad ofrecida por dividendos en acciones preferentes",
            "D) El rendimiento teórico de un activo financiero que no presenta riesgo de incumplimiento de pago (ej. bonos soberanos de corto plazo)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La $R_f$ sirve de base teórica en valuación para medir el valor del dinero sin riesgo crediticio ni de liquidez (asociado comúnmente a deudas soberanas como CETES o T-Bills)."
    },
    {
        id: 57,
        area: "Análisis Financiero",
        pregunta: "¿Qué efecto produce en el estado de flujos de efectivo un incremento en las Cuentas por Cobrar de clientes?",
        opciones: [
            "A) Representa una aplicación o uso de efectivo (flujo negativo) en las actividades de operación",
            "B) Constituye un origen o entrada de efectivo financiera inmediata",
            "C) No genera ningún impacto contable ni financiero en el estado de flujos",
            "D) Aumenta directamente las actividades de financiamiento bancario"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un incremento en cuentas por cobrar implica que ventas reconocidas en resultados no se han cobrado en efectivo, absorbiendo liquidez operativa (uso de fondos)."
    },
    {
        id: 58,
        area: "Finanzas Corporativas",
        pregunta: "En valuación de empresas, ¿qué se entiende por el Valor Terminal (Terminal Value)?",
        opciones: [
            "A) El capital de trabajo restante al cierre del primer año fiscal",
            "B) El valor presente de todos los flujos de efectivo futuros de una empresa más allá del periodo explícito de proyección detallada",
            "C) El costo de liquidación de los pasivos exigibles a corto plazo",
            "D) El importe nominal de los dividendos decretados en el ejercicio de inicio"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Valor Terminal captura el valor presente de la compañía desde la conclusión de las proyecciones explícitas en adelante, asumiendo continuidad del negocio perpetua o tasa de crecimiento estable."
    },
    {
        id: 59,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué distingue a un Fondo de Inversión Cerrado frente a uno Abierto?",
        opciones: [
            "A) El cerrado solo invierte en deuda gubernamental a tasa fija",
            "B) El cerrado opera sin comisiones de administración anuales",
            "C) El cerrado emite un número fijo de acciones que cotizan en bolsa y no recompra directamente sus títulos al inversionista",
            "D) El cerrado está destinado exclusivamente a bancos centrales supranacionales"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los fondos cerrados tienen un número fijo de títulos que se negocian en el mercado secundario entre inversionistas; el fondo no emite ni recompra acciones continuamente como el abierto."
    },
    {
        id: 60,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué es el riesgo de liquidez en una inversión financiera?",
        opciones: [
            "A) La probabilidad de que la inflación reduzca el rendimiento real del activo",
            "B) El riesgo de que la tasa de interés de referencia sufra recortes por el banco central",
            "C) La variabilidad esperada en las utilidades por acción corporativas",
            "D) El riesgo de no poder vender un activo rápidamente a un precio justo de mercado sin sufrir una pérdida significativa en su valor"
        ],
        respuestaCorrecta: 3,
        explicacion: "El riesgo de liquidez refleja la imposibilidad o dificultad de convertir una posición en dinero en efectivo con prontitud sin incurrir en castigos profundos sobre el precio."
    },
    {
        id: 61,
        area: "Análisis Financiero",
        pregunta: "¿Qué indica una alta razón de Rotación de Inventarios?",
        opciones: [
            "A) Que la empresa gestiona eficientemente sus inventarios, vendiendo y reponiendo su stock rápidamente",
            "B) Que la empresa almacena materias primas obsoletas de lento movimiento",
            "C) Que la liquidez inmediata depende en un 100% de pasivos proveedores",
            "D) Que el valor contable de los inmuebles está subestimado"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una rotación elevada señala agilidad en el ciclo de inventarios y menor capital inmovilizado en bodega, reduciendo costos de almacenamiento y riesgo de obsolescencia."
    },
    {
        id: 62,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el Rendimiento sobre el Capital Invertido (ROIC)?",
        opciones: [
            "A) La utilidad neta dividida entre los activos circulantes totales",
            "B) Mide la eficiencia con la que la empresa asigna su capital para generar ganancias operativas tras impuestos ($NOPAT / Capital Invertido Total$)",
            "C) La suma de los dividendos decretados sobre la prima en venta de acciones",
            "D) El diferencial entre el margen EBITDA y el costo marginal de la deuda"
        ],
        respuestaCorrecta: 1,
        explicacion: "El ROIC evalúa la rentabilidad que genera el negocio sobre la totalidad del capital provisto por acreedores financieros y accionistas ($Capital Invertido$)."
    },
    {
        id: 63,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Mercado secundario de valores?",
        opciones: [
            "A) El mercado reservado exclusivamente para la emisión de bonos de alto riesgo",
            "B) El sistema financiero destinado al intercambio de pagarés comerciales PyME",
            "C) El mercado donde se compran y venden valores ya existentes entre inversionistas, proporcionando liquidez a los títulos sin canalizar fondos al emisor",
            "D) El mecanismo bursátil que fija las tasas impositivas de los corporativos"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el mercado secundario los inversionistas negocian títulos previamente emitidos; se aporta liquidez a los tenedores sin que la empresa emisor reciba capital adicional."
    },
    {
        id: 64,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide la Alfa de Jensen en la evaluación de un portafolio de inversión?",
        opciones: [
            "A) La volatilidad histórica de los precios del activo subyacente",
            "B) La sensibilidad del bono frente a la inflación esperada",
            "C) El costo marginal del apalancamiento operativo del fondo",
            "D) El exceso de rendimiento que obtiene el portafolio en comparación con el rendimiento predicho por el modelo CAPM dado su nivel de riesgo ($Beta$)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La Alfa de Jensen cuantifica la capacidad del administrador de un portafolio para generar rendimiento anormal por encima del rendimiento ajustado por riesgo sistemático ($CAPM$)."
    },
    {
        id: 65,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de endeudamiento o apalancamiento contable ($Pasivo Total / Activo Total$)?",
        opciones: [
            "A) La proporción de los activos totales de la empresa que ha sido financiada con fondos de acreedores ajenos",
            "B) El número de veces que las ventas cubren el patrimonio neto",
            "C) La disponibilidad inmediata de caja para pagar dividendos preferentes",
            "D) El flujo de caja operativo dividido entre la utilidad bruta"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta razón muestra la estructura de financiamiento de la empresa, midiendo qué porcentaje de los activos pertenece a acreedores externos frente al patrimonio."
    },
    {
        id: 66,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste la teoría de la neutralidad de la política de dividendos de Miller y Modigliani?",
        opciones: [
            "A) Que incrementar los dividendos destruye el valor contable de la firma",
            "B) Que la política de dividendos no afecta el valor de la empresa ni la riqueza de los accionistas en mercados de capitales perfectos sin impuestos ni costos de transacción",
            "C) Que los accionistas siempre prefieren dividendos presentes a ganancias de capital futuras",
            "D) Que los dividendos en efectivo deben financiarse obligatoriamente con deuda"
        ],
        respuestaCorrecta: 1,
        explicacion: "Miller y Modigliani demostraron que el valor de la empresa depende de sus utilidades y política de inversión, no de si distribuye sus ganancias como dividendos o las retiene."
    },
    {
        id: 67,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es un Certificado de Depósito (CEDO / CD) emitido por una institución bancaria?",
        opciones: [
            "A) Un título de renta variable negociable libremente en bolsa",
            "B) Un contrato de cobertura de opciones sobre materias primas",
            "C) Un instrumento de deuda emitido por un banco que ampara el depósito de una suma de dinero a un plazo fijo con rendimiento preestablecido",
            "D) Una fianza de cumplimiento de contratos gubernamentales"
        ],
        respuestaCorrecta: 2,
        explicacion: "El CEDO o CD es un pagaré o depósito bancario a plazo donde el inversionista presta fondos al banco a cambio de intereses pactados durante un periodo específico."
    },
    {
        id: 68,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En el contexto de instrumentos derivados, ¿qué distingue a un contrato de Futuros frente a un contrato Forward?",
        opciones: [
            "A) El Futuro carece de fecha de vencimiento y el Forward vence en un día",
            "B) El Forward cotiza en bolsa y el Futuro es un contrato OTC privado",
            "C) El Futuro solo se liquida en dólares y el Forward en moneda local",
            "D) El Futuro es estandarizado y cotiza en un mercado organizado con cámara de compensación, mientras que el Forward es un acuerdo privado a la medida (OTC)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Los Futuros tienen plazos, montos y subyacentes estandarizados y operan en bolsas reguladas con liquidación diaria (cámara de compensación); los Forwards son privados a la medida."
    },
    {
        id: 69,
        area: "Análisis Financiero",
        pregunta: "¿Qué revela el margen operativo (EBIT / Ventas) en el análisis de rentabilidad?",
        opciones: [
            "A) La ganancia de la empresa proveniente puramente de sus operaciones centrales por cada peso de venta, antes de gastos financieros e impuestos",
            "B) El porcentaje de utilidad final que se distribuye como dividendo en efectivo",
            "C) La capacidad del activo fijo para financiarse mediante capital social",
            "D) El efecto del escudo fiscal en el costo promedio de capital"
        ],
        respuestaCorrecta: 0,
        explicacion: "El margen de utilidad de operación mide la eficiencia operativa estricta de la firma para transformar ingresos en utilidades antes del impacto de la estructura financiera e impuestos."
    },
    {
        id: 70,
        area: "Finanzas Corporativas",
        pregunta: "Al aplicar la Tasa Interna de Retorno (TIR) en la evaluación de proyectos, ¿cuál es el criterio para aceptar una inversión propuesta?",
        opciones: [
            "A) Aceptar si la TIR es menor al costo de la deuda bancaria exenta de impuestos",
            "B) Aceptar si la TIR supera la tasa de rendimiento requerida o Costo de Capital (TIR > WACC/TMAR)",
            "C) Aceptar únicamente cuando la TIR sea exactamente igual a cero",
            "D) Aceptar si la TIR es inferior a la tasa de crecimiento económico de la industria"
        ],
        respuestaCorrecta: 1,
        explicacion: "La TIR representa la tasa de descuento que iguala el $VPN$ a cero; un proyecto se acepta si ofrece un rendimiento ($TIR$) superior al costo de oportunidad del capital exigido ($TMAR$)."
    },
    {
        id: 71,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es la tasa TIEA (Tasa de Interés Interbancaria de Equilibrio) en el sistema financiero mexicano?",
        opciones: [
            "A) La tasa de rendimiento anual ofrecida por bonos corporativos AAA",
            "B) El porcentaje de impuestos aplicado al rendimiento de los fondos de renta fija",
            "C) Una tasa de referencia representativa calculada por el Banco de México que refleja las operaciones de crédito pasivas entre la banca comercial",
            "D) La tasa impositiva sobre las ganancias de capital en la venta de acciones"
        ],
        respuestaCorrecta: 2,
        explicacion: "La TIEA es la tasa oficial fijada por el Banco de México que sirve de referencia fundamental para fijar intereses en créditos comerciales, bancarios y derivados."
    },
    {
        id: 72,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste el riesgo de crédito o de contraparte?",
        opciones: [
            "A) En las pérdidas provocadas por fluctuaciones adversas en el tipo de cambio",
            "B) En la imposibilidad de operar en mercados bursátiles por fallas tecnológicas",
            "C) En el incremento de las tasas de interés de los créditos hipotecarios",
            "D) En la posibilidad de que un prestatario o contraparte incumpla sus obligaciones contractuales de pago de principal o intereses"
        ],
        respuestaCorrecta: 3,
        explicacion: "El riesgo crediticio refleja la probabilidad de que el deudor no honre a tiempo o en forma sus compromisos de deuda contratados con el acreedor o inversionista."
    },
    {
        id: 73,
        area: "Análisis Financiero",
        pregunta: "¿Cómo se define el margen EBITDA en el análisis financiero?",
        opciones: [
            "A) El cociente de dividir las Utilidades antes de Intereses, Impuestos, Depreciaciones y Amortizaciones entre las Ventas Totales",
            "B) La Utilidad Neta dividida entre el Activo Fijo Neto depreciado",
            "C) La diferencia entre el flujo operativo y el saldo del capital de trabajo",
            "D) El valor de mercado de las acciones dividido entre el activo total contable"
        ],
        respuestaCorrecta: 0,
        explicacion: "El margen EBITDA mide la generación bruta de caja operativa por peso vendido, eliminando el impacto de decisiones de financiamiento, impuestos y partidas no monetarias."
    },
    {
        id: 74,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué establece la teoría del Trade-off estático sobre la estructura óptima de capital?",
        opciones: [
            "A) Que las empresas deben financiarse 100% con recursos internos",
            "B) Que la estructura óptima se alcanza en el punto donde los beneficios fiscales de la deuda ($escudo fiscal$) se equilibran exactamente con los costos de insolvencia financiera ($quiebra$)",
            "C) Que los dividendos en efectivo deben ser nulos para maximizar el valor bursátil",
            "D) Que el costo del capital social es idéntico al costo de la deuda de corto plazo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La teoría del Trade-off equilibra la ventaja fiscal del endeudamiento con el incremento simultáneo en los costos esperados de quiebra y agudización de riesgos de insolvencia."
    },
    {
        id: 75,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué función cumple la Cámara de Compensación (como Asigna en México) en los mercados de derivados estandarizados?",
        opciones: [
            "A) Vender opciones sobre divisas al público inversionista minorista",
            "B) Auditar las declaraciones fiscales de las instituciones de crédito",
            "C) Actuar como la contraparte compradora para todo vendedor y vendedora para todo comprador, eliminando el riesgo crediticio de incumplimiento entre los participantes",
            "D) Otorgar calificaciones de riesgo a las emisiones de bonos soberanos"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cámara de compensación interpone su balance garantizando el cumplimiento contractual de todos los futuros y opciones, eliminando el riesgo de contraparte bilateral mediante márgenes."
    },
    {
        id: 76,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué es el riesgo operacional según el marco de Basilea?",
        opciones: [
            "A) El riesgo derivado del incremento en las tasas impositivas de importación",
            "B) La sensibilidad del margen EBITDA frente a variaciones en los costos variables",
            "C) La volatilidad de los precios de las materias primas en los mercados spot",
            "D) El riesgo de sufrir pérdidas debido a fallas en procesos internos, personas, sistemas deficientes o eventos externos imprevisibles"
        ],
        respuestaCorrecta: 3,
        explicacion: "El riesgo operacional engloba pérdidas por errores humanos, frauda internal/externo, fallas de TI, desastres naturales o vacíos procesales en las operaciones institucionales."
    },
    {
        id: 77,
        area: "Análisis Financiero",
        pregunta: "¿Qué indica una rotación de cuentas por cobrar reducida o en descenso?",
        opciones: [
            "A) Que la empresa tarda más días en cobrar sus ventas a crédito, señalando posibles deficiencias en las políticas de cobro o clientes morosos",
            "B) Que las ventas al contado están aumentando significativamente",
            "C) Que el flujo operativo disponible se destina íntegramente a CapEx",
            "D) Que la prueba ácida del periodo es mayor a diez unidades"
        ],
        respuestaCorrecta: 0,
        explicacion: "Una menor rotación (y mayor Días de Cobro - DSO) refleja lentitud en la recuperación de cartera, comprometiendo la liquidez y aumentando el riesgo de cartera incobrable."
    },
    {
        id: 78,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste la división de acciones (Stock Split)?",
        opciones: [
            "A) En la venta de activos no estratégicos para pagar pasivos financieros",
            "B) En incrementar el número de acciones en circulación de una empresa mediante la reducción proporcional del valor nominal de cada acción, manteniendo el capital social total sin cambios",
            "C) En cancelar la cotización de la empresa en el mercado bursátil",
            "D) En emitir deuda convertible obligatoria en capital preferente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Stock Split divide el valor nominal de cada acción aumentando el número total de títulos (ej. 2 por 1), lo que reduce el precio por título para mejorar la liquidez bursátil."
    },
    {
        id: 79,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es la Bolsa Mexicana de Valores (BMV)?",
        opciones: [
            "A) La agencia estatal de recaudación de impuestos sobre transacciones bursátiles",
            "B) El banco central encargado de la custodia de divisas internacionales",
            "C) Una entidad privada concesionada que proporciona la infraestructura para la negociación transaccional de valores en México",
            "D) Un fondo gubernamental para el fomento de pequeñas empresas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La BMV es una institución bursátil privada autorizada para facilitar las operaciones de compraventa de valores, ofreciendo la plataforma física y tecnológica requerida."
    },
    {
        id: 80,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide el coeficiente Treynor Ratio para un portafolio de inversión?",
        opciones: [
            "A) La tasa de descuento que iguala el costo de la deuda apalancada",
            "B) La ganancia neta obtenida por compras de divisas a término",
            "C) La varianza de los activos sin riesgo de liquidez",
            "D) El exceso de rendimiento del portafolio sobre la tasa libre de riesgo dividido entre la Beta del portafolio (riesgo sistemático)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El Treynor Ratio mide el rendimiento excedente por unidad de riesgo sistemático ($Beta$), a diferencia de Sharpe que utiliza la desviación estándar (riesgo total)."
    },
    {
        id: 81,
        area: "Análisis Financiero",
        pregunta: "¿Qué muestra el indicador de rendimiento sobre el patrimonio neto (ROE)?",
        opciones: [
            "A) Mide la rentabilidad generada por la empresa para los accionistas ordinarios sobre el capital contable invertido",
            "B) La proporción de fondos corrientes invertidos en bienes raíces",
            "C) La disponibilidad de caja antes de deducciones amortizables",
            "D) El costo de emisión de nuevas acciones ordinarias en bolsa"
        ],
        respuestaCorrecta: 0,
        explicacion: "El ROE ($Utilidad Neta / Capital Contable$) evalúa la tasa de retorno que obtienen los propietarios sobre los recursos contables aportados y retenidos en la sociedad."
    },
    {
        id: 82,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el costo marginal de la deuda?",
        opciones: [
            "A) La tasa de interés pagada en contrataciones históricas pasadas",
            "B) La tasa de interés que la empresa debe pagar sobre los nuevos fondos prestados que adquiera en el mercado actual",
            "C) El rendimiento garantizado por los certificados de tesorería soberanos",
            "D) El porcentaje de gastos legales asociados al registro mercantil"
        ],
        respuestaCorrecta: 1,
        explicacion: "El costo marginal de la deuda refleja las condiciones vigentes del mercado financiero (tasas presentes) para levantar nuevo financiamiento bancario o emisión bursátil de deuda."
    },
    {
        id: 83,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es un Warrants en el mercado bursátil?",
        opciones: [
            "A) Un título de renta fija gubernamental a tasa flotante",
            "B) Un depósito bancario sin opción de rendimiento mínimo",
            "C) Un instrumento derivado emitido por una empresa o institución que otorga al tenedor el derecho de comprar o vender acciones de la emisora a un precio fijado",
            "D) Una póliza de fianza de cumplimiento arancelario"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un Warrant es una opción de largo plazo emitida por instituciones sobre acciones o índices, concediendo el derecho de compra o venta al inversionista."
    },
    {
        id: 84,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué postula la Paridad de Tasas de Interés (IRP)?",
        opciones: [
            "A) Que las tasas de rendimiento de los activos en renta variable deben igualarse a la tasa libre de riesgo",
            "B) Que los precios de los bienes agrícolas deben ser idénticos en todos los países",
            "C) Que la inflación esperada se elimina mediante aranceles proteccionistas",
            "D) Que el diferencial entre las tasas de interés nominales de dos países debe igualarse al diferencial entre el tipo de cambio spot y el tipo de cambio forward"
        ],
        respuestaCorrecta: 3,
        explicacion: "La IRP vincula los mercados de dinero y divisas: el diferencial de tasas entre dos monedas se refleja exactamente en la prima o descuento del tipo de cambio forward respecto al spot."
    },
    {
        id: 85,
        area: "Análisis Financiero",
        pregunta: "¿Qué representa la razón de cobertura del servicio de la deuda (DSCR)?",
        opciones: [
            "A) El cociente del flujo de caja operativo disponible dividido entre el servicio total de la deuda (principal + intereses del periodo)",
            "B) La proporción de dividendos pagados dividida entre las cuentas por pagar",
            "C) El valor de mercado de los activos fijos dividido entre el pasivo circulante",
            "D) La tasa impositiva calculada sobre el margen EBITDA"
        ],
        respuestaCorrecta: 0,
        explicacion: "El DSCR evalúa si la capacidad de generación de efectivo operativo alcanza para saldar los vencimientos del servicio de amortización de capital e intereses debidos."
    },
    {
        id: 86,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué son los flujos de efectivo incrementales al evaluar un proyecto de inversión?",
        opciones: [
            "A) Los flujos de efectivo totales pasados que ha registrado la corporación",
            "B) Los cambios netos en los flujos de efectivo totales de la empresa que ocurren como consecuencia directa de aceptar el proyecto ($Flujos con proyecto - Flujos sin proyecto$)",
            "C) Los rendimientos pagados exclusivamente como dividendos ordinarios",
            "D) La depreciación contable calculada por el método de saldos decrecientes"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los flujos relevantes para el presupuesto de capital son estrictamente incrementales: la diferencia monetaria generada por implementar la propuesta frente a no hacer nada."
    },
    {
        id: 87,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Indeval (Instituto para el Depósito de Valores) en México?",
        opciones: [
            "A) La agencia reguladora de seguros y fianzas del sector público",
            "B) Un tribunal administrativo de conflictos bursátiles",
            "C) El depósito centralizado en México encargado de la custodia, administración, compensación y liquidación de valores operados en el mercado",
            "D) La bolsa concesionada para contratos de opciones sobre materias primas"
        ],
        respuestaCorrecta: 2,
        explicacion: "Indeval es la infraestructura central del mercado financiero mexicano dedicada a resguardar los títulos e intermediar electrónicamente su liquidación y traspaso."
    },
    {
        id: 88,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste el riesgo de reinversión para un tenedor de bonos?",
        opciones: [
            "A) En la imposibilidad de vender el bono por falta de liquidez en bolsa",
            "B) En el impago definitivo del valor nominal pactado al vencimiento",
            "C) En el incremento imprevisto de la tasa de impuesto retenido por el emisor",
            "D) En el riesgo de que los cupones periódicos recibidos deban reinvertirse a tasas de interés de mercado inferiores a la tasa de rendimiento inicial del bono"
        ],
        respuestaCorrecta: 3,
        explicacion: "Si las tasas de interés de mercado caen, los flujos intermedios (cupones) recibidos deberán colocarse en nuevas alternativas con menores rendimientos, reduciendo el retorno final esperado."
    },
    {
        id: 89,
        area: "Análisis Financiero",
        pregunta: "¿Qué indica un capital de trabajo neto negativo ($Activo Circulante - Pasivo Circulante < 0$)?",
        opciones: [
            "A) Que la empresa financia parte de sus activos fijos o permanentes con pasivos a corto plazo, enfrentando un alto riesgo de liquidez",
            "B) Que las utilidades retenidas del ejercicio actual son mayores que el capital social",
            "C) Que la empresa no mantiene deudas bancarias de largo plazo",
            "D) Que la rotación de activo fijo es superior a 10 veces al año"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un capital de trabajo negativo señala descalce de plazos: las obligaciones que vencen a menos de un año exceden a los recursos líquidos realizables en el mismo plazo."
    },
    {
        id: 90,
        area: "Finanzas Corporativas",
        pregunta: "En valuación de proyectos, ¿qué es la Tasa Mínima Aceptable de Rendimiento (TMAR)?",
        opciones: [
            "A) La tasa de inflación promedio del sector industrial de insumos",
            "B) La tasa de retorno requerida por los inversionistas que compensa el costo de oportunidad del capital y la prima por el riesgo asumido en el proyecto",
            "C) El costo de la deuda bancaria neta de impuestos de la competencia",
            "D) El rendimiento fijo de los depósitos bancarios garantizados"
        ],
        respuestaCorrecta: 1,
        explicacion: "La TMAR (o Hurdle Rate) fija el umbral de rentabilidad mínimo exigido para aprobar un proyecto, incorporando la tasa libre de riesgo y la prima por riesgo del negocio."
    },
    {
        id: 91,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Mercado Monetario o Mercado de Dinero?",
        opciones: [
            "A) La plataforma bursátil dedicada exclusivamente al intercambio de acciones ordinarias",
            "B) El mercado interbancario de activos tangibles no perecederos",
            "C) El conjunto de mercados donde se negocian instrumentos de deuda a corto plazo (generalmente menores a un año) de alta liquidez y bajo riesgo",
            "D) El sistema de depósitos en efectivo de la banca de desarrollo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El mercado de dinero provee financiamiento e inversión de corto plazo (vencimiento < 1 año) con títulos altamente líquidos como pagarés bancarios o papel comercial."
    },
    {
        id: 92,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En una opción de compra Call, ¿qué significa que la opción se encuentre 'Out of the Money' (OTM)?",
        opciones: [
            "A) Que el precio de ejercicio es exactamente igual al precio spot del subyacente",
            "B) Que la opción carece de prima de mercado",
            "C) Que el tenedor obtendrá un rendimiento garantizado al ejercerla",
            "D) Que el precio actual del activo subyacente en el mercado es menor que el precio de ejercicio de la opción ($S < K$)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Una opción Call está 'fuera del dinero' ($OTM$) cuando carece de valor intrínseco, pues el precio del subyacente en mercado ($S$) está por debajo del precio fijado para comprar ($K$)."
    },
    {
        id: 93,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de rotación de activos fijos?",
        opciones: [
            "A) La eficiencia con la que la empresa utiliza sus inmuebles, maquinaria y equipo para generar ventas netas",
            "B) El porcentaje de la maquinaria que ha sido depreciada contablemente",
            "C) La relación entre la deuda de largo plazo y el valor residual de la planta",
            "D) El tiempo promedio que tarda una orden de trabajo en convertirse en producto final"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta razón ($Ventas / Activo Fijo Neto$) mide la productividad de la inversión permanente de la compañía en infraestructura operativa para generar ingresos."
    },
    {
        id: 94,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué expresa la técnica del Indice de Rentabilidad (IR) en el presupuesto de capital?",
        opciones: [
            "A) La tasa de interés cobrada por bancos comerciales sobre créditos prendarios",
            "B) La relación costo-beneficio calculada como el Valor Presente de los flujos de efectivo futuros dividido entre la inversión inicial ($IR = VP_{flujos} / I_0$)",
            "C) La diferencia absoluta en dinero entre el rendimiento real y la inflación",
            "D) La tasa impositiva corporativa aplicable a los dividendos de subsidiarias"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Índice de Rentabilidad cuantifica el valor presente generado por cada peso invertido; si el $IR > 1.0$, el proyecto genera valor neto y se acepta."
    },
    {
        id: 95,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué representa un Papel Comercial emitido en el mercado bursátil?",
        opciones: [
            "A) Un cheque de caja respaldado por depósitos a plazo bancarios",
            "B) Un título de renta variable garantizado por la banca de desarrollo",
            "C) Un pagaré negociable de deuda no garantizada emitido a corto plazo por empresas corporativas para financiar capital de trabajo",
            "D) Una póliza de seguro contra fluctuaciones del precio del petróleo"
        ],
        respuestaCorrecta: 2,
        explicacion: "El papel comercial es un instrumento de deuda quirografaria de corto plazo que las grandes empresas cotizadas emiten directamente en el mercado para captar liquidez."
    },
    {
        id: 96,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En valuación de bonos, ¿qué ocurre con el precio de un bono a tasa fija si las tasas de interés del mercado se incrementan?",
        opciones: [
            "A) El precio del bono aumenta en proporción directa al alza de la tasa",
            "B) El precio del bono permanece perfectamente inalterado por su tasa fija",
            "C) El precio del bono disminuye de forma inmediata para ajustar su rendimiento a la nueva tasa de mercado",
            "D) El valor nominal del bono se reduce automáticamente"
        ],
        respuestaCorrecta: 2,
        explicacion: "Existe una relación inversa entre el precio de los bonos existentes y las tasas de interés de mercado: si las tasas suben, el precio del bono cae para ofrecer el rendimiento de mercado."
    },
    {
        id: 97,
        area: "Análisis Financiero",
        pregunta: "¿Qué mide la razón de endeudamiento patrimonial (Pasivo Total / Capital Contable)?",
        opciones: [
            "A) Mide la proporción de fondos provistos por acreedores en relación con los fondos aportados por los accionistas de la firma",
            "B) La cobertura impositiva de los gastos por depreciación de la planta",
            "C) La disponibilidad inmediata de divisas para el pago de mercancía importada",
            "D) El múltiplo de mercado de las utilidades retenidas contables"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta razón ($Debt to Equity$) evalúa la estructura de apalancamiento mostrando cuántos pesos de deuda utiliza la empresa por cada peso de patrimonio propio."
    },
    {
        id: 98,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste el modelo de Miller-Orr para la gestión del saldo óptimo de efectivo?",
        opciones: [
            "A) Determina el costo de capital mediante la Beta no apalancada del mercado",
            "B) Establece límites superior e inferior y un punto de retorno para el saldo de caja, permitiendo que la tesorería fluctúe aleatoriamente entre los límites",
            "C) Calcula el precio de ejercicio de las opciones financieras sobre dividendos",
            "D) Modela la tasa impositiva efectiva de los proyectos multinacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo de Miller-Orr gestiona la caja ante flujos de efectivo inciertos y diarios; si el saldo alcanza el límite superior se compran valores, y si toca el límite inferior se venden."
    },
    {
        id: 99,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es un Fibra (Fideicomiso de Inversión en Bienes Raíces) en el mercado mexicano?",
        opciones: [
            "A) Un fondo mutualista de inversión en valores de deuda bancaria",
            "B) Una garantía hipotecaria emitida por la secretaría de hacienda",
            "C) Un vehículo de inversión destinado a la adquisición o construcción de bienes inmuebles para arrendamiento, cotizado en la bolsa de valores",
            "D) Un certificado de depósitos internacionales en divisas locales"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los Fibras son fideicomisos cotizados en bolsa que captan recursos para invertir en portafolios de inmuebles comerciales, industriales o residenciales para renta."
    },
    {
        id: 100,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste la técnica de simulación Monte Carlo aplicada a la evaluación de riesgo en finanzas?",
        opciones: [
            "A) En calcular el balance general contable fijando variables históricas deterministas",
            "B) En eliminar el uso de tasas de descuento mediante ajustes inflacionarios",
            "C) En solicitar la opinión consensuada de un comité de expertos financieros",
            "D) En generar miles de escenarios posibles asignando distribuciones de probabilidad a las variables inciertas para obtener una distribución del rendimiento del proyecto"
        ],
        respuestaCorrecta: 3,
        explicacion: "Monte Carlo simula de manera estocástica miles de iteraciones aleatorias de las variables de entrada clave, generando un perfil probabilístico completo de los resultados ($VPN$, $VaR$)."
    },
    {
        id: 101,
        area: "Análisis Financiero",
        pregunta: "¿Qué refleja el indicador Días de Ventas pendientes de Cobro (DSO - Days Sales Outstanding)?",
        opciones: [
            "A) El número promedio de días que la empresa tarda en cobrar sus ventas realizadas a crédito a los clientes",
            "B) El periodo necesario para fabricar el inventario de producto terminado",
            "C) El plazo concedido por los proveedores para liquidar las facturas de materias primas",
            "D) El tiempo transcurrido entre la colocación de deuda y el pago de cupones"
        ],
        respuestaCorrecta: 0,
        explicacion: "El DSO ($Cuentas por Cobrar / Ventas a Crédito \times 365$) mide la efectividad del área de cobranza expresando en días el plazo promedio de crédito recuperable."
    },
    {
        id: 102,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es la tasa de descuento ajustada por riesgo (RADR) en la evaluación de proyectos?",
        opciones: [
            "A) La tasa libre de riesgo reducida por la inflación anual esperada",
            "B) Una tasa de descuento modificada sumando una prima de riesgo proporcional al nivel de riesgo específico que presenta el proyecto de inversión",
            "C) El costo de la deuda bancaria ajustado por el escudo fiscal corporativo",
            "D) La tasa impositiva mínima exigida por las autoridades reguladoras"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para proyectos con mayor volatilidad o riesgo que el promedio de la empresa, se incrementa la tasa de descuento ($WACC + Prima$) para exigirles una rentabilidad mayor."
    },
    {
        id: 103,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Mercado Cambiario a Plazo o Mercado Forward de Divisas?",
        opciones: [
            "A) El sistema bancario de liquidación inmediata de billetes y monedas",
            "B) La bolsa regulada de futuro de derivados de commodities energéticos",
            "C) El mercado donde se acuerdan hoy compras o ventas de divisas cuya liquidación física y monetaria se realizará en una fecha futura a un tipo de cambio prefijado",
            "D) El mecanismo de subasta de títulos de deuda soberana"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el mercado cambiario forward se fijan los términos de compraventa de moneda extranjera con fecha de entrega diferida, sirviendo de cobertura o especulación."
    },
    {
        id: 104,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué describe la línea de mercado de valores (SML - Security Market Line)?",
        opciones: [
            "A) La trayectoria del tipo de cambio spot en relación con la tasa TIEA",
            "B) La rentabilidad mínima requerida para bonos corporativos con calificación AAA",
            "C) La relación entre la varianza del portafolio y los dividendos distribuidos",
            "D) La representación gráfica del modelo CAPM que muestra el rendimiento esperado de cualquier activo individual en función de su riesgo sistemático ($Beta$)"
        ],
        respuestaCorrecta: 3,
        explicacion: "La SML grafica el rendimiento esperado de activos individuales o carteras respecto a su $Beta$; activos por encima de la SML se consideran subvaluados (atractivos)."
    },
    {
        id: 105,
        area: "Análisis Financiero",
        pregunta: "¿Qué representa la razón de cobertura de cargos fijos?",
        opciones: [
            "A) Una ampliación de la razón de cobertura de intereses que incluye otros pagos fijos contractuales recurrentes como los pagos por arrendamiento",
            "B) La liquidez disponible en cuenta corriente para el pago de dividendos",
            "C) El porcentaje de activos circulantes respaldados por patrimonio propio",
            "D) La depreciación acumulada dividida entre el gasto financiero del periodo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Esta razón amplia el análisis de solvencia al sumar al denominador (intereses) otros compromisos financieros fijos e ineludibles como los cánones de arrendamiento."
    },
    {
        id: 106,
        area: "Finanzas Corporativas",
        pregunta: "¿En qué consiste el principio del presupuesto de capital basado en proyectos mutuamente excluyentes?",
        opciones: [
            "A) Los proyectos pueden ser aceptados simultáneamente si existe presupuesto sobrante",
            "B) La aceptación de un proyecto elimina automáticamente la posibilidad de aceptar los demás proyectos de la lista propuesta",
            "C) Los flujos de efectivo de los proyectos dependen directamente de la inflación",
            "D) La tasa interna de retorno es exactamente la misma para todos los proyectos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Proyectos mutuamente excluyentes cumplen la misma función operativa o compiten por la misma alternativa; elegir uno imposibilita llevar a cabo las otras opciones."
    },
    {
        id: 107,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es un Fondo de Capital Privado (Private Equity)?",
        opciones: [
            "A) Un depósito bancario de ahorro garantizado a plazo fijo",
            "B) Un fondo gubernamental destinado al pago de pensiones públicas",
            "C) Un vehículo de inversión que capta capital para adquirir participaciones accionarias significativas en empresas no cotizadas públicamente en bolsa, con el fin de reorganizarlas y venderlas",
            "D) Un fondo de cobertura sobre el precio internacional de las divisas"
        ],
        respuestaCorrecta: 2,
        explicacion: "El Capital Privado invierte capital directo en empresas privadas para acelerar su crecimiento o reestructurarlas, desinvirtiendo años después mediante venta o salida a bolsa ($IPO$)."
    },
    {
        id: 108,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "En una opción de venta Put, ¿cuándo se dice que la opción se encuentra 'In the Money' (ITM)?",
        opciones: [
            "A) Cuando el precio de mercado del subyacente es mayor que el precio de ejercicio",
            "B) Cuando la tasa libre de riesgo es superior a la volatilidad implícita",
            "C) Cuando la prima de la opción se reduce a cero al vencimiento",
            "D) Cuando el precio actual del activo subyacente en el mercado es menor que el precio de ejercicio fijado en el contrato ($S < K$)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un Put está 'en el dinero' ($ITM$) si tiene valor intrínseco, lo cual ocurre cuando vender en el mercado ($S$) da menos que el precio fijado para vender en la opción ($K$)."
    },
    {
        id: 109,
        area: "Análisis Financiero",
        pregunta: "¿Qué indica la razón Días de Inventario (DIO - Days Inventory Outstanding)?",
        opciones: [
            "A) El número promedio de días que permanecen las mercancías o materias primas en el inventario de la empresa antes de ser vendidas",
            "B) El tiempo que concede la banca para pagar deudas operativas",
            "C) El porcentaje de inventarios perdidos por merma o caducidad",
            "D) La rotación de las cuentas contables de capital social"
        ],
        respuestaCorrecta: 0,
        explicacion: "El DIO ($Inventarios / Costo de Ventas \times 365$) mide la edad promedio del inventario, reflejando cuántos días permanece inmovilizado el stock en la compañía."
    },
    {
        id: 110,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el WACC (Weighted Average Cost of Capital)?",
        opciones: [
            "A) La tasa de interés cobrada por préstamos concedidos por accionistas",
            "B) La tasa de descuento que representa el costo promedio ponderado de las distintas fuentes de financiamiento a largo plazo utilizadas por la empresa (deuda y capital propio)",
            "C) El margen bruto de utilidad ajustado por la tasa de inflación real",
            "D) El rendimiento de los títulos accionarios emitidos en mercados internacionales"
        ],
        respuestaCorrecta: 1,
        explicacion: "El WACC promedio los costos del pasivo con costo ($Kd(1-t)$) y del patrimonio ($Ke$) según sus proporciones en la estructura de capital, sirviendo como tasa de descuento."
    },
    {
        id: 111,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es el Mercado Secundario de Deuda Gubernamental en México?",
        opciones: [
            "A) Las subastas primarias organizadas semanalmente por el Banco de México",
            "B) La emisión de pagarés corporativos con aval gubernamental",
            "C) La plataforma y red transaccional donde los intermediarios e inversionistas compran y venden valores gubernamentales ya emitidos (CETES, Bonos M, Udibonos)",
            "D) El sistema de cobranza tributaria de la tesorería de la federación"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el mercado secundario soberano se negocian diariamente CETES o Bonos M emitidos con anterioridad, ajustando sus rendimientos según la oferta y demanda de fondos."
    },
    {
        id: 112,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué se entiende por Inmunización de una Cartera de Bonos?",
        opciones: [
            "A) La contratación de seguros estatales contra el riesgo de devaluación",
            "B) La exención total del pago de impuestos sobre ganancias de capital",
            "C) La eliminación de bonos de empresas calificadas por debajo de grado de inversión",
            "D) Una estrategia de gestión que iguala la duración del portafolio de bonos con el horizonte de inversión del tenedor, protegiéndolo contra cambios en las tasas de interés"
        ],
        respuestaCorrecta: 3,
        explicacion: "La inmunización compensa el riesgo de precio de los bonos con el riesgo de reinversión de los cupones al equiparar la duración del portafolio con el plazo objetivo deseado."
    },
    {
        id: 113,
        area: "Análisis Financiero",
        pregunta: "¿Qué es el Estado de Cambios en el Patrimonio Neto?",
        opciones: [
            "A) Un estado financiero básico que muestra las variaciones en las cuentas de los propietarios (capital social, reservas, utilidades retenidas) durante un periodo determinado",
            "B) El desglose del activo fijo neto ajustado por depreciación fiscal",
            "C) La conciliación del flujo operativo con las utilidades de operación",
            "D) El reporte bursátil que consolida el valor impositivo de las acciones de tesorería"
        ],
        respuestaCorrecta: 0,
        explicacion: "Este estado financiero detalla las transacciones ocurridas en el patrimonio contable, incluyendo aportaciones, decretos de dividendos y movimientos de reservas."
    },
    {
        id: 114,
        area: "Finanzas Corporativas",
        pregunta: "En la gestión de tesorería, ¿qué es el modelo de Baumol-Allais-Tobin (BAT) para la administración del efectivo?",
        opciones: [
            "A) Un modelo de valuación bursátil de opciones sobre acciones sin dividendo",
            "B) Un modelo determinista basado en la cantidad económica de pedido ($EOQ$) que determina el saldo óptimo de efectivo equilibrando el costo de transacción de vender valores con el costo de oportunidad de mantener caja",
            "C) Una fórmula para fijar la tasa de descuento de los bonos corporativos",
            "D) La prima de riesgo requerida para proyectos de inversión de alto apalancamiento"
        ],
        respuestaCorrecta: 1,
        explicacion: "El modelo BAT aplica la lógica del lote económico ($EOQ$) al efectivo, determinando cuánta caja retirar o convertir vendiendo títulos para minimizar costos de transacción y oportunidad."
    },
    {
        id: 115,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué son los Udibonos en el mercado financiero mexicano?",
        opciones: [
            "A) Bonos corporativos emitidos por instituciones de crédito privado",
            "B) Instrumentos de renta variable garantizados por el banco central",
            "C) Bonos de Desarrollo del Gobierno Federal indizados a la inflación a través de Unidades de Inversión (UDIs), pagando cupones de interés real fijos cada 182 días",
            "D) Certificados cambiarios a tasa flotante denominados en dólares"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los Udibonos protegen al inversionista contra la inflación al ajustar el valor principal del título conforme a la evolución del valor de las UDIs."
    },
    {
        id: 116,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿En qué consiste el modelo de valuación de opciones de Black-Scholes-Merton?",
        opciones: [
            "A) Un método contable para amortizar patentes en el balance general",
            "B) Un modelo estadístico para estimar la tasa de rendimiento del capital propio",
            "C) Una regla de decisión financiera para la aprobación de proyectos mineros",
            "D) Un modelo matemático que calcula el precio teórico (prima) de una opción financiera de estilo europeo basándose en variables como el subyacente, strike, plazo, tasa libre de riesgo y volatilidad"
        ],
        respuestaCorrecta: 3,
        explicacion: "Black-Scholes es la fórmula analítica fundamental para valuar primas de opciones europeas mediante un proceso estocástico del precio del activo subyacente."
    },
    {
        id: 117,
        area: "Análisis Financiero",
        pregunta: "¿Qué representa el Capital de Trabajo Neto Operativo (KTNO / NOF)?",
        opciones: [
            "A) La inversión requerida en inventarios y cuentas por cobrar operativas menos el financiamiento espontáneo provisto por proveedores de bienes y servicios",
            "B) La diferencia entre el activo total y la deuda bancaria de largo plazo",
            "C) El excedente monetario retenido en cuentas bancarias al cierre fiscal",
            "D) La suma de los gastos por amortización de activos intangibles"
        ],
        respuestaCorrecta: 0,
        explicacion: "El KTNO ($Cuentas por Cobrar + Inventarios - Cuentas por Pagar Proveedores$) mide los recursos netos del ciclo corriente que la empresa debe financiar obligatoriamente."
    },
    {
        id: 118,
        area: "Finanzas Corporativas",
        pregunta: "¿Qué es el Racionamiento de Capital en una empresa?",
        opciones: [
            "A) La prohibición legal de pagar dividendos a accionistas extranjeros",
            "B) La condición operativa donde la empresa cuenta con un límite estricto de fondos presupuestados para inversión, impidiéndole aceptar todos los proyectos con VPN positivo disponibles",
            "C) El cálculo de la depreciación acelerada de maquinaria importada",
            "D) El tope impositivo aplicado a los gastos por intereses financieros"
        ],
        respuestaCorrecta: 1,
        explicacion: "Bajo racionamiento de capital, la empresa debe seleccionar la combinación o portafolio óptimo de proyectos que maximice el $VPN$ total sujeto a la restricción presupuestal asignada."
    },
    {
        id: 119,
        area: "Mercados e Instituciones Financieras",
        pregunta: "¿Qué es la BANXICO (Banco de México) y cuál es su mandato constitucional primario?",
        opciones: [
            "A) Un banco comercial encargado de administrar fondos de inversión públicos",
            "B) Un tribunal bursátil dedicado a regular la venta de acciones corporativas",
            "C) El banco central de México, cuyo mandato prioritario es procurar la estabilidad del poder adquisitivo de la moneda nacional (control inflacionario)",
            "D) Una agencias de financiamiento a las exportaciones e importaciones"
        ],
        respuestaCorrecta: 2,
        explicacion: "El Banco de México es el banco central autónomo de México, regulado por la Constitución para priorizar la estabilidad de precios (control de inflación) en la economía."
    },
    {
        id: 120,
        area: "Gestión de Riesgos e Inversiones",
        pregunta: "¿Qué mide la desviación estándar ($\sigma$) en el análisis de un portafolio de inversión?",
        opciones: [
            "A) El rendimiento excedente sobre el índice de la bolsa de valores",
            "B) La tasa de depreciación cambiaria del fondo mutuo",
            "C) La probabilidad exacta de que una empresa quiebre en un año",
            "D) La dispersión de las rentabilidades del portafolio alrededor de su media esperada, sirviendo como medida cuantitativa del riesgo total"
        ],
        respuestaCorrecta: 3,
        explicacion: "En teoría de portafolios, la desviación estándar calcula la volatilidad o dispersión histórica/esperada de los rendimientos, cuantificando el riesgo total del activo."
    }
];