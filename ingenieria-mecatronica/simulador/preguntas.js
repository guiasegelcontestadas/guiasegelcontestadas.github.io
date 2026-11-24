const bancoPreguntas = [
    {
        id: 1,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es la función de transferencia $G(s) = \\frac{Y(s)}{U(s)}$ de un sistema masa-resorte-amortiguador con masa $m$, constante de elasticidad $k$ y coeficiente de amortiguamiento $c$?",
        opciones: [
            "A) $\\frac{1}{ms^2 + cs + k}$",
            "B) $\\frac{s}{ms^2 + cs + k}$",
            "C) $\\frac{k}{ms^2 + cs + k}$",
            "D) $\\frac{1}{cs^2 + ms + k}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "aplicando la segunda ley de Newton: $m\\ddot{y} + c\\dot{y} + ky = u(t)$. Aplicando la transformada de Laplace con condiciones iniciales cero se obtiene $(ms^2 + cs + k)Y(s) = U(s)$, por lo que la función de transferencia es $1 / (ms^2 + cs + k)$ si la entrada es una fuerza aplicada y la salida el desplazamiento."
    },
    {
        id: 2,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "En el análisis de circuitos eléctricos mediante variables de estado, ¿cómo se eligen típicamente las variables de estado del sistema?",
        opciones: [
            "A) Como las corrientes en las resistencias y los voltajes en las fuentes.",
            "B) Como las corrientes en los inductores y los voltajes en los capacitores.",
            "C) Como las potencias instantáneas en cada elemento pasivo.",
            "D) Como las caídas de tensión en todas las mallas independientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las variables de estado representan la energía almacenada en el sistema dinámico. En circuitos eléctricos, la energía se almacena en los campos magnéticos de los inductores (corrientes) y en los campos eléctricos de los capacitores (voltajes)."
    },
    {
        id: 3,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Qué representa un polo complejo conjugado con parte real negativa en el plano s para la respuesta temporal de un sistema lineal e invariante en el tiempo (LIT)?",
        opciones: [
            "A) Una respuesta exponencialmente creciente y oscilatoria.",
            "B) Una respuesta puramente senoidal con amplitud constante.",
            "C) Una respuesta subamortiguada con oscilaciones amortiguadas exponencialmente.",
            "D) Una respuesta sobreamortiguada sin oscilaciones."
        ],
        respuestaCorrecta: 2,
        explicacion: "La parte real negativa indica que la envolvente decae exponencialmente con el tiempo ($e^{-\\sigma t}$), y la parte imaginaria representa la frecuencia natural oscilatoria, lo cual define un comportamiento subamortiguado estable."
    },
    {
        id: 4,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "Al modelar un sistema térmico, ¿cuál elemento físico análogo representa la resistencia térmica en un circuito eléctrico equivalente?",
        opciones: [
            "A) El capacitor",
            "B) La inductancia",
            "C) La resistencia eléctrica",
            "D) La fuente de corriente"
        ],
        respuestaCorrecta: 2,
        explicacion: "En la analogía térmico-eléctrica, el flujo de calor es análogo a la corriente, la diferencia de temperatura al voltaje, y la oposición al flujo de calor (resistencia térmica) es directamente análoga a la resistencia eléctrica."
    },
    {
        id: 5,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es el propósito principal de linearizar un modelo matemático no lineal alrededor de un punto de operación?",
        opciones: [
            "A) Eliminar por completo los efectos de las perturbaciones externas.",
            "B) Permitir el uso de herramientas de análisis y diseño de sistemas lineales como la transformada de Laplace.",
            "C) Incrementar el orden del sistema para capturar dinámicas ocultas.",
            "D) Asegurar que el sistema sea siempre inestable para propósitos de prueba."
        ],
        respuestaCorrecta: 1,
        explicacion: "La linearización mediante series de Taylor truncadas a primer orden permite aplicar la superposición y el análisis frecuencial o en el dominio de Laplace, facilitando enormemente el diseño de controladores clásicos."
    },
    {
        id: 6,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Qué indica el teorema del valor final para una función $f(t)$ cuya transformada de Laplace es $F(s)$?",
        opciones: [
            "A) $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} sF(s)$",
            "B) $\\lim_{t \\to 0} f(t) = \\lim_{s \\to \\infty} sF(s)$",
            "C) $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to \\infty} F(s)$",
            "D) $\\lim_{t \\to 0} f(t) = \\lim_{s \\to 0} s^2F(s)$"
        ],
        respuestaCorrecta: 0,
        explicacion: "El teorema del valor final permite calcular el estado estacionario de la respuesta en el tiempo evaluando el límite cuando $s$ tiende a cero de $sF(s)$, siempre y cuando los polos de $sF(s)$ estén estrictamente en el semiplano izquierdo."
    },
    {
        id: 7,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "En la representación en espacio de estados $\\dot{x} = Ax + Bu$ y $y = Cx + Du$, ¿qué dimensiones deben tener las matrices $A$, $B$, $C$ y $D$ para un sistema con $n$ estados, $m$ entradas y $p$ salidas?",
        opciones: [
            "A) $A: n \\times n$, $B: n \\times m$, $C: p \\times n$, $D: p \\times m$",
            "B) $A: m \\times m$, $B: n \\times n$, $C: p \\times m$, $D: n \\times p$",
            "C) $A: n \\times p$, $B: m \\times n$, $C: n \\times n$, $D: m \\times m$",
            "D) $A: p \\times p$, $B: p \\times m$, $C: m \\times n$, $D: n \\times n$"
        ],
        respuestaCorrecta: 0,
        explicacion: "Las dimensiones son congruentes con las operaciones matriciales del espacio de estados: $A$ opera sobre $x$ ($n \\times 1$), $B$ sobre $u$ ($m \\times 1$), resultando en derivadas de estado ($n \\times 1$). Las salidas $y$ ($p \\times 1$) se obtienen combinando $Cx$ y $Du$."
    },
    {
        id: 8,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es la condición necesaria y suficiente para que un sistema lineal e invariante en el tiempo sea completamente controlable en espacio de estados?",
        opciones: [
            "A) Que la matriz $A$ sea simétrica y definida positiva.",
            "B) Que la matriz de controlabilidad $\\mathcal{C} = [B \\, AB \\, A^2B \\, \\dots \\, A^{n-1}B]$ tenga rango completo $n$.",
            "C) Que todos los eigenvalores de $A$ tengan parte real positiva.",
            "D) Que la matriz de observabilidad tenga determinante igual a cero."
        ],
        respuestaCorrecta: 1,
        explicacion: "El criterio de Kalman establece que el sistema es completamente controlable si y solo si la matriz de controlabilidad tiene rango completo igual al número de estados del sistema ($n$)."
    },
    {
        id: 9,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "Al utilizar software de simulación para sistemas dinámicos (como Simulink), ¿qué método de integración numérica de paso fijo es de tipo Runge-Kutta de orden 4?",
        opciones: [
            "A) ode1 (Euler)",
            "B) ode2 (Heun)",
            "C) ode4 (Runge-Kutta)",
            "D) ode15s (Stiff/BDF)"
        ],
        respuestaCorrecta: 2,
        explicacion: "En la nomenclatura estándar de solvers, 'ode4' corresponde al método clásico de Runge-Kutta de cuarto orden, el cual ofrece un excelente compromiso entre precisión y costo computacional para sistemas no rígidos."
    },
    {
        id: 10,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Qué caracteriza a un sistema físico descrito como 'rígido' (stiff) en simulación numérica?",
        opciones: [
            "A) Posee únicamente componentes mecánicos metálicos sin fricción.",
            "B) Contiene dinámicas con escalas de tiempo extremadamente diferentes (unas muy rápidas y otras muy lentas).",
            "C) Su función de transferencia no tiene ceros en el origen.",
            "D) La matriz $A$ del sistema es estrictamente diagonal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un sistema rígido presenta eigenvalores con partes reales muy alejadas entre sí. Los métodos explícitos estándar requieren pasos de integración prohibitivamente pequeños para mantener la estabilidad, requiriendo métodos implícitos."
    },
    {
        id: 11,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Qué componente define la impedancia mecánica rotacional equivalente a una masa inercial $J$ en el dominio de la frecuencia?",
        opciones: [
            "A) $Js$",
            "B) $Js^2$",
            "C) $J/s$",
            "D) $Js + B$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La relación entre el torque $T(t)$ y la velocidad angular $\\omega(t)$ para una inercia pura es $T(t) = J \\dot{\\omega}(t)$. En el dominio de Laplace, $T(s) = J s \\Omega(s)$, por lo que la impedancia es $Js$."
    },
    {
        id: 12,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es la ventaja de modelar un sistema electromecánico mediante la formulación de Lagrange en comparación con la segunda ley de Newton?",
        opciones: [
            "A) Evita el cálculo de energías cinética y potencial.",
            "B) Permite obtener las ecuaciones de movimiento a partir de funciones escalares de energía sin necesidad de calcular fuerzas de ligadura internas.",
            "C) Funciona exclusivamente para sistemas con fricción seca no lineal.",
            "D) Elimina la necesidad de definir coordenadas generalizadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La mecánica lagrangiana utiliza la energía cinética y potencial ($L = T - V$), lo que simplifica enormemente la obtención de modelos para mecanismos complejos articulados al no requerir el análisis detallado de las fuerzas de reacción internas."
    },
    {
        id: 13,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "En un motor de corriente directa (CD) de imán permanente, ¿cómo se relaciona la fuerza electromotriz inducida (back-EMF) $e(t)$ con la velocidad angular del eje $\\omega(t)$?",
        opciones: [
            "A) $e(t) = K_e \\int \\omega(t) dt$",
            "B) $e(t) = K_e \\omega(t)$",
            "C) $e(t) = K_e \\frac{d\\omega(t)}{dt}$",
            "D) $e(t) = \\frac{K_e}{\\omega(t)}$"
        ],
        respuestaCorrecta: 1,
        explicacion: "La tensión inducida en la armadura de un motor de CD es directamente proporcional a la velocidad de giro del rotor a través de la constante de la fuerza contraelectromotriz $K_e$."
    },
    {
        id: 14,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Qué representa la ganancia estática (o ganancia de DC) de un sistema descrito por su función de transferencia $G(s)$?",
        opciones: [
            "A) El valor de la salida cuando $s \\to \\infty$.",
            "B) El valor al que tiende la salida ante una entrada escalón unitario una vez transcurrido el transitorio ($G(0)$).",
            "C) El valor máximo del sobreimpulso porcentual.",
            "D) La frecuencia de corte a -3 dB."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ganancia estática indica la relación entre la magnitud de la salida y la entrada en régimen permanente ante una señal constante, lo cual se obtiene evaluando $G(s)$ en $s = 0$."
    },
    {
        id: 15,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "Si un sistema de segundo orden tiene un coeficiente de amortiguamiento $\\zeta = 0$, ¿cómo es su respuesta ante una entrada escalón?",
        opciones: [
            "A) Sobreamortiguada y decae a cero.",
            "B) Críticamente amortiguada sin sobreimpulso.",
            "C) Oscilatoria sostenida (sin amortiguamiento) con amplitud constante.",
            "D) Inestable con crecimiento exponencial."
        ],
        respuestaCorrecta: 2,
        explicacion: "Un amortiguamiento $\\zeta = 0$ significa que no hay disipación de energía, por lo que los polos se encuentran puramente sobre el eje imaginario, generando oscilaciones armónicas indefinidas."
    },
    {
        id: 16,
        area: "Sistemas de Control Automático",
        pregunta: "¿Cuál es el efecto principal de agregar un controlador integral (I) en un lazo de control retroalimentado?",
        opciones: [
            "A) Aumenta el tiempo de establecimiento y reduce la estabilidad relativa.",
            "B) Elimina el error en estado estacionario ante entradas escalón y aumenta el tipo del sistema.",
            "C) Reduce el sobreimpulso porcentual en todos los casos.",
            "D) Convierte un sistema inestable en estable de manera incondicional."
        ],
        respuestaCorrecta: 1,
        explicacion: "La acción integral añade un polo en el origen ($1/s$), lo que incrementa el tipo del sistema en uno y anula el error de estado estacionario ante una referencia tipo escalón, aunque puede afectar la estabilidad relativa."
    },
    {
        id: 17,
        area: "Sistemas de Control Automático",
        pregunta: "En un controlador PID en forma estándar, ¿qué función cumple la acción derivativa (D)?",
        opciones: [
            "A) Compensar las perturbaciones de baja frecuencia.",
            "B) Anticipar el error midiendo su tasa de cambio, mejorando el margen de fase y reduciendo el sobreimpulso.",
            "C) Eliminar el error estacionario por offset.",
            "D) Filtrar el ruido de alta frecuencia proveniente de los sensores."
        ],
        respuestaCorrecta: 1,
        explicacion: "La derivada del error actúa sobre la velocidad de cambio del mismo, proporcionando una acción correctiva anticipativa que amortigua la respuesta transitoria y mejora la estabilidad."
    },
    {
        id: 18,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué define el margen de fase en el análisis de respuesta en frecuencia de un sistema de control?",
        opciones: [
            "A) La distancia en dB desde la ganancia unitaria hasta 0 dB a la frecuencia de cruce de fase.",
            "B) La cantidad de fase adicional que se puede agregar a la frecuencia de cruce de ganancia (0 dB) antes de que el sistema se vuelva inestable (-180°).",
            "C) El desfasaje máximo entre la entrada y la salida en bajas frecuencias.",
            "D) El tiempo de retraso puro debido al tiempo muerto."
        ],
        respuestaCorrecta: 1,
        explicacion: "El margen de fase mide la robustez de la estabilidad relativa. Se calcula como $\\text{MF} = 180° + \\angle G(j\\omega_{cg})$, donde $\\omega_{cg}$ es la frecuencia en la que la magnitud es 1 (0 dB)."
    },
    {
        id: 19,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué método de sintonización heurística para controladores PID se basa en medir la ganancia crítica $K_u$ y el periodo de oscilación $P_u$ en el límite de la estabilidad con control puramente proporcional?",
        opciones: [
            "A) Método de asignación de polos",
            "B) Método de Ziegler-Nichols de lazo cerrado (oscilación sostenida)",
            "C) Método de Cohen-Coon de reacción a lazo abierto",
            "D) Método de optimización LQG"
        ],
        respuestaCorrecta: 1,
        explicacion: "El segundo método de Ziegler-Nichols (lazo cerrado) incrementa la ganancia proporcional hasta obtener oscilaciones sostenidas, determinando $K_u$ y $P_u$ para calcular los parámetros PID mediante fórmulas empíricas."
    },
    {
        id: 20,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué representa el lugar geométrico de las raíces (Root Locus)?",
        opciones: [
            "A) La trayectoria de los polos de lazo cerrado en el plano complejo cuando un parámetro del sistema (usualmente la ganancia) varía de cero a infinito.",
            "B) La respuesta temporal del sistema ante una entrada de ruido blanco.",
            "C) Los ceros del sistema en lazo abierto en función del tiempo.",
            "D) Las frecuencias de resonancia del sistema mecánico."
        ],
        respuestaCorrecta: 0,
        explicacion: "El lugar geométrico de las raíces muestra gráficamente cómo se desplazan los polos del sistema en lazo cerrado en el plano $s$ al modificar la ganancia del controlador, permitiendo evaluar estabilidad y desempeño."
    },
    {
        id: 21,
        area: "Sistemas de Control Automático",
        pregunta: "¿Cuál es el objetivo principal de utilizar un observador de estado (como el observador de Luenberger) en un sistema de control?",
        opciones: [
            "A) Medir directamente todas las variables físicas mediante sensores de alta precisión.",
            "B) Estimar en tiempo real los estados internos no medibles del sistema a partir de las entradas y salidas disponibles.",
            "C) Reducir el orden del actuador mecánico.",
            "D) Sintonizar automáticamente las ganancias del controlador PID."
        ],
        respuestaCorrecta: 1,
        explicacion: "Cuando no se tienen sensores para medir todas las variables de estado necesarias para el control por realimentación de estados ($u = -Kx$), se implementa un observador que estima dichos estados utilizando el modelo matemático."
    },
    {
        id: 22,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué característica distingue a un sistema de control digital (discreto) frente a uno analógico (continuo)?",
        opciones: [
            "A) La ausencia total de errores de redondeo.",
            "B) La necesidad de muestreo de señales y cuantización, analizándose comúnmente mediante la transformada Z.",
            "C) La imposibilidad de implementar acciones integrales.",
            "D) Que su respuesta temporal es infinitamente más rápida sin importar la frecuencia de muestreo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sistemas digitales operan en instantes discretos de tiempo definidos por un periodo de muestreo $T$, transformando señales continuas en discretas mediante ADC y DAC, y modelándose mediante la transformada Z."
    },
    {
        id: 23,
        area: "Sistemas de Control Automático",
        pregunta: "Según el teorema de muestreo de Nyquist-Shannon, ¿cuál debe ser la relación entre la frecuencia de muestreo $f_s$ y la frecuencia máxima $f_{max}$ contenida en la señal para evitar el fenómeno de aliasing?",
        opciones: [
            "A) $f_s = f_{max}$",
            "B) $f_s \\leq f_{max}$",
            "C) $f_s > 2 f_{max}$",
            "D) $f_s = \\frac{1}{2} f_{max}$"
        ],
        respuestaCorrecta: 2,
        explicacion: "Para reconstruir o procesar adecuadamente una señal sin solapamiento espectral (aliasing), la frecuencia de muestreo debe ser estrictamente mayor al doble de la frecuencia máxima de interés ($f_s > 2f_{max}$)."
    },
    {
        id: 24,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué representa el margen de ganancia en el diagrama de Bode?",
        opciones: [
            "A) El factor por el cual se puede multiplicar la ganancia del lazo antes de que el sistema se vuelva inestable, medido a la frecuencia donde la fase es -180°.",
            "B) La máxima ganancia que el controlador puede alcanzar en alta frecuencia.",
            "C) La atenuación del ruido a la frecuencia de corte.",
            "D) El error estacionario ante una rampa."
        ],
        respuestaCorrecta: 0,
        explicacion: "El margen de ganancia evalúa cuánta ganancia adicional soporta el sistema antes de alcanzar la inestabilidad. Se mide en dB en la frecuencia de cruce de fase (donde la fase es -180°)."
    },
    {
        id: 25,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué efecto produce la introducción de un compensador de adelanto de fase (Lead compensator) en un sistema de control?",
        opciones: [
            "A) Reduce el ancho de banda y hace el sistema más lento.",
            "B) Aporta fase positiva en un rango de frecuencias, mejorando el margen de fase y la velocidad de respuesta transitoria.",
            "C) Elimina completamente el error en estado estacionario como lo haría un integrador puro.",
            "D) Atenúa fuertemente las señales de alta frecuencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "El compensador de adelanto agrega un cero y un polo (con el cero más cercano al origen que el polo), lo que adelanta la fase y permite incrementar la ganancia de cruce, acelerando la respuesta."
    },
    {
        id: 26,
        area: "Sistemas de Control Automático",
        pregunta: "¿Cuál es la función de un compensador de atraso de fase (Lag compensator)?",
        opciones: [
            "A) Acelerar drásticamente el tiempo de establecimiento.",
            "B) Mejorar el error en estado estacionario (aumentando la ganancia a bajas frecuencias) sin afectar significativamente la estabilidad transitoria.",
            "C) Introducir un retardo de tiempo puro en el lazo.",
            "D) Destruir los polos dominantes del sistema."
        ],
        respuestaCorrecta: 1,
        explicacion: "El compensador de atraso coloca un polo cerca del origen y un cero un poco antes, incrementando la ganancia en baja frecuencia para reducir el error estacionario mientras preserva el margen de fase en altas frecuencias."
    },
    {
        id: 27,
        area: "Sistemas de Control Automático",
        pregunta: "En control óptimo, ¿qué resuelve el regulador cuadrático lineal (LQG / LQR)?",
        opciones: [
            "A) Minimiza una función de costo cuadrática que equilibra el desempeño del error y el esfuerzo de control.",
            "B) Maximiza el tiempo de establecimiento utilizando la ganancia mínima posible.",
            "C) Controla exclusivamente sistemas lineales de primer orden sin perturbaciones.",
            "D) Ajusta las constantes de un PID mediante redes neuronales."
        ],
        respuestaCorrecta: 0,
        explicacion: "El LQR calcula una ley de control por realimentación de estados $u = -Kx$ que minimiza una integral de costo ponderada cuadráticamente entre los estados y las acciones de control, garantizando estabilidad óptima."
    },
    {
        id: 28,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué es un sistema de control en cascada?",
        opciones: [
            "A) Un sistema con múltiples salidas y una sola entrada (MISO).",
            "B) Un esquema que utiliza dos lazos de control anidados: un lazo interno (esclavo) que rechaza perturbaciones rápidas y un lazo externo (maestro) que regula la variable principal.",
            "C) Un conjunto de controladores PID conectados en paralelo.",
            "D) Un sistema de control donde la señal de referencia cambia aleatoriamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "El control en cascada mejora el rechazo a perturbaciones y la linealidad al utilizar un controlador secundario (esclavo) que actúa sobre la planta más rápido que el controlador primario (maestro)."
    },
    {
        id: 29,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué indica el criterio de estabilidad de Routh-Hurwitz?",
        opciones: [
            "A) Permite calcular el valor exacto del sobreimpulso porcentual en sistemas no lineales.",
            "B) Determina el número de raíces (polos) con parte real positiva en el plano $s$ sin necesidad de resolver la ecuación característica.",
            "C) Calcula la respuesta en frecuencia de un circuito RLC.",
            "D) Evalúa la controlabilidad de los estados internos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El criterio algebraico de Routh-Hurwitz analiza los coeficientes de la ecuación característica construyendo una tabla; los cambios de signo en la primera columna indican la cantidad de polos inestables."
    },
    {
        id: 30,
        area: "Sistemas de Control Automático",
        pregunta: "¿Cómo se define el tiempo de establecimiento (settling time, $T_s$ al 2%) para un sistema subamortiguado de segundo orden?",
        opciones: [
            "A) $T_s = \\frac{0.69}{-\\sigma}$",
            "B) $T_s = \\frac{4}{\\sigma} = \\frac{4}{\\zeta \\omega_n}$",
            "C) $T_s = \\frac{\\pi}{\\omega_d}$",
            "D) $T_s = \\frac{2.2}{\\omega_n}$"
        ],
        respuestaCorrecta: 1,
        explicacion: "El tiempo de establecimiento al 2% corresponde al tiempo en que la respuesta entra y permanece dentro de una banda del 2% del valor final, determinado por la envolvente exponencial $\\sigma = \\zeta \\omega_n$, resultando en $4 / (\\zeta \\omega_n)$."
    },
    {
        id: 31,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cuál es el principio de operación de un transductor tipo LVDT (Transformador Diferencial Variable Lineal)?",
        opciones: [
            "A) Variación de resistencia eléctrica por deformación mecánica en un puente de Wöhler.",
            "B) Medición del cambio de inductancia mutua entre un devanado primario y dos secundarios debido al desplazamiento de un núcleo magnético móvil.",
            "C) Emisión de ondas ultrasónicas para calcular el tiempo de vuelo.",
            "D) Generación de carga piezoeléctrica por presión directa."
        ],
        respuestaCorrecta: 1,
        explicacion: "El LVDT consta de un devanado primario central y dos secundarios opuestos. Al desplazarse el núcleo ferromagnético, induce voltajes diferenciales en los secundarios proporcionales a la magnitud y dirección del movimiento."
    },
    {
        id: 32,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué tecnología de sensor óptico de posición proporciona pulsos en cuadratura (señales desfasadas 90 grados) para determinar tanto la velocidad como el sentido de giro?",
        opciones: [
            "A) Fotorresistencia LDR básica",
            "B) Encoder incremental",
            "C) Diodo láser de emisión continua",
            "D) Sensor de efecto Hall unipolar"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los encoders incrementales con salidas en cuadratura (canales A y B) generan señales desfasadas 90°; el análisis de qué canal se adelanta al otro permite deducir el sentido de rotación (horario o antihorario)."
    },
    {
        id: 33,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cuál es el fenómeno físico en el que se basa un sensor de efecto Hall?",
        opciones: [
            "A) La variación de la resistencia de un semiconductor al calentarse.",
            "B) La aparición de una diferencia de potencial transversal en un conductor o semiconductor por el cual circula corriente cuando se aplica un campo magnético perpendicular.",
            "C) La acumulación de cargas eléctricas en cristales de cuarzo sometidos a fuerzas mecánicas.",
            "D) La emisión de luz infrarroja reflejada por superficies opacas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El efecto Hall describe la fuerza de Lorentz sobre los portadores de carga en movimiento dentro de un campo magnético, generando un voltaje transversal proporcional a la densidad del campo magnético."
    },
    {
        id: 34,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "En instrumentación industrial, ¿por qué son ampliamente preferidas las señales de corriente de 4 a 20 mA sobre las señales de voltaje de 0 a 10 V para la transmisión de datos a larga distancia?",
        opciones: [
            "A) Porque consumen menor potencia y no requieren fuentes de alimentación.",
            "B) Porque son inmunes a la caída de tensión por resistencia en los cables y menos susceptibles al ruido electromagnético.",
            "C) Porque permiten velocidades de transmisión gigabit por segundo.",
            "D) Porque operan directamente con lógica TTL."
        ],
        respuestaCorrecta: 1,
        explicacion: "La corriente es constante a lo largo del lazo independientemente de la resistencia de los cables (dentro de ciertos límites), evitando las caídas de tensión parásitas. Además, el piso de 4 mA permite detectar fallas (corte de cable si hay 0 mA)."
    },
    {
        id: 35,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué dispositivo semiconductor de potencia es completamente controlable (tanto para encendido como para apagado mediante su terminal de compuerta) y es ideal para aplicaciones de alta frecuencia en conmutación?",
        opciones: [
            "A) Diodo rectificador de silicio",
            "B) Tiristor SCR (Silicon Controlled Rectifier)",
            "C) Transistor MOSFET de potencia",
            "D) TRIAC convencional"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los MOSFETs de potencia se controlan por voltaje en la compuerta, permitiendo frecuencias de conmutación muy elevadas con bajas pérdidas por conmutación en comparación con los tiristores."
    },
    {
        id: 36,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cuál es la función principal de un circuito rectificador controlado de onda completa con tiristores (SCRs)?",
        opciones: [
            "A) Convertir voltaje alterno (AC) fijo en voltaje directo (DC) ajustable variando el ángulo de disparo.",
            "B) Amplificar señales analógicas de audio con alta fidelidad.",
            "C) Generar ondas senoidales puras a partir de una batería.",
            "D) Elevar el voltaje de corriente directa mediante inductores acoplados."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los rectificadores controlados mediante SCRs permiten regular el voltaje DC de salida mediante el control del ángulo de disparo ($\\alpha$), siendo fundamentales en control de motores y fuentes industriales."
    },
    {
        id: 37,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué técnica de modulación se utiliza comúnmente en inversores DC-AC para sintetizar una salida senoidal mediante la comparación de una señal moduladora de referencia y una onda portadora triangular de alta frecuencia?",
        opciones: [
            "A) Modulación por amplitud modulada (AM)",
            "B) Modulación por ancho de pulso senoidal (SPWM)",
            "C) Modulación por desplazamiento de fase (PSK)",
            "D) Modulación delta adaptativa"
        ],
        respuestaCorrecta: 1,
        explicacion: "La técnica SPWM compara una referencia senoidal con una portadora triangular de alta frecuencia para generar pulsos cuyo ancho varía senoidalmente, reduciendo los armónicos de baja frecuencia en la salida del inversor."
    },
    {
        id: 38,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cuál es el principio de funcionamiento de un motor paso a paso (Stepper Motor) de tipo híbrido?",
        opciones: [
            "A) Gira de manera continua induciendo corrientes en un rotor en cortocircuito mediante campos rotatorios trifásicos.",
            "B) Convierte impulsos eléctricos discretos en desplazamientos angulares precisos mediante la alineación magnética de los dientes del rotor y estator.",
            "C) Requiere obligatoriamente un sensor de posición analógico para conmutar las fases por realimentación.",
            "D) Utiliza presión hidráulica interna para fijar su posición por etapas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los motores paso a paso se posicionan en incrementos angulares fijos (pasos) energizando las bobinas del estator en una secuencia digital específica, permitiendo control de posición en lazo abierto de alta precisión."
    },
    {
        id: 39,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué ventaja principal ofrece un servomotor de corriente alterna (AC Servo) frente a un motor de corriente directa convencional en aplicaciones de posicionamiento de alta dinámica?",
        opciones: [
            "A) Ausencia de escobillas y colector, lo que reduce el mantenimiento, elimina chispas y permite mayor velocidad y aceleración.",
            "B) Funcionamiento directo con corriente alterna residencial sin necesidad de drivers.",
            "C) Costo significativamente menor y mayor sencillez constructiva.",
            "D) Torque estático infinito sin consumo de corriente."
        ],
        respuestaCorrecta: 0,
        explicacion: "Los servomotores AC carecen de escobillas (brushless), lo que disminuye la inercia del rotor, mejora la disipación térmica y permite soportar picos de aceleración muy elevados requeridos en robótica y CNC."
    },
    {
        id: 40,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué es un convertidor DC-DC tipo Buck (reductor)?",
        opciones: [
            "A) Un circuito que eleva un voltaje de entrada DC a un valor mayor mediante un transformador.",
            "B) Un circuito conmutado que reduce un voltaje de entrada DC a un nivel DC menor mediante el control del ciclo de trabajo (duty cycle) de un interruptor semiconductor.",
            "C) Un rectificador controlado que convierte AC en DC regulada.",
            "D) Un amplificador lineal de potencia para señales de audio."
        ],
        respuestaCorrecta: 1,
        explicacion: "El convertidor Buck utiliza un transistor conmutado, un diodo de rueda libre, un inductor y un capacitor para entregar un voltaje de salida promedio inferior al voltaje de entrada, regulado por el ciclo de trabajo $D$ ($V_{out} = D \\cdot V_{in}$)."
    },
    {
        id: 41,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cuál es la finalidad de utilizar un diodo de libre circulación (flywheel o freewheeling diode) en paralelo con una carga inductiva controlada por un transistor conmutado?",
        opciones: [
            "A) Elevar la tensión máxima de alimentación de la carga.",
            "B) Proporcionar un camino de baja resistencia para la corriente inductiva cuando el transistor se abre, evitando picos de voltaje destructivos.",
            "C) Convertir la energía inductiva en calor disipado por el aire.",
            "D) Acelerar el tiempo de encendido del circuito."
        ],
        respuestaCorrecta: 1,
        explicacion: "Al interrumpir la corriente en una inductancia, el campo magnético colapsa generando un pico de voltaje muy alto ($V = L \\frac{di}{dt}$). El diodo en antiparalelo permite que la corriente recircule, protegiendo al elemento semiconductor."
    },
    {
        id: 42,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué dispositivo optoelectrónico se utiliza comúnmente para lograr aislamiento galvánico entre la etapa de control de baja potencia y la etapa de potencia en sistemas electrónicos?",
        opciones: [
            "A) Un amplificador operacional 741",
            "B) Un optoacoplador (optoisolator)",
            "C) Un varistor de óxido metálico (MOV)",
            "D) Un circuito integrado 555"
        ],
        respuestaCorrecta: 1,
        explicacion: "El optoacoplador utiliza un LED y un fotodetector dentro del mismo encapsulado, transmitiendo la señal de control mediante luz y evitando que transitorios o altos voltajes de la etapa de potencia dañen los microcontroladores."
    },
    {
        id: 43,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué es un termopar y en qué efecto físico se basa su funcionamiento?",
        opciones: [
            "A) Un sensor resistivo basado en el cambio de resistencia del platino con la temperatura.",
            "B) Un sensor termoeléctrico basado en el efecto Seebeck, donde la unión de dos metales diferentes genera un voltaje proporcional a la diferencia de temperatura.",
            "C) Un semiconductor cuya caída de tensión directa varía con el calor.",
            "D) Un dispositivo que emite radiación infrarroja según la ley de Stefan-Boltzmann."
        ],
        respuestaCorrecta: 1,
        explicacion: "El efecto Seebeck genera una fuerza electromotriz cuando existe un gradiente térmico entre la unión de medición y la unión de referencia de dos metales distintos."
    },
    {
        id: 44,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Cómo opera un amplificador de instrumentación basado en tres amplificadores operacionales?",
        opciones: [
            "A) Presenta impedancias de entrada extremadamente altas, alto rechazo al modo común (CMRR) y una ganancia fácilmente ajustable mediante una sola resistencia externa.",
            "B) Invierte la fase de la señal de entrada con ganancia unitaria.",
            "C) Se utiliza exclusivamente para sumar señales de corriente alterna en fuentes de poder.",
            "D) Realiza operaciones matemáticas de integración analógica con alta precisión."
        ],
        respuestaCorrecta: 0,
        explicacion: "El amplificador de instrumentación es el estándar en el acondicionamiento de señales de sensores (como celdas de carga y termopares) debido a su altísima impedancia de entrada diferencial y su excelente rechazo al ruido de modo común."
    },
    {
        id: 45,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué es un tacómetro tacogenerador en sistemas de control de velocidad?",
        opciones: [
            "A) Un sensor óptico que cuenta las revoluciones totales en un turno de trabajo.",
            "B) Un generador eléctrico miniatura acoplado al eje cuyo voltaje de salida es directamente proporcional a la velocidad angular.",
            "C) Un dispositivo piezoeléctrico que mide vibraciones mecánicas.",
            "D) Un tacómetro láser sin contacto por efecto Doppler."
        ],
        respuestaCorrecta: 1,
        explicacion: "El tacogenerador proporciona una señal analógica en voltaje (DC o AC) cuya magnitud escala linealmente con la velocidad de rotación, empleándose tradicionalmente como realimentación en bucles analógicos de velocidad."
    },
    {
        id: 46,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué función cumple una interrupción por hardware en un microcontrolador?",
        opciones: [
            "A) Detiene permanentemente la ejecución del programa principal ante un error de software.",
            "B) Suspende temporalmente la ejecución del programa principal para atender un evento prioritario, ejecutando una rutina de servicio de interrupción (ISR) antes de retornar al punto donde fue interrumpido.",
            "C) Acelera la velocidad de reloj del núcleo del procesador automáticamente.",
            "D) Reinicia el microcontrolador cuando se desborda la memoria RAM."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las interrupciones permiten al microcontrolador reaccionar de forma inmediata a eventos externos (como flancos en pines o desbordamientos de temporizadores) sin gastar ciclos de CPU en sondeos continuos (polling)."
    },
    {
        id: 47,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es un convertidor Analógico-Digital (ADC) de aproximaciones sucesivas (SAR)?",
        opciones: [
            "A) Un conversor ultrarrápido tipo flash que utiliza miles de comparadores en paralelo.",
            "B) Un conversor que utiliza un registro de desplazamiento y un conversor DAC interno para determinar el valor digital bit a bit mediante una búsqueda binaria.",
            "C) Un circuito basado en la integración de voltaje en un capacitor durante un tiempo fijo.",
            "D) Un modulador sigma-delta de alta resolución y baja velocidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ADC SAR utiliza una estrategia de búsqueda binaria (aproximaciones sucesivas) para comparar la señal de entrada analógica con voltajes internos generados por un DAC, completando la conversión en un número de ciclos igual a su resolución en bits."
    },
    {
        id: 48,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué protocolo de comunicación serial síncrono utiliza cuatro señales: MOSI, MISO, SCLK y SS (Slave Select)?",
        opciones: [
            "A) I2C (Inter-Integrated Circuit)",
            "B) UART (Universal Asynchronous Receiver-Transmitter)",
            "C) SPI (Serial Peripheral Interface)",
            "D) CAN Bus (Controller Area Network)"
        ],
        respuestaCorrecta: 2,
        explicacion: "SPI es un bus síncrono de alta velocidad que emplea una arquitectura maestro-esclavo utilizando líneas dedicadas para datos en ambas direcciones (MOSI/MISO), reloj (SCLK) y selección de esclavo independiente (SS)."
    },
    {
        id: 49,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué características definen al protocolo de comunicación I2C?",
        opciones: [
            "A) Utiliza cuatro cables y comunicación unidireccional de alta velocidad.",
            "B) Utiliza dos líneas bidireccionales (SDA para datos y SCL para reloj) con direccionamiento de dispositivos mediante bus maestro-esclavo.",
            "C) Es un protocolo puramente asíncrono basado en niveles de voltaje RS-232.",
            "D) Requiere terminadores de 120 ohms en ambos extremos del bus diferencial."
        ],
        respuestaCorrecta: 1,
        explicacion: "I2C (Two-Wire Interface) emplea solo dos líneas (SDA y SCL) con resistencias de pull-up, permitiendo conectar múltiples dispositivos maestros y esclavos mediante direcciones únicas de 7 o 10 bits."
    },
    {
        id: 50,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Cuál es la función del registro de control de un temporizador/contador (Timer/Counter) en un microcontrolador al configurarlo en modo PWM (Pulse Width Modulation)?",
        opciones: [
            "A) Medir la temperatura interna del silicio.",
            "B) Configurar la frecuencia de conteo, el modo de operación (por ejemplo, PWM rápido o corregido por fase) y la polaridad de salida en los pines dedicados.",
            "C) Establecer la velocidad de baudios para la transmisión UART.",
            "D) Gestionar los permisos de lectura de la memoria flash."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los registros de control de los temporizadores permiten configurar el preescalador (prescaler), el desbordamiento y los modos de comparación para generar señales PWM con un ciclo de trabajo ajustable."
    },
    {
        id: 51,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es el mecanismo de 'Watchdog Timer' (WDT) en sistemas embebidos?",
        opciones: [
            "A) Un temporizador de alta precisión para calibrar relojes de tiempo real (RTC).",
            "B) Un temporizador independiente que reinicia automáticamente el microcontrolador si el software se bloquea o deja de actualizar ('alimentar') el registro del WDT dentro de un plazo establecido.",
            "C) Un medidor de consumo energético para optimizar baterías.",
            "D) Un depurador por hardware conectado al puerto JTAG."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Watchdog es un mecanismo de seguridad crítico en sistemas embebidos autónomos; si el programa entra en un ciclo infinito o falla, el WDT no es 'alimentado' a tiempo y fuerza un reinicio del sistema."
    },
    {
        id: 52,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué ventaja ofrece el uso de un Sistema Operativo de Tiempo Real (RTOS) frente a un bucle infinito superloop en microcontroladores?",
        opciones: [
            "A) Permite la ejecución de múltiples tareas concurrentes con gestión determinista de prioridades y tiempos de respuesta garantizados.",
            "B) Reduce la velocidad de procesamiento para ahorrar energía.",
            "C) Elimina por completo la necesidad de utilizar memoria RAM.",
            "D) Hace que el código sea independiente de la arquitectura del microcontrolador."
        ],
        respuestaCorrecta: 0,
        explicacion: "Un RTOS provee un núcleo con planificación de tareas (scheduler), semáforos, colas y exclusión mutua, garantizando que las tareas críticas de tiempo real se ejecuten en los plazos requeridos."
    },
    {
        id: 53,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es la inversión de prioridad (Priority Inversion) en un RTOS y cómo se previene?",
        opciones: [
            "A) Un error donde una tarea de baja prioridad bloquea indirectamente a una tarea de alta prioridad debido a la compartición de un recurso protegido, previniéndose mediante herencia de prioridad.",
            "B) El proceso de intercambiar las direcciones de memoria de la pila y el montón.",
            "C) Cuando el procesador ejecuta las tareas en orden inverso alfabético.",
            "D) Un fallo en el convertidor A/D por exceso de ruido."
        ],
        respuestaCorrecta: 0,
        explicacion: "La inversión de prioridad ocurre cuando una tarea de baja prioridad mantiene un recurso (mutex) que necesita una tarea de alta prioridad, y una tarea de media prioridad interrumpe a la de baja, retrasando a la de alta. Se resuelve con herencia de prioridad."
    },
    {
        id: 54,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es el protocolo CAN Bus (Controller Area Network) y cuáles son sus características principales?",
        opciones: [
            "A) Un bus serial síncrono punto a punto para conectar memorias EEPROM.",
            "B) Un bus de comunicación serial robusto de dos hilos diferenciales, basado en eventos con arbitraje por contenido de mensajes (non-destructive bit-wise arbitration), ampliamente usado en automotriz e industrial.",
            "C) Un protocolo inalámbrico de corto alcance para dispositivos wearables.",
            "D) Una red de área local basada en fibra óptica y conmutación de paquetes IP."
        ],
        respuestaCorrecta: 1,
        explicacion: "CAN Bus destaca por su alta inmunidad al ruido electromagnético gracias a su señalización diferencial y su protocolo de arbitraje por identificador, permitiendo comunicación confiable sin nodos maestros centralizados."
    },
    {
        id: 55,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "En la programación de microcontroladores en lenguaje C, ¿qué palabra clave se debe utilizar al declarar una variable global que será modificada tanto por el programa principal como por una Rutina de Servicio de Interrupción (ISR)?",
        opciones: [
            "A) static",
            "B) volatile",
            "C) const",
            "D) extern"
        ],
        respuestaCorrecta: 1,
        explicacion: "La palabra clave `volatile` indica al compilador que el valor de la variable puede cambiar en cualquier momento por causas externas al flujo normal del programa (como una interrupción), evitando que el compilador optimice su lectura almacenándola en un registro de la CPU."
    },
    {
        id: 56,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Cuál es la diferencia fundamental entre arquitectura Harvard y arquitectura Von Neumann?",
        opciones: [
            "A) La arquitectura Harvard utiliza buses y espacios de memoria separados para instrucciones y datos, permitiendo acceso simultáneo, mientras que Von Neumann comparte el mismo bus y memoria.",
            "B) Von Neumann es exclusiva para microcontroladores de 8 bits y Harvard para supercomputadoras.",
            "C) Harvard no permite operaciones aritméticas, solo lógicas.",
            "D) Von Neumann utiliza registros de desplazamiento en lugar de memoria RAM."
        ],
        respuestaCorrecta: 0,
        explicacion: "La separación de memorias de programa y datos en la arquitectura Harvard elimina el cuello de botella de Von Neumann, permitiendo leer una instrucción y acceder a un dato en el mismo ciclo de reloj."
    },
    {
        id: 57,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué función cumple el DMA (Direct Memory Access) en un sistema basado en microcontrolador o microprocesador?",
        opciones: [
            "A) Realizar operaciones matemáticas complejas en punto flotante sin usar la ALU.",
            "B) Transferir bloques de datos directamente entre la memoria y los periféricos (como ADC o UART) sin la intervención constante de la CPU, liberando ciclos de procesamiento.",
            "C) Administrar la energía de la batería en modo de bajo consumo.",
            "D) Cifrar los datos almacenados en la memoria flash interna."
        ],
        respuestaCorrecta: 1,
        explicacion: "El controlador DMA es un componente de hardware dedicado a mover datos a alta velocidad entre periféricos y memoria de forma autónoma, evitando que la CPU pierda tiempo en transferencias byte por byte."
    },
    {
        id: 58,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es la modulación por ancho de pulso (PWM) y cómo se define su ciclo de trabajo (duty cycle)?",
        opciones: [
            "A) La variación de la frecuencia de una onda senoidal en función del voltaje de entrada.",
            "B) El porcentaje del periodo total en el que la señal se encuentra en estado alto (activo), calculado como $D = \\frac{t_{on}}{T} \\times 100\\%$.",
            "C) La relación entre la corriente máxima y la corriente mínima en un motor.",
            "D) El tiempo que tarda un pin digital en cambiar de 0 a 5 volts."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ciclo de trabajo (duty cycle) representa la proporción de tiempo que el pulso permanece activo ($t_{on}$) respecto al periodo completo ($T$), permitiendo controlar la potencia promedio entregada a una carga."
    },
    {
        id: 59,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué función tiene un convertidor Digital-Analógico (DAC) en un sistema embebido?",
        opciones: [
            "A) Transformar pulsos de un encoder en una cuenta numérica.",
            "B) Convertir un valor binario digital proveniente del procesador en una señal de voltaje o corriente analógica continua.",
            "C) Leer sensores de temperatura resistivos mediante un puente de Wheatstone.",
            "D) Filtrar el ruido de alta frecuencia en líneas de alimentación."
        ],
        respuestaCorrecta: 1,
        explicacion: "El DAC realiza la operación inversa al ADC, generando niveles de voltaje analógicos específicos a partir de una palabra digital, siendo útil en síntesis de audio, generación de referencias y control analógico."
    },
    {
        id: 60,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es el proceso de depuración (debugging) mediante interfaz JTAG o SWD en microcontroladores?",
        opciones: [
            "A) La grabación masiva de código en la memoria de producción de fábrica.",
            "B) Una interfaz de hardware dedicada que permite pausar la ejecución del programa (breakpoints), inspeccionar registros y memoria RAM, y ejecutar paso a paso el código en tiempo real.",
            "C) El análisis de la señal de radiofrecuencia del Wi-Fi integrado.",
            "D) La compilación cruzada del código fuente en la computadora."
        ],
        respuestaCorrecta: 1,
        explicacion: "JTAG (Joint Test Action Group) y SWD (Serial Wire Debug) son estándares de hardware para pruebas y depuración, permitiendo a los ingenieros observar el comportamiento interno del microcontrolador mientras ejecuta el programa."
    },
    {
        id: 61,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué representa la matriz de transformación homogénea $T$ de Denavit-Hartenberg (D-H) entre dos eslabones consecutivos de un robot manipulador?",
        opciones: [
            "A) Únicamente la aceleración lineal de la herramienta en coordenadas cartesianas.",
            "B) Una matriz de $4 \\times 4$ que combina la rotación y la traslación necesarias para relacionar el sistema de coordenadas de un eslabón con el siguiente.",
            "C) La inversa de la matriz de inercias articulares.",
            "D) El modelo dinámico completo del robot en espacio articular."
        ],
        respuestaCorrecta: 1,
        explicacion: "La convención de Denavit-Hartenberg utiliza cuatro parámetros para definir la cinemática de un robot, expresando la relación espacial entre eslabones adyacentes mediante una matriz de transformación homogénea de $4 \\times 4$."
    },
    {
        id: 62,
        area: "Robótica y Cinemática",
        pregunta: "¿Cuál es la diferencia fundamental entre la cinemática directa y la cinemática inversa de un robot manipulador?",
        opciones: [
            "A) La cinemática directa calcula la posición y orientación del efector final a partir de los ángulos de las articulaciones, mientras que la inversa calcula los ángulos articulares necesarios para alcanzar una pose deseada del efector final.",
            "B) La cinemática directa utiliza matrices de rotación y la inversa utiliza exclusivamente derivadas temporales.",
            "C) La cinemática directa solo aplica para robots móviles y la inversa para brazos robóticos.",
            "D) No existe diferencia matemática entre ambas."
        ],
        respuestaCorrecta: 0,
        explicacion: "La cinemática directa va de las articulaciones al espacio cartesiano ($X = f(q)$), lo cual es directo de calcular. La cinemática inversa va del espacio cartesiano a las articulaciones ($q = f^{-1}(X)$), lo que suele ser complejo y tener múltiples soluciones."
    },
    {
        id: 63,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué es la matriz Jacobiana $J(q)$ en la cinemática de robots manipuladores?",
        opciones: [
            "A) La matriz de distribución de masas y inercias articulares.",
            "B) Una matriz que relaciona las velocidades articulares $\\dot{q}$ con las velocidades lineales y angulares del efector final en el espacio cartesiano.",
            "C) La matriz de covarianza de los sensores ópticos de navegación.",
            "D) El conjunto de ganancias proporcionales para el control de posición."
        ],
        respuestaCorrecta: 1,
        explicacion: "El Jacobiano cinemático es fundamental en robótica porque mapea las velocidades del espacio articular al espacio operativo cartesiano y permite analizar singularidades donde el robot pierde grados de libertad."
    },
    {
        id: 64,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué representa una singularidad cinemática en un robot manipulador?",
        opciones: [
            "A) El punto donde el robot alcanza su máxima velocidad y temperatura de operación.",
            "B) Una configuración geométrica en la cual el rango de movilidad del robot se reduce, el Jacobiano pierde rango (determinante cero) y se requieren velocidades articulares infinitas para ciertos movimientos cartesianos.",
            "C) El fallo permanente de los motores paso a paso de la base.",
            "D) El momento en que la batería del controlador se descarga por completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las singularidades ocurren en los límites del espacio de trabajo o en configuraciones internas (como cuando el codo está totalmente estirado), donde el determinante del Jacobiano se anula y el control cartesiano falla."
    },
    {
        id: 65,
        area: "Robótica y Cinemática",
        pregunta: "¿Cuál es la formulación general de la dinámica de un robot manipulador rígido en espacio articular?",
        opciones: [
            "A) $M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + G(q) = \\tau$",
            "B) $J(q)\\dot{q} = v$",
            "C) $F = kx + c\\dot{x}$",
            "D) $V = IR + L\\frac{di}{dt}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La ecuación dinámica de Euler-Lagrange para un robot incluye la matriz de inercia $M(q)$, el vector de fuerzas centrífugas y de Coriolis $C(q,\\dot{q})$, el vector de gravedad $G(q)$ y el vector de torques aplicados $\\tau$."
    },
    {
        id: 66,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué técnica de control se utiliza comúnmente para compensar los términos no lineales de la dinámica de un robot, logrando un control desacoplado y lineal por articulación?",
        opciones: [
            "A) Control PID puramente analógico sin realimentación.",
            "B) Control por par computado (Computed Torque Control / Linealización por realimentación)",
            "C) Control todo-nada (On-Off con histéresis)",
            "D) Control por lógica difusa sin modelo matemático"
        ],
        respuestaCorrecta: 1,
        explicacion: "El control por par computado utiliza el modelo dinámico completo del robot para cancelar las no linealidades (gravedad, Coriolis, inercia), permitiendo aplicar un control lineal clásico (como PD) en cada articulación."
    },
    {
        id: 67,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué es la odometría en robots móviles autónomos (AGVs/AMRs)?",
        opciones: [
            "A) Un sistema de posicionamiento global por satélite de alta precisión militar.",
            "B) El uso de datos de sensores de movimiento en las ruedas (como encoders) para estimar el cambio en la posición del robot a lo largo del tiempo respecto a una referencia inicial.",
            "C) La medición de la intensidad del campo magnético terrestre mediante una brújula digital.",
            "D) La detección de obstáculos mediante sonar ultrasónico."
        ],
        respuestaCorrecta: 1,
        explicacion: "La odometría integra las revoluciones de las ruedas para calcular la trayectoria del robot móvil; sin embargo, acumula errores de deriva (drift) debido al deslizamiento y pequeñas imperfecciones mecánicas."
    },
    {
        id: 68,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué es el algoritmo SLAM (Simultaneous Localization and Mapping) en robótica móvil?",
        opciones: [
            "A) Un protocolo de comunicación inalámbrica para enjambres de drones.",
            "B) El proceso mediante el cual un robot desconocido construye un mapa de su entorno y al mismo tiempo estima su propia localización dentro de dicho mapa.",
            "C) Un método de planificación de trayectorias basado en inteligencia artificial y redes neuronales profundas.",
            "D) Una técnica para calibrar los encoders de las ruedas motrices."
        ],
        respuestaCorrecta: 1,
        explicacion: "SLAM es uno de los problemas fundamentales en robótica autónoma, resolviendo el dilema del huevo y la gallina: para mapear necesito saber dónde estoy, y para saber dónde estoy necesito un mapa."
    },
    {
        id: 69,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué es un mecanismo de tipo Delta (robot paralelo)?",
        opciones: [
            "A) Un brazo robótico serial de seis grados de libertad articulado antropomórfico.",
            "B) Un robot paralelo de tres grados de libertad traslacionales que utiliza tres brazos articulados conectados a una plataforma móvil inferior, destacando por su alta velocidad y aceleración.",
            "C) Un vehículo submarino autónomo impulsado por propulsores hidráulicos.",
            "D) Una plataforma móvil de tracción diferencial con ruedas omnidireccionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los robots Delta son mecanismos paralelos donde los motores están fijos en la base, lo que reduce drásticamente la masa inercial de los eslabones y permite ciclos de trabajo extremadamente rápidos en líneas de empaque y selección."
    },
    {
        id: 70,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué son los cuaterniones en la representación de la orientación espacial en robótica?",
        opciones: [
            "A) Matrices de $4 \\times 4$ utilizadas exclusivamente para traslaciones puras.",
            "B) Una extensión de los números complejos compuesta por una parte escalar y un vector tridimensional ($q = q_0 + q_1i + q_2j + q_3k$), que evita el problema del bloqueo de cardán (gimbal lock) de los ángulos de Euler.",
            "C) Coordenadas polares tridimensionales para motores paso a paso.",
            "D) Vectores de velocidad articular en el espacio de trabajo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los cuaterniones proporcionan una representación compacta y matemáticamente robusta de las rotaciones tridimensionales sin sufrir singularidades matemáticas como el bloqueo de cardán que afecta a los ángulos de Euler."
    },
    {
        id: 71,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Cuál es el criterio de falla estática adecuado para materiales dúctiles sometidos a esfuerzos complejos (multiaxiales)?",
        opciones: [
            "A) Criterio de máxima resistencia a la tensión de Rankine",
            "B) Criterio de energía de distorsión máxima (Von Mises - Hencky)",
            "C) Criterio de Mohr frágil",
            "D) Criterio de fatiga de Goodman modificada"
        ],
        respuestaCorrecta: 1,
        explicacion: "Para materiales dúctiles, la teoría de la energía de distorsión (Von Mises) predice con gran precisión el inicio de la fluencia plástica comparando el esfuerzo equivalente con el límite de fluencia del material."
    },
    {
        id: 72,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "En el diseño de ejes de transmisión sometidos a fatiga por flexión y torsión combinadas, ¿qué ecuación se utiliza comúnmente según la ASME para calcular el diámetro requerido?",
        opciones: [
            "A) $d = \\left( \\frac{32}{\\pi} \\left[ \\left(\\frac{K_f M_a}{S_n}\\right)^2 + \\frac{3}{4}\\left(\\frac{K_{fs} T_a}{S_y}\\right)^2 \\right]^{1/2} \\right)^{1/3}$",
            "B) $d = \\sqrt{\\frac{T}{G \\theta}}$",
            "C) $d = \\frac{4V}{3A}$",
            "D) $d = \\frac{F}{\\sigma_{allow}}$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La norma ASME para diseño de ejes combina los esfuerzos de flexión (alternantes y medios) y torsión mediante teorías de energía de distorsión y fatiga (Goodman/Soderberg) para determinar el diámetro seguro."
    },
    {
        id: 73,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Qué representa el límite de fatiga ($S_e$ o $S'_e$) en un diagrama S-N (Esfuerzo vs. Número de ciclos)?",
        opciones: [
            "A) El esfuerzo máximo que el material soporta antes de romperse en la primera aplicación estática.",
            "B) El valor máximo de esfuerzo alternante por debajo del cual el material puede soportar un número infinito de ciclos sin fallar por fatiga.",
            "C) La dureza Brinell en la superficie del acero.",
            "D) El módulo de elasticidad longitudinal a temperatura ambiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para aceros y ciertos materiales, el límite de fatiga define el umbral de esfuerzos donde la vida útil se considera infinita ($> 10^6$ o $10^7$ ciclos)."
    },
    {
        id: 74,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Cuál es la función principal de un cojinete de elementos rodantes (rodamiento) de contacto angular?",
        opciones: [
            "A) Soporta exclusivamente cargas radiales puras a baja velocidad.",
            "B) Soporta simultáneamente cargas radiales y cargas axiales (empuje) en una dirección.",
            "C) Elimina por completo la necesidad de lubricación mediante sellos herméticos.",
            "D) Funciona como un acoplamiento flexible para desalineaciones angulares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los rodamientos de contacto angular tienen pistas en los anillos interior y exterior desplazadas entre sí, diseñadas específicamente para soportar cargas combinadas radiales y axiales simultáneas."
    },
    {
        id: 75,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "En la selección de engranes rectos, ¿qué condición geométrica debe cumplirse obligatoriamente para que dos engranes puedan engranar correctamente?",
        opciones: [
            "A) Deben tener exactamente el mismo número de dientes y diámetro.",
            "B) Deben tener el mismo módulo (o paso diametral) y el mismo ángulo de presión.",
            "C) Deben estar fabricados con el mismo tratamiento térmico superficial.",
            "D) Deben girar en la misma dirección y a la misma velocidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para garantizar la compatibilidad del perfil de involuta y el correcto contacto entre los dientes, el módulo (tamaño del diente) y el ángulo de presión deben ser idénticos en ambos engranes."
    },
    {
        id: 76,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Qué es el fenómeno de interferencia en engranes de dientes rectos y cómo se puede evitar?",
        opciones: [
            "A) El choque entre las puntas de los dientes del engrane y los flancos de la raíz del piñón al tener pocos dientes, evitándose mediante un desplazamiento de perfil (corrección) o aumentando el ángulo de presión.",
            "B) La vibración armónica debido a la alta velocidad de giro.",
            "C) La corrosión por picadura (pitting) en la línea de paso.",
            "D) El deslizamiento excesivo entre ejes paralelos."
        ],
        respuestaCorrecta: 0,
        explicacion: "La interferencia ocurre cuando la punta del diente de una rueda corta la raíz de la otra por debajo del círculo de base. Se evita incrementando el número mínimo de dientes, usando mayor ángulo de presión o desplazamiento de cremallera."
    },
    {
        id: 77,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Qué tipo de esfuerzo es el principal responsable de la falla por picadura (pitting) en la superficie de los flancos de los engranes?",
        opciones: [
            "A) Esfuerzo cortante torsional",
            "B) Esfuerzo de contacto Hertziano (compresión cíclica)",
            "C) Esfuerzo de tensión axial uniforme",
            "D) Esfuerzo térmico por fricción"
        ],
        respuestaCorrecta: 1,
        explicacion: "El pitting es una falla por fatiga superficial causada por los altos esfuerzos de compresión hertziana cíclicos en la zona de contacto entre los dientes, desprendiendo micropartículas de metal."
    },
    {
        id: 78,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Cuál es la ventaja de utilizar un tornillo sin fin y rueda dentada (worm gear) en un sistema de transmisión mecánica?",
        opciones: [
            "A) Ofrece una eficiencia mecánica cercana al 98% con bajas pérdidas por fricción.",
            "B) Permite alcanzar relaciones de reducción de velocidad muy altas en un espacio compacto y, bajo ciertas condiciones, exhibe propiedad de irreversibilidad (bloqueo automático contra retroceso).",
            "C) Transmite potencia exclusivamente entre ejes paralelos a alta velocidad.",
            "D) No requiere ningún tipo de lubricación especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los tornillos sin fin logran grandes relaciones de transmisión en una sola etapa; sin embargo, su eficiencia es menor debido al deslizamiento y pueden ser autoretendentes (no reversibles)."
    },
    {
        id: 79,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Qué función cumple un chavetero (keyway) y su respectiva chaveta en un eje de transmisión de potencia?",
        opciones: [
            "A) Sellar herméticamente el eje contra fugas de aceite.",
            "B) Transmitir torque entre el eje y un elemento rotatorio (como una polea o engrane) mediante un acoplamiento mecánico positivo por esfuerzo cortante.",
            "C) Alinear axialmente el rodamiento para evitar cargas de empuje.",
            "D) Servir como elemento fusible que se rompe ante cualquier sobrecarga."
        ],
        respuestaCorrecta: 1,
        explicacion: "La chaveta es un elemento desmontable que se aloja en el chavetero del eje y del cubo de la rueda, bloqueando la rotación relativa entre ambos para transmitir el par torsor."
    },
    {
        id: 80,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Qué es el análisis por el Método de Elementos Finitos (MEF / FEM) en la ingeniería mecánica?",
        opciones: [
            "A) Un método analítico exacto basado en integrales dobles para calcular vigas.",
            "B) Una técnica numérica de discretización para aproximar la solución de ecuaciones diferenciales parciales complejas, permitiendo evaluar esfuerzos, deformaciones y temperatura en geometrías irregulares.",
            "C) Un ensayo destructivo de tensión en probetas normalizadas.",
            "D) Una prueba estática para medir la viscosidad de lubricantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "El MEF divide un dominio continuo en un número finito de elementos interconectados por nodos, transformando ecuaciones diferenciales en sistemas algebraicos matriciales resolubles por computadora."
    },
    {
        id: 81,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué es un PLC (Controlador Lógico Programable) y cuál es su arquitectura básica?",
        opciones: [
            "A) Una computadora personal con sistema operativo Windows para edición de textos.",
            "B) Un sistema electrónico industrial con arquitectura basada en CPU, memoria (ROM/RAM), fuentes de alimentación y módulos de E/S (digitales y analógicas) diseñado para operar en entornos industriales severos.",
            "C) Un microcontrolador de 8 bits sin aislamiento óptico en sus entradas.",
            "D) Un amplificador de potencia para motores trifásicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El PLC es el núcleo de la automatización industrial, robustecido contra ruido electromagnético, vibración y temperatura, operando mediante ciclos de escaneo (lectura de entradas, ejecución de programa, actualización de salidas)."
    },
    {
        id: 82,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué lenguaje de programación para PLCs, estandarizado por la norma IEC 61131-3, se basa en la representación gráfica de circuitos de relevadores eléctricos?",
        opciones: [
            "A) Texto Estructurado (ST)",
            "B) Diagrama de Escalera (Ladder Logic - LD)",
            "C) Gráfico de Funciones Secuenciales (SFC)",
            "D) Lista de Instrucciones (IL)"
        ],
        respuestaCorrecta: 1,
        explicacion: "El diagrama de escalera (Ladder) es el lenguaje más difundido en la industria, emulando la lógica de contactos normalmente abiertos y cerrados de los antiguos tableros de control electromecánicos."
    },
    {
        id: 83,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Cuál es el propósito del estándar IEC 61131-3 en la automatización industrial?",
        opciones: [
            "A) Definir los protocolos de comunicación inalámbrica Wi-Fi para plantas de manufactura.",
            "B) Estandarizar los lenguajes de programación y la estructura de software para controladores lógicos programables (PLCs).",
            "C) Establecer los códigos de colores para cableado eléctrico de baja tensión.",
            "D) Regular las normas de seguridad personal en robots industriales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La norma IEC 61131-3 unifica los criterios de programación en la industria, definiendo lenguajes gráficos (Ladder, FBD, SFC) y textuales (ST, IL), mejorando la portabilidad y el mantenimiento del software."
    },
    {
        id: 84,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué es una red SCADA (Supervisory Control and Data Acquisition)?",
        opciones: [
            "A) Un software de diseño mecánico CAD en 3D.",
            "B) Un sistema de software y hardware de supervisión y control a distancia que adquiere datos de procesos industriales en tiempo real mediante PLCs o RTUs y los presenta en interfaces HMI.",
            "C) Un protocolo de red exclusivamente para oficinas corporativas.",
            "D) Un dispositivo de protección contra cortocircuitos en tableros."
        ],
        respuestaCorrecta: 1,
        explicacion: "SCADA permite la supervisión centralizada, el registro de datos históricos (historian), alarmas y el control operativo de procesos industriales distribuidos geográficamente."
    },
    {
        id: 85,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué características definen al protocolo de comunicación industrial Modbus RTU?",
        opciones: [
            "A) Utiliza una arquitectura maestro-esclavo sobre medios físicos seriales (RS-485 o RS-232) mediante tramas basadas en formato binario con verificación CRC.",
            "B) Es un protocolo Ethernet industrial en tiempo real basado en fibra óptica gigabit.",
            "C) Requiere un servidor de dominio Windows NT obligatorio.",
            "D) Transmite paquetes de video de alta definición para cámaras de seguridad."
        ],
        respuestaCorrecta: 0,
        explicacion: "Modbus RTU es un protocolo de capa de aplicación maestro-esclavo sumamente sencillo, robusto y ampliamente adoptado en instrumentación industrial sobre interfaces físicas RS-485."
    },
    {
        id: 86,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué es Profinet en el contexto de redes industriales?",
        opciones: [
            "A) Un protocolo propietario de comunicación inalámbrica infrarroja.",
            "B) Un estándar de comunicación industrial basado en Ethernet Industrial que permite intercambio de datos en tiempo real (IRT y RT) para automatización de celdas de manufactura.",
            "C) Un lenguaje de programación basado en texto estructurado.",
            "D) Un sistema operativo de tiempo real para microcontroladores ARM."
        ],
        respuestaCorrecta: 1,
        explicacion: "Profinet utiliza la infraestructura Ethernet estándar adaptada con protocolos especiales en las capas superiores para garantizar la determinabilidad temporal requerida en control de movimiento y E/S distribuidas."
    },
    {
        id: 87,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Cuál es la función principal de un variador de frecuencia (VFD - Variable Frequency Drive) en motores de inducción AC?",
        opciones: [
            "A) Convertir corriente directa en corriente alterna de frecuencia y voltaje variables para controlar la velocidad y el par del motor de manera eficiente.",
            "B) Actuar como un freno mecánico de emergencia por fricción.",
            "C) Elevar el voltaje de alimentación a alta tensión trifásica.",
            "D) Invertir la fase del motor mediante relevadores mecánicos lentos."
        ],
        respuestaCorrecta: 0,
        explicacion: "El VFD rectifica la AC de la red a DC (bus DC) y luego la invierte mediante SPWM a una frecuencia y amplitud ajustables, permitiendo regular la velocidad síncrona del motor de inducción ($n_s = 120f/p$)."
    },
    {
        id: 88,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué es un diagrama Grafcet (SFC - Sequential Function Chart)?",
        opciones: [
            "A) Un esquema eléctrico de conexiones de fuerza para motores.",
            "B) Un lenguaje de programación estructurado basado en etapas, transiciones y acciones, ideal para modelar procesos secuenciales y concurrentes en automatización.",
            "C) Un gráfico de la respuesta en frecuencia de un filtro pasa-bajas.",
            "D) Una representación de la cinemática inversa de un robot."
        ],
        respuestaCorrecta: 1,
        explicacion: "Grafcet (SFC) descompone un proceso automatizado en etapas (estados) y transiciones condicionales, facilitando el diseño y la depuración de secuencias lógicas complejas."
    },
    {
        id: 89,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué es una válvula de control direccional neumática 5/2 (5 vías y 2 posiciones)?",
        opciones: [
            "A) Una válvula con 5 entradas eléctricas y 2 motores paso a paso.",
            "B) Una válvula que cuenta con 5 puertos de conexión neumática (alimentación, dos escapes y dos de trabajo hacia el actuador) y 2 estados de conmutación posibles.",
            "C) Un regulador de presión de precisión para cilindros hidráulicos.",
            "D) Un sensor de flujo de aire comprimido."
        ],
        respuestaCorrecta: 1,
        explicacion: "La nomenclatura 5/2 indica que la válvula gestiona 5 vías neumáticas y tiene 2 posiciones de operación, siendo el estándar para controlar cilindros neumáticos de doble efecto."
    },
    {
        id: 90,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué diferencia existe entre un sistema neumático y un sistema hidráulico en automatización?",
        opciones: [
            "A) La neumática utiliza aire comprimido a presiones moderadas, ideal para alta velocidad y cargas ligeras; la hidráulica utiliza aceite a alta presión, empleándose para fuerzas y torques elevados.",
            "B) La hidráulica es un sistema puramente digital y la neumática analógica.",
            "C) La neumática requiere circuitos cerrados de retorno de aceite.",
            "D) No existen diferencias prácticas en cuanto a potencia y velocidad."
        ],
        respuestaCorrecta: 0,
        explicacion: "El aire comprimido es compresible y económico, apto para velocidades altas y fuerzas medias/bajas. El aceite hidráulico es incompresible y trabaja a presiones muy superiores, permitiendo desarrollar fuerzas monumentales."
    },
    {
        id: 91,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué es la incertidumbre de medición en metrología industrial?",
        opciones: [
            "A) El error humano cometido al leer una escala analógica.",
            "B) Un parámetro no negativo que caracteriza la dispersión de los valores que podrían ser atribuibles al mensurando, basado en la información disponible.",
            "C) La diferencia absoluta entre el valor medido y el valor nominal del plano.",
            "D) El desgaste mecánico del instrumento de medición."
        ],
        respuestaCorrecta: 1,
        explicacion: "La incertidumbre cuantifica la calidad y confiabilidad de un resultado de medición, considerando fuentes de error aleatorias y sistemáticas según guías internacionales (GUM)."
    },
    {
        id: 92,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué es el maquinado por Control Numérico Computarizado (CNC) y cuál es el lenguaje estándar de programación para trayectorias?",
        opciones: [
            "A) Un proceso manual de limado utilizando códigos de barras.",
            "B) Un proceso de manufactura sustractiva donde las máquinas herramienta son controladas mediante un ordenador utilizando el código G y M (ISO 6983).",
            "C) Una técnica de impresión 3D por deposición de polímeros fundidos.",
            "D) Un sistema de medición por coordenadas ópticas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El CNC automatiza tornos y fresadoras interpretando instrucciones de código G (movimientos y trayectorias) y códigos M (funciones auxiliares como refrigerante y giro del husillo)."
    },
    {
        id: 93,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Cuál es la diferencia principal entre la manufactura aditiva y la manufactura sustractiva?",
        opciones: [
            "A) La aditiva añade material capa por capa (como impresión 3D), mientras que la sustractiva elimina material de un bloque inicial (como fresado o torneado CNC).",
            "B) La aditiva solo utiliza metales pesados y la sustractiva plásticos blandos.",
            "C) La aditiva no requiere modelos CAD tridimensionales.",
            "D) La sustractiva es más ecológica porque no genera viruta."
        ],
        respuestaCorrecta: 0,
        explicacion: "La manufactura aditiva construye piezas agregando material selectivamente (reduciendo desperdicios en geometrías complejas), en contraste con la sustractiva que arranca viruta a partir de un tocho."
    },
    {
        id: 94,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué es el control estadístico de procesos (SPC) y para qué sirve la carta de control de Shewhart?",
        opciones: [
            "A) Un método para calcular los impuestos de producción en una maquiladora.",
            "B) Una herramienta estadística para monitorear la estabilidad de un proceso a lo largo del tiempo, distinguiendo entre causas comunes (naturales) y causas asignables (especiales) de variación.",
            "C) Un sistema para auditar el desempeño del personal de recursos humanos.",
            "D) Una prueba de tensión destructiva en probetas metálicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cartas de control grafican los límites estadísticos superior e inferior de un proceso; si un punto sale de control o muestra patrones no aleatorios, indica la presencia de anomalías que deben corregirse."
    },
    {
        id: 95,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué significa que un proceso de manufactura tenga un índice de capacidad de proceso $Cp \\geq 1.33$?",
        opciones: [
            "A) Que el proceso es incapaz y producirá más de 50% de piezas defectuosas.",
            "B) Que la dispersión del proceso es significativamente menor que la tolerancia especificada por el cliente, indicando un proceso estadísticamente capaz y de alta calidad.",
            "C) Que las piezas tienen un costo 33% mayor al promedio.",
            "D) Que el equipo requiere mantenimiento correctivo inmediato."
        ],
        respuestaCorrecta: 1,
        explicacion: "El índice $Cp$ compara el ancho de las tolerancias con la dispersión natural del proceso ($6\\sigma$). Un valor de 1.33 (o superior, como 1.67) demuestra que el proceso cumple sobradamente con los requisitos de calidad."
    },
    {
        id: 96,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué es el prototipado rápido y qué tecnologías comprende principalmente?",
        opciones: [
            "A) El ensamblaje manual de circuitos impresos con cautín.",
            "B) El conjunto de técnicas para fabricar rápidamente maquetas o piezas físicas directas desde un archivo CAD tridimensional, destacando tecnologías como FDM, SLA, SLS y estereolitografía.",
            "C) La simulación por elementos finitos en computadoras de alto rendimiento.",
            "D) El torneado rápido de piezas de madera en tornos convencionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El prototipado rápido permite materializar diseños digitales en pocas horas mediante tecnologías de impresión 3D, acelerando la validación funcional y estética de nuevos productos mecatrónicos."
    },
    {
        id: 97,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Cuál es el propósito del tratamiento térmico de temple (quenching) en aceros al carbono?",
        opciones: [
            "A) Ablandar el acero para facilitar el maquinado posterior.",
            "B) Incrementar la dureza y resistencia mecánica calentando el acero a la fase austenítica y enfriándolo bruscamente (en agua, aceite o aire) para formar martensita.",
            "C) Eliminar por completo los esfuerzos internos de soldadura.",
            "D) Aumentar la conductividad eléctrica del material."
        ],
        respuestaCorrecta: 1,
        explicacion: "El temple transforma la estructura cristalina en martensita, un constituyente extremadamente duro y resistente, aunque frágil, requiriendo posteriormente un proceso de revenido."
    },
    {
        id: 98,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué evalúa la prueba de dureza Rockwell?",
        opciones: [
            "A) La resistencia a la tensión última mediante una barra estirada.",
            "B) La resistencia a la penetración superficial de un indentador (cono de diamante o bola de acero) bajo cargas específicas, midiendo la profundidad de la huella.",
            "C) La tenacidad al impacto mediante péndulo de Charpy.",
            "D) El coeficiente de fricción dinámico entre metales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La escala Rockwell mide indirectamente la dureza del material evaluando la profundidad permanente dejada por un indentador tras aplicar una carga preliminar y una carga principal."
    },
    {
        id: 99,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué es una máquina de medición por coordenadas (CMM - Coordinate Measuring Machine)?",
        opciones: [
            "A) Una fresadora CNC de 5 ejes para cortar aceros templados.",
            "B) Un equipo metrológico de alta precisión equipado con un palpador (mecánico u óptico) para verificar las dimensiones geométricas y tolerancias GD&T de piezas físicas tridimensionales.",
            "C) Un sensor láser para medir el nivel de llenado de tanques.",
            "D) Un brazo robótico de soldadura por puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las CMM son instrumentos metrológicos fundamentales en control de calidad para inspeccionar puntos discretos sobre superficies complejas y validar especificaciones de planos de ingeniería."
    },
    {
        id: 100,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué establece el sistema de tolerancias geométricas y dimensionales (GD&T - ASME Y14.5)?",
        opciones: [
            "A) Únicamente los costos de producción y tiempos de entrega.",
            "B) Un lenguaje simbólico normalizado en los planos de ingeniería para especificar la función real y la intercambiabilidad de las piezas, controlando forma, orientación, posición y alabeo.",
            "C) Las normas de seguridad e higiene industrial en talleres mecánicos.",
            "D) El tipo de pintura anticorrosiva obligatoria para estructuras."
        ],
        respuestaCorrecta: 1,
        explicacion: "GD&T supera las limitaciones de las tolerancias lineales tradicionales al definir zonas de tolerancia geométrica tridimensionales basadas en la función real de ensamblaje de los componentes."
    },
    {
        id: 101,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué es la metodología ágil Scrum en la gestión de proyectos de ingeniería mecatrónica?",
        opciones: [
            "A) Un proceso burocrático de documentación en papel que dura varios años.",
            "B) Un marco de trabajo iterativo e incremental basado en sprints, donde equipos multidisciplinarios colaboran estrechamente para entregar valor funcional de forma flexible y adaptativa.",
            "C) Un software de simulación circuitos analógicos.",
            "D) Una técnica contable para calcular la depreciación de maquinaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Scrum es ideal para proyectos de desarrollo mecatrónico complejos donde los requerimientos pueden evolucionar, dividiendo el trabajo en ciclos cortos (sprints) con revisiones continuas."
    },
    {
        id: 102,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué representa la 'Ruta Crítica' en la administración de proyectos mediante la técnica PERT/CPM?",
        opciones: [
            "A) La secuencia de tareas dependientes que determina la duración total más corta posible del proyecto, donde cualquier retraso en estas actividades atrasa todo el proyecto.",
            "B) Las actividades que consumen mayor presupuesto monetario exclusivamente.",
            "C) El camino físico que siguen los cables eléctricos en una planta.",
            "D) Las tareas opcionales que pueden omitirse sin afectar la entrega."
        ],
        respuestaCorrecta: 0,
        explicacion: "La ruta crítica identifica las actividades con holgura cero; su gestión es vital porque marca el tiempo mínimo absoluto en el que el proyecto puede completarse."
    },
    {
        id: 103,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué es el análisis de ciclo de vida (ACV / LCA) de un producto mecatrónico?",
        opciones: [
            "A) El tiempo transcurrido desde que se diseña un producto hasta que se descarta en inventarios.",
            "B) La evaluación estandarizada (ISO 14040) de los impactos ambientales asociados a un producto durante todas las etapas de su existencia: extracción de materias primas, manufactura, uso y disposición final.",
            "C) La garantía comercial que ofrece el fabricante al comprador.",
            "D) El estudio contable de la vida útil de los equipos de cómputo."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ACV permite a los ingenieros diseñar productos más sostenibles cuantificando la huella ecológica y el consumo energético desde la cuna hasta la tumba."
    },
    {
        id: 104,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué evalúa el indicador financiero VPN (Valor Presente Netos / NPV) en la evaluación de proyectos de inversión tecnológica?",
        opciones: [
            "A) La cantidad de dinero que se gastará en salarios el primer mes.",
            "B) La suma de los flujos de caja futuros descontados a valor presente menos la inversión inicial, indicando si el proyecto generará valor económico superior a la tasa de descuento.",
            "C) El porcentaje exacto de ganancia neta anual sin importar la inflación.",
            "D) El tiempo exacto en meses que toma recuperar el capital invertido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un VPN positivo indica que el proyecto de automatización o desarrollo tecnológico es rentable y creará valor para los inversionistas por encima del costo de oportunidad del capital."
    },
    {
        id: 105,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué es la Tasa Interna de Retorno (TIR / IRR) en la evaluación de proyectos?",
        opciones: [
            "A) La tasa de interés máxima que se paga por un préstamo bancario.",
            "B) La tasa de descuento que hace que el Valor Presente Neto (VPN) de un proyecto sea exactamente igual a cero.",
            "C) El rendimiento promedio de las acciones de una empresa competidora.",
            "D) El costo de mantenimiento anual de los equipos mecatrónicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La TIR representa la rentabilidad porcentual anual que genera el proyecto. Se compara con la tasa mínima aceptable de rendimiento (TMAR) para decidir la viabilidad de la inversión."
    },
    {
        id: 106,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Cuál es el propósito de la norma ISO 9001 en los sistemas de gestión organizacional?",
        opciones: [
            "A) Establecer los requisitos para un Sistema de Gestión de la Calidad enfocado en la satisfacción del cliente y la mejora continua de los procesos.",
            "B) Regular las emisiones de gases de efecto invernadero en fundiciones.",
            "C) Certificar la seguridad eléctrica de tableros de control industrial.",
            "D) Estandarizar los protocolos de redes Ethernet en la nube."
        ],
        respuestaCorrecta: 0,
        explicacion: "ISO 9001 proporciona un marco internacionalmente reconocido para asegurar la calidad consistente de productos y servicios mediante procesos controlados y enfoque basado en riesgos."
    },
    {
        id: 107,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué define la norma ISO 14001 en el ámbito industrial?",
        opciones: [
            "A) Los requisitos para un Sistema de Gestión de la Calidad total.",
            "B) Los lineamientos para un Sistema de Gestión Ambiental, ayudando a las organizaciones a minimizar su impacto ecológico y cumplir con la legislación.",
            "C) Las directrices de ciberseguridad para redes de automatización industrial.",
            "D) Los estándares de ergonomía para estaciones de trabajo manual."
        ],
        respuestaCorrecta: 1,
        explicacion: "ISO 14001 guía a las empresas en la implementación de prácticas sostenibles, prevención de la contaminación y optimización en el uso de recursos naturales."
    },
    {
        id: 108,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué aspecto regula la norma ISO 45001?",
        opciones: [
            "A) Sistemas de Gestión de la Seguridad y Salud en el Trabajo para prevenir lesiones y enfermedades laborales.",
            "B) Eficiencia energética en motores eléctricos trifásicos.",
            "C) Calidad del agua en procesos de enfriamiento industrial.",
            "D) Interoperabilidad de bases de datos SQL en la industria 4.0."
        ],
        respuestaCorrecta: 0,
        explicacion: "ISO 45001 establece los requisitos para proteger a los trabajadores y visitantes de accidentes laborales y riesgos psicosociales o físicos en plantas industriales."
    },
    {
        id: 109,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué es la propiedad intelectual y qué diferencia existe entre una patente y un secreto industrial?",
        opciones: [
            "A) La patente es un derecho exclusivo otorgado por el Estado sobre una invención técnica a cambio de su divulgación pública temporal; el secreto industrial protege información confidencial mediante medidas de reserva sin revelarla públicamente.",
            "B) Son términos sinónimos que significan registrar marcas comerciales.",
            "C) La patente solo aplica para software de código abierto.",
            "D) El secreto industrial requiere la aprobación obligatoria de la ONU."
        ],
        respuestaCorrecta: 0,
        explicacion: "Las patentes otorgan monopolio temporal de explotación comercial a cambio de hacer pública la invención, mientras que el secreto industrial (como la fórmula de la Coca-Cola) se protege manteniéndolo oculto bajo estrictas cláusulas."
    },
    {
        id: 110,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué implica la filosofía de manufactura esbelta (Lean Manufacturing) a través del concepto de eliminación de desperdicios (Muda)?",
        opciones: [
            "A) Reducir la plantilla laboral un 50% cada trimestre.",
            "B) Identificar y eliminar toda actividad que consuma recursos pero no aporte valor agregado al cliente final (como sobreproducción, tiempos de espera, transporte innecesario y defectos).",
            "C) Fabricar grandes lotes de producción para almacenarlos en bodegas lejanas.",
            "D) Comprar la maquinaria más costosa del mercado global."
        ],
        respuestaCorrecta: 1,
        explicacion: "Lean Manufacturing busca la máxima eficiencia operativa eliminando los 7 desperdicios clásicos (Muda), promoviendo la mejora continua (Kaizen) y sistemas pull como Kanban."
    },
    {
        id: 111,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es la respuesta al impulso unitario $h(t)$ de un sistema cuya función de transferencia es $G(s) = \\frac{1}{s + a}$?",
        opciones: [
            "A) $e^{-at} u(t)$",
            "B) $t e^{-at} u(t)$",
            "C) $\\sin(at) u(t)$",
            "D) $1 - e^{-at} u(t)$"
        ],
        respuestaCorrecta: 0,
        explicacion: "La transformada inversa de Laplace de $G(s) = \\frac{1}{s + a}$ es directamente la función exponencial decreciente $e^{-at}$ multiplicada por la función escalón unitario $u(t)$."
    },
    {
        id: 112,
        area: "Sistemas de Control Automático",
        pregunta: "¿Qué efecto tiene la adición de un polo en el semiplano derecho (sistema de fase no mínima) sobre el comportamiento transitorio de un sistema de control?",
        opciones: [
            "A) Aumenta drásticamente el margen de fase sin efectos colaterales.",
            "B) Produce una respuesta inicial inversa (undershoot) y limita fuertemente el ancho de banda alcanzable y la ganancia del controlador.",
            "C) Elimina por completo las oscilaciones de alta frecuencia.",
            "D) Convierte el sistema en un oscilador armónico perfecto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los ceros en el semiplano derecho caracterizan a los sistemas de fase no mínima, los cuales muestran un comportamiento inicial contrario al esperado (como un tanque de agua cuyo nivel baja un instante antes de subir al abrir una válvula)."
    },
    {
        id: 113,
        area: "Sensores, Actuadores y Electrónica de Potencia",
        pregunta: "¿Qué es un tiristor tipo TRIAC y en qué se diferencia de un SCR convencional?",
        opciones: [
            "A) El TRIAC conduce corriente exclusivamente en un sentido, igual que el SCR.",
            "B) El TRIAC es un dispositivo semiconductor bidireccional capaz de conducir corriente en ambos sentidos y dispararse con corriente positiva o negativa en la compuerta, ideal para control de cargas AC.",
            "C) El TRIAC requiere refrigeración líquida obligatoria a bajas frecuencias.",
            "D) El SCR es un dispositivo óptico y el TRIAC mecánico."
        ],
        respuestaCorrecta: 1,
        explicacion: "A diferencia del SCR que es unidireccional, el TRIAC funciona como dos SCRs en antiparalelo integrados, permitiendo controlar la potencia en corriente alterna en ambos semiciclos de la onda."
    },
    {
        id: 114,
        area: "Sistemas Embebidos y Microcontroladores",
        pregunta: "¿Qué es una interrupción por desbordamiento (overflow interrupt) en un temporizador de 16 bits de un microcontrolador?",
        opciones: [
            "A) Un error de software que quema el microcontrolador.",
            "B) Una señal generada automáticamente por hardware cuando el contador del temporizador supera su valor máximo (65535 en 16 bits) y regresa a cero, activando una bandera e invocando su ISR.",
            "C) El llenado total de la memoria RAM con variables globales.",
            "D) La saturación del convertidor analógico-digital."
        ],
        respuestaCorrecta: 1,
        explicacion: "El desbordamiento del temporizador es ampliamente utilizado para generar bases de tiempo precisas, realizar muestreos periódicos y programar tareas en sistemas embebidos."
    },
    {
        id: 115,
        area: "Robótica y Cinemática",
        pregunta: "¿Qué es la manipulabilidad (manipulability ellipsoid) de un robot en un punto de su espacio de trabajo?",
        opciones: [
            "A) La masa total de los motores de la base.",
            "B) Una medida geométrica basada en el Jacobiano que describe la capacidad del robot para generar velocidades o fuerzas en distintas direcciones cartesianas desde una configuración articular dada.",
            "C) El consumo de corriente eléctrica en condiciones de carga máxima.",
            "D) El volumen físico que ocupa el gabinete de control."
        ],
        respuestaCorrecta: 1,
        explicacion: "El elipsoide de manipulabilidad permite visualizar cuantitativamente cuán ágil y eficiente es el robot para moverse o aplicar fuerza en una dirección cartesiana específica desde una postura particular."
    },
    {
        id: 116,
        area: "Diseño Mecánico y Elementos de Máquinas",
        pregunta: "¿Cuál es el propósito de aplicar un factor de concentración de esfuerzos ($K_t$ o $K_f$) en el diseño de elementos mecánicos?",
        opciones: [
            "A) Aumentar el peso total de la estructura para abaratar costos.",
            "B) Multiplicar el esfuerzo nominal debido a la presencia de discontinuidades geométricas (como agujeros, ranuras, cambios de sección o filetes) donde las líneas de flujo de esfuerzo se concentran.",
            "C) Reducir la temperatura de operación del componente.",
            "D) Compensar la expansión térmica longitudinal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Las geometrías abruptas generan picos locales de esfuerzo muy superiores al esfuerzo nominal calculado. Los factores $K_t$ (estático) y $K_f$ (fatiga) ajustan el cálculo para prevenir fallas prematuras."
    },
    {
        id: 117,
        area: "Automatización Industrial y Redes de Comunicación",
        pregunta: "¿Qué función cumple un bloque PID dentro de las funciones avanzadas de programación de un PLC moderno?",
        opciones: [
            "A) Controlar la secuencia de encendido y apagado de motores paso a paso sin lazos cerrados.",
            "B) Ejecutar un algoritmo de control en lazo cerrado (Proporcional, Integral, Derivativo) utilizando variables analógicas de entrada (proceso) y salida (actuador), calculando el error en cada ciclo de escaneo.",
            "C) Traducir protocolos de red Profinet a Modbus RTU.",
            "D) Comprimir archivos de respaldo en la memoria flash del PLC."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los bloques PID integrados en los PLCs permiten regular variables físicas críticas (temperatura, presión, nivel, caudal) en tiempo real mediante la sintonización de sus ganancias internas."
    },
    {
        id: 118,
        area: "Metrología, Instrumentación y Manufactura",
        pregunta: "¿Qué mide un rugosímetro superficial en metrología?",
        opciones: [
            "A) La dureza Rockwell en aceros templados.",
            "B) Las irregularidades geométricas microgeométricas de una superficie (parámetros como $Ra$ y $Rz$) producto del proceso de maquinado.",
            "C) El espesor de la capa de pintura anticorrosiva.",
            "D) La alineación angular entre dos ejes de transmisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "El rugosímetro utiliza un palpador diamantado para registrar el perfil de altura milimétrica o micrométrica de una superficie, evaluando la calidad del acabado superficial."
    },
    {
        id: 119,
        area: "Gestión de Proyectos y Transversal",
        pregunta: "¿Qué es la metodología Six Sigma (Seis Sigma) y qué métrica de calidad persigue?",
        opciones: [
            "A) Un sistema de control presupuestal basado en contabilidad de costos fijos.",
            "B) Una estrategia de mejora de procesos centrada en la reducción de la variabilidad para lograr un nivel de calidad de apenas 3.4 defectos por millón de oportunidades (DPMO).",
            "C) Un método de diseño mecánico basado en tolerancias máximas y mínimas.",
            "D) Un protocolo de comunicación inalámbrica para manufactura esbelta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Six Sigma utiliza herramientas estadísticas y la metodología DMAIC (Definir, Medir, Analizar, Mejorar, Controlar) para llevar la variabilidad del proceso a seis desviaciones estándar respecto a los límites de especificación."
    },
    {
        id: 120,
        area: "Modelado y Simulación de Sistemas Mecatrónicos",
        pregunta: "¿Cuál es el significado físico de los polos de la función de transferencia de un sistema lineal estacionario?",
        opciones: [
            "A) Determinan la amplitud máxima de la señal de entrada ante perturbaciones estocásticas.",
            "B) Coinciden con los eigenvalores de la matriz de estados $A$ del sistema y determinan las frecuencias naturales y la estabilidad temporal de la respuesta natural.",
            "C) Definen exclusivamente los ceros de transmisión en alta frecuencia.",
            "D) Representan la ganancia estática en régimen permanente cuando $s \\to 0$."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los polos de $G(s)$ son las raíces del polinomio característico de la ecuación diferencial del sistema. Su ubicación en el plano complejo define por completo la estabilidad y las características de la respuesta transitoria."
    }
];