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

	interface FooterDarkBgProps {
		brandName?: string;
		brandDescription?: string;
		columns?: FooterColumn[];
		socialLinks?: SocialLink[];
		copyrightText?: string;
	}

	const DEFAULTS = getTemplateDefaults('footer-dark-bg') || {};

	let {
		brandName = DEFAULTS.brandName,
		brandDescription = DEFAULTS.brandDescription,
		columns = DEFAULTS.columns || [],
		socialLinks = DEFAULTS.socialLinks || [],
		copyrightText = DEFAULTS.copyrightText
	}: FooterDarkBgProps = $props();

	const currentYear = new Date().getFullYear();
</script>

<!-- Footer -->
<footer class="bg-primary">
	<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="sm:col-span-2">
				<a class="mb-3 inline-block text-xl font-semibold text-primary-foreground" href="/">
					{brandName}
				</a>
				<p class="text-sm text-muted-foreground">
					{brandDescription}
				</p>
			</div>
			<!-- End Brand -->

			<!-- Links -->
			{#each columns as column}
				<div>
					<h4 class="mb-4 text-xs font-semibold uppercase text-gray-100">
						{column.title}
					</h4>
					<div class="space-y-3">
						{#each column.links as link}
							<p>
								<a
									class="inline-flex gap-x-2 text-sm text-muted-foreground hover:text-gray-200"
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
		<div class="mt-10 flex items-center justify-between border-t border-neutral-700 pt-8">
			<p class="text-sm text-gray-500">
				© {currentYear} {copyrightText || brandName}. All rights reserved.
			</p>
			{#if socialLinks.length > 0}
				<div class="flex gap-x-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							class="inline-flex text-gray-500 hover:text-gray-200"
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

