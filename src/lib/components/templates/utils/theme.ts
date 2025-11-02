/**
 * Theme and Styling Utilities
 * Helpers for working with Mindhyv theme colors, Tailwind classes, and CSS styles
 */

/**
 * Conditional class name merger (like clsx/cn)
 * Combines class names and filters out falsy values
 */
export const cn = (...classes: (string | undefined | null | boolean)[]): string => {
	return classes.filter(Boolean).join(' ');
};

/**
 * Get Mindhyv theme color as CSS variable
 */
export const getThemeColor = (colorName: string): string => {
	return `var(--${colorName})`;
};

/**
 * Resolve color to actual CSS value
 * Handles CSS variables, hex, rgb, hsl
 */
export const resolveColor = (color: string): string => {
	if (color.startsWith('--')) {
		return `var(${color})`;
	}
	if (!color.startsWith('var(') && !color.startsWith('#') && !color.startsWith('rgb')) {
		return `var(--${color})`;
	}
	return color;
};

/**
 * Build spacing classes from configuration
 */
export const buildSpacingClasses = (config: {
	padding?: string;
	margin?: string;
	gap?: string;
}): string => {
	const classes: string[] = [];

	if (config.padding) classes.push(`p-${config.padding}`);
	if (config.margin) classes.push(`m-${config.margin}`);
	if (config.gap) classes.push(`gap-${config.gap}`);

	return classes.join(' ');
};

/**
 * Build grid classes
 */
export const buildGridClasses = (columns: number, gap = '4'): string => {
	return `grid grid-cols-1 md:grid-cols-${columns} gap-${gap}`;
};

/**
 * Build flex classes from configuration
 */
export const buildFlexClasses = (config: {
	direction?: 'row' | 'column';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	wrap?: boolean;
	gap?: string;
}): string => {
	const classes: string[] = ['flex'];

	if (config.direction) {
		classes.push(`flex-${config.direction}`);
	}

	if (config.justify) {
		classes.push(`justify-${config.justify}`);
	}

	if (config.align) {
		classes.push(`items-${config.align}`);
	}

	if (config.wrap) {
		classes.push('flex-wrap');
	}

	if (config.gap) {
		classes.push(`gap-${config.gap}`);
	}

	return classes.join(' ');
};

/**
 * Build inline styles from object
 */
export const buildInlineStyles = (styles: Record<string, string | number>): string => {
	return Object.entries(styles)
		.map(([key, value]) => {
			const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
			const cssValue = typeof value === 'number' ? `${value}px` : value;
			return `${cssKey}: ${cssValue}`;
		})
		.join('; ');
};

/**
 * Get gradient style
 */
export const getGradientStyle = (
	from: string,
	to: string,
	direction = 'to right'
): string => {
	return `linear-gradient(${direction}, ${resolveColor(from)}, ${resolveColor(to)})`;
};

/**
 * Get shadow classes by size
 */
export const getShadowClass = (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'): string => {
	return `shadow-${size}`;
};

/**
 * Get blur classes
 */
export const getBlurClass = (amount: 'sm' | 'md' | 'lg' | 'xl' = 'md'): string => {
	return `backdrop-blur-${amount}`;
};

/**
 * Hex to RGB conversion
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			}
		: null;
};

/**
 * RGB to Hex conversion
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
	return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
};

/**
 * Check if color is dark (simple luminance check)
 */
export const isDarkColor = (hex: string): boolean => {
	const rgb = hexToRgb(hex);
	if (!rgb) return false;

	// Calculate relative luminance
	const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
	return luminance < 0.5;
};

/**
 * Get contrasting text color (light or dark)
 */
export const getContrastColor = (backgroundColor: string): 'light' | 'dark' => {
	return isDarkColor(backgroundColor) ? 'light' : 'dark';
};

