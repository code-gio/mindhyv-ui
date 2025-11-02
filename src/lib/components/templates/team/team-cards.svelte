<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { getTemplateDefaults } from '../template-registry';

	interface SocialLink {
		platform: string;
		url: string;
		icon: string;
	}

	interface TeamMember {
		name: string;
		title: string;
		bio?: string;
		imageUrl: string;
		socials?: SocialLink[];
	}

	interface TeamCardsProps {
		title?: string;
		description?: string;
		members?: TeamMember[];
	}

	const DEFAULTS = getTemplateDefaults('team-cards') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		members = DEFAULTS.members
	}: TeamCardsProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each members as member}
			<Card class="text-center">
				<CardContent class="p-6">
					<img
						class="mx-auto size-24 rounded-lg object-cover"
						src={member.imageUrl}
						alt={member.name}
					/>

					<div class="mt-4">
						<h3 class="font-semibold text-foreground">
							{member.name}
						</h3>
						<p class="mt-1 text-sm text-muted-foreground">
							{member.title}
						</p>
						{#if member.bio}
							<p class="mt-3 text-sm text-muted-foreground">
								{member.bio}
							</p>
						{/if}
					</div>

					{#if member.socials && member.socials.length > 0}
						<div class="mt-4 flex justify-center gap-2">
							{#each member.socials as social}
								<Button
									variant="ghost"
									size="icon"
									href={social.url}
									class="size-auto rounded-full p-0 text-muted-foreground hover:text-foreground"
								>
									<div class="size-4 shrink-0">
										{@html social.icon}
									</div>
									<span class="sr-only">{social.platform}</span>
								</Button>
							{/each}
						</div>
					{/if}
				</CardContent>
			</Card>
		{/each}
	</div>
	<!-- End Grid -->
</div>
