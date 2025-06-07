import React from "react"

interface DashedBorderBoxProps {
	children: React.ReactNode
	className?: string
	viewBox: string
}

const DashedBorderBox: React.FC<DashedBorderBoxProps> = ({
	children,
	className = "",
	viewBox,
}) => {
	// Разбираем viewBox на составляющие
	const [, , width, height] = viewBox.split(" ").map(Number)

	// Фиксированные параметры
	const strokeWidth = 2
	const strokeDasharray = "12 12"
	const strokeLinecap = "round"
	const borderRadius = 20

	// Рассчитываем контрольные точки для скругления (0.55 дает более плавный изгиб)
	const controlOffset: number = Number((borderRadius * 0.55).toFixed(2))

	// Формируем путь со скруглением всех углов
	const pathData = `
    M${borderRadius},1
    H${width - borderRadius}
    C${width - controlOffset},1 ${width - 1},${controlOffset} ${width - 1},${borderRadius}
    V${height - borderRadius}
    C${width - 1},${height - controlOffset} ${width - controlOffset},${height - 1} ${width - borderRadius},${height - 1}
    H${borderRadius}
    C${controlOffset},${height - 1} 1,${height - controlOffset} 1,${height - borderRadius}
    V${borderRadius}
    C1,${controlOffset} ${controlOffset},1 ${borderRadius},1
    Z
  `
		.replace(/\s+/g, " ")
		.trim()

	return (
		<div
			style={{
				position: "relative",
				display: "inline-block",
				padding: strokeWidth,
				boxSizing: "border-box",
			}}
		>
			{/* Контент */}
			<div style={{ position: "relative", zIndex: 1 }} className={className}>
				{children}
			</div>

			{/* Адаптивная SVG обводка */}
			<svg
				viewBox={viewBox}
				preserveAspectRatio="none"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none",
					zIndex: -2,
				}}
			>
				<path
					d={pathData}
					stroke="#C8C8C8"
					strokeWidth={strokeWidth}
					strokeDasharray={strokeDasharray}
					strokeLinecap={strokeLinecap}
					fill="none"
				/>
			</svg>
		</div>
	)
}

export default DashedBorderBox
