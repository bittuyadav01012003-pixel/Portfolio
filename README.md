# Bittu Kumar — Modern Developer Portfolio

A high-performance, dark futuristic, recruiter-focused personal portfolio website designed for **Bittu Kumar**, a B.Tech Computer Science student and aspiring Software Developer.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## Key Features

- **Recruiter-Focused**: Clear, concise visual hierarchy highlighting Data Structures & Algorithms, real engineering projects, core CS fundamentals, and verified certifications.
- **Strictly Factual**: Zero invented metrics, fake percentages, or placeholder claims.
- **Dark Futuristic Aesthetic**: Deep `#050816` background, cyan and indigo subtle glows, glassmorphism blur effects, and developer terminal motifs.
- **Centralized Data File**: All personal details, projects, skills, DSA topics, education placeholders, certifications, and achievements are organized in `src/data/portfolio.js` for quick updates.
- **Interactive DSA Roadmap**: Visual progression through 11 core data structure and algorithm topics with interactive pattern inspection.
- **Responsive & Accessible**: Complete support for desktop, tablet, and mobile with accessible ARIA tags, visible focus indicators, and `prefers-reduced-motion` respect.

---

## Project Structure

```
bittu-portfolio/
├── index.html                  # SEO metadata, title, Open Graph tags, Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx                # Application root
│   ├── App.jsx                 # Layout orchestrator
│   ├── index.css               # Global Tailwind styles & glow utilities
│   ├── data/
│   │   └── portfolio.js        # Centralized data source of truth
│   └── components/
│       ├── Navbar.jsx          # Sticky glass navigation with active section indicator
│       ├── Hero.jsx            # Pitch, developer terminal, CTAs, social links
│       ├── About.jsx           # Background, engineering pillars & problem-solving focus
│       ├── Skills.jsx          # Categorized skill badges (Languages, Core CS, Tools, Soft Skills)
│       ├── DSAJourney.jsx      # 11 DSA roadmap topics & verified metrics display
│       ├── Projects.jsx        # Real projects showcase
│       ├── ProjectCard.jsx     # Modern developer project card with tags & repo links
│       ├── Education.jsx       # Academic timeline with clean editable fields
│       ├── Certifications.jsx # Verified certifications (Cipher Schools, Infosys)
│       ├── Achievements.jsx    # Extensible milestones section
│       ├── Contact.jsx         # Accessible form, copyable email/phone, direct channels
│       ├── Footer.jsx          # Minimal footer with copyright & links
│       └── Icons.jsx           # Crisp SVG brand vector icons
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## Updating Portfolio Information

To update any details (such as your institution name, graduation year, CGPA, LeetCode profile URL, or project demo links), simply edit `src/data/portfolio.js`:

```javascript
// src/data/portfolio.js
export const portfolio = {
  personal: {
    name: "Bittu Kumar",
    email: "bittuyadav01012003@gmail.com",
    // ...
  },
  education: [
    {
      degree: "Bachelor of Technology",
      branch: "Computer Science",
      institution: "Your College Name Here",
      graduationYear: "2027",
      cgpa: "8.5"
    }
  ]
};
```
