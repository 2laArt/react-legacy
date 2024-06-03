import React from 'react'
import { connect } from 'react-redux'
import styles from './styles/index.module.css'

import { LangType, setLang, SetLangType } from '@/entities/reviews'
import { RootState } from '@/app/store'

interface IProps {
	langs: LangType[]
	userLang: LangType
	setLang: SetLangType
}

class CLanguageSelector extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
	}
	selectLang = (e: React.ChangeEvent<HTMLSelectElement>) =>
		this.props.setLang(e.target.value as LangType)

	render(): React.ReactNode {
		return (
			<select
				className={styles.lang_selector}
				name={this.props.userLang}
				onChange={this.selectLang}
			>
				{this.props.langs.map(el => (
					<option value={el} key={el}>
						{el}
					</option>
				))}
			</select>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	langs: state.reviewsReducer.langs,
	userLang: state.reviewsReducer.userLang,
})

const mapDispatchToProps = {
	setLang,
}

const LanguageSelector = connect(
	mapStateToProps,
	mapDispatchToProps
)(CLanguageSelector)
export { LanguageSelector }
