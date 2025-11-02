<script lang="ts">
	import { HelpCircle } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface FAQ {
		question: string;
		answer: string;
	}

	interface FaqWithIconsProps {
		title?: string;
		faqs?: FAQ[];
	}

	const DEFAULTS = getTemplateDefaults('faq-with-icons') || {};

	let { title = DEFAULTS.title, faqs = DEFAULTS.faqs }: FaqWithIconsProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
	</div>
	<!-- End Title -->

	<div class="mx-auto max-w-2xl divide-y divide-border">
		{#each faqs as faq}
			<div class="py-8 first:pt-0 last:pb-0">
				<div class="flex gap-x-5">
					<HelpCircle class="mt-1 size-6 shrink-0 text-muted-foreground" />

					<div class="grow">
						<h3 class="font-semibold text-foreground md:text-lg">
							{faq.question}
						</h3>
						<p class="mt-1 text-muted-foreground">
							{faq.answer}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
