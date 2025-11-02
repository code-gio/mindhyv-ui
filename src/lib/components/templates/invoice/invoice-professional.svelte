<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Printer, Download, Mail, CreditCard } from '@lucide/svelte/icons';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface InvoiceItem {
		description: string;
		quantity: number;
		rate: number;
		amount: number;
	}

	interface InvoiceProfessionalProps {
		logo?: string;
		companyName?: string;
		invoiceNumber?: string;
		status?: 'paid' | 'pending' | 'overdue';
		issueDate?: string;
		dueDate?: string;
		from?: {
			name: string;
			address: string;
			city: string;
			zip: string;
			country: string;
			email: string;
			phone: string;
			website?: string;
		};
		to?: {
			name: string;
			address: string;
			city: string;
			zip: string;
			country: string;
			email: string;
			phone: string;
		};
		items?: InvoiceItem[];
		subtotal?: number;
		tax?: number;
		shipping?: number;
		total?: number;
		paymentTerms?: string;
		notes?: string;
		paymentButtonText?: string;
	}

	const DEFAULTS = getTemplateDefaults('invoice-professional') || {};

	let {
		logo = DEFAULTS.logo,
		companyName = DEFAULTS.companyName,
		invoiceNumber = DEFAULTS.invoiceNumber,
		status = DEFAULTS.status,
		issueDate = DEFAULTS.issueDate,
		dueDate = DEFAULTS.dueDate,
		from = DEFAULTS.from,
		to = DEFAULTS.to,
		items = DEFAULTS.items || [],
		subtotal = DEFAULTS.subtotal,
		tax = DEFAULTS.tax,
		shipping = DEFAULTS.shipping,
		total = DEFAULTS.total,
		paymentTerms = DEFAULTS.paymentTerms,
		notes = DEFAULTS.notes,
		paymentButtonText = DEFAULTS.paymentButtonText
	}: InvoiceProfessionalProps = $props();

	const statusVariants = {
		paid: 'default',
		pending: 'secondary',
		overdue: 'destructive'
	};
</script>

<div class="mx-auto max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<Card class="mx-auto max-w-5xl">
		<CardContent class="p-8 sm:p-12">
			<!-- Header -->
			<div class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
				<div class="flex flex-col gap-4">
					{#if logo}
						<img src={logo} alt={companyName} class="h-12" />
					{/if}
					<div>
						<h1 class="text-4xl font-bold text-foreground">INVOICE</h1>
						<p class="mt-1 text-muted-foreground">#{invoiceNumber}</p>
					</div>
				</div>
				<div class="flex flex-col items-end gap-3">
					{#if status}
						<Badge variant={statusVariants[status]} class="text-sm">
							{status.toUpperCase()}
						</Badge>
					{/if}
					<div class="flex gap-2">
						<Button variant="outline" size="sm">
							<Printer class="mr-2 size-4" />
							Print
						</Button>
						<Button variant="outline" size="sm">
							<Download class="mr-2 size-4" />
							Download
						</Button>
						<Button size="sm">
							<Mail class="mr-2 size-4" />
							Email
						</Button>
					</div>
				</div>
			</div>

			<!-- Company & Client Info -->
			<div class="mb-10 grid gap-8 sm:grid-cols-2">
				<div>
					<h3
						class="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-neutral-500"
					>
						From:
					</h3>
					<div class="space-y-1">
						<p class="text-base font-bold text-foreground">{from?.name}</p>
						<p class="text-sm text-muted-foreground">{from?.address}</p>
						<p class="text-sm text-muted-foreground">{from?.city}, {from?.zip}</p>
						<p class="text-sm text-muted-foreground">{from?.country}</p>
						<p class="text-sm text-muted-foreground">{from?.email}</p>
						<p class="text-sm text-muted-foreground">{from?.phone}</p>
						{#if from?.website}
							<p class="text-sm text-primary">{from.website}</p>
						{/if}
					</div>
				</div>
				<div>
					<h3
						class="mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-neutral-500"
					>
						Bill To:
					</h3>
					<div class="space-y-1">
						<p class="text-base font-bold text-foreground">{to?.name}</p>
						<p class="text-sm text-muted-foreground">{to?.address}</p>
						<p class="text-sm text-muted-foreground">{to?.city}, {to?.zip}</p>
						<p class="text-sm text-muted-foreground">{to?.country}</p>
						<p class="text-sm text-muted-foreground">{to?.email}</p>
						<p class="text-sm text-muted-foreground">{to?.phone}</p>
					</div>
				</div>
			</div>

			<!-- Invoice Details -->
			<div class="mb-8 grid gap-4 sm:grid-cols-2">
				<div>
					<span class="block text-xs text-gray-500 uppercase dark:text-neutral-500"
						>Issue Date:</span
					>
					<span class="mt-1 block text-sm font-medium text-foreground"
						>{issueDate}</span
					>
				</div>
				<div>
					<span class="block text-xs text-gray-500 uppercase dark:text-neutral-500">Due Date:</span>
					<span class="mt-1 block text-sm font-medium text-foreground"
						>{dueDate}</span
					>
				</div>
			</div>

			<!-- Items -->
			<div class="overflow-x-auto">
				<table class="min-w-full divide-y divide-border">
					<thead class="bg-muted">
						<tr>
							<th class="px-6 py-4 text-start text-xs font-medium text-gray-500 uppercase"
								>Description</th
							>
							<th class="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase"
								>Quantity</th
							>
							<th class="px-6 py-4 text-end text-xs font-medium text-gray-500 uppercase">Rate</th>
							<th class="px-6 py-4 text-end text-xs font-medium text-gray-500 uppercase">Amount</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each items as item}
							<tr>
								<td class="px-6 py-4 text-sm text-foreground"
									>{item.description}</td
								>
								<td class="px-6 py-4 text-center text-sm text-foreground"
									>{item.quantity}</td
								>
								<td class="px-6 py-4 text-end text-sm text-foreground"
									>${item.rate}</td
								>
								<td
									class="px-6 py-4 text-end text-sm font-medium text-foreground"
									>${item.amount}</td
								>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<!-- Totals -->
			<div class="mt-8 flex justify-end">
				<div class="w-full max-w-sm space-y-3">
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Subtotal:</span>
						<span class="text-foreground">${subtotal}</span>
					</div>
					{#if shipping}
						<div class="flex items-center justify-between text-sm">
							<span class="text-muted-foreground">Shipping:</span>
							<span class="text-foreground">${shipping}</span>
						</div>
					{/if}
					<div class="flex items-center justify-between text-sm">
						<span class="text-muted-foreground">Tax:</span>
						<span class="text-foreground">${tax}</span>
					</div>
					<div
						class="flex items-center justify-between border-t-2 border-gray-800 pt-3 text-xl font-bold dark:border-neutral-200"
					>
						<span class="text-foreground">Total:</span>
						<span class="text-foreground">${total}</span>
					</div>
				</div>
			</div>

			<!-- Payment Terms & Notes -->
			<div class="mt-10 space-y-4">
				{#if paymentTerms}
					<div>
						<h3 class="text-sm font-semibold text-foreground">Payment Terms:</h3>
						<p class="mt-1 text-sm text-muted-foreground">{paymentTerms}</p>
					</div>
				{/if}
				{#if notes}
					<div>
						<h3 class="text-sm font-semibold text-foreground">Notes:</h3>
						<p class="mt-1 text-sm text-muted-foreground">{notes}</p>
					</div>
				{/if}
			</div>

			<!-- Payment CTA -->
			{#if status === 'pending'}
				<div class="mt-8 rounded-lg bg-primary/5 p-6 text-center">
					<h3 class="mb-2 text-lg font-semibold text-foreground">Ready to pay?</h3>
					<p class="mb-4 text-sm text-muted-foreground">
						Click below to proceed with secure payment
					</p>
					<Button size="lg">
						<CreditCard class="mr-2 size-5" />
						{paymentButtonText || 'Pay Invoice'}
					</Button>
				</div>
			{/if}
		</CardContent>
	</Card>
</div>
