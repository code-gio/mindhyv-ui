<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Play } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Testimonial {
		videoThumbnail: string;
		videoUrl?: string;
		quote: string;
		author: string;
		title: string;
		company?: string;
		avatarUrl: string;
		avatarFallback: string;
	}

	interface TestimonialsVideoStyleProps {
		testimonials?: Testimonial[];
	}

	const DEFAULTS = getTemplateDefaults('testimonials-video-style') || {};

	let { testimonials = DEFAULTS.testimonials || [] }: TestimonialsVideoStyleProps = $props();
</script>

<!-- Testimonials -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each testimonials as testimonial}
			<Card class="h-full">
				<CardContent class="p-6">
					<!-- Video Thumbnail -->
					<a
						href={testimonial.videoUrl || '#'}
						class="group relative mb-4 block overflow-hidden rounded-lg"
					>
						<img
							class="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
							src={testimonial.videoThumbnail}
							alt={testimonial.author}
						/>
						<div
							class="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40"
						>
							<div class="flex size-16 items-center justify-center rounded-full bg-white/90 transition group-hover:scale-110">
								<Play class="size-6 text-primary" />
							</div>
						</div>
					</a>
					<!-- End Video Thumbnail -->

					<blockquote class="text-foreground">
						"{testimonial.quote}"
					</blockquote>
					<div class="mt-4 flex items-center gap-x-3">
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
</div>
<!-- End Testimonials -->

