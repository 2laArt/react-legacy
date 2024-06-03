import React from 'react'
import styles from './styles.module.css'
import { IReview } from '@/entities/reviews'

class Review extends React.Component<IReview> {
	render(): React.ReactNode {
		return (
			<div className={styles.review}>
				<h6>
					<span>{this.props.name}</span> <span>{this.props.date}</span>
				</h6>
				<p>{this.props.review}</p>
			</div>
		)
	}
}
export { Review }
