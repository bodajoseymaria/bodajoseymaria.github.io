# 💒 Web de Boda - José María & María

Web de boda elegante y moderna construida con React + TypeScript + Tailwind CSS.

**Demo:** `https://tuusuario.github.io/boda/`

## ✨ Características

- 🎨 Diseño elegante y romántico
- 📱 Totalmente responsive (móvil, tablet, desktop)
- ⏱️ Cuenta atrás en tiempo real
- 🗺️ Mapas integrados de Google Maps
- 📋 Botón para copiar IBAN
- 📝 Formulario RSVP con Google Forms
- 🚀 Deploy automático con GitHub Actions
- 💰 **100% Gratuito** (GitHub Pages + Google Forms)

## 🚀 Inicio Rápido

### 1. Clonar y configurar

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/boda.git
cd boda

# Instalar dependencias
npm install
```

### 2. Personalizar datos

Edita el archivo `src/lib/constants.ts` con los datos de tu boda:

```typescript
export const WEDDING_DATA = {
  groom: 'José María',           // Nombre del novio
  bride: 'María',                 // Nombre de la novia
  date: new Date('2026-10-28T12:30:00'),  // Fecha y hora
  // ... más configuraciones
}
```

### 3. Añadir imágenes

Coloca tus fotos en la carpeta `public/images/`:

- `hero.jpg` - Foto principal del hero (recomendado: 1920x1080px)
- Opcional: fotos de hoteles en `public/images/hotels/`

### 4. Configurar Google Forms (RSVP)

1. Crea un formulario en [Google Forms](https://forms.google.com)
2. Añade los campos que necesites
3. Haz clic en **Enviar** → Icono **<>** → Copia la URL
4. Pégala en `constants.ts` en `googleFormUrl`

### 5. Ejecutar en local

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### 6. Desplegar en GitHub Pages

1. Sube el código a GitHub:
```bash
git add .
git commit -m "Mi web de boda"
git push origin main
```

2. Ve a **Settings** → **Pages** → **Source**: GitHub Actions

3. ¡Listo! Tu web estará en `https://tuusuario.github.io/boda/`

## 📁 Estructura del Proyecto

```
boda/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Hero, Timeline, RSVP, etc.
│   ├── hooks/               # Custom hooks (useCountdown)
│   ├── lib/
│   │   └── constants.ts     # 👈 EDITAR AQUÍ LOS DATOS
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── images/              # 👈 AÑADIR FOTOS AQUÍ
├── .github/
│   └── workflows/
│       └── deploy.yml       # Deploy automático
└── package.json
```

## 🎨 Personalización

### Colores

Edita `tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  primary: '#8B7355',    // Color principal (bronce)
  sage: '#9CAF88',       // Verde salvia
  gold: '#C9A962',       // Dorado
  // ...
}
```

### Tipografías

Las fuentes se cargan desde Google Fonts en `index.html`. Puedes cambiarlas editando:
- `index.html` (enlaces de Google Fonts)
- `tailwind.config.js` (configuración de fontFamily)

### Secciones

Puedes ocultar secciones comentándolas en `App.tsx`:

```tsx
<main>
  <Hero />
  <Welcome />
  <Countdown />
  <Timeline />
  {/* <Location /> */}  {/* Comentar para ocultar */}
  <Accommodation />
  <Gifts />
  <RSVP />
</main>
```

## 📝 Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |

## 🔧 Dominio Personalizado (Opcional)

1. Compra un dominio (~12€/año)
2. En GitHub: Settings → Pages → Custom domain
3. Configura los DNS según las instrucciones de GitHub

## 📱 Compatibilidad

- Chrome, Firefox, Safari, Edge (últimas versiones)
- iOS 14+, Android 10+
- Responsive: 320px - 2560px

## 🆘 Problemas Comunes

### El formulario no carga
- Verifica que la URL de Google Forms termine en `?embedded=true`
- Prueba abrirlo en una pestaña nueva

### Las imágenes no se ven
- Asegúrate de que están en `public/images/`
- Usa nombres sin espacios ni caracteres especiales

### El deploy falla
- Verifica que GitHub Pages está habilitado
- Comprueba que la branch es `main`

## 💕 Créditos

Hecho con amor para vuestra boda.

---

**¿Preguntas?** Abre un issue en GitHub.
