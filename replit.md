# Eric Schroeder Portfolio

## Overview

A personal portfolio website for Eric Schroeder, a Technical GTM Leader. The application showcases professional experience, skills, projects, and contact information through a modern, responsive single-page design. Built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode default)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/` (home.tsx, not-found.tsx)
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

Path aliases configured:
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets/`

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express 5
- **API Pattern**: RESTful API with `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)

The backend uses a modular structure:
- `server/index.ts` - Main server entry point with middleware setup
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data access layer with storage interface pattern
- `server/vite.ts` - Vite dev server integration for HMR
- `server/static.ts` - Static file serving for production

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with Zod validation via drizzle-zod
- **Current Schema**: Users table with id, username, and password fields
- **Development Storage**: In-memory storage implementation (`MemStorage` class)
- **Migrations**: Output to `./migrations` directory via drizzle-kit

### Build System
- **Development**: Vite dev server with HMR proxied through Express
- **Production Build**: Custom build script (`script/build.ts`) using:
  - Vite for frontend → `dist/public/`
  - esbuild for backend → `dist/index.cjs`
  - Dependency bundling optimization for faster cold starts

## External Dependencies

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-built component patterns using Radix + Tailwind
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Vaul**: Drawer component

### Data & Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with `@hookform/resolvers`
- **Zod**: Schema validation (shared between frontend and backend)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Class name utilities

### Backend Services
- **PostgreSQL**: Primary database (via DATABASE_URL environment variable)
- **connect-pg-simple**: PostgreSQL session store for Express
- **express-session**: Session management
- **express-rate-limit**: API rate limiting

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner
- **drizzle-kit**: Database migration tooling