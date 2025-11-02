<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Users, DollarSign, Activity, TrendingUp, Settings } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface Stat {
		title: string;
		value: string;
		change: string;
		icon: any;
	}

	interface AdminDashboardProps {
		stats?: Stat[];
	}

	const DEFAULTS = getTemplateDefaults('admin-dashboard') || {};

	let {
		stats = DEFAULTS.stats || []
	}: AdminDashboardProps = $props();
</script>

<div class="flex h-screen bg-gray-100 dark:bg-primary">
	<!-- Sidebar -->
	<aside class="w-64 border-r border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
		<div class="flex h-16 items-center border-b border-gray-200 px-6 dark:border-neutral-700">
			<span class="text-xl font-bold text-foreground">Admin</span>
		</div>
		<nav class="p-4">
			<ul class="space-y-1">
				<li>
					<a href="#" class="flex items-center gap-x-3 rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
						<Activity class="size-5" />
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" class="flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent dark:text-neutral-300 dark:hover:bg-neutral-700">
						<Users class="size-5" />
						Users
					</a>
				</li>
				<li>
					<a href="#" class="flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-accent dark:text-neutral-300 dark:hover:bg-neutral-700">
						<Settings class="size-5" />
						Settings
					</a>
				</li>
			</ul>
		</nav>
	</aside>

	<!-- Main -->
	<div class="flex-1 overflow-auto">
		<header class="h-16 border-b border-gray-200 bg-white px-6 dark:border-neutral-700 dark:bg-neutral-800">
			<div class="flex h-full items-center justify-between">
				<h1 class="text-2xl font-semibold text-foreground">Dashboard</h1>
				<Button>
					<Settings class="mr-2 size-4" />
					Settings
				</Button>
			</div>
		</header>
		<main class="p-6">
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each stats as stat}
					<Card>
						<CardHeader class="flex flex-row items-center justify-between pb-2">
							<CardTitle class="text-sm font-medium">{stat.title}</CardTitle>
							<stat.icon class="size-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div class="text-2xl font-bold">{stat.value}</div>
							<p class="text-xs text-muted-foreground">{stat.change}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</main>
	</div>
</div>

