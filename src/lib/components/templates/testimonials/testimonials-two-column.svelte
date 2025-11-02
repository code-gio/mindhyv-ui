<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Quote } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		author: string;
		title: string;
		company?: string;
		avatarUrl: string;
		avatarFallback: string;
	}

	interface TestimonialsTwoColumnProps {
		title?: string;
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-two-column') || {};

	let {
		title = DEFAULTS.title,
		testimonials = DEFAULTS.testimonials || []
	}: TestimonialsTwoColumnProps = $props();
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

	<div class="grid gap-6 md:grid-cols-2">
		{#each testimonials as testimonial}
			<Card class="h-full">
				<CardContent class="p-6">
					<Quote class="mb-4 size-8 text-primary" />
					<blockquote class="text-lg text-foreground">
						{testimonial.quote}
					</blockquote>
					<div class="mt-6 flex items-center gap-x-4">
						<Avatar class="size-12">
							<AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
							<AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
						</Avatar>
						<div>
							<p class="font-semibold text-foreground">
								{testimonial.author}
							</p>
							<p class="text-sm text-muted-foreground">
								{testimonial.title}
								{#if testimonial.company}
									<span class="text-muted-foreground dark:text-neutral-600">|</span>
									{testimonial.company}
								{/if}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
<!-- End Testimonials -->

