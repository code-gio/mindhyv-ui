<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getTemplateDefaults } from '../template-registry';

	interface FooterLink {
		text: string;
		href: string;
	}

	interface FooterColumn {
		title: string;
		links: FooterLink[];
	}

	interface FooterWithNewsletterProps {
		brandName?: string;
		brandDescription?: string;
		newsletterTitle?: string;
		newsletterDescription?: string;
		submitButtonText?: string;
		copyright?: string;
		columns?: FooterColumn[];
		onSubscribe?: (email: string) => void;
	}

	const DEFAULTS = getTemplateDefaults('footer-with-newsletter') || {};

	let {
		brandName = DEFAULTS.brandName,
		brandDescription = DEFAULTS.brandDescription,
		newsletterTitle = DEFAULTS.newsletterTitle,
		newsletterDescription = DEFAULTS.newsletterDescription,
		submitButtonText = DEFAULTS.submitButtonText,
		copyright = DEFAULTS.copyright,
		columns = DEFAULTS.columns,
		onSubscribe
	}: FooterWithNewsletterProps = $props();

	let email = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (email) {
			onSubscribe?.(email);
		}
	}
</script>

<footer class="bg-muted dark:bg-neutral-900">
	<div class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
		<!-- Grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div class="lg:col-span-1">
				<a
					class="flex-none text-xl font-semibold text-foreground focus:opacity-80 focus:outline-hidden"
					href="#"
					aria-label="Brand"
				>
					{brandName}
				</a>
				<p class="mt-3 text-sm text-muted-foreground">
					{brandDescription}
				</p>
			</div>

			{#each columns as column}
				<div>
					<h4 class="text-xs font-semibold text-foreground uppercase">{column.title}</h4>
					<div class="mt-3 grid space-y-3 text-sm">
						{#each column.links as link}
							<p>
								<a
									class="inline-flex gap-x-2 text-muted-foreground hover:text-foreground focus:text-foreground focus:outline-hidden"
									href={link.href}
								>
									{link.text}
								</a>
							</p>
						{/each}
					</div>
				</div>
			{/each}

			<div>
				<h4 class="text-sm font-semibold text-foreground uppercase">{newsletterTitle}</h4>
				<p class="mt-2 text-sm text-muted-foreground">{newsletterDescription}</p>

				<form onsubmit={handleSubmit} class="mt-4 flex flex-col gap-2">
					<Label for="email" class="sr-only">Email</Label>
					<Input
						type="email"
						id="email"
						bind:value={email}
						placeholder="Enter your email"
						required
					/>
					<Button type="submit" class="w-full justify-center">
						{submitButtonText}
					</Button>
				</form>
			</div>
		</div>
		<!-- End Grid -->

		<div class="mt-8 border-t border-border pt-8">
			<p class="text-sm text-muted-foreground">{copyright}</p>
		</div>
	</div>
</footer>
