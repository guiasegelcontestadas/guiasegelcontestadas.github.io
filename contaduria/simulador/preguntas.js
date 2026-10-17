const bancoPreguntas = [
    {
        id: 1,
        area: "Información Financiera",
        pregunta: "De acuerdo con las Normas de Información Financiera (NIF), ¿cuál es el postulado básico que obliga a reconocer contablemente las operaciones en el momento en que ocurren, independientemente de la fecha en que se materialice su cobro o pago?",
        opciones: [
            "A) Sustancia económica.",
            "B) Devengación contable.",
            "C) Asociación de costos y gastos con ingresos.",
            "D) Consistencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La devengación contable establece que los efectos derivados de las transacciones y otros eventos económicos deben reconocerse contablemente en su totalidad en el momento en que ocurren, independientemente de la fecha en que se consideren realizados para fines de su cobro o pago."
    },
    {
        id: 2,
        area: "Información Financiera",
        pregunta: "¿Qué postulado básico de las NIF indica que las transacciones y eventos económicos deben reconocerse contablemente de acuerdo con su realidad económica, anteponiéndose a su forma jurídica?",
        opciones: [
            "A) Sustancia económica.",
            "B) Entidad económica.",
            "C) Negocio en marcha.",
            "D) Dualidad económica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El postulado de sustancia económica exige que la delimitación y el reconocimiento contable de las operaciones se basen en la naturaleza económica de la transacción, prevaleciendo sobre su forma jurídica si estas difieren."
    },
    {
        id: 3,
        area: "Auditoría",
        pregunta: "Durante el proceso de auditoría financiera, ¿cuál es el objetivo principal de realizar pruebas de cumplimiento (o de controles)?",
        opciones: [
            "A) Calcular de manera exacta el monto de los saldos finales de las cuentas de activo fijo.",
            "B) Obtener evidencia de auditoría sobre la efectividad operativa de los controles internos establecidos por la administración para prevenir o detectar errores materiales.",
            "C) Determinar el valor de mercado de las acciones de la entidad dictaminada.",
            "D) Sustituir por completo las pruebas sustantivas de detalle en las cuentas de balance."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las pruebas de cumplimiento evalúan si los controles internos clave operan de manera efectiva y continua durante el periodo bajo auditoría, sustentando la confianza en el sistema de control."
    },
    {
        id: 4,
        area: "Auditoría",
        pregunta: "En el dictamen de estados financieros, ¿cómo se denomina el párrafo en el que el auditor independiente llama la atención sobre una cuestión presentada o revelada en los estados financieros que, a su juicio, es de fundamental importancia para que los usuarios comprendan dichos estados?",
        opciones: [
            "A) Opinión con salvedades.",
            "B) Opinión adversa o negativa.",
            "C) Párrafo de énfasis.",
            "D) Abstención de opinión."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El párrafo de énfasis se incluye en el dictamen para destacar un asunto debidamente revelado en las notas financieras que es crucial para la comprensión de los usuarios, sin modificar la opinión del auditor."
    },
    {
        id: 5,
        area: "Fiscal",
        pregunta: "De conformidad con la Ley del Impuesto sobre la Renta (LISR), ¿cómo se define el concepto de 'Establecimiento Permanente' para efectos fiscales de residentes en el extranjero?",
        opciones: [
            "A) Cualquier cuenta bancaria abierta en instituciones financieras nacionales.",
            "B) Cualquier lugar de negocios en el que se desarrollen, parcial o totalmente, actividades empresariales o se presten servicios independientes.",
            "C) Únicamente las oficinas centrales ubicadas en el país de residencia del contribuyente.",
            "D) La posesión de acciones ordinarias sin derecho a voto en una sociedad mercantil."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un establecimiento permanente es cualquier local o lugar de negocios donde se realicen actividades empresariales o servicios personales independientes, obligando al pago de ISR en México."
    },
    {
        id: 6,
        area: "Fiscal",
        pregunta: "En el marco del Código Fiscal de la Federación (CFF), ¿cuál es el plazo general con el que cuenta la autoridad fiscal para determinar contribuciones omitidas y sus accesorios, contado a partir del día siguiente en que se presentó o debió presentar la declaración?",
        opciones: [
            "A) Tres años.",
            "B) Cinco años.",
            "C) Diez años en caso de contabilidad incompleta.",
            "D) Dos años."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 67 del CFF establece que las facultades de las autoridades fiscales para determinar contribuciones o aprovechamientos omitidos se caducan en el plazo de cinco años generales."
    },
    {
        id: 7,
        area: "Costos y Finanzas",
        pregunta: "En la contabilidad de costos, ¿qué caracteriza al sistema de 'Costeo Absorbente' (o tradicional) frente al sistema de 'Costeo Directo' (o variable)?",
        opciones: [
            "A) El costeo absorbente incluye tanto los costos fijos como los variables de producción en la valuación de los inventarios y del costo de ventas.",
            "B) El costeo absorbente excluye los costos indirectos fijos de fabricación de los inventarios.",
            "C) El costeo directo capitaliza todos los gastos de administración como parte del costo de producción.",
            "D) No existe diferencia analítica en la valuación de la utilidad neta a largo plazo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El costeo absorbente incorpora todos los elementos de la producción (materiales, mano de obra y cargos indirectos fijos y variables) al costo del producto, conforme a las NIF."
    },
    {
        id: 8,
        area: "Costos y Finanzas",
        pregunta: "¿Cómo se define el concepto de 'Punto de Equilibrio' en la planeación y control financiero operativo de una empresa?",
        opciones: [
            "A) El nivel de ventas donde el margen de contribución es estrictamente igual a cero.",
            "B) El volumen de ventas (en unidades o en dinero) en el cual los ingresos totales igualan exactamente a los costos totales, resultando en una utilidad operativa nula.",
            "C) El momento en que los pasivos a corto plazo superan al activo circulante.",
            "D) La tasa máxima de endeudamiento bancario permitida."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El punto de equilibrio es el umbral financiero donde los ingresos cubren todos los costos fijos y variables, sin generar utilidades ni pérdidas."
    },
    {
        id: 9,
        area: "Información Financiera",
        pregunta: "Según la NIF B-2 (Estado de Flujos de Efectivo), ¿cómo deben clasificarse los flujos de efectivo derivados del pago de intereses por financiamientos obtenidos?",
        opciones: [
            "A) Actividades de operación.",
            "B) Actividades de inversión.",
            "C) Actividades de financiamiento.",
            "D) Actividades extraordinarias."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La NIF B-2 permite clasificar los intereses pagados como actividades de operación o de financiamiento; sin embargo, por norma general de consistencia y estructura de capital, los flujos relacionados con préstamos se asocian a financiamiento u operación según la política elegida, siendo común en la práctica clasificar los dividendos y financiamientos bajo reglas específicas."
    },
    {
        id: 10,
        area: "Auditoría",
        pregunta: "En el diseño de procedimientos de auditoría, ¿qué representa el concepto de 'Riesgo de Control'?",
        opciones: [
            "A) El riesgo de que los estados financieros contengan incorrecciones materiales antes de considerar los controles internos.",
            "B) El riesgo de que una incorrección material que pueda existir en una afirmación no sea prevenida, detectada y corregida oportunamente por el sistema de control interno de la entidad.",
            "C) El riesgo de que el auditor exprese una opinión de auditoría inapropiada cuando los estados financieros están materialmente incorrectos.",
            "D) El riesgo derivado de fluctuaciones macroeconómicas en el sector industrial."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El riesgo de control es la posibilidad de que el control interno falle en prevenir o detectar errores significativos en los registros financieros de manera oportuna."
    },
    {
        id: 11,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del Impuesto al Valor Agregado (LIVA), ¿cuál es el tratamiento aplicable a la enajenación de bienes realizada en territorio nacional que se encuentra sujeta a la tasa del 0%?",
        opciones: [
            "A) El acto o actividad está exento y no genera obligación de trasladar el impuesto ni acreditar el IVA pagado.",
            "B) El acto está gravado pero se calcula aplicando una tasa nula, lo que permite al contribuyente acreditar o solicitar la devolución del IVA pagado en sus gastos e insumos.",
            "C) Se grava a la tasa general del 16% automáticamente.",
            "D) Se considera un ingreso acumulable exento de ISR."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tasa del 0% grava efectivamente la operación pero con un factor nulo, permitiendo al contribuyente el acreditamiento del IVA soportado en sus adquisiciones (a diferencia de las exenciones)."
    },
    {
        id: 12,
        area: "Costos y Finanzas",
        pregunta: "En la evaluación financiera de proyectos, ¿qué indica un Valor Presente Neto (VPN) igual a cero al descontar los flujos de efectivo a la Tasa Mínima Aceptable de Rendimiento (TMAR)?",
        opciones: [
            "A) Que el proyecto genera pérdidas operativas insostenibles.",
            "B) Que el proyecto rinde exactamente la TMAR exigida, recuperando la inversión inicial y cubriendo el costo de oportunidad del capital sin aportar valor adicional.",
            "C) Que la Tasa Interna de Retorno (TIR) es menor que cero.",
            "D) Que el periodo de recuperación de la inversión supera la vida útil del activo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Un VPN = 0 significa que el proyecto cumple exactamente con el rendimiento mínimo requerido por los inversionistas (TMAR), recuperando el capital y el costo de oportunidad."
    },
    {
        id: 13,
        area: "Información Financiera",
        pregunta: "De acuerdo con la NIF C-6 (Propiedades, Planta y Equipo), ¿cómo debe determinarse el monto inicial por el cual se reconoce un activo fijo adquirido?",
        opciones: [
            "A) A su valor de realización estimado en el mercado secundario.",
            "B) A su costo de adquisición, el cual incluye el precio de compra, los aranceles de importación y todos los costos directamente atribuibles necesarios para ubicar el activo en el lugar y condiciones operativas previstas.",
            "C) Al valor fiscal determinado por la autoridad hacendaria.",
            "D) Al costo histórico sin deducir depreciación acumulada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El reconocimiento inicial de propiedades, planta y equipo se realiza al costo, sumando precio de compra, impuestos no recuperables y costos de instalación y puesta en marcha."
    },
    {
        id: 14,
        area: "Auditoría",
        pregunta: "En una auditoría de estados financieros, ¿qué constituye una 'Incorrección Material' (o error material)?",
        opciones: [
            "A) Un error aritmético de un centavo en los registros auxiliares de caja.",
            "B) Una omisión o inexactitud en los estados financieros cuyo efecto individual o agregado puede influir razonablemente en las decisiones económicas tomadas por los usuarios.",
            "C) Cualquier diferencia entre el criterio del auditor y la política contable adoptada por la gerencia.",
            "D) La falta de firma autógrafa en los pagarés de clientes."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una incorrección es material si su magnitud o naturaleza es tal que, de forma individual o conjunta, alteraría el juicio o decisiones de los usuarios de la información financiera."
    },
    {
        id: 15,
        area: "Fiscal",
        pregunta: "¿Cuál es la obligación formal en materia de comprobantes fiscales digitales por Internet (CFDI) establecida en el CFF cuando se realiza una operación con un cliente y este paga en parcialidades o de manera diferida?",
        opciones: [
            "A) Emitir un único CFDI global al final del ejercicio fiscal.",
            "B) Emitir un CFDI por el valor total de la operación y un CFDI con complemento para recepción de pagos (recibo electrónico de pago) por cada parcialidad efectivamente cobrada.",
            "C) Expedir notas de remisión físicas sin validez fiscal.",
            "D) No emitir comprobante si el monto es menor a un salario mínimo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En operaciones PPD (Pago en Parcialidades o Diferido), el CFF exige emitir un CFDI por la operación total y posteriormente un CFDI con complemento de pago por cada abono recibido."
    },
    {
        id: 16,
        area: "Costos y Finanzas",
        pregunta: "En el sistema de costos por órdenes de producción, ¿cuál es la característica operativa fundamental para el registro y acumulación de los costos?",
        opciones: [
            "A) Acumular los costos por procesos productivos continuos en departamentos homogéneos.",
            "B) Acumular los costos de materiales, mano de obra y cargos indirectos específicos para cada orden o lote de trabajo diferenciado que solicita un cliente.",
            "C) Distribuir los costos fijos mediante tasas globales sin importar las características del lote.",
            "D) Omitir el registro de la mano de obra directa."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El costeo por órdenes agrupa los costos de producción (materiales, mano de obra y cargos indirectos) identificándolos plenamente con cada orden de trabajo específica y heterogénea."
    },
    {
        id: 17,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF B-3 (Estado de Resultados Integral), ¿cómo deben presentarse los costos y gastos en el estado de resultados?",
        opciones: [
            "A) Clasificados basándose en su función (costo de ventas, gastos de venta y gastos de administración) o en su naturaleza de manera obligatoria única.",
            "B) Clasificados atendiendo a su función o a su naturaleza, permitiendo mostrar de manera clara los diferentes niveles de utilidad.",
            "C) Agrupados exclusivamente por el método de inventarios perpetuos.",
            "D) Sin separar los gastos operativos de los financieros."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La NIF B-3 permite a las entidades clasificar los gastos por su función o por su naturaleza, siempre que ello proporcione información confiable y relevante."
    },
    {
        id: 18,
        area: "Auditoría",
        pregunta: "Durante la fase de planeación de una auditoría, ¿qué entiende el auditor por 'Importancia Relativa de Planeación' (Materialidad de Planeación)?",
        opciones: [
            "A) El monto máximo de honorarios que cobrará la firma auditora.",
            "B) La magnitud de la incorrección en los estados financieros que, a juicio del auditor, hace probable que las decisiones económicas de los usuarios se vean influidas.",
            "C) El saldo mínimo de caja chica sujeto a conteo físico.",
            "D) El número de horas-hombre estimadas para concluir el trabajo."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La materialidad de planeación es el umbral cuantitativo fijado por el auditor para detectar incorrecciones materiales en los estados financieros considerados en su conjunto."
    },
    {
        id: 19,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del Impuesto sobre la Renta (LISR), ¿cuál es el porcentaje máximo anual de deducción autorizada (depreciación fiscal) aplicable al equipo de cómputo electrónico comercial?",
        opciones: [
            "A) 10%",
            "B) 20%",
            "C) 30%",
            "D) 50%"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 34 de la LISR establece que los equipos de cómputo electrónico tienen una tasa máxima de deducción autorizada del 30% anual."
    },
    {
        id: 20,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera del capital de trabajo, ¿qué mide la razón financiera de 'Prueba Ácida' (Quick Ratio) en comparación con la Razón Circulante?",
        opciones: [
            "A) La capacidad inmediata de la empresa para cubrir sus obligaciones a corto plazo sin depender de la venta de sus inventarios.",
            "B) El rendimiento neto obtenido sobre el capital contable.",
            "C) El número de días que tardan las cuentas por cobrar en convertirse en efectivo.",
            "D) El endeudamiento total frente a los activos fijos tangibles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prueba ácida es un indicador de liquidez más riguroso que la razón circulante, ya que excluye a los inventarios (por considerarse el activo menos líquido a corto plazo)."
    },
    {
        id: 21,
        area: "Información Financiera",
        pregunta: "De acuerdo con la NIF C-1 (Efectivo y equivalentes de efectivo), ¿cómo deben valorarse los equivalentes de efectivo al cierre del periodo contable?",
        opciones: [
            "A) A su costo histórico de adquisición sin ajustes.",
            "B) A su valor razonable, reconociendo en el resultado del periodo los efectos de su fluctuación.",
            "C) Al valor nominal de emisión gubernamental.",
            "D) Al costo de reposición de mercado."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los equivalentes de efectivo (inversiones a corto plazo de gran liquidez) deben reconocerse a su valor razonable, reflejando cambios en su valor en los resultados."
    },
    {
        id: 22,
        area: "Auditoría",
        pregunta: "En la ejecución de una auditoría, ¿qué constituye evidencia de auditoría de mayor confiabilidad y persuasión para el auditor?",
        opciones: [
            "A) Una confirmación escrita recibida directamente de terceros independientes en formato físico o electrónico.",
            "B) Una declaración verbal realizada por el director general en la junta de apertura.",
            "C) Un informe interno elaborado por el departamento de contabilidad de la empresa auditada.",
            "D) Una factura de gastos sin requisitos fiscales de fecha anterior al ejercicio."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La evidencia obtenida directamente de fuentes independientes externas (como confirmaciones de bancos o clientes) es considerada de alta confiabilidad por el auditor."
    },
    {
        id: 23,
        area: "Fiscal",
        pregunta: "En el régimen fiscal mexicano, ¿qué establece la Ley del Impuesto sobre la Renta respecto a la obligación de las personas morales de llevar contabilidad?",
        opciones: [
            "A) Es opcional y depende del volumen de ingresos anuales.",
            "B) Deben llevar contabilidad conforme al Código Fiscal de la Federación y su reglamento, registrando las operaciones en sistemas electrónicos con contabilidad en red.",
            "C) Únicamente deben conservar facturas globales en papel.",
            "D) Quedan exentas si pagan la tasa única de dividendos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las personas morales están obligadas a llevar contabilidad y registrar sus operaciones a través de medios electrónicos, ingresando su balanza de comprobación mensual al SAT."
    },
    {
        id: 24,
        area: "Costos y Finanzas",
        pregunta: "En el análisis financiero, ¿qué representa la palanca o grado de Apalancamiento Operativo (AO)?",
        opciones: [
            "A) La sensibilidad de la utilidad operativa ante cambios porcentuales en el volumen de ventas, derivada de la estructura de costos fijos operativos.",
            "B) El porcentaje de endeudamiento bancario a largo plazo contratado para comprar maquinaria.",
            "C) La rotación de las cuentas por cobrar comerciales.",
            "D) El pago de dividendos en efectivo a los accionistas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El apalancamiento operativo refleja cómo los costos fijos de operación amplifican el impacto de las variaciones en las ventas sobre la utilidad operativa (UAII)."
    },
    {
        id: 25,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF B-4 (Estado de Cambios en el Capital Contable), ¿cuál es el objetivo principal de este estado financiero básico?",
        opciones: [
            "A) Mostrar los movimientos en la inversión de los accionistas durante un periodo, explicando los cambios en las distintas partidas que integran el capital contable.",
            "B) Listar de forma detallada el saldo de las cuentas bancarias de cheques.",
            "C) Calcular el costo de ventas absorbente.",
            "D) Determinar el impuesto sobre la renta diferido del ejercicio."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El estado de cambios en el capital contable presenta los incrementos o disminuciones derivados de las decisiones de los propietarios y de la actuación de la entidad."
    },
    {
        id: 26,
        area: "Auditoría",
        pregunta: "En la metodología de muestreo en auditoría, ¿qué significa el término 'Riesgo de Muestreo'?",
        opciones: [
            "A) El riesgo de que el auditor aplique procedimientos de auditoría inadecuados por falta de experiencia.",
            "B) El riesgo de que la conclusión del auditor basada en una muestra pueda diferir de la conclusión si se hubiera aplicado el mismo procedimiento a toda la población.",
            "C) El riesgo de fraude corporativo por parte de los empleados.",
            "D) El riesgo de fluctuaciones cambiarias en saldos en moneda extranjera."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El riesgo de muestreo surge de la posibilidad de que la muestra seleccionada no sea representativa de toda la población, llevando al auditor a una conclusión errónea."
    },
    {
        id: 27,
        area: "Fiscal",
        pregunta: "De acuerdo con el Código Fiscal de la Federación, ¿qué se entiende por 'Respons Solidario' en materia fiscal?",
        opciones: [
            "A) Cualquier ciudadano que compre bienes en establecimientos formales.",
            "B) Aquella persona física o moral que, por disposición de ley, está obligada a responder por el pago de una contribución adeuda por el contribuyente principal.",
            "C) El auditor externo independiente que dictamina los estados financieros.",
            "D) El notario público que archiva escrituras sin efectos fiscales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La figura del responsable solidario (como socios, liquidadores o administradores en ciertos supuestos) responde ante el fisco por los adeudos tributarios del contribuyente principal."
    },
    {
        id: 28,
        area: "Costos y Finanzas",
        pregunta: "En la administración de inventarios, ¿qué representa el modelo de Lote Económico de Pedido (EOQ)?",
        opciones: [
            "A) El punto exacto de reorden cuando el stock llega a cero absoluto.",
            "B) La cantidad de pedido que minimiza los costos totales anuales de inventario, equilibrando los costos de ordenar y los costos de mantenimiento.",
            "C) El inventario máximo de seguridad ante huelgas de transporte.",
            "D) El costo total de mantener mercancía obsoleta."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El modelo EOQ busca el punto de equilibrio donde los costos de emitir órdenes de compra y los costos de mantener stock se igualan, minimizando el costo total."
    },
    {
        id: 29,
        area: "Información Financiera",
        pregunta: "De acuerdo con la NIF C-3 (Cuentas por cobrar), ¿cómo deben reconocerse inicialmente las cuentas por cobrar comerciales?",
        opciones: [
            "A) A su valor nominal descontado por intereses implícitos futuros.",
            "B) Al valor razonable, el cual es generalmente el precio de la transacción acordado en el contrato o factura inicial.",
            "C) Al costo histórico ajustado por inflación general.",
            "D) Al valor de realización estimado de cobro inmediato."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las cuentas por cobrar se reconocen inicialmente a su valor razonable, que por lo general corresponde al precio de la transacción estipulado."
    },
    {
        id: 30,
        area: "Auditoría",
        pregunta: "En una auditoría de estados financieros, ¿qué procedimiento debe seguir obligatoriamente el auditor ante la identificación de un riesgo significativo de fraude?",
        opciones: [
            "A) Renunciar inmediatamente al encargo de auditoría sin notificar a los reguladores.",
            "B) Evaluar los controles relacionados con el fraude y diseñar procedimientos sustantivos específicos que respondan a dicho riesgo evaluado.",
            "C) Omitir la emisión del dictamen fiscal.",
            "D) Asumir que la gerencia es honesta y no realizar pruebas adicionales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Ante riesgos significativos de fraude, las normas de auditoría exigen diseñar e implementar respuestas de auditoría específicas, incluyendo la modificación de la naturaleza y oportunidad de las pruebas."
    },
    {
        id: 31,
        area: "Fiscal",
        pregunta: "Conforme a la Ley del Impuesto sobre la Renta, ¿qué tratamiento fiscal se le da a la 'Pluvalía' o ganancia por enajenación de terrenos realizada por una persona moral?",
        opciones: [
            "A) Se considera un ingreso acumulable en el ejercicio en que se enajene el bien.",
            "B) Está totalmente exenta de impuestos federales.",
            "C) Se deduce contra los gastos generales de operación.",
            "D) Se acumula únicamente al momento de la liquidación de la sociedad."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Para las personas morales, la ganancia derivada de la enajenación de terrenos (y cualquier activo fijo) constituye un ingreso acumulable gravado por la LISR."
    },
    {
        id: 32,
        area: "Costos y Finanzas",
        pregunta: "En el sistema de costos por procesos, ¿cómo se determina el concepto de 'Producción Equivalente'?",
        opciones: [
            "A) El número total de unidades terminadas al final del periodo contable.",
            "B) El volumen de unidades terminadas más las unidades en proceso expresadas en términos de unidades completamente terminadas con base en su grado de avance.",
            "C) El inventario inicial de materia prima sin procesar.",
            "D) La capacidad máxima instalada de la maquinaria industrial."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La producción equivalente homogeneiza las unidades en proceso con las terminadas multiplicándolas por su porcentaje de avance, permitiendo calcular el costo unitario en procesos continuos."
    },
    {
        id: 33,
        area: "Información Financiera",
        pregunta: "En relación con los impuestos a la utilidad, ¿qué establece la NIF D-4 sobre el reconocimiento contable de los impuestos diferidos?",
        opciones: [
            "A) Deben reconocerse utilizando el método de activos y pasivos basado en el balance, reconociendo diferencias temporales entre los valores contables y fiscales de los activos y pasivos.",
            "B) Se registran únicamente cuando la autoridad fiscal emite una orden de cobro definitiva.",
            "C) Quedan prohibidos en los estados financieros básicos.",
            "D) Se calculan exclusivamente aplicando la tasa inflacionaria anual."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NIF D-4 exige el reconocimiento de impuestos diferidos por el método de activo/pasivo con base en las diferencias temporales surgidas entre la base contable y fiscal."
    },
    {
        id: 34,
        area: "Auditoría",
        pregunta: "En la revisión del ciclo de tesorería durante una auditoría, ¿cuál es el propósito de realizar una 'Arqueo de Caja' sorpresivo?",
        opciones: [
            "A) Comprobar la existencia física de los fondos en efectivo y detectar posibles faltantes o manejo inadecuado de efectivo.",
            "B) Sustituir la conciliación bancaria mensual.",
            "C) Determinar el rendimiento financiero de las inversiones en acciones.",
            "D) Calcular el impuesto al valor agregado acreditable."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El arqueo de caja sorpresivo es un procedimiento de control sustantivo para verificar físicamente el efectivo disponible y constatar que coincida con los registros contables."
    },
    {
        id: 35,
        area: "Fiscal",
        pregunta: "En el régimen de consolidación o estímulos fiscales de la LISR, ¿qué se entiende por la deducción inmediata de inversiones (cuando esté vigente en ley o reglas aplicables)?",
        opciones: [
            "A) Deducir el 100% del costo de adquisición de los bienes de activo fijo en el ejercicio en que se realizan, en lugar de aplicar porcentajes anuales de depreciación.",
            "B) No pagar impuestos durante los primeros diez años de operaciones.",
            "C) Acreditar el IVA de los gastos personales del socio mayoritario.",
            "D) Omitir la presentación de declaraciones provisionales."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La deducción inmediata permite deducir el costo total de los bienes de activo fijo en un solo ejercicio fiscal bajo ciertos requisitos legales, acelerando el beneficio fiscal."
    },
    {
        id: 36,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera, ¿qué mide la razón de 'Endeudamiento Total' (Pasivo Total a Activo Total)?",
        opciones: [
            "A) La proporción de los activos totales de la empresa que se encuentran financiados por acreedores externos.",
            "B) La velocidad con la que se recuperan las cuentas por cobrar comerciales.",
            "C) El rendimiento neto obtenido sobre el capital social.",
            "D) La liquidez disponible en cuentas de cheques."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La razón de endeudamiento relaciona los pasivos totales con los activos totales, indicando el porcentaje de los bienes que está respaldado por deuda ajena."
    },
    {
        id: 37,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF B-10 (Efectos de la Inflación), ¿cuándo debe considerarse que el entorno económico de una entidad es 'Inflacionario' para efectos de reconocer los efectos de la inflación?",
        opciones: [
            "A) Cuando la inflación acumulada de los últimos tres años alcanza o supera el 26% (promedio anual aproximado del 8%), entre otros indicadores cualitativos.",
            "B) Cuando la tasa de interés interbancaria supera el 5%.",
            "C) Cuando el tipo de cambio peso-dólar se deprecia un 10% en un mes.",
            "D) De manera obligatoria en todas las entidades sin importar el índice nacional de precios."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NIF B-10 estipula que un entorno es inflacionario si la inflación acumulada en 3 años es igual o mayor al 26%, obligando a reexpresar los estados financieros."
    },
    {
        id: 38,
        area: "Auditoría",
        pregunta: "En una auditoría de estados financieros, ¿qué representa la 'Opinión Negativa' (o Adversa) emitida por el auditor?",
        opciones: [
            "A) Que el auditor no pudo obtener evidencia suficiente y adecuada para formarse una opinión.",
            "B) Que los estados financieros no presentan razonablemente la situación financiera de la entidad, de conformidad con las NIF, debido a incorrecciones materiales y generalizadas.",
            "C) Que los estados financieros están libres de errores significativos y cumplen con la normativa.",
            "D) Que la empresa tiene problemas de negocio en marcha pero están debidamente revelados."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una opinión adversa se emite cuando el auditor concluye que las incorrecciones, individual o conjuntamente, son tanto materiales como generalizadas en los estados financieros."
    },
    {
        id: 39,
        area: "Fiscal",
        pregunta: "De acuerdo con el Código Fiscal de la Federación, ¿cuál es el requisito formal indispensable para que las deducciones autorizadas para efectos de ISR sean legalmente procedentes?",
        opciones: [
            "A) Estar amparadas con un comprobante fiscal digital por Internet (CFDI) que reúna los requisitos fiscales y haber sido pagadas mediante los medios autorizados cuando excedan los montos establecidos en ley.",
            "B) Contar con un contrato privado firmado ante dos testigos presenciales.",
            "C) Estar registradas únicamente en libros de contabilidad manuales.",
            "D) Haber sido pagadas exclusivamente en efectivo en una sola exhibición."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El CFF exige que las deducciones estén respaldadas por un CFDI válido y que los pagos superiores al límite legal (generalmente 2,000 pesos) se realicen mediante transferencia, tarjeta o cheque nominativo."
    },
    {
        id: 40,
        area: "Costos y Finanzas",
        pregunta: "En la evaluación financiera de proyectos bajo condiciones de riesgo, ¿qué mide la Tasa Interna de Retorno Modificada (TIRM) en comparación con la TIR convencional?",
        opciones: [
            "A) Elimina el problema de múltiples tasas de retorno y asume una tasa de reinversión más realista de los flujos intermedios (como el costo de capital de la empresa).",
            "B) Calcula el proyecto sin necesidad de conocer los flujos de efectivo futuros.",
            "C) Convierte el proyecto en un modelo determinista sin incertidumbre económica.",
            "D) Es el único método aceptado por la Comisión Nacional Bancaria y de Valores."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La TIRM corrige el supuesto irreal de la TIR tradicional (que asume que los flujos se reinvierten a la misma TIR) permitiendo fijar una tasa de reinversión específica como el WACC."
    },
    {
        id: 41,
        area: "Información Financiera",
        pregunta: "Qué postulado básico de las NIF se refiere a la presunción de que la entidad económica continuará en operación por tiempo indefinido?",
        opciones: [
            "A) Negocio en marcha.",
            "B) Sustancia económica.",
            "C) Consistencia.",
            "D) Devengación contable."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El postulado de negocio en marcha asume que la entidad continuará operando en el futuro previsible, a menos que la administración tenga la intención de liquidarla o cesar operaciones."
    },
    {
        id: 42,
        area: "Auditoría",
        pregunta: "En la planeación de una auditoría, ¿qué representa el 'Riesgo Inherente'?",
        opciones: [
            "A) El riesgo de que los controles internos fallen en detectar errores.",
            "B) La susceptibilidad de una afirmación contable a una incorrección material, antes de considerar los controles internos relacionados.",
            "C) El riesgo de que el auditor emita una opinión limpia por error de muestreo.",
            "D) El riesgo derivado de la fluctuación del tipo de cambio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El riesgo inherente es la vulnerabilidad de los saldos o transacciones a sufrir errores materiales antes de evaluar la efectividad de los controles internos."
    },
    {
        id: 43,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del ISR, ¿cuál es el tratamiento para las personas morales respecto a la deducción de gastos que no reúnan requisitos fiscales?",
        opciones: [
            "A) Son deducibles al 50%.",
            "B) Se acumulan como ingresos ordinarios.",
            "C) No son deducibles para efectos del impuesto sobre la renta.",
            "D) Se acreditan directamente contra el IVA."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los gastos que carecen de requisitos fiscales obligatorios (como el CFDI válido o medios de pago autorizados) pierden su deducibilidad fiscal."
    },
    {
        id: 44,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera, ¿cómo se define el Capital de Trabajo Neto?",
        opciones: [
            "A) El total de activos fijos tangibles menos pasivos a largo plazo.",
            "B) El efectivo disponible en caja chica.",
            "C) La suma de todas las deudas bancarias a corto plazo.",
            "D) La diferencia aritmética entre el activo circulante y el pasivo circulante."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El capital de trabajo neto representa los recursos líquidos con los que cuenta la empresa para operar a corto plazo tras cubrir sus deudas inmediatas."
    },
    {
        id: 45,
        area: "Información Financiera",
        pregunta: "Según la NIF B-6, ¿cuál es la definición de un pasivo?",
        opciones: [
            "A) Una obligación presente de la entidad, virtualmente ineludible, identificada, cuantificada en términos monetarios y derivada de eventos pasados.",
            "B) Un recurso económico controlado por la entidad.",
            "C) Una aportación de los socios no reembolsable.",
            "D) Un derecho de cobro a clientes a corto plazo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El pasivo se define como una obligación presente ineludible surgida de sucesos pasados, cuyo pago transferirá recursos económicos."
    },
    {
        id: 46,
        area: "Auditoría",
        pregunta: "¿Cuál es el documento en el que el auditor independiente expresa su opinión profesional sobre si los estados financieros presentan razonablemente la situación financiera de la empresa?",
        opciones: [
            "A) Cédula sumaria de auditoría.",
            "B) Dictamen de estados financieros.",
            "C) Carta de recomendaciones de control interno.",
            "D) Balanza de comprobación ajustada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El dictamen es el informe formal donde el auditor emite su opinión técnica y profesional con base en las normas de auditoría."
    },
    {
        id: 47,
        area: "Fiscal",
        pregunta: "¿Qué impuesto federal grava la enajenación de bienes, la prestación de servicios independientes y el uso o goce temporal de bienes en México?",
        opciones: [
            "A) Impuesto sobre la Renta (ISR).",
            "B) Impuesto Especial sobre Producción y Servicios (IEPS).",
            "C) Impuesto al Valor Agregado (IVA).",
            "D) Impuesto Sobre Nóminas (ISN)."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Impuesto al Valor Agregado (IVA) es un impuesto indirecto que grava el consumo de bienes y servicios en territorio nacional."
    },
    {
        id: 48,
        area: "Costos y Finanzas",
        pregunta: "En el sistema de costos estándar, ¿cómo se define una 'Desviación o Variación en Materiales' desfavorable?",
        opciones: [
            "A) Cuando el costo real es exactamente igual al costo estándar.",
            "B) Cuando se consumió menor cantidad de materia prima que la presupuestada.",
            "C) Cuando el precio de compra fue inferior al estándar.",
            "D) Cuando el costo o la cantidad real de materia prima utilizada supera al estándar predeterminado."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Una variación desfavorable ocurre cuando los recursos reales consumidos o pagados rebasan lo presupuestado bajo estándares."
    },
    {
        id: 49,
        area: "Información Financiera",
        pregunta: "¿Qué norma de información financiera regula la presentación y valuación del Estado de Flujos de Efectivo en México?",
        opciones: [
            "A) NIF B-2.",
            "B) NIF B-4.",
            "C) NIF C-3.",
            "D) NIF D-4."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La NIF B-2 establece las normas de presentación, estructura y elaboración del estado de flujos de efectivo."
    },
    {
        id: 50,
        area: "Auditoría",
        pregunta: "¿Cómo se denominan las pruebas de auditoría diseñadas específicamente para detectar incorrecciones materiales a nivel de afirmación en los estados financieros?",
        opciones: [
            "A) Pruebas de cumplimiento de controles.",
            "B) Pruebas sustantivas (pruebas de detalle y procedimientos analíticos sustantivos).",
            "C) Pruebas de recorrido operativo.",
            "D) Pruebas de segregación de funciones."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las pruebas sustantivas se enfocan en comprobar la validez y exactitud de los saldos y transacciones contables."
    },
    {
        id: 51,
        area: "Fiscal",
        pregunta: "¿Cuál es el plazo legal general para conservar la contabilidad y la documentación comprobatoria a disposición de las autoridades fiscales según el CFF?",
        opciones: [
            "A) Tres años.",
            "B) Dos años.",
            "C) Cinco años.",
            "D) Diez años invariables."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Código Fiscal de la Federación obliga a los contribuyentes a conservar su contabilidad por un plazo general de cinco años."
    },
    {
        id: 52,
        area: "Costos y Finanzas",
        pregunta: "¿Qué mide la razón financiera de 'Rotación de Cuentas por Cobrar'?",
        opciones: [
            "A) El porcentaje de pasivos a corto plazo cubiertos con efectivo.",
            "B) La velocidad con la que se venden los inventarios en el almacén.",
            "C) El rendimiento neto sobre el capital contable.",
            "D) El número de veces que las cuentas por cobrar se convierten en efectivo durante el periodo contable."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Mide la eficiencia en la gestión de crédito y cobranza calculando cuántas veces se recupera el saldo de clientes al año."
    },
    {
        id: 53,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF C-4, ¿cómo deben valuarse los inventarios al cierre del periodo?",
        opciones: [
            "A) A su costo o a su valor de realización, el que sea menor.",
            "B) Siempre a su valor de reposición de mercado.",
            "C) Exclusivamente al costo histórico de adquisición sin depreciar.",
            "D) Al valor nominal estipulado en factura original."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La regla de valuación de inventarios exige reconocerlos a su costo de adquisición o valor neto de realización, el que resulte menor."
    },
    {
        id: 54,
        area: "Auditoría",
        pregunta: "En el proceso de auditoría, ¿qué es la 'Carta de Declaraciones de la Administración' (o carta de gerencia)?",
        opciones: [
            "A) Un documento donde el auditor detalla sus honorarios profesionales.",
            "B) Un documento firmado por la administración de la entidad donde confirma su responsabilidad sobre la preparación de los estados financieros y la veracidad de la información proporcionada.",
            "C) El contrato de prestación de servicios de auditoría externa.",
            "D) La notificación de hallazgos fiscales ante el SAT."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Es la carta formal mediante la cual la gerencia asume la plena responsabilidad de los estados financieros entregados al auditor."
    },
    {
        id: 55,
        area: "Fiscal",
        pregunta: "¿Qué contribución federal grava la producción, venta o importación de gasolinas, alcoholes, cerveza, tabacos labrados y bebidas saborizadas en México?",
        opciones: [
            "A) Impuesto al Valor Agregado (IVA).",
            "B) Impuesto sobre la Renta (ISR).",
            "C) Impuesto Especial sobre Producción y Servicios (IEPS).",
            "D) Impuesto Sobre Automóviles Nuevos (ISAN)."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El IEPS es un impuesto indirecto aplicado a la producción y comercialización de bienes específicos considerados de consumo gravado especial."
    },
    {
        id: 56,
        area: "Costos y Finanzas",
        pregunta: "¿Qué representa el concepto de 'Margen de Contribución' unitario en la contabilidad administrativa?",
        opciones: [
            "A) La utilidad neta dividida entre el total de activos fijos.",
            "B) El costo fijo total entre el precio de venta.",
            "C) La suma de los costos indirectos de fabricación fijos.",
            "D) La diferencia entre el precio de venta unitario y el costo variable unitario."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El margen de contribución unitario muestra cuánto aporta cada producto vendido para cubrir los costos fijos y generar utilidad."
    },
    {
        id: 57,
        area: "Información Financiera",
        pregunta: "¿Qué postulado básico establece que las operaciones y eventos económicos de una entidad deben identificarse y delimitarse en forma independiente de su propietario?",
        opciones: [
            "A) Entidad económica.",
            "B) Sustancia económica.",
            "C) Negocio en marcha.",
            "D) Consistencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El postulado de entidad económica separa los recursos y obligaciones de la empresa respecto a los de sus dueños o accionistas."
    },
    {
        id: 58,
        area: "Auditoría",
        pregunta: "¿Qué tipo de opinión emite un auditor cuando concluye que los estados financieros presentan razonablemente, en todos los aspectos materiales, la situación financiera de la entidad conforme a las NIF?",
        opciones: [
            "A) Opinión con salvedades.",
            "B) Opinión no modificada (o limpia).",
            "C) Opinión adversa.",
            "D) Abstención de opinión."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una opinión no modificada o limpia se otorga cuando los estados financieros están libres de incorrecciones materiales y cumplen con la normatividad."
    },
    {
        id: 59,
        area: "Fiscal",
        pregunta: "En el régimen fiscal mexicano de personas morales, ¿cuándo se consideran acumulables los ingresos para efectos del ISR en operaciones generales?",
        opciones: [
            "A) Exclusivamente cuando se cobre en efectivo en las oficinas.",
            "B) Al término del ejercicio fiscal en la declaración anual.",
            "C) Cuando se expida el CFDI respectivo, se entregue el bien/servicio o se cobre parcialidad, lo que ocurra primero.",
            "D) Únicamente cuando lo autorice el Servicio de Administración Tributaria."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La acumulación de ingresos para personas morales ocurre en el momento en que se emita el comprobante, se entregue el bien o se cobre, lo que suceda primero."
    },
    {
        id: 60,
        area: "Costos y Finanzas",
        pregunta: "¿Qué mide la razón financiera de 'Rotación de Inventarios'?",
        opciones: [
            "A) La velocidad con la que se pagan las deudas a proveedores.",
            "B) El porcentaje de endeudamiento bancario a largo plazo.",
            "C) El rendimiento sobre el capital contable de los socios.",
            "D) El número de veces que el inventario se vende y se reemplaza en un periodo determinado."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Mide la eficiencia en el manejo del almacén al calcular cuántas veces se vende el inventario promedio durante el año."
    },
    {
        id: 61,
        area: "Información Financiera",
        pregunta: "¿Cómo se define el concepto de 'Activo' según el marco conceptual de las Normas de Información Financiera?",
        opciones: [
            "A) Un recurso económico presente, controlado por la entidad, identificado, cuantificado en términos monetarios y del que se esperan beneficios económicos futuros.",
            "B) Una obligación presente de transferir recursos económicos derivados de sucesos pasados.",
            "C) El remanente de los activos una vez deducidos todos los pasivos.",
            "D) Una aportación de capital efectuada por los accionistas fundadores."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El activo es un recurso controlado por la empresa que generará beneficios económicos futuros derivados de transacciones pasadas."
    },
    {
        id: 62,
        area: "Auditoría",
        pregunta: "En la auditoría de estados financieros, ¿qué representa la 'Seguridad Razonable'?",
        opciones: [
            "A) Una garantía absoluta de que los estados financieros están libres de errores.",
            "B) Un alto nivel de seguridad, aunque no absoluto, obtenido mediante la acumulación de evidencia de auditoría suficiente y adecuada.",
            "C) Un nivel de certeza mínimo basado en estimaciones subjetivas de la gerencia.",
            "D) La ausencia total de riesgos de control interno."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La auditoría no ofrece seguridad absoluta debido a limitaciones inherentes; por ello se busca seguridad razonable mediante evidencia adecuada."
    },
    {
        id: 63,
        area: "Fiscal",
        pregunta: "¿Cuál es el efecto fiscal en materia de ISR para una persona moral cuando efectúa una deducción no autorizada por la ley?",
        opciones: [
            "A) Se acumula como ingreso del mes siguiente.",
            "B) Se acredita contra el IVA del periodo.",
            "C) No es deducible y se adiciona a la utilidad fiscal del ejercicio, incrementando la base gravable del impuesto.",
            "D) Se genera un saldo a favor devoluble automáticamente."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Al rechazar una deducción, esta no disminuye la utilidad fiscal, por lo que forma parte de la base gravable sobre la cual se calcula el ISR."
    },
    {
        id: 64,
        area: "Costos y Finanzas",
        pregunta: "En la contabilidad de costos, ¿qué son los 'Costos Indirectos de Fabricación' (CIF)?",
        opciones: [
            "A) La materia prima directa incorporada al producto terminado.",
            "B) Los salarios pagados directamente a los operarios de la línea de ensamble.",
            "C) Las comisiones sobre ventas pagadas al personal comercial.",
            "D) Aquellos costos que no pueden asociarse o identificarse directamente con una orden de producción o producto específico sin un criterio de asignación."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los CIF son costos de producción que no se pueden rastrear de forma directa a un producto, requiriendo prorrata o bases de asignación."
    },
    {
        id: 65,
        area: "Información Financiera",
        pregunta: "¿Qué principio o postulado básico exige que las políticas contables se mantengan a lo largo del tiempo para permitir la comparabilidad de los estados financieros de la entidad?",
        opciones: [
            "A) Consistencia.",
            "B) Entidad económica.",
            "C) Sustancia económica.",
            "D) Dualidad económica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El postulado de consistencia exige que las operaciones similares tengan un tratamiento contable invariable en el tiempo."
    },
    {
        id: 66,
        area: "Auditoría",
        pregunta: "¿Cómo se denomina el procedimiento de auditoría que consiste en examinar los registros o documentos, ya sea físicos o electrónicos, para verificar la exactitud de las operaciones?",
        opciones: [
            "A) Observación física de inventarios.",
            "B) Inspección de documentos y registros.",
            "C) Confirmación bancaria externa.",
            "D) Indagación verbal con gerentes."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La inspección examina registros y documentos internos o externos para obtener evidencia de auditoría confiable."
    },
    {
        id: 67,
        area: "Fiscal",
        pregunta: "En el CFF, ¿qué plazo tiene un contribuyente para interponer el Recurso de Revocación en contra de actos de autoridades fiscales federales?",
        opciones: [
            "A) 10 días hábiles.",
            "B) 15 días hábiles.",
            "C) 30 días hábiles siguientes a aquel en que haya surtido efectos la notificación del acto impugnado.",
            "D) 5 años fiscales completos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El recurso de revocación debe interponerse dentro de los 30 días hábiles posteriores a la fecha en que surta efectos la notificación del acto."
    },
    {
        id: 68,
        area: "Costos y Finanzas",
        pregunta: "¿Qué mide la razón de 'Endeudamiento a Capital Contable' (Debt-to-Equity)?",
        opciones: [
            "A) La velocidad de cobranza a clientes morosos.",
            "B) El margen de utilidad neta sobre las ventas totales.",
            "C) El porcentaje de inventarios obsoletos en almacén.",
            "D) La proporción de financiamiento aportado por los acreedores (deuda) en relación con el aportado por los accionistas (capital contable)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Compara el pasivo total con el patrimonio neto, indicando el grado de apalancamiento financiero y riesgo de la estructura de capital."
    },
    {
        id: 69,
        area: "Información Financiera",
        pregunta: "¿Qué establece el postulado de 'Dualidad Económica' en la contabilidad financiera?",
        opciones: [
            "A) Que la estructura financiera de una entidad se compone de los recursos de los que dispone para la consecución de sus fines y de las fuentes para dichos recursos, representados por los activos y pasivos/capital.",
            "B) Que toda operación debe registrarse doble vez en monedas extranjeras.",
            "C) Que las sucursales deben llevar contabilidad separada de la matriz.",
            "D) Que los ingresos deben reconocerse antes que los costos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La dualidad económica postula que los recursos (activos) provienen de fuentes internas y externas (pasivos y capital), base de la partida doble."
    },
    {
        id: 70,
        area: "Auditoría",
        pregunta: "¿Cuál es el objetivo de realizar una 'Confirmación de Saldos con Clientes' durante la auditoría de cuentas por cobrar?",
        opciones: [
            "A) Evaluar el desempeño comercial de los vendedores.",
            "B) Obtener evidencia directa y por escrito de la existencia y exactitud de los saldos por cobrar a una fecha determinada.",
            "C) Calcular el costo de ventas del ejercicio.",
            "D) Determinar el pago provisional de ISR de los clientes."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La confirmación externa con clientes valida directamente la existencia, veracidad y exigibilidad de los derechos de cobro."
    },
    {
        id: 71,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del ISR, ¿qué tratamiento se le da a las pérdidas fiscales sufridas en un ejercicio por una persona moral?",
        opciones: [
            "A) Se pierden de inmediato sin derecho a recuperación.",
            "B) Se deducen de los ingresos personales de los accionistas.",
            "C) Pueden amortizarse de la utilidad fiscal de los siguientes 10 ejercicios hasta agotarse.",
            "D) Se convierten en saldo a favor de IVA devoluble."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las pérdidas fiscales se actualizan y pueden disminuirse de la utilidad fiscal de los diez ejercicios siguientes hasta su total extinción."
    },
    {
        id: 72,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera, ¿qué representa el Costo de Capital Promedio Ponderado (CCPP o WACC)?",
        opciones: [
            "A) La tasa de inflación interbancaria fijada por el banco central.",
            "B) El rendimiento mínimo que exige la administración sobre las ventas netas.",
            "C) La tasa de interés de los préstamos bancarios a corto plazo sin considerar capital social.",
            "D) La tasa de rendimiento global que una empresa debe ganar sobre sus inversiones para mantener el valor de su capital y satisfacer a sus fuentes de financiamiento."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El WACC pondera el costo porcentual de las fuentes de financiación (deuda y capital contable), sirviendo de tasa de descuento base."
    },
    {
        id: 73,
        area: "Información Financiera",
        pregunta: "¿Cómo se define el 'Capital Contable' en una entidad lucrativa según el marco conceptual de las NIF?",
        opciones: [
            "A) El valor residual de los activos de la entidad, una vez deducidos todos sus pasivos.",
            "B) El total de efectivo disponible en cuentas bancarias.",
            "C) La suma exclusiva de las acciones preferentes emitidas.",
            "D) El valor de mercado de las acciones cotizadas en bolsa."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El capital contable representa el patrimonio neto de los propietarios, equivalente al activo menos el pasivo."
    },
    {
        id: 74,
        area: "Auditoría",
        pregunta: "En una auditoría, ¿qué es el 'Riesgo de Detección'?",
        opciones: [
            "A) El riesgo de que el control interno no detecte errores materiales.",
            "B) El riesgo de que los procedimientos aplicados por el auditor no detecten una incorrección material que exista en una afirmación.",
            "C) El riesgo de fluctuación de precios de materias primas.",
            "D) El riesgo de quiebra técnica de la empresa auditada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Es el riesgo de que las pruebas del auditor no logren descubrir errores materiales existentes en los estados financieros."
    },
    {
        id: 75,
        area: "Fiscal",
        pregunta: "¿Cuál es el requisito indispensable en el CFF para que las compensaciones de saldos a favor de contribuciones sean procedentes?",
        opciones: [
            "A) Que se trate exclusivamente de impuestos locales sobre nóminas.",
            "B) Que se realicen de manera verbal ante las oficinas del SAT.",
            "C) Que deriven de la misma contribución y cumplan con los avisos y reglas de procedencia establecidos en el Código Fiscal de la Federación.",
            "D) Que no excedan de diez pesos en el ejercicio."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las compensaciones deben cumplir con los requisitos formales de procedencia y tributar bajo los lineamientos vigentes del CFF y reglas de carácter general."
    },
    {
        id: 76,
        area: "Costos y Finanzas",
        pregunta: "¿Qué mide la razón financiera de 'Margen de Utilidad Neta'?",
        opciones: [
            "A) La velocidad con la que se cobran las facturas a clientes.",
            "B) El porcentaje de activos financiados mediante deuda bancaria.",
            "C) La proporción de inventarios obsoletos al cierre del ejercicio.",
            "D) El porcentaje de las ventas totales que se convierte en utilidad neta disponible tras deducir todos los costos, gastos e impuestos."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Mide la rentabilidad final de las operaciones de la empresa en relación con sus ingresos netos por ventas."
    },
    {
        id: 77,
        area: "Información Financiera",
        pregunta: "¿Qué establecen las NIF respecto a la compensación de saldos de activos y pasivos, o de ingresos y gastos en los estados financieros?",
        opciones: [
            "A) Está prohibida la compensación, salvo que una NIF lo permita o requiera expresamente, para presentar la información neta cuando refleje la sustancia de la transacción.",
            "B) Es obligatoria en todas las cuentas de balance para reducir el total del activo.",
            "C) Se permite libremente según el criterio personal del contador general.",
            "D) Solo aplica para cuentas de orden."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Por regla general, no deben compensarse activos con pasivos ni ingresos con gastos, a menos que una norma específica lo autorice."
    },
    {
        id: 78,
        area: "Auditoría",
        pregunta: "¿Qué es una 'Deficiencia Significativa de Control Interno'?",
        opciones: [
            "A) Un error aritmético menor en la nómina semanal.",
            "B) Una deficiencia o combinación de deficiencias en el control interno que, a juicio del auditor, tiene la importancia suficiente para merecer la atención de los responsables del gobierno corporativo.",
            "C) La renuncia voluntaria del auditor independiente.",
            "D) La falta de papelería en las oficinas administrativas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Es una deficiencia de control que amerita ser reportada formalmente a los altos mandos y al comité de auditoría por su relevancia."
    },
    {
        id: 79,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del ISR, ¿cómo se denominan los pagos que deben efectuar las personas morales mes con mes a cuenta del impuesto anual?",
        opciones: [
            "A) Pagos definitivos bimestrales.",
            "B) Retenciones por salarios mínimos.",
            "C) Pagos provisionales mensuales.",
            "D) Contribuciones extraordinarias de mejora."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las personas morales están obligadas a enterar pagos provisionales mensuales a cuenta del impuesto sobre la renta del ejercicio fiscal."
    },
    {
        id: 80,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera, ¿qué representa el 'Apalancamiento Financiero'?",
        opciones: [
            "A) El uso de costos operativos fijos para amplificar utilidades.",
            "B) La reducción del ciclo de conversión de efectivo mediante descuentos por pronto pago.",
            "C) La conversión de inventarios en cuentas por cobrar.",
            "D) El uso de financiamiento externo mediante deuda con costo fijo para incrementar el potencial de rendimiento del capital contable de los accionistas."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El apalancamiento financiero amplifica la rentabilidad y el riesgo de los accionistas mediante el empleo de pasivos con costo fijo."
    },
    {
        id: 81,
        area: "Información Financiera",
        pregunta: "De acuerdo con las NIF, ¿cómo deben presentarse los efectos de un cambio contable en los estados financieros?",
        opciones: [
            "A) Aplicándose de forma retrospectiva en los estados financieros básicos de periodos anteriores que se presenten comparativos.",
            "B) Omitiendo cualquier revelación en notas.",
            "C) Registrándose únicamente en cuentas de orden fiscales.",
            "D) Cargándose de forma directa al capital social aportado sin pasar por resultados."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los cambios contables se reconocen de manera retrospectiva para asegurar la comparabilidad de la información financiera en periodos comparativos."
    },
    {
        id: 82,
        area: "Auditoría",
        pregunta: "En la ejecución de una auditoría de estados financieros, ¿cuál es el propósito de realizar una prueba de corte (cut-off) en las ventas y compras de fin de ejercicio?",
        opciones: [
            "A) Calcular la depreciación anual del activo fijo.",
            "B) Asegurar que las transacciones realizadas cerca del cierre del periodo se registren en el ejercicio contable que les corresponde conforme al principio de devengación.",
            "C) Determinar el pago provisional de ISR del mes siguiente.",
            "D) Modificar los estatutos constitutivos de la sociedad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las pruebas de corte verifican que las operaciones de ingresos y egresos estén contabilizadas en el periodo exacto de su realización."
    },
    {
        id: 83,
        area: "Fiscal",
        pregunta: "De conformidad con la Ley del ISR, ¿qué tratamiento fiscal se otorga a los anticipos entregados a socios o integrantes de sociedades civiles y cooperativas?",
        opciones: [
            "A) Son deducibles como sueldos y salarios y se les deben efectuar las retenciones de impuesto correspondientes.",
            "B) Se consideran dividendos exentos de retención.",
            "C) No son deducibles bajo ninguna circunstancia legal.",
            "D) Se acumulan como ingresos por enajenación de bienes raíces."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los anticipos a socios se asimilan a salarios para efectos fiscales, siendo deducibles para la persona moral previa retención del ISR."
    },
    {
        id: 84,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera, ¿qué mide la razón de 'Rotación de Activo Total'?",
        opciones: [
            "A) La proporción de deuda bancaria a corto plazo frente al capital contable.",
            "B) El porcentaje de utilidad neta retenida en la empresa.",
            "C) La eficiencia con la que la empresa utiliza sus activos totales para generar ingresos por ventas (Ventas netas / Activos Totales).",
            "D) La liquidez disponible para cubrir pasivos inmediatos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Mide qué tan productivos son los recursos totales invertidos en la generación de ingresos comerciales."
    },
    {
        id: 85,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF C-15 (Deterioro en el valor de los activos de larga duración), ¿cuándo debe reconocerse una pérdida por deterioro?",
        opciones: [
            "A) Únicamente cuando el activo se vende a un tercero.",
            "B) Cuando el valor en libros de un activo excede a su valor de recuperación (el mayor entre su valor razonable menos costos de disposición y su valor de uso).",
            "C) Al cumplirse el primer año de su adquisición fiscal.",
            "D) Cuando la tasa de inflación anual supera el 5%."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El deterioro se reconoce si el valor contable supera el monto que la empresa espera recuperar por su uso o venta."
    },
    {
        id: 86,
        area: "Auditoría",
        pregunta: "En los papeles de trabajo de auditoría, ¿cómo se denominan las cédulas donde se resumen los saldos de cuentas afines que conforman un rubro general de los estados financieros?",
        opciones: [
            "A) Cédulas analíticas de detalle.",
            "B) Cédulas sumarias (o de resumen).",
            "C) Cédulas de control interno operativo.",
            "D) Cédulas de marcas de auditoría sueltas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las cédulas sumarias agrupan los saldos globales de cuentas analíticas para facilitar la visión de conjunto del auditor."
    },
    {
        id: 87,
        area: "Fiscal",
        pregunta: "En el procedimiento de fiscalización, ¿cuál es la consecuencia jurídica si un contribuyente no atiende una 'Revisión de Gabinete' o auditoría de escritorio en los plazos legales del CFF?",
        opciones: [
            "A) Se suspende temporalmente la obligación de llevar contabilidad.",
            "B) La autoridad fiscal presume ciertos hechos y puede determinar presuntivamente la utilidad fiscal o el impuesto omitido.",
            "C) Se condonan en automático todas las multas anteriores.",
            "D) Se cancela el registro federal de contribuyentes sin responsabilidad."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La omisión en la entrega de documentación ante requerimientos formales faculta a la autoridad para determinar contribuciones en base a presunciones legales."
    },
    {
        id: 88,
        area: "Costos y Finanzas",
        pregunta: "¿Qué representa el concepto de 'Apalancamiento Financiero' en la estructura de capital de una empresa?",
        opciones: [
            "A) El uso de financiamiento externo mediante deuda con costo fijo para incrementar el potencial de rendimiento del capital contable.",
            "B) La reducción de costos fijos de manufactura mediante automatización robótica.",
            "C) La conversión de inventarios obsoletos en efectivo líquido.",
            "D) El incremento de las comisiones del equipo de ventas."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El apalancamiento financiero amplifica la rentabilidad y el riesgo para los accionistas al incorporar deuda con costo fijo."
    },
    {
        id: 89,
        area: "Información Financiera",
        pregunta: "De acuerdo con las NIF, ¿cómo deben registrarse contablemente las operaciones celebradas en moneda extranjera en la fecha de su reconocimiento inicial?",
        opciones: [
            "A) Al tipo de cambio histórico del año anterior.",
            "B) Al tipo de cambio de cierre del ejercicio fiscal.",
            "C) Al tipo de cambio histórico vigente en la fecha de la operación (tipo de cambio de fecha de transacción).",
            "D) Al tipo de cambio promedio ponderado del mes."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El reconocimiento inicial de transacciones en moneda extranjera se realiza aplicando el tipo de cambio histórico de la fecha de la operación."
    },
    {
        id: 90,
        area: "Auditoría",
        pregunta: "En la evaluación del control interno, ¿qué se entiende por 'Segregación de Funciones'?",
        opciones: [
            "A) Asignar todas las tareas contables a un solo empleado de confianza.",
            "B) Separar las responsabilidades de autorización, custodia de activos, registro contable y ejecución de operaciones para prevenir errores y fraudes.",
            "C) Rotar al personal operativo cada fin de semana.",
            "D) Contratar auditores externos sin experiencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La segregación de funciones evita que una sola persona controle todas las fases críticas de una transacción, reduciendo riesgos de fraude."
    },
    {
        id: 91,
        area: "Fiscal",
        pregunta: "De conformidad con la Ley del IVA, ¿cuál es el tratamiento aplicable a la importación de bienes tangibles a territorio nacional?",
        opciones: [
            "A) Está exenta de pago en aduanas.",
            "B) Se encuentra gravada y el impuesto se calcula aplicando la tasa general sobre el valor que se tenga para los efectos del impuesto general de importación más dicho gravamen y contribuciones aduanales.",
            "C) Se paga mediante declaraciones anuales extemporáneas.",
            "D) Causa tasa 0% de manera universal."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La importación de bienes grava IVA conforme al valor en aduana más aranceles y derechos pagados en la aduana de entrada."
    },
    {
        id: 92,
        area: "Costos y Finanzas",
        pregunta: "En la evaluación de proyectos, ¿qué caracteriza al método de 'Periodo de Recuperación de la Inversión' (Payback)?",
        opciones: [
            "A) Mide el tiempo exacto que tardan los flujos de efectivo netos proyectados en recuperar el desembolso inicial de la inversión.",
            "B) Actualiza todos los flujos futuros a valor presente descontado.",
            "C) Calcula la rentabilidad ajustada por inflación a perpetuidad.",
            "D) Ignora los flujos de efectivo acumulados."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El payback determina el lapso temporal necesario para que la empresa recupere el capital inicial invertido mediante los flujos operativos."
    },
    {
        id: 93,
        area: "Información Financiera",
        pregunta: "Según la normatividad contable mexicana, ¿qué representan los 'Gastos de Investigación y Desarrollo' en su fase de investigación?",
        opciones: [
            "A) Deben capitalizarse de inmediato como activo intangible amortizable.",
            "B) Deben reconocerse como gastos en los resultados del periodo en el que se incurren, al no poder demostrarse la existencia de un activo intangible que genere beneficios futuros.",
            "C) Se registran como parte del capital social.",
            "D) Se difieren por un plazo de diez años fiscales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La fase de investigación no garantiza beneficios económicos futuros, por lo que contablemente debe llevarse a resultados del ejercicio."
    },
    {
        id: 94,
        area: "Auditoría",
        pregunta: "En una auditoría de estados financieros, ¿qué procedimiento debe aplicar el auditor ante la identificación de indicios de incumplimiento de leyes y regulaciones (non-compliance)?",
        opciones: [
            "A) Omitir el hallazgo para proteger a la gerencia.",
            "B) Comprender la naturaleza del acto, las circunstancias en las que se ha producido y obtener información adicional para evaluar su efecto en los estados financieros.",
            "C) Denunciar penalmente de inmediato sin consultar con el consejo.",
            "D) Modificar únicamente el dictamen fiscal."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Ante posibles incumplimientos legales, el auditor debe indagar y recabar evidencia para valorar el impacto financiero y normativo."
    },
    {
        id: 95,
        area: "Fiscal",
        pregunta: "En el régimen fiscal de personas morales, ¿cuál es el tratamiento de las donaciones otorgadas a instituciones autorizadas para recibir donativos deducibles?",
        opciones: [
            "A) Son deducibles para efectos de ISR hasta por el límite del 7% de la utilidad fiscal obtenida por el contribuyente en el ejercicio inmediato anterior.",
            "B) Son deducibles al 100% sin ningún límite cuantitativo.",
            "C) Se consideran ingresos acumulables castigados.",
            "D) No tienen ningún efecto ni beneficio fiscal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La LISR limita la deducción de donativos a instituciones autorizadas (donatarias) a un porcentaje máximo (generalmente 7%) de la utilidad fiscal previa."
    },
    {
        id: 96,
        area: "Costos y Finanzas",
        pregunta: "En un sistema de costeo basado en actividades (ABC - Activity-Based Costing), ¿cómo se asignan los costos indirectos a los productos?",
        opciones: [
            "A) Utilizando únicamente horas de mano de obra directa de manera global.",
            "B) Identificando las actividades que consumen los recursos y asignando los costos a los productos en función del uso que estos hacen de dichas actividades mediante generadores de costos (cost drivers).",
            "C) Prorrateando los costos fijos en partes iguales entre todos los artículos.",
            "D) Omitiendo los costos logísticos de almacén."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El costeo ABC rastrea los costos a través de las actividades requeridas para fabricar el producto, utilizando inductores de costo específicos."
    },
    {
        id: 97,
        area: "Información Financiera",
        pregunta: "De acuerdo con las NIF, ¿cómo debe presentarse el 'Resultado Integral de Financiamiento' (RIF) en el Estado de Resultados Integral?",
        opciones: [
            "A) Mezclado dentro de los gastos de administración generales.",
            "B) Presentado en un rubro por separado dentro del resultado de operación, integrando partidas como gastos por intereses, productos financieros y fluctuaciones cambiarias.",
            "C) Excluido de los informes financieros básicos.",
            "D) Registrado directamente en las cuentas de capital contable."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El RIF agrupa ingresos y gastos financieros netos (intereses, cambios, inflación en su caso), presentándose de forma separada antes de la utilidad antes de impuestos."
    },
    {
        id: 98,
        area: "Auditoría",
        pregunta: "Durante la revisión de los estados financieros, ¿cuál es la responsabilidad principal del auditor respecto a la prevención y detección de fraudes?",
        opciones: [
            "A) La responsabilidad principal recae en los encargados del gobierno corporativo y en la administración de la entidad; el auditor debe obtener seguridad razonable de que los estados financieros están libres de errores materiales debidos a fraude o error.",
            "B) El auditor es penal y civilmente responsable si ocurre un fraude corporativo en la empresa.",
            "C) El auditor no tiene ninguna obligación de revisar fraudes.",
            "D) Sustituir las funciones de la policía fiscal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prevención y detección del fraude corresponde a la administración y gobierno corporativo; el auditor dictamina con base en una seguridad razonable."
    },
    {
        id: 99,
        area: "Fiscal",
        pregunta: "En materia del Código Fiscal de la Federación, ¿cuándo se considera que una notificación realizada por buzón tributario surte efectos legales?",
        opciones: [
            "A) El mismo día en que el documento se deposite en el sistema informático.",
            "B) El día hábil siguiente a aquel en que el contribuyente abra el documento digital en el sistema de comunicación electrónica.",
            "C) A los treinta días naturales posteriores al envío.",
            "D) Únicamente cuando el contribuyente firme con su huella digital."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El CFF estipula que las notificaciones electrónicas por buzón tributario surten efectos al día hábil siguiente en que el usuario acceda y abra el archivo digital."
    },
    {
        id: 100,
        area: "Costos y Finanzas",
        pregunta: "En la planeación financiera, ¿qué mide el ciclo de conversión de efectivo (Cash Conversion Cycle)?",
        opciones: [
            "A) El tiempo transcurrido (en días) desde que la empresa paga por la materia prima hasta que cobra el efectivo por la venta del producto terminado.",
            "B) La duración del contrato de crédito bancario a largo plazo.",
            "C) El periodo de depreciación fiscal de los edificios corporativos.",
            "D) El tiempo que tardan los socios en recibir dividendos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Mide el ciclo operativo y financiero neto, calculando cuántos días transcurren entre el pago a proveedores y la cobranza efectiva a clientes."
    },
    {
        id: 101,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF C-11 (Capital Contable), ¿cómo deben clasificarse las acciones preferentes emitidas por una entidad lucrativa?",
        opciones: [
            "A) Obligatoriamente como un pasivo circulante.",
            "B) Como parte del pasivo a largo plazo sin derecho a voto.",
            "C) Como parte del capital contable o como pasivo, dependiendo de la sustancia económica de sus cláusulas contractuales (derechos de redención obligatoria o dividendos fijos).",
            "D) Como cuentas de orden extrapresupuestales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Si las acciones preferentes obligan a la redención o pago de dividendos ineludibles, la sustancia económica exige clasificarlas como pasivo; de lo contrario, forman parte del capital."
    },
    {
        id: 102,
        area: "Auditoría",
        pregunta: "En una auditoría, ¿qué representa la obtención de 'Evidencia de Auditoría Suficiente y Adecuada'?",
        opciones: [
            "A) Suficiente se refiere a la cantidad (medida con base en el riesgo) y adecuada se refiere a la calidad (relevancia y fiabilidad) de la evidencia obtenida.",
            "B) Suficiente es el número de hojas impresas y adecuada es la firma del contador junior.",
            "C) Significa revisar el 100% de las transacciones de la empresa sin excepciones.",
            "D) Corresponde al dictamen emitido por el SAT."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La suficiencia mide la cantidad de pruebas necesarias y la adecuación evalúa la calidad (relevancia y confiabilidad) de dicha evidencia."
    },
    {
        id: 103,
        area: "Fiscal",
        pregunta: "De acuerdo con la LISR, ¿qué tratamiento fiscal se le da a la ganancia obtenida por una persona moral en la enajenación de acciones?",
        opciones: [
            "A) Está exenta de impuestos si se realiza en bolsa de valores concesionada bajo ciertos requisitos, o se acumula si se trata de operaciones ordinarias conforme a las reglas de costo fiscal de acciones.",
            "B) Se considera un ingreso exento en su totalidad sin excepciones.",
            "C) Se deduce contra los gastos de representación del director.",
            "D) Se paga mediante tasa fija del 35% sin deducción del costo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La enajenación de acciones por personas morales se calcula determinando la ganancia con base en el costo fiscal actualizado de las acciones, existiendo estímulos o exenciones si operan en bolsas de valores autorizadas."
    },
    {
        id: 104,
        area: "Costos y Finanzas",
        pregunta: "En la contabilidad gerencial, ¿qué caracteriza a un 'Costo Hundido' (Sunk Cost) al tomar decisiones financieras a corto plazo?",
        opciones: [
            "A) Es un costo futuro que se modificará según el nivel de producción elegido.",
            "B) Es un costo en el que ya se ha incurrido en el pasado, cuyo desembolso es irreecuperable y, por tanto, debe ignorarse en la toma de decisiones actuales.",
            "C) Es el costo marginal de la última unidad producida.",
            "D) Es un costo estimado presupuestado para el próximo ejercicio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los costos hundidos ya ocurrieron y no pueden modificarse por decisiones presentes o futuras, por lo que son irrelevantes para la toma de decisiones."
    },
    {
        id: 105,
        area: "Información Financiera",
        pregunta: "De acuerdo con las NIF, ¿cómo deben valuarse los instrumentos financieros negociables (o mantenidos para negociar) al cierre de cada periodo?",
        opciones: [
            "A) A su valor razonable, reconociendo los cambios de valor directamente en el resultado neto del periodo.",
            "B) Al costo histórico de adquisición original sin variaciones.",
            "C) Al valor nominal de emisión inicial.",
            "D) Al costo amortizado utilizando la tasa de interés efectiva."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los instrumentos financieros para negociar se valúan a valor razonable, afectando los resultados del periodo con sus fluctuaciones de mercado."
    },
    {
        id: 106,
        area: "Auditoría",
        pregunta: "En los trabajos de atestiguamiento y auditoría, ¿qué comprende el concepto de 'Revisiones Analíticas' (procedimientos analíticos)?",
        opciones: [
            "A) El conteo físico de mercancías en el almacén central.",
            "B) La evaluación de información financiera mediante el análisis de relaciones plausibles entre datos financieros y no financieros, incluyendo fluctuaciones e inconsistencias.",
            "C) La inspección ocular de las instalaciones de la planta productiva.",
            "D) La confirmación de saldos bancarios por escrito."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los procedimientos analíticos estudian correlaciones lógicas entre datos financieros y operativos para detectar desviaciones o anomalías."
    },
    {
        id: 107,
        area: "Fiscal",
        pregunta: "En el marco del Código Fiscal de la Federación, ¿qué requisito deben cumplir las personas morales para que sus pérdidas fiscales de ejercicios anteriores puedan disminuirse de la utilidad fiscal?",
        opciones: [
            "A) Haber sido manifestadas en la declaración anual correspondiente y estar debidamente actualizadas por inflación conforme a la ley.",
            "B) Haber sido aprobadas en asamblea de accionistas ante notario público exclusivamente.",
            "C) Compensarse contra el IVA acreditable del mes.",
            "D) Contar con autorización previa por escrito del Presidente de la República."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La amortización de pérdidas fiscales requiere haberlas reportado oportunamente en su declaración anual y aplicar la actualización inflacionaria procedente."
    },
    {
        id: 108,
        area: "Costos y Finanzas",
        pregunta: "En la presupuestación empresarial, ¿qué objetivo persigue la elaboración del 'Presupuesto de Caja' (Cash Budget)?",
        opciones: [
            "A) Determinar el valor de mercado de la maquinaria industrial.",
            "B) Planificar y controlar los flujos de entradas y salidas de efectivo para anticipar déficits de liquidez o excedentes temporales de inversión.",
            "C) Calcular el impuesto sobre la renta diferido del ejercicio.",
            "D) Evaluar el desempeño de los agentes de ventas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El presupuesto de caja proyecta la liquidez de la empresa mes a mes, permitiendo anticipar necesidades de financiamiento u optimizar excedentes."
    },
    {
        id: 109,
        area: "Información Financiera",
        pregunta: "Según la normatividad contable mexicana, ¿qué establece la regla general para la presentación de los pasivos a corto y largo plazo en el Estado de Situación Financiera?",
        opciones: [
            "A) Deben clasificarse basándose en su exigibilidad, separando los pasivos a corto plazo (vencimiento menor o igual a 12 meses o ciclo normal de operaciones) de los pasivos a largo plazo.",
            "B) Deben agruparse todos en un solo renglón sin distinguir plazos.",
            "C) Se presentan únicamente con base en el orden alfabético de los acreedores.",
            "D) Se registran de forma neta restándoles los activos circulantes."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La clasificación en corto y largo plazo atiende al vencimiento de las obligaciones en relación con el ciclo normal de operaciones o el plazo de 12 meses."
    },
    {
        id: 110,
        area: "Auditoría",
        pregunta: "En una auditoría de estados financieros, ¿cuál es el propósito de realizar una revisión de los 'Hechos Posteriores' (eventos subsecuentes)?",
        opciones: [
            "A) Identificar eventos ocurridos entre la fecha de los estados financieros y la fecha del dictamen del auditor que requieran ajustes o revelaciones en los estados financieros.",
            "B) Modificar los impuestos pagados en ejercicios ya prescritos.",
            "C) Evaluar el clima laboral de los empleados contratados el año anterior.",
            "D) Calcular los costos históricos de adquisición de terrenos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los hechos posteriores pueden impactar los saldos presentados al cierre o requerir notas aclaratorias antes de liberar el dictamen del auditor."
    },
    {
        id: 111,
        area: "Fiscal",
        pregunta: "De conformidad con la Ley del ISR, ¿cómo se determina el coeficiente de utilidad que las personas morales deben utilizar para calcular sus pagos provisionales mensuales?",
        opciones: [
            "A) Dividiendo la utilidad fiscal del ejercicio entre los ingresos nominales del mismo ejercicio por el cual se calculó la utilidad.",
            "B) Multiplicando el total de activos fijos por la tasa general del 30%.",
            "C) Sumando los ingresos acumulables y restando las deducciones personales de los socios.",
            "D) Aplicando un factor fijo del 50% para cualquier tipo de actividad comercial."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El coeficiente de utilidad se obtiene dividiendo la utilidad fiscal del ejercicio base entre los ingresos nominales de ese mismo periodo, conforme al artículo 14 de la LISR."
    },
    {
        id: 112,
        area: "Costos y Finanzas",
        pregunta: "En el análisis de decisiones bajo el modelo Costo-Volumen-Utilidad, ¿cómo se define el 'Margen de Seguridad'?",
        opciones: [
            "A) La diferencia entre las ventas esperadas (o actuales) y las ventas en el punto de equilibrio, indicando cuánto pueden caer las ventas antes de incurrir en pérdidas.",
            "B) El porcentaje de ganancia bruta sobre el costo de ventas.",
            "C) El saldo mínimo en cuentas bancarias para cubrir la nómina.",
            "D) El monto de pasivos respaldados con inventarios."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El margen de seguridad mide la distancia porcentual o absoluta entre las ventas reales y el punto de equilibrio, reflejando el colchón ante caídas de ventas."
    },
    {
        id: 113,
        area: "Información Financiera",
        pregunta: "Conforme a la NIF C-8 (Activos Intangibles), ¿cómo deben amortizarse los activos intangibles con vida útil definida?",
        opciones: [
            "A) No se amortizan nunca y se evalúan únicamente por revaluación de mercado.",
            "B) Se amortizan de forma sistemática durante su vida útil estimada mediante un método que refleje el patrón de consumo de los beneficios económicos esperados.",
            "C) Se amortizan de golpe en un solo ejercicio fiscal.",
            "D) Se cargan directamente al capital contable de los socios fundadores."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los intangibles de vida útil finita se amortizan de manera sistemática a lo largo del periodo en que la entidad espera recibir sus beneficios económicos."
    },
    {
        id: 114,
        area: "Auditoría",
        pregunta: "En la auditoría de inventarios, ¿qué procedimiento de auditoría se considera obligatorio (salvo imposibilidad práctica) para verificar la existencia física de las existencias al cierre del periodo?",
        opciones: [
            "A) La confirmación bancaria de saldos.",
            "B) La observación física del recuento de inventarios (toma física de inventarios).",
            "C) La revisión analítica de la nómina administrativa.",
            "D) La lectura de actas de asamblea de accionistas."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La presencia del auditor en la toma física de inventarios es un procedimiento de auditoría obligatorio para constatar la existencia real de las existencias."
    },
    {
        id: 115,
        area: "Fiscal",
        pregunta: "En materia de infracciones y delitos fiscales según el CFF, ¿cuándo se comete el delito de 'Contrabando'?",
        opciones: [
            "A) Cuando se omiten el pago de contribuciones locales sobre nómina por error aritmético.",
            "B) Cuando se introducen al país o se extraen de él mercancías omitiendo el pago parcial o total de los impuestos o sin permiso de autoridad competente cuando sea necesario.",
            "C) Cuando se emite un CFDI fuera del plazo de 24 horas.",
            "D) Cuando no se presenta la contabilidad electrónica en red."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El delito de contrabando consiste en introducir o extraer mercancías ilegalmente del territorio nacional eludiendo impuestos al comercio exterior o aduanas."
    },
    {
        id: 116,
        area: "Costos y Finanzas",
        pregunta: "En la contabilidad directiva, ¿qué caracteriza al sistema de 'Costeo Basado en Metas' (Target Costing)?",
        opciones: [
            "A) Determinar el costo máximo permitido para un producto restando la utilidad deseada de un precio de venta competitivo dictado por el mercado.",
            "B) Fijar el precio de venta sumando un margen arbitrario de ganancia al costo histórico de producción.",
            "C) Calcular los costos indirectos mediante prorrateo ciego.",
            "D) Omitir el estudio de la competencia comercial."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El costeo meta parte del precio que el mercado está dispuesto a pagar menos la ganancia deseada, obligando a diseñar y producir al costo resultante."
    },
    {
        id: 117,
        area: "Información Financiera",
        pregunta: "De acuerdo con las NIF, ¿cómo debe reconocerse el efecto de una corrección de errores de periodos contables anteriores en los estados financieros?",
        opciones: [
            "A) Ajustando los saldos iniciales de los rubros afectados en el capital contable del periodo más antiguo que se presente (reexpresión retroactiva).",
            "B) Incluyéndolo como un gasto extraordinario del mes en curso.",
            "C) Omitiéndolo si el impacto monetario es inferior al 1% de la utilidad.",
            "D) Registrándolo en cuentas de orden sin efecto patrimonial."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los errores contables de ejercicios pasados se corrigen de forma retroactiva ajustando los saldos iniciales en el estado de cambios en el capital contable."
    },
    {
        id: 118,
        area: "Auditoría",
        pregunta: "En una auditoría financiera, ¿cuál es el objetivo de examinar las 'Minutas o Actas de Asamblea de Accionistas y del Consejo de Administración'?",
        opciones: [
            "A) Conocer acuerdos corporativos importantes, tales como aprobación de estados financieros, decretos de dividendos, litigios, contratos relevantes o préstamos autorizados.",
            "B) Calcular la nómina del personal sindicalizado de la planta.",
            "C) Verificar el consumo mensual de energía eléctrica en oficinas.",
            "D) Comprobar el pago puntual de las cuotas obrero-patronales del IMSS."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La lectura de actas corporativas proporciona evidencia de decisiones gerenciales trascendentales que impactan directamente los estados financieros y obligaciones legales."
    },
    {
        id: 119,
        area: "Fiscal",
        pregunta: "De acuerdo con la Ley del ISR, ¿qué tratamiento fiscal se le da a los intereses devengados a favor de una persona moral?",
        opciones: [
            "A) Se consideran ingresos acumulables en el ejercicio en el que se devenguen.",
            "B) Están exentos de cualquier gravamen federal.",
            "C) Se acumulan únicamente cuando se perciben en efectivo en cuentas de cheques.",
            "D) Se deducen directamente contra el capital social."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Para las personas morales, los intereses a favor se acumulan conforme se devengan a lo largo del tiempo, con independencia de su cobro efectivo."
    },
    {
        id: 120,
        area: "Costos y Finanzas",
        pregunta: "En la administración financiera a largo plazo, ¿qué mide la razón financiera de 'Rendimiento sobre el Capital Contable' (ROE - Return on Equity)?",
        opciones: [
            "A) La eficiencia con la que la empresa genera utilidades netas a partir de la inversión aportada por los accionistas (Utilidad Neta / Capital Contable).",
            "B) La proporción de endeudamiento bancario frente a los activos totales.",
            "C) El porcentaje de inventarios vendidos al contado.",
            "D) La velocidad con la que se pagan los pasivos a corto plazo."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El ROE mide la rentabilidad que obtienen los propietarios sobre los recursos patrimoniales invertidos en la entidad empresarial."
    }
];