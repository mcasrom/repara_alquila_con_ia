# SPEC - Fix & Rent Gold Coast

## 1. Project Overview

- **Name**: Fix & Rent Gold Coast
- **Type**: SaaS Webapp for local business (repair + rental)
- **Location**: Gold Coast, Queensland, Australia
- **Core**: Landing + AI Chatbot + Booking system

## 2. UI/UX Spec

### Layout
- Single page with scroll
- Fixed navbar
- Sections: Hero, Services, Fleet, AI Chat, Testimonials, FAQs, Contact, Footer

### Colors
- Primary: `#0D9488` (teal-600)
- Secondary: `#1E293B` (slate-800)
- Accent: `#F59E0B` (amber-500)
- Background: `#FAFAF9` (stone-50)
- Text: `#334155` (slate-700)

### Typography
- Headings: "Outfit" (Google Fonts)
- Body: "DM Sans" (Google Fonts)
- H1: 48px/56px bold
- H2: 36px/44px semibold
- Body: 16px/24px regular

### Responsive
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 3. Features

### Landing Page
- Hero with dual CTA (Repair / Rent)
- AI Chat embedded inline
- Fleet grid visible
- Testimonials
- Accordion FAQs

### AI Chatbot
- Input: Issue description
- Output: Diagnosis + est. cost + book appointment
- Integration: OpenAI API

### Booking System
- Form: Name, phone, service, date
- Validation: Future date, complete data
- Confirmation: Success message

## 4. SEO Local

### Target Keywords
- car repair Gold Coast
- car rental Gold Coast
- cheap car hire Gold Coast
- mechanic near me
- auto repair Gold Coast

### Metadata
- Title: "Car Repair + Car Rental Gold Coast | Smart Mechanic + Cheap Hire"
- Description: "Mechanic workshop + car rental in Gold Coast, Queensland. AI diagnosis, online booking, loan vehicle. 20+ vehicles. Call +61 7 1234 5678"

## 5. Acceptance Criteria

- [x] Landing loads in < 3s
- [x] Chatbot responds to issue descriptions
- [x] Booking form works
- [x] SEO local optimized
- [x] Fully responsive
- [ ] PWA installable