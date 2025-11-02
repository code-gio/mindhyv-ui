<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface SocialLink {
		icon: typeof LucideIcon;
		href: string;
		label: string;
	}

	interface ProfileCardProps {
		name: string;
		title: string;
		bio?: string;
		avatarUrl: string;
		avatarFallback: string;
		coverImage?: string;
		badges?: string[];
		socialLinks?: SocialLink[];
		stats?: { label: string; value: string }[];
	}

	const DEFAULTS = getTemplateDefaults('profile-card') || {};

	let {
		name = DEFAULTS.name,
		title = DEFAULTS.title,
		bio = DEFAULTS.bio,
		avatarUrl = DEFAULTS.avatarUrl,
		avatarFallback = DEFAULTS.avatarFallback,
		coverImage = DEFAULTS.coverImage,
		badges = DEFAULTS.badges || [],
		socialLinks = DEFAULTS.socialLinks || [],
		stats = DEFAULTS.stats || []
	}: ProfileCardProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-2xl overflow-hidden">
		{#if coverImage}
			<div class="h-48 overflow-hidden">
				<img class="size-full object-cover" src={coverImage} alt="Cover" />
			</div>
		{/if}
		<CardContent class="p-6">
			<div class="-mt-20 flex flex-col items-center text-center sm:-mt-16">
				<Avatar class="size-32 border-4 border-white dark:border-neutral-900">
					<AvatarImage src={avatarUrl} alt={name} />
					<AvatarFallback class="text-2xl">{avatarFallback}</AvatarFallback>
				</Avatar>
				<h1 class="mt-4 text-2xl font-bold text-foreground">
					{name}
				</h1>
				<p class="mt-1 text-muted-foreground">
					{title}
				</p>
				{#if bio}
					<p class="mt-4 text-sm text-muted-foreground">
						{bio}
					</p>
				{/if}
				{#if badges.length > 0}
					<div class="mt-4 flex flex-wrap justify-center gap-2">
						{#each badges as badge}
							<Badge variant="secondary">{badge}</Badge>
						{/each}
					</div>
				{/if}
				{#if stats.length > 0}
					<div class="mt-6 grid w-full grid-cols-3 gap-4">
						{#each stats as stat}
							<div>
								<div class="text-2xl font-bold text-foreground">
									{stat.value}
								</div>
								<p class="text-sm text-muted-foreground">
									{stat.label}
								</p>
							</div>
						{/each}
					</div>
				{/if}
				{#if socialLinks.length > 0}
					<div class="mt-6 flex gap-x-3">
						{#each socialLinks as social}
							<Button variant="outline" size="icon" href={social.href}>
								<social.icon class="size-4" />
							</Button>
						{/each}
					</div>
				{/if}
			</div>
		</CardContent>
	</Card>
</div>
