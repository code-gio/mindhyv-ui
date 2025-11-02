/**
 * Rating and Review Utilities
 * Helpers for working with ratings, reviews, and star displays
 */

export type StarType = 'full' | 'half' | 'empty';

/**
 * Format rating for display
 */
export const formatRating = (rating: number, decimals = 1): string => {
	return rating.toFixed(decimals);
};

/**
 * Get rating as percentage (out of 5)
 */
export const getRatingPercentage = (rating: number, maxRating = 5): number => {
	return (rating / maxRating) * 100;
};

/**
 * Generate array of star types for rendering
 */
export const generateStarArray = (rating: number): StarType[] => {
	const stars: StarType[] = [];
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	// Add full stars
	for (let i = 0; i < fullStars; i++) {
		stars.push('full');
	}

	// Add half star if needed
	if (hasHalfStar) {
		stars.push('half');
	}

	// Add empty stars
	for (let i = 0; i < emptyStars; i++) {
		stars.push('empty');
	}

	return stars;
};

/**
 * Validate rating is within valid range
 */
export const isValidRating = (rating: number, min = 0, max = 5): boolean => {
	return rating >= min && rating <= max;
};

/**
 * Format review count for display (e.g., 12000 → "12k")
 */
export const formatReviewCount = (count: number): string => {
	if (count >= 1000000) {
		return `${(count / 1000000).toFixed(1)}M`;
	}
	if (count >= 1000) {
		return `${(count / 1000).toFixed(1)}k`;
	}
	return count.toString();
};

/**
 * Parse review count string back to number (e.g., "12k" → 12000)
 */
export const parseReviewCount = (countStr: string): number => {
	const match = countStr.match(/^([\d.]+)([kKmM])?$/);
	if (!match) return 0;

	const num = parseFloat(match[1]);
	const suffix = match[2]?.toLowerCase();

	if (suffix === 'k') return Math.floor(num * 1000);
	if (suffix === 'm') return Math.floor(num * 1000000);
	return Math.floor(num);
};

/**
 * Aggregate multiple ratings into average
 */
export const aggregateRatings = (
	ratings: number[]
): { average: number; total: number; distribution: Record<number, number> } => {
	if (ratings.length === 0) {
		return { average: 0, total: 0, distribution: {} };
	}

	const sum = ratings.reduce((acc, rating) => acc + rating, 0);
	const average = sum / ratings.length;

	// Calculate distribution (count of each rating)
	const distribution: Record<number, number> = {};
	for (let i = 1; i <= 5; i++) {
		distribution[i] = ratings.filter((r) => Math.floor(r) === i).length;
	}

	return {
		average: Math.round(average * 10) / 10,
		total: ratings.length,
		distribution
	};
};

/**
 * Format review date relative to now
 */
export const formatReviewDate = (date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffSeconds = Math.floor(diffMs / 1000);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);
	const diffWeeks = Math.floor(diffDays / 7);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);

	if (diffSeconds < 60) return 'just now';
	if (diffMinutes < 60) return `${diffMinutes}m ago`;
	if (diffHours < 24) return `${diffHours}h ago`;
	if (diffDays < 7) return `${diffDays}d ago`;
	if (diffWeeks < 4) return `${diffWeeks}w ago`;
	if (diffMonths < 12) return `${diffMonths}mo ago`;
	return `${diffYears}y ago`;
};

/**
 * Sort reviews by different criteria
 */
export const sortReviews = <T extends { rating?: number; date?: Date; helpful?: number }>(
	reviews: T[],
	by: 'date' | 'rating' | 'helpful' = 'date'
): T[] => {
	return [...reviews].sort((a, b) => {
		switch (by) {
			case 'rating':
				return (b.rating || 0) - (a.rating || 0);
			case 'helpful':
				return (b.helpful || 0) - (a.helpful || 0);
			case 'date':
			default:
				return (b.date?.getTime() || 0) - (a.date?.getTime() || 0);
		}
	});
};

/**
 * Filter reviews by minimum rating
 */
export const filterByMinRating = <T extends { rating?: number }>(
	reviews: T[],
	minRating: number
): T[] => {
	return reviews.filter((review) => (review.rating || 0) >= minRating);
};

/**
 * Get rating color class based on rating value
 */
export const getRatingColorClass = (rating: number): string => {
	if (rating >= 4.5) return 'text-green-600 dark:text-green-400';
	if (rating >= 4.0) return 'text-blue-600 dark:text-blue-400';
	if (rating >= 3.0) return 'text-yellow-600 dark:text-yellow-400';
	if (rating >= 2.0) return 'text-orange-600 dark:text-orange-400';
	return 'text-red-600 dark:text-red-400';
};

/**
 * Get rating label/description
 */
export const getRatingLabel = (rating: number): string => {
	if (rating >= 4.5) return 'Excellent';
	if (rating >= 4.0) return 'Very Good';
	if (rating >= 3.0) return 'Good';
	if (rating >= 2.0) return 'Fair';
	return 'Poor';
};

