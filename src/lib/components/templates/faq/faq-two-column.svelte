<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface FAQ {
		question: string;
		answer: string;
	}

	interface FaqTwoColumnProps {
		title?: string;
		faqs?: FAQ[];
	}

	const DEFAULTS = getTemplateDefaults('faq-two-column') || {};

	let { title = DEFAULTS.title, faqs = DEFAULTS.faqs }: FaqTwoColumnProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-3xl md:leading-tight">
			{title}
		</h2>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-5xl">
		<!-- Grid -->
		<div class="grid gap-6 sm:grid-cols-2 md:gap-12">
			{#each faqs as faq}
				<div>
					<h3 class="text-lg font-semibold text-foreground">
						{faq.question}
					</h3>
					<p class="mt-2 text-muted-foreground">
						{faq.answer}
					</p>
				</div>
				<!-- End Col -->
			{/each}
		</div>
		<!-- End Grid -->
	</div>
</div>
