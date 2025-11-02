<script lang="ts">
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface StatItem {
		icon: typeof LucideIcon;
		value: string;
		label: string;
	}

	interface StatsWithIconsProps {
		stats?: StatItem[];
	}

	const DEFAULTS = getTemplateDefaults('stats-with-icons') || {};

	let { stats = DEFAULTS.stats || [] }: StatsWithIconsProps = $props();
</script>

<!-- Stats -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each stats as stat}
			<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-700 dark:bg-primary">
				<div class="flex items-center gap-x-3">
					<stat.icon class="size-8 text-primary" />
					<div>
						<div class="text-3xl font-semibold text-foreground">
							{stat.value}
						</div>
						<p class="text-sm text-muted-foreground">
							{stat.label}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<!-- End Stats -->

