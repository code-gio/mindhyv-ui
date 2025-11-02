<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Download } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface InvoiceItem {
		description: string;
		quantity: number;
		price: number;
		total: number;
	}

	interface InvoiceMinimalProps {
		invoiceNumber?: string;
		date?: string;
		from?: { name: string; email: string };
		to?: { name: string; email: string };
		items?: InvoiceItem[];
		total?: number;
	}

	const DEFAULTS = getTemplateDefaults('invoice-minimal') || {};

	let {
		invoiceNumber = DEFAULTS.invoiceNumber,
		date = DEFAULTS.date,
		from = DEFAULTS.from,
		to = DEFAULTS.to,
		items = DEFAULTS.items || [],
		total = DEFAULTS.total
	}: InvoiceMinimalProps = $props();
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl bg-white p-8 dark:bg-primary">
		<!-- Header -->
		<div class="mb-8 flex items-start justify-between">
			<div>
				<h1 class="text-2xl font-bold text-foreground">Invoice</h1>
				<p class="text-sm text-muted-foreground">#{invoiceNumber}</p>
			</div>
			<Button variant="ghost" size="icon">
				<Download class="size-4" />
			</Button>
		</div>

		<!-- Info -->
		<div class="mb-8 grid gap-4 sm:grid-cols-2">
			<div>
				<p class="text-xs uppercase text-muted-foreground">From</p>
				<p class="mt-1 text-sm font-medium text-foreground">{from?.name}</p>
				<p class="text-sm text-muted-foreground">{from?.email}</p>
			</div>
			<div>
				<p class="text-xs uppercase text-muted-foreground">To</p>
				<p class="mt-1 text-sm font-medium text-foreground">{to?.name}</p>
				<p class="text-sm text-muted-foreground">{to?.email}</p>
			</div>
		</div>

		<p class="mb-6 text-sm text-muted-foreground">
			Invoice Date: {date}
		</p>

		<!-- Items -->
		<table class="mb-6 w-full">
			<thead class="border-b border-border">
				<tr>
					<th class="pb-2 text-start text-xs font-medium uppercase text-muted-foreground">Description</th>
					<th class="pb-2 text-end text-xs font-medium uppercase text-muted-foreground">Qty</th>
					<th class="pb-2 text-end text-xs font-medium uppercase text-muted-foreground">Price</th>
					<th class="pb-2 text-end text-xs font-medium uppercase text-muted-foreground">Total</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-border">
				{#each items as item}
					<tr>
						<td class="py-3 text-sm text-foreground">{item.description}</td>
						<td class="py-3 text-end text-sm text-foreground">{item.quantity}</td>
						<td class="py-3 text-end text-sm text-foreground">${item.price}</td>
						<td class="py-3 text-end text-sm text-foreground">${item.total}</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<!-- Total -->
		<div class="flex justify-end">
			<div class="w-full max-w-xs space-y-2 border-t border-gray-200 pt-4 dark:border-neutral-700">
				<div class="flex items-center justify-between">
					<span class="text-lg font-bold text-foreground">Total:</span>
					<span class="text-lg font-bold text-foreground">${total}</span>
				</div>
			</div>
		</div>
	</div>
</div>

