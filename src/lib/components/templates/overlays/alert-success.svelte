<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { CheckCircle2 } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface AlertSuccessProps {
		title?: string;
		description?: string;
	}

	const DEFAULTS = getTemplateDefaults('alert-success') || {};

	let {
		title = DEFAULTS.title || 'Success',
		description = DEFAULTS.description
	}: AlertSuccessProps = $props();
</script>

<div class="mx-auto max-w-2xl px-4 py-10">
	<Alert class="border-border bg-accent text-accent-foreground">
		<CheckCircle2 class="size-4" />
		<AlertTitle>{title}</AlertTitle>
		{#if description}
			<AlertDescription>{description}</AlertDescription>
		{/if}
	</Alert>
</div>

