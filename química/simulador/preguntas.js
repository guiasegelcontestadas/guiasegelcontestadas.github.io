const bancoPreguntas = [
    {
        id: 1,
        area: "Química Analítica",
        pregunta: "¿Cuál es el propósito principal de añadir una solución reguladora de pH (tampón) en una valoración complexométricas con EDTA?",
        opciones: ["A) Evitar la oxidación del analito metálico", "B) Mantener constante el pH para asegurar la formación y estabilidad del complejo metal-EDTA", "C) Actuar como indicador visual del punto de equivalencia", "D) Precipitar los cationes interferentes en la matriz"],
        respuestaCorrecta: 1,
        explicacion: "El EDTA forma complejos con los metales dependiendo fuertemente del pH. Un tampón evita fluctuaciones que ionizarían incorrectamente al EDTA o precipitarían al metal como hidróxido."
    },
    {
        id: 2,
        area: "Química Analítica",
        pregunta: "En cromatografía de gases, ¿cuál de los siguientes parámetros describe mejor la eficiencia de la columna?",
        opciones: ["A) El tiempo de retención", "B) El número de platos teóricos", "C) La relación de reparto", "D) El factor de separación"],
        respuestaCorrecta: 1,
        explicacion: "El número de platos teóricos (N) es una medida directa de la eficiencia de la columna cromatográfica; a mayor número de platos, menor ensanchamiento de banda."
    },
    {
        id: 3,
        area: "Química Analítica",
        pregunta: "¿Qué técnica espectroscópica es más adecuada para la determinación cuantitativa de metales pesados traza en aguas naturales a niveles de partes por billón (ppb)?",
        opciones: ["A) Espectroscopia UV-Vis convencional", "B) Espectroscopia Infrarroja por Transformada de Fourier (FTIR)", "C) Espectrometría de Absorción Atómica con horno de grafito (GFAAS)", "D) Resonancia Magnética Nuclear de Protones (1H-RMN)"],
        respuestaCorrecta: 2,
        explicacion: "La GFAAS ofrece una sensibilidad muy alta, permitiendo detectar concentraciones a nivel de ppb debido a la atomización eficiente y prolongada de la muestra en el tubo de grafito."
    },
    {
        id: 4,
        area: "Química Analítica",
        pregunta: "En una valoración ácido-fuerte con base-fuerte, ¿cuál es el valor del pH en el punto de equivalencia a 25 °C?",
        opciones: ["A) Menor a 7.0", "B) Exactamente 7.0", "C) Mayor a 7.0", "D) Depende de la concentración inicial de los reactivos"],
        respuestaCorrecta: 1,
        explicacion: "La reacción de un ácido fuerte con una base fuerte produce una sal neutra que no sufre hidrólisis significativa, por lo que el pH en el punto de equivalencia es neutro (7.0)."
    },
    {
        id: 5,
        area: "Química Analítica",
        pregunta: "¿Cuál es la función del electrodo de vidrio en un potenciómetro para medir pH?",
        opciones: ["A) Medir el potencial de referencia constante independiente de la solución", "B) Generar un potencial de membrana dependiente de la actividad de los iones hidronio en el exterior", "C) Conducir la corriente eléctrica mediante una oxidación directa del agua", "D) Proveer iones cloruro constantes al sistema"],
        respuestaCorrecta: 1,
        explicacion: "El electrodo de vidrio contiene una membrana hidratada cuyo potencial se altera en función de la diferencia de actividad de protones entre el interior y el exterior (muestra)."
    },
    {
        id: 6,
        area: "Química Analítica",
        pregunta: "En el análisis volumétrico, ¿qué representa el error titulatorio?",
        opciones: ["A) La diferencia entre el punto final y el punto de equivalencia", "B) La imprecisión debida al uso de material volumétrico clase A", "C) El error sistemático generado por una mala calibración de la balanza", "D) La desviación estándar de tres determinaciones replicadas"],
        respuestaCorrecta: 0,
        explicacion: "El error titulatorio es la discrepancia operativa inevitable entre el punto final (cambio físico observado) y el punto de equivalencia teórico de la reacción."
    },
    {
        id: 7,
        area: "Química Analítica",
        pregunta: "¿Qué propiedad mide fundamentalmente un detector de ionización de llama (FID) en cromatografía de gases?",
        opciones: ["A) La conductividad térmica de los vapores eluídos", "B) La absorción de radiación UV de los enlaces insaturados", "C) La corriente generada por los iones formados al quemar compuestos orgánicos en una llama de hidrógeno", "D) La masa molecular exacta de los fragmentos iónicos"],
        respuestaCorrecta: 2,
        explicacion: "El FID es un detector destructivo sensible a la masa que quema compuestos orgánicos en una mezcla de H2/aire, produciendo iones cuya corriente se mide cuantitativamente."
    },
    {
        id: 8,
        area: "Química Analítica",
        pregunta: "Al realizar una validación de método analítico, ¿qué parámetro evalúa la capacidad del método para no verse afectado por pequeñas variaciones deliberadas en los parámetros metodológicos?",
        opciones: ["A) Linealidad", "B) Robustez", "C) Límite de detección", "D) Exactitud"],
        respuestaCorrecta: 1,
        explicacion: "La robustez mide la fiabilidad de una prueba analítica ante pequeñas modificaciones operativas (ej. pH, temperatura, flujo), simulando condiciones reales de laboratorio."
    },
    {
        id: 9,
        area: "Química Analítica",
        pregunta: "¿Cuál es el principio físico en el que se basa la espectroscopia de emisión atómica con antorcha de plasma acoplado inductivamente (ICP-OES)?",
        opciones: ["A) Absorción de fotones infrarrojos por modos vibracionales moleculares", "B) Excitación térmica de electrones en átomos e iones seguida de la emisión de radiación característica", "C) Dispersión elástica de la luz láser por nanopartículas", "D) Descenso crioscópico de soluciones diluidas"],
        respuestaCorrecta: 1,
        explicacion: "En ICP-OES, el plasma de argón proporciona alta energía térmica que excita a los electrones de los átomos; al regresar a su estado fundamental, emiten luz a longitudes de onda específicas."
    },
    {
        id: 10,
        area: "Química Analítica",
        pregunta: "En una extracción líquido-líquido, si el coeficiente de distribución ($K_D$) de un soluto entre la fase orgânica y la fase acuosa es alto, esto indica que:",
        opciones: ["A) El soluto prefiere permanecer disuelto en la fase acuosa", "B) El soluto se extrae eficientemente hacia la fase orgánica", "C) La extracción es termodinámicamente irreversible", "D) El proceso requiere múltiples extracciones sucesivas obligatorias"],
        respuestaCorrecta: 1,
        explicacion: "Un coeficiente de distribución elevado ($K_D = [Soluto]_{org} / [Soluto]_{acu}$) indica que el analito tiene mayor solubilidad y afinidad por el disolvente orgánico."
    },
    {
        id: 11,
        area: "Química Analítica",
        pregunta: "¿Qué indica un valor de factor de retención ($k'$) menor a 1 en cromatografía líquida de alta eficiencia (HPLC)?",
        opciones: ["A) El analito interacciona fuertemente con la fase estacionaria", "B) El analito eluye muy cerca del tiempo muerto y tiene poca retención en la columna", "C) La columna se encuentra saturada de analito", "D) Existe una inversión en el orden de elución de los picos"],
        respuestaCorrecta: 1,
        explicacion: "El factor de retención $k'$ mide el tiempo que pasa el analito en la fase estacionaria respecto a la móvil. Si es menor a 1, el compuesto eluye demasiado rápido y puede coeluir con impurezas iniciales."
    },
    {
        id: 12,
        area: "Química Analítica",
        pregunta: "En gravimetría, ¿para qué se realiza la etapa de calcinación del precipitado obtenido?",
        opciones: ["A) Para disolver completamente las impurezas solubles", "B) Para transformar el precipitado en una forma pesable con una estequiometría fija y definida", "C) Para disminuir la velocidad de filtración y evitar pérdidas", "D) Para volatilizar el analito de interés y pesarlo por diferencia"],
        respuestaCorrecta: 1,
        explicacion: "La calcinación deshidrata o descompone térmicamente el precipitado para convertirlo en un compuesto de composición química perfectamente conocida y estable para su pesada."
    },
    {
        id: 13,
        area: "Química Analítica",
        pregunta: "¿Cuál es el rol del permanganato de potasio ($KMnO_4$) cuando se utiliza como agente valorante en medio ácido sin necesidad de indicador adicional?",
        opciones: ["A) Actúa como indicador redox autoindicador debido a su intenso color púrpura", "B) Funciona exclusivamente como un ácido fuerte monoprótico", "C) Precipita selectivamente a los iones cloruro en exceso", "D) Cataliza la descomposición del agua oxigenada sin participar en la reacción"],
        respuestaCorrecta: 0,
        explicacion: "El $KMnO_4$ es un potente oxidante y un autoindicador: el exceso de una sola gota de permanganato confiere un color rosado persistente a la solución incolora en el punto final."
    },
    {
        id: 14,
        area: "Química Analítica",
        pregunta: "En la polarografía o voltamperometría, ¿qué representa la corriente límite de difusión?",
        opciones: ["A) La corriente máxima alcanzada cuando la velocidad de transferencia de masa del analito hacia el electrodo está limitada por la difusión", "B) La corriente de corto circuito debida a defectos en la fuente de poder", "C) La corriente generada por la descomposición térmica del electrolito soporte", "D) El flujo de electrones causado por la resistencia óhmica de la solución"],
        respuestaCorrecta: 0,
        explicacion: "La corriente límite de difusión surge cuando el analito se reduce o se oxida tan rápido en la superficie del electrodo que se crea un gradiente de concentración estricto, limitando el proceso por difusión."
    },
    {
        id: 15,
        area: "Química Analítica",
        pregunta: "¿Qué describe la Ley de Lambert-Beer en espectrofotometría UV-Vis?",
        opciones: ["A) La relación lineal entre la absorbancia, la absortividad, el camino óptico y la concentración", "B) La dependencia cuadrática de la intensidad transmitida con respecto al volumen de la celda", "C) El cambio en la longitud de onda de máxima absorción en función del pH", "D) La velocidad con la que decae la intensidad luminosa en función del tiempo de exposición"],
        respuestaCorrecta: 0,
        explicacion: "La Ley de Lambert-Beer se enuncia como $A = \varepsilon \cdot b \cdot c$, estableciendo la proporcionalidad directa entre la absorbancia ($A$) y la concentración ($c$). mols/L."
    },
    {
        id: 16,
        area: "Química Orgánica",
        pregunta: "¿Cuál es el intermediario de reacción clave que se forma durante una sustitución nucleofílica unimolecular ($S_N1$)?",
        opciones: ["A) Un carbanión plano estabilizado por resonancia", "B) Un radical libre neutro altamente reactivo", "C) Un carbocatión plano hibridado $sp^2$", "D) Un estado de transición pentacovalente"],
        respuestaCorrecta: 2,
        explicacion: "La reacción $S_N1$ procede en dos pasos; el paso determinante de la velocidad es la pérdida del grupo saliente para formar un intermedio carbocatiónico plano de geometría $sp^2$."
    },
    {
        id: 17,
        area: "Química Orgánica",
        pregunta: "En las reacciones de adición electrofílica a alquenos, ¿qué regla predice la regioselectividad de la adición de un ácido halogenhídrico?",
        opciones: ["A) Regla de Zaitsev", "B) Regla de Markovnikov", "C) Regla de Hückel", "D) Principio de Le Chatelier"],
        respuestaCorrecta: 1,
        explicacion: "La regla de Markovnikov establece que en la adición de un protón a un alqueno asimétrico, el hidrógeno se une al carbono del doble enlace con mayor número de hidrógenos, formando el carbocatión más estable."
    },
    {
        id: 18,
        area: "Química Orgánica",
        pregunta: "¿Qué característica estructural debe cumplir una molécula orgánica para ser considerada aromática según la regla de Hückel?",
        opciones: ["A) Ser un ciclo plano con $4n$ electrones $\pi$", "B) Ser un ciclo plano con $(4n + 2)$ electrones $\pi$ deslocalizados", "C) Contener exclusivamente enlaces simples carbono-carbono", "D) Presentar un grupo carbonilo conjugado con dobles enlaces"],
        respuestaCorrecta: 1,
        explicacion: "La aromaticidad requiere un sistema cíclico plano, completamente conjugado, que cumpla con la regla de Hückel de $(4n + 2)$ electrones $\pi$ (donde $n = 0, 1, 2, ...$)."
    },
    {
        id: 19,
        area: "Química Orgánica",
        pregunta: "¿Cuál es el producto principal de la oxidación suave de un alcohol primario utilizando reactivos como el clorocromato de piridinio (PCC)?",
        opciones: ["A) Un ácido carboxílico", "B) Una cetona alifática", "C) Un aldehído", "D) Un éter simétrico"],
        respuestaCorrecta: 2,
        explicacion: "El PCC es un agente oxidante anhidro moderado que detiene la oxidación de los alcoholes primarios en la etapa de aldehído, evitando que avancen hasta ácidos carboxílicos."
    },
    {
        id: 20,
        area: "Química Orgánica",
        pregunta: "En una reacción de eliminación bimolecular ($E2$), ¿qué requerimiento geométrico espacial es fundamental para que ocurra con mayor velocidad?",
        opciones: ["A) Disposición sin-periplanar del protón y el grupo saliente", "B) Disposición anti-periplanar del protón y el grupo saliente", "C) Ausencia total de impedimento estérico en los carbonos vecinos", "D) Hibridación $sp^3$ estricta en el grupo saliente"],
        respuestaCorrecta: 1,
        explicacion: "La eliminación $E2$ es un proceso concertado que requiere una conformación anti-periplanar (a 180°), facilitando el traslape óptimo de orbitales para la formación del doble enlace."
    },
    {
        id: 21,
        area: "Química Orgánica",
        pregunta: "¿Qué tipo de señal espectroscópica característica se observa en el infrarrojo (FTIR) para un grupo funcional alcohol libre (O-H)?",
        opciones: ["A) Una banda fina y aguda alrededor de $3300\text{ cm}^{-1}$", "B) Una banda ancha e intensa en la región de $3200 - 3600\text{ cm}^{-1}$", "C) Una señal muy aguda y fuerte cerca de $1715\text{ cm}^{-1}$", "D) Bandas múltiples de baja intensidad entre $2100 - 2260\text{ cm}^{-1}$"],
        respuestaCorrecta: 1,
        explicacion: "Los enlaces O-H de alcoholes libres experimentan un fuerte enlace de hidrógeno, lo que ensancha notablemente la banda de estiramiento en el infrarrojo alrededor de $3300\text{ cm}^{-1}$."
    },
    {
        id: 22,
        area: "Química Orgánica",
        pregunta: "¿Cuál de los siguientes compuestos aromáticos experimentará una sustitución electrofílica aromática con mayor velocidad que el benceno?",
        opciones: ["A) Nitrobenceno", "B) Ácido benzoico", "C) Tolueno", "D) Clorobenceno"],
        respuestaCorrecta: 2,
        explicacion: "El tolueno posee un grupo metilo, el cual es un grupo activante débil por efecto inductivo y hiperconjugación, facilitando el ataque electrofílico comparado con el benceno."
    },
    {
        id: 23,
        area: "Química Orgánica",
        pregunta: "¿Qué describe la estereoisomería de tipo enantiómero?",
        opciones: ["A) Isómeros constitucionales que difieren en el orden de conectividad", "B) Estereoisómeros que no son imágenes especulares entre sí", "C) Estereoisómeros cuyas moléculas son imágenes especulares no superponibles", "D) Isómeros geométricos cis/trans alrededor de un doble enlace"],
        respuestaCorrecta: 2,
        explicacion: "Los enantiómeros son pares de moléculas quirales que guardan entre sí una relación de imagen especular que no puede superponerse sobre su original."
    },
    {
        id: 24,
        area: "Química Orgánica",
        pregunta: "¿Cuál es el reactivo clásico utilizado para transformar un ácido carboxílico en un cloruro de acilo?",
        opciones: ["A) Cloruro de tionilo ($SOCl_2$)", "B) Hidróxido de sodio acuoso ($NaOH$)", "C) Borohidruro de sodio ($NaBH_4$)", "D) Permanganato de potasio en caliente ($KMnO_4$)"],
        respuestaCorrecta: 0,
        explicacion: "El cloruro de tionilo ($SOCl_2$) o el tricloruro de fósforo ($PCl_3$) convierten eficientemente ácidos carboxílicos en cloruros de acilo mediante la formación de buenos grupos salientes."
    },
    {
        id: 25,
        area: "Química Orgánica",
        pregunta: "En una resonancia magnética nuclear de protones ($^1\text{H-RMN}$), ¿qué información proporciona la multiplicidad o desdoblamiento de una señal según la regla de $n + 1$?",
        opciones: ["A) El número de tipos de átomos de carbono equivalentes", "B) El número de protones equivalentes vecinos (adyacentes)", "C) El peso molecular exacto del fragmento orgánico", "D) El grado de desplazamiento químico debido a efectos de apantallamiento"],
        respuestaCorrecta: 1,
        explicacion: "La regla de $n+1$ indica que un protón con $n$ protones vecinos equivalentes en átomos de carbono adyacentes presentará un desdoblamiento de su señal en $n+1$ picos."
    },
    {
        id: 26,
        area: "Química Orgánica",
        pregunta: "¿Qué tipo de polimerización se lleva a cabo mediante la reacción sucesiva de monómeros con grupos funcionales bifuncionales, liberando habitualmente moléculas pequeñas como agua o metanol?",
        opciones: ["A) Polimerización por adición radicalaria", "B) Polimerización por crecimiento en cadena", "C) Polimerización por condensación (o etapas)", "D) Polimerización aniónica viviente"],
        respuestaCorrecta: 2,
        explicacion: "La polimerización por condensación ocurre entre monómeros con dos o más grupos reactivos, donde la formación del enlace polimérico va acompañada de la pérdida de subproductos pequeños."
    },
    {
        id: 27,
        area: "Química Orgánica",
        pregunta: "¿Cuál es el producto principal de la reacción de hidroboración-oxidación de un alquino terminal como el 1-hexino?",
        opciones: ["A) Un ácido hexanoico", "B) Un aldehído (hexanal)", "C) Una cetona (2-hexanona)", "D) Un alcano totalmente saturado"],
        respuestaCorrecta: 1,
        explicacion: "La hidroboración-oxidación de alquinos terminales sigue una adición anti-Markovnikov. El enol resultante experimenta una tautomerización para dar finalmente un aldehído."
    },
    {
        id: 28,
        area: "Química Orgánica",
        pregunta: "¿Qué indica un desplazamiento químico ($\delta$) elevado (campo abajo, hacia valores mayores de ppm) en un espectro de $^1\text{H-RMN}$?",
        opciones: ["A) Un fuerte apantallamiento magnético debido a electrones cercanos", "B) La presencia de un entorno fuertemente desapantallado por grupos electronegativos o anillos aromáticos", "C) La ausencia total de enlaces sigma en la molécula", "D) Un peso molecular muy bajo del compuesto orgánico"],
        respuestaCorrecta: 1,
        explicacion: "Los grupos electronegativos atraen la densidad electrónica, desapantallando al protón y haciendo que resuene a frecuencias mayores, lo que se traduce en un desplazamiento químico mayor (campo abajo)."
    },
    {
        id: 29,
        area: "Química Orgánica",
        pregunta: "¿Cuál es la función del reactivo de Grignard ($R-MgX$) en síntesis orgánica?",
        opciones: ["A) Actuar como agente electrofílico para capturar protones libres", "B) Servir como una fuente de nucleófilos de carbono para formar nuevos enlaces C-C", "C) Oxidación selectiva de enlaces dobles a epóxidos", "D) Reducir cetonas exclusivamente a alquenos correspondientes"],
        respuestaCorrecta: 1,
        explicacion: "Los reactivos de Grignard son compuestos organometálicos con un carácter nucleofílico muy fuerte en el carbono unido al magnesio, empleados ampliamente para construir esqueletos carbonados."
    },
    {
        id: 30,
        area: "Química Orgánica",
        pregunta: "¿Qué tipo de reacción experimentan los aldehídos y cetonas al reaccionar con aminas primarias en presencia de un catalizador ácido débil?",
        opciones: ["A) Formación de una imina (base de Schiff)", "B) Formación de un ácido carboxílico", "C) Reducción total a hidrocarburo", "D) Polimerización instantánea en cadena"],
        respuestaCorrecta: 0,
        explicacion: "La condensación de aldehídos o cetonas con aminas primarias genera iminas (también llamadas bases de Schiff) mediante la eliminación de una molécula de agua."
    },
    {
        id: 31,
        area: "Fisicoquímica",
        pregunta: "¿Qué establece la Primera Ley de la Termodinámica?",
        opciones: ["A) La energía total de un sistema aislado se mantiene constante (conservación de la energía)", "B) La entropía de un cristal perfecto a cero absoluto es exactamente cero", "C) Es imposible construir una máquina térmica de eficiencia del 100%", "D) La energía libre de Gibbs disminuye en procesos espontáneos a presión y temperatura constantes"],
        respuestaCorrecta: 0,
        explicacion: "La primera ley es el principio de conservación de la energía aplicado a sistemas termodinámicos: $\Delta U = Q + W$, donde la energía no se crea ni se destruye, solo se transforma."
    },
    {
        id: 32,
        area: "Fisicoquímica",
        pregunta: "Para una reacción química en equilibrio, ¿cómo se relaciona la constante de equilibrio termodinámica ($K$) con la variación de energía libre de Gibbs estándar ($\Delta G^\circ$)?",
        opciones: ["A) $\Delta G^\circ = R T \ln(K)$", "B) $\Delta G^\circ = -R T \ln(K)$", "C) $\Delta G^\circ = -n F E^\circ$", "D) $\Delta G^\circ = \Delta H^\circ - T \Delta S^\circ$"],
        respuestaCorrecta: 1,
        explicacion: "La ecuación fundamental de la termodinámica química es $\Delta G^\circ = -R T \ln(K)$, la cual vincula la espontaneidad estándar con la posición del equilibrio químico."
    },
    {
        id: 33,
        area: "Fisicoquímica",
        pregunta: "¿Cuál es la expresión matemática de la ecuación de Clausius-Clapeyron para describir la variación de la presión de vapor de un líquido con la temperatura?",
        opciones: ["A) $\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)$", "B) $PV = nRT$", "C) $\ln(k) = -\frac{E_a}{RT} + \ln(A)$", "D) $\Delta S = \frac{Q_{rev}}{T}$"],
        respuestaCorrecta: 0,
        explicacion: "La forma integrada de la ecuación de Clausius-Clapeyron permite calcular la entalpía de vaporización ($\Delta H_{vap}$) conociendo presiones de vapor a dos temperaturas distintas."
    },
    {
        id: 34,
        area: "Fisicoquímica",
        pregunta: "¿Qué indica un valor negativo de la energía libre de Gibbs ($\Delta G < 0$) para un proceso que ocurre a temperatura y presión constantes?",
        opciones: ["A) El proceso es no espontáneo en esas condiciones", "B) El sistema se encuentra estrictamente en equilibrio dinámico", "C) El proceso es espontáneo en la dirección directa", "D) La entropía del universo disminuye necesariamente"],
        respuestaCorrecta: 2,
        explicacion: "El criterio termodinámico de espontaneidad a temperatura y presión constantes establece que un cambio de energía libre negativo ($\Delta G < 0$) indica un proceso espontáneo."
    },
    {
        id: 35,
        area: "Fisicoquímica",
        pregunta: "En cinetica química, ¿qué representa la energía de activación ($E_a$) en la ecuación de Arrhenius?",
        opciones: ["A) La diferencia de energía entre los productos finales y los reactivos iniciales", "B) La barrera energética mínima que deben superar los reactivos para transformarse en productos", "C) El calor total liberado durante una reacción exotérmica", "D) La velocidad máxima de reacción catalizada"],
        respuestaCorrecta: 1,
        explicacion: "La energía de activación es la energía cinética umbral que los reactivos deben poseer mediante choques efectivos para alcanzar el estado de transición."
    },
    {
        id: 36,
        area: "Fisicoquímica",
        pregunta: "¿Qué establece la Tercera Ley de la Termodinámica?",
        opciones: ["A) El cero absoluto de temperatura no se puede alcanzar mediante un número finito de procesos", "B) La entropía de cualquier sustancia pura en forma de cristal perfecto se aproxima a cero cuando la temperatura tiende a cero absoluto ($0\text{ K}$)", "C) La capacidad calorífica molar a presión constante es independiente de la temperatura", "D) Todo gas real se comporta como ideal a presiones extremadamente bajas"],
        respuestaCorrecta: 1,
        explicacion: "La tercera ley fija una base absoluta para la entropía, estableciendo que la entropía de un cristal perfecto a $0\text{ K}$ es exactamente cero."
    },
    {
        id: 37,
        area: "Fisicoquímica",
        pregunta: "Si una reacción química tiene una ley de velocidad dada por $v = k[A]^2[B]$, ¿cuál es el orden global de la reacción?",
        opciones: ["A) 1", "B) 2", "C) 3", "D) 0"],
        respuestaCorrecta: 2,
        explicacion: "El orden global de una reacción es la suma de los exponentes de los términos de concentración en la ley de velocidad: $2 + 1 = 3$ (tercer orden)."
    },
    {
        id: 38,
        area: "Fisicoquímica",
        pregunta: "¿Qué describe la Ley de Acción de Masas propuesta por Guldberg y Waage?",
        opciones: ["A) La velocidad de una reacción química es proporcional al producto de las actividades (o concentraciones) de los reactivos elevadas a sus coeficientes estequiométricos", "B) La presión total de una mezcla de gases ideales es la suma de sus presiones parciales", "C) La solubilidad de un gas en un líquido es directamente proporcional a su presión parcial", "D) El volumen de un gas es inversamente proporcional a la presión aplicada a temperatura constante"],
        respuestaCorrecta: 0,
        explicacion: "La ley de acción de masas fundamenta la deducción de las expresiones de la constante de equilibrio y la velocidad de reacción en función de las concentraciones activas."
    },
    {
        id: 39,
        area: "Fisicoquímica",
        pregunta: "¿Cuál es el significado físico del coeficiente de actividad ($\gamma$) en soluciones no ideales?",
        opciones: ["A) Mide la desviación del comportamiento ideal de un soluto debido a interacciones intermoleculares", "B) Representa la viscosidad cinemática de la mezcla líquida", "C) Es la relación estricta entre la masa molar del soluto y la del disolvente", "D) Indica el porcentaje de disociación iónica total de un ácido débil"],
        respuestaCorrecta: 0,
        explicacion: "El coeficiente de actividad corrige la concentración molar o molal para usar la 'actividad' ($a = \gamma \cdot m$), reflejando las interacciones reales en disoluciones."
    },
    {
        id: 40,
        area: "Fisicoquímica",
        pregunta: "En electroquímica, ¿qué describe la ecuación de Nernst?",
        opciones: ["A) La dependencia del potencial de celda o electrodo con respecto a las actividades (concentraciones) de los reactivos y productos", "B) La relación lineal entre la corriente límite y la velocidad de agitación", "C) La cantidad de sustancia depositada en un electrodo en función de la carga eléctrica pasada", "D) La conductancia equivalente de electrolitos fuertes a dilución infinita"],
        respuestaCorrecta: 0,
        explicacion: "La ecuación de Nernst permite calcular el potencial real de un electrodo o celda bajo condiciones no estándar: $E = E^\circ - \frac{RT}{nF}\ln(Q)$."
    },
    {
        id: 41,
        area: "Fisicoquímica",
        pregunta: "¿Qué es una celda galvánica (o voltaica)?",
        opciones: ["A) Un dispositivo electroquímico donde una reacción redox espontánea genera energía eléctrica", "B) Un sistema donde se aplica energía eléctrica externa para forzar una reacción no espontánea", "C) Un instrumento analítico que mide exclusivamente la resistencia óhmica de un electrolito", "D) Una celda electrolítica diseñada para la refinación de cobre electrolítico"],
        respuestaCorrecta: 0,
        explicacion: "Las celdas galvánicas transforman la energía libre de una reacción química redox espontánea en trabajo eléctrico útil."
    },
    {
        id: 42,
        area: "Fisicoquímica",
        pregunta: "¿Qué predice el Principio de Le Chatelier sobre un sistema en equilibrio químico?",
        opciones: ["A) Si se perturba un sistema en equilibrio, este se desplazará en la dirección que contrarreste o minimice dicha perturbación", "B) La constante de equilibrio varía inevitablemente si se añade un catalizador metálico", "C) La presión total de un sistema gaseoso disminuye siempre que se eleve la temperatura", "D) Los cambios de concentración no afectan nunca la posición del equilibrio termodinámico"],
        respuestaCorrecta: 0,
        explicacion: "El principio de Le Chatelier es una regla cualitativa fundamental para predecir la respuesta de sistemas en equilibrio ante cambios de presión, temperatura o concentración."
    },
    {
        id: 43,
        area: "Fisicoquímica",
        pregunta: "¿Cuál es la característica principal de un proceso isotérmico en un gas ideal?",
        opciones: ["A) La temperatura permanece constante ($\Delta T = 0$), por lo tanto la variación de energía interna es nula ($\Delta U = 0$)", "B) No hay transferencia de calor con los alrededores ($Q = 0$)", "C) El volumen del sistema permanece constante durante todo el proceso", "D) La presión del sistema no experimenta ninguna variación"],
        respuestaCorrecta: 0,
        explicacion: "En un proceso isotérmico a temperatura constante, la energía interna de un gas ideal (que solo depende de T) no cambia, por lo que el calor absorbido es igual al trabajo realizado."
    },
    {
        id: 44,
        area: "Fisicoquímica",
        pregunta: "¿Qué representa la capacidad calorífica a presión constante ($C_p$)?",
        opciones: ["A) La variación de la entalpía con respecto a la temperatura a presión constante: $C_p = (\partial H / \partial T)_p$", "B) La variación de la energía interna con respecto al volumen a temperatura constante", "C) El calor específico de una solución a volumen constante", "D) La entropía molar estándar de un gas noble"],
        respuestaCorrecta: 0,
        explicacion: "Por definición termodinámica, la capacidad calorífica a presión constante es la derivada parcial de la entalpía respecto a la temperatura: $C_p = (\partial H / \partial T)_p$."
    },
    {
        id: 45,
        area: "Fisicoquímica",
        pregunta: "En una catálisis heterogénea, ¿cuál es generalmente el paso determinante de la velocidad global del proceso catalítico?",
        opciones: ["A) La desorción de los productos de la superficie del catalizador", "B) La adsorción química o superficial de los reactivos sobre los sitios activos", "C) La difusión de los gases a través del recipiente de reacción", "D) La evaporación espontánea del disolvente soporte"],
        respuestaCorrecta: 1,
        explicacion: "En muchos sistemas heterogéneos, la adsorción química de los reactivos en la superficie del catalizador sólido o la reacción superficial específica constituyen los pasos más lentos (determinantes)."
    },
    {
        id: 46,
        area: "Química Inorgánica",
        pregunta: "¿Qué tipo de enlace químico se forma de manera predominante entre elementos con una gran diferencia de electronegatividad (ej. un metal alcalino y un halógeno)?",
        opciones: ["A) Enlace covalente polar", "B) Enlace metálico deslocalizado", "C) Enlace iónico", "D) Enlace covalente coordinativo"],
        respuestaCorrecta: 2,
        explicacion: "Una gran diferencia de electronegatividad favorece la transferencia completa de electrones, formando cationes y aniones que se atraen electrostáticamente mediante un enlace iónico."
    },
    {
        id: 47,
        area: "Química Inorgánica",
        pregunta: "Según la teoría de repulsión de los pares de electrones de la capa de valencia (VSEPR), ¿qué geometría molecular predice para una molécula con 4 pares de electrones enlazantes y 0 pares no enlazantes (ej. $CH_4$)?",
        opciones: ["A) Trigonal plana", "B) Tetraédrica", "C) Bipiramidal trigonal", "D) Octaédrica"],
        respuestaCorrecta: 1,
        explicacion: "Cuatro pares electrónicos alrededor del átomo central se disponen maximizando la distancia entre ellos adoptando una geometría espacial tetraédrica con ángulos de $109.5^\circ$."
    },
    {
        id: 48,
        area: "Química Inorgánica",
        pregunta: "¿Qué describe la teoría de campos cristalinos en los complejos de metales de transición?",
        opciones: ["A) El solapamiento covalente puro entre orbitales moleculares deslocalizados", "B) La separación de los orbitales $d$ degenerados del metal debido al campo electrostático generado por los ligandos", "C) La formación de un retículo cristalino iónico en sales anhidras", "D) La velocidad de isomerización geométrica en complejos planos cuadrados"],
        respuestaCorrecta: 1,
        explicacion: "La teoría de campos cristalinos explica las propiedades ópticas y magnéticas de los complejos de transición considerando el efecto electrostático de los ligandos sobre la energía de los orbitales $d$."
    },
    {
        id: 49,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es el número de coordinación y la geometría del complejo $[PtCl_4]^{2-}$?",
        opciones: ["A) Número de coordinación 4, geometría plana cuadrada", "B) Número de coordinación 4, geometría tetraédrica", "C) Número de coordinación 6, geometría octaédrica", "D) Número de coordinación 2, geometría lineal"],
        respuestaCorrecta: 0,
        explicacion: "Los complejos de metales $d^8$ (como $Pt(II)$ y $Pd(II)$) adoptan típicamente un número de coordinación de 4 con una geometría plana cuadrada."
    },
    {
        id: 50,
        area: "Química Inorgánica",
        pregunta: "¿Qué establece el principio de ácidos y bases duros y blandos (HSAB) de Pearson?",
        opciones: ["A) Los ácidos duros reaccionan preferente y más fuertemente con bases duras, y los ácidos blandos con bases blandas", "B) Los ácidos fuertes desplazan siempre a los ácidos débiles sin importar la polarizabilidad", "C) Las bases blandas tienen radios pequeños y alta densidad de carga no polarizable", "D) La fuerza ácida en disolución acuosa depende únicamente de la constante dieléctrica del medio"],
        respuestaCorrecta: 0,
        explicacion: "El principio HSAB predice la estabilidad de complejos y reacciones químicas basándose en que especies duras (pequeñas, no polarizables) y blandas (grandes, polarizables) interaccionan mejor entre afines."
    },
    {
        id: 51,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es la hibridación que experimenta el átomo central en una molécula con geometría bipiramidal trigonal (ej. $PCl_5$)?",
        opciones: ["A) $sp^2$", "B) $sp^3$", "C) $sp^3d$", "D) $sp^3d^2$"],
        respuestaCorrecta: 2,
        explicacion: "Para acomodar 5 regiones de alta densidad electrónica alrededor del átomo central, se requiere la combinación de un orbital $s$, tres orbitales $p$ y un orbital $d$, resultando en hibridación $sp^3d$."
    },
    {
        id: 52,
        area: "Química Inorgánica",
        pregunta: "¿Qué tipo de magnetismo exhibe una sustancia que posee electrones desparejados y es atraída fuertemente por un campo magnético externo?",
        opciones: ["A) Diamagnetismo", "B) Paramagnetismo", "C) Ferromagnetismo (o antiferromagnetismo según el acoplamiento)", "D) Superconductividad perfecta"],
        respuestaCorrecta: 1,
        explicacion: "El paramagnetismo es característico de especies con electrones desaparejados cuyos momentos magnéticos individuales se alinean temporalmente ante la presencia de un campo magnético externo."
    },
    {
        id: 53,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es el estado de oxidación del cromo en el dicromato de potasio ($K_2Cr_2O_7$)?",
        opciones: ["A) +3", "B) +5", "C) +6", "D) +7"],
        respuestaCorrecta: 2,
        explicacion: "Calculando: $2(+1) + 2(x) + 7(-2) = 0 \Rightarrow +2 + 2x - 14 = 0 \Rightarrow 2x = 12 \Rightarrow x = +6$. El cromo se encuentra en estado de oxidación +6."
    },
    {
        id: 54,
        area: "Química Inorgánica",
        pregunta: "¿Qué es un ligando quelante en química de coordinación?",
        opciones: ["A) Un ligando monodentado que se une al metal a través de un único átomo donador", "B) Un ligando multidentado capaz de unirse a un ion metálico por dos o más sitios de coordinación simultáneamente, formando anillos estables", "C) Una molécula orgánica que precipita cationes insolubles en medio alcalino", "D) Un anión inorgánico que actúa exclusivamente como contraión en la esfera externa"],
        respuestaCorrecta: 1,
        explicacion: "Los ligandos quelantes (como el EDTA o la etilendiamina) poseen múltiples átomos donadores que forman estructuras cíclicas quelato con el metal, incrementando notablemente la estabilidad termodinámica."
    },
    {
        id: 55,
        area: "Química Inorgánica",
        pregunta: "¿Qué propiedad periódica de los elementos disminuye al descender en un grupo de la tabla periódica (de arriba hacia abajo)?",
        opciones: ["A) El radio atómico", "B) El carácter metálico", "C) La energía de ionización", "D) El tamaño iónico"],
        respuestaCorrecta: 2,
        explicacion: "Al descender en un grupo, los electrones de valencia están más alejados del núcleo y apantallados, por lo que se requiere menos energía para arrancarlos; consecuentemente, la energía de ionización disminuye."
    },
    {
        id: 56,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Cuál es el enlace químico principal que estabiliza la estructura primaria de las proteínas (polipéptidos)?",
        opciones: ["A) Enlace de hidrógeno", "B) Enlace peptídico (amida)", "C) Interacciones hidrofóbicas", "D) Puentes disulfuro covalentes"],
        respuestaCorrecta: 1,
        explicacion: "La estructura primaria de las proteínas está determinada por la secuencia lineal de aminoácidos unidos covalentemente mediante enlaces peptídicos entre el grupo carboxilo de uno y el amino de otro."
    },
    {
        id: 57,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué coenzima actúa como transportador universal de grupos acilo en el metabolismo celular (ej. en el ciclo de Krebs)?",
        opciones: ["A) Nicotinamida adenina dinucleótido ($NAD^+$)", "B) Trifosfato de adenosina ($ATP$)", "C) Coenzima A ($CoA-SH$)", "D) Flavina adenina dinucleótido ($FAD$)"],
        respuestaCorrecta: 2,
        explicacion: "La Coenzima A transfiere grupos acilo mediante un enlace tioester altamente energético, destacando la formación de acetil-CoA para su entrada al ciclo de Krebs."
    },
    {
        id: 58,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "En enzimología, ¿qué representa la constante de Michaelis-Menten ($K_m$)?",
        opciones: ["A) La velocidad máxima de la reacción catalizada a saturación de sustrato", "B) La concentración de sustrato a la cual la velocidad de reacción alcanza la mitad de la velocidad máxima ($V_{max}/2$)", "C) El número de recambio molecular por unidad de tiempo", "D) La constante de inhibición alosterica reversible"],
        respuestaCorrecta: 1,
        explicacion: "La constante $K_m$ es una medida inversa de la afinidad de la enzima por su sustrato; numéricamente equivale a la concentración de sustrato que produce una velocidad igual a $V_{max}/2$."
    },
    {
        id: 59,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Cuál es el principal polisacárido de reserva energética en los animales, almacenado fundamentalmente en el hígado y tejido muscular?",
        opciones: ["A) Celulosa", "B) Almidón (amilopectina)", "C) Glucógeno", "D) Quitina"],
        respuestaCorrecta: 2,
        explicacion: "El glucógeno es un polímero altamente ramificado de glucosa que sirve como principal reserva energética de carbohidratos en animales."
    },
    {
        id: 60,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué tipo de inhibición enzimática se caracteriza porque el inhibidor se une al sitio activo de la enzima compitiendo directamente con el sustrato, pudiendo superarse elevando la concentración de este último?",
        opciones: ["A) Inhibición acompetitiva", "B) Inhibición no competitiva", "C) Inhibición competitiva", "D) Inhibición irreversible por enlace covalente"],
        respuestaCorrecta: 2,
        explicacion: "En la inhibición competitiva, el inhibidor se asemeja al sustrato y compite por ocupar el sitio activo; un aumento masivo de la concentración de sustrato desplaza al inhibidor."
    },
    {
        id: 61,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué son los ácidos grasos esenciales (como el linoleico y linolénico) en la nutrición humana?",
        opciones: ["A) Aquellos que el organismo humano puede sintetizar de novo a partir de glucosa", "B) Aquellos que no pueden ser sintetizados por el organismo y deben obtenerse obligatoriamente a través de la dieta", "C) Ácidos grasos saturados de cadena muy corta que se absorben directamente en el estómago", "D) Lípidos complejos que forman exclusivamente la membrana mitocondrial interna"],
        respuestaCorrecta: 1,
        explicacion: "Los ácidos grasos esenciales carecen de las desaturasas necesarias para introducir dobles enlaces en ciertas posiciones (como omega-3 y omega-6), por lo que son dietéticamente indispensables."
    },
    {
        id: 62,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué fenómeno físico-químico provoca la desnaturalización térmica de las proteínas en los alimentos durante su cocción?",
        opciones: ["A) La ruptura de los enlaces peptídicos de la estructura primaria con formación de aminoácidos libres", "B) La pérdida de las estructuras tridimensionales secundarias, terciarias y cuaternarias debido a la agitación térmica que rompe puentes de hidrógeno e interacciones débiles", "C) La polimerización cruzada de azúcares reductores con grupos amino", "D) La hidrólisis completa de los enlaces éster de los triglicéridos asociados"],
        respuestaCorrecta: 1,
        explicacion: "La desnaturalización térmica afecta las estructuras superiores (plegados) de las proteínas al romper enlaces débiles, sin alterar el enlace peptídico de la estructura primaria."
    },
    {
        id: 63,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué describe la actividad de agua ($a_w$) en la tecnología y conservación de alimentos?",
        opciones: ["A) El contenido total de humedad expresado en porcentaje en peso", "B) La relación entre la presión de vapor de agua del alimento y la presión de vapor del agua pura a la misma temperatura", "C) La velocidad con la que el agua se evapora de la superficie del alimento en un secador", "D) La concentración molar de sales disueltas en el citoplasma celular"],
        respuestaCorrecta: 1,
        explicacion: "La actividad de agua ($a_w$) mide el agua 'disponible' para reacciones químicas y crecimiento microbiano; se define como $a_w = P / P_0$."
    },
    {
        id: 64,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Cuál es el proceso metabólico mediante el cual se degrada la glucosa hasta ácido pirúvico en el citoplasma celular, generando un rendimiento neto de ATP?",
        opciones: ["A) Ciclo de Krebs (ácido cítrico)", "B) Fosforilación oxidativa mitocondrial", "C) Glucólisis", "D) Gluconeogénesis hepática"],
        respuestaCorrecta: 2,
        explicacion: "La glucólisis es la vía metabólica citosólica que oxida la glucosa a piruvato, produciendo un balance neto de 2 moléculas de ATP y NADH."
    },
    {
        id: 65,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué ocurre químicamente durante la reacción de Maillard en los alimentos?",
        opciones: ["A) Una hidrólisis enzimática de las proteínas inducida por pepsina", "B) Una condensación no enzimática entre los grupos amino libres de proteínas/aminoácidos y los grupos carbonilo de azúcares reductores", "C) La oxidación rancia de los ácidos grasos poliinsaturados por oxígeno atmosférico", "D) La caramelización pura de sacarosa en ausencia absoluta de compuestos nitrogenados"],
        respuestaCorrecta: 1,
        explicacion: "La reacción de Maillard es compleja y responsable del color marrón y aromas característicos en alimentos horneados o tostados, originada entre azúcares reductores y grupos amino."
    },
    {
        id: 66,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué principio termodinámico y de transferencia de masa rige la operación unitaria de destilación fraccionada?",
        opciones: ["A) Diferencia en los puntos de ebullición y volatilidades relativas de los componentes de una mezcla líquida", "B) Extracción selectiva de solutos utilizando disolventes inmiscibles", "C) Retención diferencial de moléculas por tamaño a través de membranas semipermeables", "D) Precipitación fraccionada basada en diferencias drásticas de solubilidad a baja temperatura"],
        respuestaCorrecta: 0,
        explicacion: "La destilación fraccionada separa componentes basándose en la diferencia de sus volatilidades; el vapor se enriquece continuamente en el componente más volátil a lo largo de las etapas de la columna."
    },
    {
        id: 67,
        area: "Química Industrial y Procesos",
        pregunta: "En un balance de materia sin reacción química para un proceso industrial, ¿cuál es la ecuación fundamental que siempre debe cumplirse en estado estacionario?",
        opciones: ["A) Entrada = Salida", "B) Acumulación = Generación - Consumo", "C) Entrada + Generación = Salida + Consumo", "D) Entrada = Salida + Acumulación"],
        respuestaCorrecta: 0,
        explicacion: "En estado estacionario y sin reacción química, no hay acumulación ni generación, por lo que la masa total que entra al sistema debe ser estrictamente igual a la masa que sale."
    },
    {
        id: 68,
        area: "Química Industrial y Procesos",
        pregunta: "¿Cuál es el objetivo principal de utilizar un catalizador heterogéneo en un reactor químico industrial de gran escala?",
        opciones: ["A) Aumentar la temperatura termodinámica de equilibrio de la reacción", "B) Acelerar la velocidad de la reacción disminuyendo la energía de activación sin consumirse en el proceso global", "C) Desplazar el equilibrio químico exclusivamente hacia la formación completa de reactivos", "D) Reducir la presión operativa del reactor a valores cercanos al vacío absoluto"],
        respuestaCorrectatexto: "B",
        opciones: ["A) Aumentar la temperatura termodinámica de equilibrio de la reacción", "B) Acelerar la velocidad de la reacción disminuyendo la energía de activación sin consumirse en el proceso global", "C) Desplazar el equilibrio químico exclusivamente hacia la formación completa de reactivos", "D) Reducir la presión operativa del reactor a valores cercanos al vacío absoluto"],
        respuestaCorrecta: 1,
        explicacion: "Un catalizador modifica la vía cinética de la reacción bajando la energía de activación, lo que permite alcanzar el equilibrio mucho más rápido a temperaturas más moderadas."
    },
    {
        id: 69,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué tipo de reactor químico opera de manera continua, donde los reactivos entran y los productos salen constantemente, asumiendo un mezclado perfecto de tal forma que la composición en el interior es homogénea e igual a la de la corriente de salida?",
        opciones: ["A) Reactor discontinuo (Batch)", "B) Reactor tubular de flujo pistón (PFR)", "C) Reactor de tanque agitado continuo (CSTR / Backmix)", "D) Reactor de lecho fijo empacado adiabático"],
        respuestaCorrecta: 2,
        explicacion: "El CSTR (Continuous Stirred Tank Reactor) se caracteriza por un mezclado intenso y continuo, haciendo que las propiedades de la mezcla dentro del tanque sean uniformes en todo momento."
    },
    {
        id: 70,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué operación unitaria se emplea para separar partículas sólidas suspendidas en un fluido (líquido o gas) haciéndolo pasar a través de un medio poroso que retiene a los sólidos?",
        opciones: ["A) Sedimentación por gravedad", "B) Filtración", "C) Cristalización fraccionada", "D) Evaporación de efecto múltiple"],
        respuestaCorrecta: 1,
        explicacion: "La filtración es la operación unitaria de separación físico-mecánica donde un medio filtrante poroso retiene las partículas sólidas permitiendo el paso del filtrado fluido."
    },
    {
        id: 71,
        area: "Química Industrial y Procesos",
        pregunta: "En los procesos de intercambio térmico industrial, ¿qué configuración de flujo en un intercambiador de doble tubo maximiza la transferencia de calor y logra la mayor temperatura de salida del fluido frío?",
        opciones: ["A) Flujo paralelo (co-corriente)", "B) Flujo cruzado sin deflectores", "C) Flujo a contra-corriente", "D) Flujo estacionario adiabático"],
        respuestaCorrecta: 2,
        explicacion: "El flujo a contra-corriente mantiene la diferencia de temperatura ($ \Delta T $) más uniforme y elevada a lo largo de todo el intercambiador, logrando la máxima eficiencia térmica posible."
    },
    {
        id: 72,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué describe el número de Reynolds ($Re$) en mecánica de fluidos y operaciones unitarias?",
        opciones: ["A) La relación entre las fuerzas de inercia y las fuerzas viscosas en un fluido en movimiento", "B) La relación entre el calor transferido y el trabajo mecánico realizado", "C) La solubilidad máxima de un gas en agua a presión atmosférica", "D) La velocidad terminal de caída de una esfera en un líquido viscoso"],
        respuestaCorrecta: 0,
        explicacion: "El número de Reynolds ($Re = \frac{\rho v D}{\mu}$) es un parámetro adimensional que determina si el régimen de flujo de un fluido es laminar, de transición o turbulento."
    },
    {
        id: 73,
        area: "Química Industrial y Procesos",
        pregunta: "¿Cuál es el objetivo principal del proceso de cracking (desintegración catalítica) en la industria petroquímica?",
        opciones: ["A) Polimerizar gas natural para obtener ceras pesadas", "B) Romper hidrocarburos de cadena larga y alto peso molecular en fracciones más ligeras y valiosas como gasolina y olefinas", "C) Hidrogenar completamente los compuestos aromáticos para convertirlos en cicloalcanos estables", "D) Extraer azufre y metales pesados de los crudos pesados mediante lavados ácidos"],
        respuestaCorrecta: 1,
        explicacion: "El cracking catalítico transforma fracciones pesadas del petróleo (gasóleos) en hidrocarburos más ligeros y ramificados de mayor demanda comercial (gasolinas de alto octanaje)."
    },
    {
        id: 74,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué operación unitaria de transferencia de masa se utiliza para remover un soluto de una corriente gaseosa haciéndolo disolver en un líquido absorbente adecuado?",
        opciones: ["A) Secado por aspersión", "B) Absorción de gases (en columna de burbujeo o relleno)", "C) Adsorción en lecho de carbón activado", "D) Sublimación al vacío"],
        respuestaCorrecta: 1,
        explicacion: "La absorción gas-líquido es una operación donde un gas soluble entra en contacto con un líquido disolvente para transferir el soluto de la fase gaseosa a la líquida (ej. lavado de gases)."
    },
    {
        id: 75,
        area: "Química Industrial y Procesos",
        pregunta: "En el diseño de reactores químicos, ¿qué representa el tiempo espacial ($\tau$)?",
        opciones: ["A) El tiempo necesario para procesar un volumen de alimentación equivalente al volumen del reactor a condiciones de entrada", "B) La vida media del catalizador antes de sufrir desactivación total por coquización", "C) El tiempo transcurrido desde el inicio de la reacción hasta alcanzar el equilibrio termodinámico", "D) El inverso de la velocidad específica de reacción a conversión nula"],
        respuestaCorrecta: 0,
        explicacion: "El tiempo espacial es una medida de la capacidad del reactor, definido como el cociente entre el volumen del caudal volumétrico de alimentación y el volumen del reactor ($\tau = V / v_0$)."
    },
    {
        id: 76,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué indican los pictogramas de seguridad del Sistema Globalmente Harmonizado (GHS) con un símbolo de una llama dentro de un rombo rojo?",
        opciones: ["A) Sustancias comburentes o oxidantes", "B) Líquidos, sólidos o gases inflamables", "C) Toxicidad aguda mortal por vía oral", "D) Gases a alta presión dentro de cilindros"],
        respuestaCorrecta: 1,
        explicacion: "El pictograma con la llama representa peligros de inflamabilidad para gases, líquidos y sólidos capaces de prenderse fácilmente en presencia de una fuente de ignición."
    },
    {
        id: 77,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Cuál es el propósito fundamental de una Hoja de Datos de Seguridad (SDS / MSDS) de un producto químico?",
        opciones: ["A) Proveer exclusivamente los costos comerciales y proveedores autorizados del reactivo", "B) Informar detalladamente sobre los peligros físicos, a la salud y ambientales, así como las medidas de manejo seguro, almacenamiento y respuesta a emergencias", "C) Establecer las fórmulas sintéticas patentadas para la fabricación industrial del compuesto", "D) Describir las normas de contabilidad fiscal para la compra de sustancias peligrosas"],
        respuestaCorrecta: 1,
        explicacion: "La SDS es un documento técnico estandarizado de 16 secciones que comunica los riesgos asociados a una sustancia química y los protocolos de seguridad requeridos."
    },
    {
        id: 78,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué método de tratamiento de aguas residuales industriales es el más adecuado para remover metales pesados disueltos (como plomo o cadmio)?",
        opciones: ["A) Oxidación avanzada por fotocatálisis UV", "B) Precipitación química en forma de hidróxidos insolubles mediante ajuste de pH (alcalinización)", "C) Filtración biológica por lodos activados convencionales", "D) Desinfección mediante radiación ultravioleta germicida"],
        respuestaCorrecta: 1,
        explicacion: "La precipitación química ajustando el pH con agentes alcalinos (como cal o sosa) precipita los metales pesados como hidróxidos metálicos insolubles, facilitando su separación por sedimentación."
    },
    {
        id: 79,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "En la gestión integral de residuos peligrosos en un laboratorio de química, ¿cómo deben manejarse los solventes orgánicos halogenados mezclados con solventes no halogenados?",
        opciones: ["A) Deben verterse directamente al sistema de drenaje municipal con abundante agua", "B) Deben incinerarse al aire libre en patios traseros autorizados", "C) Deben recolectarse y segregarse en contenedores específicos separados para evitar reacciones violentas y facilitar su tratamiento o incineración controlada", "D) Pueden mezclarse con residuos biológicos infecciosos sin restricciones"],
        respuestaCorrecta: 2,
        explicacion: "Los residuos químicos deben segregarse rigurosamente según su incompatibilidad para evitar reacciones exotérmicas peligrosas y permitir su correcta disposición final o reciclaje."
    },
    {
        id: 80,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué significa el concepto de 'Química Verde' (Green Chemistry)?",
        opciones: ["A) El diseño de productos y procesos químicos que reducen o eliminan el uso y generación de sustancias peligrosas", "B) La utilización exclusiva de plantas y extractos botánicos para fabricar medicamentos homeopáticos", "C) La prohibición total del uso de cualquier disolvente orgánico en la síntesis industrial", "D) El estudio de la química atmosférica relacionada exclusivamente con la lluvia ácida"],
        respuestaCorrecta: 0,
        explicacion: "La química verde busca la prevención de la contaminación desde la concepción del diseño molecular y de procesos, optimizando la economía atómica y la eficiencia energética."
    },
    {
        id: 81,
        area: "Química Analítica",
        pregunta: "¿Qué es un blanco analítico y para qué se utiliza en los procedimientos de laboratorio?",
        opciones: ["A) Una muestra altamente concentrada para calibrar el rango superior del instrumento", "B) Una muestra que contiene todos los reactivos y disolventes pero sin el analito, empleada para corregir señales de fondo e interferencias", "C) Un estándar certificado de pureza analítica del 99.9%", "D) El residuo sólido obtenido tras la incineración de una muestra orgánica"],
        respuestaCorrecta: 1,
        explicacion: "El blanco analítico evalúa la contaminación introducida por los reactivos o el material de vidrio, permitiendo restar su contribución en la medición final del analito."
    },
    {
        id: 82,
        area: "Química Analítica",
        pregunta: "En cromatografía líquida, ¿qué diferencia principal existe entre la fase normal y la fase reversa?",
        opciones: ["A) En fase normal la fase estacionaria es apolar y la móvil es polar; en fase reversa ocurre lo contrario", "B) En fase normal la fase estacionaria es muy polar y la fase móvil es apolar o de baja polaridad", "C) En fase normal se emplean exclusivamente gases permanentes como fase móvil", "D) La fase reversa no utiliza columnas empaquetadas sino capilares de cuarzo"],
        respuestaCorrecta: 1,
        explicacion: "En cromatografía de fase normal, la estacionaria es polar (sílica gel) y la móvil es apolar; en fase reversa (la más usada), la estacionaria es apolar ($C_{18}$) y la móvil es polar (agua/metanol)."
    },
    {
        id: 83,
        area: "Química Analítica",
        pregunta: "¿Qué mide el límite de detección (LOD) en la validación de un método analítico?",
        opciones: ["A) La concentración más baja de analito que puede detectarse con fiabilidad, aunque no necesariamente cuantificarse con precisión", "B) La concentración mínima que puede cuantificarse con criterios estrictos de repetibilidad", "C) El rango lineal máximo de respuesta del instrumento analítico", "D) La desviación estándar relativa obtenida en el punto medio de la curva de calibración"],
        respuestaCorrecta: 0,
        explicacion: "El LOD es la concentración mínima distinguible del ruido de fondo (típicamente $3\sigma$ del blanco), mientras que el límite de cuantificación (LOQ) es donde se puede cuantificar con precisión ($10\sigma$)."
    },
    {
        id: 84,
        area: "Química Analítica",
        pregunta: "¿Por qué se utiliza un electrodo de calomelanos saturado (SCE) o de plata/cloruro de plata como electrodo de referencia en electroquímica?",
        opciones: ["A) Porque su potencial eléctrico es variable y depende de la concentración de la muestra", "B) Porque posee un potencial de semicelda estable, constante y conocido independientemente de la composición de la solución de prueba", "C) Porque actúa como un conductor metálico sin resistencia eléctrica interna", "D) Porque oxida selectivamente a los iones hidroxilo"],
        respuestaCorrecta: 1,
        explicacion: "Un electrodo de referencia debe mantener un potencial constante y reproducible para permitir medir con precisión el potencial del electrodo indicador de trabajo."
    },
    {
        id: 85,
        area: "Química Analítica",
        pregunta: "En espectroscopia de absorción atómica, ¿qué problema analítico previene el uso de un agente liberador o protector (como sales de lantano) al determinar calcio en presencia de fosfatos?",
        opciones: ["A) La interferencia química por formación de un compuesto refractario no volatilizable en la flama", "B) La ionización excesiva de los átomos de calcio a altas temperaturas", "C) El ensanchamiento de banda por efectos térmicos del quemador", "D) La interferencia espectral por coincidencia de líneas de emisión"],
        respuestaCorrecta: 0,
        explicacion: "Los fosfatos forman sales refractarias con el calcio que no se atomizan bien en la flama. El lantano compite con el calcio o se une al fosfato, liberando al calcio para su correcta absorción."
    },
    {
        id: 86,
        area: "Química Orgánica",
        pregunta: "¿Qué tipo de reacción experimentan los haluros de alquilo primarios al reaccionar con cianuro de sodio ($NaCN$) en un disolvente aprótico polar?",
        opciones: ["A) Sustitución nucleofílica bimolecular ($S_N2$)", "B) Sustitución nucleofílica unimolecular ($S_N1$)", "C) Eliminación bimolecular ($E2$)", "D) Adición electrofílica radicalaria"],
        respuestaCorrecta: 0,
        explicacion: "Los haluros primarios con nucleófilos fuertes ($CN^-$) en disolventes apróticos polares reaccionan exclusivamente mediante un mecanismo concertado de sustitución nucleofílica bimolecular ($S_N2$)."
    },
    {
        id: 87,
        area: "Química Orgánica",
        pregunta: "¿Cuál es el producto principal de la hidratación catalizada por ácido de un alqueno ramificado como el 2-metilpropeno?",
        opciones: ["A) 1-butanol", "B) 2-metil-1-propanol", "C) 2-metil-2-propanol (terc-butanol)", "D) Ácido 2-metilpropanoico"],
        respuestaCorrecta: 2,
        explicacion: "La adición de agua sigue la regla de Markovnikov a través del carbocatión más estable. En este caso se forma un carbocatión terciario, dando como producto principal el 2-metil-2-propanol."
    },
    {
        id: 88,
        area: "Química Orgánica",
        pregunta: "¿Qué reactivo se utiliza comúnmente para reducir selectivamente un grupo nitro aromático ($Ar-NO_2$) a una amina aromática ($Ar-NH_2$)?",
        opciones: ["A) Hidrógeno molecular sobre platino o paladio en condiciones suaves ($H_2/Pd-C$) o estaño con ácido clorhídrico", "B) Permanganato de potasio concentrado en caliente", "C) Cloruro de tionilo anhidro", "D) Borohidruro de litio a temperatura de reflujo"],
        respuestaCorrecta: 0,
        explicacion: "La reducción catalítica con hidrógeno y metal de transición o la reducción química con metales en medio ácido ($Sn/HCl$) reduce eficazmente grupos nitro aromáticos a aminas."
    },
    {
        id: 89,
        area: "Química Orgánica",
        pregunta: "En espectrometría de masas, ¿qué representa el pico del ion molecular ($M^+$)?",
        opciones: ["A) El fragmento más ligero y estable de la molécula fragmentada", "B) El ion radical formado por la pérdida de un electrón de la molécula neutra, indicando el peso molecular exacto del compuesto", "C) Una impureza derivada de la contaminación del filamento del equipo", "D) El pico base de máxima abundancia relativa en el espectro"],
        respuestaCorrectataxto: "B",
        opciones: ["A) El fragmento más ligero y estable de la molécula fragmentada", "B) El ion radical formado por la pérdida de un electrón de la molécula neutra, indicando el peso molecular exacto del compuesto", "C) Una impureza derivada de la contaminación del filamento del equipo", "D) El pico base de máxima abundancia relativa en el espectro"],
        respuestaCorrecta: 1,
        explicacion: "El ion molecular se genera al bombardear la molécula con electrones y expulsar uno; su relación masa/carga ($m/z$) corresponde al peso molecular del compuesto original."
    },
    {
        id: 90,
        area: "Química Orgánica",
        pregunta: "¿Cuál es la función del cloruro de aluminio ($AlCl_3$) en una reacción de alquilación de Friedel-Crafts?",
        opciones: ["A) Actuar como un ácido de Lewis fuerte que polariza y genera el catión alquilo (electrófilo)", "B) Funcionar como una base de Brønsted-Lowry para extraer un protón del anillo", "C) Servir como disolvente inerte de la reacción", "D) Evitar la polimerización del benceno"],
        respuestaCorrecta: 0,
        explicacion: "El $AlCl_3$ es un ácido de Lewis que interacciona con el haluro de alquilo para generar el carbocatión electrófilo capaz de atacar al anillo aromático."
    },
    {
        id: 91,
        area: "Fisicoquímica",
        pregunta: "¿Qué describe la Ley de Raoult para soluciones ideales de líquidos volátiles?",
        opciones: ["A) La presión parcial de cada componente en el equilibrio es igual al producto de su fracción molar en la fase líquida por la presión de vapor del componente puro", "B) El punto de ebullición de una solución desciende linealmente con la fracción molar del soluto", "C) La solubilidad de un sólido en un líquido es inversamente proporcional a la temperatura", "D) El volumen molar parcial de los componentes es siempre constante e independiente de la composición"],
        respuestaCorrecta: 0,
        explicacion: "La Ley de Raoult establece que $P_i = x_i \cdot P_i^\circ$, modelando el comportamiento termodinámico ideal de mezclas líquidas homogéneas."
    },
    {
        id: 92,
        area: "Fisicoquímica",
        pregunta: "¿Cuál es el efecto de un catalizador sobre la constante de equilibrio ($K$) de una reacción reversible?",
        opciones: ["A) Aumenta notablemente el valor de $K$ favoreciendo los productos", "B) Disminuye el valor de $K$ para evitar reacciones secundarias no deseadas", "C) No modifica el valor de la constante de equilibrio; solo acelera la velocidad para alcanzarlo", "D) Modifica la termodinámica del sistema alterando la energía libre estándar"],
        respuestaCorrecta: 2,
        explicacion: "Un catalizador acelera por igual la velocidad de la reacción directa y la inversa, por lo que no altera la termodinámica del equilibrio ni el valor de la constante $K$."
    },
    {
        id: 93,
        area: "Fisicoquímica",
        pregunta: "En termodinámica estadística y clásica, ¿cómo se define el cambio de entropía ($\Delta S$) para un proceso reversible a temperatura absoluta $T$?",
        opciones: ["A) $\Delta S = \int \frac{dQ_{rev}}{T}$", "B) $\Delta S = \Delta H - T\Delta G$", "C) $\Delta S = n R \ln(V_2/V_1)$ exclusivamente", "D) $\Delta S = \frac{W_{max}}{T}$"],
        respuestaCorrecta: 0,
        explicacion: "La definición termodinámica de entropía relaciona el calor intercambiado en un camino reversible con la temperatura absoluta a la que ocurre: $dS = dQ_{rev} / T$."
    },
    {
        id: 94,
        area: "Fisicoquímica",
        pregunta: "¿Qué indica una reacción de pseudo-primer orden en cinética química?",
        opciones: ["A) Que la reacción es fundamentalmente de orden cero pero aparenta ser de primer orden", "B) Que un reactivo está en tan gran exceso que su concentración permanece prácticamente constante, haciendo que la velocidad dependa aparentemente de un solo reactivo", "C) Que la energía de activación es negativa a temperaturas criogénicas", "D) Que el mecanismo involucra tres moléculas en el estado de transición elemental"],
        respuestaCorrecta: 1,
        explicacion: "Si un reactivo (como el agua en una hidrólisis) se encuentra en gran exceso, su concentración no varía apreciablemente, simplificando la cinética matemática a un pseudo-primer orden."
    },
    {
        id: 95,
        area: "Fisicoquímica",
        pregunta: "¿Qué establece la ley de Henry para soluciones diluidas de gases en líquidos?",
        opciones: ["A) La concentración de un gas disuelto es directamente proporcional a la presión parcial del gas sobre la solución a temperatura constante", "B) El volumen de un gas es directamente proporcional a su temperatura absoluta", "C) La presión de vapor total de una mezcla es la suma de las presiones de los gases inertes", "D) La viscosidad de un líquido disminuye exponencialmente con la presión hidrostática"],
        respuestaCorrecta: 0,
        explicacion: "La ley de Henry ($C = k_H \cdot P_{gas}$) describe el comportamiento de gases poco solubles en líquidos a presiones moderadas."
    },
    {
        id: 96,
        area: "Química Inorgánica",
        pregunta: "¿Qué tipo de estructura cristalina presentan los haluros alcalinos como el cloruro de sodio ($NaCl$)?",
        opciones: ["A) Estructura cúbica centrada en el cuerpo (BCC)", "B) Estructura cúbica compacta (FCC) con coordinación 6:6 para ambos iones", "C) Estructura hexagonal compacta (HCP) con coordinación tetraédrica", "D) Estructura laminar tipo grafito"],
        respuestaCorrecta: 1,
        explicacion: "El cloruro de sodio cristaliza en una red cúbica centrada en las caras donde tanto el sodio como el cloro tienen un número de coordinación de 6 (octaédrico)."
    },
    {
        id: 97,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es la geometría y polaridad de una molécula de triflúor de boro ($BF_3$)?",
        opciones: ["A) Geometría piramidal trigonal, molécula polar", "B) Geometría trigonal plana, molécula apolar", "C) Geometría en forma de T, molécula fuertemente polar", "D) Geometría lineal, molécula apolar"],
        respuestaCorrecta: 1,
        explicacion: "El $BF_3$ tiene 3 pares enlazantes alrededor del boro con hibridación $sp^2$, adoptando una geometría trigonal plana simétrica donde los momentos dipolares individuales se cancelan (apolar)."
    },
    {
        id: 98,
        area: "Química Inorgánica",
        pregunta: "¿Qué son los compuestos de inclusión o clatratos en química inorgánica?",
        opciones: ["A) Aleaciones metálicas homogéneas de sustitución en la red cristalina", "B) Estructuras donde moléculas huésped quedan atrapadas físicamente dentro de cavidades o jaulas formadas por una red tridimensional de moléculas anfitrionas", "C) Complejos de coordinación altamente coloreados con ligandos macrocíclicos", "D) Sales hidratadas que contienen agua zeolítica en los canales cristalinos"],
        respuestaCorrecta: 1,
        explicacion: "Los clatratos son redes supramoleculares anfitrionas que encierran físicamente moléculas huésped mediante fuerzas intermoleculares sin enlaces químicos directos."
    },
    {
        id: 99,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es la tendencia general de la electronegatividad en la tabla periódica de los elementos?",
        opciones: ["A) Aumenta de izquierda a derecha en un periodo y disminuye de arriba hacia abajo en un grupo", "B) Disminuye de izquierda a derecha en un periodo y aumenta al descender en un grupo", "C) Es constante para todos los elementos representativos del bloque s y p", "D) Es directamente proporcional a la masa atómica sin importar la posición"],
        respuestaCorrecta: 0,
        explicacion: "La electronegatividad aumenta hacia la esquina superior derecha de la tabla periódica (siendo el flúor el más electronegativo) debido al incremento de la carga nuclear efectiva."
    },
    {
        id: 100,
        area: "Química Inorgánica",
        pregunta: "¿Qué describe la teoría de orbitales moleculares (TOM) frente a la estructura de Lewis al explicar el enlace en la molécula de oxígeno ($O_2$)?",
        opciones: ["A) Predice correctamente su carácter paramagnético debido a la presencia de dos electrones desparejados en los orbitales antienlazantes $\pi^*$", "B) Asume que todos los electrones están confinados en enlaces dobles estrictos sin deslocalización", "C) Demuestra que el oxígeno es una sustancia totalmente diamagnética", "D) Indica que la molécula es inestable y se disocia espontáneamente a temperatura ambiente"],
        respuestaCorrectataxto: "A",
        opciones: ["A) Predice correctamente su carácter paramagnético debido a la presencia de dos electrones desparejados en los orbitales antienlazantes $\pi^*$", "B) Asume que todos los electrones están confinados en enlaces dobles estrictos sin deslocalización", "C) Demuestra que el oxígeno es una sustancia totalmente diamagnética", "D) Indica que la molécula es inestable y se disocia espontáneamente a temperatura ambiente"],
        respuestaCorrecta: 0,
        explicacion: "La teoría de orbitales moleculares muestra que el $O_2$ tiene electrones desaparejados en sus orbitales $\pi^*$, explicando con éxito su paramagnetismo experimental."
    },
    {
        id: 101,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué vitaminas del complejo B actúan como precursores fundamentales para la síntesis de coenzimas redox como $NAD^+$ y $FAD$?",
        opciones: ["A) Tiamina (B1) y Ácido fólico (B9)", "B) Niacina (B3) y Riboflavina (B2)", "C) Piridoxina (B6) y Cobalamina (B12)", "D) Biotina (B7) y Ácido pantoténico (B5)"],
        respuestaCorrecta: 1,
        explicacion: "La niacina es precursora del dinucleótido de nicotinamida y adenina ($NAD^+$), mientras que la riboflavina es precursora del flavina adenina dinucleótido ($FAD$)."
    },
    {
        id: 102,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué tipo de enlace covalente une a los monosacáridos para formar oligosacáridos y polisacáridos?",
        opciones: ["A) Enlace peptídico", "B) Enlace glucosídico (o éter)", "C) Enlace éster de ácido graso", "D) Enlace fosfodiéster"],
        respuestaCorrecta: 1,
        explicacion: "El enlace glucosídico se forma mediante una reacción de condensación entre el grupo hidroxilo del carbono anomérico de un monosacárido y el hidroxilo de otra molécula."
    },
    {
        id: 103,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Cuál es el principal destino metabólico del acetil-CoA producido durante la $\beta$-oxidación de los ácidos grasos y la glucólisis aerobia?",
        opciones: ["A) Su conversión directa a glucosa en el tejido adiposo", "B) Su oxidación total a dióxido de carbono y agua a través del ciclo de Krebs en la mitocondria", "C) Su polimerización para formar ácidos nucleicos", "D) Su excreción renal inmediata como urea"],
        respuestaCorrecta: 1,
        explicacion: "El acetil-CoA entra al ciclo de Krebs (ácido cítrico), donde sus carbonos se oxidan a $CO_2$, liberando equivalentes reductores para la cadena de transporte de electrones."
    },
    {
        id: 104,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué caracteriza estructuralmente a un triglicérido insaturado frente a uno saturado a temperatura ambiente?",
        opciones: ["A) Posee dobles enlaces carbono-carbono con geometría cis que impiden un empaquetamiento compacto, manteniendo un estado líquido (aceites)", "B) Presenta cadenas hydrocarbonadas totalmente lineales que cristalizan fácilmente como grasas sólidas", "C) Contiene un grupo fosfato polar unido al glicerol", "D) Carece totalmente de enlaces éster en su estructura central"],
        respuestaCorrecta: 0,
        explicacion: "Los dobles enlaces cis en los ácidos grasos insaturados provocan 'dobleces' en la cadena, reduciendo las fuerzas intermoleculares de London y resultando en puntos de fusión más bajos (líquidos)."
    },
    {
        id: 105,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué ocurre bioquímicamente durante la glucogenólisis muscular y hepática?",
        opciones: ["A) La síntesis de glucógeno a partir de UDP-glucosa", "B) La degradación enzimática del glucógeno para liberar glucosa-1-fosfato", "C) La conversión de aminoácidos en glucosa en condiciones de ayuno prolongado", "D) La fermentación anaerobia del lactato"],
        respuestaCorrecta: 1,
        explicacion: "La glucogenólisis es la vía catabólica catalizada por la glucógeno fosforilasa que rompe enlaces $\alpha-1,4$ para liberar glucosa-1-fosfato y mantener la glucemia o energía."
    },
    {
        id: 106,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué describe el balance de energía en un sistema industrial abierto (en régimen estacionario con flujo estacionario)?",
        opciones: ["A) La variación de la energía total es igual al calor neto aportado menos el trabajo de flecha: $\Delta H + \Delta E_k + \Delta E_p = Q - W_s$", "B) La masa total que entra es estrictamente igual al calor latente de vaporización", "C) El trabajo mecánico realizado es cero en cualquier condición de operación", "D) La entalpía de los productos es siempre menor que la de los reactivos sin importar el calor"],
        respuestaCorrecta: 0,
        explicacion: "El balance de energía para sistemas abiertos estacionarios considera cambios de entalpía, energía cinética, potencial, calor y trabajo de eje ($W_s$)."
    },
    {
        id: 107,
        area: "Química Industrial y Procesos",
        pregunta: "¿Cuál es la función de una torre de enfriamiento en un proceso industrial químico?",
        opciones: ["A) Enfriar agua caliente de proceso mediante la evaporación parcial de una fracción de la misma al entrar en contacto directo con una corriente de aire", "B) Licuar gases inflamables a temperaturas criogénicas mediante compresión adiabática", "C) Proveer refrigeración con amoníaco para congelar alimentos", "D) Condensar vapores orgánicos tóxicos provenientes de un reactor batch"],
        respuestaCorrecta: 0,
        explicacion: "Las torres de enfriamiento operan por transferencia simultánea de calor y masa (evaporación), aprovechando el calor latente de vaporización para enfriar el agua de los condensadores."
    },
    {
        id: 108,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué indica una conversión del 95% en un reactor químico industrial con respecto a un reactivo limitante?",
        opciones: ["A) Que el 95% del reactivo limitante fresco se ha transformado químicamente en productos", "B) Que el rendimiento global del producto deseado es exactamente del 100%", "C) Que el 95% del catalizador se ha desactivado por envenenamiento", "D) Que la velocidad de reacción es nula en el punto de salida"],
        respuestaCorrecta: 0,
        explicacion: "La conversión mide la fracción molar o másica del reactivo limitante que reacciona y se convierte en otros compuestos químicos."
    },
    {
        id: 109,
        area: "Química Industrial y Procesos",
        pregunta: "¿Qué operación unitaria se fundamenta en la diferencia de velocidades de difusión de los componentes de una mezcla gaseosa a través de una membrana porosa?",
        opciones: ["A) Destilación flash", "B) Permeación gaseosa (o difusión por membranas)", "C) Cristalización por enfriamiento", "D) Extracción supercrítica con $CO_2$"],
        respuestaCorrecta: 1,
        explicacion: "La separación por membranas gaseosas se basa en la permeabilidad diferencial de los gases a través de polímeros o cerámicas porosas impulsados por un gradiente de presión."
    },
    {
        id: 110,
        area: "Química Industrial y Procesos",
        pregunta: "En el diseño de columnas de destilación, ¿qué representa la relación de reflujo?",
        opciones: ["A) La cantidad de destilado condensado que se devuelve a la parte superior de la columna respecto al producto destilado extraído", "B) La cantidad de vapor generada en el hervidor respecto a la alimentación total", "C) El número de platos reales necesarios para lograr la separación", "D) La velocidad de flujo del residuo de fondo en kilogramos por hora"],
        respuestaCorrecta: 0,
        explicacion: "La relación de reflujo ($L/D$) es crucial en destilación fraccionada; un mayor reflujo requiere menos platos pero mayor consumo energético en el hervidor y condensador."
    },
    {
        id: 111,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué representa el límite máximo permisible (LMP) o límite de exposición tolerable (LEP / TLV-TWA) en higiene industrial?",
        opciones: ["A) La concentración promedio ponderada en el tiempo para una jornada laboral normal de 8 horas diarias y 40 horas semanales a la cual casi todos los trabajadores pueden estar expuestos sin efectos adversos", "B) La concentración letal para el 50% de la población de ensayo en pruebas con animales", "C) La cantidad máxima de residuos peligrosos almacenados temporalmente en una bodega", "D) La presión máxima de diseño de un tanque reactor químico"],
        respuestaCorrecta: 0,
        explicacion: "El TLV-TWA (Threshold Limit Value - Time Weighted Average) establece los umbrales seguros de exposición laboral continua durante jornadas estándar."
    },
    {
        id: 112,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Cuál es el principio de funcionamiento de un sistema de extinción de incendios por agente limpio (ej. gases inertes o halocarbonados) en salas de instrumentación analítica delicada?",
        opciones: ["A) Descargar agua a alta presión para enfriar masivamente el combustible", "B) Desplazar el oxígeno o interrumpir la reacción en cadena de la combustión sin dejar residuos líquidos corrosivos que dañen equipos electrónicos", "C) Cubrir la superficie con una espuma acuosa densa y persistente", "D) Sofocar el fuego mediante la adición masiva de arena seca y carbonato"],
        respuestaCorrecta: 1,
        explicacion: "Los agentes limpios extinguen incendios en equipos electrónicos sin dejar residuos, evitando daños por agua o polvos químicos secos corrosivos."
    },
    {
        id: 113,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué significa la valorización de residuos dentro del marco de la economía circular en la industria química?",
        opciones: ["A) El confinamiento definitivo de todos los residuos en un relleno sanitario controlado", "B) El proceso de recuperar, reciclar, reusar o valorizar energeticamente los subproductos y residuos para reintegrarlos a la cadena productiva", "C) La neutralización exclusiva de ácidos con bases antes de verterlos al drenaje", "D) La quema de residuos peligrosos a cielo abierto para reducir su volumen"],
        respuestaCorrecta: 1,
        explicacion: "La valorización busca transformar los residuos en recursos útiles, minimizando la disposición final y promoviendo la sostenibilidad industrial."
    },
    {
        id: 114,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Cuál es el objetivo de realizar una evaluación de riesgo ambiental (ERA) en la instalación de una nueva planta química?",
        opciones: ["A) Calcular únicamente los impuestos fiscales municipales aplicables", "B) Identificar, estimar y prevenir los impactos adversos y la probabilidad de accidentes mayores sobre la salud humana y los ecosistemas circundantes", "C) Determinar el salario mínimo de los operadores de planta", "D) Patentar los procesos químicos desarrollados ante la autoridad competente"],
        respuestaCorrectataxto: "B",
        opciones: ["A) Calcular únicamente los impuestos fiscales municipales aplicables", "B) Identificar, estimar y prevenir los impactos adversos y la probabilidad de accidentes mayores sobre la salud humana y los ecosistemas circundantes", "C) Determinar el salario mínimo de los operadores de planta", "D) Patentar los procesos químicos desarrollados ante la autoridad competente"],
        respuestaCorrecta: 1,
        explicacion: "La evaluación de riesgo ambiental analiza escenarios de fallas o emisiones para diseñar planes de emergencia y salvaguardar el entorno y la población."
    },
    {
        id: 115,
        area: "Seguridad, Higiene y Medio Ambiente",
        pregunta: "¿Qué equipo de protección personal (EPP) respiratorio es obligatorio utilizar al manipular polvos altamente tóxicos o partículas nanométricas en el laboratorio?",
        opciones: ["A) Una mascarilla quirúrgica desechable convencional", "B) Un respirador equipado con filtros de alta eficiencia contra partículas (tipo HEPA / P100)", "C) Un pañuelo de tela húmedo colocado sobre la nariz y boca", "D) Ninguno, si se cuenta con iluminación adecuada"],
        respuestaCorrecta: 1,
        explicacion: "Los filtros HEPA (High Efficiency Particulate Air) retienen partículas ultrafinas y aerosoles altamente tóxicos con una eficiencia superior al 99.97%."
    },
    {
        id: 116,
        area: "Química Analítica",
        pregunta: "En cromatografía de gases, ¿qué función cumple el gas portador (fase móvil) como el helio, nitrógeno o hidrógeno?",
        opciones: ["A) Reaccionar químicamente con el analito para derivatizarlo en línea", "B) Transportar las moléculas vaporizadas de la muestra a través de la columna cromatográfica hacia los detectores", "C) Actuar como fase estacionaria líquida de alta polaridad", "D) Proveer la energía térmica para ionizar la muestra"],
        respuestaCorrecta: 1,
        explicacion: "El gas portador es un gas inerte cuya única misión en cromatografía de gases es arrastrar la muestra vaporizada a lo largo de la columna."
    },
    {
        id: 117,
        area: "Química Orgánica",
        pregunta: "¿Qué tipo de polímero es el caucho natural (poliisopreno) según su comportamiento térmico y mecánico?",
        opciones: ["A) Un termoplástico lineal de baja cristalinidad", "B) Un elastómero reticulado (vulcanizado)", "C) Un polímero termoestable totalmente rígido", "D) Una fibra sintética de alta resistencia a la tensión"],
        respuestaCorrecta: 1,
        explicacion: "El caucho natural es un elastómero que, tras el proceso de vulcanización con azufre, forma enlaces cruzados (puentes disulfuro) que le otorgan elasticidad y memoria de forma."
    },
    {
        id: 118,
        area: "Fisicoquímica",
        pregunta: "¿Qué establece la ley de los gases ideales ($PV = nRT$) respecto al volumen molar de cualquier gas ideal a temperatura y presión estándar (STP)?",
        opciones: ["A) Es siempre constante, aproximadamente 22.4 litros por mol", "B) Depende exclusivamente del peso molecular específico del gas", "C) Es cero en el punto triple del agua", "D) Disminuye linealmente al aumentar la temperatura"],
        respuestaCorrecta: 0,
        explicacion: "A condiciones estándar de temperatura y presión ($0^\circ C$ y $1\text{ atm}$), un mol de cualquier gas ideal ocupa un volumen molar estándar de 22.4 litros."
    },
    {
        id: 119,
        area: "Química Inorgánica",
        pregunta: "¿Cuál es el ácido oxácido del cloro en el cual este elemento presenta el estado de oxidación más alto (+7)?",
        opciones: ["A) Ácido hipocloroso ($HClO$)", "B) Ácido cloroso ($HClO_2$)", "C) Ácido clórico ($HClO_3$)", "D) Ácido perclórico ($HClO_4$)"],
        respuestaCorrecta: 3,
        explicacion: "En el ácido perclórico ($HClO_4$), el cloro alcanza su máximo estado de oxidación formal de +7, siendo un oxidante muy fuerte y un ácido monoprótico muy fuerte."
    },
    {
        id: 120,
        area: "Bioquímica y Química de los Alimentos",
        pregunta: "¿Qué son las enzimas alostéricas y cómo se regulan en las vías metabólicas?",
        opciones: ["A) Enzimas que carecen totalmente de estructura proteica y están formadas solo por ARN catalítico", "B) Enzimas que poseen sitios de unión adicionales (alostéricos) para efectores que modulan su actividad catalítica mediante cambios conformacionales", "C) Enzimas que se inactivan permanentemente al unirse a un sustrato", "D) Enzimas cuya actividad depende exclusivamente de la concentración de iones cloruro"],
        respuestaCorrecta: 1,
        explicacion: "Las enzimas alostéricas contienen sitios de regulación donde se unen moléculas efectoras activadoras o inhibidoras, controlando eficazmente el flujo de las rutas metabólicas."
    }
];