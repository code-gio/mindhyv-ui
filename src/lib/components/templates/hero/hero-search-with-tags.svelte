<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Search } from '@lucide/svelte/icons';
	import { getTemplateDefaults } from '../template-registry';

	interface CategoryTag {
		label: string;
		icon: string;
		href: string;
	}

	interface HeroSearchWithTagsProps {
		title?: string;
		description?: string;
		searchPlaceholder?: string;
		categories?: CategoryTag[];
		onSearch?: (query: string) => void;
		onCategoryClick?: (category: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-search-with-tags') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		searchPlaceholder = DEFAULTS.searchPlaceholder,
		categories = DEFAULTS.categories,
		onSearch,
		onCategoryClick
	}: HeroSearchWithTagsProps = $props();

	let searchQuery = $state('');

	function handleSearch(e: Event) {
		e.preventDefault();
		onSearch?.(searchQuery);
	}
</script>

<div class="relative overflow-hidden">
	<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 sm:py-24 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl font-bold text-foreground sm:text-6xl">
				{title}
			</h1>

			<p class="mt-3 text-muted-foreground">
				{description}
			</p>

			<div class="relative mx-auto mt-7 max-w-xl sm:mt-12">
				<!-- Form -->
				<form onsubmit={handleSearch}>
					<div
						class="relative z-10 flex gap-x-3 rounded-lg border border-border bg-background p-3 shadow-lg shadow-gray-100 dark:shadow-gray-900/20"
					>
						<div class="w-full">
							<Label for="search" class="sr-only">Search article</Label>
							<Input
								type="text"
								id="search"
								bind:value={searchQuery}
								placeholder={searchPlaceholder}
								class="border-transparent focus:border-ring dark:border-transparent"
							/>
						</div>
						<div>
							<Button type="submit" class="size-11 justify-center p-0">
								<Search class="size-5 shrink-0" />
							</Button>
						</div>
					</div>
				</form>
				<!-- End Form -->

				<!-- SVG Element -->
				<div class="absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block">
					<svg
						class="h-auto w-16 text-primary"
						width="121"
						height="135"
						viewBox="0 0 121 135"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
							stroke="currentColor"
							stroke-width="10"
							stroke-linecap="round"
						/>
						<path
							d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
							stroke="currentColor"
							stroke-width="10"
							stroke-linecap="round"
						/>
						<path
							d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
							stroke="currentColor"
							stroke-width="10"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<!-- End SVG Element -->

				<!-- SVG Element -->
				<div class="absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block">
					<svg
						class="h-auto w-40 text-accent"
						width="347"
						height="188"
						viewBox="0 0 347 188"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
							stroke="currentColor"
							stroke-width="7"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<!-- End SVG Element -->
			</div>

			<div class="mt-10 sm:mt-20">
				{#each categories as category}
					<Button
						variant="outline"
						href={category.href}
						onclick={() => onCategoryClick?.(category.label)}
						class="m-1 gap-x-2"
					>
						<div class="size-4 shrink-0">
							{@html category.icon}
						</div>
						{category.label}
					</Button>
				{/each}
			</div>
		</div>
	</div>
</div>
