<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface FooterLink {
		text: string;
		href: string;
		badge?: string;
	}

	interface FooterColumn {
		title: string;
		links: FooterLink[];
	}

	interface SocialLink {
		platform: string;
		href: string;
		icon: string;
	}

	interface FooterMultiColumnProps {
		brandName?: string;
		copyright?: string;
		columns?: FooterColumn[];
		socials?: SocialLink[];
	}

	const DEFAULTS = getTemplateDefaults('footer-multi-column') || {};

	let {
		brandName = DEFAULTS.brandName,
		copyright = DEFAULTS.copyright,
		columns = DEFAULTS.columns,
		socials = DEFAULTS.socials
	}: FooterMultiColumnProps = $props();
</script>

<footer class="mx-auto mt-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	<!-- Grid -->
	<div class="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
		<div class="col-span-full hidden lg:col-span-1 lg:block">
			<a
				class="flex-none text-xl font-semibold text-foreground focus:opacity-80 focus:outline-hidden"
				href="#"
				aria-label="Brand"
			>
				{brandName}
			</a>
			<p class="mt-3 text-xs text-muted-foreground sm:text-sm">
				{copyright}
			</p>
		</div>
		<!-- End Col -->

		{#each columns as column}
			<div>
				<h4 class="text-xs font-semibold text-foreground uppercase">{column.title}</h4>

				<div class="mt-3 grid space-y-3 text-sm">
					{#each column.links as link}
						<p>
							<a
								class="inline-flex gap-x-2 text-muted-foreground hover:text-foreground focus:text-foreground focus:outline-hidden"
								href={link.href}
							>
								{link.text}
								{#if link.badge}
									<span class="inline text-primary">&mdash; {link.badge}</span>
								{/if}
							</a>
						</p>
					{/each}
				</div>
			</div>
			<!-- End Col -->
		{/each}
	</div>
	<!-- End Grid -->

	<div class="mt-5 border-t border-border pt-5">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div class="flex flex-wrap items-center gap-3">
				<p class="text-sm text-muted-foreground">{copyright}</p>
			</div>

			{#if socials && socials.length > 0}
				<div class="mt-3 flex gap-x-3 sm:mt-0">
					{#each socials as social}
						<a
							class="inline-flex size-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-muted-foreground hover:bg-muted focus:bg-muted focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
							href={social.href}
						>
							<div class="size-4 shrink-0">
								{@html social.icon}
							</div>
							<span class="sr-only">{social.platform}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</footer>
