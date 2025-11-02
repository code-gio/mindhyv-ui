<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as IconType } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof IconType;
		title: string;
		description: string;
		iconColor?: string;
	}

	interface IconBlocksBrandColorProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-brand-color') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksBrandColorProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
		{#each blocks as block}
			<!-- Icon Block -->
			<div>
				<div class="relative flex size-12 items-center justify-center">
					<div class="absolute h-full w-full rounded-lg bg-gray-100 dark:bg-white/10"></div>
					<block.icon
						class={cn('relative size-6', block.iconColor || 'text-foreground')}
					/>
				</div>
				<div class="mt-5">
					<h3 class="text-lg font-semibold text-foreground">
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
</div>
<!-- End Icon Blocks -->
