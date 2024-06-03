import { LanguageSelector } from '@/features/language-selector'
import React from 'react'
import styles from './styles.module.css'
import { Watch } from '@/features/watch'

class Layout extends React.Component<{ children: React.ReactNode }> {
	render(): React.ReactNode {
		return (
			<div>
				<header className={styles.header}>
					<img src='/piggy.png' alt='piggy image' />
					<Watch />
					<LanguageSelector />
				</header>
				<main>{this.props.children}</main>
			</div>
		)
	}
}

export { Layout }
