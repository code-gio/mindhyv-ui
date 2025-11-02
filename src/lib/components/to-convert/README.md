# Preline Templates - Downloaded HTML

This directory contains HTML files downloaded from [Preline Examples](https://preline.co/examples.html) organized by template type.

## Directory Structure

Each folder contains an `index.html` file with the complete HTML markup for that template category from Preline.

### Marketing Templates

#### Page Sections
- `hero-sections/` - 11 hero section components
- `hero-forms/` - 4 hero form components
- `icon-sections/` - 10 icon section components
- `pricing-sections/` - 4 pricing section components
- `faq-sections/` - 4 FAQ section components
- `blog-sections/` - 12 blog section components
- `blog-articles/` - 2 blog article components
- `team-sections/` - 4 team section components
- `testimonials/` - 10 testimonial components
- `masonry-sections/` - 1 masonry section component
- `features-general/` - 7 general feature components
- `features-navs/` - 2 feature navigation components
- `features-stats/` - 3 feature statistics components
- `announcement-banners/` - 7 announcement banner components
- `card-sections/` - 7 card section components
- `clients-sections/` - 6 client section components
- `galleries/` - 3 gallery components
- `description-lists/` - 1 description list component
- `user-profiles/` - 2 user profile components
- `timeline/` - 1 timeline component

#### UI Controls
- `dropdowns/` - 4 dropdown components
- `selects/` - 1 select component
- `button-groups/` - 1 button group component

#### Pages
- `pricing-pages/` - 1 pricing page component

#### E-Commerce
- `product-listings/` - 1 product listing component

#### Overlays
- `modals/` - 12 modal components
- `cookie-banners/` - 10 cookie banner components

#### Navigations
- `navbars-headers/` - 11 navbar/header components
- `mega-menu/` - 3 mega menu components

#### Layouts
- `layouts-basic/` - 3 basic layout components
- `layouts-miscellaneous/` - 1 miscellaneous layout component

#### Forms
- `forms-authentication/` - 3 authentication form components
- `forms-feedback/` - 3 feedback form components
- `forms-subscribe/` - 3 subscribe form components
- `forms-textarea-input/` - 3 textarea input components

#### Contacts & Footers
- `contacts/` - 4 contact components
- `footers/` - 8 footer components

### Application Templates

#### Application Components
- `application/` - 7 application components
- `app-navbars/` - 6 app navbar components
- `invoice/` - 4 invoice components
- `tables/` - 10 table components
- `stats/` - 7 statistics components
- `form-layouts/` - 4 form layout components
- `ai-prompt/` - 4 AI prompt components
- `charts/` - 3 chart components

#### Application Pages
- `admin/` - 1 admin page component

## Total Statistics

- **Total Template Categories**: 45
- **Total Components**: 220+
- **Total Folders**: 45

## Usage

Each folder contains the raw HTML from Preline that needs to be:
1. Parsed to extract individual component examples
2. Converted from Tailwind CSS to Svelte + shadcn-svelte components
3. Integrated into the template system

## Conversion Process

To convert these templates:
1. Extract HTML from each `index.html` file
2. Identify individual component examples on each page
3. Convert Tailwind classes to shadcn-svelte equivalents
4. Create Svelte component files
5. Add to template registry
6. Test and validate

## Notes

- All HTML files were downloaded on November 2, 2025
- Each `index.html` file contains the full page with all component examples for that category
- Files include complete HTML structure, styling, and any inline scripts
- Some categories may have overlapping or similar components

## Next Steps

1. Create a parser to extract individual components from each HTML file
2. Develop conversion scripts for Tailwind → shadcn-svelte
3. Generate Svelte component templates
4. Update template registry with new components
5. Create documentation for each converted component

