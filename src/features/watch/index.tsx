import React from 'react'
import { formatDate } from './lib'

export const Watch: React.FC = () => {
	const [watch, setWatch] = React.useState<string>(formatDate())
	const watchColor = `hsl(${36 * +(watch.at(-1) ?? 1)} 100% 50%)`
	React.useEffect(() => {
		const timer = setInterval(() => setWatch(formatDate()), 1000)
		return () => clearInterval(timer)
	}, [])
	return (
		<div
			style={{
				color: watchColor,
			}}
		>
			{watch}
		</div>
	)
}
