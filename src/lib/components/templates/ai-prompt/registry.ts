import { Sparkles } from '@lucide/svelte/icons';
import type { TemplateComponent, Template } from '../types';

import PromptInputSimple from './prompt-input-simple.svelte';
import PromptChat from './prompt-chat.svelte';
import PromptWithSuggestions from './prompt-with-suggestions.svelte';
import PromptWithFiles from './prompt-with-files.svelte';

export const AI_PROMPT_COMPONENTS: Record<string, TemplateComponent> = {
	'prompt-input-simple': PromptInputSimple as TemplateComponent,
	'prompt-chat': PromptChat as TemplateComponent,
	'prompt-with-suggestions': PromptWithSuggestions as TemplateComponent,
	'prompt-with-files': PromptWithFiles as TemplateComponent
};

export const AI_PROMPT_REGISTRY: Template[] = [
	{
		id: 'prompt-input-simple',
		name: 'Prompt Input Simple',
		description: 'Simple AI prompt input',
		icon: Sparkles,
		category: 'ai-prompt',
		variant: 'simple',
		previewImage: '/templates/prompt-input-simple.png',
		thumbnailImage: '/templates/thumbnails/prompt-input-simple.jpg',
		tags: ['ai', 'prompt', 'input'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Textarea Input', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['AI Chat', 'Content Generation', 'AI Tools'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { placeholder: 'Type your message...' },
		template: PromptInputSimple
	},
	{
		id: 'prompt-chat',
		name: 'Prompt Chat',
		description: 'Chat interface for AI conversations',
		icon: Sparkles,
		category: 'ai-prompt',
		variant: 'chat',
		previewImage: '/templates/prompt-chat.png',
		thumbnailImage: '/templates/thumbnails/prompt-chat.jpg',
		tags: ['ai', 'chat', 'conversation'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'Message History', 'Real-time Chat', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['AI Chatbots', 'Virtual Assistants', 'Support Chat'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { messages: [] },
		template: PromptChat
	},
	{
		id: 'prompt-with-suggestions',
		name: 'Prompt with Suggestions',
		description: 'Prompt input with suggestion chips',
		icon: Sparkles,
		category: 'ai-prompt',
		variant: 'suggestions',
		previewImage: '/templates/prompt-with-suggestions.png',
		thumbnailImage: '/templates/thumbnails/prompt-with-suggestions.jpg',
		tags: ['ai', 'prompt', 'suggestions'],
		isPro: false,
		complexity: 'simple',
		features: ['Responsive Design', 'Dark Mode Support', 'Suggestions', 'Quick Actions', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['AI Tools', 'Content Generation', 'Quick Prompts'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { placeholder: 'What would you like to create?', suggestions: [] },
		template: PromptWithSuggestions
	},
	{
		id: 'prompt-with-files',
		name: 'Prompt with Files',
		description: 'Prompt input with file attachment',
		icon: Sparkles,
		category: 'ai-prompt',
		variant: 'files',
		previewImage: '/templates/prompt-with-files.png',
		thumbnailImage: '/templates/thumbnails/prompt-with-files.jpg',
		tags: ['ai', 'prompt', 'files', 'upload'],
		isPro: false,
		complexity: 'moderate',
		features: ['Responsive Design', 'Dark Mode Support', 'File Upload', 'Multi-file', 'TypeScript Support'],
		darkModeSupport: true,
		responsive: ['mobile', 'tablet', 'desktop'],
		useCases: ['Document Analysis', 'Image AI', 'File Processing'],
		dependencies: ['lucide-svelte', 'shadcn-svelte'],
		defaultProps: { placeholder: 'Describe what you need...' },
		template: PromptWithFiles
	}
];

