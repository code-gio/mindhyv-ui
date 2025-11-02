# Mindhyv Templates

Pre-built, production-ready template components for building modern web applications. All templates are converted from Preline to shadcn-svelte with Svelte 5 reactivity patterns.

## 📁 Directory Structure

```
templates/
├── index.ts                          # Main exports
├── template-registry.ts              # Template catalog and registry
├── types.ts                          # TypeScript definitions
├── utils.ts                          # Utility functions (main export)
├── utils/                            # Utility modules
│   ├── theme.ts                      # Theme & styling utilities
│   ├── ratings.ts                    # Rating & review helpers
│   ├── formatting.ts                 # Content formatting
│   ├── props.ts                      # Prop validation
│   └── templates/                    # Template-specific utils
├── hero/                             # Hero sections
│   ├── index.ts
│   └── hero-with-image-reviews.svelte
├── features/                         # Feature sections
├── pricing/                          # Pricing tables
├── testimonials/                     # Testimonial sections
├── cta/                              # Call-to-action sections
├── team/                             # Team sections
├── blog/                             # Blog & news sections
├── contact/                          # Contact forms
├── faq/                              # FAQ sections
├── navigation/                       # Headers & navigation
└── footer/                           # Footer sections
```

## 🚀 Quick Start

### Using a Template

```svelte
<script lang="ts">
  import { HeroWithImageReviews } from '$lib/components/templates';
  
  function handleCtaClick(type: 'primary' | 'secondary') {
    console.log('CTA clicked:', type);
  }
</script>

<HeroWithImageReviews
  title="Start your journey with"
  brandName="Mindhyv"
  description="Hand-picked professionals and expertly crafted components."
  showReviews={true}
  ctaPrimaryText="Get started"
  ctaPrimaryHref="/signup"
  onCtaClick={handleCtaClick}
/>
```

### Using the Template Registry

```typescript
import {
  getAllTemplates,
  getTemplateById,
  searchTemplates,
  getTemplateComponent
} from '$lib/components/templates';

// Get all available templates
const templates = getAllTemplates();

// Search templates
const heroTemplates = searchTemplates('hero');

// Get specific template
const template = getTemplateById('hero-with-image-reviews');

// Get component dynamically
const Component = getTemplateComponent('hero-with-image-reviews');
```

### Using Utilities

```typescript
import {
  cn,                    // Class name merger
  formatRating,          // Format ratings
  formatCurrency,        // Format money
  generateStarArray,     // Generate star ratings
  truncateText,          // Truncate text
  slugify                // Generate slugs
} from '$lib/components/templates';

// Combine class names
const classes = cn('base-class', isActive && 'active-class', 'another-class');

// Format rating
const rating = formatRating(4.6, 1); // "4.6"

// Generate star array
const stars = generateStarArray(4.5); // ['full', 'full', 'full', 'full', 'half']

// Format currency
const price = formatCurrency(1999, 'USD'); // "$1,999.00"
```

## 📋 Template Registry

The template registry provides a centralized catalog of all available templates with metadata:

- **Template Discovery**: Search and filter templates
- **Component Mapping**: Dynamic component loading
- **Metadata**: Features, complexity, tags, use cases
- **Type Safety**: Full TypeScript support

### Template Metadata

Each template includes:

```typescript
{
  id: string;
  name: string;
  description: string;
  icon: IconComponent;
  category: string;
  variant: string;
  previewImage: string;
  tags: string[];
  complexity: 'simple' | 'moderate' | 'complex';
  features: string[];
  darkModeSupport: boolean;
  responsive: ['mobile', 'tablet', 'desktop'];
  defaultProps: Record<string, any>;
  useCases: string[];
  dependencies: string[];
}
```

## 🎨 Template Categories

### Hero Sections
Eye-catching sections to start your pages with impact.

**Available Templates:**
- `hero-with-image-reviews` - Hero with image, reviews, and dual CTAs

### Features (Coming Soon)
Showcase your product features and benefits.

### Pricing (Coming Soon)
Present your pricing plans clearly and convert visitors.

### Testimonials (Coming Soon)
Build trust with customer testimonials and reviews.

### Call-to-Action (Coming Soon)
Drive conversions with compelling CTAs.

### Team (Coming Soon)
Introduce your team members professionally.

### Blog & News (Coming Soon)
Display blog posts and news articles.

### Contact Forms (Coming Soon)
Make it easy for visitors to get in touch.

### FAQ (Coming Soon)
Answer common questions with elegant accordions.

### Headers & Navigation (Coming Soon)
Professional headers and navigation menus.

### Footers (Coming Soon)
Complete your pages with informative footers.

## 🛠️ Utility Functions

### Theme Utilities

```typescript
import { cn, getThemeColor, buildGridClasses } from '$lib/components/templates';

// Combine classes conditionally
const buttonClass = cn(
  'base-button',
  isPrimary && 'primary',
  isDisabled && 'disabled'
);

// Get theme color
const primary = getThemeColor('primary'); // "var(--primary)"

// Build grid classes
const grid = buildGridClasses(3, '4'); // "grid grid-cols-1 md:grid-cols-3 gap-4"
```

### Rating Utilities

```typescript
import { formatRating, generateStarArray, formatReviewCount } from '$lib/components/templates';

// Format rating
const rating = formatRating(4.6); // "4.6"

// Generate stars for rendering
const stars = generateStarArray(4.5); // ['full', 'full', 'full', 'full', 'half']

// Format review count
const count = formatReviewCount(12000); // "12.0k"
```

### Formatting Utilities

```typescript
import {
  formatCurrency,
  formatDate,
  truncateText,
  slugify
} from '$lib/components/templates';

// Format currency
const price = formatCurrency(1999.99, 'USD'); // "$1,999.99"

// Format date
const date = formatDate(new Date(), 'medium'); // "Jan 15, 2024"

// Truncate text
const excerpt = truncateText('Long text here...', 100); // "Long text..."

// Generate slug
const slug = slugify('Hello World!'); // "hello-world"
```

### Validation Utilities

```typescript
import {
  isValidEmail,
  isValidUrl,
  sanitizeText
} from '$lib/components/templates';

// Validate email
const valid = isValidEmail('user@example.com'); // true

// Validate URL
const validUrl = isValidUrl('https://example.com'); // true

// Sanitize text
const clean = sanitizeText('<script>alert("xss")</script>Hello'); // "Hello"
```

## 🎯 Template Features

All templates include:

✅ **Svelte 5 Reactivity** - Using `$state`, `$derived`, `$props` runes
✅ **TypeScript Support** - Full type safety with interfaces
✅ **Dark Mode Support** - Automatic theme switching
✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Accessibility** - WCAG AA compliant
✅ **Customizable** - Extensive prop-based configuration
✅ **Performance** - Optimized rendering and loading states
✅ **shadcn-svelte** - Built on accessible UI components

## 📚 Documentation

For detailed conversion guidelines and best practices, see:
- [Preline to shadcn-svelte Conversion Guide](./preline-to-shadcn-conversion.md)

## 🏗️ Architecture

### Single Source of Truth

The template system uses a **registry-based architecture** for consistency:

**Template Registry (`template-registry.ts`):**
```typescript
{
  id: 'hero-with-image-reviews',
  name: 'Hero with Image & Reviews',
  defaultProps: {
    title: 'Start your journey with',
    brandName: 'Mindhyv',
    description: '...',
    reviews: [...],
    // All defaults defined here
  }
}
```

**Component Implementation:**
```svelte
<script lang="ts">
  import { getTemplateDefaults } from '../template-registry';
  
  // Pull defaults from registry (single source of truth)
  const DEFAULTS = getTemplateDefaults('hero-with-image-reviews') || {};
  
  let {
    title = DEFAULTS.title,
    brandName = DEFAULTS.brandName,
    reviews = DEFAULTS.reviews,
    // ... all props use registry defaults
  }: HeroProps = $props();
</script>
```

### Shared Utilities

All templates have access to common utilities:

**Theme Utils:**
```typescript
import { cn, getThemeColor, buildGridClasses } from '../utils';
```

**Rating Utils:**
```typescript
import { generateStarArray, formatRating, type StarType } from '../utils';
```

**Formatting Utils:**
```typescript
import { formatCurrency, truncateText, slugify } from '../utils';
```

**Validation Utils:**
```typescript
import { isValidEmail, sanitizeText } from '../utils';
```

### Type System

Shared types are centralized in `types.ts`:

```typescript
import type { Review, Author, Testimonial, Feature } from '../types';
```

This ensures type consistency across all templates.

## 🤝 Contributing

When adding new templates:

1. **Create component** in appropriate category folder
2. **Add to registry** in `template-registry.ts` with full metadata and defaults
3. **Use registry defaults** - Import `getTemplateDefaults()` instead of hardcoding
4. **Import shared utilities** - Use `../utils` for common functions
5. **Import shared types** - Use `../types` for data structures
6. **Export from category** `index.ts`
7. **Update this README** with new template info
8. **Follow patterns** - Use Svelte 5 runes, TypeScript interfaces
9. **Follow branding** - Mindhyv theme tokens and design system

### Template Creation Checklist

- [ ] Component created in category folder
- [ ] Added to `TEMPLATE_CATEGORIES` in `template-registry.ts`
- [ ] All defaults defined in registry `defaultProps`
- [ ] Component uses `getTemplateDefaults()` for props
- [ ] Uses shared utilities from `../utils`
- [ ] Uses shared types from `../types`
- [ ] Exported from category `index.ts`
- [ ] Svelte 5 patterns (`$props`, `$state`, `$derived`)
- [ ] TypeScript interface for props
- [ ] Responsive and accessible
- [ ] Dark mode support
- [ ] README updated

## 📝 License

Part of the Mindhyv UI component library.

