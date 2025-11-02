<script lang="ts">
	import { ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface BlogPost {
		imageSrc: string;
		imageAlt: string;
		title: string;
		excerpt: string;
		linkText?: string;
		linkHref: string;
	}

	interface BlogHorizontalCardsProps {
		posts?: BlogPost[];
	}

	const DEFAULTS = getTemplateDefaults('blog-horizontal-cards') || {};

	let { posts = DEFAULTS.posts || [] }: BlogHorizontalCardsProps = $props();
</script>

<!-- Blog Cards -->
<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Grid -->
	<div class="grid gap-10 lg:grid-cols-2 lg:gap-y-16">
		{#each posts as post}
			<!-- Card -->
			<a
				class="group block overflow-hidden rounded-xl focus:outline-hidden"
				href={post.linkHref}
			>
				<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
					<div class="relative h-44 shrink-0 overflow-hidden rounded-xl sm:w-56 w-full">
						<img
							class="absolute inset-0 size-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
							src={post.imageSrc}
							alt={post.imageAlt}
						/>
					</div>

					<div class="grow">
						<h3
							class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-primary-foreground"
						>
							{post.title}
						</h3>
						<p class="mt-3 text-muted-foreground">
							{post.excerpt}
						</p>
						{#if post.linkText}
							<p
								class="mt-4 inline-flex items-center gap-x-1 text-sm font-medium text-primary decoration-2 group-hover:underline group-focus:underline"
							>
								{post.linkText}
								<ChevronRight class="size-4 shrink-0" />
							</p>
						{/if}
					</div>
				</div>
			</a>
			<!-- End Card -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
<!-- End Blog Cards -->

