<script lang="ts">
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
		imageUrl: string;
		socials: SocialLink[];
	}

	interface TeamGridWithSocialsProps {
		title?: string;
		description?: string;
		members?: TeamMember[];
	}

	const DEFAULTS = getTemplateDefaults('team-grid-with-socials') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		members = DEFAULTS.members
	}: TeamGridWithSocialsProps = $props();
</script>

<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3">
		{#each members as member}
			<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
				<img class="size-20 rounded-lg" src={member.imageUrl} alt={member.name} />

				<div class="grow">
					<div>
						<h3 class="font-medium text-foreground">
							{member.name}
						</h3>
						<p class="mt-1 text-xs text-muted-foreground uppercase">
							{member.title}
						</p>
					</div>

					<!-- Social Brands -->
					<div class="mt-2 space-x-2.5 sm:mt-auto">
						{#each member.socials as social}
							<Button
								variant="ghost"
								size="icon"
								href={social.url}
								class="size-auto rounded-full p-0 text-muted-foreground hover:text-foreground focus:text-foreground"
							>
								<div class="size-3.5 shrink-0">
									{@html social.icon}
								</div>
								<span class="sr-only">{social.platform}</span>
							</Button>
						{/each}
					</div>
					<!-- End Social Brands -->
				</div>
			</div>
			<!-- End Col -->
		{/each}
	</div>
	<!-- End Grid -->
</div>
