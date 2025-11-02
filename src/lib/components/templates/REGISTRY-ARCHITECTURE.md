# Template Registry Architecture

## Overview

The template registry has been refactored into a **distributed architecture** where each category manages its own registry. This solves the scalability problem of having a single 2000+ line file.

## Structure

```
templates/
├── template-registry.ts       # Main registry (imports & combines categories)
├── types.ts                   # Shared types
├── utils.ts & utils/          # Shared utilities
│
├── hero/
│   ├── index.ts              # Exports components + registry
│   ├── registry.ts           # Hero templates registry
│   ├── hero-*.svelte         # Hero components
│   └── ...
│
├── pricing/
│   ├── index.ts              # Exports components + registry
│   ├── registry.ts           # Pricing templates registry
│   ├── pricing-*.svelte      # Pricing components
│   └── ...
│
└── [other categories follow same pattern]
```

## How It Works

### 1. Category Registry (`category/registry.ts`)

Each category folder now has a `registry.ts` file that exports:

- **`CATEGORY_COMPONENTS`** - Maps template IDs to Svelte components
- **`CATEGORY_REGISTRY`** - Array of template metadata with default props

**Example** (`hero/registry.ts`):

```typescript
import HeroWithImageReviews from './hero-with-image-reviews.svelte';
// ... other imports

// Component mapping
export const HERO_COMPONENTS: Record<string, TemplateComponent> = {
  'hero-with-image-reviews': HeroWithImageReviews as TemplateComponent,
  // ... other mappings
};

// Template registry
export const HERO_REGISTRY: Template[] = [
  {
    id: 'hero-with-image-reviews',
    name: 'Hero with Image & Reviews',
    description: '...',
    defaultProps: { /* defaults */ },
    // ... metadata
  },
  // ... other templates
];
```

### 2. Category Index (`category/index.ts`)

Each category exports both components and registry:

```typescript
// Export components
export { default as HeroWithImageReviews } from './hero-with-image-reviews.svelte';
// ... other component exports

// Export registry
export { HERO_REGISTRY, HERO_COMPONENTS } from './registry';
```

### 3. Main Registry (`template-registry.ts`)

The main registry imports from all categories and combines them:

```typescript
import { HERO_REGISTRY, HERO_COMPONENTS } from './hero';
import { PRICING_REGISTRY, PRICING_COMPONENTS } from './pricing';
// ... other category imports

// Build TEMPLATE_CATEGORIES from distributed registries
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: 'hero',
    name: 'Hero Sections',
    icon: Layout,
    description: '...',
    order: 1,
    templates: HERO_REGISTRY  // 👈 Imported from hero/registry.ts
  },
  // ... other categories
];

// Combine all component mappings
export const TEMPLATE_COMPONENT_REGISTRY: Record<string, TemplateComponent> = {
  ...HERO_COMPONENTS,
  ...PRICING_COMPONENTS,
  // ... spread all category components
};
```

## Benefits

### ✅ **Scalability**
- Main `template-registry.ts` reduced from **2000+ lines to ~250 lines**
- Each category manages its own ~200-300 line registry
- Can scale to 220+ components without becoming unwieldy

### ✅ **Maintainability**
- Changes to a category only affect that category's files
- Clear separation of concerns
- Easier to review and test

### ✅ **Developer Experience**
- Easier to find and edit template metadata
- Smaller files are faster to navigate
- Clear, predictable structure

### ✅ **Code Organization**
- Related code stays together (components + metadata + types)
- Consistent pattern across all categories
- Easy to add new categories

## Adding a New Template

### 1. Create the Component

```bash
templates/hero/hero-new-variant.svelte
```

### 2. Add to Category Registry

Edit `templates/hero/registry.ts`:

```typescript
import HeroNewVariant from './hero-new-variant.svelte';

export const HERO_COMPONENTS: Record<string, TemplateComponent> = {
  // ... existing
  'hero-new-variant': HeroNewVariant as TemplateComponent,
};

export const HERO_REGISTRY: Template[] = [
  // ... existing
  {
    id: 'hero-new-variant',
    name: 'Hero New Variant',
    description: '...',
    defaultProps: { /* ... */ },
    // ... metadata
  },
];
```

### 3. Export from Category

Edit `templates/hero/index.ts`:

```typescript
export { default as HeroNewVariant } from './hero-new-variant.svelte';
// Registry export is already there
```

### 4. Done! ✨

The main registry automatically picks up the new template via the category registry.

## Adding a New Category

1. Create category folder: `templates/new-category/`
2. Create `registry.ts` with `NEW_CATEGORY_REGISTRY` and `NEW_CATEGORY_COMPONENTS`
3. Create `index.ts` to export components and registry
4. Update `template-registry.ts`:

```typescript
import { NEW_CATEGORY_REGISTRY, NEW_CATEGORY_COMPONENTS } from './new-category';

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  // ... existing
  {
    id: 'new-category',
    name: 'New Category',
    icon: SomeIcon,
    description: '...',
    order: 8,
    templates: NEW_CATEGORY_REGISTRY
  }
];

export const TEMPLATE_COMPONENT_REGISTRY: Record<string, TemplateComponent> = {
  ...HERO_COMPONENTS,
  // ... other existing
  ...NEW_CATEGORY_COMPONENTS  // Add here
};
```

## Migration Notes

- ✅ All existing helper functions preserved (getTemplateById, getTemplateDefaults, etc.)
- ✅ No breaking changes to public API
- ✅ Components still access defaults via `getTemplateDefaults(id)`
- ✅ All TypeScript types remain the same

## Files Changed

- ✅ `template-registry.ts` - Reduced from 2076 to ~250 lines
- ✅ Created `hero/registry.ts`
- ✅ Created `pricing/registry.ts`
- ✅ Created `faq/registry.ts`
- ✅ Created `testimonials/registry.ts`
- ✅ Created `team/registry.ts`
- ✅ Created `footer/registry.ts`
- ✅ Updated all category `index.ts` files to export registries

---

**Last Updated:** November 2, 2025

