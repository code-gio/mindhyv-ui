<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';
	import type { Icon as LucideIcon } from '@lucide/svelte';

	interface FooterLink {
		text: string;
		href: string;
	}

	interface SocialLink {
		icon: typeof LucideIcon;
		href: string;
		label: string;
	}

	interface FooterSimpleLinksProps {
		brandName?: string;
		links?: FooterLink[];
		socialLinks?: SocialLink[];
		copyrightText?: string;
	}

	const DEFAULTS = getTemplateDefaults('footer-simple-links') || {};

	let {
		brandName = DEFAULTS.brandName,
		links = DEFAULTS.links || [],
		socialLinks = DEFAULTS.socialLinks || [],
		copyrightText = DEFAULTS.copyrightText
	}: FooterSimpleLinksProps = $props();

	const currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<footer class="border-t border-gray-200 bg-white dark:border-neutral-700 dark:bg-primary">
	<div class="mx-auto max-w-340 px-4 py-8 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<div class="flex items-center gap-x-6">
				<a class="text-xl font-semibold text-foreground" href="/">
					{brandName}
				</a>
				{#if links.length > 0}
					<div class="flex gap-x-4">
						{#each links as link}
							<a
								class="text-sm text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
								href={link.href}
							>
								{link.text}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<div class="flex items-center gap-x-4">
				<p class="text-sm text-muted-foreground">
					© {currentYear} {copyrightText || brandName}
				</p>
				{#if socialLinks.length > 0}
					<div class="flex gap-x-3">
						{#each socialLinks as social}
							<a
								href={social.href}
								class="inline-flex text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200"
								aria-label={social.label}
							>
								<social.icon class="size-4 shrink-0" />
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</footer>
<!-- End Footer -->

