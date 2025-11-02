<script lang="ts">
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

	interface TestimonialsCompactListProps {
		title?: string;
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-compact-list') || {};

	let {
		title = DEFAULTS.title,
		testimonials = DEFAULTS.testimonials || []
	}: TestimonialsCompactListProps = $props();

	function getStarClass(starType: 'full' | 'half' | 'empty'): string {
		return starType === 'full' || starType === 'half'
			? 'fill-yellow-400 text-yellow-400'
			: 'fill-gray-300 text-gray-300 dark:fill-neutral-600 dark:text-neutral-600';
	}
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	{#if title}
		<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
			<h2 class="text-2xl font-bold text-gray-800 md:text-4xl md:leading-tight dark:text-neutral-200">
				{title}
			</h2>
		</div>
	{/if}

	<div class="space-y-6">
		{#each testimonials as testimonial}
			<div class="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-700 dark:bg-primary">
				{#if testimonial.rating}
					<div class="mb-3 flex gap-x-1">
						{#each generateStarArray(testimonial.rating) as starType}
							<Star class={cn('size-4', getStarClass(starType))} />
						{/each}
					</div>
				{/if}
				<blockquote class="text-foreground">
					"{testimonial.quote}"
				</blockquote>
				<div class="mt-4 flex items-center gap-x-3">
					<Avatar class="size-10">
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
			</div>
		{/each}
	</div>
</div>
<!-- End Testimonials -->

