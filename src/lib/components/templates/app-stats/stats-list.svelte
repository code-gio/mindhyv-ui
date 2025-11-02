<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatItem {
		label: string;
		value: string;
	}

	interface StatsListProps {
		title?: string;
		stats?: StatItem[];
	}

	const DEFAULTS = getTemplateDefaults('stats-list') || {};

	let {
		title = DEFAULTS.title || 'Statistics',
		stats = DEFAULTS.stats || []
	}: StatsListProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<dl class="divide-y divide-border">
				{#each stats as stat}
					<div class="flex items-center justify-between py-3">
						<dt class="text-sm font-medium text-muted-foreground">{stat.label}</dt>
						<dd class="text-sm font-semibold text-foreground">{stat.value}</dd>
					</div>
				{/each}
			</dl>
		</CardContent>
	</Card>
</div>

