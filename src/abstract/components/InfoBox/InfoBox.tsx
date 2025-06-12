import React from "react"

type ArrowPosition = "left" | "right" | "top" | "bottom"

interface InfoBoxProps {
	arrowPosition?: ArrowPosition
	arrowOffset?: string
	children: React.ReactNode
}

const InfoBox: React.FC<InfoBoxProps> = ({
	arrowPosition = "right",
	arrowOffset = 0,
	children,
}) => {
	const isVertical = arrowPosition === "left" || arrowPosition === "right"

	const offsetStyle = isVertical
		? { top: `calc(${arrowOffset} * var(--scale-factor))` }
		: { left: `calc(${arrowOffset} * var(--scale-factor))` }

	const getArrowTransform = () => {
		switch (arrowPosition) {
			case "left":
				return "rotate-180"
			case "top":
				return "rotate-270"
			case "bottom":
				return "rotate-90"
			default:
				return ""
		}
	}

	const getArrowPositionClass = () => {
		switch (arrowPosition) {
			case "left":
				return "sc-left-[-6px]"
			case "right":
				return "sc-right-[-6px]"
			case "top":
				return "sc-top-[-9px]"
			case "bottom":
				return "sc-bottom-[-9px]"
			default:
				return ""
		}
	}

	return (
		<div className="relative z-10 w-fit rounded-lg border border-[#D8D8D8] bg-white">
			<div
				className={`absolute ${getArrowPositionClass()} sc-w-[6px] sc-h-[10px]`}
				style={offsetStyle}
			>
				<svg
					className={`h-full w-full ${getArrowTransform()}`}
					viewBox="0 0 6 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0L6 5L0 10V0Z" fill="#151515" />
				</svg>
			</div>

			{children}
		</div>
	)
}

export default InfoBox
