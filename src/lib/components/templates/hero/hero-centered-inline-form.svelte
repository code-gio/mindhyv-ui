<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getTemplateDefaults } from '../template-registry';

	interface AvatarData {
		url: string;
		alt: string;
	}

	interface FormData {
		name: string;
		email: string;
	}

	interface HeroCenteredInlineFormProps {
		subtitle?: string;
		title?: string;
		highlightText?: string;
		avatars?: AvatarData[];
		totalUsers?: string;
		trustPilotTitle?: string;
		trustPilotDescription?: string;
		ctaText?: string;
		ctaHref?: string;
		onSubmit?: (data: FormData) => void;
	}

	const DEFAULTS = getTemplateDefaults('hero-centered-inline-form') || {};

	let {
		subtitle = DEFAULTS.subtitle,
		title = DEFAULTS.title,
		highlightText = DEFAULTS.highlightText,
		avatars = DEFAULTS.avatars,
		totalUsers = DEFAULTS.totalUsers,
		trustPilotTitle = DEFAULTS.trustPilotTitle,
		trustPilotDescription = DEFAULTS.trustPilotDescription,
		ctaText = DEFAULTS.ctaText,
		ctaHref = DEFAULTS.ctaHref,
		onSubmit
	}: HeroCenteredInlineFormProps = $props();

	let formData = $state({
		name: '',
		email: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit?.(formData);
	}
</script>

<div class="overflow-hidden">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="relative mx-auto grid max-w-4xl space-y-5 sm:space-y-10">
			<!-- Title -->
			<div class="text-center">
				<p class="mb-3 text-xs font-semibold text-muted-foreground uppercase">
					{subtitle}
				</p>
				<h1 class="text-3xl font-bold text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
					{title} <span class="text-primary">{highlightText}</span>
				</h1>
			</div>
			<!-- End Title -->

			<!-- Avatar Group -->
			<div class="text-center sm:flex sm:items-center sm:justify-center sm:text-start">
				<div class="shrink-0 pb-5 sm:flex sm:pe-5 sm:pb-0">
					<!-- Avatar Group -->
					<div class="flex justify-center -space-x-3">
						{#each avatars as avatar}
							<img
								class="inline-block size-8 rounded-full ring-2 ring-background"
								src={avatar.url}
								alt={avatar.alt}
							/>
						{/each}
						<span
							class="inline-flex size-8 items-center justify-center rounded-full bg-neutral-800 ring-2 ring-background dark:bg-primary"
						>
							<span class="text-xs font-medium text-primary-foreground uppercase">{totalUsers}</span>
						</span>
					</div>
					<!-- End Avatar Group -->
				</div>

				<div
					class="mx-auto h-px w-32 border-t border-border sm:mx-0 sm:h-full sm:w-auto sm:border-s sm:border-t-0"
				></div>

				<div class="pt-5 sm:ps-5 sm:pt-0">
					<div class="text-lg font-semibold text-foreground">{trustPilotTitle}</div>
					<div class="text-sm text-muted-foreground">{trustPilotDescription}</div>
				</div>
			</div>
			<!-- End Avatar Group -->

			<!-- Form -->
			<form onsubmit={handleSubmit}>
				<div
					class="mx-auto max-w-2xl rounded-lg border border-border bg-background p-3 shadow-lg shadow-gray-100 sm:flex sm:space-x-3 dark:shadow-gray-900/20"
				>
					<div class="w-full pb-2 sm:pb-0">
						<Label for="name" class="sr-only">Your name</Label>
						<Input
							type="text"
							id="name"
							bind:value={formData.name}
							placeholder="Your name"
							class="border-transparent focus:border-ring dark:border-transparent"
							required
						/>
					</div>
					<div class="w-full border-t border-border pt-2 sm:border-s sm:border-t-0 sm:ps-3 sm:pt-0">
						<Label for="email" class="sr-only">Your email address</Label>
						<Input
							type="email"
							id="email"
							bind:value={formData.email}
							placeholder="Your email address"
							class="border-transparent focus:border-ring dark:border-transparent"
							required
						/>
					</div>
					<div class="grid pt-2 whitespace-nowrap sm:block sm:pt-0">
						<Button type="submit" href={ctaHref} class="w-full justify-center">
							{ctaText}
						</Button>
					</div>
				</div>
			</form>
			<!-- End Form -->

			<!-- SVG Element -->
			<div
				class="absolute start-0 top-1/2 hidden -translate-x-40 -translate-y-1/2 transform md:block lg:-translate-x-80"
				aria-hidden="true"
			>
				<svg
					class="h-auto w-52"
					width="717"
					height="653"
					viewBox="0 0 717 653"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
						fill="currentColor"
						class="fill-foreground"
					/>
					<path
						d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
						fill="currentColor"
						class="fill-accent"
					/>
				</svg>
			</div>
			<!-- End SVG Element -->

			<!-- SVG Element -->
			<div
				class="absolute end-0 top-1/2 hidden translate-x-40 -translate-y-1/2 transform md:block lg:translate-x-80"
				aria-hidden="true"
			>
				<svg
					class="h-auto w-72"
					width="1115"
					height="636"
					viewBox="0 0 1115 636"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
						fill="currentColor"
						class="fill-primary"
					/>
					<path
						d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
						fill="currentColor"
						class="fill-accent"
					/>
				</svg>
			</div>
			<!-- End SVG Element -->
		</div>
	</div>
</div>
