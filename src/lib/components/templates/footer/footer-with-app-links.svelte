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

	interface FooterWithAppLinksProps {
		brandName?: string;
		brandDescription?: string;
		columns?: FooterColumn[];
		socialLinks?: SocialLink[];
		appStoreLink?: string;
		googlePlayLink?: string;
		copyrightText?: string;
	}

	const DEFAULTS = getTemplateDefaults('footer-with-app-links') || {};

	let {
		brandName = DEFAULTS.brandName,
		brandDescription = DEFAULTS.brandDescription,
		columns = DEFAULTS.columns || [],
		socialLinks = DEFAULTS.socialLinks || [],
		appStoreLink = DEFAULTS.appStoreLink,
		googlePlayLink = DEFAULTS.googlePlayLink,
		copyrightText = DEFAULTS.copyrightText
	}: FooterWithAppLinksProps = $props();

	const currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<footer class="border-t border-gray-200 bg-white dark:border-neutral-700 dark:bg-primary">
	<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="sm:col-span-2">
				<a class="flex text-xl font-semibold text-foreground" href="/">
					{brandName}
				</a>
				<p class="mt-3 text-sm text-muted-foreground">
					{brandDescription}
				</p>
				{#if appStoreLink || googlePlayLink}
					<div class="mt-5 flex gap-3">
						{#if appStoreLink}
							<a href={appStoreLink} class="inline-block">
								<img
									class="h-10 w-auto"
									src="https://placehold.co/120x40/000/FFF?text=App+Store"
									alt="Download on App Store"
								/>
							</a>
						{/if}
						{#if googlePlayLink}
							<a href={googlePlayLink} class="inline-block">
								<img
									class="h-10 w-auto"
									src="https://placehold.co/135x40/000/FFF?text=Google+Play"
									alt="Get it on Google Play"
								/>
							</a>
						{/if}
					</div>
				{/if}
			</div>
			<!-- End Brand -->

			<!-- Links -->
			{#each columns as column}
				<div>
					<h4 class="mb-3 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
						{column.title}
					</h4>
					<div class="space-y-3">
						{#each column.links as link}
							<p>
								<a
									class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
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
		<div class="mt-10 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-neutral-700">
			<p class="text-sm text-muted-foreground">
				© {currentYear} {copyrightText || brandName}. All rights reserved.
			</p>
			{#if socialLinks.length > 0}
				<div class="flex gap-x-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							class="inline-flex text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
							aria-label={social.label}
						>
							<social.icon class="size-5 shrink-0" />
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<!-- End Bottom -->
	</div>
</footer>
<!-- End Footer -->

