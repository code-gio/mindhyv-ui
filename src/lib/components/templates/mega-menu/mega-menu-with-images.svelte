<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu, X, ChevronDown } from '@lucide/svelte/icons';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface MenuItem {
		label: string;
		href: string;
		description?: string;
		icon?: typeof LucideIcon;
		imageSrc?: string;
	}

	interface MenuColumn {
		title: string;
		items: MenuItem[];
	}

	interface FeaturedItem {
		title: string;
		description: string;
		imageSrc: string;
		href: string;
	}

	interface MegaMenuWithImagesProps {
		brandName?: string;
		menuLabel?: string;
		columns?: MenuColumn[];
		featured?: FeaturedItem;
		ctaText?: string;
		ctaHref?: string;
	}

	const DEFAULTS = getTemplateDefaults('mega-menu-with-images') || {};

	let {
		brandName = DEFAULTS.brandName,
		menuLabel = DEFAULTS.menuLabel,
		columns = DEFAULTS.columns || [],
		featured = DEFAULTS.featured,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref
	}: MegaMenuWithImagesProps = $props();

	let menuOpen = $state(false);
	let mobileMenuOpen = $state(false);
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-semibold text-gray-900 dark:text-primary-foreground">{brandName}</a>

			<div class="hidden items-center gap-x-6 md:flex">
				<div class="relative">
					<button
						type="button"
						class="flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-primary-foreground"
						onmouseenter={() => (menuOpen = true)}
						onmouseleave={() => (menuOpen = false)}
					>
						{menuLabel}
						<ChevronDown class="size-4" />
					</button>

					{#if menuOpen}
						<div
							class="absolute start-0 top-full mt-2 w-screen max-w-5xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-primary"
							onmouseenter={() => (menuOpen = true)}
							onmouseleave={() => (menuOpen = false)}
						>
							<div class="grid gap-8 lg:grid-cols-4">
								<div class="lg:col-span-3">
									<div class="grid gap-8 sm:grid-cols-3">
										{#each columns as column}
											<div>
												<h3
													class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-primary-foreground"
												>
													{column.title}
												</h3>
												<div class="space-y-3">
													{#each column.items as item}
														<a
															href={item.href}
															class="flex gap-x-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-neutral-800"
														>
															{#if item.icon}
																<item.icon class="mt-0.5 size-5 shrink-0 text-primary" />
															{/if}
															<div>
																<p class="text-sm font-medium text-gray-900 dark:text-primary-foreground">
																	{item.label}
																</p>
																{#if item.description}
																	<p class="text-xs text-gray-600 dark:text-neutral-400">
																		{item.description}
																	</p>
																{/if}
															</div>
														</a>
													{/each}
												</div>
											</div>
										{/each}
									</div>
								</div>

								{#if featured}
									<div class="rounded-lg bg-gray-50 p-4 dark:bg-neutral-800">
										<a href={featured.href} class="block">
											<img
												class="mb-3 w-full rounded-lg"
												src={featured.imageSrc}
												alt={featured.title}
											/>
											<h4 class="mb-1 font-semibold text-gray-900 dark:text-primary-foreground">
												{featured.title}
											</h4>
											<p class="text-xs text-gray-600 dark:text-neutral-400">
												{featured.description}
											</p>
										</a>
									</div>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			</div>

			<div class="flex items-center gap-x-4">
				{#if ctaText}
					<Button href={ctaHref} class="hidden md:inline-flex">
						{ctaText}
					</Button>
				{/if}
				<button
					type="button"
					class="inline-flex md:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					{#if mobileMenuOpen}
						<X class="size-6" />
					{:else}
						<Menu class="size-6" />
					{/if}
				</button>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div class="border-t border-border py-4 md:hidden">
				<div class="space-y-4">
					{#each columns as column}
						<div>
							<h3 class="mb-2 text-xs font-semibold text-gray-500 uppercase dark:text-neutral-500">
								{column.title}
							</h3>
							{#each column.items as item}
								<a
									href={item.href}
									class="block py-2 text-sm text-gray-700 hover:text-gray-900 dark:text-neutral-300 dark:hover:text-primary-foreground"
								>
									{item.label}
								</a>
							{/each}
						</div>
					{/each}
					{#if ctaText}
						<Button href={ctaHref} class="w-full">
							{ctaText}
						</Button>
					{/if}
				</div>
			</div>
		{/if}
	</nav>
</header>
