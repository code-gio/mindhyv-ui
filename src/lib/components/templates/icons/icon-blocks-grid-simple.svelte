<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface IconBlocksGridProps {
		title?: string;
		description?: string;
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-grid-simple') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		blocks = DEFAULTS.blocks || []
	}: IconBlocksGridProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-12 md:grid-cols-2">
		<div class="lg:w-3/4">
			<h2 class="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-primary-foreground">
				{title}
			</h2>
			<p class="mt-3 text-gray-800 dark:text-neutral-400">
				{description}
			</p>
		</div>
		<!-- End Col -->

		<div class="space-y-6 lg:space-y-10">
			{#each blocks as block}
				<!-- Icon Block -->
				<div class="flex gap-x-5 sm:gap-x-8">
					<span
						class="inline-flex size-[46px] shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm dark:border-neutral-700 dark:bg-primary dark:text-neutral-200"
					>
						<block.icon class="size-5 shrink-0" />
					</span>
					<div class="grow">
						<h3 class="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
							{block.title}
						</h3>
						<p class="mt-1 text-muted-foreground">
							{block.description}
						</p>
					</div>
				</div>
				<!-- End Icon Block -->
			{/each}
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->
