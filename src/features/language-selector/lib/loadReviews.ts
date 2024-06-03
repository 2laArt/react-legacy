import { IReview, IReviewsStore } from '@/entities/reviews'
import { getUserLang } from './getUserLang'
import data from '@/shared/config/data.json'
export const loadReviews = () => {
	const userLang = getUserLang()
	const reviews = Object.values(data[userLang] ?? data['en']) as IReview[]
	return {
		langs: Object.keys(data),
		userLang,
		reviews,
	} as IReviewsStore
}
