import reviewsReducer from '@/entities/reviews/reducer'
import { loadReviews } from '@/features/language-selector/lib/loadReviews'
import { combineReducers, legacy_createStore } from 'redux'

const rootReducer = combineReducers({
	reviewsReducer,
})

const preloadedState = {
	reviewsReducer: loadReviews(),
} as unknown as Partial<{
	reviewsReducer: never
}>
const store = legacy_createStore(rootReducer, preloadedState)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
