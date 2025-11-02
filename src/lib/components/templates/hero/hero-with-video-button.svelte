<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Play } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroWithVideoButtonProps {
		title?: string;
		highlightText?: string;
		description?: string;
		videoButtonText?: string;
		videoHref?: string;
		backgroundImage?: string;
		onVideoClick?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-with-video-button') || {};

	let {
		title = DEFAULTS.title,
		highlightText = DEFAULTS.highlightText,
		description = DEFAULTS.description,
		videoButtonText = DEFAULTS.videoButtonText,
		videoHref = DEFAULTS.videoHref,
		backgroundImage = DEFAULTS.backgroundImage,
		onVideoClick
	}: HeroWithVideoButtonProps = $props();
</script>

<div class="relative overflow-hidden">
	<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="block text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
				{title} <span class="text-primary">{highlightText}</span>
			</h1>
			<p class="mt-3 text-lg text-muted-foreground">{description}</p>
		</div>

		<div class="relative mx-auto mt-10 max-w-5xl">
			<div
				class="h-96 w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover sm:h-120"
				style="background-image: url('{backgroundImage}')"
			></div>

			<div class="absolute inset-0 size-full">
				<div class="flex size-full flex-col items-center justify-center">
					<Button
						href={videoHref}
						onclick={onVideoClick}
						variant="outline"
						class="inline-flex items-center gap-x-2 rounded-full border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-2xs hover:bg-muted focus:bg-muted focus:outline-hidden"
					>
						<Play class="size-4 shrink-0 fill-current" />
						{videoButtonText}
					</Button>
				</div>
			</div>

			<div
				class="absolute -start-20 bottom-12 -z-1 size-48 rounded-lg bg-linear-to-b from-primary to-background p-px"
			>
				<div class="size-48 rounded-lg bg-background"></div>
			</div>

			<div
				class="absolute -end-20 -top-12 -z-1 size-48 rounded-full bg-linear-to-t from-primary to-accent p-px"
			>
				<div class="size-48 rounded-full bg-background"></div>
			</div>
		</div>
	</div>
</div>
