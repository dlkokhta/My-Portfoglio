# Dimitri Kokhtashvili — Developer Portfolio

Personal portfolio website showcasing my projects, skills, and experience as a web developer.

**Live:** https://www.dimitrikokhtashvili.com

---

## Features

- **Project showcase** — interactive cards with hover overlays displaying descriptions, tech stacks, and live/GitHub links
- **AI project chat** — each project card has an AI assistant (powered by Groq / LLaMA 3.3) that answers visitor questions about that specific project in my voice
- **Contact form** — working email form via Nodemailer/Gmail
- **Smooth scrolling** — section-based single-page layout with react-scroll
- **Animations** — Framer Motion transitions throughout
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **SEO ready** — Open Graph, Twitter Card, JSON-LD structured data, canonical URLs

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Forms | react-hook-form |
| Notifications | react-toastify |
| Smooth scroll | react-scroll |
| Email | Nodemailer (Gmail SMTP) |
| AI chat | Groq API — `llama-3.3-70b-versatile` |
| Font | Roboto (Google Fonts) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) for the contact form
- A [Groq API key](https://console.groq.com) for the AI project chat

### Installation

```bash
git clone https://github.com/dlkokhta/My-Portfoglio.git
cd My-Portfoglio
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
GROQ_API_KEY=your-groq-api-key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/app/
  layout.tsx              # Root layout — meta tags, SEO, JSON-LD
  page.tsx                # Entry point
  home/page.tsx           # Main page — lazy-loads all sections
  components/
    Header.tsx            # Mobile navigation
    Header2.tsx           # Desktop sidebar navigation
    About.tsx
    Skills.tsx / SkillsDetails.tsx
    Projects.tsx          # Project data — add new projects here
    ProjectsDetails.tsx   # Project card component
    ProjectChatButton.tsx # AI chat button + modal (client component)
    ProjectSVG.tsx        # Live/GitHub link icons
    Certificates.tsx
    Contact.tsx
    ContactForm.tsx
    Loading.tsx
  api/
    contact/route.tsx     # POST /api/contact — sends email
    chat/route.ts         # POST /api/chat — Groq AI responses
  context/AppContext.tsx
  hooks/useScrollDirection.tsx
public/                   # Images, icons, resume PDF
```

---

## Adding a New Project

Open `src/app/components/Projects.tsx` and add a `<ProjectsDetails />` entry:

```tsx
<ProjectsDetails
  projectName="Your Project Name"
  projectImage="/your-image.png"           // place image in /public
  projectDescription={[
    "Feature one",
    "Feature two",
  ]}
  projectTechnologies={[
    "React, TypeScript, Node.js, ...",
  ]}
  projectSVGs={[
    {
      title: "Front-end",
      pageLink: "https://your-live-url.com",
      githubLink: "https://github.com/you/repo",
    },
    {
      title: "Back-end",                   // omit if frontend-only
      pageLink: "https://your-api-url.com",
      githubLink: "https://github.com/you/api-repo",
    },
  ]}
/>
```

The AI chat button is automatically included on every card — no extra setup needed.

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/contact` | Sends contact form email via Gmail |
| `POST` | `/api/chat` | Returns AI response about a specific project |

### `POST /api/chat` body

```json
{
  "messages": [{ "role": "user", "content": "..." }],
  "projectName": "My Project",
  "projectDescription": ["Feature 1", "Feature 2"],
  "projectTechnologies": ["React, Node.js"]
}
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
