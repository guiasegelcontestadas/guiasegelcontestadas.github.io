const bancoPreguntas = [
    {
        "id": 1,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal en el peor de los casos para el algoritmo de ordenamiento Quicksort cuando se selecciona consistentemente un elemento subóptimo como pivote?",
        "opciones": [
            "A) O(n log n)",
            "B) O(log n)",
            "C) O(n^2)",
            "D) O(n)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "En el peor de los casos, por ejemplo cuando el arreglo ya está ordenado y se elige el primer o último elemento como pivote, Quicksort divide el problema en subproblemas de tamaño n-1, resultando en una complejidad de O(n^2)."
    },
    {
        "id": 2,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué estructura de datos es la más adecuada para implementar un algoritmo de búsqueda en anchura (BFS) en un grafo no dirigido?",
        "opciones": [
            "A) Pila (Stack)",
            "B) Tabla hash",
            "C) Árbol binario de búsqueda",
            "D) Cola (Queue)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El algoritmo BFS requiere explorar los nodos nivel por nivel, procesando los vértices en el orden en que fueron descubiertos, lo cual se logra utilizando una estructura FIFO (First In, First Out), es decir, una Cola."
    },
    {
        "id": 3,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la propiedad fundamental que debe cumplir un Árbol Rojinegro para asegurar operaciones de búsqueda, inserción y borrado en O(log n)?",
        "opciones": [
            "A) La altura de los subárboles izquierdo y derecho de cualquier nodo difiere como máximo en uno.",
            "B) El camino más largo desde la raíz hasta una hoja no es más de dos veces más largo que el camino más corto.",
            "C) Todos los nodos deben tener exactamente dos hijos.",
            "D) Las hojas siempre contienen los valores máximos del árbol."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los árboles Rojinegros son árboles binarios de búsqueda auto-balanceados donde se garantiza el balance mediante restricciones en el color de los nodos (rojo o negro), asegurando que ningún camino sea más del doble de largo que otro."
    },
    {
        "id": 4,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "En una tabla hash con resolución de colisiones mediante encadenamiento separado (separate chaining), ¿cuál es la complejidad temporal promedio para la búsqueda de un elemento si el factor de carga es bajo?",
        "opciones": [
            "A) O(log n)",
            "B) O(1)",
            "C) O(n)",
            "D) O(n log n)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Con una función hash bien distribuida y un factor de carga bajo, el tiempo para calcular el hash y buscar en la lista enlazada del bucket correspondiente tiende a tiempo constante O(1) en promedio."
    },
    {
        "id": 5,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué técnica de diseño de algoritmos utiliza el algoritmo de Dijkstra para encontrar el camino más corto desde un nodo fuente a todos los demás en un grafo ponderado sin pesos negativos?",
        "opciones": [
            "A) Programación dinámica",
            "B) Algoritmos avaros (Greedy)",
            "C) Divide y vencerás",
            "D) Backtracking"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El algoritmo de Dijkstra es un algoritmo avaro porque en cada paso selecciona el nodo no visitado con la menor distancia conocida, tomando decisiones localmente óptimas para encontrar la solución global."
    },
    {
        "id": 6,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad espacial del algoritmo de búsqueda por profundidad (DFS) implementado de manera recursiva en un grafo con V vértices y E aristas, considerando la profundidad máxima del árbol de recursión?",
        "opciones": [
            "A) O(V)",
            "B) O(V + E)",
            "C) O(E)",
            "D) O(log V)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En el peor de los casos (un grafo lineal o una ruta profunda), la pila de llamadas recursivas almacenará todos los vértices del grafo, requiriendo O(V) espacio."
    },
    {
        "id": 7,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué tipo de recorrido en un Árbol Binario de Búsqueda (BST) permite recuperar los elementos ordenados de menor a mayor?",
        "opciones": [
            "A) Inorden (In-order)",
            "B) Postorden (Post-order)",
            "C) Por niveles (Level-order)",
            "D) Preorden (Pre-order)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El recorrido Inorden visita primero el subárbol izquierdo, luego la raíz y finalmente el subárbol derecho, lo que en un BST garantiza visitar las claves en orden ascendente."
    },
    {
        "id": 8,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la principal ventaja de utilizar un Montículo Binario (Binary Heap) para implementar una Cola de Prioridad en comparación con un arreglo desordenado?",
        "opciones": [
            "A) Búsqueda arbitraria en O(1)",
            "B) Inserción en O(n) y extracción en O(1)",
            "C) Inserción en O(1) y extracción del máximo en O(1)",
            "D) Inserción en O(log n) y extracción del máximo en O(log n)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un montículo binario permite realizar operaciones de inserción y extracción del elemento prioritario (mínimo o máximo) en tiempo O(log n), optimizando las colas de prioridad frente a estructuras lineales."
    },
    {
        "id": 9,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué algoritmo de ordenamiento utiliza el principio de 'Divide y Vencerás' dividiendo el arreglo por la mitad, ordenando recursivamente ambas mitades y luego combinándolas (merge)?",
        "opciones": [
            "A) Mergesort",
            "B) Bubblesort",
            "C) Heapsort",
            "D) Insertionsort"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Mergesort divide el arreglo en mitades, aplica mergesort recursivamente a cada mitad y combina los resultados ordenados en O(n) tiempo por nivel."
    },
    {
        "id": 10,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "En la teoría de grafos, ¿qué representación es más eficiente en términos de espacio para un grafo denso (donde el número de aristas E es cercano a V^2)?",
        "opciones": [
            "A) Árbol de expansión",
            "B) Lista de aristas",
            "C) Matriz de adyacencia",
            "D) Lista de adyacencia"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Para grafos densos, la matriz de adyacencia aprovecha mejor el espacio porque almacena conexiones O(V^2) de forma directa en una matriz booleana o numérica, evitando el sobrecosto de apuntadores de las listas."
    },
    {
        "id": 11,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué componente del procesador se encarga de decodificar las instrucciones de máquina y generar las señales de control necesarias para coordinar a las demás unidades?",
        "opciones": [
            "A) Unidad Aritmético-Lógica (ALU)",
            "B) Memoria Caché L1",
            "C) Unidad de Control (CU)",
            "D) Registros de propósito general"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La Unidad de Control es el circuito digital que dirige las operaciones del procesador, interpretando las instrucciones del programa y emitiendo señales de control hacia la ALU y otros componentes."
    },
    {
        "id": 12,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Cuál es el propósito principal del uso de memoria caché en la jerarquía de memoria de un sistema de cómputo?",
        "opciones": [
            "A) Suministrar energía de respaldo ante fallos eléctricos",
            "B) Reducir la latencia de acceso a los datos reduciendo el cuello de botella con la memoria principal (RAM)",
            "C) Aumentar la capacidad de almacenamiento permanente del disco duro",
            "D) Reemplazar por completo el uso de registros del procesador"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La memoria caché es una memoria de acceso muy rápido ubicada cerca del núcleo del procesador que almacena copias de datos de la RAM frecuentemente utilizados, disminuyendo el tiempo de espera."
    },
    {
        "id": 13,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué término describe el fenómeno en sistemas de memoria virtual paginada donde el sistema pasa más tiempo intercambiando páginas entre la memoria física y el almacenamiento secundario (thrashing) que ejecutando instrucciones reales?",
        "opciones": [
            "A) Sobrecarga por intercambio excesivo (Thrashing)",
            "B) Inanición de procesos (Starvation)",
            "C) Interbloqueo (Deadlock)",
            "D) Fragmentación externa"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El thrashing ocurre cuando hay insuficiencia de marcos de página físicos y los fallos de página son constantes, colapsando el rendimiento del sistema operativo por la saturación de I/O de disco."
    },
    {
        "id": 14,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Cuál de las siguientes condiciones es estrictamente necesaria para que ocurra un interbloqueo (deadlock) según Coffman?",
        "opciones": [
            "A) Multiprogramación estricta y comunicación síncrona",
            "B) Ausencia de memoria virtual y acceso directo a E/S",
            "C) Alta utilización de CPU, paginación activa y prioridad dinámica",
            "D) Exclusión mutua, Retención y espera, No expropiación, y Espera circular"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las cuatro condiciones de Coffman para el deadlock son: exclusión mutua, retención y espera (hold and wait), no expropiación (no preemption) y espera circular."
    },
    {
        "id": 15,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué algoritmo de planificación de CPU garantiza el tiempo de espera mínimo promedio para un conjunto de procesos si se conocen de antemano sus tiempos de ejecución (Burst time)?",
        "opciones": [
            "A) Shortest Job First (SJF)",
            "B) Round Robin (RR)",
            "C) Planificación por prioridades estáticas",
            "D) First-Come, First-Served (FCFS)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El algoritmo Shortest Job First (SJF) demuestra matemáticamente que minimiza el tiempo de espera promedio al ejecutar primero los procesos de menor duración."
    },
    {
        "id": 16,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Cuál es la función principal de un semáforo en la programación concurrente y sistemas operativos?",
        "opciones": [
            "A) Gestionar la compresión de archivos en disco",
            "B) Optimizar la velocidad del bus de datos del sistema",
            "C) Traducir código fuente a lenguaje de máquina",
            "D) Controlar el acceso concurrente a un recurso compartido mediante contadores enteros y operaciones atómicas"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un semáforo es una variable de sincronización propuesta por Edsger Dijkstra que utiliza operaciones atómicas (wait/signal o P/V) para regular el acceso a secciones críticas."
    },
    {
        "id": 17,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué mecanismo de gestión de memoria virtual traduce direcciones virtuales generadas por la CPU a direcciones físicas utilizando una estructura de tabla de páginas acelerada por hardware?",
        "opciones": [
            "A) MMU (Memory Management Unit)",
            "B) BIOS (Basic Input/Output System)",
            "C) TLB (Translation Lookaside Buffer)",
            "D) DMA (Direct Memory Access)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Unidad de Gestión de Memoria (MMU) es el componente hardware responsable de traducir las direcciones virtuales a físicas, apoyándose frecuentemente en la caché TLB."
    },
    {
        "id": 18,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué diferencia fundamental existe entre un hilo (thread) y un proceso tradicional?",
        "opciones": [
            "A) Los procesos son más rápidos de crear que los hilos.",
            "B) Los hilos comparten el espacio de direcciones de memoria y recursos del proceso padre, mientras que los procesos tienen espacios de memoria aislados.",
            "C) Los hilos no pueden ejecutar código, solo los procesos.",
            "D) Los hilos operan exclusivamente en el núcleo (kernel) del sistema operativo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los hilos son unidades ligeras de ejecución dentro de un proceso que comparten el heap y las variables globales, pero mantienen su propio contador de programa y pila de ejecución."
    },
    {
        "id": 19,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Cuál es el propósito del controlador DMA (Direct Memory Access) en la arquitectura de un computador?",
        "opciones": [
            "A) Ejecutar instrucciones aritméticas complejas de punto flotante",
            "B) Administrar las conexiones de red inalámbrica",
            "C) Permitir la transferencia directa de datos entre periféricos de E/S y la memoria RAM sin la intervención constante de la CPU",
            "D) Cifrar el disco duro en tiempo real"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El controlador DMA libera a la CPU de gestionar transferencias masivas de datos entre dispositivos de E/S y la memoria principal, mejorando la eficiencia general del sistema."
    },
    {
        "id": 20,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué política de reemplazo de páginas elimina la página que no ha sido utilizada durante el periodo de tiempo más prolongado en el pasado?",
        "opciones": [
            "A) FIFO (First-In, First-Out)",
            "B) Óptima (Belady)",
            "C) LRU (Least Recently Used)",
            "D) Aleatoria"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El algoritmo LRU (Menos Recientemente Utilizado) asume que las páginas usadas recientemente tienen alta probabilidad de ser referenciadas de nuevo, por lo que descarta la más antigua en desuso."
    },
    {
        "id": 21,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué forma normal (NF) en bases de datos relacionales requiere que la tabla esté en 2NF y que además todos los atributos no clave no dependan transitivamente de la llave primaria?",
        "opciones": [
            "A) Forma Normal de Boyce-Codd (BCNF)",
            "B) Segunda Forma Normal (2NF)",
            "C) Tercera Forma Normal (3NF)",
            "D) Primera Forma Normal (1NF)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La Tercera Forma Normal (3NF) exige que no existan dependencias funcionales transitivas entre los atributos no clave y la clave primaria."
    },
    {
        "id": 22,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué propiedad de las transacciones en bases de datos relacionales (ACID) garantiza que, si ocurre un fallo durante una transacción, todos los cambios realizados hasta ese momento sean revertidos (rollback)?",
        "opciones": [
            "A) Consistencia",
            "B) Durabilidad",
            "C) Aislamiento (Isolation)",
            "D) Atomicidad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La atomicidad asegura que una transacción se ejecute completamente o no se ejecute en absoluto ('todo o nada'), revirtiendo el estado ante cualquier error."
    },
    {
        "id": 23,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Cuál es el propósito del patrón de diseño arquitectónico Model-View-Controller (MVC)?",
        "opciones": [
            "A) Separar la lógica de negocio (Modelo), la interfaz de usuario (Vista) y el flujo de control (Controlador) para mejorar la mantenibilidad",
            "B) Compilar código en múltiples plataformas simultáneamente",
            "C) Conectar bases de datos NoSQL con servidores web mediante sockets",
            "D) Automatizar las pruebas de unidad en entornos distribuidos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "MVC desacopla los componentes de una aplicación: el Modelo maneja datos y lógica, la Vista la presentación visual, y el Controlador gestiona las peticiones del usuario y coordina a ambos."
    },
    {
        "id": 24,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué tipo de prueba de software se realiza desde la perspectiva de caja negra para verificar que el sistema cumple con los requisitos funcionales especificados por el usuario o cliente?",
        "opciones": [
            "A) Pruebas de mutación",
            "B) Pruebas de integración",
            "C) Pruebas unitarias",
            "D) Pruebas de aceptación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las pruebas de aceptación validan que el software cumple con los criterios de aceptación del negocio y los requerimientos del usuario final antes de su despliegue en producción."
    },
    {
        "id": 25,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "En el modelado UML, ¿qué tipo de diagrama describe el comportamiento dinámico del sistema mostrando la secuencia de mensajes intercambiados entre objetos a lo largo del tiempo?",
        "opciones": [
            "A) Diagrama de secuencia",
            "B) Diagrama de componentes",
            "C) Diagrama de clases",
            "D) Diagrama de despliegue"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El diagrama de secuencia es un diagrama de interacción en UML que detalla cómo los objetos colaboran entre sí mediante el intercambio temporal de mensajes."
    },
    {
        "id": 26,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué característica define a las bases de datos NoSQL orientadas a documentos (como MongoDB)?",
        "opciones": [
            "A) Almacenamiento de datos en esquemas flexibles basados en documentos JSON/BSON",
            "B) Garantía estricta de transacciones distribuidas ACID en toda la red",
            "C) Estructura de tablas relacionales estrictas con claves foráneas obligatorias",
            "D) Uso exclusivo del lenguaje SQL para consultas complejas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las bases de datos de documentos almacenan datos semiestructurados en formatos como JSON o BSON, permitiendo esquemas dinámicos sin la rigidez de las tablas tabulares relacionales."
    },
    {
        "id": 27,
        "area": "Ingeniería de Software y Bases deDatos",
        "pregunta": "¿Cuál es el objetivo principal de la refactorización (refactoring) de código en la ingeniería de software?",
        "opciones": [
            "A) Traducir el software a un lenguaje de programación diferente",
            "B) Añadir nuevas características funcionales al sistema",
            "C) Modificar la estructura interna del código para mejorar su legibilidad y reducir su complejidad sin alterar su comportamiento externo",
            "D) Corregir errores de sintaxis detectados por el compilador"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La refactorización limpia el código existente para prevenir la deuda técnica, facilitando su mantenimiento y extensión futura sin modificar la funcionalidad observable."
    },
    {
        "id": 28,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué modelo de ciclo de vida del desarrollo de software se caracteriza por iteraciones cortas (sprints), entregas incrementales de valor y alta adaptabilidad a cambios en los requisitos?",
        "opciones": [
            "A) Metodología Ágil (Scrum)",
            "B) Modelo en cascada (Waterfall)",
            "C) Modelo en V",
            "D) Modelo de espiral clásico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Scrum es un marco de trabajo ágil basado en ciclos iterativos e incrementales llamados sprints, que fomenta la inspección continua y la adaptación rápida al cambio."
    },
    {
        "id": 29,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué operación en álgebra relacional combina dos relaciones basándose en una condición de igualdad entre atributos comunes, eliminando las columnas duplicadas?",
        "opciones": [
            "A) Unión",
            "B) Diferencia",
            "C) Producto cartesiano",
            "D) Join natural (Natural Join)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Natural Join realiza una combinación de tuplas de dos relaciones basada en atributos con el mismo nombre y dominio, proyectando una sola columna para dichos atributos compartidos."
    },
    {
        "id": 30,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué patrón de diseño creacional se utiliza para garantizar que una clase tenga una única instancia en toda la aplicación y proporcionar un punto de acceso global a ella?",
        "opciones": [
            "A) Strategy",
            "B) Singleton",
            "C) Factory Method",
            "D) Observer"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El patrón Singleton restringe la instanciación de una clase a un solo objeto y provee un método estático para acceder a dicha instancia de forma global."
    },
    {
        "id": 31,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué capa del modelo OSI se encarga del enrutamiento de paquetes entre diferentes redes y del direccionamiento lógico (ej. direcciones IP)?",
        "opciones": [
            "A) Capa de Red",
            "B) Capa de Transporte",
            "C) Capa de Enlace de Datos",
            "D) Capa de Sesión"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Capa 3 (Red) del modelo OSI maneja el direccionamiento lógico y determina la mejor ruta para enviar paquetes de datos a través de redes interconectadas."
    },
    {
        "id": 32,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Cuál es el protocolo de transporte orientado a conexión que garantiza la entrega ordenada y confiable de paquetes mediante el uso de números de secuencia y acus recibo (ACK)?",
        "opciones": [
            "A) ICMP",
            "B) TCP",
            "C) IP",
            "D) UDP"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "TCP (Transmission Control Protocol) establece una conexión confiable y orientada a flujo, asegurando que los datos lleguen sin pérdida y en el orden correcto."
    },
    {
        "id": 33,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué ataque cibernético consiste en saturar un servidor o red con un volumen masivo de tráfico ilegítimo proveniente de múltiples fuentes distribuidas, agotando sus recursos?",
        "opciones": [
            "A) Cross-Site Scripting (XSS)",
            "B) Inyección SQL",
            "C) Denegación de servicio distribuida (DDoS)",
            "D) Ataque de hombre en el medio (MitM)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un ataque DDoS (Distributed Denial of Service) utiliza una red de equipos comprometidos (botnet) para abrumar a un objetivo con solicitudes, inutilizando sus servicios."
    },
    {
        "id": 34,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué mecanismo criptográfico utiliza un par de claves matemáticamente relacionadas (una pública y una privada) donde lo cifrado con la clave pública solo puede ser descifrado con la clave privada?",
        "opciones": [
            "A) Criptografía simétrica (AES)",
            "B) Codificación Base64",
            "C) Criptografía asimétrica (Clave pública)",
            "D) Funciones hash (SHA-256)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La criptografía asimétrica o de llave pública utiliza un par de claves para garantizar la confidencialidad y autenticidad en canales de comunicación no seguros."
    },
    {
        "id": 35,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Cuál es el propósito principal de una subred (subnetting) en redes IPv4?",
        "opciones": [
            "A) Incrementar la velocidad física de los cables de fibra óptica",
            "B) Dividir una red lógica grande en segmentos más pequeños para mejorar la seguridad, el rendimiento y la gestión del espacio de direcciones IP",
            "C) Reemplazar el uso de enrutadores por conmutadores",
            "D) Traducir nombres de dominio a direcciones IP públicas"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El subnetting permite segmentar una red IP en subredes más pequeñas mediante el uso de máscaras de subred, optimizando el tráfico de broadcast y la seguridad."
    },
    {
        "id": 36,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué protocolo de la capa de aplicación se utiliza para la resolución automática de nombres de dominio legibles por humanos a direcciones IP?",
        "opciones": [
            "A) DHCP",
            "B) DNS",
            "C) HTTP",
            "D) FTP"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "DNS (Domain Name System) actúa como la libreta de direcciones de Internet, traduciendo nombres como 'ejemplo.com' a direcciones IP numéricas."
    },
    {
        "id": 37,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué vulnerabilidad web permite a un atacante inyectar scripts maliciosos en páginas web vistas por otros usuarios, ejecutándose en el navegador de la víctima?",
        "opciones": [
            "A) Cross-Site Scripting (XSS)",
            "B) Inyección SQL",
            "C) Suplantación de identidad ARP",
            "D) Desbordamiento de búfer"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "XSS ocurre cuando una aplicación web incluye datos no sanitizados aportados por el usuario directamente en su salida, permitiendo la ejecución de scripts maliciosos en el cliente."
    },
    {
        "id": 38,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué protocolo se utiliza de manera segura sobre la capa de transporte para cifrar las comunicaciones web mediante certificados digitales (HTTPS)?",
        "opciones": [
            "A) IPsec",
            "B) SSH",
            "C) SNMP",
            "D) SSL / TLS"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "TLS (Transport Layer Security), sucesor de SSL, proporciona cifrado de extremo a extremo, integridad de datos y autenticación para HTTP (formando HTTPS)."
    },
    {
        "id": 39,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué componente de seguridad de red inspecciona el tráfico entrante y saliente basándose en reglas predefinidas para permitir o bloquear conexiones?",
        "opciones": [
            "A) Conmutador (Switch)",
            "B) Firewall (Cortafuegos)",
            "C) Concentrador (Hub)",
            "D) Repetidor Wi-Fi"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un firewall actúa como una barrera de control de acceso entre redes, filtrando paquetes de acuerdo con políticas de seguridad configuradas."
    },
    {
        "id": 40,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Cuál es la función del protocolo DHCP (Dynamic Host Configuration Protocol)?",
        "opciones": [
            "A) Cifrar correos electrónicos corporativos",
            "B) Autenticar usuarios mediante tarjetas inteligentes",
            "C) Monitorear el estado de los enlaces físicos de fibra óptica",
            "D) Asignar dinámicamente direcciones IP y parámetros de red a los dispositivos clientes de forma automática"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "DHCP automatiza la asignación de configuraciones de red (IP, máscara, puerta de enlace y DNS) a los dispositivos que se conectan a una red."
    },
    {
        "id": 41,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué algoritmo de aprendizaje supervisado se utiliza principalmente para resolver problemas de clasificación binaria o multiclase ajustando una función sigmoide?",
        "opciones": [
            "A) K-Means",
            "B) Regresión logística",
            "C) Regresión lineal",
            "D) Análisis de componentes principales (PCA)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La regresión logística modela la probabilidad de que una instancia pertenezca a una categoría específica utilizando la función logística (sigmoide)."
    },
    {
        "id": 42,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de aprendizaje no supervisado agrupa un conjunto de observaciones en K clústeres basándose en la minimización de la varianza intra-clúster (distancia euclidiana)?",
        "opciones": [
            "A) K-Means",
            "B) Naive Bayes",
            "C) Support Vector Machines (SVM)",
            "D) Árboles de decisión"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "K-Means es un algoritmo de agrupamiento no supervisado que particiona n observaciones en k clústeres donde cada observación pertenece al clúster con el centroide más cercano."
    },
    {
        "id": 43,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué problema común en el entrenamiento de modelos de Machine Learning ocurre cuando el modelo se ajusta demasiado a los datos de entrenamiento, perdiendo capacidad de generalización en datos nuevos?",
        "opciones": [
            "A) Subajuste (Underfitting)",
            "B) Desvanecimiento de gradiente",
            "C) Colinealidad múltiple",
            "D) Sobreajuste (Overfitting)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El sobreajuste (overfitting) sucede cuando un modelo aprende el ruido y los detalles específicos de los datos de entrenamiento en lugar de capturar la tendencia subyacente."
    },
    {
        "id": 44,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Cuál es la función de activación en una red neuronal artificial que introduce no linealidad y devuelve cero para valores negativos y el valor de entrada para valores positivos?",
        "opciones": [
            "A) ReLU (Rectified Linear Unit)",
            "B) Sigmoide",
            "C) Tangente hiperbólica (Tanh)",
            "D) Softmax"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "ReLU f(x) = max(0, x) es la función de activación más utilizada en redes profundas porque mitiga el problema del desvanecimiento del gradiente y es computacionalmente eficiente."
    },
    {
        "id": 45,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué métrica de evaluación en clasificación representa la proporción de predicciones positivas verdaderas entre todas las instancias predichas como positivas (Precision = TP / (TP + FP))?",
        "opciones": [
            "A) Especificidad",
            "B) Exactitud (Accuracy)",
            "C) Sensibilidad (Recall)",
            "D) Precisión (Precision)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La precisión mide la exactitud de las predicciones positivas, indicando cuántos de los elementos clasificados como positivos lo eran realmente."
    },
    {
        "id": 46,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de reducción de dimensionalidad lineal transforma un conjunto de variables correlacionadas en un conjunto de variables incorrelacionadas ortogonales llamadas componentes principales?",
        "opciones": [
            "A) One-Hot Encoding",
            "B) PCA (Principal Component Analysis)",
            "C) Regularización L1 (Lasso)",
            "D) Validación cruzada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "PCA identifica las direcciones de mayor varianza en los datos (componentes principales) y proyecta el conjunto en un subespacio de menor dimensión."
    },
    {
        "id": 47,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Cuál es el propósito del algoritmo de búsqueda heurística A* (A-star) en inteligencia artificial?",
        "opciones": [
            "A) Encontrar el camino óptimo en un grafo combinando el costo real acumulado g(n) y una heurística estimada h(n)",
            "B) Optimizar hiperparámetros mediante fuerza bruta",
            "C) Agrupar documentos de texto sin etiquetas previas",
            "D) Clasificar imágenes mediante redes convolucionales profundas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "A* es un algoritmo de búsqueda de rutas informado que utiliza una función de evaluación f(n) = g(n) + h(n) para garantizar encontrar el camino más corto de forma eficiente."
    },
    {
        "id": 48,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué tipo de aprendizaje automático entrena a un agente interactuando con un entorno mediante recompensas y castigos para maximizar un retorno acumulado?",
        "opciones": [
            "A) Aprendizaje supervisado",
            "B) Aprendizaje por transferencia",
            "C) Aprendizaje por refuerzo (Reinforcement Learning)",
            "D) Aprendizaje no supervisado"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El aprendizaje por refuerzo modela la toma de decisiones secuencial donde un agente aprende una política óptima a través de prueba y error maximizando la recompensa."
    },
    {
        "id": 49,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de preprocesamiento se utiliza para escalar características numéricas a un rango estándar, típicamente entre 0 y 1, restando el valor mínimo y dividiendo por el rango?",
        "opciones": [
            "A) Estandarización Z-score",
            "B) Binarización",
            "C) Normalización Min-Max",
            "D) Imputación por la moda"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La normalización Min-Max reescala los datos de forma lineal a un intervalo específico, comúnmente [0, 1], muy útil para algoritmos sensibles a la escala como redes neuronales."
    },
    {
        "id": 50,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué tipo de red neuronal profunda es la arquitectura estándar diseñada específicamente para procesar datos espaciales bidimensionales como imágenes mediante capas de convolución y pooling?",
        "opciones": [
            "A) Autoencoders",
            "B) Perceptrón multicapa (MLP)",
            "C) Redes Neuronales Convolucionales (CNN)",
            "D) Redes Neuronales Recurrentes (RNN)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las CNN (Convolutional Neural Networks) aplican filtros espaciales que extraen características jerárquicas locales de las imágenes de manera invariante a la traslación."
    },
    {
        "id": 51,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué estándar de arquitectura para servicios web se basa en recursos identificados por URIs, utilizando los métodos HTTP estándar (GET, POST, PUT, DELETE) sin estado (stateless)?",
        "opciones": [
            "A) RPC",
            "B) CORBA",
            "C) REST",
            "D) SOAP"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "REST (Representational State Transfer) es un estilo arquitectónico para sistemas hipermedia distribuidos que aprovecha los verbos HTTP y la uniformidad de la interfaz."
    },
    {
        "id": 52,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué mecanismo del protocolo HTTP permite que un servidor web responda a solicitudes provenientes de un dominio de origen diferente al del servidor que aloja la aplicación cliente?",
        "opciones": [
            "A) SSL Handshake",
            "B) JWT (JSON Web Token)",
            "C) CORS (Cross-Origin Resource Sharing)",
            "D) CSRF (Cross-Site Request Forgery)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "CORS es un mecanismo de seguridad basado en cabeceras HTTP que permite a los servidores restringir o autorizar solicitudes de recursos desde dominios cruzados."
    },
    {
        "id": 53,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Cuál es el propósito de utilizar un token firmado digitalmente como JWT (JSON Web Token) en la autenticación de aplicaciones web modernas?",
        "opciones": [
            "A) Compilar código JavaScript en el navegador del cliente",
            "B) Cifrar el tráfico de red en la capa física",
            "C) Transmitir de forma segura y compacta información autocomprendida sobre la identidad del usuario entre partes",
            "D) Reemplazar las bases de datos relacionales por archivos planos"
        ],
        "respuestaCorrectate": 1,
        "explicacion": "JWT es un estándar abierto para transmitir de manera segura información claims entre partes como un objeto JSON, firmado digitalmente para verificar su autenticidad.",
        "respuestaCorrecta": 1
    },
    {
        "id": 54,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué modelo de concurrencia utiliza Node.js para manejar operaciones de entrada/salida (I/O) de manera asíncrona y eficiente en un solo hilo de ejecución?",
        "opciones": [
            "A) Multihilos preventivos (Preemptive multi-threading)",
            "B) Bloqueo síncrono de sockets de red",
            "C) Bucle de eventos (Event Loop) y callbacks / promesas",
            "D) Procesamiento paralelo en múltiples núcleos físicos obligatorios"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Node.js opera con un bucle de eventos (Event Loop) monohilo impulsado por E/S no bloqueante, delegando tareas pesadas al sistema operativo o a un pool de hilos subyacente (libuv)."
    },
    {
        "id": 55,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué lenguaje de marcado y sistema de estilos se emplea fundamentalmente en el desarrollo frontend para estructurar y presentar páginas web interactivas?",
        "opciones": [
            "A) C++ y Make",
            "B) Java y XML",
            "C) HTML y CSS",
            "D) Python y SQL"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "HTML proporciona la estructura semántica de los documentos web, mientras que CSS define el diseño visual y la presentación estética."
    },
    {
        "id": 56,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué ventaja principal ofrece el uso de contenedores de software (como Docker) frente a las máquinas virtuales tradicionales?",
        "opciones": [
            "A) Los contenedores comparten el núcleo (kernel) del sistema operativo host, lo que reduce drásticamente el consumo de recursos y el tiempo de arranque.",
            "B) Los contenedores no requieren ningún archivo de configuración.",
            "C) Los contenedores virtualizan todo el hardware físico incluyendo la BIOS.",
            "D) Los contenedores solo funcionan en sistemas operativos de código cerrado."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Docker y la contenedorización virtualizan a nivel de sistema operativo, compartiendo el kernel y aislando procesos, evitando la sobrecarga de ejecutar un SO completo por instancia."
    },
    {
        "id": 57,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué herramienta de control de versiones distribuido permite a los desarrolladores trabajar localmente, fusionar ramas y rastrear cambios en el código fuente?",
        "opciones": [
            "A) Git",
            "B) Nginx",
            "C) Apache Tomcat",
            "D) Webpack"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Git es un sistema de control de versiones distribuido que permite un historial completo y operaciones de ramificación (branching) y fusión (merging) eficientes."
    },
    {
        "id": 58,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué código de estado HTTP indica que la solicitud ha tenido éxito y que el recurso solicitado ha sido creado exitosamente (por ejemplo, tras un método POST)?",
        "opciones": [
            "A) 200 OK",
            "B) 500 Internal Server Error",
            "C) 400 Bad Request",
            "D) 201 Created"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El código HTTP 201 Created indica que la solicitud se ha completado con éxito y ha dado lugar a la creación de un nuevo recurso."
    },
    {
        "id": 59,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué práctica de ingeniería DevOps combina el desarrollo y las operaciones para automatizar la integración, pruebas y despliegue continuo de software?",
        "opciones": [
            "A) Auditoría manual de código fuente",
            "B) Compilación estática de dependencias",
            "C) CI/CD (Continuous Integration / Continuous Deployment)",
            "D) Programación extrema en cascada"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "CI/CD automatiza el pipeline de software desde el commit del código hasta las pruebas automatizadas y el despliegue a producción, acelerando la entrega de valor."
    },
    {
        "id": 60,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Cuál es la función principal de un transpondedor u ORM (Object-Relational Mapping) como Hibernate o Entity Framework?",
        "opciones": [
            "A) Comprimir archivos multimedia para streaming web",
            "B) Gestionar el enrutamiento de paquetes TCP/IP en la red",
            "C) Mapear tablas de bases de datos relacionales a objetos en lenguajes orientados a objetos",
            "D) Compilar código fuente de JavaScript a WebAssembly"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un ORM simplifica la interacción con bases de datos relacionales permitiendo a los desarrolladores manipular datos utilizando paradigmas y objetos de su lenguaje de programación."
    },
    {
        "id": 61,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Cuál es el resultado de la simplificación de la expresión booleana por leyes de De Morgan: NOT(A AND B)?",
        "opciones": [
            "A) A OR B",
            "B) NOT(A) AND NOT(B)",
            "C) A AND NOT(B)",
            "D) NOT(A) OR NOT(B)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las leyes de De Morgan establecen que la negación de una conjunción es la disyunción de las negaciones: NOT(A AND B) = NOT(A) OR NOT(B)."
    },
    {
        "id": 62,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Cuántas relaciones binarias posibles se pueden definir sobre un conjunto A que tiene n elementos?",
        "opciones": [
            "A) n!",
            "B) 2^n",
            "C) 2^(n^2)",
            "D) n^2"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una relación binaria en A es un subconjunto del producto cartesiano A x A, el cual tiene n^2 elementos. Como el conjunto potencia de un conjunto de tamaño m tiene 2^m elementos, el número total de relaciones es 2^(n^2)."
    },
    {
        "id": 63,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué propiedad cumple una relación R sobre un conjunto A si para todo a en A, se cumple que (a, a) está en R?",
        "opciones": [
            "A) Transitiva",
            "B) Reflexiva",
            "C) Antisimétrica",
            "D) Simétrica"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una relación es reflexiva si cada elemento del conjunto está relacionado consigo mismo."
    },
    {
        "id": 64,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué establece el Principio del Palomar (Pigeonhole Principle) en matemáticas discretas?",
        "opciones": [
            "A) El número de vértices de grado impar en un grafo siempre es par.",
            "B) Si n elementos se colocan en m contenedores y n > m, al menos un contenedor contendrá más de un elemento.",
            "C) La suma de los ángulos internos de un árbol es n-2 por 180 grados.",
            "D) Todo número entero mayor que 1 es primo o producto de primos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El principio del palomar dictamina que si hay más palomas que nidos, por fuerza al menos un nido albergará a dos o más palomas."
    },
    {
        "id": 65,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Cuál es el número cromático de un grafo bipartito completo K_{3,3}?",
        "opciones": [
            "A) 2",
            "B) 4",
            "C) 1",
            "D) 3"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un grafo bipartito puede ser coloreado utilizando exactamente 2 colores, de modo que ningún par de vértices adyacentes comparta el mismo color."
    },
    {
        "id": 66,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué nombre recibe un grafo conexo que no contiene ciclos (es decir, acíclico)?",
        "opciones": [
            "A) Grafo dirigido",
            "B) Árbol",
            "C) Grafo euleriano",
            "D) Grafo completo"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Por definición, un árbol es un grafo no dirigido, conexo y acíclico."
    },
    {
        "id": 67,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué teorema garantiza que en cualquier grafo finito no dirigido, la suma de los grados de todos los vértices es igual al doble del número de aristas?",
        "opciones": [
            "A) Teorema de Euler",
            "B) Teorema de Bayes",
            "C) Teorema de los cuatro colores",
            "D) Lema del apretón de manos (Handshaking Lemma)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El lema del apretón de manos establece que la suma de los grados de los vértices es siempre un número par, exactamente 2 veces el número de aristas, ya que cada arista conecta dos vértices."
    },
    {
        "id": 68,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué operador lógico es equivalente a la implicación material (A -> B)?",
        "opciones": [
            "A) A EQUIV B",
            "B) NOT(A) OR B",
            "C) A AND NOT(B)",
            "D) NOT(A) AND B"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La implicación lógica A -> B es lógicamente equivalente a su disyunción disyuntiva NOT(A) OR B."
    },
    {
        "id": 69,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Cuál es el resultado de calcular el máximo común divisor (MCD) de 48 y 18 utilizando el algoritmo de Euclides?",
        "opciones": [
            "A) 24",
            "B) 12",
            "C) 3",
            "D) 6"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Aplicando Euclides: 48 = 18(2) + 12; 18 = 12(1) + 6; 12 = 6(2) + 0. El último residuo no nulo es 6."
    },
    {
        "id": 70,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué es una función inyectiva (uno a uno)?",
        "opciones": [
            "A) Una función donde elementos distintos del dominio tienen imágenes distintas en el codominio (si f(a) = f(b), entonces a = b).",
            "B) Una función donde cada elemento del codominio es imagen de al menos un elemento del dominio.",
            "C) Una función cuyo dominio es igual a su codominio.",
            "D) Una función que es tanto inyectiva como sobreyectiva."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una función es inyectiva si no hay dos elementos diferentes en el dominio que mapeen al mismo elemento en el codominio."
    },
    {
        "id": 71,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué significa el acrónimo GPIO en el contexto de microcontroladores y sistemas empotrados?",
        "opciones": [
            "A) General Purpose Input/Output",
            "B) Global Packet Input Organization",
            "C) Graphical Protocol for Input Operation",
            "D) General Processor Internal Optimization"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "GPIO (General Purpose Input/Output) son pines genéricos en un microcontrolador cuyo comportamiento (entrada o salida digital) puede ser controlado mediante software."
    },
    {
        "id": 72,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué protocolo de comunicación serie síncrona utiliza dos líneas de señal (SDA y SCL) y permite conectar múltiples dispositivos maestros y esclavos mediante un bus direccionable?",
        "opciones": [
            "A) I2C (Inter-Integrated Circuit)",
            "B) RS-232",
            "C) SPI",
            "D) UART"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "I2C es un protocolo de bus serie síncrono de dos hilos (datos SDA y reloj SCL) diseñado para conectar circuitos integrados de baja velocidad a corta distancia."
    },
    {
        "id": 73,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Cuál es la principal característica de un Sistema Operativo de Tiempo Real (RTOS) en comparación con un sistema operativo de propósito general?",
        "opciones": [
            "A) Uso obligatorio de discos duros de estado sólido",
            "B) Interfaz gráfica más colorida",
            "C) Capacidad exclusiva para ejecutar videojuegos en 3D",
            "D) Garantía determinista de que las tareas críticas se completarán dentro de plazos de tiempo estrictos (deadlines)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un RTOS prioriza el determinismo temporal, garantizando que el procesamiento de eventos o interrupciones ocurra dentro de ventanas de tiempo acotadas y predecibles."
    },
    {
        "id": 74,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué protocolo de aplicación ligero basado en publicación/suscripción (Pub/Sub) sobre TCP/IP es el estándar de facto para la comunicación en dispositivos IoT con recursos limitados?",
        "opciones": [
            "A) MQTT",
            "B) SMTP",
            "C) FTP",
            "D) HTTP"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería muy ligero diseñado para dispositivos con restricciones de ancho de banda y batería en IoT."
    },
    {
        "id": 75,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué función cumple un conversor Analógico-Digital (ADC) en un microcontrolador?",
        "opciones": [
            "A) Transformar voltajes analógicos continuos del mundo real en valores digitales discretos procesables por la CPU",
            "B) Amplificar la corriente eléctrica de salida hacia los motores",
            "C) Convertir señales digitales en ondas de radiofrecuencia analógicas para Wi-Fi",
            "D) Aumentar la frecuencia de reloj del procesador"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El ADC toma muestras de una señal analógica del entorno (como temperatura o luz) y las cuantiza en representaciones numéricas binarias."
    },
    {
        "id": 76,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué protocolo de comunicación serie síncrona utiliza líneas separadas para datos de entrada, datos de salida, reloj y selección de esclavo (CS), logrando altas tasas de transferencia?",
        "opciones": [
            "A) I2C",
            "B) SPI (Serial Peripheral Interface)",
            "C) 1-Wire",
            "D) UART"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "SPI es un protocolo síncrono full-duplex de alta velocidad que utiliza cuatro líneas (MOSI, MISO, SCLK, SS), ideal para comunicación rápida entre chips."
    },
    {
        "id": 77,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué es una interrupción por hardware en un microcontrolador?",
        "opciones": [
            "A) El apagado repentino del dispositivo por batería baja",
            "B) Un error de sintaxis detectado al compilar el código en el IDE",
            "C) Una señal eléctrica externa o interna que pausa temporalmente la ejecución del programa principal para atender una rutina de servicio prioritaria (ISR)",
            "D) Una instrucción de bucle infinito"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las interrupciones permiten al microcontrolador reaccionar de manera inmediata a eventos asíncronos externos sin necesidad de realizar sondeo constante (polling)."
    },
    {
        "id": 78,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué técnica de modulación se utiliza comúnmente en microcontroladores para controlar la potencia entregada a actuadores como motores o LEDs variando el ciclo de trabajo (duty cycle) de una señal cuadrada?",
        "opciones": [
            "A) Modulación por Frecuencia (FM)",
            "B) Modulación por Ancho de Pulso (PWM)",
            "C) Conversión D/A directa",
            "D) Modulación por Amplitud (AM)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "PWM (Pulse Width Modulation) simula voltajes analógicos intermedios variando la proporción de tiempo que la señal se mantiene en estado alto frente al estado bajo."
    },
    {
        "id": 79,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Cuál es el propósito del mecanismo de 'Perro Guardián' (Watchdog Timer) en sistemas empotrados críticos?",
        "opciones": [
            "A) Reiniciar automáticamente el sistema si el software se bloquea o deja de responder periódicamente",
            "B) Ahorrar energía apagando los periféricos inactivos",
            "C) Cifrar las comunicaciones inalámbricas contra espionaje",
            "D) Monitorear la temperatura ambiente del procesador"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Watchdog Timer es un temporizador hardware que debe ser refrescado regularmente por el software; si el programa se congela y no lo refresca, el temporizador expira y reinicia el sistema."
    },
    {
        "id": 80,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué tecnología de comunicación inalámbrica de corto alcance y bajo consumo se utiliza habitualmente en dispositivos IoT para redes de área personal (PAN)?",
        "opciones": [
            "A) Redes celulares 5G",
            "B) Bluetooth / BLE",
            "C) Televisión digital terrestre",
            "D) Satélite GPS"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Bluetooth Low Energy (BLE) está optimizado para la transmisión de pequeños volúmenes de datos con un consumo energético mínimo en dispositivos IoT y wearables."
    },
    {
        "id": 81,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué modelo de programación paralela utiliza un espacio de direcciones compartido donde múltiples hilos colaboran leyendo y escribiendo en variables comunes, sincronizándose mediante exclusión mutua?",
        "opciones": [
            "A) Paso de mensajes (Message Passing)",
            "B) Programación funcional pura",
            "C) Computación en red punto a punto",
            "D) Memoria Compartida (Shared Memory / OpenMP)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En los modelos de memoria compartida (como OpenMP o hilos POSIX), los procesadores acceden a un bloque de memoria común, facilitando la comunicación implícita entre hilos."
    },
    {
        "id": 82,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué establece la Ley de Amdahl en el contexto de la aceleración (speedup) obtenida al paralelar un algoritmo?",
        "opciones": [
            "A) La aceleración máxima de un programa está limitada por la fracción secuencial que no puede ser paralelizada.",
            "B) La memoria caché siempre es más rápida que la memoria principal.",
            "C) El consumo energético disminuye exponencialmente con el número de núcleos.",
            "D) La velocidad de un procesador se duplica cada 18 meses."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Ley de Amdahl formula que la mejora máxima en el rendimiento de un sistema está limitada por la proporción de código que debe ejecutarse de forma estrictamente secuencial."
    },
    {
        "id": 83,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Cuál es el estándar de paso de mensajes más utilizado para la programación paralela en sistemas de memoria distribuida (clústeres de supercomputación)?",
        "opciones": [
            "A) MPI (Message Passing Interface)",
            "B) CUDA",
            "C) OpenMP",
            "D) JDBC"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "MPI es el estándar de la industria para la comunicación por paso de mensajes explícito entre nodos de procesamiento en clústeres de memoria distribuida."
    },
    {
        "id": 84,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué arquitectura de procesamiento según la taxonomía de Flynn ejecuta múltiples flujos de instrucciones operando sobre múltiples flujos de datos en paralelo (MIMD)?",
        "opciones": [
            "A) MIMD",
            "B) SIMD",
            "C) SISD",
            "D) MISD"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "MIMD (Multiple Instruction, Multiple Data) describe sistemas donde múltiples procesadores independientes ejecutan instrucciones diferentes sobre conjuntos de datos distintos de forma simultánea."
    },
    {
        "id": 85,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué paradigma de computación acelerada por hardware utiliza miles de hilos en paralelo en tarjetas gráficas (GPUs) para tareas de propósito general (GPGPU)?",
        "opciones": [
            "A) CUDA / OpenCL",
            "B) BIOS UEFI",
            "C) FAT32",
            "D) TCP/IP Stack"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "CUDA y OpenCL permiten programar unidades de procesamiento gráfico (GPUs) para realizar cálculos científicos e inteligencia artificial masivamente paralelos."
    },
    {
        "id": 86,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué problema de concurrencia surge cuando dos o más hilos acceden y modifican un recurso compartido en orden impredecible, alterando el resultado final de la ejecución?",
        "opciones": [
            "A) Derivada numérica",
            "B) Desbordamiento de pila",
            "C) Condición de carrera (Race Condition)",
            "D) Fuga de memoria (Memory leak)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una condición de carrera ocurre cuando la salida depende de la secuencia exacta o temporización de ejecución de hilos no sincronizados que manipulan datos compartidos."
    },
    {
        "id": 87,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué técnica de diseño en procesadores modernos permite superponer las fases de ejecución de múltiples instrucciones (búsqueda, decodificación, ejecución) en un cauce de procesamiento?",
        "opciones": [
            "A) Cifrado simétrico",
            "B) Virtualización de hardware",
            "C) Paginación de memoria",
            "D) Pipelining"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El pipelining (cauce) divide la ejecución de las instrucciones en etapas secuenciales solapadas, incrementando drásticamente el rendimiento y la instrucción por ciclo (IPC)."
    },
    {
        "id": 88,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Cuál es el propósito de las directivas de compilador en OpenMP (como #pragma omp parallel)?",
        "opciones": [
            "A) Optimizar consultas SQL en bases de datos relacionales",
            "B) Indicar al compilador que cree bloques de ejecución paralela distribuidos entre múltiples hilos de memoria compartida",
            "C) Eliminar errores de sintaxis en tiempo de ejecución",
            "D) Traducir el código a lenguaje ensamblador x86 exclusivamente"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "OpenMP utiliza directivas de preprocesador (#pragma) para paralelizar bucles y bloques de código de forma declarativa en entornos de memoria compartida."
    },
    {
        "id": 89,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué término describe la situación en multiprocesadores donde la copia de un dato en la caché de un núcleo queda desactualizada respecto a la memoria principal u otras cachés?",
        "opciones": [
            "A) Fragmentación interna",
            "B) Incoherencia de caché (Cache Coherency problem)",
            "C) Latencia de interrupción",
            "D) Saturación de bus USB"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El problema de coherencia de caché surge cuando múltiples memorias caché locales almacenan la misma variable y un núcleo la modifica, requiriendo protocolos como MESI para sincronizarlas."
    },
    {
        "id": 90,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué clasificación de Flynn corresponde a arquitecturas vectoriales donde una única instrucción opera simultáneamente sobre múltiples datos (SIMD)?",
        "opciones": [
            "A) MIMD",
            "B) SISD",
            "C) SIMD",
            "D) MISD"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "SIMD (Single Instruction, Multiple Data) procesa vectores de datos aplicando una sola operación de instrucción por ciclo, clave en procesamiento multimedia y científico."
    },
    {
        "id": 91,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué principio ético fundamental en la ingeniería computacional y manejo de datos exige proteger la privacidad de los usuarios y restringir el acceso no autorizado a información sensible?",
        "opciones": [
            "A) Heterogeneidad",
            "B) Redundancia",
            "C) Escalabilidad horizontal",
            "D) Confidencialidad"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La confidencialidad es un principio ético y de seguridad de la información que garantiza que los datos personales y sensibles solo sean accesibles por personas autorizadas."
    },
    {
        "id": 92,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Cuál es la finalidad de realizar una revisión de literatura científica en la metodología de investigación en ingeniería?",
        "opciones": [
            "A) Identificar el estado del arte, vacíos de conocimiento y antecedentes teóricos que fundamenten el problema de estudio",
            "B) Rellenar páginas para cumplir con requisitos de longitud",
            "C) Copiar código fuente de internet sin modificaciones",
            "D) Evitar el uso de herramientas estadísticas avanzadas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La revisión de literatura permite conocer lo que se ha investigado previamente, identificar lagunas científicas y justificar la relevancia metodológica de la nueva investigación."
    },
    {
        "id": 93,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué falta ética grave se comete en la investigación académica al utilizar ideas, textos o fragmentos de código de otros autores sin citar adecuadamente la fuente original?",
        "opciones": [
            "A) Plagio",
            "B) Refactorización",
            "C) Validación cruzada",
            "D) Normalización"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El plagio es la apropiación indebida de ideas, obras o descubrimientos ajenos presentándolos como propios, lo cual constituye una infracción ética y legal severa."
    },
    {
        "id": 94,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué tipo de investigación busca aplicar el conocimiento científico y tecnológico para resolver un problema práctico específico de la sociedad o la industria?",
        "opciones": [
            "A) Investigación básica o pura",
            "B) Investigación aplicada",
            "C) Investigación meramente bibliográfica",
            "D) Investigación especulativa"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La investigación aplicada se centra en encontrar soluciones prácticas y tangibles a problemas concretos utilizando teorías y métodos científicos existentes."
    },
    {
        "id": 95,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué aspecto contempla el código de ética profesional del Ingeniero Computacional respecto al desarrollo de sistemas basados en Inteligencia Artificial?",
        "opciones": [
            "A) Garantizar la transparencia, imparcialidad y mitigación de sesgos algorítmicos que puedan discriminar o perjudicar a las personas.",
            "B) Ocultar el código fuente para evitar auditorías externas.",
            "C) Asegurar que el software funcione únicamente en sistemas operativos de pago.",
            "D) Priorizar la velocidad de ejecución sobre la seguridad de los datos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ética en IA exige responsabilidad en el diseño de algoritmos, velando por la equidad, la explicabilidad y la protección de los derechos humanos frente a sesgos."
    },
    {
        "id": 96,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Cuál es la función de una hipótesis en el método científico aplicado a la computación?",
        "opciones": [
            "A) Una proposición tentativa y comprobable que anticipa una posible respuesta al problema de investigación",
            "B) Una lista de requerimientos del cliente",
            "C) Un error de programación en el software experimental",
            "D) Una conclusión definitiva obtenida antes de iniciar el proyecto"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La hipótesis es una suposición fundamentada que se somete a prueba empírica y experimental para validar su veracidad dentro de un estudio científico."
    },
    {
        "id": 97,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué derecho protege la propiedad intelectual del código fuente original desarrollado por un programador frente a la copia no autorizada por terceros?",
        "opciones": [
            "A) Patentes de hardware",
            "B) Derechos de autor (Copyright) y licencias de software libre/privativo",
            "C) Direcciones IP",
            "D) Certificados SSL"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El copyright y las licencias de software otorgan a los creadores derechos legales sobre el uso, modificación y distribución de su código fuente original."
    },
    {
        "id": 98,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué se entiende por 'transparencia algorítmica' en el marco del desarrollo ético de sistemas computacionales?",
        "opciones": [
            "A) La velocidad con la que se ejecutan las consultas en la base de datos",
            "B) El uso exclusivo de interfaces gráficas translúcidas",
            "C) La capacidad de los usuarios y auditores para comprender cómo un algoritmo toma decisiones y procesa los datos",
            "D) La propiedad de que el código fuente sea completamente invisible para los usuarios"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La transparencia algorítmica implica que los procesos de toma de decisiones automatizados sean explicables y auditables, evitando 'cajas negras' irresponsables."
    },
    {
        "id": 99,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Cuál es el objetivo de un comité de ética en la investigación tecnológica con seres humanos?",
        "opciones": [
            "A) Evaluar y proteger los derechos, la dignidad y el bienestar de los participantes en estudios experimentales",
            "B) Comercializar las patentes universitarias al mejor postor",
            "C) Determinar el presupuesto financiero de la investigación",
            "D) Acelerar la compilación de programas en servidores remotos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los comités de ética velan por que la investigación cumpla con normativas de protección de datos, consentimiento informado y respeto a los participantes humanos."
    },
    {
        "id": 100,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué responsabilidad legal y moral adquiere un ingeniero computacional al descubrir una vulnerabilidad crítica de seguridad en un sistema en producción?",
        "opciones": [
            "A) Ignorarla si no afecta directamente a su equipo",
            "B) Borrar los registros del servidor para que nadie la note",
            "C) Divulgar la vulnerabilidad de manera responsable (Responsible Disclosure) notificando al proveedor para su corrección antes de hacerla pública",
            "D) Explotarla inmediatamente para beneficio personal"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La divulgación responsable de vulnerabilidades prioriza la seguridad de los usuarios, informando de manera privada al fabricante para que parchee el fallo antes de su exposición pública."
    },
    {
        "id": 101,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal en el caso promedio para el algoritmo Quicksort?",
        "opciones": [
            "A) O(n)",
            "B) O(n log n)",
            "C) O(n^2)",
            "D) O(log n)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Gracias a la partición equilibrada en el caso promedio, Quicksort divide el problema recursivamente en mitades logarítmicas, logrando un tiempo de O(n log n)."
    },
    {
        "id": 102,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué técnica de manejo de memoria utiliza bloques de tamaño fijo tanto en la memoria física (marcos) como en la memoria virtual (páginas)?",
        "opciones": [
            "A) Particionamiento dinámico",
            "B) Asignación contigua",
            "C) Segmentación",
            "D) Paginación"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La paginación divide la memoria en bloques de tamaño fijo llamados páginas (lógicas) y marcos de página (físicos), eliminando la fragmentación externa."
    },
    {
        "id": 103,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué tipo de relación en bases de datos relacionales requiere el uso de una tabla intermedia (tabla de unión) para ser implementada correctamente?",
        "opciones": [
            "A) Muchos a muchos",
            "B) Uno a muchos",
            "C) Uno a uno",
            "D) Jerárquica"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una relación de muchos a muchos (N:M) se resuelve en el modelo relacional mediante una tabla intermedia que almacena las claves foráneas de ambas entidades."
    },
    {
        "id": 104,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué protocolo de la capa de transporte opera sin conexión y no garantiza la entrega ni el orden de los paquetes, siendo ideal para streaming de video en vivo o VoIP?",
        "opciones": [
            "A) SSH",
            "B) TCP",
            "C) UDP",
            "D) FTP"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "UDP (User Datagram Protocol) es un protocolo sin conexión de bajo costo y alta velocidad que prescinde de control de flujo y retransmisiones, priorizando la inmediatez."
    },
    {
        "id": 105,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué métrica evalúa el rendimiento global de un modelo de clasificación calculando la relación entre las predicciones correctas totales y el número total de muestras?",
        "opciones": [
            "A) Error cuadrático medio (MSE)",
            "B) Recall",
            "C) Exactitud (Accuracy)",
            "D) Precisión"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La exactitud (accuracy) mide la proporción de aciertos totales (positivos y negativos verdaderos) frente al conjunto completo de datos evaluados."
    },
    {
        "id": 106,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué tecnología permite ejecutar código escrito en lenguajes como C o C++ a una velocidad cercana a la nativa directamente dentro de los navegadores web modernos?",
        "opciones": [
            "A) WebAssembly (Wasm)",
            "B) Active X",
            "C) Applets de Java",
            "D) Flash Player"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "WebAssembly es un formato de código de bytes portable que permite la ejecución de código de alto rendimiento en la web de manera segura y estandarizada."
    },
    {
        "id": 107,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué nombre recibe un camino en un grafo que visita cada arista exactamente una vez y regresa al vértice inicial?",
        "opciones": [
            "A) Camino hamiltoniano",
            "B) Árbol de expansión",
            "C) Grafo planar",
            "D) Ciclo euleriano"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un ciclo euleriano es un circuito cerrado que recorre cada arista de un grafo exactamente una vez. Un grafo tiene un ciclo euleriano si y solo si es conexo y todos sus vértices tienen grado par."
    },
    {
        "id": 108,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué protocolo de red inalámbrica de baja potencia y largo alcance (LPWAN) se utiliza habitualmente en ciudades inteligentes para conectar sensores IoT a grandes distancias?",
        "opciones": [
            "A) Wi-Fi IEEE 802.11ac",
            "B) Infrarrojos",
            "C) LoRaWAN",
            "D) Bluetooth Classic"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "LoRaWAN está diseñado para permitir comunicaciones de largo alcance a baja velocidad y mínimo consumo energético en redes de área amplia para IoT."
    },
    {
        "id": 109,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué ley predice que el rendimiento de los microprocesadores se duplicará aproximadamente cada dos años debido a la reducción en el tamaño de los transistores?",
        "opciones": [
            "A) Ley de Gustafson",
            "B) Ley de Amdahl",
            "C) Ley de Moore",
            "D) Ley de Ohm"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La ley de Moore es una observación empírica formulada por Gordon Moore que describe el crecimiento exponencial de la densidad de transistores en circuitos integrados."
    },
    {
        "id": 110,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué componente de un artículo de investigación científica resume de manera concisa el objetivo, la metodología, los resultados principales y las conclusiones del estudio?",
        "opciones": [
            "A) Dedicatoria",
            "B) Apéndice de código",
            "C) Resumen (Abstract)",
            "D) Índice alfabético"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El Abstract o resumen es una síntesis estructurada del artículo científico que permite a los lectores evaluar rápidamente el contenido y alcance de la investigación."
    },
    {
        "id": 111,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué es un árbol AVL?",
        "opciones": [
            "A) Un grafo dirigido acíclico.",
            "B) Un árbol donde todos los nodos tienen tres hijos.",
            "C) Un árbol binario sin restricciones de altura.",
            "D) Un árbol binario de búsqueda auto-balanceado donde las alturas de los subárboles izquierdo y derecho de cualquier nodo difieren en como máximo 1."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los árboles AVL son árboles binarios de búsqueda auto-balanceados que garantizan operaciones de búsqueda, inserción y eliminación en O(log n) manteniendo un factor de balance estricto."
    },
    {
        "id": 112,
        "area": "Arquitectura de Computadoras y Sistemas Operativos",
        "pregunta": "¿Qué política de planificación de CPU asigna a cada proceso un intervalo de tiempo fijo (quantum) en orden circular?",
        "opciones": [
            "A) FIFO",
            "B) First-Come, First-Served (FCFS)",
            "C) Shortest Job First",
            "D) Round Robin (RR)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Round Robin está diseñado para sistemas de tiempo compartido, asignando a cada proceso un quantum de tiempo de CPU equitativo antes de rotar al siguiente."
    },
    {
        "id": 113,
        "area": "Ingeniería de Software y Bases de Datos",
        "pregunta": "¿Qué operación de álgebra relacional permite seleccionar filas específicas de una relación que cumplen con una condición lógica determinada?",
        "opciones": [
            "A) Join",
            "B) Proyección (Pi)",
            "C) Producto cartesiano",
            "D) Selección (Sigma)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La operación de Selección (operador sigma) filtra las tuplas (filas) de una relación que satisfacen un predicado o condición booleana específica."
    },
    {
        "id": 114,
        "area": "Redes y Seguridad Informática",
        "pregunta": "¿Qué número de puerto estándar utiliza el protocolo seguro HTTPS para la transferencia hipertexto cifrada?",
        "opciones": [
            "A) Puerto 22",
            "B) Puerto 80",
            "C) Puerto 443",
            "D) Puerto 53"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El puerto 443 es el puerto estándar asignado para el tráfico web seguro mediante HTTPS (HTTP sobre TLS/SSL), mientras que el puerto 80 se usa para HTTP sin cifrar."
    },
    {
        "id": 115,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de regularización en regresión lineal añade una penalización proporcional al valor absoluto de los coeficientes (norma L1), permitiendo la selección de características al anular algunos pesos?",
        "opciones": [
            "A) Regresión Lasso (L1)",
            "B) Normalización Z-score",
            "C) Regresión Ridge (L2)",
            "D) Descenso de gradiente estocástico"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La regularización Lasso (L1) introduce una penalización basada en la suma de los valores absolutos de los coeficientes, lo que puede reducir algunos coeficientes exactamente a cero."
    },
    {
        "id": 116,
        "area": "Desarrollo de Software y Tecnologías Web",
        "pregunta": "¿Qué tipo de arquitectura de software organiza una aplicación como una colección de servicios pequeños, independientes, altamente desacoplados y desplegables de forma autónoma?",
        "opciones": [
            "A) Arquitectura en Capas tradicionales",
            "B) Arquitectura de Microservicios",
            "C) Arquitectura Monolítica",
            "D) Arquitectura Mainframe"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los microservicios descomponen una aplicación en servicios autónomos que se comunican mediante APIs ligeras, facilitando la escalabilidad y el despliegue independiente."
    },
    {
        "id": 117,
        "area": "Matemáticas Discretas y Lógica Computacional",
        "pregunta": "¿Qué es una tabla de verdad en lógica proposicional?",
        "opciones": [
            "A) Un diagrama de flujo de un programa.",
            "B) Un listado de números primos en un rango dado.",
            "C) Una matriz de adyacencia de un grafo.",
            "D) Una tabla que muestra todos los posibles valores de verdad de una proposición compuesta para cada combinación de valores de sus variables proposicionales."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La tabla de verdad es una herramienta matemática que despliega exhaustivamente el valor de verdad de una fórmula lógica bajo todas las asignaciones posibles de sus variables."
    },
    {
        "id": 118,
        "area": "Sistemas Empotrados e IoT",
        "pregunta": "¿Qué lenguaje de programación de bajo nivel es el más ampliamente utilizado para el desarrollo de firmware y controladores en microcontroladores con recursos limitados?",
        "opciones": [
            "A) HTML5",
            "B) JavaScript con Node.js",
            "C) Python interpretado puro",
            "D) C y C++"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "C y C++ ofrecen un control preciso del hardware a nivel de registros, bajo consumo de memoria y alta eficiencia de ejecución, convirtiéndolos en estándar para firmware."
    },
    {
        "id": 119,
        "area": "Computación de Alto Rendimiento y Arquitecturas Paralelas",
        "pregunta": "¿Qué nombre recibe la memoria de acceso extremadamente rápido y pequeño ubicada directamente en el chip del procesador para almacenar datos e instrucciones de uso inmediato?",
        "opciones": [
            "A) Memoria ROM BIOS",
            "B) Memoria Virtual en disco",
            "C) Memoria Caché",
            "D) Disco duro HDD"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La memoria caché (niveles L1, L2, L3) es una memoria estática ultrarrápida situada en la CPU que reduce drásticamente los tiempos de acceso a los datos principales."
    },
    {
        "id": 120,
        "area": "Sección Transversal: Metodología de la Investigación y Ética",
        "pregunta": "¿Qué documento legal o ético debe firmar un participante humano antes de participar en un experimento o prueba de usabilidad de software que involucre recopilación de datos personales?",
        "opciones": [
            "A) Contrato de mantenimiento de software",
            "B) Consentimiento informado (Informed Consent)",
            "C) Factura fiscal de compra",
            "D) Licencia de código abierto MIT"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El consentimiento informado es un documento ético y legal donde el participante acepta voluntariamente formar parte de un estudio tras conocer sus objetivos, riesgos y uso de datos."
    }
];