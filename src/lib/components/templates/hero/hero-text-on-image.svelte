<script lang="ts">
	import { cn } from '../utils';
	import { getTemplateDefaults } from '../template-registry';

	interface HeroTextOnImageProps {
		title?: string;
		backgroundImage?: string;
		textPosition?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'center';
		maxTextWidth?: string;
		containerPadding?: string;
		roundedCorners?: boolean;
	}

	// Get defaults from template registry (single source of truth)
	const DEFAULTS = getTemplateDefaults('hero-text-on-image') || {};

let {
	title = DEFAULTS.title,
	backgroundImage = DEFAULTS.backgroundImage,
	textPosition = DEFAULTS.textPosition ?? 'bottom-left',
	maxTextWidth = DEFAULTS.maxTextWidth,
	containerPadding = DEFAULTS.containerPadding,
	roundedCorners = DEFAULTS.roundedCorners
	}: HeroTextOnImageProps = $props();

	// Derived position classes
	const positionClasses = $derived(() => {
		const positions = {
			'bottom-left': 'items-start justify-end',
			'bottom-right': 'items-end justify-end',
			'top-left': 'items-start justify-start',
			'top-right': 'items-end justify-start',
			center: 'items-center justify-center'
		};
		return positions[textPosition] || positions['bottom-left'];
	});

	// Derived padding classes based on position
	const paddingClasses = $derived(() => {
		const paddings = {
			'bottom-left': 'ps-5 pb-5 md:ps-10 md:pb-10',
			'bottom-right': 'pe-5 pb-5 md:pe-10 md:pb-10',
			'top-left': 'ps-5 pt-5 md:ps-10 md:pt-10',
			'top-right': 'pe-5 pt-5 md:pe-10 md:pt-10',
			center: 'p-5 md:p-10'
		};
		return paddings[textPosition] || paddings['bottom-left'];
	});

	// Derived text alignment based on position
	const textAlignmentClasses = $derived(() => {
		const alignments = {
			'bottom-left': 'text-left',
			'bottom-right': 'text-right',
			'top-left': 'text-left',
			'top-right': 'text-right',
			center: 'text-center'
		};
		return alignments[textPosition] || alignments['bottom-left'];
	});
</script>

<!-- Hero -->
<div class={cn('px-4 sm:px-6 lg:px-8', containerPadding)}>
	<div
		class={cn(
			'flex h-120 flex-col bg-cover bg-center bg-no-repeat md:h-[80dvh]',
			roundedCorners && 'rounded-2xl',
			positionClasses()
		)}
		style={`background-image: url('${backgroundImage}');`}
		role="img"
		aria-label={title}
	>
		<div class={cn(paddingClasses(), maxTextWidth)}>
			<h1 class={cn('text-xl text-primary-foreground md:text-3xl lg:text-5xl', textAlignmentClasses())}>
				{title}
			</h1>
		</div>
	</div>
</div>
<!-- End Hero -->
