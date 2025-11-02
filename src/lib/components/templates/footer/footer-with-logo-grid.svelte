<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FooterLink {
		text: string;
		href: string;
	}

	interface FooterColumn {
		title: string;
		links: FooterLink[];
	}

	interface SocialLink {
		icon: typeof LucideIcon;
		href: string;
		label: string;
	}

	interface FooterWithLogoGridProps {
		brandName?: string;
		brandLogo?: string;
		brandDescription?: string;
		columns?: FooterColumn[];
		socialLinks?: SocialLink[];
		copyrightText?: string;
	}

	const DEFAULTS = getTemplateDefaults('footer-with-logo-grid') || {};

	let {
		brandName = DEFAULTS.brandName,
		brandLogo = DEFAULTS.brandLogo,
		brandDescription = DEFAULTS.brandDescription,
		columns = DEFAULTS.columns || [],
		socialLinks = DEFAULTS.socialLinks || [],
		copyrightText = DEFAULTS.copyrightText
	}: FooterWithLogoGridProps = $props();

	const currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<footer class="border-t border-gray-200 bg-gray-50 dark:border-neutral-700 dark:bg-primary">
	<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<div class="grid gap-10 lg:grid-cols-5">
			<!-- Brand -->
			<div class="lg:col-span-2">
				{#if brandLogo}
					<a class="mb-3 inline-block" href="/">
						<img class="h-8 w-auto" src={brandLogo} alt={brandName} />
					</a>
				{:else}
					<a class="mb-3 inline-block text-xl font-semibold text-foreground" href="/">
						{brandName}
					</a>
				{/if}
				<p class="text-sm text-muted-foreground">
					{brandDescription}
				</p>
				{#if socialLinks.length > 0}
					<div class="mt-5 flex gap-x-3">
						{#each socialLinks as social}
							<a
								href={social.href}
								class="inline-flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-primary dark:hover:text-primary"
								aria-label={social.label}
							>
								<social.icon class="size-4 shrink-0" />
							</a>
						{/each}
					</div>
				{/if}
			</div>
			<!-- End Brand -->

			<!-- Links -->
			{#each columns as column}
				<div>
					<h4 class="mb-4 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
						{column.title}
					</h4>
					<div class="space-y-3">
						{#each column.links as link}
							<p>
								<a
									class="inline-flex gap-x-2 text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
									href={link.href}
								>
									{link.text}
								</a>
							</p>
						{/each}
					</div>
				</div>
			{/each}
			<!-- End Links -->
		</div>

		<!-- Bottom -->
		<div class="mt-10 border-t border-gray-200 pt-8 dark:border-neutral-700">
			<p class="text-sm text-muted-foreground">
				© {currentYear} {copyrightText || brandName}. All rights reserved.
			</p>
		</div>
		<!-- End Bottom -->
	</div>
</footer>
<!-- End Footer -->

