# Best South Website

A modern, multi-language website for Best South, a chemical manufacturing company specializing in polymer resins and adhesives.

## 🚀 Features

- **Multi-language Support:** Vietnamese (default), English, and Chinese Simplified
- **Modern Tech Stack:** Next.js 16, TypeScript, Tailwind CSS
- **Internationalization:** next-intl library for seamless language switching
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **SEO Optimized:** Server-side rendering and metadata generation
- **Performance Focused:** Server/Client component separation

## 🛠 Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl
- **Database:** Prisma (future implementation)
- **Deployment:** GitHub Actions

## 📁 Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout with i18n provider
│   │   ├── page.tsx           # Home page (server component)
│   │   ├── HomeClient.tsx     # Home page client component
│   │   ├── about/
│   │   ├── services/
│   │   ├── news/
│   │   └── contact/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── messages/
│   ├── vi.json
│   ├── en.json
│   └── zh.json
├── middleware.ts
├── i18n/
│   └── request.ts
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd best-south-website/best-south-v2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Internationalization

The website supports three languages:
- **Vietnamese** (`/vi`) - Default language
- **English** (`/en`)
- **Chinese Simplified** (`/zh`)

Language switching is handled automatically through URL routing and middleware.

### Adding New Languages

1. Add language code to `i18n/request.ts`
2. Create translation file in `messages/` directory
3. Update middleware configuration

## 📝 Development Guidelines

### Component Architecture

- **Server Components:** Use for data fetching and metadata generation
- **Client Components:** Use for interactive features and React hooks
- **File Naming:** PascalCase for components, camelCase for functions

### Code Quality

- TypeScript strict mode enabled
- ESLint configuration
- Prettier for code formatting
- Conventional commits

### Internationalization

```typescript
// Server components
import { getTranslations } from 'next-intl/server';
const t = await getTranslations({ locale, namespace: 'metadata' });

// Client components
'use client';
import { useTranslations } from 'next-intl';
const t = useTranslations('namespace');
```

## 🤖 AI Agent Guidelines

This project is optimized for AI agent development. Please read:

- **[AGENTS.md](./AGENTS.md)** - General agent guidelines and project patterns
- **[CLAUDE.md](./CLAUDE.md)** - Specific instructions for Claude/Grok agents

## 🚀 Deployment

The project uses GitHub Actions for automated deployment. Push to the main branch to trigger deployment.

### Environment Variables

Create a `.env.local` file with:

```env
# Add your environment variables here
```

## 📞 Contact

For questions or support, please contact the development team.

## 📄 License

This project is proprietary to Best South.
