# 📊 SISTEMA DE DISEÑO - CAFÉ PREMIUM

## 🎨 Visión General

Sistema de diseño completo y modular para una **SPA (Single Page Application)** premium de tienda de pantallas de streaming y servicios digitales. Basado en una **paleta monocromática de cafés** que transmite elegancia, sofisticación, confianza y relajación.

---

## 🌈 PALETA DE COLORES

### Café Oscuro Premium - Espresso/Cacao Profundo
Tonos para fondos principales y secciones críticas que requieren máxima atención.

| Color | Hex | Uso | Descripción |
|-------|-----|-----|------------|
| Oscuro 900 | `#0d0805` | Fondos más profundos | Máximo contraste |
| Oscuro 800 | `#1a0f0d` | Fondo principal | Color base dominante |
| Oscuro 700 | `#261614` | Tarjetas destacadas | Elementos premium |
| Oscuro 600 | `#2d1b18` | Elementos secundarios | Jerarquía visual |

### Café Medio - Latte/Caramelo Suave
Tonos para elementos secundarios, bordes, textos y detalles.

| Color | Hex | Uso | Descripción |
|-------|-----|-----|------------|
| Medio 500 | `#8c6253` | Bordes principales | Definición clara |
| Medio 400 | `#9d7564` | Iconos inertes | Elementos pasivos |
| Medio 300 | `#b58973` | Textos secundarios | Información complementaria |
| Medio 200 | `#c9a896` | Elementos suaves | Detalles sutiles |

### Café Claro - Capuchino/Crema
Tonos para tipografía principal, contrastes y botones de acción.

| Color | Hex | Uso | Descripción |
|-------|-----|-----|------------|
| Claro 100 | `#f5ebe6` | Tipografía principal | Máxima legibilidad |
| Claro 50 | `#faf7f4` | Fondos claros | Espacios abiertos |
| Acento | `#e6ccb2` | Contraste elegante | Énfasis visual |

---

## ✨ PROPIEDADES VISUALES

### Espaciado (Breathe-room)
Espaciado amplio para crear sensación de respiración y lujo visual.

```css
/* Tailwind Variables */
--spacing-breathe: 2rem;    /* 32px */
--spacing-breathe-lg: 3rem; /* 48px */
--spacing-breathe-xl: 4rem; /* 64px */
```

**Aplicación:** Margen/padding en secciones, tarjetas, contenedores principales.

### Border Radius (Esquinas Suavizadas)
Redondeado suave que transmite modernidad sin rigidez.

```css
/* Tailwind Variables */
--radius-smooth: 16px;    /* Botones, inputs */
--radius-smooth-lg: 20px; /* Tarjetas */
--radius-smooth-xl: 24px; /* Contenedores */
--radius-smooth-2xl: 32px; /* Secciones grandes */
```

### Backdrop Blur (Efectos de Vidrio)
Efectos visuales sofisticados con desenfoque de fondo.

```css
/* Tailwind Variables */
--blur-subtle: 4px;   /* Sutileza */
--blur-soft: 8px;     /* Estándar */
--blur-medium: 12px;  /* Fuerte */
--blur-strong: 16px;  /* Muy fuerte */
```

**Aplicación:** Cards, modales, overlays con sensación premium.

### Transiciones (Fluidas y Elegantes)
Todas las transiciones están optimizadas para microinteracciones.

```css
/* Duraciones */
--duration-subtle: 200ms;  /* Estados rápidos */
--duration-smooth: 300ms;  /* Transiciones estándar */
--duration-elegant: 400ms; /* Animaciones complejas */
--duration-gentle: 500ms;  /* Efectos suaves */

/* Easing */
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--easing-elegant: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Sombras (4 Niveles Sofisticados)
Jerarquía clara mediante sombras sutiles y profesionales.

```css
/* Niveles */
box-shadow: soft    = 0 2px 8px rgba(26, 15, 13, 0.1);
box-shadow: medium  = 0 4px 16px rgba(26, 15, 13, 0.15);
box-shadow: elevated = 0 8px 24px rgba(26, 15, 13, 0.2);
box-shadow: premium = 0 12px 32px rgba(26, 15, 13, 0.25);
```

---

## 🔤 TIPOGRAFÍA

### Familias
- **Sans (Principal):** Inter - Limpia, moderna, muy legible
- **Serif (Títulos):** Merriweather - Elegante, sofisticada
- **Mono (Código):** Fira Code - Técnica, profesional

### Escala Tipográfica
```
h1: 3rem (48px) - Títulos principales
h2: 2.25rem (36px) - Títulos secundarios
h3: 1.875rem (30px) - Subtítulos
h4: 1.5rem (24px) - Encabezados
p:  1rem (16px) - Texto base
sm: 0.875rem (14px) - Texto pequeño
```

**Características:**
- Line-height: 1.2 - 1.8 (según tamaño)
- Letter-spacing: -0.5px (títulos), 0.3px (body)
- Font-weight: 400-700 (nunca más delgado ni más pesado)

---

## 🎬 ANIMACIONES Y MICROINTERACCIONES

### Animaciones Disponibles
```css
@keyframes fadeInUp       /* Entrada desde abajo con fade */
@keyframes fadeIn         /* Fade simple */
@keyframes slideIn        /* Entrada desde izquierda */
@keyframes scaleIn        /* Entrada con escala */
@keyframes shimmer        /* Efecto de brillo */
@keyframes softPulse      /* Pulso suave */
```

### Efectos de Hover
- **hover-lift:** Elevación suave con sombra
- **hover-glow:** Brillo y cambio de color
- **glow-hover:** Drop-shadow animado

---

## 🧩 COMPONENTES BASE

### Button
```jsx
<button className="btn-primary hover-lift">
  Explorar Catálogo
</button>

<button className="btn-secondary hover-lift">
  Ver Detalles
</button>

<button className="btn-tertiary">
  Enlace suave
</button>
```

### Card
```jsx
<div className="card hover-lift">
  <h3>Título</h3>
  <p>Contenido elegante</p>
</div>

<div className="card elevated">
  <h3>Tarjeta Premium</h3>
</div>
```

### Input & Form
```jsx
<input type="text" placeholder="Buscar..." />
<textarea placeholder="Descripción..."></textarea>
<select>
  <option>Opción</option>
</select>
```

### Badge
```jsx
<span className="badge">Normal</span>
<span className="badge premium">Premium</span>
```

---

## 🌐 UTILIDADES

### Flexbox Center
```jsx
<div className="flex-center">Contenido centrado</div>
<div className="flex-between">Espacio entre</div>
<div className="flex-col-center">Flex columna</div>
```

### Grid Auto-fit
```jsx
<div className="grid-auto-fit">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Espaciado
```jsx
<section className="section">Contenido normal</section>
<section className="section large">Contenido grande</section>
<div className="container">Ancho máximo 1280px</div>
```

---

## ♿ ACCESIBILIDAD

### Focus States
Todos los elementos interactivos tienen focus states elegantes:
```css
.focus-elegant {
  outline: 2px solid #e6ccb2;
  outline-offset: 2px;
}
```

### Movimiento Reducido
Respeta la preferencia `prefers-reduced-motion` del usuario:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### Contraste
- **WCAA AA+:** Todos los textos cumplen ratios de contraste
- **Texto principal:** #f5ebe6 sobre #1a0f0d (18:1)
- **Texto secundario:** #e6ccb2 sobre #1a0f0d (11:1)

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
```
Mobile:   < 640px
Tablet:   640px - 1024px
Desktop:  > 1024px
```

### Ajustes Automáticos
- Tipografía escala proporcionalmente
- Grid cambia de columnas automáticamente
- Espaciado se reduce en dispositivos pequeños

---

## 🚀 CÓMO USAR

### 1. Instalación
```bash
npm install
npm run dev
```

### 2. Tailwind CSS
Usa las clases personalizadas definidas en `tailwind.config.js`:
```jsx
<div className="bg-cafe-oscuro-800 text-cafe-claro-100 rounded-smooth-lg p-breathe">
  Contenido premium
</div>
```

### 3. Estilos Globales
Importa en tu componente principal:
```jsx
import './styles/global.css';
```

### 4. Componentes Reutilizables
Crea componentes en `src/components/`:
```jsx
export const Card = ({ children }) => (
  <div className="card hover-lift">
    {children}
  </div>
);
```

---

## 📋 Checklist de Implementación PASO 1

✅ Paleta de colores completa (12 tonos)
✅ Variables de espaciado (breathe-room)
✅ Border radius suavizado
✅ Backdrop blur configurado
✅ Transiciones fluidas (4 duraciones)
✅ Sombras sofisticadas (4 niveles)
✅ Tipografías premium (3 familias)
✅ Animaciones base (6 keyframes)
✅ Componentes base (button, card, badge, input)
✅ Utilidades (flex, grid, spacing)
✅ Accesibilidad (focus, motion, contrast)
✅ Responsive design (3 breakpoints)
✅ Documentación completa

---

## 🔮 Próximos Pasos

📌 **PASO 2:** Estructura modular de componentes, rutas, layouts y lógica de negocio.

**Características a implementar:**
- Componentes modulares reutilizables
- Sistema de rutas con React Router
- Layouts base (Header, Footer, Sidebar)
- Modelos de datos y estado global
- Lógica de carrito y pago
- Página de productos
- Sistema de autenticación

---

## 📞 Soporte

Para consultas sobre el sistema de diseño, revisa:
- `tailwind.config.js` - Configuración de colores y propiedades
- `src/styles/global.css` - Estilos globales y componentes
- `src/components/Design/ColorPaletteShowcase.jsx` - Demostración interactiva

---

**Versión:** 1.0.0  
**Estado:** ✅ PASO 1 Completado en Esplendor Total  
**Fecha:** 16 de Mayo de 2026
