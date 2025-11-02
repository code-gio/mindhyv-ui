<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface CookieBannerProps {
		visible?: boolean;
		onAccept?: () => void;
		onDecline?: () => void;
	}

	const DEFAULTS = getTemplateDefaults('cookie-banner') || {};

	let {
		visible = DEFAULTS.visible || false,
		onAccept = DEFAULTS.onAccept,
		onDecline = DEFAULTS.onDecline
	}: CookieBannerProps = $props();
</script>

{#if visible}
	<div class="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg">
		<div class="mx-auto flex max-w-340 flex-col items-center justify-between gap-4 sm:flex-row">
			<p class="text-sm text-muted-foreground">
				We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
			</p>
			<div class="flex gap-2">
				<Button variant="outline" size="sm" onclick={onDecline}>Decline</Button>
				<Button size="sm" onclick={onAccept}>Accept</Button>
			</div>
		</div>
	</div>
{/if}

