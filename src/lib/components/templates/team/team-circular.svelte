<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface TeamMember {
		name: string;
		title: string;
		imageUrl: string;
	}

	interface TeamCircularProps {
		title?: string;
		description?: string;
		members?: TeamMember[];
	}

	const DEFAULTS = getTemplateDefaults('team-circular') || {};

	let {
		title = DEFAULTS.title,
		description = DEFAULTS.description,
		members = DEFAULTS.members
	}: TeamCircularProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
		<p class="mt-1 text-muted-foreground">{description}</p>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
		{#each members as member}
			<div class="text-center">
				<img
					class="mx-auto size-24 rounded-full object-cover sm:size-28"
					src={member.imageUrl}
					alt={member.name}
				/>

				<div class="mt-4">
					<h3 class="font-medium text-foreground">
						{member.name}
					</h3>
					<p class="mt-1 text-sm text-muted-foreground">
						{member.title}
					</p>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Grid -->
</div>
