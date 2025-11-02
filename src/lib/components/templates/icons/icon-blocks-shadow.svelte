<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as IconType } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof IconType;
		title: string;
		description: string;
	}

	interface IconBlocksShadowProps {
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-shadow') || {};

	let { blocks = DEFAULTS.blocks || [] }: IconBlocksShadowProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each blocks as block}
			<!-- Card -->
			<div class="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg dark:bg-primary">
				<block.icon class="size-12 text-primary" />
				<div class="mt-5">
					<h3 class="text-lg font-semibold text-foreground">
						{block.title}
					</h3>
					<p class="mt-2 text-muted-foreground">
						{block.description}
					</p>
				</div>
			</div>
			<!-- End Card -->
		{/each}
	</div>
</div>
<!-- End Icon Blocks -->

