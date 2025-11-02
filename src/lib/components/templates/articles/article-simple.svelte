<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface ArticleSimpleProps {
		category?: string;
		title?: string;
		subtitle?: string;
		author?: {
			name: string;
			avatarUrl: string;
			avatarFallback: string;
		};
		date?: string;
		readTime?: string;
		coverImage?: string;
		coverImageAlt?: string;
		content?: string;
	}

	const DEFAULTS = getTemplateDefaults('article-simple') || {};

	let {
		category = DEFAULTS.category,
		title = DEFAULTS.title,
		subtitle = DEFAULTS.subtitle,
		author = DEFAULTS.author,
		date = DEFAULTS.date,
		readTime = DEFAULTS.readTime,
		coverImage = DEFAULTS.coverImage,
		coverImageAlt = DEFAULTS.coverImageAlt,
		content = DEFAULTS.content
	}: ArticleSimpleProps = $props();
</script>

<!-- Article -->
<div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Header -->
	<div class="mb-8 text-center">
		{#if category}
			<Badge variant="secondary" class="mb-4">
				{category}
			</Badge>
		{/if}
		<h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-primary-foreground">
			{title}
		</h1>
		{#if subtitle}
			<p class="mt-4 text-lg text-muted-foreground">
				{subtitle}
			</p>
		{/if}
	</div>

	<!-- Author -->
	{#if author}
		<div class="mb-8 flex items-center justify-center gap-x-4">
			<Avatar class="size-12">
				<AvatarImage src={author.avatarUrl} alt={author.name} />
				<AvatarFallback>{author.avatarFallback}</AvatarFallback>
			</Avatar>
			<div>
				<p class="font-semibold text-foreground">
					{author.name}
				</p>
				<p class="text-sm text-muted-foreground">
					{date}
					{#if readTime}· {readTime}{/if}
				</p>
			</div>
		</div>
	{/if}

	<!-- Cover Image -->
	{#if coverImage}
		<div class="mb-10">
			<img class="w-full rounded-xl object-cover" src={coverImage} alt={coverImageAlt} />
		</div>
	{/if}

	<!-- Content -->
	<div class="prose prose-lg max-w-none dark:prose-invert">
		{@html content}
	</div>
</div>
<!-- End Article -->

