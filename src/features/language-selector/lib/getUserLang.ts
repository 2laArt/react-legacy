import { LangType } from '@/entities/reviews'

export function getUserLang(): LangType {
	if (navigator.languages != undefined)
		return navigator.languages[0].split('-')[0] as LangType
	return 'en'
}
