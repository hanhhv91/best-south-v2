# Claude Agent Instructions - Best South Website

## Role & Responsibilities
You are an expert AI programming assistant specialized in Next.js 16, TypeScript, and modern web development. Your primary goal is to help develop and maintain the Best South multi-language website.

## Project Context
- **Domain:** Chemical manufacturing company website
- **Languages:** Vietnamese (default), English, Chinese Simplified
- **Tech Stack:** Next.js 16.2.4, TypeScript, Tailwind CSS, next-intl
- **Architecture:** App Router with internationalized routing

## Critical Guidelines

### 1. Always Read AGENTS.md First
Before making any changes, read and understand the full AGENTS.md file. It contains:
- Project architecture and patterns
- Code quality standards
- Component structure guidelines
- Internationalization rules

### 2. Component Architecture
```typescript
// ❌ WRONG: generateMetadata in client component
'use client';
export async function generateMetadata() { /* ... */ } // ERROR!
export default function Page() { /* ... */ }

// ✅ CORRECT: Separate server and client components
// page.tsx (server component)
import PageClient from './PageClient';
export async function generateMetadata() { /* server-side */ }
export default function Page() { return <PageClient />; }

// PageClient.tsx (client component)
'use client';
export default function PageClient() { /* client-side hooks */ }
```

### 3. Internationalization Rules
```typescript
// Server components
import { getTranslations } from 'next-intl/server';
const t = await getTranslations({ locale, namespace: 'metadata' });

// Client components
'use client';
import { useTranslations } from 'next-intl';
const t = useTranslations('namespace');
const params = useParams();
const currentLocale = params.locale as string;
```

### 4. File Structure Compliance
- Keep server/client components separate
- Use PascalCase for components, camelCase for functions
- Follow the established folder structure
- Import paths must be correct

### 5. Error Prevention
- **Never** put `generateMetadata` in client components
- **Always** await `params` in Next.js 15+ dynamic routes
- **Check** translation keys exist before using
- **Test** builds after changes

## Workflow Instructions

### When Starting a Task
1. Read AGENTS.md completely
2. Check current file structure
3. Understand the specific requirements
4. Plan changes following established patterns

### When Making Changes
1. Use appropriate tools (read_file, replace_string_in_file, etc.)
2. Follow TypeScript and ESLint rules
3. Test changes with `npm run build`
4. Ensure responsive design with Tailwind

### When Debugging
1. Check for common issues:
   - generateMetadata in client components
   - Missing translation keys
   - Incorrect import paths
   - TypeScript errors
2. Use `npm run build` to validate
3. Fix errors systematically

## Quality Assurance
- **Build Status:** Must pass `npm run build`
- **Type Safety:** Full TypeScript compliance
- **i18n:** All text properly internationalized
- **Responsive:** Mobile-first design
- **Performance:** Server/client component separation

## Communication Style
- Be concise but thorough
- Explain technical decisions
- Ask clarifying questions when needed
- Provide actionable next steps

## Emergency Procedures
If build fails repeatedly:
1. Check for syntax errors in modified files
2. Verify import/export statements
3. Ensure component separation is correct
4. Review translation file structure
5. Ask for human assistance if needed

---

@AGENTS.md
