<script lang="ts">
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Search } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
	}

	interface TableWithSearchProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
		searchPlaceholder?: string;
	}

	const DEFAULTS = getTemplateDefaults('table-with-search') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || [],
		searchPlaceholder = DEFAULTS.searchPlaceholder
	}: TableWithSearchProps = $props();

	let searchQuery = $state('');
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		<CardHeader class="flex flex-row items-center justify-between">
			{#if title}
				<CardTitle>{title}</CardTitle>
			{/if}
			<div class="relative w-full max-w-sm">
				<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
					<Search class="size-4 text-muted-foreground" />
				</div>
				<Input
					type="search"
					placeholder={searchPlaceholder}
					class="ps-10"
					bind:value={searchQuery}
				/>
			</div>
		</CardHeader>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						{#each columns as column}
							<TableHead>{column.label}</TableHead>
						{/each}
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data as row}
						<TableRow>
							{#each columns as column}
								<TableCell>{row[column.key]}</TableCell>
							{/each}
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
