const bancoPreguntas = [
    {
        id: 1,
        area: "Ingeniería de Requerimientos",
        pregunta: "Durante la fase de elicitación para un sistema bancario, el cliente especifica que la plataforma debe procesar hasta 10,000 transacciones por segundo con un tiempo de respuesta menor a 200 milisegundos. ¿Cómo se clasifica esta exigencia?",
        opciones: [
            "A) Requerimiento de dominio",
            "B) Requerimiento no funcional de rendimiento",
            "C) Requerimiento funcional de proceso",
            "D) Regla de negocio operativa"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los requerimientos no funcionales de rendimiento definen las restricciones de velocidad, latencia, tasa de procesamiento y tiempo de respuesta que debe cumplir el sistema bajo carga."
    },
    {
        id: 2,
        area: "Arquitectura y Diseño de Software",
        pregunta: "Se requiere diseñar un sistema de procesamiento de datos masivos donde la información fluye de manera secuencial a través de múltiples etapas de transformación independientes. ¿Qué estilo arquitectónico es el más indicado?",
        opciones: [
            "A) Arquitectura basada en eventos (Event-Driven)",
            "B) Arquitectura de Microservicios",
            "C) Arquitectura en Capas (Layered)",
            "D) Tubos y Filtros (Pipes and Filters)"
        ],
        respuestaCorrecta: 3,
        explicacion: "El patrón Tubos y Filtros divide la tarea en etapas independientes (filtros) conectadas por canales de datos (tubos), ideal para procesamiento secuencial de datos."
    },
    {
        id: 3,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de diseño creacional se debe aplicar si se necesita garantizar que una clase tenga únicamente una instancia global accesible en toda la aplicación?",
        opciones: [
            "A) Factory Method",
            "B) Singleton",
            "C) Abstract Factory",
            "D) Builder"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Singleton restringe la instanciación de una clase a un solo objeto y proporciona un punto de acceso global a dicha instancia."
    },
    {
        id: 4,
        area: "Pruebas y Calidad de Software",
        pregunta: "En una suite de pruebas unitarias, ¿qué técnica de diseño de casos de prueba de caja negra divide el dominio de entrada en bloques donde se asume que el sistema se comportará de manera equivalente?",
        opciones: [
            "A) Análisis de valores límite",
            "B) Pruebas de transición de estados",
            "C) Partición de equivalencia",
            "D) Tablas de decisión"
        ],
        respuestaCorrecta: 2,
        explicacion: "La partición de equivalencia divide los datos de entrada en clases disjuntas, asumiendo que el sistema procesará de la misma forma cualquier valor representativo del mismo grupo."
    },
    {
        id: 5,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la metodología ágil Scrum, ¿cuál es la responsabilidad principal del Product Owner durante el desarrollo de un Sprint?",
        opciones: [
            "A) Maximizar el valor del producto gestionando y priorizando el Product Backlog",
            "B) Asignar tareas diarias a los desarrolladores y revisar su código",
            "C) Rematricular los errores de sintaxis y bloquear reuniones",
            "D) Facilitar los eventos de Scrum y eliminar impedimentos técnicos"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Product Owner es responsable de optimizar el valor del producto y de gestionar eficazmente el Product Backlog (definir, ordenar y priorizar elementos)."
    },
    {
        id: 6,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el modelado UML de casos de uso, ¿cuándo se debe utilizar la relación de estereotipo «extend» entre el Caso de Uso A y el Caso de Uso B?",
        opciones: [
            "A) Cuando el Caso de Uso A incluye obligatoriamente la ejecución del Caso de Uso B en todos los flujos",
            "B) Cuando el Caso de Uso B hereda de forma estricta los atributos del Caso de Uso A",
            "C) Cuando el Caso de Uso B opcionalmente añade comportamiento al Caso de Uso A bajo condiciones específicas",
            "D) Cuando ambos casos de uso se ejecutan en paralelo en hilos secundarios"
        ],
        respuestaCorrecta: 2,
        explicacion: "La relación «extend» especifica que un caso de uso de extensión (B) puede insertar opcionalmente su comportamiento en el caso de uso base (A) en un punto de extensión dado."
    },
    {
        id: 7,
        area: "Arquitectura y Diseño de Software",
        pregunta: "Un equipo de software está rediseñando una aplicación monolítica a microservicios. Desean evitar que los clientes móviles hagan múltiples llamadas a distintos servicios. ¿Qué patrón de integración debe implementar en la capa de entrada?",
        opciones: [
            "A) API Gateway",
            "B) Model-View-Controller (MVC)",
            "C) Circuit Breaker",
            "D) Service Mesh"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón API Gateway actúa como un punto único de entrada para todas las solicitudes de clientes, encapsulando la arquitectura interna y agregando llamados a microservicios."
    },
    {
        id: 8,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué principio SOLID establece que un módulo o clase debe estar abierto para su extensión pero cerrado para su modificación?",
        opciones: [
            "A) Single Responsibility Principle (SRP)",
            "B) Open/Closed Principle (OCP)",
            "C) Liskov Substitution Principle (LSP)",
            "D) Dependency Inversion Principle (DIP)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El principio Abierto/Cerrado (OCP) dicta que las entidades de software deben permitir extender su comportamiento sin necesidad de modificar su código fuente original."
    },
    {
        id: 9,
        area: "Pruebas y Calidad de Software",
        pregunta: "Durante el ciclo de pruebas de integración continua, ¿qué métrica de cobertura de código garantiza que cada rama de decisión (if/else) en una función haya sido evaluada como verdadera y falsa?",
        opciones: [
            "A) Cobertura de declaraciones (Statement Coverage)",
            "B) Cobertura de ramas o decisiones (Branch Coverage)",
            "C) Cobertura de mutación de clases",
            "D) Cobertura de puntos de función"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cobertura de ramas (Branch Coverage) mide si cada resultado posible (verdadero/falso) de cada estructura de control condicional ha sido ejecutado por la suite de pruebas."
    },
    {
        id: 10,
        area: "Modelado y Bases de Datos",
        pregunta: "En una base de datos relacional, ¿qué forma normal se alcanza cuando se eliminan las dependencias transitivas de los atributos no clave respecto a la clave primaria?",
        opciones: [
            "A) Primera Forma Normal (1FN)",
            "B) Segunda Forma Normal (2FN)",
            "C) Tercera Forma Normal (3FN)",
            "D) Forma Normal de Boyce-Codd (FNBC)"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una tabla está en 3FN si está en 2FN y ningún atributo no clave depende transitivamente de la clave primaria (todos los campos dependen únicamente de la clave primaria)."
    },
    {
        id: 11,
        area: "Ingeniería de Requerimientos",
        pregunta: "¿Qué técnica de validación de requerimientos consiste en crear una versión preliminar ejecutable del software para que los usuarios finales interactúen y confirmen el comportamiento deseado?",
        opciones: [
            "A) Inspección formal de código",
            "B) Análisis de trazabilidad vertical",
            "C) Prototipado (Prototyping)",
            "D) Auditoría de métricas COCOMO"
        ],
        respuestaCorrecta: 2,
        explicacion: "El prototipado ayuda a descubrir y validar los requerimientos del usuario al permitirle interactuar directamente con un modelo operativo o visual del sistema."
    },
    {
        id: 12,
        area: "Arquitectura y Diseño de Software",
        pregunta: "Al evaluar la calidad interna de un diseño orientado a objetos, ¿cuál es la meta óptima respecto a la Cohesión y el Acoplamiento de los módulos?",
        opciones: [
            "A) Alta cohesión y bajo acoplamiento",
            "B) Baja cohesión y alto acoplamiento",
            "C) Alta cohesión y alto acoplamiento",
            "D) Cohesión nula y acoplamiento dinámico"
        ],
        respuestaCorrecta: 0,
        explicacion: "El diseño esbelto de software busca una alta cohesión (módulos focalizados en una sola tarea) y un bajo acoplamiento (mínima dependencia intermodular) para facilitar la mantenibilidad."
    },
    {
        id: 13,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón estructural permite convertir la interfaz de una clase existente en otra interfaz que el cliente espera, permitiendo que clases incompatibles trabajen juntas?",
        opciones: [
            "A) Bridge",
            "B) Decorator",
            "C) Composite",
            "D) Adapter"
        ],
        respuestaCorrecta: 3,
        explicacion: "El patrón Adapter funciona como un envoltorio o traductor que adapta la interfaz de un objeto para que pueda ser utilizado por otro con una interfaz incompatible."
    },
    {
        id: 14,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Cómo se le conoce a las pruebas de software que se ejecutan después de modificar o reparar el código para asegurar que no se hayan introducido nuevos errores en funcionalidades existentes?",
        opciones: [
            "A) Pruebas de humo (Smoke Testing)",
            "B) Pruebas de regresión (Regression Testing)",
            "C) Pruebas de estrés (Stress Testing)",
            "D) Pruebas de aceptación del usuario (UAT)"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las pruebas de regresión verifican que los cambios recientes en el código o las correcciones de errores no hayan alterado negativamente las funciones previas que funcionaban bien."
    },
    {
        id: 15,
        area: "Mantenimiento y Evolución de Software",
        pregunta: "¿Qué término describe el costo implícito del trabajo adicional de refactorización creado al elegir una solución técnica rápida en lugar de un enfoque óptimo a largo plazo?",
        opciones: [
            "A) Deuda técnica (Technical Debt)",
            "B) Inercia de diseño",
            "C) Sobreingeniería (Overengineering)",
            "D) Obsolescencia programada"
        ],
        respuestaCorrecta: 0,
        explicacion: "La deuda técnica refleja el costo diferido de refactorización o corrección que se acumula cuando se toman atajos de diseño o codificación para entregar rápido."
    },
    {
        id: 16,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el marco del desarrollo ágil, ¿cuál es la estructura estándar de redacción recomendada para una Historia de Usuario?",
        opciones: [
            "A) 'Como [rol], quiero [acción], para que [beneficio]'",
            "B) 'Dado [contexto], cuando [evento], entonces [resultado]'",
            "C) 'El sistema deberá procesar [entrada] generando [salida]'",
            "D) 'Modulo [X] hereda de [Y] con visibilidad [Z]'"
        ],
        respuestaCorrecta: 0,
        explicacion: "La plantilla estándar descrita por Mike Cohn para Historias de Usuario establece la relación entre el usuario (rol), su necesidad (acción) y el valor que genera (beneficio)."
    },
    {
        id: 17,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En el patrón de arquitectura Modelo-Vista-Controlador (MVC), ¿cuál es la responsabilidad específica de la capa 'Modelo'?",
        opciones: [
            "A) Capturar los eventos del teclado y ratón generados por el cliente",
            "B) Renderizar las interfaces gráficas de usuario y estilos CSS",
            "C) Gestionar los datos, la lógica de negocio y las reglas de dominio de la aplicación",
            "D) Dirigir las solicitudes HTTP hacia las rutas correspondientes del servidor"
        ],
        respuestaCorrecta: 2,
        explicacion: "El Modelo en MVC encapsula el estado de la aplicación, el acceso a la base de datos y toda la lógica de negocio central."
    },
    {
        id: 18,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento permite a un objeto notificar automáticamente a múltiples objetos suscritos sobre cualquier cambio en su estado?",
        opciones: [
            "A) Strategy",
            "B) Command",
            "C) State",
            "D) Observer"
        ],
        respuestaCorrecta: 3,
        explicacion: "El patrón Observer define una dependencia de uno-a-muchos, permitiendo que un sujeto notifique a todos sus observadores registrados ante cambios de estado."
    },
    {
        id: 19,
        area: "Pruebas y Calidad de Software",
        pregunta: "De acuerdo con el modelo ISO/IEC 25010 para la evaluación de la calidad del software, ¿qué subcaracterística pertenece al atributo global de 'Mantenibilidad'?",
        opciones: [
            "A) Modificabilidad",
            "B) Tolerancia a fallos",
            "C) Tiempo de respuesta",
            "D) Autenticidad"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ISO/IEC 25010 incluye la Modificabilidad, Modularidad, Reusabilidad, Analizabilidad y Probabilidad de ser probado (Testability) dentro del atributo de Mantenibilidad."
    },
    {
        id: 20,
        area: "Gestión de Configuración y DevOps",
        pregunta: "En el control de versiones distribuido con Git, ¿qué comando une el historial de cambios de una rama secundaria (feature) dentro de la rama principal (main)?",
        opciones: [
            "A) git checkout",
            "B) git merge",
            "C) git commit",
            "D) git push"
        ],
        respuestaCorrecta: 1,
        explicacion: "El comando `git merge` combina las secuencias de commits de la rama especificada con la rama activa actual."
    },
    {
        id: 21,
        area: "Ingeniería de Requerimientos",
        pregunta: "¿Cuál es la herramienta de gestión que permite rastrear el origen de cada requerimiento y verificar su correspondencia con el diseño, código y casos de prueba asociados?",
        opciones: [
            "A) Matriz de trazabilidad de requerimientos",
            "B) Diagrama de despliegue UML",
            "C) Diagrama de Gantt",
            "D) Análisis WBS (Work Breakdown Structure)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La matriz de trazabilidad conecta los requerimientos desde sus fuentes iniciales a lo largo del desarrollo, asegurando que se diseñen, programen y prueben totalmente."
    },
    {
        id: 22,
        area: "Arquitectura y Diseño de Software",
        pregunta: "Se desea implementar un sistema tolerante a fallos donde la caída de un servicio dependiente no provoque una falla en cascada en toda la plataforma. ¿Qué patrón de resiliencia se debe aplicar?",
        opciones: [
            "A) Proxy inverso",
            "B) Circuit Breaker (Interruptor de circuito)",
            "C) Singleton",
            "D) Monolito modular"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Circuit Breaker detecta fallas en servicios remotos e interrumpe temporalmente las llamadas hacia ellos, devolviendo respuestas de reserva sin saturar la red."
    },
    {
        id: 23,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de diseño estructural añade funcionalidades adicionales a un objeto dinámicamente en tiempo de ejecución sin alterar su estructura de clases heredadas?",
        opciones: [
            "A) Decorator",
            "B) Facade",
            "C) Flyweight",
            "D) Prototype"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Decorator permite agregar responsabilidades a un objeto de forma dinámica envolviéndolo en una clase contenedora."
    },
    {
        id: 24,
        area: "Pruebas y Calidad de Software",
        pregunta: "En la fase de pruebas de seguridad de una API RESTful, ¿qué vulnerabilidad grave se presenta cuando la aplicación confía en los datos enviados por el usuario y ejecuta consultas SQL no sanitizadas?",
        opciones: [
            "A) Cross-Site Scripting (XSS)",
            "B) Cross-Site Request Forgery (CSRF)",
            "C) Inyección SQL (SQLi)",
            "D) Desbordamiento de búfer (Buffer Overflow)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Inyección SQL permite a un atacante interferir en las consultas de la aplicación intercalando sintaxis SQL maliciosa en los parámetros de entrada."
    },
    {
        id: 25,
        area: "Procesos de Software",
        pregunta: "¿Cuál es el modelo de proceso de software tradicional caracterizado por una secuencia lineal y rígida de fases (Requerimientos, Diseño, Codificación, Pruebas y Mantenimiento)?",
        opciones: [
            "A) Modelo en Cascada (Waterfall)",
            "B) Desarrollo Basado en Componentes",
            "C) Programación Extrema (XP)",
            "D) Proceso Unificado Racional (RUP)"
        ],
        respuestaCorrecta: 0,
        explicacion: "El modelo en Cascada es el ciclo de vida clásico que avanza en fases secuenciales sin retornar a etapas previas salvo revisiones sistemáticas."
    },
    {
        id: 26,
        area: "Ingeniería de Requerimientos",
        pregunta: "En la técnica de análisis de requerimientos conocida como MoSCoW, ¿qué representa la letra 'S'?",
        opciones: [
            "A) System Requirements",
            "B) Should have (Debería tener)",
            "C) Security constraints",
            "D) Software Architecture"
        ],
        respuestaCorrecta: 1,
        explicacion: "MoSCoW es una técnica de priorización que clasifica los requerimientos en: Must have (Debe), Should have (Debería), Could have (Podría) y Won't have (No tendrá por ahora)."
    },
    {
        id: 27,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué vista del Modelo de 4+1 Vistas de Philippe Kruchten describe la organización del software en submódulos, paquetes y librerías desde la perspectiva del programador?",
        opciones: [
            "A) Vista lógica",
            "B) Vista de desarrollo (o de implementación)",
            "C) Vista de procesos",
            "D) Vista física (o de despliegue)"
        ],
        respuestaCorrecta: 1,
        explicacion: "La vista de desarrollo aborda la organización de los módulos de software, subsistemas y archivos fuente en el entorno de construcción."
    },
    {
        id: 28,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento permite definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos interconectables en tiempo de ejecución?",
        opciones: [
            "A) Strategy",
            "B) Template Method",
            "C) Iterator",
            "D) Mediator"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Strategy encapsula los algoritmos dentro de sus propias clases e intercambia sus objetos cliente dinámicamente según la necesidad."
    },
    {
        id: 29,
        area: "Pruebas y Calidad de Software",
        pregunta: "En el análisis de complejidad ciclomática de Thomas McCabe ($V(G)$) para un grafo de flujo de control con $E$ aristas, $N$ nodos y $P$ componentes conexos, ¿cuál es la fórmula matemática correcta?",
        opciones: [
            "A) $V(G) = E - N + 2P$",
            "B) $V(G) = E + N - P$",
            "C) $V(G) = N - E + 2$",
            "D) $V(G) = E \times N / P$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La complejidad ciclomática de McCabe mide la cantidad de caminos linealmente independientes mediante la ecuación $V(G) = E - N + 2P$."
    },
    {
        id: 30,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la estimación de esfuerzo mediante la técnica COCOMO II, ¿cuál es la unidad básica empleada para medir la dimensión del producto de software?",
        opciones: [
            "A) Puntos de historia (Story Points)",
            "B) Miles de líneas de código fuente ejecutables (KLOC) o Puntos de Función",
            "C) Diagramas de clases construidos",
            "D) Número de tablas en la base de datos"
        ],
        respuestaCorrecta: 1,
        explicacion: "COCOMO II utiliza KLOC (Kilo Lines of Code) o Puntos de Función no ajustados como entrada cuantitativa para sus ecuaciones de estimación de persona-mes."
    },
    {
        id: 31,
        area: "Ingeniería de Requerimientos",
        pregunta: "Un analista redacta un criterio de aceptación bajo el formato 'Gherkin' para pruebas BDD (Behavior Driven Development). ¿Qué palabras clave estructuran esta especificación?",
        opciones: [
            "A) Select, From, Where",
            "B) Given (Dado), When (Cuando), Then (Entonces)",
            "C) Input, Process, Output",
            "D) Try, Catch, Finally"
        ],
        respuestaCorrecta: 1,
        explicacion: "La sintaxis de Gherkin para BDD utiliza Given (contexto inicial), When (acción o evento) y Then (resultado esperado)."
    },
    {
        id: 32,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En el diseño orientado a dominios (Domain-Driven Design - DDD), ¿qué concepto representa un conjunto de entidades y objetos de valor que se tratan como una unidad sólida de cambios de estado bajo una sola raíz?",
        opciones: [
            "A) Bounded Context",
            "B) Agregado (Aggregate)",
            "C) Repositorio",
            "D) Servicio de Dominio"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Agregado en DDD es un cúmulo de objetos de dominio vinculados entre sí que se trata como una sola unidad transaccional regida por el Aggregate Root."
    },
    {
        id: 33,
        area: "Construcción y Patrones de Diseño",
        pregunta: "En la inversión de control (IoC), ¿qué técnica consiste en suministrar externamente las dependencias que una clase necesita en lugar de que la clase las instancie internamente?",
        opciones: [
            "A) Inyección de Dependencias (DI)",
            "B) Herencia múltiple",
            "C) Encapsulamiento reflexivo",
            "D) Casting implícito"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Inyección de Dependencias pasa los objetos dependientes a la clase mediante constructores, métodos o propiedades, desacoplando su creación."
    },
    {
        id: 34,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué tipo de prueba no funcional somete al sistema a cargas de trabajo extremas que superan los límites de capacidad diseñados para observar cómo falla y cómo se recupera?",
        opciones: [
            "A) Pruebas de usabilidad",
            "B) Pruebas de rendimiento (Load testing)",
            "C) Pruebas de estrés (Stress testing)",
            "D) Pruebas de volumen"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las pruebas de estrés empujan el sistema más allá de sus especificaciones normales de carga para probar su robustez y manejo de errores bajo ruptura."
    },
    {
        id: 35,
        area: "Seguridad en Software",
        pregunta: "¿Qué mecanismo de seguridad en aplicaciones web utiliza tokens firmados digitalmente en formato JSON para transmitir identidades entre cliente y servidor de forma compacta y autónoma?",
        opciones: [
            "A) Cookies de sesión simples",
            "B) JSON Web Tokens (JWT)",
            "C) Certificados SSL autodirmados",
            "D) Claves simétricas DES"
        ],
        respuestaCorrecta: 1,
        explicacion: "JWT es un estándar abierto (RFC 7519) que permite transmitir afirmaciones de autenticación de forma segura mediante una estructura firmada con Header, Payload y Signature."
    },
    {
        id: 36,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el diagrama de clases de UML, ¿qué diferencia conceptual existe entre la Agregación (rombo blanco) y la Composición (rombo negro)?",
        opciones: [
            "A) En la composición las partes pueden existir independientemente del todo; en la agregación no",
            "B) En la composición la destrucción del objeto 'todo' implica la destrucción estricta de sus objetos 'partes'",
            "C) La agregación permite herencia y la composición únicamente polimorfismo",
            "D) No existe diferencia, ambas representan dependencias temporales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La composición es una forma fuerte de relación 'todo-parte' donde las partes están atadas al ciclo de vida del contenedor (si muere el todo, mueren las partes)."
    },
    {
        id: 37,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué patrón arquitectónico desacopla por completo las operaciones de lectura de datos de las operaciones de escritura o actualización?",
        opciones: [
            "A) Monolito modular",
            "B) CQRS (Command Query Responsibility Segregation)",
            "C) Event Sourcing puro",
            "D) Cliente-Servidor clásico"
        ],
        respuestaCorrecta: 1,
        explicacion: "CQRS separa las consultas de datos (Queries) de los comandos de modificación (Commands), optimizando el rendimiento y escalabilidad de forma independiente."
    },
    {
        id: 38,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón creacional simplifica la creación de objetos complejos paso a paso permitiendo construir diferentes representaciones del mismo tipo?",
        opciones: [
            "A) Prototype",
            "B) Singleton",
            "C) Builder",
            "D) Factory Method"
        ],
        respuestaCorrecta: 2,
        explicacion: "El patrón Builder separa la construcción de un objeto complejo de su representación final, permitiendo que el mismo proceso produzca distintas configuraciones."
    },
    {
        id: 39,
        area: "Pruebas y Calidad de Software",
        pregunta: "Dentro del modelo CMMI (Capability Maturity Model Integration), ¿qué nivel de madurez organizativa se caracteriza por tener procesos estandarizados, documentados y entendidos a nivel de toda la empresa?",
        opciones: [
            "A) Nivel 1 (Inicial)",
            "B) Nivel 2 (Gestionado)",
            "C) Nivel 3 (Definido)",
            "D) Nivel 5 (En optimización)"
        ],
        respuestaCorrecta: 2,
        explicacion: "En el Nivel 3 de CMMI (Definido), los procesos de la organización están claramente establecidos mediante estándares, herramientas y procedimientos a nivel corporativo."
    },
    {
        id: 40,
        area: "Mantenimiento y Evolución de Software",
        pregunta: "¿En qué consiste la técnica de 'Refactorización' (Refactoring) del código fuente?",
        opciones: [
            "A) Modificar el código para cambiar radicalmente el comportamiento externo observable del sistema",
            "B) Reestructurar el código fuente interno sin alterar su comportamiento funcional externo para mejorar su legibilidad y mantenibilidad",
            "C) Reescribir todo el sistema en un nuevo lenguaje de programación desde cero",
            "D) Corregir bugs críticos reportados directamente por el usuario final en producción"
        ],
        respuestaCorrecta: 1,
        explicacion: "Refactorizar es el proceso de modificar el código interno para hacerlo más entendible, limpio y fácil de mantener, manteniendo intacta su funcionalidad externa."
    },
    {
        id: 41,
        area: "Ingeniería de Requerimientos",
        pregunta: "En los sistemas de software críticos, ¿cuál es la diferencia principal entre un Requerimiento Funcional y una Regla de Negocio?",
        opciones: [
            "A) Las reglas de negocio son diagramas de secuencia; los requerimientos funcionales son código",
            "B) El requerimiento funcional especifica qué debe hacer el software; la regla de negocio define políticas o restricciones operativas preexistentes en la organización",
            "C) Los requerimientos funcionales no se pueden probar; las reglas de negocio sí",
            "D) No existe diferencia, son términos perfectamente sinónimos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las reglas de negocio (Business Rules) existen independientemente del software (políticas, leyes, fórmulas comerciales) e inspiran o restringen la definición de los requerimientos funcionales."
    },
    {
        id: 42,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué principio de diseño arquitectónico sugiere que las capas de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones?",
        opciones: [
            "A) Principio de Inversión de Dependencias (DIP)",
            "B) Principio de Sustitución de Liskov (LSP)",
            "C) Encapsulamiento de la interfaz de usuario",
            "D) Segregación de interfaces"
        ],
        respuestaCorrecta: 0,
        explicacion: "DIP establece que las clases de alto nivel (lógica central) no deben atarse a detalles de bajo nivel (bases de datos, controladores), sino interactuar mediante abstracciones e interfaces."
    },
    {
        id: 43,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento proporciona un punto de acceso centralizado o un canal unificado para coordinar las comunicaciones entre múltiples objetos evitando dependencias directas entre ellos?",
        opciones: [
            "A) Chain of Responsibility",
            "B) Mediator",
            "C) Memento",
            "D) Visitor"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Mediator encapsula cómo interactúa un conjunto de objetos, promoviendo el acoplamiento débil al evitar que se refieran explícitamente entre sí."
    },
    {
        id: 44,
        area: "Pruebas y Calidad de Software",
        pregunta: "En la metodología TDD (Test-Driven Development), ¿cuál es la secuencia correcta de pasos del ciclo de desarrollo?",
        opciones: [
            "A) Escribir el código, ejecutar las pruebas, refactorizar y desplegar a producción",
            "B) Escribir una prueba que falle (Red), escribir el código mínimo para que pase (Green), refactorizar el código (Refactor)",
            "C) Diseñar diagramas de clases, escribir las pruebas de aceptación y compilar el binario",
            "D) Crear casos de uso, probar manualmente y documentar el código"
        ],
        respuestaCorrecta: 1,
        explicacion: "TDD sigue el ciclo estricto Red-Green-Refactor: crear prueba fallida, implementar solución mínima operativa, y limpiar el código sin romper la prueba."
    },
    {
        id: 45,
        area: "Gestión de Configuración y DevOps",
        pregunta: "¿Qué práctica de DevOps automatiza la compilación, ejecución de pruebas unitarias e integración diaria de los cambios de código de múltiples desarrolladores en un repositorio compartido?",
        opciones: [
            "A) Despliegue Continuo (Continuous Deployment)",
            "B) Integración Continua (Continuous Integration - CI)",
            "C) Entrega Continua (Continuous Delivery)",
            "D) Infraestructura como Código (IaC)"
        ],
        respuestaCorrecta: 1,
        explicacion: "CI (Integración Continua) es la práctica de verificar automáticamente mediante builds y ejecuciones de pruebas cada cambio fusionado al repositorio principal."
    },
    {
        id: 46,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el diagrama de secuencia de UML, ¿qué representan las líneas verticales discontinuas que descienden desde los rectángulos de objetos?",
        opciones: [
            "A) El flujo de datos serializado",
            "B) La línea de vida (Lifeline) del objeto a lo largo del tiempo",
            "C) La jerarquía de herencia entre módulos",
            "D) La conexión física de red entre los servidores"
        ],
        respuestaCorrecta: 1,
        explicacion: "La línea de vida (Lifeline) representa la existencia continua del objeto o participante a lo largo de la secuencia de interacciones."
    },
    {
        id: 47,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En un sistema distribuido que sigue el Teorema CAP (Eric Brewer), si la red experimenta una partición (P), ¿qué dos propiedades entran en un compromiso o compensación (Trade-off)?",
        opciones: [
            "A) Consistencia (C) y Disponibilidad (A)",
            "B) Autenticación y Cifrado",
            "C) Concurrencia y Mantenibilidad",
            "D) Escalabilidad vertical y Velocidad de reloj"
        ],
        respuestaCorrecta: 0,
        explicacion: "El Teorema CAP demuestra que ante una partición de red (P), un sistema distribuido solo puede priorizar o la Consistencia (C) o la Disponibilidad (A)."
    },
    {
        id: 48,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de diseño estructural proporciona una interfaz unificada y simplificada para un conjunto complejo de interfaces pertenecientes a un subsistema más grande?",
        opciones: [
            "A) Facade (Fachada)",
            "B) Proxy",
            "C) Decorator",
            "D) Composite"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Facade ofrece una interfaz de alto nivel que hace que el subsistema subyacente sea más fácil de usar al ocultar sus detalles complejos."
    },
    {
        id: 49,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué técnica de prueba dinámica analiza el software ejecutando el programa con entradas aleatorias, no estructuradas o malformadas para detectar bloqueos o fugas de memoria?",
        opciones: [
            "A) Fuzzing (Fuzz Testing)",
            "B) Inspección de código con SonarQube",
            "C) Verificación formal por inducción",
            "D) Pruebas de usabilidad heurisitca"
        ],
        respuestaCorrecta: 0,
        explicacion: "Fuzzing o prueba difusa es una técnica de testing automatizado que inyecta datos masivos inválidos o aleatorios para identificar desbordamientos y fallas en la aplicación."
    },
    {
        id: 50,
        area: "Bases de Datos y Persistencia",
        pregunta: "En el procesamiento de transacciones (ACID), ¿qué propiedad garantiza que todas las operaciones dentro de una transacción se completen con éxito o, de lo contrario, se anulen completamente sin dejar cambios parciales?",
        opciones: [
            "A) Aislamiento (Isolation)",
            "B) Durabilidad (Durability)",
            "C) Atomicidad (Atomicity)",
            "D) Consistencia (Consistency)"
        ],
        respuestaCorrecta: 2,
        explicacion: "La Atomicidad asegura la regla del 'todo o nada': o se ejecutan todas las sentencias de la transacción o el estado del sistema vuelve al punto anterior."
    },
    {
        id: 51,
        area: "Ingeniería de Requerimientos",
        pregunta: "Durante la especificación de un sistema de comercio electrónico, el equipo define los 'Criterios de Aceptación'. ¿Cuál es el propósito de estos criterios?",
        opciones: [
            "A) Calcular la nómina quincenal de los programadores",
            "B) Determinar las condiciones exactas bajo las cuales una historia de usuario se considera completada satisfactoriamente por los interesados",
            "C) Seleccionar la marca del servidor donde se alojará la base de datos",
            "D) Diseñar la arquitectura gráfica de la interfaz en formato CSS"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los criterios de aceptación son condiciones verificables que el producto debe cumplir para que los interesados aprueben la entrega de una historia de usuario."
    },
    {
        id: 52,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué característica distingue a la Arquitectura Hexagonal (o de Puertos y Adaptadores)?",
        opciones: [
            "A) Exigir que todas las interfaces web utilicen exactamente seis botones de navegación",
            "B) Aislar el núcleo de lógica de negocio del mundo exterior (bases de datos, UI, APIs) mediante puertos genéricos e adaptadores específicos",
            "C) Obligar a usar bases de datos NoSQL exclusivamente para la persistencia",
            "D) Dividir el servidor físico en seis particiones de disco de igual dimensión"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Arquitectura Hexagonal separa el dominio de las tecnologías de infraestructura, permitiendo probar la lógica central de forma aislada mediante puertos e interfaces."
    },
    {
        id: 53,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento permite guardar y restaurar el estado previo de un objeto sin violar su principio de encapsulamiento (ideal para implementar la función 'Deshacer/Undo')?",
        opciones: [
            "A) Memento",
            "B) Command",
            "C) Visitor",
            "D) State"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Memento captura la instantánea interna de un objeto para poder restaurarlo posteriormente a dicho estado sin exponer su estructura interna."
    },
    {
        id: 54,
        area: "Pruebas y Calidad de Software",
        pregunta: "En una revisión formal de código (Code Review), ¿qué tipo de inspección se enfoca en encontrar errores mediante un examen paso a paso del código guiado por el autor ante un grupo de colegas?",
        opciones: [
            "A) Walkthrough (Recorrido conducido)",
            "B) Prueba unitaria automatizada",
            "C) Auditoría externa ISO 9001",
            "D) Análisis estático por compilador"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un Walkthrough es una revisión por pares donde el autor del código lidera la presentación y guía a los revisores a través del flujo lógico para recoger observaciones."
    },
    {
        id: 55,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la metodología ágil Kanban, ¿cuál es la restricción clave que se aplica a los tableros de trabajo para prevenir cuellos de botella y sobrecarga del equipo?",
        opciones: [
            "A) Obligar a los desarrolladores a programar exclusivamente en parejas",
            "B) Límite de trabajo en proceso (WIP Limit - Work in Progress)",
            "C) Prohibir el uso de tareas de prueba automatizadas",
            "D) Fijar la duración del Sprint en exactamente dos semanas"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los límites WIP fijan el número máximo de ítems permitidos en cada estado del tablero, forzando al equipo a terminar tareas antes de iniciar nuevas."
    },
    {
        id: 56,
        area: "Ingeniería de Requerimientos",
        pregunta: "¿Qué tipo de diagrama UML es el más adecuado para representar el flujo de control condicional, decisiones y actividades paralelas dentro de un proceso de negocio complejo?",
        opciones: [
            "A) Diagrama de Clases",
            "B) Diagrama de Actividades",
            "C) Diagrama de Componentes",
            "D) Diagrama de Objetos"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de actividades muestra el flujo de trabajo dinámico paso a paso, abarcando decisiones, bucles y bifurcaciones paralelas dentro de un proceso."
    },
    {
        id: 57,
        area: "Arquitectura y Diseño de Software",
        pregunta: "Al diseñar una arquitectura de software, ¿qué representan los atributos de calidad comúnmente llamados 'Atributos -ilities' (como Escalabilidad, Disponibilidad, Mantenibilidad y Seguridad)?",
        opciones: [
            "A) Requerimientos no funcionales que guían las decisiones arquitectónicas del sistema",
            "B) Variables locales utilizadas dentro de un bucle de programación",
            "C) Licencias comerciales de software de código abierto",
            "D) Métodos de consulta de la base de datos relacional"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los atributos de calidad son cualidades del sistema que imponen restricciones sobre la arquitectura global para garantizar su operabilidad a largo plazo."
    },
    {
        id: 58,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de diseño creacional delega la lógica de instanciación de clases a subclases derivadas mediante una interfaz o método abstracto?",
        opciones: [
            "A) Abstract Factory",
            "B) Factory Method",
            "C) Prototype",
            "D) Singleton"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Factory Method define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase concreta instanciar."
    },
    {
        id: 59,
        area: "Pruebas y Calidad de Software",
        pregunta: "En las pruebas de aceptación de software, ¿cuál es la diferencia entre la Prueba Alfa (Alpha Testing) y la Prueba Beta (Beta Testing)?",
        opciones: [
            "A) Alfa se realiza en el entorno de desarrollo por personal interno; Beta se realiza en el entorno real por usuarios finales externos",
            "B) Alfa utiliza datos reales; Beta utiliza datos ficticios simulados",
            "C) Alfa es para software web; Beta es para aplicaciones móviles",
            "D) No hay diferencia, ambas se ejecutan de manera idéntica por el cliente final"
        ],
        respuestaCorrecta: 0,
        explicacion: "La prueba Alfa la ejecutan los usuarios internos o desarrolladores en las instalaciones de la empresa; la Beta la realizan usuarios reales en sus propios entornos operacionales."
    },
    {
        id: 60,
        area: "Seguridad en Software",
        pregunta: "¿Qué vulnerabilidad web ocurre cuando un script malicioso escrito en JavaScript se almacena o refleja en una página legítima y se ejecuta en el navegador de otros usuarios?",
        opciones: [
            "A) Cross-Site Scripting (XSS)",
            "B) Man-in-the-Middle (MitM)",
            "C) Denegación de servicio distribuida (DDoS)",
            "D) Inyección de comandos del sistema operativo"
        ],
        respuestaCorrecta: 0,
        explicacion: "XSS permite a los atacantes inyectar scripts en páginas web vistas por otros usuarios, permitiendo el robo de cookies, tokens de sesión o suplantación."
    },
    {
        id: 61,
        area: "Ingeniería de Requerimientos",
        pregunta: "En la ingeniería de software, ¿qué es la 'Ambigüedad' en un documento de especificación de requerimientos (SRS)?",
        opciones: [
            "A) Un requerimiento que puede ser interpretado de dos o más formas distintas por diferentes lectores",
            "B) La falta de un lenguaje de programación definido en la fase inicial",
            "C) Un texto que excede las 500 páginas de extensión gráfica",
            "D) El costo financiero elevado de la implementación de la interfaz"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ambigüedad surge cuando un enunciado no es claro o es vago, lo que lleva a desarrolladores y clientes a tener distintas expectativas sobre la misma función."
    },
    {
        id: 62,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En la arquitectura orientada a eventos, ¿cuál es el componente encargados de publicar eventos sin necesidad de conocer qué suscriptores los recibirán?",
        opciones: [
            "A) Event Producer (Productor de eventos)",
            "B) Event Consumer estático",
            "C) Base de datos SQL centralizada",
            "D) Interfaz de usuario Swing"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los productores de eventos emiten notificaciones sobre cambios de estado hacia el bus de eventos sin conocimiento previo de los receptores o consumidores."
    },
    {
        id: 63,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón estructural agrupa objetos en estructuras de árbol para representar jerarquías de parte-todo, permitiendo a los clientes tratar a objetos individuales y a composiciones de manera uniforme?",
        opciones: [
            "A) Composite",
            "B) Bridge",
            "C) Proxy",
            "D) Flyweight"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Composite permite tratar a componentes simples (hojas) y a agrupaciones (nodos compuestos) mediante una interfaz común."
    },
    {
        id: 64,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué estándar internacional de la IEEE/ISO define la terminología, estructura y contenido de la documentación del proceso de pruebas de software (incluyendo el Plan de Pruebas)?",
        opciones: [
            "A) ISO/IEC/IEEE 29119",
            "B) IEEE 802.11",
            "C) ISO 9001",
            "D) W3C HTML5"
        ],
        respuestaCorrecta: 0,
        explicacion: "La norma ISO/IEC/IEEE 29119 es el estándar internacional unificado para el ciclo de vida, vocabulario y documentación de las pruebas de software."
    },
    {
        id: 65,
        area: "Desarrollo Web y Servicios",
        pregunta: "Al diseñar una API RESTful, ¿qué verbo del protocolo HTTP debe utilizarse para actualizar de forma parcial un recurso existente?",
        opciones: [
            "A) GET",
            "B) POST",
            "C) PUT",
            "D) PATCH"
        ],
        respuestaCorrecta: 3,
        explicacion: "HTTP PATCH se aplica para modificaciones parciales de un recurso; mientras que PUT reemplaza la representación completa del recurso."
    },
    {
        id: 66,
        area: "Ingeniería de Requerimientos",
        pregunta: "En la elicitación de requerimientos, ¿cuál es la ventaja principal de realizar una 'JAD' (Joint Application Development / Desarrollo Conjunto de Aplicaciones)?",
        opciones: [
            "A) Eliminar la necesidad de probar el código fuente más adelante",
            "B) Reunir a usuarios, analistas y directivos en talleres estructurados e intensivos para alcanzar acuerdos y resolver conflictos de requerimientos rápidamente",
            "C) Automatizar la generación de código Java a partir de la voz del cliente",
            "D) Reducir el costo del hardware de los servidores"
        ],
        respuestaCorrecta: 1,
        explicacion: "JAD facilita el consenso acelerado entre múltiples partes interesadas al trabajar interactivamente en sesiones grupales facilitadas."
    },
    {
        id: 67,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En los sistemas distribuidos, ¿qué patrón de diseño permite enviar mensajes entre aplicaciones mediante colas (Message Queues) garantizando el desacoplamiento temporal y espacial?",
        opciones: [
            "A) Comunicación Asíncrona basada en Mensajería (Publish-Subscribe)",
            "B) Llamada a Procedimiento Remoto Síncrono (RPC)",
            "C) Invocación de métodos monolíticos",
            "D) Transferencia de archivos compartidos por FTP"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Publish-Subscribe / Mensajería asíncrona desacopla el emisor del receptor; el emisor envía el mensaje a la cola y continúa su proceso sin esperar respuesta inmediata."
    },
    {
        id: 68,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento encapsula una petición como un objeto, permitiendo parametrizar a los clientes con diferentes peticiones, encolar o registrar peticiones y soporta operaciones desarmables (Undo)?",
        opciones: [
            "A) Strategy",
            "B) Command",
            "C) Chain of Responsibility",
            "D) State"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Command convierte una solicitud en un objeto independiente que contiene toda la información sobre la llamada a ejecutar."
    },
    {
        id: 69,
        area: "Pruebas y Calidad de Software",
        pregunta: "En el análisis de pruebas estáticas, ¿cuál es la función de un 'Linter' o analizador estático de código?",
        opciones: [
            "A) Compilar el código a lenguaje ensamblador de 64 bits",
            "B) Examinar el código fuente sin ejecutarlo para identificar violaciones de estilo, errores sintácticos, variables no usadas o patrones inseguros",
            "C) Desplegar el sistema en servidores AWS automáticamente",
            "D) Ejecutar la suite de pruebas unitarias en paralelo"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un Linter efectúa análisis estático parsing el código fuente para advertir al programador sobre errores potenciales o malas prácticas sin ejecutar el programa."
    },
    {
        id: 70,
        area: "Gestión de Configuración y DevOps",
        pregunta: "¿Qué herramienta de control de versiones distribuido popularizó el concepto de 'Pull Request' (o Merge Request) para revisar cambios antes de integrarlos al código principal?",
        opciones: [
            "A) Subversion (SVN)",
            "B) CVS",
            "C) GitHub / GitLab",
            "D) Microsoft Visual SourceSafe"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las plataformas como GitHub y GitLab popularizaron el flujo de Pull Requests, donde los colaboradores notifican cambios propuestos para revisión antes del merge."
    },
    {
        id: 71,
        area: "Ingeniería de Requerimientos",
        pregunta: "Al redactar requerimientos, ¿por qué se debe evitar el uso de términos vagos como 'adecuado', 'amigable', 'rápido' o 'eficiente'?",
        opciones: [
            "A) Porque incrementan el costo de la licencia del software",
            "B) Porque no son verificables de forma objetiva ni medibles cuantitativamente mediante pruebas",
            "C) Porque son términos reservados del lenguaje C++",
            "D) Porque confunden al cliente durante la venta del producto"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los requerimientos deben ser verificables; adjetivos subjetivos no cuantitativos imposibilitan construir casos de prueba objetivos para validar su cumplimiento."
    },
    {
        id: 72,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En el diseño de microservicios, ¿qué patrón aborda la gestión de transacciones distribuidas entre múltiples servicios mediante una secuencia de transacciones locales vinculadas por eventos?",
        opciones: [
            "A) Dos fases de compromiso (2PC)",
            "B) Patrón Saga",
            "C) Monolito distribuido",
            "D) Tablas de bloqueo pesimista"
        ],
        respuestaCorrecta: 1,
        explicacion: "El patrón Saga gestiona transacciones distribuidas ejecutando una serie de transacciones locales en cada microservicio, usando eventos compensatorios ante fallas."
    },
    {
        id: 73,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento permite a un objeto alterar su comportamiento cuando su estado interno cambia, haciendo que el objeto parezca haber cambiado de clase?",
        opciones: [
            "A) State",
            "B) Strategy",
            "C) Template Method",
            "D) Observer"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón State encapsula los comportamientos dependientes del estado en clases separadas y delega la ejecución al objeto que representa el estado actual."
    },
    {
        id: 74,
        area: "Pruebas y Calidad de Software",
        pregunta: "En la técnica de análisis de valor límite para campos de texto que aceptan entre 5 y 10 caracteres, ¿cuáles son los valores críticos de prueba que deben ser probados?",
        opciones: [
            "A) 1, 100, 1000",
            "B) 4, 5, 6, 9, 10, 11",
            "C) 0, 50, 100",
            "D) Únicamente el número 7"
        ],
        respuestaCorrecta: 1,
        explicacion: "El análisis de valores límite evalúa las fronteras de las clases de equivalencia (justo por debajo, dentro y justo por encima de los límites: 4, 5, 6 y 9, 10, 11)."
    },
    {
        id: 75,
        area: "Bases de Datos NoSQL",
        pregunta: "¿Qué tipo de base de datos NoSQL es la más adecuada para representar redes complejas de datos interconectados con entidades y relaciones ricas (como redes sociales o grafos de conocimiento)?",
        opciones: [
            "A) Base de datos clave-valor (ej. Redis)",
            "B) Base de datos orientada a documentos (ej. MongoDB)",
            "C) Base de datos de grafos (ej. Neo4j)",
            "D) Base de datos de columnas anchas (ej. Cassandra)"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las bases de datos de grafos almacenan nodos (entidades) y aristas (relaciones), permitiendo consultas ágiles sobre estructuras de red fuertemente enlazadas."
    },
    {
        id: 76,
        area: "Ingeniería de Requerimientos",
        pregunta: "En UML, ¿qué elemento gráfico representa una interacción o mensaje asíncrono entre dos líneas de vida en un diagrama de secuencia?",
        opciones: [
            "A) Una flecha con punta sólida rellenada",
            "B) Una flecha con punta abierta ($\rightarrow$)",
            "C) Una línea punteada sin punta de flecha",
            "D) Un rectángulo de color rojo"
        ],
        respuestaCorrecta: 1,
        explicacion: "En UML, las llamadas síncronas se grafican con punta de flecha maciza ($\blacktriangleright$), mientras que las llamadas asíncronas usan punta de flecha abierta ($\rightarrow$)."
    },
    {
        id: 77,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué estilo de arquitectura dividida enfatiza la separación estricta de las responsabilidades de la UI, lógica de aplicaciones, lógica de dominio e infraestructura en anillos concéntricos?",
        opciones: [
            "A) Clean Architecture (Arquitectura Limpia) / Onion Architecture",
            "B) Arquitectura Cliente-Servidor de 2 capas",
            "C) Arquitectura distribuida por tuberías",
            "D) Arquitectura P2P (Peer-to-Peer)"
        ],
        respuestaCorrecta: 0,
        explicacion: "La Clean Architecture de Robert C. Martin organiza el código en capas concéntricas con una regla de dependencia estricta dirigida hacia adentro (el dominio es el centro)."
    },
    {
        id: 78,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de diseño estructural reduce el uso de memoria compartiendo eficientemente partes comunes de estado entre un gran número de objetos similares?",
        opciones: [
            "A) Flyweight (Peso ligero)",
            "B) Proxy",
            "C) Adapter",
            "D) Facade"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Flyweight minimiza el consumo de RAM compartiendo el estado intrínseco invariable entre múltiples objetos en lugar de duplicarlo."
    },
    {
        id: 79,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué término describe el proceso de testing realizado por los desarrolladores donde se crean 'objetos simulados' (Mocks/Stubs) para aislar la unidad bajo prueba de sus dependencias externas?",
        opciones: [
            "A) Pruebas de integración del sistema",
            "B) Pruebas unitarias con Aislamiento (Mocking)",
            "C) Pruebas de usabilidad en laboratorio",
            "D) Pruebas de rendimiento de extremo a extremo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El uso de Mocks o Stubs sustituye componentes reales (como bases de datos o servicios remotos) para aislar el código probando exclusivamente la unidad deseada."
    },
    {
        id: 80,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la metodología ágil Scrum, ¿cuál es el propósito de la reunión diaria (Daily Standup)?",
        opciones: [
            "A) Demostrar el software funcionando a los clientes finales",
            "B) Sincronizar las actividades del equipo de desarrollo, revisar el progreso hacia la Meta del Sprint e identificar impedimentos en máximo 15 minutos",
            "C) Negociar el sueldo de los desarrolladores para el siguiente mes",
            "D) Re-estimar todos los elementos del Product Backlog"
        ],
        respuestaCorrecta: 1,
        explicacion: "El Daily Scrum es un evento de 15 minutos donde los desarrolladores inspeccionan el avance hacia el Sprint Goal y adaptan su plan de trabajo diario."
    },
    {
        id: 81,
        area: "Ingeniería de Requerimientos",
        pregunta: "En los modelos de requerimientos, ¿cuál es el objetivo de construir un 'Glosario de Términos' o 'Diccionario del Dominio'?",
        opciones: [
            "A) Definir formalmente los términos técnicos y del negocio para asegurar un vocabulario común entre el cliente y el equipo de desarrollo",
            "B) Documentar las sintaxis del lenguaje de programación que se utilizará",
            "C) Listar las contraseñas de los usuarios en producción",
            "D) Traducir el sistema a múltiples idiomas automáticamente"
        ],
        respuestaCorrecta: 0,
        explicacion: "El diccionario del dominio homogeniza la terminología del proyecto, asegurando que todos los participantes entiendan exactamente lo mismo por cada concepto del negocio."
    },
    {
        id: 82,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En una arquitectura orientada a microservicios, ¿cuál es el papel de un servidor de 'Discovery Service' (como Eureka o Consul)?",
        opciones: [
            "A) Rastrear y registrar dinámicamente las direcciones IP y puertos de las instancias de microservicios activas en la red",
            "B) Bloquear los ataques DDoS a nivel de red",
            "C) Generar gráficos en formato PDF para la gerencia",
            "D) Compilar el código fuente de Java a Bytecode"
        ],
        respuestaCorrecta: 0,
        explicacion: "Service Discovery permite a los microservicios localizarse dinámicamente en entornos de la nube donde las direcciones IP e instancias cambian constantemente."
    },
    {
        id: 83,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento define el esqueleto de un algoritmo en una clase base, pero delega la implementación de ciertos pasos específicos a las subclases derivadas?",
        opciones: [
            "A) Template Method",
            "B) Strategy",
            "C) Visitor",
            "D) Command"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Template Method define la estructura fija de un algoritmo en un método de la clase padre, permitiendo a las subclases sobrescribir pasos sin cambiar la estructura global."
    },
    {
        id: 84,
        area: "Pruebas y Calidad de Software",
        pregunta: "Dentro del estándar ISO/IEC 25010, ¿qué evalúa la característica de 'Usabilidad'?",
        opciones: [
            "A) La velocidad de procesamiento en gigaflops",
            "B) La capacidad del software para ser entendido, aprendido, usado y resultar atractivo para el usuario bajo condiciones específicas",
            "C) La facilidad de migrar el código a otro sistema operativo",
            "D) La ausencia de vulnerabilidades de desbordamiento de memoria"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Usabilidad en ISO/IEC 25010 abarca la Aprendizibilidad, Operabilidad, Protección contra errores de usuario y Estética de la interfaz."
    },
    {
        id: 85,
        area: "DevOps y Despliegue",
        pregunta: "¿Qué tecnología de virtualización a nivel de sistema operativo utiliza contenedores ligeros e independientes para empaquetar una aplicación con todas sus dependencias?",
        opciones: [
            "A) VMware ESXi",
            "B) Docker",
            "C) VirtualBox",
            "D) Microsoft Hyper-V"
        ],
        respuestaCorrecta: 1,
        explicacion: "Docker encapsula aplicaciones en contenedores ligeros que comparten el kernel del sistema operativo host, garantizando ejecuciones idénticas en cualquier entorno."
    },
    {
        id: 86,
        area: "Ingeniería de Requerimientos",
        pregunta: "En la especificación de requerimientos según el estándar IEEE 830 / ISO 29148, ¿qué sección del documento describe el entorno operativo, limitaciones de memoria y dependencias de hardware?",
        opciones: [
            "A) Restricciones de diseño y entorno operativo",
            "B) Historias de usuario prioritarias",
            "C) Casos de uso de negocio",
            "D) Manual de instalación para el usuario final"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las secciones de restricciones de diseño y factores del entorno abordan las limitaciones técnicas, de hardware y plataformas donde el software debe operar obligatoriamente."
    },
    {
        id: 87,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En una arquitectura basada en eventos, ¿qué ventaja ofrece el patrón 'Event Sourcing' frente a la persistencia en estado actual tradicional?",
        opciones: [
            "A) Guardar cada cambio de estado como una secuencia inmutable de eventos ordenados en el tiempo, permitiendo reconstruir estados pasados y auditar todo el historial",
            "B) Borrar la base de datos automáticamente cada 24 horas",
            "C) Evitar el uso de claves primarias en tablas relacionales",
            "D) Garantizar que las consultas web se ejecuten en menos de un milisegundo"
        ],
        respuestaCorrecta: 0,
        explicacion: "Event Sourcing almacena el historial completo de eventos (hechos pasados) como registro principal de verdad, permitiendo reproducir el estado del sistema en cualquier punto del tiempo."
    },
    {
        id: 88,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento permite separar un algoritmo de la estructura de objetos sobre la que opera, añadiendo nuevas operaciones a las clases sin modificarlas?",
        opciones: [
            "A) Visitor (Visitante)",
            "B) Iterator",
            "C) Mediator",
            "D) Memento"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Visitor permite definir una nueva operación sobre una jerarquía de clases de objetos sin cambiar las clases de los elementos sobre los que opera."
    },
    {
        id: 89,
        area: "Pruebas y Calidad de Software",
        pregunta: "En las pruebas de penetración (Penetration Testing), ¿qué caracteriza a una prueba de tipo 'Caja Negra' (Black Box Pen Testing)?",
        opciones: [
            "A) El evaluador cuenta con acceso completo al código fuente, diagramas de arquitectura y credenciales administrativas",
            "B) El evaluador no posee ningún conocimiento previo sobre la infraestructura interna o código del sistema a atacar, simulando a un atacante externo real",
            "C) El evaluador solo prueba la interfaz en papel mediante bocetos",
            "D) La prueba se realiza con el servidor totalmente apagado"
        ],
        respuestaCorrecta: 1,
        explicacion: "En una prueba de caja negra, el auditor de seguridad ataca el sistema desde el exterior sin información interna sobre su diseño o código."
    },
    {
        id: 90,
        area: "Mantenimiento y Evolución de Software",
        pregunta: "¿Qué tipo de mantenimiento de software se lleva a cabo para anticipar y corregir problemas potenciales antes de que se conviertan en fallas activas en producción?",
        opciones: [
            "A) Mantenimiento Correctivo",
            "B) Mantenimiento Adaptativo",
            "C) Mantenimiento Preventivo (o Perfectivo)",
            "D) Mantenimiento de Emergencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "El mantenimiento preventivo realiza modificaciones para detectar y corregir latencias o fallas potenciales antes de que impacten al sistema en ejecución."
    },
    {
        id: 91,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el análisis de requerimientos de un sistema crítico, ¿cuál de los siguientes elementos es un Requerimiento No Funcional de Seguridad?",
        opciones: [
            "A) El sistema debe cifrar los datos en reposo y en tránsito utilizando el algoritmo AES-256",
            "B) El usuario puede presionar el botón 'Cancelar' para cerrar su cuenta",
            "C) El administrador debe poder emitir reportes en formato Excel",
            "D) La aplicación debe mostrar el logotipo de la empresa en la esquina superior izquierda"
        ],
        respuestaCorrecta: 0,
        explicacion: "El cifrado AES-256 impone una restricción de seguridad no funcional sobre cómo se deben proteger y almacenar los datos de la plataforma."
    },
    {
        id: 92,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En los principios SOLID, ¿qué sostiene el Principio de Sustitución de Liskov (LSP)?",
        opciones: [
            "A) Los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin alterar la corrección del programa",
            "B) Toda clase debe ser final y prohibir la herencia",
            "C) Las interfaces deben contener al menos 50 métodos declarados",
            "D) Todas las variables globales deben ser constantes estáticas"
        ],
        respuestaCorrecta: 0,
        explicacion: "LSP indica que las subclases deben ser sustituibles por sus clases base sin romper la coherencia ni el comportamiento esperado del programa."
    },
    {
        id: 93,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón estructural proporciona un sustituto o marcador de posición para otro objeto con el fin de controlar el acceso a él (por ejemplo, para carga perezosa o control de permisos)?",
        opciones: [
            "A) Proxy",
            "B) Adapter",
            "C) Facade",
            "D) Composite"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Proxy controla el acceso al objeto original, permitiendo ejecutar algo antes o después de que la solicitud llegue al objeto real."
    },
    {
        id: 94,
        area: "Pruebas y Calidad de Software",
        pregunta: "En una suite de pruebas de caja blanca, ¿qué representa el término 'Camino Independiente'?",
        opciones: [
            "A) Cualquier flujo a través del programa que introduce al menos un nuevo conjunto de declaraciones de procesamiento o una nueva condición",
            "B) La prueba realizada por un equipo de consultores externos",
            "C) La ejecución del software sin conexión a Internet",
            "D) Un caso de prueba que pasa sin arrojar ninguna advertencia en consola"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un camino independiente en el grafo de flujo de control recorre al menos una arista no transitada anteriormente por otros caminos."
    },
    {
        id: 95,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la estimación con Puntos de Historia (Story Points), ¿qué característica define a esta unidad de medida ágil?",
        opciones: [
            "A) Es una medida abstracta y relativa que combina la complejidad, esfuerzo y riesgo del trabajo, independiente del tiempo en horas absolutas",
            "B) Equivale exactamente a 8 horas de trabajo de un desarrollador senior",
            "C) Mide el costo financiero exacto en dólares de una historia",
            "D) Representa la cantidad de líneas de código que escribirá el programador"
        ],
        respuestaCorrecta: 0,
        explicacion: "Los puntos de historia representan el esfuerzo relativo mediante valores comparativos (ej. secuencia de Fibonacci) aislando la estimación de la durabilidad en horas fijas."
    },
    {
        id: 96,
        area: "Ingeniería de Requerimientos",
        pregunta: "¿Qué técnica de elicitación de requerimientos consiste en observar directamente a los usuarios desempeñando sus tareas diarias en su entorno de trabajo habitual?",
        opciones: [
            "A) Observación de campo (Etnografía / Shadowing)",
            "B) Tormenta de ideas (Brainstorming)",
            "C) Encuesta masiva cerrada",
            "D) Reverse Engineering"
        ],
        respuestaCorrecta: 0,
        explicacion: "La observación directa o shadowing permite descubrir requerimientos tácitos o procesos no documentados observando al usuario en su puesto de trabajo."
    },
    {
        id: 97,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué problema aborda la 'Capa de Abstracción de Base de Datos' o el uso de un ORM (Object-Relational Mapping) como Hibernate o Entity Framework?",
        opciones: [
            "A) Mapear los objetos del lenguaje de programación a tablas relacionales, desacoplando el código del motor de base de datos subyacente",
            "B) Acelerar el renderizado de gráficos 3D en el navegador web",
            "C) Generar código HTML estático automáticamente",
            "D) Reemplazar la necesidad de usar memoria RAM en el servidor"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un ORM convierte los datos entre sistemas de tipos incompatibles (orientación a objetos frente a tablas relacionales) facilitando la persistencia de datos."
    },
    {
        id: 98,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento pasa una solicitud a lo largo de una cadena de manejadores potenciales hasta que uno de ellos la procesa?",
        opciones: [
            "A) Chain of Responsibility (Cadena de Responsabilidad)",
            "B) Command",
            "C) Mediator",
            "D) Observer"
        ],
        respuestaCorrecta: 0,
        explicacion: "Chain of Responsibility permite pasar solicitudes a lo largo de una cadena de objetos receptores donde cada manejador decide si procesa la petición o la pasa al siguiente."
    },
    {
        id: 99,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué métrica de calidad de software mide el número de defectos encontrados en una aplicación divididos entre el tamaño de la misma (por ejemplo, defectos por KLOC o por Punto de Función)?",
        opciones: [
            "A) Densidad de defectos (Defect Density)",
            "B) Tasa de re-trabajo acumulada",
            "C) Complejidad de McCabe",
            "D) Indice de deuda técnica anual"
        ],
        respuestaCorrecta: 0,
        explicacion: "La densidad de defectos cuantifica la calidad de la entrega dividiendo la cantidad de fallas detectadas entre la dimensión total del código desarrollado."
    },
    {
        id: 100,
        area: "Arquitectura y Sistemas Distribuidos",
        pregunta: "En una arquitectura basada en Microservicios, ¿qué patrón de diseño gestiona la configuración de manera centralizada para todas las instancias de servicios en ejecución?",
        opciones: [
            "A) Externalized Configuration (Configuración Externalizada)",
            "B) Hardcoding de parámetros en variables globales",
            "C) Singleton estático en cada archivo ejecutable",
            "D) Copia manual de archivos `.env` en cada contenedor"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Externalized Configuration mantiene la configuración del entorno fuera del código fuente en un servidor centralizado (ej. Spring Cloud Config) para modificar parámetros sin recompilar."
    },
    {
        id: 101,
        area: "Ingeniería de Requerimientos",
        pregunta: "En un diagrama de casos de uso UML, ¿qué elemento representa una entidad externa que interactúa con el sistema desempeñando un papel específico?",
        opciones: [
            "A) Actor",
            "B) Clase base",
            "C) Paquete",
            "D) Nodo de despliegue"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un Actor en UML representa un rol jugado por un usuario humano u otro sistema externo que interactúa directamente con los casos de uso del sistema."
    },
    {
        id: 102,
        area: "Arquitectura y Diseño de Software",
        pregunta: "En la arquitectura Cliente-Servidor, ¿qué caracteriza a un cliente de tipo 'Cliente Pesado' (Fat/Thick Client)?",
        opciones: [
            "A) Realiza gran parte del procesamiento de datos y lógica de presentación en el dispositivo local del usuario",
            "B) Solo renderiza HTML estático enviado por el servidor",
            "C) No requiere memoria ni disco duro para ejecutarse",
            "D) Funciona exclusivamente dentro de un servidor de correo electrónico"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un cliente pesado procesa la lógica de interfaz, validaciones y parte de la lógica de negocio en el equipo cliente, dependiendo del servidor principalmente para datos."
    },
    {
        id: 103,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón de comportamiento proporciona una forma de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación subyacente?",
        opciones: [
            "A) Iterator (Iterador)",
            "B) Visitor",
            "C) Strategy",
            "D) Memento"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Iterator abstrae el recorrido de colecciones de datos (listas, árboles, grafos) mediante una interfaz secuencial común."
    },
    {
        id: 104,
        area: "Pruebas y Calidad de Software",
        pregunta: "En la automatización de pruebas web, ¿qué herramienta de código abierto es ampliamente utilizada para simular la interacción directa del usuario en diversos navegadores?",
        opciones: [
            "A) Selenium / Cypress",
            "B) Docker Compose",
            "C) SonarQube",
            "D) Jenkins"
        ],
        respuestaCorrecta: 0,
        explicacion: "Selenium y Cypress son frameworks estándar de automatización de pruebas end-to-end (E2E) que interactúan con aplicaciones web simulando las acciones del usuario."
    },
    {
        id: 105,
        area: "Desarrollo Web y Servicios",
        pregunta: "En una arquitectura de servicios REST, ¿cuál es el significado del principio de 'Apatia de estado' (Statelessness)?",
        opciones: [
            "A) Cada solicitud HTTP del cliente al servidor debe contener toda la información necesaria para entenderla, sin guardar contexto del cliente en el servidor entre peticiones",
            "B) La base de datos se reinicia automáticamente tras cada consulta GET",
            "C) El servidor web solo puede responder peticiones en formato XML",
            "D) La aplicación no admite la autenticación de usuarios"
        ],
        respuestaCorrecta: 0,
        explicacion: "Statelessness significa que el servidor no conserva ningún estado de la sesión del cliente; cada petición es independiente y autosuficiente."
    },
    {
        id: 106,
        area: "Ingeniería de Requerimientos",
        pregunta: "¿Qué tipo de análisis se realiza para evaluar la viabilidad técnica, económica, legal y operativa de desarrollar un proyecto de software antes de su aprobación formal?",
        opciones: [
            "A) Estudio de factibilidad (Feasibility Study)",
            "B) Análisis de complejidad de McCabe",
            "C) Revisión de pares de código",
            "D) Prueba de regresión automatizada"
        ],
        respuestaCorrecta: 0,
        explicacion: "El estudio de factibilidad evalúa si el proyecto es realizable considerando restricciones financieras, técnicas, de recursos y plazos de entrega."
    },
    {
        id: 107,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué patrón de diseño arquitectónico estructural desacopla una abstracción de su implementación de modo que ambas puedan variar independientemente?",
        opciones: [
            "A) Bridge (Puente)",
            "B) Composite",
            "C) Facade",
            "D) Singleton"
        ],
        respuestaCorrecta: 0,
        explicacion: "El patrón Bridge utiliza la composición en lugar de la herencia para separar la interfaz de abstracción de sus implementaciones concretas."
    },
    {
        id: 108,
        area: "Construcción y Patrones de Diseño",
        pregunta: "En el principio SOLID de Segregación de Interfaces (ISP), ¿qué regla de diseño se impone?",
        opciones: [
            "A) Los clientes no deben ser obligados a depender de interfaces o métodos que no utilizan",
            "B) Todas las interfaces deben declararse en un solo archivo plano",
            "C) Las clases deben heredar obligatoriamente de al menos tres interfaces",
            "D) Se prohíbe el uso de interfaces en proyectos con más de diez desarrolladores"
        ],
        respuestaCorrecta: 0,
        explicacion: "ISP establece que es preferible contar con muchas interfaces pequeñas y enfocadas en lugar de una interfaz masiva con métodos innecesarios para algunos clientes."
    },
    {
        id: 109,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué nivel de pruebas verifica que los componentes o módulos individuales de software interactúen correctamente entre sí al conectarse?",
        opciones: [
            "A) Pruebas de integración",
            "B) Pruebas unitarias aisladas",
            "C) Pruebas de sistema completas",
            "D) Pruebas de humo rápidas"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas de integración evalúan las interfaces y la transferencia de datos entre unidades o módulos integrados del sistema."
    },
    {
        id: 110,
        area: "Gestión de Proyectos de Software",
        pregunta: "En la gestión del valor ganado (EVM), ¿qué indica un Índice de Desempeño del Cronograma (SPI) menor a 1.0 ($SPI < 1.0$)?",
        opciones: [
            "A) El proyecto está retrasado con respecto al cronograma planificado",
            "B) El proyecto va adelantado según el tiempo previsto",
            "C) El proyecto está gastando menos dinero del presupuestado",
            "D) La calidad del código fuente es óptima"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un $SPI < 1.0$ (Schedule Performance Index) indica que el trabajo completado hasta el momento es menor que el planificado (retraso en tiempo)."
    },
    {
        id: 111,
        area: "Ingeniería de Requerimientos",
        pregunta: "En la elicitación de requerimientos, ¿cuál es el propósito de crear 'Personas' (User Personas)?",
        opciones: [
            "A) Perfiles arqueotípicos y ficticios pero realistas que representan las características, necesidades y metas de los usuarios finales clave",
            "B) Fotografías de los empleados de la empresa contratante",
            "C) Lista de nombres reales de los inversionistas del proyecto",
            "D) Modelos de inteligencia artificial que generan código"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las User Personas ayudan al equipo de diseño a empatizar con los usuarios representativos, comprendiendo sus objetivos y contexto de uso."
    },
    {
        id: 112,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué problema de concurrencia ocurre cuando dos o más hilos de ejecución quedan bloqueados indefinidamente, esperando mutuamente por recursos retenidos por los otros?",
        opciones: [
            "A) Interbloqueo (Deadlock)",
            "B) Condición de carrera (Race Condition)",
            "C) Fuga de memoria (Memory Leak)",
            "D) Inyección de código"
        ],
        respuestaCorrecta: 0,
        explicacion: "Un Deadlock o interbloqueo ocurre cuando los procesos forman una dependencia circular esperando por recursos que están mutuamente bloqueados."
    },
    {
        id: 113,
        area: "Construcción y Patrones de Diseño",
        pregunta: "¿Qué patrón creacional proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas?",
        opciones: [
            "A) Abstract Factory",
            "B) Builder",
            "C) Factory Method",
            "D) Singleton"
        ],
        respuestaCorrecta: 0,
        explicacion: "Abstract Factory crea grupos de productos relacionados (ej. controles UI para Windows y Mac) sin atarse a las implementaciones concretas."
    },
    {
        id: 114,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué herramienta se utiliza para evaluar métricas de mantenibilidad, detectar 'code smells', duplicación de código y fallos de seguridad mediante análisis estático automatizado?",
        opciones: [
            "A) SonarQube",
            "B) Postman",
            "C) Apache JMeter",
            "D) GitKraken"
        ],
        respuestaCorrecta: 0,
        explicacion: "SonarQube es una plataforma líder de inspección continua de código que detecta errores, vulnerabilidades y deuda técnica."
    },
    {
        id: 115,
        area: "DevOps y Despliegue",
        pregunta: "En la estrategia de despliegue 'Blue-Green', ¿cómo se logra minimizar el tiempo de inactividad (downtime) y el riesgo en producción?",
        opciones: [
            "A) Mantener dos entornos idénticos (Blue activo y Green inactivo); se despliega la nueva versión en Green y se conmuta el tráfico instantáneamente mediante el enrutador",
            "B) Desplegar el código directamente en el servidor de producción a mediodía",
            "C) Reiniciar físicamente los servidores durante cinco horas",
            "D) Borrar los datos antiguos antes de subir el binario"
        ],
        respuestaCorrecta: 0,
        explicacion: "Blue-Green Deployment utiliza dos entornos de producción idénticos para permitir despliegues de cero tiempo de inactividad y rollback inmediato."
    },
    {
        id: 116,
        area: "Ingeniería de Requerimientos",
        pregunta: "En el estándar IEEE 830, ¿qué propiedad asegura que una especificación de requerimientos no contenga contradicciones internas entre requerimientos individuales?",
        opciones: [
            "A) Consistencia (Consistency)",
            "B) Modificabilidad",
            "C) Trazabilidad posterior",
            "D) Verificabilidad de hardware"
        ],
        respuestaCorrecta: 0,
        explicacion: "La consistencia garantiza que ningún requerimiento entre en conflicto directo o contradiga lo especificado en otro requerimiento del documento."
    },
    {
        id: 117,
        area: "Arquitectura y Diseño de Software",
        pregunta: "¿Qué patrón de microservicios permite consolidar métricas de salud, logs y rastreo distribuido (Distributed Tracing) a través de múltiples llamadas a microservicios utilizando un identificador único (Correlation ID)?",
        opciones: [
            "A) Distributed Tracing (ej. Jaeger / Zipkin)",
            "B) Singleton de logs en el cliente",
            "C) Base de datos compartida",
            "D) Enrutamiento DNS estático"
        ],
        respuestaCorrecta: 0,
        explicacion: "El rastreo distribuido inyecta un Correlation ID en los encabezados para seguir el flujo de una transacción a través de la malla de microservicios."
    },
    {
        id: 118,
        area: "Construcción y Patrones de Diseño",
        pregunta: "En la programación orientada a objetos, ¿qué concepto describe la capacidad de un método para tomar distintas formas o comportamientos según la instancia concreta que lo invoque en tiempo de ejecución?",
        opciones: [
            "A) Polimorfismo",
            "B) Encapsulamiento",
            "C) Abstracción pura",
            "D) Herencia simple"
        ],
        respuestaCorrecta: 0,
        explicacion: "El polimorfismo permite enviar el mismo mensaje a objetos de clases distintas y que cada uno responda según su propia implementación."
    },
    {
        id: 119,
        area: "Pruebas y Calidad de Software",
        pregunta: "¿Qué tipo de prueba no funcional mide el rendimiento y tiempos de respuesta de una aplicación web bajo una carga simultánea esperada de usuarios normales?",
        opciones: [
            "A) Pruebas de carga (Load Testing)",
            "B) Pruebas de recuperación ante desastres",
            "C) Pruebas de instalación",
            "D) Pruebas de compatibilidad con navegadores"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las pruebas de carga evalúan el comportamiento del sistema bajo condiciones de operación y concurrencia normales o picos previstos."
    },
    {
        id: 120,
        area: "Mantenimiento y Evolución de Software",
        pregunta: "¿En qué consiste la técnica de 'Reverse Engineering' (Ingeniería Inversa) de software?",
        opciones: [
            "A) Analizar un sistema existente para identificar sus componentes, relaciones y crear representaciones de abstracción en un nivel más alto de diseño",
            "B) Borrar el código fuente original para evitar infracciones de derechos de autor",
            "C) Convertir diagramas de clases UML en archivos ejecutables binarios directamente",
            "D) Ejecutar pruebas de estrés hasta que el servidor sufra un cortocircuito"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ingeniería inversa analiza el código o ejecutable para extraer información de diseño y comprender la arquitectura o lógica interna del sistema."
    }
];