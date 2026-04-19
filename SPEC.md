# SPEC - Repara y Alquila con IA

## 1. Project Overview

- **Nombre**: Repara y Alquila con IA
- **Tipo**: Webapp SaaS para negocio local (taller + rental)
- **Ubicación**: Gold Coast, Australia
- **Core**: Landing + Chatbot IA + Sistema reservas

## 2. UI/UX Spec

### Layout
- Single page con scroll
- Navbar fijo
- Hero full viewport
-Secciones: Hero, Servicios, Flota, Chat IA, Testimonios,FAQ, Contacto, Footer

### Colores
- Primary: `#0D9488` (teal-600)
- Secondary: `#1E293B` (slate-800)
- Accent: `#F59E0B` (amber-500)
- Fondo: `#FAFAF9` (stone-50)
- Texto: `#334155` (slate-700)

### Tipografía
- Headings: "Outfit" (Google Fonts)
- Body: "DM Sans" (Google Fonts)
- H1: 48px/56px bold
- H2: 36px/44px semibold
- Body: 16px/24px regular

### Responsive
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 3. Funcionalidades

### Landing Page
- Hero con CTA dual (Reparar / Alquilar)
- Chat IA embed inline
- Grid flota visible
- Testimonios
- FAQs con acordeón

### Chatbot IA
- Input: Descripción avería
- Output: Diagnóstico + presupuesto estimado + solicitar cita
- Integración: OpenAI API

### Sistema Reservas
- Formulario: Nombre, teléfono, fecha, servicio
- Validación: Fecha futura, datos completos
- Confirmación: Email/SMS

## 4. SEO Local

### Keywords objetivo
- "car repair Gold Coast"
- "car rental Gold Coast" 
- "cheap car hire Gold Coast"
- "mechanic near me"

### Metadata
- Title: "Reparación + Alquiler Coches Gold Coast | Taller Inteligente"
- Description: "Taller mecánico + alquiler de vehículos en Gold Coast. Diagnóstico IA, reservas在线, vehículo de sustitución."

## 5. Acceptance Criteria

- [ ] Landing carga en < 3s
- [ ] Chatbot responde a descriptions de averías
- [ ] Formulario reserva guarda en DB
- [ ] SEO local optimizado
- [ ] Fully responsive
- [ ] PWA installable