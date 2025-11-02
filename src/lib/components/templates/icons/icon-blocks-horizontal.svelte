<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface IconBlocksHorizontalProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-horizontal') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksHorizontalProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
		{#each blocks as block}
			<!-- Card -->
			<div class="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-700 dark:bg-primary">
				<div class="flex items-center gap-x-4">
					<div class="inline-flex size-[62px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-tl from-primary to-primary/80">
						<block.icon class="size-6 shrink-0 text-primary-foreground" />
					</div>
					<div class="grow">
						<h3 class="text-lg font-semibold text-foreground">
							{block.title}
						</h3>
					</div>
				</div>
				<p class="mt-3 text-muted-foreground">
					{block.description}
				</p>
			</div>
			<!-- End Card -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->

