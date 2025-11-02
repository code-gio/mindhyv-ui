<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface TestimonialsCenteredProps {
		quote?: string;
		name?: string;
		title?: string;
		companyLogo?: string;
	}

	const DEFAULTS = getTemplateDefaults('testimonials-centered') || {};

	let {
		quote = DEFAULTS.quote,
		name = DEFAULTS.name,
		title = DEFAULTS.title,
		companyLogo = DEFAULTS.companyLogo
	}: TestimonialsCenteredProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<blockquote class="mx-auto max-w-2xl text-center">
		{#if companyLogo}
			<div class="mb-6">
				<div class="mx-auto h-auto w-24 text-foreground">
					{@html companyLogo}
				</div>
			</div>
		{/if}

		<p class="text-xl font-medium text-foreground italic md:text-2xl md:leading-normal">
			"{quote}"
		</p>

		<footer class="mt-6">
			<div class="font-semibold text-foreground">{name}</div>
			<div class="text-sm text-muted-foreground">{title}</div>
		</footer>
	</blockquote>
</div>
