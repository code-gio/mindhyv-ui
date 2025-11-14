import { DollarSign } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import pricing components
import PricingCardsToggle from './pricing-cards-toggle.svelte';
import PricingBorderedGradient from './pricing-bordered-gradient.svelte';
import PricingTwoCards from './pricing-two-cards.svelte';
import PricingHeaderStyle from './pricing-header-style.svelte';

/**
 * Pricing component mapping for dynamic component loading
 */
export const PRICING_COMPONENTS: Record<string, TemplateComponent> = {
	'pricing-cards-toggle': PricingCardsToggle as TemplateComponent,
	'pricing-bordered-gradient': PricingBorderedGradient as TemplateComponent,
	'pricing-two-cards': PricingTwoCards as TemplateComponent,
	'pricing-header-style': PricingHeaderStyle as TemplateComponent
};

/**
 * Pricing templates registry with metadata and default props
 */
export const PRICING_REGISTRY: Template[] = [
	{
		id: 'pricing-cards-toggle',
		name: 'Pricing Cards with Toggle',
		description: '4-tier pricing with monthly/annual toggle and comparison tables',
		icon: DollarSign,
		category: 'pricing',
		variant: 'default',
		previewImage: '/templates/pricing-cards-toggle.png',
		thumbnailImage: '/templates/thumbnails/pricing-cards-toggle.jpg',
		tags: ['pricing', 'toggle', 'comparison', '4-tier', 'cards'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Monthly/Annual Toggle',
			'4 Pricing Tiers',
			'Popular Badge',
			'Feature Lists',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['SaaS Pricing', 'Subscription Services', 'Product Tiers'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Pricing',
			description: 'Whatever your status, our offers evolve according to your needs.',
			monthlyLabel: 'Monthly',
			annualLabel: 'Annually',
			annualSavings: 'Save up to 10%',
			plans: [
				{
					name: 'Free',
					price: 'Free',
					description: 'Forever free',
					features: ['1 user', 'Plan features', 'Product support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				},
				{
					name: 'Startup',
					price: 39,
					priceAnnual: 29,
					description: 'All the basics for starting a new business',
					features: ['2 users', 'Plan features', 'Product support'],
					ctaText: 'Sign up',
					ctaHref: '#',
					isPopular: true
				},
				{
					name: 'Team',
					price: 89,
					priceAnnual: 69,
					description: 'Everything you need for a growing business',
					features: ['5 users', 'Advanced features', 'Priority support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				},
				{
					name: 'Enterprise',
					price: 149,
					priceAnnual: 119,
					description: 'Advanced features for scaling businesses',
					features: ['Unlimited users', 'Enterprise features', 'Dedicated support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				}
			],
			comparisonTitle: 'Compare plans',
			comparisonCategories: [
				{
					name: 'Financial data',
					features: [
						{
							name: 'Open/High/Low/Close',
							plans: { Free: true, Startup: true, Team: true, Enterprise: true }
						},
						{
							name: 'Price-volume difference indicator',
							plans: { Free: false, Startup: true, Team: true, Enterprise: true }
						}
					]
				},
				{
					name: 'On-chain data',
					features: [
						{
							name: 'Network growth',
							plans: { Free: true, Startup: false, Team: true, Enterprise: true }
						},
						{
							name: 'Average token age consumed',
							plans: { Free: true, Startup: false, Team: true, Enterprise: true }
						},
						{
							name: 'Exchange flow',
							plans: { Free: false, Startup: false, Team: true, Enterprise: true }
						},
						{
							name: 'Total ERC20 exchange funds flow',
							plans: { Free: false, Startup: false, Team: true, Enterprise: true }
						},
						{
							name: 'Transaction volume',
							plans: { Free: true, Startup: true, Team: true, Enterprise: true }
						},
						{
							name: 'Total circulation (beta)',
							plans: { Free: false, Startup: true, Team: true, Enterprise: true }
						},
						{
							name: 'Velocity of tokens (beta)',
							plans: { Free: true, Startup: true, Team: false, Enterprise: true }
						},
						{
							name: 'ETH gas used',
							plans: { Free: false, Startup: true, Team: true, Enterprise: true }
						}
					]
				},
				{
					name: 'Social data',
					features: [
						{
							name: 'Dev activity',
							plans: { Free: false, Startup: true, Team: false, Enterprise: true }
						},
						{
							name: 'Topic search',
							plans: { Free: true, Startup: true, Team: true, Enterprise: true }
						},
						{
							name: 'Relative social dominance',
							plans: { Free: false, Startup: false, Team: true, Enterprise: true }
						},
						{
							name: 'Total social volume',
							plans: { Free: true, Startup: true, Team: false, Enterprise: true }
						}
					]
				}
			]
		},
		template: PricingCardsToggle
	},
	{
		id: 'pricing-bordered-gradient',
		name: 'Pricing with Bordered Gradient',
		description: '4-tier pricing with radial gradient borders and centered layout',
		icon: DollarSign,
		category: 'pricing',
		variant: 'default',
		previewImage: '/templates/pricing-bordered-gradient.png',
		thumbnailImage: '/templates/thumbnails/pricing-bordered-gradient.jpg',
		tags: ['pricing', 'gradient', 'bordered', '4-tier'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Radial Gradient Borders',
			'4 Pricing Tiers',
			'Centered Layout',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['SaaS Pricing', 'Premium Services', 'Subscription Plans'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Find the right plan for your team',
			description: 'Pay as you go service, cancel anytime.',
			plans: [
				{
					name: 'Free',
					price: 'Free',
					features: ['1 user', 'Plan features', 'Product support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				},
				{
					name: 'Startup',
					price: 39,
					features: ['2 users', 'Plan features', 'Product support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				},
				{
					name: 'Team',
					price: 89,
					features: ['5 users', 'Advanced features', 'Priority support'],
					ctaText: 'Sign up',
					ctaHref: '#'
				},
				{
					name: 'Enterprise',
					price: 149,
					features: ['Unlimited users', 'Enterprise features', 'Dedicated support'],
					ctaText: 'Contact us',
					ctaHref: '#'
				}
			]
		},
		template: PricingBorderedGradient
	},
	{
		id: 'pricing-two-cards',
		name: 'Pricing with 2 Cards',
		description: '2-tier pricing comparison with detailed feature lists',
		icon: DollarSign,
		category: 'pricing',
		variant: 'default',
		previewImage: '/templates/pricing-two-cards.png',
		thumbnailImage: '/templates/thumbnails/pricing-two-cards.jpg',
		tags: ['pricing', '2-tier', 'comparison', 'features'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'2 Plans',
			'Feature Comparison',
			'Popular Badge',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Simple Pricing', 'Free vs Pro', 'Basic Comparison'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Pricing',
			description: 'Choose the perfect plan for your needs.',
			plans: [
				{
					name: 'Free',
					price: 0,
					period: 'Free forever',
					description: 'Perfect for trying out our platform',
					features: [
						{ name: '1 user', included: true },
						{ name: 'Basic features', included: true },
						{ name: 'Community support', included: true },
						{ name: 'Advanced analytics', included: false }
					],
					ctaText: 'Get started',
					ctaHref: '#'
				},
				{
					name: 'Pro',
					price: 39,
					period: 'per month',
					description: 'For professionals and growing teams',
					features: [
						{ name: 'Unlimited users', included: true },
						{ name: 'All features', included: true },
						{ name: 'Priority support', included: true },
						{ name: 'Advanced analytics', included: true }
					],
					ctaText: 'Start free trial',
					ctaHref: '#',
					isPopular: true
				}
			]
		},
		template: PricingTwoCards
	},
	{
		id: 'pricing-header-style',
		name: 'Pricing with Header Style',
		description: 'Pricing cards with distinct header styling and feature lists',
		icon: DollarSign,
		category: 'pricing',
		variant: 'default',
		previewImage: '/templates/pricing-header-style.png',
		thumbnailImage: '/templates/thumbnails/pricing-header-style.jpg',
		tags: ['pricing', 'header-style', 'cards', 'features'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Distinct Header Style',
			'Feature Lists',
			'Multiple Tiers',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['SaaS Pricing', 'Product Tiers', 'Service Plans'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Pricing',
			description: 'Flexible pricing for teams of all sizes',
			plans: [
				{
					name: 'Starter',
					price: 19,
					period: 'per month',
					description: 'Essential features for individuals',
					features: ['1 user', '10 projects', 'Basic support', '1GB storage'],
					ctaText: 'Get started',
					ctaHref: '#'
				},
				{
					name: 'Professional',
					price: 49,
					period: 'per month',
					description: 'Advanced features for professionals',
					features: ['5 users', 'Unlimited projects', 'Priority support', '10GB storage'],
					ctaText: 'Get started',
					ctaHref: '#',
					isPopular: true
				},
				{
					name: 'Enterprise',
					price: 99,
					period: 'per month',
					description: 'Everything for large teams',
					features: [
						'Unlimited users',
						'Unlimited projects',
						'Dedicated support',
						'Unlimited storage'
					],
					ctaText: 'Contact sales',
					ctaHref: '#'
				}
			]
		},
		template: PricingHeaderStyle
	}
];
