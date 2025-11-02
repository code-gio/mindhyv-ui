<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Badge } from '$lib/components/ui/badge';
	import { Send, Sparkles } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface PromptWithSuggestionsProps {
		placeholder?: string;
		suggestions?: string[];
		onSubmit?: (value: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('prompt-with-suggestions') || {};

	let {
		placeholder = DEFAULTS.placeholder || 'What would you like to create?',
		suggestions = DEFAULTS.suggestions || [],
		onSubmit = DEFAULTS.onSubmit
	}: PromptWithSuggestionsProps = $props();

	let value = $state('');

	function handleSubmit() {
		if (value.trim() && onSubmit) {
			onSubmit(value);
			value = '';
		}
	}

	function handleSuggestionClick(suggestion: string) {
		value = suggestion;
	}
</script>

<div class="mx-auto max-w-2xl px-4 py-10">
	<div class="space-y-4">
		<div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
			<Textarea
				bind:value
				{placeholder}
				rows={4}
				class="resize-none border-0 p-0 focus-visible:ring-0"
			/>
			<div class="mt-4 flex justify-end">
				<Button onclick={handleSubmit} disabled={!value.trim()}>
					<Sparkles class="mr-2 size-4" />
					Generate
				</Button>
			</div>
		</div>
		{#if suggestions.length > 0}
			<div>
				<p class="mb-2 text-sm text-muted-foreground">Try these:</p>
				<div class="flex flex-wrap gap-2">
					{#each suggestions as suggestion}
						<Badge
							variant="outline"
							class="cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700"
							onclick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion}
						</Badge>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

