<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface ClientsGridLayoutProps {
		title?: string;
		description?: string;
		logos?: ClientLogo[];
	}

	const DEFAULTS = getTemplateDefaults('clients-grid-layout') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		logos = DEFAULTS.logos || []
	}: ClientsGridLayoutProps = $props();
</script>

<!-- Clients -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	{#if title}
		<div class="mx-auto mb-6 max-w-2xl text-center lg:mb-10">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>
	{/if}
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-12 lg:grid-cols-4">
		{#each logos as logo}
			<div class="flex h-auto w-full items-center justify-center py-3 text-gray-500 lg:py-5 dark:text-neutral-500">
				{@html logo.svg}
			</div>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Clients -->

