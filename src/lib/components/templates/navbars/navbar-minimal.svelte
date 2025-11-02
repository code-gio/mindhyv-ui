<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface NavLink {
		label: string;
		href: string;
	}

	interface NavbarMinimalProps {
		brandName?: string;
		links?: NavLink[];
	}

	const DEFAULTS = getTemplateDefaults('navbar-minimal') || {};

	let { brandName = DEFAULTS.brandName, links = DEFAULTS.links || [] }: NavbarMinimalProps = $props();
</script>

<header class="border-b border-border bg-background">
	<nav class="mx-auto max-w-340 px-4 sm:px-6 lg:px-8">
		<div class="flex h-14 items-center justify-between">
			<a href="/" class="font-semibold text-foreground">{brandName}</a>
			<div class="flex items-center gap-x-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-sm text-muted-foreground hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>

