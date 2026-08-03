---
name: add-gift
description: Añade un artículo a la lista de bodas a partir de la URL de una tienda online (Sklum, La Redoute, Klasthome, etc). Extrae el nombre del producto y descarga la imagen principal, y crea la entrada en src/lib/giftList.ts. Usar cuando el usuario pide "añade este regalo/artículo a la lista", pegando un enlace de producto.
---

# Añadir artículo a la lista de bodas

Dado un enlace de producto de una tienda:

1. **Obtener nombre e imagen** de la página del producto. Usa un subagente
   (`general-purpose`) con WebFetch para leer la página y devolver:
   - el nombre/título exacto del producto
   - la URL de la imagen principal en mayor resolución posible

   Para la mejor resolución, prueba variantes de la URL de imagen antes de
   descargar (algunas tiendas sirven miniaturas por defecto). En Sklum, por
   ejemplo, la ruta `.../wk/<id>/...jpg` da una imagen mucho más grande
   (~1000x1500) que la ruta `...-large_default/...jpg` (~370x370) que aparece
   en el `og:image`. Comprueba con `curl -sL -o /tmp/test.jpg <url> && file /tmp/test.jpg`
   antes de decidir cuál usar.

2. **Descargar la imagen** a `public/images/gifts/<slug>.jpg`, donde `<slug>`
   es un id corto en kebab-case derivado del nombre del producto.

   ```bash
   curl -sL "<url-imagen-alta-resolucion>" -o public/images/gifts/<slug>.jpg
   ```

3. **Añadir la entrada** al array `GIFT_LIST` en `src/lib/giftList.ts`:

   ```ts
   {
     id: '<slug>',
     name: '<nombre del producto>',
     image: '/images/gifts/<slug>.jpg',
     url: '<url original del producto>',
   },
   ```

4. Si el usuario pide verlo, levanta el servidor de desarrollo (`npm run dev`,
   Vite en `http://localhost:5173`) y navega con Playwright a
   `http://localhost:5173/#lista-de-bodas` para hacer una captura.

5. **Preparar el commit**: `git add` de la imagen nueva y de
   `src/lib/giftList.ts`, y crea el commit (formato `feat: add <nombre del
   artículo> to gift list`). No hagas `git push` — el push lo hace el usuario
   directamente.

No hace falta redimensionar ni optimizar la imagen — el resto de imágenes del
repo tampoco están optimizadas, mantener consistencia.
