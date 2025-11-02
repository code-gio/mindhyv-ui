<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Star } from '@lucide/svelte/icons';
	import { cn, generateStarArray } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TestimonialsSplitLayoutProps {
		quote: string;
		author: string;
		title: string;
		company?: string;
		avatarUrl: string;
		avatarFallback: string;
		rating?: number;
		imageSrc?: string;
		imageAlt?: string;
	}

	const DEFAULTS = getTemplateDefaults('testimonials-split-layout') || {};

	let {
		quote = DEFAULTS.quote,
		author = DEFAULTS.author,
		title = DEFAULTS.title,
		company = DEFAULTS.company,
		avatarUrl = DEFAULTS.avatarUrl,
		avatarFallback = DEFAULTS.avatarFallback,
		rating = DEFAULTS.rating,
		imageSrc = DEFAULTS.imageSrc,
		imageAlt = DEFAULTS.imageAlt
	}: TestimonialsSplitLayoutProps = $props();

	function getStarClass(starType: 'full' | 'half' | 'empty'): string {
		return starType === 'full' || starType === 'half'
			? 'fill-yellow-400 text-yellow-400'
			: 'fill-gray-300 text-gray-300 dark:fill-neutral-600 dark:text-neutral-600';
	}
</script>

<!-- Testimonial -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
		{#if imageSrc}
			<div>
				<img class="w-full rounded-xl" src={imageSrc} alt={imageAlt} />
			</div>
		{/if}

		<div>
			{#if rating}
				<div class="mb-6 flex gap-x-1">
					{#each generateStarArray(rating) as starType}
						<Star class={cn('size-5', getStarClass(starType))} />
					{/each}
				</div>
			{/if}
			<blockquote class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal dark:text-neutral-200">
				"{quote}"
			</blockquote>
			<div class="mt-6 flex items-center gap-x-4">
				<Avatar class="size-12">
					<AvatarImage src={avatarUrl} alt={author} />
					<AvatarFallback>{avatarFallback}</AvatarFallback>
				</Avatar>
				<div>
					<p class="font-semibold text-foreground">
						{author}
					</p>
					<p class="text-sm text-muted-foreground">
						{title}
						{#if company}
							<span class="text-muted-foreground dark:text-neutral-600">|</span>
							{company}
						{/if}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- End Testimonial -->

