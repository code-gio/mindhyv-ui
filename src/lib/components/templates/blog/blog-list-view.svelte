<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
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
		linkHref: string;
	}

	interface BlogListViewProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-list-view') || {};

	let { posts = DEFAULTS.posts || [] }: BlogListViewProps = $props();
</script>

<!-- Blog List -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="space-y-6">
		{#each posts as post}
			<a
				class="group flex flex-col gap-4 overflow-hidden rounded-xl sm:flex-row sm:items-center sm:gap-5"
				href={post.linkHref}
			>
				<div class="relative h-48 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-56 w-full">
					<img
						class="absolute inset-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
						src={post.imageSrc}
						alt={post.imageAlt}
					/>
				</div>

				<div class="grow">
					<Badge variant="secondary" class="mb-2">
						{post.category}
					</Badge>
					<h3
						class="text-xl font-semibold text-gray-800 group-hover:text-primary dark:text-neutral-300"
					>
						{post.title}
					</h3>
					<p class="mt-2 text-muted-foreground">
						{post.excerpt}
					</p>
					<div class="mt-4 flex items-center gap-x-3">
						<Avatar class="size-10">
							<AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
							<AvatarFallback>{post.author.avatarFallback}</AvatarFallback>
						</Avatar>
						<div class="grow">
							<h5 class="text-sm text-foreground">
								{post.author.name}
							</h5>
							<p class="text-xs text-muted-foreground">
								{post.date}
							</p>
						</div>
						<ChevronRight class="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
<!-- End Blog List -->

