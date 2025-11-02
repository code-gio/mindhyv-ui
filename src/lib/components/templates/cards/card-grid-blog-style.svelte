<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BlogCard {
		imageSrc: string;
		imageAlt: string;
		category: string;
		title: string;
		excerpt: string;
		author: {
			name: string;
			avatarUrl: string;
			avatarFallback: string;
		};
		date: string;
		readTime?: string;
		linkHref: string;
	}

	interface CardGridBlogStyleProps {
		cards?: BlogCard[];
	}

	const DEFAULTS = getTemplateDefaults('card-grid-blog-style') || {};

	let { cards = DEFAULTS.cards || [] }: CardGridBlogStyleProps = $props();
</script>

<!-- Blog Card Grid -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each cards as card}
			<!-- Card -->
			<a class="group block rounded-xl" href={card.linkHref}>
				<Card class="h-full shadow-sm transition group-hover:shadow-lg">
					<div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-t-xl">
						<img
							class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={card.imageSrc}
							alt={card.imageAlt}
						/>
					</div>
					<CardContent class="p-4 md:p-6">
						<span class="mb-1 block text-xs font-semibold uppercase text-primary">
							{card.category}
						</span>
						<h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
							{card.title}
						</h3>
						<p class="mt-3 text-muted-foreground">
							{card.excerpt}
						</p>
						<div class="mt-5 flex items-center gap-x-3">
							<Avatar class="size-8">
								<AvatarImage src={card.author.avatarUrl} alt={card.author.name} />
								<AvatarFallback>{card.author.avatarFallback}</AvatarFallback>
							</Avatar>
							<div>
								<h5 class="text-sm text-foreground">
									{card.author.name}
								</h5>
								<p class="text-xs text-muted-foreground">
									{card.date}
									{#if card.readTime}· {card.readTime}{/if}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</a>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Blog Card Grid -->

