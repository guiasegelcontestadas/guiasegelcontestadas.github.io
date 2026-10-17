import os
from PIL import Image, ImageOps

def recortar_a_cuadrado(carpeta_entrada, carpeta_salida, tamaño=(1024, 1024)):
    # Crear la carpeta de salida si no existe
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)
        print(f"Carpeta creada: {carpeta_salida}")

    # Extensiones de imagen soportadas
    extensiones_validas = ('.jpg', '.jpeg', '.png', '.bmp', '.webp', '.tiff')

    # Recorrer la carpeta
    for archivo in os.listdir(carpeta_entrada):
        # Evitar procesar si es una carpeta (por si acaso lee la carpeta de salida)
        ruta_entrada = os.path.join(carpeta_entrada, archivo)
        if os.path.isdir(ruta_entrada):
            continue

        if archivo.lower().endswith(extensiones_validas):
            ruta_salida = os.path.join(carpeta_salida, archivo)

            try:
                with Image.open(ruta_entrada) as img:
                    # ImageOps.fit redimensiona y recorta el excedente desde el centro
                    img_procesada = ImageOps.fit(img, tamaño, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
                    
                    # Si la imagen es transparente (PNG) y se guarda como JPG, convertimos a RGB
                    if img_procesada.mode in ('RGBA', 'LA') and ruta_salida.lower().endswith(('.jpg', '.jpeg')):
                        img_procesada = img_procesada.convert('RGB')

                    # Guardar resultado
                    img_procesada.save(ruta_salida)
                    print(f"Procesada (recortada a 1024x1024): {archivo}")

            except Exception as e:
                print(f"No se pudo procesar {archivo}. Error: {e}")

    print("\n¡Listo! Todas las imágenes ahora miden exactamente 1024x1024.")

# ==========================================
# Rutas corregidas con una subcarpeta nueva
# ==========================================
# Usamos 'r' al inicio para que Python lea bien las barras invertidas de Windows, 
# o puedes cambiar las '\' por '/'
CARPETA_ORIGEN = r"C:\Users\valen\Documents\Guias Egel\assets\assets"
CARPETA_DESTINO = r"C:\Users\valen\Documents\Guias Egel\assets\assets\recortadas_1024"

recortar_a_cuadrado(CARPETA_ORIGEN, CARPETA_DESTINO)