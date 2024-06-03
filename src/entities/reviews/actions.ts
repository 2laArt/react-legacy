import { LangType } from './reducer'

const SET_LANG = 'SET_LANG'

interface ISetLangAction {
	type: typeof SET_LANG
	payload: LangType
}
type SetLangType = (payload: LangType) => ISetLangAction
const setLang = (payload: LangType): ISetLangAction => ({
	type: SET_LANG,
	payload,
})

export { setLang, SET_LANG, type ISetLangAction, type SetLangType }
