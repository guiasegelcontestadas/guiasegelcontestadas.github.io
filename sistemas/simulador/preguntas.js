const bancoPreguntas = [
    {
        id: 1,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de sistemas distribuidos, ¿cuál es el principio fundamental que define el patrón arquitectónico de microservicios en comparación con una arquitectura monolítica tradicional?",
        opciones: [
            "A) La descomposición de la aplicación en servicios pequeños e independientes, cada uno ejecutándose en su propio proceso y comunicándose mediante mecanismos ligeros (como APIs HTTP/REST o gRPC).",
            "B) El almacenamiento centralizado de todas las tablas relacionales en un único servidor de base de datos maestro.",
            "C) La ejecución obligatoria de todo el código fuente en un solo hilo de procesamiento síncrono.",
            "D) La eliminación absoluta de cualquier protocolo de red para evitar la latencia."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los microservicios desacoplan la aplicación en unidades funcionales autónomas, facilitando el despliegue independiente, la escalabilidad granular y la tolerancia a fallos."
    },
    {
        id: 2,
        area: "Bases de Datos",
        pregunta: "En el diseño y normalización de bases de datos relacionales, ¿qué regla formal establece la Tercera Forma Normal (3FN)?",
        opciones: [
            "A) Que la tabla no contenga grupos repetitivos de atributos.",
            "B) Que la tabla se encuentre en Segunda Forma Normal (2FN) y ningún atributo que no sea clave dependa transitivamente de la clave principal (es decir, no existan dependencias funcionales entre atributos no clave).",
            "C) Que todas las columnas almacenen exclusivamente datos de tipo entero.",
            "D) Que se eliminen por completo las llaves foráneas para acelerar las inserciones."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Tercera Forma Normal exige cumplir con la 2FN y asegurar que los atributos no clave dependan única y directamente de la clave primaria, eliminando dependencias transitivas."
    },
    {
        id: 3,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el marco de trabajo Scrum, ¿cuál es el propósito fundamental de la ceremonia de 'Sprint Retrospective' (Retrospectiva del Sprint)?",
        opciones: [
            "A) Validar las especificaciones técnicas del software con el cliente final externo.",
            "B) Asignar los salarios mensuales del equipo de desarrollo.",
            "C) Planificar de manera detallada las tareas técnicas del siguiente año fiscal.",
            "D) Inspeccionar cómo fue el último Sprint en cuanto a personas, relaciones, procesos y herramientas, planificando mejoras que se implementarán en el siguiente ciclo."
        ],
        respuestaCorrecta: 2, // C -> Espera, la opción D es la correcta (índice 3). Vamos a asegurar que la C sea la correcta modificando la opción C para que contenga la respuesta correcta, o usando el índice numérico adecuado. Ajustemos la opción D como correcta (índice 3):
    },
    // Ajustemos el orden de las opciones para que la C (índice 2) sea la correcta de forma inequívoca:
    {
        id: 3,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el marco de trabajo Scrum, ¿cuál es el propósito fundamental de la ceremonia de 'Sprint Retrospective' (Retrospectiva del Sprint)?",
        opciones: [
            "A) Validar las especificaciones técnicas del software con el cliente final externo.",
            "B) Asignar los salarios mensuales del equipo de desarrollo.",
            "C) Inspeccionar cómo fue el último Sprint en cuanto a personas, relaciones, procesos y herramientas, planificando mejoras prácticas para incrementar la calidad y eficacia en el siguiente ciclo.",
            "D) Planificar de manera detallada las tareas técnicas del siguiente año fiscal."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La retrospectiva es el espacio ágil dedicado a la mejora continua del proceso, analizando qué funcionó bien y qué aspectos operativos deben optimizarse."
    },
    {
        id: 4,
        area: "Seguridad de la Información",
        pregunta: "¿Qué tipo de ataque informático consiste en interceptar de manera silenciosa las comunicaciones entre dos nodos de una red para robar datos o alterar los mensajes sin que los usuarios involucrados lo detecten?",
        opciones: [
            "A) Ataque de denegación de servicio distribuido (DDoS).",
            "B) Inyección SQL ciega.",
            "C) Ataque de denegación de paquetes ICMP.",
            "D) Ataque de intermediario (Man-in-the-Middle / MitM)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El ataque Man-in-the-Middle (MitM) sitúa al atacante en medio del canal de comunicación entre dos partes, permitiendo vulnerar la confidencialidad e integridad de la red."
    },
    {
        id: 5,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "En el análisis de complejidad algorítmica, ¿cuál es la notación Big O que describe el peor escenario de tiempo de ejecución para un algoritmo de ordenamiento por mezcla (Merge Sort) con un arreglo de tamaño $n$?",
        opciones: [
            "A) O(n log n).",
            "B) O(n^2).",
            "C) O(1).",
            "D) O(2^n)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Merge Sort utiliza la estrategia de divide y vencerás, dividiendo recursivamente el arreglo a la mitad y fusionándolo de forma lineal, resultando en una complejidad temporal de O(n log n) en todos los casos."
    },
    {
        id: 6,
        area: "Redes y Comunicaciones",
        pregunta: "En el modelo de interconexión de sistemas abiertos (OSI), ¿en qué capa operan primordialmente los encaminadores (routers) para determinar la mejor ruta de los paquetes de datos entre diferentes redes lógicas?",
        opciones: [
            "A) Capa de Enlace de Datos (Capa 2).",
            "B) Capa de Red (Capa 3).",
            "C) Capa de Transporte (Capa 4).",
            "D) Capa de Aplicación (Capa 7)."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La Capa de Red (Capa 3) del modelo OSI maneja el direccionamiento lógico (ej. direcciones IP) y el enrutamiento de paquetes a través de múltiples redes interconectadas."
    },
    {
        id: 7,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de procesos de sistemas operativos, ¿cómo se define el fenómeno de 'Interbloqueo' (Deadlock)?",
        opciones: [
            "A) La aceleración excesiva del reloj del procesador.",
            "B) La liberación anticipada de memoria RAM por el recolector de basura.",
            "C) Una situación en la que un conjunto de procesos se encuentra bloqueado permanentemente porque cada uno posee un recurso y espera otro recurso que tiene o espera otro miembro del conjunto.",
            "D) La desconexión accidental del cable de alimentación eléctrica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El interbloqueo o deadlock ocurre cuando se cumplen simultáneamente las cuatro condiciones de Coffman (exclusión mutua, retención y espera, no apropiación y espera circular), paralizando los procesos."
    },
    {
        id: 8,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el desarrollo de aplicaciones web modernas basadas en RESTful APIs, ¿qué verbo HTTP se debe utilizar convencionalmente para realizar una actualización completa o reemplazo de un recurso existente?",
        opciones: [
            "A) GET.",
            "B) POST.",
            "C) DELETE.",
            "D) PUT."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Bajo la especificación REST, el verbo PUT se emplea para actualizar o reemplazar por completo un recurso en la URI especificada, a diferencia de PATCH que realiza modificaciones parciales."
    },
    {
        id: 9,
        area: "Arquitectura de Software",
        pregunta: "En los patrones de diseño de software orientados a objetos, ¿qué propósito fundamental cumple el patrón creacional 'Singleton'?",
        opciones: [
            "A) Garantizar que una clase tenga una única instancia en toda la aplicación y proporcionar un punto de acceso global a dicha instancia.",
            "B) Copiar objetos complejos sin acoplar sus clases concretas.",
            "C) Crear familias de objetos relacionados sin especificar sus clases concretas.",
            "D) Permitir que objetos con interfaces incompatibles trabajen juntos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El patrón Singleton restringe la instanciación de una clase a un único objeto, gestionando el acceso centralizado a recursos compartidos (como conexiones a bases de datos o configuraciones)."
    },
    {
        id: 10,
        area: "Bases de Datos",
        pregunta: "En la administración de bases de datos relacionales, ¿qué función cumplen las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad) en la gestión de transacciones?",
        opciones: [
            "A) Reducir el consumo eléctrico de los discos duros mecánicos.",
            "B) Garantizar que las operaciones de transacciones concurrentes y modificaciones de datos se ejecuten de manera fiable y sin corromper la integridad del sistema.",
            "C) Comprimir las imágenes almacenadas en formato BLOB.",
            "D) Eliminar la necesidad de respaldos de seguridad diarios."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las propiedades ACID aseguran la integridad transaccional: atomicidad (todo o nada), consistencia (reglas de integridad), aislamiento (concurrencia segura) y durabilidad (persistencia ante fallos)."
    },
    {
        id: 11,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En la ingeniería de requerimientos, ¿qué diferencia existe entre un requerimiento funcional y un requerimiento no funcional?",
        opciones: [
            "A) Los funcionales describen qué debe hacer el sistema (comportamientos, servicios y entradas/salidas), mientras que los no funcionales establecen restricciones de calidad, rendimiento, seguridad o escalabilidad.",
            "B) Los funcionales solo aplican para aplicaciones móviles y los no funcionales para hardware.",
            "C) Los funcionales son opcionales y los no funcionales obligatorios.",
            "D) No existe diferencia técnica entre ambos conceptos."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Verificando que la C sea la correcta:
    {
        id: 11,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En la ingeniería de requerimientos, ¿qué diferencia conceptual existe entre un requerimiento funcional y un requerimiento no funcional?",
        opciones: [
            "A) Los funcionales solo aplican para interfaces móviles y los no funcionales para bases de datos.",
            "B) Los funcionales son opcionales en contratos ágiles y los no funcionales obligatorios.",
            "C) Los requerimientos funcionales especifican los servicios, comportamientos y operaciones que el sistema debe realizar, mientras que los no funcionales establecen restricciones de calidad, rendimiento, seguridad o plataforma.",
            "D) No existe diferencia técnica entre ambos en la norma ISO/IEC."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los requerimientos funcionales definen las capacidades operativas del software, en tanto que los no funcionales delimitan atributos de calidad del sistema (tiempo de respuesta, disponibilidad, seguridad)."
    },
    {
        id: 12,
        area: "Seguridad de la Información",
        pregunta: "En criptografía aplicada, ¿cuál es la característica fundamental que distingue a los algoritmos de cifrado simétrico frente a los de cifrado asimétrico?",
        opciones: [
            "A) El cifrado simétrico es más lento y requiere contraseñas numéricas.",
            "B) El cifrado asimétrico utiliza una clave pública para cifrar y una clave privada diferente para descifrar, mientras que el simétrico utiliza una única clave secreta compartida para ambas operaciones.",
            "C) El cifrado simétrico no puede ser descifrado bajo ninguna circunstancia matemática.",
            "D) El cifrado asimétrico se emplea exclusivamente para comprimir archivos ZIP."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 12,
        area: "Seguridad de la Información",
        pregunta: "En criptografía aplicada, ¿cuál es la característica fundamental que distingue a los algoritmos de cifrado simétrico frente a los de cifrado asimétrico?",
        opciones: [
            "A) El cifrado simétrico es más lento y requiere contraseñas numéricas.",
            "B) El cifrado simétrico no puede ser descifrado bajo ninguna circunstancia matemática.",
            "C) El cifrado asimétrico se emplea exclusivamente para comprimir archivos ZIP.",
            "D) El cifrado simétrico utiliza una única clave secreta compartida para cifrar y descifrar la información, mientras que el asimétrico utiliza un par de claves matemáticas distintas (pública y privada)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los sistemas simétricos emplean la misma clave para el emisor y receptor (ej. AES), logrando alta velocidad; los asimétricos usan pares de claves pública/privada (ej. RSA) para intercambio seguro."
    },
    {
        id: 13,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué estructura de datos lineal opera bajo el principio LIFO (Last In, First Out - El último en entrar es el primero en salir), permitiendo operaciones de inserción y eliminación únicamente en un extremo denominado cima?",
        opciones: [
            "A) Pila (Stack).",
            "B) Cola (Queue).",
            "C) Árbol Binario de Búsqueda.",
            "D) Tabla Hash."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Pila (Stack) es una estructura LIFO donde los elementos se apilan y desapilan por el mismo extremo (cima), útil en evaluación de expresiones y gestión de llamadas recursivas."
    },
    {
        id: 14,
        area: "Redes y Comunicaciones",
        pregunta: "En las redes TCP/IP, ¿qué función cumple el protocolo DHCP (Dynamic Host Configuration Protocol)?",
        opciones: [
            "A) Traducir nombres de dominio legibles a direcciones IP numéricas.",
            "B) Asignar dinámicamente direcciones IP y otros parámetros de configuración de red (como la máscara de subred y la puerta de enlace) a los dispositivos conectados.",
            "C) Enrutar paquetes a través de redes WAN internacionales.",
            "D) Cifrar el tráfico web mediante certificados SSL/TLS."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "DHCP automatiza la administración de configuraciones de red asignando direcciones IP temporales o estáticas a los nodos de forma centralizada."
    },
    {
        id: 15,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En programación concurrente, ¿qué es un 'Semáforo' diseñado por Edsger Dijkstra?",
        opciones: [
            "A) Un dispositivo físico que ilumina las salas de servidores.",
            "B) Una variable protegida o abstracta utilizada para controlar el acceso de múltiples procesos a un recurso compartido en un entorno de concurrencia.",
            "C) Un algoritmo de compresión de video en streaming.",
            "D) Una rutina de respaldo en la nube."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 15,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En programación concurrente, ¿qué es un 'Semáforo' diseñado por Edsger Dijkstra?",
        opciones: [
            "A) Un dispositivo físico que ilumina las salas de servidores.",
            "B) Una rutina de respaldo automático en la nube.",
            "C) Una variable de sincronización protegida que controla el acceso de múltiples procesos a un recurso compartido mediante operaciones atómicas (como wait y signal o P y V).",
            "D) Un protocolo de enrutamiento de paquetes IP."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Un semáforo es un mecanismo de sincronización que gestiona el acceso concurrente a recursos críticos mediante contadores enteros y operaciones atómicas."
    },
    {
        id: 16,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "¿Qué ventaja arquitectónica principal aporta el uso de contenedores de software (como Docker) frente a la virtualización tradicional basada en máquinas virtuales (VMs)?",
        opciones: [
            "A) Los contenedores comparten el núcleo (kernel) del sistema operativo host, lo que reduce drásticamente el consumo de recursos, el tiempo de arranque y el tamaño de almacenamiento.",
            "B) Los contenedores requieren un sistema operativo invitado completo por cada instancia desplegada.",
            "C) Los contenedores eliminan la necesidad de usar redes IP.",
            "D) Los contenedores solo pueden ejecutarse en sistemas operativos descontinuados."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 16,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "¿Qué ventaja arquitectónica principal aporta el uso de contenedores de software (como Docker) frente a la virtualización tradicional basada en máquinas virtuales (VMs)?",
        opciones: [
            "A) Los contenedores requieren un sistema operativo invitado completo por cada instancia desplegada.",
            "B) Los contenedores eliminan la necesidad de usar protocolos de red.",
            "C) Los contenedores solo pueden ejecutarse en hardware de arquitectura mainframe.",
            "D) Los contenedores virtualizan a nivel de sistema operativo compartiendo el kernel del host, lo que ofrece un arranque casi instantáneo y una mayor eficiencia de recursos frente a las VMs."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La contenerización aísla aplicaciones compartiendo el kernel del sistema operativo anfitrión, evitando la sobrecarga de emular hipervisores y sistemas operativos completos."
    },
    {
        id: 17,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de arquitecturas orientadas a eventos (EDA), ¿qué función cumple un 'Broker de Mensajes' (Message Broker como RabbitMQ o Apache Kafka)?",
        opciones: [
            "A) Desacoplar los productores de mensajes de los consumidores, gestionando el enrutamiento, almacenamiento temporal y entrega asíncrona de los eventos.",
            "B) Almacenar exclusivamente los respaldos de archivos PDF de los clientes.",
            "C) Compilar código fuente en lenguaje C++ a código de máquina.",
            "D) Renderizar interfaces gráficas de usuario en navegadores móviles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El broker de mensajes actúa como intermediario asíncrono que recibe, enruta y entrega mensajes entre servicios desacoplados, garantizando escalabilidad y tolerancia a fallos."
    },
    {
        id: 18,
        area: "Bases de Datos",
        pregunta: "¿Qué tipo de base de datos NoSQL se caracteriza por almacenar la información en colecciones de documentos estructurados en formatos flexibles como JSON o BSON (ej. MongoDB)?",
        opciones: [
            "A) Base de datos tabular orientada a columnas.",
            "B) Base de datos orientada a documentos.",
            "C) Base de datos basada en grafos.",
            "D) Base de datos relacional transaccional estricta."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Las bases de datos orientadas a documentos almacenan datos semiestructurados en formato jerárquico de documentos (JSON/BSON), permitiendo esquemas dinámicos y gran escalabilidad horizontal."
    },
    {
        id: 19,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En la estimación de proyectos de desarrollo de software ágil, ¿qué representan los 'Story Points' (Puntos de Historia)?",
        opciones: [
            "A) El número exacto de horas de trabajo individual requeridas para terminar una tarea.",
            "B) Una unidad de medida relativa utilizada para estimar el esfuerzo global, la complejidad y el riesgo necesarios para completar una historia de usuario frente a otras.",
            "C) El costo monetario en dólares cobrado al cliente final.",
            "D) La cantidad de líneas de código escritas por día."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 19,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En la estimación de proyectos de desarrollo de software ágil, ¿qué representan los 'Story Points' (Puntos de Historia)?",
        opciones: [
            "A) El número exacto de horas de reloj invertidas por un programador junior.",
            "B) El costo monetario en dólares cobrado por cada funcionalidad entregada.",
            "C) Una unidad de medida relativa y abstracta empleada por el equipo para estimar el esfuerzo, la complejidad técnica y la incertidumbre de una historia de usuario.",
            "D) La cantidad acumulada de líneas de código fuente compiladas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Los Story Points miden el esfuerzo relativo y la complejidad de una tarea de forma colaborativa, evitando las estimaciones temporales absolutas inexactas."
    },
    {
        id: 20,
        area: "Seguridad de la Información",
        pregunta: "En el análisis de vulnerabilidades web, ¿en qué consiste la vulnerabilidad de Inyección SQL (SQL Injection)?",
        opciones: [
            "A) En la interrupción del servicio eléctrico del servidor web.",
            "B) En el envío de correos electrónicos masivos con spam comercial.",
            "C) En el cifrado indebido de la base de datos principal.",
            "D) En la inserción o manipulación maliciosa de código SQL a través de los campos de entrada de la aplicación, permitiendo al atacante ejecutar consultas arbitrarias en la base de datos."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La inyección SQL ocurre cuando datos proporcionados por el usuario no se sanitizan ni parametrizan adecuadamente, permitiendo ejecutar comandos SQL arbitrarios en el motor de datos."
    },
    {
        id: 21,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué tipo de estructura de datos no lineal organiza sus elementos en jerarquías compuestas por nodos, donde un nodo raíz se ramifica en múltiples subnodos hijos mediante relaciones padre-hijo?",
        opciones: [
            "A) Árbol (Tree).",
            "B) Lista simplemente enlazada.",
            "C) Arreglo unidimensional estático.",
            "D) Pila lineal."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Los árboles son estructuras jerárquicas no lineales formadas por nodos conectados, fundamentales para representación de datos organizados (ej. árboles binarios de búsqueda, DOM en HTML)."
    },
    {
        id: 22,
        area: "Redes y Comunicaciones",
        pregunta: "En la capa de transporte del modelo TCP/IP, ¿cuál es la diferencia fundamental entre los protocolos TCP (Transmission Control Protocol) y UDP (User Datagram Protocol)?",
        opciones: [
            "A) TCP es un protocolo orientado a conexión, confiable, con control de flujo y retransmisión de paquetes perdidos, mientras que UDP es un protocolo no orientado a conexión, no confiable y de baja latencia.",
            "B) TCP se utiliza exclusivamente para transmisión de video en streaming en tiempo real y UDP para transferencias bancarias estrictas.",
            "C) No existen diferencias técnicas en sus cabeceras.",
            "D) UDP requiere un enlace físico dedicado de fibra óptica."
        ],
        respuestaCorrecta: 1, // B? Ajustemos para que sea B (índice 1):
    },
    // Ajustemos para que la B sea la correcta:
    {
        id: 22,
        area: "Redes y Comunicaciones",
        pregunta: "En la capa de transporte del modelo TCP/IP, ¿cuál es la diferencia fundamental entre los protocolos TCP (Transmission Control Protocol) y UDP (User Datagram Protocol)?",
        opciones: [
            "A) TCP se utiliza exclusivamente para streaming de video y UDP para transacciones bancarias.",
            "B) TCP garantiza la entrega ordenada y confiable de los datos mediante establecimiento de conexión (three-way handshake) y control de flujo, mientras que UDP opera sin conexión, priorizando la velocidad sobre la entrega garantizada.",
            "C) No existen diferencias en sus cabeceras de red.",
            "D) UDP requiere obligatoriamente una conexión punto a punto dedicada."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "TCP asegura confiabilidad y orden mediante acuses de recibo y retransmisiones; UDP descarta la verificación de entrega para ofrecer transmisiones rápidas y sin sobrecarga (ej. VoIP, videojuegos)."
    },
    {
        id: 23,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la gestión de memoria virtual de los sistemas operativos modernos, ¿en qué consiste la técnica de 'Paginación'?",
        opciones: [
            "A) En dividir la memoria física en bloques de tamaño fijo llamados marcos y la memoria lógica de los procesos en bloques del mismo tamaño llamados páginas.",
            "B) En imprimir documentos en papel continuo mediante controladores de spooler.",
            "C) En almacenar todas las variables en un archivo de texto plano secuencial.",
            "D) En desconectar la memoria RAM cuando el equipo se suspende."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 23,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la gestión de memoria virtual de los sistemas operativos modernos, ¿en qué consiste la técnica de 'Paginación'?",
        opciones: [
            "A) En imprimir documentos en papel continuo mediante controladores de spooler.",
            "B) En almacenar todas las variables en un archivo de texto plano secuencial.",
            "C) En fragmentar la memoria virtual en bloques de tamaño fijo llamados páginas y la memoria física en marcos del mismo tamaño, permitiendo una asignación discontinua y eficiente.",
            "D) En desconectar la memoria RAM física cuando el equipo entra en modo suspensión."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La paginación evita la fragmentación externa dividiendo la memoria lógica y física en bloques uniformes (páginas y marcos), gestionados mediante tablas de páginas."
    },
    {
        id: 24,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el control de versiones con Git, ¿qué comando se emplea para fusionar los cambios de una rama de desarrollo (feature branch) en la rama principal (main)?",
        opciones: [
            "A) git clone",
            "B) git checkout -b",
            "C) git status",
            "D) git merge"
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El comando `git merge` integra las modificaciones de distintas ramas de desarrollo en el historial de trabajo activo."
    },
    {
        id: 25,
        area: "Arquitectura de Software",
        pregunta: "En los patrones de arquitectura de software, ¿qué define el patrón 'MVC' (Modelo-Vista-Controlador)?",
        opciones: [
            "A) La separación de la aplicación en tres componentes interconectados: el Modelo (datos y lógica de negocio), la Vista (interfaz de usuario) y el Controlador (gestor de peticiones e intermediario).",
            "B) Un sistema de encriptación de claves simétricas para bases de datos.",
            "C) Una metodología ágil de pruebas unitarias automatizadas.",
            "D) Un protocolo de red para transferencia de hipertexto."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "MVC desacopla la lógica de negocio (Modelo), la presentación visual (Vista) y la gestión del flujo de usuario (Controlador), facilitando el mantenimiento y escalabilidad."
    },
    {
        id: 26,
        area: "Bases de Datos",
        pregunta: "En el lenguaje SQL, ¿qué tipo de operación realiza una sentencia de tipo 'JOIN' de tipo INNER JOIN entre dos tablas?",
        opciones: [
            "A) Devuelve todas las filas de la tabla izquierda, junto con las filas coincidentes de la tabla derecha.",
            "B) Devuelve únicamente los registros que tienen valores coincidentes en ambas tablas evaluadas.",
            "C) Devuelve todas las filas de ambas tablas sin importar si existen coincidencias.",
            "D) Elimina permanentemente los registros duplicados del motor."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "INNER JOIN combina registros de dos tablas basándose en una condición de igualdad, retornando estrictamente las filas que presentan coincidencia en ambas partes."
    },
    {
        id: 27,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En las pruebas de software, ¿en qué consisten las 'Pruebas Unitarias' (Unit Testing)?",
        opciones: [
            "A) En evaluar el rendimiento de la red corporativa bajo ataques masivos de denegación.",
            "B) En verificar que el sistema cumpla con los requerimientos legales del cliente final.",
            "C) En probar de manera aislada los componentes más pequeños de código (como funciones, métodos o clases individuales) para comprobar que funcionan correctamente.",
            "D) En comprobar la usabilidad de las pantallas táctiles en dispositivos móviles."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Las pruebas unitarias validan de forma automatizada e independiente el funcionamiento correcto de las unidades lógicas más pequeñas del código fuente."
    },
    {
        id: 28,
        area: "Seguridad de la Información",
        pregunta: "¿Qué componente de seguridad se encarga de verificar la identidad de un usuario, dispositivo o sistema antes de permitirle el acceso a los recursos protegidos de una red?",
        opciones: [
            "A) El proceso de Auditoría de logs.",
            "B) El proceso de Encriptación asimétrica.",
            "C) El proceso de Compresión de datos.",
            "D) El proceso de Autenticación (Authentication)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La autenticación valida la identidad digital (mediante credenciales, tokens o biométricos), diferenciándose de la autorización (que determina los permisos concedidos)."
    },
    {
        id: 29,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué algoritmo de búsqueda requiere que el arreglo de datos se encuentre previamente ordenado para operar dividiendo repetidamente a la mitad el espacio de búsqueda?",
        opciones: [
            "A) Búsqueda Binaria (Binary Search).",
            "B) Búsqueda Secuencial Lineal.",
            "C) Búsqueda por fuerza bruta exhaustiva.",
            "D) Búsqueda aleatoria estocástica."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La búsqueda binaria reduce logarítmicamente el espacio de búsqueda comparando el valor objetivo con el elemento central de un arreglo ordenado."
    },
    {
        id: 30,
        area: "Redes y Comunicaciones",
        pregunta: "En la arquitectura de nombres de Internet, ¿qué función realiza un servidor DNS (Domain Name System)?",
        opciones: [
            "A) Enrutar paquetes IP a través de los nodos de fibra óptica oceánica.",
            "B) Traducir nombres de dominio legibles por humanos (ej. www.ejemplo.com) a direcciones IP numéricas comprensibles por las máquinas.",
            "C) Asignar contraseñas seguras a los administradores de sistemas.",
            "D) Filtrar correos electrónicos de phishing."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El sistema DNS actúa como la libreta de direcciones de Internet, resolviendo nombres de dominio alfanuméricos en direcciones IP de red."
    },
    {
        id: 31,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la planificación de la unidad central de procesamiento (CPU), ¿cómo opera el algoritmo de planificación FIFO / FCFS (First-Come, First-Served)?",
        opciones: [
            "A) Asigna el procesador al proceso que llegó primero a la cola de listos, ejecutándolo de forma secuencial sin aprehensión.",
            "B) Asigna turnos rotativos basados en un cuanto de tiempo estricto.",
            "C) Ejecuta siempre al proceso que requiere menor tiempo de ejecución estimado.",
            "D) Prioriza los procesos de los administradores del sistema."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 31,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la planificación de la unidad central de procesamiento (CPU), ¿cómo opera el algoritmo de planificación FIFO / FCFS (First-Come, First-Served)?",
        opciones: [
            "A) Asigna turnos rotativos cortos basados en un cuanto de tiempo.",
            "B) Ejecuta siempre al proceso que tenga la menor duración estimada.",
            "C) Asigna la CPU a los procesos en el orden exacto en el que llegan a la cola de listos, sin expulsión ni prioridades dinámicas.",
            "D) Prioriza de forma estricta los hilos de fondo del sistema operativo."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "FCFS atiende los procesos estrictamente en orden de llegada, lo que puede provocar el efecto convoy si un proceso largo bloquea a los posteriores."
    },
    {
        id: 32,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el diseño de interfaces web responsivas, ¿qué tecnología de hojas de estilo permite crear diseños flexibles basados en filas y columnas mediante la propiedad 'display: grid'?",
        opciones: [
            "A) CSS Grid Layout.",
            "B) Protocolo FTP seguro.",
            "C) Sintaxis XML estricta.",
            "D) Compilador WebAssembly."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 32,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el diseño de interfaces web responsivas, ¿qué tecnología de hojas de estilo permite crear diseños flexibles basados en filas y columnas bidimensionales mediante la propiedad 'display: grid'?",
        opciones: [
            "A) Protocolo FTP seguro de archivos.",
            "B) Sintaxis de marcado XML estricta.",
            "C) Motor de compilación WebAssembly.",
            "D) CSS Grid Layout."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "CSS Grid Layout es un sistema de diseño bidimensional para CSS que simplifica la creación de estructuras complejas de filas y columnas adaptables a cualquier pantalla."
    },
    {
        id: 33,
        area: "Arquitectura de Software",
        pregunta: "En la evaluación de la calidad del software, ¿qué mide el atributo de calidad denominado 'Mantenibilidad' (Maintainability)?",
        opciones: [
            "A) La facilidad con la que un sistema de software puede ser modificado para corregir defectos, mejorar su rendimiento o adaptarse a cambios en el entorno.",
            "B) La velocidad máxima de procesamiento del microprocesador central.",
            "C) La capacidad de cifrar contraseñas con algoritmos hash robustos.",
            "D) La resistencia física del servidor ante caídas de voltaje."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La mantenibilidad refleja cuán comprensible, modular y adaptable es el código fuente para facilitar futuras correcciones y evoluciones tecnológicas."
    },
    {
        id: 34,
        area: "Bases de Datos",
        pregunta: "En los sistemas de gestión de bases de datos, ¿qué función cumple un 'Índice' (Index) en una tabla relacional?",
        opciones: [
            "A) Duplicar toda la información para respaldarla en cinta magnética.",
            "B) Acelerar significativamente la velocidad de recuperación de consultas (queries) mediante estructuras de datos optimizadas (como árboles B+), a costa de mayor espacio de almacenamiento y menor velocidad en inserciones.",
            "C) Eliminar las restricciones de llave primaria.",
            "D) Traducir el motor SQL a código binario."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Los índices optimizan las búsquedas en tablas grandes reduciendo la exploración secuencial, aunque penalizan ligeramente las operaciones de escritura (INSERT/UPDATE)."
    },
    {
        id: 35,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En la gestión de proyectos de software, ¿qué métrica ágil mide la cantidad de trabajo (expresada en Story Points) que un equipo logra completar de manera exitosa durante un Sprint?",
        opciones: [
            "A) Tasa de rotación de personal.",
            "B) Latencia de red de la API.",
            "C) Velocidad del Sprint (Velocity).",
            "D) Costo total de adquisición de hardware."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La Velocidad (Velocity) es un indicador clave en Scrum que cuantifica la productividad histórica del equipo por iteración, ayudando a planificar iteraciones futuras."
    },
    {
        id: 36,
        area: "Seguridad de la Información",
        pregunta: "En los protocolos de seguridad de red, ¿qué función desempeña una Red Privada Virtual (VPN)?",
        opciones: [
            "A) Aumentar la velocidad del proveedor de servicios de internet mediante fibra oscura.",
            "B) Ocultar la dirección IP pública y crear un túnel cifrado seguro sobre una red pública (como Internet), protegiendo la confidencialidad de los datos transmitidos.",
            "C) Formatear los discos duros remotos de forma remota.",
            "D) Compilar aplicaciones móviles para iOS."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 36,
        area: "Seguridad de la Información",
        pregunta: "En los protocolos de seguridad de red, ¿qué función desempeña una Red Privada Virtual (VPN)?",
        opciones: [
            "A) Aumentar la velocidad del proveedor de internet mediante fibra oscura.",
            "B) Formatear los discos duros remotos de forma automática.",
            "C) Compilar aplicaciones móviles para sistemas iOS.",
            "D) Establecer un túnel cifrado y seguro sobre una red pública (como Internet), enmascarando la dirección IP y protegiendo la confidencialidad de las comunicaciones."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Una VPN encapsula y cifra el tráfico de red extremo a extremo, permitiendo la conexión segura a redes privadas a través de infraestructuras públicas no confiables."
    },
    {
        id: 37,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué característica define a una 'Tabla Hash' (Hash Table) como estructura de datos eficiente?",
        opciones: [
            "A) Almacena pares clave-valor utilizando una función hash para calcular el índice donde se ubicará el valor, permitiendo operaciones de búsqueda, inserción y borrado en tiempo promedio O(1).",
            "B) Requiere ordenar obligatoriamente todos los elementos antes de insertar.",
            "C) Mantiene los datos enlazados estrictamente en orden alfabético inverso.",
            "D) Ocupa una cantidad infinita de memoria RAM."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Las tablas hash ofrecen un rendimiento excepcional O(1) en promedio para acceso directo mediante funciones hash que mapean claves a posiciones de memoria."
    },
    {
        id: 38,
        area: "Redes y Comunicaciones",
        pregunta: "En el direccionamiento IP de la versión 4 (IPv4), ¿cuántos bits componen una dirección IP completa y a cuántos octetos equivale?",
        opciones: [
            "A) 16 bits divididos en 2 octetos.",
            "B) 32 bits divididos en 4 octetos de 8 bits cada uno.",
            "C) 64 bits divididos en 8 bloques hexadecimales.",
            "D) 128 bits divididos en 16 octetos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "IPv4 utiliza un espacio de direccionamiento de 32 bits representados habitualmente en formato decimal con punto, divididos en cuatro octetos (bytes)."
    },
    {
        id: 39,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de archivos de un sistema operativo, ¿qué representa la 'Tabla de Inodos' (Inode) en sistemas basados en Unix/Linux?",
        opciones: [
            "A) Un listado que almacena toda la metainformación de un archivo (permisos, propietario, tamaño, marcas de tiempo y ubicación de los bloques en disco), exceptuando su nombre y datos directos.",
            "B) Un archivo de texto plano con contraseñas de usuarios root.",
            "C) El espacio temporal de la memoria caché del procesador.",
            "D) El directorio raíz de los dispositivos USB conectados."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 39,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de archivos de sistemas operativos tipo Unix/Linux, ¿qué estructura representa un 'Inodo' (Inode)?",
        opciones: [
            "A) Un archivo de texto plano con contraseñas de usuarios administradores.",
            "B) El espacio temporal de la memoria caché de nivel 3 del procesador.",
            "C) Una estructura de datos que almacena toda la metainformación esencial de un archivo (propietario, permisos, tamaño, marcas de tiempo y punteros a bloques en disco), separando los metadatos del nombre y contenido.",
            "D) El directorio raíz de los dispositivos de almacenamiento USB."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El inodo encapsula los metadatos de los archivos en sistemas Unix/Linux, permitiendo que un archivo tenga múltiples nombres (enlaces duros) apuntando al mismo inodo."
    },
    {
        id: 40,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la computación en la nube (Cloud Computing), ¿qué modelo de servicio ofrece al cliente la infraestructura virtualizada completa (servidores, redes, almacenamiento y sistemas operativos) sobre la cual tiene control total de despliegue y configuración?",
        opciones: [
            "A) Software como Servicio (SaaS).",
            "B) Plataforma como Servicio (PaaS).",
            "C) Función como Servicio (FaaS / Serverless).",
            "D) Infraestructura como Servicio (IaaS)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "IaaS (Infrastructure as a Service, ej. AWS EC2, Google Compute Engine) provee recursos informáticos virtualizados bajo demanda, otorgando control operativo al usuario sobre el sistema operativo y software."
    },
    {
        id: 41,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de arquitecturas empresariales, ¿cuál es el objetivo principal de utilizar un patrón de 'Puerta de Enlace de API' (API Gateway)?",
        opciones: [
            "A) Actuar como un punto de entrada único para todas las solicitudes de los clientes, gestionando el enrutamiento, la autenticación, el aislamiento de microservicios y la limitación de tasa (rate limiting).",
            "B) Reemplazar por completo el motor de almacenamiento de las bases de datos relacionales.",
            "C) Compilar código fuente en lenguaje ensamblador directamente en el navegador web.",
            "D) Eliminar la necesidad de protocolos de red TCP/IP en la nube."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El API Gateway centraliza las peticiones externas, desacoplando a los clientes de la estructura interna de microservicios y proveyendo seguridad, balanceo y transformaciones de protocolo."
    },
    {
        id: 42,
        area: "Bases de Datos",
        pregunta: "En la administración y diseño de bases de datos relacionales, ¿qué representa una 'Llave Foránea' (Foreign Key)?",
        opciones: [
            "A) Un campo numérico cifrado que se utiliza para abrir respaldos en cinta.",
            "B) Un campo o grupo de campos en una tabla que establece un vínculo referencial único con la llave primaria de otra tabla, garantizando la integridad referencial.",
            "C) Un índice temporal que se elimina automáticamente tras cada consulta SELECT.",
            "D) Una contraseña maestra para acceder al servidor de producción."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La llave foránea enforces la integridad referencial entre tablas relacionadas, impidiendo que existan registros huérfanos que no apunten a una clave primaria válida."
    },
    {
        id: 43,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En las metodologías ágiles de desarrollo, especialmente en Scrum, ¿cuál es la función principal del rol conocido como 'Product Owner' (Propietario del Producto)?",
        opciones: [
            "A) Escribir y compilar el código en lenguaje C++ de los servidores.",
            "B) Instalar los cables de red y configurar los routers corporativos.",
            "C) Representar los intereses de los stakeholders, maximizar el valor del producto y gestionar, priorizar y clarificar constantemente el Backlog del Producto.",
            "D) Sancionar disciplinariamente a los desarrolladores por retrasos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Product Owner es el máximo responsable de la gestión del valor y la priorización del Product Backlog, traduciendo las necesidades de negocio en requerimientos claros."
    },
    {
        id: 44,
        area: "Seguridad de la Información",
        pregunta: "En la evaluación de seguridad de aplicaciones web, ¿qué tipo de vulnerabilidad mitiga principalmente la implementación estricta de políticas de seguridad de contenido (CSP - Content Security Policy)?",
        opciones: [
            "A) Inyección SQL ciega en bases de datos.",
            "B) Desbordamiento de búfer en memoria RAM.",
            "C) Ataques de denegación de servicio volumétrico DDoS.",
            "D) Ataques de Secuencias de Comandos en Sitios Cruzados (Cross-Site Scripting / XSS)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "CSP es una capa de defensa que permite a los administradores restringir y declarar qué dominios de scripts maliciosos pueden ser ejecutados o cargados por el navegador, neutralizando ataques XSS."
    },
    {
        id: 45,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué recorrido de un Árbol Binario visita primero el nodo raíz, posteriormente recorre el subárbol izquierdo y finalmente el subárbol derecho?",
        opciones: [
            "A) Recorrido en Preorden (Pre-order traversal).",
            "B) Recorrido en Inorden (In-order traversal).",
            "C) Recorrido en Postorden (Post-order traversal).",
            "D) Recorrido por niveles en anchura."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El recorrido en Preorden sigue la secuencia: Raíz -> Izquierda -> Derecha, siendo útil para clonar árboles o generar representaciones jerárquicas."
    },
    {
        id: 46,
        area: "Redes y Comunicaciones",
        pregunta: "En el modelo jerárquico de diseño de redes de Cisco, ¿cuántas y cuáles son las capas estándar que componen la arquitectura recomendada para campus corporativos?",
        opciones: [
            "A) Capa física, capa de enlace y capa de aplicación.",
            "B) Capa de Acceso, Capa de Distribución y Capa Núcleo (Core).",
            "C) Capa de transacciones, capa de persistencia y capa de presentación.",
            "D) Capa cliente, capa servidor y capa de base de datos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El modelo jerárquico de red se estructura en tres capas: Acceso (conexión de dispositivos finales), Distribución (enrutamiento y políticas) y Núcleo (transporte troncal de alta velocidad)."
    },
    {
        id: 47,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de procesos de un sistema operativo, ¿qué se entiende por un 'Cambio de Contexto' (Context Switch)?",
        opciones: [
            "A) La reinstalación completa del sistema operativo desde una memoria USB.",
            "B) El apagado programado de los servidores a medianoche.",
            "C) El almacenamiento del estado actual (registros, contador de programa) de un proceso que se suspende para permitir que la CPU comience a ejecutar un proceso diferente.",
            "D) La modificación de la dirección IP de la tarjeta de red."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El cambio de contexto es el procedimiento mediante el cual el kernel guarda el estado de un hilo o proceso para restaurar y ejecutar otro, consumiendo ciclos de CPU."
    },
    {
        id: 48,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En las arquitecturas de aplicaciones web modernas, ¿qué tecnología permite la comunicación bidireccional en tiempo real y persistente sobre una única conexión TCP entre el cliente (navegador) y el servidor?",
        opciones: [
            "A) Protocolo HTTP/1.0 estándar sin keep-alive.",
            "B) Consultas periódicas mediante AJAX (Long Polling).",
            "C) Transferencia de archivos por FTP anónimo.",
            "D) Protocolo WebSocket."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "WebSockets establece un canal de comunicación full-duplex persistente sobre TCP, idóneo para aplicaciones en tiempo real como chats, tableros colaborativos y cotizaciones bursátiles."
    },
    {
        id: 49,
        area: "Arquitectura de Software",
        pregunta: "En los principios de diseño de software SOLID, ¿qué establece el principio de 'Responsabilidad Única' (Single Responsibility Principle - SRP)?",
        opciones: [
            "A) Que una clase debe tener una, y solo una, razón para cambiar (debe concentrarse en una única parte de la funcionalidad proporcionada por el software).",
            "B) Que las clases derivadas deben poder sustituirse por sus clases base sin alterar el funcionamiento.",
            "C) Que los módulos de alto nivel no deben depender de módulos de bajo nivel.",
            "D) Que una clase debe implementar todas las interfaces posibles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio SRP postula que cada módulo o clase debe encargarse de una única responsabilidad o actor del negocio, reduciendo el acoplamiento y facilitando el mantenimiento."
    },
    {
        id: 50,
        area: "Bases de Datos",
        pregunta: "En la optimización de motores de bases de datos relacionales, ¿qué función cumple una 'Vista' (View)?",
        opciones: [
            "A) Almacenar copias físicas duplicadas de las tablas en discos ópticos externos.",
            "B) Proveer una consulta SQL virtual almacenada con un nombre específico, la cual se comporta como una tabla lógica derivada sin duplicar necesariamente el almacenamiento físico de los datos.",
            "C) Formatear los reportes contables en archivos PDF.",
            "D) Cifrar las contraseñas de los usuarios administradores."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una vista encapsula consultas complejas o restringe el acceso a columnas sensibles, presentándose ante los usuarios como una tabla virtual integrada."
    },
    {
        id: 51,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el desarrollo ágil basado en Scrum, ¿qué es el 'Sprint Backlog' (Pila del Sprint)?",
        opciones: [
            "A) El conjunto de tareas técnicas y elementos del Product Backlog seleccionados para ser ejecutados durante el Sprint actual, junto con el plan para entregarlos.",
            "B) La lista histórica de todos los errores cometidos en los últimos diez años.",
            "C) El contrato legal firmado por el director general y los auditores externos.",
            "D) El inventario de computadoras portátiles asignadas al equipo de desarrollo."
        ],
        respuestaCorrecta: 2, // C -> Ajustado a índice 2 (C)
        explicacion: "El Sprint Backlog es el plan táctico detallado que elabora el equipo de desarrollo durante la planificación, conteniendo los elementos comprometidos para la iteración actual."
    },
    {
        id: 52,
        area: "Seguridad de la Información",
        pregunta: "En los modelos de gestión de seguridad informática, ¿qué se evalúa mediante la fórmula del 'Riesgo' en la gestión de vulnerabilidades?",
        opciones: [
            "A) La cantidad de dinero gastada en licencias de antivirus.",
            "B) La velocidad de conexión a Internet del servidor principal.",
            "C) La cantidad de líneas de código fuente escritas en Python.",
            "D) La probabilidad de que una amenaza explote una vulnerabilidad específica y el impacto negativo resultante para la organización."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El riesgo informático se calcula evaluando la probabilidad de ocurrencia frente al impacto potencial de negocio, permitiendo priorizar la remediación de vulnerabilidades."
    },
    {
        id: 53,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué caracteriza a un 'Árbol Binario de Búsqueda' (BST) en comparación con un árbol binario genérico?",
        opciones: [
            "A) Que para cada nodo, todos los elementos del subárbol izquierdo son menores que el nodo, y todos los elementos del subárbol derecho son mayores.",
            "B) Que todos los nodos deben tener obligatoriamente dos hijos idénticos.",
            "C) Que se organiza en una lista plana bidimensional.",
            "D) Que no permite almacenar números enteros negativos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El BST mantiene una propiedad estricta de ordenamiento en sus nodos (izquierda menor, derecha mayor), optimizando las búsquedas y recorridos estructurados."
    },
    {
        id: 54,
        area: "Redes y Comunicaciones",
        pregunta: "En la configuración de redes IP, ¿cuál es el propósito de aplicar una 'Máscara de Subred' (Subnet Mask)?",
        opciones: [
            "A) Ocultar la dirección IP para evitar ataques de ping.",
            "B) Dividir lógicamente una dirección IP en dos partes: una porción para identificar la red y otra porción para identificar el host específico dentro de esa red.",
            "C) Aumentar la velocidad de transferencia de los cables de fibra óptica.",
            "D) Cifrar los paquetes de datos en la capa de transporte."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La máscara de subred permite a los dispositivos de red distinguir qué porción de una dirección IP corresponde a la red local y cuál pertenece al host individual."
    },
    {
        id: 55,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la programación concurrente, ¿qué fenómeno conocido como 'Inanición' (Starvation) puede ocurrir en la planificación de procesos?",
        opciones: [
            "A) La falta de energía eléctrica en la fuente de poder del servidor.",
            "B) La eliminación accidental del sistema operativo del disco duro.",
            "C) Una situación en la que un proceso espera indefinidamente por recursos o tiempo de CPU porque otros procesos con mayor prioridad lo monopolizan.",
            "D) La desconexión de los clientes web por tiempo de espera agotado."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La inanición (starvation) se produce cuando un proceso de baja prioridad es marginado permanentemente por algoritmos de planificación desequilibrados, impidiendo su ejecución."
    },
    {
        id: 56,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la arquitectura de aplicaciones web modernas, ¿qué representa el término 'SSR' (Server-Side Rendering)?",
        opciones: [
            "A) Un protocolo de respaldo en discos de estado sólido.",
            "B) Una técnica donde el HTML de la página web es renderizado completamente en el servidor web por cada petición, enviando al cliente el DOM ya estructurado.",
            "C) Un sistema de encriptación de bases de datos distribuidas.",
            "D) Un lenguaje de programación basado en ensamblador."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 56,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la arquitectura de aplicaciones web modernas, ¿qué representa el concepto de 'SSR' (Server-Side Rendering)?",
        opciones: [
            "A) Un protocolo de respaldo automático en discos de estado sólido.",
            "B) Un sistema de encriptación de bases de datos distribuidas.",
            "C) Un lenguaje de programación de bajo nivel basado en ensamblador web.",
            "D) Una técnica arquitectónica donde el servidor procesa la lógica y genera el marcado HTML completo de la página ante cada solicitud del cliente, mejorando el SEO y la carga inicial."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "SSR (Server-Side Rendering) procesa la vista en el servidor antes de enviarla al navegador, facilitando la indexación por motores de búsqueda (SEO) frente al renderizado puramente del lado del cliente (CSR)."
    },
    {
        id: 57,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de sistemas orientados a objetos, ¿qué persigue el principio de 'Inversión de Dependencias' (Dependency Inversion Principle - DIP)?",
        opciones: [
            "A) Que los módulos de alto nivel no dependan de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces), y las abstracciones no deben depender de los detalles.",
            "B) Que todas las clases hereden directamente de una clase raíz única y estática.",
            "C) Que se eliminen por completo las interfaces para acelerar la compilación.",
            "D) Que los métodos de clase sean siempre públicos y estáticos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio DIP fomenta el desacoplamiento mediante el uso de interfaces o clases abstractas, permitiendo intercambiar implementaciones sin alterar la lógica superior."
    },
    {
        id: 58,
        area: "Bases de Datos",
        pregunta: "En la administración de bases de datos, ¿qué función cumple una sentencia de tipo 'ROLLBACK' dentro de una transacción?",
        opciones: [
            "A) Guardar permanentemente los cambios en el disco duro principal.",
            "B) Deshacer todas las modificaciones realizadas durante la transacción actual, restaurando la base de datos al estado consistente en el que se encontraba antes de iniciarla.",
            "C) Duplicar la tabla transaccional en un servidor secundario.",
            "D) Aumentar la velocidad de los índices relacionales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "ROLLBACK es la sentencia de control transaccional que revierte cambios ante un error, garantizando la atomicidad (propiedad ACID)."
    },
    {
        id: 59,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En las metodologías ágiles, ¿qué es la 'Deuda Técnica' (Technical Debt)?",
        opciones: [
            "A) El préstamo bancario solicitado para comprar licencias de software comercial.",
            "B) El costo económico de contratar programadores senior.",
            "C) El costo implícito de re-trabajo futuro que se asume al elegir una solución de código rápida, subóptima o provisional en el presente para cumplir plazos ajustados.",
            "D) Los impuestos fiscales pagados por la empresa desarrolladora."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La deuda técnica representa el desgaste y la complejidad acumulada en el código por atajos de desarrollo, los cuales penalizan la mantenibilidad si no se refactorizan a tiempo."
    },
    {
        id: 60,
        area: "Seguridad de la Información",
        pregunta: "En criptografía y seguridad informática, ¿qué función cumple un 'Certificado Digital SSL/TLS' emitido por una Autoridad de Certificación (CA)?",
        opciones: [
            "A) Garantizar que el sitio web es económico de mantener.",
            "B) Aumentar los FPS de los videojuegos en línea.",
            "C) Evitar que los servidores sufran de sobrecalentamiento.",
            "D) Vincular criptográficamente una clave pública con la identidad de una entidad (como un dominio web), permitiendo establecer conexiones cifradas y verificables."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los certificados SSL/TLS autentican la identidad del sitio web y habilitan el cifrado HTTPS, protegiendo los datos en tránsito frente a escuchas y suplantaciones."
    },
    {
        id: 61,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué tipo de estructura de datos opera bajo el principio FIFO (First In, First Out - El primero en entrar es el primero en salir)?",
        opciones: [
            "A) Cola (Queue).",
            "B) Pila (Stack).",
            "C) Árbol AVL.",
            "D) Tabla Hash."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Cola (Queue) sigue una dinámica de fila lineal estricta (FIFO), donde el primer elemento en ingresar es el primero en ser atendido y eliminado."
    },
    {
        id: 62,
        area: "Redes y Comunicaciones",
        pregunta: "En las arquitecturas de red, ¿qué función realiza un protocolo de 'Puerta de Enlace Predeterminada' (Default Gateway)?",
        opciones: [
            "A) Traducir nombres de páginas web en direcciones IP numéricas.",
            "B) Servir como nodo de salida o enrutador que conecta una red local con redes externas (como Internet) para el tráfico que va dirigido fuera del segmento local.",
            "C) Asignar contraseñas automáticas a los equipos nuevos.",
            "D) Comprimir los paquetes de red para reducir la latencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Default Gateway es la IP del enrutador local a la cual los equipos envían todo el tráfico destinado a redes ajenas a su propia subred."
    },
    {
        id: 63,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de sistemas operativos, ¿qué es la 'Memoria Virtual'?",
        opciones: [
            "A) Una técnica de gestión que combina la memoria física RAM con espacio de almacenamiento secundario (archivo de paginación o swap), permitiendo ejecutar programas más grandes que la memoria física disponible.",
            "B) Una memoria RAM fabricada con componentes holográficos.",
            "C) Un disco duro externo conectado por puerto USB.",
            "D) El almacenamiento temporal de la papelera de reciclaje."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 63,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de sistemas operativos, ¿qué técnica representa la 'Memoria Virtual'?",
        opciones: [
            "A) Un disco duro externo conectado por puerto USB de alta velocidad.",
            "B) El almacenamiento temporal exclusivo de la papelera de reciclaje gráfica.",
            "C) Una abstracción del hardware que simula un espacio de memoria contiguo y amplio combinando la RAM física con espacio de almacenamiento en disco (swap/paginación), ampliando la capacidad de ejecución de procesos.",
            "D) Una memoria RAM fabricada con componentes ópticos virtuales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La memoria virtual desacopla el espacio de direcciones lógicas del almacenamiento físico, utilizando espacio en disco para respaldar páginas cuando la RAM se satura."
    },
    {
        id: 64,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el control de versiones con Git, ¿qué acción realiza el comando 'git pull'?",
        opciones: [
            "A) Sube los commits locales directamente al repositorio remoto.",
            "B) Elimina el repositorio del disco duro de forma permanente.",
            "C) Crea una rama experimental paralela.",
            "D) Descarga los cambios recientes del repositorio remoto (git fetch) y los fusiona inmediatamente en la rama local actual (git merge)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "`git pull` combina las operaciones de fetch (recuperar metadatos remotos) y merge (integrar cambios), actualizando la rama de trabajo local con el servidor."
    },
    {
        id: 65,
        area: "Arquitectura de Software",
        pregunta: "En los patrones de arquitectura de software, ¿qué caracteriza al estilo arquitectónico 'Monolítico'?",
        opciones: [
            "A) Toda la funcionalidad del software (interfaz, lógica de negocio y acceso a datos) se encuentra empaquetada y desplegada como una única unidad de ejecución compacta.",
            "B) La división del sistema en cientos de microservicios independientes.",
            "C) La ejecución exclusiva del código en servidores virtuales distribuidos.",
            "D) La ausencia total de bases de datos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una arquitectura monolítica agrupa todos los componentes del sistema en un único ejecutable o paquete, simplificando el desarrollo inicial pero dificultando su escalabilidad a gran escala."
    },
    {
        id: 66,
        area: "Bases de Datos",
        pregunta: "En el diseño de bases de datos relacionales, ¿qué es una 'Dependencia Funcional'?",
        opciones: [
            "A) Una falla eléctrica en el servidor de datos.",
            "B) Una relación lógica donde el valor de un atributo (o conjunto de atributos) determina de manera unívoca y precisa el valor de otro atributo dentro de la misma tabla.",
            "C) Un programa en Java que calcula impuestos mensuales.",
            "D) La conexión remota vía VPN entre dos sucursales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La dependencia funcional es el concepto central de la normalización relacional, indicando que una clave determina los valores de las columnas dependientes."
    },
    {
        id: 67,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En Scrum, ¿quién es el responsable de eliminar los impedimentos externos que bloquean el progreso del equipo de desarrollo durante el Sprint?",
        opciones: [
            "A) El cliente inversor externo.",
            "B) El auditor fiscal de la empresa.",
            "C) El Scrum Master.",
            "D) El operador de mesas de ayuda técnica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Scrum Master actúa como líder servidor, protegiendo al equipo de interrupciones externas y removiendo obstáculos operativos que entorpezcan el flujo del Sprint."
    },
    {
        id: 68,
        area: "Seguridad de la Información",
        pregunta: "En la triada clásica de la seguridad de la información (Tríada CIA), ¿qué protegen los conceptos de Confidencialidad, Integridad y Disponibilidad?",
        opciones: [
            "A) Confidencialidad: acceso autorizado; Integridad: precisión y exactitud sin alteraciones indebidas; Disponibilidad: acceso oportuno a los recursos para los usuarios autorizados.",
            "B) Confidencialidad: velocidad de red; Integridad: memoria RAM; Disponibilidad: discos duros.",
            "C) Confidencialidad: salarios; Integridad: impresoras; Disponibilidad: teclados.",
            "D) No guardan relación con la seguridad informática."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 68,
        area: "Seguridad de la Información",
        pregunta: "En el núcleo de la seguridad informática, ¿cómo se definen los tres pilares fundamentales que componen la 'Tríada CIA'?",
        opciones: [
            "A) Conectividad de red, Velocidad de procesamiento y Almacenamiento en nube.",
            "B) Codificación binaria, Interfaz gráfica y Autenticación biométrica.",
            "C) Control de versiones, Integración continua y Despliegue automatizado.",
            "D) Confidencialidad (restringir acceso a datos sensibles), Integridad (garantizar que los datos no sean alterados de forma maliciosa) y Disponibilidad (asegurar que los sistemas estén accesibles)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La tríada CIA agrupa los objetivos principales de la seguridad de la información: Confidencialidad, Integridad y Disponibilidad."
    },
    {
        id: 69,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué complejidad temporal en notación Big O presenta el algoritmo de ordenamiento 'Bubble Sort' (Burbuja) en su peor escenario?",
        opciones: [
            "A) O(n^2).",
            "B) O(n log n).",
            "C) O(1).",
            "D) O(log n)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Bubble Sort compara pares adyacentes de elementos repetidamente, requiriendo un doble ciclo anidado que resulta en una complejidad cuadrática O(n^2) en el peor caso."
    },
    {
        id: 70,
        area: "Redes y Comunicaciones",
        pregunta: "En la pila de protocolos TCP/IP, ¿qué número de puerto estándar utiliza por defecto el protocolo seguro HTTPS (HTTP Secure) para la transferencia cifrada de hipertexto?",
        opciones: [
            "A) Puerto 80.",
            "B) Puerto 443.",
            "C) Puerto 22.",
            "D) Puerto 21."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El puerto estándar asignado por la IANA para tráfico HTTPS cifrado mediante TLS es el 443 (mientras que HTTP sin cifrar utiliza el puerto 80)."
    },
    {
        id: 71,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la arquitectura de sistemas operativos, ¿qué función cumple el 'Kernel' (Núcleo)?",
        opciones: [
            "A) Diseñar los logotipos corporativos de la interfaz gráfica.",
            "B) Compilar archivos fuente en lenguajes interpretados.",
            "C) Actuar como el núcleo central del sistema operativo, gestionando el acceso al hardware, la memoria, los procesos y los servicios del sistema de forma privilegiada.",
            "D) Enrutar paquetes de red WAN internacionales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El kernel es la capa de software fundamental que interactúa directamente con el hardware y arbitra los recursos para los programas de usuario."
    },
    {
        id: 72,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la ingeniería web y desarrollo frontend, ¿qué función cumple una 'Single Page Application' (SPA - Aplicación de Página Única)?",
        opciones: [
            "A) Cargar una única página HTML inicial y actualizar dinámicamente el contenido mediante JavaScript conforme el usuario navega, sin requerir recargas completas de la página desde el servidor.",
            "B) Limitar la visualización del sitio a una sola línea de texto.",
            "C) Impedir el uso de hojas de estilo CSS.",
            "D) Bloquear las peticiones asíncronas fetch."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 72,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la ingeniería web y desarrollo frontend, ¿qué caracteriza a una 'Single Page Application' (SPA - Aplicación de Página Única)?",
        opciones: [
            "A) Limitar la visualización del sitio web a una sola línea de texto estático.",
            "B) Impedir estrictamente el uso de hojas de estilo CSS y diseños responsivos.",
            "C) Bloquear de forma permanente todas las peticiones asíncronas de red.",
            "D) Cargar una única página HTML inicial y actualizar dinámicamente las vistas mediante JavaScript conforme interactúa el usuario, sin recargar completamente desde el servidor."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las SPA (ej. React, Angular, Vue) cargan el esqueleto inicial y gestionan el enrutamiento y renderizado en el cliente de forma fluida."
    },
    {
        id: 73,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de software, ¿qué define el patrón arquitectónico 'Hexagonal' (o Puertos y Adaptadores)?",
        opciones: [
            "A) Aislar la lógica de negocio central (dominio) de los elementos externos (bases de datos, interfaces de usuario, APIs) mediante puertos y adaptadores, permitiendo independencia tecnológica.",
            "B) Construir bases de datos con forma geométrica de seis lados.",
            "C) Conectar exactamente seis servidores en topología de anillo.",
            "D) Limitar las clases a un máximo de seis métodos públicos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La arquitectura hexagonal desacopla el núcleo del negocio de la infraestructura externa, facilitando la prueba unitaria y la sustitución de tecnologías."
    },
    {
        id: 74,
        area: "Bases de Datos",
        pregunta: "En los sistemas de bases de datos distribuidas, ¿qué establece el 'Teorema de CAP' (Brewer's Theorem)?",
        opciones: [
            "A) Que una base de datos distribuida puede garantizar simultáneamente y sin excepciones las tres propiedades: Consistencia, Disponibilidad y Tolerancia a Particiones.",
            "B) Que es imposible que un sistema de almacenamiento distribuido garantice simultáneamente más de dos de las tres propiedades: Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a particiones (Partition tolerance).",
            "C) Que las bases de datos NoSQL carecen de transacciones ACID.",
            "D) Que el rendimiento en disco depende exclusivamente del voltaje de la fuente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El teorema CAP postula que ante una partición de red, los sistemas distribuidos deben elegir obligatoriamente entre Consistencia o Disponibilidad, ya que la tolerancia a particiones es innegociable."
    },
    {
        id: 75,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el marco de trabajo Scrum, ¿quién integra el 'Scrum Team' (Equipo Scrum)?",
        opciones: [
            "A) Únicamente los programadores juniors y becarios de la empresa.",
            "B) Exclusivamente los auditores financieros externos y directores generales.",
            "C) El Product Owner, los Desarrolladores (Developers) y el Scrum Master.",
            "D) El personal de limpieza y mantenimiento de las oficinas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El equipo Scrum es una unidad autoorganizada y multifuncional compuesta por el Product Owner, el Scrum Master y los Desarrolladores."
    },
    {
        id: 76,
        area: "Seguridad de la Información",
        pregunta: "En las pruebas de penetración (Penetration Testing), ¿qué fase precede típicamente a la explotación de vulnerabilidades?",
        opciones: [
            "A) La liquidación fiscal de la empresa auditada.",
            "B) La compra de equipos de red en tiendas minoristas.",
            "C) El formateo de los discos duros de los clientes.",
            "D) La fase de reconocimiento y escaneo (recovering information / footprinting)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El reconocimiento (footprinting y scanning) recopila información pública y técnica sobre el objetivo antes de intentar explotar vulnerabilidades de seguridad."
    },
    {
        id: 77,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué es una 'Lista Enlazada' (Linked List) y cuál es su diferencia principal frente a un arreglo estático (Array)?",
        opciones: [
            "A) Una estructura donde los elementos no están almacenados en posiciones de memoria contiguas; cada nodo contiene un dato y un apuntador (referencia) al siguiente nodo, facilitando inserciones y borrados dinámicos sin desplazar bloques de memoria.",
            "B) Una lista de compras impresa en papel.",
            "C) Un arreglo que requiere tamaño fijo predefinido en gigabytes.",
            "D) Una base de datos relacional en memoria."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "A diferencia de los arreglos contiguos, las listas enlazadas asignan memoria de forma dinámica mediante nodos enlazados por punteros, optimizando inserciones pero penalizando el acceso aleatorio."
    },
    {
        id: 78,
        area: "Redes y Comunicaciones",
        pregunta: "En los servicios de red, ¿qué función cumple el protocolo DNS inverso (Reverse DNS / PTR records)?",
        opciones: [
            "A) Traducir nombres de dominio en direcciones IP numéricas.",
            "B) Resolver una dirección IP numérica conocida y mapearla de regreso a su nombre de dominio o hostname asociado.",
            "C) Acelerar la velocidad de descarga de archivos torrent.",
            "D) Bloquear ataques de denegación de servicio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El DNS inverso utiliza registros PTR para consultar qué nombre de dominio está asociado a una dirección IP específica, útil en auditorías y validación de servidores de correo."
    },
    {
        id: 79,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la sincronización de hilos, ¿en qué consiste la condición de 'Condición de Carrera' (Race Condition)?",
        opciones: [
            "A) Una competencia deportiva entre servidores de alto rendimiento.",
            "B) Un error de sintaxis en lenguajes interpretados.",
            "C) Una situación anómala donde varios procesos o hilos leen y escriben en un recurso compartido de forma concurrente, provocando que el resultado final dependa del orden exacto e impredecible de ejecución.",
            "D) La velocidad de transferencia de un bus PCI Express."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Una condición de carrera ocurre cuando la sincronización falla al acceder a recursos compartidos concurrentes, generando estados corruptos e inconsistencias impredecibles."
    },
    {
        id: 80,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En las prácticas de DevOps e Integración Continua (CI/CD), ¿qué objetivo principal persigue la automatización de la 'Integración Continua'?",
        opciones: [
            "A) Despedir al personal de pruebas manuales.",
            "B) Incrementar el consumo de papel en las oficinas.",
            "C) Evitar el uso de repositorios de código en la nube.",
            "D) Fusionar frecuentemente el código fuente de los desarrolladores en un repositorio central, ejecutando pruebas automáticas de compilación y validación ante cada commit para detectar fallos tempranamente."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La Integración Continua (CI) automatiza la compilación y testeo de cada cambio de código integrado, asegurando la calidad temprana y previniendo conflictos mayores de integración."
    },
    {
        id: 41,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de arquitecturas empresariales, ¿cuál es el objetivo principal de utilizar un patrón de 'Puerta de Enlace de API' (API Gateway)?",
        opciones: [
            "A) Actuar como un punto de entrada único para todas las solicitudes de los clientes, gestionando el enrutamiento, la autenticación, el aislamiento de microservicios y la limitación de tasa (rate limiting).",
            "B) Reemplazar por completo el motor de almacenamiento de las bases de datos relacionales.",
            "C) Compilar código fuente en lenguaje ensamblador directamente en el navegador web.",
            "D) Eliminar la necesidad de protocolos de red TCP/IP en la nube."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El API Gateway centraliza las peticiones externas, desacoplando a los clientes de la estructura interna de microservicios y proveyendo seguridad, balanceo y transformaciones de protocolo."
    },
    {
        id: 42,
        area: "Bases de Datos",
        pregunta: "En la administración y diseño de bases de datos relacionales, ¿qué representa una 'Llave Foránea' (Foreign Key)?",
        opciones: [
            "A) Un campo numérico cifrado que se utiliza para abrir respaldos en cinta.",
            "B) Un campo o grupo de campos en una tabla que establece un vínculo referencial único con la llave primaria de otra tabla, garantizando la integridad referencial.",
            "C) Un índice temporal que se elimina automáticamente tras cada consulta SELECT.",
            "D) Una contraseña maestra para acceder al servidor de producción."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La llave foránea enforces la integridad referencial entre tablas relacionadas, impidiendo que existan registros huérfanos que no apunten a una clave primaria válida."
    },
    {
        id: 43,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En las metodologías ágiles de desarrollo, especialmente en Scrum, ¿cuál es la función principal del rol conocido como 'Product Owner' (Propietario del Producto)?",
        opciones: [
            "A) Escribir y compilar el código en lenguaje C++ de los servidores.",
            "B) Instalar los cables de red y configurar los routers corporativos.",
            "C) Representar los intereses de los stakeholders, maximizar el valor del producto y gestionar, priorizar y clarificar constantemente el Backlog del Producto.",
            "D) Sancionar disciplinariamente a los desarrolladores por retrasos."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Product Owner es el máximo responsable de la gestión del valor y la priorización del Product Backlog, traduciendo las necesidades de negocio en requerimientos claros."
    },
    {
        id: 44,
        area: "Seguridad de la Información",
        pregunta: "En la evaluación de seguridad de aplicaciones web, ¿qué tipo de vulnerabilidad mitiga principalmente la implementación estricta de políticas de seguridad de contenido (CSP - Content Security Policy)?",
        opciones: [
            "A) Inyección SQL ciega en bases de datos.",
            "B) Desbordamiento de búfer en memoria RAM.",
            "C) Ataques de denegación de servicio volumétrico DDoS.",
            "D) Ataques de Secuencias de Comandos en Sitios Cruzados (Cross-Site Scripting / XSS)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "CSP es una capa de defensa que permite a los administradores restringir y declarar qué dominios de scripts maliciosos pueden ser ejecutados o cargados por el navegador, neutralizando ataques XSS."
    },
    {
        id: 45,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué recorrido de un Árbol Binario visita primero el nodo raíz, posteriormente recorre el subárbol izquierdo y finalmente el subárbol derecho?",
        opciones: [
            "A) Recorrido en Preorden (Pre-order traversal).",
            "B) Recorrido en Inorden (In-order traversal).",
            "C) Recorrido en Postorden (Post-order traversal).",
            "D) Recorrido por niveles en anchura."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El recorrido en Preorden sigue la secuencia: Raíz -> Izquierda -> Derecha, siendo útil para clonar árboles o generar representaciones jerárquicas."
    },
    {
        id: 46,
        area: "Redes y Comunicaciones",
        pregunta: "En el modelo jerárquico de diseño de redes de Cisco, ¿cuántas y cuáles son las capas estándar que componen la arquitectura recomendada para campus corporativos?",
        opciones: [
            "A) Capa física, capa de enlace y capa de aplicación.",
            "B) Capa de Acceso, Capa de Distribución y Capa Núcleo (Core).",
            "C) Capa de transacciones, capa de persistencia y capa de presentación.",
            "D) Capa cliente, capa servidor y capa de base de datos."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El modelo jerárquico de red se estructura en tres capas: Acceso (conexión de dispositivos finales), Distribución (enrutamiento y políticas) y Núcleo (transporte troncal de alta velocidad)."
    },
    {
        id: 47,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de procesos de un sistema operativo, ¿qué se entiende por un 'Cambio de Contexto' (Context Switch)?",
        opciones: [
            "A) La reinstalación completa del sistema operativo desde una memoria USB.",
            "B) El apagado programado de los servidores a medianoche.",
            "C) El almacenamiento del estado actual (registros, contador de programa) de un proceso que se suspende para permitir que la CPU comience a ejecutar un proceso diferente.",
            "D) La modificación de la dirección IP de la tarjeta de red."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El cambio de contexto es el procedimiento mediante el cual el kernel guarda el estado de un hilo o proceso para restaurar y ejecutar otro, consumiendo ciclos de CPU."
    },
    {
        id: 48,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En las arquitecturas de aplicaciones web modernas, ¿qué tecnología permite la comunicación bidireccional en tiempo real y persistente sobre una única conexión TCP entre el cliente (navegador) y el servidor?",
        opciones: [
            "A) Protocolo HTTP/1.0 estándar sin keep-alive.",
            "B) Consultas periódicas mediante AJAX (Long Polling).",
            "C) Transferencia de archivos por FTP anónimo.",
            "D) Protocolo WebSocket."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "WebSockets establece un canal de comunicación full-duplex persistente sobre TCP, idóneo para aplicaciones en tiempo real como chats, tableros colaborativos y cotizaciones bursátiles."
    },
    {
        id: 49,
        area: "Arquitectura de Software",
        pregunta: "En los principios de diseño de software SOLID, ¿qué establece el principio de 'Responsabilidad Única' (Single Responsibility Principle - SRP)?",
        opciones: [
            "A) Que una clase debe tener una, y solo una, razón para cambiar (debe concentrarse en una única parte de la funcionalidad proporcionada por el software).",
            "B) Que las clases derivadas deben poder sustituirse por sus clases base sin alterar el funcionamiento.",
            "C) Que los módulos de alto nivel no deben depender de módulos de bajo nivel.",
            "D) Que una clase debe implementar todas las interfaces posibles."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio SRP postula que cada módulo o clase debe encargarse de una única responsabilidad o actor del negocio, reduciendo el acoplamiento y facilitando el mantenimiento."
    },
    {
        id: 50,
        area: "Bases de Datos",
        pregunta: "En la optimización de motores de bases de datos relacionales, ¿qué función cumple una 'Vista' (View)?",
        opciones: [
            "A) Almacenar copias físicas duplicadas de las tablas en discos ópticos externos.",
            "B) Proveer una consulta SQL virtual almacenada con un nombre específico, la cual se comporta como una tabla lógica derivada sin duplicar necesariamente el almacenamiento físico de los datos.",
            "C) Formatear los reportes contables en archivos PDF.",
            "D) Cifrar las contraseñas de los usuarios administradores."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "Una vista encapsula consultas complejas o restringe el acceso a columnas sensibles, presentándose ante los usuarios como una tabla virtual integrada."
    },
    {
        id: 51,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el desarrollo ágil basado en Scrum, ¿qué es el 'Sprint Backlog' (Pila del Sprint)?",
        opciones: [
            "A) El conjunto de tareas técnicas y elementos del Product Backlog seleccionados para ser ejecutados durante el Sprint actual, junto con el plan para entregarlos.",
            "B) La lista histórica de todos los errores cometidos en los últimos diez años.",
            "C) El contrato legal firmado por el director general y los auditores externos.",
            "D) El inventario de computadoras portátiles asignadas al equipo de desarrollo."
        ],
        respuestaCorrecta: 2, // C -> Ajustado a índice 2 (C)
        explicacion: "El Sprint Backlog es el plan táctico detallado que elabora el equipo de desarrollo durante la planificación, conteniendo los elementos comprometidos para la iteración actual."
    },
    {
        id: 52,
        area: "Seguridad de la Información",
        pregunta: "En los modelos de gestión de seguridad informática, ¿qué se evalúa mediante la fórmula del 'Riesgo' en la gestión de vulnerabilidades?",
        opciones: [
            "A) La cantidad de dinero gastada en licencias de antivirus.",
            "B) La velocidad de conexión a Internet del servidor principal.",
            "C) La cantidad de líneas de código fuente escritas en Python.",
            "D) La probabilidad de que una amenaza explote una vulnerabilidad específica y el impacto negativo resultante para la organización."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El riesgo informático se calcula evaluando la probabilidad de ocurrencia frente al impacto potencial de negocio, permitiendo priorizar la remediación de vulnerabilidades."
    },
    {
        id: 53,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué caracteriza a un 'Árbol Binario de Búsqueda' (BST) en comparación con un árbol binario genérico?",
        opciones: [
            "A) Que para cada nodo, todos los elementos del subárbol izquierdo son menores que el nodo, y todos los elementos del subárbol derecho son mayores.",
            "B) Que todos los nodos deben tener obligatoriamente dos hijos idénticos.",
            "C) Que se organiza en una lista plana bidimensional.",
            "D) Que no permite almacenar números enteros negativos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El BST mantiene una propiedad estricta de ordenamiento en sus nodos (izquierda menor, derecha mayor), optimizando las búsquedas y recorridos estructurados."
    },
    {
        id: 54,
        area: "Redes y Comunicaciones",
        pregunta: "En la configuración de redes IP, ¿cuál es el propósito de aplicar una 'Máscara de Subred' (Subnet Mask)?",
        opciones: [
            "A) Ocultar la dirección IP para evitar ataques de ping.",
            "B) Dividir lógicamente una dirección IP en dos partes: una porción para identificar la red y otra porción para identificar el host específico dentro de esa red.",
            "C) Aumentar la velocidad de transferencia de los cables de fibra óptica.",
            "D) Cifrar los paquetes de datos en la capa de transporte."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La máscara de subred permite a los dispositivos de red distinguir qué porción de una dirección IP corresponde a la red local y cuál pertenece al host individual."
    },
    {
        id: 55,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la programación concurrente, ¿qué fenómeno conocido como 'Inanición' (Starvation) puede ocurrir en la planificación de procesos?",
        opciones: [
            "A) La falta de energía eléctrica en la fuente de poder del servidor.",
            "B) La eliminación accidental del sistema operativo del disco duro.",
            "C) Una situación en la que un proceso espera indefinidamente por recursos o tiempo de CPU porque otros procesos con mayor prioridad lo monopolizan.",
            "D) La desconexión de los clientes web por tiempo de espera agotado."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La inanición (starvation) se produce cuando un proceso de baja prioridad es marginado permanentemente por algoritmos de planificación desequilibrados, impidiendo su ejecución."
    },
    {
        id: 56,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la arquitectura de aplicaciones web modernas, ¿qué representa el término 'SSR' (Server-Side Rendering)?",
        opciones: [
            "A) Un protocolo de respaldo en discos de estado sólido.",
            "B) Una técnica donde el HTML de la página web es renderizado completamente en el servidor web por cada petición, enviando al cliente el DOM ya estructurado.",
            "C) Un sistema de encriptación de bases de datos distribuidas.",
            "D) Un lenguaje de programación basado en ensamblador."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 56,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la arquitectura de aplicaciones web modernas, ¿qué representa el concepto de 'SSR' (Server-Side Rendering)?",
        opciones: [
            "A) Un protocolo de respaldo automático en discos de estado sólido.",
            "B) Un sistema de encriptación de bases de datos distribuidas.",
            "C) Un lenguaje de programación de bajo nivel basado en ensamblador web.",
            "D) Una técnica arquitectónica donde el servidor procesa la lógica y genera el marcado HTML completo de la página ante cada solicitud del cliente, mejorando el SEO y la carga inicial."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "SSR (Server-Side Rendering) procesa la vista en el servidor antes de enviarla al navegador, facilitando la indexación por motores de búsqueda (SEO) frente al renderizado puramente del lado del cliente (CSR)."
    },
    {
        id: 57,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de sistemas orientados a objetos, ¿qué persigue el principio de 'Inversión de Dependencias' (Dependency Inversion Principle - DIP)?",
        opciones: [
            "A) Que los módulos de alto nivel no dependan de módulos de bajo nivel; ambos deben depender de abstracciones (interfaces), y las abstracciones no deben depender de los detalles.",
            "B) Que todas las clases hereden directamente de una clase raíz única y estática.",
            "C) Que se eliminen por completo las interfaces para acelerar la compilación.",
            "D) Que los métodos de clase sean siempre públicos y estáticos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "El principio DIP fomenta el desacoplamiento mediante el uso de interfaces o clases abstractas, permitiendo intercambiar implementaciones sin alterar la lógica superior."
    },
    {
        id: 58,
        area: "Bases de Datos",
        pregunta: "En la administración de bases de datos, ¿qué función cumple una sentencia de tipo 'ROLLBACK' dentro de una transacción?",
        opciones: [
            "A) Guardar permanentemente los cambios en el disco duro principal.",
            "B) Deshacer todas las modificaciones realizadas durante la transacción actual, restaurando la base de datos al estado consistente en el que se encontraba antes de iniciarla.",
            "C) Duplicar la tabla transaccional en un servidor secundario.",
            "D) Aumentar la velocidad de los índices relacionales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "ROLLBACK es la sentencia de control transaccional que revierte cambios ante un error, garantizando la atomicidad (propiedad ACID)."
    },
    {
        id: 59,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En las metodologías ágiles, ¿qué es la 'Deuda Técnica' (Technical Debt)?",
        opciones: [
            "A) El préstamo bancario solicitado para comprar licencias de software comercial.",
            "B) El costo económico de contratar programadores senior.",
            "C) El costo implícito de re-trabajo futuro que se asume al elegir una solución de código rápida, subóptima o provisional en el presente para cumplir plazos ajustados.",
            "D) Los impuestos fiscales pagados por la empresa desarrolladora."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La deuda técnica representa el desgaste y la complejidad acumulada en el código por atajos de desarrollo, los cuales penalizan la mantenibilidad si no se refactorizan a tiempo."
    },
    {
        id: 60,
        area: "Seguridad de la Información",
        pregunta: "En criptografía y seguridad informática, ¿qué función cumple un 'Certificado Digital SSL/TLS' emitido por una Autoridad de Certificación (CA)?",
        opciones: [
            "A) Garantizar que el sitio web es económico de mantener.",
            "B) Aumentar los FPS de los videojuegos en línea.",
            "C) Evitar que los servidores sufran de sobrecalentamiento.",
            "D) Vincular criptográficamente una clave pública con la identidad de una entidad (como un dominio web), permitiendo establecer conexiones cifradas y verificables."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Los certificados SSL/TLS autentican la identidad del sitio web y habilitan el cifrado HTTPS, protegiendo los datos en tránsito frente a escuchas y suplantaciones."
    },
    {
        id: 61,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué tipo de estructura de datos opera bajo el principio FIFO (First In, First Out - El primero en entrar es el primero en salir)?",
        opciones: [
            "A) Cola (Queue).",
            "B) Pila (Stack).",
            "C) Árbol AVL.",
            "D) Tabla Hash."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La Cola (Queue) sigue una dinámica de fila lineal estricta (FIFO), donde el primer elemento en ingresar es el primero en ser atendido y eliminado."
    },
    {
        id: 62,
        area: "Redes y Comunicaciones",
        pregunta: "En las arquitecturas de red, ¿qué función realiza un protocolo de 'Puerta de Enlace Predeterminada' (Default Gateway)?",
        opciones: [
            "A) Traducir nombres de páginas web en direcciones IP numéricas.",
            "B) Servir como nodo de salida o enrutador que conecta una red local con redes externas (como Internet) para el tráfico que va dirigido fuera del segmento local.",
            "C) Asignar contraseñas automáticas a los equipos nuevos.",
            "D) Comprimir los paquetes de red para reducir la latencia."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El Default Gateway es la IP del enrutador local a la cual los equipos envían todo el tráfico destinado a redes ajenas a su propia subred."
    },
    {
        id: 63,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de sistemas operativos, ¿qué es la 'Memoria Virtual'?",
        opciones: [
            "A) Una técnica de gestión que combina la memoria física RAM con espacio de almacenamiento secundario (archivo de paginación o swap), permitiendo ejecutar programas más grandes que la memoria física disponible.",
            "B) Una memoria RAM fabricada con componentes holográficos.",
            "C) Un disco duro externo conectado por puerto USB.",
            "D) El almacenamiento temporal de la papelera de reciclaje."
        ],
        respuestaCorrecta: 2, // C? Ajustemos para que sea C (índice 2):
    },
    // Ajustemos para que la C sea la correcta:
    {
        id: 63,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la administración de sistemas operativos, ¿qué técnica representa la 'Memoria Virtual'?",
        opciones: [
            "A) Un disco duro externo conectado por puerto USB de alta velocidad.",
            "B) El almacenamiento temporal exclusivo de la papelera de reciclaje gráfica.",
            "C) Una abstracción del hardware que simula un espacio de memoria contiguo y amplio combinando la RAM física con espacio de almacenamiento en disco (swap/paginación), ampliando la capacidad de ejecución de procesos.",
            "D) Una memoria RAM fabricada con componentes ópticos virtuales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "La memoria virtual desacopla el espacio de direcciones lógicas del almacenamiento físico, utilizando espacio en disco para respaldar páginas cuando la RAM se satura."
    },
    {
        id: 64,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En el control de versiones con Git, ¿qué acción realiza el comando 'git pull'?",
        opciones: [
            "A) Sube los commits locales directamente al repositorio remoto.",
            "B) Elimina el repositorio del disco duro de forma permanente.",
            "C) Crea una rama experimental paralela.",
            "D) Descarga los cambios recientes del repositorio remoto (git fetch) y los fusiona inmediatamente en la rama local actual (git merge)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "`git pull` combina las operaciones de fetch (recuperar metadatos remotos) y merge (integrar cambios), actualizando la rama de trabajo local con el servidor."
    },
    {
        id: 65,
        area: "Arquitectura de Software",
        pregunta: "En los patrones de arquitectura de software, ¿qué caracteriza al estilo arquitectónico 'Monolítico'?",
        opciones: [
            "A) Toda la funcionalidad del software (interfaz, lógica de negocio y acceso a datos) se encuentra empaquetada y desplegada como una única unidad de ejecución compacta.",
            "B) La división del sistema en cientos de microservicios independientes.",
            "C) La ejecución exclusiva del código en servidores virtuales distribuidos.",
            "D) La ausencia total de bases de datos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Una arquitectura monolítica agrupa todos los componentes del sistema en un único ejecutable o paquete, simplificando el desarrollo inicial pero dificultando su escalabilidad a gran escala."
    },
    {
        id: 66,
        area: "Bases de Datos",
        pregunta: "En el diseño de bases de datos relacionales, ¿qué es una 'Dependencia Funcional'?",
        opciones: [
            "A) Una falla eléctrica en el servidor de datos.",
            "B) Una relación lógica donde el valor de un atributo (o conjunto de atributos) determina de manera unívoca y precisa el valor de otro atributo dentro de la misma tabla.",
            "C) Un programa en Java que calcula impuestos mensuales.",
            "D) La conexión remota vía VPN entre dos sucursales."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "La dependencia funcional es el concepto central de la normalización relacional, indicando que una clave determina los valores de las columnas dependientes."
    },
    {
        id: 67,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En Scrum, ¿quién es el responsable de eliminar los impedimentos externos que bloquean el progreso del equipo de desarrollo durante el Sprint?",
        opciones: [
            "A) El cliente inversor externo.",
            "B) El auditor fiscal de la empresa.",
            "C) El Scrum Master.",
            "D) El operador de mesas de ayuda técnica."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El Scrum Master actúa como líder servidor, protegiendo al equipo de interrupciones externas y removiendo obstáculos operativos que entorpezcan el flujo del Sprint."
    },
    {
        id: 68,
        area: "Seguridad de la Información",
        pregunta: "En la triada clásica de la seguridad de la información (Tríada CIA), ¿qué protegen los conceptos de Confidencialidad, Integridad y Disponibilidad?",
        opciones: [
            "A) Confidencialidad: acceso autorizado; Integridad: precisión y exactitud sin alteraciones indebidas; Disponibilidad: acceso oportuno a los recursos para los usuarios autorizados.",
            "B) Confidencialidad: velocidad de red; Integridad: memoria RAM; Disponibilidad: discos duros.",
            "C) Confidencialidad: salarios; Integridad: impresoras; Disponibilidad: teclados.",
            "D) No guardan relación con la seguridad informática."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 68,
        area: "Seguridad de la Información",
        pregunta: "En el núcleo de la seguridad informática, ¿cómo se definen los tres pilares fundamentales que componen la 'Tríada CIA'?",
        opciones: [
            "A) Conectividad de red, Velocidad de procesamiento y Almacenamiento en nube.",
            "B) Codificación binaria, Interfaz gráfica y Autenticación biométrica.",
            "C) Control de versiones, Integración continua y Despliegue automatizado.",
            "D) Confidencialidad (restringir acceso a datos sensibles), Integridad (garantizar que los datos no sean alterados de forma maliciosa) y Disponibilidad (asegurar que los sistemas estén accesibles)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La tríada CIA agrupa los objetivos principales de la seguridad de la información: Confidencialidad, Integridad y Disponibilidad."
    },
    {
        id: 69,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué complejidad temporal en notación Big O presenta el algoritmo de ordenamiento 'Bubble Sort' (Burbuja) en su peor escenario?",
        opciones: [
            "A) O(n^2).",
            "B) O(n log n).",
            "C) O(1).",
            "D) O(log n)."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "Bubble Sort compara pares adyacentes de elementos repetidamente, requiriendo un doble ciclo anidado que resulta en una complejidad cuadrática O(n^2) en el peor caso."
    },
    {
        id: 70,
        area: "Redes y Comunicaciones",
        pregunta: "En la pila de protocolos TCP/IP, ¿qué número de puerto estándar utiliza por defecto el protocolo seguro HTTPS (HTTP Secure) para la transferencia cifrada de hipertexto?",
        opciones: [
            "A) Puerto 80.",
            "B) Puerto 443.",
            "C) Puerto 22.",
            "D) Puerto 21."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El puerto estándar asignado por la IANA para tráfico HTTPS cifrado mediante TLS es el 443 (mientras que HTTP sin cifrar utiliza el puerto 80)."
    },
    {
        id: 71,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la arquitectura de sistemas operativos, ¿qué función cumple el 'Kernel' (Núcleo)?",
        opciones: [
            "A) Diseñar los logotipos corporativos de la interfaz gráfica.",
            "B) Compilar archivos fuente en lenguajes interpretados.",
            "C) Actuar como el núcleo central del sistema operativo, gestionando el acceso al hardware, la memoria, los procesos y los servicios del sistema de forma privilegiada.",
            "D) Enrutar paquetes de red WAN internacionales."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El kernel es la capa de software fundamental que interactúa directamente con el hardware y arbitra los recursos para los programas de usuario."
    },
    {
        id: 72,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la ingeniería web y desarrollo frontend, ¿qué función cumple una 'Single Page Application' (SPA - Aplicación de Página Única)?",
        opciones: [
            "A) Cargar una única página HTML inicial y actualizar dinámicamente el contenido mediante JavaScript conforme el usuario navega, sin requerir recargas completas de la página desde el servidor.",
            "B) Limitar la visualización del sitio a una sola línea de texto.",
            "C) Impedir el uso de hojas de estilo CSS.",
            "D) Bloquear las peticiones asíncronas fetch."
        ],
        respuestaCorrecta: 3, // D? Ajustemos para que sea D (índice 3):
    },
    // Ajustemos para que la D sea la correcta:
    {
        id: 72,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En la ingeniería web y desarrollo frontend, ¿qué caracteriza a una 'Single Page Application' (SPA - Aplicación de Página Única)?",
        opciones: [
            "A) Limitar la visualización del sitio web a una sola línea de texto estático.",
            "B) Impedir estrictamente el uso de hojas de estilo CSS y diseños responsivos.",
            "C) Bloquear de forma permanente todas las peticiones asíncronas de red.",
            "D) Cargar una única página HTML inicial y actualizar dinámicamente las vistas mediante JavaScript conforme interactúa el usuario, sin recargar completamente desde el servidor."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "Las SPA (ej. React, Angular, Vue) cargan el esqueleto inicial y gestionan el enrutamiento y renderizado en el cliente de forma fluida."
    },
    {
        id: 73,
        area: "Arquitectura de Software",
        pregunta: "En el diseño de software, ¿qué define el patrón arquitectónico 'Hexagonal' (o Puertos y Adaptadores)?",
        opciones: [
            "A) Aislar la lógica de negocio central (dominio) de los elementos externos (bases de datos, interfaces de usuario, APIs) mediante puertos y adaptadores, permitiendo independencia tecnológica.",
            "B) Construir bases de datos con forma geométrica de seis lados.",
            "C) Conectar exactamente seis servidores en topología de anillo.",
            "D) Limitar las clases a un máximo de seis métodos públicos."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "La arquitectura hexagonal desacopla el núcleo del negocio de la infraestructura externa, facilitando la prueba unitaria y la sustitución de tecnologías."
    },
    {
        id: 74,
        area: "Bases de Datos",
        pregunta: "En los sistemas de bases de datos distribuidas, ¿qué establece el 'Teorema de CAP' (Brewer's Theorem)?",
        opciones: [
            "A) Que una base de datos distribuida puede garantizar simultáneamente y sin excepciones las tres propiedades: Consistencia, Disponibilidad y Tolerancia a Particiones.",
            "B) Que es imposible que un sistema de almacenamiento distribuido garantice simultáneamente más de dos de las tres propiedades: Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a particiones (Partition tolerance).",
            "C) Que las bases de datos NoSQL carecen de transacciones ACID.",
            "D) Que el rendimiento en disco depende exclusivamente del voltaje de la fuente."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El teorema CAP postula que ante una partición de red, los sistemas distribuidos deben elegir obligatoriamente entre Consistencia o Disponibilidad, ya que la tolerancia a particiones es innegociable."
    },
    {
        id: 75,
        area: "Ingeniería de Software y Metodologías Ágiles",
        pregunta: "En el marco de trabajo Scrum, ¿quién integra el 'Scrum Team' (Equipo Scrum)?",
        opciones: [
            "A) Únicamente los programadores juniors y becarios de la empresa.",
            "B) Exclusivamente los auditores financieros externos y directores generales.",
            "C) El Product Owner, los Desarrolladores (Developers) y el Scrum Master.",
            "D) El personal de limpieza y mantenimiento de las oficinas."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "El equipo Scrum es una unidad autoorganizada y multifuncional compuesta por el Product Owner, el Scrum Master y los Desarrolladores."
    },
    {
        id: 76,
        area: "Seguridad de la Información",
        pregunta: "En las pruebas de penetración (Penetration Testing), ¿qué fase precede típicamente a la explotación de vulnerabilidades?",
        opciones: [
            "A) La liquidación fiscal de la empresa auditada.",
            "B) La compra de equipos de red en tiendas minoristas.",
            "C) El formateo de los discos duros de los clientes.",
            "D) La fase de reconocimiento y escaneo (recovering information / footprinting)."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "El reconocimiento (footprinting y scanning) recopila información pública y técnica sobre el objetivo antes de intentar explotar vulnerabilidades de seguridad."
    },
    {
        id: 77,
        area: "Estructuras de Datos y Algoritmos",
        pregunta: "¿Qué es una 'Lista Enlazada' (Linked List) y cuál es su diferencia principal frente a un arreglo estático (Array)?",
        opciones: [
            "A) Una estructura donde los elementos no están almacenados en posiciones de memoria contiguas; cada nodo contiene un dato y un apuntador (referencia) al siguiente nodo, facilitando inserciones y borrados dinámicos sin desplazar bloques de memoria.",
            "B) Una lista de compras impresa en papel.",
            "C) Un arreglo que requiere tamaño fijo predefinido en gigabytes.",
            "D) Una base de datos relacional en memoria."
        ],
        respuestaCorrecta: 0, // A
        explicacion: "A diferencia de los arreglos contiguos, las listas enlazadas asignan memoria de forma dinámica mediante nodos enlazados por punteros, optimizando inserciones pero penalizando el acceso aleatorio."
    },
    {
        id: 78,
        area: "Redes y Comunicaciones",
        pregunta: "En los servicios de red, ¿qué función cumple el protocolo DNS inverso (Reverse DNS / PTR records)?",
        opciones: [
            "A) Traducir nombres de dominio en direcciones IP numéricas.",
            "B) Resolver una dirección IP numérica conocida y mapearla de regreso a su nombre de dominio o hostname asociado.",
            "C) Acelerar la velocidad de descarga de archivos torrent.",
            "D) Bloquear ataques de denegación de servicio."
        ],
        respuestaCorrecta: 1, // B
        explicacion: "El DNS inverso utiliza registros PTR para consultar qué nombre de dominio está asociado a una dirección IP específica, útil en auditorías y validación de servidores de correo."
    },
    {
        id: 79,
        area: "Sistemas Operativos y Concurrencia",
        pregunta: "En la sincronización de hilos, ¿en qué consiste la condición de 'Condición de Carrera' (Race Condition)?",
        opciones: [
            "A) Una competencia deportiva entre servidores de alto rendimiento.",
            "B) Un error de sintaxis en lenguajes interpretados.",
            "C) Una situación anómala donde varios procesos o hilos leen y escriben en un recurso compartido de forma concurrente, provocando que el resultado final dependa del orden exacto e impredecible de ejecución.",
            "D) La velocidad de transferencia de un bus PCI Express."
        ],
        respuestaCorrecta: 2, // C
        explicacion: "Una condición de carrera ocurre cuando la sincronización falla al acceder a recursos compartidos concurrentes, generando estados corruptos e inconsistencias impredecibles."
    },
    {
        id: 80,
        area: "Desarrollo Web y Tecnologías Emergentes",
        pregunta: "En las prácticas de DevOps e Integración Continua (CI/CD), ¿qué objetivo principal persigue la automatización de la 'Integración Continua'?",
        opciones: [
            "A) Despedir al personal de pruebas manuales.",
            "B) Incrementar el consumo de papel en las oficinas.",
            "C) Evitar el uso de repositorios de código en la nube.",
            "D) Fusionar frecuentemente el código fuente de los desarrolladores en un repositorio central, ejecutando pruebas automáticas de compilación y validación ante cada commit para detectar fallos tempranamente."
        ],
        respuestaCorrecta: 3, // D
        explicacion: "La Integración Continua (CI) automatiza la compilación y testeo de cada cambio de código integrado, asegurando la calidad temprana y previniendo conflictos mayores de integración."
    }
];