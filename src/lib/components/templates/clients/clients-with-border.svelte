<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ClientLogo {
		name: string;
		svg: string;
	}

	interface ClientsWithBorderProps {
		logos?: ClientLogo[];
	}

	const DEFAULTS = getTemplateDefaults('clients-with-border') || {};

	let { logos = DEFAULTS.logos || [] }: ClientsWithBorderProps = $props();
</script>

<!-- Clients -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each logos as logo}
			<div class="flex h-36 items-center justify-center border border-gray-200 bg-white dark:border-neutral-700 dark:bg-primary">
				<div class="h-auto w-24 text-muted-foreground">
					{@html logo.svg}
				</div>
			</div>
		{/each}
	</div>
</div>
<!-- End Clients -->

