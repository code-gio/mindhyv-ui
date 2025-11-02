<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { ArrowUpRight, ArrowDownRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface KPIStat {
		label: string;
		value: string;
		change: number;
		icon: any;
	}

	interface StatsKPIProps {
		kpis?: KPIStat[];
	}

	const DEFAULTS = getTemplateDefaults('stats-kpi') || {};

	let { kpis = DEFAULTS.kpis || [] }: StatsKPIProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each kpis as kpi}
			<Card>
				<CardContent class="p-6">
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-muted-foreground">{kpi.label}</p>
							<p class="mt-2 text-3xl font-bold text-foreground">{kpi.value}</p>
							<div class={cn(
								'mt-2 flex items-center text-sm font-medium',
								kpi.change >= 0 ? 'text-green-600' : 'text-red-600'
							)}>
								{#if kpi.change >= 0}
									<ArrowUpRight class="mr-1 size-4" />
								{:else}
									<ArrowDownRight class="mr-1 size-4" />
								{/if}
								{Math.abs(kpi.change)}%
							</div>
						</div>
						<div class="rounded-lg bg-gray-100 p-3 dark:bg-neutral-800">
							<kpi.icon class="size-6 text-muted-foreground" />
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

