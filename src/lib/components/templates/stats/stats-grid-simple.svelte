<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatItem {
		value: string;
		label: string;
		description?: string;
	}

	interface StatsGridSimpleProps {
		title?: string;
		description?: string;
		stats?: StatItem[];
	}

	const DEFAULTS = getTemplateDefaults('stats-grid-simple') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		stats = DEFAULTS.stats || []
	}: StatsGridSimpleProps = $props();
</script>

<!-- Stats -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2
				class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200"
			>
				{title}
			</h2>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>
	{/if}

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<div class="text-center">
				<div class="text-4xl font-bold text-primary sm:text-5xl">
					{stat.value}
				</div>
				<p class="mt-2 text-lg font-medium text-gray-800 sm:mt-3 dark:text-neutral-200">
					{stat.label}
				</p>
				{#if stat.description}
					<p class="mt-1 text-sm text-muted-foreground">
						{stat.description}
					</p>
				{/if}
			</div>
		{/each}
	</div>
</div>
<!-- End Stats -->
