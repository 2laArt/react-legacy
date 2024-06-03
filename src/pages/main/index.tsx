import { RootState } from '@/app/store'
import { connect } from 'react-redux'
import { Pagination } from '@/features/pagination'
import { Review } from '@/features/review'
import { Layout } from '@/widgets/layout'
import React from 'react'
import { IReview } from '@/entities/reviews'

const PAGE_SIZE = 10
interface IProps {
	reviews: IReview[]
}
interface IState {
	page: number
}
class CMain extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			page: 1,
		}
	}
	setPage = (page: number) => {
		this.setState({ page })
	}
	render(): React.ReactNode {
		const reviewsPage = this.props.reviews.slice(
			(this.state.page - 1) * PAGE_SIZE,
			this.state.page * PAGE_SIZE
		)
		return (
			<Layout>
				<Pagination
					setPage={this.setPage}
					initialPage={this.state.page}
					pageSize={PAGE_SIZE}
					totalCount={this.props.reviews.length}
				/>
				<ul>
					{reviewsPage.map((el, idx) => (
						<li key={idx}>
							<Review {...el} />
						</li>
					))}
				</ul>
			</Layout>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	reviews: state.reviewsReducer.reviews,
})

const Main = connect(mapStateToProps)(CMain)
export { Main }
