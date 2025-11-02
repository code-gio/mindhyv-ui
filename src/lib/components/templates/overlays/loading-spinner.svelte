<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface LoadingSpinnerProps {
		message?: string;
	}

	const DEFAULTS = getTemplateDefaults('loading-spinner') || {};

	let { message = DEFAULTS.message }: LoadingSpinnerProps = $props();
</script>

<div class="mx-auto flex max-w-340 flex-col items-center justify-center px-4 py-20">
	<div class="size-12 animate-spin rounded-full border-4 border-border border-t-primary"></div>
	{#if message}
		<p class="mt-4 text-sm text-muted-foreground">{message}</p>
	{/if}
</div>

