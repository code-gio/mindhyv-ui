<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as IconType } from '@lucide/svelte';

	interface IconBlock {
		icon: typeof IconType;
		title: string;
		description: string;
	}

	interface IconBlocksCenteredProps {
		title?: string;
		description?: string;
		blocks?: IconBlock[];
	}

	const DEFAULTS = getTemplateDefaults('icon-blocks-centered') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		blocks = DEFAULTS.blocks || []
	}: IconBlocksCenteredProps = $props();
</script>

<!-- Icon Blocks -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each blocks as block}
			<!-- Card -->
			<div
				class="group flex flex-col justify-center rounded-xl border border-gray-200 p-4 transition hover:shadow-md md:p-7 dark:border-neutral-700 dark:hover:border-neutral-600"
			>
				<div class="flex justify-center">
					<block.icon class="size-10 text-foreground" />
				</div>
				<div class="mt-5 text-center">
					<h3 class="text-lg font-semibold text-foreground">
						{block.title}
					</h3>
					<p class="mt-1 text-muted-foreground">
						{block.description}
					</p>
				</div>
			</div>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Icon Blocks -->
