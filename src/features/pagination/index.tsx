import React from 'react'
import styles from './styles.module.css'
import { calculatePagesRange } from './lib/calculatePagesRange'

interface IPaginationProps {
	totalCount: number
	pageSize: number
	siblingCount?: number
	initialPage: number
	setPage: (arg: number) => void
}

interface IPaginationState {
	paginationRange: (number | string)[]
}

class Pagination extends React.Component<IPaginationProps, IPaginationState> {
	static defaultProps = {
		siblingCount: 1,
	}

	constructor(props: IPaginationProps) {
		super(props)
		this.state = {
			paginationRange: [],
		}
	}

	componentDidMount() {
		this.updatePaginationRange()
	}

	componentDidUpdate(prevProps: IPaginationProps) {
		if (
			prevProps.totalCount !== this.props.totalCount ||
			prevProps.pageSize !== this.props.pageSize ||
			prevProps.siblingCount !== this.props.siblingCount ||
			prevProps.initialPage !== this.props.initialPage
		) {
			this.updatePaginationRange()
		}
	}

	updatePaginationRange() {
		const { totalCount, pageSize, siblingCount = 1, initialPage } = this.props
		const paginationRange = calculatePagesRange({
			totalCount,
			pageSize,
			siblingCount,
			currentPage: initialPage,
		})
		this.setState({ paginationRange })
	}

	handlePageChange = (pageNumber: number | string) => {
		if (typeof pageNumber === 'number') {
			this.props.setPage(pageNumber)
		}
	}

	render() {
		const { paginationRange } = this.state

		return (
			<ul className={styles.pagination}>
				{paginationRange.map((pageNumber, index) => (
					<li key={index}>
						<button
							className={`pagination-item ${
								pageNumber === this.props.initialPage ? styles.active : ''
							}`}
							onClick={() => this.handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					</li>
				))}
			</ul>
		)
	}
}

export { Pagination }
