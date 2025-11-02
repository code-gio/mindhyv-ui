<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface ClientsDarkBgProps {
		title?: string;
		logos?: ClientLogo[];
	}

	const DEFAULTS = getTemplateDefaults('clients-dark-bg') || {};

	let { title = DEFAULTS.title, logos = DEFAULTS.logos || [] }: ClientsDarkBgProps = $props();
</script>

<!-- Clients -->
<div class="bg-primary">
	<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		{#if title}
			<div class="mx-auto mb-6 max-w-2xl text-center">
				<h2 class="text-muted-foreground">{title}</h2>
			</div>
		{/if}

		<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-12 lg:gap-x-24">
			{#each logos as logo}
				<div class="h-auto w-16 py-3 text-gray-500 md:w-20 lg:w-24 lg:py-5">
					{@html logo.svg}
				</div>
			{/each}
		</div>
	</div>
</div>
<!-- End Clients -->

