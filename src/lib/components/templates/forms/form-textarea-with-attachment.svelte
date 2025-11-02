<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Paperclip } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FormTextareaWithAttachmentProps {
		title?: string;
		label?: string;
		placeholder?: string;
		submitText?: string;
		allowAttachments?: boolean;
	}

	const DEFAULTS = getTemplateDefaults('form-textarea-with-attachment') || {};

	let {
		title = DEFAULTS.title,
		label = DEFAULTS.label,
		placeholder = DEFAULTS.placeholder,
		submitText = DEFAULTS.submitText,
		allowAttachments = DEFAULTS.allowAttachments
	}: FormTextareaWithAttachmentProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-2xl">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<form class="space-y-4">
				<div>
					<Label for="message">{label}</Label>
					<Textarea
						id="message"
						placeholder={placeholder}
						rows={8}
						required
					/>
				</div>
				{#if allowAttachments}
					<div>
						<Label for="attachment" class="flex cursor-pointer items-center gap-x-2 text-sm">
							<Paperclip class="size-4" />
							Attach file
						</Label>
						<input
							id="attachment"
							type="file"
							class="mt-2 block w-full text-sm text-gray-500 file:me-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90 dark:text-neutral-400"
						/>
					</div>
				{/if}
				<div class="flex justify-end">
					<Button type="submit">
						{submitText}
					</Button>
				</div>
			</form>
		</CardContent>
	</Card>
</div>

