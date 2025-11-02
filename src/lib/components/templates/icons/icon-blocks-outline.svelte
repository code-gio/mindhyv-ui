<script lang="ts">
	import { ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as IconType } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof IconType;
		title: string;
		description: string;
		linkText?: string;
		linkHref?: string;
	}

	interface IconBlocksOutlineProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-outline') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksOutlineProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each blocks as block}
			<!-- Icon Block -->
			<a
				class="group flex gap-y-6 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-white/10"
				href={block.linkHref || '#'}
			>
				<block.icon class="mt-0.5 size-8 shrink-0 text-foreground" />
				<div class="ms-5 sm:ms-8">
					<h3 class="text-base font-semibold text-gray-800 sm:text-lg dark:text-neutral-200">
						{block.title}
					</h3>
					<p class="mt-1 text-muted-foreground">
						{block.description}
					</p>
					{#if block.linkText}
						<p
							class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-foreground"
						>
							{block.linkText}
							<ChevronRight
								class="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1"
							/>
						</p>
					{/if}
				</div>
			</a>
			<!-- End Icon Block -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->
