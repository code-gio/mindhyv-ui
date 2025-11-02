<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Send } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface PromptInputSimpleProps {
		placeholder?: string;
		onSubmit?: (value: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('prompt-input-simple') || {};

	let {
		placeholder = DEFAULTS.placeholder || 'Type your message...',
		onSubmit = DEFAULTS.onSubmit
	}: PromptInputSimpleProps = $props();

	let value = $state('');

	function handleSubmit() {
		if (value.trim() && onSubmit) {
			onSubmit(value);
			value = '';
		}
	}
</script>

<div class="mx-auto max-w-2xl px-4 py-10">
	<div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
		<Textarea
			bind:value
			{placeholder}
			rows={4}
			class="resize-none border-0 p-0 focus-visible:ring-0"
		/>
		<div class="mt-4 flex justify-end">
			<Button onclick={handleSubmit} disabled={!value.trim()}>
				<Send class="mr-2 size-4" />
				Send
			</Button>
		</div>
	</div>
</div>

