<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatProgress {
		label: string;
		value: number;
		max: number;
	}

	interface StatsProgressProps {
		title?: string;
		stats?: StatProgress[];
	}

	const DEFAULTS = getTemplateDefaults('stats-progress') || {};

	let {
		title = DEFAULTS.title || 'Progress',
		stats = DEFAULTS.stats || []
	}: StatsProgressProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#each stats as stat}
				<div>
					<div class="mb-2 flex items-center justify-between">
						<span class="text-sm font-medium text-muted-foreground">{stat.label}</span>
						<span class="text-sm font-semibold text-foreground">
							{stat.value} / {stat.max}
						</span>
					</div>
					<Progress value={(stat.value / stat.max) * 100} />
				</div>
			{/each}
		</CardContent>
	</Card>
</div>

