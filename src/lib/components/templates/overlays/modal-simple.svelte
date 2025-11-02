<script lang="ts">
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ModalSimpleProps {
		open?: boolean;
		title?: string;
		description?: string;
		onClose?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('modal-simple') || {};

	let {
		open = DEFAULTS.open || false,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		onClose = DEFAULTS.onClose
	}: ModalSimpleProps = $props();
</script>

<Dialog {open} onOpenChange={onClose}>
	<DialogContent>
		<DialogHeader>
			{#if title}
				<DialogTitle>{title}</DialogTitle>
			{/if}
			{#if description}
				<DialogDescription>{description}</DialogDescription>
			{/if}
		</DialogHeader>
		<div class="py-4">
			<p class="text-sm text-muted-foreground">Modal content goes here</p>
		</div>
		<div class="flex justify-end gap-2">
			<Button variant="outline" onclick={onClose}>Cancel</Button>
			<Button>Confirm</Button>
		</div>
	</DialogContent>
</Dialog>

