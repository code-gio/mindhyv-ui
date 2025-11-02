<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface FeatureTab {
		id: string;
		label: string;
		icon?: typeof LucideIcon;
		title: string;
		description: string;
		imageSrc?: string;
		imageAlt?: string;
	}

	interface FeaturesTabNavProps {
		tabs?: FeatureTab[];
	}

	const DEFAULTS = getTemplateDefaults('features-tab-nav') || {};

	let { tabs = DEFAULTS.tabs || [] }: FeaturesTabNavProps = $props();
</script>

<!-- Features with Tabs -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Tabs value={tabs[0]?.id} class="w-full">
		<TabsList class="grid w-full" style="grid-template-columns: repeat({tabs.length}, minmax(0, 1fr))">
			{#each tabs as tab}
				<TabsTrigger value={tab.id} class="flex items-center gap-x-2">
					{#if tab.icon}
						<tab.icon class="size-4" />
					{/if}
					{tab.label}
				</TabsTrigger>
			{/each}
		</TabsList>

		{#each tabs as tab}
			<TabsContent value={tab.id} class="mt-8">
				<div class="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
					<div>
						<h3 class="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-primary-foreground">
							{tab.title}
						</h3>
						<p class="mt-3 text-muted-foreground">
							{tab.description}
						</p>
					</div>
					{#if tab.imageSrc}
						<div>
							<img
								class="w-full rounded-xl"
								src={tab.imageSrc}
								alt={tab.imageAlt}
							/>
						</div>
					{/if}
				</div>
			</TabsContent>
		{/each}
	</Tabs>
</div>
<!-- End Features with Tabs -->

