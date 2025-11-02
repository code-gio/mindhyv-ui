import { Image, Layout } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import hero components
import HeroWithImageReviews from './hero-with-image-reviews.svelte';
import HeroTextOnImage from './hero-text-on-image.svelte';
import HeroDarkWithClients from './hero-dark-with-clients.svelte';
import HeroCenteredWithPolygon from './hero-centered-with-polygon.svelte';
import HeroWithEmailInput from './hero-with-email-input.svelte';
import HeroCenteredDarkGradient from './hero-centered-dark-gradient.svelte';
import HeroWithSquaredBg from './hero-with-squared-bg.svelte';
import HeroWithGradientBg from './hero-with-gradient-bg.svelte';
import HeroWithVideoButton from './hero-with-video-button.svelte';
import HeroSignupForm from './hero-signup-form.svelte';
import HeroSplitSignup from './hero-split-signup.svelte';
import HeroCenteredInlineForm from './hero-centered-inline-form.svelte';
import HeroSearchWithTags from './hero-search-with-tags.svelte';

/**
 * Hero component mapping for dynamic component loading
 */
export const HERO_COMPONENTS: Record<string, TemplateComponent> = {
	'hero-with-image-reviews': HeroWithImageReviews as TemplateComponent,
	'hero-text-on-image': HeroTextOnImage as TemplateComponent,
	'hero-dark-with-clients': HeroDarkWithClients as TemplateComponent,
	'hero-centered-with-polygon': HeroCenteredWithPolygon as TemplateComponent,
	'hero-with-email-input': HeroWithEmailInput as TemplateComponent,
	'hero-centered-dark-gradient': HeroCenteredDarkGradient as TemplateComponent,
	'hero-with-squared-bg': HeroWithSquaredBg as TemplateComponent,
	'hero-with-gradient-bg': HeroWithGradientBg as TemplateComponent,
	'hero-with-video-button': HeroWithVideoButton as TemplateComponent,
	'hero-signup-form': HeroSignupForm as TemplateComponent,
	'hero-split-signup': HeroSplitSignup as TemplateComponent,
	'hero-centered-inline-form': HeroCenteredInlineForm as TemplateComponent,
	'hero-search-with-tags': HeroSearchWithTags as TemplateComponent
};

/**
 * Hero templates registry with metadata and default props
 */
export const HERO_REGISTRY: Template[] = [
	{
		id: 'hero-with-image-reviews',
		name: 'Hero with Image & Reviews',
		description:
			'Hero section featuring a prominent image, customer reviews, and dual call-to-action buttons',
		icon: Image,
		category: 'hero',
		variant: 'split',
		previewImage: '/templates/hero-with-image-reviews.png',
		thumbnailImage: '/templates/thumbnails/hero-with-image-reviews.jpg',
		tags: [
			'hero',
			'image',
			'reviews',
			'ratings',
			'cta',
			'social-proof',
			'landing-page',
			'marketing'
		],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Customizable Content',
			'Star Ratings',
			'Platform Reviews (Google, Trustpilot)',
			'Dual CTA Buttons',
			'Image Loading States',
			'SVG Decorations',
			'TypeScript Support',
			'Accessibility (WCAG AA)'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: [
			'SaaS Landing Pages',
			'Product Launches',
			'Marketing Websites',
			'Agency Portfolios',
			'E-commerce Stores'
		],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Start your journey with',
			brandName: 'Mindhyv',
			description:
				'Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.',
			imageSrc:
				'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80',
			imageAlt: 'Dashboard Interface',
			showReviews: true,
			reviews: [
				{
					rating: 4.6,
					totalReviews: '12k',
					platform: 'Google',
					platformLogo: 'google'
				},
				{
					rating: 4.8,
					totalReviews: '5k',
					platform: 'Trustpilot',
					platformLogo: 'trustpilot'
				}
			],
			ctaPrimaryText: 'Get started',
			ctaPrimaryHref: '#',
			ctaSecondaryText: 'Contact sales team',
			ctaSecondaryHref: '#'
		},
		template: HeroWithImageReviews
	},
	{
		id: 'hero-text-on-image',
		name: 'Hero Text on Image',
		description:
			'Minimalist hero section with text overlay positioned on a full-width background image',
		icon: Image,
		category: 'hero',
		variant: 'full-width',
		previewImage: '/templates/hero-text-on-image.png',
		thumbnailImage: '/templates/thumbnails/hero-text-on-image.jpg',
		tags: ['hero', 'image', 'minimal', 'full-width', 'text-overlay', 'landing-page', 'creative'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Customizable Text Position',
			'Configurable Background Image',
			'Flexible Text Width',
			'Optional Rounded Corners',
			'Accessible ARIA Labels',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: [
			'Portfolio Websites',
			'Creative Agencies',
			'Photography Sites',
			'Art Galleries',
			'Minimalist Landing Pages'
		],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Bringing Art to everything',
			backgroundImage:
				'https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			textPosition: 'bottom-left',
			maxTextWidth: 'w-2/3 md:max-w-lg',
			containerPadding: '',
			roundedCorners: true
		},
		template: HeroTextOnImage
	},
	{
		id: 'hero-dark-with-clients',
		name: 'Hero Dark with Clients',
		description:
			'Dark-themed hero section with highlighted text and client logos showcase with decorative wave pattern',
		icon: Layout,
		category: 'hero',
		variant: 'full-width',
		previewImage: '/templates/hero-dark-with-clients.png',
		thumbnailImage: '/templates/thumbnails/hero-dark-with-clients.jpg',
		tags: ['hero', 'dark', 'clients', 'social-proof', 'logos', 'enterprise', 'landing-page', 'b2b'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Theme',
			'Customizable Highlight Color',
			'Client Logos Section',
			'Decorative SVG Wave Pattern',
			'Flexible Layout',
			'Accessible ARIA Labels',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: [
			'Enterprise Landing Pages',
			'B2B SaaS Websites',
			'Agency Portfolios',
			'Product Launches',
			'Marketing Websites'
		],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: ' Transforming ideas into reality',
			highlightText: 'Preline Agency:',
			highlightColor: 'text-[#ff0]',
			description:
				'It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities.',
			backgroundColor: 'bg-neutral-900',
			showClients: true,
			clientsHeading: 'Trusted by Open Source, enterprise, and more than 99,000 of you',
			maxWidth: 'max-w-5xl',
			showWavePattern: true,
			clientLogos: []
		},
		template: HeroDarkWithClients
	},
	{
		id: 'hero-centered-with-polygon',
		name: 'Hero Centered with Polygon Background',
		description:
			'Centered hero section with gradient text, announcement banner, and decorative polygon SVG background',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-centered-with-polygon.png',
		thumbnailImage: '/templates/thumbnails/hero-centered-with-polygon.jpg',
		tags: [
			'hero',
			'centered',
			'gradient',
			'announcement',
			'polygon-background',
			'landing-page',
			'marketing',
			'developer'
		],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Customizable Background SVG',
			'Gradient Text Effect',
			'Announcement Banner',
			'Gradient Button',
			'Code Copy Button',
			'Package Manager Info',
			'Guide Link',
			'TypeScript Support',
			'Accessibility (WCAG AA)'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: [
			'Open Source Projects',
			'Developer Tools',
			'SaaS Landing Pages',
			'Product Launches',
			'Documentation Sites'
		],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			announcementText: 'PRO release - Join to waitlist',
			announcementHref: '#',
			title: "Let's Build",
			gradientText: 'Together',
			description:
				'Mindhyv is an open-source set of prebuilt UI components, ready-to-use examples and design system based on Svelte and shadcn-svelte.',
			ctaPrimaryText: 'Get started',
			ctaPrimaryHref: '#',
			codeCommand: '$ npm i mindhyv-ui',
			packageManager: 'npm',
			guideText: 'Installation Guide',
			guideHref: '/docs',
			backgroundImageLight: 'https://preline.co/assets/svg/examples/polygon-bg-element.svg',
			backgroundImageDark: 'https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg'
		},
		template: HeroCenteredWithPolygon
	},
	{
		id: 'hero-with-email-input',
		name: 'Hero with Email Input',
		description:
			'Split layout hero with email capture form, client logos, and featured image for lead generation',
		icon: Layout,
		category: 'hero',
		variant: 'split',
		previewImage: '/templates/hero-with-email-input.png',
		thumbnailImage: '/templates/thumbnails/hero-with-email-input.jpg',
		tags: [
			'hero',
			'email',
			'form',
			'split-layout',
			'lead-generation',
			'clients',
			'landing-page',
			'marketing'
		],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Email Capture Form',
			'Client Logo Showcase',
			'Featured Image',
			'Form Validation',
			'Flexible Layout (3:4 Grid)',
			'TypeScript Support',
			'Accessibility (WCAG AA)'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: [
			'Lead Generation',
			'Product Launches',
			'Newsletter Signups',
			'Webinar Registration',
			'Beta Access Pages'
		],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Build Better Products',
			description: 'Introducing a new way for your brand to reach the creative community.',
			inputPlaceholder: 'Enter work email',
			ctaText: 'Request demo',
			ctaHref: '#',
			trustedByText: 'Trusted by:',
			showLogos: true,
			clientLogos: [],
			imageSrc:
				'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=700&q=80',
			imageAlt: 'Product Dashboard'
		},
		template: HeroWithEmailInput
	},
	{
		id: 'hero-centered-dark-gradient',
		name: 'Hero Centered with Dark Gradient',
		description:
			'Centered hero with dark gradient background, announcement banner, and gradient CTA button',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-centered-dark-gradient.png',
		thumbnailImage: '/templates/thumbnails/hero-centered-dark-gradient.jpg',
		tags: ['hero', 'centered', 'dark', 'gradient', 'announcement', 'landing-page'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Gradient Background',
			'Announcement Banner',
			'Gradient Button',
			'Centered Layout',
			'TypeScript Support',
			'Accessibility (WCAG AA)'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Dark Themed Sites', 'Product Launches', 'Landing Pages', 'Marketing'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			announcementText: 'Mindhyv UI is live.',
			announcementHref: '#',
			title: "Now it's easier than ever to build products",
			description: 'Mindhyv is a large open-source project, crafted with Svelte and shadcn-svelte.',
			ctaText: 'Get started',
			ctaHref: '#'
		},
		template: HeroCenteredDarkGradient
	},
	{
		id: 'hero-with-squared-bg',
		name: 'Hero with Squared Background',
		description: 'Centered hero with decorative squared SVG background and gradient button',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-with-squared-bg.png',
		thumbnailImage: '/templates/thumbnails/hero-with-squared-bg.jpg',
		tags: ['hero', 'centered', 'background', 'svg', 'gradient', 'landing-page'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Decorative SVG Background',
			'Announcement Banner',
			'Gradient Button',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Open Source Projects', 'Developer Tools', 'Product Launches', 'Landing Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			announcementText: 'Explore the Capital Product',
			announcementLinkText: 'Explore',
			announcementHref: '#',
			title: 'Supercharged Mindhyv Experience',
			description: 'Mindhyv is a large open-source project, crafted with Svelte and shadcn-svelte.',
			ctaText: 'Continue with Github',
			ctaHref: '#',
			backgroundImageLight: 'https://preline.co/assets/svg/examples/squared-bg-element.svg',
			backgroundImageDark: 'https://preline.co/assets/svg/examples-dark/squared-bg-element.svg'
		},
		template: HeroWithSquaredBg
	},
	{
		id: 'hero-with-gradient-bg',
		name: 'Hero with Decorative Gradient Background',
		description:
			'Centered hero with decorative blur gradients, subtitle badge, and dual CTA buttons',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-with-gradient-bg.png',
		thumbnailImage: '/templates/thumbnails/hero-with-gradient-bg.jpg',
		tags: ['hero', 'centered', 'gradient', 'decorative', 'dual-cta', 'landing-page'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Decorative Blur Gradients',
			'Gradient Text Badge',
			'Dual CTA Buttons',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Launches', 'SaaS Landing Pages', 'Marketing Sites', 'Portfolios'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			subtitle: 'Mindhyv: A vision for 2025',
			title: 'The Intuitive Web Solutions',
			description:
				'Mindhyv is an open-source set of prebuilt UI components, ready-to-use examples based on Svelte and shadcn-svelte.',
			ctaPrimaryText: 'Get started',
			ctaPrimaryHref: '#',
			ctaSecondaryText: 'Mindhyv Figma',
			ctaSecondaryHref: '#',
			ctaSecondaryIcon: ''
		},
		template: HeroWithGradientBg
	},
	{
		id: 'hero-with-video-button',
		name: 'Hero with Video Play Button',
		description:
			'Centered hero with large background image, video play button overlay, and decorative elements',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-with-video-button.png',
		thumbnailImage: '/templates/thumbnails/hero-with-video-button.jpg',
		tags: ['hero', 'centered', 'video', 'image', 'decorative', 'landing-page'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Background Image',
			'Video Play Button',
			'Decorative Elements',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Demos', 'Video Content', 'Landing Pages', 'Portfolios'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Designed for you to get more',
			highlightText: 'simple',
			description: 'Build your business here. Take it anywhere.',
			videoButtonText: 'Play the overview',
			videoHref: '#',
			backgroundImage:
				'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1020&q=80'
		},
		template: HeroWithVideoButton
	},
	{
		id: 'hero-signup-form',
		name: 'Hero with Signup Form',
		description:
			'Split hero with signup form card, testimonial quote, and gradient background for lead capture',
		icon: Layout,
		category: 'hero',
		variant: 'split',
		previewImage: '/templates/hero-signup-form.png',
		thumbnailImage: '/templates/thumbnails/hero-signup-form.jpg',
		tags: ['hero', 'form', 'signup', 'testimonial', 'gradient', 'split-layout', 'lead-generation'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Gradient Background',
			'Google Sign-in Button',
			'Multi-field Form',
			'Testimonial Quote',
			'Form Validation',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Registration', 'Lead Generation', 'SaaS Signups', 'Marketing'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			subtitle: 'Mindhyv: A vision for 2025',
			title: 'Fully customizable rules to match your unique needs',
			description:
				'We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.',
			formTitle: 'Start your free trial',
			signInText: 'Already have an account?',
			signInHref: '#',
			googleSignupText: 'Sign up with Google',
			submitButtonText: 'Sign up',
			showTestimonial: true,
			testimonial: {
				quote: 'Amazing people to work with. Very fast and professional partner.',
				name: 'Josh Grazioso',
				title: 'Director Payments & Risk | Airbnb',
				avatarUrl:
					'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
			}
		},
		template: HeroSignupForm
	},
	{
		id: 'hero-split-signup',
		name: 'Hero Split with Signup Form',
		description:
			'Split hero with signup form on left and background image on right for visual impact',
		icon: Layout,
		category: 'hero',
		variant: 'split',
		previewImage: '/templates/hero-split-signup.png',
		thumbnailImage: '/templates/thumbnails/hero-split-signup.jpg',
		tags: ['hero', 'form', 'signup', 'split-layout', 'image', 'lead-generation'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Background Image',
			'Google Sign-in',
			'Simple Form Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Registration', 'Lead Capture', 'Landing Pages', 'SaaS'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Solving problems for every',
			highlightText: 'team',
			description:
				'Built on standard web technology, teams use Mindhyv to build beautiful cross-platform hybrid apps in a fraction of the time.',
			googleSignupText: 'Sign up with Google',
			submitButtonText: 'Sign up',
			backgroundImage:
				'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
		},
		template: HeroSplitSignup
	},
	{
		id: 'hero-centered-inline-form',
		name: 'Hero Centered with Inline Form',
		description:
			'Centered hero with avatar group, trust indicators, and horizontal inline signup form',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-centered-inline-form.png',
		thumbnailImage: '/templates/thumbnails/hero-centered-inline-form.jpg',
		tags: ['hero', 'centered', 'form', 'inline', 'avatars', 'social-proof', 'lead-generation'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Avatar Group',
			'Trust Indicators',
			'Horizontal Inline Form',
			'Decorative SVG Elements',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Lead Generation', 'Newsletter Signups', 'Waitlists', 'Landing Pages'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			subtitle: 'Small business solutions',
			title: 'Turn online shoppers into',
			highlightText: 'lifetime customers',
			totalUsers: '7k+',
			trustPilotTitle: 'Trust pilot',
			trustPilotDescription: 'Rated best over 37k reviews',
			ctaText: 'Get started',
			ctaHref: '#',
			avatars: []
		},
		template: HeroCenteredInlineForm
	},
	{
		id: 'hero-search-with-tags',
		name: 'Hero Search with Category Tags',
		description: 'Centered hero with search bar and category tag filters for content discovery',
		icon: Layout,
		category: 'hero',
		variant: 'centered',
		previewImage: '/templates/hero-search-with-tags.png',
		thumbnailImage: '/templates/thumbnails/hero-search-with-tags.jpg',
		tags: ['hero', 'centered', 'search', 'tags', 'filters', 'blog', 'content'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Search Input',
			'Category Tags',
			'Decorative SVG Elements',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Blog Pages', 'Documentation', 'Knowledge Base', 'Content Hubs'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Insights',
			description: 'Stay in the know with insights from industry experts.',
			searchPlaceholder: 'Search article',
			categories: []
		},
		template: HeroSearchWithTags
	}
];
