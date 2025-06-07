import React from "react"

interface VerticalDashedLineProps {
	height?: number | string // Можно передать как число (пиксели), так и строку ('100%')
	strokeColor?: string
	strokeWidth?: number
	strokeDasharray?: string
	strokeLinecap?: "butt" | "round" | "square"
	className?: string
}

const VerticalDashedLine: React.FC<VerticalDashedLineProps> = ({
	height = 100,
	strokeColor = "#C8C8C8",
	strokeWidth = 2,
	strokeDasharray = "12 12",
	strokeLinecap = "round",
	className = "",
}) => {
	// Преобразуем height в строку с px, если передано число

	return (
		<div
			className={className}
			style={{
				display: "inline-flex",
				justifyContent: "center",
				width: `${strokeWidth}px`,
			}}
		>
			<svg
				width={strokeWidth}
				height="100%"
				viewBox={`0 0 ${strokeWidth} ${height}`}
				preserveAspectRatio="none"
			>
				<line
					x1={strokeWidth / 2}
					y1="0"
					x2={strokeWidth / 2}
					y2={height}
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					strokeDasharray={strokeDasharray}
					strokeLinecap={strokeLinecap}
				/>
			</svg>
		</div>
	)
}

export default VerticalDashedLine
