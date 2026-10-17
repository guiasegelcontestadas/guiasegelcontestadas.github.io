import os
from PIL import Image

def convertir_a_webp(carpeta_entrada, carpeta_salida, calidad=80):
    """
    Convierte todas las imágenes de una carpeta a formato .webp
    :param carpeta_entrada: Carpeta con las imágenes originales
    :param carpeta_salida: Carpeta donde se guardarán las imágenes en formato .webp
    :param calidad: Calidad de compresión de WebP (1 al 100). 80 es un excelente balance.
    """
    # Crear la carpeta de salida si no existe
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)
        print(f"Carpeta creada: {carpeta_salida}")

    # Extensiones de imagen compatibles a buscar
    extensiones_validas = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')

    # Recorrer la carpeta de entrada
    for archivo in os.listdir(carpeta_entrada):
        ruta_entrada = os.path.join(carpeta_entrada, archivo)
        
        # Omitir si es una carpeta (para no procesar la carpeta de salida si está dentro)
        if os.path.isdir(ruta_entrada):
            continue

        if archivo.lower().endswith(extensiones_validas):
            # Cambiar la extensión del archivo a .webp
            nombre_sin_extension = os.path.splitext(archivo)[0]
            nuevo_nombre = f"{nombre_sin_extension}.webp"
            ruta_salida = os.path.join(carpeta_salida, nuevo_nombre)

            try:
                with Image.open(ruta_entrada) as img:
                    # Si la imagen tiene transparencia (RGBA) o paleta (P/LA), WebP la maneja perfecto de forma nativa.
                    # Guardamos en formato WEBP
                    img.save(ruta_salida, 'WEBP', quality=calidad, method=6)
                    print(f"Convertida a WebP: {nuevo_nombre}")

            except Exception as e:
                print(f"No se pudo convertir {archivo}. Error: {e}")

    print("\n¡Listo! Todas las imágenes han sido convertidas a WebP.")

# ==========================================
# Rutas configuradas según lo que pediste
# ==========================================
CARPETA_ENTRADA = r"C:\Users\valen\Documents\Guias Egel\assets\assets\recortadas_1024"
CARPETA_DESTINO = r"C:\Users\valen\Documents\Guias Egel\assets\assets\recortadas_1024\webp"

# Ejecutar la conversión (puedes ajustar la calidad si lo deseas, por defecto es 80)
convertir_a_webp(CARPETA_ENTRADA, CARPETA_DESTINO, calidad=80)