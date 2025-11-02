# Mindhyv: Preline to shadcn-svelte Conversion Guide

This guide provides a systematic approach to converting Preline HTML templates into reactive, accessible Svelte components using the shadcn-svelte library for the Mindhyv UI system.

---

## Template System Architecture

Before starting conversions, understand the Mindhyv template system architecture:

### Three Core Components

**1. Template Registry (`template-registry.ts`)**

- Central catalog of all templates with metadata
- Single source of truth for default props
- Template discovery and filtering functions
- Component-to-registry mapping

**2. Shared Utilities (`utils/` + `utils.ts`)**

- Theme utilities (`cn`, `getThemeColor`, `buildGridClasses`)
- Rating utilities (`generateStarArray`, `formatRating`)
- Formatting utilities (`formatCurrency`, `truncateText`, `slugify`)
- Validation utilities (`isValidEmail`, `sanitizeText`)

**3. Type Definitions (`types.ts`)**

- Shared interfaces (`Review`, `Author`, `Testimonial`, `Feature`)
- Template metadata types
- Component prop types
- Data structure types

### Why This Architecture?

✅ **Single Source of Truth** - Defaults in registry, not hardcoded
✅ **No Duplication** - Utilities and types shared across all templates
✅ **Type Safety** - Centralized types ensure consistency
✅ **Maintainability** - Update once, applies everywhere
✅ **Discoverability** - Registry provides searchable catalog

### Directory Structure

```
templates/
├── template-registry.ts        # Template catalog (DEFAULTS HERE)
├── types.ts                    # Shared type definitions
├── utils.ts                    # Utility exports
├── utils/                      # Utility modules
│   ├── theme.ts
│   ├── ratings.ts
│   ├── formatting.ts
│   └── props.ts
├── hero/                       # Hero templates
│   ├── index.ts
│   └── hero-with-image-reviews.svelte
├── pricing/                    # Pricing templates
├── features/                   # Feature templates
└── [other categories]/
```

### Template Creation Workflow

When converting Preline templates:

1. **Add to registry** - Create entry in `template-registry.ts` with metadata and `defaultProps`
2. **Import utilities** - Use `../utils` for common functions (no duplicate logic)
3. **Import types** - Use `../types` for data structures (no inline definitions)
4. **Pull defaults** - Component uses `getTemplateDefaults()` from registry
5. **Export** - Add to category `index.ts` for clean imports
6. **Document** - Update README with template info

---

## Component Mapping Strategy

Transform static Preline HTML into accessible, reactive Svelte components that maintain visual fidelity while leveraging SvelteKit's powerful reactivity system.

### Step 1: Analyze the Preline Template

**Break Down the Structure**

Examine the Preline HTML and identify discrete UI elements:

- Interactive components (buttons, dropdowns, modals, tabs)
- Form elements (inputs, textareas, checkboxes, selects)
- Layout components (cards, panels, containers, grids)
- Navigation elements (navbars, menus, breadcrumbs)
- Content displays (tables, lists, badges, avatars)

**Classify Interactivity Requirements**

Determine which elements need:

- Static rendering (headings, paragraphs, images)
- Basic interactivity (buttons, links)
- Complex state management (dropdowns, dialogs, tabs, accordions)

### Step 2: Map to shadcn-svelte Components

Reference the [shadcn-svelte component catalog](https://shadcn-svelte.com/llms.txt) for available components.

**Component Mapping Reference**

| Preline HTML Pattern     | shadcn-svelte Component       | Notes                                                  |
| ------------------------ | ----------------------------- | ------------------------------------------------------ |
| `<button class="...">`   | `<Button>`                    | Use `variant` prop for styling                         |
| `<input>` / `<textarea>` | `<Input>` / `<Textarea>`      | Built-in validation support                            |
| `<select>`               | `<Select>`                    | Accessible dropdown replacement                        |
| Card/Panel containers    | `<Card>` with sub-components  | Compose with `CardHeader`, `CardContent`, `CardFooter` |
| Dropdown menus           | `<DropdownMenu>`              | Replaces `data-hs-dropdown`                            |
| Modal dialogs            | `<Dialog>`                    | Manages focus and escape handling                      |
| Tab interfaces           | `<Tabs>`                      | Keyboard navigation included                           |
| Alert messages           | `<Toast>` or `<Alert>`        | Choose based on persistence                            |
| Navigation bars          | Custom layout + components    | Combine `<Button>`, `<DropdownMenu>`, etc.             |
| Data tables              | `<Table>` or `<DataTable>`    | Use DataTable for sorting/filtering                    |
| Checkboxes               | `<Checkbox>`                  | Enhanced accessibility                                 |
| Icon buttons             | `<Button>` with size variants | Import icons from lucide-svelte                        |

### Step 3: Convert HTML to Svelte Components

**Before (Preline HTML):**

```html
<button
	class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
>
	Get started
	<svg class="size-4 shrink-0">...</svg>
</button>
```

**After (Mindhyv Svelte):**

```svelte
<script>
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight } from '@lucide/svelte/icons';
</script>

<Button variant="default" class="gap-x-2">
	Get started
	<ChevronRight class="size-4" />
</Button>
```

**Key Conversion Principles:**

1. **Remove Preline-specific attributes** (`data-hs-*`)
2. **Replace custom classes** with shadcn-svelte component props
3. **Preserve spacing and layout** using Tailwind utilities
4. **Implement interactivity** with Svelte reactivity instead of Preline JS
5. **Use semantic HTML** where shadcn components wrap native elements

### Step 4: Maintain Design System Consistency

**Use Mindhyv Theme Variables**

Reference the CSS variables defined in `src/app.css`:

```svelte
<!-- Leverage design tokens -->
<div class="bg-background text-foreground">
	<Card class="border-border">
		<CardHeader>
			<CardTitle class="text-primary">Mindhyv Dashboard</CardTitle>
		</CardHeader>
		<CardContent class="text-muted-foreground">
			Content adapts to light/dark themes automatically
		</CardContent>
	</Card>
</div>
```

**Color Palette Alignment:**

- Primary actions: `bg-primary text-primary-foreground`
- Secondary actions: `bg-secondary text-secondary-foreground`
- Muted content: `text-muted-foreground`
- Destructive actions: `bg-destructive text-destructive-foreground`
- Borders: `border-border`

**Spacing Consistency:**

- Use Tailwind spacing scale (`p-4`, `mt-6`, `gap-x-2`)
- Maintain Preline's visual rhythm while using standard units
- Apply responsive utilities (`md:p-8`, `lg:gap-x-4`)

### Step 5: Compose Complex Layouts

Build sophisticated UIs by combining multiple shadcn-svelte components.

**Example: Pricing Card**

```svelte
<script>
	import { Card, CardHeader, CardContent, CardFooter } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
</script>

<Card class="max-w-sm text-center">
	<CardHeader>
		<Badge variant="secondary" class="mb-2">Popular</Badge>
		<h3 class="text-2xl font-semibold">Pro Plan</h3>
	</CardHeader>
	<CardContent>
		<p class="text-4xl font-bold text-primary">$19</p>
		<p class="text-sm text-muted-foreground">/month</p>
		<ul class="mt-6 space-y-2 text-left">
			<li class="flex items-center gap-2">✓ Unlimited projects</li>
			<li class="flex items-center gap-2">✓ Priority support</li>
		</ul>
	</CardContent>
	<CardFooter>
		<Button class="w-full">Upgrade to Pro</Button>
	</CardFooter>
</Card>
```

### Step 6: Implement Accessibility

shadcn-svelte components include accessibility features by default. Enhance them for Mindhyv:

**Best Practices:**

- Add descriptive `aria-label` to icon-only buttons
- Use semantic HTML elements (`<nav>`, `<main>`, `<aside>`)
- Ensure keyboard navigation works (Tab, Enter, Escape, Arrow keys)
- Test with screen readers (VoiceOver, NVDA)
- Maintain focus indicators (default `outline-ring/50` from theme)
- Provide alternative text for images and icons

**Example:**

```svelte
<Button aria-label="Close dialog" variant="ghost" size="icon">
	<X class="size-4" />
</Button>
```

### Step 7: Use Template Registry for Defaults

**Single Source of Truth Pattern:**

All template defaults are defined in `template-registry.ts` to maintain consistency.

**Template Registry Entry:**

```typescript
// template-registry.ts
{
  id: 'hero-with-image-reviews',
  name: 'Hero with Image & Reviews',
  defaultProps: {
    title: 'Start your journey with',
    brandName: 'Mindhyv',
    description: 'Hand-picked professionals...',
    imageSrc: 'https://...',
    imageAlt: 'Dashboard Interface',
    showReviews: true,
    reviews: [
      { rating: 4.6, totalReviews: '12k', platform: 'Google' },
      { rating: 4.8, totalReviews: '5k', platform: 'Trustpilot' }
    ],
    ctaPrimaryText: 'Get started',
    ctaPrimaryHref: '#',
    ctaSecondaryText: 'Contact sales team',
    ctaSecondaryHref: '#'
  }
}
```

**Component Implementation:**

```svelte
<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';
	import type { Review } from '../types';

	interface HeroProps {
		title?: string;
		brandName?: string;
		reviews?: Review[];
		// ... other props
	}

	// Pull defaults from registry (single source of truth)
	const DEFAULTS = getTemplateDefaults('hero-with-image-reviews') || {};

	let {
		title = DEFAULTS.title,
		brandName = DEFAULTS.brandName,
		reviews = DEFAULTS.reviews
		// ... all props use registry defaults
	}: HeroProps = $props();
</script>
```

**Benefits:**

- ✅ Single source of truth for all defaults
- ✅ Easy to update defaults in one place
- ✅ Consistency across component and documentation
- ✅ Registry metadata always matches implementation

### Step 8: Import Shared Utilities

Use the centralized utility system instead of implementing common functions inline.

**Theme Utilities:**

```svelte
<script lang="ts">
	import { cn, getThemeColor, buildGridClasses } from '../utils';

	// Combine classes conditionally
	const buttonClass = cn('base-button', isPrimary && 'bg-primary', isDisabled && 'opacity-50');

	// Get theme color
	const primaryColor = getThemeColor('primary'); // "var(--primary)"
</script>
```

**Rating Utilities:**

```svelte
<script lang="ts">
	import { generateStarArray, formatRating, type StarType } from '../utils';

	// Generate star array for rendering
	const stars = generateStarArray(4.6); // ['full', 'full', 'full', 'full', 'half']

	// Format rating
	const displayRating = formatRating(4.6, 1); // "4.6"

	function getStarClass(starType: StarType): string {
		switch (starType) {
			case 'full':
				return 'fill-foreground text-foreground';
			case 'half':
				return 'fill-foreground/50 text-foreground';
			case 'empty':
				return 'text-muted-foreground';
		}
	}
</script>

{#each stars as starType}
	<Star class={cn('size-4', getStarClass(starType))} />
{/each}
```

**Formatting Utilities:**

```svelte
<script lang="ts">
	import { formatCurrency, formatDate, truncateText, slugify } from '../utils';

	const price = formatCurrency(1999, 'USD'); // "$1,999.00"
	const date = formatDate(new Date(), 'medium'); // "Jan 15, 2024"
	const excerpt = truncateText(longText, 150); // "Text..."
	const slug = slugify('Hello World!'); // "hello-world"
</script>
```

**Validation Utilities:**

```svelte
<script lang="ts">
	import { isValidEmail, isValidUrl, sanitizeText } from '../utils';

	let email = $state('');
	let isEmailValid = $derived(isValidEmail(email));

	// Sanitize user input
	const cleanText = sanitizeText(userInput);
</script>
```

### Step 9: Use Shared Types

Import shared type definitions from the centralized types file.

**Import Types:**

```svelte
<script lang="ts">
	import type { Review, Author, Testimonial, Feature, PricingPlan, CTA } from '../types';

	interface HeroProps {
		reviews?: Review[]; // ← Use shared type
		// ... other props
	}
</script>
```

**Benefits:**

- ✅ Type consistency across all templates
- ✅ Centralized type definitions
- ✅ Easy to update types in one place
- ✅ Better IDE autocomplete and type checking

### Step 10: Leverage Svelte 5 Reactivity

Replace Preline's JavaScript with Svelte 5's modern reactivity system using runes (`$state`, `$derived`, `$props`).

**Component Props:**

```svelte
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Snippet } from 'svelte';

	interface PricingCardProps {
		title: string;
		price: number;
		period?: string;
		features: string[];
		variant?: 'default' | 'popular';
		children?: Snippet;
	}

	let {
		title,
		price,
		period = 'month',
		features,
		variant = 'default',
		children
	}: PricingCardProps = $props();

	// Derived values based on props
	let formattedPrice = $derived(`$${price}/${period}`);
	let isPopular = $derived(variant === 'popular');
</script>

<Card class="max-w-sm text-center">
	<CardHeader>
		{#if isPopular}
			<Badge variant="secondary" class="mb-2">Popular</Badge>
		{/if}
		<h3 class="text-2xl font-semibold">{title}</h3>
	</CardHeader>
	<CardContent>
		<p class="text-4xl font-bold text-primary">${price}</p>
		<p class="text-sm text-muted-foreground">/{period}</p>
		<ul class="mt-6 space-y-2 text-left">
			{#each features as feature}
				<li class="flex items-center gap-2">✓ {feature}</li>
			{/each}
		</ul>
	</CardContent>
	<CardFooter>
		{@render children?.()}
	</CardFooter>
</Card>

<!-- Usage -->
<PricingCard
	title="Pro Plan"
	price={19}
	period="month"
	features={['Unlimited projects', 'Priority support']}
	variant="popular"
>
	<Button class="w-full">Upgrade to Pro</Button>
</PricingCard>
```

**Reactive State with $state:**

```svelte
<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';

	// Reactive state using $state rune
	let email = $state('');
	let password = $state('');
	let isSubmitting = $state(false);

	// Derived validation using $derived rune
	let isEmailValid = $derived(email.includes('@') && email.includes('.'));
	let isPasswordValid = $derived(password.length >= 8);
	let canSubmit = $derived(isEmailValid && isPasswordValid && !isSubmitting);

	async function handleSubmit() {
		if (!canSubmit) return;

		isSubmitting = true;
		try {
			// API call
			await fetch('/api/login', {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form onsubmit={handleSubmit}>
	<div class="space-y-4">
		<div>
			<Label for="email">Email</Label>
			<Input
				id="email"
				type="email"
				bind:value={email}
				class={email && !isEmailValid ? 'border-destructive' : ''}
			/>
			{#if email && !isEmailValid}
				<p class="mt-1 text-sm text-destructive">Please enter a valid email</p>
			{/if}
		</div>

		<div>
			<Label for="password">Password</Label>
			<Input
				id="password"
				type="password"
				bind:value={password}
				class={password && !isPasswordValid ? 'border-destructive' : ''}
			/>
			{#if password && !isPasswordValid}
				<p class="mt-1 text-sm text-destructive">Password must be at least 8 characters</p>
			{/if}
		</div>

		<Button type="submit" disabled={!canSubmit} class="w-full">
			{isSubmitting ? 'Signing in...' : 'Sign in'}
		</Button>
	</div>
</form>
```

**Dynamic State Management:**

```svelte
<script lang="ts">
	import {
		Dialog,
		DialogTrigger,
		DialogContent,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';

	interface ModalData {
		title: string;
		description: string;
	}

	// State management with $state
	let isOpen = $state(false);
	let currentData = $state<ModalData>({ title: '', description: '' });

	// Derived state
	let hasData = $derived(currentData.title.length > 0);

	function openDialog(data: ModalData) {
		currentData = data;
		isOpen = true;
	}

	function handleSubmit() {
		console.log('Submitting:', currentData);
		isOpen = false;
		// Reset on close
		currentData = { title: '', description: '' };
	}
</script>

<Dialog bind:open={isOpen}>
	<DialogTrigger asChild let:builder>
		<Button
			builders={[builder]}
			onclick={() =>
				openDialog({ title: 'Edit Settings', description: 'Configure your preferences' })}
		>
			Open Settings
		</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>{currentData.title}</DialogTitle>
		</DialogHeader>
		<p class="text-muted-foreground">{currentData.description}</p>
		<Button onclick={handleSubmit} disabled={!hasData}>Save Changes</Button>
	</DialogContent>
</Dialog>
```

**Component with Event Handlers:**

```svelte
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte/icons';

	interface PaginationProps {
		currentPage?: number;
		totalPages: number;
		onPageChange?: (page: number) => void;
	}

	let { currentPage = $bindable(1), totalPages, onPageChange }: PaginationProps = $props();

	// Derived states
	let canGoBack = $derived(currentPage > 1);
	let canGoForward = $derived(currentPage < totalPages);
	let pageNumbers = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));

	function goToPage(page: number) {
		if (page < 1 || page > totalPages) return;
		currentPage = page;
		onPageChange?.(page);
	}

	function nextPage() {
		if (canGoForward) goToPage(currentPage + 1);
	}

	function previousPage() {
		if (canGoBack) goToPage(currentPage - 1);
	}
</script>

<div class="flex items-center gap-2">
	<Button variant="outline" size="icon" onclick={previousPage} disabled={!canGoBack}>
		<ChevronLeft class="size-4" />
	</Button>

	{#each pageNumbers as page}
		<Button
			variant={page === currentPage ? 'default' : 'outline'}
			size="icon"
			onclick={() => goToPage(page)}
		>
			{page}
		</Button>
	{/each}

	<Button variant="outline" size="icon" onclick={nextPage} disabled={!canGoForward}>
		<ChevronRight class="size-4" />
	</Button>
</div>
```

**Key Svelte 5 Patterns:**

1. **Props Declaration** - Use `$props()` rune instead of `export let`
2. **Reactive State** - Use `$state()` for mutable reactive values
3. **Derived Values** - Use `$derived()` instead of `$:` reactive statements
4. **Bindable Props** - Use `$bindable()` for two-way binding
5. **Event Handlers** - Use lowercase `onclick`, `onsubmit` instead of `on:click`, `on:submit`
6. **Snippets** - Use `Snippet` type and `{@render}` for content projection instead of slots

---

## Quality Assurance & Testing

Validate that your converted components meet Mindhyv's quality standards and match the original Preline design intent.

### Functional Validation

**Interactive Component Testing**

Test each interactive element:

1. **Click interactions** - Buttons trigger correct actions
2. **Keyboard navigation** - Tab through focusable elements, Enter to activate, Escape to close
3. **Form submissions** - Data binds correctly, validation works
4. **State transitions** - Modals open/close, tabs switch, dropdowns expand
5. **Error handling** - Invalid states display appropriately

**Data Flow Verification**

- Confirm `bind:value` updates propagate correctly
- Test reactive statements (`$:`) recalculate on dependencies
- Verify store subscriptions update UI when store values change
- Check that component props pass data to children correctly

**Browser Console Checks**

- No JavaScript errors or warnings
- No React/Vue-specific code remnants
- No Preline JS library conflicts
- Proper Svelte component mounting

### Visual Quality Control

**Design Fidelity**

Compare converted Mindhyv components with original Preline templates:

- **Typography** - Font sizes, weights, line heights match
- **Spacing** - Padding, margins, gaps align
- **Colors** - Use Mindhyv theme tokens, verify in both light and dark modes
- **Borders & Shadows** - Radius values, shadow depths consistent
- **Icons** - Size and positioning match original design

**Theme Switching**

Test both appearance modes:

```svelte
<!-- Ensure components adapt to theme -->
<html class="dark"> <!-- or remove class for light mode -->
```

- All text remains legible
- Contrast ratios meet WCAG AA standards
- Background/foreground colors use theme variables
- Images and illustrations work in both modes

### Responsive Design Testing

**Breakpoint Validation**

Test at standard viewport widths:

- **Mobile (320px - 767px)** - Single column layouts, stacked navigation
- **Tablet (768px - 1023px)** - Two-column grids, collapsible menus
- **Desktop (1024px+)** - Multi-column layouts, expanded navigation

**Layout Integrity**

- ✓ No horizontal scroll bars at any breakpoint
- ✓ Images scale proportionally (use `object-cover`, `object-contain`)
- ✓ Grid/flex containers wrap appropriately
- ✓ Touch targets are at least 44x44px on mobile
- ✓ Text remains readable (minimum 16px on mobile)

**Responsive Utility Verification**

Confirm Tailwind responsive classes work:

```svelte
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	<!-- Responsive grid -->
</div>

<Button class="w-full md:w-auto">
	<!-- Full width on mobile, auto on desktop -->
</Button>
```

### Cross-Browser Compatibility

**Browser Testing Matrix**

Test Mindhyv components in:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Performance Audits**

Run Lighthouse in Chrome DevTools:

- Performance: Target 90+ score
- Accessibility: Target 100 score
- Best Practices: Target 100 score
- SEO: Target 90+ score

Use axe DevTools for detailed accessibility checks.

### Automated Testing (Optional)

**Visual Regression Testing**

Set up screenshot comparison with Playwright:

```javascript
// tests/hero.spec.js
import { test, expect } from '@playwright/test';

test('hero section matches design', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.hero-section')).toHaveScreenshot();
});
```

**Component Testing**

Use Vitest for unit tests on component logic:

```javascript
import { render } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import HeroSection from './hero-section.svelte';

test('renders hero with correct heading', () => {
	const { getByRole } = render(HeroSection);
	expect(getByRole('heading')).toHaveTextContent('Start your journey with Mindhyv');
});
```

---

## Final Checklist

Before marking a conversion complete, verify:

**Component Mapping**

- [ ] Every Preline element has a shadcn-svelte equivalent
- [ ] No Preline-specific classes or attributes remain (`data-hs-*`, `hs-*`)
- [ ] All Preline JavaScript removed
- [ ] Component imports use Mindhyv path aliases (`$lib/components/ui/*`)

**Functionality**

- [ ] All interactive features work (dropdowns, modals, tabs, forms)
- [ ] Keyboard navigation fully functional
- [ ] Svelte reactivity replaces all Preline JS behaviors
- [ ] Form bindings update state correctly
- [ ] No console errors or warnings

**Design & Styling**

- [ ] Visual appearance matches original Preline template
- [ ] Mindhyv theme variables used consistently
- [ ] Light and dark modes both work correctly
- [ ] Spacing and typography align with design system
- [ ] Icons from @lucide/svelte/icons, not embedded SVGs

**Responsiveness**

- [ ] Mobile (320px), tablet (768px), desktop (1024px+) tested
- [ ] No horizontal scrollbars at any width
- [ ] Images and media scale appropriately
- [ ] Touch targets adequate for mobile interaction

**Accessibility**

- [ ] Semantic HTML elements used
- [ ] ARIA labels on icon buttons and custom controls
- [ ] Focus indicators visible
- [ ] Screen reader tested (if possible)
- [ ] Lighthouse accessibility score 100

**Code Quality**

- [ ] No TypeScript errors
- [ ] Svelte linting passes
- [ ] Proper component composition (imports, props, events)
- [ ] Comments explain complex logic
- [ ] Follows Mindhyv coding standards

**Svelte 5 Patterns**

- [ ] Props use `$props()` rune with TypeScript interfaces
- [ ] Reactive state uses `$state()` instead of plain `let`
- [ ] Computed values use `$derived()` instead of `$:` statements
- [ ] Two-way binding uses `$bindable()` where appropriate
- [ ] Event handlers use lowercase syntax (`onclick`, `onsubmit`)
- [ ] Content projection uses `Snippet` type and `{@render}` instead of slots

**Template System Integration**

- [ ] Component added to `template-registry.ts` with complete metadata
- [ ] All defaults defined in registry `defaultProps` (single source of truth)
- [ ] Component uses `getTemplateDefaults()` to pull defaults from registry
- [ ] Uses shared utilities from `../utils` (no duplicate implementations)
- [ ] Uses shared types from `../types` (no duplicate type definitions)
- [ ] Exported from category `index.ts`
- [ ] Template ID matches registry and component file name

---

## Example Conversion: Hero Section

**Original Preline HTML:**

```html
<div class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
		<div>
			<h1
				class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
			>
				Start your journey with <span class="text-blue-600">Preline</span>
			</h1>
			<p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
				Hand-picked professionals and expertly crafted components, designed for any kind of
				entrepreneur.
			</p>
			<div class="mt-7 grid w-full gap-3 sm:inline-flex">
				<a
					class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
					href="#"
				>
					Get started
					<svg class="size-4 shrink-0">...</svg>
				</a>
				<a
					class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50"
					href="#"
				>
					Contact sales team
				</a>
			</div>
		</div>
		<div class="relative ms-4">
			<img class="w-full rounded-md" src="..." alt="Hero Image" />
		</div>
	</div>
</div>
```

**Converted Mindhyv Svelte Component (with Registry, Utils & Types):**

```svelte
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Star } from '@lucide/svelte/icons';
	import { generateStarArray, formatRating, cn, type StarType } from '../utils';
	import type { Review } from '../types';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroProps {
		title?: string;
		brandName?: string;
		description?: string;
		imageSrc?: string;
		imageAlt?: string;
		showReviews?: boolean;
		reviews?: Review[];
		ctaPrimaryText?: string;
		ctaPrimaryHref?: string;
		ctaSecondaryText?: string;
		ctaSecondaryHref?: string;
		onCtaClick?: (type: 'primary' | 'secondary') => void;
	}

	// Get defaults from template registry (single source of truth)
	const DEFAULTS = getTemplateDefaults('hero-with-image-reviews') || {};

	let {
		title = DEFAULTS.title,
		brandName = DEFAULTS.brandName,
		description = DEFAULTS.description,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt,
		showReviews = DEFAULTS.showReviews,
		reviews = DEFAULTS.reviews,
		ctaPrimaryText = DEFAULTS.ctaPrimaryText,
		ctaPrimaryHref = DEFAULTS.ctaPrimaryHref,
		ctaSecondaryText = DEFAULTS.ctaSecondaryText,
		ctaSecondaryHref = DEFAULTS.ctaSecondaryHref,
		onCtaClick
	}: HeroProps = $props();

	// Reactive state
	let isImageLoaded = $state(false);

	// Derived values
	let hasImage = $derived(imageSrc.length > 0);

	function handleCtaClick(type: 'primary' | 'secondary') {
		onCtaClick?.(type);
	}

	// Get star icon class based on type
	function getStarClass(starType: StarType): string {
		switch (starType) {
			case 'full':
				return 'fill-foreground text-foreground';
			case 'half':
				return 'fill-foreground/50 text-foreground';
			case 'empty':
				return 'text-muted-foreground';
		}
	}
</script>

<div class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
		<div>
			<h1 class="block text-3xl font-bold text-foreground sm:text-4xl lg:text-6xl lg:leading-tight">
				{title} <span class="text-primary">{brandName}</span>
			</h1>
			<p class="mt-3 text-lg text-muted-foreground">
				{description}
			</p>

			<div class="mt-7 grid w-full gap-3 sm:inline-flex">
				<Button href={ctaPrimaryHref} class="gap-x-2" onclick={() => handleCtaClick('primary')}>
					{ctaPrimaryText}
					<ChevronRight class="size-4 shrink-0" />
				</Button>
				<Button
					href={ctaSecondaryHref}
					variant="outline"
					onclick={() => handleCtaClick('secondary')}
				>
					{ctaSecondaryText}
				</Button>
			</div>

			{#if showReviews && reviews.length > 0}
				<div class="mt-6 grid grid-cols-2 gap-x-5 lg:mt-10">
					{#each reviews as review}
						<div class="py-5">
							<div class="flex gap-x-1">
								{#each generateStarArray(review.rating) as starType}
									<Star class={cn('size-4', getStarClass(starType))} />
								{/each}
							</div>
							<p class="mt-3 text-sm text-foreground">
								<span class="font-bold">{formatRating(review.rating)}</span> /5 - from {review.totalReviews}
								reviews
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if hasImage}
			<div class="relative ms-4">
				<img
					class={cn(
						'w-full rounded-md transition-opacity duration-300',
						isImageLoaded ? 'opacity-100' : 'opacity-0'
					)}
					src={imageSrc}
					alt={imageAlt}
					onload={() => (isImageLoaded = true)}
				/>
				<div
					class="absolute inset-0 -z-1 -ms-4 me-4 mt-4 -mb-4 size-full rounded-md bg-linear-to-tr from-muted via-background/0 to-background/0 lg:-ms-6 lg:me-6 lg:mt-6 lg:-mb-6"
				/>
			</div>
		{/if}
	</div>
</div>

<!-- Usage Example -->
<!--
<HeroSection
	brandName="Mindhyv"
	description="Build better products with our AI-powered tools"
	imageSrc="/images/dashboard.jpg"
	showRatings={true}
	ctaPrimaryText="Start Free Trial"
	ctaPrimaryHref="/signup"
/>
-->
```

**Key Changes Made:**

1. **Template Registry Integration** - Defaults pulled from `template-registry.ts` using `getTemplateDefaults()`
2. **Shared Type System** - Uses `Review` type from centralized `../types`
3. **Utility Functions** - Uses `generateStarArray()`, `formatRating()`, and `cn()` from `../utils`
4. **Props System** - Defined `HeroProps` interface with TypeScript for type safety
5. **Svelte 5 Runes** - Used `$props()`, `$state()`, and `$derived()` for modern reactivity
6. **Single Source of Truth** - All defaults defined once in registry, not hardcoded
7. **Theme Tokens** - Replaced hardcoded colors with Mindhyv design tokens (`text-foreground`, `text-primary`, `text-muted-foreground`)
8. **shadcn Components** - Converted `<a>` tags to `<Button>` components with `href` and `variant` props
9. **Icon System** - Replaced inline SVG with `@lucide/svelte` icons (`ChevronRight`, `Star`)
10. **Event Handlers** - Used Svelte 5's lowercase `onclick` with callback functions
11. **Reactive State** - Added `isImageLoaded` state with image loading feedback
12. **Conditional Rendering** - Used `{#if}` blocks with utility-based star rendering
13. **Class Management** - Used `cn()` utility for conditional class merging
14. **Accessibility** - Maintained semantic HTML, descriptive alt text, and keyboard navigation
15. **Branding** - Updated from "Preline" to "Mindhyv" throughout
