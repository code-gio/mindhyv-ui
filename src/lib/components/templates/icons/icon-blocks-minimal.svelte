<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as IconType } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof IconType;
		title: string;
		description: string;
	}

	interface IconBlocksMinimalProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-minimal') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksMinimalProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-12 md:grid-cols-2">
		{#each blocks as block}
			<!-- Icon Block -->
			<div class="flex gap-x-5">
				<block.icon class="mt-1 size-6 shrink-0 text-primary" />
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
<!-- End Icon Blocks -->

