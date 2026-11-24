const bancoPreguntas = [
    {
        "id": 1,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el propósito principal del patrón de diseño Singleton en la programación orientada a objetos?",
        "opciones": [
            "A) Desacoplar un objeto emisor de un objeto receptor mediante la intermediación de un evento.",
            "B) Garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a ella.",
            "C) Permitir que un objeto altere su comportamiento cuando su estado interno cambia.",
            "D) Facilitar la creación de familias de objetos relacionados sin especificar sus clases concretas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El patrón Singleton limita la instanciación de una clase a un solo objeto, lo cual es útil cuando se necesita exactamente un objeto para coordinar acciones en todo el sistema."
    },
    {
        "id": 2,
        "area": "Ingeniería de Software",
        "pregunta": "En el contexto de metodologías ágiles (Scrum), ¿cuál es el artefacto que representa el trabajo planificado para el incremento del producto actual en el Sprint?",
        "opciones": [
            "A) Burndown Chart",
            "B) Product Backlog",
            "C) Incremento de Software",
            "D) Sprint Backlog"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Sprint Backlog es el conjunto de elementos del Product Backlog seleccionados para el Sprint, junto con el plan para entregar el incremento de software y alcanzar el objetivo del Sprint."
    },
    {
        "id": 3,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué fase del ciclo de vida del desarrollo de software (SDLC) se enfoca en verificar que el sistema cumpla con los requisitos especificados por el cliente mediante la ejecución de casos de prueba?",
        "opciones": [
            "A) Pruebas (Testing)",
            "B) Diseño del Sistema",
            "C) Análisis de Requisitos",
            "D) Despliegue"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La fase de pruebas (Testing) tiene como objetivo detectar errores y asegurar que el software funcione conforme a los requerimientos funcionales y no funcionales definidos."
    },
    {
        "id": 4,
        "area": "Ingeniería de Software",
        "pregunta": "En el diseño orientado a objetos, ¿qué principio de SOLID establece que una clase debe tener una, y solo una, razón para cambiar?",
        "opciones": [
            "A) Principio de inversión de dependencia (DIP)",
            "B) Principio de sustitución de Liskov (LSP)",
            "C) Principio abierto/cerrado (OCP)",
            "D) Principio de responsabilidad única (SRP)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Principio de Responsabilidad Única (SRP) postula que un módulo o clase debe encargarse de una sola parte de la funcionalidad proporcionada por el software, y esa responsabilidad debe estar completamente encuapsulada en la clase."
    },
    {
        "id": 5,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué tipo de prueba de software se realiza sin conocer la estructura interna de código, enfocándose exclusivamente en las entradas y salidas del sistema?",
        "opciones": [
            "A) Pruebas de caja blanca",
            "B) Pruebas unitarias",
            "C) Pruebas de integración estructural",
            "D) Pruebas de caja negra"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las pruebas de caja negra evalúan la funcionalidad del software desde el punto de vista del usuario externo, basándose en la especificación de requerimientos sin examinar el código fuente."
    },
    {
        "id": 6,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es la principal característica del modelo de desarrollo en Cascada (Waterfall)?",
        "opciones": [
            "A) Se enfoca en minimizar la documentación y prioriza la interacción humana.",
            "B) Cada fase debe completarse antes de que la siguiente pueda comenzar, sin solapamiento.",
            "C) Es altamente iterativo e incremental con entregas continuas cada dos semanas.",
            "D) Permite modificar los requerimientos principales en cualquier etapa sin costo adicional."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo en cascada es un enfoque secuencial lineal donde el progreso fluye constantemente hacia abajo a través de las fases de diseño, implementación, pruebas, etc."
    },
    {
        "id": 7,
        "area": "Ingeniería de Software",
        "pregunta": "En el diagrama de clases de UML, ¿qué tipo de relación denota una unión débil donde un objeto 'tiene a' otro, pero ambos pueden existir independientemente?",
        "opciones": [
            "A) Herencia (Generalización)",
            "B) Dependencia",
            "C) Composición",
            "D) Agregación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La agregación es una forma especializada de asociación que representa una relación de 'todo/parte' donde el objeto contenedor y el contenido tienen ciclos de vida independientes."
    },
    {
        "id": 8,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué métrica de calidad de código mide la complejidad estructural de un programa contando el número de caminos linealmente independientes a través de su código fuente?",
        "opciones": [
            "A) Líneas de Código Modificadas (SLOC)",
            "B) Puntos de Función de Albrecht",
            "C) Complejidad Ciclomática de McCabe",
            "D) Acoplamiento Aferent"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La complejidad ciclomática desarrollada por Thomas J. McCabe cuantifica la complejidad lógica de un programa sumando 1 al número de decisiones condicionales en el código."
    },
    {
        "id": 9,
        "area": "Ingeniería de Software",
        "pregunta": "En Scrum, ¿quién es el responsable de maximizar el valor del producto resultante del trabajo del equipo de desarrollo (Developers)?",
        "opciones": [
            "A) El Scrum Master",
            "B) El Administrador de Proyectos",
            "C) El Product Owner (Dueño de Producto)",
            "D) El Arquitecto de Software"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Product Owner es la única persona responsable de gestionar el Product Backlog, lo que incluye ordenar y comunicar claramente los elementos para maximizar el valor del producto."
    },
    {
        "id": 10,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué patrón de arquitectura divide una aplicación en tres grupos interconectados para separar las representaciones internas de la información de las formas en que se presenta y acepta al usuario?",
        "opciones": [
            "A) P2P (Peer-to-Peer)",
            "B) Modelo-Vista-Controlador (MVC)",
            "C) Cliente-Servidor",
            "D) Microservicios"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "MVC separa los datos (Modelo), la interfaz de usuario (Vista) y la lógica de control (Controlador), permitiendo un desarrollo, prueba y mantenimiento más modular y escalable."
    },
    {
        "id": 11,
        "area": "Bases de Datos",
        "pregunta": "¿Qué propiedad de las transacciones en bases de datos relacionales (ACID) garantiza que todas las operaciones de una transacción se realicen con éxito o que ninguna se aplique?",
        "opciones": [
            "A) Atomicidad",
            "B) Consistencia",
            "C) Durabilidad",
            "D) Aislamisolation (Aislamiento)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La atomicidad asegura que la transacción se ejecute como una unidad indivisible de trabajo; si un paso falla, toda la transacción se revierte (rollback)."
    },
    {
        "id": 12,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es el objetivo principal de la normalización de bases de datos relacionales?",
        "opciones": [
            "A) Convertir un modelo relacional en un modelo orientado a documentos NoSQL.",
            "B) Minimizar la redundancia y evitar anomalías de inserción, actualización y borrado.",
            "C) Incrementar la redundancia de datos para acelerar las consultas complejas.",
            "D) Reducir el número de tablas en el esquema físico para ahorrar espacio en disco."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La normalización organiza las columnas y tablas de una base de datos para reducir la redundancia y las dependencias anómalas mediante formas normales sucesivas (1FN, 2FN, 3FN, etc.)."
    },
    {
        "id": 13,
        "area": "Bases de Datos",
        "pregunta": "En SQL, ¿qué tipo de JOIN devuelve todos los registros cuando hay una coincidencia en cualquiera de las tablas (izquierda o derecha)?",
        "opciones": [
            "A) FULL OUTER JOIN",
            "B) CROSS JOIN",
            "C) LEFT JOIN",
            "D) INNER JOIN"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El FULL OUTER JOIN combina los resultados de LEFT JOIN y RIGHT JOIN, devolviendo todas las filas de ambas tablas con NULLs en los campos donde no hay coincidencia."
    },
    {
        "id": 14,
        "area": "Bases de Datos",
        "pregunta": "¿Qué tipo de base de datos NoSQL es óptima para almacenar datos altamente relacionados mediante nodos y aristas, ideal para redes sociales o recomendaciones?",
        "opciones": [
            "A) Almacenamiento Clave-Valor",
            "B) Orientada a Documentos",
            "C) Basada en Columnas Anchas",
            "D) Basada en Grafos (Graph Database)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las bases de datos de grafos utilizan estructuras de teoría de grafos con nodos, propiedades y aristas para representar y almacenar datos interconectados de manera eficiente."
    },
    {
        "id": 15,
        "area": "Bases de Datos",
        "pregunta": "En el diseño de bases de datos, ¿qué es una Clave Foránea (Foreign Key)?",
        "opciones": [
            "A) Una variable temporal utilizada en procedimientos almacenados.",
            "B) Un campo único que identifica de forma inequívoca cada registro de una tabla.",
            "C) Un campo o conjunto de campos en una tabla que hace referencia a la clave primaria de otra tabla.",
            "D) Un índice secundario utilizado exclusivamente para optimizar consultas de texto completo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una clave foránea establece y aplica un enlace entre los datos de dos tablas, manteniendo la integridad referencial en el modelo relacional."
    },
    {
        "id": 16,
        "area": "Bases de Datos",
        "pregunta": "¿Qué componente del Sistema de Gestión de Bases de Datos (DBMS) es responsable de asegurar que los cambios realizados por transacciones confirmadas no se pierdan ante un fallo del sistema?",
        "opciones": [
            "A) Optimizador de Consultas",
            "B) Gestor de Concurrencia",
            "C) Gestor de Recuperación (Recovery Manager)",
            "D) Compilador DDL"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El gestor de recuperación utiliza registros de transacciones (como el Write-Ahead Logging o WAL) para garantizar la propiedad de Durabilidad (D de ACID)."
    },
    {
        "id": 17,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál de las siguientes sentencias pertenece al Lenguaje de Definición de Datos (DDL) en SQL?",
        "opciones": [
            "A) SELECT",
            "B) UPDATE",
            "C) CREATE TABLE",
            "D) INSERT"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El DDL (Data Definition Language) incluye comandos como CREATE, ALTER y DROP que se utilizan para definir y modificar la estructura de las bases de datos y sus objetos."
    },
    {
        "id": 18,
        "area": "Bases de Datos",
        "pregunta": "En el teorema CAP de bases de datos distribuidas, ¿qué significa la letra 'P'?",
        "opciones": [
            "A) Persistencia (Persistence)",
            "B) Predictibilidad (Predictability)",
            "C) Tolerancia a particiones (Partition tolerance)",
            "D) Rendimiento (Performance)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El teorema CAP establece que un sistema de datos distribuido sólo puede garantizar simultáneamente dos de tres propiedades: Consistencia, Disponibilidad y Tolerancia a particiones (P)."
    },
    {
        "id": 19,
        "area": "Bases de Datos",
        "pregunta": "¿Qué problema de concurrencia ocurre cuando dos transacciones leen los mismos datos y una de ellas los modifica y confirma, sobrescribiendo los cambios de la otra transacción que no se han actualizado?",
        "opciones": [
            "A) Lectura fantasma",
            "B) Lectura sucia (Dirty Read)",
            "C) Lectura no repetible",
            "D) Actualización perdida (Lost Update)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La actualización perdida se da cuando concurren dos operaciones de escritura sobre el mismo elemento sin un control adecuado de bloqueos, provocando la pérdida de una de las modificaciones."
    },
    {
        "id": 20,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es la función principal de crear un índice en una columna de una tabla de base de datos?",
        "opciones": [
            "A) Reducir la cantidad de espacio en disco que ocupa la tabla.",
            "B) Forzar la unicidad de los registros automáticamente sin necesidad de claves primarias.",
            "C) Acelerar la recuperación de datos (las consultas SELECT) a costa de un mayor tiempo en operaciones de escritura.",
            "D) Permitir el almacenamiento de datos multimedia en formatos estructurados."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los índices (como B-Trees) permiten al motor de base de datos encontrar filas rápidamente sin escanear toda la tabla, aunque ralentizan inserciones, actualizaciones y borrados debido al mantenimiento del índice."
    },
    {
        "id": 21,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿En qué capa del modelo OSI operan los routers y se realiza el direccionamiento lógico y el enrutamiento de paquetes?",
        "opciones": [
            "A) Capa 3 (Red)",
            "B) Capa 4 (Transporte)",
            "C) Capa 2 (Enlace de datos)",
            "D) Capa 1 (Física)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Capa 3 (Red) del modelo OSI maneja el direccionamiento lógico (como direcciones IP) y la determinación de la ruta que deben seguir los paquetes a través de redes interconectadas."
    },
    {
        "id": 22,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es el protocolo de la capa de transporte que ofrece una comunicación orientada a conexión, control de flujo y entrega garantizada de paquetes?",
        "opciones": [
            "A) TCP",
            "B) IP",
            "C) ICMP",
            "D) UDP"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "TCP (Transmission Control Protocol) garantiza la entrega ordenada y confiable de datos mediante un proceso de establecimiento de conexión de tres vías (three-way handshake)."
    },
    {
        "id": 23,
        "area": "Redes y Comunicaciones",
        "pregunta": "Dada la dirección IP 192.168.1.50 con máscara de subred 255.255.255.0, ¿cuál es la dirección de red correspondiente?",
        "opciones": [
            "A) 192.168.1.255",
            "B) 192.168.1.0",
            "C) 192.168.0.0",
            "D) 192.168.1.50"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Aplicando la operación AND a nivel de bits entre la IP 192.168.1.50 y la máscara 255.255.255.0, se obtiene la dirección de red 192.168.1.0."
    },
    {
        "id": 24,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué protocolo de la capa de aplicación se utiliza para la asignación dinámica de direcciones IP a los dispositivos en una red local?",
        "opciones": [
            "A) DHCP",
            "B) FTP",
            "C) SNMP",
            "D) DNS"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "DHCP (Dynamic Host Configuration Protocol) automatiza la configuración de redes IP, asignando dinámicamente direcciones IP y otros parámetros de red a los clientes."
    },
    {
        "id": 25,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es la función principal del servicio DNS (Domain Name System) en Internet?",
        "opciones": [
            "A) Traducir nombres de dominio legibles por humanos (como www.ejemplo.com) a direcciones IP numéricas.",
            "B) Cifrar el tráfico web entre el navegador y el servidor de destino.",
            "C) Monitorear el rendimiento de los enlaces de fibra óptica.",
            "D) Enrutar paquetes de datos entre diferentes redes autónomas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "DNS actúa como la 'guía telefónica' de Internet, resolviendo nombres de dominio alfanuméricos a las direcciones IP numéricas necesarias para la comunicación de red."
    },
    {
        "id": 26,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué dispositivo de red opera en la Capa 2 (Enlace de datos) y utiliza direcciones MAC para filtrar y reenviar tramas únicamente al puerto de destino correspondiente?",
        "opciones": [
            "A) Router",
            "B) Repetidor",
            "C) Hub (Concentrador)",
            "D) Switch (Conmutador)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un switch de red opera en la capa de enlace de datos y mantiene una tabla de direcciones MAC para enviar el tráfico de manera eficiente a través de puertos específicos."
    },
    {
        "id": 27,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál de las siguientes direcciones IP pertenece al rango reservado para redes privadas según los estándares IPv4 (RFC 1918)?",
        "opciones": [
            "A) 198.51.100.1",
            "B) 172.16.5.4",
            "C) 8.8.8.8",
            "D) 150.200.10.1"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El rango 172.16.0.0 a 172.31.255.255 forma parte de los bloques de direcciones IPv4 privadas definidos en la RFC 1918 para su uso en redes locales."
    },
    {
        "id": 28,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué protocolo de red seguro se utiliza comúnmente para la administración remota de servidores mediante una interfaz de línea de comandos cifrada?",
        "opciones": [
            "A) HTTP",
            "B) Telnet",
            "C) FTP",
            "D) SSH"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "SSH (Secure Shell) reemplazó a Telnet al proporcionar un canal seguro sobre una red insegura mediante cifrado criptográfico robusto."
    },
    {
        "id": 29,
        "area": "Redes y Comunicaciones",
        "pregunta": "En relación con el modelo TCP/IP, ¿a qué capa del modelo OSI corresponde principalmente la Capa de Aplicación de TCP/IP?",
        "opciones": [
            "A) Capas de Sesión, Presentación y Aplicación",
            "B) Capas Física y de Enlace",
            "C) Únicamente a la Capa de Red",
            "D) Únicamente a la Capa de Transporte"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El modelo TCP/IP agrupa las funciones superiores del modelo OSI (Sesión, Presentación y Aplicación) dentro de su propia capa de Aplicación."
    },
    {
        "id": 30,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué métrica utiliza el protocolo de enrutamiento OSPF (Open Shortest Path First) para calcular la mejor ruta hacia un destino?",
        "opciones": [
            "A) Costo basado en el ancho de banda del enlace",
            "B) Confiabilidad de la línea",
            "C) Número de saltos",
            "D) Retardo máximo de propagación"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "OSPF utiliza un algoritmo de estado de enlace (Dijkstra) y calcula el costo de la ruta basándose inversamente en el ancho de banda de las interfaces involucradas."
    },
    {
        "id": 31,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Cuál es la función principal de la Memoria Virtual en un sistema operativo moderno?",
        "opciones": [
            "A) Incrementar la velocidad del reloj del procesador mediante caché de nivel 3.",
            "B) Comprimir los archivos ejecutables para ahorrar espacio en almacenamiento secundario.",
            "C) Aislar estrictamente los procesos del núcleo del sistema operativo.",
            "D) Permitir la ejecución de programas cuyos requerimientos de memoria exceden la memoria física RAM disponible utilizando espacio en disco."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La memoria virtual utiliza técnicas de paginación o segmentación para mapear la memoria virtual de los procesos a la memoria física RAM y al espacio de intercambio (swap/pagefile) en disco."
    },
    {
        "id": 32,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "En la administración de procesos, ¿qué condición se refiere a una situación en la que dos o más procesos compiten por el uso de un recurso compartido y el resultado final depende del orden exacto de ejecución?",
        "opciones": [
            "A) Inanición (Starvation)",
            "B) Bloqueo mutuo (Deadlock)",
            "C) Condición de carrera (Race Condition)",
            "D) Exclusión mutua"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una condición de carrera ocurre cuando múltiples hilos o procesos leen y escriben datos compartidos simultáneamente, de modo que el resultado depende de la temporización no determinista de la ejecución."
    },
    {
        "id": 33,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Cuáles son las cuatro condiciones necesarias para que se produzca un bloqueo mutuo (Deadlock) según Coffman?",
        "opciones": [
            "A) Exclusión mutua, Retención y espera, No expropiación, y Espera circular.",
            "B) Prioridad alta, Baja latencia, Sincronización y Hilos concurrentes.",
            "C) Multiprogramación, Paginación, Swapping y Interrupción.",
            "D) Lectura, Escritura, Modificación y Eliminación."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las cuatro condiciones de Coffman (exclusión mutua, retención y espera, no expropiación y espera circular) deben cumplirse simultáneamente para que ocurra un deadlock."
    },
    {
        "id": 34,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué componente de la arquitectura de Von Neumann se encarga de realizar operaciones aritméticas y lógicas?",
        "opciones": [
            "A) Registro de Instrucción",
            "B) Unidad Aritmético-Lógica (ALU)",
            "C) Unidad de Control (CU)",
            "D) Memoria Caché L2"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ALU (Arithmetic Logic Unit) es el circuito digital que efectúa operaciones aritméticas (suma, resta) y operaciones lógicas (AND, OR, NOT) dentro de la CPU."
    },
    {
        "id": 35,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es un hilo (thread) en el contexto de los sistemas operativos?",
        "opciones": [
            "A) La unidad básica de utilización de la CPU que forma parte de un proceso.",
            "B) Un archivo de configuración del sistema operativo almacenado en disco.",
            "C) Una partición lógica del disco duro para archivos de intercambio.",
            "D) Un protocolo de comunicación entre procesos distribuidos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un hilo es la unidad de ejecución más pequeña que un sistema operativo puede administrar; múltiples hilos pueden existir dentro de un mismo proceso, compartiendo sus recursos de memoria."
    },
    {
        "id": 36,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué algoritmo de planificación de CPU asigna un tiempo fijo (quantum) a cada proceso de manera circular, favoreciendo la interactividad?",
        "opciones": [
            "A) Planificación por prioridades",
            "B) First-Come, First-Served (FCFS)",
            "C) Shortest Job First (SJF)",
            "D) Round Robin (RR)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El algoritmo Round Robin (RR) está diseñado específicamente para sistemas de tiempo compartido, asignando a cada proceso porciones de tiempo equitativas (quantum)."
    },
    {
        "id": 37,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Cuál es el propósito de un semáforo en la programación de sistemas operativos?",
        "opciones": [
            "A) Gestionar el tráfico de paquetes en la tarjeta de red.",
            "B) Compilar código fuente a código de máquina.",
            "C) Sincronizar el acceso a recursos compartidos mediante variables protegidas y operaciones atómicas.",
            "D) Acelerar el acceso a la memoria caché del procesador."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un semáforo es una variable o abstracción de sincronización utilizada para controlar el acceso a un recurso compartido por múltiples procesos en un entorno concurrente."
    },
    {
        "id": 38,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es el thrashing (agitación) en un sistema operativo?",
        "opciones": [
            "A) Una falla en la tarjeta gráfica durante la renderización 3D.",
            "B) Una situación en la que el sistema pasa más tiempo intercambiando páginas de memoria entre la RAM y el disco que ejecutando trabajo útil.",
            "C) El desgaste prematuro de los discos de estado sólido por exceso de escritura.",
            "D) Un ataque de denegación de servicio a nivel de sockets."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El thrashing ocurre cuando hay insuficiencia de memoria física y el sistema operativo invierte la mayor parte de sus recursos en paginación constante (page fault overhead)."
    },
    {
        "id": 39,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "En el almacenamiento secundario, ¿qué ventaja ofrece un disco de estado sólido (SSD) sobre un disco duro mecánico tradicional (HDD)?",
        "opciones": [
            "A) Menor costo por gigabyte de almacenamiento.",
            "B) Mayor durabilidad teórica frente a escrituras continuas ilimitadas.",
            "C) Capacidad infinita de recuperación ante borrados físicos.",
            "D) Tiempos de acceso drásticamente menores y ausencia de partes móviles mecánicas."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los SSD utilizan memoria flash basada en semiconductores, lo que elimina la latencia rotacional y el tiempo de búsqueda mecánica característicos de los discos HDD."
    },
    {
        "id": 40,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué nivel de privilegios en los sistemas operativos modernos restringe el acceso directo al hardware y a las instrucciones de E/S por parte de las aplicaciones de usuario?",
        "opciones": [
            "A) Modo Kernel (Kernel Mode / Anillo 0)",
            "B) Modo Virtualizado",
            "C) Modo de Depuración",
            "D) Modo Usuario (User Mode / Anillo 3)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El modo usuario es un anillo de protección con privilegios limitados donde se ejecutan las aplicaciones normales para evitar que comprometan la estabilidad del sistema operativo."
    },
    {
        "id": 41,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal en el peor de los casos del algoritmo de ordenamiento Quicksort?",
        "opciones": [
            "A) O(log n)",
            "B) O(n)",
            "C) O(n^2)",
            "D) O(n log n)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Aunque Quicksort es O(n log n) en promedio, su peor caso ocurre cuando la elección del pivote es deficiente (ej. menor o mayor elemento consistentemente), resultando en O(n^2)."
    },
    {
        "id": 42,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué estructura de datos opera bajo el principio LIFO (Last In, First Out - Último en entrar, primero en salir)?",
        "opciones": [
            "A) Pila (Stack)",
            "B) Cola (Queue)",
            "C) Tabla Hash",
            "D) Árbol Binario de Búsqueda"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una pila (stack) permite inserciones y eliminaciones únicamente en un extremo llamado cima (top), siguiendo la política LIFO."
    },
    {
        "id": 43,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad de búsqueda en el peor de los casos para un Árbol Binario de Búsqueda (BST) desbalanceado con n elementos?",
        "opciones": [
            "A) O(n)",
            "B) O(n log n)",
            "C) O(1)",
            "D) O(log n)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Si un BST se degrada y se convierte esencialmente en una lista enlazada (desbalanceado), la búsqueda requiere recorrer cada nodo, resultando en O(n)."
    },
    {
        "id": 44,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué técnica algorítmica utiliza el algoritmo de búsqueda binaria en un arreglo ordenado?",
        "opciones": [
            "A) Fuerza bruta",
            "B) Programación dinámica",
            "C) Voraz (Greedy)",
            "D) Divide y vencerás"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La búsqueda binaria divide repetidamente a la mitad el espacio de búsqueda del arreglo ordenado, descartando la mitad que no contiene el valor buscado (Divide y vencerás)."
    },
    {
        "id": 45,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál estructura de datos es la más adecuada para implementar el recorrido en anchura (BFS) de un grafo?",
        "opciones": [
            "A) Pila (Stack)",
            "B) Lista simplemente enlazada",
            "C) Montículo binario (Heap)",
            "D) Cola (Queue)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El recorrido BFS (Breadth-First Search) explora los nodos por niveles, lo cual requiere una estructura FIFO (Cola) para almacenar los nodos visitados pendientes de explorar."
    },
    {
        "id": 46,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué caracteriza a una tabla hash con resolución de colisiones mediante encadenamiento (separate chaining)?",
        "opciones": [
            "A) Se eliminan los elementos duplicados descartando la última inserción.",
            "B) Se duplica el tamaño de la tabla cada vez que se inserta un nuevo elemento.",
            "C) Cada posición de la tabla almacena una lista enlazada con los elementos que colisionan en el mismo índice.",
            "D) Si ocurre una colisión, se busca la siguiente posición vacía de manera lineal."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En el encadenamiento separado, cada índice de la tabla hash apunta a una estructura secundaria (como una lista enlazada) donde se colocan todos los elementos que generan el mismo valor hash."
    },
    {
        "id": 47,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal de acceder a un elemento en un arreglo unidimensional conociendo su índice?",
        "opciones": [
            "A) O(n)",
            "B) O(log n)",
            "C) O(n^2)",
            "D) O(1)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Gracias a la asignación contigua de memoria y al cálculo directo de la dirección base más el desplazamiento del índice, el acceso a un arreglo es de tiempo constante O(1)."
    },
    {
        "id": 48,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué tipo de árbol auto-balanceado mantiene una diferencia de altura de como máximo 1 entre los subárboles izquierdo y derecho de cualquier nodo?",
        "opciones": [
            "A) Árbol de Expansión Mínima",
            "B) Árbol AVL",
            "C) Árbol B",
            "D) Árbol Rojo-Negro"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un árbol AVL es un árbol binario de búsqueda auto-balanceado donde el factor de equilibrio de cada nodo (diferencia de alturas) es -1, 0 o 1."
    },
    {
        "id": 49,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la diferencia fundamental entre un árbol binario y un árbol general?",
        "opciones": [
            "A) En el árbol binario cada nodo puede tener un máximo de dos hijos, mientras que en el general no hay ese límite.",
            "B) Los árboles binarios sólo almacenan números enteros.",
            "C) Los árboles generales requieren nodos raíz múltiples.",
            "D) Los árboles binarios no pueden tener ciclos, los generales sí."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Por definición, un árbol binario restringe el grado de salida de cada nodo a un máximo de dos (hijo izquierdo e hijo derecho)."
    },
    {
        "id": 50,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué algoritmo voraz (greedy) se utiliza para encontrar un árbol de expansión mínima en un grafo conexo y ponderado?",
        "opciones": [
            "A) Algoritmo de Dijkstra",
            "B) Algoritmo de Kruskal",
            "C) Algoritmo de Bellman-Ford",
            "D) Algoritmo de Floyd-Warshall"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Kruskal es un algoritmo voraz que encuentra un árbol de expansión mínima para un grafo conectado ponderado, añadiendo aristas de menor peso mientras no formen ciclos."
    },
    {
        "id": 51,
        "area": "Seguridad de la Información",
        "pregunta": "En el contexto de la seguridad informática, ¿qué comprende la triada CIA?",
        "opciones": [
            "A) Conectividad, Interoperabilidad y Autenticidad",
            "B) Control, Identificación y Auditoría",
            "C) Certificación, Implementación y Análisis",
            "D) Confidencialidad, Integridad y Disponibilidad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La triada CIA es el modelo fundamental de la seguridad de la información compuesto por Confidencialidad, Integridad y Disponibilidad."
    },
    {
        "id": 52,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué tipo de ataque informático consiste en interceptar las comunicaciones entre dos partes sin que ninguna de ellas se percate de que el canal ha sido vulnerado?",
        "opciones": [
            "A) Denegación de Servicio (DoS)",
            "B) Ataque de Hombre en el Medio (MitM - Man-in-the-Middle)",
            "C) Inyección SQL",
            "D) Ataque de Fuerza Bruta"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En un ataque MitM, el atacante se sitúa secretamente y puede reenviar y alterar las comunicaciones entre dos partes que creen comunicarse directamente entre sí."
    },
    {
        "id": 53,
        "area": "Seguridad de la Información",
        "pregunta": "¿Cuál es la principal característica de los algoritmos de criptografía simétrica (como AES)?",
        "opciones": [
            "A) No requieren ninguna clave para proteger los datos en tránsito.",
            "B) Utilizan dos claves diferentes: una pública para cifrar y otra privada para descifrar.",
            "C) Se basan en problemas matemáticos de factorización de números primos grandes.",
            "D) Utilizan la misma clave secreta tanto para el proceso de cifrado como para el de descifrado."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La criptografía simétrica emplea una única clave compartida entre el emisor y el receptor para cifrar y descifrar la información de manera eficiente."
    },
    {
        "id": 54,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué vulnerabilidad web permite a un atacante inyectar código malicioso (generalmente JavaScript) en páginas web vistas por otros usuarios?",
        "opciones": [
            "A) Cross-Site Scripting (XSS)",
            "B) Desbordamiento de búfer (Buffer Overflow)",
            "C) Falsificación de petición en sitios cruzados (CSRF)",
            "D) Inyección SQL (SQLi)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "XSS es una vulnerabilidad de seguridad que permite a los atacantes insertar scripts del lado del cliente en páginas web vistas por otros usuarios, comprometiendo sus sesiones o datos."
    },
    {
        "id": 55,
        "area": "Seguridad de la Información",
        "pregunta": "¿Cuál es el propósito de utilizar un certificado digital basado en infraestructura de clave pública (PKI)?",
        "opciones": [
            "A) Verificar la autenticidad de una entidad y asociar una clave pública a su identidad mediante una Autoridad de Certificación (CA).",
            "B) Aumentar la velocidad de transferencia de archivos en redes corporativas.",
            "C) Comprimir los paquetes de red para evitar la detección de intrusos.",
            "D) Reemplazar por completo el uso de contraseñas de usuario."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los certificados digitales vinculan una clave pública con la identidad del propietario, permitiendo comunicaciones cifradas y verificadas mediante una CA de confianza."
    },
    {
        "id": 56,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué técnica de defensa perimetral examina el tráfico de red basándose en reglas predefinidas y bloquea el tráfico no autorizado?",
        "opciones": [
            "A) Servidor Proxy inverso",
            "B) Sistema de balanceo de carga",
            "C) Firewall (Cortafuegos)",
            "D) Sistema de Detección de Intrusos (IDS pasivo)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un firewall actúa como barrera de control de acceso entre redes, filtrando paquetes de acuerdo con un conjunto de reglas de seguridad configuradas."
    },
    {
        "id": 57,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué es un ataque de Denegación de Servicio Distribuido (DDoS)?",
        "opciones": [
            "A) La instalación de software espía (spyware) en estaciones de trabajo corporativas.",
            "B) La suplantación de identidad mediante correos electrónicos fraudulentos.",
            "C) La extracción clandestina de bases de datos relacionales mediante comandos SQL alterados.",
            "D) El uso de múltiples sistemas comprometidos (botnets) para saturar los recursos de un servidor objetivo y dejarlo inaccesible."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un ataque DDoS involucra una red distribuida de máquinas zombis que abruman con peticiones masivas al servicio de destino, agotando su ancho de banda o capacidad de procesamiento."
    },
    {
        "id": 58,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué principio de seguridad de la información dicta que a los usuarios y programas se les debe otorgar únicamente los privilegios mínimos necesarios para realizar sus tareas?",
        "opciones": [
            "A) Principio de segregación de funciones",
            "B) Principio de menor privilegio (Principle of Least Privilege)",
            "C) Principio de no repudio",
            "D) Principio de defensa en profundidad"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El principio de menor privilegio reduce la superficie de ataque y el riesgo de daños accidentales o maliciosos al limitar los permisos de acceso al mínimo indispensable."
    },
    {
        "id": 59,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué tipo de malware se disfraza de software legítimo y útil pero contiene código malicioso oculto que se ejecuta al activarse?",
        "opciones": [
            "A) Troyano (Trojan Horse)",
            "B) Rootkit",
            "C) Ransomware",
            "D) Gusano (Worm)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un troyano es un malware que engaña al usuario haciéndose pasar por una aplicación benigna para lograr instalarse y abrir brechas de seguridad."
    },
    {
        "id": 60,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué función criptográfica de resumen (hash) es ampliamente conocida por generar un valor de 128 bits, aunque actualmente se considera criptográficamente rota por vulnerabilidades de colisión?",
        "opciones": [
            "A) RSA",
            "B) SHA-256",
            "C) SHA-3",
            "D) MD5"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "MD5 (Message-Digest Algorithm 5) genera un hash de 128 bits, pero debido a debilidades analíticas, se han encontrado colisiones prácticas, por lo que ya no es seguro para fines criptográficos."
    },
    {
        "id": 61,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué herramienta gráfica en la gestión de proyectos muestra las tareas programadas a lo largo del tiempo en un formato de barras horizontales?",
        "opciones": [
            "A) Diagrama de Clases UML",
            "B) Diagrama de Ishikawa",
            "C) Diagrama de Gantt",
            "D) Matriz RACI"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El diagrama de Gantt ilustra el cronograma de un proyecto, mostrando las fechas de inicio y fin de los elementos terminales y los grupos de tareas."
    },
    {
        "id": 62,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "En la administración de proyectos, ¿qué representa la 'Ruta Crítica'?",
        "opciones": [
            "A) El conjunto de riesgos con mayor probabilidad de ocurrencia e impacto financiero.",
            "B) Las tareas asignadas exclusivamente a los desarrolladores sénior del equipo.",
            "C) La secuencia de fases que requiere el menor presupuesto financiero.",
            "D) La secuencia de actividades dependientes que determina la duración total más corta posible del proyecto."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La ruta crítica es la cadena más larga de actividades dependientes en un proyecto; cualquier retraso en estas tareas afectará directamente la fecha de finalización del proyecto."
    },
    {
        "id": 63,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué marco de trabajo de gestión de servicios de TI (ITSM) se enfoca en alinear los servicios de TI con las necesidades cambiantes del negocio mediante un Sistema de Valor del Servicio?",
        "opciones": [
            "A) COBIT",
            "B) CMMI",
            "C) PMBOK",
            "D) ITIL 4"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "ITIL 4 (Information Technology Infrastructure Library) proporciona un marco para la gestión moderna de servicios de TI, enfatizando la co-creación de valor y la mejora continua."
    },
    {
        "id": 64,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Cuál es el propósito de una Matriz RACI en la gestión de proyectos y gobernanza de TI?",
        "opciones": [
            "A) Clasificar los riesgos tecnológicos según su criticidad.",
            "B) Medir el rendimiento de la red y el tiempo de respuesta del servidor.",
            "C) Definir y clarificar los roles y responsabilidades (Responsible, Accountable, Consulted, Informed) para cada tarea.",
            "D) Estimar el costo total del hardware y software requerido."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La matriz RACI asegura que no haya ambigüedad sobre quién es el responsable de ejecutar, quién rinde cuentas, a quién se consulta y a quién se informa en cada actividad."
    },
    {
        "id": 65,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "En el marco COBIT, ¿cuál es el objetivo principal de la gobernanza de tecnologías de la información en una organización?",
        "opciones": [
            "A) Escribir código fuente libre de errores de sintaxis en el menor tiempo posible.",
            "B) Sustituir el departamento de recursos humanos por sistemas automatizados.",
            "C) Asegurar que las inversiones en TI generen valor y que los riesgos sean mitigados adecuadamente.",
            "D) Configurar los enrutadores y switches de la red corporativa."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "COBIT proporciona directrices para la gobernanza y gestión de la empresa de TI, asegurando la alineación estratégica, la entrega de valor y la gestión de riesgos."
    },
    {
        "id": 66,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué modelo de madurez evalúa los procesos de una organización y los clasifica en niveles desde Inicial hasta Optimizado para mejorar la calidad del desarrollo de software?",
        "opciones": [
            "A) TOGAF",
            "B) Scrum Guide",
            "C) CMMI (Capability Maturity Model Integration)",
            "D) ISO/IEC 27001"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "CMMI ayuda a las organizaciones a mejorar sus procesos de rendimiento mediante la adopción de prácticas evolutivas estructuradas en niveles de madurez."
    },
    {
        "id": 67,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "En la gestión de riesgos de proyectos, ¿qué estrategia consiste en transferir el impacto financiero de un riesgo a un tercero, como una póliza de seguros?",
        "opciones": [
            "A) Aceptación",
            "B) Evitación",
            "C) Mitigación",
            "D) Transferencia"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La transferencia de riesgos implica trasladar la responsabilidad y el impacto económico del riesgo a otra parte (ej. seguros o contratos de externalización)."
    },
    {
        "id": 68,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué indicador financiero compara el valor actual de los flujos de caja futuros esperados con la inversión inicial para evaluar la rentabilidad de un proyecto de TI?",
        "opciones": [
            "A) Tasa Interna de Retorno (TIR / IRR)",
            "B) Periodo de Recuperación de la Inversión (Payback)",
            "C) Valor Presente Neto (VPN / NPV)",
            "D) Retorno sobre la Inversión (ROI)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El VPN calcula el valor presente de los flujos de caja netos futuros de un proyecto descontados a una tasa específica, determinando si genera valor económico."
    },
    {
        "id": 69,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué es el 'Alcance' (Scope) de un proyecto en la dirección de proyectos según el PMBOK?",
        "opciones": [
            "A) La cantidad de miembros que componen el equipo de trabajo.",
            "B) El plazo máximo de entrega estipulado en el contrato.",
            "C) El trabajo necesario para entregar un producto, servicio o resultado con las características y funciones especificadas.",
            "D) El presupuesto total autorizado por la alta dirección."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El alcance define los límites del proyecto, detallando exactamente qué trabajo se incluye y qué se excluye para cumplir con los objetivos del cliente."
    },
    {
        "id": 70,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Cuál es el propósito del marco TOGAF en la arquitectura empresarial?",
        "opciones": [
            "A) Gestionar incidentes de seguridad y vulnerabilidades web en tiempo real.",
            "B) Proporcionar un método detallado y un conjunto de herramientas para diseñar, planificar e implementar una arquitectura empresarial.",
            "C) Automatizar las pruebas unitarias en pipelines de integración continua.",
            "D) Configurar servidores web de alta disponibilidad en clústeres Linux."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "TOGAF (The Open Group Architecture Framework) es un estándar de la industria para la arquitectura empresarial que ayuda a alinear la TI con las metas de negocio."
    },
    {
        "id": 71,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué patrón de comportamiento se utiliza para definir una familia de algoritmos, encapsular cada uno de ellos y hacerlos intercambiables en tiempo de ejecución?",
        "opciones": [
            "A) Patrón Estrategia (Strategy)",
            "B) Patrón Adaptador",
            "C) Patrón Fábrica Abstracta",
            "D) Patrón Observador"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El patrón Estrategia permite que el algoritmo varíe independientemente de los clientes que lo utilizan, permitiendo seleccionar la lógica adecuada dinámicamente."
    },
    {
        "id": 72,
        "area": "Ingeniería de Software",
        "pregunta": "En la integración continua y despliegue continuo (CI/CD), ¿qué fase evalúa el código automáticamente cada vez que se realiza un commit al repositorio?",
        "opciones": [
            "A) Negociación de contratos con proveedores",
            "B) Diseño de prototipos en papel",
            "C) Auditoría física de servidores en centro de datos",
            "D) Compilación y pruebas automatizadas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "CI/CD automatiza la compilación y ejecución de pruebas unitarias e de integración cada vez que los desarrolladores integran código nuevo, detectando fallos tempranamente."
    },
    {
        "id": 73,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué métrica evalúa el grado de interdependencia entre distintos módulos de software en un sistema?",
        "opciones": [
            "A) Acoplamiento (Coupling)",
            "B) Complejidad ciclomática",
            "C) Abstracción modular",
            "D) Cohesión"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El acoplamiento mide el grado de dependencia mutua entre módulos; un buen diseño busca un bajo acoplamiento y una alta cohesión."
    },
    {
        "id": 74,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el objetivo de realizar pruebas de estrés (Stress Testing) en una aplicación de software?",
        "opciones": [
            "A) Comprobar la correcta ortografía de las interfaces de usuario.",
            "B) Verificar que el código fuente cumpla con los estándares de estilo.",
            "C) Evaluar el comportamiento del sistema más allá de los límites normales de operación para determinar su punto de ruptura.",
            "D) Medir la satisfacción del cliente final mediante encuestas."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las pruebas de estrés someten al sistema a cargas extremas para comprobar su estabilidad, resiliencia y cómo maneja los fallos bajo situaciones límite."
    },
    {
        "id": 75,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué principio de diseño de software postula que las entidades deben estar abiertas para su extensión, pero cerradas para su modificación?",
        "opciones": [
            "A) Principio DRY (Don't Repeat Yourself)",
            "B) Principio abierto/cerrado (OCP)",
            "C) Principio de sustitución de Liskov",
            "D) Principio KISS (Keep It Simple, Stupid)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El Principio Abierto/Cerrado (OCP) indica que se debe poder extender el comportamiento de una clase sin modificar su código fuente existente."
    },
    {
        "id": 76,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es la diferencia fundamental entre un procedimiento almacenado (Stored Procedure) y una función en SQL?",
        "opciones": [
            "A) Las funciones deben retornar un valor obligatoriamente y pueden usarse dentro de consultas SELECT, mientras que los procedimientos almacenados ejecutan lógica de negocio compleja y retornan valores mediante parámetros de salida.",
            "B) Los procedimientos almacenados se ejecutan exclusivamente en la memoria RAM del cliente.",
            "C) Las funciones no pueden aceptar parámetros de entrada bajo ninguna circunstancia.",
            "D) Los procedimientos almacenados son exclusivos de las bases de datos NoSQL."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las funciones devuelven un valor escalar o tabla y pueden invocarse en expresiones SQL; los procedimientos almacenados ejecutan bloques de código procedural con múltiples salidas y operaciones DML."
    },
    {
        "id": 77,
        "area": "Bases de Datos",
        "pregunta": "¿Qué significa que un sistema de base de datos cumpla con el nivel de aislamiento 'Serializable'?",
        "opciones": [
            "A) Las tablas no requieren índices B-Tree.",
            "B) Las transacciones se ejecutan secuencialmente una tras otra, garantizando el aislamiento total frente a cualquier anomalía de concurrencia.",
            "C) Se permite la lectura sucia para acelerar las consultas analíticas masivas.",
            "D) Los datos se almacenan de manera serializada en archivos de texto plano."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El nivel serializable es el más restrictivo; asegura que el resultado de la ejecución concurrente de transacciones sea exactamente el mismo que si se hubieran ejecutado de forma serial (una a la vez)."
    },
    {
        "id": 78,
        "area": "Bases de Datos",
        "pregunta": "En bases de datos NoSQL orientadas a documentos (como MongoDB), ¿cómo se estructuran habitualmente los datos?",
        "opciones": [
            "A) En tuplas relacionales normalizadas hasta la tercera forma normal.",
            "B) En tablas con filas y columnas estrictamente tipificadas.",
            "C) En nodos y aristas ponderadas.",
            "D) En documentos JSON o BSON semiestructurados y flexibles."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las bases de datos orientadas a documentos almacenan datos en formatos como JSON o BSON, permitiendo esquemas dinámicos y colecciones autodescriptivas."
    },
    {
        "id": 79,
        "area": "Bases de Datos",
        "pregunta": "¿Qué comando en SQL se utiliza para deshacer los cambios realizados durante una transacción que aún no ha sido confirmada?",
        "opciones": [
            "A) GRANT",
            "B) REVOKE",
            "C) ROLLBACK",
            "D) COMMIT"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "ROLLBACK revierte todas las modificaciones de la transacción actual, restaurando la base de datos al estado anterior al inicio de dicha transacción."
    },
    {
        "id": 80,
        "area": "Bases de Datos",
        "pregunta": "¿Qué es una vista (VIEW) en una base de datos relacional?",
        "opciones": [
            "A) Un índice especial para acelerar búsquedas de texto.",
            "B) Una interfaz gráfica web para administrar usuarios y permisos.",
            "C) Una consulta SELECT almacenada en la base de datos que se comporta como una tabla virtual.",
            "D) Una copia física duplicada de una tabla almacenada en un disco secundario diferente."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una vista es una tabla virtual basada en el resultado de una consulta SQL; no almacena los datos físicamente por sí misma (excepto en vistas materializadas), simplificando consultas complejas y seguridad."
    },
    {
        "id": 81,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué protocolo de la capa de aplicación se utiliza para la transferencia segura de hipertexto en la Web mediante cifrado TLS/SSL?",
        "opciones": [
            "A) HTTPS",
            "B) HTTP",
            "C) FTP",
            "D) SMTP"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "HTTPS (HyperText Transfer Protocol Secure) combina HTTP con protocolos criptográficos como TLS para garantizar la confidencialidad e integridad de la navegación web."
    },
    {
        "id": 82,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es el propósito principal de una máscara de subred en una red IP?",
        "opciones": [
            "A) Cifrar los paquetes de datos para evitar escuchas clandestinas.",
            "B) Asignar nombres de dominio automáticos a las computadoras.",
            "C) Acelerar la velocidad de transmisión de los cables de fibra óptica.",
            "D) Determinar qué parte de una dirección IP identifica a la red y qué parte identifica al host específico."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La máscara de subred divide la dirección IP de 32 bits en dos porciones: el identificador de red y el identificador de host."
    },
    {
        "id": 83,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué protocolo de la capa de red se utiliza para enviar mensajes de error y operational feedback, siendo la base de herramientas como 'ping' y 'traceroute'?",
        "opciones": [
            "A) ARP",
            "B) ICMP",
            "C) TCP",
            "D) UDP"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "ICMP (Internet Control Message Protocol) es utilizado por los dispositivos de red para enviar mensajes de diagnóstico y error, como cuando un host o router no es alcanzable."
    },
    {
        "id": 84,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Qué función cumple el protocolo ARP (Address Resolution Protocol) en una red local?",
        "opciones": [
            "A) Resolver nombres de sitios web a direcciones IP públicas.",
            "B) Traducir una dirección IP lógica de capa 3 a una dirección física MAC de capa 2.",
            "C) Cifrar las sesiones de usuario en la capa de transporte.",
            "D) Asignar direcciones IP dinámicas a los equipos que se conectan por Wi-Fi."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "ARP permite conocer la dirección física (MAC) correspondiente a una dirección IP conocida dentro de una red de área local Ethernet."
    },
    {
        "id": 85,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es la longitud en bits de una dirección IPv6?",
        "opciones": [
            "A) 64 bits",
            "B) 128 bits",
            "C) 32 bits",
            "D) 256 bits"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "IPv6 utiliza direcciones de 128 bits expresadas en formato hexadecimal, diseñadas para superar el agotamiento de direcciones de IPv4 (32 bits)."
    },
    {
        "id": 86,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué política de reemplazo de páginas elimina la página que no ha sido utilizada durante el período de tiempo más largo cuando ocurre un fallo de página?",
        "opciones": [
            "A) Aleatoria",
            "B) LRU (Least Recently Used)",
            "C) FIFO (First-In, First-Out)",
            "D) Óptima"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El algoritmo LRU (Menos Recientemente Utilizado) se basa en el principio de localidad temporal, asumiendo que las páginas usadas recientemente seguirán siendo usadas pronto."
    },
    {
        "id": 87,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es la segmentación de memoria en un sistema operativo?",
        "opciones": [
            "A) La separación de los privilegios entre el núcleo y las aplicaciones.",
            "B) El almacenamiento temporal de datos en los sectores defectuosos del disco duro.",
            "C) La división estricta de la memoria RAM en páginas de tamaño fijo de 4 KB.",
            "D) La división de la memoria en bloques de tamaño variable basados en las unidades lógicas del programa (como subrutinas, pilas o datos)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La segmentación organiza la memoria en segmentos lógicos de tamaño variable, reflejando la estructura del programa del usuario (código, datos, pila)."
    },
    {
        "id": 88,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es una interrupción (Interrupt) en la arquitectura de computadoras?",
        "opciones": [
            "A) La pausa deliberada en la ejecución de código para optimizar el consumo de energía.",
            "B) Un fallo físico en los transistores del procesador que requiere reemplazo.",
            "C) Una señal enviada al procesador por hardware o software para indicar que un evento requiere atención inmediata.",
            "D) Un comando de apagado de emergencia del sistema operativo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las interrupciones permiten al procesador suspender temporalmente su tarea actual para atender eventos urgentes (como E/S de teclado, red o temporizadores) mediante rutinas de servicio de interrupción (ISR)."
    },
    {
        "id": 89,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Cuál es el propósito principal de la memoria caché en la jerarquía de memoria de una computadora?",
        "opciones": [
            "A) Proveer almacenamiento de respaldo ante fallos de energía.",
            "B) Almacenar archivos multimedia de forma permanente.",
            "C) Reducir el tiempo medio de acceso a los datos almacenados en la memoria principal (RAM) utilizando memoria estática más rápida y cercana a la CPU.",
            "D) Gestionar las conexiones de red inalámbrica."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La memoria caché (L1, L2, L3) almacena copias de datos de uso frecuente de la RAM, reduciendo significativamente la latencia de acceso del procesador."
    },
    {
        "id": 90,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es un sistema operativo de tiempo real (RTOS)?",
        "opciones": [
            "A) Un sistema operativo optimizado para renderizar gráficos 3D en tiempo real.",
            "B) Un sistema que solo funciona en computadoras cuánticas.",
            "C) Un sistema operativo sin interfaz gráfica de usuario.",
            "D) Un sistema diseñado para procesar datos y eventos con restricciones de tiempo deterministas y estrictas (plazos de respuesta garantizados)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los RTOS se utilizan en sistemas embebidos críticos donde el retraso en el procesamiento puede causar fallos catastróficos (ej. sistemas de frenos ABS o marcapasos)."
    },
    {
        "id": 91,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal del algoritmo de ordenamiento Mergesort en el peor de los casos?",
        "opciones": [
            "A) O(log n)",
            "B) O(n^2)",
            "C) O(n)",
            "D) O(n log n)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Mergesort utiliza la técnica de divide y vencerás dividiendo recursivamente el arreglo y fusionándolo de forma ordenada, garantizando siempre una complejidad O(n log n)."
    },
    {
        "id": 92,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué operación básica caracteriza a una Cola (Queue)?",
        "opciones": [
            "A) Búsqueda dicotómica en arreglos bidimensionales.",
            "B) FIFO: Inserción por el extremo trasero (enqueue) y eliminación por el frente (dequeue).",
            "C) LIFO: Inserción y eliminación exclusivamente en la cima.",
            "D) Acceso aleatorio mediante índices numéricos en O(1)."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las colas operan bajo la política FIFO (First-In, First-Out), donde los elementos se añaden por la parte trasera y se extraen por la delantera."
    },
    {
        "id": 93,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué recorrido de un Árbol Binario visita primero el nodo raíz, luego el subárbol izquierdo y finalmente el subárbol derecho?",
        "opciones": [
            "A) Recorrido en preorden (Pre-order)",
            "B) Recorrido en orden (In-order)",
            "C) Recorrido por anchura",
            "D) Recorrido en postorden (Post-order)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El recorrido en preorden sigue el esquema Raíz -> Izquierda -> Derecha, útil para clonar árboles o generar expresiones prefijas."
    },
    {
        "id": 94,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué es un Grafo Dirigido (Dígrafo)?",
        "opciones": [
            "A) Un árbol binario con múltiples raíces.",
            "B) Un grafo que no contiene ciclos ni bucles.",
            "C) Un grafo cuyas aristas tienen una dirección asociada (de un vértice a otro).",
            "D) Un grafo donde todas las aristas tienen el mismo peso numérico."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En un dígrafo, las aristas son flechas unidireccionales que indican un sentido específico en la relación entre los vértices."
    },
    {
        "id": 95,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la principal ventaja de utilizar una lista enlazada frente a un arreglo estático?",
        "opciones": [
            "A) Las listas enlazadas permiten inserciones y eliminaciones eficientes de elementos sin requerir el desplazamiento masivo de memoria.",
            "B) El acceso a cualquier elemento mediante índice es más rápido en la lista enlazada.",
            "C) Las listas enlazadas ocupan menor espacio de almacenamiento en memoria RAM.",
            "D) Las listas enlazadas no requieren apuntadores ni referencias."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "A diferencia de los arreglos contiguos, las listas enlazadas permiten inserciones y borrados dinámicos actualizando únicamente los punteros adyacentes."
    },
    {
        "id": 96,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué principio de seguridad se vulnera cuando un usuario niega haber enviado un mensaje o realizado una transacción digital?",
        "opciones": [
            "A) Disponibilidad",
            "B) Integridad",
            "C) No repudio (Non-repudiation)",
            "D) Confidencialidad"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El no repudio garantiza que una entidad no pueda negar la autoría de una acción o transmisión de datos, habitualmente logrado mediante firmas digitales."
    },
    {
        "id": 97,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué es un ataque de inyección SQL (SQL Injection)?",
        "opciones": [
            "A) El robo de contraseñas mediante ingeniería social telefónica.",
            "B) Un ataque que intercepta paquetes de red mediante hardware modificado.",
            "C) La inserción de código SQL malicioso en los campos de entrada de una aplicación para manipular la ejecución de consultas en la base de datos.",
            "D) La sobrecarga del servidor de base de datos con consultas repetitivas hasta agotar la memoria."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "SQLi ocurre cuando una aplicación no sanea adecuadamente las entradas del usuario, permitiendo que comandos SQL arbitrarios sean interpretados y ejecutados por el motor de base de datos."
    },
    {
        "id": 98,
        "area": "Seguridad de la Información",
        "pregunta": "¿Cuál es el objetivo de un sistema IDS (Intrusion Detection System)?",
        "opciones": [
            "A) Monitorear el tráfico de red o del sistema en busca de actividades sospechosas o violaciones de políticas, generando alertas.",
            "B) Sustituir las funciones de respaldo y recuperación de datos.",
            "C) Bloquear activamente y destruir los paquetes maliciosos en la red.",
            "D) Cifrar los discos duros de los servidores corporativos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un IDS analiza pasiva o activamente el tráfico en busca de patrones de ataque conocidos o anomalías, alertando a los administradores de seguridad (a diferencia de un IPS que bloquea activamente)."
    },
    {
        "id": 99,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué caracteriza al cifrado asimétrico en comparación con el simétrico?",
        "opciones": [
            "A) Requiere que ambas partes compartan una clave secreta a través de un canal seguro previo.",
            "B) No utiliza claves matemáticas complejas.",
            "C) Es computacionalmente mucho más rápido para cifrar grandes volúmenes de datos.",
            "D) Utiliza una clave pública para cifrar y una clave privada independiente para descifrar."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El cifrado asimétrico resuelve el problema de la distribución de claves usando un par de claves matemáticamente vinculadas: una pública y una privada."
    },
    {
        "id": 100,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué es el ransomware?",
        "opciones": [
            "A) Software de optimización de rendimiento para sistemas Windows.",
            "B) Un protocolo de respaldo automático en la nube.",
            "C) Un tipo de malware que cifra los archivos de la víctima y exige un pago de rescate (generalmente en criptomonedas) a cambio de la clave de descifrado.",
            "D) Un programa publicitario no deseado que abre pestañas emergentes en el navegador."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El ransomware secuestra digitalmente los datos de la víctima mediante cifrado fuerte, bloqueando el acceso al sistema hasta que se efectúa una extorsión económica."
    },
    {
        "id": 101,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué metodología ágil se basa en la limitación explícita del trabajo en curso (WIP - Work in Progress) utilizando tableros visuales?",
        "opciones": [
            "A) Extreme Programming (XP)",
            "B) Kanban",
            "C) Scrum",
            "D) Cascada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Kanban es un método de gestión de flujo de trabajo visual que limita el trabajo en curso para identificar cuellos de botella y optimizar la entrega continua."
    },
    {
        "id": 102,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué es el Valor Ganado (Earned Value Management - EVM) en la dirección de proyectos?",
        "opciones": [
            "A) El cálculo exclusivo de los ingresos netos generados tras la venta del software.",
            "B) El salario acumulado de los desarrolladores durante el sprint.",
            "C) Una técnica para medir el rendimiento del proyecto combinando alcance, tiempo y costos.",
            "D) La estimación inicial de horas hombre requeridas."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "EVM es una metodología de control de proyectos que integra mediciones de alcance, cronograma y costo para evaluar el progreso y predecir el desempeño futuro."
    },
    {
        "id": 103,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Cuál es la función del proceso de 'Gestión de Incidentes' en ITIL?",
        "opciones": [
            "A) Investigar las causas raíz de todos los fallos tecnológicos en la infraestructura.",
            "B) Restaurar la operación normal del servicio lo antes posible minimizando el impacto en el negocio.",
            "C) Diseñar la arquitectura de seguridad perimetral de la red.",
            "D) Comprar nuevo hardware y licencias de software corporativo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El objetivo de la gestión de incidentes en ITIL es resolver las interrupciones del servicio tan pronto como sea posible para restaurar la productividad del negocio."
    },
    {
        "id": 104,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué es un Acuerdo de Nivel de Servicio (SLA - Service Level Agreement)?",
        "opciones": [
            "A) Un manual de estilo de programación para desarrolladores junior.",
            "B) Un contrato legal entre un proveedor de servicios de TI y el cliente que define el nivel de servicio esperado (ej. disponibilidad, tiempos de respuesta).",
            "C) Una auditoría financiera anual de los activos de la empresa.",
            "D) Un documento de arquitectura de software en UML."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un SLA establece métricas cuantitativas y cualitativas acordadas para medir la calidad y desempeño del servicio prestado."
    },
    {
        "id": 105,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué técnica de estimación ágil utiliza la secuencia de Fibonacci modificada (1, 2, 3, 5, 8, 13...) para estimar el esfuerzo relativo de las historias de usuario?",
        "opciones": [
            "A) Estimación por Analogía Histórica",
            "B) Modelo COCOMO II",
            "C) Planning Poker",
            "D) Análisis de Puntos de Función"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Planning Poker es una técnica de estimación basada en consenso utilizada en Scrum, donde el equipo utiliza cartas con números de Fibonacci para dimensionar la complejidad relativa."
    },
    {
        "id": 106,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué práctica de Extreme Programming (XP) consiste en que dos programadores trabajen juntos en una misma estación de trabajo, uno escribiendo el código y el otro revisando cada línea simultáneamente?",
        "opciones": [
            "A) Integración continua",
            "B) Refactorización extrema",
            "C) Desarrollo guiado por pruebas (TDD)",
            "D) Programación en pareja (Pair Programming)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La programación en pareja mejora la calidad del código, fomenta la transferencia de conocimiento y reduce la tasa de defectos mediante la revisión continua en tiempo real."
    },
    {
        "id": 107,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué es el Desarrollo Guiado por Pruebas (TDD - Test-Driven Development)?",
        "opciones": [
            "A) Un proceso donde las pruebas unitarias se escriben antes de escribir el código de producción funcional.",
            "B) Una fase exclusiva del modelo en cascada.",
            "C) La subcontratación de las pruebas de software a una empresa externa.",
            "D) Un enfoque donde las pruebas de aceptación se realizan únicamente al finalizar el proyecto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "TDD sigue el ciclo: escribir una prueba que falle, escribir el código mínimo para pasar la prueba, y refactorizar el código resultante (Red-Green-Refactor)."
    },
    {
        "id": 108,
        "area": "Bases de Datos",
        "pregunta": "¿Qué es la replicación en bases de datos distribuidas?",
        "opciones": [
            "A) El proceso de copiar y sincronizar datos de una base de datos a múltiples servidores o nodos para mejorar la disponibilidad y tolerancia a fallos.",
            "B) La conversión de tablas relacionales en archivos CSV planos.",
            "C) La eliminación de registros duplicados en la tercera forma normal.",
            "D) El respaldo manual diario de la base de datos en una cinta magnética."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La replicación distribuye copias de los datos en diferentes servidores, garantizando alta disponibilidad, balanceo de lectura y protección ante la caída de un nodo."
    },
    {
        "id": 109,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es la función de un proxy inverso en una arquitectura web?",
        "opciones": [
            "A) Ocultar la identidad de los clientes que navegan por Internet hacia servidores externos.",
            "B) Proveer direcciones IP dinámicas a los equipos de una red local.",
            "C) Recibir peticiones de Internet en nombre de los clientes y reenviarlas a servidores internos de backend, encargándose del balanceo de carga y terminación SSL.",
            "D) Bloquear la resolución de nombres DNS maliciosos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un proxy inverso se sitúa frente a los servidores web de backend, actuando como intermediario para las peticiones de los clientes, mejorando la seguridad, rendimiento y distribución del tráfico."
    },
    {
        "id": 110,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es el Hypervisor (Monitor de Máquinas Virtuales) en la tecnología de virtualización?",
        "opciones": [
            "A) Un componente de hardware que acelera los gráficos en 3D.",
            "B) El software o firmware que crea, ejecuta y administra máquinas virtuales, permitiendo que múltiples sistemas operativos compartan los recursos de un servidor físico.",
            "C) Un sistema de archivos cifrado para discos SSD.",
            "D) Un protocolo de red para transferencia rápida de archivos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El hipervisor abstrae los recursos físicos del hardware (CPU, memoria, almacenamiento), permitiendo la virtualización completa de servidores y la ejecución aislada de múltiples sistemas operativos invitados."
    },
    {
        "id": 111,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la característica principal de un Árbol B (B-Tree) utilizado habitualmente en sistemas de archivos y bases de datos?",
        "opciones": [
            "A) No permite inserciones dinámicas de datos.",
            "B) Almacena todos los datos únicamente en las hojas del árbol.",
            "C) Es un árbol binario estricto donde cada nodo tiene exactamente dos hijos.",
            "D) Es un árbol auto-balanceado de búsqueda donde cada nodo puede tener múltiples hijos, optimizado para minimizar accesos a disco en almacenamiento secundario."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los árboles B están diseñados para sistemas que leen y escriben bloques grandes de datos (como discos), manteniendo un factor de ramificación alto para reducir la altura del árbol y los accesos a disco."
    },
    {
        "id": 112,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué es la ingeniería social en el contexto de la ciberseguridad?",
        "opciones": [
            "A) Un ataque de denegación de servicio distribuido contra redes sociales.",
            "B) El uso de técnicas de manipulación psicológica a humanos para engañarlos y lograr que revelen información confidencial o entreguen acceso a sistemas.",
            "C) La programación de bots conversacionales con inteligencia artificial.",
            "D) La construcción de redes sociales corporativas seguras."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ingeniería social explota el factor humano (confianza, miedo, descuido) mediante técnicas como phishing o pretexting para burlar controles técnicos de seguridad."
    },
    {
        "id": 113,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué es una Retrospectiva de Sprint en el marco de trabajo Scrum?",
        "opciones": [
            "A) Una oportunidad para que el equipo de Scrum se inspeccione a sí mismo y cree un plan de mejoras para el próximo sprint en cuanto a procesos y relaciones.",
            "B) La evaluación de desempeño salarial de los desarrolladores.",
            "C) La planeación de las tareas técnicas del siguiente sprint.",
            "D) Una reunión donde el equipo revisa el incremento de producto con los interesados (stakeholders)."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La retrospectiva del sprint es el evento donde el equipo Scrum reflexiona sobre su forma de trabajar, identificando qué salió bien y qué áreas de mejora implementar."
    },
    {
        "id": 114,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué tipo de mantenimiento de software se realiza para corregir errores y defectos encontrados después de que el sistema ha sido entregado y desplegado en producción?",
        "opciones": [
            "A) Mantenimiento Preventivo",
            "B) Mantenimiento Correctivo",
            "C) Mantenimiento Perfectivo",
            "D) Mantenimiento Adaptativo"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El mantenimiento correctivo se enfoca en la identificación y resolución de fallos o bugs reportados por los usuarios tras la puesta en marcha del software."
    },
    {
        "id": 115,
        "area": "Bases de Datos",
        "pregunta": "¿Qué es la desnormalización en el diseño de bases de datos?",
        "opciones": [
            "A) La introducción intencional de redundancia en el esquema relacional para mejorar el rendimiento de lectura en consultas complejas y frecuentes.",
            "B) La conversión de bases de datos relacionales a archivos de Excel.",
            "C) El proceso de eliminar todas las claves primarias de las tablas.",
            "D) La eliminación de los índices B-Tree para ahorrar espacio."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La desnormalización combina tablas para evitar costosas operaciones JOIN en tiempo de ejecución, optimizando el rendimiento de lectura a cambio de duplicar datos y requerir mayor control de escritura."
    },
    {
        "id": 116,
        "area": "Redes y Comunicaciones",
        "pregunta": "¿Cuál es el propósito del protocolo NAT (Network Address Translation)?",
        "opciones": [
            "A) Enrutar paquetes entre redes de área extensa mediante fibra óptica.",
            "B) Cifrar el tráfico inalámbrico en redes Wi-Fi públicas.",
            "C) Asignar nombres de dominio automáticos a servidores web.",
            "D) Traducir direcciones IP privadas de una red local a una o varias direcciones IP públicas enrutables en Internet."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "NAT permite que múltiples dispositivos en una red local con direcciones IP privadas compartan una única dirección IP pública para acceder a Internet."
    },
    {
        "id": 117,
        "area": "Sistemas Operativos y Arquitectura",
        "pregunta": "¿Qué es un archivo de volcado de memoria (Core Dump / Crash Dump)?",
        "opciones": [
            "A) Un archivo de configuración del gestor de arranque.",
            "B) La memoria caché liberada al apagar el procesador.",
            "C) Un respaldo completo del disco duro en un servidor secundario.",
            "D) Un registro que contiene el estado de la memoria de trabajo de un programa en el momento exacto en que este falló o se cerró de forma anormal."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El core dump captura el contenido de la memoria del proceso al producirse un fallo fatal, permitiendo a los desarrolladores depurar la causa raíz del error."
    },
    {
        "id": 118,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué algoritmo de ordenamiento compara elementos adyacentes y los intercambia si están en el orden incorrecto, repitiendo el proceso hasta que la lista esté ordenada?",
        "opciones": [
            "A) Quicksort",
            "B) Mergesort",
            "C) Ordenamiento burbuja (Bubble Sort)",
            "D) Heapsort"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Bubble sort es un algoritmo sencillo de ordenamiento por comparación con una complejidad temporal en el peor de los casos de O(n^2), adecuado para conjuntos de datos muy pequeños o fines educativos."
    },
    {
        "id": 119,
        "area": "Seguridad de la Información",
        "pregunta": "¿Qué es un ataque de desbordamiento de búfer (Buffer Overflow)?",
        "opciones": [
            "A) Una vulnerabilidad donde un programa escribe más datos en un bloque de memoria (búfer) de los que puede contener, sobrescribiendo zonas de memoria adyacentes y potencialmente ejecutando código arbitrario.",
            "B) La saturación de la memoria RAM al abrir demasiadas pestañas en el navegador.",
            "C) La interrupción de paquetes TCP por congestión en el router.",
            "D) El llenado total del espacio en disco duro por archivos temporales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El desbordamiento de búfer ocurre cuando no se validan adecuadamente los límites de los datos de entrada, permitiendo a los atacantes corromper la pila de ejecución y secuestrar el flujo del programa."
    },
    {
        "id": 120,
        "area": "Gestión de Proyectos de TI",
        "pregunta": "¿Qué representa la 'Deuda Técnica' en el desarrollo de software?",
        "opciones": [
            "A) Los préstamos bancarios solicitados para financiar infraestructura de centros de datos.",
            "B) El tiempo que los desarrolladores pasan en reuniones de planeación.",
            "C) El costo financiero de adquirir licencias de software comercial.",
            "D) El costo implícito de un software de menor calidad resultante de priorizar soluciones rápidas o entregas apresuradas sobre un diseño de código limpio y sostenible."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La deuda técnica es una metáfora acuñada por Ward Cunningham que describe el costo futuro acumulado por tomar atajos en el desarrollo de software, los cuales eventualmente deben pagarse mediante refactorización."
    }
];