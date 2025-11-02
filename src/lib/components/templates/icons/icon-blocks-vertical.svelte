<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface IconBlocksVerticalProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-vertical') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksVerticalProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each blocks as block}
			<!-- Icon Block -->
			<div class="flex h-full flex-col items-center justify-center rounded-lg border border-gray-200 p-4 text-center md:p-5 dark:border-neutral-700">
				<div class="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80">
					<block.icon class="size-6 shrink-0 text-primary-foreground" />
				</div>
				<div class="mt-3">
					<h3 class="text-lg font-semibold text-foreground">
						{block.title}
					</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						{block.description}
					</p>
				</div>
			</div>
			<!-- End Icon Block -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->

