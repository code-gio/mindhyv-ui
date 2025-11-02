<script lang="ts">
	import { TEMPLATE_CATEGORIES } from '$lib/components/templates';
</script>

<div class="container mx-auto max-w-7xl p-4">
	{#each TEMPLATE_CATEGORIES as category}
		<div class="mb-12">
			<h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
			<p class="mb-8 text-gray-600 dark:text-neutral-400">{category.description}</p>
			
			<div class="space-y-12">
				{#each category.templates as template}
					{@const Template = template.template}
					<div class="border-b border-gray-200 pb-12 dark:border-neutral-700">
						<div class="mb-4">
							<h3 class="text-xl font-semibold text-gray-800 dark:text-white">{template.name}</h3>
							<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">{template.description}</p>
						</div>
						<div class="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
							<Template />
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
