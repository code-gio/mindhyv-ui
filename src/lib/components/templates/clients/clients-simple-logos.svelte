<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface ClientsSimpleLogosProps {
		title?: string;
		logos?: ClientLogo[];
	}

	const DEFAULTS = getTemplateDefaults('clients-simple-logos') || {};

	let { title = DEFAULTS.title, logos = DEFAULTS.logos || [] }: ClientsSimpleLogosProps = $props();
</script>

<!-- Clients -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	{#if title}
		<div class="mx-auto mb-6 w-2/3 text-center sm:w-1/2 lg:w-1/3">
			<h2 class="text-muted-foreground">{title}</h2>
		</div>
	{/if}
	<!-- End Title -->

	<div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
		{#each logos as logo}
			<div class="h-auto w-16 py-3 text-gray-500 md:w-20 lg:w-24 lg:py-5 dark:text-neutral-500">
				{@html logo.svg}
			</div>
		{/each}
	</div>
</div>
<!-- End Clients -->

