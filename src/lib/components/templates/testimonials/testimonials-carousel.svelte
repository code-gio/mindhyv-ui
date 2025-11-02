<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Star } from '@lucide/svelte/icons';
	import { cn, generateStarArray } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		author: string;
		title: string;
		company?: string;
		avatarUrl: string;
		avatarFallback: string;
		rating?: number;
	}

	interface TestimonialsCarouselProps {
		title?: string;
		description?: string;
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-carousel') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		testimonials = DEFAULTS.testimonials || []
	}: TestimonialsCarouselProps = $props();

	function getStarClass(starType: 'full' | 'half' | 'empty'): string {
		return starType === 'full' || starType === 'half'
			? 'fill-yellow-400 text-yellow-400'
			: 'fill-gray-300 text-gray-300 dark:fill-neutral-600 dark:text-neutral-600';
	}
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
			{#if description}
				<p class="mt-1 text-muted-foreground">
					{description}
				</p>
			{/if}
		</div>
	{/if}
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<Card class="h-full">
				<CardContent class="flex h-full flex-col p-6">
					{#if testimonial.rating}
						<div class="mb-4 flex gap-x-1">
							{#each generateStarArray(testimonial.rating) as starType}
								<Star class={cn('size-5', getStarClass(starType))} />
							{/each}
						</div>
					{/if}
					<blockquote class="grow">
						<p class="text-foreground">
							{testimonial.quote}
						</p>
					</blockquote>
					<div class="mt-6 flex items-center gap-x-3">
						<Avatar>
							<AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
							<AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
						</Avatar>
						<div>
							<p class="text-sm font-semibold text-foreground">
								{testimonial.author}
							</p>
							<p class="text-xs text-muted-foreground">
								{testimonial.title}
								{#if testimonial.company}| {testimonial.company}{/if}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Testimonials -->

