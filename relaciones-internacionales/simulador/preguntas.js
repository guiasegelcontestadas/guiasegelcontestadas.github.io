const bancoPreguntas = [
    {
        id: 1,
        area: "Derecho Internacional Público",
        pregunta: "¿Cuál es la fuente del Derecho Internacional Público que establece normas aceptadas y reconocidas por la comunidad internacional de estados en su conjunto como norma que no admite acuerdo en contrario?",
        opciones: [
            "A) Los tratados internacionales multilaterales.",
            "B) La costumbre internacional general.",
            "C) El ius cogens (normas imperativas).",
            "D) Los principios generales del derecho."
        ],
        respuestaCorrecta: 2,
        explicacion: "El ius cogens se refiere a normas imperativas de derecho internacional general aceptadas por la comunidad internacional como normas que no admiten acuerdo en contrario, según la Convención de Viena sobre el Derecho de los Tratados."
    },
    {
        id: 2,
        area: "Derecho Internacional Público",
        pregunta: "De acuerdo con el artículo 38 del Estatuto de la Corte Internacional de Justicia, ¿cuál de los siguientes se considera un medio auxiliar para la determinación de las reglas de derecho?",
        opciones: [
            "A) Las convenciones internacionales.",
            "B) La costumbre internacional.",
            "C) Las decisiones judiciales y la doctrina.",
            "D) Los actos unilaterales de los Estados."
        ],
        respuestaCorrecta: 2,
        explicacion: "El artículo 38.1.d establece que las decisiones judiciales y las doctrinas de los publicistas de mayor competencia de las distintas naciones son medios auxiliares para la determinación de las reglas de derecho."
    },
    {
        id: 3,
        area: "Derecho Internacional Público",
        pregunta: "¿Cómo se denomina al acto jurídico unilateral por el cual un Estado hace saber su intención de no quedar obligado por las disposiciones de un tratado internacional?",
        opciones: [
            "A) Denuncia.",
            "B) Reserva.",
            "C) Ratificación.",
            "D) Objeción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una reserva es una declaración unilateral, cualquiera que sea su enunciado o denominación, hecha por un Estado al firmar, ratificar, aceptar o aprobar un tratado, con el objeto de excluir o modificar los efectos jurídicos de ciertas disposiciones del tratado."
    },
    {
        id: 4,
        area: "Derecho Internacional Público",
        pregunta: "¿Qué principio del derecho del mar garantiza que ningún Estado puede pretender legítimamente someter ninguna parte de alta mar a su soberanía?",
        opciones: [
            "A) Principio de la libertad de alta mar.",
            "B) Principio del patrimonio común de la humanidad.",
            "C) Principio de soberanía territorial adyacente.",
            "D) Principio de zona económica exclusiva."
        ],
        respuestaCorrecta: 0,
        explicacion: "La alta mar está abierta a todos los estados, sean ribereños o sin litoral. La libertad de alta mar se ejerce en las condiciones fijadas por la Convención de las Naciones Unidas sobre el Derecho del Mar (CONVEMAR) y otras normas de derecho internacional."
    },
    {
        id: 5,
        area: "Derecho Internacional Público",
        pregunta: "Institución del derecho diplomático que otorga inmunidad de jurisdicción penal, civil y administrativa al agente diplomático en el Estado receptor:",
        opciones: [
            "A) Asilo diplomático.",
            "B) Inviolabilidad de la valija.",
            "C) Inmunidad diplomática.",
            "D) Extradición."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Convención de Viena sobre Relaciones Diplomáticas de 1961 establece la inmunidad de jurisdicción del agente diplomático en el Estado receptor, protegiéndole de procesos legales bajo ciertas condiciones para garantizar el ejercicio de sus funciones."
    },
    {
        id: 6,
        area: "Derecho Internacional Público",
        pregunta: "¿Cuál es la diferencia fundamental entre el asilo territorial y el asilo diplomático?",
        opciones: [
            "A) El territorial se otorga en embajadas y el diplomático en territorio del Estado.",
            "B) El diplomático se otorga en misiones diplomáticas y el territorial en el territorio del Estado que lo concede.",
            "C) El territorial requiere la aprobación del Consejo de Seguridad y el diplomático no.",
            "D) No existe diferencia jurídica, son sinónimos en la práctica internacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "El asilo diplomático se solicita y concede en misiones diplomáticas, buques o aeronaves de guerra; mientras que el asilo territorial se otorga dentro de las fronteras terrestres del Estado que decide proteger al individuo perseguido."
    },
    {
        id: 7,
        area: "Derecho Internacional Público",
        pregunta: "Órgano judicial principal de la Organización de las Naciones Unidas, con sede en La Haya, encargado de decidir conforme al derecho internacional las controversias que le sean sometidas por los Estados:",
        opciones: [
            "A) Corte Penal Internacional.",
            "B) Tribunal Internacional del Derecho del Mar.",
            "C) Corte Internacional de Justicia.",
            "D) Tribunal Permanente de Arbitraje."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Corte Internacional de Justicia (CIJ) es el principal órgano judicial de la ONU, establecido en 1945 por la Carta de las Naciones Unidas."
    },
    {
        id: 8,
        area: "Derecho Internacional Público",
        pregunta: "Principio fundamental del derecho internacional que prohíbe el uso de la fuerza contra la integridad territorial o la independencia política de cualquier Estado:",
        opciones: [
            "A) Principio de no intervención.",
            "B) Principio de prohibición de la amenaza o el uso de la fuerza.",
            "C) Principio de solución pacífica de controversias.",
            "D) Principio de autodeterminación."
        ],
        respuestaCorrecta: 1,
        explicacion: "El artículo 2, párrafo 4 de la Carta de la ONU consagra la prohibición general del uso y la amenaza de la fuerza en las relaciones internacionales."
    },
    {
        id: 9,
        area: "Derecho Internacional Público",
        pregunta: "¿Cómo se denomina al proceso mediante el cual un Estado acepta formalmente la supremacía y obligatoriedad de un tratado internacional previamente firmado por sus plenipotenciarios?",
        opciones: [
            "A) Negociación.",
            "B) Firma ad referendum.",
            "C) Ratificación.",
            "D) Promulgación."
        ],
        respuestaCorrecta: 2,
        explicacion: "La ratificación es el acto internacional mediante el cual un Estado manifiesta en el ámbito internacional su consentimiento en obligarse por un tratado."
    },
    {
        id: 10,
        area: "Derecho Internacional Público",
        pregunta: "Doctrina latinoamericana que establece que los extranjeros no deben gozar de privilegios superiores a los de los nacionales del país donde se encuentran:",
        opciones: [
            "A) Doctrina Monroe.",
            "B) Doctrina Calvo.",
            "C) Doctrina Drago.",
            "D) Doctrina Estrada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Carlos Calvo propuso que las controversias relativas a los extranjeros deben ser resueltas por los tribunales locales del Estado receptor, sin recurrir a la protección diplomática o intervenciones armadas."
    },
    {
        id: 11,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Escuela teórica de las Relaciones Internacionales que sostiene que el sistema internacional es anárquico, los Estados son los actores principales y buscan maximizar su poder o seguridad:",
        opciones: [
            "A) Liberalismo.",
            "B) Constructivismo.",
            "C) Realismo.",
            "D) Marxismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "El realismo (tanto clásico como estructural/neorealismo) postula que la anarquía internacional obliga a los Estados a priorizar la seguridad, el poder y la supervivencia."
    },
    {
        id: 12,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Concepto del neoliberalismo institucional que explica cómo la creación de organizaciones y regímenes internacionales reduce los costos de transacción y facilita la cooperación entre Estados:",
        opciones: [
            "A) Interdependencia compleja.",
            "B) Institucionalismo racional.",
            "C) Seguridad colectiva.",
            "D) Hegemonía pacífica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El institucionalismo racional (o neoliberalismo) argumenta que las instituciones internacionales mitigan los efectos de la anarquía al proveer información, reducir costos de transacción y vigilar el cumplimiento de acuerdos."
    },
    {
        id: 13,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "¿Qué corriente teórica pone énfasis en el papel de las ideas, las normas, la identidad y la cultura en la construcción social de la realidad internacional?",
        opciones: [
            "A) Realismo ofensivo.",
            "B) Teoría de la dependencia.",
            "C) Constructivismo.",
            "D) Neorealismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "El constructivismo argumenta que las estructuras de la política mundial están determinadas principalmente por ideas compartidas, cultura y normas sociales, más que puramente por fuerzas materiales."
    },
    {
        id: 14,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Teoría crítica desarrollada por autores como Raúl Prebisch y Fernando Henrique Cardoso que analiza las relaciones de intercambio desigual entre el 'Centro' y la 'Periferia':",
        opciones: [
            "A) Teoría de la Dependencia.",
            "B) Teoría de la Estabilidad Hegemónica.",
            "C) Realismo Periférico.",
            "D) Teoría de la Transición de Poder."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Teoría de la Dependencia sostiene que la economía mundial está estructurada de forma que beneficia a los países industrializados (Centro) en detrimento de los países en desarrollo (Periferia)."
    },
    {
        id: 15,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Autor clave del neorealismo o realismo estructural que formuló la teoría de la política internacional basada en la distribución de capacidades bajo la anarquía:",
        opciones: [
            "A) Hans Morgenthau.",
            "B) Kenneth Waltz.",
            "C) Robert Keohane.",
            "D) Alexander Wendt."
        ],
        respuestaCorrecta: 1,
        explicacion: "Kenneth Waltz publicó 'Theory of International Politics' en 1979, estableciendo las bases del neorealismo estructural."
    },
    {
        id: 16,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Concepto de Robert Keohane y Joseph Nye que describe un sistema mundial caracterizado por múltiples canales de conexión entre sociedades, ausencia de jerarquía entre temas y menor uso de la fuerza militar:",
        opciones: [
            "A) Globalización financiera.",
            "B) Interdependencia compleja.",
            "C) Gobernanza global.",
            "D) Sociedad internacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "La interdependencia compleja es el concepto central del liberalismo moderno propuesto por Keohane y Nye para explicar las relaciones transnacionales contemporáneas."
    },
    {
        id: 17,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Corriente teórica que examina cómo las estructuras de género dominantes perpetúan las desigualdades y la violencia en la política global y la seguridad:",
        opciones: [
            "A) Marxismo analítico.",
            "B) Feminismo en relaciones internacionales.",
            "C) Posmodernismo crítico.",
            "D) Escuela de Copenhague."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las teorías feministas en RRII analizan cómo el género influye en la guerra, la economía global, la diplomacia y los conceptos tradicionales de seguridad."
    },
    {
        id: 18,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "¿Qué postula la teoría de la Paz Democrática dentro de la corriente liberal?",
        opciones: [
            "A) Las democracias gastan más en defensa que los regímenes autoritarios.",
            "B) Las democracias raramente o nunca libran guerras entre sí.",
            "C) La democracia es la única forma legítima de gobierno en el sistema internacional.",
            "D) Las democracias promueven el libre comercio sin regulaciones estatales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La teoría de la paz democrática sostiene empíricamente que, aunque las democracias hacen la guerra contra Estados autocráticos, no entran en conflictos armados directos entre democracias."
    },
    {
        id: 19,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Escuela teórica fundada por Hedley Bull que enfatiza que los Estados forman una 'sociedad' regida por normas, reglas e instituciones compartidas, a pesar de la anarquía:",
        opciones: [
            "A) Escuela Inglesa.",
            "B) Escuela de Frankfurt.",
            "C) Escuela de Copenhague.",
            "D) Escuela de París."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Escuela Inglesa (o de la Sociedad Internacional) se sitúa entre el realismo y el liberalismo, enfocándose en la 'sociedad de estados'."
    },
    {
        id: 20,
        area: "Teoría de las Relaciones Internacionales",
        pregunta: "Concepto acuñado por la Escuela de Copenhague (Buzan et al.) que amplía el estudio más allá de la seguridad militar hacia ámbitos como el ambiental, económico, social y político:",
        opciones: [
            "A) Seguridad Humana.",
            "B) Securitización.",
            "C) Disuasión nuclear.",
            "D) Cooperación descentralizada."
        ],
        respuestaCorrecta: 1,
        explicacion: "La securitización es el proceso mediante el cual un tema es presentado como una amenaza existencial que requiere medidas extraordinarias fuera de la política ordinaria."
    },
    {
        id: 21,
        area: "Economía Política Internacional",
        pregunta: "¿Qué corriente de la Economía Política Internacional defiende que los mercados deben operar sin interferencia estatal y promueve el libre comercio global?",
        opciones: [
            "A) Mercantilismo.",
            "B) Liberalismo económico.",
            "C) Estructuralismo.",
            "D) Nacionalismo económico."
        ],
        respuestaCorrecta: 1,
        explicacion: "El liberalismo económico sostiene que el libre mercado, la propiedad privada y la mínima intervención del Estado maximizan la eficiencia económica global y el bienestar."
    },
    {
        id: 22,
        area: "Economía Política Internacional",
        pregunta: "Organismo financiero internacional creado en Bretton Woods en 1944 con el mandato original de financiar la reconstrucción de posguerra y, posteriormente, el desarrollo económico de los países miembros:",
        opciones: [
            "A) Fondo Monetario Internacional.",
            "B) Organización Mundial del Comercio.",
            "C) Banco Mundial (BIRF).",
            "D) Banco Interamericano de Desarrollo."
        ],
        respuestaCorrecta: 2,
        explicacion: "El Banco Mundial (cuyo núcleo inicial fue el Banco Internacional de Reconstrucción y Fomento) se estableció en los acuerdos de Bretton Woods para financiar proyectos de desarrollo."
    },
    {
        id: 23,
        area: "Economía Política Internacional",
        pregunta: "¿Cuál es la función principal del Fondo Monetario Internacional (FMI) en la arquitectura financiera global?",
        opciones: [
            "A) Regular el comercio de mercancías y resolver disputas arancelarias.",
            "B) Proveer asistencia financiera a países con crisis en su balanza de pagos.",
            "C) Emitir moneda única mundial y fijar tasas de interés globales.",
            "D) Otorgar créditos preferenciales a fondo perdido para erradicar la pobreza."
        ],
        respuestaCorrecta: 1,
        explicacion: "El FMI supervisa el sistema financiero internacional y otorga préstamos a corto plazo a países miembros que enfrentan graves problemas de balanza de pagos."
    },
    {
        id: 24,
        area: "Economía Política Internacional",
        pregunta: "Organización internacional que sustituyó al GATT en 1995 y actúa como foro para la negociación de acuerdos comerciales multilaterales y la solución de diferencias:",
        opciones: [
            "A) UNCTAD.",
            "B) OMC.",
            "C) OCDE.",
            "D) OIT."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Organización Mundial del Comercio (OMC) fue establecida por los Acuerdos de Marrakech en 1994, reemplazando formalmente al Acuerdo General sobre Aranceles Aduaneros y Comercio (GATT)."
    },
    {
        id: 25,
        area: "Economía Política Internacional",
        pregunta: "¿Qué principio fundamental de la OMC estipula que un miembro debe otorgar a todos los demás socios comerciales el mismo trato arancelario y comercial favorable que al socio más favorecido?",
        opciones: [
            "A) Trato nacional.",
            "B) Principio de reciprocidad.",
            "C) Nación más favorecida (NMF).",
            "D) Transparencia comercial."
        ],
        respuestaCorrecta: 2,
        explicacion: "El principio de la Nación Más Favorecida (NMF), contenido en el Artículo I del GATT/OMC, prohíbe la discriminación comercial entre los socios miembros."
    },
    {
        id: 26,
        area: "Economía Política Internacional",
        pregunta: "Fase de la integración económica regional en la que los países miembros eliminan aranceles internos y adoptan un arancel externo común frente a terceros países:",
        opciones: [
            "A) Área de Libre Comercio.",
            "B) Unión Aduanera.",
            "C) Mercado Común.",
            "D) Unión Económica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Una unión aduanera combina una zona de libre comercio (eliminación de aranceles internos) con un Arancel Externo Común (AEC) frente a terceros."
    },
    {
        id: 27,
        area: "Economía Política Internacional",
        pregunta: "¿Qué corriente teórica de la EPI argumenta que la economía debe estar subordinada a los intereses nacionales y a la acumulación de poder político del Estado?",
        opciones: [
            "A) Marxismo.",
            "B) Neoliberalismo.",
            "C) Mercantilismo (o Nacionalismo Económico).",
            "D) Institucionalismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "El mercantilismo sostiene que la riqueza y el poder están profundamente entrelazados; el Estado debe intervenir para acumular excedentes y proteger industrias estratégicas."
    },
    {
        id: 28,
        area: "Economía Política Internacional",
        pregunta: "Término económico que describe la inversión realizada por una empresa en operaciones comerciales o productivas en otro país, adquiriendo un control duradero o participación significativa:",
        opciones: [
            "A) Inversión Extranjera de Cartera (IEC).",
            "B) Inversión Extranjera Directa (IED).",
            "C) Especulación financiera internacional.",
            "D) Préstamo soberano sindicado."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Inversión Extranjera Directa (IED) implica un interés duradero y control gerencial (típicamente 10% o más de acciones con derecho a voto) en una empresa residente en otra economía."
    },
    {
        id: 29,
        area: "Economía Política Internacional",
        pregunta: "¿Cuál es la principal característica de un 'Mercado Común' en comparación con una 'Unión Aduanera'?",
        opciones: [
            "A) La libre circulación de bienes y servicios.",
            "B) La adopción de una moneda única.",
            "C) La libre movilidad de factores de producción (trabajo y capital).",
            "D) La unificación de las políticas fiscales y presupuestarias."
        ],
        respuestaCorrecta: 2,
        explicacion: "Además de las ventajas de la unión aduanera, el mercado común añade la libre circulación de factores productivos (trabajo y capital) entre los países miembros."
    },
    {
        id: 30,
        area: "Economía Política Internacional",
        pregunta: "Indicador macroeconómico internacional que mide el valor total de mercado de todos los bienes y servicios finales producidos por los factores de producción nacionales, sin importar si operan dentro o fuera del territorio del país:",
        opciones: [
            "A) Producto Interno Bruto (PIB).",
            "B) Producto Nacional Bruto (PNB).",
            "C) Ingreso Nacional Neto.",
            "D) Paridad de Poder Adquisitivo (PPA)."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Producto Nacional Bruto (PNB) mide la producción generada por los factores propiedad de los nacionales de un país, a diferencia del PIB, que mide la producción dentro de las fronteras geográficas."
    },
    {
        id: 31,
        area: "Política Exterior de México",
        pregunta: "Conjunto de principios de política exterior consagrados en el artículo 89, fracción X, de la Constitución Política de los Estados Unidos Mexicanos, EXCEPTO:",
        opciones: [
            "A) La autodeterminación de los pueblos.",
            "B) La no intervención y la solución pacífica de controversias.",
            "C) La proscripción de la amenaza o el uso de la fuerza en las relaciones internacionales.",
            "D) La intervención humanitaria multilateral obligatoria."
        ],
        respuestaCorrecta: 3,
        explicacion: "La Constitución mexicana prohíbe expresamente la intervención y defiende la no intervención; la 'intervención humanitaria' obligatoria no forma parte de los principios constitucionales de México (Doctrina Carranza/Constitucional)."
    },
    {
        id: 32,
        area: "Política Exterior de México",
        pregunta: "¿Cómo se conoce a la doctrina de política exterior mexicana caracterizada por no otorgar ni negar reconocimiento a gobiernos surgidos de golpes de estado, limitándose a mantener o retirar a sus representantes diplomáticos?",
        opciones: [
            "A) Doctrina Carranza.",
            "B) Doctrina Estrada.",
            "C) Doctrina Castañeda.",
            "D) Doctrina Juarez."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Doctrina Estrada, formulada en 1930 por Genaro Estrada, sostiene que México no debe evaluar la legitimidad de gobiernos extranjeros para evitar juzgar los asuntos internos de otros Estados."
    },
    {
        id: 33,
        area: "Política Exterior de México",
        pregunta: "¿Qué órgano del Estado mexicano tiene la facultad exclusiva de analizar la política exterior presentada por el Ejecutivo Federal, así como aprobar los tratados internacionales y convenciones diplomáticas?",
        opciones: [
            "A) La Cámara de Diputados.",
            "B) La Suprema Corte de Justicia de la Nación.",
            "C) El Senado de la República.",
            "D) La Secretaría de Gobernación."
        ],
        respuestaCorrecta: 2,
        explicacion: "De acuerdo con el artículo 76, fracción I, de la Constitución mexicana, el Senado tiene la facultad exclusiva de analizar la política exterior y aprobar los tratados internacionales."
    },
    {
        id: 34,
        area: "Política Exterior de México",
        pregunta: "Tratado de libre comercio que entró en vigor el 1 de enero de 1994, integrando comercialmente a México con América del Norte, y que fue modernizado como T-MEC en 2020:",
        opciones: [
            "A) ALADI.",
            "B) TLCAN.",
            "C) APEC.",
            "D) Alianza del Pacífico."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Tratado de Libre Comercio de América del Norte (TLCAN / NAFTA) entró en vigor en 1994 entre México, Estados Unidos y Canadá, siendo sustituido posteriormente por el T-MEC."
    },
    {
        id: 35,
        area: "Política Exterior de México",
        pregunta: "Mecanismo de integración regional profunda creado en 2011 e integrado por México, Colombia, Perú y Chile:",
        opciones: [
            "A) MERCOSUR.",
            "B) SICA.",
            "C) Alianza del Pacífico.",
            "D) CELAC."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Alianza del Pacífico es una iniciativa de integración regional conformada por Chile, Colombia, México y Perú, orientada a la libre circulación de bienes, servicios, capitales y personas."
    },
    {
        id: 36,
        area: "Política Exterior de México",
        pregunta: "¿En qué año se firmó el Tratado de Tlatelolco, promovido activamente por la diplomacia mexicana (Alfonso García Robles), que proscribe las armas nucleares en América Latina y el Caribe?",
        opciones: [
            "A) 1945",
            "B) 1967",
            "C) 1982",
            "D) 1991"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Tratado para la Proscripción de Armas Nucleares en América Latina y el Caribe (Tratado de Tlatelolco) se firmó en 1967, lo que valió a Alfonso García Robles el Premio Nobel de la Paz en 1982."
    },
    {
        id: 37,
        area: "Política Exterior de México",
        pregunta: "¿Qué dependencia del Gobierno Federal mexicano es la encargada de la conducción de la política exterior y de dirigir el Servicio Exterior Mexicano (SEM)?",
        opciones: [
            "A) Secretaría de Economía.",
            "B) Secretaría de Gobernación.",
            "C) Secretaría de Relaciones Exteriores.",
            "D) Agencia Mexicana de Cooperación Internacional para el Desarrollo."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Secretaría de Relaciones Exteriores (SRE) es el ministerio de asuntos exteriores de México, encargado de formular y conducir la política exterior del país."
    },
    {
        id: 38,
        area: "Política Exterior de México",
        pregunta: "Postura tradicional de la política exterior mexicana que busca diversificar sus relaciones económicas y políticas para reducir la dependencia asimétrica respecto a una sola potencia:",
        opciones: [
            "A) Doctrina Monroe.",
            "B) Política de diversificación comercial y diplomática.",
            "C) Alineamiento automático con potencias occidentales.",
            "D) Aislamiento internacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Históricamente, México ha impulsado la diversificación para no depender exclusivamente del mercado y la influencia de Estados Unidos."
    },
    {
        id: 39,
        area: "Política Exterior de México",
        pregunta: "¿Qué nombre recibe el cuerpo de funcionarios profesionales del Estado mexicano encargados de representar al país en el extranjero y ejecutar la política exterior?",
        opciones: [
            "A) Cuerpo Diplomático Consular.",
            "B) Servicio Exterior Mexicano (SEM).",
            "C) Agencia de Inteligencia Nacional.",
            "D) Cuerpo de Agregados Militares."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Servicio Exterior Mexicano (SEM) es el cuerpo de funcionarios del Estado encargado de representarlo en el extranjero, integrado por las ramas diplomática y consular."
    },
    {
        id: 40,
        area: "Política Exterior de México",
        pregunta: "Organización regional de la cual México es miembro fundador (1948), cuyo propósito es consolidar la democracia, la paz y la seguridad en el continente americano:",
        opciones: [
            "A) Organización de los Estados Americanos (OEA).",
            "B) Comunidad Andina.",
            "C) Parlamento Latinoamericano.",
            "D) Tratado Interamericano de Asistencia Recíproca (exclusivo)."
        ],
        respuestaCorrecta: 0,
        explicacion: "México es miembro fundador de la Organización de los Estados Americanos (OEA), creada en 1948 en la IX Conferencia Internacional Americana en Bogotá."
    },
    {
        id: 41,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "¿Cuáles son los cinco miembros permanentes con derecho a veto en el Consejo de Seguridad de la Organización de las Naciones Unidas?",
        opciones: [
            "A) Alemania, Brasil, India, Japón y Sudáfrica.",
            "B) Estados Unidos, Rusia, China, Reino Unido y Francia.",
            "C) Estados Unidos, Canadá, México, Reino Unido y Australia.",
            "D) China, India, Rusia, Japón y la Unión Europea."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los cinco miembros permanentes del Consejo de Seguridad de la ONU (P5) son China, Estados Unidos, la Federación Rusa, Francia y el Reino Unido."
    },
    {
        id: 42,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "Organización internacional especializada de la ONU encargada de formular normas internacionales de salud y coordinar respuestas ante pandemias sanitarias globales:",
        opciones: [
            "A) UNICEF.",
            "B) UNESCO.",
            "C) Organización Mundial de la Salud (OMS).",
            "D) FAO."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Organización Mundial de la Salud (OMS), establecida en 1948, es el organismo directivo y coordinador de la salud internacional dentro del sistema de las Naciones Unidas."
    },
    {
        id: 43,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "¿Qué órgano principal de la ONU tiene la función de discutir y hacer recomendaciones sobre cualquier asunto dentro del ámbito de la Carta, integrando a todos los Estados miembros en pie de igualdad (un país, un voto)?",
        opciones: [
            "A) Consejo de Seguridad.",
            "B) Consejo Económico y Social.",
            "C) Asamblea General.",
            "D) Secretaría General."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Asamblea General de la ONU es el órgano deliberativo principal, donde todos los 193 Estados miembros tienen representación igualitaria."
    },
    {
        id: 44,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "Tratado internacional multilateral adoptado en 2015 bajo el marco de la CMNUCC, cuyo objetivo central es limitar el aumento de la temperatura global muy por debajo de 2 °C respecto a los niveles preindustriales:",
        opciones: [
            "A) Protocolo de Kioto.",
            "B) Acuerdo de París.",
            "C) Protocolo de Montreal.",
            "D) Convención de Estocolmo."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Acuerdo de París de 2015 es un tratado jurídicamente vinculante sobre el cambio climático adoptado en la COP21."
    },
    {
        id: 45,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "Conjunto de 17 objetivos globales adoptados por la ONU en 2015 en la Agenda 2030 para erradicar la pobreza, proteger el planeta y asegurar la prosperidad:",
        opciones: [
            "A) Objetivos de Desarrollo del Milenio (ODM).",
            "B) Objetivos de Desarrollo Sostenible (ODS).",
            "C) Metas de Kioto.",
            "D) Consenso de Washington."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los Objetivos de Desarrollo Sostenible (ODS) forman parte de la Agenda 2030 para el desarrollo sostenible aprobada por la Asamblea General de la ONU."
    },
    {
        id: 46,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "¿Qué tribunal internacional con sede en La Haya tiene jurisdicción para juzgar a individuos por crímenes de genocidio, de lesa humanidad, de guerra y de agresión?",
        opciones: [
            "A) Corte Internacional de Justicia (CIJ).",
            "B) Corte Penal Internacional (CPI).",
            "C) Tribunal Europeo de Derechos Humanos.",
            "D) Corte Interamericana de Derechos Humanos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Corte Penal Internacional (CPI), establecida por el Estatuto de Roma en 1998, juzga a personas (individuos) por los crímenes más graves de trascendencia internacional."
    },
    {
        id: 47,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "Agencia especializada de la ONU con sede en París, cuyo mandato es contribuir a la paz y a la seguridad promoviendo la colaboración internacional en educación, ciencia, cultura y comunicación:",
        opciones: [
            "A) UNICEF.",
            "B) OIT.",
            "C) UNESCO.",
            "D) PNUMA."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) fue fundada en 1945 con el fin de contribuir a la paz mediante la cooperación educativa, científica y cultural."
    },
    {
        id: 48,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "¿Cómo se denominan las operaciones de mantenimiento de la paz de la ONU que despliegan personal militar y civil con el consentimiento de las partes en conflicto para pacificar zonas en crisis?",
        opciones: [
            "A) Ciberpatrullajes.",
            "B) Cascos Azules (Operaciones de Mantenimiento de la Paz).",
            "C) Fuerzas de Intervención Rápida de la OTAN.",
            "D) Coaliciones Voluntarias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las operaciones de mantenimiento de la paz de la ONU, cuyos integrantes usan cascos o boinas azules, actúan bajo mandato del Consejo de Seguridad para ayudar a crear condiciones para la paz duradera."
    },
    {
        id: 49,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "Organización político-militar intergubernamental basada en el Tratado del Atlántico Norte de 1949, que establece la defensa colectiva mutua entre sus miembros:",
        opciones: [
            "A) Tratado de Varsovia.",
            "B) OTAN.",
            "C) ANZUS.",
            "D) OSCE."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Organización del Tratado del Atlántico Norte (OTAN) consagra en su Artículo 5 el principio de defensa colectiva: un ataque armado contra uno o más de sus miembros se considera un ataque contra todos."
    },
    {
        id: 50,
        area: "Organizaciones Internacionales y Gobernanza Global",
        pregunta: "¿Qué órgano principal del sistema de la ONU coordina la labor económica, social y ambiental de sus agencias especializadas y comisiones regionales?",
        opciones: [
            "A) Consejo de Seguridad.",
            "B) Consejo de Administración Fiduciaria.",
            "C) ECOSOC (Consejo Económico y Social).",
            "D) Tribunal Administrativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "El Consejo Económico y Social (ECOSOC) es el órgano central para el examen de las cuestiones de política económica, social y ambiental, y la formulación de recomendaciones."
    },
    {
        id: 51,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "Tipo de investigación en relaciones internacionales que busca explicar relaciones causales entre variables mediante la formulación y contraste empírico de hipótesis:",
        opciones: [
            "A) Investigación cualitativa interpretativa.",
            "B) Investigación cuantitativa / explicativa.",
            "C) Análisis de discurso crítico.",
            "D) Etnografía diplomática."
        ],
        respuestaCorrecta: 1,
        explicacion: "La investigación explicativa-cuantitativa busca establecer relaciones de causa y efecto mediante métodos estadísticos y el contraste empírico de hipótesis."
    },
    {
        id: 52,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "Técnica de análisis político que evalúa las fortalezas, debilidades, oportunidades y amenazas de una entidad o Estado ante un escenario geopolítico:",
        opciones: [
            "A) Análisis FODA (DAFO).",
            "B) Análisis de correlación de Pearson.",
            "C) Teoría de Juegos estáticos.",
            "D) Análisis de contenido hermenéutico."
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) es una herramienta de planeación estratégica aplicada también en diplomacia y análisis de política exterior."
    },
    {
        id: 53,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "Rama de la economía matemática y la teoría política que estudia las decisiones estratégicas en las que los actores interactúan y sus pagos dependen de las elecciones de los demás:",
        opciones: [
            "A) Teoría de Juegos.",
            "B) Análisis Costo-Beneficio.",
            "C) Economía Conductual.",
            "D) Estadísticas Inferenciales."
        ],
        respuestaCorrecta: 0,
        explicacion: "La teoría de juegos modela interacciones estratégicas entre actores racionales (como el dilema del prisionero en carreras armamentistas o negociaciones comerciales)."
    },
    {
        id: 54,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "¿Cómo se denomina al método de investigación cualitativa que analiza en profundidad un caso específico (un país, un conflicto, un tratado) dentro de su contexto real?",
        opciones: [
            "A) Estudio de caso (Case Study).",
            "B) Encuesta de opinión masiva.",
            "C) Análisis econométrico de series temporales.",
            "D) Simulación estocástica."
        ],
        respuestaCorrecta: 0,
        explicacion: "El estudio de caso es un método de investigación riguroso muy utilizado en relaciones internacionales para examinar fenómenos complejos en profundidad."
    },
    {
        id: 55,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "¿Qué técnica de análisis cualitativo examina sistemáticamente textos, discursos o documentos diplomáticos para identificar patrones temáticos e ideológicos?",
        opciones: [
            "A) Análisis de contenido.",
            "B) Regresión lineal múltiple.",
            "C) Análisis factorial exploratorio.",
            "D) Muestreo probabilístico aleatorio."
        ],
        respuestaCorrecta: 0,
        explicacion: "El análisis de contenido permite estudiar de manera sistemática y objetiva el contenido de comunicaciones escritas, discursos políticos o tratados."
    },
    {
        id: 56,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "En la investigación internacional, ¿qué es una variable independiente?",
        opciones: [
            "A) El fenómeno que se desea explicar (efecto).",
            "B) La causa supuesta que afecta o influye sobre otra variable.",
            "C) Una variable ajena que no se puede medir.",
            "D) El resultado final de un proceso de integración."
        ],
        respuestaCorrecta: 1,
        explicacion: "La variable independiente representa la causa o el factor explicativo que produce un cambio en la variable dependiente (el efecto)."
    },
    {
        id: 57,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "Herramienta analítica de previsión prospectiva utilizada para anticipar posibles futuros alternativos y preparar estrategias de política exterior:",
        opciones: [
            "A) Análisis de escenarios (Scenario Building).",
            "B) Censo demográfico retrospectivo.",
            "C) Auditoría contable internacional.",
            "D) Análisis histórico descriptivo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La construcción de escenarios permite a los tomadores de decisiones visualizar múltiples futuros plausibles y evaluar la robustez de las políticas públicas o exteriores."
    },
    {
        id: 58,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "¿Qué es el 'Dilema del Prisionero' aplicado a las relaciones internacionales dentro de la teoría de juegos?",
        opciones: [
            "A) Una situación en la que los estados cooperan siempre de forma altruista.",
            "B) Un escenario en el que la desconfianza mutua lleva a ambos actores a adoptar peores resultados que si hubieran cooperado.",
            "C) Un tratado de extradición entre potencias.",
            "D) La incapacidad de un estado para firmar tratados comerciales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El dilema del prisionero modela la trampa de la anarquía: aun cuando la cooperación beneficia a ambos, la falta de información y la tentación de traicionar llevan a la subcooperación o carrera armamentista."
    },
    {
        id: 59,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "¿Qué caracteriza al enfoque inductivo en la investigación de las relaciones internacionales?",
        opciones: [
            "A) Parte de teorías generales para deducir hipótesis específicas.",
            "B) Parte de la observación empírica de casos específicos para generar categorías y teorías generales.",
            "C) Utiliza exclusivamente modelos matemáticos y simulaciones informáticas.",
            "D) Rechaza por completo la recopilación de datos empíricos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El enfoque inductivo va de lo particular a lo general; a partir de datos empíricos y observaciones, el investigador construye patrones y teorías."
    },
    {
        id: 60,
        area: "Metodología de la Investigación y Análisis Político",
        pregunta: "Criterio metodológico que evalúa si un instrumento de investigación mide realmente lo que pretende medir:",
        opciones: [
            "A) Confiabilidad.",
            "B) Validez.",
            "C) Generalizabilidad.",
            "D) Objetividad estadística."
        ],
        respuestaCorrecta: 1,
        explicacion: "La validez se refiere al grado en que una prueba o instrumento mide con precisión el concepto teórico que se propone evaluar."
    },
    {
        id: 61,
        area: "Historia Diplomática y Mundial",
        pregunta: "Tratado firmado en 1648 que puso fin a la Guerra de los Treinta Años y consagró el principio de soberanía nacional y la estructura del Estado-Nación moderno:",
        opciones: [
            "A) Tratado de Utrecht.",
            "B) Paz de Westfalia.",
            "C) Congreso de Viena.",
            "D) Tratado de Versalles."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Paz de Westfalia (1648) es considerada el hito fundacional del sistema internacional moderno basado en estados soberanos e independientes libres de injerencia religiosa o imperial externa."
    },
    {
        id: 62,
        area: "Historia Diplomática y Mundial",
        pregunta: "Conferencia internacional celebrada entre 1814 y 1815 que rediseñó el mapa político de Europa tras las guerras napoleónicas, instaurando el 'Concierto Europeo':",
        opciones: [
            "A) Congreso de Berlín.",
            "B) Congreso de Viena.",
            "C) Conferencia de Yalta.",
            "D) Conferencia de Potsdam."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Congreso de Viena restableció el equilibrio de poder en Europa después de la derrota de Napoleón, inaugurando el sistema de congresos o Concierto Europeo."
    },
    {
        id: 63,
        area: "Historia Diplomática y Mundial",
        pregunta: "¿Cuál fue el tratado de paz firmado en 1919 que impuso severas reparaciones de guerra y restricciones militares a Alemania tras la Primera Guerra Mundial, creando además la Sociedad de Naciones?",
        opciones: [
            "A) Tratado de Frankfurt.",
            "B) Tratado de Versalles.",
            "C) Tratado de Trianon.",
            "D) Tratado de Brest-Litovsk."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Tratado de Versalles (1919) cerró formalmente el estado de guerra entre Alemania y las Potencias Aliadas, estableciendo condiciones punitivas y la fallida Sociedad de Naciones."
    },
    {
        id: 64,
        area: "Historia Diplomática y Mundial",
        pregunta: "Conferencia de la Segunda Guerra Mundial celebrada en febrero de 1945 donde Churchill, Roosevelt y Stalin acordaron la división de Alemania en zonas de ocupación y la creación de la ONU:",
        opciones: [
            "A) Conferencia de Teherán.",
            "B) Conferencia de Yalta.",
            "C) Conferencia de Potsdam.",
            "D) Conferencia de Bretton Woods."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Conferencia de Yalta (Crimea, 1945) delineó la arquitectura geopolítica de la posguerra europea y fijó las bases para la fundación de las Naciones Unidas."
    },
    {
        id: 65,
        area: "Historia Diplomática y Mundial",
        pregunta: "Doctrina de política exterior anunciada en 1947 por el presidente estadounidense Harry S. Truman cuyo propósito central era contener la expansión del comunismo soviético:",
        opciones: [
            "A) Doctrina Monroe.",
            "B) Doctrina Truman (Contención).",
            "C) Doctrina Brezhnev.",
            "D) Doctrina Hallstein."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Doctrina Truman estableció que Estados Unidos apoyaría a los pueblos libres que resistieran intentos de subyugación por minorías armadas o presiones exteriores, marcando el inicio formal de la política de contención durante la Guerra Fría."
    },
    {
        id: 66,
        area: "Historia Diplomática y Mundial",
        pregunta: "Programa de ayuda económica masiva implementado por Estados Unidos para la reconstrucción de Europa occidental tras la Segunda Guerra Mundial:",
        opciones: [
            "A) Plan Marshall (Programa de Recuperación Europea).",
            "B) Plan Molotov.",
            "C) Consenso de Washington.",
            "D) Alianza para el Progreso."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Plan Marshall (1948) inyectó más de 13 mil millones de dólares para reactivar las economías europeas devastadas y frenar el avance del comunismo."
    },
    {
        id: 67,
        area: "Historia Diplomática y Mundial",
        pregunta: "Crisis de la Guerra Fría ocurrida en octubre de 1962 motivada por el descubrimiento de misiles soviéticos en territorio americano, que puso al mundo al borde de una guerra nuclear:",
        opciones: [
            "A) Crisis del Canal de Suez.",
            "B) Crisis de los Misiles en Cuba.",
            "C) Bloqueo de Berlín.",
            "D) Guerra de Corea."
        ],
        respuestaCorrecta: 1,
        explicacion: "La crisis de los misiles de Cuba en 1962 fue el enfrentamiento más tenso entre Estados Unidos y la Unión Soviética durante la Guerra Fría."
    },
    {
        id: 68,
        area: "Historia Diplomática y Mundial",
        pregunta: "Proceso de reformas políticas y económicas (Glasnost y Perestroika) impulsado por Mijaíl Gorbachov en la URSS que condujo indirectamente al colapso del bloque soviético:",
        opciones: [
            "A) Desestalinización.",
            "B) Doctrina Sinatra.",
            "C) Perestroika y Glasnost.",
            "D) Coexistencia pacífica."
        ],
        respuestaCorrecta: 2,
        explicacion: "Perestroika (reestructuración económica) y Glasnost (transparencia política) fueron las reformas emblemáticas de Gorbachov a finales de los años ochenta."
    },
    {
        id: 69,
        area: "Historia Diplomática y Mundial",
        pregunta: "Evento simbólico y político de 1989 que marcó el fin de la división de Europa en bloques antagónicos y anticipó la disolución de la Unión Soviética:",
        opciones: [
            "A) La caída del Muro de Berlín.",
            "B) La firma del Tratado de Maastricht.",
            "C) La disolución del Pacto de Varsovia.",
            "D) La crisis del petróleo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La caída del Muro de Berlín el 9 de noviembre de 1989 simbolizó el colapso del bloque oriental y el fin de la Guerra Fría."
    },
    {
        id: 70,
        area: "Historia Diplomática y Mundial",
        pregunta: "Conferencia de 1884-1885 que reguló la colonización y el comercio europeo en África, conocida formalmente como el reparto colonial del continente africano:",
        opciones: [
            "A) Conferencia de Berlín.",
            "B) Conferencia de Algeciras.",
            "C) Congreso de Viena.",
            "D) Tratado de Tordesillas."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Conferencia de Berlín (1884-1885) fijó las reglas para la ocupación efectiva del territorio africano por las potencias europeas, desatando el 'Scramble for Africa'."
    },
    {
        id: 71,
        area: "Geopolítica y Geografía Política",
        pregunta: "Teoría geopolítica clásica formulada por Halford Mackinder que sostiene que quien controle el 'Heartland' (Corazón Continental de Eurasia) dominará la Isla-Mundo y el mundo entero:",
        opciones: [
            "A) Teoría del Rimland (Spykman).",
            "B) Teoría del Heartland (Mackinder).",
            "C) Poder Naval (Mahan).",
            "D) Teoría de los Flujos Globales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Mackinder propuso en 1904 que la zona central de Eurasia (el Heartland) era la fortaleza geográfica clave del poder global debido a su inaccesibilidad naval y vastos recursos."
    },
    {
        id: 72,
        area: "Geopolítica y Geografía Política",
        pregunta: "Contraria a Mackinder, la teoría geopolítica de Nicholas Spykman argumentaba que la clave para el dominio mundial no era el Heartland, sino la zona periférica marítima y terrestre conocida como:",
        opciones: [
            "A) El Rimland (Tierras Marginales).",
            "B) El Heartland extendido.",
            "C) La Cuenca del Pacífico.",
            "D) Las rutas árticas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Spykman reformuló la geopolítica con su famosa máxima: 'Quien gobierna el Rimland domina Eurasia; quien domina Eurasia controla los destinos del mundo'."
    },
    {
        id: 73,
        area: "Geopolítica y Geografía Política",
        pregunta: "Estrecho marítimo internacional localizado entre la península de Malaca y Sumatra, considerado uno de los puntos de estrangulamiento (chokepoint) más críticos para el comercio petrolero mundial:",
        opciones: [
            "A) Estrecho de Ormuz.",
            "B) Estrecho de Malaca.",
            "C) Estrecho de Bósforo.",
            "D) Canal de Panamá."
        ],
        respuestaCorrecta: 1,
        explicacion: "El estrecho de Malaca es una ruta marítima vital que conecta el Océano Índico con el Pacífico, por donde transita una parte masiva del comercio mundial de energía y mercancías."
    },
    {
        id: 74,
        area: "Geopolítica y Geografía Política",
        pregunta: "Punto de estrangulamiento geopolítico estratégico en el Medio Oriente por el cual transita aproximadamente una quinta parte del petróleo consumido en el mundo:",
        opciones: [
            "A) Estrecho de Ormuz.",
            "B) Estrecho de Bab el-Mandeb.",
            "C) Canal de Suez.",
            "D) Estrecho de Gibraltar."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Estrecho de Ormuz, que conecta el Golfo Pérsico con el Golfo de Omán, es el cuello de botella petrolero más importante del planeta."
    },
    {
        id: 75,
        area: "Geopolítica y Geografía Política",
        pregunta: "Concepto geoeconómico y político que describe la lucha y competencia entre potencias por el control de recursos energéticos, rutas de transporte y áreas de influencia en el Asia Central:",
        opciones: [
            "A) El Gran Juego (The Great Game).",
            "B) La Guerra Fría Digital.",
            "C) La Doctrina Monroe asiática.",
            "D) El Consenso de Beijing."
        ],
        respuestaCorrecta: 0,
        explicacion: "'El Gran Juego' describe originalmente la rivalidad geopolítica decimonónica entre el Imperio Británico y el Imperio ruso en Asia Central, término revivido hoy para la pugna por gas y petróleo en la región."
    },
    {
        id: 76,
        area: "Geopolítica y Geografía Política",
        pregunta: "Inadecuación territorial o de recursos que sufren los países que carecen de litoral marítimo, lo cual plantea retos específicos para su comercio exterior y desarrollo:",
        opciones: [
            "A) Insularidad.",
            "B) Mediterraneidad (Países sin litoral).",
            "C) Fragmentación territorial.",
            "D) Bipolaridad costera."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mediterraneidad se refiere a la condición de los estados sin litoral (landlocked countries), que dependen del tránsito por países vecinos para acceder al mar."
    },
    {
        id: 77,
        area: "Geopolítica y Geografía Política",
        pregunta: "Zona marítima bajo la soberanía del Estado ribereño que se extiende hasta un máximo de 12 millas náuticas medidas a partir de las líneas de base según la CONVEMAR:",
        opciones: [
            "A) Zona Económica Exclusiva.",
            "B) Mar Territorial.",
            "C) Alta Mar.",
            "D) Zona Contigua."
        ],
        respuestaCorrecta: 1,
        explicacion: "El mar territorial es la franja de mar adyacente a la costa sobre la cual el Estado ribereño ejerce soberanía completa, con excepción del derecho de paso inocente."
    },
    {
        id: 78,
        area: "Geopolítica y Geografía Política",
        pregunta: "¿Qué extensión máxima puede tener la Zona Económica Exclusiva (ZEE) medida desde las líneas de base a partir de las cuales se mide la anchura del mar territorial?",
        opciones: [
            "A) 12 millas náuticas.",
            "B) 24 millas náuticas.",
            "C) 200 millas náuticas.",
            "D) 350 millas náuticas."
        ],
        respuestaCorrecta: 2,
        explicacion: "De acuerdo con la CONVEMAR, la ZEE se extiende hasta las 200 millas náuticas desde las líneas de base, otorgando derechos soberanos de exploración y explotación de recursos naturales."
    },
    {
        id: 79,
        area: "Geopolítica y Geografía Política",
        pregunta: "Megaproyecto comercial e infraestructura global impulsado por la República Popular China para conectar Eurasia y África a través de corredores terrestres y marítimos:",
        opciones: [
            "A) El Plan Marshall Chino.",
            "B) Iniciativa de la Franja y la Ruta (Belt and Road Initiative - BRI).",
            "C) Corredor Norte-Sur.",
            "D) Alianza del Indo-Pacífico."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Iniciativa de la Franja y la Ruta (BRI), antes conocida como 'Un Cinturón, Una Ruta', busca financiar y construir redes de transporte y energía para integrar el comercio euroasiático."
    },
    {
        id: 80,
        area: "Geopolítica y Geografía Política",
        pregunta: "Enfoque geopolítico que enfatiza el poder del dominio marítimo, defendido por pensadores como Alfred Thayer Mahan, argumentando que el control de las rutas oceánicas determina la hegemonía global:",
        opciones: [
            "A) Geopolítica terrestre (Tellurocracia).",
            "B) Geopolítica naval (Talasocracia).",
            "C) Geopolítica aeroespacial.",
            "D) Geopolítica crítica posmoderna."
        ],
        respuestaCorrecta: 1,
        explicacion: "La talasocracia (poder basado en el control del mar), postulada por Alfred Thayer Mahan, sostiene que las naciones con poder naval dominante aseguran el comercio y la proyección de poder."
    },
    {
        id: 81,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "¿Cómo se denomina a la cooperación internacional para el desarrollo que se realiza directamente entre gobiernos de países en desarrollo, sin la intermediación de donantes tradicionales del Norte?",
        opciones: [
            "A) Cooperación Norte-Sur.",
            "B) Ayuda Oficial al Desarrollo (AOD) tradicional.",
            "C) Cooperación Sur-Sur.",
            "D) Cooperación descentralizada."
        ],
        respuestaCorrecta: 2,
        explicacion: "La Cooperación Sur-Sur (CSS) es un mecanismo de intercambio de conocimientos, experiencias y recursos técnicos entre países en desarrollo basado en la solidaridad y el beneficio mutuo."
    },
    {
        id: 82,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "Indicador financiero clave emitido por el Comité de Asistencia al Desarrollo (CAD) de la OCDE que mide el flujo de recursos financieros concedidos con el propósito principal de promover el desarrollo económico y el bienestar:",
        opciones: [
            "A) Inversión Extranjera Directa.",
            "B) Ayuda Oficial al Desarrollo (AOD).",
            "C) Créditos comerciales preferenciales.",
            "D) Deuda externa condonada."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Ayuda Oficial al Desarrollo (AOD) es la métrica estándar internacional administrada por la OCDE para cuantificar el apoyo financiero y técnico de los donantes oficiales a los países en desarrollo."
    },
    {
        id: 83,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "¿Qué organismo desconcentrado de la Secretaría de Relaciones Exteriores es el responsable en México de coordinar la política de cooperación internacional para el desarrollo (AMEXCID)?",
        opciones: [
            "A) Instituto Matías Romero.",
            "B) Agencia Mexicana de Cooperación Internacional para el Desarrollo.",
            "C) ProMéxico.",
            "D) Fondo de Cultura Económica."
        ],
        respuestaCorrecta: 1,
        explicacion: "La AMEXCID, creada por ley en 2011, es el órgano encargado de planear, coordinar y ejecutar la cooperación internacional para el desarrollo que otorga y recibe México."
    },
    {
        id: 84,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "Modalidad de cooperación en la que convergen capacidades y recursos financieros de un país donante tradicional (Norte) y un país de desarrollo intermedio (Sur) para apoyar a un tercer país en desarrollo:",
        opciones: [
            "A) Cooperación Triangular.",
            "B) Cooperación Bilateral Pura.",
            "C) Cooperación Multilateral directa.",
            "D) Cooperación Descentralizada local."
        ],
        respuestaCorrecta: 0,
        explicacion: "La cooperación triangular combina la ayuda y recursos de un donante tradicional o agencia multilateral con la experiencia y proximidad cultural de un país de renta media (como México)."
    },
    {
        id: 85,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "¿Qué principio fundamental de la eficacia de la ayuda internacional postula que los países socios deben liderar sus propias estrategias de desarrollo?",
        opciones: [
            "A) Alineación.",
            "B) Apropiación (Ownership).",
            "C) Armonización.",
            "D) Gestión orientada a resultados."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Declaración de París sobre la Eficacia de la Ayuda (2005) estableció cinco principios cardinales, siendo la 'apropiación' (que los países receptores ejerzan liderazgo sobre sus políticas de desarrollo) el primero de ellos."
    },
    {
        id: 86,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "Concepto de desarrollo propuesto por Amartya Sen que define el desarrollo no solo como crecimiento económico, sino como la expansión de las libertades reales de las personas:",
        opciones: [
            "A) Desarrollo sostenible.",
            "B) Desarrollo a escala humana.",
            "C) Enfoque de capacidades (Desarrollo humano).",
            "D) Crecimiento endógeno."
        ],
        respuestaCorrecta: 2,
        explicacion: "Amartya Sen revolucionó la teoría del desarrollo al introducir el enfoque de capacidades, sentando las bases teóricas para el Índice de Desarrollo Humano (IDH) del PNUD."
    },
    {
        id: 87,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "¿Cuál es el enfoque de la cooperación descentralizada en el ámbito internacional?",
        opciones: [
            "A) Aquella ejecutada exclusivamente por los ministerios de relaciones exteriores centrales.",
            "B) La cooperación realizada por gobiernos locales, municipios, regiones y actores de la sociedad civil.",
            "C) La ayuda condicionada a reformas macroeconómicas estrictas del FMI.",
            "D) Los préstamos de bancos comerciales privados."
        ],
        respuestaCorrecta: 1,
        explicacion: "La cooperación descentralizada involucra a entidades subnacionales (municipios, regiones, gobiernos locales) y organizaciones no gubernamentales en proyectos de cooperación horizontal."
    },
    {
        id: 88,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "¿Qué caracteriza a la modalidad de 'ayuda atada' (tied aid) en la cooperación internacional?",
        opciones: [
            "A) Los fondos deben utilizarse para comprar bienes y servicios exclusivamente en el país donante.",
            "B) Los recursos se otorgan sin ninguna clase de supervisión financiera.",
            "C) Está prohibida por las normas de la Organización Mundial del Comercio.",
            "D) Se destina únicamente a programas de ayuda humanitaria de emergencia."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ayuda atada condiciona el uso de los fondos de asistencia a la adquisición de mercancías y servicios procedentes del país que otorga el financiamiento, reduciendo su eficiencia."
    },
    {
        id: 89,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "Informe anual publicado por el Programa de las Naciones Unidas para el Desarrollo (PNUD) que evalúa el progreso mundial mediante indicadores de salud, educación e ingresos:",
        opciones: [
            "A) Informe sobre Desarrollo Humano (IDH).",
            "B) Informe de Competitividad Global.",
            "C) Informe de Riesgos Globales del Foro Económico Mundial.",
            "D) Perspectivas de la Economía Mundial del FMI."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Informe sobre Desarrollo Humano del PNUD calcula y publica anualmente el Índice de Desarrollo Humano (IDH) para los países del mundo."
    },
    {
        id: 90,
        area: "Cooperación Internacional para el Desarrollo",
        pregunta: "Principio de la eficacia de la ayuda que busca que los donantes coordinen y racionalicen sus procedimientos para reducir la carga administrativa sobre el país receptor:",
        opciones: [
            "A) Armonización.",
            "B) Condicionalidad estricta.",
            "C) Privatización de la ayuda.",
            "D) Descentralización fiscal."
        ],
        respuestaCorrecta: 0,
        explicacion: "La armonización implica que los donantes actúen de manera coordinada, simplificando normas y requisitos para evitar la duplicidad de esfuerzos en el país receptor."
    },
    {
        id: 91,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Concepto de seguridad introducido en el Informe sobre Desarrollo Humano del PNUD de 1994 que desplaza el foco militar tradicional hacia la protección de las personas frente a amenazas crónicas como el hambre, la enfermedad y la represión:",
        opciones: [
            "A) Seguridad Nacional.",
            "B) Seguridad Humana.",
            "C) Seguridad Colectiva.",
            "D) Seguridad Hemisférica."
        ],
        respuestaCorrecta: 1,
        explicacion: "La seguridad humana redefine el referente de seguridad: del Estado territorial al individuo, abarcando siete dimensiones (económica, alimentaria, de salud, ambiental, personal, comunitaria y política)."
    },
    {
        id: 92,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "¿Qué es la disuasión nuclear (deterrence) durante el periodo de la Guerra Fría?",
        opciones: [
            "A) El uso preventivo de armas nucleares contra un enemigo indefenso.",
            "B) La amenaza de una represalia nuclear masiva para convencer a un adversario de no iniciar un ataque.",
            "C) El desarme total verificado por organismos multilaterales.",
            "D) La venta de tecnología atómica con fines pacíficos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La disuasión nuclear se basaba en la doctrina de la Destrucción Mutua Asegurada (MAD), donde el costo de un ataque superaba cualquier beneficio potencial."
    },
    {
        id: 93,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Tratado internacional fundamental abierto a firma en 1968 cuyo objetivo es prevenir la proliferación de armas nucleares, promover la cooperación pacífica y lograr el desarme nuclear:",
        opciones: [
            "A) Tratado de No Proliferación de Armas Nucleares (TNP).",
            "B) Tratado START I.",
            "C) Tratado de Prohibición Completa de los Ensayos Nucleares (CTBT).",
            "D) Tratado INF."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Tratado sobre la No Proliferación de las Armas Nucleares (TNP) es el pilar central del régimen de no proliferación global."
    },
    {
        id: 94,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Forma de guerra asimétrica caracterizada por el uso sistemático de la violencia y el terror por actores no estatales contra civiles o infraestructuras para lograr objetivos políticos o ideológicos:",
        opciones: [
            "A) Guerra convencional interestatal.",
            "B) Terrorismo internacional.",
            "C) Ciberataque patrocinado por el Estado.",
            "D) Conflicto de baja intensidad simétrico."
        ],
        respuestaCorrecta: 1,
        explicacion: "El terrorismo internacional es una manifestación de violencia asimétrica donde actores no estatales desafían la seguridad de los Estados afectando a la población civil."
    },
    {
        id: 95,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Concepto de seguridad colectiva que se fundamenta en el principio de que una agresión contra cualquier Estado miembro de un sistema internacional debe ser contrarrestada por la acción combinada de todos los demás:",
        opciones: [
            "A) Alianza militar bilateral.",
            "B) Seguridad Colectiva.",
            "C) Neutralidad armada.",
            "D) Realpolitik pura."
        ],
        respuestaCorrecta: 1,
        explicacion: "La seguridad colectiva (como el modelo de la Sociedad de Naciones y de la ONU) asume que la paz es indivisible y que la agresión contra uno concierne a todos."
    },
    {
        id: 96,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "¿Qué comprende el concepto de 'ciberseguridad' en las relaciones internacionales contemporáneas?",
        opciones: [
            "A) La protección exclusiva de redes informáticas de uso doméstico.",
            "B) La protección de infraestructuras críticas, redes y sistemas de información frente a ataques digitales y espionaje cibernético estatal o criminal.",
            "C) La prohibición absoluta de usar internet para fines gubernamentales.",
            "D) El comercio internacional de software de código abierto."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ciberseguridad se ha convertido en un dominio crítico de la seguridad internacional debido a la vulnerabilidad de las infraestructuras críticas ante ciberataques."
    },
    {
        id: 97,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Término que describe conflictos armados en los que los actores involucrados presentan grandes asimetrías en sus capacidades militares, tácticas y organización (ej. ejército regular contra milicias irregulares o guerrillas):",
        opciones: [
            "A) Guerra simétrica total.",
            "B) Guerra asimétrica.",
            "C) Guerra fría regional.",
            "D) Guerra de trincheras."
        ],
        respuestaCorrecta: 1,
        explicacion: "La guerra asimétrica enfrenta a contendientes con fuerzas militares marcadamente desiguales, obligando al actor más débil a recurrir a tácticas no tradicionales (guerrilla, terrorismo, guerra híbrida)."
    },
    {
        id: 98,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "¿Cuál es el propósito del Tratado de Prohibición Completa de los Ensayos Nucleares (CTBT)?",
        opciones: [
            "A) Prohibir cualquier ensayo de detonación de armas nucleares en cualquier entorno (subterráneo, atmosférico o submarino).",
            "B) Permitir pruebas nucleares subterráneas controladas.",
            "C) Desmantelar las ojivas nucleares existentes de las superpotencias.",
            "D) Regular el uso de energía nuclear civil."
        ],
        respuestaCorrecta: 0,
        explicacion: "El CTBT prohíbe todas las explosiones nucleares con fines militares o pacíficos en cualquier lugar del planeta, aunque aún no ha entrado en vigor formalmente."
    },
    {
        id: 99,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "Concepto que combina el uso simultáneo de tácticas convencionales, irregulares, cibernéticas y operaciones de desinformación (guerra psicológica) para alcanzar objetivos geopolíticos sin cruzar el umbral de guerra abierta:",
        opciones: [
            "A) Guerra híbrida (Hybrid Warfare).",
            "B) Guerra relámpago (Blitzkrieg).",
            "C) Doctrina de contención.",
            "D) Disuasión ampliada."
        ],
        respuestaCorrecta: 0,
        explicacion: "La guerra híbrida emplea una mezcla de herramientas militares y no militares (ciberataques, propaganda, presión económica, fuerzas paramilitares) en la zona gris del conflicto."
    },
    {
        id: 100,
        area: "Seguridad Internacional y Estudios Estratégicos",
        pregunta: "¿Qué establece el principio de 'Responsabilidad de Proteger' (R2P o RtoP) adoptado por la ONU en 2005?",
        opciones: [
            "A) La obligación de los estados de intervenir militarmente en cualquier crisis económica.",
            "B) La responsabilidad de la comunidad internacional de ayudar a proteger a las poblaciones de genocidio, crímenes de lesa humanidad, limpieza étnica y crímenes de guerra si el Estado receptor no puede o no quiere hacerlo.",
            "C) El derecho exclusivo de los miembros permanentes del Consejo de Seguridad para vetar misiones de paz.",
            "D) La inmunidad soberana absoluta de los jefes de Estado ante tribunales penales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Responsabilidad de Proteger (R2P) establece que la soberanía implica responsabilidad; cuando un Estado fracasa en proteger a su población de crímenes atroces, la comunidad internacional asume dicha responsabilidad."
    },
    {
        id: 101,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Tratado internacional adoptado en 1951 que define quién es un refugiado, establece los derechos de estos y las obligaciones jurídicas de los Estados en materia de asilo y refugio:",
        opciones: [
            "A) Convención sobre los Derechos del Niño.",
            "B) Convención sobre el Estatuto de los Refugiados (Convención de Ginebra de 1951).",
            "C) Pacto Mundial sobre Migración.",
            "D) Convención de Viena sobre Relaciones Consulares."
        ],
        respuestaCorrecta: 1,
        explicacion: "La Convención sobre el Estatuto de los Refugiados de 1951 y su Protocolo de 1967 son los instrumentos legales clave que consagran el principio de no devolución (non-refoulement)."
    },
    {
        id: 102,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Principio fundamental del derecho internacional de los refugiados que prohíbe a los Estados expulsar o devolver ('refouler') a un refugiado a las fronteras de territorios donde su vida o libertad peligre:",
        opciones: [
            "A) Principio de no devolución (Non-refoulement).",
            "B) Principio de soberanía migratoria.",
            "C) Principio de extradición obligatoria.",
            "D) Principio de asilo territorial discrecional."
        ],
        respuestaCorrecta: 0,
        explicacion: "El principio de no devolución (non-refoulement) es la piedra angular del derecho internacional de los refugiados, prohibiendo la devolución de personas a países donde sufran persecución."
    },
    {
        id: 103,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Sistema regional de protección de derechos humanos perteneciente a la Organización de los Estados Americanos (OEA), compuesto por la Comisión Interamericana de Derechos Humanos y la Corte IDH:",
        opciones: [
            "A) Sistema Europeo de Derechos Humanos.",
            "B) Sistema Interamericano de Derechos Humanos (SIDH).",
            "C) Consejo de Derechos Humanos de la ONU.",
            "D) Tribunal Penal Internacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Sistema Interamericano de Derechos Humanos (SIDH) opera bajo el marco de la OEA, con sede en Washington (CIDH) y San José, Costa Rica (Corte IDH)."
    },
    {
        id: 104,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Acuerdo intergubernamental histórico adoptado bajo los auspicios de la ONU en 2018 que busca mejorar la cooperación para una migración internacional segura, ordenada y regular:",
        opciones: [
            "A) Pacto Mundial para la Migración Segura, Ordenada y Regular.",
            "B) Convención de Palermo sobre Delincuencia Organizada.",
            "C) Tratado de Libre Tránsito Continental.",
            "D) Protocolo de Cartagena sobre Seguridad de la Biotecnología."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Pacto Mundial para la Migración (Marrakech, 2018) es el primer acuerdo intergubernamental negociado bajo los auspicios de la ONU para cubrir integralmente la migración internacional."
    },
    {
        id: 105,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "¿Qué diferencia conceptual existe entre un migrante económico y un refugiado según el derecho internacional?",
        opciones: [
            "A) El migrante económico huye de persecución política directa, mientras que el refugiado busca mejores salarios.",
            "B) El refugiado huye de persecución, conflictos o violencia generalizada y cuenta con protección internacional específica; el migrante económico se desplaza voluntariamente por razones laborales o de bienestar.",
            "C) No existe ninguna distinción legal en los tratados internacionales.",
            "D) El refugiado tiene prohibido trabajar en el país receptor, mientras que el migrante económico tiene plenos derechos políticos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Jurídicamente, los refugiados tienen un estatus de protección internacional especial debido a que sus vidas corren peligro por persecución o violencia, a diferencia de la migración predominantemente voluntaria por motivos económicos."
    },
    {
        id: 106,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Órgano cuasijudicial de la ONU compuesto por expertos independientes encargado de supervisar la aplicación del Pacto Internacional de Derechos Civiles y Políticos (PIDCP):",
        opciones: [
            "A) Comité de Derechos Humanos.",
            "B) Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR).",
            "C) Corte Internacional de Justicia.",
            "D) Consejo de Derechos Humanos."
        ],
        respuestaCorrecta: 0,
        explicacion: "El Comité de Derechos Humanos examina los informes periódicos presentados por los Estados partes sobre el cumplimiento del PIDCP."
    },
    {
        id: 107,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Declaración internacional adoptada por la Asamblea General de la ONU el 10 de diciembre de 1948 que establece por primera vez los derechos humanos fundamentales que deben protegerse universalmente:",
        opciones: [
            "A) Declaración Universal de los Derechos Humanos (DUDH).",
            "B) Convención Americana sobre Derechos Humanos.",
            "C) Carta Magna internacional.",
            "D) Declaración de Viena y Programa de Acción."
        ],
        respuestaCorrecta: 0,
        explicacion: "La Declaración Universal de los Derechos Humanos (1948) es el documento fundador de la protección internacional de los derechos humanos modernos."
    },
    {
        id: 108,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Tratado internacional complementario a la Convención de Palermo de la ONU enfocado específicamente en prevenir, reprimir y sancionar la trata de personas, especialmente mujeres y niños:",
        opciones: [
            "A) Protocolo contra el Tráfico Ilícito de Migrantes.",
            "B) Protocolo de Palermo (Protocolo para prevenir, reprimir y sancionar la trata de personas).",
            "C) Convención sobre el Estatuto de los Apátridas.",
            "D) Convenio de Berna."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Protocolo de Palermo sobre la trata de personas es el instrumento universal clave para combatir la explotación de seres humanos a través del engaño, la coacción o el abuso de poder."
    },
    {
        id: 109,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "¿Cómo se define el fenómeno de la 'fuga de cerebros' (brain drain) dentro de los estudios de migración internacional?",
        opciones: [
            "A) La migración masiva de trabajadores no calificados hacia economías desarrolladas.",
            "B) La emigración de profesionales altamente calificados, científicos y académicos desde países en desarrollo hacia economías más avanzadas.",
            "C) El intercambio de estudiantes universitarios mediante becas internacionales.",
            "D) La pérdida de memoria institucional en las cancillerías."
        ],
        respuestaCorrecta: 1,
        explicacion: "La 'fuga de cerebros' representa la pérdida de capital humano altamente especializado para los países de origen, que invirtieron en su formación pero no logran retenerlos."
    },
    {
        id: 110,
        area: "Derechos Humanos y Migración Internacional",
        pregunta: "Organismo de las Naciones Unidas creado en 1950 con el mandato de liderar y coordinar la acción internacional para la protección de los refugiados y la solución de sus problemas en todo el mundo:",
        opciones: [
            "A) OIM (Organización Internacional para las Migraciones).",
            "B) ACNUR (Alto Comisionado de las Naciones Unidas para los Refugiados).",
            "C) UNICEF.",
            "D) CICR (Cruz Roja)."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ACNUR (UNHCR) es la agencia de la ONU encargada de proteger a los refugiados, desplazados forzados y apátridas, y de asistir en su reasentamiento o repatriación."
    },
    {
        id: 111,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Modelo de negociación desarrollado por Roger Fisher y William Ury en la Escuela de Negociación de Harvard que se centra en los intereses subyacentes en lugar de las posiciones rígidas:",
        opciones: [
            "A) Negociación distributiva (suma cero).",
            "B) Negociación basada en intereses (Harvard / ganar-ganar).",
            "C) Negociación posicional competitiva.",
            "D) Arbitraje internacional vinculante."
        ],
        respuestaCorrecta: 1,
        explicacion: "El método de negociación de Harvard (negociación basada en principios o intereses) separa a las personas del problema, se concentra en los intereses y busca opciones de mutuo beneficio."
    },
    {
        id: 112,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "¿Qué significa el acrónimo BATNA (Best Alternative to a Negotiated Agreement) en la teoría de la negociación internacional?",
        opciones: [
            "A) La mejor alternativa a un acuerdo negociado (su opción de retirada).",
            "B) El beneficio arancelario total neto de un tratado.",
            "C) La tarifa básica de arbitraje neutral en disputas comerciales.",
            "D) El acuerdo bilateral temporal de no agresión."
        ],
        respuestaCorrecta: 0,
        explicacion: "El BATNA (Mejor Alternativa a un Acuerdo Negociado) es el curso de acción al que un negociador puede recurrir si no se alcanza un acuerdo, determinando su verdadero poder de negociación."
    },
    {
        id: 113,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Método de solución pacífica de controversias internacionales en el cual un tercero imparcial (mediador) propone soluciones o formula sugerencias para facilitar el entendimiento entre las partes:",
        opciones: [
            "A) Arbitraje internacional.",
            "B) Mediación.",
            "C) Buenos oficios.",
            "D) Adjudicación judicial."
        ],
        respuestaCorrecta: 1,
        explicacion: "En la mediación, el tercero neutral interviene activamente en las negociaciones proponiendo propuestas de solución sustantivas, a diferencia de los buenos oficios, que solo buscan restablecer el contacto."
    },
    {
        id: 114,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Mecanismo de resolución de controversias jurídicas internacionales en el que las partes someten su disputa a un tribunal arbitral cuyas decisiones son obligatorias (vinculantes):",
        opciones: [
            "A) Negociación diplomática directa.",
            "B) Arbitraje internacional.",
            "C) Mediación consultiva.",
            "D) Conciliación no vinculante."
        ],
        respuestaCorrecta: 1,
        explicacion: "El arbitraje internacional implica el compromiso previo de las partes de someterse a la decisión (laudo arbitral) dictada por árbitros imparciales, la cual tiene carácter obligatorio."
    },
    {
        id: 115,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "¿Qué caracteriza a una negociación distributiva (juego de suma cero)?",
        opciones: [
            "A) Ambas partes colaboran para expandir el pastel y lograr beneficios conjuntos.",
            "B) Lo que gana una de las partes lo pierde inevitablemente la otra, compitiendo por un recurso limitado.",
            "C) Se fundamenta en la confianza mutua y la creación de valor compartido.",
            "D) Utiliza mediadores neutrales para evitar conflictos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La negociación distributiva es de suma cero (o suma constante): los intereses de las partes son directamente opuestos y el recurso en disputa es fijo."
    },
    {
        id: 116,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Técnica diplomática preventiva en la que un tercer Estado o personalidad ofrece canales de comunicación para propiciar que dos partes en conflicto reanuden el diálogo interrumpido, sin participar en el fondo de las propuestas:",
        opciones: [
            "A) Buenos oficios.",
            "B) Arbitraje obligatorio.",
            "C) Intervención armada humanitaria.",
            "D) Conciliación formal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los 'buenos oficios' consisten en la acción de un tercero para acercar a las partes en disputa y lograr que se sienten a negociar, manteniendo una postura de estricta neutralidad sobre el fondo."
    },
    {
        id: 117,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "¿Qué es el 'ZOPA' (Zone of Possible Agreement) en un proceso de negociación internacional?",
        opciones: [
            "A) La zona o rango donde las expectativas de ambas partes se superponen, haciendo posible un acuerdo negociado.",
            "B) El punto máximo de ruptura y rompimiento de relaciones diplomáticas.",
            "C) La sanción comercial impuesta por la OMC a un infractor.",
            "D) El área geográfica desmilitarizada entre dos países."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ZOPA (Zona de Posible Acuerdo) representa el espacio entre los precios de reserva u ofertas límite de los negociadores donde un acuerdo es aceptable para ambas partes."
    },
    {
        id: 118,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Método de solución pacífica en el cual una comisión investigadora o de conciliación examina los elementos de hecho de una controversia internacional para emitir un informe con recomendaciones no vinculantes:",
        opciones: [
            "A) Conciliación internacional.",
            "B) Sentencia de la Corte Internacional de Justicia.",
            "C) Sanción económica del Consejo de Seguridad.",
            "D) Tratado de paz definitivo."
        ],
        respuestaCorrecta: 0,
        explicacion: "La conciliación involucra a un órgano comisionado para investigar los hechos y proponer términos de solución que las partes son libres de aceptar o rechazar."
    },
    {
        id: 119,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "¿Qué rol juega la diplomacia pública en la resolución y gestión de conflictos internacionales contemporáneos?",
        opciones: [
            "A) Gestionar exclusivamente las comunicaciones secretas entre servicios de inteligencia.",
            "B) Influir en la opinión pública extranjera y construir puentes de entendimiento intercultural y empatía para mitigar la hostilidad.",
            "C) Reemplazar por completo a los tratados bilaterales formales.",
            "D) Financiar campañas armamentistas encubiertas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La diplomacia pública busca informar, enganchar e influir en las opiniones públicas de otros países para generar un clima propicio a la cooperación y reducir tensiones."
    },
    {
        id: 120,
        area: "Negociación, Mediación y Resolución de Conflictos",
        pregunta: "Técnica de negociación en la que se busca 'agrandar el pastel' (expand the pie) antes de repartirlo, característica central de la negociación:",
        opciones: [
            "A) Distributiva.",
            "B) Integrativa (ganar-ganar).",
            "C) Coercitiva.",
            "D) Posicional estricta."
        ],
        respuestaCorrecta: 1,
        explicacion: "La negociación integrativa busca crear valor ('agrandar el pastel') identificando intereses compatibles o complementarios para que todas las partes salgan beneficiadas."
    }
];