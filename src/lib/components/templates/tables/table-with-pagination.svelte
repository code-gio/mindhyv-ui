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
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface TableColumn {
		key: string;
		label: string;
	}

	interface TableWithPaginationProps {
		title?: string;
		columns?: TableColumn[];
		data?: Record<string, any>[];
		currentPage?: number;
		totalPages?: number;
	}

	const DEFAULTS = getTemplateDefaults('table-with-pagination') || {};

	let {
		title = DEFAULTS.title,
		columns = DEFAULTS.columns || [],
		data = DEFAULTS.data || [],
		currentPage = DEFAULTS.currentPage || 1,
		totalPages = DEFAULTS.totalPages || 1
	}: TableWithPaginationProps = $props();
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
			<div
				class="flex items-center justify-between border-t border-gray-200 p-4 dark:border-neutral-700"
			>
				<p class="text-sm text-muted-foreground">
					Page {currentPage} of {totalPages}
				</p>
				<div class="flex gap-x-2">
					<Button variant="outline" size="sm" disabled={currentPage === 1}>
						<ChevronLeft class="size-4" />
						Previous
					</Button>
					<Button variant="outline" size="sm" disabled={currentPage === totalPages}>
						Next
						<ChevronRight class="size-4" />
					</Button>
				</div>
			</div>
		</CardContent>
	</Card>
</div>
