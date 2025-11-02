<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CompactStat {
		label: string;
		value: string;
	}

	interface StatsGridCompactProps {
		stats?: CompactStat[];
	}

	const DEFAULTS = getTemplateDefaults('stats-grid-compact') || {};

	let { stats = DEFAULTS.stats || [] }: StatsGridCompactProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
				<p class="text-sm text-muted-foreground">{stat.label}</p>
				<p class="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
			</div>
		{/each}
	</div>
</div>

