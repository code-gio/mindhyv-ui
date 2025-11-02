import { FileInput } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

// Import form components
import FormLoginSimple from './form-login-simple.svelte';
import FormSignupSimple from './form-signup-simple.svelte';
import FormResetPassword from './form-reset-password.svelte';
import FormFeedbackSimple from './form-feedback-simple.svelte';
import FormFeedbackRating from './form-feedback-rating.svelte';
import FormFeedbackDetailed from './form-feedback-detailed.svelte';
import FormSubscribeInline from './form-subscribe-inline.svelte';
import FormSubscribeCard from './form-subscribe-card.svelte';
import FormSubscribeCentered from './form-subscribe-centered.svelte';
import FormTextareaSimple from './form-textarea-simple.svelte';
import FormTextareaWithAttachment from './form-textarea-with-attachment.svelte';
import FormTextareaWithCounter from './form-textarea-with-counter.svelte';

/**
 * Forms component mapping for dynamic component loading
 */
export const FORMS_COMPONENTS: Record<string, TemplateComponent> = {
	'form-login-simple': FormLoginSimple as TemplateComponent,
	'form-signup-simple': FormSignupSimple as TemplateComponent,
	'form-reset-password': FormResetPassword as TemplateComponent,
	'form-feedback-simple': FormFeedbackSimple as TemplateComponent,
	'form-feedback-rating': FormFeedbackRating as TemplateComponent,
	'form-feedback-detailed': FormFeedbackDetailed as TemplateComponent,
	'form-subscribe-inline': FormSubscribeInline as TemplateComponent,
	'form-subscribe-card': FormSubscribeCard as TemplateComponent,
	'form-subscribe-centered': FormSubscribeCentered as TemplateComponent,
	'form-textarea-simple': FormTextareaSimple as TemplateComponent,
	'form-textarea-with-attachment': FormTextareaWithAttachment as TemplateComponent,
	'form-textarea-with-counter': FormTextareaWithCounter as TemplateComponent
};

/**
 * Forms templates registry with metadata and default props
 */
export const FORMS_REGISTRY: Template[] = [
	{
		id: 'form-login-simple',
		name: 'Login Form Simple',
		description: 'Simple login form with email and password',
		icon: FileInput,
		category: 'forms',
		variant: 'auth',
		previewImage: '/templates/form-login-simple.png',
		thumbnailImage: '/templates/thumbnails/form-login-simple.jpg',
		tags: ['form', 'login', 'auth', 'authentication'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Remember Me',
			'Forgot Password Link',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Authentication', 'User Login', 'Member Access'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Sign in to your account',
			submitText: 'Sign in',
			forgotPasswordLink: '#',
			signupLink: '#'
		},
		template: FormLoginSimple
	},
	{
		id: 'form-signup-simple',
		name: 'Signup Form Simple',
		description: 'Simple registration form with validation',
		icon: FileInput,
		category: 'forms',
		variant: 'auth',
		previewImage: '/templates/form-signup-simple.png',
		thumbnailImage: '/templates/thumbnails/form-signup-simple.jpg',
		tags: ['form', 'signup', 'register', 'authentication'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Password Confirmation',
			'Terms Checkbox',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['User Registration', 'Account Creation', 'Sign Up'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Create an account',
			submitText: 'Sign up',
			loginLink: '#'
		},
		template: FormSignupSimple
	},
	{
		id: 'form-reset-password',
		name: 'Reset Password Form',
		description: 'Password reset request form',
		icon: FileInput,
		category: 'forms',
		variant: 'auth',
		previewImage: '/templates/form-reset-password.png',
		thumbnailImage: '/templates/thumbnails/form-reset-password.jpg',
		tags: ['form', 'password', 'reset', 'recovery'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Email Input',
			'Helper Text',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Password Recovery', 'Account Access', 'Forgot Password'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Reset your password',
			description: 'Enter your email to receive a reset link',
			submitText: 'Send reset link',
			backToLoginLink: '#'
		},
		template: FormResetPassword
	},
	{
		id: 'form-feedback-simple',
		name: 'Feedback Form Simple',
		description: 'Simple feedback form with name, email, and message',
		icon: FileInput,
		category: 'forms',
		variant: 'feedback',
		previewImage: '/templates/form-feedback-simple.png',
		thumbnailImage: '/templates/thumbnails/form-feedback-simple.jpg',
		tags: ['form', 'feedback', 'contact', 'message'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Multi-field Form',
			'Textarea',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Customer Feedback', 'Contact Forms', 'Support Requests'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Send us your feedback',
			description: 'We value your input',
			submitText: 'Submit feedback'
		},
		template: FormFeedbackSimple
	},
	{
		id: 'form-feedback-rating',
		name: 'Feedback Form with Rating',
		description: 'Feedback form with star rating system',
		icon: FileInput,
		category: 'forms',
		variant: 'feedback',
		previewImage: '/templates/form-feedback-rating.png',
		thumbnailImage: '/templates/thumbnails/form-feedback-rating.jpg',
		tags: ['form', 'feedback', 'rating', 'stars'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Star Rating',
			'Interactive',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Product Reviews', 'Service Feedback', 'Customer Satisfaction'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Rate your experience',
			submitText: 'Submit feedback'
		},
		template: FormFeedbackRating
	},
	{
		id: 'form-feedback-detailed',
		name: 'Feedback Form Detailed',
		description: 'Detailed feedback form with category selection',
		icon: FileInput,
		category: 'forms',
		variant: 'feedback',
		previewImage: '/templates/form-feedback-detailed.png',
		thumbnailImage: '/templates/thumbnails/form-feedback-detailed.jpg',
		tags: ['form', 'feedback', 'detailed', 'categories'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Category Selection',
			'Subject Field',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Support Tickets', 'Detailed Feedback', 'Contact Forms'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Contact Support',
			description: 'Get help from our team',
			submitText: 'Submit',
			categories: ['General', 'Bug Report', 'Feature Request', 'Other']
		},
		template: FormFeedbackDetailed
	},
	{
		id: 'form-subscribe-inline',
		name: 'Subscribe Form Inline',
		description: 'Inline newsletter subscribe form',
		icon: FileInput,
		category: 'forms',
		variant: 'subscribe',
		previewImage: '/templates/form-subscribe-inline.png',
		thumbnailImage: '/templates/thumbnails/form-subscribe-inline.jpg',
		tags: ['form', 'subscribe', 'newsletter', 'email'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Inline Layout',
			'Simple Design',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Newsletter Signup', 'Email Collection', 'Subscriptions'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Subscribe to our newsletter',
			description: 'Get the latest updates delivered to your inbox',
			placeholder: 'Enter your email',
			buttonText: 'Subscribe'
		},
		template: FormSubscribeInline
	},
	{
		id: 'form-subscribe-card',
		name: 'Subscribe Form Card',
		description: 'Card-style newsletter subscribe form',
		icon: FileInput,
		category: 'forms',
		variant: 'subscribe',
		previewImage: '/templates/form-subscribe-card.png',
		thumbnailImage: '/templates/thumbnails/form-subscribe-card.jpg',
		tags: ['form', 'subscribe', 'card', 'newsletter'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Card Layout',
			'Privacy Notice',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Newsletter Cards', 'Email Signup', 'Subscription Forms'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Stay updated',
			description: 'Subscribe to receive our latest updates',
			placeholder: 'Enter your email',
			buttonText: 'Subscribe'
		},
		template: FormSubscribeCard
	},
	{
		id: 'form-subscribe-centered',
		name: 'Subscribe Form Centered',
		description: 'Centered subscribe form with gradient background',
		icon: FileInput,
		category: 'forms',
		variant: 'subscribe',
		previewImage: '/templates/form-subscribe-centered.png',
		thumbnailImage: '/templates/thumbnails/form-subscribe-centered.jpg',
		tags: ['form', 'subscribe', 'centered', 'gradient'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Gradient Background',
			'Centered Layout',
			'Icon',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Hero Subscriptions', 'Landing Pages', 'Marketing'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Join our newsletter',
			description: 'Get exclusive updates and offers',
			placeholder: 'Enter your email',
			buttonText: 'Subscribe'
		},
		template: FormSubscribeCentered
	},
	{
		id: 'form-textarea-simple',
		name: 'Textarea Form Simple',
		description: 'Simple textarea form for messages',
		icon: FileInput,
		category: 'forms',
		variant: 'textarea',
		previewImage: '/templates/form-textarea-simple.png',
		thumbnailImage: '/templates/thumbnails/form-textarea-simple.jpg',
		tags: ['form', 'textarea', 'message', 'simple'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Large Textarea',
			'Helper Text',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Comments', 'Messages', 'Feedback'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Leave a message',
			label: 'Your message',
			placeholder: 'Type your message here...',
			submitText: 'Send message',
			helperText: 'Your message will be reviewed'
		},
		template: FormTextareaSimple
	},
	{
		id: 'form-textarea-with-attachment',
		name: 'Textarea Form with Attachment',
		description: 'Textarea form with file upload capability',
		icon: FileInput,
		category: 'forms',
		variant: 'textarea',
		previewImage: '/templates/form-textarea-with-attachment.png',
		thumbnailImage: '/templates/thumbnails/form-textarea-with-attachment.jpg',
		tags: ['form', 'textarea', 'attachment', 'upload'],
		isPro: false,
		complexity: 'moderate',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'File Upload',
			'Textarea',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Support Tickets', 'Bug Reports', 'File Submissions'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: {
			title: 'Submit your request',
			label: 'Description',
			placeholder: 'Describe your issue or request...',
			submitText: 'Submit',
			allowAttachments: true
		},
		template: FormTextareaWithAttachment
	},
	{
		id: 'form-textarea-with-counter',
		name: 'Textarea Form with Counter',
		description: 'Textarea form with character counter',
		icon: FileInput,
		category: 'forms',
		variant: 'textarea',
		previewImage: '/templates/form-textarea-with-counter.png',
		thumbnailImage: '/templates/thumbnails/form-textarea-with-counter.jpg',
		tags: ['form', 'textarea', 'counter', 'limit'],
		isPro: false,
		complexity: 'simple',
		features: [
			'Responsive Design',
			'Dark Mode Support',
			'Character Counter',
			'Max Length',
			'TypeScript Support'
		],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Comments', 'Reviews', 'Limited Text Input'],
		dependencies: ['shadcn-svelte'],
		defaultProps: {
			title: 'Write a review',
			label: 'Your review',
			placeholder: 'Share your thoughts...',
			submitText: 'Submit review',
			maxLength: 500
		},
		template: FormTextareaWithCounter
	}
];

