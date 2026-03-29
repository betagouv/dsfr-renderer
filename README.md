# @gouvfr/dsfr-renderer

**json-render integration for DSFR — Generate AI-powered French government interfaces with type-safe components.**

[![npm version](https://img.shields.io/npm/v/@gouvfr/dsfr-renderer.svg)](https://www.npmjs.com/package/@gouvfr/dsfr-renderer)
[![DSFR Version](https://img.shields.io/badge/dsfr-1.14.x-blue)](https://www.systeme-de-design.gouv.fr/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> ⚠️ **Usage Restricted to French Government**
> DSFR is the official design system of the French State. Its use is strictly reserved for French government websites and applications. See [DSFR terms of use](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/page-cgu).

## Overview

`@gouvfr/dsfr-renderer` provides pre-built DSFR components for [json-render](https://json-render.dev), the Generative UI framework from Vercel Labs. This enables AI to generate French government-compliant interfaces while staying within DSFR's design constraints.

**Key benefits:**
- 🎯 **Guardrailed AI output** — AI can only use DSFR-approved components and props
- 🇫🇷 **RGAA compliant** — Built on DSFR's accessibility-first foundation
- 📦 **Type-safe** — Full TypeScript support with Zod schemas
- ⚡ **Streaming ready** — Progressive rendering as AI generates JSON
- 🔧 **Extensible** — Override or extend any component

## Installation

```bash
npm install @gouvfr/dsfr-renderer @json-render/core @json-render/react zod
npm install @gouvfr/dsfr  # DSFR peer dependency
```

Your app must include DSFR's CSS and JS:

```html
<link rel="stylesheet" href="dsfr.min.css">
<link rel="stylesheet" href="utility/utility.min.css">
<script type="module" src="dsfr.module.min.js"></script>
<script nomodule src="dsfr.nomodule.min.js"></script>
```

## Quick Start

```tsx
import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { defineRegistry } from "@json-render/react";
import { dsfrComponentDefinitions } from "@gouvfr/dsfr-renderer/catalog";
import { dsfrComponents, useDsfr } from "@gouvfr/dsfr-renderer";

// 1. Define catalog with DSFR components
const catalog = defineCatalog(schema, {
  components: {
    Button: dsfrComponentDefinitions.Button,
    Input: dsfrComponentDefinitions.Input,
    Card: dsfrComponentDefinitions.Card,
    Alert: dsfrComponentDefinitions.Alert,
  },
});

// 2. Create registry with implementations
const { registry } = defineRegistry(catalog, {
  components: {
    Button: dsfrComponents.Button,
    Input: dsfrComponents.Input,
    Card: dsfrComponents.Card,
    Alert: dsfrComponents.Alert,
  },
});

// 3. Initialize DSFR and render
function App({ spec }) {
  useDsfr(); // Initialize DSFR behaviors once
  return <Renderer spec={spec} registry={registry} />;
}
```

## Available Components

| Component | DSFR Class | Description |
|-----------|------------|-------------|
| `Button` | `fr-btn` | Clickable button with variants |
| `Input` | `fr-input` | Text input with label and validation |
| `Select` | `fr-select` | Dropdown select with options |
| `Card` | `fr-card` | Container card for content sections |
| `Alert` | `fr-alert` | Alert banner with types |
| `Heading` | `fr-h1`–`fr-h6` | Heading text |
| `Text` | `fr-text` | Paragraph text with variants |
| `Stack` | `fr-grid-row` | Flex container for layouts |

## Component Props

### Button

```ts
Button: {
  props: z.object({
    label: z.string(),
    variant: z.enum(['primary', 'secondary', 'tertiary']).optional(),
    size: z.enum(['sm', 'md', 'lg']).optional(),
    disabled: z.boolean().optional(),
    icon: z.string().optional(),
    iconPosition: z.enum(['left', 'right']).optional(),
  }),
  description: 'DSFR button with variants and optional icon',
}
```

### Input

```ts
Input: {
  props: z.object({
    label: z.string(),
    name: z.string(),
    type: z.enum(['text', 'email', 'password', 'number', 'tel', 'url']).optional(),
    placeholder: z.string().optional(),
    value: z.string().optional(),
    hint: z.string().optional(),
    disabled: z.boolean().optional(),
    required: z.boolean().optional(),
    state: z.enum(['default', 'success', 'error']).optional(),
    stateMessage: z.string().optional(),
  }),
  description: 'DSFR input field with label and validation states',
}
```

### Alert

```ts
Alert: {
  props: z.object({
    title: z.string().optional(),
    message: z.string(),
    type: z.enum(['info', 'success', 'warning', 'error']),
    size: z.enum(['sm', 'md']).optional(),
    closable: z.boolean().optional(),
  }),
  description: 'DSFR alert banner',
}
```

## Extend with Custom Components

Add custom components alongside DSFR ones:

```tsx
import { z } from "zod";

const catalog = defineCatalog(schema, {
  components: {
    // Standard DSFR
    Button: dsfrComponentDefinitions.Button,
    Card: dsfrComponentDefinitions.Card,

    // Custom component
    Metric: {
      props: z.object({
        label: z.string(),
        value: z.string(),
        trend: z.enum(['up', 'down', 'neutral']).optional(),
      }),
      description: 'KPI metric display card',
    },
  },
});

const { registry } = defineRegistry(catalog, {
  components: {
    Button: dsfrComponents.Button,
    Card: dsfrComponents.Card,
    Metric: ({ props }) => (
      <div className="fr-card">
        <div className="fr-card__body">
          <p className="fr-card__detail">{props.label}</p>
          <h3 className="fr-card__title">{props.value}</h3>
        </div>
      </div>
    ),
  },
});
```

## Override DSFR Components

Replace any component implementation:

```tsx
const { registry } = defineRegistry(catalog, {
  components: {
    // Custom Button with analytics
    Button: ({ props, emit }) => (
      <button
        className={`fr-btn ${props.variant ? `fr-btn--${props.variant}` : ''}`}
        onClick={() => {
          trackEvent('button_click', { label: props.label });
          emit('press');
        }}
      >
        {props.label}
      </button>
    ),

    // Use standard implementations for others
    Card: dsfrComponents.Card,
    Input: dsfrComponents.Input,
  },
});
```

## How It Works

### DSFR JavaScript Behavior

DSFR includes JavaScript that auto-initializes based on DOM structure. This package:

1. **Renders correct HTML structure** — DSFR classes and elements
2. **Initializes DSFR once** — `useDsfr()` hook ensures DSFR is ready
3. **Stays out of DSFR's way** — No React state management for DSFR behaviors

For components with interactive behaviors (modals, accordions), DSFR handles the state internally. React just renders the HTML structure.

### AI Generation Flow

```
User Prompt → AI → JSON Spec → json-render → DSFR Components → UI
                ↑                    ↓
            Catalog defines       Registry implements
            what AI can use       how it renders
```

## Entry Points

| Entry Point | Exports | Use Case |
|-------------|---------|----------|
| `@gouvfr/dsfr-renderer` | `dsfrComponents`, `useDsfr` | React implementations |
| `@gouvfr/dsfr-renderer/catalog` | `dsfrComponentDefinitions` | Server-side schemas (no React) |

## Roadmap

- [ ] Additional components (Modal, Accordion, Tabs, Navigation, Table...)
- [ ] Solid and Svelte renderers (better fit for DSFR's imperative JS)
- [ ] Web Components renderer (framework-agnostic)
- [ ] AI skill for DSFR component generation

## Contributing

Contributions are welcome! This project is developed by the BetaGouv community.

1. Fork the repository
2. Create a feature branch
3. Run `pnpm install && pnpm dev`
4. Make your changes
5. Submit a pull request

## Resources

- [DSFR Documentation](https://www.systeme-de-design.gouv.fr/)
- [json-render Documentation](https://json-render.dev)
- [BetaGouv](https://beta.gouv.fr)
- [RGAA (French accessibility standard)](https://accessibilite.numerique.gouv.fr/)

## License

MIT — See [LICENSE](LICENSE) for details.

Note: DSFR itself has usage restrictions. Only French government entities may use DSFR in production.
