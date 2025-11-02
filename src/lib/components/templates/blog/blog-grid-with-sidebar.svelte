<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BlogPost {
		imageSrc: string;
		imageAlt: string;
		category: string;
		title: string;
		excerpt: string;
		author: {
			name: string;
			avatarUrl: string;
			avatarFallback: string;
		};
		date: string;
		readTime?: string;
		linkHref: string;
	}

	interface SidebarItem {
		title: string;
		linkHref: string;
	}

	interface BlogGridWithSidebarProps {
		posts?: BlogPost[];
		sidebarTitle?: string;
		sidebarItems?: SidebarItem[];
	}

	const DEFAULTS = getTemplateDefaults('blog-grid-with-sidebar') || {};

	let {
		posts = DEFAULTS.posts || [],
		sidebarTitle = DEFAULTS.sidebarTitle,
		sidebarItems = DEFAULTS.sidebarItems || []
	}: BlogGridWithSidebarProps = $props();
</script>

<!-- Blog Grid with Sidebar -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-10 lg:grid-cols-4 lg:gap-y-16">
		<!-- Blog Posts -->
		<div class="lg:col-span-3">
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each posts as post}
					<a class="group block" href={post.linkHref}>
						<Card class="h-full shadow-sm transition group-hover:shadow-md">
							<div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-t-xl">
								<img
									class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
									src={post.imageSrc}
									alt={post.imageAlt}
								/>
							</div>
							<CardContent class="p-4">
								<span class="mb-1 block text-xs font-semibold uppercase text-primary">
									{post.category}
								</span>
								<h3 class="text-xl font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
									{post.title}
								</h3>
								<p class="mt-2 text-muted-foreground">
									{post.excerpt}
								</p>
							</CardContent>
						</Card>
					</a>
				{/each}
			</div>
		</div>
		<!-- End Blog Posts -->

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<div class="sticky top-4">
				{#if sidebarTitle}
					<h3 class="mb-4 text-lg font-semibold text-foreground">
						{sidebarTitle}
					</h3>
				{/if}
				<ul class="space-y-3">
					{#each sidebarItems as item}
						<li>
							<a
								class="inline-flex items-center gap-x-2 text-gray-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
								href={item.linkHref}
							>
								<ChevronRight class="size-4 shrink-0" />
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>
<!-- End Blog Grid with Sidebar -->

