
# Sign-to-Code: Accessible Mini‑LMS

An accessible mini‑LMS that teaches digital literacy and coding basics to Deaf/Hard‑of‑Hearing youth using sign‑language avatars, captions, transcripts, and a simple, keyboard‑first UI. Also includes a CV builder and job‑search hand‑off.

## 🔧 Tech Stack
- Next.js + Tailwind CSS (static pages with SSG, fast + accessible)
- Dummy media (MDN sample video) + local WebVTT captions and text transcripts
- Progressive enhancement (speech‑to‑text for CV in supported browsers)
- Security headers (CSP, X‑Frame‑Options, Referrer‑Policy) via `next.config.js`
- Jest + Testing Library (+ CI workflow) for basic tests
- ESLint + Prettier for code quality

## 🧭 Navigation
Home → Courses → Course Player (video + avatar + captions + transcript + quiz) → Progress  
Home → CV Builder (speech‑to‑text + validation)  
Home → Jobs (BrighterMonday quick links + search)

## ♿ Accessibility (WCAG 2.2 AA)
- Captions on by default and transcripts toggle
- Keyboard navigable controls + visible focus + skip link
- Semantic HTML + ARIA where needed
- Color contrast and responsive layout; no motion‑only cues
- Forms with labels, inline validation, and `aria-describedby`

## 🛡️ Security & Fault Tolerance
- Security headers (CSP, X‑Content‑Type‑Options, etc.)  
- `rel="noopener noreferrer"` on external links  
- Error Boundary for graceful UI fallback  
- Client-side validation (CV Builder) with helpful messages

## 🚀 Performance
- Static generation for course pages
- Dynamic import for Avatar video panel (reduce initial JS)
- Lightweight Tailwind styles, no CSS frameworks beyond Tailwind

## 🧪 Testing
- Unit tests for CV validation and lesson progress in `__tests__/`
- Run: `npm test`

## 🧹 Code Quality
- ESLint & Prettier configured.  
- Run: `npm run lint` and `npm run format`

## 👥 Development Process
Add your team below (as requested by judging rubric).

**Team Members (2–5):**
- Name – Role – Email
- Name – Role – Email

## 📦 Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```
Build & run production:
```bash
npm run build
npm start
```

## 🔌 Future Integrations
- Supabase (Auth + Postgres) for users, progress, resumes
- Signvrse (Terp 360) for KSL avatars via embed/API
- BrighterMonday partner integration (if API becomes available)

## 📄 License
MIT
