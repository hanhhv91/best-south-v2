# Best South Website - Agent Guidelines

## Project Overview
Best South is a modern, multi-language website for a chemical manufacturing company specializing in polymer resins and adhesives. The website showcases company capabilities, services, news, and contact information.

## Tech Stack
- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl
- **Database:** Prisma (future implementation)
- **Deployment:** GitHub Actions

## Architecture
- **Routing:** Internationalized routes with `[locale]` dynamic segments
- **Components:** Server/Client component separation
- **State:** React hooks for client-side interactions
- **Styling:** Utility-first CSS with Tailwind
- **Content:** JSON-based translation files

## Development Guidelines

### File Structure
```
app/
├── [locale]/
│   ├── layout.tsx          # Root layout with i18n provider
│   ├── page.tsx           # Home page (server component)
│   ├── HomeClient.tsx     # Home page client component
│   ├── about/
│   ├── services/
│   ├── news/
│   └── contact/
├── globals.css
└── layout.tsx

components/
├── Header.tsx
├── Footer.tsx
└── ...

messages/
├── vi.json
├── en.json
└── zh.json

middleware.ts
i18n/
└── request.ts
```

### Component Patterns
- **Server Components:** For data fetching and metadata generation
- **Client Components:** For interactive features and hooks
- **Separation:** Keep server/client logic in separate files

### Naming Conventions
- **Components:** PascalCase (Header, Footer, HomeClient)
- **Files:** kebab-case for pages, PascalCase for components
- **Functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE

## Agent-Specific Instructions

### For Code Generation
1. **Always check existing patterns** before creating new components
2. **Use TypeScript** with proper type definitions
3. **Follow Tailwind CSS** utility classes
4. **Implement responsive design** with mobile-first approach
5. **Use next-intl hooks** for translations in client components

### For Internationalization
1. **Server components:** Use `getTranslations()` for metadata
2. **Client components:** Use `useTranslations()` hook
3. **Translation keys:** Follow dot notation (e.g., `home.hero.title`)
4. **Fallback:** Always provide fallback text

### For Styling
1. **Use Tailwind utilities** instead of custom CSS
2. **Follow design system** colors and spacing
3. **Responsive breakpoints:** sm, md, lg, xl
4. **Dark mode:** Not implemented (light theme only)

## Build & Deployment
- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Type check:** `npm run type-check`

## Code Quality Standards
- **ESLint:** Enabled with Next.js rules
- **TypeScript:** Strict mode enabled
- **Prettier:** Code formatting
- **Git:** Conventional commits

## Common Patterns

### Page Structure
```typescript
// Server component for metadata
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import PageClient from './PageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return { title: t('page.title') };
}

export default function Page() {
  return <PageClient />;
}
```

### Client Component Structure
```typescript
'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function PageClient() {
  const t = useTranslations('page');
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
```

### Translation File Structure
```json
{
  "metadata": {
    "title": "Page Title",
    "description": "Page Description"
  },
  "hero": {
    "title": "Hero Title",
    "subtitle": "Hero Subtitle"
  }
}
```

## Error Handling
- **Build errors:** Check for TypeScript and ESLint issues
- **Runtime errors:** Verify component imports and props
- **i18n errors:** Check translation keys and file structure

## Performance Considerations
- **Server Components:** Use for static content
- **Client Components:** Only when interactivity is needed
- **Images:** Optimize with Next.js Image component
- **Bundle size:** Monitor with build analyzer

---

<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16 Breaking Changes

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
