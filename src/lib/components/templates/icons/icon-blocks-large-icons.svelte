<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof LucideIcon;
		title: string;
		description: string;
	}

	interface IconBlocksLargeProps {
		title?: string;
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-large-icons') || {};

	let { title = DEFAULTS.title, blocks = DEFAULTS.blocks || [] }: IconBlocksLargeProps = $props();
</script>

<!-- Features -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="relative rounded-xl bg-gray-100 p-6 before:absolute before:inset-0 before:z-[1] before:rounded-xl before:bg-gradient-to-br before:from-gray-100 before:via-transparent md:p-16 dark:bg-primary dark:before:from-neutral-900">
		<div class="relative z-10">
			<div class="mb-5 grid gap-6 sm:grid-cols-2 lg:mb-10 lg:grid-cols-3 lg:gap-8">
				{#each blocks as block}
					<!-- Icon Block -->
					<div class="flex gap-x-5">
						<block.icon class="mt-1 size-8 shrink-0 text-primary" />
						<div class="grow">
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
	</div>
</div>
<!-- End Features -->

