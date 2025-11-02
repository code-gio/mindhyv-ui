<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Star } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';
	import { generateStarArray, cn } from '../utils';
	import type { StarType } from '../utils';

	interface Testimonial {
		quote: string;
		name: string;
		title: string;
		rating?: number;
		companyLogo?: string;
	}

	interface TestimonialsGridProps {
		title?: string;
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-grid') || {};

	let { title = DEFAULTS.title, testimonials = DEFAULTS.testimonials }: TestimonialsGridProps =
		$props();

	function getStarClass(starType: StarType): string {
		switch (starType) {
			case 'full':
				return 'fill-primary text-primary';
			case 'half':
				return 'fill-primary/50 text-primary';
			case 'empty':
				return 'text-muted-foreground';
		}
	}
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-3xl md:leading-tight">{title}</h2>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<Card>
				<CardContent class="p-6">
					{#if testimonial.rating}
						<div class="mb-4 flex gap-x-1">
							{#each generateStarArray(testimonial.rating) as starType}
								<Star class={cn('size-4', getStarClass(starType))} />
							{/each}
						</div>
					{/if}

					<p class="text-base text-muted-foreground italic">
						"{testimonial.quote}"
					</p>

					<div class="mt-4">
						{#if testimonial.companyLogo}
							<div class="mb-2 h-auto w-16 text-foreground">
								{@html testimonial.companyLogo}
							</div>
						{/if}
						<p class="font-semibold text-foreground">{testimonial.name}</p>
						<p class="text-sm text-muted-foreground">{testimonial.title}</p>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->
</div>
