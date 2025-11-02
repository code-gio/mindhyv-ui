<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		quote: string;
		author: string;
		title: string;
		companyLogo: string;
		avatarUrl: string;
		avatarFallback: string;
	}

	interface TestimonialsWithCompanyLogosProps {
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-with-company-logos') || {};

	let {
		testimonials = DEFAULTS.testimonials || []
	}: TestimonialsWithCompanyLogosProps = $props();
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<Card class="h-full">
				<CardContent class="flex h-full flex-col p-6">
					<div class="mb-4 h-8">
						{@html testimonial.companyLogo}
					</div>
					<blockquote class="grow text-foreground">
						"{testimonial.quote}"
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
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
<!-- End Testimonials -->

