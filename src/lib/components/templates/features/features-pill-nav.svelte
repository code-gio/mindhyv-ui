<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FeatureSection {
		id: string;
		label: string;
		icon?: typeof LucideIcon;
		title: string;
		description: string;
		imageSrc?: string;
		imageAlt?: string;
	}

	interface FeaturesPillNavProps {
		sections?: FeatureSection[];
	}

	const DEFAULTS = getTemplateDefaults('features-pill-nav') || {};

	let { sections = DEFAULTS.sections || [] }: FeaturesPillNavProps = $props();

	let activeSection = $state(sections[0]?.id || '');
</script>

<!-- Features with Pill Navigation -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Navigation -->
	<div class="mb-10 flex flex-wrap justify-center gap-2">
		{#each sections as section}
			<button
				class={cn(
					'inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium transition',
					activeSection === section.id
						? 'bg-primary text-primary-foreground'
						: 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700'
				)}
				onclick={() => (activeSection = section.id)}
			>
				{#if section.icon}
					<section.icon class="size-4" />
				{/if}
				{section.label}
			</button>
		{/each}
	</div>
	<!-- End Navigation -->

	<!-- Content -->
	{#each sections as section}
		{#if activeSection === section.id}
			<div class="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
				<div>
					<h3 class="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-primary-foreground">
						{section.title}
					</h3>
					<p class="mt-3 text-muted-foreground">
						{section.description}
					</p>
				</div>
				{#if section.imageSrc}
					<div>
						<img
							class="w-full rounded-xl"
							src={section.imageSrc}
							alt={section.imageAlt}
						/>
					</div>
				{/if}
			</div>
		{/if}
	{/each}
	<!-- End Content -->
</div>
<!-- End Features with Pill Navigation -->

