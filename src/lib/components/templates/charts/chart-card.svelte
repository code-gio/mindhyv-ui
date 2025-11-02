<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { BarChart3 } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ChartCardProps {
		title?: string;
		description?: string;
		value?: string;
		change?: string;
	}

	const DEFAULTS = getTemplateDefaults('chart-card') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		value = DEFAULTS.value,
		change = DEFAULTS.change
	}: ChartCardProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-x-2">
				<BarChart3 class="size-5" />
				{title}
			</CardTitle>
			{#if description}
				<CardDescription>{description}</CardDescription>
			{/if}
		</CardHeader>
		<CardContent>
			<div class="space-y-4">
				<div class="text-3xl font-bold">{value}</div>
				{#if change}
					<p class="text-sm text-muted-foreground">{change}</p>
				{/if}
				<!-- Chart placeholder -->
				<div class="h-[200px] w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
			</div>
		</CardContent>
	</Card>
</div>

