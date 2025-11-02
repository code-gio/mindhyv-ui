<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface ClientsGrayscaleProps {
		title?: string;
		logos?: ClientLogo[];
	}

	const DEFAULTS = getTemplateDefaults('clients-grayscale') || {};

	let { title = DEFAULTS.title, logos = DEFAULTS.logos || [] }: ClientsGrayscaleProps = $props();
</script>

<!-- Clients -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-6 w-3/4 text-center sm:w-1/2">
			<h2 class="text-sm font-medium uppercase text-muted-foreground">{title}</h2>
		</div>
	{/if}

	<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-12 lg:gap-x-24">
		{#each logos as logo}
			<div class="h-auto w-16 py-3 text-gray-500 grayscale transition hover:grayscale-0 md:w-20 lg:w-24 lg:py-5 dark:text-neutral-500">
				{@html logo.svg}
			</div>
		{/each}
	</div>
</div>
<!-- End Clients -->

