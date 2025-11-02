<script lang="ts">
	import { TEMPLATE_CATEGORIES } from '$lib/components/templates';
</script>

<div class="container mx-auto max-w-7xl">
	{#each TEMPLATE_CATEGORIES as category}
		<h2 class="text-2xl font-bold">{category.name}</h2>
		{#each category.templates as template}
			<h3 class="text-xl font-bold">{template.name}</h3>
			<p>{template.description}</p>
			<div class="mt-4 rounded-md bg-gray-100 p-4">
				<template.template />
			</div>
		{/each}
	{/each}
</div>
