<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		name: string;
		title: string;
	}

	interface TestimonialsMinimalProps {
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-minimal') || {};

	let { testimonials = DEFAULTS.testimonials }: TestimonialsMinimalProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
		{#each testimonials as testimonial}
			<div class="border-s-4 border-primary ps-5">
				<p class="text-base text-muted-foreground italic">
					"{testimonial.quote}"
				</p>

				<div class="mt-3">
					<p class="font-semibold text-foreground">{testimonial.name}</p>
					<p class="text-sm text-muted-foreground">{testimonial.title}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
