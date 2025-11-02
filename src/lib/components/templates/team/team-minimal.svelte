<script lang="ts">
	import { getTemplateDefaults } from '../template-registry';

	interface TeamMember {
		name: string;
		title: string;
		imageUrl: string;
	}

	interface TeamMinimalProps {
		title?: string;
		members?: TeamMember[];
	}

	const DEFAULTS = getTemplateDefaults('team-minimal') || {};

	let { title = DEFAULTS.title, members = DEFAULTS.members }: TeamMinimalProps = $props();
</script>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<!-- Title -->
	<div class="mx-auto mb-10 max-w-2xl lg:mb-14">
		<h2 class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">{title}</h2>
	</div>
	<!-- End Title -->

	<!-- Grid -->
	<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each members as member}
			<div>
				<img class="w-full rounded-lg object-cover" src={member.imageUrl} alt={member.name} />

				<div class="mt-3">
					<h3 class="font-semibold text-foreground">
						{member.name}
					</h3>
					<p class="text-sm text-muted-foreground">
						{member.title}
					</p>
				</div>
			</div>
		{/each}
	</div>
	<!-- End Grid -->
</div>
