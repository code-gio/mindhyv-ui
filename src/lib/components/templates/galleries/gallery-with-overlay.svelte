<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface GalleryImage {
		src: string;
		alt: string;
		title: string;
		description?: string;
	}

	interface GalleryWithOverlayProps {
		title?: string;
		description?: string;
		images?: GalleryImage[];
	}

	const DEFAULTS = getTemplateDefaults('gallery-with-overlay') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		images = DEFAULTS.images || []
	}: GalleryWithOverlayProps = $props();
</script>

<!-- Gallery -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2
				class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200"
			>
				{title}
			</h2>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>
	{/if}

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each images as image}
			<a class="group relative block overflow-hidden rounded-xl" href="#">
				<div class="aspect-square overflow-hidden">
					<img
						class="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
						src={image.src}
						alt={image.alt}
					/>
				</div>
				<div
					class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<h3 class="text-lg font-semibold text-primary-foreground">
						{image.title}
					</h3>
					{#if image.description}
						<p class="mt-1 text-sm text-primary-foreground/90">
							{image.description}
						</p>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>
<!-- End Gallery -->
