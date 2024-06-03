import { ISetLangAction, SET_LANG } from './actions'

import data from '@/shared/config/data.json'

type LangType = keyof typeof data

interface IReview {
	name: string
	review: string
	date: string
}
interface IReviewsStore {
	reviews: IReview[]
	langs: LangType[]
	userLang: LangType
}

const initialState = {} as IReviewsStore

const reviewsReducer = (
	state = initialState,
	{ payload, type }: ISetLangAction
): IReviewsStore => {
	switch (type) {
		case SET_LANG: {
			if (!data[payload]) return state
			const reviews = Object.values(data[payload])
			return {
				...state,
				userLang: payload,
				reviews,
			}
		}
		default:
			return state
	}
}

export type { IReview, IReviewsStore, LangType }
export default reviewsReducer
