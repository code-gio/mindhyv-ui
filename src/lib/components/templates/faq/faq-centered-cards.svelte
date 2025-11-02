<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { getTemplateDefaults } from '../template-registry';

	interface FAQ {
		question: string;
		answer: string;
	}

	interface FaqCenteredCardsProps {
		title?: string;
		faqs?: FAQ[];
	}

	const DEFAULTS = getTemplateDefaults('faq-centered-cards') || {};

	let { title = DEFAULTS.title, faqs = DEFAULTS.faqs }: FaqCenteredCardsProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-3xl md:leading-tight">
			{title}
		</h2>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-5xl">
		<div class="grid gap-4 sm:grid-cols-2 md:gap-6">
			{#each faqs as faq}
				<Card class="text-center transition-colors hover:bg-muted/50">
					<CardContent class="pt-6">
						<h3 class="text-lg font-semibold text-foreground">
							{faq.question}
						</h3>
						<p class="mt-2 text-muted-foreground">
							{faq.answer}
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</div>
