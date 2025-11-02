<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TimelineItem {
		date: string;
		title: string;
		description: string;
	}

	interface TimelineVerticalProps {
		title?: string;
		items?: TimelineItem[];
	}

	const DEFAULTS = getTemplateDefaults('timeline-vertical') || {};

	let { title = DEFAULTS.title, items = DEFAULTS.items || [] }: TimelineVerticalProps = $props();
</script>

<!-- Timeline -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
		</div>
	{/if}

	<div class="mx-auto max-w-2xl">
		<div class="space-y-8">
			{#each items as item, index}
				<div class="relative flex gap-x-3">
					<div class="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-neutral-700">
						<div class="relative z-10 flex size-7 items-center justify-center">
							<div class="size-2 rounded-full bg-primary"></div>
						</div>
					</div>

					<div class="grow pb-8 pt-0.5">
						<h3 class="mb-1 text-sm font-semibold text-foreground">
							{item.title}
						</h3>
						<p class="mb-3 text-xs text-muted-foreground">
							{item.date}
						</p>
						<p class="text-sm text-muted-foreground">
							{item.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
<!-- End Timeline -->

