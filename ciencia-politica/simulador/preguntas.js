const bancoPreguntas = [
    {
        "id": 1,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la aportación central de Thomas Hobbes en 'Leviatán' respecto al origen del Estado?",
        "opciones": [
            "A) La propiedad privada como fundamento exclusivo del surgimiento del Estado.",
            "B) El pacto social motivado por el miedo a la muerte violenta en el estado de naturaleza.",
            "C) La división de poderes como garantía de la libertad política.",
            "D) La supremacía de la ley natural sobre el derecho positivo del soberano."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Hobbes sostiene que en el estado de naturaleza la vida es 'solitaria, pobre, nastu, brutal y breve' debido a la guerra de todos contra todos. Para salir de este caos, los individuos ceden su poder a un soberano absoluto mediante un pacto."
    },
    {
        "id": 2,
        "area": "Teoría Política",
        "pregunta": "En el pensamiento de John Locke, ¿cuál es el fin principal de la sociedad política y el establecimiento del gobierno?",
        "opciones": [
            "A) La instauración de una teocracia basada en principios morales universales.",
            "B) La supresión de las clases sociales mediante la redistribución de la riqueza.",
            "C) La concentración del poder militar para la defensa exterior.",
            "D) La protección de la propiedad privada y los derechos naturales (vida, libertad y hacienda)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Para Locke, los hombres entran en sociedad para preservar mejor sus propiedades y derechos naturales, los cuales ya existían en el estado de naturaleza pero carecían de jueces imparciales y leyes positivas claras."
    },
    {
        "id": 3,
        "area": "Teoría Política",
        "pregunta": "¿Qué autor introduce el concepto de 'voluntad general' como fundamento de la soberanía popular y la democracia directa en 'El contrato social'?",
        "opciones": [
            "A) Edmund Burke",
            "B) Montesquieu",
            "C) Alexis de Tocqueville",
            "D) Jean-Jacques Rousseau"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Rousseau define la voluntad general como aquella que busca siempre el interés común y la utilidad pública, diferenciándose de la voluntad de todos que es la suma de intereses particulares."
    },
    {
        "id": 4,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es el propósito fundamental de la división de poderes postulada por Montesquieu en 'El espíritu de las leyes'?",
        "opciones": [
            "A) Maximizar la eficiencia técnica en la recaudación fiscal.",
            "B) Eliminar por completo la necesidad de un poder ejecutivo fuerte.",
            "C) Evitar el abuso del poder y garantizar la libertad política mediante pesos y contrapesos.",
            "D) Asegurar que el poder judicial tenga supremacía sobre el legislativo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Montesquieu argumenta célebremente que 'todo hombre que tiene poder se abusa de él' hasta que encuentra límites. Por ello, es necesario que 'el poder detenga al poder'."
    },
    {
        "id": 5,
        "area": "Teoría Política",
        "pregunta": "De acuerdo con Max Weber, ¿cuál es el atributo definitorio y exclusivo del Estado moderno?",
        "opciones": [
            "A) La propiedad pública de los medios de producción.",
            "B) El monopolio de la coacción física legítima.",
            "C) La planificación económica centralizada.",
            "D) La celebración periódica de elecciones libres."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Weber define al Estado moderno sociológicamente a partir de su medio específico: el monopolio del uso legítimo de la fuerza física dentro de un territorio determinado."
    },
    {
        "id": 6,
        "area": "Teoría Política",
        "pregunta": "¿Qué caracteriza a la dominación de tipo 'carismático' según la tipología de la autoridad legítima de Max Weber?",
        "opciones": [
            "A) La sumisión a normas legales abstractas e impersonales.",
            "B) La devoción afectiva y extraordinaria a las cualidades personales de un líder.",
            "C) La transmisión hereditaria del poder político y administrativo.",
            "D) La creencia en la santidad de las tradiciones seculares."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La autoridad carismática descansa en la entrega extracotidiana a la santidad, heroísmo o ejemplaridad de una persona y a las ordenaciones por ella reveladas o creadas."
    },
    {
        "id": 7,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la principal contribución de Antonio Gramsci a la teoría política contemporánea?",
        "opciones": [
            "A) El concepto de hegemonía cultural y el papel de los intelectuales en la dominación de clase.",
            "B) La defensa acérrima del liberalismo económico y el libre mercado.",
            "C) La justificación teórica del fascismo corporativo.",
            "D) La teoría del materialismo histórico y la plusvalía económica."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Gramsci expandió el análisis marxista al sostener que la clase dominante no solo ejerce dominación mediante la fuerza, sino también dirección intelectual y moral (hegemonía) a través de la sociedad civil."
    },
    {
        "id": 8,
        "area": "Teoría Política",
        "pregunta": "¿Cómo define Carl Schmitt el criterio político fundamental en su obra 'El concepto de lo político'?",
        "opciones": [
            "A) El contraste entre eficiencia económica y estancamiento.",
            "B) La búsqueda del consenso racional libre de coacción.",
            "C) La distinción entre lo justo y lo injusto.",
            "D) La oposición binaria entre amigo y enemigo."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Schmitt sostiene que la especificidad de la política radica en la distinción entre amigo y enemigo, la cual implica la posibilidad real de un conflicto físico o guerra."
    },
    {
        "id": 9,
        "area": "Teoría Política",
        "pregunta": "En la teoría de la justicia de John Rawls, ¿qué principio regula las desigualdades sociales y económicas?",
        "opciones": [
            "A) El utilitarismo de la mayor felicidad para el mayor número.",
            "B) El principio de eficiencia de Pareto.",
            "C) El principio de diferencia, que exige que las desigualdades beneficien a los miembros menos aventajados.",
            "D) La meritocracia absoluta sin intervención estatal."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El principio de diferencia de Rawls establece que las desigualdades socioeconómicas solo son justas si resultan en el mayor beneficio posible para los integrantes menos favorecidos de la sociedad."
    },
    {
        "id": 10,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es el postulado central del contractualismo clásico?",
        "opciones": [
            "A) Los gobiernos derivan su legitimidad del derecho divino de los reyes.",
            "B) La sociedad y el Estado surgen de un pacto o contrato social entre individuos libres e iguales.",
            "C) Las instituciones políticas son el reflejo mecánico de la estructura económica.",
            "D) El Estado es un producto natural e inevitable de la evolución biológica humana."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El contractualismo (Hobbes, Locke, Rousseau) utiliza el recurso metodológico del estado de naturaleza y el contrato social para explicar el origen, la naturaleza y la legitimidad del poder político."
    },
    {
        "id": 11,
        "area": "Teoría Política",
        "pregunta": "¿Qué corriente teórica contemporánea enfatiza la importancia de la participación ciudadana y el diálogo argumentativo para la legitimación democrática?",
        "opciones": [
            "A) El funcionalismo estructural.",
            "B) La teoría de la democracia deliberativa (Habermas).",
            "C) El realismo político maquiavélico.",
            "D) El elitismo democrático de Schumpeter."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La democracia deliberativa, representada por Jürgen Habermas y Joshua Cohen, sostiene que las decisiones políticas son legítimas en la medida en que surgen de procesos de deliberación pública inclusiva y racional."
    },
    {
        "id": 12,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la premisa fundamental del realismo político en las relaciones internacionales y la teoría política?",
        "opciones": [
            "A) La primacía del poder, el interés nacional y la anarquía en el sistema internacional.",
            "B) La cooperación internacional basada en normas jurídicas universales.",
            "C) La superación del Estado-nación por organizaciones supranacionales.",
            "D) La inevitabilidad del desarme global y la paz perpetua."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El realismo político (de Maquiavelo a Hans Morgenthau) parte de que los actores estatales operan en un entorno anárquico donde la seguridad y la supervivencia dependen de la acumulación de poder."
    },
    {
        "id": 13,
        "area": "Teoría Política",
        "pregunta": "¿Qué autor es considerado el máximo exponente de la teoría de las élites, argumentando que en toda sociedad una minoría gobierna siempre a la mayoría?",
        "opciones": [
            "A) Karl Marx",
            "B) Norberto Bobbio",
            "C) Gaetano Mosca",
            "D) Robert Dahl"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Gaetano Mosca, junto con Vilfredo Pareto y Robert Michels, formuló la teoría de las élites, sosteniendo que la división entre gobernantes y gobernados es una ley universal de las sociedades humanas."
    },
    {
        "id": 14,
        "area": "Teoría Política",
        "pregunta": "¿Qué significa el concepto de 'biopolítica' introducido por Michel Foucault?",
        "opciones": [
            "A) La protección jurídica de la biodiversidad ecológica.",
            "B) La gestión estatal de la salud, la demografía y los cuerpos de la población como objeto de poder.",
            "C) La subordinación de la política a las leyes de la biología evolutiva.",
            "D) La eliminación de toda forma de control gubernamental sobre la vida privada."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Foucault define la biopolítica como la forma de poder que se ejerce sobre la población y los cuerpos vivos, interviniendo en procesos biológicos como la natalidad, la mortalidad, la salud y la enfermedad."
    },
    {
        "id": 15,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la crítica principal que el comunitarismo (ej. Michael Sandel) dirige al liberalismo político de John Rawls?",
        "opciones": [
            "A) Partir de una concepción atomizada e abstracta del individuo, desvinculada de su comunidad y tradiciones.",
            "B) Defender un Estado excesivamente autoritario e interventor en la economía.",
            "C) Ignorar la importancia de la eficiencia económica del libre mercado.",
            "D) Rechazar la existencia de derechos humanos universales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El comunitarismo argumenta que la identidad humana está profundamente moldeada por la cultura, la comunidad y los valores compartidos, por lo que el sujeto liberal desvinculado es una abstracción errónea."
    },
    {
        "id": 16,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es la característica distintiva principal de un régimen parlamentario frente a uno presidencial?",
        "opciones": [
            "A) La elección directa del jefe de Estado por sufragio universal.",
            "B) La imposibilidad constitucional de disolver el poder legislativo.",
            "C) La ausencia absoluta de partidos políticos.",
            "D) La fusión de poderes entre el ejecutivo y el legislativo, siendo el gobierno responsable ante el parlamento."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En el sistema parlamentario, el poder ejecutivo emana del parlamento y depende de su confianza continua, lo que genera una interdependencia y fusión funcional entre ambos poderes."
    },
    {
        "id": 17,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué sistema electoral tiende a generar sistemas bipartidistas y favorece la desproporcionalidad en la asignación de escaños?",
        "opciones": [
            "A) Mayoritario uninominal (primera vuelta / *first-past-the-post*).",
            "B) Representación proporcional con listas cerradas.",
            "C) Representación proporcional mixta compensatoria.",
            "D) Voto único transferible."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ley de Duverger establece que el sistema electoral mayoritario de un solo turno tiende sociológicamente al bipartidismo debido al voto estratégico y al desperdicio de votos de terceras fuerzas."
    },
    {
        "id": 18,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cómo se define un régimen político de carácter 'autoritario' según la tipología clásica de Juan Linz?",
        "opciones": [
            "A) Pluralismo político limitado, ausencia de ideología intensiva y baja movilización política.",
            "B) Competencia electoral abierta, vigencia plena del estado de derecho y alternancia pacífica.",
            "C) Ausencia total de gobierno centralizado y predominio de la ley tribal.",
            "D) Total monopolio del poder, ideología utópica integral y terrorismo de Estado sistemático."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Linz distingue el autoritarismo del totalitarismo señalando que el primero presenta un pluralismo limitado y no mobiliza ideológicamente a las masas de manera intensa, operando frecuentemente bajo liderazgos personalistas."
    },
    {
        "id": 19,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué se entiende por 'transición democrática' en la ciencia política comparada?",
        "opciones": [
            "A) El proceso de modernización económica industrial.",
            "B) La descentralización fiscal de un Estado unitario.",
            "C) El intervalo entre un régimen autoritario y el establecimiento de una democracia consolidada.",
            "D) La sustitución de un sistema parlamentario por uno presidencialista."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Según O'Donnell y Schmitter, la transición es el intervalo temporal que media entre la disolución de un régimen autoritario y la instauración de alguna forma de democracia."
    },
    {
        "id": 20,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es el principal mecanismo de control constitucional en un sistema de tipo presidencialista?",
        "opciones": [
            "A) El control de constitucionalidad (judicial review) ejercido por tribunales o cortes supremas.",
            "B) La moción de censura y el voto de no confianza.",
            "C) La designación directa de los magistrados por referéndum popular.",
            "D) La disolución anticipada del congreso por decreto presidencial."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En el presidencialismo, la revisión judicial (*judicial review*) es el mecanismo clave mediante el cual el poder judicial puede declarar inconstitucionales actos del ejecutivo o legislativo."
    },
    {
        "id": 21,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es la 'ingeniería constitucional' según Giovanni Sartori?",
        "opciones": [
            "A) La privatización de empresas paraestatales.",
            "B) La construcción física de edificios para albergar los poderes de la Unión.",
            "C) La reforma militar de las fuerzas armadas nacionales.",
            "D) El diseño deliberado de instituciones y reglas electorales para moldear el comportamiento político y garantizar la gobernabilidad."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Sartori acuñó el término para referirse al diseño institucional consciente (sistemas electorales, formas de gobierno) que busca optimizar el rendimiento y la estabilidad democrática."
    },
    {
        "id": 22,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué caracteriza a un sistema de partido hegemónico?",
        "opciones": [
            "A) Los partidos políticos están proscritos y el gobierno es militar.",
            "B) Varios partidos compiten en igualdad de condiciones y alternan en el poder.",
            "C) Un partido monopoliza el poder de manera prolongada mientras existen partidos secundarios legalmente tolerados pero sin posibilidad real de alternancia.",
            "D) Está prohibido por ley la existencia de más de una organización política."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Sartori clasifica al sistema de partido hegemónico (como el PRI histórico en México) como aquel donde un partido ocupa el poder de forma continua sin alternancia real, aunque coexistan otros partidos menores."
    },
    {
        "id": 23,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es la función principal de los grupos de interés (pressure groups) en el sistema político?",
        "opciones": [
            "A) Impartir justicia en conflictos laborales y civiles.",
            "B) Administrar el presupuesto de egresos de la federación.",
            "C) Influir en la toma de decisiones públicas y en las políticas gubernamentales en favor de sectores específicos.",
            "D) Presentar candidatos propios a puestos de elección popular para ganar el gobierno."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "A diferencia de los partidos políticos, los grupos de interés no buscan ocupar cargos de gobierno, sino presionar a las autoridades para que adopten decisiones favorables a sus demandas sectoriales."
    },
    {
        "id": 24,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es el federalismo cooperativo?",
        "opciones": [
            "A) La centralización absoluta de todas las funciones públicas en el gobierno central.",
            "B) Un modelo donde la federación y los estados operan de manera totalmente aislada y sin contacto.",
            "C) Un esquema de concurrencia y corresponsabilidad financiera e institucional entre niveles de gobierno para atender asuntos públicos.",
            "D) La disolución de los estados federados para crear repúblicas independientes."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El federalismo cooperativo implica la superposición de funciones y la colaboración financiera y administrativa entre la federación, los estados y los municipios para la provisión de bienes públicos."
    },
    {
        "id": 25,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué indicador mide la fragmentación del sistema de partidos políticos?",
        "opciones": [
            "A) El Índice de Laakso y Taagepera (Número Efectivo de Partidos).",
            "B) El coeficiente de Gini.",
            "C) El índice de percepción de la corrupción.",
            "D) La tasa de participación electoral."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Número Efectivo de Partidos (NEP) calcula la cantidad ponderada de partidos políticos con peso real en un sistema, ya sea medido por votos o por escaños parlamentarios."
    },
    {
        "id": 26,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué se entiende por 'accountability horizontal' según Guillermo O'Donnell?",
        "opciones": [
            "A) La subordinación de los gobernadores a las decisiones del presidente de la república.",
            "B) La supervisión de las ONG internacionales sobre la política nacional.",
            "C) La rendición de cuentas de los gobernantes ante los ciudadanos en las urnas.",
            "D) El control mutuo y la fiscalización entre poderes estatales independientes (ej. el poder judicial fiscalizando al ejecutivo)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La accountability horizontal se refiere a la existencia de redes de agencias estatales (tribunales, auditorías, fiscalías) con poder legal para supervisar, prevenir y sancionar actos ilícitos de otros poderes."
    },
    {
        "id": 27,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es la diferencia fundamental entre democracia directa y democracia representativa?",
        "opciones": [
            "A) La democracia representativa solo existe en regímenes monárquicos.",
            "B) La democracia directa utiliza urnas electrónicas y la representativa usa boletas de papel.",
            "C) La democracia directa es exclusiva de los municipios rurales.",
            "D) En la directa los ciudadanos deciden las leyes sin intermediarios, mientras que en la representativa eligen delegados para legislar en su nombre."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La democracia directa implica la participación inmediata de la ciudadanía en la toma de decisiones públicas (referéndum, plebiscito), mientras que la representativa delega esa función en representantes electos."
    },
    {
        "id": 28,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es el clientelismo político?",
        "opciones": [
            "A) La participación ciudadana basada en deliberación racional.",
            "B) La contratación meritocrática de funcionarios en la administración pública.",
            "C) Un sistema de intercambio asimétrico de favores y recursos públicos a cambio de apoyo político y electoral.",
            "D) La transparencia absoluta en las licitaciones de obra pública."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El clientelismo describe una relación de dependencia donde los actores políticos distribuyen bienes, subsidios o empleos a cambio de lealtad y votos de los ciudadanos."
    },
    {
        "id": 29,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es el propósito principal de una cláusula de barrera (*threshold*) en los sistemas electorales proporcionales?",
        "opciones": [
            "A) Evitar la fragmentación excesiva del parlamento impidiendo la entrada a partidos con bajo porcentaje de votación.",
            "B) Garantizar que ningún partido obtenga la mayoría absoluta de los votos.",
            "C) Financiar las campañas electorales de los partidos minoritarios.",
            "D) Obligar a los partidos políticos a postular candidatos independientes."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El umbral electoral (porcentaje mínimo de votos, ej. 3%) busca asegurar la gobernabilidad parlamentaria impidiendo la proliferación de partidos minúsculos en el órgano legislativo."
    },
    {
        "id": 30,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es la 'consolidación democrática' según Juan Linz y Alfred Stepan?",
        "opciones": [
            "A) La supresión de los partidos de oposición tras una crisis.",
            "B) Una condición en la que la democracia es 'el único juego en la ciudad', donde actores e instituciones aceptan sus reglas sin cuestionamiento antisistema.",
            "C) La nacionalización de la banca y el control estatal de la economía.",
            "D) El momento exacto en que se realiza la primera elección libre."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La consolidación implica que la democracia se ha arraigado profundamente en las costumbres, conductas y expectativas políticas, volviéndose irreversible en el corto y mediano plazo."
    },
    {
        "id": 31,
        "area": "Política Pública y Administración Pública",
        "pregunta": "Según el ciclo de las políticas públicas, ¿cuál es la primera fase del proceso?",
        "opciones": [
            "A) Evaluación de resultados",
            "B) Implementación",
            "C) Formulación y diseño",
            "D) Identificación y definición del problema"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El ciclo de políticas públicas inicia con la identificación y construcción social del problema público, determinando qué asuntos merecen la atención gubernamental en la agenda."
    },
    {
        "id": 32,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué caracteriza al modelo de 'Nueva Gestión Pública' (NGP / *New Public Management*)?",
        "opciones": [
            "A) La incorporación de prácticas del sector privado, enfoque en resultados, eficiencia, competencia de mercado y orientación al ciudadano-cliente.",
            "B) La estatización de todas las actividades económicas del país.",
            "C) La abolición de toda evaluación de impacto en los programas sociales.",
            "D) La centralización burocrática y el apego estricto a los reglamentos jerárquicos weberianos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Nueva Gestión Pública busca reformar el aparato estatal introduciendo herramientas gerenciales del sector privado, descentralización y medición estricta del desempeño por resultados."
    },
    {
        "id": 33,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué evalúa una evaluación de impacto en el ciclo de las políticas públicas?",
        "opciones": [
            "A) El número de folios y expedientes archivados en las oficinas públicas.",
            "B) La opinión favorable del titular de la dependencia gubernamental.",
            "C) El costo monetario de los insumos comprados mediante licitación.",
            "D) Los cambios netos y atribuibles que un programa o política generó en la población beneficiaria en comparación con un escenario sin el programa."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La evaluación de impacto mide los efectos causales (a mediano y largo plazo) del programa sobre el bienestar de la población, aislando el impacto real del programa de otros factores externos."
    },
    {
        "id": 34,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Cuál es el significado del término 'agenda setting' (establecimiento de la agenda) en el análisis de políticas públicas?",
        "opciones": [
            "A) La calendarización de las vacaciones del personal administrativo del Estado.",
            "B) El proceso mediante el cual ciertos problemas públicos captan la atención de los tomadores de decisiones y entran en la agenda gubernamental.",
            "C) El registro notarial de las empresas proveedoras del gobierno.",
            "D) La programación legislativa de sesiones ordinarias en el congreso."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El *agenda setting* analiza cómo y por qué determinados temas logran superar la barrera de la indiferencia pública y política para convertirse en prioridades de la acción gubernamental."
    },
    {
        "id": 35,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es la gobernanza (*governance*) en contraste con el gobierno tradicional (*government*)?",
        "opciones": [
            "A) Un modo de coordinación social donde participan actores estatales y no estatales (sociedad civil, mercado) en redes de colaboración y corresponsabilidad.",
            "B) El control estricto de los precios de la canasta básica por el ejército.",
            "C) La eliminación de los congresos locales por decreto federal.",
            "D) Un sistema donde solo los militares toman decisiones presupuestales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La gobernanza supera la visión jerárquica del gobierno centralizado, reconociendo que los problemas complejos se resuelven mediante la interacción y coinnovación de múltiples actores públicos y privados."
    },
    {
        "id": 36,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Cuál es el propósito de un análisis de costo-beneficio en la fase de formulación de una política pública?",
        "opciones": [
            "A) Determinar si los beneficios monetarios esperados de un proyecto superan sus costos económicos totales.",
            "B) Calcular el salario ideal de los secretarios de Estado.",
            "C) Evaluar la popularidad electoral del presidente en turno.",
            "D) Establecer los impuestos que pagarán las grandes corporaciones."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El análisis costo-beneficio cuantifica y compara en términos monetarios todos los costos y beneficios sociales esperados de una política para decidir si es socialmente rentable."
    },
    {
        "id": 37,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué modelo de burocracia ideal describió Max Weber caracterizado por la jerarquía, la especialización, la impersonalidad y las reglas escritas?",
        "opciones": [
            "A) Burocracia carismática",
            "B) Burocracia patrimonial",
            "C) Burocracia clientelar",
            "D) Burocracia legal-racional"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Weber diseñó el tipo ideal de la burocracia legal-racional como la forma de organización administrativa más eficiente para la gestión moderna, basada en la competencia técnica y normas preestablecidas."
    },
    {
        "id": 38,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es la implementación de políticas públicas 'top-down' (de arriba hacia abajo)?",
        "opciones": [
            "A) La descentralización absoluta de los recursos fiscales a los municipios.",
            "B) Un enfoque que concibe la implementación como la ejecución jerárquica de directrices y mandatos diseñados por los altos niveles de autoridad.",
            "C) La negociación espontánea entre sindicatos y empresarios sin intervención estatal.",
            "D) Un enfoque que parte de los beneficiarios locales para diseñar las leyes desde la base."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo *top-down* asume que las políticas se originan en los tomadores de decisiones centrales y se implementan a través de cadenas jerárquicas de mando, priorizando el cumplimiento de los objetivos originales."
    },
    {
        "id": 39,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es la implementación 'bottom-up' (de abajo hacia arriba) en el análisis de políticas públicas?",
        "opciones": [
            "A) El veto presidencial a las leyes aprobadas por el congreso.",
            "B) Un enfoque que analiza la implementación centrándose en las redes de actores locales y los burócratas de ventanilla (*street-level bureaucrats*) que interactúan con los ciudadanos.",
            "C) Un enfoque que prioriza la autoridad absoluta del jefe de Estado sobre los burócratas.",
            "D) La revisión exclusiva de los estados financieros federales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo *bottom-up* (Lipsky, Hjern) sostiene que el éxito o fracaso de una política depende en gran medida de la discrecionalidad y acción de los operadores de primera línea (*street-level bureaucrats*)."
    },
    {
        "id": 40,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué se entiende por 'transparencia proactiva' en la administración pública contemporánea?",
        "opciones": [
            "A) Permitir que los partidos políticos auditen las cuentas bancarias de los funcionarios.",
            "B) La obligación del Estado de publicar por iniciativa propia y en formatos accesibles información útil, relevante y de interés público sin que medie solicitud previa.",
            "C) Clasificar como reservados todos los contratos de obra pública por seguridad nacional.",
            "D) Esperar a que un ciudadano presente una solicitud de información para buscar el documento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La transparencia proactiva rompe con la espera pasiva de solicitudes, exigiendo a los entes públicos difundir de manera anticipada datos sobre presupuestos, sueldos, contratos y resultados."
    },
    {
        "id": 41,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es la rendición de cuentas vertical (*vertical accountability*)?",
        "opciones": [
            "A) El mecanismo mediante el cual los ciudadanos y las organizaciones de la sociedad civil exigen cuentas a los gobernantes a través de elecciones, auditorías sociales y movilización.",
            "B) La subordinación de los secretarios de Estado al presidente de la república.",
            "C) La supervisión internacional de los organismos multilaterales de crédito.",
            "D) El control que ejerce el poder judicial sobre el poder ejecutivo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La rendición de cuentas vertical ocurre entre actores situados en distintos niveles jerárquicos de poder, principalmente cuando la ciudadanía evalúa y sanciona/premia a sus gobernantes en las urnas."
    },
    {
        "id": 42,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Cuál es el objetivo de un presupuesto basado en resultados (PBR)?",
        "opciones": [
            "A) Vincular la asignación presupuestal al cumplimiento de metas e indicadores de desempeño previamente establecidos para mejorar la eficiencia del gasto.",
            "B) Asignar recursos únicamente con base en el gasto histórico del año anterior.",
            "C) Permitir que cada dependencia gaste su presupuesto sin comprobar facturas.",
            "D) Reducir los impuestos directos a las empresas transnacionales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El PbR transforma la gestión financiera gubernamental al condicionar la entrega de recursos presupuestales a la demostración de avances tangibles en los objetivos y bienes públicos entregados."
    },
    {
        "id": 43,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué son las 'fallas de mercado' que justifican la intervención del Estado en la economía?",
        "opciones": [
            "A) Situaciones como monopolios naturales, externalidades (contaminación), bienes públicos y asimetrías de información donde el mercado no asigna eficientemente los recursos.",
            "B) La celebración de elecciones libres y competidas.",
            "C) Las protestas sindicales en las fábricas privadas.",
            "D) La caída en la recaudación fiscal por exceso de inspectores."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las fallas de mercado son ineficiencias económicas estructurales donde la libre competencia no maximiza el bienestar social, lo que legitima la regulación, provisión o intervención estatal."
    },
    {
        "id": 44,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es un 'bien público puro' en teoría económica y de políticas públicas?",
        "opciones": [
            "A) Un producto que se vende en los supermercados con subsidio gubernamental.",
            "B) Un bien que es no rival en el consumo y no excluible, lo que impide cobrar por su uso individual y genera riesgo de polizón (*free rider*).",
            "C) Un servicio médico privado de alta especialidad.",
            "D) Un bien que es fabricado exclusivamente por empresas estatales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los bienes públicos puros (como la defensa nacional o el alumbrado público) se caracterizan porque el consumo de uno no reduce la disponibilidad para otro (no rival) y nadie puede ser impedido de disfrutarlo (no excluible)."
    },
    {
        "id": 45,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Cuál es el propósito central de la profesionalización del servicio civil de carrera?",
        "opciones": [
            "A) Garantizar la estabilidad laboral de los amigos del partido gobernante.",
            "B) Aumentar el número de burócratas en las oficinas centrales.",
            "C) Asegurar que el ingreso, permanencia y promoción de los funcionarios públicos se basen en el mérito, la capacidad y la oposición abierta, reduciendo la arbitrariedad política.",
            "D) Privatizar las funciones de seguridad pública."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El servicio civil de carrera busca consolidar una administración pública profesional, neutral y técnicamente competente, blindándola de los vaivenes políticos y el clientelismo."
    },
    {
        "id": 46,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué caracteriza al método comparativo en la ciencia política?",
        "opciones": [
            "A) La especulación filosófica sobre el Estado ideal.",
            "B) El análisis de un solo caso histórico en profundidad sin buscar generalizaciones.",
            "C) El estudio sistemático de semejanzas y diferencias entre un número limitado o amplio de casos (países, regiones, instituciones) para establecer correlaciones causales.",
            "D) La realización de experimentos de laboratorio con ratas en psicología política."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El método comparativo (como los diseños de sistemas similares y sistemas diferentes de Przeworski y Teune) busca contrastar casos para probar hipótesis y explicar fenómenos políticos."
    },
    {
        "id": 47,
        "area": "Metodología y Estadística Política",
        "pregunta": "En la investigación empírica, ¿qué es una variable independiente?",
        "opciones": [
            "A) El fenómeno o resultado que se intenta explicar (efecto).",
            "B) El factor o causa supuesta que provoca cambios en otra variable.",
            "C) Un error de medición en las encuestas de opinión.",
            "D) Una constante matemática que nunca cambia."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La variable independiente representa la causa o factor explicativo en un modelo analítico, cuyo impacto se mide sobre la variable dependiente (el efecto)."
    },
    {
        "id": 48,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué mide el coeficiente de correlación de Pearson (*r*)?",
        "opciones": [
            "A) La probabilidad de que una encuesta tenga sesgo de falta de respuesta.",
            "B) La fuerza y dirección de la relación lineal entre dos variables cuantitativas.",
            "C) La diferencia de medias entre dos poblaciones independientes.",
            "D) La desigualdad en la distribución de ingresos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El coeficiente de Pearson oscila entre -1 y +1, indicando la intensidad y sentido (positivo o negativo) de la asociación lineal entre dos variables continuas."
    },
    {
        "id": 49,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es una muestra representativa en las encuestas de opinión pública?",
        "opciones": [
            "A) Un censo total de todos los habitantes del país.",
            "B) Un subconjunto de la población seleccionado mediante un procedimiento probabilístico que garantiza que todas las unidades tengan una probabilidad conocida y distinta de cero de ser elegidas.",
            "C) Un grupo de amigos del encuestador seleccionados por conveniencia.",
            "D) Una muestra de tamaño superior a 10 millones de personas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La representatividad estadística se logra mediante muestreos probabilísticos (aleatorios simples, estratificados, por conglomerados), permitiendo inferir los resultados a toda la población con un margen de error conocido."
    },
    {
        "id": 50,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué evalúa el error estándar en la estimación estadística?",
        "opciones": [
            "A) El sesgo en la redacción de las preguntas.",
            "B) La variabilidad o dispersión de una estadística muestral (como la media o proporción) en repetidos muestreos de la misma población.",
            "C) El costo financiero de aplicar cuestionarios en campo.",
            "D) La cantidad de mentiras que dicen los encuestados."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El error estándar mide la precisión de una estimación muestral; a menor error estándar, mayor precisión y cercanía del estadístico con el parámetro poblacional real."
    },
    {
        "id": 51,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué diferencia metodológica fundamental existe entre la investigación cualitativa y la cuantitativa en ciencia política?",
        "opciones": [
            "A) La cuantitativa no acepta el uso de hipótesis.",
            "B) La cualitativa usa computadoras y la cuantitativa no.",
            "C) La cuantitativa busca la medición numérica y la generalización estadística mediante grandes muestras, mientras que la cualitativa busca la comprensión profunda de significados y procesos a través de pocos casos (estudio de caso, etnografía).",
            "D) La cualitativa es superior en todos los campos científicos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Ambas aproximaciones son complementarias: la cuantitativa prioriza la amplitud, generalización y estadística, mientras que la cualitativa prioriza la profundidad, el contexto y el análisis procesual."
    },
    {
        "id": 52,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es una encuesta de panel (*panel survey*) en la investigación electoral?",
        "opciones": [
            "A) Un estudio longitudinal donde se entrevista a exactamente las mismas personas en múltiples momentos del tiempo para rastrear cambios en sus preferencias políticas.",
            "B) Una entrevista grupal con expertos en economía.",
            "C) Un panel de discusión televisado entre candidatos.",
            "D) Un análisis estadístico de los resultados oficiales del día de la elección."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las encuestas de panel permiten observar la dinámica y la volatilidad del voto individual durante una campaña electoral, entrevistando repetidamente a la misma cohorte de encuestados."
    },
    {
        "id": 53,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué mide el coeficiente de Gini en el análisis socioeconómico?",
        "opciones": [
            "A) El grado de corrupción gubernamental.",
            "B) La tasa de crecimiento del Producto Interno Bruto.",
            "C) La desigualdad en la distribución del ingreso o de la riqueza dentro de una población, donde 0 es igualdad perfecta y 1 es desigualdad absoluta.",
            "D) La volatilidad electoral en un sistema multipartidista."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El índice de Gini es la medida estándar de desigualdad económica, derivado de la Curva de Lorenz, ampliamente utilizado en políticas públicas para evaluar equidad."
    },
    {
        "id": 54,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es la multicolinealidad en un modelo de regresión múltiple?",
        "opciones": [
            "A) La ausencia total de relación entre las variables independientes.",
            "B) La normalidad en los residuos del modelo.",
            "C) Un error en la recolección de los datos de la encuesta.",
            "D) La alta correlación estadística entre dos o más variables independientes, lo que dificulta estimar con precisión sus efectos individuales sobre la variable dependiente."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La multicolinealidad es un problema econométrico y estadístico donde los predictores están altamente correlacionados entre sí, inflando las varianzas de los coeficientes estimados."
    },
    {
        "id": 55,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es la validez de constructo en la medición de conceptos políticos abstractos (ej. 'democracia' o 'cultura cívica')?",
        "opciones": [
            "A) Que el software estadístico no marque errores de sintaxis.",
            "B) Que la encuesta se aplique en papel reciclado.",
            "C) Que los resultados coincidan con las encuestas de salida el día de la elección.",
            "D) La capacidad del instrumento de medición para reflejar fielmente el concepto teórico que pretende medir."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La validez de constructo garantiza que los indicadores empíricos diseñados capturen adecuadamente la definición conceptual y teórica del fenómeno político estudiado."
    },
    {
        "id": 56,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es un experimento natural en ciencia política?",
        "opciones": [
            "A) Un experimento realizado en un laboratorio controlado con estudiantes universitarios.",
            "B) Una encuesta telefónica sobre ecología.",
            "C) Una situación empírica donde un evento externo o la asignación institucional (ej. un desastre, un sorteo) asigna aleatoriamente tratamientos a los sujetos de estudio sin intervención directa del investigador.",
            "D) La simulación por computadora de una guerra civil."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los experimentos naturales aprovechan ocurrencias del mundo real donde la naturaleza o la política asignan tratamientos de forma cuasi-aleatoria, permitiendo inferir causalidad robusta."
    },
    {
        "id": 57,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué evalúa una prueba de hipótesis estadística?",
        "opciones": [
            "A) La velocidad de procesamiento de datos del ordenador.",
            "B) La probabilidad de que los resultados observados en una muestra se deban al azar, permitiendo decidir si se rechaza o no la hipótesis nula.",
            "C) La honestidad moral de los candidatos.",
            "D) El costo de la campaña electoral por voto obtenido."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las pruebas de hipótesis (como t de Student o Chi-cuadrada) calculan la probabilidad (valor p) de obtener los resultados muestrales bajo el supuesto de que la hipótesis nula es verdadera."
    },
    {
        "id": 58,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es el sesgo de selección en la investigación científica?",
        "opciones": [
            "A) La preferencia personal del investigador por un partido político.",
            "B) El error al calcular la media aritmética de una variable.",
            "C) Un error donde la muestra no es representativa de la población objetivo debido a la forma en que fueron seleccionados los casos, invalidando la generalización.",
            "D) La elección de preguntas cortas en un cuestionario."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El sesgo de selección distorsiona los hallazgos empíricos cuando los sujetos u objetos analizados no reflejan fielmente a la población general debido a criterios defectuosos de inclusión."
    },
    {
        "id": 59,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué mide la mediana en un conjunto de datos estadísticos?",
        "opciones": [
            "A) El valor que aparece con mayor frecuencia en la distribución.",
            "B) La diferencia entre el valor máximo y el valor mínimo.",
            "C) El valor que divide exactamente a la mitad el conjunto de datos ordenados de menor a mayor.",
            "D) El promedio aritmético de todos los valores."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La mediana es la medida de tendencia central que ocupa la posición central de los datos ordenados, siendo robusta ante valores atípicos (*outliers*)."
    },
    {
        "id": 60,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Cuál es la utilidad del análisis de regresión logística en ciencia política?",
        "opciones": [
            "A) Organizar las actas electorales en casillas.",
            "B) Predecir una variable dependiente continua (como el PIB).",
            "C) Modelar la probabilidad de ocurrencia de un evento dicotómico (ej. votar o no votar, ganar o perder una elección) en función de variables explicativas.",
            "D) Calcular el presupuesto de egresos de un municipio."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La regresión logística es la técnica estadística estándar cuando la variable dependiente es binaria (0 o 1), permitiendo estimar el impacto de múltiples predictores en dicha probabilidad."
    },
    {
        "id": 61,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es el artículo de la Constitución Política de los Estados Unidos Mexicanos que consagra las garantías individuales y los derechos humanos?",
        "opciones": [
            "A) Artículos 73 y 74",
            "B) Artículos 115 y 123",
            "C) Artículos 1 al 29",
            "D) Artículos 30 al 38"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los primeros 29 artículos de la Constitución mexicana regulan los derechos humanos, su protección, restricciones y garantías, destacando la reforma constitucional de derechos humanos de 2011."
    },
    {
        "id": 62,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué establece el Artículo 115 de la Constitución mexicana respecto al municipio libre?",
        "opciones": [
            "A) Que los municipios pueden contraer deuda en moneda extranjera sin autorización del congreso local.",
            "B) Que los presidentes municipales tienen fuero constitucional federal.",
            "C) Que constituye la base de la división territorial y de la organización política y administrativa del Estado, con personalidad jurídica y patrimonio propios.",
            "D) Que el municipio depende administrativamente de las secretarías de Estado federales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Artículo 115 define al municipio libre como nivel básico de gobierno, dotado de facultades exclusivas para la administración de servicios públicos locales (agua, alumbrado, policía de tránsito municipal)."
    },
    {
        "id": 63,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué organismo público autónomo en México es responsable de garantizar el derecho de acceso a la información pública y la protección de datos personales?",
        "opciones": [
            "A) Banco de México",
            "B) INE",
            "C) INAI",
            "D) INEGI"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) es el órgano garante autónomo encargado de cumplir y hacer cumplir la transparencia gubernamental."
    },
    {
        "id": 64,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué caracteriza al sistema político mexicano durante el periodo de hegemonía del PRI (1929-2000), según la literatura politológica?",
        "opciones": [
            "A) Una dictadura militar abierta sin partidos de oposición.",
            "B) Un régimen democrático parlamentario con alternancia frecuente.",
            "C) Un sistema federal descentralizado con absoluta autonomía municipal.",
            "D) Una presidencia imperial o autoritarismo con fachada democrática y corporativismo de Estado."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El régimen político mexicano postrevolucionario se caracterizó por un presidencialismo fuerte, control centralizado, corporativismo (sectores obrero, campesino y popular) y elecciones controladas."
    },
    {
        "id": 65,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál fue la trascendencia de la reforma político-electoral de 1977 en México (impulsada por Jesús Reyes Heroles)?",
        "opciones": [
            "A) La disolución de los partidos políticos nacionales.",
            "B) La privatización de la industria petrolera.",
            "C) La introducción de diputaciones por el principio de representación proporcional, permitiendo la legalización e inclusión de la izquierda y la oposición en el Congreso.",
            "D) La creación del Banco de México como órgano autónomo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La reforma de 1977 abrió espacios institucionales a la oposición (especialmente comunista y socialista) mediante la introducción de la representación proporcional, iniciando la transición política."
    },
    {
        "id": 66,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué función principal tiene el Banco de México como órgano constitucional autónomo?",
        "opciones": [
            "A) Administrar las reservas internacionales en oro de los gobernadores.",
            "B) Recaudar el Impuesto Sobre la Renta (ISR) a nivel nacional.",
            "C) Procurar la estabilidad del poder adquisitivo de la moneda nacional (control de la inflación) y conducir la política monetaria.",
            "D) Otorgar créditos con tasa preferencial a los pequeños empresarios."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "De acuerdo con el Artículo 28 constitucional, el objetivo prioritario del Banco de México es procurar la estabilidad de precios, operando con autonomía para evitar la manipulación inflacionaria."
    },
    {
        "id": 67,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué es el Sistema Nacional Anticorrupción (SNA) en México?",
        "opciones": [
            "A) Un tribunal militar encargado de juzgar a generales corruptos.",
            "B) Una instancia de coordinación entre autoridades de todos los órdenes de gobierno para la prevención, detección y sanción de responsabilidades administrativas y hechos de corrupción.",
            "C) Una organización no gubernamental internacional.",
            "D) Una secretaría de Estado subordinada directamente al poder judicial."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El SNA (creado en 2015-2016) articula a diversos órganos como la Auditoría Superior de la Federación, el Tribunal Federal de Justicia Administrativa y el INAI para combatir sistémicamente la corrupción."
    },
    {
        "id": 68,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es el artículo constitucional mexicano que regula las facultades exclusivas del Congreso de la Unión para legislar en materia de hidrocarburos, electricidad, comercio y presupuestos?",
        "opciones": [
            "A) Artículo 123",
            "B) Artículo 89",
            "C) Artículo 73",
            "D) Artículo 27"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Artículo 73 de la Constitución detalla las facultades explícitamente conferidas al Congreso de la Unión para legislar en todo el territorio nacional sobre diversas materias federales."
    },
    {
        "id": 69,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué organismo electoral federal en México organiza las elecciones federales y garantiza la imparcialidad comicial tras la reforma de 2014?",
        "opciones": [
            "A) Tribunal Electoral del Poder Judicial de la Federación (TEPJF)",
            "B) Instituto Nacional Electoral (INE)",
            "C) Comisión Federal Electoral (CFE)",
            "D) Instituto Federal Electoral (IFE)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El INE sustituyó al IFE en 2014, convirtiéndose en un organismo público autónomo de carácter nacional que coordina las elecciones federales y colabora con los organismos locales (OPL)."
    },
    {
        "id": 70,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué es el juicio de amparo en el derecho y sistema político mexicano?",
        "opciones": [
            "A) Un procedimiento penal para condenar a secuestradores.",
            "B) Una moción de censura parlamentaria contra los secretarios de Estado.",
            "C) Un recurso legal para que el presidente disuelva el congreso.",
            "D) Un medio de control constitucional que protege a los ciudadanos contra actos de autoridad o leyes que violen sus derechos humanos consagrados en la Constitución."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El juicio de amparo es una institución jurídica mexicana emblemática de protección de los derechos fundamentales frente a abusos u omisiones de cualquier autoridad pública."
    },
    {
        "id": 71,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué caracteriza al sistema federal mexicano en la práctica fiscal e intergubernamental?",
        "opciones": [
            "A) La prohibición de que la federación cobre impuestos directos.",
            "B) La recaudación exclusiva de impuestos locales por parte de los municipios.",
            "C) Una alta dependencia de los gobiernos estatales y municipales de las transferencias federales (participaciones y aportaciones del Ramo 28 y Ramo 33).",
            "D) Una absoluta independencia financiera de los estados respecto a la federación."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El federalismo fiscal mexicano se caracteriza por una fuerte centralización recaudatoria (la federación recauda la mayoría de los impuestos) y una redistribución mediante transferencias federales condicionadas e incondicionadas."
    },
    {
        "id": 72,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es la función del Tribunal Electoral del Poder Judicial de la Federación (TEPJF)?",
        "opciones": [
            "A) Auditar los gastos de campaña de los partidos políticos.",
            "B) Emitir credenciales para votar con fotografía.",
            "C) Ser la máxima autoridad jurisdiccional en materia electoral y resolver las impugnaciones de las elecciones federales y locales.",
            "D) Nombrar a los consejeros del Instituto Nacional Electoral."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El TEPJF es el órgano especializado del Poder Judicial de la Federación encargado de impartir justicia electoral, siendo su última instancia la calificación y validez de la elección presidencial."
    },
    {
        "id": 73,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué significó la alternancia política presidencial del año 2000 en México?",
        "opciones": [
            "A) La llegada del Partido Acción Nacional (PAN) a la presidencia con Vicente Fox, poniendo fin a 71 años de gobiernos consecutivos del PRI.",
            "B) La disolución del Congreso de la Unión por mandato judicial.",
            "C) La nacionalización de la banca comercial privada.",
            "D) La instauración de un régimen parlamentario en sustitución del presidencialismo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La elección del año 2000 marcó un hito en la transición democrática mexicana al producirse por primera vez la alternancia pacífica en el Poder Ejecutivo federal."
    },
    {
        "id": 74,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué regula la Ley General de Responsabilidades Administrativas en México?",
        "opciones": [
            "A) Las faltas administrativas y los actos de corrupción en los que incurren los servidores públicos, así como las sanciones aplicables y los procedimientos para investigarlos.",
            "B) El presupuesto asignado a las fuerzas armadas.",
            "C) Los requisitos para fundar un nuevo partido político nacional.",
            "D) Las tarifas del servicio eléctrico doméstico."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Esta ley forma parte del Sistema Nacional Anticorrupción y establece con precisión las obligaciones de los servidores públicos, clasificando faltas administrativas graves y no graves."
    },
    {
        "id": 75,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es el papel de la Auditoría Superior de la Federación (ASF)?",
        "opciones": [
            "A) Ser el órgano técnico de fiscalización superior de la Cámara de Diputados, encargado de revisar la Cuenta Pública y el uso de los recursos federales.",
            "B) Decidir qué partidos políticos pierden su registro.",
            "C) Investigar delitos penales de narcotráfico.",
            "D) Controlar la emisión de billetes y monedas del país."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ASF audita cómo gastan los recursos públicos federales los poderes, estados, municipios y entes públicos, rindiendo informes directamente a la Cámara de Diputados."
    },
    {
        "id": 76,
        "area": "Sección Transversal",
        "pregunta": "¿Qué implica el enfoque de género en el diseño e implementación de políticas públicas?",
        "opciones": [
            "A) Eliminar el uso de estadísticas desagregadas por sexo.",
            "B) Asignar el 90% del presupuesto público a secretarías dirigidas por mujeres.",
            "C) Excluir a los hombres de todos los programas gubernamentales de asistencia.",
            "D) Analizar y visibilizar de manera sistemática las diferencias en las realidades, necesidades y oportunidades entre mujeres y hombres para corregir desigualdades históricas."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El análisis con perspectiva de género evalúa el impacto diferenciado de las políticas públicas en mujeres y hombres, buscando garantizar la igualdad sustantiva y el ejercicio de derechos."
    },
    {
        "id": 77,
        "area": "Sección Transversal",
        "pregunta": "¿Qué se entiende por desarrollo sustentable (*sustainable development*) según el informe Brundtland?",
        "opciones": [
            "A) La subvención gubernamental a la industria automotriz.",
            "B) La congelación absoluta de la actividad industrial en zonas urbanas.",
            "C) El crecimiento económico ilimitado basado en la explotación intensiva de combustibles fósiles.",
            "D) Aquel desarrollo que satisface las necesidades de las generaciones presentes sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La definición clásica del desarrollo sustentable subraya la interdependencia entre crecimiento económico, equidad social y preservación de los ecosistemas naturales a largo plazo."
    },
    {
        "id": 78,
        "area": "Sección Transversal",
        "pregunta": "¿Qué es la ética pública en el ejercicio de la administración gubernamental?",
        "opciones": [
            "A) La renuncia a recibir cualquier tipo de remuneración salarial.",
            "B) El cumplimiento estricto de los códigos de vestimenta en las oficinas.",
            "C) El conjunto de principios, valores y normas morales que guían la actuación de los servidores públicos, priorizando el interés general por encima del beneficio personal.",
            "D) La obligación de pertenecer a un partido político específico."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La ética pública apela a la integridad, honradez, imparcialidad y vocación de servicio que debe regir la conducta de todo funcionario en la gestión de los asuntos del Estado."
    },
    {
        "id": 79,
        "area": "Sección Transversal",
        "pregunta": "¿Cuál es el propósito central de los Derechos Humanos Universales según los tratados internacionales?",
        "opciones": [
            "A) Conceder privilegios especiales a los funcionarios de alto rango.",
            "B) Subordinar los derechos individuales a las decisiones de la mayoría en votación.",
            "C) Reconocer y proteger la dignidad inherente, la libertad y la igualdad de todas las personas sin distinción alguna.",
            "D) Limitar la soberanía de los estados solo en tiempos de guerra mundial."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los derechos humanos son prerrogativas universales, inalienables e indivisibles orientadas a garantizar la dignidad humana frente al poder del Estado."
    },
    {
        "id": 80,
        "area": "Sección Transversal",
        "pregunta": "¿Qué es la interculturalidad en la gestión pública y las políticas sociales?",
        "opciones": [
            "A) La prohibición de hablar lenguas indígenas en las escuelas.",
            "B) La separación territorial absoluta de los grupos étnicos.",
            "C) El diálogo horizontal, el respeto mutuo y la interacción equitativa entre diversas culturas que cohabitan en un Estado pluricultural.",
            "D) La imposición de una sola cultura dominante sobre las minorías étnicas."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La gestión intercultural promueve políticas públicas sensibles a la diversidad cultural, fomentando la inclusión y el reconocimiento de los pueblos indígenas y minorías."
    },
    {
        "id": 81,
        "area": "Teoría Política",
        "pregunta": "¿Qué autor es el máximo representante del liberalismo utilitarista, defendiendo que la acción política debe maximizar la felicidad y minimizar el dolor social?",
        "opciones": [
            "A) Immanuel Kant",
            "B) Thomas Aquinas",
            "C) Jeremy Bentham",
            "D) Friedrich Nietzsche"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Bentham fundó el utilitarismo, sosteniendo que la medida de lo correcto y lo incorrecto es la mayor felicidad para el mayor número de personas."
    },
    {
        "id": 82,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es el concepto clave con el que Jürgen Habermas explica la transformación de la esfera pública burguesa y su degradación por los medios de comunicación masivos?",
        "opciones": [
            "A) El fin de la historia y el último hombre",
            "B) Acción comunicativa vs. acción estratégica",
            "C) La colonización del mundo de la vida por el sistema",
            "D) La dictadura del proletariado industrial"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Habermas argumenta que la lógica instrumental del mercado y el poder burocrático ('el sistema') colonizan los espacios de deliberación y convivencia ciudadana ('el mundo de la vida')."
    },
    {
        "id": 83,
        "area": "Teoría Política",
        "pregunta": "¿Qué postula el contractualismo contemporáneo de Robert Nozick en su obra 'Anarquía, Estado y Utopía'?",
        "opciones": [
            "A) La planificación centralizada de la economía por consejos obreros.",
            "B) La defensa de un Estado mínimo limitado exclusivamente a la protección contra la fuerza, el robo y el fraude.",
            "C) La abolición total del Estado y la propiedad privada.",
            "D) La necesidad de un Estado de bienestar benefactor y redistributivo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Nozick, desde el libertarismo de derecha, argumenta que cualquier Estado que rebase las funciones mínimas de protección viola los derechos individuales de propiedad."
    },
    {
        "id": 84,
        "area": "Teoría Política",
        "pregunta": "¿Qué significa el concepto de 'anomia' introducido por Émile Durkheim y su relevancia política?",
        "opciones": [
            "A) La existencia de demasiadas leyes fiscales.",
            "B) La ausencia o descomposición de normas sociales que regulen la conducta, generando desorientación e inestabilidad política y social.",
            "C) La subordinación del poder civil al poder eclesial.",
            "D) El exceso de participación democrática en los municipios."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La anomia representa un estado de desregulación normativa donde la sociedad pierde cohesión y capacidad de integrar a los individuos, propiciando crisis políticas y sociales."
    },
    {
        "id": 85,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la aportación central de Maquiavelo en 'El Príncipe' respecto a la autonomía de la política?",
        "opciones": [
            "A) La separación de la moral tradicional de la acción política, evaluando a los gobernantes por su eficacia para conquistar y conservar el poder (*virtú* frente a *fortuna*).",
            "B) La subordinación absoluta de la política a la teología y la moral cristiana.",
            "C) La supresión de los ejércitos profesionales.",
            "D) La defensa de la democracia directa en ciudades-estado."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Maquiavelo inaugura la ciencia política moderna al analizar el poder descarnadamente, separando la razón de Estado y la eficacia política de los preceptos morales religiosos."
    },
    {
        "id": 86,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es un sistema presidencial con 'gobierno dividido'?",
        "opciones": [
            "A) Cuando el presidente pertenece a un partido político diferente al que ostenta la mayoría en una o ambas cámaras del congreso.",
            "B) Cuando el país se divide en estados federales independientes.",
            "C) Cuando el poder judicial es elegido por votación popular directa.",
            "D) Cuando el ejército toma el control del poder legislativo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El gobierno dividido en el presidencialismo (frecuente en EE.UU. o América Latina) genera incentivos para la negociación o la parálisis institucional (gridlock) entre poderes."
    },
    {
        "id": 87,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué diferencia existe entre referéndum y plebiscito?",
        "opciones": [
            "A) El referéndum es obligatorio y el plebiscito está prohibido por la constitución.",
            "B) El referéndum lo organizan los partidos y el plebiscito el ejército.",
            "C) El referéndum somete a votación leyes o reformas constitucionales, mientras que el plebiscito somete a consulta decisiones políticas de gobierno o actos de autoridad.",
            "D) No existe ninguna diferencia técnica entre ambos términos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Aunque a menudo se usan como sinónimos, el referéndum suele referirse a la aprobación o rechazo de normas jurídicas, y el plebiscito a la aprobación de actos políticos o decisiones gubernamentales concretas."
    },
    {
        "id": 88,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es el clientelismo electoral frente al voto programático?",
        "opciones": [
            "A) El clientelismo es ilegal en todas las democracias del mundo.",
            "B) El clientelismo es sinónimo de sufragio efectivo.",
            "C) El voto programático sólo existe en regímenes autoritarios.",
            "D) El clientelismo se basa en la promesa condicionada de bienes materiales individuales a cambio de apoyo, mientras que el voto programático se basa en plataformas ideológicas y políticas públicas generales."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El contraste analítico radica en que el clientelismo opera mediante intercambios particularistas y transaccionales, en tanto que el voto programático valora propuestas colectivas de política."
    },
    {
        "id": 89,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es la volatilidad electoral?",
        "opciones": [
            "A) El porcentaje de votos nulos emitidos en una elección.",
            "B) El número de incidentes violentos en las casillas.",
            "C) La tasa neta de cambio en el apoyo electoral de los partidos de una elección a otra (Índice de Pedersen).",
            "D) La frecuencia con que los presidentes renuncian al cargo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El índice de volatilidad de Pedersen mide la inestabilidad de las preferencias del electorado y la lealtad partidaria midiendo qué proporción de votos cambia de partido entre dos comicios consecutivos."
    },
    {
        "id": 90,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Cuál es el propósito del control de constitucionalidad abstracto?",
        "opciones": [
            "A) Resolver un conflicto judicial entre dos ciudadanos particulares.",
            "B) Revisar la conformidad de una ley con la constitución a iniciativa de autoridades legitimadas, sin necesidad de que exista un caso o litigio pendiente.",
            "C) Juzgar al presidente por delitos fiscales.",
            "D) Evaluar el desempeño físico de los legisladores."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El control abstracto (ej. acción de inconstitucionalidad) permite impugnar normas generales directamente ante el tribunal constitucional para depurar el ordenamiento jurídico de disposiciones contrarias a la Carta Magna."
    },
    {
        "id": 91,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es un 'think tank' (tanque de pensamiento) en el proceso de políticas públicas?",
        "opciones": [
            "A) Una prisión de máxima seguridad para políticos corruptos.",
            "B) Una institución de investigación independiente que produce análisis, propuestas y asesoría especializada para influir en la agenda y formulación de políticas públicas.",
            "C) Una empresa constructora de obra pública.",
            "D) Un departamento secreto del ministerio de defensa."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los *think tanks* son centros de pensamiento e investigación que conectan la academia con la política práctica, generando insumos técnicos y cabildeando opciones de política."
    },
    {
        "id": 92,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué establece la teoría de la elección pública (*Public Choice*) de James Buchanan y Gordon Tullock?",
        "opciones": [
            "A) Que los ciudadanos nunca votan de manera racional.",
            "B) Que el Estado debe absorber el 100% de la propiedad privada.",
            "C) Que los actores políticos (políticos, votantes, burócratas) actúan guiados por su propio interés racional y maximizador, al igual que en los mercados económicos.",
            "D) Que los políticos y burócratas actúan movidos por el altruismo y el beneficio social desinteresado."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La teoría de la elección pública aplica la microeconomía neoclásica al comportamiento político, derribando el mito del burócrata puramente altruista y analizando el rentismo y la burocracia desde el interés propio."
    },
    {
        "id": 93,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué diferencia existe entre evaluación de procesos y evaluación de impacto?",
        "opciones": [
            "A) No hay diferencia metodológica.",
            "B) La de procesos verifica si el programa opera conforme a su diseño y entrega insumos, mientras que la de impacto mide los cambios causales en el bienestar de los beneficiarios.",
            "C) La evaluación de impacto se hace antes de iniciar el programa.",
            "D) La de procesos es cuantitativa y la de impacto no requiere datos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La evaluación de procesos revisa el funcionamiento interno, la operación y la cobertura operativa; la de impacto mide los resultados transformadores finales sobre la población objetivo."
    },
    {
        "id": 94,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es el análisis de redes de políticas públicas (*policy networks*)?",
        "opciones": [
            "A) El estudio de las estructuras de interacción estables entre actores estatales y privados interdependientes que negocian y moldean una política sectorial.",
            "B) La red de corrupción entre partidos de oposición.",
            "C) La red informática de internet de las oficinas gubernamentales.",
            "D) La transmisión de debates políticos por televisión satelital."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las redes de políticas públicas analizan cómo la hechura de políticas ya no es un acto piramidal del Estado, sino el resultado de complejas tramas de negociación entre agencias, empresas y grupos de interés."
    },
    {
        "id": 95,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Cuál es la función del presupuesto base cero?",
        "opciones": [
            "A) Asignar automáticamente un 10% más de presupuesto que el año anterior a todas las dependencias.",
            "B) Dejar sin un solo peso a los gobiernos estatales opositores.",
            "C) Reducir los salarios de los burócratas a cero.",
            "D) Obligar a que cada programa gubernamental justifique íntegramente sus objetivos y costos cada año, partiendo desde cero, en lugar de arrastrar inercialmente el gasto histórico."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El presupuesto base cero combate el incremento inercial del gasto público, exigiendo que cada dependencia demuestre la justificación y rentabilidad social de cada peso solicitado."
    },
    {
        "id": 96,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es la falacia ecológica en la investigación sociopolítica?",
        "opciones": [
            "A) Confundir la media con la mediana.",
            "B) Contaminar un río con residuos industriales.",
            "C) Inferir conclusiones sobre el comportamiento individual de las personas basándose exclusivamente en el análisis de datos agregados a nivel territorial o grupal.",
            "D) Utilizar encuestas telefónicas en zonas rurales sin señal."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La falacia ecológica ocurre cuando se comete el error metodológico de asumir que las características observadas en un agregado poblacional (ej. municipio) aplican idénticamente a cada individuo dentro de él."
    },
    {
        "id": 97,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué es una técnica de muestreo 'bola de nieve' (*snowball sampling*)?",
        "opciones": [
            "A) Un censo nacional obligatorio de población.",
            "B) Un muestreo aleatorio simple en zonas con nevadas invernales.",
            "C) Un sorteo en tómbola para elegir diputados.",
            "D) Un muestreo no probabilístico donde los participantes iniciales identifican y reclutan a nuevos sujetos de la misma población de estudio (útil para poblaciones ocultas o difíciles de acceder)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La bola de nieve es una técnica cualitativa de muestreo en cadena donde cada entrevistado remite a otros, empleándose en grupos vulnerables, élites cerradas o poblaciones estigmatizadas."
    },
    {
        "id": 98,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Cuál es la utilidad del análisis de varianza (ANOVA) en estadística inferencial?",
        "opciones": [
            "A) Evaluar la correlación entre inflación y desempleo.",
            "B) Calcular el porcentaje de votos nulos.",
            "C) Medir la volatilidad electoral entre dos elecciones.",
            "D) Probar si existen diferencias estadísticamente significativas entre las medias de tres o más grupos independientes."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "ANOVA analiza la variabilidad dentro de los grupos frente a la variabilidad entre los grupos para determinar si al menos uno de los grupos tiene una media poblacional diferente."
    },
    {
        "id": 99,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué significa que un resultado de investigación sea estadísticamente significativo a un nivel de p < 0.05?",
        "opciones": [
            "A) Que la probabilidad de haber obtenido los resultados observados por mero azar es menor al 5%, lo que permite rechazar la hipótesis nula con confianza.",
            "B) Que la muestra seleccionada fue de exactamente 5 personas.",
            "C) Que el estudio costó menos de 5,000 dólares.",
            "D) Que el 95% de los encuestados mintió en sus respuestas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El valor p menor a 0.05 es el umbral convencional en ciencias sociales para aceptar que un efecto o relación hallada en la muestra no es producto de una fluctuación aleatoria."
    },
    {
        "id": 100,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Qué diferencia existe entre un estudio de caso longitudinal y uno transversal?",
        "opciones": [
            "A) No hay diferencia temporal.",
            "B) El longitudinal solo usa estadísticas descriptivas.",
            "C) El transversal se realiza en laboratorios biológicos y el longitudinal en el campo.",
            "D) El longitudinal analiza los fenómenos a lo largo del tiempo en múltiples momentos, mientras que el transversal analiza los datos en un único momento estático."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los estudios longitudinales permiten rastrear procesos dinámicos y cambios temporales, en tanto que los transversales (*cross-sectional*) ofrecen una 'fotografía' en un punto fijo del tiempo."
    },
    {
        "id": 101,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es el artículo constitucional que consagra la soberanía nacional y la forma de gobierno republicana, representativa, democrática y laica en México?",
        "opciones": [
            "A) Artículo 41",
            "B) Todos los anteriores de forma complementaria",
            "C) Artículo 39",
            "D) Artículo 40"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los artículos 39, 40 y 41 de la Constitución mexicana configuran el núcleo fundacional del Estado: la soberanía dimana del pueblo (39), es una república representativa, democrática, laica y federal (40), y se ejerce mediante los poderes de la Unión y los partidos políticos (41)."
    },
    {
        "id": 102,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué es el pacto federal en el ordenamiento constitucional mexicano?",
        "opciones": [
            "A) La subordinación de los gobernadores a las decisiones del poder judicial federal.",
            "B) Un acuerdo comercial con Estados Unidos y Canadá.",
            "C) La desaparición de los municipios para crear provincias centralizadas.",
            "D) La unión de estados libres y soberanos en todo lo concerniente a su régimen interior, pero unidos en una federación según los principios de la Ley Fundamental."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El pacto federal mexicano une a las entidades federativas bajo un pacto constitucional donde ceden ciertas competencias soberanas a la federación y retienen facultades para su régimen interior."
    },
    {
        "id": 103,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué función ejerce la Comisión Nacional de los Derechos Humanos (CNDH) en México?",
        "opciones": [
            "A) Dictar sentencias penales de condena contra homicidas.",
            "B) Conocer de quejas en contra de actos u omisiones de naturaleza administrativa de autoridades federales que vulneren derechos humanos, emitiendo recomendaciones públicas no vinculatorias.",
            "C) Administrar el presupuesto de las prisiones federales.",
            "D) Vetar las leyes inconstitucionales aprobadas por el Congreso."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La CNDH es un organismo autónomo protector de derechos humanos cuyas resoluciones tienen la naturaleza de recomendaciones públicas con fuerte peso político y moral, aunque carecen de coacción judicial directa."
    },
    {
        "id": 104,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué establecen las reglas de operación de los programas sociales federales en México?",
        "opciones": [
            "A) Los criterios de selección de beneficiarios, padrones, montos de subsidios, mecanismos de entrega y evaluación para garantizar transparencia y evitar uso clientelar.",
            "B) Los sueldos de los ministros de la suprema corte.",
            "C) Los requisitos para fundar sindicatos petroleros.",
            "D) Las tarifas aduaneras de importación comercial."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las reglas de operación (REOP) son instrumentos normativos indispensables para asegurar que la asignación de recursos en programas sociales sea transparente, auditable y sujeta a reglas claras."
    },
    {
        "id": 105,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Cuál es la trascendencia de la reforma constitucional en materia de paridad de género de 2019 en México ('Paridad en Todo')?",
        "opciones": [
            "A) Obligar a que el 50% de las candidaturas a cargos de elección popular y los puestos de toma de decisiones en los tres poderes de la Unión sean para mujeres.",
            "B) Establecer un impuesto especial a las empresas con directivos masculinos.",
            "C) Garantizar el voto de los mexicanos en el extranjero.",
            "D) Suprimir el senado de la república."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La reforma de 'Paridad en Todo' garantiza la integración paritaria de géneros en órganos legislativos, gabinetes, poderes judiciales y órganos autónomos a nivel federal y local."
    },
    {
        "id": 106,
        "area": "Sección Transversal",
        "pregunta": "¿Qué es el enfoque de derechos humanos en la planeación y gestión gubernamental?",
        "opciones": [
            "A) La privatización de los servicios de salud y educación.",
            "B) La eliminación de los impuestos sobre la renta.",
            "C) Un marco conceptual que orienta la acción del Estado hacia la garantía, respeto, protección y promoción de los derechos humanos de todas las personas, priorizando a grupos en situación de vulnerabilidad.",
            "D) Una estrategia para defender únicamente a los delincuentes en los juicios."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El enfoque de derechos humanos obliga a los gobiernos a diseñar políticas públicas bajo principios de universalidad, interdependencia, indivisibilidad, progresividad, participación y rendición de cuentas."
    },
    {
        "id": 107,
        "area": "Sección Transversal",
        "pregunta": "¿Qué papel juega la sociedad civil organizada en el fortalecimiento de la democracia contemporánea?",
        "opciones": [
            "A) Impartir justicia en tribunales civiles.",
            "B) Sustituir completamente las funciones del poder legislativo.",
            "C) Financiar las campañas secretas de los partidos políticos.",
            "D) Ejercer veeduría ciudadana, exigir rendición de cuentas, visibilizar demandas sociales y promover la participación activa en los asuntos públicos."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las organizaciones de la sociedad civil (OSC) actúan como contrapesos cívicos y articuladores de demandas plurales, enriqueciendo la deliberación pública y la fiscalización gubernamental."
    },
    {
        "id": 108,
        "area": "Sección Transversal",
        "pregunta": "¿Cuál es el principio ético de la 'responsabilidad social' en el ejercicio profesional de la ciencia política y la administración pública?",
        "opciones": [
            "A) Obedecer ciegamente cualquier orden superior sin cuestionamiento.",
            "B) Asumir las consecuencias éticas, sociales y ambientales de las decisiones institucionales y políticas adoptadas en beneficio de la colectividad.",
            "C) Maximizar el beneficio económico personal a cualquier costo.",
            "D) Mantener el secreto absoluto de todas las acciones gubernamentales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La responsabilidad social profesional exige que los politólogos y administradores públicos actúen con integridad, buscando el bien común y la justicia distributiva en sus intervenciones."
    },
    {
        "id": 109,
        "area": "Sección Transversal",
        "pregunta": "¿Qué es la sostenibilidad ambiental en el contexto de las políticas públicas sectoriales?",
        "opciones": [
            "A) Plantar un árbol al año en cada oficina pública.",
            "B) Integrar la variable ambiental y la protección de los recursos naturales en la planeación económica y urbana para evitar la degradación ecológica irreversible.",
            "C) Subsidiar la compra de automóviles de gasolina.",
            "D) Prohibir el uso de electricidad en los edificios gubernamentales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La sostenibilidad ambiental asegura que el desarrollo sectorial (energía, transporte, agricultura) no rebase la capacidad de carga de los ecosistemas ni agote los recursos naturales."
    },
    {
        "id": 110,
        "area": "Sección Transversal",
        "pregunta": "¿Qué significa el principio de 'progresividad' en materia de derechos humanos y políticas sociales?",
        "opciones": [
            "A) Que los impuestos deben aumentar cada año sin límite.",
            "B) Que los derechos pueden eliminarse libremente según la crisis económica.",
            "C) La obligación del Estado de ampliar progresivamente la cobertura, protección y disfrute de los derechos humanos, prohibiendo cualquier regresión injustificada.",
            "D) Que las leyes deben ser redactadas en lenguaje complejo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El principio de progresividad impide al Estado adoptar medidas regresivas en perjuicio de los derechos ya alcanzados y le exige avanzar continuamente en su plena realización."
    },
    {
        "id": 111,
        "area": "Teoría Política",
        "pregunta": "¿Cuál es la tesis central de Francis Fukuyama en 'El fin de la historia y el último hombre'?",
        "opciones": [
            "A) Que la humanidad se encamina hacia una guerra nuclear inevitable.",
            "B) Que el triunfo global de la democracia liberal y la economía de mercado tras la caída de la Unión Soviética representa el punto final de la evolución ideológica de la humanidad.",
            "C) Que el marxismo es la única teoría política vigente.",
            "D) Que las monarquías absolutas volverán a dominar Europa."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Fukuyama argumentó que la democracia liberal occidental se había consolidado como la única forma de gobierno indiscutible tras el colapso del bloque soviético (una tesis ampliamente debatida posteriormente)."
    },
    {
        "id": 112,
        "area": "Teoría Política",
        "pregunta": "¿Qué es la 'hegemonía' en la teorización política posmarxista de Ernesto Laclau y Chantal Mouffe?",
        "opciones": [
            "A) La articulación política y discursiva de diversas demandas sociales heterogéneas en torno a una cadena de equivalencias para construir una voluntad colectiva.",
            "B) La dirección económica exclusiva de la clase obrera en las fábricas.",
            "C) La imposición de leyes fiscales por decreto presidencial.",
            "D) La dominación militar pura basada en la fuerza bruta de un ejército."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Laclau y Mouffe replantean la hegemonía como un proceso estrictamente político y discursivo de construcción de identidades colectivas y proyectos populares."
    },
    {
        "id": 113,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es el federalismo fiscal descentralizado?",
        "opciones": [
            "A) Un esquema donde la federación recauda los impuestos generales pero transfiere recursos y otorga competencias de gasto a estados y municipios para la atención de servicios locales.",
            "B) La prohibición absoluta de que los estados contraigan deudas.",
            "C) Un modelo donde los gobiernos subnacionales recaudan el 100% de sus propios ingresos sin transferencias federales.",
            "D) La eliminación de los impuestos municipales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El federalismo fiscal articula las responsabilidades de gasto público de los gobiernos locales con las transferencias de ingresos federales bajo sistemas de coordinación fiscal."
    },
    {
        "id": 114,
        "area": "Instituciones y Procesos Políticos",
        "pregunta": "¿Qué es un sistema electoral mixto?",
        "opciones": [
            "A) Aquel que utiliza boletas impresas y urnas electrónicas simultáneamente.",
            "B) Aquel donde los candidatos son elegidos por sorteo notarial.",
            "C) Aquel que combina la elección de representantes por mayoría relativa (uninominales) con la asignación de escaños por representación proporcional (plurinominales).",
            "D) Aquel donde votan tanto hombres como mujeres de forma obligatoria."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los sistemas mixtos (como el de Alemania o las cámaras mexicanas) combinan las ventajas de la cercanía territorial del principio mayoritario con la proporcionalidad de las listas partidarias."
    },
    {
        "id": 115,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué es el análisis de factibilidad política (*political feasibility*) en la formulación de políticas públicas?",
        "opciones": [
            "A) Evaluar la probabilidad de que una política sea aceptada y apoyada por los actores políticos clave, grupos de interés y legisladores con poder de veto.",
            "B) Revisar la ortografía de los decretos presidenciales.",
            "C) Calcular el costo en toneladas de cemento de una carretera.",
            "D) Determinar si hay suficientes computadoras en las oficinas públicas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La factibilidad política analiza el juego de intereses, apoyos y resistencias que enfrentará una política pública para asegurar su viabilidad más allá de su diseño técnico."
    },
    {
        "id": 116,
        "area": "Política Pública y Administración Pública",
        "pregunta": "¿Qué caracteriza a los burócratas de ventanilla (*street-level bureaucrats*) según Michael Lipsky?",
        "opciones": [
            "A) Trabajar en las oficinas centrales de la presidencia de la república.",
            "B) Ser auditores fiscales de grandes corporaciones transnacionales.",
            "C) Ser empleados públicos de primera línea (policías, maestros, trabajadores sociales) que interactúan directamente con los ciudadanos y disponen de alta discrecionalidad práctica.",
            "D) Elaborar el presupuesto de egresos de la federación."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Lipsky demostró que los burócratas de ventanilla son verdaderos formuladores de políticas públicas en la práctica debido a la discrecionalidad con la que aplican las normas frente a los ciudadanos."
    },
    {
        "id": 117,
        "area": "Metodología y Estadística Política",
        "pregunta": "¿Cuál es la diferencia entre un parámetro estadístico y un estadístico muestral?",
        "opciones": [
            "A) No hay diferencia conceptual.",
            "B) El parámetro es inventado por el investigador y el estadístico es real.",
            "C) El estadístico solo se usa en ciencias exactas y el parámetro en política.",
            "D) El parámetro describe a toda la población y es desconocido por lo general, mientras que el estadístico se calcula a partir de los datos de una muestra."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En inferencia estadística, el estadístico (ej. media muestral) es un estimador que se usa para inferir el valor verdadero del parámetro poblacional (ej. media poblacional)."
    },
    {
        "id": 118,
        "area": "Contexto Político y Administración Pública de México",
        "pregunta": "¿Qué establece el Artículo 134 de la Constitución mexicana en materia de recursos públicos?",
        "opciones": [
            "A) Que el presidente puede gastar el presupuesto sin comprobar facturas en caso de emergencia.",
            "B) Que los gobernadores pueden fijar libremente sus propios salarios.",
            "C) Que los servidores públicos deben administrar con eficiencia, eficacia, economía, honradez y transparencia los recursos, prohibiendo la promoción personalizada con recursos públicos.",
            "D) Que los partidos políticos están exentos de auditorías fiscales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Artículo 134 constitucional fija los principios rectores del gasto público y prohíbe explícitamente el uso de propaganda gubernamental con nombres, imágenes o símbolos que impliquen promoción personalizada."
    },
    {
        "id": 119,
        "area": "Sección Transversal",
        "pregunta": "¿Qué es el principio de 'máxima publicidad' en materia de transparencia gubernamental?",
        "opciones": [
            "A) La presunción legal de que toda información en poder de los sujetos obligados es pública, completa, oportuna y accesible, siendo la reserva la estricta excepción.",
            "B) Prohibir la publicación de sueldos de la burocracia.",
            "C) Obligar a los funcionarios a anunciarse en televisión abierta.",
            "D) Cobrar por la entrega de copias fotostáticas de documentos oficiales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La máxima publicidad es el principio rector de las leyes de transparencia, estableciendo que el secreto gubernamental es la excepción justificada y la apertura de datos la regla general."
    },
    {
        "id": 120,
        "area": "Sección Transversal",
        "pregunta": "¿Qué implica la interseccionalidad en el análisis político y de políticas públicas?",
        "opciones": [
            "A) Combinar sistemas electorales proporcionales con monarquías absolutas.",
            "B) Fusionar ministerios de economía con secretarías de defensa.",
            "C) Analizar cómo se entrelazan y superponen múltiples categorías sociales de identidad y opresión (género, raza, clase social, etnicidad, edad) generando experiencias complejas de desigualdad.",
            "D) Cruzar avenidas principales durante las protestas sociales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La interseccionalidad (acuñada por Kimberlé Crenshaw) permite comprender que las discriminaciones no operan aisladas, sino que se cruzan y multiplican, requiriendo políticas públicas diferenciadas y complejas."
    }
];