export const formatDate = () => {
	const date = new Date()
	const hours = formatDateTime(date.getHours())
	const minutes = formatDateTime(date.getMinutes())
	const seconds = formatDateTime(date.getSeconds())

	return `${hours}: ${minutes}: ${seconds}`
}
const formatDateTime = (num: number) => (num < 10 ? `0${num}` : `${num}`)
