<script lang="ts">
	import { Card, CardContent, CardFooter } from '$lib/components/ui/card';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		name: string;
		title: string;
		avatarUrl: string;
	}

	interface TestimonialsCardsDarkProps {
		title?: string;
		testimonials?: Testimonial[];
		backgroundColor?: string;
	}

	const DEFAULTS = getTemplateDefaults('testimonials-cards-dark') || {};

	let {
		title = DEFAULTS.title,
		testimonials = DEFAULTS.testimonials,
		backgroundColor = DEFAULTS.backgroundColor
	}: TestimonialsCardsDarkProps = $props();
</script>

<div class="overflow-hidden {backgroundColor}">
	<div class="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<!-- Title -->
		<div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
			<h2 class="text-2xl font-semibold text-primary-foreground sm:text-3xl lg:text-4xl">
				{title}
			</h2>
		</div>
		<!-- End Title -->

		<!-- Grid -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<Card class="flex h-auto flex-col rounded-xl">
					<CardContent class="flex-auto p-4 md:p-6">
						<p class="text-base text-foreground italic md:text-lg">
							" {testimonial.quote} "
						</p>
					</CardContent>

					<CardFooter class="rounded-b-xl bg-muted p-4 md:px-7">
						<div class="flex items-center gap-x-3">
							<div class="shrink-0">
								<img
									class="size-8 rounded-full sm:size-11.5"
									src={testimonial.avatarUrl}
									alt={testimonial.name}
								/>
							</div>

							<div class="grow">
								<p class="text-sm font-semibold text-foreground sm:text-base">
									{testimonial.name}
								</p>
								<p class="text-xs text-muted-foreground">
									{testimonial.title}
								</p>
							</div>
						</div>
					</CardFooter>
				</Card>
			{/each}
		</div>
		<!-- End Grid -->
	</div>
</div>
