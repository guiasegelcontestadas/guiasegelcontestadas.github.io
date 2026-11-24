const bancoPreguntas = [
    {
        "id": 1,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el propósito principal del patrón de diseño 'Singleton'?",
        "opciones": [
            "A) Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.",
            "B) Permitir que objetos con interfaces incompatibles trabajen juntos.",
            "C) Garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a ella.",
            "D) Desacoplar el código de la interfaz de usuario de la lógica de negocio."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El patrón Singleton es un patrón de diseño creacional que asegura que una clase sólo tenga una instancia y provee un punto de acceso global a dicha instancia."
    },
    {
        "id": 2,
        "area": "Ingeniería de Software",
        "pregunta": "En el contexto de la metodología Scrum, ¿cuál es el artefacto que representa el trabajo planificado para el Sprint actual?",
        "opciones": [
            "A) Product Backlog",
            "B) Burndown Chart",
            "C) Incremento",
            "D) Sprint Backlog"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Sprint Backlog es el conjunto de elementos del Product Backlog seleccionados para el Sprint, junto con el plan para entregar el incremento de software y conseguir el objetivo del Sprint."
    },
    {
        "id": 3,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué métrica de calidad de software mide el número de caminos linealmente independientes a través del código fuente de un programa?",
        "opciones": [
            "A) Puntos de Función",
            "B) Complejidad Ciclomática de McCabe",
            "C) Líneas de Código (LOC)",
            "D) Cobertura de Código"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La complejidad ciclomática es una métrica de software cuantitativa desarrollada por Thomas J. McCabe que mide la complejidad lógica de un programa contando el número de caminos linealmente independientes."
    },
    {
        "id": 4,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál de los siguientes principios SOLID establece que las clases deben estar abiertas para su extensión, pero cerradas para su modificación?",
        "opciones": [
            "A) Principio de Segregación de Interfaces (ISP)",
            "B) Principio de Responsabilidad Única (SRP)",
            "C) Principio de Sustitución de Liskov (LSP)",
            "D) Principio de Abierto/Cerrado (OCP)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Principio de Abierto/Cerrado (Open/Closed Principle) postula que una entidad de software debe quedar abierta para su extensión, pero sin modificar su código fuente actual."
    },
    {
        "id": 5,
        "area": "Ingeniería de Software",
        "pregunta": "En la fase de pruebas de software, ¿en qué consiste la prueba de caja blanca?",
        "opciones": [
            "A) Evaluar la funcionalidad del sistema desde la perspectiva del usuario final sin conocer el código interno.",
            "B) Examinar la estructura lógica, los caminos de ejecución, las sentencias y las ramas del código fuente.",
            "C) Probar la integración de múltiples componentes de software simultáneamente.",
            "D) Verificar el rendimiento del sistema bajo cargas extremas de usuarios."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las pruebas de caja blanca se basan en el análisis detallado de la estructura interna del código, diseño y codificación del software, a diferencia de las de caja negra."
    },
    {
        "id": 6,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué tipo de diagrama UML se utiliza principalmente para modelar el comportamiento dinámico del sistema a través de una secuencia de mensajes intercambiados entre objetos?",
        "opciones": [
            "A) Diagrama de Clases",
            "B) Diagrama de Secuencia",
            "C) Diagrama de Despliegue",
            "D) Diagrama de Componentes"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El diagrama de secuencia es un tipo de diagrama de interacción que muestra cómo los objetos operan entre sí y en qué orden mediante el intercambio de mensajes."
    },
    {
        "id": 7,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el principal beneficio de aplicar la refactorización (refactoring) en el desarrollo de software?",
        "opciones": [
            "A) Eliminar por completo la necesidad de realizar pruebas unitarias.",
            "B) Reducir automáticamente la cantidad de memoria RAM utilizada por la aplicación.",
            "C) Mejorar la estructura interna del código sin alterar su comportamiento externo para facilitar su mantenimiento.",
            "D) Añadir nuevas funcionalidades comerciales de forma acelerada."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La refactorización es el proceso de reestructurar un código informático existente alterando su estructura interna sin cambiar su comportamiento externo, mejorando su legibilidad y mantenibilidad."
    },
    {
        "id": 8,
        "area": "Ingeniería de Software",
        "pregunta": "En el desarrollo ágil, ¿qué define el concepto de 'Deuda Técnica'?",
        "opciones": [
            "A) Los errores encontrados por el equipo de QA antes de liberar a producción.",
            "B) El costo implícito de un diseño o implementación subóptima que se elige por conveniencia a corto plazo, el cual requerirá refactorización futura.",
            "C) El presupuesto restante del proyecto asignado al mantenimiento correctivo.",
            "D) El costo financiero de adquirir licencias de software privativo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La deuda técnica es un concepto que refleja el coste implícito en el desarrollo de software a corto plazo cuando se prioriza la velocidad o la entrega frente a una arquitectura limpia."
    },
    {
        "id": 9,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué rol en Scrum es responsable de maximizar el valor del producto resultante del trabajo del equipo de desarrollo?",
        "opciones": [
            "A) Product Owner",
            "B) Gerente de Proyecto",
            "C) Desarrollador",
            "D) Scrum Master"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Product Owner es el único responsable de gestionar el Product Backlog, lo cual incluye maximizar el valor del producto y el trabajo del Scrum Team."
    },
    {
        "id": 10,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué patrón arquitectónico separa la representación de la información de la interacción del usuario, dividiendo la aplicación en tres componentes principales?",
        "opciones": [
            "A) Tuberías y Filtros (Pipes and Filters)",
            "B) Modelo-Vista-Controlador (MVC)",
            "C) Microservicios",
            "D) Cliente-Servidor"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "MVC divide una aplicación interconectada en tres partes: el Modelo (datos y lógica), la Vista (interfaz de usuario) y el Controlador (gestión de peticiones y flujo)."
    },
    {
        "id": 11,
        "area": "Bases de Datos",
        "pregunta": "¿Qué propiedad de las transacciones ACID garantiza que, si una transacción se ejecuta, todos sus cambios se guardan permanentemente en la base de datos, incluso ante un fallo del sistema?",
        "opciones": [
            "A) Durabilidad (Durability)",
            "B) Consistencia (Consistency)",
            "C) Aislamiento (Isolation)",
            "D) Atomicidad (Atomicity)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La durabilidad asegura que una vez que una transacción ha sido confirmada (committed), sus resultados persistirán de manera permanente ante fallos de energía o del sistema."
    },
    {
        "id": 12,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es el propósito principal de la normalización de bases de datos relacionales?",
        "opciones": [
            "A) Aumentar la redundancia de datos para acelerar las consultas de lectura.",
            "B) Minimizar la redundancia de datos y evitar anomalías de inserción, actualización y borrado.",
            "C) Facilitar la integración con arquitecturas NoSQL.",
            "D) Reducir la cantidad de índices necesarios en las tablas principales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La normalización organiza las tablas para reducir la duplicidad de datos y prevenir anomalías que puedan corromper la integridad de la base de datos."
    },
    {
        "id": 13,
        "area": "Bases de Datos",
        "pregunta": "¿Qué tipo de dependencia se elimina al pasar una relación de la Primera Forma Normal (1NF) a la Segunda Forma Normal (2NF)?",
        "opciones": [
            "A) Dependencia transitiva",
            "B) Dependencia funcional parcial",
            "C) Dependencia circular",
            "D) Dependencia multivaluada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para estar en 2NF, la tabla debe estar en 1NF y todos sus atributos no clave deben depender totalmente de la clave primaria completa, eliminando las dependencias parciales."
    },
    {
        "id": 14,
        "area": "Bases de Datos",
        "pregunta": "En el modelo relacional, ¿cómo se define una Clave Foránea (Foreign Key)?",
        "opciones": [
            "A) Un campo que almacena datos encriptados para seguridad.",
            "B) Un índice secundario optimizado para búsquedas de texto completo.",
            "C) Un atributo o conjunto de atributos que identifica unívocamente a cada fila en una tabla.",
            "D) Un campo o grupo de campos en una tabla que hace referencia a la clave primaria de otra tabla."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Una clave foránea establece un vínculo lógico y de integridad referencial entre los datos de dos tablas diferentes."
    },
    {
        "id": 15,
        "area": "Bases de Datos",
        "pregunta": "¿Qué sentencia SQL se utiliza para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas?",
        "opciones": [
            "A) UNION",
            "B) GROUP BY",
            "C) MERGE",
            "D) JOIN"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La cláusula JOIN se utiliza para unir registros de dos o más tablas en una base de datos relacional basándose en un campo común."
    },
    {
        "id": 16,
        "area": "Bases de Datos",
        "pregunta": "En bases de datos NoSQL, ¿qué postula el Teorema de CAP?",
        "opciones": [
            "A) Un sistema distribuido puede garantizar simultáneamente las tres propiedades: Consistencia, Disponibilidad y Tolerancia a particiones.",
            "B) La velocidad de procesamiento es inversamente proporcional a la consistencia eventual.",
            "C) Un sistema distribuido solo puede garantizar de forma simultánea como máximo dos de las tres propiedades: Consistencia, Disponibilidad y Tolerancia a particiones.",
            "D) La escalabilidad vertical supera siempre a la escalabilidad horizontal."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El teorema CAP establece que cualquier almacén de datos distribuido puede proporcionar únicamente dos de tres garantías: Consistencia, Disponibilidad y Tolerancia a particiones."
    },
    {
        "id": 17,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es el objetivo de crear un índice en una columna de una base de datos?",
        "opciones": [
            "A) Garantizar la unicidad obligatoria de los registros sin usar claves primarias.",
            "B) Ocultar información sensible a los usuarios estándar.",
            "C) Comprimir automáticamente el espacio ocupado por las tablas.",
            "D) Mejorar la velocidad de las operaciones de recuperación de datos (consultas SELECT) a costo de espacio de almacenamiento y menor velocidad de escritura."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Un índice es una estructura de datos que mejora la velocidad de las operaciones de búsqueda en una tabla, aunque ralentiza las inserciones y actualizaciones."
    },
    {
        "id": 18,
        "area": "Bases de Datos",
        "pregunta": "¿Qué nivel de aislamiento de transacciones previene las lecturas sucias (dirty reads)?",
        "opciones": [
            "A) Serializable",
            "B) Read Uncommitted",
            "C) Read Committed",
            "D) Repeatable Read"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Read Committed garantiza que cualquier dato leído haya sido confirmado (committed) al momento de la lectura, previniendo lecturas sucias."
    },
    {
        "id": 19,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál de las siguientes opciones describe una base de datos orientada a grafos?",
        "opciones": [
            "A) Almacena documentos JSON semiestructurados en colecciones.",
            "B) Utiliza nodos, aristas (relaciones) y propiedades para representar y almacenar datos altamente conectados.",
            "C) Almacena datos en tablas tabulares con filas y columnas estrictas.",
            "D) Utiliza tablas hash distribuidas con pares clave-valor."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las bases de datos de grafos están diseñadas específicamente para modelar datos cuyas relaciones son de gran importancia, usando teoría de grafos."
    },
    {
        "id": 20,
        "area": "Bases de Datos",
        "pregunta": "¿Qué representa la Tercera Forma Normal (3NF)?",
        "opciones": [
            "A) Que se han eliminado todas las claves foráneas redundantes.",
            "B) Que la tabla está en 2NF y no existen dependencias funcionales transitivas entre los atributos no clave.",
            "C) Que todas las columnas dependen exclusivamente de la clave primaria compuesta.",
            "D) Que la tabla no contiene atributos multivaluados."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La 3NF requiere que la tabla esté en 2NF y que ningún atributo no clave dependa transitivamente de otro atributo no clave."
    },
    {
        "id": 21,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es la función principal de la capa de transporte en el modelo OSI?",
        "opciones": [
            "A) Garantizar la transferencia de datos confiable y transparente entre sistemas extremos, controlando el flujo y la corrección de errores.",
            "B) Enrutar paquetes a través de redes interconectadas.",
            "C) Proveer servicios de red directamente a las aplicaciones del usuario.",
            "D) Establecer y mantener conexiones físicas en el medio de transmisión."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La capa de transporte (Capa 4) gestiona la entrega de datos entre hosts, asegurando la entrega confiable y ordenada mediante protocolos como TCP o UDP."
    },
    {
        "id": 22,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué diferencia fundamental existe entre los protocolos TCP y UDP?",
        "opciones": [
            "A) TCP se utiliza exclusivamente para transmisión de video en streaming en tiempo real.",
            "B) UDP es más lento debido a su estricto control de flujo y retransmisión.",
            "C) TCP opera en la capa de red, mientras que UDP opera en la capa física.",
            "D) TCP es orientado a conexión y confiable; UDP es sin conexión y no garantiza la entrega ni el orden de los paquetes."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "TCP establece un handshake de tres vías y garantiza entrega confiable, mientras que UDP ofrece datagramas rápidos sin confirmación de recepción."
    },
    {
        "id": 23,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "En un sistema operativo, ¿qué es un proceso en comparación con un hilo (thread)?",
        "opciones": [
            "A) Son sinónimos exactos en arquitecturas modernas de 64 bits.",
            "B) Un hilo es una instancia pesada de ejecución con su propio espacio de memoria independiente, mientras que un proceso comparte memoria.",
            "C) Un proceso es una unidad de ejecución con su propio espacio de direcciones de memoria, mientras que un hilo es una unidad más ligera de ejecución que comparte el espacio de memoria del proceso.",
            "D) Los hilos solo se ejecutan en sistemas operativos monousuario."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un proceso posee recursos aislados y espacio de memoria propio; un hilo es la unidad básica de uso de CPU dentro de un proceso, compartiendo memoria con otros hilos del mismo."
    },
    {
        "id": 24,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué es el 'Interbloqueo' (Deadlock) en los sistemas operativos?",
        "opciones": [
            "A) Un fallo en el disco duro que corrompe el sistema de archivos.",
            "B) La terminación abrupta de un proceso por falta de memoria RAM.",
            "C) Una situación en la que dos o más procesos están bloqueados indefinidamente esperando un recurso que tiene asignado otro proceso del mismo grupo.",
            "D) El retraso excesivo en la respuesta de la red al hacer un ping."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El interbloqueo ocurre cuando se cumplen las condiciones de Coffman (exclusión mutua, retención y espera, no expropiación y espera circular), paralizando los procesos."
    },
    {
        "id": 25,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es la función principal del algoritmo de planificación de CPU conocido como Round Robin?",
        "opciones": [
            "A) Asignar la CPU al proceso con el tiempo de ráfaga más corto.",
            "B) Distribuir el tiempo de CPU equitativamente entre los procesos mediante un cuanto de tiempo fijo (time slice).",
            "C) Dar prioridad absoluta a los procesos en modo kernel.",
            "D) Ejecutar los procesos estrictamente en el orden en que llegaron (FIFO)."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Round Robin asigna unidades de tiempo equitativas (quanta) a cada proceso en una cola circular, siendo ideal para sistemas de tiempo compartido."
    },
    {
        "id": 26,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué dirección IP pertenece a una red privada según los estándares IPv4 (RFC 1918)?",
        "opciones": [
            "A) 11.0.0.1",
            "B) 172.32.0.1",
            "C) 8.8.8.8",
            "D) 192.168.1.50"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Los rangos privados IPv4 son 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16. 192.168.1.50 pertenece al tercer rango."
    },
    {
        "id": 27,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué es la memoria virtual en un sistema operativo?",
        "opciones": [
            "A) Un espacio reservado en la nube para respaldar archivos temporales.",
            "B) Una tarjeta gráfica dedicada que simula memoria RAM adicional.",
            "C) La memoria caché L3 integrada en el procesador.",
            "D) Una técnica de gestión que utiliza espacio de almacenamiento secundario (disco) para hacer creer a los programas que hay más memoria RAM disponible."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La memoria virtual mapea las direcciones virtuales usadas por un programa a direcciones físicas en la RAM o en el archivo de paginación del disco."
    },
    {
        "id": 28,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es el protocolo de la capa de aplicación utilizado principalmente para la transferencia segura de hipertexto en la web?",
        "opciones": [
            "A) FTP",
            "B) TELNET",
            "C) SMTP",
            "D) HTTPS"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "HTTPS (Hypertext Transfer Protocol Secure) combina HTTP con criptografía SSL/TLS para comunicaciones seguras en la web."
    },
    {
        "id": 29,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué es una máscara de subred en redes IP?",
        "opciones": [
            "A) El identificador único asignado por el fabricante de la tarjeta de red.",
            "B) Un número de 32 bits que delimita qué porción de una dirección IP identifica a la red y qué porción identifica al host específico.",
            "C) Una contraseña requerida para conectarse a un punto de acceso Wi-Fi.",
            "D) Un mecanismo de seguridad para ocultar la dirección MAC del dispositivo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La máscara de subred sirve para que los dispositivos distingan la parte de red y la parte de host dentro de una dirección IP."
    },
    {
        "id": 30,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es el propósito del mecanismo de paginación en la gestión de memoria?",
        "opciones": [
            "A) Encriptar los datos almacenados en la memoria caché.",
            "B) Acelerar la velocidad del bus de datos del procesador.",
            "C) Comprimir los archivos para que ocupen menos espacio en disco.",
            "D) Dividir la memoria física y virtual en bloques de tamaño fijo para evitar la fragmentación externa."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La paginación elimina la fragmentación externa al dividir la memoria en marcos físicos y páginas virtuales de igual tamaño."
    },
    {
        "id": 31,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal en el peor de los casos del algoritmo de ordenamiento Quicksort?",
        "opciones": [
            "A) O(n)",
            "B) O(log n)",
            "C) O(n log n)",
            "D) O(n^2)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Aunque Quicksort tiene un promedio de O(n log n), en el peor de los casos (por ejemplo, eligiendo un pivote pésimo como el menor o mayor elemento consistentemente) su complejidad es O(n^2)."
    },
    {
        "id": 32,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué estructura de datos opera bajo el principio LIFO (Last In, First Out)?",
        "opciones": [
            "A) Pila (Stack)",
            "B) Cola (Queue)",
            "C) Árbol Binario",
            "D) Tabla Hash"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una pila (stack) sigue el principio LIFO: el último elemento en entrar es el primero en salir (como una pila de platos)."
    },
    {
        "id": 33,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la ventaja principal de la búsqueda binaria frente a la búsqueda secuencial?",
        "opciones": [
            "A) Tiene una complejidad temporal logarítmica O(log n), requiriendo que los datos estén previamente ordenados.",
            "B) Es más eficiente para colecciones pequeñas de menos de 10 elementos.",
            "C) Funciona en cualquier conjunto de datos sin importar si están ordenados.",
            "D) Requiere cero memoria adicional para su ejecución."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La búsqueda binaria divide el espacio de búsqueda a la mitad en cada paso, logrando O(log n), pero exige que la estructura esté ordenada."
    },
    {
        "id": 34,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué caracteriza a un Árbol Binario de Búsqueda (BST)?",
        "opciones": [
            "A) Para cualquier nodo, todos los elementos en su subárbol izquierdo son menores, y todos los elementos en su subárbol derecho son mayores.",
            "B) Cada nodo puede tener un número ilimitado de hijos.",
            "C) El nodo raíz siempre contiene el valor numérico más bajo del árbol.",
            "D) Los elementos se almacenan de forma estrictamente secuencial en la memoria física."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La propiedad fundamental de un BST es que el valor de cada nodo es mayor que todos los valores en su subárbol izquierdo y menor que los de su subárbol derecho."
    },
    {
        "id": 35,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad temporal para buscar un elemento en una Tabla Hash promedio bajo condiciones ideales?",
        "opciones": [
            "A) O(1)",
            "B) O(log n)",
            "C) O(n)",
            "D) O(n log n)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Mediante una buena función hash, las operaciones de inserción, búsqueda y eliminación en una tabla hash toman un tiempo constante O(1) en promedio."
    },
    {
        "id": 36,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué recorrido de un árbol binario visita primero el nodo raíz, luego el subárbol izquierdo y finalmente el subárbol derecho?",
        "opciones": [
            "A) Inorden (In-order)",
            "B) Postorden (Post-order)",
            "C) Preorden (Pre-order)",
            "D) Por niveles (Breadth-first)"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El recorrido en preorden sigue el esquema: Raíz -> Izquierda -> Derecha."
    },
    {
        "id": 37,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué estructura de datos lineal permite insertar y eliminar elementos por ambos extremos (delante y atrás)?",
        "opciones": [
            "A) Deque (Double-ended queue)",
            "B) Lista circular",
            "C) Pila",
            "D) Cola"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un Deque (cola de doble extremo) es una estructura de datos lineal que generaliza una cola y una pila, permitiendo inserciones y eliminaciones en ambos extremos."
    },
    {
        "id": 38,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál de los siguientes algoritmos de grafos encuentra el camino más corto desde un nodo fuente a todos los demás nodos en un grafo con pesos de aristas no negativos?",
        "opciones": [
            "A) Algoritmo de Dijkstra",
            "B) Algoritmo de Kruskal",
            "C) Búsqueda en Anchura (BFS)",
            "D) Algoritmo de Prim"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El algoritmo de Dijkstra resuelve el problema del camino más corto para un grafo con pesos de aristas no negativos."
    },
    {
        "id": 39,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué es la recursividad en programación?",
        "opciones": [
            "A) Una técnica en la que una función se llama a sí misma para resolver una instancia más pequeña del mismo problema hasta llegar a un caso base.",
            "B) El almacenamiento de resultados de funciones para evitar cálculos repetidos.",
            "C) Un bucle infinito controlado por variables globales.",
            "D) Un método para compilar código en tiempo de ejecución."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La recursividad requiere un caso base (condición de parada) y una llamada recursiva que acerque el problema a dicho caso base."
    },
    {
        "id": 40,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la complejidad espacial del algoritmo de ordenamiento Merge Sort?",
        "opciones": [
            "A) O(log n)",
            "B) O(1)",
            "C) O(n^2)",
            "D) O(n)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Merge Sort requiere memoria adicional proporcional al tamaño del array para almacenar los subarreglos temporales durante la mezcla, resultando en una complejidad espacial de O(n)."
    },
    {
        "id": 41,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Cuál es la diferencia fundamental entre el aprendizaje supervisado y el aprendizaje no supervisado?",
        "opciones": [
            "A) El supervisado no requiere intervención humana en ninguna etapa; el no supervisado requiere supervisión constante.",
            "B) El supervisado es más rápido pero menos preciso que el no supervisado.",
            "C) El supervisado solo se usa en redes neuronales profundas; el no supervisado en regresión lineal.",
            "D) El supervisado utiliza datos etiquetados para entrenar modelos; el no supervisado trabaja con datos sin etiquetar para encontrar patrones ocultos."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En el aprendizaje supervisado el algoritmo aprende a partir de pares de entrada y salida esperada (etiquetas), mientras que en el no supervisado descubre estructuras intrínsecas en datos sin etiquetas."
    },
    {
        "id": 42,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué métrica de evaluación en clasificación representa la proporción de verdaderos positivos entre todas las instancias predichas como positivas?",
        "opciones": [
            "A) Precisión (Precision)",
            "B) Exactitud (Accuracy)",
            "C) Especificidad",
            "D) Sensibilidad (Recall / Sensitivity)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La precisión (Precision) se define como VP / (VP + FP) y mide la calidad de las predicciones positivas del modelo."
    },
    {
        "id": 43,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué fenómeno ocurre en el entrenamiento de modelos de Machine Learning cuando el modelo se ajusta demasiado a los datos de entrenamiento, perdiendo capacidad de generalización en datos nuevos?",
        "opciones": [
            "A) Sesgo de selección",
            "B) Sobreajuste (Overfitting)",
            "C) Subajuste (Underfitting)",
            "D) Gradiente desvanecido (Vanishing gradient)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El sobreajuste (overfitting) se produce cuando un modelo aprende el ruido y los detalles específicos de los datos de entrenamiento en detrimento de su generalización."
    },
    {
        "id": 44,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Cuál es el propósito de la función de activación en una neurona artificial dentro de una red neuronal?",
        "opciones": [
            "A) Normalizar los pesos iniciales a valores entre 0 y 1.",
            "B) Calcular el error cuadrático medio al final de cada época.",
            "C) Reducir la dimensionalidad de las características de entrada.",
            "D) Introducir no linealidades en el modelo, permitiendo que la red aprenda patrones complejos."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Sin funciones de activación no lineales (como ReLU, Sigmoide o Tanh), una red neuronal multicapa equivaldría matemáticamente a una simple transformación lineal."
    },
    {
        "id": 45,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de reducción de dimensionalidad es lineal y proyecta los datos en un nuevo espacio ortogonal maximizando la varianza?",
        "opciones": [
            "A) t-SNE",
            "B) Análisis de Componentes Principales (PCA)",
            "C) Bosques Aleatorios (Random Forests)",
            "D) Autoencoders"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "PCA (Principal Component Analysis) es una técnica estadística lineal que transforma un conjunto de variables correlacionadas en un conjunto menor de variables no correlacionadas llamadas componentes principales."
    },
    {
        "id": 46,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué algoritmo de aprendizaje automático basado en distancias clasifica una instancia nueva según la clase mayoritaria de sus k vecinos más cercanos?",
        "opciones": [
            "A) k-Nearest Neighbors (k-NN)",
            "B) Naive Bayes",
            "C) Árboles de Decisión",
            "D) Máquinas de Soporte Vectorial (SVM)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "k-NN es un algoritmo de clasificación no paramétrico y basado en instancias que asigna una etiqueta basándose en los 'k' vecinos más cercanos en el espacio de características."
    },
    {
        "id": 47,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Cuál es la función del algoritmo de optimización Descenso del Gradiente (Gradient Descent)?",
        "opciones": [
            "A) Eliminar valores atípicos (outliers) en la fase de preprocesamiento de datos.",
            "B) Minimizar la función de pérdida (loss function) ajustando iterativamente los pesos del modelo en la dirección opuesta al gradiente.",
            "C) Convertir datos categóricos en variables numéricas binarias.",
            "D) Encontrar los hiperparámetros óptimos maximizando la precisión de validación cruzada."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El descenso del gradiente es un algoritmo de optimización iterativo utilizado para encontrar el mínimo de una función de coste, fundamental en el entrenamiento de redes neuronales."
    },
    {
        "id": 48,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué tipo de red neuronal artificial está especializada en el procesamiento de datos con estructura de cuadrícula, como imágenes?",
        "opciones": [
            "A) Autoencoders Variacionales",
            "B) Redes Neuronales Convolucionales (CNN)",
            "C) Redes Neuronales Recurrentes (RNN)",
            "D) Perceptrón Multicapa (MLP)"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las CNN (Convolutional Neural Networks) utilizan capas convolucionales para extraer automáticamente características espaciales de imágenes y datos matriciales."
    },
    {
        "id": 49,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué método de validación divide el conjunto de datos en 'k' partes, entrenando con k-1 partes y evaluando con la parte restante, repitiendo el proceso k veces?",
        "opciones": [
            "A) Bootstrap aggregating",
            "B) Leave-One-Out por lotes",
            "C) Validación cruzada K-Fold",
            "D) Validación Hold-out"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "K-Fold Cross-Validation es una técnica robusta para evaluar la capacidad de generalización de un modelo y evitar el sesgo de una única partición de entrenamiento/prueba."
    },
    {
        "id": 50,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué teorema probabilístico utiliza el clasificador 'Naive Bayes' para calcular la probabilidad de una clase dada un conjunto de características condicionalmente independientes?",
        "opciones": [
            "A) Ley de los Grandes Números",
            "B) Teorema de Bayes-Laplace",
            "C) Teorema del Límite Central",
            "D) Teorema de Bayes"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El clasificador Naive Bayes aplica el Teorema de Bayes asumiendo una fuerte independencia entre las características predictoras."
    },
    {
        "id": 51,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué componente de la CPU se encarga de realizar operaciones aritméticas y lógicas básicas?",
        "opciones": [
            "A) Unidad de Control (CU)",
            "B) Unidad Aritmético Lógica (ALU)",
            "C) Registros de propósito general",
            "D) Memoria Caché L1"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ALU (Arithmetic Logic Unit) es el circuito digital que calcula operaciones aritméticas (suma, resta) y operaciones lógicas (AND, OR, NOT)."
    },
    {
        "id": 52,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué es el ciclo de instrucción en la arquitectura de von Neumann?",
        "opciones": [
            "A) El proceso de interrupción de hardware generado por un periférico.",
            "B) La secuencia básica de operaciones que realiza el procesador: Buscar (Fetch), Decodificar (Decode) y Ejecutar (Execute).",
            "C) El ciclo de reloj necesario para actualizar la memoria RAM.",
            "D) El tiempo que tarda el disco duro en leer un sector completo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ciclo de instrucción (Fetch-Decode-Execute) describe cómo la CPU recupera instrucciones de la memoria, las interpreta y ejecuta las operaciones correspondientes."
    },
    {
        "id": 53,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Cuál es la diferencia principal entre las arquitecturas de von Neumann y Harvard?",
        "opciones": [
            "A) Harvard es una arquitectura obsoleta del siglo XIX sin aplicación práctica actual.",
            "B) von Neumann no permite el uso de microprocesadores multinúcleo.",
            "C) von Neumann comparte un bus y un espacio de memoria único para datos e instrucciones; Harvard utiliza memorias y buses separados para datos e instrucciones.",
            "D) von Neumann utiliza tecnología cuántica; Harvard utiliza silicio tradicional."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La arquitectura Harvard separa físicamente el almacenamiento y las rutas de señales para instrucciones y datos, permitiendo accesos simultáneos."
    },
    {
        "id": 54,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué técnica de diseño de CPU permite solapar la ejecución de múltiples instrucciones en diferentes etapas de procesamiento?",
        "opciones": [
            "A) Segmentación (Pipeline)",
            "B) Reducción de conjunto de instrucciones (RISC)",
            "C) Memoria Caché asociativa",
            "D) Multihilo Simultáneo (SMT)"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El pipelining (segmentación) divide el procesamiento de instrucciones en etapas secuenciales donde varias instrucciones se procesan simultáneamente en fases distintas."
    },
    {
        "id": 55,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué caracteriza a un conjunto de instrucciones de arquitectura RISC en comparación con CISC?",
        "opciones": [
            "A) Instrucciones complejas de longitud variable que requieren múltiples ciclos de reloj.",
            "B) Instrucciones simples de longitud fija que se ejecutan típicamente en un solo ciclo de reloj, con un gran número de registros.",
            "C) Ausencia total de memoria caché en el chip.",
            "D) Exclusividad para servidores de supercomputación."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "RISC (Reduced Instruction Set Computer) se enfoca en instrucciones simples, uniformes y rápidas ejecutadas en un ciclo, favoreciendo la optimización por compilador."
    },
    {
        "id": 56,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Cuál es el propósito de la memoria caché en un sistema informático?",
        "opciones": [
            "A) Servir como memoria intermedia de alta velocidad y menor capacidad entre la CPU y la memoria RAM para reducir el tiempo de acceso a los datos.",
            "B) Almacenar permanentemente el sistema operativo tras apagar el equipo.",
            "C) Gestionar la comunicación inalámbrica con dispositivos periféricos.",
            "D) Ampliar la memoria gráfica para renderizado 3D avanzado."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La memoria caché aprovecha el principio de localidad de referencias para almacenar los datos e instrucciones más frecuentemente utilizados por la CPU."
    },
    {
        "id": 57,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué es el 'Direct Memory Access' (DMA)?",
        "opciones": [
            "A) El direccionamiento físico de memoria sin usar tablas de páginas.",
            "B) Un método que permite a los dispositivos periféricos transferir datos directamente hacia y desde la memoria RAM sin la intervención constante de la CPU.",
            "C) El acceso directo a los registros internos del procesador mediante lenguaje ensamblador.",
            "D) Una tecnología de cifrado en la memoria caché L3."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "DMA permite que dispositivos como tarjetas de red o controladores de disco transfieran datos directamente a la memoria liberando a la CPU de esa carga."
    },
    {
        "id": 58,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué indica la jerarquía de memoria en un ordenador en términos de velocidad, costo y capacidad?",
        "opciones": [
            "A) A mayor velocidad, mayor capacidad y menor costo por bit.",
            "B) Los niveles inferiores de la jerarquía son más rápidos que los registros de la CPU.",
            "C) La capacidad y la velocidad son directamente proporcionales al costo en todos los niveles.",
            "D) A mayor velocidad, menor capacidad y mayor costo por bit."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La jerarquía de memoria equilibra el rendimiento y el costo: los niveles más cercanos a la CPU (registros, caché) son extremadamente rápidos, pequeños y costosos; los inferiores (disco, cinta) son lentos, masivos y económicos."
    },
    {
        "id": 59,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué es un 'fallo de caché' (cache miss)?",
        "opciones": [
            "A) La situación en la que la CPU busca un dato en la memoria caché y este no se encuentra, obligando a buscarlo en niveles inferiores de memoria como la RAM.",
            "B) Un error de hardware que daña permanentemente el procesador.",
            "C) El desbordamiento de la pila de llamadas del sistema.",
            "D) La corrupción de datos en el bus del sistema."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un cache miss ocurre cuando el bloque de datos solicitado por la CPU no está presente en la caché, generando una penalización de tiempo al requerir acceso a la RAM."
    },
    {
        "id": 60,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué función cumple el bus de direcciones (address bus) en un microprocesador?",
        "opciones": [
            "A) Controlar las interrupciones de hardware.",
            "B) Especificar la posición física o lógica de la memoria o dispositivo de E/S al que la CPU desea acceder.",
            "C) Transportar los datos reales que se van a leer o escribir en la memoria.",
            "D) Sincronizar las señales de reloj de todos los componentes."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El bus de direcciones es unidireccional y transporta la dirección de memoria de la ubicación a la que la CPU necesita acceder para operaciones de lectura o escritura."
    },
    {
        "id": 61,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué establece la ley de De Morgan para dos proposiciones lógicas P y Q en cuanto a la negación de una disyunción?",
        "opciones": [
            "A) P ∨ Q ≡ ¬P ∧ ¬Q",
            "B) ¬(P ∨ Q) ≡ ¬P ∧ ¬Q",
            "C) ¬(P ∧ Q) ≡ ¬P ∨ ¬Q",
            "D) ¬(P ∨ Q) ≡ P ∧ Q"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La primera ley de De Morgan establece que la negación de una disyunción es lógicamente equivalente a la conjunción de las negaciones: ¬(P ∨ Q) ≡ ¬P ∧ ¬Q."
    },
    {
        "id": 62,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Cuántas aristas tiene un árbol libre (grafo conexo sin ciclos) que contiene 'n' vértices?",
        "opciones": [
            "A) n",
            "B) n(n - 1) / 2",
            "C) n - 1",
            "D) n + 1"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una propiedad fundamental de los árboles libres es que un grafo conexo con n vértices es un árbol si y sólo si tiene exactamente n - 1 aristas."
    },
    {
        "id": 63,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué es una relación de equivalencia en teoría de conjuntos?",
        "opciones": [
            "A) Una función biyectiva entre dos conjuntos finitos.",
            "B) Un conjunto de pares ordenados con el mismo dominio.",
            "C) Una relación que es irreflexiva, asimétrica y transitiva.",
            "D) Una relación binaria que es reflexiva, simétrica y transitiva."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Una relación de equivalencia debe cumplir estrictamente tres propiedades: reflexividad, simetría y transitividad, lo que permite particionar el conjunto en clases de equivalencia."
    },
    {
        "id": 64,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué representa el principio del palomar (Pigeonhole Principle)?",
        "opciones": [
            "A) La probabilidad de un evento y su complemento siempre suman uno.",
            "B) El número de subconjuntos posibles de un conjunto de tamaño n es 2^n.",
            "C) Todo grafo plano puede colorearse con al menos cuatro colores.",
            "D) Si se distribuyen n elementos en m contenedores, y n > m, al menos un contenedor debe contener más de un elemento."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El principio del palomar es un poderoso método de conteo y demostración que establece que si hay más palomas que palomares, al menos un palomar albergará múltiples palomas."
    },
    {
        "id": 65,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué es un grafo bipartito?",
        "opciones": [
            "A) Un grafo que contiene exactamente dos ciclos hamiltonianos.",
            "B) Un árbol con exactamente dos hojas.",
            "C) Un grafo cuyos vértices se pueden dividir en dos conjuntos disjuntos de tal manera que ninguna arista conecte vértices del mismo conjunto.",
            "D) Un grafo dirigido donde cada arista tiene un peso positivo y negativo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un grafo bipartito permite particionar sus vértices en dos conjuntos V1 y V2 donde todas las aristas conectan un vértice de V1 con uno de V2."
    },
    {
        "id": 66,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Cuál es el valor de verdad de la implicación lógica (condicional) P → Q cuando la premisa P es falsa y la conclusión Q es verdadera?",
        "opciones": [
            "A) Falso",
            "B) Verdadero",
            "C) Indeterminado",
            "D) Depende de la tabla de verdad ampliada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En lógica proposicional, una implicación P → Q solo es falsa cuando P es verdadera y Q es falsa. En cualquier otro caso, incluida una premisa falsa, la implicación es verdadera (vacuidad)."
    },
    {
        "id": 67,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué describe el Teorema de los Cuatro Colores en la teoría de grafos planos?",
        "opciones": [
            "A) El número cromático de cualquier grafo es siempre menor o igual a cuatro.",
            "B) Cualquier mapa en un plano puede ser coloreado usando como máximo cuatro colores de modo que no haya dos regiones adyacentes con el mismo color.",
            "C) Los grafos planares no pueden tener más de cuatro vértices de grado impar.",
            "D) Todo grafo plano requiere exactamente cuatro colores para su recorrido Euleriano."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El teorema de los cuatro colores demuestra que cualquier mapa bidimensional puede colorearse con cuatro colores sin que regiones vecinas compartan color."
    },
    {
        "id": 68,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "En combinatoria, ¿qué calcula la fórmula de combinaciones C(n, k) = n! / (k! * (n - k)!)?",
        "opciones": [
            "A) El número de permutaciones con repetición posibles.",
            "B) El número de formas de ordenar k elementos seleccionados de un conjunto de n elementos teniendo en cuenta el orden.",
            "C) La probabilidad condicional de k eventos independientes.",
            "D) El número de subconjuntos de k elementos que se pueden seleccionar de un conjunto de n elementos sin importar el orden."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Las combinaciones calculan las selecciones de elementos donde el orden de los mismos no importa, a diferencia de las permutaciones."
    },
    {
        "id": 69,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué es un circuito Euleriano en un grafo?",
        "opciones": [
            "A) El camino más corto entre dos vértices cualesquiera.",
            "B) Un camino cerrado que visita cada vértice exactamente una vez.",
            "C) Un camino cerrado que recorre cada arista del grafo exactamente una vez.",
            "D) Un árbol generador de peso mínimo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un circuito euleriano pasa por cada arista del grafo exactamente una vez y regresa al vértice de origen. Requiere que todos los vértices tengan grado par."
    },
    {
        "id": 70,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Cuál es el resultado de la operación de conjunto A \\ B (diferencia de conjuntos)?",
        "opciones": [
            "A) Los elementos que pertenecen a B pero no a A.",
            "B) La unión de todos los elementos de ambos conjuntos sin duplicados.",
            "C) Los elementos que pertenecen a A y también a B.",
            "D) Los elementos que pertenecen a A pero no pertenecen a B."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La diferencia de conjuntos A \\ B contiene todos los elementos que están en el conjunto A y que no están en el conjunto B."
    },
    {
        "id": 71,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué conforma la tríada CIA fundamental de la seguridad de la información?",
        "opciones": [
            "A) Control, Identificación y Autenticación",
            "B) Confidencialidad, Integridad y Disponibilidad",
            "C) Cifrado, Intercambio y Auditoría",
            "D) Conectividad, Interoperabilidad y Acceso"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La tríada CIA (Confidentiality, Integrity, Availability) es el modelo básico sobre el que se diseña la seguridad de la información en las organizaciones."
    },
    {
        "id": 72,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Cuál es la diferencia principal entre el cifrado simétrico y el cifrado asimétrico?",
        "opciones": [
            "A) El simétrico utiliza una clave pública para cifrar y privada para descifrar; el asimétrico usa la misma clave para ambos procesos.",
            "B) El cifrado simétrico es exclusivo para hardware militar.",
            "C) El cifrado asimétrico es más rápido que el simétrico para grandes volúmenes de datos.",
            "D) El simétrico utiliza la misma clave secreta tanto para cifrar como para descifrar; el asimétrico utiliza un par de claves matemáticamente relacionadas (pública y privada)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El cifrado simétrico emplea una única clave compartida (ej. AES), mientras que el asimétrico emplea dos claves distintas (ej. RSA), resolviendo el problema de la distribución de claves."
    },
    {
        "id": 73,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿En qué consiste un ataque de denegación de servicio distribuido (DDoS)?",
        "opciones": [
            "A) Colapsar un sistema, servidor o red mediante un flujo masivo de tráfico malicioso proveniente de múltiples fuentes comprometidas (botnets), dejándolo inaccesible para los usuarios legítimos.",
            "B) Suplantar la identidad de un sitio web legítimo mediante correos electrónicos fraudulentos.",
            "C) Modificar los registros de una base de datos relacional inyectando código SQL.",
            "D) Interceptar contraseñas mediante un registrador de pulsaciones de teclado (keylogger)."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un ataque DDoS satura los recursos de red o procesamiento de un objetivo utilizando una red distribuida de equipos zombi (botnet)."
    },
    {
        "id": 74,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es una vulnerabilidad de tipo Inyección SQL (SQL Injection)?",
        "opciones": [
            "A) La pérdida de datos por fallos mecánicos en los discos de almacenamiento.",
            "B) Una falla de seguridad que permite a un atacante insertar o manipular sentencias SQL maliciosas a través de los campos de entrada de una aplicación web para ejecutar comandos en la base de datos.",
            "C) Un desbordamiento de búfer en la pila de ejecución del sistema operativo.",
            "D) Un error en el cifrado de contraseñas con algoritmos hash débiles como MD5."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "SQL Injection ocurre cuando la entrada del usuario no es sanitizada adecuadamente y se concatena directamente en consultas de bases de datos, permitiendo su manipulación."
    },
    {
        "id": 75,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es un ataque de Phishing?",
        "opciones": [
            "A) Un ataque de fuerza bruta automatizado contra protocolos de autenticación SSH.",
            "B) Una técnica de ingeniería social en la que el atacante se hace pasar por una entidad legítima a través de comunicaciones electrónicas para engañar a los usuarios y robar credenciales o datos financieros.",
            "C) La infección de dispositivos mediante ransomware encriptando archivos críticos.",
            "D) El monitoreo pasivo de paquetes de red en una red Wi-Fi abierta."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El phishing explota la vulnerabilidad humana mediante ingeniería social, utilizando suplantación de identidad en correos o mensajes para obtener información confidencial."
    },
    {
        "id": 76,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué función cumple una función Hash criptográfica como SHA-256?",
        "opciones": [
            "A) Cifrar reversiblemente mensajes largos usando una clave privada.",
            "B) Comprimir archivos ZIP para ahorrar espacio en disco.",
            "C) Convertir un bloque de datos de entrada en una cadena de caracteres alfanumérica de longitud fija y única, siendo irreversible y resistente a colisiones.",
            "D) Generar números pseudoaleatorios para protocolos de red."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las funciones hash criptográficas generan una huella digital única (hash) de un archivo o mensaje, garantizando la integridad de los datos."
    },
    {
        "id": 77,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es un ataque de 'Hombre en el Medio' (Man-in-the-Middle - MitM)?",
        "opciones": [
            "A) Un programa malicioso que se oculta en el sector de arranque del disco duro.",
            "B) Un intruso que roba un servidor físico dentro del centro de datos.",
            "C) Un fallo de diseño en la pila TCP/IP que reinicia la conexión.",
            "D) Una situación en la que el atacante intercepta y posiblemente altera en secreto la comunicación entre dos partes que creen estar comunicándose directamente entre sí."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "En un ataque MitM, el atacante se sitúa en medio del canal de comunicación entre dos sistemas, pudiendo espiar o modificar los datos transmitidos."
    },
    {
        "id": 78,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Cuál es el propósito de un sistema de detección y prevención de intrusiones (IDPS)?",
        "opciones": [
            "A) Acelerar el rendimiento del enrutamiento de paquetes IP.",
            "B) Administrar las copias de seguridad incrementales de la red.",
            "C) Monitorear el tráfico de red o la actividad del sistema en busca de actividades maliciosas o violaciones de políticas, generando alertas y bloqueando activamente las amenazas.",
            "D) Sustituir completamente a los cortafuegos perimetrales tradicionales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un IDPS analiza el tráfico de red y eventos del sistema para identificar patrones sospechosos o ataques conocidos, tomando acciones de prevención o alerta."
    },
    {
        "id": 79,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es un ataque de fuerza bruta (Brute Force Attack)?",
        "opciones": [
            "A) Un ataque físico para destruir los servidores de una empresa.",
            "B) Un método de prueba y error en el cual un atacante sistemáticamente prueba todas las combinaciones posibles de usuarios y contraseñas hasta adivinar la correcta.",
            "C) La explotación de vulnerabilidades de desbordamiento de búfer en aplicaciones C++.",
            "D) La interrupción del suministro eléctrico en instalaciones críticas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ataque de fuerza bruta consiste en automatizar la prueba exhaustiva de claves de cifrado o credenciales hasta encontrar la correcta."
    },
    {
        "id": 80,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es el principio de 'Privilegio Mínimo' (Principle of Least Privilege)?",
        "opciones": [
            "A) Conceder a los usuarios, procesos y sistemas únicamente los permisos y accesos estrictamente necesarios para realizar sus tareas específicas, y nada más.",
            "B) Asignar privilegios administrativos completos a todos los usuarios para evitar bloqueos operativos.",
            "C) Reducir la velocidad de la red para ahorrar ancho de banda.",
            "D) Limitar el uso de software de código abierto en servidores corporativos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El principio de privilegio mínimo es un concepto clave de seguridad que minimiza la superficie de ataque y el impacto potencial de un compromiso de cuenta."
    },
    {
        "id": 81,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Cuál es la característica principal del paradigma de programación funcional?",
        "opciones": [
            "A) La evaluación de expresiones y funciones matemáticas evitando el estado mutable y los efectos secundarios.",
            "B) El uso intensivo de variables globales y estados mutables.",
            "C) La organización exclusiva del código en clases y objetos jerárquicos.",
            "D) La ejecución secuencial obligatoria controlada por sentencias goto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La programación funcional trata la computación como la evaluación de funciones matemáticas y evita el cambio de estado y datos mutables (inmutabilidad)."
    },
    {
        "id": 82,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es la recolección de basura (Garbage Collection) en los lenguajes de programación modernos?",
        "opciones": [
            "A) Un compilador optimizador que elimina código duplicado o muerto.",
            "B) Un proceso automático de gestión de memoria donde el entorno de ejecución identifica y libera bloques de memoria heap que ya no son referenciados por el programa.",
            "C) La depuración automática de errores de sintaxis en tiempo de compilación.",
            "D) El borrado físico de archivos temporales del disco duro al cerrar la aplicación."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El recolector de basura automatiza la gestión de memoria dinámica, liberando al desarrollador de liberar explícitamente cada objeto creado en el montón (heap)."
    },
    {
        "id": 83,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué diferencia existe entre un lenguaje de programación con tipado estático y uno con tipado dinámico?",
        "opciones": [
            "A) En el tipado estático los tipos de las variables se verifican en tiempo de compilación; en el dinámico se determinan y verifican en tiempo de ejecución.",
            "B) El tipado dinámico es exclusivo de la programación orientada a objetos.",
            "C) El tipado estático no permite el uso de números flotantes; el dinámico sí.",
            "D) Los lenguajes con tipado estático no requieren el uso de variables."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En lenguajes estáticos (como Java, C++) los tipos se comprueban antes de ejecutar el programa; en dinámicos (como Python, JavaScript) los tipos se asocian a los valores en tiempo de ejecución."
    },
    {
        "id": 84,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es el polimorfismo en la programación orientada a objetos?",
        "opciones": [
            "A) El ocultamiento de los datos internos de un objeto mediante modificadores privados.",
            "B) La capacidad de una clase para heredar atributos de múltiples clases padre simultáneamente.",
            "C) La capacidad de diferentes clases para responder a un mismo mensaje o método con implementaciones específicas adaptadas a su tipo.",
            "D) La conversión estática de tipos primitivos a objetos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El polimorfismo permite que objetos de diferentes clases respondan a llamadas de métodos compartidos de formas específicas de su propia clase."
    },
    {
        "id": 85,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es un closure (clausura) en lenguajes como JavaScript o Python?",
        "opciones": [
            "A) Una función que recuerda y tiene acceso a las variables de su ámbito léxico externo incluso cuando dicha función externa ya ha terminado de ejecutarse.",
            "B) Una sentencia para cerrar conexiones de bases de datos abiertas.",
            "C) Un método privado dentro de una clase abstracta.",
            "D) Una función que ha finalizado su ejecución y liberado toda su memoria."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un closure es una combinación de una función agrupada con referencias al estado que la rodea (su entorno léxico), permitiendo persistencia de datos encapsulados."
    },
    {
        "id": 86,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es la encapsulación en el paradigma orientado a objetos?",
        "opciones": [
            "A) La reutilización de código mediante herencia multinivel.",
            "B) La transformación de código fuente a código máquina comprimido.",
            "C) El empaquetamiento de los datos (atributos) y los métodos que operan sobre esos datos dentro de una sola unidad, restringiendo el acceso directo al estado interno.",
            "D) La creación de múltiples copias idénticas de un objeto en memoria."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La encapsulación oculta los detalles internos de un objeto y protege su integridad mediante el control de acceso a sus miembros (público, privado, protegido)."
    },
    {
        "id": 87,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Cuál es el rol de un compilador en comparación con un intérprete?",
        "opciones": [
            "A) El compilador traduce todo el código fuente a código máquina o binario antes de la ejecución; el intérprete traduce y ejecuta el código línea por línea en tiempo de ejecución.",
            "B) El compilador ejecuta el código en una máquina virtual; el intérprete en hardware nativo.",
            "C) No existen diferencias prácticas en rendimiento ni funcionamiento.",
            "D) El compilador solo funciona para lenguajes funcionales; el intérprete para lenguajes orientados a objetos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los compiladores generan un ejecutable independiente traduciendo el código fuente completo de antemano; los intérpretes procesan y ejecutan el código de manera directa e inmediata instrucción por instrucción."
    },
    {
        "id": 88,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es la metaprogramación?",
        "opciones": [
            "A) La programación concurrente usando múltiples núcleos de CPU.",
            "B) Programar aplicaciones exclusivamente para la nube.",
            "C) El desarrollo de software utilizando metodologías ágiles avanzadas.",
            "D) La escritura de programas que pueden tratar a otros programas (o a sí mismos) como si fueran datos, permitiendo modificar, generar o analizar código en tiempo de ejecución."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La metaprogramación es una técnica donde los programas tienen la capacidad de leer, generar, analizar o transformar otros programas, e incluso a sí mismos."
    },
    {
        "id": 89,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué caracteriza a un lenguaje de programación basado en prototipos (como JavaScript clásico)?",
        "opciones": [
            "A) No permite la creación de funciones anónimas.",
            "B) Es obligatorio el uso de interfaces y clases abstractas.",
            "C) Está limitado exclusivamente al desarrollo de scripts de consola.",
            "D) Los objetos heredan directamente propiedades y comportamientos de otros objetos existentes (prototipos) en lugar de utilizar clases formales."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La herencia basada en prototipos es un estilo de programación orientada a objetos en el que las clases no están presentes, y la reutilización de comportamiento se realiza delegando en objetos prototipo."
    },
    {
        "id": 90,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es una interfaz en lenguajes orientados a objetos modernos?",
        "opciones": [
            "A) Una variable global compartida entre diferentes hilos.",
            "B) El diseño visual de la interfaz gráfica de usuario (GUI).",
            "C) Un contrato que define un conjunto de firmas de métodos que una clase debe implementar obligatoriamente, sin proveer la implementación de dichos métodos.",
            "D) Una clase completa con código ejecutable en todos sus métodos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una interfaz especifica qué comportamiento debe tener una clase (qué métodos debe implementar), pero deja la implementación específica a cada clase que la adopte."
    },
    {
        "id": 91,
        "area": "Ingeniería de Software",
        "pregunta": "En la gestión de proyectos de software, ¿qué representa la ruta crítica en el método de la ruta crítica (CPM)?",
        "opciones": [
            "A) Las tareas que tienen mayor holgura de tiempo.",
            "B) El presupuesto máximo asignado para corregir bugs en producción.",
            "C) Los requerimientos del cliente que son opcionales en el MVP.",
            "D) La secuencia de tareas dependientes que determina la duración total más corta posible del proyecto."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La ruta crítica es la secuencia de etapas de un proyecto que determina el tiempo más corto en el que se puede completar; cualquier retraso en estas tareas retrasa todo el proyecto."
    },
    {
        "id": 92,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el objetivo de realizar pruebas de integración en el ciclo de vida del desarrollo de software?",
        "opciones": [
            "A) Comprobar la satisfacción del cliente final con la interfaz visual.",
            "B) Medir la resistencia del servidor ante ataques de denegación de servicio.",
            "C) Detectar fallos en la interacción y comunicación entre diferentes componentes o módulos del software cuando se combinan.",
            "D) Verificar el funcionamiento aislado de cada función o método individual."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las pruebas de integración se realizan después de las pruebas unitarias para asegurar que los módulos integrados funcionen correctamente en conjunto."
    },
    {
        "id": 93,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué modelo de ciclo de vida de desarrollo de software se caracteriza por ser secuencial y lineal, donde cada fase debe completarse antes de pasar a la siguiente?",
        "opciones": [
            "A) Modelo en Espiral",
            "B) Modelo en Cascada (Waterfall)",
            "C) Desarrollo Rápido de Aplicaciones (RAD)",
            "D) Metodología Scrum"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo en cascada es un enfoque riguroso y lineal donde el progreso fluye en una dirección descendente a través de fases como análisis, diseño, codificación y pruebas."
    },
    {
        "id": 94,
        "area": "Bases de Datos",
        "pregunta": "¿Qué operación en álgebra relacional se utiliza para seleccionar filas (tuplas) de una relación que cumplen con una condición específica?",
        "opciones": [
            "A) Proyección (σ - Sigma)",
            "B) Producto Cartesiano (×)",
            "C) Reunión Natural (⨸)",
            "D) Selección (σ - Sigma)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La operación de selección (σ) en álgebra relacional filtra las tuplas de una relación basándose en un predicado lógico específico."
    },
    {
        "id": 95,
        "area": "Bases de Datos",
        "pregunta": "¿Qué es un procedimiento almacenado (Stored Procedure) en una base de datos relacional?",
        "opciones": [
            "A) Un archivo de respaldo comprimido en el servidor de archivos.",
            "B) Una tabla temporal creada automáticamente en memoria RAM.",
            "C) Un conjunto de instrucciones SQL compiladas y almacenadas en el servidor de bases de datos que se pueden ejecutar mediante una sola llamada.",
            "D) Un disparador que se ejecuta al modificar datos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un procedimiento almacenado encapsula lógica de negocio y consultas SQL directamente en el SGBD, mejorando el rendimiento y la seguridad."
    },
    {
        "id": 96,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es la función del comando 'traceroute' (o tracert) en redes de computadoras?",
        "opciones": [
            "A) Mostrar la ruta completa (saltos y enrutadores intermedios) que toman los paquetes IP para llegar desde el origen hasta un destino de red.",
            "B) Configurar dinámicamente direcciones IP mediante DHCP.",
            "C) Medir la velocidad máxima de descarga de un archivo grande.",
            "D) Escanear puertos abiertos en un servidor remoto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Traceroute registra los tiempos de tránsito y los saltos de enrutadores intermedios (TTL) que atraviesan los paquetes hasta su destino."
    },
    {
        "id": 97,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué es la fragmentación de memoria externa en sistemas operativos?",
        "opciones": [
            "A) La corrupción de los datos en la memoria caché L2.",
            "B) El espacio de almacenamiento desperdiciado dentro de una página asignada a un proceso.",
            "C) La división de un proceso en páginas de tamaño fijo.",
            "D) El fenómeno donde hay suficiente memoria total libre en el sistema para satisfacer una solicitud, pero está dividida en pequeños bloques no contiguos."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La fragmentación externa ocurre en sistemas de asignación contigua cuando la memoria libre se divide en huecos pequeños entre procesos asignados."
    },
    {
        "id": 98,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la principal diferencia entre una lista enlazada y un arreglo (array)?",
        "opciones": [
            "A) Los arreglos almacenan elementos en ubicaciones de memoria contiguas con acceso aleatorio O(1); las listas enlazadas almacenan elementos dispersos en nodos con punteros, requiriendo acceso secuencial O(n).",
            "B) Los arreglos permiten inserciones dinámicas instantáneas; las listas enlazadas no.",
            "C) Las listas enlazadas no consumen memoria adicional para apuntadores.",
            "D) Los arreglos solo pueden almacenar datos de tipo carácter."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los arrays ofrecen acceso directo por índice pero tamaño rígido o costoso de redimensionar; las listas enlazadas permiten crecimiento dinámico pero requieren recorrer nodos secuencialmente."
    },
    {
        "id": 99,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué tipo de recorrido en un grafo utiliza una estructura de datos de Cola (Queue) para explorar los nodos nivel por nivel?",
        "opciones": [
            "A) Búsqueda A*",
            "B) Ordenamiento Topológico",
            "C) Búsqueda en Profundidad (DFS - Depth-First Search)",
            "D) Búsqueda en Anchura (BFS - Breadth-First Search)"
        ],
        "respuestaCorrecta": 3,
        "explicacion": "BFS (Breadth-First Search) explora el grafo expandiendo los nodos vecinos nivel por nivel, apoyándose en una cola FIFO."
    },
    {
        "id": 100,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué técnica de procesamiento de lenguaje natural (NLP) convierte texto en vectores numéricos basados en la frecuencia de las palabras ponderada por su importancia inversa en el corpus?",
        "opciones": [
            "A) TF-IDF (Term Frequency-Inverse Document Frequency)",
            "B) One-Hot Encoding",
            "C) Word2Vec",
            "D) Stemming"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "TF-IDF evalúa la importancia de una palabra en un documento respecto a una colección de documentos (corpus), reduciendo el peso de palabras muy comunes."
    },
    {
        "id": 101,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué algoritmo de aprendizaje supervisado construye un modelo predictivo basado en una estructura de nodos de decisión y ramas?",
        "opciones": [
            "A) Redes Hopfield",
            "B) Árboles de Decisión (Decision Trees)",
            "C) Regresión Logística",
            "D) Análisis Discriminante Lineal"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los árboles de decisión segmentan los datos mediante reglas de decisión binarias basadas en características, formando una estructura jerárquica."
    },
    {
        "id": 102,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué es el Hyper-Threading (SMT - Simultaneous Multithreading) en los procesadores modernos?",
        "opciones": [
            "A) Una tecnología que permite a un único núcleo físico de procesador ejecutar múltiples hilos de ejecución simultáneamente compartiendo sus recursos de ejecución.",
            "B) La duplicación física de todos los núcleos de la CPU en un chip secundario.",
            "C) La aceleración de operaciones de punto flotante por hardware.",
            "D) Un sistema de refrigeración líquida integrado en el procesador."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "SMT permite que un núcleo físico se presente como múltiples núcleos lógicos al sistema operativo, mejorando el aprovechamiento de las unidades de ejecución de la CPU."
    },
    {
        "id": 103,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué establece el Teorema del Límite Central en estadística y probabilidad?",
        "opciones": [
            "A) La probabilidad de un evento raro tiende a cero conforme aumenta la muestra.",
            "B) La media de cualquier población siempre sigue una distribución uniforme.",
            "C) Las muestras pequeñas siempre tienen varianza nula.",
            "D) La suma (o promedio) de un número grande de variables aleatorias independientes e idénticamente distribuidas se aproxima a una distribución normal, sin importar la distribución subyacente."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El Teorema del Límite Central es fundamental en inferencia estadística al garantizar que la distribución de la media muestral tiende a la normalidad para muestras grandes."
    },
    {
        "id": 104,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es un ataque de desbordamiento de búfer (Buffer Overflow)?",
        "opciones": [
            "A) Un error de sintaxis al compilar programas en lenguaje C.",
            "B) La saturación del disco duro por archivos de registro excesivos.",
            "C) Una vulnerabilidad donde un programa escribe más datos en un bloque de memoria (búfer) de los que puede contener, sobrescribiendo memoria adyacente y permitiendo potencialmente la ejecución de código arbitrario.",
            "D) Una sobrecarga de tráfico en los enrutadores de borde de la red."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El desbordamiento de búfer ocurre cuando no se validan los límites de entrada, permitiendo corromper la pila de ejecución y secuestrar el flujo de control del programa."
    },
    {
        "id": 105,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es la programación orientada a aspectos (AOP)?",
        "opciones": [
            "A) La división de bases de datos relacionales en aspectos normalizados.",
            "B) Un paradigma que busca separar las preocupaciones transversales (cross-cutting concerns, como logging o seguridad) de la lógica de negocio principal.",
            "C) Un método para programar aplicaciones gráficas en 3D.",
            "D) El diseño exclusivo de interfaces de usuario adaptables."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "AOP modulariza preocupaciones transversales (como transacciones o seguridad) que afectan a múltiples módulos, evitando la duplicación de código."
    },
    {
        "id": 106,
        "area": "Ingeniería de Software",
        "pregunta": "¿Qué mide la métrica de 'Acoplamiento' (Coupling) en la arquitectura de software?",
        "opciones": [
            "A) El número de pruebas unitarias aprobadas exitosamente.",
            "B) La cantidad de líneas de código escritas por desarrollador en un sprint.",
            "C) El grado de independencia y la fuerza de las conexiones entre diferentes módulos de software.",
            "D) La velocidad de ejecución de las consultas a la base de datos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El acoplamiento mide la interdependencia entre módulos. Un buen diseño busca un acoplamiento bajo (baja dependencia) y una alta cohesión interna."
    },
    {
        "id": 107,
        "area": "Bases de Datos",
        "pregunta": "¿Cuál es la función del comando 'GROUP BY' en SQL?",
        "opciones": [
            "A) Ordenar el resultado de una consulta de forma ascendente o descendente.",
            "B) Agrupar filas que comparten los mismos valores en columnas específicas para aplicar funciones de agregación (como SUM, COUNT, AVG).",
            "C) Filtrar los registros antes de realizar cualquier operación en las tablas.",
            "D) Combinar los resultados de dos consultas SELECT distintas eliminando duplicados."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "GROUP BY agrupa filas con valores idénticos en columnas especificadas, permitiendo realizar cálculos agregados por cada grupo formado."
    },
    {
        "id": 108,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Qué protocolo de la capa de aplicación se utiliza para la asignación dinámica de direcciones IP a los dispositivos en una red local?",
        "opciones": [
            "A) FTP",
            "B) DHCP",
            "C) SNMP",
            "D) DNS"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "DHCP (Dynamic Host Configuration Protocol) automatiza la asignación de direcciones IP, máscara de subred, puerta de enlace y servidores DNS a los hosts."
    },
    {
        "id": 109,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Cuál es la propiedad clave de un montículo binario (Binary Heap) mínimo?",
        "opciones": [
            "A) El valor de cada nodo padre es menor o igual que los valores de sus hijos, garantizando que el elemento mínimo esté siempre en la raíz.",
            "B) Es un árbol binario perfectamente equilibrado en todas sus hojas.",
            "C) Todos los nodos hijos son menores o iguales que sus padres.",
            "D) Los elementos están ordenados de izquierda a derecha en orden alfabético."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En un min-heap, el nodo raíz contiene el elemento menor del conjunto, y cada nodo padre es menor o igual que sus hijos."
    },
    {
        "id": 110,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué es el aprendizaje por refuerzo (Reinforcement Learning)?",
        "opciones": [
            "A) Un tipo de aprendizaje donde un agente aprende a tomar decisiones interactuando con un entorno para maximizar una recompensa acumulativa.",
            "B) El ajuste manual de los hiperparámetros de una red neuronal profunda.",
            "C) Un algoritmo que etiqueta automáticamente bases de datos relacionales.",
            "D) Un método para limpiar datos faltantes en ciencia de datos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El aprendizaje por refuerzo se basa en agentes que aprenden mediante prueba y error, recibiendo recompensas o castigos por sus acciones en un entorno."
    },
    {
        "id": 111,
        "area": "Arquitectura de Computadoras",
        "pregunta": "¿Qué es la localidad espacial de referencias en la jerarquía de memoria?",
        "opciones": [
            "A) La asignación estática de memoria en el disco duro.",
            "B) El almacenamiento de datos en la nube geolocalizada.",
            "C) La reutilización frecuente de una misma variable en un bucle corto.",
            "D) La tendencia de la CPU a acceder a posiciones de memoria físicamente cercanas a las que acaba de utilizar en un futuro próximo."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "La localidad espacial indica que si se accede a una dirección de memoria, es muy probable que pronto se acceda a direcciones cercanas (por ejemplo, al recorrer arrays)."
    },
    {
        "id": 112,
        "area": "Matemáticas Discretas y Lógica",
        "pregunta": "¿Qué es una función inyectiva (uno a uno)?",
        "opciones": [
            "A) Una función que es simultáneamente inyectiva y sobreyectiva.",
            "B) Una función donde el dominio y el codominio son idénticos.",
            "C) Una función donde cada elemento del codominio tiene al menos una preimagen.",
            "D) Una función donde elementos distintos del dominio tienen imágenes distintas en el codominio (si f(a) = f(b), entonces a = b)."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "Una función inyectiva asigna elementos distintos del dominio a elementos distintos del codominio, sin que dos entradas diferentes produzcan la misma salida."
    },
    {
        "id": 113,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Cuál es el propósito de un certificado digital en la infraestructura de clave pública (PKI)?",
        "opciones": [
            "A) Acelerar el cifrado de archivos locales en el sistema operativo.",
            "B) Comprimir paquetes de red para evitar inspección profunda.",
            "C) Vincular de forma segura la identidad de un propietario con su clave pública, siendo emitido y firmado digitalmente por una Autoridad de Certificación (CA) confiable.",
            "D) Reemplazar por completo el uso de contraseñas maestras."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un certificado digital valida la autenticidad de una entidad y su clave pública mediante la firma digital de una Autoridad de Certificación reconocida."
    },
    {
        "id": 114,
        "area": "Lenguajes de Programación y Paradigmas",
        "pregunta": "¿Qué es la sobrecarga de operadores (Operator Overloading)?",
        "opciones": [
            "A) Un error crítico de compilación por usar demasiados operadores aritméticos.",
            "B) La conversión automática de tipos de datos en lenguajes dinámicos.",
            "C) La capacidad de dar a un operador predefinido (como +, -, *) un significado personalizado cuando se aplica a tipos de datos definidos por el usuario (clases o estructuras).",
            "D) La ejecución simultánea de múltiples operadores en hilos separados."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La sobrecarga de operadores permite redefinir el comportamiento de operadores estándar para que operen de manera natural sobre objetos de clases personalizadas."
    },
    {
        "id": 115,
        "area": "Ingeniería de Software",
        "pregunta": "¿Cuál es el objetivo principal de la integración continua (CI)?",
        "opciones": [
            "A) Reducir el almacenamiento en la nube del equipo de desarrollo.",
            "B) Automatizar la integración del código de múltiples desarrolladores en un repositorio central frecuentemente (varias veces al día), ejecutando pruebas automatizadas para detectar errores rápidamente.",
            "C) Publicar versiones en producción de forma manual una vez al año.",
            "D) Eliminar la necesidad de escribir código fuente complejo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La integración continua busca fusionar los cambios de código en la rama principal de forma automatizada y frecuente, validando su calidad mediante pruebas unitarias continuas."
    },
    {
        "id": 116,
        "area": "Bases de Datos",
        "pregunta": "¿Qué es una vista (View) en una base de datos relacional?",
        "opciones": [
            "A) Una consulta SQL almacenada en la base de datos que se comporta como una tabla virtual, cuyos datos se calculan o recuperan dinámicamente al consultarla.",
            "B) Una copia física duplicada de una tabla entera en otro servidor.",
            "C) Un índice optimizado para consultas de texto completo.",
            "D) La interfaz gráfica de usuario de un sistema administrador de bases de datos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una vista es una consulta virtual guardada; no almacena datos por sí misma (salvo en vistas materializadas), sino que presenta los resultados de una sentencia SELECT."
    },
    {
        "id": 117,
        "area": "Redes y Sistemas Operativos",
        "pregunta": "¿Cuál es la función del protocolo DNS (Domain Name System)?",
        "opciones": [
            "A) Asignar certificados de seguridad SSL/TLS a sitios web.",
            "B) Comprimir páginas web para acelerar la carga en el navegador.",
            "C) Enrutar paquetes de datos a través de redes globales.",
            "D) Traducir nombres de dominio legibles por humanos (ej. www.ejemplo.com) a direcciones IP numéricas utilizadas por las redes de computadoras."
        ],
        "respuestaCorrecta": 3,
        "explicacion": "El DNS actúa como la libreta de contactos de Internet, traduciendo nombres de dominio fáciles de recordar a direcciones IP comprensibles para el hardware de red."
    },
    {
        "id": 118,
        "area": "Estructuras de Datos y Algoritmos",
        "pregunta": "¿Qué es la programación dinámica?",
        "opciones": [
            "A) Un sistema operativo en tiempo real para dispositivos móviles.",
            "B) Una técnica de optimización que resuelve problemas complejos dividiéndolos en subproblemas traslapados más simples, almacenando los resultados previos (memoización) para evitar recálculos.",
            "C) Un método para diseñar algoritmos que cambian su código fuente en tiempo de ejecución.",
            "D) La ejecución concurrente de hilos en arquitecturas distribuidas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La programación dinámica resuelve problemas recursivos almacenando soluciones a subproblemas ya calculados (memoización o tabulación), logrando alta eficiencia."
    },
    {
        "id": 119,
        "area": "Inteligencia Artificial y Ciencia de Datos",
        "pregunta": "¿Qué es un pipeline de Machine Learning?",
        "opciones": [
            "A) Una métrica para medir el sobreajuste en modelos de regresión.",
            "B) Una red de servidores distribuidos para entrenar modelos de Deep Learning.",
            "C) Una secuencia estructurada y encadenada de pasos de procesamiento de datos, transformación, entrenamiento y evaluación de modelos que se ejecutan de forma automatizada.",
            "D) Un algoritmo de clasificación no supervisada."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un pipeline encapsula múltiples etapas de un flujo de Machine Learning (como normalización, PCA y clasificación), previniendo fugas de datos (data leakage) y facilitando la producción."
    },
    {
        "id": 120,
        "area": "Seguridad y Ciberseguridad",
        "pregunta": "¿Qué es un ataque de denegación de servicio (DoS) a nivel de aplicación?",
        "opciones": [
            "A) El robo de claves privadas de servidores HTTPS.",
            "B) Un corte físico de los cables de fibra óptica submarinos.",
            "C) Un ataque dirigido a agotar los recursos específicos de una aplicación web (como consultas pesadas a bases de datos o agotamiento de hilos del servidor web) simulando peticiones legítimas.",
            "D) La infección de equipos con gusanos informáticos mediante memorias USB."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "A diferencia de un ataque DoS volumétrico de red, el ataque a nivel de aplicación (Capa 7) explota recursos lógicos específicos del servidor web consumiendo su capacidad con peticiones costosas."
    }
];