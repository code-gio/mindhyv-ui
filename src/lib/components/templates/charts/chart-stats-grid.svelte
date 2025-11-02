<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Activity, TrendingUp, Users, DollarSign } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ChartStat {
		title: string;
		value: string;
		icon: any;
		trend?: string;
	}

	interface ChartStatsGridProps {
		stats?: ChartStat[];
	}

	const DEFAULTS = getTemplateDefaults('chart-stats-grid') || {};

	let {
		stats = DEFAULTS.stats || []
	}: ChartStatsGridProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<Card>
				<CardHeader class="flex flex-row items-center justify-between pb-2">
					<CardTitle class="text-sm font-medium">{stat.title}</CardTitle>
					<stat.icon class="size-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{stat.value}</div>
					{#if stat.trend}
						<p class="text-xs text-muted-foreground">{stat.trend}</p>
					{/if}
					<!-- Mini chart placeholder -->
					<div class="mt-3 h-[40px] w-full rounded bg-gray-100 dark:bg-neutral-800"></div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

