<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Quote } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		author: string;
		title: string;
		company?: string;
	}

	interface TestimonialsQuoteStyleProps {
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-quote-style') || {};

	let { testimonials = DEFAULTS.testimonials || [] }: TestimonialsQuoteStyleProps = $props();
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 md:grid-cols-2">
		{#each testimonials as testimonial}
			<div class="relative">
				<Quote class="absolute -top-6 start-0 size-16 text-gray-200 dark:text-neutral-700" />
				<div class="relative z-10">
					<blockquote class="text-xl italic text-foreground">
						{testimonial.quote}
					</blockquote>
					<footer class="mt-6">
						<p class="font-semibold text-foreground">
							{testimonial.author}
						</p>
						<p class="text-sm text-muted-foreground">
							{testimonial.title}
							{#if testimonial.company}| {testimonial.company}{/if}
						</p>
					</footer>
				</div>
			</div>
		{/each}
	</div>
</div>
<!-- End Testimonials -->

