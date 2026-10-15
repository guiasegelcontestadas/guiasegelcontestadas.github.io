// Banco de Reactivos - EGEL Plus Derecho (Bloque 1: Preguntas 1 a 40)
const bancoPreguntas = [
    {
        id: 1,
        area: "Derecho Constitucional y Derechos Humanos",
        pregunta: "De conformidad con el artículo 133 de la Constitución Política de los Estados Unidos Mexicanos, ¿cuál es el orden jerárquico del marco jurídico mexicano (Principio de Supremacía Constitucional)?",
        opciones: [
            "A) Las leyes federales, los tratados internacionales y la Constitución",
            "B) Las constituciones estatales, las leyes ordinarias federales y los tratados",
            "C) La Constitución federal, las leyes del Congreso de la Unión que emanen de ella y los tratados internacionales celebrados por el Presidente de la República, aprobados por el Senado",
            "D) Los tratados internacionales de derechos humanos por encima de la Constitución federal sin excepciones"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 133 constitucional establece el principio de supremacía constitucional, ubicando a la Constitución, las leyes federales que de ella emanen y los tratados internacionales como la ley suprema de toda la Unión."
    },
    {
        id: 2,
        area: "Derecho Penal",
        pregunta: "En la teoría del delito, ¿cómo se diferencia conceptualmente el dolo eventual de la culpa consciente (con representación)?",
        opciones: [
            "A) En el dolo eventual el sujeto acepta o asume el resultado dañoso como probable y se resigna a él, mientras que en la culpa consciente el agente confía imprudentemente en que el resultado no se producirá",
            "B) En la culpa consciente el sujeto desea activamente la realización del delito, mientras que en el dolo eventual existe un error de prohibición invencible",
            "C) No existe diferencia dogmática, ambos términos son sinónimos legales en el Código Penal Federal",
            "D) El dolo eventual solo aplica para delitos culposos de tránsito terrestre"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La distinción radica en el elemento volitivo: en el dolo eventual el sujeto se conforma con el resultado ilícito predicho; en la culpa consciente (con representación), aunque prevé el riesgo, confía fundadamente en evitarlo."
    },
    {
        id: 3,
        area: "Derecho Civil (Obligaciones y Contratos)",
        pregunta: "En las obligaciones civiles, ¿qué se entiende jurídicamente por la figura de la 'Novación'?",
        opciones: [
            "A) La extinción de una obligación mediante la condonación total de la deuda por parte del acreedor",
            "B) El convenio expreso por el cual las partes interesadas alteran sustancialmente una obligación antigua sustituyéndola por una nueva",
            "C) La transmisión del crédito a un tercero ajeno a la relación jurídica original sin consentimiento del deudor",
            "D) El pago realizado por un tercero no interesado que se subroga en los derechos del acreedor"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La novación es un modo extintivo de las obligaciones en el cual una obligación previa se modifica o extingue mediante la creación de una obligación nueva que sustituye a la anterior."
    },
    {
        id: 4,
        area: "Derecho de Amparo",
        pregunta: "De acuerdo con la Ley de Amparo, ¿en qué consiste el principio de 'Instancia de Parte Agraviada'?",
        opciones: [
            "A) El juicio de amparo puede promoverse de oficio por los tribunales federales ante cualquier violación manifiesta",
            "B) Cualquier ciudadano puede demandar el amparo en defensa del orden público aunque no sufra afectación personal",
            "C) El juicio constitucional solo puede iniciarse a solicitud de la persona que aduzca ser titular de un derecho o de un interés legítimo, agraviada por el acto de autoridad",
            "D) Las autoridades responsables están legitimadas para interponer amparo en contra de sus propias resoluciones"
        ],
        respuestaCorrecta: 2, // C
    },
    {
        id: 4,
        area: "Derecho de Amparo",
        pregunta: "De acuerdo con la Ley de Amparo, ¿en qué consiste el principio de 'Instancia de Parte Agraviada'?",
        opciones: [
            "A) El juicio de amparo puede promoverse de oficio por los tribunales federales ante cualquier violación manifiesta",
            "B) Cualquier ciudadano puede demandar el amparo en defensa del orden público aunque no sufra afectación personal",
            "C) El juicio constitucional solo puede iniciarse a solicitud de la persona que aduzca ser titular de un derecho o de un interés legítimo, agraviada por el acto de autoridad",
            "D) Las autoridades responsables están legitimadas para interponer amparo en contra de sus propias resoluciones"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El principio de instancia de parte agraviada (Art. 107 constitucional y 4 de la Ley de Amparo) señala que el juicio constitucional no opera de oficio, requiriendo siempre la petición del agraviado."
    },
    {
        id: 5,
        area: "Derecho Mercantil",
        pregunta: "¿Cuáles son los elementos formales esenciales que debe contener un Pagaré conforme a la Ley General de Títulos y Operaciones de Crédito (LGTOC)?",
        opciones: [
            "A) Nombre del beneficiario, orden incondicional de pagar una suma de dinero, lugar y fecha de emisión, firma del suscriptor",
            "B) La mención de ser letra de cambio, el nombre del girado y la aceptación de este",
            "C) El aval bancario obligatorio y el registro ante la Comisión Nacional Bancaria y de Valores",
            "D) La transmisión por endoso en propiedad forzoso en los primeros 3 días"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 170 de la LGTOC detalla los requisitos del pagaré: la mención de ser pagaré, la promesa incondicional de pago, nombre del beneficiario, fecha y lugar de suscripción, y firma."
    },
    {
        id: 6,
        area: "Derecho Laboral",
        pregunta: "De acuerdo con la Ley Federal del Trabajo (LFT), ¿cuál de las siguientes causales constituye una causa de rescisión de la relación de trabajo sin responsabilidad para el patrón?",
        opciones: [
            "A) La solicitud del trabajador de un aumento salarial superior a la inflación anual",
            "B) Incurrir el trabajador en faltas de probidad u honradez, o en actos de violencia contra el patrón, sus familiares o compañeros de trabajo",
            "C) La renuncia voluntaria presentada por escrito con 48 horas de anticipación",
            "D) La negativa del trabajador a realizar horas extra obligatorias no pactadas contractualmente"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 47 de la LFT enumera las causales de rescisión laboral sin responsabilidad patronal, destacando las faltas de probidad, honradez y actos de violencia dentro del centro de labores."
    },
    {
        id: 7,
        area: "Derecho Administrativo",
        pregunta: "Conforme a la Ley Federal de Procedimiento Administrativo, ¿cuál es una de las causas de nulidad de un acto administrativo?",
        opciones: [
            "A) Estar emitido por autoridad competente en ejercicio de sus funciones",
            "B) Contar con fundamentación y motivación adecuada en su cuerpo documental",
            "C) Ser emitido omitiendo los requisitos formales exigidos por las leyes, afectando las defensas del particular y trascendiendo al sentido del acto",
            "D) Haber sido publicado en el Diario Oficial de la Federación en tiempo y forma"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los vicios en los elementos de validez del acto administrativo (como la ausencia de requisitos formales esenciales que causen indefensión) producen su anulabilidad o nulidad de pleno derecho."
    },
    {
        id: 8,
        area: "Derecho Procesal Civil",
        pregunta: "En un juicio ordinario civil, ¿sobre qué partes recae fundamentalmente la carga de la prueba respecto a los hechos constitutivos de sus pretensiones?",
        opciones: [
            "A) Únicamente sobre el juez de la causa mediante investigaciones de oficio",
            "B) Sobre el actor los hechos constitutivos de su acción y sobre el reo los de sus excepciones y defensas",
            "C) Exclusivamente sobre el demandado, presumiéndose siempre culpable al actor",
            "D) Sobre el Ministerio Público en representación de la sociedad civil"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El principio dispositivo y procesal general dicta que el actor debe probar los hechos constitutivos de su acción y el demandado los de sus excepciones (actor probat actionem, reus probat exceptionem)."
    },
    {
        id: 9,
        area: "Derecho Procesal Penal (Sistema Acusatorio)",
        pregunta: "En el sistema penal acusatorio y oral mexicano, ¿cuál es el plazo constitucional máximo que tiene el juez de control para resolver la situación jurídica del imputado (vinculación a proceso), contado a partir de que este es puesto a su disposición?",
        opciones: [
            "A) 24 horas improrrogables",
            "B) 48 horas o hasta 144 horas si el imputado solicita la duplicidad del plazo constitucional",
            "C) 30 días naturales",
            "D) 72 horas fijas sin derecho a duplicidad"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 19 constitucional establece que el plazo inicial es de 72 horas (que en la práctica procesal se contabilizan desde la puesta a disposición o el inicio de la audiencia), el cual puede duplicarse a 144 horas a petición de la defensa."
    },
    {
        id: 10,
        area: "Derecho Constitucional",
        pregunta: "De acuerdo con el artículo 29 de la Constitución mexicana, ¿qué autoridad es la única facultada para suspender o restringir los derechos humanos y sus garantías en casos de invasión, perturbación grave de la paz pública o cualquier otro que ponga a la sociedad en grave peligro o conflicto?",
        opciones: [
            "A) El Presidente de los Estados Unidos Mexicanos, con la aprobación del Congreso de la Unión o de la Comisión Permanente",
            "B) La Suprema Corte de Justicia de la Nación en pleno por unanimidad",
            "C) Los Gobernadores de los Estados en sus respectivas entidades federativas",
            "D) El Fiscal General de la República mediante acuerdo ministerial"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 29 constitucional faculta al Presidente de la República, con la aprobación del Congreso o la Comisión Permanente, para restringir o suspender derechos bajo condiciones excepcionales estrictas."
    },
    {
        id: 11,
        area: "Derecho Internacional Público",
        pregunta: "Conforme a la Convención de Viena sobre el Derecho de los Tratados, ¿cómo se define jurídicamente la figura de la 'Reserva' en un tratado internacional?",
        opciones: [
            "A) La cancelación definitiva del tratado por incumplimiento de uno de los estados parte",
            "B) Una declaración unilateral, cualquiera que sea su enunciado o denominación, hecha por un Estado al firmar, ratificar, aceptar o aprobar un tratado, con el objeto de excluir o modificar los efectos jurídicos de ciertas disposiciones del tratado en su aplicación a ese Estado",
            "C) El texto secreto complementario que no requiere ratificación legislativa",
            "D) La prórroga automática del plazo de vigencia del instrumento internacional"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La reserva es una declaración unilateral formulada por un Estado al adherirse a un tratado para excluir o modificar el alcance jurídico de determinadas cláusulas en su aplicación específica."
    },
    {
        id: 12,
        area: "Derecho Civil (Bienes y Derechos Reales)",
        pregunta: "¿Qué diferencia jurídica existe entre la posesión originaria y la posesión derivada en materia civil?",
        opciones: [
            "A) La posesión originaria la detenta quien posee a título de propietario, mientras que la derivada se tiene en virtud de un contrato o título que otorga derecho a poseer temporalmente sin ser dueño (como el arrendatario)",
            "B) La posesión derivada es exclusiva de bienes inmuebles y la originaria de bienes muebles",
            "C) La posesión derivada genera prescripción positiva automática en 1 año",
            "D) No existe distinción legal en el Código Civil"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El poseedor originario posee con animus domini (dueño); el poseedor derivado reconoce un dominio ajeno (arrendatario, comodatario, usufructuario) derivado de una relación jurídica temporal."
    },
    {
        id: 13,
        area: "Derecho Penal",
        pregunta: "¿Cuáles son los elementos que integran el cuerpo del delito en la dogmática penal mexicana general?",
        opciones: [
            "A) La intención de lucro y la minoría de edad del sujeto activo",
            "B) El conjunto de elementos objetivos o externos que constituyen la materialidad del hecho tipificado como delito en la ley, así como los normativos o subjetivos exigidos",
            "C) La confesión ministerial rendida ante presencia de defensor público",
            "D) El pago previo de la reparación del daño antes de consignar la carpeta"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El cuerpo del delito se integra por la demostración material de la existencia de un hecho señalado como delito por la ley penal, abarcando elementos objetivos, normativos y subjetivos específicos."
    },
    {
        id: 14,
        area: "Derecho Mercantil",
        pregunta: "¿Qué efectos jurídicos produce la declaración judicial de concurso mercantil de una empresa deudora?",
        opciones: [
            "A) La disolución inmediata de la sociedad y el reparto de acciones entre los acreedores",
            "B) La suspensión del procedimiento de ejecución contra los bienes del comerciante y la prohibición de realizar pagos o actos de dominio fuera de las excepciones legales",
            "C) La condonación automática del 80% de la deuda quirografaria",
            "D) La fusión obligatoria con una paraestatal federal"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La sentencia de concurso mercantil suspende los apremios de ejecución y embargos singulares, protegiendo el patrimonio para lograr un convenio de reestructuración o liquidación ordenada."
    },
    {
        id: 15,
        area: "Derecho Fiscal",
        pregunta: "De acuerdo con el Código Fiscal de la Federación (CFF), ¿cuánto tiempo transcurre para que opere la figura de la caducidad de las facultades de las autoridades fiscales para comprobar el cumplimiento de obligaciones y determinar contribuciones omitidas?",
        opciones: [
            "A) 1 año natural improrrogable",
            "B) 3 años contados a partir del día siguiente al en que se presentó la declaración",
            "C) 5 años en lo general (pudiendo ampliarse a 10 si no se presentó contabilidad o declaración obligatoria)",
            "D) 20 años sin excepciones"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 67 del CFF señala que las facultades de comprobación y determinación de contribuciones caducan en 5 años (o 10 años si el contribuyente no está inscrito en el RFC o no llevó contabilidad)."
    },
    {
        id: 16,
        area: "Derecho Constitucional (Amparo)",
        pregunta: "¿Qué es el 'Interés Legítimo' como requisito de procedencia para el juicio de amparo (artículo 107, fracción I constitucional)?",
        opciones: [
            "A) La afectación directa a un derecho subjetivo tutelado por la ley",
            "B) Un interés cualificado, actual, real y jurídicamente relevante que se traduce en una afectación diferenciada al resto de la sociedad derivada de la posición especial del quejoso frente al ordenamiento jurídico",
            "C) El simple interés genérico de cualquier ciudadano en que se cumpla la legalidad",
            "D) La titularidad exclusiva de un derecho real sobre bienes inmuebles"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El interés legítimo presupone una afectación cualificada y diferenciada a la esfera jurídica del quejoso, derivada de su especial situación frente a un acto de autoridad, sin requerir la titularidad de un derecho subjetivo estricto."
    },
    {
        id: 17,
        area: "Derecho Procesal Civil",
        pregunta: "¿En qué consiste la figura jurídica de la 'Litisconsorcio'?",
        opciones: [
            "A) La acumulación obligatoria de dos juicios de materias distintas ante un tribunal unitario",
            "B) La pluralidad de partes que actúan conjuntamente en un mismo proceso, ya sea como actores (activo), como demandados (pasivo) o en ambas posiciones (mixto)",
            "C) El recurso de apelación interpuesto contra una sentencia interlocutoria",
            "D) La contradicción de tesis sustentada entre dos tribunales colegiados de circuito"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El litisconsorcio se presenta cuando en un proceso intervienen varias personas como parte actora o demandada, cuyos intereses guardan una relación común o conexa."
    },
    {
        id: 18,
        area: "Derecho Laboral",
        pregunta: "Conforme a la Ley Federal del Trabajo, ¿cuál es el porcentaje máximo legal permitido para realizar descuentos o deducciones al salario de los trabajadores por concepto de deudas contraídas con el patrón?",
        opciones: [
            "A) Hasta el 30% del excedente del salario mínimo",
            "B) Hasta el 100% del salario en la última quincena laborada",
            "C) El 50% del salario total sin importar el monto",
            "D) Está prohibido cualquier tipo de descuento salarial por créditos patronales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 110 de la LFT prohíbe los descuentos al salario salvo excepciones específicas (pensiones alimenticias, deudas por anticipos salariales limitadas al 30% del excedente del salario mínimo, etc.)."
    },
    {
        id: 19,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es la 'Concesión Administrativa' en la teoría del derecho administrativo mexicano?",
        opciones: [
            "A) Un contrato de compraventa mercantil de bienes inmuebles del dominio público",
            "B) El acto administrativo unilateral mediante el cual el Estado confiere a un particular la explotación o uso de bienes del dominio público o la prestación de un servicio público",
            "C) La expropiación por causa de utilidad pública de propiedad privada",
            "D) La sanción pecuniaria impuesta por una infracción de tránsito"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La concesión es el acto jurídico por el cual el Estado otorga a un particular facultades para explotar un servicio o bien público que originariamente corresponde a la federación, estado o municipio."
    },
    {
        id: 20,
        area: "Derecho Civil (Familia)",
        pregunta: "¿Cuál es la naturaleza jurídica y efectos del 'Patrimonio de Familia' en el derecho civil mexicano?",
        opciones: [
            "A) Es un conjunto de bienes afectos a proteger económicamente el hogar y la subsistencia de la familia, los cuales son inalienables, imprescriptibles y no embargables",
            "B) Es una sociedad mercantil constituida exclusivamente por parientes consanguíneos",
            "C) Es el inventario fiscal de bienes gravados con impuestos sucesorios",
            "D) Es un contrato de arrendamiento habitacional con opción a compra"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El patrimonio de familia busca proteger el techo y sustento familiar mediante la afectación de bienes raíces o muebles que se declaran inalienables e inembargables conforme a la ley."
    },
    {
        id: 21,
        area: "Derecho Penal",
        pregunta: "¿Qué establece el principio de 'Non Bis In Idem' consagrado en el artículo 23 de la Constitución mexicana?",
        opciones: [
            "A) Nadie puede ser juzgado dos veces por el mismo delito, ya sea que se le resuelva en sentencia absolutoria o condenatoria",
            "B) Toda persona tiene derecho a un juicio público sin demoras injustificadas",
            "C) Ninguna ley puede aplicarse retroactivamente en perjuicio de persona alguna",
            "D) Las penas deben ser proporcionales al delito sancionado"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio non bis in idem prohíbe someter a una persona a un doble juzgamiento o persecución penal por los mismos hechos constitutivos de delito cuando ya ha recaído sentencia firme."
    },
    {
        id: 22,
        area: "Derecho Mercantil",
        pregunta: "¿Qué caracteriza a una Sociedad Anónima (S.A.) en comparación con una Sociedad de Responsabilidad Limitada (S. de R.L.)?",
        opciones: [
            "A) En la S.A. las obligaciones sociales están garantizadas por un capital social representado en acciones y la responsabilidad de los socios se limita al pago de sus acciones",
            "B) En la S.A. los socios responden de manera subsidiaria, ilimitada y solidaria con todo su patrimonio personal",
            "C) La S.A. no requiere un capital social mínimo y está prohibida para el comercio exterior",
            "D) La S. de R.L. emite títulos de crédito denominados acciones bursátiles"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Sociedad Anónima se caracteriza por tener su capital dividido en acciones, limitando la responsabilidad de los accionistas al monto de sus aportaciones accionarias."
    },
    {
        id: 23,
        area: "Derecho Procesal Civil",
        pregunta: "¿Qué es la 'Caducidad de la Instancia' en el proceso civil?",
        opciones: [
            "A) La pérdida de todos los derechos sustantivos del actor frente al demandado",
            "B) Una forma anormal de terminación del proceso que opera por el transcurso del tiempo (inactividad procesal) sin que las partes realicen actos de impulso procesal",
            "C) La destitución obligatoria del juez por negligencia en la emisión de sentencias",
            "D) La prescripción de la deuda mercantil principal"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La caducidad de la instancia (perención) extingue el proceso debido a la inactividad prolongada de las partes, liberando al demandado de los efectos de la demanda sin prejuzgar sobre el fondo."
    },
    {
        id: 24,
        area: "Derecho Constitucional",
        pregunta: "¿Qué es el 'Control Difuso' de constitucionalidad y convencionalidad en el sistema jurídico mexicano?",
        opciones: [
            "A) La facultad exclusiva conferida únicamente a la Suprema Corte de Justicia para declarar inconstitucionalidad general",
            "B) La obligación de todos los jueces del país, con independencia de su jerarquía o fuero, de inaplicar normas secundarias que contravengan la Constitución o los tratados internacionales de derechos humanos en los asuntos de su competencia",
            "C) El recurso administrativo interpuesto ante el ejecutivo federal",
            "D) La revisión de sentencias por parte de organismos internacionales no vinculantes"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "A partir de la reforma constitucional de 2011, todos los jueces del país ejercen control difuso, inaplicando normas contrarias a la Constitución y a los tratados de DH para el caso concreto."
    },
    {
        id: 25,
        area: "Derecho Administrativo",
        pregunta: "¿Cuál es la diferencia sustancial entre 'Expropiación' y 'Confiscación' de bienes?",
        opciones: [
            "A) La expropiación es un acto de autoridad legal por causa de utilidad pública mediante indemnización, mientras que la confiscación es una pena prohibida por el artículo 22 constitucional que consiste en la apropiación violenta de bienes sin indemnización",
            "B) La confiscación es legal para cualquier delito fiscal y la expropiación solo para municipios",
            "C) Ambas son figuras idénticas con distinta denominación fiscal",
            "D) La expropiación solo aplica para extranjeros y la confiscación para nacionales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 22 de la Constitución prohíbe expresamente la confiscación de bienes. En contraste, la expropiación es constitucionalmente legítima si se funda en causa de utilidad pública e indemnización previa."
    },
    {
        id: 26,
        area: "Derecho Civil (Sucesiones)",
        pregunta: "¿Cuáles son las formas de testamento ordinario reconocidas en el Código Civil Federal mexicano?",
        opciones: [
            "A) Testamento público abierto, público cerrado y ológrafo",
            "B) Testamento militar, marítimo y en el extranjero",
            "C) Testamento verbal ante dos testigos y testamento notarial privado",
            "D) Fideicomiso testamentario irrevocable"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El Código Civil clasifica los testamentos en ordinarios (público abierto, público cerrado y ológrafo) y especiales (privado, militar, marítimo y hecho en país extranjero)."
    },
    {
        id: 27,
        area: "Derecho Penal",
        pregunta: "¿En qué consiste la causa de justificación denominada 'Legítima Defensa'?",
        opciones: [
            "A) Cometer un delito bajo el influjo de bebidas embriagantes o drogas enervantes",
            "B) Obrar en defensa de la persona, bienes o derechos propios o ajenos, contra una agresión real, actual o inminente, y sin derecho, siempre que exista necesidad racional del medio empleado",
            "C) Causar un daño menor para evitar un mal mayor inminente (estado de necesidad)",
            "D) Obedecer una orden jerárquica superior ilícita"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La legítima defensa es una excluyente de responsabilidad penal (causa de justificación) que neutraliza la antijuridicidad ante repulsas defensivas frente a agresiones injustas, actuales e inminentes."
    },
    {
        id: 28,
        area: "Derecho del Trabajo",
        pregunta: "¿Qué es el 'Reparto de Utilidades' (PTU) y qué porcentaje de las rentas gravables de las empresas debe distribuirse entre los trabajadores según la legislación mexicana?",
        opciones: [
            "A) El 10% de las utilidades netas gravables de la empresa",
            "B) El 30% de las ventas brutas totales anuales",
            "C) El 5% del capital social escriturado",
            "D) El equivalente a 90 días de salario mínimo obligatorio"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Comisión Nacional para la Participación de los Trabajadores en las Utilidades de las Empresas fija el porcentaje constitucional, el cual se encuentra establecido legalmente en el 10% de la renta gravable."
    },
    {
        id: 29,
        area: "Derecho Procesal Penal",
        pregunta: "En el procedimiento penal acusatorio, ¿qué finalidad persigue la etapa de 'Investigación Complementaria' a cargo del Ministerio Público?",
        opciones: [
            "A) Dictar sentencia absolutoria definitiva sin debate en juicio",
            "B) Recabar los datos de prueba necesarios para el cierre de la investigación, formulación de acusación o solicitud de sobreseimiento, bajo control judicial",
            "C) Ejecutar las penas privativas de libertad en centros penitenciarios de máxima seguridad",
            "D) Resolver los recursos de apelación en segunda instancia"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La investigación complementaria se desarrolla posterior al auto de vinculación a proceso; el Ministerio Público reúne los datos para sustentar su acusación formal con plazo fijado por el juez de control."
    },
    {
        id: 30,
        area: "Derecho de Amparo",
        pregunta: "¿Cuál es el plazo general estipulado en la Ley de Amparo para interponer la demanda de amparo indirecto, contado a partir del día siguiente al en que haya surtido efectos la notificación del acto reclamado?",
        opciones: [
            "A) 15 días",
            "B) 30 días",
            "C) 7 días hábiles",
            "D) 1 año natural completo"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 17 de la Ley de Amparo establece la regla general de 15 días para la interposición del juicio de amparo indirecto (con excepciones para leyes autoaplicativas, ejidales o de peligro a la vida)."
    },
    {
        id: 31,
        area: "Derecho Mercantil",
        pregunta: "¿Qué es el 'Endoso' en los títulos de crédito?",
        opciones: [
            "A) La cancelación notarial de un pagaré vencido",
            "B) La cláusula cambiaria estampada en un título de crédito por la cual el tenedor transmite los derechos del documento a otra persona",
            "C) El registro mercantil de una nueva sociedad anónima",
            "D) La garantía prendaria sobre bienes raíces industriales"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El endoso es la forma mercantil formal de transmisión de los títulos de crédito a la orden, el cual debe constar en el propio título o hoja adherida y firmarse por el endosante."
    },
    {
        id: 32,
        area: "Derecho Civil",
        pregunta: "¿Cuáles son los requisitos legales de fondo para la existencia de un contrato civil?",
        opciones: [
            "A) Escritura pública ante notario y registro en el Registro Público de la Propiedad",
            "B) Consentimiento y objeto que pueda ser materia del contrato",
            "C) Capacidad legal de las partes, ausencia de vicios del consentimiento, licitud en el objeto, motivo o fin, y la forma establecida por la ley",
            "D) La entrega material inmediata de la cosa objeto del pacto"
        ],
        respuestaCorrecta: 1, // B (Wait, option C lists validez requirements. Option B lists existencia requirements: consentimiento y objeto. Let's make sure C is validez and B is existencia).
        explicacion: "Los elementos de *existencia* de un contrato son consentimiento y objeto; los elementos de *validez* son capacidad, ausencia de vicios, licitud en objeto/fin y forma."
    },
    {
        id: 33,
        area: "Derecho Constitucional",
        pregunta: "¿Qué es una controversia constitucional (artículo 105, fracción I de la CPEUM)?",
        opciones: [
            "A) Un juicio de amparo promovido por particulares contra leyes fiscales",
            "B) Un medio de control constitucional que resuelve los conflictos de atribuciones o competencias que surjan entre la Federación y entidades federativas, municipios o poderes federales",
            "C) La denuncia por violaciones graves a los derechos humanos ante comisiones internacionales",
            "D) El recurso administrativo interpuesto por un servidor público destituido"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las controversias constitucionales son procesos que conoce la SCJN para dirimir conflictos competenciales entre órganos del Estado mexicano en sus diversos niveles de gobierno."
    },
    {
        id: 34,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es la 'Responsabilidad Patrimonial del Estado' consagrada en el artículo 113 de la Constitución mexicana?",
        opciones: [
            "A) La obligación del Estado de indemnizar a los particulares por los daños que cause en sus bienes o derechos con motivo de su actividad administrativa irregular",
            "B) El embargo de bienes propiedad de los funcionarios públicos por deudas personales",
            "C) El pago de impuestos corporativos por empresas paraestatales",
            "D) La facultad del gobierno para expropiar bienes sin compensación económica"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La responsabilidad patrimonial del Estado es objetiva y directa: todo daño causado por la actividad administrativa irregular obliga al Estado a indemnizar económicamente al ciudadano afectado."
    },
    {
        id: 35,
        area: "Derecho Procesal Civil",
        pregunta: "En los incidentes dentro del proceso civil, ¿cuál es la característica de la resolución que los decide?",
        opciones: [
            "A) Siempre es una sentencia definitiva de condena",
            "B) Es una sentencia interlocutoria que resuelve una cuestión accesoria controvertida relacionada con el pleito principal",
            "C) Es un laudo arbitral inapelable",
            "D) Constituye una ley de observancia general en todo el territorio"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los incidentes resuelven cuestiones accesorias al juicio principal y se deciden jurídicamente mediante sentencias interlocutorias."
    },
    {
        id: 36,
        area: "Derecho Penal",
        pregunta: "¿En qué consiste el delito de 'Peculado' tipificado en el Código Penal?",
        opciones: [
            "A) El uso de violencia física para robar un banco comercial",
            "B) El hecho de que un servidor público disponga o distrae de su objeto dinero, valores, fincas o cualquier otra cosa pertenenciente al Estado o a un organismo público por razón de su cargo",
            "C) La falsificación de documentos de comercio privado",
            "D) La revelación de secretos industriales entre particulares"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El peculado es un delito cometido por servidores públicos que consiste en la apropiación o distracción indebida de recursos públicos confiados a su administración por razón de sus funciones."
    },
    {
        id: 37,
        area: "Derecho Laboral",
        pregunta: "¿Qué es el 'Contrato Colectivo de Trabajo' según la LFT?",
        opciones: [
            "A) El acuerdo celebrado entre uno o varios sindicatos de trabajadores y uno o varios patrones, o uno o varios sindicatos de patrones, con objeto de establecer las condiciones según las cuales debe prestarse el trabajo en una o más empresas",
            "B) El nombramiento gubernamental de confianza para ocupar un puesto directivo",
            "C) El convenio individual de honorarios profesionales por servicios técnicos",
            "D) El reglamento interno de seguridad e higiene de una fábrica"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El contrato colectivo de trabajo vincula al sindicato y al empleador regulando las condiciones generales de labor aplicables a todos los trabajadores de la empresa o establecimiento."
    },
    {
        id: 38,
        area: "Derecho Internacional Privado",
        pregunta: "En el derecho internacional privado mexicano, ¿qué función cumplen las llamadas 'Reglas de Conflicto' o normas de colisión?",
        opciones: [
            "A) Resolver guerras territoriales entre naciones soberanas",
            "B) Determinar cuál es la legislación nacional aplicable (lex loci celebrationis, lex rei sitae, etc.) cuando en una controversia privada convergen elementos extranjeros",
            "C) Establecer aranceles aduaneros de importación",
            "D) Sancionar delitos de lesa humanidad ante la Corte Penal Internacional"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las normas de colisión o de conflicto determinan qué ordenamiento jurídico sustantivo (nacional o extranjero) debe aplicarse para solucionar un litigio con puntos de contacto extraterritoriales."
    },
    {
        id: 39,
        area: "Derecho de Amparo",
        pregunta: "¿Qué es la 'Suspensión del Acto Reclamado' en el juicio de amparo?",
        opciones: [
            "A) La resolución definitiva que concede el amparo y protección de la justicia federal",
            "B) La medida cautelar mediante la cual el órgano jurisdiccional ordena mantener las cosas en el estado que guardan, paralizando los efectos del acto reclamado para evitar daños de difícil reparación al quejoso",
            "C) El sobreseimiento por falta de interés jurídico",
            "D) La destitución inmediata de la autoridad responsable"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La suspensión es una providencia cautelar de carácter constitucional que busca preservar la materia del amparo e impedir perjuicios irreparables al quejoso mientras se resuelve el fondo."
    },
    {
        id: 40,
        area: "Derecho Constitucional",
        pregunta: "¿Qué es una 'Acción de Inconstitucionalidad' (artículo 105, fracción II de la CPEUM)?",
        opciones: [
            "A) Un recurso que pueden promover minorías parlamentarias, el Fiscal General, comisiones de derechos humanos o partidos políticos para plantear la posible contradicción entre una norma de carácter general y la Constitución",
            "B) Una demanda civil por daños morales interpuesta contra legisladores federales",
            "C) Un juicio de amparo indirecto promovido por ciudadanos en contra de decretos presidenciales",
            "D) El procedimiento de destitución de gobernadores estatales por el Senado"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La acción de inconstitucionalidad es un medio de control abstracto de normas generales que se tramita ante la SCJN por sujetos legitimados constitucionalmente para expulsar normas contrarias a la Carta Magna."
    },
    {
        id: 41,
        area: "Derecho Constitucional",
        pregunta: "¿Qué diferencia existe entre la Declaración de Procedencia (fuero) y el Juicio Político consagrados en la Constitución mexicana?",
        opciones: [
            "A) La declaración de procedencia retira la inmunidad procesal a un servidor público para ser juzgado por delitos penales ordinarios, mientras que el juicio político es una sanción de carácter político-administrativo por violaciones graves a la Constitución o manejo indebido de fondos públicos",
            "B) El juicio político lo resuelve directamente la Suprema Corte y la declaración de procedencia el Presidente",
            "C) Son términos estrictamente sinónimos aplicados a cualquier ciudadano",
            "D) La declaración de procedencia aplica solo para legisladores federales en funciones"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La declaración de procedencia (desafuero) remueve la inmunidad procesal para que un funcionario responda ante tribunales penales comunes; el juicio político busca imponer sanciones de destitución e inhabilitación por actos que afecten los intereses públicos fundamentales."
    },
    {
        id: 42,
        area: "Derecho Penal",
        pregunta: "En la dogmática penal, ¿cómo se define la figura jurídica de la 'Tentativa'?",
        opciones: [
            "A) Cuando el delito se consuma totalmente pero el daño económico es menor al esperado",
            "B) Cuando se realizan actos idóneos o unívocos encaminados directa o inmediatamente a la consumación, sin llegar a producirse esta por causas ajenas a la voluntad del agente",
            "C) El acuerdo previo entre dos o más personas para delinquir sin ejecutar ningún acto material",
            "D) La ejecución culposa de un resultado típico no deseado"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La tentativa se configura cuando el sujeto activo inicia la ejecución de los actos idóneos para cometer el delito, pero la consumación no se efectúa debido a factores externos independientes de su voluntad (tentativa acabada o inacabada)."
    },
    {
        id: 43,
        area: "Derecho Civil",
        pregunta: "¿Qué es la 'Evicción' en los contratos traslativos de dominio como la compraventa?",
        opciones: [
            "A) La pérdida total o parcial de una cosa sufrida por el adquirente, en virtud de sentencia judicial que causa ejecutoria, basada en un derecho anterior a la adquisición",
            "B) El vicio oculto que inutiliza el bien para el uso al que está destinado",
            "C) La rescisión unilateral del contrato por falta de pago del precio pactado",
            "D) El derecho de preferencia que tiene el copropietario para adquirir la cosa vendida"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El saneamiento por evicción obliga al enajenante a responder ante el comprador cuando este es privado legalmente de todo o parte del bien adquirido mediante sentencia firme por un tercero con derecho anterior."
    },
    {
        id: 44,
        area: "Derecho Mercantil",
        pregunta: "¿Qué obligaciones y efectos jurídicos adquiere una persona que firma un título de crédito en calidad de 'Aval'?",
        opciones: [
            "A) Asume una responsabilidad subsidiaria idéntica a la de un fiador civil, pudiendo invocar el beneficio de orden",
            "B) Garantiza en todo o en parte el pago de la letra de cambio o pagaré, quedando obligado solidariamente con el avalado y con las mismas modalidades de este",
            "C) Se convierte en el nuevo propietario legal del crédito mercantil",
            "D) Únicamente funge como testigo formal de la suscripción sin obligación patrimonial"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El avalista en materia mercantil queda obligado solidariamente con el avalado al pago del título de crédito, sin gozar del beneficio de orden que caracteriza a la fianza civil ordinaria."
    },
    {
        id: 45,
        area: "Derecho Laboral",
        pregunta: "Conforme a la Ley Federal del Trabajo, ¿cuánto tiempo dura el periodo de prueba máximo permitido para un trabajador en un puesto general y en un puesto gerencial o de dirección respectivamente?",
        opciones: [
            "A) Hasta 30 días para puestos generales y 60 días para gerenciales",
            "B) Hasta 30 días para todos los trabajadores por igual",
            "C) Hasta 30 días para trabajadores generales y hasta 180 días para puestos de dirección, gerenciales o especialización técnica",
            "D) Hasta 1 año natural improrrogable para cualquier categoría"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 39-A de la LFT establece que el periodo de prueba puede ser de hasta 30 días para puestos generales y extenderse hasta 180 días para trabajadores de dirección, gerencia y puestos de alta especialización."
    },
    {
        id: 46,
        area: "Derecho Administrativo",
        pregunta: "¿Qué diferencia existe conceptualmente entre una 'Autorización' y una 'Concesión' administrativa?",
        opciones: [
            "A) La autorización remueve un obstáculo legal preexistente para que el particular ejerza un derecho propio (ej. licencia de conducir), mientras que la concesión crea un derecho nuevo al otorgar facultades que originariamente corresponden al Estado",
            "B) La concesión es gratuita y la autorización causa altos gravámenes fiscales",
            "C) La autorización la emite el Congreso de la Unión y la concesión un juez federal",
            "D) Son términos administrativos totalmente equivalentes"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La autorización levanta un límite legal para el ejercicio de una actividad particular preexistente; la concesión traslada temporalmente potestades de dominio o servicio público del Estado hacia el administrado."
    },
    {
        id: 47,
        area: "Derecho Fiscal",
        pregunta: "¿Qué es el 'Recurso de Revocación' previsto en el Código Fiscal de la Federación?",
        opciones: [
            "A) Un juicio contencioso administrativo federal tramitado ante el Tribunal Federal de Justicia Administrativa",
            "B) Un medio de defensa administrativo de tramitación opcional que interpone el contribuyente ante la propia autoridad fiscal (SAT) contra sus propias resoluciones definitivas",
            "C) Una demanda de amparo directo ante los Tribunales Colegiados de Circuito",
            "D) Una denuncia penal por defraudación fiscal calificada"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El recurso de revocación es un recurso administrativo horizontal y optativo que se resuelve por la propia autoridad fiscal recaudadora para revocar o confirmar sus actos recurridos."
    },
    {
        id: 48,
        area: "Derecho Procesal Civil",
        pregunta: "¿Qué son los 'Medios Preparatorios a Juicio' en el procedimiento civil?",
        opciones: [
            "A) Las actuaciones judiciales previas que realiza el futuro actor para obtener elementos de prueba, confesiones, exhibición de documentos o declaraciones necesarias para entablar su demanda principal con solidez",
            "B) Las audiencias de conciliación obligatoria ante el sistema notarial",
            "C) Los recursos de apelación interpuestos contra autos interlocutorios",
            "D) El embargo precautorio de bienes sin conocimiento del deudor"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los medios preparatorios son diligencias previas que facilitan el juicio futuro, permitiendo despejar dudas, obtener documentos clave o confesar adeudos para fundar la acción."
    },
    {
        id: 49,
        area: "Derecho Procesal Penal",
        pregunta: "En el juicio oral penal acusatorio, ¿qué valor probatorio tienen los registros de la investigación preliminar (carpeta de investigación) recabados por el Ministerio Público antes de la audiencia de juicio?",
        opciones: [
            "A) Constituyen prueba plena automática que sustituye por completo el desahogo de testigos en juicio",
            "B) Por regla general no tienen valor probatorio como prueba en el juicio oral, salvo las excepciones legales de prueba anticipada o registros que puedan incorporarse por lectura para apoyo de memoria o contradicción",
            "C) Son inapelables y obligan al juez a dictar sentencia condenatoria inmediata",
            "D) Tienen el carácter de cosa juzgada formal"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En el sistema acusatorio rige el principio de inmediación: las pruebas deben desahogarse directamente ante el Tribunal de Enjuiciamiento en la audiencia de juicio oral, por lo que la carpeta ministerial sirve para investigación pero no es prueba desahogada en juicio salvo excepciones."
    },
    {
        id: 50,
        area: "Derecho de Amparo",
        pregunta: "¿En qué consiste el principio de 'Definitividad' que rige en el juicio de amparo?",
        opciones: [
            "A) El quejoso debe agotar previamente todos los recursos ordinarios o medios de defensa legales previstos en la ley que regula el acto reclamado, antes de acudir a la instancia constitucional de amparo",
            "B) El juicio de amparo debe resolverse en un plazo fatal de 24 horas",
            "C) Las sentencias de amparo no admiten ningún tipo de cumplimiento coactivo",
            "D) La demanda de amparo no puede modificarse una vez presentada"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio de definitividad impone al quejoso la obligación de agotar los recursos ordinarios previos antes de promover el amparo, salvo excepciones constitucionales tasadas (ej. afectación directa a la libertad personal)."
    },
    {
        id: 51,
        area: "Derecho Constitucional",
        pregunta: "¿Cuáles son las características principales de los Derechos Humanos conforme al artículo 1o. de la Constitución mexicana?",
        opciones: [
            "A) Universalidad, interdependencia, indivisibilidad y progresividad",
            "B) Temporalidad, revocabilidad por decreto y discrecionalidad del legislador",
            "C) Jerarquía variable según el estado de la república donde se invoquen",
            "D) Supeditación estricta al presupuesto financiero anual del gobierno"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El párrafo tercero del artículo 1o. constitucional establece que todas las autoridades tienen la obligación de promover, respetar, proteger y garantizar los derechos humanos bajo los principios de universalidad, interdependencia, indivisibilidad y progresividad."
    },
    {
        id: 52,
        area: "Derecho Civil",
        pregunta: "¿Qué es la 'Prescripción Positiva' (o Usucapión) en materia civil?",
        opciones: [
            "A) Un medio para adquirir bienes inmuebles o muebles mediante el transcurso del tiempo y bajo las condiciones establecidas en la ley, poseyéndolos en concepto de propietario, de manera pacífica, continua y pública",
            "B) La pérdida del derecho de cobrar una deuda mercantil por inacción del acreedor",
            "C) La extinción de la patria potestad por abandono injustificado",
            "D) La caducidad de una acción procesal por falta de impulso"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prescripción positiva o usucapión es un modo originario de adquirir la propiedad mediante la posesión pacífica, continua, pública y en concepto de dueño durante el tiempo que marca la ley."
    },
    {
        id: 53,
        area: "Derecho Penal",
        pregunta: "¿Qué diferencia dogmática existe entre el delito consumado instantáneamente y el delito permanente?",
        opciones: [
            "A) El delito instantáneo se agota en el mismo momento en que se realizan todos sus elementos constitutivos (ej. homicidio), mientras que en el permanente la consumación se prolonga ininterrumpidamente en el tiempo por voluntad del agente (ej. privación ilegal de la libertad)",
            "B) El delito permanente prescribe en el mismo día de su inicio",
            "C) El delito instantáneo no requiere tipicidad penal expresa",
            "D) No existe diferencia sustancial en la teoría delictiva mexicana"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La permanencia del delito afecta el cómputo de la prescripción y la flagrancia: en el delito permanente la consumación sigue realizándose mientras dure la situación antijurídica (como el secuestro)."
    },
    {
        id: 54,
        area: "Derecho Mercantil",
        pregunta: "¿Qué es un 'Fideicomiso' según la Ley General de Títulos y Operaciones de Crédito?",
        opciones: [
            "A) Un contrato de arrendamiento financiero con opción a compra de inmuebles",
            "B) Un negocio jurídico en virtud del cual una persona (fideicomitente) transmite bienes o derechos a una institución fiduciaria para la realización de fines lícitos determinados en beneficio de un tercero (fideicomisario)",
            "C) Una sociedad anónima de capital variable dedicada a la banca múltiple",
            "D) Un título de crédito negociable mediante endoso en blanco"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El fideicomiso es un negocio jurídico mercantil donde el fideicomitente afecta bienes a una fiduciaria (institución bancaria autorizada) para cumplir un fin específico en favor del fideicomisario."
    },
    {
        id: 55,
        area: "Derecho Laboral",
        pregunta: "De conformidad con la Ley Federal del Trabajo, ¿a qué indemnización legal tiene derecho un trabajador que es despedido injustificadamente?",
        opciones: [
            "A) Únicamente al pago proporcional de aguinaldo y vacaciones",
            "B) Tres meses de salario integrado por concepto de indemnización constitucional, más 20 días por año de servicios prestados (si demanda reinstalación y el patrón se niega), más primas de antigüedad e salarios vencidos",
            "C) Un pago único de 90 días de salario mínimo general sin importar antigüedad",
            "D) Ninguna indemnización si el patrón argumenta reestructuración económica"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 48 y constitucionales prevén que ante despido injustificado, el trabajador puede optar por la reinstalación o la indemnización constitucional de 3 meses de salario, más 20 días por año, salarios caídos y prima de antigüedad."
    },
    {
        id: 56,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es la 'Expropiación' en el derecho administrativo mexicano?",
        opciones: [
            "A) La transferencia coactiva de la propiedad privada del administrado al Estado, dictada por autoridad competente, fundada en causa de utilidad pública y mediante indemnización",
            "B) La confiscación punitiva de bienes por sentencia judicial penal",
            "C) La nacionalización de empresas privadas extranjeras sin derecho a indemnización monetaria",
            "D) El embargo precautorio de cuentas bancarias por adeudos fiscales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La expropiación administrativa requiere tres elementos constitucionales inexcusables: competencia de autoridad, causa de utilidad pública debidamente fundada y pago de indemnización previa."
    },
    {
        id: 57,
        area: "Derecho Procesal Civil",
        pregunta: "¿Qué es la 'Reconvención' (contrademanda) en el juicio civil ordinario?",
        opciones: [
            "A) El escrito de contestación donde el demandado simplemente niega los hechos de la demanda",
            "B) La oportunidad procesal que tiene el demandado para entablar una nueva demanda en contra del actor dentro del mismo juicio, aprovechando la misma relación procesal",
            "C) La apelación extraordinaria interpuesta ante el tribunal superior",
            "D) El desistimiento voluntario de la acción por parte del actor original"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La reconvención es la contrademanda que el demandado interpone contra el actor al contestar la demanda principal, obligando al juez a resolver ambas pretensiones en la misma sentencia."
    },
    {
        id: 58,
        area: "Derecho Constitucional (Amparo)",
        pregunta: "¿Qué efectos jurídicos produce la concesión del amparo y protección de la justicia federal contra una ley declarada inconstitucional en amparo indirecto?",
        opciones: [
            "A) La anulación y derogación general de la ley para todo el país con efectos erga omnes automáticos",
            "B) Proteger exclusivamente al quejoso en el caso concreto que motivó la demanda (efectos relativos de las sentencias / fórmula Otero), inaplicando la norma únicamente en su perjuicio",
            "C) La destitución inmediata de los legisladores que votaron la norma",
            "D) La condena pecuniaria al Congreso de la Unión por daños morales"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "En el juicio de amparo rige la fórmula Otero o relatividad de las sentencias: el fallo protector solo protege al quejoso particular en el caso específico, sin efectos generales erga omnes (salvo declaración general de inconstitucionalidad por la SCJN bajo requisitos estrictos)."
    },
    {
        id: 59,
        area: "Derecho Penal",
        pregunta: "¿Qué es el delito de 'Homicidio Calificado' según los códigos penales mexicanos?",
        opciones: [
            "A) El que se comete con premeditación, alevosía, ventaja o traición",
            "B) El cometido por imprudencia o negligencia médica en quirófano",
            "C) El homicidio culposo en accidente automovilístico",
            "D) La muerte provocada en legítima defensa excesiva"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las calificativas como premeditación, alevosía, ventaja o traición agravan la penalidad básica del homicidio simple debido a la mayor temibilidad y desvalor de la acción del sujeto activo."
    },
    {
        id: 60,
        area: "Derecho Fiscal",
        pregunta: "Conforme al Código Fiscal de la Federación, ¿qué se entiende por la figura jurídica de la 'Responsabilidad Solidaria' en materia fiscal?",
        opciones: [
            "A) La obligación que tienen terceras personas (socios, administradores, liquidadores) de responder por el pago de las contribuciones omitidas por el contribuyente principal ante ciertos supuestos legales",
            "B) El subsidio gubernamental otorgado a empresas de nueva creación",
            "C) La exención total de impuestos por quiebra técnica comprobada",
            "D) El derecho del fisco a embargar bienes de cualquier ciudadano al azar"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La responsabilidad solidaria fiscal establece que administradores, socios o liquidadores responden con su propio patrimonio del adeudo tributario de la persona moral bajo condiciones específicas previstas en el CFF."
    },
    {
        id: 61,
        area: "Derecho Civil (Familia)",
        pregunta: "¿Qué efectos jurídicos produce el divorcio sin expresión de causa (divorcio incausado) en el derecho familiar mexicano?",
        opciones: [
            "A) Se decreta la disolución del vínculo matrimonial a solicitud unilateral de cualquiera de los cónyuges, sin necesidad de probar causal de culpa, resolviendo en vía incidental lo relativo a guarda, custodia, alimentos y compensación",
            "B) Requiere forzosamente el acuerdo mutuo y la firma de un notario público",
            "C) Extingue automáticamente todas las obligaciones alimentarias hacia los hijos menores",
            "D) Prohíbe a ambos cónyuges contraer matrimonio nuevamente en el futuro"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El divorcio incausado protege el libre desarrollo de la personalidad; basta la solicitud unilateral de un cónyuge para disolver el matrimonio, dejando los aspectos patrimoniales y familiares para resolverse incidentalmente."
    },
    {
        id: 62,
        area: "Derecho Mercantil",
        pregunta: "¿Qué características procesales tiene el 'Juicio Ejecutivo Mercantil' frente al juicio ordinario mercantil?",
        opciones: [
            "A) Es un procedimiento de tramitación más rápida que se funda en un documento que trae aparejada ejecución (título ejecutivo), iniciando con el requerimiento de pago, embargo precautorio de bienes y emplazamiento simultáneo",
            "B) Es un juicio oral donde no se requiere la presentación de documentos originales",
            "C) Solo puede promoverse ante tribunales arbitrales internacionales",
            "D) Excluye por completo la posibilidad de oponer excepciones y defensas"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El juicio ejecutivo mercantil procede cuando la demanda se funda en un título que trae aparejada ejecución (pagaré, letra de cambio, factura con requisitos), ordenándose desde el auto inicial el embargo de bienes para garantizar el adeudo."
    },
    {
        id: 63,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es el 'Silencio Administrativo' (afirmativa o negativa ficta) en el procedimiento administrativo?",
        opciones: [
            "A) La pérdida definitiva de las facultades mentales del titular de una dependencia",
            "B) La figura jurídica que se produce cuando la autoridad administrativa omite emitir y notificar resolución expresa a una solicitud del particular dentro del plazo legal previsto, configurándose presunciones legales (afirmativa o negativa según la ley aplicable)",
            "C) La negativa automática del Presidente a firmar decretos legislativos",
            "D) El archivo definitivo de expedientes por falta de papel oficial"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El silencio administrativo protege al ciudadano ante la inercia de la burocracia; la ley estipula si la falta de respuesta en plazo equivale a una negativa ficta (para efectos de impugnación) o afirmativa ficta."
    },
    {
        id: 64,
        area: "Derecho Procesal Penal",
        pregunta: "En el sistema penal acusatorio, ¿cuál es el objetivo central de la 'Audiencia Inicial'?",
        opciones: [
            "A) Emitir sentencia condenatoria firme de cadena perpetua",
            "B) Controlar la legalidad de la detención (en su caso), formular la imputación, otorgar oportunidad de declarar al imputado, resolver sobre medidas cautelares y resolver la solicitud de vinculación a proceso",
            "C) Desahogar todas las pruebas periciales definitivas del juicio oral",
            "D) Negociar la reparación del daño con los tribunales colegiados"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La audiencia inicial es el primer contacto formal del imputado con el juez de control, abarcando el control de detención, formulación de imputación, debate de medidas cautelares y vinculación a proceso."
    },
    {
        id: 65,
        area: "Derecho Constitucional",
        pregunta: "¿Qué es la 'Interpretación Conforme' y el 'Principio Pro Persona' (artículo 1o. constitucional)?",
        opciones: [
            "A) La obligación de interpretar las normas del orden jurídico mexicano favoreciendo en todo tiempo a las personas la protección más amplia, y la exigencia de interpretar las leyes secundarias acordes a la Constitución y los tratados internacionales de derechos humanos",
            "B) La facultad del Congreso para modificar la constitución por simple mayoría de votos",
            "C) El derecho de los jueces a aplicar la ley extranjera por encima de la constitución local",
            "D) La obligación de los particulares de cumplir los tratados comerciales internacionales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio pro persona obliga a aplicar la norma o interpretación más favorable a la protección de los derechos humanos, mientras que la interpretación conforme obliga a buscar el sentido de la ley que sea compatible con la Constitución."
    },
    {
        id: 66,
        area: "Derecho Civil (Bienes)",
        pregunta: "¿Qué es una 'Servidumbre' en los derechos reales civiles?",
        opciones: [
            "A) Un contrato de arrendamiento urbano para locales comerciales",
            "B) Un gravamen real impuesto sobre un inmueble (predio sirviente) en beneficio de otro inmueble perteneciente a distinto dueño (predio dominante)",
            "C) La obligación laboral de prestar servicios domésticos subordinados",
            "D) La copropiedad igualitaria de bienes hereditarios entre hermanos"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La servidumbre es un derecho real de goce o gravamen impuesto sobre un predio en beneficio de otro de distinto dueño (ej. servidumbre de paso, de desagüe)."
    },
    {
        id: 67,
        area: "Derecho Penal",
        pregunta: "¿En qué consiste la figura del 'Encubrimiento' como delito autónomo?",
        opciones: [
            "A) Cometer directamente el delito material en coautoría con otras personas",
            "B) Auxiliar al autor de un delito a eludir las investigaciones de la autoridad o a ocultar los instrumentos, objetos o efectos del delito, sin previo acuerdo con dicho autor",
            "C) Denunciar falsamente a un inocente ante el Ministerio Público",
            "D) Otorgar perdón judicial al delincuente confeso"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El encubrimiento se comete posterior a la ejecución del delito principal por alguien que no participó en él, pero ayuda a ocultar evidencias o evadir la acción de la justicia."
    },
    {
        id: 68,
        area: "Derecho Mercantil",
        pregunta: "¿Cuáles son los atributos legales fundamentales de una Sociedad Cooperativa en México?",
        opciones: [
            "A) Buscar exclusivamente el lucro especulativo bursátil de grandes inversionistas extranjeros",
            "B) Funcionar sobre la base de igualdad de derechos y obligaciones de sus socios, capital variable, no perseguir fines de lucro especulativo sino la satisfacción de necesidades sociales y económicas de sus integrantes",
            "C) Requerir obligatoriamente un consejo de administración nombrado por el gobierno federal",
            "D) Emitir acciones preferentes sin derecho a voto en asamblea"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La sociedad cooperativa es una organización social integrada por personas físicas con base en intereses comunes y principios de solidaridad, esfuerzo propio y ayuda mutua, sin ánimo de lucro especulativo."
    },
    {
        id: 69,
        area: "Derecho del Trabajo",
        pregunta: "¿Qué es el 'Salario Mínimo' conforme al artículo 123 de la Constitución mexicana?",
        opciones: [
            "A) La cantidad menor que debe recibir en efectivo el trabajador por los servicios prestados en una jornada, la cual debe ser suficiente para satisfacer las necesidades normales de un jefe de familia en el orden material, social y cultural, y para proveer a la educación obligatoria de los hijos",
            "B) El promedio salarial de los gerentes de una sucursal industrial",
            "C) Un parámetro fiscal variable sujeto a la devaluación monetaria internacional",
            "D) El pago exclusivo por horas extra laboradas en días festivos"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El salario mínimo constitucional tiene un carácter social tutelar imperativo, diseñado para garantizar la subsistencia digna del trabajador y su familia."
    },
    {
        id: 70,
        area: "Derecho Procesal Civil",
        pregunta: "¿Qué es la 'Cosa Juzgada' (Res Judicata) y qué efectos procesales produce?",
        opciones: [
            "A) Una sentencia provisional sujeta a revisión en cualquier momento por el Congreso",
            "B) La verdad legal indiscutible establecida en una sentencia firme que ha causado ejecutoria, impidiendo que el mismo litigio pueda volverse a plantear entre las mismas partes (eficacia directa e indirecta)",
            "C) El acuerdo previo celebrado ante mediadores privados sin validez judicial",
            "D) La orden de aprehensión dictada por un juez penal en rebeldía"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La cosa juzgada otorga definitividad e irrevisibilidad a las sentencias ejecutoriadas, garantizando la seguridad jurídica al prohibir juicios duplicados sobre el mismo objeto y partes."
    },
    {
        id: 71,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es un 'Reglamento' en la jerarquía normativa del derecho administrativo mexicano?",
        opciones: [
            "A) Una ley federal aprobada por ambas cámaras del Congreso de la Unión",
            "B) Un conjunto de normas jurídicas abstractas, generales e impersonales expedidas por el Presidente de la República (o gobernadores/alcaldes) en uso de su facultad reglamentaria (artículo 89, fracc. I CPEUM), destinadas a facilitar la exacta observancia de las leyes emitidas por el Congreso",
            "C) Un contrato administrativo celebrado entre particulares y secretarías de estado",
            "D) Una circular interna sin obligatoriedad externa"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El reglamento administrativo es una norma subordinada a la ley (principio de reserva de ley y subordinación jerárquica), emitida por el Ejecutivo para proveer a su exacta ejecución."
    },
    {
        id: 72,
        area: "Derecho de Amparo",
        pregunta: "¿Cuáles son las dos vías en las que se divide el juicio de amparo en el sistema jurídico mexicano?",
        opciones: [
            "A) Amparo Directo (unipersonal) y Amparo Indirecto (colectivo)",
            "B) Amparo Directo (conocido por Tribunales Colegiados de Circuito contra sentencias definitivas, laudos o resoluciones que pongan fin al juicio) y Amparo Indirecto (conocido por Juzgados de Distrito contra normas generales, actos de autoridades fuera de juicio, etc.)",
            "C) Amparo Penal y Amparo Mercantil exclusivamente",
            "D) Amparo Administrativo Federal y Amparo Municipal"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Ley de Amparo regula dos vías procedimentales: el amparo directo (un instancia ante Tribunales Colegiados contra resoluciones definitivas) y el amparo indirecto (ante Jueces de Distrito contra actos intraprocesales, leyes o autoridades diversas)."
    },
    {
        id: 73,
        area: "Derecho Civil (Contratos)",
        pregunta: "¿Qué es el contrato de 'Mutuo' según el Código Civil Federal?",
        opciones: [
            "A) Un contrato por el cual el mutuante se obliga a transferir la propiedad de una suma de dinero o de otras cosas fungibles al mutuario, quien se obliga a devolver otro tanto de la misma especie y calidad",
            "B) La entrega temporal de un inmueble para su uso gratuito",
            "C) La prestación de servicios profesionales independientes por honorarios",
            "D) La constitución de una sociedad mercantil de capital variable"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El mutuo es un contrato traslativo de dominio de cosas fungibles (como dinero), donde el prestatario (mutuario) adquiere la propiedad y se obliga a restituir otro tanto de la misma especie y calidad."
    },
    {
        id: 74,
        area: "Derecho Penal",
        pregunta: "¿Qué establece el principio de 'Legalidad Penal' consagrado en el artículo 14 de la Constitución mexicana?",
        opciones: [
            "A) Queda prohibida la aplicación retroactiva de la ley en perjuicio de persona alguna, y en los juicios del orden criminal queda prohibido imponer, por simple analogía y aún por mayoría de razón, pena alguna que no esté decretada por una ley exactamente aplicable al delito de que se trata (Nullum crimen, nulla poena sine lege)",
            "B) Los jueces pueden aplicar penas discrecionales según su criterio moral",
            "C) Toda detención ministerial puede prolongarse hasta 30 días sin control judicial",
            "D) Las leyes penales pueden crearse después de cometido el hecho delictivo"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio de legalidad penal prohíbe la retroactividad perjudicial y la analogía o mayoría de razón en la imposición de penas, exigiendo ley previa, cierta y exacta (nullum crimen sine lege)."
    },
    {
        id: 75,
        area: "Derecho Procesal Penal",
        pregunta: "¿Qué es un 'Acuerdo Reparatorio' en el sistema penal acusatorio mexicano?",
        opciones: [
            "A) Una sentencia condenatoria dictada en procedimiento abreviado",
            "B) Aquellos celebrados entre la víctima u ofendido y el imputado que, una vez aprobados por el Ministerio Público o el juez de control y cumplidos, extienden la acción penal, procediendo en delitos culposos, patrimonios sin violencia o de querella",
            "C) El pago de multas fiscales a la tesorería del estado",
            "D) Un convenio laboral de finiquito ante la junta de conciliación"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los acuerdos reparatorios son mecanismos alternativos de solución de controversias que extinguen la acción penal mediante el consenso sobre la reparación del daño en delitos no graves."
    },
    {
        id: 76,
        area: "Derecho Mercantil",
        pregunta: "¿Qué es el 'Quebranto' o suspensión de pagos en los títulos de crédito y qué figura procede para su cobro judicial?",
        opciones: [
            "A) El uso del Juicio Ejecutivo Mercantil mediante el cual se demanda el pago inmediato y se embargan bienes precautoriamente",
            "B) La condonación judicial automática de la deuda",
            "C) La conversión obligatoria del pagaré en acciones bursátiles",
            "D) La prescripción de la acción cambiaria en 30 días naturales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Ante el incumplimiento de pago de un título de crédito ejecutivo, procede la vía ejecutiva mercantil para lograr el embargo coactivo inmediato de bienes del suscriptor."
    },
    {
        id: 77,
        area: "Derecho Constitucional",
        pregunta: "¿Qué es el 'Juicio Político' y ante qué órganos del Estado se sustancia conforme a la Constitución mexicana?",
        opciones: [
            "A) Un procedimiento de carácter político-institucional tramitado ante la Cámara de Diputados (como órgano de acusación) y el Senado de la República (como órgano de sentencia o jurado de sentencia)",
            "B) Un juicio penal ordinario tramitado ante juzgados de distrito",
            "C) La destitución de ministros de la SCJN por el Presidente de la República",
            "D) Un recurso administrativo ante la Auditoría Superior de la Federación"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El juicio político (artículos 109 y 110 CPEUM) se sustancia de manera bicameral: la Cámara de Diputados acusa y el Senado resuelve sobre la responsabilidad oficial y las sanciones consecuentes."
    },
    {
        id: 78,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es un 'Contrato Administrativo' y en qué se diferencia de un contrato civil?",
        opciones: [
            "A) Es aquel celebrado entre la administración pública y un particular con el objeto de asegurar la satisfacción de un servicio o interés público, caracterizándose por contener cláusulas exorbitantes de derecho público a favor del Estado",
            "B) Es un acuerdo exclusivamente entre dos particulares sin intervención estatal",
            "C) Es un contrato civil ordinario sujeto al Código Civil Federal sin privilegios",
            "D) Es un pacto verbal informal entre funcionarios públicos"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los contratos administrativos se distinguen de los civiles por la presencia del Estado y la inclusión de cláusulas exorbitantes (prerrogativas de modificación o rescisión unilateral por interés público)."
    },
    {
        id: 79,
        area: "Derecho Procesal Civil",
        pregunta: "¿Cuáles son las fases procesales esenciales que componen un Juicio Ordinario Civil tipo en México?",
        opciones: [
            "A) Demanda, emplazamiento, contestación de demanda, ofrecimiento y desahogo de pruebas, alegatos y sentencia definitiva",
            "B) Audiencia única de conciliación y ejecución inmediata de bienes",
            "C) Denuncia ministerial, vinculación a proceso y juicio oral penal",
            "D) Recurso de revocación y laudo arbitral definitivo"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El juicio ordinario civil clásico se integra de fases estructuradas: postulatoria (demanda, contestación), probatoria (ofrecimiento y desahogo), preconclusiva (alegatos) y decisoria (sentencia)."
    },
    {
        id: 80,
        area: "Derecho Internacional Público",
        pregunta: "¿Cuáles son las fuentes principales del Derecho Internacional Público enumeradas en el artículo 38 del Estatuto de la Corte Internacional de Justicia?",
        opciones: [
            "A) Los tratados internacionales, la costumbre internacional y los principios generales de derecho reconocidos por las naciones civilizadas",
            "B) Las leyes secundarias del Congreso de la Unión y los reglamentos municipales",
            "C) Las sentencias de tribunales civiles locales y contratos mercantiles",
            "D) Las opiniones de directores de policía internacional"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 38 del Estatuto de la CIJ enlista las fuentes formales clásicas del derecho internacional público: tratados, costumbre internacional y principios generales de derecho (además de la doctrina y jurisprudencia como auxiliares)."
    },
    {
        id: 81,
        area: "Derecho Constitucional",
        pregunta: "¿Qué mayoría calificada se requiere en la Cámara de Diputados y en el Senado de la República para aprobar reformas a la Constitución Política de los Estados Unidos Mexicanos (artículo 135)?",
        opciones: [
            "A) El voto de las dos terceras partes de los individuos presentes en cada Cámara, y la aprobación de la mayoría de las legislaturas de los Estados",
            "B) Mayoría simple del 50% más uno en sesión conjunta obligatoria",
            "C) Unanimidad absoluta de todos los legisladores en funciones sin excepciones",
            "D) Aprobación directa del Presidente de la República y ratificación judicial de la Suprema Corte"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 135 constitucional exige un procedimiento reforzado: aprobación por dos terceras partes de los miembros presentes del Congreso de la Unión y la posterior ratificación por la mayoría de las legislaturas estatales."
    },
    {
        id: 82,
        area: "Derecho Penal",
        pregunta: "En la teoría del concurso de delitos, ¿cómo se define el 'Concurso Ideal' (o formal)?",
        opciones: [
            "A) Cuando con una sola conducta se cometen varios delitos distintos",
            "B) Cuando se ejecutan diversos hechos independientes, cada uno constitutivo de un delito diferente",
            "C) Cuando un solo delito se prolonga en el tiempo por voluntad continuada del agente",
            "D) Cuando participan múltiples coautores materiales en un solo delito instantáneo"
        ],
        respuestaCorrecta: 1, // B (Wait, index 1 is B, but option A is index 0. Let's make sure the correct one matches responseCorrecta).
        // Option A is index 0. Let's adjust responseCorrecta to 0 for option A.
        // Let's rewrite options so the correct one aligns with index 1 (B) or whatever we want, or keep responseCorrecta: 0 for option A.
    },
    {
        id: 82,
        area: "Derecho Penal",
        pregunta: "En la teoría del concurso de delitos, ¿cómo se define el 'Concurso Ideal' (o formal)?",
        opciones: [
            "A) Cuando con una sola conducta se cometen varios delitos",
            "B) Cuando se ejecutan diversos hechos independientes, cada uno constitutivo de un delito",
            "C) Cuando un solo delito se prolonga en el tiempo por voluntad continuada",
            "D) Cuando participan múltiples coautores materiales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El concurso ideal o formal de delitos se presenta cuando mediante una sola conducta (acción u omisión) se infringen varias disposiciones penales distintas."
    },
    {
        id: 83,
        area: "Derecho Civil",
        pregunta: "¿Qué efectos jurídicos produce la figura de la 'Fianza' en el derecho civil mexicano?",
        opciones: [
            "A) Transmite la propiedad de bienes inmuebles en garantía solidaria",
            "B) Extingue automáticamente la deuda principal por novación",
            "C) Es un contrato por el cual una persona se compromete con el acreedor a pagar por el deudor, si este no lo hace, gozando generalmente de los beneficios de orden y exclusión",
            "D) Es un título de crédito negociable mediante endoso bancario"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La fianza civil es un contrato accesorio de garantía donde el fiador se obliga subsidiariamente al pago si el deudor principal incumple, teniendo derecho a los beneficios de orden y exclusión."
    },
    {
        id: 84,
        area: "Derecho Mercantil",
        pregunta: "Conforme a la Ley General de Títulos y Operaciones de Crédito, ¿qué efectos produce la inserción de la cláusula 'no negociable' en un cheque?",
        opciones: [
            "A) Obliga a que el cheque sea pagado exclusivamente mediante abono en cuenta bancaria a favor del beneficiario, impidiendo su libre transmisión por endoso",
            "B) Anula por completo la validez del título cambiario",
            "C) Convierte el cheque en un pagaré a la orden pagadero a un año",
            "D) Exime al librador de cualquier responsabilidad penal o civil"
        ],
        respuestaCorrecta: 3, // D (Wait, index 3 is D. Option A is index 0. Let's put the correct one at index 3 or adjust).
        // Let's make option D the correct one:
        // A) Anula la validez del título cambiario
        // B) Convierte el cheque en un pagaré a la orden
        // C) Exime al librador de responsabilidad
        // D) Obliga a que el cheque sea pagado exclusivamente mediante abono en cuenta bancaria a favor del beneficiario, impidiendo su libre transmisión por endoso
        // responseCorrecta: 3
    },
    {
        id: 84,
        area: "Derecho Mercantil",
        pregunta: "Conforme a la Ley General de Títulos y Operaciones de Crédito, ¿qué efectos produce la inserción de la cláusula 'no negociable' en un cheque?",
        opciones: [
            "A) Anula por completo la validez del título cambiario",
            "B) Convierte el cheque en un pagaré a la orden pagadero a un año",
            "C) Exime al librador de cualquier responsabilidad penal o civil",
            "D) Obliga a que el cheque sea pagado exclusivamente mediante abono en cuenta bancaria a favor del beneficiario, impidiendo su libre transmisión por endoso"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El artículo 254 de la LGTOC establece que los cheques con la cláusula 'no negociable' solo pueden cobrarse mediante abono en cuenta, restringiendo su transmisión por endoso."
    },
    {
        id: 85,
        area: "Derecho Laboral",
        pregunta: "¿Qué objeto persigue legalmente el estallamiento de una 'Huelga' conforme a la Ley Federal del Trabajo?",
        opciones: [
            "A) Conseguir el equilibrio entre los factores de la producción, armonizando los derechos del trabajo con los del capital, y obtener del patrón la celebración o revisión del contrato colectivo",
            "B) Solicitar la renuncia inmediata e inhabilitación penal de los directivos de la empresa",
            "C) Obligar al gobierno federal a condonar los impuestos corporativos de la planta",
            "D) Suspender las labores indefinidamente sin previo emplazamiento ante el tribunal"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 450 de la LFT define taxativamente los objetivos legales de la huelga: equilibrar factores de producción, exigir la celebración o revisión del CCT, exigir el reparto de utilidades, etc."
    },
    {
        id: 86,
        area: "Derecho Administrativo",
        pregunta: "¿Cuáles son las causas de nulidad de un acto administrativo previstas en la Ley Federal de Procedimiento Contencioso Administrativo?",
        opciones: [
            "A) La simple discrecionalidad del funcionario emisor",
            "B) La incompetencia del órgano, la omisión de requisitos formales esenciales, los vicios del procedimiento, el dolo o error en la motivación, y la contravención a las leyes aplicables",
            "C) El retraso de 24 horas en la notificación por mensajería",
            "D) La falta de sello oficial de agua en el papel bond"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 51 de la LFPCA enlista las causas de ilegalidad que conducen a la nulidad lisa y llana o para efectos del acto administrativo (incompetencia, vicios de forma, desviación de poder, etc.)."
    },
    {
        id: 87,
        area: "Derecho Fiscal",
        pregunta: "¿Qué facultades comprende la 'Revisión de Gabinete' que realiza la autoridad fiscal (SAT) a los contribuyentes?",
        opciones: [
            "A) El embargo preventivo inmediato de todos los bienes raíces del contribuyente sin previo oficio",
            "B) La visita domiciliaria inopinada con agentes armados en las oficinas del corporativo",
            "C) La solicitud mediante oficio de la contabilidad, datos, informes o documentos al contribuyente para ser revisados directamente en las oficinas de la propia autoridad",
            "D) La auditoría exclusiva de cuentas bancarias en el extranjero sin autorización judicial"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La revisión de gabinete es una facultad de comprobación donde el SAT requiere por escrito al contribuyente la entrega de su contabilidad en las oficinas de la administración desconcentrada."
    },
    {
        id: 88,
        area: "Derecho Procesal Civil",
        pregunta: "En el ofrecimiento de pruebas dentro del juicio civil, ¿cómo se valora legalmente la 'Prueba Confesional' rendida por las partes?",
        opciones: [
            "A) Carece de valor probatorio si no está respaldada por testigos presenciales",
            "B) Es una prueba tasada o legal; la confesión expresa de hechos propios hecha por persona capaz obliga al juez a tenerlos por ciertos (plena prueba)",
            "C) Queda a la libre apreciación y prudente arbitrio del juzgador sin restricciones",
            "D) Solo tiene valor si se realiza mediante peritaje caligráfico"
        ],
        respuestaCorrecta: 3, // D (Wait, index 3 is D. Let's make option D the correct one or adjust responseCorrecta).
        // Let's rewrite options so option D is correct:
        // A) Carece de valor probatorio
        // B) Queda a la libre apreciación del juez
        // C) Solo tiene valor si se realiza mediante peritaje
        // D) Es una prueba tasada; la confesión expresa de hechos propios hecha por persona capaz obliga al juez a tenerlos por ciertos (plena prueba)
        // responseCorrecta: 3
    },
    {
        id: 88,
        area: "Derecho Procesal Civil",
        pregunta: "En el ofrecimiento de pruebas dentro del juicio civil, ¿cómo se valora legalmente la 'Prueba Confesional' rendida por las partes?",
        opciones: [
            "A) Carece de valor probatorio si no está respaldada por testigos presenciales",
            "B) Queda a la libre apreciación y prudente arbitrio del juzgador sin restricciones",
            "C) Solo tiene valor si se realiza mediante peritaje caligráfico",
            "D) Es una prueba tasada o legal; la confesión expresa de hechos propios hecha por persona capaz obliga al juez a tenerlos por ciertos (plena prueba)"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La confesional judicial expresa sobre hechos propios realizada por persona con capacidad constituye prueba plena conforme a las reglas procesales civiles tradicionales."
    },
    {
        id: 89,
        area: "Derecho Procesal Penal",
        pregunta: "¿Qué es el 'Procedimiento Abreviado' en el sistema penal acusatorio mexicano?",
        opciones: [
            "A) Una forma de terminación anticipada del proceso penal, solicitada por el Ministerio Público, donde el imputado reconoce los hechos de la acusación, aceptando ser juzgado con base en los datos de la investigación a cambio de una reducción de pena",
            "B) Un juicio oral completo sin derecho a asistencia legal",
            "C) La suspensión del proceso a prueba por falta de elementos",
            "D) Un recurso de apelación simplificado ante magistrados"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El procedimiento abreviado es un mecanismo de simplificación procesal donde se prescinde del juicio oral si el imputado acepta los cargos y los antecedentes de investigación del MP, obteniendo beneficios punitivos."
    },
    {
        id: 90,
        area: "Derecho de Amparo",
        pregunta: "De conformidad con la Ley de Amparo, ¿cuándo opera el 'Sobreseimiento' en el juicio constitucional?",
        opciones: [
            "A) Cuando se concede el amparo definitivo al quejoso con efectos plenos",
            "B) Cuando concurren causas legales que impiden al juez federal entrar al estudio de fondo del asunto (ej. desistimiento, muerte del quejoso sin agravio transmisible, cesación de efectos o aparición de causal de improcedencia)",
            "C) Cuando la autoridad responsable acata voluntariamente el acto reclamado antes de la demanda",
            "D) Cuando se dicta sentencia condenatoria en materia penal ordinaria"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El sobreseimiento es una resolución que pone fin al juicio de amparo sin resolver la cuestión de constitucionalidad de fondo, debido a sobrevenir una causal de improcedencia o desistimiento."
    },
    {
        id: 91,
        area: "Derecho Internacional Público",
        pregunta: "¿Qué es la 'Extradición' en las relaciones internacionales y qué principios constitucionales limitan su concesión en México?",
        opciones: [
            "A) La deportación masiva de migrantes indocumentados por motivos fiscales",
            "B) El proceso diplomático-judicial mediante el cual un Estado entrega a una persona requerida por otro Estado para ser juzgada o cumplir condena, limitándose constitucionalmente por la prohibición de entregar reos políticos, esclavos o personas sujetas a pena de muerte",
            "C) El intercambio comercial de mercancías prohibidas en aduanas",
            "D) El derecho de asilo diplomático en embajadas extranjeras"
        ],
        respuestaCorrecta: 2, // C (Wait, option B is index 1. Let's make sure responseCorrecta is 1 for option B).
        // Let's set responseCorrecta: 1.
    },
    {
        id: 91,
        area: "Derecho Internacional Público",
        pregunta: "¿Qué es la 'Extradición' y qué principios constitucionales limitan su concesión en México?",
        opciones: [
            "A) La deportación masiva de migrantes indocumentados por motivos fiscales",
            "B) El proceso mediante el cual un Estado entrega a una persona requerida por otro Estado para ser juzgada o cumplir condena, limitándose por la prohibición constitucional de entregar reos políticos o personas con pena de muerte",
            "C) El intercambio comercial de mercancías prohibidas",
            "D) El derecho de asilo diplomático en embajadas"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 119 de la Constitución regula la extradición internacional, prohibiendo expresamente entregar a reos políticos y a personas cuya pena máxima incluya la muerte o tortura."
    },
    {
        id: 92,
        area: "Derecho Civil (Bienes)",
        pregunta: "¿Qué es la 'Copropiedad' en el derecho civil y cuáles son las características de las partes alícuotas?",
        opciones: [
            "A) Una sociedad mercantil de responsabilidad limitada",
            "B) La división material estricta de un terreno en lotes independientes",
            "C) El contrato de arrendamiento compartido entre estudiantes",
            "D) La situación jurídica en que una cosa o derecho pertenece proindiviso a varias personas, donde cada condueño tiene plena propiedad de su parte alícuota y de sus frutos correspondientes"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Hay copropiedad cuando una cosa o derecho pertenece proindiviso a varias personas. Cada copropietario posee una cuota ideal (parte alícuota) sobre la totalidad de la cosa."
    },
    {
        id: 93,
        area: "Derecho Penal",
        pregunta: "¿En qué consiste la causa de inculpabilidad denominada 'Error de Prohibición Vencible'?",
        opciones: [
            "A) Cuando el sujeto activo actúa creyendo erróneamente que su conducta está amparada por una causa de justificación, pero el error pudo evitarse con la diligencia debida, atenuándose la pena por delito culposo",
            "B) Cuando el reo padece demencia senil total al momento de los hechos",
            "C) Cuando el delito prescribe antes de la consignación ministerial",
            "D) Cuando el juez comete una equivocación aritmética al sumar la pena"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El error de prohibición vencible ocurre cuando el autor no sabe que su conducta es antijurídica, pero pudo y debió haberlo sabido aplicando el cuidado debido; esto elimina el dolo pero subsiste la culpa."
    },
    {
        id: 94,
        area: "Derecho Mercantil",
        pregunta: "¿Cuáles son las características principales de la Sociedad de Responsabilidad Limitada (S. de R.L.)?",
        opciones: [
            "A) Su capital está representado por acciones negociables en bolsa de valores",
            "B) Se constituye entre socios que solamente están obligados al pago de sus aportaciones en partes sociales, sin que las partes sociales puedan estar representadas por títulos negociables",
            "C) Los socios responden ilimitadamente con su patrimonio personal por las deudas sociales",
            "D) Requiere obligatoriamente un capital social mínimo de diez millones de pesos"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La S. de R.L. se integra por partes sociales no negociables en títulos bursátiles, limitando la responsabilidad de los socios al monto de su aportación social."
    },
    {
        id: 95,
        area: "Derecho del Trabajo",
        pregunta: "¿Cómo se define legalmente un 'Riesgo de Trabajo' (accidentes y enfermedades de trabajo) según la Ley Federal del Trabajo?",
        opciones: [
            "A) Cualquier daño corporal sufrido por el trabajador fuera de su horario laboral",
            "B) Los conflictos sindicales por huelga patronal",
            "C) Los accidentes y enfermedades a que están expuestos los trabajadores en ejercicio o con motivo de su trabajo",
            "D) Las renuncias voluntarias por estrés emocional en oficinas"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 473 de la LFT define los riesgos de trabajo como los accidentes y enfermedades a que están expuestos los trabajadores en ejercicio o con motivo de sus labores."
    },
    {
        id: 96,
        area: "Derecho de Amparo",
        pregunta: "¿Ante qué órgano jurisdiccional federal se interpone el Juicio de Amparo Directo (unipersonal)?",
        opciones: [
            "A) Ante la Suprema Corte de Justicia de la Nación en Pleno directamente",
            "B) Ante los Juzgados de Distrito especializados en materia penal",
            "C) Ante el Tribunal Superior de Justicia del Estado",
            "D) Ante los Tribunales Colegiados de Circuito correspondientes por conducto de la autoridad responsable que emitió la sentencia definitiva"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El amparo directo se promueve por conducto de la autoridad responsable (el tribunal que emitió el laudo o sentencia definitiva impugnada) para que sea resuelto por un Tribunal Colegiado de Circuito."
    },
    {
        id: 97,
        area: "Derecho Procesal Civil",
        pregunta: "¿Qué es el 'Recurso de Apelación' en el proceso civil?",
        opciones: [
            "A) El medio de impugnación ordinario mediante el cual el tribunal superior (segunda instancia) reexamina la resolución dictada por el juez de primera instancia, a solicitud de parte agraviada, para confirmarla, revocarla o modificarla",
            "B) Una demanda nueva presentada ante jueces federales contra sentencias firmes",
            "C) Un trámite administrativo ante la notaría pública",
            "D) La solicitud de aclaración de sentencia por errores aritméticos oscuros"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La apelación es el recurso ordinario por excelencia para la revisión de resoluciones de primera instancia ante un tribunal de segundo grado (alzada)."
    },
    {
        id: 98,
        area: "Derecho Administrativo",
        pregunta: "¿Qué objeto persigue la Ley General de Responsabilidades Administrativas respecto al servicio público?",
        opciones: [
            "A) Fijar los salarios máximos de los secretarios de estado",
            "B) Investigar, substanciar y sancionar las faltas administrativas graves y no graves cometidas por los servidores públicos, así como los actos de particulares vinculados con faltas graves (corrupción)",
            "C) Otorgar contratos de obra pública sin licitación",
            "D) Regular los partidos políticos nacionales"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La LGRA es la columna vertebral del Sistema Nacional Anticorrupción, estableciendo las faltas administrativas graves, no graves y los mecanismos de sanción a servidores y particulares."
    },
    {
        id: 99,
        area: "Derecho Fiscal",
        pregunta: "¿Qué diferencia jurídica existe entre una 'Infracción Fiscal' y un 'Delito Fiscal'?",
        opciones: [
            "A) La infracción es una violación a normas tributarias que se sanciona administrativamente con multa pecuniaria por la autoridad recaudadora, mientras que el delito fiscal constituye una conducta típica, antijurídica y culpable sancionada con pena privativa de libertad por un juez penal",
            "B) Son exactamente lo mismo, solo cambia el nombre del tribunal",
            "C) La infracción amerita cárcel obligatoria y el delito solo recargos",
            "D) Los delitos fiscales los resuelve el IMSS y las infracciones el Banco de México"
        ],
        respuestaCorrecta: 2, // C (Wait, option A is index 0. Let's make sure responseCorrecta is 0 for option A).
        // Let's set responseCorrecta: 0.
    },
    {
        id: 99,
        area: "Derecho Fiscal",
        pregunta: "¿Qué diferencia jurídica existe entre una 'Infracción Fiscal' y un 'Delito Fiscal'?",
        opciones: [
            "A) La infracción es una violación a normas tributarias sancionada administrativamente con multa por el fisco, mientras que el delito fiscal constituye una conducta típica y culpable sancionada con pena privativa de libertad por un juez penal",
            "B) Son exactamente lo mismo, solo cambia el nombre",
            "C) La infracción amerita cárcel obligatoria",
            "D) Los delitos fiscales los resuelve el IMSS"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las infracciones fiscales se castigan por la vía administrativa con multas o clausuras; los delitos fiscales (como contrabando o defraudación fiscal calificada) requieren persecución penal ante jueces federales."
    },
    {
        id: 100,
        area: "Derecho Civil (Sucesiones)",
        pregunta: "¿Cuál es el orden de exclusión en la Sucesión Legítima (intestamentaria) conforme al Código Civil Federal mexicano?",
        opciones: [
            "A) Los acreedores alimentarios y beneficencia pública en primer término",
            "B) Los hermanos y colaterales hasta el cuarto grado",
            "C) Los amigos cercanos designados por el juez familiar",
            "D) Los descendientes (hijos), cónyuge o concubino, ascendientes (padres), colaterales y la beneficencia pública en defecto de todos"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El Código Civil establece el orden sucesorio intestamentario: primero los descendientes junto con el cónyuge/concubino, a falta de ellos los ascendientes, luego colaterales, y finalmente la beneficencia pública."
    },
    {
        id: 101,
        area: "Derecho Penal",
        pregunta: "¿Qué es la 'Imputabilidad' en la teoría de la culpabilidad penal?",
        opciones: [
            "A) La capacidad de entender y querer en el campo del derecho penal (madurez psíquica y salud mental suficiente para comprender la antijuridicidad de la conducta)",
            "B) La obligación del Ministerio Público de presentar testigos falsos",
            "C) El pago de la reparación del daño en efectivo",
            "D) La reincidencia en delitos del fuero federal"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La imputabilidad es el presupuesto psicológico de la culpabilidad: capacidad de comprensión y autodeterminación del autor al momento de cometer el hecho típico."
    },
    {
        id: 102,
        area: "Derecho Mercantil",
        pregunta: "¿Cuáles son las dos etapas procesales fundamentales en que se divide el procedimiento de Concurso Mercantil?",
        opciones: [
            "A) Sentencia de quiebra y liquidación bancaria directa",
            "B) Etapa de Conciliación (para lograr un convenio con acreedores) y Etapa de Quiebra (para la venta y liquidación ordenada de activos)",
            "C) Demanda incidental y arbitraje internacional",
            "D) Conciliación laboral y huelga mercantil"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Ley de Concursos Mercantiles divide el procedimiento en dos fases sucesivas: la visita y etapa de conciliación (conservación de empresa) y, en su caso, la declaración de quiebra (venta de activos)."
    },
    {
        id: 103,
        area: "Derecho Constitucional",
        pregunta: "Conforme al artículo 73 de la Constitución mexicana, ¿cuál es una de las facultades exclusivas del Congreso de la Unión?",
        opciones: [
            "A) Ratificar los nombramientos de embajadores y cónsules generales",
            "B) Otorgar el perdón presidencial a reos del fuero común",
            "C) Legislar en toda la República sobre hidrocarburos, minería, comercio, instituciones de crédito y expedir leyes generales en materia de salud, educación y secuestro",
            "D) Resolver controversias constitucionales entre municipios"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El artículo 73 de la CPEUM detalla las facultades explícitas del Congreso de la Unión para legislar en materias federales y expedir leyes generales concurrentes."
    },
    {
        id: 104,
        area: "Derecho del Trabajo",
        pregunta: "¿Qué prestaciones e indemnizaciones adicionales corresponden a un trabajador que sufre una incapacidad permanente total derivada de un riesgo de trabajo?",
        opciones: [
            "A) Únicamente la devolución de cuotas del Infonavit",
            "B) Una carta de recomendación firmada por el sindicato",
            "C) Tres días de salario por año laborado",
            "D) La indemnización calculada conforme a la tabla de valuación de incapacidades de la LFT y el pago de pensión correspondiente por el IMSS"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los riesgos de trabajo incapacitantes otorgan derecho a indemnización económica tasada en la LFT y prestaciones de seguridad social (pensión por incapacidad permanente total) a cargo del IMSS."
    },
    {
        id: 105,
        area: "Derecho de Amparo",
        pregunta: "¿Qué medidas de apremio y sanciones puede imponer el juez de distrito para lograr el cumplimiento de una ejecutoria de amparo cuando la autoridad responsable es contumaz?",
        opciones: [
            "A) Requerimiento con apercibimiento de multa, destitución del cargo y consignación penal ante un juez de distrito por el delito de incumplimiento de sentencia de amparo",
            "B) Exclusivamente una llamada de atención verbal en privado",
            "C) Embargo de las cuentas bancarias personales del Presidente de la República",
            "D) Despido laboral sin responsabilidad para el sindicato"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 107 constitucional y la Ley de Amparo prevén un riguroso sistema de ejecución que incluye multas, separación del cargo y consignación penal de la autoridad contumaz."
    },
    {
        id: 106,
        area: "Derecho Procesal Penal",
        pregunta: "¿Qué establece la regla constitucional de la 'Prueba Ilícita' en el sistema penal mexicano (artículo 14 y 20 constitucional)?",
        opciones: [
            "A) Toda prueba obtenida con violación a derechos humanos es nula de pleno derecho y carece de valor probatorio",
            "B) Las pruebas ilegales pueden convalidarse si el juez las considera útiles para condenar",
            "C) Solo aplica para delitos fiscales corporativos",
            "D) Queda a discreción del fiscal decidir si la desecha o la presenta"
        ],
        respuestaCorrecta: 1, // B (Wait, option A is index 0. Let's set responseCorrecta: 0 for option A).
    },
    {
        id: 106,
        area: "Derecho Procesal Penal",
        pregunta: "¿Qué establece la regla constitucional de la 'Prueba Ilícita' en el sistema penal mexicano (artículo 14 y 20 constitucional)?",
        opciones: [
            "A) Toda prueba obtenida con violación a derechos humanos es nula de pleno derecho y carece de valor probatorio",
            "B) Las pruebas ilegales pueden convalidarse si el juez las considera útiles",
            "C) Solo aplica para delitos fiscales corporativos",
            "D) Queda a discreción del fiscal decidir su validez"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 20, apartado A, fracción IX de la CPEUM consagra la nulidad de cualquier prueba obtenida con violación a derechos fundamentales (teoría del fruto del árbol envenenado)."
    },
    {
        id: 107,
        area: "Derecho Civil (Contratos)",
        pregunta: "¿Cuáles son las obligaciones principales del arrendador en un contrato de arrendamiento de fincas urbanas habitacionales?",
        opciones: [
            "A) Pagar los servicios de luz y agua consumidos por el arrendatario",
            "B) Traspasar la propiedad del inmueble al inquilino al tercer año",
            "C) Entregar la cosa arrendada en buen estado para el uso convenido, conservarla en ese estado durante el arrendamiento haciendo las reparaciones necesarias, y garantizar el uso pacífico",
            "D) Exigir el pago anticipado de 5 años de renta sin contrato escrito"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El arrendador tiene el deber fundamental de entregar el bien en condiciones de uso, realizar las reparaciones necesarias para mantenerlo habitable y garantizar el goce pacífico al arrendatario."
    },
    {
        id: 108,
        area: "Derecho Administrativo",
        pregunta: "¿Cuáles son los requisitos de validez esenciales que debe contener todo acto administrativo en México?",
        opciones: [
            "A) Firma autógrafa de ministros de la suprema corte y sello de oro",
            "B) Ser emitido por autoridad competente, tener objeto lícito, fundado y motivado, constar por escrito y perseguir el interés público",
            "C) Estar redactado en idioma inglés para comercio internacional",
            "D) Haber sido aprobado por referéndum popular obligatorio"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Ley Federal de Procedimiento Administrativo enumera los elementos de validez: competencia, objeto, forma escrita, fundamentación, motivación y finalidad de interés público."
    },
    {
        id: 109,
        area: "Derecho Internacional Privado",
        pregunta: "¿Qué es el 'Exequátur' en el derecho internacional privado mexicano?",
        opciones: [
            "A) El procedimiento judicial mediante el cual los tribunales nacionales reconocen y otorgan fuerza ejecutiva a una sentencia dictada por un tribunal extranjero",
            "B) El impuesto aduanero a la importación de tecnología",
            "C) La visa diplomática expedida por cancillería",
            "D) El tratado de extradición bilateral entre dos naciones"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El exequátur es el procedimiento de homologación ante tribunales mexicanos para que una sentencia extranjera adquiera fuerza de ejecución en territorio nacional."
    },
    {
        id: 110,
        area: "Derecho Fiscal",
        pregunta: "¿Cómo se define jurídicamente un 'Crédito Fiscal' conforme al artículo 4o. del Código Fiscal de la Federación?",
        opciones: [
            "A) Un préstamo bancario otorgado por la Secretaría de Hacienda",
            "B) Toda aquella obligación fiscal que el Estado tenga derecho a percibir, incluyendo contribuciones, accesorios (recargos, multas, indemnizaciones) y aprovechamientos",
            "C) Los bonos de deuda pública colocados en la bolsa de valores",
            "D) El saldo a favor solicitado en devolución por el contribuyente"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El artículo 4 del CFF define con amplitud el crédito fiscal como toda suma que el Estado tiene derecho a cobrar por concepto de impuestos, derechos, contribuciones de mejoras, accesorios y aprovechamientos."
    },
    {
        id: 111,
        area: "Derecho Constitucional (Electoral)",
        pregunta: "¿Qué son los 'Derechos Político-Electorales' consagrados en el artículo 35 de la Constitución mexicana?",
        opciones: [
            "A) El derecho de votar, ser votado, asociarse libremente para tomar parte en los asuntos políticos del país, afiliarse a partidos y participar en consultas populares",
            "B) El derecho de ocupar cargos administrativos de confianza sin concurso",
            "C) La prerrogativa de no pagar impuestos si se ejerce el voto",
            "D) La inmunidad procesal penal para candidatos presidenciales"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El artículo 35 constitucional enumera las prerrogativas de la ciudadanía mexicana, destacando el sufragio activo y pasivo, la afiliación política, la iniciativa popular y las consultas populares."
    },
    {
        id: 112,
        area: "Derecho Mercantil",
        pregunta: "¿Qué es el contrato de 'Comisión Mercantil'?",
        opciones: [
            "A) Un contrato de trabajo subordinado para gerentes de ventas",
            "B) La compraventa internacional de acciones bursátiles",
            "C) El mandato aplicado a actos concretos de comercio, en el que el comisionista desempeña por cuenta del comitente mandatos mercantiles",
            "D) La constitución notarial de una sociedad anónima promotora de inversión"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La comisión mercantil (regulada por el Código de Comercio) es un mandato comercial donde el comisionista actúa en nombre propio o del comitente realizando operaciones mercantiles por encargo."
    },
    {
        id: 113,
        area: "Derecho Penal",
        pregunta: "¿En qué consiste la figura del 'Delito Continuado'?",
        opciones: [
            "A) Cuando con pluralidad de acciones y unidad de propósito delictivo, se viola el mismo precepto legal en ejecución de un plan preconcebido",
            "B) Cuando un delincuente reincide tras cumplir una sentencia de prisión",
            "C) Cuando el delito se comete de forma culposa durante varios días",
            "D) Cuando intervienen múltiples cómplices encubridores"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El delito continuado se integra por múltiples actos parciales que infringen la misma norma jurídica bajo una misma resolución criminal unitaria, tratándose jurídicamente como un solo delito."
    },
    {
        id: 114,
        area: "Derecho Civil (Familia)",
        pregunta: "¿Qué características patrimoniales tiene el régimen de 'Sociedad Conyugal' en el matrimonio civil?",
        opciones: [
            "A) Los cónyuges conservan la propiedad exclusiva de todos sus bienes presentes y futuros sin mezclarlos jamás",
            "B) Se forma y administra un fondo patrimonial común compuesto por los bienes adquiridos durante el matrimonio por cualquiera de los cónyuges, los cuales se repartirán al disolverse la sociedad conforme a las capitulaciones matrimoniales",
            "C) Todos los bienes personales anteriores al matrimonio pasan a ser propiedad del Estado",
            "D) Ninguno de los cónyuges puede administrar bienes raíces sin autorización judicial"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La sociedad conyugal implica la formación de un patrimonio común (o parcial según capitulaciones) integrado por las adquisiciones hechas durante el matrimonio, el cual se liquida al disolverse el vínculo."
    },
    {
        id: 115,
        area: "Derecho Procesal Civil",
        pregunta: "¿Cuáles son los requisitos formales esenciales que debe contener una Sentencia Definitiva en materia civil?",
        opciones: [
            "A) El nombre del notario público que dio fe del contrato original",
            "B) La autorización expresa del Congreso local",
            "C) El preámbulo o resultandos (identificación de partes y litigio), los considerandos (razonamientos jurídicos y valoración de pruebas) y los resolutivos (condena o absolución clara y precisa)",
            "D) La firma autógrafa obligatoria de los peritos en grafoscopia"
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Toda sentencia civil debe cumplir con la estructura lógica tripartita: resultandos (historial procesal), considerandos (fundamentación y motivación) y puntos resolutivos (decisión clara)."
    },
    {
        id: 116,
        area: "Derecho del Trabajo",
        pregunta: "Conforme a la reforma laboral en México, ¿qué órganos jurisdiccionales son los competentes actualmente para conocer y resolver los conflictos individuales y colectivos entre trabajadores y patrones?",
        opciones: [
            "A) Las Juntas Locales y Federales de Conciliación y Arbitraje",
            "B) Las presidencias municipales y sindicatos de barrio",
            "C) Las notarías públicas de adscripción federal",
            "D) Los Tribunales Laborales dependientes del Poder Judicial (Federal o Local), previa etapa obligatoria de conciliación prejudicial ante Centros de Conciliación"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Con la reforma al sistema de justicia laboral, las antiguas Juntas de Conciliación y Arbitraje fueron sustituidas por Tribunales Laborales pertenecientes al Poder Judicial, con una fase previa de conciliación obligatoria."
    },
    {
        id: 117,
        area: "Derecho Administrativo",
        pregunta: "¿Qué es el 'Servicio Profesional de Carrera' en la administración pública federal?",
        opciones: [
            "A) Un sistema de gestión de recursos humanos basado en el mérito, la igualdad de oportunidades y la profesionalización para garantizar la estabilidad y eficacia en el desempeño de los cargos públicos",
            "B) El pase automático a la jubilación dorada de altos funcionarios",
            "C) Un contrato civil por honorarios profesionales renovable cada mes",
            "D) El sindicato exclusivo de trabajadores manuales del estado"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El servicio profesional de carrera busca profesionalizar el servicio público mediante ingreso y ascenso por concursos de oposición basados en el mérito técnico."
    },
    {
        id: 118,
        area: "Derecho de Amparo",
        pregunta: "¿Quién es el 'Tercero Interesado' en el juicio de amparo (artículo 5, fracción III de la Ley de Amparo)?",
        opciones: [
            "A) El juez de distrito que emitió la resolución recurrida",
            "B) La persona que tiene un interés jurídico en que subsista el acto reclamado (contraparte del quejoso, beneficiario de la resolución, etc.), teniendo derecho a apersonarse al juicio y ofrecer pruebas",
            "C) El agente del Ministerio Público Federal en funciones de fiscalía",
            "D) Cualquier ciudadano con interés genérico en la ley"
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El tercero interesado es la contraparte del quejoso o quien resulte beneficiado por el acto de autoridad reclamado, siendo parte legítima en el juicio de amparo para defender sus derechos."
    },
    {
        id: 119,
        area: "Derecho Penal",
        pregunta: "¿Cómo opera la 'Prescripción de la Acción Penal' en los delitos ordinarios?",
        opciones: [
            "A) Extingue la facultad del Estado para perseguir e investigar el delito por el transcurso del tiempo fijado en la ley (el cual se calcula por regla general conforme a la pena máxima del delito)",
            "B) Ocurre en un plazo fijo e invariable de 30 días para cualquier delito",
            "C) Suspende únicamente los derechos políticos del imputado",
            "D) Convierte el delito penal en un adeudo mercantil civil"
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La prescripción de la acción penal es una causa de extinción de la pretensión punitiva del Estado que opera por el transcurso del tiempo establecido legalmente, atendiendo a la gravedad de la pena del ilícito."
    },
    {
        id: 120,
        area: "Derecho Constitucional",
        pregunta: "Conforme al artículo 76 de la Constitución mexicana, ¿cuál es una de las facultades exclusivas de la Cámara de Senadores?",
        opciones: [
            "A) Iniciar leyes en materia de presupuesto y gasto público federal",
            "B) Aprobar anualmente el presupuesto de egresos de la federación",
            "C) Promover controversias constitucionales contra municipios",
            "D) Analizar la política exterior desarrollada por el Ejecutivo Federal, aprobar los tratados internacionales y ratificar los nombramientos diplomáticos y de ministros de la SCJN"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El artículo 76 enumera las facultades exclusivas del Senado de la República, destacando la política exterior, ratificación de nombramientos diplomáticos, mandos superiores y ministros de la Suprema Corte."
    }
];