<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Inbox } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface EmptyStateProps {
		icon?: any;
		title?: string;
		description?: string;
		actionText?: string;
		onAction?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('empty-state') || {};

	let {
		icon = DEFAULTS.icon || Inbox,
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		actionText = DEFAULTS.actionText,
		onAction = DEFAULTS.onAction
	}: EmptyStateProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardContent class="flex min-h-[400px] flex-col items-center justify-center p-12 text-center">
			<div class="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent">
				<svelte:component this={icon} class="size-8 text-muted-foreground" />
			</div>
			{#if title}
				<h3 class="mb-2 text-xl font-semibold text-foreground">{title}</h3>
			{/if}
			{#if description}
				<p class="mb-6 max-w-sm text-sm text-muted-foreground">{description}</p>
			{/if}
			{#if actionText && onAction}
				<Button onclick={onAction}>
					{actionText}
				</Button>
			{/if}
		</CardContent>
	</Card>
</div>

