# Imágenes

Esta carpeta contiene las imágenes de la boda.

## Imagen Hero

La imagen hero (fondo principal de la página) está configurada como `hero.jpg`.

Actualmente, `hero.jpg` es un enlace simbólico a `1.jpeg`. 

### Para cambiar la imagen hero:

1. **Opción 1: Reemplazar el enlace simbólico**
   ```bash
   cd images
   rm hero.jpg
   ln -sf [nombre-de-tu-imagen].jpeg hero.jpg
   ```

2. **Opción 2: Renombrar tu imagen**
   - Simplemente renombra tu imagen favorita a `hero.jpg`
   - O copia tu imagen: `cp tu-imagen-favorita.jpeg hero.jpg`

### Recomendaciones para la imagen hero:

- **Tamaño:** Máximo 1920px de ancho (para optimizar carga)
- **Formato:** JPG o WebP
- **Aspecto:** Horizontal (landscape) funciona mejor
- **Contenido:** Una foto bonita de la pareja
- **Optimización:** Usa [Squoosh](https://squoosh.app/) para reducir el tamaño del archivo

## Otras imágenes

Las imágenes numeradas (1.jpeg, 2.jpeg, etc.) pueden usarse para:
- Galería (si decides añadir una sección de galería)
- Otras secciones de la web
- Fondo de otras secciones

## Nota

Si prefieres usar una imagen con otro nombre o formato, actualiza la ruta en `styles.css` en la línea del `.hero-section`:

```css
.hero-section {
  background: ... url('images/hero.jpg') ...
}
```
