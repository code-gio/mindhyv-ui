<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface FooterLink {
		text: string;
		href: string;
	}

	interface FooterMinimalProps {
		brandName?: string;
		copyright?: string;
		links?: FooterLink[];
	}

	const DEFAULTS = getTemplateDefaults('footer-minimal') || {};

	let {
		brandName = DEFAULTS.brandName,
		copyright = DEFAULTS.copyright,
		links = DEFAULTS.links
	}: FooterMinimalProps = $props();
</script>

<footer class="mx-auto mt-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	<div class="border-t border-border pt-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<a
					class="flex-none text-xl font-semibold text-foreground focus:opacity-80 focus:outline-hidden"
					href="#"
					aria-label="Brand"
				>
					{brandName}
				</a>
			</div>

			<div class="mt-3 flex flex-wrap gap-3 sm:mt-0">
				{#each links as link}
					<a
						class="text-sm text-muted-foreground hover:text-foreground focus:text-foreground focus:outline-hidden"
						href={link.href}
					>
						{link.text}
					</a>
				{/each}
			</div>
		</div>

		<div class="mt-5">
			<p class="text-sm text-muted-foreground">{copyright}</p>
		</div>
	</div>
</footer>
