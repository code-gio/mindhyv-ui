<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import type { Icon as LucideIcon } from '@lucide/svelte';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface SocialLink {
		icon: typeof LucideIcon;
		href: string;
		label: string;
	}

	interface ProfileSimpleProps {
		name: string;
		title: string;
		bio?: string;
		avatarUrl: string;
		avatarFallback: string;
		socialLinks?: SocialLink[];
		primaryAction?: { text: string; href: string };
		secondaryAction?: { text: string; href: string };
	}

	const DEFAULTS = getTemplateDefaults('profile-simple') || {};

	let {
		name = DEFAULTS.name,
		title = DEFAULTS.title,
		bio = DEFAULTS.bio,
		avatarUrl = DEFAULTS.avatarUrl,
		avatarFallback = DEFAULTS.avatarFallback,
		socialLinks = DEFAULTS.socialLinks || [],
		primaryAction = DEFAULTS.primaryAction,
		secondaryAction = DEFAULTS.secondaryAction
	}: ProfileSimpleProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl text-center">
		<Avatar class="mx-auto size-32">
			<AvatarImage src={avatarUrl} alt={name} />
			<AvatarFallback class="text-2xl">{avatarFallback}</AvatarFallback>
		</Avatar>
		<h1 class="mt-6 text-3xl font-bold text-gray-800 sm:text-4xl dark:text-primary-foreground">
			{name}
		</h1>
		<p class="mt-2 text-lg text-muted-foreground">
			{title}
		</p>
		{#if bio}
			<p class="mx-auto mt-4 max-w-xl text-muted-foreground">
				{bio}
			</p>
		{/if}
		{#if socialLinks.length > 0}
			<div class="mt-6 flex justify-center gap-x-3">
				{#each socialLinks as social}
					<Button variant="outline" size="icon" href={social.href}>
						<social.icon class="size-5" />
					</Button>
				{/each}
			</div>
		{/if}
		{#if primaryAction || secondaryAction}
			<div class="mt-8 flex justify-center gap-3">
				{#if primaryAction}
					<Button href={primaryAction.href}>
						{primaryAction.text}
					</Button>
				{/if}
				{#if secondaryAction}
					<Button variant="outline" href={secondaryAction.href}>
						{secondaryAction.text}
					</Button>
				{/if}
			</div>
		{/if}
	</div>
</div>

