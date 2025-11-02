<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ComparisonStat {
		label: string;
		current: string;
		previous: string;
	}

	interface StatsComparisonProps {
		title?: string;
		stats?: ComparisonStat[];
	}

	const DEFAULTS = getTemplateDefaults('stats-comparison') || {};

	let {
		title = DEFAULTS.title || 'Comparison',
		stats = DEFAULTS.stats || []
	}: StatsComparisonProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead class="border-b border-border">
						<tr>
							<th class="pb-3 text-start text-sm font-medium text-muted-foreground">Metric</th>
							<th class="pb-3 text-end text-sm font-medium text-muted-foreground">Current</th>
							<th class="pb-3 text-end text-sm font-medium text-muted-foreground">Previous</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each stats as stat}
							<tr>
								<td class="py-3 text-sm text-foreground">{stat.label}</td>
								<td class="py-3 text-end text-sm font-semibold text-foreground">{stat.current}</td>
								<td class="py-3 text-end text-sm text-muted-foreground">{stat.previous}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</CardContent>
	</Card>
</div>

