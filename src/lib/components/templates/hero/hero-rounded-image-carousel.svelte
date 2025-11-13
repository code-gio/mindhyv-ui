<script lang="ts">
	import { ChevronLeft, ChevronRight } from '@lucide/svelte/icons';

	interface Slide {
		imageUrl: string;
		brand: string;
		title: string;
		ctaText?: string;
		ctaHref?: string;
	}

	interface Props {
		slides?: Slide[];
		autoplay?: boolean;
		autoplayInterval?: number;
		height?: string;
	}

	let {
		slides = [
			{
				imageUrl:
					'https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3',
				brand: 'Nike React',
				title: "Rewriting sport's playbook for billions of athletes",
				ctaText: 'Read Case Studies',
				ctaHref: '#'
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3',
				brand: 'CoolApps',
				title: 'From mobile apps to gaming consoles',
				ctaText: 'Read Case Studies',
				ctaHref: '#'
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3',
				brand: 'Grumpy',
				title: 'Bringing Art to everything',
				ctaText: 'Read Case Studies',
				ctaHref: '#'
			}
		],
		autoplay = false,
		autoplayInterval = 5000,
		height = 'h-120 md:h-[calc(100vh-106px)]'
	}: Props = $props();

	let currentIndex = $state(0);
	let autoplayTimer: ReturnType<typeof setInterval> | null = null;

	function next() {
		currentIndex = (currentIndex + 1) % slides.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}

	function startAutoplay() {
		if (autoplay && slides.length > 1) {
			autoplayTimer = setInterval(() => {
				next();
			}, autoplayInterval);
		}
	}

	function stopAutoplay() {
		if (autoplayTimer) {
			clearInterval(autoplayTimer);
			autoplayTimer = null;
		}
	}

	$effect(() => {
		startAutoplay();
		return () => stopAutoplay();
	});
</script>

<div class="px-4 py-10 sm:px-6 lg:px-8">
	<div class="relative" onmouseenter={stopAutoplay} onmouseleave={startAutoplay}>
		<div class="relative w-full overflow-hidden rounded-2xl bg-gray-100 {height} dark:bg-neutral-800">
			<!-- Slides Container -->
			<div class="relative h-full">
				{#each slides as slide, index}
					<div
						class="absolute inset-0 transition-all duration-700 ease-in-out {index === currentIndex
							? 'translate-x-0 opacity-100'
							: index < currentIndex
								? '-translate-x-full opacity-0'
								: 'translate-x-full opacity-0'}"
					>
						<div
							class="flex h-full flex-col bg-cover bg-center bg-no-repeat"
							style="background-image: url('{slide.imageUrl}')"
						>
							<div class="mt-auto w-2/3 ps-5 pb-5 md:max-w-lg md:ps-10 md:pb-10">
								<span class="block text-white">{slide.brand}</span>
								<span class="block text-xl text-white md:text-3xl">{slide.title}</span>
								{#if slide.ctaText && slide.ctaHref}
									<div class="mt-5">
										<a
											href={slide.ctaHref}
											class="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
										>
											{slide.ctaText}
										</a>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Navigation Arrows -->
			<button
				type="button"
				onclick={prev}
				disabled={slides.length <= 1}
				class="absolute inset-y-0 start-0 inline-flex h-full w-12 items-center justify-center rounded-s-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
				aria-label="Previous slide"
			>
				<span class="text-2xl" aria-hidden="true">
					<ChevronLeft class="size-4 md:size-5" />
				</span>
			</button>

			<button
				type="button"
				onclick={next}
				disabled={slides.length <= 1}
				class="absolute inset-y-0 end-0 inline-flex h-full w-12 items-center justify-center rounded-e-2xl text-black hover:bg-white/20 focus:bg-white/20 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
				aria-label="Next slide"
			>
				<span class="sr-only">Next</span>
				<span class="text-2xl" aria-hidden="true">
					<ChevronRight class="size-4 md:size-5" />
				</span>
			</button>

			<!-- Indicators -->
			{#if slides.length > 1}
				<div class="absolute bottom-3 start-1/2 flex -translate-x-1/2 space-x-2">
					{#each slides as _, index}
						<button
							type="button"
							onclick={() => (currentIndex = index)}
							class="size-2 rounded-full transition-all duration-300 {index === currentIndex
								? 'w-6 bg-white'
								: 'bg-white/50 hover:bg-white/75'}"
							aria-label="Go to slide {index + 1}"
						></button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

