<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Send, Paperclip, X } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface PromptWithFilesProps {
		placeholder?: string;
		onSubmit?: (value: string, files: File[]) => void;
	}

	const DEFAULTS = getTemplateDefaults('prompt-with-files') || {};

	let {
		placeholder = DEFAULTS.placeholder || 'Describe what you need...',
		onSubmit = DEFAULTS.onSubmit
	}: PromptWithFilesProps = $props();

	let value = $state('');
	let files = $state<File[]>([]);
	let fileInput: HTMLInputElement;

	function handleSubmit() {
		if ((value.trim() || files.length > 0) && onSubmit) {
			onSubmit(value, files);
			value = '';
			files = [];
		}
	}

	function handleFileSelect(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files) {
			files = [...files, ...Array.from(target.files)];
		}
	}

	function removeFile(index: number) {
		files = files.filter((_, i) => i !== index);
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
		{#if files.length > 0}
			<div class="mt-3 flex flex-wrap gap-2">
				{#each files as file, index}
					<div class="flex items-center gap-2 rounded bg-gray-100 px-3 py-1 text-sm dark:bg-neutral-700">
						<span class="max-w-[200px] truncate">{file.name}</span>
						<button type="button" onclick={() => removeFile(index)} class="hover:text-destructive">
							<X class="size-3" />
						</button>
					</div>
				{/each}
			</div>
		{/if}
		<div class="mt-4 flex items-center justify-between">
			<input
				type="file"
				multiple
				bind:this={fileInput}
				onchange={handleFileSelect}
				class="hidden"
			/>
			<Button variant="ghost" size="sm" onclick={() => fileInput?.click()}>
				<Paperclip class="mr-2 size-4" />
				Attach
			</Button>
			<Button onclick={handleSubmit} disabled={!value.trim() && files.length === 0}>
				<Send class="mr-2 size-4" />
				Send
			</Button>
		</div>
	</div>
</div>

