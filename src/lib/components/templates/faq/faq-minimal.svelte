<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface FAQ {
		question: string;
		answer: string;
	}

	interface FaqMinimalProps {
		title?: string;
		faqs?: FAQ[];
	}

	const DEFAULTS = getTemplateDefaults('faq-minimal') || {};

	let { title = DEFAULTS.title, faqs = DEFAULTS.faqs }: FaqMinimalProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-3xl divide-y divide-border">
		{#each faqs as faq}
			<div class="py-8 first:pt-0 last:pb-0">
				<h3 class="font-semibold text-foreground md:text-lg">
					{faq.question}
				</h3>
				<p class="mt-2 text-muted-foreground">
					{faq.answer}
				</p>
			</div>
		{/each}
	</div>
</div>
