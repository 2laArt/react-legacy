interface ICalculatePagesRange {
	totalCount: number
	pageSize: number
	siblingCount: number
	currentPage: number
}

const range = (start: number, end: number) => {
	const length = end - start + 1
	return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

export const calculatePagesRange = ({
	currentPage,
	pageSize,
	siblingCount,
	totalCount,
}: ICalculatePagesRange) => {
	const totalPageCount = Math.ceil(totalCount / pageSize)

	const itemCount = 2 + 2 * siblingCount
	const firstPageIndex = 1

	if (totalPageCount <= itemCount + 1) {
		return range(firstPageIndex, totalPageCount)
	}

	const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
	const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

	const shouldShowLeftDots = leftSiblingIndex > 2
	const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2

	const lastPageIndex = totalPageCount

	if (!shouldShowLeftDots && shouldShowRightDots) {
		const leftRange = range(1, itemCount)
		return [...leftRange, DOTS, totalPageCount]
	}

	if (shouldShowLeftDots && !shouldShowRightDots) {
		const rightRange = range(totalPageCount - itemCount + 1, totalPageCount)
		return [firstPageIndex, DOTS, ...rightRange]
	}

	if (shouldShowLeftDots && shouldShowRightDots) {
		const middleRange = range(leftSiblingIndex, rightSiblingIndex)
		return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
	}

	return []
}
