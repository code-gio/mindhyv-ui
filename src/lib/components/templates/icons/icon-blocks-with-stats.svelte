<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof LucideIcon;
		stat: string;
		title: string;
		description: string;
	}

	interface IconBlocksWithStatsProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-with-stats') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksWithStatsProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each blocks as block}
			<!-- Stats -->
			<div class="flex flex-col rounded-xl border border-gray-200 bg-white p-4 text-center md:p-5 dark:border-neutral-700 dark:bg-primary">
				<div class="flex items-center justify-center gap-x-2">
					<block.icon class="size-6 shrink-0 text-muted-foreground" />
					<div class="text-3xl font-semibold text-gray-800 sm:text-4xl dark:text-neutral-200">
						{block.stat}
					</div>
				</div>
				<div class="mt-2 sm:mt-3">
					<h3 class="text-lg font-semibold text-foreground">
						{block.title}
					</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						{block.description}
					</p>
				</div>
			</div>
			<!-- End Stats -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->

