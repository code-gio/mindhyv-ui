<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface DescriptionItem {
		term: string;
		description: string;
	}

	interface DescriptionListProps {
		title?: string;
		items?: DescriptionItem[];
	}

	const DEFAULTS = getTemplateDefaults('description-list') || {};

	let { title = DEFAULTS.title, items = DEFAULTS.items || [] }: DescriptionListProps = $props();
</script>

<!-- Description List -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2
				class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200"
			>
				{title}
			</h2>
		</div>
	{/if}

	<dl class="mx-auto max-w-2xl divide-y divide-border">
		{#each items as item}
			<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
				<dt class="text-sm font-semibold text-foreground">
					{item.term}
				</dt>
				<dd class="mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0 dark:text-neutral-400">
					{item.description}
				</dd>
			</div>
		{/each}
	</dl>
</div>
<!-- End Description List -->
