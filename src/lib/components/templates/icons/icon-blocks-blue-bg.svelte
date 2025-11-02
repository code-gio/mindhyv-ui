<script lang="ts">
	import { Smartphone, GitBranch, Book, MessageCircle, ChevronRight } from '@lucide/svelte/icons';
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

	interface IconBlocksProps {
		blocks?: IconBlock[];
		columns?: number;
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-blue-bg') || {};

	let { blocks = DEFAULTS.blocks || [], columns = DEFAULTS.columns || 4 }: IconBlocksProps =
		$props();

	const gridCols = $derived(() => {
		const colMap: Record<number, string> = {
			2: 'sm:grid-cols-2',
			3: 'sm:grid-cols-2 lg:grid-cols-3',
			4: 'sm:grid-cols-2 lg:grid-cols-4'
		};
		return colMap[columns] || 'sm:grid-cols-2 lg:grid-cols-4';
	});
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class={cn('grid items-center gap-2', gridCols())}>
		{#each blocks as block}
			<!-- Icon Block -->
			<a
				class="group flex flex-col justify-center rounded-xl p-4 hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden md:p-7 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
				href={block.linkHref || '#'}
			>
				<div class="flex size-12 items-center justify-center rounded-xl bg-primary">
					<block.icon class="size-6 shrink-0 text-primary-foreground" />
				</div>
				<div class="mt-5">
					<h3
						class="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-primary-foreground dark:group-hover:text-muted-foreground"
					>
						{block.title}
					</h3>
					<p class="mt-1 text-muted-foreground">
						{block.description}
					</p>
					{#if block.linkText}
						<span
							class="mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-primary decoration-2 group-hover:underline group-focus:underline"
						>
							{block.linkText}
							<ChevronRight class="size-4 shrink-0" />
						</span>
					{/if}
				</div>
			</a>
			<!-- End Icon Block -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->
