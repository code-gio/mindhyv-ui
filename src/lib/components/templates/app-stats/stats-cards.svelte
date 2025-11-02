<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { TrendingUp, TrendingDown } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatCard {
		title: string;
		value: string;
		change: number;
		icon: any;
	}

	interface StatsCardsProps {
		stats?: StatCard[];
	}

	const DEFAULTS = getTemplateDefaults('stats-cards') || {};

	let { stats = DEFAULTS.stats || [] }: StatsCardsProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">{stat.title}</CardTitle>
					<stat.icon class="size-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{stat.value}</div>
					<p class={cn(
						'flex items-center text-xs',
						stat.change >= 0 ? 'text-green-600' : 'text-red-600'
					)}>
						{#if stat.change >= 0}
							<TrendingUp class="mr-1 size-3" />
						{:else}
							<TrendingDown class="mr-1 size-3" />
						{/if}
						{Math.abs(stat.change)}% from last month
					</p>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

