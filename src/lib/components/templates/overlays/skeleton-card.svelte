<script lang="ts">
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface SkeletonCardProps {
		count?: number;
	}

	const DEFAULTS = getTemplateDefaults('skeleton-card') || {};

	let { count = DEFAULTS.count || 3 }: SkeletonCardProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each Array(count) as _, i}
			<Card>
				<CardHeader>
					<Skeleton class="h-4 w-3/4" />
				</CardHeader>
				<CardContent class="space-y-2">
					<Skeleton class="h-3 w-full" />
					<Skeleton class="h-3 w-5/6" />
				</CardContent>
			</Card>
		{/each}
	</div>
</div>

