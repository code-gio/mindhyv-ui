<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface GridItem {
		id: string;
		title: string;
		description?: string;
		image?: string;
	}

	interface GridViewProps {
		title?: string;
		items?: GridItem[];
		columns?: 2 | 3 | 4;
	}

	const DEFAULTS = getTemplateDefaults('grid-view') || {};

	let {
		title = DEFAULTS.title,
		items = DEFAULTS.items || [],
		columns = DEFAULTS.columns || 3
	}: GridViewProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<h2 class="mb-6 text-2xl font-bold text-foreground">{title}</h2>
	{/if}
	<div class={cn(
		'grid gap-6',
		columns === 2 && 'sm:grid-cols-2',
		columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
		columns === 4 && 'sm:grid-cols-2 lg:grid-cols-4'
	)}>
		{#each items as item}
			<Card>
				{#if item.image}
					<img src={item.image} alt={item.title} class="h-48 w-full rounded-t-lg object-cover" />
				{/if}
				<CardHeader>
					<CardTitle>{item.title}</CardTitle>
				</CardHeader>
				{#if item.description}
					<CardContent>
						<p class="text-sm text-muted-foreground">{item.description}</p>
					</CardContent>
				{/if}
			</Card>
		{/each}
	</div>
</div>

