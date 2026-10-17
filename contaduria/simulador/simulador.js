let preguntaActual = 0;
let respuestasUsuario = [];
let tiempoRestante = 10800; // 3 horas en segundos (10,800s)
let temporizadorInterval;

// Validación de Acceso por Token URL (Protección para Hotmart)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('acceso');
    
    // Token secreto para Contaduría
    const TOKEN_VALIDO = 'egel2026_contaduria_secure'; 

    if (token !== TOKEN_VALIDO) {
        // Si no trae el token correcto, bloquea la pantalla y muestra aviso
        document.body.innerHTML = `
            <div style="font-family: 'Plus Jakarta Sans', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #0f172a; color: white; text-align: center; padding: 20px;">
                <div style="background: #1e293b; padding: 40px; border-radius: 16px; max-width: 500px; border: 1px solid #334155;">
                    <h2 style="color: #f87171; margin-bottom: 15px;">Acceso Restringido</h2>
                    <p style="color: #94a3b8; margin-bottom: 25px; line-height: 1.6;">Esta herramienta es exclusiva para alumnos matriculados. Para acceder al simulador interactivo, adquiere tu acceso autorizado.</p>
                    <a href="https://acreditaegel.quantumaudiostudio.com/contaduria/" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Adquirir Acceso EGEL</a>
                </div>
            </div>
        `;
        return;
    }

    // Inicializar respuestas vacías
    respuestasUsuario = new Array(bancoPreguntas.length).fill(null);
});

function iniciarSimulador() {
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('pantalla-examen').style.display = 'block';
    iniciarTemporizador();
    cargarPregunta();
}

function iniciarTemporizador() {
    temporizadorInterval = setInterval(() => {
        let horas = Math.floor(tiempoRestante / 3600);
        let minutos = Math.floor((tiempoRestante % 3600) / 60);
        let segundos = tiempoRestante % 60;
        
        document.getElementById('timer').innerText = 
            `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        
        if (tiempoRestante <= 0) {
            clearInterval(temporizadorInterval);
            finalizarExamen();
        }
        tiempoRestante--;
    }, 1000);
}

function cargarPregunta() {
    const q = bancoPreguntas[preguntaActual];
    document.getElementById('numero-pregunta').innerText = `Pregunta ${preguntaActual + 1} de ${bancoPreguntas.length}`;
    document.getElementById('etiqueta-area').innerText = q.area;
    document.getElementById('texto-pregunta').innerText = q.pregunta;
    
    let htmlOpciones = '';
    q.opciones.forEach((opcion, index) => {
        let seleccionada = respuestasUsuario[preguntaActual] === index ? 'checked' : '';
        htmlOpciones += `
            <label class="opcion-card ${seleccionada ? 'seleccionada' : ''}">
                <input type="radio" name="opcion" value="${index}" ${seleccionada} onclick="guardarRespuesta(${index})">
                <span>${opcion}</span>
            </label>
        `;
    });
    document.getElementById('contenedor-opciones').innerHTML = htmlOpciones;
    
    // Actualizar botones de navegación
    document.getElementById('btn-anterior').style.display = preguntaActual === 0 ? 'none' : 'inline-block';
    document.getElementById('btn-siguiente').innerText = preguntaActual === bancoPreguntas.length - 1 ? 'Finalizar Examen' : 'Siguiente →';
}

function guardarRespuesta(index) {
    respuestasUsuario[preguntaActual] = index;
    
    // Agregar estilo visual a la seleccionada
    const cards = document.querySelectorAll('.opcion-card');
    cards.forEach((card, i) => {
        if(i === index) card.classList.add('seleccionada');
        else card.classList.remove('seleccionada');
    });
}

function cambiarPregunta(direccion) {
    if (direccion === 1 && preguntaActual < bancoPreguntas.length - 1) {
        preguntaActual++;
        cargarPregunta();
    } else if (direccion === 1 && preguntaActual === bancoPreguntas.length - 1) {
        finalizarExamen();
    } else if (direccion === -1 && preguntaActual > 0) {
        preguntaActual--;
        cargarPregunta();
    }
}

function finalizarExamen() {
    clearInterval(temporizadorInterval);
    document.getElementById('pantalla-examen').style.display = 'none';
    document.getElementById('pantalla-resultados').style.display = 'block';
    
    let aciertos = 0;
    let solucionarioHtml = '';
    
    bancoPreguntas.forEach((q, i) => {
        const respuestaUser = respuestasUsuario[i];
        const esCorrecta = respuestaUser === q.respuestaCorrecta;
        if (esCorrecta) aciertos++;
        
        solucionarioHtml += `
            <div class="revision-item" style="background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 15px; border-left: 5px solid ${esCorrecta ? '#16a34a' : '#dc2626'};">
                <p style="font-weight: bold; color: #f8fafc; margin-bottom: 8px;">P${i+1}. ${q.pregunta}</p>
                <p style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">Tu respuesta: <span style="color: ${esCorrecta ? '#4ade80' : '#f87171'}">${respuestaUser !== null ? q.opciones[respuestaUser] : 'No respondida'}</span></p>
                <p style="color: #4ade80; font-size: 14px; margin-bottom: 8px;">Respuesta correcta: ${q.opciones[q.respuestaCorrecta]}</p>
                <p style="color: #cbd5e1; font-size: 13px; background: #0f172a; padding: 10px; border-radius: 6px;">💡 <strong>Explicación:</strong> ${q.explicacion}</p>
            </div>
        `;
    });
    
    let porcentaje = Math.round((aciertos / bancoPreguntas.length) * 100);
    document.getElementById('puntaje-final').innerText = `${aciertos} / ${bancoPreguntas.length} (${porcentaje}%)`;
    document.getElementById('contenedor-solucionario').innerHTML = solucionarioHtml;
}