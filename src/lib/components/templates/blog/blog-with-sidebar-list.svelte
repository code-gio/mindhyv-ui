<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
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
		linkHref: string;
	}

	interface BlogWithSidebarListProps {
		posts?: BlogPost[];
		sidebarTitle?: string;
		sidebarPosts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-with-sidebar-list') || {};

	let {
		posts = DEFAULTS.posts || [],
		sidebarTitle = DEFAULTS.sidebarTitle,
		sidebarPosts = DEFAULTS.sidebarPosts || []
	}: BlogWithSidebarListProps = $props();
</script>

<!-- Blog with Sidebar -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-10 lg:grid-cols-4 lg:gap-y-16">
		<!-- Posts -->
		<div class="lg:col-span-3">
			<div class="grid gap-6 sm:grid-cols-2">
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
								<Badge variant="secondary" class="mb-2">
									{post.category}
								</Badge>
								<h3 class="text-lg font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
									{post.title}
								</h3>
								<p class="mt-2 text-sm text-muted-foreground">
									{post.excerpt}
								</p>
								<div class="mt-4 flex items-center gap-x-3">
									<Avatar class="size-8">
										<AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
										<AvatarFallback>{post.author.avatarFallback}</AvatarFallback>
									</Avatar>
									<div class="grow">
										<h5 class="text-xs text-foreground">
											{post.author.name}
										</h5>
										<p class="text-xs text-muted-foreground">
											{post.date}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</a>
				{/each}
			</div>
		</div>
		<!-- End Posts -->

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<div class="sticky top-4">
				{#if sidebarTitle}
					<h3 class="mb-4 text-lg font-semibold text-foreground">
						{sidebarTitle}
					</h3>
				{/if}
				<div class="space-y-4">
					{#each sidebarPosts as post}
						<a class="group block" href={post.linkHref}>
							<div class="flex gap-3">
								<div class="shrink-0">
									<div class="aspect-square h-16 overflow-hidden rounded-lg">
										<img
											class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
											src={post.imageSrc}
											alt={post.imageAlt}
										/>
									</div>
								</div>
								<div class="grow">
									<h4 class="text-sm font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300">
										{post.title}
									</h4>
									<p class="mt-1 text-xs text-muted-foreground">
										{post.date}
									</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>
<!-- End Blog with Sidebar -->

