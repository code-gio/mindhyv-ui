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
	import { ArrowUpDown } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
		sortable?: boolean;
	}

	interface TableWithSortingProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
	}

	const DEFAULTS = getTemplateDefaults('table-with-sorting') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || []
	}: TableWithSortingProps = $props();

	let sortKey = $state('');
	let sortDirection = $state<'asc' | 'desc'>('asc');

	function handleSort(key: string) {
		if (sortKey === key) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = key;
			sortDirection = 'asc';
		}
	}
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card>
		{#if title}
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
		{/if}
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						{#each columns as column}
							<TableHead>
								{#if column.sortable}
									<button
										type="button"
										class="flex items-center gap-x-2 hover:text-foreground"
										onclick={() => handleSort(column.key)}
									>
										{column.label}
										<ArrowUpDown class="size-4" />
									</button>
								{:else}
									{column.label}
								{/if}
							</TableHead>
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
