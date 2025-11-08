# Saarva

**Saarva** (Sanskrit: "everything") is the parent brand that creates **AI copilots** for professionals — helping them save time, simplify work, and focus on what truly matters.

The ecosystem's friendly AI persona is **Effi** (short for *Efficient*) — an empathetic, efficient AI copilot that assists professionals across domains.

## Structure

This is a monorepo containing:

- `/apps/home` - Landing page for saarva.xyz (Next.js + Tailwind CSS)
- `/packages/config` - Shared configuration and constants

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The landing page will be available at `http://localhost:3000`

### Building

```bash
npm run build
```

## Configuration

All site content, strings, and URLs are configurable via `/packages/config/siteConfig.ts`. No hardcoded values in components.

## Environment Variables

Set `NEXT_PUBLIC_WAITLIST_ENDPOINT` to configure the waitlist form submission endpoint.

## License

Private - All rights reserved

